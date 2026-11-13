import { contentLocale } from "../utils/locales";

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
  /** External primary source that confirms the news (shown as a link) */
  source?: { label: string; url: string };
}

export interface NewsItem {
  id: string;
  slug: string;
  image: string;
  /** Wide, high-resolution image for the home page banner (~3280x1520). Falls back to `image`. */
  heroImage?: string;
  /** Banner image on phones, where the wide composed banner is too small. Falls back to `image`. */
  heroImageMobile?: string;
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
  /** Optional translated article body; falls back to `fullContent` (ru) */
  localizedContent?: Partial<Record<"en" | "tj", NewsFullContent>>;
}

const newsItems: NewsItem[] = [
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
    heroImage: "/images/news/mavji-somon-banner.webp",
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
    heroImage: "/images/news/sohktor-banner.webp",
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
    heroImage: "/images/news/zudsms-banner.webp",
    heroImageMobile: "/images/projects/zudsms.png",
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
    heroImage: "/images/news/somontv-banner.webp",
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
      caseSlug: "somon-tv",
      techStack: ["Next.js", "Video.js", "Node.js", "Redis", "Nginx RTMP"],
      sections: [
        {
          heading: "Интерактивное ТВ нового поколения",
          text: "Портал включает интерактивную телепрограмму с напоминаниями, быстрый поиск сюжетов по ключевым словам и встроенный аудиоплеер для прослушивания радио.",
        },
      ],
    },
  },
  {
    id: "9",
    slug: "world-bank-tajikistan-digital-foundations",
    image: "/images/news/world-bank-tdfp.webp",
    heroImage: "/images/news/world-bank-tdfp-banner.webp",
    date: "09.07.2026",
    category: "gov",
    readTime: "2 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.9.tag",
    defaultTag: "Международные проекты",
    titleKey: "news.items.9.title",
    defaultTitle: "Dushanbe Soft — победитель закупки по проекту Всемирного банка",
    descKey: "news.items.9.desc",
    defaultDesc: "Частное предприятие «Dushanbe Soft» выбрано исполнителем контракта на разработку веб-сайта учреждения в рамках проекта Всемирного банка «Цифровые основы Таджикистана» (P506611).",
    fullContent: {
      lead: "Частное предприятие «Dushanbe Soft» стало победителем закупки в рамках проекта Tajikistan Digital Foundations Project («Цифровые основы Таджикистана»), который финансируется Всемирным банком. Уведомление о присуждении контракта опубликовано на официальном портале закупок Всемирного банка.",
      source: { label: "Уведомление о присуждении контракта на сайте Всемирного банка", url: "https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00455715" },
      sections: [
        {
          heading: "Детали контракта",
          text: "Контракт заключён по результатам закупки методом запроса котировок (Request for Quotations) и предусматривает услуги по разработке веб-сайта учреждения.",
          bulletPoints: [
            "Проект: Tajikistan Digital Foundations Project (P506611)",
            "Финансирование: Международная ассоциация развития (IDA-E3950)",
            "Номер закупки: TDFP-NS-RFQ-03",
            "Предмет контракта: разработка веб-сайта учреждения",
            "Дата уведомления о присуждении: 12 мая 2026 года",
            "Срок выполнения: 2,5 месяца",
          ],
        },
        {
          heading: "Почему это важно",
          text: "Закупки по проектам Всемирного банка проводятся по его правилам: с открытой публикацией, конкурентной оценкой предложений и раскрытием результатов. Победа в такой закупке подтверждает, что Dushanbe Soft соответствует требованиям международных финансовых институтов к подрядчикам в сфере цифровых решений.",
        },
        {
          heading: "Опыт в государственных цифровых проектах",
          text: "Проект продолжает работу команды над цифровизацией государственного сектора Таджикистана. Ранее Dushanbe Soft разработала официальный сайт Президента Республики Таджикистан и портал электронных государственных услуг Digital Tajikistan.",
        },
      ],
    },
    localizedContent: {
      en: {
        lead: "Private Enterprise \"Dushanbe Soft\" has been awarded a contract under the Tajikistan Digital Foundations Project, financed by the World Bank. The contract award notice is published on the World Bank's official procurement portal.",
        source: { label: "Contract award notice on the World Bank website", url: "https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00455715" },
        sections: [
          {
            heading: "Contract details",
            text: "The contract was awarded through a Request for Quotations and covers non-consulting services for the development of an institution's website.",
            bulletPoints: [
              "Project: Tajikistan Digital Foundations Project (P506611)",
              "Financing: International Development Association (IDA-E3950)",
              "Reference No.: TDFP-NS-RFQ-03",
              "Scope: development of an institution's website",
              "Notification of award issued: May 12, 2026",
              "Duration: 2.5 months",
            ],
          },
          {
            heading: "Why it matters",
            text: "Procurement under World Bank-financed projects follows the Bank's rules: open publication, competitive evaluation of bids and public disclosure of results. Winning such a procurement confirms that Dushanbe Soft meets the requirements international financial institutions set for digital solution contractors.",
          },
          {
            heading: "Experience in government digital projects",
            text: "The project continues our work on digitalizing Tajikistan's public sector. Dushanbe Soft previously built the official website of the President of the Republic of Tajikistan and the Digital Tajikistan e-government services portal.",
          },
        ],
      },
      tj: {
        lead: "Корхонаи хусусии «Dushanbe Soft» ғолиби харид дар доираи лоиҳаи Tajikistan Digital Foundations Project («Асосҳои рақамии Тоҷикистон») гардид, ки аз ҷониби Бонки ҷаҳонӣ маблағгузорӣ мешавад. Огоҳинома дар бораи супоридани шартнома дар портали расмии хариди Бонки ҷаҳонӣ нашр шудааст.",
        source: { label: "Огоҳинома дар бораи супоридани шартнома дар сомонаи Бонки ҷаҳонӣ", url: "https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00455715" },
        sections: [
          {
            heading: "Тафсилоти шартнома",
            text: "Шартнома дар натиҷаи харид бо усули дархости нархнома (Request for Quotations) баста шуда, хизматрасонӣ оид ба таҳияи сомонаи муассисаро дар бар мегирад.",
            bulletPoints: [
              "Лоиҳа: Tajikistan Digital Foundations Project (P506611)",
              "Маблағгузорӣ: Ассотсиатсияи байналмилалии рушд (IDA-E3950)",
              "Рақами харид: TDFP-NS-RFQ-03",
              "Мавзӯи шартнома: таҳияи сомонаи муассиса",
              "Санаи огоҳинома дар бораи супоридан: 12 майи соли 2026",
              "Мӯҳлати иҷро: 2,5 моҳ",
            ],
          },
          {
            heading: "Чаро ин муҳим аст",
            text: "Харидҳо дар доираи лоиҳаҳои Бонки ҷаҳонӣ мувофиқи қоидаҳои он гузаронида мешаванд: бо нашри ошкоро, арзёбии рақобатии пешниҳодҳо ва ифшои натиҷаҳо. Ғалаба дар чунин харид тасдиқ мекунад, ки Dushanbe Soft ба талаботи муассисаҳои молиявии байналмилалӣ нисбат ба пудратчиёни ҳалли рақамӣ мувофиқат мекунад.",
          },
          {
            heading: "Таҷриба дар лоиҳаҳои рақамии давлатӣ",
            text: "Ин лоиҳа кори дастаи моро дар рақамикунонии бахши давлатии Тоҷикистон идома медиҳад. Пеш аз ин Dushanbe Soft сомонаи расмии Президенти Ҷумҳурии Тоҷикистон ва портали хидматҳои электронии давлатии Digital Tajikistan-ро таҳия кардааст.",
          },
        ],
      },
    },
  },
  {
    id: "10",
    slug: "navo-radio",
    image: "/images/projects/navo.webp",
    heroImage: "/images/news/navo-radio-banner.webp",
    date: "2024",
    category: "media",
    readTime: "2 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.10.tag",
    defaultTag: "Медиа & OTT",
    titleKey: "news.items.10.title",
    defaultTitle: "Сайт радио «Navo» 96.5 FM — navo.tj",
    descKey: "news.items.10.desc",
    defaultDesc: "Dushanbe Soft разработала сайт радиостанции «Navo» 96.5 FM: программы и рубрики, подкасты, музыкальные подборки, фото- и видеогалерея и лента новостей.",
    fullContent: {
      lead: "Dushanbe Soft разработала официальный сайт радиостанции «Navo» 96.5 FM — navo.tj. Сайт объединяет эфирные программы, подкасты, музыку и новости радио в одном удобном портале.",
      caseSlug: "navo",
      techStack: ["Laravel", "React", "PostgreSQL", "Nginx"],
      sections: [
        {
          heading: "Что есть на сайте",
          text: "Структура портала повторяет жизнь радиостанции: слушатель быстро находит любимую программу, ведущего или подкаст.",
          bulletPoints: [
            "Программы и рубрики радио с описанием и ведущими",
            "Подкасты",
            "Музыка: Топ-20, таджикская и зарубежная подборки",
            "Медиа: фото- и видеогалерея",
            "Лента новостей и акции",
            "Контакты студии и прямой телефон эфира",
          ],
        },
        {
          heading: "Удобство для слушателей",
          text: "Сайт адаптирован под смартфоны и компьютеры, а ссылки на социальные сети радио — Telegram, Instagram, YouTube, TikTok и другие — собраны в одном месте.",
        },
      ],
    },
    localizedContent: {
      en: {
        lead: "Dushanbe Soft built the official website of «Navo» 96.5 FM radio — navo.tj. The site brings the station's programs, podcasts, music and news together in one convenient portal.",
        caseSlug: "navo",
        techStack: ["Laravel", "React", "PostgreSQL", "Nginx"],
        sections: [
          {
            heading: "What the site offers",
            text: "The portal mirrors the life of the station, so listeners quickly find their favourite show, host or podcast.",
            bulletPoints: [
              "Radio programs and rubrics with descriptions and hosts",
              "Podcasts",
              "Music: Top-20, Tajik and international selections",
              "Media: photo and video galleries",
              "News feed and promotions",
              "Studio contacts and the live on-air phone line",
            ],
          },
          {
            heading: "Built for listeners",
            text: "The site works on phones and desktops, and links to the station's social channels — Telegram, Instagram, YouTube, TikTok and more — are gathered in one place.",
          },
        ],
      },
      tj: {
        lead: "Dushanbe Soft сомонаи расмии радиои «Navo» 96.5 FM — navo.tj-ро таҳия кард. Сомона барномаҳо, подкастҳо, мусиқӣ ва хабарҳои радиоро дар як портали қулай муттаҳид мекунад.",
        caseSlug: "navo",
        techStack: ["Laravel", "React", "PostgreSQL", "Nginx"],
        sections: [
          {
            heading: "Дар сомона чӣ ҳаст",
            text: "Сохтори портал ҳаёти радиоро инъикос мекунад: шунаванда барнома, баранда ё подкасти дӯстдоштаашро зуд меёбад.",
            bulletPoints: [
              "Барномаҳо ва рубрикаҳои радио бо тавсиф ва барандагон",
              "Подкастҳо",
              "Мусиқӣ: Топ-20, интихоби тоҷикӣ ва хориҷӣ",
              "Медиа: галереяи акс ва видео",
              "Лентаи хабарҳо ва аксияҳо",
              "Тамосҳои студия ва телефони мустақими эфир",
            ],
          },
          {
            heading: "Қулай барои шунавандагон",
            text: "Сомона барои смартфонҳо ва компютерҳо мутобиқ карда шудааст, ва истинодҳо ба шабакаҳои иҷтимоии радио — Telegram, Instagram, YouTube, TikTok ва дигарон — дар як ҷо ҷамъ оварда шудаанд.",
          },
        ],
      },
    },
  },
  {
    id: "11",
    slug: "kontakio",
    image: "/images/projects/kontakio.webp",
    heroImage: "/images/news/kontakio-banner.webp",
    date: "11.11.2026",
    category: "saas",
    readTime: "3 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.11.tag",
    defaultTag: "SaaS & ИИ",
    titleKey: "news.items.11.title",
    defaultTitle: "Kontakio — новое имя LiveChat TJ: ИИ-платформа для общения с клиентами",
    descKey: "news.items.11.desc",
    defaultDesc: "LiveChat TJ теперь называется Kontakio и работает на домене kontakio.com. Вместе с новым именем платформа получила ИИ-оператора и ИИ-ассистента, встроенную CRM, работу с несколькими сайтами, а мобильное приложение для iOS и Android скоро появится в App Store и Google Play.",
    fullContent: {
      lead: "Наш собственный продукт LiveChat TJ получил новое имя — Kontakio. Теперь это ИИ-платформа для общения с клиентами: чат на сайте, Telegram, CRM и искусственный интеллект в одном окне. Сервис доступен на домене kontakio.com.",
      caseSlug: "kontakio",
      techStack: ["Laravel", "React", "Node.js", "Socket.IO", "MySQL", "React Native", "Claude AI"],
      sections: [
        {
          heading: "От LiveChat TJ к Kontakio",
          text: "LiveChat TJ начинался как онлайн-чат для сайтов. За это время продукт вырос в полноценную платформу для общения с клиентами, и мы дали ему новое имя и новый домен — kontakio.com. Dushanbe Soft разработала веб-кабинет, встраиваемый виджет, обмен сообщениями в реальном времени на сокетах и ИИ-модули, а также мобильное приложение, которое скоро выйдет в App Store и Google Play.",
        },
        {
          heading: "Что нового",
          text: "Kontakio заменяет набор разрозненных сервисов: чат, мессенджеры, заявки и клиентская база работают вместе.",
          bulletPoints: [
            "ИИ-оператор отвечает клиентам на сайте и в Telegram круглосуточно по вашей базе знаний и при необходимости передаёт диалог человеку",
            "ИИ-ассистент помогает операторам писать, редактировать и переводить ответы, резюмирует диалоги и составляет отчёты по чатам",
            "Несколько сайтов в одном аккаунте: у каждого свой виджет, настройки, ИИ-операторы, шаблоны и CRM",
            "Встроенная CRM: клиенты, сделки и задачи рядом с перепиской, собственные воронки и этапы",
            "Telegram-бот как канал общения и уведомления о новых диалогах в Telegram и на почту, SMS клиентам через ZudSMS",
            "Чат команды для общения коллег внутри кабинета",
            "Мобильное приложение для iOS и Android, чтобы отвечать клиентам с телефона, — скоро в App Store и Google Play",
            "Виджет на 8 языках — английском, русском, таджикском, узбекском, казахском, кыргызском, фарси и арабском — с поддержкой письма справа налево",
          ],
        },
        {
          heading: "Для кого и как начать",
          text: "Kontakio подойдёт компаниям, которые общаются с клиентами через сайт и Telegram: отделам продаж и службам поддержки. Чтобы начать, достаточно зарегистрироваться и вставить на сайт одну строку кода — установка занимает около пяти минут.",
          bulletPoints: [
            "7 дней бесплатно, без банковской карты",
            "Установка за 5 минут: одна строка кода, подходит для WordPress, Tilda, Bitrix и Shopify",
            "Оплата тарифа с баланса, в том числе через Alif и SmartPay",
          ],
        },
      ],
    },
    localizedContent: {
      en: {
        lead: "Our in-house product LiveChat TJ has a new name: Kontakio. It is now an AI platform for customer communication, bringing website chat, Telegram, a CRM and artificial intelligence together in one window. The service runs on kontakio.com.",
        caseSlug: "kontakio",
        techStack: ["Laravel", "React", "Node.js", "Socket.IO", "MySQL", "React Native", "Claude AI"],
        sections: [
          {
            heading: "From LiveChat TJ to Kontakio",
            text: "LiveChat TJ started as an online chat for websites. Since then the product has grown into a full customer communication platform, so we gave it a new name and a new domain: kontakio.com. Dushanbe Soft built the web dashboard, the embeddable widget, real-time messaging over sockets and the AI modules, as well as a mobile app that is coming soon to the App Store and Google Play.",
          },
          {
            heading: "What's new",
            text: "Kontakio replaces a set of separate tools: chat, messengers, requests and the customer base work together.",
            bulletPoints: [
              "The AI operator answers customers on the website and in Telegram around the clock from your knowledge base and hands the conversation to a person when needed",
              "The AI assistant helps operators write, edit and translate replies, summarises conversations and prepares chat reports",
              "Multiple websites in one account, each with its own widget, settings, AI operators, templates and CRM",
              "Built-in CRM: clients, deals and tasks next to the conversation, with your own pipelines and stages",
              "A Telegram bot as a channel, notifications about new chats in Telegram and by email, and SMS to customers via ZudSMS",
              "Team chat for colleagues inside the dashboard",
              "A mobile app for iOS and Android to reply to customers from your phone, coming soon to the App Store and Google Play",
              "A widget in 8 languages (English, Russian, Tajik, Uzbek, Kazakh, Kyrgyz, Persian and Arabic) with right-to-left support",
            ],
          },
          {
            heading: "Who it is for and how to start",
            text: "Kontakio suits companies that talk to customers through their website and Telegram, such as sales and support teams. To start, sign up and paste one line of code into your site; installation takes about five minutes.",
            bulletPoints: [
              "7 days free, no bank card required",
              "Installation in 5 minutes: one line of code that works with WordPress, Tilda, Bitrix and Shopify",
              "Plans are paid from the account balance, including via Alif and SmartPay",
            ],
          },
        ],
      },
      tj: {
        lead: "Маҳсулоти худии мо LiveChat TJ номи нав гирифт — Kontakio. Акнун ин платформаи зеҳни сунъӣ барои муошират бо мизоҷон аст: чат дар сайт, Telegram, CRM ва зеҳни сунъӣ дар як равзана. Хидмат дар домени kontakio.com дастрас аст.",
        caseSlug: "kontakio",
        techStack: ["Laravel", "React", "Node.js", "Socket.IO", "MySQL", "React Native", "Claude AI"],
        sections: [
          {
            heading: "Аз LiveChat TJ ба Kontakio",
            text: "LiveChat TJ ҳамчун чати онлайн барои сайтҳо оғоз ёфта буд. Дар ин муддат маҳсулот ба платформаи комили муошират бо мизоҷон табдил ёфт, бинобар ин мо ба он номи нав ва домени нав — kontakio.com додем. Dushanbe Soft кабинети веб, виҷети ҷойгиршаванда, мубодилаи паёмҳо дар вақти воқеӣ тавассути сокетҳо ва модулҳои зеҳни сунъиро таҳия кардааст, инчунин барномаи мобилиро, ки ба наздикӣ дар App Store ва Google Play пайдо мешавад.",
          },
          {
            heading: "Чӣ нав аст",
            text: "Kontakio маҷмӯи хидматҳои парокандаро иваз мекунад: чат, мессенҷерҳо, дархостҳо ва пойгоҳи мизоҷон якҷоя кор мекунанд.",
            bulletPoints: [
              "Оператори зеҳни сунъӣ шабонарӯзӣ дар сайт ва Telegram аз рӯи базаи донишҳои шумо ба мизоҷон ҷавоб медиҳад ва ҳангоми зарурат муколамаро ба инсон месупорад",
              "Ёрдамчии зеҳни сунъӣ ба операторон дар навиштан, таҳрир ва тарҷумаи ҷавобҳо кӯмак мекунад, муколамаҳоро ҷамъбаст мекунад ва ҳисобот оид ба чатҳо тартиб медиҳад",
              "Якчанд сайт дар як аккаунт: ҳар кадом виҷет, танзимот, операторони зеҳни сунъӣ, қолабҳо ва CRM-и худро дорад",
              "CRM-и дарунсохт: мизоҷон, аҳдҳо ва вазифаҳо дар паҳлӯи мукотиба, бо қифҳо ва марҳилаҳои худи шумо",
              "Боти Telegram ҳамчун канали муошират, огоҳиномаҳо дар бораи муколамаҳои нав дар Telegram ва ба почта, SMS ба мизоҷон тавассути ZudSMS",
              "Чати даста барои муоширати ҳамкорон дар дохили кабинет",
              "Барномаи мобилӣ барои iOS ва Android, то ба мизоҷон аз телефон ҷавоб диҳед, — ба наздикӣ дар App Store ва Google Play",
              "Виҷет бо 8 забон — англисӣ, русӣ, тоҷикӣ, ӯзбекӣ, қазоқӣ, қирғизӣ, форсӣ ва арабӣ — бо дастгирии навиштан аз рост ба чап",
            ],
          },
          {
            heading: "Барои кӣ ва чӣ тавр оғоз кардан",
            text: "Kontakio ба ширкатҳое мувофиқ аст, ки бо мизоҷон тавассути сайт ва Telegram муошират мекунанд: шуъбаҳои фурӯш ва хадамоти дастгирӣ. Барои оғоз кифоя аст, ки сабти ном кунед ва як сатр кодро ба сайт гузоред — насб тақрибан панҷ дақиқа вақт мегирад.",
            bulletPoints: [
              "7 рӯз ройгон, бе корти бонкӣ",
              "Насб дар 5 дақиқа: як сатр код, барои WordPress, Tilda, Bitrix ва Shopify мувофиқ аст",
              "Пардохти тариф аз баланс, аз ҷумла тавассути Alif ва SmartPay",
            ],
          },
        ],
      },
    },
  },
  {
    id: "12",
    slug: "gems",
    image: "/images/projects/gems.webp",
    heroImage: "/images/news/gems-banner.webp",
    date: "14.11.2026",
    category: "retail",
    readTime: "3 мин",
    author: "Команда Dushanbe Soft",
    tagKey: "news.items.12.tag",
    defaultTag: "E-Commerce",
    titleKey: "news.items.12.title",
    defaultTitle: "Gems: запустили магазин доната в игры с оплатой в сомони",
    descKey: "news.items.12.desc",
    defaultDesc: "Dushanbe Soft разработала gems.tj — сервис, где игроки из Таджикистана покупают алмазы Free Fire, UC PUBG Mobile и другой донат по ID игрока. Оплата в сомони через Душанбе Сити, Алиф и SmartPay, выдача автоматически, обычно за минуту.",
    fullContent: {
      lead: "Мы запустили Gems (gems.tj) — магазин доната для игроков Таджикистана. Алмазы Free Fire, UC PUBG Mobile и валюту других игр можно купить в сомони, без зарубежной карты и без пароля от аккаунта: нужен только ID игрока, а донат приходит автоматически, обычно за минуту.",
      caseSlug: "gems",
      techStack: ["Next.js", "React", "Laravel", "REST API", "SmartPay", "Cloudflare"],
      sections: [
        {
          heading: "Какую задачу решает Gems",
          text: "Игрокам из Таджикистана сложно пополнить игру напрямую: магазины внутри игр принимают зарубежные карты и считают цены в другой валюте. Gems принимает оплату в сомони через привычные местные способы и сам доставляет валюту на аккаунт по ID — так же, как официальный магазин внутри игры.",
        },
        {
          heading: "Как устроена покупка",
          text: "Мы спроектировали путь покупки из четырёх шагов, чтобы заказ занимал около минуты.",
          bulletPoints: [
            "Выбор игры и пакета: алмазы с бонусами, недельные и месячные ваучеры",
            "Ввод ID игрока и проверка: ник аккаунта показывается до оплаты, чтобы не ошибиться",
            "Оплата в сомони: Душанбе Сити и Алиф по QR-коду в одно касание, SmartPay — картой любого банка Таджикистана, в приложении банка или по QR; для покупателей из России есть СБП и карта РФ",
            "Автоматическая выдача без менеджеров, обычно за 1–2 минуты, со статусом заказа в разделе «Мои заказы»",
          ],
        },
        {
          heading: "Что ещё есть на сайте",
          text: "Помимо витрины и оформления заказа, Dushanbe Soft разработала всё, что нужно для доверия покупателей и роста продаж.",
          bulletPoints: [
            "Отзывы, которые можно оставить только после выполненного заказа, и средний рейтинг на отдельной странице",
            "Полный возврат денег, если заказ не выполнен, и понятные документы: оферта, политика возвратов, конфиденциальность и реквизиты",
            "Промокоды на первый заказ и Telegram-канал с еженедельными розыгрышами алмазов",
            "Интерфейс на русском и таджикском языках, светлая и тёмная тема, удобная навигация на телефоне",
          ],
        },
      ],
    },
    localizedContent: {
      en: {
        lead: "We have launched Gems (gems.tj), a game top-up store for players in Tajikistan. Free Fire diamonds, PUBG Mobile UC and other in-game currency can be bought in somoni, with no foreign card and no account password: only the player ID is needed, and the top-up arrives automatically, usually within a minute.",
        caseSlug: "gems",
        techStack: ["Next.js", "React", "Laravel", "REST API", "SmartPay", "Cloudflare"],
        sections: [
          {
            heading: "The problem Gems solves",
            text: "Players in Tajikistan find it hard to top up a game directly: in-game stores accept foreign cards and price items in another currency. Gems accepts payment in somoni through familiar local methods and delivers the currency to the account by ID, just like the official in-game store.",
          },
          {
            heading: "How a purchase works",
            text: "We designed a four-step purchase flow so that an order takes about a minute.",
            bulletPoints: [
              "Choose a game and a package: diamonds with bonuses, weekly and monthly vouchers",
              "Enter and check the player ID: the account nickname is shown before payment to avoid mistakes",
              "Pay in somoni: Dushanbe City and Alif via a one-tap QR code, SmartPay with any Tajik bank card, in a banking app or by QR; buyers from Russia can use SBP or a Russian card",
              "Automatic delivery without managers, usually within 1–2 minutes, with the order status in My orders",
            ],
          },
          {
            heading: "What else the site offers",
            text: "Beyond the storefront and checkout, Dushanbe Soft built everything needed for buyer trust and sales growth.",
            bulletPoints: [
              "Reviews that can only be left after a completed order, with an average rating on a separate page",
              "A full refund if an order fails, and clear documents: the offer, refund policy, privacy policy and company details",
              "First-order promo codes and a Telegram channel with weekly diamond giveaways",
              "An interface in Russian and Tajik, light and dark themes and easy navigation on phones",
            ],
          },
        ],
      },
      tj: {
        lead: "Мо Gems (gems.tj)-ро ба кор андохтем — мағозаи донат барои бозингарони Тоҷикистон. Алмосҳои Free Fire, UC PUBG Mobile ва асъори дигар бозиҳоро ба сомонӣ, бе корти хориҷӣ ва бе пароли аккаунт харидан мумкин аст: танҳо ID-и бозингар лозим аст ва донат худкор, одатан дар як дақиқа меояд.",
        caseSlug: "gems",
        techStack: ["Next.js", "React", "Laravel", "REST API", "SmartPay", "Cloudflare"],
        sections: [
          {
            heading: "Gems кадом масъаларо ҳал мекунад",
            text: "Барои бозингарони Тоҷикистон пур кардани бозӣ бевосита душвор аст: мағозаҳои дохили бозиҳо кортҳои хориҷиро қабул мекунанд ва нархҳоро бо асъори дигар ҳисоб мекунанд. Gems пардохтро ба сомонӣ бо усулҳои шиносои маҳаллӣ қабул мекунад ва асъорро аз рӯи ID ба аккаунт мерасонад — ҳамон тавре ки мағозаи расмии дохили бозӣ.",
          },
          {
            heading: "Харид чӣ тавр сурат мегирад",
            text: "Мо раванди харидро аз чор қадам тарҳрезӣ кардем, то фармоиш тақрибан як дақиқа вақт гирад.",
            bulletPoints: [
              "Интихоби бозӣ ва баста: алмосҳо бо бонус, ваучерҳои ҳафтаина ва моҳона",
              "Ворид ва санҷиши ID-и бозингар: лақаби аккаунт пеш аз пардохт нишон дода мешавад, то хато нашавад",
              "Пардохт ба сомонӣ: Душанбе Сити ва Алиф бо QR-код дар як ламс, SmartPay — бо корти ҳар бонки Тоҷикистон, дар барномаи бонк ё бо QR; барои харидорон аз Русия СБП ва корти Русия мавҷуд аст",
              "Супориши худкор бе менеҷер, одатан дар 1–2 дақиқа, бо ҳолати фармоиш дар бахши «Фармоишҳои ман»",
            ],
          },
          {
            heading: "Дар сомона боз чӣ ҳаст",
            text: "Ғайр аз витрина ва фармоиш, Dushanbe Soft ҳама чизеро таҳия кард, ки барои эътимоди харидорон ва афзоиши фурӯш лозим аст.",
            bulletPoints: [
              "Шарҳҳое, ки танҳо пас аз иҷрои фармоиш гузошта мешаванд, ва рейтинги миёна дар саҳифаи алоҳида",
              "Баргардонидани пурраи пул, агар фармоиш иҷро нашавад, ва ҳуҷҷатҳои фаҳмо: оферта, сиёсати баргардонидан, махфият ва реквизитҳо",
              "Промокодҳо барои фармоиши аввал ва канали Telegram бо бозиҳои бурдбурди ҳафтаинаи алмос",
              "Интерфейс бо забонҳои русӣ ва тоҷикӣ, мавзӯи равшан ва торик ва роҳнамоии қулай дар телефон",
            ],
          },
        ],
      },
    },
  },
];

// Pinned news go first in this exact order; the rest follow newest first.
// The home page shows the first four.
const pinnedOrder = [
  "world-bank-tajikistan-digital-foundations",
  "mavji-somon",
  "sohktor",
  "navo-radio",
];

export const newsList: NewsItem[] = [...newsItems].sort((a, b) => {
  const pa = pinnedOrder.indexOf(a.slug);
  const pb = pinnedOrder.indexOf(b.slug);
  if (pa !== -1 || pb !== -1) {
    return (pa === -1 ? Infinity : pa) - (pb === -1 ? Infinity : pb);
  }
  const iso = (d: string) => d.split(".").reverse().join("-");
  return iso(b.date).localeCompare(iso(a.date));
});

export function getNewsContent(item: NewsItem, lang: string): NewsFullContent {
  const content = contentLocale(lang);
  if (content === "en" || content === "tj") return item.localizedContent?.[content] ?? item.fullContent;
  return item.fullContent;
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsList.find((item) => item.slug === slug);
}

export function getRelatedNews(currentSlug: string, count: number = 3): NewsItem[] {
  return newsList.filter((item) => item.slug !== currentSlug).slice(0, count);
}
