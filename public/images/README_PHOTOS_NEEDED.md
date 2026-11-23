# Merge Eco-Friendly Pvt. Ltd. — Image Replacement Guide

This document lists every real photograph and media asset required to replace the temporary placeholders on the website.

> [!NOTE]
> All product and gallery images are displayed in a clean **1:1 square ratio** using Next.js `object-fit: cover` with responsive AVIF/WebP optimization. Uploading images at the recommended dimensions ensures zero layout shift, crisp sharpness on retina screens, and fast mobile loading.

---

## 1. Logo Assets (`/public/images/logo/`)
| File Name | Purpose | Recommended Resolution | Format | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `logo-square.png` / `.webp` | Header icon, avatar, social profile | 1024 × 1024 px | PNG (transparent) / WebP | Circular crest with gold borders |
| `logo-horizontal.svg` / `.png` | Desktop sticky navigation & invoices | 600 × 100 px | SVG or PNG (transparent) | Emblem + "MERGE ECO-FRIENDLY PVT. LTD." |
| `logo-white.svg` / `.png` | Dark background footer & banners | 600 × 100 px | SVG or PNG (transparent) | White/cream/gold elements |
| `favicon.ico` & `favicon.svg` | Browser tab icon | 32 × 32 px / vector | ICO + SVG | Crisp at micro-resolutions |

---

## 2. Product Photography (`/public/images/products/`)
All product images must be shot under natural, warm light with neutral/kraft backgrounds:

| File Name | Product Name | Dimensions | Specs / Details to Feature |
| :--- | :--- | :--- | :--- |
| `paper-cup-250ml.webp` | **250 ml Paper Cup (Primary Featured)** | 1000 × 1000 px | Crisp shot of the 250ml cup (with tea/coffee or clean white/kraft rim) showing food-grade paper texture and sturdy base. |
| `paper-cup-150ml.webp` | 150 ml Paper Cup (Coming Soon) | 1000 × 1000 px | Small tea/espresso cup silhouette. |
| `paper-cup-350ml.webp` | 350 ml Paper Cup (Coming Soon) | 1000 × 1000 px | Tall beverage/shake cup. |
| `soap-coffee-scrub.webp` | Coffee Scrub Soap (100g) | 1000 × 1000 px | Textured bar with visible ground coffee grains on kraft paper or wooden tray. |
| `soap-neem-tulsi.webp` | Neem & Tulsi Herbal Soap (100g) | 1000 × 1000 px | Natural green hue bar beside fresh neem and tulsi leaves. |
| `soap-shea-butter.webp` | Shea Butter & Honey Soap (100g) | 1000 × 1000 px | Creamy golden-hued soap bar with raw honey dipper or beeswax texture. |
| `soap-charcoal.webp` | Activated Charcoal Detox Bar (100g) | 1000 × 1000 px | Deep charcoal-black rectangular or rounded soap bar with clean lather bubbles. |
| `candle-soy-aromatherapy.webp` | Soy Wax Aromatherapy Candle | 1000 × 1000 px | Hand-poured soy wax in glass or ceramic jar with lit cotton wick showing gentle warm flame. |
| `candle-lavender-vanilla.webp` | Lavender Blossom Candle | 1000 × 1000 px | Candle in frosted jar decorated with dry lavender buds. |
| `candle-sandalwood.webp` | Sandalwood & Forest Spices Candle | 1000 × 1000 px | Earthy container candle with wood shavings or spice accents. |

---

## 3. Factory & Machinery (`/public/images/factory/`)
Showcasing the Bhopal production facility and quality standards:

| File Name | Subject | Dimensions | Description |
| :--- | :--- | :--- | :--- |
| `machine-paper-cup-forming.webp` | Automatic Cup Forming Machine | 1200 × 900 px (or 1000 × 1000 px) | Machine actively curling rims, ultrasonic bottom sealing, and stacking paper cups. |
| `machine-slitting-sealing.webp` | Slitting & Reel Feeding Station | 1200 × 900 px | Food-grade raw paper reel mounting and precision edge cutting. |
| `workshop-soap-curing.webp` | Soap Curing Racks | 1200 × 900 px | Natural wooden trays where 100g soap batches cure for 4 weeks. |
| `workshop-candle-pouring.webp` | Hand-Pouring Candle Table | 1200 × 900 px | Artisan pouring molten soy wax and centering natural cotton wicks. |
| `quality-testing-packaging.webp` | Quality Assurance Bench | 1200 × 900 px | Temperature stress testing (hot water zero-leak test) and hygienic carton packaging. |
| `factory-exterior.webp` | Facility / Signboard | 1200 × 900 px | Shop No. 362 B, E8, Trilanga, Shahpura, Bhopal exterior or reception counter. |
| **Factory Video Embed** | Production Process Reel / Video | 16:9 YouTube Video | Provide YouTube Video ID (e.g., from `@MergeEcoFriendlyPvtLtd`) to update the embed iframe in `components/FactoryGallery.tsx`. |

---

## 4. Women Team & Leadership (`/public/images/team/`)
*Ensure prior written consent is obtained from all team members before uploading photographs.*

| File Name | Subject | Dimensions | Description |
| :--- | :--- | :--- | :--- |
| `hero-women-products.webp` | Hero Section Main Photo | 1200 × 800 px | Group shot of women machine operators & artisans holding 250ml cups and soap bars with proud smiles. |
| `team-bhopal-artisans.webp` | Artisan Collective | 1000 × 1000 px | Women hand-wrapping soaps in biodegradable kraft paper. |
| `team-founder.webp` | Founder & Director | 1000 × 1000 px | Professional portrait of company founder/leader in Bhopal workspace. |
| `team-quality-inspectors.webp` | QA & Packaging Women | 1000 × 1000 px | Team members checking cup rim tightness and batch counts. |

---

## 5. Instagram Showcase (`/public/images/instagram/`)
Curated snapshots linking directly to `@mergeecofriendlypvtltd`:

| File Name | Recommended Content | Dimensions |
| :--- | :--- | :--- |
| `insta-1.webp` | Fresh stack of 250ml paper cups packaged in kraft cartons | 1000 × 1000 px |
| `insta-2.webp` | Close-up of artisan cutting cold-process neem soap with wire cutter | 1000 × 1000 px |
| `insta-3.webp` | Soy candle glowing beside evening reading cup | 1000 × 1000 px |
| `insta-4.webp` | Local café counter in Bhopal using Merge cups for chai & filter coffee | 1000 × 1000 px |
| `insta-5.webp` | Flat lay of raw organic botanicals (tulsi leaves, coffee beans, shea butter) | 1000 × 1000 px |
| `insta-6.webp` | Wholesale order packed and loaded for dispatch | 1000 × 1000 px |

---

## How to Replace Placeholders
1. Optimize your photos into **WebP** format (using Photoshop, Squoosh.app, or sharp CLI).
2. Save files using the exact names and directory paths listed above.
3. Overwrite the placeholder files in `/public/images/...`.
4. Deploy the updated assets to Vercel (or test locally with `npm run build`).
