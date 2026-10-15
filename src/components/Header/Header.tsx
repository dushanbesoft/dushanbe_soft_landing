"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import { servicesNav } from "@/const/services-nav";
import { productsNav, portfolioNav, partnersNav, HeaderNavItem } from "@/const/header-nav";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { LANG_MENU_ORDER, LOCALE_META, isLocale, type Locale } from "@/utils/locales";

const DownArrow = () => (
  <svg
    width="9"
    height="5"
    viewBox="0 0 9 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.93514 0.41361L4.73921 4.903C4.71102 4.93323 4.67504 4.95766 4.634 4.97447C4.59297 4.99127 4.54794 5 4.50232 5C4.45669 5 4.41166 4.99127 4.37063 4.97447C4.32959 4.95766 4.29362 4.93323 4.26542 4.903L0.0660816 0.41361C-0.0907119 0.247017 0.0490387 1.31863e-08 0.301272 1.31863e-08L8.69654 1.31863e-08C8.75347 -1.53927e-05 8.80926 0.0134689 8.85752 0.0389111C8.90579 0.0643533 8.94458 0.100727 8.96947 0.143873C8.99436 0.187019 9.00434 0.235195 8.99827 0.282895C8.9922 0.330595 8.97032 0.375893 8.93514 0.41361Z"
      fill="currentColor"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Clear any previous NEXT_LOCALE cookie so it never forces redirects
function clearLocaleCookie() {
  document.cookie = "NEXT_LOCALE=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = isLocale(segments[0]);
  const currentLang: Locale = hasLocalePrefix ? (segments[0] as Locale) : "ru";
  const subPath = (hasLocalePrefix ? segments.slice(1) : segments).join("/");

  const changeLanguage = (lang: string) => {
    setIsLangMenuOpen(false);
    if (lang === currentLang) return;

    clearLocaleCookie();

    const targetUrl = lang === "ru"
      ? (subPath ? `/${subPath}` : "/")
      : (subPath ? `/${lang}/${subPath}` : `/${lang}`);

    router.push(targetUrl);
    router.refresh();
  };

  const getLangHref = (lang: string) => {
    if (lang === "ru") return subPath ? `/${subPath}` : "/";
    return subPath ? `/${lang}/${subPath}` : `/${lang}`;
  };

  const localeHref = (path: string) => {
    if (path.startsWith("#")) return getNavHref(path.slice(1));
    return currentLang === "ru" ? `/${path}` : `/${currentLang}/${path}`;
  };

  // Dropdown links stay in the DOM (hidden with CSS) so crawlers can follow them.
  const renderDropdown = (
    label: string,
    href: string,
    items: { href: string; label: string }[],
    footer: { href: string; label: string } | null,
    options: { wide?: boolean; secondary?: boolean } = {},
  ) => (
    <div className={`${styles.navDropdown} ${options.secondary ? styles.navSecondary : ""}`}>
      <Link href={href} className={styles.navItem} onClick={closeMenu}>
        {label}
      </Link>
      <div className={`${styles.navDropdownMenu} ${options.wide ? styles.navDropdownMenuWide : ""}`}>
        <div className={styles.navDropdownList}>
          {items.map((item) => (
            <Link key={item.href + item.label} href={item.href} className={styles.navDropdownItem} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </div>
        {footer && (
          <Link href={footer.href} className={styles.navDropdownFooter} onClick={closeMenu}>
            {footer.label} →
          </Link>
        )}
      </div>
    </div>
  );

  const toItems = (list: HeaderNavItem[]) =>
    list.map((item) => ({ href: localeHref(item.path), label: t(item.labelKey, item.fallback) }));

  const getNavHref = (hash: string) => {
    return currentLang === "ru" ? `/#${hash}` : `/${currentLang}/#${hash}`;
  };
  const logoHref = currentLang === "ru" ? "/" : `/${currentLang}`;
  const homeHref = currentLang === "ru" ? "/#" : `/${currentLang}/#`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split('#');
    if (hash && (pathname === path || pathname === path + '/')) {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : styles.transparent}`}
    >
      <main>
        <Link href={logoHref} onClick={closeMenu}>
          <img
            className={`${styles.logo} ${styles.logoOnDark}`}
            src="/icons/logo-header.webp"
            alt="Dushanbe Soft"
            width={172}
            height={38}
            fetchPriority="high"
          />
          <img
            className={`${styles.logo} ${styles.logoOnLight}`}
            src="/icons/logo-header-dark.webp"
            alt=""
            aria-hidden="true"
            width={172}
            height={38}
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link
            href={homeHref}
            className={`${styles.navItem} ${styles.navHomeItem}`}
            onClick={(e) => {
              const isHomePage = currentLang === "ru"
                ? (pathname === "/" || pathname === "")
                : (pathname === `/${currentLang}` || pathname === `/${currentLang}/`);

              if (isHomePage) {
                e.preventDefault();
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', currentLang === "ru" ? "/" : `/${currentLang}/`);
              } else {
                closeMenu();
              }
            }}
          >
            {t("header.home", "Главная")}
          </Link>
          {renderDropdown(
            t("header.products", "Для бизнеса"),
            localeHref("products"),
            toItems(productsNav),
            { href: localeHref("products"), label: t("products.allProducts", "Все продукты") },
          )}
          {renderDropdown(
            t("header.cases", "Портфолио"),
            localeHref("cases"),
            toItems(portfolioNav),
            { href: localeHref("cases"), label: t("cases.all_projects", "Все проекты") },
          )}
          {renderDropdown(
            t("header.partners", "Наши партнёры"),
            getNavHref("partners"),
            toItems(partnersNav),
            { href: getNavHref("partners"), label: t("header.allPartners", "Все партнёры") },
            { wide: true, secondary: true },
          )}
          {renderDropdown(
            t("header.services", "Услуги"),
            localeHref("services"),
            servicesNav.map((service) => ({
              href: localeHref(`services/${service.slug}`),
              label: service.name[currentLang],
            })),
            { href: localeHref("services"), label: t("services.allServices", "Все услуги") },
          )}
          <Link
            href={getNavHref("process")}
            className={styles.navItem}
            onClick={(e) => handleNavClick(e, getNavHref("process"))}
          >
            {t("header.process", "Процесс разработки")}
          </Link>
          <Link
            href={getNavHref("pricing")}
            className={styles.navItem}
            onClick={(e) => handleNavClick(e, getNavHref("pricing"))}
          >
            {t("header.pricing", "Тарифы")}
          </Link>
          <Link
            href={getNavHref("careers")}
            className={styles.navItem}
            onClick={(e) => handleNavClick(e, getNavHref("careers"))}
          >
            {t("header.careers", "Карьера")}
          </Link>
          <Link
            href={getNavHref("awards")}
            className={`${styles.navItem} ${styles.navSecondary}`}
            onClick={(e) => handleNavClick(e, getNavHref("awards"))}
          >
            {t("header.awards", "Награды")}
          </Link>
        </nav>

        <div className={styles.controlsWrapper}>
          <ThemeToggle />
          <div className={styles.langSwitcherContainer}>
            <div
              className={styles.langSwitcher}
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <span className={styles.langFlag}>{LOCALE_META[currentLang].flag}</span>
              <span className={styles.langText}>
                {LOCALE_META[currentLang].short}
              </span>
              <DownArrow />
            </div>
            {/* Always rendered so crawlers can follow the language links */}
            {(
              <div
                className={styles.langDropdown}
                style={isLangMenuOpen ? undefined : { display: "none" }}
              >
                {LANG_MENU_ORDER.map((lang) => (
                  <a
                    key={lang}
                    href={getLangHref(lang)}
                    hrefLang={LOCALE_META[lang].hreflang}
                    lang={LOCALE_META[lang].hreflang}
                    dir={LOCALE_META[lang].dir}
                    className={`${styles.langOption} ${lang === currentLang ? styles.langOptionActive : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      changeLanguage(lang);
                    }}
                  >
                    <span className={styles.langFlag}>{LOCALE_META[lang].flag}</span>
                    {LOCALE_META[lang].name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            className={styles.hamburgerBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      </main>
    </header>
  );
}
