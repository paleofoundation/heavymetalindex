// Templated page prose. Every sentence is built from the page's own findings,
// references, contrasts, recorded limits and controls, and carries the sources that
// support it. Where the evidence is missing the page says so plainly; it never pads.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { root, GEMS, FDA, fmt, exists, sourceMeta, analyteWord, capital, listJoin, plural, ANALYTE_ORDER, DECISION_ANALYTES } from './common.mjs';
import { isExternal, rowTarget, scopeOf } from './model.mjs';
import { SITE_LABELS } from './classify.mjs';
import { metalStatus, MATCH_LABEL } from './product-match.mjs';

const cite = keys => [...new Set(keys)].filter(k => exists(`wiki/sources/${k}.md`));
// Join [sentence, sources] pairs into one cited passage with sentence-level placements.
export function P(...sentences) {
  const kept = sentences.filter(([s]) => s && s.trim());
  const uniq = [], seen = new Set();
  for (const [s, src] of kept) { const t = s.trim().replace(/\s+/g, ' '); if (seen.has(t)) continue; seen.add(t); uniq.push([/[.!?]$/.test(t) ? t : t + '.', cite(src ?? [])]); }
  const text = uniq.map(([s]) => s).join(' ');
  const keys = [...new Set(uniq.flatMap(([, k]) => k))];
  const spans = uniq.filter(([, k]) => k.length).map(([s, k]) => ({ after: s, source_keys: k }));
  return keys.length ? { text, source_keys: keys, citation_spans: spans } : { text, source_keys: [] };
}
const lower = s => s ? s[0].toLowerCase() + s.slice(1) : s;
const v = x => `${fmt(x)} µg/kg`;
const bounds = t => !t ? null : t.exact ? v(t.lower) : t.lower === 0 ? `below ${v(t.upper)}` : `${fmt(t.lower)}–${v(t.upper)}`;
const cap = (xs, n) => xs.slice(0, n);

// ---------------------------------------------------------------- facts
export function pageFacts(evidence, occ) {
  const { slug, family } = evidence.page;
  // Product pilot pages name the product in plain words mid-sentence (not the title-cased page title).
  const title = occ.title, t = evidence.product_match?.label ?? lower(title);
  const rows = occ.rows;
  const sources = [...new Set(rows.map(r => r.source))];
  const literature = sources.filter(s => s !== GEMS && s !== FDA);
  const analytes = [...new Set(rows.map(r => r.analyte))].sort((a, b) => (ANALYTE_ORDER.indexOf(a) + 1 || 99) - (ANALYTE_ORDER.indexOf(b) + 1 || 99));
  const decision = analytes.filter(a => DECISION_ANALYTES.includes(a));
  const byAnalyte = a => rows.filter(r => r.analyte === a);
  const forms = occ.formOrder.map(k => ({ key: k, label: occ.formLabels.get(k), rows: rows.filter(r => r.material_key === k).length }));
  const contrasts = rows.map(r => ({ r, c: r.profile.variants['::'].comparisons.contrast })).filter(({ c }) => ['higher', 'lower', 'same'].includes(c.direction) && c.target?.exact && c.reference?.exact);
  const refs = occ.record.references.filter(x => x.distribution.eligible);
  const disp = {};
  for (const s of evidence.sources.values()) disp[s.disposition] = (disp[s.disposition] ?? 0) + 1;
  const regulatory = (evidence.regulatory ?? []).filter(e => e.source_id && exists(`wiki/sources/${e.source_id}.md`));
  const controls = (evidence.controls ?? []).filter(c => c.source_id && exists(`wiki/sources/${c.source_id}.md`));
  const exposure = [...evidence.sources.values()].filter(s => s.disposition === 'exposure_or_regulatory_used' && exists(`wiki/sources/${s.source_id}.md`)).map(s => s.source_id);
  const held = rows.filter(r => r.hold);
  const states = {}; for (const r of rows) states[r.comparison_state] = (states[r.comparison_state] ?? 0) + 1;
  return { slug, family, title, t, rows, sources, literature, analytes, decision, byAnalyte, forms, contrasts, refs, disp, regulatory, controls, exposure, held, states,
    product_match: evidence.product_match ?? null, proxies: evidence.proxy_findings ?? [] };
}

