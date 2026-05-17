#!/usr/bin/env node
// Sync the `sources: N` frontmatter on ingredient, product, and metal pages
// to match the live routing — counted as the number of source pages whose
// frontmatter `ingredients:` / `products:` / `metals:` array references the
// target slug.
//
// Also regenerates the "(N sources)" counts in wiki/<category>/index.md
// listings so the at-a-glance gap visibility on the index pages stays current.
//
// Idempotent. Designed to run in prebuild so every build emits live counts.
//
// Karen's 2026-05-16 directive: the count is the gap-visibility signal —
// keep it, make it accurate. Stale counts mislead brand-legal and HMTc
// staff scanning for "where is evidence thin."

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")

const CATEGORIES = [
  { dir: "wiki/ingredients", indexPath: "wiki/ingredients/index.md", frontmatterKey: "ingredients" },
  { dir: "wiki/products", indexPath: "wiki/products/index.md", frontmatterKey: "products" },
  { dir: "wiki/metals", indexPath: "wiki/metals/index.md", frontmatterKey: "metals" },
]

// ---------- Build the slug→count map by scanning source-page frontmatter ----------

const counts = new Map() // key: "<category>:<slug>", value: number

if (!fs.existsSync(sourcesDir)) {
  console.error(`sources dir not found: ${sourcesDir}`)
  process.exit(1)
}

const sourceFiles = fs.readdirSync(sourcesDir).filter((f) => f.endsWith(".md") && f !== "index.md")

// For each source page, find every reference to a target page (either in
// frontmatter wikilink arrays, frontmatter bare-slug entries, or anywhere
// in the body). Count each (source, target) pair once — multiple references
// from the same source still count as 1.
for (const file of sourceFiles) {
  const raw = fs.readFileSync(path.join(sourcesDir, file), "utf8")

  for (const cat of CATEGORIES) {
    // Scan the entire source-page content for [[<category>/<slug>]] or
    // [[<category>/<slug>|...]] wikilinks. This captures frontmatter array
    // references AND body prose references.
    const wikilinkRe = new RegExp(`\\[\\[${cat.frontmatterKey}\\/([a-z0-9][a-z0-9_-]*)(?:\\|[^\\]]*)?\\]\\]`, "g")
    const seenForThisSource = new Set()
    let wlm
    while ((wlm = wikilinkRe.exec(raw)) !== null) {
      const slug = wlm[1]
      if (seenForThisSource.has(slug)) continue
      seenForThisSource.add(slug)
      const key = `${cat.frontmatterKey}:${slug}`
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }

    // Also check bare-slug entries in the frontmatter array (some sources
    // use `ingredients: [rice, wheat]` rather than `[[[ingredients/rice]]]`).
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/)
    if (fmMatch) {
      const fm = fmMatch[1]
      const re = new RegExp(`^${cat.frontmatterKey}:\\s*\\[([^\\]]*)\\]`, "m")
      const arrMatch = fm.match(re)
      if (arrMatch) {
        const arr = arrMatch[1]
        const bareSlugRe = /(?:^|,)\s*"?([a-z][a-z0-9_-]+)"?\s*(?=,|$)/g
        let bsm
        while ((bsm = bareSlugRe.exec(arr)) !== null) {
          const slug = bsm[1]
          if (seenForThisSource.has(slug)) continue
          // Only count bare slugs that match an existing page in this category
          const targetFile = path.join(repoRoot, cat.dir, `${slug}.md`)
          if (!fs.existsSync(targetFile)) continue
          seenForThisSource.add(slug)
          const key = `${cat.frontmatterKey}:${slug}`
          counts.set(key, (counts.get(key) ?? 0) + 1)
        }
      }
    }
  }
}

// ---------- Update each target page's `sources:` frontmatter ----------

let pagesUpdated = 0
let pagesUnchanged = 0
const pageDeltas = []

