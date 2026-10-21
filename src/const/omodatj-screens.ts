import type { ProductSiteItem } from "./product-site";

type Screen = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"][number];

export const omodatjWebScreens: Screen[] = [
  {
    slug: "lending-header",
    title: {
      ru: "Главный экран лендинга",
      en: "Landing Hero Screen",
      tj: "Экрани асосии лендинг",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-header-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-header-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Первый ИМД-тренажёр на iOS и Android для подготовки к экзаменам Довталаб",
      en: "The first IMD exam simulator on iOS and Android for Dovtalab preparation",
      tj: "Аввалин тренажёри ИМД дар iOS ва Android барои омодагӣ ба имтиҳонҳои Довталаб",
    },
    fullInfo: {
      ru: "Главный экран знакомит абитуриентов с платформой «Омода AI» — первым специализированным тренажёром для подготовки к централизованным вступительным экзаменам Довталаб 2026–2027. На первом экране представлены ссылки на мобильные приложения в App Store и Google Play, интерактивные мокапы интерфейса с таймером и прогнозом баллов, ключевые преимущества (работа без интернета, отсутствие навязчивой рекламы) и поддержка двух языков (RU/TJ).",
      en: "The landing hero screen introduces applicants to Omoda AI — the premier exam simulator for Dovtalab 2026–2027 university entrance exams. It highlights native apps for App Store and Google Play, interactive test-taking mockups with a live timer and score forecasting, offline practice mode, and bilingual support (RU/TJ).",
      tj: "Экрани асосӣ довталабонро бо платформаи «Омода AI» — аввалин тренажёри махсус барои омодагӣ ба имтиҳонҳои марказонидаи дохилшавии Довталаб 2026–2027 шинос мекунад. Дар экрани аввал пайвандҳо барои зеркашии барномаҳо дар App Store ва Google Play, намунаи интерактивии интерфейс бо таймер ва пешгӯии холҳо, бартариҳои асосӣ (кори офлайн, бидуни таблиғи озориҳанда) ва дастгирии дузабона (RU/TJ) ҷойгир шудаанд.",
    },
  },
  {
    slug: "lending-everything-for-the-result",
    title: {
      ru: "Всё для результата: умная подготовка",
      en: "Everything for Results: Smart Prep",
      tj: "Ҳама чиз барои натиҷа: омодагии интеллектуалӣ",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-everything-for-the-result-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-everything-for-the-result-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Тесты формата ИМД, реалистичный таймер, разборы от ИИ и работа над ошибками",
      en: "IMD-format tests, timed mock exams, AI solution breakdowns, and error tracking",
      tj: "Тестҳо дар формати ИМД, таймери воқеӣ, таҳлили саволҳо бо зеҳни сунъӣ ва кор бо хатоҳо",
    },
    fullInfo: {
      ru: "Секция подробно презентует 6 ключевых инструментов умной подготовки: аутентичные тесты формата ИМД (части А и Б), режим пробного экзамена с контролем времени, подробные пошаговые разборы решений от ИИ, интеллектуальный модуль работы над ошибками, офлайн-режим и динамическую аналитику прогресса с прогнозированием итогового балла.",
      en: "This section showcases six essential tools for intelligent preparation: authentic IMD-format tests (Parts A and B), timed mock exams mirroring real test conditions, detailed AI-powered solution breakdowns, smart error revision tracking, offline access, and predictive score analytics.",
      tj: "Ин бахш шаш абзори муҳимми омодагии босифатро намоиш медиҳад: тестҳои воқеӣ дар формати ИМД (қисмҳои А ва Б), ҳолати имтиҳони санҷишӣ бо назорати вақт, таҳлили муфассали ҳар як савол бо ёрии зеҳни сунъӣ, модули такрори хатоҳо, имкони кор бе интернет ва пешгӯии холҳо мувофиқи пешрафт.",
    },
  },
  {
    slug: "lending-all-items",
    title: {
      ru: "Все предметы и кластеры",
      en: "All Subjects & Clusters",
      tj: "Ҳамаи фанҳо ва кластерҳо",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-all-items-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-all-items-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Каталог предметов и индивидуальная программа под целевой кластер",
      en: "Subject catalog with customized training programs tailored to selected clusters",
      tj: "Феҳристи фанҳо ва барномаи инфиродӣ вобаста ба кластери интихобшуда",
    },
    fullInfo: {
      ru: "Интерактивный каталог экзаменационных предметов: таджикский язык, русский язык, математика, физика, химия, биология, история, география и английский язык. Абитуриент выбирает свой кластер, а система автоматически формирует персонализированный учебный план для выпускников 9 и 11 классов с учётом весов предметов.",
      en: "Interactive catalog of examination subjects: Tajik, Russian, Mathematics, Physics, Chemistry, Biology, History, Geography, and English. Students select their target cluster, and the platform automatically configures a personalized study path for 9th and 11th grade graduates.",
      tj: "Феҳристи интерактивии фанҳои имтиҳонӣ: забони тоҷикӣ, забони русӣ, математика, физика, химия, биология, таърих, география ва забони англисӣ. Довталаб кластери худро интихоб намуда, система нақшаи таълимии инфиродиро барои хатмкунандагони синфҳои 9 ва 11 ба таври худкор тартиб медиҳад.",
    },
  },
  {
    slug: "lending-easy-to-start",
    title: {
      ru: "Как начать: три простых шага",
      en: "How to Start: Three Simple Steps",
      tj: "Тарзи оғоз: се қадами осон",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-it’s-easy-to-start-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-it’s-easy-to-start-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Скачивание приложения, выбор кластера и регулярные ежедневные тренировки",
      en: "Download the app, select your cluster, and practice daily with confidence",
      tj: "Зеркашии барнома, интихоби кластер ва тамрини пайвастаи ҳаррӯза",
    },
    fullInfo: {
      ru: "Наглядная пошаговая инструкция для быстрого старта: 1) Бесплатная загрузка мобильного приложения в Google Play или App Store; 2) Настройка экзаменационного кластера и дисциплин; 3) Ежедневная практика короткими сессиями, формирующая уверенность к дате тестирования.",
      en: "A clear step-by-step onboarding walkthrough: 1) Download the free mobile app from Google Play or App Store; 2) Customize exam cluster and subject preferences; 3) Practice consistently with short daily sessions to build confidence before the exam day.",
      tj: "Дастурамали равшани қадам ба қадам барои оғози фаврӣ: 1) Зеркашии ройгони барномаи мобилӣ дар Google Play ё App Store; 2) Интихоби кластер ва фанҳои имтиҳонӣ; 3) Тамрини пайвастаи ҳаррӯза барои ба даст овардани боварии комил дар рӯзи имтиҳон.",
    },
  },
  {
    slug: "lending-application-preview",
    title: {
      ru: "Интерфейс мобильного приложения",
      en: "Mobile App Interface Showcase",
      tj: "Интерфейси барномаи мобилӣ",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-the-application-is-inside-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-the-application-is-inside-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Фокус на главном: трекинг тем, симулятор теста, пошаговые разборы и карточка результата",
      en: "Distraction-free UI: subject tracking, test simulator, step-by-step breakdown, and results",
      tj: "Интерфейси муосир: пайгирии мавзуъҳо, симулятори тест, таҳлили қадам ба қадам ва натиҷаҳо",
    },
    fullInfo: {
      ru: "Визуальная галерея ключевых экранов мобильного приложения: сводный прогресс по предметам с процентом освоения тем, режим решения заданий с таймером в точном соответствии со стандартами ИМД, экран наглядного разбора решения уравнений и задач, а также карточка результата с анализом затраченного времени и переходом к разбору ошибок.",
      en: "A visual showcase of the mobile UI: subject progress screen highlighting completion percentages, exam simulator with authentic timer rules, clear mathematical breakdown view explaining formula transformations step by step, and final performance scorecard with time analysis and error correction.",
      tj: "Намоиши визуалии экранҳои асосии барномаи мобилӣ: пешрафти умумӣ аз рӯйи фанҳо бо фоизи азхудкунӣ, ҳолати ҳалли тестҳо бо таймер мувофиқи меъёрҳои ИМД, экрани шарҳи равшани формулаҳо ва мисолҳо, инчунин варақаи натиҷаҳо бо таҳлили вақт ва гузариш ба ислоҳи хатогиҳо.",
    },
  },
  {
    slug: "lending-fair-price",
    title: {
      ru: "Тарифы и прозрачные цены",
      en: "Pricing & Plans",
      tj: "Тарофаҳо ва нархҳои шаффоф",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-fair-price-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-fair-price-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Бесплатный тариф, единый платеж 14.5 сомони на весь сезон и тариф для школ",
      en: "Free tier, single 14.5 TJS full-season pass, and custom plans for schools",
      tj: "Тарофаи ройгон, пардохти ягонаи 14.5 сомонӣ барои тамоми мавсим ва нақша барои мактабҳо",
    },
    fullInfo: {
      ru: "Прозрачная линейка тарифов: бесплатный доступ для базового знакомства, популярный тариф «Сезон» стоимостью всего 14.5 сомони за разовый платёж на весь экзаменационный цикл 2026–2027 (полный доступ ко всем вопросам, неограниченным пробным экзаменам и прогнозу), а также корпоративный тариф для школ и учебных центров. Интеграция с платежными системами Alif, DC, Корти Милли, VISA и Mastercard.",
      en: "Transparent pricing tiers: a free tier for initial exploration, an affordable 'Season' pass for a one-off payment of only 14.5 TJS covering the entire 2026–2027 exam season (unlimited tests, full AI breakdowns, predictive scoring), and institutional plans for educational centers. Seamless checkout via Alif, DC, Korti Milli, VISA, and Mastercard.",
      tj: "Тарофаҳои равшан ва дастрас: намунаи ройгон барои шиносоӣ, тарофаи серхаридори «Мавсим» бо арзиши ҳамагӣ 14.5 сомонӣ як маротиба барои тамоми давраи имтиҳонии 2026–2027 (дастрасии пурра ба ҳама саволҳо, имтиҳонҳои санҷишии бемаҳдуд ва пешгӯии холҳо), инчунин тарофа барои мактабҳо ва марказҳои таълимӣ. Пардохт тавассути Алиф, DC, Корти Миллӣ, VISA ва Mastercard.",
    },
  },
  {
    slug: "lending-for-schools",
    title: {
      ru: "Для школ и учебных центров",
      en: "For Schools & Educational Centers",
      tj: "Барои мактабҳо ва марказҳои таълимӣ",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-for-schools-and-training-centers-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-for-schools-and-training-centers-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Кабинет преподавателя, аналитика слабых тем и групповое подключение классов",
      en: "Instructor dashboard, group performance diagnostics, and institutional licenses",
      tj: "Кабинети омӯзгор, таҳлили мавзуъҳои заиф ва пайваст кардани синфҳо",
    },
    fullInfo: {
      ru: "Специализированный раздел для образовательных учреждений: презентация панели преподавателя с возможностью отслеживать средний балл группы, ежедневную активность учеников, выявлять проблемные дисциплины и отправлять домашние задания. Предусмотрена быстрая форма обратной связи для подключения школ и репетиторских центров.",
      en: "Institutional portal tailored for schools and tutoring centers: introduces the instructor control dashboard for monitoring average class scores, tracking daily student engagement, pinpointing aggregate topic weaknesses, and assigning targeted test drills. Includes a streamlined lead form for institutional partnerships.",
      tj: "Бахши махсус барои муассисаҳои таълимӣ: муаррифии панели омӯзгор бо имкони назорати холи миёнаи синф, фаъолияти ҳаррӯзаи хонандагон, муайян кардани мавзуъҳои душвор ва супоридани вазифаҳои тестӣ. Барои пайваст намудани мактабҳо ва марказҳои таълимӣ варақаи фаврии дархост мавҷуд аст.",
    },
  },
  {
    slug: "lending-students-stories",
    title: {
      ru: "Истории учеников и отзывы",
      en: "Student Success Stories & Reviews",
      tj: "Таҷрибаи хатмкунандагон ва фикру мулоҳизаҳо",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-students-stories-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-students-stories-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Опыт выпускников из Душанбе, Худжанда и Бохтара по подготовке к вузам",
      en: "Authentic prep stories from students in Dushanbe, Khujand, and Bokhtar",
      tj: "Таҷрибаи хатмкунандагон аз Душанбе, Хуҷанд ва Бохтар барои дохилшавӣ ба донишгоҳҳо",
    },
    fullInfo: {
      ru: "Блок социального доверия с историями и отзывами абитуриентов, поступающих в ключевые университеты Таджикистана (ТНУ, ТТУ, РТСУ). Выпускники делятся опытом преодоления стресса при работе с таймером, удобством подготовки в дороге и пользой интеллектуальных разборов сложных вопросов.",
      en: "Social proof section showcasing reviews and experiences of applicants targeting leading universities of Tajikistan (TNUT, TTU, RTSU). Students share how the platform helped them conquer exam timing pressure, prepare conveniently on the go, and grasp complex subjects via detailed solution explanations.",
      tj: "Бахши эътимоди иҷтимоӣ бо таҷриба ва фикру мулоҳизаҳои довталабоне, ки ба донишгоҳҳои калонтарини Тоҷикистон (ДМТ, ДТТ, ДРТС) омодагӣ мебинанд. Хатмкунандагон нақл мекунанд, ки чӣ гуна аз фишори таймер раҳоӣ ёфтанд, дар роҳ ба осонӣ тамрин карданд ва саволҳои мураккабро бо шарҳи муфассал аз худ намуданд.",
    },
  },
  {
    slug: "lending-on-preparation",
    title: {
      ru: "Гид по подготовке к Довталаб",
      en: "Dovtalab Preparation Guide",
      tj: "Дастурамали омодагӣ ба Довталаб",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-on-preparation-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-on-preparation-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Методическое руководство по формату ИМД, частям А и Б и стратегии сдачи",
      en: "Comprehensive guide to IMD formats, Parts A & B, and exam-taking strategies",
      tj: "Дастури методӣ оид ба формати ИМД, қисмҳои А ва Б ва стратегияи имтиҳонсупорӣ",
    },
    fullInfo: {
      ru: "Информационно-методический блок, подробно раскрывающий структуру централизованных вступительных экзаменов в вузы и колледжи Таджикистана: деление на части А и Б, специфику вопросов для 9 и 11 классов, стратегию распределения времени и методику регулярных пробных тестирований онлайн и офлайн.",
      en: "Educational resource explaining the structure of Tajikistan's centralized entrance examinations for universities and colleges: separation into Parts A and B, nuances for 9th and 11th grade candidates, strategic time allocation, and consistent mock testing routines both online and offline.",
      tj: "Бахши иттилоотию методӣ, ки сохтори имтиҳонҳои марказонидаи дохилшавӣ ба донишгоҳҳо ва коллеҷҳои кишварро муфассал шарҳ медиҳад: тақсимот ба қисмҳои А ва Б, хусусиятҳои саволҳо барои синфҳои 9 ва 11, идоракунии дурусти вақт ва усули тамрини мунтазам дар ҳолати онлайн ва офлайн.",
    },
  },
  {
    slug: "lending-faq",
    title: {
      ru: "Часто задаваемые вопросы (FAQ)",
      en: "Frequently Asked Questions (FAQ)",
      tj: "Саволҳои зиёд такроршаванда (FAQ)",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-other-questions-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-other-questions-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Ответы на ключевые вопросы: база вопросов 2026–2027, офлайн-режим, оплата и связь",
      en: "Answers to essential questions: 2026–2027 question bank, offline mode, payments, and support",
      tj: "Ҷавобҳо ба саволҳои муҳим: пойгоҳи саволҳои 2026–2027, кори офлайн, пардохт ва тамос",
    },
    fullInfo: {
      ru: "Интерактивный аккордеон с подробными ответами на важные вопросы абитуриентов и родителей: соответствие заданий программе Довталаб 2026–2027, работа приложения без подключения к сети, языковые версии, порядок оплаты и правила для 9 и 11 классов. В блоке размещены прямые ссылки для связи со службой заботы в Telegram и WhatsApp.",
      en: "Interactive FAQ accordion addressing frequent inquiries from students and parents: syllabus alignment with Dovtalab 2026–2027, offline study options, language availability, payment procedures, and grade-specific guidelines. Includes direct shortcuts to support channels on Telegram and WhatsApp.",
      tj: "Бахши саволу ҷавоби интерактивӣ бо маълумоти пурра ба саволҳои муҳимми довталабон ва волидон: мутобиқати тестҳо ба барномаи Довталаб 2026–2027, фаъолияти барнома бидуни пайвастшавӣ ба интернет, забонҳои мавҷуда, қоидаҳои пардохт ва дастурҳо барои синфҳои 9 ва 11. Барои тамос бо дастгирӣ тугмаҳои мустақими Telegram ва WhatsApp ҷой дода шудаанд.",
    },
  },
  {
    slug: "lending-footer",
    title: {
      ru: "Финальный экран и таймер обратного отсчета",
      en: "Footer & Exam Countdown Timer",
      tj: "Экрани ниҳоӣ ва таймери ҳисоби баръакс",
    },
    imageSrc: "/images/projects/omoda.tj/web/lending-footer-page.png",
    BannerSrc: "/images/projects/omoda.tj/web/lending-footer-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Обратный отсчет до 1 августа 2027, кнопки маркетов, навигация и правовые документы",
      en: "Live countdown to August 1, 2027, app store buttons, navigation, and legal links",
      tj: "Ҳисоби баръакс то 1 августи 2027, тугмаҳои замимаҳо, навигатсия ва ҳуҷҷатҳои ҳуқуқӣ",
    },
    fullInfo: {
      ru: "Завершающая секция лендинга: мотивационный баннер с интерактивным таймером обратного отсчета дней, часов и минут до старта экзаменационной сессии (1 августа 2027 года), кнопки загрузки для Google Play и App Store, карта сайта, правовые соглашения и отметка о разработке платформы компанией Dushanbe Soft.",
      en: "The closing landing section: motivational banner featuring a live countdown timer showing days, hours, and minutes until the entrance exams begin (August 1, 2027), Google Play and App Store download badges, site navigation footer, privacy and terms links, and Dushanbe Soft developer credentials.",
      tj: "Қисмати ҷамъбастии саҳифа: баннери ҳавасмандгардонӣ бо таймери зиндаи ҳисоби рӯзҳо, соатҳо ва дақиқаҳо то оғози имтиҳонҳо (1 августи соли 2027), тугмаҳои зеркашӣ аз Google Play ва App Store, навигатсияи сомона, созишномаҳои ҳуқуқӣ ва нишони таҳияи лоиҳа аз ҷониби ширкати Dushanbe Soft.",
    },
  },
];

