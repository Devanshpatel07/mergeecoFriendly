import os, re

def search_files(dir_path):
    for root, dirs, files in os.walk(dir_path):
        for f in files:
            if f.endswith('.js') and not 'compiled' in root:
                p = os.path.join(root, f)
                try:
                    with open(p, 'r', encoding='utf-8') as file:
                        c = file.read()
                        if 'clientModules' in c and 'ssrModuleMapping' in c:
                            print('Found manifest writer:', p)
                except:
                    pass

search_files('./node_modules/next/dist')
