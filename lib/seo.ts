import { Product } from '@/lib/types';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mergeecofriendlypvtltd.com';

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Merge Eco-Friendly Pvt. Ltd.',
    description: 'Women-led manufacturer of food-grade disposable paper cups, handmade organic soaps, and natural soy candles in Bhopal, Madhya Pradesh, India.',
    url: SITE_URL,
    telephone: '+919303744922',
    email: 'mergeecofriendlypvt@gmail.com',
    image: `${SITE_URL}/images/logo/logo-square.png`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 362 B, E8, Trilanga, Shahpura',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462039',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.1923',
      longitude: '77.4278',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/mergeecofriendlypvtltd/',
      'https://www.youtube.com/@MergeEcoFriendlyPvtLtd',
    ],
  };
}

export function getProductJsonLd(product: Product, locale: 'en' | 'hi' = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name[locale],
    description: product.shortDescription[locale],
    image: product.images.map((img) => `${SITE_URL}${img}`),
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Merge Eco-Friendly',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price.startsWith('₹') ? product.price.replace('₹', '') : '100',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      url: `${SITE_URL}/${locale}/products/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Merge Eco-Friendly Pvt. Ltd.',
      },
    },
  };
}
