import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import matter from "gray-matter"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const routingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const rawInventoryPath = path.join(repoRoot, "data/evidence/raw_ingest_inventory.csv")
const contextDispositionPath = path.join(repoRoot, "data/evidence/local_reingest_context_dispositions.csv")
const sourceDir = path.join(repoRoot, "wiki/sources")
const outputPath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const summaryPath = path.join(repoRoot, "data/evidence/local_reingest_summary.json")
const extraRawRoots = [
  path.join(os.homedir(), "Desktop/heavy-metal-index"),
  path.join(os.homedir(), "Desktop/heavy-metal-index/raw"),
  path.join(os.homedir(), "Desktop/heavy-metal-index/raw/Digest"),
  path.join(os.homedir(), "Desktop/heavy-metal-index/raw/Digest/Added Manually "),
]

const args = new Map()
for (let index = 2; index < process.argv.length; index += 1) {
  const arg = process.argv[index]
  if (!arg.startsWith("--")) continue
  const [key, inlineValue] = arg.slice(2).split("=", 2)
  const value = inlineValue ?? process.argv[index + 1]
  args.set(key, value)
  if (inlineValue === undefined) index += 1
}

const productFilter = args.get("product") ?? ""
const includeStructured = args.get("include-structured") === "true"
const includeVisibleBroadContext = args.get("include-visible-broad-context") === "true"
const includeVisibleContextNodes = args.get("include-visible-context-nodes") === "true"

const routingRows = fs.existsSync(routingAuditPath) ? parseCsv(fs.readFileSync(routingAuditPath, "utf8")) : []
const rawInventoryRows = fs.existsSync(rawInventoryPath) ? parseCsv(fs.readFileSync(rawInventoryPath, "utf8")) : []
const contextDispositionRows = fs.existsSync(contextDispositionPath)
  ? parseCsv(fs.readFileSync(contextDispositionPath, "utf8"))
  : []
const sourcePages = readSourcePages()
const rawInventoryBySource = indexRawInventoryBySource(rawInventoryRows)
const contextDispositionKeys = new Set(
  contextDispositionRows.map((row) => routeMetalKey(row.product_slug, row.source_id, row.metal_species)),
)

const candidateQueueRows = routingRows
  .filter((row) => !productFilter || row.product_slug === productFilter)
  .filter((row) => includeStructured || row.route_status !== "structured_values_present")
  .map((row) => buildQueueRow(row))

const excludedContextDispositionRows = candidateQueueRows.filter(isFullyDispositionedRoute)
const candidateRowsNeedingReview = candidateQueueRows.filter((row) => !isFullyDispositionedRoute(row))
const excludedVisibleBroadContextRows = candidateRowsNeedingReview.filter(isVisibleBroadContextRow)
const candidateRowsAfterBroadContext = candidateRowsNeedingReview.filter(
  (row) => includeVisibleBroadContext || !isVisibleBroadContextRow(row),
)
const excludedVisibleContextNodeRows = candidateRowsAfterBroadContext.filter(isVisibleContextNodeRow)
const queueRows = candidateRowsAfterBroadContext
  .filter((row) => includeVisibleContextNodes || !isVisibleContextNodeRow(row))
  .sort((a, b) => a.priority_rank - b.priority_rank || a.product_slug.localeCompare(b.product_slug) || a.source_id.localeCompare(b.source_id))

writeCsv(outputPath, queueRows.map(publicQueueRow), [
  "queue_order",
  "priority",
  "product_slug",
  "product_standard_scope",
  "source_id",
  "source_title",
  "route_status",
  "route_kind",
  "local_pdf_status",
  "local_pdf_path",
  "source_page_path",
  "metals_declared",
  "missing_metal_species",
  "products_declared",
  "evidence_use",
  "action_needed",
  "guardrails",
])

