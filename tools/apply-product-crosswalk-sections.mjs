import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const crosswalkPath = path.join(repoRoot, "data/evidence/product_regulatory_crosswalk.csv")
const limitsPath = path.join(repoRoot, "data/evidence/regulatory_limits.csv")
const formulaSummaryPath = path.join(repoRoot, "data/evidence/category1_formula_concentration_summary.csv")
const sourceRoutingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const localReingestQueuePath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const localCandidateValuesPath = path.join(repoRoot, "data/evidence/local_reingest_candidate_values.csv")
const productDir = path.join(repoRoot, "wiki/products")
const today = "2026-05-03"

const beginMarker = "<!-- BEGIN: hmi-product-crosswalk -->"
const endMarker = "<!-- END: hmi-product-crosswalk -->"
const crosswalkHeadings = [
  "## Standards Evidence Matrix",
  "## HMTc Standards Evidence Matrix",
  "## Clean Subcategory P90 Workbench",
  "## Standards Decision Matrix",
  "## HMTc P90 Readiness",
  "## Regulatory Match Status",
  "## Federal / Regulatory Limits vs Field Findings",
  "## Regulatory Crosswalk Vs Field Findings",
]

const metalSlugs = new Map([
  ["Pb", "metals/lead"],
  ["Cd", "metals/cadmium"],
  ["iAs", "metals/arsenic-inorganic"],
  ["tAs", "metals/arsenic-total"],
  ["tHg", "metals/mercury-total"],
  ["MeHg", "metals/mercury-methyl"],
  ["Ni", "metals/nickel"],
  ["Al", "metals/aluminum"],
  ["Cr", "metals/chromium"],
  ["Cr-VI", "metals/chromium-vi"],
  ["Sn", "metals/tin"],
  ["U", "metals/uranium"],
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
const formulaSummaryRows = fs.existsSync(formulaSummaryPath)
  ? parseCsv(fs.readFileSync(formulaSummaryPath, "utf8"))
  : []
const sourceRoutingAuditRows = fs.existsSync(sourceRoutingAuditPath)
  ? parseCsv(fs.readFileSync(sourceRoutingAuditPath, "utf8"))
  : []
const localReingestQueueRows = fs.existsSync(localReingestQueuePath)
  ? parseCsv(fs.readFileSync(localReingestQueuePath, "utf8"))
  : []
const localCandidateValueRows = fs.existsSync(localCandidateValuesPath)
  ? parseCsv(fs.readFileSync(localCandidateValuesPath, "utf8"))
  : []
const limitsById = new Map(limitRows.map((row) => [row.regulatory_limit_id, row]))
const formulaSummaryByProductMetal = new Map(
  formulaSummaryRows
    .filter((row) => row.row_slug && row.metal_species && row.p90_ppb !== "")
    .map((row) => [summaryKey(row.row_slug, row.metal_species), row]),
)
const rowsByProduct = groupBy(crosswalkRows, (row) => row.product_slug)
const sourceRoutingRowsByProduct = groupBy(sourceRoutingAuditRows, (row) => row.product_slug)
const queueRowsByProduct = groupBy(localReingestQueueRows, (row) => row.product_slug)
const candidateCountsByProductSource = countBy(localCandidateValueRows, (row) => `${row.product_slug}::${row.source_id}`)

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

for (const entry of fs.readdirSync(productDir)) {
  if (!entry.endsWith(".md")) continue
  const pagePath = path.join(productDir, entry)
  if (touched.has(pagePath)) continue

  const source = fs.readFileSync(pagePath, "utf8")
  if (!/^type:\s*product-category\s*$/m.test(source)) continue

  const slug = entry.replace(/\.md$/, "")
  upsertCrosswalkSection(pagePath, rowsByProduct.get(slug) ?? [], slug)
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
    `This page is Category 5 row ${row.row} from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.`,
    "",
    "## Decision Snapshot",
    "",
    "| Field | Status |",
    "| --- | --- |",
    `| Row state | Locked row node; structured occurrence extraction ${rows.length > 0 ? "started" : "pending"} |`,
    `| Category hub | [[products/category-5-beverages]] |`,
    `| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |`,
    "| Standards use | Routing and evidence-gap tracking only; not a certification threshold |",
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

function upsertCrosswalkSection(pagePath, rows, productSlugOverride = "") {
  let source = fs.readFileSync(pagePath, "utf8")
  const fallbackMetals = frontmatterArray(source, "primary_metals_of_concern")
  const section = buildCrosswalkSection(rows, productSlugOverride || path.basename(pagePath, ".md"), fallbackMetals)
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
  source = sanitizeProductPagePublicLanguage(source)

  fs.writeFileSync(pagePath, source, "utf8")
  touched.add(pagePath)
}

function sanitizeProductPagePublicLanguage(source) {
  const frontmatterMatch = source.match(/^(---\n[\s\S]*?\n---\n?)([\s\S]*)$/)
  if (!frontmatterMatch) return sanitizeProductPageBody(source)

  return `${frontmatterMatch[1]}${sanitizeProductPageBody(frontmatterMatch[2])}`
}

function sanitizeProductPageBody(body) {
  const preserved = []
  const preserve = (match) => {
    const token = `__HMI_PRESERVED_DECISION_MATRIX_${preserved.length}__`
    preserved.push(match)
    return token
  }

  let sanitized = body.replace(/## Standards Decision Matrix[\s\S]*?<\/table>\n?/g, preserve)

  sanitized = sanitized
    .replace(/\bHMT&C certification limits\b/g, "certification limits")
    .replace(/\bHMT&C\b/g, "standards")
    .replace(/\bHMTc Category\b/g, "Category")
    .replace(/\bHMTc certification\b/g, "certification")
    .replace(/\bHMTc standards\b/g, "standards")
    .replace(/\bHMTc\b/g, "standards")
    .replace(/\bHMTC\b/g, "standards")
    .replace(/\bhmtc\b/g, "standards")
    .replace(/\bp10\/p90\/p100\b/gi, "source percentile/max")
    .replace(/\bp90\/p100\b/gi, "upper-percentile/max")
    .replace(/\bp90\/max\b/gi, "upper-percentile/max")
    .replace(/\bp90\b/gi, "upper-percentile")
    .replace(/\bp100\b/gi, "max")

  for (const [index, value] of preserved.entries()) {
    sanitized = sanitized.replace(`__HMI_PRESERVED_DECISION_MATRIX_${index}__`, value)
  }

  return sanitized
}

function buildCrosswalkSection(rows, productSlugOverride = "", fallbackMetals = []) {
  const productSlug = rows[0]?.product_slug || productSlugOverride
  const tableRows = buildStandardsEvidenceRows(productSlug, rows, fallbackMetals)

  const details = rows.length > 0 ? buildCrosswalkDetails(rows) : ""
  const decisionMatrix = buildStandardsDecisionMatrix(productSlug, rows, fallbackMetals)
  const measuredValues = buildMeasuredValuesAtGlance(productSlug)
  const routingAudit = buildSourceRoutingAuditDetails(productSlug)

  return `${beginMarker}
<span id="regulatory-match-status"></span>

## Standards Evidence Matrix

<!-- audience: regulator, retailer, brand, legal, app -->

This is the product evidence matrix for standards development. It does not treat a single study statistic as a finished standard. The page shows the metal, extracted N, loaded source statistics, regulatory reference values, resources, and evidence gaps so cited calculations can be run from approved rows.

<p class="hmi-standards-readiness-note"><strong>Calculation boundary:</strong> public product pages show inputs and completeness, not final standards math. A single distribution-capable source or summary/range-only evidence remains an input until the fit-source pool, basis/species decisions, censoring rules, and calculation trace are documented.</p>

<table class="hmi-standards-evidence-table">
<thead>
<tr>
<th>Metal</th>
<th>N</th>
<th>Loaded source values</th>
<th>Regulatory reference values</th>
<th>Resources</th>
</tr>
</thead>
<tbody>
${tableRows}
</tbody>
</table>

${decisionMatrix}
${details}
${measuredValues}
${routingAudit}
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

function buildStandardsEvidenceRows(productSlug, rows, fallbackMetals = []) {
  const measuredRows = measuredRowsForProduct(productSlug)
  const crosswalkMetals = rows.map((row) => row.metal_species)
  const measuredMetals = measuredRows.map((row) => row.metal_species)
  const metals = uniqueValues([...crosswalkMetals, ...measuredMetals, ...fallbackMetals])
    .sort((a, b) => metalOrder(a) - metalOrder(b) || a.localeCompare(b))

  if (metals.length === 0) {
    return `<tr>
<td>No loaded row</td>
<td><span class="hmi-missing-n">N pending</span></td>
<td>No structured product-row values are loaded yet.</td>
<td>No FDA or EU regulatory reference is loaded for this product row.</td>
<td>Source routing and value extraction pending.</td>
</tr>`
  }

  return metals
    .map((metal) => {
      const metalRows = measuredRows.filter((row) => row.metal_species === metal)
      const regulatoryRows = rows.filter((row) => row.metal_species === metal)
      return `<tr>
<td>${metalCell(metal)}</td>
<td>${extractedNCell(metalRows)}</td>
<td>${loadedSourceValuesCell(metalRows, metal, productSlug)}</td>
<td>${regulatoryRows.length > 0 ? regulatoryReferenceValuesCell(regulatoryRows, productSlug) : "No FDA or EU regulatory reference value is loaded for this product/metal."}</td>
<td>${standardsResourcesCell(productSlug, metalRows, regulatoryRows)}</td>
</tr>`
    })
    .join("\n")
}

function buildFallbackP90WorkbenchRows(metals) {
  return metals
    .map(
      (metal) => `<tr>
<td>${metalCell(metal)}</td>
<td><span class="hmi-crosswalk-status hmi-crosswalk-status--gap">No distribution input loaded</span></td>
<td>No FDA or EU regulatory reference value is loaded for this product/metal.</td>
<td>No structured product-row values are loaded yet.</td>
<td>Add sample-level values or source-reported distribution statistics for this product row and metal species.</td>
</tr>`,
    )
    .join("\n")
}

function buildStandardsDecisionMatrix(productSlug, rows, fallbackMetals = []) {
  const metrics = decisionMetrics(productSlug, rows, fallbackMetals)
  const tableRows = [
    decisionMatrixRow(
      "HMTc standards development",
      "Build a defensible clean-subcategory standard only after source inclusion, product fit, metal species, basis, censoring, and confidence are resolved.",
      standardsDevelopmentRead(metrics),
      standardsDevelopmentAction(metrics),
    ),
    decisionMatrixRow(
      "Retail/spec programs",
      "See regulatory reference values beside the extracted evidence record, without treating either one as the other.",
      retailSpecRead(metrics),
      "Use the loaded FDA/EU values as jurisdiction-specific guardrails; keep basis, status, and analyte labels visible in any procurement spec.",
    ),
    decisionMatrixRow(
      "Brand QC operations",
      "Turn the evidence pool into a test plan: which metals, which product form, which lab basis, and what data fields must be captured.",
      qcOperationsRead(metrics),
      "Match lab testing to the product row and metal species; capture sample count, LOD/LOQ, censoring, unit basis, and prepared-vs-as-sold handling.",
    ),
    decisionMatrixRow(
      "Legal/claims defense",
      "Separate evidence, standards work, and legal reference values so claims do not overstate comparability.",
      legalDefenseRead(metrics),
      legalDefenseAction(metrics),
    ),
  ].join("\n")

  return `## Standards Decision Matrix

<!-- audience: regulator, retailer, brand, legal, app -->

This matrix translates the product evidence into the decisions the page needs to support. It keeps HMTc standards calculations, regulatory references, operational QC, and legal defensibility separate so a visible limit is not mistaken for a finished HMTc standard.

<table class="hmi-decision-matrix-table">
<thead>
<tr>
<th>Decision lane</th>
<th>Question this page should answer</th>
<th>Current read</th>
<th>Next action</th>
</tr>
</thead>
<tbody>
${tableRows}
</tbody>
</table>
`
}

function decisionMatrixRow(lane, question, currentRead, nextAction) {
  return `<tr>
<td><strong>${escapeHtml(lane)}</strong></td>
<td>${escapeHtml(question)}</td>
<td>${currentRead}</td>
<td>${nextAction}</td>
</tr>`
}

function decisionMetrics(productSlug, rows, fallbackMetals = []) {
  const measuredRows = measuredRowsForProduct(productSlug)
  const measuredMetals = uniqueValues(measuredRows.map((row) => row.metal_species))
  const crosswalkMetals = uniqueValues(rows.map((row) => row.metal_species))
  const targetMetals = crosswalkMetals.length > 0 ? crosswalkMetals : uniqueValues(fallbackMetals)
  const allTrackedMetals = uniqueValues([...targetMetals, ...measuredMetals, ...fallbackMetals])
  const p90Rows = measuredRows.filter((row) => row.p90_ppb !== "" && row.row_fit === "direct_category1_row")
  const p90Metals = uniqueValues(p90Rows.map((row) => row.metal_species))
  const loadedLimits = uniqueLimits(rows)
  const loadedJurisdictions = uniqueValues(loadedLimits.map((limit) => jurisdictionGroup(limit)))
  const blockedRows = rows.filter((row) => comparisonAnswer(row).tone === "blocked")
  const directMatchRows = rows.filter((row) => comparisonAnswer(row).tone === "match")
  const routingRows = sourceRoutingRowsByProduct.get(productSlug) ?? []
  const missingRoutingRows = routingRows.filter(
    (row) => row.route_status === "missing_direct_product_route" || row.route_status === "missing_broad_product_context",
  )
  const pendingRoutingRows = routingRows.filter((row) => row.route_status !== "structured_values_present")
  const pageOnlyRows = routingRows.filter((row) => row.route_status === "source_on_page_no_structured_value")
  const structuredRoutingRows = routingRows.filter((row) => row.route_status === "structured_values_present")

  return {
    productSlug,
    rows,
    measuredRows,
    measuredMetals,
    crosswalkMetals,
    targetMetals,
    hasCrosswalkRows: rows.length > 0,
    allTrackedMetals,
    p90Rows,
    p90Metals,
    loadedLimits,
    loadedJurisdictions,
    blockedRows,
    directMatchRows,
    routingRows,
    missingRoutingRows,
    pendingRoutingRows,
    pageOnlyRows,
    structuredRoutingRows,
  }
}

function standardsDevelopmentRead(metrics) {
  const p90Text =
    metrics.p90Metals.length > 1
      ? `${metrics.p90Metals.length} metals have at least one distribution-capable row loaded (${escapeHtml(formatList(metrics.p90Metals))}); standards math still requires source-fit and basis review.`
      : metrics.p90Metals.length === 1
        ? `Only one metal has a distribution-capable row loaded (${escapeHtml(formatList(metrics.p90Metals))}); do not treat it as a finished HMTc standard.`
        : "No distribution-capable row is loaded for this product page yet."
  const crosswalkText =
    metrics.allTrackedMetals.length > 0
      ? ` Standards matrix tracks ${metrics.allTrackedMetals.length} metal/species row${plural(metrics.allTrackedMetals.length)} (${escapeHtml(formatList(metrics.allTrackedMetals))}).`
      : ""
  const routingText = pendingSourceNarrative(metrics.productSlug, "sentence")

  return `${p90Text}${crosswalkText}${routingText}`
}

function standardsDevelopmentAction(metrics) {
  if (metrics.p90Rows.length > 0) {
    return "Use the standards evidence matrix as the row index; add missing sources, normalize basis/species, then run the standards calculation only after the source pool is complete enough."
  }

  return "Promote structured product-row values first; an HMTc standard cannot be selected from source coverage, a single study, or regulatory limits alone."
}

function retailSpecRead(metrics) {
  if (metrics.loadedLimits.length === 0) {
    return "No FDA or EU product-specific reference value is loaded for this row."
  }

  const jurisdictionText = formatJurisdictions(metrics.loadedJurisdictions)
  const matchText =
    metrics.directMatchRows.length > 0
      ? ` ${metrics.directMatchRows.length} row${plural(metrics.directMatchRows.length)} currently ${metrics.directMatchRows.length === 1 ? "has" : "have"} a direct comparison read.`
      : ""
  const blockedText =
    metrics.blockedRows.length > 0
      ? ` ${metrics.blockedRows.length} row${plural(metrics.blockedRows.length)} ${metrics.blockedRows.length === 1 ? "is" : "are"} visible as context but blocked for direct comparison.`
      : ""

  return `${metrics.loadedLimits.length} regulatory reference value${plural(metrics.loadedLimits.length)} loaded (${escapeHtml(jurisdictionText)}).${matchText}${blockedText}`
}

function qcOperationsRead(metrics) {
  if (metrics.measuredRows.length === 0) {
    return "No structured measured-value rows are loaded yet; QC can only use the crosswalk narrative as a gap map."
  }

  const basisText = formatList(uniqueValues(metrics.measuredRows.map((row) => basisLabel(row.basis))))
  return `${metrics.measuredRows.length} measured-value row${plural(metrics.measuredRows.length)} loaded across ${metrics.measuredMetals.length} metal${plural(metrics.measuredMetals.length)}; current basis: ${escapeHtml(basisText)}.`
}

function extractedNCell(rows) {
  if (rows.length === 0) {
    return `<span class="hmi-missing-n">N pending</span>`
  }

  const totalN = rows.reduce((sum, row) => sum + numericValue(row.n), 0)
  const sourceCount = uniqueSourceCount(rows)
  const bases = uniqueValues(rows.map((row) => basisLabel(row.basis)))
  return `<strong>${formatNumber(totalN)}</strong>
<span class="hmi-crosswalk-status-note">${sourceCount} source${plural(sourceCount)}; ${escapeHtml(formatList(bases))}</span>`
}

function loadedSourceValuesCell(rows, metal, productSlug) {
  if (rows.length === 0) {
    if (metal === "iAs") {
      const totalArsenicRows = measuredRowsForProduct(productSlug).filter((row) => row.metal_species === "tAs")
      if (totalArsenicRows.length > 0) {
        return "No inorganic-arsenic values are loaded. Total arsenic is present elsewhere but cannot substitute for iAs."
      }
    }
    return "No structured values loaded for this metal/species."
  }

  const entries = rows.map((row) => `<li>${sourceValueLine(row)}</li>`)
  return `<ul class="hmi-compact-list">${entries.join("")}</ul>`
}

function sourceValueLine(row) {
  const stats = sourceStats(row)
  const statsText = stats.length > 0 ? stats.join("; ") : "value statistics not extracted"
  return `${sourceLinkById(row.source_id)}: N=${escapeHtml(row.n || "pending")}; ${escapeHtml(basisLabel(row.basis))}; ${statsText} ${escapeHtml(row.unit || "ppb")}`.trim()
}

function sourceStats(row) {
  const stats = []
  const range = rangeFromRow(row)
  if (row.mean_ppb !== "") stats.push(`mean ${formatNumber(row.mean_ppb)}`)
  else if (row.mean_lb_ppb !== "" || row.mean_ub_ppb !== "") stats.push(lbUbMeanText(row))
  if (row.median_ppb !== "") stats.push(`median ${formatNumber(row.median_ppb)}`)
  if (range) stats.push(`range ${range}`)
  if (row.max_ppb !== "") stats.push(`highest ${formatNumber(row.max_ppb)}`)
  else if (row.p100_ppb !== "") stats.push(`highest ${formatNumber(row.p100_ppb)}`)
  else if (
    (row.censoring_status === "less_than" || row.censoring_status === "less_than_loq" || row.censoring_status === "less_than_lod") &&
    row.censoring_limit_ppb !== ""
  ) {
    stats.push(`reported <${formatNumber(row.censoring_limit_ppb)}`)
  }
  return stats
}

function rangeFromRow(row) {
  const scope = String(row.statistic_scope || "")
  const match = scope.match(/range\s+([0-9.]+)\s*-\s*([0-9.]+)/i)
  if (!match) return ""
  return `${formatNumber(match[1])}-${formatNumber(match[2])}`
}

function lbUbMeanText(row) {
  if (row.mean_lb_ppb !== "" && row.mean_ub_ppb !== "") {
    return `LB/UB mean ${formatNumber(row.mean_lb_ppb)}-${formatNumber(row.mean_ub_ppb)}`
  }
  if (row.mean_ub_ppb !== "") return `mean up to ${formatNumber(row.mean_ub_ppb)}`
  return `mean at least ${formatNumber(row.mean_lb_ppb)}`
}

function standardsResourcesCell(productSlug, measuredRows, regulatoryRows) {
  const sourceIds = new Set()
  for (const row of measuredRows) {
    if (row.source_id) sourceIds.add(row.source_id)
  }
  for (const row of regulatoryRows) {
    for (const ref of String(row.sources || "")
      .split(";")
      .map((value) => value.trim())
      .filter(Boolean)) {
      if (ref.startsWith("sources/")) sourceIds.add(ref.replace(/^sources\//, ""))
    }
  }

  const links = [...sourceIds].map((sourceId) => `<li>${sourceLinkById(sourceId)}</li>`)
  const pendingLine = pendingSourceNarrative(productSlug, "list")

  if (links.length === 0 && !pendingLine) return "No extracted source resource is attached yet."
  return `<ul class="hmi-compact-list">${links.join("")}${pendingLine}</ul>`
}

function pendingSourceCount(productSlug) {
  const rows = sourceRoutingRowsByProduct.get(productSlug) ?? []
  return uniqueSourceCount(rows.filter((row) => row.route_status !== "structured_values_present"))
}

function pendingSourceNarrative(productSlug, mode = "sentence") {
  const metrics = pendingSourceMetrics(productSlug)
  if (!metrics || metrics.total === 0) return ""

  const parts = []
  if (metrics.directExtract > 0) {
    parts.push(`${metrics.directExtract} ${metrics.directExtract === 1 ? "needs" : "need"} direct product-row extraction`)
  }
  if (metrics.directPromote > 0) {
    parts.push(`${metrics.directPromote} ${metrics.directPromote === 1 ? "needs" : "need"} direct source promotion onto the product page`)
  }
  if (metrics.rowFitReview > 0) {
    parts.push(`${metrics.rowFitReview} ${metrics.rowFitReview === 1 ? "needs" : "need"} row-fit review before extraction`)
  }
  if (metrics.contextOnly > 0) {
    parts.push(`${metrics.contextOnly} ${metrics.contextOnly === 1 ? "needs" : "need"} context extraction or context-only documentation`)
  }
  if (metrics.candidateReady > 0) {
    parts.push(`${metrics.candidateReady} already ${metrics.candidateReady === 1 ? "has" : "have"} deterministic candidate row${plural(metrics.candidateReady)} ready to publish`)
  }
  if (metrics.needsExtraction > 0 && parts.length === 0) {
    parts.push(`${metrics.needsExtraction} ${metrics.needsExtraction === 1 ? "has" : "have"} matched local source file${plural(metrics.needsExtraction)} but still need extraction or review`)
  }
  if (metrics.needsPdfMatch > 0) {
    parts.push(`${metrics.needsPdfMatch} still ${metrics.needsPdfMatch === 1 ? "needs" : "need"} local file-match review`)
  }
  if (metrics.needsSourceFile > 0) {
    parts.push(`${metrics.needsSourceFile} still ${metrics.needsSourceFile === 1 ? "needs" : "need"} a located local source file`)
  }

  const breakdown = parts.length > 0 ? ` ${parts.join("; ")}.` : ""
  if (mode === "list") {
    return `<li>${metrics.total} routed source${plural(metrics.total)} still need follow-up.${breakdown ? ` ${escapeHtml(breakdown.trim())}` : ""}</li>`
  }
  return ` ${metrics.total} routed source${plural(metrics.total)} still need follow-up before the evidence pool is complete.${breakdown}`
}

function pendingSourceMetrics(productSlug) {
  const queueRows = queueRowsByProduct.get(productSlug) ?? []
  if (queueRows.length === 0) {
    const total = pendingSourceCount(productSlug)
    return total > 0 ? { total, candidateReady: 0, needsExtraction: total, needsPdfMatch: 0, needsSourceFile: 0 } : null
  }

  const bySource = new Map()
  for (const row of queueRows) {
    if (!row.source_id) continue
    if (!bySource.has(row.source_id)) bySource.set(row.source_id, row)
  }

  const metrics = {
    total: bySource.size,
    candidateReady: 0,
    needsExtraction: 0,
    needsPdfMatch: 0,
    needsSourceFile: 0,
    directExtract: 0,
    directPromote: 0,
    rowFitReview: 0,
    contextOnly: 0,
  }

  for (const [sourceId, row] of bySource) {
    const candidateCount = Number(candidateCountsByProductSource[`${productSlug}::${sourceId}`] ?? 0)
    if (row.local_pdf_status === "missing_local_pdf") {
      metrics.needsSourceFile += 1
      continue
    }
    if (row.local_pdf_status === "candidate_local_pdf_needs_review") {
      metrics.needsPdfMatch += 1
      continue
    }
    if (candidateCount > 0) {
      metrics.candidateReady += 1
      continue
    }
    metrics.needsExtraction += 1
    if (row.priority === "P0-extract-direct-product-values") metrics.directExtract += 1
    else if (row.priority === "P0-promote-direct-product-source") metrics.directPromote += 1
    else if (row.priority === "P1-resolve-row-fit-before-extraction") metrics.rowFitReview += 1
    else if (row.priority === "P1-extract-or-document-context-only") metrics.contextOnly += 1
  }

  return metrics
}

function aggregateP90StatusCell(metal, rows, productSlug) {
  const distributionRows = rows.filter((row) => row.p90_ppb !== "" && row.row_fit === "direct_category1_row")
  const summaryRows = rows.filter((row) => row.row_fit !== "direct_category1_row")

  if (metal === "iAs" && rows.length === 0) {
    const totalArsenicRows = measuredRowsForProduct(productSlug).filter((row) => row.metal_species === "tAs")
    if (totalArsenicRows.length > 0) {
      return `<span class="hmi-crosswalk-status hmi-crosswalk-status--blocked">Not calculable</span>
<span class="hmi-crosswalk-status-note">No iAs pool; total As cannot stand in for inorganic arsenic.</span>`
    }
  }

  if (distributionRows.length >= 2) {
    return `<span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Ready for calculation review</span>
<span class="hmi-crosswalk-status-note">${distributionRows.length} distribution-capable source rows; verify basis and censoring before calculating a standards value.</span>`
  }

  if (distributionRows.length === 1) {
    return `<span class="hmi-crosswalk-status hmi-crosswalk-status--blocked">More source rows needed</span>
<span class="hmi-crosswalk-status-note">One source has calculation-ready distribution detail; standards math requires multiple fit sources.</span>`
  }

  if (summaryRows.length > 0) {
    return `<span class="hmi-crosswalk-status hmi-crosswalk-status--gap">Not calculable</span>
<span class="hmi-crosswalk-status-note">Loaded rows are summary/range context only; extract sample-level or distribution-capable values.</span>`
  }

  return `<span class="hmi-crosswalk-status hmi-crosswalk-status--gap">Not calculable</span>
<span class="hmi-crosswalk-status-note">No structured values loaded for this metal/species.</span>`
}

function aggregateP90StatusInline(metal, rows, productSlug) {
  const status = aggregateP90Status(metal, rows, productSlug)
  return `<p class="hmi-calculation-inputs-inline"><span class="hmi-crosswalk-status hmi-crosswalk-status--${status.tone}">${escapeHtml(status.label)}</span><span class="hmi-crosswalk-status-note">${escapeHtml(status.note)}</span></p>`
}

function aggregateP90Status(metal, rows, productSlug) {
  const distributionRows = rows.filter((row) => row.p90_ppb !== "" && row.row_fit === "direct_category1_row")
  const summaryRows = rows.filter((row) => row.row_fit !== "direct_category1_row")

  if (metal === "iAs" && rows.length === 0) {
    const totalArsenicRows = measuredRowsForProduct(productSlug).filter((row) => row.metal_species === "tAs")
    if (totalArsenicRows.length > 0) {
      return {
        label: "Calculation inputs: incomplete",
        tone: "blocked",
        note: "No iAs pool; total As cannot stand in for inorganic arsenic.",
      }
    }
  }

  if (distributionRows.length >= 2) {
    return {
      label: "Calculation inputs: ready for review",
      tone: "pending",
      note: `${distributionRows.length} distribution-capable source rows; verify basis and censoring before calculating a standards value.`,
    }
  }

  if (distributionRows.length === 1) {
    return {
      label: "Calculation inputs: incomplete",
      tone: "blocked",
      note: "One source has calculation-ready distribution detail; standards math requires multiple fit sources.",
    }
  }

  if (summaryRows.length > 0) {
    return {
      label: "Calculation inputs: incomplete",
      tone: "gap",
      note: "Summary/range context only; extract sample-level or distribution-capable values.",
    }
  }

  return {
    label: "Calculation inputs: incomplete",
    tone: "gap",
    note: "No structured values loaded for this metal/species.",
  }
}

function numericValue(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

function legalDefenseRead(metrics) {
  const blockedText =
    metrics.blockedRows.length > 0
      ? `${metrics.blockedRows.length} comparison row${plural(metrics.blockedRows.length)} ${metrics.blockedRows.length === 1 ? "is" : "are"} blocked by basis, species, or scope and should be described as context only.`
      : "No blocked comparison row is flagged in the loaded crosswalk."
  const routingText = pendingSourceNarrative(metrics.productSlug, "sentence")

  return `${blockedText}${routingText}`
}

function legalDefenseAction(metrics) {
  if (metrics.pendingRoutingRows.length > 0) {
    return "Prioritize pending extraction and row-fit sources, then cite each conclusion with source, product row, metal species, basis, jurisdiction, and comparison status."
  }

  return "For any external claim, cite the source row and legal reference separately; when basis or species differ, state that no direct exceedance read is supported."
}

function uniqueLimits(rows) {
  const seen = new Set()
  const limits = []
  for (const row of rows) {
    const limit = limitsById.get(row.regulatory_limit_id)
    if (!limit || seen.has(limit.regulatory_limit_id)) continue
    seen.add(limit.regulatory_limit_id)
    limits.push(limit)
  }
  return limits
}

function uniqueValues(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))]
}

function formatList(values) {
  if (values.length === 0) return "none"
  if (values.length === 1) return values[0]
  if (values.length === 2) return `${values[0]} and ${values[1]}`
  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`
}

function formatJurisdictions(values) {
  const labels = values.map((value) => (value === "US" ? "FDA" : value)).map((value) => (value === "EU" ? "EU" : value))
  return formatList(labels)
}

function buildP90WorkbenchRows(rows) {
  return groupRowsByMetal(rows)
    .map((group) => {
      const row = group[0]
      return `<tr>
<td>${metalCell(row.metal_species)}</td>
<td>${cleanSubcategoryP90Cell(row)}</td>
<td>${regulatoryReferenceValuesCell(group, row.product_slug)}</td>
<td>${evidencePoolWorkbenchCell(row)}</td>
<td>${nextHmtcActionCell(row)}</td>
</tr>`
    })
    .join("\n")
}

function groupRowsByMetal(rows) {
  const grouped = new Map()
  for (const row of rows) {
    const key = row.metal_species || "No loaded row"
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key).push(row)
  }
  return [...grouped.values()]
}

function cleanSubcategoryP90Cell(row) {
  const p90 = p90Record(row)
  if (p90) {
    return `<strong>${formatNumber(p90.p90_ppb)} ${escapeHtml(p90.unit || "ppb")}</strong>
<span class="hmi-crosswalk-status-note">${sourceLinkById(p90.source_id)}; ${escapeHtml(basisLabel(p90.basis))}; N=${escapeHtml(p90.n)}</span>
<span class="hmi-crosswalk-status hmi-crosswalk-status--pending">Source distribution input</span>`
  }

  if (row.product_slug?.startsWith("infant-formula-powder") && row.metal_species === "iAs") {
    const totalArsenic = p90Record({ ...row, metal_species: "tAs" })
    if (totalArsenic) {
      return `<span class="hmi-crosswalk-status hmi-crosswalk-status--blocked">No iAs distribution input</span>
<span class="hmi-crosswalk-status-note">Total As is loaded separately: ${formatNumber(totalArsenic.p90_ppb)} ${escapeHtml(totalArsenic.unit || "ppb")} from ${sourceLinkById(totalArsenic.source_id)}.</span>`
    }
  }

  return `<span class="hmi-crosswalk-status hmi-crosswalk-status--gap">No distribution input loaded</span>`
}

function regulatoryReferenceValuesCell(rows, productSlug) {
  const loadedLimits = rows
    .map((row) => limitsById.get(row.regulatory_limit_id))
    .filter(Boolean)
  const entries = loadedLimits.map((limit) => `<li>${regulatoryReferenceLine(limit)}</li>`)
  const loadedJurisdictions = new Set(loadedLimits.map((limit) => jurisdictionGroup(limit)))

  if (productSlug?.startsWith("infant-formula")) {
    if (!loadedJurisdictions.has("US")) {
      entries.push("<li>FDA: no formula-specific regulatory value loaded for this metal/species.</li>")
    }
    if (!loadedJurisdictions.has("EU")) {
      entries.push("<li>EU: no formula-specific regulatory value loaded for this metal/species.</li>")
    }
  }

  if (entries.length === 0) {
    return "No FDA or EU regulatory reference value is loaded for this product/metal."
  }

  return `<ul class="hmi-compact-list">${entries.join("")}</ul>`
}

function regulatoryReferenceLine(limit) {
  const label = jurisdictionLabel(limit)
  const value = `${formatNumber(limit.value_ug_kg)} ug/kg ${escapeHtml(limit.metal_species)}`
  const basis = compactBasis(limit.basis)
  const link = limit.regulation_page ? regulationLink(limit) : escapeHtml(regulationLabel(limit))
  return `<strong>${escapeHtml(label)}:</strong> ${value}; ${escapeHtml(basis)}; ${link}`
}

function jurisdictionGroup(limit) {
  if (limit.jurisdiction === "US" || /US-FDA/i.test(limit.authority || "")) return "US"
  if (limit.jurisdiction === "EU") return "EU"
  return limit.jurisdiction || "other"
}

function jurisdictionLabel(limit) {
  if (jurisdictionGroup(limit) === "US") return "FDA"
  if (jurisdictionGroup(limit) === "EU") return "EU"
  return limit.authority || limit.jurisdiction || "Regulatory"
}

function evidencePoolWorkbenchCell(row) {
  const metalRows = measuredRowsForProduct(row.product_slug).filter((valueRow) => valueRow.metal_species === row.metal_species)
  const structuredSources = uniqueSourceCount(metalRows)
  const p90Sources = uniqueSourceCount(metalRows.filter((valueRow) => valueRow.p90_ppb !== ""))

  if (row.product_slug?.startsWith("infant-formula-powder") && row.metal_species === "iAs") {
    return "No structured inorganic-arsenic row is loaded. Total arsenic rows remain separate and cannot stand in for iAs without a documented speciation decision."
  }

  if (structuredSources > 0) {
    return `${structuredSources} structured source${plural(structuredSources)} loaded for this metal; ${p90Sources} source${plural(p90Sources)} currently ${p90Sources === 1 ? "has" : "have"} distribution-capable rows. Use the measured-values table below to inspect the rows.`
  }

  return compactFindingCell(row)
}

function nextHmtcActionCell(row) {
  if (row.product_slug?.startsWith("infant-formula-powder") && row.metal_species === "iAs") {
    return "Load sample-level iAs or a defensible source-backed total-As-to-iAs speciation rule, then build the clean-subcategory aggregate."
  }

  if (p90Record(row)) {
    return "Do not select from a single FDA row alone. Resolve the routed studies, normalize basis, decide clean-subcategory inclusion/exclusion, and run the aggregate calculation with confidence review."
  }

  return missingEvidenceCell(row)
}

function buildMeasuredValuesAtGlance(productSlug) {
  const rows = measuredRowsForProduct(productSlug)
  if (rows.length === 0) return ""

  const tableRows = rows
    .sort((a, b) => valueRowSortKey(a).localeCompare(valueRowSortKey(b)))
    .map(measuredValueTableRow)
    .join("\n")

  return `
## Measured Values At A Glance

<!-- audience: regulator, educator, consumer, app -->

This table is the fast route from a metal name to the loaded product-row values. It is an extraction ledger for N, mean, median, high/low context, basis, and source resources. It is not where final standards values are selected.

<table class="hmi-measured-values-table">
<thead>
<tr>
<th>Metal</th>
<th>Study</th>
<th>Product/basis</th>
<th>N</th>
<th>Loaded values</th>
<th>Use in standards work</th>
</tr>
</thead>
<tbody>
${tableRows}
</tbody>
</table>
`
}

function measuredRowsForProduct(productSlug) {
  return formulaSummaryRows.filter((row) => row.row_slug === productSlug)
}

function measuredValueTableRow(row) {
  return `<tr>
<td>${metalCell(row.metal_species)}</td>
<td>${sourceLinkById(row.source_id)}</td>
<td>${escapeHtml(row.source_product_label || row.product_label)}<br><span class="hmi-crosswalk-status-note">${escapeHtml(basisLabel(row.basis))}</span></td>
<td>${escapeHtml(row.n || "N pending")}</td>
<td>${measuredValueSummary(row)}</td>
<td>${measuredValueUse(row)}</td>
</tr>`
}

function measuredValueSummary(row) {
  const stats = []
  const range = rangeFromRow(row)
  if (row.mean_ppb !== "") stats.push(`mean ${formatNumber(row.mean_ppb)}`)
  else if (row.mean_lb_ppb !== "" || row.mean_ub_ppb !== "") stats.push(lbUbMeanText(row))
  if (row.median_ppb !== "") stats.push(`median ${formatNumber(row.median_ppb)}`)
  if (range) stats.push(`range ${range}`)
  if (row.p100_ppb !== "") stats.push(`highest ${formatNumber(row.p100_ppb)}`)
  else if (row.max_ppb !== "") stats.push(`highest ${formatNumber(row.max_ppb)}`)
  else if (
    (row.censoring_status === "less_than" || row.censoring_status === "less_than_loq" || row.censoring_status === "less_than_lod") &&
    row.censoring_limit_ppb !== ""
  ) {
    stats.push(`reported <${formatNumber(row.censoring_limit_ppb)}`)
  }

  return stats.length > 0 ? `${stats.join("; ")} ${escapeHtml(row.unit || "ppb")}`.trim() : "No displayable summary statistic loaded."
}

function measuredValueUse(row) {
  if (row.p90_ppb !== "" && row.row_fit === "direct_category1_row") {
    return "Distribution-capable input after row fit, basis, censoring, and clean-row review; not a standalone standard."
  }

  if (row.p90_ppb !== "") {
    return "Context distribution only; row fit is not direct enough for aggregate standards math."
  }

  return "Summary/range input for evidence context; not enough for aggregate distribution math alone."
}

function valueRowSortKey(row) {
  return `${String(metalOrder(row.metal_species)).padStart(2, "0")}::${row.source_id || ""}`
}

function metalOrder(metal) {
  const order = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "Ni", "Al", "Sn", "Cr", "Cr-VI"]
  const index = order.indexOf(metal)
  return index >= 0 ? index : 99
}

function sourceLinkById(sourceId, label = shortSourceLabel(sourceId)) {
  const slug = `sources/${sourceId}`
  return `<a href="../${escapeAttribute(slug)}" class="internal" data-slug="${escapeAttribute(slug)}">${escapeHtml(label)}</a>`
}

function p90StatusCell(row) {
  const readiness = p90Readiness(row)
  return `<span class="hmi-crosswalk-status hmi-crosswalk-status--${readiness.tone}">${escapeHtml(readiness.label)}</span>`
}

function p90Readiness(row) {
  const p90 = p90Record(row)
  const status = `${row.regulatory_status} ${row.comparison_status}`.toLowerCase()

  if (row.product_slug?.startsWith("infant-formula-powder") && row.metal_species === "iAs") {
    return {
      label: "Not ready",
      tone: "blocked",
    }
  }

  if (p90 && row.product_slug?.startsWith("infant-formula-powder")) {
    return {
      label: "Needs basis",
      tone: "pending",
    }
  }

  if (p90 && status.includes("direct comparison available")) {
    return {
      label: "Review",
      tone: "pending",
    }
  }

  if (p90) {
    return {
      label: "Distribution input",
      tone: "pending",
    }
  }

  return {
    label: "No distribution input",
    tone: "gap",
  }
}

function p90EvidenceCell(row) {
  const p90 = p90Record(row)
  if (p90) {
    return `${sourceShortLabel(p90.source_id)} ${basisLabel(p90.basis)} distribution statistic ${formatNumber(p90.p90_ppb)} ${p90.unit || "ppb"}; N=${p90.n}; ${censoringLabel(p90)}`
  }

  if (row.product_slug?.startsWith("infant-formula-powder") && row.metal_species === "iAs") {
    const totalArsenic = p90Record({ ...row, metal_species: "tAs" })
    if (totalArsenic) {
      return `No iAs distribution statistic is loaded. Closest row is total arsenic: ${sourceShortLabel(totalArsenic.source_id)} ${basisLabel(totalArsenic.basis)} tAs distribution statistic ${formatNumber(totalArsenic.p90_ppb)} ${totalArsenic.unit || "ppb"}; N=${totalArsenic.n}.`
    }
  }

  return compactFindingCell(row)
}

function missingEvidenceCell(row) {
  if (row.product_slug?.startsWith("infant-formula-powder") && row.metal_species === "iAs") {
    return "Sample-level iAs for this product row, or defensible speciation from total As to iAs, plus the basis decision or powder conversion."
  }

  if (row.product_slug?.startsWith("infant-formula-powder") && p90Record(row)) {
    return "Basis decision. If powder-as-sold, add dry-powder values or source-backed preparation conversion; then review row fit and <LOD handling."
  }

  if (p90Record(row)) {
    return "Standards review: row fit, censoring rule, confidence/stability, and clean-platform inclusion before selecting a value."
  }

  if (/structured row extraction pending/i.test(row.field_finding_summary)) {
    return "Structured product-row values or a source-reported distribution statistic; summary/source coverage alone cannot produce an aggregate standard."
  }

  return "Sample-level values, a source-reported distribution statistic, or another reconstructable distribution for this product row and metal species."
}

function p90Record(row) {
  return formulaSummaryByProductMetal.get(summaryKey(row.product_slug, row.metal_species))
}

function summaryKey(productSlug, metalSpecies) {
  return `${productSlug || ""}::${metalSpecies || ""}`.toLowerCase()
}

function basisLabel(value) {
  const basis = String(value || "").toLowerCase()
  if (basis === "prepared_for_feeding" || basis === "reconstituted" || basis === "as_consumed") {
    return "prepared-for-feeding"
  }
  if (basis === "as_sold" || basis === "as_sold_or_source_reported") {
    return "as-sold"
  }
  return value || "source basis"
}

function censoringLabel(row) {
  const substitution = String(row.substitution_rule || "")
  if (substitution.includes("<LOD treated as 0")) {
    return "<LOD=0 lower-bound"
  }
  return substitution || "source censoring"
}

function sourceShortLabel(sourceId) {
  if (sourceId === "fda2026-infant-formula-toxic-elements-special-survey") return "FDA 2026"
  return readableSlug(sourceId)
}

function formatNumber(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) return value
  return Number.isInteger(number) ? String(number) : String(Number(number.toFixed(3)))
}

function answerCell(row) {
  const answer = comparisonAnswer(row)
  return `<span class="hmi-crosswalk-status hmi-crosswalk-status--${answer.tone}">${escapeHtml(answer.label)}</span>`
}

function reasonCell(row) {
  return comparisonAnswer(row).reason
}

function comparisonAnswer(row) {
  const status = `${row.regulatory_status} ${row.comparison_status}`.toLowerCase()

  if (row.regulatory_limit_id === "none_loaded") {
    if (/blocked candidate|unsupported comparison/.test(status)) {
      return {
        label: "No",
        reason: "This value belongs on a narrower product row before comparison.",
        tone: "blocked",
      }
    }

    if (status.includes("source-cited thresholds pending")) {
      return {
        label: "Not ready",
        reason: "A direct legal source must be loaded before this can be used as a regulatory row.",
        tone: "pending",
      }
    }

    return {
      label: "No limit",
      reason: "Occurrence evidence exists, but no matched regulatory value is loaded for this row.",
      tone: "gap",
    }
  }

  if (status.includes("draft")) {
    return {
      label: "Draft only",
      reason: "The loaded value is draft context, not a final enforceable limit.",
      tone: "draft",
    }
  }

  if (status.includes("direct comparison available")) {
    return {
      label: "Yes",
      reason: status.includes("no exceedance")
        ? "Matrix, analyte, and basis match; no exceedance indicated here."
        : "Matrix, analyte, and basis match.",
      tone: "match",
    }
  }

  if (
    /total arsenic|inorganic arsenic|species/.test(status) &&
    /prepared-for-feeding|product-as-placed|powder-as-placed|basis/.test(status)
  ) {
    const reason =
      row.product_slug?.startsWith("infant-formula-powder") && row.metal_species === "iAs"
        ? "Different analyte and basis: FDA reports total arsenic after preparation; the loaded limit is inorganic arsenic in powder as sold."
        : "Different analyte and basis: the field row is not the same metal species or product form as the loaded limit."
    return {
      label: "No",
      reason,
      tone: "blocked",
    }
  }

  if (/total arsenic|inorganic arsenic|species/.test(status)) {
    return {
      label: "No",
      reason: "Different analyte: the field row does not match the regulated metal species.",
      tone: "blocked",
    }
  }

  if (/prepared-for-feeding|product-as-placed|powder-as-placed|basis/.test(status)) {
    const reason = row.product_slug?.startsWith("infant-formula-powder")
      ? "Different basis: FDA values are prepared-for-feeding; the loaded limit applies to powder as sold."
      : "Different basis: the field row and loaded limit use different product forms or preparation bases."
    return {
      label: "No",
      reason,
      tone: "blocked",
    }
  }

  if (/blocked|pending|extracted/.test(status)) {
    return {
      label: "Not ready",
      reason: "The limit is loaded, but comparable product-row field evidence still needs extraction.",
      tone: "pending",
    }
  }

  if (/applies only|applicability|scope/.test(status)) {
    return {
      label: "Review",
      reason: "Use as regulatory context until product scope is confirmed.",
      tone: "pending",
    }
  }

  return {
    label: "Review needed",
    reason: "Use the detail notes before making a comparison read.",
    tone: "pending",
  }
}

function compactLimitCell(row) {
  const limit = limitsById.get(row.regulatory_limit_id)
  if (!limit) {
    if (row.regulatory_status === "source-cited thresholds pending direct legal-source load") {
      return "No loaded legal row. Source-cited thresholds need direct legal-source review."
    }

    if (/Blocked candidate/i.test(row.regulatory_scope)) {
      return row.regulatory_scope.replace(/^Blocked candidate\s+/i, "Blocked candidate: ")
    }

    return "No federal product-specific limit loaded in this crosswalk."
  }

  const page = limit.regulation_page
    ? regulationLink(limit)
    : regulationLabel(limit)
  const status = compactLimitStatus(limit.status)
  const basis =
    row.product_slug?.startsWith("infant-formula-powder") &&
    /product as placed on market/i.test(limit.basis)
      ? "powder as sold"
      : compactBasis(limit.basis)
  return `${page}: ${compactLimitValue(limit, status, basis)}`
}

function compactFindingCell(row) {
  if (
    row.product_slug?.startsWith("infant-formula-powder") &&
    row.metal_species === "iAs" &&
    /total arsenic/i.test(row.field_finding_summary)
  ) {
    return "No comparable iAs row loaded. FDA 2026 reports total arsenic only, after preparation."
  }

  const formulaPowderMatch = row.field_finding_summary.match(
    /^FDA 2026 prepared-for-feeding (cow-milk|soy) powder subset: N=(\d+); ([A-Za-z]+) detected ([^;]+); values are not powder-as-placed\./i,
  )
  if (formulaPowderMatch) {
    const [, protein, n, metal, range] = formulaPowderMatch
    return `FDA 2026 ${protein} powder products: N=${n}; detected ${metal} ${range} after preparation.`
  }

  const finding = readerFinding(row)
    .replace(/^FDA 2026 prepared-for-feeding /, "FDA 2026 ")
    .replace(/; values are not powder-as-placed\.?/i, "; prepared for feeding.")
    .replace(/\s+/g, " ")
    .trim()

  return finding || "Comparable field-finding extraction pending."
}

function sourceCell(row) {
  const seen = new Set()
  const refs = sourceLinks(row.sources, seen)
  return refs.length > 0 ? refs.join("; ") : "[[products/regulatory-crosswalk-field-findings]]"
}

function regulationLink(limit) {
  const slug = limit.regulation_page
  const label = regulationLabel(limit)
  return `<a href="../${escapeAttribute(slug)}" class="internal" data-slug="${escapeAttribute(slug)}">${escapeHtml(label)}</a>`
}

function regulationLinkForSlug(slug) {
  const limit = limitRows.find((candidate) => candidate.regulation_page === slug)
  const label = limit ? regulationLabel(limit) : readableSlug(slug)
  return `<a href="../${escapeAttribute(slug)}" class="internal" data-slug="${escapeAttribute(slug)}">${escapeHtml(label)}</a>`
}

function referenceLinks(value, seen) {
  const refs = []
  for (const ref of value
    .split(";")
    .map((source) => source.trim())
    .filter(Boolean)) {
    if (seen.has(ref)) {
      continue
    }

    seen.add(ref)
    refs.push(ref.startsWith("regulations/") ? regulationLinkForSlug(ref) : `[[${ref}]]`)
  }

  return refs
}

function sourceLinks(value, seen) {
  const refs = []
  for (const ref of value
    .split(";")
    .map((source) => source.trim())
    .filter(Boolean)) {
    if (seen.has(ref) || ref.startsWith("regulations/")) {
      continue
    }

    seen.add(ref)
    refs.push(`[[${ref}]]`)
  }

  return refs
}

function regulationLabel(limit) {
  const id = limit.regulatory_limit_id.toLowerCase()
  if (id.startsWith("eu2023")) return "EU 2023-915"
  if (id.startsWith("fda2025")) return "FDA 2025 guidance"
  if (id.startsWith("fda2023")) return "FDA 2023 guidance"
  if (id.startsWith("fda2022")) return "FDA 2022 draft"
  if (id.startsWith("fda2020")) return "FDA 2020 guidance"
  if (id.startsWith("fda2004")) return "FDA Juice HACCP"
  if (id.startsWith("fda_21cfr")) return "FDA bottled-water standard"
  return `${limit.jurisdiction} ${limit.authority}`
}

function compactLimitStatus(value) {
  const status = String(value || "").toLowerCase()
  if (status.includes("draft")) return "draft"
  if (status.includes("final guidance action level")) return "final guidance"
  if (status.includes("regulatory quality standard")) return "quality standard"
  if (status.includes("guidance hazard-control level")) return "guidance"
  if (status.includes("maximum level")) return "maximum level"
  return value || "loaded value"
}

function compactLimitValue(limit, status, basis) {
  if (status === "maximum level") {
    return `${limit.value_ug_kg} ug/kg ${limit.metal_species}; ${basis}`
  }

  return `${limit.value_ug_kg} ug/kg ${limit.metal_species}; ${status}; ${basis}`
}

function compactBasis(value) {
  return String(value || "")
    .replace(/product as placed on market/gi, "as sold")
    .replace(/single-strength ready-to-drink juice/gi, "ready-to-drink")
    .replace(/wet weight or reconstituted juice/gi, "wet/reconstituted")
    .trim()
}

function readableSlug(slug) {
  return slug
    .replace(/^regulations\//, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function buildCrosswalkDetails(rows) {
  const items = rows
    .map((row) => {
      const metal = plainMetal(row.metal_species)
      const limit = limitsById.get(row.regulatory_limit_id)
      const scope = limit?.product_scope || row.regulatory_scope || "No product-specific scope loaded."
      const basis = limit?.basis ? ` Basis: ${limit.basis}.` : ""
      const use = row.hmtc_use ? ` Use: ${publicStandardsLanguage(row.hmtc_use)}` : ""
      const comparison = row.comparison_status
        ? ` Comparison note: ${publicStandardsLanguage(row.comparison_status)}`
        : ""

      return `<li><strong>${escapeHtml(metal)}:</strong> ${escapeHtml(`Limit scope: ${scope}.${basis}${comparison}${use}`)}</li>`
    })
    .join("\n")

  return `<details class="hmi-crosswalk-details">
<summary>Scope details and evidence-use notes</summary>
<ul>
${items}
</ul>
</details>
`
}

function buildSourceRoutingAuditDetails(productSlug) {
  if (!productSlug.startsWith("infant-formula")) return ""

  const rows = sourceRoutingRowsByProduct.get(productSlug) ?? []
  if (rows.length === 0) return ""

  const structuredCount = uniqueSourceCount(rows.filter((row) => row.route_status === "structured_values_present"))
  const pageOnlyCount = uniqueSourceCount(rows.filter((row) => row.route_status === "source_on_page_no_structured_value"))
  const missingRows = rows
    .filter((row) => row.route_status === "missing_direct_product_route" || row.route_status === "missing_broad_product_context")
    .sort((a, b) => routePriority(a) - routePriority(b) || a.source_id.localeCompare(b.source_id))

  const missingDirectCount = uniqueSourceCount(missingRows.filter((row) => row.route_status === "missing_direct_product_route"))
  const missingBroadCount = uniqueSourceCount(missingRows.filter((row) => row.route_status === "missing_broad_product_context"))
  const summary = `<p class="hmi-source-route-summary"><strong>Source routing check:</strong> ${structuredCount} source${plural(structuredCount)} already have structured value rows for this product, ${pageOnlyCount} source${plural(pageOnlyCount)} are cited on the page without structured value rows, and ${missingDirectCount + missingBroadCount} declared formula source${plural(missingDirectCount + missingBroadCount)} are not yet visible here.</p>`

  if (missingRows.length === 0) {
    return `${summary}
`
  }

  const tableRows = missingRows
    .map(
      (row) => `<tr>
<td>${routingStatusBadge(row)}</td>
<td>${escapeHtml(routeKindLabel(row.route_kind))}</td>
<td>${escapeHtml(row.action_needed)}</td>
<td>${sourceAnchor(row)}</td>
</tr>`,
    )
    .join("\n")

  return `${summary}
<details class="hmi-crosswalk-details hmi-source-routing-audit" open>
<summary>Declared formula sources not yet visible on this page</summary>
<p>These rows are an inclusion audit, not a standards math table. Broad formula sources should be visible for traceability, but they stay out of standards calculations until powder/liquid, soy/non-soy, analyte species, basis, and distribution fitness are resolved.</p>
<table class="hmi-source-routing-table">
<thead>
<tr>
<th>Status</th>
<th>Declared route</th>
<th>Next action</th>
<th>Study</th>
</tr>
</thead>
<tbody>
${tableRows}
</tbody>
</table>
</details>
`
}

function uniqueSourceCount(rows) {
  return new Set(rows.map((row) => row.source_id).filter(Boolean)).size
}

function plural(count) {
  return count === 1 ? "" : "s"
}

function routePriority(row) {
  if (row.route_status === "missing_direct_product_route") return 0
  if (row.route_kind === "broad_powder_context") return 1
  return 2
}

function routingStatusBadge(row) {
  const label =
    row.route_status === "missing_direct_product_route"
      ? "Needs routing"
      : row.route_kind === "broad_powder_context"
        ? "Broad powder"
        : "Broad formula"
  const tone = row.route_status === "missing_direct_product_route" ? "blocked" : "pending"
  return `<span class="hmi-crosswalk-status hmi-crosswalk-status--${tone}">${escapeHtml(label)}</span>`
}

function routeKindLabel(routeKind) {
  if (routeKind === "direct_product_link") return "Exact product link"
  if (routeKind === "direct_product_frontmatter") return "Exact product frontmatter"
  if (routeKind === "broad_powder_context") return "Broad powdered formula"
  if (routeKind === "broad_formula_context") return "Broad formula"
  return routeKind
}

function sourceAnchor(row) {
  const slug = `sources/${row.source_id}`
  const label = shortSourceLabel(row.source_id)
  const title = row.source_title || readableSlug(row.source_id)
  return `<a href="../${escapeAttribute(slug)}" class="internal" data-slug="${escapeAttribute(slug)}" title="${escapeAttribute(title)}">${escapeHtml(label)}</a>`
}

function shortSourceLabel(sourceId) {
  if (sourceId.startsWith("fda2026-")) return "FDA 2026"
  if (sourceId.startsWith("fda2024-")) return "FDA 2024"
  if (sourceId.startsWith("eu-2023-") || sourceId.startsWith("eu2023-")) return "EU 2023-915"

  const match = sourceId.match(/^([a-z]+)(\d{4})\b/)
  if (match) {
    const author = match[1].slice(0, 1).toUpperCase() + match[1].slice(1)
    return `${author} ${match[2]}`
  }

  return readableSlug(sourceId)
}

function plainMetal(value) {
  return value
    .split(";")
    .map((metal) => metal.trim())
    .filter(Boolean)
    .join("; ")
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;")
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
    return "Occurrence evidence only. Do not infer a federal exceedance or certification result from this row."
  }

  if (status.includes("draft")) {
    return "Draft context only. Do not present this value as a final federal limit or a certification threshold."
  }

  if (status.includes("direct comparison available")) {
    return "Direct comparison available because matrix, analyte species, and unit basis match; still not a certification limit."
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

  return publicStandardsLanguage(row.comparison_status || row.hmtc_use)
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

function publicStandardsLanguage(value) {
  return stripPercentileSummary(value)
    .replace(/\bHMTc\b/g, "standards")
    .replace(/\bHMTC\b/g, "standards")
    .replace(/\bhmtc\b/g, "standards")
    .replace(/\bstandards value\b/g, "standards value")
    .trim()
}

function metalCell(value) {
  return value
    .split(";")
    .map((metal) => metal.trim())
    .filter(Boolean)
    .map((metal) => {
      const slug = metalSlugs.get(metal)
      return slug
        ? `<a href="../${escapeAttribute(slug)}" class="internal" data-slug="${escapeAttribute(slug)}">${escapeHtml(metal)}</a>`
        : escapeHtml(metal)
    })
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

function frontmatterArray(source, key) {
  const match = source.match(new RegExp(`^${escapeRegExp(key)}:\\s*\\[([^\\]]*)\\]`, "m"))
  if (!match) return []

  return match[1]
    .split(",")
    .map((value) => value.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean)
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

function countBy(rows, key) {
  const counts = {}
  for (const row of rows) {
    const value = key(row)
    if (!value) continue
    counts[value] = (counts[value] ?? 0) + 1
  }
  return counts
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
