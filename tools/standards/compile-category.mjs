#!/usr/bin/env node
// Generic government-limit standard COMPILER — HMTc Method v2.0, any category.
//
// This is the category-agnostic generalization of compile-cat35.mjs. Every category-specific fact
// (category number, name, taxonomy anchor, panel, credible-regulator set, basis family) comes from
// the config's `_category` block, so one deterministic compiler serves the remaining HMTc categories
// instead of one near-duplicate compiler per category. The resolution logic is a straight port of the
// audited cat-35 compiler; the only additions are the BASIS GUARD and the SCREEN cell kind, both
// described below.
//
// The load-bearing rule is unchanged: numbers are NEVER occurrence-derived. Every published cell is
//   gov_ids                → strictest (min) over NAMED register ids that DIRECTLY regulate this
//                            product form. Tag: regulatory-alignment.
//   read_across            → one named sovereign ML for the nearest applicable analog, disclosed.
//                            Tag: read-across.
//   component_read_across  → strictest (min) over a NAMED set of principal-component register rows
//                            (composite/multi-material forms), disclosed with the full candidate set
//                            and the binding component. Tag: read-across.
//   baseline_screen        → a testable limit-of-record at a PUBLISHED method's LOQ (analytical_methods.csv)
//                            where no ML, no pathway, no occurrence and no analog exist. Tag: baseline-screen.
//   not_material           → substantiated determination; no number. Must carry basis_class (from the
//                            substantiation gate vocabulary), regulatory_basis and
//                            jurisdictions_checked. Tag: not-material.
//   control                → testing mandatory, no defensible sovereign number for this exact cell
//                            and no supportable near-neighbour read-across. No number is invented.
//                            Tag: control.
// Provenance vocabulary of record: tools/standards/lib/provenance.mjs (regulatory-alignment | read-across |
// subsumed | baseline-screen | ratchet; control and not-material transitional). One source, every compiler.
// The retired occurrence tags (literature-baseline, precautionary, feasibility-selected percentile)
// are forbidden and never emitted.
//
// ADDITION 1 — BASIS GUARD (defensibility, CLAUDE.md Part 19 "never silently mix bases").
// A subcategory may declare `basis_guard`: a regex every named register row's `basis` field must
// match. A dietary wet-weight ML cannot silently anchor an article's material-content limit, and a
// migration (leachate) limit cannot silently anchor a total-content limit. When a named id's basis
// fails the guard the cell resolves to a GAP and the build exits non-zero, so a basis conflation
// cannot ship unnoticed. `basis_guard_note` records why the guard is drawn where it is.
//
// ADDITION 2 — SCREEN cell kind. `screen: true` on a gov_ids/read_across cell records the sovereign
// value but marks it non-protective as a standalone total-element ceiling (total chromium: dominated
// by benign Cr(III), the health-relevant species being Cr(VI)). The cert renderer already understands
// `screen` and excludes it from the firm-limit count.
//
// ADDITION 3 — CITED REGISTER ROWS (`companion_ml`, `companion_ids`). A standard's prose routinely
// quotes numbers it does not adopt: a bounding total, a near-neighbour instrument recorded and
// declined, a companion obligation in another basis, an instrument named only to say why it does not
// apply. Those ids are declared on the cell and resolved against the register, so every number a
// record quotes is traceable to a live register row. They are disclosures, never anchors: they do not
// enter the strictest-of selection, do not affect the published value, and are deliberately exempt
// from the basis guard because sitting in another basis is usually the reason they are cited.
//
// ADDITION 4 — the record now carries the subcategory's `material` and `components` strings. A control
// cell obliges "analysis of every accessible component"; without the component enumeration on the
// record that obligation is unenforceable (the hollow-control failure).
//
// Audit safety-net (verify step): for every numeric cell the compiler scans every credible-regulator
// register row matching the subcategory's audit_scope + analyte AND passing the subcategory's own
// basis_guard, and flags any row STRICTER than the selected binding that is NOT already named — a
// missed stricter anchor surfaces in the report rather than silently. The basis filter is what makes
// the net useful: a cross-basis number is smaller because it measures a different quantity, not
// because it is stricter, and burying a real same-basis miss under dozens of cross-basis false
// positives defeats the check. Exits non-zero on any unresolved panel cell or incomplete panel.
//
// Output: one JSON record per subcategory to <outdir>, plus a derivation report to
// <outdir>/derivation-report.md and stdout.
// Usage: node tools/standards/compile-category.mjs --config=tools/standards/cat11-config.json \
//          [--outdir=data/workbench/standards/cat11-compiled] [--only=slug1,slug2] [--quiet]

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
const CONFIG_PATH = args.get("config")
if (!CONFIG_PATH) { console.error("compile-category: --config=<path> is required"); process.exit(2) }
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
import { stampProvenance, provenanceOf, CANONICAL_PROVENANCE, TRANSITIONAL_PROVENANCE } from "./lib/provenance.mjs"
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
// Categorically non-contaminant-ML instruments, excluded from every scan (mirrors compile-cat1).
const PESTICIDE = /pesticide|residue level/i
const FEED = /\bfeed\b/i
// Infant/formula-scoped rows are never composite-component anchors: infant/toddler mixed meals route
// to Category 1 by the taxonomy boundary rule, so an adult prepared meal does not borrow their limits.
const INFANT = /infant|baby|toddler|follow.?up|follow.?on|formula|young children|weaning|processed cereal.based food/i

