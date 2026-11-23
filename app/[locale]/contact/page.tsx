import React from 'react';
import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { QuoteForm } from '@/components/QuoteForm';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Youtube } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { getInstagramProfileUrl, getYouTubeUrl } from '@/lib/instagram';

export const metadata: Metadata = {
  title: 'Contact Us — Orders & Wholesale Inquiries | Bhopal',
  description: 'Connect with Merge Eco-Friendly Pvt. Ltd. in Bhopal. Request wholesale quotes for 250 ml paper cups, natural soaps, or chat directly with us on WhatsApp.',
};

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'en';
  const dict = getDictionary(locale);

  return (
    <div className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Inquiries"
          title={dict.nav.contact}
          subtitle="Reach out for wholesale quotes, customized paper cup printing, or local Bhopal delivery schedules."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left: Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm locale={locale} dict={dict} />
          </div>

          {/* Right: Contact Information & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-cream-light border border-forest/15 p-6 sm:p-8 shadow-kraft space-y-6">
              <h3 className="font-serif font-bold text-2xl text-forest-dark border-b border-forest/10 pb-3">
                {dict.contact.title}
              </h3>

              <div className="space-y-4 text-sm text-ink-light">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-earth/10 text-earth flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-dark">{dict.contact.addressTitle}</p>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-0.5">
                      Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal, Madhya Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-dark">{dict.contact.phoneTitle}</p>
                    <a href="tel:+919303744922" className="text-sm font-bold text-forest hover:underline">
                      +91 93037 44922
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-dark">{dict.contact.emailTitle}</p>
                    <a href="mailto:mergeecofriendlypvt@gmail.com" className="text-sm text-forest hover:underline">
                      mergeecofriendlypvt@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-earth/10 text-earth flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-dark">{dict.contact.hoursTitle}</p>
                    <p className="text-xs sm:text-sm text-ink-muted">
                      Monday - Sunday, 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Action */}
              <div className="pt-4 border-t border-forest/10">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    'Hello Merge Eco-Friendly! I am looking for information on your products.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-cream bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-cream" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs text-ink-muted font-medium">Follow us:</span>
                <a
                  href={getInstagramProfileUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-cream-warm border border-forest/15 hover:bg-forest hover:text-cream text-forest transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-earth" />
                </a>
                <a
                  href={getYouTubeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-cream-warm border border-forest/15 hover:bg-forest hover:text-cream text-forest transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-earth" />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden border border-forest/15 shadow-kraft h-72 relative bg-cream-warm">
              <iframe
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=Shop+No+362+B+E8+Trilanga+Shahpura+Bhopal+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Merge Eco-Friendly Bhopal Location"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
