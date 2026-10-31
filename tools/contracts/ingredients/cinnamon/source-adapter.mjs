// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row; rows keep a
// source subgroup's statistics (mean, SD, range, median) for one analyte.
// Cassia, Ceylon (C. verum) and unspecified cinnamon stay separate in every label;
// ground and whole forms stay separate; the 2023–2024 applesauce outbreak is its
// own scope (finished food, adulteration) and never enters the background reference.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon';
const GEMS = 'who-gemsfood-heavy-metal-contaminants';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating (terminal reason
// value_fails_source_integrity_check).
export const holds = [
  { match: id => /^bua2016[^:]*:(tAs:indonesia|Cd:madagascar|Pb:vietnam):(mean|sample_value)$/.test(id), reason: 'The printed mean lies outside the same sample’s printed replicate range (Table 4), so the mean cannot be reconciled with the paper’s own measurements.' },
  { match: id => /^bua2016[^:]*:tHg:madagascar:/.test(id), reason: 'The reported “<0.010” bound conflicts with the stated detection limit of 0.010 ng/g, a thousand-fold unit gap; the bound cannot be placed.' },
  { match: id => id === 'moussa2024-spices-herbs-lebanon:Cd:all-cinnamon-composites:proportion_exceeding', reason: 'Table 2 counts 2 of 8 cinnamon composites above 0.2 mg/kg cadmium, but the paper’s own S1 Table lists 4 (0.205–0.256 mg/kg); the count cannot be reconciled.' },
  { match: id => /^matloob2016[^:]*:tHg:/.test(id), reason: 'Mercury was reported after dry ashing at 550 °C, a step that volatilises mercury; the reported value cannot be reconciled with the paper’s own method.' },
  { match: id => /^islam2023[^:]*:Pb:/.test(id), reason: 'The text gives cinnamon lead as 10.05 mg/kg and cardamom as 15.47 mg/kg, while the paper’s own figure and risk tables assign 15.47 mg/kg to cinnamon; the cinnamon value cannot be fixed from the paper.' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;
// Results on a basis no reference shares: a manufacturer's value recalculated to the
// finished food “as consumed” is not a concentration in the cinnamon itself.
const basisIncompatible = id => /^us-house[^:]*:[^:]+:manufacturer-a-lot-tested-2017-11-03/.test(id);
// Sources whose printed values are a selected excerpt (for example only lots above an
// internal specification) are shown and rated but never enter a reference: the
// selection would bias the reference upward.
export const excerptSources = { 'us-house-subcommittee2021-baby-foods-tainted-heavy-metals': 'The subcommittee printed selected excerpts of manufacturers’ ingredient tests, emphasising lots above internal specifications; a selected excerpt cannot represent cinnamon occurrence.' };

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
function sourceMeta(root, id) {
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  const fixed = { [GEMS]: 'WHO GEMS/Food', 'lhaac2025-csp41-herbs-spices-wa': 'Western Australia CSP 41', 'gill2021-consumer-reports-spices': 'Consumer Reports 2021' };
  const label = fixed[id] ?? `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? ''}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}

// Filter labels must stay short on phones; the drawer keeps the full source wording.
export function shortLabel(text, max = 34) {
  let t = String(text).trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|;\s|,\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text).matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);

export function rowTarget(row) {
  if (row.hold || row.basis_incompatible) return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(s.lod_ug_kg)) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}

function findingText(s) {
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (s.statistic === 'proportion_exceeding') return `${s.exceeding_count} of ${s.n} composites above ${fmt(s.threshold_ug_kg)} µg/kg`;
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : `median ${fmt(a)}–${fmt(b)} µg/kg (non-detects bounded)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`;
}

const SPECIES = { cassia: 'Cassia', verum: 'Ceylon (C. verum)', unspecified: 'Species not stated' };
const FORMS = { ground: 'ground', whole: 'sticks or pieces', stick: 'sticks or pieces', bark: 'bark', unspecified: '' };
export const isOutbreak = fd => /outbreak/.test(fd.group_kind || '');
function materialOf(fd) {
  if (isOutbreak(fd)) return 'Recalled cinnamon applesauce pouches';
  const sp = SPECIES[fd.species] ?? SPECIES.unspecified, fm = FORMS[fd.form] ?? '';
  return fm ? `${sp}, ${fm}` : sp;
}
// Short sampling-unit nouns for the row count; full sampling descriptions stay in the extraction records.
const SAMPLING = { 'ammar2023-element-migration-aluminum-cookware': 'cinnamon lot (triplicate digests)', 'angelon-gaetz2018-lead-spices-north-carolina': 'home cinnamon samples',
  'bua2016-aromatic-spices-metals-italy': 'cinnamon sample (5 analytical replicates)', 'cicero2022-minerals-spices-aromatic-herbs': 'cinnamon sample (triplicate analyses)',
  'efsa-chromium-contam-2014': 'samples reported to EFSA', 'islam2023-noakhali-spices-bangladesh': 'cinnamon sample', 'lhaac2025-csp41-herbs-spices-wa': 'cinnamon results',
  'matloob2016-iraq-spices-heavy-metals': 'cinnamon samples', 'moussa2024-spices-herbs-lebanon': 'composites of 5 products', 'napier2024-wanabana-lead-apple-cinnamon': 'pouches or lots',
  'sabri2025-moroccan-spices-casablanca-metals': 'bulk cinnamon samples', 'savic2019-serbian-spices-minerals': 'cinnamon sample', 'spex2023-hot-sauce-chili-powder-metals': 'products',
  'tinggi2025-spices-herbs-queensland': 'retail products', 'us-house-subcommittee2021-baby-foods-tainted-heavy-metals': 'ingredient lot', [GEMS]: 'GEMS/Food records',
  'winiarska-mieczan2023-cd-pb-polish-herbs-spices': 'cinnamon samples' };
const regionType = k => ({ growing_origin: 'Reported growing area', labelled_origin: 'Labelled country of origin; growing site not verified', purchase_market: 'Purchase or reporting market; growing origin not identified',
  species: 'Species group within one study', form: 'Form group within one study', sample: 'Single sample', outbreak_finished_food: 'Outbreak investigation: finished food, not cinnamon' }[k] ?? 'All samples in the study');

// Redundant restatements are not separate results: a single sample's replicate mean
// printed again as its "sample value", or a non-detect repeated as a null sample value.
function redundant(fd, all) {
  if (fd.statistic !== 'sample_value') return false;
  const stem = fd.id.replace(/:sample_value$/, '');
  if (!Number.isFinite(fd.value_ug_kg)) return all.some(x => x.id.startsWith(stem + ':') && ['not_detected', 'below_LOD'].includes(x.statistic));
  return all.some(x => x.id === `${stem}:mean` && x.value_ug_kg === fd.value_ug_kg);
}

// One row per extracted result (fullness gate 4).
export function cinnamonRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [], skipped = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      if (redundant(fd, x.findings)) { skipped.push({ finding: fd.id, reason: 'Restates the same sample’s mean or non-detect; not a separate result.' }); continue; }
      const hold = holdFor(fd.id);
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(x.study.collection_period || '');
      const outbreak = isOutbreak(fd), basis_incompatible = basisIncompatible(fd.id);
      rows.push({ basis_incompatible,
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: materialOf(fd), species: fd.species ?? 'unspecified', form: fd.form ?? 'unspecified', outbreak,
        region: shortLabel(fd.group), group_full: fd.group, group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: fd.n ?? null, sampling_unit: SAMPLING[x.source_id] ?? x.study.sampling_unit ?? 'cinnamon samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: outbreak ? 'Finished applesauce as sold' : basis_incompatible ? 'Calculated on a finished-food consumed basis' : 'Dried cinnamon as sold or analysed', display_basis: x.study.basis || 'Dried cinnamon as sold', short_basis: outbreak ? 'Applesauce as sold' : 'Dried spice',
        method: x.study.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, String(fd.notes || '').replace(/INTEGRITY:\s*/g, '')].filter(Boolean).join(' '),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  // Lead decides most cinnamon questions; the monitoring dataset leads each metal group.
  const metalOrder = ['Pb', 'Cr', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Al', 'Sn', 'U'];
  const tier = r => r.outbreak ? 2 : r.source === GEMS ? 0 : 1;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-cinnamon-${r.analyte}-${i}`; }
  return { rows, skipped, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const ANALYTES = ['Pb', 'Cr', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Al', 'Sn', 'U'];
export const BASIS = 'Dried cinnamon as sold or analysed';
const scopeFor = analyte => ({ ingredient: 'cinnamon', analyte, basis: 'Dried cinnamon bark as sold or analysed, µg/kg; dry-weight and as-is labels pooled', statistic: 'subgroup median concentration', market: 'International cinnamon evidence library (all Cinnamomum species)', period: 'Source collection periods 2000–2024' });

function medianOf(records) {
  const scope = { ingredient: 'cinnamon', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

export function referenceUnits(root, rows) {
  const units = Object.fromEntries(ANALYTES.map(a => [a, []])), audit = [];
  const add = (a, u) => { units[a].push({ ...scopeFor(a), ...u }); };
  // GEMS/Food: HMI-calculated medians per WHO region × year × labelled species × form, random sampling only.
  const recs = load(root, 'primary/gemsfood-cinnamon-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling') continue;
    const k = `${r.analyte}|${r.region}|${r.year}|${r.species}|${r.form}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, region, year, sp, fm] = k.split('|');
    if (!units[a]) continue;
    const m = medianOf(rs);
    add(a, { id: `gems-${region}-${year}-${sp}-${fm}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${year} ${sp} ${fm}`, lower: m.lower, upper: m.upper, n: rs.length,
      locator: `primary/gemsfood-cinnamon-records.csv: ${a}, ${region}, ${year}, species ${sp}, form ${fm}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median',
      result_finding: `${GEMS}:${a}:${region.toLowerCase().replace(/[^a-z0-9]+/g, '-')}:${sp}:${fm}:median` });
  }
  // Studies printing per-sample values: each retail product or sample is its own subgroup.
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted' || x.source_id === GEMS) continue;
    for (const s of x.sample_values || []) {
      const a = s.analyte, uid = `${x.source_id}:${s.sample}:${a}`;
      if (excerptSources[x.source_id]) { audit.push({ unit: uid, admitted: false, reason: excerptSources[x.source_id] }); continue; }
      if (/consumed/i.test(`${s.locator} ${s.basis ?? ''}`) || basisIncompatible(`${x.source_id}:${a}:${String(s.sample).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)) { audit.push({ unit: uid, admitted: false, reason: 'calculated on a finished-food consumed basis' }); continue; }
      if (!units[a]) { audit.push({ unit: uid, admitted: false, reason: 'analyte outside the reference set' }); continue; }
      if (/outbreak|household/i.test(`${s.group} ${s.sample}`) || x.findings.some(fd => isOutbreak(fd))) { audit.push({ unit: uid, admitted: false, reason: 'Outbreak finished-food sample (adulteration investigation), not background cinnamon' }); continue; }
      const own = x.findings.find(fd => fd.analyte === a && (fd.statistic === 'sample_value' || fd.statistic === 'mean' || fd.statistic === 'not_detected' || fd.statistic === 'below_LOD') && (fd.group === s.group || fd.id.includes(`:${String(s.group || s.sample).toLowerCase()}`)));
      if ((own && holdFor(own.id)) || holdFor(`${x.source_id}:${a}:${String(s.group || '').toLowerCase()}:sample_value`)) { audit.push({ unit: uid, admitted: false, reason: 'held: fails a source integrity check' }); continue; }
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper)) { audit.push({ unit: uid, admitted: false, reason: 'non-detect without a numerical limit' }); continue; }
      add(a, { id: `${x.source_id}-${s.sample}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: x.source_id, group: s.group || s.sample, sample: s.sample, lower, upper, n: 1, locator: s.locator, evidence_kind: 'reported sample value' });
    }
  }
  const sampleSources = new Set(Object.values(units).flat().map(u => u.family));
  // A single lot measured in replicate is one sample: its replicate mean is that
  // sample's value when the source prints no separate sample value.
  for (const r of rows) {
    if (r.hold || r.outbreak || r.basis_incompatible || r.source === GEMS || r.statistic !== 'mean' || r.n !== 1 || !Number.isFinite(r.value) || excerptSources[r.source]) continue;
    if (sampleSources.has(r.source)) continue;
    add(r.analyte, { id: `${r.finding_id}-lot`.replace(/[^a-z0-9-]+/gi, '-'), family: r.source, group: r.group_full, lower: r.value, upper: r.value, n: 1, locator: r.locator, evidence_kind: 'single-lot replicate mean', result_finding: r.finding_id });
  }
  // Published subgroup medians from studies (GEMS medians are HMI-calculated above).
  for (const r of rows) {
    if (r.hold || r.outbreak || r.source === GEMS || r.statistic !== 'median' || !Number.isFinite(r.value) || /all_samples/.test(r.group_kind)) continue;
    add(r.analyte, { id: r.finding_id.replace(/[^a-z0-9-]+/gi, '-'), family: r.source, group: r.group_full, lower: r.value, upper: r.value, n: r.n ?? 1, locator: r.locator, evidence_kind: 'reported subgroup median', result_finding: r.finding_id });
  }
  // Each unit is attached to a result of its own family and scope (gate 6 ownership).
  for (const [a, list] of Object.entries(units)) for (const u of list) {
    const same = rows.filter(r => r.source === u.family && r.analyte === a && !r.outbreak);
    const hit = (u.result_finding && same.find(r => r.finding_id === u.result_finding))
      ?? same.find(r => r.group_full === u.group && ['sample_value', 'mean', 'below_LOD', 'not_detected'].includes(r.statistic))
      ?? same.find(r => r.group_full === u.group) ?? same.find(r => u.sample && r.group_full.includes(u.sample));
    u.result_id = (hit ?? same[0])?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${u.id}`);
  }
  return { units, audit };
}

// Terminal reason codes (owner comparator rule 5, with the 22 Oct amendment).
export function stateOf(r) {
  const c = r.profile.variants['::'].comparisons;
  return c.hmi.baseline.level ? 'rated' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable';
}
export function reasonCode(r) {
  const c = r.profile.variants['::'].comparisons;
  if (stateOf(r) !== 'unavailable') return null;
  if (r.hold) return 'value_fails_source_integrity_check';
  if (r.outbreak) return 'species_or_material_without_compatible_reference_after_full_ledger';
  if (r.basis_incompatible) return 'basis_incompatible_with_all_references';
  if (!rowTarget(r)) return 'no_numeric_value_or_bound';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- comparisons
// Same-study contrasts: a named subgroup against the study's own total, or, in
// studies with several origins or species, the subgroup against the lowest-valued
// other subgroup for the same analyte and statistic.
function contrast(r, rows) {
  const t = rowTarget(r);
  const none = { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s total or another subgroup using the same statistic.' };
  if (!t || /all_samples/.test(r.group_kind) || r.outbreak) return none;
  const peers = rows.filter(x => x !== r && x.source === r.source && x.analyte === r.analyte && x.statistic === r.statistic && !x.hold && !x.outbreak && rowTarget(x)?.exact);
  let ref = peers.find(x => /all_samples/.test(x.group_kind));
  if (!ref && r.source !== GEMS) ref = peers.filter(x => x.group_kind === r.group_kind).sort((a, b) => rowTarget(a).lower - rowTarget(b).lower || a.id.localeCompare(b.id))[0];
  if (!ref && r.source === GEMS) ref = peers.filter(x => x.primary.form === r.primary.form && x.group_full.split(';')[0] === r.group_full.split(';')[0] && x.primary.species !== r.primary.species).sort((a, b) => b.n - a.n)[0];
  const rt = ref && rowTarget(ref);
  if (!rt || !t.exact || !rt.exact) return { direction: t.exact ? 'summary' : 'bounded', label: t.exact ? 'No same-study reference' : 'Limits overlap', detail: 'No compatible same-study subgroup with the same statistic.', context: 'No cross-study pooling is used in this mode.' };
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic and analytical method. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function cinnamonOccurrence(root) {
  const { rows, parity, skipped } = cinnamonRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = ANALYTES.filter(a => units[a].length).map(a => ({
    key: `cinnamon-pooled-${a}`, scope: scopeFor(a), referenceUnits: units[a], accepts: r => r.analyte === a && !r.outbreak && !r.hold && !r.basis_incompatible && !!rowTarget(r),
    label: `HMI cinnamon ${a} reference · ${new Set(units[a].map(u => u.family)).size} sampling families`,
    targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
    sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
    methods: 'HMI pools subgroup medians from every compatible cinnamon sampling family in the evidence ledger: WHO GEMS/Food medians by reporting region, year, labelled species and form (random sampling only), per-product results printed by individual surveys, and published subgroup medians. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations, and outbreak or adulteration samples never enter.',
    limitations: 'An international evidence-library reference for dried cinnamon of all species, not a probability sample of the world market and not a Cassia-only or Ceylon-only reference. GEMS/Food regions are reporting regions, not growing origins. Dry-weight and as-is results are pooled because both describe a dried spice whose residual moisture is not reported. A position is descriptive concentration, not a safety or compliance judgment.',
  }));
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : r.outbreak ? 'Finished applesauce from an adulteration outbreak; it is not dried cinnamon and has no compatible reference.'
    : r.basis_incompatible ? 'The manufacturer recalculated this value to the finished food as consumed; it is not a concentration in the cinnamon.'
    : rowTarget(r) ? 'No compatible reference units for this analyte.'
    : ['range', 'max', 'min'].includes(r.statistic) ? 'The source reports only a range or extreme value; no single statistic can be positioned.'
    : 'The source reports a non-detect without a numerical limit; its position cannot be identified.');
  compiled.record.frozen = '2026-10-22';
  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = '2026-10-22';
    // Best available comparison: HMI rating, then same-study contrast, then bounded classification.
    v.comparisons.reviewed = v.comparisons.hmi.baseline.level ? v.comparisons.hmi : ['higher', 'lower', 'same', 'bounded'].includes(v.comparisons.contrast.direction) ? v.comparisons.contrast : v.comparisons.hmi;
  }
  for (const r of compiled.rows) {
    const c = r.profile.variants['::'].comparisons, state = stateOf(r);
    r.reason_code = reasonCode(r);
    r.comparison_state = state;
    r.comparison_attempts = [
      { mode: 'hmi_rating', outcome: c.hmi.baseline.level ? 'rated' : 'unavailable', reason: c.hmi.baseline.level ? `${c.hmi.baseline.level} against ${c.hmi.baseline.reference_id}` : (c.hmi.detail || 'No HMI position') },
      { mode: 'within_study_direct', outcome: state === 'rated' ? 'not_selected' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : 'unavailable', reason: c.contrast.label || c.contrast.detail || 'No same-study contrast' },
      { mode: 'bounded_classification', outcome: ['rated', 'direct'].includes(state) ? 'not_selected' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable', reason: c.contrast.direction === 'bounded' ? 'Reporting limits overlap the comparator' : 'No overlapping-limit classification applies' },
    ];
  }
  const unit_list = Object.entries(units).flatMap(([a, list]) => list.map(u => ({ id: u.id, analyte: a, ref_key: `cinnamon-pooled-${a}`, result_id: u.result_id })));
  return { ...compiled, parity, skipped, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([a, u]) => [a, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}

export const cinnamonOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI cinnamon reference (pooled)' }, { value: 'contrast', label: 'Same-study subgroup contrast' }],
  caption: 'Cinnamon findings from every extracted survey, investigation and monitoring dataset, in µg/kg with each source’s statistic, species label, form, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one subgroup and metal; a mean, median and range from the same samples are separate rows. Cassia, Ceylon (<i>C. verum</i>) and cinnamon of unstated species are labelled separately, as are ground and whole forms. Ratings place a reported mean, median or sample result against a pooled HMI cinnamon reference built from every compatible sampling family. Same-study contrasts compare a subgroup with its own study’s total or lowest subgroup. Rows from the 2023–2024 applesauce outbreak measure the finished food, not cinnamon, and are not rated. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Cinnamon species and form exactly as the source labels them; species labels were not verified analytically.', 'Collection scope': 'Labelled origin, purchase market or WHO reporting region as reported; a reporting region or shop is not where the cinnamon grew, and publication year is never used as a collection date.', Finding: 'µg/kg of dried cinnamon (or of applesauce for outbreak rows) with the source statistic. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled cinnamon reference. Higher or Lower compare a subgroup with its own study’s total or lowest subgroup.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
