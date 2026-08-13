#!/usr/bin/env node
// RETIRED 2026-08-12: this validator consumed superseded occurrence-selected candidate fields.
console.error("RETIRED: validate current frozen government-limit compiler records in the certification repository.")
process.exit(2)
// Deterministic verification gate for standards data. No LLM, no judgment.
//
//   node tools/evidence/verify-standards-data.mjs            # verify, exit 1 on FAIL
//   node tools/evidence/verify-standards-data.mjs --strict    # WARN also fails
//   node tools/evidence/verify-standards-data.mjs --json      # machine-readable
//
// WHY THIS EXISTS. Regulatory caps become published certification limits, so a bad
// row here is the exact artifact a plaintiff's expert attacks. Until now the only
// thing standing between a bad cap and a commit was a human reading a report —
// which makes the human a bottleneck AND an unreliable gate. Everything that
// actually caught defects in the 2026-07-28 cap-map review was deterministic
// (counts, unit scale, referential integrity, C1). That is all encoded here.
//
// AGENTS: run this, and commit ONLY if it exits 0. Do not ask a human to eyeball
// a report instead. If it fails, fix the data and re-run — or stop and report.
//
// FAIL  = must not be committed.
// WARN  = pre-existing debt; does not block unless --strict.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { minNForPercentile, classifyCell } from "./lib/standards-readiness.mjs"

const REPO = process.cwd()
const args = new Set(process.argv.slice(2))
const strict = args.has("--strict")
const asJson = args.has("--json")

const LIMITS = "data/evidence/regulatory_limits.csv"
const XWALK = "data/evidence/product_regulatory_crosswalk.csv"
const CLASSIFIER = "data/evidence/standards-row-classifier.csv"
const POOL = "data/evidence/hmtc_aggregate_distributions.csv"

// CLAUDE.md Part 14 metal vocabulary + the HMT&C 10-analyte panel.
const METALS = new Set(["Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "iHg", "Ni", "Al", "Cr", "Cr-VI", "Cr-total", "Sn", "Sb", "U"])

// A crosswalk row may legitimately cover several analytes at once
// ("Pb; Cd; tAs; tHg"), so validate each token rather than the whole field.
const splitMetals = (s) => String(s ?? "").split(";").map((x) => x.trim()).filter(Boolean)

// Sentinels that intentionally mean "no cap loaded" — not dangling references.
const LIMIT_ID_SENTINELS = new Set(["none_loaded", "none", "n/a", "na", "not_loaded", "pending"])

// Generous absolute sanity bounds in ug/kg. Deliberately wide: non-food
// instruments are legitimately high (CPSIA 100 ppm substrate = 100,000 ug/kg;
// Codex Sn 250 mg/kg = 250,000). These catch order-of-magnitude nonsense only.
const BOUNDS = {
  Pb: [1, 200_000], Cd: [1, 50_000], iAs: [1, 50_000], tAs: [1, 200_000],
  MeHg: [1, 20_000], tHg: [1, 20_000], iHg: [1, 20_000], Ni: [1, 200_000],
  Al: [1, 500_000], Cr: [1, 200_000], "Cr-VI": [0.1, 200_000],
  Sn: [1, 500_000], Sb: [1, 100_000], U: [0.1, 50_000],
}

// Findings carry a stable `key` (semantic identity, not a line number) so the
// baseline ratchet below survives rows moving around in the CSV.
const findings = []
const add = (level, check, detail, key) => findings.push({ level, check, detail, key: `${check}|${key ?? detail}` })

// ── Baseline ratchet ──────────────────────────────────────────────────
// This gate landed on a repo that already had defects. Blocking every future
// commit on pre-existing debt would make the gate unusable and it would be
// disabled within a day. Instead: NEW defects fail; known ones are recorded,
// reported, and cannot grow. Drain the baseline deliberately with
// --update-baseline once the underlying data is actually fixed.
const BASELINE = "data/evidence/standards-verify-baseline.json"
const baselinePath = path.join(REPO, BASELINE)
const baseline = fs.existsSync(baselinePath)
  ? new Set(JSON.parse(fs.readFileSync(baselinePath, "utf8")).known ?? [])
  : new Set()

function readCsv(rel) {
  const p = path.join(REPO, rel)
  if (!fs.existsSync(p)) { add("FAIL", "missing-file", rel); return [] }
  const text = fs.readFileSync(p, "utf8")
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== "")
  if (!lines.length) return []
  const hdr = splitCsvLine(lines[0])
  return lines.slice(1).map((l) => {
    const c = splitCsvLine(l)
    const o = {}
    hdr.forEach((h, i) => (o[h] = c[i] ?? ""))
    return o
  })
}

// Minimal RFC4180-ish splitter (quoted fields may contain commas).
function splitCsvLine(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (ch === '"') q = false
      else cur += ch
    } else if (ch === '"') q = true
    else if (ch === ",") { out.push(cur); cur = "" }
    else cur += ch
  }
  out.push(cur)
  return out
}

