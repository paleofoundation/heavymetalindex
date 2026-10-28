import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

// Decimal KB/MB, measured from final uncompressed UTF-8 HTML on disk.
export const PAGE_WEIGHT_WARN_BYTES = 300_000
export const PAGE_WEIGHT_FAIL_BYTES = 1_000_000

function sourceAlreadyLarge(repoRoot, page) {
  const rel = page.replace(/\.html$/, ".md")
  const candidates = [
    path.join(repoRoot, "wiki", rel),
    path.join(repoRoot, "wiki", rel.replace(/\/index\.md$/, "/index.md")),
  ]
  return candidates.some((file) => {
    try {
      return fs.statSync(file).size > PAGE_WEIGHT_FAIL_BYTES
    } catch {
      return false
    }
  })
}

export function auditPageWeight(publicDir, repoRoot = process.cwd()) {
  const pages = []
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(file)
      else if (entry.isFile() && entry.name.endsWith(".html")) {
        pages.push({ page: path.relative(publicDir, file).split(path.sep).join("/"), bytes: fs.statSync(file).size })
      }
    }
  }
  walk(publicDir)
  pages.sort((a, b) => b.bytes - a.bytes || a.page.localeCompare(b.page))
  // A compiled explorer whose markdown is already over the limit is the page,
  // not an HTML inflation. The gate still fails when a small source emits a huge file.
  const failures = pages.filter(
    (page) => page.bytes > PAGE_WEIGHT_FAIL_BYTES && !sourceAlreadyLarge(repoRoot, page.page),
  )
  return {
    pages,
    warnings: pages.filter((page) => page.bytes > PAGE_WEIGHT_WARN_BYTES),
    failures,
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = auditPageWeight(process.env.HMI_PUBLIC_DIR ?? "public")
  console.log(`audit-page-weight: ${result.failures.length ? "FAIL" : "PASS"} (${result.pages.length} HTML pages; warn > ${PAGE_WEIGHT_WARN_BYTES} bytes; fail > ${PAGE_WEIGHT_FAIL_BYTES} bytes)`)
  const failed = new Set(result.failures.map((page) => page.page))
  for (const page of result.warnings) {
    console.warn(`  ${failed.has(page.page) ? "FAIL" : "WARN"} ${page.page}: ${page.bytes} bytes`)
  }
  console.log(`  ${result.warnings.length} warnings; ${result.failures.length} failures`)
  if (result.failures.length) process.exitCode = 1
}
