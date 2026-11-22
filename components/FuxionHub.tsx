import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FuxionProductCard from '@/components/FuxionProductCard';
import AmazonAffiliateBox from '@/components/AmazonAffiliateBox';
import { getContextualAmazonProducts } from '@/lib/amazon';
import { getFuxionProduct, getFuxionProducts, type Post } from '@/lib/posts';

const FORMAT_LABEL: Record<string, string> = {
  receta: '🥄 Receta',
  plato: '🍽️ Plato + acompañante',
  menu: '📅 Menú',
  duelo: '⚖️ Comparativa',
  temporada: '🎉 Temporada',
  pilar: '📚 Guía',
};

interface HubPost extends Post {
  primaryProduct?: string;
  format?: string;
}

export default function FuxionHub({ posts }: { posts: HubPost[] }) {
  const products = getFuxionProducts();
  const pillar = posts.find((p) => p.format === 'pilar');
  const rest = posts.filter((p) => p.format !== 'pilar');

  // Agrupar por producto principal (orden según cantidad de recetas)
  const groups = new Map<string, HubPost[]>();
  for (const p of rest) {
    const key = p.primaryProduct || 'otros';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }
  const ordered = Array.from(groups.entries()).sort((a, b) => b[1].length - a[1].length);
  const featured = ['matcha-pep-t', 'flora-liv', 'nocarb-t']
    .map((s) => getFuxionProduct(s))
    .filter(Boolean);

  const faqs = [
    {
      q: '¿Qué encuentro en el recetario FuXion de Recetas de Perú?',
      a: 'Recetas peruanas caseras (postres, refrescos, desayunos, loncheras y platos criollos) en las que los productos FuXion se usan como ingrediente o acompañante, con cantidades, tiempos y costos en soles.',
    },
    {
      q: '¿Dónde compro los productos que aparecen en las recetas?',
      a: 'Cada receta tiene una tarjeta con el enlace directo a la Tienda Oficial FuXion Perú, con precio en soles y envío a todo el país.',
    },
    {
      q: '¿Los productos FuXion reemplazan una comida o un tratamiento?',
      a: 'No. Son alimentos funcionales y suplementos que complementan una alimentación equilibrada. Ante cualquier condición de salud, consulta con un profesional.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Recetas con FuXion: cocina peruana con productos funcionales',
        url: 'https://recetasdeperu.com/fuxion/',
        description:
          'Recetario peruano con productos FuXion: postres, refrescos, desayunos y platos criollos paso a paso.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: posts.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://recetasdeperu.com/fuxion/${p.slug}/`,
            name: p.title,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Recetas con FuXion' }]} />

      <section className="mt-6 mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-700 via-sky-600 to-lime-500 p-8 md:p-12 text-white shadow-xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-100">
          Recetario funcional peruano
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          Recetas con FuXion: cocina peruana con productos funcionales
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-sky-50 leading-relaxed">
          {posts.length} recetas y guías probadas en cocina casera: postres de matcha, refrescos con
          frutas peruanas, desayunos rápidos, loncheras y cómo acompañar tus platos criollos
          favoritos. Cada receta enlaza al producto en la Tienda Oficial FuXion Perú.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {ordered.slice(0, 8).map(([slug]) => {
            const prod = getFuxionProduct(slug);
            return prod ? (
              <a
                key={slug}
                href={`#${slug}`}
                className="rounded-full bg-white/15 border border-white/30 px-4 py-1.5 text-sm font-semibold hover:bg-white/25 transition"
              >
                {prod.cleanName}
              </a>
            ) : null;
          })}
        </div>
      </section>

      {pillar && (
        <Link
          href={`/fuxion/${pillar.slug}/`}
          className="mb-12 flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-lime-200 bg-lime-50 p-6 hover:shadow-md transition"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pillar.featuredImage}
            alt={pillar.title}
            className="w-full md:w-72 h-44 object-cover rounded-xl"
            loading="lazy"
          />
          <div>
            <span className="text-xs font-bold uppercase text-lime-700">📚 Guía principal</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-1">{pillar.title}</h2>
            <p className="mt-2 text-gray-600">{pillar.excerpt}</p>
          </div>
        </Link>
      )}

      {ordered.map(([slug, items]) => {
        const prod = getFuxionProduct(slug);
        return (
          <section key={slug} id={slug} className="mb-14 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-5 border-b border-gray-200 pb-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Recetas con {prod ? prod.cleanName : 'FuXion'}
              </h2>
              {prod && (
                <a
                  href={prod.shopUrl}
                  target="_blank"
                  rel="sponsored noopener"
                  className="text-sm font-bold text-sky-700 hover:underline"
                >
                  Ver {prod.cleanName} en Tienda Oficial ({prod.formattedPrice}) →
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((p) => (
                <Link
                  key={p.slug}
                  href={`/fuxion/${p.slug}/`}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.featuredImage}
                    alt={p.title}
                    className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase text-sky-700">
                      {FORMAT_LABEL[p.format || 'receta']}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-gray-900 leading-snug group-hover:text-sky-700">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Productos más usados en el recetario</h2>
        <p className="text-gray-600 mb-4">
          Compra directo en la Tienda Oficial FuXion Perú ({products.length} productos disponibles).
        </p>
        {featured.map((prod) =>
          prod ? <FuxionProductCard key={prod.slug} product={prod} variant="secondary" label="Producto del recetario" /> : null
        )}
      </section>

      {(() => {
        const amazonContext = getContextualAmazonProducts('fuxion', 'fuxion', 'Recetas con FuXion');
        return (
          <AmazonAffiliateBox
            variant="showcase"
            sectionTitle={amazonContext.sectionTitle}
            sectionSubtitle={amazonContext.sectionSubtitle}
            products={amazonContext.products}
          />
        );
      })()}

      <section className="rounded-2xl border border-gray-200 bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-xl border border-gray-200 bg-white p-5" open={i === 0}>
              <summary className="cursor-pointer font-bold text-gray-900">{f.q}</summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