const num = (v) => {
  const s = String(v ?? "").trim()
  if (s === "") return null
  const n = Number(s)
  return Number.isFinite(n) ? n : null
}

// ── Load ──────────────────────────────────────────────────────────────
const limits = readCsv(LIMITS)
const xwalk = readCsv(XWALK)
const classifier = readCsv(CLASSIFIER)
const pool = readCsv(POOL)

// ── A. regulatory_limits integrity ────────────────────────────────────
const limitById = new Map()
for (const [i, r] of limits.entries()) {
  const row = `${LIMITS}:${i + 2}`
  const id = (r.regulatory_limit_id ?? "").trim()
  const metal = (r.metal_species ?? "").trim()
  const v = num(r.value_ug_kg)

  if (!id) add("FAIL", "limit-missing-id", row)
  else if (limitById.has(id)) add("FAIL", "limit-duplicate-id", `${row} duplicate id '${id}'`)
  else limitById.set(id, r)

  if (!METALS.has(metal)) add("FAIL", "limit-bad-metal-vocab", `${row} metal_species='${metal}' not in Part 14 vocabulary`)

  if (v === null) add("FAIL", "limit-unparseable-value", `${row} value_ug_kg='${r.value_ug_kg}'`)
  else if (v <= 0) add("FAIL", "limit-nonpositive-value", `${row} value_ug_kg=${v}`)
  else {
    const b = BOUNDS[metal]
    if (b && (v < b[0] || v > b[1]))
      add("FAIL", "limit-implausible-magnitude",
        `${row} ${metal} ${v} ug/kg outside [${b[0]}, ${b[1]}] — likely a unit-scale (1000x) error`)
  }

  // Referential: the cited regulation page must exist.
  const pg = (r.regulation_page ?? "").trim()
  if (pg) {
    const cands = [`wiki/${pg}.md`, `wiki/${pg}`, pg, `${pg}.md`]
    if (!cands.some((c) => fs.existsSync(path.join(REPO, c))))
      add("WARN", "limit-dangling-regulation-page", `${row} cites '${pg}' which does not exist`)
  } else {
    add("WARN", "limit-no-regulation-page", `${row} id='${id}' has no regulation_page`)
  }
}