export const omodatjAdminScreens: Screen[] = [
  {
    slug: "dashboard-login",
    title: {
      ru: "Авторизация и гостевой режим",
      en: "Authentication & Guest Access",
      tj: "Вуруд ва ҳолати меҳмонӣ",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-login-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-login-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Вход в систему, регистрация, восстановление доступа и гостевой режим",
      en: "User login, registration, password recovery, and instant guest mode",
      tj: "Вуруд ба система, бақайдгирӣ, барқарорсозии рамз ва ҳолати меҳмонӣ",
    },
    fullInfo: {
      ru: "Экран входа и регистрации в личный кабинет «Омода AI». Поддерживает авторизацию по адресу электронной почты и паролю, создание нового аккаунта, восстановление забытого пароля, быстрый выбор языка (RU / TJ) и опцию мгновенного начала работы в гостевом режиме с сохранением результатов тестирования.",
      en: "Sign-in and onboarding portal for the Omoda AI web cabinet. Supports email/password credentials, new student registration, forgotten password reset, one-click language toggle (RU / TJ), and immediate guest access with seamless progress transfer upon account creation.",
      tj: "Экрани вуруд ва бақайдгирӣ дар кабинети инфиродии «Омода AI». Воридшавиро тавассути почтаи электронӣ ва гузарвожа, бақайдгирии нав, барқароркунии рамз, интихоби зуди забон (RU / TJ) ва оғози фаврии кор дар ҳолати меҳмонӣ бо ҳифзи натиҷаҳо таъмин менамояд.",
    },
  },
  {
    slug: "dashboard-main",
    title: {
      ru: "Главная страница личного кабинета",
      en: "Student Dashboard Hub",
      tj: "Саҳифаи асосии кабинети корбар",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-main-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-main-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Счётчик дней до ИМД, вызов дня, запуск тестов, дуэлей и лента новостей НЦТ",
      en: "Countdown to IMD, daily challenge, shortcuts to tests, duels, and NTC updates",
      tj: "Ҳисобкунаки рӯзҳо то ИМД, озмуни рӯз, оғози тестҳо, дуэлҳо ва хабарҳои ММТ",
    },
    fullInfo: {
      ru: "Главная панель абитуриента объединяет все ключевые модули: интерактивный счетчик дней до экзамена (284 дня), ежедневное задание «Вызов дня» с начислением бонусных баллов, быстрый переход к тестам, калькулятору баллов и онлайн-дуэлям, мини-таблицу лучших игроков и свежие официальные новости НЦТ.",
      en: "The student's primary dashboard brings together all core modules: live countdown to exam day (284 days), 'Daily Challenge' widget granting bonus points, quick action triggers for practice tests, score calculators, and online duels, a preview leaderboard, and verified NTC news headlines.",
      tj: "Панели асосии довталаб ҳамаи бахшҳои муҳимро муттаҳид месозад: ҳисобкунаки интерактивии рӯзҳо то имтиҳон (284 рӯз), вазифаи ҳаррӯзаи «Озмуни рӯз» бо холҳои иловагӣ, гузариши зуд ба тестҳо, калкулятори холҳо ва дуэлҳои онлайн, намоиши кӯтоҳи пешсафон ва хабарҳои расмии ММТ.",
    },
  },
  {
    slug: "dashboard-clusters",
    title: {
      ru: "Выбор кластера и предметов",
      en: "Cluster & Subject Selection",
      tj: "Интихоби кластер ва фанҳо",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-clusters-pae.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-clusters-pae.png",
    imageFit: "contain",
    shortInfo: {
      ru: "5 официальных кластеров Довталаб с перечнем предметов, таймингом и библиотекой",
      en: "5 official Dovtalab clusters with subjects, time allotments, and library links",
      tj: "5 кластери расмии Довталаб бо рӯйхати фанҳо, вақти имтиҳон ва китобхона",
    },
    fullInfo: {
      ru: "Экран выбора направления подготовки, охватывающий все 5 кластеров вступительных экзаменов НЦТ: 1) Естественный и технический; 2) Экономика и география; 3) Филология, педагогика и искусство; 4) Обществоведение и право; 5) Медицина, биология и спорт. Для каждого кластера указан состав профильных дисциплин, отведенное время экзамена (190–220 минут) и кнопка перехода к материалам.",
      en: "Cluster selection interface encompassing all five NTC university admissions tracks: 1) Natural & Technical Sciences; 2) Economics & Geography; 3) Philology, Pedagogy & Arts; 4) Social Sciences & Law; 5) Medicine, Biology & Sports. Each cluster outlines its component subjects, allocated examination duration (190–220 minutes), and subject library links.",
      tj: "Экрани интихоби самти таълимӣ, ки ҳамаи 5 кластери имтиҳонҳои дохилшавии ММТ-ро фаро мегирад: 1) Табиӣ ва техникӣ; 2) Иқтисод ва ҷуғрофия; 3) Филология, педагогика ва санъат; 4) Ҷомеашиносӣ ва ҳуқуқ; 5) Тиб, биология ва варзиш. Барои ҳар як кластер фанҳои дахлдор, вақти муқарраршудаи имтиҳон (190–220 дақиқа) ва гузариш ба китобхона пешбинӣ шудааст.",
    },
  },
  {
    slug: "dashboard-duels",
    title: {
      ru: "Интеллектуальные дуэли",
      en: "PvP Knowledge Duels",
      tj: "Дуэлҳои зеҳнӣ",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-dueis-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-dueis-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Соревновательный режим: игра с другом по коду или случайным соперником",
      en: "Competitive multiplayer battles: play against friends via code or random opponents",
      tj: "Ҳолати рақобатӣ: бозӣ бо дӯст тавассути рамз ё рақиби тасодуфӣ",
    },
    fullInfo: {
      ru: "Геймифицированный соревновательный модуль проверки знаний. Два абитуриента одновременно отвечают на 10 одинаковых вопросов на скорость и правильность. Доступны создание дуэли с генерацией уникального кода, отправка вызова другу через мессенджеры и автоматический подбор случайного соперника в реальном времени с подсчетом статистики побед.",
      en: "Gamified multiplayer test battle module. Two applicants compete simultaneously answering 10 identical questions under time pressure. Includes private lobby creation with room codes, direct challenge sharing via messengers, and real-time random matchmaking with win-loss record tracking.",
      tj: "Модули рақобатии санҷиши дониш бо унсурҳои бозӣ. Ду довталаб дар як вақт ба 10 саволи якхела аз рӯйи суръат ва саҳеҳӣ ҷавоб медиҳанд. Имкони эҷоди дуэл бо рамзи инфиродӣ, даъвати дӯстон тавассути мессенҷерҳо ва интихоби худкори рақиби тасодуфӣ бо сабти омори ғалабаҳо фароҳам мебошад.",
    },
  },
  {
    slug: "dashboard-score-calculator",
    title: {
      ru: "Калькулятор баллов ИМД",
      en: "IMD Exam Score Calculator",
      tj: "Ҳисобкунаки холҳои ИМД",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-score-calculator-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-score-calculator-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Расчет шкалированных конкурсных баллов по группам специальностей ДИ-1 ... ДИ-7",
      en: "Calculation of scaled admission points across specialty brackets DI-1 through DI-7",
      tj: "Ҳисобкунии холҳои озмунии ММТ аз рӯйи гурӯҳҳои ихтисос (ДИ-1 то ДИ-7)",
    },
    fullInfo: {
      ru: "Высокоточный калькулятор баллов, полностью воспроизводящий официальные формулы шкалирования Национального центра тестирования (ntc.tj). Пользователь может ввести баллы за субтесты (0–40) по четырем дисциплинам либо нажать «Подставить мой прогноз», после чего система рассчитывает итоговый балл из 500 для каждой группы специальностей (ДИ-1 ... ДИ-7) с учётом весовых коэффициентов.",
      en: "High-precision score calculator fully reproducing the official grading and scaling tables of Tajikistan's National Testing Center (ntc.tj). Students can enter raw subtest scores (0–40) across 4 subjects or click 'Sync my forecast' to automatically calculate their competitive score out of 500 across DI-1 through DI-7 specialty brackets according to weighted coefficients.",
      tj: "Ҳисобкунаки дақиқи холҳо, ки формулаҳои расмии Маркази миллии тестиро (ntc.tj) пурра такрор мекунад. Довталаб метавонад холҳои субтестҳоро (0–40) аз чор фан ворид намояд ё тугмаи «Пешгӯии маро гузор»-ро пахш кунад, то система холи ниҳоиро аз 500 барои ҳар як гурӯҳи ихтисос (ДИ-1 то ДИ-7) бо назардошти коэффисиентҳои фанҳо ҳисоб кунад.",
    },
  },
  {
    slug: "dashboard-rating",
    title: {
      ru: "Рейтинг и лидерборд",
      en: "Leaderboard & Rankings",
      tj: "Рейтинг ва ҷадвали пешсафон",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-rating-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-rating-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Общереспубликанский рейтинг абитуриентов с фильтрацией по школам и районам",
      en: "National student ranking leaderboard with school, district, and timeframe filters",
      tj: "Рейтинги умумиҷумҳуриявии довталабон бо филтр аз рӯйи мактабҳо ва ноҳияҳо",
    },
    fullInfo: {
      ru: "Турнирная таблица абитуриентов с начислением баллов по строгим правилам ИМД (1 балл за тестовый вопрос, до 4 баллов за установление соответствия, 2 балла за открытый вопрос). Включает фильтрацию по периодам (неделя, месяц, все время), выборке «Моя школа», «Мой район», а также распределение по кластерам.",
      en: "Comprehensive applicant leaderboard adhering strictly to official IMD scoring rules (1 point per multiple choice, up to 4 for matching, 2 for open questions). Offers temporal filters (weekly, monthly, all-time), community tabs ('My School', 'My District'), and cluster-specific standings.",
      tj: "Ҷадвали умумии довталабон бо холгузорӣ мувофиқи қоидаҳои дақиқи ИМД (1 хол барои саволи одӣ, то 4 хол барои мутобиқат, 2 хол барои саволи кушода). Дорои филтрҳо аз рӯйи муҳлат (ҳафта, моҳ, ҳама вақт), бахшҳои «Мактаби ман», «Ноҳияи ман» ва тақсимот аз рӯйи кластерҳо мебошад.",
    },
  },
  {
    slug: "dashboard-progress",
    title: {
      ru: "Аналитика прогресса и достижения",
      en: "Progress Analytics & Achievements",
      tj: "Таҳлили пешрафт ва дастовардҳо",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-progress-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-progress-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Ударный режим, средняя точность, графики активности и коллекция из 13 наград",
      en: "Study streak tracker, accuracy rate, activity charts, and 13 achievement badges",
      tj: "Рӯзҳои бефосила, саҳеҳии ҷавобҳо, графики фаъолият ва маҷмуаи 13 дастовард",
    },
    fullInfo: {
      ru: "Детализированная статистика учебного процесса: счетчик непрерывных дней занятий (strike), общая точность ответов, количество пройденных тестов и набранных очков, интерактивный график активности за 7 и 30 дней, модуль целевой работы над ошибками и система из 13 коллекционных наград за достижения в учёбе и дуэлях.",
      en: "Granular personal learning analytics: continuous study streak tracker, overall response accuracy percentage, completed tests and points tally, interactive 7-day and 30-day activity charts, targeted mistake review engine, and a gamified system of 13 collectible achievement badges for learning milestones and duel wins.",
      tj: "Омори муфассали раванди таълим: ҳисобкунаки рӯзҳои пайвастаи омӯзиш, саҳеҳии умумии ҷавобҳо, шумораи тестҳои ҳалшуда ва холҳои бадастомада, диаграммаи интерактивии фаъолият барои 7 ва 30 рӯз, модули махсуси ислоҳи хатогиҳо ва системаи 13 дастоварди ҳавасмандкунанда барои муваффақиятҳо.",
    },
  },
  {
    slug: "dashboard-library",
    title: {
      ru: "Электронная библиотека НЦТ",
      en: "NTC Digital Resource Library",
      tj: "Китобхонаи электронии ММТ",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-library-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-library-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Официальные сборники заданий, ключи ответов, программы экзаменов и план приёма",
      en: "Official exam booklets, answer keys, subject syllabi, and university admission quotas",
      tj: "Маҷмуаи расмии саволҳо, калиди ҷавобҳо, барномаҳои имтиҳонӣ ва нақшаи қабул",
    },
    fullInfo: {
      ru: "Цифровая библиотека официальных методических материалов НЦТ: сборники тестовых заданий ИМД-2026 по всем предметам (PDF на русском и таджикском языках), проверочные ключи к заданиям, программы вступительных экзаменов по компонентам А и Б, а также официальные справочники баллов и планов приема в учебные заведения Таджикистана.",
      en: "Digital library of official NTC educational resources: complete 2026 IMD question booklet collections for all subjects (PDF in Russian and Tajik), official verification keys, Component A and B syllabi, as well as authoritative passing score archives and university intake quotas.",
      tj: "Китобхонаи рақамии маводи расмии таълимию методии ММТ: маҷмуаи саволу масъалаҳои тестии ИМД-2026 аз ҳамаи фанҳо (PDF бо забонҳои русӣ ва тоҷикӣ), калидҳои тафтиши ҷавобҳо, барномаҳои имтиҳони дохилшавӣ аз қисмҳои А ва Б, инчунин маълумотномаҳои расмии холҳои гузариш ва нақшаи қабули донишгоҳҳо ва коллеҷҳои кишвар.",
    },
  },
  {
    slug: "dashboard-news",
    title: {
      ru: "Новости и объявления НЦТ",
      en: "NTC Official News Feed",
      tj: "Хабарҳо ва эълонҳои ММТ",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-news-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-news-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Официальные сообщения НЦТ: сессии ЦВЭ, апелляции, регистрация и стипендии",
      en: "Official NTC bulletins: entrance exam sessions, appeals, deadlines, and scholarships",
      tj: "Эълонҳои расмии ММТ: давраҳои имтиҳонӣ, апеллятсияҳо, бақайдгирӣ ва бурсияҳо",
    },
    fullInfo: {
      ru: "Агрегатор официальных новостей Национального центра тестирования при Президенте Республики Таджикистан. Своевременные публикации о результатах распределения сессий ЦВЭ, порядке подачи апелляционных заявлений, сроках регистрации абитуриентов, выделении дополнительных мест и международных стипендиальных программах с возможностью сохранения в закладки.",
      en: "Dedicated newsfeed aggregating official releases from the National Testing Center under the President of the Republic of Tajikistan. Delivers timely notifications on session seat allocations, appeals filing procedures, registration deadlines, additional quota openings, and international scholarship programs with one-click bookmarking.",
      tj: "Лентаи хабарҳои расмии Маркази миллии тестии назди Президенти Ҷумҳурии Тоҷикистон. Нашри саривақтии эълонҳо оид ба натиҷаҳои тақсимоти озмуни давраҳои имтиҳонҳо, тартиби супоридани аризаҳои апеллятсионӣ, муҳлати бақайдгирии довталабон, ҷойҳои холии иловагӣ ва бурсияҳои байналмилалии таҳсилӣ бо имкони захира дар хатчӯбҳо.",
    },
  },
  {
    slug: "dashboard-bookmarks",
    title: {
      ru: "Закладки и сохраненные материалы",
      en: "Saved Bookmarks",
      tj: "Хатчӯбҳо ва маводи захирашуда",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-bookmarks-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-bookmarks-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Быстрый доступ к сохраненным новостям, сборникам заданий и важным датам",
      en: "Instant access to bookmarked news releases, test collections, and vital dates",
      tj: "Дастрасии фаврӣ ба хабарҳои муҳим, маҷмуаи саволҳо ва санаҳои зарурӣ",
    },
    fullInfo: {
      ru: "Персональный архив сохраненных материалов пользователя: быстрый доступ к важным новостям НЦТ, инструкциям по подаче документов, нормативным справочникам и профильным материалам подготовки без необходимости повторного поиска по платформе.",
      en: "Personalized reading list and resource vault: offers quick access to pinned NTC announcements, admissions instructions, regulatory handbooks, and specialized study guides without repetitive catalog searching.",
      tj: "Бойгонии инфиродии маводи захирашудаи корбар: дастрасии фаврӣ ба хабарҳои муҳимми ММТ, дастурамалҳои супоридани ҳуҷҷатҳо, маълумотномаҳои меъёрӣ ва маводи таълимӣ бидуни ҷустуҷӯи такрорӣ дар платформа.",
    },
  },
  {
    slug: "dashboard-profile",
    title: {
      ru: "Профиль и персонализация",
      en: "Profile & Settings",
      tj: "Профил ва танзимот",
    },
    imageSrc: "/images/projects/omoda.tj/admin/dashboard-profile-page.png",
    BannerSrc: "/images/projects/omoda.tj/admin/dashboard-profile-page.png",
    imageFit: "contain",
    shortInfo: {
      ru: "Выбор кластера, привязка школы и района, выбор темы оформления и языка",
      en: "Cluster preferences, school and district linkage, theme mode, and language",
      tj: "Интихоби кластер, пайвасти мактаб ва ноҳия, интихоби намуди зоҳирӣ ва забон",
    },
    fullInfo: {
      ru: "Центр управления профилем абитуриента: выбор целевого кластера и избранных специальностей, указание школы и города/района для участия в школьных рейтингах, переключение интерфейса между таджикским и русским языками, настройка темы (светлая/тёмная/системная), управление подпиской и прямая связь со службой заботы.",
      en: "Student profile and preference command center: target cluster selection, favored specialties configuration, school and municipality association for campus standings, language toggle (Tajik/Russian), appearance customization (light/dark/system mode), subscription management, and direct support contact.",
      tj: "Маркази идоракунии профили довталаб: интихоби кластери асосӣ ва ихтисосҳои писандида, нишон додани мактаб ва шаҳр/ноҳия барои иштирок дар рейтинги мактабӣ, ивази забони барнома (тоҷикӣ/русӣ), интихоби намуди зоҳирӣ (равшан/торик/системавӣ), идоракунии тарофа ва тамос бо бахши дастгирӣ.",
    },
  },
];
