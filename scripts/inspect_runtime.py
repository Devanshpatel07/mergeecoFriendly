with open('./node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'in the React Client Manifest', text)]
print('Matches:', matches)
for m in matches:
    print(text[m-250:m+250])
