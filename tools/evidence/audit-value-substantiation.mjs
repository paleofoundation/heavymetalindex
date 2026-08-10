#!/usr/bin/env node
// audit-value-substantiation.mjs
//
// The published-VALUE substantiation gate (Karen 2026-08-10, "next altitude" from the
// not-material reconciler).
//
// A firm literature-baseline value is an AFFIRMATIVE CLAIM: "the P97 of the certifiable
// product's real occurrence distribution for this analyte is X ppb." Like "not material",
// it is a rebuttable presumption. It is defensible only if it traces to ground truth — i.e.
// every source that sets the value actually measured THIS analyte, in THIS matrix, at a
// sample level, in-scope, and non-quarantined. When the pool silently holds an out-of-scope
// contributor (a fish paper in an oil pool), a mean reconstructed as a maximum, a mislabelled
// species (Cr-total in the Cr-VI slot, tAs on arsenobetaine-dominated fish), or is set by a
// single dominating lab, the published percentile is a fiction wearing a percentile's name.
//
// This gate mirrors audit-not-material-substantiation.mjs: it flips the burden of proof onto
// the value and reconciles it against the contribution_log the pooling engine emits per cell.
// It is complementary to build-standards-qc-gate.mjs (which checks cap-exceedance, n-floors,
// artifact plausibility) — this one checks CONTRIBUTOR TRACEABILITY, which the QC gate does not.
//
// Deterministic, low-false-positive by design (matching the not-material discipline):
//   - FAIL only on unambiguous defects (analyte-misroute, single-lab domination, untraceable).
//   - WARN + a structured flag for the fuzzy judgments a model sweep must adjudicate against the
//     source PDFs (scope-disjoint contributor, mean-as-max reconstruction, thin all-weak pool).
// The WARN backlog is what the ultracode drain workflow reads; the FAIL set is build-blocking
// once the backlog reaches zero (warn-only until then, matching the established pattern).
//
// Applies to firm (READY FOR REVIEW, non-interim) literature-baseline cells: those are the
// cells whose published number IS an estimate of the sample distribution. regulatory-alignment,
// precautionary, and feasibility-driven values are staff/legal selections, not percentile
// estimates, so contributor-traceability says nothing about them and they are reported INFO.
//
// Verdict per cell: FAIL (blocks once at zero) / WARN (drain) / PASS / INFO (not a pooled value).
// Exits non-zero on any FAIL unless --warn-only.

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

const PANEL = new Set(["Pb", "tAs", "Cd", "MeHg", "tHg", "iAs", "Ni", "Al", "Cr-VI", "Sn"])
const isFirmVerdict = (v) => v.startsWith("READY FOR REVIEW") && !/interim/.test(v)
// reconstruction methods that fabricate a spread from a single reported statistic (usually a
// mean or a bare range) — a P97 read off these is set by the reconstruction, not by measured
// upper-tail samples. uniform_*_only in particular is the "mean-treated-as-max" risk class.
const WEAK_RECON = new Set(["uniform_max_only", "uniform_range_only", "no_usable_statistic"])
// pseudo-source ids in the contribution_log that are not real measured papers (synthesized
// ingredient ranges, commodity roll-ups, TDS route candidates) — a value resting only on these
// is untraceable to a measured sample.
const PSEUDO_SRC = /^(ingredient-synthesis|commodity|tds-route|tds:|gemsfood-synth|synthetic)/i

const dist = parseCsv(fs.readFileSync(ev("hmtc_aggregate_distributions.csv"), "utf8"))

// --- routing layer (Part 5b): (source_id|product_slug) -> set of route_kinds ---
// A firm occurrence percentile is a claim about the product's DIRECT evidence. A source routed
// only as broad_*_context is one whose declaration is broad (e.g. "seafood" fanning to every
// fish row, or "infant-food" fanning to every formula variant) and whose routing action is
// "extract only if product-row fit is resolved" — it must not silently drive a firm percentile.
// This grounds the "out-of-scope / misrouted contributor" check in the system's own routing
// audit rather than a token heuristic (which merely re-derives, badly, what routing encodes).
const routeKind = new Map()
{
  const rp = ev("product_source_routing_audit.csv")
  if (fs.existsSync(rp)) for (const r of parseCsv(fs.readFileSync(rp, "utf8"))) {
    const k = `${r.source_id}|${r.product_slug}`
    ;(routeKind.get(k) || routeKind.set(k, new Set()).get(k)).add(r.route_kind)
  }
}
// classify a contributor's route into this product: "direct" | "context" | "none"
function contributorRoute(sid, product) {
  const kinds = routeKind.get(`${sid}|${product}`)
  if (!kinds) return "none"
  return kinds.has("direct_evidence") ? "direct" : "context"
}

