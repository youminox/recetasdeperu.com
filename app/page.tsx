import Link from 'next/link';
import RecipeCard from '@/components/RecipeCard';
import { getAllPosts, getCategories } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  const categories = getCategories();
  
  const featuredPosts = posts.slice(0, 6);
  // Just take some random/popular posts for now
  const popularPosts = posts.slice(10, 18);

  const getCategoryEmoji = (slug: string) => {
    const emojis: Record<string, string> = {
      'arroz': '🍚', 'bebidas': '🍹', 'postres': '🍰', 'platos': '🥘',
      'salsas': '🫕', 'pan': '🍞'
    };
    return emojis[slug] || '🍽️';
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 px-4 text-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Recetas Auténticas del Perú</h1>
          <p className="text-lg md:text-xl mb-8">Descubre la magia de la gastronomía peruana. Recetas tradicionales paso a paso para disfrutar en casa.</p>
          <div className="max-w-md mx-auto">
            <input type="text" placeholder="Buscar recetas..." className="w-full px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Últimas Recetas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <RecipeCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-warm/20 w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Explorar por Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 12).map(cat => (
              <Link key={cat.slug} href={`/${cat.slug}`} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center gap-3">
                <span className="text-4xl">{getCategoryEmoji(cat.slug)}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.count} recetas</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Recetas Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPosts.map(post => (
            <RecipeCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-primary text-white text-center w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg leading-relaxed mb-8">
            Hola, soy peruano y un apasionado por nuestra gastronomía. En este blog comparto las recetas más auténticas y tradicionales de mi familia y de cada rincón del Perú, para que puedas disfrutar de nuestra comida estés donde estés.
          </p>
          <button className="bg-accent text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
            Explora todas nuestras recetas
          </button>
        </div>
      </section>
    </div>
  );
}
