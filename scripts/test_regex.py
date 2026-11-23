import re

# Original webpack regex:
# const ae=/^((?:\0.|[^?#\0])*)(\?(?:\0.|[^#\0])*)?(#.*)?$/;

test_path = r'E:\C#\mergeecofriendly\node_modules\next\dist\client\link.js'

orig_ae = re.compile(r'^((?:\0.|[^?#\0])*)(\?(?:\0.|[^#\0])*)?(#.*)?$')
m1 = orig_ae.match(test_path)
print('Original regex match:')
print('  Path:', m1.group(1))
print('  Query:', m1.group(2))
print('  Fragment:', m1.group(3))

# Fixed regex where # followed by \ or / is treated as part of the path:
fixed_ae = re.compile(r'^((?:\0.|#(?:[\\/])|[^?#\0])*)(\?(?:\0.|#(?:[\\/])|[^#\0])*)?(#.*)?$')
m2 = fixed_ae.match(test_path)
print('\nFixed regex match:')
print('  Path:', m2.group(1))
print('  Query:', m2.group(2))
print('  Fragment:', m2.group(3))

# Test with query string:
test_with_query = r'E:\C#\mergeecofriendly\app\icon.png?__next_metadata__'
m3 = fixed_ae.match(test_with_query)
print('\nFixed with query:')
print('  Path:', m3.group(1))
print('  Query:', m3.group(2))
print('  Fragment:', m3.group(3))
