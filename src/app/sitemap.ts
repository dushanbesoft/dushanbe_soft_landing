import { MetadataRoute } from 'next';
import { ProductSite } from '../const/product-site';
import { jobsData } from '../const/jobsData';
import { i18nConfig } from '../../i18nConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';
  const languages = i18nConfig.locales;

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

  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl(lang),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: getAlternates(),
    });
  });

  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl(lang, 'products'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: getAlternates('products'),
    });
  });
  
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl(lang, 'cases'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: getAlternates('cases'),
    });
  });

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
