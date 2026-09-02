// confidence.mjs — shared, DETERMINISTIC primitives for the standards confidence pass
// (docs/tasks/standards-95-confidence-completion-brief.md §"What 95% confidence means";
// docs/governance/hmtc-governing-principles.md §"The confidence standard on the numbers", v2.7).
//
// Used by confidence-run.mjs (the runner: Lens 0 + M1/M2 queue/ingest + manifest writer) and
// lint-standards-confidence.mjs (the lint: re-derives every hash and refuses a manifest that no
// longer describes the record bytes). NOTHING here calls a model.
//
// Unit of verification: (compiled_dir, slug, variant, analyte). Manifest key: `slug|variant|analyte`.
//
// Hashes:
//   claim_sha256      canonical projection of the cell {type/kind, provenance, value_exact|value,
//                     binding_id|source_id, components[].source_id, forms[].binding_id, subsumed_by,
//                     basis|native_basis, conversion, screen_kind, loq_value, reference_method,
//                     companion_ids} — prose excluded, so a wording change never invalidates a verdict
//   anchor_sha256     over the cited register rows' full CSV lines (id-sorted)
//   instrument_sha256 over the cited regulation pages' bytes (WARN-level: a page rewrite is a pointer
//                     change, not evidence)
//   record_sha256     over the cert record file bytes (staleness gate)
//   cell_sha256       over the full cell JSON (WARN-level prose signal)

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { STATUS_GATE } from "./register-gate.mjs"
import { provenanceOf } from "./provenance.mjs"

export const FULL_PANEL = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Sn", "Al", "Cr", "Cr-VI"]
export const TIER1 = new Set(["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg"])
export const SPECIES_OF = { iAs: "tAs", MeHg: "tHg", "Cr-VI": "Cr" }
export const METHOD_VERSION = "HMTc Method v2.0 (government-limit default); governance v2.7 confidence standard"
export const ALLOWED_LENS_MODELS = new Set(["claude-fable-5-1", "claude-mythos-5-1"])
export const CONFIDENCE_MEANINGS = new Set(["provenance-identity", "disclosed-derivation", "species-identity", "method-loq", "statistical-95-one-sided"])
// Part 12 brand firewall over every string field of a compiled record (mirrors mint-dois denylist).
export const BRAND_DENYLIST = ["bobbie", "kasandrinos", "enfamil", "similac", "gerber", "happybaby", "earth's best", "kirkland", "clorox", "purina", "light labs", "kabrita", "holle", "hipp", "serenity kids", "cerebelly", "once upon a farm", "beech-nut", "plum organics", "nurturme"]

export const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex")
export const isNum = (v) => typeof v === "number" && Number.isFinite(v)
export function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// --- register -------------------------------------------------------------------------------------
export function loadRegister(repo) {
  const text = fs.readFileSync(path.join(repo, "data/evidence/regulatory_limits.csv"), "utf8")
  const lines = text.replace(/\r\n/g, "\n").split("\n").filter(Boolean)
  const head = splitCsv(lines[0])
  const rows = new Map()
  for (const l of lines.slice(1)) {
    const cells = splitCsv(l)
    const row = Object.fromEntries(cells.map((v, i) => [head[i], v]))
    if (row.regulatory_limit_id) rows.set(row.regulatory_limit_id, { ...row, _line: l, _sha256: sha256(l) })
  }
  return rows
}
export function splitCsv(line) {
  const out = []; let cur = "", q = false
  for (const ch of line) {
    if (ch === '"') q = !q
    else if (ch === "," && !q) { out.push(cur); cur = "" }
    else cur += ch
  }
  out.push(cur); return out.map((s) => s.replace(/^"|"$/g, ""))
}

