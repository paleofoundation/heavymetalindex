// Compile one page: evidence → occurrence model → templated synthesis → question
// record → candidate Markdown, through the shared contract renderer.
import matter from 'gray-matter';
import { renderContractArticle, questionRecord, ingredientPresentationVersion, anchor } from '../../contracts/pilot/compiler.mjs';
import { validateSentenceCitationPlacements } from '../../contracts/pilot/sentence-citations.mjs';
import { renderControlsFromRecords } from '../../contracts/pilot/mitigation-table.mjs';
import { root, json, exists, BUILD_DATE, FORBIDDEN_PUBLIC, GEMS, FDA, FAMILIES, outputs, wikiPath, capital, wikiPage, isStub, storeState } from './common.mjs';
import { loadPageEvidence } from './inputs.mjs';
import { pageHeroImage } from '../../lib/hero-images.mjs';
import { buildOccurrence, occurrenceOptions } from './model.mjs';
import { buildSynthesis, keyEvidence } from './prose.mjs';
import { controlsFor } from './controls.mjs';

const register = json('data/evidence/contracts/question-register.json');
// Pages whose hero, byline, snapshot and rail are locked byte-for-byte keep their
// published frontmatter for those surfaces.
const LOCKED = new Set(exists('data/evidence/engine/locked-surfaces.json') ? json('data/evidence/engine/locked-surfaces.json').pages : ['ingredients/rice']);
const LEGACY_FM = ['contamination_profile', 'drivers', 'lower_risk_variants', 'higher_risk_variants', 'used_in_products', 'tds_food', 'created_by', 'created_from', 'created_routed_sources'];
const OFFICIAL = /^(eu-|hongkong|mercosur|usda-|china20|codex|fda20|fda-|who-|fsanz|mfds|fssai|efsa|jecfa|epa-|cfs20|health-canada|gb-|vietnam|qcvn)/;

