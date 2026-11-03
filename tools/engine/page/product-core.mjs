// Product universal core (PRODUCT-CANONICAL-RULES.md v2, hmi-product-core/2).
// Renders the product-only sections from one JSON record in the canonical ingredient
// style (prose plus accordion questions; tables only for profile, limits, recalls and
// evidence-based mitigation) and assembles them with the engine-built page. The record
// is the source of truth; the HTML is a rendering of it. The record is embedded whole,
// including fields that are not shown publicly (for example the Index Pro compare data).
export const CORE_KEYS = ['schema', 'slug', 'title', 'scope', 'limits', 'why_high_risk', 'benchmark', 'benchmark_products', 'ingredient_drivers', 'recalls', 'testing', 'mitigation', 'exposure', 'compare', 'gaps', 'sources'];
// Public section order (rules section 3). Hero precedes; references, sources, update history follow.
export const SECTION_ORDER = ['overview', 'scope', 'limits', 'why-high-risk', 'profile', 'ingredient-drivers', 'recalls', 'testing', 'exposure', 'mitigation', 'review', 'faqs', 'references', 'sources', 'update-history'];
const FORBIDDEN = /GRN\s*0*(609|788|804|851)|oryzatein|axiom/i;
const DASHES = /[\u2013\u2014]/;
const UK_US = [[/aluminium/g, 'aluminum'], [/Aluminium/g, 'Aluminum'], [/analys(e|ed|es|ing)\b/g, 'analyz$1'], [/fertilis(er|ers|ed)\b/g, 'fertiliz$1'], [/modelled/g, 'modeled'], [/modelling/g, 'modeling'], [/programme/g, 'program'], [/behaviour/g, 'behavior'], [/colour/g, 'color'], [/characteris(e|ed|es|ing)\b/g, 'characteriz$1'], [/summaris(e|ed|es|ing)\b/g, 'summariz$1'], [/minimis(e|ed|es|ing)\b/g, 'minimiz$1'], [/standardis(e|ed)\b/g, 'standardiz$1'], [/organis(ation|ations)\b/g, 'organiz$1']];

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fmt = v => v === null || v === undefined ? '' : typeof v === 'number' ? v.toLocaleString('en-US') : String(v);
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function validateCore(core) {
  const errors = [];
  for (const k of CORE_KEYS) if (!(k in core)) errors.push(`missing key ${k}`);
  const text = JSON.stringify(core);
  if (FORBIDDEN.test(text)) errors.push('forbidden private supplier source');
  if (DASHES.test(text)) errors.push('em or en dash in public text');
  const sentences = o => [...(o.paragraphs || []).flat(), ...(o.intro || []), ...(o.questions || []).flatMap(q => q.a)];
  const cited = [...core.limits, ...core.recalls, ...core.ingredient_drivers, ...core.benchmark, ...core.mitigation.rows, ...sentences(core.why_high_risk), ...sentences(core.mitigation), ...sentences(core.exposure)]
    .flatMap(x => [x.source, x.source_secondary]).filter(Boolean);
  for (const s of cited) if (!core.sources[s]) errors.push(`unknown source ${s}`);
  for (const r of core.recalls) if (!r.source) errors.push(`recall without source: ${r.brands}`);
  for (const l of core.limits) if (!l.jurisdiction_page && !l.instrument_page && !l.instrument_source_page && !core.sources[l.source]?.url) errors.push(`limit row without any link: ${l.jurisdiction} ${l.metal}`);
  for (const m of core.mitigation.rows) if (!m.source) errors.push(`mitigation table row without evidence: ${m.control}`);
  if (!core.limits.length) errors.push('limits empty');
  return errors;
}

// Canonical inline citation. Library sources use the site's source-record link; others link out.
// Numbers are assigned later, page-wide, by renumberCitations.
function citeHtml(core, key) {
  const s = core.sources[key];
  if (!s) return '';
  if (s.library) return `<sup class="cite"><a href="../${esc(s.library)}" class="internal alias" data-slug="${esc(s.library)}" data-title="${esc(s.title)}">0</a></sup>`;
  return `<sup class="cite"><a href="${esc(s.url)}" class="internal alias" data-ref-key="${esc(key)}" data-title="${esc(s.title)}" target="_blank" rel="noopener">0</a></sup>`;
}

