import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import {
  auditSitemapXml,
  collectPublishedPages,
  extraIndexablePublicPaths,
  htmlHasNoindex,
  locForPublicPath,
  publicPathForContentSlug,
  publicPathForHtmlRel,
} from "./sitemap-indexability.mjs"

test("folder indexes use the extensionless path that returns 200", () => {
  assert.equal(publicPathForContentSlug("sources/index"), "/sources")
  assert.equal(publicPathForContentSlug("index"), "/")
  assert.equal(publicPathForContentSlug("ingredients/almond"), "/ingredients/almond")
  assert.equal(locForPublicPath("/sources"), "https://heavymetalindex.com/sources")
  assert.equal(locForPublicPath("/"), "https://heavymetalindex.com/")
  assert.equal(publicPathForHtmlRel("sources/index.html"), "/sources")
  assert.equal(publicPathForHtmlRel("404.html"), null)
})

test("extra sitemap paths cover folder and tag pages and keep operational pages out", () => {
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
  const extra = extraIndexablePublicPaths(pages, { blockedPaths: blocked })
  assert.deepEqual(
    extra.sort(),
    ["/metals", "/products", "/studies", "/tags", "/tags/1", "/tags/1/2", "/tags/euecolabel"].sort(),
  )
  assert.ok(!extra.includes("/sources"))
  assert.ok(!extra.includes("/audits"))
  assert.ok(!extra.includes("/app"))
  assert.ok(!extra.includes("/metals/lead"))
})

test("products/categories is not invented when that page already exists", () => {
  const extra = extraIndexablePublicPaths(
    [
      { slug: "products/categories/index", frontmatter: { title: "Categories" } },
      { slug: "products/categories/grains", frontmatter: { title: "Grains" } },
    ],
    { blockedPaths: new Set() },
  )
  assert.deepEqual(extra.sort(), ["/products", "/tags"])
})

test("rendered robots decide sitemap membership", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-sitemap-audit-"))
  const pages = {
    "index.html": "<html><head><title>Home</title></head><body>Home</body></html>",
    "sources/index.html": "<html><head><title>Sources</title></head><body>Sources</body></html>",
    "audits/index.html":
      '<html><head><meta name="robots" content="noindex, follow"/></head><body>Audits</body></html>',
    "studies/index.html": "<html><head><title>Studies</title></head><body>Studies</body></html>",
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
    const { indexable, noindex } = collectPublishedPages(root, new Set())
    assert.deepEqual([...indexable].sort(), ["/", "/sources", "/studies"])
    assert.deepEqual([...noindex], ["/audits"])

    const missing = auditSitemapXml(
      "<urlset><url><loc>https://heavymetalindex.com/sources/</loc></url><url><loc>https://heavymetalindex.com/</loc></url></urlset>",
      { indexable, noindex, requireComplete: true },
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
      requireComplete: true,
    })
    assert.deepEqual(pass.missing, [])
    assert.deepEqual(pass.notIndexable, [])
    assert.deepEqual(pass.noindexListed, [])

    const scholarly = auditSitemapXml(
      "<urlset><url><loc>https://heavymetalindex.com/sources</loc></url></urlset>",
      { indexable, noindex, requireComplete: false },
    )
    assert.deepEqual(scholarly.missing, [])
    assert.deepEqual(scholarly.notIndexable, [])
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})
