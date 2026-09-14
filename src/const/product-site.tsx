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
    imageSrc: "/images/projects/president/banner-president-strip.webp",
    bannerSrc: "/images/projects/president/banner-president-strip.webp",
    year: "2024",
    tags: ["React", "Redux", "ASP.NET Core", "MS SQL", "REST API"],
    slug: "president",
    gallery: [
      "/images/projects/president/gallery-1.webp",
      "/images/projects/president/gallery-2.webp",
      "/images/projects/president/gallery-3.webp",
      "/images/projects/president/gallery-4.webp",
      "/images/projects/president/gallery-5.webp",
      "/images/projects/president/gallery-6.webp",
      "/images/projects/president/gallery-7.webp",
      "/images/projects/president/gallery-8.webp",
    ]
  },
  {
    imageSrc: "/images/projects/sohktor/banner-schdo.webp",
    bannerSrc: "/images/projects/sohktor/banner-schdo.webp",
    bannerFit: "contain",
    year: "2024",
    tags: ["ASP.NET Core", "JavaScript", "MS SQL", "Bootstrap", "REST API"],
    slug: "sohktor",
    gallery: [
      "/images/projects/sohktor/gallery-1.webp",
    ]
  },
  {
    imageSrc: "/images/projects/pic.webp",
    year: "2024",
    tags: ["ASP.NET Core", "React", "PostgreSQL", "Docker", "REST API"],
    slug: "digital-tajikistan"
  },
  {
    imageSrc: "/images/projects/mavjisomon.webp",
    year: "2024",
    tags: ["Node.js", "JavaScript", "MS SQL", "Bootstrap", "REST API"],
    slug: "mavji-somon"
  },
  {
    imageSrc: "/images/projects/livechat.webp",
    year: "2024",
    tags: ["ASP.NET Core", "JavaScript", "MS SQL", "Bootstrap", "WebSocket"],
    slug: "livechat-tj"
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
    slug: "telecomm"
  },
  {
    imageSrc: "/images/projects/navo.webp",
    year: "2024",
    tags: ["ASP.NET Core", "React", "PostgreSQL", "Flutter", "Nginx"],
    slug: "navo"
  },
  {
    imageSrc: "/images/projects/somontv.webp",
    year: "2024",
    tags: ["ASP.NET Core", "React", "PostgreSQL", "Flutter", "Nginx"],
    slug: "somon-tv"
  },
  {
    imageSrc: "/images/projects/zudsms.webp",
    year: "2024",
    tags: ["Node.js", "JavaScript", "MS SQL", "HTML5 / CSS3", "REST API"],
    slug: "zudsms"
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
    slug: "sunduk-tv"
  },
  {
    imageSrc: "/images/projects/onlinepay.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MS SQL",
      "HTML5 / CSS3",
      "REST API"
    ],
    slug: "onlinepay"
  },
  {
    imageSrc: "/images/projects/zenith.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MS SQL",
      "HTML5 / CSS3",
      "REST API"
    ],
    slug: "zenith-valuation"
  },
  {
    imageSrc: "/images/projects/itrans.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MS SQL",
      "HTML5 / CSS3",
      "REST API"
    ],
    slug: "imron-nakliet"
  }
];
