#!/usr/bin/env node
// Category-16 (Dietary Supplements, human) standard COMPILER —
// HMTc Method v2.0, CHILD-PROTECTIVE over-compliance form.
//
// Forked from compile-cat17.mjs (the human-grade pet-food over-compliance compiler). It shares the
// register-load, basis, and mercury-speciation machinery and emits the identical variants/cells
// record schema the completion audit (compile-current-standards.mjs) consumes. Two deliberate
// decisions make this a supplement compiler, both made by Karen and executed here:
//
//   1. CHILD-PROTECTIVE READ-ACROSS (the key methodological decision).
//      Dietary supplements are legally governed by an ADULT-oriented framework: FDA DSHEA (which sets
//      no heavy-metal maxima at all), USP <2232> (elemental-contaminant PDEs computed for an adult
//      consumer), and the food-supplement maximum levels several governments set (EU, GSO, Israel,
//      Vietnam, Thailand, ASEAN, Singapore) — all of which are lax (lead 1000–10000 µg/kg, cadmium
//      300–1000, mercury 100–500). Under a strict "strictest applicable government ML" rule the
//      supplement standard would be one of those adult floors. HMTc DELIBERATELY OVERRIDES that: the
//      standard for every (subcategory, analyte) cell is the strictest sovereign INFANT-AND-CHILD-FOOD
//      maximum level for that analyte (Ages 0–5, HMTc Category 1), read across to ALL supplements
//      regardless of adult or child labeling, as a voluntary over-compliance. The rationale is that
//      children routinely consume adult supplements (gummies, protein powder, greens, melatonin), and
//      body-weight-normalized exposure makes the child the binding safety case for the whole category.
//      The cell is therefore labeled `read_across` with `child_protective: true`. It is NEVER labeled
//      `gov`: no government sets an infant-food limit for an adult supplement; HMTc adopts the child
//      limit by choice, and that honesty is the defensibility.
//
//   2. ADULT-FLOOR DISCLOSURE baked into every cell. The laxer adult regulatory floor the standard
//      exceeds — the strictest sovereign adult food-supplement ML (from the register), the USP <2232>
//      oral PDE (in µg/day and, at USP's own ≤10 g/day maximum-daily-intake convention, its µg/kg
//      concentration equivalent), and where one exists the California Proposition 65 developmental
//      MADL — is attached to each cell as `adult_floor`. The derivation and the cert briefing can then
//      state honestly: "adult USP <2232> permits X; HMTc holds all supplements to the child-protective
//      limit Y." The adult floor is disclosure only; it never selects the number.
//
// Every emitted number still traces to exactly one named sovereign register row (the infant-food ML).
// No occurrence statistic, no invented value, and no serving-size conversion selects a certification
// limit — the anchor is a fixed, curated, register-sourced infant-food maximum, applied uniformly. The
// clay/mineral/earth and greens/superfood classes (lead/arsenic/cadmium hyperaccumulators) get the
// SAME strict child-protective numbers as every other form: the compiler never relaxes a limit for a
// high-occurrence class, and carries a `hazard_note` recording why the line is held.
//
// Species controls: inorganic arsenic (iAs) carries the infant-formula iAs ML directly; hexavalent
// chromium (Cr-VI) and total chromium (Cr) are reflex controls (Cr-VI reduces to Cr-III in a reducing
// matrix, no infant-food total-Cr ML exists); methylmercury (MeHg) is a mandatory control where a
// credible methylation pathway exists (algae/seaweed, fish-oil and marine-oil supplements) and a
// tHg-bounded not-material determination otherwise.
//
// Usage: node tools/standards/compile-cat16.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import fs from "node:fs"
import path from "node:path"
import { FULL_PANEL } from "./hmtc-analyte-panel.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat16-compiled")
const QUIET = args.has("quiet")

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
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat16-config.json")
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel || FULL_PANEL
const PROFILES = config.profiles || {}
const USP_2232 = config.usp_2232 || {}
const PROP65_MADL = config.prop65_madl || {}
const ADULT_FLOOR_IDS = config.adult_floor_ids || {}

