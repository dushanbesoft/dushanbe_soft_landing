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
