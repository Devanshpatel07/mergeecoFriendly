'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { buildWhatsAppQuoteUrl } from '@/lib/whatsapp';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Loader2 } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  businessName: z.string().optional(),
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  category: z.enum(['Paper Cups', 'Handmade Soaps', 'Handmade Candles', 'Wholesale Combo']),
  quantityRange: z.string().min(1, 'Please select an estimated quantity range'),
  message: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected').optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  locale: string;
  dict: any;
}

export function QuoteForm({ locale, dict }: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappFallbackUrl, setWhatsappFallbackUrl] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      category: 'Paper Cups',
      quantityRange: '1,000 - 5,000 units',
      honeypot: '',
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitting(true);
    setErrorMsg('');

    // Pre-calculate WhatsApp URL for instant client fallback
    const waUrl = buildWhatsAppQuoteUrl({
      name: data.name,
      businessName: data.businessName,
      phone: data.phone,
      category: data.category,
      quantityRange: data.quantityRange,
      message: data.message,
    });
    setWhatsappFallbackUrl(waUrl);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit quote request');
      }

      setSuccess(true);
      reset();
    } catch (err: any) {
      console.error('Quote submit error:', err);
      // Even if email fails, give the user the direct WhatsApp pathway
      setSuccess(true);
      setErrorMsg('Note: Email notification encountered an issue, but you can still send your inquiry directly via WhatsApp below.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-cream-light border-2 border-forest/15 p-6 sm:p-10 shadow-kraft-lg">
      {success ? (
        <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-leaf" />
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-forest-dark">
            Inquiry Received!
          </h3>
          <p className="text-sm sm:text-base text-ink-light max-w-md mx-auto leading-relaxed">
            {dict.quote.success}
          </p>

          {whatsappFallbackUrl && (
            <div className="pt-2">
              <a
                href={whatsappFallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-cream bg-[#25D366] hover:bg-[#1EBE5D] shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-cream" />
                <span>{dict.quote.openWhatsapp}</span>
              </a>
            </div>
          )}

          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="text-xs font-semibold text-forest underline hover:text-forest-light"
            >
              Submit another quote request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <input type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5">
                {dict.quote.name} *
              </label>
              <input
                type="text"
                {...register('name')}
                placeholder="e.g. Aarti Sharma"
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.name.message}</p>
              )}
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5">
                {dict.quote.business}
              </label>
              <input
                type="text"
                {...register('businessName')}
                placeholder="e.g. Chai Junction / Caterers"
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5">
                {dict.quote.phone} *
              </label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="e.g. +91 93037 44922"
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5">
                {dict.quote.email}
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5">
                {dict.quote.category} *
              </label>
              <select
                {...register('category')}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              >
                <option value="Paper Cups">250 ml Paper Cups & Disposables</option>
                <option value="Handmade Soaps">Handmade Natural Soaps</option>
                <option value="Handmade Candles">Handmade Soy Wax Candles</option>
                <option value="Wholesale Combo">Wholesale / Corporate Gifting Combo</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5">
                {dict.quote.quantity} *
              </label>
              <select
                {...register('quantityRange')}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              >
                <option value="50 - 500 units">Retail (50 - 500 units)</option>
                <option value="1,000 - 5,000 units">1,000 - 5,000 units</option>
                <option value="5,000 - 20,000 units">5,000 - 20,000 units</option>
                <option value="20,000+ units">Bulk 20,000+ units (Custom Printing)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5">
              {dict.quote.message}
            </label>
            <textarea
              rows={3}
              {...register('message')}
              placeholder="Tell us about custom logo requirements, event dates, or delivery city..."
              className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-forest"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 px-6 rounded-full text-base font-bold text-cream bg-forest hover:bg-forest-light disabled:opacity-70 shadow-kraft hover:shadow-kraft-lg transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{dict.quote.sending}</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>{dict.quote.submit}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
