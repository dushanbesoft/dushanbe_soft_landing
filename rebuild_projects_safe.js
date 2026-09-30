const fs = require('fs');

const tsxPath = 'src/const/product-site.tsx';
let tsx = fs.readFileSync(tsxPath, 'utf8');

// Find where mirel, royalbaby, and traveltours objects start and end. 
const mirelIndex = tsx.indexOf('slug: "mirel"');
if (mirelIndex !== -1) {
    let startIndex = tsx.lastIndexOf('{', mirelIndex);
    let precedingComma = tsx.lastIndexOf(',', startIndex);
    if (precedingComma !== -1 && tsx.substring(precedingComma, startIndex).trim() === '') {
        startIndex = precedingComma;
    }
    const endOfArray = tsx.lastIndexOf(']');
    if (startIndex !== -1 && endOfArray !== -1) {
        tsx = tsx.substring(0, startIndex) + '\n' + tsx.substring(endOfArray);
    }
}

// Do the same for royalbaby and traveltours if they exist before mirel
const rbIndex = tsx.indexOf('slug: "royalbaby"');
if (rbIndex !== -1) {
    let startIndex = tsx.lastIndexOf('{', rbIndex);
    let precedingComma = tsx.lastIndexOf(',', startIndex);
    if (precedingComma !== -1 && tsx.substring(precedingComma, startIndex).trim() === '') {
        startIndex = precedingComma;
    }
    const endOfArray = tsx.lastIndexOf(']');
    if (startIndex !== -1 && endOfArray !== -1) {
        tsx = tsx.substring(0, startIndex) + '\n' + tsx.substring(endOfArray);
    }
}

const ttIndex = tsx.indexOf('slug: "traveltours"');
if (ttIndex !== -1) {
    let startIndex = tsx.lastIndexOf('{', ttIndex);
    let precedingComma = tsx.lastIndexOf(',', startIndex);
    if (precedingComma !== -1 && tsx.substring(precedingComma, startIndex).trim() === '') {
        startIndex = precedingComma;
    }
    const endOfArray = tsx.lastIndexOf(']');
    if (startIndex !== -1 && endOfArray !== -1) {
        tsx = tsx.substring(0, startIndex) + '\n' + tsx.substring(endOfArray);
    }
}

const newMirelImages = {
  admin: [
    "/images/projects/mirel/admin/login-page.png",
    "/images/projects/mirel/admin/dashboard-applications-add-page.png",
    "/images/projects/mirel/admin/dashboard-applications-page.png",
    "/images/projects/mirel/admin/dashboard-articles-creation-page.png",
    "/images/projects/mirel/admin/dashboard-articles-page.png",
    "/images/projects/mirel/admin/dashboard-awards-and-certificates-page.png",
    "/images/projects/mirel/admin/dashboard-clients-page.png",
    "/images/projects/mirel/admin/dashboard-clients-were-helped-page.png",
    "/images/projects/mirel/admin/dashboard-dark-backdrop-page.png",
    "/images/projects/mirel/admin/dashboard-letters-of-gratitude-page.png",
    "/images/projects/mirel/admin/dashboard-projects-add-page.png",
    "/images/projects/mirel/admin/dashboard-projects-company-add-page.png",
    "/images/projects/mirel/admin/dashboard-projects-company-page.png",
    "/images/projects/mirel/admin/dashboard-projects-galery-add-page.png",
    "/images/projects/mirel/admin/dashboard-projects-galery-page.png",
    "/images/projects/mirel/admin/dashboard-projects-object-type-page.png",
    "/images/projects/mirel/admin/dashboard-projects-projects-page.png",
    "/images/projects/mirel/admin/dashboard-projects-type-of-solution-page.png",
    "/images/projects/mirel/admin/dashboard-projects-year-of-implementation-page.png",
    "/images/projects/mirel/admin/dashboard-services-page.png",
    "/images/projects/mirel/admin/dashboard-settings-page.png",
    "/images/projects/mirel/admin/dashboard-staff-add-page.png",
    "/images/projects/mirel/admin/dashboard-staff-departments-add-page.png",
    "/images/projects/mirel/admin/dashboard-staff-departments-page.png",
    "/images/projects/mirel/admin/dashboard-staff-page.png"
  ],
  web: [
    "/images/projects/mirel/web/lending-header-page.png",
    "/images/projects/mirel/web/lending-offer-page.png",
    "/images/projects/mirel/web/lending-our-team-page.png",
    "/images/projects/mirel/web/projects-page.png",
    "/images/projects/mirel/web/objects-page.png",
    "/images/projects/mirel/web/lending-galery-page.png",
    "/images/projects/mirel/web/lending-how-order-process-go-page.png",
    "/images/projects/mirel/web/lending-clients-page.png",
    "/images/projects/mirel/web/lending-companies-trust-page.png",
    "/images/projects/mirel/web/lending-letters-of-gratitude-page.png",
    "/images/projects/mirel/web/lending-rewards-page.png",
    "/images/projects/mirel/web/articles-page.png",
    "/images/projects/mirel/web/request-page.png",
    "/images/projects/mirel/web/lending-news-footer-page.png"
  ]
};

