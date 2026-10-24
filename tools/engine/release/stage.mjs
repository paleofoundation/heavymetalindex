// Stage an isolated release: copy the previous release folder, then bring in only the
// named pages' candidates and the files they need, from the working folder.
//
//   node tools/engine/release/stage.mjs --from <prev release dir> --pages ingredients/a,products/b --out <dir>
//        [--shared path1,path2]   shared code/data to carry over unchanged from the working folder
//        [--source auto|engine|legacy]  auto: engine output when its gates.json passed, else the legacy build
//
// Automatic repairs (each is recorded in stage-report.json):
//  - a page that now exists but was redirected: its redirect is removed from vercel.json
//    (and gone-410.json), and its historical-link resolution becomes a created destination
//  - adoption.json receipts are rebound to the staged candidate's hash
//  - link targets that exist only in the working folder (sources, regulations, metals,
//    methodology and other non-page families) are copied in, transitively
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import matter from 'gray-matter';
import {workRoot as S, args, exists, readJSON, writeJSON, copyFile, rsync, shaFile, locatePage, frontmatterField, wikiLinks, wikiTarget, releaseName, receiptDir} from './lib.mjs';

// Source ids of a ledger's "source:<id>" items. Streamed, because broad pages (meat: 564 MB)
// exceed the largest string Node can hold.
function ledgerSourceIds(file) {
  const ids = new Set(), re = /"id"\s*:\s*"source:([^"]+)"/g, fd = fs.openSync(file, 'r'), buf = Buffer.alloc(16 << 20);
  let tail = '', n;
  try {
    while ((n = fs.readSync(fd, buf, 0, buf.length, null)) > 0) {
      const s = tail + buf.toString('utf8', 0, n);
      for (const m of s.matchAll(re)) ids.add(m[1]);
      tail = s.slice(-512);
    }
  } finally { fs.closeSync(fd); }
  return ids;
}

const a = args();
const from = a.from && path.resolve(a.from), D = a.out && path.resolve(a.out);
const pages = String(a.pages ?? '').split(',').map(s => s.trim()).filter(Boolean);
const source = String(a.source ?? 'auto');
const shared = String(a.shared ?? '').split(',').map(s => s.trim()).filter(Boolean);
if (!from || !D || !pages.length) throw Error('Usage: stage.mjs --from <prev release dir> --pages ingredients/a,products/b --out <dir> [--shared a,b]');
if (!exists(path.join(from, 'public'))) throw Error(`Previous release has no frozen public/: ${from}`);
if (exists(D)) throw Error(`Output exists: ${D}`);

