import fs from "node:fs"
import path from "node:path"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""

const actionQueuePath = path.join(repoRoot, "data/evidence/hmtc_standards_action_queue.csv")
const outputPath = path.join(repoRoot, "data/evidence/ai_adjudication_queue.csv")
const summaryOutputPath = path.join(repoRoot, "data/evidence/ai_adjudication_summary.json")

const actionRows = fs.existsSync(actionQueuePath) ? parseCsv(fs.readFileSync(actionQueuePath, "utf8")) : []
const filteredRows = productFilter
  ? actionRows.filter((row) => row.product_slug === productFilter)
  : actionRows

const adjudicationRows = filteredRows
  .map((row) => buildAdjudicationRow(row))
  .sort(adjudicationSort)
  .map((row, index) => ({ ...row, adjudication_order: index + 1 }))

writeCsv(outputPath, adjudicationRows, [
  "adjudication_order",
  "priority",
  "machine_task",
  "action_type",
  "product_slug",
  "product_label",
  "product_standard_scope",
  "product_review_state",
  "metal_species",
  "source_ids",
  "hmtc_standard_percentile_target",
  "hmtc_standard_statistic",
  "aggregate_hmtc_percentile_status",
  "required_decisions",
  "input_artifacts",
  "guardrails",
  "expected_outputs",
  "confidence_gate",
  "human_exception_trigger",
  "blocks_public_claims",
  "blocks_hmtc_threshold",
  "next_command",
  "notes",
])

const summary = {
  generated_at: new Date().toISOString(),
  product_filter: productFilter || "all",
  total_adjudication_rows: adjudicationRows.length,
  by_priority: countBy(adjudicationRows, (row) => row.priority),
  by_machine_task: countBy(adjudicationRows, (row) => row.machine_task),
  by_aggregate_status: countBy(adjudicationRows, (row) => row.aggregate_hmtc_percentile_status),
  by_standard_percentile_target: countBy(adjudicationRows, (row) => row.hmtc_standard_percentile_target),
  public_claim_blockers: adjudicationRows.filter((row) => row.blocks_public_claims === "true").length,
  hmtc_threshold_blockers: adjudicationRows.filter((row) => row.blocks_hmtc_threshold === "true").length,
  human_role:
    "source retrieval, low-confidence exception review, policy-conflict resolution, and final governance approval",
  top_adjudications: adjudicationRows.slice(0, 12).map((row) => ({
    adjudication_order: row.adjudication_order,
    priority: row.priority,
    machine_task: row.machine_task,
    product_slug: row.product_slug,
    metal_species: row.metal_species,
  })),
}
writeStableJsonSummary(summaryOutputPath, summary)

console.log(
  `Wrote ${adjudicationRows.length} AI adjudication rows to ${path.relative(repoRoot, outputPath)}`,
)
console.log(`Wrote AI adjudication summary to ${path.relative(repoRoot, summaryOutputPath)}`)

function buildAdjudicationRow(row) {
  const plan = planForActionType(row.action_type)
  const sourceIds = sourceTokens(row.action_sources)
  const artifacts = inputArtifactsFor(row, sourceIds)
  const guardrails = unique([universalGuardrails(), row.guardrails, plan.guardrails]).join(" ")

  return {
    adjudication_order: 0,
    priority: row.action_priority,
    machine_task: plan.machineTask,
    action_type: row.action_type,
    product_slug: row.product_slug,
    product_label: row.product_label,
    product_standard_scope: row.product_standard_scope,
    product_review_state: row.product_review_state,
    metal_species: row.metal_species,
    source_ids: sourceIds.join("; "),
    hmtc_standard_percentile_target: row.hmtc_standard_percentile_target,
    hmtc_standard_statistic: row.hmtc_standard_statistic,
    aggregate_hmtc_percentile_status: row.aggregate_hmtc_percentile_status,
    required_decisions: withTargetDecision(plan.requiredDecisions, row),
    input_artifacts: artifacts.join("; "),
    guardrails,
    expected_outputs: plan.expectedOutputs,
    confidence_gate: plan.confidenceGate,
    human_exception_trigger: plan.humanExceptionTrigger,
    blocks_public_claims: publicClaimsBlocked(row, plan) ? "true" : "false",
    blocks_hmtc_threshold: hmtcThresholdBlocked(row, plan) ? "true" : "false",
    next_command: nextCommandFor(row, plan),
    notes: unique([row.evidence_needed, row.next_step, row.notes]).join(" "),
  }
}

