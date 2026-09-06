#!/usr/bin/env node
// Category-16 (Dietary Supplements, human) standard COMPILER —
// HMTc Method v2.0, CHILD-PROTECTIVE over-compliance form.
//
// derive → audit → verify, in one deterministic, SELF-CONTAINED pass (same shape as
// compile-cat27.mjs). Numbers come ONLY from data/evidence/regulatory_limits.csv (the sovereign
// register), selected per (subcategory, analyte) by an explicit, auditable config
// (tools/standards/cat16-config.json). No occurrence percentiles. No LLM-authored values. No
// serving-size conversion. Every emitted number traces to exactly one named sovereign register row.
// Allowed provenance kinds: read-across (the child-protective anchor), control, not-material, and the
// derived MeHg<=tHg `subsumed`.
//
// THE DECIDED METHOD (Karen's call). Dietary supplements are legally governed by an ADULT-oriented
// framework: FDA DSHEA sets no heavy-metal maxima; USP <2232> computes elemental-contaminant PDEs for
// an adult consumer; the food-supplement maximum levels several governments publish (EU, GSO, Israel,
// Vietnam, Thailand, ASEAN, Singapore) are lax. Under a strict "strictest applicable government ML"
// rule the supplement standard would be one of those adult floors. HMTc DELIBERATELY OVERRIDES that:
// the standard for every (subcategory, analyte) is the strictest sovereign INFANT-AND-CHILD-FOOD
// maximum level for that analyte (Ages 0-5, HMTc Category 1), read across to ALL supplements
// regardless of adult or child labeling, as a voluntary over-compliance — because children routinely
// consume adult supplements (gummies, protein, greens, melatonin) and body-weight-normalized exposure
// makes the child the binding safety case. The cell is `read_across` with child_protective:true, never
// `gov`: no government sets an infant-food limit for an adult supplement; HMTc adopts it by choice, and
// that honesty is the defensibility. This mirrors Category 17's human-grade read-across (which reads a
// pet-feed floor up to human food); here an adult-supplement floor is read up to infant-and-child food.
//
// ADULT-FLOOR DISCLOSURE is attached to every cell (adult_floor): the strictest sovereign adult
// food-supplement ML on the register, the USP <2232> oral PDE (µg/day and, at USP's own <=10 g/day
// maximum-daily-intake convention, its µg/kg concentration equivalent), and the California Prop 65
// developmental MADL where OEHHA has adopted one. Disclosure only — it never selects the number. The
// clay/mineral/earth and greens/superfood classes (Pb/As/Cd hyperaccumulators) get the SAME strict
// numbers; the compiler never relaxes a limit for a high-occurrence class (hazard_note records why).
//
// Method, per (subcategory, analyte):
//   1. DERIVE. The binding value is the fixed, curated, register-sourced infant-food ML named by the
//      config (read_across.source_id), relabeled child-protective. Species with no infant-food anchor
//      are `control` determinations (total Cr; Cr-VI reflex; MeHg bounded by tHg, lot-speciated on
//      marine-source classes).
//   2. AUDIT. For each numeric cell, re-scan the register over an infant-and-child-food audit scope for
//      any STRICTER same-analyte infant-food ML than the pinned anchor, and surface it as
//      `stricter_unselected` so a missed stricter child anchor is raised for review, not silently kept.
//   3. VERIFY. Validate every cell against the certification contract (resolved type; numeric cells
//      carry a sovereign source id; control/not-material carry an explanation AND a reference method;
//      non-numeric species cells are bounded). Any GAP or contract violation exits non-zero, so an
//      unpublishable record can never be written silently.
//
// Output: one JSON record per subcategory to <outdir>, plus a human-readable derivation report.
// Usage: node tools/standards/compile-cat16.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const DEFAULT_OUTDIR = "data/workbench/standards/cat16-compiled"
const DEFAULT_CONFIG = "tools/standards/cat16-config.json"
const OUTDIR = args.get("outdir") || path.join(REPO, DEFAULT_OUTDIR)
const CONFIG_PATH = args.get("config") || path.join(REPO, DEFAULT_CONFIG)
const QUIET = args.has("quiet")

