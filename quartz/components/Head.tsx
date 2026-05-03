import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
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

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    // Heavy Metal Index: Scholar and Dublin Core citation metadata.
    // These tags are read by Google Scholar, academic indexing services, and
    // reference-management tools. See /methodology for publication context.
    const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>
    const fmUpdated = typeof fm.updated === "string" ? fm.updated : undefined
    const fmPublished = typeof fm.published === "string" ? fm.published : fmUpdated
    const fmAuthor = typeof fm.author === "string" ? fm.author : "Paleo Foundation"
    const fmPublisher = "Paleo Foundation"
    const pageTitleOnly = fileData.frontmatter?.title ?? cfg.pageTitle
    const citationDate = fmPublished ?? fmUpdated

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
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {/* Canonical URL for search engines and Scholar */}
        {cfg.baseUrl && <link rel="canonical" href={socialUrl} />}

        {/* Robots directives — allow indexing by default for a public reference */}
        <meta name="robots" content="index,follow" />

        {/* Highwire Press citation metadata (Google Scholar) */}
        <meta name="citation_title" content={pageTitleOnly} />
        <meta name="citation_author" content={fmAuthor} />
        <meta name="citation_publisher" content={fmPublisher} />
        {citationDate && <meta name="citation_publication_date" content={citationDate} />}
        {citationDate && <meta name="citation_online_date" content={citationDate} />}
        <meta name="citation_fulltext_html_url" content={socialUrl} />
        <meta name="citation_language" content={cfg.locale?.split("-")[0] ?? "en"} />
        {cfg.pageTitle && <meta name="citation_journal_title" content={cfg.pageTitle} />}

        {/* Dublin Core metadata (academic indexing fallback) */}
        <meta name="DC.title" content={pageTitleOnly} />
        <meta name="DC.creator" content={fmAuthor} />
        <meta name="DC.publisher" content={fmPublisher} />
        {citationDate && <meta name="DC.date" content={citationDate} />}
        <meta name="DC.language" content={cfg.locale?.split("-")[0] ?? "en"} />
        <meta name="DC.identifier" content={socialUrl} />
        <meta name="DC.rights" content="Paleo Foundation. See /terms for usage terms." />
        <meta name="DC.type" content="Text.Reference" />

        {/* JSON-LD structured data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: pageTitleOnly,
              description: description,
              author: {
                "@type": "Organization",
                name: fmAuthor,
              },
              publisher: {
                "@type": "Organization",
                name: fmPublisher,
                url: `https://${cfg.baseUrl}`,
              },
              datePublished: citationDate,
              dateModified: fmUpdated,
              url: socialUrl,
              isPartOf: {
                "@type": "WebSite",
                name: cfg.pageTitle,
                url: `https://${cfg.baseUrl}`,
              },
            }),
          }}
        />

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
