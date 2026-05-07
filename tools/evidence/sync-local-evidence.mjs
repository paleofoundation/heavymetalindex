import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const product = args.get("product") ?? ""
const packetLimit = args.get("packet-limit") ?? args.get("limit") ?? ""
const stateOnly = args.get("state-only") === "true"
const skipRawInventory = args.get("skip-raw-inventory") === "true"

const statePath = path.join(repoRoot, "data/evidence/local_ingest_state.json")
const changesPath = path.join(repoRoot, "data/evidence/local_ingest_changes.csv")
const summaryPath = path.join(repoRoot, "data/evidence/local_ingest_sync_summary.json")
const queuePath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const candidatePath = path.join(repoRoot, "data/evidence/local_reingest_candidate_values.csv")
const tasksPath = path.join(repoRoot, "data/evidence/local_reingest_extraction_tasks.csv")

const previousState = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, "utf8")) : { papers: {} }

if (!stateOnly) {
  if (!skipRawInventory) runNpm("evidence:raw-inventory", [])
  const autoArgs = product ? ["--product", product] : []
  if (packetLimit) autoArgs.push("--packet-limit", packetLimit)
  runNode("tools/evidence/auto-ingest.mjs", autoArgs)
}

const queueRows = fs.existsSync(queuePath) ? parseCsv(fs.readFileSync(queuePath, "utf8")) : []
const candidateRows = fs.existsSync(candidatePath) ? parseCsv(fs.readFileSync(candidatePath, "utf8")) : []
const taskRows = fs.existsSync(tasksPath) ? parseCsv(fs.readFileSync(tasksPath, "utf8")) : []
const rows = queueRows.filter((row) => !product || row.product_slug === product)

const candidateCounts = countBy(candidateRows, (row) => stateKey(row.product_slug, row.source_id))
const taskKeys = new Set(taskRows.map((row) => stateKey(row.product_slug, row.source_id)))
const currentPapers = {}
const changeRows = []

for (const row of rows) {
  const key = stateKey(row.product_slug, row.source_id)
  const pdfPath = row.local_pdf_path ? path.resolve(repoRoot, row.local_pdf_path) : ""
  const file = pdfPath && fs.existsSync(pdfPath) ? fileInfo(pdfPath) : null
  const packetInfo = packetStatus(row)
  const candidateCount = candidateCounts[key] ?? 0
  const hasTask = taskKeys.has(key)
  const previous = previousState.papers?.[key]
  const change_status = changeStatus(previous, file, row, candidateCount, hasTask)
  const action_status = actionStatus(row, file, candidateCount, hasTask)

  const paperState = {
    key,
    product_slug: row.product_slug,
    source_id: row.source_id,
    source_title: row.source_title,
    priority: row.priority,
    route_status: row.route_status,
    route_kind: row.route_kind,
    local_pdf_status: row.local_pdf_status,
    local_pdf_path: row.local_pdf_path,
    sha256: file?.sha256 ?? "",
    bytes: file?.bytes ?? "",
    mtime_ms: file?.mtimeMs ?? "",
    source_page_path: row.source_page_path,
    packet_text_path: packetInfo.textPath,
    packet_snippet_path: packetInfo.snippetPath,
    packet_status: packetInfo.status,
    deterministic_candidate_count: candidateCount,
    extraction_task_open: hasTask,
    action_status,
    last_seen_at: new Date().toISOString(),
  }
  currentPapers[key] = paperState
  changeRows.push({
    ...paperState,
    change_status,
  })
}

const retainedPapers = product
  ? Object.fromEntries(
      Object.entries(previousState.papers ?? {}).filter(([, paper]) => paper.product_slug !== product),
    )
  : {}
const nextPapers = { ...retainedPapers, ...currentPapers }

const nextState = {
  generated_at: new Date().toISOString(),
  product_filter: product || "all",
  paper_count: Object.keys(nextPapers).length,
  synced_paper_count: Object.keys(currentPapers).length,
  papers: nextPapers,
}

writeCsv(changesPath, changeRows, [
  "change_status",
  "action_status",
  "product_slug",
  "source_id",
  "source_title",
  "priority",
  "route_status",
  "local_pdf_status",
  "local_pdf_path",
  "sha256",
  "packet_status",
  "deterministic_candidate_count",
  "extraction_task_open",
  "source_page_path",
])
fs.writeFileSync(statePath, `${JSON.stringify(nextState, null, 2)}\n`, "utf8")

