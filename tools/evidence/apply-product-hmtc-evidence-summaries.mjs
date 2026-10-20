import { contractOwnsPage } from "../contracts/page-owner.mjs"
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const gapPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const limitsPath = path.join(repoRoot, "data/evidence/regulatory_limits.csv")
const productDir = path.join(repoRoot, "wiki/products")
const sourceDir = path.join(repoRoot, "wiki/sources")
// Per CLAUDE.md Part 19 and the Governing Principles v2.0, standards arithmetic
// (percentile statistics, clean/dirty designation, pooling math, candidate
// values) does not live under wiki/. It lives under data/workbench/standards/
// and on the local staff Standards Workbench tool.
const workbenchSnapshotDir = path.join(repoRoot, "data/workbench/standards")
// HMI-GAP-1c root-cause fix (2026-09-10): this used to be a hard-coded seven-file
// allowlist. Every category6/7/11/24 and autonomy-extracted occurrence summary was
// therefore invisible to this generator, so product pages whose structured evidence
// lived in those files rendered "no contributing evidence loaded" while the rows sat
// in data/evidence/. Discover the files instead of enumerating them, so a new
// category summary wires itself in on the next run.
function discoverOccurrenceSummaryFiles() {
  const dir = path.join(repoRoot, "data/evidence")
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith("_summary.csv"))
    .sort()
    .map((name) => path.posix.join("data/evidence", name))
}

const beginMarker = "<!-- BEGIN: hmi-hmtc-evidence-summary -->"
const endMarker = "<!-- END: hmi-hmtc-evidence-summary -->"

const gapRows = fs.existsSync(gapPath) ? parseCsv(fs.readFileSync(gapPath, "utf8")) : []
const occurrenceRows = readOccurrenceRows()
const publicDisplayValueRows = readPublicDisplayValueRows()
const limitRows = fs.existsSync(limitsPath) ? parseCsv(fs.readFileSync(limitsPath, "utf8")) : []
const limitsById = new Map(limitRows.map((row) => [row.regulatory_limit_id, row]))
const sourceCatalog = readSourceCatalog()

const today = new Date().toISOString().slice(0, 10)

const rowsByProduct = new Map()
for (const row of gapRows) {
  if (row.product_standard_scope !== "locked_hmtc_row") continue
  const productSlug = String(row.product_slug || "").trim()
  if (!productSlug) continue
  if (!rowsByProduct.has(productSlug)) rowsByProduct.set(productSlug, [])
  rowsByProduct.get(productSlug).push(row)
}

if (rowsByProduct.size > 0) fs.mkdirSync(workbenchSnapshotDir, { recursive: true })

let updatedPages = 0
let staffSnapshotsWritten = 0

