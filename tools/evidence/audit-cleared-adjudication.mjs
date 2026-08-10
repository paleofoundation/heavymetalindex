#!/usr/bin/env node
// audit-cleared-adjudication.mjs
//
// The cleared-adjudication reconciler (Karen 2026-08-10, "next altitude" from the not-material
// reconciler).
//
// A "cleared" disposition in standards-outlier-adjudication.csv is an AFFIRMATIVE CLAIM that a
// flagged outlier is immaterial to the published standard — and it SILENCES the QC gate's C6 HOLD,
// letting the cell render firm. Clearing is therefore load-bearing and, like "not material", a
// rebuttable presumption: it is valid only if it (a) states WHY the outlier is immaterial — the cap
// binds, the artifact is excluded, or the value was re-verified — and (b) that reason still holds
// against current evidence.
//
// The failure mode this gate exists to catch (the olive-oil tAs pathology, 2026-08-10): a clearing
// that defers to another claim — "cleared: superseded by not-material" — when that other claim is
// itself false or absent. A clearing may not launder an unsubstantiated determination into a firm
// value. On the first run this gate finds cooking-oils-other/Cd cleared as "designated not-material"
// while (cooking-oils-other, Cd) is absent from the gated not-material.csv.
//
// Verdict per cleared row: FAIL (the clearing's basis no longer holds — the cell must re-HOLD) /
// WARN (basis unverifiable or under-stated) / PASS. Exits non-zero on any FAIL unless --warn-only.

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
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
const load = (f) => (fs.existsSync(ev(f)) ? parseCsv(fs.readFileSync(ev(f), "utf8")) : [])

const adj = load("standards-outlier-adjudication.csv")
const dist = load("hmtc_aggregate_distributions.csv")
const nmGated = new Set(load("standards-not-material.csv").map((r) => `${r.row_slug}|${r.metal_species}`))
const nmAudit = new Map(load("standards-not-material-audit.csv").map((r) => [`${r.row_slug}|${r.metal_species}`, r.verdict]))

// current cell state from the pooled distribution (most-populated role row per slug|metal)
function cellState(slug, metal) {
  const rows = dist.filter((r) => r.product_slug === slug && r.metal_species === metal)
  if (!rows.length) return null
  rows.sort((a, b) => (num(b.pooled_n) ?? 0) - (num(a.pooled_n) ?? 0)); const r = rows[0]
  return { cand: num(r.candidate_value_ppb), cap: num(r.lowest_regulatory_cap_ppb),
    rat: (r.rationale_tag_auto || "").trim(), verdict: (r.verdict || "").trim(),
    distinct: num(r.distinct_sources) ?? 0 }
}

// classify the immateriality basis a clearing asserts, from its disposition text.
// Order matters: the specific correction/verification bases are tested BEFORE the looser
// cap-binds pattern, so a "unit-bug FALSE POSITIVE" clearing is not miscategorised as cap-binds
// merely because the word "regulatory" appears somewhere in its prose.
function clearingBasis(text) {
  const t = text.toLowerCase()
  if (/not.?material/.test(t)) return "not-material"
  if (/typo|1000x|unit.?bug|false positive|transcription|mg\/kg-as-ppb/.test(t)) return "unit-corrected"
  if (/recover|stabiliz|re-?verif|normaliz|primary extraction|admitted real/.test(t)) return "re-verified"
  // a clearing that KEEPS a high tail because it is a real, defensible market/process signal
  // (e.g. olive-oil Ni hydrogenation-catalyst bimodality) rather than an artifact.
  if (/defensible|genuine|real (refined|bimodal|market|hydrogenat|process|variation|tail)|bimodalit/.test(t)) return "real-variation"
  if (/excluded|quarantin|\bartifact\b|dropped/.test(t)) return "artifact-excluded"
  if (/\bcap\b|regulatory (cap|alignment|limit)|binds/.test(t)) return "cap-binds"
  return "unrecognized"
}

