#!/usr/bin/env node
/**
 * Public errata-log generator.
 *
 * Reads `op: "correction"` events from data/evidence/review_events.jsonl and
 * renders the "Public log of substantiated corrections" table inside the
 * generator-managed block on wiki/errata.md:
 *
 *   <!-- BEGIN: hmi-errata-log -->  ...  <!-- END: hmi-errata-log -->
 *
 * This is the public, reader-facing distillation of the value-level correction
 * trail that the synthesis writer and reconciliation passes emit. It is what
 * makes the errata page a real trust signal rather than an empty promise: every
 * substantiated correction the Index makes to its own published numbers appears
 * here automatically, complete, traceable to the originating commit.
 *
 * Correction-event shape (one JSON object per line in review_events.jsonl):
 *   { op:"correction", kind:"retraction"|"revision", ts, page, metal, target,
 *     previous:{typical_ppb:[lo,hi], n_studies}, current:null|{...},
 *     reason, trigger, commit_sha }
 *
 * Self-corrections (the Index auditing its own pipeline) and reader-submitted
 * corrections (kind:"reader_submitted") render in the same chronological log;
 * the Status column names which.
 *
 * Usage: node tools/build-errata-log.mjs [--check]   (--check: fail if stale)
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const eventsPath = path.join(repoRoot, "data/evidence/review_events.jsonl")
const errataPath = path.join(repoRoot, "wiki/errata.md")
const BEGIN = "<!-- BEGIN: hmi-errata-log -->"
const END = "<!-- END: hmi-errata-log -->"

const METAL_NAME = {
  Pb: "lead", Cd: "cadmium", tAs: "total arsenic", iAs: "inorganic arsenic",
  MeHg: "methylmercury", tHg: "total mercury", Ni: "nickel", Al: "aluminium",
  Cr: "chromium", "Cr-total": "total chromium", "Cr-VI": "hexavalent chromium",
  Sn: "tin", U: "uranium",
}

function main() {
  const check = process.argv.includes("--check")
  const corrections = loadCorrections()
  const block = renderBlock(corrections)

  const page = fs.readFileSync(errataPath, "utf8")
  const start = page.indexOf(BEGIN)
  const end = page.indexOf(END)
  if (start < 0 || end < 0) {
    console.error(`No ${BEGIN} / ${END} markers in wiki/errata.md. Add them around the log table first.`)
    process.exit(1)
  }
  const next = page.slice(0, start) + BEGIN + "\n" + block + "\n" + page.slice(end)

  if (check) {
    if (next !== page) {
      console.error("Errata log is stale. Run `node tools/build-errata-log.mjs`.")
      process.exit(1)
    }
    console.log(`Errata log current (${corrections.length} corrections).`)
    return
  }

  if (next !== page) fs.writeFileSync(errataPath, next, "utf8")
  console.log(`Errata log: ${corrections.length} corrections rendered to ${path.relative(repoRoot, errataPath)}`)
}

function loadCorrections() {
  if (!fs.existsSync(eventsPath)) return []
  const seen = new Map() // dedupe key -> correction (last wins)
  for (const line of fs.readFileSync(eventsPath, "utf8").split("\n")) {
    if (!line.trim()) continue
    let e
    try { e = JSON.parse(line) } catch { continue }
    if (e.op !== "correction") continue
    const key = `${e.page}::${e.target || e.metal}::${e.ts}`
    seen.set(key, e)
  }
  return [...seen.values()].sort((a, b) => String(b.ts).localeCompare(String(a.ts)))
}

function renderBlock(corrections) {
  const lines = []
  lines.push("| Date | Page | Change | Originating commit | Status |")
  lines.push("| --- | --- | --- | --- | --- |")
  if (corrections.length === 0) {
    lines.push("| _no entries yet_ | | | | |")
    return lines.join("\n")
  }
  for (const c of corrections) {
    lines.push(
      `| ${date(c.ts)} | ${pageLink(c.page)} | ${changeText(c)} | ${commitCell(c)} | ${statusText(c)} |`,
    )
  }
  return lines.join("\n")
}

function changeText(c) {
  const metal = METAL_NAME[c.metal] || c.metal || "value"
  const prev = c.previous && Array.isArray(c.previous.typical_ppb)
    ? `${fmtRange(c.previous.typical_ppb)} ppb (n=${c.previous.n_studies})`
    : "the prior value"
  const verb = c.kind === "revision" ? "Revised" : "Retracted"
  let toState
  if (c.current && Array.isArray(c.current.typical_ppb)) {
    toState = `restored to ${fmtRange(c.current.typical_ppb)} ppb (n=${c.current.n_studies})`
  } else {
    toState = "returned to pending re-synthesis"
  }
  // Reason, reader-facing: strip internal-only "contamination_profile" phrasing.
  const reason = String(c.reason || "").replace(/\s+/g, " ").trim()
  return `${verb} the ${metal} estimate (was ${prev}); ${toState}. ${reason}`
    .replace(/\|/g, "\\|")
}

function statusText(c) {
  if (c.kind === "reader_submitted") return "Applied (reader-submitted)"
  return "Applied (self-correction)"
}

function commitCell(c) {
  const sha = String(c.commit_sha || "").trim()
  if (!sha || sha === "pending") {
    // No resolved SHA yet — point at the page's full version history.
    return `[history](${pageHistoryUrl(c.page)})`
  }
  return `[${sha.slice(0, 7)}](https://github.com/paleofoundation/heavymetalindex/commit/${sha})`
}

function pageLink(page) {
  const rel = String(page || "").replace(/^wiki\//, "").replace(/\.md$/, "")
  return `[[${rel}]]`
}
function pageHistoryUrl(page) {
  const rel = String(page || "").replace(/^wiki\//, "")
  return `https://github.com/paleofoundation/heavymetalindex/commits/main/wiki/${rel}`
}
function fmtRange(arr) {
  const lo = arr[0] === null || arr[0] === undefined ? "?" : arr[0]
  const hi = arr[1] === null || arr[1] === undefined ? "?" : arr[1]
  return `${lo}–${hi}`
}
function date(ts) {
  return String(ts || "").slice(0, 10) || "(undated)"
}

main()
