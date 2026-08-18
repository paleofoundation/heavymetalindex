#!/usr/bin/env node
// Writes data/nav/ingredient-groups.json — the "By commodity group" counts the
// mega-menu (build-nav-panels.mjs) reads by anchor.
//
// The ingredients index PAGE no longer carries a flat per-ingredient list: the
// v3 directory renders a grid of commodity-category cards
// (quartz/components/pages/CategoryDirectory.tsx, from data/category-index.json),
// so a second flat listing on wiki/ingredients/index.md was redundant and was
// removed. The 14-group → member-slug taxonomy that drove the old list — and the
// #anchor jump targets the nav links to — now lives as data in
// data/nav/ingredient-index-source.json, which this generator reads. Editing
// wiki/ingredients/index.md's body is no longer part of this step.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const sourcePath = path.join(repoRoot, "data/nav/ingredient-index-source.json")
const groupsPath = path.join(repoRoot, "data/nav/ingredient-groups.json")

if (!fs.existsSync(sourcePath)) {
  console.error(
    `build-ingredient-index: ${path.relative(repoRoot, sourcePath)} is missing — it is the` +
      ` commodity-group taxonomy the nav counts derive from.`,
  )
  process.exit(1)
}

const taxonomy = JSON.parse(fs.readFileSync(sourcePath, "utf8"))

// count is the number of ingredient pages grouped under each commodity — the
// value the mega-menu shows as "Fruits (30)". Same figure the old flat-list
// bullet count produced.
const groups = taxonomy.map((g) => ({
  label: g.label,
  anchor: g.anchor,
  count: Array.isArray(g.slugs) ? g.slugs.length : 0,
}))

fs.writeFileSync(groupsPath, `${JSON.stringify(groups, null, 2)}\n`, "utf8")

console.log(
  `build-ingredient-index: wrote ${groups.length} commodity group(s) to ${path.relative(
    repoRoot,
    groupsPath,
  )}.`,
)
