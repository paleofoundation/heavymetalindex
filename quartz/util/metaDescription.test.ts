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

test("food descriptions distinguish ingredient and finished-product intent without unsupported promises", () => {
  for (const type of ["ingredient", "product", "product-category"]) {
    for (const profile of [
      undefined,
      { Pb: { status: "populated", n_studies: 9 } },
      { Pb: { status: "populated", n_studies: 2, typical_ppb: [1, 2] } },
    ]) {
      const description = buildMetaDescription(undefined, {
        type,
        title: "Rice",
        contamination_profile: profile,
        description: "Typical ranges and regulatory limits for lead.",
        socialDescription: "Typical ranges.",
      })
      assert.match(
        description,
        type === "ingredient"
          ? /ingredient heavy metal evidence/
          : /finished-product heavy metal evidence/,
      )
      assert.doesNotMatch(
        description,
        /typical ranges|regulatory limits|lead|\d|\u2014/i,
      )
    }
  }
})

test("source templates use supplied authors and years without expanding surnames", () => {
  assert.equal(
    buildMetaDescription(undefined, {
      type: "source",
      title: "Pb in rice",
      authors: ["Ni H", "Cr J"],
      year: 2013,
    }),
    "Lead (Pb) in rice measured by Ni H et al. (2013)",
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

test("source attribution uses et al. only for multiple usable author names", () => {
  const fm = { type: "source", title: "Pb in rice", year: 2013 }
  for (const authors of [
    ["Ni H"],
    ["Ni H", "Unknown authors"],
    ["Unknown authors", "Ni H"],
    "Ni H",
  ]) {
    assert.equal(
      buildMetaDescription(undefined, { ...fm, authors }),
      "Lead (Pb) in rice measured by Ni H (2013)",
    )
  }
  assert.equal(
    buildMetaDescription(undefined, { ...fm, authors: ["van Smith", "Cr J"] }),
    "Lead (Pb) in rice measured by van Smith et al. (2013)",
  )
  assert.equal(
    buildMetaDescription(undefined, { ...fm, authors: ["van Smith"] }),
    "Lead (Pb) in rice measured by van Smith (2013)",
  )
})

test("final capitalization changes only the first character, retaining title and author spellings", async () => {
  assert.equal(
    cleanDescription(
      "lead (Pb) in rice measured by van Smith (2013)",
      155,
      false,
    ),
    "Lead (Pb) in rice measured by van Smith (2013)",
  )
  assert.equal(
    buildMetaDescription(undefined, {
      type: "ingredient",
      title: "rice",
      contamination_profile: { Pb: { status: "populated", n_studies: 5 } },
    }),
    "Rice: ingredient heavy metal evidence and source references for supply-chain review.",
  )
  assert.equal(
    buildMetaDescription(await parse("cadmium occurrence varies by matrix."), {
      title: "Context",
    }),
    "Cadmium occurrence varies by matrix.",
  )
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

test("fallback excludes the whole generated history block regardless of its wording", async () => {
  for (const history of [
    "No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).",
    "An alternate history explanation that must never become article metadata.\n\nA second history paragraph.",
    "The five most recent substantive edits to this page.\n\nAnother paragraph about the commit record.",
  ]) {
    const tree = await parse(
      `<!-- BEGIN: hmi-page-history -->\n## Update history\n\n${history}\n<!-- END: hmi-page-history -->\n\nMeasured arsenic occurrence differs by preparation.`,
    )
    assert.equal(
      firstArticleParagraph(tree),
      "Measured arsenic occurrence differs by preparation.",
    )
  }
  const wrapped = await parse(
    '<section class="hmi-page-history"><p>An alternate history explanation.</p></section>\n\nMeasured lead occurrence varies by matrix.',
  )
  assert.equal(
    firstArticleParagraph(wrapped),
    "Measured lead occurrence varies by matrix.",
  )
  const legacy = await parse(
    "## Page history\n\nAn alternate history explanation.\n\n### Earlier edits\n\nMore history detail.\n\n## Findings\n\nMeasured cadmium occurrence varies by matrix.",
  )
  assert.equal(
    firstArticleParagraph(legacy),
    "Measured cadmium occurrence varies by matrix.",
  )
})

test("real source metadata is identical with recorded history or a no-git notice", async () => {
  for (const slug of [
    "sources/authors1981-arsenic-uptake-toxicity-detoxification-and",
    "sources/authors1982-total-mercury-concentrations-in-muscles",
  ]) {
    const { data, content } = matter(fs.readFileSync(`wiki/${slug}.md`, "utf8"))
    const noGit = content.replace(
      /<!-- BEGIN: hmi-page-history -->[\s\S]*?<!-- END: hmi-page-history -->/g,
      "<!-- BEGIN: hmi-page-history -->\n## Update history\n\nNo substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).\n<!-- END: hmi-page-history -->",
    )
    const expected = buildMetaDescription(await parse(content), data, slug)
    assert.equal(buildMetaDescription(await parse(noGit), data, slug), expected)
    assert.match(expected, /: source reference and publication details\.$/)
    assert.doesNotMatch(
      expected,
      /history|commit record|available in this build/i,
    )
  }
  assert.equal(
    cleanDescription("No substantive edit history is available in this build."),
    "",
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
