#!/usr/bin/env node
// Category-24 (Dairy and Milk Products) standard COMPILER — HMTc Method v2.0, government-limit-only.
//
// derive -> audit -> verify, deterministic. Numbers come ONLY from data/evidence/regulatory_limits.csv
// (the sovereign register), selected per (subcategory, analyte) by an explicit, auditable config
// (tools/standards/cat24-config.json). No occurrence percentiles. No LLM-authored values. Every emitted
// number traces to a named register row.
//
// WHY THIS IS NOT compile-cat1.mjs (the fork rationale):
//   1. NO reconstitution. Cat 1 (infant formula) has a single legislated 8:1 powder<->prepared ratio;
//      DAIRY HAS NONE. Liquid milk, milk powder, condensed milk, and butterfat are distinct product
//      forms, not reconstitutions of one another. This compiler therefore takes every register row at
//      FACE VALUE in its native basis and never converts. Product forms are separated by SCOPE (the
//      reliable signal); the register's basis_class column is NOT used as a filter for liquid subcats
//      because it mis-tags ~102/138 dairy rows (incl. fluid-milk rows) as "as_sold". Concentrated
//      as_sold forms (powders, condensed) additionally drop as_consumed rows via `exclude_as_consumed`
//      so a prepared-basis ML cannot wrongly tighten a concentrate.
//   2. A category-wide `default_read_across` block. Each analyte carries a category default (a gap-only
//      sovereign read-across, or a species/packaging control). A subcategory's own `read_across[analyte]`
//      overrides the default.
//   3. A first-class `control` cell type (provenance tag "control"): an analyte with no numeric standard
//      but a mandatory analytical method + escalation rule (iAs and Cr-VI reflex speciation; MeHg n/m for
//      dairy; Sn packaging-migration on non-canned forms).
//
// Method, per (subcategory, analyte):
//   0. Resolve the effective directive = subcategory read_across[analyte] ?? default_read_across[analyte].
//   1. HARD control (`control_only: true`): emit a control cell; no register lookup. Species-control and
//      packaging-control cells are policy-locked to control regardless of any register row.
//   2. Otherwise select register rows whose product_scope matches the subcategory (scope_include minus
//      scope_exclude), excluding draft/quarantined/pesticide/feed rows and — unless the subcategory is
//      canned — canned/tinplate rows. Take face value. Strictest (min) across jurisdictions binds
//      (regulatory-alignment); the binding jurisdiction and instrument id are named.
//   3. `basis: "gov"` directive: the named register row is a government maximum that DIRECTLY applies to
//      this form (e.g. China milk-powder Cr; EU canned-foods Sn on canned condensed milk). It is folded
//      into the government candidate set; strictest still wins so the ratchet is preserved.
//   4. If NO government row applies: a DISCLOSED read-across (a named register row for the nearest
//      analogous product, taken at face value; provenance "read-across") or a not-material determination.
//
// Allowed provenance tags ONLY: regulatory-alignment, read-across, not-material, control, ratchet.
// (ratchet — occurrence-tightened Tier-1 — is never emitted here; dairy is pure government lookup.)
//
// Outputs (all under data/workbench/standards/cat24-compiled/ — STAFF/HMTc workbench, never wiki/, per
// CLAUDE.md Part 2/19 firewall): one JSON record per subcategory, a human derivation report
// (_cat24-derivation-report.md), and a machine audit (_cat24-audit.json). The audit is a GATE: any FAIL
// exits non-zero.
//
// Usage: node tools/standards/compile-cat24.mjs [--only=slug1,slug2] [--outdir=path] [--quiet] [--no-audit]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat24-compiled")
const QUIET = args.has("quiet")
const RUN_AUDIT = !args.has("no-audit")

// Deterministic derivation date (stamped, not read from the clock, so re-runs are byte-identical).
const DERIVATION_DATE = "2026-08-13"
const METHOD = "HMTc Method v2.0 (government-limit default; no dairy reconstitution; disclosed read-across; species/packaging controls)"

