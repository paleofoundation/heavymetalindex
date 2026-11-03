// Product universal core (PRODUCT-CANONICAL-RULES.md, hmi-product-core/1).
// Renders the required product-only sections from one JSON record and injects them,
// with the same JSON embedded, into a page built by the shared engine. The record is
// the source of truth; the HTML is a rendering of it.
export const CORE_KEYS = ['schema', 'slug', 'title', 'scope', 'limits', 'why_high_risk', 'benchmark', 'benchmark_products', 'ingredient_drivers', 'recalls', 'testing', 'compare', 'gaps', 'sources'];
export const CORE_ANCHORS = ['scope', 'overview', 'limits', 'why-high-risk', 'benchmark', 'profile', 'ingredient-drivers', 'recalls', 'testing', 'compare', 'mitigation', 'review', 'faqs'];
const FORBIDDEN = /GRN\s*0*(609|788|804|851)|oryzatein|axiom/i;
const DASHES = /[\u2013\u2014]/;

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fmt = v => v === null || v === undefined ? '' : typeof v === 'number' ? v.toLocaleString('en-US') : String(v);

export function validateCore(core) {
  const errors = [];
  for (const k of CORE_KEYS) if (!(k in core)) errors.push(`missing key ${k}`);
  const text = JSON.stringify(core);
  if (FORBIDDEN.test(text)) errors.push('forbidden private supplier source');
  if (DASHES.test(text)) errors.push('em or en dash in public text');
  const cited = [...core.limits, ...core.why_high_risk, ...core.benchmark, ...core.recalls, ...core.ingredient_drivers].map(x => x.source).filter(Boolean);
  for (const s of cited) if (!core.sources[s]) errors.push(`unknown source ${s}`);
  for (const r of core.recalls) if (!r.source) errors.push(`recall without source: ${r.brands}`);
  if (!core.limits.length) errors.push('limits empty');
  return errors;
}

// One numbered citation list shared by all core sections, in first-use order.
function citer(core) {
  const order = [];
  const cite = key => {
    if (!key) return '';
    if (!order.includes(key)) order.push(key);
    const n = order.indexOf(key) + 1, s = core.sources[key];
    return `<sup class="cite hmi-core-cite"><a href="${esc(s.url)}" title="${esc(s.title)}" target="_blank" rel="noopener">${n}</a></sup>`;
  };
  return { cite, order };
}

const table = (head, rows) => `<div class="table-container"><table class="hmi-core-table"><thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const h2 = (id, text) => `<h2 id="${id}" data-hmi-core="${id}">${esc(text)}<a role="anchor" aria-hidden="true" tabindex="-1" data-no-popover="true" href="#${id}" class="internal"> #</a></h2>`;
const link = (page, label) => page ? `<a class="internal" href="../${esc(page)}">${esc(label)}</a>` : esc(label);

