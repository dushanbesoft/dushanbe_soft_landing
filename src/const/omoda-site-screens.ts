import type { ProductSiteItem } from "./product-site";

type Screen = [string, [string, string, string], [string, string, string]];
type Items = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"];

// Omoda.tj ("Довталаб ИИ") 2026 site screenshots, 1700x1080. Description format: "intro|Heading\n\nText|Heading\n\nText".
const siteScreens: Screen[] = [
  [
    "hero",
    ["Главный экран", "Hero section", "Экрани асосӣ"],
    [
      "Первый экран omoda.tj — платформы «Довталаб ИИ» для подготовки к ИМД 2026–2027.|Предложение\n\nЗаголовок «Подготовься к ИМД и поступи туда, куда мечтаешь» и подзаголовок: тысячи вопросов в формате экзамена, ИИ-репетитор, который объясняет каждую ошибку, дуэли и рейтинг, на русском и таджикском.|Спроси ИИ\n\nСправа окно «Спроси ИИ — прямо сейчас» с готовыми вопросами («Реши: 2x + 5 = 17», «Что такое фотосинтез?») и полем для своего вопроса без регистрации.|Старт\n\nКнопка «Начать бесплатно в браузере», ссылки на Google Play и App Store, переключатель RU/TJ и анонс новых функций в верхней плашке.",
      "The first screen of omoda.tj, the \"Dovtalab AI\" platform for preparing for the 2026–2027 IMD exam.|Proposition\n\nThe headline \"Prepare for the IMD and get in where you dream\" and the subtitle: thousands of exam-format questions, an AI tutor that explains every mistake, duels and a leaderboard, in Russian and Tajik.|Ask AI\n\nOn the right, the \"Ask AI right now\" window offers ready questions (\"Solve: 2x + 5 = 17\", \"What is photosynthesis?\") and a field for your own question without registration.|Getting started\n\nA \"Start free in the browser\" button, Google Play and App Store links, the RU/TJ switch and a top bar announcing new features.",
      "Экрани аввали omoda.tj — платформаи «Довталаб ИИ» барои омодагӣ ба ИМД 2026–2027.|Пешниҳод\n\nСарлавҳаи «Ба ИМД омода шав ва ба он ҷое дохил шав, ки орзу дорӣ» ва зерсарлавҳа: ҳазорҳо савол дар формати имтиҳон, ИИ-репетитор, ки ҳар хаторо мефаҳмонад, дуэлҳо ва рейтинг, бо забонҳои русӣ ва тоҷикӣ.|Аз ИИ бипурс\n\nДар тарафи рост равзанаи «Аз ИИ бипурс — ҳозир» бо саволҳои тайёр («Ҳал кун: 2x + 5 = 17», «Фотосинтез чист?») ва майдон барои саволи худ бе бақайдгирӣ.|Оғоз\n\nТугмаи «Ройгон дар браузер оғоз кун», пайвандҳо ба Google Play ва App Store, интихоби RU/TJ ва эълони имкониятҳои нав дар навори боло.",
    ],
  ],
  [
    "ai-tutor",
    ["ИИ-репетитор", "AI tutor", "ИИ-репетитор"],
    [
      "Раздел об искусственном интеллекте, который объясняет решения.|Как работает\n\nОшибся в задаче — нажми «Объяснить решение»: ИИ разберёт её по шагам и ответит на твой вопрос. Бесплатно каждый день, в Premium — без ограничений.|Возможности\n\nОбъяснение по шагам, ответы на «почему?», работа на русском и таджикском языках и понимание рисунков и формул из заданий.|Пример\n\nСправа карточка вопроса по биологии «Какой органоид клетки синтезирует АТФ?» с неверным и верным ответом и кнопкой «Объяснить решение (ИИ)».",
      "The section about the AI that explains solutions.|How it works\n\nMade a mistake? Press \"Explain the solution\": the AI breaks it down step by step and answers your question. Free every day, unlimited in Premium.|Capabilities\n\nStep-by-step explanations, answers to \"why?\", support for Russian and Tajik and understanding of pictures and formulas in tasks.|Example\n\nOn the right, a biology question card, \"Which cell organelle synthesises ATP?\", shows a wrong and a right answer and an \"Explain the solution (AI)\" button.",
      "Бахш дар бораи зеҳни сунъӣ, ки ҳалли масъалаҳоро мефаҳмонад.|Чӣ тавр кор мекунад\n\nДар масъала хато кардӣ — «Шарҳи ҳал»-ро пахш кун: ИИ онро қадам ба қадам таҳлил мекунад ва ба саволат ҷавоб медиҳад. Ҳар рӯз ройгон, дар Premium — бе маҳдудият.|Имкониятҳо\n\nШарҳ қадам ба қадам, ҷавоб ба «чаро?», кор бо забонҳои русӣ ва тоҷикӣ ва фаҳмидани расмҳо ва формулаҳо аз супоришҳо.|Намуна\n\nДар тарафи рост корти саволи биология «Кадом органоиди ҳуҷайра АТФ синтез мекунад?» бо ҷавоби нодуруст ва дуруст ва тугмаи «Шарҳи ҳал (ИИ)».",
    ],
  ],
  [
    "gamification",
    ["Учёба как игра", "Learning as a game", "Таҳсил ҳамчун бозӣ"],
    [
      "Геймификация превращает подготовку к ИМД в игру, в которую хочется играть каждый день.|Механики\n\nУровни и XP за каждую задачу, серия дней, дуэли с друзьями на 10 вопросов, рейтинг недели среди школы и района, ежедневный вызов с бонусными очками и достижения за серии и победы.|Рейтинг\n\nПод карточками пример рейтинга недели с местами, аватарами и очками XP участников.",
      "Gamification turns IMD preparation into a game you want to play every day.|Mechanics\n\nLevels and XP for every task, day streaks, 10-question duels with friends, a weekly leaderboard across the school and district, a daily challenge with bonus points and achievements for streaks and wins.|Leaderboard\n\nBelow the cards is an example of the weekly leaderboard with places, avatars and the participants' XP.",
      "Геймификатсия омодагӣ ба ИМД-ро ба бозие табдил медиҳад, ки ҳар рӯз бозӣ кардан мехоҳӣ.|Механикаҳо\n\nСатҳҳо ва XP барои ҳар масъала, силсилаи рӯзҳо, дуэлҳо бо дӯстон аз 10 савол, рейтинги ҳафта дар байни мактаб ва ноҳия, даъвати ҳаррӯза бо холҳои бонусӣ ва дастовардҳо барои силсилаҳо ва ғалабаҳо.|Рейтинг\n\nДар зери кортҳо намунаи рейтинги ҳафта бо ҷойҳо, аватарҳо ва холҳои XP-и иштирокчиён.",
    ],
  ],
  [
    "features",
    ["Возможности", "Features", "Имкониятҳо"],
    [
      "Блок «Не просто тесты. Умная подготовка» перечисляет основные функции.|Экзамен\n\nТесты в формате ИМД с частями А и Б и всеми типами заданий, пробный экзамен с реалистичным таймером и условиями, как на настоящем тестировании.|Разбор\n\nИИ-разбор решения по шагам, даже если ответ правильный, и работа над ошибками: приложение запоминает слабые темы и предлагает их повторить.|Прогресс\n\nЗанятия в браузере, на телефоне или компьютере с сохранением прогресса в аккаунте, динамика и прогноз балла по каждому предмету.",
      "The \"Not just tests. Smart preparation\" block lists the main features.|Exam\n\nIMD-format tests with parts A and B and every task type, and a mock exam with a realistic timer and conditions like the real test.|Review\n\nStep-by-step AI review of a solution, even when the answer is right, and work on mistakes: the app remembers weak topics and offers to repeat them.|Progress\n\nPractice in the browser, on a phone or a computer with progress saved to the account, plus trends and a score forecast for each subject.",
      "Бахши «На танҳо тестҳо. Омодагии оқилона» вазифаҳои асосиро номбар мекунад.|Имтиҳон\n\nТестҳо дар формати ИМД бо қисмҳои А ва Б ва ҳамаи намудҳои супоришҳо, имтиҳони озмоишӣ бо таймер ва шароити воқеӣ, мисли тестсупории аслӣ.|Таҳлил\n\nТаҳлили ҳал аз ҷониби ИИ қадам ба қадам, ҳатто агар ҷавоб дуруст бошад, ва кор бо хатоҳо: барнома мавзӯъҳои заифро дар хотир нигоҳ медорад ва такрор карданро пешниҳод мекунад.|Пешрафт\n\nМашғулият дар браузер, телефон ё компютер бо нигоҳ доштани пешрафт дар аккаунт, динамика ва пешгӯии хол аз ҳар фан.",
    ],
  ],
  [
    "clusters",
    ["Кластеры и первые шаги", "Clusters and first steps", "Кластерҳо ва қадамҳои аввал"],
    [
      "Выбор предметов и короткая инструкция, как начать.|Кластеры\n\nРаздел «Готовься по своему кластеру» показывает 9 предметов ИМД: таджикский и русский языки, математика, физика, химия, биология, история, география и английский. Программа подстраивается под цель и показывает прогресс по каждой теме.|Три шага\n\nОткрыть «Довталаб ИИ» в Google Play или в браузере на app.omoda.tj, выбрать кластер и предметы и тренироваться, следя за прогрессом.",
      "Choosing subjects and a short guide on how to start.|Clusters\n\nThe \"Prepare for your cluster\" section shows the 9 IMD subjects: Tajik and Russian, mathematics, physics, chemistry, biology, history, geography and English. The programme adapts to the goal and shows progress in each topic.|Three steps\n\nOpen \"Dovtalab AI\" on Google Play or in the browser at app.omoda.tj, choose a cluster and subjects, and practise while tracking progress.",
      "Интихоби фанҳо ва дастури кӯтоҳ, ки чӣ тавр оғоз кардан мумкин аст.|Кластерҳо\n\nБахши «Аз рӯи кластери худ омода шав» 9 фанни ИМД-ро нишон медиҳад: забонҳои тоҷикӣ ва русӣ, математика, физика, химия, биология, таърих, география ва англисӣ. Барнома ба ҳадаф мутобиқ мешавад ва пешрафтро аз ҳар мавзӯъ нишон медиҳад.|Се қадам\n\n«Довталаб ИИ»-ро дар Google Play ё дар браузер дар app.omoda.tj кушодан, кластер ва фанҳоро интихоб кардан ва бо назорати пешрафт машқ кардан.",
    ],
  ],
  [
    "app",
    ["Мобильное приложение", "Mobile app", "Барномаи мобилӣ"],
    [
      "Блок «Спокойный интерфейс. Серьёзный результат» показывает приложение изнутри.|Экраны\n\nЧетыре экрана телефона: прогресс по предметам, задание как на экзамене, понятный разбор ответа и результат пробного экзамена с работой над ошибками.|Дизайн\n\nВсё важное — перед глазами, ничего не отвлекает от подготовки: крупная типографика, мягкие цвета и понятные состояния правильного и неправильного ответа.",
      "The \"Calm interface. Serious results\" block shows the app from the inside.|Screens\n\nFour phone screens: progress by subject, an exam-style task, a clear answer review and a mock exam result with work on mistakes.|Design\n\nEverything important is in view and nothing distracts from preparation: large type, soft colours and clear states for right and wrong answers.",
      "Бахши «Интерфейси ором. Натиҷаи ҷиддӣ» барномаро аз дарун нишон медиҳад.|Экранҳо\n\nЧор экрани телефон: пешрафт аз рӯи фанҳо, супориш мисли имтиҳон, таҳлили фаҳмои ҷавоб ва натиҷаи имтиҳони озмоишӣ бо кор бо хатоҳо.|Дизайн\n\nҲама чизи муҳим дар пеши назар, ҳеҷ чиз аз омодагӣ парешон намекунад: ҳарфҳои калон, рангҳои мулоим ва ҳолатҳои фаҳмои ҷавоби дуруст ва нодуруст.",
    ],
  ],
  [
    "pricing",
    ["Тарифы", "Pricing", "Тарифҳо"],
    [
      "Раздел «Выбери свой формат подготовки» с тремя тарифами.|Бесплатно\n\n0 сомони: ежедневные тренировочные тесты, ограниченное число полных пробных экзаменов, базовые результаты и реклама между тестами.|Довталаб Premium\n\n10 сомони в месяц, 25 за 3 месяца, 45 за 6 и 79 за 12 месяцев: неограниченные тесты, полные пробные экзамены, подробный разбор ошибок, статистика и история результатов без рекламы. Оплата через Алиф.|Для школ\n\nТариф для школ и курсов по запросу: кабинет преподавателя, прогресс каждого ученика и оплата за группу.",
      "The \"Choose your preparation format\" section with three plans.|Free\n\n0 somoni: daily practice tests, a limited number of full mock exams, basic results and ads between tests.|Dovtalab Premium\n\n10 somoni a month, 25 for 3 months, 45 for 6 and 79 for 12 months: unlimited tests, full mock exams, detailed error reviews, statistics and result history with no ads. Payment via Alif.|For schools\n\nA plan for schools and courses on request: a teacher's cabinet, every student's progress and payment per group.",
      "Бахши «Формати омодагии худро интихоб кун» бо се тариф.|Ройгон\n\n0 сомонӣ: тестҳои машқии ҳаррӯза, шумораи маҳдуди имтиҳонҳои пурраи озмоишӣ, натиҷаҳои асосӣ ва реклама байни тестҳо.|Довталаб Premium\n\n10 сомонӣ дар як моҳ, 25 барои 3 моҳ, 45 барои 6 ва 79 барои 12 моҳ: тестҳои бемаҳдуд, имтиҳонҳои пурраи озмоишӣ, таҳлили муфассали хатоҳо, омор ва таърихи натиҷаҳо бе реклама. Пардохт тавассути Алиф.|Барои мактабҳо\n\nТариф барои мактабҳо ва курсҳо бо дархост: кабинети омӯзгор, пешрафти ҳар хонанда ва пардохт барои гурӯҳ.",
    ],
  ],
  [
    "schools",
    ["Для школ и учебных центров", "For schools and learning centres", "Барои мактабҳо ва марказҳои таълимӣ"],
    [
      "B2B-раздел «Следите за прогрессом каждого ученика».|Кабинет преподавателя\n\nСлева макет панели: средний балл группы, число активных учеников и список с прогрессом и слабыми темами каждого.|Возможности\n\nЕдиный кабинет преподавателя, задания и контроль активности, слабые темы каждого ученика и выгодная оплата за группу.|Заявка\n\nФорма с именем, названием школы или курса и телефоном отправляет заявку на подключение.",
      "The B2B section \"Track every student's progress\".|Teacher's cabinet\n\nOn the left, a panel mock-up shows the group's average score, the number of active students and a list with each student's progress and weak topics.|Capabilities\n\nA single teacher's cabinet, assignments and activity tracking, each student's weak topics and favourable payment per group.|Request\n\nA form with a name, school or course name and phone number sends a connection request.",
      "Бахши B2B «Пешрафти ҳар хонандаро пайгирӣ кунед».|Кабинети омӯзгор\n\nДар тарафи чап макети панел: холи миёнаи гурӯҳ, шумораи хонандагони фаъол ва рӯйхат бо пешрафт ва мавзӯъҳои заифи ҳар кадом.|Имкониятҳо\n\nКабинети ягонаи омӯзгор, супоришҳо ва назорати фаъолият, мавзӯъҳои заифи ҳар хонанда ва пардохти фоиданок барои гурӯҳ.|Ариза\n\nШакл бо ном, номи мактаб ё курс ва телефон аризаи пайвастшавиро мефиристад.",
    ],
  ],
  [
    "web-app",
    ["Веб-приложение", "Web app", "Барномаи веб"],
    [
      "Вход в веб-версию «Довталаб ИИ» на app.omoda.tj — заниматься можно без установки.|Вход и регистрация\n\nВкладки «Вход» и «Регистрация», вход по email и паролю и восстановление пароля.|Без регистрации\n\nКнопка «Продолжить без регистрации» позволяет сразу начать тесты, а прогресс сохранится после создания аккаунта. Интерфейс доступен на русском и таджикском.",
      "The login to the \"Dovtalab AI\" web version at app.omoda.tj, where you can practise without installing anything.|Login and sign-up\n\nLogin and Sign-up tabs, email and password login and password recovery.|Without registration\n\nA \"Continue without registration\" button lets you start tests right away, and progress is kept once an account is created. The interface is available in Russian and Tajik.",
      "Воридшавӣ ба версияи веби «Довталаб ИИ» дар app.omoda.tj — бе насб машқ кардан мумкин аст.|Воридшавӣ ва бақайдгирӣ\n\nВарақаҳои «Воридшавӣ» ва «Бақайдгирӣ», воридшавӣ бо email ва парол ва барқарор кардани парол.|Бе бақайдгирӣ\n\nТугмаи «Бе бақайдгирӣ идома додан» имкон медиҳад, ки фавран тестҳоро оғоз кунед ва пешрафт пас аз сохтани аккаунт нигоҳ дошта мешавад. Интерфейс бо забонҳои русӣ ва тоҷикӣ дастрас аст.",
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
    const imageSrc = `/images/projects/omodatj/${slug}-1700.webp`;
    return { slug, title, imageSrc, BannerSrc: imageSrc, shortInfo, fullInfo };
  });

export const omodaSiteScreens: Items = toItems(siteScreens);
