'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchPost {
  slug: string;
  title: string;
  category: string;
}

export default function SearchBar({ posts }: { posts: SearchPost[] }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchPost[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 3) {
      const searchTerms = query.toLowerCase().split(' ');
      
      const filtered = posts.filter(post => {
        const titleLower = post.title.toLowerCase();
        return searchTerms.every(term => titleLower.includes(term));
      }).slice(0, 8);
      
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, posts]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar recetas..."
          className="w-full pl-10 pr-4 py-2 border border-warm-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-warm-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-warm-100">
          <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {results.map((result) => (
              <li key={result.slug}>
                <Link
                  href={`/${result.category}/${result.slug}/`}
                  className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-warm-50 block text-warm-900"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="block truncate font-medium">{result.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {isOpen && query.length >= 3 && results.length === 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-warm-100 py-3 px-4 text-sm text-warm-500">
          No se encontraron resultados.
        </div>
      )}
    </div>
  );
}
