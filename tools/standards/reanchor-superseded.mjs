#!/usr/bin/env node
// reanchor-superseded.mjs — deterministic re-anchoring for every live cert cell whose anchor row is
// now gated in the register (superseded / not in force / withdrawn / not yet in force ...).
//
// Method v2.0 rule applied per orphaned cell, in order, using ONLY rows that exist in
// data/evidence/regulatory_limits.csv and are in force today:
//   scan       — the strictest in-force row of the same analyte and basis family whose product_scope
//                matches the subcategory's own scope terms (audit_scope / scope_include, minus
//                scope_exclude) and passes its basis_guard: a direct sovereign ML for the product.
//   catch-all  — a true general-food row ("food other than the listed ... categories", "other food
//                not specified in the Schedule"): a direct ML for any food the instrument does not
//                list; the M2 verifiers confirm the product is not separately listed.
//   subsumed   — a species cell (iAs, MeHg, Cr-VI) with no in-force sovereign or catch-all row is
//                bounded by its parent total (governance: species ≤ total), never left empty.
//   none       — nothing in force applies: the cell stays a gap and is logged for a baseline screen.
// A pick at or below the live number is applied outright (tighter or equal: never a loosening).
// A pick ABOVE the live number is applied on the Index side (the honest Method v2.0 value) and
// recorded in confidence/_held-raises.json; the round-trip diff then holds that record out of the
// cert copy until the raise is ratified (brief: raised numbers are never pushed unratified).
//
// Usage: node tools/standards/reanchor-superseded.mjs [--dir=cat4-compiled] [--cert=<repo>] [--apply]
// Writes confidence/_reanchor-<date>.json (survey) and, with --apply, the config(s) + _held-raises.json.

import fs from "node:fs"
import path from "node:path"
import { loadRegister, kindOf, anchorIds, variantsOf, normMetal, SPECIES_OF } from "./lib/confidence.mjs"
import { isGatedStatus } from "./lib/register-gate.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const CERT = args.get("cert") || path.join(process.env.HOME, "Desktop/heavymetalcertified")
const ONLY_DIR = args.get("dir") || null
const APPLY = args.has("apply")
const TODAY = new Date().toISOString().slice(0, 10)
const CONF = path.join(REPO, "data/workbench/standards/confidence")

export function basisFamily(b) {
  const t = String(b || "").toLowerCase()
  if (!t) return "dietary-content"
  if (/migrat|leach|release|simulant|extract|soluble element/.test(t)) return "migration"
  if (/mg\/kg of (the )?(material|article|product mass)|homogeneous material|composition|percent by weight|% by weight|by weight of the (article|material)|content of the material/.test(t)) return "material-content"
  if (/pde|permitted daily exposure|µg\/day|ug\/day/.test(t)) return "daily-exposure"
  return "dietary-content"
}
const CATCH_ALL = /^(food other than the listed|other food( not specified| not otherwise)?( in the [a-z]+ schedule)?$|any food$)/i
const isNum = (v) => typeof v === "number" && Number.isFinite(v)

