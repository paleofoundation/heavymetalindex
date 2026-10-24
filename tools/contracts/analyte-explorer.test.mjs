import test from "node:test";
import assert from "node:assert/strict";
import { parseFragment } from "parse5";
import { fromHtml } from "hast-util-from-html";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "preact/jsx-runtime";
import { renderToString } from "preact-render-to-string";
import { root } from "./generate.mjs";
import { occurrenceRows, renderObservations } from "./pilot/observations.mjs";
import { calculateCertainty, domains } from "./pilot/certainty.mjs";
import { comparisonHTML, comparisonDetailsHTML, comparisonLevel, findingSummary, renderAnalyteTable } from "./pilot/analyte-table.mjs";
import { packExplorerPayload, unpackExplorerPayload, encodeExplorerPayload, decodeExplorerPayload, chunkSidecar, chunkCount, EXPLORER_CHUNK_ROWS } from "./pilot/explorer-payload.mjs";
import { chunkRows, chunkLength, chunkPosition } from "./pilot/explorer-chunks.mjs";

const fixture = () => ({
  scope_key: "fixture-scope", source_families: ["fixture-dataset"], status: "reviewed",
  search_status: "complete", search_ref: "fixture-search", eligibility_ref: "fixture-eligibility",
  method: "hmi-occurrence-profile-v1", method_ref: "fixture-method", starting_level: "high",
  starting_rationale: "Synthetic test appraisal; never published as evidence.",
  review: { reviewer: "Test reviewer", kind: "ai", date: "2026-10-18", record_ref: "fixture-review" },
  domains: Object.fromEntries(domains.map(key => [key, { change: 0, rationale: "Synthetic domain rationale", evidence_ref: "fixture-evidence" }])),
});
const grade = (a, scope = "fixture-scope", sources = ["fixture-dataset"], exists = () => true) => calculateCertainty(a, scope, sources, exists);