// ---------------------------------------------------------------- evidence sentences
function monitoringSentence(F, a, sid, i = 0) {
  const rs = F.rows.filter(r => r.analyte === a && r.source === sid && !r.hold && rowTarget(r));
  if (!rs.length) return null;
  const form = F.forms.find(f => rs.some(r => r.material_key === f.key));
  const main = rs.filter(r => r.material_key === form.key);
  const n = main.reduce((s, r) => s + (r.n ?? 0), 0);
  const ts = main.map(rowTarget).filter(Boolean);
  if (sid === FDA) {
    const r = main[0];
    const tt = rowTarget(r);
    if (i > 0) return [`Its median ${analyteWord(a)} result there was ${tt.exact ? v(tt.lower) : tt.lower === 0 ? `below ${v(tt.upper)}` : `between ${fmt(tt.lower)} and ${v(tt.upper)}`}.`, [sid]];
    return [`In the US Total Diet Study, ${lower(form.label)} had a median ${analyteWord(a)} result ${tt.exact ? `of ${v(tt.lower)}` : tt.lower === 0 ? `below ${v(tt.upper)}` : `between ${fmt(tt.lower)} and ${v(tt.upper)}`} across ${plural(r.n ?? 0, 'composite')}${r.period && !/unreported/.test(r.period) ? ` from ${r.period}` : ''}.`, [sid]];
  }
  const exact = ts.filter(x => x.exact).map(x => x.lower);
  const uppers = ts.map(x => x.upper);
  const regions = new Set(main.map(r => r.primary.region ?? r.region)).size;
  const range = exact.length >= 2 ? `subgroup medians from ${fmt(Math.min(...exact))} to ${v(Math.max(...exact))}` : exact.length === 1 ? `a subgroup median of ${v(exact[0])}` : `subgroup medians below ${v(Math.max(...uppers))}, mostly non-detects`;
  if (i > 0) return [`For ${analyteWord(a)}, GEMS/Food gave ${range} from ${n ? plural(n, 'result') : 'its submissions'}.`, [sid]];
  return [`WHO GEMS/Food submissions reported ${analyteWord(a)} in ${lower(form.label)} from ${n ? plural(n, 'result') : 'its submissions'} in ${plural(regions, 'reporting region')}, with ${range}.`, [sid]];
}
function literatureSentence(F, a, i = 0) {
  const rs = F.rows.filter(r => r.analyte === a && r.source !== GEMS && r.source !== FDA && !r.hold && !isExternal(r) && ['mean', 'median'].includes(r.statistic) && Number.isFinite(r.value));
  for (const basis of ['fw', 'dw', 'unstated']) {
    const b = rs.filter(r => r.basis_key === basis);
    if (new Set(b.map(r => r.source)).size < 2) continue;
    const lo = b.reduce((m, r) => r.value < m.value ? r : m), hi = b.reduce((m, r) => r.value > m.value ? r : m);
    const n = new Set(b.map(r => r.source)).size;
    const basisText = { fw: 'on an as-sold or fresh-weight basis', dw: 'on a dry-weight basis', unstated: 'with the basis not stated' }[basis];
    if (i > 0) return [`For ${analyteWord(a)}, ${plural(n, 'study', 'studies')} ${basisText} reported means and medians from ${fmt(lo.value)} µg/kg (${lo.source_label}) to ${v(hi.value)} (${hi.source_label}).`, [lo.source, hi.source]];
    return [`Across ${plural(n, 'other study', 'other studies')} of ${F.product_match ? 'products on sale' : 'ordinary farms and markets'}, reported ${analyteWord(a)} means and medians ${basisText} ranged from ${fmt(lo.value)} µg/kg (${lo.source_label}) to ${v(hi.value)} (${hi.source_label}).`, [lo.source, hi.source]];
  }
  const one = rs[0];
  return one ? Object.assign([`${one.source_label} reported ${analyteWord(a)} at ${one.finding_text} in ${lower(one.food)} from ${one.region}.`, [one.source]], { single: { source: one.source, label: one.source_label, part: `${analyteWord(a)} at ${one.finding_text}`, tail: `in ${lower(one.food)} from ${one.region}` } }) : null;
}
// One source reporting several metals reads as one sentence, not one sentence per metal.
function mergeSingles(list) {
  const out = [];
  for (const x of list) {
    const prev = out.at(-1);
    if (x?.single && prev?.single && prev.single.source === x.single.source) { prev.single.parts.push(x.single.part); continue; }
    out.push(x?.single ? { single: { ...x.single, parts: [x.single.part] } } : x);
  }
  return out.map(x => x?.single ? [`${x.single.label} reported ${listJoin(x.single.parts)} ${x.single.tail}.`, [x.single.source]] : x);
}
// Monitoring and literature sentences in order, varied after the first of each kind.
function evidenceRun(F, analytes) {
  let g = 0, f = 0, l = 0;
  const monitor = analytes.flatMap(a => { const m = [monitoringSentence(F, a, GEMS, g), monitoringSentence(F, a, FDA, f)]; if (m[0]) g++; if (m[1]) f++; return m; }).filter(Boolean);
  const lit = mergeSingles(analytes.map(a => { const x = literatureSentence(F, a, l); if (x && !x.single) l++; return x; }).filter(Boolean));
  return { monitor, lit };
}
const OPENERS = ['', 'In another study, ', 'A third study found that '];
function contrastSentence({ r, c }, i = 0) {
  const ref = r.profile.variants['::'].comparisons.contrast;
  const where = c.contrast_kind === 'site' ? `${lower(r.food)} from ${r.region}${isExternal(r) ? ` (${SITE_LABELS[r.site_context].toLowerCase()})` : ''}` : c.contrast_kind === 'sampling' ? `targeted ${lower(r.food)} samples in ${r.primary.region ?? r.region}` : `${lower(r.food)} (${r.region})`;
  const against = c.contrast_kind === 'form' ? `the unprocessed form in the same group (${ref.reference_form.split(':')[0].toLowerCase()})` : `${ref.reference_form.split(':').slice(1).join(':').trim()} in the same study`;
  const opener = OPENERS[i] ?? '';
  return [`${opener}${opener ? where : capital(where)} had ${analyteWord(r.analyte)} ${c.direction === 'same' ? 'equal to' : c.direction} at ${v(c.target.lower)}, against ${v(c.reference.lower)} for ${against}.`, [r.source]];
}
function referenceSentence(F, ref, i = 0) {
  const owner = F.rows.find(r => r.profile.variants['::'].comparisons.hmi.baseline.reference_id === ref.id) ?? null;
  const fam = ref.distribution.families;
  const d = ref.distribution;
  // Censored quantiles read as limits: "below 4", not "0 to 4".
  const q = x => x.lower === x.upper ? fmt(x.lower) : x.lower === 0 ? `below ${fmt(x.upper)}` : `between ${fmt(x.lower)} and ${fmt(x.upper)}`;
  const label = owner ? `${analyteWord(owner.analyte)} in ${lower(owner.food)}` : ref.label;
  if (i > 0) return [`For ${label}, the reference median was ${q(d.median)} µg/kg, with a middle half from ${q(d.q1)} to ${q(d.q3)} µg/kg across ${plural(d.n, 'unit')}.`, fam];
  return [`The HMI reference for ${label} pools ${plural(d.n, 'subgroup unit')} from ${plural(fam.length, 'sampling family', 'sampling families')}, with a median of ${q(d.median)} µg/kg and a middle half spanning ${q(d.q1)} (lower quartile) and ${q(d.q3)} µg/kg (upper quartile).`, fam];
}
function regionSentence(F, a, i = 0) {
  const rs = F.rows.filter(r => r.analyte === a && r.source === GEMS && !r.hold && rowTarget(r)?.exact && r.sampling !== 'targeted');
  const main = F.forms.find(f => rs.some(r => r.material_key === f.key));
  const m = rs.filter(r => r.material_key === main?.key);
  if (m.length < 2) return null;
  const lo = m.reduce((x, r) => rowTarget(r).lower < rowTarget(x).lower ? r : x), hi = m.reduce((x, r) => rowTarget(r).lower > rowTarget(x).lower ? r : x);
  if (rowTarget(lo).lower === rowTarget(hi).lower) return null;
  if (i > 0) return [`For ${analyteWord(a)}, the lowest regional median was in ${lo.region} (${v(rowTarget(lo).lower)}) and the highest in ${hi.region} (${v(rowTarget(hi).lower)}).`, [GEMS]];
  return [`Among GEMS/Food reporting regions, ${lower(main.label)} had the lowest ${analyteWord(a)} subgroup median in ${lo.region} (${v(rowTarget(lo).lower)}) and the highest in ${hi.region} (${v(rowTarget(hi).lower)}); reporting regions are markets, not growing areas.`, [GEMS]];
}
const clean = x => String(x ?? '').replace(/\s*[—–]\s*/g, ', ').replace(/(^|,\s*)\d+(?:\.\d+)+\s+/g, '$1').replace(/\.$/, '').trim();
const juris = j => /^(EU|US|UK|USA)$/.test(j) ? `The ${j}` : j;
const limitSentence = (e, i = 0, list = []) => i > 0 && list[i - 1]?.jurisdiction === e.jurisdiction
  ? [`It sets ${fmt(e.value)} ${e.unit} ${analyteWord(e.analyte)} for ${lower(clean(e.food_category_verbatim ?? e.applies_to ?? 'this food'))}${e.basis && !/not stated/i.test(e.basis) ? ` (${clean(e.basis)})` : ''}.`, [e.source_id]]
  : [`${juris(e.jurisdiction)} sets a maximum of ${fmt(e.value)} ${e.unit} ${analyteWord(e.analyte)} for ${lower(clean(e.food_category_verbatim ?? e.applies_to ?? 'this food'))}${e.basis && !/not stated/i.test(e.basis) ? ` (${clean(e.basis)})` : ''}.`, [e.source_id]];
