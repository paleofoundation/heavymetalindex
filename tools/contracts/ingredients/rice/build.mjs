// Rice candidate: the reviewed pilot page compiled by the shared pilot compiler,
// with the occurrence explorer fed every extracted result from the complete
// ledger. Front matter, hero, byline, snapshot and right sidebar come from the
// unchanged pilot path (presentation lock rice-2026-10-19).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { compilePage } from '../../pilot/compiler.mjs';
import { riceOccurrence, riceOptions, auditDir } from './source-adapter.mjs';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
export { auditDir };
export const candidatePath = `${auditDir}/candidate/rice.md`;
export const synthesisPath = 'data/evidence/syntheses/pilot-rice-v1.json';
export const recordPath = 'data/evidence/questions/ingredient/rice.json';
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const sha = b => crypto.createHash('sha256').update(b).digest('hex');

export function compileIngredient() {
  const s = JSON.parse(read(synthesisPath));
  const occurrence = riceOccurrence(root);
  s.sections.find(x => x.id === 'occurrence').observations = { rows: occurrence.rows, options: riceOptions };
  const p = compilePage(s, root);
  if (/\b(?:P95|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI|Claude)\b/.test(p.content)) throw Error('Forbidden public remnant');
  return { page: p.content, record: p.record, occurrence };
}

export function buildIngredient({ check = false } = {}) {
  const r = compileIngredient();
  const reference = { ...r.occurrence.record, definitions: r.occurrence.definitions.map(d => ({ key: d.key, scope: d.scope, units: d.referenceUnits.length, families: [...new Set(d.referenceUnits.map(u => u.family))] })) };
  const outputs = {
    [candidatePath]: r.page,
    [`${auditDir}/comparator-admission.json`]: JSON.stringify(reference, null, 1) + '\n',
    [`${auditDir}/row-parity.json`]: JSON.stringify(r.occurrence.parity, null, 1) + '\n',
    [`${auditDir}/unit-audit.json`]: JSON.stringify({ dropped_findings: r.occurrence.dropped, units: r.occurrence.unit_audit }, null, 1) + '\n',
  };
  // The question record is unchanged by this migration; check, never rewrite it.
  if (read(recordPath) !== JSON.stringify(r.record, null, 2) + '\n') throw Error('Rice question record would change; reconcile before building');
  for (const [f, c] of Object.entries(outputs)) {
    if (check) { if (!fs.existsSync(path.join(root, f)) || read(f) !== c) throw Error(`Rice output drift: ${f}`); }
    else { fs.mkdirSync(path.dirname(path.join(root, f)), { recursive: true }); fs.writeFileSync(path.join(root, f), c); }
  }
  return { candidate: candidatePath, sha256: sha(r.page), rows: r.occurrence.rows.length, mode: check ? 'check' : 'build' };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.slice(2).some(x => x !== '--check')) throw Error('Only --check supported; central owns adoption.');
  console.log(JSON.stringify(buildIngredient({ check: process.argv.includes('--check') }), null, 2));
}
