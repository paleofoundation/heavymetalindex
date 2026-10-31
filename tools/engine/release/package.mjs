// Package a frozen release for deployment without deploying it:
//
//   node tools/engine/release/package.mjs <dir>
//
// Runs only `vercel build --prod --local-config vercel.frozen-release.json` (a local build
// whose buildCommand is the frozen verifier), confirms the prebuilt static output equals the
// manifest, and prints the deploy command. Deploying stays behind Karen's go-ahead per batch.
import fs from 'node:fs';
import path from 'node:path';
import {workRoot, args, exists, readJSON, writeJSON, walk, shaFile, run, releaseName, receiptDir} from './lib.mjs';

const D = path.resolve(args()._[0] ?? '');
const r = f => path.join(D, f), name = releaseName(D);
const frozen = readJSON(r('vercel.frozen-release.json'));
const manifestRel = frozen.buildCommand.split(' ').pop();
if (!exists(r('.vercel/project.json'))) throw Error('Release folder is not linked to the Vercel project (.vercel/project.json missing)');
fs.rmSync(r('.vercel/output'), {recursive: true, force: true});
const built = run('vercel', ['build', '--prod', '--local-config', 'vercel.frozen-release.json'], {cwd: D, log: r('release-package.log')});
if (built.status !== 0) { console.error(built.tail); throw Error('vercel build failed; see release-package.log'); }
// The static output must be exactly the frozen public/ tree.
const manifest = readJSON(r(manifestRel)), out = r('.vercel/output/static'), drift = [];
for (const [f, h] of Object.entries(manifest.files)) if (!exists(path.join(out, f)) || shaFile(path.join(out, f)) !== h) drift.push(f);
const extra = walk(out).filter(f => !manifest.files[f]);
const report = {release: name, vercel_build: {status: built.status, seconds: built.seconds}, static_files: walk(out).length, manifest_files: Object.keys(manifest.files).length, drift, extra,
  deploy_command: `cd ${D} && vercel deploy --prebuilt --prod`};
writeJSON(r(`data/evidence/engine/releases/${name}/package-report.json`), report);
writeJSON(path.join(receiptDir(workRoot, D), 'package-report.json'), report);
console.log(JSON.stringify({...report, drift: drift.length, extra: extra.length}, null, 1));
if (drift.length || extra.length) { process.exitCode = 1; console.error('Prebuilt output differs from the frozen manifest; do not deploy.'); }
else console.log(`\nReady. After Karen's go-ahead, deploy with:\n  ${report.deploy_command}\nthen verify:\n  node tools/engine/release/verify-live.mjs ${D}`);
