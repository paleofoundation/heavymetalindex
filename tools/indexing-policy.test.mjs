import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { execFileSync } from "node:child_process"
import matter from "gray-matter"

test("both postbuild outputs omit low-value articles while retaining HTML and breadcrumbs", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-indexing-policy-"))
  const tools = path.resolve("tools")
  const pages = [
    {
      slug: "sources/reviewed",
      data: { title: "Reviewed source", type: "source", authors: ["Verified author"] },
      body: "Source-specific findings.",
    },
    {
      slug: "sources/pending",
      data: { title: "Unreviewed source", type: "source", authors: ["Unknown authors"] },
      body: "Source record.",
    },
    {
      slug: "sources/bulk",
      data: { title: "Bulk record", type: "source", authors: ["Verified author"] },
      body: "This source page is a mechanical bulk-ingest record for a PDF.",
    },
    {
      slug: "ingredients/empty",
      data: { title: "Empty ingredient", type: "ingredient", sources: 1 },
      body: "Source inventory only.",
    },
    {
      slug: "ingredients/explicit",
      data: {
        title: "Private ingredient",
        type: "ingredient",
        noindex: "yes",
        contributing_sources: ["sources/reviewed"],
      },
      body: "Cited findings.",
    },
    { slug: "roadmap", data: { title: "Roadmap" }, body: "Operational planning." },
  ]
  try {
    fs.mkdirSync(path.join(root, "public"))
    for (const page of pages) {
      const md = path.join(root, "wiki", `${page.slug}.md`)
      const html = path.join(root, "public", `${page.slug}.html`)
      fs.mkdirSync(path.dirname(md), { recursive: true })
      fs.mkdirSync(path.dirname(html), { recursive: true })
      fs.writeFileSync(md, matter.stringify(page.body, page.data))
      fs.writeFileSync(
        html,
        `<html><head><title>${page.data.title}</title></head><body><article>${page.body}</article></body></html>`,
      )
    }
    // The scholarly sitemap now requires main-sitemap membership. List every
    // fixture page in the main sitemap so this test still isolates the
    // low-value filter.
    fs.writeFileSync(
      path.join(root, "public/sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
        .map((page) => `<url><loc>https://heavymetalindex.com/${page.slug}</loc></url>`)
        .join("")}</urlset>`,
    )
    fs.writeFileSync(path.join(root, "vercel.json"), JSON.stringify({ redirects: [] }))
    fs.mkdirSync(path.join(root, "data/redirects"), { recursive: true })
    fs.writeFileSync(path.join(root, "data/redirects/gone-410.json"), JSON.stringify({ paths: [] }))
    fs.writeFileSync(path.join(root, "data/redirects/aliases-301.json"), JSON.stringify({ linkTargets: {} }))
    for (const script of [
      "postbuild-inject-jsonld.mjs",
      "postbuild-inject-breadcrumbs.mjs",
      "postbuild-scholarly-sitemap.mjs",
    ]) {
      execFileSync(process.execPath, [path.join(tools, script)], { cwd: root, stdio: "pipe" })
    }
    const sitemap = fs.readFileSync(path.join(root, "public/sitemap-scholarly.xml"), "utf8")
    assert.match(sitemap, /<loc>https:\/\/heavymetalindex.com\/sources\/reviewed<\/loc>/)
    for (const page of pages) {
      const html = fs.readFileSync(path.join(root, "public", `${page.slug}.html`), "utf8")
      assert.ok(html.includes(`<article>${page.body}</article>`), page.slug)
      assert.match(html, /"@type":"BreadcrumbList"/)
      if (page.slug === "sources/reviewed") assert.match(html, /"@type":"ScholarlyArticle"/)
      else {
        assert.doesNotMatch(html, /"@type":"ScholarlyArticle"/, page.slug)
        assert.ok(
          !sitemap.includes(`<loc>https://heavymetalindex.com/${page.slug}</loc>`),
          page.slug,
        )
      }
    }
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})
