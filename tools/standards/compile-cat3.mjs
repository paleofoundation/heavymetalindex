#!/usr/bin/env node
// Category-3 (Grains, Cereals, and Rice Products) standard COMPILER — HMTc Method v2.0.
//
// Cat 3 reuses the shared, deterministic government-limit engine that Cat 1 already carries
// (tools/standards/compile-cat1.mjs): numbers come ONLY from data/evidence/regulatory_limits.csv,
// selected per subcategory by an explicit, auditable config (tools/standards/cat3-config.json).
// No occurrence percentiles, no LLM-authored values — every emitted number traces to a named
// register row (regulatory-alignment) or to a disclosed government read-across (basis:gov) /
// substantiated not-material determination. See cat3-config.json `_read_across_canon` for the
// per-analyte canon (tHg=HK Cap 132V grain 20; total-Cr=China GB 2762-2022 grains 1000;
// Cr-VI=reflex speciation control; Al=not-material, additive residue governed by ADI not a
// contaminant ML).
//
// This wrapper drives the Cat-1 engine against the Cat-3 config/outdir, then AUDITS every emitted
// cell and prints a verify line. It exits non-zero if any cell failed to resolve (a GAP).
//
// Firewall (CLAUDE.md Part 19): these numeric outputs are STAFF/HMTc content, not public wiki.
//
// Usage:
//   node tools/standards/compile-cat3.mjs                # derive -> audit -> verify (report only)
//   node tools/standards/compile-cat3.mjs --only=slug    # single subcategory
//   node tools/standards/compile-cat3.mjs --quiet

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const REPO = process.cwd()
const HERE = path.dirname(fileURLToPath(import.meta.url))
const CONFIG = path.join(HERE, "cat3-config.json")
const OUTDIR = path.join(REPO, "data/workbench/standards/cat3-compiled")

// Drive the shared Cat-1 engine deterministically by presetting its argv contract, preserving any
// passthrough flags (--only, --quiet) the caller supplied.
const passthrough = process.argv.slice(2).filter((a) => !a.startsWith("--config") && !a.startsWith("--outdir"))
process.argv = [process.argv[0], process.argv[1], `--config=${CONFIG}`, `--outdir=${OUTDIR}`, ...passthrough]
await import("./compile-cat1.mjs")

// --- verify: every cell in every emitted record resolved to a value or an explicit
// not-material / subsumed determination — never a GAP. -------------------------------
const files = fs.readdirSync(OUTDIR).filter((f) => f.endsWith(".json"))
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