// ── B. transcription fidelity: unit conversion vs the source page ─────
// The highest-consequence, lowest-visibility defect is a mg/kg value written
// into a ug/kg column unconverted (1000x too permissive). Where a regulation
// page states a single parseable limit_value + limit_unit, check the arithmetic.
for (const [i, r] of limits.entries()) {
  const row = `${LIMITS}:${i + 2}`
  const pg = (r.regulation_page ?? "").trim()
  const v = num(r.value_ug_kg)
  if (!pg || v === null) continue
  const file = [`wiki/${pg}.md`, `wiki/${pg}`, pg, `${pg}.md`]
    .map((c) => path.join(REPO, c)).find((c) => fs.existsSync(c))
  if (!file) continue
  const txt = fs.readFileSync(file, "utf8")
  const lv = txt.match(/^limit_value:\s*"?([^"\n]+)"?\s*$/m)
  const lu = txt.match(/^limit_unit:\s*"?([^"\n]+)"?\s*$/m)
  if (!lv || !lu) continue
  const pageVal = num(lv[1])
  if (pageVal === null) continue // "multiple" etc. — not checkable here
  const unit = lu[1].trim().toLowerCase()
  const factor = unit === "mg/kg" || unit === "ppm" || unit === "mg/l"
    ? 1000
    : unit === "ug/kg" || unit === "µg/kg" || unit === "ppb" || unit === "ug/l" || unit === "µg/l"
      ? 1
      : null
  if (factor === null) continue
  const expected = pageVal * factor
  if (Math.abs(v - expected) > Math.max(0.01, expected * 0.001)) {
    // A value matching the RAW page number when a conversion was required is the
    // signature of an unconverted unit slip.
    const slip = factor === 1000 && Math.abs(v - pageVal) < 0.01
    add(slip ? "FAIL" : "WARN",
      slip ? "limit-unit-conversion-slip" : "limit-value-page-mismatch",
      `${row} value_ug_kg=${v} but page '${pg}' states ${pageVal} ${unit} (expected ${expected})`)
  }
}

// ── C. crosswalk integrity ────────────────────────────────────────────
const capBy = new Map() // product|metal -> [values]
for (const [i, r] of xwalk.entries()) {
  const row = `${XWALK}:${i + 2}`
  const slug = (r.product_slug ?? "").trim()
  const metal = (r.metal_species ?? "").trim()
  const v = num(r.regulatory_value_ug_kg)
  const lid = (r.regulatory_limit_id ?? "").trim()

  if (!slug) add("FAIL", "xwalk-missing-slug", row)
  for (const m of splitMetals(metal)) {
    if (!METALS.has(m))
      add("FAIL", "xwalk-bad-metal-vocab", `${row} metal_species token '${m}' not in Part 14 vocabulary`, `${slug}|${m}`)
  }
  if (lid && limitById.size && !LIMIT_ID_SENTINELS.has(lid.toLowerCase()) && !limitById.has(lid))
    add("FAIL", "xwalk-orphan-limit-id", `${row} regulatory_limit_id='${lid}' not in ${LIMITS}`, lid)
  if (v !== null && v <= 0) add("FAIL", "xwalk-nonpositive-cap", `${row} ${v}`)
  if (v !== null) {
    const k = `${slug}|${metal}`
    if (!capBy.has(k)) capBy.set(k, [])
    capBy.get(k).push(v)
  }
}

// ── D. classifier consistency ─────────────────────────────────────────
let capMapTotal = 0, capMapUnresolved = 0
for (const r of classifier) {
  if ((r.next_action ?? "").trim() !== "CAP_MAP") continue
  capMapTotal++
  const k = `${(r.product_slug ?? "").trim()}|${(r.metal_species ?? "").trim()}`
  if (!capBy.has(k)) {
    capMapUnresolved++
    add("FAIL", "capmap-without-cap", `${k} classified CAP_MAP but no loaded cap resolves it`)
  }
}

// ── E. pool invariants: C1 and the percentile/n rule ──────────────────
for (const [i, r] of pool.entries()) {
  const row = `${POOL}:${i + 2}`
  const cand = num(r.candidate_value_ppb)
  const cap = num(r.lowest_regulatory_cap_ppb)
  const n = num(r.pooled_n)
  const tp = num(r.target_p)
  const sens = (r.sens_band ?? "").toLowerCase()
  const distinct = num(r.distinct_sources) ?? 0
  const p97 = num(r.pooled_p97)

  // C1 — a published value may never exceed its regulatory cap.
  if (cand !== null && cap !== null && cand > cap * 1.0001)
    add("FAIL", "C1-value-exceeds-cap", `${row} candidate ${cand} > cap ${cap}`)

  // The readiness/QC agreement fixed in 959e5c434 must not silently regress.
  // Test the ACTUAL code path (classifyCell) rather than re-implementing the
  // rule here — re-implementing would test this file's copy of the logic, not
  // the one the catalog uses, and would go on passing if classifyCell regressed.
  const verdict = classifyCell(r, false)
  if (verdict.state === "resolved" && verdict.confidence === "firm" && verdict.basis === "literature-baseline"
      && tp !== null && n !== null && n > 0) {
    const nMin = minNForPercentile(tp)
    if (nMin !== null && (n < nMin || tp > 1 - 1 / n))
      add("FAIL", "firm-without-sample-support",
        `${row} classifyCell grades firm at P${(tp * 100).toFixed(0)} with pooled_n=${n} (needs >=${nMin}) — the 959e5c434 guard regressed`)
  }
}

