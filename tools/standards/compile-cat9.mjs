#!/usr/bin/env node
// Category-9 (Infant & Child CONTACT Products) standard COMPILER — HMTc Method v2.0, contact-product form.
//
// Category 9 is NOT a food category. Its limits are migration limits and total-content limits from
// toy-safety, childcare-article, and food-contact-material regulation — NOT dietary MLs. The single
// load-bearing rule is that BASIS IS NEVER CONFLATED: the register holds Cat-9 limits in five
// non-comparable bases (toy-migration, food-migration, total-content, surface-coating, skin-
// extraction) plus a release-rate basis (µg/cm²/week) that does not fit the register's µg/kg schema.
// A naive strictest-across-all-rows min() (the food compiler's model) would compare a total-content
// limit against a migration limit — different measured quantities — and is therefore FORBIDDEN here.
//
// Method, per (subcategory, analyte):
//   The config (tools/standards/cat9-config.json) names, EXPLICITLY, the governing government limit(s)
//   for each cell as one register row id or a set of ids that share a basis. This is a lookup (Method
//   v2.0), encoded so every published number traces to a named register row in a stated basis.
//   Resolution kinds:
//     gov_ids   → strictest (min) over the named register rows (all in the same basis) is the HMTc limit.
//     read_across → nearest analogous government value from another register row (disclosed).
//     not_material → substantiated determination; no number (iAs/MeHg for contact products, Sn for
//                    non-canned, metals with no migration pathway from an absorbent core).
//     special   → a limit whose basis cannot be a µg/kg register row (nickel release µg/cm²/week);
//                 value + unit + basis + jurisdiction + source_page declared inline.
//   companion  → an ADDITIONAL ceiling in a different basis that co-governs the cell (e.g. the CPSIA
//                total-lead content limit alongside a migration limit); published as its own ceiling.
//
// Audit safety-net: for each (subcat, analyte) the compiler scans EVERY register row matching the
// subcategory's audit_scope regex + analyte and flags any row STRICTER than the selected binding as a
// `stricter_unselected` candidate, so a missed stricter government limit surfaces in the audit rather
// than silently. Cross-basis flags are informational (different quantity), same-basis flags are defects.
//
// Output: one JSON record per subcategory to <outdir>, plus a human-readable derivation report.
// Usage: node tools/standards/compile-cat9.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat9-compiled")
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat9-config.json")
const QUIET = args.has("quiet")

// --- CSV ----------------------------------------------------------------------
function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").trim().split("\n")
  const head = splitCsvLine(lines[0])
  return lines.slice(1).map((l) => Object.fromEntries(splitCsvLine(l).map((v, i) => [head[i], v])))
}
function splitCsvLine(line) {
  const out = []; let cur = "", q = false
  for (const ch of line) {
    if (ch === '"') q = !q
    else if (ch === "," && !q) { out.push(cur); cur = "" }
    else cur += ch
  }
  out.push(cur); return out.map((s) => s.replace(/^"|"$/g, ""))
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null }
const DRAFT = /draft|not for implementation|proposed/i
const QUARANTINE = /quarantin/i

const register = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel

// canonical order for tie-breaking the binding jurisdiction at equal strictest value
const JUR_PRIORITY = ["EU", "UK", "US", "CA", "AU-NZ", "AU", "CN", "MX", "KR", "JP", "UY", "international"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }

// analyte a register row supplies, normalised to the Cat-9 panel. Contact-product arsenic and mercury
// are TOTAL element (tAs / tHg); iAs and MeHg have no contact-product counterpart (handled not-material
// in config). Cr-VI is the panel chromium cell; Cr-total is a screen, mapped separately.
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (["Pb", "tAs", "iAs", "Cd", "tHg", "MeHg", "Ni", "Al", "Sn", "Sb"].includes(m)) return m
  if (m === "Cr-VI") return "Cr-VI"
  if (m === "Cr-total" || m === "Cr") return "Cr-total"
  return null
}

function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  if (x >= 0.01) return Math.round(x * 1000) / 1000
  return x
}

