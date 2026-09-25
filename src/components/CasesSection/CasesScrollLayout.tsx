"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CasesScrollLayout.module.css';
import CaseCard from './CaseCard';
import CaseModal, { CaseModalData } from './CaseModal';
import { StaggerContainer, StaggerItem, FadeIn } from '../MotionWrapper';

interface CasesScrollLayoutProps {
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

export default function CasesScrollLayout({ casesData, lang, labels }: CasesScrollLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.index === 'number') {
        setModalIndex(customEvent.detail.index);
      }
    };

    window.addEventListener('openCaseModal', handleOpenModal);
    return () => {
      window.removeEventListener('openCaseModal', handleOpenModal);
    };
  }, []);

  const handleNext = () => {
    if (modalIndex !== null && modalIndex < casesData.length - 1) {
      setModalIndex(modalIndex + 1);
    }
  };

  const handlePrev = () => {
    if (modalIndex !== null && modalIndex > 0) {
      setModalIndex(modalIndex - 1);
    }
  };

  const activeCase = casesData[activeIndex];
  const displayedCases = showAll ? casesData : casesData.slice(0, 6);

  return (
    <div className={styles.container}>
      {/* Desktop view (split sticky) */}
      <div className={styles.desktopLayout}>
        <div className={styles.leftCol}>
          {casesData.map((c, index) => (
            <motion.div
              key={c.slug}
              className={`${styles.imageWrapper} ${activeIndex === index ? styles.activeImage : ''}`}
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ margin: "-50% 0px -50% 0px" }}
              onClick={() => setModalIndex(index)}
            >
              <Image 
                src={c.imageSrc} 
                alt={c.title} 
                fill 
                className={styles.image} 
                sizes="(max-width: 991px) 100vw, 50vw"
              />
              <div className={styles.imageOverlay}></div>
            </motion.div>
          ))}
        </div>

        <div className={styles.rightCol}>
          <div className={styles.stickyCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={styles.cardContent}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div className={styles.cardBannerWrapper}>
                  <Image 
                    src={activeCase.imageSrc} 
                    alt={activeCase.title} 
                    fill 
                    className={styles.cardBannerImage} 
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                  <div className={styles.cardBannerOverlay}></div>
                </div>
                
                <div className={styles.cardContentWrapper}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{activeCase.title}</h3>
                    {/* <span className={styles.yearBadge}>{activeCase.year}</span> */}
                  </div>
                  <p className={styles.cardDesc}>{activeCase.description}</p>
                  
                  <div className={styles.tagsContainer}>
                    {activeCase.tags.slice(0, 5).map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                    {activeCase.tags.length > 5 && (
                      <span className={styles.tag}>+{activeCase.tags.length - 5}</span>
                    )}
                  </div>

                  <button className={styles.viewMoreBtn} onClick={() => setModalIndex(activeIndex)}>
                    {labels.loadMore || "Просмотреть подробнее"}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile view (grid) */}
      <div className={styles.mobileLayout}>
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
                onClick={() => setModalIndex(i)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {!showAll && casesData.length > 6 && (
          <FadeIn delay={0.2} direction="up" className={styles.loadMoreContainer}>
            <button className={styles.allCasesBtn} onClick={() => setShowAll(true)}>
              <span>{labels.loadMore || "Посмотреть еще"}</span>
            </button>
          </FadeIn>
        )}
      </div>

      <CaseModal
        isOpen={modalIndex !== null}
        onClose={() => setModalIndex(null)}
        caseData={modalIndex !== null ? casesData[modalIndex] : null}
        currentIndex={modalIndex ?? 0}
        totalCases={casesData.length}
        onNext={handleNext}
        onPrev={handlePrev}
        labels={labels}
      />
    </div>
  );
}