test("certainty derives from documented judgments at all four levels, with a floor", () => {
  for (const [changes, expected] of [[[], "high"], [[-1], "moderate"], [[-2], "low"], [[-2,-1], "very_low"], [[-2,-2,-2], "very_low"]]) {
    const a=fixture();changes.forEach((change,i)=>a.domains[domains[i]].change=change);
    assert.equal(grade(a).judgment,expected);
  }
  const a=fixture();a.starting_level="low";assert.equal(grade(a).judgment,"low");
});
test("paper or sample counts cannot supply or upgrade an assessment", () => {
  assert.equal(grade({ n_studies: 4000, n: 100000 }).judgment,"not_assessed");
  const a=fixture();a.starting_level="low";a.n_studies=4000;assert.equal(grade(a).judgment,"low");
});
test("incomplete search, unsupported method, missing reviewer or missing domain fail closed", () => {
  for(const mutate of [a=>a.search_status="in_progress",a=>a.status="assessing",a=>a.method="legacy-count",a=>delete a.review,a=>delete a.domains.precision,a=>delete a.search_ref,a=>a.domains.precision.change=1,a=>a.starting_rationale=""]) {
    const a=fixture();mutate(a);assert.equal(grade(a).judgment,"not_assessed");
  }
});
test("certainty cannot transfer to a different scope or a different source family", () => {
  assert.equal(grade(fixture(),"other-material").judgment,"not_assessed");
  assert.equal(grade(fixture(),"fixture-scope",["other-dataset"]).judgment,"not_assessed");
});
test("unresolvable appraisal references prevent a graded badge", () => {
  assert.equal(grade(fixture(),"fixture-scope",["fixture-dataset"],()=>false).judgment,"not_assessed");
  assert.equal(calculateCertainty(fixture(),"fixture-scope",["fixture-dataset"]).judgment,"not_assessed");
});
test("actual pilot findings include comparisons and preserve scope, region and sample units", () => {
  for(const kind of ["rice","cadmium","formula"]) for(const r of occurrenceRows(kind,root)) {
    assert.ok(r.profile.variants["::"].comparisons.time.label);
    if(r.record_type === "source_summary") {
      assert.ok(r.reported && r.conversion && r.method && r.overlap);
      assert.equal(r.profile.samples,undefined);
      assert.equal(comparisonLevel(r.profile.variants["::"].comparisons.time),null);
      continue;
    }
    assert.equal(r.region,"United States");assert.match(r.region_type,/Collection market/);
    assert.equal(r.n,r.detected+r.non_detect);assert.ok(r.basis && r.period && r.locator && r.scope_key);
  }
});
function elements(html) {
  const all=[];const walk=n=>{if(n.tagName)all.push({...n,attr:Object.fromEntries(n.attrs.map(a=>[a.name,a.value]))});(n.childNodes||[]).forEach(walk);};walk(parseFragment(html));return all;
}
const text=node=>(node.nodeName==="#text"?node.value:"")+(node.childNodes||[]).map(text).join("");
function payloadRows(html) {
  const container=elements(html).find(el=>"data-explorer-payload"in el.attr);
  return unpackExplorerPayload(decodeExplorerPayload(text(container)));
}
// Drawer details for every row, in row order, from the inline detail chunks.
function detailRows(html) {
  return elements(html).filter(el=>"data-explorer-chunk"in el.attr).flatMap(chunk=>unpackExplorerPayload(decodeExplorerPayload(text(chunk.childNodes.find(n=>n.tagName==="script")))));
}
const rowIndex=(html,row)=>elements(html).filter(el=>"data-occurrence-row"in el.attr).findIndex(el=>el.attr.id===row.attr.id);
test("rice groups species separately and all 59 scoped findings are readable without scripts", () => {
  const els=elements(renderObservations("rice",root));
  const groups=els.filter(e=>"data-analyte-group"in e.attr);
  assert.equal(groups.length,10);assert.ok(groups.some(g=>g.attr["data-analyte-group"]==="tAs"));assert.ok(groups.some(g=>g.attr["data-analyte-group"]==="iAs"));
  const rows=els.filter(e=>"data-occurrence-row"in e.attr);assert.equal(rows.length,59);assert.ok(rows.every(r=>!("hidden"in r.attr)));
  const ids=new Set(els.map(e=>e.attr.id).filter(Boolean));
  for(const toggle of els.filter(e=>"data-toggle-analyte"in e.attr)) for(const id of toggle.attr["aria-controls"].split(" "))assert.ok(ids.has(id));
});
test("non-detects retain reporting limits without invented zero concentrations", () => {
  const rows=occurrenceRows("rice",root).filter(r=>r.analyte==="U");
  const html=renderAnalyteTable(rows,"test");assert.match(html,/No detections/);assert.match(html,/Reporting limit: 1 µg\/kg/);assert.doesNotMatch(html,/>0 µg\/kg/);
});
test("international summaries retain native statistics, units, censoring and sample units without creating observations", () => {
  const rows=occurrenceRows("rice",root), summaries=rows.filter(r=>r.record_type==="source_summary");
  assert.equal(summaries.length,44);
  assert.equal(new Set(rows.map(r=>r.source)).size,12);
  const myanmar=summaries.find(r=>r.source.startsWith("myatsoe")&&r.analyte==="Cd");
  assert.equal(myanmar.reported.value,0.0056);assert.equal(myanmar.reported.unit,"mg/kg");
  assert.equal(myanmar.value,5.6);assert.equal(myanmar.statistic,"mean");
  assert.equal(myanmar.profile.samples,undefined);
  const song=summaries.find(r=>r.source.startsWith("song2017"));
  assert.equal(song.n,19786);assert.equal(song.sd,128);assert.match(song.censoring,/half-LOD/);
  const ethiopia=summaries.filter(r=>r.source.startsWith("desalew"));
  assert.ok(ethiopia.every(r=>r.n===9&&r.sampling_unit==="composite samples"&&r.value===null));
  assert.equal(ethiopia.find(r=>r.analyte==="Pb").statistic,"not_detected");
  assert.equal(ethiopia.find(r=>r.analyte==="Ni").statistic,"below_LOQ");
  for(const r of summaries)for(const v of Object.values(r.profile.variants)) {
    assert.equal(v.comparisons.time.direction,"summary");assert.equal(comparisonLevel(v.comparisons.time),null);
    assert.equal(v.median,undefined);
  }
});
test("unknown collection periods and matched FDA regions never admit unlike source rows", () => {
  const rows=occurrenceRows("rice",root),carey=rows.find(r=>r.source.startsWith("carey2020"));
  assert.ok(carey.profile.variants["::not-reported"]);
  assert.equal(carey.profile.variants["::2020"],undefined);
  assert.equal(carey.profile.variants["West::2020"],undefined);
  assert.equal(rows.filter(r=>r.profile.variants["United States::"]).length,15);
  assert.ok(rows.filter(r=>r.profile.variants["West::2020"]).every(r=>r.source.startsWith("fda")));
  const html=renderObservations("rice",root);
  assert.match(html,/data-filter-source/);assert.match(html,/>All collection scopes</);
  assert.match(html,/>Saudi Arabia</);assert.doesNotMatch(html,/United States · Saudi Arabia|FYnot-reported/);
});
test("summary source drawers expose their own methods and limits rather than FDA composite methods", () => {
  const row=occurrenceRows("rice",root).find(r=>r.source.startsWith("desalew")&&r.analyte==="Ni");
  const html=renderAnalyteTable([row],"ethiopia");
  assert.match(html,/Flame AAS/);assert.match(html,/Detected below LOQ/);assert.match(html,/27 farmer contributions/);
  assert.match(html,/No moisture, cooking-yield or species conversion/);
  assert.doesNotMatch(html,/FDA regional foods|CSV source row|Sample median:|data-shared-evidence-target|>0 µg\/kg/);
  const mercury=occurrenceRows("rice",root).filter(r=>r.source.startsWith("brombach"));
  assert.deepEqual(mercury.map(r=>r.analyte),["tHg","MeHg"]);
  assert.ok(mercury.every(r=>r.n===87&&/mixed/.test(r.food)&&/baby-rice/.test(r.limitations)));
});
test("formula shows exact prepared-for-feeding maxima and 230 samples, not 920", () => {
  const rows=occurrenceRows("formula",root);assert.deepEqual(rows.map(r=>r.max),[4.7,0.6,1.3,0.3]);
  const html=renderAnalyteTable(rows,"test");assert.match(html,/Observed maximum/);assert.match(html,/prepared for feeding/);assert.doesNotMatch(html,/920 samples/);
});
test("source links and locators belong to each finding; arbitrary source text is escaped", () => {
  const r=occurrenceRows("rice",root)[0];
  const html=renderAnalyteTable([{...r,food:'<img src=x onerror="alert(1)">'}],"test");
  assert.match(html,new RegExp(`href="../sources/${r.source}"`));assert.match(html,/source summary spreadsheet row/);
  assert.doesNotMatch(html,/<img/);assert.match(html,/&lt;img/);
});