// resolve a set of register ids to the strictest (min) value; validate each exists and is not gated.
function resolveIds(ids, label) {
  const rows = []
  for (const id of ids) {
    const r = byId.get(id)
    if (!r) return { error: `id ${id} not in register` }
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    rows.push({ id, value: v, jur: r.jurisdiction, basis: r.basis, scope: r.product_scope, notes: r.notes })
  }
  if (!rows.length) return { error: `no live value among [${ids.join(", ")}]` }
  rows.sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  const binding = rows[0]
  return {
    value: binding.value, binding_id: binding.id, binding_jurisdiction: binding.jur, basis: binding.basis,
    binding_page: byId.get(binding.id)?.regulation_page || "",
    candidates: rows.map((r) => ({ id: r.id, value: roundDisplay(r.value), jurisdiction: r.jur })),
    not_detectable: /not detectable|non[- ]?detect|<\s*LOD/i.test(binding.notes || "") || undefined,
  }
}

// audit safety-net: any register row matching audit_scope + analyte that is stricter than the binding
// AND from a DIFFERENT instrument (regulation_page). Same-instrument stricter rows (e.g. EU 2009/48/EC
// Category I/II versus the governing Category III scraped-off) are a deliberate material-form choice
// documented in the Step-0 lock — a solid mouthable article is Category III; applying a liquid- or
// dry-material limit to it would be scientifically wrong. Cross-instrument stricter rows are what we
// want surfaced: a jurisdiction whose comparable limit was missed. Cross-basis flags are informational.
function auditScan(sub, analyte, binding, bindingPage) {
  if (!sub.audit_scope) return []
  const rx = new RegExp(sub.audit_scope, "i")
  const exclB = sub.audit_exclude_basis ? new RegExp(sub.audit_exclude_basis, "i") : null
  const exclS = sub.audit_exclude_scope ? new RegExp(sub.audit_exclude_scope, "i") : null
  const out = []
  for (const r of register) {
    if (analyteOf(r.metal_species) !== analyte) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) continue
    if (bindingPage && r.regulation_page === bindingPage) continue // same instrument: deliberate form choice
    if (!rx.test(r.product_scope || "")) continue
    if (exclB && exclB.test(r.basis || "")) continue     // different material-form / basis sub-category
    if (exclS && exclS.test(r.product_scope || "")) continue // different product form (clay, finger paint)
    const v = num(r.value_ug_kg)
    if (v == null) continue
    if (binding != null && v < binding * 0.9999) {
      out.push({ id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, basis: r.basis, scope: r.product_scope })
    }
  }
  return out
}

function resolveCell(sub, analyte) {
  const spec = (sub.cells || {})[analyte]
  if (!spec) return { type: "unspecified", value: null, error: "no config for this cell" }

  if (spec.not_material) {
    return { type: "not_material", value: null, rationale: spec.not_material.rationale || spec.not_material, reference_method: spec.not_material.reference_method || null, bounded_by: spec.not_material.bounded_by || null }
  }
  if (spec.control) {
    // A screened analyte with a mandatory reference method but no published numeric limit, because no
    // sovereign total-content/migration row exists in the row's basis for it. NOT not-material: the
    // analyte is measured and reflexes to a speciated cell (e.g. total-Cr screen -> reflex Cr-VI).
    return { type: "control", value: null, rationale: spec.control.rationale || spec.control, reference_method: spec.control.reference_method || null, reflex: spec.control.reflex || null }
  }
  if (spec.special) {
    return { type: "special", value: spec.special.value, unit: spec.special.unit, basis: spec.special.basis, jurisdiction: spec.special.jurisdiction, source_page: spec.special.source_page, label: spec.special.label, companion: resolveCompanion(spec) }
  }
  if (spec.read_across) {
    const src = byId.get(spec.read_across.source_id)
    if (!src) return { type: "gap", value: null, error: `read_across source_id ${spec.read_across.source_id} not in register` }
    const v = num(src.value_ug_kg)
    const nd = /not detectable|non[- ]?detect|<\s*LOD/i.test(src.notes || "") || undefined
    return { type: "read_across", value: roundDisplay(v), value_exact: v, source_id: spec.read_across.source_id, source_jurisdiction: src.jurisdiction, basis: spec.basis_label || src.basis, label: spec.read_across.label || `read-across from ${src.jurisdiction}`, not_detectable: nd, companion: resolveCompanion(spec) }
  }
  if (spec.gov_ids) {
    const r = resolveIds(spec.gov_ids, analyte)
    if (r.error) return { type: "gap", value: null, error: r.error }
    const stricter = auditScan(sub, analyte, r.value, r.binding_page)
    return {
      type: "gov", value: roundDisplay(r.value), value_exact: r.value, binding_jurisdiction: r.binding_jurisdiction,
      binding_id: r.binding_id, basis: spec.basis_label || r.basis, not_detectable: r.not_detectable,
      candidates: r.candidates, stricter_unselected: stricter, companion: resolveCompanion(spec),
    }
  }
  return { type: "gap", value: null, error: "unrecognised cell spec" }
}

