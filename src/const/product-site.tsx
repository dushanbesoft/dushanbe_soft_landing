import { TranslatedString } from "../utils/translation";

export interface ProductSiteItem {
  imageSrc: string;
  bannerSrc?: string;
  bannerFit?: "cover" | "contain";
  year: string;
  tags: string[];
  slug: string;
  gallery?: string[];
  projectComponents?: {
    tabName: TranslatedString;
    items: {
      slug: string;
      title: TranslatedString;
      imageSrc: string;
      BannerSrc: string;
      shortInfo: TranslatedString;
      fullInfo: TranslatedString;
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
    // gallery: [
    //   "/images/projects/president/banner.png",
    //   "/images/projects/president/gallery-1.png",
    //   "/images/projects/president/gallery-2.png",
    // ],
    projectComponents: [
      {
        tabName: "Web-сайт",
        items: [
          {
            slug: "gallery-1",
            title: "Главный экран и Каналы",
            imageSrc: "/images/projects/president/gallery-1.png",
            BannerSrc: "/images/projects/president/gallery-1.png",
            shortInfo: "Карусель новинок и Live TV",
            fullInfo:
              "Верхняя часть главной страницы сайта представляет собой продуманный интерфейс для быстрого доступа к контенту. В шапке (Header) расположено главное меню с разделами: Фильмы, Сериалы, Мультфильмы, Таджикские фильмы, Репортажи, Радио и ТВ. Также здесь реализован глобальный поиск, переключатель языков, смена темы (светлая/темная) и виджет профиля пользователя с отображением текущего баланса.\n\nОсновное внимание привлекает масштабный Hero-баннер — анимированная карусель с главными премьерами (например, фильм «ГНЕВ»). Баннер плавно перелистывается и имеет удобные элементы управления по бокам. Сразу под ним находится блок «Каналы» с горизонтальной прокруткой, предлагающий быстрый доступ к популярным национальным и спортивным телеканалам (Точикистон, Сафина, Чахоннамо, Варзиш, Футбол HD, Синамо).",
          },
        ],
      },
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
        tabName: { ru: "Web-сайт", en: "Website", tj: "Веб-сайт" },
        items: [
          {
            slug: "web-hero",
            title: {
              ru: "Главный экран и Каналы",
              en: "Main Screen and Channels",
              tj: "Экрани асосӣ ва Шабакаҳо",
            },
            imageSrc: "/images/projects/mavjisomon/web-hero4.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero4.png",
            shortInfo: {
              ru: "Карусель новинок и Live TV",
              en: "Carousel of new releases and Live TV",
              tj: "Карусели навгониҳо ва Live TV",
            },
            fullInfo: {
              ru: `Архитектура и функциональность первого экрана главной страницы

Верхняя часть главной страницы сайта представляет собой продуманный интерфейс для быстрого доступа к контенту. В шапке (Header) расположено главное меню с разделами: «Фильмы», «Сериалы», «Мультфильмы», «Таджикские фильмы», «Репортажи», «Радио» и «ТВ». Также здесь реализован глобальный поиск, переключатель языков, смена темы (светлая/темная) и виджет профиля пользователя с отображением текущего баланса.

Основное внимание привлекает масштабный Hero-баннер — анимированная карусель с главными премьерами (например, фильм «ГНЕВ»). Баннер плавно перелистывается и имеет удобные элементы управления по бокам. Сразу под ним находится блок «Каналы» с горизонтальной прокруткой, предлагающий быстрый доступ к популярным национальным и спортивным телеканалам («Тоҷикистон», «Сафина», «Ҷаҳоннамо», «Варзиш», «Футбол HD», «Синамо»).
1. Эргономика шапки (Header) и персональные сервисы

Шапка платформы спроектирована по принципу «все важное на расстоянии одного клика» и закрепляется в верхней части экрана при скролле (sticky header), сохраняя доступ к ключевым инструментам в любой момент.

    Тематическая навигация: Особый акцент сделан на балансе мирового и локального контента. Выделение категорий «Таджикские фильмы», «Репортажи» и «Радио» в основной навигационный ряд подчеркивает культурную и информационную идентичность сервиса, удовлетворяя запросы широкой аудитории.

    Глобальный «умный» поиск: Интерактивная поисковая строка оснащена механизмами автодополнения, подсказками популярных запросов и фильтрацией по актерам, режиссерам и жанрам, позволяя находить нужный материал за доли секунды.

    Кастомизация и профиль: Переключатель темы (светлая/темная) снижает нагрузку на глаза в вечернее время, а мультиязычность обеспечивает удобство для разноязычной аудитории. Блок личного кабинета объединяет управление подпиской, быстрый доступ к избранному и наглядный виджет баланса, что упрощает мгновенную оплату премьер и продление тарифных планов без перехода в сложные настройки.

2. Интерактивный Hero-баннер как витрина премьер

Центральная визуальная доминанта страницы — кинематографичный Hero-слайдер — выполняет роль ключевого промо-инструмента платформы:

    Визуальная подача: Баннер использует адаптивные фоновые постеры высокого разрешения, краткий синопсис, возрастные метки (16+, 18+) и рейтинговые плашки. Внедрение динамических микроанимаций при смене слайдов вовлекает зрителя с первых секунд.

    Фокус на действие (Call-to-Action): Каждая карточка баннера снабжена прямыми кнопками «Смотреть онлайн», «Трейлер» и «В избранное», сокращая путь пользователя от первого взгляда до запуска видеопотока.

    Контроль навигации: Помимо боковых стрелок ручного перелистывания, карусель оснащена временным индикатором автопрокрутки и точечной пагинацией, позволяющей быстро вернуться к заинтересовавшему анонсу.

3. Модуль прямого эфира: блок «Каналы»

Расположенный непосредственно под главным баннером блок эфирного вещания органично соединяет формат классического телевидения и современного стриминга:

    Горизонтальный скролл (Carousel): Компактная лента карточек с логотипами каналов («Тоҷикистон», «Сафина», «Ҷаҳоннамо», «Варзиш», «Футбол HD», «Синамо») дает возможность переключаться между ними в один жест или клик.

    Интерактивные карточки телеканалов: Карточки отображают не только брендовые эмблемы, но и плашку «В эфире», а также название текущей передачи с индикатором прогресса трансляции. Это позволяет зрителю мгновенно сориентироваться в сетке вещания без необходимости открывать отдельную страницу телепрограммы.

    Мгновенный переход к стриму: Клик по каналу сразу запускает прямой эфир с низкой задержкой (low-latency streaming), создавая привычный опыт «включения телевизора» прямо в веб-браузере.`,
              en: `Architecture and functionality of the main page first screen

The upper part of the site's main page is a well-thought-out interface for quick access to content. The Header features the main menu with sections: "Movies", "Series", "Cartoons", "Tajik Films", "Reports", "Radio", and "TV". It also includes global search, language switcher, theme toggle (light/dark), and a user profile widget displaying the current balance.

The main focus is drawn to the massive Hero-banner — an animated carousel featuring major premieres. The banner scrolls smoothly and has convenient side controls. Right below it is the "Channels" block with horizontal scrolling, offering quick access to popular national and sports TV channels.

1. Header ergonomics and personal services

The platform's header is designed on the principle of "everything important is one click away" and is fixed at the top during scrolling (sticky header).

    Thematic navigation: Special emphasis is placed on balancing global and local content. Highlighting categories like "Tajik Films" and "Radio" emphasizes cultural identity.
    Global "smart" search: Equipped with autocomplete, popular queries, and filters by actors, directors, and genres.
    Customization and profile: Dark/light theme switcher reduces eye strain. The personal account block combines subscription management and a balance widget for instant payments.

2. Interactive Hero-banner as a premiere showcase

The central visual dominant — the cinematic Hero-slider — serves as the platform's key promo tool:

    Visual presentation: Uses adaptive high-resolution background posters, short synopsis, age ratings, and badges. Dynamic micro-animations engage the viewer.
    Call-to-Action: Each card has direct buttons for "Watch online", "Trailer", and "Add to favorites".
    Navigation control: Equipped with a time indicator for auto-scrolling and dot pagination.

3. Live broadcast module: "Channels" block

Connecting classic TV format and modern streaming:

    Horizontal scroll (Carousel): A compact ribbon of channel cards.
    Interactive TV channel cards: Show the "Live" badge and the current broadcast name with a progress indicator.
    Instant stream transition: Clicking a channel immediately starts the low-latency live broadcast.`,
              tj: `Меъморӣ ва функсияҳои экрани якуми саҳифаи асосӣ

Қисми болоии саҳифаи асосии сайт интерфейси фикркардашуда барои дастрасии зуд ба муҳтаво мебошад. Дар қисми болоӣ (Header) менюи асосӣ бо бахшҳои: "Филмҳо", "Силсилафилмҳо", "Тасвирӣ", "Филмҳои тоҷикӣ", "Репортажҳо", "Радио" ва "ТВ" ҷойгир шудааст. Инчунин дар ин ҷо ҷустуҷӯи глобалӣ, ивазкунандаи забонҳо, ивази мавзӯъ ва виҷети профили корбар ҷойгир аст.

Таваҷҷӯҳи асосиро баннери азими Hero ҷалб мекунад — карусели аниматсионӣ бо нахустнамоишҳои асосӣ. Дарҳол дар зери он блоки "Шабакаҳо" бо ҳаракати уфуқӣ ҷойгир аст, ки дастрасии зудро ба шабакаҳои телевизионии миллӣ ва варзишӣ пешниҳод мекунад.

1. Эргономикаи сарлавҳа (Header) ва хидматҳои инфиродӣ

Сарлавҳаи платформа бо принсипи "ҳама чизҳои муҳим дар масофаи як клик" тарҳрезӣ шудааст.

    Навигатсияи мавзӯӣ: Таваҷҷӯҳи махсус ба мувозинати муҳтавои ҷаҳонӣ ва маҳаллӣ дода шудааст.
    Ҷустуҷӯи глобалии "зирак": Бо механизмҳои пуркунии худкор, маслиҳатҳо ва филтр аз рӯи актёрҳо ва жанрҳо муҷаҳҳаз шудааст.
    Танзимот ва профил: Ивазкунандаи мавзӯъ (равшан/торик) ва бисёрзабонӣ.

2. Баннери интерактивии Hero ҳамчун витринаи нахустнамоишҳо

Слайдери кинематографӣ ҳамчун воситаи асосии таблиғотӣ хизмат мекунад:

    Пешниҳоди визуалӣ: Постерҳои баландсифат, синопсиси кӯтоҳ ва нишонаҳои синнусолӣ.
    Даъват ба амал (Call-to-Action): Тугмаҳои мустақими "Тамошо онлайн", "Трейлер" ва "Ба писандидаҳо".
    Назорати навигатсия: Нишондиҳандаи вақт барои гардиши худкор ва пагинатсияи нуқтавӣ.

3. Модули пахши мустақим: блоки "Шабакаҳо"

Пайваст кардани формати телевизиони классикӣ ва стринминги муосир:

    Скролли уфуқӣ: Лентаи паймон бо логотипҳои шабакаҳо.
    Кортҳои интерактивии шабакаҳо: Нишонаи "Дар эфир" ва номи барномаи ҷорӣ бо нишондиҳандаи пешрафт.
    Гузариши фаврӣ ба стрим: Пахши мустақим бо таъхири кам (low-latency streaming).`,
            },
          },
          {
            slug: "web-platforms",
            title: {
              ru: "Поддерживаемые Платформы",
              en: "Supported Platforms",
              tj: "Платформаҳои Дастгиришаванда",
            },
            imageSrc: "/images/projects/mavjisomon/web-platform4.png",
            BannerSrc: "/images/projects/mavjisomon/web-platform4.png",
            shortInfo: {
              ru: "Интеграция с ОС",
              en: "OS Integration",
              tj: "Ҳамгироӣ бо ОС",
            },
            fullInfo: {
              ru: `Проект Mavji Somon не ограничивается только веб-версией, и этот компонент интерфейса наглядно демонстрирует полную кроссплатформенность сервиса. На сайте представлен лаконичный блок с узнаваемыми монохромными иконками трех главных экосистем: Android, iOS (Apple) и Smart TV.

Наличие этого блока информирует пользователей о том, что для каждой из этих операционных систем разработано специализированное нативное приложение. Веб-сайт служит не только как самостоятельный портал для просмотра видео, но и как центральная точка входа, откуда пользователи могут узнать о доступности сервиса на своих любимых устройствах и подготовиться к переходу на мобильный или ТВ-формат просмотра.

 Экосистемный подход и непрерывность опыта 

Стратегия доступности платформы выстроена вокруг принципа бесшовного пользовательского опыта (*seamless experience*). Современный зритель не привязан к одной точке: он начинает просмотр утреннего выпуска новостей на смартфоне в дороге, продолжает знакомство с познавательной программой на рабочем компьютере через веб-интерфейс, а вечерний фильм или сериал включает на большом экране гостиной.

 iOS и iPadOS:  Нативная оптимизация под устройства Apple гарантирует высокую энергоэффективность, плавность интерфейса благодаря поддержке ProMotion, интеграцию с системным плеером и технологией AirPlay для мгновенной трансляции для платформ 

Мультиплатформенная модель Mavji Somon опирается на единый бэкенд, связывающий приложения между собой:

 Сквозная синхронизация истории:  Отметка времени сохраняется в облаке в режиме реального времени — воспроизведение возобновляется ровно с той секунды, на которой пользователь остановился на другом устройстве.
 Единый профиль и избранное:  Персональные списки «Посмотреть позже», история поисковых запросов и индивидуальные настройки субтитров/дорожек доступны везде сразу после авторизации.
 Адаптивный битрейт:  Алгоритмы платформы автоматически подстраивают качество видеопотока под экран конкретного девайса и текущую пропускную способность канала, предотвращая задержки.

Минималистичный блок иконок на веб-сайте выполняет роль прямого навигационного моста: клик по соответствующему логотипу мгновенно перенаправляет пользователя в официальные магазины приложений (Google Play, App Store) или открывает инструкцию по быстрой установке клиента на телевизор с помощью QR-кода. Такой подход снижает порог входа, укрепляет доверие аудитории к технологической зрелости Mavji Somon и превращает сервис в универсальную медиасреду, готовую к работе на любом экране.`,
              en: `The Mavji Somon project is not limited to the web version alone, and this interface component clearly demonstrates the full cross-platform nature of the service. The site features a concise block with recognizable monochrome icons of three main ecosystems: Android, iOS (Apple), and Smart TV.

The presence of this block informs users that a specialized native application has been developed for each of these operating systems. The website serves not only as a standalone portal for watching videos but also as a central entry point.

 Ecosystem approach and seamless experience

The platform's accessibility strategy is built around the principle of a seamless experience. A modern viewer is not tied to one point: they start watching morning news on a smartphone, continue exploring a program on a work computer via the web interface, and turn on an evening movie on a large living room screen.

 iOS and iPadOS: Native optimization for Apple devices guarantees high energy efficiency, interface smoothness thanks to ProMotion support, integration with the system player, and AirPlay technology.

The multi-platform model of Mavji Somon relies on a unified backend connecting the applications:

 End-to-end history synchronization: The timestamp is saved in the cloud in real-time — playback resumes from the exact second the user stopped on another device.
 Unified profile and favorites: Personal lists, search history, and individual subtitle/audio settings are available everywhere immediately after authorization.
 Adaptive bitrate: The platform's algorithms automatically adjust video stream quality to the screen of a specific device and current network bandwidth.

The minimalist icon block on the website acts as a direct navigation bridge redirecting the user to official app stores (Google Play, App Store) or opening quick installation instructions for TV via a QR code.`,
              tj: `Лоиҳаи Mavji Somon танҳо бо версияи веб маҳдуд намешавад ва ин ҷузъи интерфейс кросс-платформаи пурраи хидматро ба таври равшан нишон медиҳад. Дар сайт блоки мухтасар бо нишонаҳои экосистемаҳои асосӣ пешниҳод шудааст: Android, iOS (Apple) ва Smart TV.

Мавҷудияти ин блок корбаронро огоҳ мекунад, ки барои ҳар як системаи оператсионӣ замимаи махсус таҳия шудааст. Вебсайт на танҳо ҳамчун портали мустақил барои тамошои видео, балки ҳамчун нуқтаи марказии вуруд хизмат мекунад.

 Муносибати экосистема ва таҷрибаи бефосила

Стратегияи дастрасии платформа дар атрофи принсипи таҷрибаи бефосила (seamless experience) сохта шудааст. Тамошобини муосир ба як нуқта вобаста нест: вай тамошои ахборро дар смартфон оғоз мекунад, дар компютери корӣ идома медиҳад ва филми шомро дар экрани калон тамошо мекунад.

 iOS ва iPadOS: Оптимизатсия барои дастгоҳҳои Apple самаранокии баланд, интерфейси ҳамвор бо дастгирии ProMotion, ҳамгироӣ бо плеери система ва AirPlay-ро кафолат медиҳад.

Модели бисёрплатформавии Mavji Somon ба бэкенди ягона такя мекунад:

 Синхронизатсияи таърих: Вақти тамошо дар абр нигоҳ дошта мешавад — навозиш маҳз аз ҳамон сонияе, ки корбар дар дастгоҳи дигар қатъ карда буд, давом мекунад.
 Профили ягона ва писандидаҳо: Рӯйхатҳои шахсӣ ва таърихи ҷустуҷӯ фавран пас аз авторизатсия дар ҳама ҷо дастрасанд.
 Битрейти адаптивӣ: Алгоритмҳо сифати видеоро ба таври худкор танзим мекунанд.

Блоки минималистии нишонаҳо дар вебсайт ҳамчун пули навигатсионӣ хизмат мекунад: клик кардан ба логотип корбарро ба мағозаҳои расмӣ (Google Play, App Store) равона мекунад ё дастури насбро дар телевизор тавассути рамзи QR мекушояд.`,
            },
          },
          {
            slug: "web-recommendations-top",
            title: {
              ru: "Главная страница и Каталог",
              en: "Home Page and Catalog",
              tj: "Саҳифаи асосӣ ва Каталог",
            },
            imageSrc: "/images/projects/mavjisomon/web-recommendations-top.png",
            BannerSrc:
              "/images/projects/mavjisomon/web-recommendations-top.png",
            shortInfo: {
              ru: "Умная система подборок",
              en: "Smart recommendations system",
              tj: "Системаи тавсияҳои ҳушманд",
            },
            fullInfo: {
              ru: `Архитектура контентной витрины и визуальная эргономика Mavji Somon

Главная страница Mavji Somon спроектирована так, чтобы максимально упростить зрителю поиск интересного контента среди тысяч фильмов и сериалов. Верхняя навигационная панель обеспечивает быстрый доступ к основным разделам («Фильмы», «Сериалы», «Мультфильмы», «ТВ» и др.), а также содержит инструменты поиска и смены языка.

Основное пространство экрана разделено на тематические подборки: «Рекомендуем посмотреть», «Новинки» и «Фильмы с высоким рейтингом». Подобный интерфейс с горизонтальным скроллом карточек позволяет разместить огромный массив контента без визуального перегруза. Темная тема (Dark Mode) снижает нагрузку на глаза при просмотре в вечернее время, а яркие постеры высокого разрешения сразу привлекают внимание пользователя, стимулируя его к началу просмотра.
1. Структурная модульность и горизонтальные конвейеры (Carousels)

Основой визуального ритма платформы выступает модульная сетка, построенная на чередовании тематических рядов-каруселей:

    Интуитивная навигация жестами и скроллом: Горизонтальные ленты дают возможность легко пролистывать десятки наименований в рамках одной категории, не покидая текущего экрана. Для пользователей ПК предусмотрены плавные боковые стрелки навигации с динамической прозрачностью, а для мобильных устройств — нативный свайп с инерционной прокруткой.

    Отсутствие когнитивного шума: Вместо монотонного списка вся библиотека разбита на четко различимые визуальные кластеры. Заголовки блоков сопровождаются ссылкой «Смотреть все», открывающей расширенную страницу каталога с расширенными фильтрами по годам, странам и жанрам.

2. Интеллектуальная персонализация ленты

Каждая подборка выполняет определенную роль в удержании аудитории и повышении вовлеченности:

    «Рекомендуем посмотреть»: Блок формируется алгоритмической системой рекомендаций на основе истории просмотров, досмотренных до конца картин и выставленных пользователем оценок. Это сокращает время так называемой «усталости от выбора» (decision fatigue), предлагая фильм под индивидуальное настроение зрителя.

    «Новинки»: Свежие релизы, фестивальные картины и эксклюзивные премьеры выводятся на витрину с заметными информационными бейджами («Премьера», «Новый сезон», «Эксклюзив»), стимулируя интерес к регулярному возвращению на сервис.

    «Фильмы с высоким рейтингом»: Социальное доказательство качества — лента проектов с наивысшими оценками зрителей и мировых кинорейтингов (IMDb, Кинопоиск, внутренние оценки Mavji Somon).

3. Интерактивные карточки и микроанимации

Каждый элемент в ленте — это самостоятельный микроинтерфейс:

    Поведение при наведении (Hover Effect): При наведении курсора карточка плавно масштабируется, выводя поверх постера ключевую метаинформацию: жанр, хронометраж, возрастной рейтинг (12+, 16+, 18+), качество дорожки (Full HD, 4K) и год выпуска.

    Мгновенные действия: Прямо из карточки доступны кнопки быстрого запуска трейлера, добавления в персональный плейлист «Посмотреть позже» или отметки «Нравится», избавляя пользователя от необходимости заходить на страницу описания фильма.

4. Эстетика Dark Mode и акцент на медиаконтенте

Использование глубокой темной палитры в оформлении фона — стандарт современного премиального стриминга:

    Контрастные фоны усиливают сочность и кинематографичность постеров, делая графику центральным объектом внимания.

    Общая визуальная чистота подчеркивает технологичность сервиса Mavji Somon, превращая повседневный выбор фильма в комфортный эстетический процесс.`,
              en: `Content showcase architecture and visual ergonomics of Mavji Somon

The Mavji Somon home page is designed to make it as easy as possible for viewers to find interesting content among thousands of movies and series. The top navigation panel provides quick access to main sections ("Movies", "Series", "Cartoons", "TV", etc.), as well as search and language switcher tools.

The main screen space is divided into thematic collections: "Recommended to watch", "New releases", and "Highly rated movies". This interface with horizontal card scrolling allows accommodating a huge amount of content without visual clutter. Dark Mode reduces eye strain during evening viewing, and bright high-resolution posters immediately attract the user's attention.

1. Structural modularity and horizontal Carousels

The visual rhythm of the platform is based on a modular grid built on the alternation of thematic carousel rows:

    Intuitive gesture and scroll navigation: Horizontal ribbons make it easy to scroll through dozens of titles within one category without leaving the current screen.
    No cognitive noise: Instead of a monotonous list, the entire library is divided into distinct visual clusters.

2. Intelligent feed personalization

Each collection plays a specific role in audience retention:

    "Recommended to watch": Formed by an algorithmic recommendation system based on viewing history.
    "New releases": Fresh releases, festival pictures, and exclusive premieres.
    "Highly rated movies": Social proof of quality — projects with the highest ratings.

3. Interactive cards and micro-animations

Each element in the feed is an independent micro-interface:

    Hover Effect: When hovering, the card scales smoothly, displaying key meta-information over the poster.
    Instant actions: Quick buttons for launching a trailer or adding to the "Watch later" playlist are available right from the card.

4. Dark Mode aesthetics and focus on media content

Using a deep dark palette is a standard in modern premium streaming.`,
              tj: `Меъмории витринаи контент ва эргономикаи визуалии Mavji Somon

Саҳифаи асосии Mavji Somon тавре тарҳрезӣ шудааст, ки ҷустуҷӯи контенти ҷолибро дар байни ҳазорҳо филмҳо ва силсилафилмҳо то ҳадди имкон осон кунад. Панели навигатсионии болоӣ дастрасии зудро ба бахшҳои асосӣ фароҳам меорад.

Фазои асосии экран ба маҷмӯаҳои мавзӯӣ тақсим шудааст: "Барои тамошо тавсия медиҳем", "Навгониҳо" ва "Филмҳои дорои рейтинги баланд". Ин интерфейс бо ҳаракати уфуқии кортҳо имкон медиҳад, ки миқдори зиёди контент бе сарбории визуалӣ ҷойгир карда шавад.

1. Модулияти сохторӣ ва Каруселҳои уфуқӣ

Асоси ритми визуалии платформа шабакаи модулӣ мебошад:

    Навигатсияи интуитивӣ бо имову ишора ва скролл: Лентаҳои уфуқӣ имкон медиҳанд, ки даҳҳо номгуи филмро дар дохили як категория ба осонӣ варақ занед.
    Набудани садои когнитивӣ: Ба ҷои рӯйхати якранг, тамоми китобхона ба кластерҳои визуалии равшан тақсим шудааст.

2. Персонализатсияи зеҳнии лента

Ҳар як маҷмӯа дар нигоҳ доштани аудитория нақши муайян мебозад:

    "Тавсия медиҳем": Тавассути системаи тавсияҳои алгоритмӣ ташаккул меёбад.
    "Навгониҳо": Релизҳои тоза ва нахустнамоишҳои эксклюзивӣ.
    "Филмҳои дорои рейтинги баланд": Далели иҷтимоии сифат — лоиҳаҳо бо баҳодиҳии баландтарин.

3. Кортҳои интерактивӣ ва микроаниматсияҳо

Ҳар як унсур дар лента микро-интерфейси мустақил аст:

    Таъсири ҳаракат (Hover Effect): Ҳангоми ҳаракат додани муш, корт ба таври ҳамвор васеъ мешавад.
    Амалҳои фаврӣ: Тугмаҳои зуд барои оғоз кардани трейлер ё илова кардан ба рӯйхат.

4. Эстетикаи Dark Mode ва таваҷҷӯҳ ба муҳтавои медиа

Истифодаи палитраи торик стандарти стриминги муосир аст.`,
            },
          },
          {
            slug: "web-allfilms",
            title: {
              ru: "Каталог: Все фильмы",
              en: "Catalog: All Movies",
              tj: "Каталог: Ҳамаи филмҳо",
            },
            imageSrc: "/images/projects/mavjisomon/web-allfilms.png",
            BannerSrc: "/images/projects/mavjisomon/web-allfilms.png",
            shortInfo: {
              ru: "Полный архив и удобные фильтры",
              en: "Complete archive and convenient filters",
              tj: "Бойгонии пурра ва филтрҳои қулай",
            },
            fullInfo: {
              ru: `Архитектура каталога «Все фильмы»: навигация, фильтрация и визуальная организация

Раздел «Все фильмы» представляет собой обширный архив кинематографа, доступный на платформе. Здесь собран весь кинофонд сервиса, удобно организованный для быстрого поиска.

Ключевая особенность этого раздела — детальная система жанровых тегов («Фантастика», «Боевик», «Триллер», «Приключения» и десятки других), расположенная прямо над постерами. Пользователь может в один клик отфильтровать контент по любимому жанру. Постеры выстроены в классическую сетку (Grid), что позволяет охватить взглядом большое количество фильмов (например, «Союз», «Красный шелк», «Бетховен 2»). Лаконичный дизайн без лишних текстовых описаний фокусирует внимание зрителя исключительно на качественных визуальных обложках, ускоряя процесс выбора кино на вечер.
1. Интерактивная система жанровых тегов и быстрая фильтрация

Панель тегов выступает главным инструментом первичной селекции контента и спроектирована с упором на скорость взаимодействия:

    Интуитивный выбор в один клик: Горизонтальная лента тегов («чипсов») позволяет моментально сузить выборку без перезагрузки всей страницы. Пользователь может мгновенно переключаться между жанрами или активировать мультивыбор, комбинируя, к примеру, «Фантастику» и «Приключения».

    Мягкая визуальная иерархия: Активный тег выделяется контрастным акцентным цветом, давая четкую обратную связь о текущем состоянии фильтра, в то время как второстепенные категории остаются нейтральными, не перегружая зрительное восприятие.

    Расширенный фильтр параметров: Помимо жанров, пользователю доступна панель уточнения: сортировка по новизне, популярности, рейтингу (Кинопоиск, IMDb, внутренний рейтинг Mavji Somon), а также фильтры по годам выпуска (от ретро-классики до премьер текущего сезона) и странам производства.

2. Адаптивная сетка карточек (Grid Layout)

Организация контента по принципу гибкой сетки обеспечивает максимальную информационную плотность без ощущения хаоса:

    Масштабируемость под любые дисплеи: Сетка автоматически перестраивает количество колонок в зависимости от диагонали экрана — от 5–6 карточек в ряд на широких мониторах до 2–3 на мобильных устройствах, сохраняя идеальные пропорции обложек.

    Принцип «Clean Design»: Отсутствие громоздких абзацев текста, аннотаций и второстепенных ссылок в статичном состоянии позволяет интерфейсу «дышать». Главным визуальным триггером остается качественный постер фильма, передающий его настроение и жанровую принадлежность.

    Оптимизированная бесконечная лента (Infinite Scroll): Подгрузка карточек происходит плавно по мере прокрутки страницы вниз. Использование технологии отложенной загрузки изображений (lazy-loading) гарантирует высокую скорость работы каталога даже при слабом интернет-соединении и наличии тысяч позиций в базе.

3. Микроинтерфейс карточки фильма и мгновенный отклик

Каждый элемент каталога представляет собой динамическую точку взаимодействия:

    Динамический оверлей при наведении (Hover): При фиксации курсора на постере постер плавно приподнимается, а поверх него отображается лаконичная карточка с ключевыми маркерами: точный хронометраж, возрастной ценз (16+, 18+), качество воспроизведения (Full HD, 4K HDR) и плашка рейтинга.

    Быстрый переход к действию: В оверлей встроены кнопки мгновенного воспроизведения трейлера и добавления картины в персональный плейлист «Буду смотреть». Это позволяет составить список просмотров на выходные прямо из общего каталога, не открывая каждую страницу фильма по отдельности.
Такой баланс строгости, функциональности и визуальной выразительности превращает раздел «Все фильмы» платформы Mavji Somon в комфортную цифровую фильмотеку, в которой навигация по огромной медиатеке становится быстрой, легкой и увлекательной.`,
              en: `Architecture of the "All Movies" catalog: navigation, filtration, and visual organization

The "All Movies" section is a vast archive of cinema available on the platform. The entire film library of the service is collected here, conveniently organized for quick searching.

The key feature of this section is a detailed system of genre tags ("Sci-Fi", "Action", "Thriller", "Adventure", and dozens of others), located right above the posters. The user can filter content by their favorite genre in one click. The posters are arranged in a classic Grid layout.

1. Interactive genre tag system and quick filtration

The tag panel serves as the main tool for primary content selection:

    Intuitive one-click selection: The horizontal ribbon of tags ("chips") allows instantly narrowing the selection without reloading the whole page.
    Soft visual hierarchy: The active tag is highlighted with a contrasting accent color.
    Advanced parameter filter: Besides genres, the user has access to sorting by novelty, popularity, rating, as well as filters by release year and production country.

2. Adaptive Grid Layout

Content organization based on a flexible grid provides maximum information density without feeling chaotic:

    Scalability for any display: The grid automatically rebuilds the number of columns depending on the screen diagonal.
    "Clean Design" principle: The absence of bulky text paragraphs allows the interface to "breathe".
    Optimized Infinite Scroll: Cards load smoothly as you scroll down the page using lazy-loading technology.

3. Movie card micro-interface and instant response

Each catalog element is a dynamic interaction point:

    Dynamic hover overlay: Upon fixing the cursor on the poster, it rises smoothly, displaying a concise card with key markers.
    Quick transition to action: Buttons for instant trailer playback and adding the picture to a personal playlist are built into the overlay.`,
              tj: `Меъмории каталоги "Ҳамаи филмҳо": навигатсия, филтратсия ва ташкили визуалӣ

Бахши "Ҳамаи филмҳо" бойгонии бузурги кинематограф дар платформа мебошад. Дар ин ҷо тамоми фонди филмҳои хидматрасонӣ ҷамъ оварда шудааст, ки барои ҷустуҷӯи зуд ба таври қулай ташкил шудаанд.

Хусусияти асосии ин бахш системаи муфассали тегҳои жанрӣ мебошад ("Фантастика", "Ҷанговарона", "Триллер", "Саргузаштӣ" ва ғайра), ки бевосита дар болои постерҳо ҷойгиранд.

1. Системаи интерактивии тегҳои жанрӣ ва филтратсияи зуд

Панели тегҳо ҳамчун воситаи асосии интихоби аввалияи контент хидмат мекунад:

    Интихоби интуитивӣ бо як клик: Лентаи уфуқии тегҳо имкон медиҳад, ки бе боркунии дубораи тамоми саҳифа интихоб фавран маҳдуд карда шавад.
    Иерархияи визуалии мулоим: Теги фаъол бо ранги аксентии контрастӣ таъкид карда мешавад.
    Филтри пешрафтаи параметрҳо: Илова ба жанрҳо, ба корбар имконияти ҷудокунӣ аз рӯи навгониҳо, маъруфият ва рейтинг дастрас аст.

2. Шабакаи адаптивии кортҳо (Grid Layout)

Ташкили контент дар асоси шабакаи чандир зичии максималии иттилоотиро бидуни эҳсоси бесарусомонӣ таъмин мекунад:

    Мутобиқшавӣ барои ҳама гуна дисплейҳо: Шабака шумораи сутунҳоро вобаста ба диагонали экран ба таври худкор аз нав месозад.
    Принсипи "Clean Design": Набудани параграфҳои калони матнӣ.
    Скролли беохири оптимизатсияшуда (Infinite Scroll): Кортҳо ҳангоми ҳаракат ба поён ба таври ҳамвор бор карда мешаванд.

3. Микроинтерфейси корти филм ва вокуниши фаврӣ

Ҳар як унсури каталог нуқтаи интерактивии динамикӣ мебошад:

    Оверлейи динамикӣ ҳангоми ҳаракати муш (Hover).
    Гузариши фаврӣ ба амал: Тугмаҳои бозикунии фаврии трейлер ва илова кардани филм ба рӯйхати шахсӣ.`,
            },
          },

          {
            slug: "web-freedom",
            title: "Свобода выбора",
            imageSrc: "/images/projects/mavjisomon/web-freedom3.png",
            BannerSrc: "/images/projects/mavjisomon/web-freedom3.png",
            shortInfo: {
              ru: "Просмотр на любом устройстве",
              en: "Watch on any device",
              tj: "Тамошо дар ҳама гуна дастгоҳ",
            },
            fullInfo: {
              ru: `Блок «Свобода выбора»: продуктовая философия, визуальный сторителлинг и кросс-девайсный опыт

Блок «Свобода выбора» — это важный маркетинговый и информационный компонент лендинга, подчеркивающий идеологию сервиса: «Сотни каналов, фильмы и сериалы в высоком качестве — доступны в любое время и в любых условиях, независимо от устройства или места».

Визуально этот раздел оформлен в виде красивой композиции из различных устройств (смарт-телевизор, ноутбук, планшет, смартфон и ТВ-приставка), на экранах которых запущен интерфейс Mavji Somon. С технической точки зрения этот блок демонстрирует адаптивность самого сайта — он идеально рендерится как на широких мониторах, так и на экранах мобильных телефонов, обеспечивая бесшовный опыт (seamless experience) и синхронизацию просмотров между всеми гаджетами.
1. Маркетинговая ценность и концепция независимости зрителя

Блок «Свобода выбора» транслирует фундаментальную ценность Mavji Somon: сервис больше не привязывает человека к сетке вещания, определенной комнате или конкретному провайдеру:

    Контент под любой контекст: Утренняя информационная сводка или короткий подкаст со смартфона за чашкой кофе, рабочий перерыв за ноутбуком, развивающий мультфильм для ребенка на планшете или семейная вечерняя кинопремьера на широкой диагонали телевизора. Платформа естественным образом встраивается в любой сценарий дня.

    Снятие барьеров: Наглядная демонстрация устройств снимает у потенциального пользователя главный вопрос: «Подойдет ли сервис для моей техники?». Зритель сразу видит привычные гаджеты и понимает, что для погружения в библиотеку Mavji Somon не требуется докупать специализированное или дорогостоящее оборудование.

2. Визуальный сторителлинг и композиция макета

Графическое решение блока выстроено по законам многоплановой презентационной композиции:

    Эффект погружения (Device Mockups): 3D-рендеры и фотографии устройств высокого разрешения сгруппированы в динамичную перспективную композицию. На экранах гаджетов отображаются реальные, узнаваемые интерфейсы сервиса — от витрины премьер на Smart TV до мобильного плеера на смартфоне, что подчеркивает целостность дизайна.

    Глубина и контрастность: Использование мягких градиентных теней, неоновых световых акцентов и темного фирменного фона создает ощущение премиального технологического продукта и акцентирует внимание на четкости и яркости отображаемой картинки.

    Четкие точки фокуса: Визуальный ряд органично дополнен лаконичными буллетами преимуществ: Full HD и 4K Ultra HD качество, поддержка пространственного звука, стабильный стриминг при переменной скорости сети и отсутствие навязчивой рекламы.

3. Технологическая основа бесшовности (Seamless Experience)

За привлекательным внешним видом блока стоит демонстрация слаженной работы распределенной инфраструктуры Mavji Somon:

    Облачная синхронизация сессий: Зритель может поставить фильм на паузу в мобильном приложении, выйдя из метро, включить Smart TV дома и продолжить просмотр ровно с той же секунды.

    Адаптивная верстка (Responsive Web Design): Сам блок спроектирован с использованием гибких сеток и векторной графики. На ультрашироких мониторах композиция раскрывается в панорамном масштабе, а на компактных экранах смартфонов плавно трансформируется в аккуратный стек или интерактивный слайдер без потери деталей и читаемости текста.

    Мультипрофильность для всей семьи: Концепция одновременного доступа с нескольких девайсов гарантирует, что каждый член семьи может параллельно смотреть свой любимый контент, формируя собственные персональные рекомендации и списки избранного.

Таким образом, блок «Свобода выбора» выступает не просто иллюстративным элементом страницы, а мощным конверсионным инструментом, формирующим образ современного, технологичного и ориентированного на человека онлайн-кинотеатра.`,
              en: `"Freedom of Choice" block: product philosophy, visual storytelling, and cross-device experience

The "Freedom of Choice" block is an important marketing and informational component of the landing page, emphasizing the service's ideology: "Hundreds of channels, movies, and series in high quality — available anytime and anywhere, regardless of device or location".

Visually, this section is designed as a beautiful composition of various devices (smart TV, laptop, tablet, smartphone, and TV set-top box) displaying the Mavji Somon interface. From a technical point of view, this block demonstrates the adaptability of the site itself — it renders perfectly on both wide monitors and mobile phone screens, providing a seamless experience and synchronizing views across all gadgets.

1. Marketing value and the concept of viewer independence

The "Freedom of Choice" block broadcasts the fundamental value of Mavji Somon: the service no longer ties a person to a broadcasting schedule, a specific room, or a specific provider.

2. Visual storytelling and layout composition

The graphic solution of the block is built according to the laws of a multi-plan presentation composition:

    Immersion effect (Device Mockups): High-resolution 3D renders and photos of devices are grouped into a dynamic perspective composition.
    Depth and contrast: Using soft gradient shadows, neon light accents, and a dark corporate background creates a premium technological product feel.

3. Technological basis for Seamless Experience

Behind the attractive appearance of the block is a demonstration of the coordinated work of Mavji Somon's distributed infrastructure:

    Cloud session synchronization: A viewer can pause a movie on the mobile app upon leaving the subway, turn on the Smart TV at home, and continue watching from the exact same second.
    Responsive Web Design: The block itself is designed using flexible grids and vector graphics.
    Multi-profile for the whole family: The concept of simultaneous access from several devices guarantees that each family member can watch their favorite content in parallel.`,
              tj: `Блоки "Озодии интихоб": фалсафаи маҳсулот, ҳикояи визуалӣ ва таҷрибаи кросс-дастгоҳ

Блоки "Озодии интихоб" ҷузъи муҳими маркетингӣ ва иттилоотии саҳифа мебошад, ки идеологияи хидматро таъкид мекунад: "Садҳо шабакаҳо, филмҳо ва силсилафилмҳо бо сифати баланд — дар вақти дилхоҳ ва дар ҳама шароит дастрасанд".

Аз ҷиҳати визуалӣ, ин бахш ҳамчун таркиби зебои дастгоҳҳои гуногун (ТВ-и ҳушманд, ноутбук, планшет, смартфон) тарҳрезӣ шудааст. Аз нуқтаи назари техникӣ, ин блок мутобиқшавии худи сайтро нишон медиҳад.

1. Арзиши маркетингӣ ва консепсияи мустақилияти тамошобин

Блоки "Озодии интихоб" арзиши бунёдии Mavji Somon-ро пахш мекунад: хидмат дигар шахсро ба ҷадвали пахш, ҳуҷраи муайян ё провайдери мушаххас вобаста намекунад.

2. Ҳикояи визуалӣ ва таркиби макет

Ҳалли графикии блок мувофиқи қонунҳои таркиби бисёрсатҳа сохта шудааст:

    Таъсири фарогир (Device Mockups): Рендерҳои 3D ва аксҳои дастгоҳҳо дар таркиби дурнамои динамикӣ гурӯҳбандӣ шудаанд.
    Амиқӣ ва контраст: Истифодаи сояҳои градиенти мулоим ва аксентҳои равшании неон ҳисси маҳсулоти технологии премиумро эҷод мекунад.

3. Асоси технологии таҷрибаи бефосила (Seamless Experience)

Дар паси намуди ҷолиби блок намоиши кори ҳамоҳангшудаи инфрасохтори Mavji Somon меистад:

    Синхронизатсияи сессияи абрӣ: Тамошобин метавонад филмро дар барномаи мобилӣ таваққуф кунад ва тамошоро аз ҳамон сония дар ТВ-и ҳушманд дар хона давом диҳад.
    Тарҳрезии вебии ҷавобгӯ (Responsive Web Design): Блок бо истифодаи шабакаҳои чандир ва графикаи векторӣ тарҳрезӣ шудааст.
    Мултипрофил барои тамоми оила: Консепсияи дастрасии ҳамзамон кафолат медиҳад, ки ҳар як аъзои оила контенти дӯстдоштаи худро дар баробари дигарон тамошо кунад.`,
            },
          },
          {
            slug: "web-footer",
            title: {
              ru: "Футер (Подвал сайта)",
              en: "Footer (Site Footer)",
              tj: "Футер (Поёни сайт)",
            },
            imageSrc: "/images/projects/mavjisomon/web-footer3.png",
            BannerSrc: "/images/projects/mavjisomon/web-footer3.png",
            shortInfo: {
              ru: "Навигационный хаб",
              en: "Navigation hub",
              tj: "Хаби навигатсионӣ",
            },
            fullInfo: {
              ru: `Архитектура футера Mavji Somon: навигационный хаб, юридическая надежность и каналы связи

Футер сайта Mavji Somon спроектирован как исчерпывающий навигационный и информационный хаб, выполненный в строгом темном дизайне. В левой колонке размещен официальный логотип с описанием «Государственная услуга IPTV Официальное вещание», а также кнопки-ссылки для быстрого скачивания приложений из Google Play и App Store.

Центральная часть разделена на логические блоки: «МЕНЮ» (информация о компании, условия использования, FAQ, удаление аккаунта, контакты) и «РАЗДЕЛЫ» (дублирующие быстрые ссылки на ТВ, Фильмы, Сериалы и т.д.). В правой части в блоке «СВЯЖИТЕСЬ С НАМИ» указаны физический адрес офиса в Душанбе и контактный телефон службы поддержки. Такая структура позволяет пользователю легко находить нужную правовую или техническую информацию с любой страницы сайта.
1. Левая колонка: официальный статус и дистрибуция приложений

Левая часть подвала платформы отвечает за формирование доверия и мобильную конверсию:

    Государственный статус и легитимность: Фирменная эмблема и формулировка «Государственная услуга IPTV Официальное вещание» с первых секунд взаимодействия подтверждают лицензионную чистоту контента, легальность стриминговых потоков и высокий уровень защищенности персональных данных абонентов.

    Бейджи мобильных маркетов: Фирменные интерактивные кнопки Google Play и App Store размещены в зоне прямой видимости. Они позволяют одним кликом перейти к установке мобильного клиента на смартфоны и планшеты или отсканировать сопутствующий QR-код для моментальной загрузки на Smart TV.

2. Центральные блоки: сквозная навигация и правовая прозрачность

Центральная зона подвала структурирована по принципу строгой информационной иерархии, исключающей блуждание по сайту:

    Блок «МЕНЮ» (Служебная и правовая информация): Здесь собрана вся обязательная нормативная база: «Пользовательское соглашение», «Политика конфиденциальности», страница «О проекте» и раздел ответов на частые вопросы («FAQ»). Наличие прямой ссылки на регламент «Удаление аккаунта» подтверждает соответствие международным стандартам приватности (GDPR) и уважение к праву пользователя на управление своими данными.

    Блок «РАЗДЕЛЫ» (Быстрый доступ к каталогу): Дублирует ключевые разделы сайта («ТВ», «Фильмы», «Сериалы», «Мультфильмы», «Радио»). Когда посетитель пролистывает длинную посадочную страницу до конца, ему не нужно возвращаться наверх к основной шапке — нужную категорию контента можно выбрать сразу внизу.

3. Правая колонка: прозрачность контактов и клиентская поддержка

Блок «СВЯЖИТЕСЬ С НАМИ» ориентирован на открытость сервиса и решение практических вопросов:

    Официальный адрес и локализация: Указание физического офиса компании в Душанбе подчеркивает доступность руководства сервиса и его национальную привязку.

    Служба заботы о пользователях: Номер горячей линии и ссылки на электронную почту обеспечивают прямую связь с круглосуточной службой технической поддержки для быстрого решения вопросов по подписке, авторизации или настройке Smart TV.

    Интеграция с соцсетями и мессенджерами: Ниже контактной информации предусмотрены иконки ключевых медиаканалов (Telegram, Instagram, Facebook), позволяющие следить за обновлениями сервиса, расписанием премьер и анонсами новых телепередач.

4. Финальная плашка (Sub-footer) и эргономика

Завершает страницу лаконичный нижний подстрочник, отделенный тонкой контрастной разделительной линией:

    Копирайт и защита прав: Стандартное уведомление «© Mavji Somon. Все права защищены» с указанием текущего года закрепляет юридическую защиту бренда и контента.

    Адаптивное поведение: На мобильных устройствах четыре колонки аккуратно трансформируются в вертикальный аккордеон или последовательные смысловые секции с увеличенной областью нажатия (touch targets), сохраняя безупречную читаемость и удобство нажатия пальцем.`,
              en: `Mavji Somon footer architecture: navigation hub, legal reliability, and communication channels

The Mavji Somon website footer is designed as an exhaustive navigation and information hub, executed in a strict dark design. The left column contains the official logo with the description "State IPTV Service Official Broadcasting", as well as link buttons for quick download of applications from Google Play and App Store.

The central part is divided into logical blocks: "MENU" (company info, terms of use, FAQ, account deletion, contacts) and "SECTIONS" (duplicate quick links to TV, Movies, Series, etc.). In the right part, the "CONTACT US" block shows the physical address of the office in Dushanbe and the support phone number.

1. Left column: official status and application distribution

The left part of the platform's footer is responsible for building trust and mobile conversion:

    State status and legitimacy: Confirm the license purity of content and high level of subscriber data protection.
    Mobile market badges: Branded interactive buttons for Google Play and App Store.

2. Central blocks: end-to-end navigation and legal transparency

The central zone of the footer is structured according to the principle of strict information hierarchy:

    "MENU" block: Contains the "User Agreement", "Privacy Policy", "About", and "FAQ" sections.
    "SECTIONS" block: Duplicates the key sections of the site ("TV", "Movies", "Series", "Cartoons", "Radio").

3. Right column: contact transparency and customer support

The "CONTACT US" block focuses on service openness and solving practical issues:

    Official address: Emphasizes the accessibility of the service's management.
    Customer care service: Hotline number and email links provide direct communication with the technical support team.

4. Sub-footer and ergonomics

The page is completed by a concise lower subscript:

    Copyright and rights protection: Standard notice "© Mavji Somon. All rights reserved".
    Adaptive behavior: On mobile devices, the columns transform neatly into a vertical accordion.`,
              tj: `Меъмории футери Mavji Somon: хаби навигатсионӣ, эътимоднокии ҳуқуқӣ ва каналҳои алоқа

Футери сайти Mavji Somon ҳамчун як хаби мукаммали навигатсионӣ ва иттилоотӣ тарҳрезӣ шудааст, ки дар тарҳи торики қатъӣ иҷро шудааст. Дар сутуни чап логотипи расмӣ ва тугмаҳо барои зеркашии зуди барномаҳо аз Google Play ва App Store ҷойгир шудаанд.

Қисми марказӣ ба блокҳои мантиқӣ тақсим шудааст: "МЕНЮ" ва "БАХШҲО". Дар тарафи рост, дар блоки "БО МО ТАМОС ГИРЕД" суроғаи физикии офис дар Душанбе ва телефони хадамоти дастгирӣ нишон дода шудааст.

1. Сутуни чап: мақоми расмӣ ва тақсимоти барномаҳо

Қисми чапи футери платформа барои эҷоди эътимод ва табдили мобилӣ масъул аст:

    Мақоми давлатӣ ва қонуният: Тозагии литсензионии контент ва сатҳи баланди ҳифзи маълумоти муштариёнро тасдиқ мекунанд.
    Нишонҳои бозорҳои мобилӣ: Тугмаҳои интерактивӣ барои Google Play ва App Store.

2. Блокҳои марказӣ: навигатсияи шаффофӣ ва ҳуқуқӣ

Минтақаи марказии футер аз рӯи принсипи иерархияи қатъии иттилоотӣ сохта шудааст:

    Блоки "МЕНЮ": Шартномаи корбар, Сиёсати махфият ва Саволҳои зиёд додашударо (FAQ) дар бар мегирад.
    Блоки "БАХШҲО": Бахшҳои калидии сайтро такрор мекунад.

3. Сутуни рост: шаффофияти тамос ва дастгирии мизоҷон

Блоки "БО МО ТАМОС ГИРЕД" ба кушода будани хидмат ва ҳалли масъалаҳои амалӣ нигаронида шудааст:

    Суроғаи расмӣ: Дастрас будани роҳбарияти хидматро таъкид мекунад.
    Хадамоти ғамхорӣ ба корбарон: Рақами телефони боварӣ ва почтаи электронӣ.

4. Поёни сайт (Sub-footer) ва эргономика

Саҳифа бо як навиштаҷоти мухтасари поёнӣ ба итмом мерасад:

    Ҳуқуқи муаллиф: Огоҳиномаи стандартӣ "© Mavji Somon. Ҳамаи ҳуқуқҳо маҳфузанд".
    Рафтори адаптивӣ: Дар дастгоҳҳои мобилӣ, сутунҳо ба аккордеони амудӣ табдил меёбанд.`,
            },
          },
          {
            slug: "web-film-page",
            title: "Раздел: Фильмы (Hero Banner)",
            imageSrc: "/images/projects/mavjisomon/web-film-page.png",
            BannerSrc: "/images/projects/mavjisomon/web-film-page.png",
            shortInfo: {
              ru: "Главные премьеры и категории",
              en: "Main premieres and categories",
              tj: "Нахустнамоишҳои асосӣ ва категорияҳо",
            },
            fullInfo: {
              ru: `Архитектура страницы раздела «Фильмы»: визуальное вовлечение и гибридная навигация

Страница раздела «Фильмы» встречает пользователя массивным и эффектным Hero Banner (главным слайдером). Этот блок является визитной карточкой категории, где транслируются самые горячие новинки, эксклюзивные премьеры или громкие блокбастеры (как, например, релиз «НОРМАЛ»).

Большой формат баннера со скругленными краями, плавной анимацией пролистывания и боковыми стрелками создает кинематографичную атмосферу (Cinematic Experience) прямо в браузере. Сразу под главным слайдером расположена панель жанровой фильтрации и персональные ленты с постерами. Такая компоновка решает сразу две задачи: моментально привлекает внимание к фокусному топовому контенту (через огромный баннер) и предоставляет удобный доступ к глубокому каталогу жанров, не заставляя пользователя скроллить далеко вниз.
1. Кинематографичный Hero Banner как центр визуального притяжения

Главный слайдер раздела спроектирован так, чтобы погружать зрителя в атмосферу кинозала с первых долей секунды:

    Иммерсивная графика и типографика: Для фоновых изображений используются широкоформатные постеры высокой четкости с мягким радиальным затемнением к краям. Это гарантирует стопроцентную читаемость белого акцентного заголовка фильма, краткого синопсиса и ключевых метаданных (год, хронометраж, жанр, возрастной ценз).

    Информационные триггеры: Каждая карточка в ротации снабжена яркими бейджами («Эксклюзив», «Премьера», «В Full HD»), а также рейтинговыми индикаторами, снимающими сомнения зрителя в качестве картины.

    Фокус на конверсию в просмотр: Прямо поверх баннера интегрированы две контрастные кнопки действий: крупная «Смотреть фильм» (мгновенный переход к плееру) и вторичная «Трейлер» (открытие промо-ролика во всплывающем модальном окне без сброса контекста страницы), а также иконка быстрого добавления в личный список «Буду смотреть».

2. Плавная динамика и бесшовное управление

Интерактивность слайдера обеспечивает комфортное взаимодействие без резких рывков интерфейса:

    Интуитивная навигация: Помимо полупрозрачных боковых стрелок-переключателей со сглаженным эффектом наведения (hover), в нижней части баннера предусмотрена точечная пагинация с тайм-линией, наглядно показывающей время до следующего автоматического перелистывания.

    Умная адаптивность паузы: При наведении курсора или клике на область слайдера автоматическая прокрутка встает на паузу, позволяя зрителю спокойно прочитать описание релиза.

    Touch-оптимизация: Для планшетов и сенсорных экранов поддерживается жестовое управление с естественной физикой инерционного свайпа.

3. Бесшовный переход к жанровой фильтрации

Расположение панели категорий непосредственно под Hero Banner устраняет разрыв между презентационной и исследовательской частью интерфейса:

    Нулевой порог поиска: Пользователю не требуется пролистывать страницу на несколько экранов вниз, чтобы добраться до функциональной части. Горизонтальная лента тегов («Боевики», «Комедии», «Драмы», «Ужасы», «Фантастика») всегда находится в зоне быстрого визуального сканирования.

    Мгновенный отклик без перезагрузки: Выбор жанрового фильтра динамически перестраивает лежащую ниже сетку фильмов при помощи асинхронной загрузки данных, сохраняя непрерывность работы с сайтом.

4. Баланс эмоционального и практического UX

Подобная многоуровневая структура создает идеальный пользовательский путь:

    Пользователи, пришедшие за конкретным громким релизом или готовые довериться рекомендации сервиса, находят решение мгновенно в верхнем слайдере.

    Зрители, находящиеся в процессе самостоятельного вдумчивого выбора, сразу видят классификаторы и подборки, переходя к каталогу с минимальными временными затратами.`,
              en: `Architecture of the "Movies" section page: visual engagement and hybrid navigation

The "Movies" section page greets the user with a massive and impressive Hero Banner (main slider). This block is the calling card of the category, broadcasting the hottest new releases, exclusive premieres, or loud blockbusters.

The large banner format with rounded edges, smooth scroll animation, and side arrows creates a Cinematic Experience right in the browser. A genre filtering panel and personal feeds with posters are located right below the main slider.

1. Cinematic Hero Banner as the center of visual attraction

The main slider of the section is designed to immerse the viewer in the atmosphere of a cinema:

    Immersive graphics and typography: High-definition widescreen posters with soft radial dimming towards the edges.
    Information triggers: Badges ("Exclusive", "Premiere") and rating indicators.
    Focus on viewing conversion: Action buttons "Watch Movie" and "Trailer".

2. Smooth dynamics and seamless control

The slider's interactivity provides comfortable interaction:

    Intuitive navigation: Translucent side switch arrows and dot pagination.
    Smart pause adaptability: When hovering or clicking on the slider area, automatic scrolling pauses.
    Touch optimization: Gesture control is supported for tablets and touch screens.

3. Seamless transition to genre filtration

The location of the categories panel directly under the Hero Banner eliminates the gap between presentation and exploration:

    Zero search threshold: The horizontal ribbon of tags ("Action", "Comedy", "Drama") is always in the fast visual scanning zone.
    Instant response without reloading: Selecting a genre filter dynamically rebuilds the underlying movie grid.

4. Emotional and practical UX balance

This multi-level structure creates an ideal user path.`,
              tj: `Меъмории саҳифаи бахши "Филмҳо": ҷалби визуалӣ ва навигатсияи гибридӣ

Саҳифаи бахши "Филмҳо" корбарро бо баннери азими Hero пешвоз мегирад. Ин блок корти ташрифотии категория мебошад, ки дар он навгониҳо ва блокбастерҳои навтарин пахш мешаванд.

Формати калони баннер бо кунҷҳои ҳамалуда ва аниматсияи ҳамвори ҳаракат фазои кинематографиро бевосита дар браузер эҷод мекунад. Дарҳол дар зери слайдери асосӣ панели филтратсияи жанрҳо ҷойгир аст.

1. Баннери кинематографии Hero ҳамчун маркази ҷалби визуалӣ

Слайдери асосии бахш барои ғарқ кардани тамошобин ба фазои толори кино тарҳрезӣ шудааст:

    Графика ва типографияи фарогир: Постерҳои формати васеи баландсифат бо ториккунии мулоими радиалӣ.
    Триггерҳои иттилоотӣ: Нишонҳо ("Эксклюзив", "Премьера") ва нишондиҳандаҳои рейтинг.
    Таваҷҷӯҳ ба табдили тамошо: Тугмаҳои "Тамошои филм" ва "Трейлер".

2. Динамикаи ҳамвор ва назорати бефосила

Интерактивии слайдер ҳамкории бароҳатро таъмин мекунад:

    Навигатсияи интуитивӣ: Тирчаҳои гузариши паҳлӯии нимшаффоф ва пагинатсияи нуқтавӣ.
    Мутобиқшавии таваққуфи зирак: Ҳангоми ҳаракат ё пахш кардан, гардиши худкор ба таваққуф мегузарад.
    Оптимизатсияи Touch: Барои планшетҳо ва экранҳои сенсорӣ идоракунии имову ишора дастгирӣ мешавад.

3. Гузариши бефосила ба филтратсияи жанрӣ

Ҷойгиршавии панели категорияҳо бевосита дар зери Hero Banner фосиларо бартараф мекунад:

    Маҳдудияти сифрии ҷустуҷӯ: Лентаи уфуқии тегҳо ("Ҷанговарона", "Комедия", "Драма") ҳамеша дар минтақаи сканеркунии зуд қарор дорад.
    Ҷавоби фаврӣ бидуни боркунии дубора: Интихоби филтри жанр шабакаи филмҳоро динамикӣ аз нав месозад.

4. Тавозуни эмотсионалӣ ва амалии UX

Ин сохтори бисёрсатҳа роҳи идеалии корбарро эҷод мекунад.`,
            },
          },

          {
            slug: "web-serials-page",
            title: {
              ru: "Раздел: Сериалы",
              en: "Section: Series",
              tj: "Бахш: Силсилафилмҳо",
            },
            imageSrc: "/images/projects/mavjisomon/web-serials-page.jpg",
            BannerSrc: "/images/projects/mavjisomon/web-serials-page.jpg",
            shortInfo: {
              ru: "Многосерийный контент",
              en: "Multi-part content",
              tj: "Муҳтавои бисёрқисмӣ",
            },
            fullInfo: {
              ru: `Архитектура раздела «Сериалы»: динамика премьер, сериальная навигация и культура binge-watching

Раздел «Сериалы» выстроен по аналогии с фильмами, предоставляя пользователю интуитивно понятный доступ к многосерийному контенту. Главный акцент здесь сделан на Hero Banner, который анонсирует громкие премьеры или новые сезоны (например, сериал «ГНЕВ»). Это позволяет сразу вовлечь зрителя в самые свежие релизы платформы.

Под слайдером расположена удобная лента с фильтрами по жанрам (Боевик, Триллер, Комедия и т.д.), что помогает быстро сузить поиск. Карточки сериалов (такие как «Коп», «Санкционер», «Противостояние») оформлены в виде вертикальных постеров с сохранением общей стилистики сайта, делая процесс выбора следующего шоу для запойного просмотра (binge-watching) максимально комфортным.
1. Специфика сериального Hero Banner: акцент на сезонность и новизну

Главный промо-слайдер категории адаптирован под особенности многосерийных релизов:

    Информирование о статусе сезонов: В отличие от полнометражных картин, постеры слайдера дополнены информативными бейджами статуса: «Новый сезон», «Все серии доступны», «Финал сезона» или «Онгоинг» (серии выходят еженедельно). Это сразу снимает вопрос, доступна ли история целиком.

    Прямой старт с актуального эпизода: Кнопка действия «Смотреть» автоматически подстраивается под статус зрителя: для нового пользователя она запускает пилотный эпизод, а для постоянного зрителя — ту серию и минуту, на которой он остановился ранее.

    Трейлеры конкретных сезонов: Дополнительная кнопка предпросмотра открывает трейлер именно актуального сезона, не спойлеря сюжет предыдущих частей шоу.

2. Жанровая фильтрация и тематические срезы

Размещенная прямо под слайдером панель интерактивных тегов решает проблему ориентации в длительных форматах:

    Быстрая селекция настроения: Теги («Детективы», «Исторические драмы», «Мелодрамы», «Криминал», «Ситкомы») сгруппированы так, чтобы в один клик отсекать неподходящие форматы и фокусироваться на предпочтениях пользователя на ближайшие недели.

    Мультипликативные фильтры: Помимо базовых жанров, предусмотрены вспомогательные переключатели: «Завершенные проекты» (для тех, кто хочет посмотреть всю историю за выходные) и «Мини-сериалы» (истории на 4–8 эпизодов с закрытым финалом).

3. Архитектура сериальной карточки контента

Вертикальные постеры карточек (на примере проектов «Коп», «Санкционер», «Противостояние») спроектированы с учетом потребностей любителей запойного просмотра:

    Сериальная метаинформация при наведении (Hover): При фиксации курсора на постере карточка раскрывает расширенные параметры: общее количество сезонов и серий, средняя продолжительность одного эпизода (например, «45 мин.»), звуковые дорожки и статус перевода.

    Индикатор прогресса просмотра: Если пользователь уже начал смотреть тайтл, в нижней части постера отображается ненавязчивая полоса прогресса (progress bar) текущего сезона с меткой вроде «Сезон 2, Серия 4».

    Плейлисты и закладки: Интегрированная кнопка «В закладки» добавляет весь сериал в профиль пользователя, автоматически уведомляя о выходе свежих серий через системные push-уведомления веб-версии или мобильного приложения.

4. Экосистема удержания внимания и непрерывный опыт

Единый визуальный код раздела устраняет барьеры между выбором и воспроизведением:

    Сохранение визуального паттерна страницы «Фильмы» снижает когнитивную нагрузку: пользователю не нужно заново учиться навигации, интерфейс считывается на мышечном уровне.

    Гармоничное сочетание масштабного презентационного промо-баннера и плотной сетки каталога превращает раздел «Сериалы» в полноценный центр сериальной культуры платформы Mavji Somon, стимулируя регулярные возвращения аудитории к любимым героям.`,
              en: `Architecture of the "Series" section: dynamics of premieres, serial navigation, and binge-watching culture

The "Series" section is built similarly to movies, providing intuitive access to multi-part content. The main focus here is on the Hero Banner, which announces loud premieres or new seasons.

Under the slider is a convenient ribbon with genre filters (Action, Thriller, Comedy, etc.), which helps quickly narrow the search. Series cards are designed as vertical posters.

1. Specifics of the serial Hero Banner: focus on seasonality and novelty

The main promo slider of the category is adapted to the features of multi-part releases:

    Informing about season status: Posters are supplemented with informative badges: "New Season", "All episodes available", "Season Finale", or "Ongoing".
    Direct start from the current episode: The "Watch" button automatically adjusts to the viewer's status.
    Trailers of specific seasons: Preview trailers open for the current season without spoiling previous parts.

2. Genre filtration and thematic sections

The interactive tag panel right below the slider solves the problem of orientation in long formats:

    Quick mood selection: Tags are grouped to cut off unsuitable formats in one click.
    Multiplicative filters: Additional switches: "Completed projects" and "Mini-series".

3. Architecture of the series content card

Vertical cards are designed with the needs of binge-watchers in mind:

    Serial meta-information on Hover: The card reveals advanced parameters: total number of seasons and episodes, average episode length, audio tracks, and translation status.
    Viewing progress indicator: A progress bar is displayed for active shows.
    Playlists and bookmarks: The "Bookmark" button adds the whole series to the profile and notifies about new episodes.

4. Attention retention ecosystem and continuous experience

The unified visual code of the section eliminates barriers between selection and playback.`,
              tj: `Меъмории бахши "Силсилафилмҳо": динамикаи нахустнамоишҳо, навигатсияи силсилавӣ ва фарҳанги binge-watching

Бахши "Силсилафилмҳо" ба мисли филмҳо сохта шудааст, ки дастрасии интуитивиро ба контенти бисёрқисмӣ фароҳам меорад. Таваҷҷӯҳи асосӣ ба баннери Hero равона шудааст, ки нахустнамоишҳои нав ё мавсимҳои навро эълон мекунад.

Дар зери слайдер лентаи қулай бо филтрҳои жанрӣ (Ҷанговарона, Триллер, Комедия ва ғайра) ҷойгир аст. Кортҳои силсилафилмҳо дар шакли постерҳои амудӣ тарҳрезӣ шудаанд.

1. Хусусиятҳои баннери Hero барои силсилафилмҳо: таваҷҷӯҳ ба мавсимӣ ва навгонӣ

Слайдери асосии категория ба хусусиятҳои релизҳои бисёрқисмӣ мутобиқ карда шудааст:

    Огоҳсозӣ дар бораи ҳолати мавсимҳо: Постерҳо бо нишонҳои иттилоотӣ мукаммал карда мешаванд: "Мавсими нав", "Ҳамаи қисмҳо дастрасанд" ё "Давом дорад".
    Оғози мустақим аз қисми ҷорӣ: Тугмаи "Тамошо кардан" ба таври худкор ба ҳолати тамошобин мутобиқ мешавад.
    Трейлерҳои мавсимҳои мушаххас: Тугмаи пешнамоиш трейлери мавсими ҷориро мекушояд.

2. Филтратсияи жанрӣ ва бахшҳои мавзӯӣ

Панели тегҳои интерактивӣ дар зери слайдер мушкилоти самтгириро дар форматҳои дарозмуддат ҳал мекунад:

    Интихоби зуди кайфият: Тегҳо барои бо як клик қатъ кардани форматҳои номувофиқ гурӯҳбандӣ шудаанд.
    Филтрҳои мултипликативӣ: Гузаришҳои иловагӣ: "Лоиҳаҳои ба итмомрасида" ва "Мини-сериалҳо".

3. Меъмории корти контенти силсилафилм

Кортҳои амудӣ бо назардошти эҳтиёҷоти дӯстдорони тамошои тӯлонӣ тарҳрезӣ шудаанд:

    Метамаълумоти силсилавӣ ҳангоми Hover: Корт параметрҳои пешрафтаро ошкор мекунад: шумораи умумии мавсимҳо ва қисмҳо, давомнокии миёна ва ҳолати тарҷума.
    Нишондиҳандаи пешрафти тамошо: Барои намоишҳои фаъол сатри пешрафт нишон дода мешавад.
    Рӯйхатҳо ва хатбаракҳо: Тугмаи "Ба хатбарак" тамоми силсилафилмро ба профил илова мекунад ва дар бораи қисмҳои нав огоҳ месозад.

4. Экосистемаи нигоҳдории таваҷҷӯҳ ва таҷрибаи муттасил

Коди ягонаи визуалии бахш монеаҳои байни интихоб ва бозиро бартараф мекунад.`,
            },
          },
          {
            slug: "web-mult-page",
            title: {
              ru: "Раздел: Мультфильмы",
              en: "Section: Cartoons",
              tj: "Бахш: Филмҳои тасвирӣ",
            },
            imageSrc: "/images/projects/mavjisomon/web-mult-page.png",
            BannerSrc: "/images/projects/mavjisomon/web-mult-page.png",
            shortInfo: {
              ru: "Детский и семейный контент",
              en: "Kids and family content",
              tj: "Муҳтавои кӯдакона ва оилавӣ",
            },
            fullInfo: {
              ru: `Архитектура раздела «Мультфильмы»: семейный стриминг, возрастная безопасность и яркий UX

Раздел «Мультфильмы» — это безопасное и яркое пространство для детского и семейного просмотра. Центральный слайдер (Hero Banner) здесь чаще всего используется для продвижения красочных анимационных новинок. 

В нижней части расположена навигация по поджанрам (Семейные, Детские, Сказка и т.д.) и лента с популярными тайтлами («Душа», «Кролик Питер 2», «Зверополис»). Дизайн остается строгим и темным, как и на остальном сайте, но за счет обилия красочных постеров сам раздел воспринимается живо и позитивно.

1. Анимационный Hero Banner как инструмент эмоционального вовлечения

Главный слайдер детского раздела адаптирован под специфику восприятия семейной аудитории:

    Иммерсивная и сочная графика: В широкоформатных баннерах используются сочные стоп-кадры и ключевые промо-арты с высокой детализацией.
    Семейные триггеры и призыв к действию: Каждая карточка слайдера оснащена прямыми кнопками «Смотреть всей семьей» и «Трейлер».
    Плавная динамика перелистывания: Скорость автоматической смены слайдов немного снижена по сравнению со взрослыми разделами.

2. Возрастная дифференциация и навигация по поджанрам

Интерактивная лента тегов, расположенная сразу под Hero-слайдером, берет на себя роль быстрого родительского фильтра:

    Возрастной таргетинг (0+, 6+, 12+): Наряду с тематическими категориями внедрены четкие фильтры по возрасту.
    Форматные разделы: Пользователь может в один клик отделить полнометражные анимационные фильмы от коротких эпизодов и развивающих мультсериалов.
    Языковые дорожки и дубляж: Специальные бейджи позволяют отсортировать контент с качественной локализацией.

3. Визуальный баланс: контраст темной темы и сочных обложек

    Энергия постеров на глубоком фоне: Карточки мировых и локальных хитов работают как яркие цветовые акценты. Темный фон при этом не перегружает зрение ребенка.
    Информативные микро-карточки: При наведении постер плавно приподнимается, демонстрируя индикатор студии, точный хронометраж и родительский рейтинг.

4. Безопасность и родительский контроль

Раздел «Мультфильмы» служит фундаментом экосистемы детской безопасности на Mavji Somon:

    Изоляция от взрослого контента: Архитектура раздела исключает попадание баннеров фильмов с возрастным цензом 16+ и 18+ в поле зрения ребенка, формируя доверительную цифровую среду.

    Создание детских плейлистов: Кнопка быстрого добавления позволяет родителям формировать закрытые списки воспроизведения «Для детей», обеспечивая контролируемый и полезный просмотр без непредвиденных переходов.`,
              en: `Architecture of the "Cartoons" section: family streaming, age safety, and bright UX

The "Cartoons" section is a safe and bright space for kids and family viewing. The central slider (Hero Banner) here is often used to promote colorful animated new releases.

At the bottom, there is navigation by subgenres (Family, Kids, Fairytale, etc.) and a feed with popular titles ("Soul", "Peter Rabbit 2", "Zootopia"). The design remains strict and dark, like the rest of the site, but thanks to the abundance of colorful posters, the section itself is perceived vividly and positively.

1. Animated Hero Banner as a tool for emotional engagement

The main slider of the children's section is adapted to the specifics of family audience perception:

    Immersive and rich graphics: Widescreen banners use juicy freeze-frames and key promo arts with high detail.
    Family triggers and call to action: Each slider card is equipped with direct buttons "Watch with the whole family" and "Trailer".
    Smooth scrolling dynamics: The speed of automatic slide changes is slightly reduced compared to adult sections.

2. Age differentiation and subgenre navigation

The interactive tag ribbon, located right under the Hero slider, takes on the role of a quick parental filter:

    Age targeting (0+, 6+, 12+): Along with thematic categories, clear age filters are implemented.
    Format sections: The user can separate full-length animated films from short episodes and educational animated series in one click.
    Language tracks and dubbing: Special badges allow sorting content with high-quality localization.

3. Visual balance: contrast of the dark theme and juicy covers

    Energy of posters on a deep background: The cards of hits work as bright color accents. The dark background does not overload the child's vision.
    Informative micro-cards: On hover, the poster rises smoothly, showing the studio indicator, exact length, and parental rating.

4. Safety and parental control

The "Cartoons" section serves as the foundation of the child safety ecosystem on Mavji Somon.

    Isolation from adult content: The architecture of the section excludes banners of films with an age rating of 16+ and 18+ from the child's field of vision, forming a trusting digital environment.
    Creation of children's playlists: The quick add button allows parents to form closed "For Children" playlists, providing controlled and useful viewing without unexpected transitions.`,
              tj: `Меъмории бахши "Филмҳои тасвирӣ": стриминги оилавӣ, бехатарии синну сол ва UX-и дурахшон

Бахши "Филмҳои тасвирӣ" фазои бехатар ва дурахшон барои тамошои кӯдакон ва оила мебошад. Слайдери марказӣ (Hero Banner) дар ин ҷо аксаран барои пешбурди навгониҳои рангини аниматсионӣ истифода мешавад.

Дар поён навигатсия аз рӯи зержанрҳо (Оилавӣ, Кӯдакона, Афсона ва ғайра) ва лента бо номҳои маъмул ("Рӯҳ", "Хайргӯш Питер 2", "Зоотрополис") ҷойгир аст. Тарҳ мисли тамоми сайт торик ва қатъӣ боқӣ мемонад, аммо ба шарофати фаровонии постерҳои рангин бахш хушрӯй ба назар мерасад.

1. Баннери аниматсионии Hero ҳамчун воситаи ҷалби эҳсосӣ

Слайдери асосии бахши кӯдакона ба хусусиятҳои дарки аудиторияи оилавӣ мутобиқ карда шудааст:

    Графикаи фарогир ва ғавӣ: Баннерҳои формати васеъ кадрҳои рангин ва санъатҳои асосии таблиғотиро бо тафсилоти баланд истифода мебаранд.
    Триггерҳои оилавӣ ва даъват ба амал: Ҳар як корти слайдер бо тугмаҳои мустақими "Тамошо бо тамоми оила" ва "Трейлер" муҷаҳҳаз аст.
    Динамикаи ҳамвори ҳаракат: Суръати ивазшавии худкори слайдҳо нисбат ба бахшҳои калонсолон каме коҳиш ёфтааст.

2. Фарқияти синну сол ва навигатсия аз рӯи зержанрҳо

Лентаи интерактивии тегҳо, ки бевосита дар зери слайдери Hero ҷойгир аст, нақши филтри зуди волидайнро ба ӯҳда мегирад:

    Таргетинги синну сол (0+, 6+, 12+): Дар баробари категорияҳои мавзӯӣ, филтрҳои дақиқ аз рӯи синну сол амалӣ карда мешаванд.
    Бахшҳои формат: Корбар метавонад бо як клик филмҳои аниматсионии пурраро аз қисмҳои кӯтоҳ ва сериалҳои омӯзишӣ ҷудо кунад.
    Роҳҳои забонӣ ва дубляж: Нишонҳои махсус имкон медиҳанд контент бо локализатсияи баландсифат ҷудо карда шавад.

3. Тавозуни визуалӣ: контрасти мавзӯи торик ва муқоваҳои дурахшон

    Энергияи постерҳо дар заминаи амиқ: Кортҳои хитҳои ҷаҳонӣ ва маҳаллӣ ҳамчун аксентҳои рангаи дурахшон кор мекунанд. Заминаи торик биноии кӯдакро аз ҳад зиёд сарборӣ намекунад.
    Микрокортҳои иттилоотӣ: Ҳангоми ҳаракат додани муш, постер ба таври ҳамвор боло меравад ва нишондиҳандаи студия, давомнокӣ ва рейтинги волидайнро нишон медиҳад.

4. Бехатарӣ ва назорати волидайн

Бахши "Филмҳои тасвирӣ" ҳамчун асоси экосистемаи бехатарии кӯдакон дар Mavji Somon хизмат мекунад.

    Ҷудокунӣ аз контенти калонсолон: Меъмории бахш воридшавии баннерҳои филмҳоро бо рейтинги 16+ ва 18+ ба майдони диди кӯдак истисно мекунад.
    Эҷоди плейлистҳои кӯдакона: Тугмаи иловаи зуд ба волидайн имкон медиҳад, ки плейлистҳои пӯшидаи "Барои кӯдакон"-ро эҷод кунанд.`,
            },
          },
          {
            slug: "web-tajik-page",
            title: {
              ru: "Раздел: Таджикские фильмы",
              en: "Section: Tajik Movies",
              tj: "Бахш: Филмҳои тоҷикӣ",
            },
            imageSrc: "/images/projects/mavjisomon/web-tajik-page.png",
            BannerSrc: "/images/projects/mavjisomon/web-tajik-page.png",
            shortInfo: {
              ru: "Национальный кинематограф",
              en: "National cinema",
              tj: "Кинематографи миллӣ",
            },
            fullInfo: {
              ru: `Раздел «Таджикские фильмы»: национальное наследие, реставрация классики и современный кинопрокат

Раздел «Таджикские фильмы» — это уникальная фича и гордость платформы Mavji Somon. Он посвящен сохранению и популяризации национального кинематографа. На главном баннере раздела бережно промоутируется бессмертная классика, например, легендарный фильм 1957 года «Я ВСТРЕТИЛ ДЕВУШКУ». 

Ниже представлена богатая коллекция таджикского кино, от исторических эпосов («Рустам») до современных драм и криминальных историй. Каталог оснащен подробными фильтрами по жанрам.

1. Культурная миссия и цифровое сохранение кинонаследия

Раздел «Таджикские фильмы» выходит далеко за рамки стандартной стриминговой категории, выступая полноценным цифровым архивом национального искусства:

    Оцифровка и реставрация классики: Шедевры студии «Таджикфильм» советского периода представлены в бережно восстановленном качестве.
    Связь поколений: Платформа объединяет в одном пространстве исторические эпопеи и современные ленты.

2. Промо-баннер как дань уважения мастерам кино

Hero-слайдер раздела спроектирован с особым вниманием к историческому контексту:

    Ретроспективная подача: Использование архивных фотоматериалов, аутентичной типографики и кадров со съемочных площадок создает атмосферу музейного почтения.
    Контекстные сноски: Карточки классических фильмов снабжены историческими справками.
    Мгновенный просмотр: Интерактивные элементы баннера позволяют запустить просмотр классики в один клик.

3. Архитектура каталога и навигация по эпохам

Каталог национального кино структурирован так, чтобы зритель мог легко перемещаться между совершенно разными периодами:

    Хронологическая и жанровая фильтрация: Наряду со стандартными тегами внедрены фильтры по десятилетиям.
    Современное жанровое кино: Подборка актуальных картин («Номзад», «Преступник и адвокаты») демонстрирует развитие современного таджикского продакшена.
    Языковые опции и субтитры: Для картин предусмотрены дорожки на таджикском языке, а также субтитры, что делает национальный кинематограф доступным для представителей диаспоры и зарубежных ценителей восточного кино.

4. Значение для экосистемы Mavji Somon

Наличие столь проработанного раздела подчеркивает статус Mavji Somon как государственной IPTV-платформы, нацеленной не только на трансляцию глобальных франшиз, но и на развитие внутреннего медиарынка, поддержку отечественных авторов и сохранение национального культурного кода в цифровой среде.`,
              en: `The "Tajik Movies" section: national heritage, restoration of classics, and modern cinema

The "Tajik Movies" section is a unique feature and pride of the Mavji Somon platform. It is dedicated to preserving and promoting national cinema. The main banner of the section carefully promotes immortal classics, such as the legendary 1957 film "I MET A GIRL".

Below is a rich collection of Tajik cinema, from historical epics ("Rustam") to modern dramas and crime stories. The catalog is equipped with detailed genre filters.

1. Cultural mission and digital preservation of cinema heritage

The "Tajik Movies" section goes far beyond the standard streaming category, acting as a full-fledged digital archive of national art:

    Digitization and restoration of classics: Masterpieces of the "Tajikfilm" studio of the Soviet era are presented in carefully restored quality.
    Connection of generations: The platform unites historical epics and modern tapes in one space.

2. Promo banner as a tribute to cinema masters

The Hero slider of the section is designed with special attention to the historical context:

    Retrospective presentation: The use of archival photo materials, authentic typography, and footage from film sets creates an atmosphere of museum respect.
    Contextual footnotes: Cards of classic films are provided with historical background.
    Instant viewing: Interactive elements of the banner allow starting the viewing of classics in one click.

3. Catalog architecture and navigation across eras

The national cinema catalog is structured so that the viewer can easily move between completely different periods:

    Chronological and genre filtering: Along with standard tags, filters by era are introduced.
    Modern genre cinema: A selection of current films ("Candidate", "Criminal and Lawyers") demonstrates the development of modern Tajik production.
    Language options and subtitles: Tracks in the Tajik language and subtitles are provided.

4. Significance for the Mavji Somon ecosystem

The presence of such a well-developed section emphasizes the status of Mavji Somon as a state IPTV platform aimed at preserving the national cultural code in the digital environment.`,
              tj: `Бахши "Филмҳои тоҷикӣ": мероси миллӣ, барқарорсозии классика ва кинематографи муосир

Бахши "Филмҳои тоҷикӣ" хусусияти беназир ва ифтихори платформаи Mavji Somon мебошад. Он ба ҳифз ва таблиғи кинематографи миллӣ бахшида шудааст. Дар баннери асосии бахш классикаи безавол, ба мисли филми афсонавии соли 1957 "МАН ДУХТАРЕРО ВОХӮРДАМ" пешбарӣ карда мешавад.

Дар поён маҷмӯаи ғании кинои тоҷик, аз ҳамосаҳои таърихӣ ("Рустам") то драмаҳои муосир ва ҳикояҳои криминалӣ оварда шудааст. Каталог бо филтрҳои муфассал аз рӯи жанрҳо муҷаҳҳаз шудааст.

1. Миссияи фарҳангӣ ва ҳифзи рақамии мероси кино

Бахши "Филмҳои тоҷикӣ" ҳамчун бойгонии мукаммали рақамии санъати миллӣ баромад мекунад:

    Рақамикунонӣ ва барқарорсозии классика: Шоҳасарҳои студияи "Тоҷикфилм"-и даврони шӯравӣ бо сифати бодиққат барқароршуда пешниҳод шудаанд.
    Пайвастагии наслҳо: Платформа филмҳои таърихӣ ва наворҳои муосирро дар як фазо муттаҳид мекунад.

2. Баннери таблиғотӣ ҳамчун эҳтиром ба устодони кино

Слайдери Hero бо таваҷҷӯҳи махсус ба контексти таърихӣ тарҳрезӣ шудааст:

    Пешниҳоди ретроспективӣ: Истифодаи маводҳои аксии бойгонӣ ва типографияи аслӣ фазои эҳтироми осорхонаро эҷод мекунад.
    Эзоҳҳои контекстӣ: Кортҳои филмҳои классикӣ бо маълумотномаҳои таърихӣ таъмин карда шудаанд.
    Тамошои фаврӣ: Унсурҳои интерактивии баннер имкон медиҳанд тамошои классикаро бо як клик оғоз кунед.

3. Меъмории каталог ва навигатсия дар давраҳо

Каталоги кинои ватанӣ тавре сохта шудааст, ки тамошобин метавонад ба осонӣ байни давраҳои гуногун ҳаракат кунад:

    Филтратсияи хронологӣ ва жанрӣ: Дар баробари тегҳои стандартӣ, филтрҳо аз рӯи давраҳо ҷорӣ карда шудаанд.
    Кинои жанрии муосир: Интихоби филмҳои актуалӣ ("Номзад", "Ҷинояткор ва адвокатҳо") рушди истеҳсолоти муосири тоҷикро нишон медиҳад.
    Имконоти забон ва субтитрҳо: Барои филмҳо роҳҳо бо забони тоҷикӣ ва субтитрҳо пешбинӣ шудаанд.

4. Аҳамият барои экосистемаи Mavji Somon

Мавҷудияти чунин бахши хуб таҳияшуда мақоми Mavji Somon-ро ҳамчун платформаи давлатии IPTV, ки ба ҳифзи коди фарҳанги миллӣ дар муҳити рақамӣ нигаронида шудааст, таъкид мекунад.`,
            },
          },
          {
            slug: "web-radio",
            title: {
              ru: "Радио и Аудио трансляции",
              en: "Radio and Audio broadcasts",
              tj: "Радио ва пахшҳои аудиоӣ",
            },
            imageSrc: "/images/projects/mavjisomon/web-radio3.png",
            BannerSrc: "/images/projects/mavjisomon/web-radio3.png",
            shortInfo: {
              ru: "Национальные радиостанции",
              en: "National radio stations",
              tj: "Шабакаҳои радиоии миллӣ",
            },
            fullInfo: {
              ru: `Раздел «Радио»: аудиальное измерение, национальный эфир и мультимедийная экосистема

Раздел «Радио» расширяет медийные возможности платформы Mavji Somon, превращая ее из классического онлайн-кинотеатра в универсальный мультимедийный хаб. Пользователям доступны прямые трансляции популярных таджикских радиостанций, таких как «Овози тоҷик», Радио «Тоҷикистон» и «Садои Душанбе».

Интерфейс компонента оснащен удобными фильтрами-табами («Все эфиры», «Таджикские») для быстрой навигации. Карточки радиостанций выполнены в светлом минималистичном стиле с крупными узнаваемыми логотипами, что создает приятный визуальный контраст с темной темой остального сайта. Технически плеер поддерживает фоновое прослушивание, позволяя пользователю наслаждаться любимыми передачами или музыкой, параллельно изучая текстовый контент или другие разделы платформы.
1. Роль радиовещания в единой мультимедийной среде

Интеграция аудиопотоков в структуру стриминговой платформы решает стратегическую задачу удержания аудитории в тех сценариях, когда просмотр видео невозможен или неудобен:

    Контент «без экрана» (Eyes-Free Consumption): Платформа адаптируется под рутинные задачи пользователя — вождение автомобиля, работу за компьютером, занятия спортом или домашние дела. Пользователю не требуется переключаться на сторонние сервисы или аналоговый приемник: прямой эфир запускается внутри той же экосистемы.

    Централизация национального вещания: Собрание ключевых государственных и независимых радиостанций страны («Радио Тоҷикистон», «Садои Душанбе», «Овози тоҷик») обеспечивает слушателей оперативной новостной повесткой, общественно-политическими программами, образовательными передачами и традиционной музыкой в прямом эфире без географических ограничений.

2. Визуальный контраст и компоновка радиовитрины

Дизайн раздела выделяется на фоне привычных темных кинолент, подчеркивая смену формата восприятия:

    Светлые акцентные карточки (Clean Cards): Использование белых и нейтрально-светлых плашек для станций создает выразительный визуальный контраст с глубоким темным фоном платформы. Это четко разграничивает видеоконтент и аудиопотоки на уровне зрительных паттернов.

    Крупные монохромные и цветные логотипы: На каждой карточке акцент сделан на официальной эмблеме станции. Высокая контрастность и отсутствие лишних декоративных элементов позволяют мгновенно идентифицировать любимую волну даже при беглом взгляде.

    Индикаторы прямого эфира (On-Air): Каждая активная карточка сопровождается пульсирующим зеленым бейджем «Прямой эфир» и анимированным эквалайзером при воспроизведении, давая моментальную визуальную обратную связь о статусе потока.

3. Быстрая селекция и навигационные табы

Система вкладок спроектирована по принципу максимальной простоты и скорости отклика:

    Тематические фильтры («Все эфиры», «Таджикские»): Табы позволяют моментально отсекать ненужные направления. Вкладка «Таджикские» объединяет исключительно станции республиканского и регионального значения, что актуально как для жителей страны, так и для соотечественников за рубежом.

    Поиск по частотам и жанрам: Дополнительная поисковая строка позволяет находить радиостанции не только по названию, но и по привычной FM-частоте (например, 100.8 FM) или музыкальному формату (информационное радио, народная музыка, поп-эстрада).

4. Архитектура фонового воспроизведения и мини-плеер

Техническая реализация аудиотрансляций гарантирует непрерывность звучания при свободном перемещении по сайту:

    Плавающий мини-плеер (Floating Audio Bar): При запуске эфира в нижней части экрана фиксируется компактная панель управления. Она содержит название станции, регулятор громкости, кнопку паузы/возобновления и таймер прослушивания.

    Single Page Application (SPA) архитектура: Благодаря плавной подгрузке страниц без полной перезагрузки браузера пользователь может слушать трансляцию Радио «Тоҷикистон» и одновременно просматривать фильмотеку, читать описания к сериалам или настраивать профиль — поток не прерывается ни на секунду.

    Низкая задержка и адаптивный битрейт: Аудиопоток оптимизирован для стабильной передачи даже при низкой скорости мобильного интернета (EDGE/3G), обеспечивая кристально чистый звук без буферизации и обрывов.`,
              en: `The "Radio" section: audio dimension, national broadcasting, and multimedia ecosystem

The "Radio" section expands the media capabilities of the Mavji Somon platform, turning it from a classic online cinema into a universal multimedia hub. Users have access to live broadcasts of popular Tajik radio stations.

The interface of the component is equipped with convenient filter tabs for quick navigation. Radio station cards are made in a light, minimalist style with large, recognizable logos.

1. The role of broadcasting in a single multimedia environment

Integrating audio streams into the structure of a streaming platform solves the strategic task of retaining an audience in scenarios where watching videos is impossible or inconvenient.

2. Visual contrast and layout of the radio showcase

The design of the section stands out against the background of familiar dark films:

    Light accent cards (Clean Cards): Using white and neutral-light backgrounds creates a visual contrast.
    Large monochrome and color logos: Emphasis on the official station emblem.
    Live indicators (On-Air): Each active card is accompanied by a pulsating "Live" badge.

3. Quick selection and navigation tabs

The tab system is designed for maximum simplicity and response speed:

    Thematic filters: Allow instantly cutting off unnecessary directions.
    Search by frequencies and genres: An additional search bar.

4. Background playback architecture and mini-player

The technical implementation of audio broadcasts guarantees continuous sound when moving freely around the site:

    Floating Audio Bar: When starting a broadcast, a compact control panel is fixed at the bottom.
    Single Page Application (SPA) architecture: Due to smooth page loading without reloading the browser, the user can listen to the radio and browse the movie library simultaneously.`,
              tj: `Бахши "Радио": андозагирии аудиоӣ, пахши миллӣ ва экосистемаи мултимедиявӣ

Бахши "Радио" имкониятҳои медиавии платформаи Mavji Somon-ро васеъ намуда, онро аз кинотеатри онлайнии классикӣ ба хаби мултимедиявии универсалӣ табдил медиҳад.

Интерфейси ҷузъ бо филтрҳои қулай барои навигатсияи зуд муҷаҳҳаз шудааст. Кортҳои радиостансияҳо бо услуби равшани минималистӣ бо логотипҳои калон ва шинохташаванда сохта шудаанд.

1. Нақши пахши радио дар муҳити ягонаи мултимедиявӣ

Ҳамгироии ҷараёнҳои аудиоӣ ба сохтори платформаи стримингӣ вазифаи стратегии нигоҳ доштани аудиторияро дар сенарияҳое, ки тамошои видео ғайриимкон ё нороҳат аст, ҳал мекунад.

2. Контрасти визуалӣ ва тарҳбандии витринаи радио

Тарҳи бахш дар заминаи филмҳои торики муқаррарӣ фарқ мекунад:

    Кортҳои аксентии равшан: Истифодаи заминаҳои сафед ва бетараф контрасти визуалиро эҷод мекунад.
    Логотипҳои калони монохромӣ ва ранга: Таваҷҷӯҳ ба эмблемаи расмии стансия.
    Нишондиҳандаҳои пахши мустақим (On-Air): Нишони набздори "Пайваст".

3. Интихоби зуд ва ҷадвалҳои навигатсионӣ

Системаи ҷадвалҳо (tabs) аз рӯи принсипи соддагии ҳадди аксар тарҳрезӣ шудааст:

    Филтрҳои мавзӯӣ: Имкон медиҳанд, ки самтҳои нолозим фавран қатъ карда шаванд.
    Ҷустуҷӯ аз рӯи басомадҳо ва жанрҳо: Сатри ҷустуҷӯи иловагӣ.

4. Меъмории бозикунии пасзамина ва мини-плеер

Татбиқи техникии пахши аудио кафолат медиҳад, ки овоз ҳангоми ҳаракати озод дар сайт қатъ намегардад:

    Мини-плеери шинокунанда: Ҳангоми оғози пахш, панели идоракунии паймон дар поёни экран ҷойгир мешавад.
    Меъмории Single Page Application (SPA): Корбар метавонад ҳамзамон радио гӯш кунад ва китобхонаи филмҳоро варақ занад.`,
            },
          },
          {
            slug: "web-tv",
            title: {
              ru: "ТВ Каналы и Прямой эфир",
              en: "TV Channels and Live Broadcast",
              tj: "Шабакаҳои ТВ ва Пахши мустақим",
            },
            imageSrc: "/images/projects/mavjisomon/web-tv3.png",
            BannerSrc: "/images/projects/mavjisomon/web-tv3.png",
            shortInfo: {
              ru: "Онлайн ТВ и телепрограмма",
              en: "Online TV and TV program",
              tj: "ТВ онлайн ва барномаи телевизионӣ",
            },
            fullInfo: {
              ru: `Раздел «Все каналы»: ядро IPTV-вещания, интеграция EPG и эргономика эфирной сетки

Раздел «Все каналы» предоставляет зрителям возможность смотреть прямой эфир главных национальных телеканалов, таких как «Тоҷикистон», «Сафина» и многих других. Этот функционал является сердцем платформы Mavji Somon, обеспечивая бесперебойную трансляцию IPTV в высоком качестве.

Каждая карточка канала включает в себя не только логотип, но и интегрированную электронную программу передач (EPG). При нажатии на ссылку «Программа передач» пользователь может посмотреть актуальное расписание эфира. Это позволяет заранее планировать просмотр любимых телешоу, новостей и спортивных событий. Дизайн раздела выполнен в виде удобной сетки (grid) с крупными карточками, где интерфейс остается интуитивно понятным для зрителей всех возрастов.
1. Статус ядра платформы и технологическая стабильность трансляций

Как государственная услуга официального вещания, Mavji Somon ставит трансляцию линейного ТВ в ранг приоритетных сервисов:

    Инфраструктура с низкой задержкой (Low-Latency IPTV): Передача телевизионного сигнала оптимизирована с использованием современных протоколов потокового вещания (HLS/DASH). Это исключает отставание картинки от прямого эфира, что критически важно при просмотре динамичных спортивных матчей на каналах «Варзиш» и «Футбол HD», а также экстренных новостных выпусков на «Ҷаҳоннамо».

    Адаптивное переключение качества: Плеер непрерывно анализирует стабильность пользовательского канала связи и динамически переключает битрейт от стандартного разрешения (SD) до Full HD без прерывания видеоряда, предотвращая буферизацию даже при пиковых нагрузках на сеть.

2. Интеллектуальный телегид: функционал и архитектура EPG

Интеграция электронной программы передач (Electronic Program Guide) превращает пассивный просмотр телевизора в контролируемый и предсказуемый процесс:

    Модальное окно и таймлайн расписания: Клик по ссылке «Программа передач» раскрывает структурированное расписание на текущий день и ближайшую неделю. Передачи сгруппированы по временным слотам с указанием жанра и возрастного рейтинга, что избавляет от необходимости обращаться к сторонним печатным или сетевым телепрограммам.

    Индикация текущего прогресса: Внутри карточки отображается название передачи, идущей прямо сейчас, дополненное тонкой полосой прогресса (progress bar). Зритель с первого взгляда видит, сколько минут прошло с начала выпуска и когда начнется следующий проект.

    Напоминания и отложенный старт: Интегрированный EPG позволяет установить напоминание на интересующий фильм или матч: система пришлет уведомление в веб-интерфейсе или мобильном приложении за несколько минут до выхода программы в эфир.

3. Адаптивная Grid-структура и визуальная иерархия

Сетка каналов спроектирована с учетом потребностей разновозрастной аудитории — от молодежи до старшего поколения:

    Крупные контрастные карточки: Каждая ячейка сетки содержит официальную эмблему телеканала высокой четкости на нейтральном контрастном фоне, что исключает ошибки при быстром сканировании каталога и облегчает навигацию пожилым зрителям.

    Универсальная отзывчивость: Настольная версия отображает плотную сетку из нескольких столбцов, обеспечивая мгновенный панорамный обзор всех доступных медиаресурсов, а на мобильных устройствах и Smart TV интерфейс плавно масштабируется в комфортные для пальца или пульта сенсорные плитки.

    Быстрый старт в один клик: Наведение на карточку активирует акцентную кнопку воспроизведения, запускающую видеопоток мгновенно прямо в окне встроенного плеера без лишних промежуточных экранов.

4. Тематическая классификация телевещания

Чтобы ориентироваться в десятках телеканалов было максимально удобно, над основной сеткой предусмотрен гибкий классификатор:

    Сегментация по направленности: Пользователь может мгновенно отфильтровать каналы по тематикам — «Общенациональные», «Спортивные», «Культура и кино», «Детские», «Музыкальные» и «Новостные».

    Персональный список «Любимые каналы»: Возможность закреплять часто просматриваемые каналы вверху сетки персонализирует рабочее пространство и ускоряет доступ к привычным вечерним эфирам.`,
              en: `The "All Channels" section: the core of IPTV broadcasting, EPG integration, and broadcast grid ergonomics

The "All Channels" section provides viewers with the opportunity to watch live broadcasts of the main national TV channels. This functionality is the heart of the Mavji Somon platform, providing uninterrupted high-quality IPTV broadcasting.

Each channel card includes an integrated electronic program guide (EPG). When clicking on the "TV Program" link, the user can see the current broadcast schedule.

1. Platform core status and broadcasting technological stability

As a state service of official broadcasting, Mavji Somon places linear TV broadcasting among the priority services:

    Low-Latency IPTV infrastructure: The transmission of the television signal is optimized using modern streaming protocols (HLS/DASH).
    Adaptive quality switching: The player continuously analyzes the stability of the user's connection.

2. Intelligent TV guide: EPG functionality and architecture

Integrating the Electronic Program Guide turns passive TV viewing into a controlled and predictable process:

    Modal window and schedule timeline: A structured schedule for the current day and the next week.
    Current progress indication: The card displays a progress bar showing how many minutes have passed since the start.
    Reminders and delayed start: Allows setting a reminder for a movie or match of interest.

3. Adaptive Grid structure and visual hierarchy

The channel grid is designed taking into account the needs of an audience of all ages:

    Large contrasting cards: Each grid cell contains the official high-definition TV channel emblem.
    Universal responsiveness: On desktop, it shows a dense multi-column grid, while on mobile, it scales into touch-friendly tiles.
    One-click quick start: Hovering over the card activates a prominent play button.

4. Thematic classification of TV broadcasting

To easily navigate dozens of TV channels, a flexible classifier is provided above the main grid:

    Segmentation by focus: The user can instantly filter channels by topics.
    Personal "Favorite Channels" list: The ability to pin frequently watched channels at the top of the grid.`,
              tj: `Бахши "Ҳамаи шабакаҳо": меҳвари пахши IPTV, ҳамгироии EPG ва эргономикаи шабакаи эфир

Бахши "Ҳамаи шабакаҳо" ба тамошобинон имкон медиҳад, ки пахши мустақими шабакаҳои асосии миллии телевизиониро тамошо кунанд. Ин функсия дили платформаи Mavji Somon мебошад.

Ҳар як корти шабака барномаи электронии телевизионии ҳамгирошударо (EPG) дар бар мегирад. Ҳангоми пахш кардани истиноди "Барномаи телевизионӣ", корбар метавонад ҷадвали ҷории пахшро бинад.

1. Мақоми меҳвари платформа ва устувории технологии пахш

Ҳамчун хидмати давлатии пахши расмӣ, Mavji Somon пахши ТВ-и хаттиро дар қатори хидматҳои афзалиятнок мегузорад:

    Инфрасохтори Low-Latency IPTV: Интиқоли сигнали телевизионӣ бо истифода аз протоколҳои муосир беҳтар карда шудааст.
    Ивазкунии адаптивии сифат: Плеер пайваста устувории канали алоқаи корбарро таҳлил мекунад.

2. Дастури зеҳнии телевизионӣ: функсияҳо ва меъмории EPG

Ҳамгироии барномаи электронии телевизионӣ (EPG) тамошои ғайрифаъоли телевизорро ба як раванди идорашаванда табдил медиҳад:

    Равзанаи модалӣ ва ҷадвали вақт: Ҷадвали сохторӣ барои рӯзи ҷорӣ ва ҳафтаи оянда.
    Нишондиҳандаи пешрафти ҷорӣ: Дар дохили корт номи барнома ва сатри пешрафт нишон дода мешавад.
    Ёдраскуниҳо ва оғози таъхиршуда: Имкон медиҳад, ки барои филм ё бозии дилхоҳ ёдраскунӣ гузоред.

3. Сохтори Grid-и адаптивӣ ва иерархияи визуалӣ

Шабакаи каналҳо бо назардошти эҳтиёҷоти аудиторияи синну солашон гуногун тарҳрезӣ шудааст:

    Кортҳои контрастии калон: Ҳар як чашмаки шабака эмблемаи расмии шабакаи телевизиониро дар бар мегирад.
    Ҷавобгӯии универсалӣ: Версияи мизи корӣ шабакаи зиччи чанд сутунро нишон медиҳад.
    Оғози зуд бо як клик: Ҳаракат додан болои корт тугмаи бозиро фаъол мекунад.

4. Таснифи мавзӯии пахши телевизион

Барои бароҳатии ҳадди аксар дар паймоиш, дар болои шабакаи асосӣ таснифгари чандир пешбинӣ шудааст:

    Сегментатсия аз рӯи самт: Корбар метавонад фавран каналҳоро аз рӯи мавзӯъҳо филтр кунад.
    Рӯйхати шахсии "Шабакаҳои дӯстдошта": Имконияти часпондани каналҳои зуд-зуд тамошошаванда дар боло.`,
            },
          },
        ],
      },
      {
        tabName: { ru: "Админ-панель", en: "Admin Panel", tj: "Панели админ" },
        items: [
          {
            slug: "user-management",
            title: {
              ru: "Управление пользователями",
              en: "User Management",
              tj: "Идоракунии корбарон",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-1.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "CRM и биллинг подписчиков",
              en: "CRM and subscriber billing",
              tj: "CRM ва биллинги муштариён",
            },
            fullInfo: {
              ru: `Модуль управления пользователями представляет собой полноценную CRM-систему, разработанную специально для нужд телеком-провайдера. Администраторы могут в реальном времени просматривать статус подписок, историю платежей и детали устройств каждого абонента. Система интегрирована с биллинговой платформой для автоматического списания абонентской платы.

Дополнительно реализованы функции глубокой аналитики: когортный анализ, отслеживание оттока (churn rate) и активности пользователей. Для технической поддержки предусмотрен функционал быстрой блокировки, сброса паролей и отправки персональных push-уведомлений на устройства клиентов.`,
              en: `The user management module is a full-fledged CRM system designed specifically for the needs of a telecom provider. Administrators can view subscription statuses, payment histories, and device details of each subscriber in real time. The system is integrated with the billing platform for automatic subscription fee deduction.

Additionally, deep analytics functions are implemented: cohort analysis, churn rate tracking, and user activity monitoring. For technical support, there is functionality for quick blocking, password resets, and sending personalized push notifications to client devices.`,
              tj: `Модули идоракунии корбарон як системаи мукаммали CRM мебошад, ки махсус барои эҳтиёҷоти провайдери телеком таҳия шудааст. Маъмурон метавонанд ҳолати обунаҳо, таърихи пардохтҳо ва тафсилоти дастгоҳҳои ҳар як муштариро дар вақти воқеӣ бубинанд. Система бо платформаи биллингӣ барои ба таври худкор ситонидани ҳаққи абонентӣ ҳамгиро шудааст.

Илова бар ин, вазифаҳои таҳлилии амиқ амалӣ карда шуданд: таҳлили когортӣ, пайгирии рехтани муштариён (churn rate) ва фаъолияти корбарон. Барои дастгирии техникӣ функсияи зуд масдуд кардан, барқарор кардани паролҳо ва фиристодани огоҳиномаҳои шахсии push ба дастгоҳҳои мизоҷон пешбинӣ шудааст.`,
            },
          },
          {
            slug: "content-management",
            title: {
              ru: "Управление контентом (CMS)",
              en: "Content Management (CMS)",
              tj: "Идоракунии мундариҷа (CMS)",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-2.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "Организация базы в 130 000+ фильмов",
              en: "Organizing a database of 130,000+ movies",
              tj: "Ташкили пойгоҳи дорои 130 000+ филм",
            },
            fullInfo: {
              ru: `CMS-модуль разработан для обработки огромных массивов медиаданных. Загрузка новых фильмов и сериалов автоматизирована: администраторам достаточно указать ID из популярных кинобаз, и система сама скачает постеры, трейлеры, описания и список актеров. Поддерживается массовое редактирование и транскодирование видеофайлов в несколько разрешений (HLS).

Для удобной навигации клиентов контент-менеджеры могут создавать кастомные подборки, сортировать элементы по жанрам и годам выпуска, а также управлять приоритетом выдачи контента на Главном экране приложения с помощью визуального drag-and-drop интерфейса.`,
              en: `The CMS module is designed to process huge arrays of media data. Uploading new movies and series is automated: administrators only need to specify the ID from popular movie databases, and the system will download posters, trailers, descriptions, and cast lists itself. Bulk editing and transcoding of video files into multiple resolutions (HLS) are supported.

For convenient client navigation, content managers can create custom collections, sort elements by genres and release years, and manage the priority of content output on the application's Main Screen using a visual drag-and-drop interface.`,
              tj: `Модули CMS барои коркарди массивҳои бузурги маълумоти медиа таҳия шудааст. Боркунии филмҳо ва сериалҳои нав автоматикунонида шудааст: ба маъмурон танҳо лозим аст, ки ID-ро аз пойгоҳҳои машҳури кино нишон диҳанд ва система худаш постерҳо, трейлерҳо, тавсифҳо ва рӯйхати актёрҳоро зеркашӣ мекунад. Таҳрири оммавӣ ва транскодинги файлҳои видеоӣ ба якчанд қарорҳо (HLS) дастгирӣ карда мешавад.

Барои паймоиши қулайи мизоҷон, менеҷерҳои мундариҷа метавонанд интихобҳои фармоишӣ эҷод кунанд, унсурҳоро аз рӯи жанрҳо ва солҳои барориш ҷудо кунанд, инчунин афзалияти баровардани мундариҷаро дар Экрани асосии барнома бо истифода аз интерфейси визуалии drag-and-drop идора кунанд.`,
            },
          },
          {
            slug: "live-tv-management",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-1.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "Мониторинг 2500+ телеканалов",
              en: "Monitoring 2500+ TV channels",
              tj: "Мониторинги 2500+ шабакаҳои телевизионӣ",
            },
            fullInfo: {
              ru: `Панель управления Live TV обеспечивает мониторинг трансляций более 2500 телеканалов в реальном времени. Система автоматически проверяет доступность HLS-потоков и отправляет уведомления техникам при падении сигнала. Администраторы могут управлять расписанием телепередач (EPG), привязывая XMLTV-источники к соответствующим каналам.

В модуле реализована функция архива (Catch-up TV), позволяющая настраивать глубину записи эфира для каждого канала индивидуально. Также предусмотрена категоризация телеканалов (Новости, Спорт, Кино) для удобного отображения в клиентских приложениях.`,
              en: `The Live TV control panel provides real-time monitoring of broadcasts from over 2500 TV channels. The system automatically checks the availability of HLS streams and sends notifications to technicians if the signal drops. Administrators can manage TV schedules (EPG) by linking XMLTV sources to corresponding channels.

The module implements an archive function (Catch-up TV), allowing the depth of broadcast recording to be configured for each channel individually. Categorization of TV channels (News, Sports, Cinema) is also provided for convenient display in client applications.`,
              tj: `Панели идоракунии Live TV мониторинги пахши беш аз 2500 шабакаи телевизиониро дар вақти воқеӣ таъмин мекунад. Система мавҷудияти ҷараёнҳои HLS-ро ба таври худкор тафтиш мекунад ва ҳангоми гум шудани сигнал ба техникҳо огоҳинома мефиристад. Маъмурон метавонанд ҷадвали барномаҳои телевизиониро (EPG) тавассути пайваст кардани манбаъҳои XMLTV ба шабакаҳои мувофиқ идора кунанд.

Модул функсияи бойгониро (Catch-up TV) амалӣ мекунад, ки имкон медиҳад умқи сабти эфир барои ҳар як шабака ба таври инфиродӣ танзим карда шавад. Категориябандии шабакаҳои телевизионӣ (Ахбор, Варзиш, Кино) инчунин барои намоиши қулай дар барномаҳои муштарӣ пешбинӣ шудааст.`,
            },
          },
        ],
      },
      {
        tabName: {
          ru: "Мобильные приложения",
          en: "Mobile Apps",
          tj: "Барномаҳои мобилӣ",
        },
        items: [
          {
            slug: "main-screen-navigation",
            title: {
              ru: "Главный экран и Навигация",
              en: "Main Screen and Navigation",
              tj: "Экрани асосӣ ва Навигатсия",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-3.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "MainScreen.js & Redux",
              en: "MainScreen.js & Redux",
              tj: "MainScreen.js & Redux",
            },
            fullInfo: {
              ru: `Интерфейс мобильного приложения полностью построен на кросс-платформенном фреймворке React Native, что обеспечивает нативную производительность как на iOS, так и на Android устройствах. В качестве главного архитектурного паттерна управления состоянием используется Redux, что позволяет глобально контролировать авторизацию (authReducer) и подгрузку медиа-контента.

Главный экран (MainScreen) включает в себя динамическую, плавно анимированную карусель баннеров на базе Animated.FlatList. Под каруселью реализованы горизонтальные списки (FlatList) для различных подборок: популярные фильмы, сериалы, таджикское кино и прямые эфиры (Live TV). Данные эффективно кэшируются через Async Storage, снижая нагрузку на сервер при частых запусках.`,
              en: `The mobile application interface is entirely built on the React Native cross-platform framework, which ensures native performance on both iOS and Android devices. Redux is used as the main architectural pattern for state management, allowing global control over authorization (authReducer) and media content loading.

The Main Screen includes a dynamic, smoothly animated banner carousel based on Animated.FlatList. Horizontal lists (FlatList) for various collections are implemented under the carousel: popular movies, series, Tajik cinema, and live broadcasts (Live TV). Data is efficiently cached via Async Storage, reducing server load during frequent launches.`,
              tj: `Интерфейси барномаи мобилӣ пурра дар чаҳорчӯбаи кросс-платформаи React Native сохта шудааст, ки иҷрои маҳаллиро ҳам дар дастгоҳҳои iOS ва ҳам Android таъмин мекунад. Redux ҳамчун намунаи асосии меъмории идоракунии ҳолат истифода мешавад, ки имкон медиҳад авторизтсия (authReducer) ва боркунии мундариҷаи медиавӣ ба таври глобалӣ назорат карда шавад.

Экрани асосӣ (MainScreen) карусели динамикӣ ва ҳамвор аниматсияшудаи баннерҳоро дар асоси Animated.FlatList дар бар мегирад. Дар зери карусел рӯйхатҳои уфуқӣ (FlatList) барои интихобҳои гуногун амалӣ карда мешаванд: филмҳои машҳур, сериалҳо, кинои тоҷик ва пахшҳои мустақим (Live TV). Маълумот тавассути Async Storage ба таври муассир кэш карда мешавад ва сарбории серверро ҳангоми оғози зуд-зуд коҳиш медиҳад.`,
            },
          },
          {
            slug: "video-player-epg",
            title: {
              ru: "Видеоплеер и EPG",
              en: "Video Player and EPG",
              tj: "Плеери Видео ва EPG",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-4.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "VPlayerScreen & HistoryTracking",
              en: "VPlayerScreen & HistoryTracking",
              tj: "VPlayerScreen & HistoryTracking",
            },
            fullInfo: {
              ru: `Стриминговое воспроизведение видеоконтента осуществляется за счет интеграции мощной библиотеки react-native-video. Плеер поддерживает адаптивный битрейт (HLS), что позволяет плавно переключать качество видео в зависимости от текущей скорости мобильного интернета пользователя. Доступен функционал «Картинка в картинке» (PiP) для фонового просмотра.

Отдельное внимание уделено интеграции с Live-телеканалами: в приложении реализован удобный интерфейс телепрограммы (EPGScreen), который синхронизируется с сервером по API. Модуль истории (HistoryTrackingScreen) автоматически запоминает временную метку (таймкод) при закрытии фильма, чтобы зритель мог продолжить просмотр с того же места на любом из своих устройств.`,
              en: `Streaming playback of video content is carried out through the integration of the powerful react-native-video library. The player supports adaptive bitrate (HLS), allowing smooth switching of video quality depending on the user's current mobile internet speed. Picture-in-Picture (PiP) functionality is available for background viewing.

Special attention is paid to integration with Live TV channels: the application implements a convenient TV guide interface (EPGScreen), which is synchronized with the server via API. The history module (HistoryTrackingScreen) automatically remembers the time stamp (timecode) when closing a movie, so the viewer can continue watching from the same place on any of their devices.`,
              tj: `Пахши ҷараёнии мундариҷаи видеоӣ тавассути ҳамгироии китобхонаи пуриқтидори react-native-video амалӣ карда мешавад. Плеер битрейти адаптивиро (HLS) дастгирӣ мекунад, ки имкон медиҳад сифати видео вобаста ба суръати ҷории интернети мобилии корбар ба таври ҳамвор иваз карда шавад. Функсияи «Тасвир дар тасвир» (PiP) барои тамошои заминавӣ дастрас аст.

Таваҷҷӯҳи махсус ба ҳамгироӣ бо шабакаҳои телевизионии Live дода шудааст: дар барнома интерфейси қулайи барномаи телевизионӣ (EPGScreen) амалӣ карда шудааст, ки бо сервер тавассути API ҳамоҳанг карда мешавад. Модули таърих (HistoryTrackingScreen) ҳангоми пӯшидани филм тамғаи вақтро (таймкод) ба таври худкор дар хотир нигоҳ медорад, то тамошобин тавонад аз ҳамон ҷо дар ҳама гуна дастгоҳҳои худ тамошоро идома диҳад.`,
            },
          },
          {
            slug: "security-radio",
            title: {
              ru: "Безопасность и Радио",
              en: "Security and Radio",
              tj: "Бехатарӣ ва Радио",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-3.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "SecurityScreen & MusicPlayer",
              en: "SecurityScreen & MusicPlayer",
              tj: "SecurityScreen & MusicPlayer",
            },
            fullInfo: {
              ru: `Для защиты профиля пользователя и платных подписок внедрен модуль безопасности (SecurityScreen), использующий нативный функционал биометрии через react-native-biometrics. Пользователь может мгновенно авторизоваться с помощью Face ID или Touch ID, не вводя пароль при каждом запуске.

В приложении также реализованы независимые медиа-модули для прослушивания локального радио (RadioScreen) и музыки (MusicPlayer). Музыкальный плеер поддерживает фоновое воспроизведение и управление через системный экран блокировки. UI-компоненты построены с использованием react-native-vector-icons и кастомных стилей для создания уникального пользовательского опыта.`,
              en: `To protect user profiles and paid subscriptions, a security module (SecurityScreen) was introduced, using native biometrics functionality via react-native-biometrics. The user can instantly log in using Face ID or Touch ID without entering a password at every launch.

The application also features independent media modules for listening to local radio (RadioScreen) and music (MusicPlayer). The music player supports background playback and control via the system lock screen. UI components are built using react-native-vector-icons and custom styles to create a unique user experience.`,
              tj: `Барои муҳофизати профили корбар ва обунаҳои пулакӣ модули бехатарӣ (SecurityScreen) ҷорӣ карда шуд, ки функсияҳои нативии биометрияро тавассути react-native-biometrics истифода мебарад. Корбар метавонад бо истифода аз Face ID ё Touch ID бидуни ворид кардани парол ҳангоми ҳар як оғоз фавран ворид шавад.

Барнома инчунин модулҳои мустақили медиавиро барои гӯш кардани радиои маҳаллӣ (RadioScreen) ва мусиқӣ (MusicPlayer) дар бар мегирад. Плеери мусиқӣ навозиши заминавӣ ва назоратро тавассути экрани қулфи система дастгирӣ мекунад. Компонентҳои UI бо истифода аз react-native-vector-icons ва услубҳои фармоишӣ барои эҷоди таҷрибаи беназири корбар сохта шудаанд.`,
            },
          },
        ],
      },
      {
        tabName: {
          ru: "Smart TV (TV Box)",
          en: "Smart TV (TV Box)",
          tj: "Smart TV (TV Box)",
        },
        items: [
          {
            slug: "tv-interface-navigation",
            title: {
              ru: "TV Интерфейс и Навигация",
              en: "TV Interface and Navigation",
              tj: "Интерфейси TV ва Навигатсия",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-5.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "D-Pad фокус и MainScreen.tsx",
              en: "D-Pad focus and MainScreen.tsx",
              tj: "Фокуси D-Pad ва MainScreen.tsx",
            },
            fullInfo: {
              ru: `Проект для смарт-телевизоров и приставок написан на специализированной версии React Native TV (react-native-tvos) с использованием строгой типизации TypeScript. Главным отличием от мобильной версии является полная ориентация на управление с пульта дистанционного управления (D-Pad).

Вся навигация, включая переход между боковым меню и основным контентом, построена на обработке событий onFocus и onBlur. Каждая карточка фильма (MediaCard.tsx) плавно увеличивается при наведении фокуса, используя нативные анимации для создания эффекта глубины и отзывчивости. Поддерживается сборка как под классический Android TV, так и под телевизоры на базе Tizen (через Webpack-сборку rnv).`,
              en: `The project for smart TVs and set-top boxes is written in a specialized version of React Native TV (react-native-tvos) using strict TypeScript typing. The main difference from the mobile version is the full orientation towards control via remote control (D-Pad).

All navigation, including transitions between the side menu and main content, is built on handling onFocus and onBlur events. Each movie card (MediaCard.tsx) smoothly enlarges on focus, using native animations to create a sense of depth and responsiveness. Builds are supported for both classic Android TV and Tizen-based TVs (via Webpack rnv build).`,
              tj: `Лоиҳа барои телевизорҳои интеллектуалӣ ва приставкаҳо дар версияи махсусгардонидашудаи React Native TV (react-native-tvos) бо истифода аз чопкунии қатъии TypeScript навишта шудааст. Фарқи асосӣ аз версияи мобилӣ тамоюли пурра ба идоракунӣ тавассути пульти фосилавӣ (D-Pad) мебошад.

Тамоми навигатсия, аз ҷумла гузариш байни менюи паҳлӯ ва мундариҷаи асосӣ, дар коркарди рӯйдодҳои onFocus ва onBlur сохта шудааст. Ҳар як корти филм (MediaCard.tsx) ҳангоми фокус бо истифода аз аниматсияҳои нативӣ барои эҷоди эффекти умқ ва ҷавобгӯӣ ба таври ҳамвор калон мешавад. Ҷамъоварӣ ҳам барои Android TV классикӣ ва ҳам телевизорҳои дар асоси Tizen (тавассути ҷамъоварии Webpack rnv) дастгирӣ карда мешавад.`,
            },
          },
          {
            slug: "catalog-details",
            title: {
              ru: "Каталог и Детали",
              en: "Catalog and Details",
              tj: "Каталог ва Тафсилот",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-6.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "VideosScreen & DetailsScreen",
              en: "VideosScreen & DetailsScreen",
              tj: "VideosScreen & DetailsScreen",
            },
            fullInfo: {
              ru: `В TV-приложении реализована глубокая категоризация контента на несколько разделов: Live-каналы (TvChannelsScreen.tsx), каталоги фильмов и сериалов (VideosScreen.tsx). Для оптимизации рендеринга больших списков на слабых ТВ-приставках применяются техники виртуализации списков и ленивой загрузки (lazy loading) изображений.

Страница деталей фильма (DetailsScreen.tsx) представляет собой полноценный кинотеатральный хаб: она подгружает высококачественные фоновые постеры, выводит подробные метаданные (рейтинг, жанр, описание) и включает список рекомендаций. Пользователь может добавить фильм в «Избранное» (FavoritesScreen.tsx) для быстрого доступа с любого устройства.`,
              en: `The TV app implements deep categorization of content into several sections: Live channels (TvChannelsScreen.tsx), movie catalogs, and series (VideosScreen.tsx). To optimize the rendering of large lists on weak set-top boxes, list virtualization and image lazy loading techniques are used.

The movie details page (DetailsScreen.tsx) is a full-fledged cinematic hub: it loads high-quality background posters, displays detailed metadata (rating, genre, description), and includes a list of recommendations. The user can add a movie to "Favorites" (FavoritesScreen.tsx) for quick access from any device.`,
              tj: `Барномаи телевизионӣ гурӯҳбандии амиқи мундариҷаро ба якчанд бахшҳо амалӣ мекунад: Шабакаҳои Live (TvChannelsScreen.tsx), каталогҳои филмҳо ва сериалҳо (VideosScreen.tsx). Барои беҳтар кардани визуализатсияи рӯйхатҳои калон дар приставкаҳои заифи телевизионӣ, усулҳои виртуализатсияи рӯйхат ва боркунии танбал (lazy loading) тасвирҳо истифода мешаванд.

Саҳифаи тафсилоти филм (DetailsScreen.tsx) маркази мукаммали кинотеатр мебошад: он постерҳои баландсифати заминаро бор мекунад, метамаълумоти муфассалро (рейтинг, жанр, тавсиф) намоиш медиҳад ва рӯйхати тавсияҳоро дар бар мегирад. Корбар метавонад филмро ба «Дӯстдошта» (FavoritesScreen.tsx) барои дастрасии зуд аз ҳама гуна дастгоҳ илова кунад.`,
            },
          },
          {
            slug: "payment-player",
            title: {
              ru: "Оплата и Плеер",
              en: "Payment and Player",
              tj: "Пардохт ва Плеер",
            },
            imageSrc: "/images/projects/mavjisomon/gallery-5.png",
            BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
            shortInfo: {
              ru: "PlayerScreen & PaymentGuide",
              en: "PlayerScreen & PaymentGuide",
              tj: "PlayerScreen & PaymentGuide",
            },
            fullInfo: {
              ru: `Для воспроизведения Live TV и VOD-контента на телевизорах используется специально адаптированный нативный ТВ-плеер (PlayerScreen.tsx). Он обеспечивает стабильную расшифровку потока без буферизации, поддержку аппаратного декодирования и обработку кнопок пульта (плей/пауза/перемотка).

Важным бизнес-модулем является встроенная система биллинга (PaymentGuide.tsx и ProductsScreen.tsx). Пользователям больше не нужно заходить на сайт с компьютера — они могут просматривать доступные тарифы, изучать инструкции по пополнению баланса через локальные терминалы и управлять своей подпиской прямо на большом экране, используя только пульт ДУ.`,
              en: `A specially adapted native TV player (PlayerScreen.tsx) is used to play Live TV and VOD content on TVs. It ensures stable stream decoding without buffering, hardware decoding support, and remote control button handling (play/pause/rewind).

An important business module is the built-in billing system (PaymentGuide.tsx and ProductsScreen.tsx). Users no longer need to visit the site from a computer — they can view available tariffs, study instructions for topping up their balance via local terminals, and manage their subscription right on the big screen, using only the remote control.`,
              tj: `Плеери махсус мутобиқшудаи телевизионии нативӣ (PlayerScreen.tsx) барои намоиши мундариҷаи Live TV ва VOD дар телевизорҳо истифода мешавад. Он рамзкушоии устувори ҷараёнро бидуни буферизатсия, дастгирии рамзкушоии сахтафзор ва коркарди тугмаҳои пульт (навозиш/таваққуф/қафо) таъмин мекунад.

Модули муҳими тиҷоратӣ системаи дарунсохти биллинг мебошад (PaymentGuide.tsx ва ProductsScreen.tsx). Истифодабарандагон дигар лозим нест, ки аз компютер ба сайт ворид шаванд - онҳо метавонанд тарифҳои дастрасро бинанд, дастурҳоро оид ба пур кардани тавозун тавассути терминалҳои маҳаллӣ омӯзанд ва обунаи худро бевосита дар экрани калон танҳо бо истифода аз пульти фосилавӣ идора кунанд.`,
            },
          },
        ],
      },
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
