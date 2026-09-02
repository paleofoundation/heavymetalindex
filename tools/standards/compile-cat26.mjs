#!/usr/bin/env node
// Category-26 (Peptides, SARMs, and Research Chemicals) standard COMPILER — HMTc Method v2.0,
// no-regulatory-anchor (control) form. Forked from compile-cat9.mjs (route-based), but this class
// inverts the food/contact model: there is NO lawful product heavy-metal CONTENT limit for these
// unapproved-drug products, so the Method v2.0 min(percentile, ceiling) rule loses its ceiling term,
// and per the Part 2 / Part 19 firewall the occurrence (percentile) term is a staff-side quantity that
// must NEVER be published as a product-content limit. The single load-bearing rule here is therefore:
//   NO CELL PUBLISHES A PRODUCT-CONTENT NUMBER.
// Every panel cell resolves to `control` (mandatory per-lot testing + a published analytical method +
// a toxicology-anchored escalation rule, value=null) or a substantiated `not_material` (methylmercury).
// The route-appropriate ICH Q3D / USP <232> permitted daily exposures (PDEs, ug/day) are attached to
// each control cell as a TOXICOLOGICAL anchor for the escalation rule only — a daily-dose reference,
// not a ug/kg product-content limit, and never converted into one.
//
// HMTc certifies heavy-metal SAFETY only for this class. It does not endorse, approve, or vouch for
// the efficacy or legality of the products (Karen's public-protection decision, 2026-08-13).
//
// derive  : resolve every (subcategory, analyte) cell from the config's route + not-material map.
// audit   : (a) scan the regulatory register and PROVE no product-content limit exists for this class
//           (the regulatory vacuum — a hit rebuts the no-anchor premise and is a defect);
//           (b) print the seed occurrence evidence as context, clearly NOT used to set a number.
// verify  : assert the firewall + method invariants (no published number; allowed provenance tags only;
//           control cells complete; not-material cells substantiated & registered; route anchors match).
//           Exit non-zero on any defect.
//
// Usage: node tools/standards/compile-cat26.mjs [--only=slug1,slug2] [--outdir=path] [--config=path] [--quiet]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const OUTDIR = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat26-compiled")
const CONFIG_PATH = args.get("config") || path.join(REPO, "tools/standards/cat26-config.json")
const QUIET = args.has("quiet")

// --- canonical HMTc analyte panel (inlined so the compiler is self-contained) --------------------
const FULL_PANEL = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Sn", "Al", "Cr", "Cr-VI"]
const ALLOWED_PROVENANCE = CANON_ALLOWED // lib/provenance.mjs is the vocabulary of record

// --- ICH Q3D R1 / USP <232> permitted daily exposures (ug/day), Table A.2.1 ----------------------
// TOXICOLOGICAL anchors only. As is the inorganic-arsenic basis; Hg is the inorganic-mercury basis.
// The chromium inhalation value (3) is set low specifically for Cr(VI) carcinogenicity.
const ICH_Q3D_PDE = {
  Pb: { oral: 5, parenteral: 5, inhalation: 5, class: "1" },
  Cd: { oral: 5, parenteral: 2, inhalation: 3, class: "1" },
  As: { oral: 15, parenteral: 15, inhalation: 2, class: "1" }, // inorganic-As basis
  Hg: { oral: 30, parenteral: 3, inhalation: 1, class: "1" },  // inorganic-Hg basis
  Ni: { oral: 200, parenteral: 20, inhalation: 6, class: "2A" },
  Sn: { oral: 64000, parenteral: 6400, inhalation: 64, class: "3" },
  Cr: { oral: 11000, parenteral: 1100, inhalation: 3, class: "3" }, // Cr(VI) drives the inhalation value
}
// which ICH Q3D element supplies each panel analyte's PDE (Al is external; MeHg is not-material)
const ANALYTE_TO_ICH = { Pb: "Pb", Cd: "Cd", tAs: "As", iAs: "As", tHg: "Hg", Ni: "Ni", Sn: "Sn", Cr: "Cr", "Cr-VI": "Cr" }
const analyteLabel = (a) => ({
  Pb: "lead", Cd: "cadmium", tAs: "total arsenic", iAs: "inorganic arsenic", tHg: "total mercury",
  MeHg: "methylmercury", Ni: "nickel", Sn: "tin", Al: "aluminium", Cr: "total chromium", "Cr-VI": "hexavalent chromium",
}[a] || a)

