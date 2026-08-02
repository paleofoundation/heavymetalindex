#!/usr/bin/env node
// tools/normalize-overview-heading.mjs
//
// Every content page should open with an `## Overview` section that introduces
// the page. The corpus does not: some pages carry real intro prose HEADLESS
// (between the H1 and the first `## `), some head it "## What is X?", some
// already use "## Overview", and some have no intro prose at all.
//
// This normalizes the first two cases to `## Overview` WITHOUT writing any new
// prose — it only moves a heading or renames one. The last case (no intro prose)
// is NOT fabricated: a generator cannot honestly invent an overview for a page
// that has none. Those are reported as gaps for content/synthesis work.
//
//   node tools/normalize-overview-heading.mjs [--apply] [--scope=metals|all]
//
// Default is dry-run (reports counts + samples, writes nothing).

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const WIKI = join(ROOT, "wiki")
const APPLY = process.argv.includes("--apply")
const scopeArg = (process.argv.find((a) => a.startsWith("--scope=")) || "--scope=all").split("=")[1]

// page types whose FIRST section legitimately is a dashboard, not prose, and
// which are indexes/registries rather than reading pages — left alone for now.
const SKIP_DIRS = new Set(["lint", "audits", "static", "tags"])

const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue
      walk(p)
    } else if (name.endsWith(".md")) {
      if (scopeArg === "metals" && !p.includes(`${join(WIKI, "metals")}`)) continue
      files.push(p)
    }
  }
}
walk(WIKI)

// A line that opens intro prose: a paragraph or a wikilink/plain sentence — NOT
// a heading, list, table, html block, blockquote, image, or marker comment.
const isProse = (line) => {
  const t = line.trim()
  if (!t) return false
  return /^[A-Za-z"'([]/.test(t) && !t.startsWith("<!--")
}

const WHAT_IS = /^##\s+(What (is|are)\b|Why\b.*\bseparately\b)/i

const counts = { added: 0, renamed: 0, alreadyOverview: 0, gapNoIntro: 0, noH1: 0, skippedNonReading: 0 }
const samples = { added: [], renamed: [], gapNoIntro: [] }

for (const f of files) {
  const raw = readFileSync(f, "utf8")
  const fmEnd = raw.startsWith("---") ? raw.indexOf("\n---", 3) : -1
  const fm = fmEnd >= 0 ? raw.slice(0, fmEnd + 4) : ""
  const body = fmEnd >= 0 ? raw.slice(fmEnd + 4) : raw
  const lines = body.split("\n")

  const h1Idx = lines.findIndex((l) => /^#\s+\S/.test(l))
  const firstH2Idx = lines.findIndex((l) => /^##\s+\S/.test(l))
  const rel = f.slice(WIKI.length + 1)

  // Already opens with ## Overview?
  if (firstH2Idx >= 0 && /^##\s+Overview\s*$/i.test(lines[firstH2Idx])) {
    counts.alreadyOverview++
    continue
  }

  // Case B: first H2 is a "What is X?" / speciation intro → rename to Overview.
  if (firstH2Idx >= 0 && WHAT_IS.test(lines[firstH2Idx])) {
    // only if the H1..H2 gap has no other H2 and this section is prose (next
    // non-blank after it is prose, not a marker/table)
    counts.renamed++
    if (samples.renamed.length < 8) samples.renamed.push(`${rel}  (${lines[firstH2Idx].trim()})`)
    if (APPLY) {
      lines[firstH2Idx] = "## Overview"
      writeFileSync(f, fm + lines.join("\n"))
    }
    continue
  }

  // Case A: headless intro prose between H1 and first H2 → insert "## Overview".
  if (h1Idx >= 0) {
    const zone = lines.slice(h1Idx + 1, firstH2Idx >= 0 ? firstH2Idx : lines.length)
    const hasProse = zone.some(isProse)
    if (hasProse) {
      counts.added++
      if (samples.added.length < 8) samples.added.push(rel)
      if (APPLY) {
        // insert "## Overview\n\n" right after the H1 (and its blank line)
        let ins = h1Idx + 1
        while (ins < lines.length && lines[ins].trim() === "") ins++
        lines.splice(ins, 0, "## Overview", "")
        writeFileSync(f, fm + lines.join("\n"))
      }
      continue
    }
    // H1 present but no intro prose before first section = genuine gap.
    counts.gapNoIntro++
    if (samples.gapNoIntro.length < 12) samples.gapNoIntro.push(rel)
    continue
  }

  // No H1 (frontmatter-title page): intro prose may sit right after the
  // frontmatter, before the first `## `. If so, head it with "## Overview".
  {
    const zone = lines.slice(0, firstH2Idx >= 0 ? firstH2Idx : lines.length)
    if (zone.some(isProse)) {
      counts.added++
      if (samples.added.length < 8) samples.added.push(rel)
      if (APPLY) {
        let ins = 0
        while (ins < lines.length && lines[ins].trim() === "") ins++
        lines.splice(ins, 0, "## Overview", "")
        writeFileSync(f, fm + lines.join("\n"))
      }
    } else {
      counts.noH1++
    }
  }
}

console.log(`normalize-overview (${APPLY ? "APPLY" : "dry-run"}, scope=${scopeArg}): ${files.length} pages`)
console.log(`  + add "## Overview" over headless intro prose : ${counts.added}`)
console.log(`  ↻ rename "What is X?" → "## Overview"          : ${counts.renamed}`)
console.log(`  ✓ already opens with ## Overview               : ${counts.alreadyOverview}`)
console.log(`  ✗ GAP — H1 but no intro prose (content work)   : ${counts.gapNoIntro}`)
console.log(`  · no H1 (frontmatter-title pages)              : ${counts.noH1}`)
if (samples.added.length) console.log(`\n  add samples: ${samples.added.join(", ")}`)
if (samples.renamed.length) console.log(`  rename samples: ${samples.renamed.join(", ")}`)
if (samples.gapNoIntro.length) console.log(`  GAP samples (need real content, not fabricated): ${samples.gapNoIntro.join(", ")}`)
