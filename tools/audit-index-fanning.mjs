#!/usr/bin/env node
// Index fan-out drift detector.
//
// Catches the failure mode Karen hit on 2026-05-30: product evidence is
// ingested under a coarse/old/variant slug (e.g. `chocolate`, `spices`,
// `seafood`) that has its own page and source coverage, but the products/
// index.md row for that category points at a DIFFERENT slug (e.g. the HMTc
// Taxonomy v2.0 row slug `cocoa-chocolate-products`). The index counter is
// keyed off the row's literal slug, so the row reads "(0 sources)" while the
// real evidence sits invisible on the coarse page. 49 coarse slugs carrying
// 267 source-declarations were leaking this way before the repair.
//
// This audit reports two things:
//   LEAK   — a product slug with >= --min source declarations that is NOT
//            surfaced anywhere in products/index.md (neither as a row/bullet
//            slug nor as an alias of a surfaced page) and is NOT a recognized
//            broad-scope routing token. If it has its own page, its evidence
//            is invisible on the index → fix by repointing a row, adding a
//            bridge node, or aliasing it onto a surfaced page.
//   ZERO   — an index row that displays (0 sources) while the page it points
//            at (or an alias of that page) actually carries source coverage.
//            Indicates the counter and the row slug have drifted apart.
//
// Default mode is --warn-only (exit 0). Pass --strict to exit 1 when LEAKs
// are found (for wiring into a fail-on-error build gate later). Mirrors the
// alias-aware counting in tools/sync-source-counts.mjs and the broad-scope
// vocabulary in tools/evidence/build-routing-audit.mjs.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { BROAD_PRODUCT_SCOPE_SET } from "./evidence/broad-product-scopes.mjs"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const sourcesDir = path.join(repoRoot, "wiki/sources")
const indexPath = path.join(productsDir, "index.md")

const args = process.argv.slice(2)
const strict = args.includes("--strict")
const minArgIdx = args.indexOf("--min")
const MIN = minArgIdx >= 0 ? parseInt(args[minArgIdx + 1], 10) || 3 : 3

// Broad-scope routing tokens that intentionally fan out to several rows rather
// than naming one. Imported from the SHARED canonical list so this audit and
// build-routing-audit.mjs can never disagree about what is broad-scope — the
// exact drift that made dietary-supplements and infant-cereal read as leaks
// here while the routing layer was fanning them out correctly. A leak in this
// set is not a drift bug — the routing layer distributes it deliberately.
const BROAD_SCOPE = BROAD_PRODUCT_SCOPE_SET

function slugifyAlias(alias) {
  if (!alias) return null
  return String(alias).toLowerCase().trim()
    .replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-+|-+$/g, "")
}

// --- Pages + alias index (alias slug -> canonical page slug).
const pageSlugs = new Set()
const retiredPages = new Set() // intentionally not surfaced (retired / out-of-scope rows)
const aliasToCanonical = new Map()
for (const file of fs.readdirSync(productsDir)) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const canonical = file.replace(/\.md$/, "")
  pageSlugs.add(canonical)
  let data
  try { data = matter(fs.readFileSync(path.join(productsDir, file), "utf8")).data } catch { continue }
  if (data?.retired === true) retiredPages.add(canonical)
  if (!Array.isArray(data?.aliases)) continue
  for (const a of data.aliases) {
    const s = slugifyAlias(a)
    if (s && !aliasToCanonical.has(s)) aliasToCanonical.set(s, canonical)
  }
}

// --- Slugs surfaced in products/index.md (as a row/bullet target) + displayed count.
const indexRaw = fs.readFileSync(indexPath, "utf8")
const indexSlugs = new Map() // slug -> displayed count (null if no trailer)
const idxRe = /\[\[products\/([a-z0-9][a-z0-9_-]*)(?:\|[^\]]*)?\]\](?:\s*\((\d+)\s*sources?\))?/g
let im
while ((im = idxRe.exec(indexRaw)) !== null) {
  indexSlugs.set(im[1], im[2] !== undefined ? parseInt(im[2], 10) : null)
}
// A slug is "surfaced" if it is an index target, or it is the canonical page
// behind an index target's alias, or an index target is one of its aliases.
const surfacedCanonicals = new Set()
for (const s of indexSlugs.keys()) {
  surfacedCanonicals.add(s)
  if (aliasToCanonical.has(s)) surfacedCanonicals.add(aliasToCanonical.get(s))
}

// --- Source declaration counts per product slug (alias-aware, deduped per source).
const declCount = new Map()
for (const file of fs.readdirSync(sourcesDir)) {
  if (!file.endsWith(".md") || file === "index.md" || file === "_TEMPLATE.md") continue
  let data
  try { data = matter(fs.readFileSync(path.join(sourcesDir, file), "utf8")).data } catch { continue }
  if (String(data.status || "").toLowerCase() === "duplicate" || data.canonical_source) continue
  let v = data.products
  if (!v) continue
  if (!Array.isArray(v)) v = [v]
  const seen = new Set()
  for (let item of v) {
    item = String(item).trim()
    const wl = item.match(/\[\[products\/([^|\]#]+)/)
    const slug = wl ? wl[1] : (item.includes("/") ? null : item)
    if (!slug || seen.has(slug)) continue
    seen.add(slug)
    declCount.set(slug, (declCount.get(slug) ?? 0) + 1)
  }
}

// --- LEAK: declared slug with >= MIN sources, not surfaced, not broad-scope.
const leaks = []
for (const [slug, n] of declCount) {
  if (n < MIN) continue
  if (BROAD_SCOPE.has(slug)) continue
  if (retiredPages.has(slug)) continue // retired/out-of-scope rows are intentionally unsurfaced
  if (indexSlugs.has(slug)) continue
  if (aliasToCanonical.has(slug) && surfacedCanonicals.has(aliasToCanonical.get(slug))) continue
  leaks.push({ slug, n, hasPage: pageSlugs.has(slug) })
}
leaks.sort((a, b) => b.n - a.n)

// --- ZERO: index row shows 0 but its page/alias actually carries sources.
const zeros = []
for (const [slug, displayed] of indexSlugs) {
  if (displayed !== 0) continue
  // resolve the canonical page this row points at
  const canonical = pageSlugs.has(slug) ? slug : aliasToCanonical.get(slug)
  if (!canonical) continue
  // sum declarations to the canonical and every alias that maps to it
  let total = declCount.get(canonical) ?? 0
  for (const [alias, canon] of aliasToCanonical) {
    if (canon === canonical && alias !== canonical) total += declCount.get(alias) ?? 0
  }
  if (total > 0) zeros.push({ slug, canonical, total })
}

console.log(`index-fanning audit: ${leaks.length} leak(s) >=${MIN} sources, ${zeros.length} zero-row drift(s)`)
if (leaks.length) {
  console.log(`\nLEAK — product slugs with >=${MIN} source declarations not surfaced on products/index.md:`)
  for (const l of leaks) {
    console.log(`  ${String(l.n).padStart(3)}  ${l.slug.padEnd(34)} ${l.hasPage ? "page EXISTS — repoint a row / add bridge node / alias it onto a surfaced page" : "no page — propose a page, alias, or broad-scope token"}`)
  }
}
if (zeros.length) {
  console.log(`\nZERO — index rows reading (0 sources) whose page/aliases carry evidence:`)
  for (const z of zeros) {
    console.log(`  ${z.slug} -> page ${z.canonical} has ${z.total} source(s); row slug and counter have drifted`)
  }
}
if (!leaks.length && !zeros.length) console.log("  clean — every product slug with material source coverage is surfaced on the index.")

if (strict && leaks.length) process.exit(1)