export function renderCore(core, { label = core.title.toLowerCase() } = {}) {
  const { cite, order } = citer(core);
  const S = {};
  S.limits = h2('limits', 'Limits applicable to this category') +
    `<p>These are the legal limits, safe-harbor doses and enforcement terms that apply to ${esc(label)}. Concentration limits and per-day doses are different measures, so each row states its unit and basis.</p>` +
    table(['Jurisdiction', 'Instrument', 'Metal', 'Value', 'Unit', 'Basis', 'Status'], core.limits.map(l => [esc(l.jurisdiction), esc(l.instrument), esc(l.metal), l.value === null ? 'None' : esc(fmt(l.value)), esc(l.unit ?? ''), esc(l.basis ?? ''), esc(l.status) + cite(l.source)]));
  S['why-high-risk'] = h2('why-high-risk', 'Why this category is high-risk') +
    `<ul class="hmi-core-list">${core.why_high_risk.map(w => `<li>${esc(w.text)}${cite(w.source)}</li>`).join('')}</ul>` +
    `<p class="hmi-core-note">High-risk here describes exposure vulnerability and surveillance priority. It does not mean any product is unsafe.</p>`;
  S.benchmark = h2('benchmark', 'Measured levels: the benchmark') +
    `<p>Use this table to place a product result. Rows on different bases are kept apart: powder as sold and formula as prepared differ by roughly the reconstitution ratio. Non-detects are counted, not set to zero.</p>` +
    table(['Metal', 'Data set', 'Basis', 'n', 'Detected', 'Median', 'p90 (or p95)', 'Max'], core.benchmark.map(b => [esc(b.metal), esc(b.dataset), esc(b.basis), fmt(b.n), fmt(b.detected), esc(fmt(b.median ?? 'not shown')), esc(b.p90 != null ? fmt(b.p90) : b.p95 != null ? `${fmt(b.p95)} (p95)` : 'not shown'), esc(fmt(b.max)) + cite(b.source)])) +
    `<details class="hmi-core-details"><summary>All ${core.benchmark_products.length} non-soy powders in the Consumer Reports 2025 test (µg/kg, powder as sold)</summary>` +
    table(['Brand', 'Product', 'Lead', 'Cadmium', 'Total arsenic', 'Inorganic arsenic', 'Mercury', 'Aluminum'], core.benchmark_products.map(p => [esc(p.brand), esc(p.product), ...['lead', 'cadmium', 'total_arsenic', 'inorganic_arsenic', 'mercury', 'aluminum'].map(k => esc(p[k] === null ? 'not tested' : p[k] === 'ND' ? 'not detected' : fmt(p[k])))])) +
    `<p class="hmi-core-note">Source: Consumer Reports, March 2025.${cite('cr2025')} Soy-based products from the same test are on the soy-based page.</p></details>`;
  S['ingredient-drivers'] = h2('ingredient-drivers', `Which ingredients drive metals in ${label}`) +
    table(['Ingredient', 'Metals', 'What the evidence shows'], core.ingredient_drivers.map(d => [link(d.page, d.ingredient) + (d.page2 ? `, ${link(d.page2, 'casein')}` : ''), esc(d.metals), esc(d.evidence) + cite(d.source)]));
  S.recalls = h2('recalls', 'Historical recalls and enforcement') +
    `<p>Regulatory actions and published test results that named companies or brands for heavy metals in this category. Each entry is stated as the source reports it.</p>` +
    table(['Date', 'Company', 'Brand or product', 'Action', 'Metal', 'What happened'], core.recalls.map(r => [esc(r.date), esc(r.company), esc(r.brands), esc(r.type), esc(r.metal), esc(r.what) + cite(r.source)])) +
    `<p class="hmi-core-note">${esc(core.recall_search.text)}${cite(core.recall_search.source)}${cite(core.recall_search.source2)}</p>`;
  const t = core.testing;
  S.testing = h2('testing', `Testing guidance for ${label}`) +
    table(['Item', 'Guidance'], [['Metals', esc(t.metals.join(', '))], ['Method', esc(t.method)], ['Limit of quantification', esc(t.loq)], ['Basis', esc(t.basis)]].map(([a, b]) => [a, b + (a === 'Basis' ? t.sources.map(cite).join('') : '')]));
  S.compare = h2('compare', 'Compare your product') +
    `<ol class="hmi-core-list"><li>Put your result on the same basis as the benchmark row (powder as sold for the Consumer Reports rows; as prepared for the FDA rows).</li><li>Read where it falls among the products tested, and against each concentration limit above.</li><li>For per-day limits (Prop 65), multiply the concentration by grams of powder per day.</li></ol>` +
    `<form class="hmi-compare" data-hmi-compare onsubmit="return false"><label>Metal <select name="metal"><option value="lead">Lead</option><option value="cadmium">Cadmium</option><option value="inorganic_arsenic">Inorganic arsenic</option><option value="total_arsenic">Total arsenic</option><option value="aluminum">Aluminum</option></select></label> <label>Result, µg/kg powder as sold <input name="value" type="number" step="0.01" min="0" value="2"></label> <label>Grams of powder per day <input name="grams" type="number" step="1" min="1" value="${core.compare.default_intake_g_powder_per_day}"></label><output name="out" class="hmi-compare-out"></output></form>` +
    `<p class="hmi-core-note">${esc(core.compare.intake_note)} The tool reports position and comparisons only; it does not judge safety.</p>`;
  S.gaps = `<p class="hmi-core-note"><strong>Open gaps in these sections:</strong> ${core.gaps.map(esc).join(' ')}</p>`;
  S.sourcesList = `<div class="hmi-core-sources"><h3 id="core-sources">Sources for limits, benchmark, recalls and testing</h3><ol>${order.map(k => { const s = core.sources[k]; return `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>. ${esc(s.publisher)}, ${esc(s.date)}.${s.library ? ` Library record: ${link(s.library, s.library.replace('sources/', ''))}.` : ''}</li>`; }).join('')}</ol></div>`;
  return S;
}

