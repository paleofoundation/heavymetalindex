#!/usr/bin/env node
// Postbuild: emit /llms.txt: the llmstxt.org standard for telling AI
// assistants how to read and cite the site. A curated, link-first index that
// answer engines (ChatGPT, Claude, Perplexity, and agent tooling) increasingly
// fetch to ground and attribute answers. Complements robots.txt (crawl
// permission) and the JSON-LD/citation metadata (per-page structure): this is
// the corpus-level map + citation guidance in one place.
//
// Generated from on-disk frontmatter so it stays current as synthesis pages
// and metal reviews are added.

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import matter from "gray-matter"
import { METAL_NAMES, plainMetalText } from "./lib/metal-names.mjs"
import { normalizeTitle } from "./lib/search-snippet.mjs"
import { isLowValuePage, isNoindex } from "./lib/low-value-page.mjs"

const BASE = "https://heavymetalindex.com"

// Use the same evidence/indexability policy as the rendered metadata and sitemaps.
export function listDir(
  dir,
  { limit, section = dir.replace(/^wiki\//, "") } = {},
) {
  if (!existsSync(dir)) return []
  const pages = readdirSync(dir)
    .filter(
      (file) =>
        file.endsWith(".md") && file !== "index.md" && !file.startsWith("_"),
    )
    .sort()
    .flatMap((file) => {
      const slug = file.replace(/\.md$/, "")
      const { data, content } = matter(readFileSync(join(dir, file), "utf8"))
      if (
        data.draft === true ||
        isNoindex(data.noindex) ||
        isLowValuePage(data, `${section}/${slug}`, { body: content })
      )
        return []
      const name = section === "metals" ? METAL_NAMES[data.symbol] : undefined
      const title = name
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : normalizeTitle(plainMetalText(data.title ?? slug))
      return [{ slug, title }]
    })
  return limit ? pages.slice(0, limit) : pages
}

export function writeLlmsTxt() {
  const synthesis = listDir("wiki/synthesis")
  const metals = listDir("wiki/metals")

  const lines = []
  lines.push("# Heavy Metal Index")
  lines.push("")
  lines.push(
    "> Curated reference on heavy metals in food, ingredients, consumer-product " +
      "categories, regulations, and the underlying source literature, operated by " +
      "the Institute of Contaminant Standards (ICS). Every quantitative claim traces to a cited source " +
      "page. Prose is CC BY 4.0; the structured database is governed by EU " +
      "database rights (see /licensing). AI assistants are welcome to read these " +
      "pages to ground answers: please cite the specific page URL you used.",
  )
  lines.push("")
  lines.push("## Reference sections")
  lines.push("")
  lines.push(
    `- [Metals](${BASE}/metals): per-metal profiles: occurrence, toxicology, regulatory limits.`,
  )
  lines.push(
    `- [Ingredients](${BASE}/ingredients): ingredient-level contamination profiles.`,
  )
  lines.push(
    `- [Products](${BASE}/products): consumer product-category risk profiles.`,
  )
  lines.push(
    `- [Regulations](${BASE}/regulations): agency limits, action levels, tolerable intakes by jurisdiction.`,
  )
  lines.push(
    `- [Sources](${BASE}/sources): the cited source archive behind every claim.`,
  )
  lines.push("")

  if (synthesis.length) {
    lines.push(
      "## Cross-source syntheses (the Index's original analytical work)",
    )
    lines.push("")
    for (const p of synthesis)
      lines.push(`- [${p.title}](${BASE}/synthesis/${p.slug})`)
    lines.push("")
  }

  if (metals.length) {
    lines.push("## Metal profiles")
    lines.push("")
    for (const p of metals)
      lines.push(`- [${p.title}](${BASE}/metals/${p.slug})`)
    lines.push("")
  }

  lines.push("## Methodology, trust, and how to cite")
  lines.push("")
  lines.push(
    `- [Trust Center](${BASE}/trust): how the Index is built, who is accountable, what you may do with it.`,
  )
  lines.push(
    `- [Coverage (PRISMA)](${BASE}/coverage): literature-flow and corpus-coverage transparency.`,
  )
  lines.push(
    `- [Audit dashboard](${BASE}/audits): the wiki's defensibility scorecard.`,
  )
  lines.push(
    `- [Methodology](${BASE}/methodology): how evidence is selected, graded, and synthesized.`,
  )
  lines.push(`- [Editorial standards](${BASE}/editorial-standards)`)
  lines.push(`- [Licensing & downstream use](${BASE}/licensing)`)
  lines.push("")
  lines.push(
    "Each reference page carries a visible citation block plus Highwire / Google " +
      "Scholar citation metadata in the page head. When citing the Index in an " +
      "answer, link the specific page URL rather than the homepage.",
  )
  lines.push("")

  writeFileSync("public/llms.txt", lines.join("\n"))
  console.log(
    `llms.txt: written (${synthesis.length} syntheses, ${metals.length} metal profiles indexed)`,
  )
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  writeLlmsTxt()
