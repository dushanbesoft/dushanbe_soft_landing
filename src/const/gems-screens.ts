import type { ProductSiteItem } from "./product-site";

type Screen = [string, [string, string, string], [string, string, string]];
type Items = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"];

// Gems (gems.tj) screenshots, 1700x1080. Description format: "intro|Heading\n\nText|Heading\n\nText".
const storefrontScreens: Screen[] = [
  [
    "hero",
    ["Главный экран", "Hero section", "Экрани асосӣ"],
    [
      "Первый экран gems.tj: магазин доната для игроков Таджикистана с оплатой в сомони.|Предложение\n\nЗаголовок «Донат в любимые игры за одну минуту» поясняет подзаголовок: алмазы Free Fire, UC PUBG, Mobile Legends и другое, нужен только ID игрока, пароль не нужен, выдача автоматически 24/7.|Доверие\n\nПод кнопками «Пополнить игру» и «Как это работает» указаны выдача примерно за минуту, работа 24/7 и возврат, если не вышло. Ниже — способы оплаты: Душанбе Сити, Алиф, SmartPay, СБП и карта РФ.|Интерфейс\n\nСправа карточка игры и уведомление «Алмазы пришли! 110 💎 · 38 сек» показывают результат покупки. В шапке — каталог, мои заказы, отзывы, переключатель RU/TJ, светлая и тёмная тема и поддержка.",
      "The first screen of gems.tj: a game top-up store for players in Tajikistan with payment in somoni.|Proposition\n\nThe headline \"Top up your favourite games in one minute\" is explained by the subtitle: Free Fire diamonds, PUBG UC, Mobile Legends and more; only the player ID is needed, no password, automatic delivery 24/7.|Trust\n\nBelow the Top up a game and How it works buttons are delivery in about a minute, 24/7 operation and a refund if something goes wrong. Further down are the payment methods: Dushanbe City, Alif, SmartPay, SBP and Russian cards.|Interface\n\nOn the right, a game card and the \"Diamonds arrived! 110 💎 · 38 sec\" notification show the result of a purchase. The header holds the catalogue, my orders, reviews, the RU/TJ switch, light and dark themes and support.",
      "Экрани аввали gems.tj: мағозаи донат барои бозингарони Тоҷикистон бо пардохт ба сомонӣ.|Пешниҳод\n\nСарлавҳаи «Донат ба бозиҳои дӯстдошта дар як дақиқа»-ро зерсарлавҳа мефаҳмонад: алмосҳои Free Fire, UC PUBG, Mobile Legends ва ғайра; танҳо ID-и бозингар лозим аст, парол лозим нест, супориш худкор 24/7.|Эътимод\n\nДар зери тугмаҳои «Пур кардани бозӣ» ва «Чӣ тавр кор мекунад» супориш тақрибан дар як дақиқа, кори 24/7 ва баргардонидани пул ҳангоми нокомӣ қайд шудаанд. Дар поён усулҳои пардохт: Душанбе Сити, Алиф, SmartPay, СБП ва корти Русия.|Интерфейс\n\nДар тарафи рост корти бозӣ ва огоҳиномаи «Алмосҳо омаданд! 110 💎 · 38 сония» натиҷаи харидро нишон медиҳанд. Дар сарлавҳа каталог, фармоишҳои ман, шарҳҳо, интихоби RU/TJ, мавзӯи равшан ва торик ва дастгирӣ ҷойгиранд.",
    ],
  ],
  [
    "catalog",
    ["Популярное и каталог игр", "Popular items and game catalogue", "Маъмул ва каталоги бозиҳо"],
    [
      "Блоки главной страницы, которые ведут покупателя к нужной игре.|Популярное\n\nРаздел «Популярное — чаще всего покупают сегодня» выводит самые востребованные пакеты, например 341 алмаз Free Fire за 244 ₽.|Все игры\n\nКаталог с поиском «Найти игру…» показывает карточки игр с обложкой, типом товара («Алмазы и ваучеры») и ценой «от 81 ₽».|Промокод\n\nБаннер «Промокод GEMS5 — минус 5% на первый заказ» предлагает ввести код при оформлении и подписаться на Telegram-канал с акциями и розыгрышами.",
      "Home page blocks that lead the buyer to the right game.|Popular\n\nThe \"Popular — most bought today\" section lists the most requested packages, for example 341 Free Fire diamonds for 244 ₽.|All games\n\nThe catalogue with a \"Find a game…\" search shows game cards with cover art, product type (\"Diamonds and vouchers\") and a \"from 81 ₽\" price.|Promo code\n\nThe \"Promo code GEMS5 — 5% off your first order\" banner invites buyers to enter the code at checkout and subscribe to the Telegram channel with offers and giveaways.",
      "Бахшҳои саҳифаи асосӣ, ки харидорро ба бозии лозимӣ мебаранд.|Маъмул\n\nБахши «Маъмул — имрӯз бештар мехаранд» бастаҳои серталабро нишон медиҳад, масалан 341 алмоси Free Fire ба 244 ₽.|Ҳамаи бозиҳо\n\nКаталог бо ҷустуҷӯи «Ёфтани бозӣ…» кортҳои бозиҳоро бо муқова, навъи мол («Алмосҳо ва ваучерҳо») ва нархи «аз 81 ₽» нишон медиҳад.|Промокод\n\nБаннери «Промокоди GEMS5 — 5% тахфиф барои фармоиши аввал» пешниҳод мекунад, ки кодро ҳангоми фармоиш ворид кунед ва ба канали Telegram бо аксияҳо ва бозиҳои бурдбурд обуна шавед.",
    ],
  ],
  [
    "how-it-works",
    ["Как купить и почему Gems", "How to buy and why Gems", "Чӣ тавр харидан ва чаро Gems"],
    [
      "Пошаговая инструкция покупки, преимущества сервиса и отзывы на главной странице.|4 шага\n\nБлок «Как купить донат» описывает путь: выбрать игру и пакет, ввести ID (ник аккаунта показывается до оплаты), оплатить в сомони через SmartPay и получить донат обычно за минуту со статусом в «Мои заказы».|Преимущества\n\nКарточки «Почему Gems»: мгновенная автоматическая выдача без менеджеров, честная цена ниже, чем в игре, безопасность — только ID игрока без пароля — и полный возврат, если заказ не выполнен.|Отзывы\n\nНиже выводятся последние отзывы покупателей с оценкой, игрой и купленным пакетом и ссылка «Все отзывы».",
      "A step-by-step purchase guide, service benefits and reviews on the home page.|4 steps\n\nThe \"How to buy\" block describes the journey: choose a game and package, enter the ID (the account nickname is shown before payment), pay in somoni via SmartPay and receive the top-up, usually within a minute, with its status in My orders.|Benefits\n\nThe \"Why Gems\" cards: instant automatic delivery without managers, a fair price below the in-game one, safety with only the player ID and no password, and a full refund if an order fails.|Reviews\n\nBelow are the latest customer reviews with a rating, the game and the package bought, plus an All reviews link.",
      "Дастури қадам ба қадами харид, бартариҳои хизмат ва шарҳҳо дар саҳифаи асосӣ.|4 қадам\n\nБахши «Чӣ тавр донат харидан» роҳро тасвир мекунад: бозӣ ва бастаро интихоб кунед, ID-ро ворид кунед (лақаби аккаунт пеш аз пардохт нишон дода мешавад), ба сомонӣ тавассути SmartPay пардохт кунед ва донатро одатан дар як дақиқа бо ҳолат дар «Фармоишҳои ман» гиред.|Бартариҳо\n\nКортҳои «Чаро Gems»: супориши фаврӣ ва худкор бе менеҷер, нархи одилона аз бозӣ арзонтар, бехатарӣ — танҳо ID-и бозингар бе парол — ва баргардонидани пурраи пул, агар фармоиш иҷро нашавад.|Шарҳҳо\n\nДар поён шарҳҳои охирини харидорон бо баҳо, бозӣ ва бастаи харидашуда ва пайванди «Ҳамаи шарҳҳо» ҷойгиранд.",
    ],
  ],
  [
    "faq",
    ["Частые вопросы", "FAQ", "Саволҳои маъмул"],
    [
      "Раздел частых вопросов снимает основные сомнения покупателя перед оплатой.|Вопросы\n\nАккордеон отвечает, для кого сервис, сколько ждать донат, нужен ли пароль, могут ли забанить аккаунт, что делать при неверном ID, как оплатить, что будет, если заказ не выполнится, и можно ли купить донат другу.|Ответы\n\nНапример: в 99% случаев валюта приходит за 1–2 минуты, для пополнения нужен только UID, а при невыполненном заказе деньги возвращаются тем же способом оплаты.|Telegram\n\nВнизу блок «Розыгрыши алмазов каждую неделю» с кнопкой подписки на Telegram-канал с промокодами и новыми играми.",
      "The FAQ section removes a buyer's main doubts before payment.|Questions\n\nThe accordion explains who the service is for, how long a top-up takes, whether a password is needed, whether an account can be banned, what to do with a wrong ID, how to pay, what happens if an order fails and whether you can top up a friend.|Answers\n\nFor example: in 99% of cases the currency arrives in 1–2 minutes, only the UID is needed, and if an order fails the money is returned to the same payment method.|Telegram\n\nAt the bottom, the \"Diamond giveaways every week\" block has a button to subscribe to the Telegram channel with promo codes and new games.",
      "Бахши саволҳои маъмул шубҳаҳои асосии харидорро пеш аз пардохт бартараф мекунад.|Саволҳо\n\nАккордеон ҷавоб медиҳад, ки хизмат барои кист, донат чӣ қадар интизор мешавад, парол лозим аст ё не, аккаунтро манъ карда метавонанд ё не, бо ID-и нодуруст чӣ бояд кард, чӣ тавр пардохт кард, агар фармоиш иҷро нашавад чӣ мешавад ва оё барои дӯст донат харидан мумкин аст.|Ҷавобҳо\n\nМасалан: дар 99% ҳолатҳо асъор дар 1–2 дақиқа меояд, танҳо UID лозим аст ва ҳангоми иҷро нашудани фармоиш пул бо ҳамон усули пардохт баргардонида мешавад.|Telegram\n\nДар поён бахши «Бозиҳои бурдбурди алмос ҳар ҳафта» бо тугмаи обуна ба канали Telegram бо промокодҳо ва бозиҳои нав.",
    ],
  ],
];

