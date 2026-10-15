import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot, simplifySlug } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
import { hasScholarlyPdf } from "./scholarlyPdf"
import { capHtmlTitle, citationDoi, isMetalArticle, isRegulationArticle, metalSearchFields, normalizeTitle } from "../../tools/lib/search-snippet.mjs"
import { foodSearchTitle } from "../util/foodSearchTitle"
import { plainMetalText } from "../../tools/lib/metal-names.mjs"
import { buildMetaDescription, cleanDescription } from "../util/metaDescription"

function frontmatterString(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined
  const normalized = String(value).trim()
  return normalized.length > 0 ? normalized : undefined
}

function frontmatterStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => {
      const normalized = frontmatterString(item)
      return normalized ? [normalized] : []
    })
  }

  const normalized = frontmatterString(value)
  return normalized ? [normalized] : []
}

function frontmatterBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value
  if (typeof value === "string") return ["true", "yes", "1"].includes(value.trim().toLowerCase())
  return false
}

// og:type — "article" for substantive documents (metal/ingredient/regulation/
// synthesis/source reviews…) so social cards render as articles; "website" for
// the homepage and section/list landings (category-index, corpus-index, lint…).
// Driven by the `type` frontmatter, which nearly every wiki page carries, with a
// content-slug PREFIX fallback for the rare untyped page. The prefix (foo/ not
// foo) matches the individual page (`metals/lead`) but not the folder landing
// (`metals`), which should stay "website".
const OG_ARTICLE_TYPES = new Set([
  "source",
  "ingredient",
  "product-category",
  "regulation",
  "metal",
  "synthesis",
  "regulator",
  "supply-chain",
  "weekly-briefing",
  "mitigation",
  "methodology",
  "testing-method",
  "article",
  "review",
  "standard",
  "analyte",
])
const OG_ARTICLE_PREFIXES = [
  "metals/",
  "ingredients/",
  "regulations/",
  "synthesis/",
  "sources/",
  "analytes/",
  "mitigation/",
  "supply-chain/",
]
function isArticlePage(frontmatter: Record<string, unknown> | undefined, slug: string | undefined): boolean {
  if (slug === "index" || slug === "404" || slug === undefined) return false
  const fmType = frontmatterString(frontmatter?.type)?.toLowerCase()
  if (fmType) return OG_ARTICLE_TYPES.has(fmType)
  return OG_ARTICLE_PREFIXES.some((p) => slug.startsWith(p))
}

