#!/usr/bin/env node
// food-standards-engine.mjs — shared derive/audit engine for HMTc FOOD-category standard compilers
// (Method v2.0, government-limit default). Used by compile-cat33.mjs and compile-cat34.mjs.
//
// Design: every published cell traces to an EXPLICIT register row (a government-limit LOOKUP, not a
// computation). Occurrence NEVER selects a number. The engine is deterministic — numbers come only from
// data/evidence/regulatory_limits.csv, selected by an auditable per-cell config.
//
// Why explicit-id (like the Cat-9 compiler) rather than scope-based auto-min (Cat-1/Cat-3): the two
// categories this serves (Chocolate/Cocoa/Confectionery, Herbs/Spices/Salt) carry the highest public and
// litigation salience in the program (cocoa-Cd and lead-in-spices enforcement). Auto-min over the whole
// register mis-selects here in two structural ways a hostile expert would exploit:
//   (1) It collapses a LEGISLATED product-form split. EU Reg. 2023/915 sets cadmium in chocolate by
//       cocoa-solids content (100/300/800 ug/kg) and lead in spices by botanical part (600-2000 ug/kg);
//       taking the single strictest number would certify dark chocolate against a milk-chocolate ceiling
//       (indefensible). The `form_split` cell preserves the law's own split exactly.
//   (2) It leaks WRONG-BASIS / WRONG-PRODUCT rows: a fresh fruiting-vegetable Pb limit (50, incl. bell
//       pepper) is not a dried-pepper-spice limit; a 21 CFR 73 caramel-COLOUR purity spec is not a
//       caramel-CANDY food ML. Explicit ids + a scoped audit safety-net keep those out while still
//       surfacing any genuinely-stricter comparable sovereign limit for review.
//
// Cell resolution kinds (each maps to exactly one allowed provenance tag):
//   gov_ids     -> regulatory-alignment : strictest (min) over the named same-basis register ids.
//   form_split  -> regulatory-alignment : a legislated product-form split; each form resolves to its own
//                  register id(s); the cell publishes the full split, not a single number.
//   read_across -> read-across          : the nearest applicable sovereign value from another row/product,
//                  disclosed (used where the exact cell is unregulated but a defensible analog exists).
//   not_material-> not-material         : a substantiated, rebuttable determination that the analyte has
//                  no material pathway here (registered in standards-not-material.csv; evidence-tested).
//   control     -> control             : a screen with a stated method but no sovereign number to align to
//                  (analyte plausibly present via a minor/adulteration pathway, but unregulated).
// Retired tags (occurrence percentile, precautionary-without-basis, ratchet at initial publication) are
// forbidden by construction — the engine has no path that emits them.

import fs from "node:fs"
import path from "node:path"

// --- CSV ----------------------------------------------------------------------
export function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").trim().split("\n")
  const head = splitCsvLine(lines[0])
  return lines.slice(1).map((l) => Object.fromEntries(splitCsvLine(l).map((v, i) => [head[i], v])))
}
function splitCsvLine(line) {
  const out = []; let cur = "", q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch }
  }
  out.push(cur); return out
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null }

// --- status / basis gates (systemic; mirror compile-cat1.mjs) -----------------
import { stampProvenance, ALLOWED_PROVENANCE as CANON_ALLOWED } from "./provenance.mjs"
import { STATUS_GATE } from "./register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
const PESTICIDE = /pesticide|residue level/i
const FEED = /\bfeed\b/i
// Canned/tinplate in the register's source languages: tin migrates from the can, so those limits govern
// canned product only and must not bind a non-canned dry solid or bottled sauce.
const CANNED = /canned|tinplate|tin-plate|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i
// 21 CFR 73.x are colour-ADDITIVE purity specifications (an additive spec, not a food ML). A "Caramel;
// food use" Pb 10000 is the purity limit for the caramel COLOUR, not a limit for caramel CANDY. These
// must never bind a food subcategory. Matches the register's 21 CFR 73 rows and the analogous "colours on
// dry matter" additive-purity rows.
const COLOUR_ADDITIVE = /21\s?cfr\s?73|colour(s)? on dry matter|colours on dry matter|other colours|color additive|colour additive|; food use$/i

