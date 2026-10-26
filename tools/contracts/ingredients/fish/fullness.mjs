// Fish evidence ledger, reference artifacts and fullness scorecard in the shared schema
// (docs/contracts/ingredient-fullness-gates.md). The universe is recomputed here with the
// shared discovery tool; nothing is taken from an adapter-supplied list.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse, parseCSV} from '../../../ingredient-source-universe.mjs';
import {frozenMembershipHash, buildFullnessScorecard, inspectFullnessHTML, evaluateIngredientFullness} from '../../../audit-ingredient-fullness.mjs';
import {evidenceLedgerSchema} from '../../ingredient-evidence-ledger.mjs';
import {LIBRARY_MOUNT} from '../../../lib/library-root.mjs';
import {fishOccurrence, auditDir, scopeOf, refKey} from './source-adapter.mjs';

const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
export const ledgerDir = 'data/evidence/contracts/fish';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const shaCache = new Map();
const shaFile = (root, p) => { const abs = path.isAbsolute(p) ? p : path.join(root, p); if (!shaCache.has(abs)) shaCache.set(abs, sha(fs.readFileSync(abs))); return shaCache.get(abs); };
const now = '2026-10-22T20:00:00Z';
const SPECIES = {Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', MMA: 'monomethylarsonic acid', oAs: 'organic arsenic (unspecified)',
  As_unspecified: 'arsenic, speciation not reported', tHg: 'total mercury', MeHg: 'methylmercury', iHg: 'inorganic mercury', Hg_unspecified: 'mercury, speciation not reported', Ni: 'total nickel',
  Cr: 'total chromium', 'Cr-VI': 'hexavalent chromium', Al: 'total aluminium', Sn: 'total tin', U: 'total uranium', Sb: 'total antimony'};

