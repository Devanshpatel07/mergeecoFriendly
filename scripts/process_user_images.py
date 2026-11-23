import os
from PIL import Image, ImageOps, ImageFilter

def make_square_padded(im, size=1000, bg_color=(250, 246, 238)):
    """Place image centered in a square canvas of `size`x`size` with `bg_color` padding without distortion."""
    w, h = im.size
    ratio = min(size / w, size / h)
    new_w = int(w * ratio)
    new_h = int(h * ratio)
    resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    canvas = Image.new('RGB', (size, size), bg_color)
    paste_x = (size - new_w) // 2
    paste_y = (size - new_h) // 2
    canvas.paste(resized, (paste_x, paste_y))
    return canvas

def make_square_cropped(im, size=1000):
    """Center crop to square and resize to size."""
    w, h = im.size
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    cropped = im.crop((left, top, left + min_dim, top + min_dim))
    return cropped.resize((size, size), Image.Resampling.LANCZOS)

def make_wide(im, target_w=1600, target_h=1000, bg_color=(245, 242, 235)):
    """Resize to fit widescreen target."""
    w, h = im.size
    ratio = min(target_w / w, target_h / h)
    new_w = int(w * ratio)
    new_h = int(h * ratio)
    resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    canvas = Image.new('RGB', (target_w, target_h), bg_color)
    paste_x = (target_w - new_w) // 2
    paste_y = (target_h - new_h) // 2
    canvas.paste(resized, (paste_x, paste_y))
    return canvas

raw_dir = 'public/images/uploaded_raw'

# Load and crop raw images
print('Loading raw images...')

# 1. raw_15: Hand holding red roses candle dish (crop out top 180 and bottom 170)
im_raw15 = Image.open(f'{raw_dir}/raw_15_WhatsApp_Image_2026-11-18_at_11.47.42_1.jpeg').crop((0, 180, 720, 1430))

# 2. raw_16: Ombre peonies (Y=[320, 1279])
im_raw16 = Image.open(f'{raw_dir}/raw_16_WhatsApp_Image_2026-11-18_at_11.47.42_2.jpeg').crop((0, 320, 720, 1279))

# 3. raw_17: Modak candles (Y=[440, 1159])
im_raw17 = Image.open(f'{raw_dir}/raw_17_WhatsApp_Image_2026-11-18_at_11.47.42.jpeg').crop((0, 440, 720, 1159))

# 4. raw_18: Floating lotus candle (Y=[490, 1109])
im_raw18 = Image.open(f'{raw_dir}/raw_18_WhatsApp_Image_2026-11-18_at_11.47.43_1.jpeg').crop((0, 490, 720, 1109))

# 5. raw_19: Bubble cube candles (Y=[552, 1047])
im_raw19 = Image.open(f'{raw_dir}/raw_19_WhatsApp_Image_2026-11-18_at_11.47.43_2.jpeg').crop((0, 552, 720, 1047))

# 6. raw_20: Daisies crate (crop out top 180 and bottom 170)
im_raw20 = Image.open(f'{raw_dir}/raw_20_WhatsApp_Image_2026-11-18_at_11.47.43.jpeg').crop((0, 180, 720, 1430))

# 7. raw_21: Factory NESSCO machine (Y=[598, 1002])
im_raw21 = Image.open(f'{raw_dir}/raw_21_WhatsApp_Image_2026-11-18_at_12.13.13_1.jpeg').crop((0, 598, 715, 1002))

# 8. raw_22: Cup machine poster (Y=[262, 1337])
im_raw22 = Image.open(f'{raw_dir}/raw_22_WhatsApp_Image_2026-11-18_at_12.13.13_2.jpeg').crop((0, 262, 715, 1337))

# 9. raw_23: Cup fan die cuts & printed cups (Y=[481, 1116], X=[20, 680])
im_raw23 = Image.open(f'{raw_dir}/raw_23_WhatsApp_Image_2026-11-18_at_12.13.13.jpeg').crop((20, 481, 680, 1116))

