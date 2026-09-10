// One-off asset optimizer: extracts the base64 raster embedded in Figma/Builder
// "SVG" exports (a <pattern> wrapping a giant PNG/JPEG) and rewrites it as a
// correctly-sized .webp. True vector SVGs (no embedded raster) are skipped.
//
// Usage: node scripts/rasterize-svgs.mjs <group>
//   group = "icons" | "images"
// Verbose by default; logs old->new size and native raster dimensions per file.

import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");

// max = longest-side cap (never upscales past native); q = webp quality.
const GROUPS = {
  icons: [
    { file: "icons/comments/1.svg", max: 256, q: 82 },
    { file: "icons/comments/2.svg", max: 256, q: 82 },
    { file: "icons/comments/3.svg", max: 256, q: 82 },
    { file: "icons/comments/4.svg", max: 256, q: 82 },
    { file: "icons/comments/5.svg", max: 256, q: 82 },
    { file: "icons/comments/6.svg", max: 256, q: 82 },
    { file: "icons/partners/itrans.svg", max: 512, q: 82 },
    { file: "icons/partners/pamir.svg", max: 512, q: 82 },
    { file: "icons/partners/shdo.svg", max: 512, q: 82 },
    { file: "icons/partners/sinamo.svg", max: 512, q: 82 },
    { file: "icons/partners/sunduk.svg", max: 512, q: 82 },
    { file: "icons/partners/rushd.svg", max: 512, q: 82 },
    { file: "icons/partners/zenith.svg", max: 512, q: 82 },
  ],
  images: [
    { file: "images/projects/site-prezedent-tj.svg", max: 1700, q: 80 },
    { file: "images/projects/project-sohktor.svg", max: 1700, q: 80 },
    { file: "images/projects/pic.svg", max: 1700, q: 80 },
    { file: "images/projects/mavjisomon.svg", max: 1700, q: 80 },
    { file: "images/projects/livechat.svg", max: 1700, q: 80 },
    { file: "images/projects/ttl.svg", max: 1700, q: 80 },
    { file: "images/projects/navo.svg", max: 1700, q: 80 },
    { file: "images/projects/somontv.svg", max: 1700, q: 80 },
    { file: "images/projects/zudsms.svg", max: 1700, q: 80 },
    { file: "images/projects/sunduk.svg", max: 1700, q: 80 },
    { file: "images/projects/onlinepay.svg", max: 1700, q: 80 },
    { file: "images/projects/zenith.svg", max: 1700, q: 80 },
    { file: "images/projects/itrans.svg", max: 1700, q: 80 },
    { file: "images/liveChatBanner.svg", max: 900, q: 82 },
    { file: "images/ZudSMSBanner.svg", max: 900, q: 82 },
    { file: "images/login-home-bg.svg", max: 1920, q: 80 },
  ],
};

const RASTER_RE = /data:image\/(png|jpe?g|webp);base64,([A-Za-z0-9+/=]+)/g;

function extractLargestRaster(svg) {
  let best = null;
  for (const m of svg.matchAll(RASTER_RE)) {
    const b64 = m[2];
    if (!best || b64.length > best.b64.length) best = { b64, mime: m[1] };
  }
  return best;
}

async function fileSize(p) {
  try {
    return (await stat(p)).size;
  } catch {
    return 0;
  }
}

async function run() {
  const group = process.argv[2];
  const items = GROUPS[group];
  if (!items) {
    console.error(`[rasterize] Unknown group "${group}". Use: icons | images`);
    process.exit(1);
  }

  let totalOld = 0;
  let totalNew = 0;
  let converted = 0;
  let skipped = 0;

  for (const { file, max, q } of items) {
    const abs = path.join(PUBLIC, file);
    let svg;
    try {
      svg = await readFile(abs, "utf8");
    } catch {
      console.warn(`[rasterize] MISSING, skipping: ${file}`);
      continue;
    }

    const raster = extractLargestRaster(svg);
    if (!raster) {
      console.warn(`[rasterize] VECTOR (no embedded raster), keeping as .svg: ${file}`);
      skipped++;
      continue;
    }

    const inputBuf = Buffer.from(raster.b64, "base64");
    const meta = await sharp(inputBuf).metadata();
    const outAbs = abs.replace(/\.svg$/i, ".webp");
    const outRel = file.replace(/\.svg$/i, ".webp");

    await sharp(inputBuf)
      .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
      .webp({ quality: q, effort: 6 })
      .toFile(outAbs);

    const oldSize = await fileSize(abs);
    const newSize = await fileSize(outAbs);
    totalOld += oldSize;
    totalNew += newSize;
    converted++;

    const outMeta = await sharp(outAbs).metadata();
    console.log(
      `[rasterize] ${file} (${raster.mime} ${meta.width}x${meta.height}) ` +
        `-> ${outRel} (${outMeta.width}x${outMeta.height}) | ` +
        `${(oldSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(1)}KB ` +
        `(${(100 - (newSize / oldSize) * 100).toFixed(1)}% smaller)`,
    );
  }

  console.log(
    `[rasterize] group="${group}" done: converted=${converted}, skipped(vector)=${skipped}, ` +
      `total ${(totalOld / 1048576).toFixed(2)}MB -> ${(totalNew / 1024).toFixed(0)}KB`,
  );
}

run().catch((e) => {
  console.error("[rasterize] FAILED:", e);
  process.exit(1);
});