export function renderCore(core, { label, anchorSvg = '' }) {
  const cite = k => citeHtml(core, k);
  const say = list => list.map(x => esc(x.text) + (x.source ? cite(x.source) : '') + (x.source_secondary ? cite(x.source_secondary) : '')).join(' ');
  const h2 = (id, text) => `<h2 id="${id}" data-hmi-core="${id}">${esc(text)}<a role="anchor" aria-hidden="true" tabindex="-1" data-no-popover="true" href="#${id}" class="internal">${anchorSvg}</a></h2>`;
  const qa = (q, bodyHtml) => { const id = slugify(q); return `<details class="qa" data-hmi-faq="1" id="${id}" data-anchor="${id}" data-question="${esc(q)}"><summary><span class="mk" aria-hidden="true"></span>${esc(q)}</summary><div class="ans" data-hmi-faq-answer="1">${bodyHtml}</div></details>`; };
  const qas = qs => (qs || []).map(q => qa(q.q, `<p>${say(q.a)}</p>`)).join('');
  const paras = ps => (ps || []).map(p => `<p>${say(p)}</p>`).join('');
  const link = (page, text) => page ? `<a href="../${esc(page)}" class="internal alias" data-slug="${esc(page)}">${esc(text)}</a>` : esc(text);
  const table = (head, rows, caption) => `<div class="table-container"><table class="hmi-core-table">${caption ? `<caption>${esc(caption)}</caption>` : ''}<thead><tr>${head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const S = {};

  // Limits: every jurisdiction and instrument linked internally; a missing internal page falls
  // back to the library source record, then the official source, and is listed in core.gaps.
  const instLink = l => l.instrument_page ? link(l.instrument_page, l.instrument)
    : l.instrument_source_page ? link(l.instrument_source_page, l.instrument)
      : `<a href="${esc(core.sources[l.source].url)}" class="external" target="_blank" rel="noopener">${esc(l.instrument)}</a>`;
  const juris = l => l.jurisdiction_page ? link(l.jurisdiction_page, l.jurisdiction) : l.jurisdiction === 'California (settlement, one company)' ? `${link('regulators/oehha', 'California')} (settlement, one company)` : esc(l.jurisdiction);
  S.limits = h2('limits', 'Government limits applicable to this category') +
    `<p>Concentration limits and per-day doses are different measures. The European Union and Codex set concentrations on the product, California Proposition 65 sets daily doses that trigger a warning, and the United States has no federal action level for infant formula. Each row states its unit and basis, and each jurisdiction and instrument links to its page or source record.</p>` +
    table(['Jurisdiction', 'Instrument', 'Metal', 'Value', 'Unit', 'Basis', 'Status'], core.limits.map(l => [juris(l), instLink(l), esc(l.metal), l.value === null ? 'None' : esc(fmt(l.value)), esc(l.unit ?? ''), esc(l.basis ?? ''), esc(l.status) + cite(l.source) + (l.source_secondary ? cite(l.source_secondary) : '')])) +
    qa('How does a per-day dose compare with a concentration limit?', `<p>A dose limit applies to the amount eaten in a day, so it becomes a concentration only once an intake is assumed. At an illustrative 120 grams of powder a day, the Prop 65 lead dose of 0.5 µg/day corresponds to about 4.2 µg/kg of powder, well below the EU powder limit of 20 µg/kg.${cite('oehhaPb')}${cite('eu2023915')} The label scoop rate and the infant's age change that figure.</p>`) +
    qa('Is there a U.S. federal limit for metals in infant formula?', `<p>No. FDA's Closer to Zero program has not set an action level for infant formula; FDA states it is working to establish one.${cite('fda2026press')} The California settlement terms bind one company and are not a general limit.${cite('caag2022')}</p>`);

  const w = core.why_high_risk;
  S['why-high-risk'] = h2('why-high-risk', 'Why this category is high-risk') + paras(w.paragraphs) + qas(w.questions);

  // Folded into the profile: published product-test summaries. Constant fields (basis, data set,
  // food form) are stated once in the lead sentence, never repeated per row.
  const cr = core.benchmark.filter(b => b.source === 'cr2025' && b.metal_key !== 'inorganic_arsenic');
  const fda = core.benchmark.filter(b => b.source === 'fda2026page');
  const iAs = core.benchmark.find(b => b.metal_key === 'inorganic_arsenic');
  const cell = v => esc(v === null || v === undefined ? 'not reported' : fmt(v));
  const prodCell = v => esc(v === null ? 'not tested' : v === 'ND' ? 'not detected' : fmt(v));
  S.profileAddon = `<p><a id="published-product-tests"></a></p><p>Two recent product surveys measured the powders on the market directly. Consumer Reports tested ${cr[0].n} non-soy powders in 2025, reported on the powder as sold in µg/kg; HMI computed the counts and percentiles from the published table, counting non-detects rather than setting them to zero.${cite('cr2025')}</p>` +
    table(['Metal', 'Products tested', 'Detected', 'Median', 'p90', 'Max'], cr.map(b => [esc(b.metal), fmt(b.n), fmt(b.detected), cell(b.median), cell(b.p90), cell(b.max)])) +
    `<p>Consumer Reports speciated only the ${iAs.n} non-soy powders with total arsenic of 6.7 ppb or more; inorganic arsenic was detected in all ${iAs.detected}, up to ${fmt(iAs.max)} µg/kg. Because the subset was selected for elevated arsenic, no median is shown.${cite('cr2025')}</p>` +
    `<p>FDA's FY2023 to FY2025 survey tested ${fda[0].n} samples of all formula types from 16 brands, reported on formula as prepared for feeding in µg/kg; it is not limited to non-soy powder, and FDA published the 95th percentile rather than the 90th.${cite('fda2026page')}</p>` +
    table(['Metal', 'Samples', 'Detected', 'Median', 'p95', 'Max'], fda.map(b => [esc(b.metal), fmt(b.n), fmt(b.detected), cell(b.median), cell(b.p95), cell(b.max)])) +
    qa(`What did each product contain in the Consumer Reports 2025 test?`, `<p>Results for all ${core.benchmark_products.length} non-soy powders, in µg/kg of powder as sold.${cite('cr2025')} Soy-based products from the same test are on the soy-based page.</p>` +
      table(['Brand', 'Product', 'Lead', 'Cadmium', 'Total arsenic', 'Inorganic arsenic', 'Mercury', 'Aluminum'], core.benchmark_products.map(p => [esc(p.brand), esc(p.product), ...['lead', 'cadmium', 'total_arsenic', 'inorganic_arsenic', 'mercury', 'aluminum'].map(k => prodCell(p[k]))])));

  S['ingredient-drivers'] = h2('ingredient-drivers', `Which ingredients drive metals in ${label}`) + `<p>${say(core.ingredient_drivers_intro || [])}</p>` +
    core.ingredient_drivers.map(d => qa(`What does the evidence show for ${d.ingredient.toLowerCase()}?`, `<p>${link(d.page, d.ingredient)}${d.page2 ? ` and ${link(d.page2, 'casein')}` : ''} (${esc(d.metals.toLowerCase())}): ${esc(d.evidence)}${d.source ? cite(d.source) : ''}</p>`)).join('');

  S.recalls = h2('recalls', 'Historical recalls and enforcement') +
    `<p>Regulatory actions and published test results that named companies or brands for heavy metals in this category, each stated as the source reports it. A published test ranking is a rating by its publisher, not a regulatory finding.</p>` +
    table(['Date', 'Company', 'Brand or product', 'Action', 'Metal', 'What happened'], core.recalls.map(r => [esc(r.date), esc(r.company), esc(r.brands), esc(r.type), esc(r.metal), esc(r.what) + cite(r.source)])) +
    `<p>${esc(core.recall_search.text)}${cite(core.recall_search.source)}${cite(core.recall_search.source2)}</p>`;

  const t = core.testing;
  S.testing = h2('testing', `Testing guidance for ${label}`) +
    `<p>A useful lot result covers ${esc(t.metals.slice(0, -1).join(', ').toLowerCase())} and ${esc(t.metals.at(-1).toLowerCase())}. ${esc(t.method)}${cite('cr2025')}${cite('eu2023915')} ${esc(t.basis)}${cite('fda2026page')}</p>` +
    qa('What limit of quantification should a lab reach?', `<p>${esc(t.loq)}${cite('eu2023915')}${cite('cr2025')}</p>${t.engine_reporting_limits || ''}`) +
    qa('Why does inorganic arsenic need speciation?', `<p>The EU limit applies to inorganic arsenic, not total arsenic, so a total arsenic screen above the limit must be followed by HPLC-ICP-MS before a result can be compared.${cite('eu2023915')}</p>`);

  const e = core.exposure;
  S.exposure = paras(e.paragraphs) + qas(e.questions);

  const m = core.mitigation;
  S.mitigation = `<p>${say(m.intro)}</p>` +
    (m.rows.length ? table(['Stage', 'Control', 'What the evidence shows'], m.rows.map(r => [esc(r.stage), esc(r.control), esc(r.evidence) + cite(r.source)]))
      : `<p class="hmi-mitigation-gap" data-mitigation-gap>No study in this library has measured a control for this category; this is an open gap.</p>`) +
    (m.gaps.length ? `<p>Not yet supported by quantified evidence: ${m.gaps.map(g => esc(g.replace(/\.$/, '').replace(/^No quantified evidence in the library for /, ''))).join('; ')}.</p>` : '') + qas(m.questions);

  S.gaps = `<p>Open gaps: ${core.gaps.map(esc).join(' ')}</p>`;
  return S;
}

