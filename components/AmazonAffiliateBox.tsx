"use client";

import { useEffect, useState } from "react";
import {
  AMAZON_TAG_ES,
  AMAZON_TAG_US,
  AmazonProductRecommendation,
  AmazonStoreRegion,
  buildAmazonUrl,
  detectUserAmazonRegion,
} from "@/lib/amazon";

interface AmazonAffiliateBoxProps {
  variant: "inline" | "showcase" | "sidebar";
  sectionTitle: string;
  sectionSubtitle: string;
  products: [
    AmazonProductRecommendation,
    AmazonProductRecommendation,
    AmazonProductRecommendation,
  ];
}

function CategoryIcon({
  type,
}: {
  type: AmazonProductRecommendation["categoryType"];
}) {
  if (type === "pan") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-800 border border-red-300/70">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="10" cy="12" r="7" />
          <circle cx="10" cy="12" r="3.5" strokeDasharray="2 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 12h5" />
        </svg>
      </div>
    );
  }
  if (type === "appliance") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 border border-amber-300/70">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="4" y="3" width="16" height="18" rx="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M9 14h6" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      </div>
    );
  }
  if (type === "knife") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-800 border border-red-300/70">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 3L6 16l3.5 3.5L21 7.5C21.8 5.8 20.5 4 19 3zM6 16l-3 3 2 2 3-3"
          />
        </svg>
      </div>
    );
  }
  if (type === "scale") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 border border-amber-300/70">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v4m0 0a5 5 0 100 10 5 5 0 000-10zm-7 14h14"
          />
        </svg>
      </div>
    );
  }
  if (type === "storage") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-800 border border-emerald-300/70">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="3" y="7" width="18" height="13" rx="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h20M8 4h8" />
        </svg>
      </div>
    );
  }
  if (type === "pantry") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-800 border border-orange-300/70">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 3h10l1 4H6l1-4zm-1 4h12v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7zm3 5h6"
          />
        </svg>
      </div>
    );
  }
  // Default: baking
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 border border-amber-300/70">
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 15h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zm2-5a6 6 0 0112 0v5H6v-5z"
        />
      </svg>
    </div>
  );
}

