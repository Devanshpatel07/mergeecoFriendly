import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, locales } from '@/lib/i18n';
import { Badge } from '@/components/Badge';
import { SizeGuide } from '@/components/SizeGuide';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ProductCard } from '@/components/ProductCard';
import { buildWhatsAppOrderUrl } from '@/lib/whatsapp';
import { getInstagramProfileUrl } from '@/lib/instagram';
import { getProductJsonLd } from '@/lib/seo';
import productsData from '@/data/products.json';
import faqData from '@/data/faq.json';
import { Product, FAQItem } from '@/lib/types';
import { MessageCircle, Instagram, CheckCircle2, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface ProductDetailPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  locales.forEach((locale) => {
    productsData.forEach((product) => {
      paths.push({
        locale,
        slug: product.slug,
      });
    });
  });
  return paths;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) return {};

  const locale = (params.locale === 'hi' ? 'hi' : 'en') as 'en' | 'hi';
  const name = product.name[locale] || product.name.en;
  const description = product.shortDescription[locale] || product.shortDescription.en;

  return {
    title: `${name} — Merge Eco-Friendly`,
    description,
    openGraph: {
      title: `${name} | Merge Eco-Friendly Bhopal`,
      description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const locale = params.locale || 'en';
  const dict = getDictionary(locale);
  const product = productsData.find((p) => p.slug === params.slug) as unknown as Product;

  if (!product) {
    notFound();
  }

  const jsonLd = getProductJsonLd(product, locale as 'en' | 'hi');
  const relatedProducts = (productsData as unknown as Product[])
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  const whatsappUrl = buildWhatsAppOrderUrl({
    productName: product.name.en,
    category: product.category,
    size: product.sizes ? product.sizes[0] : undefined,
    quantity: '1',
  });

  const relevantFaqs = (faqData as unknown as FAQItem[]).filter(
    (f) => f.category === product.category || f.category === 'general'
  );

  return (
    <article className="py-12 md:py-16 bg-cream">
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-ink-muted">
          <Link href={`/${locale}`} className="hover:text-forest">
            {dict.nav.home}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/products`} className="hover:text-forest">
            {dict.nav.products}
          </Link>
          <span>/</span>
          <span className="text-forest-dark font-semibold truncate">
            {product.name[locale as 'en' | 'hi'] || product.name.en}
          </span>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery & Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border-2 border-forest/20 shadow-kraft-lg bg-cream-warm">
              <Image
                src={product.images[0]}
                alt={product.name.en}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.badges?.map((badge, idx) => (
                  <Badge key={idx} label={badge} variant="cream" />
                ))}
              </div>
            </div>

            {/* True Size Guide visual (Specifically for 250ml cup or cups) */}
            {product.category === 'cups' && (
              <SizeGuide cupCapacity="250 ml" />
            )}
          </div>

          {/* Right Column: Title, Specs, Ingredients, Order Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-earth mb-2">
                <span>{product.category}</span>
                <span>•</span>
                <span className="text-leaf-dark">Made in Bhopal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-forest-dark leading-tight">
                {product.name[locale as 'en' | 'hi'] || product.name.en}
              </h1>
              <div className="mt-3 text-2xl font-bold text-forest-dark flex items-baseline gap-3">
                <span>{product.price}</span>
                {product.inStock ? (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-forest/10 text-forest font-semibold">
                    In Stock • Ready to Dispatch
                  </span>
                ) : (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-earth/10 text-earth font-semibold">
                    {product.comingSoon ? 'Coming Soon' : 'Wholesale on Request'}
                  </span>
                )}
              </div>
            </div>

            <p className="text-base text-ink-light leading-relaxed">
              {product.description[locale as 'en' | 'hi'] || product.description.en}
            </p>

            {/* Soap Ingredients / Benefits if applicable */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="p-5 rounded-2xl bg-cream-warm border border-forest/15 space-y-3">
                <h3 className="font-serif font-bold text-sm text-forest-dark uppercase tracking-wider">
                  Pure Botanicals & Ingredients
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-light">
                  {product.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs Table */}
            <div className="rounded-2xl border border-forest/15 overflow-hidden bg-cream-light shadow-sm">
              <div className="bg-forest px-4 py-2.5 text-cream text-xs font-bold tracking-wider uppercase">
                Technical Specifications
              </div>
              <dl className="divide-y divide-forest/10 text-sm">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="px-4 py-2.5 grid grid-cols-3 gap-2">
                    <dt className="font-semibold text-forest-dark col-span-1">{key}</dt>
                    <dd className="text-ink-muted col-span-2">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Pack sizes and MOQ */}
            {product.packSizes && (
              <div className="p-4 rounded-xl bg-cream-warm border border-forest/15">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
                  Available Pack Options
                </span>
                <p className="text-sm font-medium text-ink">
                  {product.packSizes.join(' • ')}
                </p>
                <p className="text-xs text-ink-muted mt-1">
                  MOQ: {product.moq}
                </p>
              </div>
            )}

            {/* Dual Ordering Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-base font-bold text-cream bg-[#25D366] hover:bg-[#1EBE5D] shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-cream" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={getInstagramProfileUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-base font-bold text-forest bg-cream-warm hover:bg-forest/10 border-2 border-forest/20 shadow-sm hover:shadow transition-all"
              >
                <Instagram className="w-5 h-5 text-earth" />
                <span>Order on Instagram</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-forest/10 text-center">
              <div className="flex flex-col items-center p-2 rounded-xl bg-cream/70">
                <ShieldCheck className="w-4 h-4 text-forest mb-1" />
                <span className="text-[10px] font-bold text-forest-dark">Food-Grade / Safe</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl bg-cream/70">
                <Truck className="w-4 h-4 text-earth mb-1" />
                <span className="text-[10px] font-bold text-forest-dark">Pan-India Transit</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl bg-cream/70">
                <RefreshCw className="w-4 h-4 text-leaf mb-1" />
                <span className="text-[10px] font-bold text-forest-dark">Zero-Plastic Packing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product FAQs */}
        {relevantFaqs.length > 0 && (
          <div className="mt-20 pt-12 border-t border-forest/15">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-dark mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={relevantFaqs} locale={locale} />
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-forest/15">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-dark mb-8 text-center">
              More Sustainable Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} locale={locale} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
