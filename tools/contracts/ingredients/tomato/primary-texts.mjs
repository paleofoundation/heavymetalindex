// Resolve every tomato-naming source record's primary file (mounted HMI Library
// first, backup fallback) and keep a text copy for extraction. Writes
// primary/<id>.txt and primary-access.json in the tomato audit directory.
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
const universe = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['tomato']}), 'tomato');
// Declared raw paths that no longer resolve; the same files were found at these
// mounted-library locations (identity checked against title/DOI during extraction).
// Each is also a source-record correction proposal.
const L = '/Volumes/HMI-Library/', R = L + 'heavy-metal-index-raw/', P = L + 'research-pulls/heavy-metal-index/';
export const RELOCATED = {
  'bazie2022-burkina-faso-foodstuffs-metals': R + 'manual-fetch/seasonal-geographic-variance/ingested/gap-peanuts-cd_2022_10-1038-s41598-022-08470-z.pdf',
  'chen2024-shanghai-hydroponic-vegetables': P + 'Root-vegetable purées/Occurrence Root-vegetable purées heavy metals/10-3390-foods13081151.pdf',
  'joseph2025-gobbiya-dam-vegetable-metals': P + 'Root-vegetable purées/Occurrence Root-vegetable purées heavy metals/10-37933-jete-7-4-2025-2568.pdf',
  'li2017-mercury-coal-power-plants-vegetables-grains': R + 'Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Mercury Pollution in Vegetables, Grains and Soils from Areas Surrounding Coal-Fired Power Plants.pdf',
  'mohod2015-spinach-tomato-metals': R + 'manual-fetch/seasonal-geographic-variance/ingested/gap-spinach-cd_2015_10-15680-ijirset-2015-0405019.pdf',
  'salhotra2017-vegetables-fruits-heavy-metals': R + 'manual-fetch/seasonal-geographic-variance/ingested/gap-spinach-pb_2017_10-9790-5736-100502110113.pdf',
  'wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo': R + 'manual-fetch/seasonal-geographic-variance/ingested/auto-leafy-vegetables-other-pb-product_2024_10-62051-10-62051-ijnres-v2n1-21.pdf',
  'osuolale2025-leafy-vegetables-ondo-trace-elements': R + 'manual-fetch/seasonal-geographic-variance/ingested/ing-vegetables-mixed-ni_2025_10-51584-ijrias-2025-10100000203.pdf',
  'saleem2025-nd-vegetables-hra': R + 'Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables.pdf',
  'kangre2024-canned-tomato-pb-sn-ghana': R + 'Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Heavy metal migration, exposure, and health risk through canned tomato mix under different marketing.pdf',
  'shavali-gilani2025-canned-tomato-olive-pickle-iran': R + 'Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers.pdf',
};
const access = {};
for (const item of universe.items.filter(i => i.kind === 'source')) {
  const text = fs.readFileSync(path.join(root, item.path), 'utf8');
  if (!TOMATO.test(text)) continue;
  const fm = matter(text).data;
  const declared = [fm.raw_path, fm.data_path].flat().filter(x => typeof x === 'string');
  let a = auditSourceAccess(declared, {repoRoot: root});
  const relocated = !a.resolved_path && RELOCATED[item.source_id];
  if (relocated) { const b = auditSourceAccess([relocated], {repoRoot: root}); b.resolutions = [...a.resolutions, ...b.resolutions]; a = b; }
  const rec = {source_id: item.source_id, record: item.path, declared, resolved_path: a.resolved_path, root_used: a.root_used, sha256: a.sha256 ?? null, relocated: relocated || null, attempts: a.resolutions.flatMap(r => r.attempts.map(x => ({path: x.path, root: x.root_used, outcome: x.outcome})))};
  const out = path.join(audit, 'primary', `${item.source_id}.txt`);
  if (a.resolved_path && !fs.existsSync(out)) {
    const ext = path.extname(a.resolved_path).toLowerCase();
    try {
      if (ext === '.pdf') execFileSync('pdftotext', ['-layout', a.resolved_path, out]);
      else if (['.md', '.txt', '.csv', '.html', '.htm', '.json'].includes(ext)) fs.copyFileSync(a.resolved_path, out);
      else rec.text_note = `unsupported extension ${ext}`;
    } catch (e) { rec.text_note = `text extraction failed: ${e.message.slice(0, 120)}`; }
  }
  if (fs.existsSync(out)) { rec.text_copy = path.relative(root, out); rec.text_bytes = fs.statSync(out).size; rec.text_sha256 = crypto.createHash('sha256').update(fs.readFileSync(out)).digest('hex'); }
  access[item.source_id] = rec;
}
fs.writeFileSync(path.join(audit, 'primary-access.json'), JSON.stringify(access, null, 1) + '\n');
const v = Object.values(access);
console.log(v.length, 'tomato-naming records;', v.filter(r => r.text_copy).length, 'with text;', v.filter(r => !r.resolved_path).map(r => r.source_id).join(', '));
