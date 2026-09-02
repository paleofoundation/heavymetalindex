#!/usr/bin/env node
// harvest-cert-anchors.mjs — Phase B accelerator for compile-category categories
// (docs/tasks/standards-95-confidence-completion-brief.md §B "reconcile cert↔index").
//
// The live cert records hold anchors that were written around the compiler (completion committed in
// cert JSON). The config is the ONLY durable home for a value, so this tool reads, for every cell the
// round-trip diff classifies as cert-valued-index-empty / cert-bounded-index-empty /
// cert-valued-index-absent, the live cert cell's anchor(s) and proposes the config spec that
// reproduces it: gov → gov_ids (binding + candidates), read_across → read_across.source_id,
// components → component_read_across, subsumed → subsumed.bounded_by. Nothing is invented: every id
// is a register row the cert cell already cites.
//
// GUARD (D2): an anchor whose register basis fails the subcategory's basis_guard is NEVER harvested
// (a wrong-basis value is not a protective limit); it is reported as skipped for the completion pass,
// where it is corrected with the Part 2 direction named. Gated (superseded/draft) rows are skipped too.
//
// Usage: node tools/standards/harvest-cert-anchors.mjs --cat=23 [--apply] [--cert=<repo>]
//   default is a report + proposal file data/workbench/standards/confidence/_harvest-<dir>.json;
//   --apply writes the accepted specs into tools/standards/cat<N>-config.json (a config change,
//   to be followed by roundtrip-category --cat=N).

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { spawnSync } from "node:child_process"
import { STATUS_GATE } from "./lib/register-gate.mjs"
import { loadRegister, kindOf, variantsOf } from "./lib/confidence.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const CAT = args.get("cat")
const APPLY = args.has("apply")
const CERT = args.get("cert") || process.env.CERT_REPO || path.join(os.homedir(), "Desktop/heavymetalcertified")
if (!CAT) { console.error("harvest-cert-anchors: --cat=<N> required"); process.exit(2) }
const GENERIC = new Set(["2", "4", "5", "8", "10", "11", "13", "14", "18", "19", "20", "21", "22", "23", "35"])
// compile-cat1-shaped configs (read_across map per subcategory; direct rows selected by scope): cat3
// (cat3-config.json) and seafood (seafood-config.json → cert seafood-compiled).
const CAT1_SHAPE = { "3": { config: "cat3-config.json", dir: "cat3-compiled" }, seafood: { config: "seafood-config.json", dir: "seafood-compiled" },
  // compile-cat27/28/29 share the read_across-map shape (direct rows by scope; read_across as comparator)
  "27": { config: "cat27-config.json", dir: "cat27-compiled" }, "28": { config: "cat28-config.json", dir: "cat28-compiled" }, "29": { config: "cat29-config.json", dir: "cat29-compiled" } }
if (!GENERIC.has(CAT) && !CAT1_SHAPE[CAT]) { console.error(`harvest-cert-anchors: cat ${CAT} has no harvestable config shape (legacy compilers need their own harvester)`); process.exit(2) }
const SHAPE = CAT1_SHAPE[CAT] ? "cat1" : "generic"
const cfgPath = path.join(REPO, "tools/standards", CAT1_SHAPE[CAT] ? CAT1_SHAPE[CAT].config : `cat${CAT}-config.json`)
const cfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"))
const dir = CAT1_SHAPE[CAT] ? CAT1_SHAPE[CAT].dir : `cat${CAT}-compiled`
// GB 2762-2022 → GB 2762-2025 successor map (the 2022 rows are superseded since 2026-09-02)
const SUCCESSOR = (() => { try { const ex = JSON.parse(fs.readFileSync(path.join(REPO, "data/workbench/standards/confidence/_gb2762-2025-extraction.json"), "utf8")); const m = {}; for (const r of ex) if (r.supersedes_id) for (const old of String(r.supersedes_id).split(/[;,]\s*/)) m[old.trim()] = r.new_id; return m } catch { return {} } })()
const successor = (id) => SUCCESSOR[id] || id
const register = loadRegister(REPO)

// round-trip diff → the cells to harvest
const dif = spawnSync("node", ["tools/standards/diff-compiled-vs-cert.mjs", `--dir=${dir}`, `--cert=${CERT}`, "--json"], { cwd: REPO, encoding: "utf8", maxBuffer: 1 << 28 })
const diff = JSON.parse(dif.stdout)[0]
// generic shape: cells the index leaves empty. cat1 shape: also cells where the index publishes a value with
// NO register anchor (the retired inline value_ppb path) or a looser value (a live tighter sovereign cell).
const targets = (diff.cells || []).filter((c) => /^cert-valued-index-empty|^cert-bounded-index-empty|^cert-valued-index-absent/.test(c.cls) || (SHAPE === "cat1" && /^cert-tighter|^index-tighter|^anchor-change|^kind-change/.test(c.cls)))

