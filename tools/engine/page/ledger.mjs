// Shared-schema evidence ledger for an engine page: every independently discovered
// item with its recorded content decision, every rendered result, reference units,
// one reference assessment per result scope, and the scorecard from the final HTML.
import fs from 'node:fs';
import path from 'node:path';
import { evidenceLedgerSchema } from '../../contracts/ingredient-evidence-ledger.mjs';
import { frozenMembershipHash } from '../../audit-ingredient-fullness.mjs';
import { root, GEMS, FDA, BUILD_DATE, sha, shaFile, exists, SPECIES, sourceMeta } from './common.mjs';
import { rowTarget } from './model.mjs';

const DISPOSITION = { context: 'context_only', no_numeric_results: 'out_of_scope' };
const locator = (artifact, kind, location) => ({ artifact, sha256: shaFile(artifact), kind, location: String(location || 'whole document').slice(0, 500) });

function artifactFor(evidence, sid) {
  const src = evidence.sources.get(sid);
  if (sid === GEMS && evidence.gems_records_path) return evidence.dir && exists(`${evidence.dir}/primary/gemsfood-${evidence.page.slug}-records.csv`) ? `${evidence.dir}/primary/gemsfood-${evidence.page.slug}-records.csv` : evidence.gems_records_path;
  if (src?.text_copy && exists(src.text_copy)) return src.text_copy;
  return exists(`wiki/sources/${sid}.md`) ? `wiki/sources/${sid}.md` : src?.file;
}

// Replace a folder by renaming a fully written one into place.
export function swapDir(tmpRel, finalRel) {
  const final = path.join(root, finalRel), old = `${final}.old-${process.pid}-${Date.now()}`;
  if (fs.existsSync(final)) fs.renameSync(final, old);
  fs.renameSync(path.join(root, tmpRel), final);
  if (fs.existsSync(old)) try { fs.rmSync(old, { recursive: true, force: true }); } catch { /* a reader still holds it; left for the next build */ }
}
// Very large ledgers exceed the largest string, so they are written one record at a time.
export function writeLedgerFile(rel, ledger) {
  const abs = path.join(root, rel), tmp = `${abs}.tmp-${process.pid}`;
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const fd = fs.openSync(tmp, 'w');
  const { items, results, reference_units, references, ...head } = ledger;
  fs.writeSync(fd, JSON.stringify(head).slice(0, -1));
  for (const [key, list] of Object.entries({ items, results, reference_units, references })) {
    fs.writeSync(fd, `,${JSON.stringify(key)}:[`);
    list.forEach((x, i) => fs.writeSync(fd, (i ? ',' : '') + JSON.stringify(x)));
    fs.writeSync(fd, ']');
  }
  fs.writeSync(fd, '}\n');
  fs.closeSync(fd);
  fs.renameSync(tmp, abs);
}

// Navigation pages list sources; they are not sources.
function navigationDecision(u) {
  if (!/^wiki\/sources\/(?:index\.md$|categories\/)/.test(u.path ?? '')) return null;
  return { disposition: 'out_of_scope', rationale: 'Navigation index page listing sources, not a source.', decision_basis: 'primary_text', locators: [locator(u.path, 'page', 'whole page')], result_findings: [] };
}

