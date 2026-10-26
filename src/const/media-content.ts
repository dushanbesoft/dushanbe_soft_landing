import { contentLocale } from "../utils/locales";

export interface MediaItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  thumb: string;
  title: string;
  caption: string;
  duration?: string | null;
}

export const mediaGalleryItems: MediaItem[] = [
  {
    "id": "media_1",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_1.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_1.webp",
    "title": "#website #web #tajikistan #веб #вебсайт #dushanbe #radio",
    "caption": "#website #web #tajikistan #веб #вебсайт #dushanbe #radio",
    "duration": "1:01"
  },
  {
    "id": "media_2",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_2.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_2.webp",
    "title": "1. HTML был создан в 1989 годуHTML - основной язык разметки д...",
    "caption": "1. HTML был создан в 1989 годуHTML - основной язык разметки для создания веб-страниц. Впервые он",
    "duration": "0:16"
  },
  {
    "id": "media_3",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_3.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_3.webp",
    "title": "Dushanbe-soft – это профессиональная и быстроразвивающаяся ком...",
    "caption": "Dushanbe-soft – это профессиональная и быстроразвивающаяся компания. Наша команда имеет большой",
    "duration": "0:38"
  },
  {
    "id": "media_4",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_4.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_4.webp",
    "title": "SMS-шлюз для OTP-кодов, 2FA или системных уведомлений.  Для с...",
    "caption": "SMS-шлюз для OTP-кодов, 2FA или системных уведомлений.  Для старта- Сразу после регистрации мы д",
    "duration": "0:43"
  },
  {
    "id": "media_5",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_5.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_5.webp",
    "title": "«Топ 10 интересных фактов о программирования1. Первый програм...",
    "caption": "«Топ 10 интересных фактов о программирования1. Первый программист в мире была женщина по имени",
    "duration": "0:01"
  },
  {
    "id": "media_6",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_6.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_6.webp",
    "title": "Благодаря SMM, бизнес может установить прямую связь с клиентам...",
    "caption": "Благодаря SMM, бизнес может установить прямую связь с клиентами и отвечать на их вопросы или дав",
    "duration": "0:09"
  },
  {
    "id": "media_7",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_7.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_7.webp",
    "title": "Наш новый разработанный веб-сайт TTL.TJ на NextJS",
    "caption": "Наш новый разработанный веб-сайт TTL.TJ на NextJS",
    "duration": "0:37"
  },
  {
    "id": "media_8",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_8.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_8.webp",
    "title": "РАЗРАБАТЫВАЕММОБИЛЬНЫЕ ПРИЛОЖЕНИЯДЛЯ IOS И ANDROIDЧтобы вы-⬆️ ...",
    "caption": "РАЗРАБАТЫВАЕММОБИЛЬНЫЕ ПРИЛОЖЕНИЯДЛЯ IOS И ANDROIDЧтобы вы-⬆️ повысили продажи и лояльность клие",
    "duration": "0:05"
  },
  {
    "id": "media_9",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_9.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_9.webp",
    "title": "Развернем интернет-магазин с управлением товарами, фильтрами, ...",
    "caption": "Развернем интернет-магазин с управлением товарами, фильтрами, поиском, личным кабинетом и свяжем",
    "duration": "0:12"
  },
  {
    "id": "media_10",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_10.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_10.webp",
    "title": "Розыгрыш от Royal Baby #розыгрыш#дети#участие#таджикистан#куло...",
    "caption": "Розыгрыш от Royal Baby #розыгрыш#дети#участие#таджикистан#кулоб#хучанд#помир",
    "duration": "0:47"
  },
  {
    "id": "media_11",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_11.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_11.webp",
    "title": "СММ ПРОДВИЖЕНИЯ ВСЕМ✌️ 🔴ЦЕЛИ SMM продвижения-🔵 Повышение узнав...",
    "caption": "СММ ПРОДВИЖЕНИЯ ВСЕМ✌️ 🔴ЦЕЛИ SMM продвижения-🔵 Повышение узнаваемости бренда;🔵 Привлечение по",
    "duration": "0:09"
  },
  {
    "id": "media_12",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_12.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_12.webp",
    "title": "Салом, дӯстон! Бо камоли хушнудӣ ба маълумоти Шумо мерасонем...",
    "caption": "Салом, дӯстон! Бо камоли хушнудӣ ба маълумоти Шумо мерасонем, ки ширкати DushanbeSoft ҳамчун таҳ",
    "duration": "0:14"
  },
  {
    "id": "media_13",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_13.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_13.webp",
    "title": "Техподдержка сайта – одно из важнейших условий обеспечения ...",
    "caption": "Техподдержка сайта – одно из важнейших условий обеспечения его безопасности, а также его посещае",
    "duration": "0:12"
  },
  {
    "id": "media_14",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_14.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_14.webp",
    "title": "❤️Спасибо коллегам из @dushanbe_soft за неожиданный и сладкии...",
    "caption": "❤️Спасибо коллегам из @dushanbe_soft за неожиданный и сладкий подарок! 🎉Сайт работает на ура! Р",
    "duration": "0:26"
  },
  {
    "id": "media_15",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_15.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_15.webp",
    "title": "🌟 Привет, друзья! С гордостью представляем наш новый проект —...",
    "caption": "🌟 Привет, друзья! С гордостью представляем наш новый проект — RoyalBaBy + телеграм-бот! 🎉Для з",
    "duration": "0:49"
  },
  {
    "id": "media_16",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_16.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_16.webp",
    "title": "🌟 “Успешное сотрудничество Dushanbe-Soft и @lovely.tajikistan ...",
    "caption": "🌟 “Успешное сотрудничество Dushanbe-Soft и @lovely.tajikistan !“🌟Мы искренне рады поделиться н",
    "duration": "1:19"
  },
  {
    "id": "media_17",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_17.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_17.webp",
    "title": "📈 Автоматизация бизнеса- Увеличьте эффективность, освободите в...",
    "caption": "📈 Автоматизация бизнеса- Увеличьте эффективность, освободите время! 🚀🔧 Зачем автоматизировать",
    "duration": "0:08"
  },
  {
    "id": "media_18",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_18.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_18.webp",
    "title": "📩 Як паём — ҳазорон муштарӣ.ЗудСМС — рассылкаи оммавии СМС б...",
    "caption": "📩 Як паём — ҳазорон муштарӣ.ЗудСМС — рассылкаи оммавии СМС барои бизнес дар саросари Тоҷикистон",
    "duration": "0:56"
  },
  {
    "id": "media_19",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_19.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_19.webp",
    "title": "🔍📈 SEO оптимизация- ключ к успеху в интернете!Если ты ведешь б...",
    "caption": "🔍📈 SEO оптимизация- ключ к успеху в интернете!Если ты ведешь бизнес или просто хочешь продвину",
    "duration": "0:10"
  },
  {
    "id": "media_20",
    "type": "video",
    "src": "/content/DushanbeSoft/reel_20.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/reel_20.webp",
    "title": "🚀 Наша задача — разработать уникальные и функциональные платфо...",
    "caption": "🚀 Наша задача — разработать уникальные и функциональные платформы, которые полностью удовлетвор",
    "duration": "0:14"
  },
  {
    "id": "media_21",
    "type": "image",
    "src": "/content/DushanbeSoft/media_21.jpg",
    "thumb": "/content/DushanbeSoft/media_21.jpg",
    "title": "Муваффақияти нави дастаи Dushanbe-Soft! Мо барои расидан ба ҳа...",
    "caption": "Муваффақияти нави дастаи Dushanbe-Soft! Мо барои расидан ба ҳадафҳои аслии худ заҳматҳои шабонар",
    "duration": null
  },
  {
    "id": "media_22",
    "type": "image",
    "src": "/content/DushanbeSoft/media_22.jpg",
    "thumb": "/content/DushanbeSoft/media_22.jpg",
    "title": "Разработка корпоративного сайта — это практически первое, о ч...",
    "caption": "Разработка корпоративного сайта — это практически первое, о чем задумываются владельцы малого и",
    "duration": null
  },
  {
    "id": "media_23",
    "type": "image",
    "src": "/content/DushanbeSoft/media_23.jpg",
    "thumb": "/content/DushanbeSoft/media_23.jpg",
    "title": "🔔 Кабельное телевидение! ✅  Возможности оплаты через POS-терми...",
    "caption": "🔔 Кабельное телевидение! ✅  Возможности оплаты через POS-терминал ✅  Учёт базы абонентов ✅  Учё",
    "duration": null
  }
];

