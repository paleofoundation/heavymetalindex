#!/usr/bin/env node
// Build the /synthesis directory page to the v3 "Synthesis findings" screen:
//   ## How findings are graded  — the A/B/C/D confidence rubric, four cards
//   ## All findings             — every finding, sorted by grade then recency,
//                                 each with its grade badge, dek, tags, source
//                                 count and date.
//
// Both are GENERATED from the finding pages' own frontmatter (grade, dek,
// metals, anchor_sources, established), so the directory can never drift from
// the findings it lists. The hand-written date-sorted table this replaces had
// to be edited by hand every time a finding was added, which is exactly the
// drift the routing/generator layer exists to prevent.
//
// The grade is the Index's own PROVISIONAL confidence assessment, recorded in
// each finding's `grade` frontmatter with a `grade_rationale`. Every finding
// page already states, in its Peer review state block, that it is a preprint
// with no external review yet; the grade is consistent with that framing and is
// not a claim of settled consensus. The rubric copy on the page says so.
//
// FIREWALL: nothing here touches HMTc thresholds, percentiles, or certification
// vocabulary. It reports finding-level evidence confidence only.

import fs from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const DIR = path.join(ROOT, "wiki/synthesis")
const INDEX = path.join(DIR, "index.md")
const APPLY = process.argv.includes("--apply") || !process.argv.includes("--dry-run")

// The v3 grade rubric, verbatim from the design artifact, with the badge colours
// it defines. This is the single source of truth for both the cards and the
// row badges.
const GRADES = [
  { g: "A", label: "Established", color: "#8b2a4a", def: "Independent bodies or study groups agree, on separate evidence bases, and no reversal is on record." },
  { g: "B", label: "Well supported", color: "#a8496a", def: "Consistent across multiple sources, with one methodological limitation named on the finding page." },
  { g: "C", label: "Provisional", color: "#c07f96", def: "Direction of evidence is consistent, but resolution, sample sizes, or geography are limited." },
  { g: "D", label: "Contested", color: "#d6aebc", def: "Sources conflict, or the finding rests on a single body of work not independently replicated." },
]
const GRADE_ORDER = { A: 0, B: 1, C: 2, D: 3 }
const colorOf = (g) => (GRADES.find((x) => x.g === g) || {}).color || "#a9a1a2"

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

// ── read every finding's frontmatter ────────────────────────────────────────
function readFinding(file) {
  const slug = file.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(DIR, file), "utf8")
  const m = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return null
  const fm = m[1]
  const scalar = (k) => {
    const mm = fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]+?)"?\\s*$`, "m"))
    return mm ? mm[1].trim() : null
  }
  const title = scalar("title") || slug
  const grade = (scalar("grade") || "").toUpperCase()
  const dek = scalar("dek") || ""
  const established = scalar("established") || scalar("updated") || ""
  const metalsM = fm.match(/^metals:\s*\[([^\]]*)\]/m)
  const metals = metalsM ? metalsM[1].split(",").map((x) => x.trim()).filter(Boolean) : []
  // anchor_sources may be flow or block; count fully-qualified refs.
  const anchorM = fm.match(/^anchor_sources:\s*([\s\S]*?)(?=^\S|\n---|$)/m)
  const anchorN = anchorM ? [...anchorM[1].matchAll(/\b(?:sources|regulations)\//g)].length : 0
  return { slug, title, grade, dek, established, metals, anchorN }
}

const findings = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith(".md") && f !== "index.md")
  .map(readFinding)
  .filter(Boolean)

const graded = findings.filter((f) => GRADE_ORDER[f.grade] !== undefined)
const ungraded = findings.filter((f) => GRADE_ORDER[f.grade] === undefined)
if (ungraded.length) {
  console.warn(`build-synthesis-index: ${ungraded.length} finding(s) have no grade: ${ungraded.map((f) => f.slug).join(", ")}`)
}
graded.sort(
  (a, b) => GRADE_ORDER[a.grade] - GRADE_ORDER[b.grade] || String(b.established).localeCompare(String(a.established)),
)

// ── section 1: How findings are graded ──────────────────────────────────────
const badgeStyle = (color) =>
  `display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;flex:0 0 auto;` +
  `border-radius:4px;font-family:'IBM Plex Mono',monospace;font-size:17px;background:${color};color:#fff;`

