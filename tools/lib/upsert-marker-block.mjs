// Replace the contents of a marker-bounded block in a wiki page.
//
// Every generator that writes into an existing page uses this shape: a
// `<!-- BEGIN: x -->` / `<!-- END: x -->` pair whose contents are machine-owned
// and whose surroundings are hand-authored. Two things about that contract have
// bitten this repo before, and both are handled here so no generator has to
// remember them:
//
// 1. **`$&` corruption.** `String.replace(pattern, block)` interprets `$&`,
//    `$1`, `` $` `` and `$'` inside the *replacement* as backreferences. Source
//    legends routinely carry literal dollar amounts ("$12–18 billion"), where
//    `$1` expanded to the entire matched block and re-inserted every prior table
//    on each run. The function-replacer form below is immune.
//
// 2. **Silent no-op on missing markers.** The old `upsertFeatureGridBlock`
//    returned quietly when its markers were absent, so deleting the markers left
//    behind a generator that looked live, did nothing, and would be "fixed" back
//    in by the next reader. A generator that cannot find its target is a build
//    error, not a shrug.

import fs from "node:fs"
import path from "node:path"

export function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/**
 * @param {string} filePath      page to rewrite
 * @param {string} beginMarker   e.g. "<!-- BEGIN: hmi-corpus-counter -->"
 * @param {string} endMarker
 * @param {string} block         full replacement text, markers included
 * @param {object} [opts]
 * @param {string} [opts.anchorAfter]  substring to insert after when the markers
 *   are absent. Without it, missing markers are a hard error.
 * @returns {"replaced"|"inserted"|"unchanged"}
 */
export function upsertMarkerBlock(filePath, beginMarker, endMarker, block, opts = {}) {
  const { anchorAfter } = opts
  const rel = path.relative(process.cwd(), filePath)

  if (!fs.existsSync(filePath)) {
    console.error(`upsert-marker-block: ${rel} does not exist`)
    process.exit(1)
  }

  const text = fs.readFileSync(filePath, "utf8")
  const pattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)

  if (pattern.test(text)) {
    const next = text.replace(pattern, () => block)
    if (next === text) return "unchanged"
    fs.writeFileSync(filePath, next, "utf8")
    return "replaced"
  }

  if (anchorAfter) {
    const at = text.indexOf(anchorAfter)
    if (at >= 0) {
      const insertAt = at + anchorAfter.length
      const next = `${text.slice(0, insertAt)}\n\n${block}\n${text.slice(insertAt)}`
      fs.writeFileSync(filePath, next, "utf8")
      return "inserted"
    }
  }

  console.error(
    `upsert-marker-block: ${rel} has no ${beginMarker} … ${endMarker} block` +
      (anchorAfter ? ` and no "${anchorAfter}" anchor to insert after.` : ".") +
      `\n  Either restore the markers or delete the generator that writes them —` +
      ` a generator with no target is dead code that reads as live.`,
  )
  process.exit(1)
}
