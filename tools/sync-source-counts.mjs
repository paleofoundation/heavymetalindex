#!/usr/bin/env node
import { contractOwnsPage } from "./contracts/page-owner.mjs"
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
import matter from "gray-matter"

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

// ---------- Alias awareness ----------
// A source that declares an alias slug (e.g. `chocolate`) must count toward the
// canonical page that lists it in `aliases:` (e.g. `cocoa-chocolate-products`).
// Without this, the index counter is slug-literal while the routing audit is
// alias-aware, so every page whose evidence was ingested under a coarser/older
// slug than its index row reads "(0 sources)" — the fan-out drift Karen hit on
// HMTc Category 7. Mirrors buildAliasIndex in tools/evidence/build-routing-audit.mjs.
//
// aliasIndexByKey[<frontmatterKey>] : Map(aliasSlug -> canonicalPageSlug)
const aliasIndexByKey = {}
for (const cat of CATEGORIES) {
  aliasIndexByKey[cat.frontmatterKey] = buildAliasIndex(path.join(repoRoot, cat.dir))
}

function buildAliasIndex(dir) {
  const index = new Map()
  if (!fs.existsSync(dir)) return index
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const canonical = file.replace(/\.md$/, "")
    let aliases
    try {
      aliases = matter(fs.readFileSync(path.join(dir, file), "utf8")).data?.aliases
    } catch {
      continue // malformed frontmatter is caught by the routing audit's malformed check
    }
    if (!Array.isArray(aliases)) continue
    for (const alias of aliases) {
      // Slugify exactly as tools/evidence/build-routing-audit.mjs does, so a
      // human-readable alias like "Milk, chocolate, reduced fat, fluid" maps to
      // ONE slug and never shreds into a bare common word like `chocolate`.
      const slug = slugifyAlias(alias)
      if (!slug) continue
      // First-writer-wins on collision — same policy as the routing audit.
      if (!index.has(slug)) index.set(slug, canonical)
    }
  }
  return index
}

function slugifyAlias(alias) {
  if (!alias) return null
  return String(alias)
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// For each source page, find every reference to a target page (either in
// frontmatter wikilink arrays, frontmatter bare-slug entries, or anywhere
// in the body). Count each (source, target) pair once — multiple references
// from the same source still count as 1. A reference to an alias slug credits
// BOTH the alias's own slug (harmless if no page/row uses it) and the canonical
// page that lists it as an alias, deduped per source.
for (const file of sourceFiles) {
  const raw = fs.readFileSync(path.join(sourcesDir, file), "utf8")
  let parsed
  try {
    parsed = matter(raw)
  } catch {
    parsed = { data: {}, content: raw } // malformed frontmatter is caught by the routing audit
  }
  const data = parsed.data || {}
  const body = parsed.content || ""

  for (const cat of CATEGORIES) {
    const aliasIndex = aliasIndexByKey[cat.frontmatterKey]
    const creditedForThisSource = new Set() // target slugs already credited

    const credit = (slug) => {
      // Credit the slug itself and, if it is an alias, its canonical page.
      const targets = [slug]
      const canonical = aliasIndex.get(slug)
      if (canonical && canonical !== slug) targets.push(canonical)
      for (const target of targets) {
        if (creditedForThisSource.has(target)) continue
        creditedForThisSource.add(target)
        const key = `${cat.frontmatterKey}:${target}`
        counts.set(key, (counts.get(key) ?? 0) + 1)
      }
    }

    // 1) Frontmatter declaration array, parsed via gray-matter so BOTH the
    //    inline form (`products: [a, "[[products/b]]"]`) and the YAML
    //    block-sequence form (`products:\n  - a\n  - b`) are handled. The
    //    raw-regex approach this replaced silently dropped block-sequence
    //    bare slugs, leaving block-sequence sources uncounted while the
    //    gray-matter routing audit counted them — the exact drift behind
    //    several 1-source rows reading "(0 sources)".
    let fmVal = data[cat.frontmatterKey]
    if (fmVal !== undefined && fmVal !== null) {
      if (!Array.isArray(fmVal)) fmVal = [fmVal]
      for (const itemRaw of fmVal) {
        const item = String(itemRaw).trim()
        if (!item) continue
        const wl = item.match(new RegExp(`\\[\\[${cat.frontmatterKey}\\/([^|\\]#]+)`))
        if (wl) {
          credit(wl[1])
          continue
        }
        if (item.includes("/")) continue // some other path/link form, skip
        // Bare slug: count only if it matches an existing page in this
        // category OR is a known alias (otherwise it is a free-text token).
        const isPage = fs.existsSync(path.join(repoRoot, cat.dir, `${item}.md`))
        if (isPage || aliasIndex.has(item)) credit(item)
      }
    }

    // 2) Body prose wikilinks (frontmatter wikilinks are handled in step 1;
    //    the per-source dedup prevents double-counting).
    const wikilinkRe = new RegExp(`\\[\\[${cat.frontmatterKey}\\/([a-z0-9][a-z0-9_-]*)(?:\\|[^\\]]*)?\\]\\]`, "g")
    let wlm
    while ((wlm = wikilinkRe.exec(body)) !== null) credit(wlm[1])
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
    if (contractOwnsPage(raw)) continue
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
    if (contractOwnsPage(raw)) continue // Compiled by tools/contracts/build-pilot.mjs.
  let changed = false

  // Match list entries: "- [[<category>/<slug>(|Name)?]]" or
  // "N. [[<category>/<slug>(|Name)?]]" with optional existing "(N sources)"
  // trailer. Both bullet and numbered lists are accepted so e.g.
  // wiki/products/index.md (numbered per HMTc category row) stays in sync.
  // Always emit the trailer with the current count so lines that were
  // added without a count (e.g. by link-orphans.mjs) get one.
  // Leading [ \t]* lets indented rollup sub-bullets (e.g. members nested under a
  // "Canned foods, general" row) receive a count trailer too, not just top-level
  // bullets and numbered rows.
  const lineRe = new RegExp(
    `((?:^|\\n)[ \\t]*(?:- |\\d+\\. )\\[\\[${cat.frontmatterKey}\\/([a-z0-9][a-z0-9_-]*)(?:\\|[^\\]]+)?\\]\\])(?:\\s*\\(\\d+\\s*sources?\\))?`,
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