function planForActionType(actionType) {
  switch (actionType) {
    case "review-local-candidate-values":
      return {
        machineTask: "validate_and_promote_local_candidate_rows",
        requiredDecisions: baseDecisions(),
        expectedOutputs:
          "approved candidate rows, context dispositions, or extraction-block records; regenerated routing, gap, and page outputs",
        confidenceGate:
          "Promote only when the source table, product row, basis, species, unit, statistic, N, and censoring treatment are traceable with >=0.90 confidence.",
        humanExceptionTrigger:
          "confidence below gate; contradictory source labels; policy conflict; public threshold candidate; material uncertainty in source provenance",
        guardrails:
          "Candidate rows are machine work products until promoted through the evidence register.",
      }
    case "review-tds-product-routes":
      return {
        machineTask: "adjudicate_tds_food_to_product_routes",
        requiredDecisions:
          "TDS food identity; product row fit; basis; analyte species; small-N suitability; routeability; Evidence Fitness; public-use boundary",
        expectedOutputs:
          "promoted TDS occurrence rows, route rejections, or product-route gap records; no silent route drops",
        confidenceGate:
          "Promote only when the TDS food maps to a locked product row and species/basis are explicit with >=0.90 confidence.",
        humanExceptionTrigger:
          "ambiguous food name; mixed product class; small-N value proposed for threshold use; policy conflict",
        guardrails:
          "TDS route candidates are not standards evidence until adjudicated and promoted.",
      }
    case "extract-local-source-values":
      return {
        machineTask: "extract_local_source_to_structured_rows",
        requiredDecisions: baseDecisions(),
        expectedOutputs:
          "structured candidate values or a context disposition for every relevant source/product/metal route",
        confidenceGate:
          "Accept extraction only when source numbers and labels are directly traceable; otherwise write a blocked extraction task.",
        humanExceptionTrigger:
          "source file missing; table unreadable; unit conversion uncertainty; row-fit confidence below 0.90",
        guardrails:
          "Use the local source first and preserve unresolved data as candidate, disposition, or gap records.",
      }
    case "resolve-species-specific-gap":
      return {
        machineTask: "discover_or_route_species_specific_source",
        requiredDecisions:
          "exact analyte species; product row fit; basis; source provenance; routeability; whether related total-species rows must remain separate",
        expectedOutputs:
          "species-specific structured rows, a source-discovery gap, or a documented not-routeable disposition",
        confidenceGate:
          "Close the species gap only when the source reports the exact requested species and routeable product/basis with >=0.90 confidence.",
        humanExceptionTrigger:
          "no accessible source after search; species conflict; threshold candidate ready for governance approval",
        guardrails:
          "Related total-species rows are context only and cannot substitute for species-specific evidence.",
      }
    case "confirm-local-pdf-match":
      return {
        machineTask: "verify_pdf_provenance_before_extraction",
        requiredDecisions:
          "title match; author/year match; DOI or agency identifier; source-page match; local-file provenance; extraction readiness",
        expectedOutputs:
          "confirmed PDF route with extraction task, rejected match record, or retrieval gap",
        confidenceGate:
          "Proceed only when the local file identity matches the source page with >=0.95 confidence.",
        humanExceptionTrigger:
          "multiple plausible PDFs; no DOI or stable agency identifier; scanned file requires manual retrieval",
        guardrails: "Candidate PDF matches are not evidence.",
      }
    case "find-source-document":
      return {
        machineTask: "retrieve_source_document_or_record_gap",
        requiredDecisions:
          "source identity; retrieval status; license/access status; provenance; whether source can support product evidence",
        expectedOutputs:
          "raw source preserved with provenance, or a persistent source-discovery gap",
        confidenceGate:
          "Do not extract until the actual source document is available or an official table is available.",
        humanExceptionTrigger:
          "paywalled or unavailable source; retrieval requires Karen or institutional access",
        guardrails:
          "Citation metadata alone cannot support public claims or standards evidence.",
      }
    case "find-or-route-fit-source-evidence":
      return {
        machineTask: "find_or_route_fit_product_evidence",
        requiredDecisions: baseDecisions(),
        expectedOutputs:
          "new routeable source evidence, a product/metal gap, or an explicit reason existing sources are not fit evidence",
        confidenceGate:
          "Route only if product scope, species, basis, and statistic type are explicit enough for reproducible adjudication.",
        humanExceptionTrigger:
          "no accessible source; product definition conflict; governance decision needed for row inclusion",
        guardrails:
          "Missing data must remain visible as a gap rather than disappearing from the queue.",
      }
    case "find-fit-source-after-context-only-review":
      return {
        machineTask: "find_replacement_fit_source_after_context_disposition",
        requiredDecisions:
          "why existing context source is not fit evidence; exact evidence needed; replacement source routeability; public-use boundary",
        expectedOutputs:
          "replacement fit-source evidence or a documented closed gap retaining context-only source trace",
        confidenceGate:
          "Do not reopen context-only evidence unless a new table-level reading changes the row-fit decision with >=0.90 confidence.",
        humanExceptionTrigger:
          "context source appears policy-critical; conflicting route decisions across product pages",
        guardrails:
          "Context-only rows cannot be recycled into standards evidence without a new adjudication trace.",
      }
    case "find-sample-level-or-percentile-evidence":
      return {
        machineTask: "locate_sample_level_or_reported_percentile_data",
        requiredDecisions:
          "whether source provides sample-level values, source-reported percentiles, or only summary/range evidence; basis; species; censoring",
        expectedOutputs:
          "distribution-capable rows, documented percentile extraction, or summary-only disposition",
        confidenceGate:
          "Mark distribution-capable only when sample values or explicitly reported percentiles are present and traceable.",
        humanExceptionTrigger:
          "only summary values available but threshold pressure is high; deterministic percentile method proposed",
        guardrails:
          "Means, medians, ranges, and maxima do not create p90 or p95 values by themselves.",
      }
    case "find-second-distribution-capable-source":
      return {
        machineTask: "find_second_fit_distribution_source",
        requiredDecisions:
          "source independence; product row fit; basis comparability; species match; distribution capability; aggregation readiness",
        expectedOutputs:
          "additional distribution-capable evidence or a single-source blocker retained in the standards gap report",
        confidenceGate:
          "Advance aggregate math only after at least two fit distribution-capable sources are available or governance explicitly approves an exception.",
        humanExceptionTrigger:
          "single source is proposed as sufficient; source independence or comparability is contested",
        guardrails:
          "A single distribution-capable source is loaded evidence, not the aggregate HMTc threshold.",
      }
    case "review-evidence-fitness":
      return {
        machineTask: "adjudicate_evidence_fitness",
        requiredDecisions: baseDecisions(),
        expectedOutputs:
          "Evidence Fitness verdict with traceable caveats, or demotion to candidate/context-only status",
        confidenceGate:
          "Promote only if row fit, basis, species, unit, statistic type, and censoring are explicitly documented.",
        humanExceptionTrigger:
          "borderline EF verdict; high-impact product row; source contradiction",
        guardrails:
          "Pending-tier and machine-extracted evidence stay out of public claims until promoted.",
      }
    case "complete-local-backlog-before-aggregate-math":
      return {
        machineTask: "complete_pending_extractions_before_math",
        requiredDecisions:
          "which pending local sources can materially change the aggregate; extraction status; row fit; basis/species/statistic fit",
        expectedOutputs:
          "completed local extraction, context disposition, or documented exclusion before aggregate math",
        confidenceGate:
          "Run aggregate math only after material pending local sources are resolved or explicitly deferred.",
        humanExceptionTrigger:
          "deferment affects a near-threshold result or conflicts with governance rules",
        guardrails:
          "Do not publish aggregate standards percentiles while unresolved fit-source rows may materially change the result.",
      }
    case "run-aggregate-math-review":
      return {
        machineTask: "run_aggregate_math_readiness_check",
        requiredDecisions:
          "basis harmonization; censoring method; source independence; product comparability; regulatory ceiling; confidence interval; governance boundary",
        expectedOutputs:
          "standards-decision draft, math-blocker record, or governance-approval packet",
        confidenceGate:
          "A machine math packet can be prepared when inputs are traceable, but final HMTc threshold approval is a governance decision.",
        humanExceptionTrigger:
          "any proposed HMTc threshold, regulatory conflict, brand impact, or confidence below governance target",
        guardrails:
          "Readiness is not a final public HMTc value.",
      }
    default:
      return {
        machineTask: "adjudicate_standards_gap",
        requiredDecisions: baseDecisions(),
        expectedOutputs:
          "structured evidence, context disposition, source-discovery gap, or standards-decision blocker",
        confidenceGate:
          "Proceed only when every required decision is traceable and reproducible.",
        humanExceptionTrigger:
          "low confidence, missing source, policy conflict, or final threshold decision",
        guardrails:
          "Keep unresolved evidence out of public claims and standards math.",
      }
  }
}

