import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { parseFragment } from "parse5";
import { root } from "./generate.mjs";
import {
  interventionRecords,
  renderControls,
  effectHTML,
  controlComparisons,
} from "./pilot/mitigation-table.mjs";
import { magnitudeBand, assessEffectMagnitude, validateMagnitudeAssessments } from './pilot/mitigation-magnitude.mjs';

test("irrigation conversions and endpoint directions reproduce primary arm means", () => {
  const [r] = interventionRecords("metal", root);
  assert.equal(r.outcomes.length, 6);
  for (const o of r.outcomes) {
    assert.ok(Math.abs(o.start - o.source_start * 1000) < 1e-10);
    assert.ok(Math.abs(o.end - o.source_end * 1000) < 1e-10);
    assert.ok(
      Math.abs(o.relative_percent - (100 * (o.end - o.start)) / o.start) <
        1e-10,
    );
    assert.equal(o.direction, o.analyte === "Cd" ? "higher" : "lower");
    assert.equal(o.uncertainty_definition, "standard deviation");
    assert.match(o.locator, /Year [12].*Flood and Nonflood/);
  }
  assert.deepEqual(
    r.outcomes.filter((o) => o.analyte === "Cd").map((o) => [o.start, o.end]),
    [
      [4.7, 74],
      [4.6, 120],
    ],
  );
});
test("ingredient controls group by production stage without splitting paired outcomes", () => {
  const records = interventionRecords("ingredient", root);
  const comparisons = controlComparisons(records);
  assert.equal(comparisons.length, 11);
  assert.equal(new Set(comparisons.map(x => x.r.id)).size, records.length);
  assert.equal(comparisons.reduce((n,x) => n + x.outcomes.length, 0), 15);
  const irrigation = comparisons.filter(x => x.r.id === "rice-irrigation-limmer2024");
  assert.equal(irrigation.length, 2);
  for (const x of irrigation) {
    assert.equal(x.group, "agronomic");
    assert.deepEqual(new Set(x.outcomes.map(o => o.analyte)), new Set(["Cd", "tAs", "iAs"]));
    assert.equal(new Set(x.outcomes.map(o => o.period)).size, 1);
  }
  assert.equal(comparisons.find(x => x.r.id === "rice-cooking-carey2015").group, "manufacturing");
  assert.ok(comparisons.filter(x => x.group === "consumer").every(x => x.r.evidence_kind === "guidance"));
  const html = renderControls("ingredient", root);
  for (const group of ["agronomic", "manufacturing", "consumer"]) assert.ok(html.includes(`data-mitigation-group="${group}"`));
  assert.match(html,/data-analyte="Cd tAs iAs"/);
  assert.equal((html.match(/data-open-effect /g)||[]).length,15);
  assert.match(html,/colspan="4"/);
  assert.doesNotMatch(html,/data-label="Considerations"|data-open-considerations/);
});
test("ingredient filters and status collapse independently of the no-script findings", () => {
  const tree=parseFragment(renderControls('ingredient',root));
  const has=(node,name)=>node.attrs?.some(a=>a.name===name);
  const all=(node,predicate)=>[...(predicate(node)?[node]:[]),...(node.childNodes||[]).flatMap(n=>all(n,predicate))];
  const [panel]=all(tree,n=>has(n,'data-mitigation-filters'));
  assert.equal(panel.tagName,'details');
  assert.ok(has(panel,'hidden'));
  assert.ok(!has(panel,'open'));
  assert.equal(all(panel,n=>has(n,'data-mitigation-filter')).length,4);
  assert.equal(all(panel,n=>has(n,'data-reset-mitigation')).length,1);
  assert.equal(all(panel,n=>has(n,'data-mitigation-status')).length,1);
  assert.equal(all(panel,n=>has(n,'data-mitigation-row')).length,0);
  assert.equal(all(tree,n=>has(n,'data-mitigation-row')&&!has(n,'hidden')).length,11);
});
test("sample unit, repeated seasons and source families never inflate study counts", () => {
  const records = interventionRecords("ingredient", root);
  assert.equal(
    new Set(
      records
        .filter((r) => r.evidence_kind === "dataset")
        .map((r) => r.dataset_family),
    ).size,
    5,
  );
  const html = renderControls("ingredient", root);
  assert.doesNotMatch(html, /hmi-explorer-intro|hmi-explorer-description|hmi-supply-chain-path|hmi-audience-cards|data-mitigation-audience=/);
  assert.match(html, /3 mesocosms per arm; repeated seasons/);
  assert.match(html, /12 rice samples; 6 of each form/);
  assert.doesNotMatch(html, />36 independent|>7 independent/);
});
test("filtering Cd cannot remove visible linked arsenic trade-offs", () => {
  const tree = parseFragment(renderControls("metal", root));
  const rows = [];
  const visit = (n) => {
    if (
      n.tagName === "tr" &&
      n.attrs.some((a) => a.name === "data-mitigation-row")
    )
      rows.push(n);
    (n.childNodes || []).forEach(visit);
  };
  visit(tree);
  const text = (n) =>
    (n.nodeName === "#text" ? n.value : "") +
    (n.childNodes || []).map(text).join("");
  for (const row of rows.filter(
    (n) =>
      n.attrs.some(
        (a) =>
          a.name === "id" && a.value.includes("rice-irrigation-limmer2024"),
      ) && n.attrs.some((a) => a.name === "data-analyte" && a.value === "Cd"),
  )) {
    assert.match(text(row), /iAs Decreased/);
    assert.match(text(row), /tAs Decreased/);
  }
});
test("cooking retains unresolved uncertainty without invented absolute or Cd effects", () => {
  const c = interventionRecords("ingredient", root)[1];
  assert.equal(c.outcomes.length, 1);
  const o = c.outcomes[0];
  assert.equal(o.analyte, "iAs");
  assert.equal(o.start, null);
  assert.equal(o.end, null);
  assert.match(o.effect_label, /57 ± 5%.*source-reported/);
  assert.match(c.uncertainty, /do not define/);
  assert.match(c.nutrition_quality_yield, /not 12:1/);
  assert.ok(c.extraction_gaps.every((g) => g.field && g.next_action));
  assert.deepEqual(interventionRecords("product", root), []);
  assert.equal(renderControls("product", root), "");
});
test("all mitigation rows have no-script disclosures, document icons and scoped modal triggers", () => {
  for (const [family, n] of [
    ["ingredient", 11],
    ["metal", 7],
  ]) {
    const html = renderControls(family, root);
    assert.equal((html.match(/data-mitigation-row /g) || []).length, n);
    assert.equal((html.match(/data-open-mitigation /g) || []).length, n);
    assert.equal((html.match(/<div data-evidence-content>/g) || []).length, n);
    assert.equal((html.match(/class="hmi-dataset-icon"/g) || []).length, n);
    assert.match(html, /<dialog .*aria-modal="true"/);
    assert.match(html, /Original means \(SD\)/);
    assert.match(html, /Total As versus iAs analytical recovery discrepancy/);
  }
});
test("the primary supplement is preserved and reviewed scientific inputs are pinned", () => {
  const review = JSON.parse(
    fs.readFileSync(
      path.join(root, "data/evidence/contracts/pilot-2026-10-17/review.json"),
    ),
  );
  assert.ok(
    review.input_pins.some((p) => p.file.endsWith("/interventions.json")),
  );
  const extraction = fs.readFileSync(
    path.join(
      root,
      "data/evidence/contracts/pilot-2026-10-17/limmer2024-supplement-extraction.txt",
    ),
    "utf8",
  );
  assert.match(
    extraction,
    /Ripe Grain \| 0.0047 \(0.0025\)c.*0.074 \(0.0119\)a/,
  );
  assert.match(extraction, /Asi \| 0.122 \(0.009\)a.*0.083 \(0.007\)c/);
});

