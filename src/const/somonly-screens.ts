import type { ProductSiteItem } from "./product-site";

type Screen = [string, [string, string, string], [string, string, string]];
type Items = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"];

// Somonly (somonly.com) screenshots, 1700x1080. Description format: "intro|Heading\n\nText|Heading\n\nText".
const productScreens: Screen[] = [
  [
    "hero",
    ["Главный экран", "Hero section", "Экрани асосӣ"],
    [
      "Первый экран somonly.com — платёжного шлюза Dushanbe Soft для эквайринга в Таджикистане.|Предложение\n\nЗаголовок «Эквайринг в Таджикистане — 26+ платёжных услуг в одном API» и подзаголовок объясняют суть: мобильные банки, карты Visa и Mastercard, QR-код SmartPay и оплата по лицевому счёту в одной интеграции, а клиенты из России платят в рублях по СБП.|Схема маршрутизации\n\nСправа живая схема: проекты (магазин, доставка, обучение, такси) отправляют платежи в шлюз Somonly, он передаёт их в SmartPay и Pay4Game и возвращает вебхук нужному проекту.|Банки\n\nНиже бегущая лента банков и способов оплаты: Alif Mobi, Eskhata Online, Amonat Mobile, DC Next, Humo Online, Visa, Mastercard, Apple Pay, Google Pay и другие.",
      "The first screen of somonly.com, Dushanbe Soft's payment gateway for acquiring in Tajikistan.|Proposition\n\nThe headline \"Acquiring in Tajikistan: 26+ payment services in one API\" and the subtitle explain the idea: mobile banks, Visa and Mastercard cards, the SmartPay QR code and account-number payments in one integration, while customers from Russia pay in roubles via SBP.|Routing diagram\n\nOn the right, a live diagram shows projects (a shop, delivery, education, taxi) sending payments to the Somonly gateway, which passes them to SmartPay and Pay4Game and returns a webhook to the right project.|Banks\n\nBelow is a running strip of banks and payment methods: Alif Mobi, Eskhata Online, Amonat Mobile, DC Next, Humo Online, Visa, Mastercard, Apple Pay, Google Pay and more.",
      "Экрани аввали somonly.com — дарвозаи пардохтии Dushanbe Soft барои эквайринг дар Тоҷикистон.|Пешниҳод\n\nСарлавҳаи «Эквайринг дар Тоҷикистон — 26+ хизматрасонии пардохтӣ дар як API» ва зерсарлавҳа моҳиятро мефаҳмонанд: бонкҳои мобилӣ, кортҳои Visa ва Mastercard, QR-коди SmartPay ва пардохт аз рӯи ҳисоби шахсӣ дар як интегратсия, мизоҷон аз Русия бошанд бо рубл тавассути СБП пардохт мекунанд.|Нақшаи масир\n\nДар тарафи рост нақшаи зинда: лоиҳаҳо (мағоза, расонидан, таълим, такси) пардохтҳоро ба дарвозаи Somonly мефиристанд, он онҳоро ба SmartPay ва Pay4Game мегузаронад ва вебхукро ба лоиҳаи лозимӣ бармегардонад.|Бонкҳо\n\nДар поён навори ҳаракаткунандаи бонкҳо ва усулҳои пардохт: Alif Mobi, Eskhata Online, Amonat Mobile, DC Next, Humo Online, Visa, Mastercard, Apple Pay, Google Pay ва дигарон.",
    ],
  ],
  [
    "why",
    ["Зачем нужен Somonly", "Why Somonly", "Somonly барои чӣ лозим аст"],
    [
      "Блок объясняет, зачем Dushanbe Soft создала собственный шлюз.|Задача\n\nКомпания запускает новые продукты еженедельно, а SmartPay выдаёт мерчанту только один API-ключ. Без шлюза каждый проект требовал бы отдельной интеграции, своих вебхуков, подписей и повторов.|Сравнение\n\nДве колонки «Без Somonly» и «С Somonly» показывают разницу: один API на 26+ услуг, свой ключ sm_live_… для проекта за 5 минут, подписанные вебхуки и повторы из коробки, журнал транзакций и статистика в одной панели.",
      "The block explains why Dushanbe Soft built its own gateway.|The problem\n\nThe company launches new products every week, while SmartPay issues only one API key per merchant. Without a gateway, every project would need its own integration, webhooks, signatures and retries.|Comparison\n\nTwo columns, \"Without Somonly\" and \"With Somonly\", show the difference: one API for 26+ services, a project's own sm_live_… key in 5 minutes, signed webhooks and retries out of the box, and a transaction log and statistics in one panel.",
      "Бахш мефаҳмонад, ки чаро Dushanbe Soft дарвозаи худро сохт.|Масъала\n\nШиркат ҳар ҳафта маҳсулоти нав мебарорад, SmartPay бошад ба мерчант танҳо як калиди API медиҳад. Бе дарвоза ҳар лоиҳа интегратсия, вебхукҳо, имзоҳо ва такрорҳои алоҳида талаб мекард.|Муқоиса\n\nДу сутуни «Бе Somonly» ва «Бо Somonly» фарқро нишон медиҳанд: як API барои 26+ хизматрасонӣ, калиди шахсии sm_live_… барои лоиҳа дар 5 дақиқа, вебхукҳои имзошуда ва такрорҳо аз аввал, журнали транзаксияҳо ва омор дар як панел.",
    ],
  ],
  [
    "how",
    ["Как это работает", "How it works", "Чӣ тавр кор мекунад"],
    [
      "Два сценария оплаты, которые шлюз поддерживает через одну интеграцию.|Онлайн-оплата по инвойсу\n\nПроект отправляет запрос со своим ключом X-Project-Key, Somonly создаёт инвойс в SmartPay, клиент платит по payment_link или через диплинк в приложении банка, а проект получает подписанный вебхук с повторными попытками.|Оплата по лицевому счёту\n\nКлиент сам находит сервис в Alif Mobi или другом банке и вводит номер счёта. SmartPay присылает запрос check или pay, Somonly определяет проект по префиксу счёта (например, 104 — «TV CRM») и проксирует ответ обратно в приложение банка.",
      "Two payment flows that the gateway supports through one integration.|Online invoice payment\n\nThe project sends a request with its X-Project-Key, Somonly creates an invoice in SmartPay, the customer pays via payment_link or a deeplink in their banking app, and the project receives a signed webhook with retries.|Account-number payment\n\nThe customer finds the service in Alif Mobi or another bank and enters an account number. SmartPay sends a check or pay request, Somonly identifies the project by the account prefix (for example, 104 for \"TV CRM\") and proxies the answer back to the banking app.",
      "Ду сенарияи пардохт, ки дарвоза тавассути як интегратсия дастгирӣ мекунад.|Пардохти онлайн аз рӯи инвойс\n\nЛоиҳа дархостро бо калиди X-Project-Key-и худ мефиристад, Somonly дар SmartPay инвойс месозад, мизоҷ тавассути payment_link ё диплинк дар барномаи бонк пардохт мекунад ва лоиҳа вебхуки имзошударо бо кӯшишҳои такрорӣ мегирад.|Пардохт аз рӯи ҳисоби шахсӣ\n\nМизоҷ худаш хизматро дар Alif Mobi ё бонки дигар меёбад ва рақами ҳисобро ворид мекунад. SmartPay дархости check ё pay мефиристад, Somonly лоиҳаро аз рӯи префикси ҳисоб (масалан, 104 — «TV CRM») муайян карда, ҷавобро ба барномаи бонк бармегардонад.",
    ],
  ],
  [
    "features",
    ["Преимущества", "Benefits", "Бартариҳо"],
    [
      "Сетка преимуществ показывает, что шлюз берёт на себя вместо команды проекта.|Ключи и маршрутизация\n\nКлюч SmartPay хранится только в Somonly, а каждый проект получает собственный ключ sm_live_… и не видит чужие платежи. Запросы по лицевому счёту автоматически уходят в нужный проект по префиксу.|Надёжность\n\nКаждое уведомление подписано HMAC-SHA256, недоставленные вебхуки отправляются повторно, а повторный запрос с тем же order_id не создаёт дубль.|Контроль\n\nЖурнал запросов и вебхуков, панель администратора для проектов, ключей и callback URL, статистика оборотов по проектам и банкам, приём оплаты в сомони и рублях.",
      "The benefits grid shows what the gateway handles instead of the project team.|Keys and routing\n\nThe SmartPay key is stored only in Somonly, while each project gets its own sm_live_… key and cannot see other projects' payments. Account-number requests are routed to the right project by prefix.|Reliability\n\nEvery notification is signed with HMAC-SHA256, undelivered webhooks are retried, and a repeated request with the same order_id never creates a duplicate.|Control\n\nA log of requests and webhooks, an admin panel for projects, keys and callback URLs, turnover statistics by project and bank, and payments in somoni and roubles.",
      "Шабакаи бартариҳо нишон медиҳад, ки дарвоза ба ҷои дастаи лоиҳа чӣ корҳоро ба уҳда мегирад.|Калидҳо ва масир\n\nКалиди SmartPay танҳо дар Somonly нигоҳ дошта мешавад, ҳар лоиҳа калиди шахсии sm_live_… мегирад ва пардохтҳои дигаронро намебинад. Дархостҳо аз рӯи ҳисоби шахсӣ худкор аз рӯи префикс ба лоиҳаи лозимӣ мераванд.|Боэътимодӣ\n\nҲар огоҳинома бо HMAC-SHA256 имзо шудааст, вебхукҳои нарасида такроран фиристода мешаванд ва дархости такрорӣ бо ҳамон order_id дубликат намесозад.|Назорат\n\nЖурнали дархостҳо ва вебхукҳо, панели маъмур барои лоиҳаҳо, калидҳо ва callback URL, омори гардиш аз рӯи лоиҳаҳо ва бонкҳо, қабули пардохт бо сомонӣ ва рубл.",
    ],
  ],
  [
    "services",
    ["Цифры и услуги", "Figures and services", "Рақамҳо ва хизматрасониҳо"],
    [
      "Ключевые цифры продукта и начало каталога платёжных услуг.|Цифры\n\n26+ платёжных и банковских услуг в одном API, 1 API-ключ для всех услуг нового проекта, 5 минут на подключение, неограниченное число проектов без новых интеграций с процессингом и Dushanbe Soft на рынке с 2017 года.|Каталог\n\nРаздел «26+ платёжных и банковских услуг в одном API» перечисляет 13 мобильных банков и кошельков, карты Visa, Mastercard, American Express, Apple Pay и Google Pay, а также QR-код SmartPay, ссылки по SMS, терминалы и оплату по лицевому счёту.",
      "The product's key figures and the start of the payment services catalogue.|Figures\n\n26+ payment and banking services in one API, 1 API key for all services of a new project, 5 minutes to connect, an unlimited number of projects without new processing integrations, and Dushanbe Soft on the market since 2017.|Catalogue\n\nThe \"26+ payment and banking services in one API\" section lists 13 mobile banks and wallets, Visa, Mastercard, American Express, Apple Pay and Google Pay cards, plus the SmartPay QR code, SMS payment links, terminals and account-number payments.",
      "Рақамҳои асосии маҳсулот ва оғози каталоги хизматрасониҳои пардохтӣ.|Рақамҳо\n\n26+ хизматрасонии пардохтӣ ва бонкӣ дар як API, 1 калиди API барои ҳамаи хизматрасониҳои лоиҳаи нав, 5 дақиқа барои пайвастшавӣ, шумораи номаҳдуди лоиҳаҳо бе интегратсияҳои нав бо процессинг ва Dushanbe Soft дар бозор аз соли 2017.|Каталог\n\nБахши «26+ хизматрасонии пардохтӣ ва бонкӣ дар як API» 13 бонки мобилӣ ва ҳамён, кортҳои Visa, Mastercard, American Express, Apple Pay ва Google Pay, инчунин QR-коди SmartPay, пайвандҳо тавассути SMS, терминалҳо ва пардохт аз рӯи ҳисоби шахсиро номбар мекунад.",
    ],
  ],
];

