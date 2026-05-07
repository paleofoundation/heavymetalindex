import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const sourceDir = path.join(repoRoot, "wiki/sources")
const productDir = path.join(repoRoot, "wiki/products")
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
const outputPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const occurrenceSummaryFiles = [
  "data/evidence/category1_formula_concentration_summary.csv",
  "data/evidence/category1_fda_baby_food_compliance_summary.csv",
  "data/evidence/category1_local_baby_food_occurrence_summary.csv",
  "data/evidence/category5_plant_milk_occurrence_summary.csv",
  "data/evidence/category5_tds_finished_food_occurrence_summary.csv",
  "data/evidence/category5_apple_juice_arsenic_speciation_summary.csv",
  "data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv",
]

const auditedProductPages = readAuditedProductPages()
const targetProducts = [...auditedProductPages.keys()].sort()

const inheritedProductRoutes = new Map([
  [
    "infant-formula-powder",
    {
      route_kind: "broad_powder_context",
      product_slugs: ["infant-formula-powder-non-soy", "infant-formula-powder-soy-based"],
      route_note:
        "Source is declared for powdered formula but does not itself resolve the locked soy/non-soy row split.",
    },
  ],
  [
    "infant-formula-rtf-liquid",
    {
      route_kind: "broad_formula_context",
      product_slugs: ["infant-formula-rtf-liquid-non-soy", "infant-formula-rtf-liquid-soy-based"],
      route_note:
        "Source is declared for ready-to-feed/liquid formula but does not itself resolve the locked soy/non-soy row split.",
    },
  ],
  [
    "infant-formula",
    {
      route_kind: "broad_formula_context",
      product_slugs: [
        "infant-formula-powder-non-soy",
        "infant-formula-powder-soy-based",
        "infant-formula-rtf-liquid-non-soy",
        "infant-formula-rtf-liquid-soy-based",
      ],
      route_note:
        "Source is declared for infant formula broadly and must stay contextual until powder/liquid and soy/non-soy fit are resolved.",
    },
  ],
  [
    "baby-cereals",
    {
      route_kind: "broad_product_context",
      product_slugs: ["baby-cereals-dry-non-rice", "baby-cereals-dry-rice-based"],
      route_note:
        "Source is declared for baby cereals broadly and must stay contextual until rice/non-rice and dry/as-served row fit are resolved.",
    },
  ],
  [
    "rice-cereal",
    {
      route_kind: "broad_product_context",
      product_slugs: ["baby-cereals-dry-rice-based"],
      route_note:
        "Source is declared for rice cereal and must be reviewed for dry infant-cereal row fit, basis, and species before standards use.",
    },
  ],
  [
    "mixed-cereals",
    {
      route_kind: "broad_product_context",
      product_slugs: ["baby-cereals-dry-non-rice"],
      route_note:
        "Source is declared for mixed cereals and must be reviewed for rice content, dry/as-served basis, and row fit.",
    },
  ],
  [
    "vegetable-purees",
    {
      route_kind: "broad_product_context",
      product_slugs: ["non-root-vegetable-purees", "root-vegetable-purees"],
      route_note:
        "Source is declared for vegetable purees broadly and must stay contextual until root/non-root row fit is resolved.",
    },
  ],
  [
    "meat-and-fish-baby-foods",
    {
      route_kind: "broad_product_context",
      product_slugs: ["meat-and-poultry-purees", "fish-containing-baby-foods"],
      route_note:
        "Source combines meat and fish baby foods; keep contextual until meat/poultry versus fish-containing row fit is resolved.",
    },
  ],
  [
    "mixed-meals",
    {
      route_kind: "broad_product_context",
      product_slugs: ["mixed-meals-non-rice", "mixed-meals-rice-containing"],
      route_note:
        "Source is declared for mixed meals broadly and must stay contextual until rice-containing row fit is resolved.",
    },
  ],
  [
    "snacks",
    {
      route_kind: "broad_product_context",
      product_slugs: ["teething-and-snacks-non-rice", "teething-and-snacks-rice-based"],
      route_note:
        "Source is declared for snacks broadly and must stay contextual until rice-based versus non-rice row fit is resolved.",
    },
  ],
  [
    "rice-based-snacks",
    {
      route_kind: "broad_product_context",
      product_slugs: ["teething-and-snacks-rice-based"],
      route_note:
        "Source is declared for rice-based snacks and must be reviewed for infant teething/snack row fit before standards use.",
    },
  ],
  [
    "teething-biscuits",
    {
      route_kind: "broad_product_context",
      product_slugs: ["teething-and-snacks-non-rice", "teething-and-snacks-rice-based"],
      route_note:
        "Source is declared for teething biscuits broadly and must stay contextual until rice-based versus non-rice row fit is resolved.",
    },
  ],
  [
    "fruit-juice",
    {
      route_kind: "broad_product_context",
      product_slugs: ["fruit-juice-not-canned"],
      route_note:
        "Source is declared for fruit juice broadly and must be reviewed for apple/non-apple, canned status, and species before standards use.",
    },
  ],
  [
    "packaged-fruit-juice",
    {
      route_kind: "broad_product_context",
      product_slugs: ["fruit-juice-not-canned"],
      route_note:
        "Source is declared for packaged fruit juice; keep contextual until canned status, juice type, and analyte species are resolved.",
    },
  ],
])

