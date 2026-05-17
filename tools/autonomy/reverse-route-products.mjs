#!/usr/bin/env node
// Reverse-routes product page slugs from source-page `matrices:` to `products:`.
//
// Diagnosed 2026-05-16: 632 source pages carry populated `matrices:` (e.g.,
// [dark-chocolate, milk-chocolate, cocoa-powder]) while declaring `products: []`.
// The routing audit reads `products:`, not `matrices:`, so those sources never
// fan to any product page even when the obvious target exists. Result: 36
// product pages sit at zero routed sources despite corpus coverage. See
// docs/order-of-operations.md for the full diagnosis.
//
// This tool fixes it mechanically. For every source page, it looks up each
// `matrices:` slug in `data/evidence/matrix-to-product-map.json` and proposes
// adding the mapped product slug(s) to `products:`. The map distinguishes
// `high` confidence (apply automatically in commit mode) from `medium`
// (always surface for review, never auto-apply).
//
// Modes:
//   --dry-run    (default) Emit proposed-changes CSV. No edits to source pages.
//   --apply      Apply high-confidence proposals to source pages.
//   --include-medium  In apply mode, also apply medium-confidence proposals.
//                     (Default: only high. Use this after reviewing the dry-run
//                     and confirming medium-confidence mappings.)
//   --limit N    Process only the first N sources. Useful for sampling.
//   --batch N    In apply mode, commit every N sources (default: 50). 0 disables.
//   --source <id>  Process a single source by cite_key. For spot-checking.
//
// Outputs:
//   data/evidence/reverse-route-proposed-changes.csv    one row per proposed change
//   data/evidence/reverse-route-unmapped-matrices.csv   matrices not in map or no-route list
//   data/evidence/reverse-route-summary.json            high-level counters
//
// Idempotent: re-running skips proposals where the product slug is already in
// the source page's `products:` field. Never invents product pages; only edits
// the `products:` field on existing source pages.
//
// Per CLAUDE.md Part 5b and Part 8, this script is system-side machinery, not
// model-authored content. The routing audit picks up the changes on its next
// run (chokidar watcher in `npm run serve` or prebuild).

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const sourceDir = path.join(repoRoot, "wiki/sources")
const productDir = path.join(repoRoot, "wiki/products")
const mapPath = path.join(repoRoot, "data/evidence/matrix-to-product-map.json")
const proposedChangesPath = path.join(repoRoot, "data/evidence/reverse-route-proposed-changes.csv")
const unmappedPath = path.join(repoRoot, "data/evidence/reverse-route-unmapped-matrices.csv")
const summaryPath = path.join(repoRoot, "data/evidence/reverse-route-summary.json")

const args = process.argv.slice(2)
const apply = args.includes("--apply")
const includeMedium = args.includes("--include-medium")
const limit = parseIntArg(args, "--limit", 0)
const batchSize = parseIntArg(args, "--batch", 50)
const singleSource = parseStringArg(args, "--source", "")
const dryRun = !apply

if (!fs.existsSync(mapPath)) {
  console.error(`Missing matrix-to-product map at ${mapPath}`)
  process.exit(1)
}
const map = JSON.parse(fs.readFileSync(mapPath, "utf8"))
const matrixMap = map._mappings || {}
const noRouteList = new Set((map._no_route || []).map((s) => s.toLowerCase()))

