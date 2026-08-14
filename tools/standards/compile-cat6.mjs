#!/usr/bin/env node
// Category-6 (Seafood) standard COMPILER — HMTc Method v2.0.
//
// Runs derive -> audit -> verify over tools/standards/cat6-config.json using the shared food-standards
// engine. Every published cell is a government-limit LOOKUP against data/evidence/regulatory_limits.csv;
// occurrence never selects a number. Built 2026-08-14 to apply the adversarial audit and to replace the
// one-off markdown derivation (data/workbench/standards/cat6-standards-tables.md) and the seafood-config
// gov cells that were misfiled into data/workbench/standards/cat1-compiled/.
//
//   - The six animal-seafood subcats are as-consumed WET weight (ppb); the seaweed subcat is DRY-weight
//     (mg/kg DM) and its numbers must NEVER be numerically compared against the wet-weight fish ppb.
//   - Two CONFIRMED seaweed tightenings bind the French CSHPF edible-seaweed maxima (ANSES 2017-SA-0070
//     Table 3): Cd 2000->500 (fr_cshpf_seaweed_cd_500) and tHg 2500->100 (fr_cshpf_seaweed_thg_100).
//   - MeHg on the six animal-seafood subcats is preserved as speciation-bounded by tHg (audit-affirmed).
//   - Coverage fill for the four omitted panel analytes: total Cr (HK fish 1000 / India all-fishery 12000),
//     Ni (EU 2024/1987 seaweed 30000; animal seafood -> control), Al (no seafood ML -> control), Cr-VI
//     (speciation-bounded -> not-material).
//
// Firewall (CLAUDE.md Part 19): these numeric outputs are STAFF/HMTc content, not public wiki.
//
// Usage:
//   node tools/standards/compile-cat6.mjs                     # derive + audit + verify (report only)
//   node tools/standards/compile-cat6.mjs --sync-not-material # also register n/m cells in the registry
//   node tools/standards/compile-cat6.mjs --only=shellfish --quiet

import path from "node:path"
import { fileURLToPath } from "node:url"
import { runCli } from "./lib/food-standards-engine.mjs"

const REPO = process.cwd()
const HERE = path.dirname(fileURLToPath(import.meta.url))
runCli({
  repo: REPO,
  configPath: path.join(HERE, "cat6-config.json"),
  defaultOutdir: path.join(REPO, "data/workbench/standards/cat6-compiled"),
})
