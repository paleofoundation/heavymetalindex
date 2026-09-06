#!/usr/bin/env node
// held-to-precautionary.mjs — turn every item in confidence/_held-raises.json into a `precautionary` spec on
// its subcategory config (decided under wwsaid 2026-09-02; governance "Decisions enacted under standing
// permission"). The compiler keeps resolving the honest Method v2.0 floor; lib/provenance.mjs then overlays
// the published (tighter) number and records the floor on the cell as `sovereign_floor`.
//
// Per item: config = the dir's config (roundtrip plan), sub = subcategories[slug], and
//   sub.precautionary[analyte] = { value: live_value, rationale, held_item: key, decided: "2026-09-02 wwsaid" }
// A "subsumed"/"wrong-basis-to-bounded" item (a firm species number that became parent-bounded) keeps its
// firm number below the parent total the same way (the floor is the parent's value).
// Dry-run by default; --apply writes the configs and marks the held items "precautionary-enacted".
import fs from "node:fs"
import path from "node:path"
const REPO = process.cwd(), APPLY = process.argv.includes("--apply")
const CONF = path.join(REPO, "data/workbench/standards/confidence")
const held = JSON.parse(fs.readFileSync(path.join(CONF, "_held-raises.json"), "utf8"))
function configFor(dir) {
  if (dir === "seafood-compiled") return "seafood-config.json"
  const m = dir.match(/^cat(\d+)-compiled$/); return m ? `cat${m[1]}-config.json` : null
}
function subOf(cfg, slug) {
  const subs = cfg.subcategories || cfg.rows || cfg.products || {}
  if (Array.isArray(subs)) return subs.find((s) => s.slug === slug) || null
  return subs[slug] || Object.values(subs).find((s) => s && s.slug === slug) || null
}
const cfgs = new Map(), out = []
let applied = 0, skipped = 0
for (const it of held.items) {
  if (it.status === "precautionary-enacted") { skipped++; continue }
  const cfgName = configFor(it.dir); const cfgPath = cfgName && path.join(REPO, "tools/standards", cfgName)
  if (!cfgPath || !fs.existsSync(cfgPath)) { out.push(`SKIP ${it.key}: no config`); skipped++; continue }
  if (!cfgs.has(cfgPath)) cfgs.set(cfgPath, JSON.parse(fs.readFileSync(cfgPath, "utf8")))
  const cfg = cfgs.get(cfgPath); const sub = subOf(cfg, it.slug)
  if (!sub) { out.push(`SKIP ${it.key}: subcategory not in config`); skipped++; continue }
  if (typeof it.live_value !== "number") { out.push(`SKIP ${it.key}: no numeric live value`); skipped++; continue }
  const floorText = it.new_kind && /subsumed/.test(it.new_kind) ? `the parent total that bounds ${it.analyte}` : `${it.new_value} ug/kg (${it.anchor || "in-force sovereign row"})`
  const why = it.class === "wrong-basis-to-bounded"
    ? `Published ${it.analyte} of ${it.live_value} ug/kg is retained as a precautionary program value. Its former anchor (${it.gated_anchor}) was a different-basis row and is not cited; the sovereign floor is ${floorText}.`
    : `Published ${it.analyte} of ${it.live_value} ug/kg is retained as a precautionary program value after the instrument that carried it (${(it.gated_anchor || "").split(" ")[0]}) was superseded; the strictest in-force sovereign floor is ${floorText}. HMTc is a ratcheting program and does not loosen a live limit because an instrument died.`
  sub.precautionary = sub.precautionary || {}
  sub.precautionary[it.analyte] = { value: it.live_value, rationale: why, held_item: it.key, decided: "2026-09-02 wwsaid (governance: Decisions enacted under standing permission)" }
  it.status = APPLY ? "precautionary-enacted" : it.status
  applied++; out.push(`${it.dir} ${it.slug} ${it.analyte}: precautionary ${it.live_value} (floor ${floorText.slice(0, 60)})`)
}
if (APPLY) {
  for (const [p, cfg] of cfgs) fs.writeFileSync(p, JSON.stringify(cfg, null, 2) + "\n")
  fs.writeFileSync(path.join(CONF, "_held-raises.json"), JSON.stringify(held, null, 2) + "\n")
}
console.log(`held-to-precautionary: ${applied} spec(s) ${APPLY ? "written to " + cfgs.size + " config(s)" : "planned (pass --apply)"}; ${skipped} skipped`)
for (const l of out) console.log("  " + l)
