#!/usr/bin/env node
// food-limit-compiler.mjs — shared engine for the lightly-regulated pantry/processed-food
// HMTc standard compilers (Cat 30 Culinary Oils and Fats, Cat 31 Sweeteners and Syrups,
// Cat 32 Condiments/Sauces/Dressings). HMTc Method v2.0 — government-limit default.
//
// This is a fork of the proven Cat-1 food compiler (tools/standards/compile-cat1.mjs),
// with three changes that matter for lightly-regulated categories:
//
//   1. NO reconstitution. None of these products carry a legislated powder<->prepared
//      ratio, so every government ML and read-across is taken at FACE VALUE in the row's
//      native basis. The 8:1 formula path is removed entirely (it is physically invalid
//      for an oil, a syrup, or a sauce).
//
//   2. An AUDIT safety-net (from the Cat-9 contact-product compiler). For every
//      (subcategory, analyte) cell the engine scans EVERY register row matching the
//      subcategory's broad `audit_scope` regex + analyte, and flags any government row
//      that is STRICTER than the selected binding — or ANY government row at all when the
//      cell was resolved as not-material/control. This is the guard the honey-Pb near-miss
//      needed: a cell marked "no government limit" that a government in fact regulates is a
//      DEFECT, surfaced loudly, never shipped silently.
//
//   3. A VERIFY pass with an explicit, closed provenance vocabulary. Every published cell
//      carries exactly one provenance tag from {regulatory-alignment, read-across,
//      not-material, control, ratchet}. A `gap` (no government ML and no configured
//      disposition) is a hard failure: the engine exits non-zero so the build cannot ship
//      an unresolved cell. Occurrence percentiles are never computed anywhere.
//
// Selection method, per (subcategory, analyte):
//   1. Government scope selection: register rows whose product_scope matches the
//      subcategory scope (scope_include minus scope_exclude), excluding draft/proposed,
//      quarantined, pesticide-MRL, animal-feed, and (unless the subcategory is canned)
//      canned/tinplate rows. Strictest (min) across jurisdictions is the candidate; the
//      binding jurisdiction and instrument are named. Every jurisdiction considered is
//      retained in the per-country audit trail.
//   2. If the config declares a per-analyte disposition, it applies where scope selection
//      yields nothing (and, for read-across, is compared as the stricter-of against any
//      direct government value so a loose direct limit can never ratchet a cell UP):
//        read_across  -> a named register row for the nearest analogous government value,
//                        taken at face value and disclosed.
//        control      -> no government ML and a real exposure pathway exists; no number is
//                        published and a reflex screen / monitoring method governs.
//        not_material -> no government ML, no exposure pathway, no source; rebuttable, and
//                        the audit pass tests it against the register every build.
//   3. Mercury reconciliation: methylmercury is a component of total mercury (MeHg <= tHg
//      by identity), so where the MeHg read-across is not strictly below the binding tHg it
//      is subsumed and no separate ceiling is published.
//
// Exported: compileCategory({ configPath, outdir, only, quiet, categoryNumber,
//                             categoryName, version, lineageNote }) -> exit code (0 ok, 1 defect)

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const REGISTER_PATH = path.join(REPO, "data/evidence/regulatory_limits.csv")

// --- register gating patterns (systemic correctness guards, verbatim from Cat-1) ------
import { stampProvenance, ALLOWED_PROVENANCE as CANON_ALLOWED } from "./provenance.mjs"
import { STATUS_GATE } from "./register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
// Pesticide-residue MRLs cap an authorised plant-protection product residue, not the
// background contaminant load; a different legal instrument that must never bind a
// contamination standard.
const PESTICIDE = /pesticide|residue level/i
// Animal-feed limits (Directive 2002/32/EC and equivalents) are not food MLs.
const FEED = /\bfeed\b/i
// Canned/tinplate in the register's several source languages. Tin migrates from the can,
// so these limits govern canned product only; excluded from non-canned subcategories.
const CANNED = /canned|tinplate|tin-plate|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i

