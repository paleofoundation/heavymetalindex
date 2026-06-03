#!/usr/bin/env node
// Routing-discipline lint per docs/order-of-operations.md Phase 5.
//
// Three checks (Check 3 is warn-level; only Checks 1-2 gate the build):
//
// 1. Sources missing `products:` declaration on food/personal-care papers.
//    A source page with populated `matrices:` containing product-shaped slugs
//    (per data/evidence/matrix-to-product-map.json) but `products: []` and no
//    `pending_category_lock` flag is a routing-discipline failure. The model
//    forgot to declare the product page(s) the paper bears on, or the matrix
//    slug points at a category Karen hasn't yet locked. Either way it's worth
//    surfacing.
//
// 2. Product pages with hmtc_category set but zero routed sources.
//    Indicates a scaffolded row that never received its Phase 1 ingest, or
//    sources that should have routed got their frontmatter wrong. Either way
//    a Phase 0-locked page with 0 sources is broken state for HMTc standards
//    work that depends on the page.
//
// Outputs:
//   data/evidence/routing-discipline-audit.csv     all rows (pass + fail)
//   data/evidence/routing-discipline-summary.json  counters
//
// Modes:
//   --warn-only  exit 0 even when failures present (default for now during
//                migration; switch to fail-on-error after the historical
//                reverse-routing sweep settles)
//   default      exit non-zero when any failure present (commit/build block)

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const sourceDir = path.join(repoRoot, "wiki/sources")
const productDir = path.join(repoRoot, "wiki/products")
const mapPath = path.join(repoRoot, "data/evidence/matrix-to-product-map.json")
const outputPath = path.join(repoRoot, "data/evidence/routing-discipline-audit.csv")
const summaryPath = path.join(repoRoot, "data/evidence/routing-discipline-summary.json")
const routingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")

const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")

if (!fs.existsSync(mapPath)) {
  console.error(`Missing ${mapPath}. Run reverse-route-products.mjs first to bootstrap the map.`)
  process.exit(1)
}
const map = JSON.parse(fs.readFileSync(mapPath, "utf8"))
const matrixToProduct = map._mappings || {}
const noRouteSet = new Set((map._no_route || []).map((s) => s.toLowerCase()))

// Index: which matrix slugs are recognized as product-routing inputs?
const productRoutingMatrices = new Set(Object.keys(matrixToProduct))

const rows = []
const summary = {
  generated_at: new Date().toISOString(),
  check_1_sources_scanned: 0,
  check_1_sources_with_product_matrices: 0,
  check_1_failures: 0,
  check_2_products_scanned: 0,
  check_2_products_hmtc_locked: 0,
  check_2_failures: 0,
  check_3_pages_without_hmtc_row: 0,
  check_3_failures: 0,
}

// Accumulated during Check 1: how many sources declare each product slug in
// their `products:` field. Feeds Check 3 (silent-underroute detection).
const declaredProductSlugs = new Map()
function recordDeclaredProduct(entry) {
  // entry forms: "[[products/chocolate]]", "[[products/chocolate|Label]]", "chocolate"
  const m = String(entry).match(/products\/([^|\]]+)/)
  const slug = (m ? m[1] : String(entry)).trim().toLowerCase()
  if (!slug) return
  declaredProductSlugs.set(slug, (declaredProductSlugs.get(slug) ?? 0) + 1)
}

// ---------- Check 1: Source pages missing products: on food papers ----------
const sourceFiles = fs
  .readdirSync(sourceDir)
  .filter((f) => f.endsWith(".md") && f !== "_TEMPLATE.md" && f !== "index.md")
  .sort()

for (const file of sourceFiles) {
  summary.check_1_sources_scanned += 1
  const fullPath = path.join(sourceDir, file)
  const raw = fs.readFileSync(fullPath, "utf8")
  const parsed = matter(raw)
  const citeKey = String(parsed.data.cite_key || file.replace(/\.md$/, ""))

  const matrices = asStringArray(parsed.data.matrices).map((m) => m.toLowerCase().trim())
  const products = asStringArray(parsed.data.products)
  for (const p of products) recordDeclaredProduct(p)
  // Back-compat: pending_category_lock is the predecessor of provisional_scaffold.
  // Either flag exempts a source from the missing-products check.
  const pendingLock = parsed.data.pending_category_lock || parsed.data.provisional_scaffold

  // Does the source have any matrix slug that's a known product-routing input?
  const productMatrices = matrices.filter((m) => productRoutingMatrices.has(m))
  if (productMatrices.length === 0) continue

  summary.check_1_sources_with_product_matrices += 1

  if (products.length === 0 && !pendingLock) {
    summary.check_1_failures += 1
    rows.push({
      check: "1_source_missing_products",
      target: `wiki/sources/${file}`,
      detail: citeKey,
      severity: "fail",
      note: `Source has matrices [${productMatrices.join(", ")}] (product-shaped) but products: []. Declare products: with matching slug(s); if a slug has no matching page, run tools/autonomy/create-provisional-product-scaffold.mjs to create the routing destination. See docs/order-of-operations.md Phase 1.`,
    })
  }
}

