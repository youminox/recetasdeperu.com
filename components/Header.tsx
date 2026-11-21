'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { openChat } from '@/lib/chat-constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomeTop = pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platos', href: '/platos/' },
    { name: 'Rutas Lima', href: '/rutas-lima-y-callao/' },
    { name: 'Menús S/', href: '/menus-y-presupuesto/' },
    { name: 'Chifa & Nikkei', href: '/chifa-y-nikkei-casero/' },
    { name: 'Caja China & Ollas', href: '/fuego-brasa-y-ollas/' },
    { name: 'Postres', href: '/postres/' },
    { name: 'Bebidas', href: '/bebidas/' },
    { name: 'Recetas FuXion', href: '/fuxion/' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isHomeTop
          ? 'bg-[#140a08]/45 backdrop-blur-md border-white/10'
          : isScrolled
          ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm'
          : 'bg-white border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span
                className={`text-2xl font-bold tracking-tight transition-colors ${
                  isHomeTop ? 'text-white' : 'text-gray-900'
                }`}
              >
                Recetas del{' '}
                <span className={isHomeTop ? 'text-[#fde047]' : 'text-primary-600'}>
                  Perú
                </span>
              </span>
              <span className="text-2xl">🇵🇪</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isHomeTop
                    ? 'text-white/85 hover:text-[#fde047]'
                    : pathname?.startsWith(link.href)
                    ? 'text-primary-600 font-semibold'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => openChat()}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition shadow-sm cursor-pointer ${
                isHomeTop
                  ? 'bg-[#f59e0b] text-[#2d1200] hover:bg-[#fbbf24]'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              <span>👨‍🍳</span>
              <span>Chef IA</span>
            </button>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => openChat()}
              className="inline-flex items-center gap-1 rounded-full bg-[#f59e0b] px-3 py-1.5 text-xs font-extrabold text-[#2d1200]"
            >
              <span>👨‍🍳</span>
              <span>Chef IA</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isHomeTop
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
              }`}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname?.startsWith(link.href)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
