"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTelegram, FaXTwitter } from "react-icons/fa6";
import styles from "./HeroNewsCarousel.module.css";
import { newsList } from "@/const/news-data";
import { ProductSite } from "@/const/product-site";
import { localeDir } from "@/utils/locales";
import { localePath, localeUrl } from "@/utils/seo";

// Banner order: the five latest/pinned news, then extra news and portfolio cases.
const EXTRA_NEWS = ["zudsms"];
const CASE_SLIDES = [
  { slug: "president", heroImage: "/images/news/president-banner.webp", mobileImage: "/images/projects/president/banner_main.jpg" },
];
const TRAILING_NEWS = ["livechat"];

type Slide = {
  key: string;
  image: string;
  /** Phones show the original promo picture: the wide composed banner would be tiny there. */
  mobileImage: string;
  /** Path without locale prefix, e.g. "news/zudsms" or "cases/president" */
  path: string;
  tagKey: string;
  defaultTag: string;
  titleKey: string;
  defaultTitle: string;
  /** "24.08.2025" or a bare year */
  date: string;
};

const newsSlide = (slug: string): Slide[] => {
  const item = newsList.find((n) => n.slug === slug);
  if (!item) return [];
  return [{
    key: item.slug,
    image: item.heroImage ?? item.image,
    mobileImage: item.heroImageMobile ?? item.image,
    path: `news/${item.slug}`,
    tagKey: item.tagKey,
    defaultTag: item.defaultTag,
    titleKey: item.titleKey,
    defaultTitle: item.defaultTitle,
    date: item.date,
  }];
};

const caseSlide = ({ slug, heroImage, mobileImage }: (typeof CASE_SLIDES)[number]): Slide[] => {
  const project = ProductSite.find((p) => p.slug === slug);
  if (!project) return [];
  return [{
    key: `case-${slug}`,
    image: heroImage,
    mobileImage,
    path: `cases/${slug}`,
    tagKey: "cases.subtitle",
    defaultTag: "Портфолио",
    titleKey: `projects.${slug}.title`,
    defaultTitle: slug,
    date: project.year,
  }];
};

const SLIDES: Slide[] = [
  ...newsList.slice(0, 5).flatMap((n) => newsSlide(n.slug)),
  ...EXTRA_NEWS.flatMap(newsSlide),
  ...CASE_SLIDES.flatMap(caseSlide),
  ...TRAILING_NEWS.flatMap(newsSlide),
].filter((slide, i, all) => all.findIndex((s) => s.key === slide.key) === i);
const AUTOPLAY_MS = 7000;
const SWIPE_THRESHOLD_PX = 50;

