#!/usr/bin/env node
// Category-25 (Cannabis, Hemp, and CBD Products) standard COMPILER — HMTc Method v2.0, route-preserving.
//
// Cannabis is NOT a food category and has NO uniform federal contaminant limit. Its limits are the
// heavy-metal action levels set by individual sovereign cannabis programs (US states + Israel), and
// those programs split their limits BY ROUTE OF USE (inhaled vs ingested vs topical). The single
// load-bearing rule here is that ROUTE BASIS IS NEVER CONFLATED: an inhalation-route action level is
// never applied to an ingested or topically-applied product, and vice-versa. A naive strictest-across-
// all-cannabis-rows min() (the food compiler's model) would apply the very strict inhaled arsenic/
// cadmium action levels (200 ug/kg) to an edible or a topical, which those programs never intended.
//
// Method, per (subcategory, analyte) — a LOOKUP (Method v2.0), never an occurrence percentile:
//   The config (tools/standards/cat25-config.json) names EXPLICITLY the applicable sovereign cannabis
//   maximums for each cell as a set of register-row ids. The applicable pool for a row is the route-
//   agnostic all-uses cannabis rules PLUS that row's own route-specific rules. Resolution kinds:
//     gov_ids     -> strictest (min) over the named register rows is the HMTc value (regulatory-alignment).
//     read_across -> a sovereign value from an analogous route, disclosed (e.g. inhalation total-Cr
//                    applied route-protectively to the multi-route concentrates row).
//     control     -> a mandatory total-panel surveillance result with no protective sovereign maximum
//                    (Ni/Sn/Al everywhere; total-Cr on oral/topical rows), or a species control bounded
//                    by its total (iAs<-tAs, MeHg<-tHg, Cr-VI<-Cr). No number; not a defect.
//   Provenance vocabulary is fixed: regulatory-alignment | read-across | not-material | control | ratchet.
//   Occurrence never selects a value.
//
// AUDIT SAFETY-NET (route-conflation guard): for every numeric cell the compiler scans EVERY cannabis
// register row for that analyte and finds any row STRICTER than the published value. Because the published
// value is the min of the cell's gov_ids, a stricter row is necessarily one that was NOT selected — it must
// be listed in the cell's audit_excluded_ids (a documented, route-based exclusion). Any stricter cannabis
// row that is neither selected nor acknowledged is a DEFECT. This makes every route exclusion explicit and
// auditable by register id (unambiguous), rather than by fragile prose-scope regex.
//
// VAPE HARDWARE (row 6) is intentionally NOT compiled. Its governing quantity is metal RELEASE into
// inhaled aerosol (coil leaching), not total product content; a ug/kg content limit misrepresents the
// hazard basis. The aerosol-release architecture is a reserved governance decision (config.reserved,
// docs/governance/category-25-step0-lock.md). The compiler emits a reserved record for it, no value.
//
// FIREWALL: numeric outputs are STAFF/HMTc content and land under data/workbench/standards/, never in
// wiki/ or on the heavymetalindex.com public domain (CLAUDE.md Part 19).
//
// Output: one JSON record per subcategory + one reserved record for vape hardware, to <outdir>, plus a
// human-readable derive/audit/verify report on stdout. Deterministic (no wall-clock in output).
// Usage: node tools/standards/compile-cat25.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]
// Exit code is non-zero if the verify pass finds any defect (unresolved cell, dead register id,
// disallowed provenance, or an unacknowledged stricter cannabis limit).

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat25-compiled")
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat25-config.json")
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
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
const CANNABIS = /cannabis|marijuana/i

const register = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel
const ALLOWED_PROVENANCE = new Set(config.allowed_provenance || ["regulatory-alignment", "read-across", "not-material", "control", "ratchet"])
const JUR_PRIORITY = config.jur_priority || []
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }

