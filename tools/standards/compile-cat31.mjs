#!/usr/bin/env node
// compile-cat31.mjs — Category-31 (Sweeteners and Syrups) HMTc standard compiler.
// HMTc Method v2.0 (government-limit default). Derives -> audits -> verifies via the shared
// food-limit engine; numbers come ONLY from data/evidence/regulatory_limits.csv, selected by
// tools/standards/cat31-config.json. No occurrence percentiles.
//
// Honey is the load-bearing "lightly-regulated" case: it HAS sovereign MLs (Israel Pb 100,
// MERCOSUR/Paraguay Cd 100 / tAs 300, Vietnam tHg 50), so it resolves to a government value —
// never an occurrence percentile (the honey-Pb near-miss that a pooled method would have set
// ~14x the real ceiling is structurally impossible here). Rice/grain syrup carries a disclosed
// read-across from the rice inorganic-arsenic ML (EU non-parboiled milled rice iAs 150).
//
// Usage: node tools/standards/compile-cat31.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import path from "node:path"
import { compileCategory } from "./lib/food-limit-compiler.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)

const code = compileCategory({
  configPath: args.get("config") || path.join(REPO, "tools/standards/cat31-config.json"),
  outdir: args.get("outdir") || path.join(REPO, "data/workbench/standards/cat31-compiled"),
  only,
  quiet: args.has("quiet"),
  categoryNumber: 31,
  categoryName: "Sweeteners and Syrups",
  version: "v1.0 (2026-08-13, initial compilation)",
  lineageNote: "Initial Cat-31 government-limit standard. Honey/sugar/syrup MLs (Israel FCS, MERCOSUR GMC 12/2011, Paraguay Decreto 1335, Vietnam QCVN 8-2, Singapore Food Regs) govern Pb/Cd/tAs/iAs/tHg at face value. Rice/grain syrup iAs is a disclosed read-across from the EU rice iAs ML (rice-derived). Molasses/rice-syrup nickel held under a mineral-concentration screen; Al/Sn/total-Cr not-material; Cr-VI reflex control; MeHg not-material.",
})
process.exit(code)
