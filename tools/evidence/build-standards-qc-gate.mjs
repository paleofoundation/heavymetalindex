#!/usr/bin/env node
// build-standards-qc-gate.mjs
//
// The Publication QC Gate (docs/architecture/standards-publication-qc-gate.md).
// Deterministic per-(row,metal) validation that a value is defensible before it may
// publish as a firm standard. The answer to the 2026-06-16 Principle-4 scare: stop
// finding defects by tripping over them — make publication conditional on passing.
//
// Verdict per cell: CRITICAL_FAIL (blocks the build) / FAIL / DEMOTE / HOLD / WARN / PASS.
// Exits non-zero if any CRITICAL_FAIL, so it can gate the build.
//
// Reads:  data/evidence/hmtc_aggregate_distributions.csv  (the values)
//         data/evidence/standards-outlier-adjudication.csv (held cells)
// Writes: data/evidence/standards-qc-gate-report.csv + a console summary.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const ev = (f) => path.join(repoRoot, "data/evidence", f)
const args = new Set(process.argv.slice(2))
const filterSlug = (process.argv.find((a) => a.startsWith("--product=")) || "").split("=")[1] || ""

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  if (!lines.length) return []
  const split = (line) => {
    const out = []; let cur = ""; let q = false
    for (let i = 0; i < line.length; i++) { const ch = line[i]
      if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
      else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
    out.push(cur); return out
  }
  const H = split(lines[0])
  return lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) && String(v).trim() !== "" ? n : null }

const PANEL = new Set(["Pb", "tAs", "Cd", "MeHg", "tHg", "iAs", "Ni", "Al", "Cr-VI", "Sn"])
const BIG4 = new Set(["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg"]) // toxics regulated almost everywhere
const isFirmVerdict = (v) => v.startsWith("READY FOR REVIEW") && !/interim/.test(v)

const dist = parseCsv(fs.readFileSync(ev("hmtc_aggregate_distributions.csv"), "utf8"))
const adj = fs.existsSync(ev("standards-outlier-adjudication.csv")) ? parseCsv(fs.readFileSync(ev("standards-outlier-adjudication.csv"), "utf8")) : []
const heldSet = new Set(
  adj.filter((r) => !/^cleared/i.test(r.disposition || "")).map((r) => `${r.row_slug}|${r.metal_species}`),
)

const report = []
for (const r of dist) {
  const slug = r.product_slug, metal = r.metal_species
  if (!PANEL.has(metal)) continue
  if (filterSlug && slug !== filterSlug) continue
  const cand = num(r.candidate_value_ppb)
  const cap = num(r.lowest_regulatory_cap_ppb)
  const distinct = num(r.distinct_sources) ?? 0
  const rat = (r.rationale_tag_auto || "").trim()
  const verdict = (r.verdict || "").trim()
  const sens = (r.sens_band || "").toLowerCase()
  const n = num(r.pooled_n) ?? 0
  const firm = isFirmVerdict(verdict)
  const held = heldSet.has(`${slug}|${metal}`)

  const checks = []
  // C1 — CRITICAL: a published value may never exceed its regulatory cap (Principle 4)
  if (cand !== null && cap !== null && cand > cap * 1.0001)
    checks.push({ level: "CRITICAL_FAIL", check: "C1-value-exceeds-cap", detail: `candidate ${cand} > cap ${cap}` })
  // C1b — WARN: cap-completeness. A big-4 toxic published on literature with NO mapped cap
  // is the fish-Pb class — a regulatory ML very likely exists and must be loaded.
  if (BIG4.has(metal) && rat === "literature-baseline" && cap === null && cand !== null)
    checks.push({ level: "WARN", check: "C1b-cap-completeness", detail: `big-4 toxic, literature-baseline, NO mapped cap — verify/map the regulatory ML` })
  // C8 — FAIL: rationale honesty. If the cap binds (value == cap) the tag must be regulatory-alignment.
  if (cand !== null && cap !== null && Math.abs(cand - cap) < 0.5 && rat !== "regulatory-alignment")
    checks.push({ level: "FAIL", check: "C8-rationale-mislabel", detail: `value==cap but rationale='${rat}' (should be regulatory-alignment)` })
  // C4 — DEMOTE: distinct-source floor. A firm cell needs >=2 distinct sources.
  if (firm && distinct < 2 && !held)
    checks.push({ level: "DEMOTE", check: "C4-distinct-source-floor", detail: `firm with distinct_sources=${distinct} (<2) — must be provisional` })
  // C7 — WARN: reconstruction sanity. needs_review sensitivity or a single-point pool can't be firm.
  if (firm && (sens === "needs_review" || n <= 1) && !held)
    checks.push({ level: "WARN", check: "C7-reconstruction-sanity", detail: `firm but sens='${sens}' n=${n} — single-point/unstable, not firm` })
  // C6 — HOLD: a cell in the adjudication register must not render firm.
  if (held && firm)
    checks.push({ level: "HOLD", check: "C6-adjudication-register", detail: `in outlier/suspect register but verdict is firm — must render pending` })

  const level = checks.some((c) => c.level === "CRITICAL_FAIL") ? "CRITICAL_FAIL"
    : checks.some((c) => c.level === "FAIL") ? "FAIL"
    : checks.some((c) => c.level === "DEMOTE") ? "DEMOTE"
    : checks.some((c) => c.level === "HOLD") ? "HOLD"
    : checks.some((c) => c.level === "WARN") ? "WARN"
    : "PASS"
  if (cand === null && !held) continue // no value to gate (genuine no-data, handled upstream)
  report.push({ product_slug: slug, metal_species: metal, candidate_value_ppb: r.candidate_value_ppb,
    cap: cap ?? "", rationale: rat, verdict_level: level,
    reasons: checks.map((c) => `${c.check}: ${c.detail}`).join(" | ") })
}

// write report
const cols = ["product_slug", "metal_species", "candidate_value_ppb", "cap", "rationale", "verdict_level", "reasons"]
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
fs.writeFileSync(ev("standards-qc-gate-report.csv"), [cols.join(","), ...report.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n")

// summary
const by = {}
for (const r of report) by[r.verdict_level] = (by[r.verdict_level] || 0) + 1
const order = ["CRITICAL_FAIL", "FAIL", "DEMOTE", "HOLD", "WARN", "PASS"]
console.log(`Publication QC Gate — ${report.length} cells gated${filterSlug ? ` (${filterSlug})` : ""}`)
for (const k of order) if (by[k]) console.log(`  ${String(by[k]).padStart(4)}  ${k}`)
const critical = report.filter((r) => r.verdict_level === "CRITICAL_FAIL")
if (critical.length) {
  console.log(`\nCRITICAL (build-blocking) — published values exceeding their cap:`)
  for (const r of critical) console.log(`  ${r.product_slug} / ${r.metal_species}: ${r.reasons}`)
}
console.log(`\nWrote data/evidence/standards-qc-gate-report.csv`)
if (critical.length && !args.has("--warn-only")) process.exit(1)