for (const cat of CATEGORIES) {
  const dir = path.join(repoRoot, cat.dir)
  if (!fs.existsSync(dir)) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const slug = file.replace(/\.md$/, "")
    const key = `${cat.frontmatterKey}:${slug}`
    const newCount = counts.get(key) ?? 0
    const filePath = path.join(dir, file)
    const raw = fs.readFileSync(filePath, "utf8")
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
    if (!fmMatch) continue
    const fm = fmMatch[1]
    const oldCountMatch = fm.match(/^sources:\s*(\d+)\s*$/m)
    const oldCount = oldCountMatch ? parseInt(oldCountMatch[1], 10) : null
    if (oldCount === newCount) {
      pagesUnchanged += 1
      continue
    }
    let newFm
    if (oldCountMatch) {
      newFm = fm.replace(/^sources:\s*\d+\s*$/m, `sources: ${newCount}`)
    } else {
      // Insert sources field before the closing `updated:` line, or append
      if (/^updated:/m.test(fm)) {
        newFm = fm.replace(/^(updated:.*)$/m, `sources: ${newCount}\n$1`)
      } else {
        newFm = fm + `\nsources: ${newCount}`
      }
    }
    const newRaw = `---\n${newFm}\n---\n` + raw.slice(fmMatch[0].length)
    if (!dryRun) fs.writeFileSync(filePath, newRaw, "utf8")
    pagesUpdated += 1
    pageDeltas.push({ category: cat.frontmatterKey, slug, oldCount, newCount })
  }
}

// ---------- Update the "(N sources)" counts in each index.md ----------

let indexLinesUpdated = 0

for (const cat of CATEGORIES) {
  const indexPath = path.join(repoRoot, cat.indexPath)
  if (!fs.existsSync(indexPath)) continue
  let raw = fs.readFileSync(indexPath, "utf8")
  let changed = false

  // Match list entries: "- [[<category>/<slug>(|Name)?]]" or
  // "N. [[<category>/<slug>(|Name)?]]" with optional existing "(N sources)"
  // trailer. Both bullet and numbered lists are accepted so e.g.
  // wiki/products/index.md (numbered per HMTc category row) stays in sync.
  // Always emit the trailer with the current count so lines that were
  // added without a count (e.g. by link-orphans.mjs) get one.
  const lineRe = new RegExp(
    `((?:^|\\n)(?:- |\\d+\\. )\\[\\[${cat.frontmatterKey}\\/([a-z0-9][a-z0-9_-]*)(?:\\|[^\\]]+)?\\]\\])(?:\\s*\\(\\d+\\s*sources?\\))?`,
    "g",
  )
  raw = raw.replace(lineRe, (match, linkPart, slug) => {
    const key = `${cat.frontmatterKey}:${slug}`
    const newN = counts.get(key) ?? 0
    const noun = newN === 1 ? "source" : "sources"
    const newLine = `${linkPart} (${newN} ${noun})`
    if (newLine !== match) {
      indexLinesUpdated += 1
      changed = true
    }
    return newLine
  })
  if (changed && !dryRun) fs.writeFileSync(indexPath, raw, "utf8")
}

// ---------- Report ----------

console.log(`sync-source-counts: ${dryRun ? "DRY-RUN" : "EXECUTED"}`)
console.log(`  source pages scanned:       ${sourceFiles.length}`)
console.log(`  target pages updated:       ${pagesUpdated}`)
console.log(`  target pages unchanged:     ${pagesUnchanged}`)
console.log(`  index.md count lines fixed: ${indexLinesUpdated}`)

if (pageDeltas.length > 0 && pageDeltas.length <= 30) {
  console.log(`\nDelta detail:`)
  for (const d of pageDeltas.sort((a, b) => (b.newCount - a.newCount) - (a.oldCount ?? 0))) {
    const oldStr = d.oldCount === null ? "(unset)" : String(d.oldCount)
    console.log(`  ${d.category}/${d.slug}: ${oldStr} → ${d.newCount}`)
  }
} else if (pageDeltas.length > 30) {
  console.log(`\nTop 20 increases:`)
  const sorted = pageDeltas
    .filter((d) => d.newCount > (d.oldCount ?? 0))
    .sort((a, b) => (b.newCount - (b.oldCount ?? 0)) - (a.newCount - (a.oldCount ?? 0)))
    .slice(0, 20)
  for (const d of sorted) {
    const oldStr = d.oldCount === null ? "(unset)" : String(d.oldCount)
    console.log(`  ${d.category}/${d.slug}: ${oldStr} → ${d.newCount}`)
  }
}