const productPages = new Map(
  [...auditedProductPages.entries()].map(([slug, product]) => [slug, product.text]),
)

const valueRows = [...readJsonl(valuesPath), ...readOccurrenceRouteRows()]
const valueRowsBySourceProduct = new Map()
for (const row of valueRows) {
  const sourceId = String(row.source_id || "")
  const productSlug = String(row.product_matrix || "")
  if (!sourceId || !productSlug) continue
  const key = routeKey(sourceId, productSlug)
  if (!valueRowsBySourceProduct.has(key)) valueRowsBySourceProduct.set(key, [])
  valueRowsBySourceProduct.get(key).push(row)
}

const auditRows = []
for (const file of fs.readdirSync(sourceDir).filter((name) => name.endsWith(".md")).sort()) {
  const sourcePath = path.join(sourceDir, file)
  const raw = fs.readFileSync(sourcePath, "utf8")
  const parsed = matter(raw)
  if (isRegulatorySource(parsed.data)) continue

  const sourceId = String(parsed.data.cite_key || path.basename(file, ".md"))
  const sourceTitle = String(parsed.data.title || firstHeading(raw) || readableSlug(sourceId))
  const products = asProductArray(parsed.data.products)
  const declaredMetals = asStringArray(parsed.data.metals)
  const contextOnlyProducts = new Set([
    ...asProductArray(parsed.data.context_only_products),
    ...asProductArray(parsed.data.context_products),
    ...asProductArray(parsed.data.excluded_category1_rows),
  ])
  const productMetalScope = productMetalScopeMap(parsed.data.product_metal_scope)
  const sourceProductLinks = extractProductLinks(raw)
  const routes = new Map()

  for (const product of products) {
    addProductRoute(routes, sourceId, product, "frontmatter", { contextOnlyProducts })
  }

  for (const product of sourceProductLinks) {
    addProductRoute(routes, sourceId, product, "source_link", { contextOnlyProducts })
  }

  for (const [productSlug, route] of [...routes.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const productPageText = productPages.get(productSlug) || ""
    const valueRowsForRoute = valueRowsBySourceProduct.get(routeKey(sourceId, productSlug)) || []
    const product_page_cites_source = sourceAppearsOnProductPage(productPageText, sourceId)
    const value_record_count = valueRowsForRoute.length
    const structuredMetals = [...new Set(valueRowsForRoute.map((row) => row.metal_species).filter(Boolean))]
      .sort()
    const structuredMetalKeys = new Set(structuredMetals.map(canonicalMetal).filter(Boolean))
    const routeDeclaredMetals = productMetalScope.get(productSlug) ?? declaredMetals
    const missingMetals = routeDeclaredMetals.filter((metal) => !structuredMetalKeys.has(canonicalMetal(metal)))
    const route_status = routeStatus(route.route_kind, product_page_cites_source, value_record_count, missingMetals)

    auditRows.push({
      product_slug: productSlug,
      product_standard_scope: auditedProductPages.get(productSlug)?.standard_scope || "not_audited",
      source_id: sourceId,
      source_page: `wiki/sources/${sourceId}.md`,
      source_title: sourceTitle,
      declared_products: products.join(";"),
      route_kind: route.route_kind,
      route_basis: [...route.route_basis].sort().join(";"),
      route_status,
      value_record_count,
      declared_metal_species: routeDeclaredMetals.join(";"),
      metal_species: structuredMetals.join(";"),
      missing_metal_species: missingMetals.join(";"),
      product_page_cites_source: product_page_cites_source ? "true" : "false",
      evidence_use: evidenceUse(route.route_kind, value_record_count, missingMetals),
      action_needed: actionNeeded(route_status, route.route_kind, missingMetals),
      route_note: route.route_note,
    })
  }
}

fs.writeFileSync(outputPath, toCsv(auditRows), "utf8")
console.log(`Wrote ${auditRows.length} product source routing rows to ${outputPath}`)

function addProductRoute(routes, sourceId, product, basis, { contextOnlyProducts = new Set() } = {}) {
  if (targetProducts.includes(product)) {
    if (contextOnlyProducts.has(product)) {
      upsertRoute(routes, product, {
        route_kind: "broad_product_context",
        route_basis: [`${basis}:${product}`],
        route_note:
          "Source declares or links this product row as context only; keep out of direct standards extraction until row fit is resolved.",
        priority: 1,
      })
    } else {
      upsertRoute(routes, product, {
        route_kind: basis === "source_link" ? "direct_product_link" : "direct_product_frontmatter",
        route_basis: [`${basis}:${product}`],
        route_note: "Source declares or links this exact locked/context product row.",
        priority: 3,
      })
    }
  }

  const inherited = inheritedProductRoutes.get(product)
  if (!inherited) return

  for (const productSlug of inherited.product_slugs) {
    upsertRoute(routes, productSlug, {
      route_kind: inherited.route_kind,
      route_basis: [`${basis}:${product}`],
      route_note: inherited.route_note,
      priority: inherited.route_kind === "broad_powder_context" ? 2 : 1,
    })
  }
}

function upsertRoute(routes, productSlug, next) {
  const previous = routes.get(productSlug)
  if (!previous || next.priority > previous.priority) {
    routes.set(productSlug, {
      ...next,
      route_basis: new Set(next.route_basis),
    })
    return
  }

  if (next.priority === previous.priority) {
    for (const item of next.route_basis) previous.route_basis.add(item)
  }
}

function routeStatus(routeKind, productPageCitesSource, valueRecordCount, missingMetals) {
  if (valueRecordCount > 0 && missingMetals.length === 0) return "structured_values_present"
  if (valueRecordCount > 0) return "partial_structured_values_present"
  if (productPageCitesSource) return "source_on_page_no_structured_value"
  if (routeKind.startsWith("direct_product")) return "missing_direct_product_route"
  return "missing_broad_product_context"
}

function evidenceUse(routeKind, valueRecordCount, missingMetals) {
  if (valueRecordCount > 0 && missingMetals.length === 0) return "structured_value_candidate"
  if (valueRecordCount > 0) return "partial_structured_value_candidate"
  if (routeKind.startsWith("direct_product")) return "direct_context_pending_extraction"
  return "broad_context_pending_row_fit"
}

function actionNeeded(routeStatusValue, routeKind, missingMetals) {
  if (routeStatusValue === "structured_values_present") {
    return "Review row fit, basis, censoring, and inclusion before standards calculation use."
  }
  if (routeStatusValue === "partial_structured_values_present") {
    const missing = missingMetals.length > 0 ? ` Missing declared metals: ${missingMetals.join("; ")}.` : ""
    return `Extract missing product-row metals if the source table is usable; otherwise document why they remain context only.${missing}`
  }
  if (routeStatusValue === "source_on_page_no_structured_value") {
    return routeKind.startsWith("direct_product")
      ? "Extract product-row values if the source table is usable; otherwise document why it remains context only."
      : "Keep visible as broad context; extract only if product row fit, basis, species, and statistic type can be resolved."
  }
  if (routeStatusValue === "missing_direct_product_route") {
    return "Promote this source to the product page, then decide whether structured values can be extracted."
  }
  return "Promote as broad product context; do not use in standards calculations until row fit is resolved."
}

function sourceAppearsOnProductPage(productPageText, sourceId) {
  if (!productPageText) return false
  const bodyForAudit = productPageText.replace(
    /<!-- BEGIN: hmi-product-crosswalk -->[\s\S]*?<!-- END: hmi-product-crosswalk -->/g,
    "",
  )
  return bodyForAudit.includes(`sources/${sourceId}`) || bodyForAudit.includes(`[[${sourceId}`)
}

function extractProductLinks(text) {
  const products = new Set()
  const evidenceText = stripNonEvidenceProductLinkSections(text)
  const wikiLinkPattern = /\[\[products\/([a-z0-9-]+)(?:[|\]#])/g
  const markdownLinkPattern = /\]\((?:\.\.\/)?products\/([a-z0-9-]+)(?:[)#/]|$)/g
  for (const pattern of [wikiLinkPattern, markdownLinkPattern]) {
    let match
    while ((match = pattern.exec(evidenceText))) products.add(match[1])
  }
  return [...products]
}

function stripNonEvidenceProductLinkSections(text) {
  return text.replace(
    /\n##\s+(?:Wiki pages updated on ingest|Caveated product pages referenced on ingest)[\s\S]*?(?=\n##\s+|$)/gi,
    "\n",
  )
}

function asStringArray(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean)
  if (typeof value === "string") {
    return value
      .split(/[;,]/)
      .map((item) => item.trim())
      .filter(Boolean)
  }
  return []
}

function asProductArray(value) {
  return asStringArray(value).map(productSlugFromValue).filter(Boolean)
}

function productSlugFromValue(value) {
  const text = String(value || "").trim()
  const wikiMatch = text.match(/\[\[products\/([^|\]#]+)/)
  if (wikiMatch) return wikiMatch[1]
  const markdownMatch = text.match(/products\/([^)\]#]+)/)
  if (markdownMatch) return markdownMatch[1]
  return text
}

function readAuditedProductPages() {
  const pages = new Map()
  if (!fs.existsSync(productDir)) return pages

  for (const file of fs.readdirSync(productDir).filter((name) => name.endsWith(".md")).sort()) {
    const pagePath = path.join(productDir, file)
    const text = fs.readFileSync(pagePath, "utf8")
    const parsed = matter(text)
    if (parsed.data.type !== "product-category") continue

    const hasLockedRow = parsed.data.hmtc_category !== undefined && parsed.data.hmtc_row !== undefined
    const variantType = String(parsed.data.variant_type || "")
    if (!hasLockedRow && variantType !== "bridge" && variantType !== "base") continue

    const slug = String(parsed.data.category || path.basename(file, ".md"))
    pages.set(slug, {
      text,
      standard_scope: standardScopeForProduct(parsed.data),
    })
  }

  return pages
}

function standardScopeForProduct(data) {
  if (data.hmtc_category !== undefined && data.hmtc_row !== undefined) return "locked_hmtc_row"

  const variantType = String(data.variant_type || "")
  if (variantType === "bridge") return "bridge_context"
  if (variantType === "base") return "base_context"

  return "not_locked_hmtc_row"
}

function isRegulatorySource(data) {
  const sourceType = String(data.source_type || "").toLowerCase()
  if (sourceType.includes("regulation")) return true

  const claimClasses = asStringArray(data.claim_classes).map((item) => item.toLowerCase())
  return claimClasses.includes("regulatory_limit")
}

function productMetalScopeMap(value) {
  const scoped = new Map()
  if (!value || Array.isArray(value) || typeof value !== "object") return scoped

  for (const [productSlug, metals] of Object.entries(value)) {
    scoped.set(productSlugFromValue(productSlug), asStringArray(metals))
  }

  return scoped
}

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) return []
  return fs
    .readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line))
}

function readOccurrenceRouteRows() {
  const rows = []

  for (const relativePath of occurrenceSummaryFiles) {
    const filePath = path.join(repoRoot, relativePath)
    if (!fs.existsSync(filePath)) continue

    for (const row of parseCsv(fs.readFileSync(filePath, "utf8"))) {
      const sourceId = String(row.source_id || "").trim()
      const productSlug = String(row.row_slug || row.product_slug || "").trim()
      if (!sourceId || !productSlug) continue

      for (const metal of asStringArray(row.metal_species)) {
        rows.push({
          source_id: sourceId,
          product_matrix: productSlug,
          metal_species: canonicalMetal(metal),
          evidence_file: relativePath,
        })
      }
    }
  }

  return rows
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

function firstHeading(text) {
  return text.match(/^#\s+(.+)$/m)?.[1]
}

function routeKey(sourceId, productSlug) {
  return `${sourceId}::${productSlug}`
}

function readableSlug(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function toCsv(rows) {
  const headers = [
    "product_slug",
    "product_standard_scope",
    "source_id",
    "source_page",
    "source_title",
    "declared_products",
    "route_kind",
    "route_basis",
    "route_status",
    "value_record_count",
    "declared_metal_species",
    "metal_species",
    "missing_metal_species",
    "product_page_cites_source",
    "evidence_use",
    "action_needed",
    "route_note",
  ]
  return `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n")}\n`
}

function canonicalMetal(value) {
  const text = String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "")
  const aliases = {
    al: "Al",
    aluminium: "Al",
    aluminum: "Al",
    as: "tAs",
    tas: "tAs",
    totalas: "tAs",
    totalarsenic: "tAs",
    arsenic: "tAs",
    ias: "iAs",
    inorganicarsenic: "iAs",
    cd: "Cd",
    cadmium: "Cd",
    pb: "Pb",
    lead: "Pb",
    hg: "tHg",
    thg: "tHg",
    totalhg: "tHg",
    totalmercury: "tHg",
    mercury: "tHg",
    mehg: "MeHg",
    methylmercury: "MeHg",
    cr: "Cr-total",
    crtotal: "Cr-total",
    chromium: "Cr-total",
    crvi: "Cr-VI",
    chromiumvi: "Cr-VI",
    ni: "Ni",
    nickel: "Ni",
    sn: "Sn",
    tin: "Sn",
    sb: "Sb",
    antimony: "Sb",
    v: "V",
    vanadium: "V",
    co: "Co",
    cobalt: "Co",
    u: "U",
    uranium: "U",
  }
  return aliases[text] ?? value
}

function csvCell(value) {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n;]/.test(text)) return text
  return `"${text.replace(/"/g, '""')}"`
}
