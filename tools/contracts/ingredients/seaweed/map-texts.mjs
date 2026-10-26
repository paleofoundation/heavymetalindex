// Resolve every seaweed universe source record to its primary artifact and a readable
// text copy (pdftotext -layout for PDFs; markdown/text copied). Mounted HMI Library first,
// then the declared path, then the backup. Writes primary/text/<sid>.txt and access.json.
// Identity and completeness are verified later by content review, not implied here.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import matter from 'gray-matter';
import {resolveLibrarySource} from '../../../lib/library-root.mjs';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';

const root = path.resolve(import.meta.dirname, '../../../..');
export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed';
const outDir = path.join(root, auditDir, 'primary/text');
fs.mkdirSync(outDir, {recursive: true});
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const MOUNT = '/Volumes/HMI-Library';

const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['seaweed']}), 'seaweed');
fs.writeFileSync(path.join(root, auditDir, 'universe-snapshot.json'), JSON.stringify(universe) + '\n');
const sources = universe.items.filter(i => i.kind === 'source');
const access = [];
for (const s of sources) {
  const fm = matter(fs.readFileSync(path.join(root, s.path), 'utf8')).data;
  const declared = [fm.raw_path, fm.raw_path_secondary, fm.raw_path_v3, fm.pdf_path, fm.data_path, ...(fm.data_paths || [])].filter(x => typeof x === 'string' && x.trim());
  const tries = [];
  for (const d of declared) {
    // Mounted volume equivalent of a repository raw/ path.
    if (d.startsWith('raw/')) tries.push(resolveLibrarySource(path.join(MOUNT, 'heavy-metal-index-raw', d.slice(4)), {repoRoot: root}));
    tries.push(resolveLibrarySource(d, {repoRoot: root}));
  }
  const hit = tries.find(t => t.resolved_path && fs.statSync(t.resolved_path).isFile());
  const rec = {source_id: s.source_id, record: s.path, doi: fm.doi ?? null, title: fm.title ?? null, declared, mounted: fs.existsSync(MOUNT),
    attempts: tries.flatMap(t => t.attempts.map(a => ({path: a.path, root_used: a.root_used, exists: a.exists, outcome: a.outcome}))), resolved: hit?.resolved_path ?? null, root_used: hit?.root_used ?? null};
  if (hit) {
    const p = hit.resolved_path, buf = fs.readFileSync(p);
    rec.sha256 = sha(buf); rec.bytes = buf.length;
    const out = path.join(outDir, `${s.source_id}.txt`);
    try {
      if (/\.pdf$/i.test(p)) execFileSync('pdftotext', ['-layout', p, out], {stdio: 'ignore', timeout: 120000});
      else if (/\.(md|txt|csv|json|html?)$/i.test(p)) fs.writeFileSync(out, buf);
      else rec.text_note = 'non-text artifact';
      if (fs.existsSync(out)) { const t = fs.readFileSync(out, 'utf8'); rec.text = path.relative(root, out); rec.text_chars = t.length; rec.text_sha256 = sha(t); }
    } catch (e) { rec.text_error = String(e.message).slice(0, 200); }
  }
  access.push(rec);
}
fs.writeFileSync(path.join(root, auditDir, 'source-access.json'), JSON.stringify({generated: '2026-10-22', universe_sha256: universe.sha256, items: universe.items.length, sources: access.length, records: access}, null, 1) + '\n');
console.log({sources: access.length, resolved: access.filter(a => a.resolved).length, text: access.filter(a => a.text_chars > 500).length, mountedRoot: access.filter(a => a.root_used === 'mounted_library').length});
