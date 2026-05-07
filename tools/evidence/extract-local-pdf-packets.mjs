import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const queuePath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const packetRoot = path.join(repoRoot, "data/evidence/local_reingest_packets")

const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""
const limit = Number(args.get("limit") ?? args.get("packet-limit") ?? 0)
const includeCandidates = args.get("include-candidates") === "true"

const pdftotext = findPdfToText()
const queueRows = fs.existsSync(queuePath) ? parseCsv(fs.readFileSync(queuePath, "utf8")) : []
const selectedRows = queueRows
  .filter((row) => !productFilter || row.product_slug === productFilter)
  .filter((row) => row.local_pdf_status === "local_pdf_found" || (includeCandidates && row.local_pdf_status === "candidate_local_pdf_needs_review"))
  .filter((row) => includeCandidates || row.priority?.startsWith("P0"))
  .slice(0, limit > 0 ? limit : undefined)

const manifestRows = []
for (const row of selectedRows) {
  const sourcePath = path.resolve(repoRoot, row.local_pdf_path)
  const packetDir = path.join(packetRoot, row.product_slug)
  const baseName = `${String(row.queue_order || "0").padStart(3, "0")}-${safeFilename(row.source_id)}`
  const textPath = path.join(packetDir, `${baseName}.txt`)
  const snippetPath = path.join(packetDir, `${baseName}.snippets.txt`)

  fs.mkdirSync(packetDir, { recursive: true })

  const extractResult = extractSourceText(sourcePath, textPath, pdftotext)

  const ok = extractResult.status === 0 && fs.existsSync(textPath)
  const fullText = ok ? fs.readFileSync(textPath, "utf8") : ""
  const snippets = ok ? buildSnippetPacket(row, fullText) : extractionFailurePacket(row, sourcePath, extractResult)
  fs.writeFileSync(snippetPath, snippets, "utf8")

  manifestRows.push({
    product_slug: row.product_slug,
    source_id: row.source_id,
    source_title: row.source_title,
    priority: row.priority,
    local_pdf_status: row.local_pdf_status,
    local_pdf_path: row.local_pdf_path,
    packet_text_path: path.relative(repoRoot, textPath),
    packet_snippet_path: path.relative(repoRoot, snippetPath),
    extraction_status: ok ? "text_extracted" : "text_extraction_failed",
    extraction_note: ok ? "" : String(extractResult.stderr || extractResult.error || "pdftotext failed").trim(),
  })
}

const manifestPath = path.join(
  packetRoot,
  productFilter ? `${productFilter}_packet_manifest.csv` : "packet_manifest.csv",
)
writeCsv(manifestPath, manifestRows, [
  "product_slug",
  "source_id",
  "source_title",
  "priority",
  "local_pdf_status",
  "local_pdf_path",
  "packet_text_path",
  "packet_snippet_path",
  "extraction_status",
  "extraction_note",
])

const summary = {
  generated_at: new Date().toISOString(),
  product_filter: productFilter || "all",
  pdftotext,
  include_candidates: includeCandidates,
  packet_limit: limit || "none",
  packet_count: manifestRows.length,
  by_extraction_status: countBy(manifestRows, (row) => row.extraction_status),
}
const summaryPath = path.join(packetRoot, productFilter ? `${productFilter}_packet_summary.json` : "packet_summary.json")
writeStableJsonSummary(summaryPath, summary)

console.log(`Wrote ${manifestRows.length} local PDF packet rows to ${path.relative(repoRoot, manifestPath)}`)
console.log(`Wrote local PDF packet summary to ${path.relative(repoRoot, summaryPath)}`)

