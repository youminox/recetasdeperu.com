import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import RecipeCard from '@/components/RecipeCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'content', 'categories.json');
  if (!fs.existsSync(filePath)) return [];
  const categories = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  return categories.map((cat: any) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  const filePath = path.join(process.cwd(), 'content', 'categories.json');
  if (!fs.existsSync(filePath)) return {};
  
  const categories = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const catData = categories.find((c: any) => c.slug === category);
  
  if (!catData) return {};
  
  return {
    title: `${catData.name} - Recetas Peruanas | Recetas de Perú`,
    description: `Descubre ${catData.count} recetas auténticas de ${catData.name} peruanas. Paso a paso, fáciles de preparar en casa.`,
    alternates: {
      canonical: `/${category}`,
    },
    openGraph: {
      title: `${catData.name} - Recetas Peruanas`,
      description: `Descubre ${catData.count} recetas auténticas de ${catData.name} peruanas.`,
      url: `https://recetasdeperu.com/${category}/`,
      type: 'website',
      locale: 'es_PE',
      siteName: 'Recetas de Perú',
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  // Read categories
  const categoriesPath = path.join(process.cwd(), 'content', 'categories.json');
  if (!fs.existsSync(categoriesPath)) return notFound();
  const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
  const catData = categories.find((c: any) => c.slug === category);
  
  if (!catData) return notFound();

  // Read posts for this category
  const indexPath = path.join(process.cwd(), 'content', 'index.json');
  let categoryPosts: any[] = [];
  if (fs.existsSync(indexPath)) {
    const allPosts = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    categoryPosts = allPosts.filter((p: any) => p.category === category)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs with Schema.org */}
      <Breadcrumbs items={[
        { label: 'Inicio', href: '/' },
        { label: catData.name },
      ]} />

      <div className="mb-10 mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Recetas de {catData.name}
        </h1>
        <p className="text-gray-500 text-lg">
          {catData.count} recetas auténticas peruanas de {catData.name.toLowerCase()}
        </p>
      </div>
      
      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryPosts.map((post: any) => (
            <RecipeCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No hay recetas en esta categoría todavía.</p>
      )}
    </div>
  );
}
