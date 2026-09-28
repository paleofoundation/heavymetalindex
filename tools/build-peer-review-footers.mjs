#!/usr/bin/env node
// Render the Peer review state footer on every synthesis page.
//
// Reads data/peer-review/*.jsonl — one file per external reviewer, each line
// a JSON object {reviewer, page_slug, verdict, review_date, notes,
// conflicts_declared, page_sha256_at_review}. Aggregates the events per
// synthesis page, picks the most-recent verdict per reviewer, and writes a
// marker-bounded "Peer review state" block on the corresponding page.
//
// Verdicts: endorsed, contested, recused, pending.
//
// The footer is the audit signal that distinguishes a curated reference
// from an anonymous compilation (per CLAUDE.md Part 2; see wiki/curators.md
// for the curatorial board structure).
//
// Wired into prebuild after sync-source-counts. Idempotent — re-runs replace
// the existing block, never duplicate.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const peerReviewDir = path.join(repoRoot, "data/peer-review")
const synthesisDir = path.join(repoRoot, "wiki/synthesis")
const curatorsPath = path.join(repoRoot, "wiki/curators.md")

const beginMarker = "<!-- BEGIN: hmi-peer-review -->"
const endMarker = "<!-- END: hmi-peer-review -->"

const VERDICT_LABELS = {
  endorsed: "Endorsed",
  contested: "Contested",
  recused: "Recused",
  pending: "Pending review",
}

const VERDICT_BADGES = {
  endorsed: "✓",
  contested: "⚠",
  recused: "—",
  pending: "○",
}

// Resolve reviewer display names from curators.md
const reviewerNames = new Map()
if (fs.existsSync(curatorsPath)) {
  const raw = fs.readFileSync(curatorsPath, "utf8")
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/)
  if (fmMatch) {
    // Light parse of external_reviewers: section
    const lines = fmMatch[1].split("\n")
    let inExternal = false
    let currentName = null
    let currentSlug = null
    for (const line of lines) {
      if (/^external_reviewers:/.test(line)) { inExternal = true; continue }
      if (inExternal && /^\w+:/.test(line)) { inExternal = false }
      if (!inExternal) continue
      const nameMatch = line.match(/^\s+-\s+name:\s*"?([^"]+)"?$/)
      if (nameMatch) {
        currentName = nameMatch[1].trim()
        currentSlug = slugify(currentName)
        reviewerNames.set(currentSlug, currentName)
        continue
      }
      const slugMatch = line.match(/^\s+slug:\s*"?([^"]+)"?$/)
      if (slugMatch && currentName) {
        reviewerNames.set(slugMatch[1].trim(), currentName)
      }
    }
  }
}

// Load and aggregate review events per page
const reviewsByPage = new Map() // page_slug → array of latest-per-reviewer events
if (fs.existsSync(peerReviewDir)) {
  for (const file of fs.readdirSync(peerReviewDir)) {
    if (!file.endsWith(".jsonl")) continue
    const lines = fs.readFileSync(path.join(peerReviewDir, file), "utf8").split("\n").filter(Boolean)
    for (const line of lines) {
      let event
      try { event = JSON.parse(line) } catch { continue }
      if (!event.page_slug || !event.reviewer || !event.verdict) continue
      if (!VERDICT_LABELS[event.verdict]) continue
      if (!reviewsByPage.has(event.page_slug)) reviewsByPage.set(event.page_slug, new Map())
      const perReviewer = reviewsByPage.get(event.page_slug)
      const prior = perReviewer.get(event.reviewer)
      if (!prior || (event.review_date || "") > (prior.review_date || "")) {
        perReviewer.set(event.reviewer, event)
      }
    }
  }
}

let updated = 0
let withReviews = 0
let placeholder = 0

if (!fs.existsSync(synthesisDir)) {
  console.log("build-peer-review-footers: wiki/synthesis/ missing")
  process.exit(0)
}

