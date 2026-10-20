import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { VFile } from "vfile"
import { ContentIndex, isAskEligible } from "./contentIndex"
import type { BuildCtx } from "../../util/ctx"
import type { ProcessedContent } from "../vfile"

test("Ask emitter includes public evidence families and excludes pending/private material", () => {
  for (const slug of ["ingredients/olive-oil", "synthesis/new-topic", "regulators/new-agency"]) {
    assert.equal(isAskEligible(slug, {}), true)
  }
  for (const field of ["noindex", "draft", "retired"]) {
    for (const value of [true, "true", "yes", "1"]) {
      assert.equal(isAskEligible("ingredients/olive-oil", { [field]: value }), false)
    }
  }
  assert.equal(isAskEligible("sources/pending", { evidence_tier: "pending" }), false)
  assert.equal(isAskEligible("sources/tier1", { status: "tier1-stub" }), false)
  for (const slug of ["log", "queries/a", "workbench/a", "batch-reports/a", "certification/a"]) {
    assert.equal(isAskEligible(slug, {}), false)
  }
})

test("sitemap and search exports use the same low-value policy without dropping page files", async () => {
  const output = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-content-index-"))
  const ctx = {
    argv: { output },
    cfg: { configuration: { baseUrl: "heavymetalindex.com", defaultDateType: "modified", locale: "en-US" } },
  } as BuildCtx
  const content = [
    ["sources/reviewed", { title: "Reviewed", type: "source", authors: ["Verified author"] }, "Reviewed findings."],
    ["sources/pending", { title: "Pending", type: "source", authors: ["Unknown authors"] }, "Pending record."],
    ["sources/bulk", { title: "Bulk", type: "source", authors: ["Verified author"] }, "This source page is a mechanical bulk-ingest record for a PDF."],
    ["ingredients/empty", { title: "Empty", type: "ingredient", sources: 1 }, "Related source inventory."],
    ["ingredients/cited", { title: "Cited", type: "ingredient", contributing_sources: ["sources/reviewed"] }, "Cited findings."],
    ["roadmap", { title: "Roadmap" }, "Planning."],
    ["metals/private", { title: "Private", type: "metal", noindex: true }, "Private reference."],
    ["sources/index", { title: "Sources" }, "Source catalog."],
    ["audits/index", { title: "Audits" }, "Operational audit dashboard."],
    ["studies/one", { title: "A study" }, "Study notes."],
  ].map(([slug, frontmatter, indexingBody]) => {
    const file = new VFile("")
    Object.assign(file.data, { slug, frontmatter, indexingBody, text: indexingBody, description: indexingBody, relativePath: `${slug}.md` })
    return [{ type: "root", children: [] }, file] as ProcessedContent
  })
  try {
    const files = await ContentIndex({ enableRSS: false }).emit(ctx, content, { css: [], js: [], additionalHead: [] })
    for await (const file of files) void file
    const sitemap = fs.readFileSync(path.join(output, "sitemap.xml"), "utf8")
    const search = JSON.parse(fs.readFileSync(path.join(output, "static/contentIndex.json"), "utf8"))
    const ask = JSON.parse(fs.readFileSync(path.join(output, "static/askIndex.json"), "utf8"))
    for (const slug of ["sources/reviewed", "ingredients/cited", "studies/one"]) {
      assert.ok(sitemap.includes(`<loc>https://heavymetalindex.com/${slug}</loc>`), slug)
      assert.ok(search[slug], slug)
      assert.ok(ask[slug], slug)
    }
    assert.ok(sitemap.includes("<loc>https://heavymetalindex.com/sources</loc>"))
    assert.ok(!sitemap.includes("<loc>https://heavymetalindex.com/sources/</loc>"))
    assert.ok(sitemap.includes("<loc>https://heavymetalindex.com/studies</loc>"))
    assert.ok(!sitemap.includes("<loc>https://heavymetalindex.com/tags</loc>"))
    assert.ok(!sitemap.includes("<loc>https://heavymetalindex.com/tags/"))
    assert.equal(search["studies/index"], undefined)
    assert.equal(search["tags/index"], undefined)
    for (const slug of ["sources/pending", "sources/bulk", "ingredients/empty", "roadmap", "metals/private", "audits", "audits/index"]) {
      assert.ok(!sitemap.includes(`<loc>https://heavymetalindex.com/${slug}</loc>`), slug)
      assert.equal(search[slug], undefined)
      assert.equal(ask[slug], undefined)
    }
    assert.equal(content.length, 10)
  } finally {
    fs.rmSync(output, { recursive: true, force: true })
  }
})
