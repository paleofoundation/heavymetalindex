// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row; rows keep a source
// subgroup's statistics (mean, median, range, sample value) for one analyte separate.
// Wheat grain, durum grain, spelt/einkorn/emmer, bran, germ and processed whole grain are
// separate materials, and dry-weight results are never pooled with as-sold results
// (the Rice baseline keeps dry-mass and native-moisture layers apart in the same way).
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/wheat';
export const SLUG = 'wheat';
const GEMS = 'who-gemsfood-heavy-metal-contaminants';
const fmt = v => Number(Number(v).toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

export const MATERIALS = {
  grain: 'Wheat grain', durum_grain: 'Durum and other tetraploid wheat grain', hulled_grain: 'Spelt, einkorn and emmer grain',
  bran: 'Wheat bran', germ: 'Wheat germ', processed_grain: 'Hulled, cracked, rolled or parboiled grain',
  grain_and_flour: 'Wheat grain and flour (EU category, not separated)', bran_and_germ: 'Cereal bran and germ (EU category, not separated)',
};
const materialKey = (sid, fd) => {
  if (fd.material_key) return fd.material_key;
  if (sid === 'efsa-cadmium-contam-2009') return fd.material === 'bran' ? 'bran_and_germ' : 'grain_and_flour';
  if (sid === 'shindoh2010-cadmium-soy-sauce-miso-processing') return 'processed_grain';
  return { hulled_wheat_grain: 'hulled_grain', paired_mill_flour: 'paired_flour' }[fd.material] ?? fd.material;
};
export const basisClass = text => /dry weight|dry mass|\bdw\b|dry matter/i.test(String(text)) && !/as is|as sold/i.test(String(text)) ? 'dry' : 'native';
export const BASIS_LABEL = { dry: 'Dry weight', native: 'As sold, fresh or basis not stated' };

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating (terminal reason value_fails_source_integrity_check).
export const holds = [
  { match: id => /^alemu2022[^:]*:(Cd|Pb):imported:/.test(id) || /^alemu2022[^:]*:Pb:(all-samples|ethiopian)/.test(id), reason: 'The paper gives the imported sample’s cadmium as 151 µg/kg in Table 4 but 160 µg/kg in Table 5, and lists lead as not detected in Table 4 while the text and Table 5 report 136 µg/kg for the same sample and a mean below its own detection limit.' },
  { match: id => /^ataee2016[^:]*:Pb:/.test(id), reason: 'Every lead result (202–267 µg/kg) lies above the method’s stated linear range of 0.1–50 µg/kg, and no dilution step is described.' },
  { match: id => /^ek2017[^:]*:Cd:/.test(id), reason: 'The cadmium value (102 mg/kg by handheld X-ray fluorescence, with no detection limit or quality control) is about 700 times the EU bran limit, and the same table gives zinc and copper about ten times typical bran levels.' },
  { match: id => /^getu2022/.test(id), reason: 'The reported values imply digest concentrations below the lowest calibration standard (1 mg/L), and the cadmium standard deviation (86% of the mean on repeat readings of one composite) contradicts the stated precision below 5%.' },
  { match: id => /^heshmati2020[^:]*:Pb:all-samples-dry:/.test(id), reason: 'The dry-weight lead mean (126 µg/kg) cannot be reconciled with the wet-weight mean (123 µg/kg) and the paper’s own 11.2% moisture, which give about 139 µg/kg.' },
  { match: id => /^islam2015/.test(id), reason: 'The table is labelled fresh weight, but the samples were oven dried and no conversion back to fresh weight is described, so the basis of every value is unresolved; lead (4,800 µg/kg) and chromium are also far outside the range of the other wheat grain evidence.' },
  { match: id => /^jaishree2015/.test(id), reason: 'The unit cannot be resolved: the abstract gives mg/g, the tables give no unit and the discussion gives mg/kg dry weight; the methods describe digestion of water samples only and give no plant sampling method or sample count.' },
  { match: id => /^kumar2024[^:]*:tAs:households-11-districts:max/.test(id), reason: 'The stated maximum (775 µg/kg) lies above the top concentration band (201–500 µg/kg) of the paper’s own Figure 8B.' },
  { match: id => /^liu2025[^:]*:tAs:nanyang-basin-all:mean/.test(id), reason: 'The printed arsenic mean (1 µg/kg) is below the stated detection limit (10 µg/kg) and its standard deviation (10.27 mg/kg) is impossible; the paper’s pollution index implies about 10 µg/kg.' },
  { match: id => /^liu2025[^:]*:Cd:nanyang-basin-all:range/.test(id), reason: 'The printed cadmium minimum (80 µg/kg) exceeds the printed mean (54 µg/kg).' },
  { match: id => /^liu2025[^:]*:Pb:nanyang-basin-all:mean/.test(id), reason: 'The printed lead mean (108 µg/kg) equals the printed maximum, which is impossible with a standard deviation of 25 µg/kg; the paper’s pollution index implies about 19 µg/kg.' },
  { match: id => /^reczajska2005[^:]*:Cr:all-samples:mean/.test(id), reason: 'The overall chromium mean (39 µg/kg) is not reproduced by the sample-weighted province means in the same paper (32 µg/kg).' },
  { match: id => /^rubio2023[^:]*:(Pb|tHg):/.test(id), reason: 'The reported mean lies below the method’s own quantification limit (lead 40 µg/kg; mercury 100 µg/kg), and the treatment of results below that limit is not described.' },
  { match: id => /^salehipour2015[^:]*:tAs:/.test(id), reason: 'Arsenic was measured by ICP-OES after dry ashing at 550 °C for 8 hours, which volatilises arsenic, with no detection limit or recovery reported.' },
  { match: id => /^slepecka2017[^:]*:Cd:wheat-bran-ecological/.test(id), reason: 'The ecological bran cadmium value (about 24 mg/kg, read from a bar chart) is about 160 times the EU bran limit and is reported without any detection limit, reference material or blank; the paper’s text and figure also disagree for the bran group.' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;

// Point-source contaminated sites are shown and compared within their study but are external
// targets for the ordinary-occurrence reference, as Rice treats mining-area grain.
export const EXTERNAL = {
  'jiang2020-henan-battery-factory-crops-metals': 'Grain from a village beside a battery factory (contaminated site).',
  'xu2022-crop-grains-heavy-metals': 'Grain from fields in the Tongling copper and iron mining area (contaminated site).',
  'islam2014-bangladesh-cereals-pulses-metals': 'Fields where the authors observed battery leachate and lead casting (contaminated site).',
  'jaishree2015-effluent-irrigated-crops-metals': 'Fields irrigated with textile effluent (contaminated site).',
};
const externalFor = (sid, fd) => EXTERNAL[sid] ?? (sid === 'moradi2015-iran-isfahan-soil-crops-metals' && fd.site_context === 'contaminated_site' ? 'Fields near a steel mill (contaminated site).' : null);

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
function sourceMeta(root, id) {
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  const fixed = { [GEMS]: 'WHO GEMS/Food', 'efsa-cadmium-contam-2009': 'EFSA 2009', 'efsa2014-dietary-exposure-iAs': 'EFSA 2014' };
  const label = fixed[id] ?? `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? ''}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}
export function shortLabel(text, max = 34) {
  let t = String(text).trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text).matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
const halfLoqMedian = fd => fd.statistic === 'median' && /LOQ\/2 imputed/i.test(fd.integrity_flag || '');
export function rowTarget(row) {
  if (row.hold) return null;
  const s = row.primary;
  if (halfLoqMedian(s)) return { lower: 0, upper: 2 * s.value_ug_kg, exact: false, statistic: 'median (below quantification)' };
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(s.lod_ug_kg)) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}
const STAT_LABEL = { ucl95_mean: '95% upper confidence limit of the mean', percentile_5: '5th percentile', percentile_95: '95th percentile', exceedance_rate: 'share above limit', exceedance_count: 'samples above limit', sample_value: 'sample value', geometric_mean: 'geometric mean', below_LOD: 'below detection', not_detected: 'not detected' };
const statLabel = s => STAT_LABEL[s] ?? s.replace('_', ' ');
function findingText(s) {
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (halfLoqMedian(s)) return `median <${fmt(2 * s.value_ug_kg)} µg/kg (below quantification)`;
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (limit-bounded)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range${Number.isInteger(s.n) && /bin|households/.test(s.id) ? `, ${s.n} households` : ''})` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (['exceedance_rate', 'exceedance_count'].includes(s.statistic)) return String(s.reported?.text ?? statLabel(s.statistic)).slice(0, 120);
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${statLabel(s.statistic)}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`.slice(0, 160);
}
const regionType = k => ({ growing_origin: 'Reported growing origin', purchase_market: 'Purchase or reporting market; growing origin not identified', site_or_habitat: 'Field site', cultivar: 'Cultivar or species', material_or_preparation: 'Material or treatment within one study', season: 'Season within one study', year: 'Year within one study' })[k] ?? 'All samples in the study';

export function wheatRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      const hold = holdFor(fd.id), mat = materialKey(x.source_id, fd);
      if (!MATERIALS[mat]) throw Error(`Unknown material ${fd.material} in ${fd.id}`);
      const period = Array.isArray(fd.years) && fd.years[0] ? (fd.years[0] === fd.years.at(-1) ? String(fd.years[0]) : `${fd.years[0]}–${fd.years.at(-1)}`) : shortPeriod(x.study?.collection_period || '');
      const group = fd.group_kind === 'growing_origin' && fd.growing_origin && fd.purchase_market ? `Grown in ${fd.growing_origin}; bought in ${shortLabel(fd.purchase_market, 40)}` : String(fd.group ?? 'All samples');
      const bclass = fd.basis_class ?? basisClass(fd.basis ?? x.study?.basis);
      const approx = /figure|fig\.|chart|boxplot|box plot|approximate|read from/i.test(`${fd.locator} ${fd.notes || ''}`) && x.source_id !== GEMS;
      const external = externalFor(x.source_id, fd);
      const species = fd.species_or_type && !/unstated/.test(fd.species_or_type) ? fd.species_or_type : null;
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, material_key: mat, food: MATERIALS[mat] + (fd.cultivar ? ` (${fd.cultivar})` : ''), basis_class: bclass,
        region: shortLabel(group), group_full: group, group_kind: fd.group_kind, period, growing_origin: fd.growing_origin ?? null, purchase_market: fd.purchase_market ?? null,
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.study?.sampling_unit || 'grain samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: statLabel(fd.statistic), finding_text: findingText(fd) + (approx ? ' (read from a figure)' : ''),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: String(fd.reported?.text ?? ''),
        basis: BASIS_LABEL[bclass], display_basis: String(fd.basis ?? x.study?.basis ?? 'Not stated'), short_basis: bclass === 'dry' ? 'Dry weight' : 'As sold',
        method: x.study?.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        site_context: fd.site_context ?? null, species, external,
        limitations: [hold, fd.integrity_flag && !hold ? `Note: ${fd.integrity_flag}` : null, external ? `${external} Shown for comparison within its study; not used to build the ordinary-occurrence reference.` : null, approx ? 'Value read from a published figure; approximate.' : null, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, approx, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  const metalOrder = ['Cd', 'Pb', 'tAs', 'iAs', 'DMA', 'tHg', 'Ni', 'Cr', 'Al', 'Sn'];
  const matOrder = Object.keys(MATERIALS);
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'ucl95_mean', 'below_LOD', 'not_detected', 'range', 'min', 'max', 'percentile_5', 'percentile_95', 'exceedance_rate', 'exceedance_count'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : 1;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || matOrder.indexOf(a.material_key) - matOrder.indexOf(b.material_key) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-${SLUG}-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const ANALYTES = ['Cd', 'Pb', 'tAs', 'iAs', 'DMA', 'tHg', 'Ni', 'Cr', 'Al', 'Sn'];
export const refKey = (a, m, b) => `wheat-${m.replace(/_/g, '-')}-${b}-${a}`;
const scopeFor = (analyte, mat, bclass) => ({ ingredient: `wheat: ${MATERIALS[mat]}`, analyte, basis: `${BASIS_LABEL[bclass]}, µg/kg; no moisture conversion`, statistic: 'subgroup median concentration', market: 'International wheat evidence library', period: 'Source collection periods 1975–2023' });
function medianOf(records) {
  const scope = { ingredient: 'x', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}
// Published subgroup medians that enter references once as summary units (scientific choice per source).
const MEDIAN_UNITS = {
  'li2022-wheat-pte-guizhou-health-risk': fd => fd.group_kind === 'all_samples',
  'reczajska2005-chromium-plant-foods-poland': fd => fd.group_kind === 'growing_origin',
  'pompa2021-durum-wheat-cd-pb-hg-italy': fd => fd.group_kind === 'growing_origin',
  'stahl2017-aluminum-food-contact-part1': () => true,
  'efsa-cadmium-contam-2009': () => true,
};
// Sample values or medians that do not enter references, with the scientific reason.
const UNIT_EXCLUSIONS = {
  'li2022-guizhou-cd-grains': 'The paper prints medians only for contamination-index classes defined by the grain values themselves; such classes are not sampling subgroups, and no overall median is printed.',
  'palombieri2023-triticum-turgidum-cadmium': 'Medians are approximate readings from a box plot of a cultivar collection grown in one field trial; per-accession values are in an unavailable supplement.',
  'xu2022-crop-grains-heavy-metals': 'Medians are read from a box plot, and the fields lie in a copper and iron mining area.',
  'pirsaheb2015-iran-kermanshah-cereals-metals': 'Only the highest cadmium sample and one nickel non-detect without a limit are printed individually; a selected maximum would bias the reference.',
  'slepecka2017-ecological-cereal-heavy-metals-poland': 'The bran lead values are derived from printed three-product means rather than printed, and the conventional bran cadmium non-detect has no stated limit.',
};
export function referenceUnits(root, rows) {
  const units = {}, audit = [];
  const add = (a, m, b, u) => { const k = refKey(a, m, b); (units[k] ??= { analyte: a, material: m, basis: b, list: [] }).list.push({ ...scopeFor(a, m, b), ...u }); };
  // GEMS/Food: HMI-calculated medians per WHO region × year for each material and basis; random sampling only.
  const recs = load(root, 'primary/gemsfood-wheat-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling') continue;
    const b = r.basis_label === 'Dry weight' ? 'dry' : 'native';
    const k = `${r.analyte}|${r.material}|${b}|${r.region}|${r.year}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, m, b, region, year] = k.split('|');
    if (!ANALYTES.includes(a)) continue;
    const md = medianOf(rs);
    add(a, m, b, { id: `gems-${m}-${b}-${region}-${year}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${year}`, region, lower: md.lower, upper: md.upper, n: rs.length,
      locator: `primary/gemsfood-wheat-records.csv: ${a}, ${MATERIALS[m]}, ${BASIS_LABEL[b]}, ${region}, ${year}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  for (const f of fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort()) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted' || x.source_id === GEMS) continue;
    const sid = x.source_id;
    if (UNIT_EXCLUSIONS[sid]) { audit.push({ family: sid, admitted: false, reason: UNIT_EXCLUSIONS[sid] }); continue; }
    if (EXTERNAL[sid]) { audit.push({ family: sid, admitted: false, reason: `${EXTERNAL[sid]} External target, not an ordinary-occurrence unit.` }); continue; }
    // Published subgroup medians.
    for (const fd of x.findings) {
      if (fd.statistic !== 'median' || !MEDIAN_UNITS[sid]?.(fd) || holdFor(fd.id)) continue;
      const m = materialKey(sid, fd), b = basisClass(fd.basis ?? x.study?.basis);
      const [lower, upper] = halfLoqMedian(fd) ? [0, 2 * fd.value_ug_kg] : [fd.value_ug_kg, fd.value_ug_kg];
      add(fd.analyte, m, b, { id: `${sid}-${fd.group}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: sid, group: String(fd.group), lower, upper, n: fd.n ?? null, locator: fd.locator, evidence_kind: 'published subgroup median', finding: fd.id });
    }
    // Printed per-sample (per-variety, per-lot) values.
    for (const s of x.sample_values || []) {
      const a = s.analyte, m = materialKey(sid, s), b = basisClass(s.basis ?? x.study?.basis), unitID = `${sid}:${s.sample}:${a}`;
      if (!ANALYTES.includes(a) || !MATERIALS[m]) continue;
      const fid = x.findings.find(fd => fd.analyte === a && String(fd.group).toLowerCase() === String(s.group).toLowerCase())?.id ?? `${sid}:${a}:`;
      if (holdFor(fid) || holdFor(`${sid}:${a}:${String(s.group).toLowerCase()}:`)) { audit.push({ unit: unitID, admitted: false, reason: holdFor(fid) ?? holdFor(`${sid}:${a}:${String(s.group).toLowerCase()}:`) }); continue; }
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper)) { audit.push({ unit: unitID, admitted: false, reason: 'Non-detect without a numerical limit.' }); continue; }
      add(a, m, b, { id: `${sid}-${s.sample}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: sid, group: String(s.group || s.sample), lower, upper, n: 1, locator: s.locator, evidence_kind: 'reported sample or variety value' });
    }
  }
  // Each unit is attached to a result of its own family and scope (gate 6 ownership).
  for (const ref of Object.values(units)) for (const u of ref.list) {
    const same = rows.filter(r => r.source === u.family && r.analyte === ref.analyte && r.material_key === ref.material && r.basis_class === ref.basis);
    const hit = u.family === GEMS ? same.find(r => r.group_full.startsWith(`WHO region ${u.region};`) && /random/i.test(r.group_full))
      : (u.finding && same.find(r => r.finding_id === u.finding)) ?? same.find(r => r.group_full.toLowerCase() === u.group.toLowerCase() && ['sample_value', 'mean', 'below_LOD', 'not_detected'].includes(r.statistic)) ?? same.find(r => r.group_full.toLowerCase() === u.group.toLowerCase()) ?? same.find(r => u.group.toLowerCase().includes(r.group_full.toLowerCase()) || r.group_full.toLowerCase().includes(u.group.toLowerCase()));
    u.result_id = (hit ?? same[0])?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${u.family} ${u.id} ${ref.analyte} ${ref.material} ${ref.basis}`);
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
// A named subgroup is compared with its own study's reference group, same analyte, statistic,
// material and basis: the study total by default; the background site for Moradi; durum wheat for
// Palombieri; untreated plots for Motta-Romero; wheat for Stahl's spelt; the EU wheat grain and
// flour category for EFSA's bran and germ; and, in GEMS/Food, the wheat grain row of the same
// WHO region and sampling type for bran, germ, durum, spelt and processed grain.
const sameCore = (a, b) => a.source === b.source && a.analyte === b.analyte && a.basis_class === b.basis_class && !b.hold && a !== b;
const CONTRAST_REF = {
  'moradi2015-iran-isfahan-soil-crops-metals': (r, x) => x.site_context === 'background' && x.statistic === r.statistic,
  'palombieri2023-triticum-turgidum-cadmium': (r, x) => /^durum/i.test(x.group_full) && x.statistic === r.statistic && x.period === r.period && /\d{4}/.test(x.group_full) && x.group_full.slice(-4) === r.group_full.slice(-4),
  'motta-romero2021-wheat-cadmium-fungicide': (r, x) => /untreated/i.test(x.group_full) && x.statistic === r.statistic,
  'stahl2017-aluminum-food-contact-part1': (r, x) => x.material_key === 'grain' && x.statistic === r.statistic,
  'efsa-cadmium-contam-2009': (r, x) => x.material_key === 'grain_and_flour' && x.statistic === r.statistic,
  'efsa2014-dietary-exposure-iAs': (r, x) => x.material_key === 'grain' && x.statistic === r.statistic && x.id.split(':').pop() === r.id.split(':').pop(),
  [GEMS]: (r, x) => x.material_key === 'grain' && x.group_full === r.group_full,
};
const isContrastRef = r => {
  const special = CONTRAST_REF[r.source];
  if (r.source === GEMS) return r.material_key === 'grain';
  if (r.source === 'moradi2015-iran-isfahan-soil-crops-metals') return r.site_context === 'background';
  if (r.source === 'palombieri2023-triticum-turgidum-cadmium') return /^durum/i.test(r.group_full);
  if (r.source === 'motta-romero2021-wheat-cadmium-fungicide') return /untreated/i.test(r.group_full);
  if (r.source === 'stahl2017-aluminum-food-contact-part1') return r.material_key === 'grain';
  if (r.source === 'efsa-cadmium-contam-2009') return r.material_key === 'grain_and_flour';
  if (r.source === 'efsa2014-dietary-exposure-iAs') return r.material_key === 'grain';
  if (r.source === 'li2022-guizhou-cd-grains') return true; // classes defined by the outcome are not contrasted
  return special ? false : r.group_kind === 'all_samples';
};
function contrast(r, rows) {
  const t = rowTarget(r);
  if (!t || isContrastRef(r)) return { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total or comparison group, or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s reference group using the same statistic, material and basis.' };
  const special = CONTRAST_REF[r.source];
  const ref = rows.find(x => sameCore(r, x) && (special ? special(r, x) : x.group_kind === 'all_samples' && x.statistic === r.statistic && x.material_key === r.material_key));
  const rt = ref && rowTarget(ref);
  if (!rt) return { direction: 'summary', label: 'No same-study reference', detail: 'No compatible same-study group with the same statistic.', context: 'No cross-study pooling is used in this mode.' };
  let direction;
  if (t.upper < rt.lower) direction = 'lower'; else if (t.lower > rt.upper) direction = 'higher';
  else if (t.exact && rt.exact) direction = 'same'; else direction = 'bounded';
  const show = x => x.exact ? fmt(x.lower) : `${fmt(x.lower)}–${fmt(x.upper)}`;
  return { kind: r.material_key !== ref.material_key ? 'food_form' : r.group_kind === 'growing_origin' ? 'origin' : r.group_kind === 'year' ? 'year' : 'food_form', direction,
    label: direction === 'bounded' ? 'Limits overlap' : `${show(t)} versus ${show(rt)} µg/kg`, target: t, reference: rt, reference_form: ref.material_key !== r.material_key ? ref.food : ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.food}, ${r.region}: ${r.finding_text}; reference ${ref.food}, ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic, basis and analytical method. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function wheatOccurrence(root) {
  const { rows, parity } = wheatRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = Object.entries(units).map(([key, ref]) => {
    const fams = new Set(ref.list.map(u => u.family));
    return {
      key, scope: scopeFor(ref.analyte, ref.material, ref.basis), referenceUnits: ref.list,
      accepts: r => r.analyte === ref.analyte && r.material_key === ref.material && r.basis_class === ref.basis && !r.hold && !!rowTarget(r),
      label: `HMI wheat reference: ${MATERIALS[ref.material].toLowerCase()}, ${BASIS_LABEL[ref.basis].toLowerCase()}, ${ref.analyte} · ${fams.size} sampling ${fams.size === 1 ? 'family' : 'families'}`,
      targetStatistic: r => `${r.statistic_label} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
      methods: `HMI pools subgroup medians from every compatible ${MATERIALS[ref.material].toLowerCase()} sampling family in the evidence ledger on a ${BASIS_LABEL[ref.basis].toLowerCase()} basis: WHO GEMS/Food region-by-year medians (random sampling only), published subgroup medians and per-sample or per-variety results. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations. Dry-weight and as-sold results form separate references, and grain from point-source contaminated sites is compared within its own study but does not set the reference.`,
      limitations: `An international evidence-library reference, not a probability sample of the world wheat market. GEMS/Food regions are reporting regions, not growing origins. Many submissions are non-detects with differing limits, which widens the bounds. ${ref.basis === 'native' ? 'As-sold results combine labels such as “as is”, “as consumed”, fresh weight and unstated bases without moisture conversion. ' : ''}${fams.size === 1 ? 'Only one sampling family supplies compatible units for this scope after the complete ledger, so it cannot represent other markets. ' : ''}A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : rowTarget(r) ? 'No compatible reference units for this material, basis and analyte.'
    : ['range', 'max', 'min', 'percentile_5', 'percentile_95'].includes(r.statistic) ? 'The source reports only a range, percentile or extreme value; no single statistic can be positioned.'
    : 'The source reports a non-detect without a numerical limit or no numerical value; its position cannot be identified.');
  compiled.record.frozen = '2026-10-22';
  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = '2026-10-22';
    // A limit-bounded row is "bounded" only when it has a comparator to overlap.
    if (v.comparisons.contrast.direction === 'bounded' && !v.comparisons.contrast.reference && !v.comparisons.hmi.baseline.reference_id)
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
  const unit_list = Object.entries(units).flatMap(([key, ref]) => ref.list.map(u => ({ id: u.id, analyte: ref.analyte, material: ref.material, basis: ref.basis, ref_key: key, result_id: u.result_id })));
  return { ...compiled, parity, unit_list, unit_audit: audit, units,
    unit_counts: Object.fromEntries(Object.entries(units).map(([k, ref]) => [k, { units: ref.list.length, families: [...new Set(ref.list.map(x => x.family))] }])) };
}

export const wheatOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI wheat reference (pooled)' }, { value: 'contrast', label: 'Same-study subgroup contrast' }],
  caption: 'Wheat grain, durum, spelt, bran and germ findings from every extracted survey and monitoring dataset, in µg/kg with each source’s statistic, material, basis, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one subgroup, material and metal; a mean and a range from the same samples are separate rows. Ratings place a reported mean, median or sample result against a pooled HMI wheat reference for the same material and basis, built from every compatible sampling family. Same-study contrasts compare an origin, cultivar, site or fraction with its own study’s reference group. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Wheat grain, durum, spelt/einkorn/emmer, bran, germ or processed whole grain exactly as the source describes it; flour, bread and pasta are on their own pages.', 'Collection scope': 'Growing origin, field site, cultivar, purchase market or WHO reporting region as reported; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic. A less-than value is a reporting limit, not zero. Dry-weight and as-sold results are labelled and never pooled.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled HMI wheat reference for the same material and basis. Higher or Lower compare a subgroup with its own study’s reference group.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
