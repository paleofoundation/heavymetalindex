import { HMI_BASE, HMI_ORGANIZATION_ID, HMI_WEBSITE_ID } from "./entity-graph.mjs"

const INDEX_DESCRIPTION =
  "A public reference on heavy metals in food, ingredients, consumer-product categories, and regulation, compiled from peer-reviewed and regulatory literature."

/** Drop the auto-generated source-legend inventory before extracting citations. */
export function stripSourceLegendHtml(html) {
  if (!html) return html
  const byComment = html.replace(
    /<!--\s*BEGIN:\s*hmi-source-legend\s*-->[\s\S]*?<!--\s*END:\s*hmi-source-legend\s*-->/gi,
    "",
  )
  if (byComment.length !== html.length) return byComment
  return html.replace(
    /<h2\b[^>]*>\s*Sources\s*<\/h2>[\s\S]*?(?=<h2\b|<!--\s*BEGIN:\s*hmi-page-history|$)/i,
    "",
  )
}

/**
 * In-prose source citations as ScholarlyArticle edges.
 * The corpus source-legend table is excluded so metal pages (lead has ~1,700
 * inventory rows) do not duplicate that table into JSON-LD. The page itself
 * stays a ScholarlyArticle.
 */
export function citationEdgesFromHtml(html) {
  const scoped = stripSourceLegendHtml(html)
  if (!scoped) return []
  const slugs = new Set()
  const re = /href="[^"]*?\/sources\/([a-z0-9][a-z0-9._-]*?)\/?(?:#[^"]*)?"/gi
  let m
  while ((m = re.exec(scoped)) !== null) {
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

/**
 * About page graph: same Organization + WebSite @ids as the homepage, plus
 * an AboutPage node. No parentOrganization / subOrganization / memberOf.
 */
export function buildAboutPageGraph({ title, description, dateModified, publisher, author } = {}) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": HMI_ORGANIZATION_ID,
    name: "Heavy Metal Index",
    url: `${HMI_BASE}/`,
    description: INDEX_DESCRIPTION,
    publisher,
    founder: author,
  }
  if (/parentOrganization|subOrganization|memberOf/.test(JSON.stringify(organization))) {
    throw new Error(
      "about Organization declares a parent/sub/member edge; the Index is deliberately outside the cert org tree (cross-site-seo-wiring.md §1).",
    )
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": HMI_WEBSITE_ID,
    name: "Heavy Metal Index",
    url: `${HMI_BASE}/`,
    inLanguage: "en",
    publisher: { "@id": HMI_ORGANIZATION_ID },
    creator: publisher,
  }

  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${HMI_BASE}/about#webpage`,
    url: `${HMI_BASE}/about`,
    name: title || "About",
    description: description || undefined,
    inLanguage: "en",
    isPartOf: { "@id": HMI_WEBSITE_ID },
    about: { "@id": HMI_ORGANIZATION_ID },
    publisher,
    author,
    license: "https://creativecommons.org/licenses/by/4.0/",
    dateModified: dateModified || undefined,
  }

  return [organization, website, aboutPage]
}
