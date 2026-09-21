import type { ProductSiteItem } from "./product-site";

type Localized = [ru: string, en: string, tj: string];
type Screen = { source: string; slug: string; title: Localized; sections: Localized };

// Source timestamps keep every supplied screenshot traceable to its full-frame asset.
const screens: Screen[] = [
  {
    source: "153740", slug: "account-login",
    title: ["Вход в личный кабинет", "Account login", "Воридшавӣ ба кабинет"],
    sections: [
      "Авторизация по телефону и паролю.|Компактная карточка с логотипом ZudSMS расположена в центре светлого экрана. Поля телефона и пароля сопровождаются иконками; значок глаза обозначает управление видимостью пароля.|Под кнопкой «Вход» находятся ссылки восстановления доступа и регистрации. Виджет чата сохраняет возможность обратиться за помощью.|Такая структура сосредоточивает внимание на входе и предлагает понятные пути для нового пользователя или клиента, забывшего пароль.",
      "Sign in with a phone number and password.|A compact ZudSMS card sits in the centre of a light screen. Icons accompany the phone and password fields; an eye control indicates password visibility.|Below Sign in are password recovery and registration links. A chat widget provides a support entry point.|This focused layout supports returning customers, new users and people who need to recover access.",
      "Воридшавӣ бо телефон ва парол.|Корти хурди ZudSMS дар маркази экрани равшан ҷойгир аст. Майдонҳои телефон ва парол нишона доранд; нишонаи чашм намоиши паролро идора мекунад.|Зери тугмаи воридшавӣ пайвандҳои барқарорсозии дастрасӣ ва бақайдгирӣ ҳастанд. Виҷети чат роҳи муроҷиат ба дастгириро нигоҳ медорад.|Сохтор барои муштарии доимӣ, корбари нав ва шахси паролро фаромӯшкарда роҳҳои фаҳмо пешниҳод мекунад.",
    ],
  },
  {
    source: "153806", slug: "account-registration-phone",
    title: ["Регистрация: номер телефона", "Registration: phone number", "Бақайдгирӣ: рақами телефон"],
    sections: [
      "Первый шаг создания аккаунта.|Заголовок «Регистрация нового аккаунта» и индикатор «Шаг 1 из 3» объясняют положение пользователя в процессе. Поле телефона содержит отдельный префикс +992 и подсказку формата.|Кнопка «Отправить код» задаёт следующий шаг подтверждения номера. Ссылка «Я уже зарегистрирован» возвращает к авторизации.|Пошаговая подача уменьшает объём данных на первом экране и делает начало работы с сервисом последовательным.",
      "The first account creation step.|The registration heading and Step 1 of 3 indicator explain progress. The phone input separates the +992 prefix from the local number and provides a format hint.|Send code leads towards phone verification; an existing-user link returns to login.|A staged form keeps initial input short and gives onboarding a clear sequence.",
      "Қадами аввали сохтани ҳисоб.|Сарлавҳаи бақайдгирӣ ва нишондиҳандаи «Қадами 1 аз 3» марҳиларо мефаҳмонанд. Пешванди +992 аз майдони рақам ҷудо аст ва намунаи формат нишон дода мешавад.|Тугмаи ирсоли рамз ба тасдиқи телефон роҳ медиҳад; пайванди корбари бақайдгирифташуда ба воридшавӣ мебарад.|Шакли марҳилавӣ воридкунии аввалияро кӯтоҳ ва оғози корро пайдарпай мекунад.",
    ],
  },
  {
    source: "153857", slug: "account-registration-code",
    title: ["Регистрация: подтверждение номера", "Registration: phone verification", "Бақайдгирӣ: тасдиқи рақам"],
    sections: [
      "Второй шаг регистрации с вводом кода.|Карточка сохраняет логотип и оформление предыдущего этапа. Над единственным полем указано «Шаг 2 из 3: Подтверждение», а иконка ключа подчёркивает назначение кода.|Основное действие — «Подтвердить код». Ниже остаётся ссылка для уже зарегистрированных пользователей.|Отдельный экран отделяет проверку номера от заполнения профиля и помогает пользователю понимать, какое действие требуется сейчас.",
      "The second registration step requests a code.|The card retains the previous step’s branding. Step 2 of 3: Verification appears above a single code field with a key icon.|Confirm code is the primary action, with an existing-user link underneath.|A dedicated step separates phone verification from profile entry and clarifies the immediate task.",
      "Қадами дуюми бақайдгирӣ рамзро талаб мекунад.|Корт ороиши марҳилаи пешинаро нигоҳ медорад. «Қадами 2 аз 3: Тасдиқ» болои майдони ягона бо нишонаи калид ҷойгир аст.|Амали асосӣ тасдиқи рамз мебошад; поён пайванди корбари мавҷуда мемонад.|Марҳилаи алоҳида тасдиқи рақамро аз пур кардани профил ҷудо карда, вазифаи ҷориро равшан месозад.",
    ],
  },
  {
    source: "154640", slug: "account-registration-profile",
    title: ["Регистрация: создание профиля", "Registration: profile setup", "Бақайдгирӣ: сохтани профил"],
    sections: [
      "Завершающий этап регистрации.|Экран «Шаг 3 из 3» собирает имя, пароль, контактный номер и необязательный реферальный код. Поля выстроены вертикально и снабжены тематическими иконками.|Кнопка «Завершить регистрацию» завершает последовательность ввода. Реферальный код явно отмечен как необязательный, а ссылка входа остаётся доступной.|Форма объединяет настройку доступа и контактных сведений, сохраняя компактный формат знакомства с платформой.",
      "The final registration stage.|Step 3 of 3 collects a name, password, contact number and optional referral code. Fields form a vertical sequence with contextual icons.|Complete registration finishes input. The referral code is explicitly optional, and login remains accessible.|The form brings access setup and contact details together in a compact onboarding flow.",
      "Марҳилаи охирини бақайдгирӣ.|Қадами 3 аз 3 ном, парол, рақами тамос ва рамзи ихтиёрии тавсияро ҷамъ мекунад. Майдонҳо амудӣ ва бо нишонаҳои мувофиқ ҷойгиранд.|Тугмаи анҷоми бақайдгирӣ воридкуниро ба охир мерасонад. Ихтиёрӣ будани рамзи тавсия нишон дода шудааст ва пайванди воридшавӣ дастрас мемонад.|Шакл танзими дастрасӣ ва маълумоти тамосро дар як раванд ҷамъ мекунад.",
    ],
  },
  {
    source: "154740", slug: "account-contacts-empty",
    title: ["Контакты: начало работы", "Contacts: getting started", "Тамосҳо: оғози кор"],
    sections: [
      "Пустая адресная книга нового аккаунта.|Рабочая область сообщает об отсутствии данных. Слева расположено меню кабинета, сверху — имя пользователя, остаток SMS, денежный баланс и пополнение.|Панель контактов содержит импорт из Excel, ручное добавление, включение в группу и удаление. Счётчик выбранных записей равен нулю.|Экран показывает следующий шаг — заполнение базы получателей — и сохраняет основные инструменты на постоянных местах.",
      "An empty address book in a new account.|The workspace reports no data. The sidebar provides account navigation; the header shows the user, SMS allowance, balance and top-up action.|The toolbar offers Excel import, manual entry, group assignment and deletion. The selected-row count is zero.|The layout directs attention to building a recipient list while keeping tools consistently positioned.",
      "Дафтари холии тамосҳои ҳисоби нав.|Минтақаи корӣ набудани маълумотро нишон медиҳад. Меню дар чап аст; боло корбар, бақияи SMS, маблағ ва тугмаи пуркунӣ ҷойгиранд.|Панел воридот аз Excel, иловаи дастӣ, гурӯҳбандӣ ва ҳазфро пешниҳод мекунад. Шумораи сабтҳои интихобшуда сифр аст.|Экран қадами навбатӣ — пур кардани рӯйхати қабулкунандагонро равшан мекунад.",
    ],
  },
  {
    source: "154837", slug: "account-contacts-import",
    title: ["Импорт контактов из Excel", "Excel contact import", "Воридоти тамосҳо аз Excel"],
    sections: [
      "Модальное окно массового заполнения адресной книги.|Информационный блок описывает столбцы phone, full_name и address, обязательность телефона и пример формата. Рядом доступен образец файла для скачивания.|Форма содержит выбор файла .xls/.xlsx до 10 МБ и список групп. Кнопки закрытия и импорта расположены внизу окна.|Инструкции рядом с загрузкой помогают подготовить таблицу и перенести существующую базу без ручного ввода каждой записи.",
      "A modal for importing an address book.|The information panel explains phone, full_name and address columns, the required phone field and number format. A sample file download is available.|The form accepts .xls/.xlsx files up to 10 MB and provides a group selector, followed by close and import actions.|Inline guidance helps prepare an existing list for transfer without entering every contact manually.",
      "Равзанаи воридоти дафтари тамосҳо.|Блоки маълумот сутунҳои phone, full_name ва address, ҳатмӣ будани телефон ва форматро шарҳ медиҳад. Намунаи файл барои боргирӣ дастрас аст.|Шакл файли .xls/.xlsx то 10 МБ ва интихоби гурӯҳро пешниҳод мекунад; поён тугмаҳои бастан ва воридот ҳастанд.|Роҳнамо дар назди боркунӣ омода кардани ҷадвал ва интиқоли рӯйхатро осон мекунад.",
    ],
  },
  {
    source: "154846", slug: "account-contact-create",
    title: ["Добавление контакта", "Add a contact", "Иловаи тамос"],
    sections: [
      "Ручное создание записи получателя.|Форма содержит обязательный номер телефона, ФИО и адрес. Широкие поля выстроены в одну колонку, а звёздочка выделяет обязательное значение.|Под формой доступны «Сохранить» и «Отмена», сверху — возврат к списку. Боковая навигация и показатели баланса остаются видимыми.|Такой экран подходит для точечного пополнения базы и подготовки данных, которые затем могут использоваться для персонализации сообщений.",
      "Manual recipient entry.|The form contains a required phone number, full name and address. Wide fields use a single column, with an asterisk marking the mandatory value.|Save and Cancel sit below; Back returns to the list. Navigation and balance indicators remain visible.|This screen supports individual additions and prepares contact data for message personalisation.",
      "Иловаи дастии қабулкунанда.|Шакл рақами ҳатмии телефон, ному насаб ва суроғаро дар бар мегирад. Майдонҳои васеъ дар як сутунанд; ситорача қимати ҳатмиро нишон медиҳад.|Поён тугмаҳои сабт ва бекоркунӣ, боло бозгашт ба рӯйхат ҳастанд. Меню ва бақияҳо намоён мемонанд.|Экран барои иловаи алоҳида ва омода кардани маълумоти шахсисозии паёмҳо хизмат мекунад.",
    ],
  },
  {
    source: "155830", slug: "account-contacts-list",
    title: ["Таблица контактов", "Contact table", "Ҷадвали тамосҳо"],
    sections: [
      "Адресная книга с сохранённой записью.|Таблица показывает телефон, ФИО, адрес и действия. Флажки в заголовке и строках позволяют выбирать записи для групповых операций.|Под таблицей доступны размеры страницы 100, 500, 1000 и 5000, общее число контактов и переходы между страницами. Панель импорта и добавления остаётся сверху.|Единая таблица объединяет просмотр базы и её обслуживание, что удобно при подготовке аудитории рассылок.",
      "An address book with a saved contact.|Columns show phone, name, address and actions. Header and row checkboxes support selection for bulk operations.|Page-size controls offer 100, 500, 1,000 and 5,000 rows, alongside the total and pagination. Import and add actions remain above.|The table brings recipient review and list maintenance into one workspace.",
      "Дафтари тамосҳо бо сабти нигоҳдошташуда.|Сутунҳо телефон, ном, суроға ва амалҳоро нишон медиҳанд. Қуттиҳои интихоб дар сарлавҳа ва сатрҳо амалиёти гурӯҳиро дастгирӣ мекунанд.|Андозаи саҳифа 100, 500, 1000 ё 5000 сабт аст; шумораи умумӣ ва гузариши саҳифаҳо намоёнанд.|Ҷадвал дидани қабулкунандагон ва идоракунии рӯйхатро дар як муҳит ҷамъ мекунад.",
    ],
  },
  {
    source: "155015", slug: "account-group-create",
    title: ["Создание группы контактов", "Create a contact group", "Сохтани гурӯҳи тамосҳо"],
    sections: [
      "Подготовка отдельного сегмента получателей.|Экран «Добавить группу» содержит одно обязательное поле названия. На скриншоте оно заполнено тестовым именем и находится в фокусе.|Кнопки сохранения, отмены и возврата дают понятный выбор продолжения. В боковом меню выделен раздел «Группы».|Именованные группы помогают организовать базу по направлениям работы и выбирать нужную аудиторию при создании рассылки.",
      "Prepare a recipient segment.|The Add group screen contains one required name field, shown with a test value and input focus.|Save, Cancel and Back provide clear next actions; Groups is highlighted in the sidebar.|Named groups organise the address book and provide a way to select a particular audience when composing a campaign.",
      "Омода кардани гурӯҳи қабулкунандагон.|Экрани иловаи гурӯҳ як майдони ҳатмии ном дорад. Дар акс номи санҷишӣ ворид шуда, майдон фаъол аст.|Сабт, бекоркунӣ ва бозгашт амалҳои навбатиро муайян мекунанд; бахши гурӯҳҳо дар меню ҷудо шудааст.|Гурӯҳҳои номдор ба тартиб додани база ва интихоби аудиторияи муайян барои ирсоли паёмҳо ёрӣ медиҳанд.",
    ],
  },
  {
    source: "155838", slug: "account-group-assign",
    title: ["Добавление выбранных контактов в группу", "Assign selected contacts to a group", "Иловаи тамосҳои интихобшуда ба гурӯҳ"],
    sections: [
      "Группировка записей через короткий диалог.|На фоне виден выбранный контакт, а поверх таблицы открыто окно «Добавить в группу». Оно содержит список доступных групп с выбранным тестовым вариантом.|Пользователь проверяет группу и нажимает «Добавить» либо закрывает диалог. Выбор записей остаётся визуально связан с выполняемой операцией.|Модальное окно позволяет сегментировать базу прямо из общего списка без повторного ввода данных контакта.",
      "Group assignment through a short dialog.|A selected contact remains visible behind the Add to group modal. The dialog contains a group selector showing the test group.|Users check the destination and add the selection or close the dialog. The underlying selection keeps the operation in context.|This flow supports segmentation directly from the main list without re-entering contact details.",
      "Гурӯҳбандӣ тавассути равзанаи кӯтоҳ.|Тамоси интихобшуда дар паси равзанаи илова ба гурӯҳ намоён аст. Равзана рӯйхати гурӯҳҳоро бо варианти санҷишӣ дорад.|Корбар гурӯҳро санҷида, илова мекунад ё равзанаро мебандад. Интихоби замина амали ҷориро равшан нигоҳ медорад.|Ин раванд гурӯҳбандиро аз рӯйхати умумӣ бе такрори маълумоти тамос имконпазир мекунад.",
    ],
  },
  {
    source: "155843", slug: "account-group-assigned",
    title: ["Подтверждение добавления в группу", "Group assignment confirmation", "Тасдиқи илова ба гурӯҳ"],
    sections: [
      "Обратная связь после группировки контактов.|Зелёное уведомление над таблицей сообщает «Контакты добавлены в группу». Контакт остаётся в адресной книге с прежними полями.|Диалог закрыт, счётчик выбранных записей снова равен нулю, а панель действий готова к следующей операции.|Явное подтверждение результата помогает пользователю продолжать работу с базой, понимая, что предыдущий шаг завершён.",
      "Feedback after assigning contacts.|A green notification above the table confirms that contacts were added to the group. The contact remains in the address book.|The dialog is closed, the selected count is zero and the toolbar is ready for another operation.|Explicit confirmation makes the outcome clear before users continue managing the list.",
      "Натиҷаи иловаи тамосҳо ба гурӯҳ.|Огоҳии сабз болои ҷадвал илова шудани тамосҳоро тасдиқ мекунад. Тамос дар дафтари умумӣ мемонад.|Равзана баста, шумораи интихобшуда сифр ва панел барои амали нав омода аст.|Тасдиқи равшан ба корбар мефаҳмонад, ки қадами пешин анҷом ёфтааст ва корро идома додан мумкин аст.",
    ],
  },
  {
    source: "155913", slug: "account-group-members",
    title: ["Состав группы контактов", "Contact group members", "Аъзои гурӯҳи тамосҳо"],
    sections: [
      "Просмотр получателей выбранного сегмента.|Название группы вынесено в заголовок. В таблице показаны телефон, ФИО и адрес участника, справа — действие удаления.|Счётчик под таблицей отражает число контактов группы, а пагинация и кнопка «Назад» поддерживают навигацию.|Отдельное представление состава помогает проверить аудиторию перед запуском адресной рассылки.",
      "Review a selected recipient segment.|The group name appears in the heading. A table lists each member’s phone, name and address with a deletion action.|A count, pagination and Back control support navigation.|This dedicated view helps users check their intended audience before composing a targeted campaign.",
      "Дидани қабулкунандагони гурӯҳи интихобшуда.|Номи гурӯҳ дар сарлавҳа ҷойгир аст. Ҷадвал телефон, ном ва суроғаи аъзоро бо амали ҳазф нишон медиҳад.|Ҳисобкунак, гузариши саҳифаҳо ва тугмаи бозгашт роҳнамоиро таъмин мекунанд.|Намоиши алоҳида санҷидани аудиторияро пеш аз омода кардани ирсоли ҳадафнок осон мекунад.",
    ],
  },
  {
    source: "155041", slug: "account-templates-empty",
    title: ["Шаблоны: пустой список", "Templates: empty list", "Қолабҳо: рӯйхати холӣ"],
    sections: [
      "Начальное состояние библиотеки сообщений.|В разделе «Шаблоны» показано отсутствие данных, а справа от заголовка выделена кнопка «Добавить шаблон».|Пустая область не перегружена дополнительными элементами; основное действие остаётся рядом с названием раздела. Боковое меню сохраняет переход к рассылкам.|Библиотека шаблонов предназначена для организации повторяющихся текстов, а это состояние показывает точку начала её заполнения.",
      "The initial message library state.|Templates reports no data and places Add template beside the heading.|The empty workspace keeps the main action prominent, with campaign navigation available in the sidebar.|This state introduces a library intended to organise recurring message text and shows where to begin adding entries.",
      "Ҳолати аввалини китобхонаи паёмҳо.|Бахши қолабҳо набудани маълумот ва тугмаи иловаи қолабро дар назди сарлавҳа нишон медиҳад.|Минтақаи холӣ диққатро ба амали асосӣ равона мекунад; меню гузариш ба ирсолҳоро нигоҳ медорад.|Ин ҳолат оғози пур кардани китобхонаеро нишон медиҳад, ки барои матнҳои такрорӣ пешбинӣ шудааст.",
    ],
  },
  {
    source: "155112", slug: "account-templates-list",
    title: ["Библиотека шаблонов сообщений", "Message template library", "Китобхонаи қолабҳои паём"],
    sections: [
      "Список сохранённых текстовых заготовок.|Таблица содержит название шаблона, его содержание и действия. На скриншоте показана одна тестовая запись.|Синие и красные кнопки различают редактирование и удаление. Кнопка добавления нового шаблона сохраняется над таблицей.|Название помогает ориентироваться в библиотеке, а видимый текст позволяет оценить заготовку до открытия редактора и поддерживать единообразие сообщений.",
      "A list of saved message drafts.|The table shows template names, content and actions, with one test entry visible.|Blue and red controls distinguish editing from deletion. Add template remains above the table.|Names organise the library, while visible content lets users review drafts before opening an editor and maintain consistent messaging.",
      "Рӯйхати матнҳои омодашуда.|Ҷадвал номи қолаб, муҳтаво ва амалҳоро бо як сабти санҷишӣ нишон медиҳад.|Тугмаҳои кабуд ва сурх таҳрирро аз ҳазф фарқ мекунанд. Иловаи қолаби нав болои ҷадвал мемонад.|Номҳо китобхонаро ба тартиб меоранд ва матни намоён санҷидани қолабро пеш аз таҳрир осон мекунад.",
    ],
  },
  {
    source: "155121", slug: "account-campaigns-empty",
    title: ["Рассылки: начало работы", "Campaigns: getting started", "Ирсолҳо: оғози кор"],
    sections: [
      "Начальное состояние раздела «Мои рассылки».|Основная карточка сообщает «Нет рассылок». Кнопка «Создать заявку» вынесена вправо от заголовка, а раздел рассылок выделен в меню.|Верхняя панель показывает доступные SMS и баланс, позволяя оценить ресурсы перед подготовкой сообщения.|Пустое состояние предлагает одно основное действие и служит отправной точкой для создания первой кампании.",
      "The initial My campaigns screen.|The main panel reports no campaigns. Create request appears beside the heading, while Campaigns is highlighted in navigation.|The header shows SMS availability and account balance before message preparation.|This empty state offers one clear primary action for starting the first campaign.",
      "Ҳолати аввалини бахши ирсолҳо.|Корти асосӣ набудани ирсолҳоро нишон медиҳад. Тугмаи сохтани дархост назди сарлавҳа ва бахши фаъол дар меню ҷудо шудаанд.|Боло бақияи SMS ва маблағ пеш аз омода кардани паём намоёнанд.|Ҳолати холӣ як амали асосиро барои оғози маъракаи аввал пешниҳод мекунад.",
    ],
  },
  {
    source: "155136", slug: "account-campaign-single",
    title: ["Рассылка на один номер", "Single-recipient campaign", "Ирсол ба як рақам"],
    sections: [
      "Форма подготовки одиночного SMS.|Верхняя часть объединяет псевдоним отправителя, свободный SMS-баланс, тип рассылки и необязательное время отправки. Подсказка связывает немедленную отправку с предварительным одобрением заявки.|Далее идут номер получателя, текст и счётчик символов. Для одного номера доступна переменная телефона; ограничения других переменных объяснены рядом с редактором.|Сводные подсказки о длине SMS и кнопка создания заявки помогают проверить параметры сообщения перед передачей на обработку.",
      "Compose an SMS for one recipient.|Sender nickname, available SMS, campaign type and optional send time appear first. A hint explains immediate sending after approval.|Recipient number, message text and a character counter follow. Only the phone variable is available for this mode; other variable restrictions are explained inline.|Length guidance and a request action help users review the message before submission.",
      "Омода кардани SMS барои як қабулкунанда.|Аввал номи фиристанда, бақияи SMS, навъи ирсол ва вақти ихтиёрӣ ҷойгиранд. Роҳнамо ирсоли фавриро баъд аз тасдиқ шарҳ медиҳад.|Сипас рақам, матн ва ҳисобкунаки аломатҳо ҳастанд. Дар ин режим танҳо тағйирёбандаи телефон дастрас аст.|Шарҳи дарозии SMS ва тугмаи дархост барои санҷидани параметрҳо пеш аз пешниҳод ёрӣ медиҳанд.",
    ],
  },
  {
    source: "155143", slug: "account-sender-request",
    title: ["Заявка на имя отправителя", "Sender name request", "Дархости номи фиристанда"],
    sections: [
      "Оформление нового псевдонима внутри рассылки.|Модальное окно показывает стоимость нового имени и обязательное поле ввода. На скриншоте указана цена 100 TJS и ограничение длины до 11 символов.|Под полем перечислены допустимые символы, а информационная плашка сообщает о списании с основного баланса. Доступны отмена и отправка заявки.|Такое представление объединяет требования к имени и условия оформления непосредственно в рабочем сценарии клиента.",
      "Request a sender nickname while composing a campaign.|The modal shows a price and required name field. The captured interface lists 100 TJS and a maximum length of 11 characters.|Allowed characters and a main-balance debit notice accompany Cancel and Submit request.|Requirements and purchase context appear together within the customer’s workflow.",
      "Дархости номи фиристанда ҳангоми омода кардани ирсол.|Равзана нарх ва майдони ҳатмии номро нишон медиҳад. Дар акс 100 TJS ва ҳадди 11 аломат оварда шудаанд.|Аломатҳои иҷозатшуда ва огоҳии камшавии бақияи асосӣ дар назди бекоркунӣ ва пешниҳоди дархост ҷойгиранд.|Талабот ва шартҳои расмикунонӣ дар дохили раванди кор фаҳмонда мешаванд.",
    ],
  },
  {
    source: "155215", slug: "account-campaign-all-contacts",
    title: ["Рассылка всем контактам", "Campaign for all contacts", "Ирсол ба ҳамаи тамосҳо"],
    sections: [
      "Создание сообщения для всей адресной книги.|В поле типа выбран вариант «Всем контактам», поэтому отдельный номер получателя не требуется. Имя отправителя и планирование времени остаются в верхней части.|Редактор предлагает переменные имени, ФИО, телефона и адреса, а пояснение связывает их с данными контактов. Под текстом расположен счётчик символов и SMS.|Единая форма позволяет подготовить общее обращение с персональными данными получателя и передать его как заявку.",
      "Compose a message for the entire address book.|All contacts is selected, removing the need for an individual phone input. Sender and optional scheduling remain above.|Name, full name, phone and address variables reference contact data. Character and SMS counts appear beneath the editor.|The form combines a shared message with recipient-specific information before request submission.",
      "Омода кардани паём барои ҳамаи тамосҳо.|Варианти ҳамаи тамосҳо интихоб шудааст ва рақами алоҳида лозим нест. Номи фиристанда ва вақти ихтиёрӣ боло мемонанд.|Тағйирёбандаҳои ном, ному насаб, телефон ва суроға ба маълумоти тамосҳо пайвастанд. Ҳисобкунакҳо зери муҳаррир ҳастанд.|Шакл матни умумиро бо маълумоти шахсии қабулкунанда муттаҳид мекунад.",
    ],
  },
  {
    source: "155220", slug: "account-campaign-group-select",
    title: ["Выбор группы для рассылки", "Select a campaign group", "Интихоби гурӯҳи ирсол"],
    sections: [
      "Настройка аудитории групповой рассылки.|Тип «Группе контактов» добавляет обязательный выбор группы. Раскрытый список показывает название тестовой группы и число контактов в скобках; в этом состоянии оно равно нулю.|Ниже остаются редактор сообщения и кнопки персонализации. Имя отправителя и расписание доступны в той же форме.|Количество участников рядом с названием помогает оценить выбранный сегмент до создания заявки.",
      "Choose the audience for a group campaign.|Group mode adds a required selector. The expanded list shows the test group and its contact count, zero in this captured state.|The editor and personalisation controls remain below, with sender and scheduling above.|A count alongside the group name helps users assess their selection before creating a request.",
      "Танзими аудиторияи ирсоли гурӯҳӣ.|Режими гурӯҳӣ интихоби ҳатмии гурӯҳро илова мекунад. Рӯйхати кушода ном ва шумораи тамосҳоро нишон медиҳад; дар ин ҳолат шумора сифр аст.|Муҳаррир ва шахсисозӣ поён, фиристанда ва вақт боло мемонанд.|Шумора дар назди номи гурӯҳ барои арзёбии интихоби қабулкунандагон пеш аз дархост ёрӣ медиҳад.",
    ],
  },
  {
    source: "155234", slug: "account-campaign-personalization",
    title: ["Персонализация текста SMS", "SMS text personalisation", "Шахсисозии матни SMS"],
    sections: [
      "Вставка переменной в сообщение.|В текстовом поле показан маркер имени, а над ним доступны кнопки имени, ФИО, телефона и адреса. Подсказка объясняет источник значений из базы контактов.|Счётчик отражает текущую длину текста и число сегментов. Группа ещё не выбрана, поэтому экран показывает промежуточный этап подготовки.|Переменные позволяют составлять один текст для нескольких адресатов, сохраняя возможность обращения по имени.",
      "Insert a variable into a message.|A name placeholder appears in the editor. Buttons above offer name, full name, phone and address, with a hint explaining contact-based values.|The counter shows current text length and segments. No group is selected yet, marking an intermediate preparation state.|Variables support a shared message with individual greetings.",
      "Гузоштани тағйирёбанда ба паём.|Дар муҳаррир ҷойнишини ном намоён аст. Тугмаҳои боло ном, ному насаб, телефон ва суроғаро пешниҳод мекунанд; роҳнамо манбаи онҳоро шарҳ медиҳад.|Ҳисобкунак дарозӣ ва қисмҳоро нишон медиҳад. Гурӯҳ ҳанӯз интихоб нашудааст.|Тағйирёбандаҳо як матнро бо муроҷиати шахсӣ барои чанд қабулкунанда омода мекунанд.",
    ],
  },
  {
    source: "155326", slug: "account-campaign-estimate",
    title: ["Оценка расхода SMS перед отправкой", "SMS usage estimate", "Арзёбии сарфи SMS"],
    sections: [
      "Проверка подготовленной групповой рассылки.|Выбрана группа с одним контактом, а сообщение содержит переменную ФИО и тестовый текст. Под редактором показаны длина текста и предварительная оценка расхода.|Информационный блок указывает диапазон SMS на получателя и общий ориентир. Отдельная подсказка предупреждает, что длинные подставленные имена могут увеличить число сегментов.|Оценка рядом с кнопкой создания заявки помогает сопоставить содержание сообщения и ожидаемый расход пакета.",
      "Review a prepared group campaign.|A one-contact group is selected and the message contains a full-name variable with test text. Length and estimated usage appear below.|A panel shows SMS per recipient and an approximate total, noting that longer substituted names can increase segment counts.|The estimate helps relate message content to expected package consumption.",
      "Санҷиши ирсоли гурӯҳии омодашуда.|Гурӯҳи якнафара интихоб шуда, матн тағйирёбандаи ному насаб дорад. Дарозӣ ва сарфи тахминӣ дар поён нишон дода мешаванд.|Блок SMS барои ҳар қабулкунанда ва ҷамъро меорад; номҳои дароз метавонанд қисмҳоро зиёд кунанд.|Арзёбӣ матни паёмро бо сарфи эҳтимолии баста муқоиса карданро осон мекунад.",
    ],
  },
  {
    source: "155339", slug: "account-campaign-pending",
    title: ["Рассылка в ожидании одобрения", "Campaign awaiting approval", "Ирсол дар интизори тасдиқ"],
    sections: [
      "Сохранённая заявка в списке рассылок.|Строка объединяет идентификатор, псевдоним, тип аудитории, текст, статус и даты. Жёлтая метка «Ожидает одобрения» отличает заявку от завершённой отправки.|Для групповой рассылки указано имя группы, а под текстом показано количество SMS. Кнопка с глазом открывает подробности.|Табличный обзор позволяет отслеживать подготовленные кампании и понимать их текущее состояние.",
      "A saved request in the campaign list.|The row combines ID, sender, audience, message, status and dates. A yellow Awaiting approval badge distinguishes this request from a completed send.|The group name and SMS count provide context; an eye button leads to details.|The overview makes submitted campaigns and their current state easy to review.",
      "Дархости сабтшуда дар рӯйхати ирсолҳо.|Сатр рақам, фиристанда, аудитория, матн, ҳолат ва санаҳоро муттаҳид мекунад. Нишонаи зард интизори тасдиқ буданро нишон медиҳад.|Номи гурӯҳ ва шумораи SMS маълумотро пурра мекунанд; тугмаи чашм тафсилотро мекушояд.|Намоиши ҷадвалӣ пайгирии маъракаҳо ва фаҳмидани ҳолати онҳоро осон мекунад.",
    ],
  },
  {
    source: "155346", slug: "account-campaign-details",
    title: ["Подробности заявки на рассылку", "Campaign request details", "Тафсилоти дархости ирсол"],
    sections: [
      "Карточка отдельной кампании.|Экран показывает ID, тип рассылки, выбранную группу, статус ожидания и дату создания. Текст сообщения выделен отдельной светлой областью.|В нижней части указано последнее обновление, а кнопка «Назад» возвращает к списку. Значение переменной в тексте сохранено как маркер.|Такое представление собирает параметры заявки в одном месте и помогает проверить, что именно было передано на одобрение.",
      "A dedicated campaign record.|The screen shows ID, campaign type, group, pending status and creation date. A separate panel highlights the message, retaining its variable placeholder.|The last update appears below, and Back returns to the list.|This view gathers the submitted parameters for a focused review of the approval request.",
      "Корти алоҳидаи маърака.|Экран рақам, навъ, гурӯҳ, ҳолати интизорӣ ва санаи сохтани дархостро нишон медиҳад. Матн дар блоки алоҳида бо ҷойнишини тағйирёбанда аст.|Навсозии охирин поён ва бозгашт боло ҷойгиранд.|Ин намоиш параметрҳои пешниҳодшударо барои санҷиши дархост дар як ҷо ҷамъ мекунад.",
    ],
  },
  {
    source: "155358", slug: "account-packages-catalog",
    title: ["Доступные пакеты SMS", "Available SMS packages", "Бастаҳои дастраси SMS"],
    sections: [
      "Каталог пакетов внутри личного кабинета.|Вкладки разделяют доступные предложения, купленные пакеты и индивидуальный тариф. Цветная сетка показывает объёмы от пробных 5 до 100 000 SMS.|Карточки содержат название, количество, цену, срок и кнопку покупки. Короткие метки объясняют позиционирование предложений.|Единая структура карточек упрощает сравнение объёма и стоимости; значения отражают представленный скриншот, а не актуальный прайс.",
      "The account’s SMS package catalogue.|Tabs separate available offers, owned packages and custom pricing. Coloured cards show volumes from a five-message trial to 100,000 SMS.|Each card presents a name, allowance, price, duration and purchase action with a positioning label.|Consistent cards support comparison. Values describe the captured interface rather than a current price list.",
      "Феҳристи бастаҳои SMS дар кабинет.|Варақаҳо пешниҳодҳо, бастаҳои харидашуда ва тарофаи инфиродиро ҷудо мекунанд. Кортҳо аз 5 SMS-и санҷишӣ то 100 000 SMS-ро нишон медиҳанд.|Ҳар корт ном, ҳаҷм, нарх, муҳлат ва харид дорад.|Сохтори ягона муқоисаро осон мекунад; қиматҳо ҳолати скриншотро инъикос менамоянд.",
    ],
  },
  {
    source: "155406", slug: "account-packages-owned",
    title: ["Мои пакеты и остатки SMS", "Owned packages and SMS balances", "Бастаҳои ман ва бақияи SMS"],
    sections: [
      "Учёт подключённых пакетов.|На вкладке «Мои пакеты» видна пробная подписка: стоимость, всего SMS, остаток, дата покупки и срок действия представлены в строке таблицы.|Зелёная полоса визуализирует остаток. Рядом расположены переключатель автопродления и кнопка «Распределить».|Обзор помогает контролировать доступный ресурс и сроки, а также переходить к распределению SMS между именами отправителя.",
      "Track purchased packages.|My packages shows a trial row with cost, total SMS, remaining allowance, purchase date and expiry.|A green bar visualises the remainder, alongside auto-renewal and allocation controls.|The overview helps users monitor resources and dates and move to assigning SMS to sender names.",
      "Назорати бастаҳои пайвастшуда.|Варақаи бастаҳои ман сатри санҷиширо бо нарх, шумораи SMS, бақия, санаи харид ва анҷоми муҳлат нишон медиҳад.|Хатти сабз бақияро намоиш медиҳад; дар паҳлӯ тамдиди худкор ва тақсимкунӣ ҳастанд.|Намоиш назорати захира ва муҳлатҳоро осон карда, ба тақсими SMS байни фиристандагон роҳ медиҳад.",
    ],
  },
  {
    source: "155417", slug: "account-package-allocation",
    title: ["Распределение SMS по отправителям", "Allocate SMS to senders", "Тақсими SMS байни фиристандагон"],
    sections: [
      "Настройка распределения выбранного пакета.|В модальном окне показаны всего SMS, свободный остаток, распределённое количество и индикатор процента. На скриншоте все пять SMS ещё свободны.|Форма добавления распределения содержит список никнеймов, количество и кнопку сохранения. Открытый список показывает доступного отправителя.|Сводка и форма в одном окне позволяют связать лимит пакета с конкретным именем отправителя и контролировать оставшийся объём.",
      "Configure allocation for a package.|The modal summarises total, free and allocated SMS with a progress bar. All five messages are unallocated in this capture.|A sender selector, quantity field and Save action define a new allocation.|The summary and form connect package capacity to a sender name while keeping the remaining volume visible.",
      "Танзими тақсимоти баста.|Равзана шумораи умумӣ, озод ва тақсимшудаи SMS-ро бо нишондиҳанда меорад. Дар акс ҳамаи панҷ паём озоданд.|Интихоби фиристанда, майдони шумора ва сабт тақсимоти навро муайян мекунанд.|Хулоса ва шакл ҳаҷми бастаро ба номи фиристанда пайваста, бақияро намоён нигоҳ медоранд.",
    ],
  },
  {
    source: "155425", slug: "account-custom-plan-empty",
    title: ["Конструктор индивидуального тарифа", "Custom plan builder", "Созандаи тарофаи инфиродӣ"],
    sections: [
      "Выбор объёма и срока SMS-пакета.|Слева представлены ценовые диапазоны для сроков 1–30 дней и от 31 дня, внутри — уровни количества сообщений. Справа находится форма расчёта.|Поля количества SMS и срока показывают минимальные значения 10 и 1. До ввода параметров кнопка покупки визуально приглушена.|Размещение правил рядом с калькулятором делает условия выбора наглядными и помогает подобрать собственную комбинацию объёма и срока.",
      "Choose SMS volume and duration.|Pricing tiers on the left separate 1–30 days from 31 days or more, with message-volume ranges inside each. A calculation form sits on the right.|Quantity and duration hints show minimums of ten and one; the purchase action is subdued before input.|Placing rules beside the form makes the available combinations easier to understand.",
      "Интихоби ҳаҷм ва муҳлати SMS.|Дар чап нархҳо барои 1–30 рӯз ва аз 31 рӯз бо зинаҳои шумораи паёмҳо оварда шудаанд. Дар рост шакли ҳисоб ҷойгир аст.|Майдонҳо ҳадди ақали 10 паём ва 1 рӯзро нишон медиҳанд; тугмаи харид то воридкунӣ камранг аст.|Қоидаҳо дар назди ҳисобкунак интихоби таркиби мувофиқро равшан мекунанд.",
    ],
  },
  {
    source: "160334", slug: "account-custom-plan-calculated",
    title: ["Расчёт стоимости своего тарифа", "Custom plan price calculation", "Ҳисоби нархи тарофаи инфиродӣ"],
    sections: [
      "Предварительная стоимость после ввода параметров.|В форме указаны 10 SMS и один день. Блок результата показывает 0,51 TJS и расчёт 10 SMS × 0,051 TJS.|Кнопка «Купить тариф» выделена синим, под ней отображён прогноз остатка баланса после покупки. Таблицы цен сохраняются слева.|Пользователь видит параметры, итоговую сумму и влияние покупки на баланс до перехода к подтверждению; суммы относятся к этому состоянию экрана.",
      "A price preview after entering parameters.|The form contains ten SMS and one day. The result shows 0.51 TJS and its quantity-times-rate calculation.|A blue purchase button is followed by the projected remaining balance; pricing tables remain visible.|The captured state presents the parameters, cost and balance impact before confirmation.",
      "Пешнамоиши нарх баъд аз воридкунии параметрҳо.|Шакл 10 SMS ва як рӯз дорад. Натиҷа 0,51 TJS ва ҳисоби шумора зарби нархро нишон медиҳад.|Зери тугмаи кабуди харид бақияи пешбинишуда ҷойгир аст; ҷадвалҳои нарх намоён мемонанд.|Корбар параметрҳо, арзиш ва таъсир ба бақияро пеш аз тасдиқ мебинад.",
    ],
  },
  {
    source: "160349", slug: "account-custom-plan-confirm",
    title: ["Подтверждение покупки тарифа", "Confirm a custom plan purchase", "Тасдиқи хариди тарофа"],
    sections: [
      "Проверка условий перед списанием средств.|Окно «Свой тариф — подтверждение» собирает количество SMS, срок, цену за сообщение, итог и будущий баланс. В этом отдельном примере выбраны 10 SMS на 1000 дней.|Пояснение сообщает о списании с баланса. Внизу доступны отмена и подтверждение покупки.|Отдельный шаг делает окончательные параметры заметными и позволяет проверить их перед завершением операции.",
      "Review terms before a balance debit.|The confirmation modal summarises volume, duration, unit price, total and future balance. This separate example uses ten SMS for 1,000 days.|A debit notice accompanies Cancel and Confirm purchase.|The final review step makes the selected terms explicit before completing the transaction.",
      "Санҷиши шартҳо пеш аз камшавии бақия.|Равзана ҳаҷм, муҳлат, нархи як паём, ҷамъ ва бақияи ояндаро нишон медиҳад. Ин мисоли алоҳида 10 SMS барои 1000 рӯз дорад.|Огоҳии пардохт аз бақия бо бекоркунӣ ва тасдиқ ҳамроҳ аст.|Қадами охирин параметрҳоро пеш аз анҷоми амалиёт равшан мекунад.",
    ],
  },
  {
    source: "160359", slug: "account-custom-plan-purchased",
    title: ["Индивидуальный тариф после покупки", "Custom plan after purchase", "Тарофаи инфиродӣ баъд аз харид"],
    sections: [
      "Обновлённый список подключённых пакетов.|В таблице рядом с пробным пакетом появилась строка «Свой тариф» с отдельной меткой, стоимостью и остатком 10 SMS. Для каждого пакета показаны собственные даты и элементы управления.|Верхняя панель отражает общий доступный объём 15 SMS и баланс 0,50 TJS в представленном примере.|Результат покупки виден в том же разделе, где пользователь контролирует пакеты, распределение и сроки действия.",
      "The updated owned-package list.|A labelled custom plan now appears beside the trial, with its own cost, ten-message remainder, dates and controls.|The header shows 15 available SMS and a 0.50 TJS balance in this captured example.|The purchase result is visible within the workspace used to track allowances, allocation and expiry.",
      "Рӯйхати навшудаи бастаҳо.|Дар назди бастаи санҷишӣ тарофаи инфиродӣ бо нишона, нарх, бақияи 10 паём, санаҳо ва амалҳои худ пайдо шудааст.|Боло дар ин мисол 15 SMS ва бақияи 0,50 TJS намоён аст.|Натиҷаи харид дар ҳамон муҳити назорати ҳаҷм, тақсимот ва муҳлатҳо дида мешавад.",
    ],
  },
  {
    source: "155458", slug: "account-sms-report",
    title: ["Отчёт по отправленным SMS", "Sent SMS report", "Ҳисоботи SMS-и ирсолшуда"],
    sections: [
      "Поиск сообщений в истории отправки.|Панель фильтров содержит начальную и конечную даты, поиск по тексту и выбор статуса. Кнопки «Найти» и «Сброс» управляют условиями просмотра.|Результаты выделены в отдельную карточку; на скриншоте она пуста. Боковое меню отличает отчёт от списка заявок на рассылку.|Такое разделение помогает переходить от подготовки кампаний к поиску конкретных отправленных сообщений по периоду и состоянию.",
      "Search sent-message history.|Filters include start and end dates, message text and status, with Find and Reset actions.|Results occupy a separate panel, empty in this capture. Navigation distinguishes reporting from campaign requests.|The structure supports moving from campaign preparation to looking up sent messages by period and state.",
      "Ҷустуҷӯ дар таърихи паёмҳо.|Филтрҳо санаҳои оғозу анҷом, матн ва ҳолатро бо тугмаҳои ҷустуҷӯ ва барқароркунӣ дар бар мегиранд.|Натиҷаҳо дар корти алоҳидаанд, ки дар акс холӣ аст. Меню ҳисоботро аз дархостҳои ирсол фарқ мекунад.|Сохтор ёфтани паёмҳоро аз рӯйи давра ва ҳолат осон мекунад.",
    ],
  },
  {
    source: "160103", slug: "account-top-up-alif",
    title: ["Пополнение баланса через Alif", "Balance top-up through Alif", "Пур кардани бақия тавассути Alif"],
    sections: [
      "Инструкция по пополнению в личном кабинете.|Модальное окно поверх истории платежей показывает последовательность действий в Alif и лицевой счёт с кнопкой копирования.|Альтернативный путь представлен кнопкой «Открыть в Alif». Кнопка «Понятно» закрывает справку и возвращает пользователя к кабинету.|Сведения о счёте и переход к оплате собраны рядом, чтобы клиент мог продолжить пополнение без поиска реквизитов в другом разделе.",
      "Top-up guidance inside the account.|A modal above payment history presents the Alif steps and an account number with a copy control.|Open in Alif offers an alternative route; a dismissal button returns to the account.|Account details and the payment entry point are placed together so users can continue without searching elsewhere for their identifier.",
      "Роҳнамои пуркунии бақия дар кабинет.|Равзана болои таърихи пардохтҳо қадамҳои Alif ва рақами ҳисобро бо нусхабардорӣ нишон медиҳад.|Тугмаи кушодан дар Alif роҳи дигар аст; бастани роҳнамо ба кабинет бармегардонад.|Маълумоти ҳисоб ва гузариш ба пардохт дар як ҷо ҷамъ шудаанд, то ҷустуҷӯи иловагӣ лозим нашавад.",
    ],
  },
  {
    source: "160453", slug: "account-payment-history",
    title: ["История пополнений и списаний", "Top-up and debit history", "Таърихи пуркунӣ ва хароҷот"],
    sections: [
      "Контроль движения средств и доступных SMS.|Четыре карточки показывают текущий баланс, суммы пополнений и списаний на странице, а также доступные SMS. В таблице видны отдельные операции с ID, типом, суммой и датой.|Зелёные и красные значения различают поступления и расходы. Фильтры «Все», «Пополнения», «Списания», размер страницы и пагинация управляют просмотром.|Экран помогает сверить пополнение с покупкой пакета и понять, из каких операций сложился текущий баланс.",
      "Review funds and SMS availability.|Four cards show balance, page totals for top-ups and debits, and available SMS. The table lists transaction IDs, types, amounts and dates.|Green and red distinguish credits and debits; type filters, page size and pagination control the view.|This screen helps relate a top-up to a package purchase and understand the resulting balance.",
      "Назорати маблағ ва SMS.|Чор корт бақия, ҷамъҳои пуркунӣ ва хароҷоти саҳифа ва SMS-и дастрасро нишон медиҳанд. Ҷадвал рақам, навъ, маблағ ва санаи амалиётро дорад.|Сабз ва сурх воридотро аз хароҷот ҷудо мекунанд; филтрҳо ва саҳифабандӣ намоишро идора мекунанд.|Экран муқоисаи пуркунӣ бо хариди баста ва фаҳмидани бақияро осон мекунад.",
    ],
  },
  {
    source: "155512", slug: "account-api-overview",
    title: ["API: протокол взаимодействия", "API: integration overview", "API: шарҳи ҳамгироӣ"],
    sections: [
      "Документация для подключения внешних систем.|Внутри кабинета размещены оглавление ZudSMS API и основная область документации. Меню охватывает отправку SMS, денежный баланс, остаток сообщений, массовую отправку и ошибки.|Вводный блок описывает HTTP, JSON и UTF-8, далее начинается таблица параметров отправки. Метки методов GET и POST помогают различать операции.|Структурированный справочник даёт разработчику маршрут от знакомства с протоколом к конкретной функции интеграции.",
      "Documentation for connecting external systems.|The account contains an API contents panel and reading area. Topics cover sending, monetary balance, SMS allowance, bulk delivery and errors.|The introduction presents HTTP, JSON and UTF-8 before the send-parameter table. GET and POST labels distinguish operations.|The reference gives developers a route from protocol basics to a particular integration feature.",
      "Ҳуҷҷатҳо барои пайваст кардани системаҳои беруна.|Дар кабинет феҳристи API ва минтақаи хондан ҷойгиранд. Мавзӯъҳо ирсол, бақияи маблағ, SMS, ирсоли оммавӣ ва хатоҳоро фаро мегиранд.|Муқаддима HTTP, JSON ва UTF-8-ро пеш аз ҷадвали параметрҳо шарҳ медиҳад. GET ва POST амалҳоро фарқ мекунанд.|Маълумотнома аз асосҳои протокол ба имконияти мушаххаси ҳамгироӣ роҳ медиҳад.",
    ],
  },
  {
    source: "155521", slug: "account-api-send-example",
    title: ["API: подпись и примеры отправки", "API: signatures and send examples", "API: имзо ва намунаҳои ирсол"],
    sections: [
      "Представление параметров подписи и примеров запроса.|Верхний блок документации показывает формирование str_hash и поясняет роль секретного параметра. Ниже расположен пример отправки в тёмной области с подсветкой синтаксиса.|Вкладки предлагают cURL, PHP, Laravel, Python, Go и C++. Следом начинается описание проверки баланса.|Сочетание пояснения и примеров на разных языках помогает разработчику соотнести документацию с используемыми инструментами; экран описывает справочный интерфейс.",
      "Signature guidance and request examples.|The upper reference panel presents str_hash construction and explains the secret parameter. A dark syntax-highlighted send example follows.|Tabs offer cURL, PHP, Laravel, Python, Go and C++; the balance section begins underneath.|Explanations and language-specific examples help developers relate the reference to their tools. This is a documentation interface showcase.",
      "Шарҳи имзо ва намунаҳои дархост.|Блоки боло сохтани str_hash ва нақши параметри махфиро мефаҳмонад. Пас аз он намунаи ирсол бо ранга кардани синтаксис аст.|Варақаҳо cURL, PHP, Laravel, Python, Go ва C++-ро пешниҳод мекунанд; поён бахши бақия оғоз мешавад.|Шарҳ ва намунаҳои забонӣ барои фаҳмидани маълумотнома бо воситаҳои шинос ёрӣ медиҳанд.",
    ],
  },
  {
    source: "155526", slug: "account-api-balance",
    title: ["API: проверка денежного баланса", "API: monetary balance reference", "API: маълумотномаи бақияи маблағ"],
    sections: [
      "Справочная страница получения баланса.|Заголовок и метка GET выделяют операцию, таблица перечисляет обязательные и дополнительные параметры. Ниже размещён отдельный блок формирования подписи.|Пример успешного JSON-ответа визуально отделён тёмным фоном и меткой «200 OK». Пояснение под ним различает строковое значение баланса и целое число в дирамах.|Такая организация документации связывает параметры запроса с форматом результата и делает пример ответа удобным для изучения.",
      "Reference for retrieving the monetary balance.|A heading and GET label identify the operation. A table separates required and optional inputs, followed by signature guidance.|A dark successful-response example carries a 200 OK badge. Its note distinguishes a balance string from an integer amount in dirams.|The layout connects request inputs with the response format for easier study.",
      "Маълумотнома барои гирифтани бақияи маблағ.|Сарлавҳа ва GET амалиётро муайян мекунанд. Ҷадвал параметрҳои ҳатмӣ ва ихтиёриро ҷудо карда, бо шарҳи имзо идома меёбад.|Намунаи ҷавоби муваффақ дар заминаи торик бо нишонаи 200 OK аст. Шарҳ қимати матниро аз маблағи бутун дар дирам фарқ мекунад.|Сохтор параметрҳоро бо формати натиҷа мепайвандад.",
    ],
  },
  {
    source: "155539", slug: "account-api-sms-balance",
    title: ["API: остаток SMS", "API: SMS allowance reference", "API: маълумотномаи бақияи SMS"],
    sections: [
      "Документация по доступному количеству сообщений.|Раздел «Остаток СМС» показывает отдельную операцию GET. Таблица описывает логин, подпись, необязательное имя отправителя и язык сообщения.|Пример JSON-ответа включает available_sms и поле отправителя. Ниже начинается блок примеров реализации с переключателями языков.|Отдельное описание SMS-остатка отличает ресурс сообщений от денежного баланса и объясняет представление данных для внешней системы.",
      "Documentation for the available message count.|The SMS allowance section presents a separate GET operation with login, signature, optional sender and language fields.|A JSON example includes available_sms and a sender field. Language-specific implementation examples begin below.|The reference distinguishes message capacity from money and explains the data representation for an external system.",
      "Ҳуҷҷатҳо барои шумораи паёмҳои дастрас.|Бахши бақияи SMS амалиёти GET-ро бо логин, имзо, фиристандаи ихтиёрӣ ва забон нишон медиҳад.|Намунаи JSON дорои available_sms ва майдони фиристанда аст. Поён намунаҳои забонӣ оғоз мешаванд.|Шарҳи алоҳида захираи паёмҳоро аз маблағ фарқ карда, намоиши маълумотро барои системаи беруна мефаҳмонад.",
    ],
  },
  {
    source: "155545", slug: "account-api-bulk-errors",
    title: ["API: массовая отправка и статусы", "API: bulk sending and statuses", "API: ирсоли оммавӣ ва ҳолатҳо"],
    sections: [
      "Справочник пакетной отправки сообщений.|Раздел показывает пример успешного ответа и запрос массовой отправки с именем кампании, отправителем, текстом и массивом получателей. Языковые вкладки сохраняют знакомый формат документации.|Ниже начинается таблица статусов и ошибок с кодом, HTTP-значением и описанием. Примечание в примере указывает, что точный состав полей уточняется на стороне сервера.|Экран объединяет пример пакетной операции и расшифровку результатов, помогая ориентироваться в интеграционном сценарии.",
      "Bulk messaging reference.|The section shows a successful response and a bulk request with campaign name, sender, text and recipients. Language tabs retain the reference’s consistent format.|A status and error table follows. The example notes that exact fields require server-side clarification.|Operation examples and outcome descriptions appear together to support understanding of the integration flow.",
      "Маълумотномаи ирсоли оммавӣ.|Бахш ҷавоби муваффақ ва дархостро бо номи маърака, фиристанда, матн ва қабулкунандагон нишон медиҳад. Варақаҳои забонӣ шакли ягона доранд.|Поён ҷадвали ҳолатҳо ва хатоҳо оғоз мешавад. Эзоҳи намуна дақиқ кардани майдонҳоро дар сервер зикр мекунад.|Намунаҳо ва шарҳи натиҷаҳо фаҳмидани раванди ҳамгироиро осон мекунанд.",
    ],
  },
  {
    source: "155559", slug: "account-api-keys",
    title: ["API-ключ и имена отправителя", "API key and sender names", "Калиди API ва номҳои фиристанда"],
    sections: [
      "Управление параметрами доступа к API.|Верхняя карточка показывает Security Hash в скрытом виде с кнопками просмотра, копирования и обновления. Пояснение указывает назначение ключа для авторизации запросов.|Ниже расположены список псевдонимов с датами создания, кнопка заявки на новое имя и история заявок, пока пустая.|Раздел объединяет настройки интеграции и идентичность отправителя. На представленном экране значение ключа закрыто символами маски.",
      "Manage API access settings.|The top card displays a masked Security Hash with reveal, copy and refresh controls. Supporting text explains its role in request authorisation.|Below are sender names with creation dates, a new-name request action and an empty request history.|The section combines integration settings with sender identity. The supplied screen keeps the key value masked.",
      "Идоракунии дастрасии API.|Корти боло Security Hash-ро пӯшида бо тугмаҳои намоиш, нусхабардорӣ ва навсозӣ нишон медиҳад. Шарҳ нақши онро дар иҷозати дархостҳо мефаҳмонад.|Поён номҳои фиристанда, санаҳо, дархости номи нав ва таърихи холӣ ҳастанд.|Бахш танзимоти ҳамгироӣ ва номи фиристандаро ҷамъ мекунад. Қимати калид дар акс пӯшида аст.",
    ],
  },
  {
    source: "155954", slug: "account-profile",
    title: ["Профиль и смена пароля", "Profile and password change", "Профил ва ивази парол"],
    sections: [
      "Основные данные аккаунта и настройка доступа.|Лицевой счёт и реферальный ID представлены отдельными карточками с крупными значениями и кнопками копирования. Эти блоки отделены от формы пароля.|Ниже расположены обязательные поля нового пароля и его подтверждения, затем кнопка сохранения.|Раздел даёт быстрый доступ к идентификаторам для пополнения и приглашений, а изменение пароля оформлено самостоятельным действием.",
      "Account identifiers and access settings.|Separate cards display the account number and referral ID with prominent values and copy controls. They are distinct from the password form.|Required new-password and confirmation fields lead to Save.|The screen provides identifiers for top-ups and invitations while presenting a password change as a separate action.",
      "Маълумоти ҳисоб ва танзими дастрасӣ.|Рақами ҳисоб ва ID-и тавсия дар кортҳои алоҳида бо қиматҳои калон ва нусхабардорӣ ҳастанд. Онҳо аз шакли парол ҷудоанд.|Майдонҳои ҳатмии пароли нав ва тасдиқ бо тугмаи сабт анҷом меёбанд.|Экран рақамҳоро барои пуркунӣ ва даъватҳо дастрас намуда, ивази паролро амали алоҳида мекунад.",
    ],
  },
  {
    source: "155636", slug: "account-referrals",
    title: ["Реферальная программа", "Referral programme", "Барномаи тавсияҳо"],
    sections: [
      "Обзор приглашений и начисленных бонусов.|В верхней карточке находится реферальный код с копированием. Следующая карточка показывает общую сумму заработанных бонусов.|Два отдельных блока отведены приглашённым клиентам и истории начислений. На скриншоте оба списка пусты и счётчики равны нулю.|Такой кабинет объединяет инструмент приглашения с учётом его результатов, не смешивая бонусную историю с основной таблицей платежей.",
      "Review invitations and earned bonuses.|The upper card contains a referral code and copy action, followed by a total-bonus summary.|Separate panels list invited customers and bonus history. Both are empty with zero counts in this capture.|The workspace connects the invitation identifier with its results while keeping bonus records distinct from payment history.",
      "Шарҳи даъватҳо ва бонусҳо.|Корти боло рамзи тавсия ва нусхабардорӣ, корти баъдӣ ҷамъбасти бонусҳоро дорад.|Блокҳои алоҳида муштариёни даъватшуда ва таърихи бонусҳоро нишон медиҳанд. Ҳар ду дар акс холӣ ва ҳисобкунакҳо сифранд.|Кабинет воситаи даъватро бо натиҷаҳо пайваста, таърихи бонусҳоро аз пардохтҳо ҷудо нигоҳ медорад.",
    ],
  },
  {
    source: "155646", slug: "account-contract-upload",
    title: ["Шаблон договора и загрузка файла", "Contract template and upload", "Қолаби шартнома ва боркунии файл"],
    sections: [
      "Подготовка договора в личном кабинете.|Первый блок предлагает скачать шаблон, заполнить его в Word и загрузить обратно. Кнопка скачивания отделена от следующего шага.|Вторая карточка содержит выбор файла и подсказку о формате .docx размером до 20 МБ. Ниже расположена пока пустая история договоров.|Последовательность «шаблон — заполнение — загрузка» делает передачу документа понятной и сохраняет её в рабочем пространстве клиента.",
      "Prepare a contract in the account.|The first panel offers a template to download, complete in Word and upload back. Download is separated from the next step.|A second card contains a file selector with .docx and 20 MB guidance. An empty contract history follows.|The template, completion and upload sequence keeps document submission clear and inside the customer workspace.",
      "Омода кардани шартнома дар кабинет.|Блоки аввал боргирии қолаб, пуркунӣ дар Word ва баргардонидани файлро пешниҳод мекунад. Боргирӣ аз қадами баъдӣ ҷудо аст.|Корти дуюм интихоби файл ва шарҳи .docx то 20 МБ дорад. Поён таърихи холии шартномаҳо аст.|Пайдарпайии қолаб, пуркунӣ ва боркунӣ пешниҳоди ҳуҷҷатро фаҳмо мекунад.",
    ],
  },
  {
    source: "155718", slug: "account-contract-review",
    title: ["Договор отправлен на проверку", "Contract submitted for review", "Шартнома барои санҷиш пешниҳод шуд"],
    sections: [
      "Состояние после загрузки заполненного договора.|Зелёное уведомление подтверждает успешную загрузку и отправку на проверку. Форма выбора файла и ссылка на шаблон остаются доступными.|В истории появилась запись с номером, датой отправки, жёлтым статусом «На проверке» и кнопкой «Мой файл».|Подтверждение и история позволяют видеть результат передачи документа и отслеживать его состояние без повторного обращения к поддержке.",
      "The state after uploading a completed contract.|A green message confirms upload and submission for review. File selection and template download remain available.|History now includes a numbered row, submission date, yellow Under review status and My file action.|Confirmation and history make the document’s submission and current state visible to the customer.",
      "Ҳолат баъд аз боркунии шартномаи пуршуда.|Огоҳии сабз боркунӣ ва пешниҳоди санҷишро тасдиқ мекунад. Интихоби файл ва боргирии қолаб дастрас мемонанд.|Дар таърих сатр бо рақам, сана, ҳолати зарди санҷиш ва тугмаи файли ман пайдо шудааст.|Тасдиқ ва таърих натиҷаи пешниҳоди ҳуҷҷат ва ҳолати онро ба муштарӣ нишон медиҳанд.",
    ],
  },
];

const headings: Localized[] = [
  ["1. Структура экрана", "1. Screen structure", "1. Сохтори экран"],
  ["2. Элементы и действия", "2. Controls and actions", "2. Унсурҳо ва амалҳо"],
  ["3. Пользовательский сценарий и ценность", "3. User journey and value", "3. Раванди истифода ва аҳамият"],
];

type ComponentItem = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"][number];

export const zudsmsAccountScreens: ComponentItem[] = screens.map((screen) => {
  const localize = (values: Localized) => ({ ru: values[0], en: values[1], tj: values[2] });
  const descriptions = screen.sections.map((text, language) => {
    const [intro, ...sections] = text.split("|");
    return [intro, ...sections.map((section, index) => `${headings[index][language]}\n\n${section}`)].join("\n\n");
  }) as Localized;
  const image = `/images/projects/zudSMS/account/${screen.source}-${screen.slug}.webp`;

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
