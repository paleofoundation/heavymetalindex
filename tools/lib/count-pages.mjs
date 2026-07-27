// One counting authority for "how many pages are in this taxonomy directory".
//
// The homepage corpus counter, the navigation panels, and any future surface
// that quotes a page count all read from here, so they cannot disagree. A reader
// who sees "All 415 product categories" in the nav and "Product categories 414"
// on the homepage has found a defect in the reference, not a rounding choice.
//
// `auto_generated: true` pages are excluded on purpose: derived cross-cuts like
// regulations/by-jurisdiction and regulations/timeline are views over the atomic
// pages, and counting them would inflate the corpus.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

/**
 * @param {string} dir            absolute path to a wiki taxonomy directory
 * @param {string[]} [skipFiles]  filenames to exclude, e.g. ["index.md"]
 * @returns {number}
 */
export function countMarkdownPages(dir, skipFiles = []) {
  if (!fs.existsSync(dir)) return 0
  const skip = new Set(skipFiles)
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !skip.has(file))
    .filter((file) => !file.startsWith("_"))
    .filter((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8")
      let fm
      try {
        fm = matter(raw).data
      } catch {
        return false // malformed frontmatter is not a countable page
      }
      return fm.auto_generated !== true
    }).length
}

/**
 * Frontmatter for every countable page in a directory, keyed by slug.
 * Used by the nav generator to read `sources:` counts and `hmtc_category`.
 *
 * @param {string} dir
 * @param {string[]} [skipFiles]
 * @returns {Map<string, Record<string, unknown>>}
 */
export function readPageFrontmatter(dir, skipFiles = ["index.md"]) {
  const out = new Map()
  if (!fs.existsSync(dir)) return out
  const skip = new Set(skipFiles)
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || skip.has(file) || file.startsWith("_")) continue
    try {
      out.set(file.replace(/\.md$/, ""), matter(fs.readFileSync(path.join(dir, file), "utf8")).data)
    } catch {
      // skip malformed
    }
  }
  return out
}
