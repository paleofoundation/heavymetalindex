// Scientific adapter only. Shared Rice components own all markup and interaction.
// Rice keeps every reviewed pilot row (FDA TDS sample registers, reviewed source
// summaries) and its reviewed pooled references, then adds one row per newly
// extracted result from the complete ledger: every literature subgroup statistic
// and HMI-calculated WHO GEMS/Food region summaries. References are the pilot
// definitions extended with every compatible unit from every ledger family.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { occurrenceRows } from '../../pilot/observations.mjs';
import { ricePooledDefinitions } from '../../pilot/rice-pooled-baselines.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/rice';
export const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
// Families whose sample-level data the pilot already recovered (baseline-primary-data.json).
export const BASELINE_FAMILIES = ['fda2013-ias-rice-products-sampling', 'tran2024-arsenic-cadmium-vietnamese-rice-qtl', 'myatsoe2023-myanmar-rice-metals',
  'alrashdi2024-rice-ias-cd-pb-hg-saudi-arabia', 'carey2020-global-low-ias-rice-sourcing', 'shi2020-rice-grain-cadmium-global-supply-chain'];
const FROZEN = '2026-10-22';
// Source records that republish another family's samples. Their findings are not
// re-tabulated; the ledger routes them to the family that holds the results.
export const DUPLICATE_SOURCES = { 'fda-tds-elements-2018-2020': FDA, 'spungen2024-fda-tds-infant-lead-cadmium': FDA, 'shi2020-rice-based-infant-food-cadmium-arsenic': 'shi2020-rice-grain-cadmium-global-supply-chain' };
const fmt = v => Number(Number(v).toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });
const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

// Analytes tabulated on the Rice page (HMI analyte list). Other species and
// elements in a source are recorded in its ledger rationale, not as rows.
export const ANALYTE_ORDER = ['tAs', 'Cd', 'Cr', 'Pb', 'tHg', 'Ni', 'iAs', 'U', 'DMA', 'MeHg', 'Al', 'Sn', 'Sb', 'Cr-VI'];
const ALIAS = { CrVI: 'Cr-VI', 'Cr(VI)': 'Cr-VI', THg: 'tHg', TAs: 'tAs', InAs: 'iAs' };
export const normAnalyte = a => { const x = ALIAS[a] ?? a; return ANALYTE_ORDER.includes(x) ? x : null; };

// ---------------------------------------------------------------- scope classes
export const BASIS = {
  dry: 'Dry-weight grain, µg/kg dry weight',
  native: 'Uncooked grain as analysed (native or unstated moisture), µg/kg',
  cooked: 'Cooked rice as prepared, µg/kg as eaten',
};
export const MATERIAL = { grain: 'rice grain', paddy: 'paddy rice (grain with hull)', mixed: 'mixed rice grain and rice products' };
export function basisClassOf(text) {
  const t = String(text || '').toLowerCase();
  if (/cooked|as eaten|as consumed|boiled|steamed|prepared-food|prepared food/.test(t) && !/uncooked|raw/.test(t.split(';')[0])) return 'cooked';
  if (/dry weight of cooked/.test(t)) return 'cooked';
  if (/^(?!.*(unspecified|not stated|not reported)).*(dry[ -](weight|mass|basis|matter)|\bdw\b|freeze-dried|lyophili|oven-dried|dried to constant|dry grain|dry-weight)/.test(t)) return 'dry';
  if (/^dry weight/.test(t)) return 'dry';
  return 'native';
}
export function materialClassOf(text) {
  const t = String(text || '').toLowerCase();
  if (/mixed|products/.test(t) && /product/.test(t)) return 'mixed';
  if (/\bpaddy\b|rough rice|unhulled|with hull|with husk/.test(t) && !/dehusk|dehull|polish|milled|brown|white|husked rice|cargo/.test(t)) return 'paddy';
  return 'grain';
}
export const scopeKeyOf = (analyte, material, basis, unit = 'µg/kg') => JSON.stringify([analyte, material, basis, unit]);
const SHORT = { dry: 'Dry-weight basis', native: 'Uncooked grain as analysed', cooked: 'Cooked basis' };

