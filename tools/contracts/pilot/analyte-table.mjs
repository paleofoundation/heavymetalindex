import { formatNumber, formatMedian, summarizeSamples } from "./comparisons.mjs";
import { packExplorerPayload, encodeExplorerPayload } from "./explorer-payload.mjs";
import { comparisonLevel, comparisonState, comparisonSummary } from "../../lib/occurrence-comparison.mjs";
export { comparisonLevel } from "../../lib/occurrence-comparison.mjs";

export const analyteNames = {
  tAs: "Total arsenic", iAs: "Inorganic arsenic", Cd: "Cadmium", Pb: "Lead",
  tHg: "Total mercury", MeHg: "Methylmercury", DMA: "Dimethylarsinic acid", Ni: "Nickel", Cr: "Total chromium", U: "Uranium",
};
export const escapeHTML = (s) => String(s ?? "Not reported").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const e = escapeHTML;
const units = (r,n) => n===1?r.sampling_unit.replace(/s$/,""):r.sampling_unit;
const range = (a,b) => a===b?formatNumber(a):`${formatNumber(a)}–${formatNumber(b)}`;
const h = (title) => `<p class="hmi-drawer-section-title" role="heading" aria-level="3">${e(title)}</p>`;
export const datasetIcon = '<svg class="hmi-dataset-icon" viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14 2H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9z"/><path d="M14 2v7h7M7 13h3M7 17h10M7 21h10"/></svg>';
export function directionIcon(direction) {
  const bars=direction==="higher"?'<path d="M2 22v-4h4v4zm6 0V12h4v10zm6 0V6h4v16z" fill="currentColor" stroke="none"/>'
    : direction==="lower"?'<path d="M2 22V6h4v16zm6 0V12h4v10zm6 0v-4h4v4z" fill="currentColor" stroke="none"/>'
    : '<path d="M3 9h15M3 16h15"/>';
  return `<svg class="hmi-direction-icon" viewBox="0 0 21 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${bars}</svg>`;
}

function sourceFindingText(r, original = false) {
  const value = original ? r.reported.value : r.value;
  const min = original ? r.reported.min : r.min, max = original ? r.reported.max : r.max;
  const unit = original ? r.reported.unit : r.unit;
  if (r.statistic === "below_LOQ") return "Detected below LOQ";
  if (r.statistic === "not_detected") return "Not detected";
  if (r.statistic === "reported_range") return `${range(min,max)} ${unit} (reported range)`;
  return `${!original && r.reported.unit === "µg/45g dry rice" ? "≈" + Number(value.toPrecision(2)) : formatNumber(value)} ${unit} (${r.statistic})`;
}
function sourceFindingHTML(r, detailed = false) {
  const label = r.statistic === "reported_range" ? "Reported range" : r.statistic === "below_LOQ" ? "Below quantification" : r.statistic === "not_detected" ? "Detection result" : `${r.statistic[0].toUpperCase()}${r.statistic.slice(1)}`;
  const value = r.value !== null ? (r.reported.unit === "µg/45g dry rice" ? "≈" + Number(r.value.toPrecision(2)) : formatNumber(r.value)) : r.statistic === "reported_range" ? range(r.min,r.max) : sourceFindingText(r);
  const bounds = ["below_LOQ", "not_detected"].includes(r.statistic) ? "Numerical reporting bound unavailable." : /substitut/i.test(r.censoring) ? "Includes substituted non-detects." : "";
  const heading = detailed ? `<strong class="hmi-finding">${e(sourceFindingText(r))}</strong>` : `<button type="button" class="hmi-finding hmi-finding-trigger" data-open-finding aria-haspopup="dialog" aria-label="${e(sourceFindingText(r))}. Open source summary.">${e(value)}</button>`;
  return `${heading}<span class="hmi-row-note">${e(label)} · source summary.</span>${detailed ? `<span class="hmi-row-note">${r.n} ${e(r.sampling_unit)}${r.detection_rate == null ? "" : `; ${r.detection_rate}% detected`}.</span>` : ""}${bounds ? `<span class="hmi-row-note">${bounds}</span>` : ""}${detailed ? `<p>Basis: ${e(r.basis)}. ${e(r.censoring)}</p>${r.sd == null ? "" : `<p>Source-reported SD: ${formatNumber(r.sd)} µg/kg; this is not a confidence interval.</p>`}${r.reported.min != null && r.reported.max != null ? `<p>Source-reported range: ${range(r.reported.min,r.reported.max)} ${e(r.reported.unit)}.</p>` : ""}${r.reported.range_text ? `<p>Source-reported range: ${e(r.reported.range_text)} ${e(r.reported.unit)}; censoring is retained as reported.</p>` : ""}` : ""}`;
}
function sourceEvidenceContent(r,mode='time') {
  const c = r.profile.variants["::"].comparisons[mode];
  const original = sourceFindingText(r, true);
  return `<div data-evidence-content><p class="hmi-dataset-title"><a href="../sources/${e(r.source)}" class="internal" data-slug="sources/${e(r.source)}">${e(r.source_label)}</a></p><p>${e(r.food)} · ${e(analyteNames[r.analyte])} (${e(r.analyte)}) · ${r.n} ${e(r.sampling_unit)}.</p>${h("Selected finding and reference")}<div class="hmi-selected-result" data-selected-finding>${sourceFindingHTML(r,true)}</div><div class="hmi-selected-comparison" data-selected-comparison>${comparisonDetailsHTML(c,true)}</div>${h("Collection period")}<p data-timeline-scope>${e(r.period)}</p><div data-selected-timeline><p>No year-by-year sample register is reconstructed from this summary.</p></div>${h("Geographic scope")}<p data-regional-scope>${e(r.region)}</p><div data-selected-regional><p>${e(r.region_type)}.</p></div>${h("Sampling, analysis and reporting limits")}<p>${e(r.method)}.</p><p>${e(r.censoring)}</p><p>${e(r.limitations)}</p>${h("Shared samples and study overlap")}<p>${e(r.overlap)}</p><p>Each table row describes a food/analyte result. Repeated rows do not add independent samples or datasets. ${mode==='hmi'?'Compatible cross-study evidence informs the declared HMI reference; this source row retains its original statistic. No population trend is inferred.':'No cross-study trend is calculated in this comparison mode.'}</p><details class="hmi-drawer-disclosure"><summary>Reported values, conversion and source locator</summary>${summaryTable(["Source statistic","Original result","Displayed unit conversion"],[[r.statistic,original,r.conversion.method]])}${r.reported.sd == null ? "" : `<p>Original SD: ${e(r.reported.sd)} ${e(r.reported.unit)}.</p>`}<p>${e(r.locator)}.</p><p>No moisture, cooking-yield or species conversion is applied to the original finding above. Any basis conversion used for its HMI comparison is stated separately with the numerical target.</p></details><p><a href="${e(r.primary_url)}">Open the primary publication</a> · <a href="../sources/${e(r.source)}" class="internal" data-slug="sources/${e(r.source)}">HMI source record</a></p></div>`;
}

