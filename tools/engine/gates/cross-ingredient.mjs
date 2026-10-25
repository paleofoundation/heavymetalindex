// Release lint (HMI-CROSS-INGREDIENT-1, 25 Oct 2026): a page about one food carries only that
// food's own mitigation evidence. It fails any ingredient or product page whose built HTML holds
//   - a control row (data-control-id) that does not belong to the page's own slug, or
//   - a control sentence labeled "(evidence from X)" where X is another food.
// Borrowed rows were added by the old food-group join in tools/engine/page/controls.mjs.
//
//   node tools/engine/gates/cross-ingredient.mjs <public dir> [--json <report>]
import fs from 'node:fs';
import path from 'node:path';

const [dir = 'public', ...rest] = process.argv.slice(2);
const report = rest[0] === '--json' ? rest[1] : null;
const conflict = name => / 2(\.|$)/.test(name);

export function borrowedItems(slug, html) {
  const own = `${slug}-`, label = slug.replace(/-/g, ' '), from = {};
  const add = (origin, id) => { (from[origin] ??= new Set()).add(id); };
  for (const [, id] of html.matchAll(/data-control-id="([^"]+)"/g)) {
    if (id.startsWith(own)) continue;
    // Borrowed ids are `${originSlug}-${record id}`; record ids start with the origin slug again.
    const doubled = id.match(/^([a-z0-9-]+?)-\1-/);
    add(doubled ? doubled[1] : id.split('-')[0], id);
  }
  for (const [, origin] of html.matchAll(/\(evidence from ([a-z0-9 ]+)\)/g)) {
    if (origin !== label) add(origin.replace(/ /g, '-'), `label:${origin}`);
  }
  return Object.fromEntries(Object.entries(from).map(([k, v]) => [k, [...v]]));
}

function main() {
  const failures = [];
  for (const family of ['ingredients', 'products']) {
    const d = path.join(dir, family);
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d).filter(f => f.endsWith('.html') && !conflict(f))) {
      const slug = f.slice(0, -5), from = borrowedItems(slug, fs.readFileSync(path.join(d, f), 'utf8'));
      if (Object.keys(from).length) failures.push({ page: `${family}/${slug}`, from: Object.fromEntries(Object.entries(from).map(([k, v]) => [k, v.filter(x => !x.startsWith('label:')).length || v.length])) });
    }
  }
  if (report) fs.writeFileSync(report, JSON.stringify({ checked: dir, failing: failures.length, pages: failures }, null, 1) + '\n');
  for (const x of failures) console.error(`FAIL cross-ingredient ${x.page}: ${Object.entries(x.from).map(([k, n]) => `${k} ${n}`).join(', ')}`);
  console.log(`cross-ingredient: ${failures.length ? `${failures.length} page(s) carry another food's mitigation evidence` : 'pass'}`);
  if (failures.length) process.exitCode = 1;
}
if (import.meta.url === `file://${process.argv[1]}`) main();
