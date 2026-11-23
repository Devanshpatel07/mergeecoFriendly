import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, MessageCircle, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { getInstagramProfileUrl } from '@/lib/instagram';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface HeroProps {
  locale: string;
  dict: any;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-light to-cream py-12 md:py-20 lg:py-24 border-b border-forest/10">
      {/* Kraft Background Texture Accent */}
      <div className="absolute inset-0 bg-kraft-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Dual CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-warm border border-forest/20 shadow-sm text-forest-dark text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-earth animate-ping" />
              <span>{dict.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-forest-dark tracking-tight leading-[1.12]">
              {dict.hero.headline}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-ink-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {dict.hero.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={`/${locale}/products`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-cream bg-forest hover:bg-forest-light shadow-kraft hover:shadow-kraft-lg hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>{dict.hero.shopBtn}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={getInstagramProfileUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-forest bg-cream-warm hover:bg-forest/10 border-2 border-forest/20 shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <Instagram className="w-5 h-5 text-earth" />
                <span>{dict.hero.instaBtn}</span>
              </a>
            </div>

            {/* Badges Bar */}
            <div className="pt-6 border-t border-forest/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream/60 border border-forest/10">
                <ShieldCheck className="w-5 h-5 text-forest shrink-0" />
                <span className="text-xs font-bold text-forest-dark leading-tight">{dict.hero.stats.cups}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream/60 border border-forest/10">
                <Sparkles className="w-5 h-5 text-leaf shrink-0" />
                <span className="text-xs font-bold text-forest-dark leading-tight">{dict.hero.stats.plasticFree}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream/60 border border-forest/10">
                <Heart className="w-5 h-5 text-earth shrink-0" />
                <span className="text-xs font-bold text-forest-dark leading-tight">{dict.hero.stats.local}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream/60 border border-forest/10">
                <span className="w-2.5 h-2.5 rounded-full bg-forest shrink-0" />
                <span className="text-xs font-bold text-forest-dark leading-tight">{dict.hero.stats.community}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo Slot */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow / frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-forest/20 via-earth/15 to-leaf/20 filter blur-xl opacity-70" />
              
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden border-4 border-cream shadow-2xl bg-cream-warm">
                <Image
                  src="/images/team/hero-women-products.webp"
                  alt="Merge Eco-Friendly Bhopal Women Team crafting sustainable products"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-cream/95 backdrop-blur-md p-3.5 rounded-2xl border border-forest/15 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-earth uppercase tracking-wider">Primary Manufacturing</p>
                    <p className="text-sm font-serif font-black text-forest-dark">250 ml Leak-Proof Cups</p>
                  </div>
                  <Link
                    href={`/${locale}/products/250ml-paper-cup`}
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-forest text-cream hover:bg-forest-light transition-colors"
                  >
                    View Specs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
