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
//   wiki/reports/*       → Report (cross-corpus published report)
//
// All injected JSON-LD declares the Institute of Contaminant Standards as `publisher`, the
// Heavy Metal Index as `isPartOf`, and a `creator` Organization. The
// `identifier` field is populated from `wiki_doi:` when present; absent that,
// the canonical URL is the identifier. This is the field path downstream
// citers will follow when DataCite minting comes online.
//
// Runs after `quartz build` so the HTML output already exists. Inserts the
// `<script type="application/ld+json">` block into <head> on each matching
// HTML file. Idempotent — re-running on the same output is a no-op (the
// block is marker-bounded with HMI-JSONLD-START / HMI-JSONLD-END).

import { foodStructuredFields } from "./lib/food-search-metadata.mjs"
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { answerTripsFirewall } from "./lib/faq-firewall-guard.mjs"
import {
  HMI_BASE,
  HMI_ORGANIZATION_ID,
  HMI_WEBSITE_ID,
  karenEntity,
  organizationEntity,
} from "./lib/entity-graph.mjs"
import { capHtmlTitle, extractOverview, metalSearchFields } from "./lib/search-snippet.mjs"
import { isLowValuePage, isNoindex } from "./lib/low-value-page.mjs"
import { heroImageObject } from "./lib/hero-images.mjs"

const repoRoot = process.cwd()
const FAQ_CATEGORIES = new Set(["metals", "ingredients", "products", "regulations", "index"]) // reader pages + the homepage
const publicDir = path.join(repoRoot, "public")
const wikiDir = path.join(repoRoot, "wiki")

// Canonical external-entity links for metal pages (sameAs). Wikidata QIDs and
// PubChem CIDs for the substance, so the scholarly/knowledge graph can resolve
// "the metal this page is about" to the canonical entity. Keyed by the metal
// page slug. Element-symbol pages only — this is the substance entity, NOT any
// HMTc analyte/species choice (which is policy and stays off the index).
const METAL_ENTITY_LINKS = {
  lead: ["https://www.wikidata.org/wiki/Q708", "https://pubchem.ncbi.nlm.nih.gov/element/82"],
  cadmium: ["https://www.wikidata.org/wiki/Q1096", "https://pubchem.ncbi.nlm.nih.gov/element/48"],
  arsenic: ["https://www.wikidata.org/wiki/Q871", "https://pubchem.ncbi.nlm.nih.gov/element/33"],
  mercury: ["https://www.wikidata.org/wiki/Q925", "https://pubchem.ncbi.nlm.nih.gov/element/80"],
  nickel: ["https://www.wikidata.org/wiki/Q1085", "https://pubchem.ncbi.nlm.nih.gov/element/28"],
  aluminum: ["https://www.wikidata.org/wiki/Q663", "https://pubchem.ncbi.nlm.nih.gov/element/13"],
  aluminium: ["https://www.wikidata.org/wiki/Q663", "https://pubchem.ncbi.nlm.nih.gov/element/13"],
  chromium: ["https://www.wikidata.org/wiki/Q725", "https://pubchem.ncbi.nlm.nih.gov/element/24"],
  tin: ["https://www.wikidata.org/wiki/Q1096901", "https://pubchem.ncbi.nlm.nih.gov/element/50"],
  antimony: ["https://www.wikidata.org/wiki/Q1099", "https://pubchem.ncbi.nlm.nih.gov/element/51"],
  uranium: ["https://www.wikidata.org/wiki/Q1098", "https://pubchem.ncbi.nlm.nih.gov/element/92"],
}

// Research Organization Registry ID for the Institute of Contaminant Standards.
// Empty until assigned; set HMI_ORG_ROR="https://ror.org/<id>" (the same env var
// tools/mint-dois.mjs reads) and the publisher/affiliation gain their ROR node
// across every injected page. No-op until then.
const ORG_ROR = process.env.HMI_ORG_ROR || ""
const PUBLISHER = organizationEntity(ORG_ROR)
// Named, ORCID-identified author of the Index's own content — the human
// accountability signal Google E-E-A-T and the scholarly graph reward.
const AUTHOR = karenEntity(ORG_ROR)
const REFERENCE_WORK = {
  "@type": "WebSite",
  "@id": HMI_WEBSITE_ID,
  name: "Heavy Metal Index",
  url: HMI_BASE,
}

