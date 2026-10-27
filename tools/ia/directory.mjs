// IA-03: shared directory renderer for /foods/, /products/, /products/{group}/, /metals/, /limits/, /research/.
// Order: search, filters, category cards, one A to Z list, author card, update history.
// Not wired to any route yet; IA-04 onward mount it.
import {metalLabel} from './labels.mjs'
export const LEVELS = ['Above a limit', 'Near a limit', 'Below all limits', 'No data yet']
const BANNED = /\b(safe|safer|safest|clean|cleaner|compliant|non-toxic|toxin-free)\b/i
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]))
const clean = t => String(t ?? '').replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, (_, x) => x.split('/').at(-1).replace(/-/g, ' '))
  .replace(/\bcat(?:egory|egories)?\.?\s*\d+(?:\s*(?:,|and)\s*\d+)*\b/gi, '').replace(/\s{2,}/g, ' ').trim()

/**
 * Level badge from cited data only. `measurements` is the page's own cited table:
 * [{metal, value, limit, source}] with numbers in the same unit. No cited row means "No data yet".
 */
export function levelBadge(measurements = []) {
  const cited = measurements.filter(m => m && m.source && Number.isFinite(Number(m.value)) && Number.isFinite(Number(m.limit)) && Number(m.limit) > 0)
  if (!cited.length) return {level: 'No data yet', text: 'No data yet', metal: null}
  const ratio = m => Number(m.value) / Number(m.limit)
  const top = cited.reduce((a, b) => ratio(b) > ratio(a) ? b : a)
  const r = ratio(top), metal = metalLabel(top.metal)
  if (r > 1) {
    const n = cited.filter(m => metalLabel(m.metal) === metal && ratio(m) > 1).length, of = cited.filter(m => metalLabel(m.metal) === metal).length
    return {level: 'Above a limit', text: `${metal} above a limit in ${n} of ${of} cited results`, metal}
  }
  if (r >= 0.5) return {level: 'Near a limit', text: `${metal} at ${Math.round(r * 100)}% of a limit in cited results`, metal}
  return {level: 'Below all limits', text: `Cited results below all limits applied`, metal}
}
export const assertNoBannedWording = html => { const m = String(html).replace(/<[^>]+>/g, ' ').match(BANNED); if (m) throw Error(`banned wording in directory output: "${m[0]}"`); return html }

function card(item) {
  const b = levelBadge(item.measurements)
  const slug = b.level.toLowerCase().replace(/\s+/g, '-')
  return `<li class="hmi-dir-card" data-dir-item data-title="${esc(clean(item.title).toLowerCase())}" data-aliases="${esc((item.aliases || []).join(' ').toLowerCase())}" data-category="${esc(item.category || '')}" data-metals="${esc((item.metals || []).join(' '))}" data-level="${esc(b.level)}">`
    + `<a href="${esc(item.url)}"><span class="hmi-dir-title">${esc(clean(item.title))}</span></a>`
    + (item.categoryLabel ? `<span class="hmi-dir-chip">${esc(clean(item.categoryLabel))}</span>` : '')
    + `<span class="hmi-level hmi-level--${slug}">${esc(b.text)}</span>`
    + (b.level === 'No data yet' ? `<span class="hmi-dir-note">Studies being gathered</span>` : '')
    + (item.updated ? `<time datetime="${esc(item.updated)}">Updated ${esc(item.updated)}</time>` : '')
    + `</li>`
}
const options = (name, label, values) => `<label>${esc(label)}<select data-dir-filter="${name}"><option value="">All</option>${values.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join('')}</select></label>`

/**
 * @param {{title:string, intro?:string, categories:{slug:string,label:string,description?:string}[],
 *   items:{title:string,url:string,category?:string,categoryLabel?:string,aliases?:string[],metals?:string[],measurements?:any[],updated?:string}[],
 *   author?:string, history?:{date:string,note:string}[]}} d
 */
export function renderDirectory(d) {
  const items = [...(d.items || [])].sort((a, b) => clean(a.title).localeCompare(clean(b.title)))
  const cats = d.categories || [], metals = [...new Set(items.flatMap(i => i.metals || []))].map(m => [m, metalLabel(m)]).sort((a, b) => a[1].localeCompare(b[1]))
  const count = slug => items.filter(i => i.category === slug).length
  const html = `<section class="hmi-directory" data-hmi-directory>`
    + (d.intro ? `<p class="hmi-dir-intro">${esc(clean(d.intro))}</p>` : '')
    + `<label class="hmi-dir-search">Search ${esc(d.title)}<input type="search" data-dir-filter="q" placeholder="Name or metal"></label>`
    + `<div class="hmi-dir-filters">${options('metal', 'Metal', metals)}${options('category', 'Category', cats.map(c => [c.slug, clean(c.label)]))}${options('level', 'Level', LEVELS.map(l => [l, l]))}`
    + `<label>Sort<select data-dir-filter="sort"><option value="">A to Z</option><option value="recent">Recently updated</option></select></label></div>`
    + (cats.length ? `<ul class="hmi-dir-categories">${cats.map(c => `<li><a href="?category=${esc(c.slug)}" data-dir-category="${esc(c.slug)}"><strong>${esc(clean(c.label))}</strong>${c.description ? `<span>${esc(clean(c.description))}</span>` : ''}<span class="hmi-dir-count">${count(c.slug)} ${count(c.slug) === 1 ? 'page' : 'pages'}</span></a></li>`).join('')}</ul>` : '')
    + (items.length ? `<h2>A to Z</h2><ul class="hmi-dir-list" data-dir-list>${items.map(card).join('')}</ul>`
      + `<p class="hmi-dir-empty" data-dir-empty hidden>No match for '<span data-dir-q></span>'. Try a metal name or browse categories.</p>`
      : `<p class="hmi-dir-empty">No pages in this directory yet. Studies are being gathered.</p>`)
    + (d.author ? `<aside class="hmi-dir-author">${esc(clean(d.author))}</aside>` : '')
    + (d.history?.length ? `<details class="hmi-dir-history"><summary>Update history</summary><ul>${d.history.map(h => `<li><time>${esc(h.date)}</time> ${esc(clean(h.note))}</li>`).join('')}</ul></details>` : '')
    + `</section>`
  return assertNoBannedWording(html)
}

/** Client-side filtering for a rendered directory (search over title and aliases, gray/grey tolerant). */
export function filterItems(items, state) {
  const fold = s => String(s || '').toLowerCase().replace(/gr[ae]y/g, 'grey').replace(/(?<=\w{3})(es|s)\b/g, '')
  const q = fold(state.q).trim()
  return items.filter(i => (!q || fold(i.title + ' ' + (i.aliases || []).join(' ') + ' ' + (i.metals || []).map(metalLabel).join(' ')).includes(q))
    && (!state.metal || (i.metals || []).includes(state.metal)) && (!state.category || i.category === state.category)
    && (!state.level || levelBadge(i.measurements).level === state.level))
}
