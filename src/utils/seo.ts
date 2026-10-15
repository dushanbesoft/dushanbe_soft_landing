import type { Metadata } from "next";
import { i18nConfig } from "../../i18nConfig";
import { CONTENT_LOCALES, LOCALE_META, hasOwnContent } from "./locales";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dushanbe-soft.tj").replace(/\/$/, "");
export const SITE_NAME = "Dushanbe Soft";

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Dushanbe Soft — разработка программного обеспечения в Таджикистане",
};

// Single source of truth for NAP (name, address, phone) — must match the footer
// and the Google Business / Yandex Business profiles exactly.
export const COMPANY = {
  name: SITE_NAME,
  // As registered in the World Bank procurement notice OP00455715
  legalName: "Частное предприятие «Dushanbe Soft»",
  foundingDate: "2017",
  telephone: "+992901000535",
  email: "dushanbesoft@gmail.com",
  addressLocality: "Душанбе",
  addressRegion: "Душанбе",
  addressCountry: "TJ",
  logo: `${SITE_URL}/icons/logo-header.svg`,
  worldBankAward: {
    url: "https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00455715",
    text: "Contract award under the World Bank-financed Tajikistan Digital Foundations Project (P506611, TDFP-NS-RFQ-03), 2026",
  },
  sameAs: [
    "https://www.instagram.com/dushanbe_soft/",
    "https://www.facebook.com/Dushanbe-Soft-575506316208641/",
    "https://t.me/992901000535",
  ],
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Relative localized path: ru has no prefix (prefixDefault: false). */
export function localePath(lang: string, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  if (lang === i18nConfig.defaultLocale) return clean ? `/${clean}` : "/";
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

/** Absolute localized URL. */
export function localeUrl(lang: string, path = ""): string {
  const p = localePath(lang, path);
  return p === "/" ? SITE_URL : `${SITE_URL}${p}`;
}

export function absoluteUrl(src: string): string {
  if (/^https?:\/\//.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? "" : "/"}${encodeURI(decodeURI(src))}`;
}

/**
 * Locales a page is published in. Pages built from long-form content
 * (`contentPage`) only exist as real translations in CONTENT_LOCALES; the
 * other locales show fallback text and stay out of hreflang and the sitemap.
 */
export function publishedLocales(contentPage = false): readonly string[] {
  return contentPage ? CONTENT_LOCALES : i18nConfig.locales;
}

/** hreflang map. Our "tj" locale is ISO 639-1 "tg" (Tajik). */
export function languageAlternates(path = "", contentPage = false): Record<string, string> {
  const map: Record<string, string> = {};
  for (const lang of publishedLocales(contentPage)) {
    map[LOCALE_META[lang as keyof typeof LOCALE_META].hreflang] = localeUrl(lang, path);
  }
  map["x-default"] = localeUrl(i18nConfig.defaultLocale, path);
  return map;
}

export function ogLocale(lang: string): string {
  return LOCALE_META[lang as keyof typeof LOCALE_META]?.og ?? LOCALE_META.ru.og;
}

const INDEXABLE: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

/** Google shows roughly 60–65 characters of a title before truncating it. */
const MAX_TITLE_LENGTH = 65;
const BRAND_SUFFIX = ` | ${SITE_NAME}`;

/**
 * The layout template appends " | Dushanbe Soft". Skip it when the page title
 * already names the brand or would be truncated with it; the brand is still
 * present in og:site_name and the Organization JSON-LD.
 */
function pageTitle(title: string, absolute?: boolean): Metadata["title"] {
  if (absolute || title.includes(SITE_NAME) || title.length + BRAND_SUFFIX.length > MAX_TITLE_LENGTH) {
    return { absolute: title };
  }
  return title;
}

/** "ZudSMS – Платформа SMS-рассылок" → "ZudSMS": the name before a dash or colon. */
export function shortName(title: string): string {
  const name = title.split(/\s[—–-]\s|:\s/)[0].trim();
  return name.length >= 3 ? name : title;
}

/**
 * Meta description from a short lead plus body text: skips numbered headings
 * and repeated sentences, then trims to ~160 characters on a word boundary.
 */
export function describe(lead: string, body = "", max = 160): string {
  const parts: string[] = [];
  for (const raw of [lead, ...body.split(/\n+/)]) {
    const line = raw.trim();
    if (!line || /^\d+\.\s/.test(line) || line.length < 25) continue;
    if (parts.some((p) => p.includes(line) || line.includes(p))) continue;
    parts.push(/[.!?…]$/.test(line) ? line : `${line}.`);
    if (parts.join(" ").length >= max) break;
  }
  return truncate(parts.join(" ") || lead, max);
}

type PageMetaInput = {
  lang: string;
  path: string;
  title: string;
  description: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
  publishedTime?: string;
  absoluteTitle?: boolean;
  /** Page body comes from long-form content that only exists in CONTENT_LOCALES. */
  contentPage?: boolean;
};

/**
 * Builds consistent page metadata. Child `openGraph` replaces the layout's
 * object entirely, so every page must re-declare image, locale and siteName.
 */
export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  image,
  type = "website",
  publishedTime,
  absoluteTitle,
  contentPage = false,
}: PageMetaInput): Metadata {
  const url = localeUrl(lang, path);
  const img = image ? { ...image, url: absoluteUrl(image.url) } : OG_IMAGE;
  const alternateLocale = publishedLocales(contentPage).filter((l) => l !== lang).map(ogLocale);
  // Fallback-language copies of content pages must not compete with the originals.
  const fallbackCopy = contentPage && !hasOwnContent(lang);

  return {
    title: pageTitle(title, absoluteTitle),
    description,
    // Set per page rather than in the layout, so 404s keep only Next's noindex.
    robots: fallbackCopy ? { index: false, follow: true } : INDEXABLE,
    alternates: {
      canonical: url,
      languages: languageAlternates(path, contentPage),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: ogLocale(lang),
      alternateLocale,
      images: [img],
      ...(type === "article" ? { type: "article", publishedTime } : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img.url],
    },
  };
}

/** Serialize JSON-LD safely (escapes `<` to prevent script injection). */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const HOME_LABEL: Record<string, string> = {
  ru: "Главная", en: "Home", tj: "Асосӣ", uz: "Bosh sahifa", kk: "Басты бет",
  ky: "Башкы бет", tk: "Baş sahypa", fa: "صفحه اصلی", ar: "الرئيسية",
};
export function homeCrumb(lang: string) {
  return { name: HOME_LABEL[lang] ?? HOME_LABEL.ru, url: localeUrl(lang) };
}

/** "24.08.2025" → "2025-08-24" */
export function ruDateToIso(date: string): string {
  if (!date.includes(".")) return date; // year-only, e.g. "2024"
  const [d, m, y] = date.split(".");
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

/** Trim text to a meta-description length on a word boundary. */
export function truncate(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

const CASE_LABEL: Record<string, string> = {
  ru: "кейс разработки", en: "case study", tj: "лоиҳаи таҳияшуда", uz: "ishlab chiqilgan loyiha",
  kk: "әзірлеу кейсі", ky: "иштелип чыккан долбоор", tk: "işlenip düzülen taslama",
  fa: "نمونه کار", ar: "دراسة حالة",
};
export function caseTitle(title: string, lang: string): string {
  return `${title} — ${CASE_LABEL[lang] ?? CASE_LABEL.ru}`;
}

const CASES_LABEL: Record<string, string> = {
  ru: "Портфолио", en: "Portfolio", tj: "Портфолио", uz: "Portfolio", kk: "Портфолио",
  ky: "Портфолио", tk: "Portfolio", fa: "نمونه کارها", ar: "معرض الأعمال",
};
export function casesCrumb(lang: string) {
  return { name: CASES_LABEL[lang] ?? CASES_LABEL.ru, url: localeUrl(lang, "cases") };
}
