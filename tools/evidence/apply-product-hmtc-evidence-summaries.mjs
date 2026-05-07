import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const gapPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const productDir = path.join(repoRoot, "wiki/products")

const beginMarker = "<!-- BEGIN: hmi-hmtc-evidence-summary -->"
const endMarker = "<!-- END: hmi-hmtc-evidence-summary -->"

const gapRows = fs.existsSync(gapPath) ? parseCsv(fs.readFileSync(gapPath, "utf8")) : []
const rowsByProduct = new Map()

for (const row of gapRows) {
  if (row.product_standard_scope !== "locked_hmtc_row") continue

  const productSlug = String(row.product_slug || "").trim()
  if (!productSlug) continue

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

console.log(`Updated ${updatedPages} product HMTc evidence summary section(s) with ${writtenRows} metal row(s).`)

function buildSection(rows) {
  const sortedRows = [...rows].sort((a, b) => metalSort(a.metal_species, b.metal_species))
  const targetLabels = unique(sortedRows.map((row) => targetLabel(row)))
  const overall = overallRead(sortedRows)
  const targetSentence =
    targetLabels.length === 1
      ? `This row's standards target is **${targetLabels[0]}**.`
      : `This row has mixed standards targets across metals: ${targetLabels.join(", ")}.`

  const tableRows = sortedRows.map((row) => ({
    Metal: metalLabel(row.metal_species),
    "Standards target": targetLabel(row),
    "Evidence pool": evidencePool(row),
    "Confidence/readiness": confidenceRead(row),
    "Regulatory cap": regulatoryCap(row),
  }))

  return `${beginMarker}
## HMTc Evidence Summary

<!-- audience: regulator, educator, app -->

${targetSentence} ${overall} This generated summary does not publish final HMTc limits; it shows whether the evidence pool can support the row-standard percentile under the governing principles.

Clean benchmark rows use aggregate P90. Contaminated-platform rows use aggregate P10 by default, or P20 only when explicitly selected. Source-reported percentiles stay source context until admitted into the exact-row aggregate pool, and any final HMTc value must be no higher than the lowest applicable loaded regulatory cap.

${toMarkdownTable(tableRows)}

${endMarker}`
}

function overallRead(rows) {
  const statuses = rows.map((row) => String(row.aggregate_hmtc_percentile_status || ""))
  const readyCount = statuses.filter((status) => status === "READY FOR AGGREGATE MATH REVIEW").length
  if (readyCount === rows.length && rows.length > 0) {
    return "All listed metals are ready for aggregate math review, then bootstrap/stability review before final approval."
  }
  if (readyCount > 0) {
    return "Some metals are ready for aggregate math review; blocked metals stay out of limit-setting until the stated evidence gap is closed."
  }
  return "No listed metal currently has a publishable aggregate HMTc value at the 80-95% confidence gate."
}

function targetLabel(row) {
  switch (row.hmtc_standard_percentile_target) {
    case "clean_p90":
      return "clean-platform P90"
    case "dirty_p10":
      return "contaminated-platform P10"
    case "dirty_p20":
      return "contaminated-platform P20"
    case "independent_p90":
      return "independent-row P90"
    default:
      return "not applicable"
  }
}

function evidencePool(row) {
  const sourceCount = numberText(row.loaded_source_count, "source")
  const distributionCount = numberText(row.distribution_capable_source_count, "distribution source")
  const summaryCount = numberText(row.summary_or_range_source_count, "summary source")
  const n = Number(row.loaded_n || 0)
  const nText = n > 0 ? `N=${n}` : "N not loaded"
  return `${sourceCount}; ${distributionCount}; ${summaryCount}; ${nText}`
}

function confidenceRead(row) {
  const status = String(row.aggregate_hmtc_percentile_status || "")
  const pending = Number(row.pending_local_extract_source_count || 0)
  const candidates = Number(row.local_candidate_value_count || 0) + Number(row.tds_product_route_candidate_count || 0)

  if (status === "READY FOR AGGREGATE MATH REVIEW") {
    return "Ready for aggregate math review; final use still needs bootstrap/stability review at the 80-95% confidence gate."
  }
  if (status.startsWith("DO NOT PUBLISH")) {
    return "Below confidence gate: only one fit distribution source is loaded."
  }
  if (status === "PENDING: aggregate math after local extraction") {
    return "Pending: extract local fit-source rows before confidence work."
  }
  if (status === "BLOCKED: summary evidence only") {
    return "Not estimable from summaries alone; needs sample-level values or the exact target percentile."
  }
  if (status === "BLOCKED: no structured evidence loaded") {
    return "Not estimable: no structured occurrence pool is loaded."
  }
  if (status === "BLOCKED: species-specific evidence missing") {
    return "Not estimable: exact analyte species is missing."
  }
  if (status === "BLOCKED: local extraction pending") {
    return `Blocked: ${numberText(pending, "local source")} still needs extraction.`
  }
  if (status === "BLOCKED: local candidate review pending" || status === "BLOCKED: TDS product route review pending") {
    return `Blocked: ${numberText(candidates, "candidate row")} needs AI adjudication and promotion.`
  }
  if (status === "BLOCKED: documented local sources are context-only") {
    return "Blocked: documented sources are context-only for this row."
  }
  if (status === "BLOCKED: evidence fitness review needed") {
    return "Blocked: evidence fitness review needed before confidence work."
  }
  return status || "Status not loaded."
}

function regulatoryCap(row) {
  const value = String(row.lowest_regulatory_cap_ug_kg || "").trim()
  const source = String(row.lowest_regulatory_cap_source || "").trim()
  if (!value) return "No loaded cap"
  return source ? `${value} ug/kg (${source})` : `${value} ug/kg`
}

function metalLabel(value) {
  const metal = String(value || "").trim()
  const links = new Map([
    ["Pb", "[[metals/lead]] (Pb)"],
    ["Cd", "[[metals/cadmium]] (Cd)"],
    ["tAs", "[[metals/arsenic-total]] (tAs)"],
    ["iAs", "[[metals/arsenic-inorganic]] (iAs)"],
    ["tHg", "[[metals/mercury-total]] (tHg)"],
    ["MeHg", "[[metals/mercury-methyl]] (MeHg)"],
    ["Al", "[[metals/aluminum]] (Al)"],
    ["Ni", "[[metals/nickel]] (Ni)"],
    ["Sn", "[[metals/tin]] (Sn)"],
  ])
  return links.get(metal) ?? metal
}

function numberText(value, singular) {
  const count = Number(value || 0)
  const label = count === 1 ? singular : `${singular}s`
  return `${count} ${label}`
}

function upsertSection(text, section) {
  const pattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)
  if (pattern.test(text)) return text.replace(pattern, section)

  const evidenceGovernance = "\n## Evidence Governance\n"
  if (text.includes(evidenceGovernance)) {
    const insertAfter = nextHeadingIndex(text, text.indexOf(evidenceGovernance) + evidenceGovernance.length)
    if (insertAfter >= 0) {
      return `${text.slice(0, insertAfter).trimEnd()}\n\n${section}\n\n${text.slice(insertAfter).trimStart()}`
    }
  }

  for (const anchor of ["\n## Scaffold Status", "\n## Distribution Context", "\n## Sources"]) {
    const index = text.indexOf(anchor)
    if (index !== -1) return `${text.slice(0, index).trimEnd()}\n\n${section}\n\n${text.slice(index).trimStart()}`
  }

  return `${text.trimEnd()}\n\n${section}\n`
}

function nextHeadingIndex(text, startIndex) {
  return text.indexOf("\n## ", startIndex)
}

function toMarkdownTable(rows) {
  if (rows.length === 0) return "No locked-row standards evidence rows are loaded for this product."

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

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}

function metalSort(a, b) {
  const order = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Al", "Ni", "Sn", "Cr", "Cr-VI"]
  const ai = order.indexOf(a)
  const bi = order.indexOf(b)
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  return String(a || "").localeCompare(String(b || ""))
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
