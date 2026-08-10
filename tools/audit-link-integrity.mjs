#!/usr/bin/env node
// Link-integrity audit — the regression guard for the wiki's internal-linking
// apparatus. The Index is a wiki: its authority and its SEO/LLMO value depend on
// dense, correct internal linking. Three failure classes silently erode that,
// and each has bitten the site before:
//
//   ORPHAN            — a topical page reachable from nothing (linked "up" to
//                       sources but "down"/"laterally" to nothing, and absent
//                       from its category index). Dead-end pages.
//   EMPTY_CONNECTIONS — a page whose right-rail "Connections" block renders
//                       empty because the concept graph never resolved its
//                       structured metadata. 94/155 regulation pages rendered
//                       empty before the relatedGraph concept-resolution fix.
//   ROUTING_UNSURFACED— a product slug carrying >=3 source declarations that is
//                       not surfaced on products/index.md and is not a
//                       broad-scope token (the index-fanning leak).
//
// A fourth class, DEAD_LINKS (a [[wikilink]] to a page that does not exist), is
// reported as a WARNING: the corpus has a long tail of these and draining it is
// content work, but the count must not grow silently.
//
// CONNECTION LOGIC KEPT IN SYNC WITH quartz/components/relatedGraph.ts. The
// render-time rail and this lint must agree on what "a connection" is, or the
// guard is worthless. If you change the concept resolution in one, change both.
//
// One deliberate asymmetry: this lint reads RAW markdown wikilinks, while the
// render also has the links AutoLink() injects for the first prose mention of a
// metal (quartz.config.ts). So the lint UNDER-counts relative to the render: a
// page it flags as 0-connection may render a metal link the prose earned. That
// is the safe direction for a guard — it never reports a truly dead-end page as
// connected — so its EMPTY_CONNECTIONS findings are "verify in render" leads,
// which is why metal stubs and provisional scaffolds only WARN, never fail.
//
// Modes: default is --warn-only (report, exit 0). --strict exits 1 when any
// fail-class finding exists, for wiring into a build gate once the backlog is
// drained. Wired warn-only into `prebuild`.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { BROAD_PRODUCT_SCOPE_SET } from "./evidence/broad-product-scopes.mjs"

const repoRoot = process.cwd()
const wikiDir = path.join(repoRoot, "wiki")
const args = process.argv.slice(2)
const STRICT = args.includes("--strict")

// Directories excluded from the public build (quartz.config.ts ignorePatterns)
// plus the non-topical record dirs. Orphan/connection checks only apply to
// published, navigable content.
const EXCLUDED_DIRS = new Set(["briefings", "queries", "private", "templates", "raw", "static"])
// Record/provenance dirs that are published but are not primary navigation, so
// a thin connection set on them is not a defect.
const NON_TOPICAL_DIRS = new Set([
  "sources", "batch-reports", "lint", "audits", "corpus", "studies", "queries",
])
// The concept categories the rail groups by (relatedGraph.ts GROUP_KEYS).
const GROUP_KEYS = new Set(["metals", "ingredients", "products", "regulations", "synthesis", "mitigation"])
// Categories with a curated index.md that link-orphans.mjs keeps complete;
// a top-level page here that is in no index and has no topical inbound is a
// true orphan.
const ORPHAN_DIRS = new Set(["products", "ingredients", "metals", "regulations"])
// Types whose empty Connections are a hard defect. Metals are excluded: a
// handful of peripheral element stubs (barium, gold, tellurium...) are
// legitimately niche and have no topical neighbour, so they WARN, not fail.
const CONNECTION_REQUIRED_TYPES = new Set(["product-category", "ingredient", "regulation"])

