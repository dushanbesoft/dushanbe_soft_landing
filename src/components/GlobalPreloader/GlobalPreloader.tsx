'use client';

import { useEffect, useState } from 'react';
import styles from './GlobalPreloader.module.css';

export default function GlobalPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 0);
      return;
    }

    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 0);
    };

    window.addEventListener('load', handleLoad);

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
