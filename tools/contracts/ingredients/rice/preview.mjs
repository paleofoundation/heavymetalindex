// Isolated Rice preview from the candidate; never writes wiki/. Stages the candidate
// as ingredients/rice, every source record it cites or tabulates, and the direct
// context destinations, then builds with the shared Quartz pipeline.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';
import { buildIngredient, root, auditDir, candidatePath, synthesisPath } from './build.mjs';
import { pageSourceIds } from '../../pilot/compiler.mjs';
import { collectPreviewContext, copyPreviewAssets, verifyPreviewContext } from '../../pilot/preview-context.mjs';

buildIngredient({ check: true });
const out = path.join(root, auditDir, 'preview-full');
const staging = fs.mkdtempSync(path.join(os.tmpdir(), 'hmi-rice-full-'));
const s = JSON.parse(fs.readFileSync(path.join(root, synthesisPath), 'utf8'));
const candidate = fs.readFileSync(path.join(root, candidatePath), 'utf8');
try {
  const page = 'wiki/ingredients/rice.md';
  const tabled = [...new Set([...candidate.matchAll(/data-source="([^"]+)"/g)].map(m => m[1]))];
  const linked = [...new Set([...candidate.matchAll(/\]\(\.\.\/sources\/([^)#"\s]+)\)|\[\[sources\/([^|\]#\\]+)/g)].map(m => m[1] || m[2]))];
  const sources = [...new Set([...pageSourceIds(s, root), ...tabled, ...linked])].map(id => `wiki/sources/${id}.md`).filter(f => fs.existsSync(path.join(root, f)));
  const coverage = collectPreviewContext({ base: root, pages: [page], syntheses: [s], sources, extraTargets: ['authors/karen-pendergrass', 'sources/index'] });
  const failures = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/contracts/public-content-boundary-2026-10-22/presentation-audit.json'))).failures;
  const withheld = new Set(failures.map(x => x.match(/\((wiki\/[^)]+)\)/)?.[1]).filter(Boolean));
  const files = [...new Set([page, ...sources, ...coverage.context_pages.map(x => x.path)])].filter(f => f !== 'wiki/sources/index.md');
  coverage.withheld_context_pages = [];
  for (const file of files) {
    const dest = path.join(staging, file.replace(/^wiki\//, ''));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (file === page) { fs.writeFileSync(dest, candidate); continue; }
    if (withheld.has(file)) {
      const original = matter(fs.readFileSync(path.join(root, file), 'utf8'));
      fs.writeFileSync(dest, matter.stringify('This supporting page is unavailable in this local article preview.\n', { title: original.data.title ?? 'Supporting page', type: 'preview-context' }));
      coverage.withheld_context_pages.push({ path: file, reason: 'Existing context has not cleared the public boundary; the coordinator owns its disposition.' });
    } else fs.copyFileSync(path.join(root, file), dest);
  }
  copyPreviewAssets({ base: root, staging, outerPreview: out, files: files.filter(x => x !== page && !withheld.has(x)), manifest: coverage });
  fs.writeFileSync(path.join(staging, 'index.md'), '---\ntitle: Rice review\n---\n# Rice review\n\n[[ingredients/rice|Rice candidate]]\n');
  execFileSync(process.execPath, [path.join(root, 'quartz/bootstrap-cli.mjs'), 'build', '-d', staging, '-o', out, '--concurrency', '1'], { cwd: root, stdio: 'inherit' });
  coverage.pilot_pages = [page];
  verifyPreviewContext(out, coverage);
  fs.writeFileSync(path.join(root, auditDir, 'preview-full-coverage.json'), JSON.stringify(coverage, null, 2) + '\n');
  console.log(out);
} finally { fs.rmSync(staging, { recursive: true, force: true }); }