function analyteOf(metal) {
  const m = (metal || "").trim()
  if (["Pb", "iAs", "tAs", "tHg", "MeHg", "Cd", "Ni", "Sn", "Al"].includes(m)) return m
  if (m === "Cr" || m === "Cr-total") return "Cr"
  if (m === "Cr-VI") return "Cr-VI"
  return null
}

export function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 1000) / 1000
}

// Canonical order for naming the binding jurisdiction when limits tie at the strictest value. Includes
// every sovereign/regional regulator that appears in the register for these categories.
const JUR_PRIORITY = ["EU", "UK", "CODEX", "US", "CA", "AU-NZ", "FSANZ", "MERCOSUR", "GSO", "IL", "SG", "CO", "TH", "PY", "VN", "IN", "TT", "MA", "BA", "FJ", "MX", "KR", "international"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }
// A binding maximum level is a stronger citation than a non-binding guidance/action level. At an equal
// strictest value, name the binding law as the controlling instrument and carry guidance as concurrence.
const GUIDANCE_STATUS = /guidance|action level/i
const statusRank = (s) => (GUIDANCE_STATUS.test(s || "") ? 1 : 0)

const notDetectable = (notes) => /not detectable|non[- ]?detect|<\s*LOD|\bND\b/i.test(notes || "") || undefined

