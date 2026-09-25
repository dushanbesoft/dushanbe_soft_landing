import { Tektur, Nunito_Sans } from 'next/font/google';

export const tektur = Tektur({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-tektur',
});

export const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito-sans',
});
