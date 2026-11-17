import type { FuxionProduct } from '@/lib/posts';

interface FuxionProductCardProps {
  product: FuxionProduct;
  note?: string;
  variant?: 'primary' | 'secondary';
  label?: string;
}

/**
 * Tarjeta transaccional hacia la Tienda Oficial FuXion (shopUrl exacto de fuxion.site).
 * Incluye microdatos schema.org/Product + Offer.
 */
export default function FuxionProductCard({
  product,
  note,
  variant = 'primary',
  label,
}: FuxionProductCardProps) {
  const isPrimary = variant === 'primary';
  const imageUrl = product.image.startsWith('/')
    ? `https://recetasdeperu.com${product.image}`
    : product.image;

  if (!isPrimary) {
    return (
      <aside
        itemScope
        itemType="https://schema.org/Product"
        aria-label={`Comprar ${product.cleanName} en la Tienda Oficial FuXion`}
        className="not-prose my-8 flex flex-col sm:flex-row items-center gap-5 rounded-2xl border border-sky-200 bg-white p-5 shadow-sm"
      >
        <meta itemProp="image" content={imageUrl} />
        <meta itemProp="sku" content={product.sku} />
        <a
          href={product.shopUrl}
          target="_blank"
          rel="sponsored noopener"
          className="shrink-0 w-28 h-28 rounded-xl bg-sky-50 border border-sky-100 grid place-items-center p-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={`${product.cleanName} FuXion`}
            className="max-h-24 w-auto object-contain"
            loading="lazy"
          />
        </a>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
            {label || 'También combina con esta receta'}
          </p>
          <h3 itemProp="name" className="text-lg font-extrabold text-gray-900">
            {product.cleanName}
          </h3>
          <p itemProp="description" className="mt-1 text-sm text-gray-600 leading-relaxed">
            {note || product.description}
          </p>
        </div>
        <div
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
          className="flex flex-col items-center gap-2"
        >
          <meta itemProp="priceCurrency" content="PEN" />
          <meta itemProp="price" content={String(product.price)} />
          <link itemProp="availability" href="https://schema.org/InStock" />
          <link itemProp="url" href={product.shopUrl} />
          <span className="text-xl font-black text-sky-700">{product.formattedPrice}</span>
          <a
            href={product.shopUrl}
            target="_blank"
            rel="sponsored noopener"
            className="rounded-full bg-sky-600 px-5 py-2 text-sm font-bold text-white hover:bg-sky-700 transition"
          >
            Ver en Tienda Oficial →
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside
      itemScope
      itemType="https://schema.org/Product"
      aria-label={`Comprar ${product.cleanName} en la Tienda Oficial FuXion`}
      className="not-prose my-10 rounded-2xl border-2 border-sky-500 bg-gradient-to-br from-sky-50 via-white to-lime-50 p-5 sm:p-7 shadow-lg"
    >
      <meta itemProp="image" content={imageUrl} />
      <meta itemProp="sku" content={product.sku} />
      <meta itemProp="brand" content="FuXion" />
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-sky-100">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-500" />
          {label || 'Ingrediente estrella de esta receta'}
        </span>
        <span className="rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-semibold text-lime-800">
          ✓ Producto oficial · Perú
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 flex justify-center">
          <a
            href={product.shopUrl}
            target="_blank"
            rel="sponsored noopener"
            className="relative w-full max-w-[220px] aspect-square rounded-2xl bg-white border border-sky-100 p-3 grid place-items-center hover:scale-[1.02] transition-transform"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={`${product.cleanName} — Tienda Oficial FuXion Perú`}
              className="max-h-[190px] w-auto object-contain"
              loading="lazy"
            />
            {product.badge && (
              <span className="absolute top-2 left-2 rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                {product.badge}
              </span>
            )}
          </a>
        </div>

        <div className="md:col-span-8 space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {product.categoryName} · {product.pack}
            </p>
            <h3 itemProp="name" className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {product.cleanName}
            </h3>
          </div>
          <p itemProp="description" className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
            {note || product.description}
          </p>
          {product.benefits.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-gray-800">
              {product.benefits.slice(0, 4).map((b, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="mt-0.5 font-extrabold text-lime-600">✓</span>
                  <span className="line-clamp-2">{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
            className="pt-3 border-t border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <meta itemProp="priceCurrency" content="PEN" />
            <meta itemProp="price" content={String(product.price)} />
            <link itemProp="availability" href="https://schema.org/InStock" />
            <link itemProp="url" href={product.shopUrl} />
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-700">
                {product.formattedPrice}
              </span>
              <p className="text-xs text-gray-500">
                {product.perStickFormatted
                  ? `${product.perStickFormatted} por sobre · ${product.pack}`
                  : `${product.pack} · Envío a todo el Perú`}
              </p>
            </div>
            <a
              href={product.shopUrl}
              target="_blank"
              rel="sponsored noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm sm:text-base font-bold text-white shadow-md hover:bg-sky-700 transition"
            >
              Comprar en Tienda Oficial <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
