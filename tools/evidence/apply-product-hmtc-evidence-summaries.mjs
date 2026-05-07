import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const gapPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const productDir = path.join(repoRoot, "wiki/products")
const sourceDir = path.join(repoRoot, "wiki/sources")
const occurrenceSummaryFiles = [
  "data/evidence/category1_formula_concentration_summary.csv",
  "data/evidence/category1_fda_baby_food_compliance_summary.csv",
  "data/evidence/category1_local_baby_food_occurrence_summary.csv",
  "data/evidence/category5_plant_milk_occurrence_summary.csv",
  "data/evidence/category5_tds_finished_food_occurrence_summary.csv",
  "data/evidence/category5_apple_juice_arsenic_speciation_summary.csv",
  "data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv",
]

const beginMarker = "<!-- BEGIN: hmi-hmtc-evidence-summary -->"
const endMarker = "<!-- END: hmi-hmtc-evidence-summary -->"

const gapRows = fs.existsSync(gapPath) ? parseCsv(fs.readFileSync(gapPath, "utf8")) : []
const occurrenceRows = readOccurrenceRows()
const sourceCatalog = readSourceCatalog()
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
  const parsed = matter(original)
  const testedMetals = asArray(parsed.data.hmtc_tested_metals).map(canonicalMetal).filter(Boolean)
  if (testedMetals.length === 0) continue

  const section = buildSection(productSlug, rows, { testedMetals })
  const next = upsertSection(original, section)
  if (next === original) continue

  fs.writeFileSync(pagePath, next, "utf8")
  updatedPages += 1
  writtenRows += testedMetals.length
}

console.log(`Updated ${updatedPages} product HMTc evidence summary section(s) with ${writtenRows} metal row(s).`)

