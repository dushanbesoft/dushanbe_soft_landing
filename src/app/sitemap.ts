import { MetadataRoute } from 'next';
import { ProductSite } from '../const/product-site';
import { jobsData } from '../const/jobsData';
import { i18nConfig } from '../../i18nConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';
  const languages = i18nConfig.locales; // e.g. ['ru', 'en', 'tj']

  const getUrl = (lang: string, path = '') => {
    if (lang === 'ru') {
      return path ? `${siteUrl}/${path}` : `${siteUrl}`;
    }
    return path ? `${siteUrl}/${lang}/${path}` : `${siteUrl}/${lang}`;
  };

  const getAlternates = (path = '') => ({
    languages: {
      'ru': path ? `${siteUrl}/${path}` : `${siteUrl}`,
      'tg': path ? `${siteUrl}/tj/${path}` : `${siteUrl}/tj`,
      'en': path ? `${siteUrl}/en/${path}` : `${siteUrl}/en`,
      'x-default': path ? `${siteUrl}/${path}` : `${siteUrl}`,
    },
  });

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Core pages (Home)
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl(lang),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: getAlternates(),
    });
  });

  // 2. Products page
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl(lang, 'products'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: getAlternates('products'),
    });
  });
  
  // 3. Cases archive page
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl(lang, 'cases'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: getAlternates('cases'),
    });
  });

  // 4. Individual case studies
  ProductSite.forEach((project) => {
    languages.forEach((lang) => {
      sitemapEntries.push({
        url: getUrl(lang, `cases/${project.slug}`),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: getAlternates(`cases/${project.slug}`),
      });
    });

    // 5. Case component subpages (e.g. telegram bot, screen views)
    if (project.projectComponents) {
      project.projectComponents.forEach((group) => {
        group.items.forEach((item) => {
          if (item.slug) {
            languages.forEach((lang) => {
              sitemapEntries.push({
                url: getUrl(lang, `cases/${project.slug}/${item.slug}`),
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: getAlternates(`cases/${project.slug}/${item.slug}`),
              });
            });
          }
        });
      });
    }
  });

  // 6. Job vacancy pages
  jobsData.forEach((job) => {
    languages.forEach((lang) => {
      sitemapEntries.push({
        url: getUrl(lang, `jobs/${job.slug}`),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: getAlternates(`jobs/${job.slug}`),
      });
    });
  });

  return sitemapEntries;
}
