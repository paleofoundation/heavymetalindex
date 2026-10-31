// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row; rows group a
// source subgroup's statistics (mean, SD, range, median) for one analyte.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey';
const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating (owner fullness rules: terminal reason).
export const holds = [
  { match: id => id.startsWith('teferi2026') && /:(Pb|Cd):/.test(id), reason: 'Reported lead and cadmium lie below the paper’s own method detection limits after its stated dilution; the values cannot be reconciled with its analytical method.' },
  { match: id => id.startsWith('salama2019'), reason: 'Lead means of 2.4–11 mg/kg and standard deviations at or above the mean, with no reported reference material or recovery check; held pending source verification.' },
  { match: id => /^wise2025.*:(Cd|tHg|Al):all-us-honeys:mean$/.test(id), reason: 'The printed mean contradicts the paper’s own figures and intake table (about ten-fold for cadmium); the printed value is not used for comparison.' },
  { match: id => /^wise2025.*:Cd:(tennessee|massachusetts|vermont):sample_value$/.test(id), reason: 'Printed cadmium values duplicate the lead values and contradict the paper’s figure; not used.' },
  { match: id => /^wise2025.*:tHg:/.test(id), reason: 'Mercury measured only by X-ray fluorescence, up to 8.94 mg/kg, about a thousand times typical honey results and never confirmed by a second method.' },
  { match: id => /^naccari2025.*:(Pb:wildflower|Ni:honeydew|Ni:erika|Cr:citrus):median$/.test(id), reason: 'Printed median is internally inconsistent with the reported mean and SD; the median is not used.' },
  { match: id => id.startsWith('aburas2023') && /honey-solution|sugar/i.test(id), reason: 'Bee-processed sugar syrup is not honey under the Codex definition; retained for traceability only.' },
  { match: id => id.startsWith('wilczynska2026-poland-organic-honey-metals:'), reason: 'Small preliminary study of 15 honeys with no detection limit, reference material or recovery stated; shown as printed and not used to rate honey. Its Table 4 and Table 6 arsenic maxima conflict (287.72 µg/kg vs 0.387 mg/kg).' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
function sourceMeta(root, id) {
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  const label = id === GEMS ? 'WHO GEMS/Food' : id === FDA ? 'FDA TDS FY2018–FY2020' : id.startsWith('fsanz') ? `FSANZ ${id.includes('2011') ? '23rd' : '25th'} ATDS`
    : `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? ''}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}

// Filter labels must stay short on phones; the drawer keeps the full source wording.
export function shortLabel(text, max = 34) {
  let t = String(text).replace(/\s*\([^)]*[\u0600-\u06ff][^)]*\)/g, '').trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text).matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return /spring|summer|winter|april|season/i.test(text) ? 'Year not reported' : 'Collection date unreported';
}

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
const statOrder = ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'max', 'min'];

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
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : `median <${fmt(b)} µg/kg (below reporting limits)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}${s.reported?.unit && !String(s.reported?.text ?? '').includes(s.reported.unit) ? ` (${s.reported.unit})` : ''}`;
}

const regionType = k => k === 'growing_origin' ? 'Reported production area' : k === 'purchase_market' ? 'Purchase or reporting market; production origin not identified' : k === 'floral_type' ? 'Floral or honey type within one study' : k === 'site_or_habitat' ? 'Apiary site or habitat within one study' : 'All samples in the study';

// One row per extracted result (owner fullness gate 4): every statistic a source
// reports for a subgroup is its own row, never folded into another row.
export function honeyRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      const hold = holdFor(fd.id);
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(x.study.collection_period || '');
      const mgL = /mg\/l/i.test(fd.reported?.unit || '');
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: fd.material, region: shortLabel(fd.group), group_full: fd.group, group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: fd.n ?? null, sampling_unit: x.study.sampling_unit || 'honey samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: mgL ? 'mg/L' : 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: mgL ? 'Honey as reported, mg/L' : 'Honey as sold or collected', display_basis: x.study.basis || 'Honey as sold or collected', short_basis: mgL ? 'mg/L as reported' : 'Honey as sold',
        method: x.study.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  // Lead decides most honey questions; monitoring datasets lead each metal group.
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'tHg', 'Ni', 'Cr', 'Al', 'Sn', 'U'];
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : r.source.startsWith('fsanz') ? 2 : 3;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  // The shared explorer renders row IDs from analyte and position; the ledger uses the same IDs.
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-honey-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
const ANALYTES = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'tHg', 'Ni', 'Cr', 'Al', 'Sn', 'U'];
const scopeFor = analyte => ({ ingredient: 'honey', analyte, basis: 'Honey as sold or collected, µg/kg; no moisture conversion', statistic: 'subgroup median concentration', market: 'International honey evidence library', period: 'Source collection periods 1998–2023' });

function medianOf(records, analyte) {
  const scope = { ingredient: 'honey', analyte, basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

export function referenceUnits(root, rows) {
  const units = Object.fromEntries(ANALYTES.map(a => [a, []])), audit = [];
  const add = (a, u) => { units[a].push({ ...scopeFor(a), ...u }); };
  // GEMS/Food: HMI-calculated medians per WHO region × collection year, random sampling only.
  const recs = load(root, 'primary/gemsfood-honey-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling') continue;
    const k = `${r.analyte}|${r.region}|${r.year}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, region, year] = k.split('|');
    if (!units[a]) continue;
    const m = medianOf(rs, a);
    add(a, { id: `gems-${region}-${year}`, family: GEMS, group: `${region} ${year}`, lower: m.lower, upper: m.upper, n: rs.length,
      locator: `primary/gemsfood-honey-records.csv: ${a}, ${region}, ${year}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  // FDA TDS: one subgroup median from the three national composites.
  const fda = load(root, `extraction/${FDA}.json`).sample_values;
  for (const a of ANALYTES) {
    const s = fda.filter(x => x.analyte === a);
    if (!s.length) continue;
    const m = medianOf(s.map(x => ({ lower: x.lower_ug_kg, upper: x.upper_ug_kg })), a);
    add(a, { id: 'fda-us-national', family: FDA, group: 'US national composites FY2018–FY2020', lower: m.lower, upper: m.upper, n: s.length, locator: s.map(x => x.locator).join('; '), evidence_kind: 'HMI-calculated subgroup median' });
  }
  // Studies printing per-sample values: each sample is its own subgroup (one supplier, site or type).
  // Wise 2025 prints only the three highest values per metal, so its samples are a biased selection and do not enter.
  for (const sid of ['bektashi2021-honey-metals-sugars-balkans', 'shukla2020-honey-prayagraj-metals', 'aburas2023-libyan-honey-lead-cadmium']) {
    const x = load(root, `extraction/${sid}.json`);
    for (const s of x.sample_values || []) {
      const a = s.analyte;
      if (!units[a] || holdFor(`${sid}:${a}:${s.group}`) || /solution|sugar/i.test(s.group || s.sample)) { audit.push({ unit: `${sid}:${s.sample}:${a}`, admitted: false, reason: 'held or not honey' }); continue; }
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper)) { audit.push({ unit: `${sid}:${s.sample}:${a}`, admitted: false, reason: 'non-detect without a numerical limit' }); continue; }
      add(a, { id: `${sid}-${s.sample}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: sid, group: s.group || s.sample, lower, upper, n: 1, locator: s.locator, evidence_kind: 'reported sample value' });
    }
  }
  // Published subgroup medians.
  for (const r of rows) {
    if (r.hold || r.source === GEMS || r.statistic !== 'median' || !Number.isFinite(r.value) || /all/i.test(r.group_kind)) continue;
    add(r.analyte, { id: r.finding_id.replace(/[^a-z0-9-]+/gi, '-'), family: r.source, group: r.group_full, lower: r.value, upper: r.value, n: r.n ?? 1, locator: r.locator, evidence_kind: 'reported subgroup median', result_finding: r.finding_id });
  }
  // Each unit is attached to a result of its own family and scope (gate 6 ownership).
  for (const [a, list] of Object.entries(units)) for (const u of list) {
    const same = rows.filter(r => r.source === u.family && r.analyte === a && r.unit === 'µg/kg');
    const hit = u.result_finding ? same.find(r => r.finding_id === u.result_finding)
      : u.family === GEMS ? same.find(r => r.group_full.includes(`region ${u.group.split(' ')[0]};`) && /random/i.test(r.group_full))
      : same.find(r => r.group_full === u.group && ['sample_value', 'below_LOD', 'not_detected'].includes(r.statistic)) ?? same.find(r => r.group_full === u.group);
    u.result_id = (hit ?? same[0])?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${u.id}`);
  }
  return { units, audit };
}

// Terminal reason codes (owner fullness rules, comparator rule 5, with the owner's
// 22 Oct amendment value_fails_source_integrity_check).
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
  if (!t || r.region_type === 'All samples in the study') return { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s total using the same statistic.' };
  let ref = null;
  if (r.source.startsWith('tomczyk2020')) {
    const other = /urban/i.test(r.region) ? /ecolog|pure|rural/i : /urban/i;
    ref = rows.find(x => x.source === r.source && x.analyte === r.analyte && x.food === r.food && other.test(x.region) && x.statistic === r.statistic);
  }
  ref ??= rows.find(x => x.source === r.source && x.analyte === r.analyte && x.region_type === 'All samples in the study' && x.statistic === r.statistic && !x.hold);
  const rt = ref && rowTarget(ref);
  if (!rt || !t.exact || !rt.exact) return { direction: t.exact ? 'summary' : 'bounded', label: t.exact ? 'No same-study reference' : 'Limits overlap', detail: 'No compatible same-study summary with the same statistic.', context: 'No cross-study pooling is used in this mode.' };
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic and analytical method. Subgroups share samples with the study total. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function honeyOccurrence(root) {
  const { rows, parity } = honeyRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = ANALYTES.filter(a => units[a].length).map(a => ({
    key: `honey-pooled-${a}`, scope: scopeFor(a), referenceUnits: units[a], accepts: r => r.analyte === a && r.unit === 'µg/kg' && !r.hold && !!rowTarget(r),
    label: `HMI honey ${a} reference · ${new Set(units[a].map(u => u.family)).size} sampling families`,
    targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
    sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
    methods: `HMI pools subgroup medians from every compatible honey sampling family in the evidence ledger: WHO GEMS/Food region-by-year medians (random sampling only), the FDA Total Diet Study composites, per-sample results printed by individual surveys, and published subgroup medians. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations.`,
    limitations: 'An international evidence-library reference, not a probability sample of the world honey market. GEMS/Food regions are reporting regions, not production origins. Many submissions are non-detects with differing limits, which widens the bounds. A position is descriptive concentration, not a safety or compliance judgment.',
  }));
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : /mg\/l/i.test(r.reported?.unit || '') ? 'Reported in mg/L of honey without a density; it cannot be converted to µg/kg without an assumption.'
    : rowTarget(r) ? 'No compatible reference units for this analyte.'
    : ['range', 'max', 'min'].includes(r.statistic) ? 'The source reports only a range or extreme value; no single statistic can be positioned.'
    : 'The source reports a non-detect without a numerical limit; its position cannot be identified.');
  compiled.record.frozen = '2026-10-22';
  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = '2026-10-22';
    // A mg/L row is never positioned against a µg/kg reference; state its own unit explicitly.
    if (r.unit !== 'µg/kg') for (const c of Object.values(v.comparisons)) if (c) c.unit = r.unit;
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
  const unit_list = Object.entries(units).flatMap(([a, list]) => list.map(u => ({ id: u.id, analyte: a, ref_key: `honey-pooled-${a}`, result_id: u.result_id })));
  return { ...compiled, parity, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([a, u]) => [a, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}

export const honeyOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI honey reference (pooled)' }, { value: 'contrast', label: 'Same-study subgroup contrast' }],
  caption: 'Honey findings from every extracted survey, total diet study and monitoring dataset, in µg/kg with each source’s statistic, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one subgroup and metal; a mean, median and range from the same samples are separate rows. Ratings place a reported mean, median or sample result against a pooled HMI reference built from every compatible honey sampling family. Same-study contrasts compare a subgroup with its own study total. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Honey type exactly as the source names it.', 'Collection scope': 'Production area, apiary site, floral type or purchase market as reported; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled honey reference. Higher or Lower compare a subgroup with its own study total.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