const inventory = root => Object.fromEntries(JSON.parse(fs.readFileSync(path.join(root, auditDir, 'source-inventory.json'), 'utf8')).map(x => [x.source_id, x]));
// The best readable primary-text artifact for a source: the text copy, else the primary file the extractor read, else the source record.
function primaryArtifact(root, sid, x, inv, recordPath = `wiki/sources/${sid}.md`) {
  const text = `${auditDir}/text/${sid}.txt`;
  if (fs.existsSync(path.join(root, text)) && fs.statSync(path.join(root, text)).size > 200) return text;
  const p = x?.primary_artifact;
  if (typeof p === 'string' && fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  if (x?.text_copy && typeof x.text_copy === 'string') { const t = path.isAbsolute(x.text_copy) ? x.text_copy : path.join(root, x.text_copy.startsWith('data/') ? '' : auditDir, x.text_copy); if (fs.existsSync(t) && fs.statSync(t).isFile()) return t; }
  if (inv?.primary && fs.existsSync(inv.primary)) return inv.primary;
  return recordPath;
}
const locator = (root, artifact, kind, location) => ({artifact: path.isAbsolute(artifact) && artifact.startsWith(root) ? path.relative(root, artifact) : artifact, sha256: shaFile(root, artifact), kind, location: String(location || 'whole document').slice(0, 500)});

// Index rows that name a source record outside the fish source universe: decided on the
// row and the record content (all are shellfish, method or review records, not finfish data).
const INDEX_ONLY = {
  'jesse2025-unknown': 'Review-queue row naming no existing source record; the row carries a routing label only and no measurement.',
  '(tail-scan)': 'Adjudication row produced by an automated tail scan, naming no source record; it carries a routing label only and no measurement.',
  'schaefer2020-cadmium-mitigation-strategies': 'Routing rows send a cadmium-mitigation review to seafood pages; the record is a review of crop and soil cadmium mitigation with no fish measurements.',
  'authors2026-access-metrics-more-article-recommendations-supporting-information': 'Re-ingest queue row with a fish routing label for a record whose content is a laboratory chemistry article with no fish measurements.',
  'bjerregaard2023-mercury-mussels-denmark': 'Routing rows send a mussel mercury study to fish pages by broad seafood fan-out; the record measures mussels only, not finfish.',
  'bruno2024-metals-mussels-clams-faro-lake-sicily': 'Routing rows send a mussel and clam study to fish pages by broad seafood fan-out; no finfish were measured.',
  'li2025-ratiometric-fluorescent-sensor-al-cu-food': 'Routing rows send a fluorescent-sensor method paper to fish pages; it reports spiked recoveries, not fish occurrence.',
  'onyegeme-okerenta2023-shellfish-nigeria': 'Routing rows send a shellfish study to fish pages by broad seafood fan-out; no finfish were measured.',
};

function retrieval(root, sid, inv, x) {
  const attempts = (inv?.attempts ?? []);
  const mounted = attempts.find(a => a.channel === 'mounted_library');
  const rawA = attempts.find(a => a.channel === 'repository_raw' || a.channel === 'declared');
  const backup = attempts.find(a => a.channel === 'backup_library');
  const doi = inv?.doi && inv.doi !== 'null' ? `https://doi.org/${inv.doi}` : null;
  const searched = (x?.unresolved ?? []).join(' ').slice(0, 400);
  return {
    retrieval_attempts: [
      {channel: 'mounted_library', attempted_at: now, location: mounted?.location ?? `${LIBRARY_MOUNT}/heavy-metal-index-raw`, outcome: (mounted ? `Declared path ${mounted.outcome}. ` : 'No declared path on the volume. ') + `Volume searched by title and DOI fragments. ${searched}`.trim(), mounted: true},
      {channel: 'raw', attempted_at: now, location: rawA?.location ?? (inv?.declared_paths?.[0] ? path.join(root, inv.declared_paths[0]) : path.join(root, 'raw')), outcome: rawA ? `Declared repository path ${rawA.outcome}.` : 'No repository raw copy.'},
      {channel: 'publisher_or_open_access', attempted_at: now, location: doi ?? (inv?.title ? `Publisher or agency copy of "${String(inv.title).slice(0, 120)}"` : 'Publisher copy'), outcome: 'Not downloaded: internet retrieval requires owner approval.'},
      {channel: 'backup_library', attempted_at: now, location: backup?.location ?? path.join(process.env.HOME, 'HMI-Library-backup'), outcome: backup ? `Backup path ${backup.outcome}; backup searched by title and DOI fragments.` : 'Backup searched by title and DOI fragments; no copy.'},
    ],
    retrieval_request: {requested_at: now, request: `Retrieve the full text of ${sid}${doi ? ` (${doi})` : ''} into the HMI Library raw folder and re-run the fish extraction for it.`},
  };
}

export function buildLedger(root, occ = fishOccurrence(root)) {
  const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['fish']}), 'fish');
  const inv = inventory(root);
  const read = f => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
  const extraction = Object.fromEntries(fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).map(f => { const x = read(`extraction/${f}`); return [x.source_id, x]; }));
  const gemsRows = read('gemsfood-row-dispositions.json'), fdaRows = read('fda-row-dispositions.json');
  const resultsBySource = Map.groupBy(occ.rows, r => r.source);
  const resultByFinding = new Map(occ.rows.map(r => [r.finding_id, r]));
  const excludedBySource = Map.groupBy(occ.excluded, e => e.source);
  const items = [], errors = [];
  const universeByID = new Map(universe.items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- source records
  const sourceIDs = new Set(universe.items.filter(i => i.kind === 'source').map(i => i.source_id));
  for (const sid of [...sourceIDs].sort()) {
    const id = `source:${sid}`, u = universeByID.get(id), x = extraction[sid];
    if (!x) { errors.push(`${sid}: no extraction record`); continue; }
    const base = {id, source_id: sid, family_id: sid, content_sha256: u.sha256, decision_basis: 'primary_text', result_ids: [], extraction_complete: false};
    const artifact = primaryArtifact(root, sid, x, inv[sid], u.path);
    let disposition = x.disposition, rationale = x.disposition_reason;
    const results = (resultsBySource.get(sid) ?? []).map(r => r.result_id);
    if (disposition === 'occurrence_extracted' && !results.length) {
      const why = [...new Set((excludedBySource.get(sid) ?? []).map(e => e.reason))];
      disposition = 'out_of_scope';
      rationale = `${x.disposition_reason} Every fish-associated result it reports is ${why.join('; or ') || 'outside the finfish-flesh scope'}, so none enters this page.`;
    }
    if (disposition.startsWith('duplicate_of:') && !disposition.startsWith('duplicate_of:source:')) disposition = disposition.replace('duplicate_of:', 'duplicate_of:source:');
    Object.assign(base, {disposition, rationale, locators: [locator(root, artifact, artifact.endsWith('.csv') ? 'table' : 'page', x.disposition_locator)],
      result_ids: disposition === 'occurrence_extracted' ? results : [], extraction_complete: disposition === 'occurrence_extracted'});
    if (disposition === 'access_blocked') Object.assign(base, retrieval(root, sid, inv[sid], x));
    items.push(base);
  }
  const itemByID = new Map(items.map(i => [i.id, i]));

  // ---------------------------------------------------------------- indexed dataset rows
  const fileShaFor = new Map();
  const rowLocator = u => {
    const candidates = [path.join(root, u.path), path.join(LIBRARY_MOUNT, 'heavy-metal-index-raw', u.path.replace(/^raw\//, '')), path.join(process.env.HOME, 'HMI-Library-backup/heavy-metal-index-raw', u.path.replace(/^raw\//, ''))];
    const physical = candidates.find(p => fs.existsSync(p));
    if (!fileShaFor.has(physical)) fileShaFor.set(physical, shaFile(root, physical));
    return {artifact: physical.startsWith(root) ? path.relative(root, physical) : physical, sha256: fileShaFor.get(physical), kind: 'cell', location: u.row_locator};
  };
  const gemsResultIDs = new Map(), fdaResultIDs = new Map();
  for (const u of universe.items.filter(i => i.kind === 'dataset_row')) {
    const base = {id: u.id, source_id: u.source_id, family_id: u.source_id, content_sha256: u.sha256, decision_basis: 'primary_text', locators: [rowLocator(u)], result_ids: [], extraction_complete: false};
    const link = (map, rid) => { if (!map.has(rid)) map.set(rid, []); map.get(rid).push(u.id); };
    if (u.source_id === GEMS && gemsRows[u.id]) {
      const d = gemsRows[u.id];
      let disposition = d.disposition.startsWith('duplicate_of:') ? d.disposition : d.disposition, rationale = d.rationale;
      if (d.disposition === 'occurrence_extracted') {
        const r = resultByFinding.get(d.result_finding);
        if (!r) { disposition = 'out_of_scope'; rationale = `${d.rationale} The record's group is outside the finfish-flesh scope after classification.`; }
        else { base.result_ids = [r.result_id]; base.extraction_complete = true; link(gemsResultIDs, r.result_id); }
      }
      Object.assign(base, {disposition, rationale});
    } else if (u.source_id === FDA && fdaRows[u.id]) {
      const d = fdaRows[u.id];
      Object.assign(base, {disposition: d.disposition, rationale: d.rationale});
      if (d.disposition === 'occurrence_extracted') { const r = resultByFinding.get(d.result_finding); if (!r) { errors.push(`${u.id}: FDA result missing`); continue; } base.result_ids = [r.result_id]; base.extraction_complete = true; link(fdaResultIDs, r.result_id); }
    } else if (INDEX_ONLY[u.source_id]) {
      const rec = `wiki/sources/${u.source_id}.md`;
      Object.assign(base, {disposition: 'out_of_scope', rationale: INDEX_ONLY[u.source_id], locators: [rowLocator(u), ...(fs.existsSync(path.join(root, rec)) ? [locator(root, rec, 'page', 'source record body')] : [])]});
    } else if (itemByID.has(`source:${u.source_id}`)) {
      Object.assign(base, {disposition: `duplicate_of:source:${u.source_id}`, rationale: `HMI index row restating or routing ${u.source_id}; the source record is the decided ledger item.`});
    } else if (u.source_id === GEMS) {
      Object.assign(base, {disposition: `duplicate_of:source:${GEMS}`, rationale: 'GEMS/Food summary or index row restating individual submissions decided elsewhere in this ledger.'});
    } else { errors.push(`${u.id}: undecided dataset row`); continue; }
    items.push(base);
  }
  // Duplicate targets inside GEMS are dataset rows; rewrite to the shared prefix.
  for (const i of items) if (i.disposition.startsWith('duplicate_of:dataset:')) i.disposition = i.disposition;

  // ---------------------------------------------------------------- reference units
  const refByKey = new Map(occ.record.references.map(r => [r.id.split(':')[1], r]));
  const units = [], unitsByResult = new Map();
  const unitArtifact = new Map();
  for (const u of occ.unit_list) {
    const owner = occ.rows.find(r => r.result_id === u.result_id);
    const art = u.family === GEMS ? `${auditDir}/primary/gemsfood-fish-records.csv` : u.family === FDA ? 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv' : primaryArtifact(root, u.family, extraction[u.family], inv[u.family]);
    const id = `${u.ref_key}:${u.id}`;
    const unit = {id, item_id: `source:${u.family}`, family_id: u.family, scope: scopeOf(owner), statistic: 'median', value: u.lower === u.upper ? u.lower : null, lower_bound: u.lower, upper_bound: u.upper,
      locator: locator(root, art, 'table', u.locator)};
    units.push(unit);
    if (!unitsByResult.has(u.result_id)) unitsByResult.set(u.result_id, []); unitsByResult.get(u.result_id).push(id);
  }

  // ---------------------------------------------------------------- results
  const results = occ.rows.map(r => {
    const c = r.profile.variants['::'].comparisons, t = r.profile.variants['::'].median, p = r.primary;
    const art = r.source === GEMS ? `${auditDir}/primary/gemsfood-fish-records.csv` : r.source === FDA ? 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv' : primaryArtifact(root, r.source, extraction[r.source], inv[r.source]);
    const lower = t?.lower ?? (Number.isFinite(p.min_ug_kg) ? p.min_ug_kg : null), upper = t?.upper ?? (Number.isFinite(p.max_ug_kg) ? p.max_ug_kg : null);
    const comparison = {state: r.comparison_state, attempts: r.comparison_attempts};
    if (r.reason_code) comparison.reason_code = r.reason_code;
    if (c.hmi.baseline.reference_id) comparison.reference_id = c.hmi.baseline.reference_id;
    return {id: r.result_id, item_ids: [`source:${r.source}`, ...(gemsResultIDs.get(r.result_id) ?? []), ...(fdaResultIDs.get(r.result_id) ?? [])],
      family_id: r.source, scope: scopeOf(r), form: `${r.species_label} · ${p.material ?? ''} · ${p.preparation ?? ''}`.slice(0, 300), origin_or_market: `${r.group_full || r.region} (${r.region_type})`.slice(0, 300),
      year: String(r.period), species: SPECIES[r.analyte] ?? r.analyte, statistic: r.statistic, basis: r.basis,
      n: Number.isInteger(r.n) ? r.n : null, n_note: Number.isInteger(r.n) ? `${r.n} ${r.sampling_unit}` : `Sample count not reported for this subgroup (${r.sampling_unit})`,
      sample_unit: String(r.sampling_unit), censoring: String(r.censoring), unit: r.unit, value: Number.isFinite(r.value) ? r.value : (t?.exact ? t.lower : null),
      lower_bound: Number.isFinite(lower) ? lower : null, upper_bound: Number.isFinite(upper) ? upper : null,
      locator: locator(root, art, 'table', r.locator), reference_unit_ids: unitsByResult.get(r.result_id) ?? [], comparison};
  });

  // ---------------------------------------------------------------- references (one assessment per result scope)
  const sk = s => JSON.stringify([s.analyte, s.material, s.basis, s.unit]);
  const resultsByScope = Map.groupBy(results, r => sk(r.scope));
  const refs = [];
  fs.rmSync(path.join(root, ledgerDir, 'references'), {recursive: true, force: true});
  fs.mkdirSync(path.join(root, ledgerDir, 'references'), {recursive: true});
  for (const [key, scoped] of resultsByScope) {
    const scope = scoped[0].scope;
    const included = units.filter(u => sk(u.scope) === key), unitIDs = included.map(u => u.id).sort();
    const families = [...new Set(included.map(u => u.family_id))].sort();
    const rowKey = refKey(occ.rows.find(r => r.result_id === scoped[0].id));
    const record = refByKey.get(rowKey);
    const id = record?.id ?? `fish-assessment:${scope.analyte}:${scope.material}:${scope.basis}:${scope.unit}`;
    const exclusions = scoped.filter(r => !families.includes(r.family_id)).map(r => ({result_id: r.id,
      scientific_reason: scope.unit !== 'µg/kg' ? `Reported in ${scope.unit} without a density; no µg/kg reference can apply.` : `${r.family_id} reports ${r.statistic.replace('_', ' ')} values${r.comparison.reason_code === 'value_fails_source_integrity_check' ? ' that fail an integrity check against the paper' : ''} for this scope; only observed subgroup medians or individual sample values can enter a reference.`,
      locator: r.locator}));
    const safe = id.replace(/[^a-zA-Z0-9.-]+/g, '_').slice(0, 180);
    const write = (name, body) => { const f = `${ledgerDir}/references/${safe}-${name}.json`; fs.writeFileSync(path.join(root, f), JSON.stringify(body, null, 1) + '\n'); return {artifact: f, sha256: shaFile(root, f)}; };
    const single = families.length === 1;
    refs.push({id, scope, unit_ids: unitIDs, family_ids: families, exclusions, method: 'applyHmiBaselines', weighting: 'equal_family_equal_subgroup', bounds: 'no_imputation',
      frozen_membership_sha256: frozenMembershipHash(included),
      sensitivity: write('sensitivity', record ? {label: record.sensitivity?.label, distribution: record.sensitivity?.distribution} : {note: 'No reference units in this scope; no sensitivity analysis applies.'}),
      leave_one_out: write('leave-one-out', record ? record.leave_one_out : {note: 'No reference units in this scope; no leave-one-out analysis applies.'}),
      limitations: [record?.limitations ?? 'No compatible reference units exist for this fish species group, form, analyte and basis after the complete ledger.',
        ...(single ? [`This is the only compatible family for ${scope.analyte} in ${scope.material} on this basis in the completed fish ledger; a single-family reference cannot represent other markets.`] : []),
        ...(unitIDs.length && unitIDs.length < 4 ? ['Fewer than four reference units: below the display minimum, so no rating is shown.'] : [])]});
  }
  const used = new Set(results.flatMap(r => r.reference_unit_ids));
  const ledger = {schema_version: 1, ingredient: 'fish', completed_at: now, items, results, reference_units: units.filter(u => used.has(u.id)), references: refs};
  const parsed = evidenceLedgerSchema.safeParse(ledger);
  if (!parsed.success) errors.push(...parsed.error.issues.slice(0, 20).map(i => `schema ${i.path.join('.')}: ${i.message}`));
  return {ledger, universe, errors};
}

export function writeLedger(root, occ) {
  const {ledger, universe, errors} = buildLedger(root, occ);
  if (errors.length) throw Error(`Ledger errors (${errors.length}):\n` + errors.slice(0, 40).join('\n'));
  fs.mkdirSync(path.join(root, ledgerDir), {recursive: true});
  fs.writeFileSync(path.join(root, ledgerDir, 'evidence-ledger.json'), JSON.stringify(ledger) + '\n');
  return {ledger, universe};
}

export function scoreAndGate(root, htmlPath) {
  const {ledger, universe} = writeLedger(root);
  const page = inspectFullnessHTML(fs.readFileSync(htmlPath, 'utf8'));
  const scorecard = buildFullnessScorecard('fish', universe, ledger, page);
  fs.writeFileSync(path.join(root, ledgerDir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
  return evaluateIngredientFullness({ingredient: 'fish', universe, ledger, page, scorecard, repo: root});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const html = process.argv[2];
  if (!html) { const {ledger} = writeLedger(root); console.log(JSON.stringify({items: ledger.items.length, results: ledger.results.length, units: ledger.reference_units.length, references: ledger.references.length})); }
  else { const r = scoreAndGate(root, html); console.log(JSON.stringify({status: r.status, gates: Object.fromEntries(Object.entries(r.gates).map(([k, v]) => [k, {status: v.status, errors: v.errors.length, first: v.errors.slice(0, 4)}]))}, null, 1)); if (r.status !== 'pass') process.exitCode = 1; }
}