export function buildLedger(evidence, occ, universe, refDir) {
  const { slug } = evidence.page;
  const errors = [], undecided = [];
  const rowsBySource = Map.groupBy(occ.rows, r => r.source);
  const rowByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], universeIDs = new Set(universe.items.map(i => i.id));
  const resultItems = new Map();
  const own = (rid, iid) => { if (!resultItems.has(rid)) resultItems.set(rid, []); resultItems.get(rid).push(iid); };

  const decide = (u, kind) => {
    const sid = u.source_id, src = kind === 'source' ? evidence.sources.get(sid) : null;
    const d = evidence.decisions.get(u.id) ?? (kind === 'source' ? (src ? null : navigationDecision(u) ?? evidence.sourceDecision?.(sid)) : evidence.rowDecision?.(u.id, u));
    const base = { id: u.id, source_id: sid, family_id: sid, content_sha256: u.sha256 ?? shaFile(`wiki/sources/${sid}.md`), decision_basis: 'primary_text', result_ids: [], extraction_complete: false };
    if (src && src.disposition === 'occurrence_extracted' && rowsBySource.has(sid)) {
      // A source record owns every finding extracted from it.
      Object.assign(base, { disposition: 'occurrence_extracted', rationale: src.disposition_reason || d?.rationale || 'Occurrence values extracted from the primary text.',
        locators: d?.locators?.length ? d.locators : [locator(artifactFor(evidence, sid), 'page', src.disposition_locator)], result_ids: rowsBySource.get(sid).map(r => r.result_id), extraction_complete: true });
    } else if (d) {
      const results = d.disposition === 'occurrence_extracted' ? d.result_findings.map(f => rowByFinding.get(f)?.result_id).filter(Boolean) : [];
      Object.assign(base, { disposition: d.disposition, rationale: d.rationale, locators: d.locators, result_ids: results, extraction_complete: d.disposition === 'occurrence_extracted' && results.length > 0 });
      if (d.retrieval_attempts) base.retrieval_attempts = d.retrieval_attempts;
      if (d.retrieval_request) base.retrieval_request = d.retrieval_request;
      if (d.disposition === 'occurrence_extracted' && !results.length) errors.push(`${u.id}: recorded as extracted but none of its results is rendered`);
    } else if (src) {
      const disposition = DISPOSITION[src.disposition] ?? src.disposition;
      Object.assign(base, { disposition, rationale: src.disposition_reason || 'Content-based decision recorded in the extraction file.', locators: [locator(artifactFor(evidence, sid), 'page', src.disposition_locator)] });
      if (src.retrieval) Object.assign(base, { retrieval_attempts: src.retrieval.attempts, retrieval_request: src.retrieval.request });
    } else { undecided.push(u.id); return null; }
    for (const rid of base.result_ids) own(rid, base.id);
    return base;
  };
  for (const u of universe.items) { const it = decide(u, u.kind === 'source' ? 'source' : 'dataset'); if (it) items.push(it); }
  // Extracted families whose own record is not tagged with this page still need an item.
  for (const sid of rowsBySource.keys()) {
    const id = `source:${sid}`;
    if (universeIDs.has(id)) continue;
    const it = decide({ id, source_id: sid, sha256: exists(`wiki/sources/${sid}.md`) ? shaFile(`wiki/sources/${sid}.md`) : shaFile(evidence.sources.get(sid)?.file) }, 'source');
    if (it) items.push(it);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));
  // A recorded duplicate points at another decided record; carry that record too.
  for (let k = 0; k < items.length; k++) {
    const target = items[k].disposition.startsWith('duplicate_of:') ? items[k].disposition.slice(13) : null;
    if (!target || itemByID.has(target)) continue;
    const sid = target.replace(/^source:/, ''), d = evidence.decisions.get(target);
    const storeDecision = !d && target.startsWith('source:') && !evidence.sources.has(sid) ? evidence.sourceDecision?.(sid) : null;
    if (!d && !storeDecision && !(target.startsWith('source:') && evidence.sources.has(sid))) continue;
    const f = target.startsWith('source:') ? `wiki/sources/${sid}.md` : null;
    const it = decide({ id: target, source_id: d?.source_id ?? sid, sha256: d?.content_sha256 ?? (f && exists(f) ? shaFile(f) : null) }, target.startsWith('source:') ? 'source' : 'dataset');
    if (it?.content_sha256) { items.push(it); itemByID.set(it.id, it); }
  }
  for (const i of items) if (i.disposition.startsWith('duplicate_of:') && !itemByID.has(i.disposition.slice(13))) errors.push(`${i.id}: duplicate destination ${i.disposition.slice(13)} is not decided in this ledger`);

  // ---------------------------------------------------------------- reference units
  const units = [], unitsByResult = new Map();
  const refByKey = new Map(occ.record.references.map(r => [r.id.split(':')[1], r]));
  for (const u of occ.unit_list) {
    const owner = occ.rows.find(r => r.result_id === u.result_id);
    const id = `${u.def_key}:${u.id}`;
    const ref = refByKey.get(u.def_key), dist = ref?.distribution.units.find(x => x.id === u.id);
    if (!dist) { errors.push(`${id}: unit missing from its reference distribution`); continue; }
    units.push({ id, item_id: `source:${u.family}`, family_id: u.family, scope: { analyte: owner.analyte, material: owner.material_key, basis: owner.basis, unit: 'µg/kg' },
      statistic: 'median', value: dist.lower === dist.upper ? dist.lower : null, lower_bound: dist.lower, upper_bound: dist.upper, locator: locator(artifactFor(evidence, u.family), 'table', u.locator) });
    if (!unitsByResult.has(u.result_id)) unitsByResult.set(u.result_id, []); unitsByResult.get(u.result_id).push(id);
  }

  // ---------------------------------------------------------------- results
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = r.profile.variants['::'].median, f = r.primary;
    const lower = t?.lower ?? (Number.isFinite(f.min) ? f.min : null), upper = t?.upper ?? (Number.isFinite(f.max) ? f.max : null);
    const comparison = { state: r.comparison_state, attempts: r.comparison_attempts };
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    const item_ids = [`source:${r.source}`, ...(resultItems.get(r.result_id) ?? []).filter(i => i !== `source:${r.source}`)];
    return { id: r.result_id, item_ids, family_id: r.source, scope: { analyte: r.analyte, material: r.material_key, basis: r.basis, unit: r.unit },
      form: String(r.material_full || r.food), origin_or_market: r.origin ?? `${r.group_full} (${r.region_type})`, year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte,
      statistic: r.statistic, basis: r.basis, n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring), unit: r.unit, value: Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null),
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(artifactFor(evidence, r.source), 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison };
  });

  // ---------------------------------------------------------------- references: one assessment per result scope
  const scopeKey = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const resultsByScope = Map.groupBy(results, r => scopeKey(r.scope));
  const audit = new Map(occ.unit_audit.map(a => [a.unit, a.reason]));
  const refs = [];
  // Artifacts are written to a private folder and renamed into place, so a reader or a
  // concurrent build never sees a half-emptied references folder.
  const tmpRefs = `${refDir}.tmp-${process.pid}-${Date.now()}`;
  fs.mkdirSync(path.join(root, tmpRefs), { recursive: true });
  for (const [key, scoped] of resultsByScope) {
    const [analyte, material, basis, unit] = JSON.parse(key);
    const record = occ.record.references.find(x => scoped.some(r => r.comparison.reference_id === x.id))
      ?? occ.record.references.find(x => units.some(u => scopeKey(u.scope) === key && u.id.startsWith(x.id.split(':')[1] + ':')));
    const id = record?.id ?? `${slug}-assessment:${analyte}:${material}:${basis}`;
    const included = units.filter(u => scopeKey(u.scope) === key), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => {
      const row = occ.rows.find(x => x.result_id === r.id);
      return { result_id: r.id, scientific_reason: `${sourceMeta(r.family_id).label}: ${audit.get(row.finding_id) ?? (row.basis_key === 'unstated' ? 'basis not stated, so it cannot join an as-sold, fresh-weight or dry-weight reference' : `${r.statistic.replace(/_/g, ' ')} values; only observed subgroup medians or individual sample values can enter a reference`)}.`, locator: r.locator };
    });
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_').slice(0, 120);
    const write = (name, body) => { const f = `${safe}-${name}.json`, text = JSON.stringify(body, null, 2) + '\n'; fs.writeFileSync(path.join(root, tmpRefs, f), text); return { artifact: `${refDir}/${f}`, sha256: sha(text) }; };
    refs.push({ id, scope: { analyte, material, basis, unit }, unit_ids: included.map(u => u.id).sort(), family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? { label: record.sensitivity?.label, distribution: record.sensitivity?.distribution } : { note: 'No reference units in this scope; no sensitivity analysis applies.' }),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : { note: 'No reference units in this scope; no leave-one-out analysis applies.' }),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(families.length === 1 ? [`This is the only compatible family for ${analyte} in ${material} on this basis in the completed ledger; a single-family reference cannot represent other markets.`] : []),
        ...(included.length && included.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])] });
  }
  swapDir(tmpRefs, refDir);
  const ledger = { schema_version: 1, ingredient: slug, completed_at: `${BUILD_DATE}T12:00:00Z`, items, results, reference_units: units, references: refs };
  const parsed = evidenceLedgerSchema.safeParse(ledger);
  if (!parsed.success) errors.push(...parsed.error.issues.slice(0, 20).map(i => `schema ${i.path.join('.')}: ${i.message}`));
  return { ledger, errors, undecided };
}
