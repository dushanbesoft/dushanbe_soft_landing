import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dushanbe Soft — разработка ПО в Таджикистане',
    short_name: 'Dushanbe Soft',
    description:
      'IT-компания в Душанбе: разработка сайтов, мобильных приложений, CRM/ERP систем и SMS-рассылки.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000607',
    theme_color: '#000607',
    lang: 'ru',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
