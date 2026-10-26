// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted fish occurrence result maps to exactly one table row. Scopes never
// pool across fish species groups, preparation forms, analyte species (tHg / MeHg /
// unspecified Hg; tAs / iAs / DMA) or basis (wet / dry / not stated).
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish';
const GEMS = 'who-gemsfood-heavy-metal-contaminants', FDA = 'fda2022-tds-elements-fy2018-fy2020';
const fmt = v => Number(Number(v).toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });
const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
const exists = (root, f) => fs.existsSync(path.join(root, auditDir, f));

// ---------------------------------------------------------------- vocabularies
export const GROUP_LABELS = {
  tuna: 'Tuna', bonito: 'Bonito', swordfish: 'Swordfish', 'marlin-billfish': 'Marlin and other billfish', shark: 'Shark', 'ray-skate': 'Ray and skate',
  mackerel: 'Mackerel', 'king-spanish-mackerel': 'King and Spanish mackerel', 'horse-mackerel-jack': 'Horse mackerel, jacks and trevally', herring: 'Herring',
  'sardine-pilchard': 'Sardine and pilchard', sprat: 'Sprat', anchovy: 'Anchovy', 'shad-other-clupeid': 'Shad, hilsa and other herrings', salmon: 'Salmon', trout: 'Trout and char',
  'whitefish-coregonid': 'Whitefish and vendace', cod: 'Cod', haddock: 'Haddock', 'pollock-saithe': 'Pollock and saithe', 'whiting-blue-whiting': 'Whiting and blue whiting',
  hake: 'Hake', 'other-gadiform': 'Ling, tusk and other cod-like fish', 'plaice-flounder-sole': 'Plaice, flounder, sole and turbot', halibut: 'Halibut', 'sea-bass': 'Sea bass and barramundi',
  'sea-bream-porgy': 'Sea bream and porgies', 'red-mullet-goatfish': 'Red mullet and goatfish', 'grey-mullet': 'Grey mullet', snapper: 'Snapper', grouper: 'Grouper', 'croaker-drum': 'Croaker and drum',
  'emperor-grunt': 'Emperors and grunts', pomfret: 'Pomfret', 'hairtail-cutlassfish': 'Hairtail and cutlassfish', barracuda: 'Barracuda', 'mahi-mahi': 'Mahi-mahi',
  'scorpionfish-rockfish': 'Scorpionfish and rockfish', 'anglerfish-monkfish': 'Anglerfish and monkfish', gurnard: 'Gurnard', eel: 'Eel', sturgeon: 'Sturgeon',
  'other-marine-finfish': 'Other marine fish', tilapia: 'Tilapia', 'carp-cyprinid': 'Carp and other cyprinids', catfish: 'Catfish', pike: 'Pike', 'perch-walleye': 'Perch, walleye and zander',
  'black-bass-sunfish': 'Black bass and sunfish', 'cichlid-other': 'Other cichlids', snakehead: 'Snakehead', 'other-freshwater-finfish': 'Other freshwater fish',
  'bream-unspecified': 'Bream (species group not stated)', 'fish-unspecified-marine': 'Marine fish, species not stated', 'fish-unspecified-freshwater': 'Freshwater fish, species not stated',
  'fish-unspecified': 'Fish, species not stated',
};
export const FORM_LABELS = { fresh: 'fresh or raw', cooked: 'cooked', canned: 'canned', 'smoked-dried-salted-fermented': 'smoked, dried, salted or fermented',
  'fish-oil': 'fish oil', 'fish-product': 'fish product', 'fish-sauce': 'fish sauce' };
const EXCLUDED_FORMS = { 'infant-food': 'fish-containing infant food (covered on its own product page; the fish share is not reported)',
  'mixed-seafood': 'a category mixing fish with shellfish, crustaceans or molluscs, so the result cannot be attributed to finfish',
  'not-edible-flesh': 'a tissue other than the eaten flesh (liver, gills, kidney, bone, offal)' };