// analyte a cannabis register row supplies, normalised to the Cat-25 panel. Cannabis programs load
// arsenic and mercury as TOTAL element (tAs/tHg) — they set no speciated action level — and chromium
// as Cr-total. iAs, MeHg, Cr-VI, Ni, Sn, and Al have no cannabis register row (all handled as controls).
function analyteOf(metal) {
  const m = (metal || "").trim()
  if (["Pb", "tAs", "Cd", "tHg"].includes(m)) return m
  if (m === "Cr-total" || m === "Cr") return "Cr"
  return null
}

// every live cannabis register row for an analyte (non-draft, non-quarantined, numeric value present)
function cannabisRowsFor(analyte) {
  const out = []
  for (const r of register) {
    if (!CANNABIS.test(`${r.product_scope || ""} ${r.regulation_page || ""} ${r.regulatory_limit_id || ""}`)) continue
    if (analyteOf(r.metal_species) !== analyte) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    out.push({ id: r.regulatory_limit_id, value: v, jur: r.jurisdiction, scope: r.product_scope, page: r.regulation_page, basis: r.basis, notes: r.notes })
  }
  return out
}

function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  if (x >= 0.01) return Math.round(x * 1000) / 1000
  return x
}

// resolve a set of register ids to the strictest (min) value; validate each exists and is not gated.
function resolveIds(ids) {
  const rows = []
  for (const id of ids) {
    const r = byId.get(id)
    if (!r) return { error: `id ${id} not in register` }
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) continue
    const v = num(r.value_ug_kg)
    if (v == null) continue
    rows.push({ id, value: v, jur: r.jurisdiction, basis: r.basis, page: r.regulation_page, notes: r.notes })
  }
  if (!rows.length) return { error: `no live value among [${ids.join(", ")}]` }
  rows.sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  const binding = rows[0]
  const minV = binding.value
  const concurring = [...new Set(rows.filter((r) => r.value === minV).map((r) => r.jur))]
  return {
    value: minV, binding_id: binding.id, binding_jurisdiction: binding.jur, basis: binding.basis,
    controlling_instrument: binding.page || "",
    concurring_jurisdictions: concurring,
    candidates: rows.map((r) => ({ id: r.id, value: roundDisplay(r.value), jurisdiction: r.jur })),
    not_detectable: /not detectable|non[- ]?detect|<\s*LOD/i.test(binding.notes || "") || undefined,
  }
}

// stricter-than-published cannabis rows that were NOT selected. Each must be acknowledged in the cell's
// audit_excluded_ids (documented route exclusion) or it is an unacknowledged-stricter DEFECT.
function auditStricter(analyte, publishedValue, govIds, excludedIds) {
  const inPool = new Set(govIds || [])
  const acknowledged = new Set(excludedIds || [])
  const ack = [], unack = []
  for (const r of cannabisRowsFor(analyte)) {
    if (inPool.has(r.id)) continue
    if (!(r.value < publishedValue * 0.9999)) continue
    const rec = { id: r.id, value: roundDisplay(r.value), jurisdiction: r.jur, scope: r.scope }
    if (acknowledged.has(r.id)) ack.push(rec); else unack.push(rec)
  }
  return { acknowledged: ack, unacknowledged: unack }
}

// screening-ceiling passthrough. A numeric cell may be flagged a screen: the value is recorded (a real
// sovereign number, method-faithful and lossless) but it is NOT a health limit — a benign-species screen
// whose binding health control is named separately (e.g. total Cr is a screen; Cr(VI) is the health limit).
function screenFields(spec) {
  if (!spec || !spec.screen) return {}
  return { screen: true, screen_note: spec.screen_note || "screening ceiling, not a health limit", binding_control: spec.binding_control || null }
}

function controlCell(spec, analyte) {
  const d = (config.default_controls || {})[analyte] || {}
  return {
    provenance: "control",
    value: null,
    control: spec.control || d.control || null,
    reference_method: spec.reference_method || d.reference_method || null,
    bounded_by: spec.bounded_by !== undefined ? spec.bounded_by : (d.bounded_by ?? null),
  }
}

