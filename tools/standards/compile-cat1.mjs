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

const DEFAULT_PANEL = ["Pb", "iAs", "tHg", "Cd", "Cr", "Ni", "Sn", "Al"] // Cat-1 panel (config may override)
// Canonical order for naming the binding jurisdiction when two governments tie at the strictest value.
const JUR_PRIORITY = ["EU", "UK", "CODEX", "US", "CA", "AU-NZ", "CN", "IN", "BR", "GSO", "KR", "EC", "MX", "TR", "international"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }
const RECON = 8 // 8:1 powder->prepared (China GB 2762 footnote c; the only govt-legislated ratio)
const DRAFT = /draft|not for implementation|proposed/i
// Quarantined rows: transcription/units artifacts confirmed against the source document and excluded
// from strictest-selection (their data stays in the register for reconstructibility; status gates them
// out). Set on the four Guyana Schedule-Four "ppb table" rows (fish Pb 25 / Cd 10 / tHg 200 / tAs 200),
// a source-gazette typesetting error that contradicts the same instrument's own ppm table — see the
// Cat-6 audit (wf_925293b1-55f). Would drive HMTc seafood below every enforced government limit on Earth.
const QUARANTINE = /quarantin/i
// Animal-feed limits (Directive 2002/32/EC and equivalents) carry "feed" in the basis column. They are
// not food MLs; categorically exclude them from food strictest-selection. Load-bearing because four EU
// feed mercury rows (100-200 ug/kg) are STRICTER than the strictest food-fish tHg (300) and would wrongly
// cap seafood mercury from a feed hygiene limit if they leaked. Systemic guard across every category.
const FEED = /\bfeed\b/i
// Pesticide-residue MRLs (Reg 396/2005 and its amending instruments, e.g. Reg 2018/73 for mercury
// compounds) are a categorically different legal instrument from contaminant maximum levels: they cap
// the residue of an authorised plant-protection product, not the background contaminant load, and are
// enforced under a separate framework. They must never bind a contamination standard. Load-bearing for
// grains: the ONLY EU mercury value scoped to "cereals including rice" in the register is the 2018/73
// pesticide MRL (10 ug/kg); untreated it would silently become the strictest tHg cereal ML and cap the
// grain mercury standard from a pesticide instrument. Systemic guard across every category (matches
// exactly one register row today, all others being contaminant/impurity/statutory limits).
const PESTICIDE = /pesticide|residue level/i
// Canned/tinplate in the register's several source languages. Tin migrates from the can, so these
// limits govern canned product only; an English-only pattern let Morocco's French "en conserve"
// tin rows (100 mg/kg) leak into non-canned purées. Also foundational for canned-seafood gating.
const CANNED = /canned|tinplate|tin-plate|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i
const POWDER_FORM = /powder|powdered|dry\b|as[- ]sold.*powder/i // explicit powder-form scope

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
// Category-agnostic panel: a config names its own analyte panel (seafood adds MeHg, drops the
// formula-only Tier-2 cells); Cat-1 falls back to the default panel.
const PANEL = config.panel || DEFAULT_PANEL

