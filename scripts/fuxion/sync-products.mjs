/**
 * Sincroniza el catálogo oficial de productos desde el proyecto fuxion.site
 * hacia Recetasdeperu.com (content/fuxion-products.json) y copia las fotos
 * bodegón locales a public/images/fuxion/productos/.
 * Los enlaces de compra (shopUrl) se conservan EXACTAMENTE como en fuxion.site.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const fuxionRoot = path.join(root, "..", "fuxion.site");
const src = path.join(fuxionRoot, "src", "data", "products.json");
const outJson = path.join(root, "content", "fuxion-products.json");
const outImgDir = path.join(root, "public", "images", "fuxion", "productos");

fs.mkdirSync(outImgDir, { recursive: true });

const products = JSON.parse(fs.readFileSync(src, "utf8"));

function localize(img) {
  if (!img) return "";
  if (/^https?:/.test(img)) return img;
  const from = path.join(fuxionRoot, "public", img.replace(/^\//, ""));
  const name = path.basename(img);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, path.join(outImgDir, name));
    return `/images/fuxion/productos/${name}`;
  }
  return "";
}

const slim = products.map((p) => ({
  slug: p.slug,
  sku: p.sku,
  cleanName: p.cleanName,
  categoryName: p.categoryName,
  badge: p.badge,
  price: p.price,
  formattedPrice: p.formattedPrice,
  pack: p.pack,
  points: p.points,
  perStickFormatted: p.perStickFormatted || "",
  inStock: p.inStock !== false,
  shopUrl: p.shopUrl,
  image: localize(p.bodegonImage) || localize(p.mainImage) || p.mainImage,
  description: (p.description || "").replace(/\?+$/, "").trim(),
  benefits: (p.benefits || []).slice(0, 4),
  preparation: (p.preparation || "").replace(/\?+\s*$/, "").trim(),
}));

fs.writeFileSync(outJson, JSON.stringify(slim, null, 2));
console.log(`✅ ${slim.length} productos FuXion sincronizados → content/fuxion-products.json`);
