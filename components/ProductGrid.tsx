'use client';

import React, { useState } from 'react';
import { Product, ProductCategory } from '@/lib/types';
import { ProductCard } from '@/components/ProductCard';
import { Coffee, Sparkles, Flame, LayoutGrid } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  locale: string;
  initialCategory?: string;
}

export function ProductGrid({ products, locale, initialCategory = 'all' }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = [
    { id: 'all', label: 'All Products', icon: LayoutGrid },
    { id: 'cups', label: 'Paper Cups', icon: Coffee },
    { id: 'soaps', label: 'Handmade Soaps', icon: Sparkles },
    { id: 'candles', label: 'Handmade Candles', icon: Flame },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                active
                  ? 'bg-forest text-cream shadow-md scale-105'
                  : 'bg-cream text-ink hover:text-forest hover:bg-forest/10 border border-forest/15'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} locale={locale} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-cream-warm rounded-3xl border border-forest/15">
          <p className="text-lg font-serif font-bold text-forest-dark">No products found in this category.</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-3 text-sm font-semibold text-earth hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
