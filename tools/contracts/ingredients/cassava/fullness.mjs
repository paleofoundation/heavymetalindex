// Cassava evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// here with the shared discovery tool; nothing is taken from an adapter-supplied list.
// The ledger also decides items found only under the requested cassava synonyms
// (manioc, tapioca, Manihot, gari, fufu), so adding those aliases centrally cannot
// leave the ledger short.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {cassavaOccurrence, auditDir, REF_MATERIALS} from './source-adapter.mjs';
import {sourceRecordPath} from './overlay.mjs';
const materialScope = r => `cassava: ${REF_MATERIALS[r.material_key] ?? r.food}`;

const GEMS = 'who-gemsfood-heavy-metal-contaminants';
export const ledgerDir = 'data/evidence/contracts/cassava';
export const requestedAliases = ['manioc', 'manihot', 'manihot esculenta', 'yuca', 'tapioca', 'gari', 'garri', 'fufu', 'lafun', 'cassava flour'];
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaFile = (root, p) => sha(fs.readFileSync(path.isAbsolute(p) ? p : path.join(root, p)));
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', tHg: 'total mercury', Ni: 'total nickel', Cr: 'total chromium', Al: 'total aluminium', Sn: 'total tin'};

function primaryCopy(root, sid) {
  for (const ext of ['txt', 'md']) { const p = `${auditDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p))) return p; }
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-cassava-records.csv`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

export function buildLedger(root) {
  const corpus = loadIndependentCorpus(root, {ingredients: ['cassava']});
  const universe = recomputeUniverse(corpus, 'cassava');
  const extended = recomputeUniverse({...corpus, aliases: {...corpus.aliases, cassava: [...(corpus.aliases.cassava ?? []), ...requestedAliases]}}, 'cassava');
  const occ = cassavaOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const extra = Object.fromEntries(read('ledger-dispositions.json').map(x => [x.source_id, x]));
  const gemsRows = read('gemsfood-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  const sourceItems = new Map([...extended.items, ...universe.items].filter(i => i.kind === 'source').map(i => [i.source_id, i]));
  const sourceIDs = new Set([...sourceItems.keys(), ...Object.keys(extraction)]);
  for (const sid of [...sourceIDs].sort()) {
    const u = sourceItems.get(sid), recordPath = u?.path ?? sourceRecordPath(root, sid), id = `source:${sid}`;
    if (!fs.existsSync(path.join(root, recordPath))) { errors.push(`${sid}: no source record`); continue; }
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid], e = extra[sid];
    if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      Object.assign(base, {disposition: x.disposition, rationale: x.disposition_reason,
        locators: [locator(root, copy ?? recordPath, 'page', x.disposition_locator)], result_ids: x.disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: x.disposition === 'occurrence_extracted'});
      if (x.disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
    } else if (e) {
      Object.assign(base, {disposition: e.disposition, rationale: e.reason, locators: [locator(root, recordPath, 'page', e.locator)]});
    } else if (/^sources\/categories\//.test(recordPath.replace('wiki/', ''))) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Regional catalogue page that lists source records by geography; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
    } else { errors.push(`${sid}: no content-based disposition`); continue; }
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- indexed dataset rows
  const fileSha = new Map();
  const rowLocator = (u, logical, location) => { const p = path.join(root, logical); const physical = fs.existsSync(p) ? p : path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw', logical.replace(/^raw\//, ''));
    if (!fileSha.has(physical)) fileSha.set(physical, shaFile(root, physical)); return {artifact: fs.existsSync(p) ? logical : physical, sha256: fileSha.get(physical), kind: 'cell', location}; };
  const datasetItems = new Map([...extended.items, ...universe.items].filter(i => i.kind === 'dataset_row').map(i => [i.id, i]));
  for (const [iid, d] of Object.entries(gemsRows)) if (!datasetItems.has(iid)) {
    const [logical, row] = iid.replace(/^dataset:/, '').split('#');
    datasetItems.set(iid, {id: iid, kind: 'dataset_row', source_id: GEMS, path: logical, row_locator: row, sha256: d.content_sha256, discovered_by: 'cassava synonym scan'});
  }
  const gemsResultIDs = new Map();
  for (const u of [...datasetItems.values()].sort((a, b) => a.id.localeCompare(b.id))) {
    if (!u.sha256) { errors.push(`${u.id}: no content hash`); continue; }
    const base = {id: u.id, source_id: u.source_id, family_id: u.source_id, content_sha256: u.sha256, decision_basis: 'primary_text', locators: [rowLocator(u, u.path, u.row_locator)], result_ids: [], extraction_complete: false};
    const d = gemsRows[u.id];
    if (u.source_id === GEMS && d) {
      const disp = d.disposition.startsWith('duplicate_of:') && !d.disposition.startsWith('duplicate_of:dataset:') ? d.disposition.replace('duplicate_of:', 'duplicate_of:source:') : d.disposition;
      Object.assign(base, {disposition: disp, rationale: d.rationale});
      if (d.disposition === 'occurrence_extracted') {
        const r = resultByFinding.get(d.result_finding);
        if (!r) { errors.push(`${u.id}: GEMS result ${d.result_finding} not rendered`); continue; }
        base.result_ids = [r.result_id]; base.extraction_complete = true;
        if (!gemsResultIDs.has(r.result_id)) gemsResultIDs.set(r.result_id, []); gemsResultIDs.get(r.result_id).push(u.id);
      }
    } else if (itemByID.has(`source:${u.source_id}`)) {
      Object.assign(base, {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating values from ${u.source_id}; the source record is the decided ledger item.`});
    } else if (u.source_id === GEMS) {
      Object.assign(base, {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary or index row restating individual submissions decided elsewhere in this ledger.'});
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
  const refs = [];
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  for (const f of fs.readdirSync(path.join(root, ledgerDir, 'references'))) fs.rmSync(path.join(root, ledgerDir, 'references', f));
  for (const [key, scoped] of resultsByScope) {
    const [analyte, material, basis, unit] = JSON.parse(key);
    const refIDs = [...new Set(scoped.map(r => r.comparison.reference_id).filter(Boolean))];
    const record = occ.record.references.find(x => refIDs.includes(x.id)) ?? occ.record.references.find(x => units.some(u => scopeKey(u.scope) === key && u.id.startsWith(x.id.split(':')[1] + ':')));
    const id = record?.id ?? `cassava-assessment:${analyte}:${material}:${basis}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id) || !r.reference_unit_ids.length).filter(r => !families.includes(r.family_id)).map(r => ({result_id: r.id,
      scientific_reason: /basis not stated/i.test(basis) ? 'The source does not state whether results are fresh or dry weight; it cannot join a fresh- or dry-weight reference.'
        : r.family_id.startsWith('romero') ? 'Mining-area orchard sample: an external target, not ordinary cassava occurrence.'
        : r.family_id.startsWith('albishi') ? 'Laboratory-made flour from one farm lot under experimental treatments, as means of repeat determinations: an external target, not ordinary occurrence.'
        : `${r.family_id} reports ${r.statistic.replace('_', ' ')} values${/integrity/.test(r.comparison.reason_code ?? '') ? ' that fail an integrity check against the paper' : ''}; only observed subgroup medians or individual sample values can enter a reference.`,
      locator: r.locator}));
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_').slice(0, 120);
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 2) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material, basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(single ? [`This is the only compatible family for ${analyte} in ${material} on this basis in the completed cassava ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'cassava', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
  const parsed = evidenceLedgerSchema.safeParse(ledger);
  if (!parsed.success) errors.push(...parsed.error.issues.slice(0, 20).map(i => `schema ${i.path.join('.')}: ${i.message}`));
  return {ledger, universe, extended, errors};
}

export function writeLedger(root) {
  const {ledger, universe, extended, errors} = buildLedger(root);
  if (errors.length) throw Error('Ledger errors:\n' + errors.slice(0, 40).join('\n'));
  fs.mkdirSync(path.join(root, ledgerDir), {recursive: true});
  fs.writeFileSync(path.join(root, ledgerDir, 'evidence-ledger.json'), JSON.stringify(ledger) + '\n');
  return {ledger, universe, extended};
}

// The scorecard is written only from the exact final HTML, then the gate runs on it.
export function scoreAndGate(root, htmlPath) {
  const {ledger, universe} = writeLedger(root);
  const page = inspectFullnessHTML(fs.readFileSync(htmlPath, 'utf8'));
  const scorecard = buildFullnessScorecard('cassava', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'cassava', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger, universe, extended} = writeLedger(root); console.log(JSON.stringify({items: ledger.items.length, universe: universe.items.length, extended_universe: extended.items.length, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