function roundDisplay(x) {
  if (x == null) return null
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// --- subcategory resolution (merge profile + subcategory overrides) -----------
function resolvedSub(sub) {
  const base = sub.profile ? (PROFILES[sub.profile] || {}) : {}
  // The child-protective read-across map is uniform across every subcategory (the whole point of the
  // over-compliance): config.default_read_across sets the eight infant-food anchors plus the species
  // controls; a profile overrides only what differs by form (the MeHg control on marine-source classes);
  // a subcategory may override a single analyte. Precedence: subcategory > profile > default.
  return {
    ...base,
    ...sub,
    native_basis: sub.native_basis || base.native_basis || "as_sold",
    read_across: { ...(config.default_read_across || {}), ...(base.read_across || {}), ...(sub.read_across || {}) },
    hazard_note: sub.hazard_note || base.hazard_note || null,
  }
}

// --- adult-floor disclosure ---------------------------------------------------
// Assemble the laxer adult regulatory floor the child-protective standard exceeds, for one analyte:
//   - the sovereign adult food-supplement MLs on the register (strictest disclosed first),
//   - the USP <2232> oral PDE (µg/day) and its concentration equivalent at USP's ≤10 g/day convention,
//   - the California Proposition 65 developmental MADL (µg/day) where OEHHA has adopted one.
// Disclosure only: nothing here is ever compared to or allowed to select the standard.
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

// --- per-cell resolution ------------------------------------------------------
// The binding value is a fixed, curated, register-sourced infant-food ML (ra.source_id), relabeled
// child-protective read-across (never gov). Controls and not-material determinations are configured.
function resolveCell(sub, analyte) {
  const ra = (sub.read_across || {})[analyte]
  const adult_floor = adultFloorFor(analyte)

  if (!ra) {
    return { type: "gap", value: null, error: `no child-protective read-across configured for ${analyte}`, adult_floor }
  }

  // Reflex/no-numeric controls (total Cr with no infant-food ML; MeHg where a methylation pathway exists).
  if (ra.control_only) {
    return {
      type: "control",
      value: null,
      control: ra.control || "no sovereign infant-food maximum; mandatory surveillance control",
      reference_method: ra.reference_method || null,
      bounded_by: ra.bounded_by || null,
      adult_floor,
    }
  }

  // Not-material determination (Cr-VI in a reducing matrix; MeHg with no methylation pathway).
  if (ra.not_material) {
    return {
      type: "not_material",
      value: null,
      control: ra.control || "not material",
      reference_method: ra.reference_method || null,
      bounded_by: ra.bounded_by || null,
      adult_floor,
    }
  }

  // Child-protective read-across from a named infant-and-child-food sovereign ML.
  if (ra.source_id) {
    const src = byId.get(ra.source_id)
    if (!src) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} not in register`, adult_floor }
    const raw = num(src.value_ug_kg)
    if (raw == null) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} has no numeric value`, adult_floor }
    const childValue = roundDisplay(raw)
    // Over-compliance ratio vs the strictest adult supplement floor, for the derivation display.
    const strictestAdult = adult_floor && adult_floor.strictest_supplement_ml ? adult_floor.strictest_supplement_ml.value : null
    const over_compliance_x = strictestAdult && childValue ? Math.round((strictestAdult / childValue) * 10) / 10 : null
    return {
      type: "read_across",
      child_protective: true,
      value: childValue,
      value_exact: raw,
      source_id: ra.source_id,
      source_jurisdiction: src.jurisdiction,
      analog_label: ra.analog_label || "strictest sovereign infant-and-child-food maximum level (HMTc Category 1, Ages 0–5)",
      analog_scope: src.product_scope,
      over_compliance_x,
      label: ra.label || `Child-protective read-across: the strictest sovereign infant-and-child-food maximum level for ${analyte} (${src.jurisdiction} ${childValue} µg/kg, ${src.product_scope}). Dietary supplements are legally governed by an adult-oriented framework (DSHEA / USP <2232> / adult food-supplement MLs${strictestAdult ? `, adult floor ${strictestAdult} µg/kg` : ""}); HMTc holds ALL supplements to the child limit as a voluntary over-compliance because children consume adult supplements and body-weight-normalized exposure binds on the child.`,
      basis_note: "child-protective read-across (voluntary over-compliance; adult floor disclosed, never selected)",
      adult_floor,
    }
  }

  return { type: "gap", value: null, error: `unresolved read-across for ${analyte}`, adult_floor }
}