// --- source frontmatter index: source_id -> {products, matrices, metals} ---
function frontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/); if (!m) return {}
  const fm = m[1]
  const arr = (key) => {
    // greedy to the LAST ] on the line: a lazy match stops at the first ] inside a nested
    // [[wikilink]] and silently drops every entry after the first (e.g. keeps olive-oil, loses
    // cooking-oils-other), which manufactures false scope-disjoint flags.
    const line = fm.match(new RegExp(`^${key}:\\s*\\[(.*)\\]\\s*$`, "m"))
    return line ? line[1].split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean) : []
  }
  const slug = (t) => t.replace(/^\[\[/, "").replace(/\]\]$/, "").replace(/^products\//, "").split("|")[0].trim()
  return { products: arr("products").map(slug), matrices: arr("matrices").map(slug), metals: arr("metals") }
}
const srcDir = path.join(REPO, "wiki/sources")
const srcIndex = new Map()
if (fs.existsSync(srcDir)) for (const f of fs.readdirSync(srcDir)) {
  if (!f.endsWith(".md")) continue
  const id = f.replace(/\.md$/, "")
  srcIndex.set(id, frontmatter(fs.readFileSync(path.join(srcDir, f), "utf8")))
}
// resolve a contribution_log source_id to a wiki source (exact, then prefix either direction)
function resolveSource(sid) {
  if (srcIndex.has(sid)) return srcIndex.get(sid)
  for (const [id, fm] of srcIndex) if (id.startsWith(sid) || sid.startsWith(id)) return fm
  return null
}
// does this source measure the analyte? speciation-aware. Returns {measures, parentOnly, listed}.
function analyteCoverage(analyte, metals) {
  if (!metals || !metals.length) return { measures: false, parentOnly: false, listed: false }
  const M = metals.map((m) => m.trim())
  const has = (x) => M.includes(x)
  const PARENT = { iAs: ["tAs", "As"], MeHg: ["tHg", "Hg"], "Cr-VI": ["Cr", "Cr-total"] }
  if (analyte === "tAs") return { measures: has("tAs") || has("As") || has("iAs"), parentOnly: false, listed: true }
  if (analyte === "tHg") return { measures: has("tHg") || has("Hg") || has("MeHg"), parentOnly: false, listed: true }
  if (PARENT[analyte]) {
    const species = has(analyte)
    const parent = PARENT[analyte].some(has)
    return { measures: species, parentOnly: !species && parent, listed: true }
  }
  return { measures: has(analyte), parentOnly: false, listed: true }
}
const report = []
for (const r of dist) {
  const slug = r.product_slug, metal = r.metal_species
  if (!PANEL.has(metal)) continue
  const cand = num(r.candidate_value_ppb)
  if (cand === null) continue
  const firm = isFirmVerdict((r.verdict || "").trim())
  const rat = (r.rationale_tag_auto || "").trim()

  // Only firm literature-baseline cells carry a percentile CLAIM about the sample distribution.
  if (!firm) continue
  if (rat !== "literature-baseline") {
    report.push({ slug, metal, cand, rat, level: "INFO", flags: [],
      notes: [["INFO", `${rat || "unlabelled"} value — a staff/legal selection, not a pooled percentile; contributor-traceability N/A`]] })
    continue
  }

  let log = []
  try { log = JSON.parse(r.contribution_log || "[]") } catch { /* malformed */ }
  const admitted = log.filter((x) => x && x.admitted)
  const notes = []
  const flags = [] // machine-readable flag tags for the drain workflow

  // --- contributor-level checks over admitted real sources ---
  const realAdmitted = admitted.filter((x) => !PSEUDO_SRC.test(x.source_id))
  const distinctReal = new Set(realAdmitted.map((x) => x.source_id)).size

  // untraceable: the value is set entirely by synthesized/pseudo contributors, no measured sample
  if (!realAdmitted.length) {
    notes.push(["FAIL", `untraceable — no admitted real-source contributor; value rests on ${admitted.length ? "synthesized/pseudo pool rows only" : "an empty pool"} (sample_level_contributing=${r.sample_level_contributing})`])
    flags.push("untraceable")
  }

  // per-source: analyte-measured + in-scope
  const shareBySource = {}
  for (const x of realAdmitted) {
    shareBySource[x.source_id] = (shareBySource[x.source_id] || 0) + (num(x.pool_share) ?? 0)
    const fm = resolveSource(x.source_id)
    if (!fm) continue // not resolvable to a wiki source — reported as untraceable if it dominates (below)
    const cov = analyteCoverage(metal, fm.metals)
    if (cov.listed && !cov.measures && !cov.parentOnly) {
      notes.push(["FAIL", `analyte-misroute: contributor ${x.source_id} (share ${(shareBySource[x.source_id] * 100).toFixed(0)}%) declares metals [${(fm.metals || []).join(", ")}] — does not measure ${metal}; a pool member that never measured the analyte inflates/deflates the percentile`])
      flags.push(`misroute-analyte:${x.source_id}`)
    } else if (cov.parentOnly) {
      notes.push(["WARN", `speciation: contributor ${x.source_id} measured the total parent, not ${metal} itself — verify the pool is not a total-element value wearing the ${metal} label (fish tAs→iAs / Cr-total→Cr-VI class)`])
      flags.push(`species-parent-only:${x.source_id}`)
    }
    const route = contributorRoute(x.source_id, slug)
    if (route === "context") {
      notes.push(["WARN", `off-route: contributor ${x.source_id} (share ${(shareBySource[x.source_id] * 100).toFixed(0)}%) is routed to '${slug}' only as broad_*_context, not direct_evidence — a broad-scope survey should not drive a firm occurrence percentile until its row-fit is resolved (Part 5b)`])
      flags.push(`off-route-context:${x.source_id}`)
    } else if (route === "none") {
      notes.push(["WARN", `no-route-row: contributor ${x.source_id} sets ${(shareBySource[x.source_id] * 100).toFixed(0)}% of the pool but has NO routing row for '${slug}' — verify the value did not enter via a broader-category or cross-form pool that bypasses routing (Part 5b)`])
      flags.push(`no-route-row:${x.source_id}`)
    }
    if (WEAK_RECON.has(x.reconstruction_method) && (num(x.pool_share) ?? 0) > 0.03) {
      notes.push(["WARN", `mean-as-max: contributor ${x.source_id} reconstructed via ${x.reconstruction_method} at ${((num(x.pool_share) ?? 0) * 100).toFixed(0)}% share — the pooled 'max' may be a group mean; confirm the source reports a real upper tail`])
      flags.push(`mean-as-max:${x.source_id}`)
    }
  }

  // cell-level: single-source domination (MAX_SOURCE_SHARE defeated) — sum shares per source_id
  const maxShare = Math.max(0, ...Object.values(shareBySource))
  const domSource = Object.entries(shareBySource).find(([, s]) => s === maxShare)?.[0]
  if (maxShare >= 0.65) {
    notes.push(["FAIL", `single-lab domination: ${domSource} sets ${(maxShare * 100).toFixed(0)}% of the pool — the percentile is one lab's distribution, not the market's (MAX_SOURCE_SHARE cap defeated, e.g. via multiple strata of one paper)`])
    flags.push(`share-domination:${domSource}`)
  } else if (maxShare >= 0.45) {
    notes.push(["WARN", `share concentration: ${domSource} sets ${(maxShare * 100).toFixed(0)}% of the pool — verify the value is not carried by a single source`])
    flags.push(`share-concentration:${domSource}`)
  }

  // thin all-weak pool: distinct<3 real sources AND every admitted contributor is a weak reconstruction
  const allWeak = realAdmitted.length > 0 && realAdmitted.every((x) => x.weak === true || WEAK_RECON.has(x.reconstruction_method))
  if (allWeak && distinctReal < 3) {
    notes.push(["WARN", `thin all-weak pool: ${distinctReal} distinct real source(s), every contributor a weak reconstruction — a P97 here is set by 1-2 mean-only reconstructions, not an upper tail`])
    flags.push("thin-all-weak")
  }

  const level = notes.some((n) => n[0] === "FAIL") ? "FAIL"
    : notes.some((n) => n[0] === "WARN") ? "WARN" : "PASS"
  report.push({ slug, metal, cand, rat, level, flags,
    notes: notes.length ? notes : [["PASS", `traceable: ${distinctReal} distinct in-scope real source(s), no domination, no analyte-misroute`]] })
}

