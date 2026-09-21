import type { ProductSiteItem } from "./product-site";

type Screen = [string, string, [string, string, string], [string, string, string]];

// Each source screenshot is kept at its original dimensions, without cropping.
const screens: Screen[] = [
  [
    "175409",
    "notification-email",
    [
      "Email для уведомлений",
      "Notification email",
      "Email барои огоҳиномаҳо"
    ],
    [
      "Запрос адреса для уведомлений при входе в кабинет.|Назначение\n\nОкно объясняет, что адрес нужен для уведомлений о новых чатах и сообщениях без ответа. Раздел диалогов остаётся виден на затемнённом фоне.|Поле адреса\n\nВ форме находится одно поле email с подсказкой ввода. Компактная карточка сосредоточена на настройке способа уведомлений.|Действия\n\n«Сохранить» завершает ввод, «Позже» позволяет отложить настройку, а крестик закрывает окно.",
      "A request for a notification address when entering the account.|Purpose\n\nThe modal explains that the address is used for notifications about new chats and unanswered messages. Conversations remain visible in the dimmed background.|Address field\n\nA single email field includes an input hint. The compact card focuses on configuring the notification destination.|Actions\n\nSave completes input, Later postpones setup, and the close icon dismisses the modal.",
      "Дархости суроғаи огоҳиномаҳо ҳангоми воридшавӣ ба кабинет.|Мақсад\n\nРавзана мефаҳмонад, ки суроға барои огоҳӣ аз чатҳои нав ва паёмҳои беҷавоб лозим аст. Суҳбатҳо дар заминаи тирашуда намоён мемонанд.|Майдони суроға\n\nЯк майдони email бо намунаи воридкунӣ ҷойгир аст. Корти хурд ба танзими суроғаи огоҳиномаҳо бахшида шудааст.|Амалҳо\n\n«Сабт» воридкуниро анҷом медиҳад, «Баъдтар» танзимро ба таъхир мегузорад ва салибча равзанаро мебандад."
    ]
  ],
  [
    "175417",
    "subscription-inactive",
    [
      "Неактивная подписка",
      "Inactive subscription",
      "Обунаи ғайрифаъол"
    ],
    [
      "Состояние раздела диалогов без активной подписки.|Предупреждение\n\nОранжевый блок сообщает об истёкшей или неактивированной подписке и предлагает выбрать тариф. Он занимает центральное место в рабочей области.|Навигация\n\nСлева остаются вкладки входящих, личных и закрытых диалогов. В списке показано отсутствие входящих обращений.|Продолжение\n\nЗелёная кнопка «Тарифы» расположена непосредственно в предупреждении и обозначает следующий шаг.",
      "The conversations section without an active subscription.|Warning\n\nAn orange panel reports an expired or unactivated subscription and suggests choosing a plan. It occupies the main workspace.|Navigation\n\nIncoming, personal and closed conversation tabs remain on the left. The list shows that there are no incoming requests.|Next step\n\nA green Plans button sits directly within the warning and indicates the next action.",
      "Бахши суҳбатҳо бе обунаи фаъол.|Огоҳӣ\n\nБлоки норанҷӣ дар бораи обунаи муҳлаташ гузашта ё фаъолнашуда хабар дода, интихоби тарофаро пешниҳод мекунад. Он дар минтақаи асосии кор ҷойгир аст.|Роҳнамоӣ\n\nҶадвалҳои суҳбатҳои воридотӣ, шахсӣ ва пӯшида дар чап мемонанд. Рӯйхат набудани муроҷиатҳои воридотиро нишон медиҳад.|Қадами навбатӣ\n\nТугмаи сабзи «Тарофаҳо» бевосита дар огоҳӣ ҷойгир аст ва амали навбатиро нишон медиҳад."
    ]
  ],
  [
    "175439",
    "payment-plans",
    [
      "Выбор тарифа",
      "Plan selection",
      "Интихоби тарофа"
    ],
    [
      "Сравнение планов, срока подписки и дополнительных операторов.|Тарифные карточки\n\nНа снимке представлены пробная «Начальная», «Базовая» за 59 и «Профессиональная» за 92 сомони в месяц. Это цены показанного интерфейса.|Параметры\n\nДоступны валюта TJS, периоды от месяца до двух лет со скидками и счётчик дополнительных операторов.|Итог\n\nВверху показаны нулевой баланс и пополнение. Выбран пробный вариант с нулевой итоговой суммой и кнопкой активации бесплатного периода.",
      "Comparison of plans, subscription periods and additional operators.|Plan cards\n\nThe screenshot displays an Initial trial, Basic at 59 and Professional at 92 somoni per month. These are the prices shown in this interface.|Parameters\n\nControls include TJS currency, periods from one month to two years with discounts, and an additional operator counter.|Total\n\nA zero balance and top-up action appear above. The selected trial shows a zero total and a free-period activation button.",
      "Муқоисаи тарофаҳо, муҳлати обуна ва операторони иловагӣ.|Кортҳои тарофа\n\nДар тасвир «Ибтидоӣ» барои озмоиш, «Асосӣ» бо 59 ва «Касбӣ» бо 92 сомонӣ дар як моҳ ҳастанд. Ин нархҳои интерфейси нишон додашуда мебошанд.|Параметрҳо\n\nАсъори TJS, давраҳо аз як моҳ то ду сол бо тахфиф ва ҳисобкунаки операторони иловагӣ дастрасанд.|Ҳисоб\n\nДар боло тавозуни сифрӣ ва пуркунӣ ҳастанд. Варианти озмоишӣ бо маблағи сифрӣ ва тугмаи фаъолсозии давраи ройгон интихоб шудааст."
    ]
  ],
  [
    "175448",
    "subscription-trial-available",
    [
      "Доступный пробный период",
      "Available trial period",
      "Давраи озмоишии дастрас"
    ],
    [
      "Подписки до активации бесплатного периода.|Текущее состояние\n\nСообщение об отсутствии активной подписки сопровождается переходом к тарифам.|Пробная карточка\n\nПлан «Начальная» показывает семь дней доступного периода. Отдельная кнопка предлагает активировать бесплатную подписку.|Структура\n\nБоковое меню объединяет подписки, тарифы и транзакции, связывая состояние услуги с выбором плана и историей оплаты.",
      "Subscriptions before free-period activation.|Current state\n\nA message that no subscription is active is accompanied by a route to plans.|Trial card\n\nThe Initial plan displays seven available days. A dedicated button offers to activate the free subscription.|Structure\n\nThe side menu groups subscriptions, plans and transactions, connecting service status with plan selection and payment history.",
      "Обунаҳо пеш аз фаъолсозии давраи ройгон.|Ҳолати ҷорӣ\n\nПаёми набудани обунаи фаъол бо гузариш ба тарофаҳо ҳамроҳ аст.|Корти озмоишӣ\n\nТарофаи «Ибтидоӣ» ҳафт рӯзи дастрасро нишон медиҳад. Тугмаи алоҳида фаъолсозии обунаи ройгонро пешниҳод мекунад.|Сохтор\n\nМенюи паҳлуӣ обунаҳо, тарофаҳо ва амалиётҳоро муттаҳид карда, ҳолати хизматрасониро бо интихоби тарофа ва таърихи пардохт мепайвандад."
    ]
  ],
  [
    "175454",
    "subscription-trial-active",
    [
      "Пробная подписка активирована",
      "Trial subscription activated",
      "Обунаи озмоишӣ фаъол шуд"
    ],
    [
      "Подтверждение активации начальной подписки.|Успешная активация\n\nВсплывающее уведомление сообщает об активации бесплатной подписки. Карточка отмечена зелёным активным статусом.|Срок и лимит\n\nПоказаны оставшиеся семь дней до 27.09.2026 и использование нуля из одного слота сотрудников.|Информация о пробном периоде\n\nСообщение ниже указывает, что бесплатная подписка уже использована, дополняя сведения о текущем активном периоде.",
      "Confirmation of Initial subscription activation.|Successful activation\n\nA toast reports that the free subscription was activated. The card carries a green active status.|Duration and limit\n\nThe screen shows seven days remaining until 27 September 2026 and zero of one employee slots used.|Trial information\n\nA message below states that the free subscription has already been used, complementing the current active-period details.",
      "Тасдиқи фаъолсозии обунаи ибтидоӣ.|Фаъолсозии муваффақ\n\nОгоҳии пайдошаванда фаъол шудани обунаи ройгонро хабар медиҳад. Корт ҳолати сабзи фаъол дорад.|Муҳлат ва маҳдудият\n\nҲафт рӯзи боқимонда то 27.09.2026 ва истифодаи сифр аз як ҷойи корманд нишон дода шудаанд.|Маълумоти озмоиш\n\nПаёми поён мегӯяд, ки обунаи ройгон аллакай истифода шудааст ва маълумоти давраи фаъоли ҷориро пурра мекунад."
    ]
  ],
  [
    "175501",
    "payment-transactions",
    [
      "История транзакций",
      "Transaction history",
      "Таърихи амалиётҳо"
    ],
    [
      "Баланс и платёжные операции в табличном представлении.|Фильтры\n\nВверху показаны 0 TJS и пополнение. Фильтры разделяют успешные, обрабатываемые, ошибочные, отменённые операции и списания.|Реквизиты\n\nТаблица содержит дату, способ, тип, сумму и статус. Пример платежа через Alif Acquiring на 500 сомони имеет красный статус ошибки.|Просмотр\n\nРезультат операции и её реквизиты находятся в одной строке, позволяя сопоставить платёж с его состоянием.",
      "Balance and payment operations in a table.|Filters\n\nThe header shows 0 TJS and top-up. Filters separate successful, processing, failed, cancelled and debit operations.|Details\n\nColumns contain date, method, type, amount and status. An example Alif Acquiring payment for 500 somoni has a red error status.|Review\n\nThe operation result and its details occupy the same row, allowing the payment to be compared with its state.",
      "Тавозун ва амалиётҳои пардохтӣ дар ҷадвал.|Филтрҳо\n\nДар боло 0 TJS ва пуркунӣ ҳастанд. Филтрҳо амалиётҳои муваффақ, коркардшаванда, хато, бекоршуда ва хароҷотро ҷудо мекунанд.|Ҷузъиёт\n\nСутунҳо сана, усул, намуд, маблағ ва ҳолатро доранд. Пардохти намунавии 500 сомонӣ тавассути Alif Acquiring ҳолати сурхи хато дорад.|Дидан\n\nНатиҷа ва маълумоти амалиёт дар як сатр ҷойгир буда, муқоисаи пардохт ва ҳолати онро осон мекунанд."
    ]
  ],
  [
    "175507",
    "balance-top-up",
    [
      "Пополнение баланса",
      "Balance top-up",
      "Пур кардани тавозун"
    ],
    [
      "Подготовка пополнения в модальном окне.|Сумма\n\nФорма предлагает готовые значения 50, 100, 200 и 500 сомони и поле собственной суммы.|Банковская карта\n\nДоступны флажок сохранения карты и действие добавления карты. История транзакций остаётся на затемнённом фоне.|Оплата\n\nВнизу расположены отмена и оплата. На снимке платёжная кнопка неактивна; показан этап подготовки, а не успешный платёж.",
      "Preparing a balance top-up in a modal.|Amount\n\nThe form offers preset amounts of 50, 100, 200 and 500 somoni and a custom amount field.|Bank card\n\nA save-card checkbox and an add-card action are available. Transaction history remains in the dimmed background.|Payment\n\nCancel and payment controls appear below. The payment button is inactive in the screenshot, showing preparation rather than a completed payment.",
      "Омодасозии пуркунии тавозун дар равзана.|Маблағ\n\nШакл арзишҳои омодаи 50, 100, 200 ва 500 сомонӣ ва майдони маблағи дигарро пешниҳод мекунад.|Корти бонкӣ\n\nАломати нигоҳдории корт ва амали иловаи корт дастрасанд. Таърихи амалиётҳо дар заминаи тирашуда мемонад.|Пардохт\n\nДар поён бекоркунӣ ва пардохт ҳастанд. Тугмаи пардохт дар тасвир ғайрифаъол аст: марҳилаи омодагӣ нишон дода шудааст."
    ]
  ],
  [
    "175607",
    "visitor-contact-launcher",
    [
      "Меню связи на сайте",
      "Website contact menu",
      "Менюи тамос дар сайт"
    ],
    [
      "Компактная панель связи в правом нижнем углу страницы.|Доступность\n\nЗаголовок «Свяжитесь с нами» и отметка «Онлайн» объясняют назначение раскрытого меню.|Канал\n\nВ панели представлен онлайн-чат. Под ним размещён текст интерфейса о безопасности данных и их непередаче третьим лицам.|Запуск\n\nЗелёная кнопка «Напишите нам, мы онлайн!» остаётся рядом с меню, связывая панель с точкой начала общения.",
      "A compact contact panel in the lower-right corner of the page.|Availability\n\nThe Contact us heading and Online indicator explain the expanded menu’s purpose.|Channel\n\nThe panel offers online chat. An interface notice below describes data safety and states that data is not shared with third parties.|Launcher\n\nA green Write to us, we are online button stays beside the menu, connecting the panel to the conversation entry point.",
      "Панели хурди тамос дар кунҷи поёнии рости саҳифа.|Дастрасӣ\n\nСарлавҳаи «Бо мо тамос гиред» ва нишонаи «Онлайн» мақсади менюи кушодаро мефаҳмонанд.|Канал\n\nПанел чати онлайнро пешниҳод мекунад. Матни интерфейс дар поён дар бораи амнияти маълумот ва надодани он ба шахсони сеюм мегӯяд.|Оғоз\n\nТугмаи сабзи «Ба мо нависед, мо онлайнем!» назди меню мемонад ва панелро бо нуқтаи оғози муошират мепайвандад."
    ]
  ],
  [
    "175714",
    "visitor-contact-form",
    [
      "Контакты посетителя в чате",
      "Visitor details in chat",
      "Маълумоти меҳмон дар чат"
    ],
    [
      "Виджет с приветствием и заполненной контактной карточкой.|Общение\n\nВверху представлены заголовок отправки сообщения и приветствие оператора.|Контактные поля\n\nИмя, телефон и email заполнены тестовыми данными с галочками. Карточка показывает состояние «Спасибо».|Продолжение\n\nВнизу расположены ввод сообщения, вложения и эмодзи. Контакты остаются внутри виджета рядом с областью переписки.",
      "A widget with a greeting and a completed contact card.|Conversation\n\nThe upper area contains the send-message heading and the operator’s greeting.|Contact fields\n\nName, phone and email contain test details with check marks. The card displays a Thank you state.|Continuation\n\nMessage input, attachments and emoji appear below. Contact details remain within the widget beside the conversation area.",
      "Виджет бо истиқбол ва корти пуршудаи тамос.|Суҳбат\n\nДар боло сарлавҳаи фиристодани паём ва истиқболи оператор ҷойгиранд.|Майдонҳои тамос\n\nНом, телефон ва email бо маълумоти санҷишӣ ва аломатҳои тасдиқ пур шудаанд. Корт ҳолати «Ташаккур»-ро нишон медиҳад.|Идома\n\nДар поён воридкунии паём, замимаҳо ва эмодзи ҳастанд. Тамосҳо дар дохили виджет назди минтақаи мукотиба мемонанд."
    ]
  ],
  [
    "175744",
    "incoming-conversation-list",
    [
      "Очередь входящих диалогов",
      "Incoming conversation queue",
      "Навбати суҳбатҳои воридотӣ"
    ],
    [
      "Входящее обращение с индикаторами ожидания и сообщений.|Счётчики\n\nВкладка входящих показывает один диалог, строка клиента — отдельный индикатор двух сообщений.|Строка клиента\n\nАватар, имя, фрагмент «123» и жёлтая отметка ожидания объединены в компактной записи.|Рабочая область\n\nВ центре переписка не показана, справа выделена светлая панель. В нижней строке видна надпись о завершённом диалоге.",
      "An incoming request with waiting and message indicators.|Counters\n\nThe Incoming tab shows one conversation, while the customer row has a separate two-message indicator.|Customer row\n\nAn avatar, name, the snippet 123 and a yellow waiting badge form a compact entry.|Workspace\n\nNo history is displayed in the centre; a pale panel occupies the right. A completed-conversation notice is visible at the bottom.",
      "Муроҷиати воридотӣ бо нишондиҳандаҳои интизорӣ ва паёмҳо.|Ҳисобкунакҳо\n\nҶадвали воридотӣ як суҳбат ва сатри муштарӣ нишондиҳандаи алоҳидаи ду паёмро дорад.|Сатри муштарӣ\n\nАватар, ном, порчаи «123» ва нишонаи зарди интизорӣ дар як сабти хурд муттаҳид шудаанд.|Минтақаи кор\n\nДар марказ мукотиба нишон дода нашудааст ва дар рост панели равшан ҷойгир аст. Дар поён навиштаи анҷоми суҳбат намоён аст."
    ]
  ]
];

