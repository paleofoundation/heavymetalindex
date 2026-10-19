#!/usr/bin/env node
// Fail the build when sitemap.xml and the rendered pages disagree.
// A sitemap URL must be an indexable 200 (no robots noindex, not a redirect).
// sitemap.xml must also list every such page. sitemap-scholarly.xml is a
// subset, so it may omit pages, but it may not list a noindex or redirect URL.

import path from "node:path"
import { fileURLToPath } from "node:url"
import { auditPublicSitemaps } from "./lib/sitemap-indexability.mjs"

// Prefixes left out of the sitemap even though the HTML is indexable and
// returns 200. "/tags" covers the tag index and every /tags/* page. Those
// are thin auto-generated listings (tags/1, tags/g, tags/euecolabel, and the
// rest) and are not worth crawling. The audit does not treat them as missing.
export const SITEMAP_EXCLUSIONS = [
  "/tags",
]

function report(label, result) {
  const problems = [
    ...result.noindexListed.map((loc) => `noindex ${loc}`),
    ...result.notIndexable.map((loc) => `not an indexable 200 ${loc}`),
    ...(result.excludedListed ?? []).map((loc) => `excluded ${loc}`),
    ...result.missing.map((publicPath) => `missing ${publicPath}`),
  ]
  if (problems.length === 0) {
    console.log(`audit-sitemap-indexability: ${label} PASS (${result.count} URLs)`)
    return 0
  }
  console.error(
    `audit-sitemap-indexability: ${label} FAIL (${result.noindexListed.length} noindex, ${result.notIndexable.length} not 200, ${(result.excludedListed ?? []).length} excluded, ${result.missing.length} missing)`,
  )
  for (const problem of problems.slice(0, 40)) console.error(`  ${problem}`)
  if (problems.length > 40) console.error(`  ... ${problems.length - 40} more`)
  return 1
}

function main() {
  const repoRoot = process.cwd()
  const publicDir = process.env.HMI_PUBLIC_DIR
    ? path.resolve(process.env.HMI_PUBLIC_DIR)
    : path.join(repoRoot, "public")
  const result = auditPublicSitemaps(publicDir, repoRoot, { exclusions: SITEMAP_EXCLUSIONS })
  const failed = report("sitemap.xml", result.main) + report("sitemap-scholarly.xml", result.scholarly)
  if (failed) process.exit(1)
  console.log(
    `audit-sitemap-indexability: PASS (${result.indexableCount} indexable pages, ${result.noindexCount} noindex pages)`,
  )
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main()
