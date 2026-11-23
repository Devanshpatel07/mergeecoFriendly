import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingOrderBar } from '@/components/FloatingOrderBar';
import { getDictionary, locales, type Locale } from '@/lib/i18n';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Only /en and /hi are valid locales; anything else (e.g. /nope) returns 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isHindi = locale === 'hi';

  const title = isHindi
    ? 'मर्ज इको-फ्रेंडली प्रा. लि. — 250 मिली पेपर कप, प्राकृतिक साबुन एवं मोमबत्तियां'
    : 'Merge Eco-Friendly Pvt. Ltd. — Paper Cups, Natural Soaps & Candles | Bhopal';

  const description = isHindi
    ? 'भोपाल की महिलाओं द्वारा संचालित पर्यावरण-अनुकूल निर्माण इकाई। 250 मिली फूड-ग्रेड पेपर कप, प्राकृतिक हस्तनिर्मित साबुन और सोया वैक्स मोमबत्तियां।'
    : 'Women-led eco-friendly manufacturer in Bhopal, India. Certified 250 ml food-grade paper cups, cold-process natural soaps, and soy wax candles for homes and wholesale.';

  return {
    title: {
      default: title,
      template: '%s | Merge Eco-Friendly Pvt. Ltd.',
    },
    description,
    keywords: [
      'paper cups manufacturer bhopal',
      '250 ml paper cup',
      'food grade paper cups india',
      'handmade natural soaps bhopal',
      'soy wax candles madhya pradesh',
      'women led business bhopal',
      'merge eco friendly pvt ltd',
      'plastic free disposables',
      'eco friendly tableware bhopal',
    ],
    authors: [{ name: 'Merge Eco-Friendly Pvt. Ltd.' }],
    creator: 'Merge Eco-Friendly Pvt. Ltd.',
    metadataBase: new URL('https://mergeecofriendlypvtltd.com'),
    alternates: {
      canonical: `https://mergeecofriendlypvtltd.com/${locale}`,
      languages: {
        en: 'https://mergeecofriendlypvtltd.com/en',
        hi: 'https://mergeecofriendlypvtltd.com/hi',
      },
    },
    openGraph: {
      type: 'website',
      locale: isHindi ? 'hi_IN' : 'en_IN',
      url: `https://mergeecofriendlypvtltd.com/${locale}`,
      title,
      description,
      siteName: 'Merge Eco-Friendly Pvt. Ltd.',
      images: [
        {
          url: '/images/logo/logo-square.png',
          width: 1024,
          height: 1024,
          alt: 'Merge Eco-Friendly Pvt. Ltd. Bhopal',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/logo/logo-square.png'],
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/images/logo/logo-square.png' },
      ],
      apple: '/images/logo/logo-180.png',
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col bg-cream text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-forest text-cream rounded-md text-sm font-semibold shadow-lg"
        >
          Skip to main content
        </a>

        <Header locale={locale} dict={dict} />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <FloatingOrderBar locale={locale} />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