// --- cells ----------------------------------------------------------------------------------------
const PROV_TO_KIND = { "regulatory-alignment": "gov", "read-across": "read_across", control: "control", "not-material": "not_material", subsumed: "subsumed", "baseline-screen": "baseline_screen" }
export function kindOf(c) {
  if (!c || typeof c !== "object") return "absent"
  if (c.error) return "gap"
  let t = c.type || c.cell_kind || ""
  if (!t) t = PROV_TO_KIND[provenanceOf(c)] || ""
  if (t === "screen") t = c.source_id && !c.binding_id ? "read_across" : "gov"
  return t || "unknown"
}
export function anchorIds(c) {
  if (!c || typeof c !== "object") return []
  const ids = []
  if (c.binding_id) ids.push(c.binding_id)
  if (c.source_id) ids.push(c.source_id)
  for (const x of c.components || []) if (x && x.source_id) ids.push(x.source_id)
  for (const x of c.forms || []) if (x && (x.binding_id || x.source_id || x.id)) ids.push(x.binding_id || x.source_id || x.id)
  return [...new Set(ids)].sort()
}
export function variantsOf(rec) {
  if (rec && rec.variants && typeof rec.variants === "object" && !rec.cells) return Object.entries(rec.variants)
  if (rec && rec.cells && typeof rec.cells === "object") return [["_", rec.cells]]
  return []
}
export function projection(c, nativeBasis) {
  if (!c || typeof c !== "object") return null
  return {
    kind: kindOf(c), provenance: provenanceOf(c) || null,
    value: isNum(c.value) ? c.value : null, value_exact: isNum(c.value_exact) ? c.value_exact : null,
    anchors: anchorIds(c), subsumed_by: c.subsumed_by || c.bounded_by || null,
    basis: c.basis || c.basis_label || c.binding_basis || null, native_basis: nativeBasis || null,
    conversion: c.basis_note && /×\s*8|÷\s*8/.test(String(c.basis_note)) ? String(c.basis_note).match(/[×÷]\s*8/)[0].replace(/\s/g, "") : (c.conversion || null),
    screen_kind: c.screen === true || c.type === "screen" ? "total-cr-screen" : null,
    loq_value: c.type === "baseline_screen" && isNum(c.value) ? c.value : null,
    reference_method: c.type === "baseline_screen" ? c.reference_method || null : null,
    companion_ids: [...new Set([...(c.companion_ml ? [c.companion_ml] : []), ...(c.companion_ids || [])])].sort(),
  }
}
export const claimHash = (c, nativeBasis) => sha256(JSON.stringify(projection(c, nativeBasis)))
export const cellHash = (c) => sha256(JSON.stringify(c))
export function anchorHash(ids, register) {
  return sha256(ids.map((id) => (register.get(id) ? register.get(id)._line : `MISSING:${id}`)).join("\n"))
}
export function instrumentPages(ids, register) {
  return [...new Set(ids.map((id) => register.get(id)?.regulation_page).filter(Boolean))].sort()
}
export function instrumentHash(pages, repo) {
  return sha256(pages.map((p) => {
    const f = path.join(repo, "wiki", `${p.replace(/^regulations\//, "regulations/")}.md`)
    return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : `MISSING:${p}`
  }).join("\n---\n"))
}

// The readiness cell classes (mirror of cert tools/standard-readiness-lint.mjs cellState; parity is
// enforced by hashing the cert record, not by sharing code across the firewall).
export function cellState(c, cells = {}, seen = new Set()) {
  const k = kindOf(c)
  if (k === "absent") return { state: "EMPTY", reason: "cell absent" }
  if (k === "gap" || k === "unspecified" || k === "unknown") return { state: "EMPTY", reason: `unresolved (${k})` }
  if (k === "control" || k === "not_material") return { state: "EMPTY", reason: `${k} carries no limit-of-record` }
  if (k === "gov" || k === "read_across" || k === "form_split" || k === "special") {
    if (!isNum(c.value)) return { state: "EMPTY", reason: `${k} without a numeric value` }
    if (k === "special") return (c.source_page || c.jurisdiction || c.source_jurisdiction) ? { state: "firm", kind: k } : { state: "EMPTY", reason: "special-basis cell names no source" }
    if (!anchorIds(c).length) return { state: "EMPTY", reason: `${k} names no register anchor` }
    return { state: "firm", kind: k }
  }
  if (k === "subsumed") {
    const parent = c.subsumed_by || c.bounded_by
    if (!parent) return { state: "EMPTY", reason: "subsumed without subsumed_by" }
    if (!(parent in cells)) return { state: "EMPTY", reason: `subsumed_by ${parent} is not on the panel` }
    if (seen.has(parent)) return { state: "EMPTY", reason: `circular subsumption via ${parent}` }
    const ps = cellState(cells[parent], cells, new Set([...seen, parent]))
    if (ps.state !== "firm") return { state: "EMPTY", reason: `subsumed under ${parent}, which is not a firm number` }
    return { state: "bounded", kind: k, parent }
  }
  if (k === "baseline_screen") {
    if (!isNum(c.value)) return { state: "EMPTY", reason: "baseline screen without a numeric LOQ" }
    if (!c.reference_method) return { state: "EMPTY", reason: "baseline screen names no reference_method" }
    if (!c.loq_source_id) return { state: "EMPTY", reason: "baseline screen names no loq_source_id" }
    return { state: "baseline", kind: k }
  }
  return { state: "EMPTY", reason: `unrecognised cell kind "${k}"` }
}

// confidence_meaning per cell class (governance v2.7): sovereign lookup → provenance-identity;
// read-across → disclosed-derivation; subsumed → species-identity; baseline → method-loq;
// occurrence-derived (none exist) → statistical-95-one-sided.
export function confidenceMeaning(c, state) {
  if (state.state === "bounded") return "species-identity"
  if (state.state === "baseline") return "method-loq"
  const k = kindOf(c)
  if (c && (c.basis_kind === "occurrence" || c.provenance === "literature-baseline")) return "statistical-95-one-sided"
  if (k === "read_across") return "disclosed-derivation"
  return "provenance-identity"
}

