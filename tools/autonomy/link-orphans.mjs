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
    .map((f) => path.basename(f, ".md"))
    .sort()

  let indexText = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : ""

  // Find orphan slugs (not referenced anywhere in the index file)
  const orphans = allSlugs.filter((slug) => !indexText.includes(slug))
  if (orphans.length === 0) continue

  // Build the auto-linked section
  const lines = []
  lines.push("")
  lines.push("## Auto-linked stubs")
  lines.push("")
  lines.push("_Auto-managed by `tools/autonomy/link-orphans.mjs`. Pages listed here exist in this directory but were not yet placed in a curated index section above. A future structural pass relocates them to proper category sections._")
  lines.push("")
  for (const slug of orphans) {
    const fullPath = path.join(dir, `${slug}.md`)
    const title = readTitle(fullPath) || titleize(slug)
    const wikilink = `[[${path.basename(cat.dir)}/${slug}|${title}]]`
    lines.push(`- ${wikilink}`)
  }
  lines.push("")

  // Replace existing auto-linked section if present
  if (indexText.includes(MARKER_BEGIN)) {
    const re = new RegExp(`${escapeRe(MARKER_BEGIN)}[\\s\\S]*?${escapeRe(MARKER_END)}`)
    indexText = indexText.replace(re, `${MARKER_BEGIN}\n${lines.join("\n")}${MARKER_END}`)
  } else {
    indexText = indexText.trimEnd() + "\n\n" + MARKER_BEGIN + "\n" + lines.join("\n") + MARKER_END + "\n"
  }

  fs.writeFileSync(indexPath, indexText, "utf8")
  console.log(`${cat.indexFile}: linked ${orphans.length} orphan(s)`)
  totalAdded += orphans.length
}

console.log(`Auto-linked ${totalAdded} orphan(s) across ${CATEGORIES.length} categories`)

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
