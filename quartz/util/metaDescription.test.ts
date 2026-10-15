import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import type { Root } from "hast"
import {
  buildMetaDescription,
  cleanDescription,
  firstArticleParagraph,
} from "./metaDescription"

async function parse(markdown: string): Promise<Root> {
  const p = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
  return (await p.run(p.parse(markdown))) as Root
}

test("fallback comes from the first article paragraph, omitting headings and excluded containers", async () => {
  const tree = await parse(
    '## Overview\n\n<aside><p>Author metadata needs verification.</p></aside>\n\n<div class="hmi-publication-note"><p>Internal note.</p></div>\n\n> Quoted sentence.\n\n- Listed sentence.\n\n| Metal | Result |\n| --- | --- |\n| Pb | Reported |\n\nSummary: Measured Pb occurrence varies by matrix.\n\nLater paragraph.',
  )
  assert.equal(
    firstArticleParagraph(tree),
    "Measured lead (Pb) occurrence varies by matrix.",
  )
  assert.equal(
    buildMetaDescription(tree, { title: "Occurrence" }),
    "Measured lead (Pb) occurrence varies by matrix.",
  )
})

test("ingredient templates use only populated metals and preserve the food and species", () => {
  const fm = {
    title: "Rice",
    type: "ingredient",
    contamination_profile: {
      Pb: { status: "populated" },
      Cd: { status: "pending" },
      iAs: { status: "populated" },
    },
  }
  assert.equal(
    buildMetaDescription(undefined, fm),
    "Lead and inorganic arsenic levels in Rice, with typical ranges, regulatory limits and cited sources.",
  )
  assert.doesNotMatch(buildMetaDescription(undefined, fm), /cadmium|\d/)
  assert.equal(
    buildMetaDescription(undefined, {
      title: "A food",
      type: "product-category",
      panel_metals: ["Pb"],
    }),
    "A food: heavy metal evidence and source references.",
  )
})

test("source templates use supplied authors and years without expanding surnames", () => {
  assert.equal(
    buildMetaDescription(undefined, {
      type: "source",
      title: "Pb in rice",
      authors: ["Ni H", "Cr J"],
      year: 2013,
    }),
    "lead (Pb) in rice measured by Ni H et al. (2013)",
  )
  const text = buildMetaDescription(undefined, {
    type: "source",
    title: "Arsenic Uptake, Toxicity, Detoxification, and",
    authors: ["Unknown authors"],
    year: 1981,
  })
  assert.equal(
    text,
    "Arsenic Uptake, Toxicity, Detoxification: source reference and publication details.",
  )
  assert.doesNotMatch(text, /Unknown|et al|1981/)
})

test("sources with missing author metadata can fall back to a genuine article paragraph", async () => {
  const tree = await parse(
    "## Overview\n\n<aside><p>Author metadata needs verification.</p></aside>\n\nMeasured arsenic occurrence differed by preparation.",
  )
  assert.equal(
    buildMetaDescription(tree, {
      type: "source",
      title: "Arsenic occurrence",
      authors: ["Unknown authors"],
    }),
    "Measured arsenic occurrence differed by preparation.",
  )
})

test("caps follow word boundaries with no ellipsis or added numbers", () => {
  const text = "Occurrence evidence and source references. ".repeat(8)
  const short = cleanDescription(text)
  assert.ok(short.length <= 155)
  assert.ok(text.startsWith(short))
  assert.ok(text[short.length] === " ")
  assert.doesNotMatch(short, /\.{3}$|…$|\d/)
  for (const word of ["Overview", "Scope", "Summary"])
    assert.equal(
      cleanDescription(`${word}: Lead occurrence.`),
      "Lead occurrence.",
    )
  assert.equal(
    cleanDescription("Lead \u2014 occurrence evidence."),
    "Lead: occurrence evidence.",
  )
})

test("bad explicit descriptions fall back to article prose without mutating frontmatter", async () => {
  const fm = {
    title: "Rice context",
    description: "Step Zero scaffold",
    socialDescription: "bulk-ingest record",
  }
  const before = structuredClone(fm)
  assert.equal(
    buildMetaDescription(
      await parse("Arsenic occurrence varies by preparation."),
      fm,
    ),
    "Arsenic occurrence varies by preparation.",
  )
  assert.deepEqual(fm, before)
})

test("dated audit snapshots use only their recorded frontmatter date for distinct descriptions", () => {
  assert.equal(
    buildMetaDescription(
      undefined,
      { title: "Audit dashboard", updated: "2026-05-17" },
      "audits/2026-05-17-baseline",
    ),
    "Audit dashboard for 2026-05-17: evidence coverage, source traceability and review checks.",
  )
  assert.doesNotMatch(
    buildMetaDescription(
      undefined,
      { title: "Audit dashboard", updated: "2026-05-17" },
      "audits/index",
    ),
    /2026/,
  )
})

test("the four requested pages get bounded descriptions with no status copy or invented author", () => {
  for (const slug of [
    "ingredients/rice",
    "products/aas-injectable",
    "ingredients/almond",
    "sources/authors1981-arsenic-uptake-toxicity-detoxification-and",
  ]) {
    const fm = matter(fs.readFileSync(`wiki/${slug}.md`, "utf8")).data
    const copy = structuredClone(fm)
    const description = buildMetaDescription(undefined, fm, slug)
    assert.ok(
      description.length > 0 && description.length <= 155,
      `${slug}: ${description}`,
    )
    assert.doesNotMatch(
      description,
      /Overview|Author metadata|scaffold|stub|bulk-ingest|Unknown authors|\u2014/i,
    )
    assert.deepEqual(fm, copy)
    for (const number of description.match(/\d+/g) ?? [])
      assert.ok(JSON.stringify(fm).includes(number))
  }
})