function simplify(slug) {
  slug = String(slug).replace(/\\/g, "")
  slug = slug.replace(/^\/+/, "").replace(/\.md$/, "")
  slug = slug.replace(/#.*/, "").replace(/\|.*/, "")
  slug = slug.replace(/\/index$/, "").replace(/^index$/, "")
  return slug.trim()
}
const catOf = (s) => (s ?? "").split("/")[0]

// ---- Walk the wiki.
const pages = new Map()
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (EXCLUDED_DIRS.has(e.name)) continue
      walk(path.join(dir, e.name))
      continue
    }
    if (!e.name.endsWith(".md") || e.name === "_TEMPLATE.md") continue
    const full = path.join(dir, e.name)
    const rel = path.relative(wikiDir, full).replace(/\.md$/, "")
    if (EXCLUDED_DIRS.has(catOf(rel))) continue
    let fm = {}, body = ""
    try { const g = matter(fs.readFileSync(full, "utf8")); fm = g.data || {}; body = g.content || "" } catch {}
    const slug = simplify(rel)
    const links = new Set()
    for (const m of body.matchAll(/\[\[([^\]]+?)\]\]/g)) {
      const t = simplify(m[1])
      if (t) links.add(t)
    }
    pages.set(slug, {
      slug, rel, dir: catOf(rel), fm, links,
      type: fm.type ? String(fm.type) : null,
      isIndex: /(?:^|\/)index$/.test(rel),
      retired: fm.retired === true,
      scaffold: fm.provisional_scaffold === true,
    })
  }
}
walk(wikiDir)

const realSlugs = new Set(pages.keys())

// Alias slugs -> canonical, from `aliases:` frontmatter. A [[link]] to an alias
// is not dead, and an aliased page is not unsurfaced.
const aliasToCanonical = new Map()
for (const p of pages.values()) {
  const a = p.fm.aliases
  if (!a) continue
  for (const al of Array.isArray(a) ? a : [a]) {
    const s = simplify(al)
    if (s && !aliasToCanonical.has(s)) aliasToCanonical.set(s, p.slug)
  }
}

// Metal symbol -> slug (relatedGraph.ts buildConceptIndex). Symbols first across
// all metal pages, then name/species as fallbacks (so a species never shadows
// another page's symbol).
const symbolToMetal = new Map()
const register = (id, slug) => {
  if (id == null) return
  const s = String(id).trim()
  if (!s) return
  if (!symbolToMetal.has(s)) symbolToMetal.set(s, slug)
  const low = s.toLowerCase()
  if (!symbolToMetal.has(low)) symbolToMetal.set(low, slug)
}
const metalPages = [...pages.values()].filter((p) => p.type === "metal")
for (const p of metalPages) register(p.fm.symbol, p.slug)
for (const p of metalPages) {
  register(p.fm.name, p.slug)
  for (const sp of Array.isArray(p.fm.species) ? p.fm.species : []) register(sp, p.slug)
}

