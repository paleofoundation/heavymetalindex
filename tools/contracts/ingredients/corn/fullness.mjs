// Corn evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// here with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse, parseCSV} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {cornOccurrence, auditDir, MATERIALS, GEMS, FDA, sourceLabel} from './source-adapter.mjs';
const materialScope = r => `corn: ${MATERIALS[r.material_key] ?? r.food}`;

export const ledgerDir = 'data/evidence/contracts/corn';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaFile = (root, p) => sha(fs.readFileSync(path.isAbsolute(p) ? p : path.join(root, p)));
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', tHg: 'total mercury', Ni: 'total nickel', Cr: 'total chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium'};
const FDA_FOOD = '54';
// Other FDA TDS foods that name corn belong to their own pages.
const fdaOtherFood = food => /canned/i.test(food) ? 'canned corn, which has its own page' : /grits/i.test(food) ? 'corn grits, which have their own page'
  : /flakes/i.test(food) ? 'corn flakes cereal, which has its own page' : /tortilla/i.test(food) ? 'corn tortillas, which have their own page'
  : /popcorn/i.test(food) ? 'popcorn, which has its own page' : /chips/i.test(food) ? 'corn chips, which have their own page' : /bread|muffin/i.test(food) ? 'cornbread, which has its own page'
  : /BF|baby|toddler|mixed meal/i.test(food) ? 'a baby food or mixed meal that contains corn' : 'a different food that names corn';