screens.push(...([
  [
    "175752",
    "conversation-awaiting-acceptance",
    [
      "Принятие входящего диалога",
      "Accepting an incoming conversation",
      "Қабули суҳбати воридотӣ"
    ],
    [
      "Входящий диалог в состоянии ожидания принятия оператором.|История\n\nВ центре видны приветствие и ответ посетителя с отметками времени. Жёлтый статус повторяется в списке и заголовке.|Клиент\n\nПравая карточка содержит имя, телефон, email и редактирование контактов.|Принятие\n\nВместо редактора сообщения показаны пояснение и широкая кнопка «Принять диалог». В заголовке доступна отметка спама.",
      "An incoming conversation waiting for operator acceptance.|History\n\nThe centre displays the greeting and visitor reply with timestamps. The yellow status appears in the list and header.|Customer\n\nThe right card contains name, phone, email and contact editing.|Acceptance\n\nAn explanation and wide Accept conversation button replace the message editor. A spam action is available in the header.",
      "Суҳбати воридотӣ дар интизори қабули оператор.|Таърих\n\nДар марказ истиқбол ва ҷавоби меҳмон бо вақт намоёнанд. Ҳолати зард дар рӯйхат ва сарлавҳа такрор мешавад.|Муштарӣ\n\nКорти рост ном, телефон, email ва таҳрири тамосҳоро дорад.|Қабул\n\nБа ҷойи муҳаррири паём шарҳ ва тугмаи васеи «Қабули суҳбат» ҳастанд. Дар сарлавҳа амали спам дастрас аст."
    ]
  ],
  [
    "175759",
    "conversation-active",
    [
      "Активный диалог оператора",
      "Active operator conversation",
      "Суҳбати фаъоли оператор"
    ],
    [
      "Рабочий экран переписки во вкладке «Мои диалоги».|Контекст\n\nЗелёные метки обозначают активный статус. Список обращений, сообщения и контакты клиента видны одновременно.|Управление\n\nЗаголовок содержит «Спам», «Выйти из диалога» и выделенную кнопку завершения.|Ответ\n\nНижняя панель объединяет режимы чата и email, поле сообщения, вложения, эмодзи и отправку. История остаётся над редактором.",
      "The conversation workspace under My conversations.|Context\n\nGreen badges indicate active status. The request list, messages and customer details are visible together.|Controls\n\nThe header contains Spam, Leave conversation and a highlighted Finish button.|Reply\n\nThe bottom panel combines Chat and Email modes, message input, attachments, emoji and sending. History remains above the editor.",
      "Муҳити мукотиба дар ҷадвали «Суҳбатҳои ман».|Муҳит\n\nНишонаҳои сабз ҳолати фаъолро нишон медиҳанд. Рӯйхати муроҷиатҳо, паёмҳо ва тамосҳо ҳамзамон намоёнанд.|Идоракунӣ\n\nСарлавҳа «Спам», «Баромадан аз суҳбат» ва тугмаи ҷудошудаи анҷомро дорад.|Ҷавоб\n\nПанели поён ҳолатҳои чат ва email, майдони паём, замимаҳо, эмодзи ва фиристоданро муттаҳид мекунад. Таърих болои муҳаррир мемонад."
    ]
  ],
  [
    "175824",
    "conversation-rejected",
    [
      "Отклонённый диалог",
      "Rejected conversation",
      "Суҳбати радшуда"
    ],
    [
      "Закрытый диалог с красной отметкой отклонения.|Статусы\n\nВо вкладке закрытых выбран отклонённый диалог. Соседняя запись имеет чёрный статус завершения, позволяя различать результаты обработки.|Контекст\n\nИстория и контакты остаются видимыми. Нижняя строка сообщает о завершённом диалоге.|Возобновление\n\nВ заголовке расположена зелёная кнопка «Возобновить диалог», предлагающая продолжить работу с обращением.",
      "A closed conversation with a red rejection badge.|Statuses\n\nThe rejected conversation is selected under Closed. A neighbouring entry has a black Finished badge, distinguishing handling outcomes.|Context\n\nHistory and contacts remain visible. The bottom line reports that the conversation is completed.|Resumption\n\nA green Resume conversation button in the header offers to continue handling the request.",
      "Суҳбати пӯшида бо нишонаи сурхи радкунӣ.|Ҳолатҳо\n\nДар ҷадвали пӯшида суҳбати радшуда интихоб шудааст. Сабти ҳамсоя ҳолати сиёҳи анҷомро дорад ва натиҷаҳои коркардро ҷудо мекунад.|Муҳит\n\nТаърих ва тамосҳо намоён мемонанд. Сатри поён анҷоми суҳбатро хабар медиҳад.|Барқароркунӣ\n\nТугмаи сабзи «Аз нав оғоз кардани суҳбат» дар сарлавҳа идомаи кор бо муроҷиатро пешниҳод мекунад."
    ]
  ],
  [
    "175834",
    "conversation-completed",
    [
      "Завершённый диалог",
      "Completed conversation",
      "Суҳбати анҷомёфта"
    ],
    [
      "Просмотр завершённой переписки и возврат к обработке.|История\n\nЧёрный статус «Завершён» повторяется в списке и заголовке. Сообщения обеих сторон сохраняют время отправки.|Клиент\n\nСправа находятся контакты и редактирование клиента. Они доступны в контексте закрытой переписки.|Возврат\n\nЗаголовок предлагает «Вернуть в обработку». Внизу вместо редактора отображается строка завершения диалога.",
      "Reviewing completed correspondence and returning it to processing.|History\n\nA black Finished status appears in the list and header. Messages from both sides retain timestamps.|Customer\n\nContacts and customer editing appear on the right within the closed-conversation context.|Return\n\nThe header offers Return to processing. A completion notice replaces the editor below.",
      "Дидани мукотибаи анҷомёфта ва баргардонидани он ба коркард.|Таърих\n\nҲолати сиёҳи «Анҷомёфта» дар рӯйхат ва сарлавҳа такрор мешавад. Паёмҳои ҳар ду тараф вақти фиристоданро доранд.|Муштарӣ\n\nТамосҳо ва таҳрири муштарӣ дар рост, дар муҳити мукотибаи пӯшида ҳастанд.|Бозгашт\n\nСарлавҳа «Баргардонидан ба коркард»-ро пешниҳод мекунад. Дар поён ба ҷойи муҳаррир сатри анҷом ҳаст."
    ]
  ],
  [
    "175844",
    "crm-customers",
    [
      "Клиенты CRM",
      "CRM customers",
      "Муштариёни CRM"
    ],
    [
      "Список клиентов с поиском, фильтрами и операциями CSV.|Отбор\n\nПоиск охватывает имя, телефон и email. Фильтры разделяют всех, новых, находящихся в работе, принятых, отклонённых и закрытых клиентов.|Таблица\n\nСтрока показывает имя, телефон, email, статус и описание. На снимке один клиент со статусом «Новый».|Действия\n\nВверху доступны импорт и экспорт CSV и добавление клиента. Редактирование и удаление находятся в конце строки.",
      "A customer list with search, filters and CSV operations.|Selection\n\nSearch covers name, phone and email. Filters separate all, new, in-progress, accepted, rejected and closed customers.|Table\n\nThe row displays name, phone, email, status and description. The screenshot contains one New customer.|Actions\n\nCSV import, CSV export and customer creation appear above. Edit and Delete are placed at the end of the row.",
      "Рӯйхати муштариён бо ҷустуҷӯ, филтрҳо ва амалҳои CSV.|Интихоб\n\nҶустуҷӯ ном, телефон ва email-ро фаро мегирад. Филтрҳо ҳамаи муштариён, нав, дар кор, қабулшуда, радшуда ва пӯшидаро ҷудо мекунанд.|Ҷадвал\n\nСатр ном, телефон, email, ҳолат ва тавсифро нишон медиҳад. Дар тасвир як муштарии «Нав» ҳаст.|Амалҳо\n\nВоридот, содироти CSV ва иловаи муштарӣ дар боло ҳастанд. Таҳрир ва ҳазф дар охири сатр ҷойгиранд."
    ]
  ],
  [
    "175849",
    "crm-customer-create",
    [
      "Добавление клиента",
      "Adding a customer",
      "Илова кардани муштарӣ"
    ],
    [
      "Модальная форма создания клиентской записи.|Контакты\n\nИмя отмечено обязательным. Телефон и email расположены рядом с подсказками формата.|Классификация\n\nНиже находятся канал, статус «Новый» и многострочное описание для заметок о клиенте.|Сохранение\n\nОтмена и сохранение размещены внизу, крестик — в заголовке. Затемнённая таблица на фоне сохраняет контекст раздела.",
      "A modal form for creating a customer record.|Contacts\n\nName is marked required. Phone and email sit side by side with format hints.|Classification\n\nChannel, New status and a multiline description for customer notes appear below.|Saving\n\nCancel and Save are at the bottom, with a close icon in the header. The dimmed table retains the section context.",
      "Шакли равзанавии сохтани сабти муштарӣ.|Тамосҳо\n\nНом ҳатмӣ аст. Телефон ва email бо намунаҳои формат паҳлуи ҳам ҷойгиранд.|Гурӯҳбандӣ\n\nДар поён канал, ҳолати «Нав» ва тавсифи чандсатрӣ барои қайдҳо ҳастанд.|Сабт\n\nБекоркунӣ ва сабт дар поён, салибча дар сарлавҳа ҷойгиранд. Ҷадвали тирашуда муҳити бахшро нигоҳ медорад."
    ]
  ],
  [
    "175855",
    "crm-customer-edit",
    [
      "Редактирование клиента",
      "Editing a customer",
      "Таҳрири муштарӣ"
    ],
    [
      "Изменение существующей карточки клиента.|Идентификация\n\nАватар с инициалом и имя в заголовке указывают открытую запись.|Поля\n\nИмя, телефон и email заполнены текущими данными. Канал, статус и описание находятся в той же форме.|Завершение\n\nСохранение и отмена доступны рядом в нижней части окна. Список клиентов остаётся виден на фоне.",
      "Editing an existing customer card.|Identification\n\nAn initial avatar and name in the header identify the open record.|Fields\n\nName, phone and email contain current values. Channel, status and description remain in the same form.|Completion\n\nSave and Cancel appear together at the bottom. The customer list remains visible in the background.",
      "Тағйир додани корти мавҷудаи муштарӣ.|Шиносоӣ\n\nАватар бо ҳарфи аввал ва ном дар сарлавҳа сабти кушодаро муайян мекунанд.|Майдонҳо\n\nНом, телефон ва email маълумоти ҷориро доранд. Канал, ҳолат ва тавсиф дар ҳамин шакл ҳастанд.|Анҷом\n\nСабт ва бекоркунӣ дар поёни равзана паҳлуи ҳам ҷойгиранд. Рӯйхати муштариён дар замина намоён мемонад."
    ]
  ],
  [
    "175904",
    "crm-deals-empty",
    [
      "Пустая доска сделок",
      "Empty deal board",
      "Тахтаи холии муомилаҳо"
    ],
    [
      "Kanban-раздел сделок до появления карточек.|Этапы\n\nДоска состоит из новых сделок, переговоров, выигранных и проигранных. Цветные заголовки содержат нулевые счётчики.|Зоны карточек\n\nПунктирные области с подписью «Перетащите сюда» показывают места размещения сделок.|Навигация\n\nСверху доступны таблица, Kanban и новая сделка. Слева находятся клиенты, сделки и задачи.",
      "The deal Kanban section before cards are added.|Stages\n\nThe board contains New, Negotiations, Won and Lost. Coloured headers contain zero counters.|Card zones\n\nDashed areas labelled Drag here show where deal cards belong.|Navigation\n\nTable, Kanban and New deal controls appear above. Customers, deals and tasks remain on the left.",
      "Бахши Kanban-и муомилаҳо пеш аз иловаи кортҳо.|Марҳилаҳо\n\nТахта аз нав, музокирот, бурдшуда ва бохташуда иборат аст. Сарлавҳаҳои ранга ҳисобкунакҳои сифрӣ доранд.|Минтақаҳои корт\n\nМинтақаҳои хатчин бо «Ба ин ҷо кашед» ҷойи муомилаҳоро нишон медиҳанд.|Роҳнамоӣ\n\nҶадвал, Kanban ва муомилаи нав дар боло ҳастанд. Муштариён, муомилаҳо ва вазифаҳо дар чап мемонанд."
    ]
  ],
  [
    "175923",
    "crm-deal-create",
    [
      "Создание сделки",
      "Creating a deal",
      "Сохтани муомила"
    ],
    [
      "Форма новой сделки с выбранным клиентом и раскрытым статусом.|Основные данные\n\nНазвание обязательно. Выбранный клиент показан карточкой с контактами и действием снятия выбора.|Условия\n\nУказаны сумма 100 и валюта TJS. Список статусов содержит новые сделки, переговоры, выигрыш и проигрыш.|Ответственность\n\nРядом расположен выбор ответственного, ниже — описание. Отмена и сохранение завершают форму.",
      "A new-deal form with a selected customer and expanded status menu.|Main details\n\nTitle is required. The selected customer appears as a contact card with a remove-selection action.|Terms\n\nThe amount is 100 in TJS. The status menu contains New, Negotiations, Won and Lost.|Ownership\n\nAn assignee selector sits nearby, with a description below. Cancel and Save complete the form.",
      "Шакли муомилаи нав бо муштарии интихобшуда ва рӯйхати кушодаи ҳолатҳо.|Маълумоти асосӣ\n\nНом ҳатмӣ аст. Муштарии интихобшуда ҳамчун корти тамос бо амали бекор кардани интихоб намоён аст.|Шартҳо\n\nМаблағ 100 TJS аст. Рӯйхати ҳолатҳо нав, музокирот, бурд ва бохтро дорад.|Масъулият\n\nИнтихоби масъул наздик ва тавсиф дар поён ҷойгиранд. Бекоркунӣ ва сабт шаклро анҷом медиҳанд."
    ]
  ],
  [
    "175931",
    "crm-deal-saved",
    [
      "Новая сделка на доске",
      "New deal on the board",
      "Муомилаи нав дар тахта"
    ],
    [
      "Карточка сделки после сохранения в первом этапе Kanban.|Подтверждение\n\nЗелёное уведомление сообщает о сохранении. Счётчик новых сделок показывает одну запись.|Карточка\n\nВнутри видны название, клиент, сумма 100 TJS, значок настройки и ноль задач.|Сводка\n\nЗаголовок этапа содержит сумму 100. Остальные колонки пусты и сохраняют зоны переноса карточек.",
      "A saved deal card in the first Kanban stage.|Confirmation\n\nA green toast reports successful saving. The New stage counter shows one record.|Card\n\nThe card displays title, customer, 100 TJS, a settings icon and zero tasks.|Summary\n\nThe stage header contains a total of 100. Other columns are empty and retain their card drop zones.",
      "Корти сабтшудаи муомила дар марҳилаи аввали Kanban.|Тасдиқ\n\nОгоҳии сабз сабтро хабар медиҳад. Ҳисобкунаки муомилаҳои нав як сабтро нишон медиҳад.|Корт\n\nНом, муштарӣ, 100 TJS, нишонаи танзим ва сифр вазифа намоёнанд.|Ҷамъбаст\n\nСарлавҳаи марҳила маблағи 100-ро дорад. Сутунҳои дигар холӣ буда, минтақаҳои интиқоли кортҳоро нигоҳ медоранд."
    ]
  ],
  [
    "175936",
    "crm-deal-won",
    [
      "Сделка в этапе «Выиграно»",
      "Deal in the Won stage",
      "Муомила дар марҳилаи бурд"
    ],
    [
      "Сделка с суммой 100 TJS в выигранном этапе.|Расположение\n\nКарточка находится в третьей зелёной колонке. Этап новых сделок теперь пуст.|Показатели\n\nЗаголовок выигранных сделок показывает одну запись и сумму 100.|Детали\n\nНазвание, клиент, сумма и число задач остаются на карточке, сохраняя узнаваемость сделки при смене этапа.",
      "A 100 TJS deal in the Won stage.|Position\n\nThe card occupies the third, green column. The New stage is now empty.|Indicators\n\nThe Won header shows one record and a total of 100.|Details\n\nTitle, customer, amount and task count remain on the card, keeping the deal recognisable across stages.",
      "Муомилаи 100 TJS дар марҳилаи бурд.|Ҷойгиршавӣ\n\nКорт дар сутуни сеюми сабз аст. Марҳилаи муомилаҳои нав холӣ шудааст.|Нишондиҳандаҳо\n\nСарлавҳаи бурд як сабт ва маблағи 100-ро нишон медиҳад.|Ҷузъиёт\n\nНом, муштарӣ, маблағ ва шумораи вазифаҳо дар корт мемонанд ва шинохти муомиларо ҳангоми тағйири марҳила осон мекунанд."
    ]
  ],
  [
    "175945",
    "crm-deal-drag",
    [
      "Перетаскивание сделки",
      "Dragging a deal",
      "Кашонидани муомила"
    ],
    [
      "Промежуточное состояние переноса карточки между этапами.|Исходная позиция\n\nВ колонке «Выиграно» карточка полупрозрачна и обозначает исходное место.|Цель\n\nОбласть «Проиграно» выделена рамкой и фоном. Перемещаемая карточка находится поверх целевой зоны.|Контекст\n\nНазвание, клиент и сумма остаются читаемыми. Снимок показывает процесс переноса, а не подтверждение сохранения нового статуса.",
      "An intermediate state while moving a card between stages.|Source\n\nThe translucent card in Won marks its original position.|Target\n\nThe Lost area is highlighted with a border and background. The dragged card floats over the target zone.|Context\n\nTitle, customer and amount remain readable. The image shows dragging rather than confirmation of a saved status change.",
      "Ҳолати миёнаи интиқоли корт байни марҳилаҳо.|Ҷойи аввал\n\nКорти нимшаффоф дар сутуни бурд ҷойи ибтидоиро нишон медиҳад.|Мақсад\n\nМинтақаи бохт бо чорчӯба ва замина ҷудо шудааст. Корти кашонидашаванда болои он аст.|Муҳит\n\nНом, муштарӣ ва маблағ хонда мешаванд. Тасвир раванди интиқолро нишон медиҳад, на тасдиқи сабти ҳолати нав."
    ]
  ],
  [
    "175950",
    "crm-tasks-empty",
    [
      "Kanban-доска задач",
      "Task Kanban board",
      "Тахтаи Kanban-и вазифаҳо"
    ],
    [
      "Пустая доска задач с тремя этапами обработки.|Этапы\n\nКолонки «Ожидает», «В работе» и «Выполнено» имеют нулевые счётчики.|Размещение\n\nПод заголовками находятся пунктирные зоны с подсказками перетаскивания и значками задач.|Управление\n\nСверху доступны таблица, Kanban и создание новой задачи. Боковое меню сохраняет связь с клиентами и сделками.",
      "An empty task board with three processing stages.|Stages\n\nWaiting, In progress and Completed columns have zero counters.|Placement\n\nDashed zones below the headers contain drag hints and task icons.|Controls\n\nTable, Kanban and New task controls appear above. The side menu retains links to customers and deals.",
      "Тахтаи холии вазифаҳо бо се марҳилаи коркард.|Марҳилаҳо\n\nСутунҳои «Интизор», «Дар кор» ва «Иҷрошуда» ҳисобкунакҳои сифрӣ доранд.|Ҷойгиркунӣ\n\nДар зери сарлавҳаҳо минтақаҳои хатчин бо дастури кашонидан ва нишонаҳои вазифа ҳастанд.|Идоракунӣ\n\nҶадвал, Kanban ва сохтани вазифаи нав дар боло ҳастанд. Менюи паҳлуӣ робита бо муштариён ва муомилаҳоро нигоҳ медорад."
    ]
  ],
  [
    "175956",
    "crm-deals-table",
    [
      "Таблица сделок",
      "Deal table",
      "Ҷадвали муомилаҳо"
    ],
    [
      "Табличное представление сделок с поиском и изменением статуса.|Столбцы\n\nВ строке показаны название, клиент, сумма, статус, ответственный и дата создания. Пример содержит 100 TJS и выигранную сделку.|Действия\n\nСтатус представлен списком выбора, ниже виден счётчик задач. В конце строки находятся изменение и удаление.|Поиск\n\nПоле поиска по названию или клиенту расположено рядом с переключателем таблицы и Kanban и кнопкой новой сделки.",
      "A deal table with search and status selection.|Columns\n\nThe row shows title, customer, amount, status, assignee and creation date. The example contains a Won deal for 100 TJS.|Actions\n\nStatus uses a selector with a task counter below. Edit and Delete appear at the end of the row.|Search\n\nSearch by title or customer sits beside the Table and Kanban switch and New deal button.",
      "Ҷадвали муомилаҳо бо ҷустуҷӯ ва интихоби ҳолат.|Сутунҳо\n\nСатр ном, муштарӣ, маблағ, ҳолат, масъул ва санаи сохтанро нишон медиҳад. Намуна муомилаи бурдшудаи 100 TJS дорад.|Амалҳо\n\nҲолат рӯйхати интихобӣ ва дар поён ҳисобкунаки вазифаҳо дорад. Тағйир ва ҳазф дар охири сатр ҳастанд.|Ҷустуҷӯ\n\nҶустуҷӯ аз рӯйи ном ё муштарӣ назди гузариши ҷадвал ва Kanban ва тугмаи муомилаи нав ҷойгир аст."
    ]
  ]
] satisfies Screen[]));

