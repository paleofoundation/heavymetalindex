#!/usr/bin/env node
// Postbuild: inject BreadcrumbList JSON-LD into every built reference page.
//
// The site already renders a visible breadcrumb (Home > Metals > Cadmium) and
// emits ScholarlyArticle/Dataset/Organization JSON-LD (postbuild-inject-jsonld
// .mjs), but it carried no BreadcrumbList. BreadcrumbList is what Google uses
// for breadcrumb rich results and what AI answer engines read to understand a
// page's place in the corpus hierarchy — a cheap, low-risk citability win.
//
// Idempotent: skips pages that already contain a BreadcrumbList and skips
// alias-redirect stubs and the 404 page. Run after the main JSON-LD injector
// in the `postbuild` npm script.

import { readFileSync, writeFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

const PUBLIC = "public"
const BASE = "https://heavymetalindex.com"

// Folder segments where simple title-casing reads wrong.
const LABELS = {
  metals: "Metals",
  ingredients: "Ingredients",
  products: "Products",
  regulations: "Regulations",
  synthesis: "Synthesis",
  sources: "Sources",
  mitigation: "Mitigation",
  "supply-chain": "Supply chain",
  testing: "Testing",
  microbiome: "Microbiome",
  methodology: "Methodology",
  coverage: "Coverage",
  audits: "Audits",
  studies: "Studies",
  advisory: "Advisory",
  health: "Health",
  corpus: "Corpus",
}

function labelFor(seg) {
  return LABELS[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

function unescapeHtml(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/gi, "'")
}

const files = readdirSync(PUBLIC, { recursive: true }).filter(
  (f) => typeof f === "string" && f.endsWith(".html"),
)

let injected = 0
let skipped = 0

for (const rel of files) {
  const abs = join(PUBLIC, rel)
  let html = readFileSync(abs, "utf8")

  if (/^\s*google-site-verification:\s*google[a-f0-9]+\.html\s*$/i.test(html)) {
    skipped++
    continue
  }
  if (html.includes('"BreadcrumbList"')) {
    skipped++
    continue
  }
  if (/http-equiv=["']refresh["']/i.test(html)) {
    skipped++ // alias-redirect stub
    continue
  }

  const slugPath = rel
    .replace(/\\/g, "/")
    .replace(/index\.html$/, "")
    .replace(/\.html$/, "")
    .replace(/\/$/, "")

  if (!slugPath || slugPath === "404") {
    skipped++
    continue
  }

  const segs = slugPath.split("/")
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i)
  const pageTitle = titleMatch ? unescapeHtml(titleMatch[1].trim()) : labelFor(segs[segs.length - 1])

  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` }]
  let acc = ""
  segs.forEach((seg, i) => {
    acc += `/${seg}`
    const isLast = i === segs.length - 1
    items.push({
      "@type": "ListItem",
      position: i + 2,
      name: isLast ? pageTitle : labelFor(seg),
      item: `${BASE}${acc}`,
    })
  })

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  }
  const tag = `<script type="application/ld+json">${JSON.stringify(ld)}</script>`

  html = html.includes("</head>") ? html.replace("</head>", `${tag}</head>`) : html + tag
  writeFileSync(abs, html)
  injected++
}

console.log(`breadcrumbs: injected ${injected}, skipped ${skipped}`)
