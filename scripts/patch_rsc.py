import os

# 1. Patch flight-manifest-plugin.js
for path in [
    './node_modules/next/dist/build/webpack/plugins/flight-manifest-plugin.js',
    './node_modules/next/dist/esm/build/webpack/plugins/flight-manifest-plugin.js'
]:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # In addClientReference()
    target = 'function addClientReference() {\n                    const exportName = resource;'
    replacement = '''function addClientReference() {
                    if (typeof resource === "string") resource = resource.replace(/\\0/g, "");
                    const exportName = resource;'''
    if target in content:
        content = content.replace(target, replacement)
        print(f'Patched addClientReference in {path}')
    
    # Store multiple aliases in manifest.clientModules
    target_store = 'manifest.clientModules[exportName] = {\n                        id: modId,'
    replacement_store = '''const cleanRes = exportName.replace(/\\0/g, "");
                    manifest.clientModules[cleanRes] = {
                        id: modId,'''
    if target_store in content:
        content = content.replace(target_store, replacement_store)
        print(f'Patched manifest.clientModules store in {path}')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# 2. Patch app-page.runtime.prod.js
runtime_path = './node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js'
if os.path.exists(runtime_path):
    with open(runtime_path, 'r', encoding='utf-8') as f:
        rt = f.read()

    # Client manifest lookup fallback:
    # `u=s[l.slice(0,c)]` -> `u=s[l.slice(0,c)]||s[l.slice(0,c).replace(/\0/g,"")]||s[l.slice(0,c).replace(/C#/g,"C\u0000#")]`
    target_client_1 = 'u=s[l.slice(0,c)]'
    repl_client_1 = 'u=s[l.slice(0,c)]||s[l.slice(0,c).replace(/\\0/g,"")]||s[l.slice(0,c).replace(/C#/g,"C\\u0000#")]'
    if target_client_1 in rt:
        rt = rt.replace(target_client_1, repl_client_1)
        print('Patched target_client_1 in runtime')

    target_client_2 = 'c=s[u.slice(0,d)]'
    repl_client_2 = 'c=s[u.slice(0,d)]||s[u.slice(0,d).replace(/\\0/g,"")]||s[u.slice(0,d).replace(/C#/g,"C\\u0000#")]'
    if target_client_2 in rt:
        rt = rt.replace(target_client_2, repl_client_2)
        print('Patched target_client_2 in runtime')

    # SSR manifest lookup fallback:
    # `var r=e[t[0]];` -> `var r=e[t[0]]||e[t[0].replace(/\0/g,"")]||e[t[0].replace(/C#/g,"C\u0000#")];`
    target_ssr = 'var r=e[t[0]];'
    repl_ssr = 'var r=e[t[0]]||e[t[0].replace(/\\0/g,"")]||e[t[0].replace(/C#/g,"C\\u0000#")];'
    if target_ssr in rt:
        rt = rt.replace(target_ssr, repl_ssr)
        print('Patched target_ssr in runtime')

    with open(runtime_path, 'w', encoding='utf-8') as f:
        f.write(rt)

print('RSC manifest patch complete!')
