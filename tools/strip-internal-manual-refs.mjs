#!/usr/bin/env node
import { contractOwnsPage } from "./contracts/page-owner.mjs"
// Strip references to the internal operating manuals (CLAUDE.md, OPERATING.md)
// out of public page prose. ~680 public pages carried citations like
// "per CLAUDE.md Part 14", "Per CLAUDE.md Part 12, …", and a later scaffold
// wave added "per OPERATING.md Part 7 initiative 3.1", "Per OPERATING.md
// Part 3, …" — the wiki citing its own internal dev playbooks on public pages.
// That is a defensibility leak (it reads as "operated by the certifier per an
// internal manual"), it is meaningless to readers, and it needs no product
// decision to remove.
//
// The SUBSTANTIVE prose stays; only the "<manual>.md Part N [initiative X.Y]"
// citation is removed, grammatically. Deterministic, dry-run by default.
//
//   node tools/strip-internal-manual-refs.mjs [--apply] [--dir wiki]

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const APPLY = process.argv.includes("--apply")
const dirArg = process.argv.includes("--dir") ? process.argv[process.argv.indexOf("--dir") + 1] : "wiki"
const BASE = join(ROOT, dirArg)

// Part token: digits optionally followed by a letter (Part 5b), optionally
// followed by an "initiative X.Y" sub-reference (OPERATING.md Part 7
// initiative 3.1), or a range.
const PART = String.raw`Part\s+\d+[a-z]?(?:\s+initiative\s+\d+(?:\.\d+)?)?`

// The internal operating manuals whose references must never render on a public
// page. Same grammar for each; run the transforms once per manual so a page that
// cites both (or one, or neither) is cleaned identically.
const MANUALS = ["CLAUDE", "OPERATING"]

function stripManual(text, manual) {
  const M = manual // e.g. "CLAUDE" — the token is <manual>.md
  let t = text
  // 0a. Parenthetical see-reference to the manual: " (see [[CLAUDE|…]])" → "".
  t = t.replace(new RegExp(String.raw`\s*\(see\s+\[\[${M}[^\]]*\]\]\)`, "g"), "")
  // 0b. Wikilink to the manual with a display alias (target may be path-prefixed,
  //     e.g. "[[../CLAUDE|the X policy]]") → keep the human text, drop the link.
  t = t.replace(new RegExp(String.raw`\[\[[^\]|]*${M}[^\]|]*\s*\|\s*([^\]]*)\]\]`, "g"), "$1")
  // 0c. Bare wikilink to the manual, no alias → "".
  t = t.replace(new RegExp(String.raw`\s*\[\[[^\]|]*${M}[^\]]*\]\]`, "g"), "")
  // 1. Sentence-start "Per CLAUDE.md Part N, Xyz" → "Xyz" (capitalize the next word).
  t = t.replace(new RegExp(String.raw`\bPer\s+${M}\.md\s+${PART},\s+(\w)`, "g"), (_, c) => c.toUpperCase())
  // 1b. Sentence-start "Per CLAUDE.md, Xyz" (no Part) → "Xyz".
  t = t.replace(new RegExp(String.raw`\bPer\s+${M}\.md,\s+(\w)`, "g"), (_, c) => c.toUpperCase())
  // 2pre. Parenthetical with a leading preposition: " (per CLAUDE.md Part N)" /
  //       "(per OPERATING.md Part 7 initiative 3.1)" → "" (drop the whole aside).
  //       Must run before rule 2, which would otherwise leave a dangling "(per)".
  t = t.replace(
    new RegExp(String.raw`\s*\((?:per|in|from|of|under|following|see|by)\s+${M}\.md\s+${PART}\)`, "g"),
    "",
  )
  // 2. Prepositional " <prep> CLAUDE.md Part N" mid-sentence → "" (drop the whole phrase).
  t = t.replace(
    new RegExp(String.raw`\s+(?:per|in|from|of|under|following|see|by)\s+${M}\.md\s+${PART}`, "g"),
    "",
  )
  // 3. Parenthetical " (CLAUDE.md Part N)" → "" (allow "§ Part N" too).
  t = t.replace(new RegExp(String.raw`\s*\(${M}\.md\s+(?:§\s*)?${PART}\)`, "g"), "")
  // 4. Fallback: any remaining "…, CLAUDE.md [§] Part N" or bare "CLAUDE.md Part N".
  t = t.replace(new RegExp(String.raw`,?\s*${M}\.md\s+(?:§\s*)?${PART}`, "g"), "")
  // 4b. Reversed order: " (Part N of [the] CLAUDE.md)" / " Part N of CLAUDE.md" → "".
  t = t.replace(new RegExp(String.raw`\s*\(?(?:§\s*)?${PART}\s+of\s+(?:the\s+)?${M}\.md\)?`, "g"), "")
  // 5. Any residual bare "CLAUDE.md" / "OPERATING.md" (e.g. a stray link target)
  //    is left in place but logged below so we can eyeball it.
  return t
}