// Credible regulators (CLAUDE.md Part 19). Component anchors and the audit scan are restricted to
// these so every binding component is a widely-adopted sovereign limit, not a single national outlier.
// HK (Cap 132V) admitted 2026-08-17 (Karen ruling): its comprehensive per-commodity metallic-
// contamination schedule supplies the terrestrial-animal-meat mercury ML (50 ug/kg) that anchors the
// bone-broth mercury cell — a commodity the EU/Codex/FSANZ set no mercury ML for.
const DEFAULT_CREDIBLE = ["EU", "UK", "CODEX", "international", "US", "AU-NZ", "CA", "HK"]
// canonical order for tie-breaking the binding jurisdiction at an equal strictest value
const DEFAULT_JUR_PRIORITY = ["EU", "UK", "CODEX", "international", "US", "CA", "AU-NZ"]

const register = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel || FULL_PANEL
// Published analytical-method LOQs for BASELINE-SCREEN cells (data/evidence/analytical_methods.csv —
// one row per published standard method × analyte × matrix class × basis; see its README). Never a
// lab's private LOQ. --methods= overrides the path for fixture tests only.
const METHODS_PATH = args.get("methods") || path.join(REPO, "data/evidence/analytical_methods.csv")
const methods = fs.existsSync(METHODS_PATH) ? parseCsv(fs.readFileSync(METHODS_PATH, "utf8")).filter((m) => m.method_id) : []
const methodById = new Map(methods.map((m) => [m.method_id, m]))

// `_category` carries every category-specific fact the record and the report need. A config that
// omits it cannot be compiled — an unlabelled standard record is unciteable.
const CAT = config._category || {}
for (const k of ["number", "name", "anchor"]) {
  if (!CAT[k]) { console.error(`compile-category: config._category.${k} is required`); process.exit(2) }
}
const OUTDIR = args.get("outdir") || path.join(REPO, `data/workbench/standards/cat${CAT.number}-compiled`)
// A category may widen the credible-regulator set (each addition is a governance ruling recorded in
// the config's `credible_note`) but the audit scan and every anchor stay inside it.
const CREDIBLE = new Set(CAT.credible || DEFAULT_CREDIBLE)
const JUR_PRIORITY = CAT.jur_priority || DEFAULT_JUR_PRIORITY
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }
if (CAT.credible && !CAT.credible_note) {
  console.error("compile-category: config._category.credible widens the credible-regulator set and requires credible_note")
  process.exit(2)
}

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
function resolveId(id, guard) {
  const r = byId.get(id)
  if (!r) return { error: `id ${id} not in register` }
  if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) return { error: `id ${id} is gated (status='${r.status}')` }
  const v = num(r.value_ug_kg)
  if (v == null) return { error: `id ${id} has no numeric value` }
  // BASIS GUARD: a named anchor whose register basis falls outside the subcategory's declared basis
  // family is a basis conflation (dietary wet weight vs article material-content vs migration
  // leachate). Fail the cell rather than publish a number in the wrong basis.
  if (guard && !guard.test(`${r.basis || ""} ${r.basis_class || ""}`)) {
    return { error: `id ${id} basis "${r.basis}" fails this row's basis_guard — refusing to mix bases` }
  }
  return { value: v, jurisdiction: r.jurisdiction, basis: r.basis, scope: r.product_scope, page: r.regulation_page, nd: ndFlag(r) }
}