const ALLOWED_PROVENANCE = CANON_ALLOWED // lib/provenance.mjs is the vocabulary of record

// Canonical order for naming the binding jurisdiction when two governments tie at the strictest value.
const JUR_PRIORITY = ["EU", "UK", "CODEX", "US", "CA", "AU-NZ", "CN", "IN", "BR", "GSO", "KR", "EC", "MX", "TR", "MERCOSUR", "international"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }

import { stampProvenance, ALLOWED_PROVENANCE as CANON_ALLOWED } from "./lib/provenance.mjs"
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
// Animal-feed limits (Directive 2002/32/EC and equivalents) are not food MLs — exclude categorically.
const FEED = /\bfeed\b/i
// Pesticide-residue MRLs are a different legal instrument from contaminant maximum levels — exclude.
const PESTICIDE = /pesticide|residue level/i
// Canned/tinplate in the register's several source languages. Tin migrates from the can, so these limits
// govern canned product only. Same guard the cat1/cat3/cat6 compilers use.
const CANNED = /canned|tinplate|tin-plate|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i

// --- register load (quote-aware CSV; identical to the validated cat1/cat3/cat6 parser) -----------------
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

const register = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat24-config.json")
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel
const DEFAULT_RA = config.default_read_across || {}

// --- analyte normalization ----------------------------------------------------------------------------
// tAs is a distinct cell and is never folded into iAs. Cr is total chromium; Cr-VI is a reflex-speciation
// control, not a scanned panel number. tHg is total mercury; MeHg is distinct (and n/m for dairy).
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (m === "Pb") return "Pb"
  if (m === "Cd") return "Cd"
  if (m === "tAs") return "tAs"
  if (m === "iAs") return "iAs"
  if (m === "tHg") return "tHg"
  if (m === "MeHg") return "MeHg"
  if (m === "Ni") return "Ni"
  if (m === "Sn") return "Sn"
  if (m === "Al") return "Al"
  if (m === "Cr" || m === "Cr-total") return "Cr"
  if (m === "Cr-VI" || m === "Cr(VI)") return "Cr-VI"
  return null
}

function scopeMatch(scope, inc, exc) {
  const s = (scope || "").toLowerCase()
  const incOk = inc.some((rx) => new RegExp(rx, "i").test(s))
  const excOk = (exc || []).some((rx) => new RegExp(rx, "i").test(s))
  return incOk && !excOk
}