export function findingHTML(r,v,detailed=false) {
  if (r.record_type === "source_summary") return sourceFindingHTML(r, detailed);
  const statistic=v.max===null?"Detection count":r.statistic==="maximum"?"Observed maximum":v.detected===1?"Detected value":"Detected range";
  const value=v.max===null?"No detections":`${r.statistic==="maximum"?formatNumber(v.max):range(v.min,v.max)} µg/kg`;
  if(!detailed)return `<button type="button" class="hmi-finding hmi-finding-trigger" data-open-finding aria-haspopup="dialog" aria-label="${e(findingSummary(r,v))} Open finding details.">${e(v.max===null?"No detections":r.statistic==="maximum"?formatNumber(v.max):range(v.min,v.max))}</button><span class="hmi-row-note">${statistic}${v.median.exact?"":" · censored bounds"}.</span>`;
  const limit=r.profile.kind==="formula"?`Non-detect upper bound: ${formatNumber(r.profile.lod_upper)} µg/kg (conservative source-wide LOD maximum).`:`Reporting limit: ${range(v.rl_min,v.rl_max)} µg/kg.`;
  return `<strong class="hmi-finding">${e(value)}</strong><span>${statistic}</span><span>${v.detected} of ${v.n} ${e(units(r,v.n))} detected</span><span class="hmi-row-note">Sample median: ${e(formatMedian(v.median))} µg/kg${v.median.exact?"":" (censored bounds)"}.</span><span class="hmi-row-note">${e(limit)}</span><span class="hmi-row-note">Basis: ${e(r.display_basis)}.</span>`;
}
export function findingSummary(r,v) {
  if (r.record_type === "source_summary") return `${r.source_label}: ${analyteNames[r.analyte]} in ${r.food}; ${sourceFindingText(r)}; ${r.n} ${r.sampling_unit}; ${r.region}; ${r.period}. Basis: ${r.basis}.`;
  const statistic=r.statistic==="maximum"?"observed maximum":v.detected===1?"detected value":"detected range";
  const value=v.max===null?"no detections":`${r.statistic==="maximum"?formatNumber(v.max):range(v.min,v.max)} µg/kg ${statistic}`;
  const limit=r.profile.kind==="formula"?"Prepared-for-feeding conversion assumes no contribution from water; sampled products differ by year.":"Historical collection-market composites; these do not identify growing origins or current brands.";
  return `${analyteNames[r.analyte]} in ${r.food}: ${value}; sample median ${formatMedian(v.median)} µg/kg; ${v.detected} of ${v.n} ${units(r,v.n)} detected, ${v.region}, ${v.period}. Basis: ${r.display_basis}. ${limit}`;
}
export function ratingExplanation(c) {
  const level=comparisonLevel(c);
  if(c?.kind==='hmi_baseline') {
    const b=c.baseline,d=b.distribution;
    if(!d)return `Limited data: ${c.detail} Missing evidence never means low contamination.`;
    return `${level?{low:'Low',moderate:'Moderate',high:'High'}[level]:'Limited data'} · ${b.label}. ${b.target_statistic}: ${formatMedian(c.target)} µg/kg. HMI median ${formatMedian(d.median)}; Q1 ${formatMedian(d.q1)}; Q3 ${formatMedian(d.q3)} µg/kg. ${d.family_count} ${d.family_count===1?'family':'families'}. ${!level?(d.eligible?'Reporting bounds prevent a rating.':'Too few reference units.'):'Not a safety grade.'}`;
  }
  if(!level) {
    if(!c || ['summary','unavailable','reference','geography'].includes(c.direction))return 'No relative rating: this selection has no compatible reference distribution. The reported finding remains available; missing comparison data do not mean low contamination.';
    if(c.direction==='bounded' || c.target?.exact===false)return 'No relative rating: reporting limits leave the target median bounded. Overlapping bounds do not establish equal levels or a direction of difference.';
    if(c.reference_middle50?.q1===c.reference_middle50?.q3 && c.reference_middle50)return 'No relative rating: the reference middle 50% has no spread. Any direct comparison is shown separately.';
    if(['higher','lower','same'].includes(c.direction))return 'Direct comparison only: the compatible summaries establish their descriptive difference, but do not supply an eligible reference distribution for Low / Moderate / High. Equal rounded summaries do not establish equivalence.';
    return 'Context only: this result describes sampled regions or paired species, rather than position in a reference distribution.';
  }
  const scope=c.rating_reference?.label||'Selected reference-group medians';
  const meaning=c.rating_reference?.kind==='category_means'
    ? 'Position among category averages, not individual samples. Categories have different origins, milling and sample counts. This rating reference is separate from the named pairwise contrast.'
    : 'Position against the matched reference distribution, not the magnitude of the pairwise difference.';
  return `${{low:'Low: below',moderate:'Moderate: within',high:'High: above'}[level]} the reference middle 50% (${range(c.reference_middle50.q1,c.reference_middle50.q3)} µg/kg). Rating reference: ${scope}. ${c.rating_reference?.weighting||'Each reference group weighted once'}. ${meaning} Not a safety or certainty grade.`;
}
export function comparisonDetailsHTML(c, compact=false) {
  if(!c)return '<span>No matching collection in this selection.</span>';
  if(c.kind==='hmi_baseline')return baselineDetailsHTML(c,compact);
  const direction=(c.kind==='food_form'?{higher:'Higher',lower:'Lower',same:'Same reported summary'}:{higher:"Increased",lower:"Decreased",same:"Unchanged"})[c.direction];
  const label=direction?`${directionIcon(c.direction)}<span><span class="hmi-direction-label">${direction}</span><span class="hmi-comparison-value">${e(c.label.replace(/^[↑↓]\s*/,""))}</span></span>`:e(c.label);
  return `<p class="hmi-drawer-section-title" role="heading" aria-level="3">Low / Moderate / High rating</p><p>${e(ratingExplanation(c))}</p><p class="hmi-drawer-section-title" role="heading" aria-level="3">Selected comparison</p><strong class="hmi-comparison hmi-comparison-${e(c.direction)}${direction?" hmi-direction-badge":""}">${label}</strong><span class="hmi-comparison-detail">${e(c.detail)}</span>${c.target_n?`<span class="hmi-row-note">Target: ${c.target_n}; reference: ${c.reference_n} ${e(c.sample_unit||"composites")}. ${c.matched_strata?`${c.matched_strata.length} matched groups.`:""}</span>`:""}${c.peers?summaryTable(["Same-survey rice category","Mean (µg/kg, dry weight)","Samples"],c.peers.map(p=>[p.food,p.approximate?"≈"+Number(p.value.toPrecision(2)):formatNumber(p.value),p.n])):""}${c.reference_source_rows?`<details class="hmi-drawer-disclosure"><summary>Matched source locators</summary><p>Reference CSV rows: ${e(c.reference_source_rows.join(", "))}. Target CSV rows: ${e(c.target_source_rows.join(", "))}.</p></details>`:""}${c.position?`<span class="hmi-reference-position">${e(c.position)}<br>Reference: ${e(range(c.reference_middle50.q1,c.reference_middle50.q3))} µg/kg</span>`:""}<span class="hmi-row-note">${e(c.context)}</span>`;
}

