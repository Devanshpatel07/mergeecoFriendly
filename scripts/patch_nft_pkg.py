file_path = './node_modules/next/dist/compiled/@vercel/nft/index.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Sanitize e in realpath and emitFile
content = content.replace('async realpath(e,t,r=new Set){', 'async realpath(e,t,r=new Set){if(typeof e==="string")e=e.replace(/\\0/g,"");')
content = content.replace('async emitFile(e,t,r,s=false){', 'async emitFile(e,t,r,s=false){if(typeof e==="string")e=e.replace(/\\0/g,"");')
content = content.replace('async readlink(e){', 'async readlink(e){if(typeof e==="string")e=e.replace(/\\0/g,"");')
content = content.replace('async stat(e){', 'async stat(e){if(typeof e==="string")e=e.replace(/\\0/g,"");')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('@vercel/nft/index.js patch applied successfully!')
