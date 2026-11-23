'use client';

import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { getInstagramProfileUrl } from '@/lib/instagram';

interface FloatingOrderBarProps {
  locale: string;
}

export function FloatingOrderBar({ locale }: FloatingOrderBarProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Merge Eco-Friendly! I am interested in ordering paper cups / handmade products.'
  )}`;

  return (
    <>
      {/* 1. Desktop Floating WhatsApp Button (Bottom-Right) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-cream shadow-2xl hover:bg-[#1EBE5D] hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          aria-label="Chat on WhatsApp with Merge Eco-Friendly Bhopal"
        >
          <MessageCircle className="w-6 h-6 fill-cream" />
          <span className="text-sm font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* 2. Mobile Sticky Bottom Order Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-t border-forest/15 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full text-xs font-extrabold text-cream bg-[#25D366] shadow-sm active:scale-95 transition-all"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-cream shrink-0" />
            <span className="truncate">Order on WhatsApp</span>
          </a>

          <a
            href={getInstagramProfileUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full text-xs font-extrabold text-forest bg-cream-warm border border-forest/20 shadow-sm active:scale-95 transition-all"
            aria-label="Order on Instagram"
          >
            <Instagram className="w-4 h-4 text-earth shrink-0" />
            <span className="truncate">Instagram DM</span>
          </a>
        </div>
      </div>
    </>
  );
}
