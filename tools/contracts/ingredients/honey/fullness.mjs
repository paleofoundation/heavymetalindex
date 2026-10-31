// Honey evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// here with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse, parseCSV} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {honeyOccurrence, auditDir} from './source-adapter.mjs';

const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
export const ledgerDir = 'data/evidence/contracts/honey';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaFile = (root, p) => sha(fs.readFileSync(path.isAbsolute(p) ? p : path.join(root, p)));
const rel = (root, p) => path.relative(root, p);
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', tHg: 'total mercury', Ni: 'total nickel', Cr: 'total chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium'};

function primaryCopy(root, sid) {
  for (const ext of ['txt', 'md']) { const p = `${auditDir}/primary/${sid}.${ext}`; if (fs.existsSync(path.join(root, p))) return p; }
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-honey-records.csv`;
  if (sid === FDA) return `${auditDir}/primary/fda-elements.txt`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['honey']}), 'honey');
  const occ = honeyOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const context = Object.fromEntries(read('context-dispositions.json').map(x => [x.source_id, x]));
  const extra = Object.fromEntries(read('ledger-dispositions.json').map(x => [x.source_id, x]));
  const gemsRows = read('gemsfood-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  const sourceIDs = new Set([...universe.items.filter(i => i.kind === 'source').map(i => i.source_id), ...Object.keys(extraction), 'fechner2022-bfr-meal-hg-cd-pb-ni-germany']);
  const universeByID = new Map(universe.items.map(i => [i.id, i]));
  for (const sid of [...sourceIDs].sort()) {
    const id = `source:${sid}`, u = universeByID.get(id), recordPath = u?.path ?? `wiki/sources/${sid}.md`;
    if (!fs.existsSync(path.join(root, recordPath))) { errors.push(`${sid}: no source record`); continue; }
    const base = {id, source_id: sid, family_id: sid, content_sha256: u?.sha256 ?? shaFile(root, recordPath), decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const copy = primaryCopy(root, sid), x = extraction[sid], c = context[sid], e = extra[sid];
    if (x) {
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      Object.assign(base, {disposition: x.disposition, rationale: x.disposition_reason,
        locators: [locator(root, copy ?? recordPath, 'page', x.disposition_locator)], result_ids: x.disposition === 'occurrence_extracted' ? results : [],
        extraction_complete: x.disposition === 'occurrence_extracted'});
      if (x.disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
    } else if (e) {
      Object.assign(base, {disposition: e.disposition.startsWith('duplicate_of:') && !e.disposition.startsWith('duplicate_of:source:') ? e.disposition.replace('duplicate_of:', 'duplicate_of:source:') : e.disposition, rationale: e.reason, locators: [locator(root, copy ?? recordPath, 'page', e.locator)]});
      if (e.disposition === 'access_blocked') {
        base.retrieval_attempts = [
          {channel: 'mounted_library', attempted_at: now, location: '/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/01_Oils_Butter/03_Fechner_Food_Chemistry_X_2022.pdf', outcome: 'Article PDF present (identical to backup); no honey rows in the main text; per-food supplementary tables absent from the volume.', mounted: true},
          {channel: 'raw', attempted_at: now, location: 'raw/Manual Fetch Kimi /condiment_papers/01_Oils/ (declared raw_path, resolved through the library fallback)', outcome: 'Same article without supplementary tables.'},
          {channel: 'publisher_or_open_access', attempted_at: now, location: 'https://europepmc.org/articles/PMC9114524 (Europe PMC: open access, hasSuppl=Y); https://www.sciencedirect.com/science/article/pii/S2590157522001249 returned HTTP 403 to automated access', outcome: 'Supplementary files exist in the open-access record; not downloaded pending owner approval of the file download.'},
          {channel: 'backup_library', attempted_at: now, location: '/Users/kmfp/HMI-Library-backup/heavy-metal-index-raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/01_Oils_Butter/03_Fechner_Food_Chemistry_X_2022.pdf', outcome: 'Article only; no supplement.'}];
        base.retrieval_request = {requested_at: now, request: 'Download the Food Chemistry: X 2022 supplementary data (doi 10.1016/j.fochx.2022.100326; Europe PMC PMC9114524) and extract the honey rows for Hg, Cd, Pb and Ni.'};
      }
    } else if (c) {
      Object.assign(base, {disposition: c.disposition, rationale: c.reason || c.disposition_reason, locators: [locator(root, copy ?? recordPath, 'page', c.locator || c.disposition_locator)]});
    } else if (/^sources\/categories\//.test(recordPath.replace('wiki/', ''))) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Regional catalogue page that lists source records by geography; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
    } else if (sid === 'chinanhc2025-gb-2762-contaminants') {
      const p = '/Users/kmfp/HMI-Library-backup/Regulatory documents/China_GB-2762-2025_2025_Contaminant-MLs.pdf';
      Object.assign(base, {disposition: 'exposure_or_regulatory_used', rationale: 'GB 2762-2025 sets lead in honey at 0.5 mg/kg (in force 2 September 2026), verified from the Chinese original.', locators: [locator(root, p, 'table', 'Section 4.1, Table 1 (continued), row 蜂蜜 0.5; PDF p.6')]});
    } else if (sid === 'codex-cxs-193-1995') {
      const p = '/Users/kmfp/HMI-Library-backup/Regulatory documents/CXS_193e.pdf';
      Object.assign(base, {disposition: 'exposure_or_regulatory_used', rationale: 'The 2025-amended Codex General Standard sets lead at 0.1 mg/kg for "white and refined sugar, corn and maple syrups, honey".', locators: [locator(root, p, 'table', 'Annex, Lead commodity table, row "White and refined sugar, corn and maple syrups, honey" 0.1 mg/kg; printed p.65')]});
    } else { errors.push(`${sid}: no content-based disposition`); continue; }
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- indexed dataset rows
  const fdaRows = new Map();
  { const csvPath = 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv';
    parseCSV(fs.readFileSync(path.join(root, csvPath), 'utf8')).forEach((r, i) => { if (r.tds_food_number === '172') fdaRows.set(`dataset:${csvPath}#row ${i + 2}`, r); }); }
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
    } else if (u.source_id === FDA && fdaRows.has(u.id)) {
      const r = fdaRows.get(u.id), result = occ.rows.find(x => x.source === FDA && x.analyte === r.metal_species);
      if (result) Object.assign(base, {disposition: 'occurrence_extracted', rationale: `FDA TDS honey composite (${r.analyte}, FY${r.fiscal_year} ${r.season}); contributes to the FDA honey result for ${r.metal_species}.`, result_ids: [result.result_id], extraction_complete: true});
      else Object.assign(base, {disposition: 'out_of_scope', rationale: `Element "${r.analyte.trim()}" is outside the HMI analyte list (nutrient or untracked element).`});
    } else if (u.source_id === 'ingredient-synthesis:honey') {
      Object.assign(base, {disposition: 'context_only', rationale: 'Legacy HMI commodity-synthesis row derived from earlier source values; superseded by this ledger’s primary-text extraction and not used as evidence.'});
    } else if (u.source_id === 'jackson2012-brown-rice-syrup-arsenic') {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Organic brown rice syrup grouped with honey in a "honey and syrups" product category; not honey.'});
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
    const def = ref.distribution;
    for (const u of def.units ?? []) {
      const src = occ.unit_list.find(x => x.ref_key === ref.id.split(':')[1] && x.id === u.id);
      const id = `${ref.id.split(':')[1]}:${u.id}`;
      const scope = {analyte: src.analyte, material: 'honey', basis: 'Honey as sold or collected', unit: 'µg/kg'};
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
      family_id: r.source, scope: {analyte: r.analyte, material: 'honey', basis: r.basis, unit: r.unit},
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
    const [analyte, , basis, unit] = JSON.parse(key);
    const record = occ.record.references.find(x => x.id.includes(`:honey-pooled-${analyte}:`) && unit === 'µg/kg');
    const id = record?.id ?? `honey-assessment:${analyte}:${unit}`;
    const unitIDs = units.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = units.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => ({result_id: r.id,
      scientific_reason: unit !== 'µg/kg' ? 'Reported in mg/L of honey without a density; no µg/kg reference can apply.' : `${r.family_id} reports ${r.statistic.replace('_', ' ')} values${/held|integrity/i.test(r.comparison.reason_code ?? '') ? ' that fail an integrity check against the paper' : ''}; only observed subgroup medians or individual sample values can enter a reference.`,
      locator: r.locator}));
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_');
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 2) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material: 'honey', basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(single ? [`This is the only compatible family for ${analyte} in the completed honey ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'honey', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
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
  const scorecard = buildFullnessScorecard('honey', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'honey', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); console.log(JSON.stringify({items: ledger.items.length, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
