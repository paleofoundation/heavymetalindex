// Index rows (routing audit, reingest queues) that name a source record outside the
// seaweed source universe: read each such source's primary text and count seaweed terms,
// so the row's decision rests on the paper's content, not only on its routing label.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import matter from 'gray-matter';
import {resolveLibrarySource} from '../../../lib/library-root.mjs';

const root = path.resolve(import.meta.dirname, '../../../..');
const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed';
const u = JSON.parse(fs.readFileSync(path.join(root, auditDir, 'universe-snapshot.json'), 'utf8'));
const src = new Set(u.items.filter(i => i.kind === 'source').map(i => i.source_id));
const ids = [...new Set(u.items.filter(i => i.kind === 'dataset_row' && !i.path.startsWith('raw/') && !src.has(i.source_id) && !i.source_id.startsWith('ingredient-synthesis:')).map(i => i.source_id))].sort();
const RE = /seaweed|sea vegetable|macroalga|\bkelp|kombu|wakame|\bnori\b|\blaver\b|hijiki|hiziki|dulse|\barame\b|porphyra|pyropia|laminaria|undaria|sargassum|saccharina/gi;
const out = {};
fs.mkdirSync(path.join(root, auditDir, 'primary/index-only'), {recursive: true});
for (const id of ids) {
  const rec = path.join(root, 'wiki/sources', `${id}.md`);
  if (!fs.existsSync(rec)) { out[id] = {record: null, note: 'no wiki source record'}; continue; }
  const fm = matter(fs.readFileSync(rec, 'utf8')).data;
  const declared = [fm.raw_path, fm.pdf_path, fm.data_path].filter(x => typeof x === 'string');
  let hit = null, tries = [];
  for (const d of declared) { for (const cand of [d.startsWith('raw/') ? path.join('/Volumes/HMI-Library/heavy-metal-index-raw', d.slice(4)) : null, d].filter(Boolean)) { const r = resolveLibrarySource(cand, {repoRoot: root}); tries.push(...r.attempts.map(a => `${a.path}: ${a.outcome}`)); if (!hit && r.resolved_path && fs.statSync(r.resolved_path).isFile()) hit = r; } }
  const entry = {record: `wiki/sources/${id}.md`, record_sha256: crypto.createHash('sha256').update(fs.readFileSync(rec)).digest('hex'), attempts: tries};
  if (hit) {
    const p = hit.resolved_path; entry.artifact = p; entry.sha256 = crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
    let text = '';
    try { text = /\.pdf$/i.test(p) ? execFileSync('pdftotext', ['-layout', p, '-'], {maxBuffer: 1 << 28, timeout: 120000}).toString() : fs.readFileSync(p, 'utf8'); } catch (e) { entry.text_error = String(e.message).slice(0, 120); }
    const m = text.match(RE) || [];
    entry.chars = text.length; entry.seaweed_term_hits = m.length; entry.terms = [...new Set(m.map(x => x.toLowerCase()))];
    entry.contexts = [...text.matchAll(new RegExp(`.{0,90}(?:${RE.source}).{0,90}`, 'gi'))].slice(0, 4).map(x => x[0].replace(/\s+/g, ' '));
  } else entry.note = 'no readable primary artifact';
  out[id] = entry;
}
fs.writeFileSync(path.join(root, auditDir, 'index-only-sources.json'), JSON.stringify(out, null, 1) + '\n');
const hits = Object.entries(out).filter(([, v]) => v.seaweed_term_hits > 0);
console.log({sources: ids.length, readable: Object.values(out).filter(v => v.chars > 500).length, with_hits: hits.length});
for (const [k, v] of hits) console.log(k, v.seaweed_term_hits, v.terms.join(','), '|', v.contexts[0]);
