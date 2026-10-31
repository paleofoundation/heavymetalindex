// Scientific adapter only. Shared Rice components own all markup and interaction.
// Every extracted occurrence result maps to exactly one table row; a source subgroup's
// statistics (mean, median, range ends) for one analyte are separate rows.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { applyHmiBaselines } from '../../pilot/hmi-baseline.mjs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

export const auditDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/plantain';
// Library papers with plantain results but no wiki source record yet: proposed records await central adoption.
export const proposedDir = `${auditDir}/proposed-sources`;
export const sourceFile = (root, id) => fs.existsSync(path.join(root, 'wiki/sources', `${id}.md`)) ? `wiki/sources/${id}.md` : `${proposedDir}/${id}.md`;
const GEMS = 'who-gemsfood-heavy-metal-contaminants', ADJ = 'adjeimensah2021-ghana-mining-home-processing-crops', BOR = 'borteysam2015-tarkwa-cassava-plantain-soil-metals', ORI = 'orisakwe2012-owerri-food-crops-fruits-metals', MODE = 'mode2026-calcium-carbide-ripening-climacteric-fruits';
const fmt = v => Number(v.toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });

// Values that cannot be verified against their own paper stay visible but never enter a
// reference or a comparison (owner fullness rules: value_fails_source_integrity_check).
export const holds = [
  { match: id => id === `${BOR}:tAs:all-plantain-tarkwa:max`, reason: 'The digits of this cell are scrambled in the only library copy and read as either 0.026 or 0.062 mg/kg; the value cannot be verified against the paper.' },
  { match: id => id === `${BOR}:Cr:all-plantain-tarkwa:median`, reason: 'The digits of this cell are scrambled in the only library copy and read as either 0.023 or 0.032 mg/kg; the value cannot be verified against the paper.' },
  { match: id => id === `${MODE}:Pb:control:mean`, reason: 'The plantain control lead (0.052 ± 0.021 mg/kg) is printed identically to the mango control lead in the same table; a copying error cannot be excluded, so it is shown but not compared.' },
  { match: id => id === `${BOR}:Cr:all-plantain-tarkwa:max`, reason: 'The digits of this cell are scrambled in the only library copy and read as either 0.065 or 0.056 mg/kg; the value cannot be verified against the paper.' },
];
export const holdFor = id => holds.find(h => h.match(id))?.reason ?? null;

// Basis is part of every scope: plantain results here are fresh as sold, cooked as eaten,
// fried chips, pulp on an unstated basis, a basis the source contradicts, or dry weight.
const BASIS = {
  [ADJ]: { key: 'pulp-unstated', label: 'Peeled pulp as analysed; fresh or dry basis not stated', short: 'Basis not stated' },
  [BOR]: { key: 'conflicting', label: 'Edible part; source labels results wet weight but states dry-weight expression', short: 'Basis conflicting' },
  [ORI]: { key: 'dry', label: 'Edible part, dry weight (oven-dried powder)', short: 'Dry weight' },
  [MODE]: { key: 'ripened-homogenate', label: 'Homogenised ripened fruit, fresh basis; peel status not stated', short: 'Ripened, fresh' },
};
const gemsBasis = form => /chips/i.test(form) ? { key: 'chips', label: 'Plantain chips as consumed', short: 'Chips as eaten' }
  : /cooked/i.test(form) ? { key: 'cooked', label: 'Cooked plantain as consumed, wet weight', short: 'Cooked, as eaten' }
  : { key: 'fresh', label: 'Fresh plantain as sold, wet weight', short: 'Fresh, as sold' };

