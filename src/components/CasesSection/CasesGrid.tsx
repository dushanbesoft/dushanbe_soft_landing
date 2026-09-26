'use client';

import React, { useState, useEffect } from 'react';
import styles from './CasesSection.module.css';
import CaseCard from './CaseCard';
import { FadeIn } from '../MotionWrapper';

interface CasesGridProps {
  casesData: ({ slug: string, title: string, description: string, imageSrc: string, tags: string[], gallery?: string[] } & { year: string })[];
  lang: string;
  labels: {
    descriptionTitle: string;
    techTitle: string;
    advantagesTitle: string;
    prevProject: string;
    nextProject: string;
    outOf: string;
    loadMore?: string;
  };
}

export default function CasesGrid({ casesData, lang, labels }: CasesGridProps) {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = ['Все', 'Государственные', 'Корпоративные', 'Медиа', 'Финтех и Web3', 'Blockchain/Web3'];
  
  const slugCategoryMap: Record<string, string> = {
    "president": "Государственные",
    "digital-tajikistan": "Государственные",
    "sohktor": "Государственные",
    "mavji-somon": "Медиа",
    "livechat-tj": "Корпоративные",
    "telecomm": "Корпоративные",
    "navo": "Медиа",
    "somon-tv": "Медиа",
    "zudsms": "Финтех и Web3",
    "sunduk-tv": "Медиа",
    "onlinepay": "Финтех и Web3",
    "arcanefinance": "Blockchain/Web3",
    "arcane-launchpad": "Blockchain/Web3",
    "reactorexchange": "Blockchain/Web3",
    "reactor-exchange": "Blockchain/Web3"
  };

  const filteredCases = activeCategory === 'Все'
    ? casesData
    : casesData.filter(c => slugCategoryMap[c.slug] === activeCategory);

  const displayedCases = showAll ? filteredCases : filteredCases.slice(0, 6);

  return (
    <>
      <div className={styles.categoriesList}>
        {categories.map((cat, index) => (
          <FadeIn key={cat} delay={index * 0.1} direction="up">
            <button
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryBtnActive : ''}`}
            >
              {cat}
            </button>
          </FadeIn>
        ))}
      </div>

      <div className={styles.cardsGrid}>
        {displayedCases.map((e, i) => (
          <FadeIn key={e.slug} delay={(i % 6) * 0.15} direction="up" fullWidth style={{ height: '100%' }}>
            <CaseCard
              slug={e.slug}
              lang={lang}
              imageSrc={e.imageSrc}
              year={e.year}
              title={e.title}
              description={e.description}
              tags={e.tags}
            />
          </FadeIn>
        ))}
      </div>

      {!showAll && casesData.length > 6 && (
        <FadeIn delay={0.2} direction="up" className={styles.loadMoreContainer}>
          <button className={styles.allCasesBtn} onClick={() => setShowAll(true)} style={{ cursor: 'pointer' }}>
            <span className={styles.btnText}>{labels.loadMore || "Посмотреть еще"}</span>
          </button>
        </FadeIn>
      )}

    </>
  );
}