// --- mercury speciation reconciliation (MeHg <= tHg) --------------------------
// Methylmercury is a component of total mercury (MeHg <= tHg by identity). A separate MeHg ceiling is
// meaningful only when strictly below the binding tHg. For supplements the binding tHg is the infant
// read-across (4 µg/kg) and no government sets a supplement MeHg limit below it, so MeHg is bounded by
// tHg — kept as a mandatory control (marine-source classes) or a not-material determination otherwise,
// never a looser standalone number.
function reconcileMercurySpeciation(cells) {
  const t = cells.tHg
  const m = cells.MeHg
  if (!t || !m) return
  const tv = typeof t.value_exact === "number" ? t.value_exact : typeof t.value === "number" ? t.value : null
  const mv = typeof m.value_exact === "number" ? m.value_exact : typeof m.value === "number" ? m.value : null
  if (tv == null || mv == null) return // MeHg is a control/not-material determination — leave as configured
  if (mv >= tv) {
    cells.MeHg = {
      type: "subsumed",
      value: null,
      subsumed_by: "tHg",
      binding_tHg: t.value,
      binding_tHg_source: t.source_jurisdiction || t.binding_jurisdiction || null,
      label: `Methylmercury is a component of total mercury (MeHg ≤ tHg). No government sets a supplement methylmercury limit below the binding child-protective total-mercury ceiling (${t.value} µg/kg), so methylmercury is governed by and bounded by that ceiling; no separate methylmercury number is published.`,
      candidate: { type: m.type, value: m.value, source_jurisdiction: m.source_jurisdiction || null, source_id: m.source_id || null },
      adult_floor: m.adult_floor || null,
    }
  }
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const slugs = only.length ? only : Object.keys(config.subcategories)
const summary = []
for (const slug of slugs) {
  const raw = config.subcategories[slug]
  if (!raw) { console.error(`!! no config for ${slug}`); continue }
  const sub = resolvedSub(raw)
  const record = {
    slug,
    name: sub.name,
    row: sub.row ?? null,
    native_basis: sub.native_basis,
    canned: false,
    child_protective: true,
    hazard_note: sub.hazard_note || null,
    regulatory_floor_note:
      sub.regulatory_floor_note ||
      config.regulatory_floor_note ||
      "Dietary supplements are legally governed by an adult-oriented framework: FDA DSHEA sets no heavy-metal maxima; USP <2232> computes elemental-contaminant PDEs for an adult consumer; the food-supplement maximum levels several governments set (EU, GSO, Israel, Vietnam, Thailand, ASEAN, Singapore) are lax. HMTc holds every supplement, adult- or child-labeled, to the strictest sovereign infant-and-child-food maximum level (Ages 0–5) by choice. The adult floor is disclosed on every cell and never selects the number.",
    variants: {},
    generated_from: "data/evidence/regulatory_limits.csv",
    method: "HMTc Method v2.0 — child-protective over-compliance: strictest sovereign infant-and-child-food ML by lookup, applied to all supplements; adult floor (supplement ML / USP <2232> / Prop 65 MADL) disclosed, never selected",
  }
  const cells = {}
  for (const a of PANEL) cells[a] = resolveCell(sub, a)
  reconcileMercurySpeciation(cells)
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
    }
  }
}
if (!QUIET) console.log(`\nwrote ${summary.length} record(s) to ${path.relative(REPO, OUTDIR)}/`)