// ---------- Check 2: HMTc-locked product pages with zero routed sources ----------
const routingAudit = loadRoutingAudit(routingAuditPath)

const productFiles = fs
  .readdirSync(productDir)
  .filter((f) => f.endsWith(".md") && f !== "index.md")
  .sort()

for (const file of productFiles) {
  summary.check_2_products_scanned += 1
  const fullPath = path.join(productDir, file)
  const raw = fs.readFileSync(fullPath, "utf8")
  const parsed = matter(raw)
  const slug = String(parsed.data.category || file.replace(/\.md$/, ""))
  const hmtcCategory = parsed.data.hmtc_category
  const hmtcRow = parsed.data.hmtc_row

  if (hmtcCategory === undefined || hmtcRow === undefined) continue
  summary.check_2_products_hmtc_locked += 1

  // Exemption: pages explicitly flagged `literature_scope: thin` are
  // acknowledged scaffolds where the food-focused source corpus does not
  // yet cover the product class. The page carries a "Literature scope"
  // caveat section visible to readers. Exempt from the failure count;
  // tracked separately as `literature_scope_thin_acknowledged`.
  if (parsed.data.literature_scope === "thin") {
    summary.check_2_literature_scope_thin = (summary.check_2_literature_scope_thin ?? 0) + 1
    continue
  }

  // Exemption: provisional scaffolds created by
  // tools/autonomy/create-provisional-product-scaffold.mjs are pending
  // taxonomy review. They carry a visible "Provisional scaffold" caveat
  // and route into data/evidence/provisional-product-scaffolds.jsonl as
  // an audit log. Tracked informationally; not a failure.
  if (parsed.data.provisional_scaffold === true || parsed.data.hmtc_category === "pending_taxonomy_review") {
    summary.check_2_provisional_pending_review = (summary.check_2_provisional_pending_review ?? 0) + 1
    continue
  }

  const sourceCount = routingAudit.get(slug) ?? 0
  if (sourceCount === 0) {
    summary.check_2_failures += 1
    rows.push({
      check: "2_locked_product_zero_sources",
      target: `wiki/products/${file}`,
      detail: `hmtc_category=${hmtcCategory} hmtc_row=${hmtcRow}`,
      severity: "fail",
      note: `Product page is Step-0-locked (hmtc_category=${hmtcCategory}, hmtc_row=${hmtcRow}) but no source pages route to it. Either the scaffold has not yet received its Phase 1 ingest, or sources that should route declare incorrect slugs. To acknowledge as scope-thin and exempt this row from the failure count, add 'literature_scope: thin' to the frontmatter and run tools/apply-literature-scope-caveat.mjs to insert the caveat section. See docs/order-of-operations.md Phase 5.`,
    })
  }
}

// ---------- Check 3: product pages declared by sources but lacking hmtc_row ----------
// The silent-underroute blind spot. A page that EXISTS but has no hmtc_row is
// not a recognized routing target, so sources declaring it have their
// declaration dropped — and because the page exists, it never appears in
// routing_unresolved.csv. This is how honey/chocolate/spices and the
// canned-*/tomato-* sub-pages stranded their evidence. Check 2 skips these
// pages (it `continue`s when hmtc_row is undefined); Check 3 catches them.
//
// A page is NOT flagged if it is an alias of a page that DOES carry hmtc_row
// (declarations resolve up to the locked parent and are not stranded), or if
// it is retired.
const lockedAliasSlugs = new Set()
for (const file of productFiles) {
  const parsed = matter(fs.readFileSync(path.join(productDir, file), "utf8"))
  if (parsed.data.hmtc_row === undefined) continue
  for (const a of asStringArray(parsed.data.aliases)) {
    lockedAliasSlugs.add(String(a).trim().toLowerCase())
  }
}

// Intentional non-rows that should NOT flag: broad-scope routing tokens (the
// routing layer fans these out to sibling rows rather than treating them as a
// destination) and base/bridge context pages. This set mirrors
// broadProductScopes in tools/evidence/build-routing-audit.mjs — keep in sync.
const broadScopeExempt = new Set([
  "infant-formula","infant-formula-powder","infant-formula-rtf-liquid","baby-cereals",
  "rice-cereal","mixed-cereals","vegetable-purees","meat-and-fish-baby-foods","mixed-meals",
  "snacks","rice-based-snacks","teething-biscuits","fruit-juice","packaged-fruit-juice",
  "infant-foods","infant-food","baby-foods","baby-food-purees","baby-drinks","jars-first-meals",
  "pouches","kids-meals","toddler-formula","toddler-meals","growing-up-milk",
  "rice-containing-products","canned-foods","canned-meat","processed-meat","pork-products",
  "cooking-oils","milk-powder","yoghurt","vinegar","tomato-juice","hot-sauce","fish-sauce",
  "confectionery","bakery","cereal","disposable-baby-diapers","whitening-cream",
  // Cat 7 sub-variants aliased up to parent rows via inheritedProductRoutes.
  "canned-tomatoes","canned-vegetables","canned-fruit","tomato-paste","tomato-sauce",
  "snacks-crackers-biscuits",
])

