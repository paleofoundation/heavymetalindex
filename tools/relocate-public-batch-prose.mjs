#!/usr/bin/env node
// One-shot: move ingest bookkeeping off published wiki pages into
// wiki/batch-reports/public-prose-relocation-2026-09-28.md and write the
// inventory CSV. Idempotent. Does not change measured values.

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { isPublishedWikiPage } from "./audit-public-batch-prose.mjs"
import {
  publicBatchProseViolations,
  relocatePublicBatchProse,
  scrubPublicBatchSentences,
} from "./lib/public-batch-prose.mjs"

const repoRoot = process.cwd()
const csvPath = path.join(repoRoot, "data/evidence/public-batch-prose-inventory-2026-09-28.csv")
const reportPath = path.join(repoRoot, "wiki/batch-reports/public-prose-relocation-2026-09-28.md")

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue
    const abs = path.join(dir, name)
    if (fs.statSync(abs).isDirectory()) walk(abs, out)
    else if (name.endsWith(".md")) out.push(abs)
  }
  return out
}

function csvEscape(value) {
  const text = String(value ?? "")
  if (/[",\n]/.test(text)) return `"${text.replaceAll("\"", "\"\"")}"`
  return text
}

function blameMap(rel) {
  const map = new Map()
  try {
    const out = execFileSync("git", ["blame", "-w", "--porcelain", "--", rel], {
      cwd: repoRoot,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    })
    let sha = ""
    let summary = ""
    let line = 0
    for (const row of out.split("\n")) {
      const head = row.match(/^([0-9a-f]{40}) \d+ (\d+)/)
      if (head) {
        sha = head[1].slice(0, 10)
        line = Number(head[2])
        summary = ""
        continue
      }
      if (row.startsWith("summary ")) summary = row.slice(8)
      if (row.startsWith("\t")) map.set(line, `${sha} ${summary}`.trim())
    }
  } catch {
    return map
  }
  return map
}

const overviewOld = "This wiki is in the early build phase. The first batch of ingests is in progress, beginning with cadmium as the pilot metal. Expect substantial gaps until the pilot is complete. Current progress can be traced through [[log]]."
const overviewNew = "Coverage is still being built out. Cadmium is the first metal with a worked synthesis, and other metals and foods are added as the literature is read. Gaps are named on the pages they affect."

const rows = []
const report = ["# Public batch prose relocated 2026-09-28", "", "Ingest bookkeeping removed from published pages. Measured values on those pages were not edited. This file is not published.", ""]
let changed = 0
let sections = 0

for (const abs of walk(path.join(repoRoot, "wiki"))) {
  const rel = path.relative(repoRoot, abs)
  if (!isPublishedWikiPage(rel)) continue
  const original = fs.readFileSync(abs, "utf8")
  const hits = publicBatchProseViolations(original, rel)
  const { markdown, relocated } = relocatePublicBatchProse(original, rel)
  let next = scrubPublicBatchSentences(markdown)
  if (rel === "wiki/overview.md") next = next.replace(overviewOld, overviewNew)
  if (!hits.length && !relocated.length && next === original) continue
  const blame = blameMap(rel)
  for (const hit of hits) {
    rows.push([rel, hit.line, hit.rule, hit.snippet, actionFor(hit.rule), blame.get(hit.line) || "not in git blame"])
  }
  if (rel === "wiki/overview.md" && original.includes(overviewOld)) {
    const line = original.split("\n").findIndex((row) => row.includes("traced through [[log]]")) + 1
    rows.push([rel, line, "operational-log-link", "Current progress can be traced through [[log]].", "rewritten", blame.get(line) || "not in git blame"])
  }
  if (next !== original) {
    fs.writeFileSync(abs, next)
    changed += 1
  }
  if (relocated.length) {
    sections += relocated.length
    report.push(`## ${rel}`, "")
    for (const section of relocated) {
      report.push(`### ${section.heading} (line ${section.line})`, "", section.body || "(empty)", "")
    }
  }
}

fs.mkdirSync(path.dirname(csvPath), { recursive: true })
const header = "file,line,pattern,snippet,action,introduced_by"
fs.writeFileSync(csvPath, [header, ...rows.map((row) => row.map(csvEscape).join(","))].join("\n") + "\n")
fs.writeFileSync(reportPath, report.join("\n"))
console.log(`relocate-public-batch-prose: ${changed} pages edited, ${sections} sections archived, ${rows.length} inventory rows`)

function actionFor(rule) {
  if (rule === "verification-notes" || rule === "ingest-log" || rule === "wiki-pages-ingest") return "section-removed-from-public-page"
  if (rule === "orchestrator-legend" || rule === "routing-audit" || rule === "product-routing") return "rewritten"
  return "removed-or-rewritten"
}
