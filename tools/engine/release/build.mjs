// Build a staged release folder without the prebuild:
//
//   node tools/engine/release/build.mjs <dir> [--gates-only]
//   (--gates-only reruns the per-page gates and the site fullness lint on the existing public-fullbuild/)
//
// The frozen live public/ is set aside as public-live while the full Quartz build and
// postbuild run into public/ (the postbuild tools are hard-wired to public/). Each
// shipping page's own fullness gate runs on the final post-processed HTML (HMI_RELEASE_JOBS at a time,
// default 6), rewriting
// its ledger and scorecard inside the release folder, before the site-wide fullness
// lint. The build output ends in public-fullbuild/ and the frozen live copy returns to
// public/. A gate summary is written to data/evidence/engine/releases/<name>/build-report.json.
import fs from 'node:fs';
import path from 'node:path';
import {workRoot, args, exists, readJSON, writeJSON, run, runAsync, pool, releaseName, receiptDir} from './lib.mjs';
import {gateReport, releaseStatus} from './release-gates.mjs';

const A = args(), D = path.resolve(A._[0] ?? ''), gatesOnly = Boolean(A['gates-only']);
const r = f => path.join(D, f);
const stage = readJSON(r(`data/evidence/engine/releases/${releaseName(D)}/stage-report.json`));
const log = r('release-build.log');
fs.writeFileSync(log, '');
const env = {NODE_OPTIONS: '--max-old-space-size=24000'};
const report = {release: releaseName(D), started_at: new Date().toISOString(), steps: [], pages: [], gates: {}};
const step = (name, cmd, argv) => { const x = run(cmd, argv, {cwd: D, env, log}); report.steps.push({name, status: x.status, seconds: x.seconds, tail: x.tail}); console.log(`${x.status === 0 ? 'ok  ' : 'FAIL'} ${name} (${x.seconds}s)`); return x; };

if (exists(r('public-live'))) throw Error('public-live exists: an earlier build was interrupted; restore it to public/ first');
fs.renameSync(r('public'), r('public-live'));
try {
  if (gatesOnly) {
    // Re-gate an existing build: its final HTML returns to public/ for the gate tools.
    if (!exists(r('public-fullbuild'))) throw Error('--gates-only needs an existing public-fullbuild/');
    fs.renameSync(r('public-fullbuild'), r('public'));
  } else {
    fs.rmSync(r('public-fullbuild'), {recursive: true, force: true});
    const quartz = step('quartz build', process.execPath, ['quartz/bootstrap-cli.mjs', 'build', '-d', 'wiki', '-o', 'public']);
    if (quartz.status !== 0) throw Error('Quartz build failed; see release-build.log');
  }
  // Postbuild, step by step, holding the site-wide fullness lint until each page's own gate has run.
  const post = readJSON(r('package.json')).scripts.postbuild.split('&&').map(s => s.trim());
  const fullnessLint = post.findIndex(s => /lint:ingredient-fullness/.test(s));
  const runPost = s => step(`postbuild: ${s}`, '/bin/sh', ['-c', s]);
  if (!gatesOnly) post.slice(0, fullnessLint < 0 ? post.length : fullnessLint).forEach(runPost);
  // Per-page gates in a bounded worker pool (HMI_RELEASE_JOBS, default 6). Each gate writes only
  // its own page's ledger and scorecard; the one shared engine file (controls/library.json, built
  // lazily) is created by running the first engine page alone before the pool starts.
  const jobs = Math.max(1, Number.parseInt(process.env.HMI_RELEASE_JOBS ?? '6', 10) || 6);
  const gateOne = async p => {
    const html = `public/${p.page}.html`;
    if (!exists(r(p.gate.script))) return {status: null, seconds: 0, tail: `gate script missing: ${p.gate.script}`};
    const x = await runAsync(process.execPath, [p.gate.script, ...p.gate.args, html], {cwd: D, env, log});
    console.log(`${x.status === 0 ? 'ok  ' : 'FAIL'} fullness ${p.page} (${x.seconds}s)`);
    return x;
  };
  const firstEngine = stage.pages.findIndex(p => p.kind === 'engine');
  const results = new Array(stage.pages.length);
  if (firstEngine >= 0) results[firstEngine] = await gateOne(stage.pages[firstEngine]);
  const rest = stage.pages.map((p, i) => i).filter(i => i !== firstEngine);
  const pooled = await pool(rest, jobs, i => gateOne(stage.pages[i]));
  rest.forEach((i, k) => { results[i] = pooled[k]; });
  report.fullness_jobs = jobs;
  stage.pages.forEach((p, i) => {
    const gate = results[i];
    report.steps.push({name: `fullness ${p.page}`, status: gate.status, seconds: gate.seconds, tail: gate.tail});
    let gates = null; try { const o = gate.output ?? ''; gates = JSON.parse(o.slice(o.indexOf('{'), o.lastIndexOf('}') + 1)).gates; } catch {}
    report.pages.push({page: p.page, fullness: gate.status === 0 ? 'pass' : 'fail', gates: gates && Object.fromEntries(Object.entries(gates).map(([k, v]) => [k, v.status])), detail: gate.status === 0 ? undefined : gate.tail});
  });
  if (fullnessLint >= 0) post.slice(fullnessLint).forEach(runPost);
  // HMI-CROSS-INGREDIENT-1: every release runs the cross-ingredient lint, whatever its package.json carries.
  if (!post.some(s => /lint:cross-ingredient/.test(s))) runPost('node tools/engine/gates/cross-ingredient.mjs public');
  const status = re => report.steps.filter(s => re.test(s.name)).every(s => s.status === 0) ? 'pass' : 'fail';
  report.gates = gateReport({pages: report.pages, status, gatesOnly});
} finally {
  if (exists(r('public'))) fs.renameSync(r('public'), r('public-fullbuild'));
  fs.renameSync(r('public-live'), r('public'));
}
report.finished_at = new Date().toISOString();
report.status = releaseStatus(report.gates);
report.mode = gatesOnly ? 'gates-only' : 'full';
const reportName = gatesOnly ? 'gates-report.json' : 'build-report.json';
writeJSON(r(`data/evidence/engine/releases/${report.release}/${reportName}`), report);
writeJSON(path.join(receiptDir(workRoot, D), reportName), report);
console.log(JSON.stringify({status: report.status, gates: report.gates, pages: report.pages.map(p => `${p.page}: ${p.fullness}`)}, null, 1));
if (report.status !== 'pass') process.exitCode = 1;
