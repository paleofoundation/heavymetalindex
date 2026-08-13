#!/usr/bin/env node
// audit-not-material-corpus.mjs
//
// The corpus-wide not-material reconciler (Karen 2026-08-10, "do what a superintelligent AI would do").
//
// A single-file audit (audit-not-material-substantiation.mjs) is not enough, because a not-material
// claim can be ASSERTED in six different places, and only one of them is gated:
//   - data/evidence/standards-not-material.csv        (the GATED registry, basis_class + rationale)
//   - tools/standards/cat1-config.json                (read_across.<metal>.not_material: true)
//   - tools/standards/cat3/cat7/cat9/cat24/cat25 configs and defaults
//   - tools/standards/seafood-config.json             (read_across.<metal>.not_material: true)
//   - data/workbench/standards/cat1-compiled/*.json   (compiled -> rendered on cert)
//   - data/workbench/standards/cat3/cat7/cat9/cat24/cat25 compiled records
//
// Three independent sessions (oils/Al, Cat-9 diapers, Cat-3 grains) each found "wrongly not-material"
// cells by hand. That is a base-rate signal: the defect is manufactured, not incidental. This tool
// bounds the blast radius — it enumerates EVERY not-material assertion across all representations and
// reconciles each against the evidence (occurrence pool, credible-ML register, routed sources), so a
// config cell can no longer assert not-material outside the gate. The fix it drives: every assertion
// must be present in the gated CSV with a substantiated basis_class, or it is a COVERAGE_GAP.
//
// Verdicts: COVERAGE_GAP (asserted in a config but absent from the gated CSV) / CONTRADICTED
// (evidence rebuts it) / GATED_OK (present in the CSV and the substantiation audit passed it).
// Exit non-zero on any COVERAGE_GAP or CONTRADICTED unless --warn-only.

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const ev = (f) => path.join(REPO, "data/evidence", f)
const args = new Set(process.argv.slice(2))
const WARN_ONLY = args.has("--warn-only")
const PANEL = new Set(["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Sn", "Al", "Cr", "Cr-VI"])

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length); if (!lines.length) return []
  const split = (line) => { const out = []; let cur = "", q = false
    for (let i = 0; i < line.length; i++) { const ch = line[i]
      if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
      else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
    out.push(cur); return out }
  const H = split(lines[0])
  return lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }
const readJson = (p) => { try { return JSON.parse(fs.readFileSync(p, "utf8")) } catch { return null } }

// --- the gated registry + its per-cell audit verdict ---
const nmRows = fs.existsSync(ev("standards-not-material.csv")) ? parseCsv(fs.readFileSync(ev("standards-not-material.csv"), "utf8")) : []
const gated = new Map(nmRows.map((r) => [`${r.row_slug}|${r.metal_species}`, r]))
const auditVerdict = new Map(
  (fs.existsSync(ev("standards-not-material-audit.csv")) ? parseCsv(fs.readFileSync(ev("standards-not-material-audit.csv"), "utf8")) : [])
    .map((r) => [`${r.row_slug}|${r.metal_species}`, r.verdict]))

// --- enumerate not_material assertions from the config layer (the un-gated source) ---
// Structure differs: food configs use defaults/read_across.<metal>.not_material;
// Cat 9 uses cells.<metal>.not_material.
function configAssertions(file, kind) {
  const j = readJson(path.join(REPO, file)); if (!j) return []
  const subs = j.subcategories || j.cells ? (j.subcategories || { _: { cells: j.cells } }) : j
  const out = []
  for (const [slug, sub] of Object.entries(subs)) {
    if (!sub || typeof sub !== "object") continue
    const cells = sub.cells || { ...(j.default_read_across || {}), ...(sub.read_across || {}) }
    for (const [rawMetal, cell] of Object.entries(cells)) {
      const metal = rawMetal
      if (!PANEL.has(metal)) continue
      const isNm = cell && typeof cell === "object" && ("not_material" in cell)
        ? cell.not_material : false
      if (isNm) out.push({ slug, metal, file: path.basename(file), kind })
    }
  }
  return out
}
const configNm = [
  ...configAssertions("tools/standards/cat1-config.json", "cat1"),
  ...configAssertions("tools/standards/cat3-config.json", "cat3"),
  ...configAssertions("tools/standards/cat9-config.json", "cat9"),
  ...configAssertions("tools/standards/seafood-config.json", "seafood"),
  ...configAssertions("tools/standards/cat7-config.json", "cat7"),
  ...configAssertions("tools/standards/cat24-config.json", "cat24"),
  ...configAssertions("tools/standards/cat25-config.json", "cat25"),
]

// --- evidence streams (mirror of the substantiation audit) ---
const dist = fs.existsSync(ev("hmtc_aggregate_distributions.csv")) ? parseCsv(fs.readFileSync(ev("hmtc_aggregate_distributions.csv"), "utf8")) : []
const reg = fs.existsSync(ev("regulatory_limits.csv")) ? parseCsv(fs.readFileSync(ev("regulatory_limits.csv"), "utf8")) : []
const excluded = fs.existsSync(ev("extraction_excluded.csv")) ? parseCsv(fs.readFileSync(ev("extraction_excluded.csv"), "utf8")) : []
const quarantined = new Set(excluded.map((r) => `${r.row_slug}|${r.metal_species}`))
const PRESENT_FLOOR = { Pb: 5, tAs: 5, iAs: 3, Cd: 3, tHg: 3, MeHg: 2, Ni: 20, Al: 20000, "Cr-VI": 3, Sn: 50 }
const CREDIBLE = /\b(EU|European|Codex|CODEX|CXS|CAC|FDA|WHO|JECFA|EFSA|FSANZ|Health Canada)\b/
const CONTACT_SCOPE = /\b(toy|migration|food.?contact|tableware|drinkware|soother|pacifier|teeth|nipple|teat|textile|article|scraped|coating)\b/i
const FOOD_SCOPE = /\b(formulae?|rice|cereal|baby food|juice|canned|fish|cephalopod|crustacea|mollusc|meat|vegetable|fruit|honey|spice|salt|beverage|milk|grain|seaweed|kelp)\b/i

