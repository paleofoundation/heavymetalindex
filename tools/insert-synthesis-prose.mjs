#!/usr/bin/env node
/**
 * Insert the "## Synthesis basis and censoring treatment" section from a
 * scratchpad_prose_<fam>.md file into each named ingredient page, placed right
 * after the "## Heavy metal contamination profile" section (before the next
 * ## header). Idempotent: skips a page that already has the section.
 *
 * The prose file format is a sequence of blocks:
 *   ===PAGE: <slug>===
 *   ## Synthesis basis and censoring treatment
 *   <paragraphs...>
 *   ## Final report        <-- everything from here is the agent's report, dropped
 *   ...
 *
 * Usage: node tools/insert-synthesis-prose.mjs scratchpad_prose_<fam>.md
 */
import fs from "node:fs"
const proseFile = process.argv[2]
const raw = fs.readFileSync(proseFile, "utf8")
const blocks = raw.split(/^===PAGE:\s*/m).slice(1)
let inserted = 0, skipped = 0
for (const b of blocks) {
  const slug = b.slice(0, b.indexOf("===")).trim()
  let body = b.slice(b.indexOf("===") + 3)
  // keep only the Synthesis-basis section (drop the Final report and anything after)
  const finalIdx = body.indexOf("## Final report")
  if (finalIdx >= 0) body = body.slice(0, finalIdx)
  const synIdx = body.indexOf("## Synthesis basis and censoring treatment")
  if (synIdx < 0) { console.error(`WARN ${slug}: no Synthesis-basis section in prose`); continue }
  let section = body.slice(synIdx).trim()
  const file = `wiki/ingredients/${slug}.md`
  let page = fs.readFileSync(file, "utf8")
  if (page.includes("## Synthesis basis and censoring treatment")) { console.log(`  skip ${slug} (already present)`); skipped++; continue }
  const lines = page.split("\n")
  const hdr = lines.findIndex((l) => /^## Heavy metal contamination profile\s*$/.test(l))
  if (hdr < 0) { console.error(`WARN ${slug}: no contamination-profile header`); continue }
  let next = -1
  for (let i = hdr + 1; i < lines.length; i++) { if (/^## /.test(lines[i])) { next = i; break } }
  if (next < 0) { console.error(`WARN ${slug}: no following section header`); continue }
  // trim a trailing blank line before the next header, then insert section + blank
  const before = lines.slice(0, next)
  while (before.length && before[before.length - 1].trim() === "") before.pop()
  const out = [...before, "", section, "", ...lines.slice(next)].join("\n")
  fs.writeFileSync(file, out)
  console.log(`  inserted ${slug} (${section.split("\n").length} lines)`)
  inserted++
}
console.log(`\n${inserted} inserted, ${skipped} skipped.`)
