import React from 'react';
import styles from './WhyUsCard.module.css';

interface WhyUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyUsCard({
  icon,
  title,
  description
}: WhyUsCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