const cleared = adj.filter((r) => /^cleared/i.test((r.disposition || "").trim()))
const report = []
for (const r of cleared) {
  const slug = (r.row_slug || "").trim(), metal = (r.metal_species || "").trim()
  const disp = (r.disposition || "").trim()
  const basis = clearingBasis(disp)
  const key = `${slug}|${metal}`
  const notes = []

  if (!slug) {
    notes.push(["WARN", "wildcard (blank row_slug) clearing — applies globally; cannot verify against a single cell, review manually"])
  }

  // --- the load-bearing check: a clearing that defers to not-material must point to a gated,
  //     substantiated not-material claim (else it launders an absent/failed claim into a firm value)
  if (basis === "not-material") {
    if (!nmGated.has(key)) {
      notes.push(["FAIL", `clearing defers to a not-material designation, but (${slug}, ${metal}) is ABSENT from the gated standards-not-material.csv — the clearing launders a determination that does not exist (the olive-oil tAs pathology); re-HOLD or add+substantiate the not-material row`])
    } else {
      const v = nmAudit.get(key)
      if (v === "FAIL")
        notes.push(["FAIL", `clearing defers to a not-material designation whose substantiation audit FAILED — a failed not-material claim cannot clear an outlier; re-HOLD`])
      else if (!v)
        notes.push(["WARN", `clearing defers to not-material but that cell is not present in the substantiation audit — run audit-not-material-substantiation.mjs and confirm PASS`])
      else
        notes.push(["PASS", `defers to a gated+substantiated not-material claim (audit ${v})`])
    }
  }

  // --- cap-binds: the cell must actually carry a binding cap now (value==cap, regulatory-alignment)
  if (basis === "cap-binds") {
    const st = cellState(slug, metal)
    if (!st || st.cand === null) {
      notes.push(["WARN", `clearing says a regulatory cap binds, but no current pooled value exists for (${slug}, ${metal}) to confirm the cap is loaded and binding`])
    } else if (st.cap === null) {
      notes.push(["FAIL", `clearing says a regulatory cap binds, but the current cell has NO mapped regulatory cap (cand ${st.cand}, rationale '${st.rat}') — the cap the clearing relied on is not loaded; re-verify`])
    } else if (st.cand > st.cap * 1.0001) {
      notes.push(["FAIL", `clearing says the cap (${st.cap}) binds below the tail, but the current published value ${st.cand} EXCEEDS the cap — the clearing's premise is false; re-HOLD`])
    } else {
      notes.push(["PASS", `cap ${st.cap} binds at value ${st.cand} (rationale '${st.rat}')`])
    }
  }

  // --- re-verified / recovered: the recovery it claims must still be present (distinct>=2)
  if (basis === "re-verified") {
    const st = cellState(slug, metal)
    if (st && st.distinct < 2)
      notes.push(["WARN", `clearing claims the pool was re-verified/recovered, but the current cell has distinct_sources=${st.distinct} (<2) — the recovery it cites may have regressed; re-check`])
    else
      notes.push(["PASS", `re-verification/recovery basis; current distinct_sources=${st ? st.distinct : "?"}`])
  }

  // --- real-variation: the high tail is KEPT as a genuine market/process signal; it must still
  //     rest on more than one source, else "defensible bimodality" is one lab's spread.
  if (basis === "real-variation") {
    const st = cellState(slug, metal)
    if (st && st.distinct < 2)
      notes.push(["WARN", `clearing keeps the tail as real/defensible variation, but the current cell has distinct_sources=${st.distinct} (<2) — a single-source "bimodality" is not defensible; re-check`])
    else
      notes.push(["PASS", `real-variation basis retained; current distinct_sources=${st ? st.distinct : "?"} (verify the tail is genuine market/process spread, not an artifact)`])
  }

  // --- unit-corrected / artifact-excluded: mechanical corrections; low-risk but record the basis
  if (basis === "unit-corrected" || basis === "artifact-excluded") {
    notes.push(["PASS", `${basis} — mechanical correction; the outlier value was fixed/removed, not reasoned away`])
  }

  // --- a clearing that states no recognizable immateriality reason is itself the defect
  if (basis === "unrecognized") {
    notes.push(["WARN", `clearing states no recognizable immateriality basis (expected: cap-binds / not-material / artifact-excluded / re-verified / unit-corrected) — a "cleared" disposition must say WHY the outlier is immaterial: "${disp.slice(0, 120)}"`])
  }

  const level = notes.some((n) => n[0] === "FAIL") ? "FAIL"
    : notes.some((n) => n[0] === "WARN") ? "WARN" : "PASS"
  report.push({ slug: slug || "(wildcard)", metal, basis, level, disp, notes })
}

// write machine-readable report
const outCsv = ev("standards-cleared-audit.csv")
const cols = ["row_slug", "metal_species", "clearing_basis", "verdict", "reasons", "disposition"]
fs.writeFileSync(outCsv, [cols.join(","),
  ...report.map((r) => [r.slug, r.metal, r.basis, r.level,
    r.notes.map((n) => `${n[0]}: ${n[1]}`).join(" | "), r.disp].map(esc).join(","))].join("\n") + "\n")

// console summary
const by = {}; for (const r of report) by[r.level] = (by[r.level] || 0) + 1
console.log(`Cleared-adjudication reconciler — ${report.length} cleared dispositions gated`)
for (const k of ["FAIL", "WARN", "PASS"]) if (by[k]) console.log(`  ${String(by[k]).padStart(3)}  ${k}`)
const fails = report.filter((r) => r.level === "FAIL")
if (fails.length || VERBOSE) {
  console.log(fails.length ? `\nFAIL (the clearing's basis no longer holds — cell must re-HOLD):` : `\n(no failures)`)
  for (const r of (VERBOSE ? report : fails)) {
    if (!VERBOSE && r.level !== "FAIL") continue
    console.log(`  ${r.slug} / ${r.metal} [${r.basis}] → ${r.level}`)
    for (const n of r.notes) if (VERBOSE || n[0] === "FAIL") console.log(`      ${n[0]}: ${n[1]}`)
  }
}
console.log(`\nWrote ${path.relative(REPO, outCsv)}`)
if (fails.length && !WARN_ONLY) process.exit(1)

export function clearedAuditVerdicts() {
  const m = new Map()
  for (const r of report) m.set(`${r.slug}|${r.metal}`, { level: r.level, reasons: r.notes })
  return m
}
