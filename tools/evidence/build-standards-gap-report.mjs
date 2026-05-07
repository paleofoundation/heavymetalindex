import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const productDir = path.join(repoRoot, "wiki/products")
const summaryPath = path.join(repoRoot, "data/evidence/category1_formula_concentration_summary.csv")
const crosswalkPath = path.join(repoRoot, "data/evidence/product_regulatory_crosswalk.csv")
const queuePath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const outputPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const summaryOutputPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_summary.json")

const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""
const includeQueueOnlyMetals = args.get("include-queue-only-metals") === "true"

const productPages = readProductPages()
const valueRows = fs.existsSync(summaryPath) ? parseCsv(fs.readFileSync(summaryPath, "utf8")) : []
const regulatoryRows = fs.existsSync(crosswalkPath) ? parseCsv(fs.readFileSync(crosswalkPath, "utf8")) : []
const queueRows = fs.existsSync(queuePath) ? parseCsv(fs.readFileSync(queuePath, "utf8")) : []

const productSlugs = [...new Set([
  ...productPages.keys(),
  ...valueRows.map((row) => row.row_slug).filter(Boolean),
  ...regulatoryRows.map((row) => row.product_slug).filter(Boolean),
  ...queueRows.map((row) => row.product_slug).filter(Boolean),
])]
  .filter((slug) => !productFilter || slug === productFilter)
  .sort()

const reportRows = []
for (const productSlug of productSlugs) {
  const product = productPages.get(productSlug) ?? { label: readableSlug(productSlug), metals: [] }
    const metals = metalsForProduct(productSlug, product, valueRows, regulatoryRows, queueRows, includeQueueOnlyMetals)

  for (const metal of metals) {
    const loadedRows = valueRows.filter((row) => row.row_slug === productSlug && canonicalMetal(row.metal_species) === metal)
    const loadedRelatedSpeciesRows = valueRows.filter(
      (row) => row.row_slug === productSlug && relatedSpecies(canonicalMetal(row.metal_species), metal),
    )
    const regulatoryMatches = regulatoryRows.filter(
      (row) => row.product_slug === productSlug && splitMetals(row.metal_species).some((item) => canonicalMetal(item) === metal),
    )
    const pendingRows = queueRows.filter((row) => row.product_slug === productSlug)
    const pendingForMetal = pendingRows.filter((row) => queueMetals(row).some((item) => canonicalMetal(item) === metal))
    const pendingRelatedSpecies = pendingRows.filter((row) =>
      queueMetals(row).some((item) => relatedSpecies(canonicalMetal(item), metal)),
    )

    const loadedSourceIds = unique(loadedRows.map((row) => row.source_id).filter(Boolean))
    const distributionRows = loadedRows.filter((row) => hasValue(row.p90_ppb))
    const distributionSourceIds = unique(distributionRows.map((row) => row.source_id).filter(Boolean))
    const summaryOnlyRows = loadedRows.filter(
      (row) => !hasValue(row.p90_ppb) && (hasValue(row.mean_ppb) || hasValue(row.median_ppb) || hasValue(row.max_ppb)),
    )
    const p0Rows = pendingForMetal.filter((row) => row.priority?.startsWith("P0") && row.local_pdf_status === "local_pdf_found")
    const p2Rows = pendingForMetal.filter((row) => row.local_pdf_status === "candidate_local_pdf_needs_review")
    const p3Rows = pendingForMetal.filter((row) => row.local_pdf_status === "missing_local_pdf")
    const sourceRowsMissingValues = pendingForMetal.filter((row) => row.route_status === "source_on_page_no_structured_value")
    const basisValues = unique(loadedRows.map((row) => row.basis).filter(Boolean))
    const rowFits = unique(loadedRows.map((row) => row.row_fit).filter(Boolean))

    const status = aggregateStatus({
      metal,
      loadedRows,
      loadedRelatedSpeciesRows,
      distributionSourceIds,
      p0Rows,
      p2Rows,
      p3Rows,
      summaryOnlyRows,
    })

    reportRows.push({
      product_slug: productSlug,
      product_label: product.label,
      metal_species: metal,
      loaded_source_count: loadedSourceIds.length,
      loaded_n: sumNumeric(loadedRows.map((row) => row.n)),
      loaded_row_count: loadedRows.length,
      loaded_basis: basisValues.join("; "),
      loaded_row_fit: rowFits.join("; "),
      distribution_capable_source_count: distributionSourceIds.length,
      summary_or_range_source_count: unique(summaryOnlyRows.map((row) => row.source_id).filter(Boolean)).length,
      pending_local_extract_source_count: unique(p0Rows.map((row) => row.source_id)).length,
      candidate_pdf_match_count: unique(p2Rows.map((row) => row.source_id)).length,
      missing_pdf_count: unique(p3Rows.map((row) => row.source_id)).length,
      source_on_page_no_structured_value_count: unique(sourceRowsMissingValues.map((row) => row.source_id)).length,
      regulatory_reference_status: regulatoryStatus(regulatoryMatches),
      aggregate_hmtc_p90_status: status.status,
      evidence_needed: status.evidence_needed,
      local_papers_to_extract: sourceList(p0Rows),
      candidate_pdf_matches_to_review: sourceList(p2Rows),
      papers_to_find: sourceList(p3Rows),
      notes: status.notes,
    })
  }
}

