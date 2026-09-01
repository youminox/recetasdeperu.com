'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  category: string;
  categoryName: string;
}

interface SearchBarProps {
  posts: Post[];
}

export default function SearchBar({ posts }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      const searchWords = query.toLowerCase().trim().split(/\s+/);
      const filtered = posts.filter(post => {
        const titleLower = post.title.toLowerCase();
        return searchWords.every(word => titleLower.includes(word));
      });

      setResults(filtered.slice(0, 8));
      setIsOpen(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, posts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto z-40" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl shadow-2xl p-2 md:p-3 flex flex-col sm:flex-row gap-3 border border-gray-100">
        <div className="flex-grow flex items-center bg-gray-50 rounded-xl px-4 py-3 sm:py-0 border border-gray-100 focus-within:border-primary-300 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
          <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 text-lg ml-3 py-2 outline-none"
            placeholder="¿Qué quieres cocinar hoy? Ej. Lomo saltado"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.length >= 2) setIsOpen(true);
            }}
            onFocus={() => {
              if (query.length >= 2) setIsOpen(true);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-primary-600 text-white px-8 py-4 sm:py-3 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 whitespace-nowrap"
        >
          Buscar
        </button>
      </form>

      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[60vh] overflow-y-auto">
          <div className="p-4 border-b border-gray-50 bg-gray-50/50">
            <p className="text-sm font-medium text-gray-500">
              {results.length > 0 
                ? `Se encontraron ${results.length} recetas` 
                : "No se encontraron recetas con esos términos"}
            </p>
          </div>
          
          {results.length > 0 && (
            <ul className="divide-y divide-gray-50">
              {results.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/${post.category}/${post.slug}/`}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 hover:bg-primary-50 transition-colors group"
                  >
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-700 self-start sm:self-auto w-24 flex-shrink-0 text-center">
                      {post.categoryName}
                    </span>
                    <span className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-1">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