function gradesBlock() {
  const cards = GRADES.map(
    (g) =>
      `  <div class="hmi-grade-card">\n` +
      `    <div class="hmi-grade-head">\n` +
      `      <span class="hmi-grade-badge" style="${badgeStyle(g.color)}">${g.g}</span>\n` +
      `      <span class="hmi-grade-label">${esc(g.label)}</span>\n` +
      `    </div>\n` +
      `    <p class="hmi-grade-def">${esc(g.def)}</p>\n` +
      `  </div>`,
  ).join("\n")
  return (
    `<!-- BEGIN: hmi-synthesis-grades -->\n` +
    `## How findings are graded\n\n` +
    `Each finding carries the Index's own confidence grade. The grade is a provisional editorial ` +
    `assessment of the evidence as it currently stands, not a claim of settled consensus: every ` +
    `finding is published as a preprint and its grade can move as the corpus grows or external ` +
    `review accumulates. A finding can be heavily cited and still graded provisional.\n\n` +
    `<div class="hmi-grade-cards">\n${cards}\n</div>\n` +
    `<!-- END: hmi-synthesis-grades -->`
  )
}

// ── section 2: All findings ─────────────────────────────────────────────────
function fmtDate(d) {
  // "2026-07-27" -> "JUL 2026"
  const m = String(d).match(/^(\d{4})-(\d{2})/)
  if (!m) return ""
  const mon = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][Number(m[2]) - 1]
  return `${mon} ${m[1]}`
}

function findingsBlock() {
  const rows = graded
    .map((f) => {
      const tags = f.metals
        .slice(0, 4)
        .map((t) => `<span class="hmi-finding-tag">${esc(t)}</span>`)
        .join("")
      const n = f.anchorN
      const sources = `${n} source${n === 1 ? "" : "s"}`
      return (
        `  <div class="hmi-finding-row">\n` +
        `    <span class="hmi-finding-badge" style="${badgeStyle(colorOf(f.grade))}">${f.grade}</span>\n` +
        `    <div class="hmi-finding-body">\n` +
        `      <a class="hmi-finding-title" href="/synthesis/${f.slug}">${esc(f.title)}</a>\n` +
        (f.dek ? `      <p class="hmi-finding-dek">${esc(f.dek)}</p>\n` : "") +
        (tags ? `      <div class="hmi-finding-tags">${tags}</div>\n` : "") +
        `    </div>\n` +
        `    <div class="hmi-finding-meta">\n` +
        `      <div class="hmi-finding-count">${sources}</div>\n` +
        `      <div class="hmi-finding-date">${fmtDate(f.established)}</div>\n` +
        `    </div>\n` +
        `  </div>`
      )
    })
    .join("\n")
  return (
    `<!-- BEGIN: hmi-synthesis-findings -->\n` +
    `## All findings\n\n` +
    `<span class="hmi-findings-count">${graded.length} findings · sorted by grade</span>\n\n` +
    `<div class="hmi-findings-list">\n${rows}\n</div>\n` +
    `<!-- END: hmi-synthesis-findings -->`
  )
}

// ── splice into the index page ──────────────────────────────────────────────
let md = fs.readFileSync(INDEX, "utf8")

const gradesMd = gradesBlock()
const findingsMd = findingsBlock()

function upsertBlock(src, beginMarker, endMarker, block, insertBeforeHeading) {
  const re = new RegExp(`<!-- BEGIN: ${beginMarker} -->[\\s\\S]*?<!-- END: ${endMarker} -->`)
  if (re.test(src)) return src.replace(re, block)
  // Not present yet: insert before the named heading.
  const hIdx = src.search(insertBeforeHeading)
  if (hIdx !== -1) return `${src.slice(0, hIdx).replace(/\n+$/, "")}\n\n${block}\n\n${src.slice(hIdx)}`
  return `${src.replace(/\n+$/, "")}\n\n${block}\n`
}

// First run only: remove the hand-written date-sorted "Synthesis findings pages"
// section (heading + intro + table), which the generated "All findings" replaces.
md = md.replace(/\n## Synthesis findings pages\n[\s\S]*?(?=\n## )/, "\n")

// Grade cards go directly under Overview, before the promotion criteria.
md = upsertBlock(md, "hmi-synthesis-grades", "hmi-synthesis-grades", gradesMd, /\n## When to promote/)
// The findings list goes right after the grade cards.
if (/<!-- END: hmi-synthesis-grades -->/.test(md) && !/hmi-synthesis-findings/.test(md)) {
  md = md.replace(/(<!-- END: hmi-synthesis-grades -->)/, `$1\n\n${findingsMd}`)
} else {
  md = upsertBlock(md, "hmi-synthesis-findings", "hmi-synthesis-findings", findingsMd, /\n## When to promote/)
}

if (APPLY) fs.writeFileSync(INDEX, md)
console.log(
  `build-synthesis-index: ${graded.length} findings (${GRADES.map((g) => `${g.g}:${graded.filter((f) => f.grade === g.g).length}`).join(" ")})${APPLY ? " written" : " (dry-run)"}`,
)
