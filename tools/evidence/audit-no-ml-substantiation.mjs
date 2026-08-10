#!/usr/bin/env node
// audit-no-ml-substantiation.mjs
//
// The no-ML-confirmed reconciler (Karen 2026-08-10, "next altitude" from the not-material
// reconciler).
//
// A row in standards-no-ml-confirmed.csv is an AFFIRMATIVE CLAIM that "no regulatory maximum
// level exists for this analyte in this matrix, in any credible jurisdiction" — and it SILENCES
// the QC gate's C1b cap-completeness WARN, letting a big-4 toxic publish on a literature-baseline
// value with no cap. It is a rebuttable presumption: valid only if (a) no credible-regulator ML
// actually contradicts it, and (b) the search that produced it covered the FULL credible-regulator
// set — EU, Codex (horizontal CXS 193 AND commodity CXS 2xx), FDA, WHO/JECFA, FSANZ, Health Canada.
//
// The failure mode this gate exists to catch (2026-08-10): cooking-oils-other tAs was asserted
// "no As ML" when Codex CXS 210/1999 sets total As 100 ug/kg for named vegetable oils. A no-ML
// finding that checked only the horizontal standard misses the commodity standard and understates
// the regulatory floor.
//
// Verdict per finding: FAIL (a loaded credible ML contradicts the claim) / WARN (the claim is not
// contradicted by a loaded ML but the recorded verification is incomplete — verify the commodity
// standards before relying on it) / PASS. Exits non-zero on any FAIL unless --warn-only.

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
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
const load = (f) => (fs.existsSync(ev(f)) ? parseCsv(fs.readFileSync(ev(f), "utf8")) : [])

const findings = load("standards-no-ml-confirmed.csv")
const reg = load("regulatory_limits.csv")

// the METHODOLOGY's anchor set (Method v2.0 government-limit default). A contradiction from one of
// these is unambiguous FAIL. But the register is itself the curated set of credible government MLs
// across 60+ jurisdictions (IL, VN, SG, GSO, EAEU, national US states, ...), and a "no regulatory
// ML exists in any credible jurisdiction" claim is falsified by ANY of them — the 2026-08-10 drain
// found Israel MoH FCS 2016, Vietnam QCVN 8-2, and Singapore SFA MLs on oils/spices/formula that a
// 6-body-only search misses. So the contradiction search below runs over the WHOLE register and
// tiers the verdict: anchor-body contradiction vs national-regulator contradiction (both FAIL, the
// finding is factually wrong either way; whether a national ML BINDS the standard under Method v2.0
// is downstream governance, named in the reason, not decided here).
const ANCHOR = /\b(EU|European|Codex|CODEX|CXS|CAC|FDA|United States FDA|WHO|JECFA|EFSA|FSANZ|Australia New Zealand|Health Canada)\b/
// register jurisdiction codes for the anchor set (regulatory_limits.csv uses short codes)
const ANCHOR_JUR = new Set(["EU", "CODEX", "US", "WHO", "AU", "NZ", "AU-NZ", "CA"])
// detect which of the six bodies a jurisdictions_checked string names (AU/NZ == FSANZ)
const BODIES = [
  ["EU", /\bEU\b|European|2023\/915|1881\/2006/],
  ["Codex", /Codex|CXS|CAC/],
  ["FDA", /\bFDA\b|United States|\bUS\b/],
  ["JECFA/WHO", /JECFA|\bWHO\b/],
  ["FSANZ", /FSANZ|AU\/NZ|Australia|New Zealand|Sch 19/],
  ["Health Canada", /Health Canada|\bCanada\b/],
]
// register rows that are NOT food-contaminant MLs and must never contradict a food no-ML claim:
// agricultural inputs, contact/textile, AND — exposed by the whole-register search — colour-additive
// purity specs (21 CFR 73: "beet powder", "soy leghemoglobin", "aluminum powder"), art supplies
// ("oil pastels", "crayons"), cosmetics, drugs, and supplements. These share generic tokens
// ("powder", "oil", "soy") with food slugs but are a different regulatory domain.
const NON_FOOD_SCOPE = /soil improver|fertilis|fertiliz|\bfeed\b|\bpfc\b|sludge|compost|manure|packaging|migration|textile|toy|pastel|crayon|watercolo|\bpaint|student article|colou?r(ing)? additive|\bcosmetic|leghemoglobin|supplement|traditional medicine|drug use|nutraceutical/i
// colour-additive / non-food regulatory instruments identified by id (21 CFR 73 is colour additives)
const NON_FOOD_ID = /cfr\s?73|_73_\d|colou?r_?add/i

