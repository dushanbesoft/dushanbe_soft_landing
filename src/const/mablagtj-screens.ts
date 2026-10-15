import type { ProductSiteItem } from "./product-site";

type Screen = NonNullable<ProductSiteItem["projectComponents"]>[number]["items"][number];

export const mablagtjWebScreens: Screen[] = [
  {
    "slug": "landing-header",
    "title": {
      "ru": "Главный экран лендинга",
      "en": "Landing Page Hero",
      "tj": "Экрани асосии лендинг"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-header-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-header-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Презентация платформы Mablag.tj и ключевых возможностей учета",
      "en": "Presentation of Mablag.tj platform and key accounting capabilities",
      "tj": "Муаррифии платформаи Mablag.tj ва имкониятҳои асосии баҳисобгирӣ"
    },
    "fullInfo": {
      "ru": "Главный экран лендинга знакомит пользователей с облачной системой Mablag.tj для автоматизации торговли, финансов и складского учета. Наглядная презентация ключевых преимуществ, интерактивный макет интерфейса и быстрый доступ к началу работы.",
      "en": "The landing hero screen introduces users to the Mablag.tj cloud system for automating trade, finances, and inventory accounting. Clear visual highlights of key benefits, interactive interface mockup, and fast access to get started.",
      "tj": "Экрани асосии лендинг корбаронро бо системаи абрии Mablag.tj барои автоматикунонии тиҷорат, молия ва баҳисобгирии анбор шинос мекунад. Муаррифии визуалӣ, макети интерактивии интерфейс ва дастрасии зуд ба оғози кор."
    }
  },
  {
    "slug": "landing-features",
    "title": {
      "ru": "Функциональные возможности",
      "en": "Key Features & Modules",
      "tj": "Имкониятҳои функсионалӣ"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-features-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-features-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Финансы, склад, кассы, клиенты и аналитика в единой экосистеме",
      "en": "Finance, cash, warehouse and analytics in one ecosystem",
      "tj": "Молия, анбор, хазинаҳо, мизоҷон ва таҳлил дар як экосистема"
    },
    "fullInfo": {
      "ru": "Раздел демонстрирует модульную архитектуру сервиса: от контроля движения денежных средств и мультивалютных касс до адресного хранения на складах и CRM-модуля взаимодействия с клиентами.",
      "en": "This section showcases the modular architecture of the service: from cash flow tracking and multicurrency cash registers to warehouse storage management and client CRM.",
      "tj": "Бахш сохтори модулии хизматрасониро намоиш медиҳад: аз назорати ҳаракати маблағ ва хазинаҳои бисёрасъорӣ то идоракунии анбор ва модули CRM барои кор бо мизоҷон."
    }
  },
  {
    "slug": "landing-how-it-works",
    "title": {
      "ru": "Как работает система",
      "en": "How the System Works",
      "tj": "Тарзи кори система"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-how-it-work-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-how-it-work-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Пошаговый процесс от регистрации до полного контроля бизнеса",
      "en": "Step-by-step onboarding process from signup to full business control",
      "tj": "Раванди зина ба зина аз қайдгирӣ то назорати пурраи тиҷорат"
    },
    "fullInfo": {
      "ru": "Интуитивное объяснение этапов внедрения сервиса: простая регистрация, загрузка номенклатуры и остатков, настройка сотрудников и получение прозрачной отчетности с первых дней.",
      "en": "An intuitive overview of implementation steps: easy registration, importing items and initial stock, configuring staff roles, and getting clear analytics from day one.",
      "tj": "Шарҳи фаҳмои марҳилаҳои ҷорӣ кардани хизмат: қайди оддӣ, боркунии молҳо ва боқимондаҳо, танзими кормандон ва гирифтани ҳисоботи шаффоф аз рӯзҳои аввал."
    }
  },
  {
    "slug": "landing-analytics",
    "title": {
      "ru": "Аналитика и графики",
      "en": "Business Analytics & Charts",
      "tj": "Таҳлил ва графикҳои тиҷорат"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-analytics-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-analytics-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Наглядные отчеты P&L, выручка, динамика продаж и маржинальность",
      "en": "Visual P&L reports, revenue trends, sales dynamics and profitability",
      "tj": "Ҳисоботҳои визуалии P&L, даромад, динамикаи фурӯш ва фоиданокӣ"
    },
    "fullInfo": {
      "ru": "Демонстрация аналитического блока Mablag.tj: автоматический расчет чистой прибыли, визуализация структуры расходов и доходов, выявление топ-товаров и кассовых разрывов.",
      "en": "Demonstration of the Mablag.tj analytics module: automatic net profit calculations, income and expense breakdowns, identifying best-selling items, and predicting cash gaps.",
      "tj": "Муаррифии блоки таҳлилии Mablag.tj: ҳисобкунии худкори фоидаи холис, визуалӣ гардонидани хароҷот ва даромад, муайян кардани молҳои серхарид ва назорати хазина."
    }
  },
  {
    "slug": "landing-access-control",
    "title": {
      "ru": "Контроль доступа и роли",
      "en": "Access Control & Roles",
      "tj": "Назорати дастрасӣ ва нақшҳо"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-access-control-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-access-control-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Разграничение прав для кассиров, кладовщиков и руководителей",
      "en": "Role-based permissions for cashiers, warehouse staff and executives",
      "tj": "Тақсимоти ҳуқуқҳо барои хазинадорон, анбордорон ва роҳбарон"
    },
    "fullInfo": {
      "ru": "Защита коммерческих данных: каждый сотрудник видит только закрепленный за ним функционал. Руководитель сохраняет полный аудит действий, изменений цен и остатков.",
      "en": "Commercial data protection: every team member accesses only assigned modules. Executives retain full audit logs of transactions, price updates, and inventory changes.",
      "tj": "Ҳифзи маълумоти тиҷоратӣ: ҳар як корманд танҳо бахшҳои марбутаро мебинад. Роҳбар аудити пурраи амалиётҳо, тағйири нархҳо ва боқимондаҳоро назорат мекунад."
    }
  },
  {
    "slug": "landing-for-whom",
    "title": {
      "ru": "Отраслевые решения",
      "en": "Target Industries",
      "tj": "Соҳаҳои татбиқ"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-for-whom-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-for-whom-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Специализированные профили для розницы, опта, дистрибуции и услуг",
      "en": "Tailored configurations for retail, wholesale, distribution and services",
      "tj": "Танзимоти махсус барои савдои чакана, яклухт, дистрибюторӣ ва хизматрасонӣ"
    },
    "fullInfo": {
      "ru": "Система легко адаптируется под специфику бизнеса: от розничных магазинов и супермаркетов до оптовых баз, автозапчастей, стройматериалов и сервисных центров.",
      "en": "The platform adapts seamlessly to diverse business models: from retail stores and supermarkets to wholesale depots, auto parts, building materials, and service centres.",
      "tj": "Система ба осонӣ ба намудҳои гуногуни тиҷорат мутобиқ мешавад: аз мағозаҳои чакана то пойгоҳҳои яклухт, қисмҳои эҳтиётӣ ва марказҳои хизматрасонӣ."
    }
  },
  {
    "slug": "landing-tariffs",
    "title": {
      "ru": "Тарифные планы",
      "en": "Pricing & Tariffs",
      "tj": "Нақшаҳои тарофавӣ"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-tariffs-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-tariffs-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Гибкие пакеты подписки для старта, роста и корпоративного масштаба",
      "en": "Flexible subscription tiers for startups, growing teams and enterprises",
      "tj": "Бастаҳои чандири обуна барои оғоз, рушд ва сатҳи корпоративӣ"
    },
    "fullInfo": {
      "ru": "Презентация ценовой политики Mablag.tj: выбор периода оплаты, скидки при оплате за год, включенные рабочие места, кассы и лимиты номенклатуры.",
      "en": "Overview of Mablag.tj pricing options: billing cycles, annual discounts, included user seats, cash registers, and item catalog capacities.",
      "tj": "Муаррифии сиёсати нархгузории Mablag.tj: интихоби давраи пардохт, тахфифҳо барои пардохти солона, ҷойҳои кории дохилшуда ва лимити молҳо."
    }
  },
  {
    "slug": "landing-tariffs-comparison",
    "title": {
      "ru": "Сравнение тарифов",
      "en": "Detailed Tariff Comparison",
      "tj": "Муқоисаи муфассали тарофаҳо"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-tariffs-comparison-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-tariffs-comparison-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Подробная матрица возможностей каждого плана подписки",
      "en": "Comprehensive matrix of features and limits across all tiers",
      "tj": "Ҷадвали муфассали имкониятҳо ва маҳдудиятҳои ҳар як тарофа"
    },
    "fullInfo": {
      "ru": "Прозрачное сравнение функционала: интеграции, мультивалютность, экспорт отчетов, число торговых точек, аналитика и приоритетная техподдержка.",
      "en": "Transparent feature-by-feature comparison: integrations, multicurrency support, report exports, retail outlet limits, analytics, and priority tech support.",
      "tj": "Муқоисаи шаффофи имкониятҳо: пайвастшавиҳо, асъорҳои гуногун, содироти ҳисоботҳо, нуқтаҳои фурӯш, таҳлил ва дастгирии техникии афзалиятнок."
    }
  },
  {
    "slug": "landing-faq",
    "title": {
      "ru": "Часто задаваемые вопросы (FAQ)",
      "en": "Frequently Asked Questions",
      "tj": "Саволҳои маъмул (FAQ)"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-frequent-questions-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-frequent-questions-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Ответы на ключевые вопросы о безопасности, миграции и внедрении",
      "en": "Answers to key questions regarding security, migration and onboarding",
      "tj": "Посух ба саволҳои муҳим оид ба амният, кӯчонидани маълумот ва оғози кор"
    },
    "fullInfo": {
      "ru": "Блок ответов на вопросы предпринимателей: где хранятся базы данных, как перенести остатки из Excel или 1С, как подключить сканеры штрихкодов и принтеры чеков.",
      "en": "Answers to common entrepreneur questions: where data is hosted, how to import catalog from Excel or 1C, and connecting barcode scanners or receipt printers.",
      "tj": "Посухҳо ба саволҳои соҳибкорон: маълумот дар куҷо нигоҳ дошта мешавад, чӣ тавр молҳоро аз Excel ё 1C гузаронидан мумкин аст ва пайвасти дастгоҳҳо."
    }
  },
  {
    "slug": "landing-contact-footer",
    "title": {
      "ru": "Контакты и заявка на демо",
      "en": "Contacts & Demo Request",
      "tj": "Тамос ва дархости намоиш"
    },
    "imageSrc": "/images/projects/mablagtj/web/lending-mablag-contact-footer-page.png",
    "BannerSrc": "/images/projects/mablagtj/web/lending-mablag-contact-footer-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Форма быстрой связи, заказ консультации и презентации системы",
      "en": "Quick inquiry form, booking consultation and live demonstration",
      "tj": "Шакли тамос, фармоиши машварат ва намоиши амалии система"
    },
    "fullInfo": {
      "ru": "Финальный конверсионный блок лендинга: возможность запросить персональную демонстрацию функционала, протестировать систему бесплатно и связаться со специалистами.",
      "en": "The final conversion section of the landing: request a tailored live demo, activate free trial period, and reach out to account managers.",
      "tj": "Блоки ниҳоии лендинг: имконияти дархости намоиши инфиродӣ, санҷиши ройгони система ва тамос бо мутахассисон."
    }
  },
  {
    "slug": "landing-login",
    "title": {
      "ru": "Вход в систему",
      "en": "Secure Login & Auth",
      "tj": "Воридшавӣ ба система"
    },
    "imageSrc": "/images/projects/mablagtj/lending-mablag-login-page.png",
    "BannerSrc": "/images/projects/mablagtj/lending-mablag-login-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Форма авторизации в личный кабинет Mablag.tj с двухфакторной защитой",
      "en": "Secure authentication form for Mablag.tj workspace with 2FA",
      "tj": "Шакли амни воридшавӣ ба кабинети кории Mablag.tj бо ҳимояи дузинагӣ"
    },
    "fullInfo": {
      "ru": "Экран авторизации обеспечивает защищенный вход пользователей в учетную систему с проверкой прав доступа, восстановлением паролей и защитой от подбора.",
      "en": "The authorization screen provides secure access into the business workspace with permission validation, password recovery, and brute-force protection.",
      "tj": "Экрани воридшавӣ дастрасии бехатарро ба система бо санҷиши ҳуқуқҳо, барқарорсозии парол ва ҳимояи пурра таъмин мекунад."
    }
  }
];

