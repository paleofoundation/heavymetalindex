import fs from "node:fs";
import path from "node:path";
import { parseCsv } from "../../evidence/lib/csv.mjs";
import { buildProfile, formulaLODMax, riceFormComparison } from "./comparisons.mjs";
import { renderAnalyteTable } from "./analyte-table.mjs";
import { sourceOccurrenceRows } from "./source-occurrence.mjs";
import { riceHmiBaselines } from "./hmi-baseline.mjs";

export const formulaPath =
  "data/evidence/category1_formula_special_survey_samples.csv";
export const riceSamplesPath = "data/evidence/fda_tds_fy2018_2020_element_results_samples.csv";
export const ricePath =
  "data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv";
export function readCSV(base, file) {
  return parseCsv(fs.readFileSync(path.join(base, file), "utf8"));
}
export function formulaObservations(rows) {
  const selected = rows.filter(
    (r) => r.row_slug === "infant-formula-powder-non-soy",
  );
  if (!selected.length) throw Error("Missing formula observations");
  return ["tAs", "Pb", "Cd", "tHg"].map((analyte) => {
    const group = selected.filter((r) => r.metal_species === analyte);
    const seen = new Set();
    for (const r of group) {
      if (
        r.simplified_product_label !==
          "Infant Formula, Powder, Cow Milk-based" ||
        r.row_fit !== "direct_category1_row"
      )
        throw Error("Formula scope mismatch");
      if (seen.has(r.sample_number))
        throw Error("Duplicate formula sample/analyte");
      seen.add(r.sample_number);
      if (
        !["<LOD"].includes(r.reported_value) &&
        !Number.isFinite(Number(r.reported_value))
      )
        throw Error("Invalid reported concentration");
    }
    const detected = group.filter((r) => r.reported_value !== "<LOD");
    if (!group.length) throw Error(`Missing ${analyte}`);
    return {
      analyte,
      n: group.length,
      detected: detected.length,
      non_detect: group.length - detected.length,
      max: detected.length
        ? Math.max(...detected.map((r) => Number(r.reported_value)))
        : null,
      unit: "µg/kg",
      basis:
        "prepared for feeding; FDA label-specific conversion; water contribution assumed zero",
      period: "FY2023–FY2025",
      source: "fda2026-infant-formula-toxic-elements-special-survey",
      locator: `four analyte tables; cow-milk powder label; sample IDs ${group.map((r) => r.sample_number).join(",")}`,
    };
  });
}
export function riceObservations(rows) {
  const selected = rows.filter(
    (r) =>
      ["50", "402"].includes(r.tds_food_number) &&
      ["tAs", "iAs", "Cd", "Pb", "tHg", "Ni", "Cr", "U"].includes(
        r.metal_species,
      ),
  );
  const seen = new Set();
  for (const r of selected) {
    const key = r.tds_food_number + ":" + r.metal_species;
    if (seen.has(key)) throw Error("Duplicate rice food/analyte");
    seen.add(key);
    if (Number(r.n) !== Number(r.detected_n) + Number(r.non_detect_n))
      throw Error("Rice counts do not reconcile");
  }
  if (!selected.length) throw Error("Missing rice observations");
  return selected.map((r) => ({
    food: r.tds_food_description,
    food_number: r.tds_food_number,
    analyte: r.metal_species,
    n: Number(r.n),
    detected: Number(r.detected_n),
    non_detect: Number(r.non_detect_n),
    min: r.min_detected_ppb ? Number(r.min_detected_ppb) : null,
    max: r.max_detected_ppb ? Number(r.max_detected_ppb) : null,
    rl_min: Number(r.reporting_limit_min_ppb_equivalent),
    rl_max: Number(r.reporting_limit_max_ppb_equivalent),
    basis: r.basis,
    period: "FY2018–FY2020",
    unit: "µg/kg",
    source: r.source_id,
    locator: `summary food ${r.tds_food_number}; ${r.metal_species}; source summary spreadsheet row ${r.source_summary_xlsx_row}`,
    review_state: r.review_state,
  }));
}
export function table(headers, rows) {
  return [headers, headers.map(() => "---"), ...rows]
    .map(
      (row) =>
        "| " +
        row
          .map((x) => String(x ?? "Not reported").replaceAll("|", "\\|"))
          .join(" | ") +
        " |",
    )
    .join("\n");
}
const profileCache = new Map();
export function comparisonProfiles(base) {
  const files = [formulaPath, ricePath, riceSamplesPath];
  const cacheKey = path.resolve(base) + files.map(file => { const st=fs.statSync(path.join(base,file)); return `:${st.size}:${st.mtimeMs}`; }).join("");
  if(profileCache.has(cacheKey)) return profileCache.get(cacheKey);
  const riceSamples = readCSV(base,riceSamplesPath).filter(r=>["50","402"].includes(r.tds_food_number) && ["tAs","iAs","Cd","Pb","tHg","Ni","Cr","U"].includes(r.metal_species));
  const formulaSamples = readCSV(base,formulaPath).filter(r=>r.row_slug==="infant-formula-powder-non-soy");
  const profiles = {};
  for(const summary of riceObservations(readCSV(base,ricePath))) {
    const sourceRows=riceSamples.filter(r=>r.tds_food_number===summary.food_number && r.metal_species===summary.analyte);
    const samples=sourceRows.map(r=>({
      id:r.sample_id,year:r.fiscal_year,calendar_year:r.calendar_year,season:r.season,region:r.region,collection:r.collection,
      value:r.result_status==="detected"?Number(r.concentration_ppb_equivalent):null,
      lower:Number(r.concentration_lower_bound_ppb),upper:Number(r.concentration_upper_bound_ppb),limit:Number(r.reporting_limit_ppb_equivalent),
      source_row:r.source_row_number,
    }));
    const ds=samples.filter(s=>s.value!==null);
    if(samples.length!==summary.n || ds.length!==summary.detected || (ds.length && (Math.min(...ds.map(s=>s.value))!==summary.min || Math.max(...ds.map(s=>s.value))!==summary.max))) throw Error("TDS sample/summary reconciliation failed: "+summary.food_number+":"+summary.analyte);
    let paired_total;
    if(summary.analyte==="iAs" && samples.length===1) {
      const total=riceSamples.filter(r=>r.tds_food_number===summary.food_number && r.metal_species==="tAs" && r.sample_id===samples[0].id && r.result_status==="detected");
      if(total.length===1)paired_total={id:total[0].sample_id,value:Number(total[0].concentration_ppb_equivalent),source_row:total[0].source_row_number};
    }
    profiles[`${summary.food_number}:${summary.analyte}`]=buildProfile(samples,{kind:"rice",analyte:summary.analyte,unit:"composites",paired_total,source_id:summary.source,basis:summary.basis});
  }
  for(const [key,profile] of Object.entries(profiles)) {
    const [food,analyte]=key.split(':');
    const referenceFood=food==='50'?'402':'50';
    for(const [scope,variant] of Object.entries(profile.variants)) {
      const [region,year]=scope.split('::');
      variant.comparisons.forms=riceFormComparison(profile,profiles[`${referenceFood}:${analyte}`],{region,year,targetForm:food==='50'?'White rice':'Brown rice',referenceForm:food==='50'?'Brown rice':'White rice'});
    }
  }
  for(const summary of formulaObservations(formulaSamples)) {
    const samples=formulaSamples.filter(r=>r.metal_species===summary.analyte).map(r=>({
      id:r.sample_number,year:r.fiscal_year,calendar_year:null,season:"Not supplied",region:"United States",collection:null,
      value:r.reported_value==="<LOD"?null:Number(r.reported_value),
      lower:r.reported_value==="<LOD"?0:Number(r.reported_value),
      upper:r.reported_value==="<LOD"?formulaLODMax[summary.analyte]:Number(r.reported_value),
      limit:null,source_row:`${summary.analyte} table; sample ${r.sample_number}`,
    }));
    profiles[`formula:${summary.analyte}`]=buildProfile(samples,{kind:"formula",analyte:summary.analyte,unit:"samples",lod_upper:formulaLODMax[summary.analyte]});
  }
  profileCache.clear();profileCache.set(cacheKey,profiles);return profiles;
}
export function occurrenceRows(kind, base) {
  const formula = kind === "formula";
  const profiles = comparisonProfiles(base);
  const rows = formula ? formulaObservations(readCSV(base, formulaPath)) : riceObservations(readCSV(base, ricePath)).filter((r) => kind === "rice" || r.analyte === "Cd");
  const sampleRows = rows.map((r) => ({
    ...r,
    food: formula ? "Cow-milk infant formula, powder" : r.food,
    region: "United States", region_type: "Collection market",
    display_basis: formula ? "Prepared for feeding (FDA label-specific conversion)" : "Cooked, prepared-food composite",
    statistic: formula ? "maximum" : "detected_range",sampling_unit: formula ? "samples" : "composites",
    source_label: formula ? "FDA infant formula special survey, FY2023–FY2025" : "FDA Total Diet Study, FY2018–FY2020",
    primary_url: formula ? "https://www.fda.gov/media/192124/download?attachment=" : "https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results",
    limitations: formula
      ? "Different products and sample counts were tested in each fiscal year. The table supplies no collection region or ingredient origin. FDA's label-specific prepared-for-feeding conversion assumes no metal contribution from preparation water. Trace numerical results may be below LOQ."
      : "Regional results are prepared-food composites from collection markets, not growing origins or individual brands. Fiscal-year coverage is uneven. Matched comparisons retain common region/season strata, with equal stratum weight. Different sampled composites are not a longitudinal panel or a demonstrated population trend.",
    scope_key: `${r.source}:${formula ? "cow-milk-powder" : r.food_number}:${r.analyte}:US:${r.period}:${r.basis}`,
    profile: profiles[`${formula ? "formula" : r.food_number}:${r.analyte}`],
  }));
  // Country-level selection includes the full US subset; subregions keep their
  // existing region × season comparisons and never admit another source.
  if (kind === "rice") for (const row of sampleRows) {
    row.profile = { ...row.profile, variants: { ...row.profile.variants } };
    for (const [key, view] of Object.entries(row.profile.variants))
      if (key.startsWith("::")) row.profile.variants[`United States${key}`] = view;
  }
  return kind === "rice" ? riceHmiBaselines([...sampleRows, ...sourceOccurrenceRows(base)],base).rows : sampleRows;
}

export function renderObservations(kind, base, options) {
  return renderAnalyteTable(occurrenceRows(kind, base), kind, options);
}

export { renderControls } from "./mitigation-table.mjs";
