"use client";

import React from "react";
import styles from "./HomeHero.module.css";
import HeroContent from "./HeroContent";
import HeroMarquee from "./HeroMarquee";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";

export default function HomeHero() {
  return (
    <div className={styles.container}>
      <div>
        <HeroBackgroundAnimation />
      </div>
      <div className={styles.foreground}>
        <HeroContent />
        <HeroMarquee />
      </div>
    </div>
  );
}
