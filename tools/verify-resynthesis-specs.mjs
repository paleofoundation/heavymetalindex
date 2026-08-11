#!/usr/bin/env node
/**
 * Verify a resynthesis specs.json (from the censored-zero drain) BEFORE applying:
 *  - each (slug,metal) is an actual flagged cell (scratchpad_audit.json)
 *  - every key_sources file exists in wiki/sources/
 *  - the proposed values would PASS tools/audit-contamination-profile-integrity.mjs
 *  - p95 >= typical_hi (monotone tail), no understating [x,0]/p95 0
 *  - FDA-anchor sanity: flag if fully-censored FDA cell but p95 >> RL with no
 *    non-FDA key source, or if typical_hi < the FDA max detect (would understate)
 *  - style: note has no em-dash and no inline bold
 * Exit 0 always; prints PASS/FLAG per spec. Human reviews FLAGs.
 *
 * Usage: node tools/verify-resynthesis-specs.mjs scratchpad_specs_<fam>.json
 */
import fs from "node:fs"
const REPO = process.cwd()
const specPath = process.argv[2]
const specs = JSON.parse(fs.readFileSync(specPath, "utf8"))
const audit = JSON.parse(fs.readFileSync("scratchpad_audit.json", "utf8"))
const flagged = new Set(audit.failures.map((f) => `${f.slug}|${f.metal}`))

// FDA anchor
const parse = (t) => { const rows = []; let f = [], cur = "", q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++ } else q = false } else cur += c } else { if (c === '"') q = true; else if (c === ",") { f.push(cur); cur = "" } else if (c === "\n") { f.push(cur); rows.push(f); f = []; cur = "" } else if (c === "\r") { } else cur += c } } if (cur !== "" || f.length) { f.push(cur); rows.push(f) } return rows }
const tr = parse(fs.readFileSync("data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv", "utf8"))
const th = tr[0], ti = (n) => th.indexOf(n)
const tds = {}
for (const r of tr.slice(1)) { const s = r[ti("ingredient_slug")], m = r[ti("metal_species")]; if (!m) continue; tds[`${s}|${m}`] = { n: +r[ti("n")], zero: +r[ti("reported_zero_n")], max: +r[ti("max_ppb_equivalent")], rl: +r[ti("reporting_limit_max_ppb_equivalent")] } }

let nPass = 0, nFlag = 0
for (const s of specs) {
  const key = `${s.slug}|${s.metal}`
  const flags = []
  if (!flagged.has(key)) flags.push("NOT-IN-FLAGGED-SET")
  // key sources exist
  for (const k of (s.key_sources || [])) {
    if (!fs.existsSync(`${REPO}/wiki/sources/${k}.md`)) flags.push(`MISSING-SOURCE:${k}`)
  }
  if (!s.key_sources || !s.key_sources.length) flags.push("NO-KEY-SOURCES")
  // audit-pass simulation
  const lo = s.typical_lo, hi = s.typical_hi, p95 = s.p95, n = s.n_studies, conf = s.confidence
  const isGap = lo === null && hi === null
  if (!isGap) {
    if (lo === 0 && hi === 0 && p95 === 0 && (conf === "high" || n >= 3)) flags.push("STILL-CENSORED-ZERO")
    if (p95 !== null && hi !== null && n > 5 && p95 <= hi) flags.push("STILL-DEGENERATE(p95<=typical_hi,n>5)")
    if (p95 !== null && hi !== null && p95 < hi) flags.push(`NONMONOTONE(p95 ${p95} < typical_hi ${hi})`)
    if (hi === 0 && (p95 === 0 || p95 === null)) flags.push("UNDERSTATES(typical_hi 0)")
  }
  // FDA sanity
  const t = tds[key]
  if (t) {
    const hasNonFda = (s.key_sources || []).some((k) => !/^fda/.test(k))
    if (t.zero >= t.n && t.max === 0 && p95 > t.rl * 2 && !hasNonFda) flags.push(`P95(${p95})>>RL(${t.rl}) with only-FDA sources — needs a non-FDA detect to justify`)
    if (t.max > 0 && hi !== null && hi < t.max && p95 !== null && p95 < t.max) flags.push(`UNDERSTATES-vs-FDA-max(${t.max})`)
  }
  // style
  if (/—/.test(s.note || "")) flags.push("EM-DASH-IN-NOTE")
  if (/\*\*/.test(s.note || "")) flags.push("BOLD-IN-NOTE")
  if (!/^n=\d+$|data gap/.test(s.coverage_display || "")) flags.push(`BAD-COVERAGE(${s.coverage_display})`)

  if (flags.length) { nFlag++; console.log(`FLAG ${key}: ${flags.join("; ")}  [typ ${lo}-${hi} p95 ${p95} n${n} ${conf}]`) }
  else { nPass++; console.log(`pass ${key}: typ ${lo}-${hi} p95 ${p95} n${n} ${conf}`) }
}
console.log(`\n${nPass} pass, ${nFlag} flagged, ${specs.length} total in ${specPath}`)