test("public occurrence cells replace confidence with a comparison and a dataset drawer", () => {
  const html=renderObservations("rice",root);
  assert.match(html, /aria-label="About Comparison"/);
  assert.doesNotMatch(html, /Not assessed|<th scope="col">Certainty/);
  const els=elements(html);
  assert.equal(els.filter(e=>e.nodeName==="dialog").length,1);
  assert.equal(els.filter(e=>"data-open-evidence"in e.attr).length,59);
  assert.ok(els.some(e=>"data-filter-year"in e.attr));assert.ok(els.some(e=>"data-filter-comparison"in e.attr));
});

test("formula dataset methods describe independent survey-year comparisons without regional matching", () => {
  const html=renderObservations("formula",root);
  assert.match(html,/Regional and seasonal matching are unavailable/);
  assert.match(html,/Earlier survey years/);
  assert.match(html,/region not provided/);
});

test("relative position uses the reference quartiles and inclusive middle boundaries", () => {
  const make=target=>({target:{exact:true,lower:target},reference_middle50:{q1:4,q3:9}});
  assert.equal(comparisonLevel(make(3)),"low");
  for(const value of [4,5,9])assert.equal(comparisonLevel(make(value)),"moderate");
  assert.equal(comparisonLevel(make(10)),"high");
  for(const c of [null,{}, {...make(3),target:{exact:false,lower:3}}, {...make(3),reference_middle50:{q1:4,q3:4}}])assert.equal(comparisonLevel(c),null);
});
test("canonical rating labels are compact and comparison details live in the information control and drawer", () => {
  const rows=occurrenceRows("rice",root).filter(r=>r.analyte==="Cd" && r.record_type !== "source_summary");
  assert.equal(comparisonLevel(rows[0].profile.variants["::"].comparisons.time),"moderate");
  assert.equal(comparisonLevel(rows[1].profile.variants["::"].comparisons.time),"high");
  for(const r of rows) {
    const c=r.profile.variants["::"].comparisons.time;
    const html=comparisonHTML(c);
    assert.match(html,/data-open-comparison/);assert.match(html,/data-info-content/);
    assert.match(html,/hmi-level-icon/);
    assert.match(html,/>Moderate<|>High</);
    const button=elements(html).find(el=>'data-open-comparison' in el.attr);
    assert.ok(button);assert.doesNotMatch(button.attr['aria-label'],/%|reference band|Higher than|Lower than/);
    assert.match(html,/reference middle 50%/);
    assert.match(html,/not a safety or certainty grade/);
    assert.doesNotMatch(html,/hmi-comparison-detail/);
    const detail=comparisonDetailsHTML(c);assert.ok(detail.includes(c.detail));assert.ok(detail.includes(c.context));
    assert.ok(detail.includes(c.label.replace(/^[↑↓]\s*/,"")));
  }
});
test("sparse and censored references never receive invented Low Moderate High ratings", () => {
  for(const kind of ["rice","formula"])for(const row of occurrenceRows(kind,root)) {
    for(const variant of Object.values(row.profile.variants))for(const c of Object.values(variant.comparisons)) {
      if(!comparisonLevel(c))assert.doesNotMatch(comparisonHTML(c),/hmi-level-(?:high|moderate|low)"/);
    }
  }
  const mercury=occurrenceRows("formula",root).find(r=>r.analyte==="tHg");
  assert.match(comparisonHTML(mercury.profile.variants["::"].comparisons.time),/>Limits overlap</);
});
test("compact selections retain separate full details for each scoped drawer",()=>{
  const html=renderAnalyteTable(occurrenceRows("rice",root).filter(r=>r.analyte==="Cd"),"test");
  const els=elements(html),row=els.find(el=>"data-occurrence-row"in el.attr);
  const index=rowIndex(html,row),v=payloadRows(html)[index].variants["West::2020"],d=detailRows(html)[index];
  assert.match(v.comparison_html.time,/4.5 → 12/);
  assert.match(d.comparison_detail_html["West::2020"].time,/4.5 → 12/);
  assert.doesNotMatch(v.finding_html,/Reporting limit:/);
  assert.match(d.finding_detail_html["West::2020"],/Reporting limit|Basis:/);
  assert.ok(els.some(el=>el.attr["aria-label"]==="About Finding"));
});

test("scan cells retain statistic and concise basis while counts and medians remain in the drawer",()=>{
  const html=renderAnalyteTable(occurrenceRows("rice",root).filter(r=>r.analyte==="Cd"),"test");
  const els=elements(html),row=els.find(el=>"data-occurrence-row"in el.attr);
  assert.match(els.find(el=>"data-open-evidence"in el.attr).attr["aria-label"],/Cadmium, .*Rice/);
  const index=rowIndex(html,row),v=payloadRows(html)[index].variants["::"],d=detailRows(html)[index];
  assert.match(v.finding_html,/>3.1–23</);
  assert.match(v.finding_html,/Detected range/);
  assert.doesNotMatch(v.finding_html,/27\/27 detected/);
  assert.doesNotMatch(v.finding_html,/Sample median:/);
  assert.match(v.scope_html,/Cooked basis/);
  assert.match(d.finding_detail_html["::"],/27 of 27 composites detected/);
  assert.match(d.finding_detail_html["::"],/Sample median: 5.2 µg\/kg/);
  assert.match(html,/hmi-column-unit">\(µg\/kg\)/);
  assert.match(html,/<details class="hmi-mobile-column-help"><summary>About this table/);
  assert.doesNotMatch(html,/hmi-explorer-method/);
});

test("plain finding synopsis and numeric accessible names include value and interpretation scope",()=>{
  const rows=occurrenceRows("rice",root),r=rows.find(r=>r.analyte==="tAs"),v=r.profile.variants["::"];
  const summary=findingSummary(r,v);
  for(const part of ["Total arsenic",r.food,"20–75 µg/kg detected range",`${v.detected} of ${v.n} composites detected`,v.period,"Cooked, prepared-food composite","do not identify growing origins or current brands"])
    assert.ok(summary.includes(part),part);
  const html=renderAnalyteTable(rows,"test"),els=elements(html);
  assert.ok(els.some(el=>"data-result-synopsis-text"in el.attr));
  const trigger=els.find(el=>"data-open-finding"in el.attr);
  assert.ok(trigger.attr["aria-label"].includes(summary));
  const caption=els.find(el=>el.tagName==="caption");
  assert.ok(!caption.attr.class?.includes("hmi-sr-only"));
});

test("selection payload deduplicates markup and exactly restores every view without changing fallback records",()=>{
  const markup='<span data-note="a & b">Exact source <value></span>';
  const rows=[{variants:{"::":{scope_html:markup,finding_html:markup,comparison_html:{time:markup,regions:markup},n:2,unit:"composites",summary_text:"A plain sentence"}},drawer_views:{timelines:{"":{scope:"All years",html:markup}},regions:{}}}];
  const packed=packExplorerPayload(rows);
  assert.equal(packed.fragments.length,1);
  assert.deepEqual(unpackExplorerPayload(packed),rows);
  assert.throws(()=>unpackExplorerPayload({version:1,parts:[],fragments:[],rows:[{finding_html:9}]}),/Missing explorer fragment/);
  const observations=occurrenceRows("rice",root),html=renderAnalyteTable(observations,"test"),decoded=payloadRows(html),details=detailRows(html);
  assert.equal(decoded.length,59);assert.equal(details.length,59);
  const grouped=[...new Set(observations.map(r=>r.analyte))].flatMap(analyte=>observations.filter(r=>r.analyte===analyte));
  for(const [index,r] of grouped.entries())for(const key of Object.keys(r.profile.variants)) {
    assert.ok(decoded[index].variants[key].comparison_html.time);
    assert.ok(details[index].finding_detail_html[key]);
    assert.ok(details[index].drawer_views.timelines[""].html.includes(r.record_type === "source_summary" ? "Source-reported summary" : "Fiscal year"));
  }
  assert.doesNotMatch(html,/data-variants=|data-drawer-views=/);
  assert.ok(Buffer.byteLength(html)<1_700_000,"Expanded international table should retain shared payloads within 1.7 MB");
});

test("shared native methods remove repeated boilerplate while every source sample remains in fallback HTML",()=>{
  const rows=occurrenceRows("rice",root),html=renderAnalyteTable(rows,"test"),els=elements(html);
  assert.equal(els.filter(el=>"data-shared-occurrence-methods"in el.attr).length,1);
  assert.equal(els.filter(el=>"data-shared-evidence-content"in el.attr).length,1);
  assert.equal(els.filter(el=>"data-shared-evidence-target"in el.attr).length,15);
  assert.equal(els.filter(el=>el.attr.href==="#hmi-occurrence-test-methods").length,15);
  const boilerplate="FDA regional foods combine purchases from three cities";
  assert.equal(html.split(boilerplate).length-1,1);
  for(const r of rows)for(const sample of r.profile.samples || [])
    assert.ok(html.includes(`CSV source row ${sample.source_row}; ${sample.id}`),sample.id);
});

test("inert UTF-8 data roundtrips through the actual HAST-to-JSX libraries and preserves source HTML",()=>{
  const source='</script><script>alert("unsafe")</script><span>R&D > 2; 米 µg/kg — rice</span>\u2028\u2029';
  const rows=[{variants:{"::":{finding_html:source,summary_text:source}}}];
  const serialized=encodeExplorerPayload(packExplorerPayload(rows));
  assert.doesNotMatch(serialized,/[<>&\u2028\u2029]/u);
  const html=`<script type="application/octet-stream" data-explorer-payload data-encoding="base64">${serialized}</script>`;
  assert.equal(elements(html).filter(el=>el.tagName==="script").length,1);
  assert.deepEqual(payloadRows(html),rows);
  const rendered=renderToString(toJsxRuntime(fromHtml(html,{fragment:true}),{Fragment,jsx,jsxs,elementAttributeNameCase:"html"}));
  assert.equal(elements(rendered).filter(el=>el.tagName==="script").length,1);
  assert.equal(elements(rendered).find(el=>"data-explorer-payload"in el.attr)?.attr.type,"application/octet-stream");
  assert.deepEqual(payloadRows(rendered),rows);
  const browserDecoded=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(serialized),char=>char.charCodeAt(0))));
  assert.deepEqual(unpackExplorerPayload(browserDecoded),rows);
});

