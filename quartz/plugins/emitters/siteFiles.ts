import { FullSlug } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

/**
 * Heavy Metal Index — root-level site files.
 *
 * Emits robots.txt and humans.txt at the output root so they are served at
 * /robots.txt and /humans.txt respectively. Quartz's built-in Static emitter
 * only serves files under /static/, which is not where crawlers expect these.
 */
export const SiteFiles: QuartzEmitterPlugin = () => ({
  name: "SiteFiles",
  async *emit(ctx) {
    const baseUrl = ctx.cfg.configuration.baseUrl ?? ""
    const sitemapUrl = baseUrl ? `https://${baseUrl}/sitemap.xml` : "/sitemap.xml"

    const robotsTxt = [
      "# Heavy Metal Index — https://heavymetalindex.com/",
      "# Operated by the Paleo Foundation (Cyprus).",
      "# See /terms for usage terms. Bulk scraping for commercial",
      "# redistribution is not permitted; see /terms.",
      "",
      "User-agent: *",
      "Allow: /",
      "",
      "# Academic and search indexers are welcome.",
      "User-agent: Googlebot",
      "Allow: /",
      "",
      "User-agent: Google-Extended",
      "Allow: /",
      "",
      "User-agent: Bingbot",
      "Allow: /",
      "",
      "# Google Scholar",
      "User-agent: Googlebot-News",
      "Allow: /",
      "",
      `Sitemap: ${sitemapUrl}`,
      "",
    ].join("\n")

    yield write({
      ctx,
      content: robotsTxt,
      slug: "robots" as FullSlug,
      ext: ".txt",
    })

    const humansTxt = [
      "/* TEAM */",
      "Operator: Paleo Foundation",
      "Site: https://paleofoundation.com",
      "Location: Cyprus",
      "",
      "/* SITE */",
      "Standards: HTML5, CSS3",
      "Framework: Quartz 4",
      "Content: Markdown with YAML frontmatter",
      "Source: https://github.com/paleofoundation/heavymetalindex",
      "",
      "/* THANKS */",
      "The authors of the cited literature.",
      "",
    ].join("\n")

    yield write({
      ctx,
      content: humansTxt,
      slug: "humans" as FullSlug,
      ext: ".txt",
    })
  },
  async *partialEmit() {},
})