const newRoyalBabyImages = {
  web: [
    "/images/projects/royalbaby/web/lending-header-page.png",
    "/images/projects/royalbaby/web/lending-how-to-participate-page.png",
    "/images/projects/royalbaby/web/lending-products-page.png",
    "/images/projects/royalbaby/web/lending-win-prizes-page.png",
    "/images/projects/royalbaby/web/lending-winners-зфпу.png",
    "/images/projects/royalbaby/web/lending-questions-and-answers-page.png",
    "/images/projects/royalbaby/web/lending-login-page.png",
    "/images/projects/royalbaby/web/lending-footer-page.png"
  ],
  bot: [
    "/images/projects/royalbaby/bot/bot-start-page.jpg",
    "/images/projects/royalbaby/bot/bot-about-page.jpg",
    "/images/projects/royalbaby/bot/bot-awards-page.jpg",
    "/images/projects/royalbaby/bot/bot-contacts-page.jpg",
    "/images/projects/royalbaby/bot/bot-menu-page.jpg",
    "/images/projects/royalbaby/bot/bot-personal-account-page.jpg",
    "/images/projects/royalbaby/bot/bot-promocode-page.jpg",
    "/images/projects/royalbaby/bot/bot-questions-page.jpg",
    "/images/projects/royalbaby/bot/bot-wins-page.jpg"
  ],
  admin: [
    "/images/projects/royalbaby/admin/admin-login-page.png"
  ]
};

const newTravelToursImages = {
  web: [
    "/images/projects/traveltours/web/lending-header-page.png",
    "/images/projects/traveltours/web/lending-select-tour-page.png",
    "/images/projects/traveltours/web/lending-list-of-tours-page.png",
    "/images/projects/traveltours/web/lending-tour-package-page.png",
    "/images/projects/traveltours/web/lending-list-of-hotels-page.png",
    "/images/projects/traveltours/web/lending-about-page.png",
    "/images/projects/traveltours/web/lending-contacts-page.png",
    "/images/projects/traveltours/web/lending-lenguage-page.png",
    "/images/projects/traveltours/web/lending-footer-page.png"
  ],
  admin: [
    "/images/projects/traveltours/admin/login-page.png",
    "/images/projects/traveltours/admin/dashboard-tours-page.png",
    "/images/projects/traveltours/admin/dashboard-add-tours-page.png",
    "/images/projects/traveltours/admin/dashboard-hotels-page.png",
    "/images/projects/traveltours/admin/dashboard-add-hotels-page.png",
    "/images/projects/traveltours/admin/dashboard-rooms-page.png",
    "/images/projects/traveltours/admin/dashboard-add-rooms-page.png",
    "/images/projects/traveltours/admin/dashboard-city-page.png",
    "/images/projects/traveltours/admin/dashboard-add-city-page.png",
    "/images/projects/traveltours/admin/dashboard-countries-page.png",
    "/images/projects/traveltours/admin/dashboard-add-countries-page.png",
    "/images/projects/traveltours/admin/dashboard-banners-page.png",
    "/images/projects/traveltours/admin/dashboard-add-banners-page.png",
    "/images/projects/traveltours/admin/dashboard-feedbacks-page.png",
    "/images/projects/traveltours/admin/dashboard-messages-page.png",
    "/images/projects/traveltours/admin/dashboard-notification-page.png",
    "/images/projects/traveltours/admin/dashboard-subscribers-page.png",
    "/images/projects/traveltours/admin/dashboard-settings-currencies-page.png",
    "/images/projects/traveltours/admin/dashboard-settings-website-support-service-page.png"
  ]
};

