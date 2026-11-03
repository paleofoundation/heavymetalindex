// Fails when an ingredient, product or metal page has no real hero image:
// no hero_image, a section placeholder (section-*.webp), a non-allowlisted path or a missing asset.
// Retired/redirect/draft pages are skipped.
//   node tools/lint/hero-image-placeholders.mjs [--changed <base-ref>] [--all] [--json]
// Default (no flags): --all. With --changed, only pages added or modified since <base-ref> fail the run.
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root = process.cwd();
const argv = process.argv.slice(2);
const json = argv.includes('--json');
const ci = argv.indexOf('--changed');
const FAMILIES = ['ingredients', 'products', 'metals'];
// Rice's hero is supplied by its locked approved chrome (approvedRiceChrome), not frontmatter.
const LOCKED = new Set(['ingredients/rice']);
const RE = /^\/static\/heroes\/[a-z0-9-]+\.webp$/;

// Dependency-free: only top-level scalar keys are needed.
function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split(/\r?\n/)) {
    const k = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (!k) continue;
    let v = k[2].trim();
    if (/^(['"]).*\1$/.test(v)) v = v.slice(1, -1);
    out[k[1]] = v === 'true' ? true : v === 'false' ? false : v === '' || v === 'null' ? undefined : v;
  }
  return out;
}
function walk(d) {
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d, {withFileTypes: true}).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.md') ? [path.join(d, e.name)] : []);
}
let files = FAMILIES.flatMap(f => walk(path.join(root, 'wiki', f))).map(f => path.relative(root, f));
if (ci >= 0) {
  const base = argv[ci + 1];
  const changed = execFileSync('git', ['diff', '--name-only', '--diff-filter=AMR', `${base}...HEAD`], {encoding: 'utf8'}).split('\n');
  const set = new Set(changed);
  files = files.filter(f => set.has(f));
}
const problems = [];
for (const rel of files) {
  const fm = frontmatter(fs.readFileSync(rel, 'utf8'));
  if (fm.retired === true || fm.draft === true || fm.redirect_target) continue;
  const slug = rel.replace(/^wiki\//, '').replace(/\.md$/, '');
  if (LOCKED.has(slug)) continue;
  const img = fm.hero_image;
  let status = 'real';
  if (typeof img !== 'string' || !img) status = 'missing';
  else if (/\/section-[a-z-]+\.webp$/.test(img)) status = 'placeholder-section-default';
  else if (!RE.test(img)) status = 'placeholder-invalid-path';
  else if (!fs.existsSync(path.join(root, 'quartz', img))) status = 'placeholder-missing-asset';
  else if (typeof fm.hero_image_alt !== 'string' || !fm.hero_image_alt.trim()) status = 'missing-alt';
  if (status !== 'real') problems.push({slug, family: slug.split('/')[0], status, hero_image: img ?? null});
}
if (json) console.log(JSON.stringify(problems, null, 2));
else {
  for (const p of problems) console.error(`${p.status}\t${p.slug}\t${p.hero_image ?? ''}`);
  console.log(`hero-image lint: ${files.length} pages checked, ${problems.length} without a real hero image`);
}
process.exit(problems.length && !json ? 1 : 0);
