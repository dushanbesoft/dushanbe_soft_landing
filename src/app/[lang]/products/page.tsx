import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ProductsSection from '../../../components/ProductsSection/ProductsSection';

const i18nNamespaces = ['common'];

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
