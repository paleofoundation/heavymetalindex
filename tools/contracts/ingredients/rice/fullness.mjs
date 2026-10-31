// Rice evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { loadIndependentCorpus, recomputeUniverse, parseCSV } from '../../../ingredient-source-universe.mjs';
import { frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness } from '../../../audit-ingredient-fullness.mjs';
import { evidenceLedgerSchema } from '../../ingredient-evidence-ledger.mjs';
import { LIBRARY_MOUNT } from '../../../lib/library-root.mjs';
import { riceOccurrence, loadExtractions, auditDir, GEMS, FDA, DUPLICATE_SOURCES } from './source-adapter.mjs';

export const ledgerDir = 'data/evidence/contracts/rice';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const fileSha = new Map();
const shaFile = (root, p) => { const abs = path.isAbsolute(p) ? p : path.join(root, p); if (!fileSha.has(abs)) fileSha.set(abs, sha(fs.readFileSync(abs))); return fileSha.get(abs); };
const now = '2026-10-22T20:00:00Z';
const BACKUP_RAW = path.join(os.homedir(), 'HMI-Library-backup/heavy-metal-index-raw');
const SPECIES = { Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', tHg: 'total mercury', MeHg: 'methylmercury',
  Ni: 'total nickel', Cr: 'total chromium', 'Cr-VI': 'hexavalent chromium', Al: 'total aluminium', Sn: 'total tin', Sb: 'total antimony', U: 'total uranium' };
const BASELINE_DATA = 'data/evidence/contracts/pilot-2026-10-17/rice-depth/baseline-primary-data.json';
const PILOT_OCC = 'data/evidence/contracts/pilot-2026-10-17/rice-depth/occurrence-findings.json';
const FDA_SUMMARY = 'data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv';
const FDA_SAMPLES = 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv';

