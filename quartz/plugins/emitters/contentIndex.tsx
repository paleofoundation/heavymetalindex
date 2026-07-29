import { Root } from "hast"
import { GlobalConfiguration } from "../../cfg"
import { getDate } from "../../components/Date"
import { escapeHTML } from "../../util/escape"
import { FilePath, FullSlug, SimpleSlug, joinSegments, simplifySlug } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { toHtml } from "hast-util-to-html"
import { write } from "./helpers"
import { i18n } from "../../i18n"

export type ContentIndexMap = Map<FullSlug, ContentDetails>
export type ContentDetails = {
  slug: FullSlug
  filePath: FilePath
  title: string
  links: SimpleSlug[]
  tags: string[]
  content: string
  richContent?: string
  date?: Date
  description?: string
  noindex?: boolean
}

interface Options {
  enableSiteMap: boolean
  enableRSS: boolean
  rssLimit?: number
  rssFullHtml: boolean
  rssSlug: string
  includeEmptyFiles: boolean
  // The client-side FlexSearch index is built from `content`. Shipping every
  // page's full body (avg ~11k chars over ~2.9k pages ≈ 33 MB) made the browser
  // spend minutes constructing the index, so search returned nothing for real
  // visitors. We ship a term-dense digest instead: title + tags + description +
  // every heading + a capped lead excerpt. That covers real search intent on a
  // reference wiki (metals, ingredients, categories, regulations all live in
  // titles/headings) at ~1/6 the size, with no server-side search runtime.
  // 0 disables the cap (ships full body — the pre-2026-07-29 behaviour).
  searchExcerptChars: number
  searchIncludeHeadings: boolean
}

const defaultOptions: Options = {
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
  rssFullHtml: false,
  rssSlug: "index",
  includeEmptyFiles: true,
  searchExcerptChars: 1500,
  searchIncludeHeadings: true,
}

// Depth-first collect of visible heading text (h1–h6) from a hast tree, in
// document order. These carry the load-bearing search terms on wiki pages
// (metal names, "Contamination profile", "Regulatory limits", …).
function extractHeadings(node: any, out: string[] = []): string[] {
  if (!node) return out
  if (node.type === "element" && /^h[1-6]$/.test(node.tagName ?? "")) {
    const text = hastText(node).trim()
    if (text) out.push(text)
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) extractHeadings(child, out)
  }
  return out
}

function hastText(node: any): string {
  if (!node) return ""
  if (node.type === "text") return node.value ?? ""
  if (Array.isArray(node.children)) return node.children.map(hastText).join("")
  return ""
}

// Build the digest that gets indexed + shown as the result snippet.
function searchDigest(
  tree: Root,
  fullText: string,
  description: string,
  opts: Options,
): string {
  if (!opts.searchExcerptChars) return fullText // cap disabled → legacy full body
  const headings = opts.searchIncludeHeadings ? extractHeadings(tree) : []
  const excerpt = (fullText ?? "").slice(0, opts.searchExcerptChars)
  // Order: description (human summary) → headings (section topics) → lead prose.
  // De-duplicated join keeps the digest tight without dropping distinct terms.
  const parts = [description ?? "", headings.join(" · "), excerpt].map((s) => s.trim())
  return parts.filter(Boolean).join("\n")
}