writeCsv(outputPath, reportRows, [
  "product_slug",
  "product_label",
  "metal_species",
  "loaded_source_count",
  "loaded_n",
  "loaded_row_count",
  "loaded_basis",
  "loaded_row_fit",
  "distribution_capable_source_count",
  "summary_or_range_source_count",
  "pending_local_extract_source_count",
  "candidate_pdf_match_count",
  "missing_pdf_count",
  "source_on_page_no_structured_value_count",
  "regulatory_reference_status",
  "aggregate_hmtc_p90_status",
  "evidence_needed",
  "local_papers_to_extract",
  "candidate_pdf_matches_to_review",
  "papers_to_find",
  "notes",
])

const summary = {
  generated_at: new Date().toISOString(),
  product_filter: productFilter || "all",
  include_queue_only_metals: includeQueueOnlyMetals,
  total_gap_rows: reportRows.length,
  by_aggregate_status: countBy(reportRows, (row) => row.aggregate_hmtc_p90_status),
  rows_with_pending_local_extracts: reportRows.filter((row) => Number(row.pending_local_extract_source_count) > 0).length,
  rows_with_missing_pdfs: reportRows.filter((row) => Number(row.missing_pdf_count) > 0).length,
}
writeStableJsonSummary(summaryOutputPath, summary)

console.log(`Wrote ${reportRows.length} HMTc standards gap rows to ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote HMTc standards gap summary to ${path.relative(repoRoot, summaryOutputPath)}`)

function aggregateStatus({ metal, loadedRows, loadedRelatedSpeciesRows, distributionSourceIds, p0Rows, p2Rows, p3Rows, summaryOnlyRows }) {
  const pendingLocalCount = unique(p0Rows.map((row) => row.source_id)).length
  const candidateCount = unique(p2Rows.map((row) => row.source_id)).length
  const missingCount = unique(p3Rows.map((row) => row.source_id)).length
  const loadedSourceCount = unique(loadedRows.map((row) => row.source_id).filter(Boolean)).length
  const relatedOnlyCount = loadedRelatedSpeciesRows.length

  if (loadedRows.length === 0 && relatedOnlyCount > 0 && speciesNeedsExactMatch(metal)) {
    return {
      status: "BLOCKED: species-specific evidence missing",
      evidence_needed: `Load ${metal} rows for this product; related total-species rows cannot substitute.`,
      notes: "Total/speciated analytes are intentionally separated before HMTc standards math.",
    }
  }

  if (loadedRows.length === 0 && pendingLocalCount > 0) {
    return {
      status: "BLOCKED: local extraction pending",
      evidence_needed: "Extract local PDFs into structured candidate rows with N, basis, unit, analyte species, and usable statistics.",
      notes: "The papers are already local; this is an ingest/routing failure, not necessarily a source gap.",
    }
  }

  if (loadedRows.length === 0 && candidateCount > 0) {
    return {
      status: "BLOCKED: PDF match review pending",
      evidence_needed: "Confirm fuzzy local PDF matches, then extract only the papers that match the source page.",
      notes: "Candidate matches are not evidence until confirmed.",
    }
  }

  if (loadedRows.length === 0 && missingCount > 0) {
    return {
      status: "BLOCKED: source document missing",
      evidence_needed: "Find the local PDF or retrieve a web copy before extraction.",
      notes: "Use local folders first; web retrieval is the fallback.",
    }
  }

  if (loadedRows.length === 0) {
    return {
      status: "BLOCKED: no structured evidence loaded",
      evidence_needed: "Add or route fit-source product evidence before any HMTc p90 decision.",
      notes: "",
    }
  }

  if (distributionSourceIds.length === 0 && summaryOnlyRows.length > 0) {
    return {
      status: "BLOCKED: summary evidence only",
      evidence_needed:
        "Loaded rows support N/mean/median/max context, but aggregate p90 needs sample-level values or explicitly reported percentiles from fit sources.",
      notes: "Do not invent p50/p90/p95 from ranges or means.",
    }
  }

  if (distributionSourceIds.length === 1) {
    const extra = pendingLocalCount > 0 ? " Extract pending local sources before deciding." : ""
    return {
      status: "DO NOT PUBLISH P90: single distribution-capable source",
      evidence_needed: `Aggregate HMTc p90 needs multiple fit sources, not one source-reported or reconstructed distribution.${extra}`,
      notes: "A single source can remain loaded evidence, but it is not the HMTc aggregate.",
    }
  }

  if (distributionSourceIds.length > 1 && pendingLocalCount > 0) {
    return {
      status: "PENDING: aggregate math after local extraction",
      evidence_needed: "Run aggregate math only after pending local fit-source rows are extracted and reviewed.",
      notes: "Multiple distribution-capable sources exist, but the local backlog may materially change the p90.",
    }
  }

  if (distributionSourceIds.length > 1) {
    return {
      status: "READY FOR AGGREGATE MATH REVIEW",
      evidence_needed: "Review row fit, basis harmonization, censoring, and source weights before publishing an HMTc p90.",
      notes: "This is a readiness flag, not a final standards value.",
    }
  }

  return {
    status: "BLOCKED: evidence fitness review needed",
    evidence_needed: "Review loaded rows and pending sources before HMTc p90 math.",
    notes: `Loaded source count: ${loadedSourceCount}.`,
  }
}

