#!/usr/bin/env tsx
/**
 * add-photos.ts — Ajoute des photos à la galerie SANS supprimer l'existant.
 * 1. Lit les métadonnées EXIF (date, appareil)
 * 2. Compresse à 4000px max, JPEG qualité 90
 * 3. Upload sur Cloudinary (dossier paysage/, jamais d'écrasement)
 * 4. Crée les fichiers .md à la suite des photos existantes
 *
 * Les photos déjà présentes (même slug) sont ignorées.
 *
 * Usage : npx tsx scripts/add-photos.ts --inbox "~/Documents/photo inbox" [--dry-run]
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

const MAX_WIDTH = 4000;
const JPEG_QUALITY = 90;
const GALLERY = 'paysage';
const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const GALLERY_DIR = path.join(PROJECT_ROOT, 'src', 'content', 'galeries', GALLERY);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function slugify(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getMaxDisplayOrder(): number {
  let max = 0;
  for (const f of fs.readdirSync(GALLERY_DIR).filter((f) => f.endsWith('.md'))) {
    const match = fs.readFileSync(path.join(GALLERY_DIR, f), 'utf8').match(/^display_order:\s*(\d+)/m);
    if (match) max = Math.max(max, Number(match[1]));
  }
  return max;
}

async function readExif(exif: Buffer | undefined): Promise<{ date?: string; camera?: string }> {
  if (!exif) return {};
  try {
    const exifReader = await import('exif-reader');
    const data = exifReader.default(exif);
    const d = data.Photo?.DateTimeOriginal ?? data.Image?.DateTime;
    const date = d instanceof Date ? d.toISOString().split('T')[0] : undefined;
    let camera = data.Image?.Model ? String(data.Image.Model).trim() : undefined;
    const make = data.Image?.Make ? String(data.Image.Make).trim() : '';
    if (camera && make && !camera.toLowerCase().startsWith(make.toLowerCase())) camera = `${make} ${camera}`;
    return { date, camera };
  } catch {
    return {};
  }
}

function uploadToCloudinary(buffer: Buffer, slug: string): Promise<string> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: GALLERY, public_id: slug, resource_type: 'image', overwrite: false, format: 'jpg' },
      (error, result) => (error ? reject(error) : resolve(result!.public_id)),
    ).end(buffer);
  });
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const inboxIdx = args.indexOf('--inbox');
  if (inboxIdx === -1 || !args[inboxIdx + 1]) {
    console.error('Usage: npx tsx scripts/add-photos.ts --inbox "/path/to/inbox" [--dry-run]');
    process.exit(1);
  }
  let inboxPath = args[inboxIdx + 1];
  if (inboxPath.startsWith('~')) inboxPath = inboxPath.replace('~', process.env.HOME ?? '');
  inboxPath = path.resolve(inboxPath);
  if (!fs.existsSync(inboxPath)) {
    console.error(`Dossier introuvable : ${inboxPath}`);
    process.exit(1);
  }

  const files = fs.readdirSync(inboxPath)
    .filter((f) => /\.(jpe?g|png|tiff?|webp)$/i.test(f))
    .sort();

  let order = getMaxDisplayOrder();
  console.log(`\n📷 ${files.length} photos trouvées — dernier display_order existant : ${order}${dryRun ? ' (dry-run)' : ''}\n`);

  let added = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(inboxPath, file);
    const name = path.basename(file, path.extname(file));
    const slug = slugify(name);
    const mdPath = path.join(GALLERY_DIR, `${slug}.md`);

    if (fs.existsSync(mdPath)) {
      console.log(`  ↷ ${slug} — déjà dans la galerie, ignorée`);
      skipped++;
      continue;
    }

    try {
      const metadata = await sharp(filePath).metadata();
      // Dimensions après auto-rotation EXIF (orientation 5-8 = rotation 90°)
      const rotated = (metadata.orientation ?? 1) >= 5;
      const w = (rotated ? metadata.height : metadata.width) ?? 0;
      const h = (rotated ? metadata.width : metadata.height) ?? 0;
      const orientation = w > h * 1.1 ? 'landscape' : h > w * 1.1 ? 'portrait' : 'square';
      const aspectRatio = orientation === 'landscape' ? '3:2' : orientation === 'portrait' ? '2:3' : '1:1';
      const { date, camera } = await readExif(metadata.exif);

      process.stdout.write(`  ${slug} — ${w}×${h} ${orientation}`);

      let cloudinaryId = `${GALLERY}/${slug}`;
      if (!dryRun) {
        const buffer = await sharp(filePath).rotate()
          .resize(MAX_WIDTH, MAX_WIDTH, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
          .toBuffer();
        process.stdout.write(` → ${(buffer.length / 1024 / 1024).toFixed(1)}Mo → upload...`);
        cloudinaryId = await uploadToCloudinary(buffer, slug);
      }

      order++;
      const title = name.toUpperCase();
      const frontmatter = [
        '---',
        `title: "${title}"`,
        `slug: ${slug}`,
        `cloudinary_id: ${cloudinaryId}`,
        `gallery: ${GALLERY}`,
        ...(date ? [`date: ${date}`] : []),
        ...(camera ? [`camera: "${camera}"`] : []),
        `orientation: ${orientation}`,
        `aspect_ratio: "${aspectRatio}"`,
        `focal_point: auto`,
        `grid_size: normal`,
        `display_order: ${order}`,
        `printable: true`,
        `alt: "Photographie de paysage — ${title}"`,
        '---',
      ].join('\n');

      if (!dryRun) fs.writeFileSync(mdPath, frontmatter + '\n');
      process.stdout.write(` ✓ (ordre ${order})\n`);
      added++;
    } catch (err: any) {
      process.stdout.write(` ✗ ${err.message ?? err}\n`);
      errors++;
    }
  }

  console.log(`\n✅ ${added} ajoutée(s), ${skipped} ignorée(s), ${errors} erreur(s).`);
}

main().catch((err) => {
  console.error('Erreur:', err);
  process.exit(1);
});
