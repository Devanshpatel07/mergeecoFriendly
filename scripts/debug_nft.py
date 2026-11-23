with open('./node_modules/next/dist/compiled/webpack/bundle5.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'parseResource', text)]
print('parseResource matches in bundle5:', matches)
for m in matches:
    print(text[m-50:m+250])
