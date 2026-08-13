#!/usr/bin/env node
// Cat 7 (Oils, Condiments, and Specialty Foods) Step 0 lock scaffolder.
//
// Source of truth: docs/governance/category-7-step0-lock.md (2026-06-02).
// INCREMENTAL lock per Karen: rows lock individually as evidence supports a
// defensible standard; the rest stay provisional with a documented gap.
//
// Cat 7 differs from the Cat 2 exemplar: the 12 product-row pages mostly
// ALREADY EXIST (created by the v2-taxonomy scaffolder, carrying hmtc_row +
// hmtc_category but products_status: scaffold / splits_locked: false). So this
// script PATCHES frontmatter rather than creating pages, except for the three
// rows that have no page yet (honey-and-syrups, cocoa-chocolate-products,
// herbs-spices-dried-seasonings), which are created as provisional scaffolds.
//
// What this does (idempotent — re-running is safe, keyed on step0_lock_date):
//   1. LOCK the 5 ready rows: set products_status: locked, splits_locked: true,
//      and add step0 lock metadata (variant_type, platform_metals, basis,
//      confidence, lock date, lock doc). Page BODIES are left untouched.
//   2. Mark the 4 existing-but-not-ready rows provisional: add step0_status:
//      provisional + step0_provisional_reason. splits_locked stays false.
//   3. CREATE the 3 missing rows as provisional scaffolds with a
//      pending_category_lock note and a discovery target.
//
// Does NOT do (separate follow-on work, noted in the lock doc):
//   - Reroute spice sources from condiments-general to herbs-spices (edits
//     source-page frontmatter; an ingest concern, not a lock concern).
//   - Split condiments-general into sub-rows.
//   - Run discovery passes.
//   - Workbench standards-setting arithmetic (firewall: data/workbench/standards/).

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const LOCK_DATE = "2026-06-02"
const LOCK_DOC = "docs/governance/category-7-step0-lock.md"
const AUDIT_LOG = path.join(repoRoot, "data/evidence/wiki_edit_audit.jsonl")

// Append a wiki-edit audit row (pre-commit hook requires one per wiki/ edit).
// Idempotent on edit_id so re-running the scaffold does not duplicate rows.
function recordEdit(page, spanId, editId) {
  let existing = ""
  try { existing = fs.readFileSync(AUDIT_LOG, "utf8") } catch { /* file may not exist */ }
  if (existing.includes(`"edit_id":"${editId}"`)) return
  const row = {
    edit_id: editId,
    page,
    span_id: spanId,
    source_document: `Cat 7 Step 0 Lock governance scaffold | ${LOCK_DOC}`,
    retrieval_date: LOCK_DATE,
    models_used: ["anthropic/claude-opus-4-8"],
    model_agreement_state: "not_applicable",
    applied_at: `${LOCK_DATE}T00:00:00Z`,
    commit_sha: "pending",
  }
  fs.appendFileSync(AUDIT_LOG, JSON.stringify(row) + "\n", "utf8")
}

