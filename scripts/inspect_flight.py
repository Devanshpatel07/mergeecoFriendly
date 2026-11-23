with open('./node_modules/next/dist/build/webpack/plugins/flight-manifest-plugin.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function addClientReference()')
print(text[idx-800:idx])
