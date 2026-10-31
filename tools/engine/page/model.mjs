// Generic occurrence model: one row per finding, references by form × state × basis,
// comparisons in the order HMI reference → within-study contrast → bounded, and the
// owner's terminal reason codes. Shared Rice components own all markup.
import { applyHmiBaselines } from '../../contracts/pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../evidence/build-hmtc-aggregate-distributions.mjs';
import { GEMS, FDA, sha, fmt, sourceMeta, ANALYTE_ORDER, analyteWord, capital } from './common.mjs';
import { BASIS_LABELS, BASIS_SHORT, EXTERNAL_SITES, SITE_LABELS, classifyForm, statisticLabel } from './classify.mjs';

const hash12 = v => sha(JSON.stringify(v)).slice(0, 12);
export const isExternal = r => EXTERNAL_SITES.has(r.site_context);
const isControlGroup = g => /\bcontrol\b|\breference (?:site|area|field)|background|upwind|distant|grocery|unpolluted|non-?contaminated|clean (?:site|area)|well water|fresh ?water|ground ?water|tap water/i.test(g);

export function shortLabel(text, max = 42) {
  let t = String(text ?? '').trim();
  if (t.length > max) { const head = t.split(/\s[(–—-]\s?|,\s|;\s/)[0].trim(); if (head.length > 6) t = head; }
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() || t.slice(0, max) : t;
}
// A study's code ("F4") is shown with the study's own description of the group; a bare
// code says plainly that it is the study's label.
const KIND_WORD = { site_or_habitat: 'site', treatment: 'treatment', cultivar: 'cultivar', variety: 'variety', season: 'season', growing_origin: 'area', purchase_market: 'market', year: 'year', floral_type: 'type' };
export function groupLabel(group, kind) {
  const g = String(group ?? '').trim();
  const coded = g.match(/^([A-Za-z]{0,3}\d{0,3}[A-Za-z]?)\s+[—–-]\s+(.+)$/);
  const fit = t => shortLabel(t.length > 64 ? t.replace(/\s*\([^)]*\)\s*$/, '') : t, 64);
  if (coded && coded[1].length <= 5) return fit(coded[2]);
  if (/^[A-Z]{1,3}\d{0,3}$|^[A-Z]?\d{1,3}[A-Z]?$/.test(g)) return `${KIND_WORD[kind] ?? 'group'} ${g}, as labelled in the study`;
  return fit(g);
}
const regionLabel = f => f.source_id === GEMS
  ? String(f.group).replace('WHO region ', '').replace(/; random sampling/i, ', random').replace(/; targeted sampling/i, ', targeted').replace(/; unknown|; unstated sampling.*?(?=;|$)/i, ', sampling unstated').replace(/;\s*/g, ', ')
  : groupLabel(f.group, f.group_kind);
const REGION_TYPE = { growing_origin: 'Reported growing area', purchase_market: 'Purchase or reporting market; growing area not identified', treatment: 'Treatment within one study',
  site_or_habitat: 'Field site within one study', season: 'Season within one study', variety: 'Variety within one study', cultivar: 'Cultivar within one study',
  floral_type: 'Floral type within one study', material_or_preparation: 'Product form within one study', year: 'Collection year within one study', brand_category: 'Product category within one study' };
const regionType = f => (REGION_TYPE[f.group_kind] ?? 'All samples in the study') + (isExternal(f) ? ` (${SITE_LABELS[f.site_context].toLowerCase()})` : '');

