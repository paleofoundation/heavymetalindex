#!/usr/bin/env node
// audit-compiled-standards.mjs — deterministic publication gate for compiled HMTc standard records.
//
// The compilers already refuse to emit an unresolved cell. This gate is the second, independent
// check: it re-opens every compiled record, re-reads data/evidence/regulatory_limits.csv, and
// verifies the published record against the register WITHOUT trusting the config, the compiler run,
// or any agent's report of what it did. It exists because "the build was green" means the build
// resolved, not that the standard is true.
//
// Checks (a FAIL blocks publication; a WARN is reported and must be dispositioned by a human or a
// derivation note):
//   C1  panel completeness      every canonical analyte present on every record
//   C2  no unresolved cells     no gap / unspecified cell survived into a record
//   C3  anchor existence        every binding/component/candidate id resolves to a register row
//   C4  anchor liveness         no anchor is draft, proposed, or quarantined
//   C5  value fidelity          the published value equals the strictest named anchor's register
//                               value (after the compiler's display rounding) — catches a number
//                               that drifted away from the instrument it cites
//   C6  species integrity       iAs never anchors tAs, MeHg never anchors tHg, Cr-VI never anchors
//                               total Cr, and vice versa
//   C7  not-material contract   basis_class in the substantiation-gate vocabulary, plus rationale,
//                               regulatory_basis, jurisdictions_checked; bounded_by when
//                               speciation-bounded
//   C8  control contract        a control names a reference method (a control without one is an
//                               unenforceable obligation)
//   C9  provenance vocabulary   only regulatory-alignment / read-across / not-material / control /
//                               ratchet — the retired occurrence tags must never appear
//   C10 basis disclosure        every numeric cell carries a basis string
//   W1  stricter-unselected     a SAME-BASIS credible-regulator row stricter than the binding was left
//                               unnamed (candidates outside the record's basis_guard are a different
//                               measured quantity, not a stricter limit, and are not warned on)
//   W2  no firm cells           a record publishes no numeric limit at all
//   W3  hollow control          a record has control cells but no component-level sampling plan
//
// Usage:
//   node tools/standards/audit-compiled-standards.mjs --dir=data/workbench/standards/cat11-compiled
//   node tools/standards/audit-compiled-standards.mjs --all          (every cat*-compiled dir)
//   node tools/standards/audit-compiled-standards.mjs --all --json   (machine-readable)

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const JSON_OUT = args.has("json")

const FULL_PANEL = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Sn", "Al", "Cr", "Cr-VI"]
const ALLOWED_PROVENANCE = new Set(["regulatory-alignment", "read-across", "not-material", "control", "ratchet"])
const RETIRED_PROVENANCE = /literature.baseline|precautionary|feasibility|occurrence|percentile|p\d{2}\b/i
const CLASS_VOCAB = new Set([
  "speciation-bounded", "method-artifact", "additive-permitted",
  "natural-accumulator", "no-migration-pathway", "refined-partition",
])
import { STATUS_GATE } from "./lib/register-gate.mjs"
const GATED_STATUS = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6, lib/register-gate.mjs)
// species that must never be substituted for their total-element parent, or the reverse
const SPECIES_OF = { iAs: "tAs", MeHg: "tHg", "Cr-VI": "Cr" }
const METAL_TOKEN = {
  Pb: /(^|_)pb(_|$)/i, Cd: /(^|_)cd(_|$)/i, tAs: /(^|_)tas(_|$)/i, iAs: /(^|_)ias(_|$)/i,
  tHg: /(^|_)(thg|hg)(_|$)/i, MeHg: /(^|_)mehg(_|$)/i, Ni: /(^|_)ni(_|$)/i,
  Sn: /(^|_)sn(_|$)/i, Al: /(^|_)al(_|$)/i, Cr: /(^|_)cr[_-]?(total)?(_|$)/i, "Cr-VI": /(^|_)cr-?vi(_|$)/i,
}

function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").trim().split("\n")
  const split = (line) => {
    const out = []; let cur = "", q = false
    for (const ch of line) {
      if (ch === '"') q = !q
      else if (ch === "," && !q) { out.push(cur); cur = "" }
      else cur += ch
    }
    out.push(cur); return out.map((s) => s.replace(/^"|"$/g, ""))
  }
  const head = split(lines[0])
  return lines.slice(1).map((l) => Object.fromEntries(split(l).map((v, i) => [head[i], v])))
}

const registerText = fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8")
const register = parseCsv(registerText)
const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))

