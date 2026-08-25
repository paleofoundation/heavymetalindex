#!/usr/bin/env node
// compile-cat30.mjs — Category-30 (Culinary Oils and Fats) HMTc standard compiler.
// HMTc Method v2.0 (government-limit default). Derives -> audits -> verifies via the shared
// food-limit engine; numbers come ONLY from data/evidence/regulatory_limits.csv, selected by
// tools/standards/cat30-config.json. No occurrence percentiles.
//
// Usage: node tools/standards/compile-cat30.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import path from "node:path"
import { compileCategory } from "./lib/food-limit-compiler.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)

const code = compileCategory({
  configPath: args.get("config") || path.join(REPO, "tools/standards/cat30-config.json"),
  outdir: args.get("outdir") || path.join(REPO, "data/workbench/standards/cat30-compiled"),
  only,
  quiet: args.has("quiet"),
  categoryNumber: 30,
  categoryName: "Culinary Oils and Fats",
  version: "v1.1 (2026-08-25, full-panel numeric completion)",
  lineageNote: "Cat-30 government-limit standard, full-panel numeric completion (2026-08-25). Edible-oil MLs (EU 2023/915, Codex named-vegetable-oils, GSO 193:2021, Thailand MOPH 414, India FSSAI, Israel FCS) govern Pb/Cd/tAs/iAs/tHg at face value. The five previously-unregulated cells now carry adversarially-verified numeric read-across ceilings, each disclosed as a read-across to the nearest applicable sovereign instrument on the matching product-as-placed-on-market basis: Ni 100 (EU 2024/1987 formula-liquid), total-Cr 300 (China GB2762 liquid-milk), Cr-VI 10 (California SWRCB drinking-water MCL, conservative oral-intake species ceiling below the total-Cr screen), Sn 200000 (EU 2023/915 canned-food inorganic-tin, the packaging-migration pathway), Al 1000 (EU 10/2011 aluminium migration limit, the packaging-migration pathway). MeHg is bounded by the binding total-mercury ceiling (MeHg<=tHg by identity). Every panel analyte terminates in a testable ceiling; no null control/not-material cells remain (founder rule 2026-08-25).",
})
process.exit(code)
