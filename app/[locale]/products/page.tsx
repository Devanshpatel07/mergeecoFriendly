import React from 'react';
import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductGrid } from '@/components/ProductGrid';
import { BulkOrderCTA } from '@/components/BulkOrderCTA';
import productsData from '@/data/products.json';
import { Product } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Sustainable Products Catalog — Paper Cups, Soaps & Candles',
  description: 'Explore our complete range of food-grade paper cups, cold-process natural soaps, and aromatherapy soy wax candles made by women in Bhopal, India.',
};

export default function ProductsPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { category?: string };
}) {
  const locale = params.locale || 'en';
  const dict = getDictionary(locale);
  const products = productsData as unknown as Product[];

  return (
    <div className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Catalog"
          title={dict.nav.products}
          subtitle={locale === 'hi' 
            ? 'भोपाल में निर्मित फूड-ग्रेड 250 मिली पेपर कप, प्राकृतिक साबुन और सोया मोमबत्तियां।'
            : 'Thoughtfully crafted paper cups, natural soaps, and scented soy candles for everyday conscious living and wholesale supply.'}
        />

        <ProductGrid
          products={products}
          locale={locale}
          initialCategory={searchParams.category || 'all'}
        />
      </div>

      <div className="mt-20">
        <BulkOrderCTA locale={locale} dict={dict} />
      </div>
    </div>
  );
}