const checkoutScreens: Screen[] = [
  [
    "order",
    ["Оформление заказа", "Checkout", "Тартиб додани фармоиш"],
    [
      "Страница игры Free Fire, на которой покупатель собирает заказ за три шага.|Шаги\n\nСлева пронумерованные блоки: регион аккаунта (СНГ) с пояснением, что товар работает только для выбранного региона; ID игрока с кнопкой «Проверить», которая показывает ник до оплаты; выбор пакета алмазов.|Ваш заказ\n\nСправа закреплена панель заказа со способами оплаты: Душанбе Сити и Алиф по QR-коду в одно касание, SmartPay — карта любого банка, приложение или QR, а также СБП и карта РФ для оплаты в рублях.|Итог\n\nВнизу панели — сумма к оплате, кнопка оформления и ссылки на оферту, политику возвратов, конфиденциальность и реквизиты.",
      "The Free Fire game page, where a buyer builds an order in three steps.|Steps\n\nOn the left are numbered blocks: account region (CIS) with a note that the product only works for the selected region; the player ID with a Check button that shows the nickname before payment; and the diamond package choice.|Your order\n\nOn the right, a sticky order panel lists payment methods: Dushanbe City and Alif via a one-tap QR code, SmartPay with any bank card, banking app or QR, plus SBP and Russian cards for payment in roubles.|Total\n\nAt the bottom of the panel are the amount due, the checkout button and links to the offer, refund policy, privacy policy and company details.",
      "Саҳифаи бозии Free Fire, ки дар он харидор фармоишро дар се қадам ҷамъ мекунад.|Қадамҳо\n\nДар тарафи чап бахшҳои рақамгузоришуда: минтақаи аккаунт (ИДМ) бо шарҳ, ки мол танҳо барои минтақаи интихобшуда кор мекунад; ID-и бозингар бо тугмаи «Санҷидан», ки лақабро пеш аз пардохт нишон медиҳад; интихоби бастаи алмос.|Фармоиши шумо\n\nДар тарафи рост панели фармоиш бо усулҳои пардохт собит аст: Душанбе Сити ва Алиф бо QR-код дар як ламс, SmartPay — корти ҳар бонк, барнома ё QR, инчунин СБП ва корти Русия барои пардохт ба рубл.|Ҷамъбаст\n\nДар поёни панел маблағи пардохт, тугмаи фармоиш ва пайвандҳо ба оферта, сиёсати баргардонидан, махфият ва реквизитҳо ҷойгиранд.",
    ],
  ],
  [
    "packages",
    ["Пакеты и ваучеры", "Packages and vouchers", "Бастаҳо ва ваучерҳо"],
    [
      "Витрина пакетов внутри страницы игры.|Валюта\n\nКарточки пакетов показывают количество алмазов, бонус (например, 100 +10 или 2 180 +218), итоговое количество и цену: от 100 алмазов за 81 ₽ до 5 600 +560 за 3 900 ₽. Метки «Хит» и «Выгодно» подсказывают популярные варианты.|Пропуски и подписки\n\nОтдельная группа — недельный ваучер за 162 ₽ и месячный за 550 ₽.|Об игре\n\nБлок «Об игре» описывает товар: алмазы Free Fire для аккаунтов региона СНГ, пакеты от 110 до 6 160 алмазов, только ID игрока и автоматическая выдача за 1–2 минуты после оплаты.",
      "The package showcase inside the game page.|Currency\n\nPackage cards show the number of diamonds, the bonus (for example, 100 +10 or 2,180 +218), the total and the price: from 100 diamonds for 81 ₽ to 5,600 +560 for 3,900 ₽. Hit and Best value badges point to popular options.|Passes and subscriptions\n\nA separate group holds a weekly voucher for 162 ₽ and a monthly one for 550 ₽.|About the game\n\nThe About the game block describes the product: Free Fire diamonds for CIS-region accounts, packages from 110 to 6,160 diamonds, only the player ID needed and automatic delivery within 1–2 minutes of payment.",
      "Витринаи бастаҳо дар дохили саҳифаи бозӣ.|Асъор\n\nКортҳои бастаҳо шумораи алмосҳо, бонус (масалан, 100 +10 ё 2 180 +218), шумораи умумӣ ва нархро нишон медиҳанд: аз 100 алмос ба 81 ₽ то 5 600 +560 ба 3 900 ₽. Нишонаҳои «Хит» ва «Фоиданок» вариантҳои маъмулро нишон медиҳанд.|Пропускҳо ва обунаҳо\n\nГурӯҳи алоҳида — ваучери ҳафтаина ба 162 ₽ ва моҳона ба 550 ₽.|Дар бораи бозӣ\n\nБахши «Дар бораи бозӣ» молро тасвир мекунад: алмосҳои Free Fire барои аккаунтҳои минтақаи ИДМ, бастаҳо аз 110 то 6 160 алмос, танҳо ID-и бозингар ва супориши худкор дар 1–2 дақиқа пас аз пардохт.",
    ],
  ],
  [
    "reviews",
    ["Отзывы покупателей", "Customer reviews", "Шарҳҳои харидорон"],
    [
      "Страница отзывов, которые покупатели оставляют после выполненного заказа.|Рейтинг\n\nВ шапке страницы — средняя оценка 4,9 из 5 и пояснение, что отзыв можно оставить только после выполненного заказа.|Карточки\n\nКаждый отзыв содержит имя, игру, купленный пакет, оценку звёздами, текст и дату. Покупатели пишут о скорости выдачи, оплате через Алиф и Душанбе Сити и о том, что ник показывают до оплаты.|Языки\n\nОтзывы приходят на русском и таджикском — интерфейс сайта тоже доступен на двух языках.",
      "The page of reviews that buyers leave after a completed order.|Rating\n\nThe page header shows an average rating of 4.9 out of 5 and notes that a review can only be left after a completed order.|Cards\n\nEach review contains the name, game, package bought, star rating, text and date. Buyers mention delivery speed, paying via Alif and Dushanbe City and seeing the nickname before payment.|Languages\n\nReviews arrive in Russian and Tajik, and the site interface is available in both languages too.",
      "Саҳифаи шарҳҳое, ки харидорон пас аз иҷрои фармоиш мегузоранд.|Рейтинг\n\nДар сарлавҳаи саҳифа баҳои миёнаи 4,9 аз 5 ва шарҳ, ки шарҳро танҳо пас аз иҷрои фармоиш гузоштан мумкин аст.|Кортҳо\n\nҲар шарҳ ном, бозӣ, бастаи харидашуда, баҳо бо ситораҳо, матн ва санаро дар бар мегирад. Харидорон дар бораи суръати супориш, пардохт тавассути Алиф ва Душанбе Сити ва нишон додани лақаб пеш аз пардохт менависанд.|Забонҳо\n\nШарҳҳо ба забонҳои русӣ ва тоҷикӣ меоянд — интерфейси сомона низ бо ду забон дастрас аст.",
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
    const imageSrc = `/images/projects/gems/${slug}-1700.webp`;
    return { slug, title, imageSrc, BannerSrc: imageSrc, shortInfo, fullInfo };
  });

export const gemsStorefrontScreens: Items = toItems(storefrontScreens);
export const gemsCheckoutScreens: Items = toItems(checkoutScreens);
