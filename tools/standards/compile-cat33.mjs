#!/usr/bin/env node
// Category-33 (Chocolate, Cocoa and Confectionery) standard COMPILER — HMTc Method v2.0.
//
// Runs derive -> audit -> verify over tools/standards/cat33-config.json using the shared food-standards
// engine. Every published cell is a government-limit LOOKUP against data/evidence/regulatory_limits.csv;
// occurrence never selects a number. This is one of the two highest-salience commodity categories in the
// program (recent cocoa-cadmium scrutiny + imported-candy lead enforcement), so the two structural risks
// of naive auto-min are handled explicitly:
//   - Cadmium in chocolate is the BINDING CAP (EU Reg. 2023/915), set by cocoa-solids content
//     (100/300/800 ug/kg + cocoa powder 600). Preserved as a legislated form_split, never collapsed.
//   - Nickel in chocolate follows the same EU cocoa-solids split (EU Reg. 2024/1987).
//   - Lead/total-arsenic in chocolate bind MERCOSUR GMC 12/2011 (the strictest binding sovereign limit;
//     EU/Codex/FDA set none), split by cocoa content; confectionery lead binds the FDA 2006 candy
//     guidance (0.1 ppm) with MERCOSUR/Paraguay concurrence at 100.
//   - Colour-additive purity specs (21 CFR 73.x) are excluded by the engine (an additive spec is not a
//     candy ML).
//
// Firewall (CLAUDE.md Part 19): these numeric outputs are STAFF/HMTc content, not public wiki.
//
// Usage:
//   node tools/standards/compile-cat33.mjs                     # derive + audit + verify (report only)
//   node tools/standards/compile-cat33.mjs --sync-not-material # also register n/m cells in the registry
//   node tools/standards/compile-cat33.mjs --only=chocolate --quiet

import path from "node:path"
import { fileURLToPath } from "node:url"
import { runCli } from "./lib/food-standards-engine.mjs"

const REPO = process.cwd()
const HERE = path.dirname(fileURLToPath(import.meta.url))
runCli({
  repo: REPO,
  configPath: path.join(HERE, "cat33-config.json"),
  defaultOutdir: path.join(REPO, "data/workbench/standards/cat33-compiled"),
})
