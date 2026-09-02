#!/usr/bin/env node
// Category-28 (Nuts, Seeds, and Their Butters) standard COMPILER — HMTc Method v2.0 (government-limit default).
//
// derive → audit → verify, in one deterministic pass. SELF-CONTAINED: numbers come ONLY from
// data/evidence/regulatory_limits.csv (the sovereign register), selected per subcategory by an
// explicit, auditable config (tools/standards/cat28-config.json). No occurrence percentiles. No
// LLM-authored values. Every emitted number traces to a named register row (regulatory-alignment),
// or to a disclosed read-across from the nearest sovereign value, or is an explicit not-material /
// control determination. The only allowed provenance kinds are: regulatory-alignment (gov),
// read-across, not-material, control (and the derived MeHg<=tHg `subsumed`). Occurrence evidence
// NEVER selects a number here; it is market characterisation only and lives outside this pipeline.
//
// Method, per (subcategory, analyte):
//   1. DERIVE. Select register rows whose product_scope matches the subcategory (scope_include minus
//      scope_exclude) for the analyte species, dropping draft/proposed, quarantined, animal-feed,
//      pesticide-residue, and — unless the subcategory is canned — canned/tinplate rows (tin migrates
//      from the can; those limits govern canned product only). The strictest (min) surviving value is
//      the HMTc limit and its binding jurisdiction is named. Where NO government row applies, fall to
//      the configured read-across (a named sovereign register row for the nearest analogous product),
//      an n/m not-material determination, or a `control` cell (no sovereign numeric maximum; mandatory
//      surveillance). A single legislated basis conversion (8:1 powder<->prepared) is available but
//      OFF for this category (no product here is reconstituted from a powder concentrate).
//   2. AUDIT. For every resolved numeric cell, re-scan the register over the subcategory's broad
//      audit_scope for any same-analyte row from a DIFFERENT instrument that is STRICTER than the
//      binding value, and surface it as `stricter_unselected` so a missed stricter sovereign limit is
//      raised for review rather than silently dropped.
//   3. VERIFY. Validate every cell against the certification contract (resolved type; numeric cells
//      carry a sovereign source id; control/not-material cells carry an explanation AND a reference
//      method; non-numeric species cells are bounded). Any GAP or contract violation exits non-zero,
//      so an unpublishable record can never be written silently.
//
// Output: one JSON record per subcategory to <outdir>, plus a human-readable derivation report.
// Usage: node tools/standards/compile-cat28.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const DEFAULT_OUTDIR = "data/workbench/standards/cat28-compiled"
const DEFAULT_CONFIG = "tools/standards/cat28-config.json"
const OUTDIR = args.get("outdir") || path.join(REPO, DEFAULT_OUTDIR)
const CONFIG_PATH = args.get("config") || path.join(REPO, DEFAULT_CONFIG)
const QUIET = args.has("quiet")

// Canonical HMTc panel: eight totals + the two core species (iAs, Cr-VI) + conditional MeHg.
const FULL_PANEL = ["Pb", "iAs", "tAs", "tHg", "MeHg", "Cd", "Cr-VI", "Ni", "Sn", "Al", "Cr"]
const SPECIES = new Set(["iAs", "Cr-VI", "MeHg"])
// Canonical order for naming the binding jurisdiction when two governments tie at the strictest value.
const JUR_PRIORITY = ["EU", "UK", "CODEX", "US", "CA", "AU-NZ", "CH", "CN", "IN", "BR", "GSO", "MERCOSUR", "TH", "PH", "PY", "IL", "CO", "VN", "SG", "MA", "PA", "KR", "EC", "MX", "TR", "international"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }
const RECON = 8 // 8:1 powder->prepared (China GB 2762 footnote c; the only govt-legislated ratio) — OFF here.
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
// Animal-feed limits (Directive 2002/32/EC and equivalents) carry "feed" in the basis column. They are
// not food MLs; categorically exclude them from food strictest-selection.
const FEED = /\bfeed\b/i
// Pesticide-residue MRLs are a categorically different legal instrument from contaminant maximum
// levels and must never bind a contamination standard.
const PESTICIDE = /pesticide|residue level/i
// Canned/tinplate in the register's several source languages. Tin migrates from the can, so these
// limits govern canned product only.
const CANNED = /canned|tinplate|tin-plate|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i
const POWDER_FORM = /powder|powdered|dry\b|as[- ]sold.*powder/i

// --- register load ------------------------------------------------------------
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
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel || FULL_PANEL

