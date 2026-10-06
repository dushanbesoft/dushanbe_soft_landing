import React from 'react';
import Image from 'next/image';
import styles from './AwardsSection.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '../MotionWrapper';
import initTranslations from '@/app/i18n';

const ArrowUpRight = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z" fill="#F1F7FF"/>
  </svg>
);

const awards = [
  {
    id: 1,
    title: 'Ифтихорнома',
    description: 'За вклад в развитие цифровых технологий',
    year: '2025',
    image: '/images/doc/iftihornoma.jpg',
    link: '/images/doc/iftihornoma.jpg'
  },
  {
    id: 2,
    title: 'Рекомендательное письмо',
    description: 'От партнера',
    year: '2025',
    image: '/images/doc/letter-recommendation.jpg',
    link: '/images/doc/letter-recommendation.jpg'
  },
  {
    id: 3,
    title: 'От партнера',
    description: 'За инновационные решения',
    year: '2025',
    image: '/images/doc/from-partners.jpg',
    link: '/images/doc/from-partners.jpg'
  },
  {
    id: 4,
    title: 'Благодарность',
    description: 'Для дальнейшего сотрудничества',
    year: '2025',
    image: '/images/doc/gratitude.jpg',
    link: '/images/doc/gratitude.jpg'
  }
];

export default async function AwardsSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = await initTranslations(lang, ['common']);

  return (
    <section id="awards" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.header}>
            <div className={styles.titles}>
              <div className={styles.subtitle}>{t('awards.subtitle', 'Наши награды')}</div>
              <h2 className={styles.mainTitle}>{t('awards.title', 'Достижения и периоды')}</h2>
            </div>
          </div>
        </FadeIn>

        <div className={styles.cardsRow}>
          <StaggerContainer className={styles.cardsGrid} staggerChildren={0.2}>
            {awards.map((award) => (
              <StaggerItem key={award.id}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={award.image} alt={award.title} className={styles.image} />
                    
                    <div className={styles.textContent}>
                      <div className={styles.cardTitle}>{t(`awards.items.${award.id}.title`, award.title)}</div>
                      <div className={styles.cardDescription}>{t(`awards.items.${award.id}.description`, award.description)}</div>
                      <div className={styles.badgeWrap}>
                        <div className={styles.yearBadge}>{award.year}</div>
                      </div>
                    </div>
                  </div>
                  
                  <a href={award.link} target="_blank" rel="noopener noreferrer" className={styles.docButton}>
                    {t('awards.viewDoc', 'Посмотреть документ')} <ArrowUpRight />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
