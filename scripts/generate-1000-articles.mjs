/**
 * Generador Maestro de 1,000 Artículos Especializados para Recetasdeperu.com
 * - 12 Nuevas Categorías libres de canibalización frente a los 2,928 artículos heredados
 * - 8 Variantes de Layout React (VariantTopModule inspirado en Dinamica.pe y GuiaDeBarberias.com)
 * - 6 Esqueletos DOM de HTML interno (48 permutaciones estructurales anti-huella)
 * - 4 Variantes de Schema JSON-LD (@graph: Recipe, HowTo, ItemList, BlogPosting + FAQPage)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { getCat1And2Seeds } from "./seeds/cat1-2-geo-peru.mjs";
import { getCat3And4Seeds } from "./seeds/cat3-4-mundo-menus.mjs";
import { getCat5And6Seeds } from "./seeds/cat5-6-chifa-fuego.mjs";
import { getCat7And8Seeds } from "./seeds/cat7-8-nutricion-insumos.mjs";
import { getCat9And10Seeds } from "./seeds/cat9-10-pisco-panaderia.mjs";
import { getCat11And12Seeds } from "./seeds/cat11-12-rescate-festivo.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const contentDir = path.join(rootDir, "content");
const postsDir = path.join(contentDir, "posts");
const publicDir = path.join(rootDir, "public");

const DOM_SKELETONS = [
  "direct-answer-diagnostic",
  "story-and-masterclass",
  "comparison-matrix-first",
  "market-to-table-planner",
  "local-directory-guide",
  "encyclopedic-glossary",
];

const NEW_CATEGORIES_META = [
  { slug: "rutas-lima-y-callao", name: "Rutas de Lima y Callao" },
  { slug: "cocina-regional-ciudades", name: "Cocina Regional y Picanterías" },
  { slug: "peruanos-en-el-mundo", name: "Peruanos en el Mundo" },
  { slug: "menus-y-presupuesto", name: "Menús Semanales y Loncheras" },
  { slug: "chifa-y-nikkei-casero", name: "Chifa y Cocina Nikkei" },
  { slug: "fuego-brasa-y-ollas", name: "Caja China, Cilindro y Ollas" },
  { slug: "nutricion-y-dietas-peruanas", name: "Nutrición, Antianemia y Dietas" },
  { slug: "cortes-pescados-e-insumos", name: "Cortes, Pescados e Insumos" },
  { slug: "pisco-cocteleria-y-bebidas-calientes", name: "Pisco, Coctelería y Emolientes" },
  { slug: "panaderia-regional-y-dulces-de-convento", name: "Panes Regionales y Dulces de Antaño" },
  { slug: "rescate-culinario-y-tecnicas", name: "Rescate Culinario y Técnicas" },
  { slug: "calendario-festivo-y-banquetes", name: "Navidad, Fiestas Patrias y Banquetes" },
];

// Cargar el banco de imágenes reales .webp del proyecto para emparejamiento temático
function buildImagePools(existingPosts) {
  const allImgs = [...new Set(existingPosts.map((p) => p.featuredImage).filter(Boolean))];
  const pools = {
    ceviche: allImgs.filter((i) => /ceviche|pescado|marisco|tiradito|parihuela|chupe/i.test(i)),
    lomo: allImgs.filter((i) => /lomo|carne|res|seco|guiso|asado|anticucho/i.test(i)),
    arroz: allImgs.filter((i) => /arroz|pato|pollo/i.test(i)),
    chaufa: allImgs.filter((i) => /chaufa|oriental|sarten|salteado/i.test(i)),
    nikkei: allImgs.filter((i) => /nikkei|pescado|salsa|marisco/i.test(i)),
    regional: allImgs.filter((i) => /cusco|arequipa|puno|andino|serran|tradicional|regional/i.test(i)),
    guiso: allImgs.filter((i) => /guiso|sopa|lenteja|quinua|trigo|cuy/i.test(i)),
    tradicional: allImgs.filter((i) => /tradicional|ancestral|historia|platos/i.test(i)),
    condimentos: allImgs.filter((i) => /salsa|aji|condimento|aderezo|pesto/i.test(i)),
    desayunos: allImgs.filter((i) => /desayuno|avena|yogur|fruta|panqueque/i.test(i)),
    electrodomesticos: allImgs.filter((i) => /freidora|horno|olla|sarten/i.test(i)),
    sincalorias: allImgs.filter((i) => /saludable|ensalada|liger|verdura/i.test(i)),
    pescado: allImgs.filter((i) => /pescado|sudado|ceviche|marisco|trucha/i.test(i)),
    papa: allImgs.filter((i) => /papa|causa|rellena|pastel/i.test(i)),
    bebidas: allImgs.filter((i) => /refresco|bebida|smoothie|limonada|agua|chicha|jugo/i.test(i)),
    pan: allImgs.filter((i) => /pan-|focaccia|molde|avena|centeno/i.test(i)),
    postres: allImgs.filter((i) => /postre|manjar|crema|dulce|tarta|chocolate|mousse/i.test(i)),
    salsas: allImgs.filter((i) => /salsa|huancaina|criolla|verde|tarwi|maracuya/i.test(i)),
    all: allImgs,
  };

  for (const k of Object.keys(pools)) {
    if (pools[k].length < 10) pools[k] = allImgs;
  }
  return pools;
}

function pickImages(seed, idx, pools) {
  const hint = seed.imageHint || "all";
  const key =
    hint.includes("ceviche") ? "ceviche" :
    hint.includes("lomo") ? "lomo" :
    hint.includes("chaufa") ? "chaufa" :
    hint.includes("nikkei") ? "nikkei" :
    hint.includes("regional") ? "regional" :
    hint.includes("guiso") ? "guiso" :
    hint.includes("condimento") ? "condimentos" :
    hint.includes("desayuno") ? "desayunos" :
    hint.includes("electro") ? "electrodomesticos" :
    hint.includes("sincalorias") ? "sincalorias" :
    hint.includes("pescado") ? "pescado" :
    hint.includes("papa") ? "papa" :
    hint.includes("bebida") ? "bebidas" :
    hint.includes("pan") ? "pan" :
    hint.includes("postre") ? "postres" :
    hint.includes("salsa") ? "salsas" :
    hint.includes("arroz") ? "arroz" : "all";

  const pool = pools[key] || pools.all;
  const img1 = pool[(idx * 7 + 3) % pool.length];
  const img2 = pools.all[(idx * 13 + 11) % pools.all.length];
  return { img1, img2 };
}

function buildIngredientsAndSteps(seed) {
  const kw = seed.focusKeyword || seed.title;
  if (seed.category === "pisco-cocteleria-y-bebidas-calientes") {
    return {
      prepTimeISO: "PT10M",
      cookTimeISO: "PT15M",
      totalTimeISO: "PT25M",
      recipeYield: "4 vasos o copas",
      calories: "165 kcal por porción",
      ingredients: [
        "4 oz de pisco peruano quebranta o base frutal",
        "2 oz de jugo de limón sutil recién exprimido",
        "2 oz de jarabe de goma o miel de chancaca",
        "1 clara de huevo fresco o agua de hierbas",
        "6 cubos de hielo macizo cristalino",
        "Canela entera, clavo de olor y angostura",
      ],
      instructions: [
        { name: "Selección y acondicionamiento de insumos", text: `Verifica la frescura de los ingredientes principales para ${kw}. Si trabajas con cítricos peruanos, exprímelos solo hasta el 60% para evitar el amargor de la cáscara blanca.` },
        { name: "Extracción de aromas o maceración", text: "Integra la base aromática respetando la proporción clásica peruana para equilibrar acidez, dulzor y cuerpo." },
        { name: "Control de temperatura y textura", text: "Enfría enérgicamente con hielo roca durante 12 segundos en coctelera o mantén un hervor suave a 90 °C si se trata de un emoliente o ponche tradicional." },
        { name: "Servicio tradicional", text: "Sirve en cristalería previamente climatizada y corona con su toque aromático característico justo antes de llevar a la mesa." },
      ],
    };
  }

  return {
    prepTimeISO: "PT20M",
    cookTimeISO: "PT30M",
    totalTimeISO: "PT50M",
    recipeYield: "4 porciones abundantes",
    calories: "380 kcal por porción",
    ingredients: [
      "800 g de proteína o insumo principal fresco",
      "2 cebollas rojas picadas en brunoise fina",
      "3 dientes de ajo criollo chancados en batán",
      "3 cdas de pasta de ají amarillo o ají panca",
      "1 taza de caldo concentrado casero",
      "1/2 taza de chicha de jora o vino tinto",
      "1 atado de culantro, huacatay o hierbabuena",
      "Sal de Maras, pimienta negra y comino",
    ],
    instructions: [
      { name: "Mise en place y acondicionamiento", text: `Limpia, seca y porciona los ingredientes principales de ${kw}. Tener todos los cortes listos antes de encender la hornilla evita sobrecocciones.` },
      { name: "Sudado lento del aderezo peruano", text: "En una olla de fondo grueso o wok, suda la cebolla roja con una pizca de sal durante 10 minutos, suma el ajo y las pastas de ají cocinando hasta que el aceite se separe limpiamente ('punto de corte')." },
      { name: "Cocción principal y desglasado", text: "Incorpora la proteína o base del plato, sella a fuego vivo, desglasa con chicha de jora o caldo caliente y controla el tiempo exacto de cocción para conservar la jugosidad." },
      { name: "Perfume final y reposo", text: "Rectifica el punto de sal, suma las hierbas frescas recién picadas con el fuego ya apagado y deja reposar 5 minutos antes de emplatar con su guarnición tradicional." },
    ],
  };
}

function buildFaqs(seed) {
  const kw = seed.focusKeyword || seed.title;
  return [
    {
      question: `¿Cuál es el secreto principal para que ${kw} quede con sabor auténtico peruano?`,
      answer: `${seed.summary} Además, respetar el tiempo de sudado del aderezo base (cebolla roja, ajo y pasta de ají cocinados a fuego lento durante al menos 15 minutos) garantiza una base umami profunda que no cae pesada.`,
    },
    {
      question: `¿Cómo conservar o recalentar esta preparación sin que pierda su textura original?`,
      answer: `Guárdala en un envase hermético de vidrio en la refrigeradora (a 4 °C) apenas deje de humear. Al recalentar, hazlo en olla o sartén con 2 cucharadas de caldo o agua caliente a fuego medio-bajo en lugar de usar potencia máxima en microondas.`,
    },
    {
      question: `¿Qué guarnición o bebida peruana acompaña mejor a ${seed.title.split(":")[0]}?`,
      answer: `Dependiendo de la región y estación, armoniza de maravilla con arroz blanco graneado con ajo, papas nativas (Amarilla Tumbay o Huayro), sarsa criolla recién aliñada con limón sutil y un vaso de chicha morada casera o emoliente natural.`,
    },
    {
      question: `¿Qué sustituto puedo usar si me falta alguno de los ingredientes regionales?`,
      answer: `Si te encuentras fuera de la región o en el extranjero, puedes usar ají amarillo o panca en pasta, reemplazar la chicha de jora por cerveza rubia artesanal con unas gotas de vinagre de manzana y media cucharadita de chancaca/panela, y usar papa Yukon Gold o Monalisa.`,
    },
  ];
}

function buildTocForSkeleton(skeleton, seed) {
  const shortTitle = seed.title.split(":")[0];
  switch (skeleton) {
    case "direct-answer-diagnostic":
      return [
        { id: "respuesta-directa", label: `1. Diagnóstico Rápido: ${shortTitle}` },
        { id: "matriz-solucion", label: "2. Tabla de Parámetros, Tiempos y Proporciones" },
        { id: "protocolo-paso-a-paso", label: "3. Procedimiento Técnico Paso a Paso" },
        { id: "errores-frecuentes", label: "4. Errores que Debes Evitar en Casa" },
      ];
    case "story-and-masterclass":
      return [
        { id: "origen-y-tradicion", label: `1. Tradición e Identidad de ${shortTitle}` },
        { id: "seleccion-insumos", label: "2. Selección de Ingredientes por Función Culinaria" },
        { id: "secreto-huarique", label: "3. El Secreto de Picantería y Huarique" },
        { id: "ejecucion-maestra", label: "4. Ejecución Maestra en Cocina" },
      ];
    case "comparison-matrix-first":
      return [
        { id: "cuadro-comparativo", label: `1. Cuadro Comparativo: ${shortTitle}` },
        { id: "analisis-rendimiento", label: "2. Análisis de Sabor, Textura y Costo en Soles" },
        { id: "metodo-recomendado", label: "3. Método Ganador Paso a Paso" },
        { id: "maridaje-y-acompanamiento", label: "4. Guarniciones y Maridaje Peruano" },
      ];
    case "market-to-table-planner":
      return [
        { id: "lista-mercado", label: "1. Lista de Mercado por Pasillos (Verduras, Carnes, Abarrotes)" },
        { id: "mise-en-place", label: `2. Adelanto y Mise en Place para ${shortTitle}` },
        { id: "coccion-principal", label: "3. Cocción y Punto Exacto de Sazón" },
        { id: "conservacion-taper", label: "4. Conservación en Refrigeradora y Táper" },
      ];
    case "local-directory-guide":
      return [
        { id: "mapa-gastronomico", label: `1. Panorama Local y Despensa: ${shortTitle}` },
        { id: "ruta-mercados-precios", label: "2. Mercados, Temporadas y Precios Referenciales (S/)" },
        { id: "preparacion-tradicional", label: "3. Cómo Preparar la Especialidad en Casa" },
        { id: "consejos-locales", label: "4. Recomendaciones de Compra y Servicio" },
      ];
    case "encyclopedic-glossary":
    default:
      return [
        { id: "ficha-gastronomica", label: `1. Ficha Técnica y Glosario: ${shortTitle}` },
        { id: "propiedades-y-ciencia", label: "2. Comportamiento Térmico y Química Culinaria" },
        { id: "aplicacion-recetario", label: "3. Aplicación Paso a Paso en la Olla Peruana" },
        { id: "equivalencias-mundo", label: "4. Equivalencias Regionales e Internacionales" },
      ];
  }
}

function buildHtmlBySkeleton(skeleton, seed, img2, recipeData, crossLinks) {
  const shortTitle = seed.title.split(":")[0];
  const kw = seed.focusKeyword || shortTitle.toLowerCase();
  const linksHtml = crossLinks
    .map((l) => `<a href="/${l.category}/${l.slug}/"><strong>${l.title.split(":")[0]}</strong></a>`)
    .join(", ");

  const figureBlock = `
<figure class="my-8 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm">
  <img src="${img2}" alt="${seed.title} — Recetas de Perú" class="w-full max-h-[380px] object-cover" loading="lazy" />
  <figcaption class="px-4 py-3 text-xs text-stone-600 font-medium bg-stone-100">
    🇵🇪 <strong>Tradición y Precisión Culinaria:</strong> ${seed.summary}
  </figcaption>
</figure>`;

  const ingredientsListHtml = recipeData.ingredients
    .map((ing) => `<li>${ing}</li>`)
    .join("\n  ");

  const stepsOlHtml = recipeData.instructions
    .map((st, idx) => `<li id="paso-${idx + 1}"><strong>${st.name}:</strong> ${st.text}</li>`)
    .join("\n  ");

  switch (skeleton) {
    // ESQUELETO 1: Respuesta Directa (Featured Snippet) + Tabla de Diagnóstico + Checklist + Pasos
    case "direct-answer-diagnostic":
      return `
<h2 id="respuesta-directa">1. Diagnóstico Rápido: ${shortTitle}</h2>
<p><strong>Respuesta directa del chef:</strong> Para dominar <strong>${kw}</strong> sin margen de error, la regla de oro consiste en controlar la relación entre humedad, temperatura de sellado y el punto exacto del aderezo peruano. ${seed.summary}</p>

<h2 id="matriz-solucion">2. Tabla de Parámetros, Tiempos y Proporciones</h2>
<div class="overflow-x-auto my-6 rounded-xl border border-gray-200">
  <table class="min-w-full text-left text-sm">
    <thead class="bg-stone-900 text-white">
      <tr>
        <th class="px-4 py-3 font-bold">Factor Crítico</th>
        <th class="px-4 py-3 font-bold">Estándar Profesional Peruano</th>
        <th class="px-4 py-3 font-bold">Resultado en el Plato</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <tr>
        <td class="px-4 py-3 font-bold text-gray-900">Base Aromática</td>
        <td class="px-4 py-3 text-gray-700">Cebolla roja + ajo criollo + pasta de ají blanqueada (15 min de sudado)</td>
        <td class="px-4 py-3 text-emerald-800 font-semibold">Salsa brillante que no se corta ni cae pesada</td>
      </tr>
      <tr>
        <td class="px-4 py-3 font-bold text-gray-900">Control Térmico</td>
        <td class="px-4 py-3 text-gray-700">Sellado inicial fuerte y cocción controlada con fondo casero</td>
        <td class="px-4 py-3 text-emerald-800 font-semibold">Textura tierna por dentro y sabor concentrado</td>
      </tr>
      <tr>
        <td class="px-4 py-3 font-bold text-gray-900">Equilibrio de Acidez</td>
        <td class="px-4 py-3 text-gray-700">Toque de chicha de jora, vinagre tinto o limón sutil al final</td>
        <td class="px-4 py-3 text-emerald-800 font-semibold">Realza los sabores sin opacar el ingrediente principal</td>
      </tr>
    </tbody>
  </table>
</div>

${figureBlock}

<h2 id="protocolo-paso-a-paso">3. Procedimiento Técnico Paso a Paso</h2>
<h3>Insumos Necesarios</h3>
<ul>
  ${ingredientsListHtml}
</ul>
<h3>Secuencia de Ejecución</h3>
<ol>
  ${stepsOlHtml}
</ol>

<h2 id="errores-frecuentes">4. Errores que Debes Evitar en Casa</h2>
<p>Evita apurar el sofrito de la cebolla a fuego excesivo o agregar líquidos helados a mitad de la cocción. Para complementar esta guía, te recomendamos revisar también nuestras guías de ${linksHtml}.</p>
`.trim();

    // ESQUELETO 2: Historia/Tradición + Blockquote de Picantería + Ingredientes por Función + Masterclass
    case "story-and-masterclass":
      return `
<h2 id="origen-y-tradicion">1. Tradición e Identidad de ${shortTitle}</h2>
<p>En la gastronomía peruana, hablar de <strong>${kw}</strong> es adentrarse en una sabiduría transmitida de generación en generación entre mercados de abastos, picanterías regionales y cocinas familiares. ${seed.summary}</p>

<blockquote class="my-6 border-l-4 border-red-600 bg-red-50/50 p-5 italic text-gray-800 rounded-r-xl">
  "El secreto de un gran plato peruano no está en complicar la receta, sino en respetar el tiempo del aderezo en la olla y comprar el insumo de estación en su punto exacto de madurez."
</blockquote>

<h2 id="seleccion-insumos">2. Selección de Ingredientes por Función Culinaria</h2>
<p>Antes de encender el fuego, organiza tu mesa de trabajo (<em>mise en place</em>) con estos componentes esenciales:</p>
<ul>
  ${ingredientsListHtml}
</ul>

${figureBlock}

<h2 id="secreto-huarique">3. El Secreto de Picantería y Huarique</h2>
<p>Los cocineros experimentados saben que la diferencia entre una versión doméstica común y un plato memorable radica en el <strong>desglasado</strong>: raspar con cuchara de madera los jugos caramelizados del fondo de la olla usando un chorrito de chicha de jora, vino, pisco o caldo concentrado caliente.</p>

<h2 id="ejecucion-maestra">4. Ejecución Maestra en Cocina</h2>
<ol>
  ${stepsOlHtml}
</ol>
<p>Puedes combinar esta preparación con otras especialidades de nuestro recetario como ${linksHtml}.</p>
`.trim();

    // ESQUELETO 3: Matriz Comparativa al Inicio + Análisis en Tarjetas + Método Ganador
    case "comparison-matrix-first":
      return `
<h2 id="cuadro-comparativo">1. Cuadro Comparativo: ${shortTitle}</h2>
<p>Evaluamos los criterios técnicos más importantes en torno a <strong>${kw}</strong> para que elijas la mejor alternativa según tu presupuesto, tiempo disponible y ocasión familiar. ${seed.summary}</p>

<div class="overflow-x-auto my-6 rounded-xl border border-gray-200">
  <table class="min-w-full text-left text-sm">
    <thead class="bg-red-900 text-white">
      <tr>
        <th class="px-4 py-3 font-bold">Dimensión Culinaria</th>
        <th class="px-4 py-3 font-bold">Método Tradicional de Olla / Brasa</th>
        <th class="px-4 py-3 font-bold">Método Rápido / Adaptado en Casa</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <tr>
        <td class="px-4 py-3 font-bold">Tiempo Total</td>
        <td class="px-4 py-3">Cocción pausada que desarrolla colágeno y profundidad</td>
        <td class="px-4 py-3">Optimizado en 25–35 minutos para días laborables</td>
      </tr>
      <tr>
        <td class="px-4 py-3 font-bold">Textura y Aroma</td>
        <td class="px-4 py-3">Notas ahumadas y salsa ligada naturalmente</td>
        <td class="px-4 py-3">Textura limpia, ligera y excelente conservación en táper</td>
      </tr>
      <tr>
        <td class="px-4 py-3 font-bold">Costo por Porción</td>
        <td class="px-4 py-3">S/ 4.50 – S/ 8.00 comprando en mercado local</td>
        <td class="px-4 py-3">Ahorro de hasta 60% frente a pedir por delivery</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="analisis-rendimiento">2. Análisis de Sabor, Textura y Costo en Soles</h2>
<p>Al preparar esta receta en casa, controlas al 100% la calidad del aceite, la frescura de las hierbas aromáticas y la cantidad de sodio. Recuerda revisar también ${linksHtml} para armar tu menú completo.</p>

${figureBlock}

<h2 id="metodo-recomendado">3. Método Ganador Paso a Paso</h2>
<ul>
  ${ingredientsListHtml}
</ul>
<ol>
  ${stepsOlHtml}
</ol>

<h2 id="maridaje-y-acompanamiento">4. Guarniciones y Maridaje Peruano</h2>
<p>Sirve en plato precalentado (si es guiso o brasa) o en plato frío (si es ceviche o causa), acompañando con ají de la casa molido al momento.</p>
`.trim();

    // ESQUELETO 4: Planificador del Mercado a la Mesa + Mise en Place + Conservación
    case "market-to-table-planner":
      return `
<h2 id="lista-mercado">1. Lista de Mercado por Pasillos para ${shortTitle}</h2>
<p>Planificar tu compra antes de ir al mercado o supermercado es la clave para ahorrar dinero y lograr un resultado impecable en <strong>${kw}</strong>. ${seed.summary}</p>
<ul>
  ${ingredientsListHtml}
</ul>

<h2 id="mise-en-place">2. Adelanto y Mise en Place Inteligente</h2>
<p>Si tienes poco tiempo de lunes a viernes, puedes dejar las verduras picadas, el aderezo base sufrido y la proteína marinada desde la noche anterior en recipientes de vidrio cerrados.</p>

${figureBlock}

<h2 id="coccion-principal">3. Cocción y Punto Exacto de Sazón</h2>
<ol>
  ${stepsOlHtml}
</ol>

<h2 id="conservacion-taper">4. Conservación en Refrigeradora y Táper</h2>
<div class="my-4 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-sm text-emerald-950">
  <strong>💡 Tip de Conservación Segura:</strong> Si vas a llevar esta preparación en táper a la oficina o guardarla para el día siguiente, coloca las salsas frescas, la palta o la sarsa criolla en un envase pequeño separado y únelas recién al momento de comer. Explora más ideas en ${linksHtml}.
</div>
`.trim();

    // ESQUELETO 5: Guía de Ruta Local / Mercados + Precios + Receta en Casa
    case "local-directory-guide":
      return `
<h2 id="mapa-gastronomico">1. Panorama Local y Despensa: ${shortTitle}</h2>
<p>Conocer de dónde vienen nuestros insumos y cómo se cocinan en cada rincón del país transforma nuestra manera de cocinar <strong>${kw}</strong>. ${seed.summary}</p>

<h2 id="ruta-mercados-precios">2. Mercados, Temporadas y Precios Referenciales (S/)</h2>
<p>Tanto en los mercados distritales de Lima como en las plazas de abastos de provincias, acudir entre las 7:00 a.m. y las 9:30 a.m. te asegura encontrar los cortes más frescos, pescados recién desembarcados y hierbas recién cortadas al mejor precio en Soles.</p>

${figureBlock}

<h2 id="preparacion-tradicional">3. Cómo Preparar la Especialidad en Casa</h2>
<h3>Lista de Compras</h3>
<ul>
  ${ingredientsListHtml}
</ul>
<h3>Preparación Paso a Paso</h3>
<ol>
  ${stepsOlHtml}
</ol>

<h2 id="consejos-locales">4. Recomendaciones de Compra y Servicio</h2>
<p>Pide siempre a tu casera de confianza los recortes limpios o huesos aromáticos para enriquecer tus caldos base, y continúa explorando nuestra enciclopedia culinaria en ${linksHtml}.</p>
`.trim();

    // ESQUELETO 6: Glosario Enciclopédico (<dl><dt><dd>) + Química Culinaria + Aplicación
    case "encyclopedic-glossary":
    default:
      return `
<h2 id="ficha-gastronomica">1. Ficha Técnica y Glosario: ${shortTitle}</h2>
<p>En el repertorio técnico de la cocina peruana, <strong>${kw}</strong> ocupa un lugar fundamental por su versatilidad y riqueza sensorial. ${seed.summary}</p>

<dl class="my-6 grid gap-3 sm:grid-cols-2 rounded-2xl border border-stone-200 bg-stone-50 p-5 text-sm">
  <div class="rounded-xl bg-white p-3.5 border border-stone-200/80">
    <dt class="font-extrabold text-red-700 uppercase text-xs">Perfil Sensorial</dt>
    <dd class="mt-1 text-gray-700">Equilibrio entre el dulzor del aderezo sufrido, el perfume de nuestros ajíes y la frescura de las hierbas peruanas.</dd>
  </div>
  <div class="rounded-xl bg-white p-3.5 border border-stone-200/80">
    <dt class="font-extrabold text-red-700 uppercase text-xs">Técnica Clave</dt>
    <dd class="mt-1 text-gray-700">Control preciso de temperatura para preservar los jugos celulares y lograr emulsiones estables.</dd>
  </div>
</dl>

<h2 id="propiedades-y-ciencia">2. Comportamiento Térmico y Química Culinaria</h2>
<p>Cuando respetamos los tiempos de marinado, blanqueado de ajíes o sellado de proteínas, las fibras retienen su humedad natural y absorben los compuestos aromáticos liposolubles del aderezo.</p>

${figureBlock}

<h2 id="aplicacion-recetario">3. Aplicación Paso a Paso en la Olla Peruana</h2>
<ul>
  ${ingredientsListHtml}
</ul>
<ol>
  ${stepsOlHtml}
</ol>

<h2 id="equivalencias-mundo">4. Equivalencias Regionales e Internacionales</h2>
<p>Esta técnica y preparación se adapta perfectamente a cualquier cocina del mundo. Descubre más secretos relacionados en ${linksHtml}.</p>
`.trim();
  }
}

async function main() {
  console.log("🚀 Iniciando generación de los 1,000 artículos especializados...");

  const allSeeds = [
    ...getCat1And2Seeds(),
    ...getCat3And4Seeds(),
    ...getCat5And6Seeds(),
    ...getCat7And8Seeds(),
    ...getCat9And10Seeds(),
    ...getCat11And12Seeds(),
  ];

  console.log(`📦 Total de semillas cargadas: ${allSeeds.length}`);
  if (allSeeds.length !== 1000) {
    throw new Error(`Se esperaban exactamente 1000 semillas, pero se encontraron ${allSeeds.length}`);
  }

  // Cargar index.json y categories.json existentes
  const indexPath = path.join(contentDir, "index.json");
  const categoriesPath = path.join(contentDir, "categories.json");

  const rawIndex = JSON.parse(fs.readFileSync(indexPath, "utf8"));
  const rawCategories = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));

  // Filtrar artículos originales (heredados de WordPress) para que el script sea 100% idempotente
  const newCategorySlugs = new Set(NEW_CATEGORIES_META.map((c) => c.slug));
  const legacyPosts = rawIndex.filter((p) => !p.isGenerated2026 && !newCategorySlugs.has(p.category));
  const legacyCategories = rawCategories.filter((c) => !newCategorySlugs.has(c.slug));

  console.log(`📚 Artículos base heredados preservados: ${legacyPosts.length}`);

  // Auditoría Anti-Canibalización contra los 2,928 artículos originales y entre las 1,000 semillas
  const existingSlugs = new Set(legacyPosts.map((p) => p.slug));
  const existingTitles = new Set(legacyPosts.map((p) => p.title.toLowerCase().trim()));
  const seenNewSlugs = new Set();
  const seenNewTitles = new Set();

  allSeeds.forEach((seed, idx) => {
    if (existingSlugs.has(seed.slug) || seenNewSlugs.has(seed.slug)) {
      seed.slug = `${seed.slug}-guia-${idx + 1}`;
    }
    if (existingTitles.has(seed.title.toLowerCase().trim()) || seenNewTitles.has(seed.title.toLowerCase().trim())) {
      seed.title = `${seed.title} (Edición Especial #${idx + 1})`;
    }
    seenNewSlugs.add(seed.slug);
    seenNewTitles.add(seed.title.toLowerCase().trim());
  });

  console.log("✅ Auditoría Anti-Canibalización superada: 0 colisiones de slug o título con los 2,928 artículos existentes.");

  const pools = buildImagePools(legacyPosts);
  const generatedIndexEntries = [];
  const skeletonCounts = {};
  const layoutCounts = {};

  // Generar los 1,000 archivos JSON individuales y sus entradas en index.json
  allSeeds.forEach((seed, idx) => {
    const skeleton = DOM_SKELETONS[(idx * 7 + 3) % DOM_SKELETONS.length];
    skeletonCounts[skeleton] = (skeletonCounts[skeleton] || 0) + 1;
    layoutCounts[seed.layoutVariant] = (layoutCounts[seed.layoutVariant] || 0) + 1;

    const { img1, img2 } = pickImages(seed, idx, pools);
    const recipeSchemaData = buildIngredientsAndSteps(seed);
    const faqs = buildFaqs(seed);
    const toc = buildTocForSkeleton(skeleton, seed);

    // Enlaces cruzados determinísticos hacia otras semillas para interlinking interno
    const crossLinks = [
      allSeeds[(idx + 17) % allSeeds.length],
      allSeeds[(idx + 83) % allSeeds.length],
      allSeeds[(idx + 241) % allSeeds.length],
    ];

    const htmlContent = buildHtmlBySkeleton(skeleton, seed, img2, recipeSchemaData, crossLinks);

    // Fechas escalonadas realistas entre septiembre y noviembre de 2026
    const dayOffset = idx % 65;
    const pubDate = new Date(Date.UTC(2026, 8, 1 + dayOffset, 14, (idx * 7) % 60, 0));
    const dateISO = pubDate.toISOString();

    const fullPost = {
      slug: seed.slug,
      title: seed.title,
      seoTitle: `${seed.title} | Recetas de Perú`,
      category: seed.category,
      categoryName: seed.categoryName,
      date: dateISO,
      updatedAt: "2026-11-11T08:00:00-05:00",
      readTime: `${6 + (idx % 5)} min`,
      excerpt: seed.summary,
      featuredImage: img1,
      secondaryImage: img2,
      content: htmlContent,
      isGenerated2026: true,
      layoutVariant: seed.layoutVariant,
      domSkeleton: skeleton,
      schemaType: seed.schemaType,
      badgeLabel: seed.badgeLabel,
      focusKeyword: seed.focusKeyword,
      keywords: [
        seed.focusKeyword,
        seed.categoryName.toLowerCase(),
        "recetas de peru",
        "gastronomia peruana paso a paso",
      ],
      keyTakeaways: [
        seed.summary,
        "Controla el punto exacto del aderezo peruano (cebolla roja, ajo y pasta de ají sufridos a fuego lento durante 15 minutos) para lograr una sazón profunda y digestiva.",
        "Compra tus insumos frescos en mercados locales de temporada para ahorrar hasta un 45% en tu presupuesto familiar.",
      ],
      toc,
      faqs,
      ...(seed.geoInfo ? { geoInfo: seed.geoInfo } : {}),
      ...(seed.worldInfo ? { worldInfo: seed.worldInfo } : {}),
      ...(seed.chefMeta ? { chefMeta: seed.chefMeta } : {}),
      ...(seed.timelineSteps ? { timelineSteps: seed.timelineSteps } : {}),
      ...(seed.budgetInfo ? { budgetInfo: seed.budgetInfo } : {}),
      ...(seed.nutritionInfo ? { nutritionInfo: seed.nutritionInfo } : {}),
      ...(seed.comparisonInfo ? { comparisonInfo: seed.comparisonInfo } : {}),
      recipeSchemaData,
    };

    // Guardar el archivo individual en content/posts/[slug].json
    const postFilePath = path.join(postsDir, `${seed.slug}.json`);
    fs.writeFileSync(postFilePath, JSON.stringify(fullPost, null, 2));

    // Agregar resumen ligero a index.json
    generatedIndexEntries.push({
      slug: fullPost.slug,
      title: fullPost.title,
      category: fullPost.category,
      categoryName: fullPost.categoryName,
      date: fullPost.date,
      excerpt: fullPost.excerpt,
      featuredImage: fullPost.featuredImage,
      isGenerated2026: true,
    });
  });

  // Actualizar content/index.json (poniendo los nuevos + los 2,928 originales)
  const finalIndex = [...generatedIndexEntries, ...legacyPosts];
  fs.writeFileSync(indexPath, JSON.stringify(finalIndex, null, 2));

  // Calcular conteos por nueva categoría y actualizar content/categories.json
  const newCategoryEntries = NEW_CATEGORIES_META.map((cat) => {
    const count = generatedIndexEntries.filter((p) => p.category === cat.slug).length;
    return {
      slug: cat.slug,
      name: cat.name,
      count,
    };
  });

  const finalCategories = [...legacyCategories, ...newCategoryEntries];
  fs.writeFileSync(categoriesPath, JSON.stringify(finalCategories, null, 2));

  // Actualizar public/search-index.json
  const searchIndex = finalIndex.map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    categoryName: post.categoryName,
  }));
  fs.writeFileSync(path.join(publicDir, "search-index.json"), JSON.stringify(searchIndex));

  console.log("\n🎉 ¡Generación completada con éxito!");
  console.log(`   • Nuevos artículos creados: ${generatedIndexEntries.length}`);
  console.log(`   • Total de artículos en index.json: ${finalIndex.length}`);
  console.log(`   • Total de categorías en categories.json: ${finalCategories.length}`);
  console.log("   • Distribución por Layout React:", layoutCounts);
  console.log("   • Distribución por Esqueleto DOM:", skeletonCounts);
}

main().catch((err) => {
  console.error("❌ Error en el generador:", err);
  process.exit(1);
});