export function makeEngine(registerPath) {
  const register = parseCsv(fs.readFileSync(registerPath, "utf8"))
  const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))

  const gated = (r) => DRAFT.test(r.status) || QUARANTINE.test(r.status) || PESTICIDE.test(r.status) || FEED.test(r.basis || "")

  // resolve a set of ids to the strictest (min) live value; validate each exists and shares a basis.
  function resolveIds(ids) {
    const rows = []
    for (const id of ids) {
      const r = byId.get(id)
      if (!r) return { error: `id ${id} not in register` }
      if (gated(r)) continue
      const v = num(r.value_ug_kg)
      if (v == null) continue
      rows.push({ id, value: v, jur: r.jurisdiction, basis: r.basis, scope: r.product_scope, page: r.regulation_page, url: r.url, notes: r.notes, status: r.status })
    }
    if (!rows.length) return { error: `no live value among [${ids.join(", ")}]` }
    // strictest value first; at a tie, binding law before guidance, then canonical jurisdiction order.
    rows.sort((a, b) => (a.value - b.value) || (statusRank(a.status) - statusRank(b.status)) || (jurRank(a.jur) - jurRank(b.jur)))
    const b = rows[0]
    return {
      value: b.value, binding_id: b.id, binding_jurisdiction: b.jur, basis: b.basis,
      binding_page: b.page, binding_url: b.url, binding_scope: b.scope,
      concurring: rows.map((r) => ({ id: r.id, value: roundDisplay(r.value), jurisdiction: r.jur })),
      not_detectable: notDetectable(b.notes),
    }
  }

  // audit safety-net: any register row for THIS analyte matching audit_scope (and not excluded) that is
  // STRICTER than the binding value AND from a different instrument (regulation_page) is surfaced. Scope
  // and exclusions are per-subcategory so a wrong-basis / wrong-product row cannot false-flag.
  function auditScan(sub, analyte, binding, skipPages) {
    if (!sub.audit_scope || binding == null) return []
    const skip = skipPages instanceof Set ? skipPages : new Set(skipPages ? [skipPages] : [])
    const rx = new RegExp(sub.audit_scope, "i")
    const exclScope = sub.audit_exclude_scope ? new RegExp(sub.audit_exclude_scope, "i") : null
    const out = []
    for (const r of register) {
      if (analyteOf(r.metal_species) !== analyte) continue
      if (gated(r)) continue
      if (!sub.canned && CANNED.test(r.product_scope || "")) continue
      if (COLOUR_ADDITIVE.test(r.product_scope || "")) continue
      if (r.regulation_page && skip.has(r.regulation_page)) continue
      if (!rx.test(r.product_scope || "")) continue
      if (exclScope && exclScope.test(r.product_scope || "")) continue
      const v = num(r.value_ug_kg)
      if (v == null) continue
      if (v < binding * 0.9999) out.push({ id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, basis: r.basis, scope: r.product_scope })
    }
    return out.sort((a, b) => a.value - b.value)
  }

  function resolveCell(sub, analyte) {
    const spec = (sub.cells || {})[analyte]
    if (!spec) return { analyte, provenance: "gap", value: null, error: "no config for this cell" }

    if (spec.not_material) {
      const nm = spec.not_material
      return {
        // `type: "not_material"` keeps this cell schema-consistent with the other compilers
        // (cat27-32/cat9) so sync-not-material.mjs (which keys on cell.type) picks it up; without it
        // the engine's not-material cells were silently skipped by sync and could only ever be
        // appended (never updated) by the engine's own --sync path, which is how a stale basis_class drifts.
        analyte, type: "not_material", provenance: "not-material", value: null,
        // pass basis_class through unchanged; a missing/blank value must fail the substantiation gate
        // loudly (empty basis_class -> FAIL) rather than being papered over with an invalid default token.
        basis_class: nm.basis_class || "", bounded_by: nm.bounded_by || null,
        rationale: nm.rationale, reference_method: nm.reference_method || null,
        regulatory_basis: nm.regulatory_basis || null, jurisdictions_checked: nm.jurisdictions_checked || null,
      }
    }
    if (spec.control) {
      const c = spec.control
      return {
        analyte, provenance: "control", value: null,
        rationale: c.rationale, reference_method: c.reference_method || null,
        trigger: c.trigger || null,
      }
    }
    if (spec.read_across) {
      const ra = spec.read_across
      if (ra.value != null) {
        return { analyte, provenance: "read-across", value: roundDisplay(num(ra.value)), value_exact: num(ra.value), source_jurisdiction: ra.source_jurisdiction || null, source_scope: ra.source_scope || null, label: ra.label }
      }
      const src = byId.get(ra.source_id)
      if (!src) return { analyte, provenance: "gap", value: null, error: `read_across source_id ${ra.source_id} not in register` }
      const v = num(src.value_ug_kg)
      return { analyte, provenance: "read-across", value: roundDisplay(v), value_exact: v, source_id: ra.source_id, source_jurisdiction: src.jurisdiction, source_scope: src.product_scope, binding_page: src.regulation_page, binding_url: src.url, label: ra.label || `read-across from ${src.jurisdiction} (${src.product_scope})`, not_detectable: notDetectable(src.notes) }
    }
    if (spec.form_split) {
      const forms = []
      const citedPages = new Set()
      for (const f of spec.form_split.forms) {
        const r = resolveIds(f.gov_ids)
        if (r.error) { forms.push({ form: f.form, error: r.error }); continue }
        // record every cited id's page so the cell-level scan never re-flags a row this split already cites
        for (const id of f.gov_ids) { const p = byId.get(id)?.regulation_page; if (p) citedPages.add(p) }
        // optional per-form stricter-scan when a form declares its OWN product-class scope
        const stricter = f.audit_scope
          ? auditScan({ ...sub, audit_scope: f.audit_scope, audit_exclude_scope: f.audit_exclude_scope || sub.audit_exclude_scope }, analyte, r.value, r.binding_page)
          : []
        forms.push({
          form: f.form, value: roundDisplay(r.value), value_exact: r.value,
          binding_jurisdiction: r.binding_jurisdiction, binding_id: r.binding_id,
          binding_page: r.binding_page, binding_url: r.binding_url, not_detectable: r.not_detectable,
          concurring: r.concurring, stricter_unselected: stricter,
        })
      }
      const live = forms.filter((f) => f.value_exact != null)
      const strictest = live.length ? Math.min(...live.map((f) => f.value_exact)) : null
      const loosest = live.length ? Math.max(...live.map((f) => f.value_exact)) : null
      // CELL-LEVEL SAFETY-NET (whole-register, not just named ids): scan the subcategory scope for any
      // same-analyte sovereign row STRICTER than the loosest form and NOT already cited by this split.
      // This is the check whose absence let an EU high-cocoa cadmium value (looser than a cited MERCOSUR
      // row) pass unflagged in an earlier build — a stricter sovereign applicable to a sub-form now surfaces.
      const cellStricter = (loosest != null) ? auditScan(sub, analyte, loosest, citedPages) : []
      return {
        analyte, provenance: "regulatory-alignment", cell_kind: "form_split",
        basis: spec.form_split.basis, instrument: spec.form_split.instrument || null,
        forms, strictest_form_value: strictest == null ? null : roundDisplay(strictest),
        stricter_unselected: cellStricter,
        value: null, // a form_split has no single headline value; certification uses the matching form
      }
    }
    if (spec.gov_ids) {
      const r = resolveIds(spec.gov_ids)
      if (r.error) return { analyte, provenance: "gap", value: null, error: r.error }
      const stricter = auditScan(sub, analyte, r.value, r.binding_page)
      return {
        analyte, provenance: "regulatory-alignment", cell_kind: "gov", value: roundDisplay(r.value), value_exact: r.value,
        binding_jurisdiction: r.binding_jurisdiction, binding_id: r.binding_id, basis: spec.basis_label || r.basis,
        binding_page: r.binding_page, binding_url: r.binding_url, not_detectable: r.not_detectable,
        concurring: r.concurring, stricter_unselected: stricter,
      }
    }
    return { analyte, provenance: "gap", value: null, error: "unrecognised cell spec" }
  }

  function compile(config, { only = [] } = {}) {
    const PANEL = config.panel
    const slugs = only.length ? only : Object.keys(config.subcategories)
    const records = []
    for (const slug of slugs) {
      const sub = config.subcategories[slug]
      if (!sub) { records.push({ slug, error: "no config for slug" }); continue }
      const cells = {}
      for (const a of PANEL) cells[a] = resolveCell(sub, a)
      stampProvenance(cells) // one provenance vocabulary (lib/provenance.mjs, Phase A5)
      records.push({
        slug, name: sub.name, category: config.category, category_name: config.category_name,
        native_basis: sub.native_basis, native_basis_label: sub.native_basis_label,
        canned: !!sub.canned, scope_note: sub.scope_note || null, cells,
        method: config.method, generated_from: path.basename(registerPath),
      })
    }
    return records
  }

  return { register, byId, resolveCell, compile, auditScan, resolveIds, PANEL_HELP: analyteOf }
}

