import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot, simplifySlug } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
import { hasScholarlyPdf } from "./scholarlyPdf"

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

  // Source pages represent the underlying paper — emit its real bibliographic
  // record (author, journal, the paper's own DOI).
  const isSourcePage = frontmatter.type === "source" || slugStr.startsWith("sources/")
  if (isSourcePage) {
    const citationTitle = frontmatterString(frontmatter.title) ?? title
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

  // The wiki's own analytical work — synthesis pages and the comprehensive
  // metal reviews — emitted as Highwire / Google Scholar citation metadata so
  // Scholar can index them as original technical reports from the Index. Framed
  // honestly as an institutional report (not a journal article); the
  // page-level DOI flows in automatically once wiki_doi is minted. Category
  // pages and stubs are intentionally excluded to avoid overclaiming.
  const isWikiScholarly =
    frontmatter.type === "synthesis" ||
    frontmatter.type === "metal" ||
    slugStr.startsWith("synthesis/") ||
    slugStr.startsWith("metals/")
  if (isWikiScholarly) {
    const citationTitle = frontmatterString(frontmatter.title) ?? title
    const pubDate =
      frontmatterString(frontmatter.established) ??
      frontmatterString(frontmatter.updated) ??
      frontmatterString(frontmatter.created)
    const wikiDoi = frontmatterString(frontmatter.wiki_doi)
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
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

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
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

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

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
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
