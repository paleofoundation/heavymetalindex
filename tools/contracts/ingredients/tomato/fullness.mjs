// Tomato evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// here with the shared discovery tool; nothing is taken from an adapter-supplied list.
//
// The shared alias snapshot currently lists the generic word "raw" as a tomato alias
// (from the legacy TDS label "Tomato, raw"). Every record and dataset row it pulls in is
// still decided here on its content; rows and records that never name tomato are
// out of scope with that reason. The alias correction is a shared request.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {loadIndependentCorpus, recomputeUniverse, parseCSV} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {tomatoOccurrence, auditDir} from './source-adapter.mjs';

const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
export const ledgerDir = 'data/evidence/contracts/tomato';
const TOMATO = /tomat|lycopersic/i;
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaCache = new Map();
const shaFile = (root, p) => { const f = path.isAbsolute(p) ? p : path.join(root, p); if (!shaCache.has(f)) shaCache.set(f, sha(fs.readFileSync(f))); return shaCache.get(f); };
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', tHg: 'total mercury', MeHg: 'methylmercury', Ni: 'total nickel', Cr: 'total chromium', CrVI: 'hexavalent chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium'};
const BACKUP = path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw');

function primaryCopy(root, sid) {
  for (const ext of ['txt', 'md']) { const p = `${auditDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p))) return p; }
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-tomato-records.csv`;
  if (sid === FDA) return `${auditDir}/primary/fda-elements.txt`;
  if (sid === 'bedoya-perales2023-moquegua-peru-mining-dataset') return `${auditDir}/primary/bedoya-perales2023-dataset.xlsx`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});
const TOMATO_PRODUCT = /paste|pur[ée]e|juice|ketchup|catsup|sauce|salsa|soup|canned|concentr|dried|pulp|mixed|meal|BF,|ravioli|pasta|beans|spaghetti/i;

