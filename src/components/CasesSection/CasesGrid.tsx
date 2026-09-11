'use client';

import React, { useState, useEffect } from 'react';
import styles from './CasesSection.module.css';
import CaseCard from './CaseCard';
import CaseModal, { CaseModalData } from './CaseModal';
import { StaggerContainer, StaggerItem, FadeIn } from '../MotionWrapper';

interface CasesGridProps {
  casesData: (CaseModalData & { year: string })[];
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.index === 'number') {
        setSelectedIndex(customEvent.detail.index);
      }
    };
    
    window.addEventListener('openCaseModal', handleOpenModal);
    return () => {
      window.removeEventListener('openCaseModal', handleOpenModal);
    };
  }, []);

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < casesData.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const selectedCase = selectedIndex !== null ? casesData[selectedIndex] : null;

  const displayedCases = showAll ? casesData : casesData.slice(0, 6);

  return (
    <>
      <StaggerContainer className={styles.cardsGrid} staggerChildren={0.15}>
        {displayedCases.map((e, i) => (
          <StaggerItem key={i}>
            <CaseCard
              slug={e.slug}
              lang={lang}
              imageSrc={e.imageSrc}
              year={e.year}
              title={e.title}
              description={e.description}
              tags={e.tags}
              onClick={() => setSelectedIndex(i)}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {!showAll && casesData.length > 6 && (
        <FadeIn delay={0.2} direction="up" className={styles.loadMoreContainer}>
          <button className={styles.allCasesBtn} onClick={() => setShowAll(true)} style={{ cursor: 'pointer' }}>
            <span className={styles.btnText}>{labels.loadMore || "Посмотреть еще"}</span>
          </button>
        </FadeIn>
      )}

      <CaseModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        caseData={selectedCase}
        currentIndex={selectedIndex ?? 0}
        totalCases={casesData.length}
        onNext={handleNext}
        onPrev={handlePrev}
        labels={labels}
      />
    </>
  );
}
