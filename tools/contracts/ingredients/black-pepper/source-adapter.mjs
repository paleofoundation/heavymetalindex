// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row; rows group a
// source subgroup's statistics (mean, median, range, sample value) for one analyte.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper';
export const SLUG = 'black-pepper';
const GEMS = 'who-gemsfood-heavy-metal-contaminants';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating (terminal reason value_fails_source_integrity_check).
export const holds = [
  { match: id => /^kowalska2021.*:Cd:all-26:mean$/.test(id), reason: 'The printed cadmium mean (0.006 mg/kg) is below the paper’s own cadmium detection limit (0.01 mg/kg), and the text calls 0.080 mg/kg the average.' },
  { match: id => /^kowalska2021.*:tAs:all-26:mean$/.test(id), reason: 'The printed arsenic mean (0.053 mg/kg) is below the quantification limit and only reproduces if 21 non-detects are set to zero, which the paper does not state.' },
  { match: id => /^matloob2016.*:tHg:/.test(id), reason: 'Mercury was measured after dry ashing at 550 °C, which volatilises mercury; the value cannot be reconciled with the method.' },
  { match: id => /^matloob2016.*:Cr:/.test(id), reason: 'The chromium mean lies below the paper’s own limit of quantification once converted to sample mass.' },
  { match: id => /^moussa2024.*:tHg:local-fsms:mean$/.test(id), reason: 'The printed mean (0.175 mg/kg) is ten times the mean of the two listed composites (0.013 and 0.022 mg/kg) and above the paper’s own range for all spices.' },
  { match: id => /^oseisafo2024.*:tAs:/.test(id), reason: 'The arsenic mean (0.075 mg/kg) is below the detection limit implied by the paper’s method (about 0.43 mg/kg) yet is reported as detected.' },
  { match: id => /^sabri2025.*:(Pb|tAs|Ni):/.test(id), reason: 'The printed mean falls below the printed minimum and the standard deviation is too large for the printed range; the mean and range cannot both be correct.' },
  { match: id => /^savic2019.*:Al:/.test(id), reason: 'The aluminium value (0.04 mg/kg) is about a thousand times lower than every other black pepper aluminium result in the ledger (39–540 mg/kg), consistent with a unit error, and the paper reports implausible indium and bismuth in every spice.' },
  { match: id => /^savic2019.*:Pb:/.test(id), reason: 'The lead value (0.13 mg/kg) is below the method detection limit derived from the paper’s own instrument limit, digest volume and sample mass (about 0.18 mg/kg), and implausible indium and bismuth results in every spice suggest spectral interference.' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
function sourceMeta(root, id) {
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  const label = id === GEMS ? 'WHO GEMS/Food' : id.startsWith('gill2021') ? 'Consumer Reports 2021'
    : `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? ''}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}

export function shortLabel(text, max = 34) {
  let t = String(text).replace(/\s*\([^)]*[؀-ۿ][^)]*\)/g, '').trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text).matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
export function rowTarget(row) {
  if (row.hold) return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(s.lod_ug_kg)) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}

function findingText(s) {
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (limit-bounded)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'min') return Number.isFinite(s.lod_ug_kg) ? `minimum <${fmt(s.lod_ug_kg)} µg/kg` : 'Minimum below detection';
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`;
}

const FORM = { whole: 'whole', ground: 'ground', cracked: 'cracked', unspecified: null };
const RETAIL = { packaged: 'packaged', bulk_or_loose: 'bulk or loose' };
function foodLabel(fd) {
  if (fd.material_scope === 'mixed') return `Black and white pepper (not separated)${FORM[fd.form] ? `, ${FORM[fd.form]}` : ''}${RETAIL[fd.retail_format] ? `, ${RETAIL[fd.retail_format]}` : ''}`;
  const parts = [FORM[fd.form], RETAIL[fd.retail_format]].filter(Boolean);
  return `Black pepper${parts.length ? ', ' + parts.join(', ') : ''}`;
}
const regionType = k => k === 'growing_origin' ? 'Reported growing origin' : k === 'purchase_market' ? 'Purchase or reporting market; growing origin not identified' : k === 'retail_format' ? 'Retail format within one study' : k === 'brand_or_product' ? 'One product or sample' : 'All samples in the study';

export function pepperRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      const hold = holdFor(fd.id);
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(x.study.collection_period || '');
      const group = fd.group_kind === 'growing_origin' && fd.growing_origin ? `Grown in ${fd.growing_origin}; bought in ${shortLabel(fd.purchase_market || 'market not stated', 40)}` : fd.group;
      const approx = /figure|chart|approximate/i.test(fd.locator + ' ' + (fd.notes || '')) && !fd.id.startsWith(GEMS);
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: foodLabel(fd), material_scope: fd.material_scope || 'black', form: fd.form || 'unspecified', retail_format: fd.retail_format || 'unspecified',
        region: shortLabel(group), group_full: group, group_kind: fd.group_kind, period, growing_origin: fd.growing_origin ?? null, purchase_market: fd.purchase_market ?? null,
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.study.sampling_unit || 'pepper samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd) + (approx ? ' (read from a figure)' : ''),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: 'Dried black pepper as sold or dry weight', display_basis: x.study.basis || 'Not stated', short_basis: 'Dried spice',
        method: x.study.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, fd.integrity_flag && !hold ? `Note: ${fd.integrity_flag}` : null, approx ? 'Value read from a published figure; approximate.' : null, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, approx, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'tHg', 'Cr', 'Ni', 'Al', 'Sn', 'U'];
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? (r.material_scope === 'mixed' ? 1 : 0) : 2;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || a.food.localeCompare(b.food) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-${SLUG}-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const ANALYTES = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'tHg', 'Cr', 'Ni', 'Al', 'Sn', 'U'];
export const REF_BASIS = 'Dried black pepper as sold or dry weight, µg/kg; no moisture conversion';
const scopeFor = analyte => ({ ingredient: 'black pepper', analyte, basis: REF_BASIS, statistic: 'subgroup median concentration', market: 'International black pepper evidence library', period: 'Source collection periods 1998–2025' });
function medianOf(records) {
  const scope = { ingredient: 'x', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}
// Per-sample values that do not enter references, with the scientific reason.
const SAMPLE_EXCLUSIONS = {
  'ericson2020-georgian-spices-lead': 'Screening by handheld X-ray fluorescence with detection limits of 4.1–8 mg/kg, an order of magnitude above typical pepper lead; four of five values are non-detects at that limit.',
  'islam2023-noakhali-spices-bangladesh': 'Values are approximate readings from a bar chart; the paper prints no number for black pepper.',
};
export function referenceUnits(root, rows) {
  const units = Object.fromEntries(ANALYTES.map(a => [a, []])), audit = [];
  const add = (a, u) => { units[a].push({ ...scopeFor(a), ...u }); };
  // GEMS/Food: HMI-calculated medians per WHO region × year; black pepper only, random sampling only.
  const recs = load(root, 'primary/gemsfood-black-pepper-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling' || r.material !== 'black') continue;
    const k = `${r.analyte}|${r.region}|${r.year}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, region, year] = k.split('|');
    if (!units[a]) continue;
    const m = medianOf(rs);
    add(a, { id: `gems-${region}-${year}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${year}`, region, lower: m.lower, upper: m.upper, n: rs.length,
      locator: `primary/gemsfood-black-pepper-records.csv: ${a}, ${region}, ${year}, black pepper, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  // Studies printing per-sample (or per-composite) values: each sample is its own subgroup.
  for (const f of fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort()) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted' || x.source_id === GEMS || !(x.sample_values || []).length) continue;
    const sid = x.source_id;
    for (const s of x.sample_values) {
      const a = s.analyte, unitID = `${sid}:${s.sample}:${a}`;
      if (!units[a]) continue;
      if (SAMPLE_EXCLUSIONS[sid]) { audit.push({ unit: unitID, admitted: false, reason: SAMPLE_EXCLUSIONS[sid] }); continue; }
      // Only Savic's lead fails at sample level; Moussa's listed mercury composites are sound (only the printed mean is held).
      if (sid.startsWith('savic2019') && ['Pb', 'Al'].includes(a)) { audit.push({ unit: unitID, admitted: false, reason: holdFor(`${sid}:${a}:`) }); continue; }
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper)) { audit.push({ unit: unitID, admitted: false, reason: 'non-detect without a numerical limit' }); continue; }
      add(a, { id: `${sid}-${s.sample}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: sid, group: s.group || s.sample, lower, upper, n: 1, locator: s.locator, evidence_kind: 'reported sample or composite value' });
    }
  }
  // Each unit is attached to a result of its own family and scope (gate 6 ownership).
  for (const [a, list] of Object.entries(units)) for (const u of list) {
    const same = rows.filter(r => r.source === u.family && r.analyte === a);
    const hit = u.family === GEMS ? same.find(r => r.material_scope === 'black' && r.group_full.startsWith(`WHO region ${u.region};`) && /random/i.test(r.group_full))
      : same.find(r => r.group_full === u.group && ['sample_value', 'below_LOD', 'not_detected'].includes(r.statistic)) ?? same.find(r => r.group_full === u.group) ?? same.find(r => u.group.includes(r.group_full) || r.group_full.includes(u.group));
    u.result_id = (hit ?? same[0])?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${u.family} ${u.id}`);
  }
  return { units, audit };
}

