import type { Metadata } from 'next';
import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import MediaSection from '../../../components/MediaSection/MediaSection';

import { buildPageMetadata } from '../../../utils/seo';

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { t } = await initTranslations(lang, i18nNamespaces);

  return buildPageMetadata({
    lang,
    path: 'media',
    title: t('seo.media_title'),
    description: t('seo.media_description'),
  });
}

export default async function MediaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className="main-global">
        <div className="header-global">
          <Header />
        </div>
        <MediaSection showAll={true} lang={lang} />
        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
