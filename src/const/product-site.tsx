export interface ProductSiteItem {
  imageSrc: string;
  /** Опциональное отдельное фото под широкий баннер страницы кейса. */
  bannerSrc?: string;
  /** Как вписывать баннер в hero: "cover" (по умолчанию) для фото, "contain" для логотипов. */
  bannerFit?: "cover" | "contain";
  year: string;
  tags: string[];
  slug: string;
  /** Опциональная галерея скриншотов кейса (пути в /public). */
  gallery?: string[];
  projectComponents?: {
    tabName: string;
    items: {
      title: string;
      imageSrc: string;
      shortInfo: string;
      fullInfo: string;
    }[];
  }[];
}

export const ProductSite: ProductSiteItem[] = [
  {
    imageSrc: "/images/projects/president/banner.svg",
    bannerSrc: "/images/projects/president/banner.svg",
    year: "2024",
    tags: ["React", "Redux", "ASP.NET Core", "MS SQL", "REST API"],
    slug: "president",
    gallery: [
      "/images/projects/president/banner.png",
      "/images/projects/president/gallery-1.png",
      "/images/projects/president/gallery-2.png",
    ],
  },
  {
    imageSrc: "/images/projects/sohktor/banner.svg",
    bannerSrc: "/images/projects/sohktor/banner.svg",
    bannerFit: "contain",
    year: "2024",
    tags: ["ASP.NET Core", "JavaScript", "MS SQL", "Bootstrap", "REST API"],
    slug: "sohktor",
    gallery: [
      "/images/projects/sohktor/gallery-1.png",
      "/images/projects/sohktor/gallery-2.png",
      "/images/projects/sohktor/gallery-3.png",
      "/images/projects/sohktor/gallery-5.png",
      "/images/projects/sohktor/gallery-6.png",
      "/images/projects/sohktor/gallery-7.png",
    ],
  },
  {
    imageSrc: "/images/projects/pic.webp",
    year: "2024",
    tags: ["ASP.NET Core", "React", "PostgreSQL", "Docker", "REST API"],
    slug: "digital-tajikistan",
    gallery: [
      "/images/projects/pic/gallery-1.png",
      "/images/projects/pic/gallery-2.png",
      "/images/projects/pic/gallery-3.png",
      "/images/projects/pic/gallery-4.png",
      "/images/projects/pic/gallery-5.png",
    ],
  },
  {
    imageSrc: "/images/projects/mavjisomon.webp",
    year: "2024",
    tags: ["Node.js", "JavaScript", "MS SQL", "Bootstrap", "REST API"],
    slug: "mavji-somon",
    gallery: [
      "/images/projects/mavjisomon/gallery-1.png",
      "/images/projects/mavjisomon/gallery-2.png",
      "/images/projects/mavjisomon/gallery-3.png",
      "/images/projects/mavjisomon/gallery-4.png",
      "/images/projects/mavjisomon/gallery-5.png",
      "/images/projects/mavjisomon/gallery-6.png",
    ],
    projectComponents: [
      {
        tabName: "Админ-панель",
        items: [
          {
            title: "Управление пользователями",
            imageSrc: "/images/projects/mavjisomon/gallery-1.png",
            shortInfo: "CRM и биллинг подписчиков",
            fullInfo: "Интегрированная CRM-система для управления базой пользователей. Позволяет отслеживать активность, управлять тарифными планами, обрабатывать платежи и анализировать статистику просмотров в реальном времени."
          },
          {
            title: "Управление контентом (CMS)",
            imageSrc: "/images/projects/mavjisomon/gallery-2.png",
            shortInfo: "Организация базы в 130 000+ фильмов",
            fullInfo: "Мощный модуль управления видеоконтентом. Включает инструменты для пакетной загрузки метаданных, распределения по жанрам, загрузки постеров и настройки SEO для поисковой оптимизации."
          },
          {
            title: "Управление Live TV",
            imageSrc: "/images/projects/mavjisomon/gallery-1.png",
            shortInfo: "Мониторинг 2500+ телеканалов",
            fullInfo: "Инструментарий для мониторинга стабильности потоков IPTV, автоматической загрузки телепрограммы (EPG) и управления архивом передач (Catch-up) для отложенного просмотра."
          }
        ]
      },
      {
        tabName: "Мобильные приложения",
        items: [
          {
            title: "Адаптивный видеоплеер",
            imageSrc: "/images/projects/mavjisomon/gallery-3.png",
            shortInfo: "Нативный плеер с выбором качества",
            fullInfo: "Высокопроизводительный нативный плеер на Android и iOS с поддержкой HLS/DASH. Автоматически подстраивает битрейт под скорость интернета, позволяет переключать звуковые дорожки и субтитры без прерывания видео."
          },
          {
            title: "Оффлайн просмотр",
            imageSrc: "/images/projects/mavjisomon/gallery-4.png",
            shortInfo: "Загрузка контента в память",
            fullInfo: "Функция безопасного кэширования фильмов и сериалов для просмотра в поездках или при отсутствии интернета. Загруженный контент зашифрован и доступен только внутри приложения."
          },
          {
            title: "Интеграция с устройствами",
            imageSrc: "/images/projects/mavjisomon/gallery-3.png",
            shortInfo: "Chromecast и AirPlay",
            fullInfo: "Бесшовная передача видеопотока с мобильного устройства на телевизор в один клик благодаря встроенной поддержке технологий Google Cast и Apple AirPlay."
          }
        ]
      },
      {
        tabName: "Smart TV",
        items: [
          {
            title: "ТВ-Интерфейс (10-foot UI)",
            imageSrc: "/images/projects/mavjisomon/gallery-5.png",
            shortInfo: "Управление пультом ДУ",
            fullInfo: "Полностью переработанный пользовательский интерфейс, адаптированный под большие экраны и управление с помощью крестовины пульта (D-pad). Крупные постеры, читабельные шрифты и плавная анимация фокуса."
          },
          {
            title: "Синхронизация прогресса",
            imageSrc: "/images/projects/mavjisomon/gallery-6.png",
            shortInfo: "Единый профиль на всех устройствах",
            fullInfo: "Система сохраняет таймкод остановки видео на сервере, позволяя начать просмотр фильма на смартфоне по дороге домой, и продолжить точно с того же места на телевизоре."
          }
        ]
      }
    ]
  },
  {
    imageSrc: "/images/projects/livechat.webp",
    year: "2024",
    tags: ["ASP.NET Core", "JavaScript", "MS SQL", "Bootstrap", "WebSocket"],
    slug: "livechat-tj",
    gallery: [
      "/images/projects/livechat/gallery-1.png",
      "/images/projects/livechat/gallery-2.png",
      "/images/projects/livechat/gallery-3.png",
      "/images/projects/livechat/gallery-4.png",
    ],
  },
  {
    imageSrc: "/images/projects/ttl.webp",
    year: "2024",
    tags: [
      "Node.js",
      "ASP.NET Core",
      "JavaScript",
      "MS SQL",
      "Bootstrap",
      "REST API",
    ],
    slug: "telecomm",
    gallery: [
      "/images/projects/ttl/gallery-1.png",
      "/images/projects/ttl/gallery-2.png",
      "/images/projects/ttl/gallery-3.png",
      "/images/projects/ttl/gallery-4.png",
      "/images/projects/ttl/gallery-5.png",
    ]
  },
  {
    imageSrc: "/images/projects/navo.webp",
    year: "2024",
    tags: ["ASP.NET Core", "React", "PostgreSQL", "Flutter", "Nginx"],
    slug: "navo",
  },
  {
    imageSrc: "/images/projects/somontv.webp",
    year: "2024",
    tags: ["ASP.NET Core", "React", "PostgreSQL", "Flutter", "Nginx"],
    slug: "somon-tv",
    gallery: [
      "/images/projects/somontv/gallery-1.png",
      "/images/projects/somontv/gallery-2.png",
      "/images/projects/somontv/gallery-3.png",
      "/images/projects/somontv/gallery-4.png",

     ]
  },
  {
    imageSrc: "/images/projects/zudsms.webp",
    year: "2024",
    tags: ["Node.js", "JavaScript", "MS SQL", "HTML5 / CSS3", "REST API"],
    slug: "zudsms",
    gallery: [
      "/images/projects/zudSMS/gallery-1.png",
      "/images/projects/zudSMS/gallery-2.png",
      "/images/projects/zudSMS/gallery-3.png",
      "/images/projects/zudSMS/gallery-4.png",
      "/images/projects/zudSMS/gallery-5.png",
    ]
  },
  {
    imageSrc: "/images/projects/sunduk.webp",
    year: "2020",
    tags: [
      "PHP-Framework Kohana",
      "JavaScript",
      "HTML5",
      "CSS3",
      "JQuery",
      "Underscore.js",
      "Сервер БД MySQL",
    ],
    slug: "sunduk-tv",
    gallery: [
      "/images/projects/sandukTV/gallery-1.png",
      "/images/projects/sandukTV/gallery-2.png",
      "/images/projects/sandukTV/gallery-3.png",
      "/images/projects/sandukTV/gallery-4.png",
      "/images/projects/sandukTV/gallery-5.png",
    ]
  },
  {
    imageSrc: "/images/projects/onlinepay.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MS SQL",
      "HTML5 / CSS3",
      "REST API",
    ],
    slug: "onlinepay",
    gallery: [
      "/images/projects/onlinepay/gallery-1.png",
      "/images/projects/onlinepay/gallery-2.png",
      "/images/projects/onlinepay/gallery-3.png",
      "/images/projects/onlinepay/gallery-4.png",

    ]
  },
  {
    imageSrc: "/images/projects/zenith.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MS SQL",
      "HTML5 / CSS3",
      "REST API",
    ],
    slug: "zenith-valuation",
  },
  {
    imageSrc: "/images/projects/itrans.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MS SQL",
      "HTML5 / CSS3",
      "REST API",
    ],
    slug: "imron-nakliet",
  },
];
