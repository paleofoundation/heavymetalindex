// node tools/engine/page/build.mjs <family>/<slug> [--check]
// Builds one page from its findings: candidate, synthesis, question record, preview,
// ledger, scorecard, references, thin-page assessment and gate results.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateThinPage } from '../../contracts/build-thin-pages-ledger.mjs';
import { root, read, exists, writeFile, parsePage, outputs } from './common.mjs';
import { compilePage } from './page.mjs';
import { buildPreview } from './preview.mjs';
import { buildLedger, writeLedgerFile } from './ledger.mjs';
import { thinPage } from './prose.mjs';
import { loadCorpus, pageUniverse, inspectPage, inspectHero, scorecardFor, runGates, summarize, discoverableFiles } from '../gates/index.mjs';
import { mirrorPage } from '../gates/mirror.mjs';

const text = v => JSON.stringify(v, null, 2) + '\n';
// The deterministic outputs that --check compares.
export function compiledOutputs(c) {
  const o = outputs(c.page);
  // The stored synthesis is the authored record; rendered rows and tables stay in the candidate.
  const synthesis = { ...c.synthesis, sections: c.synthesis.sections.map(({ observations, additional_markdown, ...sec }) => sec) };
  return { [o.candidate]: c.candidate, [o.synthesis]: text(synthesis), [o.record]: text(c.record), [o.faq]: text(c.faqBank),
    [o.admission]: text({ method: c.occ.record.method, frozen: c.occ.record.frozen, admission: c.occ.record.admission, unit_audit: c.occ.unit_audit, unit_counts: c.occ.unit_counts }) };
}
export function writeCompiled(c) { for (const [f, body] of Object.entries(compiledOutputs(c))) writeFile(f, body); }
export function checkCompiled(c) {
  const drift = Object.entries(compiledOutputs(c)).filter(([f, body]) => !exists(f) || read(f) !== body).map(([f]) => f);
  if (drift.length) throw Error(`Engine output drift: ${drift.join(', ')}`);
}

// After the preview exists: ledger from the exact HTML, scorecard, gates, thin-page record.
export function finishPage(c, corpus, htmlPath, universe = pageUniverse(corpus, c.page)) {
  const o = outputs(c.page);
  const html = read(htmlPath);
  const { ledger, errors, undecided } = buildLedger(c.evidence, c.occ, universe, o.references);
  writeLedgerFile(o.ledger, ledger);
  const inspected = inspectPage(c.page, html);
  const scorecard = scorecardFor(c.page, universe, ledger, inspected);
  writeFile(o.scorecard, text(scorecard));
  const result = runGates({ page: c.page, universe, ledger, scorecard, inspected });
  const summary = summarize(result, inspected.presentation, inspectHero(c.page, html));
  const thin = thinPage(c.facts, ledger, summary.status === 'pass', c.evidence.controls.length);
  const thinErrors = validateThinPage(thin, o.thin);
  writeFile(o.thin, text(thin));
  const status = { page: `${c.page.family}/${c.page.slug}`, origin: c.evidence.origin, store_state: c.store_state, status: summary.status, gates: summary.gates, presentation: summary.presentation, hero: summary.hero,
    rows: c.occ.rows.length, states: c.facts.states, legacy_findings: c.evidence.legacy_finding_ids.length,
    lost_findings: c.evidence.legacy_finding_ids.filter(id => !c.occ.rows.some(r => r.finding_id === id)),
    ledger_errors: errors.slice(0, 20), undecided_items: undecided.length, undecided_sample: undecided.slice(0, 10),
    undecided_by_file: Object.fromEntries(Object.entries(Object.groupBy(undecided, id => id.startsWith('source:') ? 'source records' : id.replace(/^dataset:/, '').split('#')[0])).map(([k, v]) => [k, v.length]).sort((a, b) => b[1] - a[1]).slice(0, 15)), control_error: c.evidence.control_error ?? null,
    thin: thin.status, thin_reasons: thin.reasons, thin_errors: thinErrors, publishable: summary.status === 'pass' && !thinErrors.length && !(thin.status === 'blocked'),
    controls: { records: c.evidence.controls.length, ...c.controls }, dropped_fields: c.dropped_fields,
    html: path.isAbsolute(htmlPath) ? path.relative(root, htmlPath) : htmlPath, html_bytes: Buffer.byteLength(html), discoverable_outputs: discoverableFiles(o.dir).filter(f => !f.includes('/preview/')) };
  status.mirror = mirrorPage(c.page, status.status);
  writeFile(o.gates, text(status));
  return status;
}

export function buildOne(page, { check = false, corpus = null } = {}) {
  const c = compilePage(page);
  if (c.skipped) return { page: `${page.family}/${page.slug}`, status: 'skipped', reason: c.skipped };
  if (check) { checkCompiled(c); return { page: `${page.family}/${page.slug}`, status: 'check', rows: c.occ.rows.length }; }
  writeCompiled(c);
  if (!c.hero) return { page: `${page.family}/${page.slug}`, status: 'blocked', reason: 'missing_required_input: no preserved hero artwork is registered for this page' };
  const o = outputs(page), preview = buildPreview([c], o.preview);
  return finishPage(c, corpus ?? loadCorpus([page]), path.join(root, preview.html[`${page.family}/${page.slug}`]));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2), page = parsePage(args.find(a => !a.startsWith('--')));
  const r = buildOne(page, { check: args.includes('--check') });
  console.log(JSON.stringify(r, null, 1));
  if (!['pass', 'check', 'skipped'].includes(r.status)) process.exitCode = 1;
}
