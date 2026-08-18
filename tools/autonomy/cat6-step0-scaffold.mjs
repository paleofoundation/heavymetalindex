#!/usr/bin/env node
// Cat 6 (Seafood) Step 0 lock scaffolder. Companion to cat7-step0-scaffold.mjs.
// Source of truth: docs/governance/category-6-step0-lock.md (2026-06-02).
//
// Cat 6 state at lock time: 5 of 6 taxonomy rows already exist as v2 scaffolds
// with hmtc_row (fish-freshwater, fish-marine-non-predatory, fish-marine-predatory,
// shellfish, seaweed-kelp-foods); canned-seafood (Row 6) is missing. The broad
// pages seafood/fresh-fish/canned-fish held ~219 stranded declarations.
//
// This script (idempotent, keyed on step0_lock_date):
//   1. CREATE canned-seafood (Row 6) as a routable provisional scaffold.
//   2. LOCK all 6 rows: products_status: locked, splits_locked: true, plus
//      variant_type / platform_metals / step0 metadata / primary_metals_of_concern.
//   Page bodies of existing rows are left untouched.
//
// Broad-scope fan-out (seafood/fresh-fish/canned-fish -> rows) and regulatory
// caps are handled outside this script (inheritedProductRoutes + broadProductScopes
// + product_regulatory_crosswalk), same split as Cat 7.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const LOCK_DATE = "2026-06-02"
const LOCK_DOC = "docs/governance/category-6-step0-lock.md"
const AUDIT_LOG = path.join(repoRoot, "data/evidence/wiki_edit_audit.jsonl")

const CAT = {
  number: 6, name: "Seafood",
  exposure_pathway: "Ingestion (oral)",
  regulatory_jurisdiction: "FDA, EU, Codex",
  panel: "[Pb, iAs, Hg, Cd, Cr, Ni, Sn, Al]",
}

// All six rows. `create: true` means the page does not exist yet.
const ROWS = [
  {
    slug: "fish-freshwater", row: 1,
    variant_type: "independent", platform_metals: [],
    primary_metals: ["Hg", "MeHg", "Pb"],
    basis: "literature-baseline (Hg/MeHg·Pb); regulatory-alignment (Cd·iAs·rest)",
    confidence: "medium",
    hook: "predatory freshwater species (pike, bass) bioaccumulate more MeHg — review for a freshwater-predatory sub-split",
  },
  {
    slug: "fish-marine-non-predatory", row: 2,
    variant_type: "independent", platform_metals: [],
    primary_metals: ["tHg", "MeHg", "Cd", "iAs"],
    basis: "regulatory-alignment binding on most analytes; literature-baseline where depth supports",
    confidence: "medium-low",
    hook: "oily small fish (sardine/anchovy) vs whitefish (cod) differ on Cd/iAs — review for split",
  },
  {
    slug: "fish-marine-predatory", row: 3,
    variant_type: "whole_row_platform", platform_metals: ["MeHg", "tHg"],
    primary_metals: ["MeHg", "tHg", "Cd"],
    basis: "literature-baseline (MeHg·tHg); regulatory-alignment (rest); EU predatory-fish Hg cap 1000 binds",
    confidence: "medium",
    hook: "ACTIVE: MeHg bioaccumulation platform (tuna/swordfish/shark) — the defining Cat 6 risk; species gradient large",
  },
  {
    slug: "shellfish", row: 4,
    variant_type: "whole_row_platform", platform_metals: ["Cd", "iAs"],
    primary_metals: ["Cd", "iAs", "Pb"],
    basis: "literature-baseline (Cd·iAs·Pb); regulatory-alignment (rest); EU bivalve Pb 1500/Cd 1000 caps",
    confidence: "medium-high",
    hook: "bivalves (filter feeders, high Cd/iAs) vs crustaceans differ — review for a bivalve/crustacean split",
  },
  {
    slug: "seaweed-kelp-foods", row: 5,
    variant_type: "whole_row_platform", platform_metals: ["iAs", "tAs", "Cd"],
    primary_metals: ["iAs", "tAs", "Cd"],
    basis: "literature-baseline (iAs·tAs·Cd); regulatory-alignment (rest)",
    confidence: "medium-low",
    hook: "ACTIVE: hijiki and brown algae carry far higher iAs (food-safety advisories) — review for a species sub-split",
  },
  {
    slug: "canned-seafood", row: 6, create: true,
    title: "Canned seafood (with tin flag)",
    variant_type: "whole_row_platform", platform_metals: ["Sn"],
    primary_metals: ["Sn", "MeHg", "Cd"],
    basis: "regulatory-alignment (Sn to Codex 250000; inherited fish Hg caps); literature pending",
    confidence: "provisional",
    hook: "tinplate Sn migration plus inherited fish MeHg; canned-fish broad page fans here",
  },
]

function recordEdit(page, spanId, editId) {
  let existing = ""
  try { existing = fs.readFileSync(AUDIT_LOG, "utf8") } catch {}
  if (existing.includes(`"edit_id":"${editId}"`)) return
  fs.appendFileSync(AUDIT_LOG, JSON.stringify({
    edit_id: editId, page, span_id: spanId,
    source_document: `Cat 6 Step 0 Lock governance scaffold | ${LOCK_DOC}`,
    retrieval_date: LOCK_DATE, models_used: ["anthropic/claude-opus-4-8"],
    model_agreement_state: "not_applicable", applied_at: `${LOCK_DATE}T00:00:00Z`, commit_sha: "pending",
  }) + "\n")
}

