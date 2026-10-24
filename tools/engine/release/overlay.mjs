// Overlay a built release onto its frozen live public/ and freeze it:
//
//   node tools/engine/release/overlay.mjs <dir>
//
// 1. Diff public-fullbuild/ against public/ (the previous release), ignoring inline
//    source-map base64 and hashed CSS names; PDFs are regenerated every build and stay live.
// 2. Copy changed and new files onto public/, except the keep-live pages (olives,
//    metals/cadmium, the infant-formula pilot and their sidecars, index.html). Old CSS
//    files are never deleted, so live pages keep their stylesheet beside the new one.
// 3. Merge static/contentIndex.json and static/askIndex.json: live entries stay; build
//    entries are taken only for pages the stage brought in and pages new in this release.
// 4. Write the frozen manifest, point vercel.frozen-release.json at it (redirects and
//    headers from the release vercel.json) and run the frozen verifier on public/.
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {workRoot, args, exists, readJSON, writeJSON, walk, shaFile, run, releaseName, receiptDir, keepLive} from './lib.mjs';

const D = path.resolve(args()._[0] ?? '');
const r = f => path.join(D, f), name = releaseName(D);
const live = r('public'), build = r('public-fullbuild'), previous = r('public-previous');
if (!exists(build)) throw Error('No public-fullbuild/: run build.mjs first');
// Keep the untouched previous release beside the overlay so the overlay can be rerun from scratch.
if (!exists(previous)) execFileSync('cp', ['-cR', live, previous]);
fs.rmSync(live, {recursive: true, force: true}); execFileSync('cp', ['-cR', previous, live]);
const stage = readJSON(r(`data/evidence/engine/releases/${name}/stage-report.json`));
const shipped = stage.pages.map(p => p.page);
// Pages whose markdown the stage brought in (shipped pages, cited sources, categories, link targets):
// their HTML is rebuilt, so their search entries come from the build too.
const staged = new Set([...shipped, ...stage.copied.filter(c => /^wiki\/.+\.md$/.test(c.file)).map(c => c.file.replace(/^wiki\//, '').replace(/(\/index)?\.md$/, ''))]);

const normalize = b => b.toString('latin1').replace(/sourceMappingURL=data:application\/json;charset=utf-8;base64,[A-Za-z0-9+/=]+/g, 'SM').replace(/index\.[0-9a-f]{10}\.css/g, 'X.css');
const changed = [], added = [], kept = [];
for (const f of walk(build)) {
  if (f.endsWith('.pdf') || /^static\/(contentIndex|askIndex)\.json$/.test(f)) continue;
  const a = path.join(live, f), b = path.join(build, f);
  if (!exists(a)) { if (keepLive(f)) kept.push(f); else added.push(f); continue; }
  const x = fs.readFileSync(a), y = fs.readFileSync(b);
  if (x.equals(y) || normalize(x) === normalize(y)) continue;
  if (keepLive(f)) kept.push(f); else changed.push(f);
}
for (const f of [...changed, ...added]) { fs.mkdirSync(path.dirname(path.join(live, f)), {recursive: true}); fs.copyFileSync(path.join(build, f), path.join(live, f)); }

// Search indexes keyed by page slug. Entries follow the HTML: a page whose rebuilt HTML ships
// (staged, new, or changed because a staged page changed its links) takes its build entry.
const overlaidPages = new Set([...changed, ...added].filter(f => f.endsWith('.html')).map(f => f.replace(/(\/index)?\.html$/, '')));
const index = {};
for (const f of ['static/contentIndex.json', 'static/askIndex.json']) {
  if (!exists(path.join(build, f))) continue;
  const old = exists(path.join(live, f)) ? readJSON(path.join(live, f)) : {}, neu = readJSON(path.join(build, f));
  const take = Object.keys(neu).filter(k => staged.has(k) || !(k in old) || (overlaidPages.has(k) && JSON.stringify(old[k]) !== JSON.stringify(neu[k]))), liveEntries = Object.keys(old).length;
  for (const k of take) old[k] = neu[k];
  fs.writeFileSync(path.join(live, f), JSON.stringify(old));
  index[f] = {live_entries: liveEntries, replaced_staged: take.filter(k => staged.has(k)), replaced_rebuilt: take.filter(k => !staged.has(k) && k in neu && overlaidPages.has(k)), taken_from_build: take};
}

// Frozen manifest and Vercel config.
const files = Object.fromEntries(walk(live).sort().map(f => [f, shaFile(path.join(live, f))]));
const manifestRel = `data/evidence/engine/releases/${name}/frozen-public-manifest.json`;
const ingredientScope = shipped.filter(p => p.startsWith('ingredients/')).map(p => p.split('/')[1]);
const manifest = {source_commit: `previous release ${path.basename(stage.from)} + ${shipped.length} pages staged by tools/engine/release`, scope: ingredientScope, pages: shipped,
  shipped_changed_files: [...changed, ...added].sort(), kept_live: kept.sort(), files,
  search_index: 'Live entries kept; entries from this build only for pages whose rebuilt HTML ships (staged, new, or changed by staged pages).'};
writeJSON(r(manifestRel), manifest);
const verifier = shipped.every(p => p.startsWith('ingredients/')) ? 'tools/verify-frozen-release.mjs' : 'tools/engine/release/verify-frozen.mjs';
const frozen = {...readJSON(r('vercel.json')), buildCommand: `node ${verifier} ${manifestRel}`, installCommand: 'true'};
writeJSON(r('vercel.frozen-release.json'), frozen);
const verify = run(process.execPath, [verifier, manifestRel], {cwd: D});

const report = {release: name, changed: changed.length, added: added.length, kept_live: kept, search_index: index, manifest: manifestRel, files: Object.keys(files).length,
  by_top: Object.entries([...changed, ...added].reduce((m, f) => (m[f.split('/')[0]] = (m[f.split('/')[0]] ?? 0) + 1, m), {})),
  frozen_verifier: {command: frozen.buildCommand, status: verify.status, output: verify.tail}};
writeJSON(r(`data/evidence/engine/releases/${name}/overlay-report.json`), report);
writeJSON(path.join(receiptDir(workRoot, D), 'overlay-report.json'), report);
writeJSON(path.join(receiptDir(workRoot, D), 'frozen-public-manifest.json'), manifest);
console.log(JSON.stringify({...report, search_index: Object.fromEntries(Object.entries(index).map(([k, v]) => [k, {...v, taken_from_build: v.taken_from_build.length}]))}, null, 1));
if (verify.status !== 0) process.exitCode = 1;
