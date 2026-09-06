#!/usr/bin/env node
// drop-gated-pins.mjs — remove every pinned anchor id whose register row is now gated (superseded /
// not in force / withdrawn ...) from the standards configs, so the compiler's own scope scan (or an
// explicit successor) binds instead of a dead instrument. Status-only supersessions leave pins
// behind in gov_ids[] and read_across[analyte].source_id; a pinned gated id compiles to a gap.
// Dry-run by default; --apply writes. Prints every pin dropped with its row status.
import fs from "node:fs"
import path from "node:path"
import { loadRegister } from "./lib/confidence.mjs"
import { isGatedStatus } from "./lib/register-gate.mjs"
const REPO = process.cwd(), APPLY = process.argv.includes("--apply")
const only = (process.argv.find((a) => a.startsWith("--config=")) || "").slice(9)
const register = loadRegister(REPO)
const gated = (id) => { const r = register.get(id); return r && isGatedStatus(r.status) ? r.status.slice(0, 40) : null }
const files = fs.readdirSync(path.join(REPO, "tools/standards")).filter((f) => /-config\.json$/.test(f) && (!only || f === only)).sort()
let total = 0
for (const f of files) {
  const p = path.join(REPO, "tools/standards", f)
  const cfg = JSON.parse(fs.readFileSync(p, "utf8"))
  const dropped = []
  const subs = cfg.subcategories || cfg.rows || cfg.products || {}
  const list = Array.isArray(subs) ? subs : Object.values(subs)
  for (const s of list) {
    if (!s || typeof s !== "object") continue
    if (Array.isArray(s.gov_ids)) { const keep = s.gov_ids.filter((id) => { const g = gated(id); if (g) dropped.push(`${s.slug || s.name || "?"} gov_ids ${id} [${g}]`); return !g }); if (keep.length !== s.gov_ids.length) { if (keep.length) s.gov_ids = keep; else delete s.gov_ids } }
    // compile-category shape: cells[analyte] = { gov_ids | read_across: {source_id} | source_id | component_read_across: {ids} }
    if (s.cells && typeof s.cells === "object") {
      for (const [an, spec] of Object.entries(s.cells)) {
        if (!spec || typeof spec !== "object") continue
        const lbl = `${s.slug || s.name || "?"} cells.${an}`
        if (Array.isArray(spec.gov_ids)) { const keep = spec.gov_ids.filter((x) => { const gg = gated(x); if (gg) dropped.push(`${lbl}.gov_ids ${x} [${gg}]`); return !gg }); if (keep.length !== spec.gov_ids.length) { if (keep.length) spec.gov_ids = keep; else delete spec.gov_ids } }
        for (const sub of ["read_across", "component_read_across"]) { const x = spec[sub]; if (!x || typeof x !== "object") continue
          if (x.source_id && gated(x.source_id)) { dropped.push(`${lbl}.${sub} ${x.source_id} [${gated(x.source_id)}]`); delete spec[sub] }
          else if (Array.isArray(x.ids)) { const keep = x.ids.filter((y) => { const gg = gated(y); if (gg) dropped.push(`${lbl}.${sub}.ids ${y} [${gg}]`); return !gg }); if (keep.length !== x.ids.length) { if (keep.length) x.ids = keep; else delete spec[sub] } } }
        if (spec.source_id && gated(spec.source_id)) { dropped.push(`${lbl}.source_id ${spec.source_id} [${gated(spec.source_id)}]`); delete spec.source_id }
        if (!Object.keys(spec).length) delete s.cells[an]
      }
    }
    for (const key of ["read_across", "anchors"]) {
      const m = s[key]; if (!m || typeof m !== "object") continue
      for (const [an, spec] of Object.entries(m)) {
        if (!spec || typeof spec !== "object") continue
        const id = spec.source_id || spec.id || spec.binding_id
        const g = id && gated(id)
        if (g) { dropped.push(`${s.slug || s.name || "?"} ${key}.${an} ${id} [${g}]`); delete m[an] }
        if (Array.isArray(spec.gov_ids)) { const keep = spec.gov_ids.filter((x) => { const gg = gated(x); if (gg) dropped.push(`${s.slug || s.name || "?"} ${key}.${an}.gov_ids ${x} [${gg}]`); return !gg }); if (keep.length !== spec.gov_ids.length) { if (keep.length) spec.gov_ids = keep; else delete spec.gov_ids } }
      }
      if (!Object.keys(m).length) delete s[key]
    }
  }
  // generic deep walk: a gated id in any string array (candidate sets, companion lists, jurisdictions_checked) is removed
  const walk = (node, trail) => {
    if (Array.isArray(node)) { for (let i = node.length - 1; i >= 0; i--) { const v = node[i]; if (typeof v === "string") { const g = gated(v); if (g) { dropped.push(`${trail}[${i}] ${v} [${g}]`); node.splice(i, 1) } } else if (v && typeof v === "object") walk(v, `${trail}[${i}]`) } }
    else if (node && typeof node === "object") for (const [k, v] of Object.entries(node)) {
      const t = trail ? `${trail}.${k}` : k
      if (v && typeof v === "object" && !Array.isArray(v)) { const id = v.source_id || v.binding_id; const g = id && gated(id); if (g) { dropped.push(`${t} ${id} [${g}]`); delete node[k]; continue } }
      walk(v, t)
    }
  }
  walk(cfg, "")
  if (dropped.length) { total += dropped.length; console.log(`${f}: ${dropped.length} gated pin(s)${APPLY ? " dropped" : " (dry-run)"}`); for (const d of dropped) console.log("   - " + d); if (APPLY) fs.writeFileSync(p, JSON.stringify(cfg, null, 2) + "\n") }
}
console.log(`drop-gated-pins: ${total} pin(s) across ${files.length} config(s)${APPLY ? " — applied" : " — dry-run (pass --apply)"}`)
