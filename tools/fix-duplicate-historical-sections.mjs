#!/usr/bin/env node
// One-shot fix: remove duplicate '## Historical recalls and enforcement'
// sections that were auto-appended by tools/autonomy/mandatory-sections.mjs
// because its heading matcher did not recognize the legacy Title-Case
// '## Historical Recalls/Enforcement' as equivalent.
//
// Action: for each product page that carries BOTH headings:
//   1. Delete the bottom-appended sentence-case placeholder block
//      (the one with `_Pending synthesis. Public-record regulatory events...`).
//   2. Rename the legacy Title-Case heading to canonical sentence-case so
//      future autofills don't regenerate the duplicate.
//
// Run from repo root: node tools/fix-duplicate-historical-sections.mjs

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")

const CANONICAL = "## Historical recalls and enforcement"
const LEGACY = "## Historical Recalls/Enforcement"

let renamed = 0
let dedup = 0

for (const file of fs.readdirSync(productsDir)) {
  if (!file.endsWith(".md")) continue
  const fullpath = path.join(productsDir, file)
  let text = fs.readFileSync(fullpath, "utf8")

  const hasLegacy = text.includes(`\n${LEGACY}\n`)
  const hasCanonical = text.includes(`\n${CANONICAL}\n`)

  if (hasLegacy && hasCanonical) {
    // Remove the canonical duplicate (the appended placeholder block) and
    // then rename the legacy to canonical.
    text = removeCanonicalPlaceholderBlock(text)
    text = text.replace(`\n${LEGACY}\n`, `\n${CANONICAL}\n`)
    dedup += 1
    renamed += 1
  } else if (hasLegacy && !hasCanonical) {
    text = text.replace(`\n${LEGACY}\n`, `\n${CANONICAL}\n`)
    renamed += 1
  }

  fs.writeFileSync(fullpath, text, "utf8")
}

console.log(`Renamed legacy headings: ${renamed}. Removed duplicate placeholder blocks: ${dedup}.`)

// Remove the sentence-case '## Historical recalls and enforcement' block plus
// its `_Pending synthesis. Public-record regulatory events...` placeholder
// paragraph. Stops at the next '## ' heading or EOF.
function removeCanonicalPlaceholderBlock(input) {
  const lines = input.split("\n")
  const out = []
  let i = 0
  while (i < lines.length) {
    if (lines[i] === CANONICAL) {
      // Look ahead: is this the placeholder block (contains the canonical
      // placeholder sentence)? If so, drop through to next '##' or EOF.
      let j = i + 1
      let placeholderSeen = false
      while (j < lines.length && !lines[j].startsWith("## ")) {
        if (lines[j].includes("Pending synthesis. Public-record regulatory events")) {
          placeholderSeen = true
        }
        j += 1
      }
      if (placeholderSeen) {
        // Skip this block entirely, including any trailing blank line right
        // before the next heading.
        i = j
        // Trim trailing blank lines we just left at the end of `out`
        while (out.length > 0 && out[out.length - 1].trim() === "") out.pop()
        out.push("") // single blank line separator
        continue
      }
    }
    out.push(lines[i])
    i += 1
  }
  return out.join("\n")
}
