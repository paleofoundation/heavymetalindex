#!/usr/bin/env node
// Category-35 (Prepared and Packaged Meals) standard COMPILER — HMTc Method v2.0, COMPOSITE form.
//
// Category 35 is a COMPOSITE food category (frozen dinners, boxed meals, ready-to-eat mixed meals;
// soups, broths, stocks; and — provisionally — bone broth). A composite product has no sovereign
// maximum level of its own: no credible government sets a contaminant ML for "prepared meal" or
// "vegetable stock". Its limit is therefore a DISCLOSED READ-ACROSS from the strictest applicable
// sovereign maximum among its PRINCIPAL COMPONENTS — the binding component limit (CLAUDE.md Part 19,
// composite-category method; taxonomy anchor "composite; per-component regulatory anchors apply").
//
// The load-bearing rule, and the reason this is a fork of the cat-9 compiler rather than the cat-1
// compiler: numbers are NEVER occurrence-derived. Every published cell is one of
//   component_read_across  → strictest (min) over a NAMED set of principal-component register rows
//                            (each a real sovereign ML for one component matrix), disclosed with the
//                            full component candidate set and the binding component. Tag: read-across.
//   gov_ids                → a sovereign ML that DIRECTLY regulates the composite form (e.g. the
//                            canned-foods tin ML directly governs canned soup). Strictest (min) over
//                            the named ids. Tag: regulatory-alignment.
//   read_across            → a single named sovereign ML for the nearest analog. Tag: read-across.
//   not_material           → substantiated determination; no number (e.g. Cr-VI reduces to Cr-III in
//                            the food matrix; MeHg with no methylation pathway). Tag: not-material.
//   control                → no credible sovereign ML for any component; total reported, screen only.
//                            Tag: control.
// Allowed provenance tags: regulatory-alignment | read-across | not-material | control | ratchet.
// Retired occurrence tags (literature-baseline, precautionary, feasibility-driven percentile) are
// forbidden here and are not emitted.
//
// Component anchors are restricted to Part 19's CREDIBLE regulators (EU, Codex, FDA, WHO/JECFA,
// FSANZ, Health Canada, UK). A composite read-across taken over a single national outlier would be
// unstable and hard to defend; anchoring to the credible-regulator set keeps every binding component
// a widely-adopted sovereign limit. Component anchors are also filtered for APPLICABILITY: an adult
// prepared meal does not read across from an infant baby-food action level (those meals route to
// Category 1 by the taxonomy boundary rule), so infant/formula-scoped rows are never anchors.
//
// Basis: the composite is assessed on an as-consumed (ready-to-eat / ready-to-drink) basis. Wet-weight
// component MLs (meat, vegetables, fish) are directly comparable and taken at face value. A dry-basis
// component ML (cereal as-sold) applied at face value to a wet meal is CONSERVATIVE (the diluted meal
// is held to the more-concentrated dry number), so no basis conversion is performed — this is the one
// place cat-35 diverges deliberately from cat-1's 8:1 reconstitution, and it errs strict, never loose.
//
// Audit safety-net (verify step): for each component_read_across cell the compiler scans EVERY
// credible-regulator register row matching the subcategory's audit_scope + analyte (minus infant/
// formula and the always-excluded pesticide/feed instruments) and flags any row STRICTER than the
// selected binding that is NOT already in the candidate set — a missed stricter component anchor
// surfaces in the report rather than silently. The compiler exits non-zero if any panel cell fails to
// resolve (a gap) or if the emitted panel is missing a canonical analyte.
//
// Output: one JSON record per subcategory to <outdir>, plus a human-readable derivation report to
// <outdir>/derivation-report.md and stdout.
// Usage: node tools/standards/compile-cat35.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import fs from "node:fs"
import path from "node:path"