// ---- Rows that LOCK now (patch existing pages) ----
const LOCK = [
  {
    slug: "olive-oil", row: 1,
    variant_type: "independent", platform_metals: [],
    basis: "literature-baseline (Pb·Cd·tAs·Ni); regulatory-alignment (iAs·tHg·Cr·Sn·Al)",
    confidence: "medium-high",
    across_row_hook: "origin region; refined vs unrefined",
  },
  {
    slug: "cooking-oils-other", row: 2,
    variant_type: "independent", platform_metals: [],
    basis: "literature-baseline (Pb·Cd·Ni); regulatory-alignment (tAs·iAs·tHg·Cr·Sn·Al)",
    confidence: "medium",
    across_row_hook: "oil type (seed vs tropical)",
  },
  {
    slug: "butter-and-ghee", row: 3,
    variant_type: "independent", platform_metals: [],
    basis: "regulatory-alignment (all analytes; n<5 per analyte)",
    confidence: "low",
    across_row_hook: "butter vs ghee (concentration on clarification)",
  },
  {
    slug: "vinegar", row: 5,
    variant_type: "independent", platform_metals: [],
    basis: "literature-baseline (Pb); regulatory-alignment (tAs·Cd·tHg·Ni·Cr·Al·Sn)",
    confidence: "medium",
    across_row_hook: "ACTIVE: balsamic carries elevated Pb/As — review for balsamic split",
  },
  {
    slug: "salt", row: 9,
    variant_type: "independent", platform_metals: [],
    basis: "regulatory-alignment (Pb to Codex ML; all analytes)",
    confidence: "low",
    across_row_hook: "sea/rock/refined source geology",
  },
  // The next three are pre-taxonomy autonomy_v0 stubs (slugs honey/chocolate/
  // spices, taxonomy slug carried in aliases) that lacked hmtc_row, so the
  // routing layer silently dropped their evidence. Patching taxonomy frontmatter
  // reconnected deep source coverage (spices Pb 27/Cd 21/Cr 14; chocolate Cd 14/
  // Pb 10; honey Pb 7/Cd 6/Ni 5/Cr 5) — they lock on the same depth gate as the
  // rows above. `taxonomy` block carries the v2 fields these old pages lack.
  {
    slug: "spices", row: 8,
    variant_type: "whole_row_platform", platform_metals: ["Pb", "Cr"],
    basis: "literature-baseline (Pb·Cd·Cr·tAs·Ni); regulatory-alignment (tHg·Sn·Al)",
    confidence: "medium-high",
    across_row_hook: "ACTIVE: adulteration vector (turmeric/chili Pb·Cr) vs soil-uptake; review for a high-adulteration-risk sub-split",
    taxonomy: { subcategory: "Herbs/spices/dried seasonings (turmeric, cinnamon, paprika, oregano, cumin, chili powder, pepper)" },
  },
  {
    slug: "chocolate", row: 7,
    variant_type: "whole_row_platform", platform_metals: ["Cd", "Pb"],
    basis: "literature-baseline (Cd·Pb·tAs); regulatory-alignment (Ni·Cr·tHg·Sn·Al)",
    confidence: "medium-high",
    across_row_hook: "ACTIVE: cacao origin (Latin American high-Cd soils) and cocoa-solids fraction (dark vs milk); review for an origin/percentage sub-split",
    taxonomy: { subcategory: "Cocoa/chocolate products (cocoa powder, dark chocolate, milk chocolate, chocolate chips)" },
  },
  {
    slug: "honey", row: 4,
    variant_type: "independent", platform_metals: [],
    basis: "literature-baseline (Pb·Cd·Ni·Cr); regulatory-alignment (tAs·tHg·Sn·Al)",
    confidence: "medium",
    across_row_hook: "ACTIVE: honey (apiary-proximity-to-industry) vs syrup (evaporator metal-leaching, Pb·Sn) are distinct sub-platforms; review for a honey/syrup split",
    taxonomy: { subcategory: "Honey and syrups (maple, agave, molasses)" },
  },
]

// ---- Existing pages that stay PROVISIONAL (patch a provisional marker) ----
const PROVISIONAL_EXISTING = [
  {
    slug: "condiments-general", row: 6,
    reason: "Fractured across 6 incompatible platforms (fish-sauce tHg; hot-sauce/spice Pb; soy-sauce Pb/Cd; tomato/ketchup Cd; broad TDS). No sub-platform clears n>=5. SPLIT pending into ketchup-tomato / soy-sauce / fish-sauce; route spice/hot-sauce sources to Row 8.",
  },
  {
    slug: "snacks-general", row: 10,
    reason: "1 routed source (lamb-meat snacks), off-platform for the row definition (crackers/granola/chips/popcorn). Discovery target needed.",
  },
  {
    slug: "canned-foods-general", row: 11,
    reason: "Zero corpus coverage of the Sn (tinplate migration) platform that defines this row. Planned whole_row_platform (Sn). Discovery target: tin migration in canned food.",
    planned_variant_type: "whole_row_platform", planned_platform_metals: ["Sn"],
  },
  {
    slug: "mixed-meals-prepared-foods", row: 12,
    reason: "Zero routed sources. Aggregates across matrices; populates as component-matrix evidence accumulates.",
  },
]

// (Rows 4/7/8 — honey/chocolate/spices — were pre-taxonomy autonomy_v0 stubs.
// They are now in the LOCK array with a `taxonomy` block, because patching their
// taxonomy frontmatter reconnected deep routed evidence that supports locking.)