// config shape per compiled dir (mirrors roundtrip-category's plan map)
const CAT1_SHAPE = new Set(["cat1-compiled", "cat3-compiled", "seafood-compiled", "cat27-compiled", "cat28-compiled", "cat29-compiled"])
const LIMIT_SHAPE = new Set(["cat15-compiled", "cat31-compiled", "cat32-compiled"]) // food-limit-compiler: read_across[an] = {gov_ids} | {source_id,label}
const SUBSUMED_OK = new Set(["cat27-compiled", "cat28-compiled", "cat29-compiled"]) // cat1/cat3/seafood reconcile species themselves
function configFor(dir) {
  if (dir === "seafood-compiled") return "seafood-config.json"
  const m = dir.match(/^cat(\d+)-compiled$/); return m ? `cat${m[1]}-config.json` : null
}
function subOf(cfg, slug) {
  const subs = cfg.subcategories || cfg.rows || cfg.products || {}
  if (Array.isArray(subs)) return subs.find((s) => s.slug === slug) || null
  return subs[slug] || Object.values(subs).find((s) => s && s.slug === slug) || null
}
function scopeTest(sub) {
  const inc = sub.audit_scope ? [sub.audit_scope] : Array.isArray(sub.scope_include) ? sub.scope_include : sub.scope_include ? [sub.scope_include] : []
  const exc = [...(Array.isArray(sub.scope_exclude) ? sub.scope_exclude : sub.scope_exclude ? [sub.scope_exclude] : []), ...(sub.audit_exclude_scope ? [sub.audit_exclude_scope] : [])]
  const incRx = inc.map((s) => new RegExp(s, "i")), excRx = exc.map((s) => new RegExp(s, "i"))
  return { has: incRx.length > 0, test: (scope) => incRx.some((r) => r.test(scope)) && !excRx.some((r) => r.test(scope)) }
}
const OVERRIDES = (() => { try { return JSON.parse(fs.readFileSync(path.join(CONF, "_reanchor-overrides.json"), "utf8")).items || {} } catch { return {} } })()
const register = loadRegister(REPO)
const inForce = [...register.values()].filter((r) => !isGatedStatus(r.status) && Number.isFinite(Number(r.value_ug_kg)))
const cellsOut = [], configEdits = new Map(), held = []
const dirs = fs.readdirSync(path.join(CERT, "data/standards")).filter((d) => d.endsWith("-compiled") && (!ONLY_DIR || d === ONLY_DIR)).sort()
for (const dir of dirs) {
  const cfgName = configFor(dir), cfgPath = cfgName && path.join(REPO, "tools/standards", cfgName)
  const cfg = cfgPath && fs.existsSync(cfgPath) ? JSON.parse(fs.readFileSync(cfgPath, "utf8")) : null
  const dp = path.join(CERT, "data/standards", dir)
  for (const f of fs.readdirSync(dp).filter((x) => x.endsWith(".json") && !x.startsWith("_")).sort()) {
    let rec; try { rec = JSON.parse(fs.readFileSync(path.join(dp, f), "utf8")) } catch { continue }
    const slug = rec.slug || f.replace(/\.json$/, "")
    const sub = cfg ? subOf(cfg, slug) : null
    for (const [variant, cells] of variantsOf(rec)) {
      for (const [analyteRaw, c] of Object.entries(cells || {})) {
        const analyte = normMetal(analyteRaw)
        const ids = anchorIds(c)
        const gated = ids.map((id) => register.get(id)).filter((r) => r && isGatedStatus(r.status))
        if (!gated.length) continue
        const g = gated[0]
        const live = isNum(c.value) ? c.value : isNum(c.value_exact) ? c.value_exact : null
        const fam = basisFamily(c.basis || g.basis)
        const guard = sub && sub.basis_guard ? new RegExp(sub.basis_guard, "i") : null
        const scope = sub ? scopeTest(sub) : { has: false, test: () => false }
        const pool = inForce.filter((r) => normMetal(r.metal_species) === analyte && basisFamily(r.basis) === fam && (!guard || guard.test(r.basis)))
        const row = (r) => ({ id: r.regulatory_limit_id, value: Number(r.value_ug_kg), jurisdiction: r.jurisdiction, scope: r.product_scope, basis: r.basis })
        const scan = pool.filter((r) => scope.has && scope.test(r.product_scope)).map(row).sort((a, b) => a.value - b.value || a.id.localeCompare(b.id))[0] || null
        const catchAll = pool.filter((r) => CATCH_ALL.test(r.product_scope)).map(row).sort((a, b) => a.value - b.value || a.id.localeCompare(b.id))[0] || null
        const parent = SPECIES_OF[analyte] || null
        let cls, pick = null
        if (scan) { pick = scan; cls = live == null || scan.value <= live ? "scan-tighter-or-equal" : "scan-raise" }
        else if (catchAll) { pick = catchAll; cls = live == null || catchAll.value <= live ? "catch-all-tighter" : "catch-all-raise" }
        else if (parent && SUBSUMED_OK.has(dir) || parent && !CAT1_SHAPE.has(dir)) cls = "subsumed"
        else cls = "none"
        // overrides (confidence/_reanchor-overrides.json, keyed dir|slug|variant|analyte): a session-judged anchor,
        // {"id": ...} | {"subsumed": true} | {"none": true}; scan picks are NEVER applied without one (a keyword scan
        // over product_scope is a lead, not an anchor).
        const ov = OVERRIDES[`${dir}|${slug}|${variant}|${analyte}`] || OVERRIDES[`${dir}|${slug}|*|${analyte}`] || null
        let overridden = false
        if (ov) {
          overridden = true
          if (ov.subsumed) { cls = parent ? "subsumed" : "none"; pick = null }
          else if (ov.none) { cls = "none"; pick = null }
          else if (ov.id) { const r = register.get(ov.id); if (!r || isGatedStatus(r.status)) { cls = "override-invalid"; pick = null } else { pick = row(r); cls = (live == null || pick.value <= live ? "override-tighter-or-equal" : "override-raise") + (ov.read_across ? "-read-across" : "") } }
        } else if (/^scan/.test(cls)) cls = "needs-judgment:" + cls
        const isHold = /raise/.test(cls) || cls === "subsumed"
        cellsOut.push({ dir, slug, variant, analyte, kind: kindOf(c), live_value: live, basis: c.basis || null, basis_family: fam, gated_anchor: g.regulatory_limit_id, gated_scope: g.product_scope, class: cls, pick, held: isHold, config: cfgName, scope_terms: scope.has })
        if (!APPLY || !sub || cls === "none" || /^needs-judgment|override-invalid/.test(cls)) continue
        const asReadAcross = ov && ov.read_across
        // ---- config edit
        const shapeCells = sub.cells && typeof sub.cells === "object"
        if (cls === "subsumed") {
          const spec = { subsumed: { bounded_by: parent, rationale: `No in-force sovereign or general-food ${analyte} maximum level applies to this product on the ${fam} basis after the supersession of ${g.regulation_page}; the species is bounded by its parent total (${parent}) per the certification-readiness ruling (species ≤ total).`, jurisdictions_checked: "register scan " + TODAY } }
          if (shapeCells) sub.cells[analyteRaw] = spec; else { sub.read_across = sub.read_across || {}; sub.read_across[analyteRaw] = spec }
        } else if (shapeCells) {
          const prev = sub.cells[analyteRaw] && typeof sub.cells[analyteRaw] === "object" ? sub.cells[analyteRaw] : {}
          const keep = {}; for (const k of ["basis_label", "screen", "label", "note"]) if (prev[k] !== undefined) keep[k] = prev[k]
          sub.cells[analyteRaw] = asReadAcross ? { read_across: { source_id: pick.id, label: ov.label || `read-across from ${pick.jurisdiction} (${pick.scope})` }, ...keep, reanchor_note: `${TODAY}: ${g.regulation_page} superseded; ${cls} → ${pick.id}` } : { gov_ids: [pick.id], ...keep, reanchor_note: `${TODAY}: ${g.regulation_page} superseded; ${cls} → ${pick.id}` }
        } else if (LIMIT_SHAPE.has(dir)) {
          sub.read_across = sub.read_across || {}
          sub.read_across[analyteRaw] = asReadAcross ? { source_id: pick.id, label: ov.label || `read-across from ${pick.jurisdiction} (${pick.scope})`, reanchor_note: `${TODAY}: ${g.regulation_page} superseded; ${cls} → ${pick.id}` } : { gov_ids: [pick.id], reanchor_note: `${TODAY}: ${g.regulation_page} superseded; ${cls} → ${pick.id}` }
        } else {
          sub.read_across = sub.read_across || {}
          sub.read_across[analyteRaw] = { source_id: pick.id, ...(asReadAcross ? {} : { basis: "gov" }), label: asReadAcross ? (ov.label || `read-across from ${pick.jurisdiction} (${pick.scope})`) : /catch-all/.test(cls) ? `${pick.jurisdiction} general-food maximum level (${pick.scope})` : undefined, reanchor_note: `${TODAY}: ${g.regulation_page} superseded; ${cls} → ${pick.id}` }
          if (!sub.read_across[analyteRaw].label) delete sub.read_across[analyteRaw].label
        }
        configEdits.set(cfgPath, cfg)
        if (isHold) held.push({ key: `${dir}|${slug}|${variant}|${analyte}`, dir, slug, variant, analyte, live_value: live, new_value: pick ? pick.value : null, new_kind: cls === "subsumed" ? `subsumed ≤ ${parent}` : "gov", anchor: pick ? pick.id : null, gated_anchor: g.regulatory_limit_id, class: cls, recorded: TODAY, status: "held-for-ratification" })
      }
    }
  }
}
const byClass = {}; for (const c of cellsOut) byClass[c.class] = (byClass[c.class] || 0) + 1
const out = { generated: new Date().toISOString(), cert: CERT, dir: ONLY_DIR, applied: APPLY, cells: cellsOut.length, by_class: byClass, cells_detail: cellsOut }
fs.mkdirSync(CONF, { recursive: true })
fs.writeFileSync(path.join(CONF, `_reanchor-${TODAY}${ONLY_DIR ? "-" + ONLY_DIR : ""}.json`), JSON.stringify(out, null, 2) + "\n")
if (APPLY) {
  for (const [p, cfg] of configEdits) fs.writeFileSync(p, JSON.stringify(cfg, null, 2) + "\n")
  if (held.length) {
    const hp = path.join(CONF, "_held-raises.json")
    const cur = fs.existsSync(hp) ? JSON.parse(fs.readFileSync(hp, "utf8")) : { _doc: "Cells whose honest Method v2.0 value is ABOVE the live cert number (or moved from firm to bounded) after a supersession; applied on the Index side, held out of the cert copy until ratified (decide.mjs). Generated by reanchor-superseded.mjs.", items: [] }
    const byKey = new Map(cur.items.map((x) => [x.key, x])); for (const h of held) byKey.set(h.key, { ...(byKey.get(h.key) || {}), ...h })
    cur.items = [...byKey.values()].sort((a, b) => a.key.localeCompare(b.key)); fs.writeFileSync(hp, JSON.stringify(cur, null, 2) + "\n")
  }
}
console.log(`reanchor-superseded${ONLY_DIR ? ` [${ONLY_DIR}]` : ""}: ${cellsOut.length} orphaned cell(s) in ${new Set(cellsOut.map((c) => c.dir)).size} dir(s): ${JSON.stringify(byClass)}${APPLY ? ` — applied to ${configEdits.size} config(s); ${held.length} held raise(s)` : " (survey; pass --apply)"}`)
for (const c of cellsOut) console.log(`  ${(c.held ? "HELD " : "     ") + c.class.padEnd(22)} ${c.dir.replace("-compiled", "").padEnd(8)} ${c.slug}[${c.variant}] ${c.analyte.padEnd(5)} ${String(c.live_value).padEnd(6)} ${c.gated_anchor.slice(0, 60)} → ${c.pick ? `${c.pick.id} (${c.pick.value})` : c.class}`)
