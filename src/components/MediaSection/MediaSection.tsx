"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MediaSection.module.css";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../MotionWrapper";

const mediaItems = {
  leftTall: {
    id: "media-1",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/11557c74e5c4b1ab27e2ce34a42abcc535e8dcd9?width=728",
    alt: "Dushanbe Soft Media 1",
  },
  middleLeftTop: {
    id: "media-2",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b2f15eb9026b15f7137c6919978d3b53b427b7f1?width=581",
    alt: "Dushanbe Soft Media 2",
  },
  middleLeftBottom: {
    id: "media-3",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b3c91b0e0d2f6aa9d39232583c21cb86e663ab39?width=581",
    alt: "Dushanbe Soft Media 3",
  },
  middleRightTop: {
    id: "media-4",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/2e33f119452dd877502c89958bc9896a02b7c245?width=581",
    alt: "Dushanbe Soft Media 4",
  },
  middleRightBottom: {
    id: "media-5",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/35bafd1c3797a237d434305e674f120dcb58f6a8?width=581",
    alt: "Dushanbe Soft Media 5",
  },
  rightTall: {
    id: "media-6",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/dbfed08822b7b71107bca887dfe39dabe6fae140?width=728",
    alt: "Dushanbe Soft Media 6",
  },
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

export default function MediaSection() {
  const { t } = useTranslation("common");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={styles.section} id="media" aria-label={t("media.title", "Фото и видео")}>
      <FadeIn direction="up" fullWidth>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <div className={styles.titles}>
              <span className={styles.subtitle}>{t("media.subtitle", "медиа")}</span>
              <h2 className={styles.title}>{t("media.title", "Фото и видео")}</h2>
            </div>

            <Link
              href="https://www.instagram.com/dushanbesoft"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaBtn}
              aria-label={t("media.instagram", "Мы в Instagram")}
            >
              <span className={styles.instaText}>{t("media.instagram", "Мы в Instagram")}</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className={styles.galleryGrid}>
            {/* Column 1: Left tall */}
            <div className={styles.columnSingle}>
              <div
                className={styles.mediaItem}
                onClick={() => setSelectedImage(mediaItems.leftTall.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(mediaItems.leftTall.src)}
              >
                <Image
                  src={mediaItems.leftTall.src}
                  alt={mediaItems.leftTall.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 30vw"
                  className={styles.mediaImage}
                />
                <div className={styles.overlay} />
              </div>
            </div>

            {/* Column 2: Center-left stacked */}
            <div className={styles.column}>
              <div
                className={styles.mediaItem}
                onClick={() => setSelectedImage(mediaItems.middleLeftTop.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(mediaItems.middleLeftTop.src)}
              >
                <Image
                  src={mediaItems.middleLeftTop.src}
                  alt={mediaItems.middleLeftTop.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className={styles.mediaImage}
                />
                <div className={styles.overlay} />
              </div>

              <div
                className={styles.mediaItem}
                onClick={() => setSelectedImage(mediaItems.middleLeftBottom.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(mediaItems.middleLeftBottom.src)}
              >
                <Image
                  src={mediaItems.middleLeftBottom.src}
                  alt={mediaItems.middleLeftBottom.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className={styles.mediaImage}
                />
                <div className={styles.overlay} />
              </div>
            </div>

            {/* Column 3: Center-right stacked */}
            <div className={styles.column}>
              <div
                className={styles.mediaItem}
                onClick={() => setSelectedImage(mediaItems.middleRightTop.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(mediaItems.middleRightTop.src)}
              >
                <Image
                  src={mediaItems.middleRightTop.src}
                  alt={mediaItems.middleRightTop.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className={styles.mediaImage}
                />
                <div className={styles.overlay} />
              </div>

              <div
                className={styles.mediaItem}
                onClick={() => setSelectedImage(mediaItems.middleRightBottom.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(mediaItems.middleRightBottom.src)}
              >
                <Image
                  src={mediaItems.middleRightBottom.src}
                  alt={mediaItems.middleRightBottom.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className={styles.mediaImage}
                />
                <div className={styles.overlay} />
              </div>
            </div>

            {/* Column 4: Right tall */}
            <div className={styles.columnSingle}>
              <div
                className={styles.mediaItem}
                onClick={() => setSelectedImage(mediaItems.rightTall.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(mediaItems.rightTall.src)}
              >
                <Image
                  src={mediaItems.rightTall.src}
                  alt={mediaItems.rightTall.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 30vw"
                  className={styles.mediaImage}
                />
                <div className={styles.overlay} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedImage(null)}
              aria-label="Закрыть"
            >
              ✕
            </button>
            <img src={selectedImage} alt="Media enlarged" className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </section>
  );
}