// ── F. regression vs committed HEAD ───────────────────────────────────
// Work must not go backwards. DONE rows falling or FETCH_INGEST rising means a
// mapping was broken, not improved.
function headCounts() {
  try {
    const prev = execFileSync("git", ["show", `HEAD:${CLASSIFIER}`], { cwd: REPO, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
    const lines = prev.split(/\r?\n/).filter((l) => l.trim())
    const hdr = splitCsvLine(lines[0])
    const idx = hdr.indexOf("next_action")
    if (idx < 0) return null
    const c = {}
    for (const l of lines.slice(1)) {
      const a = splitCsvLine(l)[idx]
      if (a) c[a] = (c[a] ?? 0) + 1
    }
    return c
  } catch { return null }
}
const now = {}
for (const r of classifier) {
  const a = (r.next_action ?? "").trim()
  if (a) now[a] = (now[a] ?? 0) + 1
}
// Pool depth must never collapse silently. A cell going from a substantial pool
// to zero is a bug signature (bad slug mapping, dropped metal_species), not
// legitimate pruning — canned-fish Cr-total went 257 -> 0 exactly this way.
// Ordinary shrinkage is reported but not blocking, because removing bad source
// pages legitimately shallows pools.
const standardsRowKeys = new Set(
  classifier.map((r) => `${(r.product_slug ?? "").trim()}|${(r.metal_species ?? "").trim()}`),
)
function poolDepthByCell(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim())
  if (!lines.length) return null
  const hdr = splitCsvLine(lines[0])
  const si = hdr.indexOf("product_slug"), mi = hdr.indexOf("metal_species"), ni = hdr.indexOf("pooled_n")
  if (si < 0 || mi < 0 || ni < 0) return null
  const m = new Map()
  for (const l of lines.slice(1)) {
    const c = splitCsvLine(l)
    const n = Number(String(c[ni] ?? "").trim())
    m.set(`${c[si]}|${c[mi]}`, Number.isFinite(n) ? n : 0)
  }
  return m
}
try {
  const prevPoolText = execFileSync("git", ["show", `HEAD:${POOL}`], { cwd: REPO, encoding: "utf8", maxBuffer: 256 * 1024 * 1024 })
  const prev = poolDepthByCell(prevPoolText)
  const cur = poolDepthByCell(fs.readFileSync(path.join(REPO, POOL), "utf8"))
  if (prev && cur) {
    let shrunk = 0, lostDepth = 0
    for (const [k, was] of prev) {
      const now = cur.get(k) ?? 0
      if (now < was) { shrunk++; lostDepth += was - now }
      // Only a cell that actually backs a standards row matters. A deprecated
      // pseudo-analyte emptying out (e.g. Cr-total, whose evidence re-speciates
      // onto Cr/Cr-VI) collapses harmlessly and has no classifier row.
      if (was >= 30 && now === 0 && standardsRowKeys.has(k))
        add("FAIL", "pool-collapsed-to-zero", `${k} pooled_n ${was} -> 0 — mapping likely broke`, k)
    }
    if (shrunk) add("WARN", "pool-depth-shrank", `${shrunk} cell(s) lost pooled_n (total ${lostDepth} samples) vs HEAD`, "aggregate")
  }
} catch { /* no HEAD version yet */ }

const prevCounts = headCounts()
if (prevCounts) {
  if ((now.DONE ?? 0) < (prevCounts.DONE ?? 0))
    add("FAIL", "regression-done-fell", `DONE ${prevCounts.DONE} -> ${now.DONE}`)
  if ((now.FETCH_INGEST ?? 0) > (prevCounts.FETCH_INGEST ?? 0))
    add("FAIL", "regression-fetch-rose", `FETCH_INGEST ${prevCounts.FETCH_INGEST} -> ${now.FETCH_INGEST} (a mapping likely broke)`)
}

// ── Apply the ratchet ─────────────────────────────────────────────────
if (args.has("--update-baseline")) {
  const known = [...new Set(findings.filter((f) => f.level === "FAIL").map((f) => f.key))].sort()
  fs.writeFileSync(baselinePath, JSON.stringify({
    note: "Known standards-data defects. NEW defects fail the gate; these are tracked debt and must not grow. Drain them, then re-run --update-baseline.",
    updated: new Date().toISOString().slice(0, 10),
    count: known.length,
    known,
  }, null, 2) + "\n")
  console.log(`Baseline updated: ${known.length} known defect(s) recorded in ${BASELINE}`)
  process.exit(0)
}

const rawFails = findings.filter((f) => f.level === "FAIL")
const fails = rawFails.filter((f) => !baseline.has(f.key))       // NEW → blocking
const knownFails = rawFails.filter((f) => baseline.has(f.key))   // tracked debt
const warns = findings.filter((f) => f.level === "WARN")
// The baseline is a ceiling, not a floor: if a known defect is fixed, good; if
// the count grows, that is caught above as a new key.
const staleBaseline = [...baseline].filter((k) => !rawFails.some((f) => f.key === k))

if (asJson) {
  console.log(JSON.stringify({ ok: fails.length === 0 && (!strict || warns.length === 0), fails, warns, counts: now }, null, 2))
} else {
  console.log("=== verify-standards-data ===")
  console.log(`  regulatory_limits: ${limits.length}   crosswalk: ${xwalk.length}   classifier: ${classifier.length}   pool: ${pool.length}`)
  console.log(`  CAP_MAP rows: ${capMapTotal} (${capMapUnresolved} unresolved)`)
  if (prevCounts) console.log(`  vs HEAD: DONE ${prevCounts.DONE ?? 0}->${now.DONE ?? 0}, FETCH_INGEST ${prevCounts.FETCH_INGEST ?? 0}->${now.FETCH_INGEST ?? 0}, CAP_MAP ${prevCounts.CAP_MAP ?? 0}->${now.CAP_MAP ?? 0}`)
  const group = (arr) => {
    const by = new Map()
    for (const f of arr) {
      if (!by.has(f.check)) by.set(f.check, [])
      by.get(f.check).push(f.detail)
    }
    for (const [k, v] of [...by.entries()].sort((a, b) => b[1].length - a[1].length)) {
      console.log(`   ${k} (${v.length})`)
      for (const d of v.slice(0, 5)) console.log(`      ${d}`)
      if (v.length > 5) console.log(`      … ${v.length - 5} more`)
    }
  }
  if (fails.length) { console.log(`\nNEW FAIL (${fails.length}) — introduced by this change, must not commit:`); group(fails) }
  if (knownFails.length) {
    console.log(`\nKNOWN debt (${knownFails.length}) — tracked in ${BASELINE}, not blocking, must not grow:`)
    group(knownFails)
  }
  if (staleBaseline.length)
    console.log(`\n${staleBaseline.length} baseline entr(ies) no longer fire — run --update-baseline to shrink the ratchet.`)
  if (warns.length) { console.log(`\nWARN (${warns.length})${strict ? " (blocking: --strict)" : ""}:`); group(warns) }
  console.log(fails.length === 0 && (!strict || warns.length === 0)
    ? "\nPASS — safe to commit."
    : "\nFAILED — fix the data, do not commit.")
}

process.exit(fails.length === 0 && (!strict || warns.length === 0) ? 0 : 1)
