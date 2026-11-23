import os
from PIL import Image, ImageDraw, ImageFont

def create_image(path, title, subtitle, badge, bg_color, accent_color, icon_type='cup'):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img = Image.new('RGB', (1000, 1000), color=bg_color)
    draw = ImageDraw.Draw(img)

    # Decorative border
    draw.rectangle([30, 30, 970, 970], outline=accent_color, width=4)
    draw.rectangle([45, 45, 955, 955], outline='#E5DEC9', width=2)

    # Subtle background texture lines
    for y in range(80, 920, 40):
        draw.line([(60, y), (940, y)], fill='#F2EBDC', width=1)

    # Center illustration based on icon_type
    cx, cy = 500, 430
    if icon_type == 'cup':
        # 250 ml paper cup silhouette
        draw.ellipse([cx-140, cy-170, cx+140, cy-130], fill='#FAF6EE', outline=accent_color, width=6)
        draw.polygon([(cx-135, cy-150), (cx+135, cy-150), (cx+100, cy+140), (cx-100, cy+140)], fill='#FAF6EE', outline=accent_color)
        draw.ellipse([cx-100, cy+125, cx+100, cy+155], fill='#FAF6EE', outline=accent_color, width=6)
        # Kraft band
        draw.polygon([(cx-120, cy-50), (cx+120, cy-50), (cx+110, cy+50), (cx-110, cy+50)], fill='#E8DAC0', outline='#C9703F', width=3)
        # Leaf on cup
        draw.arc([cx-30, cy-30, cx+30, cy+30], start=0, end=180, fill='#2F5D3A', width=5)
    elif icon_type == 'soap':
        # Rounded soap bar
        draw.rounded_rectangle([cx-180, cy-100, cx+180, cy+100], radius=50, fill='#EADBC5', outline=accent_color, width=8)
        # Leaf carving
        draw.ellipse([cx-60, cy-40, cx+60, cy+40], outline='#2F5D3A', width=5)
        draw.line([(cx-50, cy), (cx+50, cy)], fill='#2F5D3A', width=4)
        # Bubbles
        draw.ellipse([cx+120, cy-150, cx+170, cy-100], outline=accent_color, width=5)
        draw.ellipse([cx+160, cy-90, cx+190, cy-60], outline=accent_color, width=4)
    elif icon_type == 'candle':
        # Candle jar + flame
        draw.rounded_rectangle([cx-110, cy-60, cx+110, cy+140], radius=20, fill='#F5EBE0', outline=accent_color, width=8)
        draw.line([(cx, cy-60), (cx, cy-100)], fill='#2B2B2B', width=6)
        # Flame
        draw.polygon([(cx, cy-170), (cx+25, cy-115), (cx-25, cy-115)], fill='#C9703F', outline='#B55823')
        draw.ellipse([cx-15, cy-135, cx+15, cy-105], fill='#F2B859')
    elif icon_type == 'machine':
        # Industrial machine schematic
        draw.rectangle([cx-220, cy-120, cx+220, cy+120], fill='#E1E7DF', outline=accent_color, width=8)
        draw.rectangle([cx-180, cy-80, cx+180, cy+40], fill='#FAF6EE', outline='#7BAE5A', width=4)
        # Roll / gears
        draw.ellipse([cx-140, cy-50, cx-60, cy+30], fill='#CAD5C7', outline=accent_color, width=6)
        draw.ellipse([cx+60, cy-50, cx+140, cy+30], fill='#CAD5C7', outline=accent_color, width=6)
        draw.line([(cx-200, cy+120), (cx-170, cy+160)], fill=accent_color, width=8)
        draw.line([(cx+200, cy+120), (cx+170, cy+160)], fill=accent_color, width=8)
    elif icon_type == 'team':
        # Artisans silhouette / collective icon
        draw.circle((cx-100, cy-50), 45, fill='#2F5D3A', outline='#FAF6EE', width=4)
        draw.arc([cx-160, cy, cx-40, cy+120], 0, 180, fill='#2F5D3A', width=12)
        draw.circle((cx+100, cy-50), 45, fill='#7BAE5A', outline='#FAF6EE', width=4)
        draw.arc([cx+40, cy, cx+160, cy+120], 0, 180, fill='#7BAE5A', width=12)
        draw.circle((cx, cy-90), 55, fill='#C9703F', outline='#FAF6EE', width=4)
        draw.arc([cx-70, cy-40, cx+70, cy+90], 0, 180, fill='#C9703F', width=14)
    else:
        # Botanical / general
        draw.ellipse([cx-80, cy-120, cx+80, cy+120], outline=accent_color, width=6)
        draw.line([(cx, cy-120), (cx, cy+120)], fill=accent_color, width=4)

    # Badge Pill at top
    if badge:
        draw.rounded_rectangle([320, 80, 680, 140], radius=30, fill=accent_color)
        draw.text((500, 110), badge, fill='#FAF6EE', anchor='mm')

    # Title & Subtitle at bottom
    draw.rounded_rectangle([70, 750, 930, 910], radius=24, fill='#FFFFFF', outline='#E5DEC9', width=2)
    draw.text((500, 805), title, fill='#2F5D3A', anchor='mm')
    draw.text((500, 860), subtitle, fill='#6B6B6B', anchor='mm')

    img.save(path, 'WEBP', quality=92)
    print(f'Generated: {path}')