test("rows stay compact and complete while drawer content travels in detail chunks",()=>{
  const observations=occurrenceRows("rice",root),html=renderAnalyteTable(observations,"test"),els=elements(html);
  const rows=els.filter(el=>"data-occurrence-row"in el.attr);
  assert.equal(rows.length,59);
  const within=(el,predicate)=>{const found=[];const walk=n=>{if(n.tagName&&predicate(n))found.push(n);(n.childNodes||[]).forEach(walk);};walk(el);return found;};
  for(const row of rows) {
    assert.match(row.attr.id,/^hmi-occurrence-test-[A-Za-z_-]+-\d+$/);
    assert.equal(within(row,n=>n.attrs.some(a=>a.name==="data-comparison-state")).length,1);
    assert.equal(within(row,n=>n.attrs.some(a=>a.name==="data-evidence-content")||n.tagName==="svg"||n.tagName==="details").length,0);
    assert.equal(within(row,n=>n.attrs.some(a=>a.name==="data-open-evidence")).length,1);
    const info=within(row,n=>n.attrs.some(a=>a.value==="hmi-info-button"))[0];
    assert.ok(info&&!info.attrs.some(a=>a.name==="data-info-content"),"row explanations are deferred to the drawer chunk");
  }
  const chunks=els.filter(el=>"data-explorer-chunk"in el.attr);
  assert.equal(chunks.length,1);assert.ok("hidden"in chunks[0].attr);
  assert.equal(within(chunks[0],n=>n.attrs.some(a=>a.name==="data-evidence-content")).length,59);
  const details=detailRows(html);
  assert.ok(details.every(d=>typeof d.info==="string"&&d.info.length>10));
});