// REGISTER INTEGRITY (C0). An unquoted comma inside a register field shifts every column after it.
// Because metal_species, value_ug_kg and basis sit early in the row, a shift usually leaves the
// published number correct while silently corrupting regulation_page, url, notes and basis_class —
// which is how 28 EU toy-migration rows came to carry a fragment of their own product_scope where
// their instrument slug belonged, and so cited no instrument at all. Values surviving is exactly what
// makes this class of defect quiet, so it is checked on every gate run rather than left to be noticed.
const registerDefects = []
{
  const lines = registerText.replace(/\r\n/g, "\n").trim().split("\n")
  const width = splitCsvLineCount(lines[0])
  for (let i = 1; i < lines.length; i++) {
    const n = splitCsvLineCount(lines[i])
    if (n !== width) registerDefects.push({ line: i + 1, fields: n, expected: width, id: lines[i].split(",")[0] })
  }
}
function splitCsvLineCount(line) {
  let n = 1, q = false
  for (const ch of line) {
    if (ch === '"') q = !q
    else if (ch === "," && !q) n++
  }
  return n
}

// The not-material substantiation contract may be satisfied in either of two places, because the
// compilers changed convention mid-programme: newer compilers propagate basis_class /
// regulatory_basis / jurisdictions_checked into the compiled record, while older ones leave the
// substantiation solely in data/evidence/standards-not-material.csv (the registry the build-blocking
// audit-not-material-substantiation gate actually reads). Check the record first, then fall back to
// the registry, so an older record is not reported unsubstantiated when its substantiation exists.
const nmRegistry = new Map()
{
  const nmPath = path.join(REPO, "data/evidence/standards-not-material.csv")
  if (fs.existsSync(nmPath)) {
    for (const r of parseCsv(fs.readFileSync(nmPath, "utf8"))) {
      nmRegistry.set(`${r.row_slug}|${r.metal_species}`, r)
    }
  }
}

// mirrors roundDisplay() in the compilers — the gate must compare like with like
function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null }

// A cell leans on register rows in two different ways, and conflating them produces false defects.
//
// BINDING ids are the rows the published number is taken from. They must be the cell's own analyte and
// must agree with the value (C5, C6).
//
// CONTEXT ids are disclosures, not sources. `companion_ml` on a control cell names a sovereign limit
// that governs a RELATED form or a bounding total — a control on inorganic arsenic legitimately cites
// the total-arsenic ceiling that bounds it by identity, and a control on tin in a non-canned form
// legitimately cites the canned-food tin ML. A different analyte or scope there is the whole point, so
// context ids are checked only for existence and liveness (C3, C4), never for species match or value.
function bindingIds(cell) {
  const ids = []
  if (cell.binding_id) ids.push(cell.binding_id)
  if (cell.source_id) ids.push(cell.source_id)
  for (const c of cell.components || []) if (c.source_id) ids.push(c.source_id)
  for (const c of cell.candidates || []) if (c.id) ids.push(c.id)
  return [...new Set(ids)]
}
function contextIds(cell) {
  return [...new Set([...(cell.companion_ml ? [cell.companion_ml] : []), ...(cell.companion_ids || [])])]
}
const anchorIds = (cell) => [...new Set([...bindingIds(cell), ...contextIds(cell)])]

