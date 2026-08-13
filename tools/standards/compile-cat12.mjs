#!/usr/bin/env node
// Category-12 (Household Cleaning and Dishwashing) standard COMPILER — HMTc Method v2.0,
// consumer-chemical form. Category 12 is NOT a food category and is LARGELY UNREGULATED for
// heavy-metal content. The taxonomy's regulatory anchors (EPA Safer Choice, Green Seal GS-8,
// CA SB 258, NY Household Cleaner Disclosure Act) are ingredient-DISCLOSURE / eco-labeling
// regimes, NOT heavy-metal maximum-level limits. The one credible sovereign that directly sets
// heavy-metal limits on the product class is China GB 14930.1-2022 (food-safety standard for
// detergents that clean food/tableware/food-contact articles).
//
// NATIVE BASIS (every subcategory): total heavy-metal content in the product as placed on the
// market (mg/kg of product). This is GB 14930.1's own basis and the only basis a rinse-off/wipe
// cleaning product can actually be tested in. Food-contact-migration limits (EU 10/2011) are a
// DIFFERENT basis (migration into food from a permanent article), do not apply to a rinse-off
// product, and would yield indefensible (100-1000x over-strict) numbers if conflated onto a
// total-content basis; they are the exposure-pathway rationale for the dish-contacting rows, never
// a numeric ceiling. BASIS IS NEVER CONFLATED: the GB 14930.1 grouped heavy-metals-as-Pb ceiling
// is a grouped-basis sovereign limit carried inline (like the Cat-9 nickel-release limit that does
// not fit the register's ug/kg species schema), applied as a conservative per-species bound; it is
// never min()'d against species-specific read-across values in a different basis.
//
// Resolution kinds, per (subcategory, analyte) — the config assigns each subcategory to one of
// three exposure pathways (food-contact-cleaning, hard-surface-dermal, fifra-antimicrobial) and
// the pathway supplies the cell spec. Provenance tags (the ONLY allowed vocabulary) are
// regulatory-alignment, read-across, not-material, control, ratchet:
//   regulatory_alignment -> gov_ids: strictest (min) over named register rows sharing a basis is
//                           the HMTc limit; tag `regulatory-alignment`. Audit safety-net scans for
//                           a stricter unselected same-scope row from a DIFFERENT instrument.
//   grouped              -> an inline SOVEREIGN grouped ceiling (GB 14930.1 heavy-metals-as-Pb
//                           <=1.0 mg/kg) applied as a conservative per-species bound; tag
//                           `regulatory-alignment` (it is a government limit), grouped basis stated.
//   read_across          -> nearest applicable consumer-chemical sovereign value from a register
//                           row (disclosed); tag `read-across`.
//   not_material         -> substantiated, rebuttable determination; no number; tag `not-material`.
//                           Emitted to data/evidence/standards-not-material.csv (with --emit-
//                           registries) so the not-material substantiation audit tests it.
//   control              -> no sovereign number and no clean read-across analog, but the metal is
//                           present / plausibly present; publishes an analytical method + escalation
//                           rule, NOT a number; tag `control`.
//
// Output: one JSON record per subcategory to <outdir>, plus a human-readable derivation report.
// --emit-registries idempotently refreshes the Category-12 rows in the shared not-material CSV.
// Usage: node tools/standards/compile-cat12.mjs [--only=slug1,slug2] [--outdir=path]
//        [--config=path] [--emit-registries] [--date=YYYY-MM-DD] [--quiet]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat12-compiled")
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat12-config.json")
const EMIT = args.has("emit-registries")
const DATE = args.get("date") || "2026-08-13"
const QUIET = args.has("quiet")

// --- CSV ----------------------------------------------------------------------
function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\n+$/, "").split("\n")
  const head = splitCsvLine(lines[0])
  return lines.slice(1).filter((l) => l.length).map((l) => Object.fromEntries(splitCsvLine(l).map((v, i) => [head[i], v])))
}
function splitCsvLine(line) {
  const out = []; let cur = "", q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch }
  }
  out.push(cur); return out
}
const csvEsc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
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

// analyte a register row supplies, normalised to the Cat-12 panel. Consumer-chemical arsenic and
// mercury are TOTAL element (tAs / tHg); iAs and MeHg have no cleaning-product counterpart (handled
// not-material). Both Cr-total and Cr-VI are panel cells.
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

