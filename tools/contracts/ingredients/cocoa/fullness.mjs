// Cocoa evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// here with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse, parseCSV} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {cocoaOccurrence, auditDir, GEMS, FDA, FORMS, refKey} from './source-adapter.mjs';

export const ledgerDir = 'data/evidence/contracts/cocoa';
const formOfLabel = Object.fromEntries(Object.entries(FORMS).map(([k, v]) => [v.label, k]));
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaFile = (root, p) => sha(fs.readFileSync(path.isAbsolute(p) ? p : path.join(root, p)));
const rel = (root, p) => path.relative(root, p);
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', tHg: 'total mercury', Ni: 'total nickel', Cr: 'total chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium'};

function primaryCopy(root, sid) {
  for (const ext of ['txt', 'md']) { const p = `${auditDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p))) return p; }
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-cocoa-records.csv`;
  const x = fs.existsSync(path.join(root, auditDir, 'extraction', `${sid}.json`)) ? JSON.parse(fs.readFileSync(path.join(root, auditDir, 'extraction', `${sid}.json`), 'utf8')) : null;
  for (const c of [x?.text_copy, x?.primary_artifact]) if (typeof c === 'string' && c) { const abs = path.isAbsolute(c) ? c : fs.existsSync(path.join(root, c)) ? path.join(root, c) : path.join(root, auditDir, c); if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return path.isAbsolute(c) ? c : path.relative(root, abs); }
  if (sid === FDA) return `${auditDir}/primary/fda-elements.txt`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['cocoa']}), 'cocoa');
  const occ = cocoaOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const context = {}, extra = {};
  const gemsRows = read('gemsfood-row-dispositions.json'), fdaDecisions = read('fda-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  const sourceIDs = new Set([...universe.items.filter(i => i.kind === 'source').map(i => i.source_id), ...Object.keys(extraction)]);
  const universeByID = new Map(universe.items.map(i => [i.id, i]));
  for (const sid of [...sourceIDs].sort()) {
    const id = `source:${sid}`, u = universeByID.get(id), recordPath = u?.path ?? `wiki/sources/${sid}.md`;
    if (!fs.existsSync(path.join(root, recordPath))) { errors.push(`${sid}: no source record`); continue; }
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid], c = context[sid], e = extra[sid];
    if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      Object.assign(base, {disposition: x.disposition.startsWith('duplicate_of:') && !x.disposition.startsWith('duplicate_of:source:') ? x.disposition.replace('duplicate_of:', 'duplicate_of:source:') : x.disposition, rationale: x.disposition_reason,
        locators: [locator(root, copy ?? recordPath, 'page', x.disposition_locator)], result_ids: x.disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: x.disposition === 'occurrence_extracted'});
      if (x.disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
      if (x.disposition === 'access_blocked') errors.push(`${sid}: access_blocked needs dated retrieval attempts (not expected for cocoa)`);
    } else if (e) {
      Object.assign(base, {disposition: e.disposition.startsWith('duplicate_of:') && !e.disposition.startsWith('duplicate_of:source:') ? e.disposition.replace('duplicate_of:', 'duplicate_of:source:') : e.disposition, rationale: e.reason, locators: [locator(root, copy ?? recordPath, 'page', e.locator)]});
    }
    else if (c) {
      Object.assign(base, {disposition: c.disposition, rationale: c.reason || c.disposition_reason, locators: [locator(root, copy ?? recordPath, 'page', c.locator || c.disposition_locator)]});
    } else if (/^sources\/categories\//.test(recordPath.replace('wiki/', ''))) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Regional catalogue page that lists source records by geography; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
    } else if (sid === 'index') {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Site-wide source catalogue listing every source record; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
    } else { errors.push(`${sid}: no content-based disposition`); continue; }
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- indexed dataset rows
  const fileSha = new Map();
  const rowLocator = u => { const p = path.join(root, u.path); const physical = fs.existsSync(p) ? p : path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw', u.path.replace(/^raw\//, ''));
    if (!fileSha.has(physical)) fileSha.set(physical, shaFile(root, physical)); return {artifact: fs.existsSync(p) ? u.path : physical, sha256: fileSha.get(physical), kind: 'cell', location: u.row_locator}; };
  const gemsResultIDs = new Map();
  for (const u of universe.items.filter(i => i.kind === 'dataset_row')) {
    const base = {id: u.id, source_id: u.source_id, family_id: u.source_id, content_sha256: u.sha256, decision_basis: 'primary_text', locators: [rowLocator(u)], result_ids: [], extraction_complete: false};
    if (u.source_id === GEMS && gemsRows[u.id]) {
      const d = gemsRows[u.id];
      Object.assign(base, {disposition: d.disposition, rationale: d.rationale});
      if (d.disposition === 'occurrence_extracted') {
        const r = resultByFinding.get(d.result_finding);
        if (!r) { errors.push(`${u.id}: GEMS result ${d.result_finding} not rendered`); continue; }
        base.result_ids = [r.result_id]; base.extraction_complete = true;
        if (!gemsResultIDs.has(r.result_id)) gemsResultIDs.set(r.result_id, []); gemsResultIDs.get(r.result_id).push(u.id);
      }
    } else if (u.source_id === FDA && fdaDecisions[u.id]) {
      const d = fdaDecisions[u.id];
      Object.assign(base, {disposition: d.disposition, rationale: d.rationale});
      if (d.disposition === 'occurrence_extracted') {
        const r = resultByFinding.get(d.result_finding);
        if (!r) { errors.push(`${u.id}: FDA result ${d.result_finding} not rendered`); continue; }
        base.result_ids = [r.result_id]; base.extraction_complete = true;
      }
    } else if (u.source_id.startsWith('ingredient-synthesis:')) {
      Object.assign(base, {disposition: 'context_only', rationale: 'Legacy HMI commodity-synthesis row derived from earlier source values; superseded by this ledger’s primary-text extraction and not used as evidence.'});
    } else if (u.path.endsWith('standards-outlier-adjudication.csv') && !itemByID.has(`source:${u.source_id}`)) {
      Object.assign(base, {disposition: 'context_only', rationale: 'Internal adjudication note about earlier cocoa values (not a source record or a measurement); the underlying sources are decided individually in this ledger.'});
    } else if (u.source_id === 'hands2024-dark-chocolate-cocoa-heavy-metals-usa') {
      Object.assign(base, {disposition: 'duplicate_of:source:hands2024-multiyear-dark-chocolate-cocoa-usa', rationale: 'Index row naming an earlier identifier of the Hands 2024 paper; the source record hands2024-multiyear-dark-chocolate-cocoa-usa is the decided item.'});
    } else if (itemByID.has(`source:${u.source_id}`)) {
      Object.assign(base, {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating values from ${u.source_id}; the source record is the decided ledger item.`});
    } else if (u.source_id === GEMS) {
      Object.assign(base, {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary or index row restating individual submissions decided elsewhere in this ledger.'});
    } else { errors.push(`${u.id}: undecided dataset row`); continue; }
    items.push(base);
  }

  // Duplicate destinations decided by the cocoa dataset pass that the shared discovery did
  // not list (local food names such as Kakao or Schokolade) become ledger items too.
  const ids = new Set(items.map(i => i.id)), lineCache = new Map();
  const rowText = (file, n) => { if (!lineCache.has(file)) lineCache.set(file, fs.readFileSync(file, 'utf8').split(/\r?\n/)); return lineCache.get(file)[n - 1]; };
  for (const it of [...items]) {
    const target = it.disposition?.startsWith('duplicate_of:dataset:') ? it.disposition.slice(13) : null;
    if (!target || ids.has(target)) continue;
    const d = gemsRows[target];
    if (!d) { errors.push(`${it.id}: duplicate destination ${target} undecided`); continue; }
    const [, rel, n] = target.match(/^dataset:(raw\/.+)#row (\d+)$/);
    const physical = path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw', rel.replace(/^raw\//, ''));
    const extra = {id: target, source_id: GEMS, family_id: GEMS, content_sha256: sha(rowText(physical, +n)), decision_basis: 'primary_text',
      locators: [rowLocator({path: rel, row_locator: `row ${n}`})], disposition: d.disposition, rationale: d.rationale, result_ids: [], extraction_complete: false};
    if (d.disposition === 'occurrence_extracted') {
      const r = resultByFinding.get(d.result_finding);
      if (!r) { errors.push(`${target}: GEMS result ${d.result_finding} not rendered`); continue; }
      extra.result_ids = [r.result_id]; extra.extraction_complete = true;
      if (!gemsResultIDs.has(r.result_id)) gemsResultIDs.set(r.result_id, []); gemsResultIDs.get(r.result_id).push(target);
    }
    items.push(extra); ids.add(target);
  }

  // ---------------------------------------------------------------- results
  const unitsByResult = new Map();
  const units = [];
  for (const ref of occ.record.references) {
    const def = ref.distribution;
    for (const u of def.units ?? []) {
      const src = occ.unit_list.find(x => x.ref_key === ref.id.split(':')[1] && x.id === u.id);
      const id = `${ref.id.split(':')[1]}:${u.id}`;
      const scope = {analyte: src.analyte, material: FORMS[src.form_group].label, basis: FORMS[src.form_group].basis, unit: 'µg/kg'};
      const copy = primaryCopy(root, u.family) ?? `wiki/sources/${u.family}.md`;
      const unit = {id, item_id: `source:${u.family}`, family_id: u.family, scope, statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper, locator: locator(root, copy, 'table', u.locator)};
      units.push(unit);
      if (!unitsByResult.has(src.result_id)) unitsByResult.set(src.result_id, []); unitsByResult.get(src.result_id).push(id);
    }
  }
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = r.profile.variants['::'].median, copy = primaryCopy(root, r.source) ?? `wiki/sources/${r.source}.md`;
    const p = r.primary;
    const lower = t?.lower ?? (Number.isFinite(p.min_ug_kg) ? p.min_ug_kg : null), upper = t?.upper ?? (Number.isFinite(p.max_ug_kg) ? p.max_ug_kg : null);
    const comparison = {state: r.comparison_state, attempts: r.comparison_attempts};
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(gemsResultIDs.get(r.result_id) ?? []), ...items.filter(i => i.source_id === FDA && i.result_ids.includes(r.result_id) && i.id.startsWith('dataset:')).map(i => i.id)],
      family_id: r.source, scope: {analyte: r.analyte, material: r.food, basis: r.basis, unit: r.unit},
      form: String(r.food), origin_or_market: `${r.group_full} (${r.region_type})`, year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte,
      statistic: r.statistic, basis: r.basis, n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring), unit: r.unit, value: Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null),
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(root, copy, 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison};
  });

  // ---------------------------------------------------------------- references (one assessment per result scope)
  const scopeKey = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const resultsByScope = Map.groupBy(results, r => scopeKey(r.scope));
  const refs = [];
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  for (const [key, scoped] of resultsByScope) {
    const [analyte, material, basis, unit] = JSON.parse(key);
    const g = formOfLabel[material];
    const record = occ.record.references.find(x => x.id.includes(`:${refKey(g, analyte)}:`) && unit === 'µg/kg');
    const id = record?.id ?? `cocoa-assessment:${g}:${analyte}:${unit}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const rowByID = new Map(occ.rows.map(r => [r.result_id, r]));
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => { const row = rowByID.get(r.id); return {result_id: r.id,
      scientific_reason: row.hold ? 'The value fails an integrity check against its own paper, so it cannot enter a reference.'
        : row.secondary ? 'The value is quoted from another study rather than measured by this source; it would double-count or misattribute samples.'
        : /^(efsa|jecfa)/.test(r.family_id) ? 'EFSA and JECFA summarise national monitoring submissions that also reach WHO GEMS/Food; admitting them would count the same samples twice.'
        : r.family_id.startsWith('abt2020') ? 'The perspective reprints Abt 2018 origin means and single unpublished results; Abt 2018 samples already enter the reference.'
        : `${r.family_id} reports ${r.statistic.replace('_', ' ')} values; only observed subgroup medians, single results or individual sample values can enter a reference.`,
      locator: r.locator}; });
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_');
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 2) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material, basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(single ? [`This is the only compatible family for ${analyte} in ${material.toLowerCase()} in the completed cocoa ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'cocoa', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
  const parsed = evidenceLedgerSchema.safeParse(ledger);
  if (!parsed.success) errors.push(...parsed.error.issues.slice(0, 20).map(i => `schema ${i.path.join('.')}: ${i.message}`));
  return {ledger, universe, errors};
}

export function writeLedger(root) {
  const {ledger, universe, errors} = buildLedger(root);
  if (errors.length) throw Error('Ledger errors:\n' + errors.slice(0, 40).join('\n'));
  fs.mkdirSync(path.join(root, ledgerDir), {recursive: true});
  fs.writeFileSync(path.join(root, ledgerDir, 'evidence-ledger.json'), JSON.stringify(ledger) + '\n');
  return {ledger, universe};
}

// The scorecard is written only from the exact final HTML, then the gate runs on it.
export function scoreAndGate(root, htmlPath) {
  const {ledger, universe} = writeLedger(root);
  const page = inspectFullnessHTML(fs.readFileSync(htmlPath, 'utf8'));
  const scorecard = buildFullnessScorecard('cocoa', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'cocoa', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); console.log(JSON.stringify({items: ledger.items.length, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
