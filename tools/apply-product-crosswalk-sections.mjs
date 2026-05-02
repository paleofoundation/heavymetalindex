import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const crosswalkPath = path.join(repoRoot, "data/evidence/product_regulatory_crosswalk.csv")
const limitsPath = path.join(repoRoot, "data/evidence/regulatory_limits.csv")
const productDir = path.join(repoRoot, "wiki/products")
const today = "2026-05-02"

const beginMarker = "<!-- BEGIN: hmi-product-crosswalk -->"
const endMarker = "<!-- END: hmi-product-crosswalk -->"
const crosswalkHeadings = [
  "## Federal / Regulatory Limits vs Field Findings",
  "## Regulatory Crosswalk Vs Field Findings",
]

const metalLinks = new Map([
  ["Pb", "[[metals/lead]] (Pb)"],
  ["Cd", "[[metals/cadmium]] (Cd)"],
  ["iAs", "[[metals/arsenic-inorganic]] (iAs)"],
  ["tAs", "[[metals/arsenic-total]] (tAs)"],
  ["tHg", "[[metals/mercury-total]] (tHg)"],
  ["MeHg", "[[metals/mercury-methyl]] (MeHg)"],
  ["Ni", "[[metals/nickel]] (Ni)"],
  ["Al", "[[metals/aluminum]] (Al)"],
  ["Sn", "[[metals/tin]] (Sn)"],
  ["U", "[[metals/uranium]] (U)"],
])

const category5Rows = [
  {
    slug: "fruit-juices-non-apple",
    title: "Fruit Juices, Non-Apple",
    label: "Fruit juices, non-apple",
    row: 1,
    base: "fruit-juices",
    variant: "clean_benchmark",
    ingredients: ["fruit-juice"],
    metals: ["Pb"],
  },
  {
    slug: "fruit-juices-apple-containing",
    title: "Fruit Juices, Apple-Containing",
    label: "Fruit juices, apple-containing",
    row: 2,
    base: "fruit-juices",
    variant: "contamination_platform",
    ingredients: ["fruit-juice", "apple"],
    metals: ["iAs", "Pb"],
  },
  {
    slug: "vegetable-juices-non-root",
    title: "Vegetable Juices, Non-Root",
    label: "Vegetable juices, non-root",
    row: 3,
    base: "vegetable-juices",
    variant: "clean_benchmark",
    ingredients: ["vegetables"],
    metals: ["Pb", "Cd"],
  },
  {
    slug: "vegetable-juices-root-vegetable-containing",
    title: "Vegetable Juices, Root-Vegetable-Containing",
    label: "Vegetable juices, root-vegetable-containing",
    row: 4,
    base: "vegetable-juices",
    variant: "contamination_platform",
    ingredients: ["vegetables", "carrots", "potatoes"],
    metals: ["Pb", "Cd"],
  },
  {
    slug: "sports-energy-drinks",
    title: "Sports/Energy Drinks",
    label: "Sports/energy drinks",
    row: 9,
    base: "sports-energy-drinks",
    variant: "independent_no_split",
    ingredients: [],
    metals: ["Pb", "Cd", "tAs"],
  },
  {
    slug: "flavored-waters",
    title: "Flavored Waters",
    label: "Flavored waters",
    row: 8,
    base: "flavored-waters",
    variant: "independent_no_split",
    ingredients: [],
    metals: ["Pb"],
  },
  {
    slug: "herbal-botanical-infusions",
    title: "Herbal/Botanical Infusions",
    label: "Herbal/botanical infusions",
    row: 10,
    base: "tea-taxonomy",
    variant: "clean_benchmark",
    ingredients: [],
    metals: ["Al", "Pb", "Cd"],
  },
  {
    slug: "true-tea-camellia-sinensis",
    title: "True Tea (Camellia Sinensis)",
    label: "True tea (Camellia sinensis)",
    row: 11,
    base: "tea-taxonomy",
    variant: "contamination_platform",
    ingredients: [],
    metals: ["Al", "Pb", "Cd"],
  },
  {
    slug: "matcha",
    title: "Matcha",
    label: "Matcha",
    row: 12,
    base: "tea-taxonomy",
    variant: "distinct_exposure_pathway",
    ingredients: [],
    metals: ["Al", "Pb", "Cd"],
  },
  {
    slug: "coffee",
    title: "Coffee",
    label: "Coffee",
    row: 13,
    base: "coffee",
    variant: "independent_no_split",
    ingredients: [],
    metals: ["Pb", "Cd", "tAs"],
  },
  {
    slug: "soft-drinks-carbonated-beverages",
    title: "Soft Drinks/Carbonated Beverages",
    label: "Soft drinks/carbonated beverages",
    row: 14,
    base: "soft-drinks-carbonated-beverages",
    variant: "independent_no_split",
    ingredients: [],
    metals: ["Pb", "Cd"],
  },
  {
    slug: "fermented-beverages-non-tea-based",
    title: "Fermented Beverages, Non-Tea-Based",
    label: "Fermented beverages, non-tea-based",
    row: 15,
    base: "kombucha-and-fermented-beverages",
    variant: "clean_benchmark",
    ingredients: [],
    metals: ["Pb", "Cd"],
  },
  {
    slug: "kombucha-tea-based",
    title: "Kombucha (Tea-Based)",
    label: "Kombucha (tea-based)",
    row: 16,
    base: "kombucha-and-fermented-beverages",
    variant: "contamination_platform",
    ingredients: [],
    metals: ["Al", "Pb", "Cd"],
  },
]

