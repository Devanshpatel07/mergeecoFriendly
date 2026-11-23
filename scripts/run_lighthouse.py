import os
import sys
import time
import json
import subprocess

PORT = 3088
BASE_URL = f'http://127.0.0.1:{PORT}'
EDGE_PATH = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

os.environ['CHROME_PATH'] = EDGE_PATH

print('Starting Next.js server on port 3088...')
proc = subprocess.Popen(
    ['node', './node_modules/next/dist/bin/next', 'start', '-p', str(PORT), '-H', '127.0.0.1'],
    cwd=os.path.abspath('.'),
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)
time.sleep(3)

report_json = os.path.abspath('public/lighthouse-report.json')

cmd = f'npx --yes lighthouse {BASE_URL}/en --chrome-flags="--headless --no-sandbox --disable-gpu" --output=json --output-path="{report_json}" --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --screenEmulation.mobile=true'

print('Running Lighthouse audit...')
try:
    res = subprocess.run(cmd, shell=True, timeout=180)
    print('Lighthouse exit code:', res.returncode)
    if os.path.exists(report_json):
        with open(report_json, 'r', encoding='utf-8') as f:
            data = json.load(f)
        categories = data.get('categories', {})
        perf = int(categories.get('performance', {}).get('score', 0) * 100)
        a11y = int(categories.get('accessibility', {}).get('score', 0) * 100)
        bp = int(categories.get('best-practices', {}).get('score', 0) * 100)
        seo = int(categories.get('seo', {}).get('score', 0) * 100)
        print(f'\n========================================')
        print(f'LIGHTHOUSE MOBILE SCORES:')
        print(f'Performance:    {perf}/100')
        print(f'Accessibility:  {a11y}/100')
        print(f'Best Practices: {bp}/100')
        print(f'SEO:            {seo}/100')
        print(f'========================================\n')
except Exception as e:
    print('Lighthouse error:', e)
finally:
    proc.terminate()
    try:
        proc.wait(timeout=5)
    except:
        proc.kill()
