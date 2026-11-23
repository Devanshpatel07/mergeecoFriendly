import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import { Cog, CheckCircle2, ShieldCheck, PlayCircle } from 'lucide-react';

interface FactoryGalleryProps {
  locale: string;
  dict: any;
}

export function FactoryGallery({ locale, dict }: FactoryGalleryProps) {
  const machines = [
    {
      title: 'Automatic Paper Cup Machine (NESSCO)',
      desc: 'Precision bottom-curling and ultrasonic side-sealing for 250ml cups.',
      image: '/images/factory/factory-forming-machine.webp',
      badge: 'NESSCO Forming Unit',
    },
    {
      title: 'Manufacturing Shopfloor Overview',
      desc: 'Multiple active lines for continuous high-capacity food-grade cup production.',
      image: '/images/factory/factory-shopfloor-overview.webp',
      badge: 'Bhopal Shopfloor',
    },
    {
      title: 'Cup Fan Die-Cutting & Print Station',
      desc: 'Precision die-cut virgin food-grade paperboard blanks with botanical designs.',
      image: '/images/factory/factory-die-cutting.webp',
      badge: 'Precision Die-Cut',
    },
    {
      title: 'Women Artisan Studio (Soaps & Candles)',
      desc: 'Hand-pouring soy wax candles and curing cold-process botanical soaps.',
      image: '/images/team/artisan-candle-making.webp',
      badge: 'Artisan Collective',
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-cream-warm/40 border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.factory.badge}
          title={dict.factory.title}
          subtitle={dict.factory.subtitle}
        />

        {/* 4-Stage Process Flow Ribbon */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-cream border border-forest/20 shadow-sm">
          <h3 className="text-center font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-6">
            {dict.factory.processTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['1', '2', '3', '4'].map((num) => {
              const step = dict.factory.steps[num as '1' | '2' | '3' | '4'];
              return (
                <div key={num} className="relative flex flex-col p-4 rounded-2xl bg-cream-warm border border-forest/10">
                  <div className="w-8 h-8 rounded-full bg-forest text-cream font-bold flex items-center justify-center text-sm mb-3">
                    {num}
                  </div>
                  <h4 className="font-serif font-bold text-base text-forest-dark mb-1">
                    {step.name}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Machinery Photos Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {machines.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-cream border border-forest/15 overflow-hidden shadow-kraft hover:shadow-kraft-lg hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-cream-warm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cream/95 text-forest border border-forest/20 shadow-sm">
                    {item.badge}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest-dark group-hover:text-forest transition-colors mb-1 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Factory Video Embed Slot */}
        <div className="rounded-3xl bg-forest-deep text-cream p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-forest">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 text-leaf text-xs font-bold uppercase tracking-wider">
                <PlayCircle className="w-4 h-4 text-earth" />
                <span>Bhopal Plant Video</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream">
                {dict.factory.videoTitle}
              </h3>
              <p className="text-sm text-cream/80 leading-relaxed">
                {dict.factory.videoDesc} Take a tour of our high-speed paper cup machines, hygienic packing bays, and artisan studios.
              </p>
              <div className="pt-2 flex flex-col gap-2 text-xs text-cream/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                  <span>Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-leaf shrink-0" />
                  <span>ISO 9001:2015 & Food-Grade Hygiene Compliance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* 16:9 Responsive Video Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-2 border-cream/20 bg-black/40">
                {/* Embed YouTube video or placeholder showcase */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/videoseries?list=UUz6rN38nB96E_v62XmU9vXg"
                  title="Merge Eco-Friendly Factory Video Tour"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