function lodSentence(F, a) {
  const rs = F.rows.filter(r => r.analyte === a && Number.isFinite(r.lod_ug_kg) && r.lod_ug_kg > 0);
  if (rs.length < 2) return null;
  const lo = rs.reduce((m, r) => r.lod_ug_kg < m.lod_ug_kg ? r : m), hi = rs.reduce((m, r) => r.lod_ug_kg > m.lod_ug_kg ? r : m);
  if (lo.lod_ug_kg === hi.lod_ug_kg) return [`Reporting limits for ${analyteWord(a)} were ${v(lo.lod_ug_kg)} where sources stated them.`, [lo.source]];
  return [`Reporting limits for ${analyteWord(a)} ranged from ${fmt(lo.lod_ug_kg)} µg/kg (${lo.source_label}) to ${v(hi.lod_ug_kg)} (${hi.source_label}), so a non-detect from a less sensitive method says much less.`, [lo.source, hi.source]];
}
// A control borrowed from another food's reviewed evidence says which food it was measured on.
const controlSentence = c => [`${capital(String(c.control).replace(/\.$/, ''))}${c.library_origin ? ` (evidence from ${c.library_origin.split('/')[1].replace(/-/g, ' ')})` : ''}: ${lower(String(c.action_summary ?? '').replace(/\.$/, ''))}.`, [c.source_id]];

const onePerSource = xs => { const seen = new Set(); return xs.filter(({ r }) => !seen.has(r.source) && seen.add(r.source)); };
// Reference sentences: decision analytes first, then the broadest references.
const refOrder = (F, refs) => [...refs].sort((a, b) => {
  const an = r => { const o = F.rows.find(x => x.profile.variants['::'].comparisons.hmi.baseline.reference_id === r.id)?.analyte; const i = DECISION_ANALYTES.indexOf(o); return i < 0 ? 9 : i; };
  return an(a) - an(b) || b.distribution.families.length - a.distribution.families.length || b.distribution.n - a.distribution.n;
});
// Lowest form by reference median for one analyte, where two forms have eligible references.
function lowestForm(F) {
  for (const a of F.decision) {
    const refs = F.refs.map(ref => ({ ref, owner: F.rows.find(x => x.analyte === a && x.profile.variants['::'].comparisons.hmi.baseline.reference_id === ref.id) })).filter(x => x.owner && x.ref.distribution.median.lower === x.ref.distribution.median.upper);
    if (new Set(refs.map(x => x.owner.material_key)).size < 2) continue;
    const lo = refs.reduce((m, x) => x.ref.distribution.median.lower < m.ref.distribution.median.lower ? x : m), hi = refs.reduce((m, x) => x.ref.distribution.median.lower > m.ref.distribution.median.lower ? x : m);
    if (lo.ref.distribution.median.lower === hi.ref.distribution.median.lower) continue;
    return [`For ${analyteWord(a)}, the HMI reference median was lowest for ${lower(lo.owner.food)} (${v(lo.ref.distribution.median.lower)}) and highest for ${lower(hi.owner.food)} (${v(hi.ref.distribution.median.lower)}); forms differ in water content, so this compares foods as sold or eaten, not uptake.`, [...new Set([...lo.ref.distribution.families, ...hi.ref.distribution.families])]];
  }
  return null;
}

