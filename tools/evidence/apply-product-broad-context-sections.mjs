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
  const canonicalAppearances = buildCanonicalAppearanceMap(original)

  const section = buildSection(rows, canonicalAppearances)
  const next = upsertSection(original, section)
  if (next === original) continue

  fs.writeFileSync(pagePath, next, "utf8")
  updatedPages += 1
  writtenRows += rows.length
}

console.log(`Updated ${updatedPages} product broad-context section(s) with ${writtenRows} source route row(s).`)

function buildSection(rows, canonicalAppearances) {
  const sortedRows = [...rows].sort((a, b) =>
    String(a.source_id || "").localeCompare(String(b.source_id || "")),
  )

  const tableRows = sortedRows.map((row) => ({
    Source: `[[sources/${row.source_id}]]`,
    Title: sourceLabel(row),
    "Source scope": sourceScope(row),
    Metals: metalsFor(row),
    "Author-scope row-fit": authorScopeRowFit(row),
    "Canonical appearance": canonicalAppearances.get(row.source_id) ?? "(context only)",
  }))

  return `${beginMarker}
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

${toMarkdownTable(tableRows)}

${endMarker}`
}

function upsertSection(text, section) {
  const pattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)
  // Function replacer: the Author-scope table carries source-derived prose that
  // can contain `$`-sequences; a string replacement would interpret them as
  // backreferences (the source-legend idempotency bug class).
  if (pattern.test(text)) return text.replace(pattern, () => section)

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

function authorScopeRowFit(row) {
  const declared = splitList(row.declared_products)
  const matrixAxis = classifyMatrix(declared)
  const formatAxis = classifyFormat(declared)
  const matrixSentence = `Matrix axis: ${matrixAxis.label}${matrixAxis.detail ? ` (${matrixAxis.detail})` : ""}.`
  const formatSentence = `Format axis: ${formatAxis.label}${formatAxis.detail ? ` (${formatAxis.detail})` : ""}.`

  let routeNote
  if (row.route_kind === "broad_powder_context") {
    routeNote = "Source resolves powder format but does not split soy from non-soy."
  } else if (row.route_kind === "broad_formula_context") {
    routeNote = "Source addresses infant formula broadly without splitting powder from RTF or soy from non-soy."
  } else {
    routeNote = "Source is broader than this row; authors do not narrow to this exact matrix/format pair."
  }

  return `${matrixSentence} ${formatSentence} ${routeNote}`
}

function classifyMatrix(declared) {
  const hasNonSoy = declared.some((p) => /(infant-formula).*non-soy/i.test(p) || /non-soy/i.test(p))
  const hasSoy = declared.some((p) => /soy-based/i.test(p))
  const hasGenericPowder = declared.some((p) => /^infant-formula-powder$/.test(p))
  const hasGenericFormula = declared.some((p) => /^infant-formula$/.test(p) || /infant-foods/i.test(p))

  if (hasNonSoy && !hasSoy) return { label: "exact", detail: "declares non-soy specifically" }
  if (hasSoy && !hasNonSoy) return { label: "exact", detail: "declares soy-based specifically" }
  if (hasNonSoy && hasSoy) return { label: "partial", detail: "covers both non-soy and soy without splitting" }
  if (hasGenericPowder) return { label: "unresolved", detail: "declares powder generally; soy/non-soy not split" }
  if (hasGenericFormula) return { label: "unresolved", detail: "declares infant formula broadly" }
  return { label: "unresolved", detail: null }
}

function classifyFormat(declared) {
  const hasPowder = declared.some((p) => /powder/i.test(p))
  const hasRtf = declared.some((p) => /rtf-liquid|ready-to-feed/i.test(p))
  const hasConcentrate = declared.some((p) => /concentrated-liquid|concentrate/i.test(p))
  const hasGenericFormula = declared.some((p) => /^infant-formula$/.test(p))

  if (hasPowder && !hasRtf && !hasConcentrate) return { label: "exact", detail: "powder" }
  if (hasRtf && !hasPowder && !hasConcentrate) return { label: "exact", detail: "ready-to-feed liquid" }
  if (hasConcentrate && !hasPowder && !hasRtf) return { label: "exact", detail: "concentrated liquid" }
  if ((hasPowder ? 1 : 0) + (hasRtf ? 1 : 0) + (hasConcentrate ? 1 : 0) > 1) {
    return { label: "partial", detail: "covers multiple formats without splitting" }
  }
  if (hasGenericFormula) return { label: "unresolved", detail: "powder vs RTF not split" }
  return { label: "unresolved", detail: null }
}

function buildCanonicalAppearanceMap(productPageText) {
  const map = new Map()
  const broadStart = productPageText.indexOf(beginMarker)
  const broadEnd = productPageText.indexOf(endMarker)
  const sliceOut = broadStart !== -1 && broadEnd !== -1
    ? productPageText.slice(0, broadStart) + productPageText.slice(broadEnd + endMarker.length)
    : productPageText

  const headingRegex = /^## (.+?)$/gm
  const headings = []
  let match
  while ((match = headingRegex.exec(sliceOut)) !== null) {
    headings.push({ title: match[1].trim(), index: match.index })
  }

  const sourceRegex = /\[\[sources\/([a-z0-9-]+?)(?:\|[^\]]*)?\]\]/g
  while ((match = sourceRegex.exec(sliceOut)) !== null) {
    const sourceId = match[1]
    const position = match.index
    const section = headings.filter((h) => h.index < position).slice(-1)[0]
    if (!section) continue
    if (map.has(sourceId)) continue
    map.set(sourceId, `Cross-reference - section: ${section.title}`)
  }

  return map
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
  return String(value ?? "")
    .replace(/\n/g, " ")
    .replace(/—/g, "-")
    .replace(/(?<!\\)\|/g, "\\|")
    .trim()
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
