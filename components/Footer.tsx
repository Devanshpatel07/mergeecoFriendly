import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Heart, Leaf } from 'lucide-react';
import { getInstagramProfileUrl, getYouTubeUrl } from '@/lib/instagram';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface FooterProps {
  locale: string;
  dict: any;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-cream pt-16 pb-24 md:pb-12 border-t-4 border-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-cream/15">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-earth bg-cream/10 shrink-0">
                <Image
                  src="/images/logo/logo-square.png"
                  alt="Merge Eco-Friendly Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif font-black text-2xl text-cream tracking-tight block">
                  MERGE
                </span>
                <span className="text-xs font-bold text-leaf tracking-widest block uppercase">
                  Eco-Friendly Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm text-cream/75 leading-relaxed">
              {dict.footer.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getInstagramProfileUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-earth text-cream flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                aria-label="Follow Merge Eco-Friendly on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={getYouTubeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-earth text-cream flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                aria-label="Subscribe to Merge Eco-Friendly on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-cream mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf" />
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/80">
              <li>
                <Link href={`/${locale}`} className="hover:text-leaf transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:text-leaf transition-colors">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-leaf transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/factory`} className="hover:text-leaf transition-colors">
                  {dict.nav.factory}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-leaf transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif font-bold text-lg text-cream mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf" />
              {dict.footer.products}
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/80">
              <li>
                <Link href={`/${locale}/products/250ml-paper-cup`} className="hover:text-leaf transition-colors font-medium text-cream">
                  ★ 250 ml Paper Cup (Food-Grade)
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/coffee-scrub-handmade-soap`} className="hover:text-leaf transition-colors">
                  Artisanal Coffee Scrub Soap
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/neem-tulsi-herbal-soap`} className="hover:text-leaf transition-colors">
                  Neem & Tulsi Purifying Soap
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/soy-wax-aromatherapy-candle`} className="hover:text-leaf transition-colors">
                  Pure Soy Wax Aromatherapy Candle
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:text-leaf transition-colors text-leaf font-semibold">
                  View Full Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif font-bold text-lg text-cream mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-earth" />
              {dict.contact.title}
            </h3>
            <address className="not-italic space-y-3 text-sm text-cream/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-earth shrink-0 mt-1" />
                <span>Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal, Madhya Pradesh, India</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-leaf shrink-0" />
                <a href="tel:+919303744922" className="hover:text-cream font-medium">
                  +91 93037 44922
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-leaf shrink-0" />
                <a href="mailto:mergeecofriendlypvt@gmail.com" className="hover:text-cream">
                  mergeecofriendlypvt@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-xs text-cream/60">
                <Clock className="w-4 h-4 text-earth shrink-0" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar with Real Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} Merge Eco-Friendly Pvt. Ltd. {dict.footer.rights}</span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 text-leaf">
              Made with <Heart className="w-3 h-3 text-earth fill-earth" /> in Bhopal
            </span>
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/privacy`} className="hover:text-cream transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-cream transition-colors">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
