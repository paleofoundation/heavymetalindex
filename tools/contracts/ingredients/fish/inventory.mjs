// Fish source inventory: every wiki/sources record in the fresh independent universe,
// with its declared primary paths resolved on the mounted HMI Library first, then the
// repository raw tree and the backup. Text copies (pdftotext -layout for PDFs) are
// written to the audit dir so subagents and the ledger cite one hashed artifact.
// Usage: node tools/contracts/ingredients/fish/inventory.mjs <universe.json>
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import matter from 'gray-matter';
import {resolveLibrarySource, LIBRARY_MOUNT} from '../../../lib/library-root.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../..');
export const auditDir = 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const universe = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const out = [];
for (const item of universe.items.filter(i => i.kind === 'source')) {
  const file = path.join(root, item.path), fm = matter(fs.readFileSync(file, 'utf8')).data;
  const declared = [...new Set(Object.entries(fm).filter(([k]) => /(^raw_path$|_paths?$|^pdf_path$|^markdown_path$)/.test(k))
    .flatMap(([, v]) => Array.isArray(v) ? v : [v]).filter(v => typeof v === 'string' && v.trim()))];
  const attempts = [];
  let chosen = null;
  for (const d of declared) {
    // Mounted volume first: raw/... lives under heavy-metal-index-raw on the volume.
    const mountedCandidate = d.startsWith('raw/') ? path.join(LIBRARY_MOUNT, 'heavy-metal-index-raw', d.slice(4)) : d.startsWith('/Volumes/') ? d : null;
    if (mountedCandidate) {
      const ok = fs.existsSync(mountedCandidate) && fs.statSync(mountedCandidate).isFile() && fs.statSync(mountedCandidate).size > 0;
      attempts.push({channel: 'mounted_library', location: mountedCandidate, outcome: ok ? 'readable' : 'absent'});
      if (ok && !chosen) chosen = {path: mountedCandidate, root_used: 'mounted_library'};
    }
    const r = resolveLibrarySource(d, {repoRoot: root});
    for (const a of r.attempts) attempts.push({channel: a.root_used, location: a.path, outcome: a.exists ? 'readable' : a.outcome});
    if (!chosen && r.resolved_path) chosen = {path: r.resolved_path, root_used: r.root_used};
  }
  let text = null, textSha = null, primarySha = null, kind = null;
  if (chosen) {
    const buf = fs.readFileSync(chosen.path); primarySha = sha(buf);
    kind = path.extname(chosen.path).slice(1).toLowerCase();
    const dest = path.join(root, auditDir, 'text', `${item.source_id}.txt`);
    if (!fs.existsSync(dest)) {
      try {
        if (kind === 'pdf') execFileSync('pdftotext', ['-layout', chosen.path, dest], {stdio: 'ignore', timeout: 120000});
        else if (['md', 'txt', 'html', 'htm', 'xml', 'csv', 'json'].includes(kind)) fs.writeFileSync(dest, buf);
      } catch { /* recorded below as no text */ }
    }
    if (fs.existsSync(dest)) { const t = fs.readFileSync(dest); text = path.relative(root, dest); textSha = sha(t); }
  }
  const textChars = text ? fs.statSync(path.join(root, text)).size : 0;
  out.push({source_id: item.source_id, record: item.path, record_sha256: item.sha256, match: item.match,
    title: fm.title ?? null, year: fm.year ?? null, doi: fm.doi ?? null, source_type: fm.source_type ?? null,
    ingredients: fm.ingredients ?? [], matrices: fm.matrices ?? [], metals: fm.metals ?? [],
    declared_paths: declared, primary: chosen?.path ?? null, primary_root: chosen?.root_used ?? null, primary_kind: kind,
    primary_sha256: primarySha, text_copy: text, text_sha256: textSha, text_chars: textChars, attempts});
}
fs.writeFileSync(path.join(root, auditDir, 'source-inventory.json'), JSON.stringify(out, null, 1) + '\n');
const c = (f) => out.filter(f).length;
console.log(JSON.stringify({sources: out.length, with_primary: c(x => x.primary), mounted: c(x => x.primary_root === 'mounted_library'),
  with_text: c(x => x.text_copy && x.text_chars > 500), no_declared: c(x => !x.declared_paths.length), kinds: out.reduce((m, x) => (m[x.primary_kind] = (m[x.primary_kind] ?? 0) + 1, m), {})}));
