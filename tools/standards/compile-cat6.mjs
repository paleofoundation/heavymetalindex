#!/usr/bin/env node
// Category-6 (Seafood) standard COMPILER — HMTc Method v2.0.
//
// Cat 6 reuses the shared, deterministic government-limit engine that Cat 1 carries
// (tools/standards/compile-cat1.mjs), driven by an explicit, auditable config
// (tools/standards/cat6-config.json). This is the same wrapper pattern as Cat 3
// (tools/standards/compile-cat3.mjs): the engine selects register rows by scope regex and
// records a RICH per_country (every weighed jurisdiction), which the cert "Source regulations"
// table renders. The prior cells-format (explicit-id) config collapsed per_country to a handful
// of named ids, thinning that table — this wrapper restores the full derivation richness.
//
// Numbers come ONLY from data/evidence/regulatory_limits.csv, selected per subcategory by scope,
// strictest across jurisdictions (regulatory-alignment), or by a disclosed government read-across
// (basis:gov) / substantiated not-material determination. No occurrence percentiles, no LLM values.
//   - The six animal-seafood subcats are as-consumed WET weight (ppb) taken at face value (no 8:1
//     reconstitution); the seaweed subcat is DRY-weight (mg/kg DM) and its numbers must NEVER be
//     numerically compared against the wet-weight fish ppb.
//   - tHg on the finfish/canned subcats is a policy selection of the EU 2023/915 mercury tier,
//     carried as basis:gov so the scope-selected general/lower rows do not mis-bind it.
//   - Two CONFIRMED seaweed tightenings bind the French CSHPF edible-seaweed maxima (ANSES
//     2017-SA-0070 Table 3): Cd 2000->500 (fr_cshpf_seaweed_cd_500) and tHg 2500->100
//     (fr_cshpf_seaweed_thg_100).
//
// This wrapper drives the Cat-1 engine against the Cat-6 config/outdir, injects the Cat-6 category
// metadata + per-subcategory scope_note/native_basis_label into each emitted record, then AUDITS
// every cell and prints a verify line. It exits non-zero if any cell failed to resolve (a GAP).
//
// Firewall (CLAUDE.md Part 19): these numeric outputs are STAFF/HMTc content, not public wiki.
//
// Usage:
//   node tools/standards/compile-cat6.mjs                # derive -> inject -> audit -> verify
//   node tools/standards/compile-cat6.mjs --only=slug    # single subcategory
//   node tools/standards/compile-cat6.mjs --quiet

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const REPO = process.cwd()
const HERE = path.dirname(fileURLToPath(import.meta.url))
const CONFIG = path.join(HERE, "cat6-config.json")
const OUTDIR = path.join(REPO, "data/workbench/standards/cat6-compiled")

// Drive the shared Cat-1 engine deterministically by presetting its argv contract, preserving any
// passthrough flags (--only, --quiet) the caller supplied.
const passthrough = process.argv.slice(2).filter((a) => !a.startsWith("--config") && !a.startsWith("--outdir"))
process.argv = [process.argv[0], process.argv[1], `--config=${CONFIG}`, `--outdir=${OUTDIR}`, ...passthrough]
await import("./compile-cat1.mjs")

// --- inject Cat-6 category metadata + per-subcategory prose into each record ------------------
// The Cat-1 engine writes the cat3-shaped record (slug/name/native_basis/canned/variants/...). Cat 6
// additionally carries category/category_name and the informative native_basis_label + scope_note the
// cert pages surface. These are additive; the variants payload is untouched.
const config = JSON.parse(fs.readFileSync(CONFIG, "utf8"))
const files = fs.readdirSync(OUTDIR).filter((f) => f.endsWith(".json"))
for (const f of files) {
  const p = path.join(OUTDIR, f)
  const rec = JSON.parse(fs.readFileSync(p, "utf8"))
  const sub = config.subcategories[rec.slug]
  if (!sub) continue
  const injected = {
    slug: rec.slug,
    name: rec.name,
    category: config.category,
    category_name: config.category_name,
    native_basis: rec.native_basis,
    native_basis_label: sub.native_basis_label || null,
    canned: rec.canned,
    scope_note: sub.scope_note || null,
    variants: rec.variants,
    generated_from: rec.generated_from,
    method: rec.method,
  }
  fs.writeFileSync(p, JSON.stringify(injected, null, 2))
}

// --- verify: every cell in every emitted record resolved to a value or an explicit
// not-material / subsumed determination — never a GAP. ---------------------------------------
const gaps = []
let cellCount = 0
const tally = { gov: 0, read_across: 0, not_material: 0, subsumed: 0, gap: 0 }
for (const f of files) {
  const rec = JSON.parse(fs.readFileSync(path.join(OUTDIR, f), "utf8"))
  for (const [variant, cells] of Object.entries(rec.variants)) {
    for (const [a, cell] of Object.entries(cells)) {
      cellCount++
      tally[cell.type] = (tally[cell.type] || 0) + 1
      if (cell.type === "gap") gaps.push(`${rec.slug}[${variant}].${a}: ${cell.error || "unresolved"}`)
    }
  }
}

if (gaps.length) {
  console.error(`\nverify: FAIL — ${gaps.length} unresolved cell(s):`)
  for (const g of gaps) console.error(`  - ${g}`)
  process.exit(1)
}

console.log(
  `\nverify: OK — ${cellCount} cells across ${files.length} subcategories, every cell resolved ` +
    `(gov=${tally.gov}, read_across=${tally.read_across}, not_material=${tally.not_material}, subsumed=${tally.subsumed}). ` +
    `Every number traces to a named register row in data/evidence/regulatory_limits.csv.`,
)