// Canonical order for naming the binding jurisdiction when two governments tie at the
// strictest value. Jurisdictions not listed rank last (used only as a tie-break).
const JUR_PRIORITY = ["EU", "UK", "CODEX", "international", "US", "CA", "AU-NZ", "CH", "CN", "IN", "BR", "GSO", "KR", "MERCOSUR", "SG", "IL", "TH", "PY", "MX", "VN", "FJ", "CO", "CL", "MA", "TR", "EC"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }

// The closed provenance vocabulary (CLAUDE.md Part 19). Any cell whose tag is outside this
// set fails the verify pass. `ratchet` is allowed but never emitted at initial compilation
// (it is a post-publication, occurrence-driven tightening tag).
const ALLOWED_TAGS = CANON_ALLOWED // lib/provenance.mjs is the vocabulary of record

// --- CSV --------------------------------------------------------------------------------
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

// --- analyte normalization --------------------------------------------------------------
// The panel's iAs cell uses ONLY inorganic-arsenic rows; total-As (tAs) is a distinct cell.
// The Cr cell is total chromium; Cr-VI is the reflex-speciation control, never bound from a
// register row (no food jurisdiction publishes a Cr-VI food ML). tHg is total mercury;
// MeHg is the methylmercury cell, distinct and reconciled against tHg after resolution.
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (m === "Pb") return "Pb"
  if (m === "iAs") return "iAs"
  if (m === "tAs") return "tAs"
  if (m === "tHg") return "tHg"
  if (m === "MeHg") return "MeHg"
  if (m === "Cd") return "Cd"
  if (m === "Cr" || m === "Cr-total") return "Cr"
  if (m === "Cr-VI") return "Cr-VI"
  if (m === "Ni") return "Ni"
  if (m === "Sn") return "Sn"
  if (m === "Al") return "Al"
  return null
}

function scopeMatch(scope, inc, exc) {
  const s = (scope || "").toLowerCase()
  const incOk = (inc || []).some((rx) => new RegExp(rx, "i").test(s))
  const excOk = (exc || []).some((rx) => new RegExp(rx, "i").test(s))
  return incOk && !excOk
}

// Display rounding. Binding value is kept exact for min-selection; only the display rounds.
function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// --- government scope selection ---------------------------------------------------------
// Returns { candidates, direct } where candidates is every jurisdiction's strictest scope-
// matched row (sorted strictest-first) and direct is the overall strictest.
function selectGov(register, sub, analyte) {
  const analyteScope = (sub.analyte_scope && sub.analyte_scope[analyte]) || {}
  const inc = [...(sub.scope_include || []), ...(analyteScope.include || [])]
  const exc = [...(sub.scope_exclude || []), ...(analyteScope.exclude || [])]
  const rows = register.filter((r) => {
    if (analyteOf(r.metal_species) !== analyte) return false
    if (DRAFT.test(r.status)) return false
    if (QUARANTINE.test(r.status)) return false
    if (PESTICIDE.test(r.status)) return false
    if (FEED.test(r.basis || "")) return false
    if (!sub.canned && CANNED.test(r.product_scope)) return false
    if (!scopeMatch(r.product_scope, inc, exc)) return false
    return true
  })
  const perJur = new Map()
  for (const r of rows) {
    const v = num(r.value_ug_kg)
    if (v == null) continue
    const cand = { value: v, jur: r.jurisdiction, id: r.regulatory_limit_id, scope: r.product_scope, page: r.regulation_page || "", basis: r.basis || r.basis_class || "" }
    const prev = perJur.get(r.jurisdiction)
    if (!prev || cand.value < prev.value) perJur.set(r.jurisdiction, cand)
  }
  const candidates = [...perJur.values()].sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  return { candidates, direct: candidates[0] || null }
}

