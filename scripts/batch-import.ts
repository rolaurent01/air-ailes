#!/usr/bin/env tsx
/**
 * batch-import.ts — Import automatique de toutes les photos d'un inbox.
 * Classification auto : macro si les deux dimensions < 4500px et ratio proche de 1:1,
 * ou si le fichier fait < 2Mo (souvent des crops/macros), sinon paysage.
 *
 * Usage: npx tsx scripts/batch-import.ts --inbox "/path/to/inbox"
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

const MAX_WIDTH = 4000;
const JPEG_QUALITY = 90;
const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'src', 'content', 'galeries');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function slugify(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function main() {
  const args = process.argv.slice(2);
  const inboxIdx = args.indexOf('--inbox');
  let inboxPath = args[inboxIdx + 1] ?? '';
  if (inboxPath.startsWith('~')) inboxPath = inboxPath.replace('~', process.env.HOME ?? '');
  inboxPath = path.resolve(inboxPath);

  const files = fs.readdirSync(inboxPath)
    .filter((f) => /\.(jpg|jpeg)$/i.test(f))
    .map((f) => path.join(inboxPath, f))
    .sort();

  console.log(`\n📷 ${files.length} photos à importer\n`);

  // Clean existing content
  for (const gallery of ['paysage', 'macro']) {
    const dir = path.join(CONTENT_DIR, gallery);
    fs.mkdirSync(dir, { recursive: true });
    fs.readdirSync(dir).filter(f => f.endsWith('.md')).forEach(f => fs.unlinkSync(path.join(dir, f)));
  }

  let paysageOrder = 1;
  let macroOrder = 1;
  let errors = 0;

  for (let i = 0; i < files.length; i++) {
    const filePath = files[i];
    const fileName = path.basename(filePath, path.extname(filePath));
    const stats = fs.statSync(filePath);
    const metadata = await sharp(filePath).metadata();
    const w = metadata.width ?? 0;
    const h = metadata.height ?? 0;
    const sizeMB = stats.size / 1024 / 1024;

    // EXIF
    let date = '';
    let camera = '';
    if (metadata.exif) {
      try {
        const exifReader = await import('exif-reader');
        const exifData = exifReader.default(metadata.exif);
        if (exifData.Photo?.DateTimeOriginal instanceof Date)
          date = exifData.Photo.DateTimeOriginal.toISOString().split('T')[0];
        else if (exifData.Image?.DateTime instanceof Date)
          date = exifData.Image.DateTime.toISOString().split('T')[0];
        if (exifData.Image?.Model) camera = String(exifData.Image.Model).trim();
        if (exifData.Image?.Make && camera) {
          const make = String(exifData.Image.Make).trim();
          if (!camera.toLowerCase().startsWith(make.toLowerCase())) camera = `${make} ${camera}`;
        }
      } catch {}
    }

    // Auto-classify: macro if small crop or close ratio, paysage otherwise
    const ratio = Math.max(w, h) / Math.min(w, h);
    const isMacro = (sizeMB < 2 && Math.max(w, h) < 4500) || (ratio < 1.2 && sizeMB < 5);
    const gallery = isMacro ? 'macro' : 'paysage';

    const slug = slugify(fileName);
    const orientation = w > h * 1.1 ? 'landscape' : h > w * 1.1 ? 'portrait' : 'square';
    const aspectRatio = orientation === 'landscape' ? '3:2' : orientation === 'portrait' ? '2:3' : '1:1';

    process.stdout.write(`[${i + 1}/${files.length}] ${fileName} → ${gallery} — compress...`);

    // Compress
    let buffer: Buffer;
    try {
      let pipeline = sharp(filePath).rotate();
      if (w > MAX_WIDTH || h > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, MAX_WIDTH, { fit: 'inside', withoutEnlargement: true });
      }
      buffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    } catch (err: any) {
      process.stdout.write(` ✗ compress error: ${err.message}\n`);
      errors++;
      continue;
    }

    const compressedMB = (buffer.length / 1024 / 1024).toFixed(1);
    process.stdout.write(` ${compressedMB}Mo → upload...`);

    // Upload
    let publicId: string;
    try {
      publicId = await new Promise<string>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: gallery, public_id: slug, resource_type: 'image', overwrite: true, format: 'jpg' },
          (err, result) => err ? reject(err) : resolve(result!.public_id)
        );
        stream.end(buffer);
      });
      process.stdout.write(` ✓\n`);
    } catch (err: any) {
      process.stdout.write(` ✗ upload error: ${err.message}\n`);
      errors++;
      continue;
    }

    // Create .md
    const order = gallery === 'paysage' ? paysageOrder++ : macroOrder++;
    const title = fileName.replace(/[-_]/g, ' ');
    const alt = gallery === 'paysage' ? `Photographie de paysage — ${title}` : `Macro photographie — ${title}`;

    const md = [
      '---',
      `title: "${title}"`,
      `slug: ${slug}`,
      `cloudinary_id: ${publicId}`,
      `gallery: ${gallery}`,
      ...(date ? [`date: ${date}`] : []),
      ...(camera ? [`camera: "${camera}"`] : []),
      `orientation: ${orientation}`,
      `aspect_ratio: "${aspectRatio}"`,
      `focal_point: auto`,
      `grid_size: normal`,
      `display_order: ${order}`,
      `printable: true`,
      `alt: "${alt}"`,
      '---',
    ].join('\n');

    fs.writeFileSync(path.join(CONTENT_DIR, gallery, `${slug}.md`), md + '\n');
  }

  console.log(`\n✅ Import terminé !`);
  console.log(`   Paysage : ${paysageOrder - 1} photos`);
  console.log(`   Macro   : ${macroOrder - 1} photos`);
  if (errors) console.log(`   Erreurs : ${errors}`);
  console.log(`\n→ npm run build pour vérifier`);
}

main().catch((err) => { console.error('Erreur:', err); process.exit(1); });