// FDA TDS normalized sample rows, indexed by CSV row number, decide the indexed rows.
function fdaSamples(root) {
  const rows = parseCSV(fs.readFileSync(path.join(root, 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv'), 'utf8'));
  return new Map(rows.map(r => [`row ${r.__row}`, r]));
}

function datasetDecision(u, ctx) {
  const food = String(u.food || '');
  const names = TOMATO.test(food);
  if (!names) return {disposition: 'out_of_scope', rationale: `The row is "${food.split('|').map(s => s.trim()).filter(Boolean).pop()}", which names no tomato; it entered discovery only through the generic alias "raw" in the shared alias list.`};
  if (u.source_id === FDA && u.path.endsWith('element_results_samples.csv')) {
    const r = ctx.fda.get(u.row_locator);
    if (r?.tds_food_number === '117') {
      if (!r.metal_species) return {disposition: 'out_of_scope', rationale: `FDA TDS raw-tomato result for ${r.analyte}, an essential or non-HMI element, not a tracked heavy-metal analyte.`};
      const res = ctx.fdaResult.get(r.metal_species);
      if (!res) return {disposition: 'out_of_scope', rationale: `FDA TDS raw-tomato result for ${r.metal_species}, outside the analytes rendered for tomato.`};
      return {disposition: 'occurrence_extracted', rationale: `FDA TDS raw-tomato (food 117) market-basket sample, ${r.metal_species}; contributes to the HMI-calculated median for FDA tomato.`, result_ids: [res]};
    }
    return {disposition: 'out_of_scope', rationale: `FDA TDS food "${r?.tds_food_description ?? food}" is a tomato product or mixed food with its own page, not fresh tomato.`};
  }
  if (u.source_id === FDA) {
    if (/Tomato, raw/i.test(food)) return {disposition: `duplicate_of:source:${FDA}`, rationale: 'HMI index row summarising or routing the FDA TDS raw-tomato samples decided under the FDA source item and its sample rows.'};
    return {disposition: 'out_of_scope', rationale: `FDA TDS food "${food.split('|').pop().trim()}" is a tomato product or mixed food with its own page, not fresh tomato.`};
  }
  if (u.source_id === GEMS) {
    if (/^tomato\s*\|/i.test(food) && !TOMATO_PRODUCT.test(food.split('|').slice(1).join(' '))) return {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary row restating individual tomato submissions decided elsewhere in this ledger.'};
    return {disposition: 'out_of_scope', rationale: `GEMS/Food summary row for "${food}", a tomato product or mixed food, not fresh tomato.`};
  }
  if (TOMATO_PRODUCT.test(food) || /tomato-paste|canned|ketchup/i.test(food)) return {disposition: 'out_of_scope', rationale: `Index row for "${food}", a processed tomato product or mixed food with its own page, not fresh tomato.`};
  if (ctx.itemByID.has(`source:${u.source_id}`)) return {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating values from ${u.source_id}; the source record is the decided ledger item.`};
  return null;
}

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['tomato']}), 'tomato');
  const occ = tomatoOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const gemsRows = read('gemsfood-row-dispositions.json');
  const screen = read('raw-alias-screen.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  const universeByID = new Map(universe.items.map(i => [i.id, i]));
  const sourceIDs = new Set([...universe.items.filter(i => i.kind === 'source').map(i => i.source_id), ...Object.keys(extraction)]);
  for (const sid of [...sourceIDs].sort()) {
    const id = `source:${sid}`, u = universeByID.get(id), recordPath = u?.path ?? `wiki/sources/${sid}.md`;
    if (!fs.existsSync(path.join(root, recordPath))) { errors.push(`${sid}: no source record`); continue; }
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid];
    if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      Object.assign(base, {disposition: x.disposition, rationale: x.disposition_reason,
        locators: [locator(root, copy ?? recordPath, 'page', x.disposition_locator)], result_ids: x.disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: x.disposition === 'occurrence_extracted'});
      if (x.disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
      if (x.disposition === 'access_blocked') errors.push(`${sid}: access_blocked needs a retrieval record`);
    } else {
      const text = fs.readFileSync(path.join(root, recordPath), 'utf8');
      if (/^sources\/categories\//.test(recordPath.replace('wiki/', '')) || sid === 'index' || /^type: category-index/m.test(text) || /source_type: category-index/.test(text)) {
        Object.assign(base, {disposition: 'out_of_scope', rationale: 'Catalogue page that lists source records; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
      } else if (!TOMATO.test(text)) {
        const sc = screen[sid];
        if (sc?.resolved_path && sc.text_chars) {
          const incidental = sc.tomato_mentions ? ` Its full text names tomato only incidentally (for example: “${sc.examples.slice(0, 2).join('”; “').slice(0, 220)}”), with no fresh-tomato measurement.` : ' Its full text never names tomato.';
          Object.assign(base, {disposition: 'out_of_scope', rationale: `Entered discovery only through the generic alias "raw" in the shared alias list.${incidental}`, locators: [locator(root, sc.resolved_path, 'page', sc.tomato_mentions ? 'full text screened; tomato mentions are citations, reference materials or unrelated words' : 'full text screened: no occurrence of tomato or Lycopersicon')]});
        } else {
          Object.assign(base, {disposition: 'out_of_scope', rationale: `Entered discovery only through the generic alias "raw" in the shared alias list. The record describes ${String(matter(text).data.title ?? sid).slice(0, 160)} and never names tomato; its declared primary file ${sc?.declared?.length ? 'does not resolve at the recorded path' : 'is not recorded'}, so the record text is the decided content.`, locators: [locator(root, recordPath, 'page', 'full record text: no occurrence of tomato or Lycopersicon')]});
        }
      } else { errors.push(`${sid}: names tomato but has no primary-text decision`); continue; }
    }
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- indexed dataset rows
  const fda = fdaSamples(root);
  const fdaResult = new Map(occ.rows.filter(r => r.source === FDA).map(r => [r.analyte, r.result_id]));
  const rowLocator = u => { const p = path.join(root, u.path); const physical = fs.existsSync(p) ? p : path.join(BACKUP, u.path.replace(/^raw\//, ''));
    return {artifact: fs.existsSync(p) ? u.path : physical, sha256: shaFile(root, physical), kind: 'cell', location: u.row_locator}; };
  const gemsResultIDs = new Map();
  const seen = new Set();
  for (const u of universe.items.filter(i => i.kind === 'dataset_row')) {
    seen.add(u.id);
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
    } else {
      const d = datasetDecision(u, {fda, fdaResult, itemByID});
      if (!d) { errors.push(`${u.id}: undecided dataset row (${u.source_id} | ${u.food})`); continue; }
      Object.assign(base, d);
      if (d.result_ids) { base.extraction_complete = true; for (const rid of d.result_ids) { if (!gemsResultIDs.has(rid)) gemsResultIDs.set(rid, []); gemsResultIDs.get(rid).push(u.id); } }
    }
    items.push(base);
  }
  // GEMS rows decided by the extraction that the shared discovery did not list (for
  // example local names such as "tomate" or "tomatensaft") remain ledger items, so
  // duplicate targets and contributing rows resolve.
  const gemsRecords = new Map(parseCSV(fs.readFileSync(path.join(root, auditDir, 'primary/gemsfood-tomato-records.csv'), 'utf8')).map(r => [r.item_id, r]));
  for (const [iid, d] of Object.entries(gemsRows)) {
    if (seen.has(iid)) continue;
    const [rel, row] = iid.replace(/^dataset:/, '').split('#');
    const physical = path.join(BACKUP, rel.replace(/^raw\//, ''));
    const base = {id: iid, source_id: GEMS, family_id: GEMS, content_sha256: sha(`${iid}|${JSON.stringify(gemsRecords.get(iid) ?? d)}`), decision_basis: 'primary_text',
      locators: [{artifact: physical, sha256: shaFile(root, physical), kind: 'cell', location: row}], result_ids: [], extraction_complete: false, disposition: d.disposition, rationale: d.rationale};
    if (d.disposition === 'occurrence_extracted') { const r = resultByFinding.get(d.result_finding); if (!r) { errors.push(`${iid}: GEMS result not rendered`); continue; } base.result_ids = [r.result_id]; base.extraction_complete = true; if (!gemsResultIDs.has(r.result_id)) gemsResultIDs.set(r.result_id, []); gemsResultIDs.get(r.result_id).push(iid); }
    items.push(base);
  }
  const ids = new Set(items.map(i => i.id));
  for (const i of items) if (i.disposition.startsWith('duplicate_of:') && !ids.has(i.disposition.slice(13))) errors.push(`${i.id}: duplicate target ${i.disposition.slice(13)} not in ledger`);

  // ---------------------------------------------------------------- results
  const unitsByResult = new Map();
  const units = [];
  for (const ref of occ.record.references) {
    const key = ref.id.split(':')[1];
    for (const u of ref.distribution.units ?? []) {
      const src = occ.unit_list.find(x => x.ref_key === key && x.id === u.id);
      const id = `${key}:${u.id}`;
      const owner = occ.rows.find(r => r.result_id === src.result_id);
      const scope = {analyte: src.analyte, material: 'fresh tomato', basis: owner.basis, unit: 'µg/kg'};
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
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(gemsResultIDs.get(r.result_id) ?? [])],
      family_id: r.source, scope: {analyte: r.analyte, material: 'fresh tomato', basis: r.basis, unit: r.unit},
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
  fs.rmSync(path.join(root, ledgerDir, 'references'), {recursive: true, force: true});
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  const rowByID = new Map(occ.rows.map(r => [r.result_id, r]));
  for (const [key, scoped] of resultsByScope) {
    const [analyte, material, basis, unit] = JSON.parse(key);
    const bkey = rowByID.get(scoped[0].id).basis_key;
    const record = bkey === 'unstated' ? null : occ.record.references.find(x => x.id.split(':')[1] === `tomato-${bkey}-${analyte}`);
    const id = record?.id ?? `tomato-assessment:${analyte}:${bkey}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => {
      const row = rowByID.get(r.id);
      return {result_id: r.id, scientific_reason:
        bkey === 'unstated' ? `${r.family_id} does not state whether results are fresh or dry weight; tomato is roughly 90–95% water, so an unstated basis cannot share a reference with either.`
        : row.hold ? `${r.family_id} reports a value that fails an integrity check against its own paper.`
        : row.experimental ? `${r.family_id} reports an experimental treatment (for example spiked irrigation water or added fertiliser), not background occurrence.`
        : row.wastewater ? `${r.family_id} reports tomatoes irrigated with wastewater, effluent or drainage water, an exposed growing condition compared within its own study rather than pooled as background occurrence.`
        : /mining|power plant|smelter/i.test(row.group_full) ? `${r.family_id} reports an exposed mining or industrial site, compared within its own study rather than pooled as background occurrence.`
        : `${r.family_id} reports ${r.statistic.replace('_', ' ')} values without per-sample results or subgroup medians; only observed subgroup medians, individual sample values or single-composite means can enter a reference.`,
        locator: r.locator};
    });
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_');
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 2) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material, basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? (bkey === 'unstated' ? 'Results with an unstated weight basis have no compatible reference; they are compared within their own study where possible.' : 'No compatible reference units exist for this scope after the complete ledger.'),
        ...(single ? [`This is the only compatible family with per-sample or subgroup-median units for ${analyte} on this basis in the completed tomato ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'tomato', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
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
  const scorecard = buildFullnessScorecard('tomato', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'tomato', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); const c = {}; for (const i of ledger.items) { const k = i.disposition.split(':')[0]; c[k] = (c[k] ?? 0) + 1; } console.log(JSON.stringify({items: ledger.items.length, dispositions: c, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
