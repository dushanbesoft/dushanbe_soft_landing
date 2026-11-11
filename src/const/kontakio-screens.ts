import type { ProductSiteItem } from "./product-site";

type Screen = [string, [string, string, string], [string, string, string]];
type Items = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"];

// Kontakio (kontakio.com) screenshots. Landing images are 1700x1080, account images 1920x1080.
const landingScreens: Screen[] = [
[
  "hero",
  [
    "Главный экран",
    "Hero section",
    "Экрани асосӣ"
  ],
  [
    "Первый экран kontakio.com с позиционированием ИИ-платформы для общения с клиентами.|Предложение\n\nЗаголовок «ИИ-платформа для общения с клиентами» дополняет подзаголовок об онлайн-чате, Telegram, CRM и ИИ в одном окне. Плашка над ним сообщает, что ИИ-оператор отвечает клиентам 24/7.|Входящие\n\nСправа показан макет входящих обращений с сайта и из Telegram, включая заявку на обратный звонок. В открытом диалоге оператор отвечает на вопрос о доставке в Худжанд.|Ключевые показатели\n\nКнопки «Начать бесплатно» и «Попробовать виджет» сопровождают отметки о 7 бесплатных днях, работе без банковской карты и установке за 5 минут. Ниже указаны 1 строка кода, 8 языков виджета и ответы 24/7 прямо из Telegram.",
    "The first screen of kontakio.com presenting an AI platform for customer communication.|Proposition\n\nThe headline \"AI platform for customer communication\" is supported by a subtitle about website chat, Telegram, CRM and AI in one window. A badge above it announces that the AI operator answers clients 24/7.|Inbox\n\nOn the right, an inbox mockup shows requests from the website and Telegram, including a callback request. In the open conversation, the operator answers a question about delivery to Khujand.|Key figures\n\nThe Start for free and Try the widget buttons are accompanied by notes on 7 free days, no bank card and setup in 5 minutes. Below are one line of code, 8 widget languages and 24/7 replies straight from Telegram.",
    "Экрани аввали kontakio.com бо муаррифии платформаи зеҳни сунъӣ барои муошират бо мизоҷон.|Пешниҳод\n\nСарлавҳаи «Платформаи зеҳни сунъӣ барои муошират бо мизоҷон»-ро зерсарлавҳа дар бораи чати онлайн, Telegram, CRM ва зеҳни сунъӣ дар як равзана пурра мекунад. Нишони болои он хабар медиҳад, ки оператори зеҳни сунъӣ ба мизоҷон 24/7 ҷавоб медиҳад.|Муроҷиатҳо\n\nДар тарафи рост намунаи муроҷиатҳои воридотӣ аз сомона ва Telegram, аз ҷумла дархости занги баргашт нишон дода шудааст. Дар суҳбати кушода оператор ба саволи расонидан ба Хуҷанд ҷавоб медиҳад.|Нишондиҳандаҳо\n\nТугмаҳои «Ройгон оғоз кунед» ва «Виҷетро санҷед» бо қайдҳо дар бораи 7 рӯзи ройгон, бе корти бонкӣ ва насб дар 5 дақиқа ҳамроҳ мешаванд. Дар поён 1 сатри код, 8 забони виҷет ва ҷавобҳои 24/7 бевосита аз Telegram оварда шудаанд."
  ]
],
[
  "showcase",
  [
    "Кабинет оператора",
    "Operator workspace",
    "Кабинети оператор"
  ],
  [
    "Демонстрация рабочего кабинета оператора на сайте Kontakio.|Вкладки\n\nРаздел «Удобно оператору, понятно клиенту» переключается между кабинетом оператора, виджетом на сайте и настройкой виджета. На снимке активна вкладка кабинета.|Диалог\n\nСписок разделён на входящие, мои и закрытые диалоги. В переписке клиентка Анна уточняет доставку по Таджикистану и оплату картой или через Alif.|Карточка клиента\n\nСправа выводятся имя, телефон и электронная почта клиента. В шапке диалога доступны действия «Спам», «Передать», «Выйти из диалога» и «Завершить».",
    "A demonstration of the operator workspace on the Kontakio website.|Tabs\n\nThe \"Convenient for operators, clear for clients\" section switches between the operator workspace, the website widget and widget settings. The workspace tab is active in the screenshot.|Conversation\n\nThe list is split into incoming, my and closed conversations. In the thread, the client Anna asks about delivery across Tajikistan and paying by card or via Alif.|Client card\n\nThe client's name, phone and email are shown on the right. The conversation header offers Spam, Transfer, Leave conversation and Close actions.",
    "Намоиши кабинети кории оператор дар сомонаи Kontakio.|Ҷадвалҳо\n\nБахши «Барои оператор қулай, барои мизоҷ фаҳмо» байни кабинети оператор, виҷет дар сомона ва танзими виҷет иваз мешавад. Дар акс ҷадвали кабинет фаъол аст.|Суҳбат\n\nРӯйхат ба суҳбатҳои воридотӣ, суҳбатҳои ман ва пӯшида тақсим шудааст. Дар мукотиба мизоҷ Анна дар бораи расонидан дар саросари Тоҷикистон ва пардохт бо корт ё тавассути Alif мепурсад.|Корти мизоҷ\n\nДар тарафи рост ном, телефон ва почтаи электронии мизоҷ нишон дода мешаванд. Дар сарлавҳаи суҳбат амалҳои «Спам», «Супоридан», «Баромадан аз суҳбат» ва «Анҷом додан» дастрасанд."
  ]
],
[
  "features",
  [
    "Возможности платформы",
    "Platform features",
    "Имкониятҳои платформа"
  ],
  [
    "Блок о том, как Kontakio объединяет чат, мессенджеры, заявки и клиентскую базу.|Единый список\n\nСообщения с сайта, из Telegram и заявки на звонок приходят в одно окно. Операторы видят историю клиента и отвечают в пару кликов.|Telegram-бот\n\nБот из @BotFather подключается за минуту, после чего клиенты пишут в Telegram. Ответы отправляются из Kontakio текстом, фото и голосовыми.|Ответы с телефона\n\nУведомления о новых и неотвеченных чатах приходят в Telegram. Ответить клиенту можно прямо оттуда.",
    "A section showing how Kontakio brings chat, messengers, requests and the client base together.|Single list\n\nWebsite messages, Telegram messages and call requests arrive in one window. Operators see the client's history and reply in a couple of clicks.|Telegram bot\n\nA bot from @BotFather connects in a minute, after which clients write in Telegram. Replies are sent from Kontakio as text, photos and voice messages.|Replies from phone\n\nNotifications about new and unanswered chats arrive in Telegram. The client can be answered right from there.",
    "Бахш дар бораи он, ки Kontakio чат, мессенҷерҳо, дархостҳо ва пойгоҳи мизоҷонро муттаҳид мекунад.|Рӯйхати ягона\n\nПаёмҳо аз сомона, аз Telegram ва дархостҳои занг ба як равзана меоянд. Операторон таърихи мизоҷро мебинанд ва бо ду-се клик ҷавоб медиҳанд.|Боти Telegram\n\nБот аз @BotFather дар як дақиқа пайваст мешавад ва мизоҷон дар Telegram менависанд. Ҷавобҳо аз Kontakio бо матн, акс ва паёмҳои овозӣ фиристода мешаванд.|Ҷавоб аз телефон\n\nОгоҳиномаҳо дар бораи чатҳои нав ва беҷавоб ба Telegram меоянд. Ба мизоҷ бевосита аз он ҷо ҷавоб додан мумкин аст."
  ]
],
[
  "features-2",
  [
    "Инструменты оператора",
    "Operator tools",
    "Абзорҳои оператор"
  ],
  [
    "Карточки с инструментами для распределения чатов, звонков, CRM и общения на разных языках.|Распределение и звонки\n\nНовый диалог получает свободный оператор с наименьшей нагрузкой, а передача коллеге выполняется в один клик. Для обратного звонка показан таймер, чтобы перезвонить вовремя.|CRM и шаблоны\n\nКлиенты, сделки и задачи находятся рядом с перепиской, со своими воронками и этапами. Шаблоны вроде /hello, /price и /delivery ускоряют ответы на частые вопросы.|Языки и файлы\n\nВиджет на 8 языках сам определяет язык страницы и браузера и поддерживает письмо справа налево. Фото, документы, голосовые и видео до 10 МБ передаются в обе стороны.",
    "Cards with tools for chat routing, callbacks, CRM and multilingual communication.|Routing and callbacks\n\nA new conversation goes to the free operator with the lowest load, and hand-off to a colleague takes one click. A timer on the callback card helps operators call back on time.|CRM and templates\n\nClients, deals and tasks sit next to the conversation, with custom pipelines and stages. Templates such as /hello, /price and /delivery speed up answers to frequent questions.|Languages and files\n\nThe widget in 8 languages detects the page and browser language and supports right-to-left text. Photos, documents, voice messages and videos up to 10 MB are exchanged both ways.",
    "Кортҳо бо абзорҳо барои тақсими чатҳо, занги баргашт, CRM ва муошират бо забонҳои гуногун.|Тақсимот ва зангҳо\n\nСуҳбати навро оператори озод бо камтарин сарбории кор мегирад ва супоридан ба ҳамкор бо як клик анҷом мешавад. Барои занги баргашт таймер нишон дода мешавад, то сари вақт занг зананд.|CRM ва қолибҳо\n\nМизоҷон, аҳдҳо ва вазифаҳо дар паҳлӯи мукотиба бо воронкаҳо ва марҳилаҳои худ ҷойгиранд. Қолибҳо монанди /hello, /price ва /delivery ҷавоб ба саволҳои маъмулро тезонида мекунанд.|Забонҳо ва файлҳо\n\nВиҷет бо 8 забон забони саҳифа ва браузерро худ муайян мекунад ва навиштан аз рост ба чапро дастгирӣ менамояд. Аксҳо, ҳуҷҷатҳо, паёмҳои овозӣ ва видео то 10 МБ ба ҳар ду тараф фиристода мешаванд."
  ]
],
[
  "features-3",
  [
    "Командная работа",
    "Teamwork",
    "Кори дастаҷамъӣ"
  ],
  [
    "Возможности для общения внутри команды и работы с карточкой клиента рядом с чатом.|Чат команды\n\nГруппы и личная переписка сотрудников работают прямо в кабинете, коллег приглашают ссылкой или по почте. В примере показаны группы «Работа», «Кофе-брейк» и «Продажи».|Карточка клиента\n\nСтатус, теги, заметки, сделка или задача добавляются в один клик рядом с чатом. Видно, с какой страницы и по какой рекламе пришёл посетитель.|Как в мессенджере\n\nГолосовые и видеокружки клиентов воспроизводятся во встроенном плеере. Доступны ответы с цитатой, реакции, правка текста в течение 15 минут и удаление «у всех».",
    "Features for internal team communication and a client card next to the chat.|Team chat\n\nGroups and private staff messages work right inside the account, and colleagues are invited by link or email. The example shows the Work, Coffee break and Sales groups.|Client card\n\nStatus, tags, notes, a deal or a task are added in one click next to the chat. It also shows which page and which ad the visitor came from.|Messenger-style\n\nClients' voice messages and video notes play in a built-in player. Quoted replies, reactions, editing within 15 minutes and deleting for everyone are available.",
    "Имкониятҳо барои муоширати дохили даста ва корти мизоҷ дар паҳлӯи чат.|Чати даста\n\nГурӯҳҳо ва мукотибаи шахсии кормандон бевосита дар кабинет кор мекунанд ва ҳамкоронро бо истинод ё почта даъват мекунанд. Дар намуна гурӯҳҳои «Кор», «Танаффуси қаҳва» ва «Фурӯш» нишон дода шудаанд.|Корти мизоҷ\n\nҲолат, тегҳо, қайдҳо, аҳд ё вазифа бо як клик дар паҳлӯи чат илова мешаванд. Аён аст, ки меҳмон аз кадом саҳифа ва тавассути кадом реклама омадааст.|Мисли мессенҷер\n\nПаёмҳои овозӣ ва видеоҳои мудаввари мизоҷон дар плеери дарунсохт пахш мешаванд. Ҷавоб бо иқтибос, вокунишҳо, таҳрири матн дар давоми 15 дақиқа ва нест кардан «барои ҳама» дастрасанд."
  ]
],
[
  "features-4",
  [
    "Заметки, SMS и профиль",
    "Notes, SMS and profile",
    "Қайдҳо, SMS ва профил"
  ],
  [
    "Внутренние комментарии, SMS через ZudSMS, профиль оператора и защита данных.|Комментарии и SMS\n\nЗаметки для коллег остаются в диалоге и не видны клиенту ни на сайте, ни в Telegram. Через подключённый аккаунт ZudSMS SMS отправляется на телефон клиента прямо из чата и остаётся в истории.|Профиль оператора\n\nСотрудник сам меняет фото, имя и должность, которые видит клиент. Личная статистика показывает диалоги в работе, за сегодня и за неделю.|Данные под контролем\n\nОтдельная карточка перечисляет HTTPS, разграничение доступа, выгрузку и удаление данных аккаунта по запросу. Рядом размещены отметки HTTPS и GDPR.",
    "Internal comments, SMS via ZudSMS, the operator profile and data protection.|Comments and SMS\n\nNotes for colleagues stay in the conversation and are hidden from the client on both the website and Telegram. With a connected ZudSMS account, an SMS is sent to the client's phone right from the chat and stays in the history.|Operator profile\n\nEach employee updates the photo, name and job title that clients see. Personal statistics show conversations in progress, today and this week.|Data under control\n\nA separate card lists HTTPS, access separation, and export and deletion of account data on request. HTTPS and GDPR badges sit alongside.",
    "Шарҳҳои дохилӣ, SMS тавассути ZudSMS, профили оператор ва ҳифзи маълумот.|Шарҳҳо ва SMS\n\nҚайдҳо барои ҳамкорон дар суҳбат мемонанд ва ба мизоҷ на дар сомона ва на дар Telegram намоён нестанд. Тавассути ҳисоби пайвастшудаи ZudSMS паёмак бевосита аз чат ба телефони мизоҷ фиристода шуда, дар таърих боқӣ мемонад.|Профили оператор\n\nҲар корманд акс, ном ва вазифаи худро, ки мизоҷ мебинад, худаш иваз мекунад. Омори шахсӣ суҳбатҳои ҷорӣ, имрӯза ва ҳафтаинаро нишон медиҳад.|Назорати маълумот\n\nКорти алоҳида HTTPS, тақсими дастрасӣ, содирот ва нест кардани маълумоти ҳисобро бо дархост номбар мекунад. Дар паҳлӯ нишонҳои HTTPS ва GDPR ҷойгиранд."
  ]
],
[
  "channels",
  [
    "Каналы связи",
    "Communication channels",
    "Каналҳои алоқа"
  ],
  [
    "Страница каналов общения, которые подключаются в кабинете Kontakio за пару минут.|Доступные каналы\n\nДоступны чат на сайте, Telegram-бот, уведомления в Telegram и email-уведомления. Виджет ставится на любой сайт одной строкой кода и включает чат, обратный звонок и файлы.|SMS и ИИ\n\nSMS отправляются клиентам на номера +992 через аккаунт ZudSMS. ИИ-оператор отвечает по базе знаний, передаёт сложные вопросы оператору и помогает команде писать ответы.|Скоро\n\nWhatsApp Business и Instagram Direct отмечены как скоро доступные. Сообщения из них будут собираться в едином окне Kontakio вместе с остальными.",
    "The page of communication channels that connect in the Kontakio account in a couple of minutes.|Available channels\n\nWebsite chat, a Telegram bot, Telegram notifications and email notifications are available. The widget is added to any website with one line of code and includes chat, callback and files.|SMS and AI\n\nSMS messages reach clients on +992 numbers via a ZudSMS account. The AI operator answers from the knowledge base, hands complex questions to an operator and helps the team write replies.|Coming soon\n\nWhatsApp Business and Instagram Direct are marked as coming soon. Their messages will arrive in the single Kontakio window alongside the rest.",
    "Саҳифаи каналҳои муошират, ки дар кабинети Kontakio дар ду-се дақиқа пайваст мешаванд.|Каналҳои дастрас\n\nЧат дар сомона, боти Telegram, огоҳиномаҳо дар Telegram ва огоҳиномаҳои email дастрасанд. Виҷет ба ҳар сомона бо як сатри код насб мешавад ва чат, занги баргашт ва файлҳоро дар бар мегирад.|SMS ва зеҳни сунъӣ\n\nПаёмакҳо ба рақамҳои +992 тавассути ҳисоби ZudSMS фиристода мешаванд. Оператори зеҳни сунъӣ аз рӯи пойгоҳи дониш ҷавоб медиҳад, саволҳои мураккабро ба оператор месупорад ва ба даста дар навиштани ҷавобҳо кӯмак мекунад.|Ба наздикӣ\n\nWhatsApp Business ва Instagram Direct ҳамчун каналҳои ба наздикӣ дастрас ишора шудаанд. Паёмҳо аз онҳо дар равзанаи ягонаи Kontakio ҳамроҳи дигарон ҷамъ мешаванд."
  ]
],
[
  "ai-operator",
  [
    "ИИ-оператор",
    "AI operator",
    "Оператори зеҳни сунъӣ"
  ],
  [
    "Страница ИИ-оператора, который отвечает клиентам на сайте и в Telegram за секунды.|Пример диалога\n\nНа вопрос о доставке в Худжанд ИИ-оператор называет стоимость, срок и оплату через SmartPay или Алиф. Когда клиент хочет оптовый договор, диалог передаётся оператору с кратким резюме и тегами.|База знаний\n\nБаза знаний собирается из сайта за 2 минуты и дополняется документами PDF, Word, Excel и готовыми ответами. Если ответа нет, ИИ ищет его на доверенных сайтах и учится на ответах операторов.|Работа с CRM\n\nИИ-оператор не тратит ответы на рекламу и бессмыслицу и после диалога присваивает клиенту теги. Найденные в переписке телефон и email он вносит в карточку клиента.",
    "The AI operator page: answers clients on the website and in Telegram within seconds.|Sample dialogue\n\nAsked about delivery to Khujand, the AI operator gives the price, timing and payment via SmartPay or Alif. When the client wants a wholesale contract, the conversation goes to an operator with a short summary and tags.|Knowledge base\n\nThe knowledge base is built from the website in 2 minutes and extended with PDF, Word and Excel documents and ready answers. If no answer is found, the AI searches trusted websites and learns from operators' replies.|CRM work\n\nThe AI operator does not spend replies on spam or nonsense and tags the client after the conversation. Phone numbers and emails found in the chat are added to the client card.",
    "Саҳифаи оператори зеҳни сунъӣ, ки ба мизоҷон дар сомона ва Telegram дар чанд сония ҷавоб медиҳад.|Намунаи суҳбат\n\nБа саволи расонидан ба Хуҷанд оператори зеҳни сунъӣ нарх, мӯҳлат ва пардохт тавассути SmartPay ё Алифро мегӯяд. Вақте мизоҷ шартномаи яклухт мехоҳад, суҳбат бо хулосаи мухтасар ва тегҳо ба оператор супорида мешавад.|Пойгоҳи дониш\n\nПойгоҳи дониш дар 2 дақиқа аз сомона ҷамъ мешавад ва бо ҳуҷҷатҳои PDF, Word, Excel ва ҷавобҳои тайёр пурра мегардад. Агар ҷавоб набошад, зеҳни сунъӣ онро дар сомонаҳои боэътимод меҷӯяд ва аз ҷавобҳои операторон меомӯзад.|Кор бо CRM\n\nОператори зеҳни сунъӣ ҷавобҳоро ба реклама ва паёмҳои бемаъно сарф намекунад ва пас аз суҳбат ба мизоҷ тег мегузорад. Телефон ва email-и дар мукотиба ёфтаро ӯ ба корти мизоҷ ворид мекунад."
  ]
],
[
  "ai-addon",
  [
    "ИИ-пакет",
    "AI add-on",
    "Бастаи зеҳни сунъӣ"
  ],
  [
    "Дополнительный пакет Kontakio с ИИ-оператором и ИИ-ассистентом для команды.|Условия\n\nПакет подключается к любому платному тарифу и уже входит в «Профессиональный». Он активируется в кабинете за минуту с оплатой с баланса.|Помощь оператору\n\nИИ пишет черновик ответа по переписке и сведениям о компании, а оператор проверяет его и отправляет. Он также проверяет грамматику, перефразирует и делает ответ дружелюбнее или формальнее.|Перевод и отчёты\n\nСообщения клиента переводятся на язык оператора, а ответ — на язык клиента, включая узбекский, таджикский и арабский. Резюме диалогов и отчёт по чатам показывают частые вопросы, спорные ситуации и спрос.",
    "A Kontakio add-on bundling the AI operator and the AI assistant for the team.|Terms\n\nThe add-on works with any paid plan and is already included in the Professional plan. It is enabled in the account in a minute and paid from the balance.|Operator assistance\n\nThe AI drafts a reply from the conversation and company details, and the operator reviews and sends it. It also checks grammar, rephrases and makes a reply friendlier or more formal.|Translation and reports\n\nClient messages are translated into the operator's language and replies into the client's, including Uzbek, Tajik and Arabic. Conversation summaries and a chat report highlight frequent questions, disputes and demand.",
    "Бастаи иловагии Kontakio бо оператори зеҳни сунъӣ ва ёрдамчии зеҳни сунъӣ барои даста.|Шартҳо\n\nБаста ба ҳар тарофаи пулакӣ пайваст мешавад ва ба тарофаи «Касбӣ» аллакай дохил аст. Он дар кабинет дар як дақиқа фаъол мегардад ва аз баланс пардохт мешавад.|Кӯмак ба оператор\n\nЗеҳни сунъӣ аз рӯи мукотиба ва маълумоти ширкат лоиҳаи ҷавоб менависад, оператор онро месанҷад ва мефиристад. Он инчунин грамматикаро месанҷад, матнро бо ибораҳои дигар менависад ва ҷавобро самимӣ ё расмӣ мекунад.|Тарҷума ва ҳисобот\n\nПаёмҳои мизоҷ ба забони оператор ва ҷавоб ба забони мизоҷ, аз ҷумла ӯзбекӣ, тоҷикӣ ва арабӣ, тарҷума мешаванд. Хулосаи суҳбатҳо ва ҳисобот оид ба чатҳо саволҳои маъмул, ҳолатҳои баҳсбарангез ва талаботро нишон медиҳанд."
  ]
],
[
  "how-it-works",
  [
    "Запуск за три шага",
    "Three-step launch",
    "Оғоз дар се қадам"
  ],
  [
    "Блок с тремя шагами запуска Kontakio без программистов и сложных настроек.|Регистрация\n\nАккаунт создаётся с 7 днями полного доступа бесплатно, банковская карта не нужна. Это первый из трёх пронумерованных шагов.|Код на сайт\n\nОдна строка вставляется перед </body> и работает с WordPress, Tilda, Bitrix, Shopify и любым сайтом. Ниже показан фрагмент index.html со скриптом виджета и кнопкой «Копировать».|Ответы клиентам\n\nДиалоги появляются в кабинете и в Telegram. Коллег можно пригласить и распределять между ними чаты.",
    "A section with three steps to launch Kontakio without developers or complex setup.|Sign-up\n\nAn account is created with 7 days of full access for free, and no bank card is needed. This is the first of three numbered steps.|Code on the site\n\nOne line is inserted before </body> and works with WordPress, Tilda, Bitrix, Shopify and any website. Below is an index.html snippet with the widget script and a Copy button.|Replying to clients\n\nConversations appear in the account and in Telegram. Colleagues can be invited and chats distributed among them.",
    "Бахш бо се қадами оғози Kontakio бе барномасозон ва танзимоти мураккаб.|Бақайдгирӣ\n\nҲисоб бо 7 рӯзи дастрасии пурра ройгон сохта мешавад ва корти бонкӣ лозим нест. Ин аввалин аз се қадами рақамгузоришуда аст.|Код дар сомона\n\nЯк сатр пеш аз </body> гузошта мешавад ва бо WordPress, Tilda, Bitrix, Shopify ва ҳар сомона кор мекунад. Дар поён порчаи index.html бо скрипти виҷет ва тугмаи «Нусхабардорӣ» нишон дода шудааст.|Ҷавоб ба мизоҷон\n\nСуҳбатҳо дар кабинет ва дар Telegram пайдо мешаванд. Ҳамкоронро даъват кардан ва чатҳоро байни онҳо тақсим кардан мумкин аст."
  ]
],
[
  "widget-playground",
  [
    "Настройка виджета",
    "Widget playground",
    "Танзими виҷет"
  ],
  [
    "Интерактивный блок, где посетитель подбирает вид виджета Kontakio под свой бренд.|Цвет и сторона\n\nДоступны шесть готовых цветов и кнопка для собственного оттенка. Переключатель «Слева» и «Справа» задаёт, в каком углу экрана появится чат.|Язык виджета\n\nВиджет показывается на одном из восьми языков: английском, русском, таджикском, узбекском, казахском, кыргызском, персидском или арабском. Выбранный язык выделен тёмной кнопкой.|Живой предпросмотр\n\nСправа в макете браузера your-store.com открыт зелёный виджет со статусом «Онлайн», приветствием и полем ввода. Кнопка «Настроить свой виджет» ведёт к собственной настройке без программиста.",
    "An interactive block where visitors adapt the look of the Kontakio widget to their brand.|Colour and side\n\nSix preset colours are offered alongside a button for a custom shade. A Left and Right switch sets the corner of the screen where the chat appears.|Widget language\n\nThe widget can be shown in one of eight languages: English, Russian, Tajik, Uzbek, Kazakh, Kyrgyz, Persian or Arabic. The selected language is highlighted with a dark button.|Live preview\n\nOn the right, a your-store.com browser mockup shows the open green widget with an Online status, a greeting and an input field. The Customise your widget button leads to setting up a personal widget without a developer.",
    "Блоки интерактивӣ, ки дар он намуди виҷети Kontakio ба бренди сомона мувофиқ интихоб мешавад.|Ранг ва ҷойгиршавӣ\n\nШаш ранги тайёр ва тугма барои ранги дилхоҳ пешниҳод шудаанд. Гузаргоҳи «Чап» ва «Рост» гӯшаи экранро, ки чат дар он пайдо мешавад, муайян мекунад.|Забони виҷет\n\nВиҷет метавонад бо яке аз ҳашт забон намоиш дода шавад: англисӣ, русӣ, тоҷикӣ, ӯзбекӣ, қазоқӣ, қирғизӣ, форсӣ ё арабӣ. Забони интихобшуда бо тугмаи торик ҷудо карда мешавад.|Пешнамоиши зинда\n\nДар рост дар макети браузери your-store.com виҷети сабз бо ҳолати «Онлайн», саломомадгӯӣ ва майдони паём кушода аст. Тугмаи «Танзими виҷети худ» ба танзими шахсӣ бе барномасоз мебарад."
  ]
],
[
  "mobile-app",
  [
    "Мобильное приложение",
    "Mobile app",
    "Барномаи мобилӣ"
  ],
  [
    "Страница мобильного приложения Kontakio, через которое операторы отвечают клиентам с телефона.|Назначение\n\nПриложение объединяет диалоги с сайта и Telegram, push-уведомления, карточку клиента и чат команды. Оно подключается к тому же аккаунту, что и веб-кабинет.|Список входящих\n\nПервый телефон показывает раздел «Входящие» с переключателем статуса «в сети» и обращениями Фарангис, Алексея, Мадины и Тимура. Внизу расположены вкладки «Входящие», «Мои», «Команда», «Архив» и «Ещё».|Диалог и заметка\n\nНа втором экране открыт диалог с Фарангис: вопрос о доставке в Худжанд и ответ оператора. Жёлтая внутренняя заметка напоминает о скидке для постоянного клиента, а значки обозначают скорый выход в App Store и Google Play.",
    "The page of the Kontakio mobile app, which lets operators reply to clients from their phone.|Purpose\n\nThe app brings together website and Telegram conversations, push notifications, the client card and team chat. It connects to the same account as the web dashboard.|Inbox list\n\nThe first phone shows the Inbox with an online status toggle and requests from Farangis, Aleksey, Madina and Timur. Tabs for Inbox, Mine, Team, Archive and More sit at the bottom.|Conversation and note\n\nThe second screen shows a conversation with Farangis about delivery to Khujand and the operator's reply. A yellow internal note mentions a discount for a regular client, while badges announce the upcoming App Store and Google Play releases.",
    "Саҳифаи барномаи мобилии Kontakio, ки операторон тавассути он ба мизоҷон аз телефон ҷавоб медиҳанд.|Мақсад\n\nБарнома суҳбатҳои сомона ва Telegram, огоҳиномаҳои push, корти мизоҷ ва чати дастаро муттаҳид мекунад. Он ба ҳамон ҳисобе пайваст мешавад, ки кабинети веб истифода мебарад.|Рӯйхати воридотӣ\n\nТелефони аввал бахши «Воридотӣ»-ро бо гузаргоҳи ҳолати «дар шабака» ва муроҷиатҳои Фарангис, Алексей, Мадина ва Тимур нишон медиҳад. Дар поён ҷадвалҳои «Воридотӣ», «Аз ман», «Даста», «Бойгонӣ» ва «Боз» ҷойгиранд.|Суҳбат ва қайд\n\nДар экрани дуюм суҳбат бо Фарангис дар бораи расонидан ба Хуҷанд ва ҷавоби оператор кушода аст. Қайди дохилии зард дар бораи тахфиф барои мизоҷи доимӣ хотиррасон мекунад ва нишонаҳо баромади наздики App Store ва Google Play-ро эълон мекунанд."
  ]
],
[
  "mobile-app-features",
  [
    "Возможности приложения",
    "App features",
    "Имкониятҳои барнома"
  ],
  [
    "Шесть карточек с ключевыми возможностями мобильного приложения Kontakio для оператора.|Уведомления и диалоги\n\nТелефон сообщает о новом сообщении, переданном диалоге и письме коллеги в чате команды, даже когда приложение закрыто. Входящие, мои и архив собраны в одном списке, где сайт и Telegram идут рядом.|Работа с обращением\n\nДиалог принимается одним касанием, передаётся коллеге, отмечается как спам или возобновляется. Карточка клиента показывает имя, телефон, email, страницу сайта и источник визита, а позвонить или написать можно прямо из неё.|Команда и синхронизация\n\nЧат команды позволяет общаться в общих группах и лично без сторонних мессенджеров. Вход с телефона не завершает сеанс в кабинете на компьютере, а сообщения и статусы синхронизируются мгновенно.",
    "Six cards presenting the key features of the Kontakio mobile app for operators.|Alerts and conversations\n\nThe phone reports a new message, a transferred conversation or a colleague's message in team chat, even when the app is closed. Incoming, personal and archived conversations share one list, with website and Telegram side by side.|Handling requests\n\nA conversation can be accepted with one tap, passed to a colleague, marked as spam or reopened. The client card shows the name, phone, email, website page and visit source, with calling or messaging available directly from it.|Team and sync\n\nTeam chat supports group and private messaging without third-party messengers. Signing in on the phone does not end the session on the computer, and messages and statuses sync instantly.",
    "Шаш корт бо имкониятҳои асосии барномаи мобилии Kontakio барои оператор.|Огоҳиномаҳо ва суҳбатҳо\n\nТелефон дар бораи паёми нав, суҳбати супоридашуда ва паёми ҳамкор дар чати даста хабар медиҳад, ҳатто агар барнома баста бошад. Суҳбатҳои воридотӣ, шахсӣ ва бойгонӣ дар як рӯйхат ҷамъ омада, сомона ва Telegram паҳлӯи ҳам меоянд.|Кор бо муроҷиат\n\nСуҳбат бо як ламс қабул, ба ҳамкор супорида, ҳамчун спам қайд ё аз нав кушода мешавад. Корти мизоҷ ному насаб, телефон, email, саҳифаи сомона ва манбаи ташрифро нишон медиҳад ва аз он бевосита занг задан ё навиштан мумкин аст.|Даста ва ҳамоҳангсозӣ\n\nЧати даста имкон медиҳад, ки дар гурӯҳҳои умумӣ ва шахсан бе мессенҷерҳои беруна муошират карда шавад. Воридшавӣ аз телефон ҷаласаро дар кабинети компютер қатъ намекунад ва паёмҳову ҳолатҳо фавран ҳамоҳанг мешаванд."
  ]
],
[
  "mobile-app-screens",
  [
    "Экраны приложения",
    "App screens",
    "Экранҳои барнома"
  ],
  [
    "Три экрана мобильного приложения Kontakio: уведомления, входящие и диалог.|Интерфейс\n\nПодзаголовок перечисляет шаблоны ответов, фото и файлы, ИИ-подсказки, поиск по сообщениям и статус «в сети». Приложение рассчитано на iPhone и Android.|Уведомления\n\nНа экране блокировки показаны уведомления Kontakio от Фарангис и Алексея с текстом их сообщений. Новое обращение видно ещё до открытия приложения.|Входящие и диалог\n\nСредний экран содержит список входящих с отметками непрочитанных и значками Telegram. Правый экран показывает переписку с Фарангис, ответ оператора и внутреннюю заметку о постоянном клиенте.",
    "Three screens of the Kontakio mobile app: notifications, inbox and conversation.|Interface\n\nThe subtitle lists reply templates, photos and files, AI hints, message search and an online status. The app is designed for iPhone and Android.|Notifications\n\nThe lock screen shows Kontakio notifications from Farangis and Aleksey with the text of their messages. A new request is visible before the app is even opened.|Inbox and conversation\n\nThe middle screen contains the inbox with unread counters and Telegram badges. The right screen shows the chat with Farangis, the operator's reply and an internal note about a regular client.",
    "Се экрани барномаи мобилии Kontakio: огоҳиномаҳо, воридотӣ ва суҳбат.|Интерфейс\n\nЗерсарлавҳа қолабҳои ҷавоб, акс ва файлҳо, маслиҳатҳои зеҳни сунъӣ, ҷустуҷӯ дар паёмҳо ва ҳолати «дар шабака»-ро номбар мекунад. Барнома барои iPhone ва Android пешбинӣ шудааст.|Огоҳиномаҳо\n\nДар экрани қулф огоҳиномаҳои Kontakio аз Фарангис ва Алексей бо матни паёмҳояшон намоиш дода шудаанд. Муроҷиати нав ҳанӯз пеш аз кушодани барнома намоён аст.|Воридотӣ ва суҳбат\n\nЭкрани миёна рӯйхати воридотиро бо шумораи паёмҳои хонданашуда ва нишонаҳои Telegram дар бар мегирад. Экрани рост мукотиба бо Фарангис, ҷавоби оператор ва қайди дохилиро дар бораи мизоҷи доимӣ нишон медиҳад."
  ]
],
[
  "pricing",
  [
    "Тарифы",
    "Pricing plans",
    "Тарофаҳо"
  ],
  [
    "Раздел тарифов Kontakio с тремя планами и оплатой только за операторов.|Начальная\n\nБесплатный план на 7 дней включает чат на сайте и Telegram-бот, обратный звонок, уведомления в Telegram и на email, карточку клиента и историю диалогов за месяц. Возможности старших тарифов в нём перечёркнуты.|Базовая\n\nПопулярный план за 590 смн в месяц за оператора добавляет команду и чат команды, шаблоны ответов, CRM с клиентами, сделками и задачами. Также доступны файлы и фото в чате, полная статистика и история за год.|Профессиональная\n\nПлан за 920 смн в месяц за оператора с первыми 14 днями бесплатно добавляет голосовые и видеокружки, комментарии для команды и SMS через ZudSMS. В него входят ИИ-оператор и ИИ-ассистент, сопровождение проекта 24/7 и неограниченная история.",
    "The Kontakio pricing section with three plans and payment only for operators.|Starter\n\nThe free 7-day plan includes website chat and a Telegram bot, callback requests, Telegram and email notifications, the client card and one month of history. Features of the higher plans are crossed out.|Basic\n\nThe popular plan at 590 somoni per operator per month adds a team and team chat, reply templates, and a CRM with clients, deals and tasks. Files and photos in chat, full statistics and a year of history are also included.|Professional\n\nThe plan at 920 somoni per operator per month, with the first 14 days free, adds voice and video notes, team comments and SMS via ZudSMS. It includes the AI operator and AI assistant, 24/7 project support and unlimited history.",
    "Бахши тарофаҳои Kontakio бо се нақша ва пардохт танҳо барои операторон.|Ибтидоӣ\n\nНақшаи ройгони 7-рӯза чат дар сомона ва Telegram-бот, занги баргашт, огоҳиномаҳо ба Telegram ва email, корти мизоҷ ва таърихи як моҳаи суҳбатҳоро дар бар мегирад. Имкониятҳои тарофаҳои болоӣ дар он хат зада шудаанд.|Асосӣ\n\nНақшаи маъмул бо нархи 590 смн дар як моҳ барои ҳар оператор даста ва чати даста, қолабҳои ҷавоб ва CRM бо мизоҷон, аҳдҳо ва вазифаҳоро илова мекунад. Инчунин файлу акс дар чат, омори пурра ва таърихи яксола дастрас аст.|Касбӣ\n\nНақша бо нархи 920 смн дар як моҳ барои ҳар оператор ва 14 рӯзи аввали ройгон паёмҳои овозӣ ва видеоӣ, шарҳҳо барои даста ва SMS тавассути ZudSMS-ро илова мекунад. Ба он оператори ЗС ва ёрдамчии ЗС, дастгирии лоиҳа 24/7 ва таърихи бемаҳдуд дохил мешаванд."
  ]
],
[
  "pricing-cost",
  [
    "Калькулятор стоимости",
    "Cost calculator",
    "Ҳисобкунаки арзиш"
  ],
  [
    "Калькулятор стоимости подписки для команды и блок способов оплаты Kontakio.|Параметры\n\nПользователь выбирает тариф «Базовая» за 590 смн или «Профессиональная» за 920 смн, число операторов кнопками или ползунком и период оплаты. Чем дольше срок, тем выше скидка: от 5% за три месяца до 40% за два года.|Итог\n\nДля трёх операторов на «Базовой» за год карточка показывает 15 930 смн вместо 21 240 смн и формулу 590 смн × 3 опер. × 12 мес. − 25%. Отдельно выведены цена за оператора в месяц 443 смн и экономия 5 310 смн, а кнопка «Начать бесплатно» запускает бесплатный период без карты.|Оплата\n\nНиже начинается раздел о пополнении баланса Kontakio в сомони, с которого списывается подписка. Доступны банковские карты через SmartPay, 13 банковских приложений, QR-код и оплата по номеру счёта.",
    "A team subscription cost calculator and the Kontakio payment methods block.|Parameters\n\nUsers choose the Basic plan at 590 somoni or Professional at 920 somoni, set the number of operators with buttons or a slider, and pick a billing period. Longer terms bring larger discounts, from 5% for three months to 40% for two years.|Total\n\nFor three operators on Basic for a year, the card shows 15,930 somoni instead of 21,240 somoni along with the formula 590 somoni × 3 operators × 12 months − 25%. The price per operator per month of 443 somoni and savings of 5,310 somoni are shown separately, and Start for free begins a trial without a card.|Payment\n\nBelow begins the section on topping up the Kontakio balance in somoni, from which the subscription is paid. Bank cards via SmartPay, 13 banking apps, a QR code and payment by account number are available.",
    "Ҳисобкунаки арзиши обуна барои даста ва блоки усулҳои пардохти Kontakio.|Параметрҳо\n\nКорбар тарофаи «Асосӣ» бо 590 смн ё «Касбӣ» бо 920 смн, шумораи операторонро бо тугмаҳо ё лағжонак ва давраи пардохтро интихоб мекунад. Ҳар қадар мӯҳлат дарозтар бошад, тахфиф ҳамон қадар зиёд аст: аз 5% барои се моҳ то 40% барои ду сол.|Ҷамъбаст\n\nБарои се оператор дар тарофаи «Асосӣ» ба муддати як сол корт 15 930 смн-ро ба ҷои 21 240 смн ва формулаи 590 смн × 3 оператор × 12 моҳ − 25%-ро нишон медиҳад. Нархи як оператор дар як моҳ 443 смн ва сарфаи 5 310 смн алоҳида оварда шудаанд ва тугмаи «Ройгон оғоз кунед» давраи ройгонро бе корти бонкӣ оғоз мекунад.|Пардохт\n\nДар поён бахши пур кардани тавозуни Kontakio бо сомонӣ оғоз мешавад, ки обуна аз он пардохт мегардад. Кортҳои бонкӣ тавассути SmartPay, 13 барномаи бонкӣ, рамзи QR ва пардохт аз рӯи рақами суратҳисоб дастрасанд."
  ]
],
[
  "calculator",
  [
    "Калькулятор заявок",
    "Lead calculator",
    "Ҳисобкунаки дархостҳо"
  ],
  [
    "Калькулятор, который показывает, сколько заявок и выручки сайт теряет без онлайн-чата.|Исходные данные\n\nЧетыре ползунка задают число посетителей в день, долю тех, кто напишет в чат, долю заявок, ставших продажей, и средний чек. В примере это 500 посетителей, 1%, 25% и 400 смн.|Результат\n\nСправа выводится дополнительная выручка +15 000 смн в месяц и +150 новых заявок в месяц. Цифры пересчитываются при изменении любого параметра.|Призыв к действию\n\nКнопка «Перестать терять заявки» ведёт к началу работы с Kontakio. Примечание уточняет, что расчёт ориентировочный, а в чат обычно пишут от 0,5 до 3% посетителей.",
    "A calculator showing how many leads and how much revenue a website loses without live chat.|Inputs\n\nFour sliders set daily visitors, the share who write in chat, the share of leads that become sales and the average order value. The example uses 500 visitors, 1%, 25% and 400 somoni.|Result\n\nThe right panel displays additional revenue of +15,000 somoni per month and +150 new leads per month. The figures update whenever any parameter changes.|Call to action\n\nThe Stop losing leads button leads to getting started with Kontakio. A note explains that the estimate is approximate and that 0.5 to 3% of visitors usually write in chat.",
    "Ҳисобкунаке, ки нишон медиҳад сомона бе чати онлайн чӣ қадар дархост ва даромадро аз даст медиҳад.|Маълумоти ибтидоӣ\n\nЧор лағжонак шумораи меҳмонон дар як рӯз, ҳиссаи онҳое, ки ба чат менависанд, ҳиссаи дархостҳои ба фурӯш табдилшуда ва чеки миёнаро муқаррар мекунанд. Дар мисол ин 500 меҳмон, 1%, 25% ва 400 смн аст.|Натиҷа\n\nДар рост даромади иловагии +15 000 смн дар як моҳ ва +150 дархости нав дар як моҳ нишон дода мешавад. Рақамҳо ҳангоми тағйири ҳар як параметр аз нав ҳисоб мешаванд.|Даъват ба амал\n\nТугмаи «Аз даст додани дархостҳоро бас кунед» ба оғози кор бо Kontakio мебарад. Эзоҳ қайд мекунад, ки ҳисоб тахминӣ аст ва одатан аз 0,5 то 3% меҳмонон ба чат менависанд."
  ]
],
[
  "faq",
  [
    "Вопросы и ответы",
    "FAQ",
    "Саволу ҷавоб"
  ],
  [
    "Раздел вопросов и ответов Kontakio с контактами поддержки и раскрывающимся списком.|Связь с поддержкой\n\nСлева размещены карточки телефона +992 901 000 535, почты support@kontakio.com и Telegram. Подпись сообщает, что ответы даются каждый день.|Что такое Kontakio\n\nПервый пункт раскрыт и объясняет, что сообщения с сайта, из Telegram и заявки на обратный звонок собираются в одном окне. Встроенная CRM хранит клиентов, сделки и задачи.|Частые вопросы\n\nОстальные пункты касаются ответов ИИ вместо оператора и их точности, установки чата на сайт и бесплатного периода. Также есть вопросы о подключении Telegram, работе с телефона, общении с коллегами, голосовых сообщениях и SMS.",
    "The Kontakio FAQ section with support contacts and an expandable list of questions.|Support contacts\n\nCards on the left show the phone number +992 901 000 535, the address support@kontakio.com and Telegram. A caption notes that replies are given every day.|What is Kontakio\n\nThe first item is expanded and explains that website messages, Telegram messages and callback requests are collected in one window. The built-in CRM stores clients, deals and tasks.|Common questions\n\nOther items cover AI replying instead of an operator and its accuracy, installing the chat on a website and the free trial. Questions about connecting Telegram, working from a phone, talking to colleagues, voice messages and SMS follow.",
    "Бахши саволу ҷавоби Kontakio бо тамосҳои дастгирӣ ва рӯйхати кушодашаванда.|Тамос бо дастгирӣ\n\nДар чап кортҳои телефони +992 901 000 535, почтаи support@kontakio.com ва Telegram ҷойгиранд. Тавзеҳ хабар медиҳад, ки ҷавобҳо ҳар рӯз дода мешаванд.|Kontakio чист\n\nБанди аввал кушода буда, мефаҳмонад, ки паёмҳо аз сомона, Telegram ва дархостҳои занги баргашт дар як равзана ҷамъ мешаванд. CRM-и дарунсохт мизоҷон, аҳдҳо ва вазифаҳоро нигоҳ медорад.|Саволҳои маъмул\n\nБандҳои дигар ба ҷавоби ЗС ба ҷои оператор ва дақиқии он, насби чат дар сомона ва давраи ройгон дахл доранд. Инчунин саволҳо дар бораи пайвасти Telegram, кор аз телефон, муошират бо ҳамкорон, паёмҳои овозӣ ва SMS ҳастанд."
  ]
],
[
  "final-cta",
  [
    "Финальный призыв",
    "Final call to action",
    "Даъвати ниҳоӣ"
  ],
  [
    "Заключительный блок лендинга Kontakio с призывом к регистрации и подвалом сайта.|Призыв\n\nТёмный блок с заголовком «Начните отвечать клиентам уже сегодня» окружён иконками Telegram, чата, WhatsApp и Instagram. Текст обещает регистрацию за минуту, установку за пять и первые 7 дней бесплатно.|Регистрация\n\nКнопка «Создать аккаунт бесплатно» ведёт к созданию аккаунта. Под ней указано, что банковская карта не нужна, а отменить можно в любой момент.|Подвал\n\nНиже расположены логотип Kontakio и описание сервиса как онлайн-чата для сайта, Telegram и CRM в одном окне. Колонки «Продукт», «Начать» и «Контакты» содержат ссылки на разделы, вход и регистрацию, телефон, почту и Telegram.",
    "The closing block of the Kontakio landing page with a sign-up call to action and the site footer.|Call to action\n\nA dark block headed Start replying to clients today is surrounded by Telegram, chat, WhatsApp and Instagram icons. The text promises sign-up in a minute, installation in five and the first 7 days free.|Sign-up\n\nThe Create a free account button leads to account creation. Beneath it, a note states that no bank card is needed and cancellation is possible at any time.|Footer\n\nBelow are the Kontakio logo and a description of the service as live chat for websites, Telegram and a CRM in one window. Product, Get started and Contacts columns link to sections, sign-in and sign-up, phone, email and Telegram.",
    "Блоки ниҳоии лендинги Kontakio бо даъват ба бақайдгирӣ ва поёни сомона.|Даъват\n\nБлоки торик бо сарлавҳаи «Аз имрӯз ба мизоҷон ҷавоб диҳед» бо нишонаҳои Telegram, чат, WhatsApp ва Instagram иҳота шудааст. Матн бақайдгирӣ дар як дақиқа, насб дар панҷ дақиқа ва 7 рӯзи аввали ройгонро ваъда медиҳад.|Бақайдгирӣ\n\nТугмаи «Ҳисобро ройгон созед» ба сохтани ҳисоб мебарад. Дар зери он қайд шудааст, ки корти бонкӣ лозим нест ва дар ҳар лаҳза бекор кардан мумкин аст.|Поёни сомона\n\nДар поён логотипи Kontakio ва тавсифи хидмат ҳамчун чати онлайн барои сомона, Telegram ва CRM дар як равзана ҷойгиранд. Сутунҳои «Маҳсулот», «Оғоз» ва «Тамос» ба бахшҳо, воридшавӣ ва бақайдгирӣ, телефон, почта ва Telegram пайванд доранд."
  ]
]
];

