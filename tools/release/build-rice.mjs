// Scoped production build: preserve the live corpus while adopting Rice.
// Global content writers belong to the separate corpus-refresh workflow.
import { spawnSync } from 'node:child_process';
import { verifyRendered } from '../contracts/pilot/verify-rendered.mjs';
const run = (args) => {
  const result = spawnSync(process.execPath, args, {stdio:'inherit'});
  if (result.status !== 0) process.exit(result.status || 1);
};
for (const script of [
  'tools/contracts/build-pilot.mjs', 'tools/contracts/validate.mjs',
  'tools/scope/check-scope-consistency.mjs',
  'tools/evidence/check-fda-tds-generated.mjs',
  'tools/audit-homepage-layout.mjs', 'tools/audit-public-batch-prose.mjs',
  'tools/audit-link-integrity.mjs', 'tools/audit-contamination-profile-integrity.mjs',
  'tools/evidence/audit-source-contract.mjs',
  'tools/autonomy/firewall-no-threshold-lint.mjs', 'tools/audit-component-redundancy.mjs',
]) {
  const flags = script.endsWith('build-pilot.mjs') ? ['--check'] : script.endsWith('check-fda-tds-generated.mjs') ? ['--check-generated'] : [];
  run([script,...flags]);
}
for (const script of [
  'tools/build-category-pages.mjs', 'tools/build-ingredient-index.mjs',
  'tools/build-metal-evidence-pages.mjs',
  'tools/sources/build-source-index.mjs', 'tools/build-contamination-dataset.mjs',
  'tools/build-open-data.mjs', 'tools/build-evidence-packet-index.mjs',
]) run([script]);
run(['--import','tsx','tools/build-alias-redirects.ts']);
run(['quartz/bootstrap-cli.mjs','build','-d','wiki','-o','public','--concurrency','2']);
const post = spawnSync('npm',['run','postbuild'],{stdio:'inherit'});
if(post.status!==0)process.exit(post.status||1);
console.log(JSON.stringify(verifyRendered('public',{families:['ingredient']}),null,2));
