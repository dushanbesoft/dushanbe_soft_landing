import { MetadataRoute } from 'next';
import { ProductSite } from '../const/product-site';
import { i18nConfig } from '../../i18nConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbesoft.tj';
  const languages = i18nConfig.locales; // e.g. ['ru', 'tj', 'en']

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Core pages (Home)
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: `${siteUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'ru': `${siteUrl}/ru`,
          'tg': `${siteUrl}/tj`,
          'en': `${siteUrl}/en`,
        },
      },
    });
  });
  
  // 2. Cases archive page
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: `${siteUrl}/${lang}/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'ru': `${siteUrl}/ru/cases`,
          'tg': `${siteUrl}/tj/cases`,
          'en': `${siteUrl}/en/cases`,
        },
      },
    });
  });

  // 3. Individual case studies
  ProductSite.forEach((project) => {
    languages.forEach((lang) => {
      sitemapEntries.push({
        url: `${siteUrl}/${lang}/cases/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            'ru': `${siteUrl}/ru/cases/${project.slug}`,
            'tg': `${siteUrl}/tj/cases/${project.slug}`,
            'en': `${siteUrl}/en/cases/${project.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
