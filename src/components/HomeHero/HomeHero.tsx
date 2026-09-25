"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./HomeHero.module.css";
import HeroContent from "./HeroContent";

// B1: lazy-mount the particle background. `ssr: false` keeps the heavy canvas
// component out of the server payload and initial hydration, and the static
// gradient placeholder below preserves the visual look (and does not block LCP)
// until the chunk loads and the canvas takes over.
const HeroBackgroundAnimation = dynamic(
  () => import("./HeroBackgroundAnimation"),
  {
    ssr: false,
    loading: () => <div className={styles.heroPlaceholder} aria-hidden="true" />,
  },
);

export default function HomeHero() {
  return (
    <div className={styles.container}>
      <div>
        <HeroBackgroundAnimation />
      </div>
      <div className={styles.foreground}>
        <HeroContent />

      </div>
    </div>
  );
}
