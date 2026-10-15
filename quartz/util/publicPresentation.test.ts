import test from "node:test"
import assert from "node:assert/strict"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import { toHtml } from "hast-util-to-html"
import { toString } from "hast-util-to-string"
import type { Root } from "hast"
import { presentArticle } from "./publicPresentation"

async function parse(markdown: string) {
  const processor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeSlug)
  return await processor.run(processor.parse(markdown)) as Root
}

test("unfinished sections consolidate into one notice, retaining deep-link targets", async () => {
  const tree = await parse("## Overview\n\nScope.\n\n## Literature Evidence Summary\n\n_Generator-managed section: will be populated when data is reviewed._\n\n## Source Evidence Inventory\n\n_Source evidence inventory pending structured extraction._\n\n## References\n\nSource record.")
  const result = presentArticle(tree, { type: "product-category" }, "products/test")
  const html = toHtml(tree)
  assert.equal(result.omitted.length, 2)
  assert.equal((html.match(/hmi-publication-note/g) ?? []).length, 1)
  assert.ok(html.includes('id="literature-evidence-summary"'))
  assert.ok(!html.includes("Generator-managed"))
  assert.ok(!result.headings.some((heading) => heading.id === "source-evidence-inventory"))
})

test("measured values, units, censoring, links and meaningful gaps survive presentation", async () => {
  const tree = await parse("## Methodology\n\nDo not pool dry and wet basis.\n\n## Structured Concentration Rows\n\n| Metal | Result | Basis | Source |\n| --- | --- | --- | --- |\n| Pb | <0.007 µg/kg | dry | [Study](/sources/study) |\n| iAs | Not measured | dry | [Study](/sources/study) |\n\n## Evidence gaps\n\nNo applicable legal limit was identified in the reviewed instruments.\n\n## References\n\n[Study](/sources/study)")
  const before = toString(tree).match(/<0\.007 µg\/kg/)
  const result = presentArticle(tree, { type: "product-category" }, "products/test")
  const html = toHtml(tree)
  assert.ok(before)
  assert.ok(toString(tree).includes("<0.007 µg/kg"))
  assert.ok(html.includes("Not measured"))
  assert.ok(html.includes("No applicable legal limit"))
  assert.ok(html.includes('href="/sources/study"'))
  assert.ok(html.includes('tabindex="0"'))
  assert.ok(html.includes('role="region"'))
  assert.ok(result.headings.findIndex((h) => h.id === "structured-concentration-rows") < result.headings.findIndex((h) => h.id === "methodology"))
  presentArticle(tree, { type: "product-category" }, "products/test")
  assert.equal((toHtml(tree).match(/class="hmi-table-scroll"/g) ?? []).length, 1)
})

test("only identical variant panels collapse and authored scientific prose stays intact", async () => {
  const panel = '<div class="hmi-variant-group"><a href="/products/soy">Soy</a><span>34 sources</span></div>'
  const tree = await parse(panel + "\n\n" + panel + "\n\n## Discussion\n\nThe association is uncertain and is not evidence of causation.")
  presentArticle(tree, { type: "product-category" }, "products/test")
  assert.equal((toHtml(tree).match(/hmi-variant-group/g) ?? []).length, 1)
  assert.ok(toString(tree).includes("The association is uncertain and is not evidence of causation."))
})

test("count-based coverage is distinguished from confidence; other confidence ratings remain", async () => {
  const tree = await parse("## Methodology\n\n**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.")
  presentArticle(tree, { type: "product-category" }, "products/test")
  assert.ok(toString(tree).includes("Source coverage."))
  const other = await parse("## Methods\n\nConfidence intervals were estimated by bootstrap.")
  presentArticle(other, { type: "ingredient" }, "ingredients/test")
  assert.ok(toString(other).includes("Confidence intervals were estimated by bootstrap."))
})


test("lead study comparisons retain headers and label mobile cells without changing sibling metals", async () => {
  const markdown = "## Food sources\n\n| Study / setting | Material / design | Finding | Interpretation / limitation |\n| --- | --- | --- | --- |\n| Local study | Edible tissue | Measured lead | Targeted sample |"
  for (const slug of ["metals/lead", "metals/cadmium"]) {
    const tree = await parse(markdown)
    presentArticle(tree, { type: "metal" }, slug)
    const html = toHtml(tree)
    assert.equal(html.includes('class="hmi-lead-evidence-table"'), slug === "metals/lead")
    assert.equal(html.includes('data-label="Interpretation / limitation"'), slug === "metals/lead")
    assert.ok(html.includes("<th>Study / setting</th>"))
    assert.ok(html.includes("Targeted sample</td>"))
  }
})