test("comparison cells keep the shared full form outside the compact table",()=>{
  const c=occurrenceRows("rice",root).find(r=>r.analyte==="Cd"&&r.record_type!=="source_summary").profile.variants["::"].comparisons.time;
  assert.match(comparisonHTML(c),/<svg class="hmi-level-icon"/);
  const compact=comparisonHTML(c,"time",{compact:true}),deferred=comparisonHTML(c,"time",{compact:true,deferInfo:true});
  assert.match(compact,/<i class="hmi-level-icon hmi-level-icon-(?:low|moderate|high)" aria-hidden="true"><\/i>/);
  assert.match(compact,/data-info-content="[^"]+"/);assert.doesNotMatch(compact,/<svg/);
  assert.doesNotMatch(deferred,/data-info-content/);
  assert.equal(compact.match(/data-comparison-state="([a-z]+)"/)[1],deferred.match(/data-comparison-state="([a-z]+)"/)[1]);
});

test("explorer chunk sizes cover every row exactly once",()=>{
  assert.equal(chunkCount(0),0);assert.equal(chunkCount(1),1);
  assert.equal(chunkCount(EXPLORER_CHUNK_ROWS),1);assert.equal(chunkCount(EXPLORER_CHUNK_ROWS+1),2);
  const encoded=encodeExplorerPayload(packExplorerPayload([{info:"x",drawer_views:{timelines:{},regions:{}}}]));
  assert.throws(()=>chunkSidecar(encoded,[]),/does not match/);
  assert.deepEqual(JSON.parse(chunkSidecar(encoded,['<div data-evidence-content><p>A</p></div>'])).evidence,['<div data-evidence-content><p>A</p></div>']);
});

