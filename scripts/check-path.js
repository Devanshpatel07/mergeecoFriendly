// Next.js/webpack treat "#" in a file path as a URL fragment, which breaks
// module resolution (e.g. "Cannot find module './vendor-chunks/next.js'").
// Fail fast with a clear message instead of producing a broken build.
const cwd = process.cwd();
if (cwd.includes('#')) {
  console.error(
    '\n[check-path] The project folder path contains "#":\n  ' + cwd +
    '\nNext.js cannot build or run from such a path. Move the project to a folder\n' +
    'without "#" (e.g. E:/mergeecofriendly), delete node_modules and .next,\n' +
    'then run "npm install".\n'
  );
  process.exit(1);
}
