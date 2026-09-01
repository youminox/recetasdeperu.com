import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12 border-b border-gray-800 pb-12 mb-8">
        
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-bold tracking-tight text-white">
              Recetas del <span className="text-primary-500">Perú</span> 🇵🇪
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            Descubre la auténtica gastronomía peruana. Explora miles de recetas de platos típicos, postres, bebidas y mucho más.
          </p>
        </div>

        {/* Categories 1 */}
        <div className="md:w-1/3">
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6">Principales</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/platos/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Platos
              </Link>
            </li>
            <li>
              <Link href="/bebidas/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Bebidas
              </Link>
            </li>
            <li>
              <Link href="/postres/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Postres
              </Link>
            </li>
            <li>
              <Link href="/sopas/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sopas
              </Link>
            </li>
            <li>
              <Link href="/salsas/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Salsas
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories 2 */}
        <div className="md:w-1/3">
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6">Más Categorías</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/arroz/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Arroz
              </Link>
            </li>
            <li>
              <Link href="/ensaladas/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Ensaladas
              </Link>
            </li>
            <li>
              <Link href="/panes/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Panes
              </Link>
            </li>
            <li>
              <Link href="/pescados-y-mariscos/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Pescados y Mariscos
              </Link>
            </li>
            <li>
              <Link href="/pollo/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Pollo
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          &copy; {currentYear} Recetas de Perú. Todos los derechos reservados.
        </p>
        <p className="flex items-center gap-1">
          Hecho con <span className="text-red-500">❤️</span> en Perú
        </p>
      </div>
    </footer>
  );
}