const crosswalkRows = parseCsv(fs.readFileSync(crosswalkPath, "utf8"))
const limitRows = parseCsv(fs.readFileSync(limitsPath, "utf8"))
const limitsById = new Map(limitRows.map((row) => [row.regulatory_limit_id, row]))
const rowsByProduct = groupBy(crosswalkRows, (row) => row.product_slug)

const touched = new Set()

for (const [slug, rows] of rowsByProduct) {
  const pagePath = path.join(productDir, `${slug}.md`)
  if (!fs.existsSync(pagePath)) {
    const row = category5Rows.find((candidate) => candidate.slug === slug)
    if (row) writeCategory5Page(pagePath, row, rows)
    else continue
  }
  upsertCrosswalkSection(pagePath, rows)
}

for (const row of category5Rows) {
  const pagePath = path.join(productDir, `${row.slug}.md`)
  if (!fs.existsSync(pagePath)) {
    writeCategory5Page(pagePath, row, rowsByProduct.get(row.slug) ?? [])
  }
  if (!touched.has(pagePath)) {
    upsertCrosswalkSection(pagePath, rowsByProduct.get(row.slug) ?? [])
  }
}

console.log(`Applied product crosswalk sections to ${touched.size} product pages.`)

function writeCategory5Page(pagePath, row, rows) {
  const regulations = [
    ...new Set(rows.map((entry) => entry.regulatory_limit_id).filter((id) => id && id !== "none_loaded")),
  ]
  const frontmatter = [
    "---",
    `type: product-category`,
    `category: ${row.slug}`,
    `hmtc_category: 5`,
    `hmtc_row: ${row.row}`,
    `label: "${row.label}"`,
    `base_taxonomy: ${row.base}`,
    `variant_type: ${row.variant}`,
    `provenance: category_5_step_0_locked`,
    `ingredient_targets: [${row.ingredients.join(", ")}]`,
    `primary_metals_of_concern: [${row.metals.join(", ")}]`,
    `vulnerable_population: general_population`,
    `applicable_regulations: [${regulations.join(", ")}]`,
    `evidence_fitness: EF-5`,
    `public_evidence_label: Data gap`,
    `review_state: draft`,
    `hmtc_threshold_status: data_gap`,
    `audience: [regulator, educator, consumer, app]`,
    `updated: ${today}`,
    `sources: 0`,
    "---",
    "",
    `# ${row.title}`,
    "",
    `This page is HMTc Category 5 row ${row.row} from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.`,
    "",
    "## Decision Snapshot",
    "",
    "| Field | Status |",
    "| --- | --- |",
    `| Row state | Locked row node; structured occurrence extraction ${rows.length > 0 ? "started" : "pending"} |`,
    `| Category hub | [[products/category-5-beverages]] |`,
    `| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |`,
    "| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |",
    "",
    "## Evidence Handling",
    "",
    "Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.",
    "",
    "## Sources",
    "",
    "- Source promotion pending.",
    "",
  ].join("\n")

  fs.writeFileSync(pagePath, frontmatter, "utf8")
}

