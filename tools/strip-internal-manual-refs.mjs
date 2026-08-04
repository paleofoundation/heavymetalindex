#!/usr/bin/env node
// Strip references to the internal operating manual (CLAUDE.md) out of public
// page prose. ~680 public pages carried citations like "per CLAUDE.md Part 14",
// "Per CLAUDE.md Part 12, …", "the methodology in CLAUDE.md Part 19" — the wiki
// citing its own internal dev playbook on public pages. That is a defensibility
// leak (it reads as "operated by the certifier per an internal manual"), it is
// meaningless to readers, and it needs no product decision to remove.
//
// The SUBSTANTIVE prose stays; only the "CLAUDE.md Part N" citation is removed,
// grammatically. Deterministic, dry-run by default.
//
//   node tools/strip-internal-manual-refs.mjs [--apply] [--dir wiki]

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const APPLY = process.argv.includes("--apply")
const dirArg = process.argv.includes("--dir") ? process.argv[process.argv.indexOf("--dir") + 1] : "wiki"
const BASE = join(ROOT, dirArg)

// Part token: digits optionally followed by a letter (Part 5b), or a range.
const PART = String.raw`Part\s+\d+[a-z]?`

function strip(text) {
  let t = text
  // 0a. Parenthetical see-reference to the manual: " (see [[CLAUDE|…]])" → "".
  t = t.replace(/\s*\(see\s+\[\[CLAUDE[^\]]*\]\]\)/g, "")
  // 0b. Wikilink to the manual with a display alias (target may be path-prefixed,
  //     e.g. "[[../CLAUDE|the X policy]]") → keep the human text, drop the link.
  t = t.replace(/\[\[[^\]|]*CLAUDE[^\]|]*\s*\|\s*([^\]]*)\]\]/g, "$1")
  // 0c. Bare wikilink to the manual, no alias → "".
  t = t.replace(/\s*\[\[[^\]|]*CLAUDE[^\]]*\]\]/g, "")
  // 1. Sentence-start "Per CLAUDE.md Part N, Xyz" → "Xyz" (capitalize the next word).
  t = t.replace(new RegExp(String.raw`\bPer\s+CLAUDE\.md\s+${PART},\s+(\w)`, "g"), (_, c) => c.toUpperCase())
  // 1b. Sentence-start "Per CLAUDE.md, Xyz" (no Part) → "Xyz".
  t = t.replace(/\bPer\s+CLAUDE\.md,\s+(\w)/g, (_, c) => c.toUpperCase())
  // 2. Prepositional " <prep> CLAUDE.md Part N" mid-sentence → "" (drop the whole phrase).
  t = t.replace(
    new RegExp(String.raw`\s+(?:per|in|from|of|under|following|see|by)\s+CLAUDE\.md\s+${PART}`, "g"),
    "",
  )
  // 3. Parenthetical " (CLAUDE.md Part N)" → "" (allow "§ Part N" too).
  t = t.replace(new RegExp(String.raw`\s*\(CLAUDE\.md\s+(?:§\s*)?${PART}\)`, "g"), "")
  // 4. Fallback: any remaining "…, CLAUDE.md [§] Part N" or bare "CLAUDE.md Part N".
  t = t.replace(new RegExp(String.raw`,?\s*CLAUDE\.md\s+(?:§\s*)?${PART}`, "g"), "")
  // 4b. Reversed order: " (Part N of [the] CLAUDE.md)" / " Part N of CLAUDE.md" → "".
  t = t.replace(new RegExp(String.raw`\s*\(?(?:§\s*)?${PART}\s+of\s+(?:the\s+)?CLAUDE\.md\)?`, "g"), "")
  // 5. Any residual bare "CLAUDE.md" (e.g. a stray link target) → "the methodology".
  //    (Rare; logged so we can eyeball it.)
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

// Frontmatter-safe: single-line quoted values may carry a CLAUDE.md reference
// (e.g. `tier_rationale: "Per CLAUDE.md …"`). Strip the phrase from within the
// value, preserving each line's LEADING indentation so nested YAML mappings
// stay valid.
function stripFrontmatter(fm) {
  return fm
    .split("\n")
    .map((line) => {
      if (!line.includes("CLAUDE")) return line
      const m = line.match(/^(\s*)(.*)$/)
      return m[1] + cleanup(strip(m[2]))
    })
    .join("\n")
}

// Internal dev-artifact / record directories where a CLAUDE.md reference is
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
for (const f of files) {
  const src = readFileSync(f, "utf8")
  if (!src.includes("CLAUDE")) continue
  // Only transform the BODY — never the YAML frontmatter. The punctuation
  // cleanup collapses runs of spaces, which would flatten nested-mapping
  // indentation in frontmatter and break the YAML parse.
  const fmMatch = src.match(/^---\n[\s\S]*?\n---\n/)
  const fm = fmMatch ? fmMatch[0] : ""
  const body = fmMatch ? src.slice(fm.length) : src
  const before = (src.match(/CLAUDE/g) || []).length
  const next = stripFrontmatter(fm) + cleanup(strip(body))
  const after = (next.match(/CLAUDE/g) || []).length
  if (next !== src) {
    changed++
    totalRepl += before - after
    if (after > 0) residualBare.push(`${f.slice(BASE.length + 1)} (${after} residual)`)
    if (samples.length < 6) {
      // show one changed line
      const bLines = src.split("\n")
      const nLines = next.split("\n")
      for (let i = 0; i < bLines.length; i++) {
        if (bLines[i] !== nLines[i] && bLines[i].includes("CLAUDE.md")) {
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
  console.log(`\n  ⚠ ${residualBare.length} page(s) still contain "CLAUDE.md" after strip (needs a manual look):`)
  for (const r of residualBare.slice(0, 10)) console.log(`     ${r}`)
}
