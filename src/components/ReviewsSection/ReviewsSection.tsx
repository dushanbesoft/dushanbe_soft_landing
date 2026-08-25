import React from 'react';
import initTranslations from '@/app/i18n';
import styles from './ReviewsSection.module.css';
import ReviewsCarousel, { ReviewType } from './ReviewsCarousel';

const reviewsData = [
  {
    id: 1,
    text: '"Dushanbe Soft полностью переработали нашу систему государственных закупок. Теперь прозрачность процессов выросла на 40%, а время обработки тендеров сократилось вдвое. Это именно тот уровень качества, который мы ожидали."',
    name: 'Малика Хасанова',
    role: 'Head of Digital, Ориёнбанк',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/dc867dad1b6f14f2e1855509143e673c78f95502?width=299',
  },
  {
    id: 2,
    text: '"SMS Platform — надёжное и масштабируемое решение. За полгода работы — нулевой downtime. Поддержка реагирует в течение 15 минут. Рекомендую Dushanbe Soft всем, кто ищет партнёра на долгие годы."',
    name: 'Сергей Петров',
    role: 'CTO, TelecomTJ',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/d5b7c7fe31264f6223f44e9d7b46edd6fad74886?width=128',
  },
  {
    id: 3,
    text: '"Команда проявила высокий профессионализм при разработке нашего мобильного приложения. Пользователи в восторге от нового дизайна, а продажи выросли на 30% за первый месяц."',
    name: 'Алишер Каримов',
    role: 'CEO, RetailGroup',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/d5b7c7fe31264f6223f44e9d7b46edd6fad74886?width=128',
  },
  {
    id: 4,
    text: '"Мы искали надежного партнера для автоматизации склада. Решение от Dushanbe Soft превзошло все наши ожидания. Интеграция прошла гладко, без остановки бизнес-процессов."',
    name: 'Елена Смирнова',
    role: 'Директор по логистике',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/dc867dad1b6f14f2e1855509143e673c78f95502?width=299',
  },
  {
    id: 5,
    text: '"Отличная экспертиза в области финтех-проектов. Безопасность и скорость работы системы на высшем уровне. Однозначно рекомендую для сложных enterprise решений."',
    name: 'Рустам Рахимов',
    role: 'Technical Director',
    avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/d5b7c7fe31264f6223f44e9d7b46edd6fad74886?width=128',
  }
];

const i18nNamespaces = ['common'];

export default async function ReviewsSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);

  // Translate all reviews statically before passing them to the client component
  const translatedReviews: ReviewType[] = reviewsData.map((review, index) => ({
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