function CitationMetadata({
  frontmatter,
  slug,
  title,
  socialUrl,
  hasPdf,
}: {
  frontmatter: Record<string, unknown> | undefined
  slug: FullSlug | undefined
  title: string
  socialUrl: string
  hasPdf: boolean
}) {
  if (!frontmatter) return null
  const slugStr = (slug ?? "") as string

  // Folder-index pages (synthesis/index, metals/index, sources/index) are
  // navigation surfaces, not works. Suppress Highwire/Google Scholar citation
  // metadata for them so a contentless index — citation_title "Synthesis",
  // "Metals", "Sources" — never registers as a thin technical report under the
  // author's name and dilutes the citation graph. Mirrors the index guard the
  // OG article-type helper already applies above.
  const indexType = frontmatterString(frontmatter.type)?.toLowerCase()
  if (slugStr === "index" || slugStr.endsWith("/index") || (indexType?.endsWith("-index") ?? false)) {
    return null
  }

  // Source pages represent the underlying paper — emit its real bibliographic
  // record (author, journal, the paper's own DOI).
  const isSourcePage = frontmatter.type === "source" || slugStr.startsWith("sources/")
  if (isSourcePage) {
    const citationTitle = normalizeTitle(frontmatterString(frontmatter.title) ?? title)
    const authors = frontmatterStringArray(frontmatter.authors)
    const publicationDate =
      frontmatterString(frontmatter.year) ??
      frontmatterString(frontmatter.published) ??
      frontmatterString(frontmatter.created)
    const publication = frontmatterString(frontmatter.publication)
    const doi = frontmatterString(frontmatter.doi)
    const canonicalSourceUrl = frontmatterString(frontmatter.access_url)
    return (
      <>
        <meta name="citation_title" content={citationTitle} />
        {authors.map((author, index) => (
          <meta key={`citation-author-${index}`} name="citation_author" content={author} />
        ))}
        {publicationDate && <meta name="citation_publication_date" content={publicationDate} />}
        {publication && <meta name="citation_journal_title" content={publication} />}
        {doi && <meta name="citation_doi" content={doi} />}
        <meta name="citation_abstract_html_url" content={socialUrl} />
        {canonicalSourceUrl && <meta name="citation_fulltext_html_url" content={canonicalSourceUrl} />}
      </>
    )
  }

  // The wiki's own analytical work — synthesis pages, metal reviews, and
  // regulation pages — emitted as Highwire / Google Scholar citation metadata
  // so Scholar can index them as original technical reports from the Index.
  // Framed honestly as an institutional report (not a journal article); the
  // page-level DOI flows in automatically once wiki_doi (or an instrument DOI)
  // is present. Category pages and stubs are intentionally excluded to avoid
  // overclaiming. citation_title stays the full page title; the HTML <title>
  // is capped separately for search snippets.
  const isWikiScholarly =
    frontmatter.type === "synthesis" ||
    frontmatter.type === "metal" ||
    isRegulationArticle(slugStr, frontmatter.type) ||
    slugStr.startsWith("synthesis/") ||
    slugStr.startsWith("metals/")
  if (isWikiScholarly) {
    const citationTitle = normalizeTitle(frontmatterString(frontmatter.title) ?? title)
    const pubDate =
      frontmatterString(frontmatter.established) ??
      frontmatterString(frontmatter.updated) ??
      frontmatterString(frontmatter.created)
    const wikiDoi = citationDoi(frontmatter)
    // hasPdf is computed by the caller via hasScholarlyPdf(fileData) — the same
    // rule the generator applies — so citation_pdf_url, the Download PDF button
    // and the rendered file can never disagree.
    return (
      <>
        <meta name="citation_title" content={citationTitle} />
        <meta name="citation_author" content="Pendergrass, Karen" />
        <meta
          name="citation_author_institution"
          content="Heavy Metal Index, Institute of Contaminant Standards"
        />
        <meta name="citation_publisher" content="Institute of Contaminant Standards" />
        <meta
          name="citation_technical_report_institution"
          content="Heavy Metal Index, Institute of Contaminant Standards"
        />
        {pubDate && (
          <meta name="citation_publication_date" content={pubDate.replace(/-/g, "/")} />
        )}
        <meta name="citation_abstract_html_url" content={socialUrl} />
        <meta name="citation_fulltext_html_url" content={socialUrl} />
        {/* Google Scholar strongly prefers a PDF; synthesis + developed metal
            reviews ship one at <url>.pdf (postbuild-synthesis-pdf.mjs). */}
        {hasPdf && <meta name="citation_pdf_url" content={`${socialUrl}.pdf`} />}
        {wikiDoi && <meta name="citation_doi" content={wikiDoi} />}
      </>
    )
  }

  return null
}

export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const pageTitle =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const metalFields = isMetalArticle(fileData.slug, fileData.frontmatter?.type)
      ? metalSearchFields({
          title: fileData.frontmatter?.title,
          symbol: fileData.frontmatter?.symbol,
          name: fileData.frontmatter?.name,
          overview: fileData.overviewProse,
        })
      : null
    // Document titles are capped at a word boundary. Metal pages replace the
    // one-word heading with a description drawn from the Overview before the cap.
    const title =
      foodSearchTitle(fileData.frontmatter ?? {}) ||
      capHtmlTitle(plainMetalText(metalFields?.title || pageTitle))
    const description =
      cleanDescription(fileData.description, 155, false) ||
      buildMetaDescription(undefined, fileData.frontmatter ?? {}, String(fileData.slug ?? ""))

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page. simplifySlug strips the trailing `index` so the
    // homepage canonicalizes to `/` (not `/index`) and folder pages to `/foo/`
    // (not `/foo/index`) — matching the served URL. A cross-domain canonical or
    // a self-canonical pointing at a non-served path is the duplicate-content
    // defect that folded the old paleofoundation.com↔heavymetaltested.com pair.
    const socialUrl =
      fileData.slug === "404"
        ? url.toString()
        : joinSegments(url.toString(), simplifySlug(fileData.slug!))

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png?v=20260909-brand`
    const ogImageAlt = usesCustomOgImage
      ? description
      : "Heavy Metal Index wordmark on a burgundy background with periodic element tiles."
    const ogType = isArticlePage(fileData.frontmatter, fileData.slug) ? "article" : "website"

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="sy1JoHaUgb_tWsBU9HY7Ca5T0NtXQGSTpAg0_nmV9eE" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={ogType} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={ogImageAlt} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta name="twitter:image:alt" content={ogImageAlt} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
            {fileData.slug !== "404" && <link rel="canonical" href={socialUrl} />}
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        {frontmatterBoolean(fileData.frontmatter?.noindex) && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <CitationMetadata
          frontmatter={fileData.frontmatter}
          slug={fileData.slug}
          title={title}
          socialUrl={socialUrl}
          hasPdf={hasScholarlyPdf(fileData)}
        />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
