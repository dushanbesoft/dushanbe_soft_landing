'use client';

import React from 'react';
import styles from './HomeHero.module.css';
import Header from '../Header/Header';
import HeroContent from './HeroContent';
import HeroMarquee from './HeroMarquee';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';

export default function HomeHero() {
  return (
    <div className={styles.container}>
      <HeroBackgroundAnimation />
      <div className={styles.foreground}>
        <Header />
        <HeroContent />
        <HeroMarquee />
      </div>
    </div>
  );
}
