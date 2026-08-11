#!/usr/bin/env node
// Auto-link orphan pages from per-category index files.
//
// CLAUDE.md Part 10: "New pages must be linked from index.md on creation.
// They must also be linked from at least one parent category page (metal,
// ingredient, product, regulation, testing method) or they become orphans.
// Lint catches orphans, but prevention is cheaper than detection."
//
// This tool finds pages in wiki/products, wiki/ingredients, wiki/metals,
// wiki/regulations that aren't referenced from the corresponding
// wiki/<category>/index.md and appends them to a marker-managed "Auto-linked
// stubs" section at the bottom of the index. Idempotent: re-running adds
// nothing once orphans are linked.
//
// The auto-linked section is bracketed by markers so a future structural
// pass can place orphans in proper category sections without conflicting
// with this tool.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)

const CATEGORIES = [
  { dir: "wiki/products", indexFile: "wiki/products/index.md" },
  { dir: "wiki/ingredients", indexFile: "wiki/ingredients/index.md" },
  { dir: "wiki/metals", indexFile: "wiki/metals/index.md" },
  { dir: "wiki/regulations", indexFile: "wiki/regulations/index.md" },
]

const MARKER_BEGIN = "<!-- BEGIN: hmi-auto-linked-stubs -->"
const MARKER_END = "<!-- END: hmi-auto-linked-stubs -->"

let totalAdded = 0

for (const cat of CATEGORIES) {
  const dir = path.join(repoRoot, cat.dir)
  const indexPath = path.join(repoRoot, cat.indexFile)
  if (!fs.existsSync(dir)) continue

  const allSlugs = fs.readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .filter((f) => !isRetired(path.join(dir, f)))
    .map((f) => path.basename(f, ".md"))
    .sort()

  const indexText = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : ""

  // Strip any existing auto-linked section BEFORE computing orphans. The old
  // version computed orphans against the whole file, INCLUDING the section it
  // was about to regenerate, so a slug that was present only because a previous
  // run had listed it here counted as "not an orphan" and was silently dropped
  // when the section was rewritten. Re-running the tool therefore lost pages.
  // Computing against the CURATED index (section removed) makes it idempotent.
  const sectionRe = new RegExp(`\\n*${escapeRe(MARKER_BEGIN)}[\\s\\S]*?${escapeRe(MARKER_END)}\\n*`)
  const curatedText = indexText.replace(sectionRe, "\n")

  // A slug is referenced only if it appears as an actual [[category/slug]]
  // wikilink, matched on a slug boundary. Substring matching (the old
  // `indexText.includes(slug)`) let "cereal" mask "baby-cereals-dry" and any
  // slug that happened to be a substring of unrelated prose, hiding real orphans.
  const cname = path.basename(cat.dir)
  const referenced = new Set()
  const linkRe = new RegExp(`\\[\\[${escapeRe(cname)}/([a-z0-9][a-z0-9_-]*)`, "g")
  let lm
  while ((lm = linkRe.exec(curatedText)) !== null) referenced.add(lm[1])

  const orphans = allSlugs.filter((slug) => !referenced.has(slug))

  if (orphans.length === 0) {
    // Nothing to surface. If a stale section is still present, drop it so the
    // index reflects reality.
    if (curatedText !== indexText) {
      fs.writeFileSync(indexPath, curatedText.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n", "utf8")
      console.log(`${cat.indexFile}: removed stale auto-linked section (0 orphans)`)
    }
    continue
  }

  // Build the auto-linked section
  const lines = []
  lines.push("")
  lines.push("## Additional indexed pages")
  lines.push("")
  lines.push("_Auto-managed by `tools/autonomy/link-orphans.mjs`. These pages exist in this directory and are reachable from here, but have not yet been placed in a curated section above. A future structural pass relocates them into the appropriate section._")
  lines.push("")
  for (const slug of orphans) {
    const fullPath = path.join(dir, `${slug}.md`)
    const title = readTitle(fullPath) || titleize(slug)
    const wikilink = `[[${cname}/${slug}|${title}]]`
    lines.push(`- ${wikilink}`)
  }
  lines.push("")

  const newText =
    curatedText.replace(/\n{3,}/g, "\n\n").trimEnd() +
    "\n\n" + MARKER_BEGIN + "\n" + lines.join("\n") + MARKER_END + "\n"
  fs.writeFileSync(indexPath, newText, "utf8")
  console.log(`${cat.indexFile}: linked ${orphans.length} orphan(s)`)
  totalAdded += orphans.length
}

console.log(`Auto-linked ${totalAdded} orphan(s) across ${CATEGORIES.length} categories`)

// A page marked `retired: true` is out of scope; it stays reachable by direct
// link but is not surfaced as fresh index navigation, matching how the rail's
// Connections block drops retired pages.
function isRetired(filepath) {
  const text = fs.readFileSync(filepath, "utf8")
  const fm = text.match(/^---\n([\s\S]*?)\n---/)
  return !!(fm && /^retired:\s*true\b/m.test(fm[1]))
}

function readTitle(filepath) {
  const text = fs.readFileSync(filepath, "utf8")
  // Try frontmatter title field first
  const fmTitle = text.match(/^title:\s*"?([^"\n]+)"?$/m)
  if (fmTitle) return fmTitle[1].trim()
  // Fall back to first H1
  const h1 = text.match(/^#\s+(.+?)\s*$/m)
  if (h1) return h1[1].trim()
  return null
}

function titleize(slug) {
  return slug.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