// resolve a set of register ids to the strictest (min) value; validate each exists and is live.
function resolveIds(ids) {
  const rows = []
  for (const id of ids) {
    const r = byId.get(id)
    if (!r) return { error: `id ${id} not in register` }
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    rows.push({ id, value: v, jur: r.jurisdiction, basis: r.basis, scope: r.product_scope, notes: r.notes, page: r.regulation_page || "" })
  }
  if (!rows.length) return { error: `no live value among [${ids.join(", ")}]` }
  rows.sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  const b = rows[0]
  return { value: b.value, binding_id: b.id, binding_jurisdiction: b.jur, basis: b.basis, binding_page: b.page,
    candidates: rows.map((r) => ({ id: r.id, value: roundDisplay(r.value), jurisdiction: r.jur })) }
}

// audit safety-net: a register row matching the pathway audit_scope + analyte that is stricter than
// the binding AND from a DIFFERENT instrument (regulation_page). Same-instrument stricter rows (e.g.
// GB 14930.1 Type A vs the governing Type B) are a deliberate scope choice, not a missed limit.
// audit_exclude_basis excludes rows in a DIFFERENT (non-comparable) basis: a specific-migration-into-
// food limit (EU 10/2011) is a different measured quantity from total content in a rinse-off product,
// so a stricter migration NUMBER is not a stricter same-basis limit — flagging it would conflate bases
// (the load-bearing rule). Cross-basis rows are dropped here and discussed in the derivation report.
function auditScan(auditScope, excludeBasis, analyte, binding, bindingPage) {
  if (!auditScope || binding == null) return []
  const rx = new RegExp(auditScope, "i")
  const exclB = excludeBasis ? new RegExp(excludeBasis, "i") : null
  const out = []
  for (const r of register) {
    if (analyteOf(r.metal_species) !== analyte) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) continue
    if (bindingPage && r.regulation_page === bindingPage) continue // same instrument: deliberate scope choice
    if (!rx.test(r.product_scope || "")) continue
    if (exclB && (exclB.test(r.basis || "") || exclB.test(r.product_scope || ""))) continue // different, non-comparable basis
    const v = num(r.value_ug_kg)
    if (v == null) continue
    if (v < binding * 0.9999)
      out.push({ id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, basis: r.basis, scope: r.product_scope })
  }
  return out
}