// Canonical HMTc panel: eight totals + the two core species (iAs, Cr-VI) + conditional MeHg.
const FULL_PANEL = ["Pb", "iAs", "tAs", "tHg", "MeHg", "Cd", "Cr-VI", "Ni", "Sn", "Al", "Cr"]
const SPECIES = new Set(["iAs", "Cr-VI", "MeHg"])
import { stampProvenance } from "./lib/provenance.mjs"
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
const FEED = /\bfeed\b/i
const PESTICIDE = /pesticide|residue level/i
const CANNED = /canned|tinplate|tin-plate|tin-coated|tin coated|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i

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
const PROFILES = config.profiles || {}
const USP_2232 = config.usp_2232 || {}
const PROP65_MADL = config.prop65_madl || {}
const ADULT_FLOOR_IDS = config.adult_floor_ids || {}

function analyteOf(metal) {
  const m = (metal || "").trim()
  if (["Pb", "iAs", "tAs", "tHg", "MeHg", "Cd", "Cr-VI", "Ni", "Sn", "Al"].includes(m)) return m
  if (m === "Cr" || m === "Cr-total") return "Cr"
  return null
}

function roundDisplay(x) {
  if (x == null) return null
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// --- subcategory resolution (merge default + profile + subcategory overrides) --
// The child-protective read-across map is uniform across every subcategory (the point of the
// over-compliance): config.default_read_across sets the eight infant-food anchors plus the species
// controls; a profile overrides only what differs by form (the MeHg control on marine-source classes);
// a subcategory may override a single analyte. Precedence: subcategory > profile > default.
function resolvedSub(sub) {
  const base = sub.profile ? (PROFILES[sub.profile] || {}) : {}
  return {
    ...base,
    ...sub,
    native_basis: sub.native_basis || base.native_basis || "as_sold",
    read_across: { ...(config.default_read_across || {}), ...(base.read_across || {}), ...(sub.read_across || {}) },
    hazard_note: sub.hazard_note || base.hazard_note || null,
  }
}

// --- adult-floor disclosure ---------------------------------------------------
// The laxer adult regulatory floor the child-protective standard exceeds, for one analyte: the
// sovereign adult food-supplement MLs on the register (strictest first), the USP <2232> oral PDE
// (µg/day + concentration equivalent at USP's <=10 g/day convention), and the Prop 65 developmental
// MADL where OEHHA adopted one. Disclosure only; never compared to or allowed to select the standard.
function adultFloorFor(analyte) {
  const ids = ADULT_FLOOR_IDS[analyte] || []
  const supplement_mls = ids
    .map((id) => byId.get(id))
    .filter(Boolean)
    .map((r) => ({ jurisdiction: r.jurisdiction, value: num(r.value_ug_kg), id: r.regulatory_limit_id, scope: r.product_scope }))
    .filter((r) => r.value != null)
    .sort((a, b) => a.value - b.value)
  const usp = USP_2232[analyte] || null
  const prop65 = PROP65_MADL[analyte] || null
  if (!supplement_mls.length && !usp && !prop65) return null
  return {
    strictest_supplement_ml: supplement_mls[0] || null,
    laxest_supplement_ml: supplement_mls.length ? supplement_mls[supplement_mls.length - 1] : null,
    supplement_mls,
    usp_2232: usp,
    prop65_madl: prop65,
  }
}

// --- DERIVE: per-cell resolution ----------------------------------------------
function resolveCell(sub, analyte) {
  const ra = (sub.read_across || {})[analyte]
  const adult_floor = adultFloorFor(analyte)

  if (!ra) return { type: "gap", value: null, error: `no child-protective read-across configured for ${analyte}`, adult_floor }

  if (ra.control_only) {
    return {
      type: "control", value: null,
      control: ra.control || "no sovereign infant-food maximum; mandatory surveillance control",
      rationale: ra.rationale || ra.control || "no sovereign infant-food maximum; mandatory surveillance control",
      reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, adult_floor,
    }
  }
  if (ra.not_material) {
    return {
      type: "not_material", value: null,
      control: ra.control || "not material",
      reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, adult_floor,
    }
  }
  if (ra.source_id) {
    const src = byId.get(ra.source_id)
    if (!src) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} not in register`, adult_floor }
    const raw = num(src.value_ug_kg)
    if (raw == null) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} has no numeric value`, adult_floor }
    const childValue = roundDisplay(raw)
    const strictestAdult = adult_floor && adult_floor.strictest_supplement_ml ? adult_floor.strictest_supplement_ml.value : null
    const over_compliance_x = strictestAdult && childValue ? Math.round((strictestAdult / childValue) * 10) / 10 : null
    return {
      type: "read_across", child_protective: true,
      value: childValue, value_exact: raw,
      source_id: ra.source_id, source_jurisdiction: src.jurisdiction,
      analog_label: ra.analog_label || "strictest sovereign infant-and-child-food maximum level (HMTc Category 1, Ages 0-5)",
      analog_scope: src.product_scope, over_compliance_x,
      label: ra.label || `Child-protective read-across: the strictest sovereign infant-and-child-food maximum level for ${analyte} (${src.jurisdiction} ${childValue} µg/kg, ${src.product_scope}). Supplements are legally governed by an adult-oriented framework${strictestAdult ? ` (adult floor ${strictestAdult} µg/kg)` : ""}; HMTc holds ALL supplements to the child limit as a voluntary over-compliance.`,
      basis_note: "child-protective read-across (voluntary over-compliance; adult floor disclosed, never selected)",
      adult_floor,
    }
  }
  return { type: "gap", value: null, error: `unresolved read-across for ${analyte}`, adult_floor }
}

