/**
 * Download all featured images from WordPress URLs
 * Reads each post JSON, downloads the featuredImage, saves locally,
 * and updates the JSON to point to the local path.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const POSTS_DIR = join(ROOT, 'content', 'posts');
const IMAGES_DIR = join(ROOT, 'public', 'images', 'posts');
const INDEX_PATH = join(ROOT, 'content', 'index.json');

// Settings
const CONCURRENCY = 10; // simultaneous downloads
const TIMEOUT_MS = 15000;
const MAX_RETRIES = 2;

// Ensure output directory
if (!existsSync(IMAGES_DIR)) mkdirSync(IMAGES_DIR, { recursive: true });

// ── Collect all image URLs from posts ─────────────────────────
console.log('📂 Reading post files...');
const postFiles = readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
console.log(`   Found ${postFiles.length} posts`);

const downloadQueue = [];
const urlToLocalPath = {};

for (const file of postFiles) {
  const postPath = join(POSTS_DIR, file);
  const post = JSON.parse(readFileSync(postPath, 'utf-8'));

  if (!post.featuredImage || !post.featuredImage.startsWith('http')) continue;

  const url = post.featuredImage;

  // Generate local filename from slug + original extension
  let ext = extname(new URL(url).pathname) || '.jpg';
  // Handle WordPress scaled images
  const localFilename = `${post.slug}${ext}`;
  const localPath = `/images/posts/${localFilename}`;
  const localAbsPath = join(IMAGES_DIR, localFilename);

  downloadQueue.push({
    url,
    localAbsPath,
    localPath,
    slug: post.slug,
    postFile: file,
  });

  urlToLocalPath[post.slug] = localPath;
}

console.log(`📥 ${downloadQueue.length} images to download\n`);

// ── Download function ─────────────────────────────────────────
function downloadFile(url, destPath, retries = 0) {
  return new Promise((resolve, reject) => {
    // Skip if already downloaded
    if (existsSync(destPath)) {
      resolve('skipped');
      return;
    }

    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, { timeout: TIMEOUT_MS }, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadFile(response.headers.location, destPath, retries)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        if (retries < MAX_RETRIES) {
          setTimeout(() => {
            downloadFile(url, destPath, retries + 1).then(resolve).catch(reject);
          }, 1000 * (retries + 1));
          return;
        }
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }

      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        writeFileSync(destPath, buffer);
        resolve('downloaded');
      });
      response.on('error', (err) => {
        if (retries < MAX_RETRIES) {
          setTimeout(() => {
            downloadFile(url, destPath, retries + 1).then(resolve).catch(reject);
          }, 1000 * (retries + 1));
        } else {
          reject(err);
        }
      });
    });

    request.on('timeout', () => {
      request.destroy();
      if (retries < MAX_RETRIES) {
        setTimeout(() => {
          downloadFile(url, destPath, retries + 1).then(resolve).catch(reject);
        }, 1000 * (retries + 1));
      } else {
        reject(new Error(`Timeout for ${url}`));
      }
    });

    request.on('error', (err) => {
      if (retries < MAX_RETRIES) {
        setTimeout(() => {
          downloadFile(url, destPath, retries + 1).then(resolve).catch(reject);
        }, 1000 * (retries + 1));
      } else {
        reject(err);
      }
    });
  });
}

// ── Process downloads with concurrency control ────────────────
async function processQueue(queue, concurrency) {
  let completed = 0;
  let failed = 0;
  let skipped = 0;
  const total = queue.length;
  const startTime = Date.now();

  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) break;

      try {
        const result = await downloadFile(item.url, item.localAbsPath);
        if (result === 'skipped') {
          skipped++;
        }
        completed++;

        if (completed % 50 === 0 || completed === total) {
          const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
          const rate = (completed / parseFloat(elapsed)).toFixed(1);
          console.log(`   ✅ ${completed}/${total} (${skipped} skipped, ${failed} failed) — ${rate} img/s — ${elapsed}s elapsed`);
        }
      } catch (err) {
        failed++;
        completed++;
        console.log(`   ❌ Failed: ${item.slug} — ${err.message}`);
      }
    }
  }

  // Launch workers
  const workers = [];
  for (let i = 0; i < concurrency; i++) {
    workers.push(worker());
  }
  await Promise.all(workers);

  return { completed: completed - failed, failed, skipped };
}

console.log(`🚀 Starting download (${CONCURRENCY} concurrent)...\n`);
const results = await processQueue([...downloadQueue], CONCURRENCY);

console.log(`\n📊 Download complete!`);
console.log(`   ✅ ${results.completed} downloaded`);
console.log(`   ⏭️  ${results.skipped} already existed (skipped)`);
console.log(`   ❌ ${results.failed} failed`);

// ── Update post JSON files with local paths ───────────────────
console.log('\n📝 Updating post files with local image paths...');
let updated = 0;

for (const file of postFiles) {
  const postPath = join(POSTS_DIR, file);
  const post = JSON.parse(readFileSync(postPath, 'utf-8'));

  if (urlToLocalPath[post.slug]) {
    const localAbsPath = join(IMAGES_DIR, `${post.slug}${extname(new URL(post.featuredImage).pathname) || '.jpg'}`);
    // Only update if image was actually downloaded
    if (existsSync(localAbsPath)) {
      post.featuredImage = urlToLocalPath[post.slug];
      writeFileSync(postPath, JSON.stringify(post, null, 2));
      updated++;
    }
  }
}

console.log(`   Updated ${updated} post files`);

// ── Update index.json ─────────────────────────────────────────
console.log('📇 Updating index.json...');
const index = JSON.parse(readFileSync(INDEX_PATH, 'utf-8'));
let indexUpdated = 0;

for (const entry of index) {
  if (urlToLocalPath[entry.slug]) {
    const localAbsPath = join(IMAGES_DIR, `${entry.slug}${extname(new URL(entry.featuredImage).pathname) || '.jpg'}`);
    if (existsSync(localAbsPath)) {
      entry.featuredImage = urlToLocalPath[entry.slug];
      indexUpdated++;
    }
  }
}

writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2));
console.log(`   Updated ${indexUpdated} entries in index.json`);

console.log('\n✨ Image migration complete!');