const BASIS = { 'wet weight': 'Fish, wet weight', 'dry weight': 'Fish, dry weight', 'not stated': 'Fish, basis not stated' };
export const basisLabel = b => BASIS[/dry/i.test(b ?? '') ? 'dry weight' : /wet|fresh|as eaten|as consumed|as sold/i.test(b ?? '') ? 'wet weight' : 'not stated'];

// GEMS/Food and FDA groups map directly (their labels are fixed by the dataset).
const DATASET_MATERIAL = {
  'Fish (unspecified species)': ['fish-unspecified', null], 'Marine fish (unspecified species)': ['fish-unspecified-marine', null], 'Freshwater fish (unspecified species)': ['fish-unspecified-freshwater', null],
  'Diadromous fish (unspecified species)': ['fish-unspecified', null], Cod: ['cod', null], Tuna: ['tuna', null], Trout: ['trout', null], Mackerel: ['mackerel', null], Herring: ['herring', null],
  'Sardines and sardine-type fish': ['sardine-pilchard', null], 'Pacific salmon': ['salmon', null], Haddock: ['haddock', null], Carp: ['carp-cyprinid', null], 'Dried fish': ['fish-unspecified', 'smoked-dried-salted-fermented'],
  Pollack: ['pollock-saithe', null], Sole: ['plaice-flounder-sole', null], Shark: ['shark', null], Eel: ['eel', null], Bream: ['bream-unspecified', null], Perch: ['perch-walleye', null],
  Flounder: ['plaice-flounder-sole', null], Plaice: ['plaice-flounder-sole', null], 'Swordfish (GEMS "fish, seafood NES" entries)': ['swordfish', null], 'Cod liver oil': ['cod', 'fish-oil'], 'Fish oil': ['fish-unspecified', 'fish-oil'],
  'Canned fish (species not stated)': ['fish-unspecified', 'canned'], 'Smoked fish (species not stated)': ['fish-unspecified', 'smoked-dried-salted-fermented'], 'Salted fish (species not stated)': ['fish-unspecified', 'smoked-dried-salted-fermented'],
  'Fish roe': ['fish-unspecified', 'fish-product'], 'Other finfish (GEMS "NES" entries)': ['fish-unspecified', null], 'Fish products (fish fingers, cakes, pastes)': ['fish-unspecified', 'fish-product'], 'Fish sauce': ['fish-unspecified', 'fish-sauce'],
  'Salmon, steaks/fillets, baked': ['salmon', 'cooked'], 'Cod, baked': ['cod', 'cooked'], 'Tilapia, baked': ['tilapia', 'cooked'], 'Tuna, canned in water, drained solids': ['tuna', 'canned'], 'Fish sticks or patty, frozen, oven-cooked': ['fish-unspecified', 'fish-product'],
};

function speciesMap(root) { return exists(root, 'species-map.json') ? load(root, 'species-map.json') : { species: {}, forms: {} }; }
function classify(maps, src, fd) {
  const ds = DATASET_MATERIAL[fd.material];
  if ((src === GEMS || src === FDA) && ds) return { group: ds[0], form: ds[1] ?? (/cook/i.test(fd.preparation ?? '') ? 'cooked' : 'fresh'), taxon: null };
  const sp = maps.species[(fd.species ?? '').trim()];
  const fm = maps.forms[`${(fd.material ?? '').trim()} || ${(fd.preparation ?? '').trim()}`];
  return { group: sp?.group ?? null, taxon: sp?.taxon ?? null, form: fm?.form ?? null };
}

// ---------------------------------------------------------------- holds
export function holdsFor(root) { return exists(root, 'holds.json') ? load(root, 'holds.json').holds : {}; }

