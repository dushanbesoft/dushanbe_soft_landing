'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './CaseGallery.module.css';
import tabStyles from './CaseTabs.module.css';

interface CaseGalleryProps {
  images: string[];
  captions?: string[] | null;
  title: string;
  labels?: {
    prev?: string;
    next?: string;
    close?: string;
  };
}

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function CaseGallery({ images, captions, title, labels }: CaseGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null || i <= 0 ? i : i - 1));
  }, []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null || i >= images.length - 1 ? i : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, close, prev, next]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const captionAt = (idx: number) =>
    captions && captions[idx] ? captions[idx] : `${idx + 1}`;

  return (
    <>
      <div className={tabStyles.grid}>
        {images.map((src, idx) => (
          <button
            key={idx}
            type="button"
            className={`${tabStyles.card} ${styles.itemReset}`}
            onClick={() => setOpenIndex(idx)}
            aria-label={`${title} — ${captionAt(idx)}`}
          >
            <span className={tabStyles.imageWrapper}>
              <Image
                src={src}
                alt={`${title} — ${captionAt(idx)}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                className={tabStyles.image}
              />
            </span>
            {captions && captions[idx] && (
              <span className={tabStyles.caption}>
                <span className={tabStyles.cardShortInfo}>{captions[idx]}</span>
              </span>
            )}
          </button>
        ))}
      </div>

      {isOpen && openIndex !== null && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label={labels?.close ?? 'Close'}
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={prev}
            disabled={openIndex === 0}
            aria-label={labels?.prev ?? 'Previous'}
          >
            <ChevronLeftIcon />
          </button>

          <div className={styles.lightboxContent}>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={images[openIndex]}
                alt={`${title} — ${captionAt(openIndex)}`}
                fill
                sizes="90vw"
                className={styles.lightboxImage}
                priority
              />
            </div>
            {captions && captions[openIndex] && (
              <p className={styles.lightboxCaption}>{captions[openIndex]}</p>
            )}
            <span className={styles.counter}>
              {openIndex + 1} / {images.length}
            </span>
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={next}
            disabled={openIndex === images.length - 1}
            aria-label={labels?.next ?? 'Next'}
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </>
  );
}