for (const file of fs.readdirSync(synthesisDir)) {
  if (!file.endsWith(".md")) continue
  if (file === "index.md" || file.startsWith("_")) continue
  const slug = `synthesis/${file.replace(/\.md$/, "")}`
  const filePath = path.join(synthesisDir, file)
  const raw = fs.readFileSync(filePath, "utf8")
  const reviews = reviewsByPage.get(slug)
  // A systems-architecture working paper is not a "synthesis claim"; label its
  // review-state block for what it is so the page never self-describes as a
  // corpus synthesis finding.
  const isWorkingPaper = /^article_type:\s*["']?systems-architecture-working-paper["']?\s*$/m.test(raw)

  let block
  if (reviews && reviews.size > 0) {
    block = renderActiveBlock([...reviews.values()], isWorkingPaper)
    withReviews += 1
  } else {
    block = renderPlaceholderBlock(isWorkingPaper)
    placeholder += 1
  }

  const existingPattern = new RegExp(`\\n*${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)
  let next
  if (existingPattern.test(raw)) {
    next = raw.replace(existingPattern, `\n\n${block}`)
  } else {
    // Insert before the Page history footer if present; else before final
    // closing content.
    const historyMarker = "<!-- BEGIN: hmi-page-history -->"
    if (raw.includes(historyMarker)) {
      next = raw.replace(historyMarker, `${block}\n\n${historyMarker}`)
    } else {
      next = `${raw.replace(/\n+$/, "")}\n\n${block}\n`
    }
  }

  if (next !== raw) {
    fs.writeFileSync(filePath, next, "utf8")
    updated += 1
  }
}

console.log(`build-peer-review-footers:`)
console.log(`  synthesis pages updated:  ${updated}`)
console.log(`  with active reviews:      ${withReviews}`)
console.log(`  placeholder (no reviews): ${placeholder}`)

function renderActiveBlock(events, isWorkingPaper = false) {
  const claimTerm = isWorkingPaper ? "working paper" : "synthesis claim"
  const rows = events
    .sort((a, b) => (b.review_date || "").localeCompare(a.review_date || ""))
    .map((e) => {
      const reviewerLabel = reviewerNames.get(e.reviewer) || e.reviewer
      const badge = VERDICT_BADGES[e.verdict] || "?"
      const label = VERDICT_LABELS[e.verdict] || e.verdict
      const notes = (e.notes || "").replace(/\|/g, "\\|").slice(0, 200)
      return `| ${reviewerLabel} | ${badge} ${label} | ${e.review_date || "—"} | ${notes || "—"} |`
    })
    .join("\n")

  return `${beginMarker}
## Peer review state

Named external reviewers, listed at [[curators]], have evaluated this ${claimTerm}. Each verdict is endorsed, contested, recused, or pending review. Recusal disclosures for named reviewers are at [[curators]].

| Reviewer | Verdict | Review date | Notes |
| --- | --- | --- | --- |
${rows}

A contested verdict does not retract the ${claimTerm}; it flags that a named expert disputes part of it. The contested ${isWorkingPaper ? "argument" : "claim"} and the dispute basis are part of the public record so a downstream reader can weigh both. See [[errata]] for the formal correction channel.
${endMarker}`
}

function renderPlaceholderBlock(isWorkingPaper = false) {
  if (isWorkingPaper) {
    return `${beginMarker}
## Peer review state

This is a working paper on systems architecture, not a corpus synthesis finding. It has not been externally peer reviewed. Verdicts will be added here if named domain experts, listed at [[curators]], evaluate it. Reviewer verdicts are recorded on this page.

| Reviewer | Verdict | Review date | Notes |
| --- | --- | --- | --- |
| _no reviews yet_ | | | |

The Heavy Metal Index publishes working papers as preprints — before external review completes — with the review state visibly tracked. Until at least one external verdict is recorded below, this paper is a preprint proposing an architecture, not a peer-reviewed or independently validated result, and DOI registration does not change that.
${endMarker}`
  }
  return `${beginMarker}
## Peer review state

This synthesis claim has not yet been evaluated by external reviewers. Verdicts will be added here as named domain experts, listed at [[curators]], complete their review. Reviewer verdicts are recorded on this page.

| Reviewer | Verdict | Review date | Notes |
| --- | --- | --- | --- |
| _no reviews yet_ | | | |

The Heavy Metal Index publishes synthesis claims as preprints — before external review completes — with the review state visibly tracked. Until at least one external verdict is recorded below, a synthesis page is a preprint, not a peer-reviewed work. External review accumulates over time, and the credibility of the claim is partly the cumulative result of that visible review.
${endMarker}`
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
