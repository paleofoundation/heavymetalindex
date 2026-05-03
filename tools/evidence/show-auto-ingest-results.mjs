import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const product = args.get("product") ?? ""

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
const syncSummaryPath = path.join(repoRoot, "data/evidence/local_ingest_sync_summary.json")
const syncChangesPath = path.join(repoRoot, "data/evidence/local_ingest_changes.csv")
const syncStatePath = path.join(repoRoot, "data/evidence/local_ingest_state.json")

const gapRows = fs.existsSync(gapPath) ? parseCsv(fs.readFileSync(gapPath, "utf8")) : []
const queueRows = fs.existsSync(queuePath) ? parseCsv(fs.readFileSync(queuePath, "utf8")) : []
const packetRows = fs.existsSync(packetManifestPath) ? parseCsv(fs.readFileSync(packetManifestPath, "utf8")) : []
const taskRows = fs.existsSync(extractionTasksPath) ? parseCsv(fs.readFileSync(extractionTasksPath, "utf8")) : []
const gapSummary = fs.existsSync(gapSummaryPath) ? JSON.parse(fs.readFileSync(gapSummaryPath, "utf8")) : {}
const queueSummary = fs.existsSync(queueSummaryPath) ? JSON.parse(fs.readFileSync(queueSummaryPath, "utf8")) : {}
const candidateSummary = fs.existsSync(candidateSummaryPath)
  ? JSON.parse(fs.readFileSync(candidateSummaryPath, "utf8"))
  : {}
const syncSummary = fs.existsSync(syncSummaryPath) ? JSON.parse(fs.readFileSync(syncSummaryPath, "utf8")) : {}

const filteredGapRows = product ? gapRows.filter((row) => row.product_slug === product) : gapRows
const filteredQueueRows = product ? queueRows.filter((row) => row.product_slug === product) : queueRows
const filteredTaskRows = product ? taskRows.filter((row) => row.product_slug === product) : taskRows

console.log("")
console.log("Heavy Metal Index local ingest results")
console.log("======================================")
console.log(`Product: ${product || gapSummary.product_filter || queueSummary.product_filter || "all"}`)
console.log(`Queue rows: ${filteredQueueRows.length}`)
console.log(`HMTc gap rows: ${filteredGapRows.length}`)
console.log(`PDF packets: ${packetRows.length}`)
if (candidateSummary.deterministic_candidate_value_count !== undefined) {
  console.log(`Deterministic candidate rows: ${candidateSummary.deterministic_candidate_value_count}`)
}
console.log(`Remaining extraction tasks: ${filteredTaskRows.length}`)
console.log("")

if (Object.keys(queueSummary.by_priority ?? {}).length) {
  console.log("Reingest queue by priority")
  for (const [key, value] of Object.entries(queueSummary.by_priority)) console.log(`- ${key}: ${value}`)
  console.log("")
}

if (Object.keys(gapSummary.by_aggregate_status ?? {}).length) {
  console.log("HMTc p90 readiness")
  for (const [key, value] of Object.entries(gapSummary.by_aggregate_status)) console.log(`- ${key}: ${value}`)
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

if (filteredGapRows.length) {
  console.log("Metal-level gap report")
  for (const row of filteredGapRows) {
    console.log(`- ${row.metal_species}: ${row.aggregate_hmtc_p90_status}`)
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

console.log("Files")
console.log(`- ${path.relative(repoRoot, gapPath)}`)
console.log(`- ${path.relative(repoRoot, queuePath)}`)
console.log(`- ${path.relative(repoRoot, candidateValuesPath)}`)
console.log(`- ${path.relative(repoRoot, extractionTasksPath)}`)
console.log(`- ${path.relative(repoRoot, syncChangesPath)}`)
console.log(`- ${path.relative(repoRoot, syncStatePath)}`)
console.log(`- ${path.relative(repoRoot, packetManifestPath)}`)
console.log("")
console.log("Open in Finder or spreadsheet")
console.log(`open ${shellQuote(path.relative(repoRoot, gapPath))}`)
console.log(`open ${shellQuote(path.relative(repoRoot, candidateValuesPath))}`)
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

function shellQuote(value) {
  const text = String(value)
  if (!/[\s'"$\\]/.test(text)) return text
  return `'${text.replace(/'/g, "'\\''")}'`
}
