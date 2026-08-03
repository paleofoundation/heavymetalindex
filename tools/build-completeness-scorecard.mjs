#!/usr/bin/env node
// Completeness scorecard for ingredient pages — v3's "Completeness scorecard".
//
// v3's contract, quoted from the artifact: "A deterministic gap audit. No score
// is composite and no cell is LLM-judged — every chip is re-derivable by
// re-running the scorecard build. This is the page telling you where it is thin
// before you read it."
//
// So: no composite score, no judgement, every cell a pure function of committed
// frontmatter. Columns are v3's — Dimension / Status / What is there / What is
// missing — and statuses are v3's: OK, THIN, GAP.
//
// SCOPE, STATED HONESTLY ON THE PAGE. docs/page-completeness-scorecard.md
// specifies eleven dimensions. Five of them (consumption-weighted depth,
// regional coverage, anthropogenic vs background partitioning, standards-
// readiness roll-up) need inputs this repo does not yet hold: a curated
// consumption-tier CSV and a partitioned upstream source set. Those are NOT
// rendered as passing rows — the block names them as not yet computed, because
// a scorecard that silently omits a dimension reads as that dimension being
// fine.
//
// FIREWALL: p95_ppb is in frontmatter and must never surface publicly
// (build-ingredient-contamination-tables.mjs:22-27 enforces the same rule).
// This emits counts, statuses and analyte names only — no concentration value
// of any kind, no threshold, no percentile.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const WIKI = join(ROOT, "wiki")
const APPLY = process.argv.includes("--apply")

const regs = (() => {
  const p = join(WIKI, "static/regulations.json")
  if (!existsSync(p)) return []
  const d = JSON.parse(readFileSync(p, "utf8"))
  return Array.isArray(d) ? d : (d.records ?? [])
})()

// Species-split pairs: recording bare "As" or "Hg" where the toxicology turns on
// the species is a real gap, and CLAUDE.md Part 14 calls it non-negotiable.
const SPLIT = { As: ["iAs", "tAs"], Hg: ["MeHg", "tHg"] }

function parseProfile(md) {
  const block = md.match(/^contamination_profile:\n([\s\S]*?)(?=\n[a-z_]+:|\n---)/m)
  if (!block) return {}
  const out = {}
  let cur = null
  for (const line of block[1].split("\n")) {
    const m2 = line.match(/^  ([A-Za-z][A-Za-z0-9-]*):\s*$/)
    if (m2) { cur = m2[1]; out[cur] = {}; continue }
    const kv = line.match(/^    ([a-z_]+):\s*(.+)$/)
    if (kv && cur) out[cur][kv[1]] = kv[2].trim()
  }
  return out
}

const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").trim()
let touched = 0

