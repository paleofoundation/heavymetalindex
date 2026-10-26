// Seaweed scientific adapter. Shared Rice components own all markup and interaction.
// Every extracted occurrence result (a tracked-analyte concentration for seaweed) maps to
// exactly one table row. Seaweed type, product form and basis stay separate; total and
// inorganic arsenic are separate analytes and are never substituted for each other.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed';
export const GEMS = 'who-gemsfood-heavy-metal-contaminants';
const fmt = v => Number(Number(v).toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });
export const ANALYTES = ['iAs', 'tAs', 'DMA', 'Cd', 'Pb', 'tHg', 'MeHg', 'Ni', 'Cr', 'Al', 'Sn', 'U'];
const ANALYTE_ALIAS = { Hg: 'tHg', THg: 'tHg', 'total Hg': 'tHg', As: 'tAs', TAs: 'tAs', 'Cr(VI)': 'CrVI' };

// Bases are kept exactly apart; only identical bases share a reference.
export function normBasis(b, source) {
  const t = String(b || '').toLowerCase();
  if (source === GEMS) return b;
  if (/^dry weight|dry mass|\bdw\b/.test(t)) return 'dry weight';
  if (/dried product as sold/.test(t)) return 'dried product as sold';
  if (/as prepared|rehydrat|soaked|cooked/.test(t)) return 'as prepared';
  if (/^wet weight|fresh weight/.test(t)) return 'wet weight';
  if (/hydration/.test(t)) return 'recalculated by the source to 85% hydration';
  return 'basis not stated';
}
const BASIS_LABEL = { 'dry weight': 'Dry weight', 'dried product as sold': 'Dried product as sold', 'wet weight': 'Wet (fresh) weight', 'as prepared': 'As prepared (soaked or cooked)',
  'wet product as sold or prepared': 'Wet product as sold or prepared', 'as sold, moisture not stated': 'As sold, moisture not stated', 'basis not stated': 'Basis not stated',
  'recalculated by the source to 85% hydration': 'Recalculated to 85% hydration' };
const REFERENCE_BASES = ['dry weight', 'dried product as sold', 'wet weight', 'wet product as sold or prepared', 'as prepared'];

// Values that fail a primary-text integrity check stay visible but never enter a
// reference or receive a rating (terminal reason value_fails_source_integrity_check).
export const holds = JSON.parse(fs.readFileSync(path.join(path.dirname(new URL(import.meta.url).pathname), 'holds.json'), 'utf8'));
export const holdFor = id => holds.find(h => new RegExp(h.pattern).test(id))?.reason ?? null;
// Certified reference materials and quality-control samples are not market or harvest samples.
const isQC = f => /reference material|\bCRM\b|\bSRM\b|NIES|\bBCR\b|NMIJ|quality[- ]control/i.test(`${f.material} ${f.group} ${f.notes ?? ''}`.slice(0, 400)) && /reference material|\bCRM\b|\bSRM\b|NIES|BCR|NMIJ|quality[- ]control material/i.test(`${f.material} ${f.group}`);

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
function sourceMeta(root, id) {
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  const special = { [GEMS]: 'WHO GEMS/Food', 'efsa2023-heavy-metals-seaweed': 'EFSA 2023 seaweed report', 'fsanz2012-seaweed-inorganic-arsenic-au': 'FSANZ 2010 seaweed survey', 'duinker2020-macroalgae-food-feed-safety': 'Duinker et al. 2020' };
  const yr = (id.match(/(19|20)\d{2}/) || [''])[0];
  const label = special[id] ?? `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? yr}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}
export function shortLabel(text, max = 34) {
  let t = String(text).replace(/\s*\([^)]*\)/g, '').trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text ?? '').matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}
// Public text: percentile shorthand is spelled out and internal program names never reach readers.
export const pub = t => t == null ? t : String(t).replace(/\b[Pp](\d{1,2})\b/g, (m, d) => `${d}${d === '1' ? 'st' : d === '2' ? 'nd' : d === '3' ? 'rd' : 'th'} percentile`).replace(/\bHMT(?:c|&C)\b[^.;]*[.;]?/g, '').replace(/\b(?:ChatGPT|OpenAI|Claude|Codex)\b/g, 'reviewer');
const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
function rowTarget(row) {
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
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (bounds)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  const pct = String(s.statistic).match(/^percentile_(\d+)$/);
  if (pct) { const pv = s.value_ug_kg ?? s.max_ug_kg ?? s.min_ug_kg; return Number.isFinite(pv) ? `${fmt(pv)} µg/kg (${pct[1]}th percentile)` : `${s.reported?.text ?? 'Percentile reported'}`; }
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`;
}
const regionType = k => ({ growing_origin: 'Reported growing or harvest area', purchase_market: 'Purchase or reporting market; growing origin not identified', species_or_type: 'Seaweed type or product within one study',
  site_or_habitat: 'Collection site within one study', processing_state: 'Processing or preparation state within one study', year: 'Collection year within one study' }[k] ?? 'All samples in the study');