function auditRecord(rec, file) {
  const fails = [], warns = []
  const F = (code, msg) => fails.push({ code, record: rec.slug, msg })
  const W = (code, msg) => warns.push({ code, record: rec.slug, msg })

  // Records come in two shapes: a flat `cells` object, or `variants` (a per-variant cells map, e.g.
  // soy/non-soy or powder/RTF splits). Audit every variant's cells under one record verdict.
  const variants = rec.variants && typeof rec.variants === "object" && !rec.cells ? rec.variants : { _: rec.cells || {} }
  const cells = Object.assign({}, ...Object.values(variants))

  // C1 panel completeness
  for (const a of FULL_PANEL) if (!(a in cells)) F("C1", `missing panel analyte ${a}`)

  let firm = 0
  for (const [analyte, cell] of Object.entries(cells)) {
    if (!cell || typeof cell !== "object") { F("C2", `${analyte}: empty cell`); continue }
    const type = cell.type || ""
    const prov = cell.provenance || ""

    // C2 no unresolved cells
    if (type === "gap" || type === "unspecified" || cell.error) {
      F("C2", `${analyte}: unresolved cell (${type}${cell.error ? `: ${cell.error}` : ""})`)
      continue
    }

    // C9 provenance vocabulary
    if (prov && !ALLOWED_PROVENANCE.has(prov)) F("C9", `${analyte}: provenance "${prov}" is not in the allowed vocabulary`)
    if (RETIRED_PROVENANCE.test(prov)) F("C9", `${analyte}: retired occurrence-selected provenance "${prov}"`)

    const numeric = cell.value != null
    if (numeric && (type === "gov" || type === "read_across" || type === "screen" || type === "form_split")) firm++

    // C3 / C4 anchor existence and liveness — every id, binding or context
    const binding = new Set(bindingIds(cell))
    for (const id of anchorIds(cell)) {
      const row = byId.get(id)
      if (!row) { F("C3", `${analyte}: anchor id "${id}" is not in the register`); continue }
      if (GATED_STATUS.test(row.status || "")) F("C4", `${analyte}: anchor "${id}" is gated (status="${row.status}")`)
      // A context disclosure is allowed to name another analyte's instrument; only a binding source
      // must match the cell's analyte.
      if (!binding.has(id)) continue

      // C6 species integrity — the binding row's metal must match the cell's analyte
      const rowMetal = (row.metal_species || "").trim()
      const norm = rowMetal === "Cr-total" ? "Cr" : rowMetal
      if (norm && norm !== analyte) {
        const parent = SPECIES_OF[analyte]
        const childOf = Object.entries(SPECIES_OF).find(([, p]) => p === analyte)?.[0]
        if (norm === parent || norm === childOf) {
          F("C6", `${analyte}: anchor "${id}" is a ${norm} limit — a species and its total-element parent are never interchangeable`)
        } else {
          F("C6", `${analyte}: anchor "${id}" is a ${norm} limit, not ${analyte}`)
        }
      }
      // id-token cross-check catches a mislabelled register row the metal column alone would miss
      const tok = METAL_TOKEN[analyte]
      if (tok && norm === analyte && !tok.test(id) && !/^[a-z0-9]+_[a-z0-9]+_/.test(id)) {
        W("C6", `${analyte}: anchor id "${id}" does not carry the analyte token`)
      }
    }

    // C5 value fidelity — the published number must equal the strictest named anchor
    if (numeric) {
      const named = bindingIds(cell)
        .filter((id) => byId.has(id) && !GATED_STATUS.test(byId.get(id).status || ""))
        .filter((id) => {
          const m = (byId.get(id).metal_species || "").trim()
          return (m === "Cr-total" ? "Cr" : m) === analyte
        })
        .map((id) => num(byId.get(id).value_ug_kg))
        .filter((v) => v != null)
      if (named.length) {
        const strictest = roundDisplay(Math.min(...named))
        if (strictest !== cell.value) {
          F("C5", `${analyte}: published ${cell.value} but the strictest named anchor is ${strictest} — the number does not match the instrument it cites`)
        }
      } else if (type !== "form_split") {
        F("C5", `${analyte}: publishes ${cell.value} with no resolvable register anchor for this analyte`)
      }
      // C10 basis disclosure
      // basis may be recorded as `basis`, `basis_label`, `basis_note` or `binding_basis` depending on
      // which compiler generation emitted the record; any one of them satisfies disclosure.
      if (!cell.basis && !cell.basis_label && !cell.basis_note && !cell.binding_basis)
        F("C10", `${analyte}: numeric cell carries no basis string`)
    }

    // C7 not-material contract
    if (type === "not_material" || prov === "not-material") {
      if (type === "subsumed") {
        // a compiler-reconciled species cell; the bound is stated on the record
      } else if (type === "not_material") {
        const reg = nmRegistry.get(`${rec.slug}|${analyte}`) || {}
        const where = cell.basis_class ? "record" : (reg.basis_class ? "registry" : "neither")
        const cls = cell.basis_class || reg.basis_class || ""
        const rationale = cell.rationale || reg.rationale || ""
        const regBasis = cell.regulatory_basis || reg.regulatory_basis || ""
        const juris = cell.jurisdictions_checked || reg.jurisdictions_checked || ""
        const bounded = cell.bounded_by || reg.bounded_by || ""
        if (!CLASS_VOCAB.has(cls)) F("C7", `${analyte}: not-material basis_class "${cls}" is not in the substantiation-gate vocabulary (checked ${where})`)
        if (!rationale) F("C7", `${analyte}: not-material with no rationale`)
        if (!regBasis) F("C7", `${analyte}: not-material with no regulatory_basis`)
        if (!juris) F("C7", `${analyte}: not-material with no jurisdictions_checked`)
        if (cls === "speciation-bounded" && !bounded) F("C7", `${analyte}: speciation-bounded not-material must name bounded_by`)
      }
    }

    // C8 control contract
    if (type === "control") {
      if (!cell.rationale) F("C8", `${analyte}: control with no rationale`)
      if (!cell.reference_method) F("C8", `${analyte}: control with no reference_method — an unenforceable obligation`)
    }

    // W1 stricter-unselected. Basis-aware: a candidate whose register basis falls outside the record's
    // own basis_guard is not a stricter anchor at all, it is a different measured quantity (an
    // element-migration or after-extraction value against a total-content ceiling). Warning on those
    // buries a genuine same-basis miss in noise, so they are skipped here exactly as the compiler now
    // skips them. Records compiled before `basis` was carried on the entry cannot be filtered and warn
    // as before.
    const recGuard = rec.basis_guard ? new RegExp(rec.basis_guard, "i") : null
    for (const s of cell.stricter_unselected || []) {
      if (recGuard && s.basis != null && !recGuard.test(s.basis)) continue
      W("W1", `${analyte}: stricter credible row left unnamed — ${s.value} µg/kg [${s.jurisdiction}] ${s.id} ("${s.scope}")`)
    }
  }

  if (firm === 0) W("W2", `record publishes no numeric limit (all control / not-material)`)

  // W3 hollow control — a control cell obliges "analysis of every accessible component", which is
  // unenforceable unless the record enumerates the components. Reported as a WARN rather than a FAIL
  // only because the pre-`components` compiler generation left this field off every record it emitted;
  // it flips to FAIL once every compiled dir has been rebuilt on a compiler that carries it.
  if (Object.values(cells).some((c) => c && c.type === "control") && !rec.components)
    W("W3", `record has control cells but carries no component-level sampling plan — the control obligation is unenforceable as published`)

  return { file, slug: rec.slug, category: rec.category, firm, fails, warns }
}