function resolveCell(sub, analyte, defects) {
  const spec = (sub.cells || {})[analyte]

  // explicit control cell
  if (spec && spec.control !== undefined) return controlCell(spec, analyte)

  // read-across (disclosed value from an analogous route)
  if (spec && spec.read_across) {
    const src = byId.get(spec.read_across.source_id)
    if (!src) { defects.push(`${sub.slug}/${analyte}: read_across source ${spec.read_across.source_id} not in register`); return { provenance: "read-across", value: null, error: "dead source_id" } }
    if (DRAFT.test(src.status) || QUARANTINE.test(src.status)) defects.push(`${sub.slug}/${analyte}: read_across source ${spec.read_across.source_id} is gated (${src.status})`)
    const v = num(src.value_ug_kg)
    const stricter = v == null ? { acknowledged: [], unacknowledged: [] } : auditStricter(analyte, v, [spec.read_across.source_id], spec.audit_excluded_ids)
    for (const s of stricter.unacknowledged) defects.push(`${sub.slug}/${analyte}: UNACKNOWLEDGED stricter cannabis limit ${s.id} (${s.value}, ${s.jurisdiction}) < read-across ${roundDisplay(v)} — add to gov_ids or audit_excluded_ids`)
    return {
      provenance: spec.provenance || "read-across",
      value: roundDisplay(v), value_exact: v, unit: "ug/kg", basis: sub.native_basis,
      source_id: spec.read_across.source_id, source_jurisdiction: src.jurisdiction,
      controlling_instrument: src.regulation_page || "",
      label: spec.read_across.label || `read-across from ${src.jurisdiction}`,
      audit_excluded: stricter.acknowledged.length ? { reason: sub.route_exclusion_reason || "route-based exclusion", rows: stricter.acknowledged } : undefined,
      ...screenFields(spec),
    }
  }

  // government-limit lookup (strictest applicable sovereign cannabis maximum)
  if (spec && spec.gov_ids) {
    const r = resolveIds(spec.gov_ids)
    if (r.error) { defects.push(`${sub.slug}/${analyte}: ${r.error}`); return { provenance: "regulatory-alignment", value: null, error: r.error } }
    const stricter = auditStricter(analyte, r.value, spec.gov_ids, spec.audit_excluded_ids)
    for (const s of stricter.unacknowledged) defects.push(`${sub.slug}/${analyte}: UNACKNOWLEDGED stricter cannabis limit ${s.id} (${s.value}, ${s.jurisdiction}) < published ${roundDisplay(r.value)} — add to gov_ids or audit_excluded_ids`)
    return {
      provenance: spec.provenance || "regulatory-alignment",
      value: roundDisplay(r.value), value_exact: r.value, unit: "ug/kg", basis: sub.native_basis,
      binding_jurisdiction: r.binding_jurisdiction, binding_id: r.binding_id,
      controlling_instrument: r.controlling_instrument,
      concurring_jurisdictions: r.concurring_jurisdictions,
      candidates: r.candidates,
      audit_excluded: stricter.acknowledged.length ? { reason: sub.route_exclusion_reason || "route-based exclusion", rows: stricter.acknowledged } : undefined,
      not_detectable: r.not_detectable,
      ...screenFields(spec),
    }
  }

  // no cell spec: fall back to a default control if one is defined for this analyte
  if ((config.default_controls || {})[analyte]) return controlCell({}, analyte)

  defects.push(`${sub.slug}/${analyte}: no config for this cell and no default control`)
  return { provenance: "unresolved", value: null, error: "no cell spec" }
}

// --- drive --------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const allSlugs = Object.keys(config.subcategories)
const slugs = only.length ? only : allSlugs
const defects = []
const written = []