const certDir = path.join(CERT, "data/standards", dir)
const applied = [], skipped = []
const guardOf = (sub) => (sub.basis_guard ? new RegExp(sub.basis_guard, "i") : null)
const rowOk = (id, guard) => {
  const r = register.get(id)
  if (!r) return { ok: false, why: `${id} not in register` }
  if (STATUS_GATE.test(r.status)) return { ok: false, why: `${id} gated (${r.status})` }
  if (guard && !guard.test(`${r.basis || ""} ${r.basis_class || ""}`)) return { ok: false, why: `${id} basis "${r.basis}" fails basis_guard` }
  return { ok: true, row: r }
}

for (const t of targets) {
  const sub = cfg.subcategories[t.slug]
  if (!sub) { skipped.push({ ...t, why: "slug not in config" }); continue }
  const rec = JSON.parse(fs.readFileSync(path.join(certDir, `${t.slug}.json`), "utf8"))
  const vmap = new Map(variantsOf(rec))
  const cell = (vmap.get(t.variant) || [...vmap.values()][0] || {})[t.analyte]
  if (!cell) { skipped.push({ ...t, why: "cert cell missing" }); continue }
  const k = kindOf(cell)
  const guard = guardOf(sub)
  const stamp = `harvested 2026-09-02 from the live cert record (round-trip reconciliation, docs/tasks/standards-95-confidence-completion-brief.md Phase B)`
  if (SHAPE === "cat1") {
    // compile-cat1 shape: read_across[analyte] = { source_id, basis:"gov" (direct sovereign lookup), label };
    // subsumed species are produced by reconcileSpecies from the parent, never configured.
    const ra = (sub.read_across = sub.read_across || {})
    const cur1 = ra[t.analyte]
    const curKind1 = !cur1 ? "(scope)" : cur1.not_material ? "not_material" : cur1.value_ppb != null ? "inline-value" : cur1.source_id ? "read_across" : "?"
    if (k === "subsumed") {
      // cat3 (compile-cat1) derives species cells from the parent by reconcileSpecies; cat27/28/29 take an
      // explicit subsumed spec (added 2026-09-02) so a bounded species reproduces from config.
      if (CAT === "3" || CAT === "seafood") { skipped.push({ ...t, from: curKind1, cert_kind: k, why: "subsumed is derived from the parent by reconcileSpecies (harvest the parent)" }); continue }
      const parent = cell.subsumed_by || cell.bounded_by
      if (!parent) { skipped.push({ ...t, from: curKind1, cert_kind: k, why: "subsumed without subsumed_by" }); continue }
      applied.push({ slug: t.slug, variant: t.variant, analyte: t.analyte, from: curKind1, to: "subsumed", value: null, anchor: `≤ ${parent}` })
      if (APPLY) ra[t.analyte] = { subsumed: { bounded_by: parent, rationale: cell.rationale || cell.label || undefined, basis_class: cell.basis_class || "speciation-bounded" }, _harvest: stamp }
      continue
    }
    const rawId = cell.binding_id || cell.source_id
    const id = successor(rawId)
    const chk = rowOk(id, guard)
    if (!rawId || !chk.ok) { skipped.push({ slug: t.slug, variant: t.variant, analyte: t.analyte, from: curKind1, cert_kind: k, value: cell.value ?? null, anchor: rawId || null, why: chk.why || "no anchor id" }); continue }
    // an index cell that is ALREADY tighter than cert on a real anchor is kept (never loosen)
    if (t.cls === "index-tighter" && curKind1 !== "inline-value") { skipped.push({ slug: t.slug, variant: t.variant, analyte: t.analyte, from: curKind1, cert_kind: k, value: cell.value ?? null, anchor: rawId, why: "index already tighter on a register anchor; kept" }); continue }
    const spec = { source_id: id, ...(k === "gov" ? { basis: "gov" } : {}), label: cell.label || cell.basis_note || `${k === "gov" ? "government maximum level by lookup" : "government read-across"}: ${chk.row.jurisdiction} ${chk.row.product_scope.slice(0, 80)}`, _harvest: stamp + (id !== rawId ? `; ${rawId} → successor ${id}` : "") }
    applied.push({ slug: t.slug, variant: t.variant, analyte: t.analyte, from: curKind1, to: k === "gov" ? "read_across(basis:gov)" : "read_across", value: cell.value ?? null, anchor: id })
    if (APPLY) ra[t.analyte] = spec
    continue
  }
  const cur = (sub.cells || {})[t.analyte]
  const curKind = cur ? Object.keys(cur).find((x) => ["gov_ids", "read_across", "component_read_across", "subsumed", "control", "not_material", "baseline_screen"].includes(x)) : "(none)"

  let spec = null, why = null
  if (k === "gov") {
    const ids = [cell.binding_id, ...(cell.candidates || []).map((c) => c.id)].filter(Boolean)
    const ok = ids.filter((id) => rowOk(id, guard).ok)
    const bad = ids.filter((id) => !rowOk(id, guard).ok).map((id) => rowOk(id, guard).why)
    if (!ok.includes(cell.binding_id)) why = `binding ${cell.binding_id}: ${rowOk(cell.binding_id, guard).why}`
    else spec = { gov_ids: [...new Set(ok)], label: cell.label || undefined, screen: cell.screen === true || cell.type === "screen" ? true : undefined, screen_note: cell.screen_note || undefined, binding_control: cell.binding_control || undefined, substantiation: cell.substantiation || undefined, _harvest: stamp + (bad.length ? `; dropped candidates: ${bad.join("; ")}` : "") }
  } else if (k === "read_across" && cell.components && cell.components.length) {
    const comps = cell.components.filter((c) => rowOk(c.source_id, guard).ok)
    const bad = cell.components.filter((c) => !rowOk(c.source_id, guard).ok)
    if (!comps.some((c) => c.source_id === cell.binding_id)) why = `binding component ${cell.binding_id}: ${rowOk(cell.binding_id, guard).why}`
    else spec = { component_read_across: { components: comps.map((c) => ({ component: c.component, source_id: c.source_id })), label: cell.label || undefined, basis_label: cell.basis || undefined, substantiation: cell.substantiation || undefined }, _harvest: stamp + (bad.length ? `; dropped components: ${bad.map((c) => rowOk(c.source_id, guard).why).join("; ")}` : "") }
  } else if (k === "read_across") {
    const chk = rowOk(cell.source_id, guard)
    if (!chk.ok) why = chk.why
    else spec = { read_across: { source_id: cell.source_id, label: cell.label || undefined, substantiation: cell.substantiation || undefined }, screen: cell.screen === true || cell.type === "screen" ? true : undefined, screen_note: cell.screen_note || undefined, binding_control: cell.binding_control || undefined, _harvest: stamp }
  } else if (k === "subsumed") {
    const parent = cell.subsumed_by || cell.bounded_by
    if (!parent) why = "subsumed without subsumed_by"
    else spec = { subsumed: { bounded_by: parent, rationale: cell.rationale || cell.label || `${t.analyte} is a component of ${parent} and bounded by it`, basis_class: cell.basis_class || "speciation-bounded", regulatory_basis: cell.regulatory_basis || undefined, jurisdictions_checked: cell.jurisdictions_checked || undefined }, _harvest: stamp }
  } else why = `cert kind ${k} is not harvestable`
  if (spec) {
    for (const key of Object.keys(spec)) if (spec[key] === undefined) delete spec[key]
    if (spec.read_across) for (const key of Object.keys(spec.read_across)) if (spec.read_across[key] === undefined) delete spec.read_across[key]
    if (spec.component_read_across) for (const key of Object.keys(spec.component_read_across)) if (spec.component_read_across[key] === undefined) delete spec.component_read_across[key]
    // carry the prior spec's companion disclosures forward
    if (cur && cur.companion_ids) spec.companion_ids = cur.companion_ids
    if (cur && cur.companion_ml) spec.companion_ml = cur.companion_ml
    applied.push({ slug: t.slug, variant: t.variant, analyte: t.analyte, from: curKind, to: Object.keys(spec)[0], value: cell.value ?? null, anchor: cell.binding_id || cell.source_id || (cell.subsumed_by ? `≤ ${cell.subsumed_by}` : null) })
    if (APPLY) { sub.cells = sub.cells || {}; sub.cells[t.analyte] = spec }
  } else skipped.push({ slug: t.slug, variant: t.variant, analyte: t.analyte, from: curKind, cert_kind: k, value: cell.value ?? null, anchor: cell.binding_id || cell.source_id || null, why })
}

