#!/usr/bin/env node
// Top-level routing audit per CLAUDE.md Part 5b.
//
// The routing layer is the system's responsibility, not the model's. This
// script reads every source page in `wiki/sources/`, classifies its
// frontmatter against the existing wiki tree (products, ingredients, metals,
// regulations), and emits three artifacts:
//
//   data/evidence/product_source_routing_audit.csv   — the canonical product
//     routing CSV produced by tools/audit-product-source-routing.mjs (called
//     here as a sub-step). Documents which sources fan out to which product
//     pages with what route_kind.
//
//   data/evidence/routing_unresolved.csv             — sources whose declared
//     products/ingredients/regulations/metals do not match any existing wiki
//     page. Each row is either a frontmatter correction (wrong slug) or a
//     new-page proposal (per CLAUDE.md Part 10).
//
//   data/evidence/routing_malformed.csv              — sources missing
//     required frontmatter fields. The routing layer cannot place these until
//     the source page is fixed.
//
// Per Part 5b, this script runs on three triggers: the chokidar watcher in
// `npm run serve`, the pre-commit hook on commits touching `wiki/sources/`,
// and the `prebuild` script in `npm run build`. The build fails if
// `routing_malformed.csv` has truly broken entries (missing cite_key or
// completely empty frontmatter); missing optional fields are reported but do
// not block the build during the migration period.
//
// The model does not write routing rows by hand. If a session is editing this
// CSV or its siblings manually, that is a system failure to surface to Karen.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import matter from "gray-matter"
import { BROAD_PRODUCT_SCOPE_SET } from "./broad-product-scopes.mjs"

const repoRoot = process.cwd()
const sourceDir = path.join(repoRoot, "wiki/sources")
const productDir = path.join(repoRoot, "wiki/products")
const ingredientDir = path.join(repoRoot, "wiki/ingredients")
const metalDir = path.join(repoRoot, "wiki/metals")
const regulationDir = path.join(repoRoot, "wiki/regulations")

const unresolvedPath = path.join(repoRoot, "data/evidence/routing_unresolved.csv")
const malformedPath = path.join(repoRoot, "data/evidence/routing_malformed.csv")

const productAuditScript = path.join(repoRoot, "tools/audit-product-source-routing.mjs")

// --- 1. Run the existing product routing audit as a sub-step.
console.log("Routing audit: running product-source audit...")
execFileSync("node", [productAuditScript], { stdio: "inherit" })

// --- 2. Build target-page indexes from the existing wiki tree.
const existingProducts = listSlugs(productDir)
const existingIngredients = listSlugs(ingredientDir)
const existingMetals = listSlugs(metalDir)
const existingRegulations = listSlugs(regulationDir)

// Alias indexes — alias slug → canonical page slug. Built from `aliases:`
// frontmatter on existing ingredient and product pages, so declarations like
// `ingredients: [[[ingredients/milk]]]` route to `milk-and-dairy.md` when
// `milk` is in that page's aliases array. Without this, the routing audit
// reports legitimate references as unresolved every time a source uses the
// common name instead of the canonical slug.
const ingredientAliases = buildAliasIndex(ingredientDir)
const productAliases = buildAliasIndex(productDir)

// Broad-scope vocabulary: declarations that intentionally do not name a
// specific row. The product audit script's `inheritedProductRoutes` map fans
// these out; we recognize them here so they do not show up as unresolved.
// The list is the shared canonical one in ./broad-product-scopes.mjs so it can
// never drift from the copy the index-fanning audit checks against.
const broadProductScopes = BROAD_PRODUCT_SCOPE_SET

// Required frontmatter fields for a source page to be placeable by the
// routing layer. Severity tiers:
//   blocking: missing cite_key → cannot identify the source at all
//   strict:   missing any of source_type, evidence_tier → policy violation
//   advisory: missing any of products/ingredients/matrices/metals/jurisdictions
//             → routing layer falls back to broad scope; reported but not blocked
const blockingFields = ["cite_key"]
const strictFields = ["source_type", "evidence_tier"]
const advisoryFields = ["products", "ingredients", "matrices", "metals", "jurisdictions"]