export function stateOf(r) {
  const c = r.profile.variants['::'].comparisons;
  return c.hmi.baseline.level ? 'rated' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable';
}
export function reasonCode(r) {
  const c = r.profile.variants['::'].comparisons;
  if (stateOf(r) !== 'unavailable') return null;
  if (r.hold) return 'value_fails_source_integrity_check';
  if (!rowTarget(r)) return 'no_numeric_value_or_bound';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- within-study contrasts
// Moussa: packaged groups against the same study's bulk composites; Ziyaina: retail against wholesale;
// otherwise a named subgroup against its study total with the same statistic.
const CONTRAST_REF = { 'moussa2024-spices-herbs-lebanon': r => /bulk/i.test(r.group_full), 'ziyaina2014-libya-spices-lead-cadmium': r => /wholesale/i.test(r.group_full) };
function contrast(r, rows) {
  const t = rowTarget(r);
  const special = CONTRAST_REF[r.source];
  const isRef = special ? special(r) : r.group_kind === 'all_samples';
  if (!t || isRef) return { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total or comparison group, or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s reference group using the same statistic.' };
  const ref = rows.find(x => x.source === r.source && x.analyte === r.analyte && x.statistic === r.statistic && !x.hold && x !== r && (special ? special(x) : x.group_kind === 'all_samples'));
  const rt = ref && rowTarget(ref);
  if (!rt || !t.exact || !rt.exact) return { direction: t.exact ? 'summary' : 'bounded', label: t.exact ? 'No same-study reference' : 'Limits overlap', detail: 'No compatible same-study summary with the same statistic.', context: 'No cross-study pooling is used in this mode.' };
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic and analytical method. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function pepperOccurrence(root) {
  const { rows, parity } = pepperRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = ANALYTES.filter(a => units[a].length).map(a => ({
    key: `black-pepper-pooled-${a}`, scope: scopeFor(a), referenceUnits: units[a], accepts: r => r.analyte === a && r.material_scope === 'black' && !r.hold && !!rowTarget(r),
    label: `HMI black pepper ${a} reference · ${new Set(units[a].map(u => u.family)).size} sampling families`,
    targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
    sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
    methods: 'HMI pools subgroup medians from every compatible black pepper sampling family in the evidence ledger: WHO GEMS/Food region-by-year medians (black pepper, random sampling only) and per-sample or per-composite results printed by individual surveys. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations. Black pepper is a dried spice; results reported as sold and on a dry-weight basis are pooled without moisture conversion.',
    limitations: 'An international evidence-library reference, not a probability sample of the world pepper market. GEMS/Food regions are reporting regions, not growing origins. Many submissions are non-detects with differing limits, which widens the bounds. Pooling as-sold and dry-weight results without moisture conversion adds a small, unquantified basis difference. A position is descriptive concentration, not a safety or compliance judgment.',
  }));
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : r.material_scope === 'mixed' ? 'The EU category “Pepper, black and white” does not separate black from white pepper, so it is not positioned against the black pepper reference.'
    : rowTarget(r) ? 'No compatible reference units for this analyte.'
    : ['range', 'max', 'min'].includes(r.statistic) ? 'The source reports only a range or extreme value; no single statistic can be positioned.'
    : 'The source reports a non-detect without a numerical limit or no numerical value; its position cannot be identified.');
  compiled.record.frozen = '2026-10-22';
  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = '2026-10-22';
    // A limit-bounded row is "bounded" only when it has a comparator to overlap: an HMI reference or a same-study group.
    if (v.comparisons.contrast.direction === 'bounded' && !v.comparisons.hmi.baseline.reference_id)
      v.comparisons.contrast = { direction: 'summary', label: 'No comparator', detail: 'No compatible HMI reference or same-study group exists for this row.', context: 'No cross-study pooling is used in this mode.' };
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
  const unit_list = Object.entries(units).flatMap(([a, list]) => list.map(u => ({ id: u.id, analyte: a, ref_key: `black-pepper-pooled-${a}`, result_id: u.result_id })));
  return { ...compiled, parity, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([a, u]) => [a, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}

export const pepperOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI black pepper reference (pooled)' }, { value: 'contrast', label: 'Same-study subgroup contrast' }],
  caption: 'Black pepper findings from every extracted survey and monitoring dataset, in µg/kg with each source’s statistic, form, packaging, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one subgroup and metal; a mean and a range from the same samples are separate rows. Ratings place a reported mean, median or sample result against a pooled HMI black pepper reference built from every compatible sampling family. Same-study contrasts compare packaged with bulk pepper, retail with wholesale, or an origin with the study total. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Black pepper form (whole, ground) and packaging exactly as the source states; “black and white pepper” is an EU monitoring category that does not separate the two.', 'Collection scope': 'Growing origin, purchase market or WHO reporting region as reported; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled black pepper reference. Higher or Lower compare a subgroup with its own study’s reference group.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
