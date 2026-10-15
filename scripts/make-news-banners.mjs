// Builds 2x (3280x1520) home-banner images for news whose source picture is a
// ~1700px promo screenshot. Stretching those across the 1640px banner looks
// soft, so the source is shown as a framed card near its native size on top of
// a blurred, darkened copy of itself; the lower part stays free for the
// slide caption.
//
// Usage: node scripts/make-news-banners.mjs
// Then point the news item's `heroImage` (or a case slide in HeroNewsCarousel) at the generated file.

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PUBLIC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "public");

const W = 3280;
const H = 1520;
const CARD_W = 2000; // ≈1000 CSS px in the 1640px banner: close to the sources' native 1700px
const CARD_TOP = 90;
const RADIUS = 36;

const BANNERS = [
  { src: "images/projects/mavjisomon.webp", out: "images/news/mavji-somon-banner.webp" },
  { src: "images/projects/project-sohktor.webp", out: "images/news/sohktor-banner.webp" },
  { src: "images/projects/navo.webp", out: "images/news/navo-radio-banner.webp" },
  { src: "images/projects/somontv.webp", out: "images/news/somontv-banner.webp" },
  { src: "images/projects/zudsms.png", out: "images/news/zudsms-banner.webp" },
  { src: "images/projects/livechat.webp", out: "images/news/livechat-banner.webp" },
  { src: "images/projects/president/banner_main.jpg", out: "images/news/president-banner.webp" },
];

async function build({ src, out }) {
  const input = path.join(PUBLIC, src);

  const backdrop = await sharp(input)
    .resize(W, H, { fit: "cover" })
    .blur(60)
    .modulate({ brightness: 0.5, saturation: 1.2 })
    .toBuffer();

  const card = await sharp(input)
    .resize({ width: CARD_W, kernel: "lanczos3" })
    .sharpen({ sigma: 0.6 })
    .toBuffer({ resolveWithObject: true });
  const cardH = card.info.height;
  const left = Math.round((W - CARD_W) / 2);

  const mask = Buffer.from(
    `<svg width="${CARD_W}" height="${cardH}"><rect width="${CARD_W}" height="${cardH}" rx="${RADIUS}" fill="#fff"/></svg>`,
  );
  const roundedCard = await sharp(card.data).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();

  const decor = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="s" x="-20%" y="-20%" width="140%" height="160%"><feGaussianBlur stdDeviation="40"/></filter></defs>
    <rect x="${left + 30}" y="${CARD_TOP + 60}" width="${CARD_W - 60}" height="${cardH}" rx="${RADIUS}" fill="#000" fill-opacity="0.7" filter="url(#s)"/>
  </svg>`);
  const border = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${left + 1.5}" y="${CARD_TOP + 1.5}" width="${CARD_W - 3}" height="${cardH - 3}" rx="${RADIUS}" fill="none" stroke="#fff" stroke-opacity="0.18" stroke-width="3"/>
  </svg>`);

  await sharp(backdrop)
    .composite([
      { input: decor, left: 0, top: 0 },
      { input: roundedCard, left, top: CARD_TOP },
      { input: border, left: 0, top: 0 },
    ])
    .webp({ quality: 90 })
    .toFile(path.join(PUBLIC, out));

  console.log(`${src} -> ${out} (card ${CARD_W}x${cardH})`);
}

for (const banner of BANNERS) await build(banner);
