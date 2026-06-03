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

fs.writeFileSync(indexPath, index, "utf8")

console.log(
  `build-ingredient-index: synchronized ${touched} ingredient index row(s) from frontmatter${missing ? `; ${missing} linked slug(s) missing pages` : ""}.`,
)