for (const [productSlug, rows] of [...rowsByProduct.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const pagePath = path.join(productDir, `${productSlug}.md`)
  if (!fs.existsSync(pagePath)) continue

  const original = fs.readFileSync(pagePath, "utf8")
  if (contractOwnsPage(original)) continue // Compiled by tools/contracts/build-pilot.mjs.
  const parsed = matter(original)
  const primaryMetals = pickPrimaryMetals(parsed.data, rows)
  if (primaryMetals.length === 0) continue

  const productLabel = String(parsed.data.label || parsed.data.title || productSlug)
  const subcategory = subcategoryDesignation(productSlug, parsed.data)

  const publicSection = buildPublicSection({
    productSlug,
    productLabel,
    subcategory,
    rows,
    primaryMetals,
  })
  const next = upsertSection(original, publicSection)
  if (next !== original) {
    fs.writeFileSync(pagePath, next, "utf8")
    updatedPages += 1
  }

  const staffFile = buildStaffSnapshot({
    productSlug,
    productLabel,
    subcategory,
    rows,
    primaryMetals,
  })
  fs.writeFileSync(path.join(workbenchSnapshotDir, `${productSlug}.md`), staffFile, "utf8")
  staffSnapshotsWritten += 1
}

console.log(
  `Updated ${updatedPages} product page(s) with literature evidence summaries; wrote ${staffSnapshotsWritten} workbench snapshot(s).`,
)

// ---------- Public block ----------

function buildPublicSection({ productSlug, productLabel, subcategory, rows, primaryMetals }) {
  const tableRows = primaryMetals.map((metal) => {
    const gapRow = rows.find((row) => canonicalMetal(row.metal_species) === metal) ?? {}
    const summaryRows = occurrenceRowsFor(productSlug, metal)
    const displayRows = publicDisplayValueRowsFor(productSlug, metal)
    if (summaryRows.length === 0 && displayRows.length > 0) {
      return publicDisplayRow(metal, gapRow, displayRows, subcategory)
    }
    return publicRow(metal, gapRow, summaryRows, subcategory)
  })

  const intro = [
    `The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in ${subcategory.introPhrase}. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.`,
    "",
    `Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.`,
  ].join("\n")

  return `${beginMarker}
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

${intro}

${toMarkdownTable(tableRows)}
${endMarker}`
}

function publicRow(metal, gapRow, summaryRows, subcategory) {
  return {
    Analyte: metalLabel(metal),
    Subcategory: subcategoryCell(metal, gapRow, summaryRows, subcategory),
    "Reported concentration range": rangeCell(summaryRows),
    "Detection rate": detectionCell(summaryRows),
    "Applicable regulatory cap": regulatoryCapCell(gapRow),
    Sources: sourceCountCell(summaryRows),
    Confidence: confidenceCell(summaryRows),
    Basis: basisCell(summaryRows),
  }
}

// values.jsonl rows marked public_summary_scope: "product_page_only" render in
// the public block when the product has no occurrence-register rows. They are
// never read by the staff snapshot, the gap report, or the pooling engine.
function publicDisplayRow(metal, gapRow, displayRows, subcategory) {
  const detected = displayRows.filter((row) => row.censoring !== "below_reporting_value")
  const censored = displayRows.length - detected.length
  const values = detected.map((row) => Number(row.normalized_value)).filter(Number.isFinite)
  const sourceIds = unique(displayRows.map((row) => row.source_id))
  const grey = displayRows.some((row) => String(row.evidence_tier || "").toUpperCase() === "C")
  const units = displayRows.reduce((n, row) => n + (Number(row.measurement_n) || 1), 0)
  const unitText = numberText(units, "unit")

  let range
  if (values.length === 0) range = `All ${unitText} below the reporting value`
  else {
    const lo = Math.min(...values)
    const hi = Math.max(...values)
    range = lo === hi ? `single-unit result ${formatNumber(lo)} ppb` : `single-unit results ${formatNumber(lo)} to ${formatNumber(hi)} ppb`
    range += ` (${numberText(values.length, "unit")}, ${numberText(sourceIds.length, "source")})`
    if (censored > 0) range += `; ${censored} below the reporting value`
  }

  const basisNotes = unique(displayRows.map((row) => (row.basis === "as_received" ? "as received (finished product as sold)" : basisLabel(row.basis))))
  return {
    Analyte: metalLabel(metal),
    Subcategory: `${subcategory.publicLabel} (direct row-fit; ${grey ? "grey-literature single units" : "single units"})`,
    "Reported concentration range": range,
    "Detection rate": `${detected.length}/${displayRows.length} tested units above the reporting value`,
    "Applicable regulatory cap": regulatoryCapCell(gapRow),
    Sources: `${sourceIds.length} cited${grey ? " (grey literature, evidence tier C)" : ""}`,
    Confidence: grey ? "low (grey literature; one unit per product)" : confidenceCell(displayRows),
    Basis: basisNotes.join("; "),
  }
}

function publicDisplayValueRowsFor(productSlug, metal) {
  return publicDisplayValueRows.filter(
    (row) => String(row.product_matrix || "").trim() === productSlug && canonicalMetal(row.metal_species) === metal,
  )
}

function subcategoryCell(metal, gapRow, summaryRows, subcategory) {
  const hasDirect = summaryRows.filter((row) => String(row.headline_eligible || "").trim() !== "false").some((row) => String(row.row_fit || "").includes("direct"))
  const hasAny = summaryRows.length > 0
  const fitNote = hasDirect
    ? "direct row-fit"
    : hasAny
      ? "summary-only / supporting context"
      : "no contributing evidence loaded"
  return `${subcategory.publicLabel} (${fitNote})`
}

// Rows a summary file marks headline_eligible=false (for example grey-literature
// news reports whose method is not printed) stay visible but never set the
// range; they are named after it with their grade.
function rangeCell(allRows) {
  if (allRows.length === 0) return "No concentration data loaded for this analyte"
  const summaryRows = allRows.filter((row) => String(row.headline_eligible || "").trim() !== "false")
  const nonHeadline = allRows.filter((row) => String(row.headline_eligible || "").trim() === "false")
  const nonHeadlineNote = nonHeadline.length
    ? nonHeadline
        .map((row) => `${row.evidence_grade || "not a headline figure"}: maximum ${formatNumber(row.max_ppb)} ppb, not a headline figure`)
        .join("; ")
    : ""
  if (summaryRows.length === 0) return `No headline range. ${nonHeadlineNote.charAt(0).toUpperCase()}${nonHeadlineNote.slice(1)}`

  let centralLo = Infinity
  let centralHi = -Infinity
  const centralSourceIds = new Set()
  const centralKind = new Set()
  let observedMax = -Infinity
  // Optional column: the lowest printed detected value for a source. Only some
  // summary files carry it; when present the cell reads as a detected range.
  let detectedMin = Infinity

  for (const row of summaryRows) {
    if (hasValue(row.min_detected_ppb)) {
      const low = Number(row.min_detected_ppb)
      if (Number.isFinite(low) && low < detectedMin) detectedMin = low
    }
    const censored = /less_than|below/i.test(String(row.censoring_status || ""))
    let central = null
    if (!censored) {
      if (hasValue(row.mean_ppb)) {
        central = Number(row.mean_ppb)
        centralKind.add("mean")
      } else if (hasValue(row.median_ppb)) {
        central = Number(row.median_ppb)
        centralKind.add("median")
      } else if (hasValue(row.p50_ppb)) {
        central = Number(row.p50_ppb)
        centralKind.add("median")
      }
    }
    if (Number.isFinite(central)) {
      if (central < centralLo) centralLo = central
      if (central > centralHi) centralHi = central
      if (row.source_id) centralSourceIds.add(row.source_id)
    }

    for (const candidate of [row.max_ppb, row.p100_ppb, row.mean_ub_ppb, row.mean_ppb]) {
      const value = Number(candidate)
      if (Number.isFinite(value) && value > observedMax) observedMax = value
    }
  }

  const parts = []
  if (centralSourceIds.size > 0) {
    const kindLabel = centralKindLabel(centralKind)
    if (centralLo === centralHi) {
      parts.push(`${kindLabel} ${formatNumber(centralLo)} ppb (${numberText(centralSourceIds.size, "source")})`)
    } else {
      parts.push(
        `${kindLabel} ${formatNumber(centralLo)} to ${formatNumber(centralHi)} ppb (${numberText(centralSourceIds.size, "source")})`,
      )
    }
  }
  if (Number.isFinite(observedMax)) {
    if (Number.isFinite(detectedMin) && detectedMin < observedMax) {
      parts.push(`detected values ${formatNumber(detectedMin)} to ${formatNumber(observedMax)} ppb`)
    } else {
      parts.push(`highest reported ${formatNumber(observedMax)} ppb`)
    }
  }

  if (parts.length === 0) return "Summary statistics only; no comparable numeric range across cited sources"
  if (nonHeadlineNote) parts.push(`also ${nonHeadlineNote}`)
  return parts.join("; ")
}

function centralKindLabel(kindSet) {
  if (kindSet.size === 0) return "central"
  if (kindSet.size === 1) {
    const kind = [...kindSet][0]
    return kind === "mean" ? "mean" : "median"
  }
  return "mean/median"
}

function detectionCell(summaryRows) {
  const sampleLevelRows = summaryRows.filter((row) => Number(row.n || 0) > 0 && hasValue(row.detected_n))
  if (sampleLevelRows.length === 0) return "Sample-level detection rate not reported"

  const lines = sampleLevelRows
    .sort((a, b) => Number(b.n || 0) - Number(a.n || 0))
    .slice(0, 1)
    .map((row) => {
      const n = Number(row.n || 0)
      const detected = Number(row.detected_n || 0)
      const percent = n > 0 ? Math.round((detected / n) * 100) : 0
      const sourceShort = sourceShortTitle(row.source_id)
      const basis = basisLabel(row.basis)
      return `${percent}% detected (${detected}/${n}, ${sourceShort}, ${basis})`
    })

  return lines.join("; ")
}

function regulatoryCapCell(gapRow) {
  const value = String(gapRow.lowest_regulatory_cap_ug_kg || "").trim()
  const id = String(gapRow.lowest_regulatory_cap_source || "").trim()
  if (!value) return "No applicable cap loaded"

  const limit = limitsById.get(id)
  if (!limit) return `${value} ppb`

  const auth = limit.authority || limit.jurisdiction || ""
  const page = limit.regulation_page ? `[[${limit.regulation_page}]]` : ""
  const basis = limit.basis ? ` (${limit.basis})` : ""
  const ref = page || auth
  return ref ? `${ref}: ${value} ppb${basis}` : `${value} ppb${basis}`
}

function sourceCountCell(summaryRows) {
  const count = uniqueSourceCount(summaryRows)
  const hasSynthesis = summaryRows.some((row) => isSynthesisSource(row.source_id))
  if (count === 0) return hasSynthesis ? "0 primary (commodity-synthesis context only)" : "0"
  return hasSynthesis ? `${count} cited (plus commodity-synthesis context)` : `${count} cited`
}

function confidenceCell(summaryRows) {
  const count = uniqueSourceCount(summaryRows)
  if (count === 0) return "data gap"
  if (count <= 2) return "low (1-2 sources)"
  if (count <= 10) return `medium (${count} sources)`
  return `high (${count} sources)`
}

function basisCell(summaryRows) {
  const bases = unique(summaryRows.map((row) => basisLabel(row.basis)).filter((value) => value && value !== "basis not loaded"))
  if (bases.length === 0) return "Basis not reported"
  return bases.join("; ")
}

// ---------- Staff snapshot ----------

function buildStaffSnapshot({ productSlug, productLabel, subcategory, rows, primaryMetals }) {
  const arithmeticTable = toMarkdownTable(
    primaryMetals.map((metal) => {
      const gapRow = rows.find((row) => canonicalMetal(row.metal_species) === metal) ?? {}
      const summaryRows = occurrenceRowsFor(productSlug, metal)
      const best = bestSummaryRow(summaryRows)
      return {
        Analyte: metalLabel(metal),
        p10: formatOrDash(best?.p10_ppb),
        p50: formatOrDash(best?.p50_ppb),
        p90: formatOrDash(best?.p90_ppb),
        p95: formatOrDash(best?.p95_ppb),
        p100: formatOrDash(best?.p100_ppb ?? best?.max_ppb),
        "n (Path A)": pathANText(best),
        Source: best ? `[[sources/${best.source_id}]]` : "no Path A dataset",
        Basis: best ? basisLabel(best.basis) : "—",
      }
    }),
  )

  const designationTable = toMarkdownTable(
    primaryMetals.map((metal) => {
      const summaryRows = occurrenceRowsFor(productSlug, metal)
      const best = bestSummaryRow(summaryRows)
      return {
        Analyte: metalLabel(metal),
        Designation: designationFor(productSlug, metal, summaryRows),
        "Comparator basis": comparatorBasis(productSlug, best, summaryRows),
      }
    }),
  )

  const eligibilityTable = toMarkdownTable(
    primaryMetals.map((metal) => {
      const gapRow = rows.find((row) => canonicalMetal(row.metal_species) === metal) ?? {}
      const summaryRows = occurrenceRowsFor(productSlug, metal)
      const naTier = uniqueSourceCount(summaryRows)
      return {
        Analyte: metalLabel(metal),
        n_a_tier: naTier,
        Path: pathLabel(gapRow, summaryRows),
        "CC eligibility verdict": eligibilityVerdict(gapRow, naTier),
        "Phase / next-ingest target": nextIngestTarget(gapRow),
      }
    }),
  )

  return [
    "---",
    `title: "Workbench standards snapshot — ${productLabel}"`,
    "type: workbench-standards-snapshot",
    "audience: [internal]",
    "noindex: true",
    `product_slug: ${productSlug}`,
    `public_page: products/${productSlug}`,
    `updated: ${today}`,
    "---",
    "",
    `# Workbench standards snapshot — ${productLabel}`,
    "",
    `Staff-only percentile arithmetic, clean/dirty designation per Part 19, Path A/B status, and CC eligibility verdict for ${productLabel}. This snapshot is regenerated by the HMTc evidence summary generator and rewritten end-to-end on every run; do not edit by hand.`,
    "",
    `Public-facing literature evidence summary for this row lives at [[products/${productSlug}]]; this page is the percentile-arithmetic side of that public summary and stays restricted to staff.`,
    "",
    "## Percentile arithmetic",
    "",
    `Selected Path A datasets for each analyte (single-source where one sample-level dataset dominates; aggregate review otherwise). Pooling decisions, LOQ handling, and clean-platform inclusion remain workbench-side.`,
    "",
    arithmeticTable,
    "",
    "## Clean and dirty designation",
    "",
    "Per-analyte within-pair classification (clean subcategory standard = p90; dirty subcategory standard = p30 per Part 19). Designations are scoped to this parent category and reset per analyte.",
    "",
    designationTable,
    "",
    "## CC eligibility and Path status",
    "",
    eligibilityTable,
    "",
    "## Operational reminders",
    "",
    "- Final HMT&C values must not exceed the lowest applicable loaded regulatory cap regardless of where p90 or p30 falls.",
    "- Pooling across sources requires basis matching (powder-as-sold, prepared-for-feeding, as-consumed) before percentile recalculation.",
    "- Speciation rules are non-substitutable: total arsenic, inorganic arsenic, total mercury, methylmercury, total chromium, and Cr-VI are tracked as separate analytes.",
    "- Source-count confidence ratings follow CLAUDE.md Part 6: low (1-2 sources), medium (3-10), high (more than 10).",
    "",
  ].join("\n")
}

function pathANText(row) {
  if (!row) return "-"
  const n = Number(row.n || 0)
  if (n > 0) return String(n)
  return "-"
}

function pathLabel(gapRow, summaryRows) {
  const distributionCapable = summaryRows.some(
    (row) => hasValue(row.p90_ppb) || hasValue(row.p50_ppb) || hasValue(row.p100_ppb),
  )
  if (distributionCapable) return "Path A (sample-level distribution)"
  if (summaryRows.length > 0) return "Path B (summary statistics / range only)"
  if (String(gapRow.aggregate_hmtc_percentile_status || "").includes("BLOCKED")) return "blocked"
  return "no Path A or Path B candidate"
}

function eligibilityVerdict(gapRow, naTier) {
  const status = String(gapRow.aggregate_hmtc_percentile_status || "")
  if (status === "READY FOR AGGREGATE MATH REVIEW") {
    if (naTier >= 3) return "At readiness bar"
    return "Approaching readiness bar"
  }
  if (status.startsWith("DO NOT PUBLISH")) return "Approaching (single distribution-capable source)"
  if (status.startsWith("BLOCKED")) return "Below readiness bar"
  if (status === "PENDING: aggregate math after local extraction") return "Pending extraction"
  if (status) return status
  return "Below readiness bar"
}

function nextIngestTarget(gapRow) {
  const needs = String(gapRow.evidence_needed || "").trim()
  if (needs) return needs
  if (String(gapRow.aggregate_hmtc_percentile_status || "").includes("species-specific")) {
    return "Speciation-specific source required (no substitution from total-species values)"
  }
  return "Continue baseline ingest"
}

function designationFor(productSlug, metal, summaryRows) {
  const hasDistribution = summaryRows.some((row) => hasValue(row.p90_ppb))
  if (!hasDistribution) return "summary-only (designation deferred)"

  if (/-non-soy$/.test(productSlug) || /-non-rice$/.test(productSlug)) return "clean (within-pair)"
  if (/-soy-based$/.test(productSlug) || /-rice-based$/.test(productSlug)) return "dirty (within-pair)"
  return "see workbench for comparator pair"
}

function comparatorBasis(productSlug, best, summaryRows) {
  if (!best) return "no sample-level dataset"
  const n = Number(best.n || 0)
  const nText = n > 0 ? `n=${n}` : "n not reported"
  return `${sourceShortTitle(best.source_id)} (${basisLabel(best.basis)}, ${nText})`
}

function bestSummaryRow(summaryRows) {
  if (summaryRows.length === 0) return null
  const ranked = [...summaryRows].sort((a, b) => candidateRank(b) - candidateRank(a))
  return ranked[0]
}

// ---------- Shared ----------

function pickPrimaryMetals(frontmatter, rows) {
  const explicit = asArray(frontmatter.primary_metals_of_concern).map(canonicalMetal).filter(Boolean)
  if (explicit.length > 0) return explicit

  const tested = asArray(frontmatter.hmtc_tested_metals).map(canonicalMetal).filter(Boolean)
  if (tested.length > 0) return tested

  return unique(rows.map((row) => canonicalMetal(row.metal_species))).sort(metalSort)
}

function occurrenceRowsFor(productSlug, metal) {
  return occurrenceRows.filter(
    (row) => String(row.row_slug || "").trim() === productSlug && canonicalMetal(row.metal_species) === metal,
  )
}

// A commodity-synthesis row is a rollup of literature that is already counted
// elsewhere, so counting it as an independent cited source overstates the evidence
// base. It stays in the row set (it drives the row-fit note) but not in the count.
function isSynthesisSource(sourceId) {
  return String(sourceId || "").startsWith("ingredient-synthesis:")
}

function uniqueSourceCount(rows) {
  return unique(rows.filter((row) => !isSynthesisSource(row.source_id)).map((row) => row.source_id)).length
}

function subcategoryDesignation(productSlug, frontmatter) {
  const productLabel = String(frontmatter.label || frontmatter.title || "").trim()

  const matrixVocab = new Map([
    ["non-soy", "non-soy (cow milk-based)"],
    ["soy-based", "soy-based"],
    ["rice-based", "rice-based"],
    ["non-rice", "non-rice grain-based"],
    ["apple-containing", "apple-containing"],
    ["non-apple", "non-apple"],
    ["root-vegetable-containing", "root-vegetable-containing"],
    ["non-root", "non-root vegetable"],
  ])
  const formatVocab = new Map([
    ["powder", "powder"],
    ["rtf-liquid", "ready-to-feed liquid"],
    ["concentrated-liquid", "concentrated liquid"],
    ["dry", "dry"],
    ["pouch", "pouch"],
    ["jar", "jar"],
    ["fresh", "fresh"],
  ])

  let matrix = null
  for (const [key, value] of matrixVocab) {
    if (productSlug.includes(key)) {
      matrix = value
      break
    }
  }
  let format = null
  for (const [key, value] of formatVocab) {
    if (productSlug.includes(key)) {
      format = value
      break
    }
  }

  // publicLabel is the cell-friendly subcategory tag; introPhrase reads inside a sentence.
  const phrase = [matrix, format].filter(Boolean).join(", ")
  const publicLabel = phrase || productLabel || friendly(productSlug)
  const introPhrase = phrase ? `${phrase} ${categoryNoun(productSlug)}`.trim() : productLabel || friendly(productSlug)

  return { publicLabel, introPhrase, matrix, format, productLabel }
}

function categoryNoun(productSlug) {
  if (productSlug.startsWith("infant-formula")) return "infant formula"
  if (productSlug.startsWith("baby-cereals")) return "baby cereal"
  if (productSlug.startsWith("fruit-juice")) return "fruit juice"
  if (productSlug.startsWith("vegetable-juice")) return "vegetable juice"
  if (productSlug.startsWith("fruit-purees")) return "fruit puree"
  if (productSlug.startsWith("vegetable-purees")) return "vegetable puree"
  if (productSlug.startsWith("mixed-meals")) return "mixed meal"
  if (productSlug.startsWith("fish-containing")) return "baby food"
  if (productSlug.startsWith("meat-and-poultry")) return "puree"
  return "product"
}

function friendly(slug) {
  return String(slug || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function sourceShortTitle(sourceId) {
  if (!sourceId) return "source"
  const knownShortTitles = new Map([
    ["fda2026-infant-formula-toxic-elements-special-survey", "FDA 2026"],
    ["dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "Dabeka 2011"],
    ["kazi2009-toxic-elements-in-infant-formulae", "Kazi 2009"],
    ["almeida2022-brazil-infant-formula-toxic-metals", "Almeida 2022"],
    ["chung2021-china-infant-formula-toxic-elements", "Chung 2021"],
    ["fsa2016-infant-food-formula-metals-survey", "FSA 2016"],
    ["dabeka1987-canada-infant-formula-lead-cadmium", "Dabeka 1987"],
    ["pandelova2012-eu-baby-food-formula-elements", "Pandelova 2012"],
    ["soares2000-chromium-vi-powdered-milk-formulas", "Soares 2000"],
    ["burrell2010-aluminium-in-infant-formulas", "Burrell 2010"],
    ["chuchu2013-aluminium-in-infant-formulas", "Chuchu 2013"],
  ])
  if (knownShortTitles.has(sourceId)) return knownShortTitles.get(sourceId)
  const fromCatalog = sourceCatalog.get(sourceId)
  if (fromCatalog?.shortTitle) return fromCatalog.shortTitle
  const match = sourceId.match(/^([a-z-]+?)(\d{4})/)
  if (match) {
    const author = match[1].replace(/-/g, " ").trim().split(" ").filter(Boolean)[0]
    if (author) return `${author.charAt(0).toUpperCase()}${author.slice(1)} ${match[2]}`
  }
  return sourceId.replace(/-/g, " ")
}

function metalLabel(value) {
  const metal = String(value || "").trim()
  const links = new Map([
    ["Pb", "[[metals/lead\\|Pb]]"],
    ["Cd", "[[metals/cadmium\\|Cd]]"],
    ["tAs", "[[metals/arsenic-total\\|tAs]]"],
    ["iAs", "[[metals/arsenic-inorganic\\|iAs]]"],
    ["tHg", "[[metals/mercury-total\\|tHg]]"],
    ["MeHg", "[[metals/mercury-methyl\\|MeHg]]"],
    ["Al", "[[metals/aluminum\\|Al]]"],
    ["Ni", "[[metals/nickel\\|Ni]]"],
    ["Sn", "[[metals/tin\\|Sn]]"],
    ["Cr-VI", "[[metals/chromium-hexavalent\\|Cr-VI]]"],
    ["Cr-total", "[[metals/chromium\\|Cr]]"],
    ["Cr", "[[metals/chromium\\|Cr]]"],
    ["U", "[[metals/uranium\\|U]]"],
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
  // Function replacer: keep `$`-sequences in the generated section literal (the
  // source-legend idempotency bug class).
  if (pattern.test(text)) return text.replace(pattern, () => section)
  const base = text

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

  for (const anchor of [
    "\n## Page Completeness",
    "\n## Scaffold Status",
    "\n## Distribution Context",
    "\n## Sources",
  ]) {
    const index = base.indexOf(anchor)
    if (index !== -1) return `${base.slice(0, index).trimEnd()}\n\n${section}\n\n${base.slice(index).trimStart()}`
  }

  return `${base.trimEnd()}\n\n${section}\n`
}

function nextHeadingIndex(text, startIndex) {
  return text.indexOf("\n## ", startIndex)
}

function toMarkdownTable(rows) {
  if (rows.length === 0) return "No literature evidence rows loaded for this product."

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
  for (const relativePath of discoverOccurrenceSummaryFiles()) {
    const parsed = parseCsv(fs.readFileSync(path.join(repoRoot, relativePath), "utf8"))
    if (parsed.length === 0) continue
    const keys = Object.keys(parsed[0])
    if (!keys.includes("metal_species")) continue
    // Two slug shapes exist in the register: row_slug (HMTc row files) and
    // product_slug (the category5 plant-milk shape). Both name the product page.
    const slugKey = keys.includes("row_slug") ? "row_slug" : keys.includes("product_slug") ? "product_slug" : null
    if (!slugKey) continue
    for (const row of parsed) {
      const slug = String(row[slugKey] || "").trim()
      if (!slug) continue
      rows.push({ ...row, row_slug: slug, summary_file: relativePath })
    }
  }
  return rows
}

function readPublicDisplayValueRows() {
  const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
  if (!fs.existsSync(valuesPath)) return []
  const rows = []
  for (const line of fs.readFileSync(valuesPath, "utf8").split("\n")) {
    if (!line.trim()) continue
    let row
    try {
      row = JSON.parse(line)
    } catch {
      continue
    }
    if (row.public_summary_scope !== "product_page_only") continue
    if (row.review_state !== "reviewed") continue
    rows.push(row)
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
      title: parsed.data.title || parsed.data.citation_title || sourceId.replace(/-/g, " "),
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
    ["cr", "Cr-total"],
    ["chromium", "Cr-total"],
    ["u", "U"],
    ["uranium", "U"],
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

function candidateRank(row) {
  const directFit = String(row.row_fit || "").includes("direct") ? 1 : 0
  const n = Number(row.n || 0)
  const efRank = evidenceFitnessRank(row.evidence_fitness_verdict)
  const reviewed = String(row.review_state || "").includes("approved") ? 1 : 0
  return directFit * 100000 + efRank * 10000 + Math.min(n, 9999) + reviewed * 1000
}

function formatNumber(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) return String(value || "")
  return Number.isInteger(number) ? String(number) : String(Number(number.toFixed(3)))
}

function formatOrDash(value) {
  if (!hasValue(value)) return "-"
  return formatNumber(value)
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
