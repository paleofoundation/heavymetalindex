#!/usr/bin/env node
// Post-build pass: inject JSON-LD schema.org markup into every public-facing
// HTML page so Google Scholar, scholarly indexers, and AI crawlers can index
// the Heavy Metal Index pages as citable scholarly outputs.
//
// Page-type mapping:
//   wiki/sources/*       → ScholarlyArticle (the underlying paper, with the
//                          Index page as the canonical reference about it)
//   wiki/ingredients/*   → DataCatalog / Dataset (contamination_profile is
//                          structured data; ScholarlyArticle envelope describes
//                          the curated reference page that wraps it)
//   wiki/products/*      → ScholarlyArticle (curated reference)
//   wiki/metals/*        → ScholarlyArticle (curated reference)
//   wiki/regulations/*   → ScholarlyArticle (curated reference; the
//                          Government Regulation it documents is mentioned in
//                          `about`)
//   wiki/synthesis/*     → ScholarlyArticle (analytic synthesis claim)
//
// All injected JSON-LD declares the Paleo Foundation as `publisher`, the
// Heavy Metal Index as `isPartOf`, and a `creator` Organization. The
// `identifier` field is populated from `wiki_doi:` when present; absent that,
// the canonical URL is the identifier. This is the field path downstream
// citers will follow when DataCite minting comes online.
//
// Runs after `quartz build` so the HTML output already exists. Inserts the
// `<script type="application/ld+json">` block into <head> on each matching
// HTML file. Idempotent — re-running on the same output is a no-op (the
// block is marker-bounded with HMI-JSONLD-START / HMI-JSONLD-END).

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const publicDir = path.join(repoRoot, "public")
const wikiDir = path.join(repoRoot, "wiki")

const PUBLISHER = {
  "@type": "Organization",
  name: "Paleo Foundation",
  url: "https://paleofoundation.com",
}
const REFERENCE_WORK = {
  "@type": "WebSite",
  name: "Heavy Metal Index",
  url: "https://heavymetalindex.com",
}

const TYPE_MAP = {
  sources: { type: "ScholarlyArticle", section: "Source archive" },
  ingredients: { type: "ScholarlyArticle", section: "Ingredient profile" },
  products: { type: "ScholarlyArticle", section: "Product-category profile" },
  metals: { type: "ScholarlyArticle", section: "Metal profile" },
  regulations: { type: "ScholarlyArticle", section: "Regulation reference" },
  synthesis: { type: "ScholarlyArticle", section: "Synthesis" },
}

if (!fs.existsSync(publicDir)) {
  console.log("postbuild-inject-jsonld: public/ not present yet (skipping; ran before quartz build)")
  process.exit(0)
}

let injected = 0
let alreadyHasBlock = 0
let skippedNoHtml = 0

for (const [category, meta] of Object.entries(TYPE_MAP)) {
  const wikiCatDir = path.join(wikiDir, category)
  if (!fs.existsSync(wikiCatDir)) continue
  for (const file of fs.readdirSync(wikiCatDir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md" || file.startsWith("_")) continue
    const slug = file.replace(/\.md$/, "")
    const mdPath = path.join(wikiCatDir, file)
    const raw = fs.readFileSync(mdPath, "utf8")
    const fm = matter(raw).data

    // Skip auto-generated cross-cut pages (regulations/by-jurisdiction, etc.)
    if (fm.auto_generated === true) continue

    const htmlPath = findHtmlOutput(category, slug)
    if (!htmlPath) { skippedNoHtml += 1; continue }

    let html = fs.readFileSync(htmlPath, "utf8")
    if (html.includes("HMI-JSONLD-START")) { alreadyHasBlock += 1; continue }

    const ld = buildJsonLd(category, slug, fm, meta)
    const block = `<!-- HMI-JSONLD-START -->\n<script type="application/ld+json">${JSON.stringify(ld)}</script>\n<!-- HMI-JSONLD-END -->`

    // Inject just before </head>; if no <head>, before </body>; else append.
    let next
    if (html.includes("</head>")) {
      next = html.replace("</head>", `${block}\n</head>`)
    } else if (html.includes("</body>")) {
      next = html.replace("</body>", `${block}\n</body>`)
    } else {
      next = html + `\n${block}\n`
    }
    fs.writeFileSync(htmlPath, next, "utf8")
    injected += 1
  }
}

console.log(`postbuild-inject-jsonld:`)
console.log(`  injected:        ${injected}`)
console.log(`  already-present: ${alreadyHasBlock}`)
console.log(`  no-html-output:  ${skippedNoHtml}`)

function findHtmlOutput(category, slug) {
  // Quartz emits either public/<category>/<slug>.html or public/<category>/<slug>/index.html
  // depending on its configuration; check both.
  const candidates = [
    path.join(publicDir, category, `${slug}.html`),
    path.join(publicDir, category, slug, "index.html"),
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

function buildJsonLd(category, slug, fm, meta) {
  const url = `https://heavymetalindex.com/${category}/${slug}`
  const identifier = fm.wiki_doi || url

  const ld = {
    "@context": "https://schema.org",
    "@type": meta.type,
    headline: fm.title || slug,
    name: fm.title || slug,
    url,
    identifier,
    isPartOf: REFERENCE_WORK,
    publisher: PUBLISHER,
    creator: PUBLISHER,
    inLanguage: "en",
    license: "https://heavymetalindex.com/licensing",
  }

  if (fm.updated) ld.dateModified = toIso(fm.updated)
  if (fm.description) ld.description = String(fm.description).slice(0, 500)

  // Source pages: the wiki page describes the underlying paper, so populate
  // `about` with the paper's bibliographic metadata when available.
  if (category === "sources") {
    const about = {
      "@type": "ScholarlyArticle",
      name: fm.title || slug,
    }
    if (fm.authors && Array.isArray(fm.authors)) {
      about.author = fm.authors.map((a) => ({ "@type": "Person", name: String(a) }))
    }
    if (fm.year) about.datePublished = String(fm.year)
    if (fm.publication) about.isPartOf = { "@type": "Periodical", name: String(fm.publication) }
    if (fm.doi) about.identifier = `https://doi.org/${fm.doi}`
    if (fm.access_url) about.url = String(fm.access_url)
    ld.about = about
  }

  // Ingredient pages: describe the contamination dataset as a `mainEntity` so
  // crawlers know the page wraps structured data.
  if (category === "ingredients" && fm.contamination_profile) {
    ld.mainEntity = {
      "@type": "Dataset",
      name: `Heavy metal contamination profile for ${fm.title || slug}`,
      description: `Per-analyte typical and 95th-percentile concentration ranges for the HMTc-10 metals, derived from the contributing source corpus.`,
      distribution: {
        "@type": "DataDownload",
        contentUrl: `https://heavymetalindex.com/api/contamination?ingredient=${slug}`,
        encodingFormat: "application/json",
      },
      license: "https://heavymetalindex.com/licensing",
      publisher: PUBLISHER,
    }
  }

  // Regulation pages: name the regulatory action as `about`.
  if (category === "regulations") {
    ld.about = {
      "@type": "Legislation",
      name: fm.title || slug,
      legislationJurisdiction: fm.jurisdiction || fm.jurisdictions || undefined,
      legislationDate: fm.effective_date ? toIso(fm.effective_date) : undefined,
      legislationResponsible: fm.agency || fm.authority || undefined,
    }
  }

  return ld
}

function toIso(value) {
  if (!value) return undefined
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  const s = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10)
  const parsed = new Date(s)
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10)
  return undefined
}