# Output paths
products_dir = r'e:\C#\mergeecofriendly\public\images\products'
factory_dir = r'e:\C#\mergeecofriendly\public\images\factory'
team_dir = r'e:\C#\mergeecofriendly\public\images\team'
insta_dir = r'e:\C#\mergeecofriendly\public\images\instagram'

# 1. Products
create_image(os.path.join(products_dir, 'paper-cup-250ml.webp'), '250 ml Paper Cup (Food-Grade)', 'Primary Product • Tea, Coffee & Water • Pack 50/100/1000', '★ FEATURED PRODUCT', '#FAF6EE', '#2F5D3A', 'cup')
create_image(os.path.join(products_dir, 'paper-cup-150ml.webp'), '150 ml Espresso / Tea Cup', 'Hot Beverage Disposables • Food-Grade Paper', 'COMING SOON', '#FAF6EE', '#7BAE5A', 'cup')
create_image(os.path.join(products_dir, 'paper-cup-350ml.webp'), '350 ml Beverage Cup', 'Cold Drinks, Shakes & Coffee • High Capacity', 'COMING SOON', '#FAF6EE', '#C9703F', 'cup')
create_image(os.path.join(products_dir, 'soap-coffee-scrub.webp'), 'Exfoliating Coffee Scrub Soap (100g)', 'Cold-Pressed • Pure Ground Coffee & Coconut Oil', 'HANDMADE IN BHOPAL', '#FBF7F0', '#C9703F', 'soap')
create_image(os.path.join(products_dir, 'soap-neem-tulsi.webp'), 'Neem & Tulsi Herbal Soap (100g)', 'Antibacterial • Cold-Pressed Neem & Fresh Tulsi', 'PLASTIC-FREE', '#F7FAF4', '#2F5D3A', 'soap')
create_image(os.path.join(products_dir, 'soap-shea-butter.webp'), 'Shea Butter & Honey Bar (100g)', 'Deep Hydration • Raw Shea Butter & Forest Honey', 'NATURAL & ORGANIC', '#FAF7ED', '#D49B44', 'soap')
create_image(os.path.join(products_dir, 'soap-charcoal.webp'), 'Activated Charcoal Detox Bar (100g)', 'Pore Purification • Natural Coconut Shell Charcoal', 'WOMEN-CRAFTED', '#F4F5F4', '#2B2B2B', 'soap')
create_image(os.path.join(products_dir, 'candle-soy-aromatherapy.webp'), 'Soy Wax Aromatherapy Candle', '100% Soy Wax • Essential Oil Blend • 35h Burn', 'HAND-POURED', '#FAF6EE', '#C9703F', 'candle')
create_image(os.path.join(products_dir, 'candle-lavender-vanilla.webp'), 'Lavender Blossom & Vanilla Candle', 'Relaxing Botanical Notes • Cotton Wick • 180g', 'ECO-FRIENDLY', '#F9F6FA', '#7BAE5A', 'candle')
create_image(os.path.join(products_dir, 'candle-sandalwood.webp'), 'Sandalwood & Forest Spices Candle', 'Warm Woody Amber Aroma • Reusable Ceramic Jar', 'SLOW BURNING', '#F8F4EE', '#2F5D3A', 'candle')

