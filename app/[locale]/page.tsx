import React from 'react';
import { getDictionary } from '@/lib/i18n';
import { Hero } from '@/components/Hero';
import { CategoryCards } from '@/components/CategoryCards';
import { FeaturedProduct } from '@/components/FeaturedProduct';
import { WomenSection } from '@/components/WomenSection';
import { FactoryGallery } from '@/components/FactoryGallery';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { BulkOrderCTA } from '@/components/BulkOrderCTA';
import { ReviewsSlider } from '@/components/ReviewsSlider';
import { InstagramGrid } from '@/components/InstagramGrid';
import { HowToOrder } from '@/components/HowToOrder';
import { QuoteForm } from '@/components/QuoteForm';
import { SectionHeading } from '@/components/SectionHeading';
import { getLocalBusinessJsonLd } from '@/lib/seo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale || 'en';
  const dict = getDictionary(locale);
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <>
      {/* LocalBusiness Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. Hero Section */}
      <Hero locale={locale} dict={dict} />

      {/* 3. Product Categories (3 Cards) */}
      <CategoryCards locale={locale} dict={dict} />

      {/* 4. Featured Product: 250 ml Paper Cup */}
      <FeaturedProduct locale={locale} dict={dict} />

      {/* 5. Made by Women of Bhopal */}
      <WomenSection locale={locale} dict={dict} />

      {/* 6. Our Factory and Machines */}
      <FactoryGallery locale={locale} dict={dict} />

      {/* 7. Why Choose Merge (5 Icon Cards) */}
      <WhyChooseUs locale={locale} dict={dict} />

      {/* 8. Wholesale and Bulk Orders CTA */}
      <BulkOrderCTA locale={locale} dict={dict} />

      {/* 9. Customer Reviews Slider */}
      <ReviewsSlider locale={locale} dict={dict} />

      {/* 10. Instagram Feed Section (@mergeecofriendlypvtltd) */}
      <InstagramGrid locale={locale} dict={dict} />

      {/* 11. How to Order (4 Steps Graphic) */}
      <HowToOrder locale={locale} dict={dict} />

      {/* 12. Quote Form + Map Embed + Contact Details */}
      <section id="quote-section" className="py-16 md:py-24 bg-cream-warm/70 border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={dict.quote.badge}
            title={dict.quote.title}
            subtitle={dict.quote.subtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Quote Form with Zod & WhatsApp integration */}
            <div className="lg:col-span-7">
              <QuoteForm locale={locale} dict={dict} />
            </div>

            {/* Right: Map Embed & Direct Contact Data */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Card */}
              <div className="rounded-3xl bg-cream-light border border-forest/15 p-6 sm:p-8 shadow-kraft space-y-5">
                <h3 className="font-serif font-bold text-xl text-forest-dark border-b border-forest/10 pb-3">
                  {dict.contact.title}
                </h3>

                <div className="space-y-4 text-sm text-ink-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest-dark">{dict.contact.addressTitle}</p>
                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-0.5">
                        Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-leaf-dark shrink-0" />
                    <div>
                      <p className="font-semibold text-forest-dark">{dict.contact.phoneTitle}</p>
                      <a href="tel:+919303744922" className="text-xs sm:text-sm font-bold text-forest hover:underline">
                        +91 93037 44922
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-leaf-dark shrink-0" />
                    <div>
                      <p className="font-semibold text-forest-dark">{dict.contact.emailTitle}</p>
                      <a href="mailto:mergeecofriendlypvt@gmail.com" className="text-xs sm:text-sm text-forest hover:underline">
                        mergeecofriendlypvt@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-earth shrink-0" />
                    <div>
                      <p className="font-semibold text-forest-dark">{dict.contact.hoursTitle}</p>
                      <p className="text-xs sm:text-sm text-ink-muted">
                        Monday - Sunday, 10:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lazy-loaded Google Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-forest/15 shadow-kraft h-64 sm:h-72 relative bg-cream-warm">
                <iframe
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=Shop+No+362+B+E8+Trilanga+Shahpura+Bhopal+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Merge Eco-Friendly Pvt. Ltd. Location Map Trilanga Bhopal"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