// whole-word, singularized tokens (so "oils" matches "oil" but "oilseeds"/"soil" do NOT match "oil").
// Form-words (powder, paste, dried, canned, ...) are stopped so a match must rest on a COMMODITY
// noun — otherwise "beet powder" contradicts "infant-formula-powder" on the shared word "powder".
const STOP = new Set(["other", "based", "non", "and", "the", "product", "products", "food", "foods",
  "general", "bulk", "raw", "dry", "liquid", "whole", "mixed", "items", "not", "covered", "named",
  "individual", "standard", "all", "for", "with", "containing", "type", "including",
  "powder", "powdered", "paste", "dried", "fresh", "frozen", "canned", "concentrate", "concentrated", "cooked"])
const singular = (w) => (w.length > 4 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w)
const tokens = (s) => new Set(String(s).toLowerCase().split(/[^a-z0-9]+/)
  .filter((w) => w.length > 2 && !STOP.has(w)).map(singular))
// negation-aware scope match: a scope like "cereals excluding wheat, rice, oils" or "wheat and
// derivatives except oil" INCLUDES what precedes except/excluding and EXCLUDES what follows. Without
// this, an "except oil" Cd limit falsely contradicts an oil no-ML claim on the shared word "oil".
function sharedCommodityTokens(scope, slugTok) {
  const lower = String(scope).toLowerCase()
  const ex = lower.search(/\b(except|excluding|other than|not\s+includ)/)
  const incTok = tokens(ex >= 0 ? lower.slice(0, ex) : lower)
  const excTok = ex >= 0 ? tokens(lower.slice(ex)) : new Set()
  return [...slugTok].filter((t) => incTok.has(t) && !excTok.has(t))
}

// metal aliasing for register search (a total-element no-ML claim is contradicted by an ML on
// the element under any of its labels)
function metalMatches(claimMetal, regMetal) {
  const a = claimMetal.trim(), s = regMetal.trim()
  if (a === "tHg") return ["tHg", "Hg", "MeHg"].includes(s)
  if (a === "tAs") return ["tAs", "As", "iAs"].includes(s)
  if (a === "iAs") return s === "iAs"
  if (a === "MeHg") return s === "MeHg"
  return a === s
}

