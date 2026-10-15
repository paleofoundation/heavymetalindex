import test from "node:test"
import assert from "node:assert/strict"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import { toHtml } from "hast-util-to-html"
import type { Root } from "hast"
import { expandArticleMetals } from "./plainMetalNames"
import {
  METAL_NAMES,
  metalLabel,
  plainMetalText,
} from "../../tools/lib/metal-names.mjs"
import { regenerate } from "../../tools/build-ingredient-contamination-tables.mjs"
import fs from "node:fs"

async function parse(markdown: string): Promise<Root> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
  return (await processor.run(processor.parse(markdown))) as Root
}

test("all shared symbols have distinct names and first occurrences expand once", () => {
  for (const [symbol, name] of Object.entries(METAL_NAMES)) {
    assert.equal(
      plainMetalText(`Measured ${symbol}; more ${symbol}.`),
      `Measured ${name} (${symbol}); more ${symbol}.`,
    )
    assert.match(metalLabel(symbol), new RegExp(`\\(${symbol}\\)$`))
  }
  assert.equal(
    plainMetalText("Pb/Cd and iAs/tAs with Hg/tHg/MeHg."),
    "lead (Pb)/cadmium (Cd) and inorganic arsenic (iAs)/total arsenic (tAs) with mercury (Hg)/total mercury (tHg)/methylmercury (MeHg).",
  )
})

test("existing names and parenthesized introductions are idempotent", () => {
  for (const text of [
    "lead (Pb), then Pb",
    "Lead (Pb), then Pb",
    "Measured (Pb) and Cd.",
  ]) {
    assert.equal(plainMetalText(plainMetalText(text)), plainMetalText(text))
  }
  assert.equal(
    plainMetalText("Measured (Pb) and Cd."),
    "Measured lead (Pb) and cadmium (Cd).",
  )
})

test("citation shorthand uses the given year and leaves other citations unchanged", () => {
  assert.equal(
    plainMetalText("EFSA Cd 2009; EFSA iAs 2024; JECFA 91st 2022."),
    "EFSA 2009 cadmium opinion; EFSA 2024 inorganic arsenic opinion; JECFA 91st 2022.",
  )
})

test("formulas, charges, URLs, larger words and English As stay literal", () => {
  const text =
    "As the U.S. report notes, Pb(NO3)2, CdCl2, As2O3, Hg(II), Al3+, Pb²⁺, Ni-Cd, NaAsO2, https://example.test/Pb/Cd and www.example.test/As stay literal."
  assert.equal(plainMetalText(text), text)
})

test("the article pass shares introductions across inline nodes and preserves heading anchors", async () => {
  const tree = await parse(
    "## Pb evidence\n\nMeasured **Pb** and [Cd](https://example.test/Cd) then Cd.\n\n[EFSA Cd 2009](https://example.test/opinion)",
  )
  const headings = expandArticleMetals(tree)
  const html = toHtml(tree)
  assert.equal(headings.get("pb-evidence"), "lead (Pb) evidence")
  assert.match(html, /<strong>Pb<\/strong>/)
  assert.match(
    html,
    /href="https:\/\/example.test\/Cd">cadmium \(Cd\)<\/a> then Cd/,
  )
  assert.match(html, /EFSA 2009 cadmium opinion/)
  const once = toHtml(tree)
  expandArticleMetals(tree)
  assert.equal(toHtml(tree), once)
})

test("names split across inline markup do not acquire a duplicate introduction", async () => {
  const tree = await parse(
    "Measured [lead](https://example.test/lead) *(Pb)* and Pb.",
  )
  expandArticleMetals(tree)
  assert.match(toHtml(tree), /<em>\(Pb\)<\/em> and Pb/)
})

test("tables expand only first-column labels and do not consume prose introductions", async () => {
  const tree = await parse(
    "| Analyte | Value | Source |\n| --- | --- | --- |\n| Pb | 2 | EFSA Cd 2009 |\n| Cd | Pb | [Cd](https://example.test/Cd) |\n\nMeasured Pb and Cd.",
  )
  expandArticleMetals(tree)
  const html = toHtml(tree)
  assert.match(html, /<td>lead \(Pb\)<\/td>/)
  assert.match(html, /<td>2<\/td>/)
  assert.match(html, /<td>EFSA Cd 2009<\/td>/)
  assert.match(html, /<td>Pb<\/td>/)
  assert.match(html, /<p>Measured lead \(Pb\) and cadmium \(Cd\)\.<\/p>/)
})

test("code, math, URL text and split chemical formulas survive the article pass", async () => {
  const tree = await parse(
    "`Pb Cd`\n\n```text\nAs Hg\n```\n\n<math><mi>Pb</mi></math>\n\n[https://example.test/Pb](https://example.test/Pb)\n\nMeasured Pb and Cd<sub>2</sub>O and Hg.\n\n<span>Pb</span><sub>2</sub>",
  )
  expandArticleMetals(tree)
  const html = toHtml(tree)
  assert.match(html, /<code>Pb Cd<\/code>/)
  assert.match(html, /As Hg/)
  assert.match(html, /<mi>Pb<\/mi>/)
  assert.match(html, />https:\/\/example.test\/Pb<\/a>/)
  assert.match(
    html,
    /Measured lead \(Pb\) and Cd<sub>2<\/sub>O and mercury \(Hg\)/,
  )
  assert.match(html, /<span>Pb<\/span><sub>2<\/sub>/)
})

test("table regeneration preserves every source and value and is idempotent", () => {
  const original = fs.readFileSync("wiki/ingredients/rice.md", "utf8")
  const generated = regenerate(original)
  assert.equal(regenerate(generated), generated)
  const cells = (text: string) =>
    text
      .split("\n")
      .filter((line) =>
        /^\| (?:Pb|Cd|iAs|tAs|tHg|Ni|Al|Cr|Sn|U|[A-Z][a-z]+.*\([A-Za-z]+\)) \|/.test(
          line,
        ),
      )
      .map((line) => line.slice(line.indexOf(" | ") + 3))
  assert.deepEqual(cells(generated), cells(original))
  assert.equal(generated.split("\n---\n")[0], original.split("\n---\n")[0])
  assert.match(generated, /\| Lead \(Pb\) \|/)
  assert.match(generated, /\| Inorganic arsenic \(iAs\) \|/)
})
