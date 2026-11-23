import React from 'react';
import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { FactoryGallery } from '@/components/FactoryGallery';
import { BulkOrderCTA } from '@/components/BulkOrderCTA';
import { ShieldCheck, CheckCircle2, Cog, Flame, Sparkles, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Factory & Machines — Bhopal Manufacturing Facility',
  description: 'Inside Merge Eco-Friendly Pvt. Ltd. manufacturing unit in Bhopal. Inspect our automated paper cup forming units, soap curing racks, and strict quality assurance bench.',
};

export default function FactoryPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'en';
  const dict = getDictionary(locale);

  return (
    <div className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Manufacturing Excellence"
          title={dict.nav.factory}
          subtitle="Precision engineering meets hygienic food-grade manufacturing standards in Trilanga, Bhopal."
        />

        {/* Facility Highlights Banner */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-cream-warm border border-forest/15 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-forest text-cream shrink-0">
              <Cog className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-forest-dark">Automated Forming</h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
                High-speed forming machines ensuring accurate rim curling and uniform wall thickness.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-cream-warm border border-forest/15 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-earth text-cream shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-forest-dark">Thermal Leak Testing</h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
                Random batch boiling water stress tests at 95°C to guarantee zero bottom or side leaks.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-cream-warm border border-forest/15 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-leaf-dark text-cream shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-forest-dark">Hygienic Packing</h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
                Dust-proof, moisture-barrier cartons packed under strict hygienic sanitization protocols.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Factory Gallery Component with Video Embed */}
      <FactoryGallery locale={locale} dict={dict} />

      <div className="mt-16">
        <BulkOrderCTA locale={locale} dict={dict} />
      </div>
    </div>
  );
}
