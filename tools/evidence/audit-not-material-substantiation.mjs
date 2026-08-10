#!/usr/bin/env node
// audit-not-material-substantiation.mjs
//
// The not-material substantiation gate (Karen 2026-08-10).
//
// "Not material" is an AFFIRMATIVE CLAIM. On a certification reference, asserting that a
// metal is not material understates contamination if the metal is in fact present at
// material levels or is regulated by a credible government in that matrix. This audit
// flips the burden of proof — inclusion-by-default's mirror — for every row in
// data/evidence/standards-not-material.csv: a cell is presumed MATERIAL unless the
// not-material claim is (1) substantiated with a cross-sourced rationale and a named
// basis class, AND (2) not contradicted by an occurrence pool or a credible government ML.
//
// It is deliberately separate from the value-defect QC gate (build-standards-qc-gate.mjs),
// which SHORT-CIRCUITS not-material cells without validating them (lines ~109-114). This
// audit is the validation that short-circuit assumes. build-standards-qc-gate.mjs imports
// this module's verdict so a not-material row can no longer publish unaudited.
//
// Verdict per row: FAIL (blocks) / WARN (review) / PASS.
// Exits non-zero on any FAIL unless --warn-only.
//
// basis_class vocabulary (the only legitimate ways a metal is not material):
//   speciation-bounded   the certified analyte is a SPECIES (iAs, MeHg, Cr-VI) with no
//                        separate migration/occurrence instrument; the published total-
//                        element parent (tAs, tHg, Cr-total) bounds it. Requires bounded_by
//                        + a published parent. Disqualified by a species-specific credible ML.
//   method-artifact      the species is a measurement artifact that does not persist in the
//                        matrix (Cr-VI reduces to Cr-III); modern reference-method studies
//                        find it absent. Requires an adjudication-doc reference.
//   additive-permitted   the element is a permitted food additive, not a contaminant
//                        (E554 in salt). Requires an additive citation; disqualified only by
//                        a credible CONTAMINANT ML (an additive-residue limit does not count).
//   natural-accumulator  the element is natural mineral content of an accumulating crop
//                        (Al in cocoa/spices). Requires a cited accumulation basis + no
//                        credible ML; the occurrence is confirmed natural, not anthropogenic.
//   no-migration-pathway a contact-product element with no physical source or migration
//                        route in the material. Requires no credible ML + no occurrence.
//   refined-partition    the element is removed by refining and residual levels sit below
//                        any ceiling and below concern (As/Cd/Hg in refined oils). Requires
//                        in-scope occurrence below concern and any credible ML not exceeded.
//
// A cell whose real state is "no in-house samples so we skipped it", "occurrence exists but
// was ignored", or "a credible ML exists" is NOT not-material and this audit fails it.

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const ev = (f) => path.join(REPO, "data/evidence", f)
const args = new Set(process.argv.slice(2))
const WARN_ONLY = args.has("--warn-only")
const VERBOSE = args.has("--verbose") || args.has("-v")

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  if (!lines.length) return []
  const split = (line) => {
    const out = []; let cur = ""; let q = false
    for (let i = 0; i < line.length; i++) { const ch = line[i]
      if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
      else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
    out.push(cur); return out }
  const H = split(lines[0])
  return lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }

const CLASS_VOCAB = new Set([
  "speciation-bounded", "method-artifact", "additive-permitted",
  "natural-accumulator", "no-migration-pathway", "refined-partition",
])
// classes where the ELEMENT/species should be materially ABSENT — a non-quarantined
// occurrence pool with material levels contradicts the claim.
const ABSENCE_CLASSES = new Set(["speciation-bounded", "method-artifact", "no-migration-pathway", "refined-partition"])
// classes where high occurrence is the expected basis (natural/additive) — occurrence does
// NOT contradict, but a credible CONTAMINANT ML disqualifies.
const PRESENCE_OK_CLASSES = new Set(["additive-permitted", "natural-accumulator"])

