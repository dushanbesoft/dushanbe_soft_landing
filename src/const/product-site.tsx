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
    platform?: string; 
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
    imageSrc: "/images/projects/president/banner_main.jpg",
    bannerSrc: "/images/projects/president/banner_main.jpg",
    year: "2024",
    tags: ["React", "Redux", "Laravel", "MySQL", "REST API"],
    slug: "president",
    // gallery: [
    //   "/images/projects/president/banner.png",
    //   "/images/projects/president/gallery-1.png",
    //   "/images/projects/president/gallery-2.png",
    // ],
    projectComponents: [
      {
        tabName: { ru: "Web-сайт", en: "Website", tj: "Веб-сайт" },
        items: [
          {
            slug: "home",
            title: {
              ru: "Главная страница",
              en: "Homepage",
              tj: "Саҳифаи асосӣ",
            },
            imageSrc: "/images/projects/president/web-home.png",
            BannerSrc: "/images/projects/president/web-home.png",
            shortInfo: {
              ru: "Ключевые события и навигация по порталу",
              en: "Featured events and portal navigation",
              tj: "Рӯйдодҳои муҳим ва роҳнамоии портал",
            },
            fullInfo: {
              ru: "Главная страница prezident.tj объединяет основные точки входа в информационную систему. В верхней части расположены логотип и название учреждения, благодаря которым посетитель сразу понимает назначение ресурса. Основное меню предоставляет доступ к разделам «Таджикистан», «Государственные символы», «Лидер нации», «Президент», «Правительство» и «Исполнительный аппарат».\n\nЦентральный элемент страницы — слайдер ключевых событий. Каждый представленный материал сопровождается крупной фотографией, заголовком, датой и временем публикации. Дополнительный индикатор обозначает количество фотографий. Стрелки и точки навигации позволяют выбирать элементы слайдера, а ссылка в заголовке ведёт к соответствующей публикации. Такой формат объединяет визуальную презентацию и переход к подробной информации.\n\nВ шапке предусмотрены переключатель языковых версий, поиск по сайту, настройка размера текста и ссылки на социальные каналы. Отдельная кнопка «Письмо президенту» выделяет сценарий обращения и делает его доступным из общей навигации. В интерфейсе представлены таджикский, русский, английский и арабский языки.\n\nПользовательский сценарий: посетитель знакомится с главным событием, открывает заинтересовавшую публикацию либо выбирает другой путь — тематический раздел, поиск или форму обращения.\n\nЦенность для бизнеса: подобная главная страница подходит организациям, которым необходимо одновременно представлять бренд, публиковать важные сообщения и обеспечивать доступ к большому количеству разделов. Она может объединять новости компании, ключевые проекты, направления деятельности и кнопку связи с командой.",
              en: "The prezident.tj homepage brings together the main entry points into the portal. The institutional logo and name identify the resource at the top of the page. The primary menu provides access to Tajikistan, State Symbols, Leader of the Nation, President, Government and Executive Office sections.\n\nThe central component is a featured event slider. Each item combines a large photograph, headline, publication date and time. An additional indicator displays the number of photographs. Arrows and navigation dots provide controls for selecting slides, while the headline links to the relevant publication. This connects visual presentation with access to detailed information.\n\nThe header also includes language selection, site search, text size controls and social media links. A separate “Letter to the President” button makes the enquiry journey visible within the shared navigation. The interface presents Tajik, Russian, English and Arabic language options.\n\nUser journey: visitors review a featured event and open its publication, or choose another route through a section link, search or the enquiry form.\n\nBusiness value: this homepage structure suits organisations that need to introduce their brand, highlight important announcements and provide access to numerous sections. A corporate version could combine company news, major projects, business areas and a prominent contact button.",
              tj: "Саҳифаи асосии prezident.tj роҳҳои асосии дастрасӣ ба иттилооти порталро муттаҳид мекунад. Дар қисми боло нишон ва номи ниҳод ҷойгиранд, то корбар мақсади сомонаро зуд дарк намояд. Менюи асосӣ ба бахшҳои «Тоҷикистон», «Рамзҳои давлатӣ», «Пешвои миллат», «Президент», «Ҳукумат» ва «Дастгоҳи иҷроия» роҳ медиҳад.\n\nУнсури марказии саҳифа слайдери рӯйдодҳои муҳим мебошад. Ҳар мавод бо акси калон, сарлавҳа, сана ва вақти нашр пешниҳод мешавад. Нишондиҳандаи иловагӣ шумораи аксҳоро нишон медиҳад. Тирчаҳо ва нуқтаҳои роҳнамоӣ барои интихоби маводи слайдер пешбинӣ шудаанд, пайванди сарлавҳа бошад, ба хабари дахлдор мебарад.\n\nДар қисми боло интихоби забон, ҷустуҷӯ, танзими андозаи матн ва пайвандҳои шабакаҳои иҷтимоӣ ҷой доранд. Тугмаи алоҳидаи «Нома ба Президент» роҳи дастрасӣ ба шакли муроҷиатро намоён мекунад. Дар интерфейс забонҳои тоҷикӣ, русӣ, англисӣ ва арабӣ пешниҳод шудаанд.\n\nРаванди истифода: корбар бо рӯйдоди асосӣ шинос мешавад ва маводи ҷолибро мекушояд ё ба бахши дигар, ҷустуҷӯ ва шакли муроҷиат мегузарад.\n\nАҳамият барои тиҷорат: чунин саҳифа барои ташкилоте мувофиқ аст, ки мехоҳад бренд, хабарҳои муҳим ва бахшҳои зиёди сомонаро дар як муҳит пешниҳод кунад. Дар сомонаи ширкат ин сохтор метавонад хабарҳо, лоиҳаҳои асосӣ, самтҳои фаъолият ва тугмаи тамосро муттаҳид намояд.",
            },
          },
          {
            slug: "events",
            title: {
              ru: "События",
              en: "Events",
              tj: "Рӯйдодҳо",
            },
            imageSrc: "/images/projects/president/web-events.png",
            BannerSrc: "/images/projects/president/web-events.png",
            shortInfo: {
              ru: "Каталог публикаций, календарь и тематическая навигация",
              en: "Publication directory, calendar and topic navigation",
              tj: "Феҳристи мавод, тақвим ва роҳнамоии мавзуӣ",
            },
            fullInfo: {
              ru: "Модуль «События» организует текущие публикации и предоставляет несколько способов ориентироваться в информационном потоке. В верхней части расположены категории: события, встречи, выступления, поездки, документы, послания, телеграммы и телефонные разговоры. Такое разделение позволяет выбирать материалы по их содержанию и формату.\n\nПубликации представлены компактным списком в две колонки. Каждая запись включает заголовок и сопровождающие сведения: дату, время и место события. Благодаря этому посетитель может оценить актуальность и содержание материала без открытия каждой страницы. Заголовок служит точкой перехода к подробной публикации.\n\nПравая колонка содержит календарь с месяцем, годом, сеткой дат и кнопкой сброса. Этот интерфейс предназначен для выбора временного контекста при работе с публикациями. Ниже расположен тематический каталог: внутренняя политика, международные структуры и двусторонние отношения. Вложенные направления предлагают более точный переход к интересующей теме. Кнопка «Подробнее» под списком служит входом к дополнительным материалам.\n\nПользовательский сценарий: посетитель выбирает тип публикации, просматривает заголовки и даты, затем открывает материал. Для уточнения направления поиска предусмотрены календарь и тематические ссылки.\n\nЦенность для бизнеса: аналогичный модуль подходит для корпоративного пресс-центра, отраслевого портала или архива мероприятий. Он позволяет структурировать новости по типам, направлениям деятельности и времени публикации.",
              en: "The Events module organises current publications and offers several ways to browse the information. Categories at the top include events, meetings, speeches, visits, documents, addresses, telegrams and telephone conversations. This structure separates material by subject and publication type.\n\nEntries appear in a compact two-column list. Each includes a headline and supporting details such as the date, time and event location. Visitors can assess the subject and timing of an item without opening every page. The headline provides access to the complete publication.\n\nThe right-hand column contains a calendar with a month, year, date grid and reset button. This interface is intended to provide a date-based browsing option. Below it, a topic directory groups domestic policy, international organisations and bilateral relations, with links to more specific subjects. A “Read more” button beneath the list offers access to further material.\n\nUser journey: visitors select a publication category, review headlines and dates, and open an item. Calendar controls and topic links provide additional ways to narrow their area of interest.\n\nBusiness value: a similar module suits corporate newsrooms, industry portals and event archives. It can organise publications by content type, business area and date.",
              tj: "Модули «Рӯйдодҳо» маводи ҷориро ба тартиб оварда, чанд роҳи пайдо кардани иттилоотро пешниҳод мекунад. Дар қисми боло хабарҳо, вохӯриҳо, суханрониҳо, сафарҳо, санадҳо, паём, барқияҳо ва суҳбатҳои телефонӣ ҷудо шудаанд. Ин гурӯҳбандӣ интихоби маводро аз рӯйи мазмун ва навъ осон мекунад.\n\nМавод дар рӯйхати ду сутун пешниҳод мешавад. Ҳар сабт сарлавҳа, сана, вақт ва ҷойи рӯйдодро дар бар мегирад. Корбар метавонад пеш аз кушодани саҳифа мавзуъ ва вақти нашри онро арзёбӣ намояд. Сарлавҳа барои гузариш ба матни муфассал хизмат мекунад.\n\nДар сутуни рост тақвим бо моҳ, сол, рӯзҳо ва тугмаи бозсозӣ ҷойгир аст. Он барои интихоби сана ҳангоми кор бо мавод пешбинӣ шудааст. Дар поён гурӯҳҳои мавзуӣ — сиёсати дохилӣ, сохторҳои байналмилалӣ ва муносибатҳои дуҷониба — пешниҳод мешаванд. Зербахшҳо ба мавзуъҳои мушаххастар роҳ медиҳанд. Тугмаи маълумоти бештар дастрасӣ ба маводи иловагиро пешниҳод мекунад.\n\nРаванди истифода: корбар навъи маводро интихоб мекунад, сарлавҳа ва санаҳоро мебинад ва хабари заруриро мекушояд. Барои муайян кардани самти ҷустуҷӯ тақвим ва пайвандҳои мавзуӣ мавҷуданд.\n\nАҳамият барои тиҷорат: ин сохтор барои маркази матбуоти ширкат, портали соҳавӣ ва бойгонии чорабиниҳо мувофиқ аст. Маводро аз рӯйи навъ, самти фаъолият ва вақт ташкил кардан мумкин аст.",
            },
          },
          {
            slug: "president-section",
            title: {
              ru: "Раздел «Президент»",
              en: "President Section",
              tj: "Бахши «Президент»",
            },
            imageSrc: "/images/projects/president/web-president.png",
            BannerSrc: "/images/projects/president/web-president.png",
            shortInfo: {
              ru: "Тематическая структура информации",
              en: "A structured information hub",
              tj: "Сохтори мавзуии иттилоот",
            },
            fullInfo: {
              ru: "Раздел «Президент» объединяет сведения о персоне и связанные с ней материалы в самостоятельный информационный блок. Основную область занимает крупная фотография, под которой размещены имя, должность и ссылка на биографию. Это создаёт понятную начальную точку для знакомства с разделом.\n\nБоковая навигация разделяет информацию на категории: полномочия, символы президента, книги, статьи, фильмы и награды. Каждый пункт представляет отдельное направление, поэтому посетителю не требуется просматривать весь массив материалов для поиска конкретной информации. Визуальное разделение пунктов помогает быстро ориентироваться в структуре.\n\nМодуль сочетает краткое представление и переходы к подробным сведениям. Биографическая информация, публикации и медиаматериалы связаны общей темой, но представлены через отдельные категории. Такой подход позволяет сохранять обзорную страницу компактной и понятной.\n\nПользовательский сценарий: посетитель знакомится с основными сведениями, затем выбирает биографию либо интересующий тип материалов — например, книги, статьи или фильмы.\n\nЦенность для бизнеса: аналогичную структуру можно использовать для профилей руководителей и экспертов, истории основателя компании или представления организации. В отдельных категориях могут размещаться профессиональный опыт, публикации, интервью, проекты и подтверждённые достижения.",
              en: "The President section brings together information about the person and related material within a dedicated area. A large photograph occupies the main space, followed by the name, position and a biography link. This provides a clear starting point for exploring the section.\n\nSide navigation divides the information into powers, presidential symbols, books, articles, films and awards. Each link represents a distinct category, allowing visitors to choose the information they need without browsing the entire collection. Visual separators make the navigation easier to scan.\n\nThe module combines a concise introduction with routes to more detailed information. Biography, publications and media share a common subject but remain organised into separate categories. This keeps the overview page focused while providing access to a broader collection.\n\nUser journey: visitors review the introductory information, then choose the biography or a particular content category, such as books, articles or films.\n\nBusiness value: a similar structure can present executives, experts, a company founder or an organisation. Separate categories could cover professional experience, publications, interviews, projects and verified achievements.",
              tj: "Бахши «Президент» маълумот дар бораи шахсият ва маводи вобастаро дар як қисми мустақили портал ҷамъ меорад. Дар майдони асосӣ акси калон ҷойгир буда, зери он ном, вазифа ва пайванд ба шарҳи ҳол оварда шудаанд. Ин нуқтаи равшани оғоз барои шиносоӣ бо бахш мебошад.\n\nМенюи паҳлуӣ маълумотро ба гурӯҳҳо ҷудо мекунад: салоҳият, рамзҳои Президент, китобҳо, мақолаҳо, филмҳо ва ҷоизаҳо. Ҳар пайванд самти алоҳида дорад, бинобар ин корбар барои дарёфти маълумоти мушаххас маҷбур нест ҳамаи маводро пайдарпай бинад. Ҷудокунии визуалии бандҳо фаҳмидани сохторро осон мекунад.\n\nМодул муаррифии мухтасарро бо гузариш ба маълумоти муфассал муттаҳид месозад. Шарҳи ҳол, асарҳо ва маводи расонаӣ ба як мавзуъ тааллуқ доранд, вале тавассути гурӯҳҳои алоҳида пешниҳод мешаванд. Ин равиш саҳифаи умумиро фаҳмо нигоҳ медорад.\n\nРаванди истифода: корбар бо маълумоти асосӣ шинос шуда, сипас шарҳи ҳол ё гурӯҳи маводи зарурӣ, масалан китобҳо, мақолаҳо ё филмҳоро интихоб мекунад.\n\nАҳамият барои тиҷорат: сохтори монанд барои муаррифии роҳбарон, коршиносон, муассиси ширкат ё худи ташкилот мувофиқ аст. Таҷрибаи касбӣ, нашрияҳо, мусоҳибаҳо, лоиҳаҳо ва дастовардҳои тасдиқшударо дар бахшҳои алоҳида ҷой додан мумкин аст.",
            },
          },
          {
            slug: "footer",
            title: {
              ru: "Справочные разделы и подвал",
              en: "Reference Sections and Footer",
              tj: "Бахшҳои маълумотӣ ва поёни сомона",
            },
            imageSrc: "/images/projects/president/web-footer.png",
            BannerSrc: "/images/projects/president/web-footer.png",
            shortInfo: {
              ru: "Дополнительный уровень навигации",
              en: "An additional navigation layer",
              tj: "Роҳҳои иловагии дастрасӣ",
            },
            fullInfo: {
              ru: "Нижняя часть страницы содержит блок быстрых переходов к постоянной справочной информации: сведениям о Таджикистане, Конституции и государственным символам. Эти материалы выделены отдельно от новостной ленты, что подчёркивает их самостоятельное значение в структуре портала.\n\nПодвал формирует дополнительную карту основных разделов. Ссылки сгруппированы по направлениям «Президент», «Правительство» и «Исполнительный аппарат». Внутри групп доступны конкретные подразделы: биография, полномочия, члены правительства, заседания, структура аппарата и пресс-служба. Посетитель может перейти непосредственно к нужному подразделу, достигнув конца страницы.\n\nВ подвале также размещены идентификация ресурса, контактные сведения пресс-службы, ссылки на социальные каналы и RSS. Эти элементы объединяют справочную навигацию и способы дальнейшего получения информации.\n\nПользовательский сценарий: после просмотра страницы посетитель продолжает изучение портала через сгруппированные ссылки либо находит контактную информацию и внешние каналы.\n\nЦенность для бизнеса: такой подвал помогает организовать доступ к сведениям о компании, услугам, документам, подразделениям и контактам. Он особенно полезен на длинных страницах, где посетителю нужен следующий понятный шаг после основного содержимого.",
              en: "The lower part of the page highlights quick links to lasting reference information: Tajikistan, the Constitution and state symbols. These resources sit outside the news feed, giving them a distinct place within the portal’s structure.\n\nThe footer provides an additional map of the main sections. Links are grouped under President, Government and Executive Office. Each group contains specific destinations, including biography, powers, government members, meetings, office structure and the press service. Visitors reaching the end of the page can move directly to a relevant subsection.\n\nThe footer also includes site identification, press service contact details, social media links and RSS. These elements combine reference navigation with further routes to information.\n\nUser journey: after reviewing the page, visitors continue through grouped links or find contact details and external information channels.\n\nBusiness value: this footer structure can organise access to company information, services, documents, departments and contacts. It is particularly useful on long pages, where visitors benefit from a clear next step after the main content.",
              tj: "Дар қисми поёнии саҳифа пайвандҳои зуд ба иттилооти доимӣ ҷойгиранд: маълумот дар бораи Тоҷикистон, Конститутсия ва рамзҳои давлатӣ. Ин мавод аз хабарҳо ҷудо пешниҳод мешавад ва дар сохтори портал аҳамияти мустақил дорад.\n\nМенюи поёнӣ харитаи иловагии бахшҳои асосиро ташкил медиҳад. Пайвандҳо ба гурӯҳҳои «Президент», «Ҳукумат» ва «Дастгоҳи иҷроия» ҷудо шудаанд. Дар дохили онҳо зербахшҳои мушаххас, аз ҷумла шарҳи ҳол, салоҳият, аъзои Ҳукумат, маҷлисҳо, сохтори Дастгоҳ ва Хадамоти матбуот дастрасанд.\n\nҲамчунин дар ин қисм номи манбаъ, маълумоти тамоси Хадамоти матбуот, пайвандҳои шабакаҳои иҷтимоӣ ва RSS ҷой доранд. Онҳо роҳнамоии маълумотиро бо роҳҳои минбаъдаи гирифтани хабарҳо муттаҳид мекунанд.\n\nРаванди истифода: корбар пас аз дидани саҳифа тавассути пайвандҳои гурӯҳбандишуда омӯзиши порталро идома медиҳад ё маълумоти тамос ва каналҳои берунаро пайдо мекунад.\n\nАҳамият барои тиҷорат: чунин сохтор дастрасиро ба маълумоти ширкат, хизматрасониҳо, санадҳо, воҳидҳо ва роҳҳои тамос ташкил мекунад. Он махсусан барои саҳифаҳои дароз муфид аст, ки дар анҷоми онҳо ба корбар қадами навбатӣ лозим мешавад.",
            },
          },
          {
            slug: "letter",
            title: {
              ru: "Электронное обращение",
              en: "Electronic Enquiries",
              tj: "Муроҷиати электронӣ",
            },
            imageSrc: "/images/projects/president/web-letter.png",
            BannerSrc: "/images/projects/president/web-letter.png",
            shortInfo: {
              ru: "Структурированная форма с вложениями",
              en: "A structured form with attachments",
              tj: "Шакли сохторёфта бо замимаҳо",
            },
            fullInfo: {
              ru: "Модуль «Письмо президенту» предназначен для подготовки электронного обращения через интерфейс сайта. Перед формой размещён информационный текст с требованиями к обращениям, чтобы посетитель мог ознакомиться с условиями до заполнения данных.\n\nФорма разделяет информацию на понятные поля: ФИО, место работы, страна, город или населённый пункт, адрес, телефон и электронная почта. Для содержания обращения предусмотрены отдельные поля темы и сообщения. Такое разделение помогает оформлять обращения в едином формате и отличать контактные сведения от основного текста.\n\nДля дополнительных материалов предусмотрена кнопка добавления файла. В интерфейсе указан лимит 10 МБ. На предоставленном скриншоте присутствует виджет reCAPTCHA, предназначенный для противодействия автоматизированной отправке. Завершает форму кнопка «Отправить».\n\nПользовательский сценарий: посетитель знакомится с требованиями, заполняет сведения о себе, указывает тему и текст, при необходимости прикладывает документ и переходит к отправке.\n\nЦенность для бизнеса: подобный подход применим для обращений в поддержку, сервисных заявок и запросов с документами. Структурированные поля помогают заранее определить состав необходимой информации.",
              en: "The “Letter to the President” module provides an interface for preparing an electronic enquiry. An introductory notice appears before the form so visitors can review the stated requirements before entering their information.\n\nThe form separates information into defined fields: full name, workplace, country, city or locality, address, telephone number and email address. Dedicated subject and message fields capture the enquiry itself. This distinction keeps contact information separate from the main message and establishes a consistent submission structure.\n\nAn attachment button allows supporting material to be added, with a displayed limit of 10 MB. The supplied screenshot also shows a reCAPTCHA widget intended to discourage automated submissions. A “Send” button completes the interface.\n\nUser journey: visitors read the requirements, enter their details, write a subject and message, attach a document if needed and proceed towards submission.\n\nBusiness value: a similar form can support customer enquiries, service requests and document-based applications. Structured fields define the information required at the outset.",
              tj: "Модули «Нома ба Президент» барои омода кардани муроҷиати электронӣ тавассути сомона пешбинӣ шудааст. Пеш аз шакл матни иттилоотӣ бо талабот ба муроҷиатҳо ҷойгир аст, то корбар пеш аз ворид кардани маълумот бо онҳо шинос шавад.\n\nШакл маълумотро ба майдонҳои алоҳида ҷудо мекунад: ному насаб, ҷойи кор, кишвар, шаҳр ё маҳалли аҳолинишин, суроға, телефон ва почтаи электронӣ. Барои муҳтавои муроҷиат майдонҳои мавзуъ ва матни паём пешбинӣ шудаанд. Ин тақсимот маълумоти тамосро аз мазмуни асосӣ ҷудо карда, пешниҳоди муроҷиатҳоро ба тартиби ягона меорад.\n\nБарои маводи иловагӣ тугмаи замима кардани файл мавҷуд аст. Дар интерфейс ҳадди 10 МБ нишон дода шудааст. Дар скриншоти пешниҳодшуда виджети reCAPTCHA низ дида мешавад, ки барои муқовимат ба ирсоли худкор пешбинӣ шудааст. Дар охир тугмаи «Ирсол» ҷойгир аст.\n\nРаванди истифода: корбар талаботро мехонад, маълумоти худро ворид мекунад, мавзуъ ва матнро менависад, ҳангоми зарурат санадро замима намуда, ба ирсол мегузарад.\n\nАҳамият барои тиҷорат: чунин равиш барои муроҷиат ба дастгирӣ, дархостҳои хизматрасонӣ ва пешниҳоди санадҳо мувофиқ аст. Майдонҳои сохторёфта таркиби маълумоти заруриро пешакӣ муайян мекунанд.",
            },
          },
          {
            slug: "search",
            title: {
              ru: "Поиск",
              en: "Site Search",
              tj: "Ҷустуҷӯ",
            },
            imageSrc: "/images/projects/president/web-search.png",
            BannerSrc: "/images/projects/president/web-search.png",
            shortInfo: {
              ru: "Результаты с контекстом и дополнительная навигация",
              en: "Contextual results and supporting navigation",
              tj: "Натиҷаҳо бо шарҳи кӯтоҳ ва роҳнамоии иловагӣ",
            },
            fullInfo: {
              ru: "Модуль поиска предоставляет отдельный интерфейс для нахождения информации по текстовому запросу. В верхней части страницы расположено крупное поле, в котором сохраняется введённая фраза. Посетитель видит текущий запрос и может изменить его для следующего поиска.\n\nКаждый результат содержит заголовок и короткий фрагмент публикации. Совпадающие слова выделены в тексте, что помогает понять, почему материал появился в выдаче. Дополнительно показаны дата, время, место и категория — например, события или фотографии. Это позволяет различать материалы не только по названию, но и по формату и контексту.\n\nРядом с основным списком расположены календарь и блок событий, которые предоставляют дополнительные ориентиры для дальнейшего просмотра.\n\nПользовательский сценарий: посетитель вводит запрос, сравнивает заголовки и фрагменты результатов, уточняет дату или тип материала и открывает подходящую публикацию.\n\nЦенность для бизнеса: такой поиск полезен для корпоративных порталов, баз знаний и сайтов с большим архивом. Контекстные фрагменты и категории помогают посетителям осознанно выбирать материалы и находить нужные сведения среди большого количества страниц.",
              en: "The search module provides a dedicated interface for finding information through a text query. A prominent field at the top retains the entered phrase, allowing visitors to see their current query and revise it for another search.\n\nEach result includes a headline and a short publication excerpt. Matching words are highlighted to show how the item relates to the query. Additional details include the date, time, location and content category, such as events or photographs. Visitors can therefore distinguish results by context and format as well as by title.\n\nA calendar and events block appear beside the main list, offering further browsing options.\n\nUser journey: visitors enter a query, compare result headlines and excerpts, check the date or content type, and open the most relevant publication.\n\nBusiness value: this search pattern suits corporate portals, knowledge bases and websites with extensive archives. Contextual excerpts and categories help visitors make informed choices when navigating a large collection of pages.",
              tj: "Модули ҷустуҷӯ барои пайдо кардани иттилоот аз рӯйи дархости матнӣ интерфейси алоҳида пешниҳод мекунад. Дар қисми боло майдони калон ҷойгир аст, ки дар он ибораи воридшуда боқӣ мемонад. Корбар дархости ҷориро мебинад ва метавонад онро барои ҷустуҷӯи нав тағйир диҳад.\n\nҲар натиҷа сарлавҳа ва порчаи кӯтоҳи матн дорад. Калимаҳои мувофиқ ҷудо нишон дода мешаванд, то корбар робитаи маводро бо дархост фаҳмад. Сана, вақт, ҷой ва гурӯҳи мавод, масалан хабарҳо ё аксҳо, низ пешниҳод мешаванд. Ин маълумот барои фарқ кардани натиҷаҳо аз рӯйи навъ ва мазмун кумак мекунад.\n\nДар паҳлуи рӯйхат тақвим ва бахши рӯйдодҳо ҷойгиранд, ки роҳҳои иловагии идомаи тамошоро пешниҳод мекунанд.\n\nРаванди истифода: корбар дархостро ворид мекунад, сарлавҳаҳо ва порчаҳои матнро муқоиса менамояд, сана ё навъи маводро месанҷад ва натиҷаи мувофиқро мекушояд.\n\nАҳамият барои тиҷорат: чунин ҷустуҷӯ барои порталҳои корпоративӣ, пойгоҳҳои дониш ва сомонаҳои дорои бойгонии калон муфид аст. Порчаҳои матн ва гурӯҳбандӣ ба корбарон барои интихоби огоҳонаи мавод кумак мекунанд.",
            },
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
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "REST API"],
    slug: "sohktor",
    gallery: [
      "/images/projects/sohktor/gallery-1.png",
      "/images/projects/sohktor/gallery-2.png",
      "/images/projects/sohktor/gallery-3.png",
      "/images/projects/sohktor/gallery-5.png",
      "/images/projects/sohktor/gallery-6.png",
      "/images/projects/sohktor/gallery-7.png",
    ],
    projectComponents: [
      {
        tabName: {
          ru: "Веб-приложение",
          en: "Web application",
          tj: "Барномаи веб",
        },
        items: [
          {
            slug: "login",
            title: {
              ru: "Вход в систему",
              en: "Sign In",
              tj: "Вуруд ба система",
            },
            imageSrc: "/images/projects/sohktor/login.png",
            BannerSrc: "/images/projects/sohktor/login.png",
            shortInfo: {
              ru: "Авторизация сотрудников в едином электронном хранилище",
              en: "Staff authentication for the unified electronic repository",
              tj: "Воридшавии кормандон ба махзани ягонаи электронӣ",
            },
            fullInfo: {
              ru: "Экран входа — начальная точка работы с единым электронным хранилищем Главного управления государственной противопожарной службы МВД (СХДО ВКД). В верхней части размещены геральдический знак службы и её полное название, что сразу обозначает ведомственную принадлежность системы. Заголовок «Маҳзани ягонаи электронӣ» подчёркивает, что это единая база данных для всех подразделений.\n\nФорма авторизации содержит два поля: «Эл. Почта / Логин» с иконкой конверта и «Пароль» с иконкой замка. Поля снабжены подсказками на таджикском языке, что помогает сотруднику ввести корректные данные. Крупная зелёная кнопка «Вход» завершает форму и визуально соответствует фирменному стилю службы.\n\nПользовательский сценарий: сотрудник открывает систему, вводит логин или электронную почту и пароль, после чего получает доступ к рабочему пространству согласно своей роли и подразделению.\n\nЦенность для бизнеса: единая точка входа с разграничением доступа обеспечивает безопасность ведомственных данных и позволяет вести учёт действий пользователей. Аналогичный подход применим для любой корпоративной или государственной системы, где важны контроль доступа и защита конфиденциальной информации.",
              en: "The sign-in screen is the entry point to the unified electronic repository of the Main Directorate of the State Fire Service of the Ministry of Internal Affairs (SFS). The service emblem and its full name appear at the top, immediately identifying the institutional owner of the system. The heading “Unified electronic repository” emphasises that this is a single database shared across all divisions.\n\nThe authentication form contains two fields: “Email / Login” with an envelope icon and “Password” with a lock icon. Placeholder hints in Tajik help staff enter the correct details. A large green “Sign in” button completes the form and matches the service's visual identity.\n\nUser journey: a member of staff opens the system, enters a login or email and a password, and then gains access to the workspace according to their role and division.\n\nBusiness value: a single entry point with access control protects institutional data and enables an audit trail of user actions. The same pattern suits any corporate or government system where access control and protection of confidential information matter.",
              tj: "Экрани вуруд нуқтаи оғози кор бо махзани ягонаи электронии Сарраёсати хадамоти давлатии оташнишонии ВКД (СХДО ВКД) мебошад. Дар қисми боло нишони хидмат ва номи пурраи он ҷойгиранд, ки мансубияти идоравии системаро дарҳол нишон медиҳанд. Сарлавҳаи «Маҳзани ягонаи электронӣ» таъкид мекунад, ки ин пойгоҳи ягонаи додаҳо барои ҳамаи воҳидҳо мебошад.\n\nШакли воридшавӣ ду майдон дорад: «Почтаи электронӣ ё Логин» бо нишонаи лифофа ва «Парол» бо нишонаи қулф. Майдонҳо бо ишораҳо ба забони тоҷикӣ муҷаҳҳазанд, ки ба корманд барои дуруст ворид кардани маълумот кумак мекунанд. Тугмаи калони сабзи «Вуруд» шаклро анҷом медиҳад ва ба сабки фирмавии хидмат мувофиқ аст.\n\nРаванди истифода: корманд системаро мекушояд, логин ё почтаи электронӣ ва паролро ворид мекунад ва сипас мувофиқи нақш ва воҳиди худ ба фазои корӣ дастрасӣ пайдо мекунад.\n\nАҳамият барои тиҷорат: нуқтаи ягонаи вуруд бо тақсими дастрасӣ амнияти додаҳои идоравиро таъмин мекунад ва имкони бақайдгирии амали корбаронро медиҳад. Чунин равиш барои ҳар системаи корпоративӣ ё давлатӣ, ки дар он назорати дастрасӣ ва ҳифзи маълумоти махфӣ муҳим аст, мувофиқ мебошад.",
            },
          },
          {
            slug: "workspace",
            title: {
              ru: "Главное рабочее пространство",
              en: "Main Workspace",
              tj: "Фазои асосии корӣ",
            },
            imageSrc: "/images/projects/sohktor/workspace.png",
            BannerSrc: "/images/projects/sohktor/workspace.png",
            shortInfo: {
              ru: "Навигация по всем модулям учёта и отчётности",
              en: "Navigation across all accounting and reporting modules",
              tj: "Роҳнамоӣ дар ҳамаи модулҳои баҳисобгирӣ ва ҳисобот",
            },
            fullInfo: {
              ru: "Рабочее пространство открывается сразу после входа и объединяет все инструменты системы в едином интерфейсе. Левая боковая панель содержит основное меню: «Частные объекты», «Государственные объекты», «Заключения», «Услуги», «КПО», «Предписания (частные)», «Предписания (государственные)», «Пожары», «Уголовные дела», «Отчёты», а также разделы настроек — «ШНБДС СХДО ВКД ҶТ», «Список услуг», «Инспекторы» и «Настройки». Пункты снабжены иконками для быстрого визуального распознавания.\n\nЦентральную часть занимает эмблема службы и полное название организации — «Единое электронное хранилище Главного управления государственной противопожарной службы МВД Республики Таджикистан». В правом верхнем углу отображаются имя пользователя и его роль («Администратор») с выпадающим меню профиля.\n\nПользовательский сценарий: авторизованный сотрудник выбирает нужный модуль в боковом меню и переходит к учёту объектов, регистрации пожаров, ведению уголовных дел или формированию отчётов. Раскрывающиеся пункты («Отчёты», «Настройки») группируют связанные разделы.\n\nЦенность для бизнеса: единое рабочее пространство с логичной группировкой модулей ускоряет работу сотрудников и снижает порог обучения. Такая структура подходит для любой ведомственной ERP-системы с большим числом функциональных разделов.",
              en: "The workspace opens immediately after sign-in and brings all system tools together in one interface. The left sidebar holds the primary menu: Private Facilities, State Facilities, Conclusions, Services, Fire-Technical Inspection (FTI), Orders (private), Orders (state), Fires, Criminal Cases, Reports, plus configuration sections — the departmental register, Services List, Inspectors and Settings. Each item carries an icon for quick visual recognition.\n\nThe central area displays the service emblem and the full name of the organisation — “Unified electronic repository of the Main Directorate of the State Fire Service of the Ministry of Internal Affairs of the Republic of Tajikistan”. The top-right corner shows the user's name and role (“Administrator”) with a profile dropdown.\n\nUser journey: an authenticated employee selects the required module in the sidebar and moves on to facility accounting, fire registration, criminal-case handling or report generation. Expandable items (Reports, Settings) group related sections.\n\nBusiness value: a single workspace with a logical grouping of modules speeds up staff work and lowers the learning curve. This structure suits any departmental ERP system with a large number of functional sections.",
              tj: "Фазои корӣ дарҳол пас аз вуруд кушода мешавад ва ҳамаи воситаҳои системаро дар як интерфейс муттаҳид мекунад. Панели чапи паҳлуӣ менюи асосиро дар бар мегирад: «Иншоотҳои хусусӣ», «Иншоотҳои давлатӣ», «Хулосаҳо», «Хизматрасониҳо», «КПО», «Амрнома (хусусӣ)», «Амрнома (давлатӣ)», «Сӯхторҳо», «Ҷиноятҳо», «Ҳисоботҳо», инчунин бахшҳои танзимот — «ШНБДС СХДО ВКД ҶТ», «Рӯйхати хизматрасониҳо», «Назоратчиён» ва «Танзимот». Бандҳо бо нишонаҳо барои шинохти зуди визуалӣ муҷаҳҳазанд.\n\nҚисми марказиро нишони хидмат ва номи пурраи ташкилот — «Маҳзани ягонаи электронии Сарраёсати Хадамоти Давлатии Оташнишонии ВКД Ҷумҳурии Тоҷикистон» — ишғол мекунад. Дар кунҷи болоии рост ном ва нақши корбар («Администратор») бо менюи профил нишон дода мешавад.\n\nРаванди истифода: корманди воридшуда модули заруриро дар менюи паҳлуӣ интихоб карда, ба баҳисобгирии иншоот, бақайдгирии сӯхтор, пешбурди парвандаҳои ҷиноятӣ ё таҳияи ҳисобот мегузарад. Бандҳои кушодашаванда («Ҳисоботҳо», «Танзимот») бахшҳои алоқамандро гурӯҳбандӣ мекунанд.\n\nАҳамият барои тиҷорат: фазои ягонаи корӣ бо гурӯҳбандии мантиқии модулҳо кори кормандонро тезонида, остонаи омӯзишро паст мекунад. Чунин сохтор барои ҳар системаи идоравии ERP бо шумораи зиёди бахшҳои функсионалӣ мувофиқ аст.",
            },
          },
          {
            slug: "fire-registration",
            title: {
              ru: "Регистрация пожара",
              en: "Fire Registration",
              tj: "Бақайдгирии сӯхтор",
            },
            imageSrc: "/images/projects/sohktor/fire-registration.png",
            BannerSrc: "/images/projects/sohktor/fire-registration.png",
            shortInfo: {
              ru: "Структурированная карточка происшествия с вложениями",
              en: "A structured incident record with attachments",
              tj: "Корти сохторёфтаи ҳодиса бо замимаҳо",
            },
            fullInfo: {
              ru: "Экран «Добавить» (Илова кунед) в разделе «Пожары» предназначен для регистрации нового происшествия. Форма разделена на две колонки, что помогает вводить большой объём данных без перегрузки интерфейса.\n\nВ левой колонке расположено дерево подразделений «КМДА» (СХДО, ШНБДС СХДО, РХДО г.Душанбе, РХДО обл.Хатлон, РХДО обл.Согд, ШХДО ГБАО, ШХДО Рашт, ШХДО районов республиканского подчинения), позволяющее выбрать ответственную структуру. Ниже размещены поля «Дата и время начала пожара», выпадающий список «Причина пожара», тип объекта («Навъи иншоот») и выбор конкретного объекта с кнопкой «+ Добавить», а также номер информационной книги (КА).\n\nПравая колонка содержит решения по пожару, принятые меры, поле следователя (НДСБ), загрузку файла «Лист пожара» (Варақаи сӯхтор) через кнопку выбора файла, чекбокс «Архивировано» и кнопки «Сохранить» (Сабт кардан) и «Назад» (Бозгашт).\n\nПользовательский сценарий: сотрудник выбирает подразделение, указывает время и причину пожара, привязывает объект, заполняет сведения о принятых решениях и следователе, прикладывает документ и сохраняет карточку.\n\nЦенность для бизнеса: единая структурированная форма обеспечивает полноту и единообразие учёта происшествий, а вложения и привязка к подразделению делают данные пригодными для последующей аналитики и отчётности.",
              en: "The “Add” (Ilova kuned) screen in the Fires section is designed to register a new incident. The form is split into two columns, which helps enter a large volume of data without overloading the interface.\n\nThe left column contains the “KMDA” unit tree (SFS headquarters, the departmental register, city and regional fire directorates for Dushanbe, Khatlon and Sughd, GBAO, Rasht and the districts of republican subordination), letting the user pick the responsible structure. Below it are the “Fire start date and time” field, a “Fire cause” dropdown, the object type and a specific-object selector with an “+ Add” button, plus the information-book number.\n\nThe right column holds the decisions taken on the fire, the measures applied, an investigator field, a “Fire sheet” file upload through a file-picker button, an “Archived” checkbox and the “Save” and “Back” buttons.\n\nUser journey: an officer selects the division, enters the time and cause of the fire, links the facility, fills in details of the decisions taken and the investigator, attaches a document and saves the record.\n\nBusiness value: a single structured form ensures complete and consistent incident records, while attachments and the link to a division make the data suitable for later analytics and reporting.",
              tj: "Экрани «Илова кунед» дар бахши «Сӯхторҳо» барои бақайдгирии ҳодисаи нав пешбинӣ шудааст. Шакл ба ду сутун ҷудо шудааст, ки ворид кардани ҳаҷми зиёди маълумотро бидуни вазнинии интерфейс осон мекунад.\n\nДар сутуни чап дарахти воҳидҳои «КМДА» (СХДО, ШНБДС СХДО, РХДО ш.Душанбе, РХДО в.Хатлон, РХДО в.Суғд, ШХДО ВМКБ, ШХДО Рашт, ШХДО ноҳияҳои тобеи марказ) ҷойгир аст, ки интихоби сохтори масъулро имкон медиҳад. Дар поён майдонҳои «Таърих, вақти сар задани сӯхтор», рӯйхати кушодашавандаи «Сабаби сӯхтор», навъи иншоот ва интихоби иншооти мушаххас бо тугмаи «+ Илова», инчунин рақами китоби ахборотӣ (КА) ҷой доранд.\n\nСутуни рост қарорҳо оид ба сӯхтор, чораҳои андешидашуда, майдони таҳқиқбаранда (НДСБ), боркунии файли «Варақаи сӯхтор» тавассути тугмаи интихоби файл, катакчаи «Архившуда» ва тугмаҳои «Сабт кардан» ва «Бозгашт»-ро дар бар мегирад.\n\nРаванди истифода: корманд воҳидро интихоб мекунад, вақт ва сабаби сӯхторро нишон медиҳад, иншоотро пайваст мекунад, маълумотро дар бораи қарорҳои қабулшуда ва таҳқиқбаранда пур карда, санадро замима мекунад ва кортро нигоҳ медорад.\n\nАҳамият барои тиҷорат: шакли ягонаи сохторёфта пуррагӣ ва якрангии баҳисобгирии ҳодисаҳоро таъмин мекунад, замимаҳо ва пайванд ба воҳид бошанд, додаҳоро барои таҳлил ва ҳисоботи минбаъда мувофиқ мегардонанд.",
            },
          },
          {
            slug: "criminal-cases",
            title: {
              ru: "Уголовные дела",
              en: "Criminal Cases",
              tj: "Парвандаҳои ҷиноятӣ",
            },
            imageSrc: "/images/projects/sohktor/criminal-cases.png",
            BannerSrc: "/images/projects/sohktor/criminal-cases.png",
            shortInfo: {
              ru: "Учёт материалов проверки и уголовных дел по пожарам",
              en: "Tracking of inquiry materials and fire-related criminal cases",
              tj: "Баҳисобгирии маводи санҷиш ва парвандаҳои ҷиноятӣ",
            },
            fullInfo: {
              ru: "Раздел «Уголовные дела» (Ҷиноятҳо) позволяет фиксировать материалы проверок и уголовные дела, связанные с пожарами. Форма «Добавить» построена в две колонки и логически продолжает карточку пожара.\n\nЛевая колонка содержит тип объекта, дерево подразделений «КМДА», текстовое поле с описанием происшествия (город и район, наименование объекта, причина, ущерб и виновники), поле следователя, инспектора или прокурора, рассматривавшего материал, а также поле статьи Уголовного кодекса, по которой возбуждено или отказано в возбуждении дела.\n\nПравая колонка включает дату проверки материалов или рассмотрения дела и назначения наказания, поле следователя (НДБС), выпадающий список «Статус исполнения» (Ҳолати иҷро), номер книги учёта уголовных дел (КЧ), способ регистрации, признак передачи в другое подразделение, загрузку файла «Лист уголовного дела» и чекбокс архивации. Форму завершают кнопки «Сохранить» и «Назад».\n\nПользовательский сценарий: сотрудник связывает уголовное дело с конкретным пожаром, указывает статью, ответственных лиц и статус исполнения, прикладывает материалы и сохраняет запись.\n\nЦенность для бизнеса: сквозная связь пожаров и уголовных дел даёт целостную картину правовых последствий происшествий и упрощает контроль исполнения. Похожая модель применима в любых системах, где инцидент порождает последующее делопроизводство.",
              en: "The Criminal Cases section lets the service record inquiry materials and criminal cases linked to fires. The “Add” form uses two columns and logically follows on from the fire record.\n\nThe left column holds the object type, the “KMDA” unit tree, a text field describing the incident (city and district, facility name, cause, damage and responsible parties), a field for the investigator, inspector or prosecutor who reviewed the material, and a field for the Criminal Code article under which a case was opened or declined.\n\nThe right column includes the date the materials were checked or the case reviewed and the penalty assigned, an investigator field, an “Execution status” dropdown, the criminal-case book number, the registration method, a flag for transfer to another division, a “Criminal case sheet” file upload and an archive checkbox. “Save” and “Back” buttons complete the form.\n\nUser journey: an officer links a criminal case to a specific fire, specifies the article, the responsible persons and the execution status, attaches the materials and saves the record.\n\nBusiness value: an end-to-end link between fires and criminal cases gives a complete picture of the legal consequences of incidents and simplifies execution control. A similar model suits any system where an incident triggers subsequent case management.",
              tj: "Бахши «Ҷиноятҳо» имкон медиҳад, ки маводи санҷишҳо ва парвандаҳои ҷиноятии марбут ба сӯхторҳо ба қайд гирифта шаванд. Шакли «Илова кунед» дар ду сутун сохта шуда, кортҳои сӯхторро мантиқан идома медиҳад.\n\nСутуни чап навъи иншоот, дарахти воҳидҳои «КМДА», майдони матнӣ бо тавсифи ҳодиса (шаҳру ноҳия, номи иншоот, сабаб, зарар ва шахсони сабабгор), майдони таҳқиқбаранда, муфаттиш ё прокуроре, ки маводро баррасӣ намудааст, инчунин майдони моддаи Кодекси ҷиноятиро, ки парванда аз рӯи он оғоз ё рад шудааст, дар бар мегирад.\n\nСутуни рост санаи санҷиши мавод ё баррасии парванда ва таъини ҷазо, майдони таҳқиқбаранда (НДБС), рӯйхати кушодашавандаи «Ҳолати иҷро», рақами китоби бақайдгирии ҷиноятҳо (КҶ), усули бақайдгирӣ, аломати гузариш ба воҳиди дигар, боркунии файли «Варақаи ҷиноят» ва катакчаи архивро дар бар мегирад. Шаклро тугмаҳои «Сабт кардан» ва «Бозгашт» анҷом медиҳанд.\n\nРаванди истифода: корманд парвандаи ҷиноятиро бо сӯхтори мушаххас пайваст мекунад, модда, шахсони масъул ва ҳолати иҷроро нишон медиҳад, маводро замима карда, сабтро нигоҳ медорад.\n\nАҳамият барои тиҷорат: пайванди фаросарии сӯхторҳо ва парвандаҳои ҷиноятӣ манзараи мукаммали оқибатҳои ҳуқуқии ҳодисаҳоро медиҳад ва назорати иҷроро осон мекунад. Модели монанд барои ҳар системае, ки дар он ҳодиса пешбурди минбаъдаро ба миён меорад, мувофиқ аст.",
            },
          },
          {
            slug: "fire-report",
            title: {
              ru: "Отчёт по пожарам",
              en: "Fire Report",
              tj: "Ҳисоботи сӯхторҳо",
            },
            imageSrc: "/images/projects/sohktor/fire-report.png",
            BannerSrc: "/images/projects/sohktor/fire-report.png",
            shortInfo: {
              ru: "Сводная статистика ущерба с фильтрами и экспортом",
              en: "Aggregate damage statistics with filters and export",
              tj: "Омори ҷамъбастии зарар бо филтрҳо ва содирот",
            },
            fullInfo: {
              ru: "Экран «Отчёт по пожарам» (Ҳисоботи Сӯхторҳо) формирует сводную статистику происшествий по заданным параметрам. Верхняя часть содержит развитый блок фильтров: подразделение «КМДА», дата начала и окончания периода, признак архива, причина пожара, способ регистрации, распространение пожара, гибель людей, телесные повреждения, принятые решения и меры, а также тип объекта.\n\nПод фильтрами расположены кнопки действий: «Поиск» (Ҷустуҷӯ), «Сравнить с прошлым годом» (Муқоиса бо соли гузашта) и «Экспорт в Excel» (Экспорт ба Excel). Результат представлен в виде итоговой таблицы с ключевыми показателями — количество пожаров, площадь пожара (кв. м), ущерб и спасённое имущество (в сомони). Ниже выводится круговая диаграмма «Распределение данных (%)», наглядно показывающая соотношение ущерба и спасённого имущества.\n\nПользовательский сценарий: аналитик задаёт период и фильтры, запускает поиск, оценивает показатели в таблице и на диаграмме, при необходимости сравнивает с прошлым годом и выгружает данные в Excel.\n\nЦенность для бизнеса: гибкая многопараметрическая отчётность превращает разрозненные записи о пожарах в управленческую информацию, поддерживает анализ динамики и обоснование решений. Подобный модуль востребован в любой системе, где нужны срезы данных, визуализация и экспорт.",
              en: "The Fire Report screen builds aggregate incident statistics from the chosen parameters. The upper area contains a rich filter block: the “KMDA” division, the start and end dates of the period, an archive flag, the fire cause, the registration method, fire spread, loss of life, physical injuries, decisions and measures taken, and the object type.\n\nBelow the filters are the action buttons: “Search”, “Compare with last year” and “Export to Excel”. The result is shown as a summary table with the key indicators — the number of fires, the fire area (sq. m), the damage and the saved property (in somoni). A “Data distribution (%)” pie chart below the table clearly shows the ratio of damage to saved property.\n\nUser journey: an analyst sets the period and filters, runs the search, assesses the indicators in the table and the chart, optionally compares them with the previous year and exports the data to Excel.\n\nBusiness value: flexible multi-parameter reporting turns scattered fire records into management information, supporting trend analysis and decision justification. A similar module is in demand in any system that needs data slices, visualisation and export.",
              tj: "Экрани «Ҳисоботи Сӯхторҳо» омори ҷамъбастии ҳодисаҳоро аз рӯи параметрҳои додашуда таҳия мекунад. Қисми боло блоки васеи филтрҳоро дар бар мегирад: воҳиди «КМДА», санаи аввал ва анҷоми давра, аломати архив, сабаби сӯхтор, усули бақайдгирӣ, паҳншавии сӯхтор, фавти одамон, ҷароҳати ҷисмонӣ, қарорҳо ва чораҳои қабулшуда, инчунин навъи иншоот.\n\nЗери филтрҳо тугмаҳои амал ҷойгиранд: «Ҷустуҷӯ», «Муқоиса бо соли гузашта» ва «Экспорт ба Excel». Натиҷа дар шакли ҷадвали ҷамъбастӣ бо нишондиҳандаҳои асосӣ — шумораи сӯхторҳо, масоҳати сӯхтор (метри мураббаъ), зарар ва амволи наҷотдодашуда (бо сомонӣ) — пешниҳод мешавад. Дар поён диаграммаи доиравии «Тақсимоти маълумот (%)» нисбати зарар ва амволи наҷотдодашударо ба таври равшан нишон медиҳад.\n\nРаванди истифода: таҳлилгар давра ва филтрҳоро таъин мекунад, ҷустуҷӯро оғоз менамояд, нишондиҳандаҳоро дар ҷадвал ва диаграмма арзёбӣ мекунад, ҳангоми зарурат бо соли гузашта муқоиса карда, додаҳоро ба Excel содир мекунад.\n\nАҳамият барои тиҷорат: ҳисоботи чандпараметрии фасеҳ сабтҳои парокандаи сӯхторро ба иттилооти идоракунӣ табдил медиҳад, таҳлили динамика ва асоснокии қарорҳоро дастгирӣ мекунад. Чунин модул дар ҳар системае, ки ба буришҳои додаҳо, тасвир ва содирот ниёз дорад, зарур аст.",
            },
          },
          {
            slug: "inspected-objects-report",
            title: {
              ru: "Отчёт по проверенным объектам",
              en: "Inspected Objects Report",
              tj: "Ҳисоботи иншоотҳои санҷишӣ",
            },
            imageSrc: "/images/projects/sohktor/inspected-objects-report.png",
            BannerSrc: "/images/projects/sohktor/inspected-objects-report.png",
            shortInfo: {
              ru: "Распределение объектов по категориям пожарного риска",
              en: "Facilities grouped by fire-risk category",
              tj: "Тақсими иншоот аз рӯи категорияи хавфи сӯхтор",
            },
            fullInfo: {
              ru: "Экран «Отчёт по проверенным объектам» (Ҳисоботи Иншоотҳои санҷишӣ) показывает распределение проверенных субъектов хозяйствования по степени пожарного риска. Блок фильтров включает степень риска, присвоенную субъекту, подразделение «КМДА», дату начала и окончания периода и признак архива.\n\nОсновной результат представлен таблицей с итоговыми показателями: общее количество объектов и разбивка по категориям риска — «Высокий», «Средний» и «Низкий» с указанием как абсолютных значений, так и процентных долей. Круговая диаграмма «Распределение данных (%)» визуализирует соотношение категорий риска цветовыми секторами. Внизу расположены кнопки «Поиск» и «Экспорт в Excel», а также детальная таблица с подробными сведениями о каждом проверенном объекте (наименование субъекта, адрес, основание проверки, даты проверок, инспектор и подразделение).\n\nПользовательский сценарий: инспектор выбирает степень риска и период, формирует отчёт, оценивает распределение объектов по категориям и выгружает данные для дальнейшей работы.\n\nЦенность для бизнеса: риск-ориентированная отчётность помогает планировать надзорные мероприятия и концентрировать ресурсы на наиболее опасных объектах. Модель risk-based выборки и визуализации применима в любой системе контроля и аудита.",
              en: "The Inspected Objects Report screen shows how inspected business entities are distributed by fire-risk level. The filter block includes the risk level assigned to the entity, the “KMDA” division, the start and end dates of the period and an archive flag.\n\nThe main result is a table with summary figures: the total number of facilities and a breakdown by risk category — High, Medium and Low — with both absolute values and percentage shares. A “Data distribution (%)” pie chart visualises the ratio of risk categories with coloured sectors. At the bottom are “Search” and “Export to Excel” buttons, along with a detailed table with full information on each inspected facility (entity name, address, inspection grounds, inspection dates, inspector and division).\n\nUser journey: an inspector selects the risk level and period, generates the report, assesses the distribution of facilities across categories and exports the data for further work.\n\nBusiness value: risk-based reporting helps plan supervisory activities and concentrate resources on the most dangerous facilities. A risk-based sampling and visualisation model applies to any control and audit system.",
              tj: "Экрани «Ҳисоботи Иншоотҳои санҷишӣ» тақсими субъектҳои хоҷагидории санҷидашударо аз рӯи дараҷаи хавфи сӯхтор нишон медиҳад. Блоки филтрҳо дараҷаи хавфи ба субъект додашуда, воҳиди «КМДА», санаи аввал ва анҷоми давра ва аломати архивро дар бар мегирад.\n\nНатиҷаи асосӣ дар ҷадвали дорои нишондиҳандаҳои ҷамъбастӣ пешниҳод мешавад: шумораи умумии иншоот ва тақсим аз рӯи категорияҳои хавф — «Баланд», «Миёна» ва «Паст» бо нишон додани ҳам қиматҳои мутлақ ва ҳам ҳиссаҳои фоизӣ. Диаграммаи доиравии «Тақсимоти маълумот (%)» нисбати категорияҳои хавфро бо секторҳои рангӣ тасвир мекунад. Дар поён тугмаҳои «Ҷустуҷӯ» ва «Экспорт ба Excel», инчунин ҷадвали муфассал бо маълумоти ҳар иншооти санҷидашуда (номи субъект, суроға, асоси санҷиш, санаҳои санҷиш, назоратчӣ ва воҳид) ҷойгиранд.\n\nРаванди истифода: назоратчӣ дараҷаи хавф ва давраро интихоб мекунад, ҳисоботро таҳия менамояд, тақсими иншоотро аз рӯи категорияҳо арзёбӣ карда, додаҳоро барои кори минбаъда содир мекунад.\n\nАҳамият барои тиҷорат: ҳисоботи ба хавф нигаронидашуда ба банақшагирии чорабиниҳои назоратӣ ва мутамарказ кардани захираҳо ба иншооти хавфноктарин кумак мекунад. Модели интихоб ва тасвири ба хавф асосёфта барои ҳар системаи назорат ва аудит мувофиқ аст.",
            },
          },
          {
            slug: "fire-register",
            title: {
              ru: "Реестр пожаров",
              en: "Fire Register",
              tj: "Феҳристи сӯхторҳо",
            },
            imageSrc: "/images/projects/sohktor/fire-register.png",
            BannerSrc: "/images/projects/sohktor/fire-register.png",
            shortInfo: {
              ru: "Табличный список происшествий с поиском и пагинацией",
              en: "A tabular list of incidents with search and pagination",
              tj: "Рӯйхати ҷадвалии ҳодисаҳо бо ҷустуҷӯ ва саҳифабандӣ",
            },
            fullInfo: {
              ru: "Реестр пожаров — это табличное представление всех зарегистрированных происшествий, дающее оператору полный обзор данных. В верхней части расположены строка поиска (Ҷустуҷӯ...), выпадающий фильтр по типу записи (Ҳамаи намуд), кнопка обновления и кнопка «+» для добавления новой записи, которая ведёт к форме регистрации пожара.\n\nОсновную область занимает широкая таблица с колонками: ИД, «КМДА», дата и время начала пожара, наименование и адрес объекта с его принадлежностью, причина пожара и виновники, площадь пожара (кв. м), ущерб и спасённое имущество (в сомони), номер информационной книги (КА), способ регистрации и сведения о распространении пожара. Горизонтальная прокрутка обеспечивает доступ ко всем полям, а чекбоксы в первой колонке позволяют выбирать записи для групповых операций.\n\nВнизу таблицы находится постраничная навигация с номерами страниц, кнопкой перехода к следующей и последней странице, а также селектор количества строк на странице.\n\nПользовательский сценарий: оператор ищет нужное происшествие по ключевым словам или фильтру, просматривает показатели в таблице, открывает запись для редактирования или добавляет новую через кнопку «+».\n\nЦенность для бизнеса: реестр с поиском, фильтрами и пагинацией обеспечивает быстрый доступ к большим объёмам данных и удобное ведение учёта. Такой паттерн является основой любой административной системы работы со списками записей.",
              en: "The fire register is a tabular view of all recorded incidents that gives the operator a complete overview of the data. The top area holds a search field, a record-type dropdown filter, a refresh button and a “+” button for adding a new record, which opens the fire registration form.\n\nThe main area is a wide table with columns: ID, “KMDA”, the fire start date and time, the facility name and address with its affiliation, the fire cause and responsible parties, the fire area (sq. m), the damage and the saved property (in somoni), the information-book number, the registration method and details of the fire's spread. Horizontal scrolling provides access to all fields, while checkboxes in the first column let the user select records for bulk operations.\n\nAt the bottom of the table is pagination with page numbers, buttons to move to the next and last page, and a selector for the number of rows per page.\n\nUser journey: an operator searches for the required incident by keywords or filter, reviews the indicators in the table, opens a record for editing or adds a new one with the “+” button.\n\nBusiness value: a register with search, filters and pagination provides fast access to large volumes of data and convenient record keeping. This pattern is the foundation of any administrative system that works with lists of records.",
              tj: "Феҳристи сӯхторҳо намоиши ҷадвалии ҳамаи ҳодисаҳои бақайдгирифташуда буда, ба оператор шарҳи мукаммали додаҳоро медиҳад. Дар қисми боло сатри ҷустуҷӯ (Ҷустуҷӯ...), филтри кушодашаванда аз рӯи навъи сабт (Ҳамаи намуд), тугмаи навсозӣ ва тугмаи «+» барои илова кардани сабти нав, ки ба шакли бақайдгирии сӯхтор мебарад, ҷойгиранд.\n\nМайдони асосиро ҷадвали васеъ бо сутунҳо ишғол мекунад: ИД, «КМДА», таърих ва вақти сар задани сӯхтор, ному нишонӣ ва суроғаи иншоот бо мансубияти он, сабаби сӯхтор ва шахсони сабабгор, масоҳати сӯхтор (метри мураббаъ), зарар ва амволи наҷотдодашуда (бо сомонӣ), рақами китоби ахборотӣ (КА), усули бақайдгирӣ ва маълумот дар бораи паҳншавии сӯхтор. Ҳаракати уфуқӣ дастрасӣ ба ҳамаи майдонҳоро таъмин мекунад, катакчаҳо дар сутуни аввал бошанд, интихоби сабтҳоро барои амалиёти гурӯҳӣ имкон медиҳанд.\n\nДар поёни ҷадвал саҳифабандӣ бо рақамҳои саҳифаҳо, тугмаҳои гузариш ба саҳифаи навбатӣ ва охирин, инчунин интихобкунандаи шумораи сатрҳо дар саҳифа ҷойгир аст.\n\nРаванди истифода: оператор ҳодисаи заруриро аз рӯи калимаҳои калидӣ ё филтр меҷӯяд, нишондиҳандаҳоро дар ҷадвал мебинад, сабтро барои таҳрир мекушояд ё сабти навро тавассути тугмаи «+» илова мекунад.\n\nАҳамият барои тиҷорат: феҳрист бо ҷустуҷӯ, филтрҳо ва саҳифабандӣ дастрасии зудро ба ҳаҷми зиёди додаҳо ва пешбурди осони баҳисобгириро таъмин мекунад. Чунин намуна асоси ҳар системаи маъмурии кор бо рӯйхати сабтҳо мебошад.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/pic.webp",
    year: "2024",
    tags: ["Laravel", "React", "PostgreSQL", "Docker", "REST API"],
    slug: "digital-tajikistan",
    gallery: [
      "/images/projects/pic/gallery-1.png",
      "/images/projects/pic/gallery-2.png",
      "/images/projects/pic/gallery-3.png",
      "/images/projects/pic/gallery-4.png",
      "/images/projects/pic/gallery-5.png",
    ],
    projectComponents: [
      {
        tabName: { ru: "Портал", en: "Portal", tj: "Портал" },
        items: [
          {
            slug: "home",
            title: {
              ru: "Главная страница",
              en: "Homepage",
              tj: "Саҳифаи асосӣ",
            },
            imageSrc: "/images/projects/pic/gallery-1.png",
            BannerSrc: "/images/projects/pic/gallery-1.png",
            shortInfo: {
              ru: "Презентация государственного проекта и партнёры",
              en: "State project presentation and partners",
              tj: "Муаррифии лоиҳаи давлатӣ ва шарикон",
            },
            fullInfo: {
              ru: "Главная страница портала «Tajikistan Digital Foundations» представляет государственный проект цифровой трансформации. В шапке размещены государственный герб, полное название учреждения — Государственное учреждение «Центр реализации проектов цифровых основ Таджикистана» при Исполнительном аппарате Президента — и логотип TDF. Горизонтальное меню объединяет разделы «Главная», «Новости», «Объявления», «Проекты», «Государственные символы», «Структура», «FAQ» и «О нас». Дополнительно в шапке доступны инструменты доступности (увеличение шрифта, версия для слабовидящих), переключатель языка и поиск. Центральную область занимает крупный баннер с изображением здания правительства и цифровым фоном, заголовком «Tajikistan Digital Foundations Project» и кнопкой «Learn more». Под баннером бегущая строка перечисляет направления проекта, а нижняя полоса содержит логотипы партнёров: Всемирный банк, профильные министерства и организации.\n\nПользовательский сценарий: посетитель знакомится с сутью проекта из баннера, переходит к подробностям кнопкой «Learn more» либо выбирает нужный раздел — новости, проекты или структуру — через основное меню.\n\nЦенность для бизнеса: подобная главная страница подходит государственным и институциональным порталам, где важно одновременно представить миссию, обозначить направления работы и показать партнёрскую поддержку. Инструменты доступности и мультиязычность делают ресурс пригодным для широкой аудитории.",
              en: "The homepage of the Tajikistan Digital Foundations portal presents the state digital transformation project. The header contains the national emblem, the institution’s full name — State Institution “Project Implementation Center for the Digital Foundations of Tajikistan” under the Executive Office of the President — and the TDF logo. A horizontal menu brings together Home, News, Announcements, Projects, State Symbols, Structure, FAQ and About Us. The header also offers accessibility tools (font enlargement, a low-vision version), a language switcher and search. The centre holds a large banner with an image of the government building on a digital background, the headline “Tajikistan Digital Foundations Project” and a Learn more button. A ticker below the banner lists the project directions, while a bottom strip shows partner logos: the World Bank, relevant ministries and organisations.\n\nUser journey: the visitor grasps the essence of the project from the banner, moves to details via Learn more, or selects a relevant section — news, projects or structure — through the main menu.\n\nBusiness value: such a homepage suits government and institutional portals where it is important to present the mission, outline areas of work and show partner support at once. Accessibility tools and multilingual support make the resource fit for a wide audience.",
              tj: "Саҳифаи асосии портали «Tajikistan Digital Foundations» лоиҳаи давлатии дигаргунсозии рақамиро муаррифӣ мекунад. Дар қисми боло нишони давлатӣ, номи пурраи муассиса — Муассисаи давлатии «Маркази татбиқи лоиҳаҳои асосҳои рақамии Тоҷикистон» назди Дастгоҳи иҷроияи Президент — ва нишони TDF ҷойгиранд. Менюи уфуқӣ бахшҳои «Асосӣ», «Хабарҳо», «Эълонҳо», «Лоиҳаҳо», «Рамзҳои давлатӣ», «Сохтор», «FAQ» ва «Дар бораи мо»-ро муттаҳид мекунад. Ҳамчунин дар қисми боло абзорҳои дастрасӣ (калон кардани шрифт, версия барои камбинойон), интихобкунандаи забон ва ҷустуҷӯ дастрасанд. Қисми марказиро баннери калон бо тасвири бинои ҳукумат дар заминаи рақамӣ, сарлавҳаи «Tajikistan Digital Foundations Project» ва тугмаи «Learn more» ишғол мекунад. Дар зери баннер сатри давон самтҳои лоиҳаро номбар мекунад ва навори поёнӣ нишонаҳои шариконро дар бар мегирад: Бонки ҷаҳонӣ, вазоратҳо ва созмонҳои дахлдор.\n\nРаванди истифода: корбар моҳияти лоиҳаро аз баннер дарк мекунад, бо тугмаи «Learn more» ба тафсилот мегузарад ё бахши заруриро — хабарҳо, лоиҳаҳо ё сохтор — тавассути менюи асосӣ интихоб менамояд.\n\nАҳамият барои тиҷорат: чунин саҳифаи асосӣ барои порталҳои давлатӣ ва институтсионалӣ мувофиқ аст, ки дар онҳо ҳамзамон пешниҳоди рисолат, нишон додани самтҳои кор ва дастгирии шарикон муҳим аст. Абзорҳои дастрасӣ ва бисёрзабонӣ манбаъро барои шунавандагони васеъ мувофиқ мегардонанд.",
            },
          },
          {
            slug: "news",
            title: {
              ru: "Новости",
              en: "News",
              tj: "Хабарҳо",
            },
            imageSrc: "/images/projects/pic/gallery-2.png",
            BannerSrc: "/images/projects/pic/gallery-2.png",
            shortInfo: {
              ru: "Лента публикаций с поиском",
              en: "Publication feed with search",
              tj: "Лентаи нашрҳо бо ҷустуҷӯ",
            },
            fullInfo: {
              ru: "Раздел «Новости» организует публикации о ходе проекта. Под заголовком «News» и хлебными крошками расположено поле поиска по новостям, а ниже — вкладка «All News» и лента материалов. Каждая новость оформлена карточкой с фотографией мероприятия, меткой категории «News», датой публикации, заголовком и ссылкой «More Details». На экране представлены материалы о рабочих встречах и совещаниях по проекту, что показывает регулярное информационное сопровождение.\n\nПользовательский сценарий: посетитель просматривает ленту новостей, при необходимости уточняет запрос через поиск и открывает интересующую публикацию по ссылке «More Details».\n\nЦенность для бизнеса: новостной модуль поддерживает прозрачность и информирует аудиторию о ходе работ. Единый формат карточек с датой и фотографией облегчает восприятие потока публикаций и создаёт впечатление активной, регулярно обновляемой площадки.",
              en: "The News section organises publications on the project’s progress. Below the “News” heading and breadcrumbs is a news search field, followed by an All News tab and a feed of materials. Each news item is a card with an event photograph, a “News” category tag, a publication date, a headline and a More Details link. The screen shows materials about working meetings and project sessions, reflecting regular information coverage.\n\nUser journey: the visitor browses the news feed, refines the query through search if needed and opens the relevant publication via the More Details link.\n\nBusiness value: a news module supports transparency and keeps the audience informed about the progress of work. A uniform card format with date and photograph makes the stream of publications easy to follow and conveys the impression of an active, regularly updated platform.",
              tj: "Бахши «Хабарҳо» нашрҳоро дар бораи ҷараёни лоиҳа ба тартиб меорад. Зери сарлавҳаи «News» ва пайраҳаи навигатсионӣ майдони ҷустуҷӯи хабарҳо ҷойгир аст ва дар поён — варақаи «All News» ва лентаи мавод. Ҳар хабар ҳамчун корт бо акси чорабинӣ, нишонаи гурӯҳи «News», санаи нашр, сарлавҳа ва пайванди «More Details» таҳия шудааст. Дар экран маводи вохӯриҳои корӣ ва машваратҳо оид ба лоиҳа пешниҳод шудааст, ки ҳамроҳии мунтазами иттилоотиро нишон медиҳад.\n\nРаванди истифода: корбар лентаи хабарҳоро аз назар мегузаронад, ҳангоми зарурат дархостро тавассути ҷустуҷӯ мушаххас мекунад ва нашри ҷолибро бо пайванди «More Details» мекушояд.\n\nАҳамият барои тиҷорат: модули хабарҳо шаффофиятро дастгирӣ мекунад ва шунавандагонро аз ҷараёни корҳо огоҳ месозад. Формати ягонаи кортҳо бо сана ва акс дарки ҷараёни нашрҳоро осон мекунад ва таассуроти майдончаи фаъол ва мунтазам навшавандаро эҷод менамояд.",
            },
          },
          {
            slug: "projects",
            title: {
              ru: "Проекты",
              en: "Projects",
              tj: "Лоиҳаҳо",
            },
            imageSrc: "/images/projects/pic/gallery-3.png",
            BannerSrc: "/images/projects/pic/gallery-3.png",
            shortInfo: {
              ru: "Карточка проекта со статусом и прогрессом",
              en: "Project card with status and progress",
              tj: "Корти лоиҳа бо ҳолат ва пешрафт",
            },
            fullInfo: {
              ru: "Раздел «Проекты» представляет инициативы учреждения в виде структурированных карточек. Под заголовком «Projects» размещено поле поиска по проектам. Карточка проекта содержит статусную метку «Active», категорию, название «Tajikistan Digital Foundations Project», изображение и краткое описание. Отдельно вынесены ключевые параметры: индикатор прогресса с процентом выполнения, срок реализации и общий бюджет. Кнопка «Read More» ведёт к подробной странице проекта.\n\nПользовательский сценарий: посетитель оценивает статус и прогресс проекта по карточке, сопоставляет сроки и бюджет и открывает подробную информацию для более глубокого изучения.\n\nЦенность для бизнеса: карточка проекта с прогрессом, сроками и бюджетом наглядно демонстрирует подотчётность и ход исполнения. Такой формат полезен для организаций, реализующих программы и гранты, где важно показывать статус инициатив прозрачно и единообразно.",
              en: "The Projects section presents the institution’s initiatives as structured cards. A project search field sits below the “Projects” heading. The project card contains an “Active” status label, a category, the name “Tajikistan Digital Foundations Project”, an image and a short description. Key parameters are shown separately: a progress indicator with a completion percentage, an implementation deadline and the total budget. A Read More button leads to the detailed project page.\n\nUser journey: the visitor assesses the project’s status and progress from the card, compares the timeline and budget, and opens the detailed information for closer study.\n\nBusiness value: a project card with progress, deadlines and budget clearly demonstrates accountability and execution. This format is useful for organisations running programmes and grants, where it is important to show the status of initiatives transparently and consistently.",
              tj: "Бахши «Лоиҳаҳо» ташаббусҳои муассисаро дар шакли кортҳои сохторёфта пешниҳод мекунад. Зери сарлавҳаи «Projects» майдони ҷустуҷӯи лоиҳаҳо ҷойгир аст. Корти лоиҳа нишонаи ҳолати «Active», гурӯҳ, номи «Tajikistan Digital Foundations Project», тасвир ва тавсифи кӯтоҳро дар бар мегирад. Параметрҳои асосӣ алоҳида нишон дода шудаанд: нишондиҳандаи пешрафт бо фоизи иҷро, мӯҳлати татбиқ ва буҷети умумӣ. Тугмаи «Read More» ба саҳифаи муфассали лоиҳа мебарад.\n\nРаванди истифода: корбар ҳолат ва пешрафти лоиҳаро аз рӯйи корт арзёбӣ мекунад, мӯҳлат ва буҷетро муқоиса менамояд ва барои омӯзиши амиқтар маълумоти муфассалро мекушояд.\n\nАҳамият барои тиҷорат: корти лоиҳа бо пешрафт, мӯҳлат ва буҷет ҳисоботдиҳӣ ва ҷараёни иҷроро аён нишон медиҳад. Ин формат барои созмонҳое, ки барномаҳо ва грантҳоро амалӣ мекунанд ва бояд ҳолати ташаббусҳоро шаффоф ва якхела нишон диҳанд, муфид аст.",
            },
          },
          {
            slug: "state-symbols",
            title: {
              ru: "Государственные символы",
              en: "State Symbols",
              tj: "Рамзҳои давлатӣ",
            },
            imageSrc: "/images/projects/pic/gallery-4.png",
            BannerSrc: "/images/projects/pic/gallery-4.png",
            shortInfo: {
              ru: "Справочный раздел о символах государства",
              en: "Reference section on state symbols",
              tj: "Бахши маълумотӣ дар бораи рамзҳои давлат",
            },
            fullInfo: {
              ru: "Раздел «Государственные символы» представляет официальную справочную информацию. Под заголовком «State Symbols» и хлебными крошками расположены вкладки «State Emblem», «State Flag» и «National Anthem», разделяющие содержимое по типам символов. В активной вкладке выводятся выдержка из Закона Республики Таджикистан о государственных символах, заголовок «State Emblem» и изображение государственного герба. Такой формат объединяет нормативный текст и визуальное представление символа.\n\nПользовательский сценарий: посетитель выбирает нужный символ через вкладки, знакомится с официальным описанием и рассматривает изображение.\n\nЦенность для бизнеса: справочный раздел с вкладками удобен для представления официальной или регламентной информации, которая должна быть точной и структурированной. Аналогичный подход применим для страниц о нормативах, стандартах и официальной символике организации.",
              en: "The State Symbols section presents official reference information. Below the “State Symbols” heading and breadcrumbs are the State Emblem, State Flag and National Anthem tabs, separating the content by symbol type. The active tab shows an excerpt from the Law of the Republic of Tajikistan on state symbols, the “State Emblem” heading and an image of the national emblem. This format combines the regulatory text with a visual representation of the symbol.\n\nUser journey: the visitor selects the relevant symbol through the tabs, reads the official description and views the image.\n\nBusiness value: a tabbed reference section is convenient for presenting official or regulatory information that must be accurate and structured. A similar approach suits pages about regulations, standards and an organisation’s official symbols.",
              tj: "Бахши «Рамзҳои давлатӣ» маълумоти расмии маълумотиро пешниҳод мекунад. Зери сарлавҳаи «State Symbols» ва пайраҳаи навигатсионӣ варақаҳои «State Emblem», «State Flag» ва «National Anthem» ҷойгиранд, ки мундариҷаро аз рӯйи навъи рамзҳо ҷудо мекунанд. Дар варақаи фаъол порчае аз Қонуни Ҷумҳурии Тоҷикистон дар бораи рамзҳои давлатӣ, сарлавҳаи «State Emblem» ва тасвири нишони давлатӣ намоиш дода мешавад. Ин формат матни меъёриро бо пешниҳоди аёнии рамз муттаҳид мекунад.\n\nРаванди истифода: корбар рамзи заруриро тавассути варақаҳо интихоб мекунад, бо тавсифи расмӣ шинос мешавад ва тасвирро аз назар мегузаронад.\n\nАҳамият барои тиҷорат: бахши маълумотӣ бо варақаҳо барои пешниҳоди иттилооти расмӣ ё меъёрӣ, ки бояд дақиқ ва сохторёфта бошад, қулай аст. Равиши монанд барои саҳифаҳо оид ба меъёрҳо, стандартҳо ва рамзҳои расмии созмон мувофиқ аст.",
            },
          },
          {
            slug: "structure",
            title: {
              ru: "Структура",
              en: "Structure",
              tj: "Сохтор",
            },
            imageSrc: "/images/projects/pic/gallery-5.png",
            BannerSrc: "/images/projects/pic/gallery-5.png",
            shortInfo: {
              ru: "Организационная схема учреждения",
              en: "Organisational chart of the institution",
              tj: "Нақшаи ташкилии муассиса",
            },
            fullInfo: {
              ru: "Раздел «Структура» отображает организационную схему учреждения. В верхней части размещён полный заголовок о структуре Государственного учреждения при Исполнительном аппарате Президента и хлебные крошки. Ниже, под подзаголовком «Leadership», расположена иерархическая диаграмма: на вершине — «Director», под ним «Director’s Assistant» и «HR Specialist», далее — подразделения «ICT Department», «Deputy Director», «Accounting» и «Purchasing Department» с указанием ключевых должностей (координатор, специалист по мониторингу и оценке, главный бухгалтер, главный специалист по закупкам). Блоки соединены линиями, отражающими подчинённость.\n\nПользовательский сценарий: посетитель изучает схему сверху вниз, определяет состав подразделений и находит должность или отдел, отвечающий за интересующее направление.\n\nЦенность для бизнеса: визуальная организационная схема наглядно показывает состав и иерархию организации. Такой формат полезен для институциональных сайтов, где важно продемонстрировать прозрачную структуру управления и распределение ответственности.",
              en: "The Structure section displays the institution’s organisational chart. The top holds the full heading about the structure of the State Institution under the Executive Office of the President, together with breadcrumbs. Below, under the “Leadership” subheading, is a hierarchical diagram: at the top is the Director, followed by the Director’s Assistant and HR Specialist, then the ICT Department, Deputy Director, Accounting and Purchasing Department units with key positions indicated (coordinator, monitoring and evaluation specialist, chief accountant, chief procurement specialist). The blocks are connected by lines reflecting the reporting order.\n\nUser journey: the visitor studies the chart from top to bottom, identifies the composition of the units and finds the position or department responsible for the area of interest.\n\nBusiness value: a visual organisational chart clearly shows an organisation’s composition and hierarchy. This format is useful for institutional sites where it is important to demonstrate a transparent management structure and the distribution of responsibility.",
              tj: "Бахши «Сохтор» нақшаи ташкилии муассисаро намоиш медиҳад. Дар қисми боло сарлавҳаи пурра дар бораи сохтори Муассисаи давлатии назди Дастгоҳи иҷроияи Президент ва пайраҳаи навигатсионӣ ҷойгиранд. Дар поён, зери зерсарлавҳаи «Leadership», диаграммаи зинавӣ ҷой дорад: дар боло «Director», зери он «Director’s Assistant» ва «HR Specialist», сипас воҳидҳои «ICT Department», «Deputy Director», «Accounting» ва «Purchasing Department» бо нишон додани вазифаҳои асосӣ (ҳамоҳангсоз, мутахассиси мониторинг ва арзёбӣ, саршумордор, сармутахассиси харид). Блокҳо бо хатҳое, ки тобеиятро инъикос мекунанд, пайваст шудаанд.\n\nРаванди истифода: корбар нақшаро аз боло ба поён меомӯзад, ҳайати воҳидҳоро муайян мекунад ва вазифа ё шуъбаи масъули самти дилхоҳро меёбад.\n\nАҳамият барои тиҷорат: нақшаи аёнии ташкилӣ ҳайат ва зинанизоми созмонро равшан нишон медиҳад. Ин формат барои сомонаҳои институтсионалӣ муфид аст, ки дар онҳо нишон додани сохтори шаффофи идоракунӣ ва тақсими масъулият муҳим аст.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/mavjisomon.webp",
    year: "2024",
    tags: ["Laravel", "React", "PostgreSQL", "Flutter", "Nginx"],
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
            slug: "order",
              title: {
                ru: "Подписки и Заказы",
                en: "Subscriptions and Orders",
                tj: "Обунаҳо ва Фармоишҳо",
              },
              imageSrc: "/images/projects/mavjisomon/admin/order1.png",
              BannerSrc: "/images/projects/mavjisomon/admin/order1.png",
              shortInfo: {
                ru: "Управление подписками пользователей",
                en: "User subscription management",
                tj: "Идоракунии обунаҳои корбарон",
              },
              fullInfo: {
                ru: `Модуль управления заказами позволяет администраторам контролировать все активные подписки пользователей. Система предоставляет детализированную информацию о каждом заказе: статус оплаты, срок действия подписки и выбранный тарифный план.

Администраторы могут вручную продлевать подписки, отменять заказы в случае мошенничества и формировать отчетность по продажам за определенный период.`,
                en: `The order management module allows administrators to control all active user subscriptions. The system provides detailed information about each order: payment status, subscription expiration date, and the selected tariff plan.

Administrators can manually renew subscriptions, cancel orders in case of fraud, and generate sales reports for a specific period.`,
                tj: `Модули идоракунии фармоишҳо ба маъмурон имкон медиҳад, ки ҳамаи обунаҳои фаъоли корбаронро назорат кунанд. Система маълумоти муфассалро дар бораи ҳар як фармоиш пешниҳод мекунад: ҳолати пардохт, мӯҳлати эътибори обуна ва нақшаи тарифии интихобшуда.

Маъмурон метавонанд обунаҳоро дастӣ тамдид кунанд, фармоишҳоро дар сурати қаллобӣ бекор кунанд ва ҳисоботи фурӯшро барои давраи муайян таҳия кунанд.`,
              },
            },
          {
            slug: "payment",
              title: {
                ru: "Финансовые транзакции",
                en: "Financial Transactions",
                tj: "Амалиётҳои молиявӣ",
              },
              imageSrc: "/images/projects/mavjisomon/admin/payment.png",
              BannerSrc: "/images/projects/mavjisomon/admin/payment.png",
              shortInfo: {
                ru: "История платежей и чеков",
                en: "Payment and receipt history",
                tj: "Таърихи пардохтҳо ва чекҳо",
              },
              fullInfo: {
                ru: `В разделе транзакций собрана полная финансовая история платформы. Администраторы могут отслеживать каждый платеж, проверять статусы (успешно, ожидание, ошибка) и просматривать электронные чеки.

Модуль интегрирован с системой уведомлений: при сбое платежа пользователь автоматически получает напоминание. Также доступен экспорт транзакций в форматы CSV/Excel для бухгалтерского учета.`,
                en: `The transaction section contains the full financial history of the platform. Administrators can track every payment, check statuses (success, pending, error), and view electronic receipts.

The module is integrated with the notification system: in case of a payment failure, the user automatically receives a reminder. Export of transactions to CSV/Excel formats for accounting is also available.`,
                tj: `Дар бахши транзаксияҳо таърихи пурраи молиявии платформа ҷамъ оварда шудааст. Маъмурон метавонанд ҳар як пардохтро пайгирӣ кунанд, ҳолатҳоро (муваффақ, интизорӣ, хатогӣ) тафтиш кунанд ва чекҳои электрониро бинанд.

Модул бо системаи огоҳиномаҳо ҳамгиро шудааст: дар сурати нокомии пардохт корбар ба таври худкор ёдраскунӣ мегирад. Содироти транзаксияҳо ба форматҳои CSV/Excel барои баҳисобгирии муҳосибӣ инчунин дастрас аст.`,
              },
            },
          {
            slug: "total-balance",
              title: {
                ru: "Аналитика доходов",
                en: "Revenue Analytics",
                tj: "Таҳлили даромадҳо",
              },
              imageSrc: "/images/projects/mavjisomon/admin/total-balance.png",
              BannerSrc: "/images/projects/mavjisomon/admin/total-balance.png",
              shortInfo: {
                ru: "Дашборд финансовых метрик",
                en: "Financial metrics dashboard",
                tj: "Дашборди ченакҳои молиявӣ",
              },
              fullInfo: {
                ru: `Интерактивный дашборд для отслеживания общего баланса и выручки проекта. Графики показывают динамику доходов по дням, неделям и месяцам, позволяя оценивать эффективность маркетинговых кампаний.

Система автоматически рассчитывает средний чек (ARPU), общую стоимость жизни клиента (LTV) и предоставляет сводку по самым прибыльным тарифным планам платформы.`,
                en: `An interactive dashboard for tracking the total balance and revenue of the project. Charts show income dynamics by day, week, and month, allowing the evaluation of marketing campaign effectiveness.

The system automatically calculates the average check (ARPU), total customer lifetime value (LTV), and provides a summary of the platform's most profitable tariff plans.`,
                tj: `Дашборди интерактивӣ барои пайгирии тавозуни умумӣ ва даромади лоиҳа. Графикҳо динамикаи даромадро аз рӯи рӯз, ҳафта ва моҳ нишон медиҳанд ва имкон медиҳанд самаранокии маъракаҳои маркетингиро арзёбӣ кунанд.

Система чеки миёна (ARPU), арзиши умумии ҳаёти муштарӣ (LTV) -ро ба таври худкор ҳисоб мекунад ва хулосаи нақшаҳои тарифии аз ҳама фоидаовари платформаро пешниҳод мекунад.`,
              },
            },
          {
            slug: "payment-system",
              title: {
                ru: "Платежные шлюзы",
                en: "Payment Gateways",
                tj: "Шлюзҳои пардохт",
              },
              imageSrc: "/images/projects/mavjisomon/admin/payment-system.png",
              BannerSrc: "/images/projects/mavjisomon/admin/payment-system.png",
              shortInfo: {
                ru: "Интеграция с банками и кошельками",
                en: "Integration with banks and wallets",
                tj: "Ҳамгироӣ бо бонкҳо ва ҳамёнҳо",
              },
              fullInfo: {
                ru: `Модуль настройки платежных систем позволяет гибко управлять способами оплаты для пользователей. Поддерживается интеграция с популярными местными и международными шлюзами (Корти Милли, Alif, Visa, Mastercard, электронные кошельки).

Администратор может в один клик включать или отключать определенные способы оплаты, настраивать комиссии и проверять состояние API-соединения с банковскими серверами.`,
                en: `The payment systems configuration module allows flexible management of payment methods for users. Integration with popular local and international gateways (Corti Milli, Alif, Visa, Mastercard, e-wallets) is supported.

An administrator can enable or disable specific payment methods in one click, set up commissions, and check the status of the API connection with bank servers.`,
                tj: `Модули танзимоти системаҳои пардохт имкон медиҳад, ки усулҳои пардохт барои корбарон ба таври чандир идора карда шаванд. Ҳамгироӣ бо шлюзҳои машҳури маҳаллӣ ва байналмилалӣ (Корти Миллӣ, Alif, Visa, Mastercard, ҳамёнҳои электронӣ) дастгирӣ карда мешавад.

Маъмур метавонад бо як клик усулҳои муайяни пардохтро фаъол ё ғайрифаъол кунад, комиссияҳоро танзим кунад ва ҳолати пайвасти API-ро бо серверҳои бонкӣ тафтиш кунад.`,
              },
            },
          {
            slug: "products",
              title: {
                ru: "Тарифные планы",
                en: "Tariff Plans",
                tj: "Нақшаҳои тарифӣ",
              },
              imageSrc: "/images/projects/mavjisomon/admin/products.png",
              BannerSrc: "/images/projects/mavjisomon/admin/products.png",
              shortInfo: {
                ru: "Создание и управление подписками",
                en: "Creating and managing subscriptions",
                tj: "Эҷод ва идоракунии обунаҳо",
              },
              fullInfo: {
                ru: `Гибкий конструктор продуктов, позволяющий создавать разнообразные тарифные планы. Можно настроить длительность подписки (день, месяц, год), стоимость, а также доступный в рамках тарифа контент (только VOD, только Live TV или всё вместе).

Система поддерживает создание акционных тарифов со скидкой и настройку триального (пробного) периода для привлечения новых пользователей на платформу.`,
                en: `A flexible product builder that allows the creation of various tariff plans. You can configure subscription duration (day, month, year), cost, and content available within the tariff (VOD only, Live TV only, or everything together).

The system supports the creation of discounted promotional tariffs and the setup of a trial period to attract new users to the platform.`,
                tj: `Конструктори чандири маҳсулот, ки имкон медиҳад нақшаҳои тарифии гуногун эҷод карда шаванд. Шумо метавонед давомнокии обуна (рӯз, моҳ, сол), арзиш ва мундариҷаи дар доираи тариф дастрасро (танҳо VOD, танҳо Live TV ё ҳама якҷоя) танзим кунед.

Система эҷоди тарифҳои аксиягӣ бо тахфиф ва танзими давраи озмоиширо барои ҷалби корбарони нав ба платформа дастгирӣ мекунад.`,
              },
            },
          {
            slug: "type-product",
              title: {
                ru: "Типы продуктов",
                en: "Product Types",
                tj: "Намудҳои маҳсулот",
              },
              imageSrc: "/images/projects/mavjisomon/admin/type-product.png",
              BannerSrc: "/images/projects/mavjisomon/admin/type-product.png",
              shortInfo: {
                ru: "Категоризация услуг",
                en: "Service categorization",
                tj: "Категориябандии хидматҳо",
              },
              fullInfo: {
                ru: `Модуль для управления базовыми типами предлагаемых услуг. Позволяет логически разделять предложения на платформе: подписки на кинотеатр, пакеты телеканалов, покупка отдельных фильмов (PPV) или доступ к эксклюзивным трансляциям.

Правильная настройка типов продуктов обеспечивает корректную работу рекомендательных алгоритмов и упрощает навигацию пользователей при выборе подходящего тарифа.`,
                en: `A module for managing the basic types of offered services. It allows logical separation of offers on the platform: cinema subscriptions, TV channel packages, pay-per-view (PPV) movies, or access to exclusive broadcasts.

Proper configuration of product types ensures the correct operation of recommendation algorithms and simplifies user navigation when choosing a suitable tariff.`,
                tj: `Модул барои идоракунии намудҳои асосии хидматҳои пешниҳодшуда. Ба таври мантиқӣ тақсим кардани пешниҳодҳоро дар платформа имкон медиҳад: обунаҳо ба кинотеатр, бастаҳои шабакаҳои телевизионӣ, хариди филмҳои алоҳида (PPV) ё дастрасӣ ба пахшҳои эксклюзивӣ.

Танзими дурусти намудҳои маҳсулот кори дурусти алгоритмҳои тавсиявиро таъмин мекунад ва паймоиши корбаронро ҳангоми интихоби тарифи мувофиқ осон мекунад.`,
              },
            },
          {
            slug: "promotional-campaigns",
              title: {
                ru: "Маркетинг и Промо",
                en: "Marketing and Promos",
                tj: "Маркетинг ва Промо",
              },
              imageSrc: "/images/projects/mavjisomon/admin/promotional-campaigns.png",
              BannerSrc: "/images/projects/mavjisomon/admin/promotional-campaigns.png",
              shortInfo: {
                ru: "Скидки, баннеры и пуш-уведомления",
                en: "Discounts, banners, and push notifications",
                tj: "Тахфифҳо, баннерҳо ва огоҳиномаҳои push",
              },
              fullInfo: {
                ru: `Мощный инструмент для проведения рекламных кампаний. Администраторы могут создавать промокоды на скидку, настраивать динамические баннеры для Главного экрана приложения и запускать массовые email/push рассылки.

Для каждой кампании можно задать точные сроки действия, лимиты активаций и целевую аудиторию (например, только неактивные пользователи). Встроенная аналитика показывает конверсию каждого запущенного промо.`,
                en: `A powerful tool for running advertising campaigns. Administrators can create discount promo codes, set up dynamic banners for the application's Main Screen, and launch mass email/push campaigns.

For each campaign, exact validity periods, activation limits, and a target audience (e.g., only inactive users) can be set. Built-in analytics show the conversion rate of each launched promo.`,
                tj: `Воситаи пуриқтидор барои гузаронидани маъракаҳои таблиғотӣ. Маъмурон метавонанд промокодҳои тахфифӣ эҷод кунанд, баннерҳои динамикиро барои Экрани асосии барнома танзим кунанд ва фиристодани оммавии email/push-ро оғоз кунанд.

Барои ҳар як маърака, мӯҳлатҳои дақиқи амал, маҳдудиятҳои фаъолсозӣ ва аудиторияи мақсаднок (масалан, танҳо корбарони ғайрифаъол) метавонанд муқаррар карда шаванд. Таҳлили дарунсохт конверсияи ҳар як промои оғозшударо нишон медиҳад.`,
              },
            },
          {
            slug: "chanals",
              title: {
                ru: "Телеканалы",
                en: "TV Channels",
                tj: "Шабакаҳои телевизионӣ",
              },
              imageSrc: "/images/projects/mavjisomon/admin/chanals.png",
              BannerSrc: "/images/projects/mavjisomon/admin/chanals.png",
              shortInfo: {
                ru: "Управление потоками Live TV",
                en: "Live TV stream management",
                tj: "Идоракунии ҷараёнҳои Live TV",
              },
              fullInfo: {
                ru: `Основной раздел для управления сеткой вещания. Позволяет добавлять новые телеканалы, указывать URL-адреса HLS-потоков, загружать логотипы и назначать категории (Новостные, Спортивные, Детские).

Система поддерживает резервирование потоков (fallback URL) для обеспечения бесперебойного вещания. Здесь же настраивается привязка канала к телепрограмме (EPG) и активируется функция записи архива (Catch-up).`,
                en: `The main section for managing the broadcasting grid. It allows adding new TV channels, specifying HLS stream URLs, uploading logos, and assigning categories (News, Sports, Kids).

The system supports stream redundancy (fallback URL) to ensure uninterrupted broadcasting. Channel mapping to the TV guide (EPG) and activation of the archive recording function (Catch-up) are also configured here.`,
                tj: `Бахши асосӣ барои идоракунии шабакаи пахш. Илова кардани шабакаҳои нави телевизионӣ, нишон додани URL-адресҳои ҷараёнҳои HLS, боркунии логотипҳо ва таъин кардани категорияҳо (Ахбор, Варзиш, Кӯдакон)-ро имкон медиҳад.

Система захиракунии ҷараёнҳоро (fallback URL) барои таъмини пахши бефосила дастгирӣ мекунад. Пайвасти шабака ба барномаи телевизионӣ (EPG) ва фаъолсозии функсияи сабти бойгонӣ (Catch-up) низ дар ин ҷо танзим карда мешавад.`,
              },
            },
          {
            slug: "epg-provider",
              title: {
                ru: "EPG Провайдеры",
                en: "EPG Providers",
                tj: "Провайдерҳои EPG",
              },
              imageSrc: "/images/projects/mavjisomon/admin/epg-provider.png",
              BannerSrc: "/images/projects/mavjisomon/admin/epg-provider.png",
              shortInfo: {
                ru: "Интеграция телепрограмм (XMLTV)",
                en: "TV guide integration (XMLTV)",
                tj: "Ҳамгироии барномаҳои телевизионӣ (XMLTV)",
              },
              fullInfo: {
                ru: `Модуль настройки источников телепрограммы. Платформа поддерживает автоматический парсинг XMLTV-файлов от различных поставщиков метаданных. Администратор может добавить несколько ссылок на источники EPG и задать частоту их обновления (например, каждые 12 часов).

Умный алгоритм сопоставления помогает автоматически привязать программы передач к существующим телеканалам по ID или названию, минимизируя ручной труд контент-менеджеров.`,
                en: `The TV guide sources configuration module. The platform supports automatic parsing of XMLTV files from various metadata providers. An administrator can add multiple EPG source links and set their update frequency (e.g., every 12 hours).

A smart matching algorithm helps automatically link broadcast programs to existing TV channels by ID or name, minimizing the manual work of content managers.`,
                tj: `Модули танзими манбаъҳои барномаи телевизионӣ. Платформа парсинги автоматии файлҳои XMLTV-ро аз таъминкунандагони гуногуни метамаълумот дастгирӣ мекунад. Маъмур метавонад якчанд истинод ба манбаъҳои EPG илова кунад ва басомади навсозии онҳоро (масалан, ҳар 12 соат) муқаррар кунад.

Алгоритми интеллектуалии муқоисакунӣ барои ба таври худкор пайваст кардани барномаҳои пахш ба шабакаҳои телевизионии мавҷуда аз рӯи ID ё ном кӯмак мекунад ва кори дастии менеҷерҳои мундариҷаро кам мекунад.`,
              },
            },
          {
            slug: "radio",
              title: {
                ru: "Радиостанции",
                en: "Radio Stations",
                tj: "Истгоҳҳои радио",
              },
              imageSrc: "/images/projects/mavjisomon/admin/radio.png",
              BannerSrc: "/images/projects/mavjisomon/admin/radio.png",
              shortInfo: {
                ru: "Каталог аудио-потоков",
                en: "Audio stream catalog",
                tj: "Каталоги ҷараёнҳои аудио",
              },
              fullInfo: {
                ru: `Раздел для администрирования онлайн-радиостанций. Функционал аналогичен управлению телеканалами, но оптимизирован для аудио-стримов (Icecast/Shoutcast). Можно загружать обложки радиостанций, указывать жанры и битрейт потока.

Радио-модуль платформы потребляет минимум трафика, и через эту панель можно настраивать приоритет станций, чтобы самые популярные из них отображались на главном экране приложения.`,
                en: `A section for administrating online radio stations. The functionality is similar to TV channel management but optimized for audio streams (Icecast/Shoutcast). You can upload radio station covers, specify genres, and stream bitrates.

The platform's radio module consumes minimal traffic, and through this panel, you can prioritize stations so that the most popular ones appear on the application's main screen.`,
                tj: `Бахш барои маъмурияти истгоҳҳои радиои онлайн. Функсияҳо ба идоракунии шабакаҳои телевизионӣ монанданд, аммо барои ҷараёнҳои аудиоӣ (Icecast/Shoutcast) оптимизатсия шудаанд. Шумо метавонед муқоваҳои истгоҳҳои радиоро бор кунед, жанрҳо ва битрейти ҷараёнро нишон диҳед.

Модули радиои платформа ҳадди ақали трафикро сарф мекунад ва тавассути ин панел шумо метавонед афзалияти истгоҳҳоро танзим кунед, то маъмултаринҳо дар экрани асосии барнома пайдо шаванд.`,
              },
            },
          {
            slug: "video-content",
              title: {
                ru: "Библиотека фильмов (VOD)",
                en: "Movie Library (VOD)",
                tj: "Китобхонаи филмҳо (VOD)",
              },
              imageSrc: "/images/projects/mavjisomon/admin/video-content.png",
              BannerSrc: "/images/projects/mavjisomon/admin/video-content.png",
              shortInfo: {
                ru: "Управление каталогом видео",
                en: "Video catalog management",
                tj: "Идоракунии каталоги видео",
              },
              fullInfo: {
                ru: `Сердце контентного раздела платформы. Здесь осуществляется загрузка новых фильмов, сериалов и мультфильмов на сервер. Плеер поддерживает множественные звуковые дорожки и субтитры — их можно прикрепить к видеофайлу прямо через панель.

Каждому фильму присваивается подробное описание, рейтинг (IMDb/Кинопоиск), список актеров и режиссеров. Встроенный поиск и фильтры позволяют быстро находить нужный контент в базе из тысяч видео.`,
                en: `The heart of the platform's content section. Here, new movies, series, and cartoons are uploaded to the server. The player supports multiple audio tracks and subtitles—they can be attached to the video file directly through the panel.

Each movie is assigned a detailed description, rating (IMDb/Kinopoisk), and a list of actors and directors. Built-in search and filters allow you to quickly find the needed content in a database of thousands of videos.`,
                tj: `Қалби бахши мундариҷаи платформа. Дар ин ҷо филмҳо, сериалҳо ва мултфилмҳои нав ба сервер бор карда мешаванд. Плеер якчанд роҳҳои аудио ва субтитрҳоро дастгирӣ мекунад — онҳоро бевосита тавассути панел ба файли видео пайваст кардан мумкин аст.

Ба ҳар як филм тавсифи муфассал, рейтинг (IMDb/Kinopoisk), рӯйхати актёрҳо ва коргардонҳо дода мешавад. Ҷустуҷӯ ва филтрҳои дарунсохт ба шумо имкон медиҳанд, ки мундариҷаи лозимиро дар пойгоҳи маълумоти ҳазорҳо видео зуд пайдо кунед.`,
              },
            },
          {
            slug: "parental-control",
              title: {
                ru: "Родительский контроль",
                en: "Parental Control",
                tj: "Назорати волидайн",
              },
              imageSrc: "/images/projects/mavjisomon/admin/parental-control.png",
              BannerSrc: "/images/projects/mavjisomon/admin/parental-control.png",
              shortInfo: {
                ru: "Возрастные ограничения",
                en: "Age restrictions",
                tj: "Маҳдудиятҳои синну солӣ",
              },
              fullInfo: {
                ru: `Модуль обеспечения безопасности контента для детей. Администраторы могут задавать возрастные рейтинги (0+, 12+, 18+) для всего каталога фильмов и телеканалов.

Пользователи в своих приложениях могут установить PIN-код на профиль. Если профиль защищен, контент со взрослым рейтингом будет скрыт из поиска и рекомендаций, а при попытке прямого доступа система потребует ввод PIN-кода, настроенного в этой панели.`,
                en: `A module for ensuring content safety for children. Administrators can set age ratings (0+, 12+, 18+) for the entire catalog of movies and TV channels.

Users can set a PIN code for their profile in their apps. If a profile is protected, adult-rated content will be hidden from search and recommendations, and upon attempting direct access, the system will require entering the PIN code configured in this panel.`,
                tj: `Модул барои таъмини бехатарии мундариҷа барои кӯдакон. Маъмурон метавонанд рейтингҳои синну солиро (0+, 12+, 18+) барои тамоми каталоги филмҳо ва шабакаҳои телевизионӣ муқаррар кунанд.

Корбарон метавонанд дар барномаҳои худ ба профили худ рамзи PIN гузоранд. Агар профил ҳифз карда шавад, мундариҷаи дорои рейтинги калонсолон аз ҷустуҷӯ ва тавсияҳо пинҳон мешавад ва ҳангоми кӯшиши дастрасии мустақим система ворид кардани рамзи PIN-и дар ин панел танзимшударо талаб мекунад.`,
              },
            },
          {
            slug: "type-films",
              title: {
                ru: "Категории видео",
                en: "Video Categories",
                tj: "Категорияҳои видео",
              },
              imageSrc: "/images/projects/mavjisomon/admin/type-films.png",
              BannerSrc: "/images/projects/mavjisomon/admin/type-films.png",
              shortInfo: {
                ru: "Структура контента",
                en: "Content structure",
                tj: "Сохтори мундариҷа",
              },
              fullInfo: {
                ru: `Раздел для глобальной классификации видеобазы. Позволяет создавать и редактировать макро-категории: Фильмы, Сериалы, Аниме, Документальное кино, Таджикфильм и т.д.

Каждой категории можно присвоить иконку и определить ее место в главном меню приложений. Правильная иерархия категорий является основой для интуитивно понятного UI, позволяя зрителям легко ориентироваться в огромном массиве медиа.`,
                en: `A section for global classification of the video database. Allows creating and editing macro-categories: Movies, Series, Anime, Documentaries, Tajikfilm, etc.

Each category can be assigned an icon and its place in the main menu of the applications can be defined. A proper category hierarchy is the foundation for an intuitive UI, allowing viewers to easily navigate through a huge array of media.`,
                tj: `Бахш барои таснифи глобалии пойгоҳи видео. Барои эҷод ва таҳрири макро-категорияҳо имкон медиҳад: Филмҳо, Сериалҳо, Аниме, Кинои ҳуҷҷатӣ, Тоҷикфилм ва ғ.

Ба ҳар як категория метавонад нишона таъин карда шавад ва ҷои онро дар менюи асосии барномаҳо муайян кардан мумкин аст. Иерархияи дурусти категорияҳо асоси UI-и интуитивӣ мебошад, ки ба тамошобинон имкон медиҳад, ки дар массиви бузурги медиа ба осонӣ ҳаракат кунанд.`,
              },
            },
          {
            slug: "genre",
              title: {
                ru: "Жанры контента",
                en: "Content Genres",
                tj: "Жанрҳои мундариҷа",
              },
              imageSrc: "/images/projects/mavjisomon/admin/genre.png",
              BannerSrc: "/images/projects/mavjisomon/admin/genre.png",
              shortInfo: {
                ru: "Тегирование фильмов и сериалов",
                en: "Tagging movies and series",
                tj: "Теггузории филмҳо ва сериалҳо",
              },
              fullInfo: {
                ru: `Инструмент для глубокого тегирования контента. В этой вкладке создается база жанров (Боевики, Комедии, Драма, Фантастика), которые затем прикрепляются к конкретным фильмам.

Наличие детальной жанровой разметки критически важно для работы модуля поиска и системы рекомендаций «Похожие фильмы». Администраторы могут объединять жанры в подборки для создания тематических коллекций на Главном экране (например, «Ужасы на Хэллоуин»).`,
                en: `A tool for deep content tagging. In this tab, a database of genres (Action, Comedy, Drama, Sci-Fi) is created, which are then attached to specific movies.

Having detailed genre markup is critically important for the operation of the search module and the 'Similar Movies' recommendation system. Administrators can combine genres into selections to create thematic collections on the Main Screen (e.g., 'Halloween Horror').`,
                tj: `Восита барои теггузории амиқи мундариҷа. Дар ин ҷадвал пойгоҳи жанрҳо (Ҷангӣ, Комедия, Драма, Фантастика) эҷод карда мешавад, ки баъдан ба филмҳои мушаххас пайваст карда мешаванд.

Доштани аломатгузории муфассали жанрӣ барои кори модули ҷустуҷӯ ва системаи тавсияҳои «Филмҳои монанд» хеле муҳим аст. Маъмурон метавонанд жанрҳоро ба интихобҳо муттаҳид кунанд, то коллексияҳои мавзӯиро дар Экрани асосӣ эҷод кунанд (масалан, «Даҳшат дар Ҳеллоуин»).`,
              },
            },
          {
            slug: "actors",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/actors.png",
            BannerSrc: "/images/projects/mavjisomon/admin/actors.png",
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
          {
            slug: "most-interesting",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/most-interesting.png",
            BannerSrc: "/images/projects/mavjisomon/admin/most-interesting.png",
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
          {
            slug: "directory",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/directory.png",
            BannerSrc: "/images/projects/mavjisomon/admin/directory.png",
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
          {
            slug: "clients",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/clients.png",
            BannerSrc: "/images/projects/mavjisomon/admin/clients.png",
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
          {
            slug: "subscription",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/subscription.png",
            BannerSrc: "/images/projects/mavjisomon/admin/subscription.png",
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
          {
            slug: "statistic-video-content",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc:
              "/images/projects/mavjisomon/admin/statistic-video-content.png",
            BannerSrc:
              "/images/projects/mavjisomon/admin/statistic-video-content.png",
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
          {
            slug: "statistic-chanals",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/statistic-chanals.png",
            BannerSrc:
              "/images/projects/mavjisomon/admin/statistic-chanals.png",
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
          {
            slug: "statistic-radio",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/statistic-radio.png",
            BannerSrc: "/images/projects/mavjisomon/admin/statistic-radio.png",
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
          {
            slug: "setting",
            title: {
              ru: "Управление Live TV",
              en: "Live TV Management",
              tj: "Идоракунии Live TV",
            },
            imageSrc: "/images/projects/mavjisomon/admin/setting.png",
            BannerSrc: "/images/projects/mavjisomon/admin/setting.png",
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
        platform: "mobile",
        items: [
          {
            slug: "home-page",
            title: {
              ru: "Главный экран и Навигация",
              en: "Main Screen and Navigation",
              tj: "Экрани асосӣ ва Навигатсия",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/home-page.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/home-page.jpg",
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
            slug: "list-films",
            title: {
              ru: "Каталог фильмов",
              en: "Movie Catalog",
              tj: "Каталоги филмҳо",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/list-films.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/list-films.jpg",
            shortInfo: {
              ru: "Отображение списков фильмов с пагинацией",
              en: "Movie list display with pagination",
              tj: "Намоиши рӯйхати филмҳо бо саҳифабандӣ",
            },
            fullInfo: {
              ru: `Экран каталога предоставляет пользователям доступ к обширной библиотеке фильмов. Реализован бесконечный скроллинг (Infinite Scroll) с помощью FlatList навигации React Native, что гарантирует плавную загрузку обложек и метаданных даже на медленном интернет-соединении. Дизайн адаптирован для удобного просмотра на мобильных экранах с сеткой в несколько столбцов.`,
              en: `The catalog screen provides users with access to an extensive movie library. Infinite scrolling is implemented using React Native's FlatList, ensuring smooth loading of covers and metadata even on slow internet connections. The design is adapted for comfortable viewing on mobile screens with a multi-column grid layout.`,
              tj: `Экрани каталог ба корбарон дастрасиро ба китобхонаи васеи филмҳо фароҳам меорад. Ҳаракати беохир (Infinite Scroll) бо истифода аз паймоиши FlatList-и React Native амалӣ карда шудааст, ки боркунии ҳамвори муқоваҳо ва метамаълумотро ҳатто дар пайвастҳои сусти интернет кафолат медиҳад. Тарҳ барои тамошои бароҳат дар экранҳои мобилӣ бо шабакаи бисёрсутуна мутобиқ карда шудааст.`,
            },
          },
          {
            slug: "list-chanals",
            title: {
              ru: "Каталог телеканалов",
              en: "TV Channels Catalog",
              tj: "Каталоги шабакаҳои телевизионӣ",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/list-chanals.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/list-chanals.jpg",
            shortInfo: {
              ru: "Список телеканалов с программой передач",
              en: "List of TV channels with EPG",
              tj: "Рӯйхати шабакаҳои телевизионӣ бо барномаи гуфторҳо",
            },
            fullInfo: {
              ru: `Каталог телеканалов позволяет быстро переключаться между прямыми трансляциями. В списке отображается логотип телеканала и текущая программа передач (EPG). Интерфейс оптимизирован для минимальной задержки при загрузке расписания, а состояние воспроизведения синхронизировано через глобальное хранилище.`,
              en: `The TV channel catalog allows for quick switching between live broadcasts. The list displays the channel logo and the current electronic program guide (EPG). The interface is optimized for minimal latency when loading schedules, and the playback state is synchronized via the global store.`,
              tj: `Каталоги шабакаҳои телевизионӣ имкон медиҳад, ки зуд байни пахшҳои мустақим гузаред. Дар рӯйхат логотипи шабака ва барномаи телевизионии ҷорӣ (EPG) нишон дода мешавад. Интерфейс барои таъхири ҳадди аққал ҳангоми боркунии ҷадвал беҳтар карда шудааст ва ҳолати бозикунӣ тавассути анбори глобалӣ ҳамоҳанг карда мешавад.`,
            },
          },
          {
            slug: "list-radio",
            title: {
              ru: "Радиостанции",
              en: "Radio Stations",
              tj: "Истгоҳҳои радио",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/list-radio.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/list-radio.jpg",
            shortInfo: {
              ru: "Прослушивание локальных радиостанций",
              en: "Listening to local radio stations",
              tj: "Гӯш кардани истгоҳҳои радиои маҳаллӣ",
            },
            fullInfo: {
              ru: `Раздел Радио предлагает доступ к популярным национальным радиостанциям. Аудио воспроизводится в фоновом режиме с поддержкой нативных элементов управления на экране блокировки устройства. Реализована быстрая подгрузка аудиопотоков с отображением текущей станции.`,
              en: `The Radio section offers access to popular national radio stations. Audio plays in the background with support for native lock screen controls on the device. Quick loading of audio streams is implemented with the display of the current station.`,
              tj: `Бахши Радио дастрасиро ба истгоҳҳои миллии маъмул пешниҳод мекунад. Аудио дар реҷаи заминавӣ бо дастгирии идоракунии маҳаллӣ дар экрани қулфи дастгоҳ навохта мешавад. Боркунии зуди ҷараёнҳои аудиоӣ бо намоиши истгоҳи ҷорӣ амалӣ карда шудааст.`,
            },
          },
          {
            slug: "player-film",
            title: {
              ru: "Плеер фильмов",
              en: "Movie Player",
              tj: "Плеери филмҳо",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/player-film.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/player-film.jpg",
            shortInfo: {
              ru: "Видеоплеер для просмотра кино",
              en: "Video player for watching movies",
              tj: "Плеери видеоӣ барои тамошои кино",
            },
            fullInfo: {
              ru: `Нативный видеоплеер для просмотра фильмов и сериалов. Поддерживает выбор качества видео, перемотку, субтитры и переключение аудиодорожек. Пользовательский интерфейс проигрывателя создан с использованием кастомных контролов поверх видео, что обеспечивает единый пользовательский опыт.`,
              en: `A native video player for watching movies and TV series. It supports video quality selection, rewinding, subtitles, and audio track switching. The player's UI is built with custom controls overlaid on the video, ensuring a consistent user experience.`,
              tj: `Плеери видеоии маҳаллӣ барои тамошои филмҳо ва сериалҳо. Он интихоби сифати видео, баргардонидан, субтитрҳо ва ивазкунии роҳчаҳои аудиоиро дастгирӣ мекунад. Интерфейси корбарии плеер бо идоракунии махсус дар болои видео сохта шудааст, ки таҷрибаи ягонаи корбариро таъмин мекунад.`,
            },
          },
          {
            slug: "player-chanal",
            title: {
              ru: "ТВ плеер",
              en: "Live TV Player",
              tj: "Плеери ТВ",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/player-chanal.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/player-chanal.jpg",
            shortInfo: {
              ru: "Плеер для прямых эфиров",
              en: "Player for live broadcasts",
              tj: "Плеер барои пахшҳои мустақим",
            },
            fullInfo: {
              ru: `Специализированный плеер для трансляции телеканалов. Включает отображение текущей передачи из EPG, возможность переключения качества трансляции (HLS) и поддержку полноэкранного режима. Интерфейс плеера позволяет быстро переключаться на соседние телеканалы.`,
              en: `A specialized player for broadcasting TV channels. It includes the display of the current program from the EPG, the ability to switch broadcast quality (HLS), and fullscreen mode support. The player interface allows for quick switching to neighboring TV channels.`,
              tj: `Плеери махсусгардонидашуда барои пахши шабакаҳои телевизионӣ. Он намоиши барномаи ҷориро аз EPG, имконияти иваз кардани сифати пахш (HLS) ва дастгирии реҷаи пурраэкраниро дар бар мегирад. Интерфейси плеер имкон медиҳад, ки зуд ба шабакаҳои телевизионии ҳамсоя гузаред.`,
            },
          },
          {
            slug: "filter-modal-for-films",
            title: {
              ru: "Фильтрация фильмов",
              en: "Movie Filtering",
              tj: "Филтркунии филмҳо",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/filter-modal-for-films.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/filter-modal-for-films.jpg",
            shortInfo: {
              ru: "Умные фильтры для поиска контента",
              en: "Smart filters for content search",
              tj: "Филтрҳои ҳушманд барои ҷустуҷӯи мундариҷа",
            },
            fullInfo: {
              ru: `Модальное окно фильтрации позволяет пользователям сортировать фильмы и сериалы по жанрам, году выпуска, стране производства и рейтингу. Реализован удобный интерфейс с мгновенным применением параметров фильтрации и подсчетом количества доступных результатов.`,
              en: `The filtering modal window allows users to sort movies and series by genre, release year, country of origin, and rating. It features a user-friendly interface with instant application of filter parameters and a calculation of the number of available results.`,
              tj: `Равзанаи модалии филтркунӣ ба корбарон имкон медиҳад, ки филмҳо ва сериалҳоро аз рӯи жанр, соли барориш, кишвари истеҳсолкунанда ва рейтинг ҷудо кунанд. Интерфейси қулай бо татбиқи фаврии параметрҳои филтр ва ҳисоб кардани миқдори натиҷаҳои дастрас амалӣ карда шудааст.`,
            },
          },
          {
            slug: "favorites-page",
            title: {
              ru: "Избранное",
              en: "Favorites",
              tj: "Баргузидаҳо",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/favorites-page.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/favorites-page.jpg",
            shortInfo: {
              ru: "Сохраненный контент пользователя",
              en: "User's saved content",
              tj: "Мундариҷаи захирашудаи корбар",
            },
            fullInfo: {
              ru: `Раздел 'Избранное' содержит все сохраненные фильмы, сериалы и телеканалы пользователя. Данные синхронизируются с сервером, что позволяет иметь доступ к любимому контенту с любого устройства. Вкладка обеспечивает быстрый переход к просмотру.`,
              en: `The 'Favorites' section contains all of the user's saved movies, series, and TV channels. The data is synchronized with the server, allowing access to favorite content from any device. The tab provides a quick jump back to watching.`,
              tj: `Бахши 'Баргузидаҳо' ҳамаи филмҳо, сериалҳо ва шабакаҳои телевизионии захирашудаи корбарро дар бар мегирад. Маълумот бо сервер ҳамоҳанг карда мешавад, ки имкон медиҳад дастрасӣ ба мундариҷаи дӯстдошта аз ҳама гуна дастгоҳ таъмин карда шавад. Зербахш гузариши зудро барои тамошо фароҳам меорад.`,
            },
          },
          {
            slug: "list-tarifs",
            title: {
              ru: "Тарифные планы",
              en: "Subscription Plans",
              tj: "Нақшаҳои тарифӣ",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/list-tarifs.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/list-tarifs.jpg",
            shortInfo: {
              ru: "Управление подписками",
              en: "Subscription management",
              tj: "Идоракунии обунаҳо",
            },
            fullInfo: {
              ru: `Экран отображает доступные тарифные планы для доступа к премиум-контенту. Пользователь может ознакомиться с условиями тарифа, периодом действия и стоимостью. Интегрирована система оплаты через популярные мобильные платежные шлюзы.`,
              en: `The screen displays available subscription plans for accessing premium content. Users can view tariff conditions, validity periods, and prices. A payment system integrated via popular mobile payment gateways is provided.`,
              tj: `Экран нақшаҳои тарифии дастрасро барои дастрасӣ ба мундариҷаи премиум нишон медиҳад. Корбар метавонад бо шартҳои тариф, давраи эътибор ва арзиши он шинос шавад. Системаи пардохт тавассути шлюзҳои маъмули пардохтҳои мобилӣ муттаҳид карда шудааст.`,
            },
          },
          {
            slug: "profile-user",
            title: {
              ru: "Профиль пользователя",
              en: "User Profile",
              tj: "Профили корбар",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/profile-user.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/profile-user.jpg",
            shortInfo: {
              ru: "Личный кабинет",
              en: "Personal account",
              tj: "Кабинети шахсӣ",
            },
            fullInfo: {
              ru: `В профиле пользователя собрана вся персональная информация, текущий баланс и история транзакций. Интерфейс позволяет редактировать личные данные, управлять подключенными устройствами и обращаться в службу поддержки.`,
              en: `The user profile gathers all personal information, current balance, and transaction history. The interface allows users to edit personal data, manage connected devices, and contact customer support.`,
              tj: `Дар профили корбар тамоми маълумоти шахсӣ, тавозуни ҷорӣ ва таърихи муомилот ҷамъоварӣ шудаанд. Интерфейс имкон медиҳад, ки маълумоти шахсӣ таҳрир карда шавад, дастгоҳҳои пайвастшуда идора карда шаванд ва ба хадамоти дастгирӣ муроҷиат карда шавад.`,
            },
          },
          {
            slug: "security-settings",
            title: {
              ru: "Настройки безопасности",
              en: "Security Settings",
              tj: "Танзимоти амният",
            },
            imageSrc: "/images/projects/mavjisomon/mobile/security-settings.jpg",
            BannerSrc: "/images/projects/mavjisomon/mobile/security-settings.jpg",
            shortInfo: {
              ru: "Родительский контроль и пароли",
              en: "Parental control and passwords",
              tj: "Назорати волидайн ва паролҳо",
            },
            fullInfo: {
              ru: `Раздел настроек безопасности предоставляет функции изменения пароля, настройки PIN-кода для родительского контроля и просмотра активных сессий. Это обеспечивает защиту аккаунта от несанкционированного доступа и контроль за контентом, доступным детям.`,
              en: `The security settings section provides features for changing passwords, setting up a PIN code for parental control, and viewing active sessions. This ensures account protection against unauthorized access and control over content available to children.`,
              tj: `Бахши танзимоти амният вазифаҳои тағир додани парол, танзими PIN-код барои назорати волидайн ва дидани сессияҳои фаъолро пешниҳод мекунад. Ин ҳифзи ҳисобро аз дастрасии беиҷозат ва назорати мундариҷаи барои кӯдакон дастрасро таъмин мекунад.`,
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
//           {
//             slug: "tv-interface-navigation",
//             title: {
//               ru: "TV Интерфейс и Навигация",
//               en: "TV Interface and Navigation",
//               tj: "Интерфейси TV ва Навигатсия",
//             },
//             imageSrc: "/images/projects/mavjisomon/gallery-5.png",
//             BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
//             shortInfo: {
//               ru: "D-Pad фокус и MainScreen.tsx",
//               en: "D-Pad focus and MainScreen.tsx",
//               tj: "Фокуси D-Pad ва MainScreen.tsx",
//             },
//             fullInfo: {
//               ru: `Проект для смарт-телевизоров и приставок написан на специализированной версии React Native TV (react-native-tvos) с использованием строгой типизации TypeScript. Главным отличием от мобильной версии является полная ориентация на управление с пульта дистанционного управления (D-Pad).

// Вся навигация, включая переход между боковым меню и основным контентом, построена на обработке событий onFocus и onBlur. Каждая карточка фильма (MediaCard.tsx) плавно увеличивается при наведении фокуса, используя нативные анимации для создания эффекта глубины и отзывчивости. Поддерживается сборка как под классический Android TV, так и под телевизоры на базе Tizen (через Webpack-сборку rnv).`,
//               en: `The project for smart TVs and set-top boxes is written in a specialized version of React Native TV (react-native-tvos) using strict TypeScript typing. The main difference from the mobile version is the full orientation towards control via remote control (D-Pad).

// All navigation, including transitions between the side menu and main content, is built on handling onFocus and onBlur events. Each movie card (MediaCard.tsx) smoothly enlarges on focus, using native animations to create a sense of depth and responsiveness. Builds are supported for both classic Android TV and Tizen-based TVs (via Webpack rnv build).`,
//               tj: `Лоиҳа барои телевизорҳои интеллектуалӣ ва приставкаҳо дар версияи махсусгардонидашудаи React Native TV (react-native-tvos) бо истифода аз чопкунии қатъии TypeScript навишта шудааст. Фарқи асосӣ аз версияи мобилӣ тамоюли пурра ба идоракунӣ тавассути пульти фосилавӣ (D-Pad) мебошад.

// Тамоми навигатсия, аз ҷумла гузариш байни менюи паҳлӯ ва мундариҷаи асосӣ, дар коркарди рӯйдодҳои onFocus ва onBlur сохта шудааст. Ҳар як корти филм (MediaCard.tsx) ҳангоми фокус бо истифода аз аниматсияҳои нативӣ барои эҷоди эффекти умқ ва ҷавобгӯӣ ба таври ҳамвор калон мешавад. Ҷамъоварӣ ҳам барои Android TV классикӣ ва ҳам телевизорҳои дар асоси Tizen (тавассути ҷамъоварии Webpack rnv) дастгирӣ карда мешавад.`,
//             },
//           },
//           {
//             slug: "catalog-details",
//             title: {
//               ru: "Каталог и Детали",
//               en: "Catalog and Details",
//               tj: "Каталог ва Тафсилот",
//             },
//             imageSrc: "/images/projects/mavjisomon/gallery-6.png",
//             BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
//             shortInfo: {
//               ru: "VideosScreen & DetailsScreen",
//               en: "VideosScreen & DetailsScreen",
//               tj: "VideosScreen & DetailsScreen",
//             },
//             fullInfo: {
//               ru: `В TV-приложении реализована глубокая категоризация контента на несколько разделов: Live-каналы (TvChannelsScreen.tsx), каталоги фильмов и сериалов (VideosScreen.tsx). Для оптимизации рендеринга больших списков на слабых ТВ-приставках применяются техники виртуализации списков и ленивой загрузки (lazy loading) изображений.

// Страница деталей фильма (DetailsScreen.tsx) представляет собой полноценный кинотеатральный хаб: она подгружает высококачественные фоновые постеры, выводит подробные метаданные (рейтинг, жанр, описание) и включает список рекомендаций. Пользователь может добавить фильм в «Избранное» (FavoritesScreen.tsx) для быстрого доступа с любого устройства.`,
//               en: `The TV app implements deep categorization of content into several sections: Live channels (TvChannelsScreen.tsx), movie catalogs, and series (VideosScreen.tsx). To optimize the rendering of large lists on weak set-top boxes, list virtualization and image lazy loading techniques are used.

// The movie details page (DetailsScreen.tsx) is a full-fledged cinematic hub: it loads high-quality background posters, displays detailed metadata (rating, genre, description), and includes a list of recommendations. The user can add a movie to "Favorites" (FavoritesScreen.tsx) for quick access from any device.`,
//               tj: `Барномаи телевизионӣ гурӯҳбандии амиқи мундариҷаро ба якчанд бахшҳо амалӣ мекунад: Шабакаҳои Live (TvChannelsScreen.tsx), каталогҳои филмҳо ва сериалҳо (VideosScreen.tsx). Барои беҳтар кардани визуализатсияи рӯйхатҳои калон дар приставкаҳои заифи телевизионӣ, усулҳои виртуализатсияи рӯйхат ва боркунии танбал (lazy loading) тасвирҳо истифода мешаванд.

// Саҳифаи тафсилоти филм (DetailsScreen.tsx) маркази мукаммали кинотеатр мебошад: он постерҳои баландсифати заминаро бор мекунад, метамаълумоти муфассалро (рейтинг, жанр, тавсиф) намоиш медиҳад ва рӯйхати тавсияҳоро дар бар мегирад. Корбар метавонад филмро ба «Дӯстдошта» (FavoritesScreen.tsx) барои дастрасии зуд аз ҳама гуна дастгоҳ илова кунад.`,
//             },
//           },
//           {
//             slug: "payment-player",
//             title: {
//               ru: "Оплата и Плеер",
//               en: "Payment and Player",
//               tj: "Пардохт ва Плеер",
//             },
//             imageSrc: "/images/projects/mavjisomon/gallery-5.png",
//             BannerSrc: "/images/projects/mavjisomon/web-hero1.png",
//             shortInfo: {
//               ru: "PlayerScreen & PaymentGuide",
//               en: "PlayerScreen & PaymentGuide",
//               tj: "PlayerScreen & PaymentGuide",
//             },
//             fullInfo: {
//               ru: `Для воспроизведения Live TV и VOD-контента на телевизорах используется специально адаптированный нативный ТВ-плеер (PlayerScreen.tsx). Он обеспечивает стабильную расшифровку потока без буферизации, поддержку аппаратного декодирования и обработку кнопок пульта (плей/пауза/перемотка).

// Важным бизнес-модулем является встроенная система биллинга (PaymentGuide.tsx и ProductsScreen.tsx). Пользователям больше не нужно заходить на сайт с компьютера — они могут просматривать доступные тарифы, изучать инструкции по пополнению баланса через локальные терминалы и управлять своей подпиской прямо на большом экране, используя только пульт ДУ.`,
//               en: `A specially adapted native TV player (PlayerScreen.tsx) is used to play Live TV and VOD content on TVs. It ensures stable stream decoding without buffering, hardware decoding support, and remote control button handling (play/pause/rewind).

// An important business module is the built-in billing system (PaymentGuide.tsx and ProductsScreen.tsx). Users no longer need to visit the site from a computer — they can view available tariffs, study instructions for topping up their balance via local terminals, and manage their subscription right on the big screen, using only the remote control.`,
//               tj: `Плеери махсус мутобиқшудаи телевизионии нативӣ (PlayerScreen.tsx) барои намоиши мундариҷаи Live TV ва VOD дар телевизорҳо истифода мешавад. Он рамзкушоии устувори ҷараёнро бидуни буферизатсия, дастгирии рамзкушоии сахтафзор ва коркарди тугмаҳои пульт (навозиш/таваққуф/қафо) таъмин мекунад.

// Модули муҳими тиҷоратӣ системаи дарунсохти биллинг мебошад (PaymentGuide.tsx ва ProductsScreen.tsx). Истифодабарандагон дигар лозим нест, ки аз компютер ба сайт ворид шаванд - онҳо метавонанд тарифҳои дастрасро бинанд, дастурҳоро оид ба пур кардани тавозун тавассути терминалҳои маҳаллӣ омӯзанд ва обунаи худро бевосита дар экрани калон танҳо бо истифода аз пульти фосилавӣ идора кунанд.`,
//             },
//           },
          {
            slug: "tv-loading",
            title: {
              ru: "Экран загрузки",
              en: "Loading Screen",
              tj: "Экрани боркунӣ",
            },
            imageSrc: "/images/projects/mavjisomon/tv/loading.jpg",
            BannerSrc: "/images/projects/mavjisomon/tv/loading.jpg",
            shortInfo: {
              ru: "Сплеш-скрин и инициализация приложения",
              en: "Splash screen and app initialization",
              tj: "Экрани ибтидоӣ ва оғози барнома",
            },
            fullInfo: {
              ru: `При запуске TV-приложения пользователи видят фирменный сплеш-скрин. На этом этапе происходит базовая инициализация: проверка авторизации, подгрузка начальных метаданных и конфигурации серверов. Экран загрузки помогает скрасить время ожидания, обеспечивая плавный переход к главному интерфейсу.`,
              en: `Upon launching the TV app, users are greeted with a branded splash screen. During this phase, basic initialization occurs: authorization checks, loading of initial metadata, and server configuration. The loading screen helps pass the waiting time, ensuring a smooth transition to the main interface.`,
              tj: `Ҳангоми оғози барномаи телевизионӣ, корбарон экрани ибтидоии брендиро мебинанд. Дар ин марҳила, оғози асосӣ рух медиҳад: санҷиши авторизтсия, боркунии метамаълумоти ибтидоӣ ва конфигуратсияи сервер. Экрани боркунӣ барои гузаронидани вақти интизорӣ кӯмак мекунад ва гузариши ҳамворро ба интерфейси асосӣ таъмин мекунад.`,
            },
          },
          {
            slug: "tv-navbar",
            title: {
              ru: "Боковая навигация",
              en: "Sidebar Navigation",
              tj: "Навигатсияи паҳлӯӣ",
            },
            imageSrc: "/images/projects/mavjisomon/tv/navbar.jpg",
            BannerSrc: "/images/projects/mavjisomon/tv/navbar.jpg",
            shortInfo: {
              ru: "Меню для смарт-телевизоров",
              en: "Menu for smart TVs",
              tj: "Меню барои телевизорҳои ҳушманд",
            },
            fullInfo: {
              ru: `Боковая навигационная панель оптимизирована для использования пульта дистанционного управления (D-Pad). Она плавно выезжает при наведении фокуса на левую часть экрана и содержит основные разделы: Поиск, Фильмы, ТВ каналы, Радио, Избранное и Настройки. Элементы меню имеют четкие визуальные состояния для облегчения навигации.`,
              en: `The side navigation panel is optimized for remote control (D-Pad) usage. It smoothly slides out when focus is brought to the left side of the screen and contains the main sections: Search, Movies, TV Channels, Radio, Favorites, and Settings. Menu items feature clear visual states to facilitate navigation.`,
              tj: `Панели навигатсияи паҳлӯӣ барои истифода бо пульти фосилавӣ (D-Pad) беҳтар карда шудааст. Он ҳангоми равона кардани фокус ба тарафи чапи экран ба таври ҳамвор берун мешавад ва бахшҳои асосиро дар бар мегирад: Ҷустуҷӯ, Филмҳо, Шабакаҳои ТВ, Радио, Баргузидаҳо ва Танзимот. Унсурҳои меню дорои ҳолатҳои визуалии равшан барои осон кардани навигатсия мебошанд.`,
            },
          },
          {
            slug: "tv-film-page",
            title: {
              ru: "Карточка фильма",
              en: "Movie Card",
              tj: "Корти филм",
            },
            imageSrc: "/images/projects/mavjisomon/tv/film-page.jpg",
            BannerSrc: "/images/projects/mavjisomon/tv/film-page.jpg",
            shortInfo: {
              ru: "Детальная информация о кино",
              en: "Detailed movie information",
              tj: "Маълумоти муфассал дар бораи кино",
            },
            fullInfo: {
              ru: `Страница фильма на Smart TV разработана так, чтобы максимально использовать площадь большого экрана. На заднем фоне отображается высококачественный постер, а поверх него выводится ключевая информация: название, жанр, описание и рейтинг. Пользователь может начать просмотр, добавить фильм в избранное или посмотреть трейлер.`,
              en: `The movie page on Smart TV is designed to maximize the use of a large screen. A high-quality poster is displayed in the background, with key information overlaid: title, genre, description, and rating. The user can start watching, add the movie to favorites, or watch the trailer.`,
              tj: `Саҳифаи филм дар Smart TV тавре тарҳрезӣ шудааст, ки масоҳати экрани калонро ҳадди аксар истифода барад. Дар замина постери баландсифат намоиш дода мешавад ва дар болои он маълумоти калидӣ ҷойгир аст: ном, жанр, тавсиф ва рейтинг. Корбар метавонад тамошоро оғоз кунад, филмро ба баргузидаҳо илова кунад ё трейлерро бинад.`,
            },
          },
          {
            slug: "tv-live-page",
            title: {
              ru: "Прямой эфир (Live TV)",
              en: "Live TV",
              tj: "Пахши мустақим (Live TV)",
            },
            imageSrc: "/images/projects/mavjisomon/tv/tv-page.jpg",
            BannerSrc: "/images/projects/mavjisomon/tv/tv-page.jpg",
            shortInfo: {
              ru: "Просмотр телеканалов на ТВ",
              en: "Watching TV channels",
              tj: "Тамошои шабакаҳои телевизионӣ",
            },
            fullInfo: {
              ru: `Интерфейс просмотра прямых трансляций адаптирован для телевизоров. Во время просмотра можно легко вызвать меню телеканалов, чтобы переключиться на другую станцию, не прерывая эфир. Плеер поддерживает аппаратное ускорение и быструю обработку потоков для предотвращения задержек (буферизации).`,
              en: `The live broadcast viewing interface is tailored for TVs. While watching, users can easily bring up the TV channels menu to switch to another station without interrupting the current broadcast. The player supports hardware acceleration and fast stream processing to prevent buffering.`,
              tj: `Интерфейси тамошои пахшҳои мустақим барои телевизорҳо мутобиқ карда шудааст. Ҳангоми тамошо, корбарон метавонанд ба осонӣ менюи шабакаҳои телевизиониро даъват кунанд, то ба истгоҳи дигар бидуни қатъи пахши ҷорӣ гузаранд. Плеер суръатбахшии сахтафзор ва коркарди зуди ҷараёнҳоро барои пешгирии буферизатсия дастгирӣ мекунад.`,
            },
          },
          {
            slug: "tv-radio-page",
            title: {
              ru: "Радио",
              en: "Radio",
              tj: "Радио",
            },
            imageSrc: "/images/projects/mavjisomon/tv/radio-page.jpg",
            BannerSrc: "/images/projects/mavjisomon/tv/radio-page.jpg",
            shortInfo: {
              ru: "Слушайте радио на Smart TV",
              en: "Listen to radio on Smart TV",
              tj: "Радиоро дар Smart TV гӯш кунед",
            },
            fullInfo: {
              ru: `Удобный интерфейс для прослушивания радиостанций на телевизоре. На экране отображается красивый визуализатор звука или логотип станции, пока аудио воспроизводится. Меню позволяет легко перемещаться по списку радиостанций с помощью пульта дистанционного управления.`,
              en: `A user-friendly interface for listening to radio stations on the TV. The screen displays a beautiful audio visualizer or the station's logo while the audio plays. The menu makes it easy to navigate through the list of radio stations using the remote control.`,
              tj: `Интерфейси қулай барои гӯш кардани истгоҳҳои радио дар телевизор. Дар экран визуализатори зебои садо ё логотипи истгоҳ ҳангоми навохтани аудио намоиш дода мешавад. Меню имкон медиҳад, ки тавассути пульти фосилавӣ дар рӯйхати истгоҳҳои радио ба осонӣ паймоиш кунед.`,
            },
          },
          {
            slug: "tv-home-page",
            title: {
              ru: "Главная страница",
              en: "Home Page",
              tj: "Саҳифаи асосӣ",
            },
            imageSrc: "/images/projects/mavjisomon/tv/home-page.png",
            BannerSrc: "/images/projects/mavjisomon/tv/home-page.png",
            shortInfo: {
              ru: "Витрина контента",
              en: "Content showcase",
              tj: "Намоишгоҳи мундариҷа",
            },
            fullInfo: {
              ru: `Главная страница приложения для Smart TV предлагает пользователям удобный доступ к самому актуальному контенту. Здесь собраны рекомендации, новинки кино, популярные телеканалы и продолжение просмотра. Интерфейс адаптирован для навигации с пульта.`,
              en: `The main page of the Smart TV application offers users convenient access to the most relevant content. Here you can find recommendations, new movies, popular TV channels, and continue watching. The interface is adapted for remote control navigation.`,
              tj: `Саҳифаи асосии барнома барои Smart TV ба корбарон дастрасии қулай ба мундариҷаи муҳимтаринро пешниҳод мекунад. Дар ин ҷо тавсияҳо, филмҳои нав, шабакаҳои телевизионии маъмул ва идомаи тамошо ҷамъ оварда шудаанд. Интерфейс барои навигатсия бо пульт мутобиқ карда шудааст.`,
            },
          },
          {
            slug: "tv-favorites",
            title: {
              ru: "Избранное",
              en: "Favorites",
              tj: "Баргузидаҳо",
            },
            imageSrc: "/images/projects/mavjisomon/tv/fovarits.png",
            BannerSrc: "/images/projects/mavjisomon/tv/fovarits.png",
            shortInfo: {
              ru: "Сохраненный контент",
              en: "Saved content",
              tj: "Мундариҷаи захирашуда",
            },
            fullInfo: {
              ru: `Раздел «Избранное» позволяет пользователям быстро находить сохраненные телеканалы, любимые фильмы и сериалы. Контент легко добавляется и удаляется в один клик. Это делает использование приложения персонализированным и комфортным для каждого.`,
              en: `The "Favorites" section allows users to quickly find saved TV channels, favorite movies, and series. Content is easily added and removed with one click. This makes using the application personalized and comfortable for everyone.`,
              tj: `Бахши "Баргузидаҳо" ба корбарон имкон медиҳад, ки шабакаҳои телевизионии захирашуда, филмҳо ва сериалҳои дӯстдоштаи худро зуд пайдо кунанд. Мундариҷа ба осонӣ бо як клик илова ва нест карда мешавад. Ин истифодаи барномаро барои ҳар як шахс фардӣ ва бароҳат месозад.`,
            },
          },
          {
            slug: "tv-list-tarifs",
            title: {
              ru: "Тарифы",
              en: "Tariffs",
              tj: "Тарифҳо",
            },
            imageSrc: "/images/projects/mavjisomon/tv/list-tarifs.png",
            BannerSrc: "/images/projects/mavjisomon/tv/list-tarifs.png",
            shortInfo: {
              ru: "Управление подписками",
              en: "Subscription management",
              tj: "Идоракунии обунаҳо",
            },
            fullInfo: {
              ru: `В разделе «Тарифы» пользователи могут ознакомиться с доступными вариантами подписок, их стоимостью и условиями. Здесь же можно активировать нужный пакет услуг прямо с экрана телевизора, без необходимости использовать телефон или компьютер.`,
              en: `In the "Tariffs" section, users can review available subscription options, their costs, and conditions. Here you can also activate the necessary service package right from the TV screen, without needing to use a phone or computer.`,
              tj: `Дар бахши "Тарифҳо" корбарон метавонанд бо имконоти дастраси обуна, арзиш ва шартҳои онҳо шинос шаванд. Дар ҳамин ҷо шумо инчунин метавонед бастаи хидматрасонии лозимиро бевосита аз экрани телевизор, бе зарурати истифодаи телефон ё компютер фаъол кунед.`,
            },
          },
          {
            slug: "tv-multilingualism",
            title: {
              ru: "Мультиязычность",
              en: "Multilingualism",
              tj: "Бисёрзабонӣ",
            },
            imageSrc: "/images/projects/mavjisomon/tv/multilingualism1.png",
            BannerSrc: "/images/projects/mavjisomon/tv/multilingualism1.png",
            shortInfo: {
              ru: "Выбор языка интерфейса",
              en: "Interface language selection",
              tj: "Интихоби забони интерфейс",
            },
            fullInfo: {
              ru: `Приложение полностью поддерживает мультиязычность, предоставляя интерфейс на нескольких языках, включая русский, таджикский и английский. Это расширяет аудиторию сервиса и делает его интуитивно понятным для пользователей из разных стран и регионов.`,
              en: `The application fully supports multilingualism, providing an interface in several languages, including Russian, Tajik, and English. This expands the service's audience and makes it intuitive for users from different countries and regions.`,
              tj: `Барнома пурра бисёрзабониро дастгирӣ мекунад ва интерфейсро бо якчанд забонҳо, аз ҷумла русӣ, тоҷикӣ ва англисӣ пешниҳод мекунад. Ин аудиторияи хидматро васеъ мекунад ва онро барои корбарон аз кишварҳо ва минтақаҳои гуногун интуитивӣ мегардонад.`,
            },
          },
          {
            slug: "tv-profile",
            title: {
              ru: "Профиль пользователя",
              en: "User Profile",
              tj: "Профили корбар",
            },
            imageSrc: "/images/projects/mavjisomon/tv/profile-user1.png",
            BannerSrc: "/images/projects/mavjisomon/tv/profile-user1.png",
            shortInfo: {
              ru: "Личный кабинет",
              en: "Personal account",
              tj: "Кабинаи шахсӣ",
            },
            fullInfo: {
              ru: `Профиль пользователя на Smart TV позволяет управлять личными данными, просматривать баланс и историю платежей. Через удобное меню профиля можно также настроить параметры аккаунта, переключаться между детским и взрослым профилем.`,
              en: `The user profile on Smart TV allows you to manage personal data, view balance, and payment history. Through the convenient profile menu, you can also configure account settings, switch between children's and adult profiles.`,
              tj: `Профили корбар дар Smart TV имкон медиҳад, ки маълумоти шахсиро идора кунед, тавозун ва таърихи пардохтҳоро бинед. Тавассути менюи қулайи профил, шумо инчунин метавонед танзимоти ҳисобро танзим кунед, байни профили кӯдакона ва калонсолон гузаред.`,
            },
          },
          {
            slug: "tv-about",
            title: {
              ru: "О приложении",
              en: "About App",
              tj: "Дар бораи барнома",
            },
            imageSrc: "/images/projects/mavjisomon/tv/about-page.png",
            BannerSrc: "/images/projects/mavjisomon/tv/about-page.png",
            shortInfo: {
              ru: "Информация и поддержка",
              en: "Information and support",
              tj: "Маълумот ва дастгирӣ",
            },
            fullInfo: {
              ru: `Раздел «О приложении» предоставляет важную информацию для пользователей: номер версии, контакты службы технической поддержки и ссылки на правовые документы. Это помогает оперативно решать возникающие вопросы и повышает доверие к сервису.`,
              en: `The "About App" section provides important information for users: version number, technical support contacts, and links to legal documents. This helps to quickly resolve any issues and increases trust in the service.`,
              tj: `Бахши "Дар бораи барнома" маълумоти муҳимро барои корбарон пешниҳод мекунад: рақами версия, тамосҳои хадамоти дастгирии техникӣ ва истинодҳо ба ҳуҷҷатҳои ҳуқуқӣ. Ин барои саривақт ҳал кардани масъалаҳои бамиёномада кӯмак мекунад ва эътимодро ба хидмат баланд мебардорад.`,
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/livechat.webp",
    year: "2024",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "WebSocket"],
    slug: "livechat-tj",
    gallery: [
      "/images/projects/livechat/gallery-1.png",
      "/images/projects/livechat/gallery-2.png",
      "/images/projects/livechat/gallery-3.png",
      "/images/projects/livechat/gallery-4.png",
      "/images/projects/livechat/gallery-5.png",
      "/images/projects/livechat/gallery-6.png",
      "/images/projects/livechat/gallery-7.png",
      "/images/projects/livechat/gallery-8.png",
      "/images/projects/livechat/gallery-9.png",
      "/images/projects/livechat/gallery-10.png",
    ],
    projectComponents: [
      {
        tabName: { ru: "Лендинг", en: "Landing", tj: "Лендинг" },
        items: [
          {
            slug: "hero",
            title: {
              ru: "Первый экран",
              en: "Hero Section",
              tj: "Экрани аввал",
            },
            imageSrc: "/images/projects/livechat/gallery-1.png",
            BannerSrc: "/images/projects/livechat/gallery-1.png",
            shortInfo: {
              ru: "Оффер продукта и призыв к действию",
              en: "Product offer and call to action",
              tj: "Пешниҳоди маҳсулот ва даъват ба амал",
            },
            fullInfo: {
              ru: "Первый экран лендинга LiveChat формирует первое впечатление о продукте. В шапке размещены логотип с названием сервиса, горизонтальное меню из разделов «Функции», «Тарифы», «Интеграции» и «Поддержка», переключатель языка, кнопка «Войти» и выделенная кнопка «Попробовать бесплатно». Над заголовком расположена метка «Бесплатный пробный период — без карты», которая сразу снимает барьер для начала работы. Центральный заголовок «Онлайн-чат для связи с вашими клиентами» и подзаголовок о росте числа заявок без дополнительных расходов на маркетинг объясняют суть предложения. Ниже размещены две кнопки — «Электронная почта» и «Попробовать бесплатно» — и три коротких аргумента: без кредитной карты, установка за 5 минут и отмена в любой момент.\n\nПользовательский сценарий: посетитель считывает суть предложения из заголовка, оценивает отсутствие рисков по трём подписям и переходит к бесплатному запуску одной кнопкой либо оставляет электронную почту для связи.\n\nЦенность для бизнеса: продуманный первый экран концентрирует внимание на главном оффере и целевом действии. Для SaaS-продукта такой блок повышает конверсию посетителя в пробную регистрацию, а явные гарантии («без карты», «отмена в любой момент») снижают сомнения на входе.",
              en: "The LiveChat landing hero shapes the first impression of the product. The header contains the service logo and name, a horizontal menu with Features, Pricing, Integrations and Support, a language switcher, a Log in button and a highlighted Try for free button. A badge above the headline — “Free trial — no card required” — removes the entry barrier immediately. The central headline “Online chat to connect with your customers” and the subheading about increasing leads without extra marketing costs explain the value proposition. Below are two action buttons — Email and Try for free — and three short arguments: no credit card, five-minute setup and cancel anytime.\n\nUser journey: the visitor grasps the offer from the headline, checks the risk-free promises in the three captions and starts a free trial with one button, or leaves an email address for contact.\n\nBusiness value: a focused hero concentrates attention on the core offer and target action. For a SaaS product this block raises the visitor-to-trial conversion rate, while explicit guarantees (“no card”, “cancel anytime”) reduce hesitation at the entry point.",
              tj: "Экрани аввали лендинги LiveChat таассуроти аввалро дар бораи маҳсулот ташкил медиҳад. Дар қисми боло нишон ва номи хизматрасонӣ, менюи уфуқӣ бо бахшҳои «Функсияҳо», «Тарифҳо», «Интегратсияҳо» ва «Дастгирӣ», интихобкунандаи забон, тугмаи «Ворид шудан» ва тугмаи барҷастаи «Ройгон санҷидан» ҷойгиранд. Болои сарлавҳа нишонаи «Давраи санҷиши ройгон — бе корт» ҷой дорад, ки монеаи оғозро дарҳол бартараф мекунад. Сарлавҳаи марказӣ «Чати онлайн барои алоқа бо мизоҷони шумо» ва зерсарлавҳа дар бораи афзоиши шумораи дархостҳо бе харҷи иловагӣ ба маркетинг моҳияти пешниҳодро мефаҳмонанд. Дар поён ду тугма — «Почтаи электронӣ» ва «Ройгон санҷидан» — ва се далели кӯтоҳ ҷойгиранд: бе корти қарзӣ, насб дар 5 дақиқа ва бекоркунӣ дар ҳар лаҳза.\n\nРаванди истифода: корбар моҳияти пешниҳодро аз сарлавҳа дарк мекунад, набудани хатарро аз рӯйи се навишт арзёбӣ мекунад ва бо як тугма ба оғози ройгон мегузарад ё почтаи электрониро барои алоқа мегузорад.\n\nАҳамият барои тиҷорат: экрани аввали хуб таҳияшуда таваҷҷуҳро ба пешниҳоди асосӣ ва амали мақсаднок ҷамъ меорад. Барои маҳсулоти SaaS чунин блок табдили корбарро ба сабти санҷишӣ баланд мебардорад, кафолатҳои возеҳ («бе корт», «бекоркунӣ дар ҳар лаҳза») бошанд, шакро дар вуруд кам мекунанд.",
            },
          },
          {
            slug: "solution",
            title: {
              ru: "Решение",
              en: "Solution",
              tj: "Ҳалли масъала",
            },
            imageSrc: "/images/projects/livechat/gallery-2.png",
            BannerSrc: "/images/projects/livechat/gallery-2.png",
            shortInfo: {
              ru: "Наглядная презентация продукта",
              en: "Visual product presentation",
              tj: "Муаррифии аёнии маҳсулот",
            },
            fullInfo: {
              ru: "Блок «Решение» раскрывает продукт через крупную визуальную карточку. Слева расположены метка раздела «Решение», заголовок «LiveChat — решение, которое вас выделит!» и описание, объясняющее лёгкую интеграцию виджета в любой сайт. Центральную область занимает наглядный макет: на экране ноутбука показан рабочий кабинет оператора со списком диалогов, активной перепиской и панелью информации о посетителе, а рядом — телефон с виджетом чата на стороне клиента. Карточка снабжена подписью «#1 Чат для сайта, Telegram и WhatsApp», списком преимуществ (быстрая установка, 14 дней бесплатно, простое управление, без привязки к карте), кнопками «Начать бесплатно» и «Посмотреть демо» и адресом livechat.tj.\n\nПользовательский сценарий: посетитель видит, как выглядит продукт с обеих сторон — глазами оператора и глазами клиента, оценивает интерфейс диалогов и переходит к бесплатному старту или демонстрации.\n\nЦенность для бизнеса: демонстрация реального интерфейса снижает неопределённость и укрепляет доверие к продукту. Единый макет «оператор + клиент» показывает полный цикл общения, что помогает посетителю быстрее понять, как инструмент будет работать в его бизнесе.",
              en: "The Solution block presents the product through a large visual card. On the left are the section label “Solution”, the headline “LiveChat — the solution that sets you apart!” and a description explaining how easily the widget integrates into any website. The centre holds an illustrative mockup: a laptop screen shows the operator workspace with a dialogue list, an active conversation and a visitor information panel, while a phone beside it displays the chat widget on the customer side. The card includes the caption “#1 Chat for websites, Telegram and WhatsApp”, a benefits list (fast setup, 14 days free, simple management, no card required), Start for free and Watch demo buttons, and the livechat.tj address.\n\nUser journey: the visitor sees the product from both sides — the operator’s view and the customer’s view — assesses the dialogue interface and moves to a free start or a demo.\n\nBusiness value: showing the real interface reduces uncertainty and builds trust in the product. A single “operator + customer” mockup illustrates the full communication cycle, helping the visitor understand faster how the tool will work in their own business.",
              tj: "Блоки «Ҳалли масъала» маҳсулотро тавассути корти калони аёнӣ ошкор мекунад. Дар тарафи чап нишонаи бахши «Ҳалли масъала», сарлавҳаи «LiveChat — ҳалле, ки шуморо мумтоз мекунад!» ва тавсифе, ки интегратсияи осони виҷетро ба ҳар сомона мефаҳмонад, ҷойгиранд. Қисми марказиро макети аёнӣ ишғол мекунад: дар экрани ноутбук кабинети кории оператор бо рӯйхати муколамаҳо, мукотибаи фаъол ва лавҳаи маълумот дар бораи меҳмон нишон дода шудааст, дар паҳлу бошад — телефон бо виҷети чат дар ҷониби мизоҷ. Корт бо навишти «#1 Чат барои сомона, Telegram ва WhatsApp», рӯйхати бартариҳо (насби зуд, 14 рӯз ройгон, идоракунии осон, бе корт), тугмаҳои «Ройгон оғоз кардан» ва «Дидани демо» ва суроғаи livechat.tj муҷаҳҳаз аст.\n\nРаванди истифода: корбар мебинад, ки маҳсулот аз ду ҷониб чӣ гуна ба назар мерасад — аз чашми оператор ва аз чашми мизоҷ, интерфейси муколамаҳоро арзёбӣ мекунад ва ба оғози ройгон ё намоиш мегузарад.\n\nАҳамият барои тиҷорат: намоиши интерфейси воқеӣ номуайяниро кам карда, эътимодро ба маҳсулот мустаҳкам мекунад. Макети ягонаи «оператор + мизоҷ» давраи пурраи муоширатро нишон медиҳад ва ба корбар кумак мекунад, ки зудтар фаҳмад, ки абзор дар тиҷорати ӯ чӣ гуна кор мекунад.",
            },
          },
          {
            slug: "features",
            title: {
              ru: "Функции",
              en: "Features",
              tj: "Функсияҳо",
            },
            imageSrc: "/images/projects/livechat/gallery-3.png",
            BannerSrc: "/images/projects/livechat/gallery-3.png",
            shortInfo: {
              ru: "Набор ключевых возможностей сервиса",
              en: "Core capabilities of the service",
              tj: "Маҷмуи имкониятҳои асосии хизматрасонӣ",
            },
            fullInfo: {
              ru: "Раздел «Функции» представляет возможности сервиса в виде сетки карточек. Над сеткой размещены метка «Функции», заголовок «Всё для эффективной поддержки клиентов» и подзаголовок о наборе инструментов, который растёт вместе с бизнесом. Шесть карточек с иконками описывают отдельные возможности: «Мгновенный ответ» (быстрая реакция удерживает клиентов на сайте), «Умный виджет» (автоматическая подстройка под поведение пользователя), «Аналитика и отчёты» (число чатов, время ответа и эффективность агентов), «Командная работа» (одновременная работа нескольких агентов и передача диалогов), «Шаблоны ответов» (готовые заготовки для частых вопросов) и «Интеграции с CRM» (подключение внешних платформ).\n\nПользовательский сценарий: посетитель бегло просматривает карточки, находит функции, важные именно для его задач — например, аналитику или командную работу — и формирует представление о полноте продукта.\n\nЦенность для бизнеса: структурированный перечень возможностей помогает потенциальному клиенту сопоставить продукт со своими требованиями. Единый формат карточек делает сравнение функций наглядным и облегчает решение о подключении.",
              en: "The Features section presents the service’s capabilities as a grid of cards. Above the grid are the Features label, the headline “Everything for effective customer support” and a subheading about a toolset that grows with the business. Six icon cards describe individual capabilities: Instant reply (a fast reaction keeps customers on the site), Smart widget (automatic adaptation to user behaviour), Analytics and reports (chat volume, response time and agent performance), Teamwork (several agents working at once and handing over dialogues), Reply templates (ready-made snippets for frequent questions) and CRM integrations (connecting external platforms).\n\nUser journey: the visitor scans the cards, finds the features relevant to their own tasks — for example analytics or teamwork — and forms a view of how complete the product is.\n\nBusiness value: a structured list of capabilities helps a prospective customer match the product to their requirements. A uniform card format makes feature comparison clear and eases the decision to sign up.",
              tj: "Бахши «Функсияҳо» имкониятҳои хизматрасониро дар шакли шабакаи кортҳо пешниҳод мекунад. Болои шабака нишонаи «Функсияҳо», сарлавҳаи «Ҳама чиз барои дастгирии самараноки мизоҷон» ва зерсарлавҳа дар бораи маҷмуи абзорҳое, ки ҳамроҳи тиҷорат меафзояд, ҷойгиранд. Шаш корт бо нишонаҳо имкониятҳои алоҳидаро тавсиф мекунанд: «Ҷавоби фаврӣ» (аксуламали зуд мизоҷонро дар сомона нигоҳ медорад), «Виҷети зирак» (мутобиқшавии худкор ба рафтори корбар), «Таҳлил ва ҳисоботҳо» (шумораи чатҳо, вақти ҷавоб ва самаранокии агентҳо), «Кори дастаҷамъӣ» (кори ҳамзамони якчанд агент ва интиқоли муколамаҳо), «Шаблонҳои ҷавоб» (заготовкаҳои тайёр барои саволҳои зуд-зуд) ва «Интегратсия бо CRM» (пайвасткунии платформаҳои беруна).\n\nРаванди истифода: корбар кортҳоро бо назари сатҳӣ аз назар мегузаронад, функсияҳои барои вазифаҳои ӯ муҳимро — масалан таҳлил ё кори дастаҷамъӣ — меёбад ва тасаввурот дар бораи пуррагии маҳсулот ташкил медиҳад.\n\nАҳамият барои тиҷорат: рӯйхати сохтории имкониятҳо ба мизоҷи эҳтимолӣ кумак мекунад, ки маҳсулотро бо талаботи худ мувофиқ созад. Формати ягонаи кортҳо муқоисаи функсияҳоро аён мекунад ва қарори пайвастшавиро осон менамояд.",
            },
          },
          {
            slug: "how-it-works",
            title: {
              ru: "Как это работает",
              en: "How It Works",
              tj: "Чӣ тавр кор мекунад",
            },
            imageSrc: "/images/projects/livechat/gallery-4.png",
            BannerSrc: "/images/projects/livechat/gallery-4.png",
            shortInfo: {
              ru: "Четыре шага до первого диалога",
              en: "Four steps to the first dialogue",
              tj: "Чор қадам то муколамаи аввал",
            },
            fullInfo: {
              ru: "Блок «Как это работает» объясняет запуск сервиса через последовательность из четырёх шагов. Над схемой размещены метка «Как это работает», заголовок «Как работает онлайн-чат для сайта?» и пояснение «Четыре простых шага до первого диалога». Каждый шаг оформлен отдельной карточкой с иконкой, номером и кратким текстом: ШАГ 1 — на сайте устанавливается код чата; ШАГ 2 — после установки появляется всплывающее окно; ШАГ 3 — менеджеры отвечают на вопросы клиентов; ШАГ 4 — посетитель совершает покупку или оформляет заказ. Крупные полупрозрачные цифры фона подчёркивают порядок действий.\n\nПользовательский сценарий: посетитель последовательно читает шаги и получает целостное представление о процессе — от установки кода до оформления заказа, снимая опасение о сложности внедрения.\n\nЦенность для бизнеса: пошаговое объяснение превращает абстрактный продукт в понятный процесс. Демонстрация того, что подключение сводится к простому коду и приводит к продаже, снижает воспринимаемую сложность и подталкивает к пробному запуску.",
              en: "The How It Works block explains getting started through a sequence of four steps. Above the diagram are the How it works label, the headline “How does online chat for a website work?” and the note “Four simple steps to the first dialogue”. Each step is a separate card with an icon, a number and short text: Step 1 — the chat code is installed on the site; Step 2 — a pop-up window appears after installation; Step 3 — managers answer customer questions; Step 4 — the visitor makes a purchase or places an order. Large semi-transparent background numbers emphasise the order of actions.\n\nUser journey: the visitor reads the steps in order and gains a complete picture of the process — from installing the code to placing an order — dispelling concern about implementation complexity.\n\nBusiness value: a step-by-step explanation turns an abstract product into a clear process. Showing that setup comes down to a simple snippet and leads to a sale lowers the perceived complexity and encourages a trial.",
              tj: "Блоки «Чӣ тавр кор мекунад» оғози хизматрасониро тавассути пайдарпайии чор қадам мефаҳмонад. Болои нақша нишонаи «Чӣ тавр кор мекунад», сарлавҳаи «Чати онлайн барои сомона чӣ тавр кор мекунад?» ва тавзеҳи «Чор қадами содда то муколамаи аввал» ҷойгиранд. Ҳар қадам ҳамчун корти алоҳида бо нишона, рақам ва матни кӯтоҳ таҳия шудааст: Қадами 1 — коди чат дар сомона насб мешавад; Қадами 2 — пас аз насб равзанаи пайдошаванда зоҳир мегардад; Қадами 3 — менеҷерон ба саволҳои мизоҷон ҷавоб медиҳанд; Қадами 4 — меҳмон харид мекунад ё фармоиш медиҳад. Рақамҳои калони нимшаффофи замина тартиби амалҳоро таъкид мекунанд.\n\nРаванди истифода: корбар қадамҳоро пайдарпай мехонад ва тасаввури мукаммал дар бораи ҷараён — аз насби код то расмигардонии фармоиш — пайдо мекунад, ки нигаронӣ дар бораи мураккабии татбиқро бартараф месозад.\n\nАҳамият барои тиҷорат: тавзеҳи қадам ба қадам маҳсулоти абстрактиро ба ҷараёни фаҳмо табдил медиҳад. Нишон додани он, ки пайвастшавӣ ба як коди содда табдил меёбад ва ба фурӯш меорад, мураккабии эҳсосшавандаро кам мекунад ва ба оғози санҷишӣ ҳавасманд менамояд.",
            },
          },
          {
            slug: "customization",
            title: {
              ru: "Кастомизация",
              en: "Customization",
              tj: "Танзими фардӣ",
            },
            imageSrc: "/images/projects/livechat/gallery-5.png",
            BannerSrc: "/images/projects/livechat/gallery-5.png",
            shortInfo: {
              ru: "Настройка виджета под фирменный стиль",
              en: "Widget tailored to brand style",
              tj: "Танзими виҷет мутобиқи услуби бренд",
            },
            fullInfo: {
              ru: "Блок «Кастомизация» показывает возможности оформления виджета под бренд. Слева размещены метка «Кастомизация», заголовок «Адаптируйте дизайн онлайн-чата под фирменный стиль вашего сайта» и описание о гибкой настройке без знания кода. Ниже — список из четырёх пунктов с отметками: выбор цветовой схемы и шрифтов, настройка позиции виджета на странице, загрузка логотипа и аватара оператора, персонализированные приветственные сообщения. Справа расположен макет чат-интерфейса, демонстрирующий, как выглядит настроенный виджет в работе.\n\nПользовательский сценарий: посетитель изучает перечень настроек, убеждается, что виджет можно адаптировать под собственный сайт без разработчиков, и соотносит эти возможности с требованиями своего бренда.\n\nЦенность для бизнеса: гибкое оформление снимает опасение, что сторонний виджет будет выбиваться из дизайна сайта. Возможность настройки без кода расширяет круг пользователей, которым продукт подходит без привлечения технических специалистов.",
              en: "The Customization block shows how the widget can be styled to match a brand. On the left are the Customization label, the headline “Adapt the online chat design to your website’s brand style” and a description of flexible, code-free configuration. Below is a four-item checklist: choosing a colour scheme and fonts, setting the widget position on the page, uploading a logo and operator avatar, and personalised welcome messages. On the right, a chat-interface mockup demonstrates how the configured widget looks in action.\n\nUser journey: the visitor reviews the settings list, confirms that the widget can be adapted to their own site without developers and matches these options against their brand requirements.\n\nBusiness value: flexible styling removes the concern that a third-party widget will clash with the site design. Code-free configuration widens the pool of users for whom the product fits without involving technical specialists.",
              tj: "Блоки «Танзими фардӣ» имкониятҳои ороиши виҷетро мутобиқи бренд нишон медиҳад. Дар тарафи чап нишонаи «Танзими фардӣ», сарлавҳаи «Тарҳи чати онлайнро мутобиқи услуби брендии сомонаи худ созед» ва тавсиф дар бораи танзими фасеҳ бе донистани код ҷойгиранд. Дар поён рӯйхати чор банд бо аломатҳо: интихоби нақшаи рангҳо ва шрифтҳо, танзими мавқеи виҷет дар саҳифа, боркунии нишона ва аватари оператор, паёмҳои хушомадгӯии фардикунонидашуда. Дар тарафи рост макети интерфейси чат ҷойгир аст, ки нишон медиҳад виҷети танзимшуда дар кор чӣ гуна ба назар мерасад.\n\nРаванди истифода: корбар рӯйхати танзимҳоро меомӯзад, боварӣ ҳосил мекунад, ки виҷетро бе барномасозон мутобиқи сомонаи худ созед ва ин имкониятҳоро бо талаботи бренди худ муқоиса мекунад.\n\nАҳамият барои тиҷорат: ороиши фасеҳ нигарониро дар бораи он, ки виҷети бегона аз тарҳи сомона фарқ мекунад, бартараф месозад. Имкони танзим бе код доираи корбаронеро, ки маҳсулот бе ҷалби мутахассисони техникӣ мувофиқ аст, васеъ мекунад.",
            },
          },
          {
            slug: "pricing",
            title: {
              ru: "Тарифы",
              en: "Pricing",
              tj: "Тарифҳо",
            },
            imageSrc: "/images/projects/livechat/gallery-6.png",
            BannerSrc: "/images/projects/livechat/gallery-6.png",
            shortInfo: {
              ru: "Три тарифных плана с сравнением",
              en: "Three pricing plans compared",
              tj: "Се нақшаи тарифӣ бо муқоиса",
            },
            fullInfo: {
              ru: "Раздел «Тарифы» представляет три плана подписки в виде параллельных карточек. Над ними размещены метка «Тарифы», заголовок «Выберите подходящий план» и подзаголовок «Начните бесплатно, масштабируйтесь по мере роста бизнеса». План «Старт» рассчитан на малый бизнес и стартапы (1 агент, 100 чатов в месяц, базовый виджет, email-поддержка, история чатов 30 дней). Центральный план «Профи» помечен значком «Популярный» и выделен тёмным фоном (до 5 агентов, безлимит чатов, аналитика и отчёты, все интеграции, шаблоны ответов, приоритетная поддержка). План «Бизнес» ориентирован на крупные компании (безлимит агентов, всё из тарифа «Профи», API-доступ, SLA-гарантия, персональный менеджер, выделенный сервер). Каждая карточка снабжена кнопкой действия.\n\nПользовательский сценарий: посетитель сравнивает планы по составу возможностей, ориентируется на выделенный рекомендованный тариф и выбирает вариант, соответствующий размеру команды и объёму задач.\n\nЦенность для бизнеса: наглядное сравнение тарифов помогает клиенту самостоятельно выбрать подходящий уровень и видеть путь роста. Выделение среднего плана как рекомендованного направляет выбор и повышает вероятность подписки на оптимальный вариант.",
              en: "The Pricing section presents three subscription plans as parallel cards. Above them are the Pricing label, the headline “Choose the right plan” and the subheading “Start free and scale as your business grows”. The Start plan targets small businesses and startups (1 agent, 100 chats per month, a basic widget, email support, 30-day chat history). The central Pro plan carries a Popular badge and stands out with a dark background (up to 5 agents, unlimited chats, analytics and reports, all integrations, reply templates, priority support). The Business plan is aimed at large companies (unlimited agents, everything from Pro, API access, an SLA guarantee, a personal manager, a dedicated server). Each card includes an action button.\n\nUser journey: the visitor compares the plans by their feature sets, is guided by the highlighted recommended tier and selects the option that matches their team size and task volume.\n\nBusiness value: a clear plan comparison lets the customer choose the right level themselves and see a growth path. Highlighting the middle plan as recommended steers the choice and increases the likelihood of subscribing to the optimal option.",
              tj: "Бахши «Тарифҳо» се нақшаи обунаро дар шакли кортҳои параллелӣ пешниҳод мекунад. Болои онҳо нишонаи «Тарифҳо», сарлавҳаи «Нақшаи мувофиқро интихоб кунед» ва зерсарлавҳаи «Ройгон оғоз кунед, ҳамроҳи рушди тиҷорат миқёсро васеъ намоед» ҷойгиранд. Нақшаи «Оғоз» барои тиҷорати хурд ва стартапҳо пешбинӣ шудааст (1 агент, 100 чат дар як моҳ, виҷети асосӣ, дастгирии email, таърихи чатҳо 30 рӯз). Нақшаи марказии «Профи» бо нишонаи «Маъмул» қайд шуда, бо заминаи торик барҷаста аст (то 5 агент, чатҳои бемаҳдуд, таҳлил ва ҳисоботҳо, ҳамаи интегратсияҳо, шаблонҳои ҷавоб, дастгирии афзалиятнок). Нақшаи «Бизнес» ба ширкатҳои калон нигаронида шудааст (агентҳои бемаҳдуд, ҳама чиз аз «Профи», дастрасии API, кафолати SLA, менеҷери шахсӣ, сервери ҷудошуда). Ҳар корт бо тугмаи амал муҷаҳҳаз аст.\n\nРаванди истифода: корбар нақшаҳоро аз рӯйи ҳайати имкониятҳо муқоиса мекунад, ба тарифи тавсияшудаи барҷаста нигаронида мешавад ва вариантеро, ки ба андозаи даста ва ҳаҷми вазифаҳо мувофиқ аст, интихоб мекунад.\n\nАҳамият барои тиҷорат: муқоисаи аёнии тарифҳо ба мизоҷ кумак мекунад, ки сатҳи мувофиқро мустақилона интихоб кунад ва роҳи рушдро бинад. Барҷаста кардани нақшаи миёна ҳамчун тавсияшуда интихобро равона карда, эҳтимоли обунаро ба варианти беҳтарин баланд мебардорад.",
            },
          },
          {
            slug: "integrations",
            title: {
              ru: "Интеграции",
              en: "Integrations",
              tj: "Интегратсияҳо",
            },
            imageSrc: "/images/projects/livechat/gallery-7.png",
            BannerSrc: "/images/projects/livechat/gallery-7.png",
            shortInfo: {
              ru: "Подключение к внешним платформам",
              en: "Connecting to external platforms",
              tj: "Пайвастшавӣ ба платформаҳои беруна",
            },
            fullInfo: {
              ru: "Раздел «Интеграции» показывает, с какими системами связывается сервис. Над сеткой размещены метка «Интеграции», заголовок «Подключайтесь к любым платформам» и подзаголовок о встраивании в существующий стек инструментов. Четыре карточки с иконками и бейджами описывают направления интеграции: «Мессенджеры» (10+ каналов, приём обращений в едином интерфейсе оператора), «CRM-системы» (15+ платформ, автоматическая передача данных о клиентах и сделках), «Конструкторы сайтов» (любая CMS, установка виджета без программистов) и «Собственный API» (REST & Webhooks, встраивание в любой продукт или рабочий процесс).\n\nПользовательский сценарий: посетитель проверяет, поддерживает ли сервис нужные ему каналы и системы — мессенджеры, CRM или собственную платформу — и оценивает совместимость с текущей инфраструктурой.\n\nЦенность для бизнеса: явное перечисление интеграций отвечает на частый вопрос о совместимости до начала работы. Возможность подключить мессенджеры, CRM и собственный API через один инструмент снижает риск, что продукт не впишется в имеющиеся процессы.",
              en: "The Integrations section shows which systems the service connects to. Above the grid are the Integrations label, the headline “Connect to any platform” and a subheading about fitting into an existing toolset. Four cards with icons and badges describe the integration directions: Messengers (10+ channels, receiving enquiries in a single operator interface), CRM systems (15+ platforms, automatic transfer of customer and deal data), Website builders (any CMS, installing the widget without programmers) and Own API (REST & Webhooks, embedding into any product or workflow).\n\nUser journey: the visitor checks whether the service supports the channels and systems they need — messengers, CRM or their own platform — and assesses compatibility with their current infrastructure.\n\nBusiness value: an explicit list of integrations answers the common compatibility question before work begins. Being able to connect messengers, CRM and a custom API through one tool reduces the risk that the product will not fit existing processes.",
              tj: "Бахши «Интегратсияҳо» нишон медиҳад, ки хизматрасонӣ бо кадом системаҳо пайваст мешавад. Болои шабака нишонаи «Интегратсияҳо», сарлавҳаи «Ба ҳар платформа пайваст шавед» ва зерсарлавҳа дар бораи ворид шудан ба маҷмуи мавҷудаи абзорҳо ҷойгиранд. Чор корт бо нишонаҳо ва бейҷҳо самтҳои интегратсияро тавсиф мекунанд: «Мессенҷерҳо» (10+ канал, қабули муроҷиатҳо дар интерфейси ягонаи оператор), «Системаҳои CRM» (15+ платформа, интиқоли худкори маълумот дар бораи мизоҷон ва аҳдҳо), «Конструкторҳои сомона» (ҳар CMS, насби виҷет бе барномасозон) ва «API-и худӣ» (REST & Webhooks, ворид шудан ба ҳар маҳсулот ё ҷараёни корӣ).\n\nРаванди истифода: корбар месанҷад, ки оё хизматрасонӣ каналҳо ва системаҳои ба ӯ лозимиро — мессенҷерҳо, CRM ё платформаи худиро — дастгирӣ мекунад ва мутобиқатро бо инфрасохтори ҷории худ арзёбӣ менамояд.\n\nАҳамият барои тиҷорат: рӯйхати возеҳи интегратсияҳо ба саволи маъмул дар бораи мутобиқат пеш аз оғози кор ҷавоб медиҳад. Имкони пайваст кардани мессенҷерҳо, CRM ва API-и худӣ тавассути як абзор хатари он, ки маҳсулот ба ҷараёнҳои мавҷуда мувофиқ намеояд, кам мекунад.",
            },
          },
          {
            slug: "benefits",
            title: {
              ru: "Преимущества",
              en: "Benefits",
              tj: "Бартариҳо",
            },
            imageSrc: "/images/projects/livechat/gallery-8.png",
            BannerSrc: "/images/projects/livechat/gallery-8.png",
            shortInfo: {
              ru: "Ключевые выгоды для бизнеса",
              en: "Key benefits for business",
              tj: "Фоидаҳои асосӣ барои тиҷорат",
            },
            fullInfo: {
              ru: "Блок «Преимущества» отвечает на вопрос, зачем бизнесу онлайн-чат. Над карточками размещены метка «Преимущества» и заголовок «Для чего нужен онлайн-чат». Три карточки с иконками раскрывают основные выгоды: «Рост продаж» (вовлечение посетителей в разговор до того, как они покинут сайт, и конвертация интереса в заявки), «Сокращение расходов» (один менеджер ведёт несколько диалогов одновременно, снижая затраты на поддержку) и «Больше клиентов» (оперативное решение вопросов до того, как посетитель уйдёт к конкурентам). Ниже начинается блок поддержки с заголовком «Мы всегда рядом».\n\nПользовательский сценарий: посетитель сопоставляет описанные выгоды со своими бизнес-целями — увеличением продаж, экономией на поддержке или удержанием клиентов — и укрепляется в решении попробовать продукт.\n\nЦенность для бизнеса: формулировка выгод на языке результата (продажи, расходы, клиенты) переводит технические функции в понятную коммерческую пользу. Это помогает лицам, принимающим решение, обосновать внедрение инструмента.",
              en: "The Benefits block answers why a business needs online chat. Above the cards are the Benefits label and the headline “Why you need online chat”. Three icon cards spell out the main benefits: Sales growth (engaging visitors in conversation before they leave the site and converting interest into leads), Cost reduction (one manager handling several dialogues at once, lowering support costs) and More customers (resolving questions promptly before a visitor moves to a competitor). Below, the support block begins with the headline “We’re always here”.\n\nUser journey: the visitor matches the stated benefits against their own business goals — growing sales, saving on support or retaining customers — and grows more confident in trying the product.\n\nBusiness value: framing benefits in terms of outcomes (sales, costs, customers) translates technical features into clear commercial value. This helps decision-makers justify adopting the tool.",
              tj: "Блоки «Бартариҳо» ба саволи он, ки чаро ба тиҷорат чати онлайн лозим аст, ҷавоб медиҳад. Болои кортҳо нишонаи «Бартариҳо» ва сарлавҳаи «Чати онлайн барои чӣ лозим аст» ҷойгиранд. Се корт бо нишонаҳо фоидаҳои асосиро ошкор мекунанд: «Рушди фурӯш» (ҷалби меҳмонон ба сӯҳбат пеш аз он ки сомонаро тарк кунанд ва табдили таваҷҷуҳ ба дархостҳо), «Кам кардани харҷ» (як менеҷер якчанд муколамаро ҳамзамон мебарад ва хароҷоти дастгириро паст мекунад) ва «Мизоҷони бештар» (ҳалли фаврии саволҳо пеш аз он ки меҳмон ба рақибон равад). Дар поён блоки дастгирӣ бо сарлавҳаи «Мо ҳамеша дар назди шумо» оғоз мешавад.\n\nРаванди истифода: корбар фоидаҳои тавсифшударо бо ҳадафҳои тиҷоратии худ — афзоиши фурӯш, сарфа дар дастгирӣ ё нигоҳ доштани мизоҷон — муқоиса мекунад ва дар қарори санҷидани маҳсулот устувортар мешавад.\n\nАҳамият барои тиҷорат: баёни фоидаҳо бо забони натиҷа (фурӯш, харҷ, мизоҷон) функсияҳои техникиро ба манфиати возеҳи тиҷоратӣ табдил медиҳад. Ин ба шахсони қароргиранда кумак мекунад, ки татбиқи абзорро асоснок созанд.",
            },
          },
          {
            slug: "support-faq",
            title: {
              ru: "Поддержка и FAQ",
              en: "Support and FAQ",
              tj: "Дастгирӣ ва FAQ",
            },
            imageSrc: "/images/projects/livechat/gallery-9.png",
            BannerSrc: "/images/projects/livechat/gallery-9.png",
            shortInfo: {
              ru: "Каналы связи и частые вопросы",
              en: "Contact channels and frequent questions",
              tj: "Каналҳои алоқа ва саволҳои маъмул",
            },
            fullInfo: {
              ru: "Раздел «Поддержка» объединяет каналы связи и ответы на частые вопросы. Над блоком размещены метка «Поддержка», заголовок «Мы всегда рядом» и подзаголовок о выборе удобного способа связи. Три карточки описывают доступные каналы: «Email поддержка» с адресом support@livechat.ru, «Онлайн-чат 24/7» с ссылкой «Открыть чат» и «Документация» с адресом docs.livechat.ru. Ниже расположен блок «Часто задаваемые вопросы» в две колонки: нужны ли технические знания для установки, можно ли попробовать бесплатно, как отменить подписку и какие мессенджеры поддерживаются — с краткими ответами по каждому пункту.\n\nПользовательский сценарий: посетитель выбирает удобный способ связи или находит ответ на свой вопрос в блоке FAQ, не покидая страницу и не обращаясь в поддержку.\n\nЦенность для бизнеса: сочетание каналов поддержки и FAQ снимает типовые возражения перед покупкой и уменьшает нагрузку на команду. Явные ответы на вопросы об установке, оплате и отмене подписки повышают доверие и ускоряют принятие решения.",
              en: "The Support section combines contact channels with answers to frequent questions. Above the block are the Support label, the headline “We’re always here” and a subheading about choosing a convenient way to get in touch. Three cards describe the available channels: Email support with the address support@livechat.ru, 24/7 live chat with an “Open chat” link, and Documentation with the docs.livechat.ru address. Below is a two-column “Frequently asked questions” block: whether technical knowledge is needed for setup, whether it can be tried for free, how to cancel a subscription and which messengers are supported — each with a short answer.\n\nUser journey: the visitor chooses a convenient contact channel or finds the answer to their question in the FAQ block without leaving the page or contacting support.\n\nBusiness value: combining support channels with an FAQ removes common pre-purchase objections and reduces the load on the team. Clear answers about setup, payment and cancellation build trust and speed up the decision.",
              tj: "Бахши «Дастгирӣ» каналҳои алоқа ва ҷавобҳо ба саволҳои маъмулро муттаҳид мекунад. Болои блок нишонаи «Дастгирӣ», сарлавҳаи «Мо ҳамеша дар назди шумо» ва зерсарлавҳа дар бораи интихоби роҳи қулаи алоқа ҷойгиранд. Се корт каналҳои дастрасро тавсиф мекунанд: «Дастгирии email» бо суроғаи support@livechat.ru, «Чати онлайн 24/7» бо пайванди «Кушодани чат» ва «Ҳуҷҷатнигорӣ» бо суроғаи docs.livechat.ru. Дар поён блоки «Саволҳои зуд-зуд додашаванда» дар ду сутун ҷойгир аст: оё барои насб донишҳои техникӣ лозим аст, оё онро ройгон санҷидан мумкин аст, чӣ тавр обунаро бекор кардан ва кадом мессенҷерҳо дастгирӣ мешаванд — бо ҷавобҳои кӯтоҳ ба ҳар банд.\n\nРаванди истифода: корбар роҳи қулаи алоқаро интихоб мекунад ё ҷавоби саволи худро дар блоки FAQ меёбад, бе он ки саҳифаро тарк кунад ё ба дастгирӣ муроҷиат намояд.\n\nАҳамият барои тиҷорат: якҷоякунии каналҳои дастгирӣ ва FAQ эродҳои маъмулро пеш аз харид бартараф месозад ва сарбории дастаро кам мекунад. Ҷавобҳои возеҳ дар бораи насб, пардохт ва бекоркунии обуна эътимодро баланд мебардоранд ва қабули қарорро суръат мебахшанд.",
            },
          },
          {
            slug: "why-footer",
            title: {
              ru: "Почему LiveChat и подвал",
              en: "Why LiveChat and Footer",
              tj: "Чаро LiveChat ва поёни сомона",
            },
            imageSrc: "/images/projects/livechat/gallery-10.png",
            BannerSrc: "/images/projects/livechat/gallery-10.png",
            shortInfo: {
              ru: "Итоговый призыв и карта сайта",
              en: "Closing call and site map",
              tj: "Даъвати ниҳоӣ ва харитаи сомона",
            },
            fullInfo: {
              ru: "Завершающий блок объединяет итоговый призыв к действию и подвал сайта. В верхней части на тёмном фоне размещены метка «Почему LiveChat», заголовок «Почему стоит купить онлайн-чат от LiveChat?» и подзаголовок о том, что всё необходимое собрано в одном продукте. Ниже расположен ряд тегов-возможностей: мультиязычность, загрузка виджета, отправка файлов, шаблоны быстрых ответов и отправка картинки в чате, а также кнопка «Начать бесплатно». Подвал формирует карту сайта: логотип с кратким описанием и три колонки ссылок — «Продукт» (функции, тарифы, интеграции, безопасность), «Компания» (о нас, блог, документация, контакты) и «Начать» (регистрация, вход, демо, партнёрство). Внизу — строка авторских прав и ссылки на конфиденциальность и условия.\n\nПользовательский сценарий: посетитель, дочитавший страницу до конца, получает последний аргумент и целевую кнопку либо переходит к нужному разделу через сгруппированные ссылки подвала.\n\nЦенность для бизнеса: финальный блок закрепляет ключевые преимущества и предлагает понятное действие тем, кто дошёл до конца страницы. Подвал обеспечивает навигацию по всем разделам и служебным страницам, помогая посетителю продолжить путь после основного контента.",
              en: "The closing block combines a final call to action with the site footer. At the top, on a dark background, are the Why LiveChat label, the headline “Why buy online chat from LiveChat?” and a subheading stating that everything needed is gathered in one product. Below is a row of capability tags — multilingual support, widget upload, file sending, quick-reply templates and sending images in chat — together with a Start for free button. The footer forms a site map: a logo with a short description and three link columns — Product (features, pricing, integrations, security), Company (about us, blog, documentation, contacts) and Get started (registration, log in, demo, partnership). At the bottom are a copyright line and links to privacy and terms.\n\nUser journey: a visitor who has read the page to the end receives a final argument and a target button, or moves to a relevant section through the grouped footer links.\n\nBusiness value: the final block reinforces the key advantages and offers a clear action to those who reach the end of the page. The footer provides navigation across all sections and utility pages, helping the visitor continue after the main content.",
              tj: "Блоки хотимавӣ даъвати ниҳоӣ ба амал ва поёни сомонаро муттаҳид мекунад. Дар қисми боло дар заминаи торик нишонаи «Чаро LiveChat», сарлавҳаи «Чаро арзиши харидани чати онлайн аз LiveChat?» ва зерсарлавҳа дар бораи он, ки ҳама чизи зарурӣ дар як маҳсулот ҷамъ шудааст, ҷойгиранд. Дар поён қатори тегҳои имконият: бисёрзабонӣ, боркунии виҷет, ирсоли файлҳо, шаблонҳои ҷавоби зуд ва ирсоли расм дар чат, инчунин тугмаи «Ройгон оғоз кардан» ҷой доранд. Поёни сомона харитаи сомонаро ташкил медиҳад: нишона бо тавсифи кӯтоҳ ва се сутуни пайвандҳо — «Маҳсулот» (функсияҳо, тарифҳо, интегратсияҳо, амният), «Ширкат» (дар бораи мо, блог, ҳуҷҷатнигорӣ, тамосҳо) ва «Оғоз» (сабтином, ворид, демо, шарикӣ). Дар поён сатри ҳуқуқи муаллиф ва пайвандҳо ба махфият ва шартҳо ҷойгиранд.\n\nРаванди истифода: меҳмоне, ки саҳифаро то охир хондааст, далели охирин ва тугмаи мақсаднокро мегирад ё тавассути пайвандҳои гурӯҳбандишудаи поён ба бахши зарурӣ мегузарад.\n\nАҳамият барои тиҷорат: блоки ниҳоӣ бартариҳои асосиро мустаҳкам мекунад ва ба онҳое, ки то охири саҳифа расидаанд, амали возеҳ пешниҳод менамояд. Поёни сомона роҳнамоиро дар ҳамаи бахшҳо ва саҳифаҳои хидматӣ таъмин мекунад ва ба меҳмон кумак менамояд, ки пас аз мундариҷаи асосӣ роҳро идома диҳад.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/ttl.webp",
    year: "2024",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "REST API"],
    slug: "telecomm",
    gallery: [
      "/images/projects/ttl/gallery-1.png",
      "/images/projects/ttl/gallery-2.png",
      "/images/projects/ttl/gallery-3.png",
      "/images/projects/ttl/gallery-4.png",
      "/images/projects/ttl/gallery-5.png",
    ],
    projectComponents: [
      {
        tabName: { ru: "Веб-сайт", en: "Website", tj: "Веб-сайт" },
        items: [
          {
            slug: "home",
            title: {
              ru: "Главная страница",
              en: "Homepage",
              tj: "Саҳифаи асосӣ",
            },
            imageSrc: "/images/projects/ttl/gallery-1.png",
            BannerSrc: "/images/projects/ttl/gallery-1.png",
            shortInfo: {
              ru: "Слайдер и витрина услуг оператора",
              en: "Slider and provider service showcase",
              tj: "Слайдер ва намоишгоҳи хизматрасониҳои оператор",
            },
            fullInfo: {
              ru: "Главная страница сайта провайдера ТТЛ представляет ключевые услуги оператора. В шапке размещены логотип, номер службы поддержки 4884, основное меню («Услуги», «Интернет для дома», «Телевидение ТТЛ-ТВ», «Телефония (NGN/SIP)», «Для бизнеса»), а также верхние ссылки на новости, акции и контакты, иконки соцсетей, переключатель языка, кнопка смены темы и «Личный кабинет». Верхнюю область занимает слайдер с рекламой «ТТЛ-ТВ» — «Смотри 172 канала + более 2000 фильмов» — изображением телевизора и точками навигации. Ниже расположен блок «Услуги» из трёх карточек: интерактивное телевидение «ТТЛ-ТВ» с ценой и составом пакета каналов, «Домашний» (телефония NGN/SIP) с тарификацией вызовов и «Навин 30» (безлимитный интернет) с меткой «Новый» и таблицей скоростей.\n\nПользовательский сценарий: посетитель знакомится с акцией в слайдере, сравнивает три основные услуги по цене и характеристикам и переходит к нужному тарифу или разделу через меню.\n\nЦенность для бизнеса: главная страница телеком-оператора совмещает продвижение акций и наглядную витрину тарифов. Единый формат карточек с ценой и параметрами помогает абоненту быстро сопоставить услуги и упрощает выбор пакета.",
              en: "The homepage of the TTL provider’s site presents the operator’s key services. The header contains the logo, the support number 4884, the main menu (Services, Home Internet, TTL-TV Television, Telephony (NGN/SIP), For Business), and top links to news, promotions and contacts, along with social icons, a language switcher, a theme toggle and a Personal Account button. The upper area holds a slider advertising “TTL-TV” — “Watch 172 channels + over 2000 films” — with a TV image and navigation dots. Below is a Services block of three cards: interactive television “TTL-TV” with its price and channel-package composition, “Home” (NGN/SIP telephony) with call rates, and “Navin 30” (unlimited internet) with a “New” tag and a speed table.\n\nUser journey: the visitor sees the promotion in the slider, compares the three main services by price and characteristics, and moves to the relevant plan or section through the menu.\n\nBusiness value: a telecom operator’s homepage combines promotion of offers with a clear showcase of plans. A uniform card format with price and parameters helps the subscriber quickly compare services and simplifies choosing a package.",
              tj: "Саҳифаи асосии сомонаи провайдери ТТЛ хизматрасониҳои асосии операторро пешниҳод мекунад. Дар қисми боло нишон, рақами хадамоти дастгирӣ 4884, менюи асосӣ («Хизматрасониҳо», «Интернет барои хона», «Телевизиони ТТЛ-ТВ», «Телефония (NGN/SIP)», «Барои тиҷорат»), инчунин пайвандҳои болоӣ ба хабарҳо, аксияҳо ва тамосҳо, нишонаҳои шабакаҳои иҷтимоӣ, интихобкунандаи забон, тугмаи иваз кардани мавзуъ ва «Кабинети шахсӣ» ҷойгиранд. Қисми болоро слайдер бо таблиғи «ТТЛ-ТВ» — «172 канал + беш аз 2000 филмро тамошо кун» — тасвири телевизор ва нуқтаҳои роҳнамоӣ ишғол мекунад. Дар поён блоки «Хизматрасониҳо» аз се корт ҷойгир аст: телевизиони интерактивии «ТТЛ-ТВ» бо нарх ва ҳайати бастаи каналҳо, «Хонагӣ» (телефонияи NGN/SIP) бо нархгузории зангҳо ва «Навин 30» (интернети бемаҳдуд) бо нишонаи «Нав» ва ҷадвали суръатҳо.\n\nРаванди истифода: корбар бо аксия дар слайдер шинос мешавад, се хизмати асосиро аз рӯйи нарх ва хусусиятҳо муқоиса мекунад ва тавассути меню ба тарифи зарурӣ ё бахш мегузарад.\n\nАҳамият барои тиҷорат: саҳифаи асосии оператори телеком таблиғи аксияҳо ва намоишгоҳи аёнии тарифҳоро муттаҳид мекунад. Формати ягонаи кортҳо бо нарх ва параметрҳо ба муштарӣ кумак мекунад, ки хизматрасониҳоро зуд муқоиса кунад ва интихоби бастаро осон менамояд.",
            },
          },
          {
            slug: "tv",
            title: {
              ru: "Телевидение ТТЛ-ТВ",
              en: "TTL-TV Television",
              tj: "Телевизиони ТТЛ-ТВ",
            },
            imageSrc: "/images/projects/ttl/gallery-3.png",
            BannerSrc: "/images/projects/ttl/gallery-3.png",
            shortInfo: {
              ru: "Тариф на ТВ с составом каналов",
              en: "TV plan with channel breakdown",
              tj: "Тарифи ТВ бо ҳайати каналҳо",
            },
            fullInfo: {
              ru: "Страница «Телевидение ТТЛ-ТВ» подробно раскрывает услугу интерактивного телевидения. В верхней части, под хлебными крошками, размещён баннер с названием «ТТЛ-ТВ», подписью «Смотри 172 канала + более 2000 фильмов» и изображением телевизора. Ниже расположен блок «Тариф»: слева карточка с названием, ценой 25 смн/месяц и кнопкой «Подключить», справа — детализированная таблица состава пакета по жанрам: национальные, музыкальные, детские, познавательные, спортивные, новостные, развлекательные, кино и собственные телеканалы с указанием количества по каждой категории.\n\nПользовательский сценарий: посетитель оценивает наполнение пакета по жанрам, сопоставляет количество каналов с ценой и оформляет подключение кнопкой «Подключить».\n\nЦенность для бизнеса: детальная разбивка тарифа по категориям каналов делает предложение прозрачным и помогает абоненту принять решение на основе фактического состава пакета. Такой формат подходит для любых подписочных услуг с составным наполнением.",
              en: "The TTL-TV Television page details the interactive television service. At the top, below the breadcrumbs, is a banner with the name “TTL-TV”, the caption “Watch 172 channels + over 2000 films” and a TV image. Below is a Plan block: on the left a card with the name, the price of 25 SMN/month and a Connect button; on the right a detailed table of the package composition by genre — national, music, children’s, educational, sports, news, entertainment, film and in-house channels, with the count for each category.\n\nUser journey: the visitor assesses the package contents by genre, compares the channel count against the price and signs up via the Connect button.\n\nBusiness value: a detailed breakdown of the plan by channel category makes the offer transparent and helps the subscriber decide based on the actual package composition. This format suits any subscription service with a composite offering.",
              tj: "Саҳифаи «Телевизиони ТТЛ-ТВ» хизмати телевизиони интерактивиро муфассал ошкор мекунад. Дар қисми боло, зери пайраҳаи навигатсионӣ, баннер бо номи «ТТЛ-ТВ», навишти «172 канал + беш аз 2000 филмро тамошо кун» ва тасвири телевизор ҷойгир аст. Дар поён блоки «Тариф» ҷой дорад: дар тарафи чап корт бо ном, нархи 25 смн/моҳ ва тугмаи «Пайваст кардан», дар тарафи рост — ҷадвали муфассали ҳайати баста аз рӯйи жанрҳо: каналҳои миллӣ, мусиқӣ, кӯдакона, маърифатӣ, варзишӣ, хабарӣ, фароғатӣ, кино ва каналҳои худӣ бо нишон додани шумора барои ҳар гурӯҳ.\n\nРаванди истифода: корбар мундариҷаи бастаро аз рӯйи жанрҳо арзёбӣ мекунад, шумораи каналҳоро бо нарх муқоиса менамояд ва бо тугмаи «Пайваст кардан» пайвастшавиро расмӣ мегардонад.\n\nАҳамият барои тиҷорат: тақсими муфассали тариф аз рӯйи гурӯҳҳои каналҳо пешниҳодро шаффоф мекунад ва ба муштарӣ кумак менамояд, ки дар асоси ҳайати воқеии баста қарор қабул кунад. Ин формат барои ҳар хизмати обунавӣ бо мундариҷаи таркибӣ мувофиқ аст.",
            },
          },
          {
            slug: "telephony",
            title: {
              ru: "Телефония (NGN/SIP)",
              en: "Telephony (NGN/SIP)",
              tj: "Телефония (NGN/SIP)",
            },
            imageSrc: "/images/projects/ttl/gallery-4.png",
            BannerSrc: "/images/projects/ttl/gallery-4.png",
            shortInfo: {
              ru: "Тариф домашней телефонии",
              en: "Home telephony plan",
              tj: "Тарифи телефонияи хонагӣ",
            },
            fullInfo: {
              ru: "Страница «Телефония (NGN/SIP)» представляет услугу голосовой связи. Под хлебными крошками размещён баннер с заголовком «Телефония (NGN/SIP)», подписью «Качественная и удобная связь» и изображением IP-телефона. Ниже расположен блок «Тариф»: карточка «Домашний» с ценой 4 смн/месяц и кнопкой «Подключить», а рядом — таблица тарификации: подключение к сети, выделение телефонного номера и все входящие вызовы бесплатны, исходящие внутри сети и на номера других операторов тарифицируются поминутно. Далее на странице начинается блок преимуществ услуги.\n\nПользовательский сценарий: посетитель изучает стоимость подключения и вызовов, убеждается в бесплатности входящих и подключает услугу.\n\nЦенность для бизнеса: прозрачная поминутная тарификация с явным выделением бесплатных позиций снимает вопросы о скрытых платежах. Наглядная таблица помогает абоненту заранее оценить расходы на связь.",
              en: "The Telephony (NGN/SIP) page presents the voice communication service. Below the breadcrumbs is a banner with the heading “Telephony (NGN/SIP)”, the caption “Quality and convenient communication” and an image of an IP phone. Below is a Plan block: a “Home” card with the price of 4 SMN/month and a Connect button, and next to it a rate table: network connection, phone number allocation and all incoming calls are free, while outgoing calls within the network and to other operators’ numbers are charged per minute. Further down, the service benefits block begins.\n\nUser journey: the visitor studies the connection and call costs, confirms that incoming calls are free and connects the service.\n\nBusiness value: transparent per-minute charging with clearly marked free items removes questions about hidden fees. A clear table helps the subscriber estimate communication costs in advance.",
              tj: "Саҳифаи «Телефония (NGN/SIP)» хизмати алоқаи овозиро пешниҳод мекунад. Зери пайраҳаи навигатсионӣ баннер бо сарлавҳаи «Телефония (NGN/SIP)», навишти «Алоқаи босифат ва қулай» ва тасвири телефони IP ҷойгир аст. Дар поён блоки «Тариф» ҷой дорад: корти «Хонагӣ» бо нархи 4 смн/моҳ ва тугмаи «Пайваст кардан», дар паҳлу — ҷадвали нархгузорӣ: пайвастшавӣ ба шабака, ҷудо кардани рақами телефон ва ҳамаи зангҳои воридотӣ ройгонанд, занги баромада дар дохили шабака ва ба рақамҳои операторони дигар дақиқа ба дақиқа ҳисоб карда мешаванд. Сипас дар саҳифа блоки бартариҳои хизмат оғоз меёбад.\n\nРаванди истифода: корбар арзиши пайвастшавӣ ва занггоҳро меомӯзад, ройгон будани занги воридотиро тасдиқ мекунад ва хизматро пайваст менамояд.\n\nАҳамият барои тиҷорат: нархгузории шаффофи дақиқавӣ бо нишон додани возеҳи мавридҳои ройгон саволҳоро дар бораи пардохтҳои пинҳонӣ бартараф месозад. Ҷадвали аёнӣ ба муштарӣ кумак мекунад, ки хароҷоти алоқаро пешакӣ арзёбӣ намояд.",
            },
          },
          {
            slug: "business",
            title: {
              ru: "Для бизнеса",
              en: "For Business",
              tj: "Барои тиҷорат",
            },
            imageSrc: "/images/projects/ttl/gallery-5.png",
            BannerSrc: "/images/projects/ttl/gallery-5.png",
            shortInfo: {
              ru: "Корпоративные услуги оператора",
              en: "Operator's corporate services",
              tj: "Хизматрасониҳои корпоративии оператор",
            },
            fullInfo: {
              ru: "Страница «Для бизнеса» ориентирована на корпоративных клиентов оператора. Под хлебными крошками размещён баннер с заголовком «Умные решения для вашего бизнеса!», подписью «Со специальными условиями» и деловым изображением. Ниже расположен блок «Услуги» из трёх карточек: «NGN/SIP» (корпоративная телефония с ежемесячной платой за номер и тарификацией вызовов), «Домен» (регистрация и годовая абонентская плата) и «Почта» (регистрация и ежемесячная плата за электронный ящик). Каждая карточка содержит цену и перечень позиций.\n\nПользовательский сценарий: представитель бизнеса просматривает набор корпоративных услуг, сопоставляет условия телефонии, домена и почты и выбирает подходящие сервисы для своей организации.\n\nЦенность для бизнеса: отдельная страница для корпоративного сегмента с телефонией, доменом и почтой показывает, что оператор закрывает базовые ИТ-потребности компаний. Структурированные карточки с ценами облегчают подбор пакета услуг для организации.",
              en: "The For Business page targets the operator’s corporate clients. Below the breadcrumbs is a banner with the heading “Smart solutions for your business!”, the caption “With special terms” and a business image. Below is a Services block of three cards: “NGN/SIP” (corporate telephony with a monthly per-number fee and call rates), “Domain” (registration and an annual subscription fee) and “Mail” (registration and a monthly fee per mailbox). Each card contains a price and a list of items.\n\nUser journey: a business representative reviews the set of corporate services, compares the terms for telephony, domain and mail, and selects the services suitable for their organisation.\n\nBusiness value: a dedicated page for the corporate segment with telephony, domain and mail shows that the operator covers companies’ basic IT needs. Structured cards with prices make it easier to assemble a service package for an organisation.",
              tj: "Саҳифаи «Барои тиҷорат» ба муштариёни корпоративии оператор нигаронида шудааст. Зери пайраҳаи навигатсионӣ баннер бо сарлавҳаи «Ҳалли зирак барои тиҷорати шумо!», навишти «Бо шартҳои махсус» ва тасвири корӣ ҷойгир аст. Дар поён блоки «Хизматрасониҳо» аз се корт ҷой дорад: «NGN/SIP» (телефонияи корпоративӣ бо пардохти моҳонаи рақам ва нархгузории занггоҳ), «Домен» (сабтином ва пардохти солонаи обунавӣ) ва «Почта» (сабтином ва пардохти моҳона барои қуттии электронӣ). Ҳар корт нарх ва рӯйхати мавридҳоро дар бар мегирад.\n\nРаванди истифода: намояндаи тиҷорат маҷмуи хизматрасониҳои корпоративиро аз назар мегузаронад, шартҳои телефония, домен ва почтаро муқоиса мекунад ва хизматҳои мувофиқро барои созмони худ интихоб менамояд.\n\nАҳамият барои тиҷорат: саҳифаи алоҳида барои бахши корпоративӣ бо телефония, домен ва почта нишон медиҳад, ки оператор ниёзҳои асосии ТИ-и ширкатҳоро мепӯшонад. Кортҳои сохторёфта бо нархҳо интихоби бастаи хизматрасониро барои созмон осон мекунанд.",
            },
          },
          {
            slug: "request-contacts",
            title: {
              ru: "Заявка и контакты",
              en: "Request and Contacts",
              tj: "Дархост ва тамосҳо",
            },
            imageSrc: "/images/projects/ttl/gallery-2.png",
            BannerSrc: "/images/projects/ttl/gallery-2.png",
            shortInfo: {
              ru: "Форма заявки и подвал сайта",
              en: "Request form and site footer",
              tj: "Шакли дархост ва поёни сомона",
            },
            fullInfo: {
              ru: "Блок «Заявка на консультацию» и подвал завершают страницу и обеспечивают связь с оператором. Форма заявки размещена на карточке с изображением: заголовок «Заявка на консультацию», пояснение о перезвоне в течение дня, поля «Ваше имя» и «Контактный телефон», группа флажков «Какие услуги желаете подключить?» (домашний интернет, интерактивное ТВ, местная телефония), уведомление о согласии на обработку персональных данных и кнопка «Отправить». Подвал формирует карту сайта: колонки с контактами, разделами о компании, услугами, ссылками на соцсети и номером службы поддержки 4884, а также лицензионные сведения, реквизиты ЗАО «Телекомм Технолоджи» и адрес.\n\nПользовательский сценарий: посетитель оставляет имя и телефон, отмечает интересующие услуги и отправляет заявку либо находит нужную информацию и контакты в подвале.\n\nЦенность для бизнеса: короткая форма с выбором услуг превращает интерес посетителя в заявку и передаёт менеджеру уже квалифицированный запрос. Подвал с лицензиями и реквизитами повышает доверие и служит навигацией по всем разделам сайта.",
              en: "The “Consultation request” block and the footer complete the page and provide contact with the operator. The request form sits on a card with an image: the heading “Consultation request”, a note about a callback within the day, the fields “Your name” and “Contact phone”, a checkbox group “Which services would you like to connect?” (home internet, interactive TV, local telephony), a notice of consent to personal data processing and a Submit button. The footer forms a site map: columns with contacts, company sections, services, social links and the support number 4884, together with licensing details, the registration data of Telecomm Technology JSC and the address.\n\nUser journey: the visitor enters a name and phone number, marks the services of interest and submits the request, or finds the needed information and contacts in the footer.\n\nBusiness value: a short form with service selection turns a visitor’s interest into a request and hands the manager an already qualified enquiry. A footer with licences and registration data builds trust and serves as navigation across all sections of the site.",
              tj: "Блоки «Дархост барои машварат» ва поёни сомона саҳифаро анҷом медиҳанд ва алоқаро бо оператор таъмин мекунанд. Шакли дархост дар корт бо тасвир ҷойгир аст: сарлавҳаи «Дархост барои машварат», тавзеҳ дар бораи занг задан дар давоми рӯз, майдонҳои «Номи шумо» ва «Телефони алоқа», гурӯҳи байрақчаҳои «Кадом хизматҳоро пайваст кардан мехоҳед?» (интернети хонагӣ, ТВ-и интерактивӣ, телефонияи маҳаллӣ), огоҳӣ дар бораи ризоият ба коркарди маълумоти шахсӣ ва тугмаи «Ирсол». Поёни сомона харитаи сомонаро ташкил медиҳад: сутунҳо бо тамосҳо, бахшҳо дар бораи ширкат, хизматрасониҳо, пайвандҳо ба шабакаҳои иҷтимоӣ ва рақами хадамоти дастгирӣ 4884, инчунин маълумоти иҷозатнома, реквизитҳои ҶСП «Телекомм Технолоджи» ва суроға.\n\nРаванди истифода: корбар ном ва телефонро мегузорад, хизматҳои ҷолибро қайд мекунад ва дархостро ирсол менамояд ё маълумот ва тамосҳои заруриро дар поёни сомона меёбад.\n\nАҳамият барои тиҷорат: шакли кӯтоҳ бо интихоби хизматҳо таваҷҷуҳи корбарро ба дархост табдил медиҳад ва ба менеҷер дархости аллакай баҳододашударо медиҳад. Поёни сомона бо иҷозатномаҳо ва реквизитҳо эътимодро баланд мебардорад ва ҳамчун роҳнамоӣ дар ҳамаи бахшҳои сомона хизмат мекунад.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/navo.webp",
    year: "2024",
    tags: ["Laravel", "React", "PostgreSQL", "Flutter", "Nginx"],
    slug: "navo",
  },
  {
    imageSrc: "/images/projects/somontv.webp",
    year: "2024",
    tags: ["Laravel", "React", "PostgreSQL", "Flutter", "Nginx"],
    slug: "somon-tv",
    gallery: [
      "/images/projects/somontv/gallery-1.png",
      "/images/projects/somontv/gallery-2.png",
      "/images/projects/somontv/gallery-3.png",
      "/images/projects/somontv/gallery-4.png",
    ],
    projectComponents: [
      {
        tabName: { ru: "Веб-платформа", en: "Web Platform", tj: "Веб-платформа" },
        items: [
          {
            slug: "home",
            title: {
              ru: "Главная витрина",
              en: "Home Showcase",
              tj: "Намоишгоҳи асосӣ",
            },
            imageSrc: "/images/projects/somontv/gallery-1.png",
            BannerSrc: "/images/projects/somontv/gallery-1.png",
            shortInfo: {
              ru: "Слайдер, фильтры и подборки контента",
              en: "Slider, filters and content rows",
              tj: "Слайдер, филтрҳо ва интихобҳои мундариҷа",
            },
            fullInfo: {
              ru: "Главная страница онлайн-кинотеатра Somon TV построена как витрина видеоконтента в тёмной теме. В шапке размещены логотип, горизонтальное меню разделов («Фильмы», «Сериалы», «Мультсериалы», «Мультфильмы», «Радио», «Музыка», «ТВ»), переключатель языка и кнопка «Войти». Верхнюю область занимает крупный промо-слайдер с постерами премьер и стрелками переключения. Под ним расположена панель фильтров: жанр, год, страна и поле поиска. Ниже контент организован горизонтальными подборками с заголовками «Рекомендуем Вам посмотреть», «Новинки» и «Самое интересное»; каждый фильм представлен постером, названием и меткой «Подписка».\n\nПользовательский сценарий: посетитель просматривает промо-слайдер, выбирает фильм из тематических подборок или уточняет поиск через фильтры по жанру, году и стране, после чего переходит к просмотру.\n\nЦенность для бизнеса: главная страница медиасервиса совмещает продвижение премьер и персональные подборки, удерживая внимание пользователя. Фильтры и ряды рекомендаций помогают быстро находить контент в большом каталоге и повышают вовлечённость и число просмотров.",
              en: "The homepage of the Somon TV online cinema is built as a video-content showcase in a dark theme. The header contains the logo, a horizontal section menu (Films, Series, Animated Series, Cartoons, Radio, Music, TV), a language switcher and a Log in button. The upper area holds a large promo slider with premiere posters and switching arrows. Below it is a filter panel: genre, year, country and a search field. Further down, content is organised into horizontal rows headed “Recommended for you”, “New releases” and “Most interesting”; each film is shown with a poster, a title and a “Subscription” label.\n\nUser journey: the visitor browses the promo slider, selects a film from the themed rows or refines the search through the genre, year and country filters, and then proceeds to watch.\n\nBusiness value: a media service’s homepage combines premiere promotion with personal recommendations, holding the user’s attention. Filters and recommendation rows help find content quickly in a large catalogue and increase engagement and the number of views.",
              tj: "Саҳифаи асосии кинотеатри онлайни Somon TV ҳамчун намоишгоҳи мундариҷаи видеоӣ дар мавзуи торик сохта шудааст. Дар қисми боло нишон, менюи уфуқии бахшҳо («Филмҳо», «Сериалҳо», «Мултсериалҳо», «Мултфилмҳо», «Радио», «Мусиқӣ», «ТВ»), интихобкунандаи забон ва тугмаи «Ворид шудан» ҷойгиранд. Қисми болоро слайдери калони таблиғотӣ бо постерҳои премьераҳо ва тирчаҳои гузариш ишғол мекунад. Дар зери он лавҳаи филтрҳо ҷой дорад: жанр, сол, кишвар ва майдони ҷустуҷӯ. Дар поён мундариҷа бо интихобҳои уфуқӣ бо сарлавҳаҳои «Ба шумо тавсия медиҳем», «Навигариҳо» ва «Ҷолибтарин» ташкил шудааст; ҳар филм бо постер, ном ва нишонаи «Обуна» пешниҳод мешавад.\n\nРаванди истифода: корбар слайдери таблиғотиро мебинад, филмро аз интихобҳои мавзуӣ интихоб мекунад ё ҷустуҷӯро тавассути филтрҳои жанр, сол ва кишвар мушаххас менамояд ва сипас ба тамошо мегузарад.\n\nАҳамият барои тиҷорат: саҳифаи асосии хизмати расонаӣ таблиғи премьераҳо ва тавсияҳои шахсиро муттаҳид карда, таваҷҷуҳи корбарро нигоҳ медорад. Филтрҳо ва қаторҳои тавсия ба зуд ёфтани мундариҷа дар феҳристи калон кумак мекунанд ва ҷалбшавӣ ва шумораи тамошоҳоро баланд мебардоранд.",
            },
          },
          {
            slug: "catalog",
            title: {
              ru: "Каталог фильмов",
              en: "Film Catalogue",
              tj: "Феҳристи филмҳо",
            },
            imageSrc: "/images/projects/somontv/gallery-4.png",
            BannerSrc: "/images/projects/somontv/gallery-4.png",
            shortInfo: {
              ru: "Сетка постеров с постраничной навигацией",
              en: "Poster grid with pagination",
              tj: "Шабакаи постерҳо бо навигатсияи саҳифавӣ",
            },
            fullInfo: {
              ru: "Раздел каталога представляет полный список фильмов в виде плотной сетки постеров. Заголовок «Все» обозначает текущую выборку, а карточки размещены рядами по несколько элементов в строке. Каждая карточка содержит постер, название и метку «Подписка», что делает представление единообразным. Внизу расположена постраничная навигация с большим числом страниц, отражающая масштаб библиотеки контента. В подвале — логотип, иконки соцсетей, значки приложений для Android, Android TV и iOS, а также ссылки на разделы «О нас», «Контакты», «Условия», «Вопросы и ответы» и контактные данные.\n\nПользовательский сценарий: посетитель пролистывает сетку постеров, ориентируется по обложкам и названиям, переходит между страницами каталога и открывает выбранный фильм.\n\nЦенность для бизнеса: сеточный каталог с постраничной навигацией эффективно организует большую библиотеку и делает её удобной для просмотра. Единый формат карточек и наличие приложений для разных платформ подчёркивают масштаб и доступность сервиса.",
              en: "The catalogue section presents the full list of films as a dense grid of posters. The heading “All” marks the current selection, with cards arranged in rows of several items each. Each card contains a poster, a title and a “Subscription” label, keeping the layout uniform. Pagination with a large number of pages at the bottom reflects the scale of the content library. The footer holds the logo, social icons, app badges for Android, Android TV and iOS, and links to About us, Contacts, Terms, Q&A and contact details.\n\nUser journey: the visitor scrolls through the poster grid, navigates by covers and titles, moves between catalogue pages and opens a chosen film.\n\nBusiness value: a grid catalogue with pagination efficiently organises a large library and makes it convenient to browse. A uniform card format and apps for different platforms emphasise the scale and availability of the service.",
              tj: "Бахши феҳрист рӯйхати пурраи филмҳоро дар шакли шабакаи зичи постерҳо пешниҳод мекунад. Сарлавҳаи «Ҳама» интихоби ҷориро нишон медиҳад ва кортҳо дар қаторҳо бо якчанд унсур дар ҳар сатр ҷойгир шудаанд. Ҳар корт постер, ном ва нишонаи «Обуна»-ро дар бар мегирад, ки пешниҳодро якхела мекунад. Дар поён навигатсияи саҳифавӣ бо шумораи зиёди саҳифаҳо ҷойгир аст, ки миқёси китобхонаи мундариҷаро инъикос мекунад. Дар поёни сомона — нишон, нишонаҳои шабакаҳои иҷтимоӣ, аломатҳои барномаҳо барои Android, Android TV ва iOS, инчунин пайвандҳо ба бахшҳои «Дар бораи мо», «Тамосҳо», «Шартҳо», «Саволу ҷавоб» ва маълумоти тамос.\n\nРаванди истифода: корбар шабакаи постерҳоро варақгардон мекунад, аз рӯйи муқова ва номҳо равона мешавад, байни саҳифаҳои феҳрист мегузарад ва филми интихобшударо мекушояд.\n\nАҳамият барои тиҷорат: феҳристи шабакавӣ бо навигатсияи саҳифавӣ китобхонаи калонро самаранок ташкил мекунад ва тамошои онро қулай менамояд. Формати ягонаи кортҳо ва мавҷудияти барномаҳо барои платформаҳои гуногун миқёс ва дастрасии хизматро таъкид мекунанд.",
            },
          },
          {
            slug: "music",
            title: {
              ru: "Музыка",
              en: "Music",
              tj: "Мусиқӣ",
            },
            imageSrc: "/images/projects/somontv/gallery-2.png",
            BannerSrc: "/images/projects/somontv/gallery-2.png",
            shortInfo: {
              ru: "Раздел музыкальных сборников и клипов",
              en: "Section of music collections and clips",
              tj: "Бахши маҷмуаҳо ва клипҳои мусиқӣ",
            },
            fullInfo: {
              ru: "Раздел «Музыка» организует музыкальный контент по тому же принципу, что и видеокаталог. В шапке к меню добавлены кнопка «30 дня подписки бесплатно» и аватар пользователя. Панель фильтров включает категорию, жанр, год и поиск. Основную область занимает сетка карточек со сборниками, концертами и альбомами: обложка, название и год выпуска. Представлены как таджикские сборники и концерты, так и популярные исполнители. Внизу — постраничная навигация и подвал с приложениями и контактами.\n\nПользовательский сценарий: посетитель выбирает категорию или жанр, просматривает сетку музыкальных сборников по обложкам и годам и открывает интересующий материал для прослушивания.\n\nЦенность для бизнеса: единый принцип оформления для видео и музыки обеспечивает целостный пользовательский опыт внутри одного сервиса. Расширение контента за пределы фильмов увеличивает время, проводимое пользователем на платформе, и ценность подписки.",
              en: "The Music section organises musical content on the same principle as the video catalogue. The header adds a “30 days free subscription” button and a user avatar to the menu. The filter panel includes category, genre, year and search. The main area holds a grid of cards with collections, concerts and albums: cover, title and release year. Both Tajik collections and concerts and popular performers are featured. At the bottom are pagination and a footer with apps and contacts.\n\nUser journey: the visitor selects a category or genre, browses the grid of music collections by covers and years, and opens the material of interest to listen.\n\nBusiness value: a single design principle for video and music provides a coherent user experience within one service. Extending content beyond films increases the time users spend on the platform and the value of the subscription.",
              tj: "Бахши «Мусиқӣ» мундариҷаи мусиқиро бо ҳамон принсипе, ки феҳристи видеоӣ дорад, ташкил мекунад. Дар қисми боло ба меню тугмаи «30 рӯз обунаи ройгон» ва аватари корбар илова шудааст. Лавҳаи филтрҳо гурӯҳ, жанр, сол ва ҷустуҷӯро дар бар мегирад. Қисми асосиро шабакаи кортҳо бо маҷмуаҳо, консертҳо ва албомҳо ишғол мекунад: муқова, ном ва соли барориш. Ҳам маҷмуаҳо ва консертҳои тоҷикӣ ва ҳам ҳунармандони машҳур пешниҳод шудаанд. Дар поён — навигатсияи саҳифавӣ ва поёни сомона бо барномаҳо ва тамосҳо.\n\nРаванди истифода: корбар гурӯҳ ё жанрро интихоб мекунад, шабакаи маҷмуаҳои мусиқиро аз рӯйи муқова ва солҳо аз назар мегузаронад ва маводи ҷолибро барои гӯш кардан мекушояд.\n\nАҳамият барои тиҷорат: принсипи ягонаи ороиш барои видео ва мусиқӣ таҷрибаи мукаммали корбарро дар дохили як хизмат таъмин мекунад. Васеъ кардани мундариҷа берун аз филмҳо вақти дар платформа сарфшавандаи корбар ва арзиши обунаро зиёд мекунад.",
            },
          },
          {
            slug: "radio",
            title: {
              ru: "Радио",
              en: "Radio",
              tj: "Радио",
            },
            imageSrc: "/images/projects/somontv/gallery-3.png",
            BannerSrc: "/images/projects/somontv/gallery-3.png",
            shortInfo: {
              ru: "Подборки радиостанций с логотипами",
              en: "Radio station rows with logos",
              tj: "Интихобҳои радиоҳо бо нишонаҳо",
            },
            fullInfo: {
              ru: "Раздел «Радио» предоставляет доступ к прослушиванию радиостанций. Контент организован горизонтальными рядами: «Избранное» и «Популярные». Каждая станция представлена квадратной плиткой с логотипом, что делает выбор визуальным и узнаваемым. Ряды снабжены стрелками прокрутки для перехода к дополнительным станциям. В подборке присутствуют как международные, так и местные радиостанции. Внизу расположены значки мобильных приложений и служебные ссылки подвала.\n\nПользовательский сценарий: посетитель находит нужную станцию по логотипу в рядах «Избранное» или «Популярные», при необходимости прокручивает список стрелками и запускает прослушивание.\n\nЦенность для бизнеса: раздел радио дополняет видео- и музыкальный контент и превращает сервис в универсальную развлекательную платформу. Визуальный выбор станций по логотипам упрощает навигацию и делает раздел удобным для быстрого запуска эфира.",
              en: "The Radio section provides access to listening to radio stations. Content is organised into horizontal rows: “Favourites” and “Popular”. Each station is shown as a square tile with a logo, making selection visual and recognisable. The rows have scroll arrows for reaching additional stations. The selection features both international and local radio stations. At the bottom are mobile app badges and the footer’s utility links.\n\nUser journey: the visitor finds the desired station by its logo in the Favourites or Popular rows, scrolls the list with the arrows if needed, and starts listening.\n\nBusiness value: the radio section complements video and music content and turns the service into a universal entertainment platform. Choosing stations visually by their logos simplifies navigation and makes the section convenient for quickly starting a broadcast.",
              tj: "Бахши «Радио» дастрасиро ба гӯш кардани радиоҳо фароҳам меорад. Мундариҷа бо қаторҳои уфуқӣ ташкил шудааст: «Дӯстдошта» ва «Маъмул». Ҳар радио ҳамчун чоркунҷаи хишти бо нишона пешниҳод мешавад, ки интихобро аёнӣ ва шинохта мекунад. Қаторҳо бо тирчаҳои варақгардонӣ барои гузариш ба радиоҳои иловагӣ муҷаҳҳазанд. Дар интихоб ҳам радиоҳои байналмилалӣ ва ҳам маҳаллӣ ҳастанд. Дар поён нишонаҳои барномаҳои мобилӣ ва пайвандҳои хидматии поёни сомона ҷойгиранд.\n\nРаванди истифода: корбар радиои заруриро аз рӯйи нишона дар қаторҳои «Дӯстдошта» ё «Маъмул» меёбад, ҳангоми зарурат рӯйхатро бо тирчаҳо варақгардон мекунад ва гӯш карданро оғоз менамояд.\n\nАҳамият барои тиҷорат: бахши радио мундариҷаи видеоӣ ва мусиқиро пурра мекунад ва хизматро ба платформаи универсалии фароғатӣ табдил медиҳад. Интихоби аёнии радиоҳо аз рӯйи нишонаҳо навигатсияро осон мекунад ва бахшро барои оғози зуди пахш қулай мегардонад.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/zudsms.webp",
    year: "2024",
    tags: ["Node.js", "JavaScript", "MySQL", "HTML5 / CSS3", "REST API"],
    slug: "zudsms",
    gallery: [
      "/images/projects/zudSMS/gallery-1.png",
      "/images/projects/zudSMS/gallery-2.png",
      "/images/projects/zudSMS/gallery-3.png",
      "/images/projects/zudSMS/gallery-4.png",
      "/images/projects/zudSMS/gallery-5.png",
    ],
    projectComponents: [
      {
        tabName: { ru: "Лендинг", en: "Landing", tj: "Лендинг" },
        items: [
          {
            slug: "hero-use-cases",
            title: {
              ru: "Первый экран и сферы применения",
              en: "Hero and Use Cases",
              tj: "Экрани аввал ва соҳаҳои истифода",
            },
            imageSrc: "/images/projects/zudSMS/gallery-1.png",
            BannerSrc: "/images/projects/zudSMS/gallery-1.png",
            shortInfo: {
              ru: "Оффер, показатели и отрасли применения",
              en: "Offer, metrics and applicable industries",
              tj: "Пешниҳод, нишондиҳандаҳо ва соҳаҳо",
            },
            fullInfo: {
              ru: "Первый экран лендинга ЗудСМС представляет сервис массовой SMS-рассылки. В шапке размещены логотип с подписью «SMS рассылка», меню разделов («Главная», «Преимущества», «Пакеты», «Контакты», «API Документация»), переключатель языков RU/EN/TJ и кнопка «Личный кабинет». На зелёном баннере расположены название сервиса, заголовок «Рассылка SMS в Таджикистане для бизнеса» и пояснение о рассылке на номера всех мобильных операторов. Под текстом вынесены три показателя: доставляемость 98%, более 1000 клиентов и поддержка 24/7. Ниже, в блоке «Сферы применения», размещена сетка из восьми карточек с иконками отраслей: страховые компании, интернет-магазины, такси и доставка, медицинские центры, банки и платёжные системы, образовательные учреждения, туристические агентства, салоны и рестораны.\n\nПользовательский сценарий: посетитель считывает суть услуги и ключевые показатели, а затем в блоке отраслей находит свою сферу и убеждается, что сервис подходит под его задачи.\n\nЦенность для бизнеса: сочетание оффера, доказательных цифр и перечня отраслей быстро формирует доверие и показывает применимость услуги. Карточки сфер применения помогают посетителю из любой отрасли соотнести сервис со своими сценариями коммуникации с клиентами.",
              en: "The ZudSMS landing hero presents the mass SMS distribution service. The header contains the logo with the caption “SMS distribution”, a section menu (Home, Advantages, Packages, Contacts, API Documentation), an RU/EN/TJ language switcher and a Personal Account button. The green banner holds the service name, the headline “SMS distribution in Tajikistan for business” and a note about sending to the numbers of all mobile operators. Below the text are three metrics: 98% deliverability, over 1000 clients and 24/7 support. Further down, the Use Cases block contains a grid of eight cards with industry icons: insurance companies, online stores, taxi and delivery, medical centres, banks and payment systems, educational institutions, travel agencies, and salons and restaurants.\n\nUser journey: the visitor grasps the essence of the service and its key metrics, then finds their own field among the industry cards and confirms the service suits their tasks.\n\nBusiness value: combining an offer, evidence figures and a list of industries quickly builds trust and shows the service’s applicability. Use-case cards help a visitor from any industry relate the service to their own customer-communication scenarios.",
              tj: "Экрани аввали лендинги ЗудСМС хизмати паҳнкунии оммавии SMS-ро пешниҳод мекунад. Дар қисми боло нишон бо навишти «SMS рассылка», менюи бахшҳо («Асосӣ», «Бартариҳо», «Пакетҳо», «Тамосҳо», «Ҳуҷҷатнигории API»), интихобкунандаи забонҳои RU/EN/TJ ва тугмаи «Кабинети шахсӣ» ҷойгиранд. Дар баннери сабз номи хизмат, сарлавҳаи «Паҳнкунии SMS дар Тоҷикистон барои тиҷорат» ва тавзеҳ дар бораи паҳнкунӣ ба рақамҳои ҳамаи операторони мобилӣ ҷой доранд. Зери матн се нишондиҳанда оварда шудааст: расонидан 98%, беш аз 1000 муштарӣ ва дастгирии 24/7. Дар поён, дар блоки «Соҳаҳои истифода», шабакаи ҳашт корт бо нишонаҳои соҳаҳо ҷойгир аст: ширкатҳои суғуртавӣ, мағозаҳои интернетӣ, такси ва расонидан, марказҳои тиббӣ, бонкҳо ва системаҳои пардохт, муассисаҳои таълимӣ, агентиҳои сайёҳӣ, салонҳо ва тарабхонаҳо.\n\nРаванди истифода: корбар моҳияти хизмат ва нишондиҳандаҳои асосиро дарк мекунад ва сипас дар блоки соҳаҳо соҳаи худро меёбад ва боварӣ ҳосил мекунад, ки хизмат ба вазифаҳои ӯ мувофиқ аст.\n\nАҳамият барои тиҷорат: якҷоякунии пешниҳод, рақамҳои исботӣ ва рӯйхати соҳаҳо зуд эътимодро ташкил медиҳад ва мувофиқати хизматро нишон медиҳад. Кортҳои соҳаҳои истифода ба корбар аз ҳар соҳа кумак мекунанд, ки хизматро бо сенарияҳои муоширати худ бо мизоҷон мувофиқ созад.",
            },
          },
          {
            slug: "demo",
            title: {
              ru: "Демо-отправка SMS",
              en: "SMS Demo",
              tj: "Демо-ирсоли SMS",
            },
            imageSrc: "/images/projects/zudSMS/gallery-5.png",
            BannerSrc: "/images/projects/zudSMS/gallery-5.png",
            shortInfo: {
              ru: "Интерактивный предпросмотр сообщения",
              en: "Interactive message preview",
              tj: "Пешнамоиши интерактивии паём",
            },
            fullInfo: {
              ru: "Блок «Живой демо-пример» показывает работу сервиса в интерактивном виде. Слева размещены метка «Живой демо-пример», заголовок «SMS-рассылка для вашего бизнеса» и пояснение о создании персонализированных рассылок с мгновенной доставкой. Под текстом расположена карточка предпросмотра с полями «Имя отправителя» (заполнено значением ZudSMS), «Текст сообщения» со счётчиком символов 0/160 и кнопкой «Отправить». Справа изображён макет телефона с чатом ZudSMS, где показаны примеры сообщений: скидка, код подтверждения, напоминание о записи и статус заказа. Ниже начинается блок «Тарифные пакеты».\n\nПользовательский сценарий: посетитель вводит имя отправителя и текст, видит ограничение по длине сообщения и наглядно представляет, как рассылка будет выглядеть на телефоне получателя.\n\nЦенность для бизнеса: интерактивный демонстрационный блок позволяет оценить сервис до регистрации и снижает барьер для пробного использования. Предпросмотр с примерами реальных сценариев (коды, напоминания, статусы) помогает посетителю понять практическую пользу рассылки.",
              en: "The “Live demo example” block shows how the service works interactively. On the left are the “Live demo example” label, the headline “SMS distribution for your business” and a note about creating personalised campaigns with instant delivery. Below the text is a preview card with the fields “Sender name” (filled with ZudSMS), “Message text” with a 0/160 character counter and a Send button. On the right is a phone mockup with a ZudSMS chat showing sample messages: a discount, a confirmation code, an appointment reminder and an order status. Below, the Pricing Packages block begins.\n\nUser journey: the visitor enters a sender name and text, sees the message length limit and gets a clear idea of how the campaign will look on the recipient’s phone.\n\nBusiness value: an interactive demo block lets the service be assessed before registration and lowers the barrier to trial use. A preview with real-scenario examples (codes, reminders, statuses) helps the visitor understand the practical benefit of the service.",
              tj: "Блоки «Намунаи зиндаи демо» кори хизматро дар шакли интерактивӣ нишон медиҳад. Дар тарафи чап нишонаи «Намунаи зиндаи демо», сарлавҳаи «Паҳнкунии SMS барои тиҷорати шумо» ва тавзеҳ дар бораи эҷоди паҳнкунии фардикунонидашуда бо расонидани фаврӣ ҷойгиранд. Зери матн корти пешнамоиш бо майдонҳои «Номи фиристанда» (бо ZudSMS пур карда шуда), «Матни паём» бо ҳисобкунаки аломатҳо 0/160 ва тугмаи «Ирсол» ҷой дорад. Дар тарафи рост макети телефон бо чати ZudSMS тасвир шудааст, ки намунаҳои паёмҳо: тахфиф, коди тасдиқ, ёдоварӣ дар бораи навбат ва ҳолати фармоишро нишон медиҳад. Дар поён блоки «Пакетҳои тарифӣ» оғоз меёбад.\n\nРаванди истифода: корбар номи фиристанда ва матнро ворид мекунад, маҳдудияти дарозии паёмро мебинад ва аён тасаввур мекунад, ки паҳнкунӣ дар телефони гиранда чӣ гуна ба назар мерасад.\n\nАҳамият барои тиҷорат: блоки намоишии интерактивӣ имкон медиҳад, ки хизмат пеш аз сабтином арзёбӣ шавад ва монеаро барои истифодаи санҷишӣ кам мекунад. Пешнамоиш бо намунаҳои сенарияҳои воқеӣ (кодҳо, ёдовариҳо, ҳолатҳо) ба корбар кумак мекунад, ки фоидаи амалии паҳнкуниро дарк намояд.",
            },
          },
          {
            slug: "advantages",
            title: {
              ru: "Преимущества",
              en: "Advantages",
              tj: "Бартариҳо",
            },
            imageSrc: "/images/projects/zudSMS/gallery-2.png",
            BannerSrc: "/images/projects/zudSMS/gallery-2.png",
            shortInfo: {
              ru: "Причины выбрать сервис рассылки",
              en: "Reasons to choose the service",
              tj: "Сабабҳои интихоби хизмат",
            },
            fullInfo: {
              ru: "Раздел «Наши преимущества» аргументирует выбор сервиса. Над сеткой размещены название бренда, заголовок «Наши преимущества» и подзаголовок о запуске рассылки SMS в Таджикистане. Шесть карточек с иконками раскрывают ключевые доводы: низкая стоимость за 1 SMS (конкурентные цены для эффективного маркетинга), высокая скорость и эффективность (мгновенная доставка с максимальным охватом), отправка всем операторам (поддержка всех мобильных операторов без ограничений), использование своих шаблонов (создание и сохранение персонализированных заготовок), автоматизированная рассылка через API (интеграция с системой клиента) и надёжность и безопасность (защищённая платформа с гарантией конфиденциальности).\n\nПользовательский сценарий: посетитель просматривает карточки преимуществ и выделяет для себя значимые аргументы — например, цену, скорость, охват операторов или API-интеграцию.\n\nЦенность для бизнеса: структурированный перечень преимуществ отвечает на основные критерии выбора SMS-сервиса и снимает возражения. Акцент на цене, охвате и API одновременно закрывает потребности маркетинга и технической интеграции.",
              en: "The “Our advantages” section justifies choosing the service. Above the grid are the brand name, the headline “Our advantages” and a subheading about launching SMS distribution in Tajikistan. Six icon cards spell out the key arguments: low cost per SMS (competitive prices for effective marketing), high speed and efficiency (instant delivery with maximum reach), sending to all operators (support for all mobile operators without restrictions), using your own templates (creating and saving personalised snippets), automated distribution via API (integration with the client’s system) and reliability and security (a secure platform with a confidentiality guarantee).\n\nUser journey: the visitor reviews the advantage cards and singles out the arguments that matter to them — for example price, speed, operator reach or API integration.\n\nBusiness value: a structured list of advantages addresses the main criteria for choosing an SMS service and removes objections. Emphasising price, reach and API at once covers both marketing needs and technical integration.",
              tj: "Бахши «Бартариҳои мо» интихоби хизматро асоснок мекунад. Болои шабака номи бренд, сарлавҳаи «Бартариҳои мо» ва зерсарлавҳа дар бораи оғози паҳнкунии SMS дар Тоҷикистон ҷойгиранд. Шаш корт бо нишонаҳо далелҳои асосиро ошкор мекунанд: арзиши пасти 1 SMS (нархҳои рақобатпазир барои маркетинги самаранок), суръати баланд ва самаранокӣ (расонидани фаврӣ бо фарогирии ҳадди аксар), ирсол ба ҳамаи операторон (дастгирии ҳамаи операторони мобилӣ бе маҳдудият), истифодаи шаблонҳои худӣ (эҷод ва нигоҳдории заготовкаҳои фардикунонидашуда), паҳнкунии худкор тавассути API (интегратсия бо системаи муштарӣ) ва боэътимодӣ ва амният (платформаи ҳифзшуда бо кафолати махфият).\n\nРаванди истифода: корбар кортҳои бартариҳоро аз назар мегузаронад ва далелҳои муҳимро барои худ ҷудо мекунад — масалан нарх, суръат, фарогирии операторон ё интегратсияи API.\n\nАҳамият барои тиҷорат: рӯйхати сохтории бартариҳо ба меъёрҳои асосии интихоби хизмати SMS ҷавоб медиҳад ва эродҳоро бартараф месозад. Таъкид ба нарх, фарогирӣ ва API ҳамзамон ниёзҳои маркетинг ва интегратсияи техникиро мепӯшонад.",
            },
          },
          {
            slug: "packages",
            title: {
              ru: "Тарифные пакеты",
              en: "Pricing Packages",
              tj: "Пакетҳои тарифӣ",
            },
            imageSrc: "/images/projects/zudSMS/gallery-3.png",
            BannerSrc: "/images/projects/zudSMS/gallery-3.png",
            shortInfo: {
              ru: "Линейка пакетов по объёму SMS",
              en: "Range of packages by SMS volume",
              tj: "Хатти пакетҳо аз рӯйи ҳаҷми SMS",
            },
            fullInfo: {
              ru: "Раздел «Тарифные пакеты» представляет линейку предложений, отличающихся объёмом сообщений и ценой. Пакеты оформлены цветными карточками с иконкой, названием, количеством SMS, стоимостью в сомони и сроком действия «1 месяц»; каждую карточку завершает кнопка «Выбрать пакет». В линейке представлены «Плюс» (2 000 SMS), «Старт» (5 000 SMS), «Базовый» (10 000 SMS), «Стандарт» (25 000 SMS), «Бизнес» (50 000 SMS) и «Про» (100 000 SMS), а также стартовые варианты. Отдельные пакеты выделены метками «Больше возможностей», «Популярный», «Лучший выбор» и «Самый популярный».\n\nПользовательский сценарий: посетитель сопоставляет объём сообщений и цену, ориентируется на выделенные рекомендованные пакеты и выбирает вариант под планируемый объём рассылок.\n\nЦенность для бизнеса: широкая линейка пакетов охватывает клиентов с разным объёмом рассылок — от первых сообщений до крупных кампаний. Цветовое выделение и метки-рекомендации направляют выбор и помогают клиенту быстрее определиться с подходящим тарифом.",
              en: "The Pricing Packages section presents a range of offers differing in message volume and price. Packages are laid out as coloured cards with an icon, a name, an SMS count, a price in somoni and a “1 month” validity period; each card ends with a Select package button. The range includes “Plus” (2,000 SMS), “Start” (5,000 SMS), “Basic” (10,000 SMS), “Standard” (25,000 SMS), “Business” (50,000 SMS) and “Pro” (100,000 SMS), as well as starter options. Individual packages are marked with “More features”, “Popular”, “Best choice” and “Most popular” labels.\n\nUser journey: the visitor compares message volume and price, is guided by the highlighted recommended packages and selects an option for their planned distribution volume.\n\nBusiness value: a broad range of packages covers clients with different distribution volumes — from first messages to large campaigns. Colour highlighting and recommendation labels steer the choice and help the client settle on a suitable plan faster.",
              tj: "Бахши «Пакетҳои тарифӣ» хатти пешниҳодҳоеро пешниҳод мекунад, ки бо ҳаҷми паём ва нарх фарқ мекунанд. Пакетҳо ҳамчун кортҳои рангин бо нишона, ном, шумораи SMS, арзиш бо сомонӣ ва мӯҳлати амали «1 моҳ» таҳия шудаанд; ҳар кортро тугмаи «Интихоби пакет» анҷом медиҳад. Дар хат «Плюс» (2 000 SMS), «Старт» (5 000 SMS), «Базавӣ» (10 000 SMS), «Стандарт» (25 000 SMS), «Бизнес» (50 000 SMS) ва «Про» (100 000 SMS), инчунин вариантҳои ибтидоӣ пешниҳод шудаанд. Пакетҳои алоҳида бо нишонаҳои «Имкониятҳои бештар», «Маъмул», «Интихоби беҳтарин» ва «Маъмултарин» барҷаста шудаанд.\n\nРаванди истифода: корбар ҳаҷми паём ва нархро муқоиса мекунад, ба пакетҳои тавсияшудаи барҷаста нигаронида мешавад ва вариантро барои ҳаҷми банақшагирифтаи паҳнкунӣ интихоб менамояд.\n\nАҳамият барои тиҷорат: хатти васеи пакетҳо муштариёнро бо ҳаҷми гуногуни паҳнкунӣ фаро мегирад — аз паёмҳои аввал то маъракаҳои калон. Барҷастагии рангӣ ва нишонаҳои тавсия интихобро равона мекунанд ва ба муштарӣ кумак менамоянд, ки зудтар тарифи мувофиқро муайян созад.",
            },
          },
          {
            slug: "contacts-payments",
            title: {
              ru: "Контакты и оплата",
              en: "Contacts and Payment",
              tj: "Тамосҳо ва пардохт",
            },
            imageSrc: "/images/projects/zudSMS/gallery-4.png",
            BannerSrc: "/images/projects/zudSMS/gallery-4.png",
            shortInfo: {
              ru: "Форма связи, платёжные системы и подвал",
              en: "Contact form, payment systems and footer",
              tj: "Шакли алоқа, системаҳои пардохт ва поён",
            },
            fullInfo: {
              ru: "Завершающий блок объединяет форму связи, доступные способы оплаты и подвал сайта. Слева расположена форма обратной связи с кнопкой «Отправить», справа — реквизиты «ИП Душанбе-Софт» с адресом в Душанбе. Отдельным блоком «Платёжные системы» показаны четыре способа оплаты в виде карточек с логотипами: ALIF (платёжная система), Корти Милли (национальная карта), Душанбе Сити (городская платёжная система) и VISA (международная карта). Ниже размещён баннер LiveChat, а в подвале — логотип с блоком «О компании», колонка «Навигация» (главная, преимущества, пакеты, контакты) и колонка «Контакты» с телефоном, почтой и адресом; в самом низу — строка авторских прав.\n\nПользовательский сценарий: посетитель отправляет обращение через форму, проверяет доступные способы оплаты и находит контактные данные и реквизиты в подвале.\n\nЦенность для бизнеса: явное указание платёжных систем, включая локальные карты и международную VISA, снимает вопрос об удобстве оплаты. Форма связи и подробные реквизиты повышают доверие и упрощают переход от интереса к обращению.",
              en: "The closing block combines a contact form, available payment methods and the site footer. On the left is a feedback form with a Send button; on the right are the “IE Dushanbe-Soft” details with an address in Dushanbe. A separate “Payment systems” block shows four payment methods as cards with logos: ALIF (payment system), Korti Milli (national card), Dushanbe City (municipal payment system) and VISA (international card). Below is a LiveChat banner, while the footer holds a logo with an “About the company” block, a Navigation column (home, advantages, packages, contacts) and a Contacts column with phone, email and address; a copyright line sits at the very bottom.\n\nUser journey: the visitor sends an enquiry through the form, checks the available payment methods and finds the contact details and company data in the footer.\n\nBusiness value: explicitly listing payment systems, including local cards and international VISA, removes questions about payment convenience. A contact form and detailed company data build trust and ease the move from interest to enquiry.",
              tj: "Блоки хотимавӣ шакли алоқа, роҳҳои дастраси пардохт ва поёни сомонаро муттаҳид мекунад. Дар тарафи чап шакли алоқаи баръакс бо тугмаи «Ирсол», дар тарафи рост — реквизитҳои «Соҳибкори инфиродии Душанбе-Софт» бо суроға дар Душанбе ҷойгиранд. Дар блоки алоҳидаи «Системаҳои пардохт» чор роҳи пардохт дар шакли кортҳо бо нишонаҳо нишон дода шудаанд: ALIF (системаи пардохт), Корти Миллӣ (корти миллӣ), Душанбе Сити (системаи пардохти шаҳрӣ) ва VISA (корти байналмилалӣ). Дар поён баннери LiveChat ҷойгир аст ва дар поёни сомона — нишон бо блоки «Дар бораи ширкат», сутуни «Навигатсия» (асосӣ, бартариҳо, пакетҳо, тамосҳо) ва сутуни «Тамосҳо» бо телефон, почта ва суроға; дар поёнтарин — сатри ҳуқуқи муаллиф.\n\nРаванди истифода: корбар муроҷиатро тавассути шакл ирсол мекунад, роҳҳои дастраси пардохтро месанҷад ва маълумоти тамос ва реквизитҳоро дар поёни сомона меёбад.\n\nАҳамият барои тиҷорат: нишон додани возеҳи системаҳои пардохт, аз ҷумла кортҳои маҳаллӣ ва VISA-и байналмилалӣ, саволро дар бораи қулаии пардохт бартараф месозад. Шакли алоқа ва реквизитҳои муфассал эътимодро баланд мебардоранд ва гузаришро аз таваҷҷуҳ ба муроҷиат осон мекунанд.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/sunduk.webp",
    year: "2020",
    tags: [
      "PHP (Kohana Framework)",
      "JavaScript",
      "jQuery",
      "HTML5 / CSS3",
      "MySQL",
    ],
    slug: "sunduk-tv",
    gallery: [
      "/images/projects/sandukTV/gallery-1.png",
      "/images/projects/sandukTV/gallery-2.png",
      "/images/projects/sandukTV/gallery-3.png",
      "/images/projects/sandukTV/gallery-4.png",
      "/images/projects/sandukTV/gallery-5.png",
    ],
    projectComponents: [
      {
        tabName: { ru: "Лендинг", en: "Landing", tj: "Лендинг" },
        items: [
          {
            slug: "hero",
            title: {
              ru: "Первый экран",
              en: "Hero Section",
              tj: "Экрани аввал",
            },
            imageSrc: "/images/projects/sandukTV/gallery-1.png",
            BannerSrc: "/images/projects/sandukTV/gallery-1.png",
            shortInfo: {
              ru: "Оффер IPTV, акция и логотипы каналов",
              en: "IPTV offer, promo and channel logos",
              tj: "Пешниҳоди IPTV, аксия ва нишонаҳои каналҳо",
            },
            fullInfo: {
              ru: "Первый экран лендинга Sunduk TV представляет услугу интерактивного телевидения. В шапке на тёмно-синем фоне размещены логотип, меню разделов («Стоимость», «Как подключить», «Преимущества», «Контакты»), ссылка «Начать чат» и выделенная кнопка «Подключить». Слева расположены заголовок «Российское интерактивное ТВ в UltraHD!», описание о более чем 310 каналах русского, украинского и балтийского телевидения на любых устройствах, упоминание встроенного кинотеатра, а также кнопки «Подключить» и «Попробовать бесплатно». Справа — промо-баннер со сценой домашнего просмотра, акцией «скидка 30% на все абонементы» и скидкой на приставку, под которым выстроены логотипы популярных телеканалов и подпись о числе каналов.\n\nПользовательский сценарий: посетитель считывает суть предложения и качество (UltraHD, число каналов), обращает внимание на акцию и переходит к подключению или бесплатному пробному доступу.\n\nЦенность для бизнеса: первый экран IPTV-сервиса совмещает чёткий оффер, доказательство ассортимента (логотипы каналов) и акционный стимул. Двойной призыв — «Подключить» и «Попробовать бесплатно» — охватывает и готовых к покупке, и сомневающихся посетителей.",
              en: "The Sunduk TV landing hero presents the interactive television service. On a dark-blue background, the header contains the logo, a section menu (Pricing, How to connect, Advantages, Contacts), a “Start chat” link and a highlighted Connect button. On the left are the headline “Russian interactive TV in UltraHD!”, a description of over 310 Russian, Ukrainian and Baltic channels on any device, a mention of a built-in cinema, and the Connect and Try for free buttons. On the right is a promo banner with a home-viewing scene, a “30% off all subscriptions” promotion and a set-top box discount, below which the logos of popular channels are lined up with a caption about the number of channels.\n\nUser journey: the visitor grasps the essence of the offer and the quality (UltraHD, channel count), notes the promotion and moves to connect or to free trial access.\n\nBusiness value: an IPTV service hero combines a clear offer, proof of the range (channel logos) and a promotional incentive. A dual call to action — Connect and Try for free — covers both ready-to-buy and hesitant visitors.",
              tj: "Экрани аввали лендинги Sunduk TV хизмати телевизиони интерактивиро пешниҳод мекунад. Дар қисми боло дар заминаи кабуди торик нишон, менюи бахшҳо («Арзиш», «Чӣ тавр пайваст кардан», «Бартариҳо», «Тамосҳо»), пайванди «Оғози чат» ва тугмаи барҷастаи «Пайваст кардан» ҷойгиранд. Дар тарафи чап сарлавҳаи «Телевизиони интерактивии русӣ дар UltraHD!», тавсиф дар бораи беш аз 310 канали телевизиони русӣ, украинӣ ва балтикӣ дар ҳама дастгоҳҳо, зикри кинотеатри дарунсохт, инчунин тугмаҳои «Пайваст кардан» ва «Ройгон санҷидан» ҷой доранд. Дар тарафи рост — баннери таблиғотӣ бо саҳнаи тамошои хонагӣ, аксияи «тахфифи 30% ба ҳамаи абонементҳо» ва тахфиф ба приставка, ки дар зери он нишонаҳои каналҳои машҳур ва навишт дар бораи шумораи каналҳо ҷойгиранд.\n\nРаванди истифода: корбар моҳияти пешниҳод ва сифатро (UltraHD, шумораи каналҳо) дарк мекунад, ба аксия таваҷҷуҳ мекунад ва ба пайвастшавӣ ё дастрасии санҷишии ройгон мегузарад.\n\nАҳамият барои тиҷорат: экрани аввали хизмати IPTV пешниҳоди возеҳ, исботи гуногунӣ (нишонаҳои каналҳо) ва ҳавасмандии аксияро муттаҳид мекунад. Даъвати дугона — «Пайваст кардан» ва «Ройгон санҷидан» — ҳам меҳмонони ба харид тайёр ва ҳам дудилаву шаккокро фаро мегирад.",
            },
          },
          {
            slug: "pricing",
            title: {
              ru: "Стоимость",
              en: "Pricing",
              tj: "Арзиш",
            },
            imageSrc: "/images/projects/sandukTV/gallery-4.png",
            BannerSrc: "/images/projects/sandukTV/gallery-4.png",
            shortInfo: {
              ru: "Пакеты по срокам со скидкой и допопцией",
              en: "Term packages with discount and add-on",
              tj: "Пакетҳо аз рӯйи мӯҳлат бо тахфиф ва иловагӣ",
            },
            fullInfo: {
              ru: "Раздел «Стоимость» представляет тарифы по длительности подписки. В верхней части размещён блок дополнительной опции: флажок добавления пульта «IPTVplayer Magic Remote» с ценой и условием автоматической скидки 50% при заказе на 12 или 24 месяца, а также изображение устройства. Ниже — четыре карточки пакетов по срокам: 30, 180, 365 и 730 дней. В каждой карточке показаны срок, зачёркнутая исходная цена и итоговая цена со скидкой в евро, а также кнопка «Подключить». Под пакетами расположено предложение заказать бесплатное тестирование на 7 дней для тех, кто не определился.\n\nПользовательский сценарий: посетитель сравнивает цены по срокам, видит выгоду от длинных подписок, при необходимости добавляет пульт и оформляет подключение либо выбирает бесплатное тестирование.\n\nЦенность для бизнеса: тарифы по срокам с наглядной скидкой мотивируют выбирать длительные подписки, а дополнительная опция увеличивает средний чек. Предложение бесплатного теста снижает барьер для сомневающихся и помогает конвертировать их в абонентов.",
              en: "The Pricing section presents plans by subscription length. At the top is an add-on block: a checkbox to add the “IPTVplayer Magic Remote” with its price and a condition of an automatic 50% discount when ordering for 12 or 24 months, along with an image of the device. Below are four term-based package cards: 30, 180, 365 and 730 days. Each card shows the term, the crossed-out original price and the final discounted price in euros, plus a Connect button. Below the packages is an offer to order a free 7-day trial for those who are undecided.\n\nUser journey: the visitor compares prices by term, sees the benefit of longer subscriptions, adds the remote if needed and completes the connection, or chooses the free trial.\n\nBusiness value: term-based plans with a visible discount motivate choosing longer subscriptions, while the add-on option increases the average order value. A free-trial offer lowers the barrier for the undecided and helps convert them into subscribers.",
              tj: "Бахши «Арзиш» тарифҳоро аз рӯйи давомнокии обуна пешниҳод мекунад. Дар қисми боло блоки имконоти иловагӣ ҷойгир аст: байрақчаи илова кардани пулти «IPTVplayer Magic Remote» бо нарх ва шарти тахфифи худкори 50% ҳангоми фармоиш ба 12 ё 24 моҳ, инчунин тасвири дастгоҳ. Дар поён — чор корти пакет аз рӯйи мӯҳлат: 30, 180, 365 ва 730 рӯз. Дар ҳар корт мӯҳлат, нархи хатзадаи ибтидоӣ ва нархи ниҳоии тахфифдор бо евро, инчунин тугмаи «Пайваст кардан» нишон дода шудааст. Дар зери пакетҳо пешниҳоди фармоиши санҷиши ройгон барои 7 рӯз барои онҳое, ки муайян карда наметавонанд, ҷойгир аст.\n\nРаванди истифода: корбар нархҳоро аз рӯйи мӯҳлат муқоиса мекунад, фоидаи обунаҳои дарозро мебинад, ҳангоми зарурат пултро илова мекунад ва пайвастшавиро расмӣ мегардонад ё санҷиши ройгонро интихоб менамояд.\n\nАҳамият барои тиҷорат: тарифҳо аз рӯйи мӯҳлат бо тахфифи аён ба интихоби обунаҳои дароз ҳавасманд мекунанд ва имконоти иловагӣ маблағи миёнаи фармоишро зиёд мекунад. Пешниҳоди санҷиши ройгон монеаро барои дудилаҳо кам мекунад ва ба табдили онҳо ба муштарӣ кумак менамояд.",
            },
          },
          {
            slug: "advantages",
            title: {
              ru: "Преимущества",
              en: "Advantages",
              tj: "Бартариҳо",
            },
            imageSrc: "/images/projects/sandukTV/gallery-2.png",
            BannerSrc: "/images/projects/sandukTV/gallery-2.png",
            shortInfo: {
              ru: "Возможности сервиса и отзывы",
              en: "Service features and reviews",
              tj: "Имкониятҳои хизмат ва тақризҳо",
            },
            fullInfo: {
              ru: "Раздел «Преимущества интерактивного телевидения от SundukTV» раскрывает функциональные возможности сервиса. В сетке с иконками перечислены ключевые особенности: более 310 каналов в FullHD и UltraHD, возможность поставить эфир на паузу или перемотать, архив телепередач на 14 дней с доступом к кинотеатру, каналы для взрослых, просмотр на трёх устройствах одновременно и национальные каналы Германии, Украины, Латвии и Литвы. Ниже начинается блок отзывов с карточками оценок в виде звёзд и коротких комментариев абонентов.\n\nПользовательский сценарий: посетитель изучает функции сервиса, выделяет важные для себя (тайм-шифт, архив, мультиэкран) и подкрепляет решение отзывами других абонентов.\n\nЦенность для бизнеса: перечень функциональных преимуществ вместе с отзывами объединяет рациональные и социальные аргументы. Такое сочетание помогает посетителю убедиться и в возможностях сервиса, и в удовлетворённости действующих клиентов.",
              en: "The “Advantages of interactive television from SundukTV” section reveals the service’s features. An icon grid lists the key capabilities: over 310 channels in FullHD and UltraHD, the ability to pause or rewind live broadcasts, a 14-day programme archive with cinema access, adult channels, viewing on three devices at once, and national channels of Germany, Ukraine, Latvia and Lithuania. Below, a reviews block begins with cards showing star ratings and short subscriber comments.\n\nUser journey: the visitor studies the service’s features, singles out those important to them (time-shift, archive, multiscreen) and reinforces the decision with reviews from other subscribers.\n\nBusiness value: a list of functional advantages together with reviews combines rational and social arguments. This mix helps the visitor be convinced both of the service’s capabilities and of the satisfaction of existing customers.",
              tj: "Бахши «Бартариҳои телевизиони интерактивӣ аз SundukTV» имкониятҳои функсионалии хизматро ошкор мекунад. Дар шабака бо нишонаҳо хусусиятҳои асосӣ номбар шудаанд: беш аз 310 канал дар FullHD ва UltraHD, имкони таваққуф ё бозгардонии пахши мустақим, бойгонии барномаҳо барои 14 рӯз бо дастрасӣ ба кинотеатр, каналҳо барои калонсолон, тамошо дар се дастгоҳ ҳамзамон ва каналҳои миллии Олмон, Украина, Латвия ва Литва. Дар поён блоки тақризҳо бо кортҳои баҳо дар шакли ситораҳо ва шарҳҳои кӯтоҳи муштариён оғоз меёбад.\n\nРаванди истифода: корбар функсияҳои хизматро меомӯзад, барои худ муҳимҳоро (тайм-шифт, бойгонӣ, бисёрэкран) ҷудо мекунад ва қарорро бо тақризҳои дигар муштариён мустаҳкам менамояд.\n\nАҳамият барои тиҷорат: рӯйхати бартариҳои функсионалӣ ҳамроҳи тақризҳо далелҳои оқилона ва иҷтимоиро муттаҳид мекунад. Ин омезиш ба корбар кумак мекунад, ки ҳам ба имкониятҳои хизмат ва ҳам ба қаноатмандии муштариёни амалкунанда боварӣ ҳосил кунад.",
            },
          },
          {
            slug: "testimonials-dealers",
            title: {
              ru: "Отзывы и дилеры",
              en: "Reviews and Dealers",
              tj: "Тақризҳо ва дилерҳо",
            },
            imageSrc: "/images/projects/sandukTV/gallery-5.png",
            BannerSrc: "/images/projects/sandukTV/gallery-5.png",
            shortInfo: {
              ru: "Отзывы абонентов и география сети",
              en: "Subscriber reviews and network reach",
              tj: "Тақризҳои муштариён ва ҷуғрофияи шабака",
            },
            fullInfo: {
              ru: "Блок объединяет отзывы абонентов и масштаб дилерской сети. Отзывы оформлены карточками на тёмно-синем фоне: каждая содержит оценку в виде звёзд, короткий текст комментария, фотографию и имя абонента (Мария, Марк, Татьяна). Ниже на фоне карты мира размещён крупный тезис «Более 60 дилеров в 18 странах!», подчёркивающий международное присутствие сервиса.\n\nПользовательский сценарий: посетитель читает отзывы реальных абонентов, оценивает выставленные оценки и видит географический охват сети, что усиливает доверие к сервису.\n\nЦенность для бизнеса: сочетание персонализированных отзывов и показателя охвата (дилеры в 18 странах) работает как социальное доказательство и демонстрация масштаба. Это помогает снять сомнения и представить сервис как проверенный и распространённый.",
              en: "The block combines subscriber reviews with the scale of the dealer network. Reviews are laid out as cards on a dark-blue background: each contains a star rating, a short comment, a photograph and the subscriber’s name (Maria, Mark, Tatyana). Below, against a world-map background, is a bold statement “Over 60 dealers in 18 countries!”, emphasising the service’s international presence.\n\nUser journey: the visitor reads reviews from real subscribers, assesses the given ratings and sees the network’s geographic reach, which strengthens trust in the service.\n\nBusiness value: combining personalised reviews with a reach metric (dealers in 18 countries) works as social proof and a demonstration of scale. This helps remove doubts and present the service as trusted and widespread.",
              tj: "Блок тақризҳои муштариён ва миқёси шабакаи дилериро муттаҳид мекунад. Тақризҳо ҳамчун кортҳо дар заминаи кабуди торик таҳия шудаанд: ҳар яке баҳо дар шакли ситораҳо, матни кӯтоҳи шарҳ, акс ва номи муштарӣ (Мария, Марк, Татяна)-ро дар бар мегирад. Дар поён дар заминаи харитаи ҷаҳон тезиси калони «Беш аз 60 дилер дар 18 кишвар!» ҷойгир аст, ки ҳузури байналмилалии хизматро таъкид мекунад.\n\nРаванди истифода: корбар тақризҳои муштариёни воқеиро мехонад, баҳоҳои гузошташударо арзёбӣ мекунад ва фарогирии ҷуғрофии шабакаро мебинад, ки эътимодро ба хизмат тақвият медиҳад.\n\nАҳамият барои тиҷорат: якҷоякунии тақризҳои фардикунонидашуда ва нишондиҳандаи фарогирӣ (дилерҳо дар 18 кишвар) ҳамчун далели иҷтимоӣ ва намоиши миқёс кор мекунад. Ин ба бартараф кардани шакҳо кумак мекунад ва хизматро ҳамчун санҷидашуда ва паҳншуда муаррифӣ менамояд.",
            },
          },
          {
            slug: "faq-footer",
            title: {
              ru: "Вопросы и подвал",
              en: "FAQ and Footer",
              tj: "Саволҳо ва поёни сомона",
            },
            imageSrc: "/images/projects/sandukTV/gallery-3.png",
            BannerSrc: "/images/projects/sandukTV/gallery-3.png",
            shortInfo: {
              ru: "Частые вопросы и контакты по странам",
              en: "FAQ and contacts by country",
              tj: "Саволҳои маъмул ва тамосҳо аз рӯйи кишварҳо",
            },
            fullInfo: {
              ru: "Завершающий блок объединяет часто задаваемые вопросы и подвал сайта. Раздел FAQ оформлен списком раскрывающихся пунктов со знаком «плюс»: есть ли задержка у прямого эфира, что делать, если не найдены ответы, предоставляется ли бесплатный пробный доступ, можно ли скачать передачу и каковы минимальные требования к интернету. Подвал содержит логотип, краткое описание сервиса, повтор навигационных ссылок и кнопки «Подключить», а также телефоны поддержки по странам (Великобритания, США, Германия, Израиль). В самом низу — копирайт и ссылки на условия и cookie.\n\nПользовательский сценарий: посетитель находит ответ на свой вопрос в списке FAQ, а при необходимости связи выбирает телефон нужной страны в подвале.\n\nЦенность для бизнеса: раздел FAQ снимает типовые возражения о качестве эфира, пробном доступе и технических требованиях, уменьшая нагрузку на поддержку. Контакты по нескольким странам подчёркивают международный охват и упрощают связь для аудитории из разных регионов.",
              en: "The closing block combines frequently asked questions with the site footer. The FAQ section is laid out as a list of expandable items marked with a plus sign: whether there is a delay in live broadcasts, what to do if answers are not found, whether free trial access is provided, whether a programme can be downloaded and what the minimum internet requirements are. The footer contains the logo, a short service description, a repeat of the navigation links and Connect button, and support phone numbers by country (UK, USA, Germany, Israel). At the very bottom are the copyright and links to terms and cookies.\n\nUser journey: the visitor finds the answer to their question in the FAQ list and, if contact is needed, chooses the phone number for the relevant country in the footer.\n\nBusiness value: the FAQ section removes typical objections about broadcast quality, trial access and technical requirements, reducing the load on support. Contacts for several countries emphasise the international reach and ease contact for audiences from different regions.",
              tj: "Блоки хотимавӣ саволҳои зуд-зуд додашаванда ва поёни сомонаро муттаҳид мекунад. Бахши FAQ ҳамчун рӯйхати бандҳои кушодашаванда бо аломати «плюс» таҳия шудааст: оё дар пахши мустақим таъхир ҳаст, агар ҷавоб ёфт нашавад чӣ бояд кард, оё дастрасии санҷишии ройгон дода мешавад, оё барномаро зеркашӣ кардан мумкин аст ва талаботи ҳадди ақали интернет чист. Поёни сомона нишон, тавсифи кӯтоҳи хизмат, такрори пайвандҳои навигатсионӣ ва тугмаи «Пайваст кардан», инчунин телефонҳои дастгирӣ аз рӯйи кишварҳо (Британияи Кабир, ИМА, Олмон, Исроил)-ро дар бар мегирад. Дар поёнтарин — ҳуқуқи муаллиф ва пайвандҳо ба шартҳо ва cookie.\n\nРаванди истифода: корбар ҷавоби саволи худро дар рӯйхати FAQ меёбад ва ҳангоми зарурати алоқа телефони кишвари заруриро дар поёни сомона интихоб мекунад.\n\nАҳамият барои тиҷорат: бахши FAQ эродҳои маъмулро дар бораи сифати пахш, дастрасии санҷишӣ ва талаботи техникӣ бартараф месозад ва сарбории дастгириро кам мекунад. Тамосҳо аз рӯйи якчанд кишвар фарогирии байналмилалиро таъкид мекунанд ва алоқаро барои шунавандагони минтақаҳои гуногун осон менамоянд.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/onlinepay.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MySQL",
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
    projectComponents: [
      {
        tabName: { ru: "Лендинг", en: "Landing", tj: "Лендинг" },
        items: [
          {
            slug: "hero",
            title: {
              ru: "Первый экран",
              en: "Hero Section",
              tj: "Экрани аввал",
            },
            imageSrc: "/images/projects/onlinepay/gallery-1.png",
            BannerSrc: "/images/projects/onlinepay/gallery-1.png",
            shortInfo: {
              ru: "Оффер приёма платежей для бизнеса",
              en: "Payment acceptance offer for business",
              tj: "Пешниҳоди қабули пардохт барои тиҷорат",
            },
            fullInfo: {
              ru: "Первый экран лендинга OnlinePay представляет платёжный сервис Merchant для приёма онлайн-платежей. В шапке размещены логотип, переключатель языка и кнопка «Login». На фиолетовом баннере расположены крупный заголовок «Merchant», подзаголовок о самом быстром и безопасном сервисе приёма платежей и кнопка «Get Offer». Справа — тематическая иллюстрация с командой, графиками и элементами оплаты, задающая деловой контекст. Ниже начинается блок «About Service» с описанием услуги приёма платежей через локальные банковские карты.\n\nПользовательский сценарий: посетитель считывает суть предложения — быстрый и безопасный приём платежей — и переходит к получению коммерческого предложения кнопкой «Get Offer» либо входит в кабинет через «Login».\n\nЦенность для бизнеса: первый экран платёжного сервиса лаконично формулирует ценность (скорость и безопасность приёма платежей) и предлагает целевое действие. Для B2B-продукта акцент на надёжности и понятная кнопка запроса оффера помогают начать диалог с потенциальным клиентом.",
              en: "The OnlinePay landing hero presents the Merchant payment service for accepting online payments. The header contains the logo, a language switcher and a Login button. On the purple banner are the large headline “Merchant”, a subheading about the fastest and most secure payment-acceptance service, and a Get Offer button. On the right is a themed illustration with a team, charts and payment elements, setting a business context. Below, the About Service block begins with a description of accepting payments through local bank cards.\n\nUser journey: the visitor grasps the essence of the offer — fast and secure payment acceptance — and moves to request a commercial offer via Get Offer, or logs into the cabinet through Login.\n\nBusiness value: a payment service’s hero concisely states the value (speed and security of payment acceptance) and offers a target action. For a B2B product, emphasising reliability and a clear offer-request button helps start a dialogue with a prospective client.",
              tj: "Экрани аввали лендинги OnlinePay хизмати пардохтии Merchant-ро барои қабули пардохтҳои онлайн пешниҳод мекунад. Дар қисми боло нишон, интихобкунандаи забон ва тугмаи «Login» ҷойгиранд. Дар баннери бунафш сарлавҳаи калони «Merchant», зерсарлавҳа дар бораи хизмати зудтарин ва бехатартарини қабули пардохт ва тугмаи «Get Offer» ҷой доранд. Дар тарафи рост — тасвири мавзуӣ бо даста, графикҳо ва унсурҳои пардохт, ки заминаи кориро муайян мекунад. Дар поён блоки «About Service» бо тавсифи хизмати қабули пардохт тавассути кортҳои бонкии маҳаллӣ оғоз меёбад.\n\nРаванди истифода: корбар моҳияти пешниҳод — қабули зуд ва бехатари пардохтро дарк мекунад ва бо тугмаи «Get Offer» ба гирифтани пешниҳоди тиҷоратӣ мегузарад ё тавассути «Login» ба кабинет ворид мешавад.\n\nАҳамият барои тиҷорат: экрани аввали хизмати пардохтӣ арзишро (суръат ва бехатарии қабули пардохт) мухтасар баён мекунад ва амали мақсаднок пешниҳод менамояд. Барои маҳсулоти B2B таъкид ба боэътимодӣ ва тугмаи возеҳи дархости пешниҳод ба оғози муколама бо мизоҷи эҳтимолӣ кумак мекунад.",
            },
          },
          {
            slug: "about-service",
            title: {
              ru: "О сервисе Merchant",
              en: "About the Merchant Service",
              tj: "Дар бораи хизмати Merchant",
            },
            imageSrc: "/images/projects/onlinepay/gallery-2.png",
            BannerSrc: "/images/projects/onlinepay/gallery-2.png",
            shortInfo: {
              ru: "Назначение и интеграция сервиса",
              en: "Service purpose and integration",
              tj: "Таъинот ва интегратсияи хизмат",
            },
            fullInfo: {
              ru: "Блок «About Service» подробно описывает услугу Merchant. Слева расположена красочная иллюстрация с иконками электронной коммерции (покупки, доставка, оплата, поддержка) и указывающей рукой. Справа — заголовок «Merchant» с меткой раздела и текст: сервис даёт возможность принимать платежи за товары и услуги через локальные банковские карты, ориентирован на простое подключение независимо от масштаба бизнеса и наличия технических специалистов, предлагает готовые модули для популярных CMS и биллинговых систем, а также интеграцию силами собственных специалистов. Завершает блок кнопка «Documentation».\n\nПользовательский сценарий: посетитель изучает назначение сервиса и способы интеграции, оценивает наличие готовых модулей под свою платформу и при необходимости переходит к документации.\n\nЦенность для бизнеса: развёрнутое описание с акцентом на простоту подключения и готовые модули снимает опасения о технической сложности интеграции платежей. Ссылка на документацию адресует техническую аудиторию, ускоряя принятие решения.",
              en: "The About Service block describes the Merchant service in detail. On the left is a colourful illustration with e-commerce icons (shopping, delivery, payment, support) and a pointing hand. On the right are the “Merchant” heading with a section label and text: the service enables accepting payments for goods and services through local bank cards, is aimed at easy setup regardless of business scale or the availability of technical staff, offers ready-made modules for popular CMS and billing systems, and provides integration by its own specialists. A Documentation button completes the block.\n\nUser journey: the visitor studies the service’s purpose and integration options, assesses whether ready-made modules exist for their platform and moves to the documentation if needed.\n\nBusiness value: a detailed description emphasising easy setup and ready-made modules removes concerns about the technical complexity of payment integration. A documentation link addresses the technical audience and speeds up the decision.",
              tj: "Блоки «About Service» хизмати Merchant-ро муфассал тавсиф мекунад. Дар тарафи чап тасвири рангин бо нишонаҳои тиҷорати электронӣ (харид, расонидан, пардохт, дастгирӣ) ва дасти ишоракунанда ҷойгир аст. Дар тарафи рост — сарлавҳаи «Merchant» бо нишонаи бахш ва матн: хизмат имкони қабули пардохтро барои молу хизматрасонӣ тавассути кортҳои бонкии маҳаллӣ медиҳад, ба пайвастшавии осон новобаста аз миқёси тиҷорат ва мавҷудияти мутахассисони техникӣ нигаронида шудааст, модулҳои тайёр барои CMS ва системаҳои биллинги маъмул, инчунин интегратсияро бо мутахассисони худӣ пешниҳод мекунад. Блокро тугмаи «Documentation» анҷом медиҳад.\n\nРаванди истифода: корбар таъиноти хизмат ва роҳҳои интегратсияро меомӯзад, мавҷудияти модулҳои тайёрро барои платформаи худ арзёбӣ мекунад ва ҳангоми зарурат ба ҳуҷҷатнигорӣ мегузарад.\n\nАҳамият барои тиҷорат: тавсифи муфассал бо таъкид ба пайвастшавии осон ва модулҳои тайёр нигарониро дар бораи мураккабии техникии интегратсияи пардохт бартараф месозад. Пайванд ба ҳуҷҷатнигорӣ ба шунавандагони техникӣ нигаронида шуда, қабули қарорро суръат мебахшад.",
            },
          },
          {
            slug: "steps",
            title: {
              ru: "Три шага подключения",
              en: "Three Steps to Connect",
              tj: "Се қадами пайвастшавӣ",
            },
            imageSrc: "/images/projects/onlinepay/gallery-3.png",
            BannerSrc: "/images/projects/onlinepay/gallery-3.png",
            shortInfo: {
              ru: "Процесс подключения приёма платежей",
              en: "Process of enabling payment acceptance",
              tj: "Ҷараёни фаъолсозии қабули пардохт",
            },
            fullInfo: {
              ru: "Блок «Only 3 steps to accept payments» объясняет процесс подключения. Три карточки с иконками и номерами описывают последовательность шагов: заполнить заявку на сайте, получить персональное предложение от банков-партнёров и подписать договор с одним из банков-партнёров. Ниже начинается раздел «Capability» с демонстрацией личного кабинета продавца: на макете показан рабочий стол «Overview» с графиком транзакций за период, а рядом мобильная версия того же интерфейса.\n\nПользовательский сценарий: посетитель последовательно читает три шага и понимает путь подключения — от заявки до подписания договора, а затем видит, как выглядит рабочий кабинет после подключения.\n\nЦенность для бизнеса: пошаговое объяснение превращает процесс подключения к банковскому эквайрингу в понятную и короткую последовательность. Демонстрация реального интерфейса кабинета снижает неопределённость и показывает результат подключения ещё до начала работы.",
              en: "The “Only 3 steps to accept payments” block explains the connection process. Three cards with icons and numbers describe the sequence: fill in the application form on the website, receive a personal offer from the partner banks and sign an agreement with one of the partner banks. Below, the Capability section begins with a demonstration of the seller’s personal cabinet: the mockup shows the Overview dashboard with a transaction chart for a period, alongside a mobile version of the same interface.\n\nUser journey: the visitor reads the three steps in order and understands the connection path — from application to signing the agreement — then sees how the working cabinet looks after connection.\n\nBusiness value: a step-by-step explanation turns the process of connecting to bank acquiring into a clear and short sequence. Demonstrating the real cabinet interface reduces uncertainty and shows the result of connection even before work begins.",
              tj: "Блоки «Only 3 steps to accept payments» ҷараёни пайвастшавиро мефаҳмонад. Се корт бо нишонаҳо ва рақамҳо пайдарпайиро тавсиф мекунанд: пур кардани дархост дар сомона, гирифтани пешниҳоди шахсӣ аз бонкҳои шарик ва имзои шартнома бо яке аз бонкҳои шарик. Дар поён бахши «Capability» бо намоиши кабинети шахсии фурӯшанда оғоз меёбад: дар макет мизи кории «Overview» бо графики транзаксияҳо барои давра, дар паҳлу версияи мобилии ҳамон интерфейс нишон дода шудааст.\n\nРаванди истифода: корбар се қадамро пайдарпай мехонад ва роҳи пайвастшавиро — аз дархост то имзои шартнома дарк мекунад, сипас мебинад, ки кабинети корӣ пас аз пайвастшавӣ чӣ гуна ба назар мерасад.\n\nАҳамият барои тиҷорат: тавзеҳи қадам ба қадам ҷараёни пайвастшавиро ба эквайринги бонкӣ ба пайдарпайии возеҳ ва кӯтоҳ табдил медиҳад. Намоиши интерфейси воқеии кабинет номуайяниро кам мекунад ва натиҷаи пайвастшавиро ҳатто пеш аз оғози кор нишон медиҳад.",
            },
          },
          {
            slug: "cabinet-footer",
            title: {
              ru: "Личный кабинет и подвал",
              en: "Personal Cabinet and Footer",
              tj: "Кабинети шахсӣ ва поёни сомона",
            },
            imageSrc: "/images/projects/onlinepay/gallery-4.png",
            BannerSrc: "/images/projects/onlinepay/gallery-4.png",
            shortInfo: {
              ru: "Возможности кабинета продавца и контакты",
              en: "Seller cabinet features and contacts",
              tj: "Имкониятҳои кабинети фурӯшанда ва тамосҳо",
            },
            fullInfo: {
              ru: "Раздел «Capability» и подвал завершают страницу. Слева расположен макет личного кабинета продавца на десктопе и телефоне с экраном «Overview» и графиком транзакций. Справа — заголовок «The Merchant service provides access to the Seller's Personal cabinet» и описание возможностей кабинета: раздел уведомлений с новостями системы и отзывами, раздел платежей со статистикой успешных и сформированных операций, а также персональные настройки с данными администратора, сменой пароля и указанием email для уведомлений о поступлениях. В подвале размещены блок «About Us» с информацией о банке и социальными иконками, а также блок «Contacts» с адресом, телефонами и email; внизу — строка авторских прав.\n\nПользовательский сценарий: посетитель изучает функции кабинета — уведомления, статистику платежей и настройки, — а затем находит контактные данные банка в подвале для связи.\n\nЦенность для бизнеса: описание кабинета с уведомлениями, статистикой и настройками показывает, что после подключения продавец получает полноценный инструмент управления платежами. Подробные контакты в подвале подкрепляют доверие и упрощают переход к обращению.",
              en: "The Capability section and the footer complete the page. On the left is a mockup of the seller’s personal cabinet on desktop and phone with the Overview screen and a transaction chart. On the right are the heading “The Merchant service provides access to the Seller's Personal cabinet” and a description of the cabinet’s features: a notifications section with system news and reviews, a payments section with statistics on successful and generated operations, and personal settings with the administrator’s data, password change and an email for payment notifications. The footer holds an About Us block with bank information and social icons, and a Contacts block with an address, phone numbers and email; a copyright line sits at the bottom.\n\nUser journey: the visitor studies the cabinet’s features — notifications, payment statistics and settings — then finds the bank’s contact details in the footer to get in touch.\n\nBusiness value: a description of the cabinet with notifications, statistics and settings shows that after connection the seller receives a full-fledged payment management tool. Detailed footer contacts reinforce trust and ease the move to an enquiry.",
              tj: "Бахши «Capability» ва поёни сомона саҳифаро анҷом медиҳанд. Дар тарафи чап макети кабинети шахсии фурӯшанда дар десктоп ва телефон бо экрани «Overview» ва графики транзаксияҳо ҷойгир аст. Дар тарафи рост — сарлавҳаи «The Merchant service provides access to the Seller's Personal cabinet» ва тавсифи имкониятҳои кабинет: бахши огоҳиномаҳо бо хабарҳои система ва тақризҳо, бахши пардохтҳо бо омори амалиётҳои муваффақ ва ташаккулёфта, инчунин танзимоти шахсӣ бо маълумоти маъмур, иваз кардани парол ва нишон додани email барои огоҳиномаҳо дар бораи воридот. Дар поёни сомона блоки «About Us» бо маълумоти бонк ва нишонаҳои иҷтимоӣ, инчунин блоки «Contacts» бо суроға, телефонҳо ва email ҷойгиранд; дар поён — сатри ҳуқуқи муаллиф.\n\nРаванди истифода: корбар функсияҳои кабинетро — огоҳиномаҳо, омори пардохтҳо ва танзимотро меомӯзад, сипас маълумоти тамоси бонкро дар поёни сомона барои алоқа меёбад.\n\nАҳамият барои тиҷорат: тавсифи кабинет бо огоҳиномаҳо, омор ва танзимот нишон медиҳад, ки пас аз пайвастшавӣ фурӯшанда абзори мукаммали идораи пардохтҳоро мегирад. Тамосҳои муфассал дар поёни сомона эътимодро тақвият медиҳанд ва гузаришро ба муроҷиат осон мекунанд.",
            },
          },
        ],
      },
    ],
  },
  {
    imageSrc: "/images/projects/zenith.webp",
    year: "2024",
    tags: [
      "PHP (Laravel Framework)",
      "JavaScript",
      "MySQL",
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
      "MySQL",
      "HTML5 / CSS3",
      "REST API",
    ],
    slug: "imron-nakliet",
  },
];