// strictest (min) over a NAMED set of ids that share a comparable basis. Used by gov_ids (direct ML).
function resolveIds(ids, guard) {
  const rows = []
  for (const id of ids) {
    const r = resolveId(id, guard)
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
function resolveComponents(components, guard) {
  const rows = []
  for (const c of components) {
    const r = resolveId(c.source_id, guard)
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
// The scan is BASIS-AWARE. Comparing a strictness across bases is not a comparison at all: an EN 71-3
// element-migration value and a REACH entry-72 after-extraction value are smaller numbers than a
// total-content ceiling because they measure a different quantity, not because they are stricter. A
// basis-blind scan therefore buries a genuinely missed SAME-BASIS anchor under dozens of cross-basis
// false positives, which is the opposite of what a safety net is for. The subcategory's own
// basis_guard — the same regex the anchors themselves must satisfy — is applied to every candidate,
// and each surviving entry records its `basis` so the reader can see what was compared.
function auditScan(sub, analyte, binding, selectedIds) {
  if (!sub.audit_scope || binding == null) return []
  const rx = new RegExp(sub.audit_scope, "i")
  const exclScope = sub.audit_exclude_scope ? new RegExp(sub.audit_exclude_scope, "i") : null
  const guard = sub.basis_guard ? new RegExp(sub.basis_guard, "i") : null
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
    if (guard && !guard.test(`${r.basis || ""} ${r.basis_class || ""}`)) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    if (v < binding * 0.9999) {
      out.push({ id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, basis: r.basis || "", scope: (r.product_scope || "").slice(0, 48) })
    }
  }
  return out
}

// COMPANION / CITED register rows. `companion_ml` (one id) and `companion_ids` (a list) name sovereign
// rows the cell's prose relies on but does NOT take its number from: a bounding total, a near-neighbour
// instrument recorded and declined, a companion obligation in another basis (a migration-into-food SML
// on the food-contact component of a content-basis article), or an instrument named only to say why it
// is inapplicable. They are disclosures, so they are deliberately NOT put through the basis guard —
// being in another basis is frequently the point. They ARE resolved against the register, so that no
// number quoted anywhere in a standard is untraceable, and a missing or gated companion id fails the
// cell exactly as a missing anchor does.
function resolveCompanions(spec) {
  const ids = [...new Set([...(spec.companion_ml ? [spec.companion_ml] : []), ...(spec.companion_ids || [])])]
  if (!ids.length) return { ids: [], rows: [] }
  const rows = []
  for (const id of ids) {
    const r = byId.get(id)
    if (!r) return { error: `companion id ${id} not in register` }
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) return { error: `companion id ${id} is gated (status='${r.status}')` }
    rows.push({ id, value: roundDisplay(num(r.value_ug_kg)), jurisdiction: r.jurisdiction, metal_species: r.metal_species, basis: r.basis, scope: (r.product_scope || "").slice(0, 72) })
  }
  return { ids, rows }
}

function resolveCell(sub, analyte) {
  const spec = (sub.cells || {})[analyte]
  if (!spec) return { type: "unspecified", value: null, error: "no config for this cell" }
  const guard = sub.basis_guard ? new RegExp(sub.basis_guard, "i") : null

  // Cited-but-not-anchoring register rows may be declared at the cell's top level or inside the kind
  // object; both are collected so an author can put the disclosure next to the prose that quotes it.
  const comp = resolveCompanions({
    companion_ml: spec.companion_ml || spec.control?.companion_ml || spec.not_material?.companion_ml || null,
    companion_ids: [spec, spec.control, spec.not_material, spec.read_across, spec.component_read_across]
      .flatMap((s) => (s && s.companion_ids) || []),
  })
  if (comp.error) return { type: "gap", value: null, error: comp.error }
  const cited = { companion_ids: comp.ids.length ? comp.ids : undefined, companions: comp.rows.length ? comp.rows : undefined }

  if (spec.not_material) {
    // Propagate the not-material substantiation contract (CLAUDE.md Part 18 build-blocking gate,
    // tools/evidence/audit-not-material-substantiation.mjs): every not_material row must name a
    // basis_class from the gate's CLASS_VOCAB plus a regulatory_basis and jurisdictions_checked.
    // Authored at the source (config), propagated here — no engine default (the 2309a923d rule).
    return { type: "not_material", value: null, provenance: "not-material", rationale: spec.not_material.rationale || spec.not_material,
      reference_method: spec.not_material.reference_method || null, bounded_by: spec.not_material.bounded_by || null, substantiation: spec.not_material.substantiation || null,
      basis_class: spec.not_material.basis_class || "", regulatory_basis: spec.not_material.regulatory_basis || "", jurisdictions_checked: spec.not_material.jurisdictions_checked || "", ...cited }
  }
  if (spec.subsumed) {
    // A toxic species that is a component of, and bounded by, its parent total (iAs <= tAs, MeHg <= tHg,
    // Cr-VI <= total Cr). Per the 2026-08-25 Certification-Readiness Ruling this is an enforceable
    // limit-of-record (the ceiling is the parent total, enforced by reflex speciation) — NOT an empty
    // cell — so it emits type/provenance "subsumed", which the readiness lint counts as COMPLETE and the
    // cert renderer displays as "bounded by <parent> — reflex speciation". No standalone number.
    const b = spec.subsumed.bounded_by || spec.subsumed.subsumed_by || null
    return { type: "subsumed", value: null, provenance: "subsumed", subsumed_by: b, bounded_by: b,
      rationale: spec.subsumed.rationale || spec.subsumed, reference_method: spec.subsumed.reference_method || null,
      basis_class: spec.subsumed.basis_class || "speciation-bounded", regulatory_basis: spec.subsumed.regulatory_basis || "",
      jurisdictions_checked: spec.subsumed.jurisdictions_checked || "", substantiation: spec.subsumed.substantiation || null, ...cited }
  }
  if (spec.baseline_screen) {
    // BASELINE SCREEN — the Certification-Readiness Ruling's third limit-of-record state: where no
    // government limit, no exposure pathway, no occurrence data and no analogous matrix exist, the cell
    // publishes a testable ceiling at a named PUBLISHED method's limit of quantification ("< LOQ by
    // method X", established at baseline). The LOQ is taken ONLY from analytical_methods.csv; the config
    // must record what was searched (no_ml_checked, no_analog_checked) and why no pathway exists
    // (no_pathway_rationale). Any of those missing is a gap, never a default.
    const bs = spec.baseline_screen
    const m = bs.loq_source_id ? methodById.get(bs.loq_source_id) : null
    if (!bs.loq_source_id) return { type: "gap", value: null, error: "baseline_screen names no loq_source_id" }
    if (!m) return { type: "gap", value: null, error: `baseline_screen loq_source_id ${bs.loq_source_id} not in ${path.relative(REPO, METHODS_PATH)}` }
    if (STATUS_GATE.test(m.status)) return { type: "gap", value: null, error: `method ${bs.loq_source_id} is gated (status='${m.status}')` }
    if ((m.analyte || "").trim() !== analyte) return { type: "gap", value: null, error: `method ${bs.loq_source_id} is validated for ${m.analyte}, not ${analyte}` }
    const loq = num(m.loq_ug_kg)
    if (loq == null) return { type: "gap", value: null, error: `method ${bs.loq_source_id} has no numeric loq_ug_kg` }
    if (guard && !guard.test(`${m.basis || ""} ${m.matrix_class || ""}`)) return { type: "gap", value: null, error: `method ${bs.loq_source_id} basis "${m.basis}" fails this row's basis_guard — refusing to mix bases` }
    for (const k of ["no_ml_checked", "no_analog_checked", "no_pathway_rationale"]) if (!bs[k]) return { type: "gap", value: null, error: `baseline_screen missing ${k}` }
    return { type: "baseline_screen", value: roundDisplay(loq), value_exact: loq, provenance: "baseline-screen",
      reference_method: m.reference_method, loq_source_id: bs.loq_source_id, method_matrix_class: m.matrix_class || null,
      basis: spec.basis_label || m.basis, method_source_doc: m.source_doc || null, method_url: m.url || null,
      no_ml_checked: bs.no_ml_checked, no_analog_checked: bs.no_analog_checked, no_pathway_rationale: bs.no_pathway_rationale,
      label: bs.label || `baseline screen at the ${m.reference_method} limit of quantification (${roundDisplay(loq)} µg/kg): no government limit, no analogous instrument and no exposure pathway for this cell; any quantifiable result fails`, ...cited }
  }
  if (spec.control) {
    return { type: "control", value: null, provenance: "control", rationale: spec.control.rationale || spec.control,
      reference_method: spec.control.reference_method || null, bounded_by: spec.control.bounded_by || null, companion_ml: spec.control.companion_ml || null, ...cited }
  }
  if (spec.gov_ids) {
    const r = resolveIds(spec.gov_ids, guard)
    if (r.error) return { type: "gap", value: null, error: r.error }
    const stricter = auditScan(sub, analyte, r.value, [...spec.gov_ids, ...comp.ids])
    return { type: spec.screen ? "screen" : "gov", screen: spec.screen || undefined,
      screen_note: spec.screen_note || undefined, binding_control: spec.binding_control || undefined,
      value: roundDisplay(r.value), value_exact: r.value, provenance: "regulatory-alignment",
      binding_jurisdiction: r.binding_jurisdiction, binding_id: r.binding_id, basis: spec.basis_label || r.basis,
      binding_page: r.binding_page || null,
      not_detectable: r.not_detectable, candidates: r.candidates, stricter_unselected: stricter,
      label: spec.label || null, substantiation: spec.substantiation || null, ...cited }
  }
  if (spec.read_across) {
    const r = resolveId(spec.read_across.source_id, guard)
    if (r.error) return { type: "gap", value: null, error: r.error }
    const stricter = auditScan(sub, analyte, r.value, [spec.read_across.source_id, ...comp.ids])
    return { type: spec.screen ? "screen" : "read_across", screen: spec.screen || undefined,
      screen_note: spec.screen_note || undefined, binding_control: spec.binding_control || undefined,
      value: roundDisplay(r.value), value_exact: r.value, provenance: "read-across",
      source_id: spec.read_across.source_id, source_jurisdiction: r.jurisdiction, basis: spec.basis_label || r.basis,
      source_page: r.page || null, source_scope: r.scope, not_detectable: r.nd, label: spec.read_across.label || `read-across from ${r.jurisdiction}`,
      stricter_unselected: stricter, substantiation: spec.read_across.substantiation || null, ...cited }
  }
  if (spec.component_read_across) {
    const cra = spec.component_read_across
    const r = resolveComponents(cra.components, guard)
    if (r.error) return { type: "gap", value: null, error: r.error }
    const stricter = auditScan(sub, analyte, r.value, [...cra.components.map((c) => c.source_id), ...comp.ids])
    return { type: "read_across", value: roundDisplay(r.value), value_exact: r.value, provenance: "read-across",
      binding_component: r.binding_component, binding_id: r.binding_id, binding_jurisdiction: r.binding_jurisdiction,
      binding_page: r.binding_page || null,
      basis: cra.basis_label || r.binding_basis, not_detectable: r.not_detectable, components: r.components,
      label: cra.label || `strictest applicable component ML (${r.binding_component}, ${r.binding_jurisdiction})`,
      stricter_unselected: stricter, substantiation: cra.substantiation || null, ...cited }
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
    cells.MeHg = { type: "subsumed", value: null, provenance: "subsumed", subsumed_by: "tHg", bounded_by: "tHg", binding_tHg: t.value,
      label: `Methylmercury is a component of total mercury (MeHg <= tHg). No credible sovereign sets a methylmercury limit for this composite below the binding total-mercury ceiling (${t.value} ug/kg), so methylmercury is governed by and bounded by the total-mercury ceiling; no separate methylmercury ceiling is published.`,
      candidate: { type: m.type, value: m.value } }
  }
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
let anyDefect = false
const reportBlocks = []
const provTag = (c) => provenanceOf(c) || "—"

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
    slug, name: sub.name, category: CAT.number, category_name: CAT.name,
    anchor: CAT.anchor,
    provisional_scaffold: !!sub.provisional_scaffold,
    cross_reference: sub.cross_reference || null,
    native_basis: sub.native_basis, native_basis_label: sub.native_basis_label, scope_note: sub.scope_note || null,
    // The material description and the component-level sampling plan are part of the published
    // obligation, not authoring notes. A control cell that says "analysis of every accessible
    // component" is unenforceable unless the record enumerates what the components are, so both
    // strings travel with the record and appear in the derivation report.
    material: sub.material || null, components: sub.components || null,
    basis_guard: sub.basis_guard || null, basis_guard_note: sub.basis_guard_note || null,
    method: CAT.method_label || "HMTc Method v2.0 (government-limit default; strictest applicable sovereign maximum in the row's native basis, disclosed read-across where the exact cell is unregulated; never occurrence-derived)",
    provenance_tags_allowed: [...CANONICAL_PROVENANCE, ...TRANSITIONAL_PROVENANCE],
    cells, generated_from: "data/evidence/regulatory_limits.csv", config: path.relative(REPO, CONFIG_PATH),
    version: config.version || null, generated_at_note: "run date recorded in git commit; Date.now() intentionally not embedded",
  }
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))

  // report block
  const lines = []
  lines.push(`### ${slug} — ${sub.name}${sub.provisional_scaffold ? "  (PROVISIONAL SCAFFOLD)" : ""}`)
  lines.push(`- native basis: ${sub.native_basis_label}`)
  if (sub.material) lines.push(`- material: ${sub.material}`)
  if (sub.components) lines.push(`- component-level sampling plan: ${sub.components}`)
  if (sub.cross_reference) lines.push(`- cross-reference: ${sub.cross_reference}`)
  lines.push("")
  lines.push(`| analyte | value (µg/kg) | provenance | binding source | component logic |`)
  lines.push(`|---|---|---|---|---|`)
  for (const a of PANEL) {
    const c = cells[a]
    let v = c.value == null ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "control" : c.type === "subsumed" ? "subsumed" : c.type === "gap" ? "**GAP**" : "—") : (c.type === "screen" ? `screen ${c.value}` : c.type === "baseline_screen" ? `<LOQ ${c.value}` : String(c.value))
    if (c.not_detectable) v = `ND<${v}`
    const bind = c.type === "baseline_screen" ? `${c.reference_method} LOQ (${c.loq_source_id})`
      : c.type === "read_across" && c.binding_component ? `${c.binding_id} (${c.binding_jurisdiction})`
      : (c.type === "gov" || c.type === "screen") ? `${c.binding_id || c.source_id} (${c.binding_jurisdiction || c.source_jurisdiction})`
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
    if (c.companions && c.companions.length)
      for (const k of c.companions) notes.push(`  - **${a} cited register row (disclosure — not this cell's anchor):** ${k.id} — ${k.value} µg/kg [${k.jurisdiction}] ${k.metal_species}, basis "${k.basis}", scope "${k.scope}"`)
    if (c.stricter_unselected && c.stricter_unselected.length)
      for (const s of c.stricter_unselected) notes.push(`  - ?? **${a} stricter-unselected (same-basis audit):** ${s.value} µg/kg [${s.jurisdiction}] ${s.id} — basis "${s.basis || "?"}", scope "${s.scope}"`)
  }
  if (notes.length) { lines.push(""); lines.push(`**Audit / substantiation notes**`); lines.push(...notes) }
  lines.push("")
  reportBlocks.push(lines.join("\n"))

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}${sub.provisional_scaffold ? "  (PROVISIONAL)" : ""}`)
    for (const a of PANEL) {
      const c = cells[a]
      let v = c.value == null ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "control" : c.type === "subsumed" ? "subsumed" : c.type === "gap" ? "GAP" : "—") : (c.type === "screen" ? `screen ${c.value}` : c.type === "baseline_screen" ? `<LOQ ${c.value}` : String(c.value))
      if (c.not_detectable) v = `ND<${v}`
      const src = c.type === "baseline_screen" ? `baseline ${c.reference_method}` : c.type === "read_across" && c.binding_component ? `RA ${c.binding_component}/${c.binding_jurisdiction}`
        : c.type === "gov" ? `gov ${c.binding_jurisdiction}` : c.type === "screen" ? `screen ${c.binding_jurisdiction || c.source_jurisdiction}` : c.type === "read_across" ? `RA ${c.source_jurisdiction}` : c.type
      console.log(`    ${a.padEnd(6)} ${v.padStart(9)}   ${provTag(c).padEnd(20)} ${src}`)
      if (c.error) { console.log(`      !! ${c.error}`) }
      if (c.stricter_unselected && c.stricter_unselected.length)
        for (const s of c.stricter_unselected) console.log(`      ?? stricter-unselected ${s.value} [${s.jurisdiction}] ${s.id}`)
    }
  }
}

// derivation report
const header = [
  `# HMTc Category ${CAT.number} (${CAT.name}) — standard derivation report`,
  ``,
  `Method: HMTc Method v2.0 — government-limit default. Every cell is the strictest applicable sovereign`,
  `maximum for this exact product form in its native basis, a disclosed read-across where the exact cell`,
  `is unregulated, a substantiated not-material determination, or a control. No cell is occurrence-derived.`,
  CAT.method_note || ``,
  ``,
  `Native basis family: ${CAT.basis_family || "declared per subcategory"}.`,
  `Credible-regulator set: ${[...CREDIBLE].join(", ")}.`,
  CAT.credible_note ? `Credible-set note: ${CAT.credible_note}` : ``,
  ``,
  `Provenance tags (lib/provenance.mjs): ${CANONICAL_PROVENANCE.join(" | ")}; transitional ${TRANSITIONAL_PROVENANCE.join(" | ")}.`,
  `STAFF / HMTc content — not public wiki (CLAUDE.md Part 19 firewall). Generated from`,
  `data/evidence/regulatory_limits.csv via tools/standards/compile-category.mjs + ${path.basename(CONFIG_PATH)}.`,
  config.version ? `Version: ${config.version}` : ``,
  ``,
].filter((l) => l !== ``).join("\n")
fs.writeFileSync(path.join(OUTDIR, "derivation-report.md"), header + "\n" + reportBlocks.join("\n") + "\n")

if (!QUIET) console.log(`\nwrote ${slugs.length} record(s) + derivation-report.md to ${path.relative(REPO, OUTDIR)}/`)
if (anyDefect) { console.error("\n!! one or more cells failed to resolve (gap) or the panel is incomplete — fix config/register before publishing"); process.exit(1) }