function regionRun(F) {
  let k = 0;
  return F.decision.map(a => { const x = regionSentence(F, a, k); if (x) k++; return x; }).filter(Boolean);
}
// Within one study, the lowest and highest groups (origins, markets or products) for a metal.
function groupRun(F) {
  const by = new Map();
  for (const x of F.contrasts.filter(({ c }) => c.contrast_kind === 'group')) {
    const k = `${x.r.source}|${x.r.analyte}|${x.r.statistic}`;
    by.set(k, [...(by.get(k) ?? []), x]);
  }
  const rank = a => F.decision.includes(a) ? F.decision.indexOf(a) : 99;
  const runs = [...by.values()].filter(xs => xs.length >= 4).sort((a, b) => rank(a[0].r.analyte) - rank(b[0].r.analyte) || b.length - a.length);
  const out = [], seen = new Set();
  for (const xs of runs) {
    if (seen.has(xs[0].r.source) || out.length >= 2) continue;
    seen.add(xs[0].r.source);
    const sorted = [...xs].sort((a, b) => a.c.target.lower - b.c.target.lower), lo = sorted[0], hi = sorted.at(-1);
    if (lo.c.target.lower === hi.c.target.lower) continue;
    out.push([`${OPENERS[out.length] ? `${OPENERS[out.length]}` : 'In one study, '}${analyteWord(lo.r.analyte)} across ${xs.length} groups of ${F.t} ranged from ${v(lo.c.target.lower)} (${lo.r.region}) to ${v(hi.c.target.lower)} (${hi.r.region}); the lowest is the lowest observed in that study, not an established sourcing preference.`, [lo.r.source]]);
  }
  return out;
}
// Name the pages that cover foods made from this one; say nothing when there are none.
let pageTitles = null;
function derivedSentence(F) {
  if (F.family !== 'ingredient') return [];
  pageTitles ??= fs.readdirSync(path.join(root, 'wiki/ingredients')).filter(f => f.endsWith('.md') && f !== 'index.md' && !/ \d+\.md$/.test(f)).map(f => { const fm = matter(fs.readFileSync(path.join(root, 'wiki/ingredients', f), 'utf8')).data; return { slug: f.slice(0, -3), title: fm.title ?? f.slice(0, -3), type: fm.type }; }).filter(p => p.type !== 'category-index');
  const word = F.slug.replace(/s$/, '');
  const made = pageTitles.filter(p => p.slug !== F.slug && (p.slug.startsWith(`${F.slug}-`) || p.slug.startsWith(`${word}-`) || p.slug.endsWith(`-${F.slug}`))).slice(0, 4);
  return made.length ? [[`Foods made from ${F.t} that have their own pages, such as ${listJoin(made.map(p => p.title.toLowerCase()))}, are covered there.`, []]] : [];
}

// ---------------------------------------------------------------- sections
function sections(F, evidence, headings) {
  const S = {}, t = F.t, T = F.product_match ? capital(F.t) : F.title;
  const topSources = cap([GEMS, FDA, ...F.literature].filter(s => F.sources.includes(s)), 6);
  const { monitor, lit } = evidenceRun(F, F.decision);
  const site = onePerSource(F.contrasts.filter(({ c }) => c.contrast_kind === 'site' && c.direction === 'higher').sort((a, b) => (b.c.target.lower / Math.max(b.c.reference.lower, 0.001)) - (a.c.target.lower / Math.max(a.c.reference.lower, 0.001))));
  const formC = onePerSource(F.contrasts.filter(({ c }) => c.contrast_kind === 'form'));
  const sampling = F.contrasts.filter(({ c }) => c.contrast_kind === 'sampling');
  const analyteList = listJoin(F.analytes.map(analyteWord));
  const decisionList = listJoin(F.decision.map(analyteWord)) || analyteList;
  const ratedN = F.states.rated ?? 0, directN = F.states.direct ?? 0;

  S.summary = [
    P([`${T} in the HMI library has ${plural(F.rows.length, 'reported result')} for ${analyteList} from ${plural(F.sources.length, 'source')}.`, topSources], ...cap(monitor, 2)),
    P(...cap(lit, 2), ...(site.length ? [[`Higher results came from contaminated or exposed settings rather than ordinary supply.`, []], contrastSentence(site[0])] : [])),
    P([`For a buyer the practical points are the form bought, the basis a result is reported on, where the ${t} came from and the laboratory’s reporting limit.`, []],
      ...(F.regulatory.length ? [limitSentence(F.regulatory[0])] : []), [`Testing finds contamination but does not remove it.`, []]),
  ];
  S.identity = [
    P([F.forms.length === 1 ? `This page covers ${lower(F.forms[0].label)} (${plural(F.forms[0].rows, 'result')}).` : `This page covers ${t} in ${plural(F.forms.length, 'form')} kept separate in every comparison: ${listJoin(F.forms.map(f => `${lower(f.label)} (${plural(f.rows, 'result')})`))}.`, topSources],
      ...derivedSentence(F)),
    P([`Results stay on the basis each source reports: as sold or fresh weight, dry weight, or unstated.`, []], [`Dry-weight, as-sold and unstated results are never pooled, and no moisture conversion is applied.`, []]),
  ];
  S.occurrence = [
    P([`The table holds every extracted ${t} result: one row for each statistic a source reports for a form, group and metal, ${plural(F.rows.length, 'row')} in all, grouped by metal and form; percentiles, ranges and maxima for the same samples as a mean or median are shown on that row.`, topSources],
      [`Monitoring medians are HMI calculations from individual submissions; non-detects remain intervals between zero and the reporting limit and are never read as zero.`, F.sources.includes(GEMS) ? [GEMS] : []]),
    P([`${plural(ratedN, 'row')} can be rated against an HMI reference for the same form and basis, ${plural(directN, 'row')} have a direct same-study comparison, and the rest stay unrated with the reason recorded.`, []],
      ...(F.held.length ? [[`${plural(F.held.length, 'value')} from ${plural(new Set(F.held.map(r => r.source)).size, 'source')} failed a check against their own source and are shown but not compared.`, [...new Set(F.held.map(r => r.source))]]] : [])),
  ];
  S.pathways = site.length
    ? [P([`The evidence on how metals reach ${t} comes from studies that compared exposed and ordinary settings.`, []], ...cap(site, 3).map((x, i) => contrastSentence(x, i))),
       P([`These are observational comparisons from single studies; the size of the difference depends on the site, metal and distance.`, []])]
    : [P([`No study in the library compared ${t} from contaminated and ordinary settings, so the routes by which metals reach it are not measured here.`, []])];
  S.variation = [
    ...(F.refs.length ? [P(...[lowestForm(F)].filter(Boolean), ...cap(refOrder(F, F.refs), 3).map((ref, i) => referenceSentence(F, ref, i)))] : []),
    ...(regionRun(F).length ? [P(...cap(regionRun(F), 3))] : []),
    ...(sampling.length ? [P(...cap(sampling, 2).map((x, i) => contrastSentence(x, i)))] : []),
    ...(groupRun(F).length ? [P(...groupRun(F))] : []),
  ];
  if (!S.variation.length) S.variation = [P([`The ${t} evidence does not yet support a reference-based comparison of forms or regions.`, []])];
  S.processing = formC.length
    ? [P([`Processed or prepared forms were compared only with unprocessed ${t} in the same study and group.`, []], ...cap(formC, 3).map((x, i) => contrastSentence(x, i))),
       P([`Forms differ in water content, so a per-kilogram difference is not by itself a measured removal or gain of metal.`, []])]
    : [P([`No study in the library measured the same ${t} before and after washing, peeling, drying or cooking for metals, so no processing effect can be stated.`, []], [`Heat does not destroy metals; cooking or drying changes a concentration by moving water or metal, not by removing the element.`, []])];
  S.controls = F.controls.length
    ? [P([`Controls with evidence for ${t} act at the stages below.`, []], ...cap(F.controls.map(controlSentence), 3)), ...(F.controls.length > 3 ? [P(...cap(F.controls.slice(3).map(controlSentence), 3))] : [])]
    : [P([`No control for metals in ${t} was measured in the library; lot testing against the applicable limit remains the verifiable step.`, []])];
  S.tradeoffs = [P(...(site.length ? [[`Avoiding exposed growing areas lowered the metal measured in the studies available, but no study measured the cost or supply effect of doing so.`, cite([site[0].r.source])]] : []),
    [`Metals do not move together, so a lot that passes a lead limit says little about cadmium, arsenic or nickel unless those are tested as well.`, []])];
  const lods = F.decision.map(a => lodSentence(F, a)).filter(Boolean);
  S.testing = [P([`Results depend on the method and its reporting limit.`, []], ...cap(lods, 3)), P([`A useful lot result names the form, the basis and a quantification limit well below the limit that applies.`, F.regulatory.length ? [F.regulatory[0].source_id] : []])];
  S.procurement = F.regulatory.length
    ? [P(...cap(F.regulatory, 3).map((e, i, l) => limitSentence(e, i, l))), ...(F.regulatory.length > 3 ? [P(...cap(F.regulatory.slice(3), 3).map((e, i, l) => limitSentence(e, i, l)))] : [])]
    : [P([`No maximum level for metals in ${t} was verified from primary text for this page; buyers should confirm the limit that applies in the destination market.`, []])];
  S.product = F.exposure.length
    ? [P([`${plural(F.exposure.length, 'source')} in the library used ${t} results for dietary exposure or regulatory assessment.`, F.exposure],
         [`No verified estimate converts these concentrations into intake for a defined population on this page.`, []])]
    : [P([`No source in the library converted ${t} concentrations into a verified estimate of intake for a defined population.`, []], [`Concentrations describe the food, not individual risk.`, []])];
  const total = Object.values(F.disp).reduce((s, x) => s + x, 0);
  S.assessment = [P([`Every source record that names ${t} was decided on its content: ${listJoin(Object.entries(F.disp).sort((a, b) => b[1] - a[1]).map(([d, n]) => `${n} ${d.replace(/_/g, ' ')}`))}, ${plural(total, 'record')} in all.`, []],
    [`The occurrence table renders every extracted result; held values remain visible with their reason.`, []])];
  if (F.product_match) productPilot(S, F);
  return S;
}

