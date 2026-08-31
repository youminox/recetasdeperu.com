import Link from 'next/link';

interface PostPreview {
  slug: string;
  title: string;
  category: string;
  categoryName: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
}

export default function RecipeCard({ post }: { post: PostPreview }) {
  const dateFormatted = new Date(post.date).toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageUrl = post.featuredImage || '/images/placeholder.jpg';

  return (
    <Link href={`/${post.category}/${post.slug}/`} className="group block h-full">
      <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full flex flex-col card-hover border border-warm-100">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm-100">
          <img
            src={imageUrl}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {post.categoryName}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-display font-bold text-warm-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-warm-600 text-sm mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>
          <time className="text-xs text-warm-500 font-medium mt-auto" dateTime={post.date}>
            {dateFormatted}
          </time>
        </div>
      </article>
    </Link>
  );
}
