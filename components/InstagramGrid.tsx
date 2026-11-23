import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import { Instagram, ExternalLink } from 'lucide-react';
import { getInstagramProfileUrl } from '@/lib/instagram';

interface InstagramGridProps {
  locale: string;
  dict: any;
}

export function InstagramGrid({ locale, dict }: InstagramGridProps) {
  const posts = [
    { image: '/images/instagram/insta-1.webp', caption: 'Freshly formed 250ml cups stacked for dispatch' },
    { image: '/images/instagram/insta-2.webp', caption: 'Hand-cutting herbal neem soap cured for 4 weeks' },
    { image: '/images/instagram/insta-3.webp', caption: 'Aromatherapy soy wax candle glow in ceramic jar' },
    { image: '/images/instagram/insta-4.webp', caption: 'Bhopal cafe partner serving tea in Merge cups' },
    { image: '/images/instagram/insta-5.webp', caption: 'Responsibly sourced herbal ingredients from MP forests' },
    { image: '/images/instagram/insta-6.webp', caption: 'Wholesale order packed by our Bhopal women team' },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-warm/50 border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.instagram.badge}
          title={dict.instagram.title}
          subtitle={dict.instagram.subtitle}
        />

        {/* 
          ======================================================================
          LIVE INSTAGRAM FEED WIDGET SLOT:
          To plug in a live Instagram widget (such as Behold.so, Elfsight, 
          or Curator.io), replace the static grid below with your widget script:
          
          <script src="https://w.behold.so/widget.js" type="module"></script>
          <figure data-behold-id="YOUR_BEHOLD_FEED_ID"></figure>
          ======================================================================
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {posts.map((post, index) => (
            <a
              key={index}
              href={getInstagramProfileUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-forest/15 shadow-sm hover:shadow-md transition-all duration-300 block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-forest-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-cream">
                <Instagram className="w-6 h-6 text-earth mb-1.5" />
                <span className="text-[10px] font-semibold line-clamp-2">
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Profile CTA */}
        <div className="text-center">
          <a
            href={getInstagramProfileUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-cream bg-forest hover:bg-forest-light shadow-kraft hover:shadow-kraft-lg transition-all"
          >
            <Instagram className="w-4 h-4 text-earth" />
            <span>{dict.instagram.followBtn}</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>
        </div>
      </div>
    </section>
  );
}