function baseDecisions() {
  return "product row fit; basis; analyte species; unit; statistic type; N; censoring/non-detect handling; Evidence Fitness; routeability; public-use boundary"
}

function universalGuardrails() {
  return "Do not infer p50, p90, or p95 unless source-reported or deterministically documented; clean benchmark rows use clean-platform P90 as the standards target; contaminated-platform rows use the governance-selected lower-tail target, P10 by default or P20 only when explicitly selected; do not calculate dirty P90 or clean P10 as HMTc limit-setting targets; final HMTc values must not exceed the lowest applicable loaded regulatory cap; keep total arsenic separate from inorganic arsenic; keep total mercury separate from methylmercury; keep wet, dry, as-sold, prepared, and reconstituted bases separate; do not promote pending-tier evidence into public claims."
}

function withTargetDecision(decisions, row) {
  const target = targetLabel(row)
  const statistic = row.hmtc_standard_statistic || "row-standard statistic"
  return `${decisions}; HMTc row-standard target (${target}; ${statistic}) versus source-context-only percentiles`
}

function targetLabel(row) {
  if (row.hmtc_standard_percentile_target === "dirty_p20") return "contaminated-platform P20"
  if (row.hmtc_standard_percentile_target === "dirty_p10") return "contaminated-platform P10"
  if (row.hmtc_standard_percentile_target === "clean_p90") return "clean-platform P90"
  if (row.hmtc_standard_percentile_target === "independent_p90") return "independent-row P90"
  return "not applicable"
}

