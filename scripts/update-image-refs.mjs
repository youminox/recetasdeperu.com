/**
 * Update all image references from .jpg to .webp in content JSON files.
 * Run this AFTER convert-images.mjs has completed.
 * 
 * Updates:
 * - content/index.json (featuredImage field)
 * - content/posts/*.json (featuredImage field + image references in HTML content)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content');
const postsDir = path.join(contentDir, 'posts');
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'posts');

function replaceJpgWithWebp(str) {
  // Only replace references to /images/posts/*.jpg with .webp
  // if the corresponding .webp file exists
  return str.replace(/\/images\/posts\/([^"'\s]+)\.jpe?g/gi, (match, name) => {
    const webpPath = path.join(imagesDir, `${name}.webp`);
    if (fs.existsSync(webpPath)) {
      return `/images/posts/${name}.webp`;
    }
    return match; // Keep original if webp doesn't exist
  });
}

// 1. Update index.json
const indexPath = path.join(contentDir, 'index.json');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf8');
  const updated = replaceJpgWithWebp(content);
  fs.writeFileSync(indexPath, updated);
  
  const changes = (content.match(/\.jpe?g/gi) || []).length - (updated.match(/\.jpe?g/gi) || []).length;
  console.log(`✅ index.json: ${changes} references updated`);
}

// 2. Update all post JSON files
const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));
let totalUpdated = 0;

for (const file of postFiles) {
  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = replaceJpgWithWebp(content);
  
  if (content !== updated) {
    fs.writeFileSync(filePath, updated);
    totalUpdated++;
  }
}

console.log(`✅ ${totalUpdated}/${postFiles.length} post files updated`);

// 3. Regenerate search index
console.log('\n🔄 Regenerating search index...');
const searchIndexPosts = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const searchIndex = searchIndexPosts.map(post => ({
  slug: post.slug,
  title: post.title,
  category: post.category,
  categoryName: post.categoryName,
}));
const outputPath = path.join(__dirname, '..', 'public', 'search-index.json');
fs.writeFileSync(outputPath, JSON.stringify(searchIndex));
console.log(`✅ Search index regenerated`);

console.log('\n🎉 All references updated from .jpg to .webp');
