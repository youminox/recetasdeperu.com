import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RecipeCard from '@/components/RecipeCard';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'content', 'index.json');
  if (!fs.existsSync(filePath)) return [];
  
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return posts.map((post: any) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { category, slug } = await params;
  
  const postPath = path.join(process.cwd(), 'content', 'posts', `${slug}.json`);
  if (!fs.existsSync(postPath)) return {};
  
  const post = JSON.parse(fs.readFileSync(postPath, 'utf8'));
  if (post.category !== category) return {};

  return {
    title: `${post.title} | Recetas de Perú`,
    description: post.excerpt,
    openGraph: {
      images: [post.featuredImage],
    },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { category, slug } = await params;
  
  const postPath = path.join(process.cwd(), 'content', 'posts', `${slug}.json`);
  if (!fs.existsSync(postPath)) return notFound();
  
  const post = JSON.parse(fs.readFileSync(postPath, 'utf8'));
  
  // Verify category matches
  if (post.category !== category) return notFound();

  // Read index to find related recipes
  const indexPath = path.join(process.cwd(), 'content', 'index.json');
  let relatedPosts = [];
  if (fs.existsSync(indexPath)) {
    const allPosts = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    relatedPosts = allPosts
      .filter((p: any) => p.category === category && p.slug !== slug)
      .slice(0, 4);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.featuredImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Recetas de Perú',
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link> &gt;{' '}
        <Link href={`/${category}`} className="hover:text-primary">{post.categoryName}</Link> &gt;{' '}
        <span className="text-gray-800">{post.title}</span>
      </div>

      <div className="mb-8">
        <span className="inline-block bg-accent/20 text-accent-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {post.categoryName}
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-500">{new Date(post.date).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      {post.featuredImage && (
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-auto object-cover max-h-[500px]" 
          />
        </div>
      )}

      <div 
        className="recipe-content prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* AdSense Placement */}
      <div className="my-8 flex justify-center bg-gray-50 py-4 border border-gray-100 rounded">
        <p className="text-xs text-gray-400 mb-2 text-center w-full block">Advertisement</p>
        <ins className="adsbygoogle"
             style={{ display: 'block', textAlign: 'center' }}
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="ca-pub-1070738569472471"
             data-ad-slot="1234567890"></ins>
        <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
      </div>

      {/* Related Recipes */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-playfair text-2xl font-bold mb-6">Recetas Relacionadas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((rp: any) => (
              <RecipeCard key={rp.slug} post={rp} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