function resolveCell(spec, auditScope) {
  if (!spec) return { type: "unspecified", provenance: null, value: null, error: "no config for this cell" }

  if (spec.not_material) {
    const s = spec.not_material
    return { type: "not_material", provenance: "not-material", value: null, basis_class: s.basis_class,
      bounded_by: s.bounded_by || null, rationale: s.rationale, regulatory_basis: s.regulatory_basis,
      jurisdictions_checked: s.jurisdictions_checked, cross_sourced: s.cross_sourced, reference_method: s.reference_method || null }
  }
  if (spec.control) {
    const s = spec.control
    return { type: "control", provenance: "control", value: null, tier: s.tier,
      reference_method: s.reference_method, escalation_rule: s.escalation_rule, rationale: s.rationale }
  }
  if (spec.grouped) {
    const s = spec.grouped
    return { type: "grouped", provenance: "regulatory-alignment", value: roundDisplay(s.value_ug_kg), value_exact: s.value_ug_kg,
      unit: s.unit, basis: s.basis_label, binding_jurisdiction: s.jurisdiction, source_page: s.source_page, label: s.label,
      grouped: true }
  }
  if (spec.read_across) {
    const s = spec.read_across
    const src = byId.get(s.source_id)
    if (!src) return { type: "gap", provenance: null, value: null, error: `read_across source_id ${s.source_id} not in register` }
    const v = num(src.value_ug_kg)
    if (v == null) return { type: "gap", provenance: null, value: null, error: `read_across source_id ${s.source_id} has no numeric value` }
    return { type: "read_across", provenance: "read-across", value: roundDisplay(v), value_exact: v, source_id: s.source_id,
      source_jurisdiction: src.jurisdiction, basis: s.basis_label || src.basis, label: s.label }
  }
  if (spec.regulatory_alignment) {
    const s = spec.regulatory_alignment
    const r = resolveIds(s.gov_ids)
    if (r.error) return { type: "gap", provenance: null, value: null, error: r.error }
    const stricter = auditScan(auditScope.scope, auditScope.excludeBasis, analyteFromLabel(s), r.value, r.binding_page)
    return { type: "regulatory_alignment", provenance: "regulatory-alignment", value: roundDisplay(r.value), value_exact: r.value,
      binding_jurisdiction: r.binding_jurisdiction, binding_id: r.binding_id, basis: s.basis_label || r.basis,
      candidates: r.candidates, stricter_unselected: stricter, label: s.label }
  }
  return { type: "gap", provenance: null, value: null, error: "unrecognised cell spec" }
}
// regulatory_alignment specs are always the tAs cell in this category; return the analyte for auditScan.
function analyteFromLabel() { return "tAs" }

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
let anyDefect = false
const notMaterialRows = []
for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { console.error(`!! no config for ${slug}`); continue }
  const pw = config.pathways[sub.pathway]
  if (!pw) { console.error(`!! subcategory ${slug} names unknown pathway ${sub.pathway}`); anyDefect = true; continue }
  const cells = {}
  for (const a of PANEL) {
    const c = resolveCell(pw.cells[a], { scope: pw.audit_scope, excludeBasis: pw.audit_exclude_basis })
    cells[a] = c
    if (c.type === "not_material")
      notMaterialRows.push({ row_slug: slug, metal_species: a, basis_class: c.basis_class, bounded_by: c.bounded_by || "",
        rationale: c.rationale, regulatory_basis: c.regulatory_basis, jurisdictions_checked: c.jurisdictions_checked,
        cross_sourced: c.cross_sourced, date: DATE })
  }
  const record = {
    slug, name: sub.name, category: 12, category_name: config.category_name,
    pathway: sub.pathway, governing_basis: pw.governing_basis, native_basis_label: pw.native_basis_label,
    scope_note: sub.scope_note || null, cells,
    generated_from: "data/evidence/regulatory_limits.csv", config: path.relative(REPO, CONFIG_PATH),
    method: config.method, standard_version: config.standard_version || "1.0",
  }
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}  [${sub.pathway}]`)
    for (const a of PANEL) {
      const c = cells[a]
      let v = c.value == null
        ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "control" : c.type === "gap" ? "GAP" : c.type === "unspecified" ? "—" : "?")
        : String(c.value)
      const src = c.type === "regulatory_alignment" ? `reg-align ${c.binding_jurisdiction}`
        : c.type === "grouped" ? `reg-align ${c.binding_jurisdiction} (grouped)`
        : c.type === "read_across" ? `read-across ${c.source_jurisdiction}`
        : c.type === "not_material" ? `not-material (${c.basis_class})`
        : c.type === "control" ? `control (${c.tier})` : c.type
      console.log(`    ${a.padEnd(8)} ${v.padStart(9)}   ${src}`)
      if (c.error) { console.log(`      !! ${c.error}`); anyDefect = true }
      if (c.stricter_unselected && c.stricter_unselected.length)
        for (const s of c.stricter_unselected) console.log(`      ?? stricter unselected (${s.jurisdiction}, ${s.basis}): ${s.value} — ${s.id}`)
    }
  }
}

// --emit-registries: idempotently refresh the Category-12 rows in the shared not-material CSV.
if (EMIT) {
  const nmPath = path.join(REPO, "data/evidence/standards-not-material.csv")
  const cols = ["row_slug", "metal_species", "basis_class", "bounded_by", "rationale", "regulatory_basis", "jurisdictions_checked", "cross_sourced", "date"]
  const cat12Slugs = new Set(Object.keys(config.subcategories))
  const existing = fs.existsSync(nmPath) ? parseCsv(fs.readFileSync(nmPath, "utf8")) : []
  const kept = existing.filter((r) => !cat12Slugs.has(r.row_slug)) // drop stale cat-12 rows (idempotent)
  const merged = [...kept, ...notMaterialRows]
  fs.writeFileSync(nmPath, [cols.join(","), ...merged.map((r) => cols.map((c) => csvEsc(r[c])).join(","))].join("\n") + "\n")
  console.log(`\n[emit-registries] standards-not-material.csv: kept ${kept.length} non-cat12 rows + wrote ${notMaterialRows.length} cat-12 rows = ${merged.length} total`)
}

if (!QUIET) console.log(`\nwrote ${slugs.length} record(s) to ${path.relative(REPO, OUTDIR)}/`)
if (anyDefect) { console.error("\n!! one or more cells failed to resolve — fix config/register before publishing"); process.exit(1) }
