// Gates for engine pages. Ingredient pages run the shared fullness and presentation
// audits unchanged. Product mode (part D) wraps the same code: product discovery
// with product aliases, product slugs as the ledger subject, and the presentation
// check applied to the product page through the canonical marker.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { parse } from 'parse5';
import { loadIndependentCorpus, recomputeUniverse } from '../../ingredient-source-universe.mjs';
import { inspectFullnessHTML, buildFullnessScorecard, evaluateIngredientFullness } from '../../audit-ingredient-fullness.mjs';
import { inspectIngredientPresentation } from '../../audit-ingredient-presentation.mjs';
import { root, FAMILIES } from '../page/common.mjs';

// ---------------------------------------------------------------- discovery
function productAliases(slug) {
  const f = path.join(root, `wiki/products/${slug}.md`);
  if (!fs.existsSync(f)) return [];
  const fm = matter(fs.readFileSync(f, 'utf8')).data;
  return [slug, fm.title, fm.label, fm.product, ...(Array.isArray(fm.aliases) ? fm.aliases : [])].filter(x => typeof x === 'string' && x.trim());
}
// One discovery scan serves every page in a run.
export function loadCorpus(pages) {
  // The findings store is written concurrently; a file listed then replaced mid-scan is retried.
  let corpus;
  for (let attempt = 0; ; attempt++) {
    try { corpus = loadIndependentCorpus(root, { ingredients: [...new Set(pages.map(p => p.slug))] }); break; }
    catch (e) { if (e.code !== 'ENOENT' || attempt >= 4) throw e; }
  }
  for (const p of pages.filter(p => p.family === 'product')) corpus.aliases[p.slug] = [...new Set([...(corpus.aliases[p.slug] ?? []), ...productAliases(p.slug)])];
  return corpus;
}
export const pageUniverse = (corpus, page) => recomputeUniverse(corpus, page.slug);
// Universes for many pages. A scan whose output exceeds the largest string is split in
// halves until it fits; a single page that still cannot be scanned is reported.
export function pageUniverses(pages) {
  const out = new Map(), failed = new Map();
  const run = group => {
    try { const corpus = loadCorpus(group); for (const p of group) out.set(`${p.family}/${p.slug}`, pageUniverse(corpus, p)); }
    catch (e) {
      if (!/longer than|ERR_STRING_TOO_LONG|Invalid string length/.test(e.message + e.code)) throw e;
      if (group.length === 1) failed.set(`${group[0].family}/${group[0].slug}`, 'The discovery scan output for this page exceeds the largest string the scanner can return');
      else { run(group.slice(0, group.length >> 1)); run(group.slice(group.length >> 1)); }
    }
  };
  run(pages);
  return { universes: out, failed };
}

// ---------------------------------------------------------------- presentation
const MARKER = 'data-ingredient-presentation="rice-shared-v1"';
export function inspectPresentation(page, html) {
  if (page.family === 'ingredient') return inspectIngredientPresentation(html);
  // Product pages carry the same shared components; the ingredient checks apply as written.
  const marked = html.includes(MARKER) ? html : html.replace(/<body\b/, `<body ${MARKER}`);
  const report = inspectIngredientPresentation(marked);
  return { ...report, family: 'product', errors: report.errors.map(e => e.replace(/New ingredient output/, 'New product output')) };
}