// --- D-set (deterministic Lens 0 checks not already in the audit) -----------------------------------
export function dSet({ rec, cell, analyte, cells, register, repo, methodById }) {
  const fails = []
  const k = kindOf(cell)
  const st = cellState(cell, cells)
  const guard = rec.basis_guard ? new RegExp(rec.basis_guard, "i") : null
  const ids = anchorIds(cell)
  // D1 explicit provenance tag
  if (st.state !== "EMPTY" && !provenanceOf(cell)) fails.push("D1:missing-provenance")
  // D2 every value-determining row's register basis satisfies the record's basis_guard
  if (guard && isNum(cell.value)) for (const id of ids) {
    const r = register.get(id)
    if (r && !guard.test(`${r.basis || ""} ${r.basis_class || ""}`)) fails.push(`D2:basis-guard ${id} basis "${r.basis}"`)
  }
  // D3 subsumed parent firm
  if (k === "subsumed" && st.state !== "bounded") fails.push(`D3:${st.reason}`)
  // D4 baseline contract
  if (k === "baseline_screen") {
    if (st.state !== "baseline") fails.push(`D4:${st.reason}`)
    else if (methodById && !methodById.get(cell.loq_source_id)) fails.push(`D4:loq_source_id ${cell.loq_source_id} not in analytical_methods.csv`)
  }
  // D5 read-across disclosure token (a label or rationale naming the derivation)
  if (k === "read_across" && !(cell.label || cell.rationale || cell.substantiation)) fails.push("D5:read-across without a disclosure label")
  // D6 brand / firewall regex over every string field
  const hay = JSON.stringify(cell).toLowerCase()
  for (const b of BRAND_DENYLIST) if (new RegExp(`(^|[^a-z0-9])${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`).test(hay)) fails.push(`D6:brand "${b}"`)
  // D9 derive-strictest: published value == roundDisplay(min over the named anchors' register values, same analyte, after the disclosed conversion)
  if (isNum(cell.value) && k !== "baseline_screen" && k !== "special") {
    const childOf = Object.entries(SPECIES_OF).find(([, p]) => p === analyte)?.[0]
    const vals = ids.map((id) => register.get(id)).filter((r) => r && !STATUS_GATE.test(r.status) && (normMetal(r.metal_species) === analyte || (cell.species_direction === "species-as-total-ceiling" && normMetal(r.metal_species) === childOf))).map((r) => Number(r.value_ug_kg)).filter(Number.isFinite)
    if (vals.length) {
      const note = String(cell.basis_note || "")
      const factor = /×\s*8\b/.test(note) ? 8 : /÷\s*8\b|\/\s*8\b/.test(note) ? 1 / 8 : 1
      const strictest = roundDisplay(Math.min(...vals) * factor)
      if (strictest !== cell.value) fails.push(`D9:published ${cell.value} ≠ strictest named anchor ${strictest}`)
    } else if (k !== "form_split") fails.push("D9:no same-analyte live anchor")
  }
  // D10 in-force / supersession on every cited instrument row
  for (const id of ids) { const r = register.get(id); if (!r) fails.push(`D10:anchor ${id} missing from register`); else if (STATUS_GATE.test(r.status)) fails.push(`D10:anchor ${id} gated (${r.status})`) }
  return { fails, state: st, kind: k, ids }
}
export const normMetal = (m) => { const t = (m || "").trim(); return t === "Cr-total" ? "Cr" : t }

// --- manifest I/O ---------------------------------------------------------------------------------
export function manifestPath(repo, dir) { return path.join(repo, "data/workbench/standards/confidence", `${dir}.json`) }
export function readManifest(repo, dir) {
  const p = manifestPath(repo, dir)
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : null
}
export function writeManifest(repo, dir, man) {
  fs.mkdirSync(path.dirname(manifestPath(repo, dir)), { recursive: true })
  fs.writeFileSync(manifestPath(repo, dir), JSON.stringify(man, null, 2) + "\n")
}
export function verificationPath(repo) { return path.join(repo, "data/evidence/regulatory_limits_verification.jsonl") }
// latest record per (id) with status verified and matching row hash
export function readVerifications(repo) {
  const p = verificationPath(repo)
  const out = new Map()
  if (!fs.existsSync(p)) return out
  for (const line of fs.readFileSync(p, "utf8").split("\n").filter(Boolean)) {
    try { const r = JSON.parse(line); if (r.regulatory_limit_id) out.set(`${r.regulatory_limit_id}|${r.row_sha256}`, r) } catch { /* skip */ }
  }
  return out
}
