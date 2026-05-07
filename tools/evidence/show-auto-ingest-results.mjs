import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const product = args.get("product") ?? ""
const rowLimit = Number(args.get("limit") ?? (product ? 200 : 25))

const gapPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const gapSummaryPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_summary.json")
const queuePath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const queueSummaryPath = path.join(repoRoot, "data/evidence/local_reingest_summary.json")
const packetManifestPath = path.join(
  repoRoot,
  "data/evidence/local_reingest_packets",
  product ? `${product}_packet_manifest.csv` : "packet_manifest.csv",
)
const candidateSummaryPath = path.join(repoRoot, "data/evidence/local_reingest_candidate_summary.json")
const candidateValuesPath = path.join(repoRoot, "data/evidence/local_reingest_candidate_values.csv")
const extractionTasksPath = path.join(repoRoot, "data/evidence/local_reingest_extraction_tasks.csv")
const tdsRouteCandidatePath = path.join(repoRoot, "data/evidence/fda_tds_product_route_candidates.csv")
const tdsRouteSummaryPath = path.join(repoRoot, "data/evidence/fda_tds_product_route_summary.json")
const syncSummaryPath = path.join(repoRoot, "data/evidence/local_ingest_sync_summary.json")
const syncChangesPath = path.join(repoRoot, "data/evidence/local_ingest_changes.csv")
const syncStatePath = path.join(repoRoot, "data/evidence/local_ingest_state.json")

const gapRows = fs.existsSync(gapPath) ? parseCsv(fs.readFileSync(gapPath, "utf8")) : []
const queueRows = fs.existsSync(queuePath) ? parseCsv(fs.readFileSync(queuePath, "utf8")) : []
const packetRows = fs.existsSync(packetManifestPath) ? parseCsv(fs.readFileSync(packetManifestPath, "utf8")) : []
const taskRows = fs.existsSync(extractionTasksPath) ? parseCsv(fs.readFileSync(extractionTasksPath, "utf8")) : []
const tdsRouteCandidateRows = fs.existsSync(tdsRouteCandidatePath)
  ? parseCsv(fs.readFileSync(tdsRouteCandidatePath, "utf8"))
  : []
const gapSummary = fs.existsSync(gapSummaryPath) ? JSON.parse(fs.readFileSync(gapSummaryPath, "utf8")) : {}
const queueSummary = fs.existsSync(queueSummaryPath) ? JSON.parse(fs.readFileSync(queueSummaryPath, "utf8")) : {}
const candidateSummary = fs.existsSync(candidateSummaryPath)
  ? JSON.parse(fs.readFileSync(candidateSummaryPath, "utf8"))
  : {}
const tdsRouteSummary = fs.existsSync(tdsRouteSummaryPath) ? JSON.parse(fs.readFileSync(tdsRouteSummaryPath, "utf8")) : {}
const syncSummary = fs.existsSync(syncSummaryPath) ? JSON.parse(fs.readFileSync(syncSummaryPath, "utf8")) : {}

const filteredGapRows = product ? gapRows.filter((row) => row.product_slug === product) : gapRows
const filteredQueueRows = product ? queueRows.filter((row) => row.product_slug === product) : queueRows
const filteredTaskRows = product ? taskRows.filter((row) => row.product_slug === product) : taskRows
const filteredTdsRouteRows = product
  ? tdsRouteCandidateRows.filter((row) => row.product_slug === product)
  : tdsRouteCandidateRows

console.log("")
console.log("Heavy Metal Index local ingest results")
console.log("======================================")
console.log(`Product: ${product || gapSummary.product_filter || queueSummary.product_filter || "all"}`)
console.log(`Queue rows: ${filteredQueueRows.length}`)
if (queueSummary.excluded_visible_broad_context_rows !== undefined) {
  const suffix = product ? " (all products)" : ""
  console.log(`Visible broad-context rows held outside queue: ${queueSummary.excluded_visible_broad_context_rows}${suffix}`)
}
console.log(`HMTc gap rows: ${filteredGapRows.length}`)
console.log(`PDF packets: ${packetRows.length}`)
if (candidateSummary.deterministic_candidate_value_count !== undefined) {
  console.log(`Deterministic candidate rows: ${candidateSummary.deterministic_candidate_value_count}`)
}
if (tdsRouteSummary.direct_product_route_candidate_rows !== undefined || filteredTdsRouteRows.length > 0) {
  console.log(`FDA TDS product-route candidate rows: ${filteredTdsRouteRows.length}`)
  if (!product && tdsRouteSummary.food_rows_with_product_routes !== undefined) {
    console.log(
      `FDA TDS foods with product routes: ${tdsRouteSummary.food_rows_with_product_routes} of ${tdsRouteSummary.tds_food_route_rows}`,
    )
  }
}
console.log(`Remaining extraction tasks: ${filteredTaskRows.length}`)
console.log("")

const queuePriorityCounts = countBy(filteredQueueRows, (row) => row.priority)
if (Object.keys(queuePriorityCounts).length) {
  console.log("Reingest queue by priority")
  for (const [key, value] of Object.entries(queuePriorityCounts)) console.log(`- ${key}: ${value}`)
  console.log("")
}