// Short collection-scope labels; the drawer keeps the source's full subgroup wording.
const REGION = { [ADJ]: fd => fd.group.split(' / ')[0], [BOR]: () => 'Tarkwa mining-area farms', [ORI]: () => 'Ohaji, Umuagwo, Owerri', [MODE]: fd => fd.group.replace(/^Ripened with /, 'Carbide ').replace(/ calcium carbide$/, '') };
const load = (root, f) => JSON.parse(fs.readFileSync(path.join(root, auditDir, f), 'utf8'));
function sourceMeta(root, id) {
  const fm = matter(fs.readFileSync(path.join(root, sourceFile(root, id)), 'utf8')).data;
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors || '').split(/;|,(?= [A-Z])/).filter(Boolean);
  const surname = String(authors[0] || fm.publisher || fm.title || id).trim().split(/[ ,]/)[0];
  const label = id === GEMS ? 'WHO GEMS/Food' : `${surname[0].toUpperCase()}${surname.slice(1)}${authors.length > 1 ? ' et al.' : ''} ${fm.year ?? ''}`.trim();
  const url = fm.doi && fm.doi !== 'null' ? `https://doi.org/${fm.doi}` : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  return { label, url };
}

export function shortLabel(text, max = 34) {
  let t = String(text).trim();
  if (t.length > max) t = t.split(/\s[(–-]\s?|,\s|\s\/\s/)[0].trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)).trim() : t;
}
export function shortPeriod(text) {
  const years = [...String(text).matchAll(/\b(19|20)\d{2}\b/g)].map(m => +m[0]);
  if (years.length) { const a = Math.min(...years), b = Math.max(...years); return a === b ? String(a) : `${a}–${b}`; }
  return 'Collection date unreported';
}

const point = (v, statistic) => ({ lower: v, upper: v, exact: true, statistic });
// A printed "<0.01 mg/kg" is a reporting bound of 10 µg/kg; "ND" without a number has no bound.
const bound = s => Number.isFinite(s.lod_ug_kg) ? s.lod_ug_kg : /^<\s*0\.01(?![0-9])/.test(String(s.reported?.text ?? '').trim()) ? 10 : null;

export function rowTarget(row) {
  if (row.hold) return null;
  const s = row.primary;
  if (['mean', 'sample_value', 'geometric_mean', 'median'].includes(s.statistic) && Number.isFinite(s.value_ug_kg)) return point(s.value_ug_kg, s.statistic);
  if (['below_LOD', 'not_detected'].includes(s.statistic) && Number.isFinite(bound(s))) return { lower: 0, upper: bound(s), exact: false, statistic: 'non-detect bounds' };
  return null;
}

function findingText(s) {
  const v = s.value_ug_kg ?? (s.statistic === 'min' ? s.min_ug_kg : s.statistic === 'max' ? s.max_ug_kg : null);
  if (['below_LOD', 'not_detected'].includes(s.statistic)) return Number.isFinite(bound(s)) ? `<${fmt(bound(s))} µg/kg` : 'Not detected (no numerical limit reported)';
  if (s.statistic === 'min' && Number.isFinite(v)) return `${fmt(v)} µg/kg (minimum)`;
  if (s.statistic === 'max' && Number.isFinite(v)) return `${fmt(v)} µg/kg (maximum)`;
  if (s.statistic === 'max') return `Maximum not readable (${s.reported?.text ?? 'see source'})`;
  const sd = Number.isFinite(s.sd_ug_kg) ? s.sd_ug_kg : Number.isFinite(s.reported?.sd) ? s.reported.sd * 1000 : null;
  if (Number.isFinite(v)) return `${fmt(v)} µg/kg (${s.statistic.replace('_', ' ')}${Number.isFinite(sd) ? ` ± ${fmt(sd)} SD` : ''})`;
  return `${s.reported?.text ?? 'Reported in original units'}`;
}

const regionType = k => k === 'growing_origin' ? 'Reported growing area' : k === 'purchase_market' ? 'Reporting market; growing area not identified' : k === 'processing_form' ? 'Processing arm within one study' : k === 'site_or_habitat' ? 'Farm site within one study' : 'All samples in the study';