# 10. raw_24: Factory shopfloor (Y=[532, 1068])
im_raw24 = Image.open(f'{raw_dir}/raw_24_WhatsApp_Image_2026-11-18_at_12.13.14.jpeg').crop((0, 532, 715, 1068))

# Direct photos:
im_raw01 = Image.open(f'{raw_dir}/raw_01_WhatsApp_Image_2026-11-20_at_12.20.30_1.jpeg')
im_raw02 = Image.open(f'{raw_dir}/raw_02_WhatsApp_Image_2026-11-20_at_12.20.30.jpeg').crop((0, 180, 758, 1430))
im_raw03 = Image.open(f'{raw_dir}/raw_03_WhatsApp_Image_2026-11-20_at_12.20.31_1.jpeg')
im_raw05 = Image.open(f'{raw_dir}/raw_05_WhatsApp_Image_2026-11-20_at_12.20.31.jpeg')
im_raw06 = Image.open(f'{raw_dir}/raw_06_WhatsApp_Image_2026-11-20_at_12.20.32_1.jpeg')
im_raw08 = Image.open(f'{raw_dir}/raw_08_WhatsApp_Image_2026-11-20_at_12.20.33_1.jpeg')
im_raw09 = Image.open(f'{raw_dir}/raw_09_WhatsApp_Image_2026-11-20_at_12.20.33_2.jpeg')
im_raw10 = Image.open(f'{raw_dir}/raw_10_WhatsApp_Image_2026-11-20_at_12.20.33.jpeg')
im_raw11 = Image.open(f'{raw_dir}/raw_11_WhatsApp_Image_2026-11-20_at_12.20.34_1.jpeg')
im_raw12 = Image.open(f'{raw_dir}/raw_12_WhatsApp_Image_2026-11-20_at_12.20.34_2.jpeg')
im_raw13 = Image.open(f'{raw_dir}/raw_13_WhatsApp_Image_2026-11-20_at_12.20.34.jpeg')
im_raw14 = Image.open(f'{raw_dir}/raw_14_WhatsApp_Image_2026-11-20_at_12.20.35.jpeg')

print('Writing Factory Images...')
os.makedirs('public/images/factory', exist_ok=True)
# Factory 1: NESSCO cup forming machine
make_wide(im_raw21).save('public/images/factory/factory-forming-machine.webp', 'WEBP', quality=92)
# Factory 2: Shopfloor overview
make_wide(im_raw24).save('public/images/factory/factory-shopfloor-overview.webp', 'WEBP', quality=92)
# Factory 3: Cup printing and die cutting
make_wide(im_raw23).save('public/images/factory/factory-die-cutting.webp', 'WEBP', quality=92)
# Factory 4: Machine specifications
make_wide(im_raw22).save('public/images/factory/factory-spec-sheet.webp', 'WEBP', quality=92)
# Also keep cleanroom & packaging
make_wide(im_raw21).save('public/images/factory/machine-paper-cup.webp', 'WEBP', quality=92)
make_wide(im_raw24).save('public/images/factory/cleanroom.webp', 'WEBP', quality=92)
make_wide(im_raw23).save('public/images/factory/die-cutting.webp', 'WEBP', quality=92)

print('Writing Product Images (1000x1000 WebP)...')
os.makedirs('public/images/products', exist_ok=True)

# 1. 250ml Paper Cup: from raw_23 (the printed eco cup design)
# Crop the top printed cup from raw_23
w23, h23 = im_raw23.size
cup_crop = im_raw23.crop((int(w23 * 0.5), 0, w23, int(h23 * 0.4)))
make_square_padded(cup_crop).save('public/images/products/paper-cup-250ml.webp', 'WEBP', quality=92)
make_square_padded(im_raw23).save('public/images/products/paper-cup-printed-designs.webp', 'WEBP', quality=92)