type L10n = { ru: string; en: string; tj: string };

/** Clean titles and labels shown on the site (captions keep the original post text). */
export const mediaMeta: Record<string, { title: L10n; tag: L10n }> = {
  media_14: {
    title: { ru: "Команда радио «Navo» в гостях у Dushanbe Soft", en: "Navo radio team visits Dushanbe Soft", tj: "Дастаи радиои «Navo» меҳмони Dushanbe Soft" },
    tag: { ru: "Отзыв клиента", en: "Client", tj: "Мизоҷ" },
  },
  media_12: {
    title: { ru: "Новый сайт Президента — president.tj", en: "New president.tj website", tj: "Сомонаи нави president.tj" },
    tag: { ru: "Кейс", en: "Case", tj: "Лоиҳа" },
  },
  media_15: {
    title: { ru: "Royal Baby: сайт и Telegram-бот", en: "Royal Baby: website and Telegram bot", tj: "Royal Baby: сомона ва Telegram-бот" },
    tag: { ru: "Кейс", en: "Case", tj: "Лоиҳа" },
  },
  media_18: {
    title: { ru: "ZudSMS — SMS-рассылка для бизнеса", en: "ZudSMS — bulk SMS for business", tj: "ZudSMS — фиристодани SMS барои тиҷорат" },
    tag: { ru: "Продукт", en: "Product", tj: "Маҳсулот" },
  },
  media_7: {
    title: { ru: "Новый сайт TTL.TJ на Next.js", en: "New TTL.TJ website on Next.js", tj: "Сомонаи нави TTL.TJ дар Next.js" },
    tag: { ru: "Кейс", en: "Case", tj: "Лоиҳа" },
  },
  media_1: {
    title: { ru: "Из жизни команды Dushanbe Soft", en: "Life at Dushanbe Soft", tj: "Аз ҳаёти дастаи Dushanbe Soft" },
    tag: { ru: "Команда", en: "Team", tj: "Даста" },
  },
  media_16: {
    title: { ru: "Сотрудничество с Lovely Tajikistan", en: "Partnership with Lovely Tajikistan", tj: "Ҳамкорӣ бо Lovely Tajikistan" },
    tag: { ru: "Кейс", en: "Case", tj: "Лоиҳа" },
  },
  media_3: {
    title: { ru: "Знакомьтесь: Dushanbe Soft", en: "Meet Dushanbe Soft", tj: "Шиносоӣ: Dushanbe Soft" },
    tag: { ru: "О нас", en: "About", tj: "Дар бораи мо" },
  },
  media_4: {
    title: { ru: "SMS-шлюз для OTP-кодов и 2FA", en: "SMS gateway for OTP and 2FA", tj: "SMS-шлюз барои OTP ва 2FA" },
    tag: { ru: "Продукт", en: "Product", tj: "Маҳсулот" },
  },
  media_20: {
    title: { ru: "Сайт под любую задачу", en: "A website for any goal", tj: "Сомона барои ҳар мақсад" },
    tag: { ru: "Услуги", en: "Services", tj: "Хизматрасонӣ" },
  },
  media_17: {
    title: { ru: "Автоматизация бизнеса", en: "Business automation", tj: "Автоматикунонии тиҷорат" },
    tag: { ru: "Услуги", en: "Services", tj: "Хизматрасонӣ" },
  },
  media_13: {
    title: { ru: "Техническая поддержка сайтов", en: "Website support", tj: "Дастгирии техникии сайтҳо" },
    tag: { ru: "Услуги", en: "Services", tj: "Хизматрасонӣ" },
  },
  media_9: {
    title: { ru: "Разработка интернет-магазина", en: "Online store development", tj: "Таҳияи мағозаи онлайн" },
    tag: { ru: "Услуги", en: "Services", tj: "Хизматрасонӣ" },
  },
  media_10: {
    title: { ru: "Розыгрыш Royal Baby", en: "Royal Baby giveaway", tj: "Бозии бурдбурди Royal Baby" },
    tag: { ru: "Кейс", en: "Case", tj: "Лоиҳа" },
  },
  media_19: {
    title: { ru: "SEO-оптимизация сайта", en: "Website SEO", tj: "SEO-и сомона" },
    tag: { ru: "Услуги", en: "Services", tj: "Хизматрасонӣ" },
  },
  media_8: {
    title: { ru: "Мобильные приложения для iOS и Android", en: "iOS and Android apps", tj: "Барномаҳои iOS ва Android" },
    tag: { ru: "Услуги", en: "Services", tj: "Хизматрасонӣ" },
  },
  media_11: {
    title: { ru: "SMM-продвижение", en: "SMM promotion", tj: "Пешбурди SMM" },
    tag: { ru: "Услуги", en: "Services", tj: "Хизматрасонӣ" },
  },
  media_6: {
    title: { ru: "Роль SMM для бизнеса", en: "Why SMM matters", tj: "Нақши SMM барои тиҷорат" },
    tag: { ru: "Полезное", en: "Insights", tj: "Муфид" },
  },
  media_2: {
    title: { ru: "Интересные факты о веб-разработке", en: "Web development facts", tj: "Далелҳои ҷолиб дар бораи веб" },
    tag: { ru: "Полезное", en: "Insights", tj: "Муфид" },
  },
};