const report = []
for (const f of findings) {
  const slug = (f.row_slug || "").trim(), metal = (f.metal_species || "").trim()
  const checked = (f.jurisdictions_checked || "").trim()
  const finding = (f.finding || "").trim()
  const slugTok = tokens(slug)
  const notes = []

  // --- Gate 1: contradiction by ANY loaded credible-government ML (whole register, tiered) ---
  const contradictions = []
  for (const r of reg) {
    if (!metalMatches(metal, r.metal_species)) continue
    const st = (r.status || "").toLowerCase()
    if (/proposed|draft|withdrawn|repealed|superseded/.test(st)) continue // only in-force limits contradict
    const scope = (r.product_scope || "")
    if (NON_FOOD_SCOPE.test(scope)) continue
    if (NON_FOOD_ID.test(`${r.regulatory_limit_id} ${r.basis}`)) continue
    // require a shared product-CLASS token (whole-word, negation-aware) — this cleanly separates
    // "named vegetable oils" (matches an oil claim) from "oilseeds", "soil improver", and
    // "cereals excluding ... oils" (all do NOT).
    const shared = sharedCommodityTokens(scope, slugTok)
    if (!shared.length) continue
    const isAnchor = ANCHOR.test(`${r.jurisdiction} ${r.authority}`) || ANCHOR_JUR.has((r.jurisdiction || "").trim())
    contradictions.push({ r, shared, isAnchor })
  }
  if (contradictions.length) {
    const anchor = contradictions.filter((c) => c.isAnchor)
    const national = contradictions.filter((c) => !c.isAnchor)
    const fmt = (c) => `${c.r.jurisdiction} ${c.r.metal_species}=${c.r.value_ug_kg} [${(c.r.product_scope || "").slice(0, 40)}]${c.r.regulatory_limit_id ? ` (${c.r.regulatory_limit_id})` : ""}`
    if (anchor.length)
      notes.push(["FAIL", `no-ML claim CONTRADICTED by a Method-v2.0 anchor regulator for ${metal} × '${slug}' — adopt the ML (min(literature, cap)); the finding is factually wrong: ${anchor.slice(0, 3).map(fmt).join("; ")}`])
    else
      notes.push(["FAIL", `no-ML claim CONTRADICTED — ${national.length} loaded national/regional regulator(s) set a ${metal} ML on '${slug}', so "no regulatory ML in any credible jurisdiction" is false. The finding must name them; whether one BINDS the standard under Method v2.0 (anchor-set default) is a governance call to record, not a reason to omit them: ${national.slice(0, 3).map(fmt).join("; ")}`])
  }

  // --- Gate 2: verification completeness (only meaningful if not already contradicted) ---
  if (!contradictions.length) {
    const named = BODIES.filter(([, re]) => re.test(checked)).map(([n]) => n)
    const missing = BODIES.filter(([, re]) => !re.test(checked)).map(([n]) => n)
    if (named.length < 4)
      notes.push(["WARN", `under-verified: jurisdictions_checked names ${named.length}/6 credible bodies (${named.join(", ") || "none"}); not shown to have checked ${missing.join(", ")} — a complete no-ML claim must cover the full set before it can silence the cap-completeness check`])
    // commodity-standard prompt: if a SIBLING credible commodity ML exists for this product class
    // (a Codex CXS 2xx / EU commodity row on the same scope for ANY metal), the finding should say
    // it checked the commodity standard, not only the horizontal one (the CXS 210/19 lesson).
    const siblingCommodity = reg.find((r) => ANCHOR.test(`${r.jurisdiction} ${r.authority}`) &&
      /CXS 2\d\d|codex_.*(oil|spice|cereal|fish|juice)|commodity/i.test(`${r.regulatory_limit_id} ${r.basis} ${r.notes}`) &&
      !NON_FOOD_SCOPE.test(r.product_scope || "") &&
      [...tokens(r.product_scope || "")].some((t) => slugTok.has(t)))
    if (siblingCommodity && !/CXS 2\d\d|commodity|210|individual standard/i.test(checked))
      notes.push(["WARN", `commodity-standard coverage: a credible commodity ML exists for this product class (e.g. ${siblingCommodity.jurisdiction} ${siblingCommodity.metal_species} ${siblingCommodity.regulatory_limit_id || (siblingCommodity.product_scope || "").slice(0, 30)}); confirm the ${metal} search covered commodity standards (CXS 2xx), not only horizontal CXS 193/EU 2023/915`])
    if (!notes.length)
      notes.push(["PASS", `no contradicting credible ML; verification names ${named.length}/6 bodies (${named.join(", ")})`])
  }

  const level = notes.some((n) => n[0] === "FAIL") ? "FAIL"
    : notes.some((n) => n[0] === "WARN") ? "WARN" : "PASS"
  report.push({ slug, metal, level, notes, finding })
}

// write machine-readable report
const outCsv = ev("standards-no-ml-audit.csv")
const cols = ["row_slug", "metal_species", "verdict", "reasons", "finding"]
fs.writeFileSync(outCsv, [cols.join(","),
  ...report.map((r) => [r.slug, r.metal, r.level,
    r.notes.map((n) => `${n[0]}: ${n[1]}`).join(" | "), r.finding].map(esc).join(","))].join("\n") + "\n")

// console summary
const by = {}; for (const r of report) by[r.level] = (by[r.level] || 0) + 1
console.log(`No-ML-confirmed reconciler — ${report.length} findings gated`)
for (const k of ["FAIL", "WARN", "PASS"]) if (by[k]) console.log(`  ${String(by[k]).padStart(3)}  ${k}`)
const show = report.filter((r) => r.level !== "PASS")
if (show.length || VERBOSE) {
  console.log(`\nMust resolve:`)
  for (const r of (VERBOSE ? report : show)) {
    console.log(`  ${r.slug} / ${r.metal} → ${r.level}`)
    for (const n of r.notes) if (VERBOSE || n[0] !== "PASS") console.log(`      ${n[0]}: ${n[1]}`)
  }
}
console.log(`\nWrote ${path.relative(REPO, outCsv)}`)
if (report.some((r) => r.level === "FAIL") && !WARN_ONLY) process.exit(1)

export function noMlAuditVerdicts() {
  const m = new Map()
  for (const r of report) m.set(`${r.slug}|${r.metal}`, { level: r.level, reasons: r.notes })
  return m
}
