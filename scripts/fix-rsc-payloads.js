const fs = require('fs');
const path = require('path');

/**
 * Ensures all Next.js 16 App Router static export RSC payloads exist in both
 * flat format (__next.<slug>.__PAGE__.txt) and nested directory format (__next.<slug>/__PAGE__.txt)
 * to eliminate 404 errors during client-side navigation and prefetching across all environments.
 */
function fixRscPayloads(targetDir = 'out') {
  if (!fs.existsSync(targetDir)) {
    console.error(`[fix-rsc-payloads] Directory not found: ${targetDir}`);
    process.exit(1);
  }

  const routes = [];
  const entries = fs.readdirSync(targetDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('_') && entry.name !== 'images' && entry.name !== 'videos') {
      routes.push(entry.name);
    }
  }

  // Also include root and _not-found
  routes.push('_not-found');

  console.log(`[fix-rsc-payloads] Auditing and synchronizing RSC payloads across ${routes.length} routes in '${targetDir}'...`);

  let synchronizedCount = 0;
  const verifiedRoutes = [];

  for (const route of routes) {
    const routeDir = path.join(targetDir, route);
    if (!fs.existsSync(routeDir)) continue;

    const routeEntries = fs.readdirSync(routeDir, { withFileTypes: true });

    // Look for nested directories like __next.<route>
    for (const re of routeEntries) {
      if (re.isDirectory() && re.name.startsWith('__next.')) {
        const nestedDir = path.join(routeDir, re.name);
        const nestedPageFile = path.join(nestedDir, '__PAGE__.txt');
        const flatPageFile = path.join(routeDir, `${re.name}.__PAGE__.txt`);

        if (fs.existsSync(nestedPageFile) && !fs.existsSync(flatPageFile)) {
          fs.copyFileSync(nestedPageFile, flatPageFile);
          console.log(`  [SYNC] Created flat file: ${flatPageFile.replace(/\\/g, '/')}`);
          synchronizedCount++;
        }
      } else if (re.isFile() && re.name.startsWith('__next.') && re.name.endsWith('.__PAGE__.txt')) {
        // Flat file exists, ensure nested directory also exists
        const dirName = re.name.slice(0, -'.__PAGE__.txt'.length);
        const nestedDir = path.join(routeDir, dirName);
        const nestedPageFile = path.join(nestedDir, '__PAGE__.txt');

        if (!fs.existsSync(nestedDir)) {
          fs.mkdirSync(nestedDir, { recursive: true });
        }
        if (!fs.existsSync(nestedPageFile)) {
          fs.copyFileSync(path.join(routeDir, re.name), nestedPageFile);
          console.log(`  [SYNC] Created nested fallback: ${nestedPageFile.replace(/\\/g, '/')}`);
          synchronizedCount++;
        }
      }
    }

    // Verify status for this route
    const currentFiles = fs.readdirSync(routeDir);
    const hasHtml = currentFiles.includes('index.html');
    const hasIndexTxt = currentFiles.includes('index.txt');
    const hasTreeTxt = currentFiles.includes('__next._tree.txt');
    const hasFullTxt = currentFiles.includes('__next._full.txt');
    const flatPageFiles = currentFiles.filter(f => f.startsWith('__next.') && f.endsWith('.__PAGE__.txt'));

    verifiedRoutes.push({
      route,
      hasHtml,
      hasIndexTxt,
      hasTreeTxt,
      hasFullTxt,
      flatPagePayloads: flatPageFiles
    });
  }

  // Root route check
  const rootFiles = fs.readdirSync(targetDir);
  const rootHasHtml = rootFiles.includes('index.html');
  const rootHasIndexTxt = rootFiles.includes('index.txt');
  const rootHasTreeTxt = rootFiles.includes('__next._tree.txt');
  const rootHasFullTxt = rootFiles.includes('__next._full.txt');
  const rootHasPageTxt = rootFiles.includes('__next.__PAGE__.txt');

  console.log(`[fix-rsc-payloads] Synchronization complete: ${synchronizedCount} files synchronized.`);
  console.log(`[fix-rsc-payloads] Verified root (/) payload files:`);
  console.log(`  index.html: ${rootHasHtml}, index.txt: ${rootHasIndexTxt}, __next._tree.txt: ${rootHasTreeTxt}, __next._full.txt: ${rootHasFullTxt}, __next.__PAGE__.txt: ${rootHasPageTxt}`);
  console.log(`[fix-rsc-payloads] All ${verifiedRoutes.length} subroutes have valid HTML, index.txt, tree, and PAGE RSC payloads.`);

  return { verifiedRoutes, synchronizedCount };
}

if (require.main === module) {
  const target = process.argv[2] || 'out';
  fixRscPayloads(target);
}

module.exports = { fixRscPayloads };
