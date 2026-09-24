import React from 'react';
import initTranslations from '@/app/i18n';
import styles from './ReviewsSection.module.css';
import ReviewsCarousel, { ReviewType } from './ReviewsCarousel';
import { FadeIn, StaggerContainer, StaggerItem } from '../MotionWrapper';

const reviews = [
  {
    id: 1,
    text: 'Dushanbe-Soft зарекомендовала себя как команда, которая хорошо понимает специфику IT-проектов и ответственно подходит к поставленным задачам. Для нас особенно важны оперативность, техническая поддержка и готовность находить решения даже в нестандартных ситуациях.',
    name: 'Умеджон Убайдулло',
    role: 'Заместитель руководителя компании « ЗАО Телерадиоком»',
    avatar: '/icons/comments/1.webp',
  },
  {
    id: 2,
    text: 'Сотрудничество с Dushanbe-Soft — это прежде всего профессиональный подход и понимание задач бизнеса. Команда внимательно относится к требованиям, предлагает практичные решения и сопровождает проект на всех этапах.',
    name: 'Гулмахмад Каюмов',
    role: 'Генеральный директор «Телеком Технолоджи»',
    avatar: '/icons/comments/2.webp',
  },
  {
    id: 3,
    text: 'В работе с Dushanbe-Soft мы ценим техническую компетентность и ответственное отношение к проекту. Команда умеет работать с комплексными задачами и оперативно реагировать на возникающие вопросы.',
    name: 'Султон Ниёзи',
    role: 'Заместитель главного инженера, Телевидение Таджикистана',
    avatar: '/icons/comments/3.webp',
  },
  {
    id: 4,
    text: 'Dushanbe-Soft помогла нам реализовать цифровые решения, которые делают работу с клиентами удобнее и эффективнее. Нам особенно нравится сочетание современного подхода, гибкости и постоянной поддержки команды.',
    name: 'Шахром Джамхуров',
    role: 'Основатель и генеральный директор Yak Du Trip',
    avatar: '/icons/comments/5.webp',
  },
  {
    id: 5,
    text: 'В Dushanbe-Soft умеют не просто выполнять техническое задание, а погружаться в задачу и предлагать оптимальное решение. Для нас важны прозрачная коммуникация, соблюдение договорённостей и внимание к деталям.',
    name: 'Икром Абдуллаев',
    role: 'Координатор, PIC.TJ',
    avatar: '/icons/comments/6.webp',
  },
  {
    id: 6,
    text: 'Мы ценим Dushanbe-Soft за профессионализм, оперативность и ориентацию на результат. Команда быстро понимает потребности проекта и превращает технические задачи в удобные цифровые решения.',
    name: 'Тагоимурод Сидиков',
    role: 'Генеральный директор, Etagi',
    avatar: '/icons/comments/4.webp',
  }
];

const i18nNamespaces = ['common'];

export default async function ReviewsSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);

  const translatedReviews: ReviewType[] = reviews.map((review, index) => ({
    ...review,
    text: t(`reviews.list.${index}.text`, review.text),
    name: t(`reviews.list.${index}.name`, review.name),
    role: t(`reviews.list.${index}.role`, review.role)
  }));

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.header}>
            <span className={styles.subtitle}>{t('reviews.subtitle', 'Отзывы')}</span>
            <h2 className={styles.title}>{t('reviews.title', 'Что о нас говорят')}</h2>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} fullWidth>
          <ReviewsCarousel reviews={translatedReviews} />
        </FadeIn>
      </div>
    </section>
  );
}