// ---------------------------------------------------------------- integrity holds
// INTEGRITY notes from extraction describe conflicts with the paper's own method,
// tables or figures. Value conflicts hold the value from comparison; conflicts that
// only concern counts, rounding of other rows or narrative claims do not.
// Conflicts about narrative claims (limit comparisons, conclusions, counts, risk
// arithmetic) leave the value usable; value conflicts hold it. A median or sample
// printed below the paper's own detection limit is bounded by that limit instead.
const VALUE_CONFLICT = /unit|×\s?1000|x1000|1000-fold|100-fold|thousand|implausib|impossible|cannot be reproduced|can't be reproduced|not reproduc|exceeds? (its |the )?(parent |total|tas)|iAs .{0,30}exceeds|no (chromatographic )?speciation|not speciated|without speciation|acid-extractable|half-lod|lod\/2|1\/2 ?lod|substitut|misaligned|garbled|swapped|below (its|the) (printed |reported )?(range )?minim|outside its printed range|above (its|the) (printed )?max|columns|mislabel|wrong (unit|basis)|basis is unresolved|unresolvable/i;
const BELOW_LIMIT = /(below|under|at or below) (the )?(stated |reported |method |its )?(cd |pb |as |hg )?(lod|loq|mdl|detection limit|quantification limit|limit of (detection|quantification))/i;
export function integrityOf(fd) {
  const n = String(fd.notes || '');
  const i = n.indexOf('INTEGRITY:');
  if (i < 0) return { hold: null, bounded: null };
  const text = n.slice(i + 10).replace(/\s+/g, ' ').trim();
  const limit = Math.max(...[fd.lod_ug_kg].filter(Number.isFinite), -1);
  if (BELOW_LIMIT.test(text) && ['median', 'sample_value'].includes(fd.statistic) && limit > 0 && Number.isFinite(fd.value_ug_kg) && fd.value_ug_kg <= limit)
    return { hold: null, bounded: { lower: 0, upper: limit, exact: false, statistic: fd.statistic }, note: `Printed value lies at or below the paper's own detection limit (${limit} µg/kg); it is treated as bounded between zero and that limit.` };
  if (BELOW_LIMIT.test(text) && !VALUE_CONFLICT.test(text) && !['mean', 'median', 'sample_value', 'geometric_mean'].includes(fd.statistic))
    return { hold: null, bounded: null, note: `This extreme or range value lies at or below the paper's own detection limit and is read as a reporting bound.` };
  return VALUE_CONFLICT.test(text) || BELOW_LIMIT.test(text) ? { hold: `Held: ${text.replace(/INTEGRITY:\s*/g, '').slice(0, 420)}` } : { hold: null, bounded: null, note: `Source inconsistency noted (does not affect this value): ${text.replace(/INTEGRITY:\s*/g, '').slice(0, 300)}` };
}
export const holdFor = fd => integrityOf(fd).hold;
// Reviewed pilot holds retained from occurrence-findings.json and the pilot exclusions.
const PILOT_HOLDS = [
  { match: r => r.source.startsWith('alrashdi2024') && r.analyte === 'tHg', reason: 'Held: Table 5 mercury values include zeros and low measurements with analytical dispersion of about 3 µg/kg, but no numerical reporting limit; the mean cannot be positioned without a bound.' },
];

