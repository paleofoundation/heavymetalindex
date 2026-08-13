#!/usr/bin/env node
// compile-cat32.mjs — Category-32 (Condiments, Sauces and Dressings) HMTc standard compiler.
// HMTc Method v2.0 (government-limit default). Derives -> audits -> verifies via the shared
// food-limit engine; numbers come ONLY from data/evidence/regulatory_limits.csv, selected by
// tools/standards/cat32-config.json. No occurrence percentiles.
//
// Fish sauce is the marine-derived case: methylmercury IS material (a methylation pathway
// exists), so it is read across from the fish methylmercury ML (Mexico NOM-242 500) and then
// reconciled against the total-mercury read-across (EU lower-mercury fish 300) — where MeHg is
// not below tHg it is subsumed. Vinegar carries the FDA balsamic-vinegar Pb warning-letter
// history as a documented hidden-hazard flag against its (loose) sovereign ceiling.
//
// Usage: node tools/standards/compile-cat32.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import path from "node:path"
import { compileCategory } from "./lib/food-limit-compiler.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)

const code = compileCategory({
  configPath: args.get("config") || path.join(REPO, "tools/standards/cat32-config.json"),
  outdir: args.get("outdir") || path.join(REPO, "data/workbench/standards/cat32-compiled"),
  only,
  quiet: args.has("quiet"),
  categoryNumber: 32,
  categoryName: "Condiments, Sauces and Dressings",
  version: "v1.0 (2026-08-13, initial compilation)",
  lineageNote: "Initial Cat-32 government-limit standard. Vinegar and tomato-condiment MLs (Vietnam QCVN 8-2, Paraguay/MERCOSUR tomato concentrates, Singapore Food Regs) govern where a direct sovereign scope exists. Soy sauce / fish sauce / mustard-mayo-dressings resolve by disclosed read-across from the nearest sovereign analog (Singapore sauces; fish-muscle MLs; EU fruiting-vegetable Ni). Fish-sauce methylmercury is material (marine methylation pathway) and reconciled against total mercury. Acid-food nickel/chromium held under a stainless-steel-migration screen where a pathway exists; Al/Sn not-material for non-canned forms; Cr-VI reflex control.",
})
process.exit(code)