# 2. Candles:
make_square_cropped(im_raw17).save('public/images/products/candle-festive-modak.webp', 'WEBP', quality=92)
make_square_cropped(im_raw16).save('public/images/products/candle-ombre-peonies.webp', 'WEBP', quality=92)
make_square_padded(im_raw18).save('public/images/products/candle-floating-lotus.webp', 'WEBP', quality=92)
make_square_padded(im_raw19).save('public/images/products/candle-bubble-cubes.webp', 'WEBP', quality=92)
make_square_cropped(im_raw20).save('public/images/products/candle-garden-daisies.webp', 'WEBP', quality=92)
make_square_padded(im_raw01).save('public/images/products/candle-lavender-vanilla.webp', 'WEBP', quality=92)
make_square_cropped(im_raw09).save('public/images/products/candle-sandalwood.webp', 'WEBP', quality=92)
make_square_cropped(im_raw09).save('public/images/products/candle-rose-blossom.webp', 'WEBP', quality=92)
make_square_padded(im_raw06).save('public/images/products/candle-seashell-duo.webp', 'WEBP', quality=92)
make_square_padded(im_raw05).save('public/images/products/candle-sunflower-dish.webp', 'WEBP', quality=92)
make_square_padded(im_raw02).save('public/images/products/candle-couple-sculpture.webp', 'WEBP', quality=92)
make_square_cropped(im_raw10).save('public/images/products/candle-scalloped-dish.webp', 'WEBP', quality=92)
make_square_padded(im_raw15).save('public/images/products/candle-red-roses-dish.webp', 'WEBP', quality=92)
make_square_cropped(im_raw03).save('public/images/products/candle-soy-aromatherapy.webp', 'WEBP', quality=92)

# 3. Soaps:
make_square_padded(im_raw08).save('public/images/products/soap-neem-tulsi.webp', 'WEBP', quality=92)
make_square_cropped(im_raw13).save('public/images/products/soap-coffee-scrub.webp', 'WEBP', quality=92)
make_square_cropped(im_raw12).save('public/images/products/soap-shea-butter.webp', 'WEBP', quality=92)
make_square_padded(im_raw08).save('public/images/products/soap-charcoal.webp', 'WEBP', quality=92)

print('Writing Team & Hero Showcase Images...')
os.makedirs('public/images/team', exist_ok=True)
make_square_cropped(im_raw15, 1000).save('public/images/team/women-handcrafted-showcase.webp', 'WEBP', quality=92)
make_square_cropped(im_raw20, 1000).save('public/images/team/artisan-candle-making.webp', 'WEBP', quality=92)
make_square_cropped(im_raw14, 1000).save('public/images/team/founder-showcase.webp', 'WEBP', quality=92)
make_square_cropped(im_raw12, 1000).save('public/images/team/artisan-1.webp', 'WEBP', quality=92)
make_square_cropped(im_raw20, 1000).save('public/images/team/artisan-2.webp', 'WEBP', quality=92)
make_square_cropped(im_raw14, 1000).save('public/images/team/artisan-3.webp', 'WEBP', quality=92)

print('Writing Instagram Feed Images (1000x1000 WebP)...')
os.makedirs('public/images/instagram', exist_ok=True)
make_square_cropped(im_raw17, 1000).save('public/images/instagram/insta-1.webp', 'WEBP', quality=92)
make_square_cropped(im_raw19, 1000).save('public/images/instagram/insta-2.webp', 'WEBP', quality=92)
make_square_cropped(im_raw20, 1000).save('public/images/instagram/insta-3.webp', 'WEBP', quality=92)
make_square_cropped(im_raw16, 1000).save('public/images/instagram/insta-4.webp', 'WEBP', quality=92)
make_square_cropped(im_raw18, 1000).save('public/images/instagram/insta-5.webp', 'WEBP', quality=92)
make_square_cropped(im_raw05, 1000).save('public/images/instagram/insta-6.webp', 'WEBP', quality=92)

print('All images processed successfully!')
