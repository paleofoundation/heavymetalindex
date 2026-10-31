// Mirror a passing engine ingredient page's ledger and scorecard to where the release
// lint reads them (data/evidence/contracts/<slug>/). A reviewed build there is never
// overwritten: only a directory that is absent, or that the engine itself wrote, is used.
import fs from 'node:fs';
import path from 'node:path';
import { root, outputs, BUILD_DATE } from '../page/common.mjs';

const MARKER = 'engine-mirror.json';
export function mirrorTarget(page) { return `data/evidence/contracts/${page.slug}`; }
export function isReviewed(page) {
  const dir = path.join(root, mirrorTarget(page));
  return fs.existsSync(dir) && !fs.existsSync(path.join(dir, MARKER)) && fs.readdirSync(dir).length > 0;
}
export function mirrorPage(page, status) {
  if (page.family !== 'ingredient') return { mirrored: false, reason: 'The fullness lint covers ingredient pages only' };
  if (status !== 'pass') return { mirrored: false, reason: 'Only passing pages are mirrored' };
  if (isReviewed(page)) return { mirrored: false, reason: 'A reviewed build owns this directory; it is never overwritten' };
  const o = outputs(page), dir = path.join(root, mirrorTarget(page));
  fs.mkdirSync(dir, { recursive: true });
  for (const f of [o.ledger, o.scorecard]) fs.copyFileSync(path.join(root, f), path.join(dir, path.basename(f)));
  fs.writeFileSync(path.join(dir, MARKER), JSON.stringify({ written_by: 'tools/engine/gates/mirror.mjs', from: o.dir, build_date: BUILD_DATE, files: ['evidence-ledger.json', 'fullness-scorecard.json'], note: 'Reference artifacts named in the ledger stay under the engine directory.' }, null, 2) + '\n');
  return { mirrored: true, to: mirrorTarget(page) };
}
