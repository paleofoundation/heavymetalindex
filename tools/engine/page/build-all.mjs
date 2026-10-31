// node tools/engine/page/build-all.mjs [--family ingredient|product] [--only-ready] [--pages a,b]
// Builds every page that has findings, previews them in batches through the shared
// pipeline, gates each page and writes data/evidence/engine/status.json.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { root, FAMILIES, BUILD_DATE, writeFile, exists, notConflict, storeState, sameStore } from './common.mjs';
import { compilePage } from './page.mjs';
import { buildPreview } from './preview.mjs';
import { writeCompiled, finishPage } from './build.mjs';
import { pageUniverses } from '../gates/index.mjs';

const self = fileURLToPath(import.meta.url);
// The monitoring dataset index and the largest ledgers need a large heap.
if (!process.execArgv.some(a => a.startsWith('--max-old-space-size')) && !process.env.HMI_ENGINE_CHILD) {
  const r = spawnSync(process.execPath, ['--max-old-space-size=24576', self, ...process.argv.slice(2)], { stdio: 'inherit', env: { ...process.env, HMI_ENGINE_CHILD: '1' } });
  process.exit(r.status ?? 1);
}

const args = process.argv.slice(2), opt = k => args.includes(k) ? args[args.indexOf(k) + 1] : null;
const families = opt('--family') ? [opt('--family')] : ['ingredient', 'product'];
const onlyReady = args.includes('--only-ready');
const only = opt('--pages')?.split(',');

function listPages() {
  const out = [];
  for (const family of families) {
    const dir = path.join(root, 'wiki', FAMILIES[family]);
    for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'index.md' && notConflict(f)).sort()) {
      const slug = f.slice(0, -3);
      if (only && !only.includes(`${family}/${slug}`) && !only.includes(slug)) continue;
      const fm = matter(fs.readFileSync(path.join(dir, f), 'utf8')).data;
      if (fm.type === 'category-index') continue;
      out.push({ family, slug });
    }
  }
  return out;
}
// Ready: every finding's source has a recorded page decision (legacy ledger, or a store
// source read completely), so a failing gate reflects evidence rather than a missing read.
const ready = c => c.evidence.origin.startsWith('legacy:') || [...c.evidence.sources.values()].every(s => s.complete || s.source_id === c.evidence.page.slug);

const errorClass = e => String(e).replace(/hmi-pooled-reference-v2:[^:\s]+:[0-9a-f]+/g, '<reference>').replace(/dataset:[^\s,]+/g, '<dataset row>').replace(/source:[a-z0-9-]+/g, '<source>')
  .replace(/hmi-occurrence-[a-z0-9-]+-[A-Za-z_-]+-\d+/g, '<row>').replace(/\b\d[\d,.]*\b/g, 'N').replace(/:\s.*$/, m => m.length > 90 ? ': …' : m).slice(0, 160);

