#!/usr/bin/env node
import { contractOwnsPage } from "./contracts/page-owner.mjs"
// Insert a "## Frequently asked questions" section into each metal page from the
// per-metal Q&A in tools/metal-faq/<metal>.json (generated + adversarially
// verified by the metal-faq workflow, grounded in each page's own content).
//
// The section is plain markdown — `### question?` headings with answer prose.
// The CollapsibleQuestions build transformer folds each question-H3 into a `.qa`
// accordion (the proof pattern) and stamps the data-hmi-faq contract, so these
// render as collapsibles AND become FAQPage structured data. Keeping the source
// as markdown (not raw <details>) keeps the page readable and lets the citation
// superscripts / References generator see the answers' [[sources/…]] links.
//
// Runs in prebuild BEFORE build-page-references so FAQ citations are counted.
// Every answer is re-checked through the firewall guard at insert time; a
// tripping item is dropped, never softened (CLAUDE.md Part 2).

import fs from "node:fs"
import path from "node:path"
import { answerTripsFirewall } from "./lib/faq-firewall-guard.mjs"

const repoRoot = process.cwd()
const metalsDir = path.join(repoRoot, "wiki/metals")
const faqDir = path.join(repoRoot, "tools/metal-faq")

const BEGIN = "<!-- BEGIN: hmi-metal-faq -->"
const END = "<!-- END: hmi-metal-faq -->"

// Insert before the first apparatus block (source legend / references / sources
// / update history), so the FAQ closes the reader-facing content.
const APPARATUS = [
  "<!-- BEGIN: hmi-page-references -->",
  "<!-- BEGIN: hmi-source-legend -->",
  "\n## References",
  "\n## Sources",
  "<!-- BEGIN: hmi-page-history -->",
  "\n## Update history",
  "\n## Page history",
]

function esc(s) {
  return String(s).trim()
}

function renderBlock(questions) {
  const items = questions
    .map((q) => `### ${esc(q.question)}\n\n${esc(q.answer)}`)
    .join("\n\n")
  return `${BEGIN}
## Frequently asked questions
<!-- audience: consumer, educator -->

${items}
${END}`
}

function upsert(raw, block) {
  const existing = new RegExp(
    `\\n*${BEGIN.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n*`,
  )
  if (existing.test(raw)) {
    return block ? raw.replace(existing, `\n\n${block}\n\n`) : raw.replace(existing, "\n\n")
  }
  if (!block) return raw
  // insert before the earliest apparatus marker
  let at = -1
  for (const marker of APPARATUS) {
    const idx = raw.indexOf(marker)
    if (idx !== -1 && (at === -1 || idx < at)) at = idx
  }
  if (at === -1) return `${raw.replace(/\n+$/, "")}\n\n${block}\n`
  return `${raw.slice(0, at).replace(/\n+$/, "")}\n\n${block}\n\n${raw.slice(at).replace(/^\n+/, "")}`
}

let updated = 0
let cleared = 0
let firewalled = 0
let totalQ = 0

for (const file of fs.readdirSync(metalsDir)) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const metal = file.replace(/\.md$/, "")
  const jsonPath = path.join(faqDir, `${metal}.json`)
  const mdPath = path.join(metalsDir, file)
  const raw = fs.readFileSync(mdPath, "utf8")
  if (contractOwnsPage(raw)) continue // Compiled by tools/contracts/build-pilot.mjs.

  // A metal that already carries a hand-authored FAQ (e.g. lead) keeps it; the
  // data-file generator only fills pages that lack one.
  const hasHandFaq =
    !raw.includes(BEGIN) && /^## Frequently asked questions\s*$/m.test(raw)
  if (hasHandFaq) continue

  let questions = []
  if (fs.existsSync(jsonPath)) {
    try {
      questions = JSON.parse(fs.readFileSync(jsonPath, "utf8")).questions ?? []
    } catch {
      questions = []
    }
  }

  // Firewall gate every answer/question at insert time (defense in depth).
  const safe = questions.filter((q) => {
    const bad = answerTripsFirewall(q.answer) || answerTripsFirewall(q.question)
    if (bad) firewalled += 1
    return !bad && esc(q.question).endsWith("?") && esc(q.answer).length > 20
  })

  const next = upsert(raw, safe.length >= 2 ? renderBlock(safe) : null)
  if (next === raw) continue
  fs.writeFileSync(mdPath, next, "utf8")
  if (safe.length >= 2) {
    updated += 1
    totalQ += safe.length
  } else {
    cleared += 1
  }
}

console.log(
  `build-metal-faq: ${updated} pages filled (${totalQ} questions), ${cleared} cleared, ${firewalled} answers dropped by firewall.`,
)
