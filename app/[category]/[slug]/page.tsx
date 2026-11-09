import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RecipeCard from '@/components/RecipeCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  getPostBySlug,
  getRelatedPosts,
  type Post,
} from '@/lib/posts';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'content', 'index.json');
  if (!fs.existsSync(filePath)) return [];

  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return posts.map((post: any) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== category) return {};

  const seoTitle = post.seoTitle || `${post.title} | Recetas de Perú`;
  const desc =
    post.excerpt?.substring(0, 158) ||
    `Aprende todo sobre ${post.title}. Guía gastronómica y receta peruana paso a paso.`;
  const canonicalUrl = `https://recetasdeperu.com/${category}/${slug}/`;
  const imgUrl = post.featuredImage
    ? post.featuredImage.startsWith('/')
      ? `https://recetasdeperu.com${post.featuredImage}`
      : post.featuredImage
    : undefined;

  return {
    title: seoTitle,
    description: desc,
    ...(post.keywords ? { keywords: post.keywords } : {}),
    alternates: {
      canonical: `/${category}/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: desc,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      images: imgUrl
        ? [
            {
              url: imgUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      locale: 'es_PE',
      siteName: 'Recetas de Perú',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: desc,
      images: imgUrl ? [imgUrl] : [],
    },
  };
}

/**
 * 8 Variantes de Módulos Superiores Interactivos (inspirados en Dinamica.pe y GuiaDeBarberias.com)
 * para erradicar cualquier huella estructural entre los 1,000 artículos especializados.
 */
function VariantTopModule({ post }: { post: Post }) {
  if (!post.layoutVariant) return null;

  switch (post.layoutVariant) {
    case 'geo-lima-huarique': {
      const geo = post.geoInfo;
      if (!geo) return null;
      return (
        <section className="my-8 rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-stone-950 via-stone-900 to-red-950 p-6 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-400/40 px-3.5 py-1 text-xs font-extrabold text-red-200">
              📍 Mapa Gastronómico & Huariques: {geo.locationName}
            </span>
            <span className="text-xs font-bold text-amber-300">
              🇵🇪 {geo.regionLabel}
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-300 block">
                Mercados & Ejes Clave
              </span>
              <p className="mt-1 text-xs font-semibold text-stone-100 leading-relaxed">
                {geo.marketsNote}
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                Plato Bandera Local
              </span>
              <p className="mt-1 text-sm font-extrabold text-white">
                {geo.emblemDish}
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                Presupuesto en Huariques
              </span>
              <p className="mt-1 text-xs font-bold text-emerald-200">
                {geo.priceRange}
              </p>
            </div>
            <div className="rounded-xl bg-red-500/15 p-3.5 border border-red-400/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200 block">
                Consejo de Estación y Compra
              </span>
              <p className="mt-1 text-xs text-stone-200 leading-relaxed">
                {geo.climateTip}
              </p>
            </div>
          </div>
        </section>
      );
    }

    case 'geo-provincia-tradicion': {
      const geo = post.geoInfo;
      if (!geo) return null;
      return (
        <section className="my-8 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 p-6 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/15">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 border border-amber-300/40 px-3.5 py-1 text-xs font-extrabold text-amber-200">
              🏺 Ruta de Picanterías y Despensa Regional: {geo.locationName}
            </span>
            <span className="text-xs font-bold text-amber-300">
              {geo.regionLabel}
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-black/25 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                Mercados de Abastos y Tradición
              </span>
              <p className="mt-1 text-xs font-semibold text-stone-100 leading-relaxed">
                {geo.marketsNote}
              </p>
            </div>
            <div className="rounded-xl bg-black/25 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                Especialidad Regional
              </span>
              <p className="mt-1 text-sm font-extrabold text-white">
                {geo.emblemDish}
              </p>
            </div>
            <div className="rounded-xl bg-black/25 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                Ticket Promedio Local
              </span>
              <p className="mt-1 text-xs font-bold text-amber-100">
                {geo.priceRange}
              </p>
            </div>
            <div className="rounded-xl bg-amber-500/20 p-3.5 border border-amber-300/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200 block">
                Microclima y Fogón
              </span>
              <p className="mt-1 text-xs text-stone-100 leading-relaxed">
                {geo.climateTip}
              </p>
            </div>
          </div>
        </section>
      );
    }

    case 'geo-peruano-exterior': {
      const world = post.worldInfo;
      if (!world) return null;
      return (
        <section className="my-8 rounded-2xl border-2 border-blue-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{world.flag}</span>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-400 block">
                  Guía para Peruanos en el Mundo & Equivalencias Culinarias
                </span>
                <h2 className="text-lg font-extrabold text-white">
                  Cocina Peruana en {world.locationName}
                </h2>
              </div>
            </div>
            <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-amber-300">
              Moneda y Mercado: {world.currency}
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase text-sky-300 block">
                Dónde Comprar Insumos
              </span>
              <p className="mt-1 text-xs font-bold text-white leading-relaxed">
                {world.supermarkets}
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase text-amber-300 block">
                Sustituto Exacto de Ají / Hierba
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-200 leading-relaxed">
                {world.localSubstitute}
              </p>
            </div>
            <div className="rounded-xl bg-emerald-500/20 p-3.5 border border-emerald-400/40">
              <span className="text-[11px] font-bold uppercase text-emerald-300 block">
                Equivalencia de Corte / Pescado
              </span>
              <p className="mt-1 text-xs font-extrabold text-white leading-relaxed">
                {world.cutEquivalent}
              </p>
            </div>
          </div>
        </section>
      );
    }

    case 'ficha-comanda-chef': {
      const meta = post.chefMeta;
      if (!meta) return null;
      return (
        <section className="my-8 rounded-2xl border border-stone-200 bg-stone-900 p-6 text-white shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
                👨‍🍳 Ficha Técnica de Comanda & Control de Fuego
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                Parámetros Exactos de Preparación Profesional
              </h2>
            </div>
            <span className="rounded-xl bg-red-600 px-3.5 py-1.5 text-xs font-extrabold text-white">
              Nivel: {meta.difficulty}
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3.5">
              <span className="text-[11px] font-bold uppercase text-amber-300 block">
                ⏱️ Mise en Place
              </span>
              <p className="mt-1 text-sm font-extrabold text-white">{meta.prepTime}</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3.5">
              <span className="text-[11px] font-bold uppercase text-amber-300 block">
                🔥 Cocción / Fuego
              </span>
              <p className="mt-1 text-sm font-extrabold text-white">{meta.cookTime}</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3.5">
              <span className="text-[11px] font-bold uppercase text-amber-300 block">
                🍽️ Rendimiento
              </span>
              <p className="mt-1 text-sm font-extrabold text-white">{meta.servings}</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3.5">
              <span className="text-[11px] font-bold uppercase text-amber-300 block">
                🍳 Utensilio Clave
              </span>
              <p className="mt-1 text-xs font-bold text-stone-200">{meta.keyTool}</p>
            </div>
            <div className="rounded-xl bg-amber-500/15 border border-amber-400/30 p-3.5">
              <span className="text-[11px] font-bold uppercase text-amber-300 block">
                🌡️ Punto Térmico
              </span>
              <p className="mt-1 text-xs font-bold text-amber-100">{meta.tempNote}</p>
            </div>
          </div>
        </section>
      );
    }

    case 'cronograma-fuego': {
      const stages = post.timelineSteps || [];
      if (stages.length === 0) return null;
      return (
        <section className="my-8 rounded-2xl border border-orange-200 bg-orange-50/50 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-950 flex items-center gap-2">
              <span>🔥</span> Cronograma Térmico y Control de Tiempos Paso a Paso
            </h2>
            <span className="text-xs font-bold text-red-700">
              Precisión de Cocción Peruana
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s) => (
              <div
                key={s.phase}
                className="rounded-xl border border-orange-200/80 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between text-[11px] font-extrabold text-red-700">
                  <span>{s.phase}</span>
                  <span>{s.pct}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-orange-100 overflow-hidden">
                  <div
                    className="h-full bg-red-600 rounded-full"
                    style={{ width: s.pct }}
                  />
                </div>
                <h3 className="mt-2 text-xs font-extrabold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      );
    }

    case 'calculadora-presupuesto': {
      const b = post.budgetInfo;
      if (!b) return null;
      return (
        <section className="my-8 rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 p-6 text-white shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-extrabold text-emerald-300">
              💰 Calculadora de Presupuesto Familiar en Soles (S/)
            </span>
            <span className="text-xs font-bold text-amber-300">
              Rendimiento: {b.servings}
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase text-emerald-300 block">
                Costo Total de Mercado
              </span>
              <p className="mt-1 text-lg font-black text-white">
                {b.totalBudgetSoles}
              </p>
              <p className="text-[11px] text-emerald-200 mt-0.5">
                Precio promedio en mercados locales
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase text-emerald-300 block">
                Costo por Porción Servida
              </span>
              <p className="mt-1 text-lg font-black text-amber-300">
                {b.costPerPortion}
              </p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Incluye guarnición y aderezo base
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
              <span className="text-[11px] font-bold uppercase text-emerald-300 block">
                Duración en Táper / Lonchera
              </span>
              <p className="mt-1 text-xs font-bold text-white leading-relaxed">
                {b.taperLife}
              </p>
            </div>
            <div className="rounded-xl bg-emerald-500/20 p-3.5 border border-emerald-400/40">
              <span className="text-[11px] font-bold uppercase text-emerald-200 block">
                Tip de Ahorro Estacional
              </span>
              <p className="mt-1 text-xs font-semibold text-white leading-relaxed">
                {b.savingsNote}
              </p>
            </div>
          </div>
        </section>
      );
    }

    case 'laboratorio-nutricional': {
      const n = post.nutritionInfo;
      if (!n) return null;
      return (
        <section className="my-8 rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-teal-200/70">
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-900">
              🩺 Ficha Bromatológica y Nutricional (Estándar CENAN / INS Perú)
            </span>
            <span className="rounded-full bg-teal-900 px-3 py-0.5 text-[11px] font-bold text-teal-100">
              Ideal para: {n.targetGroup}
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-3.5 border border-teal-100">
              <span className="text-[11px] font-bold uppercase text-teal-700 block">
                Hierro Asimilable
              </span>
              <p className="mt-1 text-base font-extrabold text-gray-900">
                {n.ironMg}
              </p>
              <p className="mt-0.5 text-[11px] text-gray-500">
                Aporte por ración estándar
              </p>
            </div>
            <div className="rounded-xl bg-white p-3.5 border border-teal-100">
              <span className="text-[11px] font-bold uppercase text-teal-700 block">
                Proteína de Alto Valor
              </span>
              <p className="mt-1 text-base font-extrabold text-gray-900">
                {n.proteinG}
              </p>
              <p className="mt-0.5 text-[11px] text-gray-500">
                Energía: {n.caloriesKcal}
              </p>
            </div>
            <div className="rounded-xl bg-white p-3.5 border border-teal-100">
              <span className="text-[11px] font-bold uppercase text-teal-700 block">
                Respuesta Glucémica
              </span>
              <p className="mt-1 text-xs font-extrabold text-gray-900">
                {n.glycemicIndex}
              </p>
            </div>
            <div className="rounded-xl bg-teal-50/80 p-3.5 border border-teal-200">
              <span className="text-[11px] font-bold uppercase text-teal-800 block">
                Sinergia de Absorción
              </span>
              <p className="mt-1 text-[11px] font-semibold text-teal-950 leading-relaxed">
                {n.minsaNote}
              </p>
            </div>
          </div>
        </section>
      );
    }

    case 'duelo-insumos-rescate': {
      const c = post.comparisonInfo;
      if (!c) return null;
      return (
        <section className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-primary-700">
              ⚖️ Comparativa Técnica de Cocina Peruana • Laboratorio Culinario
            </span>
            <span className="text-xs font-bold text-gray-500">
              Evaluación de Textura, Sabor y Rendimiento
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-red-600 bg-red-50/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-red-900">
                  {c.optionA.badge}
                </span>
                <span className="rounded-lg bg-red-700 px-2.5 py-1 text-xs font-black text-white">
                  {c.optionA.score}
                </span>
              </div>
              <h3 className="mt-2 text-base font-extrabold text-gray-900">
                {c.optionA.name}
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs text-gray-800 font-medium">
                {c.optionA.points.map((pt, i) => (
                  <li key={i}>✓ {pt}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-gray-600">
                  {c.optionB.badge}
                </span>
                <span className="rounded-lg bg-gray-800 px-2.5 py-1 text-xs font-black text-white">
                  {c.optionB.score}
                </span>
              </div>
              <h3 className="mt-2 text-base font-extrabold text-gray-900">
                {c.optionB.name}
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs text-gray-600 font-medium">
                {c.optionB.points.map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-white border border-gray-200 px-4 py-3 text-xs font-semibold text-gray-700">
            <strong className="text-primary-700">Veredicto del Chef:</strong> {c.verdict}
          </p>
        </section>
      );
    }
  }
}

function KeyTakeawaysBlock({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <aside className="my-6 rounded-2xl border-l-4 border-primary-600 bg-amber-50/60 p-5 shadow-sm">
      <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary-800 mb-2.5 flex items-center gap-2">
        <span>📌</span> Claves Gastronómicas de Esta Guía
      </h2>
      <ul className="space-y-2 text-sm text-gray-800">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="font-bold text-primary-600">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function TableOfContentsBlock({
  toc,
  compact = false,
}: {
  toc?: { id: string; label: string }[];
  compact?: boolean;
}) {
  if (!toc || toc.length === 0) return null;
  if (compact) {
    return (
      <nav
        aria-label="Índice de secciones"
        className="my-6 flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3.5"
      >
        <span className="text-xs font-extrabold uppercase text-gray-700 mr-1">
          Ir a sección:
        </span>
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-lg bg-white border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 hover:border-primary-600 hover:text-primary-700 transition"
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Tabla de contenidos"
      className="my-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
        📖 Contenido Paso a Paso
      </h2>
      <ol className="grid gap-2 sm:grid-cols-2 text-sm font-semibold text-gray-800">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="hover:text-primary-600 hover:underline transition-colors flex items-center gap-1.5"
            >
              <span className="text-primary-600">→</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function buildDynamicJsonLd(post: Post, category: string, slug: string) {
  const canonicalUrl = `https://recetasdeperu.com/${category}/${slug}/`;
  const imageUrl = post.featuredImage
    ? post.featuredImage.startsWith('/')
      ? `https://recetasdeperu.com${post.featuredImage}`
      : post.featuredImage
    : 'https://recetasdeperu.com/images/posts/receta-de-arroz-con-pollo-con-cerveza-negra-con-receta-regional.webp';

  const images = [imageUrl];
  if (post.secondaryImage) {
    images.push(
      post.secondaryImage.startsWith('/')
        ? `https://recetasdeperu.com${post.secondaryImage}`
        : post.secondaryImage
    );
  }

  const authorOrg = {
    '@type': 'Organization',
    name: 'Recetas de Perú',
    url: 'https://recetasdeperu.com',
  };

  // Legacy posts keep their original Recipe schema
  if (!post.isGenerated2026) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Recipe',
      name: post.title,
      description: post.excerpt || `Receta peruana auténtica de ${post.title}`,
      image: images,
      datePublished: post.date,
      author: authorOrg,
      publisher: authorOrg,
      recipeCuisine: 'Peruana',
      recipeCategory: post.categoryName,
      url: canonicalUrl,
    };
  }

  const graph: any[] = [];

  if (post.schemaType === 'Recipe' && post.recipeSchemaData) {
    const r = post.recipeSchemaData;
    graph.push({
      '@type': 'Recipe',
      '@id': `${canonicalUrl}#recipe`,
      name: post.title,
      description: post.excerpt,
      image: images,
      datePublished: post.date,
      dateModified: post.updatedAt || post.date,
      author: authorOrg,
      publisher: authorOrg,
      recipeCuisine: 'Peruana',
      recipeCategory: post.categoryName,
      prepTime: r.prepTimeISO,
      cookTime: r.cookTimeISO,
      totalTime: r.totalTimeISO,
      recipeYield: r.recipeYield,
      keywords: (post.keywords || [post.focusKeyword || post.title]).join(', '),
      nutrition: {
        '@type': 'NutritionInformation',
        calories: r.calories,
      },
      recipeIngredient: r.ingredients,
      recipeInstructions: r.instructions.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
      mainEntityOfPage: canonicalUrl,
    });
  } else if (post.schemaType === 'HowTo' && post.recipeSchemaData) {
    const r = post.recipeSchemaData;
    graph.push({
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#howto`,
      name: post.title,
      description: post.excerpt,
      image: images,
      totalTime: r.totalTimeISO,
      supply: r.ingredients.map((item) => ({
        '@type': 'HowToSupply',
        name: item,
      })),
      step: r.instructions.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
    });
  } else if (post.schemaType === 'ItemList') {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      image: images,
      datePublished: post.date,
      dateModified: post.updatedAt || post.date,
      author: authorOrg,
      publisher: authorOrg,
      ...(post.geoInfo
        ? {
            contentLocation: {
              '@type': 'Place',
              name: `${post.geoInfo.locationName}, ${post.geoInfo.regionLabel}`,
            },
          }
        : {}),
      mainEntityOfPage: canonicalUrl,
    });
  } else {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      image: images,
      datePublished: post.date,
      dateModified: post.updatedAt || post.date,
      author: authorOrg,
      publisher: authorOrg,
      mainEntityOfPage: canonicalUrl,
    });
  }

  if (post.faqs && post.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const post = getPostBySlug(slug);
  if (!post || post.category !== category) return notFound();

  const relatedPosts = getRelatedPosts(category, slug, 4);
  const jsonLd = buildDynamicJsonLd(post, category, slug);
  const skeleton = post.domSkeleton || 'story-and-masterclass';

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs with Schema.org BreadcrumbList */}
      <Breadcrumbs
        items={[
          { label: 'Inicio', href: '/' },
          { label: post.categoryName, href: `/${category}/` },
          { label: post.title },
        ]}
      />

      <div className="mb-8 mt-6">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Link
            href={`/${category}/`}
            className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-primary-100 transition-colors"
          >
            {post.categoryName}
          </Link>
          {post.badgeLabel && (
            <span className="inline-block bg-stone-900 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold">
              {post.badgeLabel}
            </span>
          )}
          {post.readTime && (
            <span className="text-xs font-medium text-gray-500">
              ⏱️ {post.readTime} de lectura
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <time dateTime={post.date}>
            Publicado:{' '}
            {new Date(post.date).toLocaleDateString('es-PE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.updatedAt && (
            <span>
              · Revisado por última vez:{' '}
              {new Date(post.updatedAt).toLocaleDateString('es-PE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </div>
      </div>

      {/* Rotación DOM según domSkeleton para evitar huellas estructurales */}
      {(skeleton === 'direct-answer-diagnostic' ||
        skeleton === 'comparison-matrix-first') && (
        <KeyTakeawaysBlock items={post.keyTakeaways} />
      )}

      {(skeleton === 'local-directory-guide' ||
        skeleton === 'encyclopedic-glossary') && (
        <TableOfContentsBlock toc={post.toc} compact={true} />
      )}

      {post.featuredImage && (
        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto object-cover max-h-[500px]"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      )}

      {/* Módulo interactivo superior según las 8 variantes */}
      <VariantTopModule post={post} />

      {(skeleton === 'story-and-masterclass' ||
        skeleton === 'market-to-table-planner') && (
        <>
          <KeyTakeawaysBlock items={post.keyTakeaways} />
          <TableOfContentsBlock toc={post.toc} compact={false} />
        </>
      )}

      {(skeleton === 'direct-answer-diagnostic' ||
        skeleton === 'comparison-matrix-first') && (
        <TableOfContentsBlock toc={post.toc} compact={true} />
      )}

      <div
        className="recipe-content prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />

      {(skeleton === 'local-directory-guide' ||
        skeleton === 'encyclopedic-glossary') && (
        <KeyTakeawaysBlock items={post.keyTakeaways} />
      )}

      {/* Preguntas Frecuentes (FAQ Schema + UI) */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="my-12 rounded-2xl border border-gray-200 bg-stone-50/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes sobre {post.focusKeyword || post.title}
          </h2>
          <div className="space-y-4">
            {post.faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none font-bold text-gray-900 flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-primary-600 font-extrabold group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* AdSense Placement with reserved height to prevent CLS */}
      <div className="my-8 flex flex-col items-center bg-gray-50 py-4 border border-gray-100 rounded-xl min-h-[280px]">
        <p className="text-xs text-gray-400 mb-2 text-center w-full block">
          Publicidad
        </p>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' } as React.CSSProperties}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-1070738569472471"
          data-ad-slot="1234567890"
        ></ins>
      </div>

      {/* Related Recipes */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">
            Más Guías y Recetas en {post.categoryName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((rp: any) => (
              <RecipeCard key={rp.slug} post={rp} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