// --- CLI: derive -> audit -> verify (shared by compile-cat33.mjs / compile-cat34.mjs) -------------
// argv flags: --only=slug1,slug2  --outdir=path  --config=path  --sync-not-material  --quiet
export function runCli({ repo, configPath, defaultOutdir }) {
  const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
  const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
  const outdir = args.get("outdir") || defaultOutdir
  const cfgPath = args.get("config") || configPath
  const quiet = args.has("quiet")
  const sync = args.has("sync-not-material")

  const config = JSON.parse(fs.readFileSync(cfgPath, "utf8"))
  const registerPath = path.join(repo, "data/evidence/regulatory_limits.csv")
  const engine = makeEngine(registerPath)
  const PANEL = config.panel

  // DERIVE
  fs.mkdirSync(outdir, { recursive: true })
  const records = engine.compile(config, { only })
  for (const rec of records) fs.writeFileSync(path.join(outdir, `${rec.slug}.json`), JSON.stringify(rec, null, 2))

  // AUDIT
  const { text, defects, warnings } = reportAndAudit(records, PANEL)
  if (!quiet) {
    console.log(`\n=== Category ${config.category} — ${config.category_name} — DERIVE -> AUDIT ===`)
    console.log(text)
  }

  // VERIFY: provenance-tag legality, cell coverage, form_split id integrity, not-material registration.
  const ALLOWED = CANON_ALLOWED // lib/provenance.mjs is the vocabulary of record
  const verify = { illegal_tags: [], gaps: [], unregistered_not_material: [], forms_with_errors: [] }
  const nmRegPath = path.join(repo, "data/evidence/standards-not-material.csv")
  const nmReg = fs.existsSync(nmRegPath) ? parseCsv(fs.readFileSync(nmRegPath, "utf8")) : []
  const nmSet = new Set(nmReg.map((r) => `${r.row_slug}|${r.metal_species}`))
  const toRegister = []
  for (const rec of records) {
    if (rec.error) continue
    for (const a of PANEL) {
      const c = rec.cells[a]
      if (!c) continue
      if (c.provenance === "gap") verify.gaps.push(`${rec.slug}|${a}: ${c.error || "gap"}`)
      else if (!ALLOWED.has(c.provenance)) verify.illegal_tags.push(`${rec.slug}|${a}: ${c.provenance}`)
      if (c.cell_kind === "form_split") for (const f of c.forms) if (f.error) verify.forms_with_errors.push(`${rec.slug}|${a}|${f.form}: ${f.error}`)
      if (c.provenance === "not-material" && !nmSet.has(`${rec.slug}|${a}`)) {
        verify.unregistered_not_material.push(`${rec.slug}|${a}`)
        toRegister.push({ rec, analyte: a, cell: c })
      }
    }
  }

  // optional: append newly-determined not-material rows to the substantiation registry
  let synced = 0
  if (sync && toRegister.length) {
    const q = (s) => /[",\n]/.test(s) ? '"' + String(s).replace(/"/g, '""') + '"' : String(s)
    const cols = ["row_slug", "metal_species", "basis_class", "bounded_by", "rationale", "regulatory_basis", "jurisdictions_checked", "cross_sourced", "date"]
    let txt = fs.readFileSync(nmRegPath, "utf8")
    if (!txt.endsWith("\n")) txt += "\n"
    for (const { rec, analyte, cell } of toRegister) {
      const row = {
        row_slug: rec.slug, metal_species: analyte, basis_class: cell.basis_class || "", bounded_by: cell.bounded_by || "",
        rationale: cell.rationale || "", regulatory_basis: cell.regulatory_basis || "", jurisdictions_checked: cell.jurisdictions_checked || "",
        cross_sourced: `credible-ML register checked ${config._nm_date || ""}; explicit-id Method v2.0 lookup`, date: config._nm_date || "",
      }
      txt += cols.map((c) => q(row[c] ?? "")).join(",") + "\n"
      nmSet.add(`${rec.slug}|${analyte}`)
      synced++
    }
    fs.writeFileSync(nmRegPath, txt)
    verify.unregistered_not_material = []
  }

  // provenance-tag histogram for the report
  const tally = {}
  for (const rec of records) if (!rec.error) for (const a of PANEL) { const c = rec.cells[a]; if (c) tally[c.provenance] = (tally[c.provenance] || 0) + 1 }

  if (!quiet) {
    console.log(`\n=== VERIFY ===`)
    console.log(`  provenance tags: ${Object.entries(tally).map(([k, v]) => `${k}=${v}`).join(", ")}`)
    console.log(`  illegal tags: ${verify.illegal_tags.length}  gaps: ${verify.gaps.length}  form errors: ${verify.forms_with_errors.length}`)
    console.log(`  not-material cells unregistered in standards-not-material.csv: ${verify.unregistered_not_material.length}${sync ? ` (synced ${synced})` : " (run --sync-not-material to register)"}`)
    for (const g of verify.gaps) console.log(`   !! GAP ${g}`)
    for (const t of verify.illegal_tags) console.log(`   !! ILLEGAL TAG ${t}`)
    for (const f of verify.forms_with_errors) console.log(`   !! FORM ${f}`)
    if (verify.unregistered_not_material.length) console.log(`   ?? unregistered n/m: ${verify.unregistered_not_material.join(", ")}`)
  }

  // write a derivation report (markdown) alongside the JSON records
  writeDerivationReport(outdir, config, records, PANEL, { defects, warnings, tally, verify, synced })

  const hardFail = defects + verify.illegal_tags.length + verify.gaps.length + verify.forms_with_errors.length
  if (!quiet) console.log(`\nwrote ${records.length} record(s) + _derivation-report.md to ${path.relative(repo, outdir)}/`)
  if (hardFail) { console.error(`\n!! ${hardFail} hard defect(s) — fix config/register before publishing`); process.exit(1) }
  return { records, verify, tally }
}

function writeDerivationReport(outdir, config, records, PANEL, meta) {
  const L = []
  L.push(`# HMTc Category ${config.category} — ${config.category_name}`)
  L.push(``)
  L.push(`Government-limit standard, HMTc Method v2.0 (${config.method}).`)
  L.push(``)
  L.push(`- Generated by: \`tools/standards/compile-cat${config.category}.mjs\` (derive -> audit -> verify)`)
  L.push(`- Source of every number: \`data/evidence/regulatory_limits.csv\` (explicit-id lookup; occurrence never selects a value)`)
  L.push(`- Provenance-tag tally: ${Object.entries(meta.tally).map(([k, v]) => `${k}=${v}`).join(", ")}`)
  L.push(`- Audit: ${meta.defects} hard defect(s), ${meta.warnings} stricter-unselected warning(s)`)
  L.push(`- Firewall: these numeric outputs are STAFF/HMTc content (CLAUDE.md Part 19), not public wiki.`)
  L.push(``)
  L.push(`Allowed provenance tags: \`regulatory-alignment\`, \`read-across\`, \`not-material\`, \`control\`. Retired tags (occurrence percentile, unbased precautionary, initial-publication ratchet) are unreachable by construction.`)
  L.push(``)
  for (const rec of records) {
    if (rec.error) { L.push(`## ${rec.slug} — ERROR: ${rec.error}\n`); continue }
    L.push(`## ${rec.slug} — ${rec.name}`)
    L.push(``)
    L.push(`Native basis: ${rec.native_basis_label || rec.native_basis}. ${rec.scope_note || ""}`)
    L.push(``)
    L.push(`| Analyte | HMTc limit (ug/kg) | Provenance | Controlling instrument |`)
    L.push(`|---|---|---|---|`)
    for (const a of PANEL) {
      const c = rec.cells[a]
      if (!c) continue
      if (c.cell_kind === "form_split") {
        L.push(`| ${a} | *form split* | ${c.provenance} | ${escPipe(c.instrument || c.basis || "")} |`)
        for (const f of c.forms) {
          if (f.error) { L.push(`| ${a} · ${escPipe(f.form)} | ERROR | | ${escPipe(f.error)} |`); continue }
          L.push(`| ${a} · ${escPipe(f.form)} | ${f.not_detectable ? "ND<" : ""}${f.value} | ${f.binding_jurisdiction} | ${escPipe(f.binding_id)} |`)
        }
        continue
      }
      const val = c.value == null ? (c.provenance === "not-material" ? "n/m" : c.provenance === "control" ? "control (screen)" : "—") : `${c.not_detectable ? "ND<" : ""}${c.value}`
      const instr = c.binding_id ? `${c.binding_jurisdiction}: ${c.binding_id}` : c.provenance === "read-across" ? escPipe(c.label || "") : c.provenance === "not-material" ? escPipe(c.regulatory_basis || c.rationale || "") : c.provenance === "control" ? escPipe(c.reference_method || "") : ""
      L.push(`| ${a} | ${val} | ${c.provenance} | ${instr} |`)
    }
    L.push(``)
    // stricter-unselected notes
    const flags = []
    for (const a of PANEL) {
      const c = rec.cells[a]
      if (!c) continue
      for (const s of c.stricter_unselected || []) flags.push(`- ${a}: stricter unselected — ${s.value} ug/kg (${s.jurisdiction}, ${escPipe(s.scope || "")}) \`${s.id}\``)
      if (c.cell_kind === "form_split") for (const f of c.forms || []) for (const s of f.stricter_unselected || []) flags.push(`- ${a} · ${f.form}: stricter unselected — ${s.value} (${s.jurisdiction}) \`${s.id}\``)
    }
    if (flags.length) { L.push(`Audit — stricter unselected (reviewed, retained per basis/scope):`); L.push(...flags); L.push(``) }
  }
  fs.writeFileSync(path.join(outdir, "_derivation-report.md"), L.join("\n") + "\n")
}
const escPipe = (s) => String(s == null ? "" : s).replace(/\|/g, "\\|")

// Shared reporter + audit gate used by both category compilers.
export function reportAndAudit(records, PANEL) {
  let defects = 0, warnings = 0
  const lines = []
  for (const rec of records) {
    if (rec.error) { lines.push(`\n### ${rec.slug} — !! ${rec.error}`); defects++; continue }
    lines.push(`\n### ${rec.slug} — ${rec.name}  (native: ${rec.native_basis})`)
    for (const a of PANEL) {
      const c = rec.cells[a]
      if (!c) continue
      if (c.cell_kind === "form_split") {
        lines.push(`  ${a.padEnd(6)} FORM-SPLIT  [${c.provenance}]  ${c.instrument || c.basis || ""}`)
        for (const f of c.forms) {
          if (f.error) { lines.push(`         !! ${f.form}: ${f.error}`); defects++; continue }
          const nd = f.not_detectable ? "ND<" : ""
          lines.push(`         ${String(nd + f.value).padStart(9)}  ${f.binding_jurisdiction}  ${f.form}  (${f.binding_id})`)
          for (const s of f.stricter_unselected || []) { lines.push(`            ?? stricter unselected (${s.jurisdiction}): ${s.value} — ${s.id}`); warnings++ }
        }
        for (const s of c.stricter_unselected || []) { lines.push(`         ?? stricter unselected vs loosest form (${s.jurisdiction}, ${s.scope}): ${s.value} — ${s.id}`); warnings++ }
        continue
      }
      let v = c.value == null
        ? (c.provenance === "not-material" ? "n/m" : c.provenance === "control" ? "control" : c.provenance === "gap" ? "GAP" : "—")
        : String((c.not_detectable ? "ND<" : "") + c.value)
      const src = c.provenance === "regulatory-alignment" ? c.binding_jurisdiction
        : c.provenance === "read-across" ? `RA ${c.source_jurisdiction || ""}`
        : c.provenance
      lines.push(`  ${a.padEnd(6)} ${v.padStart(10)}   [${c.provenance}]  ${src}${c.binding_id ? " (" + c.binding_id + ")" : ""}`)
      if (c.error) { lines.push(`      !! ${c.error}`); defects++ }
      for (const s of c.stricter_unselected || []) { lines.push(`      ?? stricter unselected (${s.jurisdiction}, ${s.basis}): ${s.value} — ${s.id}`); warnings++ }
    }
  }
  return { text: lines.join("\n"), defects, warnings }
}
