// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row. Maize grain, fresh or
// frozen sweet corn, cooked sweet corn, baby corn and corn of unstated form stay separate
// materials, and dry-weight, as-sold/fresh and unstated bases never share a reference.
// Corn foods with their own pages (canned corn, flour, meal, grits, flakes, popcorn, oil,
// syrup) never enter this table.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn';
export const GEMS = 'who-gemsfood-heavy-metal-contaminants';
export const FDA = 'fda2022-tds-elements-fy2018-fy2020';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating (terminal reason value_fails_source_integrity_check).
export const holds = [
  { match: id => /^abdullahi2024.*:tHg:/.test(id), reason: 'Mercury was measured after dry ashing at 550 °C, which drives mercury off before analysis; the method cannot support a mercury result.' },
  { match: id => /^ataee2016.*:Pb:/.test(id), reason: 'The lead results lie above the method’s own stated linear range of 0.1–50 µg/kg and no dilution step is described, so the paper cannot support the values printed.' },
  { match: id => /^authors2024-detection.*:(Pb|Cd):/.test(id), reason: 'Lead and cadmium were measured by flame atomic absorption with no detection limit, blank, recovery or reference material, at levels near or below what that method can see; standard deviations exceed means and the text and table disagree for one market.' },
  { match: id => /^bazie2022.*:Pb:dakola:/.test(id), reason: 'The printed interquartile range for lead in Dakola (420 µg/kg) is wider than the printed maximum (310 µg/kg), so the cells contradict each other.' },
  { match: id => /^bazie2022.*:Cd:total:/.test(id), reason: 'Cadmium is reported below detection for the median and detected in only 44% of maize samples, yet the text states that 47.6% exceeded 100 µg/kg; the summary cannot be reconciled.' },
  { match: id => /^getu2022/.test(id), reason: 'The single market composite was read below the lowest calibration standard with no detection limit or reference material, and cadmium shows a standard deviation 87% of its mean with near-identical values in all four cereals; the values cannot be supported by the paper’s method.' },
  { match: id => /^gholami2025/.test(id) , reason: 'The paper’s abstract, results text and Tables 2–4 give conflicting means for the same 50 samples (for example overall lead 1.84 against 1.39 mg/kg, and Dezful lead 0.03 mg/kg in Table 4 against 0.62–1.26 in Table 2), so no single value can be reconciled.' },
  { match: id => /^ibrahim2024/.test(id), reason: 'The paper does not state that the samples from maize-eating households were maize, its summary table contradicts itself (a median outside its interquartile range, counts that do not sum), and mercury near 2,700 µg/kg was measured without cold-vapour technique, detection limit or reference material.' },
  { match: id => /^islam2015/.test(id), reason: 'These fresh-weight maize values are higher than the dry-weight values the same authors reported for maize from the same district and season (Islam et al. 2014); a fresh-weight result cannot exceed the dry-weight result for the same grain.' },
  { match: id => /^li2017.*:tHg:b4:/.test(id), reason: 'The site B4 value is printed “0.55 ± 00.63”, with a standard deviation above the mean and below the grocery control, so the cell cannot be read reliably.' },
  { match: id => /^masite2022.*:tAs:/.test(id), reason: 'Total arsenic of 74,600 µg/kg in roasted sweet corn is about a thousand times the arsenic the paper itself cites for corn, from one sample by ICP-OES without hydride generation or reference material.' },
  { match: id => /^rubio2023.*:(Pb|tHg):/.test(id), reason: 'The reported mean is below the paper’s own limit of quantification (lead 40 µg/kg, mercury 100 µg/kg), so it is not a quantified result.' },
  { match: id => /^zhang2026/.test(id), reason: 'The printed maize means are identical to the sweet potato means in the same table, with only the standard deviations differing, which indicates a copy error; the paper’s own pollution-index columns imply different maize values.' },
  { match: id => /^zhu2024.*:Cr:/.test(id), reason: 'The chromium mean of 30 µg/kg cannot be reconciled with 6% detection and detection limits of 20 µg/kg or less, and the paper also gives an 88.87% chromium detection rate.' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
const LABELS = {
  [GEMS]: 'WHO GEMS/Food', [FDA]: 'FDA Total Diet Study',
  'abatemi-usman2023-corn-cement-nigeria': 'Abatemi-Usman et al. 2023', 'abdullahi2024-heavy-metals-maize-nigeria-seasonal': 'Abdullahi et al. 2024',
  'agarwal2022-heavy-metals-vegetables-east-kolkata': 'Agarwal et al. 2022', 'altunay2023-cadmium-food-turkey': 'Altunay et al. 2023', 'ataee2016-iran-cereals-pb-cd': 'Ataee et al. 2016',
  'authors2024-detection-of-heavy-metals-in-some-edible': 'Mustapha et al. 2024', 'bai2022-arsenic-coal-burning-shaanxi': 'Bai et al. 2022', 'bazie2022-burkina-faso-foodstuffs-metals': 'Bazie et al. 2022',
  'bedoya-perales2023-moquegua-peru-mining-dataset': 'Bedoya-Perales et al. 2023', 'edirisinghe2019-sri-lanka-legumes-cereals-as-cd': 'Edirisinghe et al. 2019', 'el-hassanin2020-egypt-maize-pb-cd': 'El-Hassanin et al. 2020',
  'getu2022-heavy-metals-cereals-ethiopia': 'Getu et al. 2022', 'gholami2025-heavy-metals-corn-iran-khuzestan': 'Gholami et al. 2025', 'gu2019-maize-peanut-heavy-metals-guangxi': 'Gu et al. 2019',
  'ibrahim2024-food-heavy-metals-nigeria': 'Ibrahim et al. 2024', 'islam2014-bangladesh-cereals-pulses-metals': 'Islam et al. 2014', 'islam2015-bangladesh-foods-heavy-metals': 'Islam et al. 2015',
  'jiang2020-henan-battery-factory-crops-metals': 'Jiang et al. 2020', 'li2017-mercury-coal-power-plants-vegetables-grains': 'Li et al. 2017', 'li2022-guizhou-cd-grains': 'Li et al. 2022',
  'liu2022-heavy-metals-rice-maize-chengdu': 'Liu et al. 2022', 'liu2025-nanyang-crops-heavy-metals': 'Liu et al. 2025', 'masite2022-mopane-trace-metals': 'Masite et al. 2022',
  'pirsaheb2015-iran-kermanshah-cereals-metals': 'Pirsaheb et al. 2015', 'roman-ochoa2021-arequipa-grains-health-risk': 'Román-Ochoa et al. 2021', 'romero-crespo2023-trace-elements-crops-ecuador-mining': 'Romero-Crespo et al. 2023',
  'rubio2023-metals-cereals-madeira-azores': 'Rubio et al. 2023', 'saleem2025-nd-vegetables-hra': 'Saleem et al. 2025', 'zhang2026-trace-metals-five-crops-chongqing': 'Zhang et al. 2026',
  'zhu2024-mycotoxins-and-heavy-metals-in-rice-maize': 'Zhu et al. 2024',
};
export const sourceLabel = id => LABELS[id] ?? id;
function sourceMeta(root, id) {
  const fm = matter(fs.readFileSync(path.join(root, `wiki/sources/${id}.md`), 'utf8')).data;
  const doi = fm.doi && fm.doi !== 'null' ? String(fm.doi).replace(/^"|"$/g, '') : null;
  const url = doi ? `https://doi.org/${doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label: sourceLabel(id), url };
}

// Material scope: the food analysed, never pooled across forms.
export const MATERIALS = { grain: 'Maize grain', sweet: 'Sweet or fresh corn, raw or frozen', sweet_cooked: 'Sweet corn, cooked as eaten', sweet_unstated: 'Sweet corn, pack not stated',
  baby: 'Baby corn', cooked_unstated: 'Corn, cooked, form not stated', corn_unstated: 'Corn, form not stated' };
const LIT_MATERIAL = { maize_grain: 'grain', fresh_corn: 'sweet', cooked_fresh_corn: 'sweet_cooked', baby_corn: 'baby', unspecified_corn: 'corn_unstated', corn_form_unstated: 'corn_unstated' };
const materialOf = (fd, x) => {
  const key = (x.source_id === GEMS || x.source_id === FDA) ? fd.material : LIT_MATERIAL[fd.material];
  if (!MATERIALS[key]) throw Error(`No material scope for ${fd.id}: ${fd.material}`);
  return { key, label: MATERIALS[key] };
};
// Basis scope: GEMS "As is"/"As consumed", FDA as eaten and stated fresh or wet weight form one layer.
export const BASIS = { fw: 'As sold, as eaten or fresh weight', dw: 'Dry weight', unstated: 'Basis not stated by the source' };
function basisOf(fd, x) {
  const b = String(fd.basis || x.study.basis || '').toLowerCase();
  if (x.source_id === FDA || (x.source_id === GEMS && !/dry/.test(b))) return 'fw';
  if (/^unstated/.test(b)) return 'unstated';
  if (/^(wet weight|fresh weight|as sold|as eaten)/.test(b)) return 'fw';
  if (/dry|air-dried|dried at/.test(b)) return 'dw';
  return 'unstated';
}
const SITE = { ordinary_agricultural: 'Ordinary farm fields', market_retail: 'Market or retail', mining_impacted: 'Mining-affected area', industrial_impacted: 'Industrial-affected area',
  wastewater_irrigated: 'Wastewater-irrigated fields', experimental: 'Experiment', mixed: 'Mixed field settings' };

export function shortLabel(text, max = 42) {
  let t = String(text).trim();
  if (t.length > max) t = t.split(/\s[(–—-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });

// A reported "<x" without a value is an interval from zero to the stated limit.
function censoredBound(s) {
  if (Number.isFinite(s.value_ug_kg)) return null;
  const t = String(s.reported?.text ?? s.reported?.value ?? '');
  if (Number.isFinite(s.lod_ug_kg) && (['below_LOD', 'not_detected'].includes(s.statistic) || /^\s*</.test(t))) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}
export function rowTarget(row) {
  if (row.hold) return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean', 'median'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  return censoredBound(s);
}

function findingText(s) {
  const c = censoredBound(s);
  if (c) return `<${fmt(c.upper)} µg/kg${s.statistic === 'mean' ? ' (mean below the reporting limit)' : ''}`;
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (bounds)`; }
  if (s.statistic === 'range' && Number.isFinite(s.max_ug_kg)) return Number.isFinite(s.min_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : `up to ${fmt(s.max_ug_kg)} µg/kg (range; minimum not quantified)`;
  if (s.statistic === 'min' && Number.isFinite(s.value_ug_kg ?? s.min_ug_kg)) return `${fmt(s.value_ug_kg ?? s.min_ug_kg)} µg/kg (minimum)`;
  if (Number.isFinite(s.value_ug_kg)) return `${fmt(s.value_ug_kg)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`;
}

const regionType = (k, site) => ({ growing_origin: 'Reported growing area', purchase_market: 'Purchase or reporting market; growing area not identified', treatment: 'Treatment within one study',
  site_or_habitat: 'Field site within one study', season: 'Season within one study', variety: 'Variety within one study' }[k] ?? 'All samples in the study') + (site && !['market_retail', 'ordinary_agricultural'].includes(site) ? ` (${SITE[site].toLowerCase()})` : '');
const GEMS_GROUP = g => g.replace('WHO region ', '').replace('; random sampling', ', random').replace('; targeted sampling', ', targeted').replace('; unstated sampling (not described)', ', sampling unstated');
const PERIOD = { 'el-hassanin2020-egypt-maize-pb-cd': '2017', 'abatemi-usman2023-corn-cement-nigeria': '2017', 'li2022-guizhou-cd-grains': '2021', 'zhu2024-mycotoxins-and-heavy-metals-in-rice-maize': '2021–2022',
  'islam2014-bangladesh-cereals-pulses-metals': '2012', 'islam2015-bangladesh-foods-heavy-metals': '2012', 'edirisinghe2019-sri-lanka-legumes-cereals-as-cd': '2016', 'li2017-mercury-coal-power-plants-vegetables-grains': '2015',
  'jiang2020-henan-battery-factory-crops-metals': '2018', 'pirsaheb2015-iran-kermanshah-cereals-metals': '2014', 'roman-ochoa2021-arequipa-grains-health-risk': '2019', 'romero-crespo2023-trace-elements-crops-ecuador-mining': '2021',
  'gu2019-maize-peanut-heavy-metals-guangxi': '2015', 'getu2022-heavy-metals-cereals-ethiopia': '2020', 'ibrahim2024-food-heavy-metals-nigeria': '2023', 'zhang2026-trace-metals-five-crops-chongqing': '2020',
  'masite2022-mopane-trace-metals': '2019', 'agarwal2022-heavy-metals-vegetables-east-kolkata': '2016–2017', 'bazie2022-burkina-faso-foodstuffs-metals': '2020' };
function groupLabel(sid, fd) {
  const g = fd.group;
  if (sid.startsWith('abatemi')) return { fc: 'Control farm, 18 km upwind of cement plant', f1: 'Farm 2.7 km upwind of cement plant', f2: 'Farm 0.7 km downwind of cement plant', f3: 'Farm 3.1 km downwind of cement plant', f4: 'Farm 2.3 km downwind of cement plant' }[fd.id.split(':')[2]] ?? g;
  if (sid.startsWith('abdullahi')) return g.replace(/^(Wet|Dry) season (\d+) — /, '$1 season $2, ');
  if (sid.startsWith('el-hassanin')) return `${g.split(',')[0]} (${/wastewater/.test(fd.site_context) ? 'wastewater-irrigated' : 'fresh or ground water'})`;
  if (sid.startsWith('li2017')) return { control: 'Grocery store control, over 55 km away' }[fd.id.split(':')[2]] ?? g.replace(/^Location (\w+) \((.*)\)$/, '$1, $2');
  if (sid.startsWith('li2022')) return /category/.test(g) ? g.replace(/^Corn Cd category (\d).*/, 'Concentration class $1 of 5') : 'All corn fields, Guizhou karst';
  if (sid.startsWith('authors2024-detection')) return g.replace(/^(Hybrid|Syria) Maize.*?\), /, '$1 maize, ');
  if (sid.startsWith('bedoya')) return g.replace(', Moquegua (farm composites)', ', Moquegua');
  if (sid.startsWith('ataee')) return g.replace(/^Local market no\. (\d)$/, 'Kermanshah market $1, Iran');
  return { 'islam2014-bangladesh-cereals-pulses-metals': 'Bogra district fields, Bangladesh', 'islam2015-bangladesh-foods-heavy-metals': 'Bogra district, Bangladesh',
    'liu2022-heavy-metals-rice-maize-chengdu': 'Shifang area fields near Chengdu', 'liu2025-nanyang-crops-heavy-metals': 'Nanyang Basin fields, Henan', 'gu2019-maize-peanut-heavy-metals-guangxi': 'Binyang and Xingbin fields, Guangxi',
    'getu2022-heavy-metals-cereals-ethiopia': 'Debre Markos market, Ethiopia', 'edirisinghe2019-sri-lanka-legumes-cereals-as-cd': 'North Central Province farms, Sri Lanka',
    'jiang2020-henan-battery-factory-crops-metals': 'Village 2.5 km from battery plant', 'zhu2024-mycotoxins-and-heavy-metals-in-rice-maize': 'Shanghai supermarkets and markets',
    'pirsaheb2015-iran-kermanshah-cereals-metals': 'Kermanshah retail, Iran', 'roman-ochoa2021-arequipa-grains-health-risk': 'Arequipa growing districts, Peru',
    'romero-crespo2023-trace-elements-crops-ecuador-mining': 'Gold-mining orchard, Ecuador', 'rubio2023-metals-cereals-madeira-azores': 'Madeira markets, Portugal',
    'saleem2025-nd-vegetables-hra': 'Grand Forks farmers’ market, US', 'bai2022-arsenic-coal-burning-shaanxi': 'Ziyang coal-burning area, Shaanxi',
    'masite2022-mopane-trace-metals': 'Limpopo produce markets, South Africa', 'agarwal2022-heavy-metals-vegetables-east-kolkata': 'Dhapa waste-dumping ground, Kolkata',
    'altunay2023-cadmium-food-turkey': 'Sivas greengrocer, Türkiye', 'zhang2026-trace-metals-five-crops-chongqing': 'Manganese mining and smelting area, Chongqing',
    'ibrahim2024-food-heavy-metals-nigeria': 'Maize-eating households, Jigawa, Nigeria' }[sid] ?? null;
}

export function cornRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      const hold = holdFor(fd.id), mat = materialOf(fd, x), bk = basisOf(fd, x);
      const yrs = fd.years ?? null;
      const period = yrs && yrs[0] ? (yrs[0] === yrs[1] ? String(yrs[0]) : `${yrs[0]}–${yrs[1]}`) : PERIOD[x.source_id] ?? 'Collection date unreported';
      const site = fd.site_context || x.study.site_context;
      const group = x.source_id === GEMS ? GEMS_GROUP(fd.group) : x.source_id === FDA ? 'United States, four regions' : groupLabel(x.source_id, fd) ?? fd.group;
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: mat.label, material_key: mat.key, material_full: fd.material_text || mat.label, region: shortLabel(group), group_full: fd.group, group_kind: fd.group_kind, site_context: site, period,
        region_type: regionType(fd.group_kind, site), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.study.sampling_unit || 'samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: String(fd.reported?.text ?? ''),
        basis: BASIS[bk], basis_key: bk, display_basis: BASIS[bk], short_basis: { fw: 'As sold / fresh', dw: 'Dry weight', unstated: 'Basis not stated' }[bk],
        method: x.study.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, fd.integrity_flag && !hold ? `Source check: ${fd.integrity_flag}` : null, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows from the same source share its laboratory and sampling frame; they are not independent studies.',
        conversion: { method: fd.conversion || 'none' }, hold, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr', 'Al', 'Sn', 'U'];
  const matOrder = ['grain', 'sweet', 'sweet_cooked', 'sweet_unstated', 'baby', 'cooked_unstated', 'corn_unstated'];
  const statRank = s => ['median', 'mean', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : 2;
  const basisRank = b => ['fw', 'dw', 'unstated'].indexOf(b);
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || matOrder.indexOf(a.material_key) - matOrder.indexOf(b.material_key) || basisRank(a.basis_key) - basisRank(b.basis_key) || tier(a) - tier(b)
    || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full, 'en', { numeric: true }) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-corn-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const refKey = (a, m, b) => `corn-${m}-${b}-${a}`;
const scopeFor = (analyte, m, b) => ({ ingredient: 'corn', analyte, basis: `${MATERIALS[m]}; ${BASIS[b]}, µg/kg; no moisture conversion`, statistic: 'subgroup median concentration', market: 'International corn evidence library', period: 'Source collection years 1999–2023' });

function medianOf(records) {
  const scope = { ingredient: 'corn', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}
// Sites affected by mining, industry or wastewater, and experiments, are external targets:
// they describe contamination pressure, not ordinary corn occurrence (as mining-area rice in Rice).
const EXTERNAL = new Set(['mining_impacted', 'industrial_impacted', 'wastewater_irrigated', 'experimental']);

// Reference units: GEMS/Food records become HMI-calculated subgroup medians per WHO region,
// sampling type and collection year; FDA TDS composites are individual sample values; a
// literature family contributes its observed subgroup medians from ordinary fields or markets.
export function referenceUnits(root, rows) {
  const units = {}, audit = [];
  const add = (k, u) => { (units[k] ??= []).push(u); };
  const rep = s => s.startsWith('Random') ? 'random' : (s.startsWith('Targeted') || s.startsWith('Selective')) ? 'targeted' : 'unstated';
  const recs = load(root, 'primary/gemsfood-corn-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.fda_duplicate) { audit.push({ unit: r.item_id, admitted: false, reason: r.value_review ? 'held for value review' : 'duplicate of an FDA TDS composite' }); continue; }
    const k = `${r.analyte}|${r.material}|${r.basis_key}|${r.region}|${rep(r.representativeness)}|${r.year}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, m, b, region, rp, year] = k.split('|');
    const med = medianOf(rs);
    const finding = `${GEMS}:${a}:${m}:${b}:${region.toLowerCase().replace(/[^a-z0-9]+/g, '-')}:${rp}:median`;
    add(refKey(a, m, b), { ...scopeFor(a, m, b), id: `gems-${m}-${b}-${region}-${rp}-${year}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${rp} ${year}`,
      lower: med.lower, upper: med.upper, n: rs.length, locator: `primary/gemsfood-corn-records.csv: ${a}, ${MATERIALS[m]}, ${region}, ${rp} sampling, ${year} (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median', result_finding: finding });
  }
  // FDA TDS: each national retail composite of frozen corn boiled as eaten is one sample value.
  const fda = load(root, `extraction/${FDA}.json`);
  for (const s of fda.sample_values) {
    add(refKey(s.analyte, 'sweet_cooked', 'fw'), { ...scopeFor(s.analyte, 'sweet_cooked', 'fw'), id: `fda-${s.sample}-${s.analyte}`.toLowerCase(), family: FDA, group: s.group,
      lower: s.lower_ug_kg, upper: s.upper_ug_kg, n: 1, locator: s.locator, evidence_kind: 'reported composite value', result_finding: `${FDA}:${s.analyte}:us-national:median` });
  }
  // Literature: observed subgroup medians from ordinary fields or markets with a stated basis.
  for (const r of rows) {
    if (r.source === GEMS || r.source === FDA) continue;
    const t = r.statistic === 'median' || (r.statistic === 'below_LOD' && /median/i.test(r.id)) ? rowTarget(r) : null;
    let reason = null;
    if (r.hold) reason = 'held: fails a source integrity check';
    else if (r.statistic !== 'median') reason = `${r.statistic.replace('_', ' ')} is not an observed subgroup median or sample value`;
    else if (!t) reason = 'median without a numeric value or reporting limit';
    else if (EXTERNAL.has(r.site_context)) reason = `${SITE[r.site_context].toLowerCase()}: an external target, not ordinary corn occurrence`;
    else if (r.basis_key === 'unstated') reason = 'basis not stated: cannot join an as-sold, fresh-weight or dry-weight reference';
    else if (/category|class/i.test(r.group_full)) reason = 'concentration class defined by the result itself, not a sampling subgroup';
    else if (/approximate|read (off|from)/i.test(r.primary.notes ?? '') || /figure|fig\./i.test(r.locator ?? '') && r.source.startsWith('gu2019')) reason = 'median read approximately from a figure, not printed';
    if (reason) { audit.push({ unit: r.finding_id, admitted: false, reason }); continue; }
    add(refKey(r.analyte, r.material_key, r.basis_key), { ...scopeFor(r.analyte, r.material_key, r.basis_key), id: `${r.source}-${r.finding_id.split(':').slice(1).join('-')}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'),
      family: r.source, group: r.group_full, lower: t.lower, upper: t.upper, n: r.n ?? 1, locator: r.locator, evidence_kind: 'reported subgroup median', result_finding: r.finding_id });
  }
  for (const [k, list] of Object.entries(units)) for (const u of list) {
    const hit = rows.find(r => r.finding_id === u.result_finding);
    u.result_id = hit?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${k} ${u.id}`);
  }
  return { units, audit };
}

// Terminal reason codes (owner fullness rules, comparator rule 5, with the 22 Oct amendment).
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
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return r.basis_key === 'dw' ? 'basis_incompatible_with_all_references' : 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- within-study contrasts
// Each contrast compares a row with a named comparison group in the same source, analyte and statistic.
const same = (r, x) => x.source === r.source && x.analyte === r.analyte && x.statistic === r.statistic && x.id !== r.id;
function contrastRef(r, rows) {
  const s = r.source, id = r.id;
  if (s.startsWith('abatemi') && !/:fc:/.test(id)) return rows.find(x => same(r, x) && /:fc:/.test(x.id));
  if (s.startsWith('abdullahi') && /dry-season/.test(id) && /all-10-locations/.test(id)) return rows.find(x => same(r, x) && /wet-season/.test(x.id) && /all-10-locations/.test(x.id));
  if (s.startsWith('el-hassanin') && r.site_context === 'wastewater_irrigated') {
    const control = /kafr el-sheikh/i.test(r.group_full) ? /al-hawia/ : /abdel-rahman/;
    return rows.find(x => x.source === s && x.analyte === r.analyte && control.test(x.id));
  }
  if (s.startsWith('li2017') && !/:control:/.test(id)) return rows.find(x => same(r, x) && /:control:/.test(x.id));
  if (s.startsWith('bazie') && !/:total:/.test(id) && r.statistic === 'median') return rows.find(x => x.source === s && x.analyte === r.analyte && /:total:/.test(x.id) && ['median', 'below_LOD'].includes(x.statistic));
  if (s.startsWith('bedoya') && !/matalaque/.test(id)) return rows.find(x => same(r, x) && /matalaque/.test(x.id));
  if (s === GEMS && r.material_key === 'sweet_cooked') return rows.find(x => x.source === GEMS && x.analyte === r.analyte && x.material_key === 'sweet' && x.group_full.split(';')[0] === r.group_full.split(';')[0] && x.basis_key === r.basis_key);
  if (s === GEMS && r.sampling === 'targeted') return rows.find(x => x.source === GEMS && x.analyte === r.analyte && x.material_key === r.material_key && x.basis_key === r.basis_key && x.group_full.split(';')[0] === r.group_full.split(';')[0] && /random/.test(x.group_full));
  return null;
}
const CONTEXT = {
  abatemi: 'Same study, harvest, method and statistic; grain from farms near a cement plant against the control farm 18 km upwind. Dry weight. A descriptive difference, not a significance test or safety judgment.',
  abdullahi: 'Same study, area, method and statistic; dry-season against wet-season grain from ten locations each. Basis not stated. A descriptive difference, not a significance test.',
  'el-hassanin': 'Same study, governorate, harvest, method and statistic; grain irrigated with low-quality water against grain irrigated with fresh or ground water. Basis not stated. A descriptive difference, not a significance test.',
  li2017: 'Same study, method and statistic; field grain near coal-fired power plants against grain bought at a grocery store more than 55 km away. Fresh weight. A descriptive difference, not a significance test.',
  bazie: 'Same study, method and statistic; one city’s market maize against all maize samples in the survey. Basis not stated. A descriptive difference, not a significance test.',
  bedoya: 'Same dataset, harvest, laboratory and statistic; farm composites from one district against Matalaque district. Basis not stated. A descriptive difference, not a significance test.',
  [GEMS]: 'Same dataset, WHO region, form of reporting and statistic; cooked and raw sweet corn are different foods sampled as eaten and as sold. A descriptive difference, not a significance test or safety judgment.',
};
function contrast(r, rows) {
  const t = rowTarget(r), ref = contrastRef(r, rows), rt = ref && !ref.hold && rowTarget(ref);
  const none = { direction: 'summary', label: 'No same-study contrast', detail: 'This source reports no compatible same-study comparison group with the same statistic.', context: 'Within-study contrasts compare sites, seasons or forms inside one source using the same statistic and method.' };
  if (!t || !ref || !rt) return none;
  const ctx = CONTEXT[Object.keys(CONTEXT).find(k => r.source === k || r.source.startsWith(k))];
  if (!t.exact || !rt.exact) {
    const overlap = !(t.upper < rt.lower || t.lower > rt.upper);
    return { direction: overlap ? 'bounded' : (t.upper < rt.lower ? 'lower' : 'higher'), label: overlap ? 'Limits overlap' : `${fmt(t.lower)}–${fmt(t.upper)} versus ${fmt(rt.lower)}–${fmt(rt.upper)} µg/kg`, kind: 'site_or_form', target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`,
      detail: `${r.region}: ${r.finding_text}; comparison ${ref.region}: ${ref.finding_text}. ${r.locator}; comparison ${ref.locator}.`, context: `${ctx} Reporting-limit bounds retained.` };
  }
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'site_or_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; comparison ${ref.region}: ${ref.finding_text}. ${r.locator}; comparison ${ref.locator}.`, context: ctx };
}

export function cornOccurrence(root) {
  const { rows, parity } = cornRows(root);
  for (const r of rows) if (r.source === GEMS) r.sampling = r.primary.sampling;
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = Object.entries(units).map(([key, list]) => {
    const [, m, b, a] = key.match(/^corn-(.+)-(fw|dw|unstated)-([A-Za-z]+)$/);
    const fams = [...new Set(list.map(u => u.family))];
    return {
      key, scope: scopeFor(a, m, b), referenceUnits: list, accepts: r => r.analyte === a && r.material_key === m && r.basis_key === b && !r.hold && !!rowTarget(r),
      label: `HMI corn ${a} reference · ${MATERIALS[m]}${b === 'dw' ? ', dry weight' : ''}`,
      targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivitySubgroup: 'region', sensitivityLabel: 'Equal weight per subgroup',
      methods: `HMI pools subgroup medians for ${MATERIALS[m].toLowerCase()} on a ${BASIS[b].toLowerCase()} basis: individual WHO GEMS/Food results summarized as one median per WHO region, sampling type and collection year${m === 'sweet_cooked' ? ', and each FDA Total Diet Study national composite of frozen corn boiled as eaten' : ''}${fams.some(f => f !== GEMS && f !== FDA) ? ', and printed subgroup medians from ordinary fields or markets in the literature' : ''}. Each sampling family has equal total weight. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations. Other forms of corn, other bases, results without a stated basis and grain from mining-, industry- or wastewater-affected fields are kept out of this reference.`,
      limitations: `${fams.length === 1 ? `${fams[0] === GEMS ? 'GEMS/Food' : sourceLabel(fams[0])} is the only compatible sampling family for ${MATERIALS[m].toLowerCase()} on this basis in the completed corn ledger, so this single-family reference cannot represent other markets.` : `${fams.length} sampling families with different designs; none is a probability sample of world supply.`} WHO regions are reporting regions, not growing areas. Many results are non-detects with differing limits, which widens the bounds. A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : !rowTarget(r) ? (r.statistic === 'range' ? 'A range gives the spread of results, not a central value that can be placed against a reference.' : 'The source reports no numerical value or limit for this result; its position cannot be identified.')
    : r.basis_key === 'unstated' ? 'The source does not state whether results are fresh or dry weight, so no reference applies.'
    : r.basis_key === 'dw' ? 'Dry-weight results have too few compatible dry-weight corn medians in the ledger for a reference.'
    : 'No compatible reference units for this form of corn and metal.');
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
      { mode: 'bounded_classification', outcome: ['rated', 'direct'].includes(state) ? 'not_selected' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable', reason: c.contrast.direction === 'bounded' ? 'Reporting limits overlap the comparator' : 'No overlapping-limit classification applies' },
    ];
  }
  const unit_list = Object.entries(units).flatMap(([k, list]) => list.map(u => ({ id: u.id, analyte: k.split('-').pop(), ref_key: k, result_id: u.result_id, family: u.family })));
  return { ...compiled, parity, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([k, u]) => [k, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}

export const cornOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI corn reference (by form and basis)' }, { value: 'contrast', label: 'Same-study site, season or form contrast' }],
  caption: 'Corn findings from WHO GEMS/Food monitoring, the FDA Total Diet Study and every extracted field, market and contaminated-site study, in µg/kg with each source’s form of corn, basis, statistic and censoring retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one form of corn, group and metal. Maize grain, fresh or frozen sweet corn, cooked sweet corn and baby corn are kept apart, and dry-weight results never share a reference with as-sold or fresh-weight results. Ratings place a result against an HMI reference built from monitoring results and ordinary-field medians for the same form and basis. Same-study contrasts compare a polluted site with its control, one season with another, or cooked with raw sweet corn. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'The form of corn analysed: maize grain, sweet or fresh corn, cooked sweet corn, baby corn, or corn of unstated form.', 'Collection scope': 'WHO reporting region and sampling type, growing area, field site, season or purchase market as the source reports; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic and basis. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the HMI reference for the same form of corn and basis. Higher or Lower compare a site, season or form with its own study’s comparison group.', Evidence: 'Original values, basis, locators, methods, holds and limitations.' },
};
