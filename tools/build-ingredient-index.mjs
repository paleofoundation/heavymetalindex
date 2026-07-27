#!/usr/bin/env node
// Keep wiki/ingredients/index.md source counts synchronized with ingredient
// page frontmatter while preserving the hand-curated grouping and prose.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const indexPath = path.join(ingredientsDir, "index.md")

const sourceCounts = new Map()

for (const file of fs.readdirSync(ingredientsDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const slug = file.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(ingredientsDir, file), "utf8")
  const fm = matter(raw).data
  const count = Number(fm.sources ?? 0)
  sourceCounts.set(slug, Number.isFinite(count) && count >= 0 ? Math.trunc(count) : 0)
}

let index = fs.readFileSync(indexPath, "utf8")
const today = new Date().toISOString().slice(0, 10)

index = index.replace(/(^---\n[\s\S]*?\nupdated:\s*)\d{4}-\d{2}-\d{2}(\n[\s\S]*?\n---)/, `$1${today}$2`)

let touched = 0
let missing = 0

index = index.replace(
  /^(- \[\[ingredients\/([^|\]]+)\|[^\]]+\]\])(?: \(\d+ sources?\))?$/gm,
  (line, link, slug) => {
    if (!sourceCounts.has(slug)) {
      missing += 1
      return line
    }
    const count = sourceCounts.get(slug)
    touched += 1
    return `${link} (${count} ${count === 1 ? "source" : "sources"})`
  },
)

// ---------------------------------------------------------------------------
// Commodity groups: derive them from the page's own `### ` headings rather than
// from `category:` frontmatter, whose vocabulary has drifted (28 pages carry
// `taxonomy-placeholder`, 15 `unclassified`, plus `vegetable-fruit`,
// `vegetable-grain`, `uncategorized`) and does not map to the 14 display groups.
//
// The "Jump to:" line used to be hand-typed, so its counts drifted the moment a
// bullet moved between groups. Now both it and the navigation panel read from
// the same bullet count.
// ---------------------------------------------------------------------------

// GitHub-flavoured heading anchors: lowercase, strip punctuation except hyphens,
// spaces to hyphens. "Grains, cereals & bakery" -> "grains-cereals--bakery"
// (the ampersand drops out, leaving the double hyphen the existing links use).
function headingAnchor(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s/g, "-")
}

const groups = []
{
  let current = null
  for (const line of index.split("\n")) {
    const heading = line.match(/^###\s+(.+?)\s*$/)
    if (heading) {
      current = { label: heading[1], anchor: headingAnchor(heading[1]), count: 0 }
      groups.push(current)
      continue
    }
    if (current && /^- \[\[ingredients\//.test(line)) current.count += 1
  }
}

if (groups.length) {
  const jumpTo = `**Jump to:** ${groups
    .map((g) => `[${g.label}](#${g.anchor}) (${g.count})`)
    .join(" · ")}`
  index = index.replace(/^\*\*Jump to:\*\*.*$/m, () => jumpTo)

  const navGroupsPath = path.join(repoRoot, "data/nav/ingredient-groups.json")
  fs.mkdirSync(path.dirname(navGroupsPath), { recursive: true })
  fs.writeFileSync(navGroupsPath, `${JSON.stringify(groups, null, 2)}\n`, "utf8")
}

fs.writeFileSync(indexPath, index, "utf8")

console.log(
  `build-ingredient-index: synchronized ${touched} ingredient index row(s) from frontmatter${missing ? `; ${missing} linked slug(s) missing pages` : ""}; ${groups.length} commodity group(s) counted.`,
)