const unresolved = []
const malformed = []
let processed = 0
let blockingMalformedCount = 0

const sourceFiles = fs
  .readdirSync(sourceDir)
  .filter((name) => name.endsWith(".md"))
  .filter((name) => name !== "index.md" && name !== "_TEMPLATE.md")
  .sort()

for (const file of sourceFiles) {
  processed += 1
  const sourcePath = path.join(sourceDir, file)
  const raw = fs.readFileSync(sourcePath, "utf8")
  const parsed = matter(raw)
  const sourceId = String(parsed.data.cite_key || path.basename(file, ".md"))
  const sourcePage = `wiki/sources/${file}`
  if (isDuplicateSource(parsed.data)) continue

  // --- 2a. Malformed check.
  const missingBlocking = blockingFields.filter((field) => !hasFrontmatterValue(parsed.data, field))
  const missingStrict = strictFields.filter((field) => !hasFrontmatterValue(parsed.data, field))
  const missingAdvisory = advisoryFields.filter((field) => !hasFrontmatterValue(parsed.data, field))

  if (missingBlocking.length > 0 || missingStrict.length > 0 || missingAdvisory.length > 0) {
    const severity =
      missingBlocking.length > 0 ? "blocking" : missingStrict.length > 0 ? "strict" : "advisory"
    if (severity === "blocking") blockingMalformedCount += 1

    malformed.push({
      source_id: sourceId,
      source_page: sourcePage,
      severity,
      missing_blocking: missingBlocking.join(";"),
      missing_strict: missingStrict.join(";"),
      missing_advisory: missingAdvisory.join(";"),
      note: severity === "blocking"
        ? "Source has no cite_key; routing cannot identify it. Fix before next build."
        : severity === "strict"
          ? "Source is missing source_type or evidence_tier required by Part 13. Routing places the source but evidence-grading lint will fail."
          : "Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible.",
    })
  }
  if (missingBlocking.length > 0) continue

  // --- 2b. Unresolved-target check.
  const declaredProducts = asProductSlugs(parsed.data.products)
  for (const product of declaredProducts) {
    if (existingProducts.has(product) || broadProductScopes.has(product)) continue
    if (productAliases.has(product)) continue
    unresolved.push({
      source_id: sourceId,
      source_page: sourcePage,
      target_kind: "product",
      declared_target: product,
      note: "Source declares a product page that does not exist and is not a known broad-scope token. Either fix the frontmatter slug or propose a new product page per Part 10.",
    })
  }

  const declaredIngredients = asWikiLinkSlugs(parsed.data.ingredients, "ingredients")
  for (const ingredient of declaredIngredients) {
    if (existingIngredients.has(ingredient)) continue
    if (ingredientAliases.has(ingredient)) continue
    unresolved.push({
      source_id: sourceId,
      source_page: sourcePage,
      target_kind: "ingredient",
      declared_target: ingredient,
      note: "Source declares an ingredient page that does not exist. Either fix the frontmatter slug or propose a new ingredient page per Part 10 (5-paper threshold; below that, add as alias on parent ingredient).",
    })
  }

  const declaredMetals = asStringArray(parsed.data.metals)
  for (const metal of declaredMetals) {
    const slug = metalSlug(metal)
    if (!slug) continue
    if (existingMetals.has(slug)) continue
    unresolved.push({
      source_id: sourceId,
      source_page: sourcePage,
      target_kind: "metal",
      declared_target: metal,
      note: "Source declares a metal that does not have a metal page yet. Propose a new metal page per Part 10 if the corpus warrants it; otherwise add the metal as a note on a related metal page.",
    })
  }

  const declaredRegulations = asWikiLinkSlugs(parsed.data.applicable_regulations, "regulations")
  declaredRegulations.push(...asWikiLinkSlugs(parsed.data.source_refs, "regulations"))
  for (const regulation of new Set(declaredRegulations)) {
    if (existingRegulations.has(regulation)) continue
    unresolved.push({
      source_id: sourceId,
      source_page: sourcePage,
      target_kind: "regulation",
      declared_target: regulation,
      note: "Source declares a regulation page that does not exist. Capture as a regulation page on first encounter per Part 10.",
    })
  }
}

