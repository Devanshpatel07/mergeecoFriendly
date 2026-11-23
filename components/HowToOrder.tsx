import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { ShoppingCart, MessageCircle, CreditCard, Truck } from 'lucide-react';

interface HowToOrderProps {
  locale: string;
  dict: any;
}

export function HowToOrder({ locale, dict }: HowToOrderProps) {
  const steps = [
    {
      num: '1',
      title: dict.howToOrder.steps['1'].title,
      desc: dict.howToOrder.steps['1'].desc,
      icon: ShoppingCart,
      color: 'forest',
    },
    {
      num: '2',
      title: dict.howToOrder.steps['2'].title,
      desc: dict.howToOrder.steps['2'].desc,
      icon: MessageCircle,
      color: 'earth',
    },
    {
      num: '3',
      title: dict.howToOrder.steps['3'].title,
      desc: dict.howToOrder.steps['3'].desc,
      icon: CreditCard,
      color: 'leaf',
    },
    {
      num: '4',
      title: dict.howToOrder.steps['4'].title,
      desc: dict.howToOrder.steps['4'].desc,
      icon: Truck,
      color: 'forest',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.howToOrder.badge}
          title={dict.howToOrder.title}
          subtitle={dict.howToOrder.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 sm:p-7 rounded-3xl bg-cream-light border border-forest/15 shadow-kraft hover:shadow-kraft-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif font-black text-3xl text-forest/20">
                      0{step.num}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-forest-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-forest/10 text-[11px] font-bold text-earth">
                  {idx === 2 ? 'Google Pay • PhonePe • UPI' : 'Quick Turnaround'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
