#!/usr/bin/env node
// One-shot fixer for the hard-rule violations reported by
// tools/audit-product-content-quality.mjs:
//
//   - Strip "HMTc Category N row N" / "Category N row N" / "HMTc Cat N"
//     codenames; replace with public-facing framing.
//   - Strip "Category N Evidence Fitness pilot" / "Evidence Fitness pilot"
//     and rephrase the surrounding sentence in neutral terms.
//   - Replace `data/workbench/standards/<slug>.md` and
//     `data/evidence/<file>.csv` repo paths in body prose with public
//     framing that just names "the staff Standards Workbench".
//   - Drop free-floating "p10/p90/p100" tokens from scaffold-intro prose
//     where they describe wiki-computed distributions that don't exist
//     (per CLAUDE.md / OPERATING.md these belong on the workbench, not
//     the public page).
//
// What this does NOT touch:
//   - Source-cited evidence rows that report p50/p90/p95 verbatim from a
//     source's published statistics (those are literature evidence).
//   - Generator-managed marker blocks (`<!-- BEGIN: hmi-... -->`).
//   - Frontmatter.
//
// Idempotent. Run from repo root: node tools/fix-product-content-quality.mjs

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")

let filesChanged = 0
let totalReplacements = 0

for (const file of fs.readdirSync(productsDir).sort()) {
  if (!file.endsWith(".md")) continue
  const fullpath = path.join(productsDir, file)
  const original = fs.readFileSync(fullpath, "utf8")
  const fixed = fixOne(original)
  if (fixed !== original) {
    fs.writeFileSync(fullpath, fixed, "utf8")
    filesChanged += 1
  }
}

console.log(`Content-quality fixer: ${filesChanged} file(s) updated, ${totalReplacements} total replacements.`)

function fixOne(text) {
  // Preserve frontmatter; only operate on body.
  let frontmatter = ""
  let body = text
  if (text.startsWith("---\n")) {
    const end = text.indexOf("\n---\n", 4)
    if (end > 0) {
      frontmatter = text.slice(0, end + 5)
      body = text.slice(end + 5)
    }
  }

  // Retirement pages legitimately reference internal policy codenames
  // (e.g. "Category 5 Step 0 Amendment 1" as a literal policy-doc title)
  // and cross-row pointer language ("re-routed to Category 3 row 10").
  // Hand-rewording those preserves meaning; generic regex destroys it.
  // Skip retired pages and require human editing.
  if (/^\s*retired:\s*true\s*$/m.test(frontmatter)) return text

  // Process body line by line so we can skip inside marker blocks.
  const lines = body.split("\n")
  let inMarker = false
  for (let i = 0; i < lines.length; i++) {
    if (/<!--\s*BEGIN:\s*hmi-/.test(lines[i])) { inMarker = true; continue }
    if (/<!--\s*END:\s*hmi-/.test(lines[i])) { inMarker = false; continue }
    if (inMarker) continue

    const before = lines[i]
    lines[i] = applyRules(lines[i])
    if (lines[i] !== before) totalReplacements += 1
  }

  return frontmatter + lines.join("\n")
}

function applyRules(line) {
  let out = line

  // ----- Rule A: HMTc Category N row N → public framing -----
  // "This page is a structural scaffold for HMTc Category 1 row 15."
  //   → "This page is a structural scaffold for the non-rice teething and
  //      snacks product row."
  // But we don't have the public label inline. Safer: drop the codename and
  // let the surrounding sentence stand. The title H1 already names the row.
  out = out.replace(/\bThis page is (a structural scaffold|HMTc) (?:for |)HMTc Category [12345] row \d+\b\.?/gi,
    "This page is a structural scaffold for this product row.")
  out = out.replace(/\bThis page is HMTc Category [12345] row \d+ from the locked beverage architecture\.?/gi,
    "This page is part of the locked beverage product taxonomy.")
  out = out.replace(/\bHMTc Category [12345] row \d+\b/g, "this product row")
  out = out.replace(/\bHMTc Cat [12345] row \d+\b/g, "this product row")
  out = out.replace(/\bHMTc row \d+\b/g, "this product row")
  out = out.replace(/\bCategory [12345] row \d+\b/g, "this product row")
  out = out.replace(/\bHMTc Cat ?[12345]\b/g, "the HMT&C certification program")

  // ----- Rule A2: Cat N Row N / Cat N codename patterns (Category 2 scaffolds) -----
  out = out.replace(/\bThis page is a Step 0 lock scaffold for Cat ?[12345] Row \d+\b\.?/gi,
    "This page is a structural scaffold for this product row.")
  out = out.replace(/\bCat ?[12345] Row \d+\b/g, "this product row")
  out = out.replace(/\bCategory [12345] Row \d+\b/g, "this product row")
  out = out.replace(/\bCat ?[12345] levers per the Step 0 lock framework/gi,
    "Levers for this product category")
  out = out.replace(/\bNo within-row split per Step 0 lock\b/gi,
    "No within-row split per the locked taxonomy")
  out = out.replace(/\bper the Step 0 lock\b/gi, "per the locked taxonomy")
  out = out.replace(/\bStep 0 lock framework\b/gi, "locked-taxonomy framework")
  out = out.replace(/\bStep 0 lock\b/gi, "scope lock")
  out = out.replace(/\bCat ?2 clean-contaminated pair\b/gi, "clean-contaminated pair")
  out = out.replace(/\bCat ?2\b/g, "the children's personal care category")

  // ----- Rule B: Category N Evidence Fitness pilot → neutral framing -----
  out = out.replace(/\bThis page is part of the Category [12345] Evidence Fitness pilot\.?\s*/gi,
    "")
  out = out.replace(/\bCategory [12345] Evidence Fitness pilot\b/gi, "evidence summary")
  out = out.replace(/\bEvidence Fitness pilot\b/gi, "evidence summary")

  // ----- Rule C: repo paths in body → public framing -----
  // `data/workbench/standards/<slug>.md` → "the staff Standards Workbench"
  out = out.replace(/\(`data\/workbench\/standards\/[a-z0-9_-]+\.md`(?:[^)]*)\)/g, "(the staff Standards Workbench)")
  out = out.replace(/in `data\/workbench\/standards\/[a-z0-9_-]+\.md`/g, "in the staff Standards Workbench")
  out = out.replace(/`data\/workbench\/standards\/`/g, "the staff Standards Workbench")
  out = out.replace(/`data\/workbench\/standards\/[a-z0-9_-]+\.md`/g, "the staff Standards Workbench")
  out = out.replace(/`data\/workbench\/[a-z0-9_/-]+`/g, "the staff Standards Workbench")
  // Generic data/evidence/<file>.csv in body prose
  out = out.replace(/`data\/evidence\/[a-z0-9_-]+\.(csv|jsonl|md|json)`/g, "the structured evidence layer")

  // ----- Rule D: free-floating wiki-computed percentile tokens in prose -----
  // Strip "p10/p90/p100 distributions" when describing absence; the wiki
  // doesn't compute those, the workbench does.
  out = out.replace(/\bp10\/p90\/p100 distributions/g, "distributions")
  out = out.replace(/\bp10\/p50\/p90 distributions/g, "distributions")
  out = out.replace(/\bp10 or p90\b/g, "full percentile coverage")
  out = out.replace(/\bp10\/p90 distributions/g, "distributions")

  return out
}
