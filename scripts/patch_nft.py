import re

file_path = './node_modules/next/dist/build/webpack/plugins/next-trace-entrypoints-plugin.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Clean entriesToTrace
# replace `const entriesToTrace = [ ...entryPaths ];`
old_entries = 'const entriesToTrace = [\n                    ...entryPaths\n                ];'
new_entries = 'const entriesToTrace = [\n                    ...entryPaths\n                ].map(p => typeof p === "string" ? p.replace(/\\0/g, "") : p);'
if old_entries in content:
    content = content.replace(old_entries, new_entries)
    print('Patched entriesToTrace')
else:
    print('old_entries not found, searching with regex')
    content = re.sub(r'const entriesToTrace\s*=\s*\[\s*\.\.\.entryPaths\s*\];', 'const entriesToTrace = [...entryPaths].map(p => typeof p === "string" ? p.replace(/\\0/g, "") : p);', content)
    print('Patched entriesToTrace via regex')

# 2. Patch readlink and stat and readFile
old_readlink = 'const readlink = async (path)=>{'
new_readlink = 'const readlink = async (path)=>{ if (typeof path === "string") path = path.replace(/\\0/g, "");'
content = content.replace(old_readlink, new_readlink)

old_stat = 'const stat = async (path)=>{'
new_stat = 'const stat = async (path)=>{ if (typeof path === "string") path = path.replace(/\\0/g, "");'
content = content.replace(old_stat, new_stat)

old_readFile = 'const readFile = async (path)=>{'
new_readFile = 'const readFile = async (path)=>{ if (typeof path === "string") path = path.replace(/\\0/g, "");'
content = content.replace(old_readFile, new_readFile)

# Also patch Job.realpath in @vercel/nft if needed
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('next-trace-entrypoints-plugin.js patch applied successfully!')
