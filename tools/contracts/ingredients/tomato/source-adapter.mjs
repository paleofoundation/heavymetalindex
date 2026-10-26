// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row; rows keep a
// source subgroup's statistics (mean, SD, range, median) for one analyte.
// Fresh-weight, dry-weight and basis-unstated results stay separate and are never
// converted into one another; greenhouse, field, irrigation source and experimental
// treatments stay in their own labelled groups. Processed tomato products are out of scope.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';
import { holdFor } from './holds.mjs';

export { holdFor };
export const auditDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/tomato';
const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });
const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function sourceMeta(root, id) {
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const fixed = { [GEMS]: 'WHO GEMS/Food', [FDA]: 'FDA Total Diet Study',
    'authors2015-reclaimed-water-through-field-trials-on-the-content': 'Lu et al. 2016', 'authors2023-determination-of-heavy-metals-concentrations-in-soil-and': 'Sanusi et al. 2023',
    'authors2025-detection-of-heavy-metals-concentration-in-vegetables-and': 'Gurmu et al. 2025', 'authors2017-levels-dietary-intake-and-health-risk-of-potentially': 'Nawab et al. 2017' };
  let surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  if (!fixed[id] && (/^unknown|^authors?$/i.test(surname) || !surname)) surname = id.split(/\d/)[0];
  const label = fixed[id] ?? `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? ''}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${String(fm.doi).replace(/^(10\.\d+\/)\1/, '$1')}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}

// Filter labels must stay short on phones; the drawer keeps the full source wording.
export function shortLabel(text, max = 34) {
  let t = String(text).trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|;\s|,\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text ?? '').matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}

// Basis decides which reference a row can meet: fresh weight, dry weight, or unstated.
export function basisOf(fd, x) {
  const b = String(fd.basis ?? '').toLowerCase();
  if (/^dry/.test(b)) return 'dry';
  if (/^fresh|^wet/.test(b)) return 'fresh';
  if (/unstated|not stated|unreported|unknown/.test(b)) return 'unstated';
  const s = String(x.study?.basis ?? '').toLowerCase();
  if (/^dry weight|^dry mass/.test(s)) return 'dry';
  if (/^fresh|^wet weight|as purchased|as sold/.test(s)) return 'fresh';
  return 'unstated';
}
export const BASIS_LABEL = { fresh: 'Fresh weight', dry: 'Dry weight', unstated: 'Basis not stated' };
const BASIS_FULL = { fresh: 'Fresh tomato fruit, fresh (wet) weight', dry: 'Fresh tomato fruit, dry weight', unstated: 'Fresh tomato fruit, weight basis not stated' };

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
const statRank = s => ['median', 'mean', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
export const isExperimental = r => r.group_kind === 'experimental_treatment';

export function rowTarget(row) {
  if (row.hold) return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  // Lower- and upper-bound averages (non-detects at zero and at the limit) bound the mean.
  if (s.statistic === 'mean' && Number.isFinite(s.lb_ug_kg) && Number.isFinite(s.ub_ug_kg)) return { lower: s.lb_ug_kg, upper: s.ub_ug_kg, exact: false, statistic: 'mean (lower–upper bound)' };
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(s.lod_ug_kg)) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}

function findingText(s) {
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : `median ${fmt(a)}–${fmt(b)} µg/kg (non-detects bounded)`; }
  if (s.statistic === 'mean' && !Number.isFinite(v) && Number.isFinite(s.lb_ug_kg)) return `mean ${fmt(s.lb_ug_kg)}–${fmt(s.ub_ug_kg)} µg/kg (lower–upper bound)`;
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (Number.isFinite(v)) {
    const range = Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `; range ${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)}` : '';
    return `${fmt(v)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''}${range})`;
  }
  return `${s.reported?.text ?? 'Reported in original units'}`;
}

function materialOf(fd, src) {
  if (src === GEMS) return fd.material;
  if (src === FDA) return 'Fresh tomato, raw (market basket)';
  const m = String(fd.material || '').toLowerCase();
  const kind = /yellow cherry/.test(m) ? 'Yellow cherry tomato' : /red cherry/.test(m) ? 'Red cherry tomato' : /cherry/.test(m) ? 'Cherry tomato' : /grape/.test(m) ? 'Grape tomato' : /organic/.test(m) ? 'Organic fresh tomato' : 'Fresh tomato';
  const sys = { greenhouse: 'greenhouse', hydroponic: 'hydroponic', 'open field': 'field', 'urban garden': 'urban garden', 'pot experiment': 'pot trial' }[fd.growing_system] ?? '';
  return sys && !kind.includes(sys) ? `${kind}, ${sys}` : kind;
}
const regionType = k => ({ growing_origin: 'Reported growing area', purchase_market: 'Purchase or reporting market; growing site not identified', growing_system: 'Growing-system group within one source',
  irrigation_source: 'Irrigation-water group within one study', experimental_treatment: 'Experimental treatment (not background occurrence)', cultivar: 'Cultivar or type group within one study',
  season: 'Season within one study', all_samples: 'All samples in the study' }[k] ?? 'Subgroup within one study');

// Redundant restatements are not separate results: a single sample's replicate mean
// printed again as its "sample value", or a non-detect repeated as a null sample value.
function redundant(fd, all) {
  if (fd.statistic !== 'sample_value') return false;
  const stem = fd.id.replace(/:sample_value$/, '');
  if (!Number.isFinite(fd.value_ug_kg)) return all.some(x => x.id.startsWith(stem + ':') && ['not_detected', 'below_LOD'].includes(x.statistic));
  return all.some(x => x.id === `${stem}:mean` && x.value_ug_kg === fd.value_ug_kg);
}

function samplingUnit(x) {
  const s = String(x.study?.sampling_unit || 'tomato samples');
  return s.length > 60 ? s.split(/[;(,]/)[0].trim() : s;
}

// One row per extracted result (fullness gate 4).
export function tomatoRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [], skipped = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      if (redundant(fd, x.findings)) { skipped.push({ finding: fd.id, reason: 'Restates the same sample’s mean or non-detect; not a separate result.' }); continue; }
      const hold = holdFor(fd.id);
      const basis = basisOf(fd, x);
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(fd.period ?? x.study?.collection_period ?? '');
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: materialOf(fd, x.source_id), basis_key: basis, experimental: fd.group_kind === 'experimental_treatment',
        wastewater: /waste|effluent|sewage|reclaimed|drainage/i.test(`${fd.irrigation_source ?? ''} ${fd.group}`),
        region: shortLabel(fd.group), group_full: fd.group, group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.source_id === GEMS ? 'GEMS/Food records' : x.source_id === FDA ? 'market-basket samples' : samplingUnit(x), record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: BASIS_FULL[basis], display_basis: x.study?.basis || BASIS_FULL[basis], short_basis: BASIS_LABEL[basis],
        method: x.study?.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, fd.integrity_flag && !hold ? `Checked against the paper: ${fd.integrity_flag}` : null, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'Ni', 'Cr', 'tHg', 'MeHg', 'Al', 'Sn', 'U'];
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : r.experimental ? 3 : 2;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-tomato-${r.analyte}-${i}`; }
  return { rows, skipped, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const ANALYTES = ['Pb', 'Cd', 'tAs', 'iAs', 'Ni', 'Cr', 'tHg', 'Al', 'Sn', 'U'];
export const BASES = ['fresh', 'dry'];
const scopeFor = (analyte, basis) => ({ ingredient: 'tomato', analyte, basis: `${BASIS_FULL[basis]}, µg/kg`, statistic: 'subgroup median concentration', market: 'International fresh-tomato evidence library', period: 'Source collection periods as recorded per unit' });
const refKey = (a, b) => `tomato-${b}-${a}`;

function medianOf(records) {
  const scope = { ingredient: 'tomato', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}
// Units from spiked or amended experiments, wastewater or effluent irrigation and
// mining or power-plant exposure sites describe exposed growing conditions, not
// background occurrence; they are compared within their own study instead.
const exposedUnit = text => /spik|added|amend|treatment|waste|effluent|sewage|reclaimed|drainage|mining|power plant|smelter/i.test(text);

export function referenceUnits(root, rows) {
  const units = Object.fromEntries(BASES.flatMap(b => ANALYTES.map(a => [refKey(a, b), []]))), audit = [];
  const add = (a, b, u) => { const k = refKey(a, b); if (!units[k]) { audit.push({ unit: u.id, admitted: false, reason: 'analyte outside the reference set' }); return; } units[k].push({ ...scopeFor(a, b), ...u }); };
  // GEMS/Food: HMI-calculated medians per WHO region × year × growing-system label × origin label, random sampling only.
  const recs = load(root, 'primary/gemsfood-tomato-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.limit_conflict || r.uninformative_limit) continue;
    if (r.representativeness !== 'Random sampling') continue;
    const k = `${r.analyte}|${r.region}|${r.year}|${r.system}${r.organic ? '-organic' : ''}|${r.origin}|${r.dry ? 'dry' : 'fresh'}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg, item: r.item_id });
  }
  for (const [k, rs] of g) {
    const [a, region, year, sys, origin, b] = k.split('|');
    const m = medianOf(rs);
    const finding = rows.find(r => r.source === GEMS && r.analyte === a && r.primary.item_ids?.includes(rs[0].item));
    add(a, b, { id: `gems-${region}-${year}-${sys}-${origin}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${year} ${sys} ${origin}`, lower: m.lower, upper: m.upper, n: rs.length,
      locator: `primary/gemsfood-tomato-records.csv: ${a}, ${region}, ${year}, ${sys}, ${origin}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median', result_finding: finding?.finding_id });
  }
  // Studies printing per-sample values: each sample is its own subgroup.
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted' || x.source_id === GEMS) continue;
    for (const s of x.sample_values || []) {
      const a = s.analyte, uid = `${x.source_id}:${s.sample}:${a}`;
      if (/DERIVED/i.test(s.locator)) { audit.push({ unit: uid, admitted: false, reason: 'Back-calculated from hazard quotients, not a printed measurement.' }); continue; }
      const b = basisOf({ basis: s.basis }, x);
      if (b === 'unstated') { audit.push({ unit: uid, admitted: false, reason: 'Weight basis not stated; no fresh- or dry-weight reference applies.' }); continue; }
      if (exposedUnit(`${s.group} ${s.sample}`)) { audit.push({ unit: uid, admitted: false, reason: 'Exposed or experimental growing condition, not background occurrence.' }); continue; }
      const mine = rows.filter(r => r.source === x.source_id && r.analyte === a && r.basis_key === b);
      const own = mine.find(r => r.primary.group === s.group || r.group_full === s.group || r.group_full.includes(String(s.sample))) ?? (mine.length && mine.every(r => r.hold) ? mine[0] : mine.find(r => !r.hold));
      if (own?.hold) { audit.push({ unit: uid, admitted: false, reason: 'held: fails a source integrity check' }); continue; }
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper)) { audit.push({ unit: uid, admitted: false, reason: 'non-detect without a numerical limit' }); continue; }
      add(a, b, { id: `${x.source_id}-${s.sample}-${b}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: x.source_id, group: s.group || s.sample, sample: s.sample, lower, upper, n: 1, locator: s.locator, evidence_kind: 'reported sample value', result_finding: own?.finding_id });
    }
  }
  const sampleFamilies = new Set(Object.values(units).flat().map(u => u.family));
  // A single composite measured in replicate is one sample: its replicate mean is that
  // sample's value when the source prints no separate sample value.
  for (const r of rows) {
    if (r.hold || r.experimental || r.wastewater || r.basis_key === 'unstated' || [GEMS, FDA].includes(r.source) || r.statistic !== 'mean' || r.n !== 1 || !Number.isFinite(r.value) || exposedUnit(r.group_full)) continue;
    if (sampleFamilies.has(r.source)) continue;
    add(r.analyte, r.basis_key, { id: `${r.finding_id}-lot`.replace(/[^a-z0-9-]+/gi, '-'), family: r.source, group: r.group_full, lower: r.value, upper: r.value, n: 1, locator: r.locator, evidence_kind: 'single-composite replicate mean', result_finding: r.finding_id });
  }
  // Published subgroup medians from studies (GEMS and FDA medians are HMI-calculated).
  for (const r of rows) {
    if (r.hold || r.experimental || r.wastewater || r.basis_key === 'unstated' || [GEMS, FDA].includes(r.source) || r.statistic !== 'median' || !Number.isFinite(r.value) || /all_samples/.test(r.group_kind) || exposedUnit(r.group_full)) continue;
    add(r.analyte, r.basis_key, { id: r.finding_id.replace(/[^a-z0-9-]+/gi, '-'), family: r.source, group: r.group_full, lower: r.value, upper: r.value, n: r.n ?? 1, locator: r.locator, evidence_kind: 'reported subgroup median', result_finding: r.finding_id });
  }
  // Each unit is attached to a result of its own family and scope (gate 6 ownership).
  for (const [k, list] of Object.entries(units)) for (const u of list) {
    const [, b, a] = k.split('-');
    const same = rows.filter(r => r.source === u.family && r.analyte === a && r.basis_key === b);
    const hit = (u.result_finding && same.find(r => r.finding_id === u.result_finding))
      ?? same.find(r => r.group_full === u.group) ?? same.find(r => u.sample && r.group_full.includes(u.sample)) ?? same.find(r => !r.hold);
    u.result_id = hit?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${k} ${u.id}`);
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
  if (!rowTarget(r)) return 'no_numeric_value_or_bound';
  if (r.basis_key === 'unstated') return 'basis_incompatible_with_all_references';
  if (r.experimental) return 'species_or_material_without_compatible_reference_after_full_ledger';
  if (!c.hmi.baseline.reference_id && r.other_basis_reference) return 'basis_incompatible_with_all_references';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- comparisons
// Same-study contrasts. Irrigation and experimental groups meet the study's own control
// (freshwater, groundwater or untreated); other subgroups meet the study total or the
// lowest-valued subgroup of the same kind. GEMS/Food summaries meet the same region's
// opposite origin label (domestic versus imported) or growing-system label.
const CONTROL = /control|nile|groundwater|underground|fresh ?water|tap|unfertil|no fertil|\b0 µg|untreated|grocery|market|ccu\b|well/i;
function contrast(r, rows) {
  const t = rowTarget(r);
  const none = { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s total, control or another subgroup using the same statistic.' };
  if (!t || /all_samples/.test(r.group_kind)) return none;
  const peers = rows.filter(x => x !== r && x.source === r.source && x.analyte === r.analyte && x.basis_key === r.basis_key && x.statistic === r.statistic && !x.hold && rowTarget(x));
  let ref;
  if (r.source === GEMS) {
    const reg = s => s.group_full.split(';')[0];
    ref = peers.filter(x => reg(x) === reg(r) && x.primary.system === r.primary.system && x.primary.organic === r.primary.organic && x.primary.origin !== r.primary.origin && ['domestic', 'imported'].includes(x.primary.origin) && ['domestic', 'imported'].includes(r.primary.origin)).sort((a, b) => b.n - a.n)[0]
      ?? peers.filter(x => reg(x) === reg(r) && x.primary.origin === r.primary.origin && (x.primary.system !== r.primary.system || x.primary.organic !== r.primary.organic)).sort((a, b) => b.n - a.n)[0];
  } else if (['irrigation_source', 'experimental_treatment'].includes(r.group_kind) || r.wastewater) {
    if (CONTROL.test(r.group_full) && !/waste|effluent|sewage|reclaimed|drainage/i.test(r.group_full)) {
      ref = peers.filter(x => !CONTROL.test(x.group_full) || /waste|effluent|sewage|reclaimed|drainage/i.test(x.group_full)).sort((a, b) => rowTarget(b).lower - rowTarget(a).lower)[0];
    } else ref = peers.find(x => CONTROL.test(x.group_full) && !/waste|effluent|sewage|reclaimed|drainage/i.test(x.group_full));
  } else {
    ref = peers.find(x => /all_samples/.test(x.group_kind)) ?? peers.filter(x => x.group_kind === r.group_kind).sort((a, b) => rowTarget(a).lower - rowTarget(b).lower || a.id.localeCompare(b.id))[0];
  }
  const rt = ref && rowTarget(ref);
  if (!rt) return { direction: t.exact ? 'summary' : 'bounded', label: t.exact ? 'No same-study reference' : 'Limits overlap', detail: 'No compatible same-study subgroup with the same statistic and basis.', context: 'No cross-study pooling is used in this mode.' };
  if (!t.exact || !rt.exact) {
    if (t.upper < rt.lower) return { kind: 'food_form', direction: 'lower', label: `${fmt(t.upper)} or less versus at least ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit, detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`, context: 'Bounded medians that do not overlap. A descriptive difference, not a significance test or safety judgment.' };
    if (t.lower > rt.upper) return { kind: 'food_form', direction: 'higher', label: `at least ${fmt(t.lower)} versus ${fmt(rt.upper)} or less µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit, detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`, context: 'Bounded medians that do not overlap. A descriptive difference, not a significance test or safety judgment.' };
    return { direction: 'bounded', label: 'Limits overlap', detail: `${r.region}: ${r.finding_text}; compared with ${ref.region}: ${ref.finding_text}. The reporting-limit bounds overlap, so the two cannot be ordered.`, context: 'Non-detects are bounded between zero and the reporting limit; overlapping bounds are not a difference.' };
  }
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic, basis and analytical method. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function tomatoOccurrence(root) {
  const { rows, parity, skipped } = tomatoRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = BASES.flatMap(b => ANALYTES.filter(a => units[refKey(a, b)].length).map(a => {
    const fams = new Set(units[refKey(a, b)].map(u => u.family)).size;
    return {
      key: refKey(a, b), scope: scopeFor(a, b), referenceUnits: units[refKey(a, b)], accepts: r => r.analyte === a && r.basis_key === b && !r.hold && !r.experimental && !!rowTarget(r),
      label: `HMI tomato ${a} reference, ${BASIS_LABEL[b].toLowerCase()} · ${fams} sampling ${fams === 1 ? 'family' : 'families'}`,
      targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
      methods: `HMI pools subgroup medians from every compatible ${BASIS_LABEL[b].toLowerCase()} fresh-tomato sampling family in the evidence ledger: WHO GEMS/Food medians by reporting region, year, growing-system label and origin label (random sampling only), FDA Total Diet Study market-basket samples, per-sample results printed by surveys, single-composite means and published subgroup medians. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima of several samples never enter as observations. Experimental treatments, wastewater or effluent irrigation and mining or power-plant exposure sites never enter.`,
      limitations: `An evidence-library reference for fresh tomato on a ${BASIS_LABEL[b].toLowerCase()} basis, not a probability sample of any market. GEMS/Food regions are reporting regions, not growing origins. Fresh-weight and dry-weight results are never converted into one another, because few sources report the moisture of the tomatoes they measured. A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  }));
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : r.experimental ? 'An experimental treatment is not background occurrence; it is compared with its own study’s control instead.'
    : r.basis_key === 'unstated' ? 'The source does not state whether this result is on a fresh or dry weight basis, so no tomato reference shares its basis.'
    : rowTarget(r) ? 'No compatible reference units for this analyte and basis.'
    : ['range', 'max', 'min'].includes(r.statistic) ? 'The source reports only a range or extreme value; no single statistic can be positioned.'
    : 'The source reports a non-detect without a numerical limit; its position cannot be identified.');
  compiled.record.frozen = '2026-10-22';
  for (const r of compiled.rows) r.other_basis_reference = BASES.some(b => b !== r.basis_key && units[refKey(r.analyte, b)]?.length);
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
  const unit_list = Object.entries(units).flatMap(([k, list]) => list.map(u => ({ id: u.id, analyte: k.split('-')[2], basis: k.split('-')[1], ref_key: k, result_id: u.result_id })));
  return { ...compiled, parity, skipped, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([k, u]) => [k, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}

export const tomatoOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI tomato reference (pooled)' }, { value: 'contrast', label: 'Same-study subgroup contrast' }],
  caption: 'Fresh-tomato findings from every extracted survey, experiment, total diet study and monitoring dataset, in µg/kg with each source’s statistic, weight basis, growing system, irrigation source, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one subgroup and metal; a mean, median and range from the same samples are separate rows. Results on a fresh-weight basis, a dry-weight basis and an unstated basis are kept apart, because dried tomato is roughly ten to twenty times more concentrated than the fresh fruit. Ratings place a reported mean, median or sample result against a pooled HMI tomato reference on the same basis. Same-study contrasts compare a subgroup with its own study’s control, total or lowest subgroup. Experimental treatments, such as spiked irrigation water, are compared only with their own controls. Held rows failed a check against their own paper and are shown but not compared. Canned tomatoes, paste, sauce, ketchup and juice are separate foods with their own pages.</p>',
  columnNotes: { 'Food form': 'Tomato type and growing system as the source labels them (greenhouse, field, hydroponic, organic); labels in monitoring data were not verified.', 'Collection scope': 'Growing area, irrigation regime, experimental treatment, purchase market or WHO reporting region as reported; a market or reporting region is not where the tomato grew, and publication year is never used as a collection date.', Finding: 'µg/kg of tomato with the source statistic and weight basis. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled tomato reference on the same weight basis. Higher or Lower compare a subgroup with its own study’s control, total or lowest subgroup.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