function baselineDetailsHTML(c,compact=false) {
  const b=c.baseline,s=b.sensitivity;
  const label=level=>({low:'Low',moderate:'Moderate',high:'High'}[level]||'Limited data');
  const sensitivity=s?`${h('Sensitivity to weighting')}<p>${e(s.label)}: ${label(s.level)}. ${s.stable?(s.level?'The position is unchanged under this alternative.':'The position remains unresolved under this alternative.'):'The position changes or becomes unresolved under this alternative; the rating depends on the chosen weighting.'} This check does not address all sampling, rounding or analytical uncertainty.</p>`:'';
  const omitted=b.leave_one_out?.length?`${h('Sensitivity to source selection')}<ul>${b.leave_one_out.map(check=>`<li>Without ${e(b.source_labels?.[check.omitted]||check.omitted)}: ${label(check.level)}.</li>`).join('')}</ul><p>These checks show dependence on each sampling family; they are not confidence intervals.</p>`:'';
  return `${h('HMI baseline position')}<p>${e(ratingExplanation(c))}</p><p>${e(c.detail)}</p>${b.distribution?`<p>${b.contributes?'This finding’s sampling family contributes to the fixed reference.':'This is an external comparison; the finding does not set the reference.'}</p>`:''}${sensitivity}${omitted}${compact&&b.reference_id?`<div data-baseline-reference="${e(b.reference_id)}"><a href="#hmi-reference-${e(b.reference_id)}">Reference, contributing evidence and methods</a></div>`:baselineReferenceHTML(b)}`;
}
function baselineReferenceHTML(b) {
  const d=b.distribution,s=b.sensitivity;
  const quantities=dist=>[formatMedian(dist.q1),formatMedian(dist.median),formatMedian(dist.q3)];
  return `${d?`${h('Reference and scope')}<p>${e(b.label)}. ${e(b.scope.basis)}. Distribution of ${e(b.scope.statistic)} values.</p>${summaryTable(['Reference (µg/kg)','Q1','Median','Q3'],[['Primary HMI reference',...quantities(d)],['Alternative weighting',...quantities(s.distribution)]])}<p>${d.n} reference units; ${d.family_count} sampling ${d.family_count===1?'family':'families'}. Counts describe evidence units, not independent studies or certainty.</p>${b.contributions?.length?summaryTable(['Contributing family','Reference units','Weight'],b.contributions.map(c=>[b.source_labels?.[c.family]||c.family,c.units,`${Math.round(c.weight*100)}%`])):''}${h('Methods')}<p>${e(b.methods)}</p><p>${e(d.quantile_method)}. At least four reference units and a definitely positive Q1–Q3 spread are required. This is a display eligibility rule, not statistical validation.</p>${h('Limitations')}<p>${e(b.limitations)}</p>${h('Admitted source families')}<ul>${b.sources.map(source=>`<li><a href="../sources/${e(source)}" class="internal" data-slug="sources/${e(source)}">${e(b.source_labels?.[source] || source)}</a></li>`).join('')}</ul>`:''}<details class="hmi-drawer-disclosure"><summary>Reference version and interpretation</summary><p>Frozen evidence selection: ${e(b.frozen)}. Method: ${e(b.method)}.</p><p>${e(b.reference_id||'No admitted reference')}</p><p>The reference is computed by HMI from admitted evidence, not copied from a study baseline. It describes the evidence currently in this scope; it is not a worldwide or current-lot benchmark. Source, year and region filters do not change it. Different HMI scopes are not one common ranking.</p></details>`;
}