// --- 3. Write sibling CSVs.
writeCsv(unresolvedPath, unresolved, [
  "source_id",
  "source_page",
  "target_kind",
  "declared_target",
  "note",
])
writeCsv(malformedPath, malformed, [
  "source_id",
  "source_page",
  "severity",
  "missing_blocking",
  "missing_strict",
  "missing_advisory",
  "note",
])

console.log(
  `Routing audit: processed ${processed} source pages; ${unresolved.length} unresolved target(s), ${malformed.length} malformed source(s) (${blockingMalformedCount} blocking).`,
)

// --- 4. Build gate.
if (blockingMalformedCount > 0) {
  console.error(
    `Routing audit failed: ${blockingMalformedCount} source page(s) are blocking-malformed (missing cite_key). See ${malformedPath}.`,
  )
  process.exit(1)
}

// ---------- helpers ----------

function listSlugs(dir) {
  if (!fs.existsSync(dir)) return new Set()
  const slugs = new Set()
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md") continue
    slugs.add(path.basename(file, ".md"))
  }
  return slugs
}

function buildAliasIndex(dir) {
  const index = new Map()
  if (!fs.existsSync(dir)) return index
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const canonical = path.basename(file, ".md")
    try {
      const raw = fs.readFileSync(path.join(dir, file), "utf8")
      const parsed = matter(raw)
      const aliases = parsed.data?.aliases
      if (!Array.isArray(aliases)) continue
      for (const alias of aliases) {
        const slug = slugifyAlias(alias)
        if (!slug) continue
        // First-writer-wins on collision — alias collisions are a real signal
        // that needs human attention, but we don't block the routing audit.
        if (!index.has(slug)) index.set(slug, canonical)
      }
    } catch {
      // skip pages we can't parse; the malformed-source check elsewhere catches them
    }
  }
  return index
}

function slugifyAlias(alias) {
  if (!alias) return null
  return String(alias)
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function hasFrontmatterValue(data, field) {
  const value = data[field]
  if (value === null || value === undefined) return false
  if (Array.isArray(value)) return value.length > 0
  if (typeof value === "string") return value.trim().length > 0
  return true
}

function isDuplicateSource(data) {
  return String(data.status || "").trim().toLowerCase() === "duplicate" || Boolean(data.canonical_source)
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

function asProductSlugs(value) {
  return asStringArray(value).map((item) => {
    const wikiMatch = item.match(/\[\[products\/([^|\]#]+)/)
    if (wikiMatch) return wikiMatch[1]
    return item
  })
}

function asWikiLinkSlugs(value, folder) {
  return asStringArray(value)
    .map((item) => {
      const wikiMatch = item.match(new RegExp(`\\[\\[${folder}/([^|\\]#]+)`))
      if (wikiMatch) return wikiMatch[1]
      // Frontmatter may also use plain slugs without wikilink wrapping.
      if (!item.includes("/")) return item
      return null
    })
    .filter(Boolean)
}

function metalSlug(metal) {
  const m = String(metal || "").trim()
  if (!m) return null
  const map = new Map([
    ["Pb", "lead"],
    ["Cd", "cadmium"],
    ["iAs", "arsenic-inorganic"],
    ["tAs", "arsenic-total"],
    ["As", "arsenic-total"],
    ["MeHg", "mercury-methyl"],
    ["iHg", "mercury"],
    ["tHg", "mercury-total"],
    ["Hg", "mercury-total"],
    ["Ni", "nickel"],
    ["Al", "aluminum"],
    ["Cr", "chromium"],
    ["Cr-VI", "chromium-hexavalent"],
    ["Sn", "tin"],
    ["Sb", "antimony"],
    ["U", "uranium"],
  ])
  return map.get(m) || null
}

function writeCsv(filePath, rows, columns) {
  const lines = [columns.join(",")]
  for (const row of rows) {
    lines.push(columns.map((col) => csvCell(row[col])).join(","))
  }
  fs.writeFileSync(filePath, lines.join("\n") + "\n", "utf8")
}

function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value)
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`
  }
  return text
}
