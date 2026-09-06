#!/usr/bin/env node
// Category-17 (Pet Foods) standard COMPILER — HMTc Method v2.0, human-grade over-compliance form.
//
// Forked from compile-cat1.mjs. It shares the register-load, scope-match, basis, and
// mercury-speciation machinery, and emits the identical variants/cells record schema the
// completion audit and the cert page emitter consume. Two deliberate differences make this a
// pet-food compiler rather than a food compiler:
//
//   1. HUMAN-GRADE READ-ACROSS (the key methodological decision, made by Karen, executed here).
//      Pet food is legally governed by FEED law (FDA CVM guidance, AAFCO model regulations, and
//      in the register EU Directive 2002/32 on undesirable substances in animal feed, Japan's
//      enforced pet-food maxima, and China's draft pet-food guidance). Feed limits are generally
//      LAXER than human-food limits, so under a strict "strictest applicable government ML" rule
//      the pet-food standard would be the feed limit. HMTc DELIBERATELY OVERRIDES that: the
//      standard for each (subcategory, analyte) cell is the strictest applicable HUMAN-FOOD
//      sovereign maximum for the nearest human-food analog, adopted as a voluntary over-compliance.
//      The compiler therefore scans the register over the HUMAN-FOOD ANALOG scope (the FEED filter
//      already excludes every feed row, so a feed limit can never be selected), takes the strictest
//      sovereign human-food ML, and labels the cell `read_across` with `human_grade: true`. It is
//      NEVER labeled `gov`: no government sets this maximum for a pet product; HMTc adopts a human
//      food's maximum by choice, and that honesty is the defensibility.
//
//   2. FEED-FLOOR DISCLOSURE baked into every cell. The applicable feed-law maximum (EU 2002/32
//      complete/compound pet feed, Japan's pet-food ML, China's draft) is looked up from the
//      register and attached to each cell as `feed_floor`, so the derivation and the cert page can
//      state honestly: "feed law permits X; HMTc certifies pets to the stricter human-food limit
//      Y." The feed floor is disclosure only; it never selects the number.
//
// Every emitted number still traces to exactly one named sovereign register row (the human-food
// ML), converted at most once and never across an incompatible basis. No occurrence statistic and
// no invented value select a certification limit. Basis is never conflated: a dry (as-sold) pet
// product reads across only from dry/as-sold human analogs; a wet (as-consumed) product only from
// as-consumed human analogs. Where the nearest human food is unregulated for an analyte, the cell
// is an explicit `control` (mandatory testing, no sovereign number) or a gated `not_material`
// determination — never a silent gap and never a feed number.
//
// Usage: node tools/standards/compile-cat17.mjs [--only=slug1,slug2] [--outdir=path] [--quiet]

import fs from "node:fs"
import path from "node:path"
import { FULL_PANEL } from "./hmtc-analyte-panel.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat17-compiled")
const QUIET = args.has("quiet")

const JUR_PRIORITY = ["EU", "UK", "CODEX", "US", "CA", "AU-NZ", "CN", "IN", "BR", "GSO", "KR", "EC", "MX", "TR", "international"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }
import { stampProvenance } from "./lib/provenance.mjs"
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
// Feed limits (2002/32 and equivalents) carry "feed" in the basis column. They must never be
// selected as a certification value — they are the floor HMTc over-complies against, not the
// standard. This is the load-bearing guard that makes the human-grade override real: with the
// feed rows filtered out of selection, the scan can only ever return a human-food ML.
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
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat17-config.json")
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel || FULL_PANEL
const PROFILES = config.profiles || {}

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

// --- subcategory resolution (merge profile + subcategory overrides) -----------
function resolvedSub(sub) {
  const base = sub.profile ? (PROFILES[sub.profile] || {}) : {}
  return {
    ...base,
    ...sub,
    scope_include: sub.scope_include || base.scope_include || [],
    scope_exclude: sub.scope_exclude || base.scope_exclude || [],
    analyte_scope: { ...(base.analyte_scope || {}), ...(sub.analyte_scope || {}) },
    read_across: { ...(base.read_across || {}), ...(sub.read_across || {}) },
    feed_floor: { ...(config.default_feed_floor || {}), ...(base.feed_floor || {}), ...(sub.feed_floor || {}) },
    analog_label: sub.analog_label || base.analog_label || "nearest human-food analog",
  }
}

// --- feed-floor disclosure ----------------------------------------------------
// Look up each configured feed-law source_id and return {jurisdiction, value, scope, status}.
// Disclosure only: the feed floor is never compared to or allowed to select the standard.
function feedFloorFor(sub, analyte) {
  const ids = (sub.feed_floor && sub.feed_floor[analyte]) || []
  const rows = ids.map((id) => byId.get(id)).filter(Boolean)
  if (!rows.length) return null
  return rows.map((r) => ({
    jurisdiction: r.jurisdiction,
    value: num(r.value_ug_kg),
    id: r.regulatory_limit_id,
    scope: r.product_scope,
    instrument: r.status && DRAFT.test(r.status) ? "draft feed guidance" : "feed maximum level",
    status: r.status,
  })).sort((a, b) => (a.value ?? Infinity) - (b.value ?? Infinity))
}