function generateSiteMap(cfg: GlobalConfiguration, idx: ContentIndexMap): string {
  const base = cfg.baseUrl ?? ""
  const createURLEntry = (slug: SimpleSlug, content: ContentDetails): string => `<url>
    <loc>https://${joinSegments(base, encodeURI(slug))}</loc>
    ${content.date && `<lastmod>${content.date.toISOString()}</lastmod>`}
  </url>`
  const urls = Array.from(idx)
    .filter(([_, content]) => !content.noindex)
    .map(([slug, content]) => createURLEntry(simplifySlug(slug), content))
    .join("")
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`
}

function generateRSSFeed(cfg: GlobalConfiguration, idx: ContentIndexMap, limit?: number): string {
  const base = cfg.baseUrl ?? ""

  const createURLEntry = (slug: SimpleSlug, content: ContentDetails): string => `<item>
    <title>${escapeHTML(content.title)}</title>
    <link>https://${joinSegments(base, encodeURI(slug))}</link>
    <guid>https://${joinSegments(base, encodeURI(slug))}</guid>
    <description><![CDATA[ ${content.richContent ?? content.description} ]]></description>
    <pubDate>${content.date?.toUTCString()}</pubDate>
  </item>`

  const items = Array.from(idx)
    .filter(([_, content]) => !content.noindex)
    .sort(([_, f1], [__, f2]) => {
      if (f1.date && f2.date) {
        return f2.date.getTime() - f1.date.getTime()
      } else if (f1.date && !f2.date) {
        return -1
      } else if (!f1.date && f2.date) {
        return 1
      }

      return f1.title.localeCompare(f2.title)
    })
    .map(([slug, content]) => createURLEntry(simplifySlug(slug), content))
    .slice(0, limit ?? idx.size)
    .join("")

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
      <title>${escapeHTML(cfg.pageTitle)}</title>
      <link>https://${base}</link>
      <description>${!!limit ? i18n(cfg.locale).pages.rss.lastFewNotes({ count: limit }) : i18n(cfg.locale).pages.rss.recentNotes} on ${escapeHTML(
        cfg.pageTitle,
      )}</description>
      <generator>Quartz -- quartz.jzhao.xyz</generator>
      ${items}
    </channel>
  </rss>`
}

export const ContentIndex: QuartzEmitterPlugin<Partial<Options>> = (opts) => {
  opts = { ...defaultOptions, ...opts }
  return {
    name: "ContentIndex",
    async *emit(ctx, content) {
      const cfg = ctx.cfg.configuration
      const linkIndex: ContentIndexMap = new Map()
      for (const [tree, file] of content) {
        const slug = file.data.slug!
        const date = getDate(ctx.cfg.configuration, file.data) ?? new Date()
        const noindex = isNoindex(file.data.frontmatter?.noindex)
        if (opts?.includeEmptyFiles || (file.data.text && file.data.text !== "")) {
          linkIndex.set(slug, {
            slug,
            filePath: file.data.relativePath!,
            title: file.data.frontmatter?.title!,
            links: file.data.links ?? [],
            tags: file.data.frontmatter?.tags ?? [],
            content: searchDigest(
              tree as Root,
              file.data.text ?? "",
              file.data.description ?? "",
              opts as Options,
            ),
            richContent: opts?.rssFullHtml
              ? escapeHTML(toHtml(tree as Root, { allowDangerousHtml: true }))
              : undefined,
            date: date,
            description: file.data.description ?? "",
            noindex,
          })
        }
      }

      if (opts?.enableSiteMap) {
        yield write({
          ctx,
          content: generateSiteMap(cfg, linkIndex),
          slug: "sitemap" as FullSlug,
          ext: ".xml",
        })
      }

      if (opts?.enableRSS) {
        yield write({
          ctx,
          content: generateRSSFeed(cfg, linkIndex, opts.rssLimit),
          slug: (opts?.rssSlug ?? "index") as FullSlug,
          ext: ".xml",
        })
      }

      const fp = joinSegments("static", "contentIndex") as FullSlug
      const simplifiedIndex = Object.fromEntries(
        Array.from(linkIndex)
          .filter(([_, content]) => !content.noindex)
          .map(([slug, content]) => {
            // remove description and from content index as nothing downstream
            // actually uses it. we only keep it in the index as we need it
            // for the RSS feed
            delete content.description
            delete content.date
            delete content.noindex
            return [slug, content]
          }),
      )

      yield write({
        ctx,
        content: JSON.stringify(simplifiedIndex),
        slug: fp,
        ext: ".json",
      })
    },
    externalResources: (ctx) => {
      if (opts?.enableRSS) {
        return {
          additionalHead: [
            <link
              rel="alternate"
              type="application/rss+xml"
              title="RSS Feed"
              href={`https://${ctx.cfg.configuration.baseUrl}/index.xml`}
            />,
          ],
        }
      }
    },
  }
}

function isNoindex(value: unknown): boolean {
  if (typeof value === "boolean") return value
  if (typeof value === "string") return ["true", "yes", "1"].includes(value.trim().toLowerCase())
  return false
}