export function mediaTitle(item: MediaItem, lang: string): string {
  const meta = mediaMeta[item.id];
  if (meta) return meta.title[contentLocale(lang)] ?? meta.title.ru;
  // Fallback: first sentence of the post without hashtags and emoji
  const clean = item.caption.replace(/#\S+/g, "").replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\uFE0F]/gu, "").trim();
  const first = clean.split(/(?<=[.!?])\s/)[0];
  return first.length > 70 ? first.slice(0, 67).trimEnd() + "…" : first;
}

export function mediaTag(item: MediaItem, lang: string): string | null {
  const meta = mediaMeta[item.id];
  return meta ? meta.tag[contentLocale(lang)] ?? meta.tag.ru : null;
}

/** Home page reel strip, in display order */
const featuredIds = ["media_14", "media_4", "media_15", "media_1", "media_12", "media_7"];

export const featuredMediaItems: MediaItem[] = featuredIds
  .map((id) => mediaGalleryItems.find((i) => i.id === id))
  .filter((i): i is MediaItem => Boolean(i));

// Media page: curated items first, then the rest; the 1-second stock clip is dropped.
const orderIds = Object.keys(mediaMeta);
export const orderedMediaItems: MediaItem[] = [
  ...orderIds.map((id) => mediaGalleryItems.find((i) => i.id === id)).filter((i): i is MediaItem => Boolean(i)),
  ...mediaGalleryItems.filter((i) => !orderIds.includes(i.id) && i.id !== "media_5"),
];

export function getMediaById(id: string): MediaItem | undefined {
  return mediaGalleryItems.find((item) => item.id === id);
}

export function getVideoItems(): MediaItem[] {
  return mediaGalleryItems.filter((item) => item.type === "video");
}

export function getRelatedMedia(currentId: string, limit = 4): MediaItem[] {
  return orderedMediaItems
    .filter((item) => item.id !== currentId && item.type === "video")
    .slice(0, limit);
}

export function formatDurationIso(duration?: string | null): string | undefined {
  if (!duration) return undefined;
  const parts = duration.split(":").map(Number);
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    const [min, sec] = parts;
    if (min > 0) return `PT${min}M${sec}S`;
    return `PT${sec}S`;
  }
  return undefined;
}

