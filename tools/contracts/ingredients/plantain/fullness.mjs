// Plantain evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed here
// with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {plantainOccurrence, auditDir, sourceFile} from './source-adapter.mjs';

const GEMS = 'who-gemsfood-heavy-metal-contaminants', ATR = 'authors2023-health-risk-assessment-for-human-exposure-to-heavy';
export const ledgerDir = 'data/evidence/contracts/plantain';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaFile = (root, p) => sha(fs.readFileSync(path.isAbsolute(p) ? p : path.join(root, p)));
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', tHg: 'total mercury', Ni: 'total nickel', Cr: 'total chromium'};

function primaryCopy(root, sid) {
  for (const ext of ['txt', 'md']) { const p = `${auditDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p))) return p; }
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-plantain-records.csv`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});
const existing = (...ps) => ps.find(p => fs.existsSync(p)) ?? ps.at(-1);

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['plantain']}), 'plantain');
  const occ = plantainOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const extra = Object.fromEntries(read('ledger-dispositions.json').map(x => [x.source_id, x]));
  const gemsRows = read('gemsfood-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  // The universe, every extracted or decided source, and the records cited on the page. Proposed
  // records (library papers without a wiki source record) are decided items in their own right.
  const sourceIDs = new Set([...universe.items.filter(i => i.kind === 'source').map(i => i.source_id), ...Object.keys(extraction), ...Object.keys(extra)]);
  const universeByID = new Map(universe.items.map(i => [i.id, i]));
  for (const sid of [...sourceIDs].sort()) {
    const id = `source:${sid}`, u = universeByID.get(id), recordPath = u?.path ?? sourceFile(root, sid);
    if (!fs.existsSync(path.join(root, recordPath))) { errors.push(`${sid}: no source record`); continue; }
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid], e = extra[sid];
    if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      Object.assign(base, {disposition: x.disposition, rationale: x.disposition_reason,
        locators: [locator(root, copy ?? recordPath, 'page', x.disposition_locator)], result_ids: x.disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: x.disposition === 'occurrence_extracted'});
      if (x.disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
      if (x.disposition === 'access_blocked' && sid === ATR) {
        const rel = 'research-pulls/metal-deep-dive-mercury-hg/Fish marine non-predatory sardines anchovies salmon cod/Codex mercury fish/10-3390-ijerph20010435.pdf';
        base.retrieval_attempts = [
          {channel: 'mounted_library', attempted_at: now, location: `/Volumes/HMI-Library/${rel}; filename search of /Volumes/HMI-Library for "ijerph20010435" and "ijerph-20-00435"`, outcome: 'Article PDF present; Supplementary Table S3 with per-species plant concentrations is not in the volume.', mounted: true},
          {channel: 'raw', attempted_at: now, location: `declared raw_path /Volumes/HMI-Library/${rel}`, outcome: 'Same article without supplementary files.'},
          {channel: 'publisher_or_open_access', attempted_at: now, location: 'https://www.mdpi.com/article/10.3390/ijerph20010435/s1 (MDPI open-access supplementary materials)', outcome: 'Supplement is published open access; not downloaded pending owner approval of the file download.'},
          {channel: 'backup_library', attempted_at: now, location: `/Users/kmfp/HMI-Library-backup/${rel}; filename search of the backup for the DOI fragments`, outcome: 'Article only; no supplement.'}];
        base.retrieval_request = {requested_at: now, request: 'Download the IJERPH 2023 supplementary materials (doi 10.3390/ijerph20010435, MDPI /s1), extract Table S3 rows for Musa × paradisiaca (Hg, As, Pb, Cd; per site, with basis), and confirm whether the authors mean plantain.'};
      }
    } else if (e) {
      const artifact = path.isAbsolute(e.artifact) ? existing(e.artifact, path.join(root, recordPath)) : e.artifact;
      Object.assign(base, {disposition: e.disposition, rationale: e.reason, locators: [locator(root, artifact, 'page', e.locator)]});
    } else { errors.push(`${sid}: no content-based disposition`); continue; }
    items.push(base);
  }

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
    } else if (u.source_id === GEMS) {
      Object.assign(base, {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary-index row restating individual plantain submissions decided elsewhere in this ledger.'});
    } else { errors.push(`${u.id}: undecided dataset row`); continue; }
    items.push(base);
  }

  // ---------------------------------------------------------------- results
  const unitsByResult = new Map();
  const units = [];
  for (const ref of occ.record.references) {
    for (const u of ref.distribution.units ?? []) {
      const src = occ.unit_list.find(x => x.ref_key === ref.id.split(':')[1] && x.id === u.id);
      const id = `${ref.id.split(':')[1]}:${u.id}`;
      const row = occ.rows.find(r => r.result_id === src.result_id);
      const scope = {analyte: src.analyte, material: 'plantain', basis: row.basis, unit: 'µg/kg'};
      const unit = {id, item_id: `source:${u.family}`, family_id: u.family, scope, statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper, locator: locator(root, primaryCopy(root, u.family), 'table', u.locator)};
      units.push(unit);
      if (!unitsByResult.has(src.result_id)) unitsByResult.set(src.result_id, []); unitsByResult.get(src.result_id).push(id);
    }
  }
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = r.profile.variants['::'].median, copy = primaryCopy(root, r.source) ?? sourceFile(root, r.source);
    const p = r.primary;
    const lower = t?.lower ?? (Number.isFinite(p.min_ug_kg) ? p.min_ug_kg : null), upper = t?.upper ?? (Number.isFinite(p.max_ug_kg) ? p.max_ug_kg : null);
    const comparison = {state: r.comparison_state, attempts: r.comparison_attempts};
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(gemsResultIDs.get(r.result_id) ?? [])],
      family_id: r.source, scope: {analyte: r.analyte, material: 'plantain', basis: r.basis, unit: r.unit},
      form: String(r.food), origin_or_market: `${r.group_full} (${r.region_type})`, year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte,
      statistic: r.statistic, basis: r.basis, n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring), unit: r.unit, value: Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null),
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(root, copy, 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison};
  });

  // ---------------------------------------------------------------- references (one assessment per result scope)
  const scopeKey = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const basisKey = new Map(occ.rows.map(r => [r.basis, r.basis_key]));
  const resultsByScope = Map.groupBy(results, r => scopeKey(r.scope));
  const why = {pulp: 'reports means of paired processing arms on a basis the paper does not state; no individual observations or subgroup medians exist on this basis.',
    conflicting: 'states both wet-weight and dry-weight expression for the same results, so its median and summary statistics cannot be placed on one defined basis.',
    dry: 'reports a single pooled value per crop on a dry-weight basis without a sample count; it is neither an observation nor a subgroup median, and no other plantain result shares the basis.',
    ripened: 'reports treatment-group means of ripened fruit from one bunch; means are not observations or subgroup medians, and no other plantain result shares this basis.',
    gems: 'is a GEMS/Food record already represented in this scope’s region-by-year subgroup median.'};
  const refs = [];
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  for (const [key, scoped] of resultsByScope) {
    const [analyte, , basis, unit] = JSON.parse(key);
    const bkey = basisKey.get(basis);
    const record = occ.record.references.find(x => x.id.includes(`:plantain-${analyte}-${bkey}:`));
    const id = record?.id ?? `plantain-assessment:${analyte}:${bkey}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => ({result_id: r.id,
      scientific_reason: `${r.family_id} ${bkey === 'ripened-homogenate' ? why.ripened : bkey === 'pulp-unstated' ? why.pulp : bkey === 'conflicting' ? why.conflicting : bkey === 'dry' ? why.dry : 'reports no individual observation or subgroup median on this basis.'}`,
      locator: r.locator}));
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_');
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 2) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material: 'plantain', basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(single ? [`GEMS/Food is the only compatible family with individual plantain observations on this basis in the completed ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'plantain', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
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
  const scorecard = buildFullnessScorecard('plantain', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'plantain', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); console.log(JSON.stringify({items: ledger.items.length, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
