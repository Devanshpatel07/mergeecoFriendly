import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import { Quote, Heart, MapPin, Sparkles } from 'lucide-react';
import teamData from '@/data/team.json';

interface WomenSectionProps {
  locale: string;
  dict: any;
}

export function WomenSection({ locale, dict }: WomenSectionProps) {
  const { founderNote, members } = teamData;

  return (
    <section className="py-16 md:py-24 bg-cream border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.women.badge}
          title={dict.women.title}
          subtitle={dict.women.subtitle}
        />

        {/* Founder Note & Vision Card */}
        <div className="mb-14 rounded-3xl bg-cream-warm border-2 border-forest/20 p-6 sm:p-10 lg:p-12 shadow-kraft-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-forest/20 shadow-md">
                <Image
                  src={founderNote.image}
                  alt="Founder of Merge Eco-Friendly Pvt. Ltd. Bhopal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center sm:text-left">
                <p className="font-serif font-bold text-forest-dark text-lg">
                  {founderNote.name[locale as 'en' | 'hi'] || founderNote.name.en}
                </p>
                <p className="text-xs font-semibold text-earth flex items-center justify-center sm:justify-start gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {founderNote.location}
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-earth fill-earth" />
                <span>{dict.women.founderTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-dark leading-snug">
                {founderNote.title[locale as 'en' | 'hi'] || founderNote.title.en}
              </h3>
              <p className="text-base text-ink-light leading-relaxed">
                {founderNote.message[locale as 'en' | 'hi'] || founderNote.message.en}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-ink-muted">
                <span className="font-semibold text-forest">Note:</span> Real team photographs will replace placeholder visuals in production.
              </div>
            </div>
          </div>
        </div>

        {/* Team Quotes & Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-cream-light border border-forest/15 p-6 sm:p-7 shadow-kraft hover:shadow-kraft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 1:1 Image Slot */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 border border-forest/10 bg-cream-warm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 340px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cream/95 text-forest border border-forest/15 shadow-sm">
                      {member.location}
                    </span>
                  </div>
                </div>

                {/* Quote Icon & Text */}
                <Quote className="w-7 h-7 text-earth mb-3 opacity-80" />
                <blockquote className="text-sm text-ink-light italic leading-relaxed mb-4">
                  &ldquo;{member.quote[locale as 'en' | 'hi'] || member.quote.en}&rdquo;
                </blockquote>
              </div>

              {/* Member Info */}
              <div className="pt-4 border-t border-forest/10">
                <p className="font-serif font-bold text-base text-forest-dark">
                  {member.name}
                </p>
                <p className="text-xs text-leaf-dark font-medium mt-0.5">
                  {member.role[locale as 'en' | 'hi'] || member.role.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
