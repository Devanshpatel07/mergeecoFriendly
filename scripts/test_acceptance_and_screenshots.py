import os
import sys
import time
import json
import tempfile
import urllib.request
import subprocess

PORT = 3088
BASE_URL = f'http://127.0.0.1:{PORT}'
BROWSER = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
SCREENSHOT_DIR = os.path.abspath('public/screenshots')
os.makedirs(SCREENSHOT_DIR, exist_ok=True)
tmp_user_dir = tempfile.mkdtemp()

print(f'Starting Next.js production server on {BASE_URL}...')
proc = subprocess.Popen(['node', './node_modules/next/dist/bin/next', 'start', '-p', str(PORT), '-H', '127.0.0.1'],
                        stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

time.sleep(3)

print('\n--- 1. Testing Pages & Subpaths ---')
routes_to_test = [
    ('/en', ['Merge Eco-Friendly', '250 ml Paper Cup', 'Order on WhatsApp', 'Order on Instagram', 'Made by the Women of Bhopal', 'Shop No. 362 B, E8, Trilanga']),
    ('/hi', ['मर्ज इको-फ्रेंडली', '250 मिली पेपर कप', 'भोपाल की महिलाओं द्वारा निर्मित']),
    ('/en/products', ['Product Catalog', 'Paper Cups', 'Handmade Soaps', 'Handmade Candles']),
    ('/hi/products', ['उत्पाद', '250 मिली फूड-ग्रेड पेपर कप']),
    ('/en/products/250ml-paper-cup', ['250 ml Food-Grade Paper Cup', 'True Size Visual Guide', '92 mm Height', 'Technical Specifications', 'Master Carton of 1,000']),
    ('/en/products/coffee-scrub-handmade-soap', ['Artisanal Coffee Scrub Natural Soap', 'Pure Cold-Pressed Coconut Oil', '₹149']),
    ('/en/products/festive-modak-candles-set', ['Fluted Festive Modak Candles', '₹299']),
    ('/en/about', ['About Us', 'Women-Led', 'Bhopal', 'Trilanga']),
    ('/en/factory', ['Our Factory', 'Automatic Paper Cup Machine', '4-Stage Manufacturing Process']),
    ('/en/contact', ['Contact Us', '+91 93037 44922', 'mergeecofriendlypvt@gmail.com', 'Request a Quote']),
    ('/en/privacy', ['Privacy Policy', 'Digital Personal Data Protection Act, 2023']),
    ('/en/terms', ['Terms &amp; Conditions', 'Bhopal, Madhya Pradesh']),
    ('/sitemap.xml', ['<loc>https://mergeecofriendlypvtltd.com/en</loc>']),
    ('/robots.txt', ['user-agent: *', 'sitemap: https://mergeecofriendlypvtltd.com/sitemap.xml']),
]

for url_path, snippets in routes_to_test:
    url = f'{BASE_URL}{url_path}'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=5)
        html = res.read().decode('utf-8')
        all_found = all(s in html for s in snippets)
        print(f'[{res.status}] {url_path} - {"PASS" if all_found else "MISSING CONTENT"}')
    except Exception as e:
        print(f'[FAIL] {url_path} - Error: {e}')

print('\n--- 2. Testing API Route (/api/quote) ---')
try:
    payload = json.dumps({
        'name': 'Rajesh Malviya',
        'businessName': 'Bhopal Catering Network',
        'phone': '9303744922',
        'category': 'Paper Cups',
        'quantityRange': '5,000 - 20,000 units',
        'message': 'Need quotation for 10,000 250ml cups with delivery in Bhopal.',
        'honeypot': ''
    }).encode('utf-8')
    api_req = urllib.request.Request(f'{BASE_URL}/api/quote', data=payload, headers={'Content-Type': 'application/json'}, method='POST')
    api_res = urllib.request.urlopen(api_req, timeout=5)
    api_data = json.loads(api_res.read().decode('utf-8'))
    print(f'API Route Status: {api_res.status}, Response: {api_data}')
except Exception as e:
    print('API Route Test Failed:', e)

print('\n--- 3. Capturing Headless Screenshots (360px, 768px, 1280px) ---')
viewports = [
    (360, 800, '360'),
    (768, 1024, '768'),
    (1280, 900, '1280')
]

pages_to_screenshot = [
    (f'{BASE_URL}/en', 'home'),
    (f'{BASE_URL}/en/products', 'products'),
    (f'{BASE_URL}/en/products/250ml-paper-cup', 'product-detail'),
    (f'{BASE_URL}/en/contact', 'contact')
]

for url, name in pages_to_screenshot:
    for w, h, vp_label in viewports:
        out_file = os.path.join(SCREENSHOT_DIR, f'{name}-{vp_label}.png')
        cmd = [
            BROWSER,
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-software-rasterizer',
            f'--user-data-dir={tmp_user_dir}',
            f'--window-size={w},{h}',
            f'--screenshot={out_file}',
            url
        ]
        try:
            res = subprocess.run(cmd, capture_output=True, timeout=12)
            if os.path.exists(out_file) and os.path.getsize(out_file) > 1000:
                print(f'Captured screenshot: {name}-{vp_label}.png ({w}px, {os.path.getsize(out_file)} bytes)')
            else:
                print(f'Screenshot failed: {name}-{vp_label}.png')
        except Exception as e:
            print(f'Failed to capture {name}-{vp_label}:', e)

# Clean shutdown
print('\nShutting down server...')
proc.terminate()
try:
    proc.wait(timeout=5)
except:
    proc.kill()

print('Acceptance testing script complete!')