const summary = {
  generated_at: new Date().toISOString(),
  product_filter: productFilter || "all",
  include_structured: includeStructured,
  include_visible_broad_context: includeVisibleBroadContext,
  include_visible_context_nodes: includeVisibleContextNodes,
  excluded_context_disposition_rows: excludedContextDispositionRows.length,
  excluded_visible_broad_context_rows: includeVisibleBroadContext ? 0 : excludedVisibleBroadContextRows.length,
  excluded_visible_context_node_rows: includeVisibleContextNodes ? 0 : excludedVisibleContextNodeRows.length,
  total_queue_rows: queueRows.length,
  by_priority: countBy(queueRows, (row) => row.priority),
  by_local_pdf_status: countBy(queueRows, (row) => row.local_pdf_status),
  by_route_status: countBy(queueRows, (row) => row.route_status),
}
writeStableJsonSummary(summaryPath, summary)

console.log(`Wrote ${queueRows.length} local reingest queue rows to ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote local reingest summary to ${path.relative(repoRoot, summaryPath)}`)

function buildQueueRow(row) {
  const source = sourcePages.get(row.source_id) ?? {}
  const localPdf = resolveLocalPdf(row.source_id, source)
  const priority = queuePriority(row, localPdf)

  return {
    ...row,
    priority,
    priority_rank: priorityRank(priority),
    source_title: row.source_title || source.title || readableSlug(row.source_id),
    source_page_path: source.path ? path.relative(repoRoot, source.path) : row.source_page || `wiki/sources/${row.source_id}.md`,
    local_pdf_status: localPdf.status,
    local_pdf_path: localPdf.path,
    metals_declared: source.metals || row.metal_species || "",
    products_declared: source.products || row.declared_products || "",
    guardrails: guardrailsFor(row, source),
  }
}

