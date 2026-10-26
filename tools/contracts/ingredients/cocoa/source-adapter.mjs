// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row; each statistic a
// source reports for a subgroup, form and analyte is its own row.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa';
export const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Cocoa differs by fraction: beans and nibs (dry weight), liquor, butter, powders and
// chocolates. Each reference covers one fraction so a powder is never rated against chocolate.
export const FORMS = {
  beans: { label: 'Cocoa beans and nibs', basis: 'Beans or nibs, dry or as-received weight as reported (cocoa beans are dried to about 7% moisture)' },
  shell: { label: 'Cocoa bean shell', basis: 'Shell (testa), dry weight as reported' },
  liquor: { label: 'Cocoa liquor (mass)', basis: 'Cocoa liquor as produced' },
  butter: { label: 'Cocoa butter', basis: 'Cocoa butter as produced' },
  powder: { label: 'Cocoa powder', basis: 'Cocoa powder as sold' },
  sweetened_powder: { label: 'Sweetened cocoa or drinking-chocolate powder', basis: 'Powder as sold, before mixing into a drink' },
  dark_chocolate: { label: 'Dark chocolate', basis: 'Chocolate as sold' },
  milk_chocolate: { label: 'Milk chocolate', basis: 'Chocolate as sold' },
  white_chocolate: { label: 'White chocolate', basis: 'Chocolate as sold' },
  chocolate_unspecified: { label: 'Chocolate, type not specified', basis: 'Chocolate as sold' },
  mixed_products: { label: 'Mixed cocoa and chocolate products', basis: 'Products as sold' },
};
export const formGroup = f => f === 'nibs' ? 'beans' : (FORMS[f] ? f : 'mixed_products');

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating.
export const holds = [
  { match: id => id.startsWith('amjad2021'), reason: 'Concentrations were converted from digest solutions with inconsistent factors (×5, ×83 and ×500 instead of ×50 for some rows), stated maxima disagree with the tables, and most products are compound or filled confectionery, twelve without any cocoa ingredient; the values cannot be checked against a method detection limit.' },
  { match: id => id.startsWith('enogbe2025'), reason: 'The reported spreads cannot be reconciled with the two values they summarise, chromium values are 30–40 times the paper’s own cited limit while the paper reports compliance, and no detection limit is given.' },
];
let integrity = null;
export function holdFor(root, id) {
  const h = holds.find(h => h.match(id));
  if (h) return h.reason;
  integrity ??= loadIntegrity(root);
  return integrity.get(id) ?? null;
}
function loadIntegrity(root) {
  const m = new Map();
  for (const f of fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json'))) {
    const x = JSON.parse(fs.readFileSync(path.join(root, auditDir, 'extraction', f), 'utf8'));
    for (const fd of x.findings || []) if (fd.integrity_issue) m.set(fd.id, publicSafe(`The value conflicts with its own paper: ${String(fd.integrity_issue).replace(/\s+/g, ' ').trim()}`));
  }
  return m;
}

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
const metaCache = new Map();
export function sourceMeta(root, id) {
  if (metaCache.has(id)) return metaCache.get(id);
  const fm = matter(fs.readFileSync(path.join(root, 'wiki/sources', `${id}.md`), 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  const year = (id.match(/(19|20)\d{2}/) || [fm.year ?? ''])[0];
  const special = { [GEMS]: 'WHO GEMS/Food', [FDA]: 'FDA TDS FY2018–FY2020', 'fsanz2011-23rd-australian-total-diet-study': 'FSANZ 23rd ATDS', 'fsanz2019-25th-australian-total-diet-study': 'FSANZ 25th ATDS',
    'cfs2013-hktds-metallic-contaminants': 'Hong Kong TDS 2013', 'anses2026-tds3-metals-france': 'ANSES TDS3 2026', 'fera2015-uk-tds-metals': 'UK TDS 2014', 'efsa-cadmium-contam-2009': 'EFSA 2009 (cadmium)', 'efsa2012-cadmium-dietary-exposure-europe': 'EFSA 2012', 'efsa2015-nickel-food-water': 'EFSA 2015', 'efsa-lead-contam-2010': 'EFSA 2010', 'efsa-arsenic-contam-2009': 'EFSA 2009 (arsenic)', 'efsa-chromium-contam-2014': 'EFSA 2014', 'efsa-aluminium-afc-2008': 'EFSA 2008', 'jecfa-91st-cadmium-2022': 'JECFA 2022', 'jecfa-73rd-cadmium-2010': 'JECFA 2011', 'asyousow2022-expert-investigation-cocoa-chocolate-products': 'As You Sow 2022' };
  const label = special[id] ?? `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${year}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  const out = { label, url };
  metaCache.set(id, out);
  return out;
}

// Filter labels must stay short on phones; the drawer keeps the full source wording.
export function shortLabel(text, max = 34) {
  let t = String(text).replace(/\s*\([^)]*\)/g, '').trim() || String(text);
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text ?? '').matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
const lodOf = s => Number.isFinite(s.lod_ug_kg) ? s.lod_ug_kg : Number.isFinite(s.bound) ? s.bound : Number.isFinite(s.ub_ug_kg) ? s.ub_ug_kg : null;
export function rowTarget(row) {
  if (row.hold) return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && Array.isArray(s.median_bounds_ug_kg)) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(lodOf(s))) return { lower: 0, upper: lodOf(s), exact: false, statistic: 'non-detect bounds' };
  return null;
}

function findingText(s) {
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(lodOf(s)) ? `<${fmt(lodOf(s))} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && Array.isArray(s.median_bounds_ug_kg)) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : `median ${fmt(a)}–${fmt(b)} µg/kg (bounds from non-detects)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (s.statistic === 'percentile') return `${s.reported?.text ?? 'Percentile reported'}`.slice(0, 160);
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`.slice(0, 160);
}

const regionType = k => ({ growing_origin: 'Reported growing origin', purchase_market: 'Purchase or reporting market; growing origin not identified', cocoa_percentage: 'Cocoa content group within one study',
  genotype: 'Cacao genotype within one study', farm_or_site: 'Farm or site within one study', processing_stage: 'Processing stage within one study', year: 'Collection year within one study',
  concentration_segment: 'Concentration segment defined by the authors', processing_country: 'Processing country; growing origin not identified', form: 'All samples of this form in the study', all_samples: 'All samples in the study' })[k] ?? 'Subgroup within one study';
const isTotal = r => ['all_samples', 'form'].includes(r.group_kind);

const ordinal = n => { const v = Number(n); const r = Math.round(v) === v ? v : n; const k = Math.floor(v) % 100; const suf = k >= 11 && k <= 13 ? 'th' : ({1: 'st', 2: 'nd', 3: 'rd'})[Math.floor(v) % 10] ?? 'th'; return `${r}${suf} percentile`; };
export function publicSafe(v, key) {
  if (typeof v === 'string') return key === 'id' ? v.replace(/\bP(\d{1,2}(?:\.\d)?)\b/g, 'pct$1') : v.replace(/\bP(\d{1,2}(?:\.\d)?)\b/g, (_, n) => ordinal(n));
  if (Array.isArray(v)) return v.map(x => publicSafe(x));
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, publicSafe(x, k)]));
  return v;
}