function inputArtifactsFor(row, sourceIds) {
  const artifacts = [
    "data/evidence/hmtc_standards_action_queue.csv",
    "data/evidence/hmtc_standards_gap_report.csv",
  ]

  if (sourceIds.length > 0) {
    artifacts.push(...sourceIds.map((sourceId) => `wiki/sources/${sourceId}.md`))
  }
  if (row.candidate_sources) artifacts.push("data/evidence/local_reingest_candidate_values.csv")
  if (row.local_extract_sources) artifacts.push("data/evidence/local_reingest_queue.csv")
  if (row.context_disposition_sources) {
    artifacts.push("data/evidence/local_reingest_context_dispositions.csv")
  }
  if (row.candidate_pdf_match_sources) artifacts.push("data/evidence/local_reingest_queue.csv")
  if (row.missing_source_routes) artifacts.push("data/evidence/local_reingest_queue.csv")
  if (row.tds_product_route_foods || row.action_type === "review-tds-product-routes") {
    artifacts.push("data/evidence/fda_tds_product_route_candidates.csv")
  }

  return unique(artifacts)
}

function publicClaimsBlocked() {
  return true
}

function hmtcThresholdBlocked() {
  return true
}

function nextCommandFor(row) {
  if (row.suggested_command) return row.suggested_command
  if (row.product_slug) return `npm run evidence:show-results -- --product ${row.product_slug}`
  return "npm run evidence:standards-gaps"
}

function adjudicationSort(left, right) {
  const priorityCompare = priorityRank(left.priority) - priorityRank(right.priority)
  if (priorityCompare !== 0) return priorityCompare
  const taskCompare = left.machine_task.localeCompare(right.machine_task)
  if (taskCompare !== 0) return taskCompare
  const productCompare = left.product_label.localeCompare(right.product_label)
  if (productCompare !== 0) return productCompare
  return left.metal_species.localeCompare(right.metal_species)
}

function priorityRank(priority) {
  if (priority === "P0") return 0
  if (priority === "P1") return 1
  if (priority === "P2") return 2
  if (priority === "P3") return 3
  return 9
}

function sourceTokens(value) {
  return String(value || "")
    .split(";")
    .map((token) => token.trim())
    .filter(Boolean)
}

function countBy(rows, keyFn) {
  const counts = {}
  for (const row of rows) {
    const key = keyFn(row)
    if (!key) continue
    counts[key] = (counts[key] || 0) + 1
  }
  return counts
}

function parseArgs(argv) {
  const parsed = new Map()
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (!arg.startsWith("--")) continue
    const [key, inlineValue] = arg.slice(2).split("=", 2)
    const value = inlineValue ?? argv[index + 1]
    parsed.set(key, value)
    if (inlineValue === undefined) index += 1
  }
  return parsed
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const next = text[index + 1]

    if (quoted && char === '"' && next === '"') {
      field += '"'
      index += 1
      continue
    }
    if (char === '"') {
      quoted = !quoted
      continue
    }
    if (!quoted && char === ",") {
      row.push(field)
      field = ""
      continue
    }
    if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") index += 1
      row.push(field)
      rows.push(row)
      row = []
      field = ""
      continue
    }
    field += char
  }

  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }

  const [headers = [], ...body] = rows.filter((line) => line.some((cell) => cell !== ""))
  return body.map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])))
}

function writeCsv(filePath, rows, headers) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(
    filePath,
    `${headers.join(",")}\n${rows.map((row) => headers.map((header) => csvCell(row[header])).join(",")).join("\n")}\n`,
    "utf8",
  )
}

function csvCell(value) {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n;]/.test(text)) return text
  return `"${text.replace(/"/g, '""')}"`
}

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}