// CC BY 4.0 is the license for the Index's own content and data (see PR #120:
// LICENSE + LICENSE-CONTENT.md). Expose the canonical CC BY 4.0 deed URL so
// crawlers, DataCite, and LLMs recognize the actual license, not just a link
// to our human-readable licensing page.
const LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/"
// Machine-readable license signals injected into <head> alongside the JSON-LD,
// for crawlers that read <link>/<meta> rather than JSON-LD (Google Scholar,
// Dublin Core consumers, etc.).
const LICENSE_HEAD_TAGS =
  `<link rel="license" href="${LICENSE_URL}" />\n` +
  `<meta name="DC.rights" content="CC BY 4.0" />`

// A page may reserve all rights via a frontmatter `license` (HMI authored
// papers). Those pages get an all-rights DC.rights signal and no CC-BY deed link,
// so the machine metadata does not contradict the page's own licence chrome.
// Every other page keeps the default CC BY signals unchanged.
const isAllRightsLicense = (fm) => !!(fm && fm.license) && /©|all rights reserved/i.test(String(fm.license))
const licenseHeadTags = (fm) =>
  isAllRightsLicense(fm)
    ? `<meta name="DC.rights" content="${String(fm.license).replace(/"/g, "&quot;")}" />`
    : LICENSE_HEAD_TAGS
const licenseValue = (fm) => (isAllRightsLicense(fm) ? String(fm.license) : LICENSE_URL)

const TYPE_MAP = {
  sources: { type: "ScholarlyArticle", section: "Source archive" },
  ingredients: { type: "ScholarlyArticle", section: "Ingredient profile" },
  products: { type: "ScholarlyArticle", section: "Product-category profile" },
  metals: { type: "ScholarlyArticle", section: "Metal profile" },
  regulations: { type: "ScholarlyArticle", section: "Regulation reference" },
  regulators: { type: "GovernmentOrganization", section: "Regulatory body profile" },
  synthesis: { type: "ScholarlyArticle", section: "Synthesis" },
  reports: { type: "Report", section: "Published report" },
}

if (!fs.existsSync(publicDir)) {
  console.log("postbuild-inject-jsonld: public/ not present yet (skipping; ran before quartz build)")
  process.exit(0)
}

let injected = 0
let alreadyHasBlock = 0
let skippedNoHtml = 0
let skippedLowValue = 0