// A result row is a tracked-analyte concentration; % of total, ratios and untracked
// arsenic species stay in the extraction record as context.
export function isResult(f) {
  const a = ANALYTE_ALIAS[f.analyte] ?? f.analyte;
  if (!ANALYTES.includes(a)) return false;
  if (/%|ratio|percent/i.test(f.reported?.unit ?? '')) return false;
  return true;
}
const TYPE_ORDER = ['Hijiki', 'Kombu/kelp', 'Wakame', 'Arame', 'Nori/laver', 'Dulse', 'Sea spaghetti', 'Wracks (Fucus/Ascophyllum)', 'Carrageen (Irish moss)', 'Green seaweeds (Ulva etc.)', 'Other brown', 'Other red', 'Mixed or unspecified'];
const formLabel = f => { const t = String(f || '').toLowerCase(); return /supplement/.test(t) ? 'supplement' : /powder|flake/.test(t) ? 'powder' : /roast|toast|snack|yaki/.test(t) ? 'roasted or seasoned' : /salted|season|prepared/.test(t) ? 'salted, seasoned or prepared' : /cook|boil/.test(t) ? 'cooked' : /soak|rehydrat/.test(t) ? 'soaked or rehydrated' : /fresh|wild|thallus|tissue/.test(t) ? 'fresh or wild-collected' : /frozen/.test(t) ? 'frozen' : /dried|dry/.test(t) ? 'dried' : 'form not stated'; };

