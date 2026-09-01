import Link from 'next/link';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import { getAllPosts, getCategories } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  const categories = getCategories();
  
  const featuredPosts = posts.slice(0, 6);
  // Just take some popular posts
  const popularPosts = posts.slice(10, 18);

  const getCategoryEmoji = (slug: string) => {
    const emojis: Record<string, string> = {
      'arroz': '🍚', 'bebidas': '🍹', 'postres': '🍰', 'platos': '🥘',
      'salsas': '🫕', 'pan': '🍞', 'top': '⭐', 'condimentos': '🧂',
      'electrodomesticos': '⚡', 'postres-sin-horno': '🧁',
      'desayunos-frios': '🥣', 'snacks-crudos': '🥜',
      'mejores-platos': '🏆', 'sincalorias': '🥗',
      'sanvalentin': '❤️', 'refrigeradora': '🧊',
      'restaurantes': '🍽️', 'chef-reconocidos': '👨‍🍳',
      'papa': '🥔', 'sarten': '🍳', 'bebidas-refrescantes-y-smoothies': '🥤'
    };
    return emojis[slug] || '🍽️';
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-24"
        style={{ background: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 40%, #ef4444 100%)' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)' }}></div>
        <div className="hero-bubbles overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="hero-bubble"></span>
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Recetas Auténticas del Perú
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8">
            Descubre la magia de la gastronomía peruana. Recetas tradicionales paso a paso para disfrutar en casa.
          </p>
          <div className="max-w-xl mx-auto">
            <SearchBar posts={posts.map(p => ({
              slug: p.slug, 
              title: p.title, 
              category: p.category, 
              categoryName: p.categoryName
            }))} />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-100 bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">2,928+</div>
            <div className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Recetas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">21</div>
            <div className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Categorías</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Peruano</div>
          </div>
        </div>
      </section>

      {/* Latest Recipes Section */}
      <section className="bg-white py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">Últimas Recetas</h2>
            <p className="text-gray-600">Las más recientes incorporaciones a nuestra colección</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <RecipeCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/platos" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors">
              Ver todas las recetas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center">Explora por Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/${cat.slug}`} className="card-hover bg-white p-6 rounded-2xl border border-gray-200 text-center flex flex-col items-center gap-3 group">
                <span className="text-4xl group-hover:scale-110 transition-transform">{getCategoryEmoji(cat.slug)}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.count} recetas</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="bg-white py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">Recetas Populares</h2>
            <p className="text-gray-600">Las recetas más queridas por nuestra comunidad</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPosts.map(post => (
              <RecipeCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20 px-4 text-center w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg leading-relaxed mb-8 text-white/90">
            Hola, soy Charlie, peruano y un apasionado por nuestra gastronomía. En este blog comparto las recetas más auténticas y tradicionales de mi familia y de cada rincón del Perú, para que puedas disfrutar de nuestra comida estés donde estés.
          </p>
          <Link href="/platos" className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Explorar todas las recetas
          </Link>
        </div>
      </section>
    </div>
  );
}