export function plantainRows(root) {
  const files = fs.readdirSync(path.join(root, auditDir, 'extraction')).filter(f => f.endsWith('.json')).sort();
  const rows = [];
  for (const f of files) {
    const x = load(root, `extraction/${f}`);
    if (x.disposition !== 'occurrence_extracted') continue;
    const meta = sourceMeta(root, x.source_id);
    for (const fd of x.findings) {
      const hold = holdFor(fd.id);
      const basis = x.source_id === GEMS ? gemsBasis(fd.material) : BASIS[x.source_id];
      const period = fd.years ? (fd.years[0] === fd.years[1] ? String(fd.years[0]) : `${fd.years[0]}–${fd.years[1]}`) : shortPeriod(x.study.collection_period || '');
      rows.push({
        id: fd.id, scope_key: fd.id, finding_id: fd.id, source: x.source_id, source_label: meta.label, primary_url: meta.url,
        analyte: fd.analyte, food: fd.material, region: shortLabel(REGION[x.source_id]?.(fd) ?? fd.group), group_full: fd.group, group_kind: fd.group_kind, period,
        region_type: regionType(fd.group_kind), n: Number.isInteger(fd.n) ? fd.n : null, sampling_unit: x.source_id === GEMS ? 'individual GEMS/Food record' : x.study.sampling_unit || 'plantain samples', record_type: 'source_summary',
        statistic: fd.statistic, statistic_label: fd.statistic.replace('_', ' '), finding_text: findingText(fd),
        value: Number.isFinite(fd.value_ug_kg) ? fd.value_ug_kg : null, unit: 'µg/kg',
        reported: { ...(fd.reported || {}), value: fd.reported?.value ?? null }, original_result: fd.reported?.text ?? '',
        basis: basis.label, basis_key: basis.key, display_basis: basis.label, short_basis: basis.short,
        method: x.study.method || 'Not reported', locator: fd.locator, censoring: fd.censoring || 'As reported by the source',
        limitations: [hold, fd.notes].filter(Boolean).join(' '),
        overlap: x.source_id === GEMS ? 'Each GEMS/Food record is one submitted result; records from one submitting laboratory are not independent studies.' : 'Statistics of the same subgroup, and processed portions cut from the same raw samples, share samples; they are not independent results.',
        conversion: { method: fd.conversion || 'mg/kg × 1000 = µg/kg' }, hold, primary: fd, extraction_file: f, lod_ug_kg: bound(fd),
      });
    }
  }
  // Lead decides most plantain questions; monitoring results lead each metal group.
  const metalOrder = ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr', 'Al', 'Sn', 'U'];
  const statRank = s => ['mean', 'median', 'geometric_mean', 'sample_value', 'below_LOD', 'not_detected', 'range', 'min', 'max'].indexOf(s);
  const tier = r => r.source === GEMS ? 0 : 1;
  rows.sort((a, b) => metalOrder.indexOf(a.analyte) - metalOrder.indexOf(b.analyte) || tier(a) - tier(b) || a.source_label.localeCompare(b.source_label) || a.group_full.localeCompare(b.group_full) || statRank(a.statistic) - statRank(b.statistic) || a.id.localeCompare(b.id));
  const seen = {};
  for (const r of rows) { const i = seen[r.analyte] = (seen[r.analyte] ?? -1) + 1; r.result_id = `hmi-occurrence-plantain-${r.analyte}-${i}`; }
  return { rows, parity: rows.map(r => ({ finding: r.finding_id, row: r.result_id, held: r.hold })) };
}

// ---------------------------------------------------------------- references
const ANALYTES = ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr'];
const scopeFor = (analyte, basis) => ({ ingredient: 'plantain', analyte, basis: `${basis.label}, µg/kg; no moisture or cooking conversion`, statistic: 'subgroup median concentration', market: 'International plantain evidence library', period: 'Source collection years 2011–2022' });

