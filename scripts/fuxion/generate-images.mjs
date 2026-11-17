/**
 * Genera las imágenes hero de /fuxion/ usando la edge function
 * `recetas-fuxion-images` del Supabase de Charlie (OpenAI gpt-image-1).
 * Descarga y optimiza a 1200x675 WebP en public/images/fuxion/<slug>.webp
 * Uso: node scripts/fuxion/generate-images.mjs [--force] [slug1 slug2 ...]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const srcDir = path.join(root, "content", "fuxion-src");
const outDir = path.join(root, "public", "images", "fuxion");
fs.mkdirSync(outDir, { recursive: true });

const FN_URL = "https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/recetas-fuxion-images";
const ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVod2p2dWhiaW1xYWt2enFidnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MTk0MDEsImV4cCI6MjA4NDA5NTQwMX0.bU9VYNS6MGE-Dx4OrD45t6jb4AAtv3da_DLPFXNLnb4";

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

const items = fs
  .readdirSync(srcDir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(fs.readFileSync(path.join(srcDir, f), "utf8")))
  .filter((s) => (only.length ? only.includes(s.slug) : true))
  .filter((s) => force || !fs.existsSync(path.join(outDir, `${s.slug}.webp`)));

console.log(`🖼️  Imágenes por generar: ${items.length}`);

async function genOne(s) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await fetch(FN_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${ANON}`, apikey: ANON, "Content-Type": "application/json" },
        body: JSON.stringify({ slug: s.slug, prompt: s.imagePrompt || s.title }),
      });
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || `HTTP ${r.status}`);
      const img = Buffer.from(await (await fetch(j.url)).arrayBuffer());
      await sharp(img)
        .resize(1200, 675, { fit: "cover", position: "attention" })
        .webp({ quality: 80 })
        .toFile(path.join(outDir, `${s.slug}.webp`));
      console.log(`  ✅ ${s.slug} (${j.model})`);
      return true;
    } catch (e) {
      console.log(`  ⚠️  ${s.slug} intento ${attempt}: ${e.message}`);
      await new Promise((res) => setTimeout(res, 4000 * attempt));
    }
  }
  return false;
}

const CONCURRENCY = 3;
let i = 0;
let ok = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (i < items.length) {
      const s = items[i++];
      if (await genOne(s)) ok++;
    }
  })
);
console.log(`🎉 ${ok}/${items.length} imágenes generadas en public/images/fuxion/`);
