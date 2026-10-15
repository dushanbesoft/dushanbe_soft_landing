"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MediaSection.module.css";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../MotionWrapper";
import {
  orderedMediaItems as mediaGalleryItems,
  featuredMediaItems,
  mediaTitle,
  mediaTag,
  MediaItem,
} from "@/const/media-content";

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z" />
  </svg>
);

// Muted inline preview on hover (desktop only); the file loads on first hover.
const startPreview = (e: React.MouseEvent<HTMLElement>) => {
  if (!window.matchMedia("(hover: hover)").matches) return;
  const video = e.currentTarget.querySelector("video");
  if (!video) return;
  video.play().then(() => (video.dataset.playing = "1")).catch(() => {});
};

const stopPreview = (e: React.MouseEvent<HTMLElement>) => {
  const video = e.currentTarget.querySelector("video");
  if (!video) return;
  video.pause();
  video.currentTime = 0;
  delete video.dataset.playing;
};

const ArrowIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrowIcon}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z"
      fill="url(#paint_media_arrow)"
    />
    <defs>
      <linearGradient
        id="paint_media_arrow"
        x1="6.1875"
        y1="15.7496"
        x2="9.97473"
        y2="4.28374"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DDC84" />
        <stop offset="1" stopColor="#02704F" />
      </linearGradient>
    </defs>
  </svg>
);

interface MediaSectionProps {
  showAll?: boolean;
  lang?: string;
}