// route -> PDE selector for an ICH element. mucosal = most-protective of {parenteral, inhalation}.
function pdeForRoute(ichKey, route) {
  const p = ICH_Q3D_PDE[ichKey]
  if (!p) return null
  if (route === "oral") return p.oral
  if (route === "parenteral") return p.parenteral
  if (route === "mucosal") return Math.min(p.parenteral, p.inhalation)
  return null
}

// --- CSV (register vacuum scan) ------------------------------------------------------------------
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
import { stampProvenance, ALLOWED_PROVENANCE as CANON_ALLOWED } from "./lib/provenance.mjs"
import { STATUS_GATE } from "./lib/register-gate.mjs"; const DRAFT = STATUS_GATE // unified register status gate + not-yet-in-force (Phase A6)
const QUARANTINE = STATUS_GATE // same unified gate; kept as a name for the call sites
const CREDIBLE = /\b(EU|EFSA|Codex|FDA|WHO|JECFA|FSANZ|Health Canada|CFIA|UK|FSA|EPA|ANZ|Australia|New Zealand|China|GB|India|FSSAI|Israel|Japan|Korea)\b/i

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"))
const PANEL = config.panel || FULL_PANEL

// --- register vacuum scan ------------------------------------------------------------------------
// Prove that NO credible-jurisdiction product-CONTENT heavy-metal limit exists for this class.
// A hit rebuts the no-anchor premise and is a build-blocking defect (the vacuum is proven, not assumed).
function scanRegulatoryVacuum() {
  const p = path.join(REPO, "data/evidence/regulatory_limits.csv")
  if (!fs.existsSync(p)) return { confirmed: null, error: "regulatory_limits.csv not found", matches: [] }
  const register = parseCsv(fs.readFileSync(p, "utf8"))
  const rx = new RegExp(config.vacuum_scan.scope_regex, "i")
  const matches = []
  for (const r of register) {
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status)) continue
    if (!CREDIBLE.test(`${r.jurisdiction} ${r.authority}`)) continue
    const scope = `${r.product_scope || ""} ${r.notes || ""}`
    if (!rx.test(scope)) continue
    matches.push({ id: r.regulatory_limit_id, jurisdiction: r.jurisdiction, metal: r.metal_species, value: r.value_ug_kg, scope: (r.product_scope || "").slice(0, 80) })
  }
  return { confirmed: matches.length === 0, scanned_rows: register.length, matches }
}

// --- seed occurrence evidence (context only; NEVER converted to a number) ------------------------
function seedEvidenceContext(subKeys) {
  const dir = path.join(REPO, "wiki/sources")
  const out = {}
  for (const key of subKeys) {
    const fp = path.join(dir, `${key}.md`)
    if (fs.existsSync(fp)) {
      const md = fs.readFileSync(fp, "utf8")
      const fm = md.match(/^---\n([\s\S]*?)\n---/)
      const title = (fm && fm[1].match(/^title:\s*"?(.*?)"?\s*$/m)) ? fm[1].match(/^title:\s*"?(.*?)"?\s*$/m)[1] : key
      const tier = (fm && fm[1].match(/^evidence_tier:\s*(\S+)/m)) ? fm[1].match(/^evidence_tier:\s*(\S+)/m)[1] : "?"
      out[key] = { present: true, title, evidence_tier: tier }
    } else {
      out[key] = { present: false }
    }
  }
  return out
}

