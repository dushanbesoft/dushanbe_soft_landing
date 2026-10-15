import { Tektur, Nunito_Sans, Vazirmatn } from 'next/font/google';

export const tektur = Tektur({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['400', '600', '700'],
  variable: '--font-tektur',
  display: 'swap',
});

export const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

// Tektur and Nunito Sans have no Arabic script; used for fa/ar (see globals.css).
export const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-vazirmatn',
  display: 'swap',
});