// per-metal "clearly present" floor (ppb): a pooled median above this is not analytical blank.
const PRESENT_FLOOR = { Pb: 5, tAs: 5, iAs: 3, Cd: 3, tHg: 3, MeHg: 2, Ni: 20, Al: 20000, "Cr-VI": 3, Sn: 50, "Cr-total": 20 }

const CREDIBLE = /\b(EU|European|Codex|CODEX|CXS|CAC|FDA|United States FDA|WHO|JECFA|EFSA|FSANZ|Australia New Zealand|Health Canada)\b/

// species -> the total-element parent it is bounded by
const SPECIES_PARENT = { iAs: "tAs", MeHg: "tHg", "Cr-VI": "Cr-total" }

function loadNotMaterial() {
  const p = ev("standards-not-material.csv")
  if (!fs.existsSync(p)) return []
  return parseCsv(fs.readFileSync(p, "utf8"))
}
const dist = fs.existsSync(ev("hmtc_aggregate_distributions.csv"))
  ? parseCsv(fs.readFileSync(ev("hmtc_aggregate_distributions.csv"), "utf8")) : []
const reg = fs.existsSync(ev("regulatory_limits.csv"))
  ? parseCsv(fs.readFileSync(ev("regulatory_limits.csv"), "utf8")) : []
const excluded = fs.existsSync(ev("extraction_excluded.csv"))
  ? parseCsv(fs.readFileSync(ev("extraction_excluded.csv"), "utf8")) : []
// (slug|metal) cells with a quarantine on record — their pool tail is a known artifact.
const quarantined = new Set(excluded.map((r) => `${r.row_slug}|${r.metal_species}`))

// --- routed-source index: which sources measured which analyte in which product ---
// A not-material claim is a rebuttable presumption; if a source ROUTED to the row measured the
// analyte, the determination must have been made in knowledge of it. We flag a cell only when a
// routed source measured the analyte AND the rationale does not acknowledge the measurement.
function frontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/); if (!m) return {}
  const fm = m[1]
  const arr = (key) => {
    const line = fm.match(new RegExp(`^${key}:\\s*\\[(.*?)\\]`, "m"))
    return line ? line[1].split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean) : []
  }
  const slug = (t) => t.replace(/^\[\[/, "").replace(/\]\]$/, "").replace(/^products\//, "").split("|")[0].trim()
  return { products: arr("products").map(slug), metals: arr("metals") }
}
const srcDir = path.join(REPO, "wiki/sources")
const sources = []
if (fs.existsSync(srcDir)) for (const f of fs.readdirSync(srcDir)) {
  if (!f.endsWith(".md")) continue
  const fm = frontmatter(fs.readFileSync(path.join(srcDir, f), "utf8"))
  if (fm.products?.length && fm.metals?.length) sources.push({ slug: f.replace(/\.md$/, ""), products: fm.products, metals: fm.metals })
}
// speciation-aware: iAs contradicted only by iAs (not tAs); MeHg only by MeHg; Cr-VI by Cr/Cr-VI.
function metalContradicts(nmAnalyte, sourceMetal) {
  const a = nmAnalyte.trim(), s = sourceMetal.trim()
  if (a === "iAs") return s === "iAs"
  if (a === "MeHg") return s === "MeHg"
  if (a === "tAs") return s === "tAs" || s === "As"
  if (a === "tHg") return s === "tHg" || s === "Hg"
  if (a === "Cr-VI") return s === "Cr-VI" || s === "Cr" || s === "Cr-total"
  return a === s
}
// the rationale is evidence-aware if it acknowledges the analyte was measured (present/trace/ND/
// artifact/quarantined/pooled/natural/additive) or names a measuring source cite-key. Substantive
// measurement-outcome language only — a bare year/value does not count as acknowledgement.
const ACK_KW = /measured|tested|screen|detect|non-detect|\bnd\b|trace|artifact|quarantin|pool|occurrence|\bpresent\b|natural|accumulat|additive|migration|reference-method|speciat|residue|mineral content/i

