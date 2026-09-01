/**
 * Fix WordPress [aib_post_related] shortcodes in all post JSON files.
 * Converts them to proper HTML links or removes them.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const POSTS_DIR = join(process.cwd(), 'content', 'posts');

const postFiles = readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
console.log(`📂 Found ${postFiles.length} post files`);

let fixedCount = 0;
let totalShortcodes = 0;

for (const file of postFiles) {
  const filePath = join(POSTS_DIR, file);
  const post = JSON.parse(readFileSync(filePath, 'utf-8'));

  if (!post.content) continue;

  // Match [aib_post_related ...] shortcodes
  // Pattern: [aib_post_related url='...' title='...' relatedtext='...']
  const shortcodeRegex = /\[aib_post_related\s+url=['"](.*?)['"]\s+title=['"](.*?)['"]\s+relatedtext=['"](.*?)['"]\s*\]/g;

  const matches = post.content.match(shortcodeRegex);
  if (!matches) continue;

  totalShortcodes += matches.length;

  // Replace each shortcode with a styled HTML link
  post.content = post.content.replace(shortcodeRegex, (match, url, title, relatedText) => {
    // Clean the URL — ensure it starts with /
    let cleanUrl = url.trim();
    if (cleanUrl.startsWith('https://recetasdeperu.com')) {
      cleanUrl = cleanUrl.replace('https://recetasdeperu.com', '');
    }
    if (!cleanUrl.startsWith('/')) {
      cleanUrl = '/' + cleanUrl;
    }

    return `<div style="background:#fef2f2;border-left:4px solid #dc2626;padding:16px 20px;margin:24px 0;border-radius:8px;">
<p style="font-size:13px;color:#991b1b;margin:0 0 6px 0;font-weight:600;">${relatedText || 'Quizás también te interese:'}</p>
<a href="${cleanUrl}" style="color:#dc2626;font-weight:700;text-decoration:none;font-size:16px;">${title}</a>
</div>`;
  });

  writeFileSync(filePath, JSON.stringify(post, null, 2));
  fixedCount++;
}

console.log(`\n✅ Fixed ${fixedCount} posts (${totalShortcodes} shortcodes converted to HTML links)`);
