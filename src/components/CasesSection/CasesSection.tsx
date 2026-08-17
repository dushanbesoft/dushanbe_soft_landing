import React from 'react';
import styles from './CasesSection.module.css';
import CaseCard from './CaseCard';

const ArrowUpIcon = () => (
  <svg className={styles.btnIcon} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z" fill="url(#paint0_linear_10_251)"/>
    <defs>
      <linearGradient id="paint0_linear_10_251" x1="6.1875" y1="15.7496" x2="9.97473" y2="4.28374" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5EB5F0"/>
        <stop offset="1" stopColor="#02704F"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function CasesSection() {
  const sundukTags = [
    "PHP-Framework Kohana", "JavaScript", "HTML5", "CSS3", "JQuery", "Underscore.js", "Сервер БД MySQL"
  ];
  const sinamoTags = [
    "PHP-Framework Kohana", "JavaScript", "HTML5", "CSS3", "JQuery", "Underscore.js", "Сервер БД MySQL"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titles}>
            <span className={styles.subtitle}>Кейсы</span>
            <h2 className={styles.mainTitle}>Проекты, которыми мы гордимся</h2>
          </div>
          <a href="#" className={styles.allCasesBtn}>
            <span className={styles.btnText}>Все кейсы</span>
            <ArrowUpIcon />
          </a>
        </div>

        <div className={styles.cardsGrid}>
          <CaseCard 
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/576d5bf50b03bd7f408e9166502e1fc6075e7145"
            year="2020"
            title="SundukTV"
            description="Большое количество ТВ каналов в отличном качестве без привязки к антенне, компьютеру, кабельному или спутниковому телевидению."
            tags={sundukTags}
          />
          <CaseCard 
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/b0f79317847c7b8de7842d53f59b28a3f46ca625"
            year="2021"
            title="SinamoTV"
            description="Программа для кабельного телевидения предназначена для организации эффективного учета абонентов кабельного телевидения, их запросов."
            tags={sinamoTags}
          />
          <CaseCard 
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/b0f79317847c7b8de7842d53f59b28a3f46ca625"
            year="2022"
            title="SinamoTV Pro"
            description="Программа для кабельного телевидения предназначена для организации эффективного учета абонентов кабельного телевидения, их запросов."
            tags={sinamoTags}
          />
        </div>
      </div>
    </section>
  );
}
