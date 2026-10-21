// Lightweight data for the header dropdowns (client bundle — keep it small).
// Labels are resolved with i18n keys at render time; `fallback` is used when
// a key has no translation.

export interface HeaderNavItem {
  /** Path without locale prefix, e.g. "cases/zudsms" or "#partners" */
  path: string;
  labelKey: string;
  fallback: string;
}

/** «Для бизнеса»: our own products, linked to their case studies */
export const productsNav: HeaderNavItem[] = [
  { path: "cases/mablagtj", labelKey: "products.mablagtj.title", fallback: "Mablag.tj – Автоматизация и учет для бизнеса" },
  { path: "cases/zudsms", labelKey: "products.zudsms.title", fallback: "ZudSMS – Платформа SMS-рассылок" },
  { path: "cases/livechat-tj", labelKey: "products.livechat.title", fallback: "LiveChat TJ - Онлайн-чат" },
  { path: "cases/sinamoktv", labelKey: "products.tvcrm.title", fallback: "TV CRM" },
];

/** «Портфолио»: flagship projects (the full list lives on /cases) */
export const portfolioNav: HeaderNavItem[] = [
  "president",
  "digital-tajikistan",
  "sohktor",
  "mavji-somon",
  "somon-tv",
  "onlinepay",
  "omodatj",
  "rushdikuhiston",
  "zenith-valuation",
].map((slug) => ({ path: `cases/${slug}`, labelKey: `projects.${slug}.title`, fallback: slug }));

/**
 * «Наши партнёры»: same order as PartnersSection (labels share its i18n keys).
 * Partners with a case study link to it; the rest link to the partners block.
 */
const partnerCases: (string | null)[] = [
  "president",
  "digital-tajikistan",
  "sohktor",
  "rushdikuhiston",
  null, // Megafon
  "telecomm",
  "mavji-somon",
  "navo",
  "somon-tv",
  "itrunstj",
  "sunduk-tv",
  null, // Pamir Energy
  "zenith-valuation",
  "sinamoktv",
  null, // Ministry of Transport
];

const partnerNames = [
  "Президент ҶТ",
  "Digital Tajikistan",
  "СХДО",
  "Рушди Кӯҳистон",
  "Megafon",
  "Телеком",
  "Mavji Somon",
  "Navo",
  "Somon TV",
  "IMRON NAKLIET",
  "Sunduk TV",
  "Памир Энерджи",
  "Zenith Valuation",
  "СинамоТВ",
  "Минтранс РТ",
];

export const partnersNav: HeaderNavItem[] = partnerNames.map((name, i) => ({
  path: partnerCases[i] ? `cases/${partnerCases[i]}` : "#partners",
  labelKey: `partners.list.${i}.name`,
  fallback: name,
}));
