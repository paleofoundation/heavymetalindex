// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row. Raw root, cooked
// root, cooked dried cassava, flour, gari, fufu and starch/tapioca stay separate
// materials, and dry-weight, fresh/as-sold and unstated bases never share a reference.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';
import { sourceRecordPath } from './overlay.mjs';

export const auditDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava';
const GEMS = 'who-gemsfood-heavy-metal-contaminants';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Values that fail a primary-text integrity check stay visible as reported findings
// but never enter a reference or receive a rating (terminal reason value_fails_source_integrity_check).
export const holds = [
  { match: id => /^albishi2026.*:tAs:/.test(id), reason: 'Arsenic at 6–11 µg/kg was measured by atomic absorption after open hot-plate digestion with no hydride generation, detection limit, reference material or recovery; the paper’s own method cannot support values that low.' },
  { match: id => /^bhunia2023.*:tAs:/.test(id), reason: 'Arsenic at 6–12 µg/kg was measured by air–acetylene flame atomic absorption with no hydride generation, detection limit, reference material or recovery; the paper’s own method cannot support values that low.' },
  { match: id => /^enyoh2023.*:(Cr|Ni):.*:mean$/.test(id), reason: 'Chromium of 30–70 mg/kg and nickel of 230–1,170 mg/kg in garri are implausible for a cassava food; the X-ray fluorescence method was calibrated only against a mineral-dust reference and the paper’s own nickel intake figures do not reproduce.' },
  { match: id => /^fobi2025.*:tAs:.*:mean$/.test(id), reason: 'Arsenic of 1–20 µg/kg was measured by atomic absorption with no hydride generation, detection limit or reference material; the paper’s own method cannot support values that low.' },
  { match: id => /^adjeimensah2021.*:Cd:/.test(id), reason: 'The cadmium table footnote gives a detection limit of 0.0000 ppb, which contradicts the reported less-than values; no usable bound exists.' },
  { match: id => /^adjeimensah2021.*:Pb:obuasi-roasted:/.test(id), reason: 'Roasted cassava lead is printed as 1.61 mg/kg, but the paper’s exposure table implies about 0.16 mg/kg and its stated 33.4% roasting reduction matches neither.' },
  { match: id => /^iyabo2015.*:Cd:fried-cassava-garri:/.test(id), reason: 'The garri cadmium cell prints both “less than detection limit” and 0.02 mg/kg, while the stated cadmium detection limit is 0.0009 mg/kg; the cell contradicts itself.' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;

const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
function sourceMeta(root, id) {
  const p = path.join(root, sourceRecordPath(root, id));
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  const label = id === GEMS ? 'WHO GEMS/Food' : { 'ezema2023-evaluation-of-pesticide-residues-and-heavy-metals': 'Omeje et al. 2024', 'iyabo2015-ekiti-staple-foods-metals': 'Iyabo et al. 2015',
    'albishi2026-cassava-flour-biofortification': 'Albishi et al. 2026', 'romero-crespo2023-trace-elements-crops-ecuador-mining': 'Romero-Crespo et al. 2023', 'bhunia2023-open-access-potential-toxic-levels-of-cyanide': 'Jacob et al. 2023',
    'adjorlologasokpoh2012-mercury-cassava-goldmines-ghana': 'Adjorlolo-Gasokpoh et al. 2012', 'fobi2025-boiling-cassava-cocoyam-kade-ghana': 'Fobi et al. 2025',
    'enyoh2023-garri-microplastics-ptes-west-africa': 'Enyoh et al. 2023', 'borteysam2015-tarkwa-cassava-plantain-soil-metals': 'Bortey-Sam et al. 2015', 'orisakwe2012-owerri-food-crops-fruits-metals': 'Orisakwe et al. 2012', 'adjeimensah2021-ghana-mining-home-processing-crops': 'Adjei-Mensah et al. 2021' }[id] ?? id;
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}

// Material scope: the food analysed, never pooled across forms.
const MATERIAL = [
  [/peel-a-periderm/, 'peel', 'Cassava peel (outer skin)'],
  [/peel-b-cortex/, 'peel', 'Cassava peel (inner cortex)'],
  [/boiled/, 'boiled', 'Boiled cassava'],
  [/fried cassava \(peeled/, 'fried', 'Fried cassava'],
  [/roasted cassava/, 'roasted', 'Roasted cassava'],
  [/gems.*:root:|fresh cassava tuber|edible part|root flesh|cassava root, raw|unprocessed cassava/, 'root', 'Cassava root'],
  [/cooked_root/, 'cooked_root', 'Fresh cassava, cooked'],
  [/cooked_dry/, 'cooked_dry', 'Dried cassava, cooked'],
  [/:starch:/, 'starch', 'Cassava starch / tapioca flour'],
  [/gems.*:tapioca:/, 'tapioca', 'Tapioca, form not stated'],
  [/garri|gari/, 'gari', 'Gari'],
  [/fufu/, 'fufu', 'Fufu'],
  [/bio-fortified/, 'flour_treated', 'Treated cassava flour'],
  [/lafun/, 'flour', 'Fermented cassava flour (lafun)'],
  [/flour/, 'flour', 'Cassava flour'],
];
function materialOf(fd) {
  const s = `${fd.id.replace(GEMS, 'gems')} ${fd.material}`.toLowerCase();
  for (const [rx, key, label] of MATERIAL) if (rx.test(s)) return { key, label };
  throw Error(`No material scope for ${fd.id}`);
}
// Basis scope: GEMS "As is"/"As consumed" and stated fresh weight are the same as-sold layer.
function basisOf(fd, x) {
  // Bortey-Sam 2015 labels its tables wet weight but its methods dry weight; the basis is unresolved.
  if (x.source_id.startsWith('borteysam')) return { key: 'unstated', label: 'Basis contradictory in source (dry or wet weight)', short: 'Basis unresolved' };
  const b = String(fd.basis || x.study.basis || '').toLowerCase();
  if (/dry weight/.test(b) && !/unstated/.test(b)) return { key: 'dw', label: 'Dry weight', short: 'Dry weight' };
  if (x.source_id === GEMS || /^(fresh weight|as sold)/.test(b)) return { key: 'fw', label: 'As sold, as eaten or fresh weight', short: 'As sold / fresh' };
  return { key: 'unstated', label: 'Basis not stated by the source', short: 'Basis not stated' };
}

export function shortLabel(text, max = 40) {
  let t = String(text).trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
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
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (bounds)`; }
  if (s.statistic === 'min' && Number.isFinite(s.min_ug_kg)) return `${fmt(s.min_ug_kg)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(s.max_ug_kg)) return `${fmt(s.max_ug_kg)} µg/kg (maximum)`;
  if (s.statistic === 'range' && Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg)) return `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)`;
  if (Number.isFinite(s.value_ug_kg)) return `${fmt(s.value_ug_kg)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`;
}

const regionType = k => ({ growing_origin: 'Reported growing area', purchase_market: 'Purchase or reporting market; growing area not identified', treatment: 'Processing treatment within one study',
  material_or_preparation: 'Food item bought from vendors', site_or_habitat: 'Field site within one study' }[k] ?? 'All samples in the study');
const GROUP_LABEL = { 'ezema2023-evaluation-of-pesticide-residues-and-heavy-metals': 'Nsukka market, Nigeria', 'romero-crespo2023-trace-elements-crops-ecuador-mining': 'Mining-area orchard, Ecuador' };
// Sources whose subgroup labels are long sentences get short, reader-facing scope labels.
function groupLabel(sid, fd) {
  const g = fd.group;
  if (sid.startsWith('adjorlolo')) return { 'entrance-bogoso': 'Bogoso mine entrance, 1.5 km', 'dumasi-site-a': 'Dumasi, 5.5 km from mine', 'river-bogo-bank': 'River Bogo bank, 8.4 km', 'prestea-ankobra-before-bridge': 'Prestea, Ankobra, 14 km' }[fd.id.split(':')[2].replace(/-(flesh|peel-.*)$/, '')] ?? g;
  if (sid.startsWith('fobi')) return `Kade mining area, ${g.match(/P\d/)?.[0] ?? g}`;
  if (sid.startsWith('adjeimensah')) return `${g.split(':')[0]} mining town`;
  if (sid.startsWith('borteysam')) return /30|above|exceed/i.test(g) ? 'Tarkwa farms, samples above 300 µg/kg' : 'Tarkwa farms, 11 communities';
  if (sid.startsWith('orisakwe')) return 'Owerri area, Nigeria';
  if (sid.startsWith('enyoh')) return { s1: 'S1 open market, Nigeria', s2: 'S2 supermarket, Nigeria', s3: 'S3 shop, Japan', s4: 'S4 shop, Japan', s5: 'S5 yellow garri, Japan' }[fd.id.split(':')[2]] ?? g;
  return null;
}
const GEMS_GROUP = g => g.replace('WHO region ', '').replace('; random sampling', ', random').replace('; unknown', ', sampling unstated');

export function cassavaRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      const hold = holdFor(fd.id), mat = materialOf(fd), basis = basisOf(fd, x);
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`)
        : ({ 'ezema2023-evaluation-of-pesticide-residues-and-heavy-metals': '2022', 'romero-crespo2023-trace-elements-crops-ecuador-mining': '2021', 'albishi2026-cassava-flour-biofortification': '2024–2025', 'fobi2025-boiling-cassava-cocoyam-kade-ghana': '2024', 'adjeimensah2021-ghana-mining-home-processing-crops': '2019' }[x.source_id] ?? 'Collection date unreported');
      const group = x.source_id === GEMS ? GEMS_GROUP(fd.group) : groupLabel(x.source_id, fd) ?? GROUP_LABEL[x.source_id] ?? fd.group.replace(/^(K\d)—/, '$1 ').replace(/^all five Oke Ogun markets.*/, 'All five Oke Ogun markets').replace(/^Control A:.*/, 'Control A (unsoaked)').replace(/^Control B.*/, 'Control B (water-soaked)').replace(/^(F\d+):.*/, (m, f) => `${f} (${fd.group.split(': ')[1]})`);
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: mat.label, material_key: mat.key, material_full: fd.material, region: shortLabel(group), group_full: fd.group, group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: fd.n ?? null, sampling_unit: x.study.sampling_unit || 'samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: basis.label, basis_key: basis.key, display_basis: basis.label, short_basis: basis.short,
        method: x.study.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, fd.integrity_flag && !hold ? `Source check: ${fd.integrity_flag}` : null, fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows from the same source share its laboratory and sampling frame; they are not independent studies.',
        conversion: { method: fd.conversion || 'none' }, hold, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr', 'Al', 'Sn'];
  const matOrder = ['root', 'peel', 'boiled', 'fried', 'roasted', 'cooked_root', 'cooked_dry', 'flour', 'gari', 'fufu', 'starch', 'tapioca', 'flour_treated'];
  const statRank = s => ['median', 'mean', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : 1;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || matOrder.indexOf(a.material_key) - matOrder.indexOf(b.material_key) || tier(a) - tier(b)
    || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full, 'en', { numeric: true }) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-cassava-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
const ANALYTES = ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr', 'Al', 'Sn'];
export const REF_MATERIALS = { root: 'Cassava root', cooked_root: 'Fresh cassava, cooked', cooked_dry: 'Dried cassava, cooked', flour: 'Cassava flour', starch: 'Cassava starch / tapioca flour', tapioca: 'Tapioca, form not stated' };
const BASIS_LABEL = { fw: 'As sold, as eaten or fresh weight', dw: 'Dry weight', unstated: 'Basis not stated by the source' };
export const refKey = (a, m, b) => `cassava-${m}-${b}-${a}`;
const scopeFor = (analyte, m, b) => ({ ingredient: 'cassava', analyte, basis: `${REF_MATERIALS[m] ?? m}; ${BASIS_LABEL[b]}, µg/kg; no moisture conversion`, statistic: 'subgroup median concentration', market: 'International cassava evidence library', period: 'Source collection years 2003–2023' });

function medianOf(records) {
  const scope = { ingredient: 'cassava', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

// Reference units: GEMS/Food records become HMI-calculated subgroup medians per WHO region,
// sampling type and collection year. Field or processing studies are external targets only:
// a mining-area orchard sample and laboratory-made experimental flours do not describe
// ordinary cassava occurrence (as with mining-area rice in the Rice reference).
export function referenceUnits(root, rows) {
  const units = {}, audit = [];
  const add = (k, u) => { (units[k] ??= []).push(u); };
  const recs = load(root, 'primary/gemsfood-cassava-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review) { audit.push({ unit: r.item_id, admitted: false, reason: 'held for value review' }); continue; }
    const k = `${r.analyte}|${r.material}|${r.region}|${r.representativeness}|${r.year}`;
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, m, region, rep, year] = k.split('|');
    const med = medianOf(rs);
    const finding = `${GEMS}:${a}:${m}:${region.toLowerCase().replace(/[^a-z0-9]+/g, '-')}:${rep.split(' ')[0].toLowerCase()}:median`;
    add(refKey(a, m, 'fw'), { ...scopeFor(a, m, 'fw'), id: `gems-${m}-${region}-${rep.split(' ')[0].toLowerCase()}-${year}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: GEMS, group: `${region} ${rep} ${year}`,
      lower: med.lower, upper: med.upper, n: rs.length, locator: `primary/gemsfood-cassava-records.csv: ${a}, ${REF_MATERIALS[m]}, ${region}, ${rep}, ${year} (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median', result_finding: finding });
  }
  // Market surveys printing one value per purchase market: each market is its own subgroup.
  for (const sid of ['bhunia2023-open-access-potential-toxic-levels-of-cyanide']) {
    const x = load(root, `extraction/${sid}.json`);
    for (const s of x.sample_values || []) {
      const fid = `${sid}:${s.analyte}:${s.group.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^k(\d)-/, 'k$1-')}:sample_value`;
      const row = rows.find(r => r.finding_id === fid) ?? rows.find(r => r.source === sid && r.analyte === s.analyte && r.group_full === s.group && r.statistic === 'sample_value');
      if (!row || row.hold) { audit.push({ unit: `${sid}:${s.sample}:${s.analyte}`, admitted: false, reason: row ? 'held' : 'no owning row' }); continue; }
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      add(refKey(s.analyte, row.material_key, row.basis_key), { ...scopeFor(s.analyte, row.material_key, row.basis_key), id: `${sid}-${s.sample}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-'), family: sid, group: s.group,
        lower, upper, n: 1, locator: s.locator, evidence_kind: 'reported market value', result_finding: row.finding_id });
    }
  }
  for (const [k, list] of Object.entries(units)) for (const u of list) {
    const hit = rows.find(r => r.finding_id === u.result_finding);
    u.result_id = hit?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${k} ${u.id}`);
  }
  for (const r of rows) if (r.source !== GEMS && !r.source.startsWith('bhunia')) audit.push({ unit: r.finding_id, admitted: false, reason: r.source.startsWith('romero') ? 'Mining-area orchard sample: an external target, not ordinary occurrence.' : r.source.startsWith('albishi') ? 'Laboratory-made flour from one farm lot under experimental treatments: an external target, not ordinary occurrence.' : 'Reported basis not stated; cannot join a fresh- or dry-weight reference.' });
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
  if (r.basis_key === 'unstated' || (r.basis_key === 'dw' && !c.hmi.baseline.reference_id)) return 'basis_incompatible_with_all_references';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- within-study contrasts
// Albishi: each flour against its un-soaked control (Control A). GEMS/Food: in Africa's cooked
// foods, dried cassava against fresh cassava for the same region, year, analyte and statistic.
function contrastRef(r, rows) {
  if (r.source.startsWith('albishi') && !/:control-a:/.test(r.id)) return rows.find(x => x.source === r.source && x.analyte === r.analyte && /:control-a:/.test(x.id));
  if (r.source === GEMS && r.material_key === 'cooked_dry') return rows.find(x => x.source === GEMS && x.analyte === r.analyte && x.material_key === 'cooked_root');
  // Ghana mining areas: peel against the flesh of roots from the same site; processed against unprocessed root from the same town.
  if (r.source.startsWith('adjorlolo') && r.material_key === 'peel') return rows.find(x => x.source === r.source && x.analyte === r.analyte && x.material_key === 'root' && x.region === r.region);
  if (r.source.startsWith('adjeimensah') && r.material_key !== 'root') return rows.find(x => x.source === r.source && x.analyte === r.analyte && x.material_key === 'root' && x.region === r.region);
  return null;
}
function contrast(r, rows) {
  const t = rowTarget(r), ref = contrastRef(r, rows), rt = ref && !ref.hold && rowTarget(ref);
  const none = { direction: 'summary', label: 'No same-study contrast', detail: 'This source reports no compatible same-study comparison group with the same statistic.', context: 'Within-study contrasts compare forms or treatments inside one source using the same statistic and method.' };
  if (!t || !ref || !rt) return none;
  if (!t.exact || !rt.exact) {
    const overlap = !(t.upper < rt.lower || t.lower > rt.upper);
    return { direction: overlap ? 'bounded' : (t.upper < rt.lower ? 'lower' : 'higher'), label: overlap ? 'Limits overlap' : `${fmt(t.lower)}–${fmt(t.upper)} versus ${fmt(rt.lower)}–${fmt(rt.upper)} µg/kg`, kind: 'food_form', target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`,
      detail: `${r.food}: ${r.finding_text}; reference ${ref.food}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`, context: 'Same source, analyte and statistic; reporting-limit bounds retained. Descriptive only.' };
  }
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.food} (${r.region}): ${r.finding_text}; reference ${ref.food} (${ref.region}): ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: r.source === GEMS ? 'Same dataset, WHO region, collection year, analyte and statistic; cooked dried and cooked fresh cassava are different foods. A descriptive difference, not a significance test or safety judgment.'
      : r.source.startsWith('adjorlolo') ? 'Same study, site, method and statistic; peel and flesh of roots from the same plants. Basis not stated by the source. A descriptive difference, not a significance test.'
      : r.source.startsWith('adjeimensah') ? 'Same study, town, method and statistic; processed and unprocessed portions of the same peeled roots, not corrected for water lost or gained. A descriptive difference, not a significance test.'
      : 'Same study, cultivar, farm lot, method and statistic; repeat determinations of one lot, not independent samples. A descriptive difference, not a significance test or safety judgment.' };
}