// Display rounding (2 sig figs by magnitude). Binding value is kept exact for min-selection; only display
// rounds. Every dairy register value is already a round number, so display == exact for this category.
function roundDisplay(x) {
  if (x == null) return null
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// Effective directive for (subcategory, analyte): a subcategory's own read_across[analyte] wins over the
// category default_read_across[analyte].
function directiveFor(sub, analyte) {
  const subRA = (sub.read_across || {})[analyte]
  if (subRA) return subRA
  return DEFAULT_RA[analyte] || null
}

// --- per-cell resolution ------------------------------------------------------------------------------
function resolveCell(sub, analyte) {
  const d = directiveFor(sub, analyte)

  // 0) explicit subsumed spec (harvested from the published standard): a species bounded by its parent total
  if (d && d.subsumed) {
    const parent = d.subsumed.bounded_by || d.subsumed.subsumed_by || null
    return { type: "subsumed", provenance: "subsumed", value: null, subsumed_by: parent, bounded_by: parent, basis_class: d.subsumed.basis_class || "speciation-bounded", rationale: d.subsumed.rationale || `${analyte} is a component of ${parent} and bounded by it` }
  }
  // 1) HARD control — species control (iAs, MeHg, Cr-VI) or packaging control (Sn on non-canned forms),
  //    or a subcategory override that declares the analyte a control (butter Ni/Al/Cr). No register lookup.
  if (d && d.control_only === true) {
    return {
      type: "control", provenance: "control", value: null,
      control: d.control || "not a certification number for this product form",
      rationale: d.rationale || d.control || "not a certification number for this product form",
      reference_method: d.reference_method || null,
      bounded_by: d.bounded_by ?? null,
    }
  }

  // 2) Direct government scope-match (face value, strictest across jurisdictions).
  const inc = sub.scope_include
  const exc = sub.scope_exclude || []
  const rows = register.filter((r) => {
    if (analyteOf(r.metal_species) !== analyte) return false
    if (DRAFT.test(r.status)) return false
    if (QUARANTINE.test(r.status)) return false
    if (PESTICIDE.test(r.status)) return false
    if (FEED.test(r.basis || "")) return false
    if (!sub.canned && CANNED.test(r.product_scope)) return false
    // Concentrated as_sold forms drop prepared-basis (as_consumed) rows so a ready-to-eat ML cannot
    // over-tighten a concentrate. Liquid subcats do NOT filter on basis_class (register mis-tags fluid
    // milk as as_sold); their product form is protected by scope excludes instead.
    if (sub.exclude_as_consumed && r.basis_class === "as_consumed") return false
    if (!scopeMatch(r.product_scope, inc, exc)) return false
    return true
  })

  const perJur = new Map()
  for (const r of rows) {
    const raw = num(r.value_ug_kg)
    if (raw == null) continue
    const cand = { value: raw, jur: r.jurisdiction, id: r.regulatory_limit_id, scope: r.product_scope }
    const prev = perJur.get(r.jurisdiction)
    if (!prev || cand.value < prev.value) perJur.set(r.jurisdiction, cand)
  }
  const govCandidates = [...perJur.values()]

  // 3) basis:"gov" directive — the named row is a government maximum that DIRECTLY applies to this form.
  //    Fold it into the candidate set; strictest still wins (ratchet-preserving). Present as gov.
  let injected = null
  if (d && d.basis === "gov" && d.source_id) {
    const src = byId.get(d.source_id)
    if (!src) return { type: "gap", provenance: null, value: null, error: `basis:gov source_id ${d.source_id} not in register` }
    if (STATUS_GATE.test(src.status || "")) return { type: "gap", provenance: null, value: null, error: `basis:gov source_id ${d.source_id} is gated (${src.status})` }
    const v = num(src.value_ug_kg)
    if (v != null) { injected = { value: v, jur: src.jurisdiction, id: d.source_id, scope: src.product_scope, label: d.label }; govCandidates.push(injected) }
  }

  govCandidates.sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  const direct = govCandidates.length ? govCandidates[0] : null
  const perCountry = Object.fromEntries(
    [...perJur.values()].sort((a, b) => a.value - b.value).map((c) => [c.jur, { value: roundDisplay(c.value), id: c.id }])
  )

  if (direct) {
    const isInjected = injected && direct.id === injected.id
    return {
      type: "gov", provenance: "regulatory-alignment",
      value: roundDisplay(direct.value), value_exact: direct.value,
      binding_jurisdiction: direct.jur, binding_id: direct.id,
      basis_note: isInjected ? (direct.label || "government maximum level by lookup") : "strictest applicable sovereign maximum (face value)",
      per_country: perCountry,
    }
  }

  // 4) No government row — disclosed read-across (gap-filler), or not-material.
  if (d && d.not_material) {
    return { type: "not_material", provenance: "not-material", value: null, control: d.control || "not material", reference_method: d.reference_method || null }
  }
  if (d && d.source_id) {
    const src = byId.get(d.source_id)
    if (!src) return { type: "gap", provenance: null, value: null, error: `read_across source_id ${d.source_id} not in register` }
    if (STATUS_GATE.test(src.status || "")) return { type: "gap", provenance: null, value: null, error: `read_across source_id ${d.source_id} is gated (${src.status})` }
    const v = num(src.value_ug_kg)
    if (v == null) return { type: "gap", provenance: null, value: null, error: `read_across source_id ${d.source_id} has no numeric value` }
    return {
      type: "read_across", provenance: "read-across",
      value: roundDisplay(v), value_exact: v,
      source_id: d.source_id, source_jurisdiction: src.jurisdiction,
      label: d.label || `read-across from ${src.jurisdiction}`,
      basis_note: "nearest sovereign value, face value (disclosed read-across; no government ML for this product form)",
      per_country: {},
    }
  }
  if (d && d.value_ppb != null) {
    const v = num(d.value_ppb)
    return { type: "read_across", provenance: "read-across", value: roundDisplay(v), value_exact: v, source_id: d.source_id || null, source_jurisdiction: d.source_jurisdiction || null, label: d.label || "disclosed cross-source value", basis_note: "disclosed cross-source value (no government ML for this product form)", per_country: {} }
  }
  return { type: "gap", provenance: null, value: null, error: "no government ML, read-across, or control configured" }
}

// --- derive -------------------------------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
const records = []
for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { console.error(`!! no config for ${slug}`); continue }
  const cells = {}
  for (const a of PANEL) cells[a] = resolveCell(sub, a)
  // Certification-readiness ruling: a species (iAs, MeHg, Cr-VI) left as a control or a gap while its parent total is
  // a firm number is bounded by that parent (species <= total); control is transitional (lib/provenance.mjs).
  for (const [sp, tot, spName, totName] of [["iAs", "tAs", "Inorganic arsenic", "total arsenic"], ["MeHg", "tHg", "Methylmercury", "total mercury"], ["Cr-VI", "Cr", "Hexavalent chromium", "total chromium"]]) {
    if (!PANEL.includes(sp)) continue
    const t = cells[tot], c = cells[sp]
    const tv = t && typeof t.value === "number" ? t.value : null
    if (tv == null || !c || !(c.type === "control" || c.type === "gap")) continue
    cells[sp] = { type: "subsumed", provenance: "subsumed", value: null, subsumed_by: tot, bounded_by: tot, binding_total: tv, basis_class: "speciation-bounded",
      rationale: `${spName} is a component of ${totName} (${sp} <= ${tot}). No in-force sovereign sets a separate ${sp} maximum level for this product on its basis, so ${spName.toLowerCase()} is governed by and bounded by the ${totName} ceiling (${tv} ug/kg); no separate ${sp} ceiling is published. ${sp} is speciated whenever ${tot} exceeds its reflex trigger.` }
  }
  stampProvenance(cells, sub) // one provenance vocabulary (lib/provenance.mjs, Phase A5)
  const record = {
    slug, name: sub.name, native_basis: sub.native_basis, canned: !!sub.canned,
    hmtc_category: 24, hmtc_category_name: "Dairy and Milk Products",
    method: METHOD, method_version: "v2.0",
    generated_from: "data/evidence/regulatory_limits.csv",
    config: "tools/standards/cat24-config.json",
    taxonomy: "hmtc-v2 Category 24 (Dairy and Milk Products)",
    derivation_date: DERIVATION_DATE,
    lineage: "Step Zero lock docs/governance/category-24-step0-lock.md (2026-06-08); scaffold tools/autonomy/cat24-26-step0-scaffold.mjs; compiled by tools/standards/compile-cat24.mjs.",
    cells,
  }
  if (sub._cross_reference) record.cross_reference = sub._cross_reference
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2) + "\n")
  records.push(record)

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}  (native: ${sub.native_basis}${sub.canned ? ", canned" : ""})`)
    for (const a of PANEL) {
      const c = cells[a]
      const v = c.value == null ? (c.type === "control" ? "control" : c.type === "not_material" ? "n/m" : "GAP") : String(c.value)
      const src = c.type === "gov" ? c.binding_jurisdiction : c.type === "read_across" ? `read-across ${c.source_jurisdiction}` : c.provenance || c.type
      console.log(`    ${a.padEnd(6)} ${v.padStart(9)}   ${src}`)
    }
  }
}

// --- audit (GATE) -------------------------------------------------------------------------------------
const audit = { category: 24, derivation_date: DERIVATION_DATE, method: METHOD, checks: [], fails: [], warns: [], subcategories: {} }
function fail(slug, analyte, msg) { const e = { slug, analyte, msg }; audit.fails.push(e) }
function warn(slug, analyte, msg) { audit.warns.push({ slug, analyte, msg }) }

const expectedSubcats = only.length ? only : Object.keys(config.subcategories)
for (const slug of expectedSubcats) {
  const rec = records.find((r) => r.slug === slug)
  if (!rec) { fail(slug, "*", "subcategory did not compile"); continue }
  const sc = { gov: 0, read_across: 0, control: 0, not_material: 0, gap: 0 }
  for (const a of PANEL) {
    const c = rec.cells[a]
    if (!c) { fail(slug, a, "missing cell"); continue }
    // provenance vocabulary
    if (c.type === "gap") { fail(slug, a, `GAP: ${c.error || "unresolved cell"}`); sc.gap++; continue }
    if (!ALLOWED_PROVENANCE.has(c.provenance)) { fail(slug, a, `illegal provenance tag "${c.provenance}" (allowed: ${[...ALLOWED_PROVENANCE].join(", ")})`) }
    if (c.provenance === "ratchet") { fail(slug, a, "occurrence-tightened 'ratchet' value on a government-lookup dairy cell — forbidden") }
    if (c.type === "gov") {
      sc.gov++
      const src = byId.get(c.binding_id)
      if (!src) fail(slug, a, `binding_id ${c.binding_id} not in register (untraceable value)`)
      else if (num(src.value_ug_kg) !== c.value_exact) fail(slug, a, `value_exact ${c.value_exact} != register value ${src.value_ug_kg} for ${c.binding_id}`)
      if (!(c.value_exact > 0)) fail(slug, a, `non-positive gov value ${c.value_exact}`)
      if (!c.binding_jurisdiction) fail(slug, a, "gov cell missing binding_jurisdiction")
    } else if (c.type === "read_across") {
      sc.read_across++
      if (c.source_id) { if (!byId.get(c.source_id)) fail(slug, a, `read-across source_id ${c.source_id} not in register`) }
      else if (c.value_ppb == null && c.value_exact == null) fail(slug, a, "read-across cell has neither a register source_id nor a disclosed value")
      if (!(c.value_exact > 0)) fail(slug, a, `non-positive read-across value ${c.value_exact}`)
      if (!c.label) fail(slug, a, "read-across cell missing disclosure label")
    } else if (c.type === "control") {
      sc.control++
      if (!c.control) fail(slug, a, "control cell missing control text")
      if (!c.reference_method) fail(slug, a, "control cell missing reference_method")
      if (c.value !== null) fail(slug, a, `control cell must have null value, got ${c.value}`)
    } else if (c.type === "not_material") {
      sc.not_material++
      if (c.value !== null) fail(slug, a, `not-material cell must have null value, got ${c.value}`)
    }
  }
  audit.subcategories[slug] = sc
}
// category-level completeness
if (!only.length) {
  const want = Object.keys(config.subcategories)
  if (records.length !== want.length) fail("*", "*", `compiled ${records.length}/${want.length} subcategories`)
}
audit.ok = audit.fails.length === 0
audit.summary = {
  subcategories: records.length,
  cells: records.length * PANEL.length,
  gov: Object.values(audit.subcategories).reduce((n, s) => n + s.gov, 0),
  read_across: Object.values(audit.subcategories).reduce((n, s) => n + s.read_across, 0),
  control: Object.values(audit.subcategories).reduce((n, s) => n + s.control, 0),
  not_material: Object.values(audit.subcategories).reduce((n, s) => n + s.not_material, 0),
  fails: audit.fails.length, warns: audit.warns.length,
}

// --- human derivation report --------------------------------------------------------------------------
const md = []
md.push("# Category 24 — Dairy and Milk Products — standards derivation report")
md.push("")
md.push(`_Generated by \`tools/standards/compile-cat24.mjs\` on ${DERIVATION_DATE}. ${METHOD}._`)
md.push("")
md.push("Government-limit-only. Every value is the strictest applicable credible sovereign maximum in the")
md.push("row's native basis, taken at face value from `data/evidence/regulatory_limits.csv`. No dairy")
md.push("reconstitution conversion is applied (dairy has no legislated reconstitution ratio). Species (iAs,")
md.push("Cr-VI), packaging (Sn), and no-pathway (MeHg) cells are analytical controls, not certification")
md.push("numbers. STAFF/HMTc workbench artifact (CLAUDE.md Part 2/19 firewall) — not public wiki content.")
md.push("")
md.push(`**Audit:** ${audit.ok ? "PASS" : "FAIL"} — ${audit.summary.cells} cells across ${audit.summary.subcategories} subcategories · ` +
  `${audit.summary.gov} regulatory-alignment · ${audit.summary.read_across} read-across · ${audit.summary.control} control · ` +
  `${audit.summary.not_material} not-material · ${audit.summary.fails} fails · ${audit.summary.warns} warns.`)