function splitFile(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) return null
  return { fmLines: m[1].split("\n"), body: m[2] }
}
function setKey(fmLines, key, value) {
  const out = []; let replaced = false
  for (const line of fmLines) {
    if (new RegExp(`^${key}:\\s`).test(line) || line === `${key}:`) { out.push(`${key}: ${value}`); replaced = true }
    else out.push(line)
  }
  if (!replaced) out.push(`${key}: ${value}`)
  return out
}
function rebuild(fmLines, body) { return `---\n${fmLines.join("\n")}\n---\n${body}` }

function createBody(r) {
  return `
# ${r.title}

Step 0 scope-locked row for HMTc Taxonomy v2.0 Category ${CAT.number} (${CAT.name}), Row ${r.row}. The row scope is locked (\`variant_type: ${r.variant_type}\`${r.platform_metals.length ? `, platform_metals ${r.platform_metals.join(", ")}` : ""}). Lock authority: [\`${LOCK_DOC}\`](/${LOCK_DOC}).

This row carries the **tin flag** for Sn migration from the can, and inherits the fish-row mercury concern for its contents. Speciation (MeHg vs tHg) is non-substitutable.

## Literature scope

Routable destination for source pages declaring \`products: [${r.slug}]\` and the fan-out target for broad \`canned-fish\` declarations. HMTc thresholds for this row are developed under the certification program at [heavymetalcertified.com](https://heavymetalcertified.com).

## Methodology

Reports what cited sources say about heavy-metal concentrations in this row. Speciation non-substitutable per CLAUDE.md Part 14. Basis preserved.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
_Pending: regenerated once same-platform sources route to this row._
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-source-legend -->
## Sources

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->
`
}

let created = 0, locked = 0
for (const r of ROWS) {
  const fp = path.join(productsDir, `${r.slug}.md`)

  if (r.create && !fs.existsSync(fp)) {
    const fm = [
      "---",
      `title: "${r.title}"`,
      "type: product-category",
      `category: ${r.slug}`,
      `hmtc_category: ${CAT.number}`,
      `hmtc_category_name: "${CAT.name}"`,
      `hmtc_row: ${r.row}`,
      `hmtc_subcategory_name: "${r.title}"`,
      `hmtc_taxonomy_version: "2.0"`,
      `hmtc_taxonomy_version_date: "2026-03-30"`,
      `exposure_pathway: "${CAT.exposure_pathway}"`,
      `regulatory_jurisdiction: "${CAT.regulatory_jurisdiction}"`,
      `panel_metals: ${CAT.panel}`,
      `primary_metals_of_concern: [${r.primary_metals.join(", ")}]`,
      `audience: [regulator, educator, brand-legal, brand-qa, retailer-compliance]`,
      `aliases: [canned-fish, canned-tuna, canned-sardines, canned-salmon, tinned-fish]`,
      `products_status: locked`,
      `splits_locked: true`,
      `variant_type: ${r.variant_type}`,
      `platform_metals: [${r.platform_metals.join(", ")}]`,
      `step0_lock_date: ${LOCK_DATE}`,
      `step0_lock_doc: ${LOCK_DOC}`,
      `step0_basis: "${r.basis}"`,
      `step0_confidence: ${r.confidence}`,
      `across_row_review_hook: "${r.hook}"`,
      `literature_scope: thin`,
      `sources: 0`,
      `wiki_doi: null`,
      `created_by: cat6_step0_scaffold_${LOCK_DATE.replace(/-/g, "_")}`,
      `updated: ${LOCK_DATE}`,
      "---",
    ].join("\n")
    fs.writeFileSync(fp, fm + createBody(r), "utf8")
    recordEdit(`wiki/products/${r.slug}.md`, "cat6-step0-create", `cat6-step0-create-${r.slug}-${LOCK_DATE}`)
    console.log(`CREATED Row ${r.row}: ${r.slug} (${r.confidence})`)
    created++
    continue
  }

  if (!fs.existsSync(fp)) { console.log(`skip (no page, not create): ${r.slug}`); continue }
  const text = fs.readFileSync(fp, "utf8")
  if (new RegExp(`^step0_lock_date:\\s*${LOCK_DATE}`, "m").test(text)) { console.log(`LOCK skip (already locked): ${r.slug}`); continue }
  const split = splitFile(text)
  if (!split) { console.log(`LOCK skip (no frontmatter): ${r.slug}`); continue }
  let fm = split.fmLines
  fm = setKey(fm, "products_status", "locked")
  fm = setKey(fm, "splits_locked", "true")
  fm = setKey(fm, "variant_type", r.variant_type)
  if (r.platform_metals.length) fm = setKey(fm, "platform_metals", `[${r.platform_metals.join(", ")}]`)
  fm = setKey(fm, "primary_metals_of_concern", `[${r.primary_metals.join(", ")}]`)
  fm = setKey(fm, "step0_lock_date", LOCK_DATE)
  fm = setKey(fm, "step0_lock_doc", LOCK_DOC)
  fm = setKey(fm, "step0_basis", `"${r.basis}"`)
  fm = setKey(fm, "step0_confidence", r.confidence)
  fm = setKey(fm, "across_row_review_hook", `"${r.hook}"`)
  fm = setKey(fm, "updated", LOCK_DATE)
  fs.writeFileSync(fp, rebuild(fm, split.body), "utf8")
  recordEdit(`wiki/products/${r.slug}.md`, "cat6-step0-lock", `cat6-step0-lock-${r.slug}-${LOCK_DATE}`)
  console.log(`LOCKED Row ${r.row}: ${r.slug} (${r.confidence})`)
  locked++
}

console.log(`\nCat 6 Step 0 scaffold done: ${created} created, ${locked} locked.`)
