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

  const displayedCases = showAll ? casesData : casesData.slice(0, 6);

  return (
    <>
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