md.push("")
for (const rec of records) {
  md.push(`## ${rec.slug} — ${rec.name}`)
  md.push("")
  md.push(`Native basis: \`${rec.native_basis}\`${rec.canned ? " · canned form" : ""}.${rec.cross_reference ? " " + rec.cross_reference : ""}`)
  md.push("")
  md.push("| Analyte | Value (µg/kg) | Provenance | Binding instrument / control |")
  md.push("|---|---:|---|---|")
  for (const a of PANEL) {
    const c = rec.cells[a]
    let val = c.value == null ? (c.type === "control" ? "control" : c.type === "not_material" ? "n/m" : "GAP") : String(c.value)
    let src = ""
    if (c.type === "gov") src = `${c.binding_jurisdiction} · \`${c.binding_id}\``
    else if (c.type === "read_across") src = `${c.source_jurisdiction} · \`${c.source_id}\` — ${c.label}`
    else if (c.type === "control") src = c.control + (c.bounded_by ? ` (bounded by ${c.bounded_by})` : "")
    else if (c.type === "not_material") src = c.control
    md.push(`| ${a} | ${val} | ${c.provenance || "—"} | ${src.replace(/\|/g, "\\|")} |`)
  }
  md.push("")
}
if (audit.fails.length) {
  md.push("## Audit failures")
  md.push("")
  for (const f of audit.fails) md.push(`- **${f.slug} · ${f.analyte}** — ${f.msg}`)
  md.push("")
}
if (audit.warns.length) {
  md.push("## Audit warnings")
  md.push("")
  for (const w of audit.warns) md.push(`- ${w.slug} · ${w.analyte} — ${w.msg}`)
  md.push("")
}

fs.writeFileSync(path.join(OUTDIR, "_cat24-audit.json"), JSON.stringify(audit, null, 2) + "\n")
fs.writeFileSync(path.join(OUTDIR, "_cat24-derivation-report.md"), md.join("\n"))

if (!QUIET) {
  console.log(`\nwrote ${records.length} record(s) + audit + report to ${path.relative(REPO, OUTDIR)}/`)
  console.log(`audit: ${audit.ok ? "PASS" : "FAIL"}  (${audit.summary.gov} gov · ${audit.summary.read_across} read-across · ${audit.summary.control} control · ${audit.summary.fails} fails · ${audit.summary.warns} warns)`)
}
if (RUN_AUDIT && !audit.ok) {
  console.error("\n!! AUDIT FAILED — see _cat24-audit.json:")
  for (const f of audit.fails) console.error(`   ${f.slug} · ${f.analyte}: ${f.msg}`)
  process.exit(1)
}
