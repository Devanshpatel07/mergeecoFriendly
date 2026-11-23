import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  businessName: z.string().optional(),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email().optional().or(z.literal('')),
  category: z.enum(['Paper Cups', 'Handmade Soaps', 'Handmade Candles', 'Wholesale Combo']),
  quantityRange: z.string().min(1, 'Quantity range is required'),
  message: z.string().optional(),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

// Escape user-supplied text before inserting it into the HTML email body.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Simple in-memory rate limiter per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    const now = Date.now();

    // Check rate limit: max 5 requests per 10 minutes per IP
    const limitData = rateLimitMap.get(ip);
    if (limitData && limitData.expiresAt > now) {
      if (limitData.count >= 5) {
        return NextResponse.json(
          { error: 'Too many requests. Please wait a few minutes before submitting another quote.' },
          { status: 429 }
        );
      }
      limitData.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    }

    const body = await req.json();
    const result = quoteSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;
    const safe = {
      name: escapeHtml(data.name),
      businessName: escapeHtml(data.businessName || 'N/A'),
      phone: escapeHtml(data.phone),
      email: escapeHtml(data.email || 'N/A'),
      category: escapeHtml(data.category),
      quantityRange: escapeHtml(data.quantityRange),
      message: escapeHtml(data.message || 'None provided'),
    };

    // Honeypot spam trap
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Inquiry processed' });
    }

    const toEmail = process.env.QUOTE_TO_EMAIL || 'mergeecofriendlypvt@gmail.com';
    const fromEmail = process.env.QUOTE_FROM_EMAIL || 'onboarding@resend.dev';
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const { error: sendError } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `New Quote Request from ${data.name} (${data.category})`,
        text: `
New Quote Request Details:
-------------------------
Name: ${data.name}
Business: ${data.businessName || 'N/A'}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Category: ${data.category}
Quantity: ${data.quantityRange}
Message / Notes: ${data.message || 'N/A'}
Timestamp: ${new Date().toISOString()}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #2F5D3A; border-radius: 12px; background: #FAF6EE;">
            <h2 style="color: #2F5D3A; border-bottom: 2px solid #C9703F; padding-bottom: 8px;">New Quote Request — Merge Eco-Friendly</h2>
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Business:</strong> ${safe.businessName}</p>
            <p><strong>Phone:</strong> <a href="tel:${safe.phone}">${safe.phone}</a></p>
            <p><strong>Email:</strong> ${safe.email}</p>
            <p><strong>Category:</strong> <span style="background: #2F5D3A; color: #FAF6EE; padding: 2px 8px; border-radius: 4px;">${safe.category}</span></p>
            <p><strong>Quantity Range:</strong> ${safe.quantityRange}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #fff; padding: 12px; border-left: 4px solid #7BAE5A;">${safe.message}</blockquote>
            <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
            <p style="font-size: 11px; color: #666;">This inquiry was submitted from mergeecofriendlypvtltd.com</p>
          </div>
        `,
      });
      if (sendError) {
        console.error('Resend send error:', sendError);
        return NextResponse.json(
          { error: 'Could not send your request by email. Please contact us on WhatsApp instead.' },
          { status: 502 }
        );
      }
    } else {
      // Mock Resend when API key is not configured (e.g. local dev or initial staging)
      console.log('--- [MOCK RESEND EMAIL] ---');
      console.log('To:', toEmail);
      console.log('Data:', data);
      console.log('---------------------------');
    }

    return NextResponse.json({
      success: true,
      message: 'Quote inquiry successfully logged',
    });
  } catch (error: any) {
    console.error('API /api/quote Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error processing quote' },
      { status: 500 }
    );
  }
}
