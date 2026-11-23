file_path = './node_modules/next/dist/compiled/webpack/bundle5.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

target = 'const ae=/^((?:\\0.|[^?#\\0])*)(\\?(?:\\0.|[^#\\0])*)?(#.*)?$/;'
replacement = 'const ae=/^((?:\\0.|#(?:[\\\\/])|[^?#\\0])*)(\\?(?:\\0.|#(?:[\\\\/])|[^#\\0])*)?(#.*)?$/;'

if target in text:
    text = text.replace(target, replacement)
    print('Found and replaced target in bundle5.js!')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(text)
else:
    print('Target not found in bundle5.js!')
