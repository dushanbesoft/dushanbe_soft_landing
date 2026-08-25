'use client';

import { useEffect, useState } from 'react';
import styles from './GlobalPreloader.module.css';

export default function GlobalPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If the document is already fully loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
      return;
    }

    // Wait for everything to load (including all images and SVGs)
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Fallback: maximum 5 seconds of preloading so the user isn't stuck forever if something fails
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`${styles.preloader} ${!isLoading ? styles.hidden : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
}
