import React from 'react';
import initTranslations from '@/app/i18n';
import styles from './ProcessSection.module.css';
import { getSteps } from '../../services/dataService';

const i18nNamespaces = ['common'];

export default async function ProcessSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  const steps = await getSteps();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titles}>
            <span className={styles.subtitle}>{t('process.subtitle', 'Как мы работаем')}</span>
            <h2 className={styles.mainTitle}>{t('process.title', 'Процесс разработки')}</h2>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.grid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {React.isValidElement(step.icon) ? React.cloneElement(step.icon as React.ReactElement<any>, { className: styles.icon }) : step.icon as React.ReactNode}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{t(`process.list.${index}.title`, step.title)}</h3>
                  <p className={styles.cardDesc}>{t(`process.list.${index}.description`, step.description)}</p>
                  <div className={styles.badge}>
                    <span className={styles.badgeText}>{t(`process.list.${index}.duration`, step.duration)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