// --- analyte normalization to the HMTc panel ----------------------------------
// The panel's iAs cell uses ONLY inorganic-arsenic rows; total-As (tAs) is a distinct analyte and
// is never folded into iAs. The Cr cell is total chromium (Cr / Cr-total); Cr-VI is a distinct
// species cell, bounded by total Cr through the speciation reconciliation below (no infant-food
// jurisdiction sets a direct Cr-VI ML, but analyteOf still recognises the species so a future
// direct Cr-VI ML would resolve). tHg is total mercury; MeHg is distinct, bounded by tHg.
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (m === "Pb") return "Pb"
  if (m === "iAs") return "iAs"
  if (m === "tAs") return "tAs"    // total arsenic — a distinct cell (bounds iAs); never folded into iAs
  if (m === "tHg") return "tHg"
  if (m === "MeHg") return "MeHg"  // methylmercury — the fish-critical form; distinct from tHg, bounded by it
  if (m === "Cd") return "Cd"
  if (m === "Cr" || m === "Cr-total") return "Cr"
  if (m === "Cr-VI") return "Cr-VI" // hexavalent chromium — distinct species cell, bounded by total Cr
  if (m === "Ni") return "Ni"
  if (m === "Sn") return "Sn"
  if (m === "Al") return "Al"
  return null // Sb, U, and other non-panel species
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
  // Optional per-analyte scope override: some rows carry an analyte-specific government limit under a
  // scope token that, if added to the subcategory-wide scope, would wrongly perturb OTHER analytes.
  // Because rows are filtered by analyte species first (below), extra include/exclude tokens scoped to
  // a single analyte are physically confined to that analyte's candidate set. The load-bearing case:
  // FSANZ sets rice cadmium under the bare scope "rice"; adding "\brice\b" to the Cd cell reaches the
  // strictest rice Cd (100) without dragging the raw-rice iAs rows (which share the "rice"/"Rice" scope
  // text but are a different species) into the product iAs cells — preserving product-form iAs.
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
    // Dry subcategories (baby cereals, teething biscuits) have no legislated reconstitution ratio,
    // so an as-consumed (prepared-state) government ML taken at face value would over-tighten a dry
    // product. Drop cross-basis rows for these; only the dry-basis (as_sold / blank) MLs regulate
    // the product as sold. Formula handles cross-basis by the 8:1 conversion instead; wet
    // subcategories are sold as consumed, so every scope-matched row is comparable at face value.
    if (sub.exclude_as_consumed && r.basis_class === "as_consumed") return false
    return true
  })

  // Group by jurisdiction; prefer a row already in the native basis over a converted one.
  // The 8:1 reconstitution factor is applied ONLY within the formula subcategories (same product,
  // powder<->liquid). For every other product form the factor is physically invalid (a dry cereal
  // is not reconstituted 1:8, a wet puree is sold as consumed), so government MLs are taken at face
  // value. This is a correctness rule, not a policy choice.
  const perJur = new Map()
  for (const r of rows) {
    const raw = num(r.value_ug_kg)
    if (raw == null) continue
    let conv = { value: raw, note: "face value", factor: 1 }
    if (sub.reconstitution_8to1) {
      // ÷8 (as-sold → as-consumed) applies ONLY to an explicitly powder-form limit. A generic
      // as-sold "infant formula" limit (Fiji 20) governs the product as sold in whatever form and
      // must not be diluted to 2.5. ×8 (as-consumed → as-sold) is unambiguous — as-consumed IS the
      // prepared basis — so it always applies.
      const wouldDivide = sub.native_basis === "as_consumed" && (r.basis_class || sub.native_basis) === "as_sold"
      if (!wouldDivide || POWDER_FORM.test(r.product_scope)) conv = convert(raw, r.basis_class, sub.native_basis)
    }
    const nativeForm = (r.basis_class || sub.native_basis) === sub.native_basis
    const cand = { value: conv.value, jur: r.jurisdiction, id: r.regulatory_limit_id, published: raw, publishedBasis: r.basis || r.basis_class, note: conv.note, nativeForm, scope: r.product_scope }
    const prev = perJur.get(r.jurisdiction)
    if (!prev) { perJur.set(r.jurisdiction, cand); continue }
    // With 8:1 conversion active (formula), prefer the row already in the native form over a
    // converted one, then prefer stricter. Without conversion (every other subcategory takes face
    // value), basis_class is unreliable (wet baby-food MLs are mis-tagged as_sold), so form-
    // preference would wrongly favour a looser same-basis row over a stricter infant-appropriate
    // one — take the strictest outright.
    if (!sub.reconstitution_8to1) { if (cand.value < prev.value) perJur.set(r.jurisdiction, cand) }
    else if (cand.nativeForm && !prev.nativeForm) perJur.set(r.jurisdiction, cand)
    else if (cand.nativeForm === prev.nativeForm && cand.value < prev.value) perJur.set(r.jurisdiction, cand)
  }

  const candidates = [...perJur.values()].sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  const direct = candidates.length ? candidates[0] : null
  const perCountry = Object.fromEntries(candidates.map((c) => [c.jur, { value: roundDisplay(c.value), converted: c.note !== "same basis", id: c.id }]))

  // Read-across is a COMPARATOR, not only a gap-filler. Compute it whenever configured, then take
  // the strictest of the direct binding and the read-across. A government's own DIRECT limit that is
  // LOOSER than a defensible read-across must not ratchet the standard DOWN below the near-neighbour
  // value the program already anchors to (Israel's direct produce Hg 30 does not override the
  // canned-complementary read-across 20). This preserves the one-way ratchet.
  const ra = (sub.read_across || {})[analyte]
  let raResult = null
  if (ra && !ra.not_material) {
    // Inline cross-source value: a cell for which NO government ML exists but the contaminant is
    // material (Method v2.0 no-ML path). The value is occurrence- or read-across-derived and named in
    // the config; it is authoritative for this cell (no scope-based gov comparison). basis is
    // "occurrence" | "precautionary" (rendered as a comparator/read-across cell downstream).
    if (ra.value_ppb != null) {
      const v = num(ra.value_ppb)
      return { type: "read_across", value: roundDisplay(v), value_exact: v, source_id: ra.source_id || null, source_jurisdiction: ra.source_jurisdiction || null, label: ra.label || "cross-source value", basis_kind: ra.basis || "occurrence", basis_note: (ra.basis === "precautionary" ? "precautionary cross-source value (no government ML for this product form)" : "occurrence / cross-source value (no government ML for this product form)"), per_country: {} }
    }
    const src = byId.get(ra.source_id)
    if (!src) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} not in register` }
    const raw = num(src.value_ug_kg)
    if (raw != null) raResult = { value: raw, source_id: ra.source_id, jur: src.jurisdiction, label: ra.label }
  }

  // basis:"gov" override — the borrowed register row is a government maximum level that DIRECTLY
  // applies to this product form (e.g. a rice noodle IS the China starch-noodle carve-out); present it
  // as a government-limit cell rather than a read-across, authoritatively (skip the strictest-of scan).
  if (raResult && ra && ra.basis === "gov") {
    return { type: "gov", value: roundDisplay(raResult.value), value_exact: raResult.value, binding_jurisdiction: raResult.jur, binding_id: raResult.source_id, basis_note: ra.label || "government maximum level by lookup", per_country: { [raResult.jur]: { value: roundDisplay(raResult.value), converted: false, id: raResult.source_id } } }
  }

  if (direct && (!raResult || direct.value <= raResult.value)) {
    return { type: "gov", value: roundDisplay(direct.value), value_exact: direct.value, binding_jurisdiction: direct.jur, binding_id: direct.id, basis_note: direct.note, per_country: perCountry }
  }
  if (raResult) {
    return { type: "read_across", value: roundDisplay(raResult.value), value_exact: raResult.value, source_id: raResult.source_id, source_jurisdiction: raResult.jur, label: raResult.label || `read-across from ${raResult.jur}`, basis_note: "face value (nearest government value; comparator vs any direct limit)", per_country: perCountry }
  }
  if (ra && ra.not_material) {
    return {
      type: "not_material", value: null,
      control: ra.control || "not material",
      reference_method: ra.reference_method || null,
      // Substantiation contract (audit C7 / audit-not-material-substantiation): a not-material cell
      // carries basis_class (in the vocabulary) + rationale + regulatory_basis + jurisdictions_checked.
      // Total chromium: the toxic species Cr(VI) is separately bounded (Cr-VI <= total Cr) and reflex-
      // speciation-controlled; total-Cr is dominated by nutritionally essential Cr(III) and overstates
      // the toxic burden -> method-artifact. A non-Cr not-material cell must name its class in config
      // (undefined here -> the substantiation gate flags it, by design).
      basis_class: ra.basis_class || (analyte === "Cr" ? "method-artifact" : undefined),
      rationale: ra.rationale || ra.control || "not material",
      regulatory_basis: ra.regulatory_basis || `No government maximum level for ${analyte} in this product matrix; the toxic species is separately bounded and reflex-speciation-controlled where applicable.`,
      jurisdictions_checked: ra.jurisdictions_checked || JUR_PRIORITY.filter((j) => j !== "international").join("; "),
    }
  }
  return { type: "gap", value: null, error: "no government ML and no read-across configured" }
}

// --- species / parent-total speciation reconciliation -------------------------
// A toxic species is a COMPONENT of, and bounded by, its parent total by identity:
// iAs ≤ tAs, MeHg ≤ tHg, Cr-VI ≤ total Cr. A species and its total are therefore
// not two coordinate ceilings that can both bind independently. Per the 2026-08-25
// Certification-Readiness Ruling every such species is an ENFORCEABLE published
// cell (never blank), resolving to exactly one of two states:
//
//   KEEP  — the species carries a firm sovereign ML at or below the binding parent
//           total (sv <= pv). It is then the tighter, species-specific ceiling and
//           is published as its own firm regulatory-alignment number (seafood MeHg:
//           predatory fish 1000 == tHg 1000, lower-trophic 500 == tHg 500). For
//           arsenic this is the non-rice infant-food case: iAs 10/20 ≤ tAs 50, so a
//           real, product-appropriate iAs ML stands alongside the total-As ceiling.
//
//   BOUND — the species is subsumed by (governed by and bounded by) the parent
//           total, published as a limit-of-record with no standalone number. Three
//           ways a cell lands here:
//             (a) sv > pv  — a sovereign species ML STRICTLY ABOVE the binding total
//                 is physically already bound tighter by the total (rice iAs 100 vs
//                 the India infant-foods total-As 50: total-As 50 binds, iAs bounded
//                 ≤ 50 — a more-protective, more-coherent arsenic standard);
//             (b) sv == null — no jurisdiction sets a species ML for this product
//                 form at all (infant-food MeHg and Cr-VI: bounded by tHg / total Cr,
//                 enforced by reflex speciation);
//           The threshold is strict `>` (not `>=`): at exact equality the species ML
//           equals the total ceiling, so it is coherent and published as the real
//           sovereign species number rather than hidden.
//
// A species is NEVER bounded to a parent that carries no ceiling of its own: where
// the parent total is a gap or a not_material determination WITH the species holding
// a real ML (sv != null, pv == null), the species keeps its own enforceable ceiling.
// The one exception is sv == null && pv == null — the infant-food Cr-VI-under-a-
// not_material-total-Cr case — where the species is bounded by the parent's reflex-
// speciation control (any quantifiable Cr-VI fails), which IS the enforceable ceiling.
const SPECIES_LABEL = { iAs: "Inorganic arsenic", MeHg: "Methylmercury", "Cr-VI": "Hexavalent chromium" }
const PARENT_LABEL = { tAs: "total arsenic", tHg: "total mercury", Cr: "total chromium" }
function numOf(cell) {
  if (!cell) return null
  return typeof cell.value_exact === "number" ? cell.value_exact : typeof cell.value === "number" ? cell.value : null
}
function reconcileSpecies(cells, species, parent) {
  const s = cells[species]
  const p = cells[parent]
  if (!s) return
  const sv = numOf(s)
  const pv = numOf(p)
  // KEEP: the species has its OWN direct sovereign limit — publish it as-is, even where
  // it is looser than the parent total. A real government species limit (e.g. US FDA
  // inorganic-arsenic 100 µg/kg for infant rice cereal) is the mandatory numeric claim
  // for that species; the parent total (e.g. India tAs 50) is a SEPARATE published row
  // and binds independently, so a certified lot must meet both and the tighter total
  // governs. Subsumption (publishing the parent bound) is only for a species with NO
  // direct limit of its own (S-DOI-TAS-1, 2026-09-10). NOTE for the corpus fan-out:
  // verify seafood MeHg, where a direct MeHg ML co-exists with a tHg total, renders the
  // intended pair before recompiling those pages.
  if (sv != null) return
  // BOUND: subsume the species under the parent total (sv > pv, or the species has
  // no direct ML for this product form). The parent's ceiling — a firm total number,
  // or a not_material total's reflex-speciation control — is the enforceable bound.
  const parentNumeric = pv != null
  // CLAIM-SURFACE RULE (S-DOI-FORCE-1 / Certification-Readiness Ruling): a speciated
  // analyte NEVER ships a blank claim cell. Where the parent total carries a numeric
  // ceiling, the species PUBLISHES that numeric bound as its own ceiling (iAs ≤ tAs,
  // MeHg ≤ tHg, Cr-VI ≤ total Cr are identities, so the parent ceiling is a valid,
  // conservative species ceiling). Reflex speciation is ASSAY TIMING (measure the
  // species only when the total is exceeded), not a reason to blank the published cell.
  // Only where the parent itself carries NO numeric ceiling does the species remain
  // value:null under the parent's reflex-speciation control (the total is the enforceable
  // bound and there is genuinely no number to publish).
  const boundStmt = parentNumeric
    ? `the binding ${PARENT_LABEL[parent]} ceiling (${p.value} µg/kg)`
    : `the ${PARENT_LABEL[parent]} determination (reflex speciation: any quantifiable ${species} fails)`
  // The species inherits its parent's attribution: the number IS the parent's ceiling,
  // set by the parent's jurisdiction and disposition (gov floor / read-across). So the
  // claim surface shows a real jurisdiction and disposition, not a "—"/"subsumed" blank.
  const parentJur = p ? (p.binding_jurisdiction || p.source_jurisdiction || null) : null
  const parentDisposition = p && p.type === "gov" ? "regulatory-alignment"
    : p && p.type === "read_across" ? "read_across"
    : (p && p.type) || "reflex-control"
  cells[species] = {
    type: "subsumed",
    value: parentNumeric ? p.value : null,
    value_exact: parentNumeric ? (p.value_exact ?? p.value) : null,
    subsumed_by: parent,
    binding_jurisdiction: parentNumeric ? parentJur : null,
    claim_disposition: parentNumeric ? parentDisposition : "reflex-control",
    binding_parent_value: parentNumeric ? p.value : null,
    binding_parent_source: p ? (p.binding_jurisdiction || p.source_jurisdiction || (p.type === "not_material" ? "reflex-speciation control" : null)) : null,
    basis_note: parentNumeric
      ? `bounded ceiling = binding ${PARENT_LABEL[parent]} value ${p.value} µg/kg; assayed by reflex speciation when the total is exceeded`
      : `reflex-speciation control (no numeric ${PARENT_LABEL[parent]} ceiling to bound to)`,
    label: `${SPECIES_LABEL[species] || species} is a component of ${PARENT_LABEL[parent] || parent} (${species} ≤ ${parent}). ${sv != null ? `The strictest applicable sovereign ${species} value (${s.value} µg/kg) is not below ${boundStmt}` : `No jurisdiction sets a ${species} limit for this product form below ${boundStmt}`}, so ${species} is governed by and bounded by ${PARENT_LABEL[parent] || parent}. ${parentNumeric ? `The published ${species} ceiling is the numeric parent bound (${p.value} µg/kg), assayed by reflex speciation when the total is exceeded.` : `The parent carries no numeric ceiling, so no separate ${species} number is published; any quantifiable ${species} fails.`}`,
    candidate: sv != null ? { type: s.type, value: s.value, source_jurisdiction: s.source_jurisdiction || s.binding_jurisdiction || null, source_id: s.source_id || s.binding_id || null } : null,
  }
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
const summary = []
for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { console.error(`!! no config for ${slug}`); continue }
  const variants = sub.soy_split ? ["cow", "soy"] : ["both"]
  const record = { slug, name: sub.name, ...(config.category != null ? { category: config.category, category_name: config.category_name } : {}), ...(sub.provisional_scaffold ? { provisional_scaffold: true } : {}), ...(sub.scope_note ? { scope_note: sub.scope_note } : {}), native_basis: sub.native_basis, canned: !!sub.canned, variants: {}, generated_from: "data/evidence/regulatory_limits.csv", method: "HMTc Method v2.0 (government-limit default, 8:1 basis, read-across)" }
  for (const variant of variants) {
    const cells = {}
    for (const a of PANEL) cells[a] = resolveCell(sub, a, variant)
    // Enforce species ≤ parent-total coherence (each species is a component of its total):
    // iAs ≤ tAs (arsenic), MeHg ≤ tHg (mercury), Cr-VI ≤ total Cr (chromium). Runs after every
    // cell resolves so it sees the binding totals; only fires for panels that carry the species.
    reconcileSpecies(cells, "iAs", "tAs")
    reconcileSpecies(cells, "MeHg", "tHg")
    reconcileSpecies(cells, "Cr-VI", "Cr")
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