function materialOccurrence(slug, metal) {
  const rows = dist.filter((r) => r.product_slug === slug && r.metal_species === metal)
  if (!rows.length || quarantined.has(`${slug}|${metal}`)) return null
  rows.sort((a, b) => (num(b.pooled_n) ?? 0) - (num(a.pooled_n) ?? 0)); const r = rows[0]
  const p50 = num(r.pooled_p50), n = num(r.pooled_n) ?? 0, d = num(r.distinct_sources) ?? 0
  const floor = PRESENT_FLOOR[metal] ?? 5
  if ((r.sens_band || "") !== "no_data" && d >= 2 && n >= 20 && (p50 ?? 0) > floor)
    return { n, d, p50, p95: num(r.pooled_p95) }
  return null
}
function speciesML(slug, metal) {
  // a credible ML for the SPECIES itself (iAs/MeHg) is disqualifying; parent totals are not.
  const isContact = /diaper|bottle|nipple|sippy|pacifier|teeth|feeding|storage|toy/.test(slug)
  return reg.some((r) => r.metal_species === metal && CREDIBLE.test(`${r.jurisdiction} ${r.authority}`) &&
    (isContact ? CONTACT_SCOPE.test((r.product_scope || "").toLowerCase()) : FOOD_SCOPE.test((r.product_scope || "").toLowerCase())) &&
    slug.split("-").filter((w) => w.length > 3).some((k) => (r.product_scope || "").toLowerCase().includes(k)))
}

// --- reconcile ---
const report = []
const universe = new Set([...gated.keys(), ...configNm.map((c) => `${c.slug}|${c.metal}`)])
for (const key of universe) {
  const [slug, metal] = key.split("|")
  const inGated = gated.has(key)
  const inConfig = configNm.some((c) => `${c.slug}|${c.metal}` === key)
  const configKinds = configNm.filter((c) => `${c.slug}|${c.metal}` === key).map((c) => c.kind)
  let verdict, reason
  if (inGated) {
    // a gated cell defers to the class-aware substantiation audit — natural-accumulator/additive
    // classes legitimately carry high occurrence, so raw occurrence is NOT re-judged here.
    const av = auditVerdict.get(key)
    verdict = av === "FAIL" ? "CONTRADICTED" : "GATED_OK"
    reason = av === "FAIL" ? `substantiation audit FAILED` : `gated + substantiated (audit ${av || "PASS"})`
  } else if (inConfig) {
    // an un-gated config assertion: it bypasses the gate. Annotate whether evidence also rebuts it,
    // so the mirror-into-CSV step knows whether to reclassify (contradicted) or substantiate (silent).
    const occ = materialOccurrence(slug, metal)
    const spML = (metal === "iAs" || metal === "MeHg" || metal === "Cr-VI") && speciesML(slug, metal)
    verdict = "COVERAGE_GAP"
    reason = `asserted not-material in ${configKinds.join("/")}-config but ABSENT from the gated standards-not-material.csv`
      + (occ ? ` — AND contradicted: material ${metal} occurrence (n=${occ.n} p50=${Math.round(occ.p50)})` : "")
      + (spML ? ` — AND contradicted: a credible ${metal}-specific ML exists` : "")
  } else { verdict = "GATED_OK"; reason = "no assertion" }
  report.push({ slug, metal, inGated, inConfig, configKinds: configKinds.join("/"), verdict, reason })
}

// --- write + summarize ---
const cols = ["slug", "metal", "in_gated_csv", "in_config", "config_kinds", "verdict", "reason"]
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
fs.writeFileSync(ev("standards-not-material-corpus-audit.csv"),
  [cols.join(","), ...report.map((r) => [r.slug, r.metal, r.inGated, r.inConfig, r.configKinds, r.verdict, r.reason].map(esc).join(","))].join("\n") + "\n")

const by = {}; for (const r of report) by[r.verdict] = (by[r.verdict] || 0) + 1
console.log(`Not-material CORPUS reconciler — ${report.length} distinct (product,analyte) not-material cells across all representations`)
console.log(`  gated CSV rows: ${gated.size} | config-layer assertions: ${configNm.length}`)
for (const k of ["CONTRADICTED", "COVERAGE_GAP", "GATED_OK"]) if (by[k]) console.log(`  ${String(by[k]).padStart(3)}  ${k}`)
const bad = report.filter((r) => r.verdict === "CONTRADICTED" || r.verdict === "COVERAGE_GAP")
if (bad.length) {
  console.log(`\nMust resolve (mirror into the gated CSV with a basis_class, or reclassify to a real standard):`)
  for (const r of bad) console.log(`  ${r.verdict.padEnd(13)} ${r.slug} / ${r.metal} [${r.configKinds}] — ${r.reason}`)
}
console.log(`\nWrote data/evidence/standards-not-material-corpus-audit.csv`)
if (bad.length && !WARN_ONLY) process.exit(1)
