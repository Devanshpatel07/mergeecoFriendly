import zipfile
import os
from PIL import Image

out_dir = os.path.abspath('public/images/uploaded_raw')
os.makedirs(out_dir, exist_ok=True)

zips = [
    r'C:/Users/HP/.gemini/antigravity/brain/2389d486-1099-4854-be5a-b2fe3ce5f615/.user_uploaded/media_1795441119713_e2c9ea52.zip',
    r'C:/Users/HP/.gemini/antigravity/brain/2389d486-1099-4854-be5a-b2fe3ce5f615/.user_uploaded/media_1795441131800_35941744.zip',
    r'C:/Users/HP/.gemini/antigravity/brain/2389d486-1099-4854-be5a-b2fe3ce5f615/.user_uploaded/media_1795441131902_7fca9784.zip'
]

idx = 1
extracted = []
for zpath in zips:
    with zipfile.ZipFile(zpath, 'r') as z:
        for fname in sorted(z.namelist()):
            data = z.read(fname)
            base = os.path.basename(fname).replace(' ', '_').replace('(', '').replace(')', '')
            target_name = f'raw_{idx:02d}_{base}'
            target_path = os.path.join(out_dir, target_name)
            with open(target_path, 'wb') as f:
                f.write(data)
            try:
                with Image.open(target_path) as im:
                    print(f'{target_name}: {im.size} {im.format} ({len(data)} bytes)')
                    extracted.append((target_name, target_path, im.size, im.format))
            except Exception as e:
                print(f'{target_name}: error {e}')
            idx += 1

print(f'\nTotal extracted images: {len(extracted)}')
