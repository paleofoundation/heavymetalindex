// Shared helpers for the one-command release (source-first engine, part E).
// The working folder (where these tools live) is the source of new page content;
// a release folder is an isolated copy of the previous release plus the staged pages.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync, spawnSync, spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

export const workRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
export const sha = buf => crypto.createHash('sha256').update(buf).digest('hex');
export const shaFile = file => sha(fs.readFileSync(file));
export const exists = file => fs.existsSync(file);
export const readJSON = file => JSON.parse(fs.readFileSync(file, 'utf8'));
export const writeJSON = (file, value) => { fs.mkdirSync(path.dirname(file), {recursive: true}); fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n'); };

export function args(argv = process.argv.slice(2)) {
  const out = {_: []};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) { const [k, v] = a.slice(2).split('='); out[k] = v ?? (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true); }
    else out._.push(a);
  }
  return out;
}

export function copyFile(from, to) { fs.mkdirSync(path.dirname(to), {recursive: true}); fs.copyFileSync(from, to); }
// rsync keeps behaviour identical to the hand-run release script (deletes stale files in owned folders).
export function rsync(from, to, {del = true, exclude = []} = {}) {
  fs.mkdirSync(to, {recursive: true});
  // The working folder lives in iCloud-synced ~/Documents, which leaves conflict copies named
  // "<name> 2.<ext>". Many are evicted (dataless), and reading one blocks forever, so a copy
  // never touches them. They are stale duplicates and never ship.
  execFileSync('rsync', ['-a', ...(del ? ['--delete', '--delete-excluded'] : []), '--exclude', '* [0-9].*', '--exclude', '* [0-9]', ...exclude.flatMap(e => ['--exclude', e]), from.replace(/\/?$/, '/'), to.replace(/\/?$/, '/')]);
}
export function walk(dir, base = dir, out = []) {
  if (!exists(dir)) return out;
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, base, out); else if (e.isFile()) out.push(path.relative(base, f).split(path.sep).join('/'));
  }
  return out;
}
export function run(cmd, argv, {cwd, env = {}, log} = {}) {
  const started = Date.now();
  const r = spawnSync(cmd, argv, {cwd, env: {...process.env, ...env}, encoding: 'utf8', maxBuffer: 1 << 30});
  const output = (r.stdout ?? '') + (r.stderr ?? '');
  if (log) fs.appendFileSync(log, `\n$ ${cmd} ${argv.join(' ')}\n${output}\n[exit ${r.status}]\n`);
  const result = {status: r.status, seconds: Math.round((Date.now() - started) / 1000), tail: output.trim().split('\n').slice(-8).join('\n')};
  Object.defineProperty(result, 'output', {value: output, enumerable: false});
  return result;
}
// Asynchronous run for worker pools: same result shape as run(); the log block is appended
// in one write when the process ends, so concurrent jobs never interleave in the log.
export function runAsync(cmd, argv, {cwd, env = {}, log} = {}) {
  const started = Date.now();
  return new Promise(resolve => {
    const child = spawn(cmd, argv, {cwd, env: {...process.env, ...env}});
    const chunks = [];
    child.stdout.on('data', c => chunks.push(c)); child.stderr.on('data', c => chunks.push(c));
    const done = status => {
      const output = Buffer.concat(chunks).toString('utf8');
      if (log) fs.appendFileSync(log, `\n$ ${cmd} ${argv.join(' ')}\n${output}\n[exit ${status}]\n`);
      const result = {status, seconds: Math.round((Date.now() - started) / 1000), tail: output.trim().split('\n').slice(-8).join('\n')};
      Object.defineProperty(result, 'output', {value: output, enumerable: false});
      resolve(result);
    };
    child.on('error', e => { chunks.push(Buffer.from(String(e))); done(null); });
    child.on('close', code => done(code));
  });
}
// Run tasks with at most `limit` in flight; results keep the input order.
export async function pool(items, limit, task) {
  const out = new Array(items.length); let next = 0;
  const worker = async () => { while (next < items.length) { const i = next++; out[i] = await task(items[i], i); } };
  await Promise.all(Array.from({length: Math.max(1, Math.min(limit, items.length))}, worker));
  return out;
}
export const releaseName = dir => path.basename(path.resolve(dir));
export const receiptDir = (root, dir) => path.join(root, 'data/evidence/engine/releases', releaseName(dir));