// HMI-PRODUCT-PILOT-2 rules for product pages: a status line per metal outside the row list,
// a variability line, related-product and ingredient findings as labeled context only (no
// band), and an exposure block that says "not yet computed" rather than inventing numbers.
const STATUS_WORD = { Cd: 'Cadmium', Pb: 'Lead', As: 'Arsenic', Hg: 'Mercury' };
function productPilot(S, F) {
  const t = F.t;
  const status = metalStatus(F.rows, F.proxies);
  const line = x => x.state === 'measured'
    ? [`${STATUS_WORD[x.metal]}: measured directly, ${plural(x.direct, 'result')} from ${plural(x.sources, 'source')}${x.exact === x.direct ? ` on the product itself` : x.exact ? ` (${x.exact} on the product itself, ${x.direct - x.exact} on a subcategory)` : `, all on a subcategory, none on the product itself`}; ${x.detected === x.direct ? 'all above the reporting limit' : x.detected ? `${x.detected} above the reporting limit` : 'none above the reporting limit'}.`, cite([...new Set(F.rows.filter(r => metalOf(r.analyte) === x.metal).map(r => r.source))].slice(0, 3))]
    : x.state === 'proxy'
      ? [`${STATUS_WORD[x.metal]}: proxy only; the library has ${plural(x.proxy, 'result')} from related products, ingredients or migration tests and no content measurement of ${t}.`, cite([...new Set(F.proxies.filter(f => metalOf(f.analyte) === x.metal).map(f => f.source_id))].slice(0, 3))]
      : [`${STATUS_WORD[x.metal]}: none in the library for ${t}.`, []];
  const statusP = P([`Metal status for ${t}, per metal.`, []], ...status.map(line));
  const variability = P([`These numbers describe ${t} as a product category in the samples each study bought, not a specific brand or lot.`, []]);
  const levels = [...new Set(F.rows.map(r => r.match_level))];
  const chipNote = P([`Each row carries its match to the product: ${listJoin(levels.map(l => `${MATCH_LABEL[l].toLowerCase()}`))}. Only these rows are rated against an HMI reference.`, []]);
  // Context is for contaminant metals; essential nutrients measured on a related product are not listed.
  const NUTRIENTS = new Set(['Ca', 'Mg', 'Na', 'K', 'P', 'Fe', 'Zn', 'Cu', 'Mo', 'Se', 'I', 'Co', 'Mn', 'B', 'Ba', 'V', 'Li', 'Sr']);
  const proxies = F.proxies.filter(f => f.analyte && !NUTRIENTS.has(f.analyte) && (f.reported_text || Number.isFinite(f.value)) && exists(`wiki/sources/${f.source_id}.md`));
  const proxyP = proxies.length
    ? P([`Labeled context, not ${t} content results: ${plural(proxies.length, 'finding')} measured a related product, an ingredient, or metal released into a test liquid. They are listed with value and source and are never rated or used for a band.${proxies.length > 3 ? ' Three examples follow.' : ''}`, []],
        ...cap(proxies, 3).map(f => [`${MATCH_LABEL[f.match_level]}: ${f.material_text || 'unlabeled material'}, ${analyteWord(f.analyte)} ${f.reported_text || v(f.value)}.`, cite([f.source_id])]))
    : null;
  S.occurrence = [statusP, variability, chipNote, ...(proxyP ? [proxyP] : []), ...S.occurrence];
  S.product = [P([`Exposure from ${t} is not yet computed.`, []],
    [`No source in the library gives, for the same product, the amount used, the frequency of use and the population together with these concentrations, so the page shows concentrations only and does not band exposure.`, []],
    [`Concentration and exposure are kept separate on this page.`, []])];
}
const metalOf = a => ['tAs', 'iAs', 'As'].includes(a) ? 'As' : ['tHg', 'MeHg', 'Hg'].includes(a) ? 'Hg' : a;

