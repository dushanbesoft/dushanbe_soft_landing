import { LOCALES } from "../../i18nConfig";

export { LOCALES };

export type Locale = (typeof LOCALES)[number];

/** Locales whose long-form content (cases, news, services, jobs) is written by hand. */
export const CONTENT_LOCALES = ["ru", "en", "tj"] as const;
export type ContentLocale = (typeof CONTENT_LOCALES)[number];

type LocaleMeta = {
  /** ISO 639-1 code for `<html lang>`, hreflang and JSON-LD. */
  hreflang: string;
  /** Open Graph locale. */
  og: string;
  dir: "ltr" | "rtl";
  /** Short label for the header switcher button. */
  short: string;
  /** Native language name for the switcher menu. */
  name: string;
  flag: string;
  /** English language name for schema.org `availableLanguage`. */
  english: string;
  /** Where untranslated long-form content falls back to. */
  contentFallback: ContentLocale;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  ru: { hreflang: "ru", og: "ru_RU", dir: "ltr", short: "РУ", name: "Русский", flag: "🇷🇺", english: "Russian", contentFallback: "ru" },
  en: { hreflang: "en", og: "en_US", dir: "ltr", short: "EN", name: "English", flag: "🇬🇧", english: "English", contentFallback: "en" },
  tj: { hreflang: "tg", og: "tg_TJ", dir: "ltr", short: "ТҶ", name: "Тоҷикӣ", flag: "🇹🇯", english: "Tajik", contentFallback: "tj" },
  uz: { hreflang: "uz", og: "uz_UZ", dir: "ltr", short: "UZ", name: "Oʻzbekcha", flag: "🇺🇿", english: "Uzbek", contentFallback: "ru" },
  kk: { hreflang: "kk", og: "kk_KZ", dir: "ltr", short: "ҚАЗ", name: "Қазақша", flag: "🇰🇿", english: "Kazakh", contentFallback: "ru" },
  ky: { hreflang: "ky", og: "ky_KG", dir: "ltr", short: "КЫР", name: "Кыргызча", flag: "🇰🇬", english: "Kyrgyz", contentFallback: "ru" },
  tk: { hreflang: "tk", og: "tk_TM", dir: "ltr", short: "TM", name: "Türkmençe", flag: "🇹🇲", english: "Turkmen", contentFallback: "ru" },
  fa: { hreflang: "fa", og: "fa_IR", dir: "rtl", short: "FA", name: "فارسی", flag: "🇮🇷", english: "Persian", contentFallback: "en" },
  ar: { hreflang: "ar", og: "ar_AR", dir: "rtl", short: "AR", name: "العربية", flag: "🇸🇦", english: "Arabic", contentFallback: "en" },
};

/** Order of the header language menu. */
export const LANG_MENU_ORDER: Locale[] = ["tj", "ru", "en", "uz", "kk", "ky", "tk", "fa", "ar"];

export function isLocale(value: string | undefined): value is Locale {
  return !!value && value in LOCALE_META;
}

function meta(lang: string): LocaleMeta {
  return LOCALE_META[lang as Locale] ?? LOCALE_META.ru;
}

export const localeHreflang = (lang: string) => meta(lang).hreflang;
export const localeDir = (lang: string) => meta(lang).dir;

/** Locale whose hand-written content is shown for `lang`. */
export function contentLocale(lang: string): ContentLocale {
  return meta(lang).contentFallback;
}

/** True when the page's long-form content exists in `lang` itself. */
export function hasOwnContent(lang: string): boolean {
  return (CONTENT_LOCALES as readonly string[]).includes(lang);
}
