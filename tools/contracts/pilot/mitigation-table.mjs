import fs from "node:fs";
import path from "node:path";
import {
  analyteNames,
  escapeHTML as e,
  datasetIcon,
  directionIcon,
  infoButton,
  resultButton,
  levelIcon,
  columnHeader,
  mobileColumnHelp,
} from "./analyte-table.mjs";
import { assessEffectMagnitude, effectDirectionLabel, magnitudeExplanation, magnitudeMethod, validateMagnitudeAssessments } from './mitigation-magnitude.mjs';

const audienceNames = {
  supplier: "Ingredient suppliers",
  brand: "Brands",
  consumer: "Consumers",
};
const evidenceLabel = (r) =>
  ({
    dataset: "1 dataset",
    guidance: "1 guidance",
    context: "1 context source",
  })[r.evidence_kind];
const heading = (text) =>
  `<p class="hmi-drawer-section-title" role="heading" aria-level="3">${e(text)}</p>`;
const p = (text) => `<p>${e(text)}</p>`;
const grid = (headers, rows) =>
  `<div class="hmi-drawer-table"><table><thead><tr>${headers.map((x) => `<th scope="col">${e(x)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((x) => `<td>${e(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

export function effectHTML(outcome, detailed = false, magnitude = assessEffectMagnitude(outcome)) {
  if (!detailed) {
    const note=`${magnitudeExplanation(magnitude)} ${outcome.effect_label}. ${outcome.endpoint}. ${outcome.comparison}. ${outcome.basis}. Open for all linked outcomes and uncertainty.`;
    const context=`${magnitude.display_analyte || analyteNames[outcome.analyte] || outcome.analyte}: ${effectDirectionLabel(magnitude.direction)}${magnitude.qualitative?' (qualitative)':''}`;
    return `<span class="hmi-comparison-controls"${magnitude.percent_range&&!magnitude.level?' data-effect-range':''}>${resultButton(magnitude.label,{level:magnitude.level||'unknown',icon:levelIcon(magnitude.level),kind:'effect',context})}${infoButton('About this effect',note)}</span>`;
  }
  const label = { higher: "Increased", lower: "Decreased" }[outcome.direction];
  const badge = label
    ? `<span class="hmi-direction-badge hmi-comparison-${outcome.direction}">${directionIcon(outcome.direction)}<span><strong class="hmi-direction-label">${label}</strong><span class="hmi-comparison-value">${e(outcome.effect_label)}</span></span></span>`
    : `<strong>${e(outcome.effect_label)}</strong>`;
  return `${badge}<span class="hmi-comparison-detail">${e(outcome.endpoint)}</span><span class="hmi-comparison-detail">${e(outcome.comparison)}</span><span class="hmi-comparison-detail hmi-row-note">${e(outcome.basis)}</span><span class="hmi-comparison-detail hmi-row-note"><strong>${e(magnitude.label)}${magnitude.qualitative?' (qualitative)':''}</strong> · ${e(magnitude.basis)}</span>`;
}

export function interventionRecords(family, base) {
  if (!["ingredient", "metal"].includes(family)) return [];
  const page =
    family === "ingredient"
      ? "wiki/ingredients/rice.md"
      : "wiki/metals/cadmium.md";
  const data = JSON.parse(
    fs.readFileSync(
      path.join(
        base,
        "data/evidence/contracts/pilot-2026-10-17/interventions.json",
      ),
      "utf8",
    ),
  );
  if (data.version !== 2)
    throw Error("Mitigation requires reviewed version 2 inputs");
  const records = data.records.filter((r) => r.dependent_pages.includes(page));
  for (const r of records) {
    if (
      !r.audiences?.length ||
      !evidenceLabel(r) ||
      !r.action_summary ||
      !r.dataset_family ||
      !r.outcomes?.length ||
      !r.review?.record_ref ||
      !r.extraction_gaps?.every((g) => g.field && g.next_action)
    )
      throw Error(`Incomplete mitigation provenance: ${r.id}`);
    for (const o of r.outcomes) {
      if (!o.locator || !o.basis || !o.comparison || !o.endpoint)
        throw Error(`Incomplete endpoint: ${r.id}`);
      if (o.start !== null && o.end !== null) {
        if (!(o.start > 0) || !Number.isFinite(o.end))
          throw Error("Invalid intervention measurement");
        if (
          (o.end > o.start ? "higher" : o.end < o.start ? "lower" : "same") !==
          o.direction
        )
          throw Error("Intervention direction disagrees with measurements");
      }
    }
  }
  return records;
}

function evidence(r, selected) {
  const selectedOutcomes = Array.isArray(selected) ? selected : [selected];
  const selectedPeriod = selectedOutcomes[0].period;
  const outcomes = r.outcomes.map((o) => [
    `${analyteNames[o.analyte] || o.analyte} (${o.analyte})`,
    o.period || r.duration,
    o.effect_label,
    o.start === null
      ? "Numerical baseline not extracted"
      : `${o.start} → ${o.end} ${o.unit}`,
    o.source_start === undefined
      ? "Absolute values unextracted"
      : `${o.source_start} (${o.start_sd}) → ${o.source_end} (${o.end_sd}) ${o.source_unit}; mean (SD), n=3`,
    o.basis,
    o.locator,
  ]);
  const renderEffect=o=>effectHTML(o,true,assessEffectMagnitude(o,r.id));
  return `<div data-evidence-content><p class="hmi-dataset-title">${e(r.source_label)}</p><p><a href="../sources/${e(r.source_id)}" class="internal" data-slug="sources/${e(r.source_id)}">HMI source record</a> · <a href="${e(r.primary_url)}">Original source</a>${r.supplement_url ? ` · <a href="${e(r.supplement_url)}">Source tables</a>` : ""}</p>${p(r.evidence_kind === "dataset" ? "One dataset family. Linked analytes, repeated seasons and reports are not independent studies." : r.evidence_kind === "guidance" ? "Official guidance; not an independent experimental dataset. Reused across actions without adding studies." : "Contextual literature cited by this report; not a new intervention dataset.")}${heading(Array.isArray(selected) ? "Effects and comparators" : "Selected effect and comparator")}<div class="hmi-selected-result">${Array.isArray(selected) ? selectedOutcomes.map(o => `<p><strong>${e(analyteNames[o.analyte] || o.analyte)}</strong>${renderEffect(o)}</p>`).join("") : renderEffect(selected)}</div>${p(r.comparator)}${heading("How magnitude is classified")}${p(magnitudeMethod)}${heading("Control in context")}${p(r.action_summary)}${grid(["Context", "Selected control"],[["Material",r.material],["Stage",r.stage],["Audience",r.audiences.map(a=>audienceNames[a]).join(" · ")],["Period",selectedPeriod||r.duration],["Conditions",r.conditions_summary],["Tested scale",r.tested_scale],["Sample units",r.unit_summary],["Trade-offs",r.tradeoff_summary],["Verification",r.verification_summary]])}${heading("Design, applicability and operating conditions")}${p(r.design + ". " + r.conditions)}${p(r.replication)}${p(r.duration)}${p(r.mechanism)}${heading("Source measurements and linked outcomes")}${grid(["Analyte", "Period", "Effect", "Converted values", "Original means (SD)", "Basis", "Locator"], outcomes)}${p(r.uncertainty)}${p(r.calculation)}${p(r.basis_yield_mass_balance)}${heading("Trade-offs and implementation")}${p(r.other_contaminants)}${p(r.nutrition_quality_yield)}${p(r.waste_destination)}${p(r.cost_status)}${p(r.commercial_feasibility)}${heading("Applicability and verification")}${p(r.applicability)}${p(r.verification)}${p(r.method)}${heading("Extraction limits and next actions")}${grid(
    ["Unresolved field", "Next action"],
    r.extraction_gaps.map((g) => [g.field, g.next_action]),
  )}${heading("Provenance and assessment")}${p(r.funding_coi)}${p("Source facts and HMI calculations are distinguished above. These selected source findings do not constitute a systematic review; outcome-level appraisal remains incomplete.")}</div>`;
}

const controlGroups = [
  { id: "agronomic", label: "Agronomic levers", stages: ["cultivation", "soil remediation"] },
  { id: "manufacturing", label: "Manufacturing levers and controls", stages: ["sourcing and procurement", "grain processing", "product formulation", "lot acceptance and release", "food preparation"] },
  { id: "consumer", label: "Consumer controls", stages: ["home preparation", "dietary exposure"] },
];

// One comparison keeps every jointly measured outcome. Analyte filters select
// comparisons, never discard a paired adverse effect from the selected row.
export function controlComparisons(records) {
  return records.flatMap(r => {
    const group = controlGroups.find(g => g.stages.includes(r.stage));
    if (!group) throw Error(`Unmapped control stage: ${r.stage}`);
    return [...new Set(r.outcomes.map(o => o.period || r.duration))].map((period, i) => ({
      r, period, group: group.id, id: `mitigation-ingredient-${r.id}-${i}`,
      outcomes: r.outcomes.filter(o => (o.period || r.duration) === period),
    }));
  });
}

function renderIngredientControls(records) {
  const rows = controlComparisons(records), prefix = "mitigation-ingredient";
  const labels = ["Control", "Material", "Effects", "Evidence"];
  const notes = {
    Control: "Controls are grouped by where they are applied: agronomic, manufacturing or consumer. Each row retains one control and comparison period; repeated seasons do not add independent studies.",
    Material: "The tested grain or food. Exact cultivar, preparation, conditions, sample units and experimental scale remain in the evidence drawer.",
    Effects: `${magnitudeMethod} All measured analytes for this control and period stay together, including adverse changes. Select an effect for its estimate, comparator, residual concentrations, uncertainty and methods.`,
    Evidence: "Dataset, Guidance and Context identify different evidence types. A source reused across controls or seasons is not an additional independent study.",
  };
  const analytes = [...new Set(rows.flatMap(x => x.outcomes.map(o => o.analyte)))];
  const filters = [
    ["control-group", "Control level", controlGroups.map(g => [g.id,g.label]), "All control levels"],
    ["analyte", "Analyte", analytes.map(a => [a,`${analyteNames[a] || a} (${a})`]), "All analytes"],
    ["material", "Material", [...new Set(records.map(r => r.material_filter))].map(x => [x,x]), "All materials"],
    ["scale", "Tested scale", [...new Set(records.map(r => r.tested_scale))].map(x => [x,x]), "All tested scales"],
  ];
  const groups = controlGroups.map(group => {
    const members = rows.filter(x => x.group === group.id);
    if (!members.length) return "";
    return `<tbody data-mitigation-group="${group.id}"><tr class="hmi-analyte-group"><th colspan="${labels.length}"><button type="button" data-toggle-mitigation aria-expanded="true" aria-controls="${members.map(x=>x.id).join(" ")}"><span class="hmi-group-arrow" aria-hidden="true">⌄</span>${group.label}<span class="hmi-group-count"></span></button></th></tr>${members.map(({r,period,id,outcomes}) => {
      const effects = outcomes.map(o => {
        const magnitude=assessEffectMagnitude(o,r.id);
        return `<div class="hmi-control-effect"><span class="hmi-row-note">${e(magnitude.display_analyte || o.analyte)} · ${e(effectDirectionLabel(magnitude.direction))}${magnitude.qualitative?' (qualitative)':''}</span>${effectHTML(o,false,magnitude)}</div>`;
      }).join("");
      const cells = [
        `<strong>${e(r.control)}</strong><span class="hmi-row-note">${e(r.stage)}${period !== "Source-specific finding" ? ` · ${e(period)}` : ""}</span>`,
        e(r.material_filter), effects,
        `<details class="hmi-cell-details"><summary data-open-mitigation aria-haspopup="dialog" aria-controls="${prefix}-drawer" data-evidence-kind="${e(r.evidence_kind)}" aria-label="Open ${e(evidenceLabel(r))} for ${e(r.control)}, ${e(period)}"><span class="hmi-evidence-count">${datasetIcon}<span>${r.evidence_kind === "dataset" ? "1" : r.evidence_kind === "guidance" ? "Guidance" : "Context"}</span></span></summary>${evidence(r,outcomes)}</details>`,
      ];
      return `<tr id="${id}" data-mitigation-row data-control-id="${e(r.id)}" data-control-group="${group.id}" data-audience="${e(r.audiences.join(" "))}" data-analyte="${e(outcomes.map(o=>o.analyte).join(" "))}" data-material="${e(r.material_filter)}" data-scale="${e(r.tested_scale)}">${cells.map((c,i)=>`<td data-label="${labels[i]}">${c}</td>`).join("")}</tr>`;
    }).join("")}</tbody>`;
  }).join("");
  return `<div class="hmi-analyte-explorer hmi-mitigation-explorer" data-mitigation-explorer data-control-grouping="stage"><details class="hmi-explorer-filters" data-mitigation-filters hidden><summary>Filter findings</summary><div class="hmi-explorer-controls" data-mitigation-controls hidden>${filters.map(([key,label,options,all])=>`<label for="${prefix}-${key}">${label}<select id="${prefix}-${key}" data-mitigation-filter="${key}"><option value="">${all}</option>${options.map(([value,text])=>`<option value="${e(value)}">${e(text)}</option>`).join("")}</select></label>`).join("")}<button type="button" data-reset-mitigation>Reset</button></div><p class="hmi-explorer-status" role="status" aria-live="polite" data-mitigation-status>${rows.length} control comparisons</p></details>${mobileColumnHelp(notes)}<table class="hmi-analyte-table hmi-mitigation-table"><caption class="hmi-sr-only">Controls by production stage, retaining all paired analyte outcomes. Seasons and reused guidance do not add independent studies. No effectiveness ranking is implied.</caption><thead><tr>${labels.map(x=>columnHeader(x,notes[x])).join("")}</tr></thead>${groups}</table><p data-mitigation-empty hidden>No matching controls in this selected evidence. This is a coverage boundary, not proof that no control exists. Change or reset the filters.</p><dialog class="hmi-evidence-drawer" id="${prefix}-drawer" aria-labelledby="${prefix}-title" aria-modal="true"><header class="hmi-drawer-header"><div><p class="hmi-drawer-title" id="${prefix}-title" role="heading" aria-level="2" data-mitigation-drawer-title>Intervention evidence</p><p data-drawer-subtitle></p></div><button type="button" data-close-mitigation aria-label="Close intervention evidence">×</button></header><div class="hmi-drawer-body" data-drawer-body></div></dialog></div>`;
}

export function renderControls(family, base) {
  const records = interventionRecords(family, base).sort(
    (a, b) => a.chain_order - b.chain_order,
  );
  if (!records.length) return "";
  validateMagnitudeAssessments(records);
  if (family === "ingredient") return renderIngredientControls(records);
  const prefix = `mitigation-${family}`;
  const rows = records.flatMap((r) =>
    r.outcomes.map((outcome, i) => ({
      r,
      outcome,
      id: `${prefix}-${r.id}-${i}`,
    })),
  );
  const analytes = [...new Set(rows.map((x) => x.outcome.analyte))];
  const audienceOptions = [...new Set(records.flatMap((r) => r.audiences))];
  const labels = [
    "Control",
    "Material",
    "Effect",
    "Linked effects",
    "Evidence",
  ];
  const columnNotes = {
    "Control":"Intervention, supply-chain stage and study period. Audience, action guidance and operating details are in the sidebar. Repeated periods from one experiment are not independent datasets.",
    "Material":"Material tested. The sidebar identifies the exact cultivar or formulation, operating conditions, sample units, tested scale and measurement basis.",
    "Effect":`${magnitudeMethod} Select the button for starting and ending measurements, uncertainty and methods.`,
    "Linked effects":"Paired analyte changes from the same intervention and period remain visible when filtering. tAs means total arsenic; iAs means inorganic arsenic. A dash means no paired analyte estimate is recorded. Practical trade-offs, uncertainty and verification are in the sidebar.",
    Evidence:"Numbers count datasets; Guidance and Context identify other source types. Select a source to inspect its design, measurements, uncertainty and provenance. Dataset, guidance and context sources are labelled separately; repeated rows do not add studies.",
  };
  const filters = [
    ["audience", "For", audienceOptions.map((a) => [a, audienceNames[a]])],
    [
      "analyte",
      "Analyte",
      analytes.map((a) => [a, `${analyteNames[a] || a} (${a})`]),
    ],
    [
      "stage",
      "Stage",
      [...new Set(records.map((r) => r.stage))].map((x) => [x, x]),
    ],
    [
      "material",
      "Material",
      [...new Set(records.map((r) => r.material_filter))].map((x) => [x, x]),
    ],
    [
      "scale",
      "Tested scale",
      [...new Set(records.map((r) => r.tested_scale))].map((x) => [x, x]),
    ],
  ];
  const groups = analytes
    .map(
      (a) =>
        `<tbody data-mitigation-group="${e(a)}"><tr class="hmi-analyte-group"><th colspan="5"><button type="button" data-toggle-mitigation aria-expanded="true" aria-controls="${rows
          .filter((x) => x.outcome.analyte === a)
          .map((x) => x.id)
          .join(
            " ",
          )}"><span class="hmi-group-arrow" aria-hidden="true">⌄</span>${e(analyteNames[a] || a)} <code>${e(a)}</code><span class="hmi-group-count"></span></button></th></tr>${rows
          .filter((x) => x.outcome.analyte === a)
          .map(({ r, outcome: o, id }) => {
            const linked = r.outcomes.filter(
              (x) => x !== o && x.period === o.period,
            );
            const linkedEffects = linked
              .map(
                (x) =>
                  `<span class="hmi-linked-effect">${e(x.analyte)} ${e({higher:'Increased',lower:'Decreased'}[x.direction]||'Context only')}</span>`,
              )
              .join("");
            const cells = [
              `<strong>${e(r.control)}</strong><span class="hmi-row-note">${e(r.stage)}${o.period && o.period!=="Source-specific finding"?` · ${e(o.period)}`:""}</span>`,
              `<span>${e(r.material_filter)}</span>`,
              `<span class="hmi-row-note">${e(effectDirectionLabel(o.direction))}</span>${effectHTML(o,false,assessEffectMagnitude(o,r.id))}`,
              linkedEffects || `<span class="hmi-row-note" aria-label="No paired analyte result in this record">—</span>`,
              `<details class="hmi-cell-details"><summary data-open-mitigation aria-haspopup="dialog" aria-controls="${prefix}-drawer" data-evidence-kind="${e(r.evidence_kind)}" aria-label="Open ${e(evidenceLabel(r))} for ${e(r.control)}, ${e(o.analyte)}, ${e(o.period || r.duration)}"><span class="hmi-evidence-count">${datasetIcon}<span>${r.evidence_kind==="dataset"?"1":r.evidence_kind==="guidance"?"Guidance":"Context"}</span></span></summary>${evidence(r, o)}</details>`,
            ];
            return `<tr id="${id}" data-mitigation-row data-audience="${e(r.audiences.join(" "))}" data-analyte="${e(a)}" data-stage="${e(r.stage)}" data-material="${e(r.material_filter)}" data-scale="${e(r.tested_scale)}">${cells.map((c, i) => `<td data-label="${labels[i]}">${c}</td>`).join("")}</tr>`;
          })
          .join("")}</tbody>`,
    )
    .join("");
  return `<div class="hmi-analyte-explorer hmi-mitigation-explorer" data-mitigation-explorer><div class="hmi-explorer-controls" data-mitigation-controls hidden>${filters.map(([key, label, options]) => `<label for="${prefix}-${key}">${label}<select id="${prefix}-${key}" data-mitigation-filter="${key}"><option value="">${{ audience: "All audiences", analyte: "All analytes", stage: "All stages", material: "All materials", scale: "All tested scales" }[key]}</option>${options.map(([value, text]) => `<option value="${e(value)}">${e(text)}</option>`).join("")}</select></label>`).join("")}<button type="button" data-reset-mitigation>Reset</button></div><p class="hmi-explorer-status" role="status" aria-live="polite" data-mitigation-status>${rows.length} outcome findings</p>${mobileColumnHelp(columnNotes)}<table class="hmi-analyte-table hmi-mitigation-table"><caption class="hmi-sr-only">Separate experiments, regimes and seasons retain their own comparator. Repeated rows do not add independent datasets. No effectiveness ranking is implied.</caption><thead><tr>${labels.map((x) => columnHeader(x,columnNotes[x])).join("")}</tr></thead>${groups}</table><p data-mitigation-empty hidden>No matching controls in this selected evidence. This is a coverage boundary, not proof that no control exists. Change or reset the filters.</p><dialog class="hmi-evidence-drawer" id="${prefix}-drawer" aria-labelledby="${prefix}-title" aria-modal="true"><header class="hmi-drawer-header"><div><p class="hmi-drawer-title" id="${prefix}-title" role="heading" aria-level="2" data-mitigation-drawer-title>Intervention evidence</p><p data-drawer-subtitle></p></div><button type="button" data-close-mitigation aria-label="Close intervention evidence">×</button></header><div class="hmi-drawer-body" data-drawer-body></div></dialog></div>`;
}
