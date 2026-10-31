// After a deploy: confirm the live site serves exactly the frozen release for every
// shipped page, and rerun the page gates on the live bytes.
//
//   node tools/engine/release/verify-live.mjs <dir> [--base https://heavymetalindex.com]
//
// For each shipped page it fetches the page and its on-demand sidecars, compares their
// SHA-256 with the frozen manifest, then on the live HTML runs: the presentation gate,
// the public-content boundary audit, the hero check against page-hero-images.json, and
// the fullness gates with the release's ledger and scorecard (gate 7 binds the HTML hash);
// engine pages run tools/engine/gates/fullness.mjs on the live HTML inside the release folder.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {parse} from 'parse5';
import {workRoot, args, readJSON, writeJSON, sha, run, exists, releaseName, receiptDir, sidecarPattern} from './lib.mjs';

const a = args(), D = path.resolve(a._[0] ?? ''), base = String(a.base ?? 'https://heavymetalindex.com').replace(/\/$/, '');
const r = f => path.join(D, f), name = releaseName(D);
const mod = f => import(pathToFileURL(r(f)).href);
const manifest = readJSON(r(readJSON(r('vercel.frozen-release.json')).buildCommand.split(' ').pop()));
const stage = readJSON(r(`data/evidence/engine/releases/${name}/stage-report.json`));
const heroes = readJSON(r('data/design/page-hero-images.json'));
const stagedKind = Object.fromEntries(stage.pages.map(p => [p.page, p.kind]));
const {inspectIngredientPresentation} = await mod('tools/audit-ingredient-presentation.mjs');
const {inspectFullnessHTML, evaluateIngredientFullness} = await mod('tools/audit-ingredient-fullness.mjs');
const {loadIndependentCorpus, recomputeUniverse} = await mod('tools/ingredient-source-universe.mjs');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'hmi-live-'));

async function fetchBytes(url) { const res = await fetch(url, {redirect: 'manual', headers: {'cache-control': 'no-cache'}}); return {status: res.status, bytes: Buffer.from(await res.arrayBuffer())}; }
const pages = [];
for (const {page} of stage.pages) {
  const files = Object.keys(manifest.files).filter(f => sidecarPattern(page).test(f));
  const out = {page, files: [], gates: {}};
  for (const f of files) {
    const url = `${base}/${f.endsWith('.html') ? f.slice(0, -5) : f}`, got = await fetchBytes(url);
    const ok = got.status === 200 && sha(got.bytes) === manifest.files[f];
    out.files.push({file: f, url, http: got.status, matches_manifest: ok});
    fs.mkdirSync(path.dirname(path.join(tmp, f)), {recursive: true}); fs.writeFileSync(path.join(tmp, f), got.bytes);
  }
  const htmlFile = path.join(tmp, `${page}.html`);
  if (exists(htmlFile)) {
    const html = fs.readFileSync(htmlFile, 'utf8');
    const pres = inspectIngredientPresentation(html); out.gates.presentation = pres.errors?.length ? {status: 'fail', errors: pres.errors} : {status: 'pass'};
    const model = heroes.pages[page]; let hero = null;
    (function walk(n) { const at = Object.fromEntries((n.attrs ?? []).map(x => [x.name, x.value])); if (at.class?.split(' ').includes('hero-background')) hero = at; for (const c of n.childNodes ?? []) walk(c); })(parse(html));
    out.gates.hero = model ? (hero?.src?.endsWith(model.hero_image.replace(/^\//, '')) && typeof hero.alt === 'string' ? {status: 'pass'} : {status: 'fail', found: hero?.src ?? null}) : {status: 'not_registered'};
    const [family, slug] = page.split('/'), ledgerFile = r(`data/evidence/contracts/${slug}/evidence-ledger.json`), scoreFile = r(`data/evidence/contracts/${slug}/fullness-scorecard.json`);
    if (family === 'ingredients' && stagedKind[page] !== 'engine' && exists(ledgerFile) && exists(scoreFile)) {
      const universe = recomputeUniverse(loadIndependentCorpus(D, {ingredients: [slug]}), slug);
      const result = evaluateIngredientFullness({ingredient: slug, universe, ledger: readJSON(ledgerFile), page: inspectFullnessHTML(html), scorecard: readJSON(scoreFile), repo: D});
      out.gates.fullness = {status: result.status, gates: Object.fromEntries(Object.entries(result.gates).map(([k, v]) => [k, v.status]))};
    } else if (stagedKind[page] === 'engine' && exists(r('tools/engine/gates/fullness.mjs'))) {
      // Engine pages keep their ledger under data/evidence/engine/; the page builder's gate
      // recomputes it for the given HTML inside the release folder.
      const g = run(process.execPath, ['tools/engine/gates/fullness.mjs', htmlFile], {cwd: D, env: {NODE_OPTIONS: '--max-old-space-size=24000'}});
      let gates = null; try { const o = g.output; gates = JSON.parse(o.slice(o.indexOf('{'), o.lastIndexOf('}') + 1)).gates; } catch {}
      out.gates.fullness = {status: g.status === 0 ? 'pass' : 'fail', via: 'tools/engine/gates/fullness.mjs', gates: gates && Object.fromEntries(Object.entries(gates).map(([k, v]) => [k, v.status ?? v])), ...(g.status === 0 ? {} : {output: g.tail})};
    } else out.gates.fullness = {status: 'not_run', reason: 'no per-page ledger and scorecard in the release folder'};
  }
  out.status = out.files.length && out.files.every(f => f.matches_manifest) && Object.values(out.gates).every(g => ['pass', 'not_registered'].includes(g.status)) ? 'pass' : 'fail';
  pages.push(out); console.log(`${out.status === 'pass' ? 'ok  ' : 'FAIL'} ${page}`);
}
const boundary = run(process.execPath, ['--import', 'tsx', 'tools/audit-public-processing.mjs', '--output', tmp], {cwd: D});
const report = {release: name, base, checked_at: new Date().toISOString(), pages, public_processing: {status: boundary.status === 0 ? 'pass' : 'fail', output: boundary.tail}};
report.status = pages.every(p => p.status === 'pass') && boundary.status === 0 ? 'pass' : 'fail';
writeJSON(r(`data/evidence/engine/releases/${name}/verify-live-report.json`), report);
writeJSON(path.join(receiptDir(workRoot, D), 'verify-live-report.json'), report);
fs.rmSync(tmp, {recursive: true, force: true});
console.log(JSON.stringify({status: report.status, failing: pages.filter(p => p.status !== 'pass').map(p => p.page), public_processing: report.public_processing.status}, null, 1));
if (report.status !== 'pass') process.exitCode = 1;