// Canonical HMTc panel: eight totals (Pb, Cd, tAs, tHg, Ni, Sn, Al, Cr) + species controls (iAs,
// Cr-VI, MeHg). Kept INLINE — self-contained, matching the origin/main compile-cat9 / compile-cat1
// convention (const PANEL = config.panel) — so this compiler carries no cross-file dependency on the
// unmerged hmtc-analyte-panel.mjs refactor. A config may reorder the panel but not drop a canonical cell.
const FULL_PANEL = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Sn", "Al", "Cr", "Cr-VI"]
const missingCanonicalAnalytes = (panel = []) => FULL_PANEL.filter((a) => !panel.includes(a))

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat35-compiled")
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat35-config.json")
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
import { stampProvenance, CANONICAL_PROVENANCE, TRANSITIONAL_PROVENANCE } from "./lib/provenance.mjs"
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
// Categorically non-contaminant-ML instruments, excluded from every scan (mirrors compile-cat1).
const PESTICIDE = /pesticide|residue level/i
const FEED = /\bfeed\b/i
// Infant/formula-scoped rows are never composite-component anchors: infant/toddler mixed meals route
// to Category 1 by the taxonomy boundary rule, so an adult prepared meal does not borrow their limits.
const INFANT = /infant|baby|toddler|follow.?up|follow.?on|formula|young children|weaning|processed cereal.based food|complementary food|consumed principally by persons under|persons under the age of \d+ month/i

// Credible regulators (CLAUDE.md Part 19). Component anchors and the audit scan are restricted to
// these so every binding component is a widely-adopted sovereign limit, not a single national outlier.
// HK (Cap 132V) admitted 2026-08-17 (Karen ruling): its comprehensive per-commodity metallic-
// contamination schedule supplies the terrestrial-animal-meat mercury ML (50 ug/kg) that anchors the
// bone-broth mercury cell — a commodity the EU/Codex/FSANZ set no mercury ML for.
const CREDIBLE = new Set(["EU", "UK", "CODEX", "international", "US", "AU-NZ", "CA", "HK"])
// canonical order for tie-breaking the binding jurisdiction at an equal strictest value
const JUR_PRIORITY = ["EU", "UK", "CODEX", "international", "US", "CA", "AU-NZ"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }

const register = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel || FULL_PANEL

// analyte a register row supplies, normalised to the HMTc panel (tAs/iAs and tHg/MeHg kept distinct;
// Cr / Cr-total is the total-chromium cell, Cr-VI a distinct species cell).
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (["Pb", "tAs", "iAs", "Cd", "tHg", "MeHg", "Ni", "Al", "Sn"].includes(m)) return m
  if (m === "Cr-VI") return "Cr-VI"
  if (m === "Cr-total" || m === "Cr") return "Cr"
  return null
}

function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

const ndFlag = (r) => /not detectable|non[- ]?detect|<\s*LOD/i.test(r?.notes || "") || undefined

// resolve one register id to a live sovereign value (draft/quarantine gated out).
function resolveId(id) {
  const r = byId.get(id)
  if (!r) return { error: `id ${id} not in register` }
  if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) return { error: `id ${id} is gated (status='${r.status}')` }
  const v = num(r.value_ug_kg)
  if (v == null) return { error: `id ${id} has no numeric value` }
  return { value: v, jurisdiction: r.jurisdiction, basis: r.basis, scope: r.product_scope, page: r.regulation_page, nd: ndFlag(r) }
}

// strictest (min) over a NAMED set of ids that share a comparable basis. Used by gov_ids (direct ML).
function resolveIds(ids) {
  const rows = []
  for (const id of ids) {
    const r = resolveId(id)
    if (r.error) return { error: r.error }
    rows.push({ id, ...r })
  }
  if (!rows.length) return { error: `empty id set` }
  rows.sort((a, b) => (a.value - b.value) || (jurRank(a.jurisdiction) - jurRank(b.jurisdiction)))
  const b = rows[0]
  return {
    value: b.value, binding_id: b.id, binding_jurisdiction: b.jurisdiction, basis: b.basis, binding_page: b.page,
    not_detectable: b.nd, candidates: rows.map((r) => ({ id: r.id, value: roundDisplay(r.value), jurisdiction: r.jurisdiction })),
  }
}

// COMPOSITE: strictest (min) over a set of principal-component register rows, each a real sovereign ML
// for one component matrix. Returns the binding component and the full component candidate set for
// disclosure — this is the "strictest applicable sovereign maximum among its principal components".
function resolveComponents(components) {
  const rows = []
  for (const c of components) {
    const r = resolveId(c.source_id)
    if (r.error) return { error: r.error }
    rows.push({ component: c.component, ...r, source_id: c.source_id })
  }
  if (!rows.length) return { error: `no components` }
  rows.sort((a, b) => (a.value - b.value) || (jurRank(a.jurisdiction) - jurRank(b.jurisdiction)))
  const b = rows[0]
  return {
    value: b.value, binding_component: b.component, binding_id: b.source_id, binding_jurisdiction: b.jurisdiction,
    binding_basis: b.basis, binding_page: b.page, not_detectable: b.nd,
    components: rows.map((r) => ({ component: r.component, source_id: r.source_id, value: roundDisplay(r.value), jurisdiction: r.jurisdiction, basis: r.basis })),
  }
}

