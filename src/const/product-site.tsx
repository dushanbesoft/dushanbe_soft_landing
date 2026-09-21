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
            imageSrc: "/images/projects/president/homepage.webp",
            BannerSrc: "/images/projects/president/homepage.webp",
            shortInfo: {
              ru: "Ключевые события и навигация по порталу",
              en: "Featured events and portal navigation",
              tj: "Рӯйдодҳои муҳим ва роҳнамоии портал",
            },
            fullInfo: {
              ru: "Главная страница prezident.tj объединяет основные точки входа в информационную систему. В верхней части расположены логотип и название учреждения, а основное меню открывает разделы «Таджикистан», «Государственные символы», «Лидер нации», «Президент», «Правительство» и «Исполнительный аппарат».\n\nЦентральный элемент страницы — слайдер ключевых событий. Каждый материал сопровождается крупной фотографией, заголовком, датой и временем публикации; стрелки и точки навигации позволяют переключать слайды. В шапке доступны переключатели таджикской, русской, английской и арабской версий, поиск, настройка размера текста и ссылки на социальные каналы. Отдельная кнопка «Письмо президенту» делает сценарий обращения заметным в общей навигации.\n\nПользовательский сценарий: посетитель знакомится с главным событием, открывает заинтересовавшую публикацию либо переходит в тематический раздел, к поиску или форме обращения.\n\nЦенность для бизнеса: такая главная страница подходит организациям, которым важно одновременно представить бренд, публиковать существенные сообщения и обеспечить быстрый доступ к большому числу разделов.",
              en: "The prezident.tj homepage brings together the portal’s primary entry points. The logo and institutional name sit at the top, while the main navigation provides access to Tajikistan, State Symbols, Leader of the Nation, President, Government and Executive Office sections.\n\nThe page is centred around a featured event slider. Every item combines a large photograph with a headline, publication date and time; arrows and navigation dots let visitors switch slides. The header includes Tajik, Russian, English and Arabic language options, site search, text-size controls and social links. A dedicated “Letter to the President” button makes the enquiry route prominent within the shared navigation.\n\nUser journey: visitors review the main event, open the relevant publication, or continue through a topical section, search or the enquiry form.\n\nBusiness value: this homepage approach suits organisations that need to introduce their brand, publish important updates and provide fast access to a broad set of sections.",
              tj: "Саҳифаи асосии prezident.tj роҳҳои асосии дастрасӣ ба иттилооти порталро муттаҳид мекунад. Дар қисми боло нишон ва номи ниҳод ҷойгиранд, менюи асосӣ бошад ба бахшҳои «Тоҷикистон», «Рамзҳои давлатӣ», «Пешвои миллат», «Президент», «Ҳукумат» ва «Дастгоҳи иҷроия» роҳ медиҳад.\n\nУнсури марказии саҳифа слайдери рӯйдодҳои муҳим мебошад. Ҳар мавод бо акси калон, сарлавҳа, сана ва вақти нашр пешниҳод мешавад; тирчаҳо ва нуқтаҳои роҳнамоӣ барои иваз кардани слайдҳо хизмат мекунанд. Дар қисми боло интихоби забонҳои тоҷикӣ, русӣ, англисӣ ва арабӣ, ҷустуҷӯ, танзими андозаи матн ва пайвандҳои шабакаҳои иҷтимоӣ мавҷуданд. Тугмаи алоҳидаи «Нома ба Президент» роҳи муроҷиатро дар навигатсияи умумӣ намоён мекунад.\n\nРаванди истифода: корбар бо рӯйдоди асосӣ шинос мешавад, маводи ҷолибро мекушояд ё ба бахши мавзуӣ, ҷустуҷӯ ва шакли муроҷиат мегузарад.\n\nАҳамият барои тиҷорат: чунин саҳифа барои ташкилоте мувофиқ аст, ки мехоҳад бренд, хабарҳои муҳим ва дастрасии зуд ба бахшҳои зиёди сомонаро дар як муҳит пешниҳод кунад.",
            },
          },
          {
            slug: "events",
            title: {
              ru: "События",
              en: "Events",
              tj: "Рӯйдодҳо",
            },
            imageSrc: "/images/projects/president/events.webp",
            BannerSrc: "/images/projects/president/events.webp",
            shortInfo: {
              ru: "Каталог публикаций, календарь и тематическая навигация",
              en: "Publication directory, calendar and topic navigation",
              tj: "Феҳристи мавод, тақвим ва роҳнамоии мавзуӣ",
            },
            fullInfo: {
              ru: "Раздел «События» организует текущие публикации и предлагает несколько способов ориентироваться в информационном потоке. В верхней части расположены категории событий, встреч, выступлений, поездок, документов, посланий, телеграмм и телефонных разговоров — посетитель выбирает материалы по теме и формату.\n\nПубликации представлены в двухколоночном списке: у каждого материала есть заголовок, дата, время и место события. Справа расположен календарь с выбором месяца и года, а ниже — тематический каталог по направлениям внутренней политики, международных структур и двусторонних отношений. Такая структура помогает быстро сузить область просмотра.\n\nПользовательский сценарий: посетитель выбирает категорию, просматривает заголовки и даты, при необходимости уточняет период через календарь и открывает нужную публикацию.\n\nЦенность для бизнеса: аналогичный модуль подойдёт для корпоративного пресс-центра, отраслевого портала или архива мероприятий — он структурирует новости по типу, теме и времени публикации.",
              en: "The Events section organises current publications and provides several ways to navigate the information flow. Categories at the top cover events, meetings, speeches, visits, documents, addresses, telegrams and telephone conversations, allowing visitors to choose material by topic and format.\n\nPublications are displayed in a two-column list, with every item showing a headline, date, time and event location. A calendar on the right allows month and year selection, while the topic directory beneath it groups domestic policy, international organisations and bilateral relations. This structure helps visitors narrow the information they want to explore.\n\nUser journey: visitors choose a category, review headlines and dates, refine the period with the calendar if needed, and open the relevant publication.\n\nBusiness value: a similar module suits a corporate newsroom, industry portal or event archive, structuring updates by type, topic and publication time.",
              tj: "Бахши «Рӯйдодҳо» маводи ҷориро ба тартиб оварда, чанд роҳи пайдо кардани иттилоотро пешниҳод мекунад. Дар қисми боло гурӯҳҳои рӯйдодҳо, вохӯриҳо, суханрониҳо, сафарҳо, санадҳо, паёмҳо, барқияҳо ва суҳбатҳои телефонӣ ҷойгир шудаанд; корбар маводро аз рӯйи мавзуъ ва навъ интихоб мекунад.\n\nМавод дар рӯйхати ду сутун пешниҳод мешавад: ҳар сабт сарлавҳа, сана, вақт ва ҷойи рӯйдодро дар бар мегирад. Дар тарафи рост тақвим бо интихоби моҳ ва сол, инчунин феҳристи мавзуӣ аз рӯйи сиёсати дохилӣ, сохторҳои байналмилалӣ ва муносибатҳои дуҷониба ҷойгир аст. Чунин сохтор барои маҳдуд кардани доираи ҷустуҷӯ кумак мекунад.\n\nРаванди истифода: корбар гурӯҳро интихоб мекунад, сарлавҳаҳо ва санаҳоро мебинад, ҳангоми зарурат давраро аз рӯйи тақвим муайян мекунад ва маводи лозимаро мекушояд.\n\nАҳамият барои тиҷорат: чунин модул барои маркази матбуоти ширкат, портали соҳавӣ ё бойгонии чорабиниҳо мувофиқ буда, хабарҳоро аз рӯйи навъ, мавзуъ ва вақти нашр ба тартиб меорад.",
            },
          },
          {
            slug: "photo-gallery",
            title: {
              ru: "Фотогалерея событий",
              en: "Event Photo Gallery",
              tj: "Галереяи аксҳои рӯйдодҳо",
            },
            imageSrc: "/images/projects/president/photo-gallery.webp",
            BannerSrc: "/images/projects/president/photo-gallery.webp",
            shortInfo: {
              ru: "Визуальная летопись официальных мероприятий",
              en: "A visual record of official events",
              tj: "Сабти визуалии чорабиниҳои расмӣ",
            },
            fullInfo: {
              ru: "Раздел «Видео и фото» представляет официальные события через крупную фотомозаику. Изображения различного размера собраны в единую композицию, благодаря чему посетитель видит несколько ключевых моментов мероприятия уже на первом экране.\n\nСетка объединяет общие планы, протокольные встречи, церемонии и рабочие эпизоды. Кнопка «Больше» открывает путь к дополнительным материалам, а следующий тематический блок продолжает знакомство с информацией о президенте.\n\nПользовательский сценарий: посетитель быстро просматривает визуальную хронику, выбирает интересующий материал и переходит к более полной фотоподборке.\n\nЦенность для бизнеса: такой формат подходит для пресс-центров, корпоративных сайтов и событийных архивов. Он позволяет эмоционально представить мероприятия, сохранить контекст и повысить заметность визуальных материалов.",
              en: "The Video and Photo section presents official events through a prominent photo mosaic. Images in different sizes form a single composition, letting visitors see several key moments of an event on the first screen.\n\nThe grid combines wide shots, protocol meetings, ceremonies and working moments. A “More” button leads to additional material, while the next thematic block continues the introduction to information about the president.\n\nUser journey: visitors scan the visual record, choose the material that interests them and continue to a fuller photo selection.\n\nBusiness value: this format suits press centres, corporate websites and event archives. It presents events with emotional impact, preserves context and gives visual material greater prominence.",
              tj: "Бахши «Видео ва акс» рӯйдодҳои расмиро тавассути мозаикаи калони аксҳо муаррифӣ мекунад. Тасвирҳои андозаашон гуногун ба як композитсия муттаҳид мешаванд, то корбар дар экрани аввал чанд лаҳзаи асосии чорабиниро бинад.\n\nШабака нақшаҳои умумӣ, вохӯриҳои расмӣ, маросимҳо ва лаҳзаҳои кориро муттаҳид мекунад. Тугмаи «Бештар» ба маводи иловагӣ роҳ медиҳад ва бахши мавзуии минбаъда шиносоиро бо маълумот дар бораи президент идома медиҳад.\n\nРаванди истифода: корбар хроникаи визуалиро зуд тамошо мекунад, маводи ҷолибро интихоб менамояд ва ба маҷмуаи пурратари аксҳо мегузарад.\n\nАҳамият барои тиҷорат: чунин формат барои марказҳои матбуотӣ, сомонаҳои корпоративӣ ва бойгонии чорабиниҳо мувофиқ аст. Он рӯйдодҳоро таъсирбахш муаррифӣ карда, контекстро нигоҳ медорад ва намоёнии маводи визуалиро баланд мекунад.",
            },
          },
          {
            slug: "event-detail",
            title: {
              ru: "Публикация с фотогалереей",
              en: "Publication with Photo Gallery",
              tj: "Интишор бо галереяи аксҳо",
            },
            imageSrc: "/images/projects/president/event-detail.webp",
            BannerSrc: "/images/projects/president/event-detail.webp",
            shortInfo: {
              ru: "Материал события с серией фотографий и лентой новостей",
              en: "An event story with a photo series and news feed",
              tj: "Маводи рӯйдод бо силсилаи аксҳо ва лентаи хабарҳо",
            },
            fullInfo: {
              ru: "Страница публикации объединяет заголовок события, дату, место проведения и последовательную фотогалерею. Над материалом расположены хлебные крошки, которые показывают путь от главной страницы к выбранному разделу и конкретной публикации.\n\nОсновная область отведена под фотографии мероприятия: крупная сетка помогает рассмотреть официальную встречу, церемониальные моменты и рабочие эпизоды. Кнопка «Поделиться» даёт посетителю быстрый способ распространить материал. В правой колонке находится лента других событий с датами и количеством изображений, поэтому после просмотра публикации можно сразу перейти к следующей новости.\n\nПользовательский сценарий: посетитель открывает публикацию из ленты, просматривает фотоподборку, при необходимости делится ссылкой и продолжает изучать другие события через боковую навигацию.\n\nЦенность для бизнеса: такой формат подходит для новостных порталов, пресс-служб и корпоративных сайтов. Он сочетает подробный материал, визуальное подтверждение события и рекомендации для дальнейшего просмотра.",
              en: "The publication page combines an event headline, date, location and a sequential photo gallery. Breadcrumbs above the content show the path from the homepage to the selected section and the current publication.\n\nThe main area is dedicated to event photography: a large grid gives context to the official meeting, ceremonial moments and working scenes. A Share button provides a direct way to distribute the material. The right column contains other events with dates and image counts, allowing visitors to move to the next story after viewing the publication.\n\nUser journey: visitors open the story from the feed, review the photo selection, share the link if needed and continue through other events in the side navigation.\n\nBusiness value: this layout suits news portals, press offices and corporate websites. It brings together the full story, visual evidence of an event and recommendations for further reading.",
              tj: "Саҳифаи интишор сарлавҳаи рӯйдод, сана, ҷойи баргузорӣ ва галереяи пайдарпайи аксҳоро муттаҳид мекунад. Дар болои мавод пайвандҳои роҳнамо ҷойгиранд, ки роҳро аз саҳифаи асосӣ то бахши интихобшуда ва интишори ҷориро нишон медиҳанд.\n\nҚисми асосӣ барои аксҳои чорабинӣ пешбинӣ шудааст: шабакаи калон имкони дидани вохӯрии расмӣ, лаҳзаҳои маросимӣ ва ҷараёни кориро медиҳад. Тугмаи «Мубодила» роҳи зуд барои паҳн кардани маводро фароҳам меорад. Дар сутуни рост рӯйхати дигар рӯйдодҳо бо сана ва шумораи аксҳо ҷойгир аст, то корбар баъд аз дидани мавод ба хабари навбатӣ гузарад.\n\nРаванди истифода: корбар интишорро аз лента мекушояд, маҷмуаи аксҳоро тамошо мекунад, дар ҳолати зарурӣ пайвандро мубодила намуда, тавассути навигатсияи паҳлӯӣ дигар рӯйдодҳоро меомӯзад.\n\nАҳамият барои тиҷорат: чунин тарҳ барои порталҳои хабарӣ, хадамоти матбуотӣ ва сомонаҳои корпоративӣ мувофиқ аст. Он маводи муфассал, тасдиқи визуалии рӯйдод ва роҳҳои идомаи тамошоро муттаҳид мекунад.",
            },
          },
          {
            slug: "photo-catalog",
            title: {
              ru: "Каталог фото и видео",
              en: "Photo and Video Catalogue",
              tj: "Феҳристи аксҳо ва видео",
            },
            imageSrc: "/images/projects/president/photo-catalog.webp",
            BannerSrc: "/images/projects/president/photo-catalog.webp",
            shortInfo: {
              ru: "Поиск и структурированный архив медиаматериалов",
              en: "Searchable, structured media archive",
              tj: "Бойгонии сохторёфтаи маводи расонаӣ бо ҷустуҷӯ",
            },
            fullInfo: {
              ru: "Каталог галереи объединяет фото- и видеоматериалы в одном разделе. Вкладки помогают переключаться между форматами, а большая строка поиска предназначена для быстрого нахождения нужной публикации по ключевым словам.\n\nКаждый элемент списка содержит миниатюру, заголовок, дату и количество фотографий. Справа расположены календарь для выбора периода и лента актуальных событий, поэтому посетитель может находить материалы одновременно по запросу, дате и тематической связи с другими публикациями.\n\nПользовательский сценарий: посетитель выбирает нужный тип медиа, использует поиск либо календарь, открывает интересующую фотоподборку и продолжает просмотр через боковую ленту.\n\nЦенность для бизнеса: такой каталог подходит для медиатеки компании, пресс-центра или архива проектов. Он помогает сохранить большой объём материалов понятным и доступным для поиска.",
              en: "The gallery catalogue brings photo and video material together in one section. Tabs let visitors switch between formats, while a prominent search field supports finding the right publication by keywords.\n\nEach list item includes a thumbnail, headline, date and image count. A calendar on the right lets visitors select a period, and the current-events feed provides additional thematic routes to related publications. This means material can be found by query, date or connection to other stories.\n\nUser journey: visitors choose a media type, use search or the calendar, open the photo selection that interests them and continue through the side feed.\n\nBusiness value: this catalogue format suits a company media library, press centre or project archive. It keeps a large collection organised and easy to search.",
              tj: "Феҳристи галерея маводи аксӣ ва видеоро дар як бахш муттаҳид мекунад. Варақаҳо барои гузаштан байни форматҳо кумак мекунанд, сатри калони ҷустуҷӯ бошад барои зуд пайдо кардани интишори лозим аз рӯйи калимаҳои калидӣ пешбинӣ шудааст.\n\nҲар унсури рӯйхат тасвири хурд, сарлавҳа, сана ва шумораи аксҳоро дар бар мегирад. Дар тарафи рост тақвим барои интихоби давра ва лентаи рӯйдодҳои ҷорӣ ҷойгир аст, бинобар ин корбар метавонад маводро аз рӯйи дархост, сана ё робита бо дигар интишорҳо пайдо кунад.\n\nРаванди истифода: корбар навъи расонаро интихоб мекунад, аз ҷустуҷӯ ё тақвим истифода мебарад, маҷмуаи аксҳои ҷолибро мекушояд ва тавассути лентаи паҳлӯӣ тамошоро идома медиҳад.\n\nАҳамият барои тиҷорат: чунин феҳрист барои китобхонаи расонаии ширкат, маркази матбуотӣ ё бойгонии лоиҳаҳо мувофиқ аст. Он маҷмуаи калони маводро ба тартиб оварда, ҷустуҷӯро осон мекунад.",
            },
          },
          {
            slug: "video-catalog",
            title: {
              ru: "Видеоархив",
              en: "Video Archive",
              tj: "Бойгонии видео",
            },
            imageSrc: "/images/projects/president/video-catalog.webp",
            BannerSrc: "/images/projects/president/video-catalog.webp",
            shortInfo: {
              ru: "Хронологический список видеопубликаций с поиском",
              en: "A searchable chronological list of video publications",
              tj: "Рӯйхати хронологии видеоҳо бо ҷустуҷӯ",
            },
            fullInfo: {
              ru: "Видеоархив использует общую структуру галереи, но фокусируется на видеопубликациях. Активная вкладка «Видео» отделяет этот формат от фотоархива, а поисковая строка позволяет находить материал по названию или ключевым словам.\n\nОсновной список выстроен по дате: каждая запись показывает заголовок, время и место публикации. Справа календарь задаёт временной фильтр, а лента событий даёт переходы к актуальным материалам. Благодаря этому архив остаётся удобным даже при большом количестве видео.\n\nПользовательский сценарий: посетитель выбирает вкладку видео, ищет ролик по запросу или просматривает список по датам, затем уточняет период через календарь или открывает связанное событие из боковой колонки.\n\nЦенность для бизнеса: подобный архив подходит организациям, которые регулярно публикуют обращения, трансляции, интервью или отчёты. Он упорядочивает медиаконтент и делает исторические материалы доступными для поиска.",
              en: "The video archive uses the gallery’s shared structure but focuses on video publications. The active Video tab separates this format from the photo archive, while the search field lets visitors find material by title or keyword.\n\nThe main list is arranged chronologically, with each entry displaying a headline, time and publication location. A calendar on the right provides a time filter, and the events feed offers routes to current material. This keeps the archive easy to use even with a large number of videos.\n\nUser journey: visitors select the video tab, search by query or browse entries by date, then refine the period with the calendar or open a related event from the side column.\n\nBusiness value: this archive suits organisations that regularly publish addresses, broadcasts, interviews or reports. It organises media content and makes historic material searchable.",
              tj: "Бойгонии видео сохтори умумии галереяро истифода мебарад, вале ба интишорҳои видеоӣ равона шудааст. Варақаи фаъоли «Видео» ин форматро аз бойгонии аксҳо ҷудо мекунад ва сатри ҷустуҷӯ барои пайдо кардани мавод аз рӯйи ном ё калимаи калидӣ хизмат мекунад.\n\nРӯйхати асосӣ аз рӯйи сана тартиб дода шудааст: ҳар сабт сарлавҳа, вақт ва ҷойи интишорро нишон медиҳад. Тақвим дар тарафи рост филтри вақтро пешниҳод мекунад ва лентаи рӯйдодҳо ба маводи ҷорӣ роҳ медиҳад. Аз ин рӯ бойгонӣ ҳатто ҳангоми зиёд будани видеоҳо ҳам барои истифода қулай мемонад.\n\nРаванди истифода: корбар варақаи видеоро интихоб мекунад, роликро аз рӯйи дархост меҷӯяд ё рӯйхатро аз рӯйи сана мебинад, сипас давраро тавассути тақвим муайян мекунад ё рӯйдоди алоқамандро аз сутуни паҳлӯӣ мекушояд.\n\nАҳамият барои тиҷорат: чунин бойгонӣ барои ташкилотҳое мувофиқ аст, ки муроҷиатҳо, пахшҳо, мусоҳибаҳо ё ҳисоботҳоро мунтазам нашр мекунанд. Он муҳтавои расонаиро ба тартиб оварда, маводи таърихиро барои ҷустуҷӯ дастрас мекунад.",
            },
          },
          {
            slug: "president-section",
            title: {
              ru: "Раздел «Президент»",
              en: "President Section",
              tj: "Бахши «Президент»",
            },
            imageSrc: "/images/projects/president/president-profile.webp",
            BannerSrc: "/images/projects/president/president-profile.webp",
            shortInfo: {
              ru: "Профиль и тематическая навигация по материалам",
              en: "Profile and thematic navigation",
              tj: "Профил ва роҳнамоии мавзуӣ аз рӯйи мавод",
            },
            fullInfo: {
              ru: "Раздел «Президент» представляет профильную страницу с крупной официальной фотографией, именем и ссылкой на биографию. Такой блок даёт посетителю ясную точку входа для знакомства с персоной и связанными материалами.\n\nБоковая навигация разделяет информацию на самостоятельные категории: полномочия, символы президента, книги, статьи, фильмы и награды. Каждая ссылка ведёт к отдельному направлению, поэтому пользователю не нужно просматривать весь массив материалов для поиска конкретной темы.\n\nПользовательский сценарий: посетитель знакомится с основными сведениями, затем открывает биографию или выбирает интересующий тип материалов — например, книги, публикации или фильмы.\n\nЦенность для бизнеса: похожая структура может использоваться для страниц руководителей, экспертов, основателей компании или представителей организации. Она объединяет краткое представление с понятным переходом к достижениям, публикациям и медиа.",
              en: "The President section provides a profile page with a prominent official photograph, name and biography link. This gives visitors a clear starting point for learning about the person and related material.\n\nSide navigation separates the information into dedicated categories: powers, presidential symbols, books, articles, films and awards. Each link leads to a specific topic, so visitors do not have to browse the entire collection to find what they need.\n\nUser journey: visitors review the core information, then open the biography or select a material type such as books, publications or films.\n\nBusiness value: a similar structure can be used for executive, expert, founder or organisation-profile pages. It combines a concise introduction with clear routes to achievements, publications and media.",
              tj: "Бахши «Президент» саҳифаи профилиро бо акси расмии калон, ном ва пайванд ба шарҳи ҳол пешниҳод мекунад. Чунин блок ба корбар нуқтаи равшани оғоз барои шиносоӣ бо шахсият ва маводи вобастаро медиҳад.\n\nНавигатсияи паҳлӯӣ маълумотро ба гурӯҳҳои алоҳида ҷудо мекунад: салоҳиятҳо, рамзҳои президент, китобҳо, мақолаҳо, филмҳо ва ҷоизаҳо. Ҳар пайванд ба самти мушаххас мебарад, бинобар ин барои пайдо кардани мавзуи лозим корбар маҷбур нест тамоми маҷмуаро бинад.\n\nРаванди истифода: корбар бо маълумоти асосӣ шинос шуда, сипас шарҳи ҳол ё навъи маводи ҷолиб — масалан китобҳо, интишорҳо ё филмҳоро интихоб мекунад.\n\nАҳамият барои тиҷорат: сохтори монандро барои саҳифаҳои роҳбарон, коршиносон, муассисони ширкат ё намояндагони ташкилот истифода бурдан мумкин аст. Он муаррифии кӯтоҳро бо гузаришҳои равшан ба дастовардҳо, интишорҳо ва маводи расонаӣ муттаҳид мекунад.",
            },
          },
          {
            slug: "footer",
            title: {
              ru: "Новости и подвал",
              en: "News Feed and Footer",
              tj: "Лентаи хабарҳо ва поёни сомона",
            },
            imageSrc: "/images/projects/president/footer.webp",
            BannerSrc: "/images/projects/president/footer.webp",
            shortInfo: {
              ru: "Завершающая навигация, контакты и социальные каналы",
              en: "Closing navigation, contacts and social channels",
              tj: "Роҳнамоии анҷомӣ, тамосҳо ва шабакаҳои иҷтимоӣ",
            },
            fullInfo: {
              ru: "В нижней части страницы размещена компактная лента новостей: каждая запись показывает заголовок, дату и количество фотографий. Кнопка «Все новости» даёт посетителю понятный переход к полному архиву публикаций.\n\nПодвал выступает дополнительной картой портала. Ссылки сгруппированы по направлениям «Президент», «Правительство» и «Исполнительный аппарат»; рядом размещены официальные социальные каналы и контактные сведения пресс-службы. Логотип и название ресурса сохраняют идентификацию сайта в завершающем блоке.\n\nПользовательский сценарий: после просмотра материала посетитель открывает полный список новостей, переходит в нужный тематический раздел, находит контакты или выбирает официальный канал в социальных сетях.\n\nЦенность для бизнеса: такой подвал полезен для крупных сайтов с глубокой структурой. Он помогает не потерять пользователя в конце страницы, обеспечивает быстрый доступ к ключевым разделам и повышает доверие благодаря контактам и официальным каналам.",
              en: "The lower part of the page contains a compact news feed, where each entry shows a headline, date and image count. A “All News” button gives visitors a clear route to the complete publication archive.\n\nThe footer acts as an additional site map. Links are grouped under President, Government and Executive Office, alongside official social channels and press-service contact details. The logo and site name maintain the resource’s identity in the closing block.\n\nUser journey: after viewing the content, visitors can open the full news list, move to a relevant topic, find contacts or choose an official social channel.\n\nBusiness value: this footer pattern is useful for large websites with a deep structure. It provides clear next steps at the end of a page, rapid access to key sections and added trust through official contacts and channels.",
              tj: "Дар қисми поёнии саҳифа лентаи кӯтоҳи хабарҳо ҷойгир аст: ҳар сабт сарлавҳа, сана ва шумораи аксҳоро нишон медиҳад. Тугмаи «Ҳамаи хабарҳо» ба корбар роҳи равшан барои гузаштан ба бойгонии пурраи интишорҳоро медиҳад.\n\nПоёни сомона ҳамчун харитаи иловагии портал хизмат мекунад. Пайвандҳо ба гурӯҳҳои «Президент», «Ҳукумат» ва «Дастгоҳи иҷроия» ҷудо шудаанд; дар паҳлуи онҳо каналҳои расмии иҷтимоӣ ва маълумоти тамоси хадамоти матбуот ҷойгиранд. Нишон ва номи манбаъ шинохти сомонаро дар блоки анҷомӣ нигоҳ медоранд.\n\nРаванди истифода: корбар пас аз тамошои мавод рӯйхати пурраи хабарҳоро мекушояд, ба бахши мавзуии лозим мегузарад, тамосҳоро меёбад ё канали расмиро дар шабакаҳои иҷтимоӣ интихоб мекунад.\n\nАҳамият барои тиҷорат: чунин поёни сомона барои сайтҳои калон бо сохтори амиқ муфид аст. Он дар анҷоми саҳифа қадамҳои равшан пешниҳод мекунад, дастрасии зуд ба бахшҳои муҳимро таъмин намуда, бо тамосҳо ва каналҳои расмӣ эътимодро зиёд мекунад.",
            },
          },
          {
            slug: "tajikistan-overview",
            title: {
              ru: "Раздел «Таджикистан»",
              en: "Tajikistan Section",
              tj: "Бахши «Тоҷикистон»",
            },
            imageSrc: "/images/projects/president/tajikistan-overview.webp",
            BannerSrc: "/images/projects/president/tajikistan-overview.webp",
            shortInfo: {
              ru: "Справочные материалы о стране с тематической навигацией",
              en: "Reference material about the country with topical navigation",
              tj: "Маводи маълумотӣ дар бораи кишвар бо роҳнамоии мавзуӣ",
            },
            fullInfo: {
              ru: "Раздел «Таджикистан» собирает справочные материалы о стране в одной структуре. Вкладки позволяют перейти к темам государственной независимости, Конституции, истории судебной системы, органам государственной власти, судопроизводству и национальной валюте.\n\nОсновная область отображает подробный текст выбранной темы, а хлебные крошки показывают положение страницы в структуре портала. Справа располагается лента событий с датами и количеством изображений, поэтому справочный раздел остаётся связанным с текущими новостями.\n\nПользовательский сценарий: посетитель выбирает интересующую тему, читает материал, переключается между вкладками и при необходимости открывает актуальную публикацию из боковой ленты.\n\nЦенность для бизнеса: подобная структура подходит для разделов «О компании», базы знаний и нормативной информации. Она делает объёмный текст удобным для чтения и объединяет постоянные сведения с актуальным контентом.",
              en: "The Tajikistan section brings together reference material about the country in one structure. Tabs lead to topics including state independence, the Constitution, the history of the judicial system, public authorities, legal proceedings and the national currency.\n\nThe main area displays detailed text for the selected topic, while breadcrumbs show the page’s location within the portal. An events feed on the right includes dates and image counts, keeping the reference area connected to current news.\n\nUser journey: visitors choose a topic, read the material, switch between tabs and, when needed, open a current publication from the side feed.\n\nBusiness value: this structure works well for About pages, knowledge bases and regulatory information. It makes long-form content easier to read and combines lasting reference information with current updates.",
              tj: "Бахши «Тоҷикистон» маводи маълумотиро дар бораи кишвар дар як сохтор ҷамъ меорад. Варақаҳо ба мавзуъҳои истиқлолияти давлатӣ, Конститутсия, таърихи низоми судӣ, мақомоти давлатӣ, судопарварӣ ва пули миллӣ роҳ медиҳанд.\n\nҚисми асосӣ матни муфассали мавзуи интихобшударо намоиш медиҳад ва пайвандҳои роҳнамо ҷойи саҳифаро дар сохтори портал нишон медиҳанд. Дар тарафи рост лентаи рӯйдодҳо бо сана ва шумораи аксҳо ҷойгир аст, ки бахши маълумотиро бо хабарҳои ҷорӣ мепайвандад.\n\nРаванди истифода: корбар мавзуи ҷолибро интихоб мекунад, матнро мехонад, байни варақаҳо мегузарад ва ҳангоми зарурат интишори ҷориро аз лентаи паҳлӯӣ мекушояд.\n\nАҳамият барои тиҷорат: чунин сохтор барои бахшҳои «Дар бораи ширкат», пойгоҳҳои дониш ва маълумоти меъёрӣ мувофиқ аст. Он матни калонҳаҷмро барои хондан қулай карда, маълумоти доимиро бо маводи ҷорӣ муттаҳид мекунад.",
            },
          },
          {
            slug: "constitution",
            title: {
              ru: "Конституция",
              en: "Constitution",
              tj: "Конститутсия",
            },
            imageSrc: "/images/projects/president/constitution.webp",
            BannerSrc: "/images/projects/president/constitution.webp",
            shortInfo: {
              ru: "Материалы о Конституции в структуре раздела «Таджикистан»",
              en: "Constitution material within the Tajikistan section",
              tj: "Мавод оид ба Конститутсия дар бахши «Тоҷикистон»",
            },
            fullInfo: {
              ru: "Страница «Конституция» раскрывает отдельную тему внутри справочного раздела «Таджикистан». Хлебные крошки фиксируют путь к материалу, а активная вкладка выделяет текущую тему среди связанных разделов о стране, государственном устройстве и национальной валюте.\n\nОсновная часть предназначена для развёрнутого текстового материала: заголовок, логически разделённые абзацы и спокойная типографика делают большой объём информации удобным для последовательного чтения. Боковая лента событий сохраняет доступ к актуальным публикациям без выхода из раздела.\n\nПользовательский сценарий: посетитель переходит к Конституции из тематического меню, читает материал, затем выбирает другую вкладку или открывает актуальное событие из боковой колонки.\n\nЦенность для бизнеса: подобная страница подходит для нормативной документации, политик компании, справочных материалов и юридических разделов. Она сохраняет фокус на содержании, не лишая пользователя навигации по связанным темам.",
              en: "The Constitution page presents a dedicated topic within the Tajikistan reference section. Breadcrumbs establish the route to the material, while the active tab distinguishes the current topic among related areas covering the country, state structure and national currency.\n\nThe main area is designed for long-form content: a heading, logically separated paragraphs and restrained typography make a substantial amount of information comfortable to read. The events feed at the side keeps current publications available without leaving the section.\n\nUser journey: visitors open the Constitution from the topic menu, read the material, then choose another tab or open a current event from the side column.\n\nBusiness value: this type of page suits regulatory documentation, company policies, reference material and legal sections. It keeps the focus on content while preserving navigation through related topics.",
              tj: "Саҳифаи «Конститутсия» мавзуи алоҳидаро дар дохили бахши маълумотии «Тоҷикистон» пешниҳод мекунад. Пайвандҳои роҳнамо роҳи расидан ба маводро нишон медиҳанд ва варақаи фаъол мавзуи ҷориро аз бахшҳои вобаста дар бораи кишвар, сохтори давлатӣ ва пули миллӣ ҷудо мекунад.\n\nҚисми асосӣ барои матни калонҳаҷм пешбинӣ шудааст: сарлавҳа, параграфҳои мантиқан ҷудошуда ва ҳуруфчинии ором хондани ҳаҷми зиёди иттилоотро қулай мегардонанд. Лентаи рӯйдодҳо дар паҳлӯ дастрасиро ба интишорҳои ҷорӣ бе баромадан аз бахш нигоҳ медорад.\n\nРаванди истифода: корбар аз менюи мавзуӣ ба Конститутсия мегузарад, матнро мехонад, сипас варақаи дигарро интихоб мекунад ё рӯйдоди ҷориро аз сутуни паҳлӯӣ мекушояд.\n\nАҳамият барои тиҷорат: чунин саҳифа барои ҳуҷҷатҳои меъёрӣ, сиёсатҳои ширкат, маводи маълумотӣ ва бахшҳои ҳуқуқӣ мувофиқ аст. Он диққатро ба муҳтаво нигоҳ дошта, ҳамзамон роҳнамоӣ ба мавзуъҳои вобастаро таъмин мекунад.",
            },
          },
          {
            slug: "peace-experience",
            title: {
              ru: "Таджикский опыт мира",
              en: "Tajik Experience of Peace",
              tj: "Таҷрибаи сулҳи тоҷикон",
            },
            imageSrc: "/images/projects/president/peace-experience.webp",
            BannerSrc: "/images/projects/president/peace-experience.webp",
            shortInfo: {
              ru: "Справочный материал о мире, согласии и международном сотрудничестве",
              en: "Reference material on peace, unity and international cooperation",
              tj: "Маводи маълумотӣ дар бораи сулҳ, ваҳдат ва ҳамкории байналмилалӣ",
            },
            fullInfo: {
              ru: "Страница «Таджикский опыт мира» раскрывает тематический материал в составе раздела «Таджикистан». Активная вкладка и хлебные крошки показывают контекст публикации и позволяют вернуться к соседним направлениям справочного раздела.\n\nОсновной текст разбит на последовательные абзацы, что помогает воспринимать объёмный историко-аналитический материал. Боковая лента событий сохраняет доступ к свежим публикациям и связывает постоянный справочный контент с текущей информационной повесткой портала.\n\nПользовательский сценарий: посетитель выбирает тему из вкладок, знакомится с материалом, затем возвращается к общему разделу или открывает актуальное событие в боковой колонке.\n\nЦенность для бизнеса: такой формат подойдёт для страниц о ценностях компании, истории организации, социальных инициативах и аналитических публикациях. Чёткая структура помогает представлять сложные темы последовательно и без перегрузки интерфейса.",
              en: "The Tajik Experience of Peace page presents focused material within the Tajikistan section. The active tab and breadcrumbs establish the publication’s context and provide routes back to neighbouring reference topics.\n\nThe main text is divided into a sequence of paragraphs, making a substantial historical and analytical article easier to follow. The events feed at the side maintains access to recent publications and connects lasting reference content with the portal’s current information flow.\n\nUser journey: visitors select the topic from the tabs, read the material, then return to the main section or open a current event from the side column.\n\nBusiness value: this layout suits pages about company values, organisational history, social initiatives and analytical publications. Its clear structure supports presenting complex topics without overloading the interface.",
              tj: "Саҳифаи «Таҷрибаи сулҳи тоҷикон» маводи мавзуиро дар доираи бахши «Тоҷикистон» пешниҳод мекунад. Варақаи фаъол ва пайвандҳои роҳнамо контексти интишорро нишон дода, барои бозгашт ба мавзуъҳои ҳамсоя роҳ медиҳанд.\n\nМатни асосӣ ба параграфҳои пайдарпай ҷудо шудааст, ки дарки маводи калонҳаҷми таърихӣ ва таҳлилиро осон мекунад. Лентаи рӯйдодҳо дар паҳлӯ дастрасиро ба интишорҳои нав нигоҳ дошта, маълумоти доимиро бо ҷараёни иттилоотии ҷории портал мепайвандад.\n\nРаванди истифода: корбар мавзуъро аз варақаҳо интихоб мекунад, матнро мехонад, сипас ба бахши умумӣ бармегардад ё рӯйдоди ҷориро аз сутуни паҳлӯӣ мекушояд.\n\nАҳамият барои тиҷорат: чунин тарҳ барои саҳифаҳо дар бораи арзишҳои ширкат, таърихи ташкилот, ташаббусҳои иҷтимоӣ ва интишорҳои таҳлилӣ мувофиқ аст. Сохтори равшан имкон медиҳад мавзуъҳои мураккаб бидуни изофабори интерфейс пайдарпай пешниҳод шаванд.",
            },
          },
          {
            slug: "statehood",
            title: {
              ru: "Укрепление государственной власти",
              en: "Strengthening Statehood",
              tj: "Таҳкими ҳокимияти давлатӣ",
            },
            imageSrc: "/images/projects/president/statehood.webp",
            BannerSrc: "/images/projects/president/statehood.webp",
            shortInfo: {
              ru: "Тематический материал о государственном строительстве",
              en: "Topical material on state building",
              tj: "Маводи мавзуӣ дар бораи давлатдорӣ",
            },
            fullInfo: {
              ru: "Страница «Укрепление государственной власти» — самостоятельная тема в справочном разделе «Таджикистан». Активная вкладка сразу обозначает выбранное направление, а хлебные крошки помогают сохранить ориентацию в многоуровневой структуре портала.\n\nДлинный текст размещён в основной колонке с комфортной шириной строки и разделением на абзацы. Это создаёт спокойный формат для чтения исторических и аналитических материалов. Справа остаётся лента событий, которая обеспечивает быстрый доступ к актуальным публикациям.\n\nПользовательский сценарий: посетитель открывает тему из набора вкладок, последовательно знакомится с материалом и при необходимости переключается на смежный раздел либо переходит к свежей новости.\n\nЦенность для бизнеса: такой подход применим к разделам о стратегии, истории бренда, устойчивом развитии или корпоративном управлении. Он позволяет органично сочетать объёмное содержимое с постоянной навигацией по сайту.",
              en: "The Strengthening Statehood page is a dedicated topic within the Tajikistan reference section. The active tab immediately identifies the selected area, while breadcrumbs help visitors stay oriented within the portal’s multi-level structure.\n\nLong-form text appears in the main column with a comfortable line length and paragraph separation. This creates a calm reading format for historical and analytical material. The events feed on the right keeps current publications readily available.\n\nUser journey: visitors open the topic from the tab set, read the material in sequence, then switch to a related section or move to a recent news item if needed.\n\nBusiness value: this approach is suitable for strategy, brand-history, sustainability or corporate-governance sections. It combines substantial content with persistent site navigation in a natural way.",
              tj: "Саҳифаи «Таҳкими ҳокимияти давлатӣ» мавзуи алоҳида дар бахши маълумотии «Тоҷикистон» мебошад. Варақаи фаъол самти интихобшударо фавран нишон медиҳад ва пайвандҳои роҳнамо барои нигоҳ доштани самтгирӣ дар сохтори бисёрсатҳаи портал кумак мекунанд.\n\nМатни калонҳаҷм дар сутуни асосӣ бо паҳнои қулайи сатр ва ҷудокунии параграфҳо ҷойгир шудааст. Ин барои хондани маводи таърихӣ ва таҳлилӣ формати ором фароҳам меорад. Дар тарафи рост лентаи рӯйдодҳо дастрасии зуд ба интишорҳои ҷориро нигоҳ медорад.\n\nРаванди истифода: корбар мавзуъро аз маҷмуаи варақаҳо мекушояд, маводро пайдарпай мехонад ва ҳангоми зарурат ба бахши вобаста мегузарад ё хабари навро мекушояд.\n\nАҳамият барои тиҷорат: чунин равиш барои бахшҳо дар бораи стратегия, таърихи бренд, рушди устувор ё идоракунии корпоративӣ мувофиқ аст. Он муҳтавои калонҳаҷмро бо роҳнамоии доимии сайт ба таври табиӣ муттаҳид мекунад.",
            },
          },
          {
            slug: "judicial-power",
            title: {
              ru: "Судебная власть",
              en: "Judicial Power",
              tj: "Ҳокимияти судӣ",
            },
            imageSrc: "/images/projects/president/judicial-power.webp",
            BannerSrc: "/images/projects/president/judicial-power.webp",
            shortInfo: {
              ru: "Справочный материал о судебной системе страны",
              en: "Reference material on the country’s judicial system",
              tj: "Маводи маълумотӣ дар бораи низоми судии кишвар",
            },
            fullInfo: {
              ru: "Страница «Судебная власть» представляет отдельный информационный материал внутри раздела «Таджикистан». Активная вкладка и хлебные крошки помогают посетителю понять текущую тему и быстро перейти к связанным государственным и правовым разделам.\n\nКонтентная колонка организована для чтения длинного текста: заголовок, абзацы и свободное пространство поддерживают понятную иерархию. В правой части страницы сохранена лента событий с датами и количеством фотографий, поэтому пользователь может перейти к свежим материалам в любой момент.\n\nПользовательский сценарий: посетитель открывает тему о судебной системе, изучает справочный материал и продолжает навигацию через вкладки или список актуальных событий.\n\nЦенность для бизнеса: аналогичная структура подходит для юридических разделов, политик, условий использования и баз знаний. Она делает сложную нормативную информацию наглядной и поддерживает переход к связанным материалам.",
              en: "The Judicial Power page presents dedicated reference material within the Tajikistan section. The active tab and breadcrumbs help visitors understand the current topic and quickly reach related government and legal sections.\n\nThe content column is organised for reading long-form text: a heading, paragraphs and generous spacing maintain a clear hierarchy. An events feed with dates and image counts remains on the right, so visitors can move to recent material at any point.\n\nUser journey: visitors open the judicial-system topic, review the reference material and continue through tabs or the current-events list.\n\nBusiness value: a similar structure suits legal sections, policies, terms of use and knowledge bases. It makes complex regulatory information clear and supports movement to related material.",
              tj: "Саҳифаи «Ҳокимияти судӣ» маводи маълумотии алоҳидаро дар дохили бахши «Тоҷикистон» пешниҳод мекунад. Варақаи фаъол ва пайвандҳои роҳнамо ба корбар барои фаҳмидани мавзуи ҷорӣ ва гузаштан ба бахшҳои вобастаи давлатӣ ва ҳуқуқӣ кумак мекунанд.\n\nСутуни муҳтаво барои хондани матни калонҳаҷм ташкил шудааст: сарлавҳа, параграфҳо ва фазои озод иерархияи равшанро нигоҳ медоранд. Дар қисми рости саҳифа лентаи рӯйдодҳо бо сана ва шумораи аксҳо боқӣ мемонад, то корбар дар ҳар лаҳза ба маводи нав гузарад.\n\nРаванди истифода: корбар мавзуи низоми судиро мекушояд, маводи маълумотиро меомӯзад ва тавассути варақаҳо ё рӯйхати рӯйдодҳои ҷорӣ роҳнамоиро идома медиҳад.\n\nАҳамият барои тиҷорат: сохтори монанд барои бахшҳои ҳуқуқӣ, сиёсатҳо, шартҳои истифода ва пойгоҳҳои дониш мувофиқ аст. Он маълумоти мураккаби меъёриро равшан нишон дода, гузариш ба маводи вобастаро таъмин мекунад.",
            },
          },
          {
            slug: "national-currency",
            title: {
              ru: "Национальная валюта",
              en: "National Currency",
              tj: "Пули миллӣ",
            },
            imageSrc: "/images/projects/president/national-currency.webp",
            BannerSrc: "/images/projects/president/national-currency.webp",
            shortInfo: {
              ru: "Справочный материал о национальной денежной системе",
              en: "Reference material on the national monetary system",
              tj: "Маводи маълумотӣ дар бораи низоми пулии миллӣ",
            },
            fullInfo: {
              ru: "Страница «Национальная валюта» завершает набор тематических материалов раздела «Таджикистан». Активная вкладка, хлебные крошки и единая навигация позволяют посетителю воспринимать её как часть общей системы справочной информации о стране.\n\nВ основной колонке размещён подробный текст с отдельным подзаголовком и последовательными абзацами. Боковая лента событий сохраняет на странице динамический элемент, связывая историческую и экономическую информацию с актуальными публикациями портала.\n\nПользовательский сценарий: посетитель открывает тему о валюте, читает материал, затем переключается между смежными вкладками или переходит к новости из боковой ленты.\n\nЦенность для бизнеса: такой формат подходит для финансовых разделов, справочных материалов о продукте, FAQ и образовательного контента. Он помогает представить сложную тему в спокойной, последовательной и легко читаемой форме.",
              en: "The National Currency page completes the collection of thematic material in the Tajikistan section. The active tab, breadcrumbs and shared navigation show that it belongs to the portal’s wider reference system about the country.\n\nThe main column contains detailed text with a distinct subheading and sequential paragraphs. The events feed keeps a dynamic element on the page, connecting historical and economic information to the portal’s current publications.\n\nUser journey: visitors open the currency topic, read the material, then switch between related tabs or move to a news item from the side feed.\n\nBusiness value: this layout is suitable for financial sections, product reference material, FAQs and educational content. It presents complex topics in a calm, sequential and easy-to-read format.",
              tj: "Саҳифаи «Пули миллӣ» маҷмуаи маводи мавзуии бахши «Тоҷикистон»-ро пурра мекунад. Варақаи фаъол, пайвандҳои роҳнамо ва навигатсияи ягона нишон медиҳанд, ки он қисми низоми умумии маълумотӣ дар бораи кишвар мебошад.\n\nДар сутуни асосӣ матни муфассал бо зерсарлавҳаи ҷудогона ва параграфҳои пайдарпай ҷойгир аст. Лентаи рӯйдодҳо дар саҳифа унсури динамикиро нигоҳ дошта, маълумоти таърихӣ ва иқтисодиро бо интишорҳои ҷории портал мепайвандад.\n\nРаванди истифода: корбар мавзуи пулро мекушояд, матнро мехонад, сипас байни варақаҳои вобаста мегузарад ё ба хабар аз лентаи паҳлӯӣ меравад.\n\nАҳамият барои тиҷорат: чунин формат барои бахшҳои молиявӣ, маводи маълумотӣ оид ба маҳсулот, FAQ ва муҳтавои омӯзишӣ мувофиқ аст. Он мавзуъҳои мураккабро дар шакли ором, пайдарпай ва осон барои хондан пешниҳод мекунад.",
            },
          },
          {
            slug: "state-flag",
            title: {
              ru: "Государственный флаг",
              en: "National Flag",
              tj: "Парчами давлатӣ",
            },
            imageSrc: "/images/projects/president/state-flag.webp",
            BannerSrc: "/images/projects/president/state-flag.webp",
            shortInfo: {
              ru: "Символика флага и положение о его использовании",
              en: "Flag symbolism and rules for its use",
              tj: "Рамзҳои парчам ва тартиби истифодаи он",
            },
            fullInfo: {
              ru: "Страница «Государственный флаг» открывает раздел государственной символики. Вкладки позволяют перейти к флагу, гербу и национальному гимну, а активное состояние подчёркивает текущую тему.\n\nГлавную часть занимает крупное изображение флага, которое визуально поддерживает нормативный текст ниже: заголовок документа, дата принятия и последующие положения. Боковая лента событий остаётся доступной, соединяя справочный раздел с актуальными публикациями портала.\n\nПользовательский сценарий: посетитель знакомится с изображением флага и положением о нём, затем при необходимости переходит к гербу или гимну через вкладки либо к свежей новости из боковой колонки.\n\nЦенность для бизнеса: подобная страница подходит для брендбуков, стандартов использования фирменной символики и разделов с визуальными правилами. Она объединяет наглядный образ с ясной нормативной информацией.",
              en: "The National Flag page opens the state-symbols section. Tabs provide routes to the flag, coat of arms and national anthem, while the active state highlights the current topic.\n\nA large flag image forms the main visual focus and supports the regulatory text below it: the document heading, adoption date and subsequent provisions. The events feed remains available at the side, connecting the reference area with the portal’s current publications.\n\nUser journey: visitors review the flag and its regulations, then move to the coat of arms or anthem through the tabs, or to a recent news item from the side column.\n\nBusiness value: a similar page works for brand books, rules for using identity elements and sections containing visual standards. It combines a clear visual asset with straightforward policy information.",
              tj: "Саҳифаи «Парчами давлатӣ» бахши рамзҳои давлатиро мекушояд. Варақаҳо барои гузаштан ба парчам, нишон ва суруди миллӣ роҳ медиҳанд, ҳолати фаъол бошад мавзуи ҷориро ҷудо мекунад.\n\nТасвири калони парчам нуқтаи асосии визуалӣ мебошад ва матни меъёрии поёнро пурра мекунад: сарлавҳаи ҳуҷҷат, санаи қабул ва муқаррароти минбаъда. Лентаи рӯйдодҳо дар паҳлӯ дастрас буда, бахши маълумотиро бо интишорҳои ҷории портал мепайвандад.\n\nРаванди истифода: корбар бо тасвири парчам ва низомномаи он шинос мешавад, сипас тавассути варақаҳо ба нишон ё суруд мегузарад ё аз сутуни паҳлӯӣ хабари навро мекушояд.\n\nАҳамият барои тиҷорат: чунин саҳифа барои брендбукҳо, қоидаҳои истифодаи унсурҳои ҳувият ва бахшҳои дорои стандартҳои визуалӣ мувофиқ аст. Он дороии намоёнро бо маълумоти равшани меъёрӣ муттаҳид мекунад.",
            },
          },
          {
            slug: "state-emblem",
            title: {
              ru: "Государственный герб",
              en: "State Emblem",
              tj: "Нишони давлатӣ",
            },
            imageSrc: "/images/projects/president/state-emblem.webp",
            BannerSrc: "/images/projects/president/state-emblem.webp",
            shortInfo: {
              ru: "Изображение герба и правила его применения",
              en: "Emblem artwork and rules for its use",
              tj: "Тасвири нишон ва қоидаҳои истифодаи он",
            },
            fullInfo: {
              ru: "Страница «Государственный герб» продолжает раздел государственных символов. Вкладки объединяют материалы о флаге, гербе и национальном гимне, а активное состояние помогает быстро понять, какая тема открыта.\n\nВ центре страницы размещено крупное цветное изображение герба. Под ним находятся заголовок официального документа и положения, объясняющие правила применения символа. Справа сохранена лента текущих событий, которая даёт возможность продолжить работу с порталом без возврата на главную страницу.\n\nПользовательский сценарий: посетитель знакомится с изображением герба и официальными правилами, затем переходит к другим государственным символам через вкладки или открывает новость в боковой колонке.\n\nЦенность для бизнеса: такой подход полезен для страниц с корпоративной айдентикой, фирменными знаками и правилами использования визуальных элементов. Он сочетает точное изображение с поясняющим нормативным текстом.",
              en: "The State Emblem page continues the state-symbols section. Tabs combine material about the flag, emblem and national anthem, while the active state makes the current topic immediately clear.\n\nA large, full-colour emblem is centred on the page. Below it are the official document heading and provisions explaining how the symbol may be used. The current-events feed remains available at the side, so visitors can continue using the portal without returning to the homepage.\n\nUser journey: visitors review the emblem and its official rules, then move to other state symbols through the tabs or open a news item from the side column.\n\nBusiness value: this approach is useful for corporate identity pages, brand marks and rules for using visual elements. It pairs an exact visual asset with explanatory policy text.",
              tj: "Саҳифаи «Нишони давлатӣ» бахши рамзҳои давлатиро идома медиҳад. Варақаҳо маводи парчам, нишон ва суруди миллиро муттаҳид мекунанд, ҳолати фаъол бошад мавзуи кушодашударо фавран равшан месозад.\n\nДар маркази саҳифа тасвири калони рангаи нишон ҷойгир аст. Дар поён сарлавҳаи ҳуҷҷати расмӣ ва муқаррароте ҷой доранд, ки тартиби истифодаи рамзро шарҳ медиҳанд. Лентаи рӯйдодҳои ҷорӣ дар паҳлӯ дастрас боқӣ мемонад, то корбар бидуни бозгашт ба саҳифаи асосӣ кор бо порталро идома диҳад.\n\nРаванди истифода: корбар бо нишон ва қоидаҳои расмии он шинос мешавад, сипас тавассути варақаҳо ба дигар рамзҳои давлатӣ мегузарад ё хабарро аз сутуни паҳлӯӣ мекушояд.\n\nАҳамият барои тиҷорат: чунин равиш барои саҳифаҳои ҳувияти корпоративӣ, нишонаҳои бренд ва қоидаҳои истифодаи унсурҳои визуалӣ муфид аст. Он дороии дақиқи визуалиро бо матни тавзеҳии меъёрӣ муттаҳид мекунад.",
            },
          },
          {
            slug: "national-anthem",
            title: {
              ru: "Национальный гимн",
              en: "National Anthem",
              tj: "Суруди миллӣ",
            },
            imageSrc: "/images/projects/president/national-anthem.webp",
            BannerSrc: "/images/projects/president/national-anthem.webp",
            shortInfo: {
              ru: "Текст гимна и сведения об авторах",
              en: "Anthem lyrics and author information",
              tj: "Матни суруд ва маълумот дар бораи муаллифон",
            },
            fullInfo: {
              ru: "Страница «Национальный гимн» завершает блок государственных символов. Активная вкладка выделяет раздел с текстом гимна, а соседние вкладки позволяют перейти к флагу и гербу без выхода из общей структуры.\n\nВ основной колонке размещены название гимна, имена авторов текста и музыки, а также строфы с раздельным форматированием. Такой подход делает длинный текст легко читаемым и сохраняет торжественный характер материала. Справа продолжается лента актуальных событий.\n\nПользовательский сценарий: посетитель открывает гимн, читает текст и сведения об авторах, затем возвращается к другим государственным символам через вкладки либо открывает новостную публикацию из боковой колонки.\n\nЦенность для бизнеса: подобный формат применим для миссии компании, корпоративного манифеста, ценностей бренда и других текстов, которые важно подать с аккуратной типографикой и ясной структурой.",
              en: "The National Anthem page completes the state-symbols section. The active tab highlights the anthem lyrics, while neighbouring tabs provide routes to the flag and emblem without leaving the shared structure.\n\nThe main column includes the anthem title, the lyricist’s and composer’s names, and separately formatted verses. This approach keeps a long text easy to read while retaining the ceremonial character of the material. The current-events feed continues on the right.\n\nUser journey: visitors open the anthem, read its text and author information, then return to other state symbols through the tabs or open a news story from the side column.\n\nBusiness value: this format can support a company mission, corporate manifesto, brand values and other texts that benefit from careful typography and a clear structure.",
              tj: "Саҳифаи «Суруди миллӣ» бахши рамзҳои давлатиро пурра мекунад. Варақаи фаъол бахшро бо матни суруд ҷудо менамояд, варақаҳои ҳамсоя бошанд ба парчам ва нишон бидуни баромадан аз сохтори умумӣ роҳ медиҳанд.\n\nДар сутуни асосӣ номи суруд, номҳои муаллифи матн ва оҳангсоз, инчунин бандҳои алоҳида форматшуда ҷойгиранд. Чунин равиш матни дарозро барои хондан осон гардонда, хусусияти тантанавии маводро нигоҳ медорад. Дар тарафи рост лентаи рӯйдодҳои ҷорӣ идома меёбад.\n\nРаванди истифода: корбар сурудро мекушояд, матн ва маълумот дар бораи муаллифонро мехонад, сипас тавассути варақаҳо ба дигар рамзҳои давлатӣ бармегардад ё хабари навро аз сутуни паҳлӯӣ мекушояд.\n\nАҳамият барои тиҷорат: чунин формат барои рисолати ширкат, манифести корпоративӣ, арзишҳои бренд ва дигар матнҳое мувофиқ аст, ки ба ҳуруфчинии бодиққат ва сохтори равшан ниёз доранд.",
            },
          },
          {
            slug: "leader-of-nation",
            title: {
              ru: "Лидер нации",
              en: "Leader of the Nation",
              tj: "Пешвои миллат",
            },
            imageSrc: "/images/projects/president/leader-of-nation.webp",
            BannerSrc: "/images/projects/president/leader-of-nation.webp",
            shortInfo: {
              ru: "Конституционный закон и материалы о статусе Лидера нации",
              en: "Constitutional law and material on the Leader of the Nation",
              tj: "Қонуни конститутсионӣ ва мавод оид ба мақоми Пешвои миллат",
            },
            fullInfo: {
              ru: "Страница «Лидер нации» представляет конституционный закон в самостоятельном тематическом разделе портала. Хлебные крошки показывают путь от главной страницы, а крупный заголовок формирует ясную точку входа в нормативный материал.\n\nВ центральной части размещены название закона, реквизиты решений, вводная часть и статьи с выделенными заголовками. Такая композиция разделяет официальный документ на удобные для последовательного чтения фрагменты. Справа сохранена лента событий, обеспечивающая быстрый переход от справочного материала к актуальным публикациям.\n\nПользовательский сценарий: посетитель открывает раздел, знакомится с реквизитами и текстом закона, читает нужную статью и при необходимости переходит к новостям из боковой колонки.\n\nЦенность для бизнеса: аналогичная структура подходит для публикации уставов, политик, регламентов и других официальных документов. Она объединяет документный контент с понятной навигацией и актуальной информационной лентой.",
              en: "The Leader of the Nation page presents a constitutional law in a dedicated portal section. Breadcrumbs show the route from the homepage, while the prominent title provides a clear entry point to the regulatory material.\n\nThe central area contains the law title, decision references, introductory text and articles with distinct headings. This composition breaks an official document into sections that are comfortable to read in sequence. The events feed remains on the right, providing a quick route from reference material to current publications.\n\nUser journey: visitors open the section, review the document references and text, read the required article and, when needed, move to news through the side column.\n\nBusiness value: the same structure suits statutes, policies, regulations and other official documents. It combines document content with understandable navigation and a current information feed.",
              tj: "Саҳифаи «Пешвои миллат» қонуни конститутсиониро дар бахши мустақили мавзуии портал пешниҳод мекунад. Роҳнамои саҳифаҳо роҳро аз саҳифаи асосӣ нишон медиҳад ва сарлавҳаи калон нуқтаи равшани воридшавӣ ба маводи меъёриро фароҳам меорад.\n\nДар қисми марказӣ номи қонун, реквизитҳои қарорҳо, матни муқаддимавӣ ва моддаҳо бо сарлавҳаҳои ҷудогона ҷойгир шудаанд. Чунин тарҳ ҳуҷҷати расмиро ба қисмҳои барои хондани пайдарпай мувофиқ ҷудо мекунад. Дар тарафи рост лентаи рӯйдодҳо нигоҳ дошта шудааст, ки гузариши зудро аз маводи маълумотӣ ба интишорҳои ҷорӣ таъмин мекунад.\n\nРаванди истифода: корбар бахшро мекушояд, бо реквизитҳо ва матни қонун шинос мешавад, моддаи лозимро мехонад ва дар ҳолати зарурӣ аз сутуни паҳлӯӣ ба хабарҳо мегузарад.\n\nАҳамият барои тиҷорат: чунин сохтор барои интишори оинномаҳо, сиёсатҳо, низомномаҳо ва дигар ҳуҷҷатҳои расмӣ мувофиқ аст. Он муҳтавои ҳуҷҷатиро бо роҳнамоии фаҳмо ва лентаи иттилоотии ҷорӣ муттаҳид мекунад.",
            },
          },
          {
            slug: "presidential-powers",
            title: {
              ru: "Полномочия президента",
              en: "Presidential Powers",
              tj: "Салоҳиятҳои Президент",
            },
            imageSrc: "/images/projects/president/presidential-powers.webp",
            BannerSrc: "/images/projects/president/presidential-powers.webp",
            shortInfo: {
              ru: "Перечень конституционных полномочий президента",
              en: "A list of the president’s constitutional powers",
              tj: "Рӯйхати салоҳиятҳои конститутсионии Президент",
            },
            fullInfo: {
              ru: "Страница «Президент» раскрывает блок конституционных полномочий в виде последовательного нумерованного списка. Хлебные крошки и заметный заголовок помогают быстро определить раздел, а тематические вкладки дают доступ к сведениям о президенте, его указах, рабочем графике, книгах, фильмах, статьях и выступлениях.\n\nОсновная колонка построена вокруг заголовка и пунктов, каждый из которых описывает отдельное полномочие. Свободное пространство и увеличенный межстрочный интервал делают объёмный официальный перечень удобным для изучения. Боковая лента событий остаётся на виду и связывает справочный материал с новостной частью портала.\n\nПользовательский сценарий: посетитель открывает раздел о президенте, последовательно просматривает полномочия, затем переходит к нужному тематическому материалу через вкладки или открывает актуальную публикацию справа.\n\nЦенность для бизнеса: такой формат подходит для страниц о руководстве, ролях, обязанностях и полномочиях организации. Он помогает подать сложную информацию структурированно, сохраняя быстрый доступ к связанному контенту.",
              en: "The President page presents constitutional powers as a sequential numbered list. Breadcrumbs and a prominent title make the section easy to identify, while topical tabs provide access to material about the president, decrees, work schedule, books, films, articles and speeches.\n\nThe main column is built around a heading and individual list items, each describing a separate power. Generous white space and increased line spacing make the lengthy official list comfortable to review. The events feed remains visible at the side, linking the reference material with the portal’s news section.\n\nUser journey: visitors open the president section, review the powers in order, then move to the required topic through the tabs or open a current publication from the right column.\n\nBusiness value: this format suits pages about leadership, roles, responsibilities and authorities within an organisation. It presents complex information in a structured way while preserving quick access to related content.",
              tj: "Саҳифаи «Президент» бахши салоҳиятҳои конститутсиониро дар шакли рӯйхати пайдарпайи рақамдор пешниҳод мекунад. Роҳнамои саҳифаҳо ва сарлавҳаи намоён барои зуд муайян кардани бахш кумак мекунанд, варақаҳои мавзуӣ бошад ба маълумот дар бораи президент, фармонҳо, ҷадвали корӣ, китобҳо, филмҳо, мақолаҳо ва суханрониҳо роҳ медиҳанд.\n\nСутуни асосӣ аз сарлавҳа ва бандҳои алоҳида иборат аст, ки ҳар кадом як салоҳиятро шарҳ медиҳанд. Фазои озод ва фосилаи васеи байни сатрҳо рӯйхати расмии ҳаҷмдорро барои мутолиа муносиб мегардонанд. Лентаи рӯйдодҳо дар паҳлӯ намоён боқӣ монда, маводи маълумотиро бо бахши хабарии портал мепайвандад.\n\nРаванди истифода: корбар бахши президентро мекушояд, салоҳиятҳоро пайдарпай мутолиа мекунад, сипас тавассути варақаҳо ба маводи мавзуии лозим мегузарад ё интишори ҷориро аз сутуни рост мекушояд.\n\nАҳамият барои тиҷорат: чунин формат барои саҳифаҳо оид ба роҳбарият, нақшҳо, вазифаҳо ва ваколатҳои ташкилот мувофиқ аст. Он маълумоти мураккабро бо тартиби равшан пешниҳод карда, дастрасии зудро ба муҳтавои вобаста нигоҳ медорад.",
            },
          },
          {
            slug: "presidential-standard",
            title: {
              ru: "Президентский штандарт",
              en: "Presidential Standard",
              tj: "Ливои Президент",
            },
            imageSrc: "/images/projects/president/presidential-standard.webp",
            BannerSrc: "/images/projects/president/presidential-standard.webp",
            shortInfo: {
              ru: "Изображение и положение о президентском штандарте",
              en: "The presidential standard and its official regulations",
              tj: "Тасвир ва низомнома дар бораи Ливои Президент",
            },
            fullInfo: {
              ru: "Страница «Президентский штандарт» посвящена одному из официальных символов президента. Вкладки в разделе президентской символики помогают переключаться между штандартом и знаком президента, а верхняя навигация сохраняет связь с другими тематическими материалами портала.\n\nВ центре размещено крупное изображение штандарта с красной, белой и зелёной полосами, а ниже — название закона и статья, описывающая его внешний вид. Такое сочетание позволяет сначала увидеть символ, а затем перейти к его нормативному описанию. Боковая колонка с событиями остаётся доступной для перехода к свежим публикациям.\n\nПользовательский сценарий: посетитель открывает раздел о президентской символике, рассматривает штандарт, читает положение и при необходимости переключается на знак президента или на новостной материал.\n\nЦенность для бизнеса: этот подход применим к страницам с корпоративными знаками, церемониальными атрибутами и правилами их использования. Он объединяет точное визуальное представление с документально оформленной информацией.",
              en: "The Presidential Standard page is dedicated to one of the president’s official symbols. Tabs in the presidential-symbols section let visitors switch between the standard and the presidential sign, while the top navigation keeps the page connected to other portal topics.\n\nA large image of the standard with red, white and green stripes is placed at the centre, followed by the law title and an article describing its appearance. This combination allows visitors to see the symbol first and then read its formal description. The events column remains available for moving to recent publications.\n\nUser journey: visitors open the presidential-symbols section, view the standard, read the regulation and, when necessary, switch to the presidential sign or a news item.\n\nBusiness value: this approach works for pages with corporate marks, ceremonial attributes and rules for using them. It combines an accurate visual representation with formally structured information.",
              tj: "Саҳифаи «Ливои Президент» ба яке аз рамзҳои расмии президент бахшида шудааст. Варақаҳои бахши рамзҳои президентӣ барои гузаштан байни ливо ва нишони президент имкон медиҳанд, роҳнамоии болоӣ бошад робитаро бо дигар маводи мавзуии портал нигоҳ медорад.\n\nДар марказ тасвири калони ливо бо рахҳои сурх, сафед ва сабз ҷойгир шудааст; дар поён номи қонун ва моддае омадааст, ки намуди зоҳирии онро шарҳ медиҳад. Чунин муттаҳидсозӣ имкон медиҳад, ки корбар аввал рамзро бубинад ва баъдан тавсифи расмии онро мутолиа кунад. Сутуни рӯйдодҳо барои гузаштан ба интишорҳои нав дастрас боқӣ мемонад.\n\nРаванди истифода: корбар бахши рамзҳои президентиро мекушояд, ливоро мебинад, низомномаро мехонад ва дар ҳолати зарурӣ ба нишони президент ё хабари нав мегузарад.\n\nАҳамият барои тиҷорат: чунин равиш барои саҳифаҳо бо нишонаҳои корпоративӣ, унсурҳои тантанавӣ ва қоидаҳои истифодаи онҳо мувофиқ аст. Он пешниҳоди дақиқи визуалиро бо маълумоти расман сохторёфта муттаҳид мекунад.",
            },
          },
          {
            slug: "presidential-sign",
            title: {
              ru: "Знак президента",
              en: "Presidential Sign",
              tj: "Нишони Президент",
            },
            imageSrc: "/images/projects/president/presidential-sign.webp",
            BannerSrc: "/images/projects/president/presidential-sign.webp",
            shortInfo: {
              ru: "Изображение и положение о знаке президента",
              en: "The presidential sign and its official regulations",
              tj: "Тасвир ва низомнома дар бораи Нишони Президент",
            },
            fullInfo: {
              ru: "Страница «Знак президента» продолжает раздел президентской символики. Вкладки позволяют переключаться между президентским штандартом и знаком, а хлебные крошки фиксируют положение материала внутри общего раздела «Президент».\n\nГлавный акцент сделан на крупном изображении знака: цепи с медальонами и центрального ордена. Под иллюстрацией размещены название закона и статья, описывающая знак президента. Такое построение помогает совместить внимательное рассмотрение символа с чтением официального документа. Справа остаётся лента актуальных событий.\n\nПользовательский сценарий: посетитель открывает знак президента, изучает его композицию и текст положения, затем при необходимости переходит к штандарту через вкладку либо выбирает новость из боковой колонки.\n\nЦенность для бизнеса: подобная подача подходит для корпоративных наград, знаков отличия, фирменных символов и связанных правил. Она делает сложный визуальный объект понятным и добавляет к нему структурированное документальное сопровождение.",
              en: "The Presidential Sign page continues the presidential-symbols section. Tabs let visitors switch between the presidential standard and sign, while breadcrumbs establish the material’s place inside the broader President section.\n\nThe main focus is a large image of the sign: its chain of medallions and central order. The illustration is followed by the law title and an article describing the presidential sign. This layout pairs close inspection of the symbol with reading the official document. The current-events feed remains on the right.\n\nUser journey: visitors open the presidential sign, study its composition and the regulation text, then switch to the standard through the tab when needed or choose a news item from the side column.\n\nBusiness value: this presentation suits corporate awards, insignia, brand symbols and their associated policies. It makes a complex visual object understandable and provides it with structured documentary context.",
              tj: "Саҳифаи «Нишони Президент» бахши рамзҳои президентиро идома медиҳад. Варақаҳо барои гузаштан байни ливои президент ва нишон имкон медиҳанд, роҳнамои саҳифаҳо бошад ҷойгиршавии маводро дар бахши умумии «Президент» нишон медиҳанд.\n\nТаваҷҷуҳи асосӣ ба тасвири калони нишон равона шудааст: занҷир бо медалонҳо ва ордени марказӣ. Пас аз тасвир номи қонун ва моддае ҷой доранд, ки нишони президентро тавсиф мекунанд. Чунин тарҳ баррасии бодиққати рамзро бо мутолиаи ҳуҷҷати расмӣ якҷо мекунад. Дар тарафи рост лентаи рӯйдодҳои ҷорӣ боқӣ мемонад.\n\nРаванди истифода: корбар нишони президентро мекушояд, таркиб ва матни низомномаро меомӯзад, сипас дар ҳолати зарурӣ тавассути варақа ба ливо мегузарад ё хабареро аз сутуни паҳлӯӣ интихоб мекунад.\n\nАҳамият барои тиҷорат: чунин пешниҳод барои ҷоизаҳои корпоративӣ, аломатҳои фарқкунанда, рамзҳои бренд ва қоидаҳои вобаста ба онҳо мувофиқ аст. Он объекти мураккаби визуалиро фаҳмо карда, онро бо заминаи ҳуҷҷатии сохторёфта пурра мекунад.",
            },
          },
          {
            slug: "biography",
            title: {
              ru: "Биография",
              en: "Biography",
              tj: "Шарҳи ҳол",
            },
            imageSrc: "/images/projects/president/biography.webp",
            BannerSrc: "/images/projects/president/biography.webp",
            shortInfo: {
              ru: "Хронология жизни и деятельности президента",
              en: "A timeline of the president’s life and work",
              tj: "Рӯйхати марҳилаҳои ҳаёт ва фаъолияти президент",
            },
            fullInfo: {
              ru: "Страница «Биография» представляет жизненный и профессиональный путь президента в хронологическом формате. Активная вкладка «Шарҳи ҳол» выделяет биографический раздел среди материалов о полномочиях, символике, книгах, фильмах, статьях и выступлениях.\n\nВ центральной колонке крупное имя открывает последовательность дат и ключевых этапов: образование, трудовая и общественная деятельность, а также последующие государственные должности. Короткие абзацы с привязкой к годам позволяют быстро ориентироваться в длинной биографической справке. Справа сохраняется лента актуальных событий портала.\n\nПользовательский сценарий: посетитель открывает биографию, читает хронологию от ранних этапов до последующих периодов деятельности, затем переключается на другие материалы о президенте или открывает новость из боковой колонки.\n\nЦенность для бизнеса: такой формат подходит для страниц о руководителях, истории компании, карьерных траекториях и ключевых вехах организации. Он делает большой объём справочной информации последовательным и удобным для восприятия.",
              en: "The Biography page presents the president’s personal and professional path in a chronological format. The active Biography tab distinguishes this section among material about powers, symbols, books, films, articles and speeches.\n\nIn the central column, a prominent name introduces a sequence of dates and key stages: education, professional and public work, followed by state positions. Short year-based paragraphs make a lengthy biographical reference easy to navigate. The portal’s current-events feed remains on the right.\n\nUser journey: visitors open the biography, read the timeline from its early stages through later periods of activity, then switch to other material about the president or open a news item from the side column.\n\nBusiness value: this format works for leadership pages, company histories, career journeys and key organisational milestones. It makes a large amount of reference information sequential and comfortable to absorb.",
              tj: "Саҳифаи «Шарҳи ҳол» роҳи зиндагӣ ва фаъолияти касбии президентро дар шакли хронологӣ пешниҳод мекунад. Варақаи фаъоли «Шарҳи ҳол» ин бахшро дар миёни мавод оид ба салоҳиятҳо, рамзҳо, китобҳо, филмҳо, мақолаҳо ва суханрониҳо ҷудо менамояд.\n\nДар сутуни марказӣ номи намоён силсилаи санаҳо ва марҳилаҳои муҳимро оғоз мекунад: таҳсил, фаъолияти меҳнатӣ ва ҷамъиятӣ, инчунин вазифаҳои давлатии минбаъда. Абзацҳои кӯтоҳ бо ишора ба солҳо барои роҳёбӣ дар маълумотномаи ҳаҷмдори биографӣ кумак мекунанд. Дар тарафи рост лентаи рӯйдодҳои ҷории портал боқӣ мемонад.\n\nРаванди истифода: корбар шарҳи ҳолро мекушояд, пайдарпаии марҳилаҳоро аз солҳои аввал то давраҳои минбаъдаи фаъолият мехонад, сипас ба дигар мавод оид ба президент мегузарад ё хабареро аз сутуни паҳлӯӣ мекушояд.\n\nАҳамият барои тиҷорат: чунин формат барои саҳифаҳо оид ба роҳбарон, таърихи ширкат, роҳҳои касбӣ ва марҳилаҳои муҳими ташкилот мувофиқ аст. Он ҳаҷми зиёди маълумоти маълумотиро пайдарпай ва барои дарк қулай мегардонад.",
            },
          },
          {
            slug: "books-catalog",
            title: {
              ru: "Книги президента",
              en: "President’s Books",
              tj: "Китобҳои Президент",
            },
            imageSrc: "/images/projects/president/books-catalog.webp",
            BannerSrc: "/images/projects/president/books-catalog.webp",
            shortInfo: {
              ru: "Каталог книг с поиском, сортировкой и аннотациями",
              en: "A book catalogue with search, sorting and annotations",
              tj: "Феҳристи китобҳо бо ҷустуҷӯ, тартибдиҳӣ ва тавзеҳот",
            },
            fullInfo: {
              ru: "Страница «Книги президента» оформлена как каталог изданий с быстрым поиском и сортировкой по дате. Вкладки разделяют книги президента и книги о президенте, помогая посетителю сразу выбрать нужную подборку.\n\nКарточки книг объединяют обложку, название, библиографические сведения и краткую аннотацию. Двухколоночная сетка позволяет сравнить несколько изданий на одном экране, а поле поиска ускоряет работу с большой коллекцией. Лента текущих событий остаётся доступной в правой колонке.\n\nПользовательский сценарий: посетитель выбирает тип изданий, вводит запрос или задаёт сортировку, знакомится с обложками и описаниями, затем открывает интересующую книгу либо переходит к другим материалам портала.\n\nЦенность для бизнеса: такая структура подходит для электронных библиотек, архивов публикаций, каталога документов и продуктовых коллекций. Она сочетает удобную фильтрацию с содержательными карточками и помогает быстро находить нужный материал.",
              en: "The President’s Books page is designed as a publication catalogue with quick search and date sorting. Tabs separate books by the president from books about the president, helping visitors choose the relevant collection immediately.\n\nBook cards combine a cover, title, bibliographic details and a short annotation. A two-column grid makes it possible to compare several editions on one screen, while the search field speeds up work with a large collection. The current-events feed remains available in the right column.\n\nUser journey: visitors select a collection type, enter a query or set sorting, review covers and descriptions, then open the book of interest or move to other portal content.\n\nBusiness value: this structure suits digital libraries, publication archives, document catalogues and product collections. It combines convenient filtering with informative cards and helps users find the needed material quickly.",
              tj: "Саҳифаи «Китобҳои Президент» ҳамчун феҳристи нашрияҳо бо ҷустуҷӯи зуд ва тартибдиҳӣ аз рӯи сана таҳия шудааст. Варақаҳо китобҳои президент ва китобҳои марбут ба президентро ҷудо мекунанд, то корбар фавран маҷмӯаи лозимро интихоб намояд.\n\nКортҳои китоб муқова, ном, маълумоти библиографӣ ва тавзеҳи кӯтоҳро муттаҳид мекунанд. Шабакаи дусутуна имкон медиҳад, ки якчанд нашрия дар як экран муқоиса шаванд, майдони ҷустуҷӯ бошад кор бо маҷмӯаи калонро метезонад. Лентаи рӯйдодҳои ҷорӣ дар сутуни рост дастрас мемонад.\n\nРаванди истифода: корбар навъи маҷмӯаро интихоб мекунад, дархост ворид мекунад ё тартибдиҳиро муайян месозад, муқоваҳо ва тавсифҳоро мебинад, сипас китоби ҷолибро мекушояд ё ба дигар муҳтавои портал мегузарад.\n\nАҳамият барои тиҷорат: чунин сохтор барои китобхонаҳои электронӣ, бойгониҳои нашрияҳо, феҳристҳои ҳуҷҷатҳо ва маҷмӯаҳои маҳсулот мувофиқ аст. Он филтркунии қулайро бо кортҳои пурмазмун муттаҳид намуда, барои зуд ёфтани маводи лозим кумак мекунад.",
            },
          },
          {
            slug: "books-about-president",
            title: {
              ru: "Книги о президенте",
              en: "Books About the President",
              tj: "Китобҳо дар бораи Президент",
            },
            imageSrc: "/images/projects/president/books-about-president.webp",
            BannerSrc: "/images/projects/president/books-about-president.webp",
            shortInfo: {
              ru: "Каталог исследований и изданий о президенте",
              en: "A catalogue of research and publications about the president",
              tj: "Феҳристи таҳқиқот ва нашрияҳо дар бораи Президент",
            },
            fullInfo: {
              ru: "Страница «Книги о президенте» представляет отдельную подборку исследований и публикаций. Активная вкладка отделяет её от авторских книг президента, а поиск и сортировка по дате помогают быстро сузить каталог до нужных изданий.\n\nКарточки показывают обложки, названия, сведения об авторах и издательские данные, а также развёрнутые аннотации. Двухколоночное расположение даёт возможность видеть несколько работ одновременно и сравнивать их по теме. Справа остаётся новостная лента портала.\n\nПользовательский сценарий: посетитель открывает раздел книг о президенте, использует поиск или сортировку, знакомится с описаниями и выбирает интересующее издание; затем он может переключиться на авторские книги или продолжить чтение актуальных новостей.\n\nЦенность для бизнеса: подобный каталог полезен для библиографий, экспертных публикаций, отраслевых исследований и архивных коллекций. Он разделяет разные типы контента, облегчает поиск и показывает достаточно контекста ещё до открытия материала.",
              en: "The Books About the President page presents a separate collection of research and publications. Its active tab distinguishes it from the president’s authored books, while search and date sorting help visitors narrow the catalogue to the editions they need.\n\nCards display covers, titles, author information, publishing details and extended annotations. A two-column arrangement makes multiple works visible at once and easy to compare by subject. The portal’s news feed remains on the right.\n\nUser journey: visitors open the books-about-the-president section, use search or sorting, review descriptions and select an edition of interest; they can then switch to authored books or continue reading current news.\n\nBusiness value: a catalogue like this is useful for bibliographies, expert publications, industry research and archival collections. It separates content types, simplifies discovery and provides enough context before visitors open an item.",
              tj: "Саҳифаи «Китобҳо дар бораи Президент» маҷмӯаи ҷудогонаи таҳқиқот ва нашрияҳоро пешниҳод мекунад. Варақаи фаъол онро аз китобҳои муаллифии президент фарқ мекунад, ҷустуҷӯ ва тартибдиҳӣ аз рӯи сана бошад барои зуд маҳдуд кардани феҳрист ба нашрияҳои лозим кумак мекунанд.\n\nКортҳо муқоваҳо, номҳо, маълумот дар бораи муаллифон, маълумоти нашрӣ ва тавзеҳоти муфассалро нишон медиҳанд. Ҷойгиршавии дусутуна имкон медиҳад, ки якчанд асар ҳамзамон дида ва аз рӯи мавзуъ муқоиса шаванд. Дар тарафи рост лентаи хабарии портал боқӣ мемонад.\n\nРаванди истифода: корбар бахши китобҳо дар бораи президентро мекушояд, аз ҷустуҷӯ ё тартибдиҳӣ истифода мебарад, тавсифҳоро мехонад ва нашрияи ҷолибро интихоб мекунад; баъдан метавонад ба китобҳои муаллифӣ гузарад ё хондани хабарҳои ҷориро идома диҳад.\n\nАҳамият барои тиҷорат: чунин феҳрист барои библиографияҳо, нашрияҳои коршиносӣ, таҳқиқоти соҳавӣ ва маҷмӯаҳои бойгонӣ муфид аст. Он намудҳои гуногуни муҳтаворо ҷудо карда, ҷустуҷӯро осон ва пеш аз кушодани мавод маълумоти кофӣ медиҳад.",
            },
          },
          {
            slug: "films-catalog",
            title: {
              ru: "Фильмотека",
              en: "Film Library",
              tj: "Филмҳо",
            },
            imageSrc: "/images/projects/president/films-catalog.webp",
            BannerSrc: "/images/projects/president/films-catalog.webp",
            shortInfo: {
              ru: "Каталог документальных фильмов с поиском и сортировкой",
              en: "A documentary-film catalogue with search and sorting",
              tj: "Феҳристи филмҳои ҳуҷҷатӣ бо ҷустуҷӯ ва тартибдиҳӣ",
            },
            fullInfo: {
              ru: "Страница «Фильмотека» собирает документальные фильмы в визуальную сетку. Верхние вкладки разделяют фильмы и фильмономахо, а строка поиска и сортировка по дате позволяют быстро перейти к нужной записи.\n\nКаждая карточка построена вокруг постера и краткого названия, поэтому каталог удобно просматривать как подборку обложек. Равномерная четырёхколоночная сетка поддерживает быстрый обзор нескольких работ, а боковая лента событий сохраняет доступ к актуальным публикациям сайта.\n\nПользовательский сценарий: посетитель выбирает нужную вкладку, вводит запрос или использует сортировку, просматривает постеры и открывает интересующий фильм; затем он может продолжить работу с новостями портала.\n\nЦенность для бизнеса: такой подход подходит для видеобиблиотек, медиаархивов, подборок лекций и продуктовых роликов. Он делает большую коллекцию наглядной, облегчает поиск и поддерживает единый стиль карточек.",
              en: "The Film Library page collects documentary films in a visual grid. The top tabs separate films and film-related material, while search and date sorting let visitors reach the required entry quickly.\n\nEach card is built around a poster and a concise title, making the catalogue easy to browse as a cover collection. An even four-column grid supports rapid scanning of several works, and the events feed keeps current website publications within reach.\n\nUser journey: visitors choose a tab, enter a query or use sorting, browse posters and open a film of interest; they can then continue with the portal’s news.\n\nBusiness value: this approach suits video libraries, media archives, lecture collections and product videos. It makes a large collection easy to scan, simplifies discovery and maintains a consistent card style.",
              tj: "Саҳифаи «Филмҳо» филмҳои ҳуҷҷатиро дар шабакаи визуалӣ ҷамъ меорад. Варақаҳои боло филмҳо ва маводи марбут ба филмро ҷудо мекунанд, сатри ҷустуҷӯ ва тартибдиҳӣ аз рӯи сана бошад ба сабти лозим зуд роҳ медиҳанд.\n\nҲар корт бар постер ва номи кӯтоҳ асос ёфтааст, бинобар ин феҳристро ҳамчун маҷмӯаи муқоваҳо қулай мутолиа кардан мумкин аст. Шабакаи баробари чорсутуна барои баррасии зуди якчанд асар кумак мекунад ва лентаи рӯйдодҳо дастрасиро ба интишорҳои ҷории сомона нигоҳ медорад.\n\nРаванди истифода: корбар варақаи лозимро интихоб мекунад, дархост ворид менамояд ё аз тартибдиҳӣ истифода мебарад, постерҳоро мебинад ва филми ҷолибро мекушояд; сипас метавонад корро бо хабарҳои портал идома диҳад.\n\nАҳамият барои тиҷорат: чунин равиш барои китобхонаҳои видеоӣ, бойгониҳои медиа, маҷмӯаҳои лексияҳо ва роликҳои маҳсулот мувофиқ аст. Он маҷмӯаи калонро барои баррасӣ равшан намуда, ҷустуҷӯро осон ва услуби ягонаи кортҳоро нигоҳ медорад.",
            },
          },
          {
            slug: "films-about-president",
            title: {
              ru: "Фильмы о президенте",
              en: "Films About the President",
              tj: "Филмҳо дар бораи Президент",
            },
            imageSrc: "/images/projects/president/films-about-president.webp",
            BannerSrc: "/images/projects/president/films-about-president.webp",
            shortInfo: {
              ru: "Подборка фильмов о президенте с поиском и сортировкой",
              en: "A film collection about the president with search and sorting",
              tj: "Маҷмӯаи филмҳо дар бораи Президент бо ҷустуҷӯ ва тартибдиҳӣ",
            },
            fullInfo: {
              ru: "Страница «Фильмы о президенте» представляет отдельную подборку видеоматериалов. Активная вкладка отличает её от общего каталога фильмов, а поиск и сортировка по дате помогают быстро найти нужную ленту.\n\nОсновная часть построена как сетка постеров: на каждом изображении виден кадр или портрет, а подпись под ним указывает название фильма. Такое решение делает коллекцию наглядной и позволяет быстро просмотреть серии и отдельные работы. Боковая новостная колонка остаётся доступной в общем интерфейсе портала.\n\nПользовательский сценарий: посетитель открывает фильмы о президенте, вводит запрос или выбирает порядок сортировки, просматривает постеры и названия, затем открывает интересующий материал либо переключается на общий каталог фильмов.\n\nЦенность для бизнеса: аналогичный формат подходит для тематических медиаподборок, видеопортфолио, исторических архивов и образовательных серий. Он ясно отделяет коллекции друг от друга и помогает быстро ориентироваться в визуальном контенте.",
              en: "The Films About the President page presents a separate collection of video material. Its active tab distinguishes it from the general film catalogue, while search and date sorting help visitors locate the required title quickly.\n\nThe main area is arranged as a poster grid: each image shows a frame or portrait, and the caption below identifies the film. This solution makes the collection visual and allows visitors to scan series and individual works quickly. The news column remains available within the shared portal interface.\n\nUser journey: visitors open the films-about-the-president section, enter a query or choose a sort order, review posters and titles, then open the material of interest or switch to the general film catalogue.\n\nBusiness value: a similar format suits themed media selections, video portfolios, historical archives and educational series. It clearly separates collections and helps users navigate visual content quickly.",
              tj: "Саҳифаи «Филмҳо дар бораи Президент» маҷмӯаи ҷудогонаи маводи видеоиро пешниҳод мекунад. Варақаи фаъол онро аз феҳристи умумии филмҳо фарқ мекунад, ҷустуҷӯ ва тартибдиҳӣ аз рӯи сана бошад барои зуд ёфтани филми лозим кумак мекунанд.\n\nҚисми асосӣ ҳамчун шабакаи постерҳо сохта шудааст: ҳар тасвир кадр ё портретро нишон медиҳад ва имзои поён номи филмро муайян мекунад. Чунин роҳҳал маҷмӯаро намоён карда, барои баррасии зуди силсилаҳо ва асарҳои алоҳида имкон медиҳад. Сутуни хабарӣ дар интерфейси умумии портал дастрас мемонад.\n\nРаванди истифода: корбар бахши филмҳо дар бораи президентро мекушояд, дархост ворид мекунад ё тартиби ҷудокуниро интихоб менамояд, постерҳо ва номҳоро мебинад, сипас маводи ҷолибро мекушояд ё ба феҳристи умумии филмҳо мегузарад.\n\nАҳамият барои тиҷорат: чунин формат барои маҷмӯаҳои мавзуии медиа, видеопортфолио, бойгониҳои таърихӣ ва силсилаҳои таълимӣ мувофиқ аст. Он маҷмӯаҳоро равшан ҷудо карда, барои зуд роҳ ёфтан дар муҳтавои визуалӣ кумак мекунад.",
            },
          },
          {
            slug: "articles-bibliography",
            title: {
              ru: "Статьи",
              en: "Articles",
              tj: "Мақолаҳо",
            },
            imageSrc: "/images/projects/president/articles-bibliography.webp",
            BannerSrc: "/images/projects/president/articles-bibliography.webp",
            shortInfo: {
              ru: "Библиографический список статей президента",
              en: "A bibliographic list of the president’s articles",
              tj: "Рӯйхати библиографии мақолаҳои Президент",
            },
            fullInfo: {
              ru: "Страница «Статьи» представляет библиографический список публикаций президента в периодических и научных изданиях. Крупный тематический заголовок и активная вкладка помогают сохранить контекст раздела, а нумерация формирует понятный порядок в длинном перечне.\n\nКаждая запись объединяет название материала, тип публикации, издание, дату и другие выходные данные. Компактная типографика позволяет разместить много библиографической информации на одном экране, сохранив возможность последовательного чтения. Справа продолжает работать лента актуальных событий.\n\nПользовательский сценарий: посетитель открывает раздел статей, просматривает нумерованный список и реквизиты публикаций, затем при необходимости переходит к другим тематическим вкладкам или к новости из боковой колонки.\n\nЦенность для бизнеса: такой формат подходит для списков публикаций экспертов, научных работ, пресс-материалов и архивов контента. Он систематизирует большой массив ссылок и делает его удобным для поиска и цитирования.",
              en: "The Articles page presents a bibliographic list of the president’s publications in periodicals and academic collections. A prominent topic heading and the active tab preserve the section context, while numbering gives a long list a clear order.\n\nEach entry combines the title, publication type, source, date and other bibliographic details. Compact typography makes it possible to place substantial reference information on one screen while preserving sequential readability. The current-events feed continues on the right.\n\nUser journey: visitors open the articles section, review the numbered list and publication details, then move to other topical tabs or a news item from the side column when needed.\n\nBusiness value: this format suits lists of expert publications, research papers, press material and content archives. It systematises a large set of references and makes them convenient to search and cite.",
              tj: "Саҳифаи «Мақолаҳо» рӯйхати библиографии интишорҳои президентро дар нашрияҳои даврӣ ва маҷмӯаҳои илмӣ пешниҳод мекунад. Сарлавҳаи намоёни мавзуӣ ва варақаи фаъол заминаи бахшро нигоҳ медоранд, рақамгузорӣ бошад ба рӯйхати дароз тартиби равшан медиҳад.\n\nҲар сабт ном, навъи интишор, манбаъ, сана ва дигар маълумоти библиографиро муттаҳид мекунад. Ҳуруфчинии фишурда имкон медиҳад, ки ҳаҷми зиёди маълумоти маълумотӣ дар як экран ҷой гирад ва хондани пайдарпай нигоҳ дошта шавад. Лентаи рӯйдодҳои ҷорӣ дар тарафи рост идома меёбад.\n\nРаванди истифода: корбар бахши мақолаҳоро мекушояд, рӯйхати рақамдор ва маълумоти интишорро мебинад, сипас дар ҳолати зарурӣ ба дигар варақаҳои мавзуӣ ё хабар аз сутуни паҳлӯӣ мегузарад.\n\nАҳамият барои тиҷорат: чунин формат барои рӯйхати интишорҳои коршиносон, корҳои илмӣ, маводи матбуотӣ ва бойгониҳои муҳтаво мувофиқ аст. Он маҷмӯи бузурги истинодҳоро ба низом дароварда, барои ҷустуҷӯ ва иқтибосоварӣ қулай мегардонад.",
            },
          },
          {
            slug: "awards",
            title: {
              ru: "Награды",
              en: "Awards",
              tj: "Ҷоизаҳо",
            },
            imageSrc: "/images/projects/president/awards.webp",
            BannerSrc: "/images/projects/president/awards.webp",
            shortInfo: {
              ru: "Сведения о наградах и почётных званиях президента",
              en: "Information about the president’s awards and honorary titles",
              tj: "Маълумот дар бораи ҷоизаҳо ва унвонҳои фахрии Президент",
            },
            fullInfo: {
              ru: "Страница «Награды» посвящена государственным, международным и почётным званиям президента. Активная вкладка выделяет этот справочный раздел в общей структуре материалов о президенте, а основной заголовок сразу обозначает тему публикации.\n\nВ центральной колонке последовательно изложены сведения о награждениях, званиях и связанных с ними исторических обстоятельствах. Крупные абзацы помогают сохранить контекст каждой записи, а боковая лента событий оставляет доступными актуальные материалы портала.\n\nПользовательский сценарий: посетитель открывает раздел наград, читает описание присвоенных званий и связанных решений, затем при необходимости переходит к другим материалам о президенте или к свежей новости из правой колонки.\n\nЦенность для бизнеса: аналогичная структура подходит для страниц с достижениями руководителей, корпоративными наградами, сертификациями и историей признания. Она позволяет последовательно подать фактическую информацию в официальном и легко читаемом формате.",
              en: "The Awards page is dedicated to the president’s state, international and honorary titles. The active tab highlights this reference section within the broader structure of presidential material, while the main heading immediately establishes the publication topic.\n\nThe central column presents information about awards, titles and their related historical context in sequence. Generous paragraphs preserve the context of each entry, and the side events feed keeps current portal material available.\n\nUser journey: visitors open the awards section, read about conferred titles and related decisions, then move to other presidential material or a recent news item from the right column when needed.\n\nBusiness value: a similar structure suits pages about leadership achievements, corporate awards, certifications and recognition history. It presents factual information sequentially in an official, easy-to-read format.",
              tj: "Саҳифаи «Ҷоизаҳо» ба ҷоизаҳои давлатӣ, байналмилалӣ ва унвонҳои фахрии президент бахшида шудааст. Варақаи фаъол ин бахши маълумотиро дар сохтори умумии мавод оид ба президент ҷудо мекунад ва сарлавҳаи асосӣ фавран мавзуи нашрро муайян месозад.\n\nДар сутуни марказӣ маълумот дар бораи ҷоизасупорӣ, унвонҳо ва шароити таърихии вобаста ба онҳо пайдарпай баён шудааст. Абзацҳои калон заминаи ҳар сабтро нигоҳ медоранд ва лентаи рӯйдодҳо дар паҳлӯ маводи ҷории порталро дастрас мегузорад.\n\nРаванди истифода: корбар бахши ҷоизаҳоро мекушояд, тавсифи унвонҳои додашуда ва қарорҳои вобастаро мехонад, сипас дар ҳолати зарурӣ ба дигар мавод оид ба президент ё хабари нав аз сутуни рост мегузарад.\n\nАҳамият барои тиҷорат: чунин сохтор барои саҳифаҳо оид ба дастовардҳои роҳбарон, ҷоизаҳои корпоративӣ, сертификатҳо ва таърихи эътироф мувофиқ аст. Он маълумоти воқеиро пайдарпай, дар шакли расмӣ ва барои хондан осон пешниҳод мекунад.",
            },
          },
          {
            slug: "government-chair",
            title: {
              ru: "Председатель правительства",
              en: "Chair of the Government",
              tj: "Раиси Ҳукумат",
            },
            imageSrc: "/images/projects/president/government-chair.webp",
            BannerSrc: "/images/projects/president/government-chair.webp",
            shortInfo: {
              ru: "Председатель правительства и конституционная роль правительства",
              en: "The chair of government and the government’s constitutional role",
              tj: "Раиси Ҳукумат ва нақши конститутсионии ҳукумат",
            },
            fullInfo: {
              ru: "Страница «Председатель правительства» открывает раздел о правительстве и его устройстве. Вкладки обеспечивают переход к председателю, указам, членам и заседаниям правительства, а крупный заголовок формирует ясную структуру справочного материала.\n\nВ центре представлены имя председателя, официальный портрет и выдержка из конституционного закона о правительстве. Такая композиция объединяет персональную информацию с нормативным контекстом, сохраняя видимой боковую ленту актуальных событий.\n\nПользовательский сценарий: посетитель открывает раздел правительства, знакомится с председателем и основным положением закона, затем переходит к указам, составу или заседаниям через вкладки либо открывает свежую новость справа.\n\nЦенность для бизнеса: подобный формат подходит для страниц о руководстве организаций, управленческой структуре и регламентах. Он сочетает карточку ключевого лица с документальным описанием его роли и связанной навигацией.",
              en: "The Chair of the Government page opens the section about the government and its structure. Tabs provide routes to the chair, decrees, members and government meetings, while a prominent heading creates a clear reference layout.\n\nThe centre contains the chair’s name, an official portrait and an excerpt from the constitutional law on the government. This composition combines personal information with regulatory context while keeping the current-events feed visible at the side.\n\nUser journey: visitors open the government section, learn about the chair and the main legal provision, then move to decrees, membership or meetings through the tabs, or open a recent news item on the right.\n\nBusiness value: a similar format suits pages about organisational leadership, management structure and regulations. It pairs a key-person card with documentary context and related navigation.",
              tj: "Саҳифаи «Раиси Ҳукумат» бахшро оид ба ҳукумат ва сохтори он мекушояд. Варақаҳо ба раиси ҳукумат, фармонҳо, аъзо ва маҷлисҳои ҳукумат роҳ медиҳанд, сарлавҳаи намоён бошад сохтори равшани маводи маълумотиро ташкил мекунад.\n\nДар марказ номи раис, портрети расмӣ ва иқтибос аз қонуни конститутсионӣ дар бораи ҳукумат ҷойгир шудаанд. Чунин тарҳ маълумоти шахсиро бо заминаи меъёрӣ муттаҳид карда, лентаи рӯйдодҳои ҷориро дар паҳлӯ намоён нигоҳ медорад.\n\nРаванди истифода: корбар бахши ҳукуматро мекушояд, бо раиси ҳукумат ва муқаррароти асосии қонун шинос мешавад, сипас тавассути варақаҳо ба фармонҳо, ҳайат ё маҷлисҳо мегузарад ё хабари навро аз тарафи рост мекушояд.\n\nАҳамият барои тиҷорат: чунин формат барои саҳифаҳо оид ба роҳбарияти ташкилот, сохтори идоракунӣ ва низомномаҳо мувофиқ аст. Он корти шахси калидиро бо тавсифи ҳуҷҷатии нақш ва роҳнамоии вобаста муттаҳид мекунад.",
            },
          },
          {
            slug: "government-decree",
            title: {
              ru: "Постановление правительства",
              en: "Government Decree",
              tj: "Қарори Ҳукумат",
            },
            imageSrc: "/images/projects/president/government-decree.webp",
            BannerSrc: "/images/projects/president/government-decree.webp",
            shortInfo: {
              ru: "Постановление о составе правительства и должностях",
              en: "A decree on the government’s composition and offices",
              tj: "Қарор дар бораи ҳайати ҳукумат ва вазифаҳо",
            },
            fullInfo: {
              ru: "Страница «Постановление правительства» публикует официальный нормативный документ о составе правительства. Активная вкладка выделяет раздел среди материалов о председателе, членах и заседаниях, а хлебные крошки показывают место документа внутри структуры портала.\n\nВ основной области размещены государственный герб, реквизиты постановления, его название и текст с перечнем должностей. Центрированная шапка документа отделяет реквизиты от основного содержания и подчёркивает официальный характер материала. Боковая лента событий остаётся доступна для перехода к свежим новостям.\n\nПользовательский сценарий: посетитель открывает постановление, знакомится с датой, номером и текстом документа, просматривает состав и должности, затем переходит к другим разделам правительства через вкладки.\n\nЦенность для бизнеса: такой формат подходит для публикации решений, распоряжений, протоколов и организационных структур. Он делает официальный документ понятным, обеспечивает удобную навигацию и сохраняет весь важный контекст на одной странице.",
              en: "The Government Decree page publishes an official regulatory document on the government’s composition. The active tab distinguishes it from material about the chair, members and meetings, while breadcrumbs show the document’s place inside the portal structure.\n\nThe main area includes the state emblem, decree details, its title and text with a list of offices. A centred document heading separates the references from the main content and emphasises the material’s official nature. The side events feed remains available for moving to recent news.\n\nUser journey: visitors open the decree, review its date, number and text, examine the composition and offices, then move to other government sections through the tabs.\n\nBusiness value: this format suits decisions, orders, minutes and organisational structures. It makes an official document understandable, provides convenient navigation and keeps all essential context on one page.",
              tj: "Саҳифаи «Қарори Ҳукумат» ҳуҷҷати расмии меъёриро дар бораи ҳайати ҳукумат нашр мекунад. Варақаи фаъол онро аз мавод оид ба раис, аъзо ва маҷлисҳо ҷудо мекунад, роҳнамои саҳифаҳо бошад ҷойи ҳуҷҷатро дар сохтори портал нишон медиҳанд.\n\nДар қисми асосӣ нишони давлатӣ, реквизитҳои қарор, номи он ва матн бо рӯйхати вазифаҳо ҷойгир шудаанд. Сарлавҳаи марказии ҳуҷҷат реквизитҳоро аз муҳтавои асосӣ ҷудо карда, хусусияти расмии маводро таъкид мекунад. Лентаи рӯйдодҳо дар паҳлӯ барои гузаштан ба хабарҳои нав дастрас мемонад.\n\nРаванди истифода: корбар қарорро мекушояд, сана, рақам ва матни ҳуҷҷатро мехонад, ҳайат ва вазифаҳоро мебинад, сипас тавассути варақаҳо ба дигар бахшҳои ҳукумат мегузарад.\n\nАҳамият барои тиҷорат: чунин формат барои интишори қарорҳо, фармоишҳо, протоколҳо ва сохторҳои ташкилотӣ мувофиқ аст. Он ҳуҷҷати расмиро фаҳмо намуда, роҳнамоии қулай ва тамоми заминаи муҳимро дар як саҳифа нигоҳ медорад.",
            },
          },
          {
            slug: "government-members",
            title: {
              ru: "Состав правительства",
              en: "Government Members",
              tj: "Аъзои Ҳукумат",
            },
            imageSrc: "/images/projects/president/government-members.webp",
            BannerSrc: "/images/projects/president/government-members.webp",
            shortInfo: {
              ru: "Руководители и члены правительства",
              en: "Government leaders and members",
              tj: "Роҳбарон ва аъзои ҳукумат",
            },
            fullInfo: {
              ru: "Страница «Состав правительства» показывает организационную структуру через портреты и должности руководителей. Активная вкладка обозначает раздел со списком членов правительства, а соседние вкладки позволяют перейти к председателю, постановлениям и заседаниям.\n\nОсновная колонка выстроена вертикально: сначала председатель, затем заместители и другие участники состава. Под каждым портретом указаны должность и имя, благодаря чему посетитель быстро считывает иерархию. Лента событий в правой колонке остаётся доступной во время просмотра справочной информации.\n\nПользовательский сценарий: посетитель открывает состав правительства, знакомится с председателем и заместителями, последовательно просматривает карточки должностных лиц и при необходимости переходит к связанным документам или новостям.\n\nЦенность для бизнеса: такой формат применим для разделов «Команда», руководящих органов, департаментов и советов директоров. Он наглядно показывает структуру, связывает роли с людьми и легко расширяется новыми карточками.",
              en: "The Government Members page presents the organisational structure through portraits and leadership roles. The active tab identifies the section listing government members, while neighbouring tabs lead to the chair, decrees and meetings.\n\nThe main column is arranged vertically: first the chair, followed by deputies and other members. Each portrait has a role and name beneath it, allowing visitors to read the hierarchy quickly. The events feed remains available in the right column while reference information is being reviewed.\n\nUser journey: visitors open the government-members page, learn about the chair and deputies, review official cards in sequence and, when needed, move to related documents or news.\n\nBusiness value: this format works for Team pages, governing bodies, departments and boards of directors. It makes structure visible, connects roles with people and scales easily with new cards.",
              tj: "Саҳифаи «Аъзои Ҳукумат» сохтори ташкилиро тавассути портретҳо ва вазифаҳои роҳбарон нишон медиҳад. Варақаи фаъол бахши рӯйхати аъзои ҳукуматро муайян мекунад, варақаҳои ҳамсоя бошанд ба раис, қарорҳо ва маҷлисҳо роҳ медиҳанд.\n\nСутуни асосӣ ба таври амудӣ тартиб дода шудааст: аввал раис, баъдан муовинон ва дигар аъзо. Дар зери ҳар портрет вазифа ва ном оварда мешавад, ки ба корбар барои зуд дарк кардани зинабандӣ кумак мекунад. Лентаи рӯйдодҳо дар сутуни рост ҳангоми мутолиаи маълумоти расмӣ дастрас мемонад.\n\nРаванди истифода: корбар саҳифаи аъзои ҳукуматро мекушояд, бо раис ва муовинон шинос мешавад, кортҳои шахсони мансабдорро пайдарпай мебинад ва дар ҳолати зарурӣ ба ҳуҷҷатҳои вобаста ё хабарҳо мегузарад.\n\nАҳамият барои тиҷорат: чунин формат барои бахшҳои «Даста», мақомоти роҳбарӣ, шуъбаҳо ва шӯрои директорон мувофиқ аст. Он сохторро намоён карда, вазифаҳоро бо одамон мепайвандад ва бо кортҳои нав ба осонӣ васеъ мешавад.",
            },
          },
          {
            slug: "government-meetings",
            title: {
              ru: "Заседания правительства",
              en: "Government Meetings",
              tj: "Маҷлисҳои Ҳукумат",
            },
            imageSrc: "/images/projects/president/government-meetings.webp",
            BannerSrc: "/images/projects/president/government-meetings.webp",
            shortInfo: {
              ru: "Архив заседаний правительства с фотоматериалами",
              en: "An archive of government meetings with photo materials",
              tj: "Бойгонии маҷлисҳои ҳукумат бо маводи аксӣ",
            },
            fullInfo: {
              ru: "Страница «Заседания правительства» собирает архив заседаний в формате новостных карточек. Активная вкладка выделяет этот раздел среди материалов о председателе, постановлениях и составе правительства, а каждая запись содержит фотографию, название, дату, место и количество изображений.\n\nВертикальный список делает архив удобным для последовательного просмотра: миниатюра слева даёт визуальный контекст, а текстовая часть справа содержит основные реквизиты публикации. Боковая колонка с актуальными событиями остаётся доступной на протяжении всего списка.\n\nПользовательский сценарий: посетитель открывает заседания, просматривает ленту по датам, ориентируется по фотографиям и числу материалов, затем открывает интересующую публикацию или переходит к другим разделам правительства.\n\nЦенность для бизнеса: такой формат подходит для архивов встреч, протокольных мероприятий, конференций и корпоративных событий. Он объединяет хронологию, визуальные доказательства и метаданные в понятный каталог.",
              en: "The Government Meetings page collects a meeting archive in a news-card format. The active tab distinguishes this section from material about the chair, decrees and members, while each record includes a photo, title, date, location and image count.\n\nA vertical list makes the archive easy to browse in sequence: the thumbnail on the left provides visual context, while the text on the right contains the publication’s core details. The current-events column remains available throughout the list.\n\nUser journey: visitors open the meetings section, browse the timeline by date, use photos and material counts to orient themselves, then open a publication of interest or move to other government sections.\n\nBusiness value: this format suits archives of meetings, protocol events, conferences and corporate activities. It combines chronology, visual evidence and metadata in an understandable catalogue.",
              tj: "Саҳифаи «Маҷлисҳои Ҳукумат» бойгонии маҷлисҳоро дар шакли кортҳои хабарӣ ҷамъ меорад. Варақаи фаъол ин бахшро аз мавод оид ба раис, қарорҳо ва аъзо ҷудо мекунад; ҳар сабт акс, ном, сана, ҷой ва шумораи тасвирҳоро дар бар мегирад.\n\nРӯйхати амудӣ бойгониро барои тамошои пайдарпай қулай мегардонад: тасвири хурд аз тарафи чап заминаи визуалӣ медиҳад, қисми матнӣ аз тарафи рост бошад маълумоти асосии нашрро дар бар мегирад. Сутуни рӯйдодҳои ҷорӣ дар тамоми рӯйхат дастрас мемонад.\n\nРаванди истифода: корбар бахши маҷлисҳоро мекушояд, лентаро аз рӯи санаҳо мебинад, аз рӯи аксҳо ва шумораи мавод роҳ меёбад, сипас нашри ҷолибро мекушояд ё ба дигар бахшҳои ҳукумат мегузарад.\n\nАҳамият барои тиҷорат: чунин формат барои бойгониҳои вохӯриҳо, чорабиниҳои протоколӣ, конфронсҳо ва рӯйдодҳои корпоративӣ мувофиқ аст. Он хронология, далелҳои визуалӣ ва метамаълумотро дар феҳристи фаҳмо муттаҳид мекунад.",
            },
          },
          {
            slug: "government-meeting-detail",
            title: {
              ru: "Публикация о заседании",
              en: "Meeting Publication",
              tj: "Нашр дар бораи маҷлис",
            },
            imageSrc: "/images/projects/president/government-meeting-detail.webp",
            BannerSrc: "/images/projects/president/government-meeting-detail.webp",
            shortInfo: {
              ru: "Детальная публикация заседания с фотогалереей",
              en: "A detailed meeting publication with a photo gallery",
              tj: "Нашри муфассали маҷлис бо галереяи аксҳо",
            },
            fullInfo: {
              ru: "Страница публикации о заседании правительства раскрывает одно событие в формате фотогалереи. Вверху размещены заголовок, дата, место и кнопка для просмотра материалов, а основную часть занимает крупный кадр заседания.\n\nПод главным изображением доступна лента миниатюр, которая показывает дополнительные фотографии и даёт быстрый переход между ними. Навигационные элементы на изображении и возможность загрузки расширяют работу с визуальными материалами, а правая колонка сохраняет ленту актуальных событий.\n\nПользовательский сценарий: посетитель открывает публикацию, знакомится с датой и местом, просматривает основное изображение и миниатюры, переключается между кадрами или загружает материал, затем переходит к другой новости.\n\nЦенность для бизнеса: такой шаблон подходит для отчётов о мероприятиях, кейсов, пресс-релизов и новостей с визуальными доказательствами. Он делает один материал самодостаточной страницей и аккуратно объединяет текстовые метаданные с галереей.",
              en: "The government-meeting publication page presents one event as a photo gallery. The top area contains the title, date, location and a button for viewing material, while a large meeting photograph occupies the main area.\n\nA thumbnail strip below the hero image shows additional photos and provides quick transitions between them. On-image navigation and download capability extend the use of visual material, while the right column keeps the current-events feed available.\n\nUser journey: visitors open the publication, review the date and location, view the main image and thumbnails, switch between photos or download material, then move to another news story.\n\nBusiness value: this template suits event reports, case studies, press releases and news with visual evidence. It makes a single item a self-contained page and cleanly combines textual metadata with a gallery.",
              tj: "Саҳифаи нашр дар бораи маҷлиси ҳукумат як рӯйдодро дар шакли галереяи аксҳо пешниҳод мекунад. Дар боло сарлавҳа, сана, ҷой ва тугмаи дидани мавод ҷойгиранд, қисми асосиро бошад тасвири калони маҷлис ишғол мекунад.\n\nДар зери тасвири асосӣ лентаи тасвирҳои хурд дастрас аст, ки аксҳои иловагиро нишон дода, гузариши зуд байни онҳоро фароҳам меорад. Унсурҳои роҳнамоӣ дар рӯи тасвир ва имкони боргирӣ кор бо маводи визуалиро васеъ мекунанд, сутуни рост бошад лентаи рӯйдодҳои ҷориро нигоҳ медорад.\n\nРаванди истифода: корбар нашрро мекушояд, сана ва ҷойро мебинад, тасвири асосӣ ва тасвирҳои хурдро тамошо мекунад, байни кадрҳо мегузарад ё маводро боргирӣ намуда, баъдан ба хабари дигар мегузарад.\n\nАҳамият барои тиҷорат: чунин қолаб барои ҳисоботҳо аз чорабиниҳо, кейсҳо, пресс-релизҳо ва хабарҳо бо далелҳои визуалӣ мувофиқ аст. Он як маводро ба саҳифаи мустақил табдил дода, метамаълумоти матниро бо галерея ба таври тоза муттаҳид мекунад.",
            },
          },
          {
            slug: "executive-office-head",
            title: {
              ru: "Руководитель исполнительного аппарата",
              en: "Head of the Executive Office",
              tj: "Роҳбари Дастгоҳи иҷроия",
            },
            imageSrc: "/images/projects/president/executive-office-head.webp",
            BannerSrc: "/images/projects/president/executive-office-head.webp",
            shortInfo: {
              ru: "Портрет и биографическая справка руководителя аппарата",
              en: "Portrait and biography of the executive office head",
              tj: "Портрет ва шарҳи ҳоли роҳбари дастгоҳ",
            },
            fullInfo: {
              ru: "Страница «Руководитель исполнительного аппарата» представляет профиль руководителя аппарата президента. Тематические вкладки позволяют перейти к руководителю, положениям, структуре, помощникам и пресс-службе, а крупный заголовок формирует отдельный информационный раздел.\n\nВ центре размещены имя, должность и официальный портрет, после которого следует биографическая справка с основными этапами образования и профессиональной деятельности. Такая последовательность сначала даёт визуальную идентификацию, а затем раскрывает опыт и карьерный путь. Справа остаётся лента актуальных событий портала.\n\nПользовательский сценарий: посетитель открывает профиль руководителя, видит должность и портрет, читает биографию, затем переходит к структуре аппарата, положениям или новостям через навигацию.\n\nЦенность для бизнеса: аналогичный формат подходит для профилей руководителей, представителей органов управления и ключевых экспертов. Он объединяет официальную фотографию, роль и структурированную биографию в одной понятной странице.",
              en: "The Head of the Executive Office page presents the profile of the president’s executive-office leader. Topical tabs provide routes to the head, regulations, structure, assistants and press service, while a prominent heading forms a dedicated information area.\n\nThe centre contains the name, role and official portrait, followed by a biographical reference covering major stages of education and professional activity. This sequence provides visual identification first and then explains experience and career path. The portal’s current-events feed remains on the right.\n\nUser journey: visitors open the leader’s profile, see the role and portrait, read the biography, then move to the office structure, regulations or news through navigation.\n\nBusiness value: a similar format suits profiles of leaders, governance representatives and key experts. It combines an official photograph, role and structured biography on one understandable page.",
              tj: "Саҳифаи «Роҳбари Дастгоҳи иҷроия» профили роҳбари дастгоҳи президенти ҷумҳуриро пешниҳод мекунад. Варақаҳои мавзуӣ ба роҳбар, низомнома, сохтор, ёварон ва хадамоти матбуот роҳ медиҳанд, сарлавҳаи калон бошад бахши мустақили иттилоотиро ташкил мекунад.\n\nДар марказ ном, вазифа ва портрети расмӣ ҷой доранд, баъдан шарҳи ҳол бо марҳилаҳои асосии таҳсил ва фаъолияти касбӣ меояд. Чунин пайдарпайӣ аввал шиносоии визуалӣ медиҳад ва сипас таҷриба ва роҳи касбиро мекушояд. Лентаи рӯйдодҳои ҷории портал дар тарафи рост боқӣ мемонад.\n\nРаванди истифода: корбар профили роҳбарро мекушояд, вазифа ва портретро мебинад, шарҳи ҳолро мехонад, сипас тавассути роҳнамоӣ ба сохтори дастгоҳ, низомнома ё хабарҳо мегузарад.\n\nАҳамият барои тиҷорат: чунин формат барои профилҳои роҳбарон, намояндагони мақомоти идоракунӣ ва коршиносони калидӣ мувофиқ аст. Он акси расмӣ, вазифа ва шарҳи ҳоли сохторёфтаро дар як саҳифаи фаҳмо муттаҳид мекунад.",
            },
          },
          {
            slug: "executive-office-regulations",
            title: {
              ru: "Положение об аппарате",
              en: "Executive Office Regulations",
              tj: "Низомнома",
            },
            imageSrc: "/images/projects/president/executive-office-regulations.webp",
            BannerSrc: "/images/projects/president/executive-office-regulations.webp",
            shortInfo: {
              ru: "Положение об исполнительном аппарате президента",
              en: "Regulations governing the president’s executive office",
              tj: "Низомнома дар бораи Дастгоҳи иҷроияи Президент",
            },
            fullInfo: {
              ru: "Страница «Положение об аппарате» публикует нормативный документ, регулирующий деятельность исполнительного аппарата президента. Хлебные крошки и активная вкладка помогают определить раздел, а реквизиты указа в верхней части фиксируют дату и номер основания документа.\n\nВ центральной колонке расположены название положения, вводный раздел и пронумерованные пункты. Такая структура отделяет официальные реквизиты от содержания и позволяет последовательно изучать задачи, полномочия и порядок работы аппарата. Лента актуальных событий сохраняется в правой колонке.\n\nПользовательский сценарий: посетитель открывает положение, сверяет реквизиты указа, читает общие положения и нужные пункты, затем переходит к структуре, помощникам или другим материалам раздела через вкладки.\n\nЦенность для бизнеса: подобная подача подходит для уставов, регламентов, положений о подразделениях и внутренних политик. Она делает длинный нормативный текст понятным, удобно делит его на разделы и сохраняет контекст документа.",
              en: "The Executive Office Regulations page publishes the regulatory document governing the president’s executive office. Breadcrumbs and the active tab identify the section, while decree details in the upper area establish the document’s date and number.\n\nThe central column contains the regulations title, an introductory section and numbered provisions. This structure separates official references from the content and allows visitors to study the office’s responsibilities, powers and working order in sequence. The current-events feed remains in the right column.\n\nUser journey: visitors open the regulations, check the decree details, read the general provisions and required clauses, then move to the structure, assistants or other section material through the tabs.\n\nBusiness value: this presentation suits charters, regulations, departmental provisions and internal policies. It makes a long regulatory text understandable, divides it conveniently into sections and preserves the document context.",
              tj: "Саҳифаи «Низомнома» ҳуҷҷати меъёриеро нашр мекунад, ки фаъолияти Дастгоҳи иҷроияи Президентро танзим менамояд. Роҳнамои саҳифаҳо ва варақаи фаъол бахшро муайян мекунанд, реквизитҳои фармон дар қисми боло бошад сана ва рақами асоси ҳуҷҷатро нишон медиҳанд.\n\nДар сутуни марказӣ номи низомнома, фасли муқаддимавӣ ва бандҳои рақамдор ҷойгир шудаанд. Чунин сохтор реквизитҳои расмиро аз муҳтаво ҷудо карда, барои мутолиаи пайдарпайи вазифаҳо, ваколатҳо ва тартиби кори дастгоҳ имкон медиҳад. Лентаи рӯйдодҳои ҷорӣ дар сутуни рост боқӣ мемонад.\n\nРаванди истифода: корбар низомномаро мекушояд, реквизитҳои фармонро месанҷад, муқаррароти умумӣ ва бандҳои лозимро мехонад, сипас тавассути варақаҳо ба сохтор, ёварон ё дигар маводи бахш мегузарад.\n\nАҳамият барои тиҷорат: чунин пешниҳод барои оинномаҳо, низомномаҳо, муқаррарот оид ба воҳидҳо ва сиёсатҳои дохилӣ мувофиқ аст. Он матни меъёрии дарозро фаҳмо намуда, онро ба бахшҳо қулай ҷудо мекунад ва заминаи ҳуҷҷатро нигоҳ медорад.",
            },
          },
          {
            slug: "executive-office-structure",
            title: {
              ru: "Структура исполнительного аппарата",
              en: "Executive Office Structure",
              tj: "Сохтор",
            },
            imageSrc: "/images/projects/president/executive-office-structure.webp",
            BannerSrc: "/images/projects/president/executive-office-structure.webp",
            shortInfo: {
              ru: "Перечень подразделений исполнительного аппарата",
              en: "A list of executive-office departments",
              tj: "Рӯйхати воҳидҳои Дастгоҳи иҷроия",
            },
            fullInfo: {
              ru: "Страница «Структура исполнительного аппарата» показывает состав аппарата президента в виде последовательного перечня подразделений и должностей. Активная вкладка «Структура» выделяет этот раздел среди материалов о руководителе, положении, помощниках и пресс-службе.\n\nОсновная колонка начинается с заголовка и далее перечисляет руководство аппарата, помощников по направлениям, секретариаты и профильные службы. Однотипное оформление строк делает длинную организационную структуру легко просматриваемой. Справа сохраняется лента актуальных событий портала.\n\nПользовательский сценарий: посетитель открывает структуру, быстро находит нужное направление или подразделение в списке, затем переходит к положению об аппарате, профилю руководителя или другим материалам через вкладки.\n\nЦенность для бизнеса: такой формат подходит для оргструктур компаний, ведомств, департаментов и проектных команд. Он помогает представить большое число ролей без перегруженной схемы и упрощает поиск ответственного направления.",
              en: "The Executive Office Structure page presents the president’s office as a sequential list of departments and roles. The active Structure tab distinguishes this section from materials about the office head, regulations, advisers, and press service.\n\nThe main column begins with a heading and then lists the office leadership, advisers by area, secretariats, and specialist services. Consistent row styling makes a long organisational structure easy to scan, while the current-events feed remains available in the sidebar.\n\nUser journey: a visitor opens the structure, quickly finds the relevant department or responsibility area, and then uses the tabs to continue to the regulations, the head’s profile, or related materials.\n\nBusiness value: this pattern works well for company, agency, department, and project-team organisational structures. It presents many roles without an overloaded diagram and makes it easier to identify the responsible area.",
              tj: "Саҳифаи «Сохтор» ҳайати дастгоҳи президентро ҳамчун рӯйхати пайдарпайи воҳидҳо ва вазифаҳо нишон медиҳад. Ҷадвали фаъоли «Сохтор» ин бахшро аз мавод дар бораи роҳбар, низомнома, ёрдамчиён ва хадамоти матбуот ҷудо мекунад.\n\nДар сутуни асосӣ аввал сарлавҳа ва сипас роҳбарияти дастгоҳ, ёрдамчиён аз рӯи самтҳо, котиботҳо ва хадамоти соҳавӣ оварда шудаанд. Тарзи ягонаи намоиши сатрҳо сохтори калони ташкилиро барои мутолиа осон мегардонад, дар ҳоле ки лентаи рӯйдодҳои нав дар канор нигоҳ дошта мешавад.\n\nСенарияи корбар: меҳмон саҳифаи сохторро мекушояд, дар рӯйхат воҳид ё самти заруриро зуд меёбад ва баъдан тавассути ҷадвалҳо ба низомнома, профили роҳбар ё маводи дигар мегузарад.\n\nАрзиши тиҷоратӣ: чунин формат барои сохторҳои ташкилии ширкатҳо, идораҳо, департаментҳо ва гурӯҳҳои лоиҳавӣ мувофиқ аст. Он имкон медиҳад, ки шумораи зиёди вазифаҳо бе нақшаи аз ҳад пурбор пешниҳод шуда, ҷустуҷӯи самти масъул осон гардад.",
            },
          },
          {
            slug: "executive-office-assistants",
            title: {
              ru: "Помощники президента",
              en: "Presidential Assistants",
              tj: "Ёрдамчиёни Президент",
            },
            imageSrc: "/images/projects/president/executive-office-assistants.webp",
            BannerSrc: "/images/projects/president/executive-office-assistants.webp",
            shortInfo: {
              ru: "Профили помощников президента по направлениям",
              en: "Profiles of presidential assistants by area",
              tj: "Профилҳои ёрдамчиёни Президент аз рӯи самтҳо",
            },
            fullInfo: {
              ru: "Страница «Помощники президента» представляет сотрудников исполнительного аппарата, отвечающих за отдельные направления. Активная вкладка выделяет раздел среди сведений о руководителе, положении, структуре и пресс-службе.\n\nВ центральной части размещены официальные портреты, имена и должности помощников. Карточки выстроены вертикально: сначала показан сотрудник, затем указана его функциональная область, что делает список удобным для последовательного просмотра. Справа сохраняется лента актуальных событий портала.\n\nПользовательский сценарий: посетитель открывает раздел, просматривает профили и быстро сопоставляет человека с направлением его работы, после чего переходит к структуре аппарата или другим связанным материалам через вкладки.\n\nЦенность для бизнеса: такой формат подходит для страниц команд, руководителей направлений и ключевых экспертов. Он сочетает визуальное представление, должность и зону ответственности, помогая посетителю быстрее найти нужный контакт.",
              en: "The Presidential Assistants page presents executive-office staff responsible for individual areas. The active tab distinguishes this section from information about the office head, regulations, structure, and press service.\n\nThe central area contains official portraits, names, and roles of the assistants. The cards are arranged vertically: each staff member is shown first, followed by their responsibility area, making the list easy to review in sequence. The portal’s current-events feed remains on the right.\n\nUser journey: a visitor opens the section, reviews the profiles, quickly matches a person to their area of responsibility, and then moves to the office structure or other related material through the tabs.\n\nBusiness value: this format suits team, department-lead, and key-expert pages. It combines a visual profile, role, and responsibility area, helping visitors find the right contact sooner.",
              tj: "Саҳифаи «Ёрдамчиёни Президент» кормандони Дастгоҳи иҷроияро, ки барои самтҳои ҷудогона масъуланд, муаррифӣ мекунад. Ҷадвали фаъол ин бахшро аз маълумот дар бораи роҳбар, низомнома, сохтор ва хадамоти матбуот ҷудо мекунад.\n\nДар қисми марказӣ портретҳои расмӣ, номҳо ва вазифаҳои ёрдамчиён ҷой доранд. Кортҳо ба таври амудӣ ҷойгир шудаанд: аввал корманд нишон дода мешавад, сипас самти фаъолияти ӯ оварда мешавад, ки мутолиаи пайдарпайи рӯйхатро осон мекунад. Лентаи рӯйдодҳои ҷории портал дар тарафи рост боқӣ мемонад.\n\nСенарияи корбар: меҳмон бахшро мекушояд, профилҳоро мебинад, шахсро бо самти масъулияташ зуд мувофиқ месозад ва баъдан тавассути ҷадвалҳо ба сохтори дастгоҳ ё маводи дигари алоқаманд мегузарад.\n\nАрзиши тиҷоратӣ: чунин формат барои саҳифаҳои дастаҳо, роҳбарони самтҳо ва коршиносони калидӣ мувофиқ аст. Он профили визуалӣ, вазифа ва доираи масъулиятро муттаҳид карда, ба меҳмон дар ёфтани тамоси зарурӣ кумак мекунад.",
            },
          },
          {
            slug: "executive-office-press-service",
            title: {
              ru: "Служба печати президента",
              en: "Presidential Press Service",
              tj: "Хадамоти матбуот",
            },
            imageSrc: "/images/projects/president/executive-office-press-service.webp",
            BannerSrc: "/images/projects/president/executive-office-press-service.webp",
            shortInfo: {
              ru: "Информация о работе службы печати президента",
              en: "Information about the presidential press service",
              tj: "Маълумот дар бораи фаъолияти хадамоти матбуот",
            },
            fullInfo: {
              ru: "Страница службы печати президента знакомит с её назначением, задачами и руководителем. Активная вкладка «Служба печати» выделяет раздел среди других материалов исполнительного аппарата.\n\nВ центральной колонке последовательно размещены вводный текст о работе службы, описание ключевых функций и блок с именем, должностью и портретом руководителя. Структура текста разбита на небольшие абзацы, поэтому официальная информация остаётся удобной для чтения. В правой колонке сохраняется лента актуальных новостей.\n\nПользовательский сценарий: посетитель читает, за какие направления отвечает служба, знакомится с руководителем и при необходимости переходит к структуре аппарата, профилям помощников или другим разделам через вкладки.\n\nЦенность для бизнеса: такой формат подходит для страниц пресс-служб, коммуникационных подразделений и отделов по связям с общественностью. Он объединяет описание функций и контактное лицо, повышая прозрачность и удобство навигации.",
              en: "The Presidential Press Service page introduces its purpose, responsibilities, and head. The active Press Service tab distinguishes this section from other executive-office materials.\n\nThe central column presents an introduction to the service’s work, a description of its key functions, and a block with the head’s name, role, and portrait. The content is divided into short paragraphs so that official information remains easy to read. A current-news feed stays in the right column.\n\nUser journey: a visitor learns which areas the service covers, gets acquainted with its head, and uses the tabs to continue to the office structure, assistant profiles, or other sections when needed.\n\nBusiness value: this format suits press-office, communications, and public-relations pages. It combines a description of functions with a contact person, improving transparency and navigation.",
              tj: "Саҳифаи хадамоти матбуоти президент бо таъинот, вазифаҳо ва роҳбари он шинос мекунад. Ҷадвали фаъоли «Хадамоти матбуот» ин бахшро аз дигар маводи Дастгоҳи иҷроия ҷудо менамояд.\n\nДар сутуни марказӣ матни муқаддимавӣ дар бораи фаъолияти хадамот, тавсифи вазифаҳои асосӣ ва блок бо ном, вазифа ва портрети роҳбар пайдарпай ҷойгир шудаанд. Матн ба бандҳои кӯтоҳ ҷудо шудааст, то маълумоти расмӣ барои хондан қулай бошад. Лентаи хабарҳои нав дар сутуни рост нигоҳ дошта мешавад.\n\nСенарияи корбар: меҳмон мефаҳмад, ки хадамот барои кадом самтҳо масъул аст, бо роҳбари он шинос мешавад ва ҳангоми зарурат тавассути ҷадвалҳо ба сохтори дастгоҳ, профилҳои ёрдамчиён ё бахшҳои дигар мегузарад.\n\nАрзиши тиҷоратӣ: чунин формат барои саҳифаҳои хадамоти матбуот, бахшҳои коммуникатсия ва равобит бо ҷомеа мувофиқ аст. Он тавсифи вазифаҳоро бо шахси тамос муттаҳид карда, шаффофият ва роҳнамоиро беҳтар мекунад.",
            },
          },
          {
            slug: "presidential-appeal-form",
            title: {
              ru: "Обращение к президенту",
              en: "Appeal to the President",
              tj: "Нома ба Президент",
            },
            imageSrc: "/images/projects/president/presidential-appeal-form.webp",
            BannerSrc: "/images/projects/president/presidential-appeal-form.webp",
            shortInfo: {
              ru: "Форма для отправки личного обращения",
              en: "Form for submitting a personal appeal",
              tj: "Шакли ирсоли муроҷиати шахсӣ",
            },
            fullInfo: {
              ru: "Страница «Обращение к президенту» предоставляет электронную форму для подачи личного обращения. В верхней части размещено пояснение о требованиях к содержанию и данным заявителя, а ниже начинается единая форма ввода.\n\nПоля формы собраны в последовательную структуру: имя, фамилия, страна, адрес, телефон, электронная почта, тема и текст обращения. Нейтральный фон, крупные скруглённые поля и заметные подписи помогают сосредоточиться на заполнении без лишних визуальных элементов.\n\nПользовательский сценарий: посетитель знакомится с правилами, указывает контактные данные, формулирует тему и текст обращения, затем передаёт его через форму.\n\nЦенность для бизнеса: такой интерфейс подходит для приёма обращений, запросов в службу поддержки, заявок и обратной связи. Чёткая последовательность полей снижает число ошибок, а структурированные данные упрощают последующую обработку обращений.",
              en: "The Appeal to the President page provides an electronic form for submitting a personal appeal. The upper area explains requirements for the message and applicant data, followed by a single input form.\n\nThe fields follow a clear sequence: first name, surname, country, address, phone number, email, subject, and appeal text. A neutral background, large rounded inputs, and visible labels help visitors focus on completion without unnecessary visual elements.\n\nUser journey: the visitor reviews the rules, enters contact details, writes a subject and message, then submits the appeal through the form.\n\nBusiness value: this interface suits appeals, support requests, applications, and feedback collection. A clear field sequence reduces errors, while structured data simplifies the subsequent handling of submissions.",
              tj: "Саҳифаи «Нома ба Президент» шакли электрониро барои ирсоли муроҷиати шахсӣ пешниҳод мекунад. Дар қисми боло шарҳи талабот ба муҳтавои муроҷиат ва маълумоти муроҷиаткунанда ҷойгир буда, баъдан шакли ягонаи воридкунӣ оғоз мешавад.\n\nМайдонҳои шакл пайдарпай ҷойгир шудаанд: ном, насаб, кишвар, суроға, рақами телефон, почтаи электронӣ, мавзуъ ва матни муроҷиат. Заминаи бетараф, майдонҳои калони гирдшуда ва нишонаҳои равшан имкон медиҳанд, ки корбар бидуни унсурҳои зиёдатии визуалӣ ба пуркунӣ диққат диҳад.\n\nСенарияи корбар: меҳмон бо қоидаҳо шинос мешавад, маълумоти тамосро ворид мекунад, мавзуъ ва матни муроҷиатро менависад ва сипас онро тавассути шакл мефиристад.\n\nАрзиши тиҷоратӣ: чунин интерфейс барои қабули муроҷиатҳо, дархостҳои дастгирӣ, аризаҳо ва бозхурд мувофиқ аст. Пайдарпайии возеҳи майдонҳо хатоҳоро кам мекунад ва маълумоти сохторёфта коркарди минбаъдаи муроҷиатҳоро осон мегардонад.",
            },
          },
          {
            slug: "presidential-appeal-attachments",
            title: {
              ru: "Вложения к обращению",
              en: "Appeal Attachments",
              tj: "Замимаҳо ба муроҷиат",
            },
            imageSrc: "/images/projects/president/presidential-appeal-attachments.webp",
            BannerSrc: "/images/projects/president/presidential-appeal-attachments.webp",
            shortInfo: {
              ru: "Загрузка файлов и финальная отправка обращения",
              en: "File upload and final appeal submission",
              tj: "Боркунии файлҳо ва ирсоли ниҳоии муроҷиат",
            },
            fullInfo: {
              ru: "Экран завершает форму обращения к президенту и показывает действия после заполнения основных полей. Пользователь может приложить подтверждающие файлы, сохранить черновик либо перейти к окончательной отправке.\n\nВ верхней части видны оставшиеся контактные поля и поле текста обращения. Ниже расположен блок вложений с ограничением размера файла, двумя строками загрузки и понятными состояниями выбора и удаления файла. Отдельно отображается проверка reCAPTCHA и основная кнопка отправки.\n\nПользовательский сценарий: посетитель прикрепляет необходимые документы, при необходимости сохраняет обращение, проходит проверку «Я не робот» и отправляет заполненную форму.\n\nЦенность для бизнеса: такой финальный этап подходит для сервисов заявок, обращений и документооборота. Возможность приложить материалы, сохранить результат и подтвердить отправку делает процесс надёжнее и повышает качество получаемых обращений.",
              en: "This screen completes the Appeal to the President form and shows the steps after the main fields have been filled out. Visitors can attach supporting files, save a draft, or proceed to final submission.\n\nThe upper area shows the remaining contact fields and the appeal text field. Below is an attachments block with a file-size limit, two upload rows, and clear file-selection and removal states. A reCAPTCHA check and the primary submit button are displayed separately.\n\nUser journey: the visitor attaches required documents, saves the appeal if needed, passes the “I’m not a robot” check, and sends the completed form.\n\nBusiness value: this final stage suits application, appeal, and document-workflow services. The ability to attach materials, save progress, and confirm submission makes the process more reliable and improves the quality of incoming requests.",
              tj: "Ин экран шакли муроҷиат ба Президентро анҷом дода, амалҳоро пас аз пур кардани майдонҳои асосӣ нишон медиҳад. Корбар метавонад файлҳои тасдиқкунандаро замима кунад, нусхаи кориро нигоҳ дорад ё ба ирсоли ниҳоӣ гузарад.\n\nДар қисми боло майдонҳои боқимондаи тамос ва майдони матни муроҷиат дида мешаванд. Дар поён блоки замимаҳо бо маҳдудияти ҳаҷми файл, ду сатри боркунӣ ва ҳолатҳои равшани интихоб ва ҳазфи файл ҷойгир аст. Санҷиши reCAPTCHA ва тугмаи асосии ирсол алоҳида нишон дода шудаанд.\n\nСенарияи корбар: меҳмон ҳуҷҷатҳои заруриро замима мекунад, ҳангоми зарурат муроҷиатро нигоҳ медорад, аз санҷиши «Ман робот нестам» мегузарад ва шакли пуршударо мефиристад.\n\nАрзиши тиҷоратӣ: чунин марҳилаи ниҳоӣ барои хизматҳои ариза, муроҷиат ва гардиши ҳуҷҷатҳо мувофиқ аст. Имкони замима кардани мавод, нигоҳ доштани натиҷа ва тасдиқи ирсол равандро боэътимодтар намуда, сифати муроҷиатҳои воридшавандаро беҳтар мекунад.",
            },
          },
          {
            slug: "search-results",
            title: {
              ru: "Результаты поиска",
              en: "Search Results",
              tj: "Натиҷаҳои ҷустуҷӯ",
            },
            imageSrc: "/images/projects/president/search-results.webp",
            BannerSrc: "/images/projects/president/search-results.webp",
            shortInfo: {
              ru: "Поиск материалов портала по ключевому слову",
              en: "Portal content search by keyword",
              tj: "Ҷустуҷӯи маводи портал аз рӯи калимаи калидӣ",
            },
            fullInfo: {
              ru: "Страница результатов поиска показывает материалы портала, найденные по запросу «Таджикистан». В верхней части размещена широкая строка поиска, а ниже — список публикаций с заголовком, фрагментом текста, датой и типом материала.\n\nРезультаты выстроены вертикально, поэтому посетитель может быстро просмотреть несколько совпадений и выбрать интересующую публикацию. В правой колонке размещены календарь, кнопка перехода к расписанию и лента актуальных событий, сохраняющие контекст портала во время поиска.\n\nПользовательский сценарий: посетитель вводит запрос, знакомится с заголовками и краткими фрагментами найденных материалов, затем открывает нужную публикацию для подробного чтения.\n\nЦенность для бизнеса: поиск делает большой контентный ресурс удобнее для навигации и сокращает путь к нужной информации. Формат подходит для новостных порталов, баз знаний, архивов и корпоративных сайтов с большим числом материалов.",
              en: "The Search Results page displays portal materials found for the query “Tajikistan”. A wide search field sits at the top, followed by a list of publications with a title, text excerpt, date, and content type.\n\nThe results are arranged vertically so visitors can quickly review multiple matches and choose a relevant publication. The right column contains a calendar, a schedule link, and a current-events feed, preserving the portal context during a search.\n\nUser journey: the visitor enters a query, reviews titles and short excerpts of found materials, and opens the relevant publication for detailed reading.\n\nBusiness value: search makes a large content resource easier to navigate and shortens the route to needed information. This format suits news portals, knowledge bases, archives, and corporate sites with extensive content.",
              tj: "Саҳифаи натиҷаҳои ҷустуҷӯ маводи порталро, ки аз рӯи дархости «Тоҷикистон» ёфт шудаанд, нишон медиҳад. Дар қисми боло сатри васеи ҷустуҷӯ ҷойгир аст ва дар поён рӯйхати нашрияҳо бо сарлавҳа, порае аз матн, сана ва навъи мавод оварда мешавад.\n\nНатиҷаҳо ба таври амудӣ ҷойгир шудаанд, то меҳмон чандин мувофиқатро зуд бинад ва нашрияи шавқоварро интихоб кунад. Дар сутуни рост тақвим, тугмаи гузариш ба ҷадвал ва лентаи рӯйдодҳои нав ҷой доранд, ки заминаи порталро ҳангоми ҷустуҷӯ нигоҳ медоранд.\n\nСенарияи корбар: меҳмон дархостро ворид мекунад, сарлавҳаҳо ва пораҳои кӯтоҳи маводи ёфтшударо мебинад ва барои мутолиаи муфассал нашрияи заруриро мекушояд.\n\nАрзиши тиҷоратӣ: ҷустуҷӯ манбаи дорои муҳтавои калонро барои роҳнамоӣ қулайтар намуда, роҳи расидан ба маълумоти заруриро кӯтоҳ мекунад. Чунин формат барои порталҳои хабарӣ, пойгоҳҳои дониш, бойгониҳо ва сомонаҳои корпоративӣ бо маводи зиёд мувофиқ аст.",
            },
          },
          {
            slug: "text-size-controls",
            title: {
              ru: "Настройка размера текста",
              en: "Text Size Controls",
              tj: "Танзими андозаи матн",
            },
            imageSrc: "/images/projects/president/text-size-controls.webp",
            BannerSrc: "/images/projects/president/text-size-controls.webp",
            shortInfo: {
              ru: "Панель доступности для изменения размера шрифта",
              en: "Accessibility controls for adjusting font size",
              tj: "Панели дастрасӣ барои тағйири андозаи ҳарф",
            },
            fullInfo: {
              ru: "Экран раздела «Таджикистан» демонстрирует встроенную панель настройки размера текста. В верхней части сайта рядом с языковыми настройками открывается компактное окно со шкалой от малого к большому размеру шрифта.\n\nОсновное содержание остаётся доступным: заголовок раздела, тематические вкладки, текст статьи и лента актуальных событий видны одновременно с настройкой. Такое решение позволяет изменить удобство чтения, не покидая текущую страницу и не теряя контекст.\n\nПользовательский сценарий: посетитель открывает панель доступности, выбирает комфортный размер текста и продолжает читать материал в обновлённом масштабе.\n\nЦенность для бизнеса: подобный инструмент делает портал удобнее для пользователей с разными особенностями зрения и предпочтениями чтения. Он повышает доступность цифрового сервиса и помогает соответствовать современным ожиданиям к инклюзивным интерфейсам.",
              en: "This screen from the Tajikistan section demonstrates a built-in text-size control panel. In the top area next to the language settings, a compact window opens with a scale from smaller to larger font size.\n\nThe main content remains available: the section heading, topic tabs, article text, and current-events feed are visible alongside the control. This lets visitors adjust reading comfort without leaving the current page or losing context.\n\nUser journey: the visitor opens the accessibility panel, selects a comfortable text size, and continues reading the material at the updated scale.\n\nBusiness value: this tool makes a portal more convenient for people with different visual needs and reading preferences. It improves digital-service accessibility and supports modern expectations for inclusive interfaces.",
              tj: "Ин экрани бахши «Тоҷикистон» панели дарунсохти танзими андозаи матнро нишон медиҳад. Дар қисми болоии сомона дар паҳлуи танзимоти забон равзанаи хурд бо миқёс аз ҳарфи хурд то калон кушода мешавад.\n\nМуҳтавои асосӣ дастрас боқӣ мемонад: сарлавҳаи бахш, ҷадвалҳои мавзуӣ, матни мақола ва лентаи рӯйдодҳои нав ҳамзамон бо танзим дида мешаванд. Ин қарор имкон медиҳад, ки бароҳатии хондан бе тарки саҳифаи ҷорӣ ва гум кардани замина тағйир дода шавад.\n\nСенарияи корбар: меҳмон панели дастрасиро мекушояд, андозаи мувофиқи матнро интихоб мекунад ва мутолиаи маводро дар миқёси нав идома медиҳад.\n\nАрзиши тиҷоратӣ: чунин абзор порталро барои корбарони дорои хусусиятҳои гуногуни биноӣ ва афзалиятҳои хондан қулайтар мекунад. Он дастрасии хизмати рақамиро беҳтар намуда, ба интизориҳои муосир аз интерфейсҳои фарогир мувофиқат мекунад.",
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
            slug: "announcement-component",
            title: {
              ru: "Блок объявлений",
              en: "Announcements Block",
              tj: "Блоки эълонҳо",
            },
            imageSrc:
              "/images/projects/pic/web/announcement-on-the-homepage.png",
            BannerSrc:
              "/images/projects/pic/web/announcement-on-the-homepage.png",
            shortInfo: {
              ru: "Актуальные объявления и тендеры проекта",
              en: "Current project announcements and tenders",
              tj: "Эълонҳо ва тендерҳои ҷории лоиҳа",
            },
            fullInfo: {
              ru: "Интерактивный блок объявлений позволяет оперативно информировать посетителей сайта о предстоящих событиях, вакансиях, конкурсах и открытых тендерах в рамках проекта. Каждое объявление оформлено в виде карточки с датой, кратким описанием и ссылкой для подробного ознакомления. Это обеспечивает прозрачность процессов закупок и найма, а также упрощает доступ заинтересованных лиц к важной информации.",
              en: "The interactive announcements block allows visitors to be promptly informed about upcoming events, vacancies, competitions, and open tenders within the project. Each announcement is designed as a card with a date, a brief description, and a link for detailed reading. This ensures the transparency of procurement and hiring processes, and also simplifies access to important information for interested parties.",
              tj: "Блоки интерактивии эълонҳо имкон медиҳад, ки меҳмонони сомона фавран дар бораи рӯйдодҳои дарпешистода, ҷойҳои холӣ, озмунҳо ва тендерҳои кушода дар доираи лоиҳа огоҳ карда шаванд. Ҳар як эълон дар шакли корт бо сана, тавсифи кӯтоҳ ва истинод барои шиносоии муфассал таҳия шудааст. Ин шаффофияти равандҳои харид ва кирояро таъмин мекунад ва инчунин дастрасии шахсони ҳавасмандро ба иттилооти муҳим осон менамояд.",
            },
          },
          {
            slug: "complaint-mechanism",
            title: {
              ru: "Механизм подачи жалоб",
              en: "Complaint Handling Mechanism",
              tj: "Механизми баррасии шикоятҳо",
            },
            imageSrc:
              "/images/projects/pic/web/complaint-handling-mechanism-on-the-homepage.png",
            BannerSrc:
              "/images/projects/pic/web/complaint-handling-mechanism-on-the-homepage.png",
            shortInfo: {
              ru: "Форма обратной связи для граждан",
              en: "Feedback form for citizens",
              tj: "Шакли алоқаи баръакс барои шаҳрвандон",
            },
            fullInfo: {
              ru: "В соответствии с требованиями Всемирного банка и государственными стандартами прозрачности, на портале реализован блок Механизма подачи и рассмотрения жалоб (GRM). Граждане и заинтересованные стороны могут легко найти инструкции и прямую форму для отправки обращений, отзывов или жалоб. Форма обеспечивает конфиденциальность и позволяет прикреплять файлы, что гарантирует соблюдение социальных и экологических стандартов проекта.",
              en: "In accordance with World Bank requirements and state transparency standards, the portal features a Grievance Redress Mechanism (GRM) block. Citizens and stakeholders can easily find instructions and a direct form to submit appeals, feedback, or complaints. The form ensures confidentiality and allows for file attachments, guaranteeing compliance with the social and environmental standards of the project.",
              tj: "Мутобиқи талаботи Бонки ҷаҳонӣ ва стандартҳои давлатии шаффофият, дар портал блоки Механизми баррасӣ ва ҳалли шикоятҳо (GRM) амалӣ карда шудааст. Шаҳрвандон ва ҷонибҳои манфиатдор метавонанд дастурҳо ва шакли мустақимро барои ирсоли муроҷиатҳо, фикру мулоҳизаҳо ё шикоятҳо ба осонӣ пайдо кунанд. Шакл махфиятро таъмин мекунад ва имкон медиҳад, ки файлҳо замима карда шаванд, ки риояи стандартҳои иҷтимоӣ ва экологии лоиҳаро кафолат медиҳад.",
            },
          },
          {
            slug: "news-homepage-component",
            title: {
              ru: "Лента новостей на главной",
              en: "News Feed on Homepage",
              tj: "Лентаи хабарҳо дар саҳифаи асосӣ",
            },
            imageSrc: "/images/projects/pic/web/news-on-the-homepage.png",
            BannerSrc: "/images/projects/pic/web/news-on-the-homepage.png",
            shortInfo: {
              ru: "Последние новости и события проекта",
              en: "Latest project news and events",
              tj: "Навтарин хабарҳо ва рӯйдодҳои лоиҳа",
            },
            fullInfo: {
              ru: "Новостной блок на главной странице автоматически подтягивает самые свежие публикации, чтобы держать посетителей в курсе хода реализации проекта. Интерфейс представлен в виде стильной карусели или сетки карточек с превью изображений, датой и заголовком. При клике на карточку пользователь переходит на полную страницу статьи. Блок спроектирован так, чтобы привлекать внимание, но не перегружать главную страницу текстом.",
              en: "The news block on the homepage automatically pulls the latest publications to keep visitors updated on the project's progress. The interface is presented as a stylish carousel or a grid of cards with image previews, date, and title. Clicking on a card takes the user to the full article page. The block is designed to attract attention without overloading the main page with text.",
              tj: "Блоки хабарҳо дар саҳифаи асосӣ ба таври худкор нашрҳои навтаринро мегирад, то меҳмононро аз ҷараёни татбиқи лоиҳа огоҳ созад. Интерфейс дар шакли карусели услубӣ ё шабакаи кортҳо бо пешнамоиши тасвирҳо, сана ва сарлавҳа пешниҳод шудааст. Бо пахш кардани корт, корбар ба саҳифаи пурраи мақола мегузарад. Блок тавре тарҳрезӣ шудааст, ки таваҷҷӯҳро ҷалб кунад, аммо саҳифаи асосиро бо матн аз ҳад зиёд пур накунад.",
            },
          },
          {
            slug: "president-component",
            title: {
              ru: "Цитаты и выступления Лидера Нации",
              en: "Quotes and Speeches of the Leader of the Nation",
              tj: "Иқтибосҳо ва суханрониҳои Пешвои Миллат",
            },
            imageSrc:
              "/images/projects/pic/web/prezedent-component-on-the-homepage.png",
            BannerSrc:
              "/images/projects/pic/web/prezedent-component-on-the-homepage.png",
            shortInfo: {
              ru: "Раздел с важными заявлениями и цитатами Главы государства",
              en: "Section with important statements and quotes from the Head of State",
              tj: "Бахши изҳорот ва иқтибосҳои муҳими Роҳбари давлат",
            },
            fullInfo: {
              ru: "На главной странице портала выделен специальный блок, посвященный Основателю мира и национального единства — Лидеру нации, Президенту Республики Таджикистан уважаемому Эмомали Рахмону. В этом блоке размещаются ключевые цитаты, выдержки из посланий Парламенту и важные государственные инициативы в сфере цифровизации. Блок оформлен в строгом государственном стиле с использованием качественных фотографий и официальной символики, что подчеркивает высокий статус проекта и его значимость на национальном уровне.",
              en: "A special block on the portal's homepage is dedicated to the Founder of Peace and National Unity — Leader of the Nation, President of the Republic of Tajikistan, Emomali Rahmon. This block features key quotes, excerpts from addresses to the Parliament, and important state initiatives in the field of digitalization. The block is designed in a strict state style using high-quality photographs and official symbols, which emphasizes the high status of the project and its importance at the national level.",
              tj: "Дар саҳифаи асосии портал блоки махсус бахшида ба Асосгузори сулҳу ваҳдати миллӣ — Пешвои миллат, Президенти Ҷумҳурии Тоҷикистон муҳтарам Эмомалӣ Раҳмон ҷудо карда шудааст. Дар ин блок иқтибосҳои калидӣ, порчаҳо аз паёмҳо ба Парлумон ва ташаббусҳои муҳими давлатӣ дар соҳаи рақамикунонӣ ҷойгир карда мешаванд. Блок дар услуби қатъии давлатӣ бо истифода аз аксҳои баландсифат ва рамзҳои расмӣ таҳия шудааст, ки мақоми баланди лоиҳа ва аҳамияти онро дар сатҳи миллӣ таъкид мекунад.",
            },
          },

          {
            slug: "projects-homepage-component",
            title: {
              ru: "Ключевые подпроекты",
              en: "Key Subprojects",
              tj: "Зерлоиҳаҳои калидӣ",
            },
            imageSrc:
              "/images/projects/pic/web/projects-component-on-the-homepage.png",
            BannerSrc:
              "/images/projects/pic/web/projects-component-on-the-homepage.png",
            shortInfo: {
              ru: "Направления и инициативы TDF",
              en: "Directions and initiatives of TDF",
              tj: "Самтҳо ва ташаббусҳои TDF",
            },
            fullInfo: {
              ru: "Секция проектов демонстрирует основные направления деятельности и подпроекты, реализуемые в рамках Tajikistan Digital Foundations. Блок визуализирует инициативы с помощью иконок, кратких описаний и индикаторов статуса. Это позволяет посетителям быстро понять масштаб государственного проекта, охватывающего различные аспекты цифровой экономики: от инфраструктуры до электронного правительства и развития цифровых навыков.",
              en: "The projects section demonstrates the main areas of activity and subprojects implemented under the Tajikistan Digital Foundations. The block visualizes initiatives using icons, brief descriptions, and status indicators. This allows visitors to quickly understand the scale of the state project, covering various aspects of the digital economy: from infrastructure to e-government and the development of digital skills.",
              tj: "Бахши лоиҳаҳо самтҳои асосии фаъолият ва зерлоиҳаҳоеро, ки дар доираи Tajikistan Digital Foundations амалӣ мешаванд, намоиш медиҳад. Блок ташаббусҳоро бо истифода аз нишонаҳо, тавсифҳои кӯтоҳ ва нишондиҳандаҳои ҳолат визуализатсия мекунад. Ин ба меҳмонон имкон медиҳад, ки миқёси лоиҳаи давлатиро, ки ҷанбаҳои гуногуни иқтисодиёти рақамиро фаро мегирад: аз инфрасохтор то ҳукумати электронӣ ва рушди малакаҳои рақамӣ, зуд дарк кунанд.",
            },
          },
          {
            slug: "statistics-component",
            title: {
              ru: "Статистика и показатели",
              en: "Statistics and Indicators",
              tj: "Омор ва нишондиҳандаҳо",
            },
            imageSrc:
              "/images/projects/pic/web/statistics-and-indicators-on-the-homepage.png",
            BannerSrc:
              "/images/projects/pic/web/statistics-and-indicators-on-the-homepage.png",
            shortInfo: {
              ru: "Ключевые цифры и достижения проекта",
              en: "Key figures and achievements of the project",
              tj: "Рақамҳои калидӣ ва дастовардҳои лоиҳа",
            },
            fullInfo: {
              ru: "Блок статистики наглядно отображает ключевые индикаторы успешности проекта. С помощью анимированных счетчиков и инфографики выводятся такие данные, как количество обученных специалистов, реализованные сервисы электронного правительства, объем инвестиций или охват населения цифровыми услугами. Цифровые показатели повышают доверие к проекту и демонстрируют реальные результаты работы понятным и визуально привлекательным способом.",
              en: "The statistics block clearly displays key success indicators of the project. Using animated counters and infographics, it shows data such as the number of trained specialists, implemented e-government services, investment volume, or population coverage with digital services. Numerical indicators increase trust in the project and demonstrate real results in an understandable and visually appealing way.",
              tj: "Блоки омор нишондиҳандаҳои калидии муваффақияти лоиҳаро ба таври аёнӣ намоиш медиҳад. Бо ёрии ҳисобкунакҳои аниматсионӣ ва инфографика маълумотҳо ба монанди шумораи мутахассисони омӯзонидашуда, хидматрасониҳои амалишудаи ҳукумати электронӣ, ҳаҷми сармоягузорӣ ё фарогирии аҳолӣ бо хидматрасониҳои рақамӣ нишон дода мешаванд. Нишондиҳандаҳои рақамӣ эътимодро ба лоиҳа баланд мебардоранд ва натиҷаҳои воқеии корро бо роҳи фаҳмо ва ҷолиб намоиш медиҳанд.",
            },
          },

          {
            slug: "footer-component",
            title: {
              ru: "Подвал сайта",
              en: "Website Footer",
              tj: "Поёни сомона",
            },
            imageSrc: "/images/projects/pic/web/footer-component.png",
            BannerSrc: "/images/projects/pic/web/footer-component.png",
            shortInfo: {
              ru: "Контактная информация и полезные ссылки",
              en: "Contact information and useful links",
              tj: "Маълумоти тамос ва истинодҳои муфид",
            },
            fullInfo: {
              ru: "Информативный подвал (Footer) портала содержит всю необходимую вспомогательную информацию. Здесь размещены контактные данные (адрес, телефон, email), продублировано основное навигационное меню для удобства пользователей, а также иконки социальных сетей для перехода на официальные страницы проекта. Дополнительно в подвале могут располагаться логотипы партнеров, информация об авторских правах и ссылки на политику конфиденциальности.",
              en: "The informative footer of the portal contains all the necessary supporting information. It houses contact details (address, phone, email), a duplicated main navigation menu for user convenience, and social media icons for accessing official project pages. Additionally, the footer may contain partner logos, copyright information, and links to the privacy policy.",
              tj: "Қисми поёнии (Footer) иттилоотии портал тамоми маълумоти ёрирасони заруриро дар бар мегирад. Дар ин ҷо маълумоти тамос (суроға, телефон, почтаи электронӣ) ҷойгир шудааст, менюи асосии навигатсионӣ барои роҳати корбарон такрор карда шудааст, инчунин нишонаҳои шабакаҳои иҷтимоӣ барои гузариш ба саҳифаҳои расмии лоиҳа мавҷуданд. Илова бар ин, дар поён метавонанд логотипҳои шарикон, маълумот дар бораи ҳуқуқи муаллиф ва истинодҳо ба сиёсати махфият ҷойгир карда шаванд.",
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
            slug: "announcements-page",
            title: {
              ru: "Страница объявлений",
              en: "Announcements Page",
              tj: "Саҳифаи эълонҳо",
            },
            imageSrc: "/images/projects/pic/web/announcements-page.png",
            BannerSrc: "/images/projects/pic/web/announcements-page.png",
            shortInfo: {
              ru: "Развернутый список всех тендеров и объявлений",
              en: "Detailed list of all tenders and announcements",
              tj: "Рӯйхати муфассали ҳамаи тендерҳо ва эълонҳо",
            },
            fullInfo: {
              ru: "На странице объявлений собран полный архив всех актуальных и прошедших тендеров, вакансий и важных уведомлений в рамках проекта. Пользователи могут использовать встроенный поиск и фильтры для быстрого нахождения нужной информации. Каждое объявление содержит подробное описание, сроки и необходимые документы для скачивания.",
              en: "The announcements page contains a complete archive of all current and past tenders, vacancies, and important notifications within the project. Users can utilize built-in search and filters to quickly find the necessary information. Each announcement includes a detailed description, deadlines, and required documents for download.",
              tj: "Дар саҳифаи эълонҳо бойгонии пурраи ҳамаи тендерҳо, ҷойҳои холӣ ва огоҳиномаҳои муҳими ҷорӣ ва гузашта дар доираи лоиҳа ҷамъ оварда шудааст. Истифодабарандагон метавонанд аз ҷустуҷӯ ва филтрҳои дарунсохт барои зуд ёфтани маълумоти зарурӣ истифода баранд. Ҳар як эълон тавсифи муфассал, мӯҳлатҳо ва ҳуҷҷатҳои заруриро барои зеркашӣ дар бар мегирад.",
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
          {
            slug: "structure-content-page",
            title: {
              ru: "Страница структуры",
              en: "Structure Page",
              tj: "Саҳифаи сохтор",
            },
            imageSrc: "/images/projects/pic/web/structure-content-page.png",
            BannerSrc: "/images/projects/pic/web/structure-content-page.png",
            shortInfo: {
              ru: "Организационная иерархия",
              en: "Organizational hierarchy",
              tj: "Зинанизоми ташкилӣ",
            },
            fullInfo: {
              ru: "На странице структуры подробно расписана иерархия и внутреннее устройство организации. Блок визуализирует связи между руководством, департаментами и отдельными специалистами. Интерактивная схема позволяет пользователям лучше понять распределение обязанностей и быстро найти нужный отдел.",
              en: "The structure page details the hierarchy and internal organization of the institution. The block visualizes the relationships between management, departments, and individual specialists. An interactive chart allows users to better understand the distribution of responsibilities and quickly find the required department.",
              tj: "Дар саҳифаи сохтор зинанизом ва сохтори дохилии ташкилот ба таври муфассал баён шудааст. Блок робитаҳои байни роҳбарият, раёсатҳо ва мутахассисони алоҳидаро намоиш медиҳад. Нақшаи интерактивӣ ба корбарон имкон медиҳад, ки тақсимоти вазифаҳоро беҳтар дарк кунанд ва шуъбаи лозимиро зуд пайдо намоянд.",
            },
          },
          {
            slug: "achievement-on-the-aboutpage",
            title: {
              ru: "Достижения",
              en: "Achievements",
              tj: "Дастовардҳо",
            },
            imageSrc:
              "/images/projects/pic/web/achievement-on-the-aboutpage.png",
            BannerSrc:
              "/images/projects/pic/web/achievement-on-the-aboutpage.png",
            shortInfo: {
              ru: "Успехи и награды проекта",
              en: "Project successes and awards",
              tj: "Муваффақиятҳо ва ҷоизаҳои лоиҳа",
            },
            fullInfo: {
              ru: "Раздел «Достижения» демонстрирует ключевые успехи и награды проекта. В нем представлены значимые вехи развития, полученные сертификаты и признание на национальном или международном уровне. Это повышает доверие к платформе и подчеркивает ее успешность и важность.",
              en: "The Achievements section showcases the key successes and awards of the project. It features significant milestones, certificates received, and recognition at the national or international level. This builds trust in the platform and highlights its success and importance.",
              tj: "Бахши «Дастовардҳо» муваффақиятҳои калидӣ ва ҷоизаҳои лоиҳаро намоиш медиҳад. Дар он марҳилаҳои муҳими рушд, сертификатҳои гирифташуда ва эътироф дар сатҳи миллӣ ё байналмилалӣ пешниҳод шудаанд. Ин эътимодро ба платформа баланд мебардорад ва муваффақият ва аҳамияти онро таъкид мекунад.",
            },
          },
          {
            slug: "results-project-on-the-aboutpage",
            title: {
              ru: "Результаты проекта",
              en: "Project Results",
              tj: "Натиҷаҳои лоиҳа",
            },
            imageSrc:
              "/images/projects/pic/web/results-project-on-the-aboutpage.png",
            BannerSrc:
              "/images/projects/pic/web/results-project-on-the-aboutpage.png",
            shortInfo: {
              ru: "Итоги и показатели эффективности",
              en: "Outcomes and performance indicators",
              tj: "Натиҷаҳо ва нишондиҳандаҳои самаранокӣ",
            },
            fullInfo: {
              ru: "В разделе «Результаты проекта» подводятся итоги работы платформы. Здесь публикуются количественные и качественные показатели эффективности, успешные кейсы внедрения, статистика удовлетворенности пользователей и отчеты о проделанной работе. Это обеспечивает полную прозрачность и демонстрирует реальную пользу проекта для общества.",
              en: "The Project Results section summarizes the outcomes of the platform's operation. It publishes quantitative and qualitative performance indicators, successful implementation cases, user satisfaction statistics, and progress reports. This ensures full transparency and demonstrates the real benefits of the project to society.",
              tj: "Дар бахши «Натиҷаҳои лоиҳа» натиҷаҳои кори платформа ҷамъбаст карда мешаванд. Дар ин ҷо нишондиҳандаҳои миқдорӣ ва сифатии самаранокӣ, ҳолатҳои муваффақи амалисозӣ, омори қаноатмандии корбарон ва ҳисоботҳо дар бораи корҳои анҷомёфта нашр карда мешаванд. Ин шаффофияти пурраро таъмин мекунад ва манфиати воқеии лоиҳаро барои ҷомеа намоиш медиҳад.",
            },
          },
          {
            slug: "contacts-and-benefit-on-the-aboutpage",
            title: {
              ru: "Контакты и преимущества",
              en: "Contacts and Benefits",
              tj: "Тамосҳо ва афзалиятҳо",
            },
            imageSrc:
              "/images/projects/pic/web/contacts-and-benefit-on-the-aboutpage.png",
            BannerSrc:
              "/images/projects/pic/web/contacts-and-benefit-on-the-aboutpage.png",
            shortInfo: {
              ru: "Связь с нами и плюсы проекта",
              en: "Contact us and project benefits",
              tj: "Тамос бо мо ва бартариҳои лоиҳа",
            },
            fullInfo: {
              ru: "Блок «Контакты и преимущества» объединяет контактную информацию для обратной связи с описанием главных достоинств проекта. Пользователи могут легко найти телефоны, адреса и электронную почту, а также ознакомиться с ключевыми выгодами от использования платформы: удобством, безопасностью и инновационным подходом.",
              en: "The Contacts and Benefits block combines contact information for feedback with a description of the project's main advantages. Users can easily find phone numbers, addresses, and emails, as well as learn about the key benefits of using the platform: convenience, security, and an innovative approach.",
              tj: "Блоки «Тамосҳо ва афзалиятҳо» маълумоти тамосро барои алоқаи баръакс бо тавсифи бартариҳои асосии лоиҳа муттаҳид мекунад. Истифодабарандагон метавонанд телефонҳо, суроғаҳо ва почтаи электрониро ба осонӣ пайдо кунанд, инчунин бо манфиатҳои калидии истифодаи платформа: роҳатӣ, амният ва бархӯрди инноватсионӣ шинос шаванд.",
            },
          },
        ],
      },
      {
        tabName: { ru: "Админ-панель", en: "Admin Panel", tj: "Панели маъмурият" },
        items: [
          {
            slug: "control-panel-page",
            title: {
              ru: "Панель управления",
              en: "Control Panel",
              tj: "Панели идоракунӣ",
            },
            imageSrc: "/images/projects/pic/admin/control-panel-page.png",
            BannerSrc: "/images/projects/pic/admin/control-panel-page.png",
            shortInfo: {
              ru: "Управление разделом «Панель управления»",
              en: "Management of the «Control Panel» section",
              tj: "Идоракунии бахши «Панели идоракунӣ»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Панель управления». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Control Panel». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Панели идоракунӣ» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "users-page",
            title: {
              ru: "Пользователи",
              en: "Users",
              tj: "Истифодабарандагон",
            },
            imageSrc: "/images/projects/pic/admin/users-page.png",
            BannerSrc: "/images/projects/pic/admin/users-page.png",
            shortInfo: {
              ru: "Управление разделом «Пользователи»",
              en: "Management of the «Users» section",
              tj: "Идоракунии бахши «Истифодабарандагон»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Пользователи». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Users». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Истифодабарандагон» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "roles-page",
            title: {
              ru: "Роли",
              en: "Roles",
              tj: "Нақшҳо",
            },
            imageSrc: "/images/projects/pic/admin/roles-page.png",
            BannerSrc: "/images/projects/pic/admin/roles-page.png",
            shortInfo: {
              ru: "Управление разделом «Роли»",
              en: "Management of the «Roles» section",
              tj: "Идоракунии бахши «Нақшҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Роли». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Roles». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Нақшҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "news-categories-page",
            title: {
              ru: "Категории новостей",
              en: "News Categories",
              tj: "Категорияҳои хабарҳо",
            },
            imageSrc: "/images/projects/pic/admin/news-categories-page.png",
            BannerSrc: "/images/projects/pic/admin/news-categories-page.png",
            shortInfo: {
              ru: "Управление разделом «Категории новостей»",
              en: "Management of the «News Categories» section",
              tj: "Идоракунии бахши «Категорияҳои хабарҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Категории новостей». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «News Categories». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Категорияҳои хабарҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "news-page",
            title: {
              ru: "Новости",
              en: "News",
              tj: "Хабарҳо",
            },
            imageSrc: "/images/projects/pic/admin/news-page.png",
            BannerSrc: "/images/projects/pic/admin/news-page.png",
            shortInfo: {
              ru: "Управление разделом «Новости»",
              en: "Management of the «News» section",
              tj: "Идоракунии бахши «Хабарҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Новости». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «News». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Хабарҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "projects-page",
            title: {
              ru: "Проекты",
              en: "Projects",
              tj: "Лоиҳаҳо",
            },
            imageSrc: "/images/projects/pic/admin/projects-page.png",
            BannerSrc: "/images/projects/pic/admin/projects-page.png",
            shortInfo: {
              ru: "Управление разделом «Проекты»",
              en: "Management of the «Projects» section",
              tj: "Идоракунии бахши «Лоиҳаҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Проекты». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Projects». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Лоиҳаҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "announcements-page",
            title: {
              ru: "Объявления",
              en: "Announcements",
              tj: "Эълонҳо",
            },
            imageSrc: "/images/projects/pic/admin/announcements-page.png",
            BannerSrc: "/images/projects/pic/admin/announcements-page.png",
            shortInfo: {
              ru: "Управление разделом «Объявления»",
              en: "Management of the «Announcements» section",
              tj: "Идоракунии бахши «Эълонҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Объявления». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Announcements». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Эълонҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "appeals-page",
            title: {
              ru: "Обращения",
              en: "Appeals",
              tj: "Муроҷиатҳо",
            },
            imageSrc: "/images/projects/pic/admin/appeals-page.png",
            BannerSrc: "/images/projects/pic/admin/appeals-page.png",
            shortInfo: {
              ru: "Управление разделом «Обращения»",
              en: "Management of the «Appeals» section",
              tj: "Идоракунии бахши «Муроҷиатҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Обращения». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Appeals». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Муроҷиатҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "crm-complaints-and-Inquiries-page",
            title: {
              ru: "CRM: Жалобы и запросы",
              en: "CRM: Complaints and Inquiries",
              tj: "CRM: Шикоятҳо ва дархостҳо",
            },
            imageSrc: "/images/projects/pic/admin/crm-complaints-and-Inquiries-page.png",
            BannerSrc: "/images/projects/pic/admin/crm-complaints-and-Inquiries-page.png",
            shortInfo: {
              ru: "Управление разделом «CRM: Жалобы и запросы»",
              en: "Management of the «CRM: Complaints and Inquiries» section",
              tj: "Идоракунии бахши «CRM: Шикоятҳо ва дархостҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «CRM: Жалобы и запросы». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «CRM: Complaints and Inquiries». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «CRM: Шикоятҳо ва дархостҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "action-log-page",
            title: {
              ru: "Журнал действий",
              en: "Action Log",
              tj: "Журнали амалҳо",
            },
            imageSrc: "/images/projects/pic/admin/action-log-page.png",
            BannerSrc: "/images/projects/pic/admin/action-log-page.png",
            shortInfo: {
              ru: "Управление разделом «Журнал действий»",
              en: "Management of the «Action Log» section",
              tj: "Идоракунии бахши «Журнали амалҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Журнал действий». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Action Log». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Журнали амалҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "procurement-methods-page",
            title: {
              ru: "Методы закупок",
              en: "Procurement Methods",
              tj: "Усулҳои харид",
            },
            imageSrc: "/images/projects/pic/admin/procurement-methods-page.png",
            BannerSrc: "/images/projects/pic/admin/procurement-methods-page.png",
            shortInfo: {
              ru: "Управление разделом «Методы закупок»",
              en: "Management of the «Procurement Methods» section",
              tj: "Идоракунии бахши «Усулҳои харид»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Методы закупок». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Procurement Methods». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Усулҳои харид» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "public-procurement-portal-page",
            title: {
              ru: "Портал госзакупок",
              en: "Public Procurement Portal",
              tj: "Портали хариди давлатӣ",
            },
            imageSrc: "/images/projects/pic/admin/public-procurement-portal-page.png",
            BannerSrc: "/images/projects/pic/admin/public-procurement-portal-page.png",
            shortInfo: {
              ru: "Управление разделом «Портал госзакупок»",
              en: "Management of the «Public Procurement Portal» section",
              tj: "Идоракунии бахши «Портали хариди давлатӣ»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Портал госзакупок». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Public Procurement Portal». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Портали хариди давлатӣ» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "about-us-page",
            title: {
              ru: "О нас",
              en: "About Us",
              tj: "Дар бораи мо",
            },
            imageSrc: "/images/projects/pic/admin/about-us-page.png",
            BannerSrc: "/images/projects/pic/admin/about-us-page.png",
            shortInfo: {
              ru: "Управление разделом «О нас»",
              en: "Management of the «About Us» section",
              tj: "Идоракунии бахши «Дар бораи мо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «О нас». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «About Us». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Дар бораи мо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "partners-page",
            title: {
              ru: "Партнеры",
              en: "Partners",
              tj: "Шарикон",
            },
            imageSrc: "/images/projects/pic/admin/partners-page.png",
            BannerSrc: "/images/projects/pic/admin/partners-page.png",
            shortInfo: {
              ru: "Управление разделом «Партнеры»",
              en: "Management of the «Partners» section",
              tj: "Идоракунии бахши «Шарикон»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Партнеры». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Partners». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Шарикон» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "state-symbols-page",
            title: {
              ru: "Государственные символы",
              en: "State Symbols",
              tj: "Рамзҳои давлатӣ",
            },
            imageSrc: "/images/projects/pic/admin/state-symbols-page.png",
            BannerSrc: "/images/projects/pic/admin/state-symbols-page.png",
            shortInfo: {
              ru: "Управление разделом «Государственные символы»",
              en: "Management of the «State Symbols» section",
              tj: "Идоракунии бахши «Рамзҳои давлатӣ»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Государственные символы». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «State Symbols». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Рамзҳои давлатӣ» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "organizational-structure-page",
            title: {
              ru: "Организационная структура",
              en: "Organizational Structure",
              tj: "Сохтори ташкилӣ",
            },
            imageSrc: "/images/projects/pic/admin/organizational-structure-page.png",
            BannerSrc: "/images/projects/pic/admin/organizational-structure-page.png",
            shortInfo: {
              ru: "Управление разделом «Организационная структура»",
              en: "Management of the «Organizational Structure» section",
              tj: "Идоракунии бахши «Сохтори ташкилӣ»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Организационная структура». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Organizational Structure». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Сохтори ташкилӣ» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "menu-page",
            title: {
              ru: "Управление меню",
              en: "Menu Management",
              tj: "Идоракунии меню",
            },
            imageSrc: "/images/projects/pic/admin/menu-page.png",
            BannerSrc: "/images/projects/pic/admin/menu-page.png",
            shortInfo: {
              ru: "Управление разделом «Управление меню»",
              en: "Management of the «Menu Management» section",
              tj: "Идоракунии бахши «Идоракунии меню»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Управление меню». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Menu Management». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Идоракунии меню» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "questions-and-answers-page",
            title: {
              ru: "Вопросы и ответы",
              en: "Q&A",
              tj: "Саволҳо ва ҷавобҳо",
            },
            imageSrc: "/images/projects/pic/admin/questions-and-answers-page.png",
            BannerSrc: "/images/projects/pic/admin/questions-and-answers-page.png",
            shortInfo: {
              ru: "Управление разделом «Вопросы и ответы»",
              en: "Management of the «Q&A» section",
              tj: "Идоракунии бахши «Саволҳо ва ҷавобҳо»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Вопросы и ответы». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Q&A». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Саволҳо ва ҷавобҳо» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "administrator's-guide-page",
            title: {
              ru: "Руководство администратора",
              en: "Administrator's Guide",
              tj: "Роҳнамои маъмур",
            },
            imageSrc: "/images/projects/pic/admin/administrator's-guide-page.png",
            BannerSrc: "/images/projects/pic/admin/administrator's-guide-page.png",
            shortInfo: {
              ru: "Управление разделом «Руководство администратора»",
              en: "Management of the «Administrator's Guide» section",
              tj: "Идоракунии бахши «Роҳнамои маъмур»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Руководство администратора». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Administrator's Guide». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Роҳнамои маъмур» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
            },
          },
          {
            slug: "settings-page",
            title: {
              ru: "Настройки",
              en: "Settings",
              tj: "Танзимот",
            },
            imageSrc: "/images/projects/pic/admin/settings-page.png",
            BannerSrc: "/images/projects/pic/admin/settings-page.png",
            shortInfo: {
              ru: "Управление разделом «Настройки»",
              en: "Management of the «Settings» section",
              tj: "Идоракунии бахши «Танзимот»",
            },
            fullInfo: {
              ru: "Этот раздел административной панели позволяет управлять данными для «Настройки». Пользователь с соответствующими правами может просматривать, добавлять, редактировать или удалять записи, обеспечивая актуальность информации на портале.",
              en: "This section of the admin panel allows you to manage data for «Settings». A user with appropriate permissions can view, add, edit, or delete records, ensuring the portal's information is up-to-date.",
              tj: "Ин бахши панели маъмурият имкон медиҳад, ки маълумот барои «Танзимот» идора карда шавад. Истифодабаранда бо ҳуқуқҳои мувофиқ метавонад сабтҳоро бинад, илова кунад, таҳрир намояд ё нест кунад ва муҳимияти иттилоотро дар портал таъмин намояд.",
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
    imageSrc: "/images/projects/mavjisomon.webp",
    year: "2024",
    tags: ["Laravel", "React", "PostgreSQL", "Flutter", "Nginx"],
    slug: "mavji-somon",
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
            imageSrc:
              "/images/projects/mavjisomon/admin/promotional-campaigns.png",
            BannerSrc:
              "/images/projects/mavjisomon/admin/promotional-campaigns.png",
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
            imageSrc:
              "/images/projects/mavjisomon/mobile/filter-modal-for-films.jpg",
            BannerSrc:
              "/images/projects/mavjisomon/mobile/filter-modal-for-films.jpg",
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
            imageSrc:
              "/images/projects/mavjisomon/mobile/security-settings.jpg",
            BannerSrc:
              "/images/projects/mavjisomon/mobile/security-settings.jpg",
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
    projectComponents: [
      {
        tabName: { ru: "Лендинг", en: "Landing", tj: "Лендинг" },
        items: [
          {
            slug: "hero",
            title: { ru: "Главный экран", en: "Main screen", tj: "Экрани асосӣ" },
            imageSrc: "/images/projects/livechat/hero-1700.webp",
            BannerSrc: "/images/projects/livechat/hero-1700.webp",
            shortInfo: {
              ru: "Презентация онлайн-чата и начало бесплатного пробного периода",
              en: "Online chat introduction and free trial entry point",
              tj: "Муаррифии чати онлайн ва оғози давраи озмоишии ройгон",
            },
            fullInfo: {
              ru: `Архитектура и функциональность главного экрана LiveChat

Первый экран лендинга представляет онлайн-чат для связи бизнеса с клиентами. Крупный заголовок «Онлайн-чат для связи с вашими клиентами» раскрывает назначение сервиса, а подзаголовок предлагает увеличивать количество заявок без дополнительных расходов на маркетинг. Композиция объединяет навигацию, презентацию продукта и форму бесплатного старта.

1. Шапка и навигация по продукту

На светлой панели расположены логотип LiveChat и ссылки «Функции», «Тарифы», «Интеграции» и «Поддержка». Справа находятся переключатель языка, действие «Войти» для существующих пользователей и зелёная кнопка «Попробовать бесплатно». Такое расположение даёт посетителю доступ к изучению возможностей, входу в кабинет и началу знакомства с сервисом.

2. Визуальная подача основного предложения

Тёмный фон с тонкой сеткой и мягким зелёным свечением выделяет центральный блок. Заголовок разделён на две строки: белая обозначает тип продукта, зелёная подчёркивает связь с клиентами. Над ним размещена метка «Бесплатный пробный период — без карты», которая сразу сообщает условие начала работы.

3. Форма бесплатного старта

Под описанием находятся поле «Электронная почта» и кнопка «Попробовать бесплатно» со стрелкой. Посетитель может указать адрес и перейти к началу работы с продуктом. Основное действие повторяет кнопку в шапке, оставаясь заметным рядом с предложением сервиса.

4. Условия подключения и продолжение знакомства

Под формой три короткие подписи с отметками: «Без кредитной карты», «Установка за 5 минут» и «Отмена в любой момент». Они поясняют заявленные условия пробного периода. В нижней части экрана начинается светлый раздел «Решение», который продолжает презентацию продукта.

Такая структура помогает посетителю понять назначение LiveChat, ознакомиться с условиями и выбрать следующий шаг: изучить разделы сайта, войти в кабинет или начать бесплатный период.`,
              en: `Architecture and functionality of the LiveChat main screen

The landing page introduces online chat for communication between businesses and customers. The large headline explains the service’s purpose, while the subtitle presents the offer of more enquiries without additional marketing spending. The layout combines navigation, a product introduction and a free-start form.

1. Header and product navigation

The light header contains the LiveChat logo and links to Features, Pricing, Integrations and Support. A language selector, Sign in action and green Try for free button sit on the right. This arrangement provides access to product information, the account and the trial journey.

2. Visual presentation of the main offer

A dark background with a fine grid and soft green glow highlights the central content. The two-line headline uses white to introduce the product and green to emphasise customer communication. A “Free trial — no card required” badge above it immediately communicates an entry condition.

3. Free-start form

An Email field and a Try for free button with an arrow appear below the description. Visitors can enter their address and proceed towards getting started. The primary action repeats the header button and remains prominent beside the service’s offer.

4. Entry conditions and further exploration

Three checked captions below the form state “No credit card”, “Setup in 5 minutes” and “Cancel anytime”. They clarify the advertised trial conditions. The light Solution section begins at the bottom, continuing the product presentation.

This structure helps visitors understand LiveChat, review the terms and choose their next step: explore the site, sign in or start a free trial.`,
              tj: `Сохтор ва вазифаҳои экрани асосии LiveChat

Экрани аввали лендинг чати онлайнро барои алоқаи тиҷорат бо мизоҷон муаррифӣ мекунад. Сарлавҳаи калон вазифаи хидматро мефаҳмонад ва зерсарлавҳа зиёд кардани дархостҳоро бе хароҷоти иловагии маркетинг пешниҳод менамояд. Тарҳ роҳнамоӣ, муаррифии маҳсулот ва шакли оғози ройгонро муттаҳид мекунад.

1. Қисми боло ва роҳнамоии маҳсулот

Дар панели равшан нишони LiveChat ва пайвандҳои «Имкониятҳо», «Тарифҳо», «Ҳамгироиҳо» ва «Дастгирӣ» ҷойгиранд. Дар тарафи рост интихоби забон, амали «Ворид шудан» ва тугмаи сабзи «Ройгон санҷед» мавҷуданд. Ин ҷойгиршавӣ ба маълумоти маҳсулот, кабинет ва оғози шиносоӣ дастрасӣ медиҳад.

2. Намоиши пешниҳоди асосӣ

Заминаи торик бо шабакаи борик ва равшании мулоими сабз блоки марказиро намоён мекунад. Сарлавҳаи дусатра навъи маҳсулотро бо ранги сафед ва алоқаро бо мизоҷон бо ранги сабз таъкид менамояд. Дар боло тамғаи «Давраи озмоишии ройгон — бе корт» шарти оғози корро нишон медиҳад.

3. Шакли оғози ройгон

Дар зери тавсиф майдони «Почтаи электронӣ» ва тугмаи «Ройгон санҷед» бо тирча ҷойгиранд. Корбар метавонад суроғаро ворид карда, ба оғози кор гузарад. Амали асосӣ тугмаи қисми болоро такрор мекунад ва дар назди пешниҳоди хидмат намоён мемонад.

4. Шартҳои пайвастшавӣ ва идомаи шиносоӣ

Дар зери шакл се навиштаҷоти кӯтоҳ бо аломатҳо мавҷуданд: «Бе корти бонкӣ», «Насб дар 5 дақиқа» ва «Бекоркунӣ дар ҳар вақт». Онҳо шартҳои пешниҳодшудаи давраи озмоиширо шарҳ медиҳанд. Дар поёни экран бахши равшани «Ҳал» оғоз ёфта, муаррифии маҳсулотро идома медиҳад.

Чунин сохтор ба корбар барои фаҳмидани вазифаи LiveChat, шиносоӣ бо шартҳо ва интихоби қадами навбатӣ — омӯзиши сомона, воридшавӣ ба кабинет ё оғози давраи ройгон — кумак мекунад.`,
            },
          },
          {
            slug: "solution",
            title: { ru: "Решение для бизнеса", en: "Business solution", tj: "Ҳалли тиҷоратӣ" },
            imageSrc: "/images/projects/livechat/solution-1700.webp",
            BannerSrc: "/images/projects/livechat/solution-1700.webp",
            shortInfo: {
              ru: "Презентация сервиса, панели оператора и мобильного чат-виджета",
              en: "Service introduction, operator panel and mobile chat widget",
              tj: "Муаррифии хидмат, панели оператор ва виҷети чати мобилӣ",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Решение»

Раздел знакомит посетителя с LiveChat через описание продукта и крупный презентационный баннер. Заголовок «LiveChat — решение, которое вас выделит!» сопровождается пояснением о подключении виджета к сайту, гибкой настройке и аналитике. Светлый фон и свободное пространство отделяют вводный текст от демонстрации интерфейсов.

1. Представление продукта и его назначения

Метка «Решение» обозначает раздел, а короткий абзац раскрывает основные направления использования сервиса. Текст связывает интеграцию чата с задачей общения с клиентами и выделяет быстрое подключение, настройку и аналитику как составляющие одного инструмента.

2. Демонстрация рабочего места оператора

Правая часть баннера показывает ноутбук с панелью диалогов. Внутри интерфейса видны боковая навигация, список обращений, область переписки и сведения о посетителе. Такая композиция даёт представление о том, как оператор видит разговор и сопровождающий его контекст в одном рабочем пространстве.

3. Мобильный виджет и преимущества подключения

Рядом с ноутбуком расположен смартфон с клиентским окном чата. Два устройства показывают стороны одного процесса: работу сотрудника и общение посетителя с компанией. Слева на баннере перечислены быстрая установка, простое управление, 14 дней бесплатно и отсутствие привязки к карте; выше размещена подпись о чате для сайта, Telegram и WhatsApp.

4. Призывы к началу работы

Внутри презентационного изображения показаны элементы «Начать бесплатно» и «Посмотреть демо», а также адрес livechat.tj. Они дополняют знакомство с продуктом возможными следующими шагами. В шапке самого лендинга остаются навигация, вход и кнопка «Попробовать бесплатно».

Блок помогает посетителю сопоставить предложение сервиса с его внешним видом. Демонстрация интерфейсов оператора и клиента делает назначение продукта понятнее, а краткий список преимуществ поддерживает переход к дальнейшему изучению или бесплатному старту.`,
              en: `Architecture and functionality of the Solution section

This section introduces LiveChat through a product description and a large presentation banner. The heading “LiveChat — a solution that sets you apart!” is followed by an explanation of website widget integration, flexible configuration and analytics. A light background and generous spacing separate the introduction from the interface showcase.

1. Product purpose and positioning

A Solution badge identifies the section, while a short paragraph outlines the service’s main capabilities. The text connects chat integration with customer communication and presents quick setup, configuration and analytics as parts of one tool.

2. Operator workspace preview

The right side of the banner shows a laptop displaying the conversations panel. The interface contains side navigation, an enquiry list, a messaging area and visitor information. This composition illustrates how an operator can view a conversation and its context within one workspace.

3. Mobile widget and setup benefits

A smartphone beside the laptop displays the customer chat window. The two devices represent both sides of the process: the employee’s workspace and the visitor’s conversation with the company. The left side lists quick setup, simple management, 14 days free and no card required, beneath a label mentioning website chat, Telegram and WhatsApp.

4. Getting-started prompts

The presentation image includes Start for free and View demo elements, together with the livechat.tj address. They introduce potential next steps after exploring the product. The landing page header retains navigation, sign-in and a Try for free button.

The section helps visitors relate the service’s offer to its appearance. Showing operator and customer interfaces clarifies the product’s purpose, while a concise benefits list supports further exploration or a free start.`,
              tj: `Сохтор ва вазифаҳои бахши «Ҳал»

Бахш LiveChat-ро тавассути тавсифи маҳсулот ва баннери калони муаррифӣ пешниҳод мекунад. Сарлавҳаи «LiveChat — ҳалли фарқкунандаи шумо!» бо шарҳи пайваст кардани виҷет ба сомона, танзими чандир ва таҳлил ҳамроҳ аст. Заминаи равшан ва фазои холӣ матни муқаддимавиро аз намоиши интерфейсҳо ҷудо мекунанд.

1. Муаррифии маҳсулот ва вазифаи он

Тамғаи «Ҳал» бахшро муайян мекунад ва сархати кӯтоҳ имкониятҳои асосии хидматро шарҳ медиҳад. Матн ҳамгироии чатро бо вазифаи муошират бо мизоҷон пайваста, пайвастшавии зуд, танзим ва таҳлилро ҳамчун қисмҳои як абзор пешниҳод мекунад.

2. Намоиши ҷойи кории оператор

Дар тарафи рости баннер ноутбук бо панели муколамаҳо нишон дода шудааст. Дар интерфейс роҳнамоии паҳлуӣ, рӯйхати муроҷиатҳо, майдони паёмҳо ва маълумоти корбар дида мешаванд. Ин тарҳ нишон медиҳад, ки оператор чӣ гуна суҳбат ва маълумоти вобастаро дар як майдони корӣ мебинад.

3. Виҷети мобилӣ ва бартариҳои пайвастшавӣ

Дар назди ноутбук смартфон бо равзанаи чати мизоҷ ҷойгир аст. Ду дастгоҳ ду тарафи равандро нишон медиҳанд: кори корманд ва муоширати корбар бо ширкат. Дар тарафи чап насби зуд, идоракунии осон, 14 рӯзи ройгон ва набудани зарурати пайваст кардани корт номбар шудаанд. Дар боло чат барои сомона, Telegram ва WhatsApp зикр шудааст.

4. Даъватҳо ба оғози кор

Дар тасвири муаррифӣ унсурҳои «Ройгон оғоз кунед» ва «Намоишро бинед», инчунин суроғаи livechat.tj оварда шудаанд. Онҳо қадамҳои эҳтимолии навбатиро пешниҳод мекунанд. Дар қисми болоии худи лендинг роҳнамоӣ, воридшавӣ ва тугмаи «Ройгон санҷед» дастрасанд.

Бахш ба корбар барои муқоиса кардани пешниҳоди хидмат бо намуди он кумак мекунад. Намоиши интерфейсҳои оператор ва мизоҷ вазифаи маҳсулотро равшантар месозад, рӯйхати кӯтоҳи бартариҳо бошад омӯзиши минбаъда ё оғози ройгонро дастгирӣ мекунад.`,
            },
          },
          {
            slug: "features",
            title: { ru: "Функции", en: "Features", tj: "Имкониятҳо" },
            imageSrc: "/images/projects/livechat/features-1700.webp",
            BannerSrc: "/images/projects/livechat/features-1700.webp",
            shortInfo: {
              ru: "Инструменты поддержки клиентов, командной работы и аналитики",
              en: "Tools for customer support, teamwork and analytics",
              tj: "Абзорҳои дастгирии мизоҷон, кори даставӣ ва таҳлил",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Функции»

Раздел представляет основные возможности LiveChat под заголовком «Всё для эффективной поддержки клиентов». Подзаголовок связывает набор инструментов с развитием бизнеса. Шесть карточек на светлом фоне организованы в два ряда по три: каждая содержит цветную иконку, название функции и короткое пояснение.

1. Быстрый ответ и взаимодействие с посетителем

Карточка «Мгновенный ответ» объясняет значение быстрой реакции для доверия и удержания клиента на сайте. «Умный виджет» описывает появление чата с учётом поведения посетителя. Вместе эти карточки представляют начальный этап общения: показать возможность связи в подходящий момент и помочь пользователю получить ответ.

2. Аналитика и контроль обслуживания

Карточка «Аналитика и отчёты» перечисляет показатели работы поддержки: количество чатов, время ответа и эффективность каждого агента. Описание связывает их с единым дашбордом, позволяя посетителю понять назначение аналитического инструмента без перехода к подробной демонстрации.

3. Совместная работа и шаблоны ответов

«Командная работа» представляет одновременную работу нескольких агентов, назначение чатов и передачу диалогов коллегам. Соседняя карточка «Шаблоны ответов» посвящена готовым сообщениям для частых вопросов. Эти возможности показывают, как распределять обращения внутри команды и сокращать повторяющийся ввод текста.

4. Интеграции и структура представления

Карточка «Интеграции с CRM» описывает подключение внешних платформ и объединение клиентских данных. Единое оформление всех шести карточек помогает сравнить направления: общение, аналитику, организацию команды и связь с другими сервисами. Цветные иконки служат визуальными ориентирами, а короткие абзацы позволяют быстро просмотреть содержание.

Блок помогает посетителю соотнести возможности продукта с задачами своей поддержки и выбрать, какие инструменты изучить подробнее. В шапке доступны переходы к тарифам, интеграциям и бесплатному пробному периоду.`,
              en: `Architecture and functionality of the Features section

The section presents LiveChat’s core capabilities under the heading “Everything for effective customer support”. The subtitle connects the toolset with business growth. Six cards on a light background form two rows of three, each containing a coloured icon, a feature name and a short explanation.

1. Fast replies and visitor interaction

Instant replies explains the role of a quick response in building trust and retaining visitors. Smart widget describes showing chat according to visitor behaviour. Together, these cards introduce the first stage of communication: presenting a contact option at a suitable moment and helping visitors receive an answer.

2. Analytics and service monitoring

Analytics and reports lists support metrics: chat volume, response time and individual agent performance. The description connects these measures with a shared dashboard, explaining the purpose of the analytics tool without requiring a detailed demonstration.

3. Collaboration and reply templates

Teamwork introduces several agents working simultaneously, assigning chats and handing conversations to colleagues. Reply templates covers prepared messages for frequently asked questions. These capabilities show how a team can distribute enquiries and reduce repetitive typing.

4. Integrations and presentation structure

CRM integrations describes connecting external platforms and bringing customer data together. A consistent layout across all six cards helps visitors compare communication, analytics, team organisation and connections to other services. Coloured icons provide visual cues, while short paragraphs make the section easy to scan.

The section helps visitors relate product capabilities to their support needs and decide which tools to explore further. The header provides access to pricing, integrations and the free trial.`,
              tj: `Сохтор ва вазифаҳои бахши «Имкониятҳо»

Бахш имкониятҳои асосии LiveChat-ро зери сарлавҳаи «Ҳама чиз барои дастгирии самараноки мизоҷон» муаррифӣ мекунад. Зерсарлавҳа маҷмуи абзорҳоро бо рушди тиҷорат мепайвандад. Шаш корт дар заминаи равшан дар ду қатори сетоӣ ҷойгиранд; ҳар кадом нишонаи ранга, номи имконият ва шарҳи кӯтоҳ дорад.

1. Ҷавоби зуд ва ҳамкорӣ бо корбар

Корти «Ҷавоби фаврӣ» аҳамияти вокуниши зудро барои эътимод ва нигоҳ доштани мизоҷ дар сомона шарҳ медиҳад. «Виҷети ҳушманд» пайдо шудани чатро бо назардошти рафтори корбар тавсиф мекунад. Ин ду корт оғози муоширатро нишон медиҳанд: пешниҳоди роҳи алоқа дар вақти мувофиқ ва кумак барои гирифтани ҷавоб.

2. Таҳлил ва назорати хизматрасонӣ

Корти «Таҳлил ва ҳисобот» нишондиҳандаҳои дастгириро номбар мекунад: шумораи чатҳо, вақти ҷавоб ва самаранокии ҳар оператор. Тавсиф онҳоро бо панели ягона мепайвандад ва вазифаи абзори таҳлилиро бе намоиши муфассал мефаҳмонад.

3. Кори муштарак ва қолабҳои ҷавоб

«Кори даставӣ» фаъолияти ҳамзамони чанд оператор, таъйини чатҳо ва супоридани муколамаҳоро ба ҳамкорон муаррифӣ мекунад. «Қолабҳои ҷавоб» ба паёмҳои омода барои саволҳои маъмул бахшида шудааст. Ин имкониятҳо тақсимоти муроҷиатҳо дар даста ва кам кардани воридкунии такрории матнро нишон медиҳанд.

4. Ҳамгироиҳо ва сохтори муаррифӣ

Корти «Ҳамгироӣ бо CRM» пайваст кардани платформаҳои беруна ва муттаҳидсозии маълумоти мизоҷонро шарҳ медиҳад. Ороиши ягонаи шаш корт муқоисаи самтҳои муошират, таҳлил, ташкили даста ва алоқа бо хидматҳои дигарро осон мекунад. Нишонаҳои ранга барои роҳнамоии визуалӣ ва сархатҳои кӯтоҳ барои баррасии зуд хизмат мекунанд.

Бахш ба корбар барои муқоиса кардани имкониятҳои маҳсулот бо вазифаҳои дастгирии худ ва интихоби абзорҳо барои омӯзиши бештар кумак мекунад. Дар қисми боло гузариш ба тарифҳо, ҳамгироиҳо ва давраи озмоишии ройгон дастрас аст.`,
            },
          },
          {
            slug: "how-it-works",
            title: { ru: "Как это работает", en: "How it works", tj: "Тарзи кор" },
            imageSrc: "/images/projects/livechat/how-it-works-1700.webp",
            BannerSrc: "/images/projects/livechat/how-it-works-1700.webp",
            shortInfo: {
              ru: "Четыре шага от установки чата до консультации и оформления заказа",
              en: "Four steps from chat installation to consultation and placing an order",
              tj: "Чор қадам аз насби чат то машварат ва бақайдгирии фармоиш",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Как это работает»

Раздел объясняет принцип работы онлайн-чата через последовательность из четырёх шагов. Над заголовком «Как работает онлайн-чат для сайта?» расположена тематическая метка, а под ним — пояснение «Четыре простых шага до первого диалога». Четыре карточки в два ряда объединяют этапы подключения, общения и целевого действия посетителя.

1. Установка кода на сайт

Первая карточка обозначает начальный этап: размещение кода чата на сайте. Иконка кода и подпись «Шаг 1» помогают быстро определить назначение действия. Краткая формулировка объясняет способ подключения, не перегружая презентационный блок техническими инструкциями.

2. Появление окна общения

Второй шаг описывает появление всплывающего окна после установки. Иконка сообщения связывает техническое подключение с видимым для посетителя результатом — возможностью обратиться к компании прямо на сайте.

3. Ответы менеджеров

Третья карточка показывает роль сотрудников: менеджеры отвечают на вопросы клиентов. Этот этап связывает чат с консультацией и подчёркивает участие команды в обработке обращений. Иконка людей визуально отличает работу менеджеров от установки и показа виджета.

4. Покупка или оформление заказа

Последняя карточка представляет целевое действие посетителя — покупку или заказ. Она завершает показанный сценарий, связывая консультацию с дальнейшим решением клиента. Нумерация, одинаковые карточки и крупные светлые цифры на фоне помогают читать последовательность слева направо и сверху вниз.

Ниже начинается раздел кастомизации с предложением адаптировать дизайн чата под фирменный стиль сайта. Такой переход продолжает знакомство с продуктом: после объяснения порядка работы посетитель может изучить оформление виджета. Блок помогает понять путь от подключения до общения с клиентом и оценить роль чата в процессе продаж.`,
              en: `Architecture and functionality of the How it works section

The section explains website chat through a sequence of four steps. A category badge sits above “How does online chat for a website work?”, followed by the subtitle “Four simple steps to your first conversation”. Four cards in two rows bring together installation, communication and the visitor’s intended action.

1. Installing the code

The first card introduces placing the chat code on a website. A code icon and Step 1 label make its purpose easy to identify. The concise wording explains the connection method without overloading this presentation section with technical instructions.

2. Displaying the chat window

The second step describes a pop-up window appearing after installation. A message icon connects the technical setup with a visible result for visitors: a way to contact the company directly on its website.

3. Replies from managers

The third card introduces the team’s role: managers answer customer questions. This step connects chat with consultation and highlights staff involvement in handling enquiries. A people icon visually distinguishes the team’s work from installation and widget display.

4. Purchase or order

The final card presents the visitor’s intended action, a purchase or an order. It completes the illustrated journey by connecting consultation with the customer’s next decision. Numbering, consistent cards and large pale background digits guide reading from left to right and top to bottom.

The customisation section begins below, introducing adaptation of the chat design to the website’s brand identity. This transition continues the product introduction: after learning the workflow, visitors can explore widget appearance. The section helps explain the route from installation to customer communication and the role of chat in the sales process.`,
              tj: `Сохтор ва вазифаҳои бахши «Тарзи кор»

Бахш принсипи кори чати сомонаро тавассути чор қадами пайдарпай шарҳ медиҳад. Дар болои сарлавҳаи «Чати онлайн барои сомона чӣ гуна кор мекунад?» тамғаи мавзуӣ ва дар поён шарҳи «Чор қадами одӣ то муколамаи аввал» ҷойгиранд. Чор корт дар ду қатор марҳилаҳои пайвастшавӣ, муошират ва амали мақсадноки корбарро муттаҳид мекунанд.

1. Насби рамз дар сомона

Корти аввал марҳилаи оғозро нишон медиҳад: ҷойгир кардани рамзи чат дар сомона. Нишонаи рамз ва навиштаҷоти «Қадами 1» вазифаи амалро равшан мекунанд. Матни кӯтоҳ роҳи пайвастшавиро бе дастурҳои зиёди техникӣ мефаҳмонад.

2. Пайдо шудани равзанаи муошират

Қадами дуюм пайдо шудани равзанаи поп-апро пас аз насб тавсиф мекунад. Нишонаи паём пайвастшавии техникиро бо натиҷаи намоён барои корбар — имкони муроҷиат ба ширкат дар худи сомона — мепайвандад.

3. Ҷавобҳои менеҷерон

Корти сеюм нақши кормандонро нишон медиҳад: менеҷерон ба саволҳои мизоҷон ҷавоб медиҳанд. Ин марҳила чатро бо машварат пайваста, иштироки дастаро дар баррасии муроҷиатҳо таъкид мекунад. Нишонаи одамон кори менеҷеронро аз насб ва намоиши виҷет фарқ мекунад.

4. Харид ё бақайдгирии фармоиш

Корти охирин амали мақсадноки корбар — харид ё фармоишро муаррифӣ мекунад. Он раванди нишоншударо анҷом дода, машваратро бо қарори минбаъдаи мизоҷ мепайвандад. Рақамгузорӣ, кортҳои якхела ва рақамҳои калони равшан дар замина хондани пайдарпайро аз чап ба рост ва аз боло ба поён осон мекунанд.

Дар поён бахши танзими намуди чат бо пешниҳоди мутобиқ кардани тарҳ ба услуби фирмавии сомона оғоз мешавад. Ин гузариш шиносоиро бо маҳсулот идома медиҳад: пас аз фаҳмидани тарзи кор корбар метавонад намуди виҷетро омӯзад. Бахш роҳро аз насб то муошират бо мизоҷ ва нақши чатро дар раванди фурӯш мефаҳмонад.`,
            },
          },
          {
            slug: "customization",
            title: { ru: "Кастомизация", en: "Customisation", tj: "Танзими намуди зоҳирӣ" },
            imageSrc: "/images/projects/livechat/customization-1700.webp",
            BannerSrc: "/images/projects/livechat/customization-1700.webp",
            shortInfo: {
              ru: "Настройка оформления виджета и приветствий под фирменный стиль сайта",
              en: "Widget appearance and greetings tailored to the website’s brand",
              tj: "Мутобиқсозии намуди виҷет ва паёмҳои истиқболӣ ба услуби сомона",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Кастомизация»

Раздел представляет возможности адаптации онлайн-чата под фирменный стиль сайта. Слева расположены тематическая метка, заголовок «Адаптируйте дизайн онлайн-чата под фирменный стиль вашего сайта» и поясняющий текст. Справа показан пример интерфейса диалогов. Двухколоночная композиция объединяет описание настроек с визуальным представлением продукта.

1. Цветовая схема, шрифты и готовые темы

Вводный текст предлагает выбрать готовую тему или создать собственную конфигурацию без знания кода. Первый пункт списка выделяет настройку цветов и шрифтов. Это объясняет, как оформление чата можно согласовать с визуальным языком сайта, сохранив узнаваемость бренда в канале общения с клиентами.

2. Расположение и персонализация виджета

Следующие пункты описывают выбор позиции виджета на странице, загрузку логотипа и аватара оператора. Эти настройки охватывают как размещение точки входа в чат, так и представление компании и сотрудника в интерфейсе. Зелёные отметки помогают быстро просмотреть список возможностей.

3. Приветственные сообщения

Отдельный пункт посвящён персонализированным приветствиям. Он дополняет визуальные настройки содержанием первого контакта: компания может адаптировать приветственное сообщение к своей манере общения. Вместе оформление и текст помогают представить чат как часть общего пользовательского опыта сайта.

4. Визуальный пример и продолжение знакомства

Справа находится изображение панели диалогов со списком контактов, областью переписки и зелёными акцентами. Оно иллюстрирует внешний вид продукта, сопровождая перечень настроек. Внизу начинается раздел «Тарифы», который переводит посетителя от знакомства с возможностями к выбору подходящего плана.

Блок помогает оценить, насколько сервис можно адаптировать к существующему оформлению сайта. Краткий список настроек и пример интерфейса дают основу для дальнейшего изучения продукта и обсуждения требований к его внешнему виду.`,
              en: `Architecture and functionality of the Customisation section

The section presents ways to adapt online chat to a website’s brand identity. A category badge, the heading “Adapt your online chat design to your website’s brand” and explanatory text appear on the left. A conversation interface preview sits on the right. This two-column layout pairs configuration options with a visual introduction to the product.

1. Colours, fonts and ready-made themes

The introduction offers ready-made themes or a custom configuration without coding. The first list item highlights colour and font selection. It explains how chat appearance can align with the website’s visual language and maintain brand recognition in customer communication.

2. Widget placement and personalisation

The next items describe choosing the widget’s position and uploading a company logo and operator avatar. These settings cover both the chat entry point and how the company and its staff appear in the interface. Green check marks make the capabilities easy to scan.

3. Greeting messages

A separate item introduces personalised greetings. It complements appearance settings with the content of the first interaction: the company can adapt its greeting to its communication style. Together, presentation and wording help make chat part of the website’s overall user experience.

4. Visual example and further exploration

The image on the right shows a conversation panel with a contact list, messages and green accents. It illustrates the product’s appearance alongside the configuration list. The Pricing section begins below, leading visitors from capabilities to choosing a suitable plan.

The section helps visitors assess how the service could fit their existing website design. A concise settings list and interface example provide a basis for further product exploration and discussion of appearance requirements.`,
              tj: `Сохтор ва вазифаҳои бахши «Танзими намуди зоҳирӣ»

Бахш имкониятҳои мутобиқ кардани чати онлайнро ба услуби фирмавии сомона муаррифӣ мекунад. Дар тарафи чап тамғаи мавзуӣ, сарлавҳаи «Тарҳи чати онлайнро ба услуби фирмавии сомонаи худ мутобиқ кунед» ва матни шарҳдиҳанда ҷойгиранд. Дар тарафи рост намунаи интерфейси муколамаҳо нишон дода шудааст. Тарҳи дусутуна тавсифи танзимотро бо намоиши маҳсулот мепайвандад.

1. Рангҳо, ҳуруф ва мавзуъҳои омода

Матни муқаддимавӣ интихоби мавзуи омода ё сохтани танзимоти худиро бе донистани рамз пешниҳод мекунад. Банди аввал интихоби рангҳо ва ҳуруфро таъкид менамояд. Ин мефаҳмонад, ки чӣ гуна намуди чатро бо тарҳи сомона ҳамоҳанг карда, шинохташавии брендро дар муошират бо мизоҷон нигоҳ доштан мумкин аст.

2. Ҷойгиршавӣ ва шахсисозии виҷет

Бандҳои навбатӣ интихоби ҷойи виҷет дар саҳифа, боркунии нишони ширкат ва аватари операторро тавсиф мекунанд. Ин танзимот ҳам нуқтаи оғози чат ва ҳам муаррифии ширкату кормандро дар интерфейс фаро мегиранд. Аломатҳои сабз баррасии зуди рӯйхати имкониятҳоро осон мекунанд.

3. Паёмҳои истиқболӣ

Банди алоҳида ба паёмҳои истиқболии шахсисозишуда бахшида шудааст. Он танзимоти намуди зоҳириро бо мазмуни тамоси аввал пурра мекунад: ширкат метавонад паёми истиқболиро ба услуби муоширати худ мутобиқ намояд. Тарҳ ва матн якҷоя чатро ҳамчун қисми таҷрибаи умумии истифодаи сомона муаррифӣ мекунанд.

4. Намунаи визуалӣ ва идомаи шиносоӣ

Дар тарафи рост тасвири панели муколамаҳо бо рӯйхати тамосҳо, паёмҳо ва унсурҳои сабз ҷойгир аст. Он намуди маҳсулотро дар паҳлуи рӯйхати танзимот нишон медиҳад. Дар поён бахши «Тарифҳо» оғоз шуда, корбарро аз омӯзиши имкониятҳо ба интихоби нақшаи мувофиқ мебарад.

Бахш барои арзёбии мутобиқати хидмат ба тарҳи мавҷудаи сомона кумак мекунад. Рӯйхати кӯтоҳи танзимот ва намунаи интерфейс барои омӯзиши минбаъдаи маҳсулот ва баррасии талаботи намуди зоҳирӣ асос медиҳанд.`,
            },
          },
          {
            slug: "pricing",
            title: { ru: "Тарифы", en: "Pricing", tj: "Тарифҳо" },
            imageSrc: "/images/projects/livechat/pricing-1700.webp",
            BannerSrc: "/images/projects/livechat/pricing-1700.webp",
            shortInfo: {
              ru: "Сравнение планов «Старт», «Профи» и «Бизнес» для команд разного размера",
              en: "Comparing Start, Pro and Business plans for different team sizes",
              tj: "Муқоисаи нақшаҳои «Старт», «Профи» ва «Бизнес» барои дастаҳои гуногун",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Тарифы»

Раздел помогает сопоставить возможности LiveChat с масштабом бизнеса. Под меткой «Тарифы» расположены заголовок «Выберите подходящий план» и предложение начать бесплатно, расширяя использование сервиса по мере роста компании. Три карточки в один ряд представляют планы «Старт», «Профи» и «Бизнес». На показанном экране сравниваются возможности и ограничения; числовая стоимость планов не указана.

1. Начальный план для малого бизнеса

Карточка «Старт» адресована небольшим компаниям и стартапам. В перечне указаны один агент, 100 чатов в месяц, базовый виджет, поддержка по электронной почте и история чатов за 30 дней. Кнопка «Начать бесплатно» завершает карточку и задаёт понятный следующий шаг после знакомства с условиями.

2. Выделенный план для растущих команд

Центральная карточка «Профи» отличается тёмным фоном, зелёной кнопкой и меткой «Популярный». Она предлагает до пяти агентов, неограниченное количество чатов, аналитику и отчёты, все интеграции, шаблоны ответов и приоритетную поддержку. Контрастное оформление делает этот вариант заметным при сравнении, а действие «Попробовать бесплатно» предлагает перейти к знакомству с сервисом.

3. Расширенные условия для крупных компаний

План «Бизнес» включает неограниченное количество агентов и возможности «Профи». Дополнительно перечислены доступ к API, гарантия SLA, персональный менеджер и выделенный сервер. Кнопка «Связаться с нами» обозначает отдельный сценарий: обсуждение требований и условий подключения с командой сервиса.

4. Логика сравнения и выбора

Карточки используют общую структуру: название, целевая аудитория, список возможностей и действие в нижней части. Посетитель может последовательно сравнить количество агентов, объём чатов и инструменты поддержки. Светлые боковые карточки и акцентная центральная помогают визуально разделить варианты без усложнения страницы.

Блок показывает путь от небольшого объёма обращений к командной работе и индивидуальному сопровождению. Такой формат помогает выбрать направление дальнейшего действия: начать бесплатно, попробовать расширенный план или обсудить подключение компании.`,
              en: `Architecture and functionality of the Pricing section

The section helps visitors match LiveChat capabilities to the scale of their business. A Pricing badge precedes “Choose the right plan” and an invitation to start for free and expand as the company grows. Three cards in a single row present Start, Pro and Business. The displayed screen compares features and limits; it does not show numerical prices.

1. Entry plan for small businesses

Start targets small companies and startups. Its list includes one agent, 100 chats per month, a basic widget, email support and 30 days of chat history. A Start for free button completes the card and provides a clear next step after reviewing the terms.

2. Highlighted plan for growing teams

The central Pro card stands out with a dark background, green button and Popular badge. It offers up to five agents, unlimited chats, analytics and reports, all integrations, reply templates and priority support. The contrasting presentation draws attention during comparison, while Try for free invites visitors to explore the service.

3. Extended options for larger companies

Business includes unlimited agents and the Pro features. Additional items list API access, an SLA guarantee, a personal manager and a dedicated server. A Contact us button introduces a separate journey: discussing requirements and onboarding terms with the service team.

4. Comparison and selection structure

The cards share a common structure: a name, target audience, feature list and an action at the bottom. Visitors can compare agent counts, chat volume and support tools in sequence. Light outer cards and an accented centre visually separate the options without complicating the page.

The section presents a path from a small volume of enquiries to teamwork and individual assistance. This format helps visitors choose their next step: start for free, try an expanded plan or discuss company onboarding.`,
              tj: `Сохтор ва вазифаҳои бахши «Тарифҳо»

Бахш барои муқоиса кардани имкониятҳои LiveChat бо миқёси тиҷорат кумак мекунад. Дар зери тамғаи «Тарифҳо» сарлавҳаи «Нақшаи мувофиқро интихоб кунед» ва пешниҳоди оғози ройгон бо васеъ кардани истифодаи хидмат ҳангоми рушди ширкат ҷойгиранд. Се корт дар як қатор нақшаҳои «Старт», «Профи» ва «Бизнес»-ро муаррифӣ мекунанд. Дар экрани нишоншуда имкониятҳо ва маҳдудиятҳо муқоиса мешаванд; нархи рақамии нақшаҳо оварда нашудааст.

1. Нақшаи ибтидоӣ барои тиҷорати хурд

Корти «Старт» барои ширкатҳои хурд ва стартапҳо пешбинӣ шудааст. Рӯйхат як оператор, 100 чат дар як моҳ, виҷети асосӣ, дастгирӣ тавассути почтаи электронӣ ва таърихи чатҳо барои 30 рӯзро дар бар мегирад. Тугмаи «Ройгон оғоз кунед» кортро анҷом дода, пас аз шиносоӣ бо шартҳо қадами навбатии равшан медиҳад.

2. Нақшаи намоён барои дастаҳои рушдкунанда

Корти марказии «Профи» бо заминаи торик, тугмаи сабз ва тамғаи «Маъмул» фарқ мекунад. Он то панҷ оператор, чатҳо бе маҳдудият, таҳлилу ҳисобот, ҳамаи ҳамгироиҳо, қолабҳои ҷавоб ва дастгирии афзалиятнокро пешниҳод менамояд. Ороиши фарқкунанда ин вариантро ҳангоми муқоиса намоён мекунад ва амали «Ройгон санҷед» ба шиносоӣ бо хидмат даъват менамояд.

3. Шартҳои васеъ барои ширкатҳои калон

Нақшаи «Бизнес» шумораи бемаҳдуди операторон ва имкониятҳои «Профи»-ро дар бар мегирад. Илова бар ин, дастрасӣ ба API, кафолати SLA, менеҷери шахсӣ ва сервери ҷудошуда номбар шудаанд. Тугмаи «Бо мо тамос гиред» роҳи алоҳидаи баррасии талабот ва шартҳои пайвастшавиро бо дастаи хидмат пешниҳод мекунад.

4. Сохтори муқоиса ва интихоб

Кортҳо сохтори ягона доранд: ном, аудиторияи мақсаднок, рӯйхати имкониятҳо ва амал дар қисми поён. Корбар метавонад шумораи операторон, ҳаҷми чатҳо ва абзорҳои дастгириро пайдарпай муқоиса кунад. Кортҳои равшани паҳлуӣ ва маркази намоён вариантҳоро бе мураккаб кардани саҳифа ҷудо мекунанд.

Бахш роҳро аз ҳаҷми ками муроҷиатҳо то кори даставӣ ва ҳамроҳии инфиродӣ нишон медиҳад. Ин формат барои интихоби қадами навбатӣ — оғози ройгон, санҷиши нақшаи васеъ ё баррасии пайвастшавии ширкат — кумак мекунад.`,
            },
          },
          {
            slug: "integrations",
            title: { ru: "Интеграции", en: "Integrations", tj: "Ҳамгироиҳо" },
            imageSrc: "/images/projects/livechat/integrations-1700.webp",
            BannerSrc: "/images/projects/livechat/integrations-1700.webp",
            shortInfo: {
              ru: "Подключение мессенджеров, CRM, конструкторов сайтов и API",
              en: "Connections to messengers, CRM systems, website builders and APIs",
              tj: "Пайвастшавӣ ба мессенҷерҳо, CRM, созандагони сомона ва API",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Интеграции»

Раздел представляет способы подключения LiveChat к инструментам компании. Под меткой «Интеграции» расположены заголовок «Подключайтесь к любым платформам» и пояснение о встраивании сервиса в существующий набор инструментов. Четыре карточки в два ряда группируют возможности по назначению: каналы общения, работа с клиентскими данными, установка на сайт и программное подключение.

1. Мессенджеры и единый интерфейс оператора

Карточка «Мессенджеры» сопровождается меткой «10+ каналов». Текст описывает приём обращений из популярных мессенджеров в одном интерфейсе оператора. Такое представление объясняет пользу объединения каналов: сотрудник может работать с обращениями в общем рабочем пространстве.

2. CRM-системы и передача данных

Карточка «CRM-системы» с меткой «15+ платформ» посвящена автоматической передаче информации о клиентах и сделках в CRM без ручного ввода. Она связывает общение в чате с дальнейшей работой с клиентом и показывает назначение интеграции через конкретную задачу обработки данных.

3. Конструкторы сайтов и установка виджета

Карточка «Конструкторы сайтов» содержит метку «Любая CMS» и предлагает установить виджет за несколько минут без программистов и специальных технических знаний. Этот блок адресован владельцам сайтов, которым важно понять, как добавить чат в уже существующий веб-проект. Конкретные платформы на данном экране не перечислены.

4. Собственный API и рабочие процессы

Карточка «Собственный API» отмечена подписью «REST & Webhooks». В описании представлены программные способы подключения LiveChat к продуктам и рабочим процессам компании. Такой вариант дополняет готовые направления интеграции для случаев, когда требуется индивидуальная связь с другими системами.

Единая структура карточек — цветная иконка, название, метка и короткое пояснение — помогает быстро найти нужное направление. Раздел позволяет сопоставить возможности сервиса с инструментами компании и определить, какие варианты подключения стоит изучить подробнее.`,
              en: `Architecture and functionality of the Integrations section

The section presents ways to connect LiveChat to a company’s tools. An Integrations badge precedes “Connect to any platform” and an explanation of fitting the service into an existing toolset. Four cards in two rows group the options by purpose: communication channels, customer data, website installation and programmatic connections.

1. Messengers and a shared operator interface

The Messengers card carries a “10+ channels” badge. Its text describes receiving enquiries from popular messengers in a single operator interface. This presentation explains the value of bringing channels together: staff can handle enquiries in a shared workspace.

2. CRM systems and data transfer

The CRM systems card, labelled “15+ platforms”, covers automatic transfer of customer and deal information into a CRM without manual entry. It connects chat communication with subsequent customer management and explains the integration through a specific data-handling task.

3. Website builders and widget installation

The Website builders card includes an “Any CMS” badge and presents installation in a few minutes without programmers or specialist technical knowledge. It addresses website owners who want to understand how to add chat to an existing web project. Specific platforms are not listed on this screen.

4. Custom API and workflows

The Custom API card is labelled “REST & Webhooks”. Its description introduces programmatic ways to connect LiveChat to company products and workflows. This option complements the other integration categories when a tailored connection to another system is required.

A consistent card structure — coloured icon, name, badge and short explanation — helps visitors locate the relevant category quickly. The section lets them compare the service’s capabilities with their company’s tools and identify connection options to explore further.`,
              tj: `Сохтор ва вазифаҳои бахши «Ҳамгироиҳо»

Бахш роҳҳои пайваст кардани LiveChat-ро ба абзорҳои ширкат муаррифӣ мекунад. Дар зери тамғаи «Ҳамгироиҳо» сарлавҳаи «Ба ҳама гуна платформаҳо пайваст шавед» ва шарҳи ворид кардани хидмат ба маҷмуи абзорҳои мавҷуда ҷойгиранд. Чор корт дар ду қатор имкониятҳоро аз рӯйи вазифа гурӯҳбандӣ мекунанд: роҳҳои муошират, маълумоти мизоҷон, насб дар сомона ва пайвастшавии барномавӣ.

1. Мессенҷерҳо ва интерфейси ягонаи оператор

Корти «Мессенҷерҳо» тамғаи «10+ канал» дорад. Матн қабули муроҷиатҳоро аз мессенҷерҳои маъмул дар интерфейси ягонаи оператор шарҳ медиҳад. Ин пешниҳод фоидаи муттаҳид кардани каналҳоро мефаҳмонад: корманд метавонад муроҷиатҳоро дар як майдони корӣ баррасӣ кунад.

2. Системаҳои CRM ва интиқоли маълумот

Корти «Системаҳои CRM» бо тамғаи «15+ платформа» ба интиқоли худкори маълумоти мизоҷон ва муомилаҳо ба CRM бе воридкунии дастӣ бахшида шудааст. Он муошират дар чатро бо кори минбаъда бо мизоҷ мепайвандад ва вазифаи ҳамгироиро тавассути коркарди маълумот шарҳ медиҳад.

3. Созандагони сомона ва насби виҷет

Корти «Созандагони сомона» тамғаи «Ҳар гуна CMS» дорад ва насби виҷетро дар чанд дақиқа бе барномасозон ва дониши махсуси техникӣ пешниҳод мекунад. Он ба соҳибони сомонаҳо мефаҳмонад, ки чӣ гуна чатро ба лоиҳаи вебии мавҷуда илова кардан мумкин аст. Дар ин экран платформаҳои мушаххас номбар нашудаанд.

4. API-и худӣ ва равандҳои корӣ

Корти «API-и худӣ» бо навиштаҷоти «REST & Webhooks» қайд шудааст. Тавсифи он роҳҳои барномавии пайваст кардани LiveChat-ро ба маҳсулот ва равандҳои кории ширкат муаррифӣ мекунад. Ин вариант самтҳои дигари ҳамгироиро барои ҳолатҳое пурра менамояд, ки алоқаи инфиродӣ бо системаҳои дигар зарур аст.

Сохтори ягонаи кортҳо — нишонаи ранга, ном, тамға ва шарҳи кӯтоҳ — барои зуд ёфтани самти зарурӣ кумак мекунад. Бахш имкон медиҳад, ки имкониятҳои хидмат бо абзорҳои ширкат муқоиса ва роҳҳои пайвастшавӣ барои омӯзиши бештар интихоб шаванд.`,
            },
          },
          {
            slug: "benefits",
            title: { ru: "Преимущества", en: "Benefits", tj: "Бартариҳо" },
            imageSrc: "/images/projects/livechat/benefits-1700.webp",
            BannerSrc: "/images/projects/livechat/benefits-1700.webp",
            shortInfo: {
              ru: "Роль онлайн-чата в продажах, организации поддержки и удержании клиентов",
              en: "The role of online chat in sales, support organisation and customer retention",
              tj: "Нақши чати онлайн дар фурӯш, ташкили дастгирӣ ва нигоҳдории мизоҷон",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Преимущества»

Раздел объясняет назначение LiveChat через задачи бизнеса. Под меткой «Преимущества» и заголовком «Для чего нужен онлайн-чат» расположены три карточки: «Рост продаж», «Сокращение расходов» и «Больше клиентов». Светлый фон, одинаковые размеры карточек и короткие пояснения помогают последовательно изучить аргументы в пользу подключения сервиса.

1. Общение с посетителем и рост продаж

Первая карточка предлагает вовлекать посетителей в разговор до того, как они покинут сайт. Текст связывает консультацию с переходом от интереса к заявке. Иконка восходящего графика поддерживает тему роста, а описание показывает роль чата как точки контакта с потенциальным клиентом.

2. Организация поддержки и сокращение расходов

Вторая карточка описывает возможность одного менеджера вести несколько диалогов одновременно. Через этот сценарий раскрывается предполагаемая польза для организации клиентской поддержки: работа с несколькими обращениями в одном канале. Иконка денежного знака визуально выделяет экономическую сторону предложения.

3. Оперативные ответы и удержание клиентов

Карточка «Больше клиентов» объясняет значение своевременной помощи: посетитель получает ответ до того, как начнёт искать его у конкурентов. Акцент сделан на сохранении контакта с заинтересованным пользователем. Иконка группы людей дополняет тему клиентской аудитории и отличает карточку от двух соседних.

4. Переход от преимуществ к поддержке

В нижней части экрана начинается следующий раздел с меткой «Поддержка», заголовком «Мы всегда рядом» и предложением выбрать удобный способ связи. Смена фона отделяет его от карточек преимуществ. Такая последовательность позволяет после знакомства с пользой продукта перейти к уточнению вопросов.

Блок переводит возможности онлайн-чата в понятные направления применения: получение заявок, работа менеджеров и удержание посетителей. Единая подача помогает оценить, какие задачи сервиса актуальны для конкретной компании, и продолжить изучение продукта.`,
              en: `Architecture and functionality of the Benefits section

The section explains LiveChat through business needs. Beneath a Benefits badge and the heading “What is online chat for?”, three cards present Sales growth, Cost reduction and More customers. A light background, matching card sizes and short explanations make the reasons for adopting the service easy to follow.

1. Visitor communication and sales growth

The first card encourages engaging visitors before they leave the website. Its text connects consultation with turning interest into an enquiry. An upward graph icon reinforces the growth theme, while the explanation presents chat as a contact point for potential customers.

2. Support organisation and cost reduction

The second card describes one manager handling several conversations simultaneously. This scenario introduces the potential operational benefit for customer support: managing multiple enquiries through one channel. A currency icon visually highlights the economic side of the offer.

3. Timely answers and customer retention

More customers explains the role of timely help: visitors receive an answer before seeking it from competitors. The focus is on maintaining contact with an interested user. A people icon reinforces the customer theme and distinguishes this card from its neighbours.

4. Transition from benefits to support

The next section begins at the bottom with a Support badge, “We are always here” heading and an invitation to choose a convenient contact method. A background change separates it from the benefit cards. This sequence lets visitors move from product value to clarifying their questions.

The section translates online chat capabilities into understandable applications: generating enquiries, organising managers’ work and retaining visitors. A consistent presentation helps users assess which needs are relevant to their company and continue exploring the product.`,
              tj: `Сохтор ва вазифаҳои бахши «Бартариҳо»

Бахш вазифаи LiveChat-ро тавассути ниёзҳои тиҷорат шарҳ медиҳад. Дар зери тамғаи «Бартариҳо» ва сарлавҳаи «Чати онлайн барои чӣ лозим аст?» се корт ҷойгиранд: «Афзоиши фурӯш», «Коҳиши хароҷот» ва «Мизоҷони бештар». Заминаи равшан, андозаи якхелаи кортҳо ва шарҳҳои кӯтоҳ омӯзиши пайдарпайи далелҳои пайвастшавӣ ба хидматро осон мекунанд.

1. Муошират бо корбар ва афзоиши фурӯш

Корти аввал ҷалби корбаронро ба суҳбат пеш аз тарки сомона пешниҳод мекунад. Матн машваратро бо гузариш аз таваҷҷуҳ ба дархост мепайвандад. Нишонаи графики болораванда мавзуи рушдро таъкид карда, тавсиф нақши чатро ҳамчун нуқтаи алоқа бо мизоҷи эҳтимолӣ нишон медиҳад.

2. Ташкили дастгирӣ ва коҳиши хароҷот

Корти дуюм имкони пеш бурдани чанд муколама аз ҷониби як менеҷерро тавсиф мекунад. Ин раванд фоидаи эҳтимолиро барои ташкили дастгирии мизоҷон — кор бо чанд муроҷиат дар як канал — мефаҳмонад. Нишонаи пул ҷанбаи иқтисодии пешниҳодро намоён мекунад.

3. Ҷавобҳои саривақтӣ ва нигоҳдории мизоҷон

Корти «Мизоҷони бештар» аҳамияти кумаки саривақтиро шарҳ медиҳад: корбар пеш аз ҷустуҷӯи ҷавоб дар назди рақибон онро мегирад. Диққат ба нигоҳ доштани алоқа бо корбари ҳавасманд равона шудааст. Нишонаи гурӯҳи одамон мавзуи мизоҷонро пурра карда, кортро аз ду корти ҳамсоя фарқ мекунад.

4. Гузариш аз бартариҳо ба дастгирӣ

Дар поёни экран бахши навбатӣ бо тамғаи «Дастгирӣ», сарлавҳаи «Мо ҳамеша дар паҳлуи шумоем» ва пешниҳоди интихоби роҳи қулайи алоқа оғоз мешавад. Иваз шудани замина онро аз кортҳои бартариҳо ҷудо мекунад. Ин пайдарпайӣ имкон медиҳад, ки пас аз шиносоӣ бо фоидаи маҳсулот корбар ба муайян кардани саволҳои худ гузарад.

Бахш имкониятҳои чати онлайнро ба самтҳои фаҳмои истифода — гирифтани дархостҳо, кори менеҷерон ва нигоҳдории корбарон — мепайвандад. Тарзи ягонаи муаррифӣ барои арзёбии вазифаҳои муҳим барои ширкат ва идомаи омӯзиши маҳсулот кумак мекунад.`,
            },
          },
          {
            slug: "support-faq",
            title: { ru: "Поддержка и FAQ", en: "Support and FAQ", tj: "Дастгирӣ ва саволҳои маъмул" },
            imageSrc: "/images/projects/livechat/support-faq-1700.webp",
            BannerSrc: "/images/projects/livechat/support-faq-1700.webp",
            shortInfo: {
              ru: "Каналы помощи, документация и ответы на вопросы о подключении сервиса",
              en: "Help channels, documentation and answers about getting started",
              tj: "Роҳҳои кумак, ҳуҷҷатҳо ва ҷавобҳо дар бораи пайвастшавӣ ба хидмат",
            },
            fullInfo: {
              ru: `Архитектура и функциональность блока «Поддержка и FAQ»

Раздел объединяет способы обращения за помощью и ответы на частые вопросы. Под меткой «Поддержка», заголовком «Мы всегда рядом» и предложением выбрать удобный способ связи расположены три карточки. Ниже находится отдельный блок FAQ с вопросами и ответами в две колонки. Такое построение совмещает персональное обращение и самостоятельный поиск информации.

1. Поддержка по электронной почте

Первая карточка содержит иконку конверта, заголовок «Email поддержка» и адрес support@livechat.ru. Текст сообщает об ответе в течение нескольких часов в рабочие дни. Контакт выделен зелёным, чтобы посетитель мог быстро найти способ письменного обращения и ознакомиться с указанным сроком ответа.

2. Онлайн-чат и документация

Центральная карточка «Онлайн-чат 24/7» представляет круглосуточную помощь и действие «Открыть чат». Соседняя карточка «Документация» предлагает руководства, FAQ и примеры кода по адресу docs.livechat.ru. Два варианта разделяют сценарии: задать вопрос специалисту или самостоятельно изучить материалы о подключении.

3. Ответы на вопросы перед началом работы

В блоке «Часто задаваемые вопросы» объясняется установка готового фрагмента кода на сайт; в ответе указан ориентир в пять минут. Другой пункт описывает тариф «Старт» как бесплатный без ограничения по времени и без необходимости кредитной карты. Эти пояснения помогают посетителю понять представленные на лендинге условия начала работы.

4. Управление подпиской и совместимость

Оставшиеся ответы посвящены отмене подписки в настройках аккаунта и поддерживаемым мессенджерам. В перечне названы Telegram, WhatsApp, VKontakte и Facebook Messenger. Ответы отображаются сразу под вопросами, поэтому основную информацию можно прочитать без раскрытия дополнительных элементов.

Единое оформление карточек с цветными иконками помогает сравнить способы получения помощи. Сочетание контактов и готовых ответов позволяет посетителю уточнить условия подключения, выбрать подходящий канал поддержки и продолжить знакомство с LiveChat.`,
              en: `Architecture and functionality of the Support and FAQ section

The section combines help channels with answers to common questions. A Support badge, “We are always here” heading and invitation to choose a contact method introduce three cards. A separate FAQ block below arranges questions and answers in two columns. This structure accommodates both personal assistance and self-service information.

1. Email support

The first card contains an envelope icon, an Email support heading and support@livechat.ru. Its text states a response within a few hours on working days. The address is highlighted in green, helping visitors quickly locate a written contact option and review the stated response time.

2. Online chat and documentation

The central Online chat 24/7 card presents round-the-clock assistance and an Open chat action. The neighbouring Documentation card offers guides, FAQs and code examples at docs.livechat.ru. These options distinguish two journeys: asking a specialist or independently studying setup materials.

3. Questions before getting started

The Frequently asked questions block explains installing a ready-made code snippet on a website, with an indicated setup time of five minutes. Another answer describes Start as free without a time limit or credit card requirement. These explanations help visitors understand the entry conditions presented on the landing page.

4. Subscription management and compatibility

The remaining answers cover cancelling a subscription in account settings and supported messengers. Telegram, WhatsApp, VKontakte and Facebook Messenger are named. Answers appear directly beneath their questions, so visitors can read the key information without expanding additional elements.

Consistent cards with coloured icons help visitors compare support options. Combining contacts with prepared answers lets them clarify onboarding terms, select a help channel and continue exploring LiveChat.`,
              tj: `Сохтор ва вазифаҳои бахши «Дастгирӣ ва саволҳои маъмул»

Бахш роҳҳои муроҷиат барои кумак ва ҷавобҳоро ба саволҳои маъмул муттаҳид мекунад. Дар зери тамғаи «Дастгирӣ», сарлавҳаи «Мо ҳамеша дар паҳлуи шумоем» ва пешниҳоди интихоби роҳи қулайи алоқа се корт ҷойгиранд. Дар поён блоки алоҳидаи саволу ҷавоб дар ду сутун оварда шудааст. Ин сохтор муроҷиати шахсӣ ва ҷустуҷӯи мустақили маълумотро фаро мегирад.

1. Дастгирӣ тавассути почтаи электронӣ

Корти аввал нишонаи лифофа, сарлавҳаи дастгирии почтавӣ ва суроғаи support@livechat.ru дорад. Матн ҷавобро дар давоми чанд соат дар рӯзҳои корӣ нишон медиҳад. Тамос бо ранги сабз ҷудо шудааст, то корбар роҳи муроҷиати хаттӣ ва муҳлати зикршудаи ҷавобро зуд пайдо кунад.

2. Чати онлайн ва ҳуҷҷатҳо

Корти марказии «Чати онлайн 24/7» кумаки шабонарӯзӣ ва амали «Кушодани чат»-ро муаррифӣ мекунад. Корти ҳамсояи «Ҳуҷҷатҳо» дастурҳо, саволҳои маъмул ва намунаҳои рамзро бо суроғаи docs.livechat.ru пешниҳод менамояд. Ин вариантҳо ду равандро ҷудо мекунанд: пурсидани савол аз мутахассис ё омӯзиши мустақили маводи пайвастшавӣ.

3. Саволҳо пеш аз оғози кор

Блоки «Саволҳои маъмул» насби порчаи рамзи омодаро дар сомона шарҳ медиҳад; дар ҷавоб вақти тахминии панҷ дақиқа оварда шудааст. Ҷавоби дигар нақшаи «Старт»-ро ҳамчун ройгон, бе маҳдудияти вақт ва бе зарурати корти бонкӣ тавсиф мекунад. Ин шарҳҳо барои фаҳмидани шартҳои оғози кор, ки дар лендинг пешниҳод шудаанд, кумак мекунанд.

4. Идоракунии обуна ва мувофиқат

Ҷавобҳои боқимонда ба бекор кардани обуна дар танзимоти ҳисоб ва мессенҷерҳои дастгиришаванда бахшида шудаанд. Дар рӯйхат Telegram, WhatsApp, VKontakte ва Facebook Messenger номбар шудаанд. Ҷавобҳо бевосита дар зери саволҳо намоёнанд, бинобар ин маълумоти асосиро бе кушодани унсурҳои иловагӣ хондан мумкин аст.

Ороиши ягонаи кортҳо бо нишонаҳои ранга муқоисаи роҳҳои гирифтани кумакро осон мекунад. Якҷо овардани тамосҳо ва ҷавобҳои омода ба корбар имкон медиҳад, ки шартҳои пайвастшавиро муайян карда, роҳи дастгириро интихоб намояд ва омӯзиши LiveChat-ро идома диҳад.`,
            },
          },
          {
            slug: "why-livechat-footer",
            title: { ru: "Почему LiveChat и подвал сайта", en: "Why LiveChat and site footer", tj: "Чаро LiveChat ва поёни сомона" },
            imageSrc: "/images/projects/livechat/why-livechat-footer-1700.webp",
            BannerSrc: "/images/projects/livechat/why-livechat-footer-1700.webp",
            shortInfo: {
              ru: "Итоговая презентация возможностей, бесплатный старт и навигация в подвале",
              en: "Closing feature overview, free start and footer navigation",
              tj: "Муаррифии ниҳоии имкониятҳо, оғози ройгон ва роҳнамоии поёни сомона",
            },
            fullInfo: {
              ru: `Архитектура и функциональность завершающего экрана LiveChat

Экран объединяет заключительный блок «Почему LiveChat» и подвал сайта. Верхняя часть использует тёмный фон с мягким зелёным свечением, а нижняя — светлую поверхность с колонками ссылок. Контраст отделяет предложение начать работу от справочной навигации и завершает презентацию продукта.

1. Основное предложение и краткий обзор возможностей

Под меткой «Почему LiveChat» расположен заголовок «Почему стоит купить онлайн-чат от LiveChat?» и пояснение о возможностях для клиентского сервиса в одном продукте. Ниже пять компактных меток перечисляют мультиязычность, загрузку виджета, отправку файлов, шаблоны быстрых ответов и отправку картинок в чате. Такой формат позволяет быстро просмотреть набор возможностей в конце лендинга.

2. Завершающий призыв к действию

Белая кнопка «Начать бесплатно» со стрелкой заметно выделяется на тёмном фоне. Она расположена непосредственно под перечнем возможностей, связывая знакомство с продуктом с дальнейшим действием. Посетитель, дошедший до конца страницы, получает точку перехода к бесплатному старту без возврата к первому экрану.

3. Структура навигации в подвале

Слева размещены логотип LiveChat и краткое описание онлайн-чата для продаж и клиентского сервиса. Рядом расположены три колонки: «Продукт» со ссылками на функции, тарифы, интеграции и безопасность; «Компания» с информацией о компании, блогом, документацией и контактами; «Начать» с регистрацией, входом, демо и партнёрством. Группировка помогает выбрать следующий раздел по цели посещения.

4. Справочные ссылки и завершение страницы

Тонкая горизонтальная линия отделяет нижнюю строку с отметкой авторских прав от основной навигации. Справа находятся ссылки «Конфиденциальность» и «Условия». Их расположение сохраняет доступ к документам в привычной области страницы, не отвлекая от основного предложения.

Экран поддерживает два сценария: перейти к началу работы или продолжить изучение сервиса через тематические ссылки. Повторный призыв к действию и упорядоченный подвал помогают завершить знакомство с LiveChat понятным следующим шагом.`,
              en: `Architecture and functionality of the LiveChat closing screen

The screen combines the final Why LiveChat section with the site footer. Its upper area uses a dark background with a soft green glow, while the lower area places columns of links on a light surface. This contrast separates the invitation to get started from reference navigation and completes the product presentation.

1. Main offer and brief capability overview

A Why LiveChat badge introduces the heading “Why buy online chat from LiveChat?” and a statement about customer service capabilities in one product. Five compact badges below list multilingual support, widget loading, file sharing, quick reply templates and image sharing in chat. This format makes the capabilities easy to review at the end of the landing page.

2. Closing call to action

A white Start for free button with an arrow stands out against the dark background. Positioned directly beneath the capability list, it connects product exploration to a next action. Visitors reaching the page’s end can proceed towards a free start without returning to the first screen.

3. Footer navigation structure

The left column contains the LiveChat logo and a short description of chat for sales and customer service. Three adjacent columns group links: Product covers features, pricing, integrations and security; Company covers company information, the blog, documentation and contacts; Get started covers registration, sign-in, a demo and partnerships. This grouping helps visitors choose a section according to their purpose.

4. Reference links and page completion

A thin horizontal line separates the bottom copyright row from the main navigation. Privacy and Terms links sit on the right. Their placement keeps documents accessible in a familiar part of the page without distracting from the primary offer.

The screen supports two journeys: getting started or continuing to explore the service through topic links. A repeated call to action and an organised footer help visitors finish their introduction to LiveChat with a clear next step.`,
              tj: `Сохтор ва вазифаҳои экрани хотимавии LiveChat

Экран бахши ниҳоии «Чаро LiveChat» ва поёни сомонаро муттаҳид мекунад. Қисми боло заминаи торик бо равшании мулоими сабз дорад, қисми поён бошад сутунҳои пайвандҳоро дар сатҳи равшан ҷой медиҳад. Ин фарқият пешниҳоди оғози корро аз роҳнамоии маълумотӣ ҷудо карда, муаррифии маҳсулотро анҷом медиҳад.

1. Пешниҳоди асосӣ ва шарҳи кӯтоҳи имкониятҳо

Дар зери тамғаи «Чаро LiveChat» сарлавҳаи «Чаро чати онлайнро аз LiveChat харидан лозим аст?» ва шарҳи имкониятҳои хизматрасонӣ ба мизоҷон дар як маҳсулот ҷойгиранд. Дар поён панҷ тамғаи паймон бисёрзабонӣ, боркунии виҷет, ирсоли файлҳо, қолабҳои ҷавобҳои зуд ва ирсоли тасвирҳоро дар чат номбар мекунанд. Ин формат барои баррасии зуди имкониятҳо дар охири лендинг хизмат мекунад.

2. Даъвати ниҳоӣ ба амал

Тугмаи сафеди «Ройгон оғоз кунед» бо тирча дар заминаи торик намоён аст. Он бевосита дар зери рӯйхати имкониятҳо ҷойгир шуда, омӯзиши маҳсулотро бо амали навбатӣ мепайвандад. Корбар дар охири саҳифа метавонад бе бозгашт ба экрани аввал ба оғози ройгон гузарад.

3. Сохтори роҳнамоии поёни сомона

Дар тарафи чап нишони LiveChat ва тавсифи кӯтоҳи чат барои фурӯш ва хизматрасонӣ ба мизоҷон ҷойгиранд. Дар паҳлу се сутун мавҷуданд: «Маҳсулот» бо имкониятҳо, тарифҳо, ҳамгироиҳо ва амният; «Ширкат» бо маълумоти ширкат, блог, ҳуҷҷатҳо ва тамосҳо; «Оғоз» бо сабти ном, воридшавӣ, намоиш ва шарикӣ. Гурӯҳбандӣ интихоби бахши навбатиро мувофиқи мақсади корбар осон мекунад.

4. Пайвандҳои маълумотӣ ва анҷоми саҳифа

Хати борики уфуқӣ сатри ҳуқуқи муаллифро аз роҳнамоии асосӣ ҷудо мекунад. Дар тарафи рост пайвандҳои «Махфият» ва «Шартҳо» ҷойгиранд. Ин ҷойгиршавӣ дастрасиро ба ҳуҷҷатҳо дар қисми маъмулии саҳифа нигоҳ дошта, диққатро аз пешниҳоди асосӣ намегирад.

Экран ду равандро дастгирӣ мекунад: гузариш ба оғози кор ё идомаи омӯзиши хидмат тавассути пайвандҳои мавзуӣ. Даъвати такрорӣ ба амал ва поёни мураттаби сомона шиносоиро бо LiveChat бо қадами навбатии равшан анҷом медиҳанд.`,
            },
          },
        ],
      },
      {
        tabName: { ru: "Личный кабинет", en: "Account", tj: "Кабинети шахсӣ" },
        items: [
          {
            slug: "login",
            title: { ru: "Вход в личный кабинет", en: "Account sign-in", tj: "Воридшавӣ ба кабинети шахсӣ" },
            imageSrc: "/images/projects/livechat/login-full.webp",
            BannerSrc: "/images/projects/livechat/login-full.webp",
            shortInfo: {
              ru: "Вход по электронной почте и паролю или через Google с защитой reCAPTCHA",
              en: "Sign in with email and password or Google with reCAPTCHA protection",
              tj: "Воридшавӣ бо почтаи электронӣ ва рамз ё тавассути Google бо муҳофизати reCAPTCHA",
            },
            fullInfo: {
              ru: `Архитектура и функциональность страницы входа

Страница авторизации открывает доступ к личному кабинету LiveChat. В центре светлого экрана расположена белая карточка с мягкой тенью. Заголовок «Cabinet Livechat» и пояснение «Войдите в свой аккаунт» обозначают назначение страницы, а свободное пространство вокруг формы помогает сосредоточиться на входе.

1. Вход по электронной почте и паролю

Форма содержит два подписанных поля: электронную почту и пароль. Пример адреса подсказывает формат ввода, а символы пароля скрыты. Зелёная кнопка «Войти» занимает ширину формы и выделяет основное действие пользователя.

2. Авторизация через Google

Под разделителем «или» находится кнопка «Войти через Google» с цветным логотипом сервиса. Она предлагает использовать учётную запись Google как альтернативный способ входа. Контурное оформление визуально отделяет этот вариант от основной кнопки формы.

3. Регистрация и выбор языка

Внизу карточки размещена подсказка «Нет аккаунта?» со ссылкой «Зарегистрироваться». Новый пользователь может перейти к созданию аккаунта прямо со страницы входа. Переключатель в правом верхнем углу отвечает за выбор языка; на снимке выбран русский.

4. Защита от автоматизированных обращений

В правом нижнем углу страницы отображается значок Google reCAPTCHA. Этот элемент обозначает использование защиты от автоматизированных обращений. Он размещён отдельно от карточки, сохраняя компактность формы и доступность обоих способов авторизации.

Страница объединяет вход через форму, авторизацию Google и переход к регистрации. Последовательное расположение элементов позволяет быстро выбрать подходящий способ доступа к кабинету.`,
              en: `Architecture and functionality of the sign-in page

The sign-in page provides access to the LiveChat account. A white card with a soft shadow sits in the centre of a light screen. The “Cabinet Livechat” heading and “Sign in to your account” subtitle explain its purpose, while the surrounding space focuses attention on the form.

1. Email and password sign-in

The form contains two labelled fields for email and password. An example address indicates the expected input format, while password characters are masked. A green Sign in button spans the form’s width and highlights the primary action.

2. Google authentication

A Sign in with Google button with the service’s coloured logo appears beneath an “or” divider. It offers a Google account as an alternative sign-in method. Its outlined styling visually separates this option from the form’s primary button.

3. Registration and language selection

The bottom of the card asks “Don’t have an account?” and provides a Register link. New users can proceed to account creation directly from the sign-in page. A selector in the upper-right corner offers language selection; Russian is selected in the screenshot.

4. Protection against automated requests

A Google reCAPTCHA badge appears in the lower-right corner of the page, indicating the use of protection against automated requests. It sits outside the card, keeping the form compact and both authentication methods accessible.

The page brings together form-based sign-in, Google authentication and a registration link. The sequence of elements helps users quickly choose their preferred route into the account.`,
              tj: `Сохтор ва вазифаҳои саҳифаи воридшавӣ

Саҳифаи воридшавӣ дастрасиро ба кабинети шахсии LiveChat пешниҳод мекунад. Дар маркази экрани равшан корти сафед бо сояи мулоим ҷойгир аст. Сарлавҳаи «Cabinet Livechat» ва шарҳи «Ба ҳисоби худ ворид шавед» вазифаи саҳифаро мефаҳмонанд. Фазои холии атроф диққатро ба шакл равона мекунад.

1. Воридшавӣ бо почтаи электронӣ ва рамз

Шакл ду майдони номгузоришуда барои почтаи электронӣ ва рамз дорад. Намунаи суроға формати воридкуниро нишон медиҳад ва аломатҳои рамз пинҳон мебошанд. Тугмаи сабзи «Ворид шудан» тамоми паҳнои шаклро гирифта, амали асосиро ҷудо мекунад.

2. Воридшавӣ тавассути Google

Дар зери ҷудокунандаи «ё» тугмаи «Ворид шудан тавассути Google» бо нишони рангаи хизматрасонӣ ҷойгир аст. Он истифодаи ҳисоби Google-ро ҳамчун роҳи дигари воридшавӣ пешниҳод мекунад. Чорчӯбаи тугма ин интихобро аз тугмаи асосии шакл ҷудо месозад.

3. Сабти ном ва интихоби забон

Дар поёни корт саволи «Ҳисоб надоред?» ва пайванди «Сабти ном» мавҷуданд. Корбари нав метавонад бевосита аз саҳифаи воридшавӣ ба сохтани ҳисоб гузарад. Интихобкунандаи кунҷи болоии рост барои интихоби забон пешбинӣ шудааст; дар тасвир забони русӣ интихоб шудааст.

4. Муҳофизат аз муроҷиатҳои худкор

Дар кунҷи поёнии рости саҳифа нишонаи Google reCAPTCHA намоён аст. Он истифодаи муҳофизат аз муроҷиатҳои худкорро нишон медиҳад. Нишона берун аз корт ҷойгир шуда, шаклро паймон ва ҳар ду роҳи воридшавиро дастрас нигоҳ медорад.

Саҳифа воридшавӣ тавассути шакл, истифодаи Google ва гузариш ба сабти номро муттаҳид мекунад. Ҷойгиршавии пайдарпайи унсурҳо ба корбар барои интихоби роҳи мувофиқи дастрасӣ ба кабинет кумак мерасонад.`,
            },
          },
          {
            slug: "register",
            title: { ru: "Регистрация аккаунта", en: "Account registration", tj: "Сабти номи ҳисоб" },
            imageSrc: "/images/projects/livechat/register-full.webp",
            BannerSrc: "/images/projects/livechat/register-full.webp",
            shortInfo: {
              ru: "Создание аккаунта через форму или Google с защитой reCAPTCHA",
              en: "Account creation through a form or Google with reCAPTCHA protection",
              tj: "Сохтани ҳисоб тавассути шакл ё Google бо муҳофизати reCAPTCHA",
            },
            fullInfo: {
              ru: `Архитектура и функциональность страницы регистрации

Страница «Создать аккаунт» представляет начало работы с личным кабинетом LiveChat. Белая карточка с мягкой тенью расположена в центре светлого экрана. Заголовок и пояснение «Зарегистрируйтесь, чтобы начать» задают назначение формы, а свободное пространство вокруг неё удерживает внимание на создании аккаунта.

1. Основная форма регистрации

Четыре подписанных поля последовательно запрашивают полное имя, электронную почту, пароль и подтверждение пароля. Примеры в полях подсказывают ожидаемый формат данных. Повторный ввод пароля позволяет пользователю подтвердить выбранную комбинацию перед отправкой формы. Зелёная кнопка «Зарегистрироваться» выделяет основное действие.

2. Регистрация через Google

Под разделителем «или» расположена отдельная кнопка «Зарегистрироваться через Google» с узнаваемым логотипом. Она предлагает альтернативный путь создания аккаунта с использованием учётной записи Google. Визуальное разделение помогает выбрать способ регистрации до заполнения формы.

3. Переход ко входу и выбор языка

Внизу карточки находится текст «Уже есть аккаунт?» со ссылкой «Войти». Он помогает существующим пользователям перейти к авторизации. В правом верхнем углу страницы расположен переключатель языка, на снимке выбран русский.

4. Защита формы и завершение сценария

В правом нижнем углу виден значок Google reCAPTCHA — средства защиты от автоматизированных обращений. Пользователь заполняет форму и нажимает основную кнопку либо выбирает Google. Страница объединяет оба пути регистрации и возврат ко входу в одном интерфейсе.

Такая композиция делает начало работы понятным: поля собраны в последовательную форму, альтернативная авторизация отделена от неё, а доступ к существующему аккаунту остаётся рядом.`,
              en: `Architecture and functionality of the registration page

The Create account page introduces the LiveChat account journey. A white card with a soft shadow sits in the centre of a light screen. Its heading and “Register to get started” subtitle explain the form’s purpose, while surrounding space focuses attention on account creation.

1. Main registration form

Four labelled fields request a full name, email, password and password confirmation in sequence. Examples indicate the expected input format. Repeating the password lets users confirm their chosen combination before submitting the form. A green Register button highlights the primary action.

2. Google registration

A separate Register with Google button with the recognisable logo appears beneath an “or” divider. It offers an alternative account creation route using a Google account. The visual separation helps visitors choose a registration method before completing the form.

3. Sign-in link and language selection

The bottom of the card asks “Already have an account?” and provides a Sign in link for existing users. A language selector appears in the upper-right corner of the page, with Russian selected in the screenshot.

4. Form protection and user journey

A Google reCAPTCHA badge is visible in the lower-right corner, indicating protection against automated submissions. Users complete the form and select the primary button or choose Google. Both registration routes and the return to sign-in are brought together in one interface.

This composition makes getting started clear: fields follow a sequence, the alternative authentication method is visually separated and access to an existing account remains nearby.`,
              tj: `Сохтор ва вазифаҳои саҳифаи сабти ном

Саҳифаи «Сохтани ҳисоб» оғози кор бо кабинети шахсии LiveChat-ро муаррифӣ мекунад. Корти сафед бо сояи мулоим дар маркази экрани равшан ҷойгир аст. Сарлавҳа ва шарҳи «Барои оғоз сабти ном кунед» вазифаи шаклро муайян мекунанд ва фазои холии атроф диққатро ба сохтани ҳисоб равона месозад.

1. Шакли асосии сабти ном

Чор майдони номгузоришуда пайдарпай номи пурра, почтаи электронӣ, рамз ва тасдиқи рамзро мепурсанд. Намунаҳои майдонҳо формати маълумотро нишон медиҳанд. Воридкунии такрории рамз ба корбар имкон медиҳад, ки онро пеш аз ирсоли шакл тасдиқ кунад. Тугмаи сабзи «Сабти ном» амали асосиро ҷудо мекунад.

2. Сабти ном тавассути Google

Дар зери ҷудокунандаи «ё» тугмаи алоҳидаи «Сабти ном тавассути Google» бо нишони шинохташаванда ҷойгир аст. Он роҳи дигари сохтани ҳисобро бо истифодаи ҳисоби Google пешниҳод мекунад. Ҷудокунии визуалӣ барои интихоби роҳи сабти ном пеш аз пур кардани шакл кумак мекунад.

3. Гузариш ба воридшавӣ ва интихоби забон

Дар поёни корт саволи «Аллакай ҳисоб доред?» ва пайванди «Ворид шудан» барои корбарони мавҷуда ҷойгиранд. Дар кунҷи болоии рости саҳифа интихобкунандаи забон мавҷуд аст; дар тасвир забони русӣ интихоб шудааст.

4. Муҳофизати шакл ва раванди истифода

Дар кунҷи поёнии рост нишонаи Google reCAPTCHA дида мешавад, ки ба муҳофизат аз муроҷиатҳои худкор ишора мекунад. Корбар шаклро пур карда, тугмаи асосиро пахш мекунад ё Google-ро интихоб менамояд. Ҳар ду роҳи сабти ном ва бозгашт ба воридшавӣ дар як интерфейс муттаҳид шудаанд.

Ин тарҳ оғози корро фаҳмо мекунад: майдонҳо пайдарпай ҷойгиранд, роҳи дигари воридшавӣ аз онҳо ҷудо аст ва дастрасӣ ба ҳисоби мавҷуда дар наздикӣ мемонад.`,
            },
          },
          {
            slug: "register-filled",
            title: { ru: "Заполненная форма регистрации", en: "Completed registration form", tj: "Шакли пуршудаи сабти ном" },
            imageSrc: "/images/projects/livechat/register-filled-full.webp",
            BannerSrc: "/images/projects/livechat/register-filled-full.webp",
            shortInfo: {
              ru: "Пример заполнения данных перед регистрацией аккаунта LiveChat",
              en: "Example of entered details before registering a LiveChat account",
              tj: "Намунаи маълумоти воридшуда пеш аз сабти ҳисоби LiveChat",
            },
            fullInfo: {
              ru: `Архитектура и функциональность заполненной формы регистрации

Экран демонстрирует страницу «Создать аккаунт» после ввода данных и до отправки формы. Белая карточка с мягкой тенью расположена в центре светлого фона. Сохранённая структура страницы позволяет увидеть, как выглядит регистрация в процессе заполнения.

1. Данные пользователя

В полях полного имени и электронной почты указаны тестовые значения. Подписи остаются над полями, поэтому назначение каждого значения понятно и после ввода. Этот пример показывает состояние формы с заполненными данными, а не результат создания аккаунта.

2. Пароль и подтверждение

Оба поля пароля заполнены, при этом символы скрыты точками. Поле основного пароля выделено светло-голубым фоном. Отдельное подтверждение позволяет повторно ввести выбранную комбинацию; результат проверки совпадения на этом экране не показан.

3. Отправка формы и Google

Зелёная кнопка «Зарегистрироваться» расположена под полями и выделяет следующий шаг. Ниже разделитель «или» отделяет кнопку регистрации через Google. Пользователю доступны основной сценарий с заполнением формы и альтернативный способ с учётной записью Google.

4. Дополнительные элементы

Внизу карточки находится ссылка «Войти» для существующих пользователей. В правом верхнем углу страницы расположен выбор языка, а в нижнем — значок Google reCAPTCHA. Эти элементы дополняют форму переходом к авторизации, выбором языка и обозначением защиты от автоматизированных обращений.

Снимок раскрывает промежуточное состояние регистрации: данные введены, пароли скрыты, а действие отправки остаётся хорошо заметным. Ошибки или подтверждение успешной регистрации на экране отсутствуют.`,
              en: `Architecture and functionality of the completed registration form

This screen shows the Create account page after details have been entered and before submission. A white card with a soft shadow sits in the centre of a light background. The familiar layout illustrates registration while the form is being completed.

1. User details

The full name and email fields contain test values. Labels remain above the fields, keeping each value’s purpose clear after entry. This example shows a populated form rather than the result of account creation.

2. Password and confirmation

Both password fields are populated, with characters masked by dots. The main password field has a light blue background. A separate confirmation field allows the chosen password to be entered again; this screen does not show the outcome of a match check.

3. Form submission and Google

The green Register button below the fields highlights the next step. An “or” divider separates the Google registration button beneath it. Users can follow the main form-based journey or choose the alternative Google account method.

4. Supporting elements

A Sign in link at the bottom of the card serves existing users. Language selection appears in the upper-right corner of the page, with a Google reCAPTCHA badge below. These elements provide access to sign-in, language choice and an indication of protection against automated requests.

The screenshot presents an intermediate registration state: details are entered, passwords are masked and the submission action remains prominent. No errors or successful registration confirmation are displayed.`,
              tj: `Сохтор ва вазифаҳои шакли пуршудаи сабти ном

Экран саҳифаи «Сохтани ҳисоб»-ро баъди ворид кардани маълумот ва пеш аз ирсоли шакл нишон медиҳад. Корти сафед бо сояи мулоим дар маркази заминаи равшан ҷойгир аст. Сохтори шиноси саҳифа намуди сабти номро дар раванди пуркунӣ нишон медиҳад.

1. Маълумоти корбар

Дар майдонҳои номи пурра ва почтаи электронӣ арзишҳои санҷишӣ ворид шудаанд. Номи майдонҳо дар болои онҳо мемонад, бинобар ин мақсади ҳар арзиш баъди воридкунӣ низ фаҳмост. Намуна ҳолати шакли пуршударо нишон медиҳад, на натиҷаи сохтани ҳисобро.

2. Рамз ва тасдиқи он

Ҳар ду майдони рамз пур шудаанд ва аломатҳо бо нуқтаҳо пинҳон мебошанд. Майдони рамзи асосӣ заминаи кабуди равшан дорад. Майдони алоҳидаи тасдиқ барои такроран ворид кардани рамз пешбинӣ шудааст; натиҷаи санҷиши мувофиқат дар экран нишон дода нашудааст.

3. Ирсоли шакл ва Google

Тугмаи сабзи «Сабти ном» дар зери майдонҳо қадами навбатиро ҷудо мекунад. Ҷудокунандаи «ё» тугмаи сабти ном тавассути Google-ро аз шакл ҷудо месозад. Корбар метавонад шаклро истифода барад ё роҳи дигарро бо ҳисоби Google интихоб кунад.

4. Унсурҳои иловагӣ

Дар поёни корт пайванди «Ворид шудан» барои корбарони мавҷуда ҷойгир аст. Дар кунҷи болоии рости саҳифа интихоби забон ва дар поён нишонаи Google reCAPTCHA мавҷуданд. Онҳо гузариш ба воридшавӣ, интихоби забон ва нишонаи муҳофизат аз муроҷиатҳои худкорро пешниҳод мекунанд.

Тасвир ҳолати мобайнии сабти номро нишон медиҳад: маълумот ворид шудааст, рамзҳо пинҳонанд ва тугмаи ирсол намоён мемонад. Дар экран хатогӣ ё тасдиқи анҷоми сабти ном вуҷуд надорад.`,
            },
          },
          {
            slug: "widget-setup-step-1",
            title: { ru: "Настройка виджета — шаг 1", en: "Widget setup — step 1", tj: "Танзими виджет — қадами 1" },
            imageSrc: "/images/projects/livechat/widget-setup-step-1-full.webp",
            BannerSrc: "/images/projects/livechat/widget-setup-step-1-full.webp",
            shortInfo: {
              ru: "Настройка имени, аватара и цветов оператора с предпросмотром виджета",
              en: "Configure the operator name, avatar and colours with a widget preview",
              tj: "Танзими ном, аватар ва рангҳои оператор бо пешнамоиши виджет",
            },
            fullInfo: {
              ru: `Архитектура и функциональность первого шага настройки виджета

Экран открывает мастер настройки LiveChat и посвящён внешнему виду оператора в чате. В верхней части расположен заголовок «Настройка виджета» и отметка «Шаг 1 из 5». Основная форма находится в белой карточке, а справа выделена отдельная область предпросмотра.

1. Последовательность настройки

Над карточкой показан индикатор из пяти пронумерованных шагов. Первый шаг выделен зелёным, остальные отображаются нейтральным цветом. Под формой находится кнопка «Далее», обозначающая переход к следующему этапу мастера.

2. Представление оператора

Поля «Имя оператора» и «Должность / Отдел» позволяют задать сведения, которые представляют сотрудника или службу в чате. Примеры «Алексей» и «Служба поддержки» поясняют ожидаемые значения. Между полями расположен блок аватара с круглой заглушкой и кнопкой «Загрузить фото».

3. Цветовое оформление

Для фона и текста предусмотрены отдельные ряды цветовых образцов. Выбранные варианты отмечены обводкой: на снимке это зелёный фон и белый текст. Рядом с готовыми цветами видны кнопки с иконкой палитры, предлагающие дополнительный выбор оттенка.

4. Предпросмотр виджета

Справа показан образец чата с зелёной шапкой, аватаром-заглушкой, названием «Оператор» и подписью «Служба поддержки». В области сообщений указано, что приветственное сообщение отсутствует. Нижняя панель содержит значки вложений, документа, смайлика и кнопку отправки. Предпросмотр позволяет оценить композицию виджета рядом с настройками.

Разделение формы и образца чата помогает сопоставить параметры с внешним видом интерфейса. Индикатор прогресса и кнопка продолжения делают первый этап частью понятной последовательности настройки.`,
              en: `Architecture and functionality of the first widget setup step

This screen opens the LiveChat setup wizard and focuses on the operator’s appearance in chat. The header reads Widget setup and indicates Step 1 of 5. The main form sits in a white card, with a separate preview area on the right.

1. Setup sequence

A five-step numbered progress indicator appears above the card. Green highlights the first step, while the remaining steps use a neutral colour. A Next button below the form indicates the route to the next stage of the wizard.

2. Operator identity

The Operator name and Position / Department fields define how the employee or service is presented in chat. Example values clarify the expected input. An avatar section between the fields contains a circular placeholder and an Upload photo button.

3. Colour settings

Separate rows of colour swatches are provided for the background and text. Outlines mark the selected options: green for the background and white for the text in this screenshot. Palette buttons beside the preset colours offer an additional colour choice.

4. Widget preview

The right-hand preview shows a chat with a green header, an avatar placeholder, the name Operator and a Support service subtitle. The message area indicates that no welcome message is set. The bottom bar contains attachment, document and emoji icons alongside a send button. The preview lets users assess the widget’s composition beside its settings.

Separating the form from the chat sample helps relate the options to the interface’s appearance. The progress indicator and continuation button place this first stage within a clear setup sequence.`,
              tj: `Сохтор ва вазифаҳои қадами аввали танзими виджет

Ин экран устоди танзими LiveChat-ро оғоз карда, ба намуди оператор дар чат бахшида шудааст. Дар боло сарлавҳаи «Танзими виджет» ва нишонаи «Қадами 1 аз 5» ҷойгиранд. Шакли асосӣ дар корти сафед аст ва дар тарафи рост қисми алоҳидаи пешнамоиш мавҷуд мебошад.

1. Пайдарпайии танзим

Дар болои корт нишондиҳандаи панҷ қадами рақамдор ҷойгир аст. Қадами аввал бо ранги сабз ҷудо шуда, қадамҳои боқимонда ранги бетараф доранд. Тугмаи «Баъдӣ» дар зери шакл гузариш ба марҳилаи навбатии устодро нишон медиҳад.

2. Маълумоти оператор

Майдонҳои «Номи оператор» ва «Вазифа / Шуъба» барои муаррифии корманд ё хизматрасонӣ дар чат пешбинӣ шудаанд. Намунаҳои майдонҳо маълумоти интизоршавандаро мефаҳмонанд. Байни онҳо блоки аватар бо ҷойнишини доирашакл ва тугмаи «Бор кардани акс» ҷойгир аст.

3. Танзими рангҳо

Барои замина ва матн қаторҳои алоҳидаи намунаҳои ранг мавҷуданд. Интихоби ҷорӣ бо ҳалқа нишон дода шудааст: дар тасвир замина сабз ва матн сафед аст. Дар паҳлуи рангҳои тайёр тугмаҳои дорои нишонаи палитра барои интихоби иловагии ранг дида мешаванд.

4. Пешнамоиши виджет

Дар тарафи рост намунаи чат бо сарлавҳаи сабз, ҷойнишини аватар, номи «Оператор» ва навиштаҷоти «Хадамоти дастгирӣ» нишон дода шудааст. Қисми паёмҳо набудани паёми истиқболиро нишон медиҳад. Панели поёнӣ нишонаҳои замима, ҳуҷҷат, шаклак ва тугмаи ирсолро дар бар мегирад. Пешнамоиш барои арзёбии намуди виджет дар паҳлуи танзимот кумак мекунад.

Ҷудокунии шакл ва намунаи чат имкон медиҳад, ки танзимот бо намуди интерфейс муқоиса карда шаванд. Нишондиҳандаи пешрафт ва тугмаи идома қадами аввалро ба пайдарпайии фаҳмои танзим мепайванданд.`,
            },
          },
          {
            slug: "widget-setup-step-1-filled",
            title: { ru: "Настройка виджета — данные оператора", en: "Widget setup — operator details", tj: "Танзими виджет — маълумоти оператор" },
            imageSrc: "/images/projects/livechat/widget-setup-step-1-filled-full.webp",
            BannerSrc: "/images/projects/livechat/widget-setup-step-1-filled-full.webp",
            shortInfo: {
              ru: "Заполненные данные оператора и загруженный аватар в предпросмотре виджета",
              en: "Entered operator details and an uploaded avatar shown in the widget preview",
              tj: "Маълумоти пуршудаи оператор ва аватари боршуда дар пешнамоиши виджет",
            },
            fullInfo: {
              ru: `Архитектура и функциональность настройки данных оператора

Экран показывает заполненное состояние первого шага мастера настройки LiveChat. В карточке слева указаны данные оператора и выбран аватар, а справа представлен виджет с теми же сведениями. Индикатор «Шаг 1 из 5» сохраняет контекст текущего этапа.

1. Имя и отдел оператора

Поле имени содержит значение «Test», а поле «Должность / Отдел» — «test». Поле отдела находится в фокусе и выделено контуром. Оба значения видны в шапке предпросмотра, позволяя сопоставить введённые сведения с представлением оператора в чате.

2. Загруженный аватар

Вместо стандартной заглушки отображается выбранное изображение в круглом формате. Рядом с кнопкой «Загрузить фото» указан размер файла — 17.0 КБ. Этот же аватар показан в шапке виджета, демонстрируя оформление профиля после выбора изображения.

3. Цвета и предпросмотр

Для фона выбран зелёный цвет, для текста — белый; активные образцы отмечены обводкой. Предпросмотр сочетает эти цвета с именем, отделом и аватаром. Область сообщений сообщает об отсутствии приветствия, а нижняя панель содержит значки вложений и кнопку отправки.

4. Продолжение настройки

Над формой остаётся последовательность из пяти шагов с выделенным первым этапом. Зелёная кнопка «Далее» под карточкой обозначает продолжение настройки. На снимке показано состояние до перехода к следующему шагу.

Этот пример раскрывает связь заполненных полей с внешним видом чата. Расположение формы рядом с предпросмотром позволяет оценить представление оператора перед продолжением настройки.`,
              en: `Architecture and functionality of operator details setup

This screen shows the populated first step of the LiveChat setup wizard. The card on the left contains operator details and a selected avatar, while the widget on the right displays the same information. The Step 1 of 5 indicator preserves the context of the current stage.

1. Operator name and department

The name field contains “Test” and the Position / Department field contains “test”. The department field is focused and outlined. Both values appear in the preview header, allowing users to compare their entries with the operator’s presentation in chat.

2. Uploaded avatar

A selected image in a circular format replaces the default placeholder. A file size of 17.0 KB appears beside the Upload photo control. The same avatar is displayed in the widget header, illustrating the profile’s appearance after an image has been chosen.

3. Colours and preview

Green is selected for the background and white for the text, with outlines marking the active swatches. The preview combines these colours with the name, department and avatar. The message area indicates that no welcome message is set, and the bottom bar contains attachment icons and a send button.

4. Continuing setup

The five-step sequence remains above the form with the first stage highlighted. A green Next button below the card indicates how to continue setup. The screenshot captures the state before moving to the next step.

This example shows how entered fields relate to the chat’s appearance. Placing the form beside the preview helps users assess the operator’s presentation before continuing setup.`,
              tj: `Сохтор ва вазифаҳои танзими маълумоти оператор

Экран ҳолати пуршудаи қадами аввали устоди танзими LiveChat-ро нишон медиҳад. Корти чап маълумоти оператор ва аватари интихобшударо дар бар мегирад, виджети рост бошад ҳамон маълумотро нишон медиҳад. Нишонаи «Қадами 1 аз 5» марҳилаи ҷориро муайян мекунад.

1. Ном ва шуъбаи оператор

Майдони ном арзиши «Test» ва майдони «Вазифа / Шуъба» арзиши «test»-ро дорад. Майдони шуъба дар фокус буда, бо чорчӯба ҷудо шудааст. Ҳар ду арзиш дар сарлавҳаи пешнамоиш дида мешаванд ва муқоисаи маълумоти воридшуда бо намуди операторро имкон медиҳанд.

2. Аватари боршуда

Ба ҷойи нишонаи пешфарз тасвири интихобшуда дар шакли доира намоён аст. Дар паҳлуи тугмаи «Бор кардани акс» андозаи файл — 17.0 КБ — нишон дода шудааст. Ҳамон аватар дар сарлавҳаи виджет низ ҷойгир аст ва намуди профилро баъди интихоби тасвир нишон медиҳад.

3. Рангҳо ва пешнамоиш

Барои замина ранги сабз ва барои матн ранги сафед интихоб шудаанд; намунаҳои фаъол бо ҳалқа ҷудо шудаанд. Пешнамоиш ин рангҳоро бо ном, шуъба ва аватар муттаҳид мекунад. Қисми паёмҳо набудани паёми истиқболиро нишон медиҳад ва панели поёнӣ нишонаҳои замима ва тугмаи ирсолро дорад.

4. Идомаи танзим

Дар болои шакл пайдарпайии панҷ қадам бо марҳилаи аввали ҷудошуда мемонад. Тугмаи сабзи «Баъдӣ» дар зери корт идомаи танзимро пешниҳод мекунад. Тасвир ҳолатро пеш аз гузариш ба қадами навбатӣ нишон медиҳад.

Ин намуна робитаи майдонҳои пуршуда ва намуди чатро нишон медиҳад. Ҷойгиршавии шакл дар паҳлуи пешнамоиш барои арзёбии муаррифии оператор пеш аз идомаи танзим кумак мекунад.`,
            },
          },
          {
            "slug": "widget-setup-step-2",
            "title": {
              "ru": "Приветственное сообщение",
              "en": "Welcome message",
              "tj": "Паёми истиқболӣ"
            },
            "imageSrc": "/images/projects/livechat/widget-setup-step-2-full.webp",
            "BannerSrc": "/images/projects/livechat/widget-setup-step-2-full.webp",
            "shortInfo": {
              "ru": "Выбор приветствия с отображением текста в предпросмотре чата",
              "en": "Choose a greeting and see its text in the chat preview",
              "tj": "Интихоби паёми истиқболӣ бо намоиши матн дар пешнамоиши чат"
            },
            "fullInfo": {
              "ru": "Архитектура и функциональность выбора приветствия\n\nВторой шаг мастера LiveChat посвящён сообщению, которое посетитель увидит при открытии чата. Форма выбора и предпросмотр расположены рядом, позволяя оценить текст в контексте виджета.\n\n1. Готовые варианты\n\nВ карточке представлены три шаблона: короткое предложение помощи, приглашение написать вопрос и сообщение об акции. Каждый вариант оформлен отдельным блоком с переключателем. Первый шаблон выбран и выделен зелёной рамкой.\n\n2. Собственный вариант\n\nПункт «Другое» предлагает альтернативу готовым текстам. На снимке он не выбран, поэтому поле для собственного сообщения не показано. Все варианты собраны в одном списке для последовательного выбора.\n\n3. Отображение в чате\n\nСправа выбранное приветствие показано в пузыре сообщения с отметкой времени. Над ним сохранены имя, отдел и аватар оператора. Такое представление помогает оценить длину и переносы текста в узком окне чата.\n\n4. Навигация по шагам\n\nПервый этап отмечен галочкой, второй выделен как текущий. Кнопки «Назад» и «Далее» находятся под карточкой и обозначают переходы между этапами.\n\nЭкран связывает выбор приветствия с его представлением посетителю. Готовые шаблоны упрощают настройку первого сообщения.",
              "en": "Architecture and functionality of greeting selection\n\nThe second LiveChat setup step configures the message visitors see when opening chat. The selection form and preview sit side by side so the text can be assessed within the widget.\n\n1. Preset messages\n\nThree templates offer a brief greeting, an invitation to ask a question and a promotion message. Each occupies a separate block with a radio control. The first template is selected and outlined in green.\n\n2. Custom option\n\nAn Other option provides an alternative to the preset texts. It is not selected in this screenshot, so no custom message field is shown. All choices appear in a single list.\n\n3. Chat presentation\n\nThe selected greeting appears in a message bubble with a timestamp in the preview. The operator name, department and avatar remain above it. This presentation helps assess text length and wrapping in a narrow chat window.\n\n4. Step navigation\n\nThe first stage has a check mark, and the second is highlighted as current. Back and Next controls below the card indicate movement between stages.\n\nThe screen connects greeting selection with the visitor’s view. Preset templates simplify configuration of the first message.",
              "tj": "Сохтор ва вазифаҳои интихоби паёми истиқболӣ\n\nҚадами дуюми танзими LiveChat ба паёме бахшида шудааст, ки меҳмон ҳангоми кушодани чат мебинад. Шакли интихоб ва пешнамоиш дар паҳлуи ҳам ҷойгиранд.\n\n1. Матнҳои тайёр\n\nСе намуна пешниҳод шудаанд: пешниҳоди кӯтоҳи кумак, даъват ба навиштани савол ва паём дар бораи аксия. Ҳар вариант блоки алоҳида бо интихобкунанда дорад. Намунаи аввал интихоб шуда, бо чорчӯбаи сабз ҷудо шудааст.\n\n2. Варианти дигар\n\nБанди «Дигар» роҳи алтернативиро ба матнҳои тайёр пешниҳод мекунад. Дар тасвир он интихоб нашудааст ва майдони матни шахсӣ нишон дода намешавад. Ҳамаи интихобҳо дар як рӯйхат ҷамъ шудаанд.\n\n3. Намоиш дар чат\n\nПаёми интихобшуда дар пешнамоиш бо вақти ирсол дида мешавад. Ном, шуъба ва аватари оператор дар боло мемонанд. Ин намоиш барои арзёбии дарозӣ ва тақсимшавии матн дар равзанаи чат кумак мекунад.\n\n4. Гузариш байни қадамҳо\n\nҚадами аввал бо аломати иҷро ва дуюм ҳамчун қадами ҷорӣ нишон дода шудааст. Тугмаҳои «Қафо» ва «Баъдӣ» дар зери корт ҷойгиранд.\n\nЭкран интихоби паёмро бо намуди он барои меҳмон мепайвандад. Намунаҳои тайёр танзими паёми аввалро осон мекунанд."
            }
          },
          {
            "slug": "widget-setup-step-3",
            "title": {
              "ru": "Информация об аккаунте",
              "en": "Account information",
              "tj": "Маълумоти ҳисоб"
            },
            "imageSrc": "/images/projects/livechat/widget-setup-step-3-full.webp",
            "BannerSrc": "/images/projects/livechat/widget-setup-step-3-full.webp",
            "shortInfo": {
              "ru": "Указание адреса сайта и контактного телефона на третьем шаге настройки",
              "en": "Enter the website address and contact phone at setup step three",
              "tj": "Ворид кардани суроғаи сайт ва телефони тамос дар қадами сеюм"
            },
            "fullInfo": {
              "ru": "Архитектура и функциональность информации об аккаунте\n\nТретий шаг мастера собирает основные сведения о бизнесе. Белая карточка содержит заголовок «Информация об аккаунте», короткое пояснение и два поля.\n\n1. Адрес сайта\n\nПоле «URL сайта» содержит адрес с протоколом HTTPS. Подпись над полем сохраняет назначение данных после заполнения. На снимке используется тестовый адрес.\n\n2. Контактный телефон\n\nНиже расположен номер телефона с международным кодом. Поля сайта и телефона образуют компактную форму без дополнительных разделов. Результат проверки или сохранения данных на экране не показан.\n\n3. Сохранение контекста виджета\n\nСправа остаётся предпросмотр с ранее заданным аватаром, именем, отделом и приветствием. Сведения о бизнесе вводятся рядом с уже оформленным чатом.\n\n4. Продолжение мастера\n\nПервые два шага отмечены как пройденные, третий выделен зелёным контуром. Под формой доступны «Назад» и «Далее».\n\nЭкран выделяет сбор контактных сведений в отдельный короткий этап. Предпросмотр и индикатор прогресса сохраняют связь с общей настройкой виджета.",
              "en": "Architecture and functionality of account information\n\nThe third wizard step collects basic business details. A white card contains an Account information heading, a short explanation and two fields.\n\n1. Website address\n\nThe Website URL field contains an address using HTTPS. Its label remains above the entered value. The screenshot uses a test address.\n\n2. Contact phone\n\nA phone number with an international prefix appears below. The website and phone fields form a compact form without additional sections. No validation or save result is displayed.\n\n3. Widget context\n\nThe preview on the right retains the previously configured avatar, name, department and greeting. Business details are entered beside the configured chat.\n\n4. Wizard navigation\n\nThe first two steps are marked complete, while the third has a green outline. Back and Next controls appear below the form.\n\nThis screen gives contact details their own brief stage. The preview and progress indicator maintain the connection to the wider widget setup.",
              "tj": "Сохтор ва вазифаҳои маълумоти ҳисоб\n\nҚадами сеюми устод маълумоти асосии тиҷоратро ҷамъ мекунад. Корти сафед сарлавҳаи «Маълумоти ҳисоб», шарҳи кӯтоҳ ва ду майдон дорад.\n\n1. Суроғаи сайт\n\nМайдони «URL-и сайт» суроғаеро бо HTTPS дар бар мегирад. Номи майдон дар болои арзиш мемонад. Дар тасвир суроғаи санҷишӣ истифода шудааст.\n\n2. Телефони тамос\n\nДар поён рақами телефон бо рамзи байналмилалӣ ҷойгир аст. Майдонҳои сайт ва телефон шакли паймонро ташкил медиҳанд. Натиҷаи санҷиш ё сабти маълумот нишон дода нашудааст.\n\n3. Пешнамоиши виджет\n\nДар тарафи рост аватар, ном, шуъба ва паёми қаблан интихобшуда нигоҳ дошта шудаанд. Маълумоти тиҷорат дар паҳлуи чати танзимшуда ворид мешавад.\n\n4. Идомаи устод\n\nДу қадами аввал ҳамчун иҷрошуда нишон дода шудаанд ва қадами сеюм ҳалқаи сабз дорад. Дар зери шакл тугмаҳои «Қафо» ва «Баъдӣ» ҷойгиранд.\n\nЭкран маълумоти тамосро ба марҳилаи кӯтоҳи алоҳида ҷудо мекунад. Пешнамоиш ва нишондиҳандаи пешрафт робитаро бо танзими умумии виджет нигоҳ медоранд."
            }
          },
          {
            "slug": "widget-setup-step-4",
            "title": {
              "ru": "Цель использования",
              "en": "Purpose of use",
              "tj": "Мақсади истифода"
            },
            "imageSrc": "/images/projects/livechat/widget-setup-step-4-full.webp",
            "BannerSrc": "/images/projects/livechat/widget-setup-step-4-full.webp",
            "shortInfo": {
              "ru": "Выбор основной задачи бизнеса перед завершением настройки",
              "en": "Choose the main business objective before completing setup",
              "tj": "Интихоби вазифаи асосии тиҷорат пеш аз анҷоми танзим"
            },
            "fullInfo": {
              "ru": "Архитектура и функциональность выбора цели использования\n\nЧетвёртый шаг предлагает выбрать основную задачу, которую пользователь хочет решить с LiveChat. В карточке расположены три варианта с краткими пояснениями.\n\n1. Привлечение лидов\n\nПервый вариант посвящён превращению посетителей сайта в потенциальных клиентов. На снимке его карточка выделена зелёной рамкой.\n\n2. Продажи и клиентский сервис\n\nДва других варианта описывают увеличение продаж и улучшение клиентского сервиса. Пояснения связывают их с отслеживанием сделок, общением и ответами на вопросы клиентов.\n\n3. Предпросмотр чата\n\nСправа сохраняется настроенный виджет с данными оператора и приветствием. Экран показывает выбор цели рядом с текущим оформлением; изменения поведения сервиса по выбранной цели здесь не демонстрируются.\n\n4. Завершение этапа\n\nИндикатор отмечает первые три шага как пройденные и выделяет четвёртый. Под карточкой находятся «Назад» и зелёная кнопка «Завершить».\n\nЭкран помогает обозначить приоритет использования продукта. Краткие пояснения позволяют сравнить задачи перед завершением настройки.",
              "en": "Architecture and functionality of purpose selection\n\nThe fourth step asks users to choose the main task they want to address with LiveChat. Three options with brief explanations appear in the card.\n\n1. Lead generation\n\nThe first option focuses on turning website visitors into prospective customers. Its card has a green outline in the screenshot.\n\n2. Sales and customer service\n\nThe other two options describe increasing sales and improving customer service. Their explanations refer to tracking deals, communicating and answering customer questions.\n\n3. Chat preview\n\nThe configured widget remains on the right with operator details and the greeting. The screen presents the chosen purpose beside the current design; it does not demonstrate changes to service behaviour based on that choice.\n\n4. Completing the stage\n\nThe indicator marks the first three steps complete and highlights the fourth. Back and a green Finish button appear below the card.\n\nThe screen helps identify the intended product priority. Brief explanations make the objectives easy to compare before completing setup.",
              "tj": "Сохтор ва вазифаҳои интихоби мақсад\n\nҚадами чорум интихоби вазифаи асосиро барои истифодаи LiveChat пешниҳод мекунад. Дар корт се вариант бо шарҳҳои кӯтоҳ ҷойгир аст.\n\n1. Ҷалби муштариёни эҳтимолӣ\n\nВарианти аввал ба табдил додани меҳмонони сайт ба муштариёни эҳтимолӣ бахшида шудааст. Дар тасвир ин корт бо чорчӯбаи сабз ҷудо шудааст.\n\n2. Фурӯш ва хизматрасонӣ\n\nДу варианти дигар афзоиши фурӯш ва беҳтар кардани хизматрасонӣ ба муштариёнро тавсиф мекунанд. Шарҳҳо пайгирии муомилаҳо, муошират ва ҷавоб ба саволҳоро зикр мекунанд.\n\n3. Пешнамоиши чат\n\nВиджети танзимшуда бо маълумоти оператор ва паёми истиқболӣ дар рост мемонад. Экран мақсадро дар паҳлуи тарҳи ҷорӣ нишон медиҳад; тағйири рафтори хизматрасонӣ аз рӯйи интихоб дар ин ҷо намоиш дода намешавад.\n\n4. Анҷоми марҳила\n\nСе қадами аввал иҷрошудаанд ва чорум ҳамчун ҷорӣ ҷудо шудааст. Тугмаҳои «Қафо» ва сабзи «Анҷом додан» дар зери корт ҷойгиранд.\n\nЭкран барои муайян кардани афзалияти истифодаи маҳсулот кумак мекунад. Шарҳҳои кӯтоҳ муқоисаи вазифаҳоро пеш аз анҷоми танзим осон мекунанд."
            }
          },
          {
            "slug": "widget-setup-step-5",
            "title": {
              "ru": "Завершение настройки и установка",
              "en": "Setup completion and installation",
              "tj": "Анҷоми танзим ва насб"
            },
            "imageSrc": "/images/projects/livechat/widget-setup-step-5-full.webp",
            "BannerSrc": "/images/projects/livechat/widget-setup-step-5-full.webp",
            "shortInfo": {
              "ru": "Подтверждение настройки, код установки виджета и переход в кабинет",
              "en": "Setup confirmation, widget installation code and access to the account",
              "tj": "Тасдиқи танзим, рамзи насби виджет ва гузариш ба кабинет"
            },
            "fullInfo": {
              "ru": "Архитектура и функциональность завершения настройки\n\nПятый шаг показывает итог мастера: «Всё готово!». Текст сообщает, что аккаунт настроен, и предлагает установить виджет на сайт. Центральная карточка объединяет подтверждение и инструкцию установки.\n\n1. Статус завершения\n\nПервые четыре шага отмечены галочками, пятый выделен как текущий. Иконка над заголовком визуально подчёркивает успешное завершение настройки аккаунта.\n\n2. Код подключения\n\nВ тёмном блоке HTML представлен фрагмент подключения скрипта и кнопка «Копировать». Инструкция предлагает вставить код перед закрывающим тегом head на каждой странице сайта. Часть адреса на снимке скрыта и не раскрывается в описании.\n\n3. Действия после вставки\n\nСледующая подсказка предлагает сохранить страницу и обновить сайт. Она поясняет, что виджет появится автоматически, а первая загрузка скрипта может занять несколько секунд. Это инструкция интерфейса, а не подтверждение фактической установки на сайт.\n\n4. Переход в кабинет\n\nЗелёная кнопка «Перейти в кабинет» расположена под карточкой. Она завершает последовательность мастера и предлагает продолжить работу в основном интерфейсе.\n\nЭкран отделяет готовность аккаунта от установки виджета. Код, пояснения и переход в кабинет собраны в последовательный сценарий завершения.",
              "en": "Architecture and functionality of setup completion\n\nThe fifth step presents the wizard’s result: All done. The text states that the account is configured and invites users to install the widget on their website. A central card combines confirmation with installation guidance.\n\n1. Completion status\n\nThe first four steps have check marks and the fifth is current. An icon above the heading visually reinforces completion of account setup.\n\n2. Integration code\n\nA dark HTML block contains a script snippet and a Copy button. The instruction asks users to insert the code before the closing head tag on each website page. Part of the address is obscured in the screenshot and is not reproduced here.\n\n3. After inserting the code\n\nThe next instruction asks users to save the page and refresh the website. It explains that the widget will appear automatically and the initial script load may take a few seconds. This is interface guidance, not confirmation of an actual website installation.\n\n4. Account access\n\nA green Go to account button sits below the card. It ends the wizard sequence and offers a route to continue in the main interface.\n\nThe screen separates account readiness from widget installation. Code, guidance and account access form a clear completion sequence.",
              "tj": "Сохтор ва вазифаҳои анҷоми танзим\n\nҚадами панҷум натиҷаи устодро бо паёми «Ҳама чиз омода аст!» нишон медиҳад. Матн омода будани ҳисобро хабар дода, насби виджетро ба сайт пешниҳод мекунад. Корти марказӣ тасдиқ ва дастури насбро муттаҳид месозад.\n\n1. Ҳолати анҷом\n\nЧор қадами аввал аломати иҷро доранд ва панҷум қадами ҷорӣ аст. Нишонаи болои сарлавҳа анҷоми танзими ҳисобро таъкид мекунад.\n\n2. Рамзи пайвасткунӣ\n\nБлоки торики HTML порчаи рамзи скрипт ва тугмаи «Нусхабардорӣ»-ро дорад. Дастур ҷойгир кардани рамзро пеш аз теги пӯшидаи head дар ҳар саҳифаи сайт пешниҳод мекунад. Қисме аз суроға дар тасвир пинҳон аст ва дар ин тавсиф оварда намешавад.\n\n3. Амалҳо баъди ҷойгиркунӣ\n\nДастури навбатӣ сабт кардани саҳифа ва навсозии сайтро пешниҳод мекунад. Он мефаҳмонад, ки виджет худкор пайдо мешавад ва боркунии аввал метавонад чанд сония давом кунад. Ин дастури интерфейс аст, на тасдиқи насби воқеӣ ба сайт.\n\n4. Гузариш ба кабинет\n\nТугмаи сабзи «Гузариш ба кабинет» дар зери корт ҷойгир аст. Он пайдарпайии устодро анҷом дода, идомаи корро дар интерфейси асосӣ пешниҳод мекунад.\n\nЭкран омодагии ҳисобро аз насби виджет ҷудо мекунад. Рамз, дастур ва гузариш ба кабинет раванди фаҳмои анҷомро ташкил медиҳанд."
            }
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
    projectComponents: [
      {
        tabName: { ru: "Веб-платформа", en: "Web Platform", tj: "Веб-платформа" },
        items: [
          {
            slug: "footer-page",
            title: {
              ru: "Подвал сайта",
              en: "Footer",
              tj: "Поёни сомона",
            },
            imageSrc: "/images/projects/navo/footer-page.png",
            BannerSrc: "/images/projects/navo/footer-page.png",
            shortInfo: {
              ru: "Обзор раздела «Подвал сайта»",
              en: "Overview of the «Footer» section",
              tj: "Баррасии бахши «Поёни сомона»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Подвал сайта». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Footer» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Поёни сомона»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "header-page",
            title: {
              ru: "Шапка сайта",
              en: "Header",
              tj: "Сарлавҳаи сомона",
            },
            imageSrc: "/images/projects/navo/header-page.png",
            BannerSrc: "/images/projects/navo/header-page.png",
            shortInfo: {
              ru: "Обзор раздела «Шапка сайта»",
              en: "Overview of the «Header» section",
              tj: "Баррасии бахши «Сарлавҳаи сомона»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Шапка сайта». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Header» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Сарлавҳаи сомона»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "main-categories-page",
            title: {
              ru: "Главная: Категории",
              en: "Main: Categories",
              tj: "Асосӣ: Категорияҳо",
            },
            imageSrc: "/images/projects/navo/main-categories-page.png",
            BannerSrc: "/images/projects/navo/main-categories-page.png",
            shortInfo: {
              ru: "Обзор раздела «Главная: Категории»",
              en: "Overview of the «Main: Categories» section",
              tj: "Баррасии бахши «Асосӣ: Категорияҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Главная: Категории». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Main: Categories» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Асосӣ: Категорияҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "main-contacts-page",
            title: {
              ru: "Главная: Контакты",
              en: "Main: Contacts",
              tj: "Асосӣ: Тамосҳо",
            },
            imageSrc: "/images/projects/navo/main-contacts-page.png",
            BannerSrc: "/images/projects/navo/main-contacts-page.png",
            shortInfo: {
              ru: "Обзор раздела «Главная: Контакты»",
              en: "Overview of the «Main: Contacts» section",
              tj: "Баррасии бахши «Асосӣ: Тамосҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Главная: Контакты». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Main: Contacts» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Асосӣ: Тамосҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "main-media-pictupe-page",
            title: {
              ru: "Главная: Фотогалерея",
              en: "Main: Photo Gallery",
              tj: "Асосӣ: Аксҳо",
            },
            imageSrc: "/images/projects/navo/main-media-pictupe-page.png",
            BannerSrc: "/images/projects/navo/main-media-pictupe-page.png",
            shortInfo: {
              ru: "Обзор раздела «Главная: Фотогалерея»",
              en: "Overview of the «Main: Photo Gallery» section",
              tj: "Баррасии бахши «Асосӣ: Аксҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Главная: Фотогалерея». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Main: Photo Gallery» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Асосӣ: Аксҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "main-media-video-page",
            title: {
              ru: "Главная: Видеогалерея",
              en: "Main: Video Gallery",
              tj: "Асосӣ: Видеоҳо",
            },
            imageSrc: "/images/projects/navo/main-media-video-page.png",
            BannerSrc: "/images/projects/navo/main-media-video-page.png",
            shortInfo: {
              ru: "Обзор раздела «Главная: Видеогалерея»",
              en: "Overview of the «Main: Video Gallery» section",
              tj: "Баррасии бахши «Асосӣ: Видеоҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Главная: Видеогалерея». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Main: Video Gallery» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Асосӣ: Видеоҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "main-music-page",
            title: {
              ru: "Главная: Музыка",
              en: "Main: Music",
              tj: "Асосӣ: Мусиқӣ",
            },
            imageSrc: "/images/projects/navo/main-music-page.png",
            BannerSrc: "/images/projects/navo/main-music-page.png",
            shortInfo: {
              ru: "Обзор раздела «Главная: Музыка»",
              en: "Overview of the «Main: Music» section",
              tj: "Баррасии бахши «Асосӣ: Мусиқӣ»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Главная: Музыка». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Main: Music» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Асосӣ: Мусиқӣ»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "main-podcasts-page",
            title: {
              ru: "Главная: Подкасты",
              en: "Main: Podcasts",
              tj: "Асосӣ: Подкастҳо",
            },
            imageSrc: "/images/projects/navo/main-podcasts-page.png",
            BannerSrc: "/images/projects/navo/main-podcasts-page.png",
            shortInfo: {
              ru: "Обзор раздела «Главная: Подкасты»",
              en: "Overview of the «Main: Podcasts» section",
              tj: "Баррасии бахши «Асосӣ: Подкастҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Главная: Подкасты». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Main: Podcasts» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Асосӣ: Подкастҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "main-programs-page",
            title: {
              ru: "Главная: Программы",
              en: "Main: Programs",
              tj: "Асосӣ: Барномаҳо",
            },
            imageSrc: "/images/projects/navo/main-programs-page.png",
            BannerSrc: "/images/projects/navo/main-programs-page.png",
            shortInfo: {
              ru: "Обзор раздела «Главная: Программы»",
              en: "Overview of the «Main: Programs» section",
              tj: "Баррасии бахши «Асосӣ: Барномаҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Главная: Программы». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Main: Programs» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Асосӣ: Барномаҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "media-page",
            title: {
              ru: "Медиа",
              en: "Media",
              tj: "Медиа",
            },
            imageSrc: "/images/projects/navo/media-page.png",
            BannerSrc: "/images/projects/navo/media-page.png",
            shortInfo: {
              ru: "Обзор раздела «Медиа»",
              en: "Overview of the «Media» section",
              tj: "Баррасии бахши «Медиа»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Медиа». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Media» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Медиа»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "news-page",
            title: {
              ru: "Новости",
              en: "News",
              tj: "Хабарҳо",
            },
            imageSrc: "/images/projects/navo/news-page.png",
            BannerSrc: "/images/projects/navo/news-page.png",
            shortInfo: {
              ru: "Обзор раздела «Новости»",
              en: "Overview of the «News» section",
              tj: "Баррасии бахши «Хабарҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Новости». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «News» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Хабарҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "peam-page",
            title: {
              ru: "Послания",
              en: "Messages",
              tj: "Паёмҳо",
            },
            imageSrc: "/images/projects/navo/peam-page.png",
            BannerSrc: "/images/projects/navo/peam-page.png",
            shortInfo: {
              ru: "Обзор раздела «Послания»",
              en: "Overview of the «Messages» section",
              tj: "Баррасии бахши «Паёмҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Послания». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Messages» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Паёмҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "podcasts-page",
            title: {
              ru: "Подкасты",
              en: "Podcasts",
              tj: "Подкастҳо",
            },
            imageSrc: "/images/projects/navo/podcasts-page.png",
            BannerSrc: "/images/projects/navo/podcasts-page.png",
            shortInfo: {
              ru: "Обзор раздела «Подкасты»",
              en: "Overview of the «Podcasts» section",
              tj: "Баррасии бахши «Подкастҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Подкасты». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Podcasts» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Подкастҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
          {
            slug: "programs-page",
            title: {
              ru: "Программы",
              en: "Programs",
              tj: "Барномаҳо",
            },
            imageSrc: "/images/projects/navo/programs-page.png",
            BannerSrc: "/images/projects/navo/programs-page.png",
            shortInfo: {
              ru: "Обзор раздела «Программы»",
              en: "Overview of the «Programs» section",
              tj: "Баррасии бахши «Барномаҳо»",
            },
            fullInfo: {
              ru: "Этот раздел демонстрирует функционал и визуальное оформление страницы «Программы». Дизайн спроектирован с учетом современных стандартов пользовательского опыта (UX) и интерфейса (UI), обеспечивая удобную навигацию и доступ к контенту.",
              en: "This section showcases the functionality and visual design of the «Programs» page. The design is built according to modern user experience (UX) and interface (UI) standards, ensuring convenient navigation and content access.",
              tj: "Ин бахш вазифаҳо ва ороиши визуалии саҳифаи «Барномаҳо»-ро намоиш медиҳад. Тарроҳӣ бо назардошти стандартҳои муосири таҷрибаи корбар (UX) ва интерфейс (UI) таҳия шудааст ва роҳнамоии қулай ва дастрасиро ба мундариҷа таъмин мекунад.",
            },
          },
        ],
      },
    ],
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
        tabName: {
          ru: "Веб-платформа",
          en: "Web Platform",
          tj: "Веб-платформа",
        },
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