// ---------------------------------------------------------------- source labels
const metaCache = new Map();
export function sourceMeta(root, id) {
  if (metaCache.has(id)) return metaCache.get(id);
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = fs.existsSync(p) ? matter(fs.readFileSync(p, 'utf8')).data : {};
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  let surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  if (/^(authors?|unknown|editor|resources|university|july)$/i.test(surname) || !surname) surname = id.replace(/\d{4}.*/, '');
  const year = fm.year ?? (id.match(/(19|20)\d{2}/) || [''])[0];
  const label = id === GEMS ? 'WHO GEMS/Food' : id === FDA ? 'FDA Total Diet Study, FY2018–FY2020'
    : `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${year}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${String(fm.doi).replace(/^(10\.\d+\/)\1/, '$1')}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  const out = { label, url };
  metaCache.set(id, out);
  return out;
}
export function shortLabel(text, max = 34) {
  let t = String(text).replace(/^WHO region /, 'WHO ').replace(/;\s*random sampling$/i, '').trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() || t.slice(0, max) : t;
}
function periodOf(fd, study) {
  const y = (fd.years || []).filter(Number.isFinite);
  if (y.length) { const a = Math.min(...y), b = Math.max(...y); return a === b ? String(a) : `${a}–${b}`; }
  const years = [...String(study?.collection_period || '').matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}
const regionType = k => ({ growing_origin: 'Reported growing area', purchase_market: 'Purchase or reporting market; growing origin not identified',
  variety_or_type: 'Rice variety or type within one study', site_or_habitat: 'Sampling site within one study', year: 'Collection year within one study', all_samples: 'All samples in the study' })[k] ?? 'Subgroup within one study';

// ---------------------------------------------------------------- statistics
export const STAT_LABEL = { mean: 'Mean', median: 'Median', geometric_mean: 'Geometric mean', range: 'Range', min: 'Minimum', max: 'Maximum',
  sample_value: 'Individual sample', below_LOD: 'Below detection limit', not_detected: 'Not detected', exceedance_rate: 'Share of samples above a limit',
  rank_order: 'Rank order' };
export const statLabel = s => STAT_LABEL[s] ?? (/^(?:p\d{1,2}|\d{1,2}th percentile)$/.test(s) ? `${s.match(/\d+/)[0]}th percentile` : String(s).replace(/_/g, ' '));
// Source-reported percentiles keep a spelled-out statistic name on public surfaces.
const publicStatistic = s => /^p\d{1,2}$/i.test(s) ? `${s.slice(1)}th percentile` : s;
const publicText = s => String(s ?? '').replace(/\bP(\d{1,2})s?\b/g, (_, n) => `${n}th percentile`).replace(/\bp(\d{1,2})\b/g, (_, n) => `${n}th percentile`);

export function rowTarget(r) {
  if (r.hold || r.unit !== 'µg/kg') return null;
  if (r.target_override) return r.target_override;
  const s = r.primary;
  if (!s) return null;
  const v = s.value_ug_kg;
  const substituted = /lod\s*\/\s*2|half[- ]?(the )?(lod|detection|limit)|½\s*lod|substitut/i.test(`${s.censoring} ${s.notes}`);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(v) && substituted && Number.isFinite(s.lod_ug_kg) && v <= s.lod_ug_kg) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'median' };
  if (['mean', 'median', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(v)) return { lower: v, upper: v, exact: true, statistic: s.statistic };
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(s.lod_ug_kg)) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}

function findingText(s, unit) {
  const u = unit === 'µg/kg' ? 'µg/kg' : unit;
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (unit !== 'µg/kg') return publicText(`${s.reported?.text ?? 'Reported in original units'}${s.reported?.unit && !String(s.reported?.text ?? '').includes(s.reported.unit) ? ` (${s.reported.unit})` : ''}`);
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (censoring bounds)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : publicText(s.reported?.text ?? 'Range reported');
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${statLabel(s.statistic).toLowerCase()}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return publicText(`${s.reported?.text ?? 'Reported in original units'}${s.reported?.unit ? ` (${s.reported.unit})` : ''}`);
}
const displayFood = m => { const t = String(m || 'Rice grain').replace(/\s+/g, ' ').trim(); return t[0].toUpperCase() + t.slice(1); };

// ---------------------------------------------------------------- extraction loading
export function loadExtractions(root) {
  const dir = path.join(root, auditDir, 'extraction');
  return Object.fromEntries(fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort().map(f => { const x = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); return [x.source_id, x]; }));
}

// One row per newly extracted result. Findings that restate a reviewed pilot row
// (existing_match) are represented by that pilot row and are not duplicated.
export function newRows(root, extractions) {
  const rows = [], dropped = [], seen = new Set();
  for (const [sid, x] of Object.entries(extractions)) {
    if (x.disposition !== 'occurrence_extracted' || DUPLICATE_SOURCES[sid]) continue;
    const meta = sourceMeta(root, sid);
    for (const fd of x.findings || []) {
      if (fd.existing_match) continue;
      const analyte = normAnalyte(fd.analyte);
      if (!analyte) { dropped.push({ finding: fd.id, source: sid, analyte: fd.analyte, reason: 'Species or element outside the tabulated HMI rice analytes' }); continue; }
      let id = fd.id || `${sid}:${analyte}:${slug(fd.group)}:${fd.statistic}`;
      while (seen.has(id)) id += '-b';
      seen.add(id);
      const gems = sid === GEMS;
      const hasMass = gems || [fd.value_ug_kg, fd.min_ug_kg, fd.max_ug_kg, fd.lod_ug_kg].some(Number.isFinite) || (['below_LOD', 'not_detected'].includes(fd.statistic));
      const unit = fd.statistic === 'exceedance_rate' ? '% of samples' : fd.statistic === 'rank_order' ? 'rank' : hasMass ? 'µg/kg' : (fd.reported?.unit || 'as reported');
      const bclass = gems ? fd.basis_class : basisClassOf(fd.basis && !/^unspecified$/i.test(fd.basis) ? fd.basis : x.study?.basis);
      const mclass = gems ? 'grain' : materialClassOf(`${fd.material} ${x.study?.material_scope ?? ''}`.slice(0, 200).includes('product') ? `${fd.material}` : fd.material);
      const integ = integrityOf(fd), hold = integ.hold;
      const basisText = gems ? fd.basis : (fd.basis || x.study?.basis || 'Basis not stated');
      rows.push({
        id, scope_key: id, finding_id: id, source: sid, source_label: meta.label, primary_url: meta.url, isNew: true,
        analyte, food: displayFood(fd.material), region: shortLabel(fd.group), group_full: fd.group, group_kind: fd.group_kind, period: periodOf(fd, x.study),
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: gems ? 'GEMS/Food submissions' : (x.study?.sampling_unit || 'rice samples'),
        record_type: 'source_summary', statistic: publicStatistic(fd.statistic), statistic_label: statLabel(fd.statistic), finding_text: findingText(fd, unit),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit, reported: { ...(fd.reported || {}) }, original_result: publicText(fd.reported?.text ?? ''),
        basis: publicText(basisText), display_basis: publicText(basisText), short_basis: mclass === 'paddy' ? 'Paddy (with hull)' : SHORT[bclass],
        basis_class: bclass, material_class: mclass, method: publicText(x.study?.method || 'Not reported'), locator: publicText(fd.locator), censoring: publicText(fd.censoring || 'As reported by the source'),
        limitations: publicText([hold, integ.note, gems ? fd.notes : null].filter(Boolean).join(' ')), target_override: integ.bounded ?? undefined,
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: publicText(fd.conversion || 'none') }, hold, primary: JSON.parse(publicText(JSON.stringify(fd))), lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  // FDA 2013 printed only category iAs means; its full analytical table (recovered
  // by the pilot) also holds every sample's total arsenic and DMA. Each category's
  // HMI-calculated median is a reportable result of that table.
  const fdaId = 'fda2013-ias-rice-products-sampling';
  if (extractions[fdaId]?.disposition === 'occurrence_extracted') {
    const data = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/contracts/pilot-2026-10-17/rice-depth/baseline-primary-data.json'), 'utf8'));
    const meta = sourceMeta(root, fdaId);
    for (const analyte of ['tAs', 'DMA']) {
      const groups = Map.groupBy(data.records.filter(r => r.source === fdaId && r.analyte === analyte), r => r.group);
      for (const [group, list] of groups) {
        const m = medianOf(list.map(r => ({ lower: r.lower, upper: r.upper })));
        const id = `${fdaId}:${analyte}:${slug(group)}:median-hmi`;
        const fd = { id, analyte, material: group, group, group_kind: 'variety_or_type', n: list.length, statistic: 'median', median_bounds_ug_kg: [m.lower, m.upper],
          reported: { unit: 'ppb dry wt', text: `${list.length} samples in the FDA full analytical results table` }, basis: 'dry weight', censoring: 'Non-detects and FDA proxy values are kept as zero-to-limit or bounded intervals', locator: `Full Analytical Results – Rice, category ${group} (${list[0].locator.split(',')[1]?.trim() ?? 'samples'} … )` };
        rows.push({ id, scope_key: id, finding_id: id, source: fdaId, source_label: meta.label, primary_url: meta.url, isNew: true, analyte, food: group, region: group, group_full: group, group_kind: 'variety_or_type',
          period: 'Collection date unreported', region_type: regionType('variety_or_type'), n: list.length, sampling_unit: 'rice samples', record_type: 'source_summary', statistic: 'median', statistic_label: 'Median (HMI-calculated from sample table)',
          finding_text: findingText(fd, 'µg/kg'), value: m.exact ? m.lower : null, unit: 'µg/kg', reported: fd.reported, original_result: fd.reported.text, basis: 'Dry weight (FDA full analytical results)', display_basis: 'Dry weight (FDA full analytical results)',
          short_basis: SHORT.dry, basis_class: 'dry', material_class: 'grain', method: 'FDA HPLC-ICP-MS speciation and total arsenic', locator: fd.locator, censoring: fd.censoring, limitations: '', overlap: 'Category rows share samples with the category iAs means.',
          conversion: { method: 'ppb = µg/kg dry weight' }, hold: null, primary: fd, lod_ug_kg: null });
      }
    }
  }
  return { rows, dropped };
}

// ---------------------------------------------------------------- pilot rows
// The reviewed pilot rows, compiled by the shared pilot path, keep their own
// statistics, comparisons and targets; only references are re-applied.
const PILOT_SHORT = [[/45 g dry|freeze-dried|^dry grain/i, 'Dry-weight basis'], [/fresh weight/i, 'Fresh weight, as reported'], [/air-dried/i, 'Air-dried grain'],
  [/moisture basis not resolved/i, 'Moisture basis not resolved'], [/washed, dried/i, 'Washed, dried grain'], [/ground uncooked/i, 'Ground uncooked grain'],
  [/moisture basis unspecified/i, 'Moisture basis not stated'], [/<13% moisture/i, 'Dried to <13% moisture'], [/cooked/i, 'Cooked basis']];
export function pilotRows(root) {
  return occurrenceRows('rice', root).map(r => {
    const basisText = r.record_type === 'source_summary' ? r.basis : r.display_basis;
    const short = PILOT_SHORT.find(([re]) => re.test(basisText))?.[1] ?? 'Basis as reported';
    const hold = PILOT_HOLDS.find(h => h.match(r))?.reason ?? null;
    return { ...r, pilot: true, finding_id: r.scope_key, short_basis: short, hold, unit: r.unit || 'µg/kg',
      material_class: /product/i.test(r.food) ? 'mixed' : 'grain', group_full: r.food, group_kind: 'variety_or_type' };
  });
}

// ---------------------------------------------------------------- references
function medianOf(records) {
  const scope = { ingredient: 'rice', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}
const cookedScopeText = { statistic: 'sample or subgroup median concentration', market: 'United States FDA collection markets and WHO GEMS/Food reporting regions', period: 'FY2018–FY2020 (FDA) and per-record GEMS/Food years' };

// Pilot cooked-rice definition, reproduced from the pilot so it can be extended
// with other cooked-rice families; the FDA composite units are unchanged.
function pilotCookedUnits(rows) {
  const out = {};
  for (const r of rows.filter(r => r.source === FDA && r.profile.samples)) {
    (out[r.analyte] ??= []).push(...r.profile.samples.map(s => ({ id: `${r.food_number}:${s.id}`, family: FDA, group: r.food_number, lower: s.lower, upper: s.upper,
      locator: `TDS sample CSV row ${s.source_row}`, food: r.food, fiscal_year: s.year, region: s.region, season: s.season, owner: r.scope_key })));
  }
  return out;
}

export function referenceUnits(root, rows) {
  const units = new Map(); // scope key -> unit list
  const audit = [];
  const add = (key, u) => { if (!units.has(key)) units.set(key, []); units.get(key).push(u); };
  // 1. GEMS/Food: HMI-calculated medians per WHO region × year × basis, random sampling only.
  const recs = JSON.parse(fs.readFileSync(path.join(root, auditDir, 'primary/gemsfood-rice-reference-input.json'), 'utf8'));
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling') continue;
    const k = `${r.analyte}|${r.basis_class}|${r.region}|${r.year}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg, item_id: r.item_id });
  }
  for (const [k, rs] of g) {
    const [a, b, region, year] = k.split('|');
    if (!normAnalyte(a)) continue;
    const m = medianOf(rs);
    add(scopeKeyOf(a, MATERIAL.grain, BASIS[b]), { id: `gems-${slug(region)}-${year}-${b}`, family: GEMS, group: `${region} ${year}`, region, lower: m.lower, upper: m.upper, n: rs.length, member_item: rs[0].item_id,
      locator: `primary/gemsfood-rice-records.csv: ${a}, ${region}, ${year}, ${BASIS[b]}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  // 2. Literature families outside the pilot's recovered set: printed per-sample
  // values grouped by the source's subgroup, then published subgroup medians.
  const ex = loadExtractions(root);
  for (const [sid, x] of Object.entries(ex)) {
    if (x.disposition !== 'occurrence_extracted' || sid === GEMS || BASELINE_FAMILIES.includes(sid) || DUPLICATE_SOURCES[sid]) continue;
    const byScope = new Map();
    for (const s of x.sample_values || []) {
      const a = normAnalyte(s.analyte);
      if (!a) continue;
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper) || lower > upper) { audit.push({ unit: `${sid}:${s.sample}:${a}`, admitted: false, reason: 'non-detect without a numerical limit or non-numeric value' }); continue; }
      const held = rows.some(r => r.source === sid && r.analyte === a && r.hold && (r.group_full === s.group || r.group_kind === 'all_samples'));
      if (held) { audit.push({ unit: `${sid}:${s.sample}:${a}`, admitted: false, reason: 'subgroup or study result held for a source-integrity conflict' }); continue; }
      const key = scopeKeyOf(a, MATERIAL[materialClassOf(s.material)], BASIS[basisClassOf(s.basis || x.study?.basis)]);
      if (!byScope.has(key)) byScope.set(key, new Map());
      const grp = String(s.group || s.sample || 'all');
      if (!byScope.get(key).has(grp)) byScope.get(key).set(grp, []);
      byScope.get(key).get(grp).push({ lower, upper, locator: s.locator, sample: s.sample });
    }
    for (const [key, groups] of byScope) for (const [grp, list] of groups) {
      const m = medianOf(list);
      add(key, { id: `${slug(sid)}-${slug(grp)}`.slice(0, 120), family: sid, group: grp, lower: m.lower, upper: m.upper, n: list.length,
        locator: list.length === 1 ? list[0].locator : `Median of ${list.length} printed values; ${list[0].locator} through ${list.at(-1).locator}`,
        evidence_kind: list.length === 1 ? 'reported sample value' : 'HMI-calculated subgroup median' });
    }
    // Published subgroup medians, only where the family printed no per-sample values in that scope.
    const fam = rows.filter(r => r.source === sid && r.isNew && r.statistic === 'median' && r.unit === 'µg/kg' && !r.hold);
    for (const r of fam) {
      const key = scopeKeyOf(r.analyte, MATERIAL[r.material_class], BASIS[r.basis_class]);
      if (byScope.has(key)) continue;
      const t = rowTarget(r);
      if (!t) continue;
      const subgroups = fam.filter(x => x.analyte === r.analyte && x.basis_class === r.basis_class && x.material_class === r.material_class && x.group_kind !== 'all_samples');
      if (r.group_kind === 'all_samples' && subgroups.length) continue; // the total restates its subgroups
      add(key, { id: `${slug(r.finding_id)}`.slice(0, 140), family: sid, group: r.group_full, lower: t.lower, upper: t.upper, n: r.n ?? 1, locator: r.locator,
        evidence_kind: 'reported subgroup median', result_finding: r.finding_id });
    }
  }
  return { units, audit };
}

// ---------------------------------------------------------------- comparisons
const FORM = f => /brown|husked|cargo|unpolished|wholegrain|whole grain|integral/i.test(f) ? 'brown' : /white|polished|milled/i.test(f) ? 'white' : null;
function contrast(r, rows) {
  const t = rowTarget(r);
  const none = (direction = t?.exact === false ? 'bounded' : 'summary') => ({ kind: 'food_form', direction, label: direction === 'bounded' ? 'Limits overlap' : 'No same-study comparison',
    detail: 'No compatible same-study subgroup with the same statistic, basis and analyte.', context: 'Within-study comparisons use the same source, analyte, statistic and analytical method.' });
  if (!t) return none('summary');
  const peers = rows.filter(x => x !== r && x.source === r.source && x.analyte === r.analyte && x.statistic === r.statistic && x.unit === r.unit && x.basis_class === r.basis_class && !x.hold && rowTarget(x));
  let ref = null, why = '';
  const f = FORM(r.food);
  if (f) { ref = peers.find(x => FORM(x.food) === (f === 'brown' ? 'white' : 'brown') && x.group_full === r.group_full) ?? peers.find(x => FORM(x.food) === (f === 'brown' ? 'white' : 'brown') && x.group_kind === r.group_kind && peers.filter(y => FORM(y.food) !== f).length === 1); why = f === 'brown' ? 'white rice' : 'brown rice'; }
  if (!ref && r.group_kind !== 'all_samples') { ref = peers.find(x => x.group_kind === 'all_samples' && x.food === r.food) ?? peers.find(x => x.group_kind === 'all_samples'); why = 'the study total'; }
  if (!ref) return none();
  const rt = rowTarget(ref);
  if (!t.exact || !rt.exact) {
    const separated = t.upper < rt.lower || rt.upper < t.lower;
    if (!separated) return { ...none('bounded'), target: t, reference: rt, reference_form: ref.region, detail: `${r.region}: ${r.finding_text}; ${why} (${ref.region}): ${ref.finding_text}. Reporting limits overlap, so the direction is unresolved.` };
  }
  const direction = t.upper < rt.lower ? 'lower' : t.lower > rt.upper ? 'higher' : t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: why === 'the study total' ? 'study total' : why, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; ${why} (${ref.region}): ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic, basis and analytical method. Subgroups can share samples with the study total. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}
// Pilot form/category comparisons are retained; a category-band position becomes
// a direct same-survey contrast so it is never mistaken for an HMI rating.
function pilotContrast(r) {
  const c = r.profile.variants['::'].comparisons.forms;
  if (!c) return null;
  const { reference_middle50, rating_reference, position, ...rest } = c;
  return rest;
}

export function stateOf(r) {
  const c = r.profile.variants['::'].comparisons;
  return c.hmi.baseline.level ? 'rated' : ['higher', 'lower', 'same'].includes(c.contrast?.direction) && c.contrast.target && c.contrast.reference ? 'direct'
    : c.contrast?.direction === 'bounded' || c.bounded_hmi ? 'bounded' : 'unavailable';
}
export function reasonCode(r, target) {
  const c = r.profile.variants['::'].comparisons;
  if (stateOf(r) !== 'unavailable') return null;
  if (r.hold) return 'value_fails_source_integrity_check';
  if (r.unit !== 'µg/kg') return 'basis_incompatible_with_all_references';
  if (!target) return 'no_numeric_value_or_bound';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- assembly
export function riceOccurrence(root) {
  const pilot = pilotRows(root);
  const ex = loadExtractions(root);
  const { rows: added, dropped } = newRows(root, ex);
  let rows = [...pilot, ...added];

  // Scope of every row: the pilot reference that accepts it, else its own basis class.
  const pooled = ricePooledDefinitions(pilot, root);
  for (const r of rows) {
    if (r.pilot) {
      const d = r.source === FDA ? null : pooled.find(d => d.accepts(r));
      r.basis_class = r.source === FDA ? 'cooked' : d ? (d.key.includes('-dry-') ? 'dry' : 'native') : basisClassOf(r.basis);
      r.pilot_def = d?.key ?? null;
      // Reviewed pilot target rules (Hao moisture bound, Yan half-LOD medians, Myanmar moisture conversion).
      if (d && !r.hold) r.target_override = d.target(r);
      else if (r.source.startsWith('yan2025') && r.statistic === 'median') r.target_override = { lower: 0, upper: r.value * 2, exact: false, statistic: 'median' };
      else if (r.record_type === 'source_summary' && ['mean', 'median'].includes(r.statistic) && Number.isFinite(r.value)) r.target_override = { lower: r.value, upper: r.value, exact: true, statistic: r.statistic };
    }
    r.scope = { analyte: r.analyte, material: MATERIAL[r.material_class], basis: BASIS[r.basis_class], unit: r.unit };
    r.scope_id = scopeKeyOf(r.analyte, r.scope.material, r.scope.basis, r.unit);
  }
  const target = r => r.hold || r.unit !== 'µg/kg' ? null : r.source === FDA ? null : rowTarget({ ...r, primary: r.primary ?? {} }) ;
  for (const r of rows) if (r.pilot && r.source !== FDA && !r.target_override) r.target_override = null;

  // Units: pilot units (kept when a same-family result owns them in the scope), FDA cooked composites, new families.
  const { units: extra, audit } = referenceUnits(root, rows);
  const unitsByScope = new Map();
  const ownerOf = (u, key) => rows.filter(r => r.source === u.family && r.scope_id === key);
  const removed = [];
  for (const d of pooled) {
    const [, , cls, a] = d.key.match(/^rice-pooled-(?:(dry|native))-(.+)$/) ? [null, null, ...d.key.match(/^rice-pooled-(dry|native)-(.+)$/).slice(1)] : [];
    const key = scopeKeyOf(a, MATERIAL.grain, BASIS[cls]);
    for (const u of d.referenceUnits) {
      if (!ownerOf(u, key).length) { removed.push({ unit: u.id, family: u.family, scope: key, reason: 'No result of this family is in this scope (the pilot converted another basis); a unit must be owned by a same-scope result.' }); continue; }
      if (!unitsByScope.has(key)) unitsByScope.set(key, []);
      unitsByScope.get(key).push({ ...u, id: `${u.family}:${u.id}`.slice(0, 160), pilot_definition: d.key });
    }
  }
  for (const [a, list] of Object.entries(pilotCookedUnits(rows))) {
    const key = scopeKeyOf(a, MATERIAL.grain, BASIS.cooked);
    if (!unitsByScope.has(key)) unitsByScope.set(key, []);
    unitsByScope.get(key).push(...list);
  }
  for (const [key, list] of extra) {
    for (const u of list) {
      if (!ownerOf(u, key).length) { removed.push({ unit: u.id, family: u.family, scope: key, reason: 'No rendered result of this family shares the unit scope.' }); continue; }
      if (!unitsByScope.has(key)) unitsByScope.set(key, []);
      unitsByScope.get(key).push(u);
    }
  }
  // Unique unit IDs within a scope.
  for (const list of unitsByScope.values()) { const seen = {}; for (const u of list) { const n = seen[u.id] = (seen[u.id] ?? 0) + 1; if (n > 1) u.id = `${u.id}~${n}`; } }

  // Definitions: one per scope that holds units.
  const pilotByScope = new Map(pooled.map(d => { const m = d.key.match(/^rice-pooled-(dry|native)-(.+)$/); return [scopeKeyOf(m[2], MATERIAL.grain, BASIS[m[1]]), d]; }));
  const definitions = [...unitsByScope].filter(([, list]) => list.length).map(([key, list]) => {
    const [a, material, basis] = JSON.parse(key);
    const families = [...new Set(list.map(u => u.family))];
    const pd = pilotByScope.get(key);
    const cooked = basis === BASIS.cooked;
    const scope = { ingredient: 'rice', analyte: a, basis, unit: 'µg/kg', statistic: cooked ? cookedScopeText.statistic : 'subgroup median concentration',
      market: cooked ? cookedScopeText.market : 'International rice evidence library: market, farm and monitoring surveys',
      period: cooked ? cookedScopeText.period : `Evidence ledger frozen ${FROZEN}; collection years vary and may be unreported` };
    const referenceUnits = list.map(u => ({ ...u, ...scope, group: u.group ?? u.id }));
    return {
      scope_id: key,
      key: `rice-${cooked ? 'cooked' : basis === BASIS.dry ? 'dry' : 'native'}-${material === MATERIAL.grain ? '' : slug(material) + '-'}${a}`, scope, referenceUnits,
      accepts: r => r.scope_id === key && !r.hold && (r.source === FDA ? !!r.profile.samples : !!(r.target_override ?? rowTarget(r))),
      label: `HMI ${cooked ? 'cooked-rice' : basis === BASIS.dry ? 'dry-grain' : 'uncooked-grain'} ${a} reference · ${families.length} sampling ${families.length === 1 ? 'family' : 'families'}`,
      targetStatistic: r => r.source === FDA ? 'Median of selected cooked-food composites' : `${statLabel(r.statistic)} as reported${r.target_override && !r.target_override.exact ? ' (bounded)' : ''}`,
      target: (r, view) => r.source === FDA ? view.median : (r.target_override ?? rowTarget(r)),
      sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
      methods: `${pd ? pd.methods.split('. ').slice(0, 1).join('. ') + '. ' : ''}HMI pools subgroup medians from every compatible rice sampling family in the evidence ledger for this analyte, material and basis: published subgroup medians, medians HMI calculates from printed per-sample values${cooked ? ', FDA Total Diet Study cooked composites' : ''} and WHO GEMS/Food region-by-year medians (random sampling only). Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations. Dry-weight, native-moisture and cooked results are kept in separate references; no moisture conversion is assumed.`,
      limitations: `An evidence-library reference, not a probability sample of the world rice market. Sampling families differ in frame (retail, farm, contaminated sites, monitoring) and period; GEMS/Food regions are reporting regions, not growing origins. Many submissions are non-detects with differing limits, which widens the bounds. ${families.length === 1 ? 'This is the only compatible family for this scope in the completed rice ledger; a single-family reference cannot represent other markets. ' : ''}A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });

  // Base comparisons before references: contrasts for new rows, pilot form comparisons for pilot rows.
  const compiled0 = rows.map(r => {
    if (r.pilot) {
      const variants = Object.fromEntries(Object.entries(r.profile.variants).map(([k, v]) => [k, { ...v, comparisons: { ...v.comparisons, contrast: pilotContrast({ profile: { variants: { '::': v } } }) ?? contrast(r, rows) } }]));
      return { ...r, profile: { ...r.profile, variants } };
    }
    const t = rowTarget(r);
    const v = { n: r.n, region: r.region, period: r.period, median: t, comparisons: { contrast: contrast(r, rows) } };
    v.comparisons.forms = v.comparisons.contrast;
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? r.hold
    : r.unit !== 'µg/kg' ? `Reported as ${r.unit}; a concentration reference in µg/kg cannot apply.`
    : !(r.target_override ?? rowTarget(r)) && r.source !== FDA ? (['range', 'min', 'max'].includes(r.statistic) || /percentile$/.test(r.statistic) ? 'The source reports a range, percentile or extreme value; only a mean, median or sample result can be positioned against a reference.' : 'The source reports a non-detect without a numerical limit; its position cannot be identified.')
    : 'No compatible reference units exist for this analyte, material and basis after the complete rice ledger.');
  compiled.record.frozen = FROZEN;

  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = FROZEN;
    if (r.unit !== 'µg/kg') for (const c of Object.values(v.comparisons)) if (c) c.unit = r.unit;
    const h = v.comparisons.hmi, c = v.comparisons.contrast;
    const inexact = h.target && h.target.exact === false && h.baseline.distribution?.eligible && !h.baseline.level;
    if (inexact) v.comparisons.bounded_hmi = { kind: 'food_form', direction: 'bounded', label: 'Limits overlap', target: h.target, baseline: h.baseline,
      detail: `The result is bounded by reporting limits (${fmt(h.target.lower)}–${fmt(h.target.upper)} µg/kg) and these bounds span more than one position in the ${h.baseline.label}.`, context: h.context };
    v.comparisons.reviewed = h.baseline.level ? h : ['higher', 'lower', 'same'].includes(c?.direction) && c.target && c.reference ? c : c?.direction === 'bounded' ? c : inexact ? v.comparisons.bounded_hmi : h;
  }
  // Render order: pilot analyte order, pilot rows first, then monitoring summaries, then literature.
  const tier = r => r.pilot ? 0 : r.source === GEMS ? 1 : 2;
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', '5th percentile', '25th percentile', '75th percentile', '95th percentile', 'range', 'min', 'max'].indexOf(s);
  const pilotOrder = new Map(pilot.map((r, i) => [r.scope_key, i]));
  const out = compiled.rows.sort((a, b) => ANALYTE_ORDER.indexOf(a.analyte) - ANALYTE_ORDER.indexOf(b.analyte) || tier(a) - tier(b)
    || (tier(a) === 0 ? pilotOrder.get(a.scope_key) - pilotOrder.get(b.scope_key) : 0)
    || a.source_label.localeCompare(b.source_label) || String(a.group_full).localeCompare(String(b.group_full)) || String(a.food).localeCompare(String(b.food)) || statRank(a.statistic) - statRank(b.statistic) || a.finding_id.localeCompare(b.finding_id));
  const seen = {};
  for (const r of out) {
    const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1;
    r.result_id = `hmi-occurrence-rice-${r.analyte}-${i}`;
    const c = r.profile.variants['::'].comparisons, state = stateOf(r), t = c.hmi.target ?? (r.target_override ?? rowTarget(r));
    r.comparison_state = state;
    r.reason_code = reasonCode(r, r.source === FDA ? c.hmi.target : t);
    r.comparison_attempts = [
      { mode: 'hmi_rating', outcome: c.hmi.baseline.level ? 'rated' : 'unavailable', reason: c.hmi.baseline.level ? `${c.hmi.baseline.level} against ${c.hmi.baseline.reference_id}` : (c.hmi.detail || 'No HMI position') },
      { mode: 'within_study_direct', outcome: state === 'rated' ? 'not_selected' : state === 'direct' ? 'direct' : 'unavailable', reason: c.contrast?.label || c.contrast?.detail || 'No same-study comparison' },
      { mode: 'bounded_classification', outcome: ['rated', 'direct'].includes(state) ? 'not_selected' : state === 'bounded' ? 'bounded' : 'unavailable', reason: state === 'bounded' ? 'Reporting limits overlap the comparator' : 'No overlapping-limit classification applies' },
    ];
  }
  // Internal helpers stay off the public payload: the selected comparison is
  // already in 'reviewed' and the same-study contrast is the 'forms' mode.
  for (const r of out) for (const v of Object.values(r.profile.variants)) { delete v.comparisons.contrast; delete v.comparisons.bounded_hmi; }
  // Each reference unit is owned by a result of its own family and scope (gate 6).
  for (const d of definitions) for (const u of d.referenceUnits) {
    const same = out.filter(r => r.source === u.family && r.scope_id === d.scope_id);
    const hit = u.owner ? same.find(r => r.scope_key === u.owner) : u.result_finding ? same.find(r => r.finding_id === u.result_finding)
      : u.family === GEMS ? same.find(r => r.group_full.startsWith(`WHO region ${u.region};`) && /random/i.test(r.group_full)) ?? same.find(r => /random/i.test(r.group_full))
      : same.find(r => r.group_full === u.group && ['sample_value', 'below_LOD', 'not_detected'].includes(r.statistic)) ?? same.find(r => r.group_full === u.group) ?? same.find(r => r.group_kind === 'all_samples');
    u.result_id = (hit ?? same[0])?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${d.key} ${u.id}`);
  }
  return { rows: out, record: compiled.record, definitions, dropped, unit_audit: [...audit, ...removed],
    parity: out.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

export const riceOptions = {
  defaultComparison: 'reviewed', referenceNote: false, directComparisonLabel: 'Same-study comparison',
  // Food-form groups follow the material and basis each HMI rice reference uses.
  formOf: r => ({ key: r.material_class === 'grain' ? r.basis_class : r.material_class,
    label: r.material_class === 'grain' ? { native: 'Uncooked rice grain', dry: 'Rice grain, dry weight', cooked: 'Cooked rice' }[r.basis_class] : r.material_class === 'paddy' ? 'Paddy rice (grain with hull)' : 'Mixed rice grain and rice products' }),
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI rice reference (pooled)' }, { value: 'forms', label: 'Same-study comparison' }],
};
