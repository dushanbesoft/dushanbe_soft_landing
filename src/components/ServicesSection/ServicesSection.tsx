import React from 'react';
import initTranslations from '@/app/i18n';
import styles from './ServicesSection.module.css';
import { getServices } from '../../services/dataService';

const i18nNamespaces = ['common'];

export default async function ServicesSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  const services = await getServices();
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titles}>
            <span className={styles.subtitle}>{t('services.subtitle', 'Что мы делаем')}</span>
            <h2 className={styles.mainTitle}>{t('services.title', 'Полный спектр IT-услуг')}</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t(`services.list.${index}.title`, service.title)}</h3>
                <p className={styles.cardDescription}>{t(`services.list.${index}.description`, service.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
