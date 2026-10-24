// Shared paths and small helpers for the generic page builder.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
export const BUILD_DATE = process.env.HMI_BUILD_DATE || '2026-10-22';
export const FAMILIES = { ingredient: 'ingredients', product: 'products' };
export const GEMS = 'who-gemsfood-heavy-metal-contaminants';
export const FDA = 'fda2022-tds-elements-fy2018-fy2020';

export const sha = b => crypto.createHash('sha256').update(b).digest('hex');
export const read = f => fs.readFileSync(path.isAbsolute(f) ? f : path.join(root, f), 'utf8');
export const json = f => JSON.parse(read(f));
export const exists = f => fs.existsSync(path.isAbsolute(f) ? f : path.join(root, f));
const shaCache = new Map();
export const shaFile = f => {
  const abs = path.isAbsolute(f) ? f : path.join(root, f);
  if (!shaCache.has(abs)) shaCache.set(abs, sha(fs.readFileSync(abs)));
  return shaCache.get(abs);
};
export function writeFile(rel, content) {
  const abs = path.join(root, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
  return rel;
}

export function parsePage(arg) {
  const m = String(arg ?? '').match(/^(ingredient|product)s?\/([a-z0-9][a-z0-9-]*)$/);
  if (!m) throw Error(`Expected <family>/<slug> with family ingredient or product, got ${arg}`);
  return { family: m[1], slug: m[2] };
}
export const wikiPath = ({ family, slug }) => `wiki/${FAMILIES[family]}/${slug}.md`;
export const engineDir = ({ family, slug }) => `data/evidence/engine/${family}/${slug}`;
export const outputs = page => {
  const d = engineDir(page);
  return {
    dir: d, candidate: `${d}/candidate/${page.slug}.md`, synthesis: `${d}/synthesis.json`, record: `${d}/question-record.json`,
    ledger: `${d}/evidence-ledger.json`, scorecard: `${d}/fullness-scorecard.json`, references: `${d}/references`,
    thin: `${d}/thin-page.json`, preview: `${d}/preview`, gates: `${d}/gates.json`, faq: `${d}/faq-bank-dispositions.json`, admission: `${d}/comparator-admission.json`,
  };
};

export function wikiPage(page) {
  const f = wikiPath(page);
  if (!exists(f)) return null;
  const raw = read(f), parsed = matter(raw);
  return { path: f, raw, fm: parsed.data, body: parsed.content, sha256: sha(raw) };
}

// Source records: label and primary link. Monitoring datasets keep their programme names.
const DATASET_LABELS = { [GEMS]: 'WHO GEMS/Food', [FDA]: 'FDA Total Diet Study' };
const sourceMetaCache = new Map();
function surname(author) {
  const a = String(author ?? '').trim();
  if (!a) return '';
  if (a.includes(',')) return a.split(',')[0].trim();
  const t = a.split(/\s+/);
  if (t.length <= 1) return a;
  return /^[A-Z](\.|[A-Z]\.?){0,2}\.?$/.test(t.at(-1)) ? t[0] : t.at(-1);
}
const institutional = n => /\b(Administration|Commission|Agency|Authority|Department|Ministry|Organization|Organisation|Council|Committee|Service|Centre|Centers?|Institute|Programme|Program|Codex|EFSA|JECFA|WHO|FDA|EPA|USDA|Bureau|Office|Board|Panel|Foundation)\b/i.test(n) || /\s(for|of|and)\s/i.test(n);
export function sourceMeta(id) {
  if (sourceMetaCache.has(id)) return sourceMetaCache.get(id);
  const f = `wiki/sources/${id}.md`;
  const fm = exists(f) ? matter(read(f)).data : {};
  const authors = Array.isArray(fm.authors) ? fm.authors : String(fm.authors ?? '').split(/;\s*/).filter(Boolean);
  const year = fm.year ? String(fm.year) : (String(id).match(/(19|20)\d{2}/)?.[0] ?? '');
  const first = authors[0] ? String(authors[0]) : '';
  const org = String(id).split('-')[0].replace(/\d+$/, '');
  const label = DATASET_LABELS[id] ?? (first && !institutional(first) && surname(first)
    ? `${surname(first)}${authors.length > 1 ? ' et al.' : ''}${year ? ' ' + year : ''}`
    : `${first && institutional(first) ? first : org.toUpperCase()}${year ? ' ' + year : ''}`);
  const doi = fm.doi && fm.doi !== 'null' ? String(fm.doi).replace(/^"|"$/g, '') : null;
  const url = doi ? (/^https?:/.test(doi) ? doi : `https://doi.org/${doi}`) : fm.url || fm.access_url || fm.source_url || `../sources/${id}`;
  const meta = { id, label, url, title: fm.title ?? id, exists: exists(f), path: f, type: fm.source_type ?? '' };
  sourceMetaCache.set(id, meta);
  return meta;
}

export const fmt = v => Number(Number(v).toPrecision(3)).toLocaleString('en-US', { maximumFractionDigits: 3 });
export const capital = s => s ? s[0].toUpperCase() + s.slice(1) : s;
export const plural = (n, one, many = one + 's') => `${n.toLocaleString('en-US')} ${n === 1 ? one : many}`;
export const listJoin = xs => xs.length <= 1 ? xs.join('') : xs.length === 2 ? `${xs[0]} and ${xs[1]}` : `${xs.slice(0, -1).join(', ')} and ${xs.at(-1)}`;
export const ANALYTE_ORDER = ['Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'MMA', 'As_unspecified', 'tHg', 'MeHg', 'iHg', 'Hg_unspecified', 'Ni', 'Cr', 'Cr-VI', 'Al', 'Sn', 'Sb', 'U', 'Co', 'Cu', 'Fe', 'Mn', 'Zn', 'V', 'Se', 'Cs137'];
export const ANALYTE_WORDS = { Pb: 'lead', Cd: 'cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', MMA: 'monomethylarsonic acid', As_unspecified: 'arsenic', tHg: 'total mercury', MeHg: 'methylmercury', iHg: 'inorganic mercury', Hg_unspecified: 'mercury', Ni: 'nickel', Cr: 'chromium', 'Cr-VI': 'chromium(VI)', Al: 'aluminium', Sn: 'tin', Sb: 'antimony', U: 'uranium' };
export const SPECIES = { Pb: 'total lead', Cd: 'total cadmium', tAs: 'total arsenic', iAs: 'inorganic arsenic', DMA: 'dimethylarsinic acid', MMA: 'monomethylarsonic acid', tHg: 'total mercury', MeHg: 'methylmercury', iHg: 'inorganic mercury', Ni: 'total nickel', Cr: 'total chromium', 'Cr-VI': 'hexavalent chromium', Al: 'total aluminium', Sn: 'total tin', Sb: 'total antimony', U: 'total uranium' };
export const analyteWord = a => ANALYTE_WORDS[a] ?? a;
export const DECISION_ANALYTES = ['Pb', 'Cd', 'tAs', 'iAs', 'tHg'];

// Public prose must never carry internal programme or tool names.
export const FORBIDDEN_PUBLIC = /\b(?:P95|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI|Claude|Anthropic)\b/i;

// iCloud conflict copies ("name 2.ext") are stale, and evicted ones block a read forever.
// Every engine directory read skips them.
export const CONFLICT_COPY = / \d+(\.[^/]*)?$/;
export const notConflict = name => !CONFLICT_COPY.test(typeof name === 'string' ? name : name.name);

// Redirect and retired stubs are never built; their findings belong to the page they point to.
export const isStub = fm => !!fm && (fm.retired === true || !!fm.redirect_target || /\b(REDIRECT|RETIRED)\b/.test(String(fm.title ?? '')));
let stubMap = null;
export function stubsRedirectingTo(pageRef) {
  if (!stubMap) {
    stubMap = new Map();
    for (const dir of Object.values(FAMILIES)) {
      const abs = path.join(root, 'wiki', dir);
      if (!fs.existsSync(abs)) continue;
      for (const f of fs.readdirSync(abs).filter(f => f.endsWith('.md') && notConflict(f))) {
        const fm = matter(fs.readFileSync(path.join(abs, f), 'utf8')).data;
        if (!isStub(fm) || !fm.redirect_target) continue;
        const target = String(fm.redirect_target).replace(/^\/|\.md$/g, '');
        stubMap.set(target, [...(stubMap.get(target) ?? []), `${dir}/${f.slice(0, -3)}`]);
      }
    }
  }
  return stubMap.get(pageRef) ?? [];
}
// The page a stub's findings go to, or the page itself.
export function redirectOf(pageRef) {
  stubsRedirectingTo('');
  for (const [target, stubs] of stubMap) if (stubs.includes(pageRef)) return target;
  return pageRef;
}

// The findings-store state a page was built from: the store's coverage file and the page's own
// by-page file. A page whose recorded state differs from the current one is stale.
export const STORE_COVERAGE = 'data/evidence/findings/coverage.json';
export function storeState(page) {
  const byPage = `data/evidence/findings/by-page/${FAMILIES[page.family]}/${page.slug}.json`;
  const cov = path.join(root, STORE_COVERAGE);
  return { coverage: STORE_COVERAGE, coverage_sha256: exists(STORE_COVERAGE) ? shaFile(STORE_COVERAGE) : null, coverage_mtime: exists(STORE_COVERAGE) ? fs.statSync(cov).mtime.toISOString() : null,
    by_page: byPage, by_page_sha256: exists(byPage) ? shaFile(byPage) : null };
}
export const sameStore = (a, b) => !!a && !!b && a.coverage_sha256 === b.coverage_sha256 && a.by_page_sha256 === b.by_page_sha256;
