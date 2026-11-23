import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Leaf, Award, Boxes, Truck, Headset } from 'lucide-react';

interface WhyChooseUsProps {
  locale: string;
  dict: any;
}

export function WhyChooseUs({ locale, dict }: WhyChooseUsProps) {
  const cards = [
    {
      id: '1',
      title: dict.why.cards['1'].title,
      desc: dict.why.cards['1'].desc,
      icon: Leaf,
      color: 'forest',
    },
    {
      id: '2',
      title: dict.why.cards['2'].title,
      desc: dict.why.cards['2'].desc,
      icon: Award,
      color: 'earth',
    },
    {
      id: '3',
      title: dict.why.cards['3'].title,
      desc: dict.why.cards['3'].desc,
      icon: Boxes,
      color: 'leaf',
    },
    {
      id: '4',
      title: dict.why.cards['4'].title,
      desc: dict.why.cards['4'].desc,
      icon: Truck,
      color: 'forest',
    },
    {
      id: '5',
      title: dict.why.cards['5'].title,
      desc: dict.why.cards['5'].desc,
      icon: Headset,
      color: 'earth',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.why.badge}
          title={dict.why.title}
          subtitle={dict.why.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="rounded-3xl bg-cream-light border border-forest/15 p-6 shadow-kraft hover:shadow-kraft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-forest-dark mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-forest/10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-leaf-dark">
                    Verified Quality
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
