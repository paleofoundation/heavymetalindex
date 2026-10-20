import fs from "node:fs";
import path from "node:path";
import { reportedFormComparison, categoryMeanReference } from './comparisons.mjs';

export const riceOccurrencePath = "data/evidence/contracts/pilot-2026-10-17/rice-depth/occurrence-findings.json";

// These are reported summaries, never pseudo-samples for the FDA comparison engine.
export function sourceOccurrenceRows(base) {
  const register = JSON.parse(fs.readFileSync(path.join(base, riceOccurrencePath), "utf8"));
  const seen = new Set();
  const rows = register.studies.flatMap(study => study.findings.map(finding => {
    const n = finding.n ?? study.n;
    const factor = { "µg/kg": 1, "mg/kg": 1000, "µg/45g dry rice":1000/45 }[finding.original_unit];
    if (!factor || !Number.isInteger(n) || n < 1 || !study.locator || !study.method || !study.censoring || !study.overlap)
      throw Error(`Incomplete source occurrence: ${study.source}`);
    if (!["mean", "median", "reported_range", "below_LOQ", "not_detected"].includes(finding.statistic))
      throw Error(`Unknown occurrence statistic: ${finding.statistic}`);
    for (const key of ["value", "sd", "min", "max"])
      if (finding[key] != null && (!Number.isFinite(finding[key]) || finding[key] < 0)) throw Error(`Invalid occurrence ${key}`);
    if (["mean", "median"].includes(finding.statistic) && finding.value == null) throw Error("Summary value missing");
    if (finding.statistic === "reported_range" && !(finding.min <= finding.max)) throw Error("Summary range missing");
    const scope_key = `${study.source}:${finding.food}:${finding.analyte}`;
    if (seen.has(scope_key)) throw Error(`Duplicate source occurrence: ${scope_key}`);
    seen.add(scope_key);
    const comparison = {
      direction: "summary", label: "Source summary",
      detail: "No matched reference",
      context: "This source reports a separate material and sampling frame. No cross-study ranking, time change or reference quartile is calculated.",
    };
    const period = study.collection_period || "Collection period not reported";
    const periodKey = study.collection_period || "not-reported";
    const variant = { n, region: study.region, period, comparisons: { time: comparison, regions: comparison, forms: {kind:'food_form',direction:'unavailable',label:'No same-study rice-type comparison',detail:'This row retains the source result.',context:'No compatible rice-type comparison has been extracted for this source and analyte. A different source or mixed-product range is not a matched rice-type reference.'} } };
    return {
      ...study, ...finding, n, record_type: "source_summary", unit: "µg/kg", period,
      display_basis: study.basis, scope_key,
      reported: { statistic: finding.statistic, value: finding.value, sd: finding.sd ?? null, min: finding.min ?? null, max: finding.max ?? null, unit: finding.original_unit, range_text: finding.reported_range ?? null },
      conversion: { factor, from: finding.original_unit, to: "µg/kg", method: factor === 1 ? "No conversion" : finding.original_unit === "µg/45g dry rice" ? "Rounded µg per 45 g dry rice × 1000/45 = approximate µg/kg dry weight; no moisture or cooking conversion" : "Unit conversion only: mg/kg × 1000 = µg/kg; no moisture or cooking conversion" },
      value: finding.value == null ? null : Math.round(finding.value * factor * 1e6)/1e6,
      sd: finding.sd == null ? null : finding.sd * factor,
      min: finding.min == null ? null : finding.min * factor,
      max: finding.max == null ? null : finding.max * factor,
      profile: {
        kind: "source_summary", regions: [study.region], years: [periodKey],
        variants: { "::": variant, [`${study.region}::`]: variant, [`::${periodKey}`]: variant, [`${study.region}::${periodKey}`]: variant },
      },
    };
  }));
  // A declared, verified design and named reference are required. Same-source
  // names alone cannot establish comparability or an isolated cultivar effect.
  for(const row of rows.filter(r=>r.comparison_design && r.comparison_reference)) {
    const peers=rows.filter(r=>r.source===row.source&&r.analyte===row.analyte&&r.comparison_design?.kind===row.comparison_design.kind);
    const peer=peers.find(r=>r.food===row.comparison_reference);
    const comparison=reportedFormComparison(row,peer,{targetForm:row.food,referenceForm:peer?.food,design:row.comparison_design});
    if(row.comparison_design.kind==='unpaired_categories') {
      Object.assign(comparison,categoryMeanReference(row,peers));
      comparison.peers=peers.map(r=>({food:r.food,value:r.value,n:r.n,approximate:true}));
      comparison.detail=`${row.food} mean: ${row.reported.value}; ${peer.food} mean: ${peer.reported.value} µg per 45 g dry rice. Approximate converted concentrations: ${Number(row.value.toPrecision(2))} versus ${Number(peer.value.toPrecision(2))} µg/kg dry weight.`;
    }
    row.profile={...row.profile,variants:Object.fromEntries(Object.entries(row.profile.variants).map(([scope,view])=>[scope,{...view,comparisons:{...view.comparisons,forms:comparison}}]))};
  }
  return rows;
}
