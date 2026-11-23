'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLocale: string;
}

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const pathname = usePathname();

  // Switch locale in pathname: e.g. /en/products -> /hi/products
  const getTargetUrl = () => {
    const targetLocale = currentLocale === 'en' ? 'hi' : 'en';
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    segments[0] = targetLocale;
    return `/${segments.join('/')}`;
  };

  return (
    <Link
      href={getTargetUrl()}
      aria-label={currentLocale === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English'}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-forest bg-cream hover:bg-forest/10 border border-forest/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
    >
      <Globe className="w-3.5 h-3.5 text-earth" />
      <span>{currentLocale === 'en' ? 'हिन्दी' : 'English'}</span>
    </Link>
  );
}