export const CORE_CSS = `<style>.hmi-core-table{border-collapse:collapse;width:100%;font-size:.9rem}.hmi-core-table th,.hmi-core-table td{border:1px solid var(--lightgray);padding:.4rem .5rem;vertical-align:top;text-align:left}.hmi-core-table caption{text-align:left;font-size:.85rem;color:var(--darkgray);padding:.3rem 0}</style>`;

// Split an engine page into blocks keyed by h2 id.
function splitSections(html) {
  const re = /<h2 id="([^"]+)"/g; const marks = [];
  let m; while ((m = re.exec(html))) marks.push({ id: m[1], at: m.index });
  const end = html.indexOf('</article>', marks.at(-1).at);
  const blocks = {};
  marks.forEach((k, i) => { blocks[k.id] = html.slice(k.at, i + 1 < marks.length ? marks[i + 1].at : end); });
  return { pre: html.slice(0, marks[0].at), post: html.slice(end), blocks, ids: marks.map(k => k.id) };
}
const find = (blocks, re) => { const k = Object.keys(blocks).find(id => re.test(id)); if (!k) throw Error(`section not found: ${re}`); return k; };
const headOf = block => block.match(/^<h2[\s\S]*?<\/h2>/)[0];

// Drop a column whose value is the same on every row (rules 4.9). For the shared analyte
// table that is Food form: the match chip and source note move into Collection scope.
export function dropConstantFormColumn(html) {
  return html.replace(/<table class="hmi-analyte-table"[\s\S]*?<\/table>/g, tbl => {
    const forms = new Set([...tbl.matchAll(/<td data-label="Food form"><strong>([^<]*)<\/strong>/g)].map(x => x[1]));
    if (forms.size > 1) return tbl;
    return tbl
      .replace(/<th scope="col"[^>]*><span class="hmi-column-title"><span>Food form<\/span>[\s\S]*?<\/th>/, '')
      .replace(/colspan="5"/g, 'colspan="4"')
      .replace(/<td data-label="Food form"><strong>[^<]*<\/strong>((?:(?!<\/td>)[\s\S])*)<\/td>(<td data-label="Collection scope"[^>]*>)/g, (_, rest, open) => `${open}${rest}`);
  });
}