// One row per extracted result (owner fullness gate 4).
export function cocoaRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const raw of x.findings) {
      // Rows the extractor marked outside the page scope (cocoa drinks as consumed, filled products) are not cocoa results.
      if (raw.in_page_scope === false) continue;
      const hold = holdFor(root, raw.id);
      // Source-reported percentiles are spelled out; the P-number shorthand never reaches a public surface.
      const fd = publicSafe(raw);
      const period = Array.isArray(fd.years) && fd.years.length ? (fd.years[0] === fd.years.at(-1) ? String(fd.years[0]) : `${fd.years[0]}–${fd.years.at(-1)}`) : shortPeriod(x.study?.collection_period || '');
      const g = formGroup(fd.form);
      const secondary = fd.secondary_citation || fd.study_cited || (fd.data_origin && fd.data_origin !== x.source_id);
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: FORMS[g].label, form_group: g, material: fd.material, region: shortLabel(fd.group), group_full: fd.group, group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.study?.sampling_unit || 'samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: FORMS[g].basis, display_basis: fd.basis || x.study?.basis || FORMS[g].basis, short_basis: g === 'beans' || g === 'shell' ? 'Bean basis as reported' : 'As sold',
        method: x.study?.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, secondary ? `Value quoted from ${fd.study_cited || fd.data_origin || 'another study'}; it does not enter a reference.` : null, `Reported material: ${fd.material}.`, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, secondary: !!secondary, primary: fd, extraction_file: f, lod_ug_kg: lodOf(fd),
      });
    }
  }
  const metalOrder = ['Cd', 'Pb', 'Ni', 'tAs', 'iAs', 'DMA', 'tHg', 'Cr', 'Al', 'Sn', 'U'];
  const formOrder = Object.keys(FORMS);
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'percentile', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : /fsanz|cfs2013|anses|fera|efsa/.test(r.source) ? 2 : 3;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || formOrder.indexOf(a.form_group) - formOrder.indexOf(b.form_group) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-cocoa-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const ANALYTES = ['Cd', 'Pb', 'Ni', 'tAs', 'iAs', 'DMA', 'tHg', 'Cr', 'Al', 'Sn', 'U'];
export const refKey = (g, a) => `cocoa-${g}-${a}`;
const scopeFor = (g, analyte) => ({ ingredient: 'cocoa', analyte, basis: `${FORMS[g].basis}, µg/kg`, statistic: 'subgroup median concentration', market: `International ${FORMS[g].label.toLowerCase()} evidence library`, period: 'Source collection periods as reported' });
// EU monitoring summaries published by EFSA aggregate national submissions that also
// reach GEMS/Food; they never set a reference so the same samples are not counted twice.
export const isOverlapFamily = id => /^(efsa|jecfa)/.test(id) || id === 'abt2020-perspective-cadmium-lead-cocoa-chocolate';
// Families that print individual samples contribute those samples; their published
// medians of the same samples do not enter again.
const SAMPLE_FAMILIES = ['abt2018-cadmium-lead-cocoa-chocolate-us-market', 'kataoka2018-japan-chocolate-cocoa-cadmium', 'fechner2019-cocoa-origin-al-cd-exposure', 'fechner2022-bfr-meal-hg-cd-pb-ni-germany',
  'barraza2019-ecuador-cacao-cadmium-isotope', 'blommaert2022-cd-cacao-translocation', 'oliveira2021-cocoa-beans-cd-pb-brazil-processing', 'cantoral2024-cadmium-foodstuffs-mexico',
  'burgon2023-cocoa-bean-to-bar-brazil-metals-ota', 'fera2015-uk-tds-metals'];

