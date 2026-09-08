import Link from 'next/link';

interface RecipeCardProps {
  post: {
    slug: string;
    title: string;
    category: string;
    categoryName: string;
    date: string;
    excerpt: string;
    featuredImage: string;
  };
  /** Set to true for above-the-fold cards (first 2-3 visible cards) */
  priority?: boolean;
}

export default function RecipeCard({ post, priority = false }: RecipeCardProps) {
  return (
    <Link 
      href={`/${post.category}/${post.slug}/`}
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-primary-600/20 hover:shadow-xl hover:-translate-y-1 h-full"
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
      
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={post.featuredImage}
          alt={post.title}
          width={1152}
          height={720}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : undefined}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white text-primary-700 shadow-sm">
            {post.categoryName}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
          <span className="text-gray-400">
            {new Date(post.date).toLocaleDateString('es-PE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="font-medium text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">
            Ver receta 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