export function seaweedRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const raw of x.findings) {
      if (!isResult(raw)) continue;
      // Source-reported percentiles keep their meaning in plain words; no shorthand labels reach readers.
      const pct = String(raw.statistic).match(/^p(\d{1,2})$/i);
      const fd = pct ? {...raw, statistic: pct[1] === '50' ? 'median' : `percentile_${pct[1]}`} : raw;
      const analyte = ANALYTE_ALIAS[fd.analyte] ?? fd.analyte;
      const hold = holdFor(fd.id) ?? (fd.use === 'excluded' ? 'The source value is internally inconsistent and is excluded by the extraction review.' : null);
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(x.study?.collection_period || '');
      const basis = normBasis(fd.basis, x.source_id);
      const type = fd.seaweed_type || 'Mixed or unspecified';
      const form = x.source_id === GEMS ? fd.form : formLabel(fd.form);
      const fid = fd.id.replace(/(^|[^a-z])p(\d{1,2})(?=$|[^a-z0-9])/gi, '$1pct$2');
      rows.push({
        id: fid, scope_key: fid, finding_id: fid, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte, food: `${type} · ${form}`, seaweed_type: type, form, species: fd.species ?? null, material: pub(fd.material),
        region: pub(shortLabel(fd.group || 'All samples')), group_full: pub(fd.group || 'All samples'), group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: pub(x.study?.sampling_unit || 'seaweed samples'), record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: /^percentile_/.test(fd.statistic) ? `${fd.statistic.split('_')[1]}th percentile` : fd.statistic.replace('_', ' '), finding_text: pub(findingText(fd)),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), text: pub(fd.reported?.text), value: fd.reported?.value ?? null }, original_result: pub(fd.reported?.text ?? ''),
        basis, display_basis: BASIS_LABEL[basis] ?? basis, short_basis: BASIS_LABEL[basis] ?? basis,
        method: pub(x.study?.method || 'Not reported'), locator: pub(fd.locator), censoring: pub(fd.censoring || 'As reported by the source'),
        limitations: pub([hold, fd.notes].filter(Boolean).join(' ').slice(0, 900)),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: pub(fd.conversion || 'none') }, hold, qc: isQC(fd), supplement: /supplement/.test(form), primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  const tier = r => r.source === GEMS ? 0 : r.source.startsWith('efsa') || r.source.startsWith('fsanz') || r.source.startsWith('duinker') ? 1 : 2;
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  rows.sort((a, b) => ANALYTES.indexOf(a.analyte) - ANALYTES.indexOf(b.analyte) || TYPE_ORDER.indexOf(a.seaweed_type) - TYPE_ORDER.indexOf(b.seaweed_type) || tier(a) - tier(b)
    || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-seaweed-${r.analyte}-${i}`; }
  const ids = new Set(); for (const r of rows) { if (ids.has(r.id)) throw Error(`Duplicate finding id ${r.id}`); ids.add(r.id); }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const refKey = (a, basis) => `seaweed-${a}-${basis.replace(/[^a-z0-9]+/gi, '-')}`;
const scopeFor = (analyte, basis) => ({ ingredient: 'seaweed', analyte, basis: `${BASIS_LABEL[basis]}, µg/kg; no basis conversion`, statistic: 'subgroup median concentration', market: 'International seaweed evidence library, all edible macroalgal types', period: 'Source collection periods as reported' });
function medianOf(records) {
  const scope = { ingredient: 'seaweed', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}
export function referenceUnits(root, rows) {
  const units = {}, audit = [];
  const add = (a, basis, u) => { if (!REFERENCE_BASES.includes(basis)) return; (units[refKey(a, basis)] ??= { analyte: a, basis, list: [] }).list.push({ ...scopeFor(a, basis), ...u }); };
  // GEMS/Food: HMI-calculated medians per seaweed type × product form × basis × WHO region × year, random sampling only.
  const recs = load(root, 'primary/gemsfood-seaweed-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling') continue;
    const k = [r.analyte, r.type, r.form, r.basis, r.region, r.year].join('|');
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, type, form, basis, region, year] = k.split('|');
    if (!ANALYTES.includes(a)) continue;
    const m = medianOf(rs);
    add(a, basis, { id: `gems-${type}-${form}-${region}-${year}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${type}, ${form}, ${region} ${year}`, gems: { type, form, basis, region },
      lower: m.lower, upper: m.upper, n: rs.length, locator: `primary/gemsfood-seaweed-records.csv: ${a}, ${type}, ${form}, ${basis}, ${region}, ${year}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  // Literature: individual sample results (each sample is its own subgroup) and published subgroup medians.
  for (const r of rows) {
    if (r.source === GEMS) continue;
    const why = r.hold ? 'held' : r.qc ? 'certified reference or quality-control material, not a market or harvest sample' : r.supplement ? 'supplement product, not pooled with seaweed foods' : r.primary.derived_by_extractor ? 'computed by the extractor, not a source result' : null;
    const s = r.primary;
    const isUnitStat = s.statistic === 'sample_value' || s.statistic === 'median' || (['below_LOD', 'not_detected'].includes(s.statistic) && r.n === 1);
    if (!isUnitStat) continue;
    if (why) { audit.push({ unit: r.finding_id, admitted: false, reason: why }); continue; }
    const t = rowTarget(r);
    if (!t) { audit.push({ unit: r.finding_id, admitted: false, reason: 'no numerical value or bound' }); continue; }
    if (s.statistic === 'median' && r.region_type === 'All samples in the study' && rows.some(o => o.source === r.source && o.analyte === r.analyte && o.basis === r.basis && o.statistic === 'median' && o.region_type !== 'All samples in the study')) {
      audit.push({ unit: r.finding_id, admitted: false, reason: 'study-total median; its subgroup medians enter instead' }); continue;
    }
    add(r.analyte, r.basis, { id: r.finding_id.replace(/[^a-z0-9-]+/gi, '-').toLowerCase(), family: r.source, group: `${r.group_full} · ${r.food}`, lower: t.lower, upper: t.upper, n: r.n ?? 1,
      locator: r.locator, evidence_kind: s.statistic === 'median' ? 'reported subgroup median' : 'reported sample value', result_id: r.result_id });
  }
  // Each GEMS unit is attached to the GEMS result of its own scope (gate 6 ownership).
  for (const { analyte, list } of Object.values(units)) for (const u of list) {
    if (u.result_id) continue;
    const hit = rows.find(r => r.source === GEMS && r.analyte === analyte && r.seaweed_type === u.gems.type && r.form === u.gems.form && r.basis === u.gems.basis && r.primary.region === u.gems.region && /random/i.test(r.group_full));
    u.result_id = hit?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${u.id}`);
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
  if (!REFERENCE_BASES.includes(r.basis)) return 'basis_incompatible_with_all_references';
  if (!rowTarget(r)) return 'no_numeric_value_or_bound';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- comparisons
function contrast(r, rows) {
  const t = rowTarget(r);
  const none = { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s total using the same statistic and basis.' };
  if (!t || r.region_type === 'All samples in the study') return none;
  const ref = rows.find(x => x !== r && x.source === r.source && x.analyte === r.analyte && x.basis === r.basis && x.region_type === 'All samples in the study' && x.statistic === r.statistic && !x.hold);
  const rt = ref && rowTarget(ref);
  if (!rt) return { ...none, label: 'No same-study reference', detail: 'No compatible same-study total with the same statistic and basis.' };
  if (!t.exact || !rt.exact) {
    const overlap = t.lower <= rt.upper && rt.lower <= t.upper;
    if (!overlap) return { kind: 'food_form', direction: t.upper < rt.lower ? 'lower' : 'higher', label: `${fmt(t.upper)} versus ${fmt(rt.lower)} µg/kg (bounds)`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
      detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}.`, context: 'Bounds do not overlap. Same source, analyte, statistic and basis. A descriptive difference, not a significance test or safety judgment.' };
    return { direction: 'bounded', label: 'Limits overlap', target: t, reference: rt, detail: `${r.region}: ${r.finding_text}; study total: ${ref.finding_text}. Reporting limits overlap, so the order cannot be resolved.`, context: 'No cross-study pooling is used in this mode.' };
  }
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic, basis and analytical method. Subgroups share samples with the study total. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function seaweedOccurrence(root) {
  const { rows, parity } = seaweedRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = Object.entries(units).map(([key, { analyte, basis, list }]) => ({
    key, scope: scopeFor(analyte, basis), referenceUnits: list, accepts: r => r.analyte === analyte && r.basis === basis && !r.hold && !r.supplement && !!rowTarget(r),
    label: `HMI seaweed ${analyte} reference (${BASIS_LABEL[basis].toLowerCase()}) · ${new Set(list.map(u => u.family)).size} sampling families`,
    targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
    sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
    methods: `HMI pools subgroup medians from every compatible seaweed sampling family in the evidence ledger on one basis (${BASIS_LABEL[basis].toLowerCase()}): WHO GEMS/Food medians by seaweed type, product form, WHO region and year (random sampling only), individual sample results printed by surveys, and published subgroup medians. All edible macroalgal types are pooled, so a position shows where a result sits among seaweeds in general; types differ systematically. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals. Means, ranges and maxima never enter as observations.`,
    limitations: 'An international evidence-library reference across seaweed types, not a probability sample of any market. Hijiki and some kelps dominate the upper arsenic tail. GEMS/Food regions are reporting regions, not growing origins. Different bases are never mixed. A position is descriptive concentration, not a safety or compliance judgment.',
  }));
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : r.supplement ? 'Supplement products are not positioned against the seaweed food reference.'
    : !REFERENCE_BASES.includes(r.basis) ? `The source does not state a basis that matches any reference (${r.display_basis}); dry, dried-as-sold and wet results are never mixed.`
    : rowTarget(r) ? 'No compatible reference units for this analyte and basis.'
    : ['range', 'max', 'min'].includes(r.statistic) ? 'The source reports only a range or extreme value; no single statistic can be positioned.'
    : 'The source reports a non-detect without a numerical limit; its position cannot be identified.');
  compiled.record.frozen = '2026-10-22';
  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = '2026-10-22';
    v.comparisons.reviewed = v.comparisons.hmi.baseline.level ? v.comparisons.hmi : ['higher', 'lower', 'same', 'bounded'].includes(v.comparisons.contrast.direction) ? v.comparisons.contrast : v.comparisons.hmi;
  }
  for (const r of compiled.rows) {
    const c = r.profile.variants['::'].comparisons, state = stateOf(r);
    r.reason_code = reasonCode(r);
    r.comparison_state = state;
    if (r.reason_code === 'species_or_material_without_compatible_reference_after_full_ledger' && r.supplement) r.reason_code = 'species_or_material_without_compatible_reference_after_full_ledger';
    r.comparison_attempts = [
      { mode: 'hmi_rating', outcome: c.hmi.baseline.level ? 'rated' : 'unavailable', reason: c.hmi.baseline.level ? `${c.hmi.baseline.level} against ${c.hmi.baseline.reference_id}` : (c.hmi.detail || 'No HMI position') },
      { mode: 'within_study_direct', outcome: state === 'rated' ? 'not_selected' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : 'unavailable', reason: c.contrast.label || c.contrast.detail || 'No same-study contrast' },
      { mode: 'bounded_classification', outcome: ['rated', 'direct'].includes(state) ? 'not_selected' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable', reason: c.contrast.direction === 'bounded' ? 'Reporting limits overlap the comparator' : 'No overlapping-limit classification applies' },
    ];
  }
  const unit_list = Object.entries(units).flatMap(([key, { analyte, basis, list }]) => list.map(u => ({ id: u.id, analyte, basis, ref_key: key, result_id: u.result_id })));
  return { ...compiled, parity, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([k, u]) => [k, { units: u.list.length, families: [...new Set(u.list.map(x => x.family))] }])) };
}

export const seaweedOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI seaweed reference (pooled)' }, { value: 'contrast', label: 'Same-study subgroup contrast' }],
  caption: 'Seaweed findings from every extracted survey, monitoring dataset and agency report, in µg/kg with each source’s seaweed type, product form, basis, statistic and censoring retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one seaweed group and metal; a mean, median and range from the same samples are separate rows. Total and inorganic arsenic are separate metals. Dry-weight, dried-as-sold and wet results are never mixed. Ratings place a reported mean, median or sample result against a pooled HMI reference for the same metal and basis, built from every compatible seaweed sampling family. Same-study contrasts compare a subgroup with its own study total. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Seaweed type and product form as reported or inferred from the food name.', 'Collection scope': 'Growing area, collection site, product or purchase market as reported; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic, on the basis shown in the evidence drawer. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled seaweed reference for the same metal and basis. Higher or Lower compare a subgroup with its own study total.', Evidence: 'Original values, basis, locators, methods, holds and limitations.' },
};
