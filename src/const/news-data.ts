export interface NewsItem {
  id: string;
  slug: string;
  image: string;
  date: string;
  category: string;
  tagKey: string;
  defaultTag: string;
  titleKey: string;
  defaultTitle: string;
  descKey: string;
  defaultDesc: string;
}

export const newsList: NewsItem[] = [
  {
    id: "1",
    slug: "digital-tajikistan",
    image: "/images/projects/pic.webp",
    date: "24.08.2025",
    category: "gov",
    tagKey: "news.items.1.tag",
    defaultTag: "Гос. проекты",
    titleKey: "news.items.1.title",
    defaultTitle: "Запуск проекта dt.tj (PIC)",
    descKey: "news.items.1.desc",
    defaultDesc: "Государственный портал цифровых услуг Таджикистана. Единая защищенная платформа доступа к электронным услугам для граждан и бизнеса.",
  },
  {
    id: "2",
    slug: "mavji-somon",
    image: "/images/projects/mavjisomon.webp",
    date: "15.09.2025",
    category: "media",
    tagKey: "news.items.2.tag",
    defaultTag: "Медиа & OTT",
    titleKey: "news.items.2.title",
    defaultTitle: "Стриминг-платформа Мавчи Сомон",
    descKey: "news.items.2.desc",
    defaultDesc: "Запуск современной OTT-платформы и стримингового сервиса для онлайн-просмотра фильмов, сериалов и телеканалов в высоком разрешении.",
  },
  {
    id: "3",
    slug: "sohktor",
    image: "/images/projects/project-sohktor.webp",
    date: "02.10.2025",
    category: "erp",
    tagKey: "news.items.3.tag",
    defaultTag: "ERP & Автоматизация",
    titleKey: "news.items.3.title",
    defaultTitle: "Внедрение системы СХДО",
    descKey: "news.items.3.desc",
    defaultDesc: "Комплексная внутренняя ERP-система для оперативного управления, учета чрезвычайных ситуаций, ведения дел и электронного документооборота.",
  },
  {
    id: "4",
    slug: "zudsms",
    image: "/images/projects/zudsms.webp",
    date: "18.11.2025",
    category: "saas",
    tagKey: "news.items.4.tag",
    defaultTag: "SaaS & Финтех",
    titleKey: "news.items.4.title",
    defaultTitle: "ZudSMS — Платформа SMS-рассылок",
    descKey: "news.items.4.desc",
    defaultDesc: "Высоконагруженный облачный сервис массовых и транзакционных SMS-рассылок с мгновенной доставкой на номера всех операторов Таджикистана.",
  },
  {
    id: "5",
    slug: "livechat",
    image: "/images/projects/livechat.webp",
    date: "05.12.2025",
    category: "saas",
    tagKey: "news.items.5.tag",
    defaultTag: "SaaS & Чат",
    titleKey: "news.items.5.title",
    defaultTitle: "LiveChat.TJ — Онлайн-консультант для бизнеса",
    descKey: "news.items.5.desc",
    defaultDesc: "Омниканальный виджет онлайн-чата и система коммуникаций с клиентами для сайтов с веб-сокетами и быстрыми ответами.",
  },
  {
    id: "6",
    slug: "royal-baby",
    image: "/images/projects/royalbaby-banner.png",
    date: "22.12.2025",
    category: "retail",
    tagKey: "news.items.6.tag",
    defaultTag: "E-Commerce",
    titleKey: "news.items.6.title",
    defaultTitle: "Royal Baby — Автоматизация сети и Telegram-бот",
    descKey: "news.items.6.desc",
    defaultDesc: "Запуск онлайн-витрины, интеграция складского учета и Telegram-бота для оформления заказов и программы лояльности.",
  },
  {
    id: "7",
    slug: "rushdi-kuhiston",
    image: "/images/projects/rushdikuhiston-banner.png",
    date: "14.01.2026",
    category: "gov",
    tagKey: "news.items.7.tag",
    defaultTag: "Социальные проекты",
    titleKey: "news.items.7.title",
    defaultTitle: "Портал фонда «Рушди Куҳистон»",
    descKey: "news.items.7.desc",
    defaultDesc: "Платформа для поддержки инициатив и грантовых программ развития горных районов Таджикистана с онлайн-подачей заявок.",
  },
  {
    id: "8",
    slug: "somontv",
    image: "/images/projects/somontv.webp",
    date: "03.02.2026",
    category: "media",
    tagKey: "news.items.8.tag",
    defaultTag: "Медиа & OTT",
    titleKey: "news.items.8.title",
    defaultTitle: "Медиа-портал Сомон ТВ",
    descKey: "news.items.8.desc",
    defaultDesc: "Интерактивный портал телерадиовещания с прямым эфиром, архивом передач и оптимизацией под любые экраны.",
  },
];
