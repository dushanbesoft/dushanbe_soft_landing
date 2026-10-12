import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ProductsSection from '../../../components/ProductsSection/ProductsSection';

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t } = await initTranslations(lang, i18nNamespaces);
  
  const title = t('header.products', { defaultValue: 'Продукты' }) + ' | Dushanbe Soft';
  const description = t('seo.products_description', { defaultValue: 'Собственные продукты и решения от компании Dushanbe Soft.' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';
  const currentUrl = lang === 'ru' ? `${siteUrl}/products` : `${siteUrl}/${lang}/products`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: currentUrl,
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'tg': `${siteUrl}/tj/products`,
        'ru': `${siteUrl}/products`,
        'en': `${siteUrl}/en/products`,
        'x-default': `${siteUrl}/products`,
      },
    },
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t, resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className="main-global">
        <div className="header-global">
          <Header />
        </div>
        <ProductsSection showAll={true} lang={lang} />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
