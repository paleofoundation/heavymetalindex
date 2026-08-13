#!/usr/bin/env node
// Category-34 (Herbs, Spices, Seasonings and Salt) standard COMPILER — HMTc Method v2.0.
//
// Runs derive -> audit -> verify over tools/standards/cat34-config.json using the shared food-standards
// engine. Every published cell is a government-limit LOOKUP against data/evidence/regulatory_limits.csv;
// occurrence never selects a number. This is the lead-in-spices enforcement space (turmeric/chili
// lead-chromate adulteration), the program's highest-salience adulteration category, so:
//   - Lead in spices binds EU Reg. 2023/915 as a botanical-part form_split (fruit 600 / seed 900 /
//     flower-pistil 1000 / bud 1000 / root-rhizome 1500 / bark 2000), preserved exactly.
//   - Salt lead binds EU 2023/915 split refined (1000) vs unrefined (2000).
//   - Basis discipline is load-bearing: DRIED-spice limits govern; fresh fruiting-vegetable / fresh-herb
//     wet-weight limits are the wrong basis and are excluded by scope.
//   - Because turmeric/chili adulteration is lead CHROMATE, total chromium and Cr-VI are SCREENED
//     (control) as adulteration co-markers with lead in the plant-derived rows, not dismissed.
//
// Firewall (CLAUDE.md Part 19): these numeric outputs are STAFF/HMTc content, not public wiki.
//
// Usage:
//   node tools/standards/compile-cat34.mjs                     # derive + audit + verify (report only)
//   node tools/standards/compile-cat34.mjs --sync-not-material # also register n/m cells in the registry
//   node tools/standards/compile-cat34.mjs --only=spices --quiet

import path from "node:path"
import { fileURLToPath } from "node:url"
import { runCli } from "./lib/food-standards-engine.mjs"

const REPO = process.cwd()
const HERE = path.dirname(fileURLToPath(import.meta.url))
runCli({
  repo: REPO,
  configPath: path.join(HERE, "cat34-config.json"),
  defaultOutdir: path.join(REPO, "data/workbench/standards/cat34-compiled"),
})
