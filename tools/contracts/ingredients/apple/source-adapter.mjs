// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row. Fresh apple (peel on or not
// stated), peeled apple, unwashed apple, dried apple and a laboratory juice extract stay separate
// materials, and fresh-weight, dry-weight and unstated bases never share a reference.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple';
export const sourceRecordPath = (root, id) => `wiki/sources/${id}.md`;
const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020', FDA16 = 'fda2016-infant-toddler-foods-inorganic-arsenic';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating (terminal reason value_fails_source_integrity_check).
export const holds = [
  { match: id => /^rahim2020/.test(id), reason: 'Every apple mean is below the detection limit implied by the paper’s own method (instrument limits in Table 1 with 2 g of dry sample in 50 mL give 375 µg/kg for lead, 20 for cadmium, 75 for chromium and 150 for nickel), yet each is printed as a quantified mean with a standard deviation.' },
  { match: id => /^sembratowicz2010/.test(id), reason: 'All apple lead and cadmium values are below the detection limits implied by the stated instrument limits and sample dilution (1 mg/kg lead, 0.1 mg/kg cadmium), and the fresh-weight and dry-weight tables contradict each other for the same apples.' },
  { match: id => /^liang2019.*:(Pb|Cd):/.test(id), reason: 'The reported mean is below the paper’s own method detection limit (lead 0.12 mg/kg, cadmium 0.01 mg/kg) and the paper does not say how values below that limit were treated.' },
  { match: id => /^salhotra2017/.test(id), reason: 'The apple row reports cadmium (1 mg/kg) above lead and iron at 0.06 mg/kg, both implausible for apple and pointing to column or unit errors; no detection limit, recovery or reference material is reported.' },
  { match: id => /^altunay2023/.test(id), reason: 'Cadmium of 470 µg/kg is far above any apple monitoring result, every food in the same table is similarly high, and the paper’s reference-material table misstates the certified cadmium value by a factor of 1,000.' },
  { match: id => /^authors2017-levels.*:(Ni|Cr):/.test(id), reason: 'Nickel (12,230 µg/kg) and chromium (2,180 µg/kg) are near-identical across every fruit, vegetable and cereal in the paper’s table and orders of magnitude above other apple data, with no blank, detection limit or recovery reported.' },
  { match: id => /^rezaei2020/.test(id), reason: 'The table caption gives µg/kg dry weight while the methods state fresh weight, and the printed chromium and iron values are one to three orders of magnitude below other apple data, suggesting a unit error the paper does not resolve.' },
  { match: id => /^wang2020.*:(tAs|Cd):/.test(id), reason: 'The same arsenic (0.0040 mg/kg) and cadmium (0.0030 mg/kg) values are printed for apple in every area and for many other foods, consistent with a substituted half-detection-limit value rather than a measurement; the arsenic reference material read about ten times below its certified value.' },
  { match: id => /^unaegbu2016.*:Ni:.*sample_value/.test(id), reason: 'The nickel value (0.05 mg/L) lies more than 100-fold below the lowest calibration standard the paper reports (5 mg/L), and no detection limit is given.' },
  { match: id => /^fda2016.*:iAs:.*:mean$/.test(id), reason: 'The printed 3.0 ppb average is a placeholder: the report lists 3 ppb when every result is below the detection limit, and none of the ten apples had detectable inorganic arsenic.' },
  { match: id => /^houlihan2019.*:iAs:/.test(id), reason: 'Not a measurement: the report derives inorganic arsenic as 0.80 × the FDA total arsenic average.' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
const LABELS = { [GEMS]: 'WHO GEMS/Food', [FDA]: 'FDA Total Diet Study 2018–2020', [FDA16]: 'FDA 2016', 'afrin2020-heavy-metals-fruits-dhaka': 'Afrin 2020', 'altunay2023-cadmium-food-turkey': 'Altunay et al. 2023',
  'amer2019-egyptian-fruits-heavy-metals': 'Amer et al. 2019', 'atsdr2005-tin-toxicological-profile': 'ATSDR 2005', 'authors2017-levels-dietary-intake-and-health-risk-of-potentially': 'Nawab et al. 2017',
  'bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing': 'Bora et al. 2022', 'bramwell2022-urban-garden-produce-lead': 'Bramwell et al. 2022', 'cfs2012-hktds-inorganic-arsenic': 'Hong Kong TDS 2012',
  'cfs2013-hktds-metallic-contaminants': 'Hong Kong TDS 2013', 'elbagermi2012-misurata-fruits-vegetables-metals': 'Elbagermi et al. 2012', 'hadi2025-dried-fruits-heavy-metals-iraq': 'Hadi et al. 2025',
  'houlihan2019-hbbf-whats-in-baby-food': 'Houlihan and Brody 2019', 'lee2023-south-korea-fresh-fruits-seven-metals': 'Lee et al. 2023', 'liang2019-beijing-foodstuffs-health-risk': 'Liang et al. 2019',
  'mahmood2025-dried-fruit-metals': 'Mahmood et al. 2025', 'mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland': 'Mania et al. 2021', 'nasirpour2026-apple-wastewater-metals': 'Nasirpour et al. 2026',
  'rahim2020-toxic-heavy-metals-fruits-pakistan': 'Rahim et al. 2020', 'reczajska2005-chromium-plant-foods-poland': 'Reczajska et al. 2005', 'rezaei2020-fruits-markazi-essential-elements': 'Rezaei et al. 2020',
  'rusin2021-vegetables-fruits-cadmium-lead-poland': 'Rusin et al. 2021', 'salhotra2017-vegetables-fruits-heavy-metals': 'Salhotra and Verma 2017', 'sembratowicz2010-nitrates-pb-cd-lublin-fruits': 'Sembratowicz et al. 2010',
  'unaegbu2016-fruit-heavy-metals-enugu': 'Unaegbu et al. 2016', 'wang2020-jilin-total-diet-metals': 'Wang et al. 2020' };
function sourceMeta(root, id) {
  const fm = matter(fs.readFileSync(path.join(root, sourceRecordPath(root, id)), 'utf8')).data;
  const doi = String(fm.doi ?? '').replace(/^"|"$/g, '');
  const url = doi && doi !== 'null' ? `https://doi.org/${doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label: LABELS[id] ?? id, url };
}

// Material scope: the food analysed, never pooled across forms.
export const REF_MATERIALS = { fresh: 'Fresh apple, peel on or not stated', fresh_unwashed: 'Fresh apple, unwashed', peeled: 'Fresh apple, peeled', dried: 'Dried apple', extract: 'Laboratory juice extract of fresh apple' };
function materialOf(x, fd) {
  const sid = x.source_id;
  if (sid === GEMS) return fd.material_key === 'dried' ? 'dried' : fd.variant === 'unwashed' ? 'fresh_unwashed' : 'fresh';
  if (/^(hadi2025|mahmood2025|mania2021)/.test(sid)) return 'dried';
  if (/^rusin2021/.test(sid)) return /dried/i.test(fd.material) ? 'dried' : 'peeled';
  if (/^lee2023/.test(sid)) return 'peeled';
  if (/^unaegbu2016/.test(sid)) return 'extract';
  return 'fresh';
}
// Basis scope: GEMS "As is"/"As consumed", total diet studies and stated fresh weight are one as-sold layer.
const BASIS = { fw: { label: 'As sold, as eaten or fresh weight', short: 'Fresh / as sold' }, dw: { label: 'Dry weight', short: 'Dry weight' },
  unstated: { label: 'Basis not stated by the source', short: 'Basis not stated' }, per_litre: { label: 'Per litre of a laboratory extract', short: 'Per litre of extract' } };
function basisKey(x, fd) {
  const sid = x.source_id;
  if ([GEMS, FDA, FDA16, 'houlihan2019-hbbf-whats-in-baby-food', 'cfs2012-hktds-inorganic-arsenic', 'cfs2013-hktds-metallic-contaminants', 'wang2020-jilin-total-diet-metals'].includes(sid)) return 'fw';
  if (/^(elbagermi2012|rezaei2020)/.test(sid)) return 'unstated';  // the papers contradict themselves on basis
  const b = String(fd.basis || x.study.basis || '').toLowerCase();
  if (/per litre|mg\/l/.test(b)) return 'per_litre';
  if (/^(unstated|not stated|conflicting)/.test(b) || !b) return 'unstated';
  if (/^(fresh|wet|as consumed|as sold|raw)/.test(b)) return 'fw';
  if (/dry weight|dry mass|d\.m\.|d\.w\./.test(b)) return 'dw';
  if (/fresh|wet|as consumed|as sold|raw/.test(b)) return 'fw';
  return 'unstated';
}

export function shortLabel(text, max = 40) {
  let t = String(text).trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
const num = v => typeof v === 'number' && Number.isFinite(v) ? v : (typeof v === 'string' && /^[\d.]+$/.test(v) ? Number(v) : null);
const lodOf = fd => { const v = fd.lod_ug_kg; if (typeof v === 'number') return v; const m = String(v ?? '').match(/[\d.]+(?=\s*$)/); return m ? Number(m[0]) : null; };

function rowTarget(row) {
  if (row.hold) return null;
  const s = row.primary;
  if (row.basis_key === 'per_litre') return null;
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(lodOf(s))) return { lower: 0, upper: lodOf(s), exact: false, statistic: 'non-detect bounds' };
  return null;
}

function findingText(s) {
  const lod = lodOf(s);
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(lod) ? `<${fmt(lod)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (bounds)`; }
  if (s.statistic === 'range' && Number.isFinite(s.max_ug_kg)) return Number.isFinite(s.min_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : `up to ${fmt(s.max_ug_kg)} µg/kg (range; lowest below the limit)`;
  if (s.statistic === 'p90' && Number.isFinite(s.value_ug_kg)) return `${fmt(s.value_ug_kg)} µg/kg (90th percentile)`;
  if (Number.isFinite(s.value_ug_kg)) return `${fmt(s.value_ug_kg)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'} ${s.reported?.unit ?? ''}`.trim();
}

const regionType = k => ({ growing_origin: 'Reported growing area', purchase_market: 'Purchase or reporting market; growing area not identified', treatment: 'Irrigation treatment within one orchard study',
  material_or_preparation: 'Product bought at retail', site_or_habitat: 'Growing site within one study', cultivar: 'Cultivar within one study' }[k] ?? 'All samples in the study');
const GROUP = {
  'afrin2020-heavy-metals-fruits-dhaka': g => `${g.split(',')[1]?.trim() ?? g}, Dhaka`.replace(/^(.{0,38}).*$/, '$1'),
  'amer2019-egyptian-fruits-heavy-metals': g => `${g} markets, Egypt`, 'bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing': g => /amateur/i.test(g) ? 'Amateur growers, Romania' : 'Market, Romania',
  'bramwell2022-urban-garden-produce-lead': () => 'Allotments, Newcastle, UK', 'cfs2012-hktds-inorganic-arsenic': () => 'Hong Kong retail', 'cfs2013-hktds-metallic-contaminants': () => 'Hong Kong retail',
  'elbagermi2012-misurata-fruits-vegetables-metals': () => 'Misurata markets, Libya', [FDA16]: g => /organic red/i.test(g) ? 'Organic Red Delicious, USA' : /^red delicious/i.test(g) ? 'Red Delicious, USA' : /8 of 10/.test(g) ? '8 of 10 US and NZ apples' : 'Ten US and NZ apples',
  'hadi2025-dried-fruits-heavy-metals-iraq': () => 'Iranian product, Iraq retail', 'houlihan2019-hbbf-whats-in-baby-food': () => 'US Total Diet Study 2014–2017', 'lee2023-south-korea-fresh-fruits-seven-metals': () => 'Supermarkets, South Korea',
  'liang2019-beijing-foodstuffs-health-risk': () => 'Beijing markets', 'mahmood2025-dried-fruit-metals': () => 'Anbar retail, Iraq', 'mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland': () => 'Imported, Polish market',
  'nasirpour2026-apple-wastewater-metals': (g, fd) => { const y = /year-2|Y2/.test(fd.id + g) ? 'Y2' : 'Y1'; return /fertili/i.test(g) ? `Well water + fertiliser, ${y}` : /50/.test(g) ? `Wastewater 50%, ${y}` : /100/.test(g) ? `Wastewater 100%, ${y}` : `Well water, ${y}`; },
  'rahim2020-toxic-heavy-metals-fruits-pakistan': () => 'Khyber Pakhtunkhwa markets', 'reczajska2005-chromium-plant-foods-poland': g => /unspiked|recovery/i.test(g) ? 'Recovery-test sample, Poland' : 'Polish plantations',
  'rezaei2020-fruits-markazi-essential-elements': g => /total/i.test(g) ? 'Six Markazi orchards' : `${g.split(' (')[0]} orchards, Iran`, 'rusin2021-vegetables-fruits-cadmium-lead-poland': () => 'Polish market',
  'salhotra2017-vegetables-fruits-heavy-metals': () => 'Jagdalpur market, India', 'sembratowicz2010-nitrates-pb-cd-lublin-fruits': g => /centre/i.test(g) ? 'Lublin city allotments' : 'Lublin outskirts allotments',
  'unaegbu2016-fruit-heavy-metals-enugu': g => /south/i.test(g) ? 'South African apple, Enugu' : 'US apple, Enugu', 'wang2020-jilin-total-diet-metals': g => /songhua/i.test(g) ? 'Songhua River area, Jilin' : /other/i.test(g) ? 'Other areas, Jilin' : 'Jilin province',
  'altunay2023-cadmium-food-turkey': () => 'Sivas greengrocer, Turkey', 'atsdr2005-tin-toxicological-profile': () => 'French diet study (quoted)', 'authors2017-levels-dietary-intake-and-health-risk-of-potentially': () => 'Khyber Pakhtunkhwa markets',
};
const GEMS_GROUP = g => g.replace('WHO region ', '').replace('; random sampling', ', random').replace('; targeted sampling', ', targeted').replace('; unknown', ', sampling unstated').replace('; whole fruit incl. core', ', whole fruit').replace('; washed', ', washed').replace('; unwashed', ', unwashed');
function periodOf(x, fd) {
  if (fd.years) return fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`;
  if (/^nasirpour/.test(x.source_id)) return /year-2/.test(fd.id) ? '2022' : '2021';
  if (/^houlihan/.test(x.source_id)) return '2014–2017';
  if (x.source_id === FDA16) return 'Collection date unreported';
  const ys = [...String(x.study.collection_period ?? '').matchAll(/(?<!\d)(19|20)\d{2}(?!\d)/g)].map(m => +m[0]);
  const m = String(x.study.collection_period ?? '').match(/(20\d{2})-(\d{2})(?!\d)/);
  if (m) ys.push(2000 + +m[2]);
  if (!ys.length) return 'Collection date unreported';
  const lo = Math.min(...ys), hi = Math.max(...ys);
  return lo === hi ? String(lo) : `${lo}–${hi}`;
}

export function appleRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      const hold = holdFor(fd.id), mat = materialOf(x, fd), bk = basisKey(x, fd);
      const group = x.source_id === GEMS ? GEMS_GROUP(fd.group) : x.source_id === FDA ? 'United States, national' : GROUP[x.source_id]?.(fd.group, fd) ?? fd.group;
      const value = num(fd.value_ug_kg);
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: REF_MATERIALS[mat], material_key: mat, material_full: fd.material, region: shortLabel(group), group_full: fd.group, group_kind: fd.group_kind, period: periodOf(x, fd),
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.study.sampling_unit || 'samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText({ ...fd, value_ug_kg: value }),
        value, unit: 'µg/kg', reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: BASIS[bk].label, basis_key: bk, display_basis: BASIS[bk].label, short_basis: BASIS[bk].short,
        method: x.study.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, fd.integrity_flag && !hold ? `Source check: ${fd.integrity_flag}` : null, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows from the same source share its laboratory and sampling frame; they are not independent studies.',
        conversion: { method: fd.conversion || 'none' }, hold, primary: { ...fd, value_ug_kg: value }, extraction_file: f, lod_ug_kg: lodOf(fd),
      });
    }
  }
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'tHg', 'Ni', 'Cr', 'Al', 'Sn', 'Sb', 'U'];
  const matOrder = ['fresh', 'fresh_unwashed', 'peeled', 'dried', 'extract'];
  const statRank = s => ['median', 'mean', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'p90', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : 2;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || matOrder.indexOf(a.material_key) - matOrder.indexOf(b.material_key) || tier(a) - tier(b)
    || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full, 'en', { numeric: true }) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-apple-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
const BASIS_LABEL = { fw: 'As sold, as eaten or fresh weight', dw: 'Dry weight', unstated: 'Basis not stated by the source', per_litre: 'Per litre of extract' };
export const refKey = (a, m, b) => `apple-${m}-${b}-${a}`;
const scopeFor = (analyte, m, b) => ({ ingredient: 'apple', analyte, basis: `${REF_MATERIALS[m] ?? m}; ${BASIS_LABEL[b]}, µg/kg; no moisture conversion`, statistic: 'subgroup median concentration', market: 'International apple evidence library', period: 'Source collection years 1998–2023' });

function medianOf(records) {
  const scope = { ingredient: 'apple', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

// Reference units: GEMS/Food and FDA TDS records become HMI-calculated subgroup medians (GEMS per WHO
// region, sampling type, portion label and collection year; FDA per collection). FDA 2016 raw apples
// form one subgroup. Published subgroup medians (Reczajska, Bramwell) enter once as summary units.
// Means, ranges and maxima never enter; held values never enter.
export function referenceUnits(root, rows) {
  const units = {}, audit = [];
  const add = (k, u) => { (units[k] ??= []).push(u); };
  const recs = load(root, 'primary/gemsfood-apple-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review) { audit.push({ unit: r.item_id, admitted: false, reason: 'held for value review' }); continue; }
    const mat = r.material === 'dried' ? 'dried' : r.variant === 'unwashed' ? 'fresh_unwashed' : 'fresh';
    const k = `${r.analyte}|${mat}|${r.variant}|${r.material}|${r.region}|${r.representativeness}|${r.year}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, mat, variant, gm, region, rep, year] = k.split('|');
    const med = medianOf(rs);
    const finding = `${GEMS}:${a}:${gm}${variant ? '-' + variant : ''}:${region.toLowerCase().replace(/[^a-z0-9]+/g, '-')}:${rep.split(' ')[0].toLowerCase()}:median`;
    add(refKey(a, mat, 'fw'), { ...scopeFor(a, mat, 'fw'), id: `gems-${mat}${variant ? '-' + variant : ''}-${region}-${rep.split(' ')[0]}-${year}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${rep}${variant ? ' ' + variant : ''} ${year}`,
      lower: med.lower, upper: med.upper, n: rs.length, locator: `primary/gemsfood-apple-records.csv: ${a}, ${REF_MATERIALS[mat]}${variant ? ' (' + variant + ')' : ''}, ${region}, ${rep}, ${year} (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median', result_finding: finding });
  }
  // FDA TDS: one subgroup median per national collection.
  const fda = load(root, `extraction/${FDA}.json`);
  for (const a of [...new Set(fda.sample_values.map(s => s.analyte))]) {
    for (const coll of [...new Set(fda.sample_values.map(s => s.group))]) {
      const rs = fda.sample_values.filter(s => s.analyte === a && s.group === coll);
      const med = medianOf(rs.map(s => ({ lower: s.lower_ug_kg, upper: s.upper_ug_kg })));
      add(refKey(a, 'fresh', 'fw'), { ...scopeFor(a, 'fresh', 'fw'), id: `fda-tds-${coll}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: FDA, group: `FDA TDS ${coll}`, lower: med.lower, upper: med.upper, n: rs.length,
        locator: `primary/fda-elements.txt: food 78, ${a}, ${coll} (${rs.map(s => s.locator.replace('Original FDA TSV row ', '').split(' ')[0]).join(', ')})`, evidence_kind: 'HMI-calculated subgroup median', result_finding: `${FDA}:${a}:fresh:us-national:median` });
    }
  }
  // FDA 2016: ten whole raw apples bought in the US form one subgroup per analyte.
  const f16 = load(root, `extraction/${FDA16}.json`);
  for (const a of ['iAs', 'tAs', 'DMA']) {
    const rs = f16.sample_values.filter(s => s.analyte === a);
    const med = medianOf(rs.map(s => s.censored ? { lower: 0, upper: s.bound_ug_kg } : { lower: s.value_ug_kg, upper: s.value_ug_kg }));
    const finding = rows.find(r => r.source === FDA16 && r.analyte === a && ['not_detected', 'below_LOD'].includes(r.statistic))?.finding_id;
    add(refKey(a, 'fresh', 'fw'), { ...scopeFor(a, 'fresh', 'fw'), id: `fda2016-raw-apples-${a}`.toLowerCase(), family: FDA16, group: 'Ten raw apples, US retail', lower: med.lower, upper: med.upper, n: rs.length,
      locator: 'Full Analytical Results PDF p.15 (ten apple rows); LOD table, last page', evidence_kind: 'HMI-calculated subgroup median', result_finding: finding });
  }
  // Published subgroup medians in fresh weight.
  for (const [fid, fam, grp] of [['reczajska2005-chromium-plant-foods-poland:Cr:apples-poland-2001:median', 'reczajska2005-chromium-plant-foods-poland', 'Polish plantations 2001'],
    ['bramwell2022-urban-garden-produce-lead:Pb:apples-newcastle-uas-tree-fruit:median', 'bramwell2022-urban-garden-produce-lead', 'Newcastle allotments']]) {
    const row = rows.find(r => r.finding_id === fid);
    if (!row || row.hold || !Number.isFinite(row.value)) { audit.push({ unit: fid, admitted: false, reason: row ? 'held or no value' : 'no owning row' }); continue; }
    add(refKey(row.analyte, row.material_key, row.basis_key), { ...scopeFor(row.analyte, row.material_key, row.basis_key), id: `${fam}-median`, family: fam, group: grp, lower: row.value, upper: row.value, n: row.n ?? 1, locator: row.locator, evidence_kind: 'reported subgroup median', result_finding: fid });
  }
  for (const [k, list] of Object.entries(units)) for (const u of list) {
    const hit = rows.find(r => r.finding_id === u.result_finding);
    u.result_id = hit?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${k} ${u.id}`);
  }
  for (const r of rows) if (![GEMS, FDA, FDA16].includes(r.source) && !/:median$/.test(r.finding_id)) audit.push({ unit: r.finding_id, admitted: false, reason: r.hold ? 'held after integrity check' : `${r.statistic} is not an observed subgroup median or sample value` });
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
  if (!rowTarget(r)) return r.basis_key === 'per_litre' ? 'basis_incompatible_with_all_references' : 'no_numeric_value_or_bound';
  if (['unstated', 'per_litre'].includes(r.basis_key) || (r.basis_key === 'dw' && !c.hmi.baseline.reference_id)) return 'basis_incompatible_with_all_references';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- within-study contrasts
// GEMS/Food: unwashed against washed apples from the same 1998 WPRO targeted survey; dried apple
// against fresh apple for the same WHO region, sampling type and analyte. Nasirpour: wastewater
// irrigation against well water in the same orchard and year. Wang: Songhua River area against other areas.
function contrastRef(r, rows) {
  if (r.source === GEMS && r.material_key === 'fresh_unwashed') return rows.find(x => x.source === GEMS && x.analyte === r.analyte && x.primary.variant === 'washed');
  if (r.source === GEMS && r.material_key === 'dried') {
    const rep = r.id.split(':')[4];
    return rows.find(x => x.source === GEMS && x.analyte === r.analyte && x.material_key === 'fresh' && !x.primary.variant && x.id.split(':')[3] === r.id.split(':')[3] && x.id.split(':')[4] === rep);
  }
  // Fresh apple across WHO reporting regions or sampling types within GEMS/Food: each group against the
  // largest group (EURO random sampling); that group itself against PAHO random sampling (or WPRO).
  if (r.source === GEMS && r.material_key === 'fresh') {
    const fresh = rows.filter(x => x.source === GEMS && x.analyte === r.analyte && x.material_key === 'fresh' && !x.primary.variant && x !== r);
    const anchor = (reg) => fresh.find(x => x.id.split(':')[3] === reg && x.id.split(':')[4] === 'random');
    return r.id.split(':')[3] === 'euro' && r.id.split(':')[4] === 'random' && !r.primary.variant ? (anchor('paho') ?? anchor('wpro')) : (r.primary.variant === 'washed' ? rows.find(x => x.source === GEMS && x.analyte === r.analyte && x.material_key === 'fresh_unwashed') : anchor('euro'));
  }
  if (r.source.startsWith('nasirpour') && !/control-well-water-year/.test(r.id)) { const y = r.id.match(/year-(\d)/)?.[1]; return rows.find(x => x.source === r.source && x.analyte === r.analyte && new RegExp(`control-well-water-year-${y}`).test(x.id)); }
  if (r.source.startsWith('wang2020') && /songhua/.test(r.id)) return rows.find(x => x.source === r.source && x.analyte === r.analyte && /other-area/.test(x.id) && x.statistic === r.statistic);
  return null;
}
function contrast(r, rows) {
  const t = rowTarget(r), ref = contrastRef(r, rows), rt = ref && !ref.hold && rowTarget(ref);
  const none = { direction: 'summary', label: 'No same-study contrast', detail: 'This source reports no compatible same-study comparison group with the same statistic.', context: 'Within-study contrasts compare forms, preparation or growing conditions inside one source using the same statistic and method.' };
  if (!t || !ref || !rt) return none;
  const ctx = r.source === GEMS && r.material_key === 'dried' ? 'Same dataset, WHO region, sampling type, analyte and statistic; dried and fresh apple are different foods and drying concentrates what the fruit carried. A descriptive difference, not a significance test or safety judgment.'
    : r.source === GEMS && /wash/.test(r.primary.variant ?? '') ? 'Same 1998 targeted survey, analyte and statistic; unwashed and washed apples. Reporting-limit bounds retained. Descriptive only.'
    : r.source === GEMS ? 'Same dataset, analyte and statistic; fresh apple submitted from different WHO reporting regions or under different sampling types. Reporting regions are not growing areas, and laboratories and reporting limits differ. A descriptive difference, not a significance test or safety judgment.'
    : r.source.startsWith('nasirpour') ? 'Same orchard, cultivar (Golden Delicious), year, method and statistic; values read from the paper’s bar chart, dry weight. A descriptive difference, not a significance test.'
    : 'Same total diet study, method and statistic; apples sampled in the two areas of Jilin province as consumed. A descriptive difference, not a significance test.';
  if (!t.exact || !rt.exact) {
    const overlap = !(t.upper < rt.lower || t.lower > rt.upper);
    return { direction: overlap ? 'bounded' : (t.upper < rt.lower ? 'lower' : 'higher'), label: overlap ? 'Limits overlap' : `${fmt(t.lower)}–${fmt(t.upper)} versus ${fmt(rt.lower)}–${fmt(rt.upper)} µg/kg`, kind: 'food_form', target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`,
      detail: `${r.food} (${r.region}): ${r.finding_text}; reference ${ref.food} (${ref.region}): ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`, context: ctx };
  }
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.food} (${r.region}): ${r.finding_text}; reference ${ref.food} (${ref.region}): ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`, context: ctx };
}

export function appleOccurrence(root) {
  const { rows, parity } = appleRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = Object.entries(units).map(([key, list]) => {
    const [, m, b, a] = key.match(/^apple-(.+)-(fw|dw|unstated)-([A-Za-z]+)$/);
    const fams = [...new Set(list.map(u => u.family))];
    return {
      key, scope: scopeFor(a, m, b), referenceUnits: list, accepts: r => r.analyte === a && r.material_key === m && r.basis_key === b && !r.hold && !!rowTarget(r),
      label: `HMI apple ${a} reference · ${REF_MATERIALS[m]}`,
      targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivitySubgroup: 'region', sensitivityLabel: 'Equal weight per WHO region or survey',
      methods: `HMI pools subgroup medians of ${REF_MATERIALS[m].toLowerCase()} on an as-sold or fresh-weight basis: individual WHO GEMS/Food results summarised per WHO region, sampling type and collection year${fams.includes(FDA) ? ', FDA Total Diet Study composites summarised per national collection' : ''}${fams.includes(FDA16) ? ', the median of ten raw apples in the FDA 2016 survey' : ''}${fams.some(f => /reczajska|bramwell/.test(f)) ? ', and published survey medians' : ''}. Each sampling family has equal total weight. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations. Peeled, unwashed and dried apple, dry-weight results and results without a stated basis are kept out of this reference.`,
      limitations: `${fams.length === 1 ? `${fams[0] === GEMS ? 'GEMS/Food' : fams[0]} is the only compatible sampling family for ${REF_MATERIALS[m].toLowerCase()} and this metal in the completed apple ledger, so this single-family reference cannot represent other markets.` : `${fams.length} sampling families with different designs; none is a probability sample of world supply.`} WHO regions are reporting regions, not growing areas. Many results are non-detects with differing limits, which widens the bounds. A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : r.basis_key === 'per_litre' ? 'Results are per litre of a laboratory juice extract, which cannot be placed on a per-kilogram fruit reference.'
    : !rowTarget(r) ? 'The source reports no central value or numerical limit for this statistic; its position cannot be identified.'
    : r.basis_key === 'unstated' ? 'The source does not state (or contradicts itself on) whether results are fresh or dry weight, so no reference applies.'
    : r.basis_key === 'dw' ? 'Dry-weight results have no compatible dry-weight apple reference in the ledger.'
    : 'No compatible reference units for this form of apple and metal.');
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
  const unit_list = Object.entries(units).flatMap(([k, list]) => list.map(u => ({ id: u.id, analyte: u.analyte ?? k.split('-').pop(), ref_key: k, result_id: u.result_id })));
  return { ...compiled, parity, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.entries(units).map(([k, u]) => [k, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}

export const appleOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI apple reference (by form)' }, { value: 'contrast', label: 'Same-study form or treatment contrast' }],
  caption: 'Apple findings from WHO GEMS/Food and FDA monitoring, total diet studies and every extracted market, orchard and processing study, in µg/kg with each source’s form of apple, basis, statistic and censoring retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one form of apple, group and metal. Fresh apple, peeled apple, unwashed apple and dried apple are kept apart, and dry-weight results never share a reference with fresh or as-sold results. Ratings place a result against an HMI reference built from monitoring results for the same form of apple. Same-study contrasts compare unwashed with washed apples, dried with fresh apple, wastewater-irrigated with well-water apples, or two areas of one diet study. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'The form of apple analysed: fresh (peel on or not stated), peeled, unwashed, dried, or a laboratory juice extract.', 'Collection scope': 'WHO reporting region and sampling type, purchase market, orchard or growing site as the source reports; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic and basis. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the HMI reference for the same form of apple. Higher or Lower compare a form or treatment with its own study’s comparison group.', Evidence: 'Original values, basis, locators, methods, holds and limitations.' },
};
