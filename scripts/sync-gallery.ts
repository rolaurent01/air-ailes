#!/usr/bin/env tsx
/**
 * sync-gallery.ts — Traite les photos depuis un dossier inbox :
 * 1. Lit les métadonnées EXIF
 * 2. Compresse à 4000px max, JPEG qualité 90
 * 3. Upload sur Cloudinary
 * 4. Crée les fichiers .md dans src/content/galeries/
 *
 * Usage : npx tsx scripts/sync-gallery.ts --inbox "~/Documents/photo inbox"
 */

import fs from 'node:fs';
import path from 'node:path';
import { createInterface } from 'node:readline';
import sharp from 'sharp';
import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

// --- Config ---
const MAX_WIDTH = 4000;
const JPEG_QUALITY = 90;
const PROJECT_ROOT = path.resolve(import.meta.dirname, '..');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'src', 'content', 'galeries');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// --- Types ---
interface PhotoInfo {
  filePath: string;
  fileName: string;
  width: number;
  height: number;
  orientation: 'landscape' | 'portrait' | 'square';
  date?: string;
  camera?: string;
  sizeMB: number;
}

interface ClassifiedPhoto extends PhotoInfo {
  gallery: 'paysage' | 'portrait';
  title: string;
  slug: string;
  cloudinaryId: string;
  alt: string;
}

// --- Helpers ---
const rl = createInterface({ input: process.stdin, output: process.stdout });

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function getPhotoInfo(filePath: string): Promise<PhotoInfo> {
  const stats = fs.statSync(filePath);
  const metadata = await sharp(filePath).metadata();

  let date: string | undefined;
  let camera: string | undefined;

  if (metadata.exif) {
    try {
      const exifReader = await import('exif-reader');
      const exifData = exifReader.default(metadata.exif);
      if (exifData.Photo?.DateTimeOriginal) {
        const d = exifData.Photo.DateTimeOriginal;
        if (d instanceof Date) date = d.toISOString().split('T')[0];
      } else if (exifData.Image?.DateTime) {
        const d = exifData.Image.DateTime;
        if (d instanceof Date) date = d.toISOString().split('T')[0];
      }
      if (exifData.Image?.Model) camera = String(exifData.Image.Model).trim();
      if (exifData.Image?.Make && camera) {
        const make = String(exifData.Image.Make).trim();
        if (!camera.toLowerCase().startsWith(make.toLowerCase())) {
          camera = `${make} ${camera}`;
        }
      }
    } catch {
      // EXIF parsing failed, continue without
    }
  }

  const w = metadata.width ?? 0;
  const h = metadata.height ?? 0;
  const orientation = w > h * 1.1 ? 'landscape' : h > w * 1.1 ? 'portrait' : 'square';

  return {
    filePath,
    fileName: path.basename(filePath),
    width: w,
    height: h,
    orientation,
    date,
    camera,
    sizeMB: Math.round(stats.size / 1024 / 1024 * 10) / 10,
  };
}

async function compressPhoto(info: PhotoInfo): Promise<Buffer> {
  let pipeline = sharp(info.filePath).rotate(); // auto-rotate based on EXIF

  if (info.width > MAX_WIDTH || info.height > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, MAX_WIDTH, { fit: 'inside', withoutEnlargement: true });
  }

  return pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
}

async function uploadToCloudinary(buffer: Buffer, folder: string, slug: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        public_id: slug,
        resource_type: 'image',
        overwrite: true,
        format: 'jpg',
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result!.public_id);
      }
    );
    uploadStream.end(buffer);
  });
}

function createMarkdownFile(photo: ClassifiedPhoto, displayOrder: number): void {
  const dir = path.join(CONTENT_DIR, photo.gallery);
  fs.mkdirSync(dir, { recursive: true });

  const aspectRatio = photo.width > photo.height ? '3:2' : photo.height > photo.width ? '2:3' : '1:1';

  const frontmatter = [
    '---',
    `title: "${photo.title}"`,
    `slug: ${photo.slug}`,
    `cloudinary_id: ${photo.cloudinaryId}`,
    `gallery: ${photo.gallery}`,
    ...(photo.date ? [`date: ${photo.date}`] : []),
    ...(photo.camera ? [`camera: "${photo.camera}"`] : []),
    `orientation: ${photo.orientation}`,
    `aspect_ratio: "${aspectRatio}"`,
    `focal_point: auto`,
    `grid_size: normal`,
    `display_order: ${displayOrder}`,
    `printable: true`,
    `alt: "${photo.alt}"`,
    '---',
  ].join('\n');

  const filePath = path.join(dir, `${photo.slug}.md`);
  fs.writeFileSync(filePath, frontmatter + '\n');
  console.log(`  ✓ Créé ${filePath.replace(PROJECT_ROOT, '')}`);
}

