#!/usr/bin/env node
// Staff-side store for the Step 0 lock derivation basis, keyed by product row_slug.
//
// WHY THIS EXISTS
// ---------------
// The Step 0 lock scaffolders (cat6-step0-scaffold.mjs, cat7-step0-scaffold.mjs)
// used to write the derivation-basis string as a `step0_basis:` frontmatter field
// on the PUBLIC product page (wiki/products/<slug>.md). That is an HMTc-derivation
// artifact ("literature-baseline (Pb·Cd); regulatory-alignment (rest)") and it
// belongs on the certification plane, never on the heavymetalindex.com index
// domain (CLAUDE.md Part 2 firewall; the honey `step0_basis` leak class flagged by
// tools/autonomy/firewall-no-threshold-lint.mjs). The basis is not deleted — it is
// relocated here, into data/workbench/standards/, which is staff-only and is never
// rendered on or linked from the index domain.
//
// The scaffolders now call recordStep0Basis() instead of emitting the public
// frontmatter field. Two scaffolders write the same file, so this merges (read →
// update the one row → write) rather than overwriting.

import fs from "node:fs"
import path from "node:path"

export const STEP0_BASIS_REL_PATH = "data/workbench/standards/step0-basis.json"

const DEFAULT_META = {
  title: "Step 0 lock derivation basis (staff-side)",
  purpose:
    "Per-product-row Step 0 derivation-basis strings. Staff-side home for the " +
    "derivation basis formerly carried as the public `step0_basis` frontmatter " +
    "field on wiki/products/<slug>.md. Relocated 2026-08-14 to keep HMTc-derivation " +
    "content off the heavymetalindex.com index domain (CLAUDE.md Part 2 firewall).",
  firewall: "workbench-only — never rendered on or linked from the index domain",
  keyed_by: "row_slug (== wiki/products/<slug>.md)",
  written_by: [
    "tools/autonomy/cat6-step0-scaffold.mjs",
    "tools/autonomy/cat7-step0-scaffold.mjs",
  ],
}

function load(fp) {
  try {
    const doc = JSON.parse(fs.readFileSync(fp, "utf8"))
    if (!doc || typeof doc !== "object") throw new Error("not an object")
    if (!doc._meta) doc._meta = DEFAULT_META
    if (!doc.rows) doc.rows = {}
    return doc
  } catch {
    return { _meta: DEFAULT_META, rows: {} }
  }
}

// Merge one row into the store. `entry` is e.g.
//   { step0_basis, step0_confidence, hmtc_category, hmtc_row, written_by }
// Existing fields on the row are preserved unless overwritten by `entry`.
export function recordStep0Basis(repoRoot, slug, entry) {
  const fp = path.join(repoRoot, STEP0_BASIS_REL_PATH)
  fs.mkdirSync(path.dirname(fp), { recursive: true })
  const doc = load(fp)
  doc.rows[slug] = { ...doc.rows[slug], ...entry }
  // Stable key order keeps diffs minimal across scaffold re-runs.
  const orderedRows = {}
  for (const k of Object.keys(doc.rows).sort()) orderedRows[k] = doc.rows[k]
  doc.rows = orderedRows
  fs.writeFileSync(fp, JSON.stringify(doc, null, 2) + "\n", "utf8")
  return fp
}
