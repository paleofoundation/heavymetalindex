// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row. Each named leaf
// is its own material; fresh weight, dry weight and unstated bases never mix, and
// cooked, dried, frozen, canned and fermented forms stay separate from raw leaves.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens';
export const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });
const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));

// ---------------------------------------------------------------- leaf identity
// Canonical leaf names. Order matters: specific names before generic ones.
const LEAVES = [
  [/^(mixed |ten |all )?(green )?leaf(y)? (vegetables?|greens)|^vegetables?,? leafy|^mixed leafy|^salad\b|^leaf vegetables/i, 'Leafy vegetables, other or unspecified'],
  [/^other fresh green vegetables/i, 'Other green vegetables (mixed category)'],
  [/^lettuce \(.*(pooled|varieties)/i, 'Lettuce'],
  [/^radish \(.*tissue not stated/i, 'Radish greens (tissue not stated)'],
  [/houttuynia/i, 'Houttuynia'],
  [/^nasturtium$|tropaeolum/i, 'Nasturtium (Tropaeolum)'],
  [/african spinach|red spinach|amaranthus/i, 'Amaranth leaves'],
  [/indian spinach|basella|malabar/i, 'Malabar spinach'],
  [/\bleek\b|allium ampeloprasum|allium porrum/i, 'Leek'],
  [/helencha|enhydra/i, 'Helencha'],
  [/bathua|lamb'?s quarters|chenopodium/i, "Bathua (lamb's quarters)"],
  [/chinese spinach|een choy|yin choy/i, 'Amaranth leaves'],
  [/chinese flowering cabbage|cabbage,? chinese flowering|choy ?sum|choi ?sum|caixin|cai xin/i, 'Choy sum'],
  [/petiole chinese|cabbage,? petiole/i, 'Pak choi'],
  [/cabbage,? chinese|chinese cabbage/i, 'Chinese cabbage'],
  [/water ?spinach|kangkong|kang ?kong|ipomoea aquatica|swamp cabbage/i, 'Water spinach'],
  [/malabar|basella/i, 'Malabar spinach'],
  [/amaranth|callaloo|lal shak|red shak|green shak|chaulayi/i, 'Amaranth leaves'],
  [/swiss chard|\bchard\b|beta vulgaris var\. cicla|silverbeet|mangold/i, 'Swiss chard'],
  [/beet ?(leaf|leaves|greens|root leaves)/i, 'Beet leaves'],
  [/spinach|spinacia|palak/i, 'Spinach'],
  [/iceberg|head lettuce|crisphead|lettuce, head/i, 'Head lettuce'],
  [/romaine|cos lettuce/i, 'Romaine lettuce'],
  [/lamb'?s lettuce|corn salad|valerianella/i, "Lamb's lettuce"],
  [/lettuce|lactuca/i, 'Lettuce'],
  [/pak ?cho[iy]|bok ?cho[iy]|pak-choi|brassica rapa (subsp\.|ssp\.) chinensis|pakchoi/i, 'Pak choi'],
  [/chinese cabbage|napa|pe-tsai|brassica (rapa )?pekinensis|wombok/i, 'Chinese cabbage'],
  [/chinese kale|kai ?lan|gai ?lan|brassica oleracea var\. alboglabra/i, 'Chinese kale'],
  [/collard/i, 'Collard greens'],
  [/\bkale\b|borecole|acephala/i, 'Kale'],
  [/mustard|brassica juncea|sarson/i, 'Mustard greens'],
  [/cabbage|brassica oleracea (var\.|convar\.) capitata/i, 'Head cabbage'],
  [/watercress|water cress|nasturtium officinale/i, 'Watercress'],
  [/garden cress|lepidium|\bcress\b/i, 'Garden cress'],
  [/rocket|arugula|eruca|jarjeer/i, 'Rocket'],
  [/coriander|cilantro|coriandrum/i, 'Coriander leaves'],
  [/parsley|petroselinum/i, 'Parsley'],
  [/fenugreek|methi|trigonella/i, 'Fenugreek leaves'],
  [/mint|mentha/i, 'Mint'],
  [/dill|anethum/i, 'Dill'],
  [/lovage|levisticum/i, 'Lovage'],
  [/basil|ocimum/i, 'Basil'],
  [/celery|apium/i, 'Celery leaves'],
  [/purslane|portulaca/i, 'Purslane'],
  [/sorrel|rumex/i, 'Sorrel'],
  [/jute|corchorus|ewedu|molokhia/i, 'Jute leaves'],
  [/cassava leaf|cassava leaves|manihot/i, 'Cassava leaves'],
  [/pumpkin leaf|pumpkin leaves|ugu|telfairia|fluted pumpkin/i, 'Pumpkin leaves'],
  [/cowpea leaf|cowpea leaves/i, 'Cowpea leaves'],
  [/sweet potato leaf|sweet potato leaves|ipomoea batatas/i, 'Sweet potato leaves'],
  [/bitter ?leaf|vernonia/i, 'Bitter leaf'],
  [/moringa|drumstick leaves/i, 'Moringa leaves'],
  [/african nightshade|solanum (nigrum|scabrum|villosum)|managu|black nightshade/i, 'African nightshade'],
  [/spider plant|cleome|gynandropsis|saget/i, 'Spider plant'],
  [/scent leaf|ocimum gratissimum/i, 'Scent leaf'],
  [/waterleaf|talinum/i, 'Waterleaf'],
  [/chicory|endive|cichorium|radicchio/i, 'Chicory and endive'],
  [/dandelion|taraxacum/i, 'Dandelion greens'],
  [/nettle|urtica/i, 'Nettle'],
  [/garlic chive|chive|allium tuberosum/i, 'Chives'],
  [/spring onion|green onion|scallion|onion lea|welsh onion|bunching onion|allium wakegi/i, 'Spring onion leaves'],
  [/^rape\b|rape greens|youcai|brassica napus|brassica campestris/i, 'Rape greens'],
  [/radish leaf|radish leaves/i, 'Radish leaves'],
  [/turnip green|turnip leaf|turnip leaves/i, 'Turnip greens'],
  [/taro leaf|taro leaves|colocasia/i, 'Taro leaves'],
  [/sheperd|shepherd'?s purse|capsella/i, "Shepherd's purse"],
  [/crown daisy|chrysanthemum|syungiku|shungiku/i, 'Garland chrysanthemum'],
  [/tarragon|artemisia dracunculus/i, 'Tarragon'],
  [/mallow|malva/i, 'Mallow'],
  [/vegetables?,? leafy|leafy vegetables, other|leaf vegetables|leafy vegetables|leafy greens|green leafy|mixed leaves|salad/i, 'Leafy vegetables, other or unspecified'],
];
// Plant parts that are not leafy greens: kept out of the result set with a recorded reason.
export const NOT_LEAFY = /brussels sprout|carrot (leaf|leaves|shoot|top)|broccoli|cauliflower|celery (stalk|stem)|^celery$|\broot\b|tuber|bulb|fruit|mixed vegetables|leafy and non-leafy/i;
export function leafOf(material) {
  const t = String(material || '');
  if (NOT_LEAFY.test(t)) return null;
  for (const [re, name] of LEAVES) if (re.test(t)) return name;
  // Other named edible leaves (wild or regional leafy vegetables) keep their own name.
  // Every finding was extracted as an edible leafy green from its primary text, so an
  // unlisted leaf keeps its own reported name.
  const own = t.split(/\s*[(,;]/)[0].replace(/\s+leaf$/i, ' leaves').trim();
  return own ? own[0].toUpperCase() + own.slice(1) : null;
}
const COOKED = /cook|boil|blanch|steam|fried|fry|stew|pan-cooked|sauté/i;
export function formClass(form, material) {
  const t = `${form || ''} ${material || ''}`;
  if (/ferment|sauerkraut|kimchi|pickl/i.test(t)) return 'fermented';
  // Frozen storage of a laboratory sample is not a frozen food.
  if (/^\s*(deep-?)?frozen|frozen \(as sold\)|as sold,? frozen/i.test(form || '') || /frozen/i.test(material || '')) return 'frozen';
  if (/canned|tinned/i.test(t)) return 'canned';
  if (COOKED.test(t)) return 'cooked';
  // Drying is usually sample preparation before digestion; only a food sold or eaten dried is a dried form.
  if (/dried \(as sold\)|as sold dried|dried herb/i.test(form || '') || /\(dried\)|\bdried\b|powder/i.test(material || '')) return 'dried';
  return 'raw';
}
export function basisOf(b) {
  const t = String(b || '').toLowerCase();
  if (/dry/.test(t) && !/not|unstated|unclear/.test(t)) return 'Dry weight';
  if (/fresh|wet|as sold|as consumed|as is|edible portion as/.test(t) && !/not stated|unstated|unclear/.test(t)) return 'Fresh weight';
  return 'Basis not stated';
}
export const HMI_ANALYTES = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'tHg', 'MeHg', 'Ni', 'Cr', 'CrVI', 'Al', 'Sn', 'U'];
const slug = t => String(t ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const materialKey = (leaf, form) => form === 'raw' ? leaf : `${leaf} (${form})`;

// ---------------------------------------------------------------- source labels
// Labels come from the record's cite-key surname (author-name order varies between
// records); records with fragment titles or unknown authors use source-labels.json.
const FIXED = { [GEMS]: 'WHO GEMS/Food', [FDA]: 'FDA TDS FY2018–FY2020', 'efsa-cadmium-contam-2009': 'EFSA 2009', 'efsa-lead-contam-2010': 'EFSA 2010', 'efsa2012-cadmium-dietary-exposure-europe': 'EFSA 2012',
  'cfs2012-hktds-inorganic-arsenic': 'Hong Kong TDS 2012', 'cfs2013-hktds-metallic-contaminants': 'Hong Kong TDS 2013', 'fera2015-uk-tds-metals': 'UK TDS 2014 (Fera 2015)', 'mahaffey1975-fda-total-diet-study-heavy-metals': 'Mahaffey et al. 1975',
  'us-house-subcommittee2021-baby-foods-tainted-heavy-metals': 'US House Subcommittee 2021' };
let labelCache = null;
function sourceMeta(root, id) {
  const p = path.join(root, 'wiki/sources', `${id}.md`);
  const fm = matter(fs.readFileSync(p, 'utf8')).data;
  labelCache ??= load(root, 'source-labels.json').labels;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const m = id.match(/^([a-z][a-z-]*?)-?((?:19|20)\d{2})/);
  const yr = fm.year ?? m?.[2] ?? '';
  const name = m ? m[1].split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('-') : id;
  const label = FIXED[id] ?? labelCache[id] ?? `${name}${authors.length > 1 ? ' et al.' : ''} ${yr}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}
export function shortLabel(text, max = 34) {
  let t = String(text).replace(/\s*\([^)]*[؀-ۿ][^)]*\)/g, '').trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() || t.slice(0, max) : t;
}
export function shortPeriod(text) {
  const years = [...String(text || '').matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return text && /spring|summer|winter|autumn|season|month|dry|wet|rain/i.test(text) ? 'Year not reported' : 'Collection date unreported';
}

// ---------------------------------------------------------------- holds
// Integrity holds are curated from each extraction's integrity_concerns after
// review against the primary text (holds.json in the audit directory).
let holdCache = null;
function holdsFor(root) { if (!holdCache) holdCache = fs.existsSync(path.join(root, auditDir, 'holds.json')) ? load(root, 'holds.json').holds.map(h => ({ ...h, re: new RegExp(h.match) })) : []; return holdCache; }
export function holdFor(root, id) { return holdsFor(root).find(h => h.re.test(id))?.reason ?? null; }

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
// Values read off a chart are not printed numbers; they are shown but never positioned.
export const APPROX = /approx|back-calculat|derived from (the )?(hazard|intake|hq)|read (off |from )?(the )?(fig|chart|bar|graph)|bar[- ]?(chart|height)|digiti[sz]|figure[- ]read|visual(ly)? estimat|fig\d*[- ]approx|estimated from (the )?(fig|chart)/i;
const isApprox = fd => APPROX.test(`${fd.statistic} ${fd.notes ?? ''} ${fd.reported?.text ?? ''} ${fd.conversion ?? ''}`);
function rowTarget(row) {
  if (row.hold || row.unit !== 'µg/kg' || row.approx) return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(s.lod_ug_kg)) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}
function findingText(s, unit) {
  if (isApprox(s)) { const v = s.value_ug_kg ?? s.figure_estimate_ug_kg; return Number.isFinite(v) ? `≈${fmt(v)} µg/kg (${String(s.statistic).replace(/[-_].*$/, '')}, read from a figure; no printed value)` : `${s.reported?.text ?? 'Shown only in a figure'} (no printed value)`; }
  const u = unit === 'µg/kg' ? 'µg/kg' : (s.reported?.unit || unit);
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (unit !== 'µg/kg') return `${s.reported?.text ?? s.reported?.value ?? 'Reported'}${s.reported?.unit && !String(s.reported?.text ?? '').includes(s.reported.unit) ? ` ${s.reported.unit}` : ''} (${String(s.statistic).replace('_', ' ')}, original unit)`;
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (censoring bounds)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} µg/kg (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} µg/kg (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${String(s.statistic).replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}${s.reported?.unit && !String(s.reported?.text ?? '').includes(s.reported.unit) ? ` (${s.reported.unit})` : ''}`;
}
const regionType = k => ({ growing_origin: 'Reported growing area', purchase_market: 'Purchase or reporting market; growing origin not identified', site_or_treatment: 'Field site, irrigation source or treatment within one study', season_or_year: 'Season or year within one study' })[k] ?? 'All samples in the study';
const BASIS_LABEL = { 'Fresh weight': 'Fresh weight (as sold or eaten)', 'Dry weight': 'Dry weight', 'Basis not stated': 'Basis not stated by the source' };
const MASS_UNITS = /^(µg|ug|mg|ng|μg)\s*\/\s*(kg|g)\b|^ppm$|^ppb$|^µg\/kg$/i;

// Percentile statistics are written out in words on public surfaces ("95th percentile").
const ordinal = n => `${n}${/^1[123]$/.test(n) ? 'th' : n.endsWith('1') ? 'st' : n.endsWith('2') ? 'nd' : n.endsWith('3') ? 'rd' : 'th'}`;
const wordPct = t => typeof t === 'string' ? t.replace(/\b[Pp](\d{1,2}(?:\.\d)?)\b/g, (_, n) => `${ordinal(n)} percentile`).replace(/\bpercentile_(\d+)/g, (_, n) => `${ordinal(n)} percentile`) : t;
const clean = v => typeof v === 'string' ? wordPct(v) : Array.isArray(v) ? v.map(clean) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === 'id' ? x : clean(x)])) : v;
export const publicID = id => id.replace(/:[Pp](\d{1,2})(?=:|$)/g, ':pct$1').replace(/percentile_(\d+)/g, 'pct$1');
export function leafRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [], unmapped = [], nonLeaf = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd0 of x.findings) {
      const fd = { ...clean(fd0), id: publicID(fd0.id), source_finding_id: fd0.id };
      if (!HMI_ANALYTES.includes(fd.analyte)) { nonLeaf.push({ finding: fd.id, material: fd.material, reason: `"${fd.analyte}" is not a single HMI analyte (for example a combined lead-plus-cadmium total); not a result.` }); continue; }
      const leaf = fd.leaf ?? leafOf(fd.material);
      if (!leaf) { if (NOT_LEAFY.test(fd.material)) nonLeaf.push({ finding: fd.id, material: fd.material, reason: 'Plant part or crop that is not eaten as a leafy green (sprouts, carrot tops, roots, bulbs or fruit); outside this page and not a result.' }); else unmapped.push(`${fd.id}: ${fd.material}`); continue; }
      const form = fd.leaf ? (fd.form ?? 'raw') : formClass(fd.form, fd.material);
      const basis = basisOf(fd.basis ?? x.study?.basis);
      const material = fd.leaf ? fd.material : materialKey(leaf, form);
      const hold = holdFor(root, fd.source_finding_id);
      const massUnit = Number.isFinite(fd.value_ug_kg) || Number.isFinite(fd.min_ug_kg) || Number.isFinite(fd.max_ug_kg) || Number.isFinite(fd.lod_ug_kg) || fd.median_bounds_ug_kg || MASS_UNITS.test(String(fd.reported?.unit || '').trim());
      const unit = massUnit ? 'µg/kg' : (fd.reported?.unit || 'original unit');
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(fd.period || x.study?.collection_period || '');
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, leaf, form, material, ref_material: materialKey(leaf, form), food: material,
        region: shortLabel(fd.group), group_full: fd.group, group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: wordPct(x.study?.sampling_unit) || 'leaf samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: String(fd.statistic).replace('_', ' '), finding_text: findingText(fd, unit),
        value: unit === 'µg/kg' && Number.isFinite(fd.value_ug_kg) && !isApprox(fd) ? fd.value_ug_kg : null, unit,
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis, display_basis: BASIS_LABEL[basis], short_basis: basis,
        method: wordPct(x.study?.method) || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold && `Held: ${hold}`, isApprox(fd) && 'The source prints no number for this result; the value shown was read from its figure and is not compared.', fd.notes].filter(Boolean).join(' '),
        overlap: 'Subgroup rows, statistics of the same subgroup and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, approx: isApprox(fd), primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  if (unmapped.length) throw Error(`Findings without a recognised leaf (${unmapped.length}):\n` + unmapped.slice(0, 40).join('\n'));
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'tHg', 'MeHg', 'Ni', 'Cr', 'CrVI', 'Al', 'Sn', 'U'];
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : 2;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.source.localeCompare(b.source)
    || a.material.localeCompare(b.material) || a.basis.localeCompare(b.basis) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seenId = new Set();
  for (const r of rows) { if (seenId.has(r.id)) throw Error(`Duplicate finding id ${r.id}`); seenId.add(r.id); }
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-leafy-greens-${r.analyte}-${i}`; }
  return { rows, nonLeaf, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
const refKey = (a, m, b) => `leafy-${a}-${m}-${b}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const scopeFor = (analyte, material, basis) => ({ ingredient: `leafy-greens/${material}`, analyte, basis: `${material}; ${basis}, µg/kg; no moisture or cooking conversion`, statistic: 'subgroup median concentration', market: 'International leafy-greens evidence library', period: 'Source collection periods as reported' });
function medianOf(records) {
  const scope = { ingredient: 'x', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

export function referenceUnits(root, rows) {
  const units = new Map(), audit = [];
  const add = (a, material, basis, u) => { const k = JSON.stringify([a, material, basis]); if (!units.has(k)) units.set(k, []); units.get(k).push({ ...scopeFor(a, material, basis), ...u }); };
  // GEMS/Food: HMI-calculated medians per WHO region × year × leaf form and basis, random sampling only.
  const recs = load(root, 'primary/gemsfood-leafy-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling') continue;
    const basis = r.basis === 'Dry weight' ? 'Dry weight' : 'Fresh weight';
    const k = JSON.stringify([r.analyte, r.material, basis, r.region, r.year]);
    if (!g.has(k)) g.set(k, []);
    g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, material, basis, region, year] = JSON.parse(k);
    const m = medianOf(rs);
    add(a, material, basis, { id: `gems-${material}-${region}-${year}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'), family: GEMS, group: `${material} ${region} ${year}`, lower: m.lower, upper: m.upper, n: rs.length,
      locator: `primary/gemsfood-leafy-records.csv: ${a}, ${material}, ${region}, ${year}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median', gems: { material, region, basis } });
  }
  // FDA TDS: one subgroup median per food from its national composites.
  const fda = load(root, `extraction/${FDA}.json`);
  for (const fd of fda.findings) {
    const s = fda.sample_values.filter(x => x.finding === fd.id);
    const m = medianOf(s.map(x => ({ lower: x.lower_ug_kg, upper: x.upper_ug_kg })));
    add(fd.analyte, materialKey(fd.leaf, fd.form), 'Fresh weight', { id: `fda-${fd.leaf}-${fd.form}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'), family: FDA, group: fd.group, lower: m.lower, upper: m.upper, n: s.length, locator: fd.locator, evidence_kind: 'HMI-calculated subgroup median', result_finding: fd.id });
  }
  // Printed per-sample values: each sample is its own subgroup unit. Published subgroup medians enter once.
  const byFile = Map.groupBy(rows, r => r.extraction_file);
  for (const [f, frows] of byFile) {
    const x = load(root, `extraction/${f}`);
    if ([GEMS, FDA].includes(x.source_id)) continue;
    const cfg = load(root, 'reference-exclusions.json');
    const excluded = cfg.families[x.source_id];
    const allHeld = a => { const fs_ = x.findings.filter(fd => fd.analyte === a); return fs_.length > 0 && fs_.every(fd => holdFor(root, fd.id)); };
    for (const s of Array.isArray(x.sample_values) ? x.sample_values : []) {
      const a = s.analyte, leaf = leafOf(s.material ?? frows[0].material), form = formClass(s.form, s.material), basis = basisOf(s.basis ?? x.study?.basis);
      const tag = `${x.source_id}:${s.sample}:${a}`;
      if (excluded) { audit.push({ unit: tag, admitted: false, reason: excluded }); continue; }
      const filter = (cfg.sample_filters || []).find(fl => fl.source === x.source_id && (!fl.basis || String(s.basis ?? '').toLowerCase() === fl.basis));
      if (filter) { audit.push({ unit: tag, admitted: false, reason: filter.reason }); continue; }
      if (/ambiguous/i.test(String(s.censoring_status ?? '')) || s.reconstructed || /reconstruct|back-calculat|approx|read from/i.test(String(s.notes ?? s.locator ?? ''))) { audit.push({ unit: tag, admitted: false, reason: 'censoring ambiguous, or a reconstructed or figure-read value rather than a printed measurement' }); continue; }
      if (allHeld(a) || holdFor(root, `${x.source_id}:${a}:${slug(s.material)}:${slug(s.group ?? s.sample)}:sample_value`)) { audit.push({ unit: tag, admitted: false, reason: 'held: fails an integrity check against its own paper' }); continue; }
      if (!leaf || basis === 'Basis not stated') { audit.push({ unit: tag, admitted: false, reason: !leaf ? 'leaf not identified' : 'basis not stated; no compatible reference' }); continue; }
      if (s.held) { audit.push({ unit: tag, admitted: false, reason: 'held' }); continue; }
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!Number.isFinite(lower) || !Number.isFinite(upper)) { audit.push({ unit: tag, admitted: false, reason: 'no numerical value or bound' }); continue; }
      add(a, materialKey(leaf, form), basis, { id: `${x.source_id}-${s.sample}-${s.group ?? ''}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 160), family: x.source_id, group: s.group || s.sample, lower, upper, n: 1, locator: s.locator, evidence_kind: 'reported sample value', sample_of: s });
    }
  }
  for (const r of rows) {
    if (r.hold || [GEMS, FDA].includes(r.source) || r.statistic !== 'median' || !Number.isFinite(r.value) || r.group_kind === 'all_samples' || r.basis === 'Basis not stated') continue;
    add(r.analyte, r.ref_material, r.basis, { id: r.finding_id.replace(/[^a-z0-9-]+/gi, '-'), family: r.source, group: r.group_full, lower: r.value, upper: r.value, n: r.n ?? 1, locator: r.locator, evidence_kind: 'reported subgroup median', result_finding: r.finding_id });
  }
  // Each unit is attached to a result of its own family and scope (gate 6 ownership).
  for (const [k, list] of units) {
    const [a, material, basis] = JSON.parse(k);
    const seenU = new Set();
    for (const u of list) {
      if (seenU.has(u.id)) { let n = 2; while (seenU.has(`${u.id}-${n}`)) n++; u.id = `${u.id}-${n}`; } seenU.add(u.id);
      const same = rows.filter(r => r.source === u.family && r.analyte === a && r.ref_material === material && r.basis === basis && r.unit === 'µg/kg');
      const hit = u.result_finding ? same.find(r => r.finding_id === u.result_finding)
        : u.gems ? same.find(r => r.group_full.startsWith(`WHO region ${u.gems.region};`) && /random/i.test(r.group_full))
        : same.find(r => r.group_full === u.group && ['sample_value', 'below_LOD', 'not_detected'].includes(r.statistic)) ?? same.find(r => r.group_full === u.group);
      u.result_id = (hit ?? same[0])?.result_id ?? null;
      if (!u.result_id) { audit.push({ unit: u.id, admitted: false, reason: `no result of family ${u.family} in scope ${material}, ${basis}` }); u.drop = true; }
    }
    units.set(k, list.filter(u => !u.drop));
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
  if (r.unit !== 'µg/kg' || r.basis === 'Basis not stated') return rowTarget({ ...r, unit: 'µg/kg', hold: null }) || r.unit !== 'µg/kg' ? 'basis_incompatible_with_all_references' : 'no_numeric_value_or_bound';
  if (!rowTarget(r)) return 'no_numeric_value_or_bound';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- within-study contrasts
const CONTROL = /control|reference site|clean|fresh ?water|ground ?water|tube ?well|bore ?hole|unpolluted|uncontaminated|background|non-?industrial|rain-?fed/i;
function contrast(r, rows) {
  const t = rowTarget(r);
  if (!t || r.group_kind === 'all_samples' || /^all\b|all samples|overall/i.test(r.group_full)) return { direction: 'summary', label: 'No same-study contrast', detail: 'This row is the study total or has no compatible numerical statistic.', context: 'Within-study contrasts compare a named subgroup with the same study’s total or control group using the same statistic, leaf and basis.' };
  const peers = rows.filter(x => x !== r && x.source === r.source && x.analyte === r.analyte && x.material === r.material && x.basis === r.basis && x.unit === r.unit && x.statistic === r.statistic && !x.hold);
  let ref = null;
  if (r.group_kind === 'site_or_treatment' && !CONTROL.test(r.group_full)) ref = peers.find(x => CONTROL.test(x.group_full));
  ref ??= peers.find(x => x.group_kind === 'all_samples' || /^all\b|all samples|overall/i.test(x.group_full));
  const rt = ref && rowTarget(ref);
  if (!rt || !t.exact || !rt.exact) return { direction: t.exact && !rt ? 'summary' : 'bounded', label: t.exact && !rt ? 'No same-study reference' : 'Limits overlap', detail: 'No compatible same-study control or total with the same statistic.', context: 'No cross-study pooling is used in this mode.' };
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, leaf, basis, analyte, statistic and analytical method. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function leafyOccurrence(root) {
  const { rows, parity } = leafRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = [...units].filter(([, list]) => list.length).map(([k, list]) => {
    const [a, material, basis] = JSON.parse(k);
    const fams = new Set(list.map(u => u.family)).size;
    return {
      key: refKey(a, material, basis), scope: scopeFor(a, material, basis), referenceUnits: list,
      accepts: r => r.analyte === a && r.ref_material === material && r.basis === basis && r.unit === 'µg/kg' && !r.hold && !!rowTarget(r),
      label: `HMI ${material.toLowerCase()} ${a} reference (${basis.toLowerCase()}) · ${fams} sampling ${fams === 1 ? 'family' : 'families'}`,
      targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
      methods: `HMI pools subgroup medians for ${material.toLowerCase()} on a ${basis.toLowerCase()} basis from every compatible sampling family in the evidence ledger: WHO GEMS/Food region-by-year medians (random sampling only), FDA Total Diet Study composites, per-sample results printed by individual surveys and published subgroup medians. Each family has equal total weight. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations, and fresh-weight and dry-weight results are never converted into each other.`,
      limitations: `An evidence-library reference for one leaf and basis, not a probability sample of any market.${fams === 1 ? ' This is the only compatible family in the completed leafy-greens ledger for this leaf, analyte and basis; it cannot represent other markets.' : ''} GEMS/Food regions are reporting regions, not growing origins. A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : r.unit !== 'µg/kg' ? `Reported in ${r.unit}, which cannot be expressed as a mass concentration of the leaf without an assumption.`
    : r.basis === 'Basis not stated' ? 'The source does not state whether results are fresh or dry weight, so no fresh-weight or dry-weight reference can apply.'
    : rowTarget(r) ? `No compatible reference units for ${r.ref_material.toLowerCase()} (${r.basis.toLowerCase()}) and this analyte.`
    : ['range', 'max', 'min'].includes(r.statistic) ? 'The source reports only a range or extreme value; no single statistic can be positioned.'
    : 'The source reports a non-detect without a numerical limit; its position cannot be identified.');
  compiled.record.frozen = '2026-10-22';
  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = '2026-10-22';
    if (r.unit !== 'µg/kg') for (const c of Object.values(v.comparisons)) if (c) c.unit = r.unit;
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
  const unit_list = [...units].flatMap(([k, list]) => { const [a, m, b] = JSON.parse(k); return list.map(u => ({ id: u.id, analyte: a, material: m, basis: b, ref_key: refKey(a, m, b), result_id: u.result_id, family: u.family, lower: u.lower, upper: u.upper, locator: u.locator })); });
  return { ...compiled, parity, unit_list, unit_audit: audit, definitions_meta: definitions.map(d => ({ key: d.key, scope: d.scope })) };
}

export const leafyOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI leaf reference (pooled)' }, { value: 'contrast', label: 'Same-study comparison' }],
  caption: 'Leafy-green findings from every extracted survey, total diet study and monitoring dataset, in µg/kg with each source’s leaf, basis, statistic, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one leaf, subgroup and metal; a mean, median and range from the same samples are separate rows. Ratings place a reported mean, median or sample result against a pooled HMI reference for the same leaf and basis (fresh or dry weight) built from every compatible sampling family. Same-study comparisons set a site or irrigation group against its own control or study total. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Leaf exactly as the source names it, with cooked, frozen, canned, fermented or dried forms kept separate.', 'Collection scope': 'Growing site, irrigation source, purchase market or WHO reporting region as reported; publication year is never used as a collection date. Fresh-weight, dry-weight and unstated bases are labelled.', Finding: 'µg/kg with the source statistic, unless the source used a unit that cannot be expressed per kilogram of leaf. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the pooled reference for the same leaf and basis. Higher or Lower compare a group with its own study control or total.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