function upsertCrosswalkSection(pagePath, rows) {
  let source = fs.readFileSync(pagePath, "utf8")
  const section = buildCrosswalkSection(rows)
  const marked = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}\\n?`, "m")

  if (marked.test(source)) {
    source = source.replace(marked, `${section}\n`)
  } else if (crosswalkHeadings.some((heading) => source.includes(heading))) {
    source = replaceLegacyCrosswalkSection(source, section)
  } else if (source.includes("\n## Evidence Governance\n")) {
    source = source.replace("\n## Evidence Governance\n", `\n${section}\n## Evidence Governance\n`)
  } else if (source.includes("\n## Decision Snapshot\n")) {
    const nextHeading = source.indexOf("\n## ", source.indexOf("\n## Decision Snapshot\n") + 1)
    if (nextHeading >= 0) source = `${source.slice(0, nextHeading)}\n\n${section}${source.slice(nextHeading)}`
    else source = `${source.trimEnd()}\n\n${section}\n`
  } else {
    const firstHeading = source.match(/^# .+$/m)
    if (firstHeading) {
      const insertAt = firstHeading.index + firstHeading[0].length
      source = `${source.slice(0, insertAt)}\n\n${section}${source.slice(insertAt)}`
    } else {
      source = `${section}\n\n${source}`
    }
  }

  source = source.replace(
    /Regulatory crosswalk pending\. <!-- UNCITED:[^\n]+ -->/g,
    "See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.",
  )
  source = source.replace(
    /Fruit-juice regulatory crosswalk should be populated from primary FDA juice action-level documents rather than from this narrative review alone\. <!-- UNCITED:[^\n]+ -->/g,
    "Primary FDA juice action-level documents are now captured in the page-level crosswalk above; exact use still requires apple/non-apple and canned/not-canned scope review.",
  )
  source = removeOrphanTableAfterMarker(source)
  source = source.replace(new RegExp(`${escapeRegExp(endMarker)}\\n{3,}`, "g"), `${endMarker}\n\n`)

  fs.writeFileSync(pagePath, source, "utf8")
  touched.add(pagePath)
}

function buildCrosswalkSection(rows) {
  const tableRows =
    rows.length > 0
      ? rows
          .map((row) =>
            [
              metalCell(row.metal_species),
              limitCell(row),
              readerFinding(row),
              readerRead(row),
              sourcesCell(row.sources),
            ]
              .map(tableCell)
              .join(" | "),
          )
          .map((row) => `| ${row} |`)
          .join("\n")
      : "| No loaded row | No federal or product-specific regulatory limit loaded yet | Comparable field finding extraction pending | Evidence-gap tracking only; do not infer a pass/fail status | [[products/regulatory-crosswalk-field-findings]] |"

  return `${beginMarker}
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
${tableRows}

${endMarker}
`
}

function replaceLegacyCrosswalkSection(source, section) {
  const headingMatch = crosswalkHeadings
    .map((heading) => ({ heading, index: source.indexOf(heading) }))
    .filter((entry) => entry.index >= 0)
    .sort((a, b) => a.index - b.index)[0]
  if (!headingMatch) return source

  const { heading, index: headingIndex } = headingMatch

  const lineStart = headingIndex > 0 && source[headingIndex - 1] === "\n" ? headingIndex - 1 : headingIndex
  const nextHeading = source.indexOf("\n## ", headingIndex + heading.length)
  const lineEnd = nextHeading >= 0 ? nextHeading : source.length

  return `${source.slice(0, lineStart)}\n${section.trimEnd()}${source.slice(lineEnd)}`
}

function removeOrphanTableAfterMarker(source) {
  const markerIndex = source.indexOf(endMarker)
  if (markerIndex < 0) return source

  const tableStart = markerIndex + endMarker.length
  const after = source.slice(tableStart)
  const tableMatch = after.match(/^\s*\| /)
  if (!tableMatch) return source

  const nextHeading = after.indexOf("\n## ", tableMatch.index ?? 0)
  if (nextHeading < 0) return source.slice(0, tableStart).trimEnd() + "\n"

  return `${source.slice(0, tableStart).trimEnd()}\n${after.slice(nextHeading)}`
}

function limitCell(row) {
  const limit = limitsById.get(row.regulatory_limit_id)
  if (!limit) {
    if (row.regulatory_status === "source-cited thresholds pending direct legal-source load") {
      return "No federal/product-specific limit loaded yet. Source-cited non-U.S. thresholds require direct legal-source, unit, basis, and species review."
    }
    return "No federal product-specific limit loaded in this crosswalk."
  }

  const page = limit.regulation_page ? `[[${limit.regulation_page}]]` : "Regulatory source"
  return `${page}: ${limitPrefix(limit)} ${limit.value_ug_kg} ug/kg ${limit.metal_species}. Scope: ${limit.product_scope}. Basis: ${limit.basis}.`
}

function limitPrefix(limit) {
  const status = limit.status.toLowerCase()
  const authority = limit.authority === "US-FDA" ? "Federal FDA" : `${limit.jurisdiction} ${limit.authority}`

  if (status.includes("draft")) return `${authority} draft level, not final:`
  if (status.includes("final guidance action level")) return `${authority} final action level:`
  if (status.includes("regulatory quality standard")) return `${authority} regulatory quality standard:`
  if (status.includes("guidance hazard-control level")) return `${authority} guidance hazard-control level:`
  if (status.includes("maximum level")) return `${authority} maximum level:`
  return `${authority} ${limit.status}:`
}

