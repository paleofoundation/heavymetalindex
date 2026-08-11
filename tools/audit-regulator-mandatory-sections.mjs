#!/usr/bin/env node
// Lints regulatory-body pages (wiki/regulators/<slug>.md) for the fixed schema
// every body page must carry (docs/architecture/category-page-architecture.md §B).
// Auto-generated cross-cut pages (index.md, by-metal.md, anything with
// auto_generated: true) are exempt. A page that still contains a generated
// prose placeholder ("_[Hand-authored …]_") fails on the load-bearing
// placeholder check — a published body page must not ship with unwritten prose.
//
// Output:
//   - data/evidence/regulator-mandatory-sections-audit.csv
//   - exit 0 if every non-exempt page has all sections and no placeholders
//   - exit 1 otherwise (unless --warn-only)

import fs from "node:fs"
import path from "node:path"

const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")
const repoRoot = process.cwd()
const regulatorsDir = path.join(repoRoot, "wiki/regulators")
const auditOutPath = path.join(repoRoot, "data/evidence/regulator-mandatory-sections-audit.csv")

const MANDATORY_SECTIONS = [
  { key: "quick_read", patterns: [/^##\s+Quick read/im] },
  { key: "mandate_scope", patterns: [/^##\s+Mandate & scope/im, /^##\s+Mandate and scope/im] },
  { key: "positions", patterns: [/^##\s+Positions across metals/im] },
  { key: "divergence", patterns: [/^##\s+Where it diverges/im] },
  { key: "update_log", patterns: [/^##\s+Update log/im] },
  { key: "key_documents", patterns: [/^##\s+Key documents/im] },
  { key: "references", patterns: [/^##\s+References\s*$/im, /^##\s+Sources\s*$/im] },
]

if (!fs.existsSync(regulatorsDir)) {
  console.log("audit-regulator-mandatory-sections: wiki/regulators/ not present yet (skipping).")
  process.exit(0)
}

const results = []
for (const file of fs.readdirSync(regulatorsDir)) {
  if (!file.endsWith(".md")) continue
  if (file === "index.md" || file === "by-metal.md") continue
  const content = fs.readFileSync(path.join(regulatorsDir, file), "utf8")
  if (/^\s*auto_generated:\s*true\s*$/im.test(content)) continue
  const slug = file.replace(/\.md$/, "")

  const missing = []
  for (const section of MANDATORY_SECTIONS) {
    if (!section.patterns.some((re) => re.test(content))) missing.push(section.key)
  }
  const hasPlaceholder = /_\[Hand-authored/i.test(content)

  let result = "pass"
  if (missing.length) result = "fail:missing-sections"
  else if (hasPlaceholder) result = "fail:placeholder-prose"

  results.push({
    slug,
    file: `wiki/regulators/${file}`,
    missing_count: missing.length,
    missing_sections: missing.join(";"),
    placeholder_prose: hasPlaceholder,
    result,
  })
}

const lines = ["slug,file,result,missing_count,placeholder_prose,missing_sections"]
for (const r of results) {
  lines.push([r.slug, r.file, r.result, r.missing_count, r.placeholder_prose, r.missing_sections].map(csv).join(","))
}
fs.writeFileSync(auditOutPath, lines.join("\n") + "\n")

const failing = results.filter((r) => r.result.startsWith("fail"))
console.log(`Regulator-page mandatory-sections audit:`)
console.log(`  body pages: ${results.length}`)
console.log(`  passing:    ${results.length - failing.length}`)
console.log(`  failing:    ${failing.length}`)
console.log(`  audit:      ${path.relative(repoRoot, auditOutPath)}`)
if (failing.length) {
  for (const r of failing) {
    console.log(`  ${r.slug}: ${r.result}${r.missing_sections ? ` (${r.missing_sections})` : ""}`)
  }
  if (!warnOnly) process.exit(1)
}

function csv(v) {
  const s = v === null || v === undefined ? "" : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}
