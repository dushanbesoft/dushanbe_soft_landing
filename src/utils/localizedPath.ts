export function getLocalizedPath(path: string, lang: string = 'ru'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (lang === 'ru') {
    return normalizedPath;
  }

  return normalizedPath === '/' ? `/${lang}` : `/${lang}${normalizedPath}`;
}