const existingProducts = new Set(
  fs
    .readdirSync(productDir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .map((f) => f.replace(/\.md$/, "")),
)
// Broad-scope tokens that the routing audit recognizes via
// tools/audit-product-source-routing.mjs's inheritedProductRoutes. These
// are valid `products:` declarations even though no page named e.g.
// `infant-formula` exists; the routing layer fans them out.
const broadScopeFanout = new Map([
  ["infant-formula", ["infant-formula-powder-non-soy", "infant-formula-powder-soy-based", "infant-formula-rtf-liquid-non-soy", "infant-formula-rtf-liquid-soy-based"]],
  ["infant-formula-powder", ["infant-formula-powder-non-soy", "infant-formula-powder-soy-based"]],
  ["infant-formula-rtf-liquid", ["infant-formula-rtf-liquid-non-soy", "infant-formula-rtf-liquid-soy-based"]],
  ["baby-cereals", ["baby-cereals-dry-non-rice", "baby-cereals-dry-rice-based"]],
  ["rice-cereal", ["baby-cereals-dry-rice-based"]],
  ["mixed-cereals", ["baby-cereals-dry-non-rice"]],
  ["vegetable-purees", ["non-root-vegetable-purees", "root-vegetable-purees"]],
  ["meat-and-fish-baby-foods", ["meat-and-poultry-purees", "fish-containing-baby-foods"]],
  ["mixed-meals", ["mixed-meals-non-rice", "mixed-meals-rice-containing"]],
  ["snacks", ["teething-and-snacks-non-rice", "teething-and-snacks-rice-based"]],
  ["rice-based-snacks", ["teething-and-snacks-rice-based"]],
  ["teething-biscuits", ["teething-and-snacks-non-rice"]],
  ["fruit-juice", ["fruit-juice-not-canned", "fruit-juices-apple-containing", "fruit-juices-non-apple"]],
  ["packaged-fruit-juice", ["fruit-juice-not-canned", "fruit-juices-apple-containing", "fruit-juices-non-apple"]],
  ["infant-foods", []],
  ["baby-foods", []],
  ["baby-drinks", []],
  ["jars-first-meals", []],
  ["pouches", []],
  ["kids-meals", []],
  ["toddler-formula", []],
  ["toddler-meals", []],
  ["growing-up-milk", []],
  ["rice-containing-products", []],
])
const broadScopeTokens = new Set(broadScopeFanout.keys())

const proposedRows = []
const unmappedCounter = new Map()
const summary = {
  mode: apply ? (includeMedium ? "apply (high+medium)" : "apply (high only)") : "dry-run",
  generated_at: new Date().toISOString(),
  sources_scanned: 0,
  sources_with_matrices: 0,
  sources_with_empty_products: 0,
  sources_proposed_for_change: 0,
  sources_applied: 0,
  total_proposals: 0,
  high_confidence_proposals: 0,
  medium_confidence_proposals: 0,
  skipped_already_routed: 0,
  unmapped_matrix_slugs: 0,
  unknown_product_targets: 0,
}

const sourceFiles = fs
  .readdirSync(sourceDir)
  .filter((f) => f.endsWith(".md") && f !== "_TEMPLATE.md" && f !== "index.md")
  .sort()

const filteredSources = singleSource
  ? sourceFiles.filter((f) => f.replace(/\.md$/, "") === singleSource)
  : limit > 0
    ? sourceFiles.slice(0, limit)
    : sourceFiles

if (singleSource && filteredSources.length === 0) {
  console.error(`No source page matches cite_key "${singleSource}"`)
  process.exit(1)
}

let appliedSinceLastCommit = 0
const appliedCiteKeys = []

for (const file of filteredSources) {
  summary.sources_scanned += 1
  const fullPath = path.join(sourceDir, file)
  const raw = fs.readFileSync(fullPath, "utf8")
  const parsed = matter(raw)
  const citeKey = String(parsed.data.cite_key || file.replace(/\.md$/, ""))

  const matrices = asStringArray(parsed.data.matrices)
  const declaredProducts = asProductSlugSet(parsed.data.products)

  if (matrices.length > 0) summary.sources_with_matrices += 1
  if (declaredProducts.size === 0) summary.sources_with_empty_products += 1

  const additions = []
  const seenForThisSource = new Set()
  for (const matrixRaw of matrices) {
    const matrix = matrixRaw.toLowerCase().trim()
    if (!matrix) continue
    // Mappings win over no_route: when a slug appears in both (because a
    // previously ingredient-only term now has a Cat 4 product page), the
    // mapping takes precedence. This lets the no_route list stay broad
    // without blocking new product mappings as they land.
    const entry = matrixMap[matrix]
    if (!entry) {
      if (noRouteList.has(matrix)) continue
      unmappedCounter.set(matrix, (unmappedCounter.get(matrix) ?? 0) + 1)
      continue
    }
    for (const productSlug of entry.products || []) {
      if (
        !existingProducts.has(productSlug) &&
        !broadScopeTokens.has(productSlug)
      ) {
        summary.unknown_product_targets += 1
        proposedRows.push({
          cite_key: citeKey,
          source_page: `wiki/sources/${file}`,
          matrix_slug: matrix,
          proposed_product: productSlug,
          confidence: entry.confidence || "unknown",
          status: "rejected:product_page_missing",
          note: "Mapping points at a product slug that does not exist as a page or broad-scope token. Fix the map entry or scaffold the product page first.",
        })
        continue
      }
      if (declaredProducts.has(productSlug)) {
        summary.skipped_already_routed += 1
        continue
      }
      // Skip a broad-scope proposal if the source already declares at least
      // one specific row that the broad-scope would fan out to. Adding the
      // broad-scope on top of specific rows is redundant.
      if (broadScopeFanout.has(productSlug)) {
        const fanout = broadScopeFanout.get(productSlug) || []
        if (fanout.some((target) => declaredProducts.has(target))) {
          summary.skipped_already_routed += 1
          continue
        }
      }
      if (seenForThisSource.has(productSlug)) continue
      seenForThisSource.add(productSlug)
      summary.total_proposals += 1
      if (entry.confidence === "high") summary.high_confidence_proposals += 1
      if (entry.confidence === "medium") summary.medium_confidence_proposals += 1
      additions.push({
        product: productSlug,
        confidence: entry.confidence,
        matrix,
      })
      proposedRows.push({
        cite_key: citeKey,
        source_page: `wiki/sources/${file}`,
        matrix_slug: matrix,
        proposed_product: productSlug,
        confidence: entry.confidence || "unknown",
        status: "proposed",
        note: "",
      })
    }
  }

  if (additions.length === 0) continue
  summary.sources_proposed_for_change += 1

  if (!apply) continue

  // Apply mode. Filter to the confidence levels we're applying.
  const toApply = additions.filter((a) =>
    includeMedium ? true : a.confidence === "high",
  )
  if (toApply.length === 0) continue

  // Preserve existing products: line content verbatim and append only the
  // new entries in canonical wikilink form. This keeps the diff minimal and
  // avoids touching existing entries' formatting.
  const productsLineMatch = raw.match(/^products:\s*\[(.*)\]\s*$/m)
  if (!productsLineMatch) {
    proposedRows.push({
      cite_key: citeKey,
      source_page: `wiki/sources/${file}`,
      matrix_slug: "",
      proposed_product: "",
      confidence: "",
      status: "error:replace_failed",
      note: "Could not locate single-line `products: [...]` in source page; manual fix needed.",
    })
    continue
  }
  const existingContent = productsLineMatch[1].trim()
  const newEntries = toApply.map((a) =>
    broadScopeTokens.has(a.product) ? `"${a.product}"` : `"[[products/${a.product}]]"`,
  )
  const newContent = existingContent
    ? `${existingContent}, ${newEntries.join(", ")}`
    : newEntries.join(", ")
  const replacement = `products: [${newContent}]`

  // Edit the file: replace the `products: [...]` line.
  const before = raw
  const after = raw.replace(/^products:\s*\[.*\]\s*$/m, replacement)
  if (before === after) {
    proposedRows.push({
      cite_key: citeKey,
      source_page: `wiki/sources/${file}`,
      matrix_slug: "",
      proposed_product: "",
      confidence: "",
      status: "error:replace_failed",
      note: "Could not locate `products:` line in source page; manual fix needed.",
    })
    continue
  }
  fs.writeFileSync(fullPath, after, "utf8")
  summary.sources_applied += 1
  appliedSinceLastCommit += 1
  appliedCiteKeys.push(citeKey)

  if (batchSize > 0 && appliedSinceLastCommit >= batchSize) {
    commitBatch(appliedCiteKeys.length, batchSize)
    appliedSinceLastCommit = 0
  }
}

// Final commit for any remaining edits.
if (apply && appliedSinceLastCommit > 0 && batchSize > 0) {
  commitBatch(appliedCiteKeys.length, appliedSinceLastCommit)
}

// Write outputs.
summary.unmapped_matrix_slugs = unmappedCounter.size

fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8")

const proposedCsvHeader =
  "cite_key,source_page,matrix_slug,proposed_product,confidence,status,note"
const proposedCsvBody = proposedRows
  .map((r) =>
    [r.cite_key, r.source_page, r.matrix_slug, r.proposed_product, r.confidence, r.status, csvField(r.note)].join(","),
  )
  .join("\n")
fs.writeFileSync(proposedChangesPath, `${proposedCsvHeader}\n${proposedCsvBody}\n`, "utf8")

const unmappedRows = [...unmappedCounter.entries()].sort((a, b) => b[1] - a[1])
const unmappedCsvHeader = "matrix_slug,occurrence_count,recommended_action"
const unmappedCsvBody = unmappedRows
  .map(([slug, count]) => {
    const action =
      count >= 5
        ? "Add to matrix-to-product-map.json _mappings if it routes to a product page; or to _no_route if it does not."
        : "Low frequency; review and add to map or no_route list when next encountered."
    return `${slug},${count},${csvField(action)}`
  })
  .join("\n")
fs.writeFileSync(unmappedPath, `${unmappedCsvHeader}\n${unmappedCsvBody}\n`, "utf8")

console.log("")
console.log(`Mode: ${summary.mode}`)
console.log(`Sources scanned: ${summary.sources_scanned}`)
console.log(`Sources with matrices: ${summary.sources_with_matrices}`)
console.log(`Sources with empty products: ${summary.sources_with_empty_products}`)
console.log(`Sources with at least one proposal: ${summary.sources_proposed_for_change}`)
console.log(`Total proposals: ${summary.total_proposals} (high: ${summary.high_confidence_proposals}, medium: ${summary.medium_confidence_proposals})`)
console.log(`Skipped (already routed): ${summary.skipped_already_routed}`)
console.log(`Unmapped matrix slugs: ${summary.unmapped_matrix_slugs}`)
console.log(`Unknown product targets: ${summary.unknown_product_targets}`)
if (apply) console.log(`Sources applied: ${summary.sources_applied}`)
console.log("")
console.log(`Wrote ${path.relative(repoRoot, proposedChangesPath)}`)
console.log(`Wrote ${path.relative(repoRoot, unmappedPath)}`)
console.log(`Wrote ${path.relative(repoRoot, summaryPath)}`)
if (apply && batchSize === 0) {
  console.log("")
  console.log("Edits applied but not committed (batch=0). Stage and commit when ready.")
}

// ---- helpers ----

function parseIntArg(argv, flag, defaultValue) {
  const i = argv.indexOf(flag)
  if (i < 0) return defaultValue
  const v = argv[i + 1]
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? n : defaultValue
}

function parseStringArg(argv, flag, defaultValue) {
  const i = argv.indexOf(flag)
  if (i < 0) return defaultValue
  return argv[i + 1] ?? defaultValue
}

function asStringArray(value) {
  if (Array.isArray(value)) return value.map((v) => String(v))
  if (typeof value === "string") return [value]
  return []
}

function asProductSlugSet(value) {
  const out = new Set()
  for (const item of asStringArray(value)) {
    const trimmed = item.trim()
    if (!trimmed) continue
    // Handle [[products/slug]] form
    const match = trimmed.match(/\[\[products\/([^\]]+)\]\]/)
    if (match) {
      out.add(match[1])
    } else {
      // Bare slug
      out.add(trimmed)
    }
  }
  return out
}

function csvField(s) {
  if (s == null) return ""
  const str = String(s)
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

function commitBatch(totalApplied, batchCount) {
  const result = spawnSync("git", ["add", "wiki/sources/"], { cwd: repoRoot, stdio: "inherit" })
  if (result.status !== 0) {
    console.error("git add failed; skipping commit")
    return
  }
  const status = spawnSync("git", ["status", "--porcelain"], { cwd: repoRoot, encoding: "utf8" })
  if (!status.stdout.trim()) {
    console.log("Nothing staged; skipping commit")
    return
  }
  const msg = `reverse-route: backfill products from matrices for ${batchCount} sources (running total: ${totalApplied})`
  const commit = spawnSync("git", ["commit", "-m", msg], { cwd: repoRoot, stdio: "inherit" })
  if (commit.status !== 0) {
    console.error("git commit failed")
  } else {
    console.log(`Committed batch: ${msg}`)
  }
}
