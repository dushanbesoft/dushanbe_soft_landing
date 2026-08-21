import React from 'react';
import styles from './HeroMarquee.module.css';

const defaultMarqueeItems = [
  "Банковские приложения",
  "Электронные кошельки",
  "Интернет-эквайринг",
  "UX/UI-дизайн",
  "API-интеграция",
  "Чат-боты",
  "Billing-системы",
  "Электронные очереди",
  "Электронное правительство",
  "Государственные порталы",
  "Лендинги",
  "Финансовые приложения",
  "Новостные порталы",
  "Android-приложения",
  "iOS-приложения",
  "Медиа-платформы",
  "Маркетплейсы",
  "Порталы услуг",
  "Образовательные платформы",
  "Корпоративные сайты",
];

import { useTranslation } from 'react-i18next';

export default function HeroMarquee() {
  const { t } = useTranslation();
  const tItems = t('hero.marquee', { returnObjects: true });
  const marqueeItems = Array.isArray(tItems) ? tItems : defaultMarqueeItems;
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className={styles.marqueeItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
