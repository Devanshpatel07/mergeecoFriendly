import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SizeGuide } from '@/components/SizeGuide';
import { SectionHeading } from '@/components/SectionHeading';
import { Badge } from '@/components/Badge';
import { buildWhatsAppOrderUrl } from '@/lib/whatsapp';
import { getInstagramProfileUrl } from '@/lib/instagram';
import { MessageCircle, Instagram, CheckCircle2, PackageCheck } from 'lucide-react';
import productsData from '@/data/products.json';

interface FeaturedProductProps {
  locale: string;
  dict: any;
}

export function FeaturedProduct({ locale, dict }: FeaturedProductProps) {
  const product = productsData.find((p) => p.slug === '250ml-paper-cup') || productsData[0];
  const whatsappUrl = buildWhatsAppOrderUrl({
    productName: product.name.en,
    category: 'Paper Cups',
    size: '250 ml',
    quantity: '1 Carton (1,000 cups)',
  });

  return (
    <section className="py-16 md:py-24 bg-cream-warm/60 border-y border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.featured.badge}
          title={dict.featured.title}
          subtitle={dict.featured.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 1:1 Image + Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border-2 border-forest/20 shadow-kraft-lg bg-cream">
              <Image
                src={product.images[0]}
                alt="250 ml Food-Grade Paper Cup manufactured in Bhopal"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge label="Primary Product" variant="forest" icon="leaf" />
                <Badge label="100% Recyclable" variant="leaf" icon="recycle" />
              </div>
            </div>

            {/* True Size Guide Visual */}
            <SizeGuide cupCapacity="250 ml" />
          </div>

          {/* Right Column: Spec Table & Order CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-earth uppercase tracking-widest">
                  Food-Grade Certified Paper
                </span>
                <span>•</span>
                <span className="text-xs font-semibold text-leaf-dark">
                  Bhopal Plant Output
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-forest-dark">
                {product.name[locale as 'en' | 'hi'] || product.name.en}
              </h3>
              <p className="mt-3 text-base text-ink leading-relaxed">
                {product.description[locale as 'en' | 'hi'] || product.description.en}
              </p>
            </div>

            {/* Spec Table */}
            <div className="rounded-2xl border border-forest/15 overflow-hidden bg-cream-light shadow-sm">
              <div className="bg-forest px-4 py-2.5 text-cream text-xs font-bold tracking-wider uppercase">
                {dict.featured.specTitle}
              </div>
              <dl className="divide-y divide-forest/10 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-forest/5">
                    <dt className="font-semibold text-forest-dark">{key}</dt>
                    <dd className="text-ink-muted sm:col-span-2">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Pack sizes and MOQ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cream border border-forest/15">
                <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-1.5">
                  {dict.featured.packSizesTitle}
                </span>
                <ul className="space-y-1 text-sm text-ink font-medium">
                  {product.packSizes?.map((pack) => (
                    <li key={pack} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                      <span>{pack}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-cream border border-forest/15">
                <span className="text-xs font-bold text-earth uppercase tracking-wider block mb-1.5">
                  {dict.featured.moqLabel}
                </span>
                <p className="text-sm text-ink-muted leading-snug">
                  {product.moq}
                </p>
                <div className="mt-2 text-xs font-extrabold text-forest">
                  Pricing: {product.price}
                </div>
              </div>
            </div>

            {/* Order Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-cream bg-[#25D366] hover:bg-[#1EBE5D] shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-5 h-5 fill-cream" />
                <span>{dict.featured.orderWhatsapp}</span>
              </a>
              <a
                href={getInstagramProfileUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-forest bg-cream hover:bg-forest/10 border-2 border-forest/20 shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <Instagram className="w-5 h-5 text-earth" />
                <span>{dict.featured.orderInstagram}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
