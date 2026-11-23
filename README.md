# Merge Eco-Friendly Pvt. Ltd. — Official Website Rebuild

> **"Sustainable Choices, Greener Future"**  
> Modern, high-performance, mobile-first website for **Merge Eco-Friendly Pvt. Ltd.**, a women-led sustainable manufacturing enterprise based in Bhopal, Madhya Pradesh, India. Specializing in food-grade disposable paper cups (featured flagship: 250 ml), artisanal cold-process natural soaps, and hand-poured aromatherapy soy wax candles.

---

## 🌿 Overview & Key Highlights

- **Tech Stack:** Next.js 14+ (App Router) + TypeScript + Tailwind CSS
- **Bilingual Support:** Full English (`/en`) and Hindi (`/hi`) localization with seamless toggle
- **Ordering Channels:**
  - **WhatsApp Direct Order:** Dynamic pre-filled URI-encoded inquiry messages (`https://wa.me/919303744922?text=...`)
  - **Instagram DM Order:** Direct link to `@mergeecofriendlypvtltd`
  - **B2B Bulk Quote Form:** Powered by React Hook Form + Zod schema validation + Next.js Route Handler (`/api/quote`) with Resend email notification and instant WhatsApp fallback
- **Flagship Cup Showcase:** 250 ml Food-Grade Paper Cup with interactive technical specifications table and **True Size Visual Guide** (silhouette comparison with human hand and ₹10 coin)
- **SEO & Structured Data:** Semantic HTML5, WCAG AA compliant contrast, dynamic XML sitemap (`/sitemap.xml`), `robots.txt`, and Schema.org JSON-LD structured data (`LocalBusiness`, `Product`)
- **Legacy URL Protection:** Comprehensive 301 permanent redirects in `next.config.js` ensuring zero 404 broken backlinks from the old website

---

## 📁 Repository Structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx             # Root bilingual layout (metadata, fonts, header, footer, floating order bar)
│   │   ├── page.tsx               # Home page (13 ordered sections)
│   │   ├── products/
│   │   │   ├── page.tsx           # Filterable product catalog (All, Cups, Soaps, Candles)
│   │   │   └── [slug]/page.tsx    # SSG product detail page with specs, size guide, and direct order CTAs
│   │   ├── about/page.tsx         # Story, women empowerment mission, core values, artisan quotes
│   │   ├── factory/page.tsx       # Machinery gallery, 4-step manufacturing process, video embed slot
│   │   ├── contact/page.tsx       # Interactive quote form, Google Maps embed, business contact details
│   │   ├── privacy/page.tsx       # India DPDP Act 2023 & IT Act 2000 compliant privacy policy
│   │   └── terms/page.tsx         # B2B & retail terms under Bhopal, MP jurisdiction
│   ├── api/quote/route.ts         # Serverless API endpoint for quote dispatch (Resend + rate limiting)
│   ├── globals.css                # Tailwind directives & CSS variables
│   ├── layout.tsx                 # Root passthrough layout
│   ├── not-found.tsx              # Custom 404 page with navigation fallback
│   ├── page.tsx                   # Root redirect to default locale (/en)
│   ├── robots.ts                  # Robots.txt generator
│   └── sitemap.ts                 # XML sitemap generator
├── components/                    # Reusable React UI components
│   ├── Header.tsx                 # Sticky navigation with mobile slideout drawer & language switcher
│   ├── Footer.tsx                 # Semantic footer with verified links & contact data
│   ├── Hero.tsx                   # High-impact hero section with dual CTAs and women-led highlight
│   ├── FeaturedProduct.tsx        # 250 ml paper cup showcase with spec table
│   ├── SizeGuide.tsx              # True-scale visual comparison (Cup vs. Hand & Coin)
│   ├── ProductCard.tsx            # 1:1 square aspect ratio card with dual order buttons
│   ├── ProductGrid.tsx            # Category-filtered responsive product grid
│   ├── WomenSection.tsx           # "Made by the Women of Bhopal" artisan quotes and founder message
│   ├── FactoryGallery.tsx         # Machine photo showcase & YouTube video embed
│   ├── WhyChooseUs.tsx            # 5 key value proposition cards
│   ├── BulkOrderCTA.tsx           # B2B wholesale banner with WhatsApp CTA
│   ├── ReviewsSlider.tsx          # Client testimonials carousel with controls
│   ├── InstagramGrid.tsx          # 6-post Instagram feed grid linking to official profile
│   ├── HowToOrder.tsx             # 4-step ordering workflow (Choose -> Message -> Pay -> Delivery)
│   ├── QuoteForm.tsx              # Validated quotation request form
│   ├── FloatingOrderBar.tsx       # Desktop floating WhatsApp button & mobile sticky order bar
│   ├── FAQAccordion.tsx           # Searchable accordion for product & wholesale FAQs
│   └── Badge.tsx                  # Eco-friendly pill badges ("Plastic-Free", "Women-Led", etc.)
├── data/
│   ├── products.json              # Central product catalog data
│   ├── team.json                  # Bhopal artisan team quotes & founder note
│   ├── reviews.json               # Client testimonials
│   └── faq.json                   # Product, wholesale, and delivery FAQs
├── lib/
│   ├── types.ts                   # Strict TypeScript data models
│   ├── whatsapp.ts                # WhatsApp message builder with URI encoding
│   ├── instagram.ts               # Instagram DM and YouTube deep links
│   ├── seo.ts                     # JSON-LD Schema generators
│   └── i18n.ts                    # Dictionary loader and locale utilities
├── messages/
│   ├── en.json                    # English translations dictionary
│   └── hi.json                    # Hindi (हिंदी) translations dictionary
├── public/
│   ├── images/
│   │   ├── logo/                  # Vector SVGs, PNGs, square/horizontal logos, favicon & web app icons
│   │   ├── products/              # 1000x1000 WebP product imagery
│   │   ├── factory/               # Factory machinery & cleanroom photos
│   │   ├── team/                  # Women artisan team photos
│   │   ├── instagram/             # Curated Instagram showcase images
│   │   └── README_PHOTOS_NEEDED.md# Master photo replacement checklist & specifications
│   └── screenshots/               # Responsive acceptance verification screenshots (360px, 768px, 1280px)
├── next.config.js                 # Image optimization, CSP security headers & 301 legacy redirects
├── tailwind.config.ts             # Custom brand color palette, fonts & kraft styling
├── tsconfig.json                  # TypeScript compiler options
└── vercel.json                    # Vercel deployment configuration
```

---

## 🎨 Brand Design System

| Token | Hex Code | Purpose / Usage |
|---|---|---|
| **Forest** | `#2F5D3A` | Primary headers, dominant brand accents, primary buttons |
| **Leaf** | `#7BAE5A` | Badges, success indicators, eco highlights, hover accents |
| **Earth** | `#C9703F` | Secondary buttons, terracotta warmth, craft callouts |
| **Cream** | `#FAF6EE` | Natural background tone, card backgrounds, soft contrast |
| **Ink** | `#2B2B2B` | Primary body typography for high legibility (WCAG AA compliant) |