export function infoButton(label,content) {
  return `<button type="button" class="hmi-info-button" data-info-content="${e(content)}" aria-label="${e(label)}" aria-expanded="false"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7.5"/><path d="M10 9v5M10 5.5v1.5"/></svg></button>`;
}
export function resultButton(label,{level="unknown",icon="",kind="comparison",context=""}={}) {
  return `<button type="button" class="hmi-level-button hmi-level-${e(level)}" data-open-${kind} aria-haspopup="dialog" aria-label="${e(label)}${context?`: ${e(context)}`:''}: open ${kind==="comparison"?"comparison":"effect"} details">${icon}<span>${e(label)}</span></button>`;
}
export function mobileColumnHelp(notes) {
  return `<details class="hmi-mobile-column-help"><summary>About this table</summary><div>${Object.entries(notes).map(([label,note])=>`<span>${e(label)}${infoButton(`About ${label}`,note)}</span>`).join("")}</div></details>`;
}
export function columnHeader(label,note,unit="") {return `<th scope="col"><span class="hmi-column-title"><span>${e(label)}${unit?` <small class="hmi-column-unit">${e(unit)}</small>`:""}</span>${infoButton(`About ${label}`,note)}</span></th>`;}
export function levelIcon(level) {
  const active={low:1,moderate:2,high:3}[level];
  return `<svg class="hmi-level-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">${[0,1,2].map(i=>`<rect x="${1+i*7}" y="${14-i*5}" width="4" height="${5+i*5}" opacity="${i<active?1:0.2}"/>`).join("")}</svg>`;
}
// Canonical compact rating: no estimate, comparator or interpretation in the label.
// Unknown remains neutral; absence of an eligible comparison is not Moderate.
export function ratingButton(level,{kind='comparison'}={}) {
  const rating=['low','moderate','high'].includes(level)?level:null;
  return resultButton(rating?{low:'Low',moderate:'Moderate',high:'High'}[rating]:'—',{
    level:rating||'unknown',icon:levelIcon(rating),kind,
  });
}
export function comparisonHTML(c,mode='time') {
  const state=comparisonState(c,mode);
  const explanation=c?.kind==='hmi_baseline'?ratingExplanation(c):c?[
    `${state.label}: ${state.reference}.`,
    ratingExplanation(c),
    c.label,c.detail,
    c.target_n?`Target: ${c.target_n}; reference: ${c.reference_n} ${c.sample_unit||'samples'}.`:'',
    'Descriptive comparison, not a safety or certainty grade. Open the button for full source details.',
  ].filter(Boolean).join(' '):'No matching collection. Open the sidebar for scope and methods.';
  const icon=state.level?levelIcon(state.level):state.kind==='direct'?directionIcon(c.direction):'';
  return `<span class="hmi-comparison-controls" data-comparison-state="${state.kind}">${resultButton(state.label,{level:state.level||'unknown',icon,context:state.reference})}${infoButton('About this comparison',explanation)}</span>`;
}
const columnNotes = {
  "Food form":"Material tested. The group heading identifies the analyte; different species and preparation bases are kept separate.",
  "Collection scope":"Source-specific collection geography, period and preparation basis. A purchase market is not growing origin. Missing dates stay unknown; publication year is not a collection year.",
  Finding:"Source-reported mean, median, range or detection result, explicitly labelled. FDA sample registers retain detected ranges, counts and sample medians. Summary-only findings do not generate new samples; explicitly identified same-survey category means may define a category-position band. Units convert to µg/kg without changing moisture basis. Open a result for reporting limits and original values.",
  Comparison:"Low, Moderate and High describe position below, within or above a stated reference Q1–Q3 (middle 50%). FDA TDS uses matched collection-group medians; FDA 2013 uses the other compatible same-survey category means, equally weighted with the target excluded. Each rating needs at least four exact compatible reference summaries with non-zero spread and an exact target. Higher / Lower shows a supported direct comparison without that distribution; Limits overlap leaves direction unresolved. No comparator retains the source finding without inventing a comparison. This is not a safety rating, certainty grade or measure of change. Select a button for change estimates and methods.",
  Evidence:"Numbers count datasets. Select the document icon to inspect source measurements, matching, reporting limits and methods. Repeated food or analyte rows from one source do not add independent datasets.",
};
function scopeHTML(v,r) {
  const basis=r.record_type==='source_summary'?r.basis:r.display_basis;
  const shortBasis=/45 g dry|dry.weight/i.test(basis)?'Dry-weight basis':/Air-dried/.test(basis)?'Air-dried grain':/\bcooked\b/i.test(basis)?'Cooked basis':'See measurement basis';
  return `<strong>${e(v.region)}</strong><span>${e(v.period)}</span><span class="hmi-row-note">${shortBasis}</span>`;
}
function summaryTable(headers,rows) {
  return `<div class="hmi-drawer-table"><table><thead><tr>${headers.map(x=>`<th scope="col">${e(x)}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(x=>`<td>${e(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function timelineView(r,region="") {
  if (r.record_type === "source_summary") return {scope:r.period,html:`<p>Source-reported summary; no year-by-year sample register is reconstructed.</p>`};
  const selected=r.profile.samples.filter(s=>!region||s.region===region);
  const rows=r.profile.years.map(year=>({year,...summarizeSamples(selected.filter(s=>s.year===year))})).filter(s=>s.n);
  return {scope:region?`${region} collections only; all available source years.`:"All collection regions; all available source years.",html:summaryTable(["Fiscal year","Samples","Detected","Sample median (µg/kg)","Detected range (µg/kg)"],rows.map(s=>[`FY${s.year}`,s.n,`${s.detected}/${s.n}`,formatMedian(s.median),s.max===null?"No detections":range(s.min,s.max)]))};
}
function regionalView(r,year="") {
  if (r.record_type === "source_summary") return {scope:r.region,html:`<p>${e(r.region_type)}. No additional regional distribution is inferred from the overall summary.</p>`};
  if(!r.profile.regions.length)return {scope:"No regional labels in this source.",html:"<p>FDA's formula table does not supply collection-region labels. Geographic comparisons cannot be derived from this source.</p>"};
  const rows=r.profile.regions.map(region=>({region,...summarizeSamples(r.profile.samples.filter(s=>s.region===region&&(!year||s.year===year)))})).filter(s=>s.n);
  return {scope:year?`FY${year} collections in all sampled regions.`:"All source years in all sampled regions.",html:summaryTable(["Collection region","Composites","Detected","Sample median (µg/kg)","Detected range (µg/kg)"],rows.map(s=>[s.region,s.n,`${s.detected}/${s.n}`,formatMedian(s.median),s.max===null?"No detections":range(s.min,s.max)]))};
}
function sharedEvidenceContent(r) {
  if (r.record_type === "source_summary") return '<div data-shared-evidence-content><p>Source summaries retain their original statistic, material, basis and censoring. Each source drawer identifies methods and overlapping samples. No matched reference or pooled distribution is inferred.</p></div>';
  const p=r.profile;
  const calculation=p.kind==="formula"
    ? "<p>For formula, the reference is the earliest earlier fiscal year for the same cow-milk powder subset. The comparison uses each year's sample median bounds. Regional and seasonal matching are unavailable, and the sampled products are not a longitudinal panel. The source-year sample counts and detection counts remain visible.</p>"
    : "<p>Earlier matched collections uses the latest selected year and the earliest earlier year with common region × season groups. We calculate a median within each group, then the median across the same groups in each year, with equal group weight. Unmatched composites remain in the source tables. Other collection regions matches fiscal year and season and balances the peer regions. These are descriptive sample comparisons.</p>";
  const analytical=r.profile.kind==="formula"
    ? '<p>FDA used ICP-MS. Non-detects are interval-censored using the highest analyte-specific published LOD as a conservative upper bound, because individual-sample LODs are unavailable. No non-detect is assigned a measured zero. Exact median bounds can coincide even when some samples are censored. The selected finding retains the applicable analyte-specific bound.</p>'
    : '<p>FDA regional foods combine purchases from three cities into one prepared-food composite. Row-specific administrative reporting limits are preserved. A non-detect is bounded by its reporting limit; no concentration is imputed. The multi-analyte rice records contain winter-only FY2020 collections; this does not mean every analyte was tested in that year. Matching also addresses unequal regional coverage, including the absence of West in the FY2018 winter subset.</p><p><a href="https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-design-and-implementation">FDA collection and preparation design</a> · <a href="https://www.fda.gov/media/159746/download?attachment=">Original data key</a></p>';
  return `<div data-shared-evidence-content><details class="hmi-drawer-disclosure"><summary>How the comparison is calculated</summary>${calculation}<p>A reference middle 50% is the earlier groups' Q1–Q3, with linear interpolation. It describes that reference set; it is not a normal range, a safety threshold or an outlier test. A single earlier measurement has no meaningful reference distribution.</p></details><details class="hmi-drawer-disclosure"><summary>Sampling, analytical methods and reporting limits</summary><p>${e(r.limitations)}</p>${analytical}<p>Unmatched source-year summaries describe every reported sample in that year. The selected comparison uses only its declared matching groups. Different fiscal years can include collections from the same calendar year.</p><p>Collection markets do not identify growing or ingredient origin. Other collection regions compares samples matched by year and season.</p><p>Source-value tables retain public category-level sample identifiers, fiscal year, reported result and original locator. A zero lower interval endpoint is never displayed as an observed concentration.</p></details><details class="hmi-drawer-disclosure"><summary>Source reuse limits</summary><p>Comparisons concern the selected historical dataset and are not current supplier rankings, compliance findings or independent measurements. They are descriptive sample comparisons and do not establish a population trend.</p></details></div>`;
}
function evidenceContent(r,sharedId,mode='time') {
  if (r.record_type === "source_summary") return sourceEvidenceContent(r,mode);
  const p=r.profile,timeline=timelineView(r),regional=regionalView(r);
  const samples=summaryTable(["Fiscal / calendar year","Region / season","Reported result (µg/kg)","Source locator"],p.samples.map(sample=>[
    `FY${sample.year}${sample.calendar_year?` / CY${sample.calendar_year}`:""}`,
    `${sample.region} / ${sample.season}`,
    sample.value===null?(p.kind==="formula"?"<LOD":`<${formatNumber(sample.limit)}`):formatNumber(sample.value),
    p.kind==="formula"?sample.source_row:`CSV source row ${sample.source_row}; ${sample.id}`,
  ]));
  return [
    `<div data-evidence-content><p class="hmi-dataset-title"><a href="../sources/${e(r.source)}" class="internal" data-slug="sources/${e(r.source)}">${e(r.source_label)}</a></p>`,
    `<p>${e(r.food)} · ${e(analyteNames[r.analyte])} (${e(r.analyte)}) · ${r.n} ${e(units(r,r.n))} in the full source subset.</p>`,
    h("Selected finding and reference"),
    `<div class="hmi-selected-result" data-selected-finding>${findingHTML(r,p.variants["::"],true)}</div><div class="hmi-selected-comparison" data-selected-comparison>${comparisonDetailsHTML(p.variants["::"].comparisons[mode],true)}</div>`,
    h("Year-by-year source results"),
    `<p class="hmi-scope-note" data-timeline-scope>${e(timeline.scope)}</p><div data-selected-timeline>${timeline.html}</div>`,
    h("Collection regions"),
    `<p class="hmi-scope-note" data-regional-scope>${e(regional.scope)}</p><div data-selected-regional>${regional.html}</div>`,
    `<p>${e(r.basis)}.</p>${sharedId ? `<div data-shared-evidence-target><p><a href="#${sharedId}">Collection, comparison and analytical methods</a> apply to every finding in this table.</p></div>` : sharedEvidenceContent(r)}`,
    `<details class="hmi-drawer-disclosure"><summary>Source values and extraction locators (${p.samples.length})</summary>${samples}</details>`,
    `<details class="hmi-drawer-disclosure"><summary>Original source and locator</summary><p><a href="${e(r.primary_url)}">Open the FDA primary source</a> · <a href="../sources/${e(r.source)}" class="internal" data-slug="sources/${e(r.source)}">HMI source record</a></p><p>${e(r.locator.split("; sample IDs")[0])}.</p></details></div>`,
  ].join("");
}
function evidence(r,drawerId,sharedId,mode='time') {
  return `<details class="hmi-cell-details" data-evidence-detail><summary data-open-evidence aria-haspopup="dialog" aria-controls="${drawerId}" aria-label="Open 1 dataset for ${e(analyteNames[r.analyte])}, ${e(r.food)}"><span class="hmi-evidence-count">${datasetIcon}<span>1</span></span></summary>${evidenceContent(r,sharedId,mode)}</details><span class="hmi-row-note" data-evidence-n hidden>${r.n} ${e(units(r,r.n))}</span>`;
}
export function renderAnalyteTable(rows,key,options={}) {
  if(!rows.length)throw Error("An occurrence table needs observations");
  const international = rows.some(r => r.record_type === "source_summary");
  const hasHmi=rows.every(r=>'hmi' in r.profile.variants['::'].comparisons);
  const mode=options.defaultComparison || (hasHmi?'hmi':key==='rice'?'forms':'time');
  const hasForms=(key==='rice'||options.defaultComparison==='forms') && rows.some(r=>'forms' in r.profile.variants['::'].comparisons);
  const initialStates=rows.map(r=>comparisonState(r.profile.variants['::'].comparisons[mode],mode));
  const notes=hasHmi?{...columnNotes,Comparison:'Low, Moderate and High describe position against a fixed HMI reference: below Q1, within Q1–Q3, or above Q3. HMI computes the reference from compatible evidence, pooling compatible study subgroups while separating dry-weight grain, native-moisture uncooked grain and cooked composites. Limited data means a compatible or sufficiently resolved reference is unavailable. Filters change the selected finding, not the baseline. See each information icon or sidebar for the target statistic, reference, methods, weighting and limitations. These are not safety or certainty ratings. Other comparison modes retain their own named references.'}:columnNotes;
  const usRegions = new Set(rows.filter(r => r.region === "United States").flatMap(r => r.profile.regions));
  const analytes=[...new Set(rows.map(r=>r.analyte))],regions=[...new Set(rows.flatMap(r=>[...r.profile.regions,...(international && r.region === "United States" ? ["United States"] : [])]))].sort(),years=[...new Set(rows.flatMap(r=>r.profile.years))].sort();
  const prefix=`hmi-occurrence-${key}`,drawerId=`${prefix}-drawer`,sharedId=key==='rice'?null:`${prefix}-methods`;
  const payloadRows=[];
  const groups=analytes.map(analyte=>{
    const group=rows.filter(r=>r.analyte===analyte),ids=group.map((_,i)=>`${prefix}-${analyte}-${i}`),name=analyteNames[analyte];
    return `<tbody data-analyte-group="${e(analyte)}" data-analyte-name="${e(name)}"><tr class="hmi-analyte-group"><th colspan="5" scope="rowgroup"><button type="button" data-toggle-analyte aria-expanded="true" aria-controls="${ids.join(" ")}" aria-label="Toggle ${e(name)} findings"><span class="hmi-group-arrow" aria-hidden="true">⌄</span><span>${e(name)} <small><code>${e(analyte)}</code></small></span><span class="hmi-group-count">${group.length} ${group.length===1?"finding":"findings"}</span></button></th></tr>${group.map((r,i)=>{
      const variants=Object.fromEntries(Object.entries(r.profile.variants).map(([scope,v])=>[scope,{scope_html:scopeHTML(v,r),finding_html:findingHTML(r,v),finding_detail_html:findingHTML(r,v,true),summary_text:international?"":findingSummary(r,v),comparison_detail_html:Object.fromEntries(Object.entries(v.comparisons).filter(([mode])=>hasForms||mode!=='forms').map(([mode,c])=>[mode,comparisonDetailsHTML(c,true)])),comparison_html:Object.fromEntries(Object.entries(v.comparisons).filter(([mode])=>hasForms||mode!=='forms').map(([mode,c])=>[mode,comparisonHTML(c,mode)])),n:v.n,unit:units(r,v.n)}]));
      const drawerViews={timelines:Object.fromEntries(["",...r.profile.regions,...(international && r.region === "United States" ? ["United States"] : [])].map(region=>[region,timelineView(r,region === "United States" ? "" : region)])),regions:Object.fromEntries(["",...r.profile.years].map(year=>[year,regionalView(r,year)]))};
      const v=r.profile.variants["::"];
      const index=payloadRows.push({variants,drawer_views:drawerViews})-1;
      return `<tr id="${ids[i]}" data-occurrence-row data-source="${e(r.source)}" data-record-type="${e(r.record_type || "sample_register")}" data-occurrence-index="${index}" data-drawer-context="${e(`${name} (${analyte}) · ${r.food}`)}" data-region="${e(r.region)}"><td data-label="Food form"><strong>${e(r.food)}</strong><span class="hmi-row-note"><a href="../sources/${e(r.source)}" class="internal" data-slug="sources/${e(r.source)}">${e(r.source_label)}</a></span></td><td data-label="Collection scope" data-row-scope>${scopeHTML(v,r)}</td><td data-label="Finding (µg/kg)" data-row-finding>${findingHTML(r,v)}</td><td data-label="Comparison" data-row-comparison>${comparisonHTML(v.comparisons[mode],mode)}</td><td data-label="Evidence">${evidence(r,drawerId,sharedId,mode)}</td></tr>`;
    }).join("")}</tbody>`;
  }).join("");
  const firstRows=rows.filter(r=>r.analyte===analytes[0]);
  const synopsis=international ? `${analyteNames[analytes[0]]}: ${firstRows.length} ${firstRows.length===1?"finding":"findings"} from ${new Set(firstRows.map(r=>r.source)).size} ${new Set(firstRows.map(r=>r.source)).size===1?"source":"sources"}. Each row retains its statistic and measurement basis.` : firstRows.map(r=>findingSummary(r,r.profile.variants["::"])).join(" ");
  const sources=[...new Map(rows.map(r=>[r.source,r.source_label])).entries()];
  const baselineTemplates=[...new Map(rows.map(r=>r.profile.variants['::'].comparisons.hmi?.baseline).filter(b=>b?.reference_id).map(b=>[b.reference_id,b])).values()].map(b=>`<details class="hmi-drawer-disclosure" data-baseline-fallback id="hmi-reference-${e(b.reference_id)}"><summary>${e(b.label)}</summary><div data-baseline-reference-template="${e(b.reference_id)}">${baselineReferenceHTML(b)}</div></details>`).join('');
  const payload=`${baselineTemplates}<script type="application/octet-stream" data-explorer-payload data-encoding="base64">${encodeExplorerPayload(packExplorerPayload(payloadRows))}</script>`;
  const context=options.contextHTML ? `<details class="hmi-drawer-disclosure" data-explorer-context><summary data-open-context aria-haspopup="dialog" aria-controls="${drawerId}">Comparison methods and scope</summary><div data-explorer-context-content>\n\n${options.contextHTML}\n\n</div></details>` : '';
  const sharedMethods=sharedId ? `<details class="hmi-drawer-disclosure" id="${sharedId}" data-shared-occurrence-methods><summary>Shared dataset methods and interpretation</summary>${sharedEvidenceContent(rows[0])}</details>` : '';
  return `<div class="hmi-analyte-explorer" id="${prefix}" data-analyte-explorer${options.contextHTML?' data-compact-intro="true"':''}${international ? ' data-source-summaries="true"' : ""}>${options.contextHTML ? context : `<p class="hmi-explorer-intro">How do these findings compare?</p><p class="hmi-explorer-description">${international ? "International grain surveys, experimental grain collections, commercial rice products and FDA prepared-food samples retain their own statistics and bases. Open a finding for its original values, methods and limitations." : "Historical FDA source samples are summarized below. Select a result or source for the complete measurements and methods."}</p>`}<p class="hmi-explorer-description" data-result-synopsis${options.contextHTML?' hidden':''}><strong>First displayed analyte:</strong> <span data-result-synopsis-text>${e(synopsis)}</span></p>${options.contextHTML?'<details class="hmi-explorer-filters" data-explorer-filters hidden><summary>Filter findings</summary>':''}<div class="hmi-explorer-controls" data-explorer-controls hidden><label for="${prefix}-analyte">Analyte<select id="${prefix}-analyte" aria-label="Analyte" data-filter-analyte><option value="">All analytes</option>${analytes.map(a=>`<option value="${e(a)}">${e(analyteNames[a])} (${e(a)})</option>`).join("")}</select></label><label for="${prefix}-region">Collection region<select id="${prefix}-region" aria-label="Collection region" data-filter-region><option value="">${international ? "All collection scopes" : rows[0].profile.kind==="formula"?"United States · region not provided":"United States · all regions"}</option>${regions.map(r=>`<option value="${e(r)}">${e(international && usRegions.has(r) ? `United States · ${r}` : r)}</option>`).join("")}</select></label><label for="${prefix}-year">${international ? "Collection period" : "Fiscal year"}<select id="${prefix}-year" aria-label="${international ? "Collection period" : "Fiscal year"}" data-filter-year><option value="">All source years</option>${years.map(y=>`<option value="${e(y)}">${e(y === "not-reported" ? "Collection period not reported" : /^\d{4}$/.test(y) ? `FY${y}` : y)}</option>`).join("")}</select></label>${international ? `<label for="${prefix}-source">Source<select id="${prefix}-source" aria-label="Source" data-filter-source><option value="">All sources</option>${sources.map(([id,label])=>`<option value="${e(id)}">${e(label)}</option>`).join("")}</select></label>` : ""}<label for="${prefix}-comparison">Compare with<select id="${prefix}-comparison" aria-label="Comparison basis" data-filter-comparison>${hasHmi?`<option value="hmi"${mode==='hmi'?' selected':''}>HMI baseline (scoped)</option>`:''}${hasForms?`<option value="forms"${mode==='forms'?' selected':''}>${e(options.formComparisonLabel || (key==='rice'?'Other rice type (same study)':'Other food form (same study)'))}</option>`:''}<option value="time"${mode==='time'?' selected':''}>${rows[0].profile.kind==="formula"?"Earlier survey years":"Earlier matched collections"}</option><option value="regions"${mode==='regions'?' selected':''}>Other collection regions</option></select></label><label class="hmi-comparable-filter"><input type="checkbox" data-filter-comparable>Comparable findings only</label><button type="button" data-reset-explorer>Reset</button><div class="hmi-expand-controls"><button type="button" data-expand-all>Expand all</button><button type="button" data-collapse-all>Collapse all</button></div></div><p class="hmi-explorer-status" role="status" aria-live="polite" data-explorer-status>${rows.length} of ${rows.length} findings · ${analytes.length} analytes</p>${options.contextHTML?'</details>':''}${key==='rice'?'':'<p class="hmi-explorer-description">Reference positions describe the historical samples. They are not safety, legal-compliance or certainty ratings.</p>'}${options.contextHTML?'':`<div class="hmi-comparison-overview"><p data-comparison-summary role="status" aria-live="polite">${e(comparisonSummary(initialStates))}</p></div>`}${mobileColumnHelp(notes)}<table class="hmi-analyte-table"><caption>${key==='rice'?'Compare findings with their scoped HMI baseline. Open a result for the reference, methods and limitations.':'Source-reported means, medians and ranges remain separate from FDA sample-level summaries. Different moisture bases and sampling frames are not pooled or ranked. Collection periods may be unknown. Reference positions, when available within a dataset, compare matched group medians with the reference middle 50% (Q1–Q3); they are not safety classifications, legal limits or demonstrated population trends. FDA detected ranges exclude non-detects. Published summaries retain their own censoring conventions, including any substitutions. Sample counts describe this selected food/analyte subset, not independent studies.'}</caption><thead><tr>${Object.entries(notes).map(([label,note])=>columnHeader(label,note,label==="Finding"?"(µg/kg)":"")).join("")}</tr></thead>${groups}</table>${sharedMethods}${payload}<p class="hmi-explorer-empty" data-explorer-empty hidden>No findings match these filters. Change the selection or reset to show all source findings.</p><dialog class="hmi-evidence-drawer" id="${drawerId}" aria-labelledby="${drawerId}-title" aria-modal="true"><header class="hmi-drawer-header"><div><p class="hmi-drawer-title" id="${drawerId}-title" role="heading" aria-level="2">1 dataset</p><p data-drawer-subtitle></p></div><button type="button" data-close-evidence aria-label="Close dataset details">×</button></header><div class="hmi-drawer-body" data-drawer-body></div></dialog></div>`;
}
