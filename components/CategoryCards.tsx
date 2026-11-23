import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Coffee, Sparkles, Flame } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

interface CategoryCardsProps {
  locale: string;
  dict: any;
}

export function CategoryCards({ locale, dict }: CategoryCardsProps) {
  const categories = [
    {
      id: 'cups',
      title: dict.categories.cups.title,
      desc: dict.categories.cups.desc,
      cta: dict.categories.cups.cta,
      href: `/${locale}/products?category=cups`,
      image: '/images/products/paper-cup-250ml.webp',
      icon: Coffee,
      color: 'forest',
      badge: 'Main Manufacturer',
    },
    {
      id: 'soaps',
      title: dict.categories.soaps.title,
      desc: dict.categories.soaps.desc,
      cta: dict.categories.soaps.cta,
      href: `/${locale}/products?category=soaps`,
      image: '/images/products/soap-neem-tulsi.webp',
      icon: Sparkles,
      color: 'earth',
      badge: 'Cold-Process Herbal',
    },
    {
      id: 'candles',
      title: dict.categories.candles.title,
      desc: dict.categories.candles.desc,
      cta: dict.categories.candles.cta,
      href: `/${locale}/products?category=candles`,
      image: '/images/products/candle-festive-modak.webp',
      icon: Flame,
      color: 'leaf',
      badge: 'Pure Soy Wax',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Portfolio"
          title={dict.categories.title}
          subtitle={dict.categories.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative rounded-3xl bg-cream-light border border-forest/15 overflow-hidden shadow-kraft hover:shadow-kraft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* 1:1 Image Slot */}
                <div className="relative aspect-square w-full overflow-hidden bg-cream-warm">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-cream/95 text-forest border border-forest/20 shadow-sm">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-forest-dark tracking-tight mb-2 group-hover:text-forest transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-earth hover:text-earth-dark group-hover:translate-x-1 transition-all"
                  >
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
