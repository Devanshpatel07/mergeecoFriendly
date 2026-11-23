import en from '@/messages/en.json';
import hi from '@/messages/hi.json';

export type Locale = 'en' | 'hi';
export const locales: Locale[] = ['en', 'hi'];
export const defaultLocale: Locale = 'en';

const dictionaries = {
  en,
  hi,
};

export function getDictionary(locale: string) {
  if (locale === 'hi') {
    return dictionaries.hi;
  }
  return dictionaries.en;
}
