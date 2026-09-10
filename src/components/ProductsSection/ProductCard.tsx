import React from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface Tag {
  label: string;
  highlighted?: boolean;
}

interface ProductCardProps {
  imageSrc: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: Tag[];
  href?: string;
}

export default function ProductCard({
  imageSrc,
  icon,
  title,
  subtitle,
  description,
  tags,
  href
}: ProductCardProps) {
  const CardContent = (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.headerRow}>
          <div className={styles.iconWrapper}>
            {icon}
          </div>
          <div className={styles.titles}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
          </div>
        </div>

        <div className={styles.description}>
          {description}
        </div>

        <div className={styles.tagsContainer}>
          <div className={styles.marqueeRow}>
            {[...tags.slice(0, Math.ceil(tags.length / 2)), ...tags.slice(0, Math.ceil(tags.length / 2))].map((tag, i) => (
              <div 
                key={i} 
                className={`${styles.tag} ${tag.highlighted ? styles.highlighted : ''}`}
              >
                {tag.label}
              </div>
            ))}
          </div>
          <div className={styles.marqueeRow}>
            {[...tags.slice(Math.ceil(tags.length / 2)), ...tags.slice(Math.ceil(tags.length / 2))].map((tag, i) => (
              <div 
                key={i} 
                className={`${styles.tag} ${tag.highlighted ? styles.highlighted : ''}`}
              >
                {tag.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.card} style={{ textDecoration: 'none' }}>
        {CardContent}
      </a>
    );
  }

  return (
    <div className={styles.card}>
      {CardContent}
    </div>
  );
}