screens.push(...([
  [
    "180008",
    "profile-square-preview",
    [
      "Профиль и предпросмотр чата",
      "Profile and chat preview",
      "Профил ва пешнамоиши чат"
    ],
    [
      "Настройки оператора рядом с предпросмотром квадратного чата.|Профиль\n\nФорма содержит имя оператора, аватар с изменением фото и должность или отдел. В примере указаны MD и менеджер.|Оформление\n\nДоступны палитры фона и текста, приветствие, тип отображения и включённая анимация кнопки. Ниже начинаются контактные поля.|Предпросмотр\n\nСправа видны шапка с аватаром, имя, должность, приветствие и нижняя панель чата. Макет позволяет сопоставить настройки с внешним видом.",
      "Operator settings beside a square chat preview.|Profile\n\nThe form contains operator name, avatar upload and position or department. The example uses MD and manager.|Appearance\n\nControls include background and text palettes, greeting, display type and enabled button animation. Contact fields begin below.|Preview\n\nThe right panel shows the avatar header, name, position, greeting and bottom chat controls. The mockup places settings alongside their visual context.",
      "Танзимоти оператор назди пешнамоиши чати чоркунҷа.|Профил\n\nШакл номи оператор, аватар бо ивазкунии акс ва вазифа ё шуъбаро дорад. Дар намуна MD ва менеҷер нишон дода шудаанд.|Ороиш\n\nРангҳои замина ва матн, истиқбол, намуди намоиш ва аниматсияи фаъоли тугма дастрасанд. Дар поён майдонҳои тамос оғоз мешаванд.|Пешнамоиш\n\nДар рост сарлавҳа бо аватар, ном, вазифа, истиқбол ва панели поёнии чат ҳастанд. Макет танзимотро назди намуди зоҳирӣ нишон медиҳад."
    ]
  ],
  [
    "180013",
    "profile-round-preview",
    [
      "Круглая кнопка чата",
      "Round chat button",
      "Тугмаи гирди чат"
    ],
    [
      "Выбор круглого отображения в настройках профиля.|Тип виджета\n\nВ поле типа чата выбран «Круглый». Поле находится под приветственным сообщением и выделено фокусом.|Предпросмотр\n\nСправа вместо развёрнутой карточки показана зелёная круглая кнопка с белой иконкой сообщения и подписью формы.|Остальные настройки\n\nИмя, фото, должность, палитры цветов и контакты остаются в форме. Переключатель анимации включён.",
      "Selecting a round display in profile settings.|Widget type\n\nRound is selected in the chat type field below the greeting. The focused selector highlights the current choice.|Preview\n\nThe right side shows a green circular button with a white message icon and a shape label instead of an expanded chat card.|Other settings\n\nName, photo, position, colour palettes and contacts remain in the form. The animation switch is enabled.",
      "Интихоби намуди гирд дар танзимоти профил.|Намуди виджет\n\nДар майдони намуди чат зери истиқбол «Гирд» интихоб шудааст. Майдони дорои фокус интихоби ҷориро таъкид мекунад.|Пешнамоиш\n\nДар рост ба ҷойи корти кушода тугмаи сабзи гирд бо нишонаи сафеди паём ва номи шакл ҳаст.|Танзимоти дигар\n\nНом, акс, вазифа, рангҳо ва тамосҳо дар шакл мемонанд. Калиди аниматсия фаъол аст."
    ]
  ],
  [
    "180024",
    "profile-contacts-validation",
    [
      "Контакты и проверка данных",
      "Contacts and data validation",
      "Тамосҳо ва санҷиши маълумот"
    ],
    [
      "Нижняя часть настроек профиля с контактами и проверками.|Поведение кнопки\n\nПоказаны приветствие, квадратный тип и включённая анимация. Подсказка объясняет пульсацию кнопки до открытия чата.|Контакты\n\nОтдельные поля предназначены для ссылок WhatsApp и Telegram и номера телефона, с примерами формата.|Проверки и сохранение\n\nПроверка email и номера телефона установлена в «Да». Широкая зелёная кнопка сохранения завершает форму.",
      "The lower profile settings with contacts and validation options.|Button behaviour\n\nThe greeting, square type and enabled animation are visible. A hint explains that the button pulses until the chat opens.|Contacts\n\nSeparate fields accept WhatsApp and Telegram links and a phone number, with format examples.|Validation and saving\n\nEmail and phone validation are set to Yes. A wide green Save button completes the form.",
      "Қисми поёнии танзимоти профил бо тамосҳо ва санҷишҳо.|Рафтори тугма\n\nИстиқбол, намуди чоркунҷа ва аниматсияи фаъол намоёнанд. Шарҳ тапиши тугмаро то кушодани чат мефаҳмонад.|Тамосҳо\n\nМайдонҳои алоҳида барои пайвандҳои WhatsApp, Telegram ва рақами телефон бо намунаи формат ҳастанд.|Санҷиш ва сабт\n\nСанҷиши email ва телефон ба «Ҳа» гузошта шудааст. Тугмаи васеи сабз шаклро анҷом медиҳад."
    ]
  ],
  [
    "180032",
    "owner-account-settings",
    [
      "Учётная запись владельца",
      "Owner account settings",
      "Танзимоти ҳисоби соҳиб"
    ],
    [
      "Настройки уведомлений и пароля учётной записи.|Email\n\nОсновной адрес показан сверху. Ниже размещены пустой список адресов уведомлений, добавление адреса и отдельная кнопка сохранения.|Telegram\n\nБлок сообщает, что Telegram не подключён, и предлагает получить код. Инструкция связывает отправку кода боту с уведомлениями о неотвеченных чатах.|Пароль\n\nВ нижней секции расположены маскированное поле нового пароля и кнопка изменения. Разделители отделяют независимые настройки.",
      "Notification and password settings for the account.|Email\n\nThe primary address appears above. Below are an empty notification address list, Add address and a separate Save button.|Telegram\n\nThe section reports that Telegram is not connected and offers to generate a code. Instructions link sending the code to the bot with unanswered-chat notifications.|Password\n\nA masked new-password field and Change password button occupy the lower section. Dividers separate the independent settings.",
      "Танзимоти огоҳиномаҳо ва пароли ҳисоб.|Email\n\nСуроғаи асосӣ дар боло нишон дода шудааст. Дар поён рӯйхати холии суроғаҳои огоҳинома, иловаи суроға ва тугмаи алоҳидаи сабт ҳастанд.|Telegram\n\nБахш пайваст набудани Telegram-ро хабар дода, гирифтани рамзро пешниҳод мекунад. Дастур фиристодани рамз ба ботро бо огоҳӣ аз чатҳои беҷавоб мепайвандад.|Парол\n\nМайдони пинҳоншудаи пароли нав ва тугмаи ивазкунӣ дар поён ҳастанд. Хатҳои ҷудокунанда танзимоти мустақилро ҷудо мекунанд."
    ]
  ],
  [
    "180039",
    "employees-empty",
    [
      "Сотрудники: пустой список",
      "Employees: empty list",
      "Кормандон: рӯйхати холӣ"
    ],
    [
      "Раздел команды до добавления первого сотрудника.|Лимит\n\nВерхняя карточка показывает использование нуля из одного слота, начальный тариф и срок до 27.09.2026. Полоса заполнения пуста.|Создание\n\nКнопка «Добавить сотрудника» расположена справа между лимитом и списком.|Пустое состояние\n\nВ основной карточке находятся значок группы и пояснение, что сотрудники ещё не добавлены. Боковое меню сохраняет доступ к другим настройкам.",
      "The team section before the first employee is added.|Limit\n\nThe upper card shows zero of one slots used, the Initial plan and expiry on 27 September 2026. The usage bar is empty.|Creation\n\nAdd employee appears on the right between the limit card and list.|Empty state\n\nThe main card contains a group icon and a message that no employees have been added. The side menu retains access to other settings.",
      "Бахши гурӯҳ пеш аз иловаи корманди аввал.|Маҳдудият\n\nКорти боло истифодаи сифр аз як ҷой, тарофаи ибтидоӣ ва муҳлат то 27.09.2026-ро нишон медиҳад. Хатти истифода холӣ аст.|Сохтан\n\nТугмаи «Иловаи корманд» дар рост байни корт ва рӯйхат ҷойгир аст.|Ҳолати холӣ\n\nДар корти асосӣ нишонаи гурӯҳ ва паёми ҳанӯз илова нашудани кормандон ҳастанд. Менюи паҳлуӣ дастрасиро ба танзимоти дигар нигоҳ медорад."
    ]
  ],
  [
    "180042",
    "employee-create-initial",
    [
      "Форма добавления сотрудника",
      "Employee creation form",
      "Шакли иловаи корманд"
    ],
    [
      "Первое состояние формы сотрудника с частично заполненными полями.|Фото\n\nВверху находятся круглый заполнитель аватара и стандартный выбор файла. Файл пока не выбран.|Учётные данные\n\nИмя обязательно и пусто; email уже содержит значение, пароль скрыт символами. Причина заполнения полей на снимке не указана.|Дополнительно\n\nНиже расположены должность и никнейм. Отмена и сохранение находятся справа внизу окна.",
      "The initial employee form with some fields filled.|Photo\n\nA circular avatar placeholder and standard file picker appear above. No file is selected yet.|Account details\n\nName is required and empty; email already contains a value and the password is masked. The screenshot does not indicate how those fields were filled.|Additional details\n\nPosition and nickname appear below. Cancel and Save sit at the lower right of the modal.",
      "Ҳолати аввали шакли корманд бо баъзе майдонҳои пуршуда.|Акс\n\nДар боло ҷойнишини гирди аватар ва интихоби стандартии файл ҳастанд. Ҳанӯз файл интихоб нашудааст.|Маълумоти ҳисоб\n\nНом ҳатмӣ ва холӣ аст; email арзиш дорад ва парол пинҳон аст. Сабаби пур шудани ин майдонҳо дар тасвир гуфта нашудааст.|Иловагӣ\n\nДар поён вазифа ва номи корбар ҳастанд. Бекоркунӣ ва сабт дар кунҷи поёнии рост ҷойгиранд."
    ]
  ],
  [
    "180052",
    "employee-create-blank",
    [
      "Пустая форма сотрудника",
      "Blank employee form",
      "Шакли холии корманд"
    ],
    [
      "Форма нового сотрудника, подготовленная к вводу данных.|Обязательные поля\n\nИмя, email и пароль отмечены звёздочками и пусты. Поле имени выделено фокусом ввода.|Профиль\n\nФото выбирается отдельным файловым полем. Должность и никнейм расположены рядом под учётными данными.|Завершение\n\nСохранение и отмена находятся внизу. Затемнённый фон показывает исходный раздел сотрудников с доступным слотом.",
      "A new employee form ready for data entry.|Required fields\n\nName, email and password are empty and marked with asterisks. The name field has input focus.|Profile\n\nA separate file field selects the photo. Position and nickname sit side by side below the account details.|Completion\n\nSave and Cancel appear below. The dimmed background shows the original employee section with an available slot.",
      "Шакли корманди нав барои ворид кардани маълумот.|Майдонҳои ҳатмӣ\n\nНом, email ва парол холӣ буда, ситорача доранд. Майдони ном фокуси воридкунӣ дорад.|Профил\n\nАкс бо майдони алоҳидаи файл интихоб мешавад. Вазифа ва номи корбар зери маълумоти ҳисоб паҳлуи ҳам ҳастанд.|Анҷом\n\nСабт ва бекоркунӣ дар поён ҷойгиранд. Заминаи тирашуда бахши кормандонро бо ҷойи дастрас нишон медиҳад."
    ]
  ],
  [
    "180159",
    "employee-create-filled",
    [
      "Заполненная карточка сотрудника",
      "Completed employee form",
      "Шакли пуршудаи корманд"
    ],
    [
      "Данные тестового сотрудника перед сохранением.|Аватар\n\nВыбранное изображение показано в круглом предпросмотре. Рядом отображается имя загруженного файла.|Поля\n\nЗаполнены имя Test Employer, тестовый email, скрытый пароль, должность и никнейм. Поле имени сохраняет фокус.|Подтверждение\n\nЗелёная кнопка сохранения и отмена находятся внизу. Снимок показывает заполненную форму до появления сотрудника в таблице.",
      "Test employee details before saving.|Avatar\n\nThe selected image appears in a circular preview. The uploaded filename is displayed beside it.|Fields\n\nTest Employer, a test email, masked password, position and nickname are filled. The name field retains focus.|Confirmation\n\nA green Save button and Cancel appear below. The screenshot shows the completed form before the employee appears in the table.",
      "Маълумоти корманди санҷишӣ пеш аз сабт.|Аватар\n\nТасвири интихобшуда дар пешнамоиши гирд намоён аст. Номи файли боршуда дар паҳлуяш ҳаст.|Майдонҳо\n\nTest Employer, email-и санҷишӣ, пароли пинҳон, вазифа ва номи корбар пур шудаанд. Майдони ном фокус дорад.|Тасдиқ\n\nТугмаи сабзи сабт ва бекоркунӣ дар поён ҳастанд. Тасвир шакли пуршударо пеш аз пайдоиши корманд дар ҷадвал нишон медиҳад."
    ]
  ],
  [
    "180214",
    "employees-limit-reached",
    [
      "Список сотрудников и лимит",
      "Employee list and limit",
      "Рӯйхати кормандон ва маҳдудият"
    ],
    [
      "Таблица команды после заполнения единственного слота.|Использование\n\nВверху показано «1 из 1» и полностью заполненная красная полоса. Кнопка добавления сотрудника неактивна.|Запись\n\nСтрока содержит аватар, имя, email, должность и никнейм созданного тестового сотрудника.|Управление\n\nРедактирование и удаление доступны в конце строки. Карточка лимита остаётся над таблицей и поясняет текущую доступность добавления.",
      "The team table after the only slot is filled.|Usage\n\nThe header shows one of one and a full red bar. Add employee is disabled.|Record\n\nThe row contains the test employee’s avatar, name, email, position and nickname.|Management\n\nEdit and Delete appear at the end of the row. The limit card remains above the table and explains the current availability of adding staff.",
      "Ҷадвали гурӯҳ пас аз пур шудани ҷойи ягона.|Истифода\n\nДар боло «1 аз 1» ва хатти пурраи сурх ҳастанд. Тугмаи иловаи корманд ғайрифаъол аст.|Сабт\n\nСатр аватар, ном, email, вазифа ва номи корбари корманди санҷиширо дорад.|Идоракунӣ\n\nТаҳрир ва ҳазф дар охири сатр дастрасанд. Корти маҳдудият болои ҷадвал мемонад ва дастрасии ҷории иловаи кормандро мефаҳмонад."
    ]
  ],
  [
    "180219",
    "employee-edit",
    [
      "Редактирование сотрудника",
      "Editing an employee",
      "Таҳрири корманд"
    ],
    [
      "Изменение профиля и учётных данных существующего сотрудника.|Текущие значения\n\nВ форме видны аватар, имя, email, должность и никнейм. Новый файл фотографии ещё не выбран.|Пароль\n\nПодсказка предлагает оставить поле пустым, чтобы не менять пароль. На снимке поле содержит скрытое значение.|Действия\n\nОтмена и сохранение расположены внизу. На фоне остаются таблица сотрудника и занятый лимит слотов.",
      "Editing an existing employee’s profile and account details.|Current values\n\nThe form shows avatar, name, email, position and nickname. No replacement photo file has been selected.|Password\n\nA hint says to leave the field empty to keep the password unchanged. The screenshot currently shows a masked value.|Actions\n\nCancel and Save appear below. The employee table and full slot usage remain visible in the background.",
      "Тағйири профил ва маълумоти ҳисоби корманди мавҷуда.|Арзишҳои ҷорӣ\n\nАватар, ном, email, вазифа ва номи корбар намоёнанд. Файли нави акс ҳанӯз интихоб нашудааст.|Парол\n\nШарҳ пешниҳод мекунад, ки майдон барои бетағйир мондани парол холӣ гузошта шавад. Дар тасвир арзиши пинҳон ҳаст.|Амалҳо\n\nБекоркунӣ ва сабт дар поён ҷойгиранд. Ҷадвали корманд ва маҳдудияти пуршуда дар замина мемонанд."
    ]
  ]
] satisfies Screen[]));

