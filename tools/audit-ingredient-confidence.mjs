#!/usr/bin/env node
/**
 * Ingredient contamination_profile confidence audit.
 *
 * Flags every populated metal cell whose declared `confidence` is inconsistent
 * with its `n_studies`, per the canonical band rule in docs/page-templates.md
 * (the `confidence` evidence-state field, lines 180-182):
 *
 *   - `low` — 1 to 2 studies, or wide disagreement.
 *   - `medium` — 3 to 10 studies, moderate agreement.
 *   - `high` — more than 10 studies, strong agreement.
 *
 * The "agreement"/"disagreement" qualifier is a human-judgment overlay that the
 * frontmatter does not encode; n_studies is the only mechanizable signal, so the
 * n-based band is treated as the EXPECTED confidence:
 *
 *   n in [1, 2]   -> low
 *   n in [3, 10]  -> medium
 *   n > 10        -> high
 *
 * `confidence` is currently hand-assigned with no lint. A cell whose declared
 * confidence sits above its n-band ("over"-confident, e.g. high@n=1) overstates
 * how settled the evidence is; one below its band ("under"-confident) understates
 * it. Both are flagged.
 *
 * Only cells with status: populated, a numeric n_studies, and a non-null
 * confidence are checked. n_studies: 0 populated cells (declared data gaps) carry
 * confidence: null and are skipped — they have no band. A populated cell with
 * confidence: null is likewise skipped (no declared value to contradict).
 *
 * Report-only by default (exit 0) so it can be wired into CI as --warn-only
 * without breaking the build while the ~388-cell backlog is drained. Pass
 * --strict to exit non-zero when any violation is found.
 *
 * Output: data/evidence/ingredient-confidence-audit.csv
 *   (page, metal, n_studies, declared_confidence, expected_confidence, direction)
 *
 * Usage:
 *   node tools/audit-ingredient-confidence.mjs           # report-only, exit 0
 *   node tools/audit-ingredient-confidence.mjs --strict   # exit 1 on violations
 *   node tools/audit-ingredient-confidence.mjs --json
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const evidenceDir = path.join(repoRoot, "data/evidence")
const outCsvPath = path.join(evidenceDir, "ingredient-confidence-audit.csv")
const args = new Set(process.argv.slice(2).map((a) => a.replace(/^--/, "")))
const strict = args.has("strict")
const asJson = args.has("json")

const CONFIDENCE_RANK = { low: 0, medium: 1, high: 2 }

// n_studies -> expected confidence band, per docs/page-templates.md lines 180-182.
function expectedConfidence(n) {
  if (n > 10) return "high"
  if (n >= 3) return "medium"
  return "low" // n in [1, 2]
}

export function classifyCell({ nStudies, confidence }) {
  // Not auditable: no numeric n in the band domain, or no declared confidence.
  if (!Number.isFinite(nStudies) || nStudies < 1) return null
  if (confidence === null || confidence === undefined) return null
  const declared = String(confidence).toLowerCase()
  if (!(declared in CONFIDENCE_RANK)) return null
  const expected = expectedConfidence(nStudies)
  if (declared === expected) return { expected, direction: null }
  const direction =
    CONFIDENCE_RANK[declared] > CONFIDENCE_RANK[expected] ? "over" : "under"
  return { expected, direction }
}

function main() {
  const violations = []
  for (const file of fs.readdirSync(ingredientsDir).sort()) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const slug = file.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(ingredientsDir, file), "utf8")
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
    if (!fmMatch) continue
    const blocks = parseContaminationProfile(fmMatch[1])
    for (const b of blocks) {
      if (b.status !== "populated") continue
      const result = classifyCell(b)
      if (!result || result.direction === null) continue
      violations.push({
        page: `wiki/ingredients/${slug}.md`,
        metal: b.metal,
        n_studies: b.nStudies,
        declared_confidence: String(b.confidence).toLowerCase(),
        expected_confidence: result.expected,
        direction: result.direction,
      })
    }
  }

  const counts = { over: 0, under: 0 }
  for (const v of violations) counts[v.direction]++

  writeCsv(violations)

  if (asJson) {
    console.log(JSON.stringify({ violations, counts }, null, 2))
  } else {
    console.log(`ingredient confidence audit: ${violations.length} violation(s)`)
    console.log(`  over-confident  (declared > expected): ${counts.over}`)
    console.log(`  under-confident (declared < expected): ${counts.under}`)
    console.log(`  written to ${path.relative(repoRoot, outCsvPath)}`)
  }

  if (strict && violations.length > 0) process.exit(1)
}

function writeCsv(violations) {
  const header =
    "page,metal,n_studies,declared_confidence,expected_confidence,direction"
  const rows = violations.map(
    (v) =>
      `${v.page},${v.metal},${v.n_studies},${v.declared_confidence},${v.expected_confidence},${v.direction}`,
  )
  fs.mkdirSync(evidenceDir, { recursive: true })
  fs.writeFileSync(outCsvPath, header + "\n" + rows.join("\n") + (rows.length ? "\n" : ""))
}

// Parser matches tools/audit-contamination-profile-integrity.mjs.
export function parseContaminationProfile(fm) {
  const out = []
  const lines = fm.split("\n")
  let inCp = false
  let current = null
  for (const line of lines) {
    if (/^contamination_profile:\s*$/.test(line)) {
      inCp = true
      continue
    }
    if (!inCp) continue
    // A non-indented, non-blank line ends the block.
    if (line.trim() !== "" && !line.startsWith(" ")) break
    const metalMatch = line.match(/^  ([A-Za-z][A-Za-z0-9-]*):\s*$/)
    if (metalMatch) {
      if (current) out.push(current)
      current = {
        metal: metalMatch[1],
        status: null,
        confidence: null,
        nStudies: 0,
      }
      continue
    }
    if (!current) continue
    const kv = line.match(/^    ([a-z0-9_]+):\s*(.*)$/)
    if (!kv) continue
    const [, key, valRaw] = kv
    const val = valRaw.trim()
    if (key === "status") current.status = val
    else if (key === "confidence") current.confidence = val === "null" || val === "~" || val === "" ? null : val
    else if (key === "n_studies") current.nStudies = numOrNull(val) ?? 0
  }
  if (current) out.push(current)
  return out
}

function numOrNull(s) {
  if (s === undefined || s === null) return null
  const t = String(s).trim()
  if (t === "" || t === "null" || t === "~") return null
  const n = Number(t)
  return Number.isFinite(n) ? n : null
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
