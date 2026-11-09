import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-12 mb-8">
        {/* Logo and Description */}
        <div>
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-bold tracking-tight text-white">
              Recetas del <span className="text-primary-500">Perú</span> 🇵🇪
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Enciclopedia gastronómica del Perú con más de 3,900 recetas paso a paso, rutas de huariques por distritos, menús económicos, chifa, nikkei y equivalencias para peruanos en el mundo.
          </p>
        </div>

        {/* Clásicos Peruanos */}
        <div>
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-5">
            Recetario Tradicional
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/platos/" className="text-gray-400 hover:text-white transition-colors">
                Platos Típicos
              </Link>
            </li>
            <li>
              <Link href="/arroz/" className="text-gray-400 hover:text-white transition-colors">
                Recetas con Arroz
              </Link>
            </li>
            <li>
              <Link href="/salsas/" className="text-gray-400 hover:text-white transition-colors">
                Salsas y Cremas Peruanas
              </Link>
            </li>
            <li>
              <Link href="/postres/" className="text-gray-400 hover:text-white transition-colors">
                Postres Tradicionales
              </Link>
            </li>
            <li>
              <Link href="/panaderia-regional-y-dulces-de-convento/" className="text-gray-400 hover:text-white transition-colors">
                Panes Regionales y Dulces de Convento
              </Link>
            </li>
            <li>
              <Link href="/pisco-cocteleria-y-bebidas-calientes/" className="text-gray-400 hover:text-white transition-colors">
                Pisco, Macerados y Emolientes
              </Link>
            </li>
          </ul>
        </div>

        {/* Rutas y Especialidades */}
        <div>
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-5">
            Rutas & Especialidades
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/rutas-lima-y-callao/" className="text-gray-400 hover:text-white transition-colors">
                📍 Huariques y Mercados en Lima
              </Link>
            </li>
            <li>
              <Link href="/cocina-regional-ciudades/" className="text-gray-400 hover:text-white transition-colors">
                🇵🇪 Picanterías y Cocina Regional
              </Link>
            </li>
            <li>
              <Link href="/peruanos-en-el-mundo/" className="text-gray-400 hover:text-white transition-colors">
                🌎 Peruanos en el Extranjero
              </Link>
            </li>
            <li>
              <Link href="/chifa-y-nikkei-casero/" className="text-gray-400 hover:text-white transition-colors">
                🥢 Chifa y Cocina Nikkei en Casa
              </Link>
            </li>
            <li>
              <Link href="/fuego-brasa-y-ollas/" className="text-gray-400 hover:text-white transition-colors">
                🔥 Caja China, Cilindro y Ollas
              </Link>
            </li>
            <li>
              <Link href="/calendario-festivo-y-banquetes/" className="text-gray-400 hover:text-white transition-colors">
                🎉 Navidad, Fiestas Patrias y Semana Santa
              </Link>
            </li>
          </ul>
        </div>

        {/* Hogar, Nutrición y Técnica */}
        <div>
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-5">
            Hogar, Nutrición & Técnica
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/menus-y-presupuesto/" className="text-gray-400 hover:text-white transition-colors">
                💰 Menús Semanales y Loncheras
              </Link>
            </li>
            <li>
              <Link href="/nutricion-y-dietas-peruanas/" className="text-gray-400 hover:text-white transition-colors">
                🩺 Antianemia, Diabéticos y Salud
              </Link>
            </li>
            <li>
              <Link href="/cortes-pescados-e-insumos/" className="text-gray-400 hover:text-white transition-colors">
                🐟 Cortes de Carne, Pescados y Ajíes
              </Link>
            </li>
            <li>
              <Link href="/rescate-culinario-y-tecnicas/" className="text-gray-400 hover:text-white transition-colors">
                🧪 Rescate Culinario y Aderezos Madre
              </Link>
            </li>
            <li>
              <Link href="/refrigeradora/" className="text-gray-400 hover:text-white transition-colors">
                🧊 Conservación de Alimentos
              </Link>
            </li>
            <li>
              <Link href="/electrodomesticos/" className="text-gray-400 hover:text-white transition-colors">
                ⚡ Electrodomésticos de Cocina
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
