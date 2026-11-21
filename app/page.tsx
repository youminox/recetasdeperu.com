import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import ReadingProgress from "@/components/ReadingProgress";
import ClientEffects from "@/components/ClientEffects";
import SplitHeading from "@/components/SplitHeading";
import OpenChatButton from "@/components/OpenChatButton";
import Hero from "@/components/home/Hero";
import ScrollStory from "@/components/home/ScrollStory";
import FlavorEmulsion from "@/components/home/FlavorEmulsion";
import IngredientOrbit, { type OrbitItem } from "@/components/home/IngredientOrbit";
import NutritionCounters, { type NutriItem } from "@/components/home/NutritionCounters";
import DayNightSlider from "@/components/home/DayNightSlider";
import MomentsCarousel, { type Moment } from "@/components/home/MomentsCarousel";
import BudgetBlock, { type BudgetOption } from "@/components/home/BudgetBlock";
import { getAllPosts, getCategories } from "@/lib/posts";

const CLAIMS = [
  "Ceviche Clásico",
  "Lomo Saltado al Wok",
  "Ají de Gallina Cremoso",
  "Chancho a la Caja China",
  "Arroz con Pollo a la Chiclayana",
  "Causa Limeña",
  "Pachamanca Tradicional",
  "Suspiro a la Limeña",
];

const CLAIMS_2 = [
  "Ají Amarillo",
  "Ají Panca",
  "Limón de Chulucanas",
  "Huacatay Andino",
  "Rocoto Arequipeño",
  "Maíz Morado",
  "Pisco Quebranta",
  "Papa Amarilla Tumbay",
];

const FAQ = [
  {
    q: "¿Qué encuentro en Recetas de Perú (recetasdeperu.com)?",
    a: "Más de 3,970 recetas y guías gastronómicas peruanas paso a paso: desde platos criollos, marinos, regionales, chifa y nikkei hasta menús económicos en Soles (S/), loncheras antianemia, rescate culinario, rutas de huariques en Lima y recetas funcionales con FuXion.",
  },
  {
    q: "¿Cómo funciona el Chef y Orientador Culinario IA?",
    a: "Haz clic en el botón flotante 'Chef IA Recetas' en cualquier momento y cuéntale qué ingredientes tienes en tu refrigeradora, cuánto presupuesto manejas o qué plato quieres cocinar. El Chef IA te orientará al instante con consejos de sazón y te guiará a las URLs exactas de nuestras recetas paso a paso (o te preparará la receta completa si aún no está publicada).",
  },
  {
    q: "¿Cómo armo un menú familiar económico con S/ 20 al día?",
    a: "En nuestra categoría 'Menús Semanales y Loncheras' (/menus-y-presupuesto/) encontrarás planificadores de lunes a viernes con lista de mercado en Soles, aprovechando insumos de estación, menestras, pescado azul, sangrecita y guisos rendidores para 4 personas.",
  },
  {
    q: "Vivo en el extranjero, ¿con qué reemplazo el ají amarillo, el huacatay o la chicha de jora?",
    a: "Tenemos una sección exclusiva llamada 'Peruanos en el Mundo' (/peruanos-en-el-mundo/) con guías por ciudad (Miami, Madrid, Santiago, Buenos Aires, Milán, Tokio) y tablas exactas de sustitutos de supermercado para que tu comida sepa igual que en casa.",
  },
  {
    q: "¿Qué hago si se me cortó el ají de gallina, la salsa huancaína o se me pasó de sal un guiso?",
    a: "Visita nuestra categoría 'Rescate Culinario y Técnicas' (/rescate-culinario-y-tecnicas/). Allí explicamos la ciencia detrás de cada emulsión y cómo recuperar una salsa cortada en 1 minuto con agua tibia o yema, o cómo corregir el exceso de sal sin aguar tu preparación.",
  },
  {
    q: "¿Qué son las Recetas con FuXion dentro del portal?",
    a: "En /fuxion/ integramos 50 recetas peruanas caseras (refrescos con frutas de estación, postres ligeros de matcha, desayunos proteicos y acompañantes para tus platos criollos) elaboradas con bebidas funcionales FuXion 100% naturales endulzadas con estevia.",
  },
];

const getCategoryEmoji = (slug: string) => {
  const emojis: Record<string, string> = {
    arroz: "🍚",
    bebidas: "🍹",
    postres: "🍰",
    platos: "🥘",
    salsas: "🫕",
    pan: "🍞",
    top: "⭐",
    condimentos: "🧂",
    electrodomesticos: "⚡",
    "postres-sin-horno": "🧁",
    "desayunos-frios": "🥣",
    "snacks-crudos": "🥜",
    "mejores-platos": "🏆",
    sincalorias: "🥗",
    sanvalentin: "❤️",
    refrigeradora: "🧊",
    restaurantes: "🍽️",
    "chef-reconocidos": "👨‍🍳",
    papa: "🥔",
    sarten: "🍳",
    "bebidas-refrescantes-y-smoothies": "🥤",
    "rutas-lima-y-callao": "📍",
    "cocina-regional-ciudades": "🇵🇪",
    "peruanos-en-el-mundo": "🌎",
    "menus-y-presupuesto": "💰",
    "chifa-y-nikkei-casero": "🥢",
    "fuego-brasa-y-ollas": "🔥",
    "nutricion-y-dietas-peruanas": "🩺",
    "cortes-pescados-e-insumos": "🐟",
    "pisco-cocteleria-y-bebidas-calientes": "🍸",
    "panaderia-regional-y-dulces-de-convento": "🥐",
    "rescate-culinario-y-tecnicas": "🧪",
    "calendario-festivo-y-banquetes": "🎉",
    fuxion: "🍵",
  };
  return emojis[slug] || "🍽️";
};

