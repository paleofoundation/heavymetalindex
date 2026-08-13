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
  version: "v1.0 (2026-08-13, initial compilation)",
  lineageNote: "Initial Cat-30 government-limit standard. Edible-oil MLs (EU 2023/915, Codex named-vegetable-oils, GSO 193:2021, Thailand MOPH 414, India FSSAI, Israel FCS) govern Pb/Cd/tAs/iAs/tHg at face value; nickel is held under a hydrogenation-catalyst screen (no sovereign oil Ni ML); Al/Sn/total-Cr not-material; Cr-VI reflex control; MeHg not-material (no marine methylation pathway in a plant oil).",
})
process.exit(code)