const apiScreens: Screen[] = [
  [
    "russia",
    ["Оплата из России", "Payments from Russia", "Пардохт аз Русия"],
    [
      "Раздел о приёме рублей от клиентов из России через Pay4Game.|Способы\n\nКлиент платит по СБП — по QR-коду или в приложении любого банка России — или картой Мир, Visa и Mastercard российского банка на защищённой странице оплаты.|Тот же API\n\nПроект использует тот же ключ sm_live_… и получает тот же вебхук payment.paid, а сомони и рубли в отчётах считаются отдельно. Полный или частичный возврат делается из панели с вебхуком payment.refunded.|Интеграция в три шага\n\nВключить Pay4Game в панели, создать платёж с provider «pay4game» и способом sbp или card, перенаправить клиента на payment_link. Рядом — пример запроса curl.",
      "The section about accepting roubles from customers in Russia via Pay4Game.|Methods\n\nThe customer pays via SBP, by QR code or in the app of any Russian bank, or with a Russian Mir, Visa or Mastercard card on a secure payment page.|Same API\n\nThe project uses the same sm_live_… key and receives the same payment.paid webhook, while somoni and roubles are counted separately in reports. Full or partial refunds are made from the panel with a payment.refunded webhook.|Three-step integration\n\nEnable Pay4Game in the panel, create a payment with provider \"pay4game\" and the sbp or card method, and redirect the customer to payment_link. A curl request example sits alongside.",
      "Бахш дар бораи қабули рубл аз мизоҷони Русия тавассути Pay4Game.|Усулҳо\n\nМизоҷ тавассути СБП — бо QR-код ё дар барномаи ҳар бонки Русия — ё бо корти Мир, Visa ва Mastercard-и бонки русӣ дар саҳифаи ҳифзшудаи пардохт пардохт мекунад.|Ҳамон API\n\nЛоиҳа ҳамон калиди sm_live_…-ро истифода мебарад ва ҳамон вебхуки payment.paid-ро мегирад, сомонӣ ва рубл дар ҳисоботҳо алоҳида ҳисоб мешаванд. Баргардонидани пурра ё қисман аз панел бо вебхуки payment.refunded анҷом дода мешавад.|Интегратсия дар се қадам\n\nPay4Game-ро дар панел фаъол кунед, пардохтро бо provider «pay4game» ва усули sbp ё card созед ва мизоҷро ба payment_link равона кунед. Дар паҳлу намунаи дархости curl.",
    ],
  ],
  [
    "docs",
    ["Документация API", "API documentation", "Ҳуҷҷатҳои API"],
    [
      "Страница документации для разработчиков проектов, подключаемых к Somonly.|Шапка\n\n«Приём платежей через Somonly API»: базовый URL api.somonly.com/api/v1, формат JSON, подпись HMAC-SHA256 и валюты TJS и RUB.|Навигация\n\nСлева оглавление: аутентификация, создание и статус платежа, список банков, объект платежа, вебхуки, проверка подписи, оплата в рублях, возвраты и оплата по лицевому счёту.|Как это работает\n\nПять шагов от запроса POST /payments до вебхука payment.paid и напоминание, что деньги и статус приходят только через вебхук.",
      "The documentation page for developers of projects connected to Somonly.|Header\n\n\"Accepting payments via the Somonly API\": the base URL api.somonly.com/api/v1, JSON format, an HMAC-SHA256 signature and TJS and RUB currencies.|Navigation\n\nOn the left is the table of contents: authentication, creating a payment and its status, the bank list, the payment object, webhooks, signature checks, rouble payments, refunds and account-number payments.|How it works\n\nFive steps from a POST /payments request to the payment.paid webhook, with a reminder that money and status arrive only via the webhook.",
      "Саҳифаи ҳуҷҷатҳо барои таҳиягарони лоиҳаҳое, ки ба Somonly пайваст мешаванд.|Сарлавҳа\n\n«Қабули пардохт тавассути Somonly API»: URL-и асосии api.somonly.com/api/v1, формати JSON, имзои HMAC-SHA256 ва асъорҳои TJS ва RUB.|Роҳнамо\n\nДар тарафи чап мундариҷа: аутентификатсия, сохтан ва ҳолати пардохт, рӯйхати бонкҳо, объекти пардохт, вебхукҳо, санҷиши имзо, пардохт бо рубл, баргардонидан ва пардохт аз рӯи ҳисоби шахсӣ.|Чӣ тавр кор мекунад\n\nПанҷ қадам аз дархости POST /payments то вебхуки payment.paid ва ёдрас, ки пул ва ҳолат танҳо тавассути вебхук меоянд.",
    ],
  ],
  [
    "docs-create",
    ["Создание платежа", "Creating a payment", "Сохтани пардохт"],
    [
      "Раздел документации о главном методе API.|Параметры\n\nТаблица описывает поля запроса POST /payments: order_id, amount, description, return_url, имя и телефон плательщика, bank_id для диплинка, срок жизни инвойса и meta.|Примеры кода\n\nГотовые примеры на cURL, PHP (Laravel), Node.js и ответ 201 с кнопкой копирования.|Ответы\n\nПояснения к кодам: 201 — платёж создан, 200 — повтор с тем же order_id, 422 — ошибка параметров, 502 — SmartPay не создал инвойс.",
      "The documentation section about the main API method.|Parameters\n\nA table describes the POST /payments request fields: order_id, amount, description, return_url, the payer's name and phone, bank_id for a deeplink, the invoice lifetime and meta.|Code samples\n\nReady examples in cURL, PHP (Laravel), Node.js and a 201 response, with a copy button.|Responses\n\nNotes on status codes: 201 means the payment was created, 200 is a repeat with the same order_id, 422 is a parameter error and 502 means SmartPay did not create the invoice.",
      "Бахши ҳуҷҷатҳо дар бораи усули асосии API.|Параметрҳо\n\nҶадвал майдонҳои дархости POST /payments-ро тасвир мекунад: order_id, amount, description, return_url, ном ва телефони пардохткунанда, bank_id барои диплинк, мӯҳлати инвойс ва meta.|Намунаҳои код\n\nНамунаҳои тайёр бо cURL, PHP (Laravel), Node.js ва ҷавоби 201 бо тугмаи нусхабардорӣ.|Ҷавобҳо\n\nШарҳи кодҳо: 201 — пардохт сохта шуд, 200 — такрор бо ҳамон order_id, 422 — хатои параметрҳо, 502 — SmartPay инвойс насохт.",
    ],
  ],
  [
    "docs-webhooks",
    ["Вебхуки", "Webhooks", "Вебхукҳо"],
    [
      "Раздел о том, как проект узнаёт об оплате.|Статусы\n\nТаблица статусов платежа: pending, paid, failed, expired и refunded с событиями, которые их сопровождают.|Заголовки\n\nКогда платёж оплачен, Somonly отправляет POST на Webhook URL проекта с заголовками X-Somonly-Event, X-Somonly-Delivery и X-Somonly-Signature — HMAC-SHA256 от тела запроса.|Пример\n\nНиже полный пример вебхука payment.paid: проект, номер заказа, сумма, валюта, банк и время оплаты.",
      "The section on how a project learns about a payment.|Statuses\n\nA table of payment statuses: pending, paid, failed, expired and refunded, with the events that accompany them.|Headers\n\nWhen a payment is paid, Somonly sends a POST to the project's Webhook URL with the X-Somonly-Event, X-Somonly-Delivery and X-Somonly-Signature headers, the last being an HMAC-SHA256 of the request body.|Example\n\nBelow is a full payment.paid webhook example: the project, order number, amount, currency, bank and payment time.",
      "Бахш дар бораи он, ки лоиҳа чӣ тавр аз пардохт огоҳ мешавад.|Ҳолатҳо\n\nҶадвали ҳолатҳои пардохт: pending, paid, failed, expired ва refunded бо рӯйдодҳое, ки онҳоро ҳамроҳӣ мекунанд.|Сарлавҳаҳо\n\nВақте ки пардохт анҷом ёфт, Somonly ба Webhook URL-и лоиҳа POST бо сарлавҳаҳои X-Somonly-Event, X-Somonly-Delivery ва X-Somonly-Signature — HMAC-SHA256 аз бадани дархост мефиристад.|Намуна\n\nДар поён намунаи пурраи вебхуки payment.paid: лоиҳа, рақами фармоиш, маблағ, асъор, бонк ва вақти пардохт.",
    ],
  ],
  [
    "cabinet",
    ["Личный кабинет", "Merchant cabinet", "Кабинети шахсӣ"],
    [
      "Вход в личный кабинет клиента платёжного шлюза на cabinet.somonly.com.|Назначение\n\nВ кабинете клиент видит платежи, баланс, выплаты и ключи API своего проекта.|Подключение\n\nНовые клиенты оставляют заявку прямо со страницы входа, а доступ сотрудникам выдаёт владелец кабинета.",
      "The login to the payment gateway's client cabinet at cabinet.somonly.com.|Purpose\n\nIn the cabinet, a client sees their project's payments, balance, payouts and API keys.|Onboarding\n\nNew clients submit a request right from the login page, and the cabinet owner grants access to staff.",
      "Воридшавӣ ба кабинети шахсии мизоҷи дарвозаи пардохтӣ дар cabinet.somonly.com.|Вазифа\n\nДар кабинет мизоҷ пардохтҳо, баланс, пардохтҳо ба ҳисоб ва калидҳои API-и лоиҳаи худро мебинад.|Пайвастшавӣ\n\nМизоҷони нав аризаро бевосита аз саҳифаи воридшавӣ мегузоранд ва дастрасиро ба кормандон соҳиби кабинет медиҳад.",
    ],
  ],
];

const languages = ["ru", "en", "tj"] as const;
const headings = {
  ru: "Архитектура и функциональность",
  en: "Architecture and functionality",
  tj: "Сохтор ва вазифаҳо",
};

const toItems = (screens: Screen[]): Items =>
  screens.map(([slug, titles, descriptions]) => {
    const title = { ru: titles[0], en: titles[1], tj: titles[2] };
    const shortInfo = { ru: "", en: "", tj: "" };
    const fullInfo = { ru: "", en: "", tj: "" };
    languages.forEach((language, index) => {
      const [intro, ...sections] = descriptions[index].split("|");
      shortInfo[language] = intro;
      fullInfo[language] = `${headings[language]}: ${titles[index]}\n\n${intro}\n\n${sections.map((section, number) => `${number + 1}. ${section}`).join("\n\n")}`;
    });
    const imageSrc = `/images/projects/somonly/${slug}-1700.webp`;
    return { slug, title, imageSrc, BannerSrc: imageSrc, shortInfo, fullInfo };
  });

export const somonlyProductScreens: Items = toItems(productScreens);
export const somonlyApiScreens: Items = toItems(apiScreens);
