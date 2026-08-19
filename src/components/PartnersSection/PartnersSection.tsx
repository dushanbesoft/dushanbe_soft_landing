'use client';
import React, { useState } from 'react';
import styles from './PartnersSection.module.css';

const partnersData = [
  {
    id: 1,
    name: "Президент РТ",
    logoSmall: "/icons/partners/prezedent.svg",
    logoLarge: "/icons/partners/prezedent.svg",
    sector: "Государственный сектор",
    description: "Официальный сайт Президента Республики Таджикистан – главный государственный веб-портал страны."
  },
  {
    id: 2,
    name: "Digital Tajikistan",
    logoSmall: "/icons/partners/pic.svg",
    logoLarge: "/icons/partners/pic.svg",
    sector: "Государственный сектор",
    description: "Государственный портал цифровых услуг Таджикистана. Единая точка доступа к электронным государственным услугам."
  },
  {
    id: 3,
    name: "СХДО",
    logoSmall: "/icons/partners/shdo.svg",
    logoLarge: "/icons/partners/shdo.svg",
    sector: "Государственный сектор",
    description: "Внутренняя информационная система для автоматизации деятельности пожарной службы и учета чрезвычайных ситуаций."
  },
  {
    id: 4,
    name: "МегаФон Таджикистан",
    logoSmall: "/icons/partners/megafon.svg",
    logoLarge: "/icons/partners/megafon.svg",
    sector: "Телекоммуникации",
    description: "Один из ведущих операторов мобильной связи и провайдер цифровых услуг в Таджикистане."
  },
  {
    id: 5,
    name: "Телекомм Технолоджи",
    logoSmall: "/icons/partners/ttl.svg",
    logoLarge: "/icons/partners/ttl.svg",
    sector: "Телекоммуникации",
    description: "Телекоммуникационная компания и интернет-провайдер, предоставляющий услуги высокоскоростного интернета и IP-телефонии."
  },
  {
    id: 6,
    name: "Somon TV",
    logoSmall: "/icons/partners/somontv.svg",
    logoLarge: "/icons/partners/somontv.svg",
    sector: "Медиа и телевидение",
    description: "Платформа OTT-стриминга для крупнейшей телекомпании Таджикистана, обеспечивающая прямые трансляции и архив VoD."
  },
  {
    id: 7,
    name: "Mavji Somon",
    logoSmall: "/icons/partners/mavjisomon.svg",
    logoLarge: "/icons/partners/mavjisomon.svg",
    sector: "Медиа и развлечения",
    description: "Платформа онлайн и сервис потокового вещания для просмотра фильмов, сериалов и телеканалов."
  },
  {
    id: 8,
    name: "Sunduk TV",
    logoSmall: "/icons/partners/sunduk.svg",
    logoLarge: "/icons/partners/sunduk.svg",
    sector: "Медиа и развлечения",
    description: "Сервис потокового вещания для просмотра огромной коллекции фильмов, сериалов и популярных телеканалов."
  },
  {
    id: 9,
    name: "ТВ Синамо",
    logoSmall: "/icons/partners/sinamo.svg",
    logoLarge: "/icons/partners/sinamo.svg",
    sector: "Медиа и телевидение",
    description: "Государственный телеканал, посвященный кинематографу и культурным программам."
  },
  {
    id: 10,
    name: "Новое Радио",
    logoSmall: "/icons/partners/newradio.svg",
    logoLarge: "/icons/partners/newradio.svg",
    sector: "Медиа и радиовещание",
    description: "Популярная радиостанция, предлагающая современные музыкальные хиты и развлекательные программы."
  },
  {
    id: 11,
    name: "Радио Памир",
    logoSmall: "/icons/partners/pamir.svg",
    logoLarge: "/icons/partners/pamir.svg",
    sector: "Медиа и радиовещание",
    description: "Радиостанция, транслирующая национальную музыку и новости, объединяющая слушателей по всему региону."
  },
  {
    id: 12,
    name: "iTrans",
    logoSmall: "/icons/partners/itrans.svg",
    logoLarge: "/icons/partners/itrans.svg",
    sector: "Логистика",
    description: "Инновационная платформа для управления логистикой и транспортными потоками."
  },
  {
    id: 13,
    name: "Rushd",
    logoSmall: "/icons/partners/rushd.svg",
    logoLarge: "/icons/partners/rushd.svg",
    sector: "Сфера услуг",
    description: "Организация, предоставляющая надежные и современные решения для бизнеса."
  },
  {
    id: 14,
    name: "Zenith",
    logoSmall: "/icons/partners/zenith.svg",
    logoLarge: "/icons/partners/zenith.svg",
    sector: "Сфера услуг",
    description: "Современная компания, предоставляющая высококачественные услуги для корпоративных и частных клиентов."
  }
];

export default function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(1); // default index 1 (Somon TV)

  const nextPartner = () => {
    setActiveIndex((prev) => (prev + 1) % partnersData.length);
  };

  const prevPartner = () => {
    setActiveIndex((prev) => (prev - 1 + partnersData.length) % partnersData.length);
  };

  const activePartner = partnersData[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Наши партнеры</span>
          <h2 className={styles.title}>Нам доверяют ведущие организации</h2>
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
              <span className={styles.detailTitleText}>{activePartner.name}</span>
            </div>
            <span className={styles.detailSector}>{activePartner.sector}</span>
            <div className={styles.divider}></div>
            <p className={styles.detailDesc}>{activePartner.description}</p>
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
