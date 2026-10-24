// After a deploy whose verify-live passed: bring the working folder level with live.
//
//   node tools/engine/release/sync-working.mjs <release dir> [--record batch-x-YYYY-MM-DD] [--force]
//
// Copies back from the release folder:
//  - each shipped page's wiki file (engine candidates are not adopted into the working wiki,
//    so without this the working wiki/ stays stale against live)
//  - its cited source and regulation records, and every wiki file the stage brought in,
//    when absent from the working folder; a working copy that has since changed is kept and
//    listed as diverged rather than overwritten
//  - review files the stage wrote (adoption.json bound to the shipped bytes)
// and replays the stage's registry and reference repairs on the working copies (adopted pages,
// compiler owners, historical-link resolutions and removals, redirects, 410 list), so newer
// working edits to those files are kept. It then writes a release record to
// data/evidence/contracts/<record>/release.json (in the batch-d-2026-10-23 form), adding a
// working_sync section to an existing record without changing its other fields.
import fs from 'node:fs';
import path from 'node:path';
import {workRoot as W, args, exists, readJSON, writeJSON, shaFile, copyFile, wikiLinks, releaseName} from './lib.mjs';

const a = args(), D = path.resolve(a._[0] ?? ''), name = releaseName(D);
const r = f => path.join(D, f), w = f => path.join(W, f);
const receipts = r(`data/evidence/engine/releases/${name}`);
const stage = readJSON(`${receipts}/stage-report.json`);
const live = exists(`${receipts}/verify-live-report.json`) ? readJSON(`${receipts}/verify-live-report.json`) : null;
if (!a.force && live?.status !== 'pass') throw Error(`verify-live has not passed for ${name}; deploy, run verify-live.mjs, then sync (or pass --force)`);
const record = String(a.record ?? name.replace(/^hmi-/, '').replace(/-release-(\d{4})(\d{2})(\d{2})$/, '-$1-$2-$3'));

const sync = {synced_at: new Date().toISOString(), release_folder: D, verify_live: live ? {status: live.status, checked_at: live.checked_at} : 'not run (--force)', pages: [], records: [], kept_diverged: [], registries: []};
const shipped = stage.pages.map(p => p.page);

