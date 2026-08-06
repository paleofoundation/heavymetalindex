#!/usr/bin/env node
// Category-1 (Infant & Child Foods) standard COMPILER — HMTc Method v2.0 final form.
//
// Deterministic: numbers come ONLY from data/evidence/regulatory_limits.csv (the register),
// selected per subcategory by an explicit, auditable config (tools/standards/cat1-config.json).
// No occurrence percentiles (retired). No LLM-authored values. Every emitted number traces to a
// named register row, converted at most once (the 8:1 powder<->prepared ratio), or to a disclosed
// read-across from the nearest government value where no government regulates the exact product.
//
// Method, per (subcategory, analyte):
//   1. Select register rows whose product_scope matches the subcategory (scope_include minus
//      scope_exclude), excluding draft/proposed status and — unless the subcategory is canned —
//      canned/tinplate rows (tin especially migrates from the can; those limits apply to canned
//      product only).
//   2. Split by soy_class where the subcategory carries a formulation split (cow vs soy).
//   3. Convert each row to the subcategory's native basis (as_sold | as_consumed) at 8:1. Where a
//      jurisdiction publishes a row in the product's native form, that row is preferred over a
//      converted one from the same jurisdiction.
//   4. Strictest (min) across jurisdictions is the HMTc limit; the binding jurisdiction is named.
//   5. If NO government row applies, use the configured read-across (a named register row for the
//      nearest analogous product, converted to native basis) or a not-material determination.
//
// Output: one JSON record per subcategory to <outdir>, plus a human-readable derivation report.
//
// Usage: node tools/standards/compile-cat1.mjs [--only=slug1,slug2] [--outdir=path] [--quiet]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat1-compiled")
const QUIET = args.has("quiet")

const PANEL = ["Pb", "iAs", "tHg", "Cd", "Cr", "Ni", "Sn", "Al"]
// Canonical order for naming the binding jurisdiction when two governments tie at the strictest value.
const JUR_PRIORITY = ["EU", "UK", "CODEX", "US", "CA", "AU-NZ", "CN", "IN", "BR", "GSO", "KR", "EC", "MX", "TR", "international"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }
const RECON = 8 // 8:1 powder->prepared (China GB 2762 footnote c; the only govt-legislated ratio)
const DRAFT = /draft|not for implementation|proposed/i
const CANNED = /canned|tinplate|tin-plate|tinned|tin plate/i

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
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat1-config.json")
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))

// --- analyte normalization to the Cat-1 panel ---------------------------------
// The panel's iAs cell uses ONLY inorganic-arsenic rows; total-As (tAs) is a distinct analyte and
// is never folded into iAs. The Cr cell is total chromium (Cr / Cr-total); Cr-VI is handled by the
// reflex-speciation determination, not as a panel number. tHg is total mercury; MeHg is distinct.
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (m === "Pb") return "Pb"
  if (m === "iAs") return "iAs"
  if (m === "tHg") return "tHg"
  if (m === "Cd") return "Cd"
  if (m === "Cr" || m === "Cr-total") return "Cr"
  if (m === "Ni") return "Ni"
  if (m === "Sn") return "Sn"
  if (m === "Al") return "Al"
  return null // tAs, MeHg, Cr-VI, Sb — not panel cells
}

