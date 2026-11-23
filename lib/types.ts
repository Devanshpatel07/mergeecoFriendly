export type ProductCategory = 'cups' | 'soaps' | 'candles';

export interface Product {
  slug: string;
  category: ProductCategory;
  name: {
    en: string;
    hi: string;
  };
  shortDescription: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  images: string[];
  specs: Record<string, string>;
  sizes?: string[];
  packSizes?: string[];
  moq: string;
  price: string;
  inStock: boolean;
  featured?: boolean;
  comingSoon?: boolean;
  badges: string[];
  // Soap specific
  weight?: string;
  ingredients?: string[];
  skinType?: string;
  benefits?: string[];
  // Candle specific
  waxType?: string;
  scent?: string;
  burnTime?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: {
    en: string;
    hi: string;
  };
  quote: {
    en: string;
    hi: string;
  };
  image: string;
  location: string;
}

export interface Review {
  id: string;
  author: string;
  business?: string;
  role: string;
  rating: number;
  date: string;
  content: {
    en: string;
    hi: string;
  };
}

export interface FAQItem {
  id: string;
  category: 'general' | 'cups' | 'soaps' | 'wholesale';
  question: {
    en: string;
    hi: string;
  };
  answer: {
    en: string;
    hi: string;
  };
}

export interface QuoteFormData {
  name: string;
  businessName?: string;
  phone: string;
  email?: string;
  category: 'Paper Cups' | 'Handmade Soaps' | 'Handmade Candles' | 'Wholesale Combo';
  quantityRange: string;
  message?: string;
  honeypot?: string;
}