// --- analyte normalization ----------------------------------------------------
// The iAs cell uses ONLY inorganic-arsenic rows; total-As (tAs) is a distinct cell, never folded into
// iAs. Cr is total chromium; Cr-VI is a distinct species cell (reflex speciation, no gov ML in this
// domain). tHg is total mercury; MeHg is distinct (a component of tHg).
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (["Pb", "iAs", "tAs", "tHg", "MeHg", "Cd", "Ni", "Sn", "Al"].includes(m)) return m
  if (m === "Cr-VI") return "Cr-VI"
  if (m === "Cr" || m === "Cr-total") return "Cr"
  return null // Sb and other non-panel species
}

// --- basis conversion (available; OFF for this category) ----------------------
function convert(value, rowBasisClass, native) {
  const rb = rowBasisClass || native
  if (rb === native) return { value, note: "same basis", factor: 1 }
  if (native === "as_sold" && rb === "as_consumed") return { value: value * RECON, note: `×${RECON} as-consumed→as-sold`, factor: RECON }
  if (native === "as_consumed" && rb === "as_sold") return { value: value / RECON, note: `÷${RECON} as-sold→as-consumed`, factor: 1 / RECON }
  return { value, note: "same basis", factor: 1 }
}

function soyMatch(rowSoyClass, variant) {
  const sc = (rowSoyClass || "both").toLowerCase()
  if (variant === "both") return true
  if (variant === "cow") return sc === "both" || sc === "non-soy"
  if (variant === "soy") return sc === "both" || sc === "soy"
  return true
}

function scopeMatch(scope, inc, exc) {
  const s = (scope || "").toLowerCase()
  const incOk = inc.some((rx) => new RegExp(rx, "i").test(s))
  const excOk = (exc || []).some((rx) => new RegExp(rx, "i").test(s))
  return incOk && !excOk
}