for (const file of productFiles) {
  const fullPath = path.join(productDir, file)
  const parsed = matter(fs.readFileSync(fullPath, "utf8"))
  const slug = String(parsed.data.category || file.replace(/\.md$/, "")).toLowerCase()
  // Only pages that are NOT recognized routing targets.
  if (parsed.data.hmtc_row !== undefined) continue
  if (parsed.data.retired === true) continue
  // Exempt intentional non-rows: broad-scope tokens, base/bridge context pages,
  // and category-master pages (the routing layer fans these out, or they are
  // navigational, rather than being a leaf routing destination).
  const variantType = String(parsed.data.variant_type || "")
  const title = String(parsed.data.title || "")
  const isMaster = /-master$/.test(slug) || /master/i.test(title)
  if (broadScopeExempt.has(slug) || variantType === "base" || variantType === "bridge" || isMaster) {
    summary.check_3_exempt_non_rows = (summary.check_3_exempt_non_rows ?? 0) + 1
    continue
  }
  summary.check_3_pages_without_hmtc_row += 1
  // If a locked page claims this slug as an alias, declarations resolve up.
  if (lockedAliasSlugs.has(slug)) continue

  const declaredBy = declaredProductSlugs.get(slug) ?? 0
  if (declaredBy > 0) {
    summary.check_3_failures += 1
    rows.push({
      check: "3_declared_page_without_hmtc_row",
      target: `wiki/products/${file}`,
      detail: `declared_by=${declaredBy} sources; hmtc_row absent`,
      severity: "warn",
      note: `Page exists and is declared in the products: field of ${declaredBy} source(s), but has no hmtc_row, so the routing layer silently drops those declarations and they never appear in routing_unresolved.csv. Resolve by EITHER (a) giving it a routable provisional scaffold lock (hmtc_category + hmtc_row, products_status: scaffold) so the data accumulates visibly while the threshold/split decision waits, OR (b) adding it as an alias on the locked parent row it belongs under so declarations resolve up. See docs/order-of-operations.md and the Cat 7 Step 0 lock for the routable-scaffold-vs-threshold-lock distinction.`,
    })
  }
}

// ---------- Write outputs ----------
const csvHeader = "check,target,detail,severity,note"
const csvBody = rows
  .map((r) => [r.check, r.target, r.detail, r.severity, csvField(r.note)].join(","))
  .join("\n")
fs.writeFileSync(outputPath, `${csvHeader}\n${csvBody}\n`, "utf8")
fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8")

console.log("")
console.log("Routing-discipline audit results:")
console.log(`  Check 1 (sources missing products: on food papers):`)
console.log(`    Sources scanned: ${summary.check_1_sources_scanned}`)
console.log(`    Sources with product-shaped matrices: ${summary.check_1_sources_with_product_matrices}`)
console.log(`    Failures: ${summary.check_1_failures}`)
console.log(`  Check 2 (HMTc-locked products with zero routed sources):`)
console.log(`    Products scanned: ${summary.check_2_products_scanned}`)
console.log(`    HMTc-locked products: ${summary.check_2_products_hmtc_locked}`)
console.log(`    Failures: ${summary.check_2_failures}`)
console.log(`  Check 3 (pages declared by sources but lacking hmtc_row — silent underroute):`)
console.log(`    Pages without hmtc_row: ${summary.check_3_pages_without_hmtc_row}`)
console.log(`    Flagged (declared-but-unroutable): ${summary.check_3_failures} [warn]`)
console.log("")
console.log(`Wrote ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote ${path.relative(repoRoot, summaryPath)}`)

const totalFailures = summary.check_1_failures + summary.check_2_failures
if (totalFailures > 0 && !warnOnly) {
  console.error(`\nRouting-discipline lint: ${totalFailures} failure(s). Pass --warn-only to downgrade to warning.`)
  process.exit(1)
}

// ---- helpers ----

function asStringArray(value) {
  if (Array.isArray(value)) return value.map((v) => String(v))
  if (typeof value === "string") return [value]
  return []
}

function csvField(s) {
  if (s == null) return ""
  const str = String(s)
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

function loadRoutingAudit(filePath) {
  const counts = new Map()
  if (!fs.existsSync(filePath)) return counts
  const text = fs.readFileSync(filePath, "utf8")
  const lines = text.split("\n").slice(1)
  for (const line of lines) {
    if (!line.trim()) continue
    const cells = parseCsvLine(line)
    const productSlug = cells[0]
    if (!productSlug) continue
    counts.set(productSlug, (counts.get(productSlug) ?? 0) + 1)
  }
  return counts
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let inQuote = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuote) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"'
          i += 1
        } else {
          inQuote = false
        }
      } else {
        cur += ch
      }
    } else {
      if (ch === '"') inQuote = true
      else if (ch === ",") {
        out.push(cur)
        cur = ""
      } else cur += ch
    }
  }
  out.push(cur)
  return out
}
