import React from 'react';
import { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Merge Eco-Friendly Pvt. Ltd.',
  description: 'Our data privacy and protection practices in compliance with the Digital Personal Data Protection (DPDP) Act 2023 and Information Technology Act 2000 of India.',
};

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'en';

  return (
    <div className="py-12 md:py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Legal Compliance"
          title="Privacy Policy"
          subtitle="Last updated: November 2026. Governed by the laws of Madhya Pradesh, India."
        />

        <div className="prose prose-forest max-w-none space-y-8 text-ink-light leading-relaxed bg-cream-light p-8 sm:p-12 rounded-3xl border border-forest/15 shadow-kraft">
          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              1. Introduction & Overview
            </h3>
            <p>
              Merge Eco-Friendly Pvt. Ltd. (“Company”, “we”, “our”, or “us”), having its principal place of business at Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal, Madhya Pradesh, India, values your trust. This Privacy Policy outlines how we collect, handle, process, and safeguard personal and business data received via our website (https://mergeecofriendlypvtltd.com) and associated digital channels including WhatsApp and Instagram.
            </p>
            <p>
              We operate in full compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Information Technology Act, 2000</strong> of the Republic of India.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              2. Information We Collect
            </h3>
            <p>We only collect information voluntarily provided by you when requesting quotations, placing wholesale orders, or contacting our team:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Contact Information:</strong> Full name, business/organization name, phone/WhatsApp number, and email address.</li>
              <li><strong>Commercial Inquiries:</strong> Product selections (e.g. 250ml paper cup volumes, soap variants, custom logo branding requirements), estimated batch quantities, and delivery pin codes.</li>
              <li><strong>Direct Communications:</strong> Message transcripts exchanged on WhatsApp or Instagram for fulfilling your order.</li>
              <li><strong>Technical Data:</strong> Basic anonymized performance telemetry (Vercel Speed Insights and Analytics) to optimize page loading speeds across mobile devices.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              3. Purpose & Legal Basis of Processing
            </h3>
            <p>Your data is processed strictly for legitimate commercial purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Generating accurate formal quotations and wholesale pricing slabs.</li>
              <li>Coordinating order dispatches, local Bhopal transit, and national logistics partner freight.</li>
              <li>Responding to customer support questions and billing queries.</li>
              <li>Complying with statutory GST invoicing and financial reporting obligations in Madhya Pradesh.</li>
            </ul>
            <p className="mt-2 text-sm font-semibold text-forest">
              We never sell, rent, lease, or monetize your contact information with any third-party advertisers.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              4. WhatsApp & Third-Party Integrations
            </h3>
            <p>
              Our website provides deep-links to WhatsApp (+91 93037 44922) and Instagram (@mergeecofriendlypvtltd). When communicating via WhatsApp or Instagram, data is processed in accordance with Meta’s respective privacy policies and end-to-end encryption frameworks.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              5. Data Retention & Your Rights
            </h3>
            <p>
              We retain commercial order records only for the period necessary to fulfill contractual warranties and statutory tax accounting requirements under Indian law. Under the DPDP Act 2023, you have the right to request access, correction, or deletion of your personal data by writing to us at <a href="mailto:mergeecofriendlypvt@gmail.com" className="text-forest font-semibold underline">mergeecofriendlypvt@gmail.com</a>.
            </p>
          </section>

          <section>
            <h3 className="font-serif font-bold text-2xl text-forest-dark mb-3">
              6. Grievance Officer & Contact
            </h3>
            <p>
              In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the contact details for privacy inquiries and grievances are:
            </p>
            <div className="p-4 rounded-xl bg-cream border border-forest/15 text-sm space-y-1">
              <p><strong>Grievance Officer:</strong> Compliance Cell, Merge Eco-Friendly Pvt. Ltd.</p>
              <p><strong>Address:</strong> Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal, Madhya Pradesh, India</p>
              <p><strong>Email:</strong> mergeecofriendlypvt@gmail.com</p>
              <p><strong>Phone:</strong> +91 93037 44922</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