// One page-wide citation order: numbers follow first use, References list follows the numbers.
export function renumberCitations(html, core) {
  const keyOf = a => (a.match(/data-slug="([^"]+)"/) || a.match(/data-ref-key="([^"]+)"/) || [])[1];
  const order = [];
  const out = html.replace(/<sup class="cite">([\s\S]*?)<\/sup>/g, (sup, inner) => {
    const a = inner.match(/<a [^>]*>/)[0]; const key = keyOf(a);
    if (!order.includes(key)) order.push(key);
    const n = order.indexOf(key) + 1;
    return sup.replace(/(<a [^>]*>)\d+(<\/a>)/, `$1${n}$2`);
  });
  return { html: out, order };
}

function referenceItems(engineRefs, core, order) {
  const items = {};
  for (const li of engineRefs.match(/<li>[\s\S]*?<\/li>/g) || []) { const k = (li.match(/data-slug="([^"]+)"/) || [])[1]; if (k) items[k] = li; }
  const ext = '<svg aria-hidden="true" class="external-icon" style="max-width:0.8em;max-height:0.8em;" viewBox="0 0 512 512"><path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"></path></svg>';
  const tag = s => /consumer reports|healthy babies/i.test(s.publisher) ? 'Dataset' : /^(Int J|BMC|Environmental Health|Science of)/.test(s.publisher) ? 'Peer-reviewed' : /Regulation|Codex/i.test(s.title) ? 'Regulation' : 'Government';
  for (const [key, s] of Object.entries(core.sources)) {
    const k = s.library || key; if (items[k]) continue;
    const host = s.url.replace(/^https?:\/\//, '').replace(/[?#].*$/, '');
    const title = s.library ? `<a href="../${esc(s.library)}" class="internal alias" data-slug="${esc(s.library)}" data-title="${esc(s.title)}">${esc(s.title)}</a>` : `<a href="${esc(s.url)}" class="external" target="_blank" rel="noopener">${esc(s.title)}</a>`;
    items[k] = `<li>${title}<span class="hmi-ref-meta">${esc(s.publisher)} · ${esc(s.date)} · <a href="${esc(s.url)}" class="external">${esc(host.length > 60 ? host.slice(0, 57) + '...' : host)}${ext}</a></span><span class="hmi-ref-tag">${tag(s)}</span></li>`;
  }
  return order.map(k => items[k]).filter(Boolean);
}

export function assemble(html, core, { label, today = '2026-11-03', updateNote }) {
  const errors = validateCore(core);
  if (errors.length) throw Error(`product core invalid: ${errors.join('; ')}`);
  const { pre, post, blocks } = splitSections(html);
  const anchorSvg = (blocks[Object.keys(blocks)[0]].match(/<svg[\s\S]*?<\/svg>/) || [''])[0];
  const id = {
    scope: find(blocks, /^what-counts-as/), overview: find(blocks, /-overview$/), profile: find(blocks, /^heavy-metal-contamination-profile/),
    testing: find(blocks, /^testing-/), exposure: find(blocks, /^exposure-from/), mitigation: find(blocks, /^mitigation-for/),
    review: find(blocks, /^evidence-review/), faqs: find(blocks, /-faqs$/), references: 'references', sources: 'sources', updates: 'update-history',
  };
  // Engine reporting-limit sentences repeat one template per metal; restate them once.
  const tb = blocks[id.testing]; const sups = tb.match(/<sup class="cite">[\s\S]*?<\/sup>/g) || [];
  const rl = [...tb.matchAll(/Reporting limits for ([a-z ]+) ranged from ([\d.]+ µg\/kg) \(([^)]+)\) to ([\d.]+ µg\/kg) \(([^)]+)\)/g)];
  core = structuredClone(core);
  if (rl.length) core.testing.engine_reporting_limits = `<p>Reporting limits in the library's studies ranged from ${rl.map(r => `${r[2].replace(' µg/kg', '')} to ${r[4]} for ${r[1]}`).join(', ')} (lowest in ${rl[0][3]}, highest in ${rl[0][5]}), so a non-detect from a less sensitive method says much less.${sups.slice(0, 2).join('')}</p>`;
  const S = renderCore(core, { label, anchorSvg });
  const sec = (k, body) => `<span id="${k}" data-hmi-core-anchor></span>${body}`;
  const strip = b => b.replace(/^<h2[\s\S]*?<\/h2>/, '');
  const profile = dropConstantFormColumn(blocks[id.profile]);
  const mitigationBody = headOf(blocks[id.mitigation]) + S.mitigation;
  const exposureBody = headOf(blocks[id.exposure]) + S.exposure;
  const reviewBody = blocks[id.review].replace(/<p><a id="universal-faqs"><\/a><\/p>\s*$/, '') + S.gaps;
  const refsHead = blocks.references.match(/^[\s\S]*?<ol>/)[0];
  const updates = headOf(blocks[id.updates]) + `\n<p>${esc(updateNote)}</p>\n` + strip(blocks[id.updates]);
  let body = [
    sec('overview', blocks[id.overview]), sec('scope', blocks[id.scope]), CORE_CSS + S.limits, S['why-high-risk'],
    sec('profile', profile + S.profileAddon), S['ingredient-drivers'], S.recalls, S.testing,
    sec('exposure', exposureBody), sec('mitigation', mitigationBody), sec('review', reviewBody), sec('faqs', blocks[id.faqs]),
    '@@REFERENCES@@', blocks.sources, updates,
  ].join('\n');
  let page = pre + body + post;
  const { html: numbered, order } = renumberCitations(page, core);
  page = numbered.replace('@@REFERENCES@@', `${refsHead}\n${referenceItems(blocks.references, core, order).join('\n')}\n</ol>\n`);
  page = fixChrome(page, core, today);
  const json = `<script type="application/json" id="hmi-product-core">${JSON.stringify(core).replace(/</g, '\\u003c')}</script>`;
  return americanize(normalizeDashes(page.replace('</body>', `${json}</body>`)));
}

