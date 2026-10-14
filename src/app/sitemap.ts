import { MetadataRoute } from 'next';
import { ProductSite } from '../const/product-site';
import { jobsData } from '../const/jobsData';
import { newsList } from '../const/news-data';
import { servicesList } from '../const/services-data';
import { i18nConfig } from '../../i18nConfig';
import { absoluteUrl, languageAlternates, localeUrl, ruDateToIso } from '../utils/seo';

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = i18nConfig.locales;
  const entries: MetadataRoute.Sitemap = [];

  // Emit one URL per locale, each carrying the full hreflang set.
  const add = (
    path: string,
    options: Omit<Entry, 'url' | 'alternates'> = {},
  ) => {
    languages.forEach((lang) => {
      entries.push({
        url: localeUrl(lang, path),
        alternates: { languages: languageAlternates(path) },
        ...options,
      });
    });
  };

  // Freshest news date doubles as "last changed" for the listing pages.
  const newsDates = newsList.map((n) => ruDateToIso(n.date)).sort();
  const latestNews = newsDates[newsDates.length - 1];

  add('', { changeFrequency: 'weekly', priority: 1.0, lastModified: latestNews });
  add('services', { changeFrequency: 'monthly', priority: 0.9 });
  servicesList.forEach((service) => {
    add(`services/${service.slug}`, { changeFrequency: 'monthly', priority: 0.9 });
  });
  add('products', { changeFrequency: 'monthly', priority: 0.8 });
  add('cases', { changeFrequency: 'monthly', priority: 0.8 });
  add('news', { changeFrequency: 'weekly', priority: 0.7, lastModified: latestNews });
  add('media', { changeFrequency: 'monthly', priority: 0.5 });

  ProductSite.forEach((project) => {
    add(`cases/${project.slug}`, {
      changeFrequency: 'yearly',
      priority: 0.7,
      images: [absoluteUrl(project.imageSrc)],
    });

    project.projectComponents?.forEach((group) => {
      group.items.forEach((item) => {
        if (item.slug) {
          add(`cases/${project.slug}/${item.slug}`, { changeFrequency: 'yearly', priority: 0.4 });
        }
      });
    });
  });

  newsList.forEach((item) => {
    add(`news/${item.slug}`, {
      changeFrequency: 'yearly',
      priority: 0.6,
      lastModified: ruDateToIso(item.date),
      images: [absoluteUrl(item.image)],
    });
  });

  jobsData.forEach((job) => {
    add(`jobs/${job.slug}`, { changeFrequency: 'weekly', priority: 0.6 });
  });

  return entries;
}