test("the browser locates rows with the published chunk size, never one inferred from counts",()=>{
  const html=renderAnalyteTable(occurrenceRows("rice",root),"test");
  assert.match(html,new RegExp(`<div hidden data-explorer-details data-chunk-rows="${EXPLORER_CHUNK_ROWS}">`));
  assert.equal(chunkRows(undefined),EXPLORER_CHUNK_ROWS,"pages built before the size was published used the default");
  assert.equal(chunkRows("100"),100);
  for(const bad of ["0","-5","2.5","x"])assert.throws(()=>chunkRows(bad),/Invalid explorer chunk size/);
  // 2,349 rows (cocoa): 24 chunks, the last holding 49 rows.
  const total=2349,size=chunkRows("100");
  assert.equal(chunkCount(total,size),24);
  assert.deepEqual(Array.from({length:24},(_,k)=>chunkLength(k,total,size)).reduce((a,b)=>a+b),total);
  assert.equal(chunkLength(23,total,size),49);
  assert.deepEqual(chunkPosition(98,size),{chunk:0,offset:98});
  assert.deepEqual(chunkPosition(2348,size),{chunk:23,offset:48});
  // The retired inference would have put row 98 at the start of chunk 1.
  assert.notEqual(Math.ceil(total/24),size);
});

// Canonical grouped findings table (owner-approved cocoa mockup, 23 Oct 2026).
test("findings group by food form; spread figures fold into their central row without losing a row", async () => {
  const { cocoaOccurrence, cocoaOptions } = await import("./ingredients/cocoa/source-adapter.mjs");
  const { rows } = cocoaOccurrence(root), html = renderAnalyteTable(rows, "cocoa", cocoaOptions), els = elements(html);
  const rendered = els.filter(el => "data-occurrence-row" in el.attr), ids = new Set(rendered.map(el => el.attr.id));
  assert.equal(rendered.length, rows.length);
  assert.deepEqual([...ids].sort(), rows.map(r => r.result_id).sort());
  const folded = rendered.filter(el => "data-folded-into" in el.attr);
  assert.ok(folded.length > 0);
  for (const el of folded) {
    assert.ok("hidden" in el.attr && ids.has(el.attr["data-folded-into"]));
    const target = rendered.find(t => t.attr.id === el.attr["data-folded-into"]);
    assert.ok(!("data-folded-into" in target.attr));
    assert.equal(target.attr.id.replace(/-\d+$/, ""), el.attr.id.replace(/-\d+$/, ""));
    assert.equal(el.attr["data-reason-code"], "no_numeric_value_or_bound");
  }
  // Every unrated row keeps a reason the drawer can explain.
  for (const el of rendered.filter(el => el.attr["data-level"] === "none")) assert.ok(el.attr["data-reason-code"]);
  assert.ok(!/<small><code>/.test(html), "metal headers carry no chemical symbol");
  assert.match(html, /data-analyte-group="Cd".*?hmi-group-count">856 findings · 215 spread figures folded in</);
  assert.ok(!/Same samples:<\/span> [^<]*(?:Table \d|\|)/.test(html), "fold notes never carry source-table text");
  const heads = els.filter(el => el.attr.class === "hmi-form-group");
  assert.ok(heads.length > 10 && heads.every(h => h.attr["data-form-group"] && h.attr["data-form-label"]));
  assert.match(html, /<optgroup label="Chocolate"><option value="family:Chocolate">All chocolate<\/option>/);
});
test("form grouping is off for rows without the shared comparison contract", () => {
  const html = renderObservations("rice", root);
  assert.ok(!html.includes("hmi-form-group") && !html.includes("data-folded-into"));
});