// Where a page's candidate and per-page evidence live in the working folder.
// Engine pages (part C) win over the legacy per-ingredient builds.
// Ledger ownership (coordinator decision, 23 Oct 2026): a page with a reviewed build keeps that
// build and its ledger and is never shipped from the engine. source: 'auto' (reviewed build if one
// exists, otherwise the engine output when its gates.json passed), 'engine' (engine output; refused
// for a reviewed page) or 'legacy' (reviewed build required).
export function reviewedBuild(family, slug, root = workRoot) {
  if (family !== 'ingredients') return null;
  return ['most-studied-rollout-2026-10-22', 'ingredient-rollout-2026-10-22'].map(c => `data/evidence/contracts/${c}/${slug}`).find(d => exists(path.join(root, d, 'candidate', `${slug}.md`))) ?? null;
}
export function locatePage(page, root = workRoot, source = 'auto') {
  const [family, slug] = page.split('/');
  if (!family || !slug || !/^[a-z0-9-]+$/.test(slug)) throw Error(`Invalid page: ${page}`);
  const engineFamily = family.replace(/s$/, ''); // the engine writes data/evidence/engine/ingredient|product/<slug>/
  const engineDir = `data/evidence/engine/${engineFamily}/${slug}`, engineCandidate = `${engineDir}/candidate/${slug}.md`;
  const gatesFile = path.join(root, engineDir, 'gates.json');
  const enginePassed = exists(gatesFile) && readJSON(gatesFile).status === 'pass';
  const reviewed = reviewedBuild(family, slug, root);
  if (source === 'engine' && reviewed) throw Error(`${page} has a reviewed build (${reviewed}); it keeps that build and is never shipped from the engine`);
  if (!reviewed && exists(path.join(root, engineCandidate)) && (source === 'engine' || (source === 'auto' && enginePassed)))
    return {page, family, slug, kind: 'engine', candidate: engineCandidate, dirs: [engineDir], engine_gates_passed: enginePassed,
      // The page builder's gate takes only the HTML path; the release adapter also takes the page.
      gate: exists(path.join(root, 'tools/engine/gates/fullness.mjs')) ? {script: 'tools/engine/gates/fullness.mjs', args: []} : {script: 'tools/engine/release/engine-gate.mjs', args: [`${engineFamily}/${slug}`]}};
  if (source === 'engine') throw Error(`No engine candidate for ${page} (${engineCandidate})`);
  if (family === 'ingredients') {
    const audits = ['most-studied-rollout-2026-10-22', 'ingredient-rollout-2026-10-22'].map(c => `data/evidence/contracts/${c}/${slug}`).filter(d => exists(path.join(root, d, 'candidate', `${slug}.md`)));
    if (audits.length) {
      const audit = audits[0];
      return {page, family, slug, kind: 'legacy', candidate: `${audit}/candidate/${slug}.md`, audit, code: `tools/contracts/ingredients/${slug}`, ledger: `data/evidence/contracts/${slug}`,
        dirs: [audit, `tools/contracts/ingredients/${slug}`, `data/evidence/contracts/${slug}`], gate: {script: `tools/contracts/ingredients/${slug}/fullness.mjs`, args: []}};
    }
  }
  throw Error(`No candidate found for ${page} (engine data/evidence/engine/${family}/${slug}/ or legacy ingredient audit dir)`);
}

// Parsed properly: long values are folded by YAML ("key: >-" on one line, the value on the next).
export function frontmatterField(text, key) { const v = matter(text).data[key]; return typeof v === 'string' ? v.trim() : undefined; }
export function wikiLinks(text) { return [...new Set([...text.matchAll(/\[\[([a-z0-9][^\]|#\\]*)/gi)].map(m => m[1].trim().replace(/\.md$/, '')))]; }
export function wikiTarget(root, target) {
  for (const f of [`wiki/${target}.md`, `wiki/${target}/index.md`]) if (exists(path.join(root, f))) return f;
  return null;
}
// Files that belong to a page's HTML: the page and its on-demand explorer sidecars.
export const sidecarPattern = page => new RegExp(`^${page.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\.html|\\.[a-z0-9-]+\\.(?:\\d+|view)\\.json)$`);
export const KEEP_LIVE = ['index.html', 'metals/cadmium', 'products/infant-formula-powder-non-soy'];
export const keepLive = file => file === 'index.html' || KEEP_LIVE.slice(1).some(p => sidecarPattern(p).test(file));