// --- AUDIT: stricter-unselected safety-net ------------------------------------
// For a resolved numeric child-protective cell, re-scan the register over the infant-and-child-food
// audit scope for any same-analyte infant-food row that is STRICTER than the pinned anchor. A hit means
// a potentially-missed stricter child anchor; surfaced for review, not auto-applied. Adult-supplement
// rows and non-food rows are excluded (they are the floor, not the anchor).
function auditScan(analyte, cell) {
  const auditScope = config.audit_scope
  if (!auditScope) return []
  const inc = new RegExp(auditScope, "i")
  const exc = config.audit_exclude ? new RegExp(config.audit_exclude, "i") : null
  const binding = typeof cell.value_exact === "number" ? cell.value_exact : typeof cell.value === "number" ? cell.value : null
  if (binding == null) return []
  const bindingId = cell.source_id || cell.binding_id || null
  const out = []
  for (const r of register) {
    if (analyteOf(r.metal_species) !== analyte) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status) || PESTICIDE.test(r.status)) continue
    if (FEED.test(r.basis || "")) continue
    if (CANNED.test(r.product_scope)) continue
    if (r.regulatory_limit_id === bindingId) continue
    const scope = r.product_scope || ""
    if (!inc.test(scope)) continue
    if (exc && exc.test(scope)) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    if (v < binding * 0.9999) out.push({ id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, scope: scope.slice(0, 60) })
  }
  return out.sort((a, b) => a.value - b.value)
}

// --- mercury speciation reconciliation (MeHg <= tHg by identity) --------------
function reconcileMercurySpeciation(cells) {
  const t = cells.tHg, m = cells.MeHg
  if (!t || !m) return
  const tv = typeof t.value_exact === "number" ? t.value_exact : typeof t.value === "number" ? t.value : null
  const mv = typeof m.value_exact === "number" ? m.value_exact : typeof m.value === "number" ? m.value : null
  if (tv == null || mv == null) return // MeHg is a control determination — leave as configured
  if (mv >= tv) {
    cells.MeHg = {
      type: "subsumed", value: null, subsumed_by: "tHg", binding_tHg: t.value,
      binding_tHg_source: t.source_jurisdiction || t.binding_jurisdiction || null,
      label: `Methylmercury is a component of total mercury (MeHg ≤ tHg). No government sets a supplement methylmercury limit below the binding child-protective total-mercury ceiling (${t.value} µg/kg), so methylmercury is governed by and bounded by that ceiling; no separate methylmercury number is published.`,
      candidate: { type: m.type, value: m.value, source_jurisdiction: m.source_jurisdiction || null, source_id: m.source_id || null },
      adult_floor: m.adult_floor || null,
    }
  }
}