export default function MediaSection({ showAll = false, lang = "ru" }: MediaSectionProps) {
  const { t } = useTranslation("common");

  const [filter, setFilter] = useState<"all" | "video" | "image">("all");
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);
  const [activeList, setActiveList] = useState<MediaItem[]>([]);

  const videoCount = useMemo(
    () => mediaGalleryItems.filter((i) => i.type === "video").length,
    []
  );
  const photoCount = useMemo(
    () => mediaGalleryItems.filter((i) => i.type === "image").length,
    []
  );

  const filteredItems = useMemo(() => {
    if (filter === "all") return mediaGalleryItems;
    return mediaGalleryItems.filter((item) => item.type === filter);
  }, [filter]);

  const openLightbox = (item: MediaItem, list: MediaItem[]) => {
    setActiveItem(item);
    setActiveList(list);
  };

  const closeLightbox = () => {
    setActiveItem(null);
  };

  const handlePrev = useCallback(() => {
    if (!activeItem || activeList.length === 0) return;
    const currentIndex = activeList.findIndex((i) => i.id === activeItem.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : activeList.length - 1;
    setActiveItem(activeList[prevIndex]);
  }, [activeItem, activeList]);

  const handleNext = useCallback(() => {
    if (!activeItem || activeList.length === 0) return;
    const currentIndex = activeList.findIndex((i) => i.id === activeItem.id);
    const nextIndex = currentIndex < activeList.length - 1 ? currentIndex + 1 : 0;
    setActiveItem(activeList[nextIndex]);
  }, [activeItem, activeList]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem, handlePrev, handleNext]);

  const mediaPageUrl = lang === "ru" ? "/media" : `/${lang}/media`;

  const renderCard = (item: MediaItem, listContext: MediaItem[]) => {
    const title = mediaTitle(item, lang);
    const tag = mediaTag(item, lang);
    return (
      <button
        type="button"
        key={item.id}
        className={styles.reel}
        onClick={() => openLightbox(item, listContext)}
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
        aria-label={title}
      >
        <Image
          src={item.thumb}
          alt={title}
          fill
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 240px"
          className={styles.reelImage}
        />
        {item.type === "video" && (
          <video className={styles.reelVideo} src={item.src} muted loop playsInline preload="none" aria-hidden="true" />
        )}
        <span className={styles.reelShade} aria-hidden="true" />
        {tag && <span className={styles.reelTag}>{tag}</span>}
        {item.type === "video" && (
          <span className={styles.reelPlay} aria-hidden="true">
            <PlayIcon />
          </span>
        )}
        <span className={styles.reelInfo}>
          <span className={styles.reelTitle}>{title}</span>
          {item.duration && <span className={styles.reelDuration}>{item.duration}</span>}
        </span>
      </button>
    );
  };

  return (
    <section className={styles.section} id="media" aria-label={t("media.title", "Фото и видео")}>
      <FadeIn direction="up" fullWidth>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <div className={styles.titles}>
              <span className={styles.subtitle}>{t("media.subtitle", "медиа")}</span>
              {showAll ? (
                <h1 className={styles.title}>{t("media.title", "Фото и видео")}</h1>
              ) : (
                <h2 className={styles.title}>{t("media.title", "Фото и видео")}</h2>
              )}
            </div>

            <div className={styles.headerButtons}>
              {!showAll && (
                <Link
                  href={mediaPageUrl}
                  className={styles.viewAllBtn}
                  aria-label={t("media.viewAll", "Посмотреть еще")}
                >
                  <span className={styles.viewAllText}>{t("media.viewAll", "Посмотреть еще")}</span>
                  <ArrowIcon />
                </Link>
              )}

              <Link
                href="https://www.instagram.com/dushanbe_soft/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instaBtn}
                aria-label={t("media.instagram", "Мы в Instagram")}
              >
                <span className={styles.instaText}>{t("media.instagram", "Мы в Instagram")}</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>

          {!showAll && (
            <div className={styles.reelStrip}>
              {featuredMediaItems.map((item) => renderCard(item, featuredMediaItems))}
            </div>
          )}

          {showAll && (
            <>
              <div className={styles.filterRow} role="tablist">
                <button
                  type="button"
                  className={`${styles.filterBtn} ${filter === "all" ? styles.filterBtnActive : ""}`}
                  onClick={() => setFilter("all")}
                >
                  {t("media.filterAll", "Все")}{" "}
                  <span className={styles.countBadge}>{mediaGalleryItems.length}</span>
                </button>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${filter === "video" ? styles.filterBtnActive : ""}`}
                  onClick={() => setFilter("video")}
                >
                  {t("media.filterVideo", "Видео")}{" "}
                  <span className={styles.countBadge}>{videoCount}</span>
                </button>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${filter === "image" ? styles.filterBtnActive : ""}`}
                  onClick={() => setFilter("image")}
                >
                  {t("media.filterPhoto", "Фото")}{" "}
                  <span className={styles.countBadge}>{photoCount}</span>
                </button>
              </div>

              <div className={styles.reelGrid}>
                {filteredItems.map((item) => renderCard(item, filteredItems))}
              </div>
            </>
          )}
        </div>
      </FadeIn>

      {activeItem && (
        <div
          className={styles.lightboxBackdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {activeList.length > 1 && (
            <>
              <button
                type="button"
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label={t("cases.gallery_prev", "Назад")}
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label={t("cases.gallery_next", "Вперед")}
              >
                ›
              </button>
            </>
          )}

          <div className={styles.lightboxModal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label={t("cases.gallery_close", "Закрыть")}
            >
              ✕
            </button>

            <div className={styles.lightboxMediaArea}>
              {activeItem.type === "video" ? (
                <video
                  src={activeItem.src}
                  controls
                  autoPlay
                  playsInline
                  className={styles.lightboxVideo}
                />
              ) : (
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className={styles.lightboxImage}
                />
              )}
            </div>

            <div className={styles.lightboxFooter}>
              <div className={styles.lightboxCounter}>
                {activeList.findIndex((i) => i.id === activeItem.id) + 1} / {activeList.length}
                {activeItem.duration && ` • ⏱ ${activeItem.duration}`}
              </div>
              <p className={styles.lightboxTitle}>{mediaTitle(activeItem, lang)}</p>
              <p className={styles.lightboxCaption}>{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
