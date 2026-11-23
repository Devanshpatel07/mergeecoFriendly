import React from 'react';
import { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Merge Eco-Friendly Pvt. Ltd.',
  description: 'Commercial terms of supply, wholesale orders, dispatch, payments, and warranties for paper cups and eco-friendly products in Bhopal, India.',
};

export default function TermsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'en';

  return (
    <div className="py-12 md:py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Commercial Terms"
          title="Terms & Conditions"
          subtitle="Governing supply, ordering, payments, and deliveries. Jurisdiction: Bhopal, Madhya Pradesh."
        />

        <div className="prose prose-forest max-w-none space-y-8 text-ink-light leading-relaxed bg-cream-light p-8 sm:p-12 rounded-3xl border border-forest/15 shadow-kraft">
          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              1. Acceptance of Terms
            </h3>
            <p>
              These Terms and Conditions (“Terms”) govern the purchase of goods and quotation requests from Merge Eco-Friendly Pvt. Ltd. (“Company”). By ordering products through our website, WhatsApp channel, phone, or in person at our Bhopal facility, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              2. Products & Specifications
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Paper Cups (250 ml):</strong> Manufactured from certified food-grade virgin paperboard suitable for hot and cold beverages (up to 95°C). All dimensions (92mm height, 75mm top diameter, 53mm bottom diameter) are subject to standard manufacturing tolerances (±2%).</li>
              <li><strong>Custom Branding:</strong> Custom logo printing on paper cups requires high-resolution vector artwork (AI/EPS/PDF) and minimum run confirmation (10,000 units). Production begins upon written artwork approval.</li>
              <li><strong>Handmade Soaps & Candles:</strong> Being handcrafted in small batches in Bhopal, minor natural variations in soap bar texture, natural scent intensity, and hand-cut weights (approx. 100g ±5%) are hallmarks of authentic artisanal production.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              3. Pricing & Quotations
            </h3>
            <p>
              All prices quoted on the website or via WhatsApp are in Indian Rupees (INR). Quotations for wholesale slabs are valid for 14 calendar days from the date of issue. Prices are exclusive of applicable Goods & Services Tax (GST) unless explicitly noted on the proforma invoice.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              4. Payment Methods & Terms
            </h3>
            <p>
              We accept payments via Unified Payments Interface (UPI — Google Pay, PhonePe, Paytm, BHIM), NEFT/RTGS bank transfers, and verified business credit/debit instruments.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Standard Wholesale Orders:</strong> 100% advance payment prior to dispatch.</li>
              <li><strong>Custom Printed Orders:</strong> 50% advance upon artwork sign-off, and remaining 50% prior to final shipment release.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              5. Shipping, Dispatch & Transit Damage
            </h3>
            <p>
              Local Bhopal dispatches are handled via local transport or courier. Nationwide consignments are consigned via licensed freight carriers. While we use heavy-duty moisture-sealed cartons, consignees must inspect carton integrity upon delivery. In the rare event of transit damage, notify us via WhatsApp (+91 93037 44922) within 48 hours of receipt along with unboxing photographs.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              6. Cancellation & Returns
            </h3>
            <p>
              Due to the hygiene standards governing food-contact tableware (paper cups) and personal care soaps, opened or used cartons cannot be returned. If an order delivers manufacturing defects confirmed by our QA team, replacement batches or credit notes will be issued promptly. Custom-printed orders cannot be cancelled once raw material printing has commenced.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              7. Governing Law & Jurisdiction
            </h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes, claims, or proceedings arising out of or related to commercial transactions with Merge Eco-Friendly Pvt. Ltd. shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bhopal, Madhya Pradesh, India</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
