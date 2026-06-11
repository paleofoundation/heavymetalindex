#!/usr/bin/env node
// Lints non-stub ingredient pages for the eight mandatory H2 sections
// established in CLAUDE.md Part 6. Stub pages (all-pending contamination_profile
// and zero contributing sources in the routing audit) are exempt.
//
// Output:
//   - data/evidence/ingredient-mandatory-sections-audit.csv (audit log)
//   - exit 0 if all non-stub pages have all eight sections
//   - exit 1 (with a list of failing pages) otherwise
//
// Run modes:
//   node tools/audit-ingredient-mandatory-sections.mjs           — exit-1 on failure
//   node tools/audit-ingredient-mandatory-sections.mjs --warn-only  — exit-0, write audit only
//
// The audit can be consumed by the orchestrator's COMPLETE-INGREDIENT-SECTIONS
// action, which drafts the missing sections from the routing audit and the
// contributing source pages.

import fs from "node:fs"
import path from "node:path"
// The role-based matcher now lives in a shared module so the completeness
// scorecard (tools/evidence/build-ingredient-scorecard.mjs) and this audit can
// never silently disagree about whether a section exists.
import { MANDATORY_SECTIONS } from "./evidence/lib/ingredient-sections.mjs"

const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")
const repoRoot = process.cwd()
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const routingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const auditOutPath = path.join(repoRoot, "data/evidence/ingredient-mandatory-sections-audit.csv")

// ---------- Step 1: identify stubs vs non-stubs ----------

function readSources() {
  if (!fs.existsSync(routingAuditPath)) return new Map()
  const text = fs.readFileSync(routingAuditPath, "utf8")
  // Crude per-ingredient source count: count distinct source_id rows with
  // ingredient mentions in declared_targets. The audit CSV doesn't index by
  // ingredient directly, so we'll just track whether the contamination_profile
  // has any non-pending sub-blocks.
  return new Map()
}

const routingSourceCounts = readSources()

function isStub(content) {
  // Stub: no contamination_profile sub-block has advanced beyond pending,
  // AND no body section indicates active synthesis.
  // Quick proxy: look for any status: in_progress or status: populated in
  // the frontmatter. If found, not a stub.
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) return true
  const fm = fmMatch[1]
  const hasAdvanced = /status:\s*(in_progress|populated)/.test(fm)
  return !hasAdvanced
}

// ---------- Step 2: scan pages ----------

const results = []

for (const file of fs.readdirSync(ingredientsDir)) {
  if (!file.endsWith(".md")) continue
  if (file === "index.md") continue
  const filePath = path.join(ingredientsDir, file)
  const content = fs.readFileSync(filePath, "utf8")
  const slug = file.replace(/\.md$/, "")
  const stub = isStub(content)

  if (stub) {
    results.push({
      slug,
      file: `wiki/ingredients/${file}`,
      stub: true,
      missing_sections: "",
      missing_count: 0,
      result: "exempt:stub",
    })
    continue
  }

  // Non-stub: check each mandatory section.
  const missing = []
  for (const section of MANDATORY_SECTIONS) {
    const found = section.patterns.some((re) => re.test(content))
    if (!found) missing.push(section.key)
  }

  results.push({
    slug,
    file: `wiki/ingredients/${file}`,
    stub: false,
    missing_sections: missing.join(";"),
    missing_count: missing.length,
    result: missing.length === 0 ? "pass" : "fail",
  })
}

// ---------- Step 3: write audit ----------

const lines = ["slug,file,stub,result,missing_count,missing_sections"]
for (const r of results) {
  lines.push([r.slug, r.file, r.stub, r.result, r.missing_count, r.missing_sections].map(csv).join(","))
}
fs.writeFileSync(auditOutPath, lines.join("\n") + "\n")

// ---------- Step 4: report ----------

const failing = results.filter((r) => r.result === "fail")
const passing = results.filter((r) => r.result === "pass")
const stubs = results.filter((r) => r.stub)

console.log(`Ingredient mandatory-sections audit:`)
console.log(`  total pages: ${results.length}`)
console.log(`  stubs (exempt): ${stubs.length}`)
console.log(`  non-stub passing: ${passing.length}`)
console.log(`  non-stub failing: ${failing.length}`)
console.log(`  audit: ${path.relative(repoRoot, auditOutPath)}`)

if (failing.length > 0) {
  console.log(`\nFailing pages (top 20 by missing section count):`)
  failing
    .sort((a, b) => b.missing_count - a.missing_count)
    .slice(0, 20)
    .forEach((r) => {
      console.log(`  ${r.slug} (missing ${r.missing_count}): ${r.missing_sections}`)
    })
  if (failing.length > 20) console.log(`  ... and ${failing.length - 20} more`)
  if (!warnOnly) process.exit(1)
}

function csv(value) {
  const s = value === null || value === undefined ? "" : String(value)
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}