- **Headings Font:** `Playfair Display` (Serif elegance and warmth)
- **Body Font:** `Poppins` (Clean, contemporary geometric sans-serif)

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js**: v18.17.0 or v20+ recommended
- **npm**: v9+ or v10+

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/merge-eco-friendly.git
cd merge-eco-friendly
npm install
```

### 2. Configure Environment Variables
Copy the example environment configuration:
```bash
cp .env.example .env.local
```
Fill in your configuration keys:
```env
# Domain
NEXT_PUBLIC_SITE_URL=https://mergeecofriendlypvtltd.com

# Direct Social & WhatsApp Contacts
NEXT_PUBLIC_WHATSAPP=919303744922
NEXT_PUBLIC_INSTAGRAM=mergeecofriendlypvtltd
NEXT_PUBLIC_YOUTUBE=MergeEcoFriendlyPvtLtd

# Email Notifications (Resend API)
RESEND_API_KEY=re_your_api_key_here
QUOTE_TO_EMAIL=mergeecofriendlypvt@gmail.com
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production & Lint
```bash
# Check code quality and TypeScript types
npm run lint

# Build optimized production bundle
npm run build

# Start local production server
npm run start
```

---

## 📝 How to Update Website Content

### 1. Editing Products (`/data/products.json`)
All product catalog entries are typed via `Product` in `lib/types.ts`. To modify or add a product, simply update `data/products.json`:

```json
{
  "slug": "250ml-paper-cup",
  "category": "paper-cups",
  "name": {
    "en": "250 ml Food-Grade Paper Cup",
    "hi": "250 मिली फूड-ग्रेड पेपर कप"
  },
  "shortDescription": {
    "en": "Our primary manufactured product. 100% biodegradable, leak-proof paper cups made from premium virgin food-grade paperboard.",
    "hi": "हमारा मुख्य उत्पाद। 100% बायोडिग्रेडेबल, लीक-प्रूफ पेपर कप।"
  },
  "images": ["/images/products/paper-cup-250ml.webp"],
  "specs": {
    "en": {
      "Capacity": "250 ml (8.5 oz)",
      "Material": "ITC Food-Grade Paperboard (190-210 GSM)",
      "Top Diameter": "75 mm",
      "Bottom Diameter": "53 mm",
      "Height": "92 mm",
      "Usage": "Hot Tea, Coffee, Cold Beverages, Water",
      "Biodegradability": "100% Recyclable & Compostable"
    },
    "hi": {
      "क्षमता": "250 मिली",
      "सामग्री": "आईटीसी फूड-ग्रेड पेपरबोर्ड (190-210 जीएसएम)",
      "उपयोग": "गर्म चाय, कॉफी, ठंडा पानी"
    }
  },
  "sizes": ["250 ml"],
  "packSizes": ["Pack of 50", "Pack of 100", "Master Carton of 1,000"],
  "moq": "500 Pieces (Wholesale custom branding available from 10,000 pcs)",
  "price": "On Request",
  "inStock": true,
  "featured": true,
  "badges": ["Plastic-Free", "Food-Grade", "Made in Bhopal"]
}
```

