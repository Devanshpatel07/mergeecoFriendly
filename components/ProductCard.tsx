import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { Badge } from '@/components/Badge';
import { buildWhatsAppOrderUrl } from '@/lib/whatsapp';
import { getInstagramProfileUrl } from '@/lib/instagram';
import { MessageCircle, Instagram, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  locale: string;
}

export function ProductCard({ product, locale }: ProductCardProps) {
  const whatsappUrl = buildWhatsAppOrderUrl({
    productName: product.name.en,
    category: product.category,
    size: product.sizes ? product.sizes[0] : undefined,
    quantity: '1',
  });

  const isComingSoon = product.comingSoon;

  return (
    <article className="group relative rounded-3xl bg-cream-light border border-forest/15 overflow-hidden shadow-kraft hover:shadow-kraft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      {/* 1:1 Aspect Ratio Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-cream-warm">
        <Image
          src={product.images[0]}
          alt={`${product.name.en} - Merge Eco-Friendly Bhopal`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge Pill Top-Left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
          {isComingSoon ? (
            <Badge label="Coming Soon" variant="earth" icon="clock" />
          ) : product.featured ? (
            <Badge label="Featured" variant="forest" icon="leaf" />
          ) : (
            product.badges?.[0] && <Badge label={product.badges[0]} variant="cream" />
          )}
        </div>

        {/* Quick View Link Overlay */}
        <Link
          href={`/${locale}/products/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View details of ${product.name[locale as 'en' | 'hi'] || product.name.en}`}
        />
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Status */}
          <div className="flex items-center justify-between text-xs font-semibold text-leaf-dark uppercase tracking-wider mb-1.5">
            <span>{product.category}</span>
            <span className={product.inStock ? 'text-forest' : 'text-earth'}>
              {product.inStock ? 'In Stock' : isComingSoon ? 'Coming Soon' : 'On Request'}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-xl font-serif font-bold text-forest-dark group-hover:text-forest transition-colors line-clamp-1">
            <Link href={`/${locale}/products/${product.slug}`} className="hover:underline">
              {product.name[locale as 'en' | 'hi'] || product.name.en}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs sm:text-sm text-ink-muted line-clamp-2 leading-relaxed">
            {product.shortDescription[locale as 'en' | 'hi'] || product.shortDescription.en}
          </p>

          {/* Price / MOQ snippet */}
          <div className="mt-4 pt-3 border-t border-forest/10 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-ink-soft block uppercase font-medium">Price</span>
              <span className="text-base font-bold text-forest-dark">{product.price}</span>
            </div>
            {product.weight && (
              <span className="text-xs px-2.5 py-1 rounded-md bg-cream-warm text-ink font-semibold border border-forest/10">
                {product.weight}
              </span>
            )}
            {product.waxType && (
              <span className="text-xs px-2.5 py-1 rounded-md bg-cream-warm text-ink font-semibold border border-forest/10">
                {product.waxType.split(' ')[0]} Wax
              </span>
            )}
          </div>
        </div>

        {/* Dual Order Action Buttons */}
        <div className="mt-5 pt-3 grid grid-cols-2 gap-2 relative z-20">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-cream bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            aria-label={`Order ${product.name.en} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-cream shrink-0" />
            <span className="truncate">WhatsApp</span>
          </a>

          <a
            href={getInstagramProfileUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-forest bg-cream-warm hover:bg-forest/10 border border-forest/20 shadow-sm transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-label={`Order ${product.name.en} on Instagram`}
          >
            <Instagram className="w-3.5 h-3.5 text-earth shrink-0" />
            <span className="truncate">Instagram</span>
          </a>
        </div>
      </div>
    </article>
  );
}