function resolveLocalPdf(sourceId, source) {
  const rawPaths = [source.raw_path, source.raw_handle]
    .filter(Boolean)
    .map((value) => String(value).replace(/^["']|["']$/g, ""))

  for (const rawPath of rawPaths) {
    const resolved = resolveDeclaredPdfPath(rawPath)
    if (resolved) {
      return { status: "local_pdf_found", path: path.relative(repoRoot, resolved) }
    }
  }

  const inventoryMatches = rawInventoryBySource.get(sourceId) ?? []
  for (const match of inventoryMatches) {
    const resolved = path.resolve(repoRoot, match.raw_path)
    if (fs.existsSync(resolved)) {
      return { status: "local_pdf_found", path: match.raw_path }
    }
  }

  const fuzzyMatch = fuzzyFindPdf(sourceId, source.title)
  if (fuzzyMatch) return { status: "candidate_local_pdf_needs_review", path: fuzzyMatch }

  return { status: "missing_local_pdf", path: "" }
}

function resolveDeclaredPdfPath(rawPath) {
  const candidates = []
  const normalized = String(rawPath || "").trim()
  if (!normalized) return ""

  if (path.isAbsolute(normalized)) {
    candidates.push(normalized)
  } else {
    candidates.push(path.resolve(repoRoot, normalized))
    for (const root of extraRawRoots) candidates.push(path.resolve(root, normalized))
    const basename = path.basename(normalized)
    for (const root of extraRawRoots) {
      candidates.push(path.join(root, basename))
      candidates.push(path.join(root, "raw", basename))
      candidates.push(path.join(root, "studies", basename))
      candidates.push(path.join(root, "reports", basename))
      candidates.push(path.join(root, "Digest", basename))
      candidates.push(path.join(root, "Digest/Added Manually ", basename))
    }
  }

  for (const candidate of dedupe(candidates)) {
    if (candidate && fs.existsSync(candidate)) return candidate
  }

  const basename = path.basename(normalized)
  if (!basename) return ""
  const matched = searchRawRootsByBasename(basename)
  return matched || ""
}

function searchRawRootsByBasename(basename) {
  for (const root of dedupe([path.join(repoRoot, "raw"), ...extraRawRoots])) {
    const found = findByBasename(root, basename)
    if (found) return found
  }
  return ""
}

function findByBasename(root, basename) {
  if (!root || !fs.existsSync(root)) return ""
  for (const filePath of walk(root)) {
    if (path.basename(filePath) === basename) return filePath
  }
  return ""
}

function fuzzyFindPdf(sourceId, title = "") {
  const needles = new Set([sourceId, ...String(title).split(/\W+/).filter((word) => word.length >= 6)].map(normalizeText))
  const pdfs = [...walk(path.join(repoRoot, "raw"))].filter((filePath) => /\.pdf$/i.test(filePath))

  let best = null
  for (const pdfPath of pdfs) {
    const filename = normalizeText(path.basename(pdfPath))
    const score = [...needles].reduce((sum, needle) => sum + (needle && filename.includes(needle) ? 1 : 0), 0)
    if (score > (best?.score ?? 0)) best = { score, pdfPath }
  }

  return best?.score >= 2 ? path.relative(repoRoot, best.pdfPath) : ""
}

function queuePriority(row, localPdf) {
  if (localPdf.status === "missing_local_pdf") return "P3-find-local-pdf-or-web-copy"
  if (localPdf.status === "candidate_local_pdf_needs_review") return "P2-confirm-local-pdf-match"
  if (row.product_standard_scope && row.product_standard_scope !== "locked_hmtc_row") return "P2-review-context-only-route"
  if (row.route_status === "missing_direct_product_route") return "P0-promote-direct-product-source"
  if (row.route_status === "partial_structured_values_present" && row.route_kind?.startsWith("direct_product")) {
    return "P0-extract-missing-product-values"
  }
  if (row.route_status === "source_on_page_no_structured_value" && row.route_kind?.startsWith("direct_product")) {
    return "P0-extract-direct-product-values"
  }
  if (row.route_status === "missing_broad_product_context") return "P1-resolve-row-fit-before-extraction"
  if (row.route_status === "source_on_page_no_structured_value") return "P1-extract-or-document-context-only"
  return "P2-review"
}

function priorityRank(priority) {
  if (priority.startsWith("P0")) return 0
  if (priority.startsWith("P1")) return 1
  if (priority.startsWith("P2")) return 2
  if (priority.startsWith("P3")) return 3
  return 9
}

function isVisibleBroadContextRow(row) {
  return (
    (row.route_status === "source_on_page_no_structured_value" ||
      row.route_status === "partial_structured_values_present") &&
    String(row.route_kind || "").startsWith("broad_") &&
    (row.evidence_use === "broad_context_pending_row_fit" ||
      row.evidence_use === "partial_structured_value_candidate")
  )
}

function isVisibleContextNodeRow(row) {
  return (
    (row.product_standard_scope === "base_context" || row.product_standard_scope === "bridge_context") &&
    row.product_page_cites_source === "true" &&
    (row.route_status === "source_on_page_no_structured_value" ||
      row.route_status === "partial_structured_values_present") &&
    (row.evidence_use === "direct_context_pending_extraction" ||
      row.evidence_use === "partial_structured_value_candidate")
  )
}

function isFullyDispositionedRoute(row) {
  const metals = splitMetals(row.missing_metal_species || row.metal_species || row.metals_declared)
  if (metals.length === 0) return false
  return metals.every((metal) => contextDispositionKeys.has(routeMetalKey(row.product_slug, row.source_id, metal)))
}

function routeMetalKey(productSlug, sourceId, metal) {
  return `${productSlug}::${sourceId}::${canonicalMetal(metal)}`
}

function canonicalMetal(value) {
  const normalized = String(value || "").trim()
  const lower = normalized.toLowerCase()
  if (lower === "cr") return "Cr-total"
  if (lower === "hg") return "tHg"
  if (lower === "as") return "tAs"
  if (lower === "lead") return "Pb"
  if (lower === "cadmium") return "Cd"
  if (lower === "arsenic") return "tAs"
  if (lower === "inorganic arsenic") return "iAs"
  if (lower === "mercury") return "tHg"
  if (lower === "methylmercury") return "MeHg"
  return normalized
}

function splitMetals(value) {
  return String(value || "")
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(/[;,]/)
    .map((metal) => metal.trim())
    .filter(Boolean)
}

function guardrailsFor(row, source) {
  const guardrails = [
    "local PDF first",
    "extract N, mean, median, min/low, max/high, basis, unit, product fit, analyte species",
    "do not infer p50/p90/p95 unless explicitly reported",
    "do not pool broad/context rows into locked subcategory until row fit is resolved",
    "write candidate rows for review before page publication",
  ]

  const products = `${row.declared_products || ""};${source.products || ""}`.toLowerCase()
  if (products.includes("formula")) {
    guardrails.push("separate powder/liquid and soy/non-soy")
  }

  const metals = `${row.metal_species || ""};${source.metals || ""}`.toLowerCase()
  if (metals.includes("as") || metals.includes("arsenic")) {
    guardrails.push("keep total arsenic separate from inorganic arsenic")
  }
  if (metals.includes("hg") || metals.includes("mercury")) {
    guardrails.push("keep total mercury separate from methylmercury")
  }

  return guardrails.join("; ")
}

function readSourcePages() {
  const pages = new Map()
  if (!fs.existsSync(sourceDir)) return pages

  for (const entry of fs.readdirSync(sourceDir)) {
    if (!entry.endsWith(".md")) continue
    const filePath = path.join(sourceDir, entry)
    const source = fs.readFileSync(filePath, "utf8")
    const parsed = matter(source)
    const sourceId = asString(parsed.data.cite_key) || entry.replace(/\.md$/, "")
    pages.set(sourceId, {
      path: filePath,
      title: asString(parsed.data.title),
      raw_path: asString(parsed.data.raw_path),
      raw_handle: asString(parsed.data.raw_handle),
      metals: asStringArray(parsed.data.metals).join(";"),
      products: asStringArray(parsed.data.products).join(";"),
    })
  }

  return pages
}

function indexRawInventoryBySource(rows) {
  const indexed = new Map()
  for (const row of rows) {
    for (const sourcePage of String(row.matched_source_pages || "").split(";").map((value) => value.trim()).filter(Boolean)) {
      const sourceId = sourcePage.replace(/^wiki\/sources\//, "").replace(/\.md$/, "")
      if (!indexed.has(sourceId)) indexed.set(sourceId, [])
      indexed.get(sourceId).push(row)
    }
  }
  return indexed
}

function* walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(filePath)
    else yield filePath
  }
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "")
}

function dedupe(values) {
  return [...new Set(values.filter(Boolean))]
}

function publicQueueRow(row, index) {
  return {
    queue_order: String(index + 1),
    priority: row.priority,
    product_slug: row.product_slug,
    product_standard_scope: row.product_standard_scope || "",
    source_id: row.source_id,
    source_title: row.source_title,
    route_status: row.route_status,
    route_kind: row.route_kind,
    local_pdf_status: row.local_pdf_status,
    local_pdf_path: row.local_pdf_path,
    source_page_path: row.source_page_path,
    metals_declared: row.metals_declared,
    missing_metal_species: row.missing_metal_species || "",
    products_declared: row.products_declared,
    evidence_use: row.evidence_use,
    action_needed: row.action_needed,
    guardrails: row.guardrails,
  }
}

function countBy(rows, keyFn) {
  const counts = {}
  for (const row of rows) {
    const key = keyFn(row) || "unknown"
    counts[key] = (counts[key] ?? 0) + 1
  }
  return counts
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const next = text[index + 1]
    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"'
        index += 1
      } else if (char === '"') {
        quoted = false
      } else {
        field += char
      }
    } else if (char === '"') {
      quoted = true
    } else if (char === ",") {
      row.push(field)
      field = ""
    } else if (char === "\n") {
      row.push(field)
      rows.push(row)
      row = []
      field = ""
    } else if (char !== "\r") {
      field += char
    }
  }

  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }

  const header = rows.shift() ?? []
  return rows
    .filter((candidate) => candidate.some((value) => value !== ""))
    .map((candidate) => Object.fromEntries(header.map((key, index) => [key, candidate[index] ?? ""])))
}

function writeCsv(filePath, rows, headers) {
  const lines = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header] ?? "")).join(",")),
  ]
  fs.writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8")
}

function csvEscape(value) {
  const string = String(value ?? "")
  return /[",\n\r]/.test(string) ? `"${string.replace(/"/g, '""')}"` : string
}

function readableSlug(slug) {
  return String(slug || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function asString(value) {
  if (value === null || value === undefined) return ""
  return String(value).trim()
}

function asStringArray(value) {
  if (Array.isArray(value)) return value.map((item) => asString(item)).filter(Boolean)
  if (typeof value === "string") {
    return value
      .split(/[;,]/)
      .map((item) => item.trim())
      .filter(Boolean)
  }
  return []
}
