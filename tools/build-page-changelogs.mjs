#!/usr/bin/env node
// Emit a marker-bounded "Update history" footer on every wiki page, rendered
// from `git log --follow` for that file. Brand-legal and regulatory-affairs
// readers can read the version history in-page without git access.
//
// Today's contract:
//   - Up to 5 most-recent substantive commits per page
//   - Each entry: short sha (linkable to GitHub), ISO date, change class
//     (major / minor / correction), and a public-facing description
//   - Regeneration and infrastructure commits are skipped, and descriptions are
//     normalized through tools/lib/change-note.mjs so internal shorthand — the
//     certification program, toolchain names, agent codenames — never renders on
//     heavymetalindex.com. The linked commit stays authoritative.
//   - Marker-bounded so the block is idempotent (re-runs replace, not append)
//   - Auto-generated pages (`auto_generated: true`) get a simplified history
//     pointing at their generator rather than per-page git log
//
// Mature state: each entry will be a clickable DataCite DOI version when the
// per-page DOI minting integration lands. The field path is already reserved
// as `wiki_doi:` in frontmatter (see tools/migrate-future-slots.mjs).
//
// Runs in prebuild after sync-source-counts so the changelog block reflects
// the most recent count-sync commits.

import fs from "node:fs"
import path from "node:path"
import readline from "node:readline"
import { execFileSync, spawn } from "node:child_process"
import {
  accumulate,
  classifyChange,
  describeChange,
  emptyStats,
  isSubstantive,
} from "./lib/change-note.mjs"

const repoRoot = process.cwd()
const beginMarker = "<!-- BEGIN: hmi-page-history -->"
const endMarker = "<!-- END: hmi-page-history -->"
const GITHUB_BASE = "https://github.com/paleofoundation/heavymetalindex/commit"
const MAX_ENTRIES = 5

// Every reader-facing page type. The left rail links "Update History" from all
// of them, so a page type missing from this list renders a dead anchor.
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

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const verbose = args.includes("--verbose")

// Single streaming git pass: `git log -p --unified=0` over the wiki directories,
// newest-first, parsed line by line. The whole-corpus patch is ~165 MB, which is
// why it is streamed rather than buffered. One process beats per-file `git log`
// (25ms x 2800 files) and per-commit `git show` (12ms x 1700 commits), and the
// patch body is what the descriptions are derived from — commit subjects are read
// only to detect a self-declared correction.
//
// Merge commits produce no patch under `git log -p`, so they drop out naturally.
async function collectHistory() {
  const history = new Map() // relPath -> [{sha, date, subject, stats}]

  // GUARDED, same defect as build-evidence-packet-index's buildGitIndex.
  // `vercel deploy` from the CLI uploads a source tarball WITHOUT `.git`, so
  // this spawn fails and — because stderr is inherited and the stream never
  // yields — takes the whole prebuild down, and with it every CLI deploy.
  //
  // Degrades to an EMPTY history rather than a fabricated one: with no
  // repository there is no honest commit list, and the generator's own output
  // is a published "Update history" block. Inventing entries there would put
  // false provenance on a public page, which is worse than an absent section.
  // stderr is captured rather than inherited so the failure is reported by this
  // function instead of being printed as a bare git error mid-build.
  try {
    execFileSync("git", ["rev-parse", "--git-dir"], { cwd: repoRoot, stdio: "ignore" })
  } catch {
    console.warn(
      "build-page-changelogs: no git repository available (CLI deploy uploads without .git); " +
        "emitting no update-history entries.",
    )
    return history
  }

  const child = spawn(
    "git",
    [
      "log",
      "-p",
      "--unified=0",
      "--no-color",
      "--no-renames",
      "--format=COMMIT|%h|%ai|%s",
      "--",
      ...TARGETS,
    ],
    { cwd: repoRoot, stdio: ["ignore", "pipe", "inherit"] },
  )

  let commit = null
  let file = null // relPath currently being diffed, or null to skip
  let perFile = new Map() // relPath -> stats, for the commit being parsed

  const flushCommit = () => {
    if (!commit) return
    for (const [relPath, stats] of perFile) {
      if (!isSubstantive(stats)) continue
      let arr = history.get(relPath)
      if (!arr) history.set(relPath, (arr = []))
      if (arr.length >= MAX_ENTRIES) continue
      arr.push({ ...commit, stats })
    }
    perFile = new Map()
  }

  const rl = readline.createInterface({ input: child.stdout, crlfDelay: Infinity })
  for await (const line of rl) {
    if (line.startsWith("COMMIT|")) {
      flushCommit()
      const parts = line.split("|")
      if (parts.length < 4) {
        commit = null
        continue
      }
      commit = { sha: parts[1], date: parts[2].slice(0, 10), subject: parts.slice(3).join("|") }
      file = null
      continue
    }
    if (!commit) continue

    if (line.startsWith("diff --git ")) {
      // `diff --git a/<path> b/<path>` — paths are identical (--no-renames).
      const m = line.match(/ b\/(.+)$/)
      const p = m ? m[1] : null
      file = p && p.endsWith(".md") && TARGETS.some((t) => p.startsWith(`${t}/`)) ? p : null
      continue
    }
    if (!file) continue
    if (line.startsWith("+++ ") || line.startsWith("--- ") || line.startsWith("@@")) continue

    const added = line.startsWith("+")
    if (!added && !line.startsWith("-")) continue
    let stats = perFile.get(file)
    if (!stats) perFile.set(file, (stats = emptyStats()))
    accumulate(stats, line.slice(1), added)
  }
  flushCommit()

  const code = await new Promise((resolve) => child.on("close", resolve))
  if (code !== 0) {
    console.error(`build-page-changelogs: git log exited ${code}`)
    process.exit(1)
  }
  return history
}

