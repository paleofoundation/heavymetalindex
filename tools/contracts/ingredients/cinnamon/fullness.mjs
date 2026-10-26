// Cinnamon evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// here with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse, parseCSV} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {cinnamonOccurrence, auditDir} from './source-adapter.mjs';

const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
export const ledgerDir = 'data/evidence/contracts/cinnamon';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaFile = (root, p) => sha(fs.readFileSync(path.isAbsolute(p) ? p : path.join(root, p)));
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', tHg: 'total mercury', Ni: 'total nickel', Cr: 'total chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium'};

function primaryCopy(root, sid) {
  for (const ext of ['txt', 'md']) { const p = `${auditDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p))) return p; }
  const legacy = {'tinggi2025-spices-herbs-queensland': 'tinggi.txt', 'cicero2022-minerals-spices-aromatic-herbs': 'cicero.txt', 'moussa2024-spices-herbs-lebanon': 'moussa.txt', 'napier2024-wanabana-lead-apple-cinnamon': 'napier.txt', 'troeschel2024-cinnamon-applesauce-lead': 'troeschel.txt'}[sid];
  if (legacy) return `${auditDir}/primary/${legacy}`;
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-cinnamon-records.csv`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

// Dispositions for indexed rows that are not cinnamon itself.
function datasetDecision(u, itemByID) {
  const food = String(u.food || '');
  if (u.source_id === 'ingredient-synthesis:cinnamon') return {disposition: 'context_only', rationale: 'Legacy HMI commodity-synthesis row derived from earlier source values; superseded by this ledger’s primary-text extraction and not used as evidence.'};
  if (u.source_id.startsWith('ingredient-synthesis:')) return {disposition: 'out_of_scope', rationale: `Legacy multi-spice category row for ${u.source_id.split(':')[1]}; the category label lists cinnamon among several spices, so no cinnamon value can be separated.`};
  if (u.source_id === 'fda2024-toxic-elements-baby-food-compliance-2009-2024') return {disposition: 'out_of_scope', rationale: `Infant food that contains cinnamon among other ingredients (${food.split('|').pop().trim()}); the cinnamon share is not reported, so the result is not a cinnamon concentration.`};
  if (u.source_id === FDA) return {disposition: 'out_of_scope', rationale: `The FDA Total Diet Study has no cinnamon food; this row is "${food.split('|').pop().trim()}", a prepared food that contains cinnamon, not the spice.`};
  if (u.source_id === GEMS) return {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary or index row restating individual submissions decided elsewhere in this ledger.'};
  if (itemByID.has(`source:${u.source_id}`)) return {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating values from ${u.source_id}; the source record is the decided ledger item.`};
  return null;
}

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['cinnamon']}), 'cinnamon');
  const occ = cinnamonOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const extra = fs.existsSync(path.join(root, auditDir, 'ledger-dispositions.json')) ? Object.fromEntries(read('ledger-dispositions.json').map(x => [x.source_id, x])) : {};
  const gemsRows = read('gemsfood-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  const sourceIDs = new Set([...universe.items.filter(i => i.kind === 'source').map(i => i.source_id), ...Object.keys(extraction), ...Object.keys(extra)]);
  const universeByID = new Map(universe.items.map(i => [i.id, i]));
  for (const sid of [...sourceIDs].sort()) {
    const id = `source:${sid}`, u = universeByID.get(id), recordPath = u?.path ?? `wiki/sources/${sid}.md`;
    if (!fs.existsSync(path.join(root, recordPath))) { errors.push(`${sid}: no source record`); continue; }
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid], e = extra[sid];
    if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      const artifact = copy ?? (x.primary_artifact && !Array.isArray(x.primary_sha256) && fs.existsSync(x.primary_artifact) && fs.statSync(x.primary_artifact).isFile() ? x.primary_artifact : recordPath);
      Object.assign(base, {disposition: x.disposition, rationale: x.disposition_reason,
        locators: [locator(root, artifact, 'page', x.disposition_locator)], result_ids: x.disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: x.disposition === 'occurrence_extracted'});
      if (x.disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
      if (x.disposition === 'access_blocked') { if (!e?.retrieval_attempts) errors.push(`${sid}: access_blocked without retrieval record`); else Object.assign(base, {retrieval_attempts: e.retrieval_attempts, retrieval_request: e.retrieval_request}); }
    } else if (e) {
      Object.assign(base, {disposition: e.disposition, rationale: e.reason, locators: [locator(root, e.artifact ?? copy ?? recordPath, 'page', e.locator)]});
    } else if (sid === 'index' || /^sources\/categories\//.test(recordPath.replace('wiki/', '')) || sid === 'north-america') {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Catalogue page that lists source records; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
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
      Object.assign(base, {disposition: d.disposition.startsWith('duplicate_of:') ? d.disposition : d.disposition, rationale: d.rationale});
      if (d.disposition === 'occurrence_extracted') {
        const r = resultByFinding.get(d.result_finding);
        if (!r) { errors.push(`${u.id}: GEMS result ${d.result_finding} not rendered`); continue; }
        base.result_ids = [r.result_id]; base.extraction_complete = true;
        if (!gemsResultIDs.has(r.result_id)) gemsResultIDs.set(r.result_id, []); gemsResultIDs.get(r.result_id).push(u.id);
      }
    } else {
      const d = datasetDecision(u, itemByID);
      if (!d) { errors.push(`${u.id}: undecided dataset row (${u.source_id} | ${u.food})`); continue; }
      Object.assign(base, d);
    }
    items.push(base);
  }
  // Duplicate targets must exist in the ledger.
  const ids = new Set(items.map(i => i.id));
  for (const i of items) if (i.disposition.startsWith('duplicate_of:') && !ids.has(i.disposition.slice(13))) errors.push(`${i.id}: duplicate target ${i.disposition.slice(13)} not in ledger`);

  // ---------------------------------------------------------------- results
  const unitsByResult = new Map();
  const units = [];
  for (const ref of occ.record.references) {
    const def = ref.distribution;
    for (const u of def.units ?? []) {
      const src = occ.unit_list.find(x => x.ref_key === ref.id.split(':')[1] && x.id === u.id);
      const id = `${ref.id.split(':')[1]}:${u.id}`;
      const scope = {analyte: src.analyte, material: 'cinnamon', basis: 'Dried cinnamon as sold or analysed', unit: 'µg/kg'};
      const copy = primaryCopy(root, u.family) ?? `wiki/sources/${u.family}.md`;
      units.push({id, item_id: `source:${u.family}`, family_id: u.family, scope, statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper, locator: locator(root, copy, 'table', u.locator)});
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
    const material = r.outbreak ? 'cinnamon-containing applesauce (outbreak)' : 'cinnamon';
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(gemsResultIDs.get(r.result_id) ?? [])],
      family_id: r.source, scope: {analyte: r.analyte, material, basis: r.basis, unit: r.unit},
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
    const pooledScope = material === 'cinnamon' && basis === 'Dried cinnamon as sold or analysed';
    const record = pooledScope ? occ.record.references.find(x => x.id.includes(`:cinnamon-pooled-${analyte}:`)) : null;
    const id = record?.id ?? `cinnamon-assessment:${analyte}:${material !== 'cinnamon' ? 'outbreak-applesauce' : pooledScope ? 'cinnamon' : 'finished-food-consumed-basis'}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => ({result_id: r.id,
      scientific_reason: material !== 'cinnamon' ? 'Finished applesauce measured in an adulteration outbreak investigation; not dried cinnamon and not background occurrence.'
        : !pooledScope ? 'Value recalculated by the manufacturer to the finished food as consumed; not a concentration in dried cinnamon, so no reference on the dried-spice basis can apply.'
        : r.comparison.reason_code === 'value_fails_source_integrity_check' ? `${r.family_id} reports a value that fails an integrity check against its own paper.`
        : `${r.family_id} reports ${r.statistic.replace('_', ' ')} values without per-sample results or subgroup medians; only observed subgroup medians or individual sample values can enter a reference.`,
      locator: r.locator}));
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_');
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 2) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material, basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? (material !== 'cinnamon' ? 'Outbreak finished-food results have no compatible reference; they are adulteration evidence, not background occurrence.' : !pooledScope ? 'Finished-food consumed-basis values share no basis with any cinnamon reference.' : 'No compatible reference units exist for this scope after the complete ledger.'),
        ...(single ? [`This is the only compatible family with per-sample or subgroup-median units for ${analyte} in the completed cinnamon ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'cinnamon', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
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
  const scorecard = buildFullnessScorecard('cinnamon', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'cinnamon', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); const c = {}; for (const i of ledger.items) { const k = i.disposition.split(':')[0]; c[k] = (c[k] ?? 0) + 1; } console.log(JSON.stringify({items: ledger.items.length, dispositions: c, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