// --- not-material registry cross-check -----------------------------------------------------------
function loadRegisteredNotMaterial() {
  const p = path.join(REPO, "data/evidence/standards-not-material.csv")
  if (!fs.existsSync(p)) return new Set()
  return new Set(parseCsv(fs.readFileSync(p, "utf8")).map((r) => `${r.row_slug}|${r.metal_species}`))
}
const registeredNM = loadRegisteredNotMaterial()

// --- cell resolution -----------------------------------------------------------------------------
function fill(tpl, vars) { return tpl.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`)) }

function resolveControlCell(sub, analyte) {
  const route = sub.route
  const routeLabel = sub.route_label
  const tier = config.tier[analyte] ?? null
  const vars = { analyte_label: analyteLabel(analyte), route_label: routeLabel }
  const cell = {
    type: "control",
    value: null, // FIREWALL INVARIANT: a control cell publishes no product-content number
    provenance: "control",
    tier,
    reference_method: config.reference_method,
    rationale: fill(config.control_template.rationale, vars),
    escalation: fill(config.control_template.escalation, vars),
  }
  if (config.speciation_notes[analyte]) cell.speciation_reflex = config.speciation_notes[analyte]

  if (analyte === "Al") {
    const a = config.al_anchor_by_route[route] || config.al_anchor_by_route.parenteral
    cell.tox_anchor = {
      kind: "intake-reference",
      route,
      pde_ug_day: null,
      framework: a.framework,
      basis: a.basis,
      ich_class: null,
      note: a.note + " Toxicological anchor for the escalation rule only; NOT a product-content limit.",
    }
  } else if (analyte === "Cr-VI") {
    cell.tox_anchor = {
      kind: "ICH-Q3D-PDE",
      route: "most-protective (Cr inhalation)",
      pde_ug_day: ICH_Q3D_PDE.Cr.inhalation,
      framework: "ICH Q3D / USP <232> chromium inhalation PDE (Cr(VI) carcinogenic-species floor)",
      ich_class: ICH_Q3D_PDE.Cr.class,
      note: "3 ug/day is the chromium value ICH Q3D set low specifically for Cr(VI) carcinogenicity; applied as the most-protective hexavalent-species anchor across all routes. Toxicological anchor only; NOT a product-content limit.",
    }
  } else {
    const ichKey = ANALYTE_TO_ICH[analyte]
    const pde = pdeForRoute(ichKey, route)
    cell.tox_anchor = {
      kind: "ICH-Q3D-PDE",
      route: routeLabel,
      pde_ug_day: pde,
      framework: "ICH Q3D / USP <232> permitted daily exposure",
      ich_element: ichKey,
      ich_class: ICH_Q3D_PDE[ichKey] ? ICH_Q3D_PDE[ichKey].class : null,
      note: (analyte === "tAs" || analyte === "iAs") ? "Arsenic PDE is defined on inorganic arsenic (worst case). Toxicological anchor only; NOT a product-content limit."
        : (analyte === "tHg") ? "Mercury PDE is defined on inorganic mercury (worst case). Toxicological anchor only; NOT a product-content limit."
          : "Route-appropriate daily-exposure reference. Toxicological anchor only; NOT a product-content limit.",
    }
  }
  return cell
}

function resolveNotMaterialCell(sub, analyte) {
  const nm = config.not_material[analyte]
  return {
    type: "not_material",
    value: null,
    provenance: "not-material",
    basis_class: nm.basis_class,
    bounded_by: nm.bounded_by || null,
    rationale: nm.rationale,
    reference_method: nm.reference_method,
    registered_in_gate: registeredNM.has(`${sub.slug}|${analyte}`),
  }
}

function resolveCell(sub, analyte) {
  if (config.not_material[analyte]) return resolveNotMaterialCell(sub, analyte)
  return resolveControlCell(sub, analyte)
}

// --- verify (firewall + method invariants) -------------------------------------------------------
function verifyRecord(record) {
  const defects = []
  const cells = record.cells
  for (const a of PANEL) {
    const c = cells[a]
    if (!c) { defects.push(`${a}: unresolved (no cell)`); continue }
    // V2: allowed provenance tags only
    if (!ALLOWED_PROVENANCE.has(c.provenance)) defects.push(`${a}: provenance '${c.provenance}' not in allowed set`)
    // V3: FIREWALL INVARIANT — no product-content number on ANY cell
    if (c.value !== null) defects.push(`${a}: FIREWALL VIOLATION — cell publishes a product-content value (${c.value}); this class must carry no number`)
    if (c.type === "control") {
      // V4: control completeness
      if (!c.reference_method) defects.push(`${a}: control cell missing reference_method`)
      if (!c.escalation) defects.push(`${a}: control cell missing escalation rule`)
      if (!c.tox_anchor) defects.push(`${a}: control cell missing tox_anchor`)
      if (c.tox_anchor && c.tox_anchor.pde_ug_day == null && a !== "Al") defects.push(`${a}: control cell PDE anchor is null (Al is the only permitted exception)`)
      // V7: route-appropriate anchor (PDE must equal the route selection)
      if (c.tox_anchor && c.tox_anchor.kind === "ICH-Q3D-PDE" && a !== "Cr-VI") {
        const expected = pdeForRoute(ANALYTE_TO_ICH[a], record.route)
        if (c.tox_anchor.pde_ug_day !== expected) defects.push(`${a}: anchor ${c.tox_anchor.pde_ug_day} != route-expected ${expected} for route '${record.route}'`)
      }
    } else if (c.type === "not_material") {
      // V5: not-material substantiation + gate registration
      if (!c.basis_class) defects.push(`${a}: not_material missing basis_class`)
      if (!c.rationale) defects.push(`${a}: not_material missing rationale`)
      if (!c.registered_in_gate) defects.push(`${a}: not_material NOT registered in data/evidence/standards-not-material.csv (${record.slug}|${a}) — the standing substantiation gate would not cover it`)
    } else {
      defects.push(`${a}: unexpected cell type '${c.type}'`)
    }
  }
  return defects
}

// --- drive ---------------------------------------------------------------------------------------
fs.mkdirSync(OUTDIR, { recursive: true })
const vacuum = scanRegulatoryVacuum()
const slugs = only.length ? only : Object.keys(config.subcategories)
let anyDefect = false
const summaryRows = []

for (const slug of slugs) {
  const sub = { slug, ...config.subcategories[slug] }
  if (!config.subcategories[slug]) { console.error(`!! no config for ${slug}`); anyDefect = true; continue }
  const cells = {}
  for (const a of PANEL) cells[a] = resolveCell(sub, a)
  stampProvenance(cells) // one provenance vocabulary (lib/provenance.mjs, Phase A5)
  const tagsUsed = [...new Set(PANEL.map((a) => cells[a].provenance))].sort()

  const record = {
    slug, name: sub.name, row: sub.row, category: 26, category_name: config.category_name,
    // BASIS GUARD (brief §B): Cat-26 stays on pharmacopeial permitted-daily-exposure ceilings; a dietary
    // content or migration row can never anchor a PDE cell. Carried on the record so the audit's basis-aware
    // checks (W1, D2) and the harvester refuse cross-family anchors.
    basis_guard: sub.basis_guard || config.basis_guard || null, basis_guard_note: sub.basis_guard_note || config.basis_guard_note || null,
    route: sub.route, route_label: sub.route_label,
    method: config.method,
    governing_basis: "No lawful product heavy-metal content limit exists for this unapproved-drug class; the Method v2.0 ceiling term is absent and the occurrence term is firewalled staff-only. Every cell is `control` (test + method + toxicology-anchored escalation, no number) or a substantiated `not_material`. ICH Q3D / USP <232> route-appropriate PDEs are toxicological anchors only, never product-content limits.",
    scope_note: sub.scope_note,
    certification_scope: "Heavy-metal SAFETY only. HMTc does not endorse, approve, or vouch for the efficacy or legality of these products.",
    reference_method: config.reference_method,
    regulatory_vacuum: { confirmed: vacuum.confirmed, scanned_scope_regex: config.vacuum_scan.scope_regex, matches: vacuum.matches },
    seed_evidence: seedEvidenceContext(sub.seed_evidence || []),
    seed_evidence_disclaimer: "Occurrence measurements (e.g. Craven 2025) are recorded as category-opening context and to justify that each analyte is material; per the Part 2 / Part 19 firewall they are NOT converted into a published product-content limit for this class.",
    provenance_tags_used: tagsUsed,
    cells,
    firewall: "Numeric/derivation outputs are STAFF/HMTc content (data/workbench/standards/); the public heavymetalindex.com product pages remain literature-native scaffolds with no threshold.",
    generated_from: "tools/standards/cat26-config.json + ICH Q3D R1 / USP <232> PDE constants",
    config: path.relative(REPO, CONFIG_PATH),
    method_tag: "HMTc Method v2.0 (no-regulatory-anchor / control form)",
  }

  const defects = verifyRecord(record)
  record.verify = { defects, clean: defects.length === 0 }
  if (defects.length) anyDefect = true

  fs.writeFileSync(path.join(OUTDIR, `${slug}.json`), JSON.stringify(record, null, 2))

  for (const a of PANEL) {
    const c = cells[a]
    const anchor = c.type === "not_material" ? "—" : (c.tox_anchor.pde_ug_day != null ? `${c.tox_anchor.pde_ug_day} ug/day` : c.tox_anchor.framework.split("(")[0].trim())
    summaryRows.push({ slug, analyte: a, tier: c.tier ?? "", type: c.type, provenance: c.provenance, route: sub.route, anchor })
  }

  if (!QUIET) {
    console.log(`\n### ${slug} — ${sub.name}  [row ${sub.row}, route: ${sub.route_label}]`)
    for (const a of PANEL) {
      const c = cells[a]
      const type = c.type === "not_material" ? "n/m" : "control"
      const anchor = c.type === "not_material" ? "(no methylation pathway; bounded by tHg)"
        : (c.tox_anchor.pde_ug_day != null ? `${String(c.tox_anchor.pde_ug_day).padStart(6)} ug/day  ${c.tox_anchor.framework.includes("inhalation") ? "(Cr-VI floor)" : ""}`
          : `  (${c.tox_anchor.framework.split("(")[0].trim()})`)
      console.log(`    ${a.padEnd(6)} T${c.tier ?? "-"} ${type.padEnd(8)} ${anchor}`)
    }
    if (defects.length) { for (const d of defects) console.log(`      !! ${d}`) }
  }
}

