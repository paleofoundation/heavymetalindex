import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

// Decimal KB/MB, measured from final uncompressed UTF-8 HTML on disk.
export const PAGE_WEIGHT_WARN_BYTES = 300_000
export const PAGE_WEIGHT_FAIL_BYTES = 1_000_000

export function auditPageWeight(publicDir) {
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
  return {
    pages,
    warnings: pages.filter((page) => page.bytes > PAGE_WEIGHT_WARN_BYTES),
    failures: pages.filter((page) => page.bytes > PAGE_WEIGHT_FAIL_BYTES),
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = auditPageWeight(process.env.HMI_PUBLIC_DIR ?? "public")
  console.log(`audit-page-weight: ${result.failures.length ? "FAIL" : "PASS"} (${result.pages.length} HTML pages; warn > ${PAGE_WEIGHT_WARN_BYTES} bytes; fail > ${PAGE_WEIGHT_FAIL_BYTES} bytes)`)
  for (const page of result.warnings) {
    console.warn(`  ${page.bytes > PAGE_WEIGHT_FAIL_BYTES ? "FAIL" : "WARN"} ${page.page}: ${page.bytes} bytes`)
  }
  console.log(`  ${result.warnings.length} warnings; ${result.failures.length} failures`)
  if (result.failures.length) process.exitCode = 1
}