// audit safety-net: any CREDIBLE-regulator register row matching the subcategory's audit_scope +
// analyte that is STRICTER than the binding and is NOT one of the named component/gov ids — a missed
// stricter component anchor. Infant/formula, pesticide and feed instruments are excluded (never
// composite-component anchors). Informational: flags in the report, does not itself fail the build.
function auditScan(sub, analyte, binding, selectedIds) {
  if (!sub.audit_scope || binding == null) return []
  const rx = new RegExp(sub.audit_scope, "i")
  const exclScope = sub.audit_exclude_scope ? new RegExp(sub.audit_exclude_scope, "i") : null
  const sel = new Set(selectedIds)
  const out = []
  for (const r of register) {
    if (analyteOf(r.metal_species) !== analyte) continue
    if (!CREDIBLE.has(r.jurisdiction)) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status) || PESTICIDE.test(r.status)) continue
    if (FEED.test(r.basis || "")) continue
    if (INFANT.test(r.product_scope || "") || INFANT.test(r.regulation_page || "")) continue
    if (sel.has(r.regulatory_limit_id)) continue
    if (!rx.test(r.product_scope || "")) continue
    if (exclScope && exclScope.test(r.product_scope || "")) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    if (v < binding * 0.9999) {
      out.push({ id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, scope: (r.product_scope || "").slice(0, 48) })
    }
  }
  return out
}

function resolveCell(sub, analyte) {
  const spec = (sub.cells || {})[analyte]
  if (!spec) return { type: "unspecified", value: null, error: "no config for this cell" }

  if (spec.not_material) {
    // Propagate the not-material substantiation contract (CLAUDE.md Part 18 build-blocking gate,
    // tools/evidence/audit-not-material-substantiation.mjs): every not_material row must name a
    // basis_class from the gate's CLASS_VOCAB plus a regulatory_basis and jurisdictions_checked.
    // Authored at the source (config), propagated here — no engine default (the 2309a923d rule).
    return { type: "not_material", value: null, provenance: "not-material", rationale: spec.not_material.rationale || spec.not_material,
      reference_method: spec.not_material.reference_method || null, bounded_by: spec.not_material.bounded_by || null, substantiation: spec.not_material.substantiation || null,
      basis_class: spec.not_material.basis_class || "", regulatory_basis: spec.not_material.regulatory_basis || "", jurisdictions_checked: spec.not_material.jurisdictions_checked || "" }
  }
  if (spec.control) {
    return { type: "control", value: null, provenance: "control", rationale: spec.control.rationale || spec.control,
      reference_method: spec.control.reference_method || null, bounded_by: spec.control.bounded_by || null, companion_ml: spec.control.companion_ml || null }
  }
  if (spec.gov_ids) {
    const r = resolveIds(spec.gov_ids)
    if (r.error) return { type: "gap", value: null, error: r.error }
    const stricter = auditScan(sub, analyte, r.value, spec.gov_ids)
    return { type: "gov", value: roundDisplay(r.value), value_exact: r.value, provenance: "regulatory-alignment",
      binding_jurisdiction: r.binding_jurisdiction, binding_id: r.binding_id, basis: spec.basis_label || r.basis,
      not_detectable: r.not_detectable, candidates: r.candidates, stricter_unselected: stricter,
      label: spec.label || null, substantiation: spec.substantiation || null }
  }
  if (spec.read_across) {
    const r = resolveId(spec.read_across.source_id)
    if (r.error) return { type: "gap", value: null, error: r.error }
    const stricter = auditScan(sub, analyte, r.value, [spec.read_across.source_id])
    return { type: "read_across", value: roundDisplay(r.value), value_exact: r.value, provenance: "read-across",
      source_id: spec.read_across.source_id, source_jurisdiction: r.jurisdiction, basis: spec.basis_label || r.basis,
      not_detectable: r.nd, label: spec.read_across.label || `read-across from ${r.jurisdiction}`,
      stricter_unselected: stricter, substantiation: spec.read_across.substantiation || null }
  }
  if (spec.component_read_across) {
    const cra = spec.component_read_across
    const r = resolveComponents(cra.components)
    if (r.error) return { type: "gap", value: null, error: r.error }
    const stricter = auditScan(sub, analyte, r.value, cra.components.map((c) => c.source_id))
    return { type: "read_across", value: roundDisplay(r.value), value_exact: r.value, provenance: "read-across",
      binding_component: r.binding_component, binding_id: r.binding_id, binding_jurisdiction: r.binding_jurisdiction,
      basis: cra.basis_label || r.binding_basis, not_detectable: r.not_detectable, components: r.components,
      label: cra.label || `strictest applicable component ML (${r.binding_component}, ${r.binding_jurisdiction})`,
      stricter_unselected: stricter, substantiation: cra.substantiation || null }
  }
  return { type: "gap", value: null, error: "unrecognised cell spec" }
}

