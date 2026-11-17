// One-off: convert Figma PNG exports in public/figma to resized WebP (keeps alpha).
import sharp from "sharp";
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";

import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../public/figma/", import.meta.url));
let before = 0, after = 0, n = 0;
for (const dir of readdirSync(root)) {
  const d = join(root, dir);
  if (!statSync(d).isDirectory()) continue;
  for (const f of readdirSync(d)) {
    if (!f.endsWith(".png")) continue;
    const src = join(d, f);
    const out = src.replace(/\.png$/, ".webp");
    before += statSync(src).size;
    await sharp(src).resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    after += statSync(out).size;
    unlinkSync(src);
    n++;
  }
}
console.log(`${n} images: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);