// ---------------------------------------------------------------- targets and finding text
const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
function censoredBound(f) {
  if (Number.isFinite(f.value)) return null;
  if (Number.isFinite(f.lod) && (['below_LOD', 'not_detected'].includes(f.statistic) || /^\s*</.test(String(f.reported_text)))) return { lower: 0, upper: f.lod, exact: false, statistic: 'non-detect bounds' };
  return null;
}
// Means, medians and sample values are positioned; ranges, maxima, minima and percentiles never are.
export function rowTarget(r) {
  if (r.hold) return null;
  const f = r.primary;
  if (f.statistic === 'median' && f.median_bounds) return { lower: f.median_bounds[0], upper: f.median_bounds[1], exact: f.median_bounds[0] === f.median_bounds[1], statistic: 'median' };
  if (['mean', 'sample_value', 'geometric_mean', 'median'].includes(f.statistic) && Number.isFinite(f.value)) return point(f.value, f.statistic);
  return censoredBound(f);
}
function findingText(f) {
  const c = censoredBound(f);
  if (c) return `<${fmt(c.upper)} µg/kg${f.statistic === 'mean' ? ' (mean below the reporting limit)' : ''}`;
  if (['below_LOD', 'not_detected'].includes(f.statistic)) return 'Not detected (no numerical limit reported)';
  if (f.statistic === 'median' && f.median_bounds) { const [a, b] = f.median_bounds; return a === b ? `${fmt(a)} µg/kg (median)` : a === 0 ? `median <${fmt(b)} µg/kg (below reporting limits)` : `median ${fmt(a)}–${fmt(b)} µg/kg (bounds)`; }
  if (f.statistic === 'range' && Number.isFinite(f.max)) return Number.isFinite(f.min) ? `${fmt(f.min)}–${fmt(f.max)} µg/kg (range)` : `up to ${fmt(f.max)} µg/kg (range; lowest below the limit)`;
  if (f.statistic === 'min' && Number.isFinite(f.value ?? f.min)) return `${fmt(f.value ?? f.min)} µg/kg (minimum)`;
  if (f.statistic === 'max' && Number.isFinite(f.value ?? f.max)) return `${fmt(f.value ?? f.max)} µg/kg (maximum)`;
  if (Number.isFinite(f.value)) return `${fmt(f.value)} µg/kg (${statisticLabel(f.statistic)}${Number.isFinite(f.sd) ? ` ± ${fmt(f.sd)} SD` : ''})`;
  return `${f.reported_text || 'Reported in original units'}${f.unit_original && !String(f.reported_text).includes(f.unit_original) ? ' ' + f.unit_original : ''}`.trim();
}

// ---------------------------------------------------------------- rows
// A source-reported percentile is spelled out; the P95 shorthand never reaches a page.
// Extraction notes can carry internal process remarks; those sentences never reach a page.
const spell = x => x == null ? x : String(x).split(/(?<=[.;])\s+/).filter(t => !/CLAUDE\.md|AGENTS\.md|brand firewall|\bHMTc\b|HMT&C|certification threshold/i.test(t)).join(' ')
  .replace(/\b[Pp](\d{2})\b/g, (_, n) => `${n}th percentile`);