export default function AmazonAffiliateBox({
  variant,
  sectionTitle,
  sectionSubtitle,
  products,
}: AmazonAffiliateBoxProps) {
  const [region, setRegion] = useState<AmazonStoreRegion>("US");

  useEffect(() => {
    setRegion(detectUserAmazonRegion());
  }, []);

  const primaryProduct = products[0];
  const storeName = region === "ES" ? "Amazon.es" : "Amazon.com";
  const activeTag = region === "ES" ? AMAZON_TAG_ES : AMAZON_TAG_US;

  // 1. INLINE VARIANT (Appears mid-article for high mobile CTR)
  if (variant === "inline") {
    const url = buildAmazonUrl(primaryProduct, region);

    return (
      <aside
        aria-label="Recomendación destacada de Recetas de Perú en Amazon"
        className="my-9 rounded-2xl border-2 border-amber-400/85 bg-gradient-to-br from-[#fffdf9] via-[#fff7ed] to-[#fdecd8] p-5 sm:p-6 shadow-md not-prose"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-700/10 px-3 py-1 text-xs font-extrabold text-red-900 border border-red-300/70">
            {primaryProduct.badge}
          </span>
          <div className="inline-flex items-center gap-1 rounded-full bg-white/95 border border-amber-200 px-2.5 py-0.5 text-[11px] font-bold text-gray-600">
            <span>Tienda:</span>
            <button
              type="button"
              onClick={() => setRegion("US")}
              className={`px-1.5 py-0.5 rounded-full transition cursor-pointer ${
                region === "US"
                  ? "bg-amber-500 text-gray-950 font-extrabold"
                  : "hover:text-gray-900"
              }`}
              title={`Ver en Amazon USA / Global (${AMAZON_TAG_US})`}
            >
              🇺🇸 US
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => setRegion("ES")}
              className={`px-1.5 py-0.5 rounded-full transition cursor-pointer ${
                region === "ES"
                  ? "bg-amber-500 text-gray-950 font-extrabold"
                  : "hover:text-gray-900"
              }`}
              title={`Ver en Amazon España (${AMAZON_TAG_ES})`}
            >
              🇪🇸 ES
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <CategoryIcon type={primaryProduct.categoryType} />
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug">
                {primaryProduct.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-700 leading-relaxed">
                {primaryProduct.subtitle}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                <span className="font-bold text-amber-600">
                  ★★★★★ {primaryProduct.rating}/5
                </span>
                <span className="text-gray-500 font-medium">
                  ({primaryProduct.reviewsCount} valoraciones)
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                  ✓ Envío Prime en {storeName}
                </span>
              </div>
            </div>
          </div>

          <div className="sm:shrink-0">
            <a
              href={url}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3.5 text-sm font-extrabold text-gray-950 shadow-sm transition hover:from-amber-400 hover:to-amber-500 hover:shadow-md"
            >
              <span>{primaryProduct.ctaLabel}</span>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    );
  }

  // 2. SIDEBAR VARIANT
  if (variant === "sidebar") {
    return (
      <div className="rounded-2xl border-2 border-amber-400/75 bg-gradient-to-b from-[#fffdf8] to-[#fdf3e4] p-5 shadow-sm not-prose">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-900">
            🛒 Recomendado en {storeName}
          </span>
          <div className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-600 bg-white/85 px-2 py-0.5 rounded-full border border-amber-200">
            <button
              type="button"
              onClick={() => setRegion("US")}
              className={`cursor-pointer ${
                region === "US" ? "text-red-700 font-extrabold underline" : ""
              }`}
            >
              🇺🇸 US
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setRegion("ES")}
              className={`cursor-pointer ${
                region === "ES" ? "text-red-700 font-extrabold underline" : ""
              }`}
            >
              🇪🇸 ES
            </button>
          </div>
        </div>

        <div className="space-y-3.5">
          {products.slice(0, 2).map((prod) => {
            const url = buildAmazonUrl(prod, region);
            return (
              <div
                key={prod.id}
                className="rounded-xl border border-amber-200/80 bg-white p-3.5 shadow-sm"
              >
                <span className="inline-block rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold text-amber-950">
                  {prod.badge}
                </span>
                <h4 className="mt-1.5 text-xs font-extrabold text-gray-900 leading-snug">
                  {prod.title}
                </h4>
                <div className="mt-1 flex items-center gap-2 text-[11px]">
                  <span className="font-bold text-amber-600">
                    ★★★★★ {prod.rating}
                  </span>
                  <span className="text-gray-400">({prod.reviewsCount})</span>
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-2 text-xs font-extrabold text-gray-950 transition hover:from-amber-400 hover:to-amber-500"
                >
                  <span>Ver en {storeName}</span>
                  <span>→</span>
                </a>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-[10px] text-gray-500 leading-tight text-center">
          Enlaces de afiliado oficial de Amazon ({activeTag}).
        </p>
      </div>
    );
  }

  // 3. SHOWCASE VARIANT (Full 3-product comparison grid for articles, categories and Home)
  return (
    <section
      aria-label="Selección de utensilios e insumos peruanos recomendados en Amazon"
      className="my-10 rounded-3xl border-2 border-amber-400/80 bg-gradient-to-br from-[#2a0a08] via-[#450a0a] to-[#170e0c] p-6 sm:p-8 text-white shadow-xl not-prose"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-extrabold text-amber-300">
            🛒 Selección Oficial Recetas de Perú · Disponible en {storeName}
          </span>
          <h2 className="mt-2.5 text-xl sm:text-2xl font-extrabold !text-white">
            {sectionTitle}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-red-100/85">
            {sectionSubtitle}
          </p>
        </div>

        {/* Store Switcher (Auto-detected + Manual Override) */}
        <div className="shrink-0 self-start sm:self-center rounded-xl bg-white/10 p-1.5 border border-white/15 text-xs">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setRegion("US")}
              className={`rounded-lg px-2.5 py-1.5 font-bold transition cursor-pointer ${
                region === "US"
                  ? "bg-amber-400 text-gray-950 shadow-sm"
                  : "text-red-100 hover:text-white"
              }`}
            >
              🇺🇸 Amazon.com
            </button>
            <button
              type="button"
              onClick={() => setRegion("ES")}
              className={`rounded-lg px-2.5 py-1.5 font-bold transition cursor-pointer ${
                region === "ES"
                  ? "bg-amber-400 text-gray-950 shadow-sm"
                  : "text-red-100 hover:text-white"
              }`}
            >
              🇪🇸 Amazon.es
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {products.map((product, index) => {
          const url = buildAmazonUrl(product, region);
          const isFeatured = index === 0;

          return (
            <div
              key={product.id}
              className={`flex flex-col justify-between rounded-2xl p-5 transition ${
                isFeatured
                  ? "bg-gradient-to-b from-amber-50 to-white text-gray-900 border-2 border-amber-400 shadow-lg"
                  : "bg-white/95 text-gray-900 border border-gray-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-extrabold ${
                      isFeatured
                        ? "bg-amber-500 text-gray-950"
                        : "bg-red-50 text-red-900 border border-red-200"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                <div className="mt-3 flex items-start gap-3">
                  <CategoryIcon type={product.categoryType} />
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                    {product.title}
                  </h3>
                </div>

                <p className="mt-2.5 text-xs text-gray-600 leading-relaxed">
                  {product.subtitle}
                </p>

                <ul className="mt-3.5 space-y-1.5 border-t border-gray-200/80 pt-3 text-xs text-gray-700">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5">
                      <span className="text-red-700 font-extrabold">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100">
                <div className="mb-2.5 flex items-center justify-between text-xs">
                  <span className="font-extrabold text-amber-600">
                    ★★★★★ {product.rating}/5
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700">
                    ✓ Disponible en {storeName}
                  </span>
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-extrabold transition shadow-sm ${
                    isFeatured
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-gray-950 hover:from-amber-400 hover:to-amber-500"
                      : "bg-[#991b1b] text-white hover:bg-[#7f1d1d]"
                  }`}
                >
                  <span>{product.ctaLabel}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-center text-[11px] text-red-200/75">
        * En calidad de Afiliado de Amazon, Recetasdeperu.com obtiene ingresos
        por las compras adscritas que cumplen los requisitos aplicables sin
        costo adicional para ti. Tienda detectada automáticamente: {storeName} (
        {activeTag}).
      </p>
    </section>
  );
}
