export type TranslatedString = string | { ru: string; en: string; tj: string };

export function getTranslated(value: TranslatedString | undefined, lang: string): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return (value as Record<string, string>)[lang] || value.ru || "";
}
