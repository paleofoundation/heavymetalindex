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
if (!GENERIC.has(CAT)) { console.error(`harvest-cert-anchors: cat ${CAT} is not a compile-category config (legacy compilers need their own harvester)`); process.exit(2) }
const cfgPath = path.join(REPO, "tools/standards", `cat${CAT}-config.json`)
const cfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"))
const dir = `cat${CAT}-compiled`
const register = loadRegister(REPO)

// round-trip diff → the cells to harvest
const dif = spawnSync("node", ["tools/standards/diff-compiled-vs-cert.mjs", `--dir=${dir}`, `--cert=${CERT}`, "--json"], { cwd: REPO, encoding: "utf8", maxBuffer: 1 << 28 })
const diff = JSON.parse(dif.stdout)[0]
const targets = (diff.cells || []).filter((c) => /^cert-valued-index-empty|^cert-bounded-index-empty|^cert-valued-index-absent/.test(c.cls))

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
  const cur = (sub.cells || {})[t.analyte]
  const curKind = cur ? Object.keys(cur).find((x) => ["gov_ids", "read_across", "component_read_across", "subsumed", "control", "not_material", "baseline_screen"].includes(x)) : "(none)"
  const stamp = `harvested 2026-09-02 from the live cert record (round-trip reconciliation, docs/tasks/standards-95-confidence-completion-brief.md Phase B)`
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
  cfg._harvest_2026_09_02 = `${applied.length} cell spec(s) harvested from the live cert records by tools/standards/harvest-cert-anchors.mjs (Phase B reconciliation); ${skipped.length} cert cell(s) NOT harvested (basis_guard / gated / non-harvestable) and left for the completion pass — see data/workbench/standards/confidence/_harvest-${dir}.json`
  fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2) + "\n")
}
console.log(`harvest [${dir}]: ${targets.length} target cell(s) → ${applied.length} harvestable${APPLY ? " (APPLIED to config)" : ""}, ${skipped.length} skipped`)
const byWhy = {}
for (const s of skipped) { const key = String(s.why).replace(/^[^ ]+ /, "").slice(0, 60); byWhy[key] = (byWhy[key] || 0) + 1 }
for (const [w, n] of Object.entries(byWhy).sort((a, b) => b[1] - a[1])) console.log(`   skipped ${String(n).padStart(3)}: ${w}`)
for (const s of skipped.slice(0, 12)) console.log(`     ${s.slug} ${s.analyte} (${s.cert_kind} ${s.value ?? ""} @ ${s.anchor}): ${s.why}`)
