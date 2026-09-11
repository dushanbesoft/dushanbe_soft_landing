import React from 'react';
import Link from 'next/link';
import styles from './CaseCard.module.css';

interface CaseCardProps {
  imageSrc: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
  lang: string;
  onClick?: () => void;
}

export default function CaseCard({
  imageSrc,
  year,
  title,
  description,
  tags,
  slug,
  lang,
  onClick
}: CaseCardProps) {
  const half = Math.ceil(tags.length / 2);
  const topTags = tags.slice(0, half);
  const bottomTags = tags.slice(half);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link href={`/${lang}/cases/${slug}`} className={styles.card} onClick={handleClick}>
      <div 
        className={styles.imageHeader} 
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
        <div className={styles.yearBadge}>
          <span className={styles.yearText}>{year}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        
        <div className={styles.tagsContainer}>
          <div className={styles.marqueeRow}>
            {topTags.map((tag, idx) => (
              <span key={`top1-${idx}`} className={styles.tag}>
                <span className={styles.tagText}>{tag}</span>
              </span>
            ))}
            {topTags.map((tag, idx) => (
              <span key={`top2-${idx}`} className={styles.tag}>
                <span className={styles.tagText}>{tag}</span>
              </span>
            ))}
          </div>
          <div className={styles.marqueeRow}>
            {bottomTags.map((tag, idx) => (
              <span key={`bot1-${idx}`} className={styles.tag}>
                <span className={styles.tagText}>{tag}</span>
              </span>
            ))}
            {bottomTags.map((tag, idx) => (
              <span key={`bot2-${idx}`} className={styles.tag}>
                <span className={styles.tagText}>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
