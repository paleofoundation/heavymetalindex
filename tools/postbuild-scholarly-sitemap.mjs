#!/usr/bin/env node
// Post-build step: emit public/sitemap-scholarly.xml — a focused sitemap
// containing only the scholarly pages (synthesis, metals, ingredients,
// regulations, sources). This is the feed academic crawlers (Google Scholar,
// Semantic Scholar, OpenAlex) prefer to consume: smaller, all scholarly,
// with <priority> and <changefreq> hints tuned for scholarly content.
//
// The main sitemap.xml emitted by Quartz remains the canonical index for
// every public page (including batch-reports, briefings, coverage, etc.).
// The scholarly sitemap is the high-priority subset.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { isLowValuePage, isNoindex } from "./lib/low-value-page.mjs"
import {
  collectPublishedPages,
  loadBlockedPublicPaths,
  publicPathForContentSlug,
  sitemapLocPaths,
} from "./lib/sitemap-indexability.mjs"

const repoRoot = process.cwd()
const publicDir = path.join(repoRoot, "public")
const outputPath = path.join(publicDir, "sitemap-scholarly.xml")

if (!fs.existsSync(publicDir)) {
  console.log("postbuild-scholarly-sitemap: public/ not present yet (skipping)")
  process.exit(0)
}

const SCHOLARLY_DIRS = [
  { dir: "wiki/synthesis", priority: "1.0", changefreq: "monthly" },
  { dir: "wiki/metals", priority: "0.9", changefreq: "monthly" },
  { dir: "wiki/ingredients", priority: "0.9", changefreq: "monthly" },
  { dir: "wiki/regulations", priority: "0.9", changefreq: "monthly" },
  { dir: "wiki/products", priority: "0.8", changefreq: "monthly" },
  { dir: "wiki/sources", priority: "0.7", changefreq: "yearly" },
]

const SPECIAL = [
  { slug: "", priority: "1.0", changefreq: "weekly" }, // home
  { slug: "coverage", priority: "0.9", changefreq: "weekly" },
  { slug: "methodology", priority: "0.9", changefreq: "monthly" },
  { slug: "methodology/search-strategy", priority: "0.9", changefreq: "yearly" },
  { slug: "editorial-standards", priority: "0.9", changefreq: "yearly" },
  { slug: "licensing", priority: "0.9", changefreq: "yearly" },
  { slug: "errata", priority: "0.8", changefreq: "weekly" },
  { slug: "roadmap", priority: "0.8", changefreq: "monthly" },
  { slug: "curators", priority: "0.8", changefreq: "monthly" },
  { slug: "regulations/by-jurisdiction", priority: "0.9", changefreq: "weekly" },
  { slug: "regulations/timeline", priority: "0.9", changefreq: "weekly" },
]

const urls = []

// The main emitter owns publication and indexability policy. A raw Markdown
// scan cannot tell whether a draft, pending source, alias or gone route was
// published. Require both main-sitemap membership and indexable rendered HTML;
// never advertise a missing page, even if a stale main sitemap lists it.
const mainPaths = new Set(
  sitemapLocPaths(fs.readFileSync(path.join(publicDir, "sitemap.xml"), "utf8"))
    .map((entry) => entry.path),
)
const { indexable } = collectPublishedPages(publicDir, loadBlockedPublicPaths(repoRoot))
const eligible = (slug) => {
  const publicPath = publicPathForContentSlug(slug)
  return mainPaths.has(publicPath) && indexable.has(publicPath)
}

for (const { slug, priority, changefreq } of SPECIAL) {
  if (!eligible(slug)) continue
  const candidates = [path.join(repoRoot, "wiki", `${slug || "index"}.md`), path.join(repoRoot, "wiki", slug, "index.md")]
  const file = candidates.find((candidate) => fs.existsSync(candidate))
  const page = file ? matter(fs.readFileSync(file, "utf8")) : { data: { title: slug || "Home" }, content: "" }
  if (isNoindex(page.data.noindex) || isLowValuePage(page.data, slug, { body: page.content })) continue
  urls.push({ loc: `https://heavymetalindex.com/${slug}`, lastmod: today(), priority, changefreq })
}

for (const { dir, priority, changefreq } of SCHOLARLY_DIRS) {
  const absDir = path.join(repoRoot, dir)
  if (!fs.existsSync(absDir)) continue
  for (const file of fs.readdirSync(absDir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md" || file.startsWith("_")) continue
    const slug = file.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(absDir, file), "utf8")
    const parsed = matter(raw)
    const fm = parsed.data
    const category = dir.replace(/^wiki\//, "")
    if (!eligible(`${category}/${slug}`)) continue
    if (isNoindex(fm.noindex) || isLowValuePage(fm, `${category}/${slug}`, { body: parsed.content })) continue
    if (fm.auto_generated === true) continue
    const updated = isoDate(fm.updated) || today()
    urls.push({
      loc: `https://heavymetalindex.com/${category}/${slug}`,
      lastmod: updated,
      priority,
      changefreq,
    })
  }
}

const xml = renderSitemap(urls)
fs.writeFileSync(outputPath, xml, "utf8")
console.log(`postbuild-scholarly-sitemap: wrote ${urls.length} URLs → ${path.relative(repoRoot, outputPath)}`)

function renderSitemap(urls) {
  const body = urls
    .map((u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`)
    .join("\n")
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`
}

function isoDate(value) {
  if (!value) return null
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  const s = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10)
  return null
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
