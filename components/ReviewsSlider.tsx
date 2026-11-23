'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import reviewsData from '@/data/reviews.json';

interface ReviewsSliderProps {
  locale: string;
  dict: any;
}

export function ReviewsSlider({ locale, dict }: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const review = reviewsData[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-cream border-b border-forest/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.reviews.badge}
          title={dict.reviews.title}
          subtitle={dict.reviews.subtitle}
        />

        <div className="relative rounded-3xl bg-cream-warm border border-forest/20 p-8 sm:p-12 shadow-kraft-lg">
          <Quote className="w-12 h-12 text-earth/40 mb-6" />

          {/* Review Content */}
          <div className="min-h-[140px] flex flex-col justify-between">
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-forest-dark italic leading-relaxed">
              &ldquo;{review.content[locale as 'en' | 'hi'] || review.content.en}&rdquo;
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-forest/15">
              <div>
                <p className="font-serif font-bold text-lg text-forest-dark">{review.author}</p>
                <p className="text-xs font-semibold text-leaf-dark">
                  {review.business ? `${review.business} • ` : ''}
                  {review.role}
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D49B44] text-[#D49B44]" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={prevReview}
              className="p-2.5 rounded-full bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/20 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-2.5 rounded-full bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/20 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-8 bg-forest' : 'w-2 bg-forest/20'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
