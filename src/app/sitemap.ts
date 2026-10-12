import { MetadataRoute } from 'next';
import { ProductSite } from '../const/product-site';
import { i18nConfig } from '../../i18nConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';
  const languages = i18nConfig.locales; // e.g. ['ru', 'tj', 'en']

  const getUrl = (path: string, lang: string) => {
    const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
    if (lang === 'ru') {
      return `${siteUrl}${cleanPath || ''}`;
    }
    return `${siteUrl}/${lang}${cleanPath}`;
  };

  const getAlternates = (path: string) => ({
    languages: {
      'ru': getUrl(path, 'ru'),
      'tg': getUrl(path, 'tj'),
      'en': getUrl(path, 'en'),
    },
  });

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Core pages (Home)
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl('', lang),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: getAlternates(''),
    });
  });

  // 2. Products archive page
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl('/products', lang),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: getAlternates('/products'),
    });
  });
  
  // 3. Cases archive page
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: getUrl('/cases', lang),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: getAlternates('/cases'),
    });
  });

  // 4. Individual case studies & their components
  ProductSite.forEach((project) => {
    languages.forEach((lang) => {
      sitemapEntries.push({
        url: getUrl(`/cases/${project.slug}`, lang),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: getAlternates(`/cases/${project.slug}`),
      });

      if (project.projectComponents) {
        project.projectComponents.forEach((group) => {
          group.items.forEach((item) => {
            if (item.slug) {
              sitemapEntries.push({
                url: getUrl(`/cases/${project.slug}/${item.slug}`, lang),
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: getAlternates(`/cases/${project.slug}/${item.slug}`),
              });
            }
          });
        });
      }
    });
  });

  return sitemapEntries;
}