// in-scope occurrence pool for (slug, metal): exact product_slug + exact metal only, so we
// never confuse a food-occurrence pool with a physical contact article via a shared prefix.
function poolFor(slug, metal) {
  const rows = dist.filter((r) => r.product_slug === slug && r.metal_species === metal)
  if (!rows.length) return null
  // pick the most-populated role row
  rows.sort((a, b) => (num(b.pooled_n) ?? 0) - (num(a.pooled_n) ?? 0))
  const r = rows[0]
  return { n: num(r.pooled_n) ?? 0, distinct: num(r.distinct_sources) ?? 0,
    p50: num(r.pooled_p50), p97: num(r.pooled_p97), cand: num(r.candidate_value_ppb),
    sens: (r.sens_band || "").toLowerCase(), verdict: r.verdict || "" }
}
// published parent value present for a speciation bound?
function parentPublished(slug, parentMetal) {
  const rows = dist.filter((r) => r.product_slug === slug && r.metal_species === parentMetal)
  if (rows.some((r) => num(r.candidate_value_ppb) !== null)) return true
  // parent may be a read-across / gov value not in the distribution; the not-material row's
  // regulatory_basis naming the parent instrument is accepted as the published bound.
  return null // unknown from the distribution alone
}
// over-generic slug tokens that match almost any free-text scope and cause food/contact confusion
const STOP_KW = new Set(["other", "child", "sized", "based", "foods", "food", "items", "products",
  "product", "general", "child-sized", "components", "toddler", "infant", "and"])
// scope keywords that mark a CONTACT/migration/textile instrument vs a food-occurrence ML
const CONTACT_SCOPE = /\b(toy|migration|food.?contact|tableware|drinkware|utensil|soother|pacifier|teeth|nipple|teat|textile|clothing|footwear|article|childcare|scraped|coating)\b/i
const FOOD_SCOPE = /\b(formulae?|rice|cereal|baby food|juice|canned|fish|cephalopod|crustacea|mollusc|meat|vegetable|fruit|honey|spice|salt|beverage|milk|grain)\b/i

// credible-ML fuzzy candidates for (slug, metal). Reported for scope review, not auto-failed on
// fuzzy matches, because product_scope is free text. Domain-aware: a contact-product row only
// matches CONTACT/migration/textile-scoped MLs (never a food-occurrence ML that shares a token
// like "infant"), and a food row never matches a contact/textile ML. Speciation parents matched too.
function credibleMlCandidates(slug, metal, isContactDomain) {
  const kw = slug.replace(/-/g, " ").split(" ").filter((w) => w.length > 3 && !STOP_KW.has(w))
  const metals = metal === "iAs" ? ["iAs", "tAs"] : metal === "MeHg" ? ["MeHg", "tHg"] : [metal]
  const out = []
  for (const r of reg) {
    if (!metals.includes(r.metal_species)) continue
    if (!CREDIBLE.test(`${r.jurisdiction} ${r.authority}`)) continue
    const scope = (r.product_scope || "").toLowerCase()
    // domain gate: keep only MLs in the row's regulatory domain
    if (isContactDomain) { if (!CONTACT_SCOPE.test(scope)) continue }
    else { if (CONTACT_SCOPE.test(scope) && !FOOD_SCOPE.test(scope)) continue }
    if (!kw.some((k) => scope.includes(k))) continue
    // an organotin (REACH entry 20 / DBT / DOT) restriction is a DIFFERENT species from
    // inorganic tin and never bounds an inorganic-Sn not-material cell — mark it so.
    const organotin = /entry20|organotin|organic.tin|dibutyltin|dioctyltin|\bdbt\b|\bdot\b/i.test(`${r.regulatory_limit_id} ${r.notes}`)
    out.push(`${organotin ? "[organotin]" : ""}${r.jurisdiction}:${r.metal_species}=${r.value_ug_kg}[${(r.product_scope || "").slice(0, 40)}]`)
  }
  return out
}

