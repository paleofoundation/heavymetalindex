import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const auditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const productDir = path.join(repoRoot, "wiki/products")

const beginMarker = "<!-- BEGIN: hmi-broad-context-sources -->"
const endMarker = "<!-- END: hmi-broad-context-sources -->"

const auditRows = fs.existsSync(auditPath) ? parseCsv(fs.readFileSync(auditPath, "utf8")) : []
const rowsByProduct = new Map()

for (const row of auditRows) {
  if (!String(row.route_kind || "").startsWith("broad_")) continue
  if (Number(row.value_record_count || 0) > 0) continue

  const productSlug = String(row.product_slug || "").trim()
  const sourceId = String(row.source_id || "").trim()
  if (!productSlug || !sourceId) continue

  if (!rowsByProduct.has(productSlug)) rowsByProduct.set(productSlug, [])
  rowsByProduct.get(productSlug).push(row)
}

let updatedPages = 0
let writtenRows = 0

for (const [productSlug, rows] of [...rowsByProduct.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const pagePath = path.join(productDir, `${productSlug}.md`)
  if (!fs.existsSync(pagePath)) continue

  const original = fs.readFileSync(pagePath, "utf8")
  const section = buildSection(rows)
  const next = upsertSection(original, section)
  if (next === original) continue

  fs.writeFileSync(pagePath, next, "utf8")
  updatedPages += 1
  writtenRows += rows.length
}

console.log(`Updated ${updatedPages} product broad-context section(s) with ${writtenRows} source route row(s).`)

function buildSection(rows) {
  const sortedRows = [...rows].sort((a, b) => {
    const sourceCompare = String(a.source_id || "").localeCompare(String(b.source_id || ""))
    if (sourceCompare !== 0) return sourceCompare
    return String(a.route_kind || "").localeCompare(String(b.route_kind || ""))
  })

  const tableRows = sortedRows.map((row) => ({
    Source: `[[sources/${row.source_id}]]`,
    Title: sourceLabel(row),
    "Source scope": sourceScope(row),
    Metals: metalsFor(row),
    "Row-fit handling": rowFitHandling(row),
  }))

  return `${beginMarker}
## Broad Formula Context Awaiting Row-Fit Review

<!-- audience: regulator, educator, app -->

These sources are visible as formula context, but they are not direct locked-row evidence. Keep them out of HMTc p90 or p95 calculations unless a later extraction resolves product format, soy status, basis, species, and statistic fit.

${toMarkdownTable(tableRows)}

${endMarker}`
}

function upsertSection(text, section) {
  const pattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)
  if (pattern.test(text)) return text.replace(pattern, section)

  for (const anchor of ["\n## Internal Standards Boundary", "\n## Sources"]) {
    const index = text.indexOf(anchor)
    if (index !== -1) {
      return `${text.slice(0, index).trimEnd()}\n\n${section}\n${text.slice(index)}`
    }
  }

  return `${text.trimEnd()}\n\n${section}\n`
}

function sourceLabel(row) {
  const title = String(row.source_title || row.source_id || "").trim()
  if (title.length <= 64) return title
  return `${title.slice(0, 61)}...`
}

function sourceScope(row) {
  const products = splitList(row.declared_products)
  if (products.length === 0) return "not declared"
  return products.slice(0, 4).join("; ")
}

function metalsFor(row) {
  const metals = splitList(row.missing_metal_species || row.declared_metal_species || row.metal_species)
  return metals.length > 0 ? metals.join("; ") : "not declared"
}

function rowFitHandling(row) {
  if (row.route_kind === "broad_powder_context") {
    return "Powder context only until soy/non-soy fit is resolved."
  }
  return "Broad formula context only until format and soy/non-soy fit are resolved."
}

function toMarkdownTable(rows) {
  if (rows.length === 0) return "No broad-context routes are currently loaded for this product."

  const headers = Object.keys(rows[0])
  const lines = [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
  ]

  for (const row of rows) {
    lines.push(`| ${headers.map((header) => escapeTableCell(row[header])).join(" | ")} |`)
  }

  return lines.join("\n")
}

function escapeTableCell(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim()
}

function splitList(value) {
  return String(value || "")
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function parseCsv(text) {
  const rows = []
  const records = parseCsvRecords(text)
  const headers = records.shift() || []
  for (const record of records) {
    if (record.every((value) => value === "")) continue
    const row = {}
    headers.forEach((header, index) => {
      row[header] = record[index] ?? ""
    })
    rows.push(row)
  }
  return rows
}

function parseCsvRecords(text) {
  const records = []
  let field = ""
  let record = []
  let inQuotes = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const next = text[index + 1]

    if (char === '"' && inQuotes && next === '"') {
      field += '"'
      index += 1
      continue
    }
    if (char === '"') {
      inQuotes = !inQuotes
      continue
    }
    if (char === "," && !inQuotes) {
      record.push(field)
      field = ""
      continue
    }
    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1
      record.push(field)
      records.push(record)
      field = ""
      record = []
      continue
    }
    field += char
  }

  if (field || record.length > 0) {
    record.push(field)
    records.push(record)
  }

  return records
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