// --- Main ---
async function main() {
  // Parse args
  const args = process.argv.slice(2);
  const inboxIdx = args.indexOf('--inbox');
  if (inboxIdx === -1 || !args[inboxIdx + 1]) {
    console.error('Usage: npx tsx scripts/sync-gallery.ts --inbox "/path/to/inbox"');
    process.exit(1);
  }

  let inboxPath = args[inboxIdx + 1];
  if (inboxPath.startsWith('~')) {
    inboxPath = inboxPath.replace('~', process.env.HOME ?? '');
  }
  inboxPath = path.resolve(inboxPath);

  if (!fs.existsSync(inboxPath)) {
    console.error(`Dossier introuvable : ${inboxPath}`);
    process.exit(1);
  }

  // Find photos
  const files = fs.readdirSync(inboxPath)
    .filter((f) => /\.(jpg|jpeg)$/i.test(f))
    .map((f) => path.join(inboxPath, f))
    .sort();

  console.log(`\n📷 ${files.length} photos trouvées dans ${inboxPath}\n`);

  if (files.length === 0) {
    console.log('Aucune photo à traiter.');
    rl.close();
    return;
  }

  // Analyze all photos
  console.log('Analyse des métadonnées...\n');
  const photos: PhotoInfo[] = [];
  for (const file of files) {
    const info = await getPhotoInfo(file);
    photos.push(info);
    process.stdout.write(`  ${info.fileName} — ${info.width}×${info.height} (${info.orientation}) ${info.sizeMB}Mo${info.camera ? ` [${info.camera}]` : ''}${info.date ? ` ${info.date}` : ''}\n`);
  }

  console.log(`\n📊 Résumé :`);
  console.log(`   ${photos.filter((p) => p.orientation === 'landscape').length} paysage, ${photos.filter((p) => p.orientation === 'portrait').length} portrait, ${photos.filter((p) => p.orientation === 'square').length} carré`);
  console.log(`   Taille : ${Math.min(...photos.map((p) => p.sizeMB))} – ${Math.max(...photos.map((p) => p.sizeMB))} Mo\n`);

  // --- Interactive classification ---
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  CLASSEMENT INTERACTIF');
  console.log('  Pour chaque photo, indiquez :');
  console.log('  - La galerie : p = paysage, r = portrait, s = skip');
  console.log('  - Un titre (ou Entrée pour un titre auto)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const classified: ClassifiedPhoto[] = [];

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    console.log(`\n[${i + 1}/${photos.length}] ${photo.fileName}`);
    console.log(`  ${photo.width}×${photo.height} | ${photo.orientation} | ${photo.sizeMB}Mo${photo.camera ? ` | ${photo.camera}` : ''}${photo.date ? ` | ${photo.date}` : ''}`);

    const galleryChoice = await ask('  Galerie (p=paysage, r=portrait, s=skip) : ');

    if (galleryChoice.toLowerCase() === 's') {
      console.log('  → Ignoré');
      continue;
    }

    const gallery = galleryChoice.toLowerCase() === 'r' ? 'portrait' : 'paysage';

    const defaultTitle = photo.fileName.replace(/\.(jpg|jpeg)$/i, '').replace(/[-_]/g, ' ');
    const titleInput = await ask(`  Titre [${defaultTitle}] : `);
    const title = titleInput || defaultTitle;

    const slug = slugify(title);

    const defaultAlt = gallery === 'paysage'
      ? `Photographie de paysage — ${title}`
      : `Portrait — ${title}`;
    const altInput = await ask(`  Alt text [${defaultAlt}] : `);
    const alt = altInput || defaultAlt;

    classified.push({
      ...photo,
      gallery,
      title,
      slug,
      cloudinaryId: `${gallery}/${slug}`,
      alt,
    });

    console.log(`  → ${gallery}/${slug}`);
  }

  console.log(`\n\n📋 Récapitulatif : ${classified.length} photos à traiter`);
  console.log(`   Paysage : ${classified.filter((p) => p.gallery === 'paysage').length}`);
  console.log(`   Portrait : ${classified.filter((p) => p.gallery === 'portrait').length}\n`);

  const confirm = await ask('Lancer la compression et l\'upload ? (o/n) : ');
  if (confirm.toLowerCase() !== 'o') {
    console.log('Annulé.');
    rl.close();
    return;
  }

  // --- Remove old demo content ---
  console.log('\n🗑️  Suppression du contenu de démonstration...');
  for (const gallery of ['paysage', 'portrait']) {
    const dir = path.join(CONTENT_DIR, gallery);
    if (fs.existsSync(dir)) {
      const existing = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
      for (const file of existing) {
        fs.unlinkSync(path.join(dir, file));
        console.log(`  ✓ Supprimé ${gallery}/${file}`);
      }
    }
  }

  // --- Compress and upload ---
  console.log('\n🔄 Compression et upload sur Cloudinary...\n');

  const paysageOrder = { current: 1 };
  const portraitOrder = { current: 1 };

  for (let i = 0; i < classified.length; i++) {
    const photo = classified[i];
    const progress = `[${i + 1}/${classified.length}]`;

    process.stdout.write(`${progress} ${photo.slug} — compression...`);
    const buffer = await compressPhoto(photo);
    const compressedMB = Math.round(buffer.length / 1024 / 1024 * 10) / 10;
    process.stdout.write(` ${compressedMB}Mo → upload...`);

    try {
      const publicId = await uploadToCloudinary(buffer, photo.gallery, photo.slug);
      photo.cloudinaryId = publicId;
      process.stdout.write(` ✓\n`);
    } catch (err: any) {
      process.stdout.write(` ✗ ${err.message}\n`);
      continue;
    }

    const order = photo.gallery === 'paysage' ? paysageOrder : portraitOrder;
    createMarkdownFile(photo, order.current);
    order.current++;
  }

  console.log(`\n✅ Terminé ! ${classified.length} photos traitées.`);
  console.log(`   Paysage : ${paysageOrder.current - 1} photos`);
  console.log(`   Portrait : ${portraitOrder.current - 1} photos`);
  console.log('\nPensez à lancer "npm run build" pour vérifier le site.');

  rl.close();
}

main().catch((err) => {
  console.error('Erreur:', err);
  process.exit(1);
});
