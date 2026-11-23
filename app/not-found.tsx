import React from 'react';
import Link from 'next/link';
import { Home, Coffee } from 'lucide-react';
import '@/app/globals.css';

export default function NotFound() {
  // The root layout is a passthrough (html/body live in app/[locale]/layout.tsx),
  // so the global 404 page must render its own document shell.
  return (
    <html lang="en">
      <body className="bg-cream text-ink antialiased">
    <div className="min-h-[70vh] flex items-center justify-center bg-cream px-4 py-16">
      <div className="max-w-md w-full text-center p-8 sm:p-10 rounded-3xl bg-cream-light border-2 border-forest/15 shadow-kraft-lg space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto">
          <Coffee className="w-8 h-8 text-earth" />
        </div>

        <h1 className="font-serif font-black text-4xl sm:text-5xl text-forest-dark">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-forest-dark">
            Page Not Found
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            The page you are looking for may have been moved or updated in our new website redesign.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/en"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-cream bg-forest hover:bg-forest-light shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/en/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-forest bg-cream-warm hover:bg-forest/10 border border-forest/20 shadow-sm transition-all"
          >
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
      </body>
    </html>
  );
}