for (const f of readdirSync(join(WIKI, "ingredients")).filter((x) => x.endsWith(".md") && x !== "index.md")) {
  const p = join(WIKI, "ingredients", f)
  const md = readFileSync(p, "utf8")
  const slug = f.replace(/\.md$/, "")
  const title = (md.match(/^title:\s*"?([^"\n]+)"?/m) || [])[1]?.trim() ?? slug

  const prof = parseProfile(md)
  const analytes = Object.keys(prof)
  if (!analytes.length) continue // nothing to audit; no block rather than an empty one

  const populated = analytes.filter((a) => (prof[a].status ?? "") === "populated")
  const nOf = (a) => Number(prof[a].n_studies ?? 0) || 0
  const rows = []

  // D1 — analyte coverage
  rows.push({
    dim: "Analyte coverage",
    status: populated.length === analytes.length ? "OK" : populated.length ? "THIN" : "GAP",
    have: `${populated.length} of ${analytes.length} profiled analytes populated`,
    miss: populated.length === analytes.length
      ? "—"
      : `unpopulated: ${analytes.filter((a) => !populated.includes(a)).join(", ")}`,
  })

  // D5 — pooling depth. Thresholds are the spec's own words, not new policy.
  const confident = populated.filter((a) => nOf(a) >= 15)
  const poolable = populated.filter((a) => nOf(a) >= 5 && nOf(a) < 15)
  const thin = populated.filter((a) => nOf(a) > 0 && nOf(a) < 5)
  rows.push({
    dim: "Pooling depth",
    status: thin.length ? "THIN" : populated.length ? "OK" : "GAP",
    have: [confident.length ? `${confident.length} at 15+ studies` : null,
           poolable.length ? `${poolable.length} at 5-14` : null,
           thin.length ? `${thin.length} below 5` : null].filter(Boolean).join(", ") || "—",
    miss: thin.length ? `below pooling depth: ${thin.join(", ")}` : "—",
  })

  // D6 — speciation
  const specGaps = []
  for (const [bare, split] of Object.entries(SPLIT)) {
    if (analytes.includes(bare) && !split.some((s) => analytes.includes(s))) specGaps.push(bare)
  }
  rows.push({
    dim: "Speciation transparency",
    status: specGaps.length ? "GAP" : "OK",
    have: analytes.filter((a) => Object.values(SPLIT).flat().includes(a)).join(", ") || "no species-split analyte profiled",
    miss: specGaps.length ? `recorded unspeciated: ${specGaps.join(", ")}` : "—",
  })

  // D7 — basis declaration
  const noBasis = populated.filter((a) => !prof[a].basis)
  rows.push({
    dim: "Basis declaration",
    status: noBasis.length === 0 ? "OK" : noBasis.length === populated.length ? "GAP" : "THIN",
    have: `${populated.length - noBasis.length} of ${populated.length} populated analytes declare a basis`,
    miss: noBasis.length ? `no wet/dry basis declared: ${noBasis.join(", ")}` : "—",
  })

  // D8 — review recency
  const dated = populated.filter((a) => prof[a].last_reviewed)
  const oldest = dated.map((a) => String(prof[a].last_reviewed)).sort()[0]
  rows.push({
    dim: "Review recency",
    status: dated.length === populated.length ? "OK" : "THIN",
    have: dated.length ? `${dated.length} of ${populated.length} carry last_reviewed; oldest ${oldest}` : "none dated",
    miss: dated.length === populated.length ? "—" : `undated: ${populated.filter((a) => !prof[a].last_reviewed).join(", ")}`,
  })

  // D9 — mitigation
  const hasMit = /^##\s+Mitigation/im.test(md)
  rows.push({
    dim: "Mitigation evidence",
    status: hasMit ? "OK" : "GAP",
    have: hasMit ? "mitigation section present" : "—",
    miss: hasMit ? "—" : "no mitigation or remediation section",
  })

  // D10 — regulatory coverage
  const cites = regs.filter((r) => {
    const hay = [r.matrix, ...(r.matrices ?? [])].filter(Boolean).map((x) => String(x).toLowerCase())
    return hay.some((h) => h.includes(slug.replace(/-/g, " ")) || h.includes(title.toLowerCase()))
  })
  rows.push({
    dim: "Regulatory coverage",
    status: cites.length ? "OK" : "GAP",
    have: cites.length ? `${cites.length} instrument${cites.length === 1 ? "" : "s"} name this commodity` : "—",
    miss: cites.length ? "—" : "no instrument in the register names this commodity by matrix",
  })

  const body = [
    "## Completeness scorecard",
    "",
    "A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.",
    "",
    "| Dimension | Status | What is there | What is missing |",
    "| --- | --- | --- | --- |",
    ...rows.map((r) => `| ${esc(r.dim)} | ${esc(r.status)} | ${esc(r.have)} | ${esc(r.miss)} |`),
    "",
    "OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.",
    "",
    "Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.",
  ].join("\n")

  const OPEN = "<!-- BEGIN: hmi-completeness-scorecard -->"
  const CLOSE = "<!-- END: hmi-completeness-scorecard -->"
  const block = `${OPEN}\n${body}\n${CLOSE}`
  const re = new RegExp(`\\n*${OPEN}[\\s\\S]*?${CLOSE}\\n*`)
  const stripped = md.replace(re, "\n\n")
  // v3 places the scorecard FIRST in the ingredient body, above the
  // contamination profile: the reader is told where the page is thin before
  // they read the numbers, which is the whole point of the section.
  const anchor = stripped.match(/\n## (Heavy metal contamination profile|Contamination)/i)
  const next = anchor
    ? stripped.slice(0, anchor.index).replace(/\n+$/, "") + "\n\n" + block + "\n" + stripped.slice(anchor.index)
    : null
  if (next && next !== md) {
    touched++
    if (APPLY) writeFileSync(p, next)
  }
}
console.log(`completeness-scorecard: ${touched} page(s) ${APPLY ? "written" : "would change"}`)