function medianOf(records) {
  const scope = { ingredient: 'plantain', analyte: 'x', basis: 'x', statistic: 'x', market: 'x', period: 'x' };
  return buildDescriptiveReference(records.map((r, i) => ({ ...scope, id: `m${i}`, family: 'one', group: 'one', locator: 'x', lower: r.lower, upper: r.upper })), scope).median;
}

export function referenceUnits(root, rows) {
  // Units only from individual observations: GEMS/Food records, as WHO-region × year × form medians.
  // Each PAHO serial counts once even where it is exported as "/1" and "/2" with identical results.
  const units = {}, audit = [];
  const recs = load(root, 'primary/gemsfood-plantain-records.csv'.replace(/\.csv$/, '.json'));
  const g = new Map();
  for (const r of recs) {
    if (r.representativeness !== 'Random sampling') { audit.push({ unit: r.item_id, admitted: false, reason: 'not random sampling' }); continue; }
    const basis = gemsBasis(r.form);
    const k = `${r.analyte}|${basis.key}|${r.region}|${r.year}`;
    if (!g.has(k)) g.set(k, new Map());
    const bySerial = g.get(k);
    if (bySerial.has(r.serial_base)) { audit.push({ unit: r.item_id, admitted: false, reason: `same serial ${r.serial_base} already counted` }); continue; }
    bySerial.set(r.serial_base, { lower: +r.lower_ug_kg, upper: +r.upper_ug_kg, locator: r.locator });
  }
  for (const [k, bySerial] of g) {
    const [a, bkey, region, year] = k.split('|');
    const list = [...bySerial.values()], basis = gemsBasis(bkey === 'chips' ? 'chips' : bkey === 'cooked' ? 'cooked' : 'fresh');
    const m = medianOf(list), key = `${a}|${bkey}`;
    (units[key] ??= { analyte: a, basis, list: [] }).list.push({ ...scopeFor(a, basis), id: `gems-${region}-${year}-${bkey}`.toLowerCase(), family: GEMS, group: `${region} ${year}`, lower: m.lower, upper: m.upper, n: list.length,
      locator: `primary/gemsfood-plantain-records.csv: ${a}, ${region}, ${year}, ${basis.label} (${list.map(x => x.locator).join('; ')})`, evidence_kind: 'HMI-calculated subgroup median' });
  }
  for (const { analyte, basis, list } of Object.values(units)) for (const u of list) {
    const hit = rows.find(r => r.source === GEMS && r.analyte === analyte && r.basis_key === basis.key && r.group_full === `WHO region ${u.group.split(' ')[0]}` && r.period === u.group.split(' ')[1]);
    u.result_id = hit?.result_id ?? null;
    if (!u.result_id) throw Error(`Reference unit without an owning result: ${u.id}`);
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
  const otherBasis = ['pulp-unstated', 'conflicting', 'dry', 'ripened-homogenate'].includes(r.basis_key);
  if (!rowTarget(r)) return otherBasis && ['min', 'max'].includes(r.statistic) && Number.isFinite(r.primary.min_ug_kg ?? r.primary.max_ug_kg) ? 'basis_incompatible_with_all_references' : 'no_numeric_value_or_bound';
  if (c.hmi.baseline.reference_id && !c.hmi.baseline.distribution?.eligible) return 'reference_below_display_minimum_after_full_ledger';
  if (!c.hmi.baseline.reference_id) return otherBasis ? 'basis_incompatible_with_all_references' : 'species_or_material_without_compatible_reference_after_full_ledger';
  return 'bounds_span_categories';
}

// ---------------------------------------------------------------- comparisons
// The one within-study design is Adjei-Mensah 2021: each boiled, fried or roasted portion
// was cut from the same peeled farm samples as the unprocessed portion of its town.
function contrast(r, rows) {
  const t = rowTarget(r);
  const none = (label, detail) => ({ direction: 'summary', label, detail, context: 'Within-study contrasts compare a processed portion with the unprocessed portion of the same samples, using the same statistic and method.' });
  if (r.source === MODE) return ripening(r, rows, t, none);
  if (r.source !== ADJ) return none('No same-study contrast', 'This source reports no subgroup that can be compared with a reference subgroup from the same samples.');
  const town = r.group_full.split(' / ')[0];
  if (/unprocessed/i.test(r.group_full)) return none('Comparator for processing', 'Unprocessed pulp is the reference for the processed portions of the same samples.');
  const ref = rows.find(x => x.source === ADJ && x.analyte === r.analyte && x.group_full.startsWith(town) && /unprocessed/i.test(x.group_full) && !x.hold);
  const rt = ref && rowTarget(ref);
  if (!t || !rt) return none('No numerical contrast', 'The processed or unprocessed value has no numerical value or bound.');
  // Table 4 prints mg/kg to two decimals, so each printed mean stands for an interval of ±5 µg/kg.
  const iv = x => x.exact ? [x.lower - 5, x.lower + 5] : [x.lower, x.upper];
  const [tl, tu] = iv(t), [rl, ru] = iv(rt);
  const direction = tu < rl ? 'lower' : tl > ru ? 'higher' : 'bounded';
  const label = direction === 'bounded' ? 'Limits overlap' : `${t.exact ? fmt(t.lower) : `<${fmt(t.upper)}`} versus ${rt.exact ? fmt(rt.lower) : `<${fmt(rt.upper)}`} µg/kg`;
  return { kind: 'food_form', direction, label, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same samples, analyte, statistic and analytical method; the processed portion was cut from the same peeled farm plantain. A concentration difference on an unstated basis without moisture or mass balance: not a measured removal, significance test or safety judgment.' };
}

// Mode 2026: carbide-ripened groups against naturally ripened plantain from the same bunch.
// Table 3 prints mg/kg to three decimals, so each mean stands for an interval of ±0.5 µg/kg.
function ripening(r, rows, t, none) {
  if (/control/.test(r.id)) return none('Comparator for ripening', 'Naturally ripened plantain is the reference for the carbide-ripened groups.');
  const ref = rows.find(x => x.source === MODE && x.analyte === r.analyte && /:control:/.test(x.id));
  const rt = ref && rowTarget(ref);
  if (!t || !rt) return none('No usable comparator', ref?.hold ? `The control value is held: ${ref.hold}` : 'No numerical control value.');
  const [tl, tu, rl, ru] = [t.lower - 0.5, t.upper + 0.5, rt.lower - 0.5, rt.upper + 0.5];
  // Table 3 letters: a shared letter means the authors found no significant difference from the control.
  const letters = x => new Set((String(x.primary.reported?.text ?? '').match(/[a-z](?:,[a-z])*$/)?.[0] ?? '').split(',').filter(Boolean));
  const shared = [...letters(r)].some(l => letters(ref).has(l));
  const direction = shared ? 'bounded' : tu < rl ? 'lower' : tl > ru ? 'higher' : 'bounded';
  return { kind: 'food_form', direction, label: direction === 'bounded' ? (shared ? 'No significant difference reported' : 'Limits overlap') : `${fmt(t.lower)} versus ${fmt(rt.lower)} µg/kg`, target: t, reference: rt, reference_form: ref.region, target_n: r.n, reference_n: ref.n, sample_unit: r.sampling_unit,
    detail: `${r.region}: ${r.finding_text}; reference ${ref.region}: ${ref.finding_text}. ${r.locator}; reference ${ref.locator}.`,
    context: 'Same bunch, analyte, statistic and method; carbide-ripened versus naturally ripened plantain. A descriptive difference of means, not a safety judgment; absolute arsenic levels in this study are far above other plantain data.' };
}

export function plantainOccurrence(root) {
  const { rows, parity } = plantainRows(root);
  const { units, audit } = referenceUnits(root, rows);
  const compiled0 = rows.map(r => {
    const v = { n: r.n, region: r.region, period: r.period, median: rowTarget(r), comparisons: { contrast: contrast(r, rows) } };
    return { ...r, profile: { kind: 'source_summary', regions: [r.region], years: [r.period], variants: { '::': v, [`${r.region}::`]: v, [`::${r.period}`]: v, [`${r.region}::${r.period}`]: v } } };
  });
  const definitions = Object.entries(units).map(([key, { analyte: a, basis, list }]) => ({
    key: `plantain-${a}-${basis.key}`, scope: scopeFor(a, basis), referenceUnits: list, accepts: r => r.analyte === a && r.basis_key === basis.key && !r.hold && !!rowTarget(r),
    label: `HMI plantain ${a} reference (${basis.short}) · ${new Set(list.map(u => u.family)).size} sampling family`,
    targetStatistic: r => `${r.statistic.replace('_', ' ')} as reported`, target: r => rowTarget(r),
    sensitivity: 'family-group', sensitivityLabel: 'Equal subgroup weight within each family',
    methods: `HMI pools WHO GEMS/Food plantain records as WHO-region × year medians for one basis (${basis.label}). Non-detects stay as zero-to-limit intervals. Means, ranges, maxima and results on another basis never enter.`,
    limitations: 'GEMS/Food is the only family with individual plantain observations in the evidence library, and it holds very few plantain records; regions are reporting regions, not growing areas. A position would be descriptive concentration only.',
  }));
  const compiled = applyHmiBaselines(compiled0, definitions, r => r.hold ? `Held: ${r.hold}`
    : rowTarget(r) ? 'No compatible reference units for this analyte and basis.'
    : ['range', 'max', 'min'].includes(r.statistic) ? 'The source reports only a range end or extreme value; no single statistic can be positioned.'
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
      { mode: 'bounded_classification', outcome: ['rated', 'direct'].includes(state) ? 'not_selected' : c.contrast.direction === 'bounded' ? 'bounded' : 'unavailable', reason: c.contrast.direction === 'bounded' ? 'Reporting limits overlap the comparator' : 'No overlapping-limit classification applies' },
    ];
  }
  const unit_list = Object.values(units).flatMap(({ analyte, basis, list }) => list.map(u => ({ id: u.id, analyte, ref_key: `plantain-${analyte}-${basis.key}`, result_id: u.result_id })));
  return { ...compiled, parity, unit_list, unit_audit: audit, unit_counts: Object.fromEntries(Object.values(units).map(({ analyte, basis, list }) => [`${analyte}|${basis.key}`, { units: list.length, families: [...new Set(list.map(x => x.family))] }])) };
}

export const plantainOptions = {
  referenceNote: false, defaultComparison: 'reviewed',
  comparisonModes: [{ value: 'reviewed', label: 'Best available comparison' }, { value: 'hmi', label: 'HMI plantain reference (pooled)' }, { value: 'contrast', label: 'Same-study processing contrast' }],
  caption: 'Plantain findings from every extracted monitoring dataset and survey, in µg/kg with each source’s statistic, basis, censoring and sampling frame retained.',
  contextHTML: '<p>Each row is one statistic a source reports for one subgroup and metal. Fresh, cooked, dry-weight and unstated-basis results are kept apart and never pooled. Processed rows from the Ghanaian mining-town study are compared with the unprocessed pulp cut from the same samples. Held rows could not be verified against their own paper and are shown but not compared.</p>',
  columnNotes: { 'Food form': 'Plantain form exactly as the source names it: fresh, cooked, chips, or peeled pulp after a named home process.', 'Collection scope': 'Farm area, town, processing arm or WHO reporting region as reported; publication year is never used as a collection date.', Finding: 'µg/kg with the source statistic. A less-than value is a reporting limit, not zero.', Comparison: 'Higher or Lower compare a processed portion with the unprocessed pulp of the same samples. Pooled HMI positions need at least four reference units; no plantain basis has that many yet.', Evidence: 'Original values, basis, locators, methods, holds and limitations.' },
};