### 2. Updating Bilingual Translations (`/messages/`)
- Site UI labels, navigation menus, hero titles, contact information, and footer links are managed in:
  - `messages/en.json` (English)
  - `messages/hi.json` (Hindi)
- Both files share identical JSON key hierarchies, ensuring effortless parity across languages.

### 3. Replacing Placeholder Photos (`/public/images/`)
Refer to the detailed guide in:  
📄 [`public/images/README_PHOTOS_NEEDED.md`](public/images/README_PHOTOS_NEEDED.md)
- **Product Images:** 1000 × 1000 px, 1:1 aspect ratio, clean white/kraft background, WebP format.
- **Factory Images:** 1600 × 1000 px, 16:10 aspect ratio, authentic shots of the high-speed paper cup forming machines, die-cutting unit, and packaging stations.
- **Team Images:** 800 × 1000 px, 4:5 portrait aspect ratio, respectful and empowering photos of Bhopal women artisans.

---

## ☁️ Vercel Deployment Guide

### Step 1: Push Repository to GitHub
```bash
git init
git add .
git commit -m "feat: complete Merge Eco-Friendly website rebuild"
git remote add origin https://github.com/<your-account>/merge-eco-friendly.git
git branch -M main
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select your repository `merge-eco-friendly` and click **"Import"**.
4. **Framework Preset:** Next.js (automatically detected).
5. **Root Directory:** `./` (default).

### Step 3: Configure Environment Variables
In the Vercel project configuration screen, add the following under **Environment Variables**:

| Variable Key | Example Production Value | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://mergeecofriendlypvtltd.com` | Base URL for canonical tags, Open Graph, and sitemap |
| `NEXT_PUBLIC_WHATSAPP` | `919303744922` | WhatsApp destination phone number (international format without `+`) |
| `NEXT_PUBLIC_INSTAGRAM` | `mergeecofriendlypvtltd` | Instagram handle |
| `NEXT_PUBLIC_YOUTUBE` | `MergeEcoFriendlyPvtLtd` | YouTube handle |
| `RESEND_API_KEY` | `re_abc123...` | Resend API key for instant lead emails |
| `QUOTE_TO_EMAIL` | `mergeecofriendlypvt@gmail.com` | Email address receiving customer quote submissions |

Click **"Deploy"**.

### Step 4: Custom Domain & DNS Setup
Once the deployment finishes:
1. In the Vercel dashboard, navigate to **Settings** > **Domains**.
2. Add `mergeecofriendlypvtltd.com` and `www.mergeecofriendlypvtltd.com`.
3. In your DNS provider (GoDaddy, Namecheap, Hostinger, etc.), add the following DNS records:

| Record Type | Name / Host | Target Value | TTL |
|---|---|---|---|
| **A** | `@` (or blank) | `76.76.21.21` | Automatic / 300s |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300s |

4. Vercel will automatically provision and renew a free Let's Encrypt SSL/TLS certificate.

### Step 5: Verified 301 Permanent Redirects
The project automatically maps all legacy WordPress/WooCommerce URLs in `next.config.js` to preserve search ranking equity:

| Old URL Path | Destination Path | Status |
|---|---|---|
| `/our-product` | `/en/products` | `301 Permanent` |
| `/about-us` | `/en/about` | `301 Permanent` |
| `/contact-us` | `/en/contact` | `301 Permanent` |
| `/contact` | `/en/contact` | `301 Permanent` |
| `/shop` | `/en/products` | `301 Permanent` |
| `/shop-2` | `/en/products` | `301 Permanent` |
| `/my-account` | `/en/contact` | `301 Permanent` |
| `/blog` | `/en` | `301 Permanent` |

### Step 6: Google Search Console Submission
1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property `https://mergeecofriendlypvtltd.com`.
3. Navigate to **Sitemaps** in the left sidebar.
4. Enter `sitemap.xml` (URL: `https://mergeecofriendlypvtltd.com/sitemap.xml`) and click **Submit**.

---

## 📞 Official Business Information

- **Company Name:** Merge Eco-Friendly Pvt. Ltd.
- **Tagline:** Sustainable Choices, Greener Future
- **Address:** Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal, Madhya Pradesh 462039, India
- **Phone / WhatsApp:** [+91 93037 44922](https://wa.me/919303744922)
- **Email:** [mergeecofriendlypvt@gmail.com](mailto:mergeecofriendlypvt@gmail.com)
- **Operating Hours:** Monday – Sunday, 10:00 AM – 8:00 PM IST
- **Official Instagram:** [@mergeecofriendlypvtltd](https://www.instagram.com/mergeecofriendlypvtltd/)
- **Official YouTube:** [@MergeEcoFriendlyPvtLtd](https://www.youtube.com/@MergeEcoFriendlyPvtLtd)
- **Licensing & Legal:** Incorporated under the Companies Act (Ministry of Corporate Affairs, India). DPDP Act 2023 Compliant.