// --- audit report --------------------------------------------------------------------------------
const report = []
report.push(`# HMTc Category 26 — Peptides, SARMs, and Research Chemicals — derivation report`)
report.push(``)
report.push(`Generated by \`tools/standards/compile-cat26.mjs\` from \`tools/standards/cat26-config.json\`.`)
report.push(`Method: **HMTc Method v2.0, no-regulatory-anchor (control) form.** No jurisdiction sets a lawful`)
report.push(`product heavy-metal content limit for this unapproved-drug class, so every cell is \`control\``)
report.push(`(mandatory testing + published method + toxicology-anchored escalation, **no product-content number**)`)
report.push(`or a substantiated \`not_material\`. ICH Q3D / USP <232> route-appropriate PDEs are toxicological`)
report.push(`anchors only. **HMTc certifies heavy-metal SAFETY only — not efficacy or legality of the products.**`)
report.push(``)
report.push(`## Regulatory vacuum (audit)`)
report.push(``)
if (vacuum.confirmed === true) {
  report.push(`CONFIRMED: scanned ${vacuum.scanned_rows} register rows for credible-jurisdiction product-content`)
  report.push(`heavy-metal limits matching this class (\`${config.vacuum_scan.scope_regex}\`) — **0 matches.** No lawful`)
  report.push(`product limit exists; the \`min(percentile, ceiling)\` ceiling term is genuinely absent. This is the`)
  report.push(`regulatory gap that gives an independent heavy-metal-safety mark its highest value here.`)
} else if (vacuum.confirmed === false) {
  report.push(`DEFECT: the register contains ${vacuum.matches.length} product-content limit(s) matching this class:`)
  for (const m of vacuum.matches) report.push(`  - ${m.id} (${m.jurisdiction}, ${m.metal}=${m.value}) — ${m.scope}`)
  report.push(`The no-anchor premise is rebutted; adopt the government limit for the affected cells before publishing.`)
} else {
  report.push(`INDETERMINATE: ${vacuum.error}`)
}
report.push(``)
report.push(`## ICH Q3D / USP <232> route-appropriate PDE anchors (ug/day — toxicological reference, NOT a product limit)`)
report.push(``)
report.push(`| Element | ICH class | Oral | Parenteral | Inhalation |`)
report.push(`| --- | --- | ---: | ---: | ---: |`)
for (const [k, v] of Object.entries(ICH_Q3D_PDE)) report.push(`| ${k} | ${v.class} | ${v.oral} | ${v.parenteral} | ${v.inhalation} |`)
report.push(``)
report.push(`Aluminium is not an ICH Q3D element; injectable/mucosal rows anchor to FDA 21 CFR 201.323 (parenteral`)
report.push(`aluminium) and oral rows to the JECFA/EFSA aluminium tolerable weekly intake. Mucosal rows use the`)
report.push(`most-protective of the parenteral and inhalation PDE per analyte. Cr(VI) anchors to the 3 ug/day Cr`)
report.push(`inhalation value across all routes.`)
report.push(``)
report.push(`## Resolved cells`)
report.push(``)
report.push(`| Subcategory | Analyte | Tier | Type | Provenance | Route | Anchor |`)
report.push(`| --- | --- | :--: | --- | --- | --- | --- |`)
for (const r of summaryRows) report.push(`| ${r.slug} | ${r.analyte} | ${r.tier} | ${r.type} | ${r.provenance} | ${r.route} | ${r.anchor} |`)
report.push(``)
report.push(`## Firewall`)
report.push(``)
report.push(`This report and the compiled JSON records are STAFF/HMTc content under \`data/workbench/standards/\`.`)
report.push(`They carry no product-content number and are not public heavymetalindex.com content. The public index`)
report.push(`product pages remain literature-native scaffolds (routing destinations) with no threshold, per Part 2.`)
report.push(``)
const stamp = process.env.CAT26_STAMP || ""
report.push(`_Generated: ${stamp || "(run \`node tools/standards/compile-cat26.mjs\` to regenerate)"}_`)
fs.writeFileSync(path.join(OUTDIR, `_derivation-report.md`), report.join("\n") + "\n")

if (!QUIET) {
  console.log(`\n--- regulatory vacuum: ${vacuum.confirmed === true ? "CONFIRMED (0 product-content limits for this class)" : vacuum.confirmed === false ? `DEFECT (${vacuum.matches.length} matches)` : "INDETERMINATE"}`)
  console.log(`wrote ${slugs.length} record(s) + _derivation-report.md to ${path.relative(REPO, OUTDIR)}/`)
}
if (vacuum.confirmed === false) { console.error("\n!! regulatory vacuum rebutted — a product-content limit exists for this class; adopt it before publishing"); anyDefect = true }
if (anyDefect) { console.error("\n!! one or more cells failed verify — fix config before publishing"); process.exit(1) }
if (!QUIET) console.log(`\nverify: CLEAN — no product-content number published; all provenance tags allowed; control cells complete; not-material substantiated & registered.`)