function regulatoryStatus(rows) {
  if (rows.length === 0) return "No regulatory reference value loaded."
  return rows
    .map((row) => {
      const value = hasValue(row.regulatory_value_ug_kg) ? `${row.regulatory_value_ug_kg} ug/kg` : "no numeric value"
      const scope = row.regulatory_scope ? `; ${row.regulatory_scope}` : ""
      return `${row.regulatory_limit_id || "regulatory row"}: ${value}; ${row.regulatory_status || "status not loaded"}${scope}`
    })
    .join(" | ")
}

function metalsForProduct(productSlug, product, rows, regulatoryRows, queueRows, includeQueueOnly) {
  const metals = new Set(product.metals.map(canonicalMetal).filter(Boolean))
  for (const row of rows) {
    if (row.row_slug === productSlug) metals.add(canonicalMetal(row.metal_species))
  }
  for (const row of regulatoryRows) {
    if (row.product_slug === productSlug) splitMetals(row.metal_species).forEach((metal) => metals.add(canonicalMetal(metal)))
  }
  if (includeQueueOnly) {
    for (const row of queueRows) {
      if (row.product_slug === productSlug) queueMetals(row).forEach((metal) => metals.add(canonicalMetal(metal)))
    }
  }
  return [...metals].filter(Boolean).sort(metalSort)
}

function readProductPages() {
  const products = new Map()
  if (!fs.existsSync(productDir)) return products

  for (const file of fs.readdirSync(productDir).filter((name) => name.endsWith(".md"))) {
    const filePath = path.join(productDir, file)
    const parsed = matter(fs.readFileSync(filePath, "utf8"))
    const slug = parsed.data.category || path.basename(file, ".md")
    products.set(slug, {
      label: parsed.data.label || parsed.data.title || readableSlug(slug),
      metals: asArray(parsed.data.primary_metals_of_concern),
    })
  }

  return products
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

function queueMetals(row) {
  const missing = splitMetals(row.missing_metal_species)
  return missing.length > 0 ? missing : splitMetals(row.metals_declared)
}

function canonicalMetal(value) {
  const metal = String(value || "").trim()
  const aliases = new Map([
    ["lead", "Pb"],
    ["lead (pb)", "Pb"],
    ["cadmium", "Cd"],
    ["cadmium (cd)", "Cd"],
    ["arsenic-inorganic", "iAs"],
    ["inorganic arsenic", "iAs"],
    ["total arsenic", "tAs"],
    ["arsenic", "tAs"],
    ["mercury", "tHg"],
    ["total mercury", "tHg"],
    ["methylmercury", "MeHg"],
    ["aluminum", "Al"],
    ["aluminium", "Al"],
    ["nickel", "Ni"],
    ["tin", "Sn"],
    ["chromium", "Cr"],
  ])
  return aliases.get(metal.toLowerCase()) ?? metal
}

function relatedSpecies(candidate, target) {
  const pairs = [
    ["tAs", "iAs"],
    ["tHg", "MeHg"],
    ["Cr", "Cr-VI"],
  ]
  return pairs.some(([a, b]) => (candidate === a && target === b) || (candidate === b && target === a))
}

function speciesNeedsExactMatch(metal) {
  return ["iAs", "MeHg", "Cr-VI"].includes(metal)
}

function asArray(value) {
  if (Array.isArray(value)) return value.map(String)
  if (typeof value === "string") return splitMetals(value)
  return []
}

function hasValue(value) {
  return value !== null && value !== undefined && String(value).trim() !== ""
}

function sumNumeric(values) {
  return values.reduce((sum, value) => {
    const number = Number(value)
    return Number.isFinite(number) ? sum + number : sum
  }, 0)
}

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}

function sourceList(rows) {
  return unique(rows.map((row) => row.source_id).filter(Boolean)).join("; ")
}

function countBy(rows, keyFn) {
  const counts = {}
  for (const row of rows) {
    const key = keyFn(row) || "unknown"
    counts[key] = (counts[key] ?? 0) + 1
  }
  return counts
}

function metalSort(a, b) {
  const order = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Al", "Ni", "Sn", "Cr", "Cr-VI"]
  const ai = order.indexOf(a)
  const bi = order.indexOf(b)
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  return a.localeCompare(b)
}

function readableSlug(slug) {
  return String(slug).replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}