const CAT = {
  number: 7,
  name: "Oils, Condiments, and Specialty Foods",
  exposure_pathway: "Ingestion (oral, typically small serving sizes)",
  regulatory_jurisdiction: "FDA, EU, Codex",
  panel: "[Pb, iAs, Hg, Cd, Cr, Ni, Sn, Al]",
}

// --- frontmatter helpers ---------------------------------------------------

// Split a markdown file into {fm: string[], body: string}. fm is the lines
// between the opening and closing ---.
function splitFile(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) return null
  return { fmLines: m[1].split("\n"), body: m[2] }
}

// Set or replace a top-level `key: value` line in a frontmatter line array.
// Inserts before the end if absent. Returns a new array.
function setKey(fmLines, key, value) {
  const out = []
  let replaced = false
  for (const line of fmLines) {
    if (new RegExp(`^${key}:\\s`).test(line) || line === `${key}:`) {
      out.push(`${key}: ${value}`)
      replaced = true
    } else {
      out.push(line)
    }
  }
  if (!replaced) out.push(`${key}: ${value}`)
  return out
}

// Remove any top-level `key: ...` lines from a frontmatter line array.
function removeKeys(fmLines, keys) {
  return fmLines.filter((line) => !keys.some((k) => new RegExp(`^${k}:(\\s|$)`).test(line)))
}

function rebuild(fmLines, body) {
  return `---\n${fmLines.join("\n")}\n---\n${body}`
}

let locked = 0, markedProvisional = 0, createdProvisional = 0, skipped = 0

// 1. LOCK ready rows
for (const r of LOCK) {
  const fp = path.join(productsDir, `${r.slug}.md`)
  if (!fs.existsSync(fp)) { console.log(`LOCK skip (no page): ${r.slug}`); skipped++; continue }
  const text = fs.readFileSync(fp, "utf8")
  const split = splitFile(text)
  if (!split) { console.log(`LOCK skip (no frontmatter): ${r.slug}`); skipped++; continue }
  if (new RegExp(`^step0_lock_date:\\s*${LOCK_DATE}`, "m").test(text)) {
    console.log(`LOCK skip (already locked ${LOCK_DATE}): ${r.slug}`); skipped++; continue
  }
  let fm = split.fmLines
  // Pre-taxonomy stubs (honey/chocolate/spices) need the v2 taxonomy fields
  // applied before they can carry a lock; also correct their fabricated count.
  if (r.taxonomy) {
    fm = setKey(fm, "hmtc_category", CAT.number)
    fm = setKey(fm, "hmtc_category_name", `"${CAT.name}"`)
    fm = setKey(fm, "hmtc_row", r.row)
    fm = setKey(fm, "hmtc_subcategory_name", `"${r.taxonomy.subcategory}"`)
    fm = setKey(fm, "hmtc_taxonomy_version", `"2.0"`)
    fm = setKey(fm, "hmtc_taxonomy_version_date", `"2026-03-30"`)
    fm = setKey(fm, "exposure_pathway", `"${CAT.exposure_pathway}"`)
    fm = setKey(fm, "regulatory_jurisdiction", `"${CAT.regulatory_jurisdiction}"`)
    fm = setKey(fm, "panel_metals", CAT.panel)
    fm = setKey(fm, "sources", 0) // sync:source-counts restores the real value
    // Drop stale provisional markers from an earlier scaffold run on these stubs.
    fm = removeKeys(fm, ["step0_status", "step0_provisional_reason", "planned_variant_type", "planned_platform_metals"])
  }
  fm = setKey(fm, "products_status", "locked")
  fm = setKey(fm, "splits_locked", "true")
  fm = setKey(fm, "variant_type", r.variant_type)
  if (r.platform_metals.length) fm = setKey(fm, "platform_metals", `[${r.platform_metals.join(", ")}]`)
  fm = setKey(fm, "step0_lock_date", LOCK_DATE)
  fm = setKey(fm, "step0_lock_doc", LOCK_DOC)
  // Certification-basis metadata belongs in the private Standards Workbench,
  // never in public Index frontmatter.
  fm = removeKeys(fm, ["step0_basis"])
  fm = setKey(fm, "step0_confidence", r.confidence)
  fm = setKey(fm, "across_row_review_hook", `"${r.across_row_hook}"`)
  fm = setKey(fm, "updated", LOCK_DATE)
  fs.writeFileSync(fp, rebuild(fm, split.body), "utf8")
  recordEdit(`wiki/products/${r.slug}.md`, "cat7-step0-lock", `cat7-step0-lock-${r.slug}-${LOCK_DATE}`)
  console.log(`LOCKED Row ${r.row}: ${r.slug} (${r.confidence})`)
  locked++
}