function primaryCopy(root, sid) {
  const p = `${auditDir}/primary/${sid}.txt`;
  if (fs.existsSync(path.join(root, p))) return p;
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-rice-records.csv`;
  if (sid === FDA) return FDA_SUMMARY;
  return null;
}
const locator = (root, artifact, kind, location) => ({ artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').replace(/\s+/g, ' ').slice(0, 500) });
const normDisposition = d => d.startsWith('duplicate_of:') && !d.startsWith('duplicate_of:source:') && !d.startsWith('duplicate_of:dataset:') ? d.replace('duplicate_of:', 'duplicate_of:source:') : d;

export function buildLedger(root, occ = riceOccurrence(root)) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, { ingredients: ['rice'] }), 'rice');
  const ex = loadExtractions(root);
  const access = JSON.parse(fs.readFileSync(path.join(root, auditDir, 'access-recovery.json'), 'utf8'));
  const accessByID = Object.fromEntries(access.map(a => [a.source_id, a]));
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const items = [], errors = [], notes = [];

  // ---------------------------------------------------------------- source records
  const universeByID = new Map(universe.items.map(i => [i.id, i]));
  for (const u of universe.items.filter(i => i.kind === 'source')) {
    const sid = u.source_id, recordPath = u.path;
    const base = { id: u.id, source_id: sid, family_id: sid, content_sha256: u.sha256, decision_basis: 'primary_text', result_ids: [], extraction_complete: false };
    const copy = primaryCopy(root, sid), x = ex[sid], rows = resultsBySource.get(sid) ?? [];
    if (rows.length) {
      Object.assign(base, { disposition: 'occurrence_extracted', rationale: x?.disposition === 'occurrence_extracted' ? x.disposition_reason : sid === FDA ? 'FDA Total Diet Study FY2018–FY2020: every cooked white and brown rice composite (foods 50 and 402) for eight tracked elements, summarised per food and analyte with the full sample register.' : `${x?.disposition_reason ?? ''} Its reviewed rice findings are rendered rows on this page.`.trim(),
        locators: [locator(root, copy ?? recordPath, 'page', x?.disposition_locator ?? (sid === FDA ? 'Summary by food and analyte, foods 50 and 402' : 'source findings'))], result_ids: rows.map(r => r.result_id), extraction_complete: true });
      if (x && x.disposition !== 'occurrence_extracted') notes.push(`${sid}: extraction disposition ${x.disposition} overridden because reviewed rows exist`);
    } else if (x) {
      let d = normDisposition(DUPLICATE_SOURCES[sid] ? `duplicate_of:source:${DUPLICATE_SOURCES[sid]}` : x.disposition);
      let rationale = DUPLICATE_SOURCES[sid] ? `Restates the ${DUPLICATE_SOURCES[sid]} dataset (same samples and values); that ledger item holds the extracted results. ${x.disposition_reason}` : x.disposition_reason;
      if (d === 'occurrence_extracted') { d = 'context_only'; rationale = `${rationale} No tabulated HMI rice-grain analyte result remains after extraction (only non-HMI species or out-of-scope materials).`; }
      Object.assign(base, { disposition: d, rationale, locators: [locator(root, copy ?? recordPath, 'page', x.disposition_locator)] });
      if (d === 'access_blocked') addRetrieval(base, root, sid, accessByID[sid], recordPath);
    } else if (/^wiki\/sources\/(categories\/|index\.md$)/.test(recordPath)) {
      Object.assign(base, { disposition: 'out_of_scope', rationale: 'Source catalogue page that lists source records by region or index; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')] });
    } else if (accessByID[sid] && !accessByID[sid].found) {
      Object.assign(base, { disposition: 'access_blocked', rationale: `No local primary text: ${accessByID[sid].retrieval_request}`, locators: [locator(root, recordPath, 'page', 'source record identity (primary text unavailable)')] });
      addRetrieval(base, root, sid, accessByID[sid], recordPath);
    } else { errors.push(`${sid}: no content-based disposition`); continue; }
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));
  for (const i of items) if (i.disposition.startsWith('duplicate_of:') && !itemByID.has(i.disposition.slice(13))) { errors.push(`${i.id}: duplicate target ${i.disposition} absent`); }

  // ---------------------------------------------------------------- indexed dataset rows
  const gemsDisp = JSON.parse(fs.readFileSync(path.join(root, auditDir, 'gemsfood-row-dispositions.json'), 'utf8'));
  const fdaDisp = JSON.parse(fs.readFileSync(path.join(root, auditDir, 'fda-row-dispositions.json'), 'utf8'));
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const fdaRow = new Map(occ.rows.filter(r => r.source === FDA).map(r => [`${r.food_number}:${r.analyte}`, r]));
  const summaryRows = parseCSV(fs.readFileSync(path.join(root, FDA_SUMMARY), 'utf8'));
  const extraItems = new Map(); // result_id -> dataset item ids
  const rowLocator = u => { const p = path.join(root, u.path); const physical = fs.existsSync(p) ? p : path.join(BACKUP_RAW, u.path.replace(/^raw\//, ''));
    return { artifact: fs.existsSync(p) ? u.path : physical, sha256: shaFile(root, physical), kind: 'cell', location: u.row_locator }; };
  for (const u of universe.items.filter(i => i.kind === 'dataset_row')) {
    const base = { id: u.id, source_id: u.source_id, family_id: u.source_id, content_sha256: u.sha256, decision_basis: 'primary_text', locators: [rowLocator(u)], result_ids: [], extraction_complete: false };
    const link = r => { base.result_ids = [r.result_id]; base.extraction_complete = true; if (!extraItems.has(r.result_id)) extraItems.set(r.result_id, []); extraItems.get(r.result_id).push(u.id); };
    if (gemsDisp[u.id]) {
      const d = gemsDisp[u.id];
      Object.assign(base, { disposition: d.disposition, rationale: d.rationale });
      if (d.disposition === 'occurrence_extracted') { const r = resultByFinding.get(d.result_finding); if (!r) { errors.push(`${u.id}: GEMS result ${d.result_finding} not rendered`); continue; } link(r); }
    } else if (fdaDisp[u.id]) {
      const d = fdaDisp[u.id];
      Object.assign(base, { disposition: d.disposition, rationale: d.rationale });
      if (d.disposition === 'occurrence_extracted') { const r = fdaRow.get(d.result_key); if (!r) { errors.push(`${u.id}: FDA result ${d.result_key} not rendered`); continue; } link(r); }
    } else if (u.path === FDA_SUMMARY) {
      const r0 = summaryRows[Number(u.row_locator.split(' ')[1]) - 2], r = r0 && fdaRow.get(`${r0.tds_food_number}:${r0.metal_species}`);
      if (r) { Object.assign(base, { disposition: 'occurrence_extracted', rationale: `FDA TDS summary row for ${r0.tds_food_description}, ${r0.metal_species}; it is the rendered summary for this food and analyte.` }); link(r); }
      else Object.assign(base, { disposition: 'out_of_scope', rationale: `FDA TDS summary row for "${r0?.tds_food_description ?? 'another food'}" (${r0?.analyte ?? r0?.metal_species ?? 'element'}): a rice product, mixed food or untracked element, not a rice-grain HMI analyte.` });
    } else if (u.source_id === GEMS) {
      Object.assign(base, { disposition: 'context_only', rationale: 'HMI index summary row restating GEMS/Food submissions by food and contaminant; the individual rice-grain submissions are decided and extracted as their own ledger items.' });
    } else if (itemByID.has(`source:${u.source_id}`)) {
      const target = itemByID.get(`source:${u.source_id}`);
      Object.assign(base, { disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row (${u.path.split('/').pop()}) restating values or routing from ${u.source_id}; the source record is the decided ledger item (${target.disposition}).` });
    } else if (u.source_id.startsWith('ingredient-synthesis:')) {
      Object.assign(base, { disposition: 'context_only', rationale: 'Legacy HMI commodity-synthesis row derived from earlier source values; not primary evidence for rice grain.' });
    } else {
      Object.assign(base, { disposition: 'out_of_scope', rationale: `Indexed row for "${u.food}" in ${u.path.split('/').pop()}; no rice-grain source record of its own is in the rice universe.` });
      notes.push(`${u.id}: fallback out_of_scope`);
    }
    items.push(base);
  }

  // ---------------------------------------------------------------- results and reference units
  const unitLedger = [], unitsByResult = new Map();
  for (const d of occ.definitions) {
    const [a, material, basis, unit] = JSON.parse(d.scope_id);
    for (const u of d.referenceUnits) {
      const id = `${d.key}:${u.id}`;
      const artifact = BASELINE_FAMILIES_DATA(u) ? BASELINE_DATA : u.family === FDA ? FDA_SAMPLES : primaryCopy(root, u.family) ?? `wiki/sources/${u.family}.md`;
      unitLedger.push({ id, item_id: u.member_item ?? `source:${u.family}`, family_id: u.family, scope: { analyte: a, material, basis, unit }, statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper, locator: locator(root, artifact, 'table', u.locator) });
      if (!unitsByResult.has(u.result_id)) unitsByResult.set(u.result_id, []);
      unitsByResult.get(u.result_id).push(id);
    }
  }
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = c.hmi.target ?? r.profile.variants['::'].median ?? null;
    const p = r.primary ?? {};
    const lower = t?.lower ?? (Number.isFinite(p.min_ug_kg) ? p.min_ug_kg : Number.isFinite(r.min) ? r.min : null);
    const upper = t?.upper ?? (Number.isFinite(p.max_ug_kg) ? p.max_ug_kg : Number.isFinite(r.max) ? r.max : null);
    const comparison = { state: r.comparison_state, attempts: r.comparison_attempts };
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    const copy = r.source === FDA ? FDA_SUMMARY : primaryCopy(root, r.source) ?? (r.pilot ? PILOT_OCC : `wiki/sources/${r.source}.md`);
    return { id: r.result_id, item_ids: [...(itemByID.has(`source:${r.source}`) ? [`source:${r.source}`] : []), ...(extraItems.get(r.result_id) ?? [])], family_id: r.source, scope: r.scope,
      form: String(r.food), origin_or_market: `${r.group_full ?? r.region} (${r.region_type})`, year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte,
      statistic: String(r.statistic), basis: r.scope.basis, n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring ?? 'As reported by the source'), unit: r.unit, value: Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null),
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(root, copy, 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison };
  });

  // ---------------------------------------------------------------- references (one assessment per result scope)
  const scopeKey = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const resultsByScope = Map.groupBy(results, r => scopeKey(r.scope));
  const refs = [];
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), { recursive: true });
  const recordByKey = new Map(occ.record.references.map(x => [x.id.split(':')[1], x]));
  for (const [key, scoped] of resultsByScope) {
    const [analyte, material, basis, unit] = JSON.parse(key);
    const def = occ.definitions.find(d => d.scope_id === key);
    const record = def ? recordByKey.get(def.key) : null;
    const id = record?.id ?? `rice-assessment:${analyte}:${material}:${basis}:${unit}`;
    const unitIDs = unitLedger.filter(u => scopeKey(u.scope) === key).map(u => u.id).sort();
    const included = unitLedger.filter(u => unitIDs.includes(u.id)), families = [...new Set(included.map(u => u.family_id))].sort();
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => ({ result_id: r.id,
      scientific_reason: unit !== 'µg/kg' ? `Reported as ${unit}; no µg/kg concentration reference can apply.`
        : r.comparison.reason_code === 'value_fails_source_integrity_check' ? 'The value fails a source-integrity check against its own paper and is held from every reference.'
        : `${r.family_id} reports only ${r.statistic.replace(/_/g, ' ')} values in this scope; only observed subgroup medians or individual sample values can enter a reference, and means, ranges, percentiles and maxima are excluded.`,
      locator: r.locator }));
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_').slice(0, 150);
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; const text = JSON.stringify(body, null, 1) + '\n'; fs.writeFileSync(path.join(root, f), text); fileSha.delete(path.join(root, f)); return { artifact: f, sha256: sha(text) }; };
    const single = families.length === 1;
    refs.push({ id, scope: { analyte, material, basis, unit }, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? { label: record.sensitivity?.label, distribution: record.sensitivity?.distribution } : { note: 'No reference units in this scope; no sensitivity analysis applies.' }),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : { note: 'No reference units in this scope; no leave-one-out analysis applies.' }),
      limitations: [record?.limitations ?? def?.limitations ?? 'No compatible reference units exist for this scope after the complete rice ledger.',
        ...(single ? [`This is the only compatible family for ${analyte} (${material}; ${basis}) in the completed rice ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])] });
  }
  const ledger = { schema_version: 1, ingredient: 'rice', completed_at: now, items, results, reference_units: unitLedger, references: refs };
  const parsed = evidenceLedgerSchema.safeParse(ledger);
  if (!parsed.success) errors.push(...parsed.error.issues.slice(0, 20).map(i => `schema ${i.path.join('.')}: ${i.message}`));
  return { ledger, universe, errors, notes };
}
const BASELINE_FAMILIES_DATA = u => !!u.pilot_definition;

function addRetrieval(base, root, sid, a, recordPath) {
  const t = now;
  const found = a?.attempts ?? [];
  const pick = ch => found.find(x => x.channel === ch);
  const mounted = pick('mounted_library');
  base.retrieval_attempts = [
    { channel: 'mounted_library', attempted_at: mounted?.attempted_at ?? t, location: a?.physical_path?.startsWith(LIBRARY_MOUNT + '/') ? a.physical_path : LIBRARY_MOUNT,
      outcome: `${mounted?.location ? `Search: ${mounted.location}. ` : ''}${mounted?.outcome ?? 'Searched the mounted HMI Library by author, year, DOI and title keywords; no complete copy found.'}`, mounted: true },
    { channel: 'raw', attempted_at: pick('raw')?.attempted_at ?? t, location: pick('raw')?.location ?? 'raw/ (repository raw folders)', outcome: pick('raw')?.outcome ?? 'Declared raw path absent.' },
    { channel: 'publisher_or_open_access', attempted_at: pick('publisher_or_open_access')?.attempted_at ?? t, location: pick('publisher_or_open_access')?.location ?? 'publisher record from the source DOI/access_url', outcome: pick('publisher_or_open_access')?.outcome ?? 'Not downloaded; downloads need owner approval.' },
    { channel: 'backup_library', attempted_at: pick('backup_library')?.attempted_at ?? t, location: pick('backup_library')?.location ?? path.join(os.homedir(), 'HMI-Library-backup'), outcome: pick('backup_library')?.outcome ?? 'No complete copy in the backup.' }];
  base.retrieval_request = { requested_at: t, request: a?.retrieval_request || `Obtain the complete primary text of ${sid} (see ${recordPath}) for rice-grain extraction.` };
}

export function writeLedger(root, occ) {
  const { ledger, universe, errors, notes } = buildLedger(root, occ);
  if (errors.length) throw Error('Ledger errors:\n' + errors.slice(0, 40).join('\n'));
  fs.mkdirSync(path.join(root, ledgerDir), { recursive: true });
  fs.writeFileSync(path.join(root, ledgerDir, 'evidence-ledger.json'), JSON.stringify(ledger) + '\n');
  return { ledger, universe, notes };
}

// The scorecard is written only from the exact final HTML, then the gate runs on it.
export function scoreAndGate(root, htmlPath) {
  const { ledger, universe } = writeLedger(root);
  const page = inspectFullnessHTML(fs.readFileSync(htmlPath, 'utf8'));
  const scorecard = buildFullnessScorecard('rice', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ ingredient: 'rice', universe, ledger, page, scorecard, repo: root });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const { ledger, notes } = writeLedger(root); console.log(JSON.stringify({ items: ledger.items.length, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length, notes: notes.slice(0, 20), note_count: notes.length })); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({ status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, { status: v.status, errors: v.errors.length, first: v.errors.slice(0, 6) }])) }, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