for (const slug of slugs) {
  const sub = config.subcategories[slug]
  if (!sub) { defects.push(`no config for ${slug}`); console.error(`!! no config for ${slug}`); continue }
  sub.slug = slug
  const cells = {}
  for (const a of PANEL) {
    const c = resolveCell(sub, a, defects)
    if (c.provenance && !ALLOWED_PROVENANCE.has(c.provenance) && c.provenance !== "unresolved")
      defects.push(`${slug}/${a}: disallowed provenance '${c.provenance}'`)
    cells[a] = c
  }
  const record = {
    slug, name: sub.name, category: 25, category_name: config.category_name,
    row: sub.row, route: sub.route, native_basis: sub.native_basis,
    route_basis_label: sub.route_basis_label, scope_note: sub.scope_note || null,
    version: config.version, version_date: config.version_date,
    method: config.method,
    generated_from: "data/evidence/regulatory_limits.csv",
    config: path.relative(REPO, CONFIG_PATH),
    cells,
  }
  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))
  written.push({ slug, record })
}

// reserved rows (vape hardware) — emitted so the six-row set is complete and downstream tools see the
// reservation explicitly rather than as a silent gap.
if (!only.length) {
  for (const [slug, res] of Object.entries(config.reserved || {})) {
    const record = {
      slug, name: res.name, category: 25, category_name: config.category_name, row: res.row,
      status: "reserved", value: null, method: "reserved — no numeric standard set",
      version: config.version, version_date: config.version_date,
      reason: res.reason,
      governing_basis_when_unreserved: res.governing_basis_when_unreserved || null,
      reserved_by: res.reserved_by || "docs/governance/category-25-step0-lock.md",
    }
    fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))
    written.push({ slug, record, reserved: true })
  }
}

// --- derive / audit / verify report ------------------------------------------
if (!QUIET) {
  for (const { slug, record, reserved } of written) {
    if (reserved) {
      console.log(`\n### ${slug} — ${record.name}  [RESERVED, row ${record.row}]`)
      console.log(`    reason: ${record.reason.slice(0, 120)}...`)
      continue
    }
    console.log(`\n### ${slug} — ${record.name}  [row ${record.row}, route: ${record.route}]`)
    console.log(`    basis: ${record.route_basis_label}`)
    for (const a of PANEL) {
      const c = record.cells[a]
      let v
      if (c.value == null) v = c.provenance === "control" ? "control" : c.error ? "ERR" : "—"
      else v = c.not_detectable ? `ND<${c.value}` : String(c.value)
      const src = c.provenance === "regulatory-alignment" ? `${c.binding_jurisdiction} [${c.provenance}]`
        : c.provenance === "read-across" ? `RA ${c.source_jurisdiction} [${c.provenance}]`
        : `[${c.provenance}]`
      const conc = c.concurring_jurisdictions && c.concurring_jurisdictions.length > 1 ? `  (concur: ${c.concurring_jurisdictions.join(",")})` : ""
      const excl = c.audit_excluded ? `  {excl ${c.audit_excluded.rows.length}: ${c.audit_excluded.rows.map((r) => r.jurisdiction + " " + r.value).join(", ")}}` : ""
      const scr = c.screen ? "  SCREEN(Cr-VI binds)" : ""
      console.log(`    ${a.padEnd(6)} ${v.padStart(9)}   ${src}${conc}${scr}${excl}`)
    }
  }
}

const numericCount = written.filter((w) => !w.reserved).reduce((n, w) => n + PANEL.filter((a) => w.record.cells[a].value != null).length, 0)
const controlCount = written.filter((w) => !w.reserved).reduce((n, w) => n + PANEL.filter((a) => w.record.cells[a].provenance === "control").length, 0)

console.log(`\n=== VERIFY ===`)
console.log(`rows compiled: ${written.filter((w) => !w.reserved).length}  reserved: ${written.filter((w) => w.reserved).length}`)
console.log(`numeric cells: ${numericCount}  control cells: ${controlCount}`)
if (defects.length) {
  console.log(`\nDEFECTS (${defects.length}):`)
  for (const d of defects) console.log(`  !! ${d}`)
  console.error(`\nFAIL — fix config/register before publishing`)
  process.exit(1)
}
console.log(`PASS — every cell resolves to a named sovereign register row or a substantiated control; no unacknowledged stricter cannabis limit; provenance vocabulary valid; occurrence selected nothing.`)
console.log(`\nwrote ${written.length} record(s) to ${path.relative(REPO, OUTDIR)}/`)