const started = Date.now();
const pages = listPages();
const results = [], compiled = [];
const outRoot = 'data/evidence/engine/preview';
const RUN_ID = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15);
// A --pages rerun keeps the full run's previews and writes its own batches beside them.
if (!only) fs.rmSync(path.join(root, outRoot), { recursive: true, force: true });
for (const page of pages) {
  try {
    const c = compilePage(page);
    if (c.skipped) { results.push({ page: `${page.family}/${page.slug}`, status: 'skipped', reason: c.skipped }); continue; }
    if (onlyReady && !ready(c)) { results.push({ page: `${page.family}/${page.slug}`, status: 'not_ready', reason: 'Some findings come from sources the store has read only for another page', rows: c.occ.rows.length }); continue; }
    writeCompiled(c);
    // Without preserved hero artwork the shared renderer cannot build the page at all.
    if (!c.hero) { results.push({ page: `${page.family}/${page.slug}`, status: 'blocked', reason: 'missing_required_input: no preserved hero artwork is registered for this page', origin: c.evidence.origin, rows: c.occ.rows.length }); continue; }
    compiled.push({ page, bytes: c.candidate.length });
  } catch (e) { results.push({ page: `${page.family}/${page.slug}`, status: 'error', reason: e.message.split('\n')[0].slice(0, 300) }); }
}
console.error(`compiled ${compiled.length} pages in ${Math.round((Date.now() - started) / 1000)} s`);
// Batches keep each preview build within memory; large pages build alone.
const batches = [];
for (const x of compiled) { const b = batches.at(-1); if (b && b.bytes + x.bytes < 40e6 && b.pages.length < 25) { b.pages.push(x.page); b.bytes += x.bytes; } else batches.push({ pages: [x.page], bytes: x.bytes }); }
for (const [k, b] of batches.entries()) {
  const batch = [];
  for (const p of b.pages) {
    try { const c = compilePage(p); if (c.skipped) results.push({ page: `${p.family}/${p.slug}`, status: 'skipped', reason: c.skipped }); else batch.push(c); }
    catch (e) { results.push({ page: `${p.family}/${p.slug}`, status: 'error', reason: e.message.split('\n')[0].slice(0, 300) }); }
  }
  if (!batch.length) continue;
  // One discovery scan per batch: a scan for every page at once exceeds the largest string.
  const { universes, failed } = pageUniverses(batch.map(c => c.page));
  // Each --pages run writes its own folders, so concurrent or later reruns never overwrite another run's previews.
  const dir = `${outRoot}/${only ? `rerun-${RUN_ID}-` : ''}batch-${String(k).padStart(3, '0')}`;
  const finish = (c, preview) => {
    const key = `${c.page.family}/${c.page.slug}`;
    if (failed.has(key)) { results.push({ page: key, status: 'error', reason: failed.get(key) }); return; }
    try { results.push(finishPage(c, null, path.join(root, preview.html[key]), universes.get(key))); }
    catch (e) { results.push({ page: key, status: 'error', reason: e.message.split('\n')[0].slice(0, 300) }); }
  };
  try { const preview = buildPreview(batch, dir); for (const c of batch) finish(c, preview); }
  catch {
    // One page that Quartz cannot build must not fail its whole batch.
    for (const [i, c] of batch.entries()) {
      try { finish(c, buildPreview([c], `${dir}-${i}`)); }
      catch (e) { results.push({ page: `${c.page.family}/${c.page.slug}`, status: 'error', reason: `Preview build failed: ${e.message.slice(0, 300)}` }); }
    }
  }
  console.error(`batch ${k + 1}/${batches.length} done (${b.pages.length} pages)`);
  writeStatus(false);
}
writeStatus(true);

// Status entries for this run; a --pages run replaces only its pages in the existing status.
function entry(r) { return { page: r.page, status: r.status, reason: r.reason, origin: r.origin, rows: r.rows, states: r.states, thin: r.thin, thin_reasons: r.thin_reasons, publishable: r.publishable ?? false,
  failing_gates: r.gates ? Object.entries(r.gates).filter(([, v]) => v.status !== 'pass').map(([g, v]) => ({ gate: +g, errors: v.errors, first: v.first.slice(0, 2) })) : undefined,
  presentation_errors: r.presentation?.errors, hero_errors: r.hero?.errors, undecided_items: r.undecided_items, lost_findings: r.lost_findings?.length, html_bytes: r.html_bytes,
  controls: r.controls ? { records: r.controls.records, own: r.controls.own, borrowed: r.controls.borrowed, group: r.controls.group } : undefined, mirror: r.mirror }; }