export function buildRows(evidence) {
  for (const f of evidence.findings) {
    for (const k of ['reported_text', 'group', 'notes', 'material_text', 'locator', 'hold', 'integrity_flag', 'censoring', 'method']) if (typeof f[k] === 'string') f[k] = spell(f[k]);
    // Line breaks in source text would split the page's raw HTML blocks in Markdown.
    // "%%" opens an Obsidian comment that Quartz strips from the page source; a doubled
    // percent sign in source text ("0%%") is a typo for one.
    for (const [k, x] of Object.entries(f)) if (typeof x === 'string' && /\n|%%/.test(x)) f[k] = x.replace(/\s*\n\s*/g, ' ').replace(/%{2,}/g, '%');
  }
  const { slug } = evidence.page;
  const formLabels = new Map();
  const rows = evidence.findings.filter(f => f.analyte).map(f => {
    const meta = sourceMeta(f.source_id), form = classifyForm(f.material_text);
    // Without a recorded scope decision the food is named by the page, qualified by its form.
    // Product pilot pages name rows in plain words, not with the title-cased page title.
    const title = evidence.product_match ? capital(evidence.product_match.label) : evidence.wiki?.fm?.title ?? capital(slug.replace(/-/g, ' '));
    const scopeMaterial = f.scope_material ?? `${slug}: ${['raw', 'processed'].includes(form.key) ? `${title}, as sold` : `${title}, ${form.label}`}`;
    const food = scopeMaterial.replace(new RegExp(`^${slug.replace(/-/g, '[- ]')}:\\s*`, 'i'), '').trim() || capital(form.label);
    const basis = f.basis ?? BASIS_LABELS[f.basis_key] ?? BASIS_LABELS.unstated;
    formLabels.set(scopeMaterial, food);
    const region = regionLabel(f);
    return {
      id: f.id, scope_key: f.id, finding_id: f.id, source: f.source_id, source_label: meta.label, primary_url: meta.url,
      analyte: f.analyte, food, material_key: scopeMaterial, material_full: f.material_text || food, region, group_full: f.group, group_kind: f.group_kind,
      site_context: f.site_context, sampling: f.sampling, period: f.period, region_type: regionType(f), n: f.n, sampling_unit: f.sampling_unit, record_type: 'source_summary',
      statistic: f.statistic, statistic_label: statisticLabel(f.statistic), finding_text: findingText(f), value: Number.isFinite(f.value) ? f.value : null, unit: 'µg/kg',
      reported: { text: f.reported_text, value: f.reported_value ?? null, unit: f.unit_original ?? 'µg/kg' }, original_result: f.reported_text,
      basis, basis_key: f.basis_key, display_basis: basis, short_basis: BASIS_SHORT[f.basis_key] ?? BASIS_SHORT.unstated,
      method: f.method, locator: f.locator, censoring: f.censoring,
      limitations: [f.hold, f.integrity_flag && !f.hold ? `Source check: ${f.integrity_flag}` : null, f.notes].filter(Boolean).join(' '),
      overlap: 'Subgroup rows from the same source share its laboratory and sampling frame; they are not independent studies.',
      conversion: { method: f.conversion }, hold: f.hold, primary: f, lod_ug_kg: f.lod, origin: f.origin,
      // Product pilot pages only; undefined (and omitted) everywhere else.
      match_level: f.match_level, not_peer_reviewed: f.not_peer_reviewed,
    };
  });
  const formCount = new Map();
  for (const r of rows) formCount.set(r.material_key, (formCount.get(r.material_key) ?? 0) + 1);
  const formOrder = [...formCount].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([k]) => k);
  const order = a => { const i = ANALYTE_ORDER.indexOf(a); return i < 0 ? 999 : i; };
  const statRank = s => { const i = ['median', 'mean', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s); return i < 0 ? 50 : i; };
  const tier = r => r.source === GEMS ? 0 : r.source === FDA ? 1 : 2;
  const basisRank = b => ['fw', 'dw', 'unstated', 'per_litre'].indexOf(b);
  rows.sort((a, b) => order(a.analyte) - order(b.analyte) || a.analyte.localeCompare(b.analyte) || formOrder.indexOf(a.material_key) - formOrder.indexOf(b.material_key)
    || basisRank(a.basis_key) - basisRank(b.basis_key) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.source.localeCompare(b.source)
    || a.group_full.localeCompare(b.group_full, 'en', { numeric: true }) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-${slug}-${r.analyte}-${i}`; }
  return { rows, formOrder, formLabels };
}

// ---------------------------------------------------------------- reference units
export const scopeOf = r => `${r.analyte}|${r.material_key}|${r.basis}`;
function scopeFor(slug, r) {
  return { ingredient: slug, analyte: r.analyte, basis: `${r.food}; ${r.basis}, µg/kg; no moisture conversion`, statistic: 'subgroup median concentration',
    market: `International ${slug.replace(/-/g, ' ')} evidence library`, period: 'Source collection years as reported' };
}
function medianOf(records) {
  const s = { ingredient: 'x', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...s, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), s).median;
}
const repOf = r => /random/i.test(r.representativeness ?? r.sampling ?? '') ? 'random' : /targeted|selective/i.test(r.representativeness ?? r.sampling ?? '') ? 'targeted' : 'unknown';
const same = (a, b) => String(a ?? '').trim().toLowerCase() === String(b ?? '').trim().toLowerCase();

// Units: monitoring records become HMI-calculated subgroup medians per reporting region,
// sampling type and year; total diet composites and other sample values are single
// observations; literature subgroup medians from ordinary settings enter once.
export function referenceUnits(evidence, rows) {
  const { slug } = evidence.page;
  const units = new Map(), audit = [];
  const add = (row, u) => { const k = scopeOf(row); if (!units.has(k)) units.set(k, []); units.get(k).push({ ...scopeFor(slug, row), ...u, result_id: row.result_id, owner: row }); };
  const gemsRows = rows.filter(r => r.source === GEMS);
  // Monitoring records.
  const groups = new Map();
  for (const rec of evidence.gems_records ?? []) {
    if (rec.value_review || rec.fda_duplicate) { audit.push({ unit: rec.item_id, admitted: false, reason: rec.value_review ? 'held for value review' : 'duplicate of a total diet composite' }); continue; }
    if (repOf(rec) === 'targeted') { audit.push({ unit: rec.item_id, admitted: false, reason: 'targeted sampling describes suspected contamination, not ordinary occurrence' }); continue; }
    // Store records name their owning result; legacy records are matched by scope.
    const owners = rec.owner_id ? gemsRows.filter(r => r.finding_id === rec.owner_id) : gemsRows.filter(r => r.analyte === rec.analyte && same(r.primary.region, rec.region) && (r.primary.sampling ?? 'unknown') === repOf(rec)
      && (rec.material == null || same(r.primary.form_key, rec.material) || r.id.split(':').includes(rec.material))
      && (rec.basis_key == null || r.id.split(':').includes(rec.basis_key) || r.basis_key === rec.basis_key)
      && same(r.primary.variant ?? '', rec.variant ?? ''));
    // A result reported per collection year owns only that year's records.
    const covers = r => !r.primary.years?.length || (rec.year >= Math.min(...r.primary.years) && rec.year <= Math.max(...r.primary.years));
    const ranked = [...owners.filter(covers), ...owners.filter(r => !covers(r))];
    const owner = ranked.find(r => r.statistic === 'median' && !r.hold) ?? ranked.find(r => !r.hold);
    if (!owner) { audit.push({ unit: rec.item_id, admitted: false, reason: owners.length ? 'owning monitoring result is held' : 'no rendered monitoring result for this reporting region, sampling type and form (for example a European Union record that restates EURO submissions)' }); continue; }
    const k = `${owner.result_id}|${rec.year}`;
    if (!groups.has(k)) groups.set(k, { owner, year: rec.year, records: [] });
    groups.get(k).records.push({ lower: +rec.lower_ug_kg, upper: +rec.upper_ug_kg, item_id: rec.item_id });
  }
  for (const { owner, year, records } of groups.values()) {
    const m = medianOf(records);
    add(owner, { id: `gems-${hash12([owner.id, year])}`, family: GEMS, group: `${owner.region} ${year}`, lower: m.lower, upper: m.upper, n: records.length,
      locator: `${owner.food}, ${owner.region}, ${year}: HMI median of ${records.length} individual GEMS/Food results`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  // Sample values: monitoring composites and printed individual samples.
  for (const [sid, src] of evidence.sources) {
    if (src.disposition !== 'occurrence_extracted' || !src.sample_values?.length || sid === GEMS) continue;
    const owned = rows.filter(r => r.source === sid && !r.hold);
    const hasMedians = new Set(owned.filter(r => r.statistic === 'median').map(scopeOf));
    for (const [i, s] of src.sample_values.entries()) {
      const lower = Number.isFinite(s.lower_ug_kg) ? s.lower_ug_kg : s.value_ug_kg, upper = Number.isFinite(s.upper_ug_kg) ? s.upper_ug_kg : s.value_ug_kg;
      const owner = owned.find(r => r.analyte === s.analyte && (s.material == null || same(r.primary.form_key, s.material))) ?? null;
      const id = `${sid}:${s.sample ?? s.id ?? hash12(s)}:${s.analyte}`;
      if (!owner) { audit.push({ unit: id, admitted: false, reason: 'no rendered result of this source owns the sample' }); continue; }
      if (sid !== FDA && hasMedians.has(scopeOf(owner))) { audit.push({ unit: id, admitted: false, reason: 'the source’s own subgroup medians already represent these samples' }); continue; }
      if (!Number.isFinite(lower) || !Number.isFinite(upper) || lower < 0 || lower > upper) { audit.push({ unit: id, admitted: false, reason: 'no numerical value or limit' }); continue; }
      if (isExternal(owner)) { audit.push({ unit: id, admitted: false, reason: `${SITE_LABELS[owner.site_context].toLowerCase()}: compared but never part of an ordinary-occurrence reference` }); continue; }
      if (owner.basis_key === 'unstated') { audit.push({ unit: id, admitted: false, reason: 'basis not stated' }); continue; }
      add(owner, { id: `smp-${hash12([id, i])}`, family: sid, group: [s.group, s.region].filter(Boolean).join(' ') || 'samples', lower, upper, n: 1,
        locator: s.locator ?? owner.locator, evidence_kind: 'reported sample value' });
    }
  }
  // Literature subgroup medians.
  for (const r of rows) {
    if (r.source === GEMS) continue;
    // A result below the reporting limit is a bounded median (0 to the limit), as the baseline admits.
    const UNIT_STATS = ['median', 'sample_value', 'not_detected', 'below_LOD'];
    const t = UNIT_STATS.includes(r.statistic) ? rowTarget(r) : null;
    let reason = null;
    if (r.hold) reason = 'held: fails a source integrity check';
    else if (!UNIT_STATS.includes(r.statistic)) reason = `a ${statisticLabel(r.statistic)} is not an observed subgroup median or sample value`;
    else if (!t) reason = `${statisticLabel(r.statistic)} without a numeric value or reporting limit`;
    else if (isExternal(r)) reason = `${SITE_LABELS[r.site_context].toLowerCase()}: compared but never part of an ordinary-occurrence reference`;
    else if (r.basis_key === 'unstated') reason = 'basis not stated: cannot join an as-sold, fresh-weight or dry-weight reference';
    else if (/category|class\b|quantile|quartile|tertile/i.test(r.group_full)) reason = 'a concentration class defined by the result itself, not a sampling subgroup';
    else if (r.group_kind === 'all_samples' && rows.some(x => x !== r && x.source === r.source && scopeOf(x) === scopeOf(r) && x.statistic === 'median' && x.group_kind !== 'all_samples')) reason = 'the source’s subgroup medians already represent these samples';
    else if (r.source === FDA && evidence.sources.get(FDA)?.sample_values?.some(s => s.analyte === r.analyte)) reason = 'the individual composites enter instead of their median';
    if (reason) { audit.push({ unit: r.finding_id, admitted: false, reason }); continue; }
    add(r, { id: `med-${hash12(r.finding_id)}`, family: r.source, group: r.group_full, lower: t.lower, upper: t.upper, n: r.n ?? 1, locator: r.locator, evidence_kind: r.statistic === 'median' ? 'reported subgroup median' : r.statistic === 'sample_value' ? 'reported sample value' : 'result below the reporting limit, bounded from zero to the limit' });
  }
  return { units, audit };
}

// ---------------------------------------------------------------- within-study contrasts
const sameCompare = (r, x) => x.source === r.source && x.analyte === r.analyte && x.statistic === r.statistic && x.id !== r.id && !x.hold;
const baseForm = m => /raw|fresh|whole|unpeeled|as sold|grain\b/i.test(m) && !/cooked|dried|peeled|juice|canned|frozen/i.test(m);
function contrastRef(r, rows) {
  const peers = rows.filter(x => sameCompare(r, x));
  if (!peers.length) return null;
  // A contaminated or treated setting against its own study's control or ordinary setting.
  if (isExternal(r) || /treatment|irrigat/i.test(r.group_kind)) {
    const ctl = peers.find(x => x.material_key === r.material_key && x.basis_key === r.basis_key && !isExternal(x) && (isControlGroup(x.group_full) || x.site_context === 'ordinary' || x.site_context === 'market'))
      ?? peers.find(x => x.material_key === r.material_key && x.basis_key === r.basis_key && isControlGroup(x.group_full));
    if (ctl) return { ref: ctl, kind: 'site' };
  }
  if (isControlGroup(r.group_full)) return null;
  // Targeted monitoring against random sampling in the same region and form.
  if (r.source === GEMS && r.sampling === 'targeted') {
    const rand = peers.find(x => x.material_key === r.material_key && x.basis_key === r.basis_key && x.primary.region === r.primary.region && x.sampling === 'random');
    if (rand) return { ref: rand, kind: 'sampling' };
  }
  // A processed or prepared form against the unprocessed form of the same group.
  if (!baseForm(r.material_key)) {
    const raw = peers.find(x => x.material_key !== r.material_key && baseForm(x.material_key) && x.basis_key === r.basis_key
      && (x.source === GEMS ? x.primary.region === r.primary.region && x.sampling === r.sampling : x.group_full === r.group_full));
    if (raw) return { ref: raw, kind: 'form' };
  }
  // One group of an ordinary-setting study (an origin, market or product) against the median of
  // the same study's other groups for the same form, basis, analyte and statistic. Same method and
  // basis throughout, so it holds even where the source does not state the basis.
  // Study-wide summaries ("all products", "overall") contain the groups and are never one of them.
  const aggregate = g => /\b(all|overall|total|pooled|combined|whole (?:sample|survey))\b|abstract|^\s*$/i.test(g ?? '');
  if (isExternal(r) || r.source === FDA || aggregate(r.group_full) || process.env.HMI_GROUP_CONTRAST === '0') return null;
  const t = rowTarget(r);
  if (!t?.exact) return null;
  const groups = new Map(), locs = new Set();
  for (const x of peers) {
    if (x.material_key !== r.material_key || x.basis_key !== r.basis_key || x.group_full === r.group_full || isExternal(x) || isControlGroup(x.group_full) || aggregate(x.group_full)) continue;
    if (x.source === GEMS && x.sampling !== r.sampling) continue;
    const xt = rowTarget(x);
    if (xt?.exact && !groups.has(x.group_full)) { groups.set(x.group_full, xt.lower); locs.add(x.locator); }
  }
  // At least four groups in all, the same display minimum as an HMI reference.
  if (groups.size < 3) return null;
  const v = [...groups.values()].sort((a, b) => a - b), med = v.length % 2 ? v[(v.length - 1) / 2] : (v[v.length / 2 - 1] + v[v.length / 2]) / 2;
  const label = `the median of ${groups.size} other groups`;
  return { kind: 'group', ref: { id: `${r.source}:${r.analyte}:${r.statistic}:group-median`, source: r.source, food: r.food, material_key: r.material_key, region: label, n: null,
    finding_text: `${fmt(med)} µg/kg (${r.statistic === 'sample_value' ? 'sample values' : `${r.statistic}s`} of ${groups.size} groups)`, locator: [...locs].join('; '),
    primary: { statistic: 'median', value: med, median_bounds: null } } };
}
const CONTEXT = {
  site: 'Same study, analyte, method and statistic; a contaminated, treated or exposed setting against the study’s own control or ordinary setting. A descriptive difference, not a significance test or safety judgment.',
  sampling: 'Same monitoring programme, reporting region, form and statistic; targeted sampling against random sampling. A descriptive difference, not a significance test or safety judgment.',
  group: 'Same study, form, basis, analyte and statistic; one group (an origin, market or product) against the median of the study’s other groups. A descriptive position within one study, not a significance test, a sourcing preference or a safety judgment.',
  form: 'Same study, group, analyte and statistic; a prepared or processed form against the unprocessed form. Forms differ in water content and preparation, so this is a descriptive difference, not a measured processing effect.',
};
function contrast(r, rows) {
  const t = rowTarget(r), hit = contrastRef(r, rows), ref = hit?.ref, rt = ref && rowTarget(ref);
  const none = { direction: 'summary', label: 'No same-study contrast', detail: 'This source reports no compatible same-study comparison group with the same statistic.', context: 'Within-study contrasts compare sites, sampling types, forms or groups inside one source using the same statistic and method.' };
  if (!t || !ref || !rt) return none;
  const ctx = CONTEXT[hit.kind];
  const detail = `${r.region}: ${r.finding_text}; comparison ${ref.region}${ref.material_key !== r.material_key ? ` (${ref.food.toLowerCase()})` : ''}: ${ref.finding_text}. ${r.locator}; comparison ${ref.locator}.`;
  if (!t.exact || !rt.exact) {
    const overlap = !(t.upper < rt.lower || t.lower > rt.upper);
    return { direction: overlap ? 'bounded' : (t.upper < rt.lower ? 'lower' : 'higher'), label: overlap ? 'Limits overlap' : `${fmt(t.lower)}–${fmt(t.upper)} versus ${fmt(rt.lower)}–${fmt(rt.upper)} µg/kg`,
      kind: 'site_or_form', target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`, detail, context: `${ctx} Reporting-limit bounds retained.`, ref_id: ref.id, contrast_kind: hit.kind };
  }
  const direction = t.lower < rt.lower ? 'lower' : t.lower > rt.lower ? 'higher' : 'same';
  return { kind: 'site_or_form', direction, label: `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: `${ref.food}: ${ref.region}`,
    target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit, detail, context: ctx, ref_id: ref.id, contrast_kind: hit.kind };
}

// ---------------------------------------------------------------- comparisons and terminal reasons
export function stateOf(r) {
  const c = r.profile.variants['::'].comparisons;
  return c.hmi.baseline.level ? 'rated' : ['higher', 'lower', 'same'].includes(c.contrast.direction) ? 'direct' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable';
}
function reasonCode(r) {
  const c = r.profile.variants['::'].comparisons;
  if (stateOf(r) !== 'unavailable') return null;
  if (r.hold) return 'value_fails_source_integrity_check';
  if (!rowTarget(r)) return 'no_numeric_value_or_bound';
  if (r.basis_key === 'unstated') return 'basis_incompatible_with_all_references';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return r.basis_key === 'dw' ? 'basis_incompatible_with_all_references' : 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

export function buildOccurrence(evidence) {
  const { slug } = evidence.page;
  const title = evidence.wiki?.fm?.title ?? capital(slug.replace(/-/g, ' '));
  const { rows, formOrder, formLabels } = buildRows(evidence);
  const { units, audit } = referenceUnits(evidence, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = [...units].map(([key, list]) => {
    const owner = list[0].owner, fams = [...new Set(list.map(u => u.family))];
    const referenceUnits = list.map(({ owner, result_id, evidence_kind, ...u }) => u);
    const lead = fams.length === 1 ? sourceMeta(fams[0]).label : null;
    return {
      key: `${slug}-${hash12(key)}`, scope: scopeFor(slug, owner), referenceUnits, scope_key: key, owner,
      accepts: r => scopeOf(r) === key && !r.hold && !!rowTarget(r),
      label: `HMI ${title.toLowerCase()} ${owner.analyte} reference · ${owner.food}${owner.basis_key === 'dw' ? ', dry weight' : owner.basis_key === 'unstated' ? ', basis not stated' : ''}`,
      targetStatistic: r => `${statisticLabel(r.statistic)} as reported`, target: r => rowTarget(r),
      sensitivity: 'family-group', sensitivityLabel: 'Equal weight per subgroup',
      methods: `HMI pools subgroup medians for ${owner.food.toLowerCase()} on a ${owner.basis.toLowerCase()} basis: monitoring results summarized as one median per reporting region, sampling type and collection year, total diet composites and printed sample values as single observations, and printed subgroup medians from ordinary farms or markets. Each sampling family has equal total weight. Non-detects stay as zero-to-limit intervals, so quartiles carry lower and upper bounds. Means, ranges and maxima never enter as observations. Other forms, other bases, targeted sampling and results from mining, industrial, wastewater-affected, experimental, fertiliser or manufacturer settings are kept out of this reference.`,
      limitations: `${lead ? `${lead} is the only compatible sampling family for ${owner.food.toLowerCase()} on this basis in the completed ${title.toLowerCase()} ledger, so this single-family reference cannot represent other markets.` : `${fams.length} sampling families with different designs; none is a probability sample of world supply.`} Reporting regions and purchase markets are not growing areas. Non-detects with differing limits widen the bounds. A position is descriptive concentration, not a safety or compliance judgment.`,
    };
  });
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : !rowTarget(r) ? (['range', 'max', 'min'].includes(r.statistic) || /percentile/.test(r.statistic) ? `A ${statisticLabel(r.statistic)} describes spread or an extreme, not a central value that can be placed against a reference.` : 'The source reports no numerical value or limit for this result; its position cannot be identified.')
    : r.basis_key === 'unstated' ? 'The source does not state whether results are fresh or dry weight, so no reference applies.'
    : r.basis_key === 'dw' ? 'Dry-weight results have no compatible dry-weight reference for this form in the ledger.'
    : `No compatible reference units for ${r.food.toLowerCase()} and ${analyteWord(r.analyte)} on this basis.`);
  compiled.record.frozen = BUILD_FROZEN;
  for (const r of compiled.rows) for (const v of Object.values(r.profile.variants)) {
    v.comparisons.hmi.baseline.frozen = BUILD_FROZEN;
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
  const unitList = [...units].flatMap(([k, list]) => list.map(u => ({ id: u.id, scope_key: k, result_id: u.result_id, family: u.family, def_key: definitions.find(d => d.scope_key === k).key, locator: u.locator })));
  return { ...compiled, title, definitions, unit_list: unitList, unit_audit: audit, formOrder, formLabels,
    unit_counts: Object.fromEntries([...units].map(([k, u]) => [k, { units: u.length, families: [...new Set(u.map(x => x.family))] }])) };
}
const BUILD_FROZEN = process.env.HMI_BUILD_DATE || '2026-10-22';

export function occurrenceOptions(title, slug) {
  const t = title.toLowerCase();
  return {
    referenceNote: false, defaultComparison: 'reviewed',
    comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: `HMI ${t} reference (by form and basis)` }, { value: 'contrast', label: 'Same-study site, sampling, form or group contrast' }],
    caption: `${title} findings from monitoring programmes, total diet studies and every extracted field, market and contaminated-site study, in µg/kg with each source’s form, basis, statistic and censoring retained.`,
    contextHTML: `<p>Each row is one statistic a source reports for one form of ${t}, group and metal; percentiles, ranges and maxima reported for the same samples as a mean or median are shown on that row. Different forms and preparation states are kept apart, and dry-weight results never share a reference with as-sold or fresh-weight results. Ratings place a result against an HMI reference built from monitoring results and ordinary-setting medians for the same form and basis. Same-study contrasts compare a contaminated or treated site with its control, targeted with random sampling, a prepared form with the unprocessed one, or one group of a study with the median of its other groups. Held rows failed a check against their own source and are shown but not compared.</p>`,
    columnNotes: { 'Food form': `The form of ${t} analysed, as the source describes it.`, 'Collection scope': 'Reporting region and sampling type, growing area, field site or purchase market as the source reports; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic and basis. A less-than value is a reporting limit, not zero.', Comparison: 'Low, Moderate and High place the result below, within or above the middle half of the HMI reference for the same form and basis. Higher or Lower compare a site, sampling type or form with its own study’s comparison group.', Evidence: 'Original values, basis, locators, methods, holds and limitations.' },
  };
}