// --- mercury speciation reconciliation (MeHg is a component of tHg; MeHg <= tHg by identity) --------
// Ported from compile-cat1: a separate MeHg ceiling is meaningful only when strictly below the binding
// tHg. Where MeHg is configured not_material/bounded and tHg carries a number, the not_material record
// already states the bound; nothing to reconcile. Where both carry numbers and MeHg >= tHg, MeHg is
// subsumed. Current cat-35 cells configure MeHg as not_material bounded by tHg, so this is a guard.
function reconcileMercurySpeciation(cells) {
  const t = cells.tHg, m = cells.MeHg
  if (!t || !m) return
  const tv = typeof t.value_exact === "number" ? t.value_exact : typeof t.value === "number" ? t.value : null
  const mv = typeof m.value_exact === "number" ? m.value_exact : typeof m.value === "number" ? m.value : null
  if (tv == null || mv == null) return
  if (mv >= tv) {
    cells.MeHg = { type: "subsumed", value: null, provenance: "not-material", subsumed_by: "tHg", binding_tHg: t.value,
      label: `Methylmercury is a component of total mercury (MeHg <= tHg). No credible sovereign sets a methylmercury limit for this composite below the binding total-mercury ceiling (${t.value} ug/kg), so methylmercury is governed by and bounded by the total-mercury ceiling; no separate methylmercury ceiling is published.`,
      candidate: { type: m.type, value: m.value } }
  }
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
let anyDefect = false
const reportBlocks = []
const provTag = (c) => c.provenance || (c.type === "gov" ? "regulatory-alignment" : c.type === "read_across" ? "read-across" : c.type === "not_material" || c.type === "subsumed" ? "not-material" : c.type === "control" ? "control" : "—")

for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { console.error(`!! no config for ${slug}`); continue }
  const cells = {}
  for (const a of PANEL) cells[a] = resolveCell(sub, a)
  reconcileMercurySpeciation(cells)
  stampProvenance(cells, sub) // one provenance vocabulary (lib/provenance.mjs, Phase A5)

  const missing = missingCanonicalAnalytes(PANEL)
  if (missing.length) { console.error(`!! panel missing canonical analytes: ${missing.join(", ")}`); anyDefect = true }

  const record = {
    slug, name: sub.name, category: 35, category_name: "Prepared and Packaged Meals",
    anchor: "composite; per-component regulatory anchors apply",
    provisional_scaffold: !!sub.provisional_scaffold,
    cross_reference: sub.cross_reference || null,
    native_basis: sub.native_basis, native_basis_label: sub.native_basis_label, scope_note: sub.scope_note || null,
    method: "HMTc Method v2.0 (government-limit default; COMPOSITE — disclosed read-across from strictest applicable principal-component sovereign ML; never occurrence-derived)",
    provenance_tags_allowed: [...CANONICAL_PROVENANCE, ...TRANSITIONAL_PROVENANCE],
    cells, generated_from: "data/evidence/regulatory_limits.csv", config: path.relative(REPO, CONFIG_PATH),
    version: config.version || null, generated_at_note: "run date recorded in git commit; Date.now() intentionally not embedded",
  }
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))

  // report block
  const lines = []
  lines.push(`### ${slug} — ${sub.name}${sub.provisional_scaffold ? "  (PROVISIONAL SCAFFOLD)" : ""}`)
  lines.push(`- native basis: ${sub.native_basis_label}`)
  if (sub.cross_reference) lines.push(`- cross-reference: ${sub.cross_reference}`)
  lines.push("")
  lines.push(`| analyte | value (µg/kg) | provenance | binding source | component logic |`)
  lines.push(`|---|---|---|---|---|`)
  for (const a of PANEL) {
    const c = cells[a]
    let v = c.value == null ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "control" : c.type === "subsumed" ? "subsumed" : c.type === "gap" ? "**GAP**" : "—") : String(c.value)
    if (c.not_detectable) v = `ND<${v}`
    const bind = c.type === "read_across" && c.binding_component ? `${c.binding_id} (${c.binding_jurisdiction})`
      : c.type === "gov" ? `${c.binding_id} (${c.binding_jurisdiction})`
      : c.type === "read_across" ? `${c.source_id} (${c.source_jurisdiction})`
      : c.bounded_by ? `bounded by ${c.bounded_by}` : (c.subsumed_by ? `subsumed by ${c.subsumed_by}` : "—")
    const comp = c.components ? c.components.map((x) => `${x.component} ${x.value} [${x.jurisdiction}]`).join("; ")
      : c.rationale ? String(c.rationale).slice(0, 70) : (c.candidates ? c.candidates.map((x) => `${x.value} [${x.jurisdiction}]`).join("; ") : "")
    lines.push(`| ${a} | ${v} | ${provTag(c)} | ${bind} | ${comp} |`)
    if (c.error) { lines.push(`|   | | | **${c.error}** | |`); anyDefect = true }
  }
  // audit + substantiation notes
  const notes = []
  for (const a of PANEL) {
    const c = cells[a]
    if (c.substantiation) notes.push(`  - **${a} substantiation:** ${c.substantiation}`)
    if (c.stricter_unselected && c.stricter_unselected.length)
      for (const s of c.stricter_unselected) notes.push(`  - ?? **${a} stricter-unselected (audit):** ${s.value} µg/kg [${s.jurisdiction}] ${s.id} — "${s.scope}"`)
  }
  if (notes.length) { lines.push(""); lines.push(`**Audit / substantiation notes**`); lines.push(...notes) }
  lines.push("")
  reportBlocks.push(lines.join("\n"))

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}${sub.provisional_scaffold ? "  (PROVISIONAL)" : ""}`)
    for (const a of PANEL) {
      const c = cells[a]
      let v = c.value == null ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "control" : c.type === "subsumed" ? "subsumed" : c.type === "gap" ? "GAP" : "—") : String(c.value)
      if (c.not_detectable) v = `ND<${v}`
      const src = c.type === "read_across" && c.binding_component ? `RA ${c.binding_component}/${c.binding_jurisdiction}`
        : c.type === "gov" ? `gov ${c.binding_jurisdiction}` : c.type === "read_across" ? `RA ${c.source_jurisdiction}` : c.type
      console.log(`    ${a.padEnd(6)} ${v.padStart(9)}   ${provTag(c).padEnd(20)} ${src}`)
      if (c.error) { console.log(`      !! ${c.error}`) }
      if (c.stricter_unselected && c.stricter_unselected.length)
        for (const s of c.stricter_unselected) console.log(`      ?? stricter-unselected ${s.value} [${s.jurisdiction}] ${s.id}`)
    }
  }
}

// derivation report
const header = [
  `# HMTc Category 35 (Prepared and Packaged Meals) — standard derivation report`,
  ``,
  `Method: HMTc Method v2.0, COMPOSITE form. Each cell is a disclosed read-across from the strictest`,
  `applicable sovereign maximum among the subcategory's principal components (or a direct sovereign ML`,
  `on the composite form, a substantiated not-material determination, or a control). Never occurrence-`,
  `derived. Component anchors are restricted to credible regulators (EU, Codex, FDA, WHO/JECFA, FSANZ,`,
  `Health Canada, UK) and filtered for applicability (infant/formula rows are not adult-meal anchors).`,
  ``,
  `Provenance tags: regulatory-alignment | read-across | not-material | control | ratchet.`,
  `STAFF / HMTc content — not public wiki (CLAUDE.md Part 19 firewall). Generated from`,
  `data/evidence/regulatory_limits.csv via tools/standards/compile-cat35.mjs + cat35-config.json.`,
  config.version ? `Version: ${config.version}` : ``,
  ``,
].join("\n")
fs.writeFileSync(path.join(OUTDIR, "derivation-report.md"), header + "\n" + reportBlocks.join("\n") + "\n")

if (!QUIET) console.log(`\nwrote ${slugs.length} record(s) + derivation-report.md to ${path.relative(REPO, OUTDIR)}/`)
if (anyDefect) { console.error("\n!! one or more cells failed to resolve (gap) or the panel is incomplete — fix config/register before publishing"); process.exit(1) }
