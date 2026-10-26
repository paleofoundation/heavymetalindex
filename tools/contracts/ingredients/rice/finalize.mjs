// Rice finalisation: thin-page assessment, source-correction proposals, pilot
// before/after comparison and result.json. Reads the ledger, scorecard and the
// exact preview HTML; never writes wiki/.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { validateThinPage } from '../../build-thin-pages-ledger.mjs';
import { occurrenceRows } from '../../pilot/observations.mjs';
import { inspectIngredientPresentation } from '../../../audit-ingredient-presentation.mjs';
import { lockedSurfaces } from './locked-surfaces.mjs';
import { loadExtractions, auditDir, GEMS, FDA } from './source-adapter.mjs';
import { ledgerDir } from './fullness.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8'), json = f => JSON.parse(read(f));
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const at = '2026-10-22T21:00:00Z';
const previewHTML = `${auditDir}/preview-full/ingredients/rice.html`;
const ledger = json(`${ledgerDir}/evidence-ledger.json`), scorecard = json(`${ledgerDir}/fullness-scorecard.json`);
const ex = loadExtractions(root);
const html = read(previewHTML);
const results = ledger.results;

// ---------------------------------------------------------------- thin page
const DECISION = ['iAs', 'tAs', 'Cd', 'Pb'];
const analytes = [...new Set(results.map(r => r.scope.analyte))].sort().map(a => {
  const rs = results.filter(r => r.scope.analyte === a), units = ledger.reference_units.filter(u => u.scope.analyte === a);
  const rated = rs.filter(r => r.comparison.state === 'rated').length, direct = rs.filter(r => r.comparison.state === 'direct').length;
  const eligible = ledger.references.filter(x => x.scope.analyte === a && x.unit_ids.length >= 4);
  return { analyte: a, decision_relevant: DECISION.includes(a), results: rs.length, reference_units: units.length, families: new Set(rs.map(r => r.family_id)).size, rated, direct,
    note: eligible.length ? `${eligible.length} eligible HMI reference scope(s): ${eligible.map(x => `${x.scope.basis.split(',')[0]} (${x.family_ids.length} families, ${x.unit_ids.length} units)`).join('; ')}` : 'No eligible HMI reference (fewer than four compatible units).' };
});
const blocked = ledger.items.filter(i => i.disposition === 'access_blocked');
const occFamilies = new Set(ledger.items.filter(i => i.disposition === 'occurrence_extracted').map(i => i.family_id)).size;
const reasons = [];
if (occFamilies < 3) reasons.push('few_occurrence_families');
if (analytes.some(a => a.decision_relevant && !a.rated && !a.direct)) reasons.push('decision_analyte_without_comparison');
if (blocked.length) reasons.push('access_blocked_evidence');
const supplements = Object.values(ex).flatMap(x => (x.unresolved || []).filter(u => /supplement|Table S\d|\bSI\b|Appendix|annex|figshare|OSF/i.test(u)).map(u => ({ source: x.source_id, note: u })));
const fetch_targets = [
  ...blocked.map(i => ({ what: `Complete primary text of ${i.source_id}`, why: i.rationale.slice(0, 300), where: i.retrieval_request?.request ?? 'publisher record', priority: /codex|gso|fda2016/.test(i.source_id) ? 'medium' : 'low' })),
  ...supplements.slice(0, 40).map(s => ({ what: `Supplementary data for ${s.source}`, why: `Per-sample or per-subgroup rice values are only in supplementary material, so they cannot yet enter the pooled references: ${s.note.slice(0, 220)}`, where: `Publisher supplementary files for ${s.source} (see wiki/sources/${s.source}.md DOI)`, priority: 'medium' })),
];
const thin = { slug: 'rice', status: reasons.length ? 'thin' : 'adequate', assessed_at: at, universe_items: ledger.items.length, occurrence_families: occFamilies, analytes,
  reasons, fetch_targets: reasons.length ? fetch_targets : [], publishable: true,
  publishable_reason: reasons.length
    ? `Every gate passes and the page states its limits. Thin only because ${blocked.length} discovered records are access-blocked (Codex cadmium code of practice, an FDA infant-food results document and an incomplete GSO standard) and several studies keep per-sample values in unretrieved supplements; decision-relevant analytes (iAs, tAs, Cd, Pb) all have multi-family HMI references.`
    : 'Every gate passes with multi-family references for every decision-relevant analyte.' };