function medianOf(records) {
  const scope = { ingredient: 'cocoa', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

export function referenceUnits(root, rows) {
  const units = {}, audit = [];
  const add = (g, a, u) => { const k = refKey(g, a); (units[k] ??= []).push({ ...scopeFor(g, a), ...u, analyte: a, form_group: g }); };
  // GEMS/Food: HMI-calculated medians per form × WHO region × year, random sampling only.
  const recs = load(root, 'primary/gemsfood-cocoa-reference-input.json');
  const grouped = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling' || r.record_type === 'Aggregated') continue;
    const k = `${r.analyte}|${formGroup(r.form)}|${r.region}|${r.year}`;
    if (!grouped.has(k)) grouped.set(k, []);
    grouped.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of grouped) {
    const [a, g, region, year] = k.split('|');
    const m = medianOf(rs);
    add(g, a, { id: `gems-${g}-${region}-${year}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${year}`, region, lower: m.lower, upper: m.upper, n: rs.length,
      locator: `primary/gemsfood-cocoa-records.csv: ${a}, ${FORMS[g].label}, ${region}, ${year}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  // FDA TDS: one median per form from the national composites.
  const fda = load(root, `extraction/${FDA}.json`).sample_values;
  for (const g of ['powder', 'milk_chocolate']) for (const a of ANALYTES) {
    const s = fda.filter(x => x.analyte === a && x.form === g);
    if (!s.length) continue;
    const m = medianOf(s.map(x => ({ lower: x.lower_ug_kg, upper: x.upper_ug_kg })));
    add(g, a, { id: `fda-${g}-us-national`, family: FDA, group: 'US national composites FY2018–FY2020', lower: m.lower, upper: m.upper, n: s.length, locator: s.map(x => x.locator).join('; ').slice(0, 480), evidence_kind: 'HMI-calculated subgroup median' });
  }
  // Studies printing individual samples: each sample is its own subgroup.
  const sampleKeys = new Set();
  for (const sid of SAMPLE_FAMILIES) {
    const x = load(root, `extraction/${sid}.json`);
    for (const [i, s] of (x.sample_values || []).entries()) {
      const a = s.analyte, g = formGroup(s.form);
      const uid = `${sid}-${i}-${a}`;
      if (!ANALYTES.includes(a) || !FORMS[g]) { audit.push({ unit: uid, admitted: false, reason: 'analyte or form outside the reference scopes' }); continue; }
      if (s.duplicate_of || s.note && /same (samples?|pool|value) as|duplicate/i.test(s.note)) { audit.push({ unit: uid, admitted: false, reason: 'repeats a value already counted' }); continue; }
      const lower = s.censored ? (Number.isFinite(s.mlb_ug_kg) ? s.mlb_ug_kg : 0) : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper)) { audit.push({ unit: uid, admitted: false, reason: 'non-detect without a numerical limit' }); continue; }
      sampleKeys.add(`${sid}|${a}|${g}`);
      add(g, a, { id: uid.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: sid, group: s.group || s.sample, sample: s.sample, lower, upper, n: 1, locator: s.locator || 'sample table', evidence_kind: 'reported sample value' });
    }
  }
  // Single reported results and published subgroup medians from the remaining families.
  for (const r of rows) {
    if (r.hold || r.secondary || r.source === GEMS || r.source === FDA || isOverlapFamily(r.source) || sampleKeys.has(`${r.source}|${r.analyte}|${r.form_group}`)) continue;
    if (SAMPLE_FAMILIES.includes(r.source) && r.statistic !== 'median') continue;
    const single = r.statistic === 'sample_value' && Number.isFinite(r.value);
    const median = r.statistic === 'median' && Number.isFinite(r.value);
    if (!single && !median) continue;
    // The same samples regrouped by processing country or year would enter twice; origin groupings take precedence.
    if (['processing_country', 'year'].includes(r.group_kind) && rows.some(o => o.source === r.source && o.analyte === r.analyte && o.form_group === r.form_group && o.group_kind === 'growing_origin' && o.statistic === 'median')) continue;
    // A study total enters only when the study reports no subgroup of the same form and analyte.
    if (isTotal(r) && rows.some(o => o.source === r.source && o.analyte === r.analyte && o.form_group === r.form_group && !isTotal(o) && !o.hold && o.statistic === r.statistic)) continue;
    add(r.form_group, r.analyte, { id: r.finding_id.replace(/[^a-z0-9-]+/gi, '-').toLowerCase(), family: r.source, group: r.group_full, lower: r.value, upper: r.value, n: r.n ?? 1, locator: r.locator, evidence_kind: single ? 'reported single result' : 'reported subgroup median', result_finding: r.finding_id });
  }
  // Each unit is attached to a result of its own family, analyte and form (gate 6 ownership).
  for (const list of Object.values(units)) for (const u of list) {
    const same = rows.filter(r => r.source === u.family && r.analyte === u.analyte && r.form_group === u.form_group);
    const hit = u.result_finding ? same.find(r => r.finding_id === u.result_finding)
      : u.family === GEMS ? same.find(r => r.group_full === `WHO region ${u.region}; random sampling`)
      : same.find(r => r.group_full === u.group && ['sample_value', 'below_LOD', 'not_detected', 'mean', 'median'].includes(r.statistic)) ?? same.find(r => !isTotal(r)) ?? same[0];
    u.result_id = hit?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${u.family} ${u.id}`);
  }
  return { units, audit };
}

// Terminal reason codes (owner fullness rules, comparator rule 5, with the dated
// value_fails_source_integrity_check amendment).
export function stateOf(r) {
  const c = r.profile.variants['::'].comparisons;
  return c.hmi.baseline.level ? 'rated' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable';
}
export function reasonCode(r) {
  const c = r.profile.variants['::'].comparisons;
  if (stateOf(r) !== 'unavailable') return null;
  if (r.hold) return 'value_fails_source_integrity_check';
  if (r.unit !== 'µg/kg') return 'basis_incompatible_with_all_references';
  if (!rowTarget(r)) return 'no_numeric_value_or_bound';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- comparisons
function contrast(r, rows) {
  const t = rowTarget(r);
  if (!t || isTotal(r)) return { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total for its form or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s total for the same form, using the same statistic.' };
  const ref = rows.find(x => x.source === r.source && x.analyte === r.analyte && x.form_group === r.form_group && isTotal(x) && x.statistic === r.statistic && !x.hold && x.id !== r.id);
  const rt = ref && rowTarget(ref);
  if (!rt) return { direction: 'summary', label: 'No same-study reference', detail: 'No compatible same-study total with the same form and statistic.', context: 'No cross-study pooling is used in this mode.' };
  if (!t.exact || !rt.exact) {
    const overlap = !(t.upper < rt.lower || t.lower > rt.upper);
    if (overlap) return { direction: 'bounded', label: 'Limits overlap', detail: `${r.region}: ${r.finding_text}; study total: ${ref.finding_text}. Reporting limits overlap, so the direction cannot be identified.`, context: 'Non-detects are intervals from zero to the reporting limit.' };
    const direction = t.upper < rt.lower ? 'lower' : 'higher';
    return { kind: 'food_form', direction, label: `${fmt(t.lower)}–${fmt(t.upper)} versus ${fmt(rt.lower)}–${fmt(rt.upper)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
      detail: `${r.region}: ${r.finding_text}; study total: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`, context: 'Bounds do not overlap, so the direction holds at every point within the reporting limits. A descriptive difference, not a significance test.' };
  }
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, form, statistic and analytical method. Subgroups share samples with the study total. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function cocoaOccurrence(root) {
  const { rows, parity } = cocoaRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = Object.entries(units).filter(([, u]) => u.length).map(([key, list]) => {
    const { analyte: a, form_group: g } = list[0];
    return {
      key, scope: scopeFor(g, a), referenceUnits: list, accepts: r => r.analyte === a && r.form_group === g && r.unit === 'µg/kg' && !r.hold && !!rowTarget(r),
      label: `HMI ${FORMS[g].label.toLowerCase()} ${a} reference · ${new Set(list.map(u => u.family)).size} sampling ${new Set(list.map(u => u.family)).size === 1 ? 'family' : 'families'}`,
      targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
      methods: `HMI pools subgroup medians for ${FORMS[g].label.toLowerCase()} from every compatible sampling family in the cocoa evidence ledger: WHO GEMS/Food region-by-year medians (random sampling, individual records only), FDA Total Diet Study composites where they exist, individual products or batches printed by surveys, and published subgroup medians. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges, maxima and values quoted from other studies never enter as observations.`,
      limitations: `An international evidence-library reference for ${FORMS[g].label.toLowerCase()}, not a probability sample of any market. GEMS/Food regions are reporting regions, not growing origins. Many submissions are non-detects with differing limits, which widens the bounds. A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : rowTarget(r) ? `No compatible reference units exist for ${r.food.toLowerCase()} and this analyte.`
    : ['range', 'max', 'min', 'percentile'].includes(r.statistic) ? 'The source reports only a range, percentile or extreme value; no single statistic can be positioned.'
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
    r.comparison_attempts = [
      { mode: 'hmi_rating', outcome: c.hmi.baseline.level ? 'rated' : 'unavailable', reason: c.hmi.baseline.level ? `${c.hmi.baseline.level} against ${c.hmi.baseline.reference_id}` : (c.hmi.detail || 'No HMI position') },
      { mode: 'within_study_direct', outcome: state === 'rated' ? 'not_selected' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : 'unavailable', reason: c.contrast.label || c.contrast.detail || 'No same-study contrast' },
      { mode: 'bounded_classification', outcome: ['rated', 'direct'].includes(state) ? 'not_selected' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable', reason: c.contrast.direction === 'bounded' ? 'Reporting limits overlap the same-study comparator' : 'No overlapping-limit classification applies' },
    ];
  }
  const unit_list = Object.entries(units).flatMap(([key, list]) => list.map(u => ({ id: u.id, analyte: u.analyte, form_group: u.form_group, ref_key: key, result_id: u.result_id, family: u.family })));
  return { ...compiled, parity, units, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([k, u]) => [k, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}

export const cocoaOptions = {
  referenceNote: false, defaultComparison: 'reviewed', directComparisonLabel: 'vs study total',
  formFamilies: [['Raw cocoa', ['beans', 'shell']], ['Cocoa ingredients', ['liquor', 'butter', 'powder', 'sweetened_powder']], ['Chocolate', ['dark_chocolate', 'milk_chocolate', 'white_chocolate', 'chocolate_unspecified']], ['Other', ['mixed_products']]],
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI reference for the same cocoa form' }, { value: 'contrast', label: 'Same-study subgroup contrast' }],
  caption: 'Cocoa and chocolate findings from every extracted survey, farm study, total diet study and monitoring dataset, in µg/kg with each source’s statistic, basis, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one subgroup, cocoa form and metal. Percentiles, ranges and maxima reported for the same samples as a mean or median are shown on that row. Ratings place a reported mean, median or single result against a pooled HMI reference for the same form (beans and nibs, liquor, butter, powder, sweetened powder, and each chocolate type), built from every compatible sampling family. Same-study contrasts compare a subgroup with its own study total for that form. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Cocoa fraction or chocolate type; the drawer keeps the source’s exact wording.', 'Collection scope': 'Growing origin, farm, cocoa-content group or purchase market as reported; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic. A less-than value is a reporting limit, not zero. Beans are usually reported on a dry-weight basis; products as sold.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled reference for the same cocoa form. Higher or Lower compare a subgroup with its own study total.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