// --- audit safety-net -------------------------------------------------------------------
// Scan EVERY register row matching the broad audit_scope + analyte. Flag rows stricter than
// the binding (or ANY row when binding is null, i.e. the cell was resolved not-material /
// control). Rows whose scope matches audit_exclude_scope are a different product form and
// are downgraded to informational; everything else matching audit_scope is a same-form
// concern. The binding instrument's own rows are skipped (they are what was selected).
function auditScan(register, sub, analyte, bindingValue, bindingPage, analyteExclude) {
  if (!sub.audit_scope) return { same_form: [], other_form: [] }
  const rx = new RegExp(sub.audit_scope, "i")
  const exclS = sub.audit_exclude_scope ? new RegExp(sub.audit_exclude_scope, "i") : null
  // Scopes the config deliberately excluded for THIS analyte are, by definition, a different
  // product form for this analyte's audit — a sugar total-arsenic ML is not evidence against
  // a rice-syrup total-arsenic control cell. Downgrade them to informational, never a defect.
  const exclA = analyteExclude && analyteExclude.length ? new RegExp(analyteExclude.join("|"), "i") : null
  const same = [], other = []
  for (const r of register) {
    if (analyteOf(r.metal_species) !== analyte) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status) || PESTICIDE.test(r.status)) continue
    if (FEED.test(r.basis || "")) continue
    if (!sub.canned && CANNED.test(r.product_scope)) continue
    if (!rx.test(r.product_scope || "")) continue
    if (bindingPage && r.regulation_page === bindingPage) continue // the selected instrument
    const v = num(r.value_ug_kg)
    if (v == null) continue
    // A cell resolved not-material/control has no numeric binding: any government hit is a
    // concern. A numeric binding: only rows strictly stricter than it are concerns.
    const isConcern = bindingValue == null ? true : v < bindingValue * 0.9999
    if (!isConcern) continue
    const hit = { id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, scope: r.product_scope }
    if ((exclS && exclS.test(r.product_scope || "")) || (exclA && exclA.test(r.product_scope || ""))) other.push(hit)
    else same.push(hit)
  }
  return { same_form: same, other_form: other }
}

