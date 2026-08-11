#!/usr/bin/env node
// Build-blocking guard: no internal vocabulary in a published update-history or
// references block.
//
// The failure this prevents actually shipped. Update-history rows rendered raw
// git commit subjects, so heavymetalindex.com published lines naming the
// certification program, an outside product's design ("Examine hierarchy"), and
// the agent/toolchain codenames the repo runs on. Each of those is a gift to the
// argument this wiki exists to defeat — that it is the certifier's own marketing
// rather than an independent reference (CLAUDE.md Part 2, Part 12).
//
// build-page-changelogs.mjs now derives descriptions from the diff instead of
// from commit prose, so a leak requires a regression in that generator. This
// audit is the assertion that keeps the regression from reaching production.
//
// Exit 1 on any finding: routing and firewall drift propagates silently, so it
// blocks the build rather than filing a report.

import fs from "node:fs"
import path from "node:path"
import { INTERNAL_TERMS, PROGRAM_FIREWALL_TERMS } from "./lib/change-note.mjs"

const repoRoot = process.cwd()
const TARGETS = [
  "wiki/sources",
  "wiki/ingredients",
  "wiki/products",
  "wiki/metals",
  "wiki/regulations",
  "wiki/regulators",
  "wiki/synthesis",
  "wiki/testing",
  "wiki/microbiome",
  "wiki/mitigation",
  "wiki/supply-chain",
  "wiki/health",
  "wiki/methodology",
  "wiki/certification",
  "wiki/studies",
]

const BLOCKS = [
  {
    name: "update history",
    begin: "<!-- BEGIN: hmi-page-history -->",
    end: "<!-- END: hmi-page-history -->",
    terms: INTERNAL_TERMS,
  },
  {
    // References render from source-page frontmatter, where the only leak that
    // can occur is a firewall term inside a citation. Build codenames are not
    // checked here: "Codex Alimentarius Commission" is a food-standards body and
    // a correct reference-list entry.
    name: "references",
    begin: "<!-- BEGIN: hmi-page-references -->",
    end: "<!-- END: hmi-page-references -->",
    terms: PROGRAM_FIREWALL_TERMS,
  },
]

// Cite keys, DOIs and source-record links are the reference block's payload, not
// prose, and they legitimately contain the token shapes the term list rejects.
function strippable(line) {
  return line
    .replace(/\[\[sources\/[^\]]*\]\]/g, "")
    .replace(/\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/https?:\/\/\S+/g, "")
}

let findings = 0
let scanned = 0

for (const dir of TARGETS) {
  const abs = path.join(repoRoot, dir)
  if (!fs.existsSync(abs)) continue
  for (const file of fs.readdirSync(abs)) {
    if (!file.endsWith(".md")) continue
    const relPath = `${dir}/${file}`
    const raw = fs.readFileSync(path.join(abs, file), "utf8")
    for (const block of BLOCKS) {
      const start = raw.indexOf(block.begin)
      if (start === -1) continue
      const stop = raw.indexOf(block.end, start)
      if (stop === -1) continue
      scanned += 1
      const body = raw.slice(start + block.begin.length, stop)
      body.split("\n").forEach((line, i) => {
        const text = strippable(line)
        for (const term of block.terms) {
          const m = text.match(term)
          if (!m) continue
          findings += 1
          console.error(
            `  ${relPath} (${block.name}, line ${i + 1}): internal term "${m[0]}" — ${line.trim().slice(0, 120)}`,
          )
          break
        }
      })
    }
  }
}

console.log(`audit-page-history-leaks: scanned ${scanned} generated blocks`)
if (findings > 0) {
  console.error(`audit-page-history-leaks: FAIL — ${findings} internal term(s) in published blocks`)
  process.exit(1)
}
console.log("audit-page-history-leaks: PASS")
