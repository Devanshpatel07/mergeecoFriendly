export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '919303744922';

export interface WhatsAppOrderParams {
  productName: string;
  category?: string;
  size?: string;
  quantity?: string | number;
  customerName?: string;
}

export function buildWhatsAppOrderUrl(params: WhatsAppOrderParams): string {
  const lines = [
    `*Hello Merge Eco-Friendly!*`,
    `I would like to place an order / inquire about:`,
    `• *Product:* ${params.productName}`,
  ];

  if (params.category) {
    lines.push(`• *Category:* ${params.category}`);
  }
  if (params.size) {
    lines.push(`• *Size / Pack:* ${params.size}`);
  }
  if (params.quantity) {
    lines.push(`• *Estimated Quantity:* ${params.quantity}`);
  }
  if (params.customerName) {
    lines.push(`• *From:* ${params.customerName}`);
  }

  lines.push(``);
  lines.push(`Please share the wholesale pricing and dispatch timeline. Thank you!`);

  const message = lines.join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppQuoteUrl(data: {
  name: string;
  businessName?: string;
  phone: string;
  category: string;
  quantityRange: string;
  message?: string;
}): string {
  const lines = [
    `*Quote Request — Merge Eco-Friendly Pvt. Ltd.*`,
    `• *Name:* ${data.name}`,
  ];

  if (data.businessName) {
    lines.push(`• *Business:* ${data.businessName}`);
  }
  lines.push(`• *Phone:* ${data.phone}`);
  lines.push(`• *Category:* ${data.category}`);
  lines.push(`• *Quantity:* ${data.quantityRange}`);

  if (data.message) {
    lines.push(`• *Notes:* ${data.message}`);
  }

  lines.push(``);
  lines.push(`Kindly provide a formal quote and delivery estimate. Thank you!`);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}
