import fs from "node:fs"
import path from "node:path"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""

const gapPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const outputPath = path.join(repoRoot, "data/evidence/hmtc_standards_action_queue.csv")
const summaryOutputPath = path.join(repoRoot, "data/evidence/hmtc_standards_action_summary.json")

const gapRows = fs.existsSync(gapPath) ? parseCsv(fs.readFileSync(gapPath, "utf8")) : []
const filteredGapRows = productFilter ? gapRows.filter((row) => row.product_slug === productFilter) : gapRows

const groups = new Map()
for (const row of filteredGapRows) {
  const aggregateStatus = row.aggregate_hmtc_percentile_status
  const action = actionForStatus(aggregateStatus)
  if (!action) continue

  const key = [
    action.priority,
    action.type,
    row.product_slug,
    aggregateStatus,
    row.hmtc_standard_percentile_target,
  ].join("::")

  if (!groups.has(key)) {
    groups.set(key, {
      action_priority: action.priority,
      action_type: action.type,
      product_slug: row.product_slug,
      product_label: row.product_label || readableSlug(row.product_slug),
      product_standard_scope: row.product_standard_scope,
      product_review_state: row.product_review_state,
      hmtc_standard_percentile_target: row.hmtc_standard_percentile_target,
      hmtc_standard_statistic: row.hmtc_standard_statistic,
      aggregate_hmtc_percentile_status: aggregateStatus,
      metal_species: [],
      loaded_source_count: 0,
      loaded_n: 0,
      loaded_row_count: 0,
      local_candidate_value_count: 0,
      context_disposition_count: 0,
      tds_product_route_candidate_count: 0,
      pending_local_extract_source_count: 0,
      candidate_pdf_match_count: 0,
      missing_pdf_count: 0,
      candidate_sources: [],
      local_extract_sources: [],
      context_disposition_sources: [],
      candidate_pdf_match_sources: [],
      missing_source_routes: [],
      tds_product_route_foods: [],
      evidence_needed: row.evidence_needed,
      next_step: action.nextStep(row),
      suggested_command: `npm run evidence:show-results -- --product ${row.product_slug}`,
      guardrails: action.guardrails,
      notes: [],
    })
  }

  const group = groups.get(key)
  group.metal_species.push(row.metal_species)
  group.loaded_source_count += numeric(row.loaded_source_count)
  group.loaded_n += numeric(row.loaded_n)
  group.loaded_row_count += numeric(row.loaded_row_count)
  group.local_candidate_value_count += numeric(row.local_candidate_value_count)
  group.context_disposition_count += numeric(row.context_disposition_count)
  group.tds_product_route_candidate_count += numeric(row.tds_product_route_candidate_count)
  group.pending_local_extract_source_count += numeric(row.pending_local_extract_source_count)
  group.candidate_pdf_match_count += numeric(row.candidate_pdf_match_count)
  group.missing_pdf_count += numeric(row.missing_pdf_count)
  group.candidate_sources.push(...sourceTokens(row.local_candidates_to_review))
  group.local_extract_sources.push(...sourceTokens(row.local_papers_to_extract))
  group.context_disposition_sources.push(...sourceTokens(row.context_dispositions))
  group.candidate_pdf_match_sources.push(...sourceTokens(row.candidate_pdf_matches_to_review))
  group.missing_source_routes.push(...sourceTokens(row.papers_to_find))
  group.tds_product_route_foods.push(...sourceTokens(row.tds_product_route_foods))
  if (row.notes) group.notes.push(row.notes)
}

const actionRows = [...groups.values()]
  .map((row, index) => finalizeActionRow(row, index + 1))
  .sort(actionSort)
  .map((row, index) => ({ ...row, action_order: index + 1 }))

writeCsv(outputPath, actionRows, [
  "action_order",
  "action_priority",
  "action_type",
  "product_slug",
  "product_label",
  "product_standard_scope",
  "product_review_state",
  "hmtc_standard_percentile_target",
  "hmtc_standard_statistic",
  "aggregate_hmtc_percentile_status",
  "metal_species",
  "loaded_source_count",
  "loaded_n",
  "loaded_row_count",
  "local_candidate_value_count",
  "context_disposition_count",
  "tds_product_route_candidate_count",
  "pending_local_extract_source_count",
  "candidate_pdf_match_count",
  "missing_pdf_count",
  "action_sources",
  "candidate_sources",
  "local_extract_sources",
  "context_disposition_sources",
  "candidate_pdf_match_sources",
  "missing_source_routes",
  "tds_product_route_foods",
  "evidence_needed",
  "next_step",
  "suggested_command",
  "guardrails",
  "notes",
])

