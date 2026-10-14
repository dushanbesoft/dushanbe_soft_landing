export interface NewsSectionContent {
  heading: string;
  text: string;
  bulletPoints?: string[];
}

export interface NewsFullContent {
  lead: string;
  sections: NewsSectionContent[];
  techStack?: string[];
  caseSlug?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  tagKey: string;
  defaultTag: string;
  titleKey: string;
  defaultTitle: string;
  descKey: string;
  defaultDesc: string;
  fullContent: NewsFullContent;
}

export const newsList: NewsItem[] = [
  {
    id: "1",
    slug: "digital-tajikistan",
    image: "/images/projects/pic.webp",
    date: "24.08.2025",
    category: "gov",
    readTime: "4 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.1.tag",
    defaultTag: "Гос. проекты",
    titleKey: "news.items.1.title",
    defaultTitle: "Запуск проекта dt.tj (PIC)",
    descKey: "news.items.1.desc",
    defaultDesc: "Государственный портал цифровых услуг Таджикистана. Единая защищенная платформа доступа к электронным услугам для граждан и бизнеса.",
    fullContent: {
      lead: "Государственный портал цифровых услуг Таджикистана dt.tj (PIC) — масштабный национальный проект, призванный объединить ключевые электронные сервисы для граждан и предпринимателей страны в одном защищенном окне.",
      caseSlug: "digital-tajikistan",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Nginx", "Kubernetes"],
      sections: [
        {
          heading: "Цели и предпосылки создания единого портала",
          text: "В рамках цифровизации государственных услуг Республики Таджикистан возникла необходимость в создании масштабируемой, отказоустойчивой и безопасной платформы. Портал dt.tj предоставляет гражданам возможность получать справки, подавать заявления, оплачивать государственные пошлины и отслеживать статус обращений онлайн без необходимости посещения ведомств.",
          bulletPoints: [
            "Устранение бумажного документооборота и очередей",
            "Повышение прозрачности и скорости обработки запросов граждан",
            "Безопасная аутентификация через цифровую экосистему",
          ],
        },
        {
          heading: "Архитектура и стандарты безопасности",
          text: "При проектировании архитектуры команда Dushanbe Soft сделала акцент на микросервисном подходе и отказоустойчивости. Платформа изолирует персональные данные граждан, используя передовые стандарты шифрования ГОСТ и TLS, а также распределенное кэширование запросов.",
        },
        {
          heading: "Ключевые результаты запуска",
          text: "Система успешно прошла нагрузочное тестирование и выдерживает пиковые всплески посещаемости. Внедрение портала открыло новый этап доступности электронного правительства в Таджикистане.",
          bulletPoints: [
            "Единый каталог из десятков государственных услуг",
            "Интеграция с платежными системами и банками",
            "Полная адаптация интерфейса для мобильных устройств и экранов с поддержкой слабовидящих",
            "Аптайм платформы 99.98% в режиме реального времени",
          ],
        },
      ],
    },
  },
  {
    id: "2",
    slug: "mavji-somon",
    image: "/images/projects/mavjisomon.webp",
    date: "15.09.2025",
    category: "media",
    readTime: "3 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.2.tag",
    defaultTag: "Медиа & OTT",
    titleKey: "news.items.2.title",
    defaultTitle: "Стриминг-платформа Мавчи Сомон",
    descKey: "news.items.2.desc",
    defaultDesc: "Запуск современной OTT-платформы и стримингового сервиса для онлайн-просмотра фильмов, сериалов и телеканалов в высоком разрешении.",
    fullContent: {
      lead: "Запуск современной медиа-платформы и стримингового OTT-сервиса «Мавчи Сомон» открыл зрителям Таджикистана доступ к любимым телеканалам, сериалам и передачам в прямом эфире и записи на любых устройствах.",
      caseSlug: "mavji-somon",
      techStack: ["Next.js", "HLS Streaming", "Node.js", "Go", "MongoDB", "Redis", "CDN", "WebSockets"],
      sections: [
        {
          heading: "Медиа-трансформация вещания",
          text: "Проект объединил традиционное телевещание с передовыми возможностями интернет-стриминга. Зрители могут смотреть прямой эфир в FullHD качестве, перематывать программы назад благодаря функции Timeshift и просматривать архив прошедших передач за 7 дней.",
        },
        {
          heading: "Технологии доставки видео",
          text: "Для обеспечения бесперебойного воспроизведения даже при слабом интернет-соединении была внедрена технология адаптивного битрейта (ABR). Видеопоток мгновенно подстраивается под пропускную способность канала зрителя.",
          bulletPoints: [
            "Автоматическое масштабирование битрейта от 360p до 1080p",
            "Минимизация буферизации через распределенную сеть доставки (CDN)",
            "Поддержка всех браузеров, Smart TV и смартфонов",
          ],
        },
      ],
    },
  },
  {
    id: "3",
    slug: "sohktor",
    image: "/images/projects/project-sohktor.webp",
    date: "02.10.2025",
    category: "erp",
    readTime: "4 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.3.tag",
    defaultTag: "ERP & Автоматизация",
    titleKey: "news.items.3.title",
    defaultTitle: "Внедрение системы СХДО",
    descKey: "news.items.3.desc",
    defaultDesc: "Комплексная внутренняя ERP-система для оперативного управления, учета чрезвычайных ситуаций, ведения дел и электронного документооборота.",
    fullContent: {
      lead: "СХДО — специализированная закрытая ERP-платформа, разработанная для координации экстренных служб, учета происшествий и ускорения межведомственного взаимодействия.",
      caseSlug: "sohktor",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "GIS Mapping", "Docker"],
      sections: [
        {
          heading: "Автоматизация оперативной службы",
          text: "Система заменила разрозненные журналы и бумажные карточки единым цифровым пространством. Операторы могут регистрировать входящие сообщения, автоматически определять геолокацию на карте и направлять ответственные бригады за секунды.",
          bulletPoints: [
            "Интерактивная карта происшествий в реальном времени",
            "Автоматическое назначение и трекинг групп реагирования",
            "Защищенный архив инцидентов и мгновенная генерация аналитических отчетов",
          ],
        },
      ],
    },
  },
  {
    id: "4",
    slug: "zudsms",
    image: "/images/projects/zudsms.webp",
    date: "18.11.2025",
    category: "saas",
    readTime: "3 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.4.tag",
    defaultTag: "SaaS & Финтех",
    titleKey: "news.items.4.title",
    defaultTitle: "ZudSMS — Платформа SMS-рассылок",
    descKey: "news.items.4.desc",
    defaultDesc: "Высоконагруженный облачный сервис массовых и транзакционных SMS-рассылок с мгновенной доставкой на номера всех операторов Таджикистана.",
    fullContent: {
      lead: "ZudSMS — высокопроизводительный облачный шлюз для бизнеса и финансовых организаций, гарантирующий доставку OTP-кодов, 2FA и рекламных сообщений со скоростью до 1000 SMS в секунду.",
      caseSlug: "zudsms",
      techStack: ["Go", "NestJS", "PostgreSQL", "Redis", "SMPP Protocol", "RabbitMQ", "Next.js"],
      sections: [
        {
          heading: "Надежность и прямые подключения",
          text: "Платформа подключена напрямую к инфраструктуре операторов сотовой связи Таджикистана по протоколу SMPP v3.4, исключая посредников и обеспечивая максимальный процент доставки (DLR).",
          bulletPoints: [
            "Доставка OTP-паролей менее чем за 3 секунды",
            "Удобный REST API и готовые SDK для интеграции с CRM и мобильными банками",
            "Детальная статистика, аналитика статусов и баланс в реальном времени",
          ],
        },
      ],
    },
  },
  {
    id: "5",
    slug: "livechat",
    image: "/images/projects/livechat.webp",
    date: "05.12.2025",
    category: "saas",
    readTime: "3 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.5.tag",
    defaultTag: "SaaS & Чат",
    titleKey: "news.items.5.title",
    defaultTitle: "LiveChat.TJ — Онлайн-консультант для бизнеса",
    descKey: "news.items.5.desc",
    defaultDesc: "Омниканальный виджет онлайн-чата и система коммуникаций с клиентами для сайтов с веб-сокетами и быстрыми ответами.",
    fullContent: {
      lead: "LiveChat.TJ помогает компаниям удерживать посетителей на сайте и мгновенно отвечать на вопросы, увеличивая конверсию продаж до 30%.",
      caseSlug: "livechat",
      techStack: ["WebSockets", "Node.js", "Redis", "TypeScript", "React", "PostgreSQL"],
      sections: [
        {
          heading: "Возможности для отделов продаж и поддержки",
          text: "Легкий встраиваемый виджет загружается за доли секунды и работает безупречно на любых устройствах. Операторы получают единое окно для переписки с клиентами, встроенные шаблоны ответов и передачу файлов.",
        },
      ],
    },
  },
  {
    id: "6",
    slug: "royal-baby",
    image: "/images/projects/royalbaby-banner.png",
    date: "22.12.2025",
    category: "retail",
    readTime: "3 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.6.tag",
    defaultTag: "E-Commerce",
    titleKey: "news.items.6.title",
    defaultTitle: "Royal Baby — Автоматизация сети и Telegram-бот",
    descKey: "news.items.6.desc",
    defaultDesc: "Запуск онлайн-витрины, интеграция складского учета и Telegram-бота для оформления заказов и программы лояльности.",
    fullContent: {
      lead: "Для сети детских магазинов Royal Baby была разработана омниканальная система продаж: онлайн-каталог товаров с фильтрацией, интеграция со складским учетом и умный Telegram-бот.",
      caseSlug: "royalbaby",
      techStack: ["Next.js", "Telegram Bot API", "Node.js", "PostgreSQL", "1C ERP"],
      sections: [
        {
          heading: "Удобные покупки в Telegram и на сайте",
          text: "Покупатели могут просматривать новинки, оформлять заказы с доставкой на дом и копить бонусы программы лояльности как через веб-сайт, так и прямо в любимом мессенджере.",
        },
      ],
    },
  },
  {
    id: "7",
    slug: "rushdi-kuhiston",
    image: "/images/projects/rushdikuhiston-banner.png",
    date: "14.01.2026",
    category: "gov",
    readTime: "4 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.7.tag",
    defaultTag: "Социальные проекты",
    titleKey: "news.items.7.title",
    defaultTitle: "Портал фонда «Рушди Куҳистон»",
    descKey: "news.items.7.desc",
    defaultDesc: "Платформа для поддержки инициатив и грантовых программ развития горных районов Таджикистана с онлайн-подачей заявок.",
    fullContent: {
      lead: "Платформа фонда «Рушди Куҳистон» создана для прозрачного финансирования социальных, экологических и образовательных инициатив в горных регионах страны.",
      caseSlug: "rushdikuhiston",
      techStack: ["Next.js", "TypeScript", "Tailored CMS", "PostgreSQL", "Docker"],
      sections: [
        {
          heading: "Онлайн-подача и отбор проектов",
          text: "Разработан личный кабинет для заявителей, система проверки заявок экспертной комиссией и публичный реестр поддержанных проектов с интерактивными отчетами.",
        },
      ],
    },
  },
  {
    id: "8",
    slug: "somontv",
    image: "/images/projects/somontv.webp",
    date: "03.02.2026",
    category: "media",
    readTime: "3 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.8.tag",
    defaultTag: "Медиа & OTT",
    titleKey: "news.items.8.title",
    defaultTitle: "Медиа-портал Сомон ТВ",
    descKey: "news.items.8.desc",
    defaultDesc: "Интерактивный портал телерадиовещания с прямым эфиром, архивом передач и оптимизацией под любые экраны.",
    fullContent: {
      lead: "Официальный цифровой портал телерадиовещания «Сомон ТВ» предоставил зрителям круглосуточный доступ к прямому эфиру и архивам лучших авторских программ.",
      caseSlug: "somontv",
      techStack: ["Next.js", "Video.js", "Node.js", "Redis", "Nginx RTMP"],
      sections: [
        {
          heading: "Интерактивное ТВ нового поколения",
          text: "Портал включает интерактивную телепрограмму с напоминаниями, быстрый поиск сюжетов по ключевым словам и встроенный аудиоплеер для прослушивания радио.",
        },
      ],
    },
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsList.find((item) => item.slug === slug);
}

export function getRelatedNews(currentSlug: string, count: number = 3): NewsItem[] {
  return newsList.filter((item) => item.slug !== currentSlug).slice(0, count);
}
