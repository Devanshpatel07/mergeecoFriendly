import os
import shutil
from PIL import Image, ImageDraw, ImageOps

logo_src = r'C:/Users/HP/.gemini/antigravity/brain/2389d486-1099-4854-be5a-b2fe3ce5f615/.user_uploaded/media_1795432119783_30ad9bfc.jpg'
out_dir = r'e:\C#\mergeecofriendly\public\images\logo'
os.makedirs(out_dir, exist_ok=True)
os.makedirs(r'e:\C#\mergeecofriendly\app', exist_ok=True)
os.makedirs(r'e:\C#\mergeecofriendly\public', exist_ok=True)

shutil.copy(logo_src, os.path.join(out_dir, 'logo-original.jpg'))

# Open and resize rasters
img = Image.open(logo_src).convert('RGBA')
img.save(os.path.join(out_dir, 'logo-square.png'), 'PNG')
img.save(os.path.join(out_dir, 'logo-square.webp'), 'WEBP', quality=95)

# App icon and apple icon
icon_512 = img.resize((512, 512), Image.Resampling.LANCZOS)
icon_512.save(r'e:\C#\mergeecofriendly\app\icon.png', 'PNG')
icon_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
icon_180.save(r'e:\C#\mergeecofriendly\app\apple-icon.png', 'PNG')
icon_512.save(os.path.join(out_dir, 'logo-512.png'), 'PNG')
icon_180.save(os.path.join(out_dir, 'logo-180.png'), 'PNG')

# Favicon png & ico
fav_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
fav_32.save(r'e:\C#\mergeecofriendly\public\favicon.png', 'PNG')
fav_32.save(os.path.join(out_dir, 'favicon.png'), 'PNG')
img.save(r'e:\C#\mergeecofriendly\public\favicon.ico', format='ICO', sizes=[(16,16), (32,32), (48,48)])
img.save(os.path.join(out_dir, 'favicon.ico'), format='ICO', sizes=[(16,16), (32,32), (48,48)])

# Create Vector SVGs:
square_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <path id="mergeTextTop" d="M 85,250 A 165,165 0 0,1 415,250" fill="none" />
    <path id="mergeTextBottom" d="M 415,250 A 165,165 0 0,1 85,250" fill="none" />
    <linearGradient id="goldLg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5B25D" />
      <stop offset="50%" stop-color="#D49B44" />
      <stop offset="100%" stop-color="#B57C26" />
    </linearGradient>
  </defs>

  <circle cx="250" cy="250" r="240" fill="#1B2E21" stroke="url(#goldLg)" stroke-width="12" />
  <circle cx="250" cy="250" r="222" fill="none" stroke="url(#goldLg)" stroke-width="3" stroke-dasharray="4 4" />
  <circle cx="250" cy="250" r="185" fill="none" stroke="url(#goldLg)" stroke-width="4" />

  <text font-family="'Playfair Display', Georgia, serif" font-size="46" font-weight="900" fill="url(#goldLg)" letter-spacing="12">
    <textPath href="#mergeTextTop" startOffset="50%" text-anchor="middle">MERGE</textPath>
  </text>

  <text font-family="'Poppins', Arial, sans-serif" font-size="21" font-weight="800" fill="url(#goldLg)" letter-spacing="6">
    <textPath href="#mergeTextBottom" startOffset="50%" text-anchor="middle">ECO-FRIENDLY PVT. LTD.</textPath>
  </text>

  <g transform="translate(0, 10)" stroke="url(#goldLg)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="250" cy="345" rx="105" ry="18" stroke-width="6" fill="#223829" />
    <path d="M 185,190 L 198,335 C 198,340 235,344 250,344 C 265,344 282,340 282,335 L 295,190 Z" stroke-width="8" fill="#1B2E21" />
    <ellipse cx="240" cy="190" rx="55" ry="12" stroke-width="8" fill="#223829" />
    <path d="M 195,200 C 215,208 265,208 285,200" stroke-width="4" stroke-dasharray="3 3" />
    <rect x="235" y="270" width="125" height="65" rx="28" ry="28" stroke-width="8" fill="#2A4533" />
    <path d="M 265,310 Q 295,290 325,292 Q 305,318 265,310 Z" fill="url(#goldLg)" stroke="none" />
    <path d="M 265,310 Q 295,302 325,292" stroke="#1B2E21" stroke-width="2.5" />
    <circle cx="325" cy="225" r="14" stroke-width="5" />
    <circle cx="350" cy="250" r="9" stroke-width="4" />
    <circle cx="305" cy="245" r="6" stroke-width="3" />
  </g>

  <g transform="translate(100, 260) rotate(-15)" fill="url(#goldLg)">
    <path d="M 0,25 C -5,0 -15,-20 -25,-35 C -15,-25 0,-10 0,25 Z" />
    <path d="M -8,-5 C -25,-12 -38,-15 -48,-12 C -38,-5 -22,2 -8,-5 Z" />
    <path d="M -15,-25 C -32,-35 -45,-38 -52,-32 C -42,-25 -28,-18 -15,-25 Z" />
    <circle cx="-25" cy="52" r="5" />
  </g>
  <g transform="translate(400, 260) scale(-1, 1) rotate(-15)" fill="url(#goldLg)">
    <path d="M 0,25 C -5,0 -15,-20 -25,-35 C -15,-25 0,-10 0,25 Z" />
    <path d="M -8,-5 C -25,-12 -38,-15 -48,-12 C -38,-5 -22,2 -8,-5 Z" />
    <path d="M -15,-25 C -32,-35 -45,-38 -52,-32 C -42,-25 -28,-18 -15,-25 Z" />
    <circle cx="-25" cy="52" r="5" />
  </g>
