// Isolated Quartz preview of one or many engine candidates. Never writes wiki/.
// Stages each candidate at its own URL with every source it cites or tabulates and
// the direct context destinations, then builds with the shared pipeline.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { collectPreviewContext, copyPreviewAssets } from '../../contracts/pilot/preview-context.mjs';
import { buildSourceIndex } from '../../sources/build-source-index.mjs';
import { root, wikiPath, exists, FAMILIES } from './common.mjs';
import { discoverableFiles } from '../gates/index.mjs';
import { swapDir } from './ledger.mjs';

export function previewSources(c) {
  const ids = new Set([...c.occ.rows.map(r => r.source), ...[...c.candidate.matchAll(/\[\[sources\/([^|\]\\#]+)/g)].map(m => m[1]),
    ...c.evidence.controls.map(x => x.source_id).filter(Boolean)]);
  return [...ids].map(id => `wiki/sources/${id}.md`).filter(exists);
}

export function buildPreview(compiled, finalRel, { quiet = true } = {}) {
  // Each preview is built into a private folder and renamed into place.
  const outputRel = `${finalRel}.tmp-${process.pid}-${Date.now()}`;
  const output = path.join(root, outputRel);
  const stagingRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'hmi-engine-'));
  const staging = path.join(stagingRoot, 'wiki');
  try {
    const pages = compiled.map(c => wikiPath(c.page));
    const sources = [...new Set(compiled.flatMap(previewSources))];
    const coverage = collectPreviewContext({ base: root, pages, syntheses: compiled.map(c => c.synthesis), sources, extraTargets: ['authors/karen-pendergrass', 'sources/index'], maxContextPages: 80 * compiled.length });
    const files = [...new Set([...sources, ...coverage.context_pages.map(x => x.path)])].filter(f => f !== 'wiki/sources/index.md' && !pages.includes(f) && exists(f));
    for (const f of files) { const to = path.join(stagingRoot, f); fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(path.join(root, f), to); }
    // A metal page splits its table onto its generated evidence page (metalEvidence transformer).
    for (const f of files.filter(f => /^wiki\/metals\/[a-z0-9-]+\.md$/.test(f)).map(f => f.replace(/\.md$/, '/evidence.md')).filter(exists)) {
      const to = path.join(stagingRoot, f); fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(path.join(root, f), to);
    }
    for (const c of compiled) { const to = path.join(stagingRoot, wikiPath(c.page)); fs.mkdirSync(path.dirname(to), { recursive: true }); fs.writeFileSync(to, c.candidate); }
    const baseline = 'data/evidence/contracts/pilot-2026-10-17/baseline.json';
    if (exists(baseline)) { fs.mkdirSync(path.dirname(path.join(stagingRoot, baseline)), { recursive: true }); fs.copyFileSync(path.join(root, baseline), path.join(stagingRoot, baseline)); }
    buildSourceIndex({ base: stagingRoot });
    fs.rmSync(output, { recursive: true, force: true });
    copyPreviewAssets({ base: root, staging, outerPreview: output, files, manifest: coverage });
    fs.writeFileSync(path.join(staging, 'index.md'), `---\ntitle: Engine preview\n---\n# Engine preview\n\n${compiled.map(c => `[[${FAMILIES[c.page.family]}/${c.page.slug}|${c.synthesis.title}]]`).join(' · ')}\n`);
    try { execFileSync(process.execPath, [path.join(root, 'quartz/bootstrap-cli.mjs'), 'build', '-d', staging, '-o', output, '--concurrency', '1'], { cwd: root, stdio: quiet ? 'pipe' : 'inherit', maxBuffer: 1 << 30 }); }
    catch (e) { throw Error(`Quartz build failed: ${String(e.stderr ?? e.stdout ?? e.message).split('\n').filter(l => /error|Error|failed|Failed/.test(l)).slice(-3).join(' | ').slice(0, 400)}`); }
  } finally { fs.rmSync(stagingRoot, { recursive: true, force: true }); }
  // Site data downloads copied into the preview would read as source × food indexes to
  // the independent discovery scan; the preview does not need them.
  fs.rmSync(path.join(output, 'static/data'), { recursive: true, force: true });
  const leaks = discoverableFiles(outputRel);
  for (const f of leaks) fs.rmSync(path.join(root, f));
  swapDir(outputRel, finalRel);
  return { output: finalRel, removed_discoverable: leaks.map(f => f.replace(outputRel, finalRel)), html: Object.fromEntries(compiled.map(c => [`${c.page.family}/${c.page.slug}`, `${finalRel}/${FAMILIES[c.page.family]}/${c.page.slug}.html`])) };
}