function primaryCopy(root, sid) {
  for (const ext of ['txt', 'md']) { const p = `${auditDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p))) return p; }
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-corn-records.csv`;
  return null;
}
// Dated retrieval attempts for an access-blocked record: the mounted HMI Library, repository raw/,
// the publisher copy (not downloaded without owner approval) and the backup library.
function accessRecord(root, sid, recordPath, x) {
  const fm = fs.readFileSync(path.join(root, recordPath), 'utf8');
  const raw = (fm.match(/^raw_path:\s*"?([^"\n]+)"?/m) || [])[1] ?? '';
  const url = (fm.match(/^access_url:\s*"?([^"\n]+)"?/m) || [])[1] ?? `https://www.canada.ca/en/health-canada.html`;
  const rel = raw.replace(/^raw\//, '');
  const at = '2026-10-22T18:00:00Z';
  const state = p => fs.existsSync(p) ? 'present' : 'ENOENT';
  const mounted = `/Volumes/HMI-Library/heavy-metal-index-raw/${rel}`, repo = path.join(root, raw), backup = path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw', rel);
  return {retrieval_attempts: [
    {channel: 'mounted_library', attempted_at: at, location: mounted, outcome: `Declared path ${state(mounted)}; volume searched by file name and title words (find *diaper*), no copy found.`, mounted: fs.existsSync('/Volumes/HMI-Library')},
    {channel: 'raw', attempted_at: at, location: repo, outcome: `Declared repository path ${state(repo)}.`},
    {channel: 'publisher_or_open_access', attempted_at: at, location: url, outcome: 'Not downloaded: internet retrieval requires owner approval.'},
    {channel: 'backup_library', attempted_at: at, location: backup, outcome: `Backup path ${state(backup)}; backup searched by file name and title words, no copy found.`}],
    retrieval_request: {requested_at: at, request: `Retrieve ${sid} (${url}) into the HMI Library raw folder at ${raw}. The record describes a topical diaper-rash product monograph, so it is not expected to contain corn data; retrieval would allow a content-based exclusion.`}};
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['corn']}), 'corn');
  const occ = cornOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const extra = Object.fromEntries(read('ledger-dispositions.json').map(x => [x.source_id, x]));
  const gemsRows = read('gemsfood-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  const sourceItems = new Map(universe.items.filter(i => i.kind === 'source').map(i => [i.source_id, i]));
  // Extracted families whose own record is not a corn-named source (WHO GEMS/Food) still need an item.
  const sourceIDs = new Set([...sourceItems.keys(), ...Object.entries(extraction).filter(([, x]) => x.disposition === 'occurrence_extracted').map(([k]) => k)]);
  for (const sid of [...sourceIDs].sort()) {
    const u = sourceItems.get(sid), recordPath = u?.path ?? `wiki/sources/${sid}.md`, id = `source:${sid}`;
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid], e = extra[sid];
    if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      Object.assign(base, {disposition: x.disposition, rationale: x.disposition_reason,
        locators: [locator(root, sid === FDA ? `${auditDir}/primary/fda-elements.txt` : copy ?? recordPath, 'page', x.disposition_locator)], result_ids: x.disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: x.disposition === 'occurrence_extracted'});
      if (x.disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
      if (x.disposition === 'access_blocked') Object.assign(base, accessRecord(root, sid, recordPath, x));
    } else if (e) {
      Object.assign(base, {disposition: e.disposition, rationale: e.reason, locators: [locator(root, recordPath, 'page', e.locator)]});
    } else if (/sources\/categories\//.test(recordPath)) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Regional catalogue page that lists source records by geography; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
    } else { errors.push(`${sid}: no content-based disposition`); continue; }
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- indexed dataset rows
  const csvRows = new Map();
  const rowsOf = p => { if (!csvRows.has(p)) { const m = new Map(); parseCSV(fs.readFileSync(path.join(root, p), 'utf8')).forEach((r, i) => m.set(`row ${i + 2}`, r)); csvRows.set(p, m); } return csvRows.get(p); };
  const fileSha = new Map();
  const rowLocator = u => { const p = path.join(root, u.path); const physical = fs.existsSync(p) ? p : path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw', u.path.replace(/^raw\//, ''));
    if (!fileSha.has(physical)) fileSha.set(physical, shaFile(root, physical)); return {artifact: fs.existsSync(p) ? u.path : physical, sha256: fileSha.get(physical), kind: 'cell', location: u.row_locator}; };
  const gemsResultIDs = new Map(), fdaResultIDs = new Map();
  const fdaResult = analyte => occ.rows.find(x => x.source === FDA && x.analyte === analyte);
  for (const u of universe.items.filter(i => i.kind === 'dataset_row').sort((a, b) => a.id.localeCompare(b.id))) {
    const base = {id: u.id, source_id: u.source_id, family_id: u.source_id, content_sha256: u.sha256, decision_basis: 'primary_text', locators: [rowLocator(u)], result_ids: [], extraction_complete: false};
    const d = gemsRows[u.id];
    if (u.source_id === GEMS && d) {
      const disp = d.disposition.startsWith('duplicate_of:') && !/^duplicate_of:(dataset|source):/.test(d.disposition) ? d.disposition.replace('duplicate_of:', 'duplicate_of:source:') : d.disposition;
      Object.assign(base, {disposition: disp, rationale: d.rationale});
      if (d.disposition === 'occurrence_extracted') {
        const r = resultByFinding.get(d.result_finding);
        if (!r) { errors.push(`${u.id}: GEMS result ${d.result_finding} not rendered`); continue; }
        base.result_ids = [r.result_id]; base.extraction_complete = true;
        if (!gemsResultIDs.has(r.result_id)) gemsResultIDs.set(r.result_id, []); gemsResultIDs.get(r.result_id).push(u.id);
      }
    } else if (u.source_id === GEMS) {
      Object.assign(base, {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary or index row restating individual submissions that are each decided in this ledger.'});
    } else if (u.source_id === FDA && u.path === 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv') {
      const r = rowsOf(u.path).get(u.row_locator);
      if (r.tds_food_number !== FDA_FOOD) Object.assign(base, {disposition: 'out_of_scope', rationale: `FDA TDS food ${r.tds_food_number} (“${r.tds_food_description}”) is ${fdaOtherFood(r.tds_food_description)}, not maize grain or fresh corn.`});
      else if (!r.metal_species) Object.assign(base, {disposition: 'out_of_scope', rationale: `Element “${r.analyte.trim()}” is outside the HMI analyte list (nutrient or untracked element).`});
      else {
        const res = fdaResult(r.metal_species);
        if (!res) { errors.push(`${u.id}: FDA ${r.metal_species} not rendered`); continue; }
        Object.assign(base, {disposition: 'occurrence_extracted', rationale: `FDA TDS corn (frozen, boiled) composite (${r.analyte}, FY${r.fiscal_year} ${r.season}, ${r.region}); contributes to the FDA corn result for ${r.metal_species}.`, result_ids: [res.result_id], extraction_complete: true});
        if (!fdaResultIDs.has(res.result_id)) fdaResultIDs.set(res.result_id, []); fdaResultIDs.get(res.result_id).push(u.id);
      }
    } else if (u.source_id === FDA) {
      const food = String(u.food ?? '');
      if (/Corn, frozen, boiled/.test(food)) Object.assign(base, {disposition: `duplicate_of:source:${FDA}`, rationale: 'HMI summary, routing or adjudication row restating FDA TDS food 54 composites that are each decided in this ledger.'});
      else Object.assign(base, {disposition: 'out_of_scope', rationale: `HMI index row for “${food.split('|').pop().trim()}”, ${fdaOtherFood(food)}, not maize grain or fresh corn.`});
    } else if (/^data\/evidence\/category1_/.test(u.path)) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: `Infant or toddler food that contains corn (“${String(u.food).split('|').pop().trim()}”); baby foods have their own pages and are not maize grain or fresh corn.`});
    } else if (/^data\/evidence\/category7_/.test(u.path)) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Cooking-oil index row (corn oil among other oils); corn oil has its own page.'});
    } else if (itemByID.has(`source:${u.source_id}`)) {
      Object.assign(base, {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating values from ${u.source_id}; the source record is the decided ledger item.`});
    } else { errors.push(`${u.id}: undecided dataset row`); continue; }
    items.push(base);
  }

  // ---------------------------------------------------------------- results
  const unitsByResult = new Map();
  const units = [];
  for (const ref of occ.record.references) {
    for (const u of ref.distribution.units ?? []) {
      const key = ref.id.split(':')[1];
      const src = occ.unit_list.find(x => x.ref_key === key && x.id === u.id);
      const id = `${key}:${u.id}`;
      const row = occ.rows.find(r => r.result_id === src.result_id);
      const scope = {analyte: row.analyte, material: materialScope(row), basis: row.basis, unit: 'µg/kg'};
      const copy = u.family === FDA ? `${auditDir}/primary/fda-elements.txt` : primaryCopy(root, u.family) ?? `wiki/sources/${u.family}.md`;
      units.push({id, item_id: `source:${u.family}`, family_id: u.family, scope, statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper, locator: locator(root, copy, 'table', u.locator)});
      if (!unitsByResult.has(src.result_id)) unitsByResult.set(src.result_id, []); unitsByResult.get(src.result_id).push(id);
    }
  }
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = r.profile.variants['::'].median;
    const copy = r.source === FDA ? `${auditDir}/primary/fda-elements.txt` : primaryCopy(root, r.source) ?? `wiki/sources/${r.source}.md`;
    const p = r.primary;
    const lower = t?.lower ?? (Number.isFinite(p.min_ug_kg) ? p.min_ug_kg : null), upper = t?.upper ?? (Number.isFinite(p.max_ug_kg) ? p.max_ug_kg : null);
    const comparison = {state: r.comparison_state, attempts: r.comparison_attempts};
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(gemsResultIDs.get(r.result_id) ?? []), ...(fdaResultIDs.get(r.result_id) ?? [])],
      family_id: r.source, scope: {analyte: r.analyte, material: materialScope(r), basis: r.basis, unit: r.unit},
      form: String(r.material_full ?? r.food), origin_or_market: `${r.group_full} (${r.region_type})`, year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte,
      statistic: r.statistic, basis: r.basis, n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring), unit: r.unit, value: Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null),
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(root, copy, 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison};
  });

  // ---------------------------------------------------------------- references (one assessment per result scope)
  const scopeKey = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const resultsByScope = Map.groupBy(results, r => scopeKey(r.scope));
  const audit = new Map(occ.unit_audit.map(a => [a.unit, a.reason]));
  const refs = [];
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  for (const f of fs.readdirSync(path.join(root, ledgerDir, 'references'))) fs.rmSync(path.join(root, ledgerDir, 'references', f));
  for (const [key, scoped] of resultsByScope) {
    const [analyte, material, basis, unit] = JSON.parse(key);
    const refIDs = [...new Set(scoped.map(r => r.comparison.reference_id).filter(Boolean))];
    const record = occ.record.references.find(x => refIDs.includes(x.id)) ?? occ.record.references.find(x => units.some(u => scopeKey(u.scope) === key && u.id.startsWith(x.id.split(':')[1] + ':')));
    const id = record?.id ?? `corn-assessment:${analyte}:${material}:${basis}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => {
      const row = occ.rows.find(x => x.result_id === r.id);
      return {result_id: r.id, scientific_reason: /not stated/i.test(basis) ? 'The source does not state whether results are fresh or dry weight; it cannot join an as-sold, fresh-weight or dry-weight reference.'
        : `${sourceLabel(r.family_id)}: ${audit.get(row.finding_id) ?? `${r.statistic.replace('_', ' ')} values; only observed subgroup medians or individual sample values can enter a reference`}.`, locator: r.locator};
    });
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_').slice(0, 120);
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 2) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material, basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(single ? [`This is the only compatible family for ${analyte} in ${material} on this basis in the completed corn ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'corn', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
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
  const scorecard = buildFullnessScorecard('corn', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'corn', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger, universe} = writeLedger(root); console.log(JSON.stringify({items: ledger.items.length, universe: universe.items.length, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
