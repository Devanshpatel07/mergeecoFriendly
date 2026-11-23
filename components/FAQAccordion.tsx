'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/lib/types';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  locale: string;
}

export function FAQAccordion({ items, locale }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-forest/15 bg-cream overflow-hidden transition-colors shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-bold text-base sm:text-lg text-forest-dark">
                {item.question[locale as 'en' | 'hi'] || item.question.en}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-earth shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-ink-light leading-relaxed border-t border-forest/10 animate-in fade-in duration-200">
                {item.answer[locale as 'en' | 'hi'] || item.answer.en}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