// The homepage: the category loop skips index.md, so the site's most-linked
// page had no structured data. Organization declares NO parentOrganization /
// subOrganization / memberOf — the Index sits outside the certification org
// tree on purpose (docs/architecture/cross-site-seo-wiring.md §1); a runtime
// assertion enforces that so a later edit can't quietly wire it in.
function injectHomepage() {
  const htmlPath = path.join(publicDir, "index.html")
  if (!fs.existsSync(htmlPath)) return "no index.html"
  let html = fs.readFileSync(htmlPath, "utf8")
  if (html.includes("HMI-JSONLD-START")) return "already present"

  const fm = matter(fs.readFileSync(path.join(wikiDir, "index.md"), "utf8")).data
  const SITE = HMI_BASE
  const orgId = HMI_ORGANIZATION_ID
  const siteId = HMI_WEBSITE_ID

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: "Heavy Metal Index",
    url: `${SITE}/`,
    description:
      "A public reference on heavy metals in food, ingredients, consumer-product categories, and regulation, compiled from peer-reviewed and regulatory literature.",
    publisher: PUBLISHER,
    founder: AUTHOR,
  }
  if (/parentOrganization|subOrganization|memberOf/.test(JSON.stringify(organization))) {
    console.error("postbuild-inject-jsonld: homepage Organization declares a parent/sub/member edge; the Index is deliberately outside the cert org tree (cross-site-seo-wiring.md §1).")
    process.exit(1)
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteId,
    name: "Heavy Metal Index",
    url: `${SITE}/`,
    inLanguage: "en",
    publisher: { "@id": orgId },
    creator: PUBLISHER,
  }

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/#webpage`,
    url: `${SITE}/`,
    name: fm.title ?? "Heavy Metal Index",
    description: fm.description ?? undefined,
    isPartOf: { "@id": siteId },
    publisher: PUBLISHER,
    license: licenseValue(fm),
    dateModified: fm.updated ? String(fm.updated) : undefined,
    hasPart: [
      { "@type": "CollectionPage", name: "Metals", url: `${SITE}/metals` },
      { "@type": "CollectionPage", name: "Ingredients", url: `${SITE}/ingredients` },
      { "@type": "CollectionPage", name: "Products", url: `${SITE}/products` },
      { "@type": "CollectionPage", name: "Regulations", url: `${SITE}/regulations` },
      { "@type": "CollectionPage", name: "Sources", url: `${SITE}/sources` },
    ],
  }

  const objects = [organization, website, collection]
  const faq = buildFaqPage("index", "", html, `${SITE}/`)
  if (faq) objects.push(faq)

  const block =
    `<!-- HMI-JSONLD-START -->\n` +
    `${licenseHeadTags(fm)}\n` +
    objects.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n") +
    `\n<!-- HMI-JSONLD-END -->`
  const next = html.includes("</head>") ? html.replace("</head>", `${block}\n</head>`) : `${html}\n${block}`
  fs.writeFileSync(htmlPath, next, "utf8")
  return `${objects.length} object(s)${faq ? " incl. FAQPage" : ""}`
}
const homepageResult = injectHomepage()

