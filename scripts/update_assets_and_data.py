import os
import shutil
import json

# 1. Update Team Images
print('Updating team images...')
shutil.copyfile('public/images/team/women-handcrafted-showcase.webp', 'public/images/team/hero-women-products.webp')
shutil.copyfile('public/images/team/founder-showcase.webp', 'public/images/team/team-founder.webp')
shutil.copyfile('public/images/team/artisan-2.webp', 'public/images/team/team-bhopal-artisans.webp')
shutil.copyfile('public/images/team/artisan-1.webp', 'public/images/team/team-quality-inspectors.webp')

# 2. Update data/products.json
print('Updating data/products.json...')
with open('data/products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# Update 250ml cup images to include printed designs
for p in products:
    if p['slug'] == '250ml-paper-cup':
        p['images'] = [
            '/images/products/paper-cup-250ml.webp',
            '/images/products/paper-cup-printed-designs.webp'
        ]

# Define new authentic products from user's upload
new_products = [
    {
        "slug": "festive-modak-candles-set",
        "category": "candles",
        "name": {
            "en": "Fluted Festive Modak Candles (Set of 4)",
            "hi": "उत्सव मोदक मोमबत्ती (4 का सेट)"
        },
        "shortDescription": {
            "en": "Traditional fluted modak festive candles hand-poured in soothing pastel shades with pure cotton wicks.",
            "hi": "शुद्ध कॉटन विक के साथ पेस्टल रंगों में हस्तनिर्मित पारंपरिक मोदक उत्सव मोमबत्तियां।"
        },
        "description": {
            "en": "Handcrafted with devotion by Bhopal women artisans, these modak-shaped candles bring warmth, auspicious blessings, and clean ambient light to Diwali, Ganesh Chaturthi, and festive home settings. Beautifully boxed on eco-friendly kraft packaging.",
            "hi": "भोपाल की महिला कारीगरों द्वारा श्रद्धापूर्वक हस्तनिर्मित। मोदक के आकार की ये मोमबत्तियां दिवाली, गणेश चतुर्थी और त्योहारों पर घर में सकारात्मक ऊर्जा और प्रकाश लाती हैं।"
        },
        "images": [
            "/images/products/candle-festive-modak.webp"
        ],
        "specs": {
            "Wax Type": "100% Pure Botanical Soy & Beeswax Blend",
            "Set Size": "Set of 4 Modak Candles (Assorted Pastel Colors)",
            "Burn Time": "6-8 hours each",
            "Packaging": "Kraft Gift Box with Dried Baby's Breath Accents"
        },
        "waxType": "Botanical Soy & Beeswax Blend",
        "scent": "Subtle Sweet Vanilla & Cardamom",
        "burnTime": "6-8 Hours each",
        "sizes": ["Set of 4"],
        "moq": "2 sets",
        "price": "₹299",
        "inStock": True,
        "featured": True,
        "comingSoon": False,
        "badges": ["Handcrafted in Bhopal", "Festive Edition", "Eco-Friendly Kraft Box"]
    },
    {
        "slug": "carved-ombre-peonies-candle",
        "category": "candles",
        "name": {
            "en": "Artisan Carved Ombre Peonies Candle",
            "hi": "कलात्मक नक्काशीदार ऑम्ब्रे पेओनी कैंडल"
        },
        "shortDescription": {
            "en": "Intricately hand-sculpted peony blossoms in gradient rose, peach, and cream botanical wax.",
            "hi": "गुलाबी, आड़ू और क्रीम रंगों में जटिल रूप से हाथ से तराशी गई पेओनी मोमबत्तियां।"
        },
        "description": {
            "en": "Each petal is delicately carved by hand by our women artisans in Bhopal. A stunning centerpiece for decorative gifting, living spaces, and spa settings with a gentle floral aroma that lingers pleasantly.",
            "hi": "भोपाल में हमारी महिला कारीगरों द्वारा प्रत्येक पंखुड़ी को नाजुक रूप से हाथ से तराशा गया है। उपहार और लिविंग रूम के लिए एक शानदार आकर्षण।"
        },
        "images": [
            "/images/products/candle-ombre-peonies.webp"
        ],
        "specs": {
            "Wax Type": "Pure Botanical Soy Wax",
            "Dimensions": "8 cm diameter x 4.5 cm height",
            "Burn Time": "15-18 hours",
            "Scent": "English Rose & Pink Peony Bloom"
        },
        "waxType": "Pure Botanical Soy Wax",
        "scent": "English Rose & Peony",
        "burnTime": "15-18 Hours",
        "sizes": ["Single Blossom", "Gift Duo"],
        "moq": "2 units",
        "price": "₹249",
        "inStock": True,
        "featured": True,
        "comingSoon": False,
        "badges": ["100% Hand-Carved", "Artisan Centerpiece", "Paraffin-Free"]
    },
    {
        "slug": "floating-lotus-ceramic-boat-candle",
        "category": "candles",
        "name": {
            "en": "Floating Lotus Ceramic Boat Candle",
            "hi": "फ्लोटिंग लोटस सिरेमिक बोट कैंडल"
        },
        "shortDescription": {
            "en": "Vibrant sculpted red lotus candle nestled in an elegant handcrafted ceramic boat bowl.",
            "hi": "सुंदर हस्तनिर्मित सिरेमिक बोट में सजी जीवंत लाल कमल मोमबत्ती।"
        },
        "description": {
            "en": "Inspired by the serene lakes of Bhopal, this floating lotus candle features vivid red petals resting on a jade-toned wax pool inside a gilded ceramic boat vessel. Adds an instant aura of meditation and luxury.",
            "hi": "भोपाल की शांत झीलों से प्रेरित, यह फ्लोटिंग कमल मोमबत्ती सिरेमिक बोट में सजी है और ध्यान व शांति का वातावरण बनाती है।"
        },
        "images": [
            "/images/products/candle-floating-lotus.webp"
        ],
        "specs": {
            "Vessel": "Handcrafted Glazed Ceramic Boat (Reusable)",
            "Wax Type": "100% Pure Soy Wax",
            "Burn Time": "25-30 hours",
            "Scent": "Fresh Water Lotus & White Jasmine"
        },
        "waxType": "100% Pure Soy Wax",
        "scent": "Water Lotus & Jasmine",
        "burnTime": "25-30 Hours",
        "sizes": ["Ceramic Boat (20 cm)"],
        "moq": "1 unit",
        "price": "₹499",
        "inStock": True,
        "featured": False,
        "comingSoon": False,
        "badges": ["Ceramic Keepsake", "Handmade in Bhopal", "Aromatherapy"]
    },
    {
        "slug": "pastel-bubble-cube-candles-set",
        "category": "candles",
        "name": {
            "en": "Pastel Bubble Cube Candles (Set of 4)",
            "hi": "पेस्टल बबल क्यूब मोमबत्तियां (4 का सेट)"
        },
        "shortDescription": {
            "en": "Chic contemporary geometric bubble candles in soothing lavender, sage green, blush peach, and cream.",
            "hi": "लैवेंडर, सेज ग्रीन, पीच और क्रीम रंगों में आधुनिक ज्यामितीय बबल क्यूब मोमबत्तियां।"
        },
        "description": {
            "en": "A modern aesthetic statement crafted from pure soy wax. Clean-burning, non-toxic, and smoke-free, these bubble cubes elevate coffee tables, bookshelves, and self-care vanity corners.",
            "hi": "शुद्ध सोया वैक्स से निर्मित आधुनिक कलात्मक मोमबत्तियां। धुआं-रहित और सुरक्षित, जो कमरे की सुंदरता बढ़ाती हैं।"
        },
        "images": [
            "/images/products/candle-bubble-cubes.webp"
        ],
        "specs": {
            "Wax Type": "100% Organic Soy Wax",
            "Cube Size": "6 cm x 6 cm x 6 cm each",
            "Set Count": "4 Cube Candles",
            "Burn Time": "10 hours each"
        },
        "waxType": "100% Organic Soy Wax",
        "scent": "Vanilla Cashmere & White Tea",
        "burnTime": "10 Hours each",
        "sizes": ["Set of 4"],
        "moq": "1 set",
        "price": "₹399",
        "inStock": True,
        "featured": False,
        "comingSoon": False,
        "badges": ["Modern Aesthetic", "Clean Burning", "Lead-Free Wick"]
    },
    {
        "slug": "garden-daisies-botanical-melts",
        "category": "candles",
        "name": {
            "en": "Garden Daisies Botanical Wax Melts (Crate of 12)",
            "hi": "गार्डन डेज़ी बॉटनिकल वैक्स मेल्ट्स (12 का क्रेट)"
        },
        "shortDescription": {
            "en": "Colorful handcrafted daisy blossoms in a rustic wooden keepsake crate. Perfect as wax melts or festive decor.",
            "hi": "लकड़ी के सुंदर क्रेट में सजी रंग-बिरंगी हस्तनिर्मित डेज़ी मोमबत्तियां।"
        },
        "description": {
            "en": "Artisan-molded and hand-tinted in cheerful garden hues—sky blue, sunny yellow, petal pink, and sea green. Can be floated in water, used in aroma diffusers, or kept as natural scented decor.",
            "hi": "सुंदर रंगों में हाथ से ढाली गई डेज़ी फूल। इन्हें पानी में तैराया जा सकता है, डिफ्यूज़र में इस्तेमाल किया जा सकता है या सजावट के रूप में रखा जा सकता है।"
        },
        "images": [
            "/images/products/candle-garden-daisies.webp"
        ],
        "specs": {
            "Quantity": "12 Flower Melts in Rustic Wood Crate",
            "Wax Type": "Pure Botanical Soy Wax",
            "Scent": "Fresh Wildflower Meadow",
            "Crate Dimensions": "22 cm x 15 cm x 5 cm"
        },
        "waxType": "Pure Botanical Soy Wax",
        "scent": "Wildflower Meadow",
        "burnTime": "4-5 Hours per bloom",
        "sizes": ["Crate of 12"],
        "moq": "1 crate",
        "price": "₹449",
        "inStock": True,
        "featured": False,
        "comingSoon": False,
        "badges": ["Wooden Keepsake Crate", "Multi-Color Blooms", "Handmade in Bhopal"]
    }
]

# Check existing slugs
existing_slugs = {p['slug'] for p in products}
for np in new_products:
    if np['slug'] not in existing_slugs:
        products.append(np)

with open('data/products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print(f'data/products.json now has {len(products)} products!')
