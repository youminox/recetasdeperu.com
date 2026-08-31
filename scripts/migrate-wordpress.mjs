/**
 * WordPress XML to JSON Migration Script
 * Parses the WordPress export XML and generates:
 * - content/posts/{slug}.json — individual post files with full HTML content
 * - content/index.json — lightweight index of all posts (for listings)
 * - content/categories.json — category metadata
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { XMLParser } from 'fast-xml-parser';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// ── Configuration ──────────────────────────────────────────────
const XML_PATH = join(ROOT, 'recetasdeperu.WordPress.2026-08-31.xml');
const CONTENT_DIR = join(ROOT, 'content');
const POSTS_DIR = join(CONTENT_DIR, 'posts');

// ── Ensure output directories exist ───────────────────────────
[CONTENT_DIR, POSTS_DIR].forEach(dir => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
});

// ── Parse XML ─────────────────────────────────────────────────
console.log('📖 Reading WordPress XML export...');
const xmlData = readFileSync(XML_PATH, 'utf-8');

console.log('🔄 Parsing XML (this may take a moment for 49MB)...');
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: '__cdata',
  isArray: (name) => {
    // These elements can appear multiple times
    return ['item', 'category', 'wp:postmeta', 'wp:category', 'wp:term'].includes(name);
  },
});

const parsed = parser.parse(xmlData);
const channel = parsed.rss.channel;
const items = channel.item || [];

console.log(`📦 Found ${items.length} total items in XML`);

// ── Extract categories from XML header ────────────────────────
const wpCategories = channel['wp:category'] || [];
const categoriesMap = {};

wpCategories.forEach(cat => {
  const slug = extractCdata(cat['wp:category_nicename']);
  const name = extractCdata(cat['wp:cat_name']);
  if (slug && name) {
    categoriesMap[slug] = {
      slug,
      name,
      count: 0,
    };
  }
});

console.log(`📂 Found ${Object.keys(categoriesMap).length} categories`);

// ── Build attachment map (post_id → image URL) ───────────────
console.log('🖼️  Building attachment map...');
const attachmentMap = {};
items.forEach(item => {
  const postType = extractCdata(item['wp:post_type']);
  if (postType === 'attachment') {
    const postId = item['wp:post_id'];
    const url = extractCdata(item['wp:attachment_url']);
    if (postId && url) {
      attachmentMap[postId] = url;
    }
  }
});
console.log(`🖼️  Mapped ${Object.keys(attachmentMap).length} attachments`);

// ── Process posts ─────────────────────────────────────────────
console.log('📝 Processing posts...');
const posts = [];
const slugsSeen = new Set();
let duplicates = 0;

items.forEach(item => {
  const postType = extractCdata(item['wp:post_type']);
  const status = extractCdata(item['wp:status']);

  // Only process published posts
  if (postType !== 'post' || status !== 'publish') return;

  const title = extractCdata(item.title) || '';
  const slug = extractCdata(item['wp:post_name']) || '';
  const content = extractCdata(item['content:encoded']) || '';
  const dateStr = extractCdata(item['wp:post_date']) || '';
  const link = item.link || '';

  // Skip if no slug
  if (!slug) return;

  // Handle duplicate slugs
  if (slugsSeen.has(slug)) {
    duplicates++;
    return;
  }
  slugsSeen.add(slug);

  // Extract category from the item
  let category = 'blog';
  let categoryName = 'Blog';

  const cats = item.category;
  if (cats) {
    const catArray = Array.isArray(cats) ? cats : [cats];
    const mainCat = catArray.find(c =>
      c['@_domain'] === 'category' && c['@_nicename']
    );
    if (mainCat) {
      category = mainCat['@_nicename'];
      categoryName = extractCdata(mainCat) || mainCat['#text'] || category;
    }
  }

  // Extract category from URL if not found in item
  if (category === 'blog' && typeof link === 'string') {
    const urlMatch = link.match(/recetasdeperu\.com\/([^/]+)\/[^/]+\/?$/);
    if (urlMatch && urlMatch[1] !== slug) {
      category = urlMatch[1];
      if (categoriesMap[category]) {
        categoryName = categoriesMap[category].name;
      }
    }
  }

  // Get featured image
  let featuredImage = '';
  const postMeta = item['wp:postmeta'];
  if (postMeta) {
    const metaArray = Array.isArray(postMeta) ? postMeta : [postMeta];
    const thumbnailMeta = metaArray.find(m =>
      extractCdata(m['wp:meta_key']) === '_thumbnail_id'
    );
    if (thumbnailMeta) {
      const thumbnailId = extractCdata(thumbnailMeta['wp:meta_value']);
      if (thumbnailId && attachmentMap[thumbnailId]) {
        featuredImage = attachmentMap[thumbnailId];
      }
    }
  }

  // Generate excerpt from content (strip HTML, take first 160 chars)
  const excerpt = stripHtml(content).substring(0, 200).trim() + '...';

  // Parse date
  const date = dateStr ? dateStr.split(' ')[0] : '2024-01-01';

  // Clean content: remove WordPress-specific shortcodes/blocks
  const cleanedContent = cleanWordPressContent(content);

  // Track category count
  if (categoriesMap[category]) {
    categoriesMap[category].count++;
  } else {
    categoriesMap[category] = { slug: category, name: categoryName, count: 1 };
  }

  const post = {
    slug,
    title,
    category,
    categoryName,
    date,
    excerpt,
    featuredImage,
    content: cleanedContent,
  };

  posts.push(post);
});

console.log(`✅ Processed ${posts.length} published posts (${duplicates} duplicates skipped)`);

// ── Sort posts by date (newest first) ─────────────────────────
posts.sort((a, b) => b.date.localeCompare(a.date));

// ── Write individual post files ───────────────────────────────
console.log('💾 Writing individual post JSON files...');
let written = 0;
posts.forEach(post => {
  const filePath = join(POSTS_DIR, `${post.slug}.json`);
  writeFileSync(filePath, JSON.stringify(post, null, 2));
  written++;
  if (written % 500 === 0) {
    console.log(`   ...wrote ${written}/${posts.length} posts`);
  }
});
console.log(`💾 Wrote ${written} post files`);

// ── Write index file (without content, for listings) ──────────
console.log('📇 Writing post index...');
const index = posts.map(({ content, ...rest }) => rest);
writeFileSync(
  join(CONTENT_DIR, 'index.json'),
  JSON.stringify(index, null, 2)
);

// ── Write categories file ─────────────────────────────────────
console.log('📂 Writing categories...');
const categoriesList = Object.values(categoriesMap)
  .filter(c => c.count > 0)
  .sort((a, b) => b.count - a.count);

writeFileSync(
  join(CONTENT_DIR, 'categories.json'),
  JSON.stringify(categoriesList, null, 2)
);

// ── Summary ───────────────────────────────────────────────────
console.log('\n✨ Migration complete!');
console.log(`   📝 ${posts.length} posts`);
console.log(`   📂 ${categoriesList.length} categories with posts`);
console.log(`   🖼️  ${posts.filter(p => p.featuredImage).length} posts with featured images`);
console.log('\nCategories breakdown:');
categoriesList.forEach(cat => {
  console.log(`   ${cat.name} (/${cat.slug}/): ${cat.count} posts`);
});

// ── Helper functions ──────────────────────────────────────────

function extractCdata(node) {
  if (node === undefined || node === null) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (node.__cdata !== undefined) {
    if (typeof node.__cdata === 'string') return node.__cdata;
    if (Array.isArray(node.__cdata)) return node.__cdata.join('');
    return String(node.__cdata);
  }
  if (node['#text'] !== undefined) return String(node['#text']);
  return '';
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanWordPressContent(html) {
  return html
    // Remove WordPress block comments
    .replace(/<!-- wp:[^>]*-->/g, '')
    .replace(/<!-- \/wp:[^>]*-->/g, '')
    // Remove empty paragraphs
    .replace(/<p>\s*<\/p>/g, '')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