for (const [category, meta] of Object.entries(TYPE_MAP)) {
  const wikiCatDir = path.join(wikiDir, category)
  if (!fs.existsSync(wikiCatDir)) continue
  for (const file of fs.readdirSync(wikiCatDir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md" || file.startsWith("_")) continue
    const slug = file.replace(/\.md$/, "")
    const mdPath = path.join(wikiCatDir, file)
    const raw = fs.readFileSync(mdPath, "utf8")
    const parsed = matter(raw)
    const fm = parsed.data

    if (meta.type === "ScholarlyArticle" &&
      (isNoindex(fm.noindex) || isLowValuePage(fm, `${category}/${slug}`, { body: parsed.content }))) {
      skippedLowValue += 1
      continue
    }

    // Skip auto-generated cross-cut pages (regulations/by-jurisdiction, etc.)
    if (fm.auto_generated === true) continue

    const htmlPath = findHtmlOutput(category, slug)
    if (!htmlPath) { skippedNoHtml += 1; continue }

    let html = fs.readFileSync(htmlPath, "utf8")
    if (html.includes("HMI-JSONLD-START")) { alreadyHasBlock += 1; continue }

    const ld = buildJsonLd(category, slug, fm, meta, html, parsed.content)

    // The page-level JSON-LD plus, when the rendered page carries a
    // Key-questions accordion, a sibling FAQPage object. Each is emitted as its
    // own <script> so a single malformed object can never void the others.
    const ldObjects = [ld]
    const faq = buildFaqPage(category, slug, html)
    if (faq) ldObjects.push(faq)

    const block =
      `<!-- HMI-JSONLD-START -->\n` +
      `${licenseHeadTags(fm)}\n` +
      ldObjects
        .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
        .join("\n") +
      `\n<!-- HMI-JSONLD-END -->`

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
console.log(`  noindex/low-value: ${skippedLowValue}`)
console.log(`  homepage:        ${homepageResult}`)

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

function buildJsonLd(category, slug, fm, meta, html, body = "") {
  const url = `https://heavymetalindex.com/${category}/${slug}`
  const identifier = fm.wiki_doi || url
  const metalFields = category === "metals"
    ? metalSearchFields({
        title: fm.title,
        symbol: fm.symbol,
        name: fm.name,
        overview: extractOverview(body),
        searchTitle: fm.search_title,
        searchDescription: fm.search_description,
      })
    : null
  const foodPage = ["ingredients", "products"].includes(category)
  const foodFields = foodPage ? foodStructuredFields(html) : null
  const headline = foodFields?.title || metalFields?.title || capHtmlTitle(fm.title || slug)

  const ld = {
    "@context": "https://schema.org",
    "@type": meta.type,
    headline,
    name: headline,
    url,
    identifier,
    isPartOf: REFERENCE_WORK,
    publisher: PUBLISHER,
    creator: PUBLISHER,
    inLanguage: "en",
    license: licenseValue(fm),
  }

  // The Index's own analytical/reference pages are authored (and editorially
  // owned) by the named author; source pages describe an external paper, so
  // their author belongs in `about`, not at the page level.
  if (category !== "sources") ld.author = AUTHOR

  const image = heroImageObject(fm.hero_image)
  if (image) {
    ld.image = { "@id": image["@id"] }
    ld.mainEntityOfPage = url
  }

  if (fm.updated) ld.dateModified = toIso(fm.updated)
  if (fm.published) ld.datePublished = toIso(fm.published)
  if (foodFields) ld.description = foodFields.description
  else if (metalFields?.description) ld.description = metalFields.description
  else if (fm.description) ld.description = String(fm.description).slice(0, 500)

  // Reports are citable CreativeWork entities in their own right. Expose the
  // reproducible data products from the same canonical report identifier so
  // crawlers do not have to infer the relationship from body links alone.
  if (category === "reports") {
    ld.mainEntityOfPage = url
    ld.genre = "Research report"
    ld.distribution = [
      {
        "@type": "DataDownload",
        name: `${fm.title || slug} — machine-readable JSON`,
        encodingFormat: "application/json",
        contentUrl: `${HMI_BASE}/static/data/${slug}.json`,
      },
      {
        "@type": "DataDownload",
        name: `${fm.title || slug} — finding register CSV`,
        encodingFormat: "text/csv",
        contentUrl: `${HMI_BASE}/static/data/${slug}.csv`,
      },
    ]
  }

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
      license: licenseValue(fm),
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

  // Regulator (body) pages: the page is the canonical node for a government
  // body. @type is GovernmentOrganization (from TYPE_MAP); link out to the
  // body's official site + Wikidata via sameAs, and declare its jurisdiction.
  if (category === "regulators") {
    delete ld.headline
    if (fm.abbreviation) ld.alternateName = String(fm.abbreviation)
    const sa = []
    if (fm.homepage) sa.push(String(fm.homepage))
    if (Array.isArray(fm.sameAs)) sa.push(...fm.sameAs.map(String))
    if (sa.length) ld.sameAs = [...new Set(sa)]
    if (fm.jurisdiction) ld.areaServed = Array.isArray(fm.jurisdiction) ? fm.jurisdiction.join(", ") : String(fm.jurisdiction)
  }

  // Metal pages: sameAs entity links (Wikidata / PubChem) so the substance
  // resolves to its canonical knowledge-graph node, plus `citation` edges to
  // every source page this metal page cites. The latter turns the page into a
  // first-class node in the scholarly graph: each cited source is a
  // ScholarlyArticle whose @id is its index URL (the canonical page about that
  // paper). Both are derived, not hand-maintained.
  if (category === "metals") {
    const entities = METAL_ENTITY_LINKS[slug]
    if (entities && entities.length) ld.sameAs = entities

    const citations = citationEdgesFromHtml(html)
    if (citations.length) ld.citation = citations
  }

  return ld
}

// Pull the set of source pages a rendered page links to, and express each as a
// ScholarlyArticle citation edge keyed by its canonical index URL. We read the
// rendered HTML (not the markdown) so this counts what actually shipped, and we
// resolve hrefs whether Quartz emitted /sources/<slug> or /sources/<slug>/.
function citationEdgesFromHtml(html) {
  if (!html) return []
  const slugs = new Set()
  // Match anchors into the sources space: href="…/sources/<slug>" with an
  // optional trailing slash and optional #fragment. Tolerant of relative
  // (../sources/x) and absolute (/sources/x) hrefs.
  const re = /href="[^"]*?\/sources\/([a-z0-9][a-z0-9._-]*?)\/?(?:#[^"]*)?"/gi
  let m
  while ((m = re.exec(html)) !== null) {
    const s = m[1]
    if (!s || s === "index") continue
    slugs.add(s)
  }
  return [...slugs].sort().map((s) => ({
    "@type": "ScholarlyArticle",
    "@id": `https://heavymetalindex.com/sources/${s}`,
    url: `https://heavymetalindex.com/sources/${s}`,
  }))
}

// Build an FAQPage object from the rendered Key-questions accordion. The
// acceptedAnswer is the VISIBLE verbatim text (the <p> inside the answer div),
// so the structured answer is exactly what a human reads — never a separate
// summary that could drift from, or over-claim beyond, the page. Each candidate
// answer is re-checked against the SAME firewall guard the generator used, so a
// derived HMTc value / P-value can never reach the structured layer even if a
// stale block predates the generator's guard. Firewall-tripping items are
// dropped (Part 2: skip honestly), not softened.
function buildFaqPage(category, slug, html, pageUrlOverride) {
  if (!FAQ_CATEGORIES.has(category)) return null
  if (!html || !html.includes('data-hmi-faq')) return null

  const pageUrl = pageUrlOverride ?? `https://heavymetalindex.com/${category}/${slug}`
  const items = extractAccordionItems(html)
  const mainEntity = []
  for (const it of items) {
    if (!it.question || !it.answer) continue
    // Defense in depth: re-apply the firewall guard to the question AND answer.
    if (answerTripsFirewall(it.answer) || answerTripsFirewall(it.question)) continue
    mainEntity.push({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
        url: it.anchor ? `${pageUrl}#${it.anchor}` : pageUrl,
      },
    })
  }
  if (mainEntity.length < 2) return null // not enough to be a useful FAQPage

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", name: "Heavy Metal Index", url: "https://heavymetalindex.com" },
    inLanguage: "en",
    mainEntity,
  }
}

// Parse <details class="hmi-faq-item" …> blocks out of rendered HTML.
// Reads data-question / data-anchor attributes (authored by the generator) and
// the visible answer text from the <p> inside .hmi-faq-answer. Decodes HTML
// entities and strips tags so the JSON text matches what the reader sees.
function extractAccordionItems(html) {
  const items = []
  const blockRe =
    /<details\b[^>]*\bdata-hmi-faq=[^>]*>([\s\S]*?)<\/details>/gi
  let bm
  while ((bm = blockRe.exec(html)) !== null) {
    const block = bm[0]
    const inner = bm[1]
    const question =
      attrOf(block, "data-question") ?? textOf(inner.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i)?.[1])
    const anchor = attrOf(block, "data-anchor")
    // Visible answer = first <p> inside the answer div (excludes the read-more).
    const answerScope = inner.match(/<div\b[^>]*data-hmi-faq-answer[^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? inner
    const firstP = answerScope.match(/<p\b(?![^>]*hmi-faq-readmore)[^>]*>([\s\S]*?)<\/p>/i)?.[1]
    const answer = textOf(firstP)
    items.push({ question, anchor, answer })
  }
  return items
}

function attrOf(html, attr) {
  const m = html.match(new RegExp(`${attr}="([^"]*)"`, "i"))
  return m ? decodeEntities(m[1]) : undefined
}
function textOf(htmlFragment) {
  if (!htmlFragment) return undefined
  const stripped = htmlFragment.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  return stripped ? decodeEntities(stripped) : undefined
}
function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
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
