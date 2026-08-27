'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PartnersSection.module.css';



export default function PartnersSection({ partnersData = [] }: { partnersData?: any[] }) {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(1);

  const nextPartner = () => {
    setActiveIndex((prev) => (prev + 1) % partnersData.length);
  };

  const prevPartner = () => {
    setActiveIndex((prev) => (prev - 1 + partnersData.length) % partnersData.length);
  };

  const activePartner = partnersData.length > 0 ? partnersData[activeIndex] : null;

  if (!partnersData || partnersData.length === 0) {
    return null;
  }

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
              <span className={styles.detailTitleText}>{t(`partners.list.${activeIndex}.name`, activePartner.name) as string}</span>
            </div>
            <span className={styles.detailSector}>{t(`partners.list.${activeIndex}.sector`, activePartner.sector) as string}</span>
            <div className={styles.divider}></div>
            <p className={styles.detailDesc}>{t(`partners.list.${activeIndex}.description`, activePartner.description) as string}</p>
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