const summary = {
  generated_at: new Date().toISOString(),
  product_filter: productFilter || "all",
  total_action_rows: actionRows.length,
  by_action_priority: countBy(actionRows, (row) => row.action_priority),
  by_action_type: countBy(actionRows, (row) => row.action_type),
  by_aggregate_status: countBy(actionRows, (row) => row.aggregate_hmtc_percentile_status),
  by_standard_percentile_target: countBy(actionRows, (row) => row.hmtc_standard_percentile_target),
  top_actions: actionRows.slice(0, 12).map((row) => ({
    action_order: row.action_order,
    action_priority: row.action_priority,
    action_type: row.action_type,
    product_slug: row.product_slug,
    metal_species: row.metal_species,
  })),
}
writeStableJsonSummary(summaryOutputPath, summary)

console.log(`Wrote ${actionRows.length} HMTc standards action rows to ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote HMTc standards action summary to ${path.relative(repoRoot, summaryOutputPath)}`)

function actionForStatus(status) {
  switch (status) {
    case "BLOCKED: local candidate review pending":
      return {
        priority: "P0",
        type: "review-local-candidate-values",
        nextStep: () =>
          "Review candidate rows against the source table, product fit, basis, species, unit, and N; promote only after review.",
        guardrails:
          "Candidate rows are non-public review inputs. Do not publish or use for HMTc standards math until reviewed and promoted; do not infer p90/p95.",
      }
    case "BLOCKED: TDS product route review pending":
      return {
        priority: "P0",
        type: "review-tds-product-routes",
        nextStep: () =>
          "Review FDA TDS food-to-product route candidates for product scope, basis, small-N limits, and analyte species.",
        guardrails:
          "TDS route candidates are not standards evidence until promoted. Keep total arsenic separate from inorganic arsenic and total mercury separate from methylmercury.",
      }
    case "BLOCKED: local extraction pending":
      return {
        priority: "P0",
        type: "extract-local-source-values",
        nextStep: () =>
          "Extract the local source into structured candidate rows with N, basis, unit, species, and usable source-reported statistics.",
        guardrails:
          "Use the local PDF first. Preserve source data in a candidate or disposition row; do not silently drop unresolved findings.",
      }
    case "BLOCKED: species-specific evidence missing":
      return {
        priority: "P1",
        type: "resolve-species-specific-gap",
        nextStep: (row) => `Find or route ${row.metal_species} evidence for this exact product row; related total-species rows cannot substitute.`,
        guardrails:
          "Do not substitute total arsenic for inorganic arsenic, total mercury for methylmercury, or total chromium for Cr-VI.",
      }
    case "BLOCKED: PDF match review pending":
      return {
        priority: "P1",
        type: "confirm-local-pdf-match",
        nextStep: () => "Confirm fuzzy local PDF matches, then extract only confirmed source/page matches.",
        guardrails:
          "Candidate PDF matches are not evidence. Confirm provenance before extraction or promotion.",
      }
    case "BLOCKED: source document missing":
      return {
        priority: "P1",
        type: "find-source-document",
        nextStep: () => "Find the local PDF or retrieve a web copy before attempting extraction.",
        guardrails:
          "Do not create public claims from citation metadata alone; preserve the source document and provenance first.",
      }
    case "BLOCKED: no structured evidence loaded":
      return {
        priority: "P2",
        type: "find-or-route-fit-source-evidence",
        nextStep: () => "Search local/raw evidence first, then source discovery, and route fit-source values to this product/metal row.",
        guardrails:
          "Create or update the source page and routing record before public synthesis. Missing data must remain visible as a gap.",
      }
    case "BLOCKED: documented local sources are context-only":
      return {
        priority: "P2",
        type: "find-fit-source-after-context-only-review",
        nextStep: () =>
          "Use the context disposition as a closed route, then find a better fit-source product occurrence dataset or paper.",
        guardrails:
          "Do not reuse documented context-only rows as standards evidence unless a new table review changes the disposition.",
      }
    case "BLOCKED: summary evidence only":
      return {
        priority: "P2",
        type: "find-sample-level-or-percentile-evidence",
        nextStep: () =>
          "Find sample-level data or explicitly reported percentiles; retain mean/median/max rows as context until then.",
        guardrails:
          "Do not infer p50, p90, or p95 from means, ranges, IQRs, or max values unless a deterministic method is documented.",
      }
    case "DO NOT PUBLISH CLEAN P90: single distribution-capable source":
    case "DO NOT PUBLISH DIRTY P10: single distribution-capable source":
    case "DO NOT PUBLISH INDEPENDENT P90: single distribution-capable source":
      return {
        priority: "P2",
        type: "find-second-distribution-capable-source",
        nextStep: (row) =>
          `Find or route at least one additional fit distribution-capable source before aggregate HMTc ${targetLabel(row)} publication.`,
        guardrails:
          "A single distribution-capable source can remain loaded evidence, but it is not the aggregate HMTc threshold.",
      }
    case "BLOCKED: evidence fitness review needed":
      return {
        priority: "P3",
        type: "review-evidence-fitness",
        nextStep: () => "Review row fit, basis, censoring, and Evidence Fitness before any standards calculation.",
        guardrails:
          "Keep pending-tier and machine-extracted evidence out of public claims until reviewed.",
      }
    case "PENDING: aggregate math after local extraction":
      return {
        priority: "P3",
        type: "complete-local-backlog-before-aggregate-math",
        nextStep: () => "Finish pending local extraction, then run aggregate math review.",
        guardrails:
          "Do not publish aggregate standards percentiles while unresolved local fit-source rows may materially change the result.",
      }
    case "READY FOR AGGREGATE MATH REVIEW":
      return {
        priority: "P3",
        type: "run-aggregate-math-review",
        nextStep: () => "Review basis harmonization, censoring, row fit, and source weights before standards publication.",
        guardrails:
          "Readiness is not a final value; standards decisions still require review and approval.",
      }
    default:
      return null
  }
}

