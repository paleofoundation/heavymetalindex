#!/usr/bin/env node
/**
 * Convert the persistent open-gap register into an AI-adjudication queue.
 *
 * Current-method boundary: this queue repairs literature occurrence coverage,
 * routing, and unfinished wiki sections. External occurrence evidence never
 * selects an initial HMTc limit and never enters the certified-lot ratchet.
 */

import fs from "node:fs"
import path from "node:path"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""
const gapsPath = path.join(repoRoot, "data/gaps/open_gaps.jsonl")
const outputPath = path.join(repoRoot, "data/evidence/ai_adjudication_queue.csv")
const summaryOutputPath = path.join(repoRoot, "data/evidence/ai_adjudication_summary.json")

const gaps = readJsonl(gapsPath)
  .filter((gap) => gap.status !== "closed")
  .filter((gap) => !productFilter || productSlug(gap.page) === productFilter)

const rows = gaps
  .map(buildRow)
  .sort((left, right) =>
    priorityRank(left.priority) - priorityRank(right.priority)
      || left.machine_task.localeCompare(right.machine_task)
      || left.page.localeCompare(right.page)
      || left.metal_species.localeCompare(right.metal_species),
  )
  .map((row, index) => ({ ...row, adjudication_order: index + 1 }))

writeCsv(outputPath, rows, [
  "adjudication_order",
  "priority",
  "machine_task",
  "gap_id",
  "page",
  "product_slug",
  "hmtc_category",
  "metal_species",
  "matrix",
  "population",
  "gap_reason",
  "required_decisions",
  "input_artifacts",
  "guardrails",
  "expected_outputs",
  "confidence_gate",
  "human_exception_trigger",
  "blocks_public_claims",
  "next_command",
  "notes",
])

writeStableJsonSummary(summaryOutputPath, {
  generated_at: new Date().toISOString(),
  product_filter: productFilter || "all",
  methodology_boundary: {
    initial_limits: "government-limit-only",
    external_occurrence_use: "context and evidence-gap detection only",
    ratchet_input: "eligible HMTc certified-lot data only",
  },
  total_adjudication_rows: rows.length,
  by_priority: countBy(rows, (row) => row.priority),
  by_machine_task: countBy(rows, (row) => row.machine_task),
  by_gap_reason: countBy(rows, (row) => row.gap_reason),
  public_claim_blockers: rows.filter((row) => row.blocks_public_claims === "true").length,
  human_role:
    "low-confidence exception review, policy-conflict resolution, missing-source retrieval, and final governance approval",
  top_adjudications: rows.slice(0, 12).map((row) => ({
    adjudication_order: row.adjudication_order,
    priority: row.priority,
    machine_task: row.machine_task,
    page: row.page,
    metal_species: row.metal_species,
  })),
})

console.log(`Wrote ${rows.length} occurrence/routing adjudication rows to ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote AI adjudication summary to ${path.relative(repoRoot, summaryOutputPath)}`)

function buildRow(gap) {
  const plan = planFor(gap.why)
  const slug = productSlug(gap.page)
  return {
    adjudication_order: 0,
    priority: plan.priority,
    machine_task: plan.machineTask,
    gap_id: gap.gap_id,
    page: gap.page ?? "",
    product_slug: slug,
    hmtc_category: gap.hmtc_category ?? "",
    metal_species: gap.metal ?? "",
    matrix: gap.matrix ?? "",
    population: gap.population ?? "",
    gap_reason: gap.why ?? "",
    required_decisions: plan.requiredDecisions,
    input_artifacts: unique([
      "data/gaps/open_gaps.jsonl",
      gap.page,
      gap.metal ? "data/evidence/hmtc_aggregate_distributions.csv" : "",
    ]).join("; "),
    guardrails: [
      "External occurrence evidence is context only: it cannot select an initial HMTc limit or enter the certified-lot ratchet.",
      "Keep total arsenic separate from inorganic arsenic, total mercury separate from methylmercury, and Cr(VI) separate from total chromium.",
      "Resolve product row, market, basis, species, unit, statistic type, censoring, and routeability before promotion.",
      plan.guardrail,
    ].filter(Boolean).join(" "),
    expected_outputs: plan.expectedOutputs,
    confidence_gate: plan.confidenceGate,
    human_exception_trigger:
      "confidence below the stated gate; inaccessible source; policy conflict; high-impact certification decision; or final governance approval",
    blocks_public_claims: plan.blocksPublicClaims ? "true" : "false",
    next_command: slug
      ? `npm run evidence:show-results -- --product ${slug}`
      : "npm run evidence:standards-gaps",
    notes: `Persistent gap status: ${gap.status ?? "open"}. This is an occurrence-evidence task, not certification-limit arithmetic.`,
  }
}