# 2. Factory
create_image(os.path.join(factory_dir, 'machine-paper-cup-forming.webp'), 'High-Speed Cup Forming Machine', 'Automatic Ultrasonic Side & Bottom Sealing Unit', 'OUR MACHINERY', '#F4F7F4', '#2F5D3A', 'machine')
create_image(os.path.join(factory_dir, 'machine-slitting-sealing.webp'), 'Precision Slitting & Reel Feeder', 'Food-Grade Paper Reel Handling & Edge Trim', 'CLEAN PRODUCTION', '#F4F7F4', '#7BAE5A', 'machine')
create_image(os.path.join(factory_dir, 'workshop-soap-curing.webp'), 'Soap Curing & Hand-Cutting Studio', 'Natural 4-Week Curing Trays & Wooden Molds', 'HANDMADE BATCHES', '#FAF7ED', '#C9703F', 'soap')
create_image(os.path.join(factory_dir, 'workshop-candle-pouring.webp'), 'Candle Hand-Pouring Station', 'Temperature-Controlled Wax Pots & Pure Cotton Wicks', 'CRAFTED WITH CARE', '#FAF6EE', '#C9703F', 'candle')
create_image(os.path.join(factory_dir, 'quality-testing-packaging.webp'), 'Quality Testing & Hygienic Packaging', 'Zero-Leak Temperature Stress Test & Food-Grade Seal', 'STRICT QUALITY', '#F4F7F4', '#2F5D3A', 'machine')
create_image(os.path.join(factory_dir, 'factory-exterior.webp'), 'Merge Eco-Friendly Facility, Bhopal', 'Shop 362 B, E8 Trilanga, Shahpura, Bhopal MP', 'BHOPAL FACILITY', '#FAF6EE', '#2F5D3A', 'machine')

# 3. Team
create_image(os.path.join(team_dir, 'hero-women-products.webp'), 'Women-Led Manufacturing in Bhopal', 'Crafting Sustainable Cups, Soaps & Candles', 'EMPOWERING LIVELIHOODS', '#F6F9F5', '#2F5D3A', 'team')
create_image(os.path.join(team_dir, 'team-bhopal-artisans.webp'), 'Bhopal Women Production Collective', 'Skilled Machine Operators & Soap Artisans', 'WOMEN OF BHOPAL', '#FAF7ED', '#7BAE5A', 'team')
create_image(os.path.join(team_dir, 'team-founder.webp'), 'Leadership & Founding Story', 'Pioneering Sustainable Everyday Disposables in MP', 'FOUNDER NOTE', '#FAF6EE', '#C9703F', 'team')
create_image(os.path.join(team_dir, 'team-quality-inspectors.webp'), 'Quality Assurance & Inspection Team', 'Ensuring Food-Grade Standards on Every Batch', 'EXCELLENCE DRIVEN', '#F6F9F5', '#2F5D3A', 'team')

# 4. Instagram
create_image(os.path.join(insta_dir, 'insta-1.webp'), 'Freshly Formed 250ml Cups', 'Plastic-free beverage cups ready for shipment', '@mergeecofriendlypvtltd', '#FAF6EE', '#2F5D3A', 'cup')
create_image(os.path.join(insta_dir, 'insta-2.webp'), 'Cold-Pressed Soap Hand Cutting', 'Organic neem and herbal botanicals curing', '@mergeecofriendlypvtltd', '#FAF7ED', '#7BAE5A', 'soap')
create_image(os.path.join(insta_dir, 'insta-3.webp'), 'Aromatherapy Candle Glow', '100% natural soy wax hand-poured in Bhopal', '@mergeecofriendlypvtltd', '#FAF6EE', '#C9703F', 'candle')
create_image(os.path.join(insta_dir, 'insta-4.webp'), 'Café Partner Serving in Merge Cups', 'Supporting eco-conscious hospitality across Bhopal', '@mergeecofriendlypvtltd', '#FAF6EE', '#2F5D3A', 'cup')
create_image(os.path.join(insta_dir, 'insta-5.webp'), 'Herbal Ingredients & Forest Honey', 'Responsibly sourced raw materials from MP forests', '@mergeecofriendlypvtltd', '#FAF7ED', '#C9703F', 'soap')
create_image(os.path.join(insta_dir, 'insta-6.webp'), 'Wholesale Consignment Dispatched', 'Custom bulk orders for corporate events and caterers', '@mergeecofriendlypvtltd', '#F6F9F5', '#7BAE5A', 'machine')

print('All 1:1 image assets generated successfully!')
