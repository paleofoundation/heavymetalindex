// One command for a release of any set of pages: stage, build with gates, overlay onto the
// frozen live public/, and package. It stops at the first failing step and never deploys.
//
//   node tools/engine/release/release.mjs --from <prev release dir> --pages ingredients/a,products/b --out <dir> [--shared a,b]
//
// Set HMI_BUILD_DATE (and HMI_RELEASE_ID) once the determinism patches in
// data/evidence/engine/release-shared-requests.json are applied.
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {args} from './lib.mjs';

const here = path.dirname(fileURLToPath(import.meta.url)), a = args();
if (!a.from || !a.pages || !a.out) throw Error('Usage: release.mjs --from <prev release dir> --pages ingredients/a,products/b --out <dir> [--shared a,b] [--source auto|engine|legacy]');
const env = {...process.env, HMI_RELEASE_ID: process.env.HMI_RELEASE_ID ?? path.basename(path.resolve(a.out))};
const steps = [
  ['stage.mjs', '--from', a.from, '--pages', a.pages, '--out', a.out, ...(a.shared ? ['--shared', a.shared] : []), ...(a.source ? ['--source', a.source] : [])],
  ['build.mjs', a.out], ['overlay.mjs', a.out], ['package.mjs', a.out]];
for (const [script, ...rest] of steps) {
  console.log(`\n== ${script}`);
  const r = spawnSync(process.execPath, [path.join(here, script), ...rest], {stdio: 'inherit', env});
  if (r.status !== 0) { console.error(`\n${script} failed (exit ${r.status}); release stopped. Reports: data/evidence/engine/releases/${path.basename(path.resolve(a.out))}/`); process.exit(r.status ?? 1); }
}
