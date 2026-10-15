export const LOCALES = ['ru', 'en', 'tj', 'uz', 'kk', 'ky', 'tk', 'fa', 'ar'] as const;

export const i18nConfig = {
  locales: [...LOCALES],
  defaultLocale: 'ru',
  prefixDefault: false,
  localeDetector: false as const,
  serverSetCookie: 'never' as const,
  localeCookie: '',
};
