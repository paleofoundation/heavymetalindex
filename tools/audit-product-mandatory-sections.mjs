#!/usr/bin/env node
// Lints non-stub product-category pages for the ten mandatory H2 sections
// established in CLAUDE.md Part 6. Stub pages (zero contributing sources in
// the routing audit) are exempt.
//
// The Levers to reduce contamination section is the brand-legal-actionable
// surface of the product page; pages missing it specifically are reported
// separately and escalated above the general failure category.
//
// Output:
//   - data/evidence/product-mandatory-sections-audit.csv
//   - exit 0 if all non-stub pages have all ten sections
//   - exit 1 (with a list of failing pages) otherwise
//
// Run modes:
//   node tools/audit-product-mandatory-sections.mjs           — exit-1 on failure
//   node tools/audit-product-mandatory-sections.mjs --warn-only

import fs from "node:fs"
import path from "node:path"

const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")
const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const routingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const auditOutPath = path.join(repoRoot, "data/evidence/product-mandatory-sections-audit.csv")

const MANDATORY_SECTIONS = [
  {
    key: "who_for",
    patterns: [
      /^##\s+Who this page is for/im,
      /^##\s+Audience and purpose/im,
    ],
  },
  {
    key: "methodology",
    patterns: [
      /^##\s+Methodology/im,
      /^##\s+How this page is built/im,
    ],
  },
  {
    key: "literature_evidence_summary",
    patterns: [
      /^##\s+Literature Evidence Summary/im,
      /^##\s+HMTc Evidence Summary/im,
    ],
  },
  {
    key: "source_evidence_inventory",
    patterns: [
      /^##\s+Source Evidence Inventory/im,
      /^##\s+Per-source evidence/im,
    ],
  },
  {
    key: "broad_context_index",
    patterns: [
      /^##\s+Broad Product Context/im,
      /^##\s+Author.Scope Index/im,
    ],
  },
  {
    key: "regulatory_vs_field",
    patterns: [
      /^##\s+Federal\s*[/\\]\s*Regulatory Limits/im,
      /^##\s+Regulatory.*Field Findings/im,
      /^##\s+Regulatory comparison/im,
    ],
  },
  {
    key: "levers",
    load_bearing: true,  // escalate this one
    patterns: [
      /^##\s+Levers to reduce/im,
      /^##\s+How to reduce contamination/im,
      /^##\s+Mitigation levers/im,
      /^##\s+Reduction levers/im,
    ],
  },
  {
    key: "standards_math",
    patterns: [
      /^##\s+How standards math uses this page/im,
      /^##\s+Standards math/im,
    ],
  },
  {
    key: "recalls_enforcement",
    patterns: [
      /^##\s+Historical recalls/im,
      /^##\s+Recalls and enforcement/im,
      /^##\s+Enforcement history/im,
    ],
  },
  {
    key: "sources",
    patterns: [
      /^##\s+Sources\s*$/im,
    ],
  },
]

// ---------- Step 1: identify stubs (zero sources in routing audit) ----------

function readProductSourceCounts() {
  const counts = new Map()
  if (!fs.existsSync(routingAuditPath)) return counts
  const text = fs.readFileSync(routingAuditPath, "utf8")
  const lines = text.split("\n")
  if (lines.length < 2) return counts
  const header = lines[0].split(",")
  const slugIdx = header.indexOf("product_slug")
  const sourceIdx = header.indexOf("source_id")
  if (slugIdx < 0 || sourceIdx < 0) return counts
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (!line.trim()) continue
    const cells = line.split(",")  // crude parse acceptable for counting
    const slug = cells[slugIdx]
    const sourceId = cells[sourceIdx]
    if (!slug || !sourceId || sourceId === "—") continue
    counts.set(slug, (counts.get(slug) ?? 0) + 1)
  }
  return counts
}

const sourceCounts = readProductSourceCounts()

function isStub(slug, content) {
  // Stub: routing audit shows zero sources OR the page is a placeholder with
  // very little body content.
  const count = sourceCounts.get(slug) ?? 0
  if (count === 0) return true
  // Also stub if the page body is under ~500 chars after frontmatter
  const fmEnd = content.indexOf("---", 4)
  const bodyLen = fmEnd > 0 ? content.length - fmEnd : content.length
  if (bodyLen < 500) return true
  return false
}

// ---------- Step 2: scan pages ----------

const results = []

for (const file of fs.readdirSync(productsDir)) {
  if (!file.endsWith(".md")) continue
  if (file === "index.md") continue
  const filePath = path.join(productsDir, file)
  const content = fs.readFileSync(filePath, "utf8")
  const slug = file.replace(/\.md$/, "")
  const stub = isStub(slug, content)

  if (stub) {
    results.push({
      slug,
      file: `wiki/products/${file}`,
      source_count: sourceCounts.get(slug) ?? 0,
      stub: true,
      missing_sections: "",
      missing_count: 0,
      missing_levers: false,
      result: "exempt:stub",
    })
    continue
  }

  const missing = []
  let missingLevers = false
  for (const section of MANDATORY_SECTIONS) {
    const found = section.patterns.some((re) => re.test(content))
    if (!found) {
      missing.push(section.key)
      if (section.load_bearing) missingLevers = true
    }
  }

  results.push({
    slug,
    file: `wiki/products/${file}`,
    source_count: sourceCounts.get(slug) ?? 0,
    stub: false,
    missing_sections: missing.join(";"),
    missing_count: missing.length,
    missing_levers: missingLevers,
    result: missing.length === 0 ? "pass" : (missingLevers ? "fail:missing-levers-load-bearing" : "fail"),
  })
}

// ---------- Step 3: write audit ----------

const lines = ["slug,file,source_count,stub,result,missing_count,missing_levers,missing_sections"]
for (const r of results) {
  lines.push([r.slug, r.file, r.source_count, r.stub, r.result, r.missing_count, r.missing_levers, r.missing_sections].map(csv).join(","))
}
fs.writeFileSync(auditOutPath, lines.join("\n") + "\n")

// ---------- Step 4: report ----------

const failing = results.filter((r) => r.result.startsWith("fail"))
const missingLevers = results.filter((r) => r.missing_levers)
const passing = results.filter((r) => r.result === "pass")
const stubs = results.filter((r) => r.stub)

console.log(`Product-page mandatory-sections audit:`)
console.log(`  total pages: ${results.length}`)
console.log(`  stubs (exempt): ${stubs.length}`)
console.log(`  non-stub passing: ${passing.length}`)
console.log(`  non-stub failing: ${failing.length}`)
console.log(`  non-stub missing the load-bearing Levers section: ${missingLevers.length}`)
console.log(`  audit: ${path.relative(repoRoot, auditOutPath)}`)

if (failing.length > 0) {
  console.log(`\nPages missing the Levers section (load-bearing, escalated):`)
  missingLevers.slice(0, 20).forEach((r) => {
    console.log(`  ${r.slug} (missing ${r.missing_count} sections total)`)
  })
  if (missingLevers.length > 20) console.log(`  ... and ${missingLevers.length - 20} more`)

  console.log(`\nAll failing pages (top 10 by missing-section count):`)
  failing
    .sort((a, b) => b.missing_count - a.missing_count)
    .slice(0, 10)
    .forEach((r) => {
      console.log(`  ${r.slug}: missing ${r.missing_sections}`)
    })

  if (!warnOnly) process.exit(1)
}

function csv(value) {
  const s = value === null || value === undefined ? "" : String(value)
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}