const CONCEPT_KEYS = [
  "metals", "metal", "primary_metals_of_concern", "primary_metals", "metals_of_concern",
  "analyte", "analytes", "products", "product", "related_products",
  "ingredients", "ingredient", "typical_ingredients", "related_ingredients", "key_ingredients",
  "regulations", "applicable_regulations", "related_regulations", "matrix", "matrices",
]
function resolveToken(tok) {
  const raw = String(tok).trim()
  if (!raw) return null
  const wl = raw.match(/\[\[([^\]\|#]+)/)
  if (wl) { const s = simplify(wl[1].trim().replace(/^\/+/, "")); return realSlugs.has(s) ? s : (aliasToCanonical.get(s) ?? null) }
  if (symbolToMetal.has(raw)) return symbolToMetal.get(raw)
  if (symbolToMetal.has(raw.toLowerCase())) return symbolToMetal.get(raw.toLowerCase())
  const bare = simplify(raw.replace(/^\/+/, ""))
  if (bare.includes("/")) return realSlugs.has(bare) ? bare : (aliasToCanonical.get(bare) ?? null)
  for (const c of ["metals", "ingredients", "products", "regulations"]) {
    if (realSlugs.has(`${c}/${bare}`)) return `${c}/${bare}`
  }
  return null
}
function conceptEdges(p) {
  const out = new Set()
  for (const key of CONCEPT_KEYS) {
    const v = p.fm[key]
    if (v == null) continue
    for (const item of Array.isArray(v) ? v : [v]) {
      const r = resolveToken(item)
      if (r && r !== p.slug) out.add(r)
    }
  }
  return out
}

// ---- Inbound index (body links + resolved concept edges) = bidirectional.
const inbound = new Map()
const add = (t, from) => { if (!inbound.has(t)) inbound.set(t, new Set()); inbound.get(t).add(from) }
for (const p of pages.values()) {
  for (const l of p.links) add(l, p.slug)
  for (const e of conceptEdges(p)) add(e, p.slug)
}

// ---- Connections for one page (mirror Rail.pick: outbound-topical one-per-group
//      first, then rest, then inbound-topical; drop retired; cap 3).
function connectionCount(p) {
  const outbound = new Set([...p.links, ...conceptEdges(p)])
  const order = new Map()
  let i = 0
  for (const l of p.links) if (!order.has(l)) order.set(l, i++)
  for (const l of conceptEdges(p)) if (!order.has(l)) order.set(l, i++)
  const candidates = new Set(outbound)
  for (const from of inbound.get(p.slug) ?? []) candidates.add(from)
  const rows = []
  for (const cand of candidates) {
    if (cand === p.slug) continue
    const tp = pages.get(cand)
    if (tp?.retired) continue
    const cat = catOf(cand)
    if (!GROUP_KEYS.has(cat)) continue
    rows.push({ cat, outbound: outbound.has(cand), order: order.get(cand) ?? 1e9, topical: !!tp?.type })
  }
  const GROUPS = ["metals", "ingredients", "products", "regulations", "synthesis", "mitigation"]
  const inCat = (k, w) => rows.filter((r) => r.cat === k && r.outbound === w && r.topical).sort((a, b) => a.order - b.order)
  const pick = (w) => {
    const first = GROUPS.map((g) => inCat(g, w)[0])
    const rest = GROUPS.flatMap((g) => inCat(g, w).slice(1))
    return [...first, ...rest].filter(Boolean)
  }
  return [...pick(true), ...pick(false)].slice(0, 3).length
}

// ---- Index reference sets (a page referenced from its own category index.md).
const indexReferences = new Map() // category -> Set(slug)
for (const cat of ["products", "ingredients", "metals", "regulations", "synthesis", "mitigation"]) {
  const idxPath = path.join(wikiDir, cat, "index.md")
  const set = new Set()
  if (fs.existsSync(idxPath)) {
    const txt = fs.readFileSync(idxPath, "utf8")
    const re = new RegExp(`\\[\\[${cat}/([a-z0-9][a-z0-9_-]*)`, "g")
    let m
    while ((m = re.exec(txt)) !== null) set.add(m[1])
  }
  indexReferences.set(cat, set)
}

// ---- Product source-declaration counts (mirror audit-index-fanning).
const declCount = new Map()
const srcDir = path.join(wikiDir, "sources")
if (fs.existsSync(srcDir)) {
  for (const file of fs.readdirSync(srcDir)) {
    if (!file.endsWith(".md") || file === "index.md" || file === "_TEMPLATE.md") continue
    let data
    try { data = matter(fs.readFileSync(path.join(srcDir, file), "utf8")).data } catch { continue }
    if (String(data.status || "").toLowerCase() === "duplicate" || data.canonical_source) continue
    let v = data.products
    if (!v) continue
    if (!Array.isArray(v)) v = [v]
    const seen = new Set()
    for (let item of v) {
      item = String(item).trim()
      const wl = item.match(/\[\[products\/([^|\]#]+)/)
      const s = wl ? wl[1] : (item.includes("/") ? null : item)
      if (!s || seen.has(s)) continue
      seen.add(s)
      declCount.set(s, (declCount.get(s) ?? 0) + 1)
    }
  }
}
const productIndexRefs = indexReferences.get("products")
const surfacedProducts = new Set(productIndexRefs)
for (const s of productIndexRefs) if (aliasToCanonical.has(`products/${s}`)) surfacedProducts.add(simplify(aliasToCanonical.get(`products/${s}`)).split("/").pop())

// ======================= CHECKS =======================
const fails = { orphan: [], empty: [], routing: [] }
const warns = { emptyMetal: [], emptyScaffold: [], deadLinks: new Map() }

for (const p of pages.values()) {
  if (p.isIndex || p.retired) continue
  if (NON_TOPICAL_DIRS.has(p.dir)) continue
  if (!p.type) continue // directory/nav pages carry no type

  // ORPHAN: a TOP-LEVEL page (cat/page, one slash) in one of the four indexed
  // categories that is neither referenced from its category index.md nor linked
  // by any topical page. Sub-directory pages (products/categories/*) are
  // reachable through Quartz's auto-generated folder pages, and non-indexed
  // dirs (methodology, certification) have their own nav, so neither is an
  // orphan in the sense link-orphans.mjs resolves.
  if (ORPHAN_DIRS.has(p.dir) && p.slug.split("/").length === 2) {
    const inbTopical = [...(inbound.get(p.slug) ?? [])].filter((s) => {
      const q = pages.get(s)
      return q && !q.isIndex && q.type
    })
    const inIndex = indexReferences.get(p.dir)?.has(p.slug.split("/").pop())
    if (inbTopical.length === 0 && !inIndex) fails.orphan.push(p.slug)
  }

  // EMPTY_CONNECTIONS.
  const conns = connectionCount(p)
  if (conns === 0) {
    if (p.scaffold) warns.emptyScaffold.push(p.slug)
    else if (p.type === "metal") warns.emptyMetal.push(p.slug)
    else if (CONNECTION_REQUIRED_TYPES.has(p.type)) fails.empty.push(p.slug)
  }
}

// ROUTING_UNSURFACED.
for (const [slug, n] of declCount) {
  if (n < 3) continue
  if (BROAD_PRODUCT_SCOPE_SET.has(slug)) continue
  const pg = pages.get(`products/${slug}`)
  if (pg?.retired) continue
  if (surfacedProducts.has(slug)) continue
  if (aliasToCanonical.has(`products/${slug}`)) continue
  fails.routing.push({ slug, n })
}

// DEAD_LINKS (warn).
const WIKI_CATS = new Set([...GROUP_KEYS, "testing", "microbiome", "health", "supply-chain", "regulators", "methodology", "sources", "certification", "app", "courses", "advisory"])
for (const p of pages.values()) {
  for (const t of p.links) {
    const cat = catOf(t)
    if (!WIKI_CATS.has(cat)) continue
    if (t.split("/").length < 2) continue
    if (t.includes("...") || t.endsWith("/")) continue
    if (realSlugs.has(t) || aliasToCanonical.has(t)) continue
    warns.deadLinks.set(t, (warns.deadLinks.get(t) ?? 0) + 1)
  }
}

// ======================= REPORT =======================
const nFail = fails.orphan.length + fails.empty.length + fails.routing.length
const deadTotal = [...warns.deadLinks.values()].reduce((a, b) => a + b, 0)
console.log(`link-integrity: ${nFail} fail-class finding(s); warnings: ${warns.emptyMetal.length} thin metal stub(s), ${warns.emptyScaffold.length} thin scaffold(s), ${warns.deadLinks.size} dead-link target(s) (${deadTotal} refs)`)

const show = (label, arr, fmt = (x) => x) => {
  if (!arr.length) return
  console.log(`\n${label} (${arr.length}):`)
  for (const x of arr.slice(0, 40)) console.log(`  ${fmt(x)}`)
  if (arr.length > 40) console.log(`  … and ${arr.length - 40} more`)
}
show("FAIL ORPHAN — topical page reachable from nothing", fails.orphan)
show("FAIL EMPTY_CONNECTIONS — product/ingredient/regulation renders 0 connections", fails.empty)
show("FAIL ROUTING_UNSURFACED — product slug with >=3 sources not surfaced/broad-scope", fails.routing, (x) => `${String(x.n).padStart(3)}  ${x.slug}`)
if (warns.emptyMetal.length) show("warn: peripheral metal stubs with 0 connections", warns.emptyMetal)
if (warns.emptyScaffold.length) show("warn: provisional scaffolds with 0 connections", warns.emptyScaffold)
if (warns.deadLinks.size) {
  const top = [...warns.deadLinks.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)
  console.log(`\nwarn: top dead-link targets:`)
  for (const [t, n] of top) console.log(`  ${String(n).padStart(4)}  ${t}`)
}

if (nFail === 0) console.log("\nclean — no orphans, every product/ingredient/regulation page renders connections, and routing is fully surfaced.")
if (STRICT && nFail > 0) process.exit(1)