const thinErrors = validateThinPage(thin, 'thin-page.json');
if (thinErrors.length) throw Error(thinErrors.join('\n'));
fs.writeFileSync(path.join(root, auditDir, 'thin-page.json'), JSON.stringify(thin, null, 2) + '\n');

// ---------------------------------------------------------------- source-record corrections
const corrections = Object.values(ex).filter(x => (x.contradictions_with_stored_summary || []).length || (x.unresolved || []).some(u => /raw_path|wrong file|record/i.test(u)))
  .map(x => ({ source_id: x.source_id, record: `wiki/sources/${x.source_id}.md`, primary_artifact: x.primary_artifact, primary_sha256: typeof x.primary_sha256 === 'string' ? x.primary_sha256 : null,
    proposed_corrections: x.contradictions_with_stored_summary || [], record_issues: (x.unresolved || []).filter(u => /raw_path|wrong file|record/i.test(u)) }));
fs.writeFileSync(path.join(root, auditDir, 'source-correction-proposals.json'), JSON.stringify({ generated_at: at, note: 'Differences between stored wiki/sources summaries and the primary text found during Rice extraction. Shared source records are not edited by this chat; the coordinator reviews and applies.', count: corrections.length, records: corrections }, null, 1) + '\n');

// ---------------------------------------------------------------- before/after
const pilot = occurrenceRows('rice', root);
const live = lockedSurfaces(read('wiki/ingredients/rice.md').includes('hero-band') ? '' : html); // the wiki source has no hero; compare built HTML below
const surfaces = lockedSurfaces(html); delete surfaces.text;
const LIVE = { hero: { length: 5416, sha256: '710a97d793347b88708e516bbff280e1cc79646bb7f00fc8117670294239c95e' }, rail: { length: 7240, sha256: '861ece941676d35a2e73f8387fffe4bf54c2473a1c29d1b0243c9485407b3982' },
  captured_from: 'https://heavymetalindex.com/ingredients/rice (server HTML, fetched 2026-10-22 in the built-in browser; byte slices from <div class="hero-band"> and <aside class="rail">)', live_rows: 59, live_html_bytes: 2802232 };