function roundDisplay(x) {
  if (x == null) return null
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// --- per-cell DERIVE ----------------------------------------------------------
function resolveCell(sub, analyte, variant) {
  const analyteScope = (sub.analyte_scope && sub.analyte_scope[analyte]) || {}
  const inc = [...sub.scope_include, ...(analyteScope.include || [])]
  const exc = [...(sub.scope_exclude || []), ...(analyteScope.exclude || [])]
  const rows = register.filter((r) => {
    if (analyteOf(r.metal_species) !== analyte) return false
    if (DRAFT.test(r.status)) return false
    if (QUARANTINE.test(r.status)) return false
    if (PESTICIDE.test(r.status)) return false
    if (FEED.test(r.basis || "")) return false
    if (!sub.canned && CANNED.test(r.product_scope)) return false
    if (!scopeMatch(r.product_scope, inc, exc)) return false
    if (!soyMatch(r.soy_class, variant)) return false
    if (sub.exclude_as_consumed && r.basis_class === "as_consumed") return false
    return true
  })

  const perJur = new Map()
  for (const r of rows) {
    const raw = num(r.value_ug_kg)
    if (raw == null) continue
    let conv = { value: raw, note: "face value", factor: 1 }
    if (sub.reconstitution_8to1) {
      const wouldDivide = sub.native_basis === "as_consumed" && (r.basis_class || sub.native_basis) === "as_sold"
      if (!wouldDivide || POWDER_FORM.test(r.product_scope)) conv = convert(raw, r.basis_class, sub.native_basis)
    }
    const nativeForm = (r.basis_class || sub.native_basis) === sub.native_basis
    const cand = { value: conv.value, jur: r.jurisdiction, id: r.regulatory_limit_id, published: raw, publishedBasis: r.basis || r.basis_class, note: conv.note, nativeForm, scope: r.product_scope }
    const prev = perJur.get(r.jurisdiction)
    if (!prev) { perJur.set(r.jurisdiction, cand); continue }
    if (!sub.reconstitution_8to1) { if (cand.value < prev.value) perJur.set(r.jurisdiction, cand) }
    else if (cand.nativeForm && !prev.nativeForm) perJur.set(r.jurisdiction, cand)
    else if (cand.nativeForm === prev.nativeForm && cand.value < prev.value) perJur.set(r.jurisdiction, cand)
  }

  const candidates = [...perJur.values()].sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  const direct = candidates.length ? candidates[0] : null
  const perCountry = Object.fromEntries(candidates.map((c) => [c.jur, { value: roundDisplay(c.value), converted: c.note !== "same basis", id: c.id }]))

  // Read-across is a COMPARATOR, not only a gap-filler: compute it whenever configured, then take the
  // strictest of the direct binding and the read-across (one-way ratchet — a looser direct limit never
  // ratchets the standard back up above a defensible near-neighbour value).
  const ra = (sub.read_across || {})[analyte] || (config.default_read_across || {})[analyte]
  let raResult = null
  if (ra && !ra.not_material && !ra.control_only) {
    // Inline numeric read-across belonged to the retired occurrence/precautionary method. A current
    // numeric read-across must cite a sovereign register row by source_id; otherwise the cell is a gap.
    if (ra.value_ppb != null) {
      return { type: "gap", value: null, error: "inline numeric read-across is retired; cite a sovereign source_id, or configure a not-material / control determination" }
    }
    const src = byId.get(ra.source_id)
    if (!src) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} not in register` }
    const raw = num(src.value_ug_kg)
    if (raw != null) raResult = { value: raw, source_id: ra.source_id, jur: src.jurisdiction, label: ra.label }
  }

  // basis:"gov" override — the borrowed register row is a government maximum level that DIRECTLY applies
  // to this product form; present it as a government-limit cell (regulatory-alignment), authoritatively.
  if (raResult && ra && ra.basis === "gov") {
    return { type: "gov", value: roundDisplay(raResult.value), value_exact: raResult.value, binding_jurisdiction: raResult.jur, binding_id: raResult.source_id, basis_note: ra.label || "government maximum level by lookup", per_country: { [raResult.jur]: { value: roundDisplay(raResult.value), converted: false, id: raResult.source_id } } }
  }

  if (direct && (!raResult || ra.gap_only || direct.value <= raResult.value)) {
    return { type: "gov", value: roundDisplay(direct.value), value_exact: direct.value, binding_jurisdiction: direct.jur, binding_id: direct.id, basis_note: direct.note, per_country: perCountry }
  }
  if (raResult) {
    return { type: "read_across", value: roundDisplay(raResult.value), value_exact: raResult.value, source_id: raResult.source_id, source_jurisdiction: raResult.jur, label: raResult.label || `read-across from ${raResult.jur}`, basis_note: "face value (nearest sovereign value; comparator vs any direct limit)", per_country: perCountry }
  }
  if (ra && ra.not_material) {
    return { type: "not_material", value: null, basis_class: ra.basis_class || null, control: ra.control || ra.rationale || "not material", reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, regulatory_basis: ra.regulatory_basis || null, jurisdictions_checked: ra.jurisdictions_checked || null }
  }
  if (ra && ra.control_only) {
    return { type: "control", value: null, control: ra.control || ra.rationale || "no sovereign numeric maximum; mandatory surveillance control", reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, regulatory_basis: ra.regulatory_basis || null, jurisdictions_checked: ra.jurisdictions_checked || null }
  }
  return { type: "gap", value: null, error: "no government ML and no read-across / not-material / control configured" }
}

// --- AUDIT: stricter-unselected safety-net ------------------------------------
// For a resolved numeric cell, scan the register over the subcategory's broad audit_scope for any
// same-analyte row from a DIFFERENT instrument that is stricter than the binding value. A hit means a
// potentially-missed stricter sovereign limit; surfaced for review, not auto-applied (scope is free text).
function auditScan(sub, analyte, cell) {
  const auditScope = sub.audit_scope
  if (!auditScope) return []
  const rx = new RegExp(auditScope, "i")
  const binding = typeof cell.value_exact === "number" ? cell.value_exact : typeof cell.value === "number" ? cell.value : null
  if (binding == null) return []
  const bindingId = cell.binding_id || cell.source_id || null
  const out = []
  for (const r of register) {
    if (analyteOf(r.metal_species) !== analyte) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status) || PESTICIDE.test(r.status)) continue
    if (FEED.test(r.basis || "")) continue
    if (!sub.canned && CANNED.test(r.product_scope)) continue
    if (r.regulatory_limit_id === bindingId) continue
    if (!rx.test(r.product_scope || "")) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    if (v < binding * 0.9999) {
      out.push({ id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, scope: (r.product_scope || "").slice(0, 60) })
    }
  }
  return out.sort((a, b) => a.value - b.value)
}

// --- mercury speciation reconciliation (MeHg <= tHg by identity) --------------
function reconcileMercurySpeciation(cells) {
  const t = cells.tHg, m = cells.MeHg
  if (!t || !m) return
  const tv = typeof t.value_exact === "number" ? t.value_exact : typeof t.value === "number" ? t.value : null
  const mv = typeof m.value_exact === "number" ? m.value_exact : typeof m.value === "number" ? m.value : null
  if (tv == null || mv == null) return
  if (mv >= tv) {
    cells.MeHg = {
      type: "subsumed", value: null, subsumed_by: "tHg", binding_tHg: t.value,
      binding_tHg_source: t.binding_jurisdiction || t.source_jurisdiction || null,
      label: `Methylmercury is a component of total mercury (MeHg ≤ tHg). No government sets a methylmercury limit for this product below the binding total-mercury ceiling (${t.value} µg/kg), so methylmercury is governed by and bounded by the total-mercury ceiling; no separate methylmercury ceiling is published.`,
      candidate: { type: m.type, value: m.value, source_jurisdiction: m.source_jurisdiction || m.binding_jurisdiction || null, source_id: m.source_id || m.binding_id || null },
    }
  }
}

// --- VERIFY: certification contract -------------------------------------------
function verifyCell(loc, analyte, cell, defects) {
  const RESOLVED = new Set(["gov", "read_across", "not_material", "control", "subsumed"])
  if (!cell || !RESOLVED.has(cell.type)) { defects.push(`${loc}: unresolved cell type ${cell?.type || "missing"}${cell?.error ? " — " + cell.error : ""}`); return }
  const numeric = typeof cell.value_exact === "number" || typeof cell.value === "number"
  const source = cell.binding_id || cell.source_id || null
  if (numeric && !source) defects.push(`${loc}: numeric cell has no sovereign source identifier`)
  if (["control", "not_material"].includes(cell.type)) {
    if (!(cell.control || cell.rationale || cell.label)) defects.push(`${loc}: ${cell.type} determination has no explanation`)
    if (!cell.reference_method) defects.push(`${loc}: ${cell.type} determination has no reference method`)
  }
  if (SPECIES.has(analyte) && !numeric) {
    if (!(cell.bounded_by || cell.subsumed_by || cell.control || cell.rationale || cell.label)) defects.push(`${loc}: non-numeric species cell is not bounded or controlled`)
  }
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
const defects = []
const summary = []
for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { console.error(`!! no config for ${slug}`); defects.push(`${slug}: no config`); continue }
  const variants = sub.soy_split ? ["cow", "soy"] : ["both"]
  const record = {
    slug, name: sub.name, category: config.category, category_name: config.category_name,
    native_basis: sub.native_basis, canned: !!sub.canned, variants: {},
    generated_from: "data/evidence/regulatory_limits.csv", config: path.relative(REPO, CONFIG_PATH),
    method: "HMTc Method v2.0 (government-limit default; regulatory-alignment / read-across / not-material / control)",
    lineage: config.lineage || null,
  }
  for (const variant of variants) {
    const cells = {}
    for (const a of PANEL) cells[a] = resolveCell(sub, a, variant)
    reconcileMercurySpeciation(cells)
    for (const a of PANEL) {
      const c = cells[a]
      if (c.type === "gov" || c.type === "read_across") {
        const s = auditScan(sub, a, c)
        if (s.length) c.stricter_unselected = s
      }
      verifyCell(`Cat ${config.category} ${slug}/${variant}/${a}`, a, c, defects)
    }
    record.variants[variant] = cells
  }
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))
  summary.push(record)

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}  (native: ${sub.native_basis}${sub.soy_split ? ", cow/soy split" : ""})`)
    for (const variant of Object.keys(record.variants)) {
      if (variants.length > 1) console.log(`  [${variant}]`)
      for (const a of PANEL) {
        const c = record.variants[variant][a]
        const v = c.value == null ? (["not_material", "control", "subsumed"].includes(c.type) ? c.type : "GAP") : String(c.value)
        const src = c.type === "gov" ? c.binding_jurisdiction : c.type === "read_across" ? `read-across ${c.source_jurisdiction}` : c.type
        console.log(`    ${a.padEnd(5)} ${v.padStart(9)}   ${src}`)
        if (c.stricter_unselected) for (const s of c.stricter_unselected) console.log(`        ?? stricter unselected (${s.jurisdiction}): ${s.value} — ${s.id} [${s.scope}]`)
      }
    }
  }
}
if (!QUIET) console.log(`\nwrote ${summary.length} record(s) to ${path.relative(REPO, OUTDIR)}/`)

if (defects.length) {
  console.error(`\n!! VERIFY FAILED — ${defects.length} contract violation(s); record(s) written but NOT publishable:`)
  for (const d of defects) console.error(`   ${d}`)
  process.exit(1)
}
if (!QUIET) console.log(`verify: OK — every cell resolved to a publishable determination`)
