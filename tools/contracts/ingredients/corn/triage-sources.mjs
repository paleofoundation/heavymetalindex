// Triage every source record in the corn universe: resolve its primary artifact (mounted
// library first, then raw/ and the backup), keep a text copy in the audit primary/ folder,
// and count maize/corn mentions with context lines. Triage informs, never decides: every
// disposition is made later from primary text.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';
import {auditSourceAccess} from '../../../lib/library-root.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const audit = 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn';
const corpus = loadIndependentCorpus(root, {ingredients: ['corn']});
const universe = recomputeUniverse(corpus, 'corn');
// Declared paths that moved inside the mounted library are found by file name (exact, then the
// truncated-stem prefix some records carry), and recorded as relocated rather than missing.
const libFiles = execFileSync('find', ['/Volumes/HMI-Library/heavy-metal-index-raw', '/Volumes/HMI-Library/raw', '/Volumes/HMI-Library/Regulatory documents', '-type', 'f'], {maxBuffer: 1 << 28}).toString().split('\n').filter(Boolean);
export function relocate(declared) {
  for (const d of declared) {
    const base = path.basename(d), stem = base.replace(/\.[a-z]+$/i, '');
    const exact = libFiles.filter(f => path.basename(f) === base);
    const pick = exact.find(f => f.includes('/ingested/')) ?? exact[0];
    if (pick) return pick;
    if (stem.length > 30) { const pre = libFiles.find(f => path.basename(f).startsWith(stem.slice(0, -1)) && /\.pdf$/i.test(f)); if (pre) return pre; }
  }
  return null;
}
const rx = /\b(maize|corn|zea mays|sweet ?corn|sweetcorn)\b/gi;
const out = [];
for (const it of universe.items.filter(i => i.kind === 'source')) {
  const rec = path.join(root, it.path);
  const fm = matter(fs.readFileSync(rec, 'utf8')).data;
  const declared = [fm.raw_path, fm.pdf_path, fm.local_path, fm.data_path].flat().filter(x => typeof x === 'string');
  const access = declared.length ? auditSourceAccess(declared.map(p => p.startsWith('/') || p.startsWith('raw/') ? p : `raw/${p}`), {repoRoot: root}) : {raw_access: false, resolutions: []};
  let relocated = null;
  if (!access.resolved_path && declared.length) { relocated = relocate(declared); if (relocated) Object.assign(access, {resolved_path: relocated, root_used: 'mounted_library_relocated', sha256: crypto.createHash('sha256').update(fs.readFileSync(relocated)).digest('hex')}); }
  let text = '', copy = null;
  if (access.resolved_path) {
    const p = access.resolved_path;
    try {
      if (/\.pdf$/i.test(p)) text = execFileSync('pdftotext', ['-layout', p, '-'], {maxBuffer: 1 << 28}).toString();
      else if (/\.(md|txt|csv|html?)$/i.test(p)) text = fs.readFileSync(p, 'utf8');
      else if (fs.statSync(p).isDirectory()) text = '';
    } catch (e) { text = ''; }
    if (/\.xml$/i.test(p)) text = fs.readFileSync(p, 'utf8').replace(/<[^>]+>/g, ' ');
    if (text) { copy = `${audit}/primary/${it.source_id}.txt`; fs.writeFileSync(path.join(root, copy), text); }
  }
  const hits = [...text.matchAll(rx)].length;
  const ctx = text.split('\n').filter(l => rx.test(l)).slice(0, 12).map(l => l.trim().slice(0, 200));
  out.push({source_id: it.source_id, record: it.path, title: fm.title, year: fm.year, declared, resolved: access.resolved_path ?? null, root_used: access.root_used ?? null,
    sha256: access.sha256 ?? null, relocated, text_copy: copy, text_chars: text.length, corn_mentions: hits, ingredients: fm.ingredients, matrices: fm.matrices, context: ctx,
    attempts: (access.resolutions ?? []).flatMap(r => r.attempts.map(a => ({path: a.path, root: a.root_used, outcome: a.outcome})))});
}
fs.writeFileSync(path.join(root, audit, 'triage/source-triage.json'), JSON.stringify(out, null, 1) + '\n');
console.log(out.length, 'sources;', out.filter(o => o.text_chars).length, 'with text;', out.filter(o => !o.resolved).length, 'unresolved');
