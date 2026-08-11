#!/usr/bin/env node
/**
 * Information-set snapshot (no-information-loss baseline).
 *
 * Walks the wiki and, per page, extracts the *information set* a reader can
 * obtain from it: section headings, numeric claims (value + unit), the
 * claim-to-cite-key edges (which section cites which [[sources/x]]), the
 * distinct (section, cite-key) pairs, the source-legend row count, and a body
 * token count. The result is written as a committed baseline:
 *
 *   data/evidence/content-preservation/baseline-information-set.json
 *
 * This baseline is the contract that the render/redesign work must not regress
 * against. The companion `audit-content-preservation.mjs` re-extracts the
 * current state and fails the build if any page LOSES information relative to
 * this baseline (the monotonic-superset rule: adding is allowed, losing fails).
 *
 * Scope: `wiki/metals/*.md` first (the metals-first rollout). `--scope` can
 * widen it; the extractor itself is page-type agnostic so the same baseline
 * format covers ingredient/product/regulation pages when they roll out.
 *
 * Key extraction guarantees (must match audit-content-preservation.mjs exactly,
 * because the two compare extracted sets — they share extract.mjs to guarantee
 * this):
 *   - Body token count counts text inside server-rendered <details> collapses.
 *     Collapsing into a <details> is NOT information loss; the text is still on
 *     the page. So we count it.
 *   - Cite-keys are extracted from [[sources/x]] and [[sources/x|Label]] alike,
 *     normalising the alias away (x is the key; the label is presentation).
 *   - Numeric claims use the same regex family as audit-claim-provenance.mjs so
 *     a "claim" means the same thing across the audit suite.
 *
 * Usage:
 *   node tools/snapshot-information-set.mjs                 # metals scope, write baseline
 *   node tools/snapshot-information-set.mjs --scope all     # metals+ingredients+products+regulations
 *   node tools/snapshot-information-set.mjs --dry-run       # print summary, do not write
 *   node tools/snapshot-information-set.mjs --json          # print the full set to stdout
 */

import fs from "node:fs"
import path from "node:path"
import {
  SCOPE_DIRS,
  resolveScopeDirs,
  extractPage,
  listPageFiles,
} from "./lib/information-set-extract.mjs"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const scopeIdx = args.indexOf("--scope")
const scope = scopeIdx >= 0 ? args[scopeIdx + 1] : "metals"
const dryRun = args.includes("--dry-run")
const asJson = args.includes("--json")

const outDir = path.join(repoRoot, "data/evidence/content-preservation")
const outPath = path.join(outDir, "baseline-information-set.json")

function main() {
  const dirs = resolveScopeDirs(scope)
  const pages = {}
  let pageCount = 0
  let claimCount = 0
  let edgeCount = 0

  for (const dir of dirs) {
    const fullDir = path.join(repoRoot, dir)
    for (const file of listPageFiles(fullDir)) {
      const filePath = path.join(fullDir, file)
      const rel = path.relative(repoRoot, filePath)
      const raw = fs.readFileSync(filePath, "utf8")
      const info = extractPage(raw)
      pages[rel] = info
      pageCount++
      claimCount += info.claims.length
      edgeCount += info.cite_edges.length
    }
  }

  const baseline = {
    schema: "hmi-information-set/1",
    generated_at: new Date().toISOString(),
    scope,
    scope_dirs: dirs,
    page_count: pageCount,
    totals: {
      claims: claimCount,
      cite_edges: edgeCount,
    },
    // Sorted by relative path so the committed JSON has a stable, diff-friendly
    // order regardless of readdir order across machines.
    pages: Object.fromEntries(
      Object.entries(pages).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    ),
  }

  if (asJson) {
    console.log(JSON.stringify(baseline, null, 2))
    return
  }

  console.log("Information-set snapshot:")
  console.log(`  scope:        ${scope} (${dirs.join(", ")})`)
  console.log(`  pages:        ${pageCount}`)
  console.log(`  claims:       ${claimCount}`)
  console.log(`  cite-edges:   ${edgeCount}`)

  if (dryRun) {
    console.log("  --dry-run: baseline NOT written")
    return
  }

  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(baseline, null, 2) + "\n")
  console.log(`Wrote ${path.relative(repoRoot, outPath)}`)
  console.log(
    "  commit this file — it is the no-information-loss contract the redesign must not regress."
  )
}

main()

// Re-export so a one-off importer can introspect the scope vocabulary.
export { SCOPE_DIRS }
