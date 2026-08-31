import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://recetasdeperu.com';
  
  const indexPath = path.join(process.cwd(), 'content', 'index.json');
  let posts: any[] = [];
  if (fs.existsSync(indexPath)) {
    posts = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  }

  const categoriesPath = path.join(process.cwd(), 'content', 'categories.json');
  let categories: any[] = [];
  if (fs.existsSync(categoriesPath)) {
    categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
  }

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  categories.forEach((cat) => {
    sitemapEntries.push({
      url: `${baseUrl}/${cat.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  posts.forEach((post) => {
    sitemapEntries.push({
      url: `${baseUrl}/${post.category}/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return sitemapEntries;
}