function readerFinding(row) {
  const summary = stripPercentileSummary(row.field_finding_summary)

  if (/category 5 source coverage pending/i.test(row.field_finding_summary)) {
    return "No comparable field-finding row has been promoted yet for this beverage category."
  }

  if (/structured row extraction pending/i.test(row.field_finding_summary)) {
    return "Promoted field evidence exists, but comparable product-row values have not been extracted yet."
  }

  if (row.product_slug.startsWith("infant-formula") && row.regulatory_limit_id === "none_loaded") {
    return `${summary}. FDA formula occurrence evidence is present, but no matched formula action level is loaded here.`
  }

  if (/D'Amato 2026/i.test(row.field_finding_summary) && row.metal_species === "iAs") {
    return "D'Amato 2026 reports 25 Italian rice-based beverages with iAs from 7 to 24 ug/kg; no sample exceeded 30 ug/kg."
  }

  if (/D'Amato 2026/i.test(row.field_finding_summary) && row.metal_species === "tAs") {
    return "D'Amato 2026 reports total arsenic from 9 to 58 ug/kg in rice-based beverages; total arsenic is context only and is not interchangeable with inorganic arsenic."
  }

  if (!summary) return "Comparable field-finding extraction pending."
  return summary
}

function readerRead(row) {
  const status = `${row.regulatory_status} ${row.comparison_status}`.toLowerCase()

  if (row.regulatory_limit_id === "none_loaded") {
    if (status.includes("source-cited thresholds pending")) {
      return "No compliance read yet. Load the direct legal text before using this row in regulatory or litigation analysis."
    }
    return "Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row."
  }

  if (status.includes("draft")) {
    return "Draft context only. Do not present this value as a final federal limit or an HMTc threshold."
  }

  if (status.includes("direct comparison available")) {
    return "Direct comparison available because matrix, analyte species, and unit basis match; still not an HMTc certification limit."
  }

  if (status.includes("blocked") || status.includes("pending")) {
    const specificStatus = stripPercentileSummary(row.comparison_status || "")
    if (/(basis|species|scope|product-as-placed|prepared-for-feeding|extracted|inorganic arsenic|total arsenic)/i.test(specificStatus)) {
      return specificStatus
    }
    return "Limit is visible, but exceedance comparison is blocked until product-row values are extracted and basis/species match."
  }

  if (status.includes("applies only") || status.includes("applicability")) {
    return "Use as regulatory context only until product scope is confirmed."
  }

  return stripPercentileSummary(row.comparison_status || row.hmtc_use)
}

function stripPercentileSummary(value) {
  return String(value || "")
    .replace(/,\s*P(?:10|25|50|75|90|95|99|100)\s*=\s*[^;]+/gi, "")
    .replace(/;\s*P(?:10|25|50|75|90|95|99|100)\s*=\s*[^;]+/gi, "")
    .replace(/\bP(?:10|25|50|75|90|95|99|100)\s*=\s*[^;]+;?\s*/gi, "")
    .replace(/\s*;\s*;/g, ";")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.;,])/g, "$1")
    .trim()
}

function metalCell(value) {
  return value
    .split(";")
    .map((metal) => metal.trim())
    .filter(Boolean)
    .map((metal) => metalLinks.get(metal) ?? metal)
    .join("; ")
}

function sourcesCell(value) {
  return value
    .split(";")
    .map((source) => source.trim())
    .filter(Boolean)
    .map((source) => `[[${source}]]`)
    .join("; ")
}

function tableCell(value) {
  return String(value || "")
    .replace(/\n/g, " ")
    .replace(/\|/g, "/")
    .trim()
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/)
  const headers = parseCsvLine(lines.shift())
  return lines.map((line) => {
    const cells = parseCsvLine(line)
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]))
  })
}

function parseCsvLine(line) {
  const cells = []
  let current = ""
  let quoted = false

  for (let index = 0; index < line.length; index++) {
    const char = line[index]
    if (quoted) {
      if (char === "\"" && line[index + 1] === "\"") {
        current += "\""
        index++
      } else if (char === "\"") {
        quoted = false
      } else {
        current += char
      }
    } else if (char === "\"") {
      quoted = true
    } else if (char === ",") {
      cells.push(current)
      current = ""
    } else {
      current += char
    }
  }

  cells.push(current)
  return cells
}

function groupBy(rows, key) {
  const grouped = new Map()
  for (const row of rows) {
    const value = key(row)
    if (!grouped.has(value)) grouped.set(value, [])
    grouped.get(value).push(row)
  }
  return grouped
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
