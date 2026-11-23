'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface HeaderProps {
  locale: string;
  dict: any;
}

export function Header({ locale, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/factory`, label: dict.nav.factory },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-md border-b border-forest/10 py-2.5'
          : 'bg-cream border-b border-forest/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-lg"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full shadow-sm border border-forest/20 shrink-0">
              <Image
                src="/images/logo/logo-square.png"
                alt="Merge Eco-Friendly Pvt. Ltd. Logo"
                fill
                sizes="(max-width: 768px) 48px, 56px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-xl md:text-2xl text-forest tracking-tight leading-none group-hover:text-forest-light transition-colors">
                MERGE
              </span>
              <span className="text-[10px] md:text-xs font-bold text-leaf-dark uppercase tracking-widest leading-tight mt-0.5">
                Eco-Friendly Pvt. Ltd.
              </span>
              <span className="text-[9px] text-ink-muted font-medium hidden sm:inline">
                Bhopal, India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    active
                      ? 'text-cream bg-forest shadow-sm'
                      : 'text-ink hover:text-forest hover:bg-forest/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Lang toggle & Order Now */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle currentLocale={locale} />
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hello Merge Eco-Friendly! I would like to place an order.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-cream bg-earth hover:bg-earth-dark shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{dict.nav.orderNow}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle currentLocale={locale} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-ink hover:text-forest hover:bg-forest/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-forest/10 bg-cream/98 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active
                      ? 'text-cream bg-forest shadow-sm'
                      : 'text-ink hover:text-forest hover:bg-forest/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-forest/10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Hello Merge Eco-Friendly! I would like to place an order.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-base font-bold text-cream bg-earth hover:bg-earth-dark shadow-md"
              >
                <PhoneCall className="w-5 h-5" />
                <span>{dict.nav.orderNow} (WhatsApp)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
