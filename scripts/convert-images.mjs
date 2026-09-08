/**
 * Convert JPG images to WebP format with resizing for better performance.
 * 
 * Run: npm install sharp --save-dev && node scripts/convert-images.mjs
 * 
 * This script:
 * 1. Converts all JPG images in public/images/posts/ to WebP
 * 2. Resizes to max 800px width (enough for all display sizes)
 * 3. Quality 80 for good balance of size/quality
 * 4. Keeps original JPGs as fallback
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'posts');

async function convertImages() {
  // Dynamic import sharp
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (err) {
    console.error('❌ sharp not installed. Run: npm install sharp --save-dev');
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
  console.log(`🔄 Converting ${files.length} images to WebP...`);

  let converted = 0;
  let totalSaved = 0;
  const errors = [];

  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputFile = file.replace(/\.jpe?g$/i, '.webp');
    const outputPath = path.join(imagesDir, outputFile);

    // Skip if WebP already exists
    if (fs.existsSync(outputPath)) {
      converted++;
      continue;
    }

    try {
      const originalSize = fs.statSync(inputPath).size;

      await sharp(inputPath)
        .resize(800, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const newSize = fs.statSync(outputPath).size;
      const saved = originalSize - newSize;
      totalSaved += saved;
      converted++;

      if (converted % 100 === 0) {
        console.log(`   Processed ${converted}/${files.length}...`);
      }
    } catch (err) {
      errors.push({ file, error: err.message });
    }
  }

  console.log(`\n✅ Converted ${converted}/${files.length} images`);
  console.log(`   Total space saved: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);

  if (errors.length > 0) {
    console.log(`\n⚠️ ${errors.length} errors:`);
    errors.slice(0, 10).forEach(e => console.log(`   ${e.file}: ${e.error}`));
  }
}

convertImages();
