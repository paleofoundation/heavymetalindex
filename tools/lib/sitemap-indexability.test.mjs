import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import {
  auditSitemapXml,
  collectPublishedPages,
  extraIndexablePublicPaths,
  htmlCanonicalPath,
  htmlHasNoindex,
  locForPublicPath,
  publicPathForContentSlug,
  publicPathForHtmlRel,
} from "./sitemap-indexability.mjs"
import { SITEMAP_EXCLUSIONS } from "../audit-sitemap-indexability.mjs"

test("folder indexes use the extensionless path that returns 200", () => {
  assert.equal(publicPathForContentSlug("sources/index"), "/sources")
  assert.equal(publicPathForContentSlug("index"), "/")
  assert.equal(publicPathForContentSlug("ingredients/almond"), "/ingredients/almond")
  assert.equal(locForPublicPath("/sources"), "https://heavymetalindex.com/sources")
  assert.equal(locForPublicPath("/"), "https://heavymetalindex.com/")
  assert.equal(publicPathForHtmlRel("sources/index.html"), "/sources")
  assert.equal(publicPathForHtmlRel("404.html"), null)
})

test("extra sitemap paths cover folder pages and keep operational and tag pages out", () => {
  const blocked = new Set(["/login"])
  const pages = [
    { slug: "sources/index", frontmatter: { title: "Sources" } },
    { slug: "sources/reviewed", frontmatter: { title: "Reviewed" } },
    { slug: "studies/one", frontmatter: { title: "A study" } },
    { slug: "audits/index", frontmatter: { title: "Audits" } },
    { slug: "app/query", frontmatter: { title: "Query" } },
    { slug: "metals/lead", frontmatter: { title: "Lead", type: "metal" } },
    { slug: "metals/lead/evidence", frontmatter: { title: "Lead evidence", type: "metal-evidence" } },
    { slug: "products/cleaners", frontmatter: { title: "Cleaners", tags: ["euecolabel", "1/2"] } },
  ]
  const extra = extraIndexablePublicPaths(pages, { blockedPaths: blocked, exclusions: SITEMAP_EXCLUSIONS })
  assert.deepEqual(extra.sort(), ["/metals", "/products", "/studies"])
  assert.deepEqual(SITEMAP_EXCLUSIONS, ["/tags"])
  assert.ok(!extra.includes("/sources"))
  assert.ok(!extra.includes("/audits"))
  assert.ok(!extra.includes("/app"))
  assert.ok(!extra.includes("/metals/lead"))
  assert.ok(!extra.some((publicPath) => publicPath === "/tags" || publicPath.startsWith("/tags/")))
})

test("products/categories is not invented when that page already exists", () => {
  const extra = extraIndexablePublicPaths(
    [
      { slug: "products/categories/index", frontmatter: { title: "Categories" } },
      { slug: "products/categories/grains", frontmatter: { title: "Grains" } },
    ],
    { blockedPaths: new Set(), exclusions: SITEMAP_EXCLUSIONS },
  )
  assert.deepEqual(extra, ["/products"])
})

function page(publicPath, title, extra = "") {
  const href = `https://heavymetalindex.com${publicPath === "/" ? "/" : publicPath}`
  return `<html><head><title>${title}</title>${extra}<link rel="canonical" href="${href}"/></head><body>${title}</body></html>`
}

