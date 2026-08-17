'use client';
import React, { useState } from 'react';
import styles from './PartnersSection.module.css';

const partnersData = [
  {
    id: 1,
    name: "Tcell",
    logoSmall: "https://api.builder.io/api/v1/image/assets/TEMP/3fffdfd2ae2ec4a52292eb89f2ec350efce35b6f",
    logoLarge: "https://api.builder.io/api/v1/image/assets/TEMP/3fffdfd2ae2ec4a52292eb89f2ec350efce35b6f",
    sector: "Сфера услуг",
    description: "Телекоммуникационная компания, предоставляющая широкий спектр услуг сотовой связи и мобильного интернета."
  },
  {
    id: 2,
    name: "Somon TV",
    logoSmall: "https://api.builder.io/api/v1/image/assets/TEMP/e245ba453db3d51833599348ce257cf1745c1169",
    logoLarge: "https://api.builder.io/api/v1/image/assets/TEMP/8cf6276d4a8a9c55e27e3e7c8a188960bc6df200",
    sector: "Организация логистики",
    description: "Организация специализируется на эффективном управлении и координации грузоперевозок и поставок для различных компаний. Благодаря оптимизированным логистическим решениям и передовым технологиям, она обеспечивает клиентам надежное и эффективное перемещение товаров по всей цепочке поставок."
  },
  {
    id: 3,
    name: "Ориёнбанк",
    logoSmall: "https://api.builder.io/api/v1/image/assets/TEMP/9fc44446caa1764385363348536b656caeb36c6b",
    logoLarge: "https://api.builder.io/api/v1/image/assets/TEMP/9fc44446caa1764385363348536b656caeb36c6b",
    sector: "Финансовые технологии",
    description: "Один из ведущих банков страны, активно внедряющий современные цифровые решения."
  },
  {
    id: 4,
    name: "Alif",
    logoSmall: "https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963",
    logoLarge: "https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963",
    sector: "Финтех и Электронная коммерция",
    description: "Инновационная технологическая компания, предоставляющая удобные финансовые сервисы."
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