const fileHistory = await collectHistory()

let updated = 0
let unchanged = 0
let noHistory = 0
let autoGenerated = 0

for (const targetDir of TARGETS) {
  const absDir = path.join(repoRoot, targetDir)
  if (!fs.existsSync(absDir)) continue
  for (const file of fs.readdirSync(absDir)) {
    if (!file.endsWith(".md")) continue
    if (file.startsWith("_")) continue
    const relPath = `${targetDir}/${file}`
    const absPath = path.join(repoRoot, relPath)
    const raw = fs.readFileSync(absPath, "utf8")
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
    if (!fmMatch) { noHistory += 1; continue }

    const isAutoGen = /^auto_generated:\s*true\b/m.test(fmMatch[1])

    let block
    if (isAutoGen) {
      // Auto-generated pages: show the generator + last regeneration date.
      block = renderAutoGenBlock()
      autoGenerated += 1
    } else {
      const history = fileHistory.get(relPath) || []
      if (history.length === 0) {
        // Uncommitted, or nothing but regeneration passes so far.
        block = renderEmptyBlock()
      } else {
        block = renderHistoryBlock(
          history.map((e) => ({
            ...e,
            type: classifyChange(e.subject, e.stats),
            description: describeChange(e.stats),
          })),
        )
      }
    }

    // Non-anchored, replace-first-in-place + strip duplicates. The old pattern was
    // anchored to end-of-file ($); when another generator (link-orphans) appended a
    // block AFTER the history, the history was no longer at EOF, the test failed,
    // and a SECOND history block was appended at EOF — the duplicate-Update-history
    // bug. This replaces the first history block where it sits (e.g. before the
    // auto-linked-stubs block) and removes any duplicates.
    const anyPattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`, "g")
    let next
    if (raw.match(anyPattern)) {
      let seen = 0
      next = raw
        .replace(anyPattern, () => (seen++ === 0 ? block : ""))
        .replace(/\n{3,}/g, "\n\n")
        .replace(/\n+$/, "\n")
    } else {
      next = `${raw.replace(/\n+$/, "")}\n\n${block}\n`
    }

    if (next === raw) {
      unchanged += 1
      continue
    }
    if (!dryRun) fs.writeFileSync(absPath, next, "utf8")
    updated += 1
    if (verbose) console.log(`  updated ${relPath}`)
  }
}

console.log(`build-page-changelogs: ${dryRun ? "DRY-RUN" : "EXECUTED"}`)
console.log(`  updated:        ${updated}`)
console.log(`  unchanged:      ${unchanged}`)
console.log(`  auto-generated: ${autoGenerated}`)
console.log(`  no frontmatter: ${noHistory}`)

function renderHistoryBlock(entries) {
  const rows = entries
    .map(
      (e) =>
        `| [${e.sha}](${GITHUB_BASE}/${e.sha}) | ${e.date} | ${e.type} | ${escapePipes(e.description)} |`,
    )
    .join("\n")
  return `${beginMarker}
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
${rows}
${endMarker}`
}

function renderAutoGenBlock() {
  return `${beginMarker}
## Update history

This page is regenerated from upstream evidence records on every build, so its version history is the history of that upstream data rather than of hand edits. The full commit record lives in [git](https://github.com/paleofoundation/heavymetalindex).
${endMarker}`
}

function renderEmptyBlock() {
  return `${beginMarker}
## Update history

This page has no substantive edit history yet. Future revisions will be recorded here once the change lands in [git](https://github.com/paleofoundation/heavymetalindex).
${endMarker}`
}

function escapePipes(value) {
  return String(value).replace(/\|/g, "\\|")
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
