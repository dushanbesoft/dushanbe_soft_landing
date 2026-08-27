import React from 'react';
import initTranslations from '@/app/i18n';
import styles from './ReviewsSection.module.css';
import ReviewsCarousel, { ReviewType } from './ReviewsCarousel';
import { getReviews } from '@/services/dataService';

const i18nNamespaces = ['common'];

export default async function ReviewsSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  const reviews = await getReviews();

  const translatedReviews: ReviewType[] = reviews.map((review, index) => ({
    ...review,
    text: t(`reviews.list.${index}.text`, review.text),
    name: t(`reviews.list.${index}.name`, review.name),
    role: t(`reviews.list.${index}.role`, review.role)
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>{t('reviews.subtitle', 'Отзывы')}</span>
          <h2 className={styles.title}>{t('reviews.title', 'Что о нас говорят')}</h2>
        </div>
        
        <ReviewsCarousel reviews={translatedReviews} />
      </div>
    </section>
  );
}
