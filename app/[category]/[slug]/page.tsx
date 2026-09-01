import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RecipeCard from '@/components/RecipeCard';
import Breadcrumbs from '@/components/Breadcrumbs';

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
    description: post.excerpt?.substring(0, 155) || `Aprende a preparar ${post.title}. Receta peruana auténtica paso a paso.`,
    alternates: {
      canonical: `/${category}/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt?.substring(0, 155) || `Aprende a preparar ${post.title}.`,
      url: `https://recetasdeperu.com/${category}/${slug}/`,
      type: 'article',
      publishedTime: post.date,
      images: post.featuredImage ? [
        {
          url: post.featuredImage.startsWith('/') ? `https://recetasdeperu.com${post.featuredImage}` : post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
      locale: 'es_PE',
      siteName: 'Recetas de Perú',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt?.substring(0, 155),
      images: post.featuredImage ? [post.featuredImage.startsWith('/') ? `https://recetasdeperu.com${post.featuredImage}` : post.featuredImage] : [],
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
  let relatedPosts: any[] = [];
  if (fs.existsSync(indexPath)) {
    const allPosts = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    relatedPosts = allPosts
      .filter((p: any) => p.category === category && p.slug !== slug)
      .slice(0, 4);
  }

  // Recipe Schema (critical for Google Rich Results)
  const recipeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: post.title,
    description: post.excerpt || `Receta peruana auténtica de ${post.title}`,
    image: post.featuredImage ? [
      post.featuredImage.startsWith('/') ? `https://recetasdeperu.com${post.featuredImage}` : post.featuredImage,
    ] : [],
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Recetas de Perú',
      url: 'https://recetasdeperu.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Recetas de Perú',
      url: 'https://recetasdeperu.com',
    },
    recipeCuisine: 'Peruana',
    recipeCategory: post.categoryName,
    url: `https://recetasdeperu.com/${category}/${slug}/`,
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />

      {/* Breadcrumbs with Schema.org BreadcrumbList */}
      <Breadcrumbs items={[
        { label: 'Inicio', href: '/' },
        { label: post.categoryName, href: `/${category}/` },
        { label: post.title },
      ]} />

      <div className="mb-8 mt-6">
        <Link href={`/${category}/`} className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-primary-100 transition-colors">
          {post.categoryName}
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
        <time className="text-gray-500" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>

      {post.featuredImage && (
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-auto object-cover max-h-[500px]"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      )}

      <div 
        className="recipe-content prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* AdSense Placement with reserved height to prevent CLS */}
      <div className="my-8 flex flex-col items-center bg-gray-50 py-4 border border-gray-100 rounded-xl min-h-[280px]">
        <p className="text-xs text-gray-400 mb-2 text-center w-full block">Publicidad</p>
        <ins className="adsbygoogle"
             style={{ display: 'block', textAlign: 'center' } as React.CSSProperties}
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="ca-pub-1070738569472471"
             data-ad-slot="1234567890"></ins>
      </div>

      {/* Related Recipes */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Recetas Relacionadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((rp: any) => (
              <RecipeCard key={rp.slug} post={rp} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
