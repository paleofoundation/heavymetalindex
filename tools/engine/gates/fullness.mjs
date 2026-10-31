// node tools/engine/gates/fullness.mjs <html>
// Release contract, as each per-ingredient fullness.mjs: recompute the ledger and
// scorecard for the page in the given HTML, run the gates and print the status JSON.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compilePage } from '../page/page.mjs';
import { finishPage } from '../page/build.mjs';
import { loadCorpus } from './index.mjs';

export function fullnessFor(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const slug = html.match(/<body[^>]*data-slug="(ingredients|products)\/([a-z0-9-]+)"/);
  if (!slug) throw Error(`No ingredient or product page slug in ${htmlPath}`);
  const page = { family: slug[1] === 'ingredients' ? 'ingredient' : 'product', slug: slug[2] };
  const c = compilePage(page);
  if (c.skipped) throw Error(`${page.family}/${page.slug}: ${c.skipped}`);
  return finishPage(c, loadCorpus([page]), path.resolve(htmlPath));
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (!process.argv[2]) throw Error('Usage: node tools/engine/gates/fullness.mjs <html>');
  const r = fullnessFor(process.argv[2]);
  console.log(JSON.stringify({ page: r.page, status: r.status, gates: r.gates, presentation: r.presentation, hero: r.hero, thin: r.thin, publishable: r.publishable, mirror: r.mirror }, null, 1));
  if (r.status !== 'pass') process.exitCode = 1;
}
