import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const sourceDir = path.join(repoRoot, "wiki/sources")
const productDir = path.join(repoRoot, "wiki/products")
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
const outputPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")

const targetProducts = [
  "infant-formula-powder-non-soy",
  "infant-formula-powder-soy-based",
  "infant-formula-rtf-liquid-non-soy",
  "infant-formula-rtf-liquid-soy-based",
  "infant-formula-concentrated-liquid-non-soy",
  "infant-formula-concentrated-liquid-soy-based",
]

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
])

const productPages = new Map(
  targetProducts.map((slug) => {
    const pagePath = path.join(productDir, `${slug}.md`)
    return [slug, fs.existsSync(pagePath) ? fs.readFileSync(pagePath, "utf8") : ""]
  }),
)

const valueRows = readJsonl(valuesPath)
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
  const sourceId = String(parsed.data.cite_key || path.basename(file, ".md"))
  const sourceTitle = String(parsed.data.title || firstHeading(raw) || readableSlug(sourceId))
  const products = asStringArray(parsed.data.products)
  const declaredMetals = asStringArray(parsed.data.metals)
  const sourceProductLinks = extractProductLinks(raw)
  const routes = new Map()

  for (const product of products) {
    addProductRoute(routes, sourceId, product, "frontmatter")
  }

  for (const product of sourceProductLinks) {
    addProductRoute(routes, sourceId, product, "source_link")
  }

  for (const [productSlug, route] of [...routes.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const productPageText = productPages.get(productSlug) || ""
    const valueRowsForRoute = valueRowsBySourceProduct.get(routeKey(sourceId, productSlug)) || []
    const product_page_cites_source = sourceAppearsOnProductPage(productPageText, sourceId)
    const value_record_count = valueRowsForRoute.length
    const structuredMetals = [...new Set(valueRowsForRoute.map((row) => row.metal_species).filter(Boolean))]
      .sort()
    const structuredMetalKeys = new Set(structuredMetals.map(canonicalMetal).filter(Boolean))
    const missingMetals = declaredMetals.filter((metal) => !structuredMetalKeys.has(canonicalMetal(metal)))
    const route_status = routeStatus(route.route_kind, product_page_cites_source, value_record_count, missingMetals)

    auditRows.push({
      product_slug: productSlug,
      source_id: sourceId,
      source_page: `wiki/sources/${sourceId}.md`,
      source_title: sourceTitle,
      declared_products: products.join(";"),
      route_kind: route.route_kind,
      route_basis: [...route.route_basis].sort().join(";"),
      route_status,
      value_record_count,
      declared_metal_species: declaredMetals.join(";"),
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

function addProductRoute(routes, sourceId, product, basis) {
  if (targetProducts.includes(product)) {
    upsertRoute(routes, product, {
      route_kind: basis === "source_link" ? "direct_product_link" : "direct_product_frontmatter",
      route_basis: [`${basis}:${product}`],
      route_note: "Source declares or links this exact locked product row.",
      priority: 3,
    })
    return
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
      : "Keep visible as broad context; extract only if powder/liquid and soy/non-soy row fit can be resolved."
  }
  if (routeStatusValue === "missing_direct_product_route") {
    return "Promote this source to the product page, then decide whether structured values can be extracted."
  }
  return "Promote as broad formula context; do not use in standards calculations until row fit is resolved."
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
  return text.replace(/\n##\s+Wiki pages updated on ingest[\s\S]*?(?=\n##\s+|$)/g, "\n")
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

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) return []
  return fs
    .readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line))
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