function buildSnippetPacket(row, text) {
  const lines = text.split(/\r?\n/)
  const queryTerms = [
    "infant formula",
    "formula",
    "powder",
    "milk-based",
    "cow",
    "soy",
    "non-soy",
    "lead",
    "cadmium",
    "arsenic",
    "inorganic arsenic",
    "mercury",
    "methylmercury",
    "aluminium",
    "aluminum",
    "nickel",
    "tin",
    "chromium",
    "mean",
    "median",
    "range",
    "maximum",
    "minimum",
    "percentile",
    "p90",
    "p95",
    "LOD",
    "LOQ",
    ...splitMetals(row.metals_declared),
  ]
    .map((term) => term.toLowerCase())
    .filter(Boolean)

  const windows = []
  const used = new Set()
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].toLowerCase()
    if (!queryTerms.some((term) => line.includes(term))) continue
    const start = Math.max(0, index - 2)
    const end = Math.min(lines.length - 1, index + 2)
    const key = `${start}:${end}`
    if (used.has(key)) continue
    used.add(key)
    windows.push({ start, end, lines: lines.slice(start, end + 1) })
    if (windows.length >= 80) break
  }

  return [
    `SOURCE ID: ${row.source_id}`,
    `SOURCE TITLE: ${row.source_title}`,
    `PRODUCT: ${row.product_slug}`,
    `PRIORITY: ${row.priority}`,
    `LOCAL PDF: ${row.local_pdf_path}`,
    `METALS DECLARED: ${row.metals_declared}`,
    "",
    "EXTRACTION GUARDRAILS:",
    "- Extract only source-stated or reconstructable product concentration values.",
    "- Capture N, detected N, basis, unit, analyte species, product fit, mean, median, min/low, max/high, and explicitly reported percentiles.",
    "- Do not infer p50, p90, or p95 from a mean, range, or one source.",
    "- Keep total arsenic separate from inorganic arsenic, and total mercury separate from methylmercury.",
    "- Keep powder, liquid, soy, and non-soy formula rows separate unless the source table explicitly supports pooling.",
    "",
    "TEXT SNIPPETS FOR REVIEW:",
    windows.length
      ? windows
          .map(
            (window) =>
              `--- lines ${window.start + 1}-${window.end + 1} ---\n${window.lines
                .map((line, offset) => `${String(window.start + offset + 1).padStart(5, " ")} | ${line}`)
                .join("\n")}`,
          )
          .join("\n\n")
      : "No keyword snippets found. Review the full text packet.",
    "",
  ].join("\n")
}

function extractionFailurePacket(row, pdfPath, result) {
  return [
    `SOURCE ID: ${row.source_id}`,
    `SOURCE TITLE: ${row.source_title}`,
    `PRODUCT: ${row.product_slug}`,
    `LOCAL PDF: ${row.local_pdf_path}`,
    "",
    "TEXT EXTRACTION FAILED",
    `Resolved path: ${pdfPath}`,
    String(result.stderr || result.error || "pdftotext failed").trim(),
    "",
  ].join("\n")
}

function extractSourceText(sourcePath, textPath, pdftotext) {
  if (!fs.existsSync(sourcePath)) return { status: 1, stderr: "Local source path does not exist" }

  const extension = path.extname(sourcePath).toLowerCase()
  if (extension === ".pdf") {
    return spawnSync(pdftotext, ["-layout", "-enc", "UTF-8", sourcePath, textPath], { encoding: "utf8" })
  }

  if (extension === ".md" || extension === ".txt") {
    fs.writeFileSync(textPath, fs.readFileSync(sourcePath, "utf8"), "utf8")
    return { status: 0, stderr: "" }
  }

  return { status: 1, stderr: `Unsupported local source type: ${extension || "unknown"}` }
}

function findPdfToText() {
  const candidates = ["/opt/homebrew/bin/pdftotext", "/usr/local/bin/pdftotext", "pdftotext"]
  for (const candidate of candidates) {
    const result = spawnSync(candidate, ["-v"], { encoding: "utf8" })
    if (result.status === 0 || /pdftotext/i.test(result.stderr || "")) return candidate
  }
  throw new Error("pdftotext was not found. Install poppler or add pdftotext to PATH.")
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

function splitMetals(value) {
  return String(value || "")
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(/[;,]/)
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean)
}

function safeFilename(value) {
  return String(value || "source").replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "")
}

function countBy(rows, keyFn) {
  const counts = {}
  for (const row of rows) {
    const key = keyFn(row) || "unknown"
    counts[key] = (counts[key] ?? 0) + 1
  }
  return counts
}
