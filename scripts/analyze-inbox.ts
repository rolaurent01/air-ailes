#!/usr/bin/env tsx
/**
 * Analyse les photos d'un dossier inbox et propose un pré-classement.
 * Usage: npx tsx scripts/analyze-inbox.ts --inbox "/path/to/inbox"
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

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

  console.log(`Photos: ${files.length}\n`);
  console.log('IDX | FICHIER | DIMENSIONS | ORIENT | TAILLE | CAMERA | DATE | AUTO-CLASS');
  console.log('-'.repeat(120));

  const results: any[] = [];

  for (let i = 0; i < files.length; i++) {
    const filePath = files[i];
    const fileName = path.basename(filePath);
    const stats = fs.statSync(filePath);
    const metadata = await sharp(filePath).metadata();

    let date = '';
    let camera = '';

    if (metadata.exif) {
      try {
        const exifReader = await import('exif-reader');
        const exifData = exifReader.default(metadata.exif);
        if (exifData.Photo?.DateTimeOriginal instanceof Date) {
          date = exifData.Photo.DateTimeOriginal.toISOString().split('T')[0];
        } else if (exifData.Image?.DateTime instanceof Date) {
          date = exifData.Image.DateTime.toISOString().split('T')[0];
        }
        if (exifData.Image?.Model) {
          camera = String(exifData.Image.Model).trim();
        }
      } catch {}
    }

    const w = metadata.width ?? 0;
    const h = metadata.height ?? 0;
    const orient = w > h * 1.1 ? 'landscape' : h > w * 1.1 ? 'portrait' : 'square';
    const sizeMB = (stats.size / 1024 / 1024).toFixed(1);

    // Auto-classification based on orientation and filename hints
    let autoClass = orient === 'portrait' ? 'PORTRAIT' : 'PAYSAGE';
    // DJI/drone photos are always landscape
    if (fileName.startsWith('DJI_')) autoClass = 'PAYSAGE';

    results.push({ i: i + 1, fileName, w, h, orient, sizeMB, camera, date, autoClass });

    console.log(
      `${String(i + 1).padStart(3)} | ${fileName.padEnd(42)} | ${w}×${h} | ${orient.padEnd(9)} | ${sizeMB.padStart(5)}Mo | ${camera.padEnd(14)} | ${date || '—'.padEnd(10)} | ${autoClass}`
    );
  }

  // Summary
  const paysage = results.filter((r) => r.autoClass === 'PAYSAGE');
  const portrait = results.filter((r) => r.autoClass === 'PORTRAIT');

  console.log('\n' + '='.repeat(80));
  console.log(`PRÉ-CLASSEMENT AUTOMATIQUE :`);
  console.log(`  PAYSAGE  : ${paysage.length} photos`);
  console.log(`  PORTRAIT : ${portrait.length} photos`);
  console.log('='.repeat(80));

  // Output JSON for easy processing
  fs.writeFileSync(
    path.join(path.dirname(import.meta.dirname ?? '.'), 'scripts', 'inbox-analysis.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('\n→ Résultat sauvegardé dans scripts/inbox-analysis.json');
}

main().catch(console.error);