export function cassavaOccurrence(root) {
  const { rows, parity } = cassavaRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = Object.entries(units).map(([key, list]) => {
    const [, m, b, a] = key.match(/^cassava-(.+)-(fw|dw|unstated)-([A-Za-z]+)$/);
    return {
      key, scope: scopeFor(a, m, b), referenceUnits: list, accepts: r => r.analyte === a && r.material_key === m && r.basis_key === b && !r.hold && !!rowTarget(r),
      label: `HMI cassava ${a} reference · ${REF_MATERIALS[m]}`,
      targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivitySubgroup: 'region', sensitivityLabel: 'Equal weight per WHO region',
      methods: `HMI pools subgroup medians of individual WHO GEMS/Food ${REF_MATERIALS[m].toLowerCase()} results, one unit per WHO region, sampling type and collection year, with per-market values from market surveys of the same form where they exist, in the result basis as reported (as sold or as eaten). Each sampling family has equal total weight. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations. Other forms of cassava, dry-weight results and results without a stated basis are kept out of this reference.`,
      limitations: `${new Set(list.map(u => u.family)).size === 1 ? `${list[0].family === GEMS ? 'GEMS/Food' : 'One market survey'} is the only compatible sampling family for ${REF_MATERIALS[m].toLowerCase()} in the completed cassava ledger, so this single-family reference cannot represent other markets.` : 'Two sampling families with different designs; neither is a probability sample of world supply.'} WHO regions are reporting regions, not growing areas. Many results are non-detects with differing limits, which widens the bounds. A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : !rowTarget(r) ? 'The source reports a non-detect without a numerical limit; its position cannot be identified.'
    : r.basis_key === 'unstated' ? 'The source does not state whether results are fresh or dry weight, so no reference applies.'
    : r.basis_key === 'dw' ? 'Dry-weight results have no compatible dry-weight cassava reference in the ledger.'
    : 'No compatible reference units for this form of cassava and metal.');
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

export const cassavaOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI cassava reference (by form)' }, { value: 'contrast', label: 'Same-study form or treatment contrast' }],
  caption: 'Cassava findings from WHO GEMS/Food monitoring and every extracted field, market and processing study, in µg/kg with each source’s form of cassava, basis, statistic and censoring retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one form of cassava, group and metal. Raw root, cooked cassava, flour, gari, fufu and starch are kept apart, and dry-weight results never share a reference with fresh or as-sold results. Ratings place a result against an HMI reference built from monitoring results for the same form of cassava. Same-study contrasts compare a treated flour with its untreated control, or cooked dried with cooked fresh cassava. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'The form of cassava analysed: raw root, cooked, flour, gari, fufu, starch or tapioca.', 'Collection scope': 'WHO reporting region and sampling type, growing area, purchase market or processing treatment as the source reports; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic and basis. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the HMI reference for the same form of cassava. Higher or Lower compare a form or treatment with its own study’s comparison group.', Evidence: 'Original values, basis, locators, methods, holds and limitations.' },
};