function writeStatus(final) {
  const prior = only && exists('data/evidence/engine/status.json') ? JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/engine/status.json'), 'utf8')).pages : [];
  const entries = [...prior.filter(p => !results.some(r => r.page === p.page)), ...results.map(entry)].sort((a, b) => a.page.localeCompare(b.page));
  // A store-built page is stale once the findings store has changed since its candidate, ledger and
  // scorecard were built; it is not publishable until rebuilt.
  // Pages held back pending a decision keep their actual result in built_status.
  const withdrawn = exists('data/evidence/engine/withdrawn.json') ? JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/engine/withdrawn.json'), 'utf8')) : { pages: [] };
  for (const r of entries) if (withdrawn.pages.includes(r.page) && r.status !== withdrawn.status) Object.assign(r, { built_status: r.status, status: withdrawn.status, publishable: false, reason: withdrawn.note });
  for (const r of entries) {
    if (!['pass', 'fail'].includes(r.status) || !r.origin?.startsWith('store:')) continue;
    const [family, slug] = r.page.split('/'), g = path.join(root, 'data/evidence/engine', r.page, 'gates.json');
    const built = fs.existsSync(g) ? JSON.parse(fs.readFileSync(g, 'utf8')).store_state : null;
    if (sameStore(built, storeState({ family, slug }))) { r.store_state = built; continue; }
    Object.assign(r, { status: 'stale', built_status: r.status, publishable: false, reason: built ? 'The findings store changed after this page was built; rebuild before release.' : 'Built before store state was recorded; rebuild before release.' });
  }
  const count = f => entries.reduce((m, r) => { const k = f(r); if (k != null) m[k] = (m[k] ?? 0) + 1; return m; }, {});
  const reasons = {}, add = k => { reasons[k] = (reasons[k] ?? 0) + 1; };
  for (const r of entries) {
    if (r.status === 'blocked') add(`blocked: ${r.reason}`);
    if (r.status === 'error') add(`build error: ${errorClass(r.reason)}`);
    if (r.status !== 'fail') continue;
    for (const g of r.failing_gates ?? []) add(`gate ${g.gate}: ${errorClass(g.first[0] ?? 'fail')}`);
    for (const e of r.presentation_errors ?? []) add(`presentation: ${errorClass(e)}`);
    for (const e of r.hero_errors ?? []) add(`hero: ${e}`);
  }
  const status = {
    generated_at: new Date().toISOString(), build_date: BUILD_DATE, families, only_ready: onlyReady, seconds: Math.round((Date.now() - started) / 1000), complete: final,
    totals: { pages: only ? entries.length : pages.length, built: entries.filter(r => ['pass', 'fail'].includes(r.status)).length, ...count(r => r.status) },
    thin: count(r => r.thin ?? null), publishable: entries.filter(r => r.publishable).length, origins: count(r => r.origin?.split(':')[0] ?? null),
    top_failure_reasons: Object.entries(reasons).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([reason, pages]) => ({ reason, pages })),
    pages: entries,
  };
  writeFile('data/evidence/engine/status.json', JSON.stringify(status, null, 2) + '\n');
  // Pages that cannot render until Karen supplies real hero artwork, most evidence first.
  const heroNeeded = entries.filter(r => r.status === 'blocked' && /hero/.test(r.reason ?? '')).map(r => {
    const [family, slug] = r.page.split('/'), f = path.join(root, 'wiki', FAMILIES[family], `${slug}.md`);
    return { page: r.page, url: `/${FAMILIES[family]}/${slug}`, title: fs.existsSync(f) ? matter(fs.readFileSync(f, 'utf8')).data.title ?? slug : slug, findings: r.rows ?? 0, origin: r.origin };
  }).sort((a, b) => b.findings - a.findings || a.page.localeCompare(b.page));
  writeFile('data/evidence/engine/hero-needed.json', JSON.stringify({ generated_at: status.generated_at, note: 'Pages with findings but no registered hero artwork in data/design/page-hero-images.json. Real images are supplied by Karen; none is generated.', pages: heroNeeded }, null, 2) + '\n');
  if (final) console.log(JSON.stringify({ totals: status.totals, thin: status.thin, publishable: status.publishable, top_failure_reasons: status.top_failure_reasons.slice(0, 12) }, null, 1));
}
