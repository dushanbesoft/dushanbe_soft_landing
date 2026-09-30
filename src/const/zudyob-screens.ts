import type { ProductSiteItem } from "./product-site";

type Localized = [string, string, string];
type Screen = { source: string; slug: string; title: Localized; sections: Localized };

// Source timestamps preserve the order and provenance of all 34 full-frame screenshots.
const screens: Screen[] = [
  {
    source: "133542", slug: "telegram-search",
    title: ["Поиск бота в Telegram", "Find the bot in Telegram", "Ҷустуҷӯи бот дар Telegram"],
    sections: [
      "Первое знакомство с ZudYob через поиск Telegram.|В строке поиска введено название zudyob. Результаты сгруппированы по чатам и контактам; рядом с ботом видны его логотип, название и подпись bot.|Пользователь выбирает карточку бота и переходит к знакомству с сервисом. Одноимённый групповой чат отображается отдельно.|Вход через привычный поиск мессенджера сокращает путь к сервису, а отметка бота помогает отличить его от других результатов.",
      "Discover ZudYob through Telegram search.|The search field contains zudyob. Results are grouped into chats and contacts, with the bot logo, name and bot label visible.|The user selects the bot to learn about the service. A similarly named group appears separately.|A familiar messenger search provides a short entry path, while the bot label helps distinguish the service from other results.",
      "Шиносоии аввал бо ZudYob тавассути ҷустуҷӯи Telegram.|Дар сатри ҷустуҷӯ zudyob ворид шудааст. Натиҷаҳо ба чатҳо ва тамосҳо ҷудо шуда, нишон, ном ва аломати bot намоёнанд.|Корбар ботро интихоб карда, бо хизматрасонӣ шинос мешавад. Гурӯҳи ҳамном алоҳида нишон дода шудааст.|Ҷустуҷӯи шиноси паёмрасон роҳи дастрасиро кӯтоҳ мекунад ва аломати бот онро аз натиҷаҳои дигар фарқ менамояд.",
    ],
  },
  {
    source: "133716", slug: "bot-introduction",
    title: ["Презентация сервиса", "Service introduction", "Муаррифии хизматрасонӣ"],
    sections: [
      "Промоэкран перед первым запуском бота.|Карточка объединяет фирменный баннер «Находит быстрее» и описание интеллектуального AI-поиска. Три преимущества выделены отдельными строками: уведомления, подходящие варианты и экономия времени.|Внизу экрана расположена кнопка START. Пользователь знакомится с предложением и запускает диалог одним действием.|Краткая презентация объясняет назначение сервиса до настройки фильтров и делает следующий шаг заметным.",
      "The promotional screen before starting the bot.|A branded Finds faster banner accompanies the AI search introduction. Notifications, relevant matches and time savings are presented on separate lines.|The START button sits at the bottom. The user reviews the offer and starts a conversation with one action.|The concise introduction explains the service before filter setup and makes the next step easy to find.",
      "Экрани муаррифӣ пеш аз оғози бот.|Корт баннери «Зудтар пайдо мекунад» ва шарҳи ҷустуҷӯ бо AI-ро муттаҳид мекунад. Огоҳиҳо, вариантҳои мувофиқ ва сарфаи вақт дар сатрҳои алоҳида омадаанд.|Тугмаи START дар поёни экран аст. Корбар пешниҳодро хонда, бо як амал суҳбатро оғоз мекунад.|Муаррифии кӯтоҳ вазифаи хизматрасониро пеш аз танзими филтрҳо фаҳмонда, қадами навбатиро равшан мекунад.",
    ],
  },
  {
    source: "133758", slug: "language-selection",
    title: ["Выбор языка", "Language selection", "Интихоби забон"],
    sections: [
      "Мультиязычный вход в сценарий поиска.|После команды /start бот предлагает русский, английский и таджикский языки. Приглашение написано на всех трёх языках, а варианты представлены кнопками с флагами.|Пользователь выбирает удобный язык прямо под сообщением. Промокарточка остаётся выше в истории диалога.|Локализация с первого шага помогает разноязычной аудитории самостоятельно начать работу с ботом.",
      "A multilingual entry into the search flow.|After /start, the bot offers Russian, English and Tajik. The prompt uses all three languages, with flag-labelled buttons below.|The user chooses a language directly beneath the message. The promotional card remains visible in the conversation history.|Language selection at the first step helps a multilingual audience begin using the service independently.",
      "Оғози чандзабонаи ҷустуҷӯ.|Пас аз /start бот забонҳои русӣ, англисӣ ва тоҷикиро пешниҳод мекунад. Даъват бо ҳар се забон навишта шуда, тугмаҳо парчам доранд.|Корбар забони мувофиқро зери паём интихоб мекунад. Корти муаррифӣ дар таърихи суҳбат мемонад.|Интихоби забон аз қадами аввал ба корбарони гуногунзабон барои мустақилона оғоз кардан кумак мекунад.",
    ],
  },
  {
    source: "145236", slug: "deal-type",
    title: ["Начало работы и тип сделки", "Getting started and deal type", "Оғози кор ва навъи муомила"],
    sections: [
      "Приветствие, пробный доступ и первый шаг фильтра.|Бот сообщает об активации пробного абонемента и показывает команды /addfilter, /myfilters и /stop. Ниже начинается пошаговый диалог с возможностью отмены через /cancel.|Первый вопрос предлагает покупку или аренду. Пользователь задаёт основную цель поиска нажатием одной из двух кнопок.|Последовательный опрос заменяет длинную форму, а подсказки знакомят с управлением фильтрами и уведомлениями.",
      "Welcome, trial access and the first filter step.|The bot announces trial access and explains /addfilter, /myfilters and /stop. A guided conversation begins below, with /cancel available to exit.|The first question offers purchase or rental. The user sets the search goal with one of two buttons.|A guided questionnaire replaces a long form, while command hints introduce filter and notification controls.",
      "Хушомадгӯӣ, дастрасии озмоишӣ ва қадами аввали филтр.|Бот фаъолшавии абонементи озмоишӣ ва фармонҳои /addfilter, /myfilters ва /stop-ро нишон медиҳад. Поён пурсиши қадамбақадам бо имкони бекоркунӣ тавассути /cancel оғоз мешавад.|Саволи аввал харид ё иҷораро пешниҳод мекунад. Корбар бо яке аз ду тугма мақсади ҷустуҷӯро муайян мекунад.|Пурсиши пайдарпай ҷойи шакли дарозро мегирад ва роҳнамо идоракунии филтру огоҳиҳоро мефаҳмонад.",
    ],
  },
  {
    source: "145314", slug: "property-type",
    title: ["Тип недвижимости", "Property type", "Навъи амвол"],
    sections: [
      "Выбор категории объекта для поиска.|Второй шаг предлагает квартиру, дом или коммерческую недвижимость. Варианты размещены отдельными широкими кнопками под вопросом.|Пользователь выбирает тип объекта либо нажимает «Пропустить», продолжая настройку без этого ограничения.|Разделение по категориям уточняет запрос, а необязательный выбор позволяет сохранить более широкий охват предложений.",
      "Choose the category of property to search for.|The second step offers apartments, houses and commercial property as separate wide buttons.|The user chooses a property type or selects Skip to continue without this restriction.|Categories refine the search, while an optional selection allows a broader range of offers.",
      "Интихоби гурӯҳи амвол барои ҷустуҷӯ.|Қадами дуюм манзил, хона ва амволи тиҷоратиро бо тугмаҳои васеъ пешниҳод мекунад.|Корбар навъи амволро интихоб мекунад ё бо «Гузарондан» бе ин маҳдудият идома медиҳад.|Гурӯҳбандӣ дархостро дақиқ мекунад, интихоби ихтиёрӣ бошад доираи васеи пешниҳодҳоро нигоҳ медорад.",
    ],
  },
  {
    source: "145348", slug: "minimum-price",
    title: ["Минимальная цена", "Minimum price", "Нархи ҳадди ақал"],
    sections: [
      "Нижняя граница бюджета в сомони.|Бот просит ввести минимальную цену и явно указывает валюту TJS. Номер шага показывает положение в текущем опросе, ниже доступна кнопка пропуска.|Пользователь отправляет сумму сообщением либо оставляет нижнюю границу незаданной.|Один вопрос на экране упрощает ввод, а обозначение валюты помогает одинаково трактовать сумму поиска.",
      "Set the lower budget limit in somoni.|The bot asks for a minimum price and explicitly labels the currency as TJS. A step number shows progress, with a Skip button below.|The user sends an amount as a message or continues without a lower limit.|A single focused question simplifies entry, while the currency label makes the requested amount clear.",
      "Ҳадди поёнии буҷет бо сомонӣ.|Бот нархи ҳадди ақалро мепурсад ва асъори TJS-ро равшан нишон медиҳад. Рақами қадам пешрафти пурсишро нишон дода, поён тугмаи гузарондан аст.|Корбар маблағро бо паём мефиристад ё бе ҳадди поёнӣ идома медиҳад.|Як савол воридкуниро осон мекунад ва нишонаи асъор маънои маблағро равшан месозад.",
    ],
  },
  {
    source: "145406", slug: "maximum-price",
    title: ["Максимальная цена", "Maximum price", "Нархи ҳадди аксар"],
    sections: [
      "Верхняя граница бюджета поиска.|Следующий вопрос посвящён максимальной цене в TJS. Формат сообщения и кнопка «Пропустить» повторяют предыдущий шаг ввода бюджета.|Пользователь задаёт верхний предел стоимости или переходит дальше без ограничения.|Пара минимальной и максимальной цены формирует понятный диапазон, позволяя сосредоточиться на предложениях в рамках бюджета.",
      "Set the upper search budget.|The next question asks for the maximum price in TJS. Its message layout and Skip button follow the previous budget step.|The user supplies an upper price limit or continues without one.|Minimum and maximum prices define a clear range and focus the search on offers within the chosen budget.",
      "Ҳадди болоии буҷети ҷустуҷӯ.|Саволи навбатӣ нархи ҳадди аксарро бо TJS мепурсад. Тарҳи паём ва тугмаи гузарондан ба қадами пешина монанданд.|Корбар ҳадди болоии нархро муайян мекунад ё бе он идома медиҳад.|Нархи ҳадди ақал ва аксар диапазони фаҳморо ташкил карда, ҷустуҷӯро ба буҷети интихобшуда мувофиқ мекунанд.",
    ],
  },
  {
    source: "145505", slug: "minimum-area",
    title: ["Минимальная площадь", "Minimum area", "Масоҳати ҳадди ақал"],
    sections: [
      "Настройка нижнего порога площади.|Вопрос запрашивает минимальную площадь объекта в квадратных метрах. Единица измерения указана непосредственно в тексте подсказки.|Пользователь вводит значение в чат или пропускает параметр, если площадь пока не определена.|Отдельный шаг позволяет добавить пространственные требования к ценовым и точнее описать нужный объект.",
      "Set the minimum property size.|The question asks for a minimum area in square metres, with the unit shown in the prompt.|The user enters a value in the chat or skips the parameter if size is undecided.|A separate step adds space requirements to the budget criteria and describes the desired property more precisely.",
      "Танзими ҳадди поёнии масоҳат.|Савол масоҳати ҳадди ақали амволро бо метри мураббаъ мепурсад. Воҳиди ченак дар худи роҳнамо нишон дода шудааст.|Корбар қиматро дар чат менависад ё параметрро мегузаронад.|Қадами алоҳида талаботи масоҳатро ба буҷет илова карда, амволи дилхоҳро дақиқтар муайян мекунад.",
    ],
  },
  {
    source: "145519", slug: "maximum-area",
    title: ["Максимальная площадь", "Maximum area", "Масоҳати ҳадди аксар"],
    sections: [
      "Завершение диапазона площади объекта.|Бот запрашивает максимальную площадь в м². Под сообщением сохраняется возможность перейти дальше без ввода.|Пользователь устанавливает верхнюю границу размера недвижимости. Вместе с предыдущим шагом она задаёт диапазон площади.|Раздельный ввод двух границ сохраняет простой формат диалога и позволяет гибко ограничить размер подходящих объектов.",
      "Complete the property area range.|The bot asks for the maximum area in m², with an option to continue without entering a value.|The user sets an upper size limit which combines with the previous step to define an area range.|Entering the limits separately keeps the conversation simple and makes property size restrictions flexible.",
      "Анҷоми муайян кардани диапазони масоҳат.|Бот масоҳати ҳадди аксарро бо м² мепурсад ва имкони гузаронидани қадамро нигоҳ медорад.|Корбар ҳадди болоии андозаи амволро мегузорад. Он бо қадами пешина диапазони масоҳатро месозад.|Воридкунии алоҳидаи ду ҳадд суҳбатро сода ва маҳдудияти андозаро чандир нигоҳ медорад.",
    ],
  },
  {
    source: "145537", slug: "room-count",
    title: ["Количество комнат", "Number of rooms", "Шумораи ҳуҷраҳо"],
    sections: [
      "Множественный выбор комнатности.|Экран содержит кнопки от 1 до 6 и пояснение: повторное нажатие отменяет выбор. Внизу находятся «Пропустить» и «Готово».|Пользователь отмечает подходящие варианты и подтверждает набор отдельной кнопкой.|Возможность выбрать несколько значений подходит для гибкого запроса, например поиска как двухкомнатной, так и трёхкомнатной квартиры.",
      "Select multiple room counts.|Buttons from 1 to 6 appear with a note that a second tap deselects an option. Skip and Done sit underneath.|The user selects acceptable room counts and confirms the set with a separate button.|Multiple choices support flexible requirements, such as searching for both two-room and three-room apartments.",
      "Интихоби чанд варианти шумораи ҳуҷраҳо.|Тугмаҳои аз 1 то 6 ва шарҳи бекор кардани интихоб бо пахши такрорӣ нишон дода шудаанд. Поён «Гузарондан» ва «Тайёр» ҳастанд.|Корбар вариантҳои мувофиқро интихоб карда, маҷмуаро тасдиқ мекунад.|Интихоби чанд қимат барои дархости чандир, масалан манзили дуҳуҷрагӣ ё сеҳуҷрагӣ, мувофиқ аст.",
    ],
  },
  {
    source: "145600", slug: "city-selection",
    title: ["Город поиска", "Search city", "Шаҳри ҷустуҷӯ"],
    sections: [
      "География поиска с готовыми вариантами и ручным вводом.|Бот предлагает Душанбе, Худжанд, Куляб, Кургантеппа и Хорог. Подсказка объясняет множественный выбор и возможность написать город или район вручную.|Пользователь отмечает города кнопками либо дополняет выбор текстовым сообщением, затем нажимает «Готово».|Сочетание списка и свободного ввода делает настройку удобной для популярных и других населённых пунктов.",
      "Search locations with presets and manual entry.|The bot lists Dushanbe, Khujand, Kulob, Qurghonteppa and Khorugh. Guidance explains multiple selection and entering a city or district manually.|The user selects cities or adds a location in a message, then presses Done.|Presets combined with free text support both common destinations and other locations.",
      "Ҷойи ҷустуҷӯ бо рӯйхат ва воридкунии дастӣ.|Бот Душанбе, Хуҷанд, Кӯлоб, Қӯрғонтеппа ва Хоруғро пешниҳод мекунад. Роҳнамо интихоби чанд шаҳр ва ворид кардани шаҳр ё ноҳияро мефаҳмонад.|Корбар шаҳрҳоро интихоб мекунад ё ҷойро бо паём илова карда, «Тайёр»-ро пахш мекунад.|Рӯйхат ва матни озод танзимро ҳам барои шаҳрҳои маъмул ва ҳам ҷойҳои дигар қулай мекунанд.",
    ],
  },
  {
    source: "145611", slug: "district-selection",
    title: ["Районы Душанбе", "Dushanbe districts", "Ноҳияҳои Душанбе"],
    sections: [
      "Уточнение местоположения внутри города.|После выбора Душанбе бот показывает районы Шохмансур, Сино, Исмоили Сомони и Фирдавси. Отдельно доступен вариант «Весь Душанбе».|Пользователь уточняет интересующую часть города или оставляет поиск общегородским и завершает выбор кнопкой «Готово».|Дополнительный уровень географии помогает учитывать повседневные маршруты и предпочтения по расположению недвижимости.",
      "Refine the location within the city.|After Dushanbe is selected, the bot shows Shohmansur, Sino, Ismoili Somoni and Firdavsi districts, plus an All Dushanbe option.|The user narrows the search to a district or keeps citywide coverage and confirms with Done.|District-level criteria accommodate daily travel needs and property location preferences.",
      "Дақиқ кардани ҷой дар дохили шаҳр.|Пас аз интихоби Душанбе бот ноҳияҳои Шоҳмансур, Сино, Исмоили Сомонӣ ва Фирдавсиро нишон медиҳад. Варианти «Тамоми Душанбе» низ мавҷуд аст.|Корбар қисми дилхоҳи шаҳрро интихоб мекунад ё ҷустуҷӯро дар тамоми шаҳр нигоҳ дошта, тасдиқ мекунад.|Сатҳи ноҳия барои ба назар гирифтани роҳҳои ҳаррӯза ва хоҳиши ҷойгиршавии амвол кумак мекунад.",
    ],
  },
  {
    source: "145630", slug: "building-type",
    title: ["Новостройка или вторичный рынок", "New build or resale", "Бинои нав ё бозори дуюм"],
    sections: [
      "Выбор сегмента рынка недвижимости.|Шаг предлагает «Вторичный рынок» и «Новостройка». Подсказка описывает включение и отмену вариантов повторным нажатием.|Пользователь отмечает подходящий сегмент, подтверждает выбор или пропускает вопрос.|Этот критерий отделяет предпочтения по типу предложения от бюджета и местоположения, делая фильтр содержательнее.",
      "Choose a property market segment.|The step offers Resale and New build. Guidance explains selecting and deselecting options by tapping.|The user selects a segment, confirms the choice or skips the question.|This criterion adds market preferences to budget and location, making the filter more specific.",
      "Интихоби бахши бозори амвол.|Қадам «Бозори дуюм» ва «Бинои нав»-ро пешниҳод мекунад. Роҳнамо интихоб ва бекоркуниро бо пахши такрорӣ мефаҳмонад.|Корбар бахши мувофиқро интихобу тасдиқ мекунад ё саволро мегузаронад.|Ин меъёр хоҳиши навъи пешниҳодро ба буҷет ва ҷой илова карда, филтрро дақиқтар месозад.",
    ],
  },
  {
    source: "145649", slug: "renovation",
    title: ["Состояние ремонта", "Renovation condition", "Ҳолати таъмир"],
    sections: [
      "Требования к отделке недвижимости.|В диалоге доступны варианты «С ремонтом» и «Без ремонта», а также завершение или пропуск шага. Описание сохраняет знакомый принцип повторного нажатия для отмены.|Пользователь указывает приемлемое состояние объекта перед переходом к следующему вопросу.|Параметр помогает различать готовые к использованию варианты и объекты, предполагающие самостоятельное обустройство.",
      "Specify renovation requirements.|The dialogue offers Renovated and Unrenovated, with Done and Skip controls. The familiar tap-again-to-deselect instruction remains visible.|The user indicates acceptable property condition before continuing.|This parameter distinguishes ready-to-use properties from options requiring further renovation.",
      "Талабот ба таъмири амвол.|Дар суҳбат вариантҳои «Бо таъмир» ва «Бе таъмир», инчунин анҷом ё гузаронидани қадам ҳастанд. Қоидаи бекоркунӣ бо пахши такрорӣ нигоҳ дошта шудааст.|Корбар ҳолати қобили қабулро муайян карда, идома медиҳад.|Параметр амволи омодаро аз объектҳое, ки ба таъмир ниёз доранд, ҷудо мекунад.",
    ],
  },
  {
    source: "145751", slug: "construction-status",
    title: ["Готовность объекта", "Construction status", "Омодагии объект"],
    sections: [
      "Последний показанный шаг настройки фильтра.|Бот предлагает состояние «Сдан» или «Строится». Пользователь видит номер шага и кнопки подтверждения либо пропуска.|Выбор отражает, нужен ли готовый объект или допустим вариант на этапе строительства.|Отдельный критерий готовности помогает согласовать поиск со сроками планируемого переезда или приобретения.",
      "The final displayed filter setup step.|The bot offers Completed and Under construction, alongside the step number and confirmation or skip controls.|The choice indicates whether a completed property is required or an ongoing development is acceptable.|A separate completion criterion aligns the search with purchase or move-in timing.",
      "Қадами охирини намоёни танзими филтр.|Бот ҳолатҳои «Супоридашуда» ва «Дар сохтмон»-ро бо рақами қадам ва тугмаҳои тасдиқу гузарондан пешниҳод мекунад.|Интихоб муайян мекунад, ки объекти тайёр зарур аст ё сохтмони нотамом низ мувофиқ мебошад.|Меъёри омодагӣ ҷустуҷӯро бо муҳлати харид ё кӯчидан мувофиқ мекунад.",
    ],
  },
  {
    source: "145805", slug: "filter-saved",
    title: ["Сохранение фильтра", "Filter saved", "Сабти филтр"],
    sections: [
      "Подтверждение завершения настройки.|В чате появляется сообщение «Фильтр сохранён!» с заметной отметкой успешного действия. Рядом указана команда /myfilters для просмотра результата.|Пользователь получает обратную связь и может сразу перейти к своим фильтрам.|Явное подтверждение завершает длинный пошаговый сценарий и показывает, где проверить сохранённые условия.",
      "Confirmation that setup is complete.|A Filter saved message appears in the chat with a prominent success mark and the /myfilters command.|The user receives feedback and can immediately review saved filters.|An explicit confirmation closes the guided setup and points to where the chosen criteria can be checked.",
      "Тасдиқи анҷоми танзим.|Дар чат паёми сабти филтр бо аломати муваффақият ва фармони /myfilters пайдо мешавад.|Корбар натиҷаи амалро мебинад ва метавонад фавран филтрҳои худро кушояд.|Тасдиқи равшан пурсиши қадамбақадамро анҷом дода, роҳи санҷидани шартҳои сабтшударо нишон медиҳад.",
    ],
  },
  {
    source: "145925", slug: "my-filters",
    title: ["Мои фильтры", "My filters", "Филтрҳои ман"],
    sections: [
      "Сводка условий и управление поисковой подпиской.|Карточка фильтра показывает тип сделки и недвижимости, цену, площадь, комнаты, город, тип застройки и ремонт. На примере виден активный фильтр покупки квартиры в Душанбе.|Под сводкой расположены действия приостановки рассылки, изменения и удаления, а ниже — добавления ещё одного фильтра.|Все условия и основные действия собраны рядом, поэтому пользователь может оценить текущий запрос и управлять им из одного сообщения.",
      "Review criteria and manage a search subscription.|The filter card lists deal and property types, price, area, rooms, city, market segment and renovation. The example shows an active apartment purchase filter in Dushanbe.|Actions below pause notifications, edit or delete the filter, followed by an option to add another.|Criteria and actions are grouped together so the user can review and manage the search from one message.",
      "Хулосаи шартҳо ва идоракунии обунаи ҷустуҷӯ.|Корти филтр навъи муомилаву амвол, нарх, масоҳат, ҳуҷраҳо, шаҳр, навъи бино ва таъмирро нишон медиҳад. Дар мисол филтри фаъоли хариди манзил дар Душанбе аст.|Поён амалҳои таваққуфи паёмҳо, тағйир ва несткунӣ, инчунин иловаи филтри дигар ҷойгиранд.|Шартҳо ва амалҳо якҷо ҳастанд, то корбар дархостро аз як паём бинад ва идора кунад.",
    ],
  },
  {
    source: "145954", slug: "filter-editor",
    title: ["Редактор параметров", "Filter parameter editor", "Муҳаррири параметрҳо"],
    sections: [
      "Точечная настройка сохранённого фильтра.|Каждый параметр представлен отдельной кнопкой с текущим значением: от типа сделки до состояния объекта. Незаданный параметр отмечен словами «Не указано».|Пользователь выбирает нужную строку для изменения и завершает работу кнопкой «Сохранить фильтр».|Такой редактор позволяет корректировать отдельные условия без повторного прохождения всего первоначального опроса.",
      "Adjust individual criteria in a saved filter.|Each parameter has a button displaying its current value, from deal type to construction status. An unset parameter is labelled Not specified.|The user selects a row to change and finishes with Save filter.|This editor supports targeted adjustments without repeating the entire initial questionnaire.",
      "Танзими алоҳидаи шартҳои филтри сабтшуда.|Ҳар параметр тугмаи дорои қимати ҷорӣ дорад: аз навъи муомила то ҳолати объект. Параметри холӣ ҳамчун муайяннашуда нишон дода мешавад.|Корбар сатри лозимро тағйир дода, бо тугмаи сабти филтр корро анҷом медиҳад.|Муҳаррир ислоҳи шартҳои алоҳидаро бе такрори тамоми пурсиши аввалия имкон медиҳад.",
    ],
  },
  {
    source: "150015", slug: "edit-minimum-price",
    title: ["Изменение минимальной цены", "Edit minimum price", "Тағйири нархи ҳадди ақал"],
    sections: [
      "Повторный ввод одного выбранного параметра.|Ниже сводки сохранённого фильтра появляется запрос минимальной цены в TJS. Видимые текущие условия помогают сопоставить новое значение с остальными ограничениями.|Пользователь вводит новое значение в привычном формате сообщения или использует доступный пропуск.|Повторное использование знакомого вопроса делает редактирование последовательным и не требует изучать отдельную форму.",
      "Re-enter one selected parameter.|A minimum price prompt in TJS appears below the saved filter summary. Existing criteria provide context for the change.|The user enters a new value as a message or uses the available Skip action.|Reusing a familiar question makes editing consistent and avoids introducing a separate form.",
      "Воридкунии дубораи як параметри интихобшуда.|Зери хулосаи филтр дархости нархи ҳадди ақал бо TJS пайдо мешавад. Шартҳои ҷорӣ барои муқоисаи қимати нав замина медиҳанд.|Корбар қимати навро бо паём мефиристад ё қадамро мегузаронад.|Саволи шинос таҳрирро пайдарпай мекунад ва омӯзиши шакли дигарро талаб намекунад.",
    ],
  },
  {
    source: "150108", slug: "review-filter-changes",
    title: ["Проверка настроек перед сохранением", "Review filter settings", "Санҷиши танзимот пеш аз сабт"],
    sections: [
      "Сводный экран редактирования фильтра.|Редактор вновь показывает полный набор параметров с их значениями. Нижняя кнопка «Сохранить фильтр» визуально завершает список настроек.|Пользователь сверяет бюджет, площадь, комнаты и местоположение, при необходимости открывает другой параметр и сохраняет результат.|Общий обзор перед завершением помогает заметить несоответствия и удерживает связанные условия поиска в одном месте.",
      "A consolidated filter editing view.|The editor again displays all parameters and their values. Save filter marks the end of the settings list.|The user reviews budget, size, rooms and location, opens another parameter if needed and saves the result.|A final overview helps identify inconsistencies and keeps related search criteria together.",
      "Экрани умумии таҳрири филтр.|Муҳаррир ҳамаи параметрҳо ва қиматҳои онҳоро боз нишон медиҳад. Тугмаи сабт рӯйхати танзимотро анҷом медиҳад.|Корбар буҷет, масоҳат, ҳуҷраҳо ва ҷойро месанҷад, агар лозим бошад параметри дигарро иваз мекунад ва натиҷаро сабт менамояд.|Баррасии умумӣ барои пай бурдани номувофиқатӣ ва якҷо нигоҳ доштани шартҳои ҷустуҷӯ кумак мекунад.",
    ],
  },
  {
    source: "150141", slug: "command-menu",
    title: ["Меню команд", "Command menu", "Менюи фармонҳо"],
    sections: [
      "Быстрый доступ к основным разделам бота.|Встроенное меню Telegram показывает /start, /subscription, /myfilters, /aboutus и /stop. Под каждой командой приведено короткое пояснение.|Пользователь выбирает нужное действие из меню, не набирая команду вручную.|Подписи раскрывают назначение команд и делают управление доступным даже тем, кто не привык к текстовым интерфейсам ботов.",
      "Quick access to the main bot sections.|Telegram’s command menu lists /start, /subscription, /myfilters, /aboutus and /stop, each with a short explanation.|The user selects an action instead of typing a command manually.|Descriptive labels make bot controls easier to discover, including for people unfamiliar with command-driven interfaces.",
      "Дастрасии зуд ба бахшҳои асосии бот.|Менюи Telegram фармонҳои /start, /subscription, /myfilters, /aboutus ва /stop-ро бо шарҳи кӯтоҳ нишон медиҳад.|Корбар амалро аз меню интихоб мекунад ва фармонро дастӣ наменависад.|Шарҳҳо вазифаи фармонҳоро равшан карда, идоракуниро барои корбарони нав низ фаҳмо месозанд.",
    ],
  },
  {
    source: "150231", slug: "about-service",
    title: ["О сервисе и контакты", "About and contact details", "Дар бораи хизматрасонӣ ва тамос"],
    sections: [
      "Контактная информация внутри диалога.|Ответ на /aboutus содержит название компании ZudYob, телефон и электронную почту. Контакты выделены как ссылки на фоне обычного текста.|Пользователь открывает информацию о сервисе и выбирает подходящий способ связи.|Наличие контактов в самом боте даёт понятный путь обращения без поиска отдельного сайта или внешнего справочника.",
      "Contact information inside the conversation.|The /aboutus response contains the ZudYob company name, a phone number and an email address. Contacts are styled as links.|The user opens service information and chooses a contact method.|In-bot contact details provide a clear route to assistance without searching for a separate website or directory.",
      "Маълумоти тамос дар дохили суҳбат.|Ҷавоби /aboutus номи ширкати ZudYob, телефон ва почтаи электрониро дар бар мегирад. Тамосҳо ҳамчун пайванд ҷудо шудаанд.|Корбар маълумоти хизматрасониро кушода, роҳи мувофиқи тамосро интихоб мекунад.|Тамосҳо дар худи бот роҳи муроҷиатро бе ҷустуҷӯи сомона ё маълумотномаи дигар пешниҳод мекунанд.",
    ],
  },
  {
    source: "150257", slug: "phone-request",
    title: ["Запрос подтверждения телефона", "Phone confirmation request", "Дархости тасдиқи телефон"],
    sections: [
      "Объяснение требования перед работой с подпиской.|После /subscription бот просит подтвердить номер телефона. Сообщение связывает подтверждение с отправкой новых предложений и важных уведомлений по запросам.|Пользователь сначала знакомится с причиной запроса, затем переходит к передаче контакта.|Пояснение назначения данных делает этот шаг понятнее и связывает его с основной функцией сервиса.",
      "Explain a requirement before subscription access.|After /subscription, the bot asks the user to confirm a phone number. The message connects this step to receiving offers and important search notifications.|The user reads why the number is requested before proceeding to share a contact.|Explaining the purpose makes the step clearer and relates it to the service’s core function.",
      "Шарҳи талабот пеш аз кор бо обуна.|Пас аз /subscription бот тасдиқи рақами телефонро мепурсад. Паём ин қадамро бо фиристодани пешниҳодҳо ва огоҳиҳои муҳими ҷустуҷӯ мепайвандад.|Корбар аввал сабаби дархостро мехонад ва баъд ба мубодилаи тамос мегузарад.|Шарҳи мақсади маълумот қадамро фаҳмо карда, онро бо вазифаи асосии хизматрасонӣ мепайвандад.",
    ],
  },
  {
    source: "150314", slug: "phone-consent",
    title: ["Подтверждение передачи контакта", "Confirm contact sharing", "Тасдиқи мубодилаи тамос"],
    sections: [
      "Системный диалог согласия Telegram.|Поверх переписки открыто окно Share your phone number? с пояснением, что бот получит номер. Доступны действия CANCEL и OK.|Пользователь подтверждает передачу номера либо отменяет её до отправки контакта.|Системный запрос отделяет согласие от обычной переписки и оставляет решение о передаче данных пользователю.",
      "Telegram’s native consent dialogue.|A Share your phone number? modal appears over the conversation and explains that the bot will receive the number. CANCEL and OK are available.|The user approves or cancels before the contact is shared.|A native prompt separates consent from ordinary chat and leaves the sharing decision with the user.",
      "Равзанаи системавии розигии Telegram.|Болои суҳбат равзанаи мубодилаи рақам кушода шуда, гирифтани онро аз ҷониби бот мефаҳмонад. Амалҳои CANCEL ва OK дастрасанд.|Корбар пеш аз фиристодани тамос онро тасдиқ ё бекор мекунад.|Дархости системавӣ розигиро аз суҳбати оддӣ ҷудо намуда, қарорро ба корбар мегузорад.",
    ],
  },
  {
    source: "150437", slug: "subscription-plans",
    title: ["Абонемент и тарифы", "Subscription and plans", "Абонемент ва тарофаҳо"],
    sections: [
      "Баланс, текущий доступ и варианты продления.|После сохранения телефона бот показывает баланс, активный пробный абонемент и список тарифов. На экране представлены периоды на месяц, три месяца, полгода и год с ценами в TJS.|Пользователь сравнивает сроки, выбирает нужный тариф либо переходит к пополнению баланса отдельной кнопкой.|Состояние подписки и варианты продления собраны в одном сообщении. Показанные суммы и даты относятся к зафиксированному на скриншоте состоянию сервиса.",
      "Balance, current access and renewal options.|After saving the phone number, the bot shows the balance, active trial and available plans. Monthly, quarterly, six-month and annual options display prices in TJS.|The user compares periods, selects a plan or chooses the separate balance top-up action.|Subscription status and renewal choices sit in one message. Prices and dates reflect the captured service state.",
      "Тавозун, дастрасии ҷорӣ ва роҳҳои тамдид.|Пас аз сабти телефон бот тавозун, абонементи озмоишӣ ва тарофаҳоро нишон медиҳад. Давраҳои якмоҳа, семоҳа, шашмоҳа ва солона бо нархҳои TJS ҳастанд.|Корбар муҳлатҳоро муқоиса карда, тарофаро интихоб мекунад ё ба пур кардани тавозун мегузарад.|Ҳолати обуна ва тамдид дар як паём ҷамъ шудаанд. Нархҳо ва санаҳо ба ҳолати дар скриншот сабтшуда дахл доранд.",
    ],
  },
  {
    source: "150457", slug: "top-up-methods",
    title: ["Способы пополнения баланса", "Balance top-up methods", "Роҳҳои пур кардани тавозун"],
    sections: [
      "Выбор платёжного сервиса в чате.|Сообщение предлагает выбрать способ пополнения. Доступны две отдельные кнопки: Alif и DCity.|Пользователь выбирает привычный платёжный сервис и продолжает соответствующий сценарий.|Разделение способов оплаты на первом шаге помогает избежать смешения инструкций и делает дальнейшие действия понятнее.",
      "Choose a payment service in the chat.|A message asks how to top up the balance, with separate Alif and DCity buttons.|The user chooses a familiar provider and follows its payment flow.|Selecting a provider first keeps its instructions distinct and clarifies the next steps.",
      "Интихоби хизматрасонии пардохт дар чат.|Паём роҳи пур кардани тавозунро мепурсад ва ду тугмаи алоҳидаи Alif ва DCity дорад.|Корбар провайдери шиносро интихоб карда, раванди онро идома медиҳад.|Интихоби аввалияи роҳ дастурҳои пардохтро аз ҳам ҷудо намуда, амалҳои минбаъдаро равшан мекунад.",
    ],
  },
  {
    source: "150550", slug: "alif-link-confirmation",
    title: ["Переход к оплате через Alif", "Continue to Alif", "Гузариш ба Alif"],
    sections: [
      "Подтверждение открытия внешнего платёжного адреса.|Telegram показывает окно Open Link с адресом app.alif.tj. За модальным окном остаётся сообщение выбора способа пополнения.|Пользователь проверяет направление перехода и выбирает OPEN или CANCEL.|Явная граница между ботом и внешним сервисом помогает понять, где будет продолжаться оплата. Этот экран фиксирует переход, а не результат платежа.",
      "Confirm opening an external payment address.|Telegram displays an Open Link modal with an app.alif.tj address. The top-up method message remains behind it.|The user reviews the destination and selects OPEN or CANCEL.|The explicit transition shows that payment continues outside the bot. This screen records navigation rather than a payment result.",
      "Тасдиқи кушодани суроғаи берунии пардохт.|Telegram равзанаи Open Link-ро бо суроғаи app.alif.tj нишон медиҳад. Дар паси он интихоби роҳи пардохт мемонад.|Корбар самти гузаришро дида, OPEN ё CANCEL-ро интихоб мекунад.|Гузариши равшан идомаи пардохтро берун аз бот нишон медиҳад. Экран натиҷаи пардохтро тасдиқ намекунад.",
    ],
  },
  {
    source: "150616", slug: "alif-landing",
    title: ["Страница перехода в Alif", "Alif app landing page", "Саҳифаи гузариш ба Alif"],
    sections: [
      "Внешняя страница с инструкцией открыть ссылку на телефоне.|На светлом фоне размещены логотип Alif, заголовок «Откройте с телефона» и кнопки App Store и Google Play.|Пользователь получает подсказку о продолжении в мобильном приложении и ссылки на магазины приложений.|Экран объясняет требования следующего этапа и помогает сориентироваться при открытии платёжной ссылки вне приложения Alif.",
      "An external page asking the user to open the link on a phone.|The light page contains the Alif logo, an Open from your phone message and App Store and Google Play buttons.|The user receives guidance for continuing in the mobile app and links to the app stores.|The page explains the next step when a payment link is opened outside the Alif app.",
      "Саҳифаи берунӣ бо дастури кушодани пайванд аз телефон.|Дар заминаи равшан нишони Alif, паёми кушодан аз телефон ва тугмаҳои App Store ва Google Play ҳастанд.|Корбар роҳнамои идома дар барномаи мобилӣ ва пайвандҳои мағозаҳоро мебинад.|Экран қадами навбатиро ҳангоми кушодани пайванди пардохт берун аз барномаи Alif мефаҳмонад.",
    ],
  },
  {
    source: "150645", slug: "dcity-amount",
    title: ["Сумма пополнения через DCity", "DCity top-up amount", "Маблағи пуркунӣ тавассути DCity"],
    sections: [
      "Ввод суммы для платёжного счёта.|После выбора DCity бот просит указать сумму пополнения в TJS. Запрос оформлен обычным сообщением внутри текущего диалога.|Пользователь отправляет нужную сумму в чат для продолжения сценария.|Понятная подсказка с названием сервиса и валютой связывает введённое число с конкретным действием пополнения.",
      "Enter an amount for the payment request.|After DCity is selected, the bot asks for the top-up amount in TJS through a regular chat message.|The user sends the desired amount to continue.|A prompt naming both provider and currency connects the entered number to the intended top-up action.",
      "Ворид кардани маблағ барои ҳисоби пардохт.|Пас аз интихоби DCity бот маблағи пуркуниро бо TJS дар паёми оддӣ мепурсад.|Корбар маблағи дилхоҳро ба чат фиристода, идома медиҳад.|Роҳнамои дорои номи хизматрасонӣ ва асъор рақами воридшударо бо амали пуркунӣ мепайвандад.",
    ],
  },
  {
    source: "150706", slug: "dcity-invoice",
    title: ["Создание счёта DCity", "DCity invoice creation", "Эҷоди ҳисоби DCity"],
    sections: [
      "Подтверждение создания инвойса и дальнейшие действия.|Бот сообщает «Инвойс создан!» и предлагает две кнопки: «Оплатить в DC NEXT» и «Проверить оплату».|Пользователь переходит к оплате, затем может вернуться в чат и запросить проверку её состояния.|Создание счёта и проверка платежа разделены на понятные действия. Сообщение подтверждает готовность счёта, но само по себе не означает успешную оплату.",
      "Invoice creation confirmation and next actions.|The bot announces that an invoice was created and offers Pay in DC NEXT and Check payment buttons.|The user opens payment and can return to the chat to check its status.|Invoice creation and payment verification are distinct actions. The message confirms an invoice exists, not that payment succeeded.",
      "Тасдиқи эҷоди ҳисоб ва амалҳои минбаъда.|Бот эҷоди инвойсро хабар дода, тугмаҳои пардохт дар DC NEXT ва санҷиши пардохтро пешниҳод мекунад.|Корбар ба пардохт гузашта, баъдан барои санҷиши ҳолат ба чат бармегардад.|Эҷоди ҳисоб ва санҷиши пардохт амалҳои ҷудо ҳастанд. Паём мавҷудияти ҳисобро тасдиқ мекунад, на анҷоми пардохтро.",
    ],
  },
  {
    source: "150730", slug: "dcity-link-confirmation",
    title: ["Подтверждение перехода в DCity", "Confirm the DCity link", "Тасдиқи гузариш ба DCity"],
    sections: [
      "Открытие внешнего адреса оплаты.|Поверх переписки показан системный диалог Open Link с доменом pay.dc.tj. Под ним видны сообщение о созданном счёте и платёжные действия.|Пользователь подтверждает открытие страницы кнопкой OPEN или остаётся в боте через CANCEL.|Промежуточное подтверждение показывает адрес назначения и сохраняет контроль пользователя над переходом к платёжному сервису.",
      "Open the external payment destination.|A native Open Link modal displays the pay.dc.tj domain over the chat. The invoice message and payment actions remain visible underneath.|The user selects OPEN to continue or CANCEL to remain in the bot.|The confirmation exposes the destination and gives the user control over leaving the conversation for payment.",
      "Кушодани суроғаи берунии пардохт.|Равзанаи системавии Open Link домени pay.dc.tj-ро болои чат нишон медиҳад. Паёми ҳисоб ва амалҳои пардохт дар поён намоёнанд.|Корбар бо OPEN идома медиҳад ё бо CANCEL дар бот мемонад.|Тасдиқ суроғаи мақсадро нишон дода, назорати гузариш ба хизматрасонии пардохтро ба корбар медиҳад.",
    ],
  },
  {
    source: "150749", slug: "dcity-qr",
    title: ["QR-код для оплаты", "Payment QR code", "QR-код барои пардохт"],
    sections: [
      "Платёжная страница DCity с QR-кодом.|Во внешнем окне размещены фирменные цвета DCity, логотип и крупный QR-код с подписью «QR - пардохт». Доступны крестик и кнопка Close.|Пользователь видит код для продолжения оплаты или закрывает окно. Скриншот не содержит подтверждения завершённой транзакции.|Крупный код делает платёжный реквизит главным элементом страницы, а явное закрытие позволяет выйти из сценария.",
      "A DCity payment page with a QR code.|The external modal uses DCity branding and displays a large QR code labelled QR payment. A close icon and Close button are available.|The user views the payment code or closes the window. No completed transaction confirmation is shown.|The prominent code focuses attention on payment, while explicit close controls provide an exit from the flow.",
      "Саҳифаи пардохти DCity бо QR-код.|Равзанаи берунӣ рангҳо ва нишони DCity ва QR-коди калонро бо навиштаи «QR - пардохт» нишон медиҳад. Аломати бастан ва тугмаи Close ҳастанд.|Корбар кодро барои идомаи пардохт мебинад ё равзанаро мебандад. Тасдиқи анҷоми амалиёт нишон дода нашудааст.|Коди калон унсури асосии саҳифа аст ва тугмаҳои равшан баромаданро осон мекунанд.",
    ],
  },
  {
    source: "151013", slug: "quick-menu",
    title: ["Кнопочное меню разделов", "Section shortcut keyboard", "Менюи тугмагии бахшҳо"],
    sections: [
      "Навигация через клавиатуру бота.|Над полем сообщения открыта сетка из четырёх кнопок: фильтры, профиль, абонемент и информация о сервисе. Иконки визуально различают назначения.|Пользователь выбирает раздел прямо с клавиатуры, не возвращаясь к старым сообщениям с командами.|Крупные кнопки дополняют текстовое меню и сокращают путь к регулярно используемым разделам.",
      "Navigate with the bot keyboard.|A four-button grid above the message field provides filters, profile, subscription and service information shortcuts. Icons distinguish their purposes.|The user opens a section without scrolling back to earlier command messages.|Large shortcuts complement the command menu and reduce the steps needed to reach frequent destinations.",
      "Роҳнамоӣ тавассути клавиатураи бот.|Болои майдони паём чор тугма барои филтрҳо, профил, абонемент ва маълумоти хизматрасонӣ ҳастанд. Нишонаҳо вазифаҳоро фарқ мекунанд.|Корбар бахшро бе баргаштан ба паёмҳои пешина интихоб мекунад.|Тугмаҳои калон менюи фармонҳоро пурра карда, роҳи бахшҳои зуд-зуд истифодашавандаро кӯтоҳ мекунанд.",
    ],
  },
  {
    source: "154456", slug: "property-notification",
    title: ["Уведомление о новой квартире", "New apartment notification", "Огоҳӣ дар бораи манзили нав"],
    sections: [
      "Результат поиска в формате карточки объявления.|Сообщение объединяет фотографию объекта, цену в TJS, площадь, число комнат, этаж, район и дату публикации. Ниже приведено текстовое описание объявления.|Кнопка «Подробнее» ведёт к дополнительной информации, а «Показать ещё квартиры» предлагает продолжить просмотр вариантов.|Основные характеристики доступны прямо в чате, поэтому пользователь может предварительно оценить предложение и решить, стоит ли открывать подробности.",
      "A search result presented as a listing card.|The message combines a property photo, price in TJS, area, room count, floor, district and publication date, followed by the listing description.|More details provides access to further information, while Show more apartments continues browsing.|Key facts in the chat let the user assess an offer before deciding whether to open its details.",
      "Натиҷаи ҷустуҷӯ дар шакли корти эълон.|Паём акси объект, нарх бо TJS, масоҳат, шумораи ҳуҷраҳо, ошёна, ноҳия ва санаи нашрро муттаҳид мекунад. Поён матни эълон аст.|Тугмаи «Муфассал» маълумоти бештарро мекушояд ва тугмаи манзилҳои дигар дидани вариантҳоро идома медиҳад.|Хусусиятҳои асосӣ дар чат дастрасанд, то корбар пешниҳодро пешакӣ арзёбӣ карда, зарурати кушодани тафсилотро муайян кунад.",
    ],
  },
];

const headings: Localized[] = [
  ["1. Интерфейс и функциональность", "1. Interface and functionality", "1. Интерфейс ва имкониятҳо"],
  ["2. Пользовательский сценарий", "2. User journey", "2. Раванди истифода"],
  ["3. Практическая ценность", "3. Practical value", "3. Аҳамияти амалӣ"],
];

type ComponentItem = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"][number];

export const zudyobScreens: ComponentItem[] = screens.map((screen) => {
  const localize = (values: Localized) => ({ ru: values[0], en: values[1], tj: values[2] });
  const descriptions = screen.sections.map((text, language) => {
    const [intro, ...sections] = text.split("|");
    return [intro, ...sections.map((section, index) => `${headings[index][language]}\n\n${section}`)].join("\n\n");
  }) as Localized;
  const image = `/images/projects/zudyob/screens/${screen.source}-${screen.slug}.webp`;

  return {
    slug: screen.slug,
    title: localize(screen.title),
    imageSrc: image,
    BannerSrc: image,
    imageFit: "contain",
    shortInfo: localize(screen.sections.map((text) => text.split("|")[0]) as Localized),
    fullInfo: localize(descriptions),
  };
});