// --- basis conversion ---------------------------------------------------------
// native is the subcategory's basis: 'as_sold' (powder/dry) or 'as_consumed' (liquid/prepared/wet).
// A register row's basis_class is 'as_sold' | 'as_consumed' | '' (blank -> treat as native, no conv).
function convert(value, rowBasisClass, native) {
  const rb = rowBasisClass || native // blank basis_class: assume already native
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

// round to the register's own conventions (2 significant figures for the derivation display,
// but binding value is kept exact for min-selection; only the DISPLAY rounds).
function roundDisplay(x) {
  if (x == null) return null
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// --- per-cell resolution ------------------------------------------------------
function resolveCell(sub, analyte, variant) {
  const inc = sub.scope_include
  const exc = sub.scope_exclude || []
  const rows = register.filter((r) => {
    if (analyteOf(r.metal_species) !== analyte) return false
    if (DRAFT.test(r.status)) return false
    if (!sub.canned && CANNED.test(r.product_scope)) return false
    if (!scopeMatch(r.product_scope, inc, exc)) return false
    if (!soyMatch(r.soy_class, variant)) return false
    return true
  })

  // Group by jurisdiction; prefer a row already in the native basis over a converted one.
  const perJur = new Map()
  for (const r of rows) {
    const raw = num(r.value_ug_kg)
    if (raw == null) continue
    const conv = convert(raw, r.basis_class, sub.native_basis)
    const nativeForm = (r.basis_class || sub.native_basis) === sub.native_basis
    const cand = { value: conv.value, jur: r.jurisdiction, id: r.regulatory_limit_id, published: raw, publishedBasis: r.basis || r.basis_class, note: conv.note, nativeForm, scope: r.product_scope }
    const prev = perJur.get(r.jurisdiction)
    if (!prev) { perJur.set(r.jurisdiction, cand); continue }
    // Prefer native-form; then prefer stricter (min).
    if (cand.nativeForm && !prev.nativeForm) perJur.set(r.jurisdiction, cand)
    else if (cand.nativeForm === prev.nativeForm && cand.value < prev.value) perJur.set(r.jurisdiction, cand)
  }

  const candidates = [...perJur.values()].sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  if (candidates.length) {
    const binding = candidates[0]
    return {
      type: "gov",
      value: roundDisplay(binding.value),
      value_exact: binding.value,
      binding_jurisdiction: binding.jur,
      binding_id: binding.id,
      basis_note: binding.note,
      per_country: Object.fromEntries(candidates.map((c) => [c.jur, { value: roundDisplay(c.value), converted: c.note !== "same basis", id: c.id }])),
    }
  }

  // No government row → read-across or not-material.
  const ra = (sub.read_across || {})[analyte]
  if (ra) {
    if (ra.not_material) {
      return { type: "not_material", value: null, control: ra.control || "not material", reference_method: ra.reference_method || null }
    }
    const src = byId.get(ra.source_id)
    if (!src) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} not in register` }
    const raw = num(src.value_ug_kg)
    const conv = convert(raw, src.basis_class, sub.native_basis)
    return {
      type: "read_across",
      value: roundDisplay(conv.value),
      value_exact: conv.value,
      source_id: ra.source_id,
      source_jurisdiction: src.jurisdiction,
      label: ra.label || `read-across from ${src.jurisdiction}`,
      basis_note: conv.note,
      per_country: {},
    }
  }
  return { type: "gap", value: null, error: "no government ML and no read-across configured" }
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
const summary = []
for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { console.error(`!! no config for ${slug}`); continue }
  const variants = sub.soy_split ? ["cow", "soy"] : sub.rice_split ? ["rice", "non-rice"] : ["both"]
  const record = { slug, name: sub.name, native_basis: sub.native_basis, canned: !!sub.canned, variants: {}, generated_from: "data/evidence/regulatory_limits.csv", method: "HMTc Method v2.0 (government-limit default, 8:1 basis, read-across)" }
  for (const variant of variants) {
    const cells = {}
    for (const a of PANEL) cells[a] = resolveCell(sub, a, variant === "rice" || variant === "non-rice" ? "both" : variant)
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
        const v = c.value == null ? (c.type === "not_material" ? "n/m" : "GAP") : String(c.value)
        const src = c.type === "gov" ? c.binding_jurisdiction : c.type === "read_across" ? `read-across ${c.source_jurisdiction}` : c.type
        console.log(`    ${a.padEnd(5)} ${v.padStart(8)}   ${src}${c.basis_note && c.basis_note !== "same basis" ? " (" + c.basis_note + ")" : ""}`)
      }
    }
  }
}
if (!QUIET) console.log(`\nwrote ${summary.length} record(s) to ${path.relative(REPO, OUTDIR)}/`)
