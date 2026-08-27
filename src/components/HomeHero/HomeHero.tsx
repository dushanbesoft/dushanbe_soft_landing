"use client";

import React from "react";
import styles from "./HomeHero.module.css";
import HeroContent from "./HeroContent";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";

export default function HomeHero({ marqueeItems }: { marqueeItems?: string[] }) {
  return (
    <div className={styles.container}>
      <div>
        <HeroBackgroundAnimation />
      </div>
      <div className={styles.foreground}>
        <HeroContent marqueeItems={marqueeItems} />
        
      </div>
    </div>
  );
}
