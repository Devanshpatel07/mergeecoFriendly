import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { WomenSection } from '@/components/WomenSection';
import { BulkOrderCTA } from '@/components/BulkOrderCTA';
import { Heart, Users, Leaf, Target, Award, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Women-Led Sustainable Manufacturing in Bhopal',
  description: 'Learn about Merge Eco-Friendly Pvt. Ltd., our Bhopal women-led manufacturing story, ethical raw material sourcing, and vision for sustainable livelihood creation.',
};

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'en';
  const dict = getDictionary(locale);

  return (
    <div className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Story & Purpose"
          title={dict.nav.about}
          subtitle="Combining high-speed manufacturing with traditional artisanal craftsmanship, rooted in Bhopal, Madhya Pradesh."
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-earth" />
              <span>Headquartered in Bhopal, India</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-forest-dark leading-tight">
              Pioneering Responsible Disposables & Artisan Care
            </h3>
            <p className="text-base text-ink-light leading-relaxed">
              Merge Eco-Friendly Pvt. Ltd. was founded to address two pressing challenges: the alarming surge in single-use plastic waste across urban catering and cafes, and the need for dignifying, skilled manufacturing livelihoods for women in Bhopal.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              From our facility in Trilanga, Shahpura, we operate automated paper cup forming units calibrated for precision, leak-proof performance. Simultaneously, our artisan studio empowers women to handcraft cold-process soaps using organic neem, cold-pressed oils, and wild honey responsibly gathered from the forests of Madhya Pradesh.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-cream-warm border border-forest/15">
                <span className="font-serif font-bold text-2xl text-forest block">100%</span>
                <span className="text-xs text-ink-muted">Food-Grade Paper Standards</span>
              </div>
              <div className="p-4 rounded-2xl bg-cream-warm border border-forest/15">
                <span className="font-serif font-bold text-2xl text-earth block">Women-Led</span>
                <span className="text-xs text-ink-muted">Production & Leadership</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border-2 border-forest/20 shadow-kraft-lg bg-cream-warm">
              <Image
                src="/images/team/team-founder.webp"
                alt="Merge Eco-Friendly Leadership Team Bhopal"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-dark mb-8 text-center">
            Our Guiding Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-cream-light border border-forest/15 shadow-kraft">
              <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-forest-dark mb-2">
                Uncompromising Sustainability
              </h4>
              <p className="text-sm text-ink-muted leading-relaxed">
                Zero single-use plastic. We prioritize certified recyclable virgin paper, paraffin-free soy waxes, and pure botanical extracts.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-cream-light border border-forest/15 shadow-kraft">
              <div className="w-12 h-12 rounded-2xl bg-forest/10 text-earth flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-forest-dark mb-2">
                Women&apos;s Economic Agency
              </h4>
              <p className="text-sm text-ink-muted leading-relaxed">
                We provide hands-on technical training on automated machinery, competitive living wages, and a supportive, safe workplace culture.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-cream-light border border-forest/15 shadow-kraft">
              <div className="w-12 h-12 rounded-2xl bg-forest/10 text-leaf-dark flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-forest-dark mb-2">
                B2B Reliability
              </h4>
              <p className="text-sm text-ink-muted leading-relaxed">
                Consistent supply schedules, zero defect tolerance, and transparent billing for our catering, hospitality, and retail partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bhopal Women Section */}
      <WomenSection locale={locale} dict={dict} />

      <div className="mt-16">
        <BulkOrderCTA locale={locale} dict={dict} />
      </div>
    </div>
  );
}