export const COMPARE_SCRIPT = `<script>(()=>{const core=JSON.parse(document.getElementById('hmi-product-core').textContent);const f=document.querySelector('[data-hmi-compare]');if(!f)return;const lim={lead:[['EU 2023/915 powder',20],['Perrigo California settlement maximum (lowest)',5]],cadmium:[['EU 2023/915 cow-milk powder',10]],inorganic_arsenic:[['EU 2023/915 powder',20]],total_arsenic:[],aluminum:[]};const madl={lead:0.5,cadmium:4.1};const run=()=>{const m=f.metal.value,v=+f.value.value,g=+f.grams.value;const vals=core.benchmark_products.map(p=>p[m]).filter(x=>x!==null);const nd=vals.filter(x=>x==='ND').length;const le=vals.filter(x=>x==='ND'||x<=v).length;let s=vals.length?'At or above '+Math.round(100*le/vals.length)+' percent of '+vals.length+' non-soy powders tested by Consumer Reports in 2025 ('+nd+' not detected). ':'No benchmark set for this metal. ';if(m==='inorganic_arsenic')s+='(Only higher-arsenic products were speciated, so this set is skewed high.) ';for(const [n,x] of lim[m])s+=n+' '+x+' µg/kg: '+(v<x?'below':'at or above')+'. ';if(madl[m]){const d=v*g/1000;s+='Daily dose at '+g+' g/day: '+d.toFixed(2)+' µg/day, '+(d<madl[m]?'below':'at or above')+' the Prop 65 MADL of '+madl[m]+' µg/day.';}f.out.value=s;};f.addEventListener('input',run);run();})();</script>`;

export const CORE_CSS = `<style>.hmi-core-table{border-collapse:collapse;width:100%;font-size:.9rem}.hmi-core-table th,.hmi-core-table td{border:1px solid var(--lightgray);padding:.4rem .5rem;vertical-align:top;text-align:left}.hmi-core-note{font-size:.88rem;color:var(--darkgray)}.hmi-core-details summary{cursor:pointer;font-weight:600;margin:.6rem 0}.hmi-compare{display:flex;flex-wrap:wrap;gap:.8rem;align-items:end;padding:.8rem 0}.hmi-compare label{display:flex;flex-direction:column;font-size:.85rem}.hmi-compare input,.hmi-compare select{padding:.3rem;font:inherit}.hmi-compare-out{flex-basis:100%;font-weight:600}.hmi-core-sources ol{font-size:.85rem}</style>`;

// Place the core into an engine-built product page: limits, why-high-risk and benchmark
// before the profile; drivers, recalls, testing and compare replace the empty
// pathway/limits/recalls placeholders; mitigation and later sections stay as built.
export function injectCore(html, core, opts = {}) {
  const errors = validateCore(core);
  if (errors.length) throw Error(`product core invalid: ${errors.join('; ')}`);
  const S = renderCore(core, opts);
  const at = re => { const m = html.match(re); if (!m) throw Error(`anchor not found: ${re}`); return m.index; };
  const profile = at(/<h2 id="heavy-metal-contamination-profile[^"]*"/);
  const pathStart = at(/<h2 id="how-metals-reach[^"]*"/);
  const mitig = at(/<h2 id="mitigation-for[^"]*"/);
  const testing = at(/<h2 id="testing-[^"]*"/);
  const buying = at(/<h2 id="buying-and-verifying[^"]*"/);
  const review = at(/<h2 id="evidence-review[^"]*"/);
  const exposureAndMitigation = html.slice(html.indexOf('<h2 id="exposure-from', pathStart), testing);
  const before = html.slice(0, profile), profileBlock = html.slice(profile, pathStart);
  const testingBlock = html.slice(testing, buying); // engine FAQs on testing stay under the core testing table
  const tail = html.slice(review);
  const json = `<script type="application/json" id="hmi-product-core">${JSON.stringify(core).replace(/</g, '\\u003c')}</script>`;
  const out = before + CORE_CSS + S.limits + S['why-high-risk'] + S.benchmark + profileBlock + S['ingredient-drivers'] + S.recalls + S.testing + testingBlock.replace(/^<h2[\s\S]*?<\/h2>/, '') + S.compare + exposureAndMitigation + S.gaps + S.sourcesList + tail;
  // Stable universal anchors beside the engine's natural headings.
  const alias = { scope: /<h2 id="what-counts-as[^"]*"/, overview: /<h2 id="[^"]*-overview"/, profile: /<h2 id="heavy-metal-contamination-profile[^"]*"/, mitigation: /<h2 id="mitigation-for[^"]*"/, review: /<h2 id="evidence-review[^"]*"/, faqs: /<h2 id="[^"]*-faqs"/ };
  let page = out;
  for (const [id, re] of Object.entries(alias)) page = page.replace(re, m => `<span id="${id}" data-hmi-core-anchor></span>${m}`);
  page = page.replace(/<\/sup><sup class="cite hmi-core-cite">/g, '<span class="hmi-core-cite-sep">,</span>');
  return normalizeDashes(page.replace('</body>', `${json}${COMPARE_SCRIPT}</body>`));
}

// American English house style: no en or em dashes in reader text. Numeric ranges read
// "to"; other dashes become a comma or hyphen. Script, style and attribute values are untouched.
export function normalizeDashes(html) {
  return html.replace(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)|([^<]+)/g, (m, tag, text) => tag ? tag
    : text.replace(/(\d)\s*\u2013\s*(\d)/g, '$1 to $2').replace(/\s*\u2014\s*/g, ', ').replace(/\u2013/g, '-'));
}
