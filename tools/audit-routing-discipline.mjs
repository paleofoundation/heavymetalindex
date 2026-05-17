#!/usr/bin/env node
// Routing-discipline lint per docs/order-of-operations.md Phase 5.
//
// Two checks:
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
  const pendingLock = parsed.data.pending_category_lock

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
      note: `Source has matrices [${productMatrices.join(", ")}] (product-shaped) but products: [] and no pending_category_lock flag. Either declare products: with matching slug(s), or add pending_category_lock: <category-name> if Karen hasn't locked that category yet. See docs/order-of-operations.md Phase 1.`,
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
