import type { Locale } from "@/utils/locales";

// Lightweight service list for client components (header menu).
// ru/en/tj names must match `content[lang].name` in services-data.ts.
export const servicesNav: { slug: string; name: Record<Locale, string> }[] = [
  {
    slug: "web-development",
    name: {
      ru: "Создание сайтов", en: "Website Development", tj: "Сохтани сайтҳо",
      uz: "Veb-saytlar yaratish", kk: "Сайттар жасау", ky: "Сайттарды түзүү",
      tk: "Web saýtlary döretmek", fa: "طراحی وب‌سایت", ar: "تطوير المواقع الإلكترونية",
    },
  },
  {
    slug: "mobile-app-development",
    name: {
      ru: "Мобильные приложения", en: "Mobile Apps", tj: "Барномаҳои мобилӣ",
      uz: "Mobil ilovalar", kk: "Мобильді қосымшалар", ky: "Мобилдик тиркемелер",
      tk: "Mobil programmalar", fa: "اپلیکیشن موبایل", ar: "تطبيقات الجوال",
    },
  },
  {
    slug: "crm-erp-development",
    name: {
      ru: "CRM и ERP системы", en: "CRM & ERP Systems", tj: "Системаҳои CRM ва ERP",
      uz: "CRM va ERP tizimlari", kk: "CRM және ERP жүйелері", ky: "CRM жана ERP системалары",
      tk: "CRM we ERP ulgamlary", fa: "سیستم‌های CRM و ERP", ar: "أنظمة CRM وERP",
    },
  },
  {
    slug: "sms-gateway",
    name: {
      ru: "SMS-рассылка и SMS-шлюз", en: "SMS Gateway", tj: "Фиристодани SMS ва SMS-шлюз",
      uz: "SMS-xabarnoma va SMS-shlyuz", kk: "SMS-тарату және SMS-шлюз", ky: "SMS-таратуу жана SMS-шлюз",
      tk: "SMS ibermek we SMS-şlýuz", fa: "ارسال پیامک و درگاه SMS", ar: "الرسائل النصية وبوابة SMS",
    },
  },
  {
    slug: "ui-ux-design",
    name: {
      ru: "UI/UX дизайн", en: "UI/UX Design", tj: "Дизайни UI/UX",
      uz: "UI/UX dizayn", kk: "UI/UX дизайн", ky: "UI/UX дизайн",
      tk: "UI/UX dizaýn", fa: "طراحی UI/UX", ar: "تصميم UI/UX",
    },
  },
  {
    slug: "api-integration",
    name: {
      ru: "API интеграция", en: "API Integration", tj: "Ҳамгироии API",
      uz: "API integratsiya", kk: "API интеграциясы", ky: "API интеграциясы",
      tk: "API integrasiýasy", fa: "یکپارچه‌سازی API", ar: "تكامل API",
    },
  },
  {
    slug: "cybersecurity",
    name: {
      ru: "Кибербезопасность", en: "Cybersecurity", tj: "Амнияти киберӣ",
      uz: "Kiberxavfsizlik", kk: "Киберқауіпсіздік", ky: "Киберкоопсуздук",
      tk: "Kiberhowpsuzlyk", fa: "امنیت سایبری", ar: "الأمن السيبراني",
    },
  },
  {
    slug: "website-support",
    name: {
      ru: "Техподдержка сайтов", en: "Website Support", tj: "Дастгирии техникии сайтҳо",
      uz: "Saytlarni texnik qoʻllab-quvvatlash", kk: "Сайттарды техникалық қолдау", ky: "Сайттарды техникалык колдоо",
      tk: "Saýtlara tehniki goldaw", fa: "پشتیبانی فنی وب‌سایت", ar: "الدعم الفني للمواقع",
    },
  },
];
