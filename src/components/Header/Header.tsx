import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const DownArrow = () => (
  <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.93514 0.41361L4.73921 4.903C4.71102 4.93323 4.67504 4.95766 4.634 4.97447C4.59297 4.99127 4.54794 5 4.50232 5C4.45669 5 4.41166 4.99127 4.37063 4.97447C4.32959 4.95766 4.29362 4.93323 4.26542 4.903L0.0660816 0.41361C-0.0907119 0.247017 0.0490387 1.31863e-08 0.301272 1.31863e-08L8.69654 1.31863e-08C8.75347 -1.53927e-05 8.80926 0.0134689 8.85752 0.0389111C8.90579 0.0643533 8.94458 0.100727 8.96947 0.143873C8.99436 0.187019 9.00434 0.235195 8.99827 0.282895C8.9922 0.330595 8.97032 0.375893 8.93514 0.41361Z" fill="white"/>
  </svg>
);

export default function Header() {
  return (
    <header className={styles.header}>
      <img 
        className={styles.logo}
        src="https://api.builder.io/api/v1/image/assets/TEMP/33fd4140f75e76210d300b9cb2212418cd690a0c?width=344" 
        alt="Dushanbe-Soft Logo" 
      />
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>Главная</Link>
        <Link href="/services" className={styles.navItem}>Услуги</Link>
        <Link href="/products" className={styles.navItem}>Продукты</Link>
        <Link href="/cases" className={styles.navItem}>Кейсы</Link>
        <Link href="/partners" className={styles.navItem}>Партнёры</Link>
        <Link href="/about" className={styles.navItem}>О компании</Link>
        <Link href="/contacts" className={styles.navItem}>Контакты</Link>
      </nav>
      <div className={styles.langSwitcher}>
        <span className={styles.langText}>ТҶ</span>
        <DownArrow />
      </div>
    </header>
  );
}
