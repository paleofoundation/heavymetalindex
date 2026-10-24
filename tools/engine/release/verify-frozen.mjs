// Frozen-release verifier for any page family (tools/verify-frozen-release.mjs covers
// ingredient-only scopes). Every file in public/ must match the manifest hash, nothing
// may be added, and every shipped page plus index.html and sitemap.xml must be present.
//
//   node tools/engine/release/verify-frozen.mjs <manifest> [publicRoot]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const manifest = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')), publicRoot = process.argv[3] ?? 'public';
const pages = manifest.pages ?? manifest.scope.map(s => `ingredients/${s}`);
if (!Array.isArray(pages) || pages.some(p => !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(p))) throw Error('Invalid frozen release scope');
for (const [name, expected] of Object.entries(manifest.files)) {
  if (path.isAbsolute(name) || name.split('/').includes('..')) throw Error('Invalid release artifact path');
  if (crypto.createHash('sha256').update(fs.readFileSync(path.join(publicRoot, name))).digest('hex') !== expected) throw Error('Frozen release drift: ' + name);
}
for (const name of ['index.html', 'sitemap.xml', ...pages.map(p => `${p}.html`)]) if (!manifest.files[name]) throw Error('Missing required release page: ' + name);
(function walk(dir) {
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f); else if (e.isFile() && !manifest.files[path.relative(publicRoot, f).split(path.sep).join('/')]) throw Error('Unverified extra release artifact: ' + f);
  }
})(publicRoot);
console.log(`Verified frozen public release: ${Object.keys(manifest.files).length} files; ${pages.length} pages`);