function auditDir(dir) {
  const abs = path.join(REPO, dir)
  if (!fs.existsSync(abs)) return { dir, error: "not found", records: [] }
  const records = []
  for (const f of fs.readdirSync(abs).sort()) {
    if (!f.endsWith(".json")) continue
    // `_`-prefixed files are compiler audit artifacts, not standard records
    if (f.startsWith("_")) continue
    let rec
    try { rec = JSON.parse(fs.readFileSync(path.join(abs, f), "utf8")) }
    catch (e) { records.push({ file: f, slug: f, fails: [{ code: "C0", record: f, msg: `unparseable: ${e.message}` }], warns: [], firm: 0 }); continue }
    if (!rec.slug) continue
    if (!rec.cells && !rec.variants) continue
    records.push(auditRecord(rec, f))
  }
  return { dir, records }
}

const dirs = args.has("all")
  ? fs.readdirSync(path.join(REPO, "data/workbench/standards"))
      .filter((d) => /^cat\d+-compiled$/.test(d) || /-compiled$/.test(d))
      .sort((a, b) => (parseInt(a.replace(/\D/g, ""), 10) || 0) - (parseInt(b.replace(/\D/g, ""), 10) || 0))
      .map((d) => `data/workbench/standards/${d}`)
  : [args.get("dir")].filter(Boolean)

if (!dirs.length) { console.error("audit-compiled-standards: --dir=<compiled dir> or --all required"); process.exit(2) }

const out = dirs.map(auditDir)
let totalFails = 0, totalWarns = 0, totalRecords = 0, totalFirm = 0
if (registerDefects.length) {
  totalFails += registerDefects.length
  if (!JSON_OUT) {
    console.log(`\n## data/evidence/regulatory_limits.csv — ${registerDefects.length} malformed row(s)`)
    for (const d of registerDefects.slice(0, 20)) {
      console.log(`   FAIL [C0] line ${d.line} :: ${d.fields} fields, expected ${d.expected} — unquoted comma shifts every later column ("${d.id}")`)
    }
    if (registerDefects.length > 20) console.log(`   ... ${registerDefects.length - 20} more`)
  }
}

if (JSON_OUT) {
  console.log(JSON.stringify(out, null, 2))
  for (const d of out) for (const r of d.records) { totalFails += r.fails.length; totalWarns += r.warns.length }
} else {
  for (const d of out) {
    if (d.error) { console.log(`\n## ${d.dir} — ${d.error}`); continue }
    const f = d.records.reduce((n, r) => n + r.fails.length, 0)
    const w = d.records.reduce((n, r) => n + r.warns.length, 0)
    const firm = d.records.reduce((n, r) => n + r.firm, 0)
    totalFails += f; totalWarns += w; totalRecords += d.records.length; totalFirm += firm
    console.log(`\n## ${d.dir} — ${d.records.length} record(s), ${firm} firm cell(s), ${f} FAIL, ${w} WARN`)
    for (const r of d.records) {
      for (const x of r.fails) console.log(`   FAIL [${x.code}] ${r.slug} :: ${x.msg}`)
      for (const x of r.warns) console.log(`   warn [${x.code}] ${r.slug} :: ${x.msg}`)
    }
  }
  console.log(`\n=== ${totalRecords} record(s) across ${out.length} dir(s): ${totalFirm} firm cells, ${totalFails} FAIL, ${totalWarns} WARN ===`)
}

// --all is a SURVEY across every compiled category, including older records built under earlier
// compiler conventions; it reports but does not block. Naming dirs explicitly (or passing --block)
// is the publication gate and exits non-zero on any FAIL.
const blocking = !args.has("all") || args.has("block")
process.exit(totalFails && blocking ? 1 : 0)
