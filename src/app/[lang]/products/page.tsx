import type { Metadata } from 'next';
import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ProductsSection from '../../../components/ProductsSection/ProductsSection';

import { buildPageMetadata } from '../../../utils/seo';

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { t } = await initTranslations(lang, i18nNamespaces);

  return buildPageMetadata({
    lang,
    path: 'products',
    title: t('seo.products_title'),
    description: t('seo.products_description'),
  });
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className="main-global">
        <div className="header-global">
          <Header />
        </div>
        <ProductsSection showAll={true} lang={lang} />
        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