screens.push(...([
  [
    "180238",
    "widget-installation-code",
    [
      "Код установки виджета",
      "Widget installation code",
      "Рамзи насби виджет"
    ],
    [
      "Раздел настроек с кодом подключения чата к сайту.|Фрагмент HTML\n\nТёмный блок содержит подключение скрипта и кнопку копирования. Часть адреса на исходном снимке скрыта и сохранена в таком виде.|Инструкция\n\nТекст предлагает вставить код перед закрывающим тегом head на каждой странице сайта.|После вставки\n\nСледующий пункт предлагает сохранить страницу и обновить сайт, отмечая возможное ожидание первой загрузки. Это показанная инструкция, а не подтверждение установки.",
      "A settings section containing website chat installation code.|HTML snippet\n\nA dark block contains the script reference and a Copy button. Part of the address is obscured in the source screenshot and remains so.|Instructions\n\nThe text asks users to insert the code before the closing head tag on each website page.|After insertion\n\nThe next step asks users to save and refresh the page and notes a possible initial loading delay. These are displayed instructions, not installation confirmation.",
      "Бахши танзимот бо рамзи пайваст кардани чат ба сайт.|Порчаи HTML\n\nБлоки торик пайвасти скрипт ва тугмаи нусхабардориро дорад. Қисми суроға дар тасвири аслӣ пинҳон аст ва ҳамин тавр нигоҳ дошта шудааст.|Дастур\n\nМатн ҷойгир кардани рамзро пеш аз теги пӯшидаи head дар ҳар саҳифаи сайт пешниҳод мекунад.|Баъди ҷойгиркунӣ\n\nҚадами навбатӣ сабт ва навсозии саҳифаро пешниҳод карда, эҳтимоли интизории боркунии аввалро мегӯяд. Ин дастур аст, на тасдиқи насб."
    ]
  ],
  [
    "180249",
    "interface-language-menu",
    [
      "Выбор языка интерфейса",
      "Interface language selection",
      "Интихоби забони интерфейс"
    ],
    [
      "Раскрытое языковое меню рядом с навигацией кабинета.|Языки\n\nПредставлены русский, английский, таджикский, узбекский, кыргызский, казахский, персидский и арабский. Рядом с названиями стоят короткие коды.|Текущий выбор\n\nРусский выделен светло-зелёной строкой. Меню привязано к кнопке языка в нижней части левой панели.|Контекст\n\nНа фоне остаются настройки профиля и предпросмотр виджета. Снимок показывает варианты выбора, а не перевод всех страниц.",
      "An expanded language menu beside the account navigation.|Languages\n\nOptions include Russian, English, Tajik, Uzbek, Kyrgyz, Kazakh, Persian and Arabic, with short codes beside their names.|Current choice\n\nRussian is highlighted in pale green. The menu is anchored to the language button near the bottom of the left bar.|Context\n\nProfile settings and the widget preview remain behind it. The screenshot demonstrates available choices rather than translations of every page.",
      "Менюи кушодаи забон назди роҳнамоии кабинет.|Забонҳо\n\nРусӣ, англисӣ, тоҷикӣ, ӯзбекӣ, қирғизӣ, қазоқӣ, форсӣ ва арабӣ бо рамзҳои кӯтоҳ пешниҳод шудаанд.|Интихоби ҷорӣ\n\nРусӣ бо сатри сабзи равшан ҷудо шудааст. Меню ба тугмаи забон дар поёни панели чап пайваст аст.|Муҳит\n\nТанзимоти профил ва пешнамоиши виджет дар замина мемонанд. Тасвир вариантҳои интихобро нишон медиҳад, на тарҷумаи ҳамаи саҳифаҳоро."
    ]
  ],
  [
    "180300",
    "operator-offline-status",
    [
      "Статус оператора «Не в сети»",
      "Operator offline status",
      "Ҳолати офлайни оператор"
    ],
    [
      "Отображение недоступности оператора в боковой панели.|Индикатор\n\nВнизу навигации показаны серая точка и подпись «Не в сети». Всплывающая подсказка повторяет статус.|Рабочая страница\n\nНастройки профиля, цвета, приветствие, тип чата и контактные поля остаются открытыми.|Предпросмотр\n\nМакет чата сохраняется справа от формы. Экран фиксирует визуальный статус оператора; изменение маршрутизации обращений здесь не показано.",
      "Operator unavailability displayed in the side bar.|Indicator\n\nA grey dot and Offline label appear near the bottom of navigation. A tooltip repeats the status.|Working page\n\nProfile settings, colours, greeting, chat type and contact fields remain open.|Preview\n\nThe chat mockup remains beside the form. The screen captures the operator’s visual status; request routing changes are not shown.",
      "Намоиши дастнорасии оператор дар панели паҳлуӣ.|Нишондиҳанда\n\nДар поёни роҳнамоӣ нуқтаи хокистарӣ ва навиштаи «Офлайн» ҳастанд. Маслиҳати пайдошаванда ҳолатро такрор мекунад.|Саҳифаи кор\n\nТанзимоти профил, рангҳо, истиқбол, намуди чат ва майдонҳои тамос кушода мемонанд.|Пешнамоиш\n\nМакети чат назди шакл мемонад. Экран ҳолати зоҳирии операторро нишон медиҳад; тағйири тақсимоти муроҷиатҳо намоиш дода нашудааст."
    ]
  ],
  [
    "180314",
    "employee-conversations-overview",
    [
      "Раздел диалогов сотрудников",
      "Employee conversation section",
      "Бахши суҳбатҳои кормандон"
    ],
    [
      "Группа диалогов сотрудника во вкладке «Мои диалоги».|Дерево сотрудников\n\nСлева появился раздел «Диалоги сотрудников» с аватаром, именем Test Employer и раскрываемой строкой. В группе указано отсутствие диалогов.|Текущий просмотр\n\nВ центре остаётся ранее выбранная завершённая переписка с историей и контактами справа.|Возврат к работе\n\nВ заголовке доступно возвращение диалога в обработку. Группировка сотрудников и текущая переписка представлены в одном рабочем пространстве.",
      "An employee conversation group under My conversations.|Employee tree\n\nThe left side contains an Employee conversations section with an avatar, Test Employer and an expandable row. The group reports no conversations.|Current view\n\nThe previously selected completed conversation remains in the centre, with history and contacts on the right.|Returning to work\n\nThe header offers to return the conversation to processing. Employee grouping and the current conversation share one workspace.",
      "Гурӯҳи суҳбатҳои корманд дар «Суҳбатҳои ман».|Дарахти кормандон\n\nДар чап бахши «Суҳбатҳои кормандон» бо аватар, Test Employer ва сатри кушодашаванда ҳаст. Гурӯҳ набудани суҳбатҳоро хабар медиҳад.|Намоиши ҷорӣ\n\nМукотибаи анҷомёфтаи қаблан интихобшуда дар марказ, таърих ва тамосҳо дар рост мемонанд.|Бозгашт ба кор\n\nСарлавҳа баргардонидани суҳбат ба коркардро пешниҳод мекунад. Гурӯҳбандии кормандон ва суҳбати ҷорӣ як муҳити корӣ доранд."
    ]
  ],
  [
    "180344",
    "employee-account-settings",
    [
      "Учётная запись сотрудника",
      "Employee account settings",
      "Танзимоти ҳисоби корманд"
    ],
    [
      "Настройки уведомлений и пароля в кабинете сотрудника.|Навигация\n\nНа снимке доступны чаты, CRM и настройки; в подменю показана учётная запись. Внизу виден профиль тестового сотрудника.|Уведомления\n\nОтображаются основной email, пустой список адресов уведомлений, добавление и сохранение. Блок Telegram предлагает получить код подключения.|Пароль\n\nОтдельная секция содержит скрытое поле нового пароля и кнопку изменения. Экран демонстрирует доступный сотруднику вид настроек.",
      "Notification and password settings in the employee account.|Navigation\n\nThe screenshot provides Chats, CRM and Settings, with Account in the submenu. The test employee profile appears below.|Notifications\n\nThe primary email, empty notification address list, Add and Save are visible. The Telegram section offers a connection code.|Password\n\nA separate section contains a masked new-password field and a change button. The screen demonstrates the employee’s settings view.",
      "Танзимоти огоҳиномаҳо ва парол дар кабинети корманд.|Роҳнамоӣ\n\nДар тасвир чатҳо, CRM ва танзимот дастрасанд; зерменю ҳисобро нишон медиҳад. Профили корманди санҷишӣ дар поён аст.|Огоҳиномаҳо\n\nEmail-и асосӣ, рӯйхати холии суроғаҳои огоҳинома, илова ва сабт намоёнанд. Бахши Telegram рамзи пайвастшавиро пешниҳод мекунад.|Парол\n\nБахши алоҳида майдони пинҳони пароли нав ва тугмаи ивазкуниро дорад. Экран намуди танзимоти кормандро нишон медиҳад."
    ]
  ],
  [
    "180454",
    "visitor-follow-up-message",
    [
      "Повторное сообщение посетителя",
      "Visitor follow-up message",
      "Паёми такрории меҳмон"
    ],
    [
      "История виджета с новым сообщением посетителя.|Контакты\n\nВверху остаётся заполненная контактная карточка с галочками и благодарностью. Ниже поясняется использование указанных контактов для ответа.|Сообщения\n\nВ ленте видны прежнее «123» и новое тестовое сообщение, время и отметки доставки. Текст сообщения сам по себе не подтверждает автоматическое открытие диалога.|Ввод\n\nВнизу расположены поле сообщения, отправка, вложения и эмодзи. Виджет сохраняет историю обращения в едином окне.",
      "Widget history with a new visitor message.|Contacts\n\nThe completed contact card retains check marks and a thank-you state. A note below explains using those contacts for replies.|Messages\n\nThe feed contains the earlier 123 and a new test message with times and delivery indicators. Message wording alone does not establish automatic conversation reopening.|Input\n\nMessage input, sending, attachments and emoji appear below. The widget keeps the request history in one window.",
      "Таърихи виджет бо паёми нави меҳмон.|Тамосҳо\n\nКорти пуршуда аломатҳои тасдиқ ва ҳолати ташаккурро нигоҳ медорад. Шарҳи поён истифодаи тамосҳоро барои ҷавоб мефаҳмонад.|Паёмҳо\n\nПаёми пешинаи «123» ва паёми нави санҷишӣ бо вақт ва нишонаҳои расонидан ҳастанд. Худи матни паём кушодашавии худкори суҳбатро тасдиқ намекунад.|Воридкунӣ\n\nМайдони паём, фиристодан, замимаҳо ва эмодзи дар поёнанд. Виджет таърихи муроҷиатро дар як равзана нигоҳ медорад."
    ]
  ],
  [
    "180504",
    "employee-incoming-queue",
    [
      "Входящие в кабинете сотрудника",
      "Employee incoming queue",
      "Воридотӣ дар кабинети корманд"
    ],
    [
      "Очередь сотрудника с одним ожидающим обращением.|Список\n\nВходящая вкладка показывает один диалог. В строке клиента находятся жёлтый статус ожидания, индикатор одного сообщения и фрагмент истории.|Пустой выбор\n\nВ центре показано «Выберите диалог» с подсказкой нажать клиента слева. Конкретная переписка ещё не открыта.|Навигация\n\nВ боковой панели видны чаты, CRM, настройки и профиль сотрудника. Состояние отделяет список доступных обращений от выбранной беседы.",
      "An employee queue with one waiting request.|List\n\nThe Incoming tab shows one conversation. The customer row contains a yellow waiting badge, a one-message indicator and a history snippet.|No selection\n\nThe centre says Choose a conversation and suggests selecting a customer on the left. No individual conversation is open yet.|Navigation\n\nThe side bar shows Chats, CRM, Settings and the employee profile. The state separates the available queue from a selected conversation.",
      "Навбати корманд бо як муроҷиати интизор.|Рӯйхат\n\nҶадвали воридотӣ як суҳбатро нишон медиҳад. Сатри муштарӣ ҳолати зарди интизорӣ, нишондиҳандаи як паём ва порчаи таърихро дорад.|Бе интихоб\n\nДар марказ «Суҳбатро интихоб кунед» ва дастури пахши муштарӣ дар чап ҳаст. Ҳанӯз суҳбати алоҳида кушода нест.|Роҳнамоӣ\n\nПанели паҳлуӣ чатҳо, CRM, танзимот ва профили кормандро дорад. Ин ҳолат навбати дастрасро аз суҳбати интихобшуда ҷудо мекунад."
    ]
  ],
  [
    "180526",
    "employee-active-reply",
    [
      "Ответ сотрудника в диалоге",
      "Employee reply in a conversation",
      "Ҷавоби корманд дар суҳбат"
    ],
    [
      "Активная переписка с ответом тестового сотрудника.|История\n\nВ центре видны приветствие, первое сообщение посетителя, повторное обращение и ответ «test». Цвет и выравнивание разделяют стороны общения.|Состояние\n\nЗаголовок показывает активный статус и действие спама. Список входящих сообщает, что новых диалогов нет.|Ответ и контакты\n\nСправа расположена карточка клиента, внизу — режимы чата и email, поле ввода, вложения, эмодзи и отправка.",
      "An active conversation with a test employee’s reply.|History\n\nThe centre contains the greeting, initial visitor message, follow-up and the reply test. Colour and alignment distinguish the participants.|State\n\nThe header shows active status and a spam action. The incoming list reports no new conversations.|Reply and contacts\n\nThe customer card appears on the right. Chat and Email modes, input, attachments, emoji and sending are below.",
      "Суҳбати фаъол бо ҷавоби корманди санҷишӣ.|Таърих\n\nДар марказ истиқбол, паёми аввали меҳмон, муроҷиати такрорӣ ва ҷавоби «test» ҳастанд. Ранг ва ҷойгиршавӣ тарафҳоро ҷудо мекунанд.|Ҳолат\n\nСарлавҳа ҳолати фаъол ва амали спамро дорад. Рӯйхати воридотӣ набудани суҳбатҳои навро хабар медиҳад.|Ҷавоб ва тамосҳо\n\nКорти муштарӣ дар рост аст. Чат ва email, воридкунӣ, замимаҳо, эмодзи ва фиристодан дар поёнанд."
    ]
  ],
  [
    "180534",
    "employee-login-filled",
    [
      "Вход сотрудника",
      "Employee sign-in",
      "Воридшавии корманд"
    ],
    [
      "Форма входа с заполненными данными тестового сотрудника.|Учётные данные\n\nEmail уже введён, пароль скрыт символами. Основная зелёная кнопка входа расположена непосредственно под полями.|Другие пути\n\nНиже разделителя доступны вход через Google и ссылка регистрации нового аккаунта.|Окружение\n\nВ правом верхнем углу находится выбор русского языка, внизу виден значок reCAPTCHA. Снимок показывает готовую форму, а не результат авторизации.",
      "A sign-in form containing test employee credentials.|Account details\n\nEmail is entered and the password is masked. The main green sign-in button sits directly below the fields.|Other routes\n\nGoogle sign-in and a new-account registration link appear below the divider.|Surroundings\n\nA Russian language selector sits in the upper-right corner, with a reCAPTCHA badge below. The image shows the prepared form rather than an authentication result.",
      "Шакли воридшавӣ бо маълумоти корманди санҷишӣ.|Маълумоти ҳисоб\n\nEmail ворид шудааст ва парол пинҳон аст. Тугмаи асосии сабзи воридшавӣ зери майдонҳо ҷойгир аст.|Роҳҳои дигар\n\nДар поёни ҷудокунанда воридшавӣ тавассути Google ва пайванди бақайдгирии ҳисоби нав ҳастанд.|Муҳит\n\nИнтихоби забони русӣ дар кунҷи болоии рост ва нишонаи reCAPTCHA дар поён ҳастанд. Тасвир шакли омодаро нишон медиҳад, на натиҷаи воридшавиро."
    ]
  ],
  [
    "180612",
    "supervisor-conversation-monitoring",
    [
      "Мониторинг диалога сотрудника",
      "Monitoring an employee conversation",
      "Назорати суҳбати корманд"
    ],
    [
      "Просмотр активного диалога сотрудника из кабинета владельца.|Выбор сотрудника\n\nСлева раскрыта группа Test Employer и выделено его активное обращение. В заголовке рядом со статусом расположена жёлтая метка мониторинга.|История и клиент\n\nЦентр показывает переписку с аватарами сотрудника, справа — имя и контакты клиента с редактированием.|Автор ответа\n\nЖёлтая полоса над редактором сообщает «Пишете от имени Test Employer». Рядом доступны чат и email; указание автора помогает учитывать, от чьего имени готовится сообщение.",
      "Viewing an employee’s active conversation from the owner account.|Employee selection\n\nThe Test Employer group is expanded on the left with its active request selected. A yellow Monitoring badge appears beside the status in the header.|History and customer\n\nThe centre shows correspondence with the employee’s avatars. The right panel contains customer name, contacts and editing.|Reply identity\n\nA yellow bar above the editor states that replies are written as Test Employer. Chat and Email modes remain available, making the intended sender explicit.",
      "Дидани суҳбати фаъоли корманд аз кабинети соҳиб.|Интихоби корманд\n\nГурӯҳи Test Employer дар чап кушода ва муроҷиати фаъоли ӯ интихоб шудааст. Дар сарлавҳа назди ҳолат нишонаи зарди назорат ҳаст.|Таърих ва муштарӣ\n\nДар марказ мукотиба бо аватарҳои корманд ва дар рост ном, тамосҳо ва таҳрири муштарӣ ҳастанд.|Муаллифи ҷавоб\n\nХатти зард болои муҳаррир мегӯяд, ки паём аз номи Test Employer навишта мешавад. Чат ва email дастрасанд ва номи фиристанда равшан нишон дода шудааст."
    ]
  ]
] satisfies Screen[]));

const languages = ["ru", "en", "tj"] as const;
const headings = {
  ru: "Архитектура и функциональность",
  en: "Architecture and functionality",
  tj: "Сохтор ва вазифаҳо",
};

export const livechatAccountScreens: NonNullable<ProductSiteItem["projectComponents"]>[number]["items"] = screens.map(([, slug, titles, descriptions]) => {
  const title = { ru: titles[0], en: titles[1], tj: titles[2] };
  const shortInfo = { ru: "", en: "", tj: "" };
  const fullInfo = { ru: "", en: "", tj: "" };
  languages.forEach((language, index) => {
    const [intro, ...sections] = descriptions[index].split("|");
    shortInfo[language] = intro;
    fullInfo[language] = `${headings[language]}: ${titles[index]}\n\n${intro}\n\n${sections.map((section, number) => `${number + 1}. ${section}`).join("\n\n")}`;
  });
  const imageSrc = `/images/projects/livechat/${slug}-full.webp`;
  return { slug, title, imageSrc, BannerSrc: imageSrc, shortInfo, fullInfo };
});