export function compilePage(page) {
  if (isStub(wikiPage(page)?.fm)) return { page, skipped: 'redirect/retired stub' };
  // Recorded before the store is read, so a change during the build shows as stale.
  const store_state = storeState(page);
  const evidence = loadPageEvidence(page);
  if (!evidence || !evidence.findings.length) return { page, skipped: 'no findings' };
  const occ = buildOccurrence(evidence);
  const controls = controlsFor(evidence, occ.rows);
  evidence.controls = controls.records;
  const { synthesis: s, facts, faqBank } = buildSynthesis(evidence, occ, register);
  validateSentenceCitationPlacements(s);
  const record = questionRecord(s, root);
  const o = outputs(page);
  s.sections.find(x => x.id === 'occurrence').observations = { rows: occ.rows, options: occurrenceOptions(occ.title, page.slug) };
  const controlSection = s.sections.find(x => x.id === 'controls');
  if (evidence.controls.length) {
    try { controlSection.additional_markdown = renderControlsFromRecords(evidence.controls.map(c => ({ ...c, dependent_pages: [wikiPath(page)] }))); }
    catch (e) { controlSection.additional_markdown = null; evidence.control_error = e.message; }
  }
  // No reviewed, cited control applies: say so plainly instead of an empty table.
  if (!controlSection.additional_markdown) {
    const t = s.title.toLowerCase(), sites = facts.contrasts.some(({ c }) => c.contrast_kind === 'site');
    controlSection.additional_markdown = `<p class="hmi-mitigation-gap" data-mitigation-gap>No study in this library has yet measured a way to lower heavy metals in ${t}; ${sites ? 'the studies here compare contaminated and ordinary growing settings, and lot testing against the applicable limit remains the verifiable check' : 'the results above show the levels measured, and lot testing against the applicable limit remains the verifiable check'}.</p>`;
    evidence.controls = [];
  }
  // Frontmatter: the published page's own fields (hero, title, URL, aliases) stay.
  const wiki = evidence.wiki;
  const base = wiki ? { ...wiki.fm } : { title: capital(page.slug.replace(/-/g, ' ')), type: page.family };
  const locked = LOCKED.has(`${page.family}s/${page.slug}`);
  for (const k of LEGACY_FM) if (!locked) delete base[k];
  // Frontmatter is public metadata: fields that carry internal programme notes are not kept.
  const droppedFields = locked ? [] : Object.keys(base).filter(k => FORBIDDEN_PUBLIC.test(JSON.stringify(base[k])) || /^(provisional|placement|governance|taxonomy_review|autonomy)/.test(k) && /hmtc|autonomy|scaffold|governance/i.test(JSON.stringify(base[k])));
  for (const k of droppedFields) delete base[k];
  const refs = new Set(facts.sources.filter(k => exists(`wiki/sources/${k}.md`)));
  for (const sec of s.sections) for (const a of [sec.presentation, ...(sec.presentation.passages ?? []), ...sec.answers, ...sec.answers.flatMap(x => x.passages ?? [])]) for (const k of a?.source_keys ?? []) refs.add(k);
  const official = [...refs].filter(k => OFFICIAL.test(k) || k === GEMS || k === FDA).length;
  // Ingredient pages take the shared Rice chrome; product pages keep their own hero shell.
  const fm = { ...base, page_contract_version: '1.0.0', question_record: o.record, synthesis_record: o.synthesis, evidence_coverage: 'partial',
    ...(page.family === 'ingredient' ? { ingredient_presentation: ingredientPresentationVersion } : {}), updated: s.date, sources: refs.size, description: s.description, dek: s.description,
    section_headings: s.section_headings, ingredient_faq_heading: s.universal_faqs.title };
  const labels = page.family === 'product'
    ? { identity: 'Scope', summary: 'Summary', occurrence: 'Profile', contributors: 'Pathways', processing: 'Processing', exposure: 'Exposure', controls: 'Mitigation', testing: 'Testing', procurement: 'Procurement', regulation: 'Limits', events: 'Events', assessment: 'Review' }
    : { summary: 'Summary', identity: 'Scope', occurrence: 'Profile', pathways: 'Pathways', variation: 'Variation', processing: 'Processing', controls: 'Mitigation', tradeoffs: 'Trade-offs', testing: 'Testing', procurement: 'Procurement', product: 'Exposure', assessment: 'Review' };
  fm.toc_labels = { ...Object.fromEntries(Object.entries(s.section_headings).map(([k, v]) => [v, labels[k]])), [s.universal_faqs.title]: 'FAQs' };
  if (page.family === 'ingredient') fm.ingredient_chrome = locked && base.ingredient_chrome ? base.ingredient_chrome : {
    title: s.title, slug: page.slug, description: s.description, updated: s.date, reference_count: refs.size,
    snapshot: [{ label: 'Research sources referenced', count: refs.size - official }, { label: 'Official guidance and instruments', count: official }],
    key_evidence: keyEvidence(facts, s, anchor) };
  const legacyHeadings = wiki ? [...wiki.body.matchAll(/^##\s+(.+?)\s*$/gm)].map(m => m[1]).filter(h => !/routing|contamination profile state|fda tds|evidence indexes/i.test(h)) : [];
  const history = `<!-- BEGIN: hmi-page-history -->\n## Update history\n\n${new Date(`${BUILD_DATE}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}: Rebuilt from every ${s.title.toLowerCase()} record in the library: ${facts.sources.length} occurrence sources, references by form and basis, same-study contrasts${facts.regulatory.length ? ', verified limits' : ''}${evidence.controls.length ? ' and stage-led controls' : ''}.\n<!-- END: hmi-page-history -->`;
  const article = renderContractArticle(s, root, { page: wikiPath(page), before: history, entry: { legacy_headings: legacyHeadings, candidate_source_ids: [] }, fm, record });
  if (/%%/.test(article.content.replace(/<!--[\s\S]*?-->/g, ''))) throw Error(`“%%” in ${page.family}/${page.slug} would start a Quartz comment and delete page content`);
  // HTML comments are renderer markers and never reach readers.
  const forbidden = article.content.replace(/<!--[\s\S]*?-->/g, '').match(FORBIDDEN_PUBLIC);
  if (forbidden) throw Error(`Forbidden public remnant in ${page.family}/${page.slug}: “${article.content.replace(/<!--[\s\S]*?-->/g, '').slice(Math.max(0, forbidden.index - 80), forbidden.index + 40).replace(/\s+/g, ' ')}”`);
  return { page, evidence, occ, synthesis: s, record, faqBank, facts, candidate: article.content, locked, dropped_fields: droppedFields, controls: { group: controls.group, own: controls.own, borrowed: controls.borrowed }, hero: !!pageHeroImage(`${FAMILIES[page.family]}/${page.slug}`), store_state };
}