// write machine-readable report
const outCsv = ev("standards-value-substantiation-audit.csv")
const cols = ["product_slug", "metal_species", "candidate_value_ppb", "rationale", "verdict", "flags", "reasons"]
fs.writeFileSync(outCsv, [cols.join(","),
  ...report.map((r) => [r.slug, r.metal, r.cand, r.rat, r.level, r.flags.join(";"),
    r.notes.map((n) => `${n[0]}: ${n[1]}`).join(" | ")].map(esc).join(","))].join("\n") + "\n")

// console summary
const by = {}; for (const r of report) by[r.level] = (by[r.level] || 0) + 1
console.log(`Published-value substantiation audit — ${report.length} firm cells gated`)
for (const k of ["FAIL", "WARN", "PASS", "INFO"]) if (by[k]) console.log(`  ${String(by[k]).padStart(3)}  ${k}`)
const fails = report.filter((r) => r.level === "FAIL")
if (fails.length || VERBOSE) {
  console.log(fails.length ? `\nFAIL (blocks once backlog drains to zero):` : `\n(no failures)`)
  for (const r of (VERBOSE ? report : fails)) {
    if (!VERBOSE && r.level !== "FAIL") continue
    console.log(`  ${r.slug} / ${r.metal} [${r.rat}] ${r.cand} ppb → ${r.level}`)
    for (const n of r.notes) if (VERBOSE || n[0] === "FAIL") console.log(`      ${n[0]}: ${n[1]}`)
  }
}
console.log(`\nWrote ${path.relative(REPO, outCsv)}`)
if (fails.length && !WARN_ONLY) process.exit(1)

export function valueAuditVerdicts() {
  // consumed by a future QC-gate fold-in: (slug|metal) -> {level, reasons, flags}
  const m = new Map()
  for (const r of report) m.set(`${r.slug}|${r.metal}`, { level: r.level, reasons: r.notes, flags: r.flags })
  return m
}