const Chevron = ({ flip = false }: { flip?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PauseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
  </svg>
);

const MOBILE_QUERY = "(max-width: 768px)";

/** Wide composed banner on desktop, the original promo picture on phones. */
function SlideImage({ slide, alt, priority }: { slide: Slide; alt: string; priority: boolean }) {
  const common = { alt, fill: true, quality: 90, ...(priority ? { fetchPriority: "high" as const, loading: "eager" as const } : {}) };
  const { props: { srcSet: desktop } } = getImageProps({ ...common, src: slide.image, sizes: "(max-width: 1700px) 100vw, 1640px" });
  const { props: { srcSet: mobile, ...rest } } = getImageProps({ ...common, src: slide.mobileImage, sizes: "100vw" });
  return (
    <picture>
      <source media={MOBILE_QUERY} srcSet={mobile} sizes="100vw" />
      <source srcSet={desktop} sizes="(max-width: 1700px) 100vw, 1640px" />
      <img {...rest} alt={alt} className={styles.image} />
    </picture>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

export default function HeroNewsCarousel() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = localeDir(lang) === "rtl";
  const [active, setActive] = useState(0);
  // Slides whose image has been requested; others stay empty until needed so
  // the first paint only downloads the banner the visitor actually sees.
  const [visited, setVisited] = useState<ReadonlySet<number>>(() => new Set([0]));
  const [isHovered, setIsHovered] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const pointerStartX = useRef<number | null>(null);

  const count = SLIDES.length;
  const isPlaying = !isStopped && !isHovered && !reducedMotion;
  // Month names come from translations: Intl data for tg/ky/tk differs
  // between Node and browsers and would cause hydration mismatches.
  const months = t("hero.months", { returnObjects: true, defaultValue: [] }) as string[];

  const goTo = useCallback(
    (index: number) => {
      const target = (index + count) % count;
      setActive(target);
      setVisited((seen) => (seen.has(target) ? seen : new Set(seen).add(target)));
    },
    [count],
  );
  const next = useCallback(() => goTo(active + 1), [goTo, active]);
  const prev = useCallback(() => goTo(active - 1), [goTo, active]);

  // Current, neighbouring (so a switch is instant) and already shown slides.
  const needsImage = (index: number) => {
    const distance = Math.min(Math.abs(index - active), count - Math.abs(index - active));
    return distance <= 1 || visited.has(index);
  };

  // Restarts on every slide change, so a manual jump gets a full interval.
  useEffect(() => {
    if (!isPlaying) return;
    const id = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, isPlaying, next]);

  // Swipe and arrow keys follow reading direction: "forward" is left in RTL.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") pointerStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const dx = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
    if (isRtl ? dx > 0 : dx < 0) next();
    else prev();
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    if ((e.key === "ArrowRight") !== isRtl) next();
    else prev();
  };

  /** "24.08.2025" → day + month name; year-only dates ("2024") show the year. */
  const dateParts = (date: string) => {
    const [d, m] = date.split(".");
    if (!m) return { big: date, small: "" };
    return { big: String(Number(d)), small: months[Number(m) - 1] ?? m };
  };

  const slideLabel = (index: number) =>
    t("hero.slideOf", { current: index + 1, total: count, defaultValue: "{{current}} из {{total}}" });

  return (
    <section className={styles.hero} aria-roledescription="carousel" aria-label={t("news.title", "Последние новости")}>
      {/* The page's H1 stays the company headline for search engines */}
      <h1 className={styles.srOnly}>
        {t("hero.seoTitle", "Dushanbe Soft — разработка программного обеспечения в Таджикистане")}
      </h1>

      <div
        className={styles.banner}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setIsHovered(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsHovered(false);
        }}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStartX.current = null)}
      >
        {SLIDES.map((item, index) => {
          const isActive = index === active;
          const title = t(item.titleKey, item.defaultTitle);
          const shareUrl = encodeURIComponent(localeUrl(lang, item.path));
          const shareText = encodeURIComponent(title);
          const { big, small } = dateParts(item.date);
          return (
            <article
              key={item.key}
              className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              aria-roledescription="slide"
              aria-label={slideLabel(index)}
              aria-hidden={!isActive}
              inert={!isActive}
            >
              <div className={styles.media}>
                {needsImage(index) && <SlideImage slide={item} alt={title} priority={index === 0} />}
                <div className={styles.shade} aria-hidden="true" />
              </div>

              <div className={styles.caption}>
                <div className={styles.captionMain}>
                  <span className={styles.tag}>{t(item.tagKey, item.defaultTag)}</span>
                  <h2 className={styles.title}>
                    <Link href={localePath(lang, item.path)} className={styles.titleLink}>
                      {title}
                    </Link>
                  </h2>
                  <div className={styles.share}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                      <FaTelegram />
                    </a>
                    <a href={`https://x.com/intent/post?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="X">
                      <FaXTwitter />
                    </a>
                  </div>
                </div>

                <time className={styles.date} dateTime={item.date.split(".").reverse().join("-")}>
                  <span className={styles.dateBig}>{big}</span>
                  {small && <span className={styles.dateSmall}>{small}</span>}
                </time>
              </div>
            </article>
          );
        })}

        <button type="button" className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} aria-label={t("hero.prevSlide", "Предыдущая новость")}>
          <Chevron flip={!isRtl} />
        </button>
        <button type="button" className={`${styles.navBtn} ${styles.navNext}`} onClick={next} aria-label={t("hero.nextSlide", "Следующая новость")}>
          <Chevron flip={isRtl} />
        </button>

        <div className={styles.dots}>
          {SLIDES.map((item, index) => (
            <button
              key={item.key}
              type="button"
              className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
              onClick={() => goTo(index)}
              aria-label={slideLabel(index)}
              aria-current={index === active}
            />
          ))}
        </div>

        {!reducedMotion && (
          <button
            type="button"
            className={styles.playBtn}
            onClick={() => setIsStopped((s) => !s)}
            aria-label={isStopped ? t("hero.play", "Запустить автопрокрутку") : t("hero.pause", "Остановить автопрокрутку")}
          >
            {isStopped ? <PlayIcon /> : <PauseIcon />}
          </button>
        )}
      </div>
    </section>
  );
}
