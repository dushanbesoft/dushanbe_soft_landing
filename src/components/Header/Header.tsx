"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import { motion, AnimatePresence } from "framer-motion";

const DownArrow = () => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="28" y2="12"></line>
    <line x1="4" y1="20" x2="28" y2="20"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="8" x2="24" y2="24"></line>
    <line x1="8" y1="24" x2="24" y2="8"></line>
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.startsWith('/tj') ? 'tj' : pathname.startsWith('/en') ? 'en' : 'ru';

  const changeLanguage = (newLang: string) => {
    setIsLangMenuOpen(false);
    if (newLang === currentLang) return;

    // set cookie so next-i18n-router remembers preference
    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=31536000`;

    // Strip current language prefix if not default 'ru'
    let basePath = pathname;
    if (currentLang !== 'ru' && (basePath === `/${currentLang}` || basePath.startsWith(`/${currentLang}/`))) {
      basePath = basePath.slice(currentLang.length + 1) || '/';
    }

    // Add new language prefix if not default 'ru'
    let targetPath = basePath;
    if (newLang !== 'ru') {
      targetPath = basePath === '/' ? `/${newLang}` : `/${newLang}${basePath}`;
    }

    router.push(targetPath);
    router.refresh();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split('#');
    const normalizedCurrent = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : (path || '/');

    if (hash && (normalizedCurrent === normalizedPath || (normalizedPath === '' && normalizedCurrent === '/'))) {
      e.preventDefault();
      closeMenu();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    } else {
      closeMenu();
    }
  };

  const getLangDisplayName = (l: string) => {
    switch (l) {
      case "tj": return "ТҶ";
      case "en": return "EN";
      default: return "РУ";
    }
  };

  const getLangFlag = (l: string) => {
    switch (l) {
      case "tj": return "🇹🇯";
      case "en": return "🇬🇧";
      default: return "🇷🇺";
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" onClick={closeMenu}>
            <img className={styles.logo} src="/icons/logo-header.svg" alt="Dushanbe-Soft Logo" />
          </Link>

          <div className={styles.controlsWrapper}>
            <div className={styles.langSwitcherContainer}>
              <div className={styles.langSwitcher} onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
                <span className={styles.langText}>{getLangDisplayName(currentLang)}</span>
                <DownArrow />
              </div>
              {isLangMenuOpen && (
                <div className={styles.langDropdown}>
                  <div className={styles.langOption} onClick={() => changeLanguage("tj")}>
                    <span className={styles.langFlag}>🇹🇯</span> ТҶ
                  </div>
                  <div className={styles.langOption} onClick={() => changeLanguage("ru")}>
                    <span className={styles.langFlag}>🇷🇺</span> РУ
                  </div>
                  <div className={styles.langOption} onClick={() => changeLanguage("en")}>
                    <span className={styles.langFlag}>🇬🇧</span> EN
                  </div>
                </div>
              )}
            </div>

            <button className={styles.hamburgerBtn} onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className={styles.fullScreenMenu}
          >
            <div className={styles.menuContent}>
              <nav className={styles.navMenu}>
                {[
                  { id: "home", label: t("header.home", "Главная"), href: currentLang === 'ru' ? '/#' : `/${currentLang}/#` },
                  { id: "products", label: t("header.products", "Для бизнеса"), href: currentLang === 'ru' ? '/#products' : `/${currentLang}/#products` },
                  { id: "cases", label: t("header.cases", "Портфолио"), href: currentLang === 'ru' ? '/#cases' : `/${currentLang}/#cases` },
                  { id: "services", label: t("header.services", "Услуги"), href: currentLang === 'ru' ? '/#services' : `/${currentLang}/#services` },
                  { id: "pricing", label: t("header.pricing", "Тарифы"), href: currentLang === 'ru' ? '/#pricing' : `/${currentLang}/#pricing` },
                  { id: "careers", label: t("header.careers", "Карьера"), href: currentLang === 'ru' ? '/#careers' : `/${currentLang}/#careers` },
                ].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className={styles.largeNavItem}
                      onClick={(e) => {
                        const isHomeTarget = item.href === '/#' || item.href === `/${currentLang}/#`;
                        const isCurrentHome = currentLang === 'ru'
                          ? (pathname === '/' || pathname === '')
                          : (pathname === `/${currentLang}` || pathname === `/${currentLang}/`);
                        if (isHomeTarget && isCurrentHome) {
                          e.preventDefault();
                          closeMenu();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          handleNavClick(e, item.href);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div 
                className={styles.menuFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className={styles.contactInfo}>
                  <p>Email: <a href="mailto:info@dushanbesoft.tj">info@dushanbesoft.tj</a></p>
                  <p>Phone: <a href="tel:+992988888888">+992 98 888 8888</a></p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
