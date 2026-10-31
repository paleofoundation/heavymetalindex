// The Fish and Cocoa review entrypoints restored on the parity branch must load: each named
// relative import resolves to an export. The primary multi-food index scanner that the
// source universe spawns must be in the checkout.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ingredients = path.join(here, 'contracts/ingredients');

const ENTRYPOINTS = ['fish/accept-source-review.mjs', 'fish/propose-source-corrections.mjs', 'fish/browser-review.mjs', 'fish/source-navigation.mjs',
  'fish/supplemental-browser.mjs', 'cocoa/source-review-acceptance.mjs', 'cocoa/browser-review.mjs'].map(f => path.join(ingredients, f));
function exportsOf(file) {
  const src = fs.readFileSync(file, 'utf8');
  if (/export\s*\*/.test(src)) return null; // re-exports everything: not checked statically
  const names = new Set([...src.matchAll(/export\s+(?:async\s+)?(?:const|let|var|function\*?|class)\s+([A-Za-z_$][\w$]*)/g)].map(m => m[1]));
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) for (const part of m[1].split(',')) { const n = part.trim().split(/\s+as\s+/).pop(); if (n) names.add(n); }
  return names;
}

test('Fish and Cocoa review entrypoints import only names their build modules export', () => {
  const missing = [];
  for (const file of ENTRYPOINTS) {
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(/import\s*\{([^}]*)\}\s*from\s*'(\.{1,2}\/[^']+\.mjs)'/g)) {
      const target = path.resolve(path.dirname(file), m[2]);
      if (!fs.existsSync(target)) { missing.push(`${path.relative(here, file)}: ${m[2]} does not exist`); continue; }
      const names = exportsOf(target);
      if (!names) continue;
      for (const part of m[1].split(',')) { const n = part.trim().split(/\s+as\s+/)[0]; if (n && !names.has(n)) missing.push(`${path.relative(here, file)}: ${n} is not exported by ${m[2]}`); }
    }
  }
  assert.deepEqual(missing, []);
});

test('the primary multi-food index scanner is present and returns matched rows', () => {
  const scanner = path.join(here, 'scan-primary-food-indexes.py');
  assert.ok(fs.existsSync(scanner), 'tools/scan-primary-food-indexes.py is missing');
  const dir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TMPDIR ?? '/tmp'), 'scan-'));
  const csv = path.join(dir, 'index.csv');
  fs.writeFileSync(csv, 'source_id,food,analyte,value\nx,Rice white,Pb,10\nx,Bread,Pb,5\n');
  const run = spawnSync('python3', [scanner], {input: JSON.stringify({files: [{path: 'raw/index.csv', physical_path: csv, source_id: 'x', root_used: dir}], aliases: {rice: ['rice']}}), encoding: 'utf8'});
  assert.equal(run.status, 0, run.stderr);
  const rows = run.stdout.split('\n').filter(Boolean).map(l => JSON.parse(l)).filter(r => r.type === 'row');
  assert.deepEqual(rows.map(r => r.item.matched_ingredients), [['rice']]);
});