// Hero preservation for one page, as tools/audit-hero-preservation.mjs checks the full site.
const heroManifest = JSON.parse(fs.readFileSync(path.join(root, 'data/design/page-hero-images.json'), 'utf8'));
export function inspectHero(page, html) {
  const slug = `${FAMILIES[page.family]}/${page.slug}`, model = heroManifest.pages[slug];
  if (!model) return { checked: false, errors: [`No preserved hero is registered for ${slug}`] };
  let hero, found;
  const walk = (n, fn) => { fn(n); for (const c of n.childNodes ?? []) walk(c, fn); };
  walk(parse(html), n => { if (n.attrs?.some(a => a.name === 'class' && a.value.split(' ').includes('hero-band'))) hero = n; });
  if (!hero) return { checked: true, errors: ['Preserved page hero missing'] };
  walk(hero, n => { const a = Object.fromEntries((n.attrs ?? []).map(a => [a.name, a.value])); if (a.class?.split(' ').includes('hero-background')) found = a; });
  return { checked: true, errors: !found || !found.src?.endsWith(model.hero_image.replace(/^\//, '')) ? ['Hero image regression'] : typeof found.alt !== 'string' ? ['Hero image alt missing'] : [] };
}

// ---------------------------------------------------------------- fullness
export function inspectPage(page, html) {
  const inspected = inspectFullnessHTML(html);
  return { ...inspected, presentation: inspectPresentation(page, html) };
}
export const scorecardFor = (page, universe, ledger, inspected) => buildFullnessScorecard(page.slug, universe, ledger, inspected);
export function runGates({ page, universe, ledger, scorecard, inspected }) {
  const result = evaluateIngredientFullness({ ingredient: page.slug, universe, ledger, page: inspected, scorecard, repo: root });
  return { ...result, family: page.family };
}
export function summarize(result, presentation, hero) {
  const gates = Object.fromEntries(Object.entries(result.gates).map(([k, v]) => [k, { status: v.status, errors: v.errors.length, first: v.errors.slice(0, 5) }]));
  const pass = result.status === 'pass' && !presentation.errors.length && !hero.errors.length;
  return { status: pass ? 'pass' : 'fail', gates, presentation: { errors: presentation.errors, meaningful_comparator_rows: presentation.meaningful_comparator_rows, mitigation_rows: presentation.mitigation_rows }, hero };
}

// ---------------------------------------------------------------- discovery guard
// Engine outputs live under data/evidence, which the independent discovery scan reads.
// Nothing written here may look like a source × food index row (same rule as the scan).
const sourceKeys = ['source_id', 'source_cite_key', 'cite_key', 'source'];
const foodKeys = ['ingredient_slug', 'ingredient', 'ingredient_label', 'food', 'food_name', 'food_description', 'tds_food_description', 'material', 'commodity', 'matrix', 'target_page', 'ingredient_page', 'source_product_label', 'product_label', 'product_slug', 'row_label', 'row_slug', 'sample_description', 'simplified_product_label', 'baby_food_name', 'food_category', 'product_or_species', 'FoodName', 'LocalFoodName', 'local_food_name'];
const indexRows = j => Array.isArray(j) ? j.flatMap(indexRows) : !j || typeof j !== 'object' ? [] : sourceKeys.some(k => typeof j[k] === 'string') && foodKeys.some(k => typeof j[k] === 'string') ? [1] : Object.values(j).filter(v => v && typeof v === 'object').flatMap(indexRows);
export function discoverableFiles(dir) {
  const out = [], abs = path.join(root, dir);
  if (!fs.existsSync(abs)) return out;
  const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = path.join(d, e.name); if (e.name === 'contracts' || e.isSymbolicLink() || / \d+(\.[^/]*)?$/.test(e.name)) continue; if (e.isDirectory()) walk(f); else if (/\.(csv|json|jsonl)$/.test(e.name)) out.push(f); } };
  walk(abs);
  return out.filter(f => {
    // Ledgers are engine records of known shape; the largest exceed a readable string.
    if (path.basename(f) === 'evidence-ledger.json' || fs.statSync(f).size > 256e6) return false;
    const raw = fs.readFileSync(f, 'utf8');
    if (f.endsWith('.csv')) { const h = raw.slice(0, raw.indexOf('\n')).split(','); return sourceKeys.some(k => h.includes(k)) && foodKeys.some(k => h.includes(k)); }
    if (!sourceKeys.some(k => raw.includes(`"${k}"`)) || !foodKeys.some(k => raw.includes(`"${k}"`))) return false;
    try { return f.endsWith('.jsonl') ? raw.trim().split('\n').some(l => indexRows(JSON.parse(l)).length) : indexRows(JSON.parse(raw)).length > 0; } catch { return false; }
  }).map(f => path.relative(root, f));
}
