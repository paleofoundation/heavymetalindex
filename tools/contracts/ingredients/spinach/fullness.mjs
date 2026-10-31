// Spinach evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed here
// with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse, parseCSV} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {spinachOccurrence, auditDir, leafyDir, extractionPath, SETTING_LABEL, referenceSetting, GEMS, FDA} from './source-adapter.mjs';

export const ledgerDir = 'data/evidence/contracts/spinach';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaCache = new Map();
const shaFile = (root, p) => { const f = path.isAbsolute(p) ? p : path.join(root, p); if (!shaCache.has(f)) shaCache.set(f, sha(fs.readFileSync(f))); return shaCache.get(f); };
const now = '2026-10-22T16:30:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', tHg: 'total mercury', MeHg: 'methylmercury', Ni: 'total nickel', Cr: 'total chromium', CrVI: 'hexavalent chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium'};
const CATALOGUE = new Set(['east-southeast-asia', 'europe', 'index', 'international', 'middle-east-north-africa', 'north-america', 'south-central-asia', 'sub-saharan-africa']);

function primaryCopy(root, sid) {
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-spinach-records.csv`;
  if (sid === FDA) return `${auditDir}/primary/fda-elements.txt`;
  for (const ext of ['txt', 'md']) { const p = `${leafyDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p)) && fs.statSync(path.join(root, p)).size > 0) return p; }
  if (sid === FDA) return `${auditDir}/primary/fda-elements.txt`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['spinach']}), 'spinach');
  const occ = spinachOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const readLeafy = f => JSON.parse(fs.readFileSync(path.join(root, leafyDir, f), 'utf8'));
  const files = [...new Set([...fs.readdirSync(path.join(root, leafyDir, 'extraction')), ...fs.readdirSync(path.join(root, auditDir, 'extraction'))])].filter(f => f.endsWith('.json'));
  const extraction = Object.fromEntries(files.map(f => { const x = JSON.parse(fs.readFileSync(path.join(root, extractionPath(null, f)), 'utf8')); return [x.source_id, x]; }));
  // Spinach-specific content decisions (spinach-dispositions.json) take precedence over the leafy-greens records they re-decide.
  const extra = {...Object.fromEntries(readLeafy('ledger-dispositions.json').map(x => [x.source_id, {...x, artifact: x.artifact}])), ...Object.fromEntries(read('spinach-dispositions.json').map(x => [x.source_id, x]))};
  const access = fs.existsSync(path.join(root, auditDir, 'access-blocked.json')) ? read('access-blocked.json') : {};
  const rowDisp = read('dataset-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const settingByResult = new Map(occ.rows.map(r => [r.result_id, r.setting]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  // Dataset families (GEMS/Food, FDA TDS) own their indexed rows; their source records join the ledger as in honey.
  // Sources with spinach results that discovery's aliases miss join the ledger too (alias request in shared-requests.json).
  const sourceIDs = new Set([...universe.items.filter(i => i.kind === 'source').map(i => i.source_id), GEMS, FDA, ...occ.rows.map(r => r.source)]);
  const universeByID = new Map(universe.items.map(i => [i.id, i]));
  for (const sid of [...sourceIDs].sort()) {
    const id = `source:${sid}`, u = universeByID.get(id), recordPath = u?.path ?? `wiki/sources/${sid}.md`;
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid], e = extra[sid];
    if (CATALOGUE.has(sid)) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Regional or master catalogue page that lists source records; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
    } else if (e) {
      Object.assign(base, {disposition: e.disposition, rationale: e.reason, locators: [locator(root, e.artifact ?? copy ?? recordPath, 'page', e.locator)]});
    } else if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      let disposition = x.disposition, rationale = x.disposition_reason;
      if (disposition === 'occurrence_extracted' && !results.length) { errors.push(`${sid}: leafy occurrence record without spinach results needs a spinach-dispositions.json decision`); continue; }
      Object.assign(base, {disposition: disposition.startsWith('duplicate_of:') && !disposition.startsWith('duplicate_of:source:') ? disposition.replace('duplicate_of:', 'duplicate_of:source:') : disposition,
        rationale, locators: [locator(root, copy ?? recordPath, 'page', x.disposition_locator)], result_ids: disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: disposition === 'occurrence_extracted'});
    } else { errors.push(`${sid}: no content-based disposition`); continue; }
    if (base.disposition === 'access_blocked') {
      const a = access[sid];
      if (!a) { errors.push(`${sid}: access_blocked without recorded retrieval attempts`); continue; }
      base.retrieval_attempts = a.attempts; base.retrieval_request = a.request;
    }
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- indexed dataset rows
  const babyRows = new Map();
  { const p = 'data/evidence/category1_fda_baby_food_compliance_samples.csv';
    parseCSV(fs.readFileSync(path.join(root, p), 'utf8')).forEach((r, i) => babyRows.set(`dataset:${p}#row ${i + 2}`, r)); }
  const rowLocator = u => { const p = path.join(root, u.path); const physical = fs.existsSync(p) ? p : path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw', u.path.replace(/^raw\//, ''));
    return {artifact: fs.existsSync(p) ? u.path : physical, sha256: shaFile(root, physical), kind: 'cell', location: u.row_locator}; };
  const datasetResultIDs = new Map();
  for (const u of universe.items.filter(i => i.kind === 'dataset_row')) {
    const base = {id: u.id, source_id: u.source_id, family_id: u.source_id, content_sha256: u.sha256, decision_basis: 'primary_text', locators: [rowLocator(u)], result_ids: [], extraction_complete: false};
    const d = rowDisp[u.id];
    if (d && [GEMS, FDA].includes(u.source_id)) {
      Object.assign(base, {disposition: d.disposition.startsWith('duplicate_of:') ? d.disposition : d.disposition, rationale: d.rationale});
      if (d.disposition === 'occurrence_extracted') {
        const r = resultByFinding.get(d.result_finding);
        if (!r) { errors.push(`${u.id}: dataset result ${d.result_finding} not rendered`); continue; }
        base.result_ids = [r.result_id]; base.extraction_complete = true;
        if (!datasetResultIDs.has(r.result_id)) datasetResultIDs.set(r.result_id, []); datasetResultIDs.get(r.result_id).push(u.id);
      }
    } else if (babyRows.has(u.id)) {
      const r = babyRows.get(u.id);
      Object.assign(base, {disposition: 'out_of_scope', rationale: `FDA baby-food compliance sample "${r.baby_food_name}": a mixed infant food that lists spinach or another vegetable among other ingredients; the result cannot be attributed to spinach.`});
    } else if (u.source_id === 'ec2004-scoop-heavy-metals-dietary-exposure') {
      Object.assign(base, {disposition: 'context_only', rationale: 'Routing or re-ingest queue row naming the 2004 SCOOP dietary-exposure report for vegetable product pages; an HMI index entry, not a spinach measurement.'});
    } else if (u.source_id === 'ingredient-synthesis:leafy-greens') {
      Object.assign(base, {disposition: 'context_only', rationale: 'Legacy HMI commodity-synthesis row derived from earlier source values; superseded by this ledger’s primary-text extraction and not used as evidence.'});
    } else if (itemByID.has(`source:${u.source_id}`)) {
      Object.assign(base, {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating values from ${u.source_id}; the source record is the decided ledger item.`});
    } else if (u.source_id === GEMS) {
      Object.assign(base, {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary or index row restating individual submissions decided elsewhere in this ledger.'});
    } else { errors.push(`${u.id}: undecided dataset row (${u.source_id})`); continue; }
    if (base.disposition.startsWith('duplicate_of:') && !base.disposition.startsWith('duplicate_of:source:') && !base.disposition.startsWith('duplicate_of:dataset:')) base.disposition = base.disposition.replace('duplicate_of:', 'duplicate_of:');
    items.push(base);
  }
  // A duplicate must point at a ledger item; GEMS duplicates point at the extracted row or, if that row was not discovered, at the source record.
  const allIDs = new Set(items.map(i => i.id));
  for (const i of items) if (i.disposition.startsWith('duplicate_of:')) { const t = i.disposition.slice('duplicate_of:'.length); if (!allIDs.has(t)) { i.rationale += ` (The retained copy ${t} is not itself in the discovered universe; the source record is the decided item.)`; i.disposition = `duplicate_of:source:${i.source_id}`; } }

  // ---------------------------------------------------------------- results
  const unitsByResult = new Map();
  const units = [];
  for (const ref of occ.record.references) {
    for (const u of ref.distribution.units ?? []) {
      const key = ref.id.split(':')[1];
      const src = occ.unit_list.find(x => x.ref_key === key && x.id === u.id);
      const id = `${key}:${u.id}`;
      const scope = {analyte: src.analyte, material: src.material, basis: src.basis, unit: 'µg/kg'};
      const copy = primaryCopy(root, u.family) ?? `wiki/sources/${u.family}.md`;
      const unit = {id, item_id: `source:${u.family}`, family_id: u.family, scope, statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper, locator: locator(root, copy, 'table', u.locator)};
      units.push(unit);
      if (!unitsByResult.has(src.result_id)) unitsByResult.set(src.result_id, []); unitsByResult.get(src.result_id).push(id);
    }
  }
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = r.profile.variants['::'].median, copy = primaryCopy(root, r.source) ?? `wiki/sources/${r.source}.md`;
    const p = r.primary;
    const lower = t?.lower ?? (r.unit === 'µg/kg' && Number.isFinite(p.min_ug_kg) ? p.min_ug_kg : null), upper = t?.upper ?? (r.unit === 'µg/kg' && Number.isFinite(p.max_ug_kg) ? p.max_ug_kg : null);
    const comparison = {state: r.comparison_state, attempts: r.comparison_attempts};
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    const value = Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null);
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(datasetResultIDs.get(r.result_id) ?? [])],
      family_id: r.source, scope: {analyte: r.analyte, material: r.ref_material, basis: r.basis, unit: r.unit},
      form: String(r.food), origin_or_market: `${r.group_full} (${r.region_type})`, year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte,
      statistic: String(r.statistic), basis: r.basis, n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring), unit: r.unit, value: Number.isFinite(value) ? value : null,
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(root, copy, 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison};
  });

  // ---------------------------------------------------------------- references (one assessment per result scope)
  const scopeKey = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const resultsByScope = Map.groupBy(results, r => scopeKey(r.scope));
  const keyOf = (a, m, b) => `spinach-${a}-${m}-${b}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const refs = [];
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  for (const f of fs.readdirSync(path.join(root, ledgerDir, 'references'))) fs.rmSync(path.join(root, ledgerDir, 'references', f));
  for (const [key, scoped] of resultsByScope) {
    const [analyte, material, basis, unit] = JSON.parse(key);
    const k = keyOf(analyte, material, basis);
    const record = unit === 'µg/kg' ? occ.record.references.find(x => x.id.split(':')[1] === k) : null;
    const id = record?.id ?? `spinach-assessment:${analyte}:${material}:${basis}:${unit}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => ({result_id: r.id,
      scientific_reason: unit !== 'µg/kg' ? `Reported in ${unit}, which cannot be expressed as µg/kg of spinach without an assumption.`
        : !referenceSetting(settingByResult.get(r.id)) ? `${SETTING_LABEL[settingByResult.get(r.id)]}: positioned against the ordinary-occurrence reference as an external target but never part of it, because the reference describes retail, monitoring and ordinary farm spinach.`
        : basis === 'Basis not stated' ? 'The source does not state fresh or dry weight; no reference can be built or applied for an unstated basis.'
        : r.comparison.reason_code === 'value_fails_source_integrity_check' ? `${r.family_id} reports a value that fails an integrity check against its own paper; held from every reference.`
        : `${r.family_id} reports ${r.statistic.replace('_', ' ')} values; only observed subgroup medians or individual sample values can enter a reference.`,
      locator: r.locator}));
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_').slice(0, 150) + '-' + sha(id).slice(0, 8);
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 1) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    shaCache.clear();
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material, basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(single ? [`This is the only compatible family for ${analyte} in ${material.toLowerCase()} (${basis.toLowerCase()}) in the completed spinach ledger.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'spinach', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
  const parsed = evidenceLedgerSchema.safeParse(ledger);
  if (!parsed.success) errors.push(...parsed.error.issues.slice(0, 20).map(i => `schema ${i.path.join('.')}: ${i.message}`));
  return {ledger, universe, errors, occ};
}

export function writeLedger(root) {
  const {ledger, universe, errors, occ} = buildLedger(root);
  if (errors.length) throw Error(`Ledger errors (${errors.length}):\n` + errors.slice(0, 40).join('\n'));
  fs.mkdirSync(path.join(root, ledgerDir), {recursive: true});
  fs.writeFileSync(path.join(root, ledgerDir, 'evidence-ledger.json'), JSON.stringify(ledger) + '\n');
  return {ledger, universe, occ};
}

// The scorecard is written only from the exact final HTML, then the gate runs on it.
export function scoreAndGate(root, htmlPath) {
  const {ledger, universe} = writeLedger(root);
  const page = inspectFullnessHTML(fs.readFileSync(htmlPath, 'utf8'));
  const scorecard = buildFullnessScorecard('spinach', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 1) + '\n');
  return evaluateIngredientFullness({ingredient: 'spinach', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); const d = {}; for (const i of ledger.items) { const k = i.disposition.split(':')[0]; d[k] = (d[k] || 0) + 1; } console.log(JSON.stringify({items: ledger.items.length, dispositions: d, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