// 2. Mark existing-but-not-ready rows provisional
for (const r of PROVISIONAL_EXISTING) {
  const fp = path.join(productsDir, `${r.slug}.md`)
  if (!fs.existsSync(fp)) { console.log(`PROVISIONAL skip (no page): ${r.slug}`); skipped++; continue }
  const text = fs.readFileSync(fp, "utf8")
  const split = splitFile(text)
  if (!split) { console.log(`PROVISIONAL skip (no frontmatter): ${r.slug}`); skipped++; continue }
  let fm = split.fmLines
  fm = setKey(fm, "step0_status", "provisional")
  fm = setKey(fm, "step0_provisional_reason", `"${r.reason}"`)
  fm = setKey(fm, "step0_lock_doc", LOCK_DOC)
  if (r.planned_variant_type) fm = setKey(fm, "planned_variant_type", r.planned_variant_type)
  if (r.planned_platform_metals) fm = setKey(fm, "planned_platform_metals", `[${r.planned_platform_metals.join(", ")}]`)
  fm = setKey(fm, "updated", LOCK_DATE)
  fs.writeFileSync(fp, rebuild(fm, split.body), "utf8")
  recordEdit(`wiki/products/${r.slug}.md`, "cat7-step0-provisional", `cat7-step0-provisional-${r.slug}-${LOCK_DATE}`)
  console.log(`PROVISIONAL Row ${r.row}: ${r.slug}`)
  markedProvisional++
}

// 3. Ensure primary_metals_of_concern is set on every locked row. The
//    standards gap report / percentile engine emits one row per metal in this
//    field; v2-scaffolded pages (olive-oil, cooking-oils-other, butter-and-ghee,
//    vinegar, salt) shipped without it and were therefore invisible to the
//    standards toolchain. Idempotent (setKey overwrites in place).
const PRIMARY_METALS = {
  "olive-oil": ["Pb", "Cd", "tAs", "Ni"],
  "cooking-oils-other": ["Pb", "Cd", "Ni"],
  "butter-and-ghee": ["Pb", "Cd"],
  "honey": ["Pb", "Cd", "Ni", "Cr"],
  "vinegar": ["Pb", "tAs", "Cd"],
  "chocolate": ["Cd", "Pb", "tAs"],
  "spices": ["Pb", "Cd", "tAs", "Cr"],
  "salt": ["Pb", "Cd"],
}
let metalsPatched = 0
for (const [slug, metals] of Object.entries(PRIMARY_METALS)) {
  const fp = path.join(productsDir, `${slug}.md`)
  if (!fs.existsSync(fp)) { console.log(`METALS skip (no page): ${slug}`); continue }
  const split = splitFile(fs.readFileSync(fp, "utf8"))
  if (!split) { console.log(`METALS skip (no frontmatter): ${slug}`); continue }
  const desired = `[${metals.join(", ")}]`
  const current = split.fmLines.find((l) => /^primary_metals_of_concern:/.test(l))
  if (current && current === `primary_metals_of_concern: ${desired}`) continue // already correct
  const fm = setKey(split.fmLines, "primary_metals_of_concern", desired)
  fs.writeFileSync(fp, rebuild(fm, split.body), "utf8")
  recordEdit(`wiki/products/${slug}.md`, "cat7-primary-metals", `cat7-primary-metals-${slug}-${LOCK_DATE}`)
  console.log(`METALS set primary_metals_of_concern on ${slug}: ${desired}`)
  metalsPatched++
}

console.log(`\nCat 7 Step 0 scaffold done: ${locked} locked, ${markedProvisional} marked provisional, ${metalsPatched} metals-patched, ${skipped} skipped.`)