const rows = loadNotMaterial()
const report = []
for (const r of rows) {
  const slug = r.row_slug, metal = r.metal_species
  const cls = (r.basis_class || "").trim()
  const rationale = (r.rationale || "").trim()
  const basis = (r.regulatory_basis || "").trim()
  const juris = (r.jurisdictions_checked || "").trim()
  const boundedBy = (r.bounded_by || "").trim()
  const checks = []

  // --- Gate 1: substantiation completeness ---
  if (!CLASS_VOCAB.has(cls))
    checks.push(["FAIL", `missing/invalid basis_class '${cls}' — every not-material row must name one of: ${[...CLASS_VOCAB].join(", ")}`])
  if (!rationale) checks.push(["FAIL", "empty rationale — an affirmative not-material claim needs a substantiated reason"])
  if (!basis) checks.push(["FAIL", "empty regulatory_basis"])
  if (!juris) checks.push(["FAIL", "empty jurisdictions_checked — cross-source coverage must be recorded"])
  if (cls === "speciation-bounded" && !boundedBy)
    checks.push(["FAIL", "speciation-bounded requires bounded_by naming the published total-element parent"])
  if (cls === "method-artifact" && !/data\/workbench|adjudicat|saraiva|hernandez|EF-\d|doi|reference-method/i.test(rationale))
    checks.push(["WARN", "method-artifact rationale should cite the reference-method adjudication (e.g. the chromium-formula-adjudication doc)"])
  if (cls === "additive-permitted" && !/\bE5\d\d\b|\bE\d{3}\b|CFR|GB 27|permitted additive|anti-caking/i.test(rationale))
    checks.push(["WARN", "additive-permitted rationale should cite the permitted-additive basis (E-number / 21 CFR / GB)"])

  // --- Gate 2: contradicting occurrence (same-species pool, quarantine-adjusted) ---
  const pool = poolFor(slug, metal)
  const isQuar = quarantined.has(`${slug}|${metal}`)
  if (pool && pool.sens !== "no_data" && !isQuar) {
    const floor = PRESENT_FLOOR[metal] ?? 5
    const material = pool.distinct >= 2 && pool.n >= 20 && (pool.p50 ?? 0) > floor
    if (material && ABSENCE_CLASSES.has(cls)) {
      checks.push(["FAIL", `occurrence contradicts: in-scope ${metal} pool n=${pool.n} distinct=${pool.distinct} p50=${Math.round(pool.p50)} p97=${Math.round(pool.p97 ?? 0)} (sens ${pool.sens}) shows the ${cls==="speciation-bounded"?"species":"element"} is materially present — not "not material"`])
    } else if (material && PRESENCE_OK_CLASSES.has(cls)) {
      checks.push(["INFO", `high ${metal} occurrence (p50=${Math.round(pool.p50)}) is expected for ${cls}; a credible CONTAMINANT ML would disqualify`])
    } else if (pool.n >= 10 && (pool.p97 ?? 0) > floor * 20) {
      checks.push(["WARN", `${metal} pool tail p97=${Math.round(pool.p97 ?? 0)} (n=${pool.n}) is high; confirm it is quarantined/artifact and not a real signal`])
    }
  }

  // --- Gate 3: credible ML review (scope-imprecise → WARN, not auto-FAIL) ---
  // a row is contact-domain if its basis names a migration/textile/toy instrument
  const isContactDomain = /2009\/48|10\/2011|REACH|migration|textile|toy|EN 1400|EN 71|entry 72|food.?contact|ASTM F963/i.test(`${basis} ${juris}`)
  const mls = credibleMlCandidates(slug, metal, isContactDomain)
  if (mls.length) {
    // For a species (iAs/MeHg), a TOTAL-parent ML is expected (it IS the bound); only a
    // SPECIES-specific ML disqualifies. Other absence classes: any in-scope credible ML disqualifies.
    const speciesSpecific = mls.filter((m) => new RegExp(`:${metal}=`).test(m))
    if (cls === "speciation-bounded") {
      if (speciesSpecific.length)
        checks.push(["FAIL", `a credible ${metal}-specific ML exists — the species is regulated, adopt it: ${speciesSpecific.join("; ")}`])
      // a parent-total ML match is the expected bound, not a defect — no warning
    } else if (ABSENCE_CLASSES.has(cls)) {
      // Sn cells: an [organotin]-only match is a distinct species, not a contradiction of the inorganic-Sn claim.
      const nonOrganotin = mls.filter((m) => !m.startsWith("[organotin]"))
      if (metal === "Sn" && nonOrganotin.length === 0)
        checks.push(["INFO", `only organotin restriction(s) match ${metal}×${slug} — distinct species from inorganic tin; ensure organotin is screened separately (not bounded by this cell)`])
      else
        checks.push(["WARN", `credible ML candidate(s) for ${metal}×${slug} — verify scope; if in-scope, adopt the ML not not-material: ${mls.slice(0,3).join("; ")}`])
    } else if (PRESENCE_OK_CLASSES.has(cls)) {
      checks.push(["WARN", `credible ML candidate(s) for ${metal}×${slug} — confirm they are additive-residue, not contaminant MLs: ${mls.slice(0,3).join("; ")}`])
    }
  }

  // --- Gate 4: routed-source contradiction (acknowledgement-gated) ---
  // A source routed to this row that measured the analyte rebuts the presumption unless the
  // rationale/cross_sourced acknowledges the measurement. Speciation-aware so a tAs source does
  // not falsely rebut an iAs cell.
  const ackText = `${rationale} ${(r.cross_sourced || "")}`.toLowerCase()
  const evidenceAware = ACK_KW.test(ackText)
  const measuringSources = sources
    .filter((s) => s.products.includes(slug) && s.metals.some((m) => metalContradicts(metal, m)))
    .map((s) => s.slug)
  if (measuringSources.length) {
    const named = measuringSources.some((cs) => ackText.includes(cs.split("-")[0]))
    if (!evidenceAware && !named)
      checks.push(["FAIL", `routed source(s) measured ${metal} in ${slug} (${measuringSources.slice(0,3).join(", ")}${measuringSources.length>3?", ...":""}) but the rationale does not acknowledge the measurement — re-adjudicate (retire to a real limit/screen, or keep with the source cited as verified trace/ND/artifact)`])
  }

  const level = checks.some((c) => c[0] === "FAIL") ? "FAIL"
    : checks.some((c) => c[0] === "WARN") ? "WARN" : "PASS"
  report.push({ slug, metal, cls, level, notes: checks })
}

