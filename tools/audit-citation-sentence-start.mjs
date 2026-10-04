#!/usr/bin/env node
// audit-citation-sentence-start.mjs — build-blocking guard against a sentence
// beginning with a numbered citation marker on any reading surface.
//
// WHY. A numbered citation ([n]) renders as a superscript. A sentence that opens
// with one ("[1], published in X, reported Y.") reads as though the number is the
// grammatical subject and is not acceptable on heavymetalindex.com. The numbered
// apparatus is correct; its PLACEMENT is the rule this guard enforces: a citation
// is never the first token of a sentence (or of a list item). The sentence leads
// with a subject — the author narrative ("Smith et al.") or a descriptor — and the
// [n] sits at a natural, non-initial position (usually the clause or sentence end).
//
// It scans the prose reading surface only: frontmatter, the reference list
// (## References onward), marker-bounded generated blocks, fenced code, tables and
// headings are not prose and are skipped. Run with --check (or --strict) to exit
// non-zero when any violation remains; wired into prebuild so a violation fails the
// build. Plain run prints the report and exits 0.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const WIKI = path.join(repoRoot, "wiki")
const CHECK = process.argv.includes("--check") || process.argv.includes("--strict")

// Directories whose pages are not reader-facing content surfaces.
const EXCLUDE_DIRS = new Set(["lint", "audits", "batch-reports"])

// Citation markers are small ordinals ([1]..[999]); a 4-digit bracket is a year or
// a document number (e.g. "Document No. [2019] 214"), never a citation, so cap at 3.
const CITE = String.raw`\[\d{1,3}(?:\s*,\s*\d{1,3})*\]`
const PARA_START = new RegExp(String.raw`^\s*(?:[-*]\s+|>\s+|\d+\.\s+)?(${CITE})`)
// Trailing closers after the stop may include markdown emphasis, so a bold run-in
// label "**Label.** [3] documented…" is caught too, not just plain ". [3]".
const AFTER_END = new RegExp(String.raw`[.!?][")'’”\]*_]*\s+(${CITE})`, "g")
// A period that closes a common abbreviation (notably "et al.") is NOT a sentence
// end, so "Hands et al. [1]" is a citation attached to its sentence, not a new
// sentence opening with a citation. Skip these so they are not false-flagged.
const ABBR_BEFORE = /\b(?:et al|al|refs?|No|Fig|figs?|cf|vs|pp|ed|eds|vol|approx|Dr|Mr|Mrs|Ms|St|Jr|Sr|Inc|Co|Ltd|Corp|Prof|Gen|Capt|Sgt|Rev|Hon|etc|i\.e|e\.g|a\.m|p\.m|U\.S|U\.K|E\.U)$/i

function walk(dir) {
  const out = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (dir === WIKI && EXCLUDE_DIRS.has(e.name)) continue
      out.push(...walk(path.join(dir, e.name)))
    } else if (e.name.endsWith(".md")) {
      out.push(path.join(dir, e.name))
    }
  }
  return out
}

// Return the prose region: no frontmatter, no reference list, no generated
// marker blocks, no fenced code.
function prose(raw) {
  let t = raw.replace(/^---\n[\s\S]*?\n---\n/, "")
  t = t.split(/\n##\s+References\s*\n/)[0]
  t = t.replace(/<!--\s*BEGIN:[\s\S]*?<!--\s*END:[\s\S]*?-->/g, "")
  t = t.replace(/```[\s\S]*?```/g, "")
  return t
}

const files = fs.existsSync(WIKI) ? walk(WIKI) : []
const violations = []
for (const f of files) {
  const rel = path.relative(repoRoot, f)
  const lines = prose(fs.readFileSync(f, "utf8")).split("\n")
  lines.forEach((line, i) => {
    const s = line.trim()
    if (!s || s.startsWith("#") || s.startsWith("|") || s.startsWith("<")) return
    const ps = s.match(PARA_START)
    if (ps) violations.push({ rel, line: i + 1, cite: ps[1], ctx: s.slice(0, 100) })
    let m
    AFTER_END.lastIndex = 0
    while ((m = AFTER_END.exec(line)) !== null) {
      if (ABBR_BEFORE.test(line.slice(0, m.index))) continue // "et al." etc., not a sentence end
      violations.push({ rel, line: i + 1, cite: m[1], ctx: line.slice(Math.max(0, m.index - 40), m.index + 12).trim() })
    }
  })
}

const byFile = new Map()
for (const v of violations) byFile.set(v.rel, (byFile.get(v.rel) || 0) + 1)
for (const [rel, n] of [...byFile.entries()].sort((a, b) => b[1] - a[1])) {
  const ex = violations.filter((v) => v.rel === rel).slice(0, 4)
  console.log(`\n${rel}  (${n})`)
  for (const v of ex) console.log(`  L${v.line} ${v.cite}: …${v.ctx}`)
}

console.log(
  `\naudit-citation-sentence-start: ${violations.length} sentence-initial citation(s) across ${byFile.size} page(s).`,
)
if (CHECK && violations.length) {
  console.error(
    "FAIL: a sentence must not begin with a citation marker. Lead with the author or a descriptor and move [n] to a non-initial position.",
  )
  process.exit(1)
}
