// Lightweight service list for client components (header menu).
// Names must match `content[lang].name` in services-data.ts.
export const servicesNav: { slug: string; name: Record<"ru" | "en" | "tj", string> }[] = [
  { slug: "web-development", name: { ru: "Создание сайтов", en: "Website Development", tj: "Сохтани сайтҳо" } },
  { slug: "mobile-app-development", name: { ru: "Мобильные приложения", en: "Mobile Apps", tj: "Барномаҳои мобилӣ" } },
  { slug: "crm-erp-development", name: { ru: "CRM и ERP системы", en: "CRM & ERP Systems", tj: "Системаҳои CRM ва ERP" } },
  { slug: "sms-gateway", name: { ru: "SMS-рассылка и SMS-шлюз", en: "SMS Gateway", tj: "Фиристодани SMS ва SMS-шлюз" } },
  { slug: "ui-ux-design", name: { ru: "UI/UX дизайн", en: "UI/UX Design", tj: "Дизайни UI/UX" } },
  { slug: "api-integration", name: { ru: "API интеграция", en: "API Integration", tj: "Ҳамгироии API" } },
  { slug: "cybersecurity", name: { ru: "Кибербезопасность", en: "Cybersecurity", tj: "Амнияти киберӣ" } },
  { slug: "website-support", name: { ru: "Техподдержка сайтов", en: "Website Support", tj: "Дастгирии техникии сайтҳо" } },
];