// --- per-cell resolution ----------------------------------------------------------------
function resolveCell(register, byId, sub, analyte) {
  const spec = (sub.read_across || {})[analyte] || {}
  const analyteExclude = ((sub.analyte_scope && sub.analyte_scope[analyte]) || {}).exclude || []
  let { candidates, direct } = selectGov(register, sub, analyte)
  // gov_ids: NAMED register ids that DIRECTLY regulate this product (strictest wins). A pin is a
  // sovereign anchor the scope scan cannot reach by keyword (the compile-category contract); every
  // id must resolve to a non-gated row or the cell is a gap (never a silent fallback).
  if (Array.isArray(spec.gov_ids) && spec.gov_ids.length) {
    const pinned = []
    for (const id of spec.gov_ids) {
      const r = byId.get(id)
      if (!r) return { type: "gap", value: null, provenance_tag: null, error: `gov_ids ${id} not in register` }
      if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) return { type: "gap", value: null, provenance_tag: null, error: `gov_ids ${id} is gated (${r.status})` }
      const v = num(r.value_ug_kg); if (v == null) continue
      pinned.push({ value: v, jur: r.jurisdiction, id: r.regulatory_limit_id, scope: r.product_scope, page: r.regulation_page || "", basis: r.basis || r.basis_class || "" })
    }
    const merged = new Map(candidates.map((c) => [c.id, c])); for (const c of pinned) merged.set(c.id, c)
    candidates = [...merged.values()].sort((x, y) => (x.value - y.value) || (jurRank(x.jur) - jurRank(y.jur)))
    direct = candidates[0] || null
  }
  const perCountry = Object.fromEntries(candidates.map((c) => [c.jur, { value: roundDisplay(c.value), id: c.id }]))

  // Read-across as a comparator: compute whenever a source_id is configured, then take the
  // stricter of direct-government and read-across so a loose direct limit cannot ratchet a
  // cell up above the near-neighbour value the program already anchors to.
  let raResult = null
  if (spec.source_id) {
    const src = byId.get(spec.source_id)
    if (!src) return { type: "gap", value: null, provenance_tag: null, error: `read_across source_id ${spec.source_id} not in register` }
    const v = num(src.value_ug_kg)
    if (v != null) raResult = { value: v, source_id: spec.source_id, jur: src.jurisdiction, page: src.regulation_page || "", label: spec.label, scope: src.product_scope, basis: src.basis || src.basis_class || "" }
  }

  // Government direct limit wins when it exists and is at least as strict as any read-across.
  if (direct && (!raResult || direct.value <= raResult.value)) {
    const audit = auditScan(register, sub, analyte, direct.value, direct.page, analyteExclude)
    return {
      type: "gov", provenance_tag: "regulatory-alignment",
      value: roundDisplay(direct.value), value_exact: direct.value,
      binding_jurisdiction: direct.jur, binding_id: direct.id, binding_scope: direct.scope, basis: direct.basis || null,
      binding_instrument: direct.page, per_country: perCountry, audit,
    }
  }
  if (raResult) {
    const audit = auditScan(register, sub, analyte, raResult.value, raResult.page, analyteExclude)
    return {
      type: "read_across", provenance_tag: "read-across",
      value: roundDisplay(raResult.value), value_exact: raResult.value,
      source_id: raResult.source_id, source_jurisdiction: raResult.jur, source_scope: raResult.scope, basis: raResult.basis || null,
      binding_instrument: raResult.page, label: raResult.label || `read-across from ${raResult.jur}`,
      ...(spec.species_direction ? { species_direction: spec.species_direction, audit_exception: "C6d" } : {}),
      per_country: perCountry, audit,
    }
  }
  if (spec.control) {
    const audit = auditScan(register, sub, analyte, null, null, analyteExclude)
    return { type: "control", provenance_tag: "control", value: null, rationale: spec.rationale || spec.control, reference_method: spec.reference_method || null, audit }
  }
  if (spec.not_material) {
    const audit = auditScan(register, sub, analyte, null, null, analyteExclude)
    return { type: "not_material", provenance_tag: "not-material", value: null, rationale: spec.rationale || spec.not_material, reference_method: spec.reference_method || null, audit }
  }
  return { type: "gap", value: null, provenance_tag: null, error: "no government ML and no configured disposition (read_across / control / not_material)" }
}

// --- speciation reconciliation ----------------------------------------------------------
// A toxic species is a COMPONENT of a total (MeHg <= tHg; iAs <= tAs), so a species ceiling
// is meaningful only when strictly below the binding total. Where the species value is not
// below the binding total it is subsumed: governed by and bounded by the total, with no
// separate number published (publishing a looser species ceiling reads as a speciation
// error). The subsumed cell retains its original candidate for the audit trail. Symmetric
// for both mercury (MeHg/tHg) and arsenic (iAs/tAs).
function reconcileSpeciation(cells, speciesKey, totalKey, speciesName, totalName) {
  const t = cells[totalKey], s = cells[speciesKey]
  if (!t) return
  const tv = t.value_exact ?? (typeof t.value === "number" ? t.value : null)
  const sv = s ? (s.value_exact ?? (typeof s.value === "number" ? s.value : null)) : null
  // Certification-readiness ruling: a species with NO in-force sovereign or read-across number of its own is
  // bounded by its firm parent total (species <= total), never left as a gap. Explicit dispositions
  // (control / not-material) are left as configured.
  // control / not-material are transitional (lib/provenance.mjs): a species so configured is bounded by its firm parent.
  if (tv != null && (!s || s.type === "gap" || s.type === "control" || s.type === "not_material")) {
    cells[speciesKey] = {
      type: "subsumed", provenance_tag: "subsumed", provenance: "subsumed",
      value: null, subsumed_by: totalKey, bounded_by: totalKey, binding_total: t.value,
      binding_total_source: t.binding_jurisdiction || t.source_jurisdiction || null,
      label: `${speciesName} is a component of ${totalName} (${speciesKey} <= ${totalKey}). No in-force sovereign sets a separate ${speciesKey} maximum level for this product on its basis, so ${speciesName.toLowerCase()} is governed by and bounded by the ${totalName} ceiling (${t.value} ug/kg); no separate ${speciesKey} ceiling is published. The ${totalName} is measured on every lot; on ongoing lots ${speciesKey} is speciated whenever ${totalKey} exceeds its reflex trigger.`,
      candidate: null,
    }
    return
  }
  if (tv == null || sv == null) return // a control / not-material on either side: leave as is
  if (sv >= tv) {
    cells[speciesKey] = {
      type: "subsumed",
      provenance_tag: "subsumed", provenance: "subsumed", // one vocabulary (lib/provenance.mjs): a bounded species is tagged subsumed, never with its parent's tag
      value: null, subsumed_by: totalKey, bounded_by: totalKey, binding_total: t.value,
      binding_total_source: t.binding_jurisdiction || t.source_jurisdiction || null,
      label: `${speciesName} is a component of ${totalName} (${speciesKey} <= ${totalKey}). The ${speciesKey} value (${roundDisplay(sv)} ug/kg) is not below the binding ${totalName} ceiling (${t.value} ug/kg), so ${speciesName.toLowerCase()} is governed by and bounded by the ${totalName} ceiling; no separate ${speciesKey} ceiling is published. The ${totalName} is measured on every lot; on ongoing lots ${speciesKey} is speciated whenever ${totalKey} exceeds its limit.`,
      candidate: { type: s.type, value: s.value, source_jurisdiction: s.source_jurisdiction || s.binding_jurisdiction || null, source_id: s.source_id || s.binding_id || null },
    }
  }
}

