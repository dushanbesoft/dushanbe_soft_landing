import { contentLocale } from "../utils/locales";

export type ServiceLang = "ru" | "en" | "tj";

export interface ServiceSection {
  heading: string;
  text: string;
  bullets?: string[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  /** Short name for breadcrumbs, cards and links */
  name: string;
  /** H1 — contains the main search query */
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  sections: ServiceSection[];
  faq: ServiceFaq[];
}

export interface ServiceItem {
  slug: string;
  icon: string;
  /** Slugs from ProductSite shown as proof on the service page */
  relatedCases: string[];
  content: Record<ServiceLang, ServiceContent>;
}

export const servicesList: ServiceItem[] = [
  {
    slug: "web-development",
    icon: "/icons/web.svg",
    relatedCases: ["president", "digital-tajikistan", "telecomm", "itrunstj", "zenith-valuation"],
    content: {
      ru: {
        name: "Создание сайтов",
        title: "Создание и разработка сайтов в Душанбе",
        metaTitle: "Создание сайтов в Душанбе — разработка сайтов под ключ в Таджикистане",
        metaDescription:
          "Разработка корпоративных сайтов, интернет-магазинов, порталов и веб-приложений под ключ в Душанбе. Адаптивный дизайн, SEO-оптимизация, поддержка. Dushanbe Soft — с 2017 года.",
        lead:
          "Dushanbe Soft создаёт сайты под ключ для бизнеса и государственных организаций Таджикистана с 2017 года: от корпоративного сайта-визитки до высоконагруженных порталов, таких как официальный сайт Президента Республики Таджикистан и портал Digital Tajikistan.",
        sections: [
          {
            heading: "Какие сайты мы разрабатываем",
            text:
              "Подбираем формат под задачу бизнеса, а не продаём шаблон. Каждый проект проектируется с нуля, с учётом целевой аудитории, языков и дальнейшего масштабирования.",
            bullets: [
              "Корпоративные сайты и сайты-визитки компаний",
              "Интернет-магазины с каталогом, корзиной, онлайн-оплатой и личным кабинетом",
              "Государственные и информационные порталы с многоязычностью (таджикский, русский, английский)",
              "Веб-приложения, личные кабинеты и SaaS-платформы",
              "Промо-сайты и лендинги для рекламных кампаний",
              "OTT- и медиа-платформы для онлайн-видео и радио",
            ],
          },
          {
            heading: "Что входит в разработку сайта под ключ",
            text:
              "Вы получаете готовый к работе сайт, а не набор страниц. Мы берём на себя все этапы — от аналитики до запуска и сопровождения.",
            bullets: [
              "Аналитика, структура сайта и техническое задание",
              "Уникальный UI/UX-дизайн и адаптивная вёрстка под смартфоны",
              "Удобная панель управления (CMS) для самостоятельного обновления контента",
              "Базовая SEO-оптимизация: скорость загрузки, мета-теги, микроразметка, sitemap",
              "Интеграция с платёжными системами, CRM, SMS-рассылкой и онлайн-чатом",
              "Хостинг, домен, SSL-сертификат и техническая поддержка после запуска",
            ],
          },
          {
            heading: "Технологии",
            text:
              "Используем проверенный современный стек: Next.js и React для быстрого фронтенда, Laravel и Node.js для бэкенда, PostgreSQL и MySQL для баз данных, Docker и Nginx для надёжного развёртывания. Сайты на Next.js загружаются быстро и хорошо индексируются поисковыми системами Google и Яндекс.",
          },
          {
            heading: "Сроки разработки",
            text:
              "Аналитика и проектирование занимают 1–2 недели, дизайн — 2–3 недели, разработка — от 1 месяца, тестирование — 1–2 недели. Точный срок и стоимость рассчитываем после бесплатной консультации и брифа.",
          },
        ],
        faq: [
          {
            q: "Сколько стоит создание сайта в Душанбе?",
            a: "Стоимость зависит от типа сайта, количества страниц, дизайна и интеграций. Сайт-визитка обходится дешевле интернет-магазина или портала с личным кабинетом. Оставьте заявку — мы бесплатно оценим проект и подготовим коммерческое предложение.",
          },
          {
            q: "Сколько времени занимает разработка сайта?",
            a: "Небольшой корпоративный сайт можно запустить за несколько недель. Крупные порталы и интернет-магазины разрабатываются от 2 месяцев. Сроки фиксируем в договоре.",
          },
          {
            q: "Сможем ли мы сами редактировать сайт?",
            a: "Да. Каждый сайт получает удобную панель управления, где можно менять тексты, новости, товары и изображения без программиста. Мы проводим обучение сотрудников.",
          },
          {
            q: "Делаете ли вы сайты на таджикском, русском и английском языках?",
            a: "Да, многоязычность — наша сильная сторона. Сайты государственных организаций и компаний, которые мы разработали, работают на нескольких языках с корректной SEO-настройкой для каждого.",
          },
          {
            q: "Будет ли сайт продвигаться в Google и Яндекс?",
            a: "Мы закладываем техническую SEO-оптимизацию на этапе разработки: высокая скорость, адаптивность, микроразметка, карта сайта и мета-теги. Это фундамент для выхода в топ поисковой выдачи.",
          },
        ],
      },
      en: {
        name: "Website Development",
        title: "Website Development in Dushanbe, Tajikistan",
        metaTitle: "Website Development in Dushanbe — Turnkey Web Development in Tajikistan",
        metaDescription:
          "Turnkey corporate websites, online stores, portals and web applications in Dushanbe, Tajikistan. Responsive design, SEO, support. Dushanbe Soft — since 2017.",
        lead:
          "Since 2017 Dushanbe Soft has been building turnkey websites for businesses and government organizations in Tajikistan — from corporate websites to high-load portals such as the official website of the President of the Republic of Tajikistan and the Digital Tajikistan portal.",
        sections: [
          {
            heading: "Websites we build",
            text:
              "We choose the format that fits your business goal instead of selling a template. Every project is designed from scratch with your audience, languages and future growth in mind.",
            bullets: [
              "Corporate and business card websites",
              "Online stores with catalog, cart, online payments and customer accounts",
              "Government and information portals in Tajik, Russian and English",
              "Web applications, customer portals and SaaS platforms",
              "Promo websites and landing pages for campaigns",
              "OTT and media platforms for online video and radio",
            ],
          },
          {
            heading: "What a turnkey website includes",
            text: "You get a production-ready website, not just a set of pages. We cover every stage from analysis to launch and support.",
            bullets: [
              "Analysis, site structure and technical specification",
              "Custom UI/UX design and mobile-first responsive layout",
              "An easy admin panel (CMS) to update content yourself",
              "Technical SEO: page speed, meta tags, structured data, sitemap",
              "Integrations with payment systems, CRM, SMS and live chat",
              "Hosting, domain, SSL certificate and post-launch support",
            ],
          },
          {
            heading: "Technology",
            text:
              "We use a proven modern stack: Next.js and React for fast front-ends, Laravel and Node.js for back-ends, PostgreSQL and MySQL databases, and Docker with Nginx for reliable deployment. Next.js websites load fast and are well indexed by Google and Yandex.",
          },
          {
            heading: "Timeline",
            text:
              "Analysis and planning take 1–2 weeks, design 2–3 weeks, development from 1 month, testing 1–2 weeks. We calculate the exact timeline and price after a free consultation and brief.",
          },
        ],
        faq: [
          {
            q: "How much does a website cost in Dushanbe?",
            a: "The price depends on the type of website, number of pages, design and integrations. A business card website costs less than an online store or a portal with user accounts. Send us a request and we will estimate your project for free.",
          },
          {
            q: "How long does website development take?",
            a: "A small corporate website can launch in a few weeks. Large portals and online stores take 2 months or more. Deadlines are fixed in the contract.",
          },
          {
            q: "Can we edit the website ourselves?",
            a: "Yes. Every website comes with an admin panel to update texts, news, products and images without a developer. We also train your team.",
          },
          {
            q: "Do you build websites in Tajik, Russian and English?",
            a: "Yes, multilingual websites are our strength, with correct SEO settings for every language version.",
          },
        ],
      },
      tj: {
        name: "Сохтани сайтҳо",
        title: "Сохтан ва таҳияи сайтҳо дар Душанбе",
        metaTitle: "Сохтани сайтҳо дар Душанбе — таҳияи сайт барои тиҷорат дар Тоҷикистон",
        metaDescription:
          "Таҳияи сайтҳои корпоративӣ, мағозаҳои онлайн, порталҳо ва барномаҳои веб дар Душанбе. Дизайни мутобиқ, SEO, дастгирӣ. Dushanbe Soft — аз соли 2017.",
        lead:
          "Dushanbe Soft аз соли 2017 барои ширкатҳо ва ташкилотҳои давлатии Тоҷикистон сайтҳоро пурра — аз ғоя то оғоз — месозад: аз сайти корпоративӣ то порталҳои калон, ба монанди сомонаи расмии Президенти Ҷумҳурии Тоҷикистон ва портали Digital Tajikistan.",
        sections: [
          {
            heading: "Кадом сайтҳоро таҳия мекунем",
            text:
              "Мо формати сайтро мувофиқи мақсади тиҷорати шумо интихоб мекунем, на шаблони тайёр. Ҳар лоиҳа аз сифр бо назардошти аудитория, забонҳо ва рушди минбаъда тарҳрезӣ мешавад.",
            bullets: [
              "Сайтҳои корпоративӣ ва сайтҳои визитка",
              "Мағозаҳои онлайн бо каталог, сабад, пардохти онлайн ва кабинети шахсӣ",
              "Порталҳои давлатӣ ва иттилоотӣ бо забонҳои тоҷикӣ, русӣ ва англисӣ",
              "Барномаҳои веб, кабинетҳои шахсӣ ва платформаҳои SaaS",
              "Сайтҳои промо ва лендингҳо барои маъракаҳои таблиғотӣ",
            ],
          },
          {
            heading: "Ба сохтани сайт чӣ дохил мешавад",
            text: "Шумо сайти тайёр ба кор мегиред. Мо ҳамаи марҳилаҳоро аз таҳлил то оғоз ва дастгирӣ ба уҳда мегирем.",
            bullets: [
              "Таҳлил, сохтори сайт ва супориши техникӣ",
              "Дизайни беназири UI/UX ва мутобиқ ба смартфонҳо",
              "Панели идоракунӣ (CMS) барои навсозии мустақилонаи мундариҷа",
              "SEO-и техникӣ: суръат, мета-тегҳо, нишонагузории сохторӣ (Schema.org), sitemap",
              "Ҳамгироӣ бо системаҳои пардохт, CRM, SMS ва чати онлайн",
              "Хостинг, домен, сертификати SSL ва дастгирии техникӣ",
            ],
          },
          {
            heading: "Технологияҳо",
            text:
              "Мо стеки муосир ва санҷидашударо истифода мебарем: Next.js ва React, Laravel ва Node.js, PostgreSQL ва MySQL, Docker ва Nginx. Сайтҳо дар Next.js зуд бор мешаванд ва дар Google ва Яндекс хуб индексатсия мешаванд.",
          },
          {
            heading: "Мӯҳлати таҳия",
            text:
              "Таҳлил ва тарҳрезӣ 1–2 ҳафта, дизайн 2–3 ҳафта, таҳия аз 1 моҳ, санҷиш 1–2 ҳафта. Мӯҳлат ва нархи дақиқро пас аз машварати ройгон ҳисоб мекунем.",
          },
        ],
        faq: [
          {
            q: "Сохтани сайт дар Душанбе чанд пул арзиш дорад?",
            a: "Нарх аз навъи сайт, шумораи саҳифаҳо, дизайн ва ҳамгироиҳо вобаста аст. Дархост гузоред — мо лоиҳаро ройгон арзёбӣ карда, пешниҳоди тиҷоратӣ омода мекунем.",
          },
          {
            q: "Таҳияи сайт чӣ қадар вақт мегирад?",
            a: "Сайти хурди корпоративӣ дар чанд ҳафта омода мешавад. Порталҳо ва мағозаҳои онлайни калон аз 2 моҳ таҳия мешаванд. Мӯҳлат дар шартнома сабт мешавад.",
          },
          {
            q: "Оё мо худамон сайтро таҳрир карда метавонем?",
            a: "Бале. Ҳар сайт панели идоракунӣ дорад, ки тавассути он матнҳо, хабарҳо ва тасвирҳоро бе барномасоз иваз кардан мумкин аст.",
          },
        ],
      },
    },
  },
  {
    slug: "mobile-app-development",
    icon: "/icons/mobile.svg",
    relatedCases: ["somon-tv", "mavji-somon", "navo", "zudyob", "promolovelybot"],
    content: {
      ru: {
        name: "Мобильные приложения",
        title: "Разработка мобильных приложений в Таджикистане",
        metaTitle: "Разработка мобильных приложений для iOS и Android в Душанбе",
        metaDescription:
          "Разработка мобильных приложений для iOS и Android под ключ в Таджикистане: Flutter, нативная разработка, Telegram Mini Apps. Дизайн, бэкенд, публикация в App Store и Google Play.",
        lead:
          "Мы разрабатываем мобильные приложения для iOS и Android, которые помогают бизнесу увеличивать продажи и удерживать клиентов. В портфолио — OTT-приложения для телеканала Somon TV и платформы Mavji Somon, Telegram-боты и Mini Apps с AI-поиском.",
        sections: [
          {
            heading: "Какие приложения мы создаём",
            text: "Проектируем приложение вокруг сценариев ваших пользователей, а затем выбираем оптимальную технологию.",
            bullets: [
              "Кроссплатформенные приложения на Flutter — одна кодовая база для iOS и Android",
              "OTT- и стриминговые приложения для видео, ТВ и радио",
              "Приложения для интернет-магазинов, доставки и сервисов бронирования",
              "Финтех-приложения: кошельки, микрофинансы, онлайн-оплата",
              "Telegram-боты и Telegram Mini Apps",
              "Корпоративные приложения для сотрудников и полевых служб",
            ],
          },
          {
            heading: "Полный цикл разработки",
            text: "Берём на себя весь путь от идеи до публикации и развития приложения.",
            bullets: [
              "Исследование и прототипирование пользовательских сценариев",
              "UI/UX-дизайн в соответствии с гайдлайнами Apple и Google",
              "Разработка серверной части (API, админ-панель, push-уведомления)",
              "Интеграция оплаты, SMS-авторизации (OTP), карт и аналитики",
              "Тестирование на реальных устройствах",
              "Публикация в App Store и Google Play и дальнейшая поддержка",
            ],
          },
          {
            heading: "Почему Flutter",
            text:
              "Flutter позволяет выпустить приложение сразу на iOS и Android быстрее и дешевле, чем две отдельные нативные разработки, без потери скорости и качества интерфейса. Для задач, требующих глубокой работы с устройством, используем нативные технологии.",
          },
        ],
        faq: [
          {
            q: "Сколько стоит разработка мобильного приложения?",
            a: "Цена зависит от количества экранов, функций, интеграций и серверной части. После бесплатной консультации мы предлагаем MVP-версию с ключевыми функциями, чтобы быстрее выйти на рынок и сократить бюджет.",
          },
          {
            q: "Разрабатываете ли вы приложения сразу для iOS и Android?",
            a: "Да. Чаще всего используем Flutter — одна кодовая база работает на обеих платформах, что сокращает сроки и стоимость.",
          },
          {
            q: "Поможете ли вы опубликовать приложение в App Store и Google Play?",
            a: "Да, мы готовим материалы, проходим модерацию магазинов и публикуем приложение от имени вашей компании.",
          },
          {
            q: "Что такое Telegram Mini App и подходит ли он моему бизнесу?",
            a: "Это приложение, которое открывается внутри Telegram без установки. Отлично подходит для промо-акций, каталогов, записи и заказов — особенно в Таджикистане, где Telegram очень популярен.",
          },
        ],
      },
      en: {
        name: "Mobile Apps",
        title: "Mobile App Development in Tajikistan",
        metaTitle: "iOS & Android Mobile App Development in Dushanbe, Tajikistan",
        metaDescription:
          "Turnkey iOS and Android app development in Tajikistan: Flutter, native, Telegram Mini Apps. Design, back-end, App Store and Google Play publishing.",
        lead:
          "We build iOS and Android apps that help businesses grow sales and retain customers. Our portfolio includes OTT apps for Somon TV and the Mavji Somon platform, Telegram bots and Mini Apps with AI search.",
        sections: [
          {
            heading: "Apps we build",
            text: "We design the app around your users' journeys first and then choose the right technology.",
            bullets: [
              "Cross-platform Flutter apps — one codebase for iOS and Android",
              "OTT and streaming apps for video, TV and radio",
              "E-commerce, delivery and booking apps",
              "Fintech apps: wallets, microfinance, online payments",
              "Telegram bots and Telegram Mini Apps",
              "Internal enterprise apps for staff and field teams",
            ],
          },
          {
            heading: "Full-cycle development",
            text: "We handle the whole journey from idea to publishing and growth.",
            bullets: [
              "User research and prototyping",
              "UI/UX design following Apple and Google guidelines",
              "Back-end development (API, admin panel, push notifications)",
              "Payments, SMS OTP login, maps and analytics integrations",
              "Testing on real devices",
              "App Store and Google Play publishing and ongoing support",
            ],
          },
        ],
        faq: [
          {
            q: "How much does mobile app development cost?",
            a: "It depends on the number of screens, features, integrations and the back-end. After a free consultation we usually suggest an MVP with key features to launch faster and reduce the budget.",
          },
          {
            q: "Do you build for both iOS and Android?",
            a: "Yes. We mostly use Flutter, so one codebase runs on both platforms, which saves time and money.",
          },
          {
            q: "Will you publish the app to the App Store and Google Play?",
            a: "Yes, we prepare store assets, pass the review and publish the app under your company account.",
          },
        ],
      },
      tj: {
        name: "Барномаҳои мобилӣ",
        title: "Таҳияи барномаҳои мобилӣ дар Тоҷикистон",
        metaTitle: "Таҳияи барномаҳои мобилӣ барои iOS ва Android дар Душанбе",
        metaDescription:
          "Таҳияи пурраи барномаҳои мобилӣ барои iOS ва Android дар Тоҷикистон: Flutter, Telegram Mini Apps. Дизайн, backend, нашр дар App Store ва Google Play.",
        lead:
          "Мо барномаҳои мобилӣ барои iOS ва Android таҳия мекунем, ки ба тиҷорат барои афзоиши фурӯш ва нигоҳ доштани мизоҷон кӯмак мекунанд. Дар портфолиои мо барномаҳои OTT барои шабакаи Somon TV ва платформаи Mavji Somon, инчунин ботҳои Telegram мавҷуданд.",
        sections: [
          {
            heading: "Кадом барномаҳоро месозем",
            text: "Барномаро дар асоси сенарияҳои корбарони шумо тарҳрезӣ карда, технологияи беҳтаринро интихоб мекунем.",
            bullets: [
              "Барномаҳои кроссплатформаӣ дар Flutter — як код барои iOS ва Android",
              "Барномаҳои OTT ва стриминг барои видео, ТВ ва радио",
              "Барномаҳо барои мағозаҳои онлайн, хизматрасонии расонидан ва фармоиш",
              "Барномаҳои финтех: ҳамёнҳо, микромолия, пардохти онлайн",
              "Ботҳои Telegram ва Telegram Mini Apps",
            ],
          },
          {
            heading: "Давраи пурраи таҳия",
            text: "Мо тамоми роҳро аз ғоя то нашр ва рушди барнома ба уҳда мегирем.",
            bullets: [
              "Тадқиқот ва прототипсозӣ",
              "Дизайни UI/UX мувофиқи талаботи Apple ва Google",
              "Таҳияи қисми серверӣ (API, панели идоракунӣ, push-огоҳиномаҳо)",
              "Ҳамгироии пардохт, тасдиқи SMS (OTP), харитаҳо ва таҳлил",
              "Нашр дар App Store ва Google Play ва дастгирӣ",
            ],
          },
        ],
        faq: [
          {
            q: "Таҳияи барномаи мобилӣ чанд пул арзиш дорад?",
            a: "Нарх аз шумораи экранҳо, функсияҳо ва қисми серверӣ вобаста аст. Пас аз машварати ройгон мо версияи MVP-ро пешниҳод мекунем, то зудтар ба бозор бароед.",
          },
          {
            q: "Оё барномаро ҳамзамон барои iOS ва Android месозед?",
            a: "Бале. Асосан Flutter-ро истифода мебарем — як код дар ҳарду платформа кор мекунад.",
          },
        ],
      },
    },
  },
  {
    slug: "crm-erp-development",
    icon: "/icons/network.svg",
    relatedCases: ["sohktor", "sinamoktv", "rushdikuhiston", "farad"],
    content: {
      ru: {
        name: "CRM и ERP системы",
        title: "Разработка CRM и ERP систем для бизнеса",
        metaTitle: "Разработка CRM и ERP систем в Таджикистане — автоматизация бизнеса",
        metaDescription:
          "Разработка CRM, ERP и учётных систем под процессы вашей компании в Душанбе. Автоматизация продаж, абонентов, склада, кредитов. Интеграции с 1С, SMS, оплатой.",
        lead:
          "Готовые CRM часто не учитывают специфику бизнеса в Таджикистане. Мы разрабатываем CRM и ERP системы под ваши реальные процессы — для государственных служб, телеком-операторов, микрофинансовых организаций и электронной коммерции.",
        sections: [
          {
            heading: "Какие процессы автоматизируем",
            text: "Каждая система строится вокруг ваших бизнес-процессов, ролей сотрудников и отчётности.",
            bullets: [
              "Учёт клиентов, абонентов и сделок, воронка продаж",
              "Складской учёт, заказы и логистика",
              "Кредитный конвейер и учёт займов для МФО",
              "Оперативный учёт и документооборот для государственных служб",
              "Биллинг, тарифы и платежи для операторов связи и кабельного ТВ",
              "Отчёты, дашборды и аналитика для руководства",
            ],
          },
          {
            heading: "Преимущества собственной системы",
            text: "Индивидуальная CRM/ERP принадлежит вам и развивается вместе с компанией.",
            bullets: [
              "Нет ежемесячной платы за каждого пользователя",
              "Данные хранятся на ваших серверах или в Таджикистане",
              "Ролевая модель доступа и журнал действий сотрудников",
              "Интеграции с 1С, банками, платёжными системами, SMS-рассылкой и телефонией",
              "Работа на компьютерах, планшетах и смартфонах",
            ],
          },
        ],
        faq: [
          {
            q: "Что лучше: готовая CRM или разработка под заказ?",
            a: "Готовая CRM подходит для типовых продаж. Если у вас нестандартные процессы, много интеграций или требования к хранению данных, собственная система окупается быстрее и не ограничивает рост.",
          },
          {
            q: "Можно ли интегрировать систему с 1С и банками?",
            a: "Да, мы интегрируем системы с 1С, платёжными шлюзами, банками, SMS-шлюзами и другими сервисами через API.",
          },
          {
            q: "Сколько времени занимает внедрение?",
            a: "Срок зависит от количества модулей и интеграций. Мы внедряем систему поэтапно: сначала запускаем ключевые модули, затем развиваем остальные — так компания начинает работать в системе как можно раньше.",
          },
        ],
      },
      en: {
        name: "CRM & ERP Systems",
        title: "Custom CRM and ERP Development",
        metaTitle: "Custom CRM & ERP Development in Tajikistan — Business Automation",
        metaDescription:
          "Custom CRM, ERP and accounting systems built around your processes in Dushanbe. Sales, subscribers, inventory and loan automation. Integrations with 1C, SMS and payments.",
        lead:
          "Off-the-shelf CRMs rarely fit the way businesses work in Tajikistan. We build CRM and ERP systems around your real processes — for government services, telecom operators, microfinance and e-commerce.",
        sections: [
          {
            heading: "What we automate",
            text: "Every system is built around your workflows, staff roles and reporting.",
            bullets: [
              "Customers, subscribers, deals and sales pipelines",
              "Inventory, orders and logistics",
              "Loan origination and servicing for microfinance",
              "Operations and document flow for government services",
              "Billing and payments for telecom and cable TV",
              "Reports, dashboards and analytics for management",
            ],
          },
          {
            heading: "Why a custom system",
            text: "A custom CRM/ERP is your asset and grows with the company.",
            bullets: [
              "No per-user monthly fees",
              "Data stored on your servers or in Tajikistan",
              "Role-based access and audit logs",
              "Integrations with 1C, banks, payment gateways, SMS and telephony",
            ],
          },
        ],
        faq: [
          {
            q: "Off-the-shelf CRM or custom development?",
            a: "Off-the-shelf works for typical sales. With non-standard processes, many integrations or data residency requirements, a custom system pays off faster.",
          },
          {
            q: "How long does implementation take?",
            a: "It depends on the number of modules and integrations. We roll out in stages: key modules first, then the rest, so your team starts using the system as early as possible.",
          },
        ],
      },
      tj: {
        name: "Системаҳои CRM ва ERP",
        title: "Таҳияи системаҳои CRM ва ERP барои тиҷорат",
        metaTitle: "Таҳияи системаҳои CRM ва ERP дар Тоҷикистон — автоматикунонии тиҷорат",
        metaDescription:
          "Таҳияи системаҳои CRM, ERP ва баҳисобгирӣ мувофиқи равандҳои ширкати шумо дар Душанбе. Ҳамгироӣ бо 1С, SMS ва системаҳои пардохт.",
        lead:
          "Мо системаҳои CRM ва ERP-ро мувофиқи равандҳои воқеии шумо таҳия мекунем — барои хадамоти давлатӣ, операторони алоқа, ташкилотҳои маблағгузории хурд ва тиҷорати электронӣ.",
        sections: [
          {
            heading: "Кадом равандҳоро автоматӣ мекунем",
            text: "Ҳар система дар асоси равандҳои тиҷоратӣ, нақшҳои кормандон ва ҳисоботи шумо сохта мешавад.",
            bullets: [
              "Баҳисобгирии мизоҷон, муштариён ва аҳдҳо",
              "Анбор, фармоишҳо ва логистика",
              "Қарзҳо ва баҳисобгирии онҳо барои ТМХ",
              "Биллинг ва пардохтҳо барои операторони алоқа ва ТВ-и кабелӣ",
              "Ҳисоботҳо ва таҳлил барои роҳбарият",
            ],
          },
        ],
        faq: [
          {
            q: "Оё системаро бо 1С ва бонкҳо пайваст кардан мумкин аст?",
            a: "Бале, мо системаҳоро тавассути API бо 1С, бонкҳо, шлюзҳои пардохт ва SMS пайваст мекунем.",
          },
          {
            q: "Ҷорӣ кардан чӣ қадар вақт мегирад?",
            a: "Мӯҳлат аз шумораи модулҳо ва ҳамгироиҳо вобаста аст. Мо системаро марҳила ба марҳила ҷорӣ мекунем: аввал модулҳои асосӣ, баъд боқимонда.",
          },
        ],
      },
    },
  },
  {
    slug: "sms-gateway",
    icon: "/icons/sms.svg",
    relatedCases: ["zudsms", "livechat-tj", "onlinepay"],
    content: {
      ru: {
        name: "SMS-рассылка и SMS-шлюз",
        title: "SMS-рассылка и SMS-шлюз в Таджикистане",
        metaTitle: "SMS-рассылка в Таджикистане — SMS-шлюз и API для OTP | ZudSMS",
        metaDescription:
          "Массовые и транзакционные SMS-рассылки на всех операторов Таджикистана через платформу ZudSMS. SMS-шлюз и REST API для OTP-кодов, 2FA и уведомлений. Личный кабинет и шаблоны.",
        lead:
          "ZudSMS — собственная платформа Dushanbe Soft для SMS-рассылок. Отправляйте рекламные и сервисные SMS на номера всех мобильных операторов Таджикистана из личного кабинета или подключите SMS-шлюз к своему сайту, приложению или CRM через REST API.",
        sections: [
          {
            heading: "Для чего используют SMS-рассылку",
            text: "SMS доходит до клиента даже без интернета и читается в первые минуты после отправки.",
            bullets: [
              "OTP-коды и двухфакторная авторизация (2FA) для сайтов и приложений",
              "Уведомления о заказах, платежах, доставке и записи",
              "Рекламные акции, скидки и поздравления клиентов",
              "Напоминания о задолженностях и сроках оплаты",
              "Внутренние оповещения сотрудников",
            ],
          },
          {
            heading: "Возможности платформы ZudSMS",
            text: "Платформа создана для бизнеса Таджикистана и работает с местными операторами связи.",
            bullets: [
              "Доставка на все мобильные операторы Таджикистана",
              "Личный кабинет с балансом, тарифами и шаблонами сообщений",
              "Планирование рассылок и работа с базой клиентов",
              "REST API для автоматической отправки из CRM, ERP и сайтов",
            ],
          },
        ],
        faq: [
          {
            q: "Как подключить SMS-рассылку?",
            a: "Зарегистрируйтесь на платформе ZudSMS или оставьте заявку на нашем сайте — мы поможем настроить отправителя, тарифы и интеграцию.",
          },
          {
            q: "Можно ли отправлять OTP-коды через API?",
            a: "Да, ZudSMS предоставляет REST API для мгновенной отправки OTP-кодов и уведомлений из вашего сайта, мобильного приложения или CRM.",
          },
          {
            q: "На каких операторов доставляются SMS?",
            a: "Сообщения доставляются на номера всех мобильных операторов Таджикистана.",
          },
        ],
      },
      en: {
        name: "SMS Gateway",
        title: "SMS Marketing and SMS Gateway in Tajikistan",
        metaTitle: "SMS Gateway & Bulk SMS in Tajikistan — OTP API | ZudSMS",
        metaDescription:
          "Bulk and transactional SMS to all mobile operators in Tajikistan via the ZudSMS platform. SMS gateway and REST API for OTP codes, 2FA and notifications.",
        lead:
          "ZudSMS is Dushanbe Soft's own SMS platform. Send marketing and service SMS to all mobile operators in Tajikistan from a web dashboard, or connect the SMS gateway to your website, app or CRM via REST API.",
        sections: [
          {
            heading: "What businesses use SMS for",
            text: "SMS reaches customers even without internet and is read within minutes.",
            bullets: [
              "OTP codes and two-factor authentication (2FA)",
              "Order, payment, delivery and booking notifications",
              "Promotions, discounts and greetings",
              "Payment reminders",
            ],
          },
          {
            heading: "ZudSMS features",
            text: "Built for businesses in Tajikistan and connected to local operators.",
            bullets: [
              "Delivery to all mobile operators in Tajikistan",
              "Dashboard with balance, plans and message templates",
              "Scheduled campaigns and contact lists",
              "REST API for CRM, ERP and website integration",
            ],
          },
        ],
        faq: [
          {
            q: "Can I send OTP codes via API?",
            a: "Yes, ZudSMS provides a REST API to send OTP codes and notifications instantly from your website, app or CRM.",
          },
          {
            q: "Which operators are supported?",
            a: "Messages are delivered to all mobile operators in Tajikistan.",
          },
        ],
      },
      tj: {
        name: "Фиристодани SMS ва SMS-шлюз",
        title: "Фиристодани SMS ва SMS-шлюз дар Тоҷикистон",
        metaTitle: "Фиристодани SMS дар Тоҷикистон — SMS-шлюз ва API барои OTP | ZudSMS",
        metaDescription:
          "Фиристодани оммавӣ ва транзаксионии SMS ба ҳамаи операторони Тоҷикистон тавассути платформаи ZudSMS. SMS-шлюз ва REST API барои рамзҳои OTP ва огоҳиномаҳо.",
        lead:
          "ZudSMS — платформаи худии Dushanbe Soft барои фиристодани оммавии SMS. Паёмҳои таблиғотӣ ва хизматрасониро ба рақамҳои ҳамаи операторони мобилии Тоҷикистон фиристед ё SMS-шлюзро тавассути REST API ба сайт, барнома ё CRM-и худ пайваст кунед.",
        sections: [
          {
            heading: "SMS барои чӣ истифода мешавад",
            text: "SMS ҳатто бе интернет ба мизоҷ мерасад ва дар дақиқаҳои аввал хонда мешавад.",
            bullets: [
              "Рамзҳои OTP ва тасдиқи дуомила (2FA)",
              "Огоҳиномаҳо дар бораи фармоиш, пардохт ва расонидан",
              "Аксияҳо, тахфифҳо ва табрикҳо",
              "Ёдраскунӣ дар бораи пардохт",
            ],
          },
          {
            heading: "Имкониятҳои ZudSMS",
            text: "Платформа барои тиҷорати Тоҷикистон сохта шуда, бо операторони маҳаллӣ кор мекунад.",
            bullets: [
              "Расонидан ба ҳамаи операторони мобилии Тоҷикистон",
              "Кабинети шахсӣ бо баланс, тарифҳо ва шаблонҳо",
              "Банақшагирии фиристодан ва пойгоҳи мизоҷон",
              "REST API барои ҳамгироӣ бо CRM, ERP ва сайтҳо",
            ],
          },
        ],
        faq: [
          {
            q: "Оё рамзҳои OTP-ро тавассути API фиристодан мумкин аст?",
            a: "Бале, ZudSMS REST API пешниҳод мекунад, ки рамзҳои OTP ва огоҳиномаҳоро фавран аз сайт, барнома ё CRM мефиристад.",
          },
        ],
      },
    },
  },
  {
    slug: "ui-ux-design",
    icon: "/icons/disign.svg",
    relatedCases: ["traveltours", "mirel", "itrunstj", "zenith-valuation"],
    content: {
      ru: {
        name: "UI/UX дизайн",
        title: "UI/UX дизайн сайтов и приложений",
        metaTitle: "UI/UX дизайн сайтов и мобильных приложений в Душанбе",
        metaDescription:
          "Проектирование интерфейсов, прототипы и дизайн-системы для сайтов, веб-сервисов и мобильных приложений в Figma. UX-исследования и редизайн. Dushanbe Soft, Таджикистан.",
        lead:
          "Хороший дизайн — это не только красиво, но и понятно. Мы проектируем интерфейсы, которые помогают пользователям быстро находить нужное, а бизнесу — получать больше заявок и продаж.",
        sections: [
          {
            heading: "Что входит в UI/UX дизайн",
            text: "Работаем от исследования к результату, проверяя решения на прототипах до начала разработки.",
            bullets: [
              "Анализ аудитории, конкурентов и пользовательских сценариев",
              "Информационная архитектура и интерактивные прототипы",
              "Визуальный дизайн интерфейсов в Figma",
              "Дизайн-системы и UI-киты для масштабирования продукта",
              "Адаптивные версии для смартфонов и планшетов",
              "Редизайн существующих сайтов и приложений",
            ],
          },
        ],
        faq: [
          {
            q: "Можно ли заказать только дизайн без разработки?",
            a: "Да. Мы передаём готовые макеты в Figma, дизайн-систему и спецификации для вашей команды разработчиков.",
          },
          {
            q: "Сколько времени занимает дизайн сайта?",
            a: "В среднем дизайн занимает 2–3 недели после согласования прототипа, в зависимости от количества уникальных страниц.",
          },
        ],
      },
      en: {
        name: "UI/UX Design",
        title: "UI/UX Design for Websites and Apps",
        metaTitle: "UI/UX Design for Websites and Mobile Apps in Dushanbe",
        metaDescription:
          "Interface design, prototypes and design systems for websites, web services and mobile apps in Figma. UX research and redesign. Dushanbe Soft, Tajikistan.",
        lead:
          "Good design is not only beautiful but also clear. We design interfaces that help users find what they need quickly and help businesses get more leads and sales.",
        sections: [
          {
            heading: "What UI/UX design includes",
            text: "We move from research to results and validate decisions with prototypes before development.",
            bullets: [
              "Audience, competitor and user journey analysis",
              "Information architecture and interactive prototypes",
              "Visual interface design in Figma",
              "Design systems and UI kits",
              "Responsive versions for phones and tablets",
              "Redesign of existing websites and apps",
            ],
          },
        ],
        faq: [
          {
            q: "Can I order design only, without development?",
            a: "Yes. We hand over Figma layouts, a design system and specs for your development team.",
          },
        ],
      },
      tj: {
        name: "Дизайни UI/UX",
        title: "Дизайни UI/UX барои сайтҳо ва барномаҳо",
        metaTitle: "Дизайни UI/UX барои сайтҳо ва барномаҳои мобилӣ дар Душанбе",
        metaDescription:
          "Тарҳрезии интерфейсҳо, прототипҳо ва системаҳои дизайн барои сайтҳо ва барномаҳои мобилӣ дар Figma. Dushanbe Soft, Тоҷикистон.",
        lead:
          "Дизайни хуб на танҳо зебо, балки фаҳмо аст. Мо интерфейсҳоеро тарҳрезӣ мекунем, ки ба корбарон зуд ёфтани маълумот ва ба тиҷорат гирифтани дархостҳои бештар кӯмак мекунанд.",
        sections: [
          {
            heading: "Ба дизайни UI/UX чӣ дохил мешавад",
            text: "Қарорҳоро пеш аз оғози таҳия дар прототипҳо месанҷем.",
            bullets: [
              "Таҳлили аудитория ва рақибон",
              "Архитектураи иттилоотӣ ва прототипҳои интерактивӣ",
              "Дизайни визуалӣ дар Figma",
              "Системаҳои дизайн ва UI-китҳо",
              "Версияҳои мутобиқ барои смартфонҳо",
            ],
          },
        ],
        faq: [
          {
            q: "Оё танҳо дизайнро бе таҳия фармоиш додан мумкин аст?",
            a: "Бале. Мо макетҳои тайёрро дар Figma ва системаи дизайнро ба дастаи барномасозони шумо месупорем.",
          },
        ],
      },
    },
  },
  {
    slug: "api-integration",
    icon: "/icons/api.svg",
    relatedCases: ["onlinepay", "digital-tajikistan", "zudsms", "royalbaby"],
    content: {
      ru: {
        name: "API интеграция",
        title: "API интеграция и разработка платёжных шлюзов",
        metaTitle: "API интеграция и подключение платёжных систем в Таджикистане",
        metaDescription:
          "Разработка REST/GraphQL API, интеграция платёжных систем, банков, 1С, SMS-шлюзов и государственных сервисов. Микросервисная архитектура. Dushanbe Soft, Душанбе.",
        lead:
          "Мы связываем ваши системы между собой: сайт с CRM, приложение с банком, учётную систему с государственными сервисами. В портфолио — платформа интернет-эквайринга OnlinePay и портал электронных госуслуг Digital Tajikistan.",
        sections: [
          {
            heading: "Что мы интегрируем",
            text: "Разрабатываем собственные API и подключаем сторонние сервисы с учётом безопасности и отказоустойчивости.",
            bullets: [
              "Платёжные системы, банки и интернет-эквайринг",
              "1С, CRM и ERP системы",
              "SMS-шлюзы, мессенджеры и Telegram-боты",
              "Государственные информационные системы",
              "Службы доставки, карты и аналитика",
              "Микросервисная архитектура и шина данных (ESB)",
            ],
          },
        ],
        faq: [
          {
            q: "Можно ли подключить онлайн-оплату к нашему сайту?",
            a: "Да, мы интегрируем приём платежей картами и электронными кошельками, популярными в Таджикистане, а также разрабатываем собственные платёжные шлюзы.",
          },
          {
            q: "Вы документируете API?",
            a: "Да, каждое API сопровождается документацией (OpenAPI/Swagger), чтобы ваши разработчики и партнёры могли легко подключиться.",
          },
        ],
      },
      en: {
        name: "API Integration",
        title: "API Integration and Payment Gateway Development",
        metaTitle: "API Integration & Payment Systems in Tajikistan",
        metaDescription:
          "REST/GraphQL API development, integration of payment systems, banks, 1C, SMS gateways and government services. Microservice architecture. Dushanbe Soft.",
        lead:
          "We connect your systems: website with CRM, app with bank, accounting with government services. Our portfolio includes the OnlinePay acquiring platform and the Digital Tajikistan e-government portal.",
        sections: [
          {
            heading: "What we integrate",
            text: "We build our own APIs and connect third-party services with security and fault tolerance in mind.",
            bullets: [
              "Payment systems, banks and online acquiring",
              "1C, CRM and ERP systems",
              "SMS gateways, messengers and Telegram bots",
              "Government information systems",
              "Microservices and enterprise service bus (ESB)",
            ],
          },
        ],
        faq: [
          {
            q: "Can you add online payments to our website?",
            a: "Yes, we integrate card and e-wallet payments popular in Tajikistan and also build custom payment gateways.",
          },
        ],
      },
      tj: {
        name: "Ҳамгироии API",
        title: "Ҳамгироии API ва таҳияи шлюзҳои пардохт",
        metaTitle: "Ҳамгироии API ва пайвасти системаҳои пардохт дар Тоҷикистон",
        metaDescription:
          "Таҳияи REST/GraphQL API, ҳамгироии системаҳои пардохт, бонкҳо, 1С, SMS-шлюзҳо ва хидматҳои давлатӣ. Dushanbe Soft, Душанбе.",
        lead:
          "Мо системаҳои шуморо бо ҳам мепайвандем: сайтро бо CRM, барномаро бо бонк, баҳисобгириро бо хидматҳои давлатӣ.",
        sections: [
          {
            heading: "Чиро ҳамгиро мекунем",
            text: "API-ҳои худро таҳия карда, хидматҳои беруниро бо назардошти бехатарӣ пайваст мекунем.",
            bullets: [
              "Системаҳои пардохт, бонкҳо ва эквайринги онлайн",
              "1С, системаҳои CRM ва ERP",
              "SMS-шлюзҳо ва ботҳои Telegram",
              "Системаҳои иттилоотии давлатӣ",
            ],
          },
        ],
        faq: [
          {
            q: "Оё ба сайти мо пардохти онлайн пайваст кардан мумкин аст?",
            a: "Бале, мо қабули пардохтҳоро бо кортҳо ва ҳамёнҳои электронии маъмул дар Тоҷикистон ҳамгиро мекунем.",
          },
        ],
      },
    },
  },
  {
    slug: "cybersecurity",
    icon: "/icons/security.svg",
    relatedCases: ["president", "digital-tajikistan", "onlinepay"],
    content: {
      ru: {
        name: "Кибербезопасность",
        title: "Кибербезопасность и аудит безопасности сайтов",
        metaTitle: "Аудит безопасности сайтов и кибербезопасность в Таджикистане",
        metaDescription:
          "Аудит безопасности веб-приложений, пентест, защита от DDoS и взлома, настройка серверов по OWASP. Защита государственных порталов и платёжных систем. Dushanbe Soft.",
        lead:
          "Мы разрабатываем и сопровождаем государственные порталы и платёжные системы, поэтому безопасность — часть каждого нашего проекта. Проверим ваш сайт или приложение на уязвимости и поможем их закрыть.",
        sections: [
          {
            heading: "Услуги по безопасности",
            text: "Проверяем систему так, как это сделал бы злоумышленник, и даём понятный план исправлений.",
            bullets: [
              "Аудит безопасности веб-приложений по методологии OWASP Top 10",
              "Тестирование на проникновение (пентест)",
              "Защита от DDoS-атак, ботов и подбора паролей",
              "Безопасная настройка серверов, SSL и резервного копирования",
              "Аудит кода и зависимостей",
            ],
          },
        ],
        faq: [
          {
            q: "Как понять, что сайт нуждается в аудите безопасности?",
            a: "Если сайт принимает платежи, хранит персональные данные, давно не обновлялся или уже подвергался атакам — аудит нужен. Мы покажем реальные риски и способы их устранения.",
          },
        ],
      },
      en: {
        name: "Cybersecurity",
        title: "Cybersecurity and Website Security Audit",
        metaTitle: "Website Security Audit & Cybersecurity in Tajikistan",
        metaDescription:
          "Web application security audits, penetration testing, DDoS and hacking protection, OWASP-based server hardening. Dushanbe Soft, Tajikistan.",
        lead:
          "We build and maintain government portals and payment systems, so security is part of every project. We will test your website or app for vulnerabilities and help fix them.",
        sections: [
          {
            heading: "Security services",
            text: "We test your system the way an attacker would and give you a clear remediation plan.",
            bullets: [
              "OWASP Top 10 web application security audit",
              "Penetration testing",
              "DDoS, bot and brute-force protection",
              "Server hardening, SSL and backups",
              "Code and dependency audit",
            ],
          },
        ],
        faq: [
          {
            q: "How do I know my website needs a security audit?",
            a: "If your website accepts payments, stores personal data, has not been updated for a long time or has already been attacked, an audit is needed. We will show the real risks and how to fix them.",
          },
        ],
      },
      tj: {
        name: "Амнияти киберӣ",
        title: "Амнияти киберӣ ва аудити бехатарии сайтҳо",
        metaTitle: "Аудити бехатарии сайтҳо ва амнияти киберӣ дар Тоҷикистон",
        metaDescription:
          "Аудити бехатарии барномаҳои веб, пентест, ҳифз аз DDoS ва рахнашавӣ. Dushanbe Soft, Тоҷикистон.",
        lead:
          "Мо порталҳои давлатӣ ва системаҳои пардохтро таҳия ва дастгирӣ мекунем, бинобар ин бехатарӣ ҷузъи ҳар лоиҳаи мост.",
        sections: [
          {
            heading: "Хизматрасониҳои бехатарӣ",
            text: "Системаро мисли ҳамлагар месанҷем ва нақшаи равшани ислоҳро медиҳем.",
            bullets: [
              "Аудити бехатарӣ аз рӯи OWASP Top 10",
              "Санҷиши воридшавӣ (пентест)",
              "Ҳифз аз ҳамлаҳои DDoS ва ботҳо",
              "Танзими бехатари серверҳо ва нусхаҳои эҳтиётӣ",
            ],
          },
        ],
        faq: [
          {
            q: "Аз куҷо бифаҳмам, ки сайт ба аудити бехатарӣ ниёз дорад?",
            a: "Агар сайт пардохт қабул кунад, маълумоти шахсиро нигоҳ дорад, муддати дароз навсозӣ нашуда бошад ё аллакай ба ҳамла дучор шуда бошад — аудит зарур аст. Мо хатарҳои воқеӣ ва роҳҳои бартараф кардани онҳоро нишон медиҳем.",
          },
        ],
      },
    },
  },
  {
    slug: "website-support",
    icon: "/icons/support.svg",
    relatedCases: ["president", "telecomm", "mirel"],
    content: {
      ru: {
        name: "Техподдержка сайтов",
        title: "Техническая поддержка и сопровождение сайтов",
        metaTitle: "Техподдержка сайтов в Душанбе — сопровождение и обслуживание сайта",
        metaDescription:
          "Техническая поддержка и сопровождение сайтов в Таджикистане: мониторинг, резервное копирование, исправление ошибок, продление домена и SSL, защита от вирусов. Тарифы от «Стандарт» до «Премиум».",
        lead:
          "Сайт требует постоянного внимания: обновлений, резервных копий, контроля домена и защиты. Мы берём сопровождение на себя, чтобы ваш сайт работал стабильно, а вы занимались бизнесом.",
        sections: [
          {
            heading: "Что входит в техподдержку",
            text: "Объём работ зависит от выбранного тарифа — от базового контроля до полного сопровождения с доработками.",
            bullets: [
              "Мониторинг доступности сайта",
              "Контроль продления домена, хостинга и SSL-сертификата",
              "Регулярное резервное копирование",
              "Исправление ошибок в оговорённые сроки",
              "Защита от атак и вирусов",
              "Администрирование корпоративной почты",
              "Доработка программного кода и консультации",
            ],
          },
        ],
        faq: [
          {
            q: "Сколько стоит техническая поддержка сайта?",
            a: "У нас четыре тарифа: «Стандарт», «Основной», «Продвинутый» и «Премиум». Подробное сравнение — в разделе «Тарифы» на главной странице. Поможем выбрать подходящий.",
          },
          {
            q: "Чем тарифы отличаются друг от друга?",
            a: "Тарифы различаются количеством часов консультаций, частотой резервного копирования, скоростью исправления ошибок и дополнительными работами — администрированием почты, защитой от атак и доработкой кода.",
          },
        ],
      },
      en: {
        name: "Website Support",
        title: "Website Technical Support and Maintenance",
        metaTitle: "Website Support & Maintenance in Dushanbe, Tajikistan",
        metaDescription:
          "Website technical support in Tajikistan: monitoring, backups, bug fixing, domain and SSL renewal, malware protection. Plans from Standard to Premium.",
        lead:
          "A website needs constant care: updates, backups, domain control and protection. We take care of maintenance so your website runs smoothly while you focus on business.",
        sections: [
          {
            heading: "What support includes",
            text: "The scope depends on your plan — from basic monitoring to full maintenance with improvements.",
            bullets: [
              "Uptime monitoring",
              "Domain, hosting and SSL renewal control",
              "Regular backups",
              "Bug fixing within agreed time",
              "Attack and malware protection",
              "Corporate email administration",
              "Code improvements and consulting",
            ],
          },
        ],
        faq: [
          {
            q: "How do the support plans differ?",
            a: "Plans differ in consulting hours, backup frequency, bug-fix response time and extra work such as email administration, attack protection and code improvements.",
          },
        ],
      },
      tj: {
        name: "Дастгирии техникии сайтҳо",
        title: "Дастгирии техникӣ ва нигоҳубини сайтҳо",
        metaTitle: "Дастгирии техникии сайтҳо дар Душанбе",
        metaDescription:
          "Дастгирии техникии сайтҳо дар Тоҷикистон: мониторинг, нусхаҳои эҳтиётӣ, ислоҳи хатоҳо, тамдиди домен ва SSL, ҳифз аз вирусҳо.",
        lead:
          "Сайт диққати доимӣ талаб мекунад: навсозӣ, нусхаҳои эҳтиётӣ, назорати домен ва ҳифз. Мо нигоҳубинро ба уҳда мегирем, то сайти шумо бефосила кор кунад.",
        sections: [
          {
            heading: "Ба дастгирии техникӣ чӣ дохил мешавад",
            text: "Ҳаҷми корҳо аз тарифи интихобшуда вобаста аст.",
            bullets: [
              "Мониторинги дастрасии сайт",
              "Назорати тамдиди домен, хостинг ва SSL",
              "Нусхабардории мунтазами эҳтиётӣ",
              "Ислоҳи хатоҳо дар мӯҳлати муқарраршуда",
              "Ҳифз аз ҳамлаҳо ва вирусҳо",
            ],
          },
        ],
        faq: [
          {
            q: "Тарифҳо аз ҳамдигар чӣ фарқ доранд?",
            a: "Тарифҳо бо шумораи соатҳои машварат, басомади нусхабардорӣ, суръати ислоҳи хатоҳо ва корҳои иловагӣ — идоракунии почта, ҳифз аз ҳамлаҳо ва такмили код фарқ мекунанд.",
          },
        ],
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesList.find((s) => s.slug === slug);
}

export function getServiceContent(service: ServiceItem, lang: string): ServiceContent {
  return service.content[contentLocale(lang)] ?? service.content.ru;
}

/** UI strings for the services hub and detail pages */
export const servicesUi: Record<
  ServiceLang,
  {
    hubTitle: string;
    hubMetaTitle: string;
    hubDescription: string;
    hubLead: string;
    breadcrumb: string;
    more: string;
    faqTitle: string;
    casesTitle: string;
    otherServices: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    callUs: string;
  }
> = {
  ru: {
    hubTitle: "IT-услуги в Душанбе",
    hubMetaTitle: "IT-услуги в Душанбе — разработка сайтов, приложений и ПО",
    hubDescription:
      "Полный спектр IT-услуг от Dushanbe Soft: создание сайтов, мобильные приложения, CRM/ERP, SMS-рассылки, UI/UX дизайн, API интеграции, кибербезопасность и техподдержка в Таджикистане.",
    hubLead:
      "Dushanbe Soft — IT-компания из Душанбе. С 2017 года разрабатываем цифровые решения для бизнеса и государства Таджикистана. Выберите услугу, чтобы узнать подробности, сроки и посмотреть наши кейсы.",
    breadcrumb: "Услуги",
    more: "Подробнее",
    faqTitle: "Частые вопросы",
    casesTitle: "Наши проекты по этому направлению",
    otherServices: "Другие услуги",
    ctaTitle: "Обсудим ваш проект?",
    ctaText: "Оставьте заявку — мы свяжемся с вами в течение одного рабочего дня и бесплатно оценим проект.",
    ctaButton: "Получить консультацию",
    callUs: "Или позвоните",
  },
  en: {
    hubTitle: "IT Services in Dushanbe",
    hubMetaTitle: "IT Services in Dushanbe — Web, Mobile and Software Development",
    hubDescription:
      "Full range of IT services by Dushanbe Soft: website development, mobile apps, CRM/ERP, SMS gateway, UI/UX design, API integration, cybersecurity and support in Tajikistan.",
    hubLead:
      "Dushanbe Soft is an IT company based in Dushanbe. Since 2017 we have been building digital solutions for businesses and government in Tajikistan. Choose a service to see details, timelines and our case studies.",
    breadcrumb: "Services",
    more: "Learn more",
    faqTitle: "FAQ",
    casesTitle: "Our projects in this area",
    otherServices: "Other services",
    ctaTitle: "Let's discuss your project",
    ctaText: "Send a request and we will contact you within one business day with a free estimate.",
    ctaButton: "Get a consultation",
    callUs: "Or call us",
  },
  tj: {
    hubTitle: "Хизматрасониҳои IT дар Душанбе",
    hubMetaTitle: "Хизматрасониҳои IT дар Душанбе — таҳияи сайтҳо, барномаҳо ва нармафзор",
    hubDescription:
      "Ҳамаи хизматрасониҳои IT аз Dushanbe Soft: сохтани сайтҳо, барномаҳои мобилӣ, CRM/ERP, фиристодани SMS, дизайни UI/UX, ҳамгироии API, амнияти киберӣ ва дастгирӣ дар Тоҷикистон.",
    hubLead:
      "Dushanbe Soft — ширкати IT аз Душанбе. Аз соли 2017 ҳалли рақамиро барои тиҷорат ва давлати Тоҷикистон таҳия мекунем. Хизматрасониро интихоб кунед, то тафсилот ва лоиҳаҳои моро бинед.",
    breadcrumb: "Хизматрасониҳо",
    more: "Муфассал",
    faqTitle: "Саволҳои маъмул",
    casesTitle: "Лоиҳаҳои мо дар ин самт",
    otherServices: "Дигар хизматрасониҳо",
    ctaTitle: "Лоиҳаи шуморо муҳокима кунем?",
    ctaText: "Дархост гузоред — мо дар давоми як рӯзи корӣ бо шумо тамос гирифта, лоиҳаро ройгон арзёбӣ мекунем.",
    ctaButton: "Машварат гирифтан",
    callUs: "Ё занг занед",
  },
};