function strip(text) {
  let t = text
  for (const manual of MANUALS) t = stripManual(t, manual)
  return t
}

// Spacing/punctuation cleanup left by the removals. Collapses runs of spaces —
// safe in body prose, but must NOT run across frontmatter indentation.
function cleanup(t) {
  return t
    .replace(/ {2,}/g, " ")
    .replace(/ ([.,;:)])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\bthe the\b/g, "the")
}

// Frontmatter-safe: single-line quoted values may carry a manual reference
// (e.g. `tier_rationale: "Per CLAUDE.md …"`). Strip the phrase from within the
// value, preserving each line's LEADING indentation so nested YAML mappings
// stay valid.
function stripFrontmatter(fm) {
  return fm
    .split("\n")
    .map((line) => {
      if (!line.includes("CLAUDE") && !line.includes("OPERATING")) return line
      const m = line.match(/^(\s*)(.*)$/)
      return m[1] + cleanup(strip(m[2]))
    })
    .join("\n")
}

// Internal dev-artifact / record directories where a manual reference is
// legitimate internal documentation (and log.md's are historical commit records
// that must not be rewritten). The defensibility leak is on reader-facing
// reference pages, so those are what we clean.
const SKIP_DIRS = new Set(["audits", "batch-reports", "briefings", "lint", "queries", "corpus"])
const SKIP_FILES = new Set(["log.md"])

const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) {
      if (dir === BASE && SKIP_DIRS.has(name)) continue
      walk(p)
    } else if (name.endsWith(".md") && !SKIP_FILES.has(name)) {
      files.push(p)
    }
  }
}
walk(BASE)

let changed = 0
let totalRepl = 0
const residualBare = []
const samples = []
// Count references to any managed manual so the before/after delta reports the
// total refs removed across CLAUDE.md + OPERATING.md.
const MANUAL_RE = new RegExp(`(?:${MANUALS.join("|")})`, "g")
const MANUAL_TEST = new RegExp(`(?:${MANUALS.join("|")})`) // non-global: safe for .test()
for (const f of files) {
  const src = readFileSync(f, "utf8")
  if (contractOwnsPage(src)) continue // Compiled by tools/contracts/build-pilot.mjs.
  if (!MANUAL_TEST.test(src)) continue
  // Only transform the BODY — never the YAML frontmatter. The punctuation
  // cleanup collapses runs of spaces, which would flatten nested-mapping
  // indentation in frontmatter and break the YAML parse.
  const fmMatch = src.match(/^---\n[\s\S]*?\n---\n/)
  const fm = fmMatch ? fmMatch[0] : ""
  const body = fmMatch ? src.slice(fm.length) : src
  const before = (src.match(MANUAL_RE) || []).length
  const next = stripFrontmatter(fm) + cleanup(strip(body))
  const after = (next.match(MANUAL_RE) || []).length
  if (next !== src) {
    changed++
    totalRepl += before - after
    if (after > 0) residualBare.push(`${f.slice(BASE.length + 1)} (${after} residual)`)
    if (samples.length < 6) {
      // show one changed line
      const bLines = src.split("\n")
      const nLines = next.split("\n")
      for (let i = 0; i < bLines.length; i++) {
        if (bLines[i] !== nLines[i] && /(?:CLAUDE|OPERATING)\.md/.test(bLines[i])) {
          samples.push({ file: f.slice(BASE.length + 1), before: bLines[i].trim().slice(0, 130), after: nLines[i].trim().slice(0, 130) })
          break
        }
      }
    }
    if (APPLY) writeFileSync(f, next)
  }
}

console.log(`strip-internal-manual-refs (${APPLY ? "APPLY" : "dry-run"}, ${dirArg}): ${changed} pages, ${totalRepl} refs removed`)
for (const s of samples) {
  console.log(`\n  ${s.file}`)
  console.log(`   - ${s.before}`)
  console.log(`   + ${s.after}`)
}
if (residualBare.length) {
  console.log(`\n  ⚠ ${residualBare.length} page(s) still contain "CLAUDE.md"/"OPERATING.md" after strip (needs a manual look):`)
  for (const r of residualBare.slice(0, 10)) console.log(`     ${r}`)
}
