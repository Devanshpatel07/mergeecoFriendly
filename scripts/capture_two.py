import os, subprocess, time, tempfile

PORT = 3088
BASE_URL = f'http://127.0.0.1:{PORT}'
BROWSER = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
SCREENSHOT_DIR = os.path.abspath('public/screenshots')

proc = subprocess.Popen(['node', './node_modules/next/dist/bin/next', 'start', '-p', str(PORT), '-H', '127.0.0.1'])
time.sleep(3)

items = [
    (f'{BASE_URL}/en', 'home', 768, 1024),
    (f'{BASE_URL}/en/products', 'products', 360, 800),
]

for url, name, w, h in items:
    tmp_dir = tempfile.mkdtemp()
    out_file = os.path.join(SCREENSHOT_DIR, f'{name}-{w}.png')
    cmd = [
        BROWSER,
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-software-rasterizer',
        f'--user-data-dir={tmp_dir}',
        f'--window-size={w},{h}',
        f'--screenshot={out_file}',
        url
    ]
    try:
        subprocess.run(cmd, timeout=30)
        if os.path.exists(out_file) and os.path.getsize(out_file) > 1000:
            print(f'Captured {name}-{w}.png ({os.path.getsize(out_file)} bytes)')
        else:
            print(f'Failed {name}-{w}.png')
    except Exception as e:
        print(f'Error {name}-{w}:', e)

proc.terminate()
try:
    proc.wait(timeout=5)
except:
    proc.kill()