// 1. Shipped pages: the working wiki takes the live bytes.
for (const page of shipped) {
  const f = `wiki/${page}.md`, before = exists(w(f)) ? shaFile(w(f)) : null, after = shaFile(r(f));
  if (before !== after) copyFile(r(f), w(f));
  sync.pages.push({file: f, before_sha256: before, after_sha256: after, changed: before !== after});
}
// 2. Records the pages cite and every wiki file the stage brought in.
const records = new Set(stage.copied.map(c => c.file).filter(f => f.startsWith('wiki/') && !shipped.includes(f.replace(/^wiki\/|\.md$/g, ''))));
for (const page of shipped) for (const t of wikiLinks(fs.readFileSync(r(`wiki/${page}.md`), 'utf8'))) if (/^(sources|regulations)\//.test(t) && exists(r(`wiki/${t}.md`))) records.add(`wiki/${t}.md`);
for (const f of [...records].sort()) {
  if (!exists(r(f))) continue;
  if (!exists(w(f))) { copyFile(r(f), w(f)); sync.records.push({file: f, status: 'added'}); continue; }
  if (shaFile(w(f)) !== shaFile(r(f))) sync.kept_diverged.push({file: f, working_sha256: shaFile(w(f)), release_sha256: shaFile(r(f)), note: 'working copy differs from the shipped record; kept (it may hold a later correction)'});
}
// 3. Review files the stage wrote, bound to the shipped bytes.
for (const x of stage.repairs.filter(x => ['adoption_hash_rebound', 'baseline_link_dropped', 'removed_reference_review_rebound'].includes(x.kind))) {
  const f = x.file ?? x.review;
  if (f && exists(r(f)) && (!exists(w(f)) || shaFile(w(f)) !== shaFile(r(f)))) { copyFile(r(f), w(f)); sync.records.push({file: f, status: 'review file'}); }
}
// 4. Registry and reference repairs, replayed on the working copies.
const edit = (file, fn) => { if (!exists(w(file))) return; const before = fs.readFileSync(w(file), 'utf8'), value = JSON.parse(before); if (fn(value) === false) return;
  let text = JSON.stringify(value, null, 2) + '\n'; if (/\\u00[a-f0-9]{2}/i.test(before)) text = text.replace(/[\u0080-￿]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  if (text !== before) { fs.writeFileSync(w(file), text); sync.registries.push(file); } };
edit('data/evidence/contracts/adopted-pages.json', x => { const add = shipped.map(p => `wiki/${p}.md`).filter(f => (readJSON(r('data/evidence/contracts/adopted-pages.json')).pages ?? []).includes(f) && !x.pages.includes(f)); if (!add.length) return false; x.pages.push(...add); });
edit('data/evidence/contracts/ingredient-compiler-owners.json', x => { const rel = exists(r('data/evidence/contracts/ingredient-compiler-owners.json')) ? readJSON(r('data/evidence/contracts/ingredient-compiler-owners.json')) : {ingredients: {}};
  let changed = false; for (const p of shipped) { const s = p.split('/')[1]; if (rel.ingredients?.[s] && JSON.stringify(x.ingredients?.[s]) !== JSON.stringify(rel.ingredients[s])) { (x.ingredients ??= {})[s] = rel.ingredients[s]; changed = true; } } return changed || false; });
edit('data/reference/historical-link-resolutions.json', x => {
  let changed = false;
  for (const rep of stage.repairs) {
    if (rep.kind === 'historical_resolution_to_created_destination' && x.resolutions?.[rep.page]) { x.created_destinations[rep.page] = rep.created; delete x.resolutions[rep.page]; changed = true; }
    if (rep.kind === 'baseline_link_dropped' && !(x.removed_references ??= []).some(e => e.origin_page === rep.page && e.target_slug === rep.target)) {
      const entry = readJSON(r('data/reference/historical-link-resolutions.json')).removed_references.find(e => e.origin_page === rep.page && e.target_slug === rep.target);
      if (entry) { x.removed_references.push(entry); changed = true; }
    }
  }
  return changed;
});
edit('vercel.json', x => { const gone = stage.repairs.filter(rep => rep.kind === 'redirect_removed').flatMap(rep => rep.removed.map(z => z.source)); const n = x.redirects.length; x.redirects = x.redirects.filter(z => !gone.includes(z.source)); return x.redirects.length !== n; });
edit('data/redirects/gone-410.json', x => { const gone = stage.repairs.filter(rep => rep.kind === 'gone_410_removed').map(rep => `/${rep.page}`); const n = (x.paths ?? []).length; x.paths = (x.paths ?? []).filter(z => !gone.includes(z)); return x.paths.length !== n; });

// 5. Release record.
const recordFile = w(`data/evidence/contracts/${record}/release.json`);
const build = exists(`${receipts}/build-report.json`) ? readJSON(`${receipts}/build-report.json`) : null;
const pkg = exists(`${receipts}/package-report.json`) ? readJSON(`${receipts}/package-report.json`) : null;
const existing = exists(recordFile) ? readJSON(recordFile) : null;
const out = existing ?? {status: 'published', published_at: live?.checked_at ?? null, owner_authorization: a.authorization ?? null, deployment: a.deployment ?? null,
  previous_production: a.previous ?? null, rollback: a.previous ? `vercel rollback ${a.previous} --scope team_qSB41Q0YIPL29XCzvsxgu91R` : null, release_folder: D, pages: shipped,
  checks: `release build: ${build?.status ?? 'unknown'} for ${shipped.length} pages; package drift ${pkg ? pkg.drift.length : 'unknown'}; live: verify-live ${live?.status ?? 'not run'} for ${live ? live.pages.filter(p => p.status === 'pass').length : 0}/${shipped.length}, public processing ${live?.public_processing?.status ?? 'not run'}`};
out.working_sync = sync;
writeJSON(recordFile, out);
console.log(JSON.stringify({release: name, record: path.relative(W, recordFile), pages_updated: sync.pages.filter(p => p.changed).length, pages: sync.pages.length, records_added: sync.records.length, kept_diverged: sync.kept_diverged.length, registries: sync.registries}, null, 1));
