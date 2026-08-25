'use client';

import React, { useEffect } from 'react';
import styles from './CaseModal.module.css';

export interface CaseModalData {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

interface CaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseData: CaseModalData | null;
  currentIndex: number;
  totalCases: number;
  onNext: () => void;
  onPrev: () => void;
  labels: {
    descriptionTitle: string;
    techTitle: string;
    advantagesTitle: string;
    prevProject: string;
    nextProject: string;
    outOf: string;
  };
}

const AdvantageIcon = () => (
  <svg className={styles.advantageIcon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.592 0 0 3.592 0 8C0 12.408 3.592 16 8 16C12.408 16 16 12.408 16 8C16 3.592 12.408 0 8 0ZM11.824 6.16L7.288 10.696C7.1755 10.8084 7.023 10.8715 6.864 10.8715C6.705 10.8715 6.5525 10.8084 6.44 10.696L4.176 8.432C4.06442 8.31909 4.00184 8.16674 4.00184 8.008C4.00184 7.84926 4.06442 7.69691 4.176 7.584C4.408 7.352 4.792 7.352 5.024 7.584L6.864 9.424L10.976 5.312C11.208 5.08 11.592 5.08 11.824 5.312C12.056 5.544 12.056 5.92 11.824 6.16Z" fill="url(#paint_adv)"/>
    <defs>
      <linearGradient id="paint_adv" x1="1.0718" y1="12" x2="14.9282" y2="4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3DDC84"/>
        <stop offset="1" stopColor="#02704F"/>
      </linearGradient>
    </defs>
  </svg>
);

const CloseIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.25" y="0.25" width="35.5" height="35.5" rx="17.75" fill="black"/>
    <rect x="0.25" y="0.25" width="35.5" height="35.5" rx="17.75" stroke="url(#paint0_close)" strokeWidth="0.5"/>
    <path d="M18 0.25C27.787 0.25 35.75 8.21297 35.75 18C35.75 27.787 27.787 35.75 18 35.75C8.21297 35.75 0.25 27.787 0.25 18C0.25 8.21297 8.21297 0.25 18 0.25ZM18 15.6875L12.4619 10.1494L10.1494 12.4619L15.6875 18L10.1494 23.5381L12.4619 25.8506L12.6387 25.6738L18 20.3115L23.3613 25.6738L23.5381 25.8506L25.8506 23.5381L25.6738 23.3613L20.3115 18L25.6738 12.6387L25.8506 12.4619L23.5381 10.1494L18 15.6875Z" fill="url(#paint1_close)" stroke="url(#paint2_close)" strokeWidth="0.5"/>
    <defs>
      <linearGradient id="paint0_close" x1="2.41154" y1="27" x2="33.5885" y2="9" gradientUnits="userSpaceOnUse"><stop stopColor="#3DDC84"/><stop offset="1" stopColor="#02704F"/></linearGradient>
      <linearGradient id="paint1_close" x1="2.41154" y1="27" x2="33.5885" y2="9" gradientUnits="userSpaceOnUse"><stop stopColor="#3DDC84"/><stop offset="1" stopColor="#07976B"/></linearGradient>
      <linearGradient id="paint2_close" x1="2.41154" y1="27" x2="33.5885" y2="9" gradientUnits="userSpaceOnUse"><stop stopColor="#3DDC84"/><stop offset="1" stopColor="#02704F"/></linearGradient>
    </defs>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.03138 7.25998C8.13269 7.16557 8.21396 7.05172 8.27032 6.92522C8.32669 6.79872 8.357 6.66216 8.35944 6.5237C8.36188 6.38523 8.33641 6.24769 8.28454 6.11928C8.23268 5.99087 8.15548 5.87423 8.05755 5.7763C7.95963 5.67838 7.84298 5.60118 7.71457 5.54931C7.58616 5.49744 7.44862 5.47197 7.31016 5.47441C7.17169 5.47686 7.03513 5.50717 6.90863 5.56353C6.78214 5.61989 6.66829 5.70116 6.57388 5.80248L2.10375 10.2712L1.375 11L2.10375 11.7287L6.5725 16.1975C6.76691 16.3854 7.02735 16.4895 7.29775 16.4873C7.56814 16.485 7.82684 16.3767 8.01814 16.1856C8.20943 15.9945 8.31801 15.7359 8.32048 15.4655C8.32296 15.1951 8.21914 14.9346 8.03138 14.74L5.32263 12.0312H19.5938C19.8673 12.0312 20.1296 11.9226 20.323 11.7292C20.5164 11.5358 20.625 11.2735 20.625 11C20.625 10.7265 20.5164 10.4642 20.323 10.2708C20.1296 10.0774 19.8673 9.96873 19.5938 9.96873H5.32263L8.03138 7.25998Z" fill="currentColor"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z" fill="currentColor"/>
  </svg>
);

export default function CaseModal({
  isOpen,
  onClose,
  caseData,
  currentIndex,
  totalCases,
  onNext,
  onPrev,
  labels,
}: CaseModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!caseData) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const dummyThumbnails = Array(5).fill(caseData.imageSrc);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        
        <div className={styles.header}>
          <div className={styles.counterBadge}>
            {currentIndex + 1}/{totalCases}
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.imagesContainer}>
          <img src={caseData.imageSrc} alt={caseData.title} className={styles.mainImage} />
          
          <div className={styles.thumbnails}>
            {dummyThumbnails.map((src, idx) => (
              <img 
                key={idx} 
                src={src} 
                alt="Thumbnail" 
                className={`${styles.thumbnail} ${idx === 0 ? styles.active : ''}`} 
              />
            ))}
          </div>
        </div>

        <div className={styles.contentSplit}>
          
          <div className={styles.leftCol}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h3 className={styles.sectionTitle}>{labels.descriptionTitle}</h3>
              <p className={styles.description}>{caseData.description}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h3 className={styles.sectionTitle}>{labels.techTitle}</h3>
              <div className={styles.techList}>
                {caseData.tags.map(tag => (
                  <div key={tag} className={styles.techItem}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className={styles.rightCol}>
            <h3 className={styles.sectionTitle}>{labels.advantagesTitle}</h3>
            
            <div className={styles.advantagesList}>
              <div className={styles.advantageItem}>
                <AdvantageIcon />
                <span className={styles.advantageText}>Адаптивный дизайн для всех устройств</span>
              </div>
              <div className={styles.advantageItem}>
                <AdvantageIcon />
                <span className={styles.advantageText}>Высокая производительность и безопасность</span>
              </div>
              <div className={styles.advantageItem}>
                <AdvantageIcon />
                <span className={styles.advantageText}>Удобная навигация и поиск</span>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.footer}>
          <button 
            className={`${styles.navBtn} ${styles.navBtnPrev}`} 
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            <ArrowUpIcon />
            {labels.prevProject}
          </button>

          <span className={styles.footerCounter}>
            {currentIndex + 1} {labels.outOf} {totalCases}
          </span>

          <button 
            className={`${styles.navBtn} ${styles.navBtnNext}`} 
            onClick={onNext}
            disabled={currentIndex === totalCases - 1}
          >
            {labels.nextProject}
            <ArrowDownIcon />
          </button>
        </div>

      </div>
    </div>
  );
}