const metadata = {
  // Mirel
  'login-page': { title: { ru: 'Авторизация', en: 'Login', tj: 'Саҳифаи вуруд' }, shortInfo: { ru: 'Защищенный вход в панель управления', en: 'Secure login to dashboard', tj: 'Вуруди бехатар ба панел' } },
  'dashboard-applications-add-page': { title: { ru: 'Создание заявки', en: 'Create Application', tj: 'Сохтани дархост' }, shortInfo: { ru: 'Форма для регистрации новых обращений', en: 'Form to register new requests', tj: 'Шакл барои муроҷиатҳои нав' } },
  'dashboard-applications-page': { title: { ru: 'Список заявок', en: 'Applications List', tj: 'Рӯйхати дархостҳо' }, shortInfo: { ru: 'Таблица всех заявок с фильтрацией', en: 'Table of applications with filtering', tj: 'Ҷадвали ҳамаи дархостҳо' } },
  'dashboard-articles-creation-page': { title: { ru: 'Написание статьи', en: 'Create Article', tj: 'Навиштани мақола' }, shortInfo: { ru: 'Редактор для публикации контента', en: 'Editor for publishing content', tj: 'Муҳаррир барои нашри контент' } },
  'dashboard-articles-page': { title: { ru: 'Управление статьями', en: 'Articles Management', tj: 'Идоракунии мақолаҳо' }, shortInfo: { ru: 'Список всех опубликованных статей', en: 'List of published articles', tj: 'Рӯйхати мақолаҳои нашршуда' } },
  'dashboard-awards-and-certificates-page': { title: { ru: 'Сертификаты и награды', en: 'Awards', tj: 'Шаҳодатномаҳо' }, shortInfo: { ru: 'Управление достижениями компании', en: 'Company achievements', tj: 'Дастовардҳои ширкат' } },
  'dashboard-clients-page': { title: { ru: 'База клиентов', en: 'Clients', tj: 'Пойгоҳи мизоҷон' }, shortInfo: { ru: 'Список клиентов с контактами', en: 'List of clients', tj: 'Рӯйхати мизоҷон' } },
  'dashboard-clients-were-helped-page': { title: { ru: 'Помощь клиентам', en: 'Assisted Clients', tj: 'Кумак ба мизоҷон' }, shortInfo: { ru: 'Статистика оказанной помощи', en: 'Assistance statistics', tj: 'Омори кумакҳо' } },
  'dashboard-dark-backdrop-page': { title: { ru: 'Темная тема', en: 'Dark Mode', tj: 'Мавзӯи торик' }, shortInfo: { ru: 'Интерфейс панели в темном оформлении', en: 'Dark dashboard interface', tj: 'Интерфейс дар мавзӯи торик' } },
  'dashboard-letters-of-gratitude-page': { title: { ru: 'Благодарственные письма', en: 'Gratitude', tj: 'Сипосномаҳо' }, shortInfo: { ru: 'Отзывы партнеров', en: 'Partner reviews', tj: 'Баррасиҳои шарикон' } },
  'dashboard-projects-add-page': { title: { ru: 'Добавление проекта', en: 'Add Project', tj: 'Иловаи лоиҳа' }, shortInfo: { ru: 'Ввод данных для нового проекта', en: 'Data entry for new project', tj: 'Вуруди лоиҳаи нав' } },
  'dashboard-projects-company-add-page': { title: { ru: 'Добавление компании', en: 'Add Company', tj: 'Иловаи ширкат' }, shortInfo: { ru: 'Регистрация компании для портфолио', en: 'Company registration', tj: 'Бақайдгирии ширкат' } },
  'dashboard-projects-company-page': { title: { ru: 'Компании проектов', en: 'Companies', tj: 'Ширкатҳо' }, shortInfo: { ru: 'Справочник компаний-заказчиков', en: 'Client directory', tj: 'Ширкатҳои фармоишгар' } },
  'dashboard-projects-galery-add-page': { title: { ru: 'Добавление в галерею', en: 'Add to Gallery', tj: 'Илова ба галерея' }, shortInfo: { ru: 'Загрузка изображений для кейса', en: 'Image uploading', tj: 'Боркунии расмҳо' } },
  'dashboard-projects-galery-page': { title: { ru: 'Галерея проектов', en: 'Gallery', tj: 'Галерея' }, shortInfo: { ru: 'Управление фотографиями', en: 'Photo management', tj: 'Идоракунии аксҳо' } },
  'dashboard-projects-object-type-page': { title: { ru: 'Типы объектов', en: 'Object Types', tj: 'Намудҳои объект' }, shortInfo: { ru: 'Справочник категорий', en: 'Categories directory', tj: 'Категорияҳо' } },
  'dashboard-projects-projects-page': { title: { ru: 'Управление проектами', en: 'Projects', tj: 'Лоиҳаҳо' }, shortInfo: { ru: 'Центральный хаб портфолио', en: 'Portfolio hub', tj: 'Хаби портфолио' } },
  'dashboard-projects-type-of-solution-page': { title: { ru: 'Типы решений', en: 'Solution Types', tj: 'Намудҳои ҳалли' }, shortInfo: { ru: 'Классификация решений', en: 'Solution classifications', tj: 'Гурӯҳбандии қарорҳо' } },
  'dashboard-projects-year-of-implementation-page': { title: { ru: 'Год реализации', en: 'Implementation Year', tj: 'Соли татбиқ' }, shortInfo: { ru: 'Хронология портфолио', en: 'Portfolio chronology', tj: 'Хронология' } },
  'dashboard-services-page': { title: { ru: 'Услуги', en: 'Services', tj: 'Хизматрасониҳо' }, shortInfo: { ru: 'Каталог услуг компании', en: 'Services catalog', tj: 'Рӯйхати хизматрасониҳо' } },
  'dashboard-settings-page': { title: { ru: 'Настройки системы', en: 'Settings', tj: 'Танзимот' }, shortInfo: { ru: 'Глобальные параметры', en: 'Global parameters', tj: 'Параметрҳо' } },
  'dashboard-staff-add-page': { title: { ru: 'Добавление сотрудника', en: 'Add Staff', tj: 'Иловаи корманд' }, shortInfo: { ru: 'Регистрация нового работника', en: 'Registering new employee', tj: 'Бақайдгирии корманд' } },
  'dashboard-staff-departments-add-page': { title: { ru: 'Добавление отдела', en: 'Add Department', tj: 'Иловаи шуъба' }, shortInfo: { ru: 'Создание структурного подразделения', en: 'Creating a department', tj: 'Сохтани шуъба' } },
  'dashboard-staff-departments-page': { title: { ru: 'Отделы', en: 'Departments', tj: 'Шуъбаҳо' }, shortInfo: { ru: 'Структура персонала', en: 'Personnel structure', tj: 'Сохтори кормандон' } },
  'dashboard-staff-page': { title: { ru: 'Сотрудники', en: 'Staff', tj: 'Кормандон' }, shortInfo: { ru: 'Список всего персонала', en: 'List of all personnel', tj: 'Рӯйхати кормандон' } },

  'lending-header-page': { title: { ru: 'Главная секция', en: 'Hero Section', tj: 'Сексияи асосӣ' }, shortInfo: { ru: 'Приветственный экран сайта', en: 'Welcome screen', tj: 'Экрани асосӣ' } },
  'lending-offer-page': { title: { ru: 'Услуги', en: 'Services', tj: 'Услугӣ' }, shortInfo: { ru: 'Предлагаемые услуги', en: 'Offered services', tj: 'Услугӣ' } },
  'lending-our-team-page': { title: { ru: 'Наша команда', en: 'Our Team', tj: 'Командаи мо' }, shortInfo: { ru: 'Сотрудники компании', en: 'Company staff', tj: 'Кормандон' } },
  'projects-page': { title: { ru: 'Проекты', en: 'Projects', tj: 'Лоиҳаҳо' }, shortInfo: { ru: 'Каталог проектов', en: 'Projects catalog', tj: 'Каталоги лоиҳаҳо' } },
  'objects-page': { title: { ru: 'Объекты', en: 'Objects', tj: 'Объектҳо' }, shortInfo: { ru: 'Каталог объектов', en: 'Objects catalog', tj: 'Каталоги объектҳо' } },
  'lending-galery-page': { title: { ru: 'Галерея', en: 'Gallery', tj: 'Галерея' }, shortInfo: { ru: 'Фотогалерея', en: 'Photo gallery', tj: 'Фотогалерея' } },
  'lending-how-order-process-go-page': { title: { ru: 'Процесс работы', en: 'Work Process', tj: 'Протсесси кор' }, shortInfo: { ru: 'Как мы работаем', en: 'How we work', tj: 'Чӣ тавр мо кор мекунем' } },
  'lending-clients-page': { title: { ru: 'Наши клиенты', en: 'Our Clients', tj: 'Мизоҷони мо' }, shortInfo: { ru: 'Компании, с которыми мы работаем', en: 'Companies we work with', tj: 'Мизоҷон' } },
  'lending-companies-trust-page': { title: { ru: 'Нам доверяют', en: 'They Trust Us', tj: 'Ба мо бовар доранд' }, shortInfo: { ru: 'Доверие партнеров', en: 'Partner trust', tj: 'Боварии шарикон' } },
  'lending-letters-of-gratitude-page': { title: { ru: 'Отзывы', en: 'Reviews', tj: 'Баррасиҳо' }, shortInfo: { ru: 'Благодарственные письма', en: 'Letters of gratitude', tj: 'Сипосномаҳо' } },
  'lending-rewards-page': { title: { ru: 'Награды', en: 'Awards', tj: 'Ҷоизаҳо' }, shortInfo: { ru: 'Достижения компании', en: 'Company awards', tj: 'Ҷоизаҳои ширкат' } },
  'articles-page': { title: { ru: 'Статьи', en: 'Articles', tj: 'Мақолаҳо' }, shortInfo: { ru: 'Блог и публикации', en: 'Blog and publications', tj: 'Блог' } },
  'request-page': { title: { ru: 'Заявка', en: 'Request', tj: 'Дархост' }, shortInfo: { ru: 'Форма обратной связи', en: 'Feedback form', tj: 'Шакли тамос' } },
  'lending-news-footer-page': { title: { ru: 'Подвал', en: 'Footer', tj: 'Футер' }, shortInfo: { ru: 'Футер с новостями', en: 'Footer with news', tj: 'Футер' } },

  // Royal Baby Additional
  'bot-awards-page': { title: { ru: 'Награды', en: 'Awards', tj: 'Ҷоизаҳо' }, shortInfo: { ru: 'Раздел наград в боте', en: 'Awards section in bot', tj: 'Қисми ҷоизаҳо дар бот' } },
  'bot-contacts-page': { title: { ru: 'Контакты', en: 'Contacts', tj: 'Тамос' }, shortInfo: { ru: 'Связь с организаторами', en: 'Contact organizers', tj: 'Тамос бо созмондиҳандагон' } },
  'bot-menu-page': { title: { ru: 'Главное меню', en: 'Main Menu', tj: 'Менюи асосӣ' }, shortInfo: { ru: 'Основная навигация в боте', en: 'Main navigation in bot', tj: 'Навигатсияи асосӣ' } },
  'bot-personal-account-page': { title: { ru: 'Личный кабинет', en: 'Personal Account', tj: 'Утоқи шахсӣ' }, shortInfo: { ru: 'Профиль участника', en: 'Participant profile', tj: 'Профили иштирокчӣ' } },
  'bot-promocode-page': { title: { ru: 'Промокоды', en: 'Promo Codes', tj: 'Промокодҳо' }, shortInfo: { ru: 'Регистрация кодов', en: 'Registering codes', tj: 'Бақайдгирии кодҳо' } },
  'bot-questions-page': { title: { ru: 'Вопросы', en: 'Questions', tj: 'Саволҳо' }, shortInfo: { ru: 'FAQ в Telegram боте', en: 'FAQ in Telegram bot', tj: 'Саволҳо дар бот' } },
  'bot-wins-page': { title: { ru: 'Победы', en: 'Wins', tj: 'Ғалабаҳо' }, shortInfo: { ru: 'Список выигрышей', en: 'List of wins', tj: 'Рӯйхати бурдҳо' } },
  'bot-start-page': { title: { ru: 'Запуск бота', en: 'Bot Start', tj: 'Оғози бот' }, shortInfo: { ru: 'Приветственное сообщение', en: 'Welcome message', tj: 'Паёми истиқболӣ' } },
  'bot-about-page': { title: { ru: 'О боте', en: 'About Bot', tj: 'Дар бораи бот' }, shortInfo: { ru: 'Информация об акции', en: 'Promo information', tj: 'Маълумот дар бораи аксия' } },
  
  'lending-how-to-participate-page': { title: { ru: 'Как участвовать', en: 'How to Participate', tj: 'Чӣ тавр иштирок кардан' }, shortInfo: { ru: 'Инструкция для участия в акции', en: 'Instructions', tj: 'Дастур' } },
  'lending-products-page': { title: { ru: 'Продукция', en: 'Products', tj: 'Маҳсулот' }, shortInfo: { ru: 'Каталог акционных товаров', en: 'Promo products catalog', tj: 'Феҳристи маҳсулот' } },
  'lending-win-prizes-page': { title: { ru: 'Призы', en: 'Prizes', tj: 'Тӯҳфаҳо' }, shortInfo: { ru: 'Доступные подарки для розыгрыша', en: 'Available gifts', tj: 'Тӯҳфаҳои дастрас' } },
  'lending-winners-зфпу': { title: { ru: 'Список победителей', en: 'Winners List', tj: 'Рӯйхати ғолибон' }, shortInfo: { ru: 'Таблица с результатами розыгрыша', en: 'Results table', tj: 'Ҷадвали натиҷаҳо' } },
  'lending-questions-and-answers-page': { title: { ru: 'Вопросы и ответы', en: 'FAQ', tj: 'Саволҳо ва ҷавобҳо' }, shortInfo: { ru: 'Часто задаваемые вопросы', en: 'FAQ', tj: 'Саволҳо' } },
  'lending-login-page': { title: { ru: 'Авторизация', en: 'Login', tj: 'Вуруд' }, shortInfo: { ru: 'Вход в личный кабинет участника', en: 'Login to dashboard', tj: 'Вуруд' } },
  'lending-footer-page': { title: { ru: 'Подвал сайта', en: 'Footer', tj: 'Поёни сайт' }, shortInfo: { ru: 'Нижняя навигация и контакты', en: 'Footer navigation', tj: 'Навигатсияи поёнӣ' } },
  'admin-login-page': { title: { ru: 'Вход администратора', en: 'Admin Login', tj: 'Вуруди администратор' }, shortInfo: { ru: 'Авторизация в панель управления', en: 'Login to admin panel', tj: 'Вуруд ба панели идоракунӣ' } },

  // TravelTours Additional
  'dashboard-add-banners-page': { title: { ru: 'Добавление баннера', en: 'Add Banner', tj: 'Иловаи баннер' }, shortInfo: { ru: 'Создание рекламных баннеров', en: 'Create promo banners', tj: 'Сохтани баннерҳо' } },
  'dashboard-add-city-page': { title: { ru: 'Добавление города', en: 'Add City', tj: 'Иловаи шаҳр' }, shortInfo: { ru: 'Регистрация новых направлений', en: 'Registering new destinations', tj: 'Бақайдгирии самтҳои нав' } },
  'dashboard-add-countries-page': { title: { ru: 'Добавление страны', en: 'Add Country', tj: 'Иловаи кишвар' }, shortInfo: { ru: 'Регистрация новых стран', en: 'Registering new countries', tj: 'Бақайдгирии кишварҳои нав' } },
  'dashboard-add-hotels-page': { title: { ru: 'Добавление отеля', en: 'Add Hotel', tj: 'Иловаи меҳмонхона' }, shortInfo: { ru: 'Регистрация новых гостиниц', en: 'Registering new hotels', tj: 'Бақайдгирии меҳмонхонаҳои нав' } },
  'dashboard-add-rooms-page': { title: { ru: 'Добавление номеров', en: 'Add Rooms', tj: 'Иловаи ҳуҷраҳо' }, shortInfo: { ru: 'Настройка комнат отелей', en: 'Configuring hotel rooms', tj: 'Танзими ҳуҷраҳои меҳмонхона' } },
  'dashboard-add-tours-page': { title: { ru: 'Добавление туров', en: 'Add Tours', tj: 'Иловаи турҳо' }, shortInfo: { ru: 'Создание туристических пакетов', en: 'Creating tour packages', tj: 'Сохтани пакетҳои сайёҳӣ' } },
  'dashboard-banners-page': { title: { ru: 'Баннеры', en: 'Banners', tj: 'Баннерҳо' }, shortInfo: { ru: 'Управление рекламой', en: 'Ads management', tj: 'Идоракунии реклама' } },
  'dashboard-city-page': { title: { ru: 'Города', en: 'Cities', tj: 'Шаҳрҳо' }, shortInfo: { ru: 'База доступных городов', en: 'Database of available cities', tj: 'Пойгоҳи шаҳрҳои дастрас' } },
  'dashboard-countries-page': { title: { ru: 'Страны', en: 'Countries', tj: 'Кишварҳо' }, shortInfo: { ru: 'База стран', en: 'Countries database', tj: 'Пойгоҳи кишварҳо' } },
  'dashboard-feedbacks-page': { title: { ru: 'Отзывы', en: 'Feedbacks', tj: 'Баррасиҳо' }, shortInfo: { ru: 'Управление комментариями клиентов', en: 'Managing client comments', tj: 'Идоракунии шарҳҳои мизоҷон' } },
  'dashboard-hotels-page': { title: { ru: 'Отели', en: 'Hotels', tj: 'Меҳмонхонаҳо' }, shortInfo: { ru: 'База доступных гостиниц', en: 'Available hotels database', tj: 'Пойгоҳи меҳмонхонаҳои дастрас' } },
  'dashboard-messages-page': { title: { ru: 'Сообщения', en: 'Messages', tj: 'Паёмҳо' }, shortInfo: { ru: 'Обращения пользователей', en: 'User messages', tj: 'Муроҷиатҳои корбарон' } },
  'dashboard-notification-page': { title: { ru: 'Уведомления', en: 'Notifications', tj: 'Огоҳиномаҳо' }, shortInfo: { ru: 'Рассылка новостей', en: 'Newsletters', tj: 'Пахши хабарҳо' } },
  'dashboard-rooms-page': { title: { ru: 'Номера', en: 'Rooms', tj: 'Ҳуҷраҳо' }, shortInfo: { ru: 'Управление номерным фондом', en: 'Room inventory management', tj: 'Идоракунии фонди ҳуҷраҳо' } },
  'dashboard-settings-currencies-page': { title: { ru: 'Валюты', en: 'Currencies', tj: 'Асъор' }, shortInfo: { ru: 'Настройка курсов обмена', en: 'Exchange rates settings', tj: 'Танзими қурби мубодила' } },
  'dashboard-settings-website-support-service-page': { title: { ru: 'Служба поддержки', en: 'Support Service', tj: 'Хадамоти дастгирӣ' }, shortInfo: { ru: 'Настройки контакт-центра', en: 'Contact center settings', tj: 'Танзимоти маркази тамос' } },
  'dashboard-subscribers-page': { title: { ru: 'Подписчики', en: 'Subscribers', tj: 'Обуначиён' }, shortInfo: { ru: 'Управление email рассылками', en: 'Email campaigns management', tj: 'Идоракунии почтаи электронӣ' } },
  'dashboard-tours-page': { title: { ru: 'Туры', en: 'Tours', tj: 'Турҳо' }, shortInfo: { ru: 'Каталог всех путешествий', en: 'Catalog of all trips', tj: 'Каталоги ҳамаи саёҳатҳо' } },
  'lending-about-page': { title: { ru: 'О нас', en: 'About Us', tj: 'Дар бораи мо' }, shortInfo: { ru: 'Информация об агентстве', en: 'Agency info', tj: 'Маълумот дар бораи агентӣ' } },
  'lending-contacts-page': { title: { ru: 'Контакты', en: 'Contacts', tj: 'Тамос' }, shortInfo: { ru: 'Связь с нами', en: 'Contact us', tj: 'Тамос бо мо' } },
  'lending-lenguage-page': { title: { ru: 'Выбор языка', en: 'Language', tj: 'Интихоби забон' }, shortInfo: { ru: 'Мультиязычность сайта', en: 'Multilingual site', tj: 'Сомонаи бисёрзабона' } },
  'lending-list-of-hotels-page': { title: { ru: 'Список отелей', en: 'Hotels List', tj: 'Рӯйхати меҳмонхонаҳо' }, shortInfo: { ru: 'Каталог гостиниц', en: 'Hotels catalog', tj: 'Каталоги меҳмонхонаҳо' } },
  'lending-list-of-tours-page': { title: { ru: 'Список туров', en: 'Tours List', tj: 'Рӯйхати турҳо' }, shortInfo: { ru: 'Доступные направления', en: 'Available destinations', tj: 'Самтҳои дастрас' } },
  'lending-select-tour-page': { title: { ru: 'Выбор тура', en: 'Select Tour', tj: 'Интихоби тур' }, shortInfo: { ru: 'Фильтр путешествий', en: 'Travel filter', tj: 'Филтри саёҳатҳо' } },
  'lending-tour-package-page': { title: { ru: 'Тур пакет', en: 'Tour Package', tj: 'Тур пакет' }, shortInfo: { ru: 'Страница турпакета', en: 'Tour package page', tj: 'Саҳифаи турпакет' } }
};