const readinessCounts = countBy(filteredGapRows, (row) => row.aggregate_hmtc_p90_status)
if (Object.keys(readinessCounts).length) {
  console.log("HMTc p90 readiness")
  for (const [key, value] of Object.entries(readinessCounts)) console.log(`- ${key}: ${value}`)
  console.log("")
}

if (Object.keys(candidateSummary.by_source ?? {}).length) {
  console.log("Deterministic candidate rows by source")
  for (const [key, value] of Object.entries(candidateSummary.by_source)) console.log(`- ${key}: ${value}`)
  console.log("")
}

if (Object.keys(syncSummary.by_change_status ?? {}).length || Object.keys(syncSummary.by_action_status ?? {}).length) {
  console.log("Persistent local ingest state")
  for (const [key, value] of Object.entries(syncSummary.by_change_status ?? {})) console.log(`- ${key}: ${value}`)
  for (const [key, value] of Object.entries(syncSummary.by_action_status ?? {})) console.log(`- ${key}: ${value}`)
  console.log("")
}

if (filteredGapRows.length && product) {
  printMetalRows(filteredGapRows)
}

if (filteredGapRows.length && !product) {
  printGapOverview(filteredGapRows, rowLimit)
}

console.log("Files")
console.log(`- ${path.relative(repoRoot, gapPath)}`)
console.log(`- ${path.relative(repoRoot, queuePath)}`)
console.log(`- ${path.relative(repoRoot, candidateValuesPath)}`)
console.log(`- ${path.relative(repoRoot, extractionTasksPath)}`)
console.log(`- ${path.relative(repoRoot, tdsRouteCandidatePath)}`)
console.log(`- ${path.relative(repoRoot, syncChangesPath)}`)
console.log(`- ${path.relative(repoRoot, syncStatePath)}`)
console.log(`- ${path.relative(repoRoot, packetManifestPath)}`)
console.log("")
console.log("Open in Finder or spreadsheet")
console.log(`open ${shellQuote(path.relative(repoRoot, gapPath))}`)
console.log(`open ${shellQuote(path.relative(repoRoot, candidateValuesPath))}`)
console.log(`open ${shellQuote(path.relative(repoRoot, tdsRouteCandidatePath))}`)
console.log(`open ${shellQuote(path.relative(repoRoot, syncChangesPath))}`)
console.log(`open -R ${shellQuote(path.relative(repoRoot, gapPath))}`)
console.log("")

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

function printMetalRows(rows) {
  console.log("Metal-level gap report")
  for (const row of rows) {
    console.log(`- ${row.product_label || row.product_slug} / ${row.metal_species}: ${row.aggregate_hmtc_p90_status}`)
    if (row.loaded_source_count || row.loaded_n) {
      console.log(`  loaded sources: ${row.loaded_source_count || 0}; loaded N: ${row.loaded_n || 0}`)
    }
    if (row.pending_local_extract_source_count && row.pending_local_extract_source_count !== "0") {
      console.log(`  local papers ready to extract: ${row.pending_local_extract_source_count}`)
    }
    if (row.papers_to_find) console.log(`  papers to find: ${row.papers_to_find}`)
    if (row.evidence_needed) console.log(`  needed: ${row.evidence_needed}`)
  }
  console.log("")
}

function printGapOverview(rows, limit) {
  const groups = new Map()

  for (const row of rows) {
    const key = `${row.product_slug}::${row.aggregate_hmtc_p90_status}`
    if (!groups.has(key)) {
      groups.set(key, {
        product_slug: row.product_slug,
        product_label: row.product_label || row.product_slug,
        status: row.aggregate_hmtc_p90_status,
        metals: [],
        evidence_needed: row.evidence_needed,
      })
    }
    groups.get(key).metals.push(row.metal_species)
  }

  const ranked = [...groups.values()].sort((a, b) => {
    const severityCompare = severityRank(a.status) - severityRank(b.status)
    if (severityCompare !== 0) return severityCompare
    const labelCompare = a.product_label.localeCompare(b.product_label)
    if (labelCompare !== 0) return labelCompare
    return a.status.localeCompare(b.status)
  })

  console.log(`Standards gap overview (first ${Math.min(limit, ranked.length)} of ${ranked.length} product/status groups)`)
  for (const group of ranked.slice(0, limit)) {
    console.log(`- ${group.product_label} (${group.product_slug})`)
    console.log(`  ${group.status}: ${group.metals.join(", ")}`)
    if (group.evidence_needed) console.log(`  needed: ${group.evidence_needed}`)
  }
  if (ranked.length > limit) {
    console.log(`... ${ranked.length - limit} more groups hidden; rerun with --limit ${ranked.length} or --product <slug>.`)
  }
  console.log("")
}

function severityRank(status) {
  if (status === "BLOCKED: no structured evidence loaded") return 0
  if (status === "BLOCKED: species-specific evidence missing") return 1
  if (status === "BLOCKED: summary evidence only") return 2
  if (status === "BLOCKED: evidence fitness review needed") return 3
  if (status === "DO NOT PUBLISH P90: single distribution-capable source") return 4
  return 9
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

function shellQuote(value) {
  const text = String(value)
  if (!/[\s'"$\\]/.test(text)) return text
  return `'${text.replace(/'/g, "'\\''")}'`
}