function writeLike0(file, value) { fs.mkdirSync(path.dirname(file), {recursive: true}); fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n'); }
function writeLike(file, value) {
  const before = fs.readFileSync(file, 'utf8'); let text = JSON.stringify(value, null, 2) + '\n';
  if (/\\u00[a-f0-9]{2}/i.test(before)) text = text.replace(/[\u0080-\uffff]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  fs.writeFileSync(file, text);
}
// Relative imports of a staged code file, transitively: a dependency the release lacks or
// holds in another version is brought from the working folder (batch E: contentIndex.tsx
// imported ../../util/buildDate, absent from the release).
const CODE = /\.(?:mjs|cjs|js|ts|tsx|mts|jsx)$/;
function resolveImport(from, spec) {
  const base = path.join(path.dirname(from), spec);
  for (const c of [base, ...['.ts', '.tsx', '.mjs', '.js', '.mts', '.cjs', '.jsx', '.json'].map(e => base + e), ...['index.ts', 'index.tsx', 'index.mjs', 'index.js'].map(i => path.join(base, i))])
    if (exists(w(c)) && fs.statSync(w(c)).isFile()) return c.split(path.sep).join('/');
  return null;
}
const importsSeen = new Set();
function stageImports(file) {
  if (importsSeen.has(file) || !CODE.test(file) || !exists(w(file))) return;
  importsSeen.add(file);
  const src = fs.readFileSync(w(file), 'utf8');
  const specs = [...src.matchAll(/(?:import|export)\s+(?:type\s+)?(?:[^'";]*?\s+from\s+)?["'](\.{1,2}\/[^"']+)["']|import\(\s*["'](\.{1,2}\/[^"']+)["']\s*\)/g)].map(m => m[1] ?? m[2]);
  for (const spec of specs) {
    const dep = resolveImport(file, spec);
    if (!dep) { report.warnings.push(`${file}: import ${spec} not found in the working folder`); continue; }
    if (bring(dep, `import of ${file}`)) note('shared_import_staged', {from: file, import: dep});
    stageImports(dep);
  }
}
const report = {release: releaseName(D), from, out: D, working_folder: S, pages: [], shared: [], copied: [], repairs: [], warnings: []};
const w = f => path.join(S, f), r = f => path.join(D, f);
const note = (kind, detail) => report.repairs.push({kind, ...detail});
function bring(rel, why) {
  if (!exists(w(rel))) { report.warnings.push(`missing in working folder: ${rel} (${why})`); return false; }
  const before = exists(r(rel)) ? shaFile(r(rel)) : null, after = shaFile(w(rel));
  if (before === after) return false;
  copyFile(w(rel), r(rel)); report.copied.push({file: rel, why, status: before ? 'updated' : 'new'}); return true;
}

// 1. Copy the previous release (APFS clone) and drop its build outputs.
execFileSync('cp', ['-cR', from, D]);
for (const x of ['public-fullbuild', 'public-live', '.vercel/output']) fs.rmSync(r(x), {recursive: true, force: true});
for (const f of fs.readdirSync(D)) if (/\.log$/.test(f)) fs.rmSync(r(f));

// 2. Release tooling, hero registry and assets, named shared files.
rsync(w('tools/engine/release'), r('tools/engine/release'));
// Engine pages need the engine's own code in the release (gates, page model, findings readers).
if (pages.some(pg => locatePage(pg, S, source).kind === 'engine')) for (const d of ['tools/engine/page', 'tools/engine/gates', 'tools/engine/findings', 'data/evidence/findings']) if (exists(w(d))) rsync(w(d), r(d));
bring('data/design/page-hero-images.json', 'hero registry');
// Shared discovery and gate code always comes from the working folder, so every release gates
// pages with the current rules (coordinator decision, 23 Oct 2026).
for (const f of ['tools/ingredient-source-universe.mjs', 'tools/audit-ingredient-presentation.mjs', 'tools/contracts/build-thin-pages-ledger.mjs', 'tools/contracts/page-owner.mjs']) bring(f, 'shared discovery and gate code (always staged)');
for (const f of fs.readdirSync(w('quartz/static/heroes'))) bring(`quartz/static/heroes/${f}`, 'hero asset');
for (const f of shared) { if (exists(w(f)) && fs.statSync(w(f)).isDirectory()) rsync(w(f), r(f)); else { bring(f, 'shared (--shared)'); stageImports(f); } report.shared.push(f); }

// 3. Each page: candidate, its own evidence and code, records it names, cited sources and regulations.
const resolutions = readJSON(r('data/reference/historical-link-resolutions.json'));
const vercel = readJSON(r('vercel.json'));
const gonePath = r('data/redirects/gone-410.json'), gone = exists(gonePath) ? readJSON(gonePath) : null;
const scan = [];
for (const page of pages) {
  const p = locatePage(page, S, source);
  const wikiPath = `wiki/${p.family}/${p.slug}.md`, isNew = !exists(r(wikiPath));
  for (const dir of p.dirs) if (exists(w(dir))) rsync(w(dir), r(dir), {exclude: ['__pycache__', 'archive-earlier-build', ...(dir === p.audit || p.kind === 'engine' ? ['preview*'] : [])]});
  const text = fs.readFileSync(w(p.candidate), 'utf8');
  for (const key of ['synthesis_record', 'question_record']) { const f = frontmatterField(text, key); if (f) bring(f, `${page} ${key}`); }
  copyFile(w(p.candidate), r(wikiPath)); report.copied.push({file: wikiPath, why: `${page} candidate`, status: isNew ? 'new' : 'updated'});
  // Receipts bound to an earlier build of the candidate.
  for (const receipt of p.audit ? [`${p.audit}/adoption.json`] : []) if (exists(r(receipt))) {
    const x = readJSON(r(receipt)), hash = shaFile(w(p.candidate));
    if (x.candidate_sha256 !== hash) { note('adoption_hash_rebound', {file: receipt, before: x.candidate_sha256, after: hash}); x.candidate_sha256 = hash; writeLike(r(receipt), x); }
  }
  // Cited sources and regulations always follow the candidate; ledger-only sources only when absent.
  for (const t of wikiLinks(text)) if (/^(sources|regulations)\//.test(t) && exists(w(`wiki/${t}.md`))) bring(`wiki/${t}.md`, `${page} citation`);
  const ledger = p.ledger ? w(`${p.ledger}/evidence-ledger.json`) : w(`${p.dirs[0]}/evidence-ledger.json`);
  if (exists(ledger)) for (const sid of ledgerSourceIds(ledger)) {
    const rec = [`wiki/sources/${sid}.md`, `wiki/sources/categories/${sid}.md`].find(f => exists(w(f)));
    if (rec && !exists(r(rec))) bring(rec, `${page} ledger item`);
  }
  // Regulation pages new in the working folder that rest on a source this candidate cites
  // (they reach the page through backlinks and contextual links).
  const citedSources = new Set(wikiLinks(text).filter(t => t.startsWith('sources/')));
  for (const f of fs.readdirSync(w('wiki/regulations')).filter(f => /^[a-z0-9-]+\.md$/.test(f) && !exists(r(`wiki/regulations/${f}`)))) {
    const reg = fs.readFileSync(w(`wiki/regulations/${f}`), 'utf8');
    if (wikiLinks(reg).some(t => citedSources.has(t)) && bring(`wiki/regulations/${f}`, `${page} new regulation page resting on a cited source`)) scan.push(`wiki/regulations/${f}`);
  }
  // Category listings in the working folder that list this page.
  const catDir = `wiki/${p.family}/categories`;
  if (exists(w(catDir))) for (const f of fs.readdirSync(w(catDir)).filter(f => f.endsWith('.md'))) {
    const c = fs.readFileSync(w(`${catDir}/${f}`), 'utf8');
    const listed = exists(r(`${catDir}/${f}`)) && wikiLinks(fs.readFileSync(r(`${catDir}/${f}`), 'utf8')).includes(`${p.family}/${p.slug}`);
    if (!listed && wikiLinks(c).includes(`${p.family}/${p.slug}`) && bring(`${catDir}/${f}`, `${page} category listing`)) scan.push(`${catDir}/${f}`);
  }
  // A page that now exists must not stay hidden behind a redirect or a 410.
  const route = `/${p.family}/${p.slug}`;
  const hidden = vercel.redirects.filter(x => x.source === route);
  if (hidden.length) { vercel.redirects = vercel.redirects.filter(x => x.source !== route); note('redirect_removed', {page, removed: hidden}); }
  if (gone && (gone.paths ?? []).includes(route)) { gone.paths = gone.paths.filter(x => x !== route); note('gone_410_removed', {page}); }
  const old = resolutions.resolutions?.[page];
  if (old) {
    const fm = matter(text).data, cited = wikiLinks(text).filter(t => t.startsWith('sources/'));
    const sources = (resolutions.created_destinations?.[page]?.sources ?? cited.filter(t => { if (!exists(w(`wiki/${t}.md`))) return false; const d = matter(fs.readFileSync(w(`wiki/${t}.md`), 'utf8')).data; return d.status !== 'tier1-stub' && d.evidence_tier !== 'pending'; }).slice(0, 4));
    resolutions.created_destinations[page] = {title: fm.title ?? p.slug, parent: old.destination.split('#')[0], scope: fm.description ?? `${fm.title ?? p.slug} has its own page.`, sources};
    delete resolutions.resolutions[page];
    note('historical_resolution_to_created_destination', {page, previous: old, created: resolutions.created_destinations[page]});
  }
  scan.push(wikiPath);
  report.pages.push({page, kind: p.kind, candidate: p.candidate, candidate_sha256: shaFile(w(p.candidate)), new_page: isNew, gate: p.gate});
}
// Rewrite a registry only when a repair changed it, keeping its existing escaping style.
// Baseline links a rebuilt page no longer carries. The historical-link audit counts every unresolved
// baseline target as a structural gap; a gap whose link the new page drops must be recorded as a
// reviewed removal, bound to the page's exact bytes by an adoption.json review file (batch E: three
// soy-based formula pages dropped ingredients/soy-protein-concentrate).
const baselinePath = resolutions.baseline && r(resolutions.baseline);
if (baselinePath && exists(baselinePath)) {
  const rows = fs.readFileSync(baselinePath, 'utf8').trimEnd().split('\n').slice(1).map(l => { const [origin_page, target_slug] = l.split(','); return {origin_page, target_slug}; });
  resolutions.removed_references ??= [];
  for (const pg of report.pages) {
    const origin = `wiki/${pg.page}.md`, raw = fs.readFileSync(r(origin), 'utf8'), hash = shaFile(r(origin));
    for (const row of rows.filter(x => x.origin_page === origin)) {
      const t = row.target_slug;
      if (resolutions.resolutions?.[t] || resolutions.created_destinations?.[t] || raw.includes(t)) continue;
      const prior = resolutions.removed_references.find(x => x.origin_page === origin && x.target_slug === t);
      if (prior) { // reviewed in an earlier release: bind its review to the new bytes
        const rv = exists(r(prior.review_ref)) ? readJSON(r(prior.review_ref)) : null;
        if (rv && rv.candidate_sha256 !== hash) { writeLike0(r(prior.review_ref), {...rv, candidate_sha256: hash, release: report.release}); note('removed_reference_review_rebound', {page: origin, target: t, review: prior.review_ref}); }
        continue;
      }
      const p = locatePage(pg.page, S, source);
      const review = p.kind === 'engine' ? `${p.dirs[0]}/adoption.json` : `${p.audit}/adoption.json`;
      const existing = exists(r(review)) ? readJSON(r(review)) : {};
      writeLike0(r(review), {...existing, date: existing.date ?? new Date().toISOString().slice(0, 10), page: origin, compiler: existing.compiler ?? (p.kind === 'engine' ? 'tools/engine/page/build.mjs' : `tools/contracts/ingredients/${p.slug}/build.mjs`),
        candidate: p.candidate, candidate_sha256: hash, release: report.release});
      resolutions.removed_references.push({origin_page: origin, target_slug: t, review_ref: review,
        reason: `The rebuilt page no longer links ${t}: no ${t} page or target-specific source exists, so the unsupported link is not carried forward.`,
        next_action: `Recover target-specific evidence before creating a ${t} page.`});
      note('baseline_link_dropped', {page: origin, target: t, review});
    }
  }
}
const touched = kinds => report.repairs.some(x => kinds.includes(x.kind));
if (touched(['historical_resolution_to_created_destination', 'baseline_link_dropped'])) writeLike(r('data/reference/historical-link-resolutions.json'), resolutions);
if (touched(['redirect_removed'])) writeLike(r('vercel.json'), vercel);
if (gone && touched(['gone_410_removed'])) writeLike(gonePath, gone);

// 4. Registries: adopted pages and compiler owners (merged, never shrunk).
const adopted = readJSON(r('data/evidence/contracts/adopted-pages.json')), wa = readJSON(w('data/evidence/contracts/adopted-pages.json'));
for (const page of pages) { const f = `wiki/${page}.md`; if (wa.pages.includes(f) && !adopted.pages.includes(f)) { adopted.pages.push(f); note('adopted_page_registered', {page: f}); } }
writeJSON(r('data/evidence/contracts/adopted-pages.json'), adopted);
bring('tools/contracts/page-owner.mjs', 'compiler owner registry');
const owners = 'data/evidence/contracts/ingredient-compiler-owners.json';
if (exists(w(owners))) { const o = exists(r(owners)) ? readJSON(r(owners)) : {version: 1, ingredients: {}}, wo = readJSON(w(owners));
  for (const page of pages) { const slug = page.split('/')[1]; if (wo.ingredients?.[slug]) o.ingredients[slug] = wo.ingredients[slug]; } writeJSON(r(owners), o); }

// 5. Link targets that exist only in the working folder, transitively for non-page families.
const pageFamilies = /^(ingredients|products)\//;
const seen = new Set();
while (scan.length) {
  const f = scan.shift(); if (seen.has(f)) continue; seen.add(f);
  for (const t of wikiLinks(fs.readFileSync(r(f), 'utf8'))) {
    if (wikiTarget(D, t)) continue;
    const src = wikiTarget(S, t);
    if (!src) continue; // absent everywhere: the dead-link gate reports it
    if (pageFamilies.test(t) && !/\/categories\//.test(t)) { report.warnings.push(`${f} links ${t}, a page not in this release (needs its own review); left for the dead-link gate`); continue; }
    bring(src, `link target of ${f}`); note('link_target_copied', {from: f, target: src}); scan.push(src);
  }
}

writeJSON(r(`data/evidence/engine/releases/${report.release}/stage-report.json`), report);
writeJSON(path.join(receiptDir(S, D), 'stage-report.json'), report);
console.log(JSON.stringify({staged: D, pages: report.pages.length, copied: report.copied.length, repairs: report.repairs.map(x => x.kind), warnings: report.warnings.length}, null, 1));
