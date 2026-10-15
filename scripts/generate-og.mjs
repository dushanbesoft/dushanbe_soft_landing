// Generates 1200x630 Open Graph images for every service page and locale.
// Run after changing service names:  node scripts/generate-og.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public/og/services");
fs.mkdirSync(outDir, { recursive: true });

// Read names from the lightweight nav list (single source for menu + OG).
const navSource = fs.readFileSync(path.join(root, "src/const/services-nav.ts"), "utf8");
const services = [...navSource.matchAll(/slug: "([^"]+)", name: \{ ru: "([^"]+)", en: "([^"]+)", tj: "([^"]+)" \}/g)].map(
  (m) => ({ slug: m[1], name: { ru: m[2], en: m[3], tj: m[4] } }),
);

const subtitle = {
  ru: "Dushanbe Soft · Душанбе, Таджикистан",
  en: "Dushanbe Soft · Dushanbe, Tajikistan",
  tj: "Dushanbe Soft · Душанбе, Тоҷикистон",
};
const label = { ru: "УСЛУГИ", en: "SERVICES", tj: "ХИЗМАТРАСОНИҲО" };

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Split long names into at most two lines.
function lines(text, max = 22) {
  if (text.length <= max) return [text];
  const words = text.split(" ");
  let first = "";
  while (words.length && (first + " " + words[0]).trim().length <= max) first = (first + " " + words.shift()).trim();
  return [first, words.join(" ")];
}

const logoSvg = fs.readFileSync(path.join(root, "public/icons/logo-header.svg"));
const logo = await sharp(logoSvg, { density: 300 }).resize({ width: 420 }).png().toBuffer();

for (const service of services) {
  for (const lang of ["ru", "en", "tj"]) {
    const iconSvg = fs.readFileSync(path.join(root, "public/icons", iconFor(service.slug)));
    const icon = await sharp(iconSvg, { density: 300 }).resize(150, 150, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const title = lines(service.name[lang]);
    const titleSvg = title
      .map((line, i) => `<text x="80" y="${330 + i * 76}" font-family="Arial" font-size="66" font-weight="700" fill="#ffffff">${escape(line)}</text>`)
      .join("");
    const svg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<defs>
 <radialGradient id="g" cx="85%" cy="15%" r="70%"><stop offset="0" stop-color="#3ddc84" stop-opacity="0.35"/><stop offset="1" stop-color="#000607" stop-opacity="0"/></radialGradient>
 <radialGradient id="g2" cx="0%" cy="100%" r="60%"><stop offset="0" stop-color="#02704f" stop-opacity="0.45"/><stop offset="1" stop-color="#000607" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="#000607"/><rect width="1200" height="630" fill="url(#g)"/><rect width="1200" height="630" fill="url(#g2)"/>
<text x="80" y="236" font-family="Arial" font-size="22" font-weight="700" fill="#3ddc84" letter-spacing="3">${label[lang]}</text>
${titleSvg}
<rect x="80" y="${title.length > 1 ? 470 : 400}" width="96" height="4" rx="2" fill="#3ddc84"/>
<text x="80" y="${title.length > 1 ? 530 : 460}" font-family="Arial" font-size="28" fill="#8fa0b5">${escape(subtitle[lang])}</text>
</svg>`);
    await sharp(svg)
      .composite([
        { input: logo, left: 76, top: 60 },
        { input: icon, left: 970, top: 400 },
      ])
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(path.join(outDir, `${service.slug}-${lang}.jpg`));
  }
}
console.log(`Generated ${services.length * 3} images in public/og/services`);

function iconFor(slug) {
  return (
    {
      "web-development": "web.svg",
      "mobile-app-development": "mobile.svg",
      "crm-erp-development": "network.svg",
      "sms-gateway": "api.svg",
      "ui-ux-design": "disign.svg",
      "api-integration": "api.svg",
      cybersecurity: "security.svg",
      "website-support": "support.svg",
    }[slug] ?? "web.svg"
  );
}
