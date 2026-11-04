// Thin-pages ledger (owner instruction, 22 October 2026). Each ingredient build writes
// `thin-page.json` in its own audit directory; this rolls them into one evidence-pull queue.
// Usage: node tools/contracts/build-thin-pages-ledger.mjs [--check]
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const out = 'data/evidence/contracts/thin-pages-ledger.json';
const reasons = ['few_occurrence_families', 'decision_analyte_without_comparison', 'no_lower_contamination_comparison', 'access_blocked_evidence', 'missing_required_input', 'no_applicable_cited_control'];

export function validateThinPage(x, file) {
  const errors = [], need = (cond, msg) => { if (!cond) errors.push(`${file}: ${msg}`); };
  need(/^[a-z0-9-]+$/.test(x.slug ?? ''), 'slug');
  need(['thin', 'blocked', 'adequate'].includes(x.status), 'status thin | blocked | adequate');
  need(Number.isFinite(Date.parse(x.assessed_at)), 'assessed_at');
  need(Number.isInteger(x.universe_items) && Number.isInteger(x.occurrence_families), 'universe_items and occurrence_families');
  need(Array.isArray(x.analytes), 'analytes');
  for (const a of x.analytes ?? []) need(a.analyte && Number.isInteger(a.results) && Number.isInteger(a.reference_units) && Number.isInteger(a.families) && typeof a.decision_relevant === 'boolean', `analyte entry ${a.analyte}`);
  if (x.status !== 'adequate') {
    need(x.reasons?.length && x.reasons.every(r => reasons.includes(r)), `reasons from: ${reasons.join(', ')}`);
    need(x.fetch_targets?.length, 'at least one fetch target');
    for (const t of x.fetch_targets ?? []) need(t.what && t.why && t.where && ['high', 'medium', 'low'].includes(t.priority), 'fetch target needs what, why, where, priority');
  }
  need(typeof x.publishable === 'boolean' && x.publishable_reason, 'publishable and publishable_reason');
  return errors;
}

export function buildThinPagesLedger({check = false} = {}) {
  const dirs = ['data/evidence/contracts/most-studied-rollout-2026-10-22', 'data/evidence/contracts/ingredient-rollout-2026-10-22'];
  const pages = [], errors = [];
  for (const d of dirs) for (const slug of fs.existsSync(path.join(root, d)) ? fs.readdirSync(path.join(root, d)) : []) {
    const f = path.join(d, slug, 'thin-page.json');
    if (!fs.existsSync(path.join(root, f))) continue;
    const x = JSON.parse(fs.readFileSync(path.join(root, f), 'utf8'));
    errors.push(...validateThinPage(x, f));
    pages.push({...x, record: f});
  }
  if (errors.length) throw Error('Thin-page records invalid:\n' + errors.join('\n'));
  const rank = {blocked: 0, thin: 1, adequate: 2}, pri = {high: 0, medium: 1, low: 2};
  pages.sort((a, b) => rank[a.status] - rank[b.status] || a.slug.localeCompare(b.slug));
  const queue = pages.filter(p => p.status !== 'adequate').flatMap(p => p.fetch_targets.map(t => ({slug: p.slug, ...t}))).sort((a, b) => pri[a.priority] - pri[b.priority] || a.slug.localeCompare(b.slug));
  const ledger = {schema_version: 1, rule: 'AGENTS.md "Thin pages ledger (owner instruction, 22 October 2026)"', counts: {blocked: pages.filter(p => p.status === 'blocked').length, thin: pages.filter(p => p.status === 'thin').length, adequate: pages.filter(p => p.status === 'adequate').length}, pages, fetch_queue: queue};
  const text = JSON.stringify(ledger, null, 2) + '\n';
  if (check) { if (!fs.existsSync(path.join(root, out)) || fs.readFileSync(path.join(root, out), 'utf8') !== text) throw Error('Thin-pages ledger is stale; rebuild it'); }
  else fs.writeFileSync(path.join(root, out), text);
  return ledger.counts;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(JSON.stringify(buildThinPagesLedger({check: process.argv.includes('--check')})));