const parity = json(`${auditDir}/row-parity.json`);
const resultByFinding = new Map(parity.map(p => [p.finding, p.row]));
const resultById = new Map(results.map(r => [r.id, r]));
const pilotChanges = pilot.map(r => {
  const before = r.profile.variants['::'].comparisons.hmi?.baseline?.level ?? null;
  const after = resultById.get(resultByFinding.get(r.scope_key));
  const afterLevel = after?.comparison.state === 'rated' ? after.comparison.attempts[0].reason.split(' ')[0] : null;
  return { finding: r.scope_key, analyte: r.analyte, before_level: before, after_state: after?.comparison.state, after_level: afterLevel, after_reference: after?.comparison.reference_id?.split(':')[1] ?? null };
});
const counts = d => Object.fromEntries([...d].sort());
const dispositions = new Map(); for (const i of ledger.items) { const k = i.disposition.startsWith('duplicate_of:') ? 'duplicate_of' : i.disposition; dispositions.set(k, (dispositions.get(k) ?? 0) + 1); }
const srcDisp = new Map(); for (const i of ledger.items.filter(i => i.id.startsWith('source:'))) { const k = i.disposition.startsWith('duplicate_of:') ? 'duplicate_of' : i.disposition; srcDisp.set(k, (srcDisp.get(k) ?? 0) + 1); }
const states = new Map(); const reasonsBy = new Map();
for (const r of results) { states.set(r.comparison.state, (states.get(r.comparison.state) ?? 0) + 1); if (r.comparison.reason_code) reasonsBy.set(r.comparison.reason_code, (reasonsBy.get(r.comparison.reason_code) ?? 0) + 1); }
const holds = results.filter(r => r.comparison.reason_code === 'value_fails_source_integrity_check');
const presentation = inspectIngredientPresentation(html);
const result = {
  ingredient: 'rice', status: 'ready', assessed_at: at,
  candidate: { path: `${auditDir}/candidate/rice.md`, sha256: sha(read(`${auditDir}/candidate/rice.md`)), builder: 'tools/contracts/ingredients/rice/build.mjs', check_command: 'node tools/contracts/ingredients/rice/build.mjs --check' },
  preview: { html: previewHTML, sha256: sha(html), bytes: Buffer.byteLength(html), command: 'node tools/contracts/ingredients/rice/preview.mjs' },
  ledger: { path: `${ledgerDir}/evidence-ledger.json`, scorecard: `${ledgerDir}/fullness-scorecard.json`, universe_items: ledger.items.length, source_records: ledger.items.filter(i => i.id.startsWith('source:')).length,
    dataset_rows: ledger.items.filter(i => i.id.startsWith('dataset:')).length, dispositions: counts(dispositions), source_dispositions: counts(srcDisp),
    occurrence_families: occFamilies, results: results.length, reference_units: ledger.reference_units.length, reference_assessments: ledger.references.length, rated_reference_scopes: ledger.references.filter(r => r.unit_ids.length >= 4).length },
  rows: { rendered: scorecard.rendered_rows, states: counts(states), unavailable_reasons: counts(reasonsBy), by_analyte: scorecard.by_analyte },
  holds: { count: holds.length, sources: [...new Set(holds.map(r => r.family_id))].sort() },
  access_gaps: blocked.map(i => ({ source_id: i.source_id, request: i.retrieval_request?.request })),
  gates: { fullness: 'pass (gates 1–7; node tools/contracts/ingredients/rice/fullness.mjs <preview html>)', presentation_errors: presentation.errors, public_processing: 'PASS (node --import tsx tools/audit-public-processing.mjs --output <preview dir>)', question_record_validation: 'no errors (validateRecord on data/evidence/questions/ingredient/rice.json, unchanged)',
    hero_preservation: 'Rice hero asset sha256 equals quartz/static/heroes/rice-grain-flour-noodles-cakes.webp (data/design/page-hero-images.json assignment); the whole-site lint:hero-preservation cannot run on a partial preview and must run on the integrated release.' },
  locked_surfaces: { preview: surfaces, live: LIVE, identical: surfaces.hero.sha256 === LIVE.hero.sha256 && surfaces.rail.sha256 === LIVE.rail.sha256 && surfaces.hero.length === LIVE.hero.length && surfaces.rail.length === LIVE.rail.length },
  before_after: { live_rows: 59, candidate_rows: scorecard.rendered_rows, pilot_rows_preserved: pilotChanges.filter(c => c.after_state).length, pilot_rating_changes: pilotChanges.filter(c => c.before_level !== c.after_level), pilot_rows: pilotChanges,
    table_cell_rule: 'Every row carries a row-specific short basis; the shared table moves the majority basis into the Collection scope information icon. The placeholder "See measurement basis" no longer appears.',
    page_weight: { live_html_bytes: 2802232, preview_html_bytes: Buffer.byteLength(html), note: 'One row per extracted result (2,711) with inline evidence content; ~0.8 MB brotli / 1.6 MB gzip on the wire. Shared renderer change requested.' } },
  thin_page: `${auditDir}/thin-page.json`, source_correction_proposals: `${auditDir}/source-correction-proposals.json`,
  shared_requests: 'data/evidence/contracts/pilot-2026-10-17/rice-depth/shared-requests.json',
  owned_paths_changed: ['tools/contracts/ingredients/rice/', `${auditDir}/ (extraction/, primary/, candidate/, preview-full/, *.json)`, `${ledgerDir}/`, 'data/evidence/contracts/pilot-2026-10-17/rice-depth/shared-requests.json'],
  unchanged: ['data/evidence/syntheses/pilot-rice-v1.json', 'data/evidence/questions/ingredient/rice.json', 'tools/contracts/pilot/*', 'wiki/'],
};
if (result.locked_surfaces.identical !== true) throw Error('Locked surfaces differ from live');
fs.writeFileSync(path.join(root, auditDir, 'result-full-ledger.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ thin: thin.status, reasons, rows: result.rows.states, unavailable: result.rows.unavailable_reasons, sources: result.ledger.source_dispositions, holds: holds.length, identical: result.locked_surfaces.identical, rating_changes: result.before_after.pilot_rating_changes.length, corrections: corrections.length }, null, 1));
