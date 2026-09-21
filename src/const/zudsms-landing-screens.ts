import type { ProductSiteItem } from "./product-site";

type Screen = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"][number];

export const zudsmsLandingScreens: Screen[] = [
  {
    slug: "hero",
    title: { ru: "Главный экран и демо SMS", en: "Main screen and SMS demo", tj: "Экрани асосӣ ва намунаи SMS" },
    imageSrc: "/images/projects/zudSMS/hero-full.webp",
    BannerSrc: "/images/projects/zudSMS/hero-full.webp",
    imageFit: "contain",
    shortInfo: { ru: "Презентация сервиса, предпросмотр сообщения и вход в кабинет", en: "Service introduction, message preview and account access", tj: "Муаррифии хизмат, пешнамоиши паём ва воридшавӣ ба кабинет" },
    fullInfo: {
      ru: `Архитектура и функциональность первого экрана ZudSMS

Главная страница представляет сервис SMS-рассылок для бизнеса в Таджикистане. Светлый фон, зелёные акценты и крупный заголовок направляют внимание на предложение, а макет телефона справа показывает примеры сообщений: акцию, код подтверждения, напоминание о записи и уведомление о готовности заказа.

1. Навигация и доступ к сервису

В шапке собраны ссылки на преимущества, индивидуальный тариф, пакеты, контакты и API-документацию. Переключатель RU / EN / TJ обозначает языковые версии, а выделенная кнопка «Личный кабинет» служит входом в рабочую часть сервиса.

2. Демонстрация формата сообщения

Блок «Предпросмотр» содержит имя отправителя, поле текста, счётчик символов и кнопку «Отправить». Вместе с примерами на экране телефона он знакомит посетителя с форматом SMS ещё до перехода в кабинет. На скриншоте также открыт промоблок LiveChat с предложением онлайн-чата для сайта.

3. Пользовательский сценарий и ценность для бизнеса

Посетитель знакомится с назначением платформы, изучает пример сообщения и переходит к тарифам или личному кабинету. Такое построение первого экрана делает услугу наглядной и помогает связать её с повседневными задачами компании.`,
      en: `Architecture and functionality of the ZudSMS main screen

The homepage introduces an SMS messaging service for businesses in Tajikistan. A light background, green accents and a large headline highlight the offer. A phone mockup illustrates a promotion, verification code, appointment reminder and order notification.

1. Navigation and service access

The header links to benefits, custom pricing, packages, contacts and API documentation. RU / EN / TJ controls identify the language versions, while the highlighted account button leads to the service workspace.

2. Message preview

The preview panel includes a sender name, message field, character counter and Send button. Together with the phone examples, it introduces the SMS format before account access. An open LiveChat promotion also presents a website chat service.

3. User journey and business value

Visitors learn what the platform offers, review the message example and continue to pricing or their account. This structure makes the service tangible and connects it to everyday business communication.`,
      tj: `Сохтор ва имкониятҳои экрани асосии ZudSMS

Саҳифаи асосӣ хизмати ирсоли SMS-ро барои тиҷорат дар Тоҷикистон муаррифӣ мекунад. Заминаи равшан, унсурҳои сабз ва сарлавҳаи калон пешниҳодро намоён мекунанд. Намунаи телефон паёмҳои аксия, рамзи тасдиқ, ёдрасии қабул ва омодагии фармоишро нишон медиҳад.

1. Роҳнамоӣ ва дастрасӣ ба хизмат

Меню ба бартариҳо, тарофаи инфиродӣ, бастаҳо, тамосҳо ва ҳуҷҷатҳои API роҳ медиҳад. Интихоби RU / EN / TJ нусхаҳои забониро нишон медиҳад ва тугмаи «Кабинети шахсӣ» роҳи воридшавӣ ба қисми кории хизмат аст.

2. Пешнамоиши паём

Блоки пешнамоиш номи фиристанда, майдони матн, ҳисобкунаки аломатҳо ва тугмаи ирсолро дар бар мегирад. Намунаҳои телефон формати SMS-ро пеш аз воридшавӣ ба кабинет муаррифӣ мекунанд. Дар экран пешниҳоди LiveChat барои чати сомона низ кушода аст.

3. Раванди истифода ва аҳамият барои тиҷорат

Корбар бо хизмат шинос шуда, намунаи паёмро мебинад ва ба тарофаҳо ё кабинет мегузарад. Ин сохтор хизматро фаҳмо карда, онро бо вазифаҳои ҳаррӯзаи ширкат мепайвандад.`,
    },
  },
  {
    slug: "custom-plan",
    title: { ru: "Свой тариф и стартовые пакеты", en: "Custom plan and starter packages", tj: "Тарофаи инфиродӣ ва бастаҳои аввалия" },
    imageSrc: "/images/projects/zudSMS/custom-plan-full.webp",
    BannerSrc: "/images/projects/zudSMS/custom-plan-full.webp",
    imageFit: "contain",
    shortInfo: { ru: "Расчёт по количеству SMS и сроку использования", en: "Pricing by SMS quantity and duration", tj: "Ҳисоби арзиш аз рӯйи шумораи SMS ва муҳлат" },
    fullInfo: {
      ru: `Структура выбора индивидуального тарифа

Экран объединяет конструктор тарифа и начало каталога готовых пакетов. Посетитель может сопоставить индивидуальные параметры рассылки со стандартными предложениями в одном разделе.

1. Параметры расчёта

В блоке «Свой тариф» расположены поля количества SMS и срока в днях. Подсказки указывают минимальные значения: 10 сообщений и один день. Рядом выделены итоговая стоимость и кнопка «Оформить в кабинете»; подпись поясняет, что оформление доступно в личном кабинете.

2. Альтернатива в виде готовых пакетов

Ниже представлены карточки «Пробный», «Мини» и «Лайт». Каждая содержит количество сообщений, стоимость, срок и кнопку выбора. Цветовое разделение и короткие метки помогают различать предложения.

3. Пользовательский сценарий и ценность для бизнеса

Посетитель задаёт параметры рассылки либо выбирает готовый пакет, затем переходит к оформлению. Такая структура делает модель оплаты понятной и помогает планировать объём коммуникаций до начала работы.`,
      en: `Custom pricing selection

This screen combines a custom plan calculator with the beginning of the package catalogue, placing individual campaign parameters next to standard offers.

1. Calculation parameters

The custom plan panel contains SMS quantity and duration fields. Hints specify a minimum of ten messages and one day. A highlighted total and account checkout button sit alongside a note explaining where the plan is purchased.

2. Ready-made packages

Trial, Mini and Light cards display message allowances, prices, durations and selection buttons. Colours and short labels distinguish the offers.

3. User journey and business value

Visitors enter campaign parameters or select a package before proceeding to their account. This layout explains pricing and helps businesses plan their communication volume.`,
      tj: `Сохтори интихоби тарофаи инфиродӣ

Экран ҳисобкунаки тарофа ва оғози феҳристи бастаҳои тайёрро муттаҳид мекунад. Корбар метавонад параметрҳои инфиродиро бо пешниҳодҳои стандартӣ муқоиса намояд.

1. Параметрҳои ҳисоб

Блоки тарофаи инфиродӣ майдонҳои шумораи SMS ва муҳлатро бо рӯзҳо дорад. Роҳнамоҳо ҳадди ақали 10 паём ва як рӯзро нишон медиҳанд. Арзиши умумӣ ва тугмаи расмикунонӣ дар кабинет ҷудо шудаанд.

2. Бастаҳои тайёр

Кортҳои «Пробный», «Мини» ва «Лайт» шумораи паёмҳо, нарх, муҳлат ва тугмаи интихобро дар бар мегиранд. Рангҳо ва нишонаҳои кӯтоҳ пешниҳодҳоро фарқ мекунанд.

3. Раванди истифода ва аҳамият барои тиҷорат

Корбар параметрҳоро ворид мекунад ё бастаи тайёрро интихоб намуда, ба кабинет мегузарад. Ин сохтор нархгузориро фаҳмо карда, банақшагирии ҳаҷми паёмҳоро осон мекунад.`,
    },
  },
  {
    slug: "packages",
    title: { ru: "Каталог тарифных пакетов", en: "Pricing package catalogue", tj: "Феҳристи бастаҳои тарофавӣ" },
    imageSrc: "/images/projects/zudSMS/packages-full.webp",
    BannerSrc: "/images/projects/zudSMS/packages-full.webp",
    imageFit: "contain",
    shortInfo: { ru: "Сравнение пакетов по объёму, цене и назначению", en: "Compare packages by volume, price and purpose", tj: "Муқоисаи бастаҳо аз рӯйи ҳаҷм, нарх ва мақсад" },
    fullInfo: {
      ru: `Архитектура каталога тарифов

Тарифы представлены сеткой из трёх колонок с единым построением карточек. На скриншоте видны шесть предложений — от пробного доступа до пакета «Базовый».

1. Иерархия информации

Название, количество SMS и крупная цена образуют основной маршрут чтения. Ниже указаны срок действия и действие «Выбрать пакет». На представленном экране пробный пакет включает 5 SMS бесплатно, а платные предложения охватывают объёмы от 500 до 10 000 сообщений.

2. Визуальные ориентиры

Цветные фоны отличают пакеты, а метки «Новый пользователь», «Для небольших рассылок» и «Популярный» объясняют их позиционирование. Повторяющаяся структура позволяет сравнивать предложения без поиска условий в разных частях страницы.

3. Пользовательский сценарий и ценность для бизнеса

Клиент сопоставляет нужный объём с ценой и выбирает пакет. Каталог поддерживает постепенный переход от знакомства с сервисом к более масштабным рассылкам; приведённые цены описывают состояние интерфейса на скриншоте.`,
      en: `Pricing catalogue architecture

Plans use a three-column grid with a consistent card structure. Six offers are visible, from a trial to the Basic package.

1. Information hierarchy

The plan name, message allowance and prominent price guide reading. Duration and a selection button follow. The captured trial includes five free messages; paid offers shown range from 500 to 10,000 SMS.

2. Visual guidance

Distinct colours separate plans, while labels such as New user, Small campaigns and Popular explain positioning. Consistent cards make comparison straightforward.

3. User journey and business value

Customers compare volume and cost, then choose a package. The catalogue supports progression from a trial to larger campaigns. Prices belong to the captured interface.`,
      tj: `Сохтори феҳристи тарофаҳо

Тарофаҳо дар шабакаи се сутун бо кортҳои якхела пешниҳод шудаанд. Дар экран шаш пешниҳод — аз бастаи санҷишӣ то «Базовый» намоён аст.

1. Тартиби иттилоот

Номи баста, шумораи SMS ва нархи калон маълумоти асосиро ташкил медиҳанд. Дар поён муҳлат ва тугмаи интихоб ҷойгиранд. Бастаи санҷишии дар акс буда 5 SMS-и ройгон дорад; бастаҳои пулакӣ аз 500 то 10 000 паёмро фаро мегиранд.

2. Роҳнамоҳои визуалӣ

Рангҳо бастаҳо ва нишонаҳо таъиноти онҳоро фарқ мекунанд. Сохтори ягона муқоисаи шартҳоро осон мегардонад.

3. Раванди истифода ва аҳамият барои тиҷорат

Муштарӣ ҳаҷм ва нархро муқоиса карда, баста интихоб мекунад. Феҳрист гузариш аз санҷиши хизмат ба ирсоли бештарро дастгирӣ мекунад. Нархҳо ҳолати интерфейсро дар скриншот инъикос мекунанд.`,
    },
  },
  {
    slug: "advantages",
    title: { ru: "Преимущества платформы", en: "Platform benefits", tj: "Бартариҳои платформа" },
    imageSrc: "/images/projects/zudSMS/advantages-full.webp",
    BannerSrc: "/images/projects/zudSMS/advantages-full.webp",
    imageFit: "contain",
    shortInfo: { ru: "Стоимость, охват операторов, шаблоны и интеграция через API", en: "Pricing, operator coverage, templates and API integration", tj: "Арзиш, фарогирии операторҳо, қолабҳо ва ҳамгироии API" },
    fullInfo: {
      ru: `Структура раздела «Наши преимущества»

Шесть карточек организуют аргументы сервиса в сетку из двух рядов. Иконка на светло-зелёном фоне, короткий заголовок и пояснение создают единый ритм чтения.

1. Экономика и охват

Первый ряд представляет заявленные преимущества стоимости, скорости доставки и отправки на номера всех мобильных операторов Таджикистана. Каждый аргумент выделен в отдельную карточку, чтобы посетитель мог быстро просмотреть предложение.

2. Инструменты для регулярной работы

Второй ряд знакомит с собственными шаблонами сообщений, автоматизированной отправкой через API и акцентом на конфиденциальности данных. Он связывает презентацию сервиса с повторяющимися задачами компании и интеграцией с её системами.

3. Пользовательский сценарий и ценность для бизнеса

Посетитель оценивает заявленные возможности и определяет, какие из них соответствуют его процессам. Раздел дополняет тарифы содержательными аргументами и помогает сформулировать вопросы перед подключением.`,
      en: `Benefits section structure

Six cards arrange the service proposition in two rows. Pale green icon backgrounds, short headings and supporting text create a consistent reading rhythm.

1. Cost and reach

The first row presents claims about pricing, delivery speed and coverage of Tajikistan’s mobile operators. Separate cards make the offer easy to scan.

2. Tools for recurring work

The second row introduces message templates, automated sending through an API and data confidentiality. These topics connect the service to routine company processes and system integration.

3. User journey and business value

Visitors assess the presented capabilities against their workflow. The section adds practical context to pricing and helps customers identify questions before subscribing.`,
      tj: `Сохтори бахши «Бартариҳои мо»

Шаш корт дар ду қатор бартариҳои пешниҳодшударо ҷамъ мекунанд. Нишонаҳои сабз, сарлавҳаҳои кӯтоҳ ва шарҳҳо тартиби ягонаи хонданро месозанд.

1. Арзиш ва фарогирӣ

Қатори аввал пешниҳодҳои хизматро оид ба нарх, суръати расонидан ва ирсол ба операторҳои мобилии Тоҷикистон нишон медиҳад. Ҳар мавзӯъ корти алоҳида дорад.

2. Воситаҳои кори доимӣ

Қатори дуюм қолабҳои паём, ирсоли худкор тавассути API ва махфияти маълумотро муаррифӣ мекунад. Ин мавзӯъҳо хизматро бо равандҳои такрории ширкат ва ҳамгироии системаҳо мепайванданд.

3. Раванди истифода ва аҳамият барои тиҷорат

Корбар имкониятҳои пешниҳодшударо бо талаботи худ муқоиса мекунад. Бахш тарофаҳоро бо шарҳи амалӣ пурра карда, барои омода кардани саволҳо пеш аз пайвастшавӣ ёрӣ медиҳад.`,
    },
  },
  {
    slug: "use-cases",
    title: { ru: "Показатели и сферы применения", en: "Service metrics and use cases", tj: "Нишондиҳандаҳо ва соҳаҳои истифода" },
    imageSrc: "/images/projects/zudSMS/use-cases-full.webp",
    BannerSrc: "/images/projects/zudSMS/use-cases-full.webp",
    imageFit: "contain",
    shortInfo: { ru: "Презентация сервиса и отраслевые сценарии SMS-рассылок", en: "Service presentation and industry messaging scenarios", tj: "Муаррифии хизмат ва истифодаи соҳавии SMS" },
    fullInfo: {
      ru: `Презентационный блок и отраслевые направления

Экран связывает общее предложение SMS-рассылок с конкретными сферами бизнеса. Контрастный зелёный блок сменяется светлой сеткой отраслевых карточек.

1. Представление сервиса в цифрах

В верхней части интерфейса приведены заявленные показатели: 98% доставляемости, 1000+ клиентов и поддержка 24/7. Крупные значения и короткие подписи работают как акценты презентации; это показатели, отображённые на предоставленном скриншоте.

2. Отраслевая навигация по применению

Восемь карточек охватывают страховые компании, интернет-магазины и сервисы, такси и доставку, медицинские центры, банки и платёжные системы, образование, туризм, а также салоны, бутики и рестораны. Разные цвета и пиктограммы помогают быстро узнать свою сферу.

3. Пользовательский сценарий и ценность для бизнеса

Посетитель находит близкое направление и соотносит рассылки со своими задачами: уведомлениями, напоминаниями или предложениями клиентам. Такое представление переводит техническую услугу в понятный контекст повседневной работы.`,
      en: `Service presentation and industry applications

This screen connects SMS messaging with specific business sectors. A contrasting green presentation panel leads into a light grid of industry cards.

1. Metrics presentation

The captured interface displays claims of 98% delivery, 1,000+ customers and 24/7 support. Large figures and short labels make them presentation highlights; they describe the supplied screenshot.

2. Industry examples

Eight cards cover insurance, online stores and services, taxis and delivery, healthcare, banking and payments, education, travel, and salons, boutiques and restaurants. Colours and icons help visitors recognise their sector.

3. User journey and business value

Visitors find a familiar sector and connect messaging with notifications, reminders or customer offers. This presentation places a technical service in an everyday business context.`,
      tj: `Муаррифии хизмат ва соҳаҳои истифода

Экран ирсоли SMS-ро бо соҳаҳои мушаххаси тиҷорат мепайвандад. Пас аз блоки сабзи муаррифӣ шабакаи равшани кортҳои соҳавӣ ҷойгир аст.

1. Муаррифии нишондиҳандаҳо

Интерфейси акс нишондиҳандаҳои эълоншудаи 98% расонидан, зиёда аз 1000 муштарӣ ва дастгирии 24/7-ро нишон медиҳад. Рақамҳои калон диққатро ҷалб мекунанд ва ҳолати скриншоти пешниҳодшударо тавсиф менамоянд.

2. Намунаҳои соҳавӣ

Ҳашт корт суғурта, мағозаҳои интернетӣ, таксӣ ва расонидан, тиб, бонкҳо ва пардохтҳо, маориф, сайёҳӣ, инчунин салонҳо, дӯконҳо ва тарабхонаҳоро фаро мегиранд. Рангҳо ва нишонаҳо шинохти соҳаро осон мекунанд.

3. Раванди истифода ва аҳамият барои тиҷорат

Корбар соҳаи худро пайдо карда, паёмҳоро бо огоҳиномаҳо, ёдрасиҳо ва пешниҳодҳо ба муштариён мепайвандад. Ин тарзи муаррифӣ хизматро дар заминаи кори ҳаррӯза фаҳмо мекунад.`,
    },
  },
  {
    slug: "contacts",
    title: { ru: "Обратная связь и поддержка", en: "Contact form and support", tj: "Алоқаи бозгашт ва дастгирӣ" },
    imageSrc: "/images/projects/zudSMS/contacts-full.webp",
    BannerSrc: "/images/projects/zudSMS/contacts-full.webp",
    imageFit: "contain",
    shortInfo: { ru: "Форма обращения, социальные сети и контакты компании", en: "Enquiry form, social channels and company contacts", tj: "Шакли муроҷиат, шабакаҳои иҷтимоӣ ва тамосҳои ширкат" },
    fullInfo: {
      ru: `Архитектура контактного раздела

Раздел «Возникли вопросы?» построен в две колонки. Слева находится форма обращения, справа — социальные сети, поддержка и начало блока платёжных систем.

1. Форма обращения

Посетителю предложены поля имени, электронной почты и сообщения. Под ними размещён флажок согласия на обработку персональных данных и получение рекламы, затем кнопка «Отправить». Последовательность полей задаёт понятный порядок подготовки обращения.

2. Альтернативные каналы связи

Отдельный блок содержит значки Facebook, Instagram, Telegram и WhatsApp. Карточка поддержки показывает телефон и адрес компании в Душанбе. Эти сведения позволяют выбрать подходящий способ общения и узнать, кто предоставляет сервис.

3. Пользовательский сценарий и ценность для бизнеса

Клиент описывает вопрос в форме либо использует контактные каналы. Объединение способов связи в одном разделе облегчает обращение за консультацией по тарифам и подключению.`,
      en: `Contact section architecture

The questions section uses two columns: an enquiry form on the left and social channels, support details and payment information on the right.

1. Enquiry form

Name, email and message fields are followed by a consent checkbox covering personal data processing and advertising, then a Send button. The field sequence provides a clear route for composing an enquiry.

2. Alternative contact channels

Facebook, Instagram, Telegram and WhatsApp icons sit in a dedicated panel. A support card lists the company phone and Dushanbe address, identifying the provider and offering other ways to contact it.

3. User journey and business value

Customers describe their question or choose a contact channel. Bringing these options together makes pricing and setup enquiries easier.`,
      tj: `Сохтори бахши тамос

Бахши саволҳо аз ду сутун иборат аст: дар чап шакли муроҷиат ва дар рост шабакаҳои иҷтимоӣ, маълумоти дастгирӣ ва оғози бахши пардохтҳо ҷойгиранд.

1. Шакли муроҷиат

Майдонҳои ном, почтаи электронӣ ва паём бо аломати ризоият ба коркарди маълумоти шахсӣ ва гирифтани реклама, сипас тугмаи ирсол идома меёбанд. Тартиби майдонҳо навиштани муроҷиатро фаҳмо мекунад.

2. Роҳҳои дигари тамос

Нишонаҳои Facebook, Instagram, Telegram ва WhatsApp дар блоки алоҳида ҷойгиранд. Корти дастгирӣ телефон ва суроғаи ширкатро дар Душанбе нишон медиҳад.

3. Раванди истифода ва аҳамият барои тиҷорат

Муштарӣ саволро менависад ё роҳи мувофиқи тамосро интихоб мекунад. Якҷо будани ин имкониятҳо машварат оид ба тарофа ва пайвастшавиро осон мегардонад.`,
    },
  },
  {
    slug: "footer",
    title: { ru: "Платёжные системы и подвал сайта", en: "Payment systems and footer", tj: "Низомҳои пардохт ва поёни сомона" },
    imageSrc: "/images/projects/zudSMS/footer-full.webp",
    BannerSrc: "/images/projects/zudSMS/footer-full.webp",
    imageFit: "contain",
    shortInfo: { ru: "Способы оплаты, предложение LiveChat и завершающая навигация", en: "Payment options, LiveChat promotion and footer navigation", tj: "Роҳҳои пардохт, пешниҳоди LiveChat ва роҳнамоии поёнӣ" },
    fullInfo: {
      ru: `Структура завершающей части лендинга

Нижняя часть страницы объединяет представление платёжных систем, промополосу LiveChat и тёмный информационный подвал. Последовательность завершает знакомство с сервисом и сохраняет доступ к основным разделам.

1. Представление способов оплаты

Четыре карточки показывают ALIF, Корти Милли, Душанбе Сити и VISA. Логотипы сопровождаются названиями и краткими подписями, позволяя посетителю узнать привычную платёжную систему.

2. Дополнительный продукт

Зелёная полоса представляет LiveChat как онлайн-чат для сайта. Короткое предложение и кнопка «Подробнее» выделяют переход к дополнительному инструменту общения с клиентами.

3. Информационный подвал

Три смысловых блока содержат логотип и описание ZudSMS, навигацию и контактные данные. Ниже расположены строка авторских прав и название ИП «Душанбе-Софт». Посетитель может вернуться к тарифам, преимуществам или контактам, дойдя до конца страницы.

Ценность для бизнеса: завершающий блок объединяет сведения о компании и способах оплаты, повторяет маршруты обращения и знакомит аудиторию с дополнительным продуктом.`,
      en: `Landing page closing structure

The bottom of the page combines payment system cards, a LiveChat promotion and a dark information footer. It completes the service introduction while keeping key routes available.

1. Payment presentation

Four cards show ALIF, Korti Milli, Dushanbe City and VISA. Logos, names and short labels help visitors recognise familiar payment systems.

2. Additional product

A green strip introduces LiveChat as a website chat service. A brief offer and Learn more button provide a route to another customer communication tool.

3. Information footer

Three groups contain the ZudSMS logo and description, navigation and contact details. A copyright line and Dushanbe-Soft business name appear below. Visitors reaching the end can return to pricing, benefits or contacts.

Business value: this section brings together company and payment information, repeats contact routes and introduces a related product.`,
      tj: `Сохтори қисми хотимавии саҳифа

Поёни саҳифа кортҳои низомҳои пардохт, пешниҳоди LiveChat ва қисми иттилоотии торикро муттаҳид мекунад. Он шиносоӣ бо хизматро ба анҷом расонда, роҳҳои асосиро дастрас нигоҳ медорад.

1. Муаррифии роҳҳои пардохт

Чор корт ALIF, Корти Миллӣ, Душанбе Сити ва VISA-ро нишон медиҳанд. Нишонҳо, номҳо ва шарҳҳои кӯтоҳ шинохти низоми шиноси пардохтро осон мекунанд.

2. Маҳсулоти иловагӣ

Тасмаи сабз LiveChat-ро ҳамчун чати сомона муаррифӣ мекунад. Пешниҳоди кӯтоҳ ва тугмаи «Муфассал» ба воситаи дигари муошират бо муштариён роҳ медиҳанд.

3. Қисми иттилоотии поёнӣ

Се гурӯҳ нишон ва тавсифи ZudSMS, роҳнамоӣ ва маълумоти тамосро дар бар мегиранд. Дар поён сатри ҳуқуқи муаллиф ва номи соҳибкории «Душанбе-Софт» ҷойгир аст. Корбар метавонад ба тарофаҳо, бартариҳо ё тамосҳо баргардад.

Аҳамият барои тиҷорат: ин бахш маълумоти ширкат ва пардохтҳоро ҷамъ намуда, роҳҳои муроҷиатро такрор мекунад ва маҳсулоти вобастаро муаррифӣ менамояд.`,
    },
  },
];