// --- VERIFY -----------------------------------------------------------------------------
// Assert per-cell integrity and return a list of defects (empty == pass). A defect fails
// the build. Warnings (audit other_form hits, loose-value notes) are returned separately.
function verifyRecord(record, panel) {
  const defects = [], warnings = []
  for (const [variant, cells] of Object.entries(record.variants)) {
    for (const a of panel) {
      const c = cells[a]
      const at = `${record.slug}[${variant}].${a}`
      if (!c) { defects.push(`${at}: missing cell`); continue }
      if (c.type === "gap") { defects.push(`${at}: ${c.error || "unresolved gap"}`); continue }
      if (!ALLOWED_TAGS.has(c.provenance_tag)) { defects.push(`${at}: provenance_tag "${c.provenance_tag}" not in the allowed vocabulary`); continue }
      // A numeric cell must carry a positive value and a named instrument/source.
      if (c.type === "gov") {
        if (!(c.value_exact > 0)) defects.push(`${at}: gov cell has no positive value`)
        if (!c.binding_id) defects.push(`${at}: gov cell names no binding instrument`)
      }
      if (c.type === "read_across") {
        if (!(c.value_exact > 0)) defects.push(`${at}: read_across cell has no positive value`)
        if (!c.source_id) defects.push(`${at}: read_across cell names no source`)
      }
      // A not-material / control cell must carry a substantiating rationale, and MUST NOT
      // have a same-form government hit in the audit (that would rebut the determination).
      if (c.type === "not_material" || c.type === "control") {
        if (!c.rationale) defects.push(`${at}: ${c.type} cell has no rationale`)
        const same = (c.audit && c.audit.same_form) || []
        if (same.length) defects.push(`${at}: marked ${c.type} but ${same.length} government ML(s) match the same product form (${same.map((h) => `${h.jurisdiction} ${h.value}`).join(", ")}) — reclassify to regulatory-alignment/read-across`)
      }
      // A numeric cell with a STRICTER same-form government row missed by selection is a defect.
      if (c.type === "gov" || c.type === "read_across") {
        const same = (c.audit && c.audit.same_form) || []
        if (same.length) defects.push(`${at}: ${c.value} selected but stricter same-form government ML(s) exist (${same.map((h) => `${h.jurisdiction} ${h.value}`).join(", ")}) — selection missed the strictest`)
        const other = (c.audit && c.audit.other_form) || []
        if (other.length) warnings.push(`${at}: informational — stricter rows exist for a different product form (${other.map((h) => `${h.jurisdiction} ${h.value} [${h.scope.slice(0, 40)}]`).join("; ")})`)
      }
    }
  }
  return { defects, warnings }
}