const out = { compiled_dir: dir, generated: new Date().toISOString(), targets: targets.length, applied, skipped }
fs.mkdirSync(path.join(REPO, "data/workbench/standards/confidence"), { recursive: true })
fs.writeFileSync(path.join(REPO, "data/workbench/standards/confidence", `_harvest-${dir}.json`), JSON.stringify(out, null, 2) + "\n")
if (APPLY) {
  if (SHAPE === "cat1" && Array.isArray(cfg.panel) && !cfg.panel.includes("Cr")) { cfg.panel.push("Cr"); console.log("panel: Cr added (canonical 11-cell panel)") }
  cfg._harvest_2026_09_02 = `${applied.length} cell spec(s) harvested from the live cert records by tools/standards/harvest-cert-anchors.mjs (Phase B reconciliation); ${skipped.length} cert cell(s) NOT harvested (basis_guard / gated / non-harvestable) and left for the completion pass — see data/workbench/standards/confidence/_harvest-${dir}.json`
  fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2) + "\n")
}
console.log(`harvest [${dir}]: ${targets.length} target cell(s) → ${applied.length} harvestable${APPLY ? " (APPLIED to config)" : ""}, ${skipped.length} skipped`)
const byWhy = {}
for (const s of skipped) { const key = String(s.why).replace(/^[^ ]+ /, "").slice(0, 60); byWhy[key] = (byWhy[key] || 0) + 1 }
for (const [w, n] of Object.entries(byWhy).sort((a, b) => b[1] - a[1])) console.log(`   skipped ${String(n).padStart(3)}: ${w}`)
for (const s of skipped.slice(0, 12)) console.log(`     ${s.slug} ${s.analyte} (${s.cert_kind} ${s.value ?? ""} @ ${s.anchor}): ${s.why}`)
