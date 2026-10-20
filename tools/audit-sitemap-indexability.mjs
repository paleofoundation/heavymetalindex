#!/usr/bin/env node
// Fail the build when sitemap.xml and the rendered pages disagree.
// A sitemap URL must be an indexable 200 (no robots noindex, not a redirect).
// sitemap.xml must also list every such page. sitemap-scholarly.xml is a
// subset, so it may omit pages, but it may not list a noindex or redirect URL.

import path from "node:path"
import { fileURLToPath } from "node:url"
import { auditPublicSitemaps, SITEMAP_EXCLUSIONS } from "./lib/sitemap-indexability.mjs"

export { SITEMAP_EXCLUSIONS }

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
  let failed = report("sitemap.xml", result.main) + report("sitemap-scholarly.xml", result.scholarly)
  if (result.canonicalMismatch.length) {
    failed += 1
    console.error(
      `audit-sitemap-indexability: FAIL (${result.canonicalMismatch.length} canonical URLs are not the extensionless 200 path)`,
    )
    for (const publicPath of result.canonicalMismatch.slice(0, 40)) {
      console.error(`  canonical mismatch ${publicPath}`)
    }
    if (result.canonicalMismatch.length > 40) {
      console.error(`  ... ${result.canonicalMismatch.length - 40} more`)
    }
  }
  if (failed) process.exit(1)
  console.log(
    `audit-sitemap-indexability: PASS (${result.indexableCount} indexable pages, ${result.noindexCount} noindex pages)`,
  )
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main()