// Product pages reuse the same evidence statements under their own section order.
const PRODUCT_MAP = { identity: 'identity', summary: 'summary', occurrence: 'occurrence', contributors: 'pathways', processing: 'processing', exposure: 'product', controls: 'controls', testing: 'testing', procurement: 'procurement', regulation: 'procurement', events: null, assessment: 'assessment' };

// ---------------------------------------------------------------- FAQs from the question bank
function faqs(F, S) {
  const T = F.title, t = F.t, out = [], bank = [];
  const add = (id, q, p, loc) => { if (p.source_keys.length) { out.push({ id, question: q, passage: p }); bank.push({ id, status: 'selected', question: q, answer_locator: q, primary_locator: loc, source_keys: p.source_keys }); } else bank.push({ id, status: 'deferred', reason: 'No cited evidence in the ledger answers this question.' }); };
  const skip = (id, reason) => bank.push({ id, status: 'not_applicable', reason });
  add('ING-FAQ-01', `What heavy metals are found in ${t}?`, P([`The library reports ${listJoin(F.analytes.map(analyteWord))} in ${t}, most often ${listJoin(F.decision.slice(0, 3).map(analyteWord)) || analyteWord(F.analytes[0])}.`, cap([GEMS, FDA, ...F.literature].filter(s => F.sources.includes(s)), 4)],
    ...cap(F.decision.map(a => monitoringSentence(F, a, GEMS)).filter(Boolean), 1)), 'Occurrence table');
  const site = onePerSource(F.contrasts.filter(({ c }) => c.contrast_kind === 'site' && c.direction === 'higher'));
  if (site.length) add('ING-FAQ-02', `How do heavy metals get into ${t}?`, P([`In the studies available, ${t} from contaminated or exposed settings carried more metal than ${t} from the same study’s control.`, [site[0].r.source]], contrastSentence(site[0])), 'Same-study site contrasts');
  else skip('ING-FAQ-02', 'No study compares exposed and ordinary settings for this food.');
  skip('ING-FAQ-03', 'No study in the ledger compares organic and conventional production for metals.');
  const low = lowestForm(F);
  if (low) add('ING-FAQ-04', `Which types of ${t} have the lowest levels?`, P(low), 'HMI references by form');
  else skip('ING-FAQ-04', 'No two forms have comparable eligible references for the same metal.');
  const regions = regionRun(F);
  if (regions.length) add('ING-FAQ-05', `Which regions report the lowest levels in ${t}?`, P(...cap(regions, 2)), 'GEMS/Food regional medians');
  else if (groupRun(F).length) add('ING-FAQ-05', `Which origins or products of ${t} measured lowest?`, P(...groupRun(F)), 'Same-study group comparisons');
  else skip('ING-FAQ-05', 'No comparable regional medians or same-study group comparisons.');
  skip('ING-FAQ-06', 'Derived products have their own pages.');
  if (F.exposure.length) add('ING-FAQ-07', `What do the levels in ${t} mean for health?`, P([`Sources in the library used ${t} results in exposure or regulatory assessment, but no verified intake estimate for a defined population is drawn on this page.`, F.exposure], [`A concentration describes the food, not an individual’s risk.`, []]), 'Exposure section');
  else bank.push({ id: 'ING-FAQ-07', status: 'deferred', reason: 'No exposure assessment in the ledger.' });
  if (F.regulatory.length) add('ING-FAQ-08', `Are there legal limits for heavy metals in ${t}?`, P(...cap(F.regulatory, 3).map((e, i, l) => limitSentence(e, i, l))), 'Verified regulatory entries');
  else bank.push({ id: 'ING-FAQ-08', status: 'deferred', reason: 'No limit verified from primary text for this page.' });
  const formC = F.contrasts.filter(({ c }) => c.contrast_kind === 'form');
  if (formC.length) add('ING-FAQ-09', `Does processing change heavy metals in ${t}?`, P([`Only comparisons between forms in the same study are available, not before-and-after measurements of the same ${t}.`, [formC[0].r.source]], contrastSentence(formC[0])), 'Same-study form contrasts');
  else skip('ING-FAQ-09', 'No processing comparison in the ledger.');
  if (F.analytes.includes('iAs') && F.analytes.includes('tAs')) {
    const ias = F.rows.filter(r => r.analyte === 'iAs'), srcs = [...new Set(ias.map(r => r.source))];
    add('ING-FAQ-10', `How much of the arsenic in ${t} is inorganic?`, P([`Inorganic arsenic, the more toxic form, was measured in ${plural(ias.length, 'result')} from ${plural(srcs.length, 'source')}, far fewer than total arsenic.`, srcs], ...cap([literatureSentence(F, 'iAs'), monitoringSentence(F, 'iAs', GEMS)].filter(Boolean), 1)), 'Inorganic arsenic rows');
  } else skip('ING-FAQ-10', 'Arsenic species were not both measured.');
  for (const id of ['ING-FAQ-11', 'ING-FAQ-12', 'ING-FAQ-13', 'ING-FAQ-14', 'ING-FAQ-15', 'ING-FAQ-16', 'ING-FAQ-17'])
    bank.push({ id, status: 'deferred', reason: 'Needs a direct comparison or authoritative guidance that the ledger does not contain for this food.' });
  return { list: out.slice(0, 20), bank };
}