function buildSection(productSlug, rows, productConfig) {
  const sortedRows = [...rows].sort((a, b) => metalSort(a.metal_species, b.metal_species))
  const testedMetals = unique(productConfig.testedMetals)
  const testedSet = new Set(testedMetals)
  const primaryMetals = testedMetals.length
    ? testedMetals
    : unique(sortedRows.map((row) => canonicalMetal(row.metal_species))).sort(metalSort)
  const primaryRows = primaryMetals
    .map((metal) => sortedRows.find((row) => canonicalMetal(row.metal_species) === metal))
    .filter(Boolean)
  const contextRows = testedMetals.length
    ? sortedRows.filter((row) => !testedSet.has(canonicalMetal(row.metal_species)))
    : []
  const sourceKeys = createSourceKeyRegistry("S")
  const contextSourceKeys = createSourceKeyRegistry("C")
  const targetLabels = unique(primaryRows.map((row) => targetLabel(row)))
  const overall = overallRead(primaryRows)
  const targetSentence = targetBoundarySentence(targetLabels)
  const candidateHeader = candidateHeaderForRows(primaryRows)

  const tableRows = primaryRows.map((row) =>
    standardsSnapshotRow(productSlug, row, candidateHeader, sourceKeys),
  )
  const contextSection = contextRows.length
    ? `\n\n### Context Evidence Appendix\n\nThe metals below remain visible for traceability, but they are not the primary HMTc standards decision surface for this product row.\n\n${toMarkdownTable(
        contextRows.map((row) => contextAppendixRow(productSlug, row, contextSourceKeys)),
      )}\n\n${contextSourceKeys.toMarkdown("Context Source Key")}`
    : ""
  const sourceKey = sourceKeys.toMarkdown("Source Key")

  return `${beginMarker}
## HMTc Standards Snapshot

<!-- audience: regulator, educator, app -->

${targetSentence} ${overall}

Source-scope percentiles are evidence inputs, not final HMTc standards. Clean rows use aggregate P90. Contaminated-platform rows use aggregate P10 by default, or P20 only when explicitly selected. Dirty P90 and clean P10 are not HMTc limit-setting targets.

${toMarkdownTable(tableRows)}

${sourceKey}${contextSection}

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

function targetBoundarySentence(targetLabels) {
  if (targetLabels.length === 1 && targetLabels[0] === "clean-platform P90") {
    return "Clean-category target: aggregate P90. Values shown in ppb. Current values are source-scope candidates unless marked final."
  }
  if (targetLabels.length === 1 && targetLabels[0].startsWith("contaminated-platform")) {
    return `${targetLabels[0]} target. Values shown in ppb. Current values are source-scope candidates unless marked final.`
  }
  if (targetLabels.length === 1) {
    return `${targetLabels[0]} target. Values shown in ppb. Current values are source-scope candidates unless marked final.`
  }
  return `Mixed standards targets: ${targetLabels.join(", ")}. Values shown in ppb. Current values are source-scope candidates unless marked final.`
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

function standardsSnapshotRow(productSlug, row, candidateHeader, sourceKeys) {
  const candidate = bestCandidateRow(productSlug, row)
  const sourceIds = unique([
    candidate?.source_id,
    ...occurrenceRows
      .filter(
        (sourceRow) =>
          sourceRow.row_slug === productSlug &&
          canonicalMetal(sourceRow.metal_species) === canonicalMetal(row.metal_species),
      )
      .map((sourceRow) => sourceRow.source_id),
  ])

  return {
    Metal: metalLabel(row.metal_species),
    [candidateHeader]: candidateRead(candidate, row),
    "Evidence confidence": evidenceConfidenceRead(candidate),
    "HMTc readiness": readinessRead(row),
    "Regulatory cap": regulatoryCap(row),
    Blocker: blockerRead(row),
    Sources: sourceKeys.markers(sourceIds),
  }
}

function contextAppendixRow(productSlug, row, sourceKeys) {
  const sourceIds = unique(
    occurrenceRows
      .filter(
        (sourceRow) =>
          sourceRow.row_slug === productSlug &&
          canonicalMetal(sourceRow.metal_species) === canonicalMetal(row.metal_species),
      )
      .map((sourceRow) => sourceRow.source_id),
  )
  return {
    Metal: metalLabel(row.metal_species),
    State: contextState(row),
    Sources: sourceKeys.markers(sourceIds),
  }
}

function candidateHeaderForRows(rows) {
  const statistics = unique(rows.map((row) => row.hmtc_standard_statistic))
  if (statistics.length === 1) {
    if (statistics[0] === "p90_ppb") return "Candidate P90"
    if (statistics[0] === "p10_ppb") return "Candidate P10"
    if (statistics[0] === "p20_ppb") return "Candidate P20"
  }
  return "Candidate percentile"
}

function bestCandidateRow(productSlug, gapRow) {
  const statistic = String(gapRow.hmtc_standard_statistic || "").trim()
  if (!statistic) return null

  return occurrenceRows
    .filter(
      (row) =>
        row.row_slug === productSlug &&
        canonicalMetal(row.metal_species) === canonicalMetal(gapRow.metal_species) &&
        hasValue(row[statistic]),
    )
    .sort((left, right) => candidateRank(right) - candidateRank(left))[0] ?? null
}

function candidateRank(row) {
  const directFit = String(row.row_fit || "").includes("direct") ? 1 : 0
  const n = Number(row.n || 0)
  const efRank = evidenceFitnessRank(row.evidence_fitness_verdict)
  const reviewed = String(row.review_state || "").includes("approved") ? 1 : 0
  return directFit * 100000 + efRank * 10000 + Math.min(n, 9999) + reviewed * 1000
}

function candidateRead(candidate, gapRow) {
  if (!candidate) return "None loaded"

  const statistic = String(gapRow.hmtc_standard_statistic || "p90_ppb")
  const value = formatNumber(candidate[statistic])
  const n = Number(candidate.n || 0)
  const basis = basisLabel(candidate.basis)
  const nText = n > 0 ? `N=${n}` : "N not loaded"
  return `${value} ppb; ${nText}; ${basis}; source-scope`
}

function evidenceConfidenceRead(candidate) {
  if (!candidate) return "0.00 (no candidate)"
  return `${confidenceScore(candidate).toFixed(2)} (source row)`
}

function confidenceScore(candidate) {
  let score = 0.6
  if (String(candidate.row_fit || "").includes("direct")) score += 0.12
  const n = Number(candidate.n || 0)
  if (n >= 100) score += 0.08
  else if (n >= 30) score += 0.05
  else if (n > 0) score += 0.03
  if (candidate.source_id) score += 0.04
  if (candidate.basis) score += 0.04
  if (evidenceFitnessRank(candidate.evidence_fitness_verdict) >= 4) score += 0.05
  else if (evidenceFitnessRank(candidate.evidence_fitness_verdict) >= 3) score += 0.03
  if (String(candidate.review_state || "").includes("machine")) score = Math.min(score, 0.93)
  return Math.max(0, Math.min(score, 0.95))
}

function readinessRead(row) {
  const score = readinessScore(row)
  return `${score.toFixed(2)} (${readinessLabel(row)})`
}

function readinessScore(row) {
  const status = String(row.aggregate_hmtc_percentile_status || "")
  if (status === "READY FOR AGGREGATE MATH REVIEW") return 0.8
  if (status === "PENDING: aggregate math after local extraction") return 0.55
  if (status.startsWith("DO NOT PUBLISH")) return 0.45
  if (status === "BLOCKED: summary evidence only") return 0.25
  if (status === "BLOCKED: local extraction pending") return 0.2
  if (status === "BLOCKED: species-specific evidence missing") return 0.1
  if (status === "BLOCKED: no structured evidence loaded") return 0.05
  return 0.15
}

function readinessLabel(row) {
  const status = String(row.aggregate_hmtc_percentile_status || "")
  if (status === "READY FOR AGGREGATE MATH REVIEW") return "math review"
  if (status === "PENDING: aggregate math after local extraction") return "pending extraction"
  if (status.startsWith("DO NOT PUBLISH")) return "aggregate incomplete"
  if (status === "BLOCKED: summary evidence only") return "summary only"
  if (status === "BLOCKED: no structured evidence loaded") return "no structured pool"
  if (status === "BLOCKED: species-specific evidence missing") return "species gap"
  if (status === "BLOCKED: local extraction pending") return "local extraction"
  if (status === "BLOCKED: local candidate review pending" || status === "BLOCKED: TDS product route review pending") {
    return "candidate review"
  }
  return "blocked"
}

function blockerRead(row) {
  const status = String(row.aggregate_hmtc_percentile_status || "")
  const pending = Number(row.pending_local_extract_source_count || 0)
  const candidates = Number(row.local_candidate_value_count || 0) + Number(row.tds_product_route_candidate_count || 0)

  if (status === "READY FOR AGGREGATE MATH REVIEW") {
    return "Run aggregate math and stability review"
  }
  if (status.startsWith("DO NOT PUBLISH")) {
    return "Needs at least one more fit distribution source"
  }
  if (status === "PENDING: aggregate math after local extraction") {
    return "Complete pending local extraction"
  }
  if (status === "BLOCKED: summary evidence only") {
    return "Needs sample-level values or reported target percentile"
  }
  if (status === "BLOCKED: no structured evidence loaded") {
    return "Load structured occurrence evidence"
  }
  if (status === "BLOCKED: species-specific evidence missing") {
    return "Exact analyte species missing"
  }
  if (status === "BLOCKED: local extraction pending") {
    return `${numberText(pending, "local source")} needs extraction`
  }
  if (status === "BLOCKED: local candidate review pending" || status === "BLOCKED: TDS product route review pending") {
    return `${numberText(candidates, "candidate row")} needs AI adjudication`
  }
  if (status === "BLOCKED: documented local sources are context-only") {
    return "Documented sources are context-only"
  }
  if (status === "BLOCKED: evidence fitness review needed") {
    return "Evidence fitness review needed"
  }
  return status || "Status not loaded"
}

function contextState(row) {
  const sourceCount = numberText(row.loaded_source_count, "source")
  const distributionCount = numberText(row.distribution_capable_source_count, "distribution source")
  return `${sourceCount}; ${distributionCount}; ${readinessLabel(row)}`
}

function regulatoryCap(row) {
  const value = String(row.lowest_regulatory_cap_ug_kg || "").trim()
  const source = String(row.lowest_regulatory_cap_source || "").trim()
  if (!value) return "None loaded"
  return source ? `${value} ppb (${regulatorySourceLabel(source)})` : `${value} ppb`
}

function regulatorySourceLabel(source) {
  const normalized = String(source || "").toLowerCase()
  if (normalized.startsWith("eu")) return "EU"
  if (normalized.startsWith("fda")) return "FDA"
  if (normalized.startsWith("codex")) return "Codex"
  if (normalized.startsWith("prop65")) return "Prop 65"
  return source
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

function createSourceKeyRegistry(prefix = "S") {
  const markersBySourceId = new Map()

  return {
    markers(sourceIds) {
      const markers = unique(sourceIds)
        .filter(Boolean)
        .map((sourceId) => this.marker(sourceId))
      return markers.length ? markers.join(" ") : "None"
    },
    marker(sourceId) {
      if (!markersBySourceId.has(sourceId)) {
        markersBySourceId.set(sourceId, `${prefix}${markersBySourceId.size + 1}`)
      }
      const marker = markersBySourceId.get(sourceId)
      return `<sup><a href="/sources/${sourceId}">${marker}</a></sup>`
    },
    toMarkdown(heading = "Source Key") {
      if (markersBySourceId.size === 0) return `### ${heading}\n\nNo source-scope candidates are loaded.`
      const lines = [...markersBySourceId.entries()].map(
        ([sourceId, marker]) => `- <sup><a href="/sources/${sourceId}">${marker}</a></sup> ${sourceTitle(sourceId)}`,
      )
      return `### ${heading}\n\n${lines.join("\n")}`
    },
  }
}