function finalizeActionRow(row) {
  const candidateSources = unique(row.candidate_sources).sort()
  const localExtractSources = unique(row.local_extract_sources).sort()
  const contextDispositionSources = unique(row.context_disposition_sources).sort()
  const candidatePdfMatchSources = unique(row.candidate_pdf_match_sources).sort()
  const missingSourceRoutes = unique(row.missing_source_routes).sort()

  return {
    ...row,
    metal_species: unique(row.metal_species).sort(metalSort).join("; "),
    action_sources: actionSourcesFor(row, {
      candidateSources,
      localExtractSources,
      contextDispositionSources,
      candidatePdfMatchSources,
      missingSourceRoutes,
    }).join("; "),
    candidate_sources: candidateSources.join("; "),
    local_extract_sources: localExtractSources.join("; "),
    context_disposition_sources: contextDispositionSources.join("; "),
    candidate_pdf_match_sources: candidatePdfMatchSources.join("; "),
    missing_source_routes: missingSourceRoutes.join("; "),
    tds_product_route_foods: unique(row.tds_product_route_foods).sort().join("; "),
    notes: unique(row.notes).join(" "),
  }
}

function actionSourcesFor(row, sources) {
  if (row.action_type === "review-local-candidate-values") return sources.candidateSources
  if (row.action_type === "extract-local-source-values") return sources.localExtractSources
  if (row.action_type === "find-fit-source-after-context-only-review") return sources.contextDispositionSources
  if (row.action_type === "confirm-local-pdf-match") return sources.candidatePdfMatchSources
  if (row.action_type === "find-source-document") return sources.missingSourceRoutes
  if (row.action_type === "review-tds-product-routes") return ["fda2022-tds-elements-fy2018-fy2020"]
  return unique([
    ...sources.candidateSources,
    ...sources.localExtractSources,
    ...sources.candidatePdfMatchSources,
    ...sources.missingSourceRoutes,
  ]).sort()
}

function actionSort(left, right) {
  const priorityCompare = priorityRank(left.action_priority) - priorityRank(right.action_priority)
  if (priorityCompare !== 0) return priorityCompare
  const typeCompare = left.action_type.localeCompare(right.action_type)
  if (typeCompare !== 0) return typeCompare
  const productCompare = left.product_label.localeCompare(right.product_label)
  if (productCompare !== 0) return productCompare
  return left.aggregate_hmtc_percentile_status.localeCompare(right.aggregate_hmtc_percentile_status)
}

function targetLabel(row) {
  if (row.hmtc_standard_percentile_target === "dirty_p20") return "contaminated-platform P20"
  if (row.hmtc_standard_percentile_target === "dirty_p10") return "contaminated-platform P10"
  if (row.hmtc_standard_percentile_target === "clean_p90") return "clean-platform P90"
  if (row.hmtc_standard_percentile_target === "independent_p90") return "independent-row P90"
  return "standards percentile"
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

function numeric(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
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

function metalSort(left, right) {
  const order = ["Pb", "Cd", "iAs", "tAs", "Cr-VI", "tCr", "MeHg", "tHg", "Al", "Ni", "Sn"]
  const leftIndex = order.indexOf(left)
  const rightIndex = order.indexOf(right)
  if (leftIndex !== -1 || rightIndex !== -1) {
    if (leftIndex === -1) return 1
    if (rightIndex === -1) return -1
    return leftIndex - rightIndex
  }
  return left.localeCompare(right)
}

function readableSlug(value) {
  return String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => (part === "rtf" ? "RTF" : part))
    .join(" ")
}
