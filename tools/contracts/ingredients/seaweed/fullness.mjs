// Seaweed evidence ledger, reference artifacts and fullness scorecard in the shared
// schema (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed
// here with the shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {seaweedOccurrence, auditDir, GEMS} from './source-adapter.mjs';

export const ledgerDir = 'data/evidence/contracts/seaweed';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaCache = new Map();
const shaFile = (root, p) => { const a = path.isAbsolute(p) ? p : path.join(root, p); if (!shaCache.has(a)) shaCache.set(a, sha(fs.readFileSync(a))); return shaCache.get(a); };
const now = '2026-10-22T12:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', tHg: 'total mercury', MeHg: 'methylmercury', Ni: 'total nickel', Cr: 'total chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium'};

function primaryCopy(root, sid, x) {
  const cands = [x?.text_copy, `${auditDir}/primary/text/${sid}.txt`].filter(Boolean).map(p => p.startsWith('data/') ? p : path.isAbsolute(p) ? p : `${auditDir}/${p}`);
  for (const p of cands) if (fs.existsSync(path.isAbsolute(p) ? p : path.join(root, p))) return p;
  if (sid === GEMS) return `${auditDir}/primary/gemsfood-seaweed-records.csv`;
  return null;
}
const locator = (root, artifact, kind, location) => ({artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

export function buildLedger(root) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['seaweed']}), 'seaweed');
  const occ = seaweedOccurrence(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const access = Object.fromEntries(read('source-access.json').records.map(r => [r.source_id, r]));
  const indexOnly = read('index-only-sources.json');
  const gemsRows = read('gemsfood-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const items = [], errors = [];

  // ---------------------------------------------------------------- source records
  for (const u of universe.items.filter(i => i.kind === 'source').sort((a, b) => a.id.localeCompare(b.id))) {
    const sid = u.source_id, recordPath = u.path;
    const base = {id: u.id, source_id: sid, family_id: sid, content_sha256: u.sha256, decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const x = extraction[sid];
    if (/^wiki\/sources\/(categories\/|index\.md$)/.test(recordPath)) {
      Object.assign(base, {disposition: 'out_of_scope', rationale: 'Catalogue page that lists source records by region or index; it reports no measurements itself.', locators: [locator(root, recordPath, 'page', 'catalogue list')]});
    } else if (x) {
      const copy = primaryCopy(root, sid, x) ?? recordPath;
      const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
      let disposition = x.disposition;
      if (disposition.startsWith('duplicate_of:') && !disposition.startsWith('duplicate_of:source:')) disposition = disposition.replace('duplicate_of:', 'duplicate_of:source:');
      // An occurrence source whose seaweed values are all untracked species or ratios is context for this page.
      if (disposition === 'occurrence_extracted' && !results.length) disposition = 'context_only';
      Object.assign(base, {disposition, rationale: String(x.disposition_reason || '').slice(0, 1500) + (disposition !== x.disposition ? ' Its seaweed values are untracked arsenic species, percentages or iodine only, so no table row results.' : ''),
        locators: [locator(root, copy, 'page', x.disposition_locator)], result_ids: disposition === 'occurrence_extracted' ? results : [], extraction_complete: disposition === 'occurrence_extracted'});
      if (disposition === 'access_blocked') {
        const a = access[sid] ?? {attempts: []};
        base.retrieval_attempts = [
          {channel: 'mounted_library', attempted_at: now, location: (a.attempts.find(t => t.path?.startsWith('/Volumes/HMI-Library'))?.path) ?? '/Volumes/HMI-Library/heavy-metal-index-raw (declared path mapped)', outcome: 'Declared file absent on the mounted HMI Library volume.', mounted: true},
          {channel: 'raw', attempted_at: now, location: a.declared?.[0] ?? 'no declared raw path', outcome: 'Repository raw path absent.'},
          {channel: 'publisher_or_open_access', attempted_at: now, location: a.doi ? `https://doi.org/${a.doi}` : 'no DOI recorded', outcome: 'Not downloaded: downloads require owner approval.'},
          {channel: 'backup_library', attempted_at: now, location: '/Users/kmfp/HMI-Library-backup', outcome: 'No copy in the backup library.'}];
        base.retrieval_request = {requested_at: now, request: `Retrieve the primary text of ${sid}${a.doi ? ` (doi ${a.doi})` : ''} and extract its seaweed results.`};
      }
      if (disposition === 'occurrence_extracted' && !results.length) errors.push(`${sid}: extracted source without results`);
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
    } else if (u.source_id === GEMS) {
      Object.assign(base, {disposition: `duplicate_of:source:${GEMS}`, rationale: 'HMI GEMS/Food summary or index row restating individual submissions that are decided row by row elsewhere in this ledger.'});
    } else if (u.source_id === 'ingredient-synthesis:seaweed') {
      Object.assign(base, {disposition: 'context_only', rationale: 'Legacy HMI commodity-synthesis row derived from earlier source values; superseded by this ledger’s primary-text extraction and not used as evidence.'});
    } else if (itemByID.has(`source:${u.source_id}`)) {
      Object.assign(base, {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating or routing ${u.source_id}; the source record is the decided ledger item.`});
    } else if (indexOnly[u.source_id]) {
      const v = indexOnly[u.source_id];
      const compiled = /mititelu2025|tamele2020/.test(u.source_id);
      Object.assign(base, {disposition: compiled ? 'context_only' : 'out_of_scope',
        rationale: v.chars > 500 ? (v.seaweed_term_hits ? `Index row routing ${u.source_id} to seaweed. Its primary text (${v.chars} characters) mentions seaweed only ${compiled ? 'in a compiled review table of other studies' : 'in citations or background sentences'} (${v.seaweed_term_hits} term hits: ${v.terms.join(', ')}); it reports no seaweed measurements of its own.` : `Index row routing ${u.source_id} to seaweed by a broad seafood fan-out; its primary text (${v.chars} characters) contains no seaweed or macroalgae term.`)
          : `Index row routing ${u.source_id} to seaweed by a broad seafood fan-out; the source record does not mention seaweed and no readable primary text exists for it.`});
      if (v.artifact) base.locators.push(locator(root, v.artifact, 'page', v.contexts?.[0] ? `term context: ${v.contexts[0]}` : 'whole document: no seaweed term'));
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
      const scope = {analyte: src.analyte, material: 'seaweed', basis: src.basis, unit: 'µg/kg'};
      const copy = u.family === GEMS ? `${auditDir}/primary/gemsfood-seaweed-records.csv` : (primaryCopy(root, u.family, extraction[u.family]) ?? `wiki/sources/${u.family}.md`);
      units.push({id, item_id: `source:${u.family}`, family_id: u.family, scope, statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper, locator: locator(root, copy, 'table', u.locator)});
      if (!unitsByResult.has(src.result_id)) unitsByResult.set(src.result_id, []); unitsByResult.get(src.result_id).push(id);
    }
  }
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = r.profile.variants['::'].median, copy = primaryCopy(root, r.source, extraction[r.source]) ?? `wiki/sources/${r.source}.md`;
    const p = r.primary;
    const lower = t?.lower ?? (Number.isFinite(p.min_ug_kg) ? p.min_ug_kg : null), upper = t?.upper ?? (Number.isFinite(p.max_ug_kg) ? p.max_ug_kg : null);
    const comparison = {state: r.comparison_state, attempts: r.comparison_attempts};
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(gemsResultIDs.get(r.result_id) ?? [])],
      family_id: r.source, scope: {analyte: r.analyte, material: 'seaweed', basis: r.basis, unit: r.unit},
      form: `${r.food}${r.species ? ` (${r.species})` : ''}`.slice(0, 300), origin_or_market: `${r.group_full} (${r.region_type})`.slice(0, 400), year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte,
      statistic: r.statistic, basis: r.basis, n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring).slice(0, 400), unit: r.unit, value: Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null),
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(root, copy, 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison};
  });

  // ---------------------------------------------------------------- references (one assessment per result scope)
  const scopeKey = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const resultsByScope = Map.groupBy(results, r => scopeKey(r.scope));
  const refs = [];
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  const keyOf = (a, b) => `seaweed-${a}-${b.replace(/[^a-z0-9]+/gi, '-')}`;
  for (const [key, scoped] of resultsByScope) {
    const [analyte, , basis, unit] = JSON.parse(key);
    const record = occ.record.references.find(x => x.id.split(':')[1] === keyOf(analyte, basis));
    const id = record?.id ?? `seaweed-assessment:${analyte}:${basis.replace(/[^a-z0-9]+/gi, '-')}`;
    const included = units.filter(u => scopeKey(u.scope) === key), unitIDs = included.map(u => u.id).sort(), families = [...new Set(included.map(u => u.family_id))].sort();
    const rowFor = new Map(occ.rows.map(r => [r.result_id, r]));
    const exclusions = scoped.filter(r => !r.reference_unit_ids.length).map(r => { const row = rowFor.get(r.id); return {result_id: r.id,
      scientific_reason: row.hold ? `Held: ${row.hold}`.slice(0, 400) : row.qc ? 'Certified reference or quality-control material, not a market or harvest sample.' : row.supplement ? 'Supplement product; not pooled with seaweed foods.'
        : row.primary.derived_by_extractor ? 'Value computed by the extractor from the deposit, not a source-reported statistic.' : !families.length ? `No observed subgroup medians or individual sample values exist for ${analyte} on this basis (${basis}) anywhere in the completed ledger.`
        : `${row.statistic.replace('_', ' ')} result; only observed subgroup medians or individual sample values can enter a reference.`,
      locator: r.locator}; });
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_');
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 1) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope: {analyte, material: 'seaweed', basis, unit}, unit_ids: unitIDs, family_ids: families, exclusions,
      method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation', frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this scope after the complete ledger.',
        ...(single ? [`This is the only compatible family with observed subgroup medians or sample values for ${analyte} on this basis in the completed seaweed ledger; other families report only means, ranges or held values, and a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const ledger = {schema_version: 1, ingredient: 'seaweed', completed_at: now, items, results, reference_units: units.filter(u => results.some(r => r.reference_unit_ids.includes(u.id))), references: refs};
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
  const scorecard = buildFullnessScorecard('seaweed', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 1) + '\n');
  return evaluateIngredientFullness({ingredient: 'seaweed', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); const c = {}; for (const i of ledger.items) { const k = i.disposition.split(':')[0]; c[k] = (c[k] ?? 0) + 1; } console.log(JSON.stringify({items: ledger.items.length, dispositions: c, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