function resolveCompanion(spec) {
  if (!spec.companion) return undefined
  const out = []
  for (const c of spec.companion) {
    const r = resolveIds(c.gov_ids, c.label)
    if (r.error) { out.push({ error: r.error, label: c.label }); continue }
    out.push({ value: roundDisplay(r.value), value_exact: r.value, binding_jurisdiction: r.binding_jurisdiction, binding_id: r.binding_id, basis: c.basis_label || r.basis, label: c.label, not_detectable: r.not_detectable })
  }
  return out
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
let anyDefect = false
const unresolved = []
for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { console.error(`!! no config for ${slug}`); continue }
  const cells = {}
  for (const a of PANEL) cells[a] = resolveCell(sub, a)
  for (const a of PANEL) { const c = cells[a]; if (c.error || c.type === "gap" || c.type === "unspecified") unresolved.push(`${slug}/${a}: ${c.error || c.type}`) }
  const record = {
    slug, name: sub.name, category: 9, category_name: "Infant and Child Contact Products (Ages 0-5)",
    governing_basis: sub.governing_basis, native_basis_label: sub.native_basis_label, scope_note: sub.scope_note || null, cells,
    generated_from: "data/evidence/regulatory_limits.csv", config: path.relative(REPO, CONFIG_PATH),
    method: "HMTc Method v2.0 (government-limit default, contact-product basis; no cross-basis min)",
  }
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}`)
    console.log(`    governing basis: ${sub.governing_basis}`)
    for (const a of PANEL) {
      const c = cells[a]
      let v = c.value == null ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "ctrl" : c.type === "gap" ? "GAP" : c.type === "unspecified" ? "—" : "?") : String(c.value)
      if (c.not_detectable) v = `ND<${v}`
      if (c.type === "special") v = `${c.value} ${c.unit || ""}`
      const src = c.type === "gov" ? c.binding_jurisdiction : c.type === "read_across" ? `RA ${c.source_jurisdiction}` : c.type === "special" ? c.jurisdiction : c.type
      const comp = c.companion && c.companion.length ? `  [+companion: ${c.companion.map((x) => x.error ? "ERR" : x.value + (x.not_detectable ? "ND" : "")).join(",")}]` : ""
      console.log(`    ${a.padEnd(6)} ${v.padStart(10)}   ${src}${comp}`)
      if (c.error) { console.log(`      !! ${c.error}`); anyDefect = true }
      if (c.stricter_unselected && c.stricter_unselected.length) {
        for (const s of c.stricter_unselected) console.log(`      ?? stricter unselected (${s.jurisdiction}, ${s.basis}): ${s.value} — ${s.id}`)
      }
    }
  }
}
if (!QUIET) console.log(`\nwrote ${slugs.length} record(s) to ${path.relative(REPO, OUTDIR)}/`)
if (unresolved.length || anyDefect) {
  console.error(`\nverify: FAIL — ${unresolved.length} unresolved cell(s):`)
  for (const u of unresolved) console.error(`  - ${u}`)
  process.exit(1)
}
console.log(`verify: OK — every cell resolved to a publishable determination`)
