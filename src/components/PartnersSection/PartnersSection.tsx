'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PartnersSection.module.css';

const partnersData = [
  {
    id: 1,
    name: "Президент ҶТ",
    logoSmall: "/icons/partners/prezedent.svg",
    logoLarge: "/icons/partners/prezedent.svg",
    sector: "president.tj",
    description: "Сомонаи расмии Президенти Ҷумҳурии Тоҷикистон – веб-портали асосии давлатии кишвар мебошад. Платформа интишори саривақтии хабарҳои расмӣ, фармонҳо, суханрониҳо ва гузоришҳои аксиро аз чорабиниҳои муҳимми давлатӣ бо чанд забон таъмин намуда, ҳамчун сарчашмаи боэътимоди иттилоот хизмат мекунад."
  },
  {
    id: 2,
    name: "Digital Tajikistan",
    logoSmall: "/icons/partners/pic.svg",
    logoLarge: "/icons/partners/pic.svg",
    sector: "DT.TJ",
    description: "Государственный портал цифровых услуг Таджикистана, представляющий собой единую точку доступа к электронным государственным услугам. Платформа призвана упростить взаимодействие граждан и бизнеса с государственными органами, повышая прозрачность и эффективность предоставления административных сервисов."
  },
  {
    id: 3,
    name: "СХДО",
    logoSmall: "/icons/partners/shdo.svg",
    logoLarge: "/icons/partners/shdo.svg",
    sector: "mahzan.tj",
    description: "Маҳзани ягонаи электронӣ — это специализированная внутренняя информационная система для автоматизации оперативной деятельности пожарной службы. Платформа обеспечивает надежный учет чрезвычайных ситуаций, ведение кадрового учета и безопасный электронный документооборот между подразделениями ведомства."
  },
  {
    id: 4,
    name: "Рушди Кӯҳистон",
    logoSmall: "/icons/partners/rushd.svg",
    logoLarge: "/icons/partners/rushd.svg",
    sector: "rushdikuhiston.tj",
    description: "Rushdi Kuhiston Invest Project — масштабный инвестиционный проект, стратегической целью которого является поддержка и всестороннее развитие горных регионов. Инициатива способствует улучшению инфраструктуры, повышению уровня жизни местного населения и созданию новых рабочих мест."
  },
  {
    id: 5,
    name: "Megafon",
    logoSmall: "/icons/partners/megafon.svg",
    logoLarge: "/icons/partners/megafon.svg",
    sector: "megafon.tj",
    description: "Один из ведущих и наиболее технологичных операторов мобильной связи в Таджикистане. Компания предоставляет населению и бизнесу широкий спектр цифровых услуг, включая высокоскоростной мобильный интернет, передовые финансовые сервисы и инновационные решения для автоматизации бизнеса."
  },
  {
    id: 6,
    name: "Телеком",
    logoSmall: "/icons/partners/ttl.svg",
    logoLarge: "/icons/partners/ttl.svg",
    sector: "ttl.tj",
    description: "Исторически первый интернет-провайдер в Таджикистане, продолжающий оставаться одним из лидеров телекоммуникационного рынка. Компания специализируется на предоставлении высокоскоростного широкополосного доступа в интернет, услуг современной IP-телефонии и комплексных решений для корпоративных клиентов."
  },
  {
    id: 7,
    name: "Mavji Somon",
    logoSmall: "/icons/partners/mavjisomon.svg",
    logoLarge: "/icons/partners/mavjisomon.svg",
    sector: "mavjisomon.tj",
    description: "Один из крупнейших и наиболее динамично развивающихся телепровайдеров в Республике Таджикистан, охватывающий своими качественными услугами крупнейшие города страны. Платформа предлагает абонентам широкий выбор телеканалов, интерактивные сервисы и стабильный доступ к мультимедийному контенту."
  },
  {
    id: 8,
    name: "Navo",
    logoSmall: "/icons/partners/newradio.svg",
    logoLarge: "/icons/partners/newradio.svg",
    sector: "navo.tj/ru",
    description: "Радио «Navo» (96.5 FM) — «Мотив Вашего настроения!». Это одна из самых популярных музыкально-развлекательных радиостанций в стране, которая ежедневно радует своих слушателей свежими хитами, интересными авторскими программами, новостными выпусками и интерактивными шоу."
  },
  {
    id: 9,
    name: "Somon TV",
    logoSmall: "/icons/partners/somontv.svg",
    logoLarge: "/icons/partners/somontv.svg",
    sector: "somon.tv",
    description: "Передовая платформа OTT-стриминга, разработанная для крупнейшей телекомпании Таджикистана. Сервис обеспечивает стабильные прямые трансляции в высоком разрешении, предоставляет доступ к обширному архиву видео по запросу (VoD) и поддерживает удобный мультиэкранный просмотр для пользователей."
  },
  {
    id: 10,
    name: "IMRON NAKLIET",
    logoSmall: "/icons/partners/itrans.svg",
    logoLarge: "/icons/partners/itrans.svg",
    sector: "imronnakliet.tj",
    description: "Инновационная логистическая компания, специализирующаяся на предоставлении надежных и современных услуг грузоперевозок. Благодаря использованию передовых технологий в управлении цепями поставок, компания гарантирует своим клиентам безопасную, своевременную и экономически эффективную доставку грузов."
  },
  {
    id: 11,
    name: "Sunduk TV",
    logoSmall: "/icons/partners/sunduk.svg",
    logoLarge: "/icons/partners/sunduk.svg",
    sector: "sunduk.tv",
    description: "Современное интернет-телевидение Sunduk.TV, открывающее доступ к огромному миру мультимедиа. Платформа позволяет зрителям смотреть более 650 русскоязычных и международных телеканалов, а также обширную библиотеку фильмов и сериалов онлайн в безупречном качестве HD и UltraHD."
  },
  {
    id: 12,
    name: "Памир Энерджи",
    logoSmall: "/icons/partners/pamir.svg",
    logoLarge: "/icons/partners/pamir.svg",
    sector: "pamirenergy.com",
    description: "Стратегическая энергетическая компания, миссией которой является обеспечение надежного, чистого и бесперебойного электроснабжения на Памире. Компания активно инвестирует в комплексное развитие энергетической инфраструктуры региона и внедрение устойчивых экологических технологий."
  },
  {
    id: 13,
    name: "Zenith Valuation",
    logoSmall: "/icons/partners/zenith.svg",
    logoLarge: "/icons/partners/zenith.svg",
    sector: "zenithvaluation.com",
    description: "Профессиональная независимая оценочная компания, пользующаяся высоким доверием на рынке. Эксперты предоставляют полный спектр квалифицированных услуг по оценке недвижимости, оборудования, различных активов и бизнеса для обеспечения прозрачности финансовых операций и инвестиций."
  },
  {
    id: 14,
    name: "СинамоТВ",
    logoSmall: "/icons/partners/sinamo.svg",
    logoLarge: "/icons/partners/sinamo.svg",
    sector: "sinamo.tv",
    description: "Муассисаи давлатии телевизиони «Синамо» — это авторитетный государственный телеканал, полностью посвященный развитию и популяризации национального кинематографа. В эфире телеканала регулярно транслируются лучшие образцы отечественного кино, культурные программы и документальные фильмы об искусстве."
  }
];