test("rendered robots decide sitemap membership", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-sitemap-audit-"))
  const pages = {
    "index.html": page("/", "Home"),
    "sources/index.html": page("/sources", "Sources"),
    "audits/index.html": page("/audits", "Audits", '<meta name="robots" content="noindex, follow"/>'),
    "studies/index.html": page("/studies", "Studies"),
    "tags/index.html": page("/tags", "Tag Index"),
    "tags/euecolabel.html": page("/tags/euecolabel", "Tag: euecolabel"),
    "404.html": "<html><head><title>Not Found</title></head><body>Missing</body></html>",
    "googlef9d9992d08f1cc58.html": "google-site-verification: googlef9d9992d08f1cc58.html",
    "old/index.html":
      '<html><head><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=/new"></head></html>',
  }
  try {
    for (const [rel, html] of Object.entries(pages)) {
      const file = path.join(root, rel)
      fs.mkdirSync(path.dirname(file), { recursive: true })
      fs.writeFileSync(file, html)
    }
    assert.equal(htmlHasNoindex(pages["audits/index.html"]), true)
    assert.equal(htmlHasNoindex(pages["sources/index.html"]), false)
    assert.equal(htmlCanonicalPath(pages["sources/index.html"]), "/sources")
    const { indexable, noindex, canonicalMismatch } = collectPublishedPages(root, new Set())
    assert.deepEqual(canonicalMismatch, [])
    assert.ok(indexable.has("/tags"))
    assert.ok(indexable.has("/tags/euecolabel"))
    const visible = [...indexable].filter((publicPath) => publicPath !== "/tags" && !publicPath.startsWith("/tags/"))
    assert.deepEqual(visible.sort(), ["/", "/sources", "/studies"])
    assert.deepEqual([...noindex], ["/audits"])

    const missing = auditSitemapXml(
      "<urlset><url><loc>https://heavymetalindex.com/sources/</loc></url><url><loc>https://heavymetalindex.com/</loc></url></urlset>",
      { indexable, noindex, exclusions: SITEMAP_EXCLUSIONS, requireComplete: true },
    )
    assert.deepEqual(missing.missing, ["/sources", "/studies"])
    assert.deepEqual(missing.notIndexable, ["https://heavymetalindex.com/sources/"])
    assert.deepEqual(missing.noindexListed, [])

    const noindexListed = auditSitemapXml(
      "<urlset><url><loc>https://heavymetalindex.com/audits</loc></url></urlset>",
      { indexable, noindex, requireComplete: false },
    )
    assert.deepEqual(noindexListed.noindexListed, ["https://heavymetalindex.com/audits"])

    const aligned = [
      "https://heavymetalindex.com/",
      "https://heavymetalindex.com/sources",
      "https://heavymetalindex.com/studies",
    ]
      .map((loc) => `<url><loc>${loc}</loc></url>`)
      .join("")
    const pass = auditSitemapXml(`<urlset>${aligned}</urlset>`, {
      indexable,
      noindex,
      exclusions: SITEMAP_EXCLUSIONS,
      requireComplete: true,
    })
    assert.deepEqual(pass.missing, [])
    assert.deepEqual(pass.notIndexable, [])
    assert.deepEqual(pass.noindexListed, [])
    assert.deepEqual(pass.excludedListed, [])

    const tagsListed = auditSitemapXml(
      "<urlset><url><loc>https://heavymetalindex.com/tags/euecolabel</loc></url></urlset>",
      { indexable, noindex, exclusions: SITEMAP_EXCLUSIONS, requireComplete: false },
    )
    assert.deepEqual(tagsListed.excludedListed, ["https://heavymetalindex.com/tags/euecolabel"])
    assert.deepEqual(tagsListed.missing, [])

    const scholarly = auditSitemapXml(
      "<urlset><url><loc>https://heavymetalindex.com/sources</loc></url></urlset>",
      { indexable, noindex, requireComplete: false },
    )
    assert.deepEqual(scholarly.missing, [])
    assert.deepEqual(scholarly.notIndexable, [])

    const slashy = path.join(root, "slashy/index.html")
    fs.mkdirSync(path.dirname(slashy), { recursive: true })
    fs.writeFileSync(
      slashy,
      '<html><head><link rel="canonical" href="https://heavymetalindex.com/slashy/"/></head><body>Slash</body></html>',
    )
    const mismatched = collectPublishedPages(root, new Set())
    assert.deepEqual(mismatched.canonicalMismatch, ["/slashy"])
    assert.ok(mismatched.indexable.has("/slashy"))
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})
