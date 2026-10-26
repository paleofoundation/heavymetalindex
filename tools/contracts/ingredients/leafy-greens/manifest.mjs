// Fresh per-source access manifest for the leafy-greens universe: frontmatter identity,
// declared raw paths resolved through the shared library fallback, and a text copy of
// each readable primary artifact (pdftotext -layout) for primary-text review.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';
import {auditSourceAccess} from '../../../lib/library-root.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const audit = 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens';
const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['leafy-greens']}), 'leafy-greens');
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const out = [];
for (const u of universe.items.filter(i => i.kind === 'source')) {
  const fm = matter(fs.readFileSync(path.join(root, u.path), 'utf8')).data;
  const declared = [fm.raw_path, ...(Array.isArray(fm.raw_paths) ? fm.raw_paths : []), fm.data_path, fm.pdf_path, fm.file].filter(x => typeof x === 'string' && x.trim());
  const access = auditSourceAccess(declared, {repoRoot: root});
  let text = null;
  if (access.resolved_path) {
    const ext = path.extname(access.resolved_path).toLowerCase();
    const dst = path.join(root, audit, 'primary', `${u.source_id}.txt`);
    if (!fs.existsSync(dst)) {
      try {
        if (ext === '.pdf') execFileSync('pdftotext', ['-layout', access.resolved_path, dst], {stdio: 'ignore', timeout: 120000});
        else if (['.md', '.txt', '.csv', '.html', '.htm', '.json'].includes(ext)) fs.copyFileSync(access.resolved_path, dst);
      } catch {}
    }
    if (fs.existsSync(dst)) text = {path: path.relative(root, dst), bytes: fs.statSync(dst).size};
  }
  out.push({source_id: u.source_id, record: u.path, record_sha256: u.sha256, match: u.match, title: fm.title, year: fm.year, doi: fm.doi ?? null,
    url: fm.url ?? fm.source_url ?? null, source_type: fm.source_type ?? fm.type ?? null, declared, resolved: access.resolved_path, root_used: access.root_used,
    primary_sha256: access.sha256 ?? null, mounted: access.resolutions?.[0]?.mounted_library?.mounted ?? null, text});
}
fs.writeFileSync(path.join(root, audit, 'source-manifest.json'), JSON.stringify(out, null, 1) + '\n');
const c = {readable: out.filter(o => o.resolved).length, text: out.filter(o => o.text && o.text.bytes > 2000).length, none: out.filter(o => !o.resolved).map(o => o.source_id)};
console.log(JSON.stringify(c, null, 1));