function formatItem(src) {
  const parts = src.split('/');
  const filename = parts[parts.length - 1].replace(/\.[^/.]+$/, "");
  const meta = metadata[filename] || { 
    title: { ru: filename, en: filename, tj: filename }, 
    shortInfo: { ru: "", en: "", tj: "" } 
  };
  return `{
            slug: "${filename}",
            title: ${JSON.stringify(meta.title)},
            imageSrc: "${src}",
            BannerSrc: "${src}",
            shortInfo: ${JSON.stringify(meta.shortInfo)},
            fullInfo: { ru: "", en: "", tj: "" }
          }`;
}

const newProjectsCode = `
  {
    imageSrc: "/images/projects/mirel/admin/login-page.png",
    year: "2024",
    tags: ["Laravel", "React", "PostgreSQL", "Tailwind CSS", "REST API"],
    slug: "mirel",
    projectComponents: [
      {
        tabName: { ru: "Веб-сайт", en: "Website", tj: "Вебсайт" },
        items: [
          ${newMirelImages.web.map(formatItem).join(',\n          ')}
        ],
      },
      {
        tabName: { ru: "Панель управления", en: "Dashboard", tj: "Саҳифаи идоракунӣ" },
        items: [
          ${newMirelImages.admin.map(formatItem).join(',\n          ')}
        ],
      }
    ],
  },
  {
    imageSrc: "/images/projects/royalbaby/web/lending-header-page.png",
    year: "2024",
    tags: ["Laravel", "React", "Telegram Bot", "PostgreSQL", "REST API"],
    slug: "royalbaby",
    projectComponents: [
      {
        tabName: { ru: "Веб-сайт", en: "Website", tj: "Вебсайт" },
        items: [
          ${newRoyalBabyImages.web.map(formatItem).join(',\n          ')}
        ],
      },
      {
        tabName: { ru: "Телеграм бот", en: "Telegram Bot", tj: "Телеграм бот" },
        items: [
          ${newRoyalBabyImages.bot.map(formatItem).join(',\n          ')}
        ],
      },
      {
        tabName: { ru: "Админ-панель", en: "Admin Panel", tj: "Панели админ" },
        items: [
          ${newRoyalBabyImages.admin.map(formatItem).join(',\n          ')}
        ],
      }
    ]
  },
  {
    imageSrc: "/images/projects/traveltours/web/lending-header-page.png",
    year: "2024",
    tags: ["Laravel", "React", "Tourism", "Tailwind CSS"],
    slug: "traveltours",
    projectComponents: [
      {
        tabName: { ru: "Веб-сайт", en: "Website", tj: "Вебсайт" },
        items: [
          ${newTravelToursImages.web.map(formatItem).join(',\n          ')}
        ],
      },
      {
        tabName: { ru: "Админ-панель", en: "Admin Panel", tj: "Панели админ" },
        items: [
          ${newTravelToursImages.admin.map(formatItem).join(',\n          ')}
        ],
      }
    ]
  }
];`;

tsx = tsx.replace(/\]\s*;\s*$/, newProjectsCode + '\n');
fs.writeFileSync(tsxPath, tsx);
console.log("Successfully rebuilt mirel, royalbaby, and traveltours!");