// ---------------------------------------------------------------- source metadata
const metaCache = new Map();
function sourceMeta(root, id) {
  if (metaCache.has(id)) return metaCache.get(id);
  const fm = matter(fs.readFileSync(path.join(root, 'wiki/sources', `${id}.md`), 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0] || id;
  const label = id === GEMS ? 'WHO GEMS/Food' : id === FDA ? 'FDA TDS FY2018–FY2020'
    : /^authors\d{4}/.test(id) || /^(authors|anonymous|unknown)$/i.test(surname) ? `${String(fm.title || id).split(/[:.]/)[0].slice(0, 48)} (${fm.year ?? 'n.d.'})`
    : `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? ''}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  // Filter options must fit a 390 px phone: keep labels to about 30 characters, year retained.
  const year = String(fm.year ?? '').match(/\d{4}/)?.[0];
  let short = label;
  if (short.length > 30) { const body = short.replace(/\s*\(?\b(?:19|20)\d{2}\)?\s*$/, ''); const cut = body.slice(0, 24); short = `${cut.slice(0, cut.lastIndexOf(' ') > 10 ? cut.lastIndexOf(' ') : 24).trim()}…${year ? ` ${year}` : ''}`; }
  const out = { label: short, url }; metaCache.set(id, out); return out;
}

export function shortLabel(text, max = 34) {
  let t = String(text ?? '').replace(/\s*\([^)]*\)/g, '').trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|;\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max) > 0 ? t.lastIndexOf(' ', max) : max).trim() : t || 'Not stated';
}
export function shortPeriod(text) {
  const years = [...String(text ?? '').matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
function rowTarget(row) {
  if (row.hold || row.unit !== 'µg/kg') return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (s.statistic === 'median' && s.median_bounds_ug_kg) return { lower: s.median_bounds_ug_kg[0], upper: s.median_bounds_ug_kg[1], exact: s.median_bounds_ug_kg[0] === s.median_bounds_ug_kg[1], statistic: 'median' };
  if (s.statistic === 'median' && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, 'median');
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(s.lod_ug_kg)) return { lower: 0, upper: s.lod_ug_kg, exact: false, statistic: 'non-detect bounds' };
  return null;
}
function findingText(s, unit) {
  const u = unit === 'µg/kg' ? 'µg/kg' : unit;
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (unit !== 'µg/kg') return `${s.reported?.text ?? 'Reported'}${s.reported?.unit && !String(s.reported?.text ?? '').includes(s.reported.unit) ? ` (${s.reported.unit})` : ''}`;
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(s.lod_ug_kg) ? `<${fmt(s.lod_ug_kg)} ${u}` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'median' && s.median_bounds_ug_kg) { const [a, b] = s.median_bounds_ug_kg; return a === b ? `${fmt(a)} ${u} (median)` : `median ${fmt(a)}–${fmt(b)} ${u} (non-detect bounds)`; }
  if (s.statistic === 'range') return Number.isFinite(s.min_ug_kg) && Number.isFinite(s.max_ug_kg) ? `${fmt(s.min_ug_kg)}–${fmt(s.max_ug_kg)} ${u} (range)` : Number.isFinite(s.max_ug_kg) ? `up to ${fmt(s.max_ug_kg)} ${u} (range maximum)` : `${s.reported?.text ?? 'Range reported'}`;
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} ${u} (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} ${u} (maximum)`;
  if (Number.isFinite(v)) return `${fmt(v)} ${u} (${s.statistic.replace('_', ' ')}${Number.isFinite(s.sd_ug_kg) ? ` ± ${fmt(s.sd_ug_kg)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`;
}
const regionType = k => ({ growing_origin: 'Catch or farm area as reported', purchase_market: 'Purchase or reporting market; catch or farm origin not identified',
  site_or_habitat: 'Sampling site within one study', species: 'Species within one study', size_class: 'Size class within one study', preparation: 'Preparation within one study',
  year: 'Collection year within one study', all_samples: 'All samples in the study' })[k] ?? 'Subgroup within one study';
const mgL = s => /(mg|µg|ug|ng)\s*\/\s*l\b/i.test(s?.reported?.unit ?? '') && s.value_ug_kg == null && s.min_ug_kg == null;

// Public content boundary: percentile tail statistics (P95 and similar) from source notes
// stay in the private extraction records and never reach the page.
const TAIL = /\b(?:P9\d(?:\.\d)?|9\dth percentile|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI|Claude)\b/i;
const scrubSentences = t => String(t ?? '').split(/(?<=[.;])\s+/).filter(x => !TAIL.test(x)).join(' ');
const scrubCell = t => String(t ?? '').replace(/[;,]?\s*(?:P9\d(?:\.\d)?|9\dth percentile)\b[^;,)]*/gi, '').trim();
function publicFinding(fd) {
  const out = { ...fd, notes: scrubSentences(fd.notes), censoring: scrubSentences(fd.censoring), locator: scrubCell(fd.locator), group: scrubCell(fd.group) };
  if (fd.reported) out.reported = { ...fd.reported, text: scrubCell(fd.reported.text) };
  return out;
}

// ---------------------------------------------------------------- rows
// One row per extracted result (owner fullness gate 4).
export function fishRows(root) {
  const maps = speciesMap(root), holds = holdsFor(root);
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [], excluded = [], unmapped = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const raw of x.findings ?? []) {
      const fd = publicFinding(raw);
      const c = classify(maps, x.source_id, fd);
      if (!c.group || !c.form) { unmapped.push({ source: x.source_id, finding: fd.id, species: fd.species, material: fd.material, preparation: fd.preparation }); continue; }
      if (c.group === 'not-finfish' || EXCLUDED_FORMS[c.form]) { excluded.push({ source: x.source_id, finding: fd.id, reason: c.group === 'not-finfish' ? 'not finfish (shellfish, crustacean, mollusc or other non-fish material)' : EXCLUDED_FORMS[c.form], locator: fd.locator }); continue; }
      const unit = mgL(fd) ? fd.reported.unit.replace(/ug/i, 'µg') : 'µg/kg';
      const basis = unit === 'µg/kg' ? basisLabel(fd.basis ?? fd.reported?.basis) : `Fish product as reported, ${unit}`;
      const group = c.group, form = c.form, groupLabel = GROUP_LABELS[group] ?? group;
      const hold = holds[fd.id] ?? null;
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(x.study?.collection_period);
      const place = fd.origin || fd.market || fd.group;
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: `${groupLabel} · ${FORM_LABELS[form]}`, species_label: fd.species ?? groupLabel, taxon: c.taxon, group, form,
        region: shortLabel(place), group_full: [fd.species, fd.group].filter(Boolean).join(' — '), group_kind: fd.group_kind, period,
        production: fd.production ?? 'not stated', water: fd.water ?? 'not stated',
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.study?.sampling_unit || 'fish samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd, unit),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit,
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis, display_basis: basis, short_basis: basis.replace('Fish, ', ''),
        method: scrubSentences(x.study?.method) || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: scrubSentences([hold, fd.notes].filter(Boolean).join(' ')),
        overlap: 'Statistics of the same subgroup, subgroups and the study total share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'none' }, hold, primary: fd, extraction_file: f, lod_ug_kg: fd.lod_ug_kg,
      });
    }
  }
  const metalOrder = ['tHg', 'MeHg', 'Hg_unspecified', 'iHg', 'Cd', 'Pb', 'tAs', 'iAs', 'DMA', 'MMA', 'oAs', 'As_unspecified', 'Ni', 'Cr', 'Cr-VI', 'Al', 'Sn', 'U', 'Sb'];
  const groupOrder = Object.keys(GROUP_LABELS);
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : 2;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group) || a.form.localeCompare(b.form)
    || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-fish-${r.analyte}-${i}`; }
  return { rows, excluded, unmapped, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
export const scopeOf = r => ({ analyte: r.analyte, material: `fish:${r.group}:${r.form}`, basis: r.basis, unit: r.unit });
export const refKey = r => `fish-${r.analyte}-${r.group}-${r.form}-${slugify(r.basis)}`;
const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const scopeFor = r => ({ ingredient: 'fish', analyte: r.analyte, basis: `${r.basis}; ${GROUP_LABELS[r.group]}, ${FORM_LABELS[r.form]}; µg/kg`, statistic: 'subgroup median concentration',
  market: 'International fish evidence library', period: 'Source collection periods as reported' });
function medianOf(records, scope) {
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

export function referenceUnits(root, rows) {
  const maps = speciesMap(root), holds = holdsFor(root);
  const byKey = new Map(); const audit = [];
  const rowsByKey = Map.groupBy(rows.filter(r => r.unit === 'µg/kg'), refKey);
  const add = (key, u) => { if (!byKey.has(key)) byKey.set(key, []); byKey.get(key).push(u); };
  // GEMS/Food: HMI-calculated medians per WHO region × collection year, random sampling only.
  const gemsRows = rows.filter(r => r.source === GEMS);
  const recs = load(root, 'primary/gemsfood-fish-reference-input.json');
  const g = new Map();
  for (const r of recs) {
    if (r.value_review || r.representativeness !== 'Random sampling') continue;
    const k = JSON.stringify([r.analyte, r.material, r.prep, r.basis, r.region, r.year]);
    if (!g.has(k)) g.set(k, []); g.get(k).push({ lower: +r.lower_ug_kg, upper: +r.upper_ug_kg });
  }
  for (const [k, rs] of g) {
    const [a, material, prep, basis, region, year] = JSON.parse(k);
    const owner = gemsRows.find(r => r.analyte === a && r.primary.material === material && r.primary.preparation === prep && r.basis === basisLabel(basis) && r.primary.group === `WHO region ${region}`);
    if (!owner) { audit.push({ unit: k, admitted: false, reason: 'no rendered GEMS result in this scope' }); continue; }
    const scope = scopeFor(owner);
    const m = medianOf(rs, scope);
    add(refKey(owner), { ...scope, id: `gems-${slugify(material)}-${slugify(prep)}-${region}-${year}`, family: GEMS, group: `${region} ${year}`, lower: m.lower, upper: m.upper, n: rs.length,
      locator: `primary/gemsfood-fish-records.csv: ${a}, ${material}, ${prep}, ${basis}, ${region}, ${year}, random sampling (${rs.length} records)`, evidence_kind: 'HMI-calculated subgroup median', result_id: owner.result_id });
  }
  // FDA TDS: one subgroup median from the national composites of each food.
  const fda = load(root, `extraction/${FDA}.json`);
  for (const fd of fda.findings) {
    const owner = rows.find(r => r.finding_id === fd.id); if (!owner) continue;
    const scope = scopeFor(owner);
    add(refKey(owner), { ...scope, id: `fda-${slugify(fd.material)}-us-national`, family: FDA, group: fd.material, lower: fd.median_bounds_ug_kg[0], upper: fd.median_bounds_ug_kg[1], n: fd.n,
      locator: fd.locator, evidence_kind: 'HMI-calculated subgroup median', result_id: owner.result_id });
  }
  // Studies printing per-sample values: each sample is its own subgroup unit within its family.
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted' || x.source_id === GEMS || x.source_id === FDA) continue;
    const own = rows.filter(r => r.source === x.source_id && r.unit === 'µg/kg');
    (x.sample_values ?? []).forEach((s, i) => {
      const sp = maps.species[(s.species ?? '').trim()];
      const candidates = own.filter(r => r.analyte === s.analyte && (!sp || r.group === sp.group) && r.basis === basisLabel(s.basis ?? r.primary.basis));
      const owner = candidates.find(r => r.primary.group === s.group && ['sample_value', 'below_LOD', 'not_detected'].includes(r.statistic)) ?? candidates.find(r => r.primary.group === s.group) ?? (candidates.length && new Set(candidates.map(refKey)).size === 1 ? candidates[0] : null);
      const lower = s.censored ? 0 : s.value_ug_kg, upper = s.censored ? s.bound_ug_kg : s.value_ug_kg;
      if (!owner) { audit.push({ unit: `${x.source_id}#${i}`, admitted: false, reason: 'sample cannot be tied to one rendered result scope (species, form or basis ambiguous)' }); return; }
      if (owner.hold || holds[`${x.source_id}#sample${i}`]) { audit.push({ unit: `${x.source_id}#${i}`, admitted: false, reason: 'held for source integrity' }); return; }
      if (!Number.isFinite(lower) || !Number.isFinite(upper) || lower > upper) { audit.push({ unit: `${x.source_id}#${i}`, admitted: false, reason: 'no numerical value or bound' }); return; }
      const scope = scopeFor(owner);
      add(refKey(owner), { ...scope, id: `${x.source_id}-s${i}`, family: x.source_id, group: s.sample || s.group || `sample ${i + 1}`, lower, upper, n: 1, locator: s.locator || owner.locator, evidence_kind: 'reported sample value', result_id: owner.result_id });
    });
  }
  // Published subgroup medians (never study totals, means, ranges or maxima).
  for (const r of rows) {
    if (r.hold || r.source === GEMS || r.source === FDA || r.unit !== 'µg/kg' || r.statistic !== 'median' || !Number.isFinite(r.value) || r.group_kind === 'all_samples') continue;
    const scope = scopeFor(r);
    add(refKey(r), { ...scope, id: `${r.finding_id}`.replace(/[^a-zA-Z0-9-]+/g, '-'), family: r.source, group: r.group_full || r.region, lower: r.value, upper: r.value, n: r.n ?? 1, locator: r.locator, evidence_kind: 'reported subgroup median', result_id: r.result_id });
  }
  // Duplicate unit IDs within a family would fail the pooling engine; keep the first.
  for (const [k, list] of byKey) { const seen = new Set(); byKey.set(k, list.filter(u => { const id = `${u.family}:${u.id}`; if (seen.has(id)) return false; seen.add(id); return true; })); }
  return { byKey, rowsByKey, audit };
}

// Terminal reason codes (owner fullness rules, comparator rule 5).
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

// ---------------------------------------------------------------- within-study contrasts
// Partner order: same species and form with the other production system (farmed vs wild);
// same species with fresh/raw flesh when the row is a prepared form; the study's all-samples row.
function contrast(r, rows, bySource) {
  const t = rowTarget(r);
  if (!t) return { direction: 'summary', label: 'No same-study contrast', detail: 'This row has no numerical statistic that can be compared.', context: 'Within-study contrasts compare named subgroups using the same statistic, analyte, basis and method.' };
  const same = (bySource.get(r.source) ?? []).filter(x => x !== r && x.analyte === r.analyte && x.statistic === r.statistic && x.basis === r.basis && x.unit === r.unit && !x.hold && rowTarget(x)?.exact);
  let ref = null, kind = null;
  if (/farm|wild/i.test(r.production)) { ref = same.find(x => x.species_label === r.species_label && x.form === r.form && /farm|wild/i.test(x.production) && x.production !== r.production); kind = 'production'; }
  if (!ref && r.form !== 'fresh') { ref = same.find(x => x.species_label === r.species_label && x.form === 'fresh'); kind = 'preparation'; }
  if (!ref && r.group_kind !== 'all_samples') { ref = same.find(x => x.group_kind === 'all_samples' && x.form === r.form); kind = 'study_total'; }
  const rt = ref && rowTarget(ref);
  if (!rt || !t.exact) return { direction: t.exact ? 'summary' : 'bounded', label: t.exact ? 'No same-study reference' : 'Limits overlap', detail: 'No compatible same-study subgroup with the same statistic, basis and method.', context: 'No cross-study pooling is used in this mode.' };
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  const what = kind === 'production' ? `${r.production} versus ${ref.production}` : kind === 'preparation' ? `${FORM_LABELS[r.form]} versus fresh or raw` : 'subgroup versus the study total';
  return { kind: 'food_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${what}: ${r.group_full || r.region}: ${r.finding_text}; reference ${ref.group_full || ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same source, analyte, statistic, basis and analytical method. A descriptive difference, not a significance test, treatment effect or safety judgment.' };
}

export function fishOccurrence(root) {
  const { rows, parity, excluded, unmapped } = fishRows(root);
  if (unmapped.length && !process.env.FISH_ALLOW_UNMAPPED) throw Error(`Unmapped species/form labels: ${unmapped.length}; first ${JSON.stringify(unmapped[0])}`);
  const { byKey, rowsByKey, audit } = referenceUnits(root, rows);
  const bySource = Map.groupBy(rows, r => r.source);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows, bySource) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = [...byKey.entries()].map(([key, units]) => {
    const sample = rowsByKey.get(key)[0];
    const families = new Set(units.map(u => u.family));
    return {
      key, scope: scopeFor(sample), referenceUnits: units.map(({ result_id, evidence_kind, ...u }) => u),
      accepts: r => refKey(r) === key && r.unit === 'µg/kg' && !r.hold && !!rowTarget(r),
      label: `HMI ${GROUP_LABELS[sample.group]} (${FORM_LABELS[sample.form]}) ${sample.analyte} reference · ${families.size} sampling ${families.size === 1 ? 'family' : 'families'}`,
      targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
      methods: `HMI pools subgroup medians for one fish species group, one preparation form, one analyte species and one basis from every compatible sampling family in the evidence ledger: WHO GEMS/Food region-by-year medians (random sampling only), FDA Total Diet Study composites, per-fish or per-sample values printed by individual studies, and published subgroup medians. Each family has equal total weight; subgroups have equal weight within a family. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations.`,
      limitations: 'An international evidence-library reference, not a probability sample of any fish market. A species group can contain several species with different mercury levels; GEMS/Food regions are reporting regions, not catch or farm origins. A position is descriptive concentration, not a safety or compliance judgment.',
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : r.unit !== 'µg/kg' ? `Reported in ${r.unit} without a density; it cannot be converted to µg/kg without an assumption.`
    : rowTarget(r) ? 'No compatible reference units for this fish species group, form, analyte and basis.'
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
    r.reason_code = reasonCode(r); r.comparison_state = state;
    r.comparison_attempts = [
      { mode: 'hmi_rating', outcome: c.hmi.baseline.level ? 'rated' : 'unavailable', reason: c.hmi.baseline.level ? `${c.hmi.baseline.level} against ${c.hmi.baseline.reference_id}` : (c.hmi.detail || 'No HMI position') },
      { mode: 'within_study_direct', outcome: state === 'rated' ? 'not_selected' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : 'unavailable', reason: c.contrast.label || c.contrast.detail || 'No same-study contrast' },
      { mode: 'bounded_classification', outcome: ['rated', 'direct'].includes(state) ? 'not_selected' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable', reason: c.contrast.direction === 'bounded' ? 'Reporting limits overlap the comparator' : 'No overlapping-limit classification applies' },
    ];
  }
  const unit_list = [...byKey.entries()].flatMap(([key, list]) => list.map(u => ({ id: u.id, family: u.family, ref_key: key, result_id: u.result_id, lower: u.lower, upper: u.upper, locator: u.locator })));
  return { ...compiled, parity, excluded, unit_list, unit_audit: audit, rowsByKey };
}

export const fishOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI fish reference (same species group and form)' }, { value: 'contrast', label: 'Same-study contrast' }],
  caption: 'Fish findings from every extracted survey, total diet study and monitoring dataset, in µg/kg with each source’s statistic, basis, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one fish subgroup and metal; a mean, median and range from the same fish are separate rows. Species groups, preparation forms (fresh, cooked, canned, smoked or dried, oil, products), mercury and arsenic species, and wet versus dry weight are never pooled. Ratings place a reported mean, median or sample result against an HMI reference built only from the same species group, form, analyte and basis. Same-study contrasts compare farmed with wild fish, a prepared form with fresh fish, or a subgroup with the study total. Held rows failed a check against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Fish species group and preparation form; the drawer gives the species exactly as the source names it.', 'Collection scope': 'Catch or farm area, sampling site or purchase market as reported; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic and basis. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the HMI reference for the same species group, form, analyte and basis. Higher or Lower compare a subgroup with its own study comparator.', Evidence: 'Original values, locators, methods, holds and limitations.' },
};