// write machine-readable report
const outCsv = ev("standards-not-material-audit.csv")
const cols = ["row_slug", "metal_species", "basis_class", "verdict", "reasons"]
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
fs.writeFileSync(outCsv, [cols.join(","),
  ...report.map((r) => [r.slug, r.metal, r.cls, r.level,
    r.notes.map((n) => `${n[0]}: ${n[1]}`).join(" | ")].map(esc).join(","))].join("\n") + "\n")

// console summary
const by = {}; for (const r of report) by[r.level] = (by[r.level] || 0) + 1
console.log(`Not-material substantiation audit — ${report.length} determinations`)
for (const k of ["FAIL", "WARN", "PASS"]) if (by[k]) console.log(`  ${String(by[k]).padStart(3)}  ${k}`)
const fails = report.filter((r) => r.level === "FAIL")
if (fails.length || VERBOSE) {
  console.log(fails.length ? `\nFAIL (blocks publication):` : `\n(no failures)`)
  for (const r of (VERBOSE ? report : fails)) {
    if (!VERBOSE && r.level !== "FAIL") continue
    console.log(`  ${r.slug} / ${r.metal} [${r.cls || "—"}] → ${r.level}`)
    for (const n of r.notes) if (VERBOSE || n[0] === "FAIL") console.log(`      ${n[0]}: ${n[1]}`)
  }
}
console.log(`\nWrote ${path.relative(REPO, outCsv)}`)
if (fails.length && !WARN_ONLY) process.exit(1)

export function notMaterialAuditVerdicts() {
  // consumed by build-standards-qc-gate.mjs: (slug|metal) -> {level, reasons}
  const m = new Map()
  for (const r of report) m.set(`${r.slug}|${r.metal}`, { level: r.level, reasons: r.notes })
  return m
}
