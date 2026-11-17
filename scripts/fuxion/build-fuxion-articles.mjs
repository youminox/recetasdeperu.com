/**
 * Ensambla las páginas de la categoría /fuxion/ a partir de content/fuxion-src/*.json
 * - Valida: claves, keyword única, colisiones con Recetasdeperu y fuxion.site,
 *   palabras prohibidas (canibalización / claims médicos), marcador de tarjeta, enlaces internos.
 * - Genera content/posts/<slug>.json, actualiza index.json, categories.json y search-index.json.
 * Idempotente: puede ejecutarse varias veces.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const contentDir = path.join(root, "content");
const srcDir = path.join(contentDir, "fuxion-src");
const postsDir = path.join(contentDir, "posts");
const imgDir = path.join(root, "public", "images", "fuxion");
const fuxionSiteArticles = path.join(root, "..", "fuxion.site", "src", "data", "articles.json");

const CATEGORY = { slug: "fuxion", name: "Recetas con FuXion" };
const STRICT = process.argv.includes("--strict");

const FORMAT_MAP = {
  receta: { layout: "ficha-comanda-chef", schema: "Recipe", skeleton: "story-and-masterclass", badge: "🥄 Receta funcional" },
  temporada: { layout: "ficha-comanda-chef", schema: "Recipe", skeleton: "market-to-table-planner", badge: "🎉 Receta de temporada" },
  plato: { layout: "ficha-comanda-chef", schema: "Recipe", skeleton: "direct-answer-diagnostic", badge: "🍽️ Plato peruano + FuXion" },
  menu: { layout: undefined, schema: "BlogPosting", skeleton: "local-directory-guide", badge: "📅 Menú práctico" },
  duelo: { layout: "duelo-insumos-rescate", schema: "BlogPosting", skeleton: "comparison-matrix-first", badge: "⚖️ Comparativa culinaria" },
  pilar: { layout: undefined, schema: "BlogPosting", skeleton: "encyclopedic-glossary", badge: "📚 Guía principal" },
};

const BANNED_TITLE = /\b(qu[eé] es|para qu[eé] sirve|beneficios|protocolo|dosis|horario|precio|cat[aá]logo|c[oó]mo tomar)\b/i;
const BANNED_CLAIMS = /\b(cura|curar|elimina la grasa|quema grasa|baja \d+ ?kilos|desintoxica el h[ií]gado|trata la|previene el c[aá]ncer)\b/i;

const products = JSON.parse(fs.readFileSync(path.join(contentDir, "fuxion-products.json"), "utf8"));
const productSlugs = new Set(products.map((p) => p.slug));

const rawIndex = JSON.parse(fs.readFileSync(path.join(contentDir, "index.json"), "utf8"));
const others = rawIndex.filter((p) => p.category !== CATEGORY.slug);
const otherSlugs = new Set(others.map((p) => p.slug));
const otherTitles = new Set(others.map((p) => p.title.toLowerCase().trim()));
const validLinks = new Set(others.map((p) => `/${p.category}/${p.slug}/`));

let fxSlugs = new Set();
let fxTitles = new Set();
if (fs.existsSync(fuxionSiteArticles)) {
  const a = JSON.parse(fs.readFileSync(fuxionSiteArticles, "utf8"));
  fxSlugs = new Set(a.map((x) => x.slug));
  fxTitles = new Set(a.map((x) => (x.title || "").toLowerCase().trim()));
}

const files = fs.existsSync(srcDir) ? fs.readdirSync(srcDir).filter((f) => f.endsWith(".json")).sort() : [];
const errors = [];
const warnings = [];
const seenKw = new Map();
const seenSlug = new Set();
const sources = [];

for (const f of files) {
  let s;
  try {
    s = JSON.parse(fs.readFileSync(path.join(srcDir, f), "utf8"));
  } catch (e) {
    errors.push(`${f}: JSON inválido (${e.message})`);
    continue;
  }
  const id = s.slug || f;
  for (const k of ["slug", "title", "excerpt", "focusKeyword", "format", "primaryProduct", "contentHtml", "faqs"]) {
    if (!s[k]) errors.push(`${id}: falta "${k}"`);
  }
  if (!FORMAT_MAP[s.format]) errors.push(`${id}: formato desconocido "${s.format}"`);
  if (!productSlugs.has(s.primaryProduct)) errors.push(`${id}: primaryProduct inexistente "${s.primaryProduct}"`);
  if (s.secondaryProduct && !productSlugs.has(s.secondaryProduct)) {
    warnings.push(`${id}: secondaryProduct inexistente "${s.secondaryProduct}" (se omite)`);
    s.secondaryProduct = undefined;
  }
  if (otherSlugs.has(s.slug) || seenSlug.has(s.slug)) errors.push(`${id}: slug duplicado`);
  if (fxSlugs.has(s.slug)) errors.push(`${id}: slug idéntico a fuxion.site`);
  if (otherTitles.has(s.title.toLowerCase().trim()) || fxTitles.has(s.title.toLowerCase().trim())) errors.push(`${id}: título duplicado`);
  if (BANNED_TITLE.test(s.title) || BANNED_TITLE.test(s.slug.replace(/-/g, " ")) || BANNED_TITLE.test(s.focusKeyword)) {
    errors.push(`${id}: título/slug/keyword con intención de producto (canibaliza fuxion.site)`);
  }
  const plain = (s.contentHtml || "").replace(/<[^>]+>/g, " ");
  if (BANNED_CLAIMS.test(plain) || BANNED_CLAIMS.test(s.title)) warnings.push(`${id}: posible claim médico → revisar`);
  const kw = (s.focusKeyword || "").toLowerCase().trim();
  if (seenKw.has(kw)) errors.push(`${id}: focusKeyword repetida con ${seenKw.get(kw)}`);
  seenKw.set(kw, id);
  seenSlug.add(s.slug);

  const words = plain.split(/\s+/).filter(Boolean).length;
  if (words < 900) warnings.push(`${id}: solo ${words} palabras`);
  const cardCount = (s.contentHtml.match(/<!--FUXION_CARD-->/g) || []).length;
  if (cardCount !== 1) warnings.push(`${id}: marcador FUXION_CARD aparece ${cardCount} veces`);
  if (cardCount > 1) {
    let n = 0;
    s.contentHtml = s.contentHtml.replace(/<!--FUXION_CARD-->/g, (m) => (n++ === 0 ? m : ""));
  }

  // Enlaces internos: eliminar los rotos (dejar solo el texto)
  let internal = 0;
  s.contentHtml = s.contentHtml.replace(/<a\s+[^>]*href=["'](\/[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) => {
    const norm = href.endsWith("/") ? href : `${href}/`;
    if (validLinks.has(norm)) {
      internal++;
      return `<a href="${norm}">${text}</a>`;
    }
    if (norm.startsWith("/fuxion/")) return m;
    warnings.push(`${id}: enlace interno roto ${href} → convertido en texto`);
    return text;
  });
  if (internal < 2) warnings.push(`${id}: solo ${internal} enlaces internos válidos`);

  if (s.recipe?.ingredients) {
    s.recipe.ingredients = s.recipe.ingredients.map((i) => {
      if (i.length <= 60) return i;
      warnings.push(`${id}: ingrediente > 60 caracteres recortado`);
      return i.slice(0, 57).replace(/\s+\S*$/, "");
    });
  }
  if (["receta", "temporada", "plato"].includes(s.format) && !s.recipe) {
    errors.push(`${id}: formato ${s.format} requiere "recipe"`);
  }
  sources.push(s);
}

if (warnings.length) console.log("⚠️  Avisos:\n  " + warnings.join("\n  "));
if (errors.length) {
  console.error("❌ Errores:\n  " + errors.join("\n  "));
  if (STRICT || errors.length) process.exit(1);
}

function isoToHuman(iso) {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?/.exec(iso || "");
  if (!m) return iso || "";
  const h = m[1] ? `${m[1]} h ` : "";
  const mm = m[2] ? `${m[2]} min` : "";
  return (h + mm).trim();
}

// Fechas escalonadas (2 por día desde el 10/11/2026)
const base = Date.UTC(2026, 10, 10, 14, 0, 0);
const pillarSlug = sources.find((s) => s.format === "pilar")?.slug;

const entries = sources.map((s, idx) => {
  const fm = FORMAT_MAP[s.format];
  const prod = products.find((p) => p.slug === s.primaryProduct);
  const hero = fs.existsSync(path.join(imgDir, `${s.slug}.webp`)) ? `/images/fuxion/${s.slug}.webp` : prod.image;
  const date = new Date(base + Math.floor(idx / 2) * 86400000 + (idx % 2) * 5 * 3600000).toISOString();
  const words = s.contentHtml.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

  const toc = [];
  s.contentHtml.replace(/<h2[^>]*id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/h2>/gi, (m, hid, label) => {
    toc.push({ id: hid, label: label.replace(/<[^>]+>/g, "").trim() });
    return m;
  });

  let content = s.contentHtml;
  if (pillarSlug && s.slug !== pillarSlug) {
    content += `\n<p>📚 Descubre más ideas en nuestro <a href="/fuxion/${pillarSlug}/">recetario completo con productos FuXion</a>.</p>`;
  }

  const post = {
    slug: s.slug,
    title: s.title,
    seoTitle: `${s.seoTitle || s.title} | Recetas de Perú`,
    category: CATEGORY.slug,
    categoryName: CATEGORY.name,
    date,
    updatedAt: date,
    readTime: `${Math.max(5, Math.round(words / 220))} min`,
    excerpt: s.excerpt,
    featuredImage: hero,
    content,
    isGenerated2026: true,
    layoutVariant: fm.layout,
    domSkeleton: fm.skeleton,
    schemaType: s.recipe ? "Recipe" : fm.schema,
    badgeLabel: fm.badge,
    focusKeyword: s.focusKeyword,
    keywords: [s.focusKeyword, ...(s.keywords || [])],
    keyTakeaways: s.keyTakeaways || [],
    toc,
    faqs: s.faqs,
    fuxion: {
      format: s.format,
      primaryProduct: s.primaryProduct,
      secondaryProduct: s.secondaryProduct,
      cardNotePrimary: s.cardNotePrimary,
      cardNoteSecondary: s.cardNoteSecondary,
      costSoles: s.recipe?.costSoles,
    },
  };

  if (s.recipe) {
    post.recipeSchemaData = {
      prepTimeISO: s.recipe.prepTimeISO,
      cookTimeISO: s.recipe.cookTimeISO,
      totalTimeISO: s.recipe.totalTimeISO,
      recipeYield: s.recipe.recipeYield,
      calories: s.recipe.calories,
      ingredients: s.recipe.ingredients,
      instructions: s.recipe.steps,
    };
    if (fm.layout === "ficha-comanda-chef") {
      post.chefMeta = {
        prepTime: isoToHuman(s.recipe.prepTimeISO),
        cookTime: isoToHuman(s.recipe.cookTimeISO),
        servings: s.recipe.recipeYield,
        difficulty: s.recipe.steps.length > 5 ? "Media" : "Fácil",
        keyTool: `1 sobre de ${prod.cleanName}`,
        tempNote: s.recipe.costSoles || s.recipe.calories,
      };
    }
  }
  if (s.format === "duelo" && s.comparison) {
    post.comparisonInfo = {
      optionA: { name: s.comparison.optionA.name, badge: "🥇 Opción A", score: "", points: s.comparison.optionA.points },
      optionB: { name: s.comparison.optionB.name, badge: "🥈 Opción B", score: "", points: s.comparison.optionB.points },
      verdict: s.comparison.verdict,
    };
  }
  return post;
});

// Índice automático para la página pilar
if (pillarSlug) {
  const pillar = entries.find((e) => e.slug === pillarSlug);
  const list = entries
    .filter((e) => e.slug !== pillarSlug)
    .map((e) => `<li><a href="/fuxion/${e.slug}/">${e.title}</a></li>`)
    .join("\n");
  const block = `<h2 id="indice-recetas">Índice de recetas con FuXion</h2>\n<ul>\n${list}\n</ul>`;
  pillar.content = pillar.content.includes("<!--FUXION_INDEX-->")
    ? pillar.content.replace("<!--FUXION_INDEX-->", block)
    : `${pillar.content}\n${block}`;
  pillar.toc.push({ id: "indice-recetas", label: "Índice de recetas con FuXion" });
}

// Limpiar posts fuxion antiguos que ya no existen en fuente
for (const old of rawIndex.filter((p) => p.category === CATEGORY.slug)) {
  if (!entries.find((e) => e.slug === old.slug)) {
    const fp = path.join(postsDir, `${old.slug}.json`);
    if (fs.existsSync(fp)) fs.unlinkSync(fp);
  }
}

for (const e of entries) {
  fs.writeFileSync(path.join(postsDir, `${e.slug}.json`), JSON.stringify(e, null, 2));
}

const indexEntries = entries.map((e) => ({
  slug: e.slug,
  title: e.title,
  category: e.category,
  categoryName: e.categoryName,
  date: e.date,
  excerpt: e.excerpt,
  featuredImage: e.featuredImage,
  isGenerated2026: true,
  primaryProduct: e.fuxion.primaryProduct,
  format: e.fuxion.format,
}));

const finalIndex = [...indexEntries, ...others];
fs.writeFileSync(path.join(contentDir, "index.json"), JSON.stringify(finalIndex, null, 2));

const cats = JSON.parse(fs.readFileSync(path.join(contentDir, "categories.json"), "utf8")).filter((c) => c.slug !== CATEGORY.slug);
cats.push({ slug: CATEGORY.slug, name: CATEGORY.name, count: entries.length });
fs.writeFileSync(path.join(contentDir, "categories.json"), JSON.stringify(cats, null, 2));

console.log(`✅ ${entries.length} páginas /fuxion/ generadas · total index: ${finalIndex.length} · categorías: ${cats.length}`);