test("audience controls cover distinct supply-chain levers and preserve evidence types", () => {
  const records = interventionRecords("ingredient", root);
  const controls = (role) => records.filter((r) => r.audiences.includes(role));
  assert.ok(controls("supplier").some((r) => r.stage === "soil remediation"));
  assert.ok(controls("brand").some((r) => r.stage === "product formulation"));
  assert.ok(controls("consumer").some((r) => r.stage === "dietary exposure"));
  assert.ok(controls("consumer").every((r) => r.evidence_kind === "guidance"));
  assert.ok(
    !controls("consumer").some((r) => r.id === "rice-cooking-carey2015"),
  );
  const html = renderControls("ingredient", root);
  assert.match(html, /Agronomic levers/);
  assert.match(html, /data-mitigation-filter="control-group"/);
  assert.match(html, /1 guidance/);
  assert.match(html, /1 context source/);
  const survey = records.find((r) => r.id === "rice-formulation-carey2018");
  assert.equal(survey.outcomes[0].direction, "context");
  assert.match(survey.outcomes[0].comparison, /not a controlled/);
});

test("mitigation shows magnitude separately from direction and retains exact estimates in context",()=>{
  const r=interventionRecords("metal",root)[0],o=r.outcomes[0];
  const compact=effectHTML(o),detail=effectHTML(o,true);
  assert.match(compact,/data-open-effect/);assert.match(compact,/hmi-level-button/);
  assert.match(compact,/About this effect/);assert.match(compact,/>High</);
  assert.match(compact,/1474.5%/);
  assert.doesNotMatch(compact.split("</button>")[0],/1474.5%/);
  assert.match(compact,/hmi-level-high"/);
  assert.match(compact,/Cadmium: Increased/);
  assert.match(compact,/editorial magnitude bands/);
  assert.doesNotMatch(compact.split("</button>")[0],/Flood 4.7/);
  assert.match(detail,/Increased/);assert.match(detail,/Flood 4.7 → Nonflood 74/);
  const html=renderControls("ingredient",root);
  assert.match(html,/aria-label="About Effects"/);
  assert.match(html,/hmi-mobile-column-help/);
});

test("magnitude bands handle boundary values, missing estimates and adverse increases",()=>{
  for(const [percent,level] of [[null,null],[NaN,null],[0,null],[-1,null],[24.99,'low'],[25,'moderate'],[49.99,'moderate'],[50,'high'],[2508.7,'high']])assert.equal(magnitudeBand(percent),level);
  const irrigation=interventionRecords('ingredient',root).find(r=>r.id==='rice-irrigation-limmer2024');
  for(const outcome of irrigation.outcomes) {
    const magnitude=assessEffectMagnitude(outcome,irrigation.id);
    assert.equal(magnitude.direction,outcome.direction);
    assert.equal(magnitude.level,outcome.analyte==='Cd'?'high':'moderate');
  }
  assert.equal(assessEffectMagnitude({direction:'lower',start:null,end:null}).label,'Not quantified');
  assert.equal(assessEffectMagnitude({direction:'context',start:66,end:10}).label,'Context');
  assert.throws(()=>assessEffectMagnitude({direction:'lower',start:1,end:2}),/direction/);
});

test("source-reported ranges and qualitative descriptions retain their distinct basis",()=>{
  const records=interventionRecords('ingredient',root);
  const assessed=id=>{const record=records.find(r=>r.id===id);return assessEffectMagnitude(record.outcomes[0],id);};
  assert.equal(assessed('rice-cooking-carey2015').level,'high');
  assert.match(assessed('rice-cooking-carey2015').basis,/central estimate only/);
  const range=assessed('rice-consumer-cooking-fda');
  assert.equal(range.label,'Moderate–High');
  assert.equal(range.level,null);
  assert.deepEqual(range.percent_range,[40,60]);
  const qualitative=assessed('rice-rinsing-limit-fda');
  assert.equal(qualitative.level,'low');
  assert.equal(qualitative.qualitative,true);
  assert.equal(qualitative.percent_range,undefined);
  assert.match(qualitative.basis,/no percentage or species-specific iAs reduction/);
  const changed=structuredClone(records);
  changed.find(r=>r.id==='rice-cooking-carey2015').outcomes[0].effect_label='Uncertain estimate';
  assert.throws(()=>validateMagnitudeAssessments(changed),/Stale/);
});

test("minimal mitigation cells retain all operating context in the row sidebar",()=>{
  const record=interventionRecords("metal",root)[0];
  const tree=parseFragment(renderControls("metal",root));
  const find=(node,predicate)=>predicate(node)?node:(node.childNodes||[]).map(n=>find(n,predicate)).find(Boolean);
  const row=find(tree,n=>n.tagName==="tr"&&n.attrs.some(a=>a.name==="id"&&a.value.endsWith("rice-irrigation-limmer2024-0")));
  const cells=row.childNodes.filter(n=>n.tagName==="td");
  const text=n=>(n.nodeName==="#text"?n.value:"")+(n.childNodes||[]).map(text).join("");
  const scan=cells.slice(0,4).map(text).join(" ");
  assert.doesNotMatch(scan,/Verify:|HMI-derived|Water at|3 mesocosms|Evaluate irrigation/);
  assert.match(scan,/tAs Decreased/);assert.match(scan,/iAs Decreased/);assert.doesNotMatch(scan,/%/);
  const sidebar=text(cells[4]);
  for(const field of ["action_summary","material","conditions_summary","tested_scale","unit_summary","tradeoff_summary","verification_summary"])assert.ok(sidebar.includes(record[field]),field);
});