// --- driver -----------------------------------------------------------------------------
export function compileCategory(opts) {
  const { configPath, outdir, only = [], quiet = false, categoryNumber, categoryName, version = "v1.0", lineageNote = "" } = opts
  const register = parseCsv(fs.readFileSync(REGISTER_PATH, "utf8"))
  const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"))
  const panel = config.panel
  if (!Array.isArray(panel) || !panel.length) { console.error(`!! config ${configPath} declares no panel`); return 1 }

  fs.mkdirSync(outdir, { recursive: true })
  const slugs = only.length ? only : Object.keys(config.subcategories)
  let allDefects = 0, allWarnings = 0

  for (const slug of slugs) {
    const sub = config.subcategories[slug]
    if (!sub) { console.error(`!! no config for ${slug}`); allDefects++; continue }
    const cells = {}
    for (const a of panel) cells[a] = resolveCell(register, byId, sub, a)
    reconcileSpeciation(cells, "MeHg", "tHg", "Methylmercury", "total mercury")
    reconcileSpeciation(cells, "iAs", "tAs", "Inorganic arsenic", "total arsenic")
    if (Object.prototype.hasOwnProperty.call(cells, "Cr-VI") || Object.prototype.hasOwnProperty.call(cells, "Cr")) reconcileSpeciation(cells, "Cr-VI", "Cr", "Hexavalent chromium", "total chromium")
    stampProvenance(cells) // one provenance vocabulary (lib/provenance.mjs, Phase A5)
    const record = {
      slug, name: sub.name, category: categoryNumber, category_name: categoryName,
      native_basis: sub.native_basis || "as sold", canned: !!sub.canned,
      variants: { default: cells },
      method: "HMTc Method v2.0 (government-limit default; face value, no reconstitution; read-across / control / not-material for unregulated cells; no occurrence percentiles)",
      provenance_vocabulary: [...ALLOWED_TAGS],
      version, lineage_note: sub.lineage_note || lineageNote || null,
      generated_from: "data/evidence/regulatory_limits.csv",
      config: path.relative(REPO, configPath),
    }

    const { defects, warnings } = verifyRecord(record, panel)
    record.verify = { defects, warnings, status: defects.length ? "FAIL" : "PASS" }
    allDefects += defects.length; allWarnings += warnings.length

    fs.writeFileSync(path.join(outdir, `${slug}.json`), JSON.stringify(record, null, 2))

    if (!quiet) {
      console.log(`\n### ${slug} — ${sub.name}  (Cat ${categoryNumber}, native: ${record.native_basis})`)
      for (const a of panel) {
        const c = cells[a]
        let v = c.value == null
          ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "control" : c.type === "subsumed" ? `<=${c.subsumed_by}` : "GAP")
          : String(c.value)
        const src = c.type === "gov" ? c.binding_jurisdiction
          : c.type === "read_across" ? `RA ${c.source_jurisdiction}`
          : c.type === "subsumed" ? `bounded by ${c.subsumed_by} ${c.binding_total}`
          : c.type
        console.log(`    ${a.padEnd(6)} ${v.padStart(9)}   [${(c.provenance_tag || "—").padEnd(19)}] ${src}`)
        if (c.error) console.log(`      !! ${c.error}`)
      }
      for (const d of defects) console.log(`    !! DEFECT ${d}`)
      for (const w of warnings) console.log(`    ~~ warn  ${w}`)
    }
  }

  if (!quiet) {
    console.log(`\nwrote ${slugs.length} record(s) to ${path.relative(REPO, outdir)}/`)
    console.log(`verify: ${allDefects} defect(s), ${allWarnings} warning(s)`)
  }
  return allDefects ? 1 : 0
}