export const mablagtjAdminScreens: Screen[] = [
  {
    "slug": "admin-main",
    "title": {
      "ru": "Главный дашборд",
      "en": "Main Dashboard",
      "tj": "Дашборди асосӣ"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-main-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-main-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Сводка ключевых показателей бизнеса, выручка, остатки и расходы",
      "en": "Summary of key business KPIs, revenue, cash balance and expenses",
      "tj": "Хулосаи нишондиҳандаҳои тиҷорат, даромад, боқимондаҳо ва хароҷот"
    },
    "fullInfo": {
      "ru": "Центральный пульт управления руководителем: актуальный остаток в кассах и на счетах, объем продаж за день, график прибыли, ожидаемые платежи и последние операции.",
      "en": "Summary of key business KPIs, revenue, cash balance and expenses",
      "tj": "Хулосаи нишондиҳандаҳои тиҷорат, даромад, боқимондаҳо ва хароҷот"
    }
  },
  {
    "slug": "admin-my-office",
    "title": {
      "ru": "Мой офис и реквизиты",
      "en": "My Office & Company Profile",
      "tj": "Дафтари ман ва маълумоти ширкат"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-my-office-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-my-office-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Настройка профиля компании, филиалов, логотипа и контактных данных",
      "en": "Company profile setup, branch details, branding and business credentials",
      "tj": "Танзими маълумоти ширкат, филиалҳо, тамға ва суроғаҳо"
    },
    "fullInfo": {
      "ru": "Управление юридическими реквизитами предприятия, печатными формами документов, валютой учета по умолчанию и параметрами налогообложения.",
      "en": "Company profile setup, branch details, branding and business credentials",
      "tj": "Танзими маълумоти ширкат, филиалҳо, тамға ва суроғаҳо"
    }
  },
  {
    "slug": "admin-users",
    "title": {
      "ru": "Сотрудники и права доступа",
      "en": "Users & Access Control",
      "tj": "Корбарон ва ҳуқуқи дастрасӣ"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-users-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-users-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Реестр учетных записей сотрудников, роли, блокировка и аудит",
      "en": "Employee user accounts, role management, status and activity audit",
      "tj": "Рӯйхати кормандон, нақшҳо, идоракунии дастрасӣ ва аудит"
    },
    "fullInfo": {
      "ru": "Администрирование пользователей: добавление кассиров, менеджеров, кладовщиков и бухгалтеров с детальным разграничением видимости складов и счетов.",
      "en": "Employee user accounts, role management, status and activity audit",
      "tj": "Рӯйхати кормандон, нақшҳо, идоракунии дастрасӣ ва аудит"
    }
  },
  {
    "slug": "admin-orders",
    "title": {
      "ru": "Реестр заказов и продаж",
      "en": "Orders & Sales Register",
      "tj": "Рӯйхати фармоишҳо ва фурӯш"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-orders-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-orders-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Учет продаж, статусы оплаты, даты отгрузки и ответственные менеджеры",
      "en": "Sales tracking, payment statuses, delivery dates and assigned managers",
      "tj": "Баҳисобгирии фурӯш, вазъи пардохт, санаи интиқол ва мудирон"
    },
    "fullInfo": {
      "ru": "Полный журнал клиентских заказов с возможностью фильтрации по датам, статусам оплаты, точкам продаж и быстрой генерацией накладных и товарных чеков.",
      "en": "Sales tracking, payment statuses, delivery dates and assigned managers",
      "tj": "Баҳисобгирии фурӯш, вазъи пардохт, санаи интиқол ва мудирон"
    }
  },
  {
    "slug": "admin-orders-positions",
    "title": {
      "ru": "Товарные позиции заказов",
      "en": "Order Items & Positions",
      "tj": "Қисмҳои молии фармоишҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-orders-positions-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-orders-positions-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Детализация заказа по товарам, ценам, скидкам и количеству",
      "en": "Itemized order breakdown with unit pricing, discounts and quantities",
      "tj": "Тафсилоти фармоиш аз рӯи молҳо, нархҳо, тахфиф ва миқдор"
    },
    "fullInfo": {
      "ru": "Экран просмотра состава заказа: добавление товаров через сканер штрихкодов, автоматический пересчет сумм с учетом НДС и скидок клиентов.",
      "en": "Itemized order breakdown with unit pricing, discounts and quantities",
      "tj": "Тафсилоти фармоиш аз рӯи молҳо, нархҳо, тахфиф ва миқдор"
    }
  },
  {
    "slug": "admin-salary-recipients",
    "title": {
      "ru": "Получатели заработной платы",
      "en": "Payroll Staff Directory",
      "tj": "Кормандон ва гирандагони маош"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-salary-recipients-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-salary-recipients-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Справочник сотрудников, оклады, ставки и процент от продаж",
      "en": "Staff directory with fixed salaries, rates and sales commissions",
      "tj": "Маълумотномаи кормандон, маош, меъёрҳо ва фоизи фурӯш"
    },
    "fullInfo": {
      "ru": "Ведение кадрового учета фонда оплаты труда: настройка фиксированных окладов, сдельной оплаты и процентов с продаж для мотивации сотрудников.",
      "en": "Staff directory with fixed salaries, rates and sales commissions",
      "tj": "Маълумотномаи кормандон, маош, меъёрҳо ва фоизи фурӯш"
    }
  },
  {
    "slug": "admin-salary-reports",
    "title": {
      "ru": "Ведомость начисления зарплаты",
      "en": "Salary & Payroll Reports",
      "tj": "Ҳисоботи пардохти музди меҳнат"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-salary-reports-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-salary-reports-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Расчетные листы, удержания, авансы и история выплат зарплаты",
      "en": "Pay slips, deductions, cash advances and payroll disbursement history",
      "tj": "Ҳисобномаҳо, нигоҳдориҳо, пешпардохт ва таърихи пардохти маош"
    },
    "fullInfo": {
      "ru": "Автоматизированное формирование ведомостей на выплату зарплаты с автоматическим проведением кассового расхода и фиксацией в финансовом балансе.",
      "en": "Pay slips, deductions, cash advances and payroll disbursement history",
      "tj": "Ҳисобномаҳо, нигоҳдориҳо, пешпардохт ва таърихи пардохти маош"
    }
  },
  {
    "slug": "admin-warehouses",
    "title": {
      "ru": "Склады и торговые точки",
      "en": "Warehouses & Retail Locations",
      "tj": "Анборҳо ва нуқтаҳои савдо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-warehouses-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-warehouses-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Управление сетью складов, магазинов и материально ответственными",
      "en": "Management of warehouse locations, stores and assigned custodians",
      "tj": "Идоракунии шабакаи анборҳо, мағозаҳо ва масъулон"
    },
    "fullInfo": {
      "ru": "Создание неограниченного числа складских помещений, магазинов и торговых филиалов с раздельным учетом остатков и контролем ответственных лиц.",
      "en": "Management of warehouse locations, stores and assigned custodians",
      "tj": "Идоракунии шабакаи анборҳо, мағозаҳо ва масъулон"
    }
  },
  {
    "slug": "admin-remains",
    "title": {
      "ru": "Остатки товаров на складах",
      "en": "Inventory Stock Remains",
      "tj": "Боқимондаи молҳо дар анбор"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-remains-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-remains-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Контроль фактических остатков, себестоимости и критического минимума",
      "en": "Real-time stock quantities, valuation cost and minimum reorder points",
      "tj": "Назорати боқимондаи воқеӣ, арзиши аслӣ ва меъёри камтарин"
    },
    "fullInfo": {
      "ru": "Таблица остатков продукции с фильтрацией по складам, категориям и брендам. Быстрое выявление неликвидных позиций и дефицитного товара.",
      "en": "Real-time stock quantities, valuation cost and minimum reorder points",
      "tj": "Назорати боқимондаи воқеӣ, арзиши аслӣ ва меъёри камтарин"
    }
  },
  {
    "slug": "admin-list-of-clients",
    "title": {
      "ru": "База клиентов и контрагентов",
      "en": "Client Directory & CRM",
      "tj": "Пойгоҳи мизоҷон ва шарикон"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-clients-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-clients-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "История заказов, баланс задолженности, контакты и персональные скидки",
      "en": "Order history, debt balance, contact details and tailored discount tiers",
      "tj": "Таърихи фармоишҳо, қарздорӣ, тамосҳо ва тахфифҳои инфиродӣ"
    },
    "fullInfo": {
      "ru": "Единая клиентская база с детализацией покупок, историей оплат, закрепленными менеджерами и автоматическим отслеживанием кредитного лимита.",
      "en": "Order history, debt balance, contact details and tailored discount tiers",
      "tj": "Таърихи фармоишҳо, қарздорӣ, тамосҳо ва тахфифҳои инфиродӣ"
    }
  },
  {
    "slug": "admin-list-of-transport",
    "title": {
      "ru": "Транспорт и доставка",
      "en": "Transport & Fleet Logistics",
      "tj": "Нақлиёт ва интиқол"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-transport-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-transport-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Учет автопарка, водителей, маршрутов и статусов доставки заказов",
      "en": "Fleet management, drivers, delivery routes and dispatch statuses",
      "tj": "Баҳисобгирии нақлиёт, ронандагон, масирҳо ва вазъи интиқол"
    },
    "fullInfo": {
      "ru": "Модуль координации доставки заказов клиентам: назначение транспортных средств, контроль экспедиторов и учет затрат на логистику.",
      "en": "Fleet management, drivers, delivery routes and dispatch statuses",
      "tj": "Баҳисобгирии нақлиёт, ронандагон, масирҳо ва вазъи интиқол"
    }
  },
  {
    "slug": "admin-list-of-intermediaries",
    "title": {
      "ru": "Посредники и агенты",
      "en": "Brokers & Intermediaries",
      "tj": "Миёнаравон ва намояндагон"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-intermediaries-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-intermediaries-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Учет дилеров, агентских комиссий и партнерских вознаграждений",
      "en": "Tracking dealers, agency commissions and referral partner payouts",
      "tj": "Баҳисобгирии миёнаравон, мукофотпулӣ ва шарикони тиҷоратӣ"
    },
    "fullInfo": {
      "ru": "Управление агентской сетью продаж: расчет комиссионных выплат по факту успешных сделок и прозрачный отчет взаиморасчетов.",
      "en": "Tracking dealers, agency commissions and referral partner payouts",
      "tj": "Баҳисобгирии миёнаравон, мукофотпулӣ ва шарикони тиҷоратӣ"
    }
  },
  {
    "slug": "admin-add-arrival",
    "title": {
      "ru": "Оприходование товара",
      "en": "Receive Stock & Intake Form",
      "tj": "Воридоти мол ба анбор"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-form-for-adding-an-arrival-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-form-for-adding-an-arrival-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Оформление приходных накладных от поставщиков и учет себестоимости",
      "en": "Supplier intake invoice entry and cost-price allocation",
      "tj": "Барасмиятдарории воридоти мол аз таъминкунандагон ва нархи аслӣ"
    },
    "fullInfo": {
      "ru": "Удобная форма приемки новой партии товаров на склад: указание поставщика, валюты закупки, таможенных сборов и автоматический расчет входной цены.",
      "en": "Supplier intake invoice entry and cost-price allocation",
      "tj": "Барасмиятдарории воридоти мол аз таъминкунандагон ва нархи аслӣ"
    }
  },
  {
    "slug": "admin-parishes-list",
    "title": {
      "ru": "Журнал приходных накладных",
      "en": "Stock Inward Invoices",
      "tj": "Рӯйхати воридоти молҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-parishes-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-parishes-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Реестр всех поставок, статусы закрытия накладных и сверка с поставщиками",
      "en": "Register of all supplier deliveries, reconciliation and fulfillment",
      "tj": "Рӯйхати тамоми воридоти мол ва ҳисоббаробаркунӣ бо таъминкунандагон"
    },
    "fullInfo": {
      "ru": "Журнал учета входящих товарных партий с контролем взаиморасчетов с поставщиками и возможностью печати приходных ордеров.",
      "en": "Register of all supplier deliveries, reconciliation and fulfillment",
      "tj": "Рӯйхати тамоми воридоти мол ва ҳисоббаробаркунӣ бо таъминкунандагон"
    }
  },
  {
    "slug": "admin-parishes-income",
    "title": {
      "ru": "Доходы по приходам",
      "en": "Batch Inward Profitability",
      "tj": "Даромад аз рӯи воридот"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-parishes-income-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-parishes-income-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Анализ маржинальности и рентабельности конкретных партий товаров",
      "en": "Batch profitability and margin performance analysis",
      "tj": "Таҳлили даромаднокӣ ва рентабелнокии партияҳои алоҳидаи мол"
    },
    "fullInfo": {
      "ru": "Глубокая финансовая аналитика по каждой закупленной партии: сопоставление закупочной цены, розничной реализации и чистой прибыли.",
      "en": "Batch profitability and margin performance analysis",
      "tj": "Таҳлили даромаднокӣ ва рентабелнокии партияҳои алоҳидаи мол"
    }
  },
  {
    "slug": "admin-shipments-list",
    "title": {
      "ru": "Отгрузки и перемещения",
      "en": "Stock Shipments & Transfers",
      "tj": "Интиқоли мол байни анборҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-shipments-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-shipments-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Учет межскладских перемещений, списаний и отгрузок покупателям",
      "en": "Internal warehouse transfers, write-offs and customer shipments",
      "tj": "Баҳисобгирии интиқол байни анборҳо, хароҷот ва фиристодан ба муштарӣ"
    },
    "fullInfo": {
      "ru": "Контроль движения товара между филиалами компании: оформление актов перемещения, списания брака и расходных накладных.",
      "en": "Internal warehouse transfers, write-offs and customer shipments",
      "tj": "Баҳисобгирии интиқол байни анборҳо, хароҷот ва фиристодан ба муштарӣ"
    }
  },
  {
    "slug": "admin-brands",
    "title": {
      "ru": "Справочник брендов",
      "en": "Brands Directory",
      "tj": "Маълумотномаи брендҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-brands-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-brands-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Каталог торговых марок и производителей продукции",
      "en": "Catalog of commercial brands, trademarks and manufacturers",
      "tj": "Каталоги тамғаҳои молии истеҳсолкунандагон"
    },
    "fullInfo": {
      "ru": "Классификация номенклатуры по брендам для быстрой фильтрации в каталоге и построения отчетов популярности торговых марок.",
      "en": "Catalog of commercial brands, trademarks and manufacturers",
      "tj": "Каталоги тамғаҳои молии истеҳсолкунандагон"
    }
  },
  {
    "slug": "admin-categories",
    "title": {
      "ru": "Категории товаров",
      "en": "Product Categories",
      "tj": "Категорияҳои молҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-categories-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-categories-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Иерархическая структура товарного каталога",
      "en": "Hierarchical catalog category tree structure",
      "tj": "Сохтори категорияҳои каталоги молҳо"
    },
    "fullInfo": {
      "ru": "Создание и редактирование категорий каталога для логичного распределения тысяч товарных позиций в учетной системе и на сайте.",
      "en": "Hierarchical catalog category tree structure",
      "tj": "Сохтори категорияҳои каталоги молҳо"
    }
  },
  {
    "slug": "admin-subcategories",
    "title": {
      "ru": "Подкатегории товаров",
      "en": "Product Subcategories",
      "tj": "Зеркатегорияҳои молҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-subcategories-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-subcategories-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Детализация товарных групп для точного поиска и аналитики",
      "en": "Subcategory breakdown for accurate search and reporting",
      "tj": "Тафсилоти гурӯҳи молҳо барои ҷустуҷӯи дақиқ ва ҳисобот"
    },
    "fullInfo": {
      "ru": "Многоуровневая вложенность категорий: создание узких товарных сегментов с наследованием общих свойств и наценок.",
      "en": "Subcategory breakdown for accurate search and reporting",
      "tj": "Тафсилоти гурӯҳи молҳо барои ҷустуҷӯи дақиқ ва ҳисобот"
    }
  },
  {
    "slug": "admin-accounts",
    "title": {
      "ru": "Расчетные счета и кошельки",
      "en": "Bank Accounts & Wallets",
      "tj": "Суратҳисобҳои бонкӣ ва ҳамёнҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-accounts-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-accounts-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Учет безналичных средств в национальной и иностранной валюте",
      "en": "Non-cash bank accounts and electronic wallet tracking",
      "tj": "Баҳисобгирии маблағҳои ғайринақдӣ бо асъори гуногун"
    },
    "fullInfo": {
      "ru": "Реестр банковских счетов компании (TJS, USD, EUR, RUB), электронных кошельков и расчетных счетов с отслеживанием банковских выписок.",
      "en": "Non-cash bank accounts and electronic wallet tracking",
      "tj": "Баҳисобгирии маблағҳои ғайринақдӣ бо асъори гуногун"
    }
  },
  {
    "slug": "admin-cash-registers",
    "title": {
      "ru": "Кассы и точки продаж",
      "en": "Cash Registers & Points of Sale",
      "tj": "Хазинаҳо ва нуқтаҳои фурӯш"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-list-of-cash-registers-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-list-of-cash-registers-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Кассовые аппараты, смены кассиров и наличные деньги в точках",
      "en": "Cash drawers, cashier shift tracking and physical cash on hand",
      "tj": "Дастгоҳҳои хазинавӣ, бастҳои корӣ ва пули нақд дар нуқтаҳо"
    },
    "fullInfo": {
      "ru": "Управление физическими кассами торговых точек: открытие и закрытие кассовых смен, инкассация, внесение и снятие наличных.",
      "en": "Cash drawers, cashier shift tracking and physical cash on hand",
      "tj": "Дастгоҳҳои хазинавӣ, бастҳои корӣ ва пули нақд дар нуқтаҳо"
    }
  },
  {
    "slug": "admin-transactions",
    "title": {
      "ru": "Журнал финансовых транзакций",
      "en": "Financial Transactions Ledger",
      "tj": "Рӯзномаи муомилоти молиявӣ"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-transactions-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-transactions-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Полная лента всех приходов, расходов и переводов компании",
      "en": "Complete timeline of all business inflows, outflows and internal transfers",
      "tj": "Рӯйхати пурраи даромадҳо, хароҷот ва интиқоли маблағҳои ширкат"
    },
    "fullInfo": {
      "ru": "Единый журнал движения денег с фильтрами по датам, счетам, кассам, контрагентам и статьям доходов и расходов.",
      "en": "Complete timeline of all business inflows, outflows and internal transfers",
      "tj": "Рӯйхати пурраи даромадҳо, хароҷот ва интиқоли маблағҳои ширкат"
    }
  },
  {
    "slug": "admin-add-transaction",
    "title": {
      "ru": "Проведение финансовой операции",
      "en": "Record Financial Transaction",
      "tj": "Гузаронидани амалиёти молиявӣ"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-transaction-addition-form-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-transaction-addition-form-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Форма быстрого внесения прихода, расхода или перемещения между счетами",
      "en": "Entry form for cash receipts, disbursements or inter-account transfers",
      "tj": "Шакли бақайдгирии даромад, хароҷот ё интиқол байни суратҳисобҳо"
    },
    "fullInfo": {
      "ru": "Интуитивный интерфейс проведения платежей: выбор типа операции, статьи бюджета, прикрепление чеков и автоматический пересчет валюты.",
      "en": "Entry form for cash receipts, disbursements or inter-account transfers",
      "tj": "Шакли бақайдгирии даромад, хароҷот ё интиқол байни суратҳисобҳо"
    }
  },
  {
    "slug": "admin-pending-payments",
    "title": {
      "ru": "Платежи в ожидании",
      "en": "Pending Payments & Clearing",
      "tj": "Пардохтҳои дар интизорӣ"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-payments-pending-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-payments-pending-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Контроль неоплаченных счетов, предоплат и платежных поручений",
      "en": "Tracking unpaid invoices, down-payments and pending bank orders",
      "tj": "Назорати ҳисобномаҳои пардохтнашуда ва супоришҳои бонкӣ"
    },
    "fullInfo": {
      "ru": "Модуль контроля кассовых разрывов: реестр запланированных платежей поставщикам и ожидаемых поступлений от дебиторов.",
      "en": "Tracking unpaid invoices, down-payments and pending bank orders",
      "tj": "Назорати ҳисобномаҳои пардохтнашуда ва супоришҳои бонкӣ"
    }
  },
  {
    "slug": "admin-expenses",
    "title": {
      "ru": "Журнал расходов бизнеса",
      "en": "Operating Expenses Ledger",
      "tj": "Рӯзномаи хароҷоти тиҷорат"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-expenses-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-expenses-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Учет операционных, коммерческих и хозяйственных затрат",
      "en": "Operating, commercial and administrative expense monitoring",
      "tj": "Баҳисобгирии хароҷоти амалиётӣ, маъмурӣ ва хоҷагидорӣ"
    },
    "fullInfo": {
      "ru": "Структурированный учет расходов: аренда, коммунальные услуги, логистика, налоги, реклама и закупка расходных материалов.",
      "en": "Operating, commercial and administrative expense monitoring",
      "tj": "Баҳисобгирии хароҷоти амалиётӣ, маъмурӣ ва хоҷагидорӣ"
    }
  },
  {
    "slug": "admin-add-expense",
    "title": {
      "ru": "Добавление статьи расхода",
      "en": "Record Expense Entry",
      "tj": "Сабти хароҷоти нав"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-form-for-adding-expenses-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-form-for-adding-expenses-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Фиксация затрат с указанием категории, кассы списания и обоснования",
      "en": "Logging expenses with category tagging, payment source and receipt notes",
      "tj": "Сабти хароҷот бо нишон додани категория, хазина ва сабаб"
    },
    "fullInfo": {
      "ru": "Удобная форма списания средств: выбор источника финансирования (касса/банк), статьи расходов и назначение материально ответственного лица.",
      "en": "Logging expenses with category tagging, payment source and receipt notes",
      "tj": "Сабти хароҷот бо нишон додани категория, хазина ва сабаб"
    }
  },
  {
    "slug": "admin-summary-report",
    "title": {
      "ru": "Сводный финансовый отчет (P&L)",
      "en": "Summary Financial Statement (P&L)",
      "tj": "Ҳисоботи ҷамъбастии молиявӣ (P&L)"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-reports-summary-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-reports-summary-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Отчет о прибылях и убытках, чистая рентабельность и показатели эффективности",
      "en": "Profit and loss report, net margins and business operating KPIs",
      "tj": "Ҳисобот оид ба фоида ва зарар, рентабелнокӣ ва самаранокии тиҷорат"
    },
    "fullInfo": {
      "ru": "Ключевой управленческий отчет для собственников бизнеса: выручка, себестоимость, валовая прибыль, постоянные и переменные расходы, чистая прибыль.",
      "en": "Profit and loss report, net margins and business operating KPIs",
      "tj": "Ҳисобот оид ба фоида ва зарар, рентабелнокӣ ва самаранокии тиҷорат"
    }
  },
  {
    "slug": "admin-client-reports",
    "title": {
      "ru": "Финансовый отчет по клиентам",
      "en": "Client Financial Performance Report",
      "tj": "Ҳисоботи молиявӣ аз рӯи мизоҷон"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-reports-clients-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-reports-clients-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Анализ выручки, среднего чека и маржинальности в разрезе клиентов",
      "en": "Revenue analytics, average order value and profitability per customer",
      "tj": "Таҳлили даромад, чеки миёна ва фоиданокӣ барои ҳар як мизоҷ"
    },
    "fullInfo": {
      "ru": "ABC/XYZ анализ клиентской базы: выявление ключевых партнеров, приносящих основной объем прибыли компании, и оценка регулярности покупок.",
      "en": "Revenue analytics, average order value and profitability per customer",
      "tj": "Таҳлили даромад, чеки миёна ва фоиданокӣ барои ҳар як мизоҷ"
    }
  },
  {
    "slug": "admin-debtors-report",
    "title": {
      "ru": "Отчет по дебиторам (Должники)",
      "en": "Accounts Receivable (Debtors)",
      "tj": "Ҳисоботи дебиторон (Қарздорон)"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-reports-debtors-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-reports-debtors-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Контроль дебиторской задолженности, сроки просрочки и графики оплат",
      "en": "Accounts receivable aging, overdue tracking and payment schedules",
      "tj": "Назорати қарзҳои дебиторӣ, мӯҳлатҳои гузашта ва нақшаи пардохт"
    },
    "fullInfo": {
      "ru": "Управление дебиторской задолженностью: автоматический расчет дней просрочки, печать актов сверки и уведомления клиентам о необходимости оплаты.",
      "en": "Accounts receivable aging, overdue tracking and payment schedules",
      "tj": "Назорати қарзҳои дебиторӣ, мӯҳлатҳои гузашта ва нақшаи пардохт"
    }
  },
  {
    "slug": "admin-creditors-report",
    "title": {
      "ru": "Отчет по кредиторам (Обязательства)",
      "en": "Accounts Payable (Creditors)",
      "tj": "Ҳисоботи кредиторон (Уҳдадориҳо)"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-reports-creditors-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-reports-creditors-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Задолженность перед поставщиками, график погашения и кредитные лимиты",
      "en": "Outstanding supplier payables, settlement timeline and credit limits",
      "tj": "Қарздорӣ дар назди таъминкунандагон ва ҷадвали пардохт"
    },
    "fullInfo": {
      "ru": "Мониторинг кредиторских обязательств перед поставщиками сырья и товаров: предотвращение срывов поставок и контроль сроков отсрочки платежа.",
      "en": "Outstanding supplier payables, settlement timeline and credit limits",
      "tj": "Қарздорӣ дар назди таъминкунандагон ва ҷадвали пардохт"
    }
  },
  {
    "slug": "admin-cash-register-reports",
    "title": {
      "ru": "Кассовые отчеты и кассовая книга",
      "en": "Cash Register Reports & Z-Reports",
      "tj": "Ҳисоботи хазинавӣ ва дафтари хазина"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-cash-register-reports-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-cash-register-reports-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Z-отчеты, остаток наличных в кассах, инкассация и расхождения",
      "en": "Daily cash reconciliation, Z-reports, collections and variance tracking",
      "tj": "Z-ҳисоботҳо, пули нақди хазина, инкассатсия ва санҷиши бастҳо"
    },
    "fullInfo": {
      "ru": "Детальный аудит кассовой дисциплины: выручка по сменам, соотношение наличных и безналичных оплат через POS-терминалы, сверка с кассирами.",
      "en": "Daily cash reconciliation, Z-reports, collections and variance tracking",
      "tj": "Z-ҳисоботҳо, пули нақди хазина, инкассатсия ва санҷиши бастҳо"
    }
  },
  {
    "slug": "admin-account-reports",
    "title": {
      "ru": "Отчеты по банковским счетам",
      "en": "Bank Account Statements & Flow",
      "tj": "Ҳисоботҳои суратҳисобҳои бонкӣ"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-account-reports-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-account-reports-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Движение средств по расчетным счетам, комиссии банков и курсовая разница",
      "en": "Cash flows across bank accounts, fees and currency revaluation gains/losses",
      "tj": "Ҳаракати маблағ дар суратҳисобҳо, комиссия ва тафовути асъор"
    },
    "fullInfo": {
      "ru": "Анализ безналичных денежных потоков: синхронизация с банковскими выписками, учет эквайринговых комиссий и контроль остатков на расчетных счетах.",
      "en": "Cash flows across bank accounts, fees and currency revaluation gains/losses",
      "tj": "Ҳаракати маблағ дар суратҳисобҳо, комиссия ва тафовути асъор"
    }
  },
  {
    "slug": "admin-transaction-reports",
    "title": {
      "ru": "Сводная ведомость транзакций",
      "en": "Consolidated Transaction Ledger",
      "tj": "Ҳисоботи ҷамъбастии муомилот"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-transaction-reports-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-transaction-reports-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Сквозной реестр всех проводок бизнеса с расширенными фильтрами",
      "en": "Consolidated transaction registry with multi-criteria filtering",
      "tj": "Рӯйхати умумии ҳамаи амалиётҳои тиҷорат бо филтрҳои муфассал"
    },
    "fullInfo": {
      "ru": "Универсальный финансовый отчет для главного бухгалтера и аудиторов: экспорт в Excel/PDF, группировка по статьям и ответственным центрам затрат.",
      "en": "Consolidated transaction registry with multi-criteria filtering",
      "tj": "Рӯйхати умумии ҳамаи амалиётҳои тиҷорат бо филтрҳои муфассал"
    }
  },
  {
    "slug": "admin-currencies",
    "title": {
      "ru": "Мультивалютность и курсы валют",
      "en": "Multi-Currency Management & Rates",
      "tj": "Асъорҳо ва қурби асъор"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-settings-currencies-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-settings-currencies-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Настройка курсов Национального банка, коммерческих курсов и кросс-курсов",
      "en": "National bank exchange rates, commercial rates and cross-currency parity",
      "tj": "Танзими қурби Бонки миллӣ, қурбҳои тиҷоратӣ ва табдили асъор"
    },
    "fullInfo": {
      "ru": "Поддержка мультивалютного учета: автоматическое обновление курсов валют, расчет курсовой разницы и ведение взаиморасчетов в любой мировой валюте.",
      "en": "National bank exchange rates, commercial rates and cross-currency parity",
      "tj": "Танзими қурби Бонки миллӣ, қурбҳои тиҷоратӣ ва табдили асъор"
    }
  },
  {
    "slug": "admin-units",
    "title": {
      "ru": "Единицы измерения номенклатуры",
      "en": "Units of Measurement (UOM)",
      "tj": "Воҳидҳои ченаки молҳо"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-settings-unit-of-measurement-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-settings-unit-of-measurement-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Справочник единиц: штуки, килограммы, метры, упаковки и коэффициенты",
      "en": "UOM catalog: pieces, kilograms, meters, boxes and conversion factors",
      "tj": "Маълумотномаи воҳидҳо: дона, килограмм, метр, баста ва коэффисиентҳо"
    },
    "fullInfo": {
      "ru": "Настройка справочника единиц измерения с поддержкой коэффициентов пересчета (например, продажа упаковками при складском учете в штуках).",
      "en": "UOM catalog: pieces, kilograms, meters, boxes and conversion factors",
      "tj": "Маълумотномаи воҳидҳо: дона, килограмм, метр, баста ва коэффисиентҳо"
    }
  },
  {
    "slug": "admin-associations",
    "title": {
      "ru": "Ассоциации и системные связи",
      "en": "Entity Associations & Mappings",
      "tj": "Алоқаҳо ва танзимоти системавӣ"
    },
    "imageSrc": "/images/projects/mablagtj/admin/admin-settings-association-list-page.png",
    "BannerSrc": "/images/projects/mablagtj/admin/admin-settings-association-list-page.png",
    "imageFit": "contain",
    "shortInfo": {
      "ru": "Связывание касс со складами, закрепление менеджеров и правила учета",
      "en": "Linking cash points to warehouses, staff assignments and business rules",
      "tj": "Пайвасти хазинаҳо ба анборҳо, таъини мудирон ва қоидаҳои баҳисобгирӣ"
    },
    "fullInfo": {
      "ru": "Гибкая матрица системных ассоциаций: закрепление касс за конкретными торговыми точками, назначение складов по умолчанию и автоматизация списаний.",
      "en": "Linking cash points to warehouses, staff assignments and business rules",
      "tj": "Пайвасти хазинаҳо ба анборҳо, таъини мудирон ва қоидаҳои баҳисобгирӣ"
    }
  }
];