const accountScreens: Screen[] = [
[
  "login",
  [
    "Вход в кабинет",
    "Account sign-in",
    "Воридшавӣ ба кабинет"
  ],
  [
    "Страница входа в кабинет Kontakio по электронной почте и паролю.|Форма входа\n\nКарточка «С возвращением» содержит поля электронной почты и пароля. Значок глаза позволяет показать введённый пароль перед отправкой.|Доступ и регистрация\n\nСсылка «Забыли пароль?» ведёт к восстановлению доступа. Под зелёной кнопкой «Войти» расположена ссылка на бесплатное создание аккаунта.|Оформление\n\nВверху находятся логотип Kontakio и переключатель языка. Внизу собраны ссылки на условия использования, политику конфиденциальности и kontakio.com.",
    "The Kontakio sign-in page with email and password fields.|Sign-in form\n\nThe Welcome back card contains email and password fields. An eye icon reveals the typed password before submitting.|Access and sign-up\n\nA Forgot password link leads to access recovery. Below the green Sign in button sits a link to create a free account.|Layout\n\nThe Kontakio logo and a language switcher appear at the top. Links to the terms of use, privacy policy and kontakio.com are gathered at the bottom.",
    "Саҳифаи воридшавӣ ба кабинети Kontakio бо почтаи электронӣ ва парол.|Шакли воридшавӣ\n\nКорти «Хуш омадед» майдонҳои почтаи электронӣ ва паролро дорад. Нишонаи чашм имкон медиҳад, ки пароли воридшуда пеш аз ирсол намоён карда шавад.|Дастрасӣ ва бақайдгирӣ\n\nПайванди «Паролро фаромӯш кардед?» ба барқарорсозии дастрасӣ мебарад. Дар зери тугмаи сабзи «Ворид шудан» пайванди сохтани ройгони аккаунт ҷойгир аст.|Ороиш\n\nДар боло логотипи Kontakio ва интихобкунандаи забон ҷойгиранд. Дар поён пайвандҳо ба шартҳои истифода, сиёсати махфият ва kontakio.com ҷамъ омадаанд."
  ]
],
[
  "register",
  [
    "Регистрация аккаунта",
    "Account registration",
    "Бақайдгирии аккаунт"
  ],
  [
    "Форма создания аккаунта Kontakio с бесплатным стартом без банковской карты.|Поля формы\n\nПользователь указывает полное имя, электронную почту и пароль. Подсказка напоминает, что пароль должен содержать не меньше 6 символов.|Бесплатный старт\n\nПодзаголовок сообщает, что начать можно бесплатно и банковская карта не нужна. Кнопка «Создать аккаунт бесплатно» завершает регистрацию.|Условия и вход\n\nПод кнопкой указано, что создание аккаунта означает согласие с условиями использования и политикой конфиденциальности. Для зарегистрированных пользователей есть ссылка «Войти».",
    "The Kontakio account creation form with a free start and no bank card required.|Form fields\n\nThe user enters a full name, email address and password. A hint notes that the password must be at least 6 characters long.|Free start\n\nThe subtitle states that getting started is free and no bank card is needed. The Create free account button completes registration.|Terms and sign-in\n\nA note below the button explains that creating an account means accepting the terms of use and privacy policy. Existing users have a Sign in link.",
    "Шакли сохтани аккаунти Kontakio бо оғози ройгон ва бе корти бонкӣ.|Майдонҳои шакл\n\nКорбар номи пурра, почтаи электронӣ ва паролро ворид мекунад. Ишора хотиррасон мекунад, ки парол бояд на камтар аз 6 аломат бошад.|Оғози ройгон\n\nЗерсарлавҳа хабар медиҳад, ки оғоз ройгон аст ва корти бонкӣ лозим нест. Тугмаи «Сохтани аккаунти ройгон» бақайдгириро анҷом медиҳад.|Шартҳо ва воридшавӣ\n\nДар зери тугма қайд шудааст, ки сохтани аккаунт розигӣ бо шартҳои истифода ва сиёсати махфиятро дорад. Барои корбарони бақайдгирифта пайванди «Ворид шудан» мавҷуд аст."
  ]
],
[
  "chats-incoming",
  [
    "Входящие диалоги",
    "Incoming conversations",
    "Суҳбатҳои воридотӣ"
  ],
  [
    "Новое обращение во вкладке «Входящие» с кнопкой принятия диалога.|Очередь обращений\n\nСлева перечислены входящие диалоги с превью последних сообщений и датами. Выбран диалог с Иваном, который спрашивает о бесплатном пробном периоде.|Принятие диалога\n\nСтатус «Ожидает» показывает, что обращение ещё не взято в работу. Широкая кнопка «Принять диалог» внизу позволяет оператору начать переписку.|Карточка клиента\n\nСправа отображаются имя, источник «Сайт» и статус «Новый». Телефон и почту можно добавить прямо из панели, рядом находятся заметка, сделки и задачи.",
    "A new request in the Incoming tab with a button to accept the conversation.|Request queue\n\nIncoming conversations are listed on the left with previews of the latest messages and dates. The selected one is with Ivan, who asks whether the trial period is free.|Accepting a chat\n\nThe Waiting status shows that the request has not yet been taken. A wide Accept conversation button at the bottom lets the operator start replying.|Client card\n\nThe right panel shows the name, the Website source and the New status. A phone number and email can be added directly from the panel, next to a note, deals and tasks.",
    "Муроҷиати нав дар ҷадвали «Воридотӣ» бо тугмаи қабули суҳбат.|Навбати муроҷиатҳо\n\nДар чап суҳбатҳои воридотӣ бо пешнамоиши паёмҳои охирин ва санаҳо ҷойгиранд. Суҳбат бо Иван интихоб шудааст, ки дар бораи ройгон будани давраи озмоишӣ мепурсад.|Қабули суҳбат\n\nҲолати «Интизор» нишон медиҳад, ки муроҷиат ҳанӯз ба кор гирифта нашудааст. Тугмаи васеи «Қабули суҳбат» дар поён ба оператор имкон медиҳад, ки мукотибаро оғоз кунад.|Корти муштарӣ\n\nДар рост ном, манбаи «Сомона» ва ҳолати «Нав» намоиш дода мешаванд. Телефон ва почтаро бевосита аз панел илова кардан мумкин аст, дар паҳлӯ қайд, муомилаҳо ва вазифаҳо ҷойгиранд."
  ]
],
[
  "chats-active-dialog",
  [
    "Активный диалог",
    "Active conversation",
    "Суҳбати фаъол"
  ],
  [
    "Рабочее место оператора: переписка, действия с диалогом и карточка клиента рядом.|Переписка\n\nВо вкладке «Мои диалоги» открыт разговор с Анной о доставке по Таджикистану и способах оплаты. Над лентой доступны поиск, пометка спама, передача диалога, выход из него и завершение.|Каналы ответа\n\nПоле ввода переключается между вкладками «Чат», Email, SMS и «Комментарий». Рядом находятся кнопки эмодзи, вложений и записи голосового сообщения.|Данные клиента\n\nПравая панель показывает телефон, почту, тег и заметку о клиенте. Быстрые действия позволяют позвонить, написать, создать сделку или задачу и открыть CRM.",
    "The operator workspace: the conversation, chat actions and the client card side by side.|Conversation\n\nThe My conversations tab shows a chat with Anna about delivery across Tajikistan and payment options. Above the thread are search, spam marking, transfer, leave conversation and close actions.|Reply channels\n\nThe composer switches between Chat, Email, SMS and Comment tabs. Emoji, attachment and voice message buttons sit alongside.|Client data\n\nThe right panel shows the client's phone, email, tag and note. Quick actions let the operator call, write, create a deal or task and open the CRM.",
    "Ҷои кори оператор: мукотиба, амалҳо бо суҳбат ва корти муштарӣ дар паҳлӯ.|Мукотиба\n\nДар ҷадвали «Суҳбатҳои ман» гуфтугӯ бо Анна дар бораи расонидан дар саросари Тоҷикистон ва усулҳои пардохт кушода аст. Дар болои навор ҷустуҷӯ, қайди спам, супоридани суҳбат, баромадан аз он ва анҷомдиҳӣ дастрасанд.|Каналҳои ҷавоб\n\nМайдони навиштан байни ҷадвалҳои «Чат», Email, SMS ва «Шарҳ» иваз мешавад. Дар паҳлӯ тугмаҳои эмодзи, замимаҳо ва сабти паёми овозӣ ҷойгиранд.|Маълумоти муштарӣ\n\nПанели рост телефон, почта, тег ва қайди муштариро нишон медиҳад. Амалҳои зуд имкон медиҳанд занг занед, нависед, муомила ё вазифа созед ва CRM-ро кушоед."
  ]
],
[
  "chats-closed",
  [
    "Закрытые диалоги",
    "Closed conversations",
    "Суҳбатҳои пӯшида"
  ],
  [
    "Архив завершённых диалогов с возможностью вернуть обращение в обработку.|Архив\n\nВкладка «Закрытые» хранит завершённые переписки с последним сообщением и датой. Выбран диалог с Ольгой, завершившийся словами «Поняла, хорошего дня!».|Статус\n\nМетка «Завершён» в заголовке и надпись «Диалог завершён» внизу заменяют поле ввода. Зелёная кнопка «Вернуть в обработку» позволяет снова открыть обращение.|Контекст клиента\n\nКарточка справа сохраняет данные клиента, заметку, сделки и задачи. Блок о визите сообщает, что сведения появятся, когда посетитель откроет виджет на сайте.",
    "An archive of finished conversations with the option to reopen a request.|Archive\n\nThe Closed tab keeps finished chats with the last message and date. The selected chat with Olga ended with the words \"Got it, have a nice day!\".|Status\n\nA Closed label in the header and a Conversation closed note at the bottom replace the composer. A green Return to processing button reopens the request.|Client context\n\nThe card on the right keeps the client's details, note, deals and tasks. The visit block explains that details will appear once the visitor opens the widget on the website.",
    "Бойгонии суҳбатҳои анҷомёфта бо имкони баргардонидани муроҷиат ба коркард.|Бойгонӣ\n\nҶадвали «Пӯшида» мукотибаҳои анҷомёфтаро бо паёми охирин ва сана нигоҳ медорад. Суҳбат бо Олга интихоб шудааст, ки бо ибораи «Фаҳмидам, рӯзи хуш!» ба охир расидааст.|Ҳолат\n\nНишонаи «Анҷомёфта» дар сарлавҳа ва навиштаҷоти «Суҳбат анҷом ёфт» дар поён ҷои майдони навиштанро гирифтаанд. Тугмаи сабзи «Баргардонидан ба коркард» муроҷиатро дубора мекушояд.|Заминаи муштарӣ\n\nКорти рост маълумоти муштарӣ, қайд, муомилаҳо ва вазифаҳоро нигоҳ медорад. Блоки ташриф хабар медиҳад, ки маълумот пас аз кушодани виҷет дар сомона пайдо мешавад."
  ]
],
[
  "crm-clients",
  [
    "Клиенты в CRM",
    "CRM clients",
    "Муштариён дар CRM"
  ],
  [
    "Единая база клиентов с сайта, из Telegram и добавленных вручную, со статусами и фильтрами.|Показатели\n\nЧетыре карточки показывают общее число клиентов, новых за 7 дней, клиентов в работе и принятых. В демо-аккаунте учтено 6 клиентов, все со статусом «Новый».|Поиск и фильтры\n\nПоиск работает по имени, телефону и email. Фильтры разделяют базу по статусам: новый, в работе, принят, отклонён и закрыт.|Таблица и обмен данными\n\nСтроки содержат контакты, статус, открытые сделки и время создания с кнопками редактирования и удаления. Вверху доступны импорт и экспорт CSV, а также добавление клиента вручную.",
    "A single client base from the website, Telegram and manual entries, with statuses and filters.|Metrics\n\nFour cards show total clients, new clients over 7 days, clients in progress and accepted ones. The demo account lists 6 clients, all with the New status.|Search and filters\n\nSearch works by name, phone and email. Filters split the base by status: new, in progress, accepted, rejected and closed.|Table and data exchange\n\nRows show contacts, status, open deals and creation time, with edit and delete buttons. CSV import and export and manual client creation are available at the top.",
    "Пойгоҳи ягонаи муштариён аз сомона, Telegram ва иловаи дастӣ бо ҳолатҳо ва филтрҳо.|Нишондиҳандаҳо\n\nЧор корт шумораи умумии муштариён, муштариёни нав дар 7 рӯз, дар кор ва қабулшударо нишон медиҳанд. Дар аккаунти намоишӣ 6 муштарӣ сабт шудааст, ки ҳамаашон ҳолати «Нав» доранд.|Ҷустуҷӯ ва филтрҳо\n\nҶустуҷӯ аз рӯи ном, телефон ва email кор мекунад. Филтрҳо пойгоҳро аз рӯи ҳолат ҷудо мекунанд: нав, дар кор, қабулшуда, радшуда ва пӯшида.|Ҷадвал ва мубодилаи маълумот\n\nСатрҳо тамосҳо, ҳолат, муомилаҳои кушода ва вақти сохтанро бо тугмаҳои таҳрир ва ҳазф дар бар мегиранд. Дар боло воридот ва содироти CSV, инчунин иловаи дастии муштарӣ дастрасанд."
  ]
],
[
  "crm-client-detail",
  [
    "Карточка клиента",
    "Client profile",
    "Корти муштарӣ"
  ],
  [
    "Подробная карточка клиента с контактами, лентой моментов и задачами.|Профиль\n\nКарточка Анны содержит статус «Новый», телефон, email, канал и дату создания. Кнопка «Редактировать» открывает изменение данных, а «Открыть чат» ведёт к переписке.|Моменты\n\nВкладка «Моменты» позволяет фиксировать важные события по клиенту через текстовое поле. Пока записей нет, показано состояние «Нет моментов».|Задачи и навигация\n\nСоседняя вкладка «Задачи» собирает поручения, связанные с клиентом. Ссылка «Назад» возвращает к списку клиентов в разделе CRM.",
    "A detailed client profile with contacts, a moments feed and tasks.|Profile\n\nAnna's card shows the New status, phone, email, channel and creation date. Edit opens the details for changes, while Open chat leads to the conversation.|Moments\n\nThe Moments tab lets the team record important client events through a text field. With no entries yet, the No moments empty state is shown.|Tasks and navigation\n\nThe neighbouring Tasks tab collects assignments related to the client. A Back link returns to the client list in the CRM section.",
    "Корти муфассали муштарӣ бо тамосҳо, навори лаҳзаҳо ва вазифаҳо.|Профил\n\nКорти Анна ҳолати «Нав», телефон, email, канал ва санаи сохтанро дорад. Тугмаи «Таҳрир» тағйири маълумотро мекушояд ва «Кушодани чат» ба мукотиба мебарад.|Лаҳзаҳо\n\nҶадвали «Лаҳзаҳо» имкон медиҳад, ки рӯйдодҳои муҳими муштарӣ тавассути майдони матнӣ сабт шаванд. То пайдо шудани сабтҳо ҳолати «Лаҳза нест» намоиш дода мешавад.|Вазифаҳо ва роҳнамоӣ\n\nҶадвали ҳамсояи «Вазифаҳо» супоришҳои марбут ба муштариро ҷамъ мекунад. Пайванди «Бозгашт» ба рӯйхати муштариён дар бахши CRM бармегардонад."
  ]
],
[
  "crm-deals-kanban",
  [
    "Воронка сделок",
    "Deal pipeline",
    "Қифи муомилаҳо"
  ],
  [
    "Kanban-доска сделок с этапами воронки продаж и настраиваемыми стадиями.|Этапы воронки\n\nВоронка «Продажи» разбита на этапы «Новая», «Переговоры», «Выиграна» и «Проиграна». У каждого столбца есть счётчик сделок и меню действий.|Настройка\n\nКнопка «Добавить этап» расширяет воронку, а «Новая воронка» создаёт отдельный процесс продаж. Значок карандаша позволяет изменить текущую воронку.|Работа со сделками\n\nСделки перемещаются между этапами перетаскиванием в отмеченные зоны. Переключатель «Таблица / Kanban» меняет вид, а кнопка «Новая сделка» добавляет запись.",
    "A Kanban board of deals with sales pipeline stages that can be customised.|Pipeline stages\n\nThe Sales pipeline is split into New, Negotiation, Won and Lost stages. Each column has a deal counter and an actions menu.|Customisation\n\nAdd stage extends the pipeline, while New pipeline creates a separate sales process. A pencil icon allows the current pipeline to be edited.|Working with deals\n\nDeals move between stages by dragging them into the marked drop zones. A Table / Kanban toggle switches the view, and New deal adds a record.",
    "Лавҳаи Kanban-и муомилаҳо бо марҳилаҳои қифи фурӯш ва зинаҳои танзимшаванда.|Марҳилаҳои қиф\n\nҚифи «Фурӯш» ба марҳилаҳои «Нав», «Гуфтушунид», «Бурд» ва «Бохт» тақсим шудааст. Ҳар сутун ҳисобкунаки муомилаҳо ва менюи амалҳо дорад.|Танзим\n\nТугмаи «Илова кардани марҳила» қифро васеъ мекунад ва «Қифи нав» раванди алоҳидаи фурӯшро месозад. Нишонаи қалам имкон медиҳад қифи ҷориро таҳрир кунед.|Кор бо муомилаҳо\n\nМуомилаҳо байни марҳилаҳо бо кашидан ба минтақаҳои ишорашуда интиқол меёбанд. Гузаргоҳи «Ҷадвал / Kanban» намоишро иваз мекунад ва тугмаи «Муомилаи нав» сабт илова мекунад."
  ]
],
[
  "crm-tasks-kanban",
  [
    "Доска задач",
    "Task board",
    "Лавҳаи вазифаҳо"
  ],
  [
    "Kanban-доска задач со статусами выполнения и собственными этапами.|Статусы\n\nСтолбцы «Ожидает», «В работе» и «Выполнено» показывают ход работы по задачам. Счётчики над столбцами отражают количество задач на каждом этапе.|Гибкость\n\nКнопка «Добавить этап» позволяет дополнить процесс собственными статусами. Меню у каждого столбца открывает действия с этапом.|Управление\n\nЗадачи переносятся между статусами перетаскиванием. Кнопка «Новая задача» создаёт запись, а переключатель меняет вид на таблицу.",
    "A Kanban board of tasks with progress statuses and custom stages.|Statuses\n\nPending, In progress and Done columns show how work on tasks is advancing. Counters above the columns reflect the number of tasks at each stage.|Flexibility\n\nAn Add stage button lets the process be extended with custom statuses. A menu on each column opens stage actions.|Management\n\nTasks move between statuses by drag and drop. A New task button creates a record, while a toggle switches to the table view.",
    "Лавҳаи Kanban-и вазифаҳо бо ҳолатҳои иҷро ва марҳилаҳои худӣ.|Ҳолатҳо\n\nСутунҳои «Интизор», «Дар кор» ва «Иҷрошуда» рафти корро бо вазифаҳо нишон медиҳанд. Ҳисобкунакҳо дар болои сутунҳо шумораи вазифаҳоро дар ҳар марҳила инъикос мекунанд.|Чандирӣ\n\nТугмаи «Илова кардани марҳила» имкон медиҳад равандро бо ҳолатҳои худӣ пурра кунед. Менюи ҳар сутун амалҳоро бо марҳила мекушояд.|Идоракунӣ\n\nВазифаҳо байни ҳолатҳо бо кашидан интиқол меёбанд. Тугмаи «Вазифаи нав» сабт месозад ва гузаргоҳ намоишро ба ҷадвал иваз мекунад."
  ]
],
[
  "team-chat",
  [
    "Командный чат",
    "Team chat",
    "Чати даста"
  ],
  [
    "Внутренний чат сотрудников с группами, участниками и настройками.|Группы\n\nВкладка «Группы» содержит группы «Работа» и «Кофе-брейк» с числом участников. Кнопка «Добавить группу» создаёт новое пространство для обсуждений.|Переписка\n\nГруппа «Работа» предназначена для всей команды и обсуждения рабочих вопросов. Поле сообщения поддерживает эмодзи, вложения и голосовые записи.|Сведения\n\nПанель справа показывает описание группы и участников с ролью «Владелец». Новые сотрудники попадают в группу автоматически, а действия позволяют добавить участников, пригласить коллег, изменить настройки, выйти из группы или удалить её.",
    "An internal staff chat with groups, members and settings.|Groups\n\nThe Groups tab contains Work and Coffee break groups with member counts. An Add group button creates a new space for discussions.|Messaging\n\nThe Work group is intended for the whole team and work-related questions. The message field supports emoji, attachments and voice recordings.|Details\n\nThe right panel shows the group description and members, including the Owner role. New employees join the group automatically, and actions let users add members, invite colleagues, change settings, leave or delete the group.",
    "Чати дохилии кормандон бо гурӯҳҳо, иштирокчиён ва танзимот.|Гурӯҳҳо\n\nҶадвали «Гурӯҳҳо» гурӯҳҳои «Кор» ва «Танаффуси қаҳва»-ро бо шумораи иштирокчиён дар бар мегирад. Тугмаи «Илова кардани гурӯҳ» фазои нав барои муҳокима месозад.|Мукотиба\n\nГурӯҳи «Кор» барои тамоми даста ва муҳокимаи масъалаҳои корӣ пешбинӣ шудааст. Майдони паём эмодзи, замимаҳо ва сабтҳои овозиро дастгирӣ мекунад.|Маълумот\n\nПанели рост тавсифи гурӯҳ ва иштирокчиёнро бо нақши «Соҳиб» нишон медиҳад. Кормандони нав ба гурӯҳ худкор ворид мешаванд ва амалҳо имкон медиҳанд иштирокчӣ илова кунед, ҳамкоронро даъват кунед, танзимотро иваз кунед, аз гурӯҳ бароед ё онро ҳазф кунед."
  ]
],
[
  "team-people",
  [
    "Состав команды",
    "Team members",
    "Ҳайати даста"
  ],
  [
    "Раздел команды со списком сотрудников, их должностями и ролями.|Список сотрудников\n\nТаблица показывает сотрудника, его должность и роль. В демо-аккаунте в команде одна участница — Мадина с должностью «Служба поддержки» и ролью «Владелец».|Группы и поиск\n\nЛевая панель переключает вкладки «Группы» и «Команда» и содержит поле поиска. Счётчик под заголовком показывает число участников команды.|Приглашение коллег\n\nКнопка «Пригласить коллег» расположена в шапке и повторяется в пустом состоянии с подсказкой. Ссылка «Управление сотрудниками» ведёт к настройкам состава.",
    "The team section listing employees with their job titles and roles.|Employee list\n\nThe table shows each employee with their job title and role. In the demo account the team has one member, Madina, with the job title Support and the Owner role.|Groups and search\n\nThe left panel switches between the Groups and Team tabs and includes a search field. A counter under the heading shows the number of team members.|Inviting colleagues\n\nThe Invite colleagues button sits in the header and is repeated in the empty state with a hint. The Manage employees link leads to team settings.",
    "Бахши даста бо рӯйхати кормандон, вазифаҳо ва нақшҳои онҳо.|Рӯйхати кормандон\n\nҶадвал кормандро бо вазифа ва нақши ӯ нишон медиҳад. Дар аккаунти намоишӣ дар даста як нафар — Мадина бо вазифаи «Хадамоти дастгирӣ» ва нақши «Соҳиб» ҳаст.|Гурӯҳҳо ва ҷустуҷӯ\n\nПанели чап байни ҷадвалҳои «Гурӯҳҳо» ва «Даста» иваз мекунад ва майдони ҷустуҷӯ дорад. Ҳисобкунак дар зери сарлавҳа шумораи аъзои дастаро нишон медиҳад.|Даъвати ҳамкорон\n\nТугмаи «Даъвати ҳамкорон» дар қисми боло ҷойгир аст ва дар ҳолати холӣ бо маслиҳат такрор мешавад. Пайванди «Идоракунии кормандон» ба танзимоти ҳайати даста мебарад."
  ]
],
[
  "employee-add",
  [
    "Добавление сотрудника",
    "Adding an employee",
    "Илова кардани корманд"
  ],
  [
    "Форма создания учётной записи сотрудника с выбором роли и отправкой данных для входа.|Учётные данные\n\nФорма содержит загрузку фото и обязательные поля имени, email и пароля. Дополнительно можно указать должность и никнейм.|Роли\n\nОператор отвечает в своих диалогах и берёт новые из входящих. Старший оператор также может забирать, закрывать и передавать любые диалоги, а оплата и настройки остаются только у владельца.|Доступ\n\nОтмеченный флажок отправляет сотруднику письмо с адресом кабинета, логином и паролем. На фоне видна страница сотрудников со счётчиком занятых слотов тарифа «Профессиональная».",
    "A form for creating an employee account with a role choice and delivery of login details.|Account details\n\nThe form includes a photo upload and required name, email and password fields. A job title and nickname can also be added.|Roles\n\nAn operator replies in their own conversations and takes new ones from Incoming. A senior operator can also take, close and transfer any conversation, while payments and settings remain with the owner only.|Access\n\nA ticked checkbox sends the employee an email with the account address, login and password. The employees page behind the modal shows a counter of used Professional plan slots.",
    "Шакли эҷоди ҳисоби корманд бо интихоби нақш ва фиристодани маълумоти воридшавӣ.|Маълумоти ҳисоб\n\nШакл боргузории акс ва майдонҳои ҳатмии ном, email ва паролро дар бар мегирад. Илова бар ин, вазифа ва тахаллусро нишон додан мумкин аст.|Нақшҳо\n\nОператор дар суҳбатҳои худ ҷавоб медиҳад ва суҳбатҳои навро аз воридотӣ мегирад. Оператори калон инчунин метавонад ҳар суҳбатро гирад, пӯшад ва супорад, аммо пардохт ва танзимот танҳо дар ихтиёри соҳиб мемонанд.|Дастрасӣ\n\nБайрақчаи қайдшуда ба корманд мактуб бо суроғаи кабинет, логин ва парол мефиристад. Дар замина саҳифаи кормандон бо ҳисобкунаки ҷойҳои истифодашудаи тарофаи «Профессионалӣ» намоён аст."
  ]
],
[
  "ai-assistant",
  [
    "ИИ-ассистент",
    "AI assistant",
    "Ёрдамчии зеҳни сунъӣ"
  ],
  [
    "Страница ИИ-ассистента в кабинете: функция включена и доступна операторам.|Дополнительный пакет\n\nБаннер с заголовком «Отвечайте быстрее и понятнее с ИИ-ассистентом» поясняет, что ИИ пишет ответы, исправляет и переводит тексты, кратко пересказывает диалоги и показывает, о чём спрашивают клиенты. Блок «Входит в ваш тариф» сообщает, что ассистент включён в тариф и докупать ничего не нужно.|Ключевые преимущества\n\nТри карточки описывают черновик ответа за секунды, который оператору остаётся проверить и отправить, перевод переписки на узбекский, таджикский, арабский и ещё 20 языков, а также отчёт о частых вопросах, спорах и спросе за день, неделю или месяц.|Что умеет ИИ-ассистент\n\nБлок перечисляет ответ за оператора по переписке и сведениям о компании, редактирование текстов, перевод переписки, резюме диалогов и отчёт по чатам. Внизу указан лимит — 40 запросов к ИИ в час на оператора.",
    "The AI assistant page in the account: the feature is enabled and available to operators.|Add-on package\n\nA banner headed \"Reply faster and more clearly with the AI assistant\" explains that AI writes replies, corrects and translates texts, summarises conversations and shows what clients ask about. An \"Included in your plan\" box states that the assistant is part of the plan and nothing needs to be bought.|Key benefits\n\nThree cards describe a draft reply in seconds that the operator only has to check and send, translation into Uzbek, Tajik, Arabic and 20 more languages, and a report on frequent questions, disputes and demand for a day, week or month.|What the AI assistant can do\n\nThe block lists writing a reply for the operator from the conversation and company details, editing texts, translating correspondence, summarising conversations and reporting on chats. A limit of 40 AI requests per hour per operator is shown at the bottom.",
    "Саҳифаи ёрдамчии зеҳни сунъӣ дар кабинет: функсия фаъол аст ва барои операторон дастрас мебошад.|Бастаи иловагӣ\n\nБаннер бо сарлавҳаи «Бо ёрдамчии зеҳни сунъӣ тезтар ва фаҳмотар ҷавоб диҳед» мефаҳмонад, ки зеҳни сунъӣ ҷавоб менависад, матнҳоро ислоҳ ва тарҷума мекунад, суҳбатҳоро мухтасар нақл мекунад ва нишон медиҳад, ки мизоҷон дар бораи чӣ мепурсанд. Блоки «Ба тарофаи шумо дохил аст» хабар медиҳад, ки ёрдамчӣ ба тарофа дохил аст ва чизе харидан лозим нест.|Бартариҳои асосӣ\n\nСе корт лоиҳаи ҷавобро дар чанд сония, ки оператор танҳо месанҷаду мефиристад, тарҷумаи мукотиба ба забонҳои ӯзбекӣ, тоҷикӣ, арабӣ ва 20 забони дигар ва ҳисоботро дар бораи саволҳои маъмул, баҳсҳо ва талабот барои рӯз, ҳафта ё моҳ тавсиф мекунанд.|Имкониятҳои ёрдамчӣ\n\nБлок навиштани ҷавоб ба ҷои оператор аз рӯи мукотиба ва маълумоти ширкат, таҳрири матнҳо, тарҷумаи мукотиба, хулосаи суҳбатҳо ва ҳисоботро оид ба чатҳо номбар мекунад. Дар поён маҳдудият — 40 дархост ба зеҳни сунъӣ дар як соат барои ҳар оператор нишон дода шудааст."
  ]
],
[
  "ai-operators",
  [
    "ИИ-операторы",
    "AI operators",
    "Операторҳои зеҳни сунъӣ"
  ],
  [
    "Раздел ИИ-операторов с работающим ИИ-оператором, который отвечает клиентам на сайте.|Назначение\n\nПодзаголовок поясняет, что ИИ отвечает клиентам на сайте и в Telegram круглосуточно по базе знаний и зовёт человека, когда это нужно. Рядом размещены ссылка на справочник по настройке с примерами и зелёная кнопка «Создать».|Лимит ответов\n\nСчётчик «Ответов ИИ в этом месяце» показывает 0 из 1000. По нему видно, сколько ответов ИИ осталось до конца месяца.|Карточка оператора\n\nИИ-оператор Нигина работает в статусе «Отвечает клиентам», а значок паузы позволяет временно остановить его. Метка «Чат на сайте» показывает подключённый канал, а кнопка «Настроить» открывает его настройки.",
    "The AI operators section with a working AI operator that answers clients on the website.|Purpose\n\nThe subtitle explains that AI answers clients on the website and in Telegram around the clock from the knowledge base and calls a person when needed. A link to a setup guide with examples and a green Create button sit alongside.|Reply limit\n\nThe \"AI replies this month\" meter shows 0 of 1000. It shows how many AI replies are left until the end of the month.|Operator card\n\nThe AI operator Nigina has the status \"Answering clients\", and a pause icon stops it temporarily. A \"Website chat\" tag shows the connected channel, and the Configure button opens its settings.",
    "Бахши операторҳои зеҳни сунъӣ бо оператори фаъол, ки ба мизоҷон дар сомона ҷавоб медиҳад.|Мақсад\n\nЗерсарлавҳа мефаҳмонад, ки зеҳни сунъӣ ба мизоҷон дар сомона ва Telegram шабонарӯзӣ аз рӯи пойгоҳи дониш ҷавоб медиҳад ва ҳангоми зарурат одамро даъват мекунад. Дар паҳлӯ пайванд ба дастур оид ба танзим бо мисолҳо ва тугмаи сабзи «Эҷод» ҷойгиранд.|Маҳдудияти ҷавобҳо\n\nҲисобкунаки «Ҷавобҳои зеҳни сунъӣ дар ин моҳ» 0 аз 1000-ро нишон медиҳад. Аз он аён аст, ки то охири моҳ чанд ҷавоби зеҳни сунъӣ боқӣ мондааст.|Корти оператор\n\nОператори зеҳни сунъӣ Нигина дар ҳолати «Ба мизоҷон ҷавоб медиҳад» кор мекунад ва нишонаи таваққуф имкон медиҳад онро муваққатан боздорад. Нишони «Чат дар сомона» канали пайвастшударо нишон медиҳад ва тугмаи «Танзим» танзимоти онро мекушояд."
  ]
],
[
  "ai-operator-edit",
  [
    "Настройка ИИ-оператора",
    "AI operator settings",
    "Танзими оператори зеҳни сунъӣ"
  ],
  [
    "Настройки ИИ-оператора Нигины: раздел «База знаний» и тестовый диалог рядом.|Разделы настройки\n\nМеню слева ведёт к профилю, поведению, базе знаний и автоматизации. В базе знаний есть вкладки «О компании», «Файлы» и «Вопрос-ответ» с четырьмя готовыми ответами, а отдельная кнопка включает веб-поиск. База знаний общая для всех ИИ-операторов и подсказок ИИ-ассистента.|О компании\n\nВ карточке указаны название «Сомон Маркет — интернет-магазин в Душанбе», телефон, Telegram, адрес пункта выдачи и режим работы. Описание рассказывает о доставке по Душанбе в день заказа за 15 сомони или бесплатно от 500 сомони, доставке в Худжанд, Бохтар и Куляб за 2–3 дня, оплате картой Корти Милли или Visa, через Alif Mobi, DC Next или по QR, рассрочке через Алиф Салом и гарантии. Кнопка «Заполнить с сайта» помогает собрать эти сведения с сайта компании.|Тестовый диалог\n\nПанель справа позволяет написать сообщение как клиент и проверить, как ответит ИИ. Клиенты этот диалог не видят.",
    "Settings of the AI operator Nigina: the Knowledge base section with a test chat alongside.|Settings sections\n\nThe left menu leads to the profile, behaviour, knowledge base and automation. The knowledge base has About the company, Files and Q&A tabs with four ready answers, and a separate button turns on web search. The knowledge base is shared by all AI operators and the AI assistant's suggestions.|About the company\n\nThe card lists the name \"Somon Market — an online store in Dushanbe\", a phone number, Telegram, a pickup address and opening hours. The description covers same-day delivery in Dushanbe for 15 somoni or free from 500 somoni, delivery to Khujand, Bokhtar and Kulob in 2–3 days, payment by Korti Milli or Visa card, via Alif Mobi, DC Next or QR, instalments through Alif Salom, and the warranty. A \"Fill in from the website\" button helps collect these details from the company website.|Test chat\n\nThe right panel lets the user write a message as a client and see how the AI replies. Clients do not see this conversation.",
    "Танзимоти оператори зеҳни сунъӣ Нигина: бахши «Пойгоҳи дониш» ва суҳбати озмоишӣ дар паҳлӯ.|Бахшҳои танзим\n\nМенюи чап ба профил, рафтор, пойгоҳи дониш ва автоматикунонӣ мебарад. Дар пойгоҳи дониш ҷадвалҳои «Дар бораи ширкат», «Файлҳо» ва «Савол-ҷавоб» бо чор ҷавоби тайёр ҳастанд ва тугмаи алоҳида ҷустуҷӯи вебро фаъол мекунад. Пойгоҳи дониш барои ҳамаи операторҳои зеҳни сунъӣ ва маслиҳатҳои ёрдамчии зеҳни сунъӣ умумӣ аст.|Дар бораи ширкат\n\nДар корт номи «Сомон Маркет — мағозаи интернетӣ дар Душанбе», телефон, Telegram, суроғаи нуқтаи супурдан ва реҷаи корӣ оварда шудаанд. Тавсиф дар бораи расонидан дар Душанбе дар рӯзи фармоиш бо 15 сомонӣ ё ройгон аз 500 сомонӣ, расонидан ба Хуҷанд, Бохтар ва Кӯлоб дар 2–3 рӯз, пардохт бо корти Корти Миллӣ ё Visa, тавассути Alif Mobi, DC Next ё QR, насия тавассути Алиф Салом ва кафолат нақл мекунад. Тугмаи «Пур кардан аз сомона» барои ҷамъ овардани ин маълумот аз сомонаи ширкат кӯмак мекунад.|Суҳбати озмоишӣ\n\nПанели рост имкон медиҳад, ки ҳамчун мизоҷ паём нависед ва санҷед, ки зеҳни сунъӣ чӣ гуна ҷавоб медиҳад. Мизоҷон ин суҳбатро намебинанд."
  ]
],
[
  "statistics",
  [
    "Состояние аккаунта",
    "Account health",
    "Ҳолати аккаунт"
  ],
  [
    "Сводка ключевых показателей работы с клиентами за выбранный период.|Разделы статистики\n\nВкладки ведут к отчётам по активности диалогов, приглашениям, сотрудникам, рабочему времени, воронкам, обратным звонкам, маркетингу, темам обращений и ИИ-оператору. Фильтры задают период и каналы.|Показатели\n\nЭкран показывает долю пропущенных диалогов, среднее время ответа операторов, рейтинг, обработанные обратные звонки, диалоги по приглашению и общее число диалогов. Значения сравниваются с предыдущим периодом такой же длины.|Подсказки\n\nПод каждым показателем указан ориентир, например не больше 5% пропущенных диалогов и не меньше 90% положительных оценок. Цвет выделяет проблемные и нормальные значения.",
    "A summary of key client-service indicators for the selected period.|Statistics sections\n\nTabs lead to reports on conversation activity, invitations, employees, working hours, funnels, callbacks, marketing, request topics and the AI operator. Filters set the period and channels.|Indicators\n\nThe screen shows the share of missed conversations, average operator response time, rating, handled callbacks, invitation-driven conversations and the total number of conversations. Values are compared with the previous period of the same length.|Guidance\n\nEach indicator includes a target, such as no more than 5% missed conversations and at least 90% positive ratings. Colour highlights problem and normal values.",
    "Хулосаи нишондиҳандаҳои асосии кор бо мизоҷон барои давраи интихобшуда.|Бахшҳои омор\n\nҶадвалҳо ба ҳисоботҳо оид ба фаъолияти суҳбатҳо, даъватҳо, кормандон, вақти корӣ, воронкаҳо, зангҳои баргашт, маркетинг, мавзӯъҳои муроҷиат ва оператори зеҳни сунъӣ мебаранд. Филтрҳо давра ва каналҳоро муайян мекунанд.|Нишондиҳандаҳо\n\nЭкран ҳиссаи суҳбатҳои аз даст рафта, вақти миёнаи ҷавоби операторҳо, рейтинг, зангҳои баргашти коркардшуда, суҳбатҳо аз рӯи даъват ва шумораи умумии суҳбатҳоро нишон медиҳад. Қиматҳо бо давраи қаблии ҳамон дарозӣ муқоиса мешаванд.|Маслиҳатҳо\n\nДар зери ҳар нишондиҳанда меъёр оварда шудааст, масалан на зиёда аз 5% суҳбатҳои аз даст рафта ва на камтар аз 90% баҳоҳои мусбат. Ранг қиматҳои мушкилдор ва муқаррариро ҷудо мекунад."
  ]
],
[
  "statistics-activity",
  [
    "Активность диалогов",
    "Conversation activity",
    "Фаъолияти суҳбатҳо"
  ],
  [
    "График ежедневного количества новых обращений и пропущенных диалогов.|График\n\nЛинейный график показывает число диалогов по дням с 13 октября по 10 ноября. Синяя линия отражает все диалоги, красная — пропущенные.|Итоги\n\nВ легенде выведены суммы за период: 10 диалогов, из них 9 пропущенных. Пики на графике показывают дни с наибольшей нагрузкой.|Применение\n\nПояснение над графиком указывает, что по нему видно, как работает реклама и в какие дни нагрузка выше. Фильтры периода и каналов общие для всех вкладок статистики.",
    "A chart of new requests and missed conversations per day.|Chart\n\nA line chart shows the number of conversations per day from 13 October to 10 November. The blue line represents all conversations and the red line missed ones.|Totals\n\nThe legend shows period totals: 10 conversations, 9 of them missed. Peaks on the chart mark the busiest days.|Use\n\nA note above the chart explains that it shows how advertising performs and which days carry a higher load. The period and channel filters are shared across all statistics tabs.",
    "Графики шумораи ҳаррӯзаи муроҷиатҳои нав ва суҳбатҳои аз даст рафта.|График\n\nГрафики хаттӣ шумораи суҳбатҳоро аз 13 октябр то 10 ноябр рӯз ба рӯз нишон медиҳад. Хатти кабуд ҳамаи суҳбатҳо ва хатти сурх суҳбатҳои аз даст рафтаро инъикос мекунад.|Натиҷаҳо\n\nДар шарҳи график ҷамъи давра оварда шудааст: 10 суҳбат, ки 9-тои онҳо аз даст рафтаанд. Қуллаҳои график рӯзҳои серборро нишон медиҳанд.|Истифода\n\nШарҳ дар болои график мегӯяд, ки аз он самаранокии реклама ва рӯзҳои бори зиёд намоён аст. Филтрҳои давра ва каналҳо барои ҳамаи ҷадвалҳои омор умумӣ мебошанд."
  ]
],
[
  "statistics-employees",
  [
    "Статистика сотрудников",
    "Employee statistics",
    "Омори кормандон"
  ],
  [
    "Таблица результатов каждого сотрудника за период и последние оценки клиентов.|Метрики\n\nКолонки показывают принятые и пропущенные диалоги, полученные передачей, сообщения, время в онлайне, среднее время ответа, среднюю длительность, оценки и рейтинг. Каждая строка относится к одному сотруднику.|Данные сотрудника\n\nВ строке владельца Мадины видны 1 принятый и 3 пропущенных диалога, 13 минут в онлайне и средняя длительность 1 минута. Принятые значения выделены зелёным, пропущенные — красным.|Оценки клиентов\n\nПояснение уточняет, что оценки клиенты ставят после завершения диалога. Блок «Последние оценки» сообщает, что за выбранный период оценок нет.",
    "A table of each employee's results for the period and the latest client ratings.|Metrics\n\nColumns show accepted and missed conversations, transfers received, messages, time online, average response time, average duration, ratings and rating score. Each row covers one employee.|Employee data\n\nThe row for the owner, Madina, shows 1 accepted and 3 missed conversations, 13 minutes online and an average duration of 1 minute. Accepted values are green and missed ones red.|Client ratings\n\nA note explains that clients rate a conversation after it ends. The Latest ratings block reports that there are no ratings for the selected period.",
    "Ҷадвали натиҷаҳои ҳар корманд барои давра ва баҳоҳои охирини мизоҷон.|Нишондиҳандаҳо\n\nСутунҳо суҳбатҳои қабулшуда ва аз даст рафта, суҳбатҳои тавассути супоридан гирифташуда, паёмҳо, вақти онлайн, вақти миёнаи ҷавоб, давомнокии миёна, баҳоҳо ва рейтингро нишон медиҳанд. Ҳар сатр ба як корманд тааллуқ дорад.|Маълумоти корманд\n\nДар сатри соҳиб — Мадина 1 суҳбати қабулшуда ва 3 суҳбати аз даст рафта, 13 дақиқа онлайн ва давомнокии миёнаи 1 дақиқа намоён аст. Қиматҳои қабулшуда бо ранги сабз ва аз даст рафта бо ранги сурх ҷудо шудаанд.|Баҳоҳои мизоҷон\n\nШарҳ мефаҳмонад, ки мизоҷон баҳоро пас аз анҷоми суҳбат мегузоранд. Блоки «Баҳоҳои охирин» хабар медиҳад, ки дар давраи интихобшуда баҳо нест."
  ]
],
[
  "payments-plans",
  [
    "Выбор тарифа",
    "Plan selection",
    "Интихоби тарофа"
  ],
  [
    "Страница тарифов с выбором срока, числа операторов, валюты и расчётом заказа в сомони.|Тарифы\n\nКарточки сравнивают «Начальную» с 7 бесплатными днями, «Базовую» с пометкой «Популярный» и «Профессиональную» с 14 бесплатными днями. Для каждого плана перечислены включённые и недоступные функции, а ИИ-ассистент для перевода, черновиков и резюме входит в «Профессиональную».|Параметры\n\nВалюта переключается между USD, RUB и TJS, срок выбирается от 1 месяца до 2 лет со скидками до 40%. При сроке 2 года «Базовая» стоит 354 смн вместо 590 смн, а «Профессиональная» — 552 смн вместо 920 смн за оператора в месяц.|Заказ и оплата\n\nБлок «Ваш заказ» считает 590 смн × 1 оператор × 24 месяца = 14 160 смн, вычитает скидку за срок 40% в 5 664 смн и выводит итог 8 496 смн. При балансе Kontakio 0 смн предлагается пополнить его на недостающую сумму картой, приложением банка или QR через SmartPay.",
    "The plans page with a choice of period, number of operators and currency, plus an order summary in somoni.|Plans\n\nCards compare Initial with 7 free days, Basic marked Popular and Professional with 14 free days. Each plan lists its included and unavailable features, and the AI assistant for translation, drafts and summaries is part of Professional.|Options\n\nCurrency switches between USD, RUB and TJS, and the period ranges from 1 month to 2 years with discounts of up to 40%. With the 2-year period, Basic costs 354 somoni instead of 590 somoni and Professional 552 somoni instead of 920 somoni per operator per month.|Order and payment\n\nThe Your order block calculates 590 somoni × 1 operator × 24 months = 14,160 somoni, subtracts the 40% period discount of 5,664 somoni and shows a total of 8,496 somoni. With a Kontakio balance of 0 somoni, a top-up for the missing amount by card, banking app or QR via SmartPay is offered.",
    "Саҳифаи тарофаҳо бо интихоби мӯҳлат, шумораи операторҳо, асъор ва ҳисоби фармоиш бо сомонӣ.|Тарофаҳо\n\nКортҳо тарофаи «Ибтидоӣ»-ро бо 7 рӯзи ройгон, «Асосӣ»-ро бо нишони «Маъмул» ва «Профессионалӣ»-ро бо 14 рӯзи ройгон муқоиса мекунанд. Барои ҳар тарофа функсияҳои дохилшуда ва дастнорас номбар шудаанд ва ёрдамчии зеҳни сунъӣ барои тарҷума, лоиҳаҳо ва хулосаҳо ба «Профессионалӣ» дохил аст.|Параметрҳо\n\nАсъор байни USD, RUB ва TJS иваз мешавад ва мӯҳлат аз 1 моҳ то 2 сол бо тахфифи то 40% интихоб мешавад. Ҳангоми мӯҳлати 2 сол «Асосӣ» 354 смн ба ҷои 590 смн ва «Профессионалӣ» 552 смн ба ҷои 920 смн барои як оператор дар як моҳ арзиш дорад.|Фармоиш ва пардохт\n\nБлоки «Фармоиши шумо» 590 смн × 1 оператор × 24 моҳ = 14 160 смн-ро ҳисоб мекунад, тахфифи 40%-и мӯҳлатро ба маблағи 5 664 смн хориҷ мекунад ва ҷамъи 8 496 смн-ро нишон медиҳад. Ҳангоми 0 смн будани баланси Kontakio пур кардани он ба маблағи нарасида бо корт, барномаи бонк ё QR тавассути SmartPay пешниҳод мешавад."
  ]
],
[
  "payments-subscriptions",
  [
    "Мои подписки",
    "My subscriptions",
    "Обунаҳои ман"
  ],
  [
    "Сводка текущего тарифа, мест операторов, автопродления и истории подписок.|Текущий тариф\n\nКарточка показывает активный тариф «Профессиональная», срок действия до 28 октября 2027 года и счётчик оставшихся дней — 352. Указано, что тариф подключён администрацией Kontakio.|Места операторов\n\nБлок показывает занятые места — 0 из 3 — и число свободных. Кнопки ведут к добавлению операторов и списку сотрудников.|Продление и история\n\nАвтопродление недоступно для бесплатного и подаренного тарифа, рядом есть ссылка на историю платежей. Справа размещён блок истории подписок, а кнопка «Сменить тариф» находится в шапке.",
    "An overview of the current plan, operator seats, auto-renewal and subscription history.|Current plan\n\nA card shows the active Professional plan, valid until 28 October 2027, with a counter of 352 days remaining. It notes that the plan was activated by the Kontakio administration.|Operator seats\n\nThis block shows occupied seats, 0 of 3, and the number of free ones. Buttons lead to adding operators and to the employee list.|Renewal and history\n\nAuto-renewal is unavailable for free and gifted plans, with a link to payment history nearby. A subscription history block sits on the right, and the Change plan button is in the header.",
    "Хулосаи тарофаи ҷорӣ, ҷойҳои операторҳо, тамдиди худкор ва таърихи обунаҳо.|Тарофаи ҷорӣ\n\nКорт тарофаи фаъоли «Профессионалӣ», мӯҳлати амал то 28 октябри 2027 ва ҳисобкунаки 352 рӯзи боқимондаро нишон медиҳад. Қайд шудааст, ки тарофа аз ҷониби маъмурияти Kontakio пайваст шудааст.|Ҷойҳои операторҳо\n\nБлок ҷойҳои бандро — 0 аз 3 — ва шумораи ҷойҳои озодро нишон медиҳад. Тугмаҳо ба илова кардани операторҳо ва рӯйхати кормандон мебаранд.|Тамдид ва таърих\n\nТамдиди худкор барои тарофаи ройгон ва туҳфашуда дастрас нест, дар паҳлӯ пайванд ба таърихи пардохтҳо мавҷуд аст. Блоки таърихи обунаҳо дар тарафи рост ва тугмаи «Иваз кардани тарофа» дар қисми боло ҷойгиранд."
  ]
],
[
  "payments-transactions",
  [
    "История транзакций",
    "Transaction history",
    "Таърихи транзаксияҳо"
  ],
  [
    "Журнал пополнений и списаний по балансу Kontakio с фильтрами по статусу.|Фильтры\n\nВкладки отбирают все операции, успешные, в обработке, с ошибкой, отменённые и списания. В демо-аккаунте транзакций пока нет.|Баланс\n\nКарточка справа показывает баланс Kontakio в сомони — 0 смн — и кнопку «Пополнить баланс». Пополнить можно картой, через приложение банка или QR через SmartPay.|Переход к тарифам\n\nОтдельная карточка «Тарифы» ведёт к смене тарифа или добавлению операторов. Раздел связан с подписками и тарифами через меню платежей.",
    "A log of top-ups and charges on the Kontakio balance with status filters.|Filters\n\nTabs show all operations or only successful, processing, failed, cancelled or charge entries. The demo account has no transactions yet.|Balance\n\nA card on the right shows the Kontakio balance in somoni, 0 somoni, and a Top up balance button. Top-ups are available by card, banking app or QR via SmartPay.|Link to plans\n\nA separate Plans card leads to changing the plan or adding operators. The section connects to subscriptions and plans through the payments menu.",
    "Феҳристи пуркунӣ ва хориҷкуниҳо аз баланси Kontakio бо филтрҳо аз рӯи ҳолат.|Филтрҳо\n\nҶадвалҳо ҳамаи амалиётҳо ё танҳо муваффақ, дар коркард, бо хато, бекоршуда ва хориҷкуниҳоро нишон медиҳанд. Дар аккаунти намоишӣ ҳоло транзаксия нест.|Баланс\n\nКорти тарафи рост баланси Kontakio-ро бо сомонӣ — 0 смн — ва тугмаи «Пур кардани баланс»-ро нишон медиҳад. Пур кардан бо корт, барномаи бонк ё QR тавассути SmartPay имконпазир аст.|Гузариш ба тарофаҳо\n\nКорти алоҳидаи «Тарофаҳо» ба иваз кардани тарофа ё илова кардани операторҳо мебарад. Бахш тавассути менюи пардохтҳо бо обунаҳо ва тарофаҳо пайваст аст."
  ]
],
[
  "balance-top-up",
  [
    "Пополнение баланса",
    "Balance top-up",
    "Пур кардани баланс"
  ],
  [
    "Окно пополнения баланса Kontakio с выбором способа оплаты поверх страницы тарифов.|Способы оплаты\n\nСлева перечислены Alif Mobi, DC Next, SmartPay с картами и 13 банками и перевод на кошелёк Алиф или ДС с чеком, а Алиф кошелёк, криптовалюта USDT и USDC и G2Pay отмечены как «Скоро». Над списком показан баланс 0 смн и указано, что деньги зачисляются сразу после оплаты.|Оплата по QR-коду\n\nДля Alif Mobi окно поясняет сценарий: QR-код открывает приложение, где счёт и сумма уже введены. В поле подставлена недостающая сумма 8 496 смн, её можно изменить вручную или выбрать 50, 100, 200 или 500 смн, минимум — 10 смн.|Связь с заказом\n\nНа фоне видна страница тарифов в сомони со сроком 2 года и блоком «Ваш заказ» на 8 496 смн. Красная кнопка формирует QR-код на эту сумму.",
    "The Kontakio balance top-up window with a choice of payment method, shown over the plans page.|Payment methods\n\nAlif Mobi, DC Next, SmartPay with cards and 13 banks, and a transfer to an Alif or DC wallet with a receipt are listed on the left, while Alif wallet, USDT and USDC cryptocurrency and G2Pay are marked as coming soon. Above the list, a balance of 0 somoni is shown with a note that funds are credited immediately after payment.|QR payment\n\nFor Alif Mobi, the window explains the flow: a QR code opens the app with the invoice and amount already filled in. The field is prefilled with the missing 8,496 somoni, which can be changed manually or replaced with 50, 100, 200 or 500 somoni, with a minimum of 10 somoni.|Link to the order\n\nThe plans page in somoni remains in the background, with the 2-year period and a Your order block for 8,496 somoni. A red button generates a QR code for this amount.",
    "Равзанаи пур кардани баланси Kontakio бо интихоби усули пардохт дар болои саҳифаи тарофаҳо.|Усулҳои пардохт\n\nДар чап Alif Mobi, DC Next, SmartPay бо кортҳо ва 13 бонк ва интиқол ба ҳамёни Алиф ё ДС бо чек ҷойгиранд, Алиф ҳамён, криптоасъори USDT ва USDC ва G2Pay бошанд, бо нишони «Ба наздикӣ» қайд шудаанд. Дар болои рӯйхат баланси 0 смн ва ёддошт дар бораи ворид шудани маблағ фавран пас аз пардохт нишон дода шудааст.|Пардохт бо QR-код\n\nБарои Alif Mobi равзана раванди корро мефаҳмонад: QR-код барномаро бо ҳисобнома ва маблағи пешакӣ воридшуда мекушояд. Дар майдон маблағи нарасидаи 8 496 смн гузошта шудааст, ки онро дастӣ иваз кардан ё 50, 100, 200 ё 500 смн интихоб кардан мумкин аст; ҳадди ақал 10 смн.|Пайванд бо фармоиш\n\nДар замина саҳифаи тарофаҳо бо сомонӣ, мӯҳлати 2 сол ва блоки «Фармоиши шумо» ба маблағи 8 496 смн намоён аст. Тугмаи сурх барои ҳамин маблағ QR-код месозад."
  ]
],
[
  "settings-account",
  [
    "Учётная запись",
    "Account settings",
    "Ҳисоби корбар"
  ],
  [
    "Раздел учётной записи с настройкой уведомлений, сменой пароля и управлением личными данными.|Уведомления на email\n\nВладелец добавляет адреса, на которые приходят уведомления. Подсказка поясняет, что письма и уведомления в Telegram приходят на языке кабинета.|Время и Telegram\n\nСписок «Время оповещения о сообщениях» задаёт, когда сообщать о сообщении клиента без ответа, — сейчас выбрано «Немедленно». Telegram-уведомления подключаются через код, который нужно отправить боту.|Пароль и данные\n\nНиже расположены поля нового пароля с кнопкой «Показать». Блок «Ваши данные» позволяет скачать всё, что хранится об аккаунте, или удалить аккаунт.",
    "The account section with notification settings, password change and personal data management.|Email notifications\n\nThe owner adds the addresses that receive notifications. A hint explains that emails and Telegram notifications arrive in the language of the account.|Timing and Telegram\n\nThe message alert time setting defines when to notify about an unanswered client message, currently set to Immediately. Telegram notifications are connected with a code sent to the bot.|Password and data\n\nBelow are the new password fields with a Show option. The Your data block lets the owner download everything stored about the account or delete the account.",
    "Бахши ҳисоби корбар бо танзими огоҳиномаҳо, ивази парол ва идоракунии маълумоти шахсӣ.|Огоҳиномаҳо ба email\n\nСоҳиб суроғаҳоеро илова мекунад, ки огоҳиномаҳо ба онҳо мерасанд. Шарҳ мефаҳмонад, ки мактубҳо ва огоҳиномаҳои Telegram бо забони кабинет фиристода мешаванд.|Вақт ва Telegram\n\nРӯйхати «Вақти огоҳӣ дар бораи паёмҳо» муайян мекунад, ки кай дар бораи паёми беҷавоби мизоҷ хабар дода шавад; ҳоло «Фавран» интихоб шудааст. Огоҳиномаҳои Telegram тавассути коде пайваст мешаванд, ки ба бот фиристода мешавад.|Парол ва маълумот\n\nДар поён майдонҳои пароли нав бо тугмаи «Нишон додан» ҷойгиранд. Блоки «Маълумоти шумо» имкон медиҳад ҳама маълумоти ҳисобро боргирӣ кунед ё ҳисобро нест кунед."
  ]
],
[
  "settings-widget-profile",
  [
    "Профиль и вид виджета",
    "Profile and widget look",
    "Профил ва намуди виҷет"
  ],
  [
    "Настройка профиля оператора и внешнего вида виджета с живым предпросмотром.|Профиль оператора\n\nИмя Мадина, аватар и должность «Служба поддержки» отображаются в шапке виджета. Фото меняется кнопкой рядом с аватаром.|Оформление\n\nЦвет фона и цвет текста выбираются из палитры или пипеткой. Ниже задаются проактивное приглашение, приветствие на других языках, тип отображения чата, расположение на сайте и язык виджета.|Предпросмотр\n\nСправа показан виджет с приветствием и кнопкой запуска в текущих настройках. Переключатель «Анимация кнопки чата» заставляет кнопку пульсировать, пока чат не открыт.",
    "Operator profile and widget appearance settings with a live preview.|Operator profile\n\nThe name Madina, an avatar and the Support team position appear in the widget header. The photo is changed with a button next to the avatar.|Appearance\n\nBackground and text colours are picked from a palette or with an eyedropper. Further down are the proactive invitation, greetings in other languages, chat display type, position on the site and widget language.|Preview\n\nOn the right, the widget is shown with its greeting and launcher button using the current settings. The chat button animation toggle makes the button pulse until the chat is opened.",
    "Танзими профили оператор ва намуди зоҳирии виҷет бо пешнамоиши зинда.|Профили оператор\n\nНоми Мадина, аватар ва вазифаи «Хадамоти дастгирӣ» дар сарлавҳаи виҷет нишон дода мешаванд. Сурат бо тугмаи паҳлуи аватар иваз карда мешавад.|Ороиш\n\nРанги замина ва ранги матн аз палитра ё бо қатрачин интихоб мешаванд. Дар поён даъвати фаъол, саломи забонҳои дигар, намуди чат, ҷойгиршавӣ дар сомона ва забони виҷет танзим мешаванд.|Пешнамоиш\n\nДар тарафи рост виҷет бо салом ва тугмаи оғоз мувофиқи танзимоти ҷорӣ нишон дода шудааст. Калиди «Аниматсияи тугмаи чат» тугмаро то кушода шудани чат ҷунбон мекунад."
  ]
],
[
  "settings-widget-callback-contacts",
  [
    "Обратный звонок и контакты",
    "Callback and contacts",
    "Занги баргашт ва тамосҳо"
  ],
  [
    "Продолжение настроек виджета: обратный звонок, таймер ожидания и контактные ссылки.|Обратный звонок\n\nПереключатель выводит в виджете кнопку, через которую посетитель оставляет номер телефона, а заявка приходит оператору. Отдельно включается обратный отсчёт на экране ожидания.|Время до звонка\n\nВ списке «Желаемое время до звонка» выбрана 1 минута, а пояснение допускает срок до 30 минут. Вариант «Без указания времени» убирает из виджета и таймер, и упоминание срока.|Контакты\n\nБлок содержит поля для ссылок на WhatsApp и Telegram и номера телефона. Завершает страницу пункт «Проверка email» со значением «Нет».",
    "Further widget settings: callback requests, a waiting timer and contact links.|Callback\n\nA toggle adds a button to the widget where a visitor leaves a phone number, and the request goes to an operator. A countdown on the waiting screen is enabled separately.|Time to call\n\nThe preferred time to call is set to 1 minute, with a hint allowing up to 30 minutes. The No time option removes both the timer and any mention of time from the widget.|Contacts\n\nThe block holds fields for WhatsApp and Telegram links and a phone number. The page ends with an email verification setting, currently set to No.",
    "Идомаи танзимоти виҷет: занги баргашт, ҳисобкунаки интизорӣ ва истинодҳои тамос.|Занги баргашт\n\nКалид дар виҷет тугмаеро илова мекунад, ки тавассути он меҳмон рақами телефонро мегузорад ва дархост ба оператор мерасад. Ҳисоби баръакс дар экрани интизорӣ алоҳида фаъол мешавад.|Вақт то занг\n\nДар рӯйхати «Вақти дилхоҳ то занг» 1 дақиқа интихоб шудааст ва шарҳ муҳлатро то 30 дақиқа иҷозат медиҳад. Варианти «Бе нишон додани вақт» ҳам ҳисобкунак ва ҳам ёдоварии муҳлатро аз виҷет хориҷ мекунад.|Тамосҳо\n\nБлок майдонҳои истинод ба WhatsApp ва Telegram ва рақами телефонро дар бар мегирад. Саҳифа бо банди «Санҷиши email» бо қимати «Не» анҷом меёбад."
  ]
],
[
  "settings-widget-script",
  [
    "Скрипт виджета",
    "Widget script",
    "Скрипти виҷет"
  ],
  [
    "Страница с кодом для установки виджета Kontakio на сайт.|Код установки\n\nТёмный блок содержит HTML-тег script, который загружает виджет с api.kontakio.com. Кнопка «Копировать» переносит код в буфер обмена.|Установка\n\nИнструкция предлагает вставить код перед </head> на каждой странице сайта. Затем достаточно сохранить страницу и обновить сайт — виджет появится автоматически.|Навигация\n\nПункт выделен в меню управления рядом с профилем, учётной записью, сотрудниками, каналами и сайтами. Ссылка «Проверить виджет» открывает его в отдельной вкладке.",
    "A page with the code for installing the Kontakio widget on a website.|Install code\n\nA dark block contains an HTML script tag that loads the widget from api.kontakio.com. The Copy button places the code on the clipboard.|Installation\n\nThe instructions say to paste the code before </head> on every page of the site. After saving the page and refreshing the site, the widget appears automatically.|Navigation\n\nThe item is highlighted in the management menu next to profile, account, employees, channels and sites. A Check widget link opens it in a separate tab.",
    "Саҳифа бо код барои насби виҷети Kontakio дар сомона.|Коди насб\n\nБлоки торик теги HTML script-ро дорад, ки виҷетро аз api.kontakio.com бор мекунад. Тугмаи «Нусха бардоштан» кодро ба буфер мегузорад.|Насб\n\nДастур пешниҳод мекунад, ки код пеш аз </head> дар ҳар саҳифаи сомона гузошта шавад. Баъд саҳифаро сабт ва сомонаро навсозӣ кардан кифоя аст — виҷет худкор пайдо мешавад.|Роҳнамоӣ\n\nБанд дар менюи идоракунӣ дар қатори профил, ҳисоби корбар, кормандон, каналҳо ва сомонаҳо ҷудо карда шудааст. Истиноди «Санҷиши виҷет» онро дар ҷадвали алоҳида мекушояд."
  ]
],
[
  "settings-channels",
  [
    "Каналы",
    "Channels",
    "Каналҳо"
  ],
  [
    "Подключение мессенджеров и SMS, сообщения из которых попадают в общий список диалогов.|Telegram\n\nКлиенты пишут боту в Telegram, а операторы отвечают из Kontakio. Три шага описывают создание бота через @BotFather, копирование токена и подключение.|SMS через ZudSMS\n\nКанал отправляет SMS клиенту прямо из диалога через аккаунт ZudSMS. Форма запрашивает логин, псевдоним отправителя и Security Hash, который хранится в зашифрованном виде.|Ограничения и планы\n\nПодсказка уточняет, что SMS отправляются на номера Таджикистана (+992). WhatsApp и Instagram отмечены как каналы, которые появятся скоро.",
    "Connecting messengers and SMS, with their messages arriving in the shared conversation list.|Telegram\n\nClients write to a Telegram bot and operators reply from Kontakio. Three steps describe creating the bot via @BotFather, copying the token and connecting it.|SMS via ZudSMS\n\nThe channel sends SMS to a client straight from the conversation through a ZudSMS account. The form asks for the login, sender name and Security Hash, which is stored encrypted.|Scope and plans\n\nA note clarifies that SMS are sent to Tajikistan numbers (+992). WhatsApp and Instagram are marked as coming soon.",
    "Пайвасти мессенҷерҳо ва SMS, ки паёмҳояшон ба рӯйхати умумии суҳбатҳо ворид мешаванд.|Telegram\n\nМизоҷон ба боти Telegram менависанд ва операторон аз Kontakio ҷавоб медиҳанд. Се қадам сохтани бот тавассути @BotFather, нусхабардории токен ва пайвастро шарҳ медиҳанд.|SMS тавассути ZudSMS\n\nКанал SMS-ро бевосита аз суҳбат тавассути ҳисоби ZudSMS ба мизоҷ мефиристад. Шакл логин, тахаллуси фиристанда ва Security Hash-ро талаб мекунад, ки дар шакли рамзгузорӣ нигоҳ дошта мешавад.|Маҳдудиятҳо ва нақшаҳо\n\nШарҳ мефаҳмонад, ки SMS ба рақамҳои Тоҷикистон (+992) фиристода мешавад. WhatsApp ва Instagram ҳамчун каналҳои ба наздикӣ дастрас қайд шудаанд."
  ]
],
[
  "settings-employees",
  [
    "Сотрудники",
    "Employees",
    "Кормандон"
  ],
  [
    "Управление командой: слоты операторов, распределение чатов и автозакрытие диалогов.|Слоты тарифа\n\nВерхняя строка показывает, что использовано 0 из 3 слотов на тарифе «Профессиональная» до 28.10.2027. Кнопка «Добавить сотрудника» открывает форму нового оператора.|Распределение чатов\n\nВ режиме «Вручную» все видят «Входящие» и сами принимают диалоги. В режиме «Автоматически» новый диалог получает наименее загруженный оператор в сети.|Автозакрытие\n\nДиалог, где последним ответил оператор, закрывается сам через выбранное время — здесь 1 час. Если клиент напишет снова, диалог вернётся во «Входящие».",
    "Team management: operator slots, chat distribution and automatic closing of conversations.|Plan slots\n\nThe top line shows 0 of 3 slots used on the Professional plan until 28.10.2027. The Add employee button opens the form for a new operator.|Chat distribution\n\nIn Manual mode, everyone sees Incoming and takes conversations themselves. In Automatic mode, a new conversation goes to the least busy online operator.|Auto-close\n\nA conversation where the operator replied last closes by itself after the selected time, here 1 hour. If the client writes again, it returns to Incoming.",
    "Идоракунии даста: ҷойҳои операторон, тақсими чатҳо ва пӯшидани худкори суҳбатҳо.|Ҷойҳои тарофа\n\nСатри боло нишон медиҳад, ки дар тарофаи «Касбӣ» то 28.10.2027 аз 3 ҷой 0 истифода шудааст. Тугмаи «Илова кардани корманд» шакли оператори навро мекушояд.|Тақсими чатҳо\n\nДар реҷаи «Дастӣ» ҳама «Воридотӣ»-ро мебинанд ва суҳбатҳоро худашон қабул мекунанд. Дар реҷаи «Худкор» суҳбати навро оператори камбортари онлайн мегирад.|Пӯшидани худкор\n\nСуҳбате, ки дар он охирин бор оператор ҷавоб додааст, пас аз вақти интихобшуда худ пӯшида мешавад; дар ин ҷо 1 соат. Агар мизоҷ боз нависад, суҳбат ба «Воридотӣ» бармегардад."
  ]
],
[
  "settings-sites",
  [
    "Сайты",
    "Sites",
    "Сомонаҳо"
  ],
  [
    "Управление несколькими сайтами в одном аккаунте Kontakio.|Отдельные настройки\n\nУ каждого сайта свой скрипт виджета, настройки, ИИ-операторы, шаблоны и CRM. Первый сайт входит в тариф, каждый следующий подключается разовым платежом 100 смн с баланса.|Карточка сайта\n\nКарточка shop.example.tj отмечена как основная и показывает адрес сайта и число диалогов — 11. Переключатель в углу управляет активностью сайта.|Действия\n\nКнопка «Скрипт» открывает код виджета для этого сайта, «Изменить» — его параметры. Новый сайт добавляется кнопкой в верхней части страницы.",
    "Managing several websites within one Kontakio account.|Separate settings\n\nEach site has its own widget script, settings, AI operators, templates and CRM. The first site is included in the plan, and each additional one is a one-time payment of 100 somoni from the balance.|Site card\n\nThe shop.example.tj card is marked as primary and shows the site address and 11 conversations. A toggle in the corner controls whether the site is active.|Actions\n\nThe Script button opens the widget code for this site, and Edit opens its parameters. A new site is added with the button at the top of the page.",
    "Идоракунии якчанд сомона дар як ҳисоби Kontakio.|Танзимоти алоҳида\n\nҲар сомона скрипти виҷет, танзимот, операторони ЗС, қолабҳо ва CRM-и худро дорад. Сомонаи аввал ба тарофа дохил аст ва ҳар сомонаи навбатӣ бо пардохти якдафъаинаи 100 сомонӣ аз баланс пайваст мешавад.|Корти сомона\n\nКорти shop.example.tj ҳамчун асосӣ қайд шуда, суроғаи сомона ва шумораи суҳбатҳоро — 11 — нишон медиҳад. Калид дар кунҷ фаъолияти сомонаро идора мекунад.|Амалҳо\n\nТугмаи «Скрипт» коди виҷетро барои ин сомона мекушояд, «Тағйир додан» бошад, параметрҳои онро. Сомонаи нав бо тугма дар қисми болоии саҳифа илова мешавад."
  ]
],
[
  "widget-visitor-open",
  [
    "Виджет у посетителя",
    "Widget for visitors",
    "Виҷет барои меҳмон"
  ],
  [
    "Открытый виджет Kontakio поверх главной страницы kontakio.com: переписка посетительницы с оператором.|Шапка\n\nВ шапке виджета указаны оператор Мадина из службы поддержки и её аватар. Иконки позволяют искать по переписке, развернуть окно, открыть меню и свернуть чат.|Контакты\n\nФорма «Укажите ваши контакты, чтобы мы смогли ответить вам» заполнена именем Фарангис и подтверждена кнопкой «Спасибо». Подсказка поясняет, что сообщения теперь не потеряются, а ответ придёт в чат и по указанным контактам.|Переписка\n\nПосетительница спрашивает о доставке кондиционера в Худжанд, а после отметки «Непрочитанные» оператор отвечает, что доставка займёт 2–3 дня и стоит 50 сомони. Внизу находятся поле сообщения с кнопками эмодзи, вложений и голосового ввода и подпись «Работает на Kontakio».",
    "The open Kontakio widget over the kontakio.com home page: a visitor's conversation with an operator.|Header\n\nThe widget header shows the operator Madina from the support team with her avatar. Icons search the conversation, expand the window, open a menu and collapse the chat.|Contacts\n\nThe form \"Leave your contact details so that we can reply to you\" is filled in with the name Farangis and confirmed with a Thank you button. A note explains that messages will no longer be lost and the reply will arrive in the chat and via the contacts provided.|Conversation\n\nThe visitor asks about delivering an air conditioner to Khujand, and after the Unread divider the operator replies that delivery takes 2–3 days and costs 50 somoni. At the bottom are the message field with emoji, attachment and voice input buttons and the Powered by Kontakio line.",
    "Виҷети кушодаи Kontakio дар болои саҳифаи асосии kontakio.com: мукотибаи меҳмон бо оператор.|Сарлавҳа\n\nДар сарлавҳаи виҷет оператор Мадина аз хадамоти дастгирӣ ва аватари ӯ нишон дода шудаанд. Нишонаҳо имкон медиҳанд дар мукотиба ҷустуҷӯ кунед, равзанаро калон кунед, менюро кушоед ва чатро печонед.|Тамосҳо\n\nШакли «Тамосҳои худро нишон диҳед, то ба шумо ҷавоб дода тавонем» бо номи Фарангис пур карда шуда, бо тугмаи «Ташаккур» тасдиқ шудааст. Шарҳ мефаҳмонад, ки акнун паёмҳо гум намешаванд ва ҷавоб ба чат ва ба тамосҳои нишондодашуда меояд.|Мукотиба\n\nМеҳмон дар бораи расонидани кондитсионер ба Хуҷанд мепурсад ва пас аз нишонаи «Хонданашуда» оператор ҷавоб медиҳад, ки расонидан 2–3 рӯз мегирад ва 50 сомонӣ арзиш дорад. Дар поён майдони паём бо тугмаҳои эмодзи, замимаҳо ва вориди овозӣ ва навиштаи «Дар асоси Kontakio» ҷойгиранд."
  ]
]
];

const languages = ["ru", "en", "tj"] as const;
const headings = {
  ru: "Архитектура и функциональность",
  en: "Architecture and functionality",
  tj: "Сохтор ва вазифаҳо",
};

const toItems = (screens: Screen[], suffix: "1700" | "full"): Items =>
  screens.map(([slug, titles, descriptions]) => {
    const title = { ru: titles[0], en: titles[1], tj: titles[2] };
    const shortInfo = { ru: "", en: "", tj: "" };
    const fullInfo = { ru: "", en: "", tj: "" };
    languages.forEach((language, index) => {
      const [intro, ...sections] = descriptions[index].split("|");
      shortInfo[language] = intro;
      fullInfo[language] = `${headings[language]}: ${titles[index]}\n\n${intro}\n\n${sections.map((section, number) => `${number + 1}. ${section}`).join("\n\n")}`;
    });
    const imageSrc = `/images/projects/kontakio/${slug}-${suffix}.webp`;
    return { slug, title, imageSrc, BannerSrc: imageSrc, shortInfo, fullInfo };
  });

export const kontakioLandingScreens: Items = toItems(landingScreens, "1700");
export const kontakioAccountScreens: Items = toItems(accountScreens, "full");