export default function PartnersSection() {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(1);

  const nextPartner = () => {
    setActiveIndex((prev) => (prev + 1) % partnersData.length);
  };

  const prevPartner = () => {
    setActiveIndex((prev) => (prev - 1 + partnersData.length) % partnersData.length);
  };

  const activePartner = partnersData[activeIndex];

  return (
    <section id="partners" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>{t('partners.subtitle', 'Наши партнеры')}</span>
          <h2 className={styles.title}>{t('partners.title', 'Нам доверяют ведущие организации')}</h2>
        </div>

        <div className={styles.logosCarousel}>
          {partnersData.map((partner, idx) => (
            <div 
              key={partner.id} 
              className={`${styles.logoItem} ${idx === activeIndex ? styles.logoActive : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={partner.logoSmall} alt={partner.name} className={styles.logoImg} />
            </div>
          ))}
        </div>

        <div className={styles.detailCard}>
          <div className={styles.detailLeft}>
            <div className={styles.detailTitleBadge}>
              <span className={styles.detailTitleText}>{t(`partners.list.${activeIndex}.name`, activePartner.name)}</span>
            </div>
            <span className={styles.detailSector}>{t(`partners.list.${activeIndex}.sector`, activePartner.sector)}</span>
            <div className={styles.divider}></div>
            <p className={styles.detailDesc}>{t(`partners.list.${activeIndex}.description`, activePartner.description)}</p>
          </div>

          <div className={styles.detailRight}>
            <div className={styles.navigation}>
              <button className={styles.navBtn} onClick={prevPartner}>
                <svg width="102" height="53" viewBox="0 0 102 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="-0.5" y="0.5" width="101" height="52" rx="26" transform="matrix(-1 0 0 1 101 0)" stroke="#7B808A"/>
                  <path d="M64 26.5H38M49.7 34L38 26.5L49.7 19" stroke="#7B808A" strokeWidth="2"/>
                </svg>
              </button>
              <button className={`${styles.navBtn} ${styles.navBtnActive}`} onClick={nextPartner}>
                <svg width="102" height="53" viewBox="0 0 102 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="101" height="52" rx="26" stroke="white"/>
                  <path d="M38 26.5H64M52.3 34L64 26.5L52.3 19" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>
            <div className={styles.largeLogoWrapper}>
              <img src={activePartner.logoLarge} alt={activePartner.name} className={styles.largeLogo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