// ---------------------------------------------------------------- record answers
function recordAnswers(paragraphs, n = 3) {
  const sentences = paragraphs.flatMap(p => { const spans = p.citation_spans ?? []; return spans.map(s => [s.after, s.source_keys]); });
  const uncited = paragraphs.flatMap(p => p.text.split(/(?<=\.)\s+/)).filter(Boolean);
  const out = [];
  for (let i = 0; i < n; i++) {
    const s = sentences[i];
    if (s) out.push({ ...P(s), kind: 'evidence' });
    else out.push({ text: uncited[i] ?? uncited[0] ?? 'Not assessed for this page.', source_keys: [], kind: 'unresolved' });
  }
  return out;
}

export const defaultHeadings = (family, T) => {
  const t = lower(T);
  return family === 'product'
    ? { identity: `What counts as ${t}`, summary: `${T} overview`, occurrence: `Heavy metal contamination profile of ${t}`, contributors: `How metals reach ${t}`, processing: 'Manufacturing, packaging and storage', exposure: `Exposure from ${t}`, controls: `Mitigation for ${t}`, testing: `Testing ${t} for metals`, procurement: `Buying and verifying ${t}`, regulation: 'Limits by market', events: 'Recalls and enforcement', assessment: 'Evidence review and remaining gaps' }
    : { summary: `${T} overview`, identity: `What counts as ${t}`, occurrence: `Heavy metal contamination profile of ${t}`, pathways: `How metals reach ${t}`, variation: 'Which forms and regions measured lower', processing: 'Processing, cooking and preparation', controls: `Mitigation for ${t}`, tradeoffs: 'Trade-offs and limits of controls', testing: `Testing ${t} for metals`, procurement: `Buying and verifying ${t}`, product: `Exposure from ${t}`, assessment: 'Evidence review and remaining gaps' };
};

export function buildSynthesis(evidence, occ, register) {
  const F = pageFacts(evidence, occ), { family, slug } = evidence.page;
  // Product pilot pages head their sections with the plain product name (HMI-PRODUCT-PILOT-2 rule 8).
  const headings = defaultHeadings(family, F.product_match ? capital(F.t) : F.title);
  const S = sections(F, evidence, headings);
  const fq = faqs(F, S);
  const famSpec = register.families[family];
  const s = { synthesis_id: `engine-${family}-${slug}-v1`, family, slug, title: F.title, display_title: F.title, version: 1, date: process.env.HMI_BUILD_DATE || '2026-10-22',
    description: `${capital(listJoin(F.decision.length ? F.decision.map(analyteWord) : F.analytes.map(analyteWord)))} in ${F.t}: monitoring results, studies, references by form and basis, limits, testing and controls.`,
    lede: '', article_lede: false, citation_style: 'compact', citation_placement: 'sentence', sections: [], section_headings: headings,
    universal_faqs: { title: `${F.title} FAQs`, aliases: [] },
    scope: { analytes: listJoin(F.analytes), material_form: listJoin(F.forms.map(f => f.label)), basis: 'As reported; µg/kg; no moisture conversion', geography_market: 'Reporting region, purchase market or growing area as each source reports',
      period: 'Source collection years where reported; unreported dates stay unknown', stage: 'Growing area, processing, retail and release testing', population_route: 'Dietary ingestion', comparator_outcome: 'HMI references by form and basis; same-study site, sampling and form contrasts' },
    search: { status: 'in_progress', scope: `Every source record and indexed dataset row that names ${F.t}`, protocol_ref: `data/evidence/engine/${family}/${slug}/evidence-ledger.json`, record_refs: [`data/evidence/engine/${family}/${slug}/synthesis.json`],
      screening_ref: `data/evidence/engine/${family}/${slug}/evidence-ledger.json`, searched_through: process.env.HMI_BUILD_DATE || '2026-10-22', limitations: ['Existing HMI library only; no new external literature search'], unresolved_access: [] },
    source_catalogue: { topic: `${family === 'ingredient' ? 'ingredients' : 'products'}/${slug}` }, retain_history_only: true };
  for (const spec of famSpec.sections) {
    const key = family === 'product' ? PRODUCT_MAP[spec.id] : spec.id;
    const paragraphs = key ? S[key] : [P([`No recall or enforcement event for ${F.t} is recorded in the ledger.`, []])];
    const answers = recordAnswers(paragraphs, spec.question_ids.length).map((a, i) => ({ ...a, question_id: spec.question_ids[i], presentation: 'record_only', public_context_section: spec.id }));
    const pres = { ...paragraphs[0], narrative: 'overview_and_questions', passages: paragraphs.slice(1) };
    s.sections.push({ id: spec.id, answers, presentation: pres });
  }
  for (const f of fq.list) s.sections[family === 'product' ? 1 : 0].answers[0].passages = [...(s.sections[family === 'product' ? 1 : 0].answers[0].passages ?? []), { ...f.passage, question: f.question, placement: 'universal_faq' }];
  // Quick Read: citations only, three cited facets.
  const anyKeys = cap([GEMS, FDA, ...F.literature].filter(k => F.sources.includes(k) && exists(`wiki/sources/${k}.md`)), 4);
  const facet = (label, p) => ({ label, ...(p.source_keys.length ? p : P([p.text, anyKeys])) });
  const site = F.contrasts.filter(({ c }) => c.contrast_kind === 'site' && c.direction === 'higher');
  const intro = S.summary[0].citation_spans?.[0];
  s.quick_read = { ...(intro ? P([intro.after, intro.source_keys]) : P([`${F.title} results in the library cover ${listJoin(F.analytes.map(analyteWord))}.`, anyKeys])),
    facets: [
      facet('Metals measured', P([`${capital(listJoin(F.analytes.slice(0, 6).map(analyteWord)))}${F.analytes.length > 6 ? ' and others' : ''}, in ${plural(F.rows.length, 'result')} from ${plural(F.sources.length, 'source')}.`, anyKeys])),
      facet('Main drivers', site.length ? P(contrastSentence(site[0])) : P([`Form, basis and where the ${F.t} was sampled; reporting limits decide how many results are non-detects.`, anyKeys])),
      facet('Practical framing', F.regulatory.length ? P(limitSentence(F.regulatory[0])) : P([`Ask for lot results with a quantification limit well below the limit that applies in the destination market.`, anyKeys])),
    ] };
  return { synthesis: s, facts: F, faqBank: { selected_count: fq.list.length, bank: fq.bank } };
}