function sourceTitle(sourceId) {
  const knownShortTitles = new Map([
    ["fda2026-infant-formula-toxic-elements-special-survey", "FDA 2026 infant formula toxic-elements survey"],
    ["dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "Dabeka 2011 Canadian infant formula Pb/Cd/Al"],
    ["kazi2009-toxic-elements-in-infant-formulae", "Kazi 2009 infant formula toxic elements"],
    ["almeida2022-brazil-infant-formula-toxic-metals", "Almeida 2022 Brazil infant formula toxic metals"],
    ["chung2021-china-infant-formula-toxic-elements", "Chung 2021 China infant formula toxic elements"],
    ["fsa2016-infant-food-formula-metals-survey", "FSA 2016 infant foods/formula metals survey"],
    ["dabeka1987-canada-infant-formula-lead-cadmium", "Dabeka 1987 Canadian infant formula Pb/Cd"],
    ["pandelova2012-eu-baby-food-formula-elements", "Pandelova 2012 EU baby foods/formula elements"],
    ["burrell2010-aluminium-in-infant-formulas", "Burrell 2010 infant formula aluminium"],
    ["chuchu2013-aluminium-in-infant-formulas", "Chuchu 2013 infant formula aluminium"],
  ])
  if (knownShortTitles.has(sourceId)) return knownShortTitles.get(sourceId)
  const title = sourceCatalog.get(sourceId)?.title || readableSourceId(sourceId)
  const compacted = compactSourceTitle(title)
  return compacted.length > 90 ? readableSourceId(sourceId) : compacted
}

function compactSourceTitle(title) {
  return String(title || "")
    .replace(/^Content and Dietary Exposure Assessment of Toxic Elements in Infant Formulas from the Chinese Market$/i, "Chung 2021 China infant formula toxic elements")
    .replace(/^Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey$/i, "FDA 2026 infant formula toxic-elements survey")
    .replace(/^Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions$/i, "Dabeka 2011 Canadian infant formula Pb/Cd/Al")
    .replace(/^Toxic Metals and Metalloids in Infant Formulas Marketed in Brazil, and Child Health Risks According to the Target Hazard Quotients and Target Cancer Risk$/i, "Almeida 2022 Brazil infant formula toxic metals")
    .replace(/^Survey of metals in commercial infant foods, infant formula and non-infant specific foods$/i, "FSA 2016 infant foods and formula metals survey")
    .replace(/^Determination of Metals and Iodine in Infant Formula and Adult\/Pediatric Nutritional Formula by Inductively Coupled Plasma Mass Spectrometry \(ICP-MS\): First Action 2011\.19$/i, "FDA formula ICP-MS method")
}

function readableSourceId(sourceId) {
  return String(sourceId || "source").replace(/-/g, " ")
}

function upsertSection(text, section) {
  const pattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)
  const base = pattern.test(text) ? text.replace(pattern, "").replace(/\n{3,}/g, "\n\n") : text

  const productCrosswalk = "\n<!-- BEGIN: hmi-product-crosswalk -->"
  if (base.includes(productCrosswalk)) {
    const index = base.indexOf(productCrosswalk)
    return `${base.slice(0, index).trimEnd()}\n\n${section}\n\n${base.slice(index).trimStart()}`
  }

  const evidenceGovernance = "\n## Evidence Governance\n"
  if (base.includes(evidenceGovernance)) {
    const insertAfter = nextHeadingIndex(base, base.indexOf(evidenceGovernance) + evidenceGovernance.length)
    if (insertAfter >= 0) {
      return `${base.slice(0, insertAfter).trimEnd()}\n\n${section}\n\n${base.slice(insertAfter).trimStart()}`
    }
  }

  for (const anchor of ["\n## Scaffold Status", "\n## Distribution Context", "\n## Sources"]) {
    const index = base.indexOf(anchor)
    if (index !== -1) return `${base.slice(0, index).trimEnd()}\n\n${section}\n\n${base.slice(index).trimStart()}`
  }

  return `${base.trimEnd()}\n\n${section}\n`
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

function readOccurrenceRows() {
  const rows = []
  for (const relativePath of occurrenceSummaryFiles) {
    const filePath = path.join(repoRoot, relativePath)
    if (!fs.existsSync(filePath)) continue
    rows.push(...parseCsv(fs.readFileSync(filePath, "utf8")).map((row) => ({ ...row, evidence_file: relativePath })))
  }
  return rows
}

function readSourceCatalog() {
  const catalog = new Map()
  if (!fs.existsSync(sourceDir)) return catalog

  for (const file of fs.readdirSync(sourceDir).filter((name) => name.endsWith(".md"))) {
    const sourceId = path.basename(file, ".md")
    const parsed = matter(fs.readFileSync(path.join(sourceDir, file), "utf8"))
    catalog.set(sourceId, {
      title: parsed.data.title || parsed.data.citation_title || readableSourceId(sourceId),
    })
  }

  return catalog
}

function asArray(value) {
  if (Array.isArray(value)) return value
  if (value === null || value === undefined || value === "") return []
  return [value]
}

function canonicalMetal(value) {
  const metal = String(value || "").trim()
  const compact = metal.toLowerCase().replace(/[^a-z0-9]+/g, "")
  const aliases = new Map([
    ["pb", "Pb"],
    ["lead", "Pb"],
    ["cd", "Cd"],
    ["cadmium", "Cd"],
    ["tas", "tAs"],
    ["totalarsenic", "tAs"],
    ["as", "tAs"],
    ["ias", "iAs"],
    ["inorganicarsenic", "iAs"],
    ["thg", "tHg"],
    ["totalmercury", "tHg"],
    ["mehg", "MeHg"],
    ["methylmercury", "MeHg"],
    ["al", "Al"],
    ["aluminum", "Al"],
    ["aluminium", "Al"],
    ["ni", "Ni"],
    ["nickel", "Ni"],
    ["sn", "Sn"],
    ["tin", "Sn"],
    ["crvi", "Cr-VI"],
    ["chromiumvi", "Cr-VI"],
    ["crtotal", "Cr-total"],
    ["totalchromium", "Cr-total"],
  ])
  return aliases.get(compact) || metal
}

function hasValue(value) {
  return String(value ?? "").trim() !== ""
}

function evidenceFitnessRank(value) {
  const match = String(value || "").match(/EF-(\d+)/)
  if (!match) return 0
  return Math.max(0, 6 - Number(match[1]))
}

function formatNumber(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) return String(value || "")
  return Number.isInteger(number) ? String(number) : String(Number(number.toFixed(3)))
}

function basisLabel(value) {
  return String(value || "basis not loaded").replace(/_/g, "-")
}

function metalSort(a, b) {
  const order = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Al", "Ni", "Sn", "Cr-total", "Cr", "Cr-VI"]
  const ai = order.indexOf(canonicalMetal(a))
  const bi = order.indexOf(canonicalMetal(b))
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  return String(a || "").localeCompare(String(b || ""))
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