const summary = {
  generated_at: nextState.generated_at,
  product_filter: product || "all",
  state_only: stateOnly,
  paper_count: changeRows.length,
  tracked_state_paper_count: nextState.paper_count,
  by_change_status: countBy(changeRows, (row) => row.change_status),
  by_action_status: countBy(changeRows, (row) => row.action_status),
  outputs: [
    "data/evidence/local_ingest_state.json",
    "data/evidence/local_ingest_changes.csv",
    "data/evidence/local_ingest_sync_summary.json",
  ],
}
fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8")

console.log("")
console.log("Local evidence sync complete.")
console.log(`Product: ${product || "all"}`)
console.log(`Tracked source/product rows: ${changeRows.length}`)
console.log("Changes:")
for (const [key, value] of Object.entries(summary.by_change_status)) console.log(`- ${key}: ${value}`)
console.log("Actions:")
for (const [key, value] of Object.entries(summary.by_action_status)) console.log(`- ${key}: ${value}`)
console.log("Outputs:")
for (const output of summary.outputs) console.log(`- ${output}`)

function actionStatus(row, file, candidateCount, hasTask) {
  if (row.local_pdf_status === "missing_local_pdf") return "needs_source_file"
  if (row.local_pdf_status === "candidate_local_pdf_needs_review") return "needs_pdf_match_review"
  if (!file) return "needs_source_file"
  if (candidateCount > 0) return "candidate_rows_ready_for_review"
  if (hasTask) return "needs_source_specific_parser_or_ai_review"
  if (row.priority?.startsWith("P0")) return "needs_deterministic_parser"
  return "tracked_context_only"
}

function changeStatus(previous, file, row, candidateCount, hasTask) {
  if (!previous) return "new_to_state"
  if ((previous.local_pdf_path || "") !== (row.local_pdf_path || "")) return "pdf_path_changed"
  if ((previous.local_pdf_status || "") !== (row.local_pdf_status || "")) return "pdf_status_changed"
  if ((previous.sha256 || "") !== (file?.sha256 ?? "")) return "pdf_content_changed"
  if (Number(previous.deterministic_candidate_count || 0) !== candidateCount) return "candidate_count_changed"
  if (Boolean(previous.extraction_task_open) !== hasTask) return "task_status_changed"
  return "unchanged"
}

function fileInfo(filePath) {
  const stat = fs.statSync(filePath)
  return {
    bytes: stat.size,
    mtimeMs: Math.round(stat.mtimeMs),
    sha256: sha256(filePath),
  }
}

function sha256(filePath) {
  const hash = crypto.createHash("sha256")
  hash.update(fs.readFileSync(filePath))
  return hash.digest("hex")
}

function packetStatus(row) {
  const dir = path.join(repoRoot, "data/evidence/local_reingest_packets", row.product_slug)
  const prefix = `${String(row.queue_order || "").padStart(3, "0")}-${safeFilename(row.source_id)}`
  const textPath = path.join(dir, `${prefix}.txt`)
  const snippetPath = path.join(dir, `${prefix}.snippets.txt`)
  const textExists = fs.existsSync(textPath)
  const snippetExists = fs.existsSync(snippetPath)
  return {
    status: textExists && snippetExists ? "packet_ready" : textExists ? "text_only" : "not_packetized",
    textPath: textExists ? path.relative(repoRoot, textPath) : "",
    snippetPath: snippetExists ? path.relative(repoRoot, snippetPath) : "",
  }
}

function runNode(script, scriptArgs) {
  const result = spawnSync(process.execPath, [script, ...scriptArgs], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "inherit",
  })
  if (result.status !== 0) throw new Error(`${script} failed with exit code ${result.status}`)
}

function runNpm(script, scriptArgs) {
  const result = spawnSync("npm", ["run", script, "--", ...scriptArgs], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "inherit",
  })
  if (result.status !== 0) throw new Error(`npm run ${script} failed with exit code ${result.status}`)
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
  const text = `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n")}\n`
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, text, "utf8")
}

function csvCell(value) {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n;]/.test(text)) return text
  return `"${text.replace(/"/g, '""')}"`
}

function countBy(rows, keyFn) {
  const counts = {}
  for (const row of rows) {
    const key = keyFn(row) || "unknown"
    counts[key] = (counts[key] ?? 0) + 1
  }
  return counts
}

function stateKey(productSlug, sourceId) {
  return `${productSlug || "unknown"}::${sourceId || "unknown"}`
}

function safeFilename(value) {
  return String(value || "source").replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "")
}
