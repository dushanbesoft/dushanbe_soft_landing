import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import styles from "./MediaWatch.module.css";
import {
  mediaGalleryItems,
  getMediaById,
  getRelatedMedia,
  mediaTitle,
  mediaTag,
  formatDurationIso,
} from "@/const/media-content";
import { LOCALES, contentLocale, localeHreflang } from "@/utils/locales";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import initTranslations from "@/app/i18n";
import { FadeIn } from "@/components/MotionWrapper";
import {
  COMPANY,
  ORGANIZATION_ID,
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
  homeCrumb,
  jsonLdString,
  localeUrl,
  truncate,
} from "@/utils/seo";

interface PageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z" />
  </svg>
);

export async function generateStaticParams() {
  const languages = LOCALES;
  const params: { lang: string; id: string }[] = [];

  languages.forEach((lang) => {
    mediaGalleryItems.forEach((item) => {
      params.push({ lang, id: item.id });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, id } = await params;
  const item = getMediaById(id);

  if (!item) {
    return {};
  }

  const title = mediaTitle(item, lang);
  const desc = item.caption || title;

  return buildPageMetadata({
    lang,
    path: `media/${id}`,
    title: `${title} | Dushanbe Soft`,
    description: truncate(desc),
    image: { url: item.thumb, alt: title },
    type: "article",
    contentPage: true,
  });
}

export default async function MediaWatchPage({ params }: PageProps) {
  const { lang, id } = await params;
  const item = getMediaById(id);

  if (!item) {
    notFound();
  }

  const { t, resources } = await initTranslations(lang, ["common"]);
  const relatedVideos = getRelatedMedia(item.id, 4);

  const homeUrl = lang === "ru" ? "/" : `/${lang}`;
  const mediaUrl = lang === "ru" ? "/media" : `/${lang}/media`;
  const title = mediaTitle(item, lang);
  const tag = mediaTag(item, lang);
  const pageUrl = localeUrl(lang, `media/${item.id}`);
  const durationIso = formatDurationIso(item.duration);

  // Google Video structured data (VideoObject watch page)
  const jsonLd = [
    breadcrumbJsonLd([
      homeCrumb(lang),
      { name: t("media.title", "Фото и видео"), url: localeUrl(lang, "media") },
      { name: title, url: pageUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": item.type === "video" ? "VideoObject" : "ImageObject",
      name: title,
      description: item.caption || title,
      thumbnailUrl: [absoluteUrl(item.thumb)],
      uploadDate: "2026-01-15T12:00:00+05:00",
      ...(item.type === "video"
        ? {
            contentUrl: absoluteUrl(item.src),
            embedUrl: pageUrl,
            ...(durationIso ? { duration: durationIso } : {}),
          }
        : {
            contentUrl: absoluteUrl(item.src),
          }),
      inLanguage: localeHreflang(contentLocale(lang)),
      publisher: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: COMPANY.name,
        logo: {
          "@type": "ImageObject",
          url: COMPANY.logo,
        },
      },
    },
  ];

  return (
    <TranslationsProvider namespaces={["common"]} locale={lang} resources={resources}>
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
        />
        <div className="header-global">
          <Header />
        </div>

        <div className={styles.container}>
          {/* Navigation & Breadcrumbs */}
          <div className={styles.navRow}>
            <nav className={styles.breadcrumbs} aria-label={t("ui.breadcrumbs", "Хлебные крошки")}>
              <Link href={homeUrl} className={styles.breadcrumbLink}>
                {t("ui.home", "Главная")}
              </Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <Link href={mediaUrl} className={styles.breadcrumbLink}>
                {t("media.title", "Фото и видео")}
              </Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbCurrent}>{title}</span>
            </nav>

            <Link href={mediaUrl} className={styles.backBtn}>
              ← {t("media.backToGallery", "Ко всей галерее")}
            </Link>
          </div>

          {/* Primary Video Watch Area */}
          <FadeIn direction="up">
            <article className={styles.watchArea}>
              <div className={styles.playerWrapper}>
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={item.thumb}
                    controls
                    playsInline
                    className={styles.videoPlayer}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={title}
                    className={styles.imagePlayer}
                  />
                )}
              </div>

              <div className={styles.infoCol}>
                <div className={styles.badgeRow}>
                  {tag && <span className={styles.tagBadge}>{tag}</span>}
                  {item.duration && (
                    <span className={styles.durationBadge}>⏱ {item.duration}</span>
                  )}
                </div>

                <h1 className={styles.title}>{title}</h1>

                <div className={styles.captionBox}>
                  <p className={styles.captionTitle}>{t("media.captionLabel", "Описание")}</p>
                  <p className={styles.captionText}>{item.caption}</p>
                </div>

                <div className={styles.actionsRow}>
                  <Link href={mediaUrl} className={styles.galleryLinkBtn}>
                    {t("media.viewMoreMedia", "Смотреть другие материалы")} →
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Related Videos Section */}
          {relatedVideos.length > 0 && (
            <section className={styles.relatedSection} aria-label={t("media.otherVideos", "Другие видео")}>
              <div className={styles.relatedHeader}>
                <h2 className={styles.relatedHeading}>{t("media.otherVideos", "Другие видео")}</h2>
                <Link href={mediaUrl} className={styles.breadcrumbLink}>
                  {t("media.viewAll", "Смотреть все")} →
                </Link>
              </div>

              <div className={styles.relatedGrid}>
                {relatedVideos.map((rel) => {
                  const relTitle = mediaTitle(rel, lang);
                  const relTag = mediaTag(rel, lang);
                  const relUrl = lang === "ru" ? `/media/${rel.id}` : `/${lang}/media/${rel.id}`;

                  return (
                    <Link key={rel.id} href={relUrl} className={styles.relatedCard}>
                      <div className={styles.relatedThumb}>
                        <Image
                          src={rel.thumb}
                          alt={relTitle}
                          fill
                          sizes="(max-width: 768px) 50vw, 250px"
                          className={styles.relatedImage}
                        />
                        <span className={styles.relatedShade} aria-hidden="true" />
                        <span className={styles.relatedPlay} aria-hidden="true">
                          <PlayIcon />
                        </span>
                        {relTag && <span className={styles.relatedTag}>{relTag}</span>}
                        {rel.duration && (
                          <span className={styles.relatedDuration}>{rel.duration}</span>
                        )}
                      </div>
                      <div className={styles.relatedContent}>
                        <p className={styles.relatedItemTitle}>{relTitle}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