</svg>"""

with open(os.path.join(out_dir, 'logo-square.svg'), 'w', encoding='utf-8') as f:
    f.write(square_svg)

# 2. logo-white.svg (Transparent crisp background for dark sections)
white_svg = square_svg.replace('fill="#1B2E21"', 'fill="transparent"').replace('fill="#223829"', 'fill="rgba(255,255,255,0.06)"').replace('fill="#2A4533"', 'fill="rgba(255,255,255,0.1)"')
with open(os.path.join(out_dir, 'logo-white.svg'), 'w', encoding='utf-8') as f:
    f.write(white_svg)

# 3. logo-horizontal.svg (Horizontal brand lockup)
horizontal_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 90" width="100%" height="100%">
  <defs>
    <linearGradient id="goldH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D49B44" />
      <stop offset="100%" stop-color="#A56E1F" />
    </linearGradient>
  </defs>

  <!-- Left Emblem (Scaled) -->
  <g transform="translate(4, 5) scale(0.16)">
    <circle cx="250" cy="250" r="240" fill="#2F5D3A" stroke="#D49B44" stroke-width="12" />
    <circle cx="250" cy="250" r="222" fill="none" stroke="#D49B44" stroke-width="3" stroke-dasharray="4 4" />
    <circle cx="250" cy="250" r="185" fill="none" stroke="#D49B44" stroke-width="4" />
    <path d="M 185,190 L 198,335 C 198,340 235,344 250,344 C 265,344 282,340 282,335 L 295,190 Z" stroke="#D49B44" stroke-width="10" fill="#223829" />
    <rect x="235" y="270" width="125" height="65" rx="28" stroke="#D49B44" stroke-width="10" fill="#1B2E21" />
    <path d="M 265,310 Q 295,290 325,292 Q 305,318 265,310 Z" fill="#D49B44" />
    <circle cx="325" cy="225" r="14" stroke="#D49B44" stroke-width="6" fill="none" />
  </g>

  <!-- Brand Typography -->
  <text x="100" y="38" font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="900" fill="#2F5D3A" letter-spacing="1">MERGE</text>
  <text x="215" y="38" font-family="'Poppins', sans-serif" font-size="16" font-weight="700" fill="#7BAE5A" letter-spacing="2">ECO-FRIENDLY</text>
  <text x="375" y="38" font-family="'Poppins', sans-serif" font-size="11" font-weight="600" fill="#C9703F" letter-spacing="1">PVT. LTD.</text>

  <line x1="100" y1="50" x2="520" y2="50" stroke="#E5DEC9" stroke-width="1.5" />
  <circle cx="270" cy="50" r="3" fill="#C9703F" />

  <text x="100" y="70" font-family="'Poppins', sans-serif" font-size="12" font-weight="500" fill="#5A5A5A" letter-spacing="0.5">Sustainable Choices, Greener Future</text>
  <text x="390" y="70" font-family="'Poppins', sans-serif" font-size="10" font-weight="600" fill="#2F5D3A" letter-spacing="1">• BHOPAL, INDIA</text>
</svg>"""

with open(os.path.join(out_dir, 'logo-horizontal.svg'), 'w', encoding='utf-8') as f:
    f.write(horizontal_svg)

# 4. favicon.svg
fav_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30" fill="#2F5D3A" stroke="#D49B44" stroke-width="3" />
  <path d="M 20,24 L 24,48 C 24,50 30,51 32,51 C 34,51 40,50 40,48 L 44,24 Z" fill="#1B2E21" stroke="#D49B44" stroke-width="2" />
  <rect x="28" y="36" width="22" height="13" rx="6" fill="#2F5D3A" stroke="#D49B44" stroke-width="2" />
  <path d="M 33,43 Q 38,39 44,40" stroke="#D49B44" stroke-width="1.5" fill="none" />
  <circle cx="43" cy="30" r="3" stroke="#D49B44" stroke-width="1.5" fill="none" />
</svg>"""

with open(os.path.join(out_dir, 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(fav_svg)
with open(r'e:\C#\mergeecofriendly\public\favicon.svg', 'w', encoding='utf-8') as f:
    f.write(fav_svg)

print('All logo files and icons generated successfully.')
