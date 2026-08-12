#!/usr/bin/env node
// Bulk-apply a "Literature scope: thin" caveat to HMTc-locked product pages
// where the wiki's source corpus does not yet cover the category. Adds a
// `literature_scope: thin` flag to frontmatter (which the routing-discipline
// audit respects via an exemption rule) and inserts a "Literature scope"
// section after the H1 introduction that's visible to readers and to the
// chatbot retrieval.
//
// Idempotent — pages that already carry the flag are skipped.
//
// Usage:
//   node tools/apply-literature-scope-caveat.mjs --list <slugs-file>
//   node tools/apply-literature-scope-caveat.mjs --list /tmp/locked-thin.txt --dry-run

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const listIdx = args.indexOf("--list")
const dryRun = args.includes("--dry-run")
if (listIdx < 0 || listIdx + 1 >= args.length) {
  console.error("Usage: --list <path-to-slugs-file> [--dry-run]")
  process.exit(1)
}
const slugs = fs.readFileSync(args[listIdx + 1], "utf8").trim().split("\n").filter(Boolean)

// Resolve the HMTc category broadly for the caveat copy. The frontmatter
// hmtc_category_name field gives us the specific text.
const CAVEAT_BLOCK = (categoryName) => `
## Literature scope

The Heavy Metal Index source corpus is currently focused on food and food-contact materials. This page documents an HMTc Taxonomy v2.0 row in the category **${categoryName}** for which no peer-reviewed primary or government sources have yet been ingested. The page exists as the routing destination for future ingest. Until sources land, the literature-evidence sections below are deliberately empty rather than guessed. Initial HMTc limits are compiled separately at [heavymetalcertified.com](https://heavymetalcertified.com) under the government-limit-only method; Index occurrence evidence does not select a certification value or status.

`

let modified = 0
let alreadyFlagged = 0
let missing = 0

for (const slug of slugs) {
  const filePath = path.join(repoRoot, "wiki/products", `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    missing += 1
    continue
  }
  const raw = fs.readFileSync(filePath, "utf8")
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fmMatch) continue
  const fm = fmMatch[1]
  if (/^literature_scope:\s*thin/m.test(fm)) {
    alreadyFlagged += 1
    continue
  }
  // Get the category name for the caveat copy
  const categoryNameMatch = fm.match(/^hmtc_category_name:\s*"?([^"\n]+)"?$/m)
  const categoryName = categoryNameMatch ? categoryNameMatch[1].trim() : "this product class"

  // Insert literature_scope: thin into frontmatter, before sources: line
  let newFm = fm
  if (/^sources:\s/m.test(newFm)) {
    newFm = newFm.replace(/^(sources:\s.*)$/m, `literature_scope: thin\n$1`)
  } else {
    newFm = newFm + `\nliterature_scope: thin`
  }

  // Insert caveat after the H1 paragraph and before the first H2.
  // Find: `# Title\n\n<intro paragraph>\n\n## Who this page is for` or similar.
  const body = raw.slice(fmMatch[0].length)
  // Find the position of the first ## heading
  const firstH2 = body.match(/^## /m)
  if (!firstH2) continue
  const firstH2Index = body.indexOf(firstH2[0])
  const beforeH2 = body.slice(0, firstH2Index)
  const fromH2 = body.slice(firstH2Index)
  const newBody = `${beforeH2}${CAVEAT_BLOCK(categoryName)}${fromH2}`

  const newRaw = `---\n${newFm}\n---\n${newBody}`
  if (!dryRun) fs.writeFileSync(filePath, newRaw, "utf8")
  modified += 1
}

console.log(`apply-literature-scope-caveat: ${dryRun ? "DRY-RUN" : "EXECUTED"}`)
console.log(`  pages modified:        ${modified}`)
console.log(`  already flagged:       ${alreadyFlagged}`)
console.log(`  missing on disk:       ${missing}`)
console.log(`  total in list:         ${slugs.length}`)
