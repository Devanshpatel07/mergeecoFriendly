import { MetadataRoute } from 'next';
import productsData from '@/data/products.json';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mergeecofriendlypvtltd.com';
  const routes: MetadataRoute.Sitemap = [];

  const staticPages = ['', '/products', '/about', '/factory', '/contact', '/privacy', '/terms'];

  locales.forEach((locale) => {
    staticPages.forEach((route) => {
      routes.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/products' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/products' ? 0.9 : 0.7,
      });
    });

    productsData.forEach((product) => {
      routes.push({
        url: `${baseUrl}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: product.featured ? 0.9 : 0.8,
      });
    });
  });

  return routes;
}