// Hero key evidence: three short statements pointing at their sections.
export function keyEvidence(F, s, anchor) {
  const first = id => { const sec = s.sections.find(x => x.id === id); return sec?.presentation?.citation_spans?.[0]?.after ?? sec?.presentation?.text?.split(/(?<=\.)\s/)[0]; };
  const h = id => `#${anchor(s.section_headings[id])}`;
  const trim = x => String(x ?? '').length > 170 ? String(x).slice(0, String(x).lastIndexOf(' ', 165)) + '…' : String(x ?? '');
  const prod = F.family === 'product';
  return [
    { label: 'Exposure', text: trim(first(prod ? 'exposure' : 'product')), href: h(prod ? 'exposure' : 'product'), link_label: 'Exposure' },
    { label: 'Limits', text: trim(first('procurement')), href: h('procurement'), link_label: 'Limits by market' },
    { label: 'Key distinction', text: trim(first(prod ? 'contributors' : 'variation')), href: h(prod ? 'contributors' : 'variation'), link_label: prod ? 'Pathways' : 'Variation' },
  ];
}

// Thin-page assessment (AGENTS.md "Thin pages ledger").
export function thinPage(F, ledger, publishable, controlCount = 0) {
  const decision = new Set(['Pb', 'Cd', 'tAs', 'iAs']);
  const analytes = [...new Set(ledger.results.map(r => r.scope.analyte))].sort().map(a => {
    const rs = ledger.results.filter(r => r.scope.analyte === a), units = ledger.reference_units.filter(u => u.scope.analyte === a);
    return { analyte: a, decision_relevant: decision.has(a), results: rs.length, reference_units: units.length, families: new Set(rs.map(r => r.family_id)).size,
      rated: rs.filter(r => r.comparison.state === 'rated').length, direct: rs.filter(r => r.comparison.state === 'direct').length, note: '' };
  });
  const eligibleRef = a => ledger.references.some(r => r.scope.analyte === a && r.unit_ids.length >= 4);
  const families = new Set(ledger.items.filter(i => i.id.startsWith('source:') && i.disposition === 'occurrence_extracted').map(i => i.source_id)).size;
  const blocked = ledger.items.filter(i => i.disposition === 'access_blocked');
  const reasons = [];
  if (families < 3) reasons.push('few_occurrence_families');
  const present = ['Pb', 'Cd', 'tAs'].filter(a => analytes.some(x => x.analyte === a));
  if (present.some(a => !eligibleRef(a) && !analytes.find(x => x.analyte === a)?.direct)) reasons.push('decision_analyte_without_comparison');
  if (present.length && present.every(a => !eligibleRef(a) && !analytes.find(x => x.analyte === a)?.direct)) reasons.push('no_lower_contamination_comparison');
  if (blocked.length) reasons.push('access_blocked_evidence');
  if (!controlCount) reasons.push('no_applicable_cited_control');
  const missing = ['Pb', 'Cd', 'tAs', 'iAs'].filter(a => !analytes.some(x => x.analyte === a));
  const fetch = [
    ...(families < 3 ? [{ what: `Monitoring or survey results for ${F.t} with stated form, basis and reporting limits`, why: `Only ${families} occurrence ${families === 1 ? 'family' : 'families'} are in the ledger, too few for a reference.`, where: 'National total diet studies; WHO GEMS/Food; EFSA occurrence data; literature search on the food name and its scientific name with lead, cadmium, arsenic', priority: 'high' }] : []),
    ...present.filter(a => !eligibleRef(a)).map(a => ({ what: `Subgroup medians or sample values for ${analyteWord(a)} in ${F.t} from ordinary farms or markets`, why: `No eligible HMI reference of at least four units exists for ${analyteWord(a)}.`, where: `Monitoring datasets and surveys reporting ${analyteWord(a)} in ${F.t} by region or market`, priority: 'medium' })),
    ...missing.map(a => ({ what: `${capital(analyteWord(a))} measurements in ${F.t}`, why: `The ledger has no ${analyteWord(a)} result for this food.`, where: `Literature search: ${F.t} ${analyteWord(a)}; national monitoring`, priority: 'low' })),
    ...blocked.map(i => ({ what: `Primary text of ${i.source_id}`, why: 'The record is access-blocked; retrieval would allow a content-based decision.', where: i.retrieval_request?.request ?? 'HMI Library raw folder', priority: 'low' })),
  ];
  // No reviewed control applies: an evidence gap to fetch, not a reason to invent one.
  if (!controlCount) fetch.unshift({ what: `A measured control for metals in ${F.t} (siting, irrigation water, cultivar, processing, storage or lot testing)`, why: 'No reviewed, cited control in the shared library applies to this food, so the mitigation table is empty.', where: `Literature search: ${F.t} heavy metal reduction washing peeling cooking soil amendment; agency guidance on ${F.t} contaminants`, priority: 'medium' });
  if (!fetch.length) fetch.push({ what: `Origin-linked monitoring results for ${F.t}`, why: 'Reporting regions are markets, not growing areas; origin data would allow producing-region comparisons.', where: 'National monitoring programmes recording growing origin', priority: 'low' });
  return { slug: F.slug, status: reasons.length ? 'thin' : 'adequate', assessed_at: `${process.env.HMI_BUILD_DATE || '2026-10-22'}T12:00:00Z`, universe_items: ledger.items.length,
    occurrence_families: families, analytes, reasons,
    assessment: `${plural(families, 'occurrence family', 'occurrence families')}; ${analytes.filter(a => a.decision_relevant).map(a => `${a.analyte}: ${a.rated} rated, ${a.direct} direct`).join('; ') || 'no decision-relevant analyte'}.`,
    fetch_targets: fetch, publishable, publishable_reason: publishable ? 'All seven fullness gates and the presentation gate pass, and the page states its limits.' : 'One or more gates fail; see gates.json.' };
}
