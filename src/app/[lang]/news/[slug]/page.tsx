import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import styles from "./NewsDetail.module.css";
import { newsList, getNewsBySlug, getRelatedNews } from "@/const/news-data";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import initTranslations from "@/app/i18n";
import { FadeIn } from "@/components/MotionWrapper";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const languages = ["ru", "tj", "en"];
  const params: { lang: string; slug: string }[] = [];

  languages.forEach((lang) => {
    newsList.forEach((item) => {
      params.push({ lang, slug: item.slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return {};
  }

  const { t } = await initTranslations(lang, ["common"]);
  const title = t(item.titleKey, item.defaultTitle) + " | Dushanbe Soft";
  const description = t(item.descKey, item.defaultDesc);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dushanbe-soft.tj";
  const currentUrl = lang === "ru" ? `${siteUrl}/news/${slug}` : `${siteUrl}/${lang}/news/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: currentUrl,
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: item.defaultTitle,
        },
      ],
      type: "article",
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        tg: `${siteUrl}/tj/news/${slug}`,
        ru: `${siteUrl}/news/${slug}`,
        en: `${siteUrl}/en/news/${slug}`,
        "x-default": `${siteUrl}/news/${slug}`,
      },
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const { t, resources } = await initTranslations(lang, ["common"]);
  const relatedNews = getRelatedNews(slug, 3);

  const homeUrl = lang === "ru" ? "/" : `/${lang}`;
  const newsUrl = lang === "ru" ? "/news" : `/${lang}/news`;
  const contactUrl = lang === "ru" ? "/#contact" : `/${lang}/#contact`;

  const tag = t(item.tagKey, item.defaultTag);
  const title = t(item.titleKey, item.defaultTitle);
  const desc = t(item.descKey, item.defaultDesc);

  const getNewsUrl = (itemSlug: string) => {
    return lang === "ru" ? `/news/${itemSlug}` : `/${lang}/news/${itemSlug}`;
  };

  const getCaseUrl = (caseSlug?: string) => {
    if (!caseSlug) return null;
    return lang === "ru" ? `/cases/${caseSlug}` : `/${lang}/cases/${caseSlug}`;
  };

  const caseUrl = getCaseUrl(item.fullContent?.caseSlug);

  return (
    <TranslationsProvider namespaces={["common"]} locale={lang} resources={resources}>
      <main className={styles.main}>
        <div className="header-global">
          <Header />
        </div>

        <div className={styles.container}>
          <div className={styles.navRow}>
            <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
              <Link href={homeUrl} className={styles.breadcrumbLink}>
                Главная
              </Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <Link href={newsUrl} className={styles.breadcrumbLink}>
                {t("news.viewAll", "Все новости")}
              </Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbCurrent}>{title}</span>
            </nav>

            <Link href={newsUrl} className={styles.backBtn}>
              ← {t("news.viewAll", "Все новости")}
            </Link>
          </div>

          <FadeIn direction="up">
            <header className={styles.articleHeader}>
              <div className={styles.metaRow}>
                <span className={styles.categoryBadge}>{tag}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>📅 {item.date}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>⏱ {item.readTime}</span>
              </div>

              <h1 className={styles.title}>{title}</h1>
            </header>
          </FadeIn>

          <FadeIn direction="up">
            <div className={styles.bannerWrapper}>
              <Image
                src={item.image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className={styles.bannerImage}
              />
            </div>
          </FadeIn>

          <div className={styles.articleBody}>
            <article className={styles.contentCol}>
              <p className={styles.leadText}>
                {item.fullContent?.lead || desc}
              </p>

              {item.fullContent?.sections?.map((section, idx) => (
                <div key={idx} className={styles.sectionBlock}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  <p className={styles.sectionText}>{section.text}</p>
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className={styles.bulletList}>
                      {section.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} className={styles.bulletItem}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {item.fullContent?.techStack && item.fullContent.techStack.length > 0 && (
                <div className={styles.techBox}>
                  <h3 className={styles.techTitle}>Использованный стек технологий</h3>
                  <div className={styles.techBadges}>
                    {item.fullContent.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {caseUrl && (
                <Link href={caseUrl} className={styles.caseLinkBtn}>
                  <span>Посмотреть кейс проекта в портфолио</span>
                  <span>→</span>
                </Link>
              )}
            </article>

            <aside className={styles.sidebarCol}>
              <div className={styles.ctaCard}>
                <h3 className={styles.ctaTitle}>Интересует подобное решение?</h3>
                <p className={styles.ctaText}>
                  Команда Dushanbe Soft проектирует и разрабатывает надежные цифровые платформы, ERP, SaaS и мобильные приложения под ключ.
                </p>
                <Link href={contactUrl} className={styles.ctaBtn}>
                  Обсудить проект
                </Link>
              </div>

              {relatedNews.length > 0 && (
                <div className={styles.relatedBlock}>
                  <h3 className={styles.relatedHeading}>Другие новости</h3>
                  <div className={styles.relatedList}>
                    {relatedNews.map((rel) => {
                      const relTitle = t(rel.titleKey, rel.defaultTitle);
                      return (
                        <Link
                          key={rel.id}
                          href={getNewsUrl(rel.slug)}
                          className={styles.relatedItem}
                        >
                          <div className={styles.relatedThumb}>
                            <Image
                              src={rel.image}
                              alt={relTitle}
                              fill
                              sizes="72px"
                              className={styles.relatedImage}
                            />
                          </div>
                          <div className={styles.relatedContent}>
                            <span className={styles.relatedDate}>{rel.date}</span>
                            <h4 className={styles.relatedTitle}>{relTitle}</h4>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