// --- per-cell resolution ------------------------------------------------------
// Scan the HUMAN-FOOD ANALOG scope for the strictest sovereign ML; relabel as human-grade
// read-across (never gov). Fall back to a configured control / not-material / source_id cell.
function resolveCell(sub, analyte) {
  const analyteScope = (sub.analyte_scope && sub.analyte_scope[analyte]) || {}
  const inc = [...sub.scope_include, ...(analyteScope.include || [])]
  const exc = [...(sub.scope_exclude || []), ...(analyteScope.exclude || [])]
  const feed_floor = feedFloorFor(sub, analyte)

  const rows = register.filter((r) => {
    if (analyteOf(r.metal_species) !== analyte) return false
    if (DRAFT.test(r.status)) return false
    if (QUARANTINE.test(r.status)) return false
    if (PESTICIDE.test(r.status)) return false
    if (FEED.test(r.basis || "")) return false // the human-grade guard: feed rows can never be selected
    if (!sub.canned && CANNED.test(r.product_scope)) return false
    if (!scopeMatch(r.product_scope, inc, exc)) return false
    // Basis discipline is enforced by PROFILE FOOD-GROUP SELECTION, not by the register's noisy
    // basis_class tag. A dry (as_sold) product's profile scans only dry human food groups (cereals,
    // pulses, tubers); a wet (as_consumed) product's profile scans only wet food groups (meat, fish,
    // liquid milk). The strictest analog ML is taken at face value on the as-marketed basis, with no
    // wet/dry conversion — consistent with Method v2.0's single legislated conversion. The tag itself
    // is unreliable (e.g. wet fish MLs are variously tagged as_sold or blank), so filtering on it
    // wrongly drops the strictest legitimate rows; profile design already guarantees basis cleanliness.
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
  const candidates = [...perJur.values()].sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  let direct = candidates.length ? candidates[0] : null
  const perCountry = Object.fromEntries(candidates.map((c) => [c.jur, { value: roundDisplay(c.value), converted: false, id: c.id }]))

  const ra = (sub.read_across || {})[analyte]

  // OVERRIDE determinations win regardless of any scan hit. Reserved for analytes that are
  // determinations by nature, not limits: Cr-VI (a measurement artifact that reduces to Cr-III in
  // the matrix) and tin on a non-canned product (a packaging-migration analyte with no intrinsic
  // pathway). `override: true` says "this is a control/not-material determination even if a stray
  // human-food row scope-matches."
  if (ra && ra.override && ra.not_material) {
    return { type: "not_material", value: null, control: ra.control || "not material", reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, feed_floor }
  }
  if (ra && ra.override && ra.control_only) {
    return { type: "control", value: null, control: ra.control || "no sovereign human-food maximum; mandatory surveillance control", reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, feed_floor }
  }

  // Human-grade read-across from the strictest human-food analog ML found by the scan.
  // A named sovereign source on the subcategory (ra.source_id) is a comparator against the profile scan: the
  // stricter of the two binds, so a hand-anchored tighter analog is never loosened by a looser scan hit.
  if (direct && ra && ra.source_id && !ra.override) {
    const srcC = byId.get(ra.source_id)
    const rawC = srcC ? num(srcC.value_ug_kg) : null
    if (rawC != null && rawC < direct.value) direct = null
  }
  if (direct) {
    return {
      type: "read_across",
      human_grade: true,
      value: roundDisplay(direct.value),
      value_exact: direct.value,
      source_id: direct.id,
      source_jurisdiction: direct.jur,
      analog_label: sub.analog_label,
      analog_scope: direct.scope,
      label: `Human-grade read-across: the strictest human-food sovereign maximum level for the ${sub.analog_label} (${direct.jur}, ${direct.value} µg/kg, ${sub.native_basis === "as_sold" ? "as sold" : "as consumed"} basis). Pet food is legally governed by feed law${feed_floor && feed_floor.length ? ` (feed floor ${feed_floor[feed_floor.length - 1].value} µg/kg)` : ""}; HMTc voluntarily certifies to the stricter human-food limit.`,
      basis_note: "human-grade read-across (voluntary over-compliance; feed floor disclosed, never selected)",
      per_country: perCountry,
      feed_floor,
    }
  }

  // No human-food analog ML and no scan hit: honest fallback via a named sovereign source_id
  // read-across (e.g. milk-replacer aluminium from the AU-NZ infant-formula ML), else a control.
  if (ra && ra.source_id) {
    const src = byId.get(ra.source_id)
    if (!src) return { type: "gap", value: null, error: `read_across source_id ${ra.source_id} not in register`, feed_floor }
    const raw = num(src.value_ug_kg)
    if (raw != null) {
      return {
        type: "read_across",
        human_grade: true,
        value: roundDisplay(raw),
        value_exact: raw,
        source_id: ra.source_id,
        source_jurisdiction: src.jurisdiction,
        analog_label: ra.analog_label || sub.analog_label,
        analog_scope: src.product_scope,
        label: ra.label || `Human-grade read-across from ${src.jurisdiction} ${roundDisplay(raw)} µg/kg (${src.product_scope}).`,
        basis_note: "human-grade read-across (named sovereign source; feed floor disclosed, never selected)",
        per_country: perCountry,
        feed_floor,
      }
    }
  }

  // Fallback determinations (no analog ML found): a mandatory-testing control where the nearest
  // human food is unregulated for the analyte, or a gated not-material determination.
  if (ra && ra.not_material) {
    return { type: "not_material", value: null, control: ra.control || "not material", reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, feed_floor }
  }
  if (ra && ra.control_only) {
    return { type: "control", value: null, control: ra.control || "no sovereign human-food maximum; mandatory surveillance control", reference_method: ra.reference_method || null, bounded_by: ra.bounded_by || null, feed_floor }
  }

  return { type: "gap", value: null, error: `no human-food analog ML found and no control/read-across configured for ${analyte}`, feed_floor }
}

// --- mercury speciation reconciliation (MeHg <= tHg) --------------------------
function reconcileMercurySpeciation(cells) {
  const t = cells.tHg
  const m = cells.MeHg
  if (!t || !m) return
  const tv = typeof t.value_exact === "number" ? t.value_exact : typeof t.value === "number" ? t.value : null
  const mv = typeof m.value_exact === "number" ? m.value_exact : typeof m.value === "number" ? m.value : null
  if (tv == null || mv == null) return
  if (mv >= tv) {
    cells.MeHg = {
      type: "subsumed",
      value: null,
      subsumed_by: "tHg",
      binding_tHg: t.value,
      binding_tHg_source: t.source_jurisdiction || t.binding_jurisdiction || null,
      label: `Methylmercury is a component of total mercury (MeHg ≤ tHg). No human-food analog sets a methylmercury limit below the binding total-mercury read-across (${t.value} µg/kg), so methylmercury is governed by and bounded by the total-mercury ceiling; no separate methylmercury ceiling is published.`,
      candidate: { type: m.type, value: m.value, source_jurisdiction: m.source_jurisdiction || null, source_id: m.source_id || null },
      feed_floor: m.feed_floor || null,
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
    native_basis: sub.native_basis,
    canned: !!sub.canned,
    human_grade: true,
    analog_label: sub.analog_label,
    feed_law_note: sub.feed_law_note || config.feed_law_note || "Legally governed by feed law (EU Directive 2002/32, FDA CVM guidance, AAFCO model regulations); HMTc certifies to the stricter human-food sovereign maximum by choice.",
    variants: {},
    generated_from: "data/evidence/regulatory_limits.csv",
    method: "HMTc Method v2.0 — human-grade over-compliance: strictest human-food analog ML by lookup; feed floor disclosed, never selected",
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
    if (tv == null || !c || !(c.type === "control" || c.type === "not_material" || c.type === "gap" || c.error)) continue
    cells[sp] = { type: "subsumed", provenance: "subsumed", value: null, subsumed_by: tot, bounded_by: tot, binding_total: tv, basis_class: "speciation-bounded", adult_floor: c.adult_floor,
      rationale: `${spName} is a component of ${totName} (${sp} <= ${tot}). No in-force sovereign sets a separate ${sp} maximum level for this product on its basis, so ${spName.toLowerCase()} is governed by and bounded by the ${totName} ceiling (${tv} ug/kg); no separate ${sp} ceiling is published. ${sp} is speciated whenever ${tot} exceeds its reflex trigger.` }
  }
  stampProvenance(cells, sub) // one provenance vocabulary (lib/provenance.mjs, Phase A5)
  record.variants.both = cells
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))
  summary.push(record)

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}  (native: ${sub.native_basis}; analog: ${sub.analog_label})`)
    for (const a of PANEL) {
      const c = cells[a]
      const v = c.value == null ? (["not_material", "control", "subsumed"].includes(c.type) ? c.type : "GAP") : String(c.value)
      const src = c.type === "read_across" ? `RA ${c.source_jurisdiction}` : c.type
      const ff = c.feed_floor && c.feed_floor.length ? ` [feed floor ${c.feed_floor[c.feed_floor.length - 1].value}]` : ""
      console.log(`    ${a.padEnd(6)} ${v.padStart(8)}   ${src}${ff}`)
    }
  }
}
if (!QUIET) console.log(`\nwrote ${summary.length} record(s) to ${path.relative(REPO, OUTDIR)}/`)
