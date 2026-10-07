"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AwardsSection.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '../MotionWrapper';
import { useTranslation } from 'react-i18next';
import { FaSearchPlus } from 'react-icons/fa';

const awards = [
  {
    id: 'indian_tech_1',
    title: 'Indian Technical',
    description: 'Certificate',
    year: '2022',
    image: '/files/indian-technical-2022.jpg',
  },
  {
    id: 'indian_tech_2',
    title: 'Indian Technical',
    description: 'Government of India',
    year: '2022',
    image: '/files/indian-technical-government-of-india-2022.jpg',
  },
  {
    id: 'fmfb',
    title: 'First MicroFinance Bank',
    description: 'Letter of Recommendation',
    year: '2019',
    image: '/files/letter-of-recommendation-first-micro-finance-bank-2019.jpg',
  },
  {
    id: 'golden_travel',
    title: 'Golden Travel',
    description: 'Letter of Recommendation',
    year: '2023',
    image: '/files/letter-of-recommendation-golden-travel.jpg',
  },
  {
    id: 'megafon',
    title: 'Megafon',
    description: 'Letter of Recommendation',
    year: '2019',
    image: '/files/letter-of-recommendation-megafon-2019.jpg',
  },
  {
    id: 'muhibon',
    title: 'Muhibon',
    description: 'Letter of Recommendation',
    year: '2024',
    image: '/files/letter-of-recommendation-muhibon-2024.jpg',
  },
  {
    id: 'sinamo',
    title: 'SinamoTV',
    description: 'Letter of Recommendation',
    year: '2020',
    image: '/files/letter-of-recommendation-sinamo-2020.jpg',
  },
  {
    id: 'sunduktv',
    title: 'SundukTV',
    description: 'Letter of Recommendation',
    year: '2022',
    image: '/files/letter-of-recommendation-sunduktv-2022.png',
  },
  {
    id: 'completion',
    title: 'Certificate of Completion',
    description: 'Certificate',
    year: '2023',
    image: '/files/sertificate-of-completion-2023.jpg',
  }
];

export default function AwardsSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = useTranslation('common');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

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
          <StaggerContainer className={styles.carousel} staggerChildren={0.1}>
            {awards.map((award) => (
              <StaggerItem key={award.id}>
                <div className={styles.carouselItem}>
                  <div className={styles.card}>
                    <div className={styles.cardContent}>
                      <div 
                        className={styles.imageWrap}
                        onClick={() => setSelectedImage(award.image)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={award.image} alt={award.title} className={styles.image} />
                        <div className={styles.imageOverlay}>
                          <FaSearchPlus className={styles.zoomIcon} /> 
                          <span>{t('awards.zoom', 'Увеличить')}</span>
                        </div>
                      </div>
                      
                      <div className={styles.textContent}>
                        <div className={styles.cardTitle}>{t(`awards.items.${award.id}.title`, award.title)}</div>
                        <div className={styles.cardDescription}>{t(`awards.items.${award.id}.description`, award.description)}</div>
                        <div className={styles.badgeWrap}>
                          <div className={styles.yearBadge}>{award.year}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>×</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedImage} alt="Enlarged Document" className={styles.enlargedImage} />
          </div>
        </div>
      )}
    </section>
  );
}
