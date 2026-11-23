import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Sparkles, Building2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface BulkOrderCTAProps {
  locale: string;
  dict: any;
}

export function BulkOrderCTA({ locale, dict }: BulkOrderCTAProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Merge Eco-Friendly! I am looking for wholesale / bulk paper cups and eco products for my business.'
  )}`;

  return (
    <section className="py-16 bg-gradient-to-r from-forest via-forest-dark to-forest text-cream relative overflow-hidden">
      {/* Decorative leaf motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-earth/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream/15 text-cream text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-earth" />
              <span>{dict.wholesale.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-cream leading-tight">
              {dict.wholesale.title}
            </h2>

            <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {dict.wholesale.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-base font-bold text-forest bg-cream hover:bg-cream-light shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 text-forest" />
              <span>{dict.wholesale.cta}</span>
            </a>

            <a
              href="tel:+919303744922"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-cream bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-earth" />
              <span>{dict.wholesale.callCta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
