import { MetadataRoute } from 'next';
import { ProductSite } from '../const/product-site';
import { jobsData } from '../const/jobsData';
import { newsList } from '../const/news-data';
import { servicesList } from '../const/services-data';
import { absoluteUrl, languageAlternates, localeUrl, publishedLocales, ruDateToIso } from '../utils/seo';

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Emit one URL per published locale, each carrying the full hreflang set.
  // `contentPage` paths only exist in the hand-translated locales (see seo.ts).
  const add = (
    path: string,
    options: Omit<Entry, 'url' | 'alternates'> = {},
    contentPage = false,
  ) => {
    publishedLocales(contentPage).forEach((lang) => {
      entries.push({
        url: localeUrl(lang, path),
        alternates: { languages: languageAlternates(path, contentPage) },
        ...options,
      });
    });
  };

  // Freshest news date doubles as "last changed" for the listing pages.
  const newsDates = newsList.map((n) => ruDateToIso(n.date)).sort();
  const latestNews = newsDates[newsDates.length - 1];

  add('', { changeFrequency: 'weekly', priority: 1.0, lastModified: latestNews });
  add('services', { changeFrequency: 'monthly', priority: 0.9 }, true);
  servicesList.forEach((service) => {
    add(`services/${service.slug}`, { changeFrequency: 'monthly', priority: 0.9 }, true);
  });
  add('products', { changeFrequency: 'monthly', priority: 0.8 });
  add('cases', { changeFrequency: 'monthly', priority: 0.8 });
  add('news', { changeFrequency: 'weekly', priority: 0.7, lastModified: latestNews });
  add('media', { changeFrequency: 'monthly', priority: 0.5 });

  ProductSite.forEach((project) => {
    add(
      `cases/${project.slug}`,
      {
        changeFrequency: 'yearly',
        priority: 0.7,
        images: [absoluteUrl(project.imageSrc)],
      },
      true,
    );

    project.projectComponents?.forEach((group) => {
      group.items.forEach((item) => {
        if (item.slug) {
          add(`cases/${project.slug}/${item.slug}`, { changeFrequency: 'yearly', priority: 0.4 }, true);
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
    }, true);
  });

  jobsData.forEach((job) => {
    add(`jobs/${job.slug}`, { changeFrequency: 'weekly', priority: 0.6 }, true);
  });

  return entries;
}