function planFor(reason) {
  switch (reason) {
    case "no_cited_occurrence_evidence":
      return {
        priority: "P1",
        machineTask: "discover_extract_and_route_occurrence_evidence",
        requiredDecisions:
          "source identity and provenance; product-row fit; geography/market; native basis; exact analyte species; unit; statistic type; N; censoring; Evidence Fitness; destination route",
        expectedOutputs:
          "routeable structured occurrence rows, a context-only disposition, or a persistent retrieval/routing gap; regenerated descriptive occurrence outputs",
        confidenceGate:
          "Promote only when source values and labels are directly traceable and row/basis/species/unit decisions reach at least 0.90 confidence.",
        blocksPublicClaims: true,
        guardrail: "Do not infer a missing distribution or require any source to report a particular percentile.",
      }
    case "pending_contamination_profile":
      return {
        priority: "P1",
        machineTask: "complete_contamination_profile_from_routed_evidence",
        requiredDecisions:
          "ingredient or product fit; exact analyte species; typical range/statistic provenance; units; study count; confidence; source routes",
        expectedOutputs:
          "populated, cited contamination-profile cell or an auditable unresolved-evidence disposition",
        confidenceGate: "Publish only traceable source-supported values with at least 0.90 routing confidence.",
        blocksPublicClaims: true,
        guardrail: "Do not turn a synthesized commodity range into sample-level evidence.",
      }
    case "routing_unresolved":
      return {
        priority: "P1",
        machineTask: "resolve_evidence_destination_route",
        requiredDecisions:
          "source claim or value; destination page family; row fit; evidence role; context-only versus routeable status",
        expectedOutputs: "destination update, routing-audit record, context disposition, or explicit missing-page stub",
        confidenceGate: "Route automatically at at least 0.90 confidence; otherwise retain the gap for exception review.",
        blocksPublicClaims: true,
        guardrail: "Never silently drop evidence because a destination page is missing.",
      }
    case "tbd_section":
      return {
        priority: "P2",
        machineTask: "resolve_tbd_section_from_canonical_evidence",
        requiredDecisions: "section scope; supported claims; source provenance; destination-page consistency",
        expectedOutputs: "completed sourced section or an explicit evidence-gap note",
        confidenceGate: "Write only claims traceable to admitted evidence and current governance.",
        blocksPublicClaims: true,
        guardrail: "Do not fill a TBD with unsupported prose.",
      }
    default:
      return {
        priority: "P2",
        machineTask: "adjudicate_persistent_evidence_gap",
        requiredDecisions: "gap scope; source provenance; routeability; destination; closure evidence",
        expectedOutputs: "structured evidence, explicit disposition, or a persistent blocker record",
        confidenceGate: "Close only with a reproducible audit trace.",
        blocksPublicClaims: true,
        guardrail: "Preserve unresolved evidence visibly.",
      }
  }
}

function readJsonl(file) {
  if (!fs.existsSync(file)) return []
  return fs.readFileSync(file, "utf8").split("\n").filter(Boolean).map((line) => JSON.parse(line))
}

function productSlug(page) {
  return String(page ?? "").match(/^wiki\/products\/([a-z0-9-]+)\.md$/)?.[1] ?? ""
}

function parseArgs(argv) {
  const parsed = new Map()
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (!arg.startsWith("--")) continue
    const [key, inlineValue] = arg.slice(2).split("=", 2)
    const value = inlineValue ?? argv[index + 1] ?? "true"
    parsed.set(key, value)
    if (inlineValue === undefined && argv[index + 1] && !argv[index + 1].startsWith("--")) index += 1
  }
  return parsed
}

function countBy(items, keyFn) {
  const counts = {}
  for (const item of items) {
    const key = keyFn(item) || "(none)"
    counts[key] = (counts[key] ?? 0) + 1
  }
  return counts
}

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}

function priorityRank(priority) {
  return { P0: 0, P1: 1, P2: 2, P3: 3 }[priority] ?? 9
}

function csvCell(value) {
  const text = String(value ?? "")
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

function writeCsv(file, records, columns) {
  const lines = [columns.join(",")]
  for (const record of records) lines.push(columns.map((column) => csvCell(record[column])).join(","))
  fs.writeFileSync(file, `${lines.join("\n")}\n`)
}