export default function Home() {
  const posts = getAllPosts();
  const categories = getCategories();

  const featuredPosts = posts.slice(0, 6);
  const popularPosts = posts.slice(10, 18);

  const orbit: OrbitItem[] = [
    {
      k: "aji-amarillo",
      name: "Ají Amarillo",
      img: "/images/posts/aji-de-gallina-creada-por-claudia-navarro-de-la-ciudad-arequipa.webp",
      role: "El sol y emblema del aderezo peruano",
      d: "Aporta color dorado vibrante, aroma frutal y picor amable. Desvenado y blanqueado tres veces es la base cremosa del ají de gallina, la salsa huancaína, la causa limeña y los tiraditos.",
      href: "/salsas/",
    },
    {
      k: "aji-panca",
      name: "Ají Panca",
      img: "/images/posts/anticuchos-creada-por-ana-torres-de-la-ciudad-tacna.webp",
      role: "Color rubí profundo y toque ahumado",
      d: "Ají seco al sol de picor muy bajo y sabor terroso-dulzón. Indispensable para marinar anticuchos, adobo arequipeño, carapulcra chinchana, chancho al cilindro y pavo navideño.",
      href: "/fuego-brasa-y-ollas/",
    },
    {
      k: "limon",
      name: "Limón Sutil Peruano",
      img: "/images/fuxion/ceviche-bajo-en-sal-recetas-con-menos-sodio.webp",
      role: "Acidez intensa y perfume cítrico de Chulucanas",
      d: "Más pequeño, jugoso y aromático que otros cítricos. Exprimido al instante (sin apretar la cáscara blanca para que no amargue) desnaturaliza el pescado en el ceviche y equilibra el Pisco Sour.",
      href: "/cortes-pescados-e-insumos/",
    },
    {
      k: "huacatay",
      name: "Huacatay",
      img: "/images/posts/como-preparar-crema-de-aji-limo-sin-ingredientes-procesados.webp",
      role: "Menta negra andina de aroma inconfundible",
      d: "Hierba aromática de los Andes que, sofrita con maní, queso paria y ají mirasol, da vida a la ocopa arequipeña, el ají de pollería y el marinado de la pachamanca.",
      href: "/cocina-regional-ciudades/",
    },
    {
      k: "rocoto",
      name: "Rocoto Arequipeño",
      img: "/images/posts/como-hacer-salsa-de-rocoto-casera-paso-a-paso.webp",
      role: "Picor frutal, jugoso y de semillas negras",
      d: "Carnoso como un pimiento pero con carácter volcánico. Reina en las picanterías en forma de rocoto relleno horneado con pastel de papa, solterito, escribano y crema de rocoto.",
      href: "/cocina-regional-ciudades/",
    },
    {
      k: "maiz-morado",
      name: "Maíz Morado",
      img: "/images/posts/mazamorra-morada-creada-por-ana-torres-de-la-ciudad-arequipa.webp",
      role: "Superalimento ancestral rico en antocianinas",
      d: "Hervido desde la coronta con cáscara de piña, membrillo, canela y clavo de olor nos regala la chicha morada tradicional y la mazamorra morada limeña.",
      href: "/bebidas/",
    },
    {
      k: "papa-amarilla",
      name: "Papa Amarilla Tumbay",
      img: "/images/posts/causa-limena-creada-por-alfredo-medina-de-la-ciudad-lima.webp",
      role: "Textura arenosa que se deshace en el paladar",
      d: "Joya de las alturas de Huánuco y los Andes centrales. Prensada en caliente mientras aún humea logra la masa sedosa de la causa limeña, la papa rellena y los mejores purés.",
      href: "/papa/",
    },
    {
      k: "culantro",
      name: "Culantro y Ajo Criollo",
      img: "/images/posts/arroz-con-pollo-creada-por-andres-romero-de-la-ciudad-arequipa.webp",
      role: "El dúo verde de los arroces y secos del norte",
      d: "Licuado fresco en el último hervor para conservar su verde esmeralda, perfuma el arroz con pollo, el seco de cabrito con frejoles y el aguadito levantamuertos.",
      href: "/arroz/",
    },
  ];

  const nutri: NutriItem[] = [
    {
      v: posts.length,
      dec: 0,
      u: "recetas",
      l: "Recetario Total",
      pct: 100,
      note: "Platos, postres, bebidas y guías paso a paso",
    },
    {
      v: categories.length,
      dec: 0,
      u: "temas",
      l: "Categorías Culinarias",
      pct: 92,
      note: "Organizadas por insumo, técnica y región",
    },
    {
      v: 100,
      dec: 0,
      u: "menús",
      l: "Menús y Loncheras S/",
      pct: 85,
      note: "Presupuestos reales de mercado en Soles",
    },
    {
      v: 90,
      dec: 0,
      u: "guías",
      l: "Nutrición y Antianemia",
      pct: 82,
      note: "Hierro hemínico, diabéticos y niños",
    },
    {
      v: 160,
      dec: 0,
      u: "rutas",
      l: "Huariques y Regiones",
      pct: 88,
      note: "Lima, Callao y picanterías del Perú",
    },
    {
      v: 50,
      dec: 0,
      u: "recetas",
      l: "Recetario Funcional FuXion",
      pct: 78,
      note: "Bebidas, postres y platos sin azúcar añadida",
    },
  ];

  const moments: Moment[] = [
    {
      img: "/images/posts/arroz-con-habas-serranas-con-ingredientes-locales.webp",
      t: "Domingo de Caja China",
      d: "Tiempos exactos por kilo, cantidad de carbón y salmuera para lograr el cuero galleta.",
      href: "/fuego-brasa-y-ollas/",
      alt: "Chancho a la caja china y brasas peruanas",
      tag: "Brasas & Ollas",
    },
    {
      img: "/images/posts/tacacho-con-cecina-creada-por-andres-romero-de-la-ciudad-chiclayo.webp",
      t: "Menú Semanal con S/ 20",
      d: "Planificador de lunes a viernes para 4 personas con lista de compras en el mercado.",
      href: "/menus-y-presupuesto/",
      alt: "Menú familiar económico peruano",
      tag: "Ahorro en S/",
    },
    {
      img: "/images/posts/arroz-con-mariscos-estilo-ica-con-ingredientes-locales.webp",
      t: "Ruta de Huariques en Lima",
      d: "Dónde comer y qué insumos comprar en los mercados tradicionales de cada distrito.",
      href: "/rutas-lima-y-callao/",
      alt: "Arroz con mariscos en huarique limeño",
      tag: "Lima & Callao",
    },
    {
      img: "/images/posts/receta-de-arroz-chaufa-con-chancho-oriental-con-receta-regional.webp",
      t: "Chifa & Nikkei en Casa",
      d: "El secreto del fuego alto en el wok para un arroz chaufa, aeropuertos y tiraditos.",
      href: "/chifa-y-nikkei-casero/",
      alt: "Arroz chaufa peruano al wok",
      tag: "Wok & Fusión",
    },
    {
      img: "/images/posts/has-probado-salsa-de-remolacha-con-almendras-te-sorprendera.webp",
      t: "Recetas Antianemia",
      d: "Mousse de sangrecita con cacao, chaufa de hígado y loncheras ricas en hierro para niños.",
      href: "/nutricion-y-dietas-peruanas/",
      alt: "Platos peruanos ricos en hierro y nutritivos",
      tag: "Salud & Niños",
    },
    {
      img: "/images/posts/trucos-para-sacarle-provecho-a-la-olla-arrocera.webp",
      t: "Peruanos en el Exterior",
      d: "Qué papa comprar y cómo sustituir el ají amarillo o huacatay en EE. UU. y Europa.",
      href: "/peruanos-en-el-mundo/",
      alt: "Cocina peruana en el extranjero",
      tag: "Diáspora 🌎",
    },
    {
      img: "/images/fuxion/agua-de-pina-y-canela-con-berry-balance.webp",
      t: "Cocina Funcional FuXion",
      d: "Refrescos, postres y desayunos peruanos con bebidas funcionales sin azúcar añadida.",
      href: "/fuxion/",
      alt: "Agua de piña y canela con Berry Balance FuXion",
      tag: "Saludable 🍵",
    },
  ];

  const budgetOptions: BudgetOption[] = [
    {
      key: "economico",
      label: "Menú Económico",
      perPortion: 5.0,
      img: "/images/posts/arroz-con-pollo-creada-por-ana-torres-de-la-ciudad-puno.webp",
      alt: "Menú económico peruano hecho en casa",
      desc: "Compras inteligentes en mercado de abastos combinando menestras, pollo, pescado azul de estación, huevos y verduras frescas.",
      sampleDishes: "Lentejitas con pescado frito, cau cau casero, tortilla de sangrecita, aguadito.",
      href: "/menus-y-presupuesto/",
    },
    {
      key: "criollo",
      label: "Almuerzo Criollo",
      perPortion: 8.5,
      img: "/images/posts/aji-de-gallina-creada-por-claudia-navarro-de-la-ciudad-arequipa.webp",
      alt: "Ají de gallina criollo familiar",
      desc: "Los clásicos infaltables de la mesa familiar peruana con cortes de res, pechuga de gallina o pollo, queso fresco, aceitunas y ajíes selectos.",
      sampleDishes: "Ají de gallina, lomo saltado, seco de res con frejoles, carapulcra con sopa seca.",
      href: "/platos/",
    },
    {
      key: "especial",
      label: "Banquete / Domingo",
      perPortion: 14.5,
      img: "/images/posts/pachamanca-creada-por-ana-torres-de-la-ciudad-lima.webp",
      alt: "Banquete peruano de fin de semana",
      desc: "Para celebraciones, domingos de familia o fiestas: pescados blancos y mariscos frescos, panceta para caja china o carnes para pachamanca.",
      sampleDishes: "Ceviche mixto + jalea, chancho a la caja china, pachamanca a la olla, pato guisado.",
      href: "/calendario-festivo-y-banquetes/",
    },
  ];

  const bentoSlugs = [
    "platos",
    "menus-y-presupuesto",
    "chifa-y-nikkei-casero",
    "fuego-brasa-y-ollas",
    "rescate-culinario-y-tecnicas",
    "fuxion",
  ];
  const bentoCats = bentoSlugs
    .map((s) => categories.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://recetasdeperu.com/#website",
        name: "Recetas de Perú",
        url: "https://recetasdeperu.com/",
        description:
          "Enciclopedia gastronómica del Perú con más de 3,970 recetas paso a paso, menús económicos en Soles, rutas de huariques y Chef IA.",
        inLanguage: "es-PE",
        publisher: {
          "@type": "Organization",
          name: "Recetas de Perú",
          url: "https://recetasdeperu.com",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://recetasdeperu.com/#faq",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1–2. Hero 3D con Partículas y Buscador */}
      <Hero totalPosts={posts.length} totalCategories={categories.length} />

      {/* 3. Doble Cinta Marquee de Platos e Ingredientes */}
      <div className="relative border-b border-[var(--line)] bg-white py-5">
        <div className="marquee">
          {[0, 1].map((k) => (
            <div
              key={k}
              className="marquee-track font-playfair text-lg font-bold text-[#1f1210]/85"
              aria-hidden={k === 1}
            >
              {CLAIMS.map((t) => (
                <span key={t} className="flex items-center gap-3 whitespace-nowrap">
                  <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-gradient-to-br from-[#f59e0b] to-[#dc2626]" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="marquee reverse mt-3" aria-hidden>
          {[0, 1].map((k) => (
            <div
              key={k}
              className="marquee-track text-sm font-semibold uppercase tracking-[0.14em] text-[#991b1b]/75"
            >
              {CLAIMS_2.map((t) => (
                <span key={t} className="flex items-center gap-3 whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Qué es Recetas de Perú + Mosaico Spotlight */}
      <section id="que-es" className="wrap py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="eyebrow" data-reveal>
              Nuestra identidad culinaria
            </span>
            <SplitHeading
              text="La cocina peruana de casa,"
              accent={{ text: "sin secretos ni pasos ocultos", className: "text-[#b91c1c]" }}
              className="section-title mt-3"
            />
            <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
              <strong className="text-[#1f1210]">Recetas de Perú</strong> reúne más de{" "}
              <strong className="text-[#1f1210]">
                {posts.length.toLocaleString("es-PE")} preparaciones y guías prácticas
              </strong>{" "}
              documentadas para la cocina diaria: desde el punto exacto del aderezo criollo y el
              corte del pescado para ceviche, hasta menús familiares con presupuesto real en Soles y
              equivalencias para peruanos en todo el mundo.
            </p>
            <div
              className="mt-6 rounded-2xl border border-amber-300/70 bg-amber-50/80 p-5"
              data-reveal
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
                👨‍🍳 ¿Qué hace único a nuestro recetario?
              </p>
              <ul className="mt-2 space-y-1.5 text-[0.95rem] text-[#1f1210]">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-0 font-bold text-amber-700">•</span>
                  Tiempos reales de cocción, temperaturas y cantidades en gramos y medidas caseras.
                </li>
                <li className="relative pl-4">
                  <span className="absolute left-0 top-0 font-bold text-amber-700">•</span>
                  Técnicas de rescate culinario por si una salsa se corta o un guiso queda salado.
                </li>
                <li className="relative pl-4">
                  <span className="absolute left-0 top-0 font-bold text-amber-700">•</span>
                  Chef IA integrado en vivo para orientarte qué cocinar según lo que tienes hoy.
                </li>
              </ul>
            </div>
            <div className="mt-7 flex flex-wrap gap-3" data-reveal>
              <Link href="/platos/" className="btn btn-ghost" data-magnetic>
                Explorar platos tradicionales
              </Link>
              <Link href="/rescate-culinario-y-tecnicas/" className="btn btn-ghost" data-magnetic>
                Técnicas y rescate culinario
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className="relative col-span-2 aspect-[16/8] overflow-hidden rounded-3xl shadow-[0_30px_60px_-35px_rgba(69,10,10,0.65)]"
              data-reveal
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/posts/causa-limena-creada-por-alfredo-medina-de-la-ciudad-lima.webp"
                alt="Mesa peruana con causa limeña y platos tradicionales"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#991b1b]">
                Sazón tradicional peruana · Paso a paso
              </span>
            </div>
            {[
              [
                "🥘",
                "Recetario Criollo y Regional",
                "Costa, Sierra y Selva con los insumos y secretos de cada provincia.",
              ],
              [
                "💰",
                "Menús en Soles (S/)",
                "Planificadores semanales y loncheras escolares cuidando el bolsillo.",
              ],
              [
                "🥢",
                "Chifa, Nikkei y Brasas",
                "Del wok a fuego vivo a la caja china y el cilindro del domingo.",
              ],
              [
                "👨‍🍳",
                "Chef IA en Tiempo Real",
                "Pregúntale qué cocinar y te guiará directo a la receta ideal.",
              ],
            ].map(([e, t, d], i) => (
              <div
                key={t}
                className="card spot p-5"
                data-reveal
                data-reveal-delay={String(i)}
              >
                <p className="text-2xl" aria-hidden>
                  {e}
                </p>
                <p className="mt-2 font-playfair text-lg font-bold leading-tight text-[#1f1210]">
                  {t}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Historia fijada GSAP: del aderezo a tu mesa */}
      <ScrollStory />

      {/* 6. La ciencia del sabor peruano (Emulsión y Leche de Tigre) */}
      <section className="relative isolate overflow-hidden bg-[#140a08] py-24 text-white">
        <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#dc2626]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#f59e0b]/25 blur-3xl" />
        <div className="hero-grid opacity-50" />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow !text-[#fde047]" data-reveal>
              Técnica culinaria, sin misterio
            </span>
            <SplitHeading
              text="Cómo nace una"
              accent={{ text: "emulsión peruana perfecta", className: "text-gradient" }}
              className="section-title mt-3"
            />
            <p className="mt-5 text-lg text-white/80" data-reveal>
              Tanto en una <strong className="text-white">salsa huancaína</strong> o un{" "}
              <strong className="text-white">ají de gallina</strong> como en una{" "}
              <strong className="text-white">leche de tigre</strong>, el secreto está en la
              emulsión: unir las grasas naturales (aceite vegetal, queso, maní o nueces) con el
              líquido (leche, caldo o jugo de limón) mediante el almidón y las proteínas sin que se
              separen.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3" data-reveal>
              {[
                ["🍋", "Acidez justa"],
                ["🌶️", "Pasta de ají"],
                ["🥄", "Emulsión sedosa"],
              ].map(([e, t]) => (
                <div key={t} className="glass p-4 text-center">
                  <p className="text-2xl" aria-hidden>
                    {e}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{t}</p>
                </div>
              ))}
            </div>
            <div className="glass mt-6 p-5 text-sm text-white/80" data-reveal>
              <strong className="text-[#fde047]">Tip de Rescate Culinario:</strong> si tu ají de
              gallina o huancaína se corta por exceso de calor o aceite rápido, retira del fuego y
              licúa o bate enérgicamente con 2 cucharadas de agua caliente o caldo hasta recuperar
              el brillo.
            </div>
            <div className="mt-7 flex flex-wrap gap-3" data-reveal>
              <Link
                href="/rescate-culinario-y-tecnicas/"
                className="btn btn-glass"
                data-magnetic
              >
                Guías de Rescate Culinario
              </Link>
              <Link href="/salsas/" className="btn btn-glass" data-magnetic>
                Salsas y Cremas Peruanas
              </Link>
            </div>
          </div>
          <div data-reveal>
            <FlavorEmulsion />
          </div>
        </div>
      </section>

      {/* 7. Órbita interactiva de los 8 ingredientes madre */}
      <section className="wrap py-24">
        <IngredientOrbit
          items={orbit}
          center="/images/fuxion/ceviche-bajo-en-sal-recetas-con-menos-sodio.webp"
        />
        <p className="mt-10 text-center text-sm text-[var(--muted)]">
          ¿Quieres conocer qué corte de carne, pescado o variedad de ají elegir en el mercado?{" "}
          <Link
            href="/cortes-pescados-e-insumos/"
            className="font-bold text-[#b91c1c] underline"
          >
            Ver las 90 guías de Cortes, Pescados e Insumos →
          </Link>
        </p>
      </section>

      {/* 8. Contadores animados y Ficha Nutricional Peruana */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#3b0808] via-[#140a08] to-[#431407] py-24 text-white">
        <div className="hero-aurora opacity-40" />
        <div className="wrap relative grid items-start gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="eyebrow !text-[#fde047]" data-reveal>
              La enciclopedia en números
            </span>
            <SplitHeading
              text="Todo nuestro recetario,"
              accent={{ text: "cifra por cifra", className: "text-gradient" }}
              className="section-title mt-3"
            />
            <p className="mt-4 max-w-xl text-white/75" data-reveal>
              Cada categoría ha sido construida para responder a las necesidades reales de las
              familias peruanas: sabor tradicional, nutrición con hierro contra la anemia y ahorro
              en el mercado.
            </p>
            <div className="mt-8">
              <NutritionCounters data={nutri} />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/nutricion-y-dietas-peruanas/"
                className="btn btn-glass"
                data-magnetic
              >
                Recetas Antianemia y Salud
              </Link>
              <Link href="/fuxion/" className="btn btn-glass" data-magnetic>
                Recetario Funcional FuXion
              </Link>
            </div>
          </div>

          <div
            className="mx-auto w-full max-w-[430px] rounded-3xl bg-white p-6 text-[#1f1210] shadow-2xl"
            data-reveal
          >
            <div className="border-b-4 border-[#1f1210] pb-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#b91c1c]">
                Estándar Nutricional Peruano
              </p>
              <h3 className="font-playfair text-3xl font-extrabold leading-tight">
                El Plato Familiar Equilibrado
              </h3>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Proporción recomendada en nuestras guías de menús y nutrición casera
              </p>
            </div>
            <dl className="mt-4 divide-y divide-gray-200 text-sm">
              {[
                ["🥗 Verduras y Zarza Criolla", "50% del plato", "Fibra, vitamina C y frescura"],
                ["🐟 Proteína (Pescado, Pollo, Sangrecita)", "25% del plato", "Hierro hemínico y músculo"],
                ["🥔 Carbohidrato (Arroz, Papa o Menestra)", "25% del plato", "Energía sostenida sin exceso"],
                ["🍋 Hidratación Natural", "1 vaso", "Refresco de fruta o bebida sin azúcar"],
                ["💰 Costo Promedio Casero", "S/ 5 a S/ 8.50", "Por porción preparada en casa"],
              ].map(([k, v, sub]) => (
                <div key={k} className="py-3 flex items-center justify-between gap-3">
                  <div>
                    <dt className="font-bold text-[#1f1210]">{k}</dt>
                    <dd className="text-xs text-[var(--muted)]">{sub}</dd>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#fff7ed] border border-[#f1deda] px-3 py-1 font-extrabold text-xs text-[#991b1b]">
                    {v}
                  </span>
                </div>
              ))}
            </dl>
            <div className="mt-4 rounded-2xl bg-[#fef2f2] p-3.5 text-xs text-[#7f1d1d]">
              <strong>Consejo MINSA en nuestras recetas:</strong> acompaña siempre las menestras
              (lentejas, frejoles) con una ensalada con limón o refresco cítrico para duplicar la
              absorción del hierro vegetal.
            </div>
          </div>
        </div>
      </section>

      {/* 9. Escena Día ↔ Noche: ¿Qué se cocina según la hora? */}
      <section className="wrap py-24">
        <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow" data-reveal>
              Un plato para cada momento
            </span>
            <SplitHeading
              text="De la mañana a la noche,"
              accent={{ text: "la mesa peruana tiene su ritual", className: "text-[#b91c1c]" }}
              className="section-title mt-3"
            />
          </div>
          <p className="text-lg text-[var(--muted)]" data-reveal>
            Arrastra el control del tiempo. Cambia el cielo sobre los Andes y la costa, y descubre
            qué recetas son las favoritas en cada horario del día en los hogares del Perú.
          </p>
        </div>

        <div data-reveal>
          <DayNightSlider />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            [
              "Mañanas con Energía",
              "Panes regionales, tamales, quinua y desayunos fríos",
              "/images/fuxion/desayunos-peruanos-para-epoca-de-examenes-con-iq-plus.webp",
              "/desayunos-frios/",
            ],
            [
              "El Gran Almuerzo Peruano",
              "Ceviches, guisos criollos, arroces y menús de S/ 20",
              "/images/posts/arroz-con-pollo-creada-por-andres-romero-de-la-ciudad-arequipa.webp",
              "/platos/",
            ],
            [
              "Noches de Wok y Caldos",
              "Chifa casero, sopas reconfortantes y bebidas calientes",
              "/images/fuxion/que-comer-despues-de-fiesta-caldo-aguadito-rexet.webp",
              "/chifa-y-nikkei-casero/",
            ],
          ].map(([t, d, src, href], i) => (
            <Link
              key={t}
              href={href}
              className="card spot overflow-hidden group"
              data-reveal
              data-reveal-delay={String(i)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={t}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#b45309] font-playfair font-extrabold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-playfair text-lg font-bold leading-tight group-hover:text-[#dc2626] transition-colors">
                    {t}
                  </p>
                  <p className="text-sm text-[var(--muted)]">{d}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. Carrusel Horizontal 4:5 de Momentos y Rutas */}
      <section className="overflow-hidden bg-[#fff7ed] py-24">
        <div className="wrap">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow" data-reveal>
              Gastronomía para tu estilo de vida
            </span>
            <SplitHeading
              text="Momentos, rutas y"
              accent={{ text: "colecciones especiales", className: "text-[#b91c1c]" }}
              className="section-title mt-3"
            />
          </div>
          <MomentsCarousel items={moments} />
        </div>
      </section>

      {/* 11. Calculadora de Presupuesto Familiar en Soles */}
      <section id="presupuesto" className="wrap py-24">
        <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow" data-reveal>
              Economía doméstica y sabor
            </span>
            <SplitHeading
              text="Cocina rico en casa."
              accent={{ text: "Planifica tu menú en Soles.", className: "text-[#b91c1c]" }}
              className="section-title mt-3"
            />
          </div>
          <ul className="grid gap-2 text-[var(--muted)]" data-reveal>
            {[
              "Listas de compras optimizadas para mercados peruanos",
              "Aprovechamiento de insumos de temporada y cortes rendidores",
              "Loncheras escolares nutritivas por menos de S/ 4 al día",
              "Orientación personalizada al instante con nuestro Chef IA",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#8cc63f]/25 text-sm font-bold text-[#3b630c]">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <BudgetBlock options={budgetOptions} />
        </div>
      </section>

      {/* 12. Bento Grid de Categorías + Todas las Categorías + Últimas y Populares */}
      <section className="bg-gradient-to-b from-white to-[#fff7ed] py-24">
        <div className="wrap">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow" data-reveal>
              Explora los {categories.length} universos culinarios
            </span>
            <SplitHeading
              text="Todo sobre la cocina peruana,"
              accent={{ text: "ordenado por especialidad", className: "text-[#b91c1c]" }}
              className="section-title mt-3"
            />
          </div>

          {/* Bento Destacado */}
          <div className="grid auto-rows-[minmax(190px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {bentoCats.map((c, i) => {
              const big = i === 0;
              const wide = i === 1 || i === 4 || i === 5;
              const catPosts = posts.filter((p) => p.category === c.slug).slice(0, 5);
              return (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/`}
                  className={`card spot group flex flex-col p-7 ${
                    big
                      ? "spot-dark border-transparent bg-gradient-to-br from-[#991b1b] via-[#7f1d1d] to-[#431407] text-white md:col-span-2 lg:row-span-2"
                      : ""
                  } ${wide ? "lg:col-span-2" : ""}`}
                  data-reveal
                  data-reveal-delay={String(i % 4)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${
                        big ? "bg-white/15" : "bg-[#fff7ed]"
                      }`}
                      aria-hidden
                    >
                      {getCategoryEmoji(c.slug)}
                    </span>
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider ${
                        big ? "text-[#fde047]" : "text-[#b91c1c]"
                      }`}
                    >
                      {c.count} recetas
                    </span>
                  </div>
                  <h3
                    className={`mt-5 font-playfair font-extrabold ${
                      big ? "text-3xl sm:text-4xl" : "text-2xl text-[#1f1210]"
                    }`}
                  >
                    {c.name}
                  </h3>
                  <p className={`mt-2 text-sm ${big ? "text-white/80" : "text-[var(--muted)]"}`}>
                    {big
                      ? "El corazón de nuestra gastronomía: guisos tradicionales, frituras, sopas, entradas y platos bandera explicados paso a paso."
                      : `Colección especializada con ${c.count} guías y recetas verificadas.`}
                  </p>
                  {big && (
                    <ul className="mt-6 space-y-2 text-sm text-white/90">
                      {catPosts.map((a) => (
                        <li key={a.slug} className="truncate">
                          → {a.title}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span
                    className={`mt-auto pt-5 font-bold ${
                      big ? "text-[#fde047]" : "text-[#b91c1c]"
                    }`}
                  >
                    Explorar categoría →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Directorio Completo de las 34 Categorías */}
          <div className="mt-14">
            <h3
              className="font-playfair text-2xl font-extrabold text-[#1f1210] mb-6"
              data-reveal
            >
              Todas las Categorías ({categories.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}/`}
                  className="card spot p-4 flex items-center gap-3 group"
                  data-reveal
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {getCategoryEmoji(cat.slug)}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-[#1f1210] truncate group-hover:text-[#dc2626] transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-[11px] text-[var(--muted)]">{cat.count} recetas</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Últimas Recetas */}
          <div className="mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <span className="eyebrow" data-reveal>
                  Recién salidas del fogón
                </span>
                <h3
                  className="font-playfair text-2xl font-extrabold sm:text-3xl text-[#1f1210] mt-2"
                  data-reveal
                >
                  Últimas Recetas Publicadas
                </h3>
              </div>
              <Link
                href="/platos/"
                className="font-bold text-[#b91c1c] hover:underline"
                data-reveal
              >
                Ver todas las recetas →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post, index) => (
                <div key={post.slug} data-reveal data-reveal-delay={String(index % 3)}>
                  <RecipeCard post={post} priority={index < 3} />
                </div>
              ))}
            </div>
          </div>

          {/* Recetas Populares */}
          <div className="mt-20">
            <div className="mb-8">
              <span className="eyebrow" data-reveal>
                Las favoritas de la comunidad
              </span>
              <h3
                className="font-playfair text-2xl font-extrabold sm:text-3xl text-[#1f1210] mt-2"
                data-reveal
              >
                Recetas Más Consultadas
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {popularPosts.map((post, index) => (
                <div key={post.slug} data-reveal data-reveal-delay={String(index % 4)}>
                  <RecipeCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. Estándar Editorial: Receta Verificada vs. Receta Incompleta */}
      <section className="wrap py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="eyebrow" data-reveal>
              Nuestro compromiso en cocina
            </span>
            <SplitHeading
              text="Recetas probadas,"
              accent={{ text: "no instrucciones a medias", className: "text-[#b91c1c]" }}
              className="section-title mt-3"
            />
            <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
              En internet abundan las recetas que dicen “cocinar al gusto” sin indicar fuego,
              tiempo ni cómo cortar el ácido del ají. En{" "}
              <strong className="text-[#1f1210]">Recetas de Perú</strong> documentamos cada plato
              con precisión técnica y lenguaje casero.
            </p>
            <div className="mt-7 flex flex-wrap gap-3" data-reveal>
              <OpenChatButton
                label="Consultar una duda al Chef IA"
                className="btn btn-buy"
                magnetic
              />
              <Link href="/rescate-culinario-y-tecnicas/" className="btn btn-ghost" data-magnetic>
                Ver técnicas de cocina
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card spot p-6" data-reveal>
              <span className="inline-flex rounded-full bg-[#8cc63f]/20 px-3 py-1 text-xs font-extrabold text-[#3b630c]">
                ✓ Estándar RecetasDePeru.com
              </span>
              <ul className="mt-4 space-y-2.5 text-sm text-[var(--muted)]">
                <li>• Medidas claras en gramos, tazas y cucharadas caseras</li>
                <li>• Punto exacto del aderezo y tiempos por kilo de carne</li>
                <li>• Presupuesto estimado en Soles (S/) y rendimiento</li>
                <li>• Alternativas de ingredientes si vives fuera del Perú</li>
              </ul>
            </div>
            <div className="card spot p-6" data-reveal data-reveal-delay="1">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold text-amber-800">
                ⚠️ Recetas genéricas en internet
              </span>
              <ul className="mt-4 space-y-2.5 text-sm text-[var(--muted)]">
                <li>• Ingredientes ambiguos (“un poco de ají, sal al gusto”)</li>
                <li>• Sin tiempos reales de hervor ni temperatura de horno</li>
                <li>• No explican qué hacer si la salsa se corta o espesa de más</li>
                <li>• Sin guía de cortes de carne o pescados del mercado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Preguntas Frecuentes (FAQ) */}
      <section className="wrap pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow" data-reveal>
              Preguntas frecuentes
            </span>
            <SplitHeading text="Respuestas rápidas" className="section-title mt-3" />
            <p className="mt-4 text-[var(--muted)]" data-reveal>
              ¿No sabes con qué acompañar un plato o qué cocinar con lo que tienes en casa? Nuestro
              Chef IA responde al instante.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" data-reveal>
              <OpenChatButton label="Preguntar al Chef IA" className="btn btn-buy" />
              <Link href="/menus-y-presupuesto/" className="btn btn-ghost">
                Ver menús semanales
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="card card-static group p-5 open:shadow-lg"
                data-reveal
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-playfair text-lg font-bold text-[#1f1210]">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#fff7ed] text-[#b91c1c] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[var(--muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CTA Final con Aurora, Grilla y Plato Flotante */}
      <section className="wrap pb-16">
        <div className="relative isolate overflow-hidden rounded-[36px] bg-gradient-to-br from-[#991b1b] via-[#3b0808] to-[#b45309] px-6 py-14 text-white sm:px-14 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/posts/pachamanca-creada-por-ana-torres-de-la-ciudad-lima.webp"
            alt=""
            className="absolute inset-0 -z-[2] h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="hero-grid opacity-60" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#f59e0b]/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-[#dc2626]/30 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="text-center lg:text-left">
              <SplitHeading
                text="¿Qué vamos a cocinar hoy?"
                accent={{
                  text: "El Chef IA te guía paso a paso",
                  className: "text-[#fde047]",
                }}
                className="font-playfair text-4xl font-extrabold sm:text-5xl"
              />
              <p className="mt-4 text-lg text-white/85">
                Dile qué ingredientes tienes en casa o qué antojo peruano quieres preparar. Te
                recomendará la receta exacta de nuestro catálogo o la creará para ti al instante.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <OpenChatButton
                  label="Abrir Chef IA ahora"
                  className="btn btn-lime shine text-base"
                  magnetic
                />
                <Link href="/platos/" className="btn btn-glass" data-magnetic>
                  Explorar las {posts.length.toLocaleString("es-PE")} recetas
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute inset-[12%] rounded-full bg-white/20 blur-3xl" />
              <div className="float-y relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-white/25 shadow-[0_30px_50px_rgba(0,0,0,0.55)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/fuxion/ceviche-bajo-en-sal-recetas-con-menos-sodio.webp"
                  alt="Ceviche peruano tradicional"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientEffects />
    </>
  );
}