// Left table of contents rebuilt from the final h2 order; hero image path made relative so
// previews load it; hero counts and dates follow the record.
const NAV_LABEL = { overview: 'Summary', scope: 'Scope', limits: 'Limits', 'why-high-risk': 'Why high-risk', profile: 'Profile', 'ingredient-drivers': 'Ingredients', recalls: 'Recalls', testing: 'Testing', exposure: 'Exposure', mitigation: 'Mitigation', review: 'Review', faqs: 'FAQs', references: 'References', sources: 'Sources', 'update-history': 'Updates' };
function fixChrome(page, core, today) {
  const art = page.slice(page.indexOf('<article'));
  const heads = [...art.matchAll(/(?:<span id="([^"]+)" data-hmi-core-anchor><\/span>)?<h2 id="([^"]+)"[^>]*>([\s\S]*?)<a role="anchor"/g)].map(m => ({ alias: m[1], id: m[2], title: m[3].replace(/<[^>]+>/g, '').trim() }));
  const nav = heads.map(h => { const key = h.alias || h.id; const lab = NAV_LABEL[key] || h.title; return `<div class="grp"><a class="sec" href="#${h.id}" data-for="${h.id}" title="${esc(h.title)}" aria-label="${esc(lab)}: ${esc(h.title)}">${esc(lab)}</a></div>`; }).join('');
  page = page.replace(/(<div class="snav-content" id="article-contents">)[\s\S]*?(<\/div><\/nav>)/, `$1${nav}$2`);
  page = page.replace(/src="\/static\/heroes\//g, 'src="../static/heroes/');
  const withValue = core.limits.filter(l => l.value !== null).length;
  const jur = new Set(core.limits.map(l => l.jurisdiction.replace(/ \(.*$/, ''))).size;
  page = page.replace(/<strong>\d+<\/strong> applicable limits/, `<strong>${withValue}</strong> applicable limits`).replace(/<strong>\d+<\/strong> jurisdictions/, `<strong>${jur}</strong> jurisdictions`);
  page = page.replace(/(Last updated: <time datetime=")[^"]*(">)[^<]*/, `$1${today}$2${today}`);
  return page;
}

// American English house style: no en or em dashes in reader text, US spelling. Script, style,
// tag attributes, cite cards and source titles are untouched.
export function normalizeDashes(html) {
  return html.replace(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)|([^<]+)/g, (m, tag, text) => tag ? tag
    : text.replace(/(\d)\s*\u2013\s*(\d)/g, '$1 to $2').replace(/\s*\u2014\s*/g, ', ').replace(/\u2013/g, '-'));
}
export function americanize(html) {
  const art0 = html.indexOf('<article'), refs = html.indexOf('<h2 id="references"'), refsEnd = html.indexOf('<h2 id="sources"');
  const fix = seg => seg.replace(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<span class="cite-card">[\s\S]*?<\/span><\/span><\/span>|<[^>]+>)|([^<]+)/g, (m, tag, text) => {
    if (tag) return /^<[a-z]/.test(tag) && /data-info-content="/.test(tag) ? tag.replace(/data-info-content="([^"]*)"/, (x, v) => `data-info-content="${UK_US.reduce((s, [a, b]) => s.replace(a, b), v)}"`) : tag;
    return UK_US.reduce((s, [a, b]) => s.replace(a, b), text);
  });
  return html.slice(0, art0) + fix(html.slice(art0, refs)) + html.slice(refs, refsEnd) + fix(html.slice(refsEnd));
}
