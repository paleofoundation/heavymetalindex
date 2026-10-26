// Screen the primary text of every source record that entered tomato discovery only
// through the generic alias "raw": resolve its file (mounted library first), extract
// text, and record whether tomato is named anywhere. Writes raw-alias-screen.json.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {auditSourceAccess} from '../../../lib/library-root.mjs';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const audit = path.join(root, 'data/evidence/contracts/ingredient-rollout-2026-10-22/tomato');
const TOMATO = /tomat|lycopersic/i;
const tmp = fs.mkdtempSync(path.join(process.env.TMPDIR || '/tmp', 'tomato-screen-'));
const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['tomato']}), 'tomato');
const out = {};
for (const item of universe.items.filter(i => i.kind === 'source')) {
  const text = fs.readFileSync(path.join(root, item.path), 'utf8');
  if (TOMATO.test(text)) continue;
  const fm = matter(text).data;
  const declared = [fm.raw_path, fm.data_path].flat().filter(x => typeof x === 'string');
  const a = auditSourceAccess(declared, {repoRoot: root});
  const rec = {record: item.path, declared, resolved_path: a.resolved_path, root_used: a.root_used, sha256: a.sha256 ?? null};
  if (a.resolved_path) {
    const ext = path.extname(a.resolved_path).toLowerCase();
    let body = '';
    try {
      if (ext === '.pdf') { const t = path.join(tmp, 'x.txt'); execFileSync('pdftotext', ['-q', a.resolved_path, t]); body = fs.readFileSync(t, 'utf8'); }
      else if (['.md', '.txt', '.csv', '.html', '.htm', '.json', '.tsv'].includes(ext)) body = fs.readFileSync(a.resolved_path, 'utf8');
      else rec.note = `no text reader for ${ext}`;
    } catch (e) { rec.note = `text extraction failed: ${String(e.message).slice(0, 100)}`; }
    rec.text_chars = body.length;
    const hits = [...body.matchAll(/[^\n]{0,60}(tomat|lycopersic)[^\n]{0,60}/gi)].map(m => m[0].trim());
    rec.tomato_mentions = hits.length; rec.examples = hits.slice(0, 5);
  } else rec.note = 'no primary file declared or resolvable';
  out[item.source_id] = rec;
}
fs.rmSync(tmp, {recursive: true, force: true});
fs.writeFileSync(path.join(audit, 'raw-alias-screen.json'), JSON.stringify(out, null, 1) + '\n');
const v = Object.entries(out);
console.log(v.length, 'screened;', v.filter(([, r]) => r.tomato_mentions).length, 'name tomato;', v.filter(([, r]) => !r.resolved_path).length, 'unresolved;', v.filter(([, r]) => r.resolved_path && !r.text_chars).length, 'no text');