// --- VERIFY: certification contract -------------------------------------------
function verifyCell(loc, analyte, cell, defects) {
  const RESOLVED = new Set(["precautionary", "gov", "read_across", "not_material", "control", "subsumed"])
  if (!cell || !RESOLVED.has(cell.type)) { defects.push(`${loc}: unresolved cell type ${cell?.type || "missing"}${cell?.error ? " — " + cell.error : ""}`); return }
  const numeric = typeof cell.value_exact === "number" || typeof cell.value === "number"
  const source = cell.binding_id || cell.source_id || null
  if (numeric && !source && !(cell.type === "precautionary" && cell.sovereign_floor)) defects.push(`${loc}: numeric cell has no sovereign source identifier`)
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
  const raw = config.subcategories[slug]
  if (!raw) { console.error(`!! no config for ${slug}`); defects.push(`${slug}: no config`); continue }
  const sub = resolvedSub(raw)
  const record = {
    slug, name: sub.name, row: sub.row ?? null,
    category: config.category, category_name: config.category_name,
    native_basis: sub.native_basis, canned: false, child_protective: true,
    hazard_note: sub.hazard_note || null,
    regulatory_floor_note: sub.regulatory_floor_note || config.regulatory_floor_note || null,
    variants: {},
    generated_from: "data/evidence/regulatory_limits.csv", config: path.relative(REPO, CONFIG_PATH),
    method: "HMTc Method v2.0 — child-protective over-compliance: strictest sovereign infant-and-child-food ML by lookup, applied to all supplements; adult floor (supplement ML / USP <2232> / Prop 65 MADL) disclosed, never selected",
    lineage: config.lineage || null,
  }
  const cells = {}
  for (const a of PANEL) cells[a] = resolveCell(sub, a)
  reconcileMercurySpeciation(cells)
  // Certification-readiness ruling: a species (iAs, MeHg, Cr-VI) left as a control or a gap while its parent total is
  // a firm number is bounded by that parent (species <= total); control is transitional (lib/provenance.mjs).
  for (const [sp, tot, spName, totName] of [["iAs", "tAs", "Inorganic arsenic", "total arsenic"], ["MeHg", "tHg", "Methylmercury", "total mercury"], ["Cr-VI", "Cr", "Hexavalent chromium", "total chromium"]]) {
    if (!PANEL.includes(sp)) continue
    const t = cells[tot], c = cells[sp]
    const tv = t && typeof t.value === "number" ? t.value : null
    if (tv == null || !c || !(c.type === "control" || c.type === "gap" || c.error)) continue
    cells[sp] = { type: "subsumed", provenance: "subsumed", value: null, subsumed_by: tot, bounded_by: tot, binding_total: tv, basis_class: "speciation-bounded", adult_floor: c.adult_floor,
      rationale: `${spName} is a component of ${totName} (${sp} <= ${tot}). No in-force sovereign sets a separate ${sp} maximum level for this product on its basis, so ${spName.toLowerCase()} is governed by and bounded by the ${totName} ceiling (${tv} ug/kg); no separate ${sp} ceiling is published. ${sp} is speciated whenever ${tot} exceeds its reflex trigger.` }
  }
  stampProvenance(cells, sub) // one provenance vocabulary (lib/provenance.mjs, Phase A5)
  for (const a of PANEL) {
    const c = cells[a]
    if (c.type === "read_across") {
      const s = auditScan(a, c)
      if (s.length) c.stricter_unselected = s
    }
    verifyCell(`Cat 16 ${slug}/${a}`, a, c, defects)
  }
  record.variants.both = cells
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))
  summary.push(record)

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}  (native: ${sub.native_basis}${sub.hazard_note ? "; hyperaccumulator class" : ""})`)
    for (const a of PANEL) {
      const c = cells[a]
      const v = c.value == null ? (["not_material", "control", "subsumed"].includes(c.type) ? c.type : "GAP") : String(c.value)
      const src = c.type === "read_across" ? `CP ${c.source_jurisdiction}` : c.type
      const af = c.adult_floor && c.adult_floor.strictest_supplement_ml ? ` [adult floor ${c.adult_floor.strictest_supplement_ml.value}]` : c.adult_floor && c.adult_floor.usp_2232 ? ` [USP ${c.adult_floor.usp_2232.pde_ug_per_day}µg/d]` : ""
      const ox = c.over_compliance_x ? ` (${c.over_compliance_x}× stricter)` : ""
      console.log(`    ${a.padEnd(6)} ${v.padStart(8)}   ${src}${af}${ox}`)
      if (c.stricter_unselected) for (const s of c.stricter_unselected) console.log(`        ?? stricter unselected (${s.jurisdiction}): ${s.value} — ${s.id} [${s.scope}]`)
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
