import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import matter from "gray-matter"
import { isLowValuePage, isNoindex } from "./low-value-page.mjs"

const source = { type: "source", title: "A source", authors: ["A verified author"] }
const food = { type: "ingredient", title: "An ingredient" }

test("citation review issues suppress pages independently of other evidence", () => {
  assert.equal(isLowValuePage(source, "sources/a-source"), false)
  for (const fm of [
    { ...source, authors: ["Unknown authors"] },
    { ...source, title: "Unknown" },
    { ...source, status: "tier1-stub" },
    { ...source, evidence_tier: "pending" },
    { ...source, status: "duplicate" },
  ])
    assert.equal(isLowValuePage(fm, "sources/a-source"), true)
})

test("routing coverage and empty populated cells do not establish promoted evidence", () => {
  for (const type of ["ingredient", "product", "product-category"]) {
    const fm = {
      ...food,
      type,
      sources: 1,
      provisional_source: "[[sources/fda2022-tds-elements-fy2018-fy2020]]",
    }
    assert.equal(isLowValuePage(fm, "ingredients/example"), true)
    assert.equal(
      isLowValuePage(
        {
          ...fm,
          contamination_profile: {
            Pb: { status: "populated", n_studies: 0, typical_ppb: [null, null] },
          },
        },
        "ingredients/example",
      ),
      true,
    )
  }
})

test("real measured profiles and promoted source observations stay indexable", () => {
  for (const slug of ["ingredients/rice", "ingredients/cod", "ingredients/shrimp"]) {
    const page = matter(fs.readFileSync(`wiki/${slug}.md`, "utf8"))
    assert.equal(isLowValuePage(page.data, slug, { body: page.content }), false, slug)
    assert.equal(isLowValuePage(page.data, slug, { indexingBody: page.content }), false, slug)
  }
  const almond = matter(fs.readFileSync("wiki/ingredients/almond.md", "utf8"))
  assert.equal(isLowValuePage(almond.data, "ingredients/almond"), false)
  // Its current body still declares itself a structural node, an independent rule.
  assert.equal(isLowValuePage(almond.data, "ingredients/almond", { body: almond.content }), true)
  assert.equal(
    isLowValuePage(
      { ...food, contributing_sources: ["sources/fda2022-tds-elements-fy2018-fy2020"] },
      "ingredients/example",
    ),
    false,
  )
  assert.equal(isLowValuePage({ ...food, promoted_sources: [" "] }, "ingredients/example"), true)
})

test("scaffold and bulk-ingest body templates suppress otherwise titled pages", () => {
  for (const slug of [
    "products/aas-injectable",
    "products/rice-snacks-crackers",
    "sources/zhu2024-mycotoxins-and-heavy-metals-in-rice-maize",
  ]) {
    const page = matter(fs.readFileSync(`wiki/${slug}.md`, "utf8"))
    assert.equal(isLowValuePage(page.data, slug, { body: page.content }), true, slug)
  }
  for (const body of [
    "> **Provisional scaffold.** This page was created automatically.",
    "This page is a Step 0 lock scaffold for a category row.",
    "This is a structural ingredient node created so product pages can link to a real wiki target.",
  ])
    assert.equal(isLowValuePage(source, "sources/a-source", { body }), true)
})

test("historical scaffold flags and discussion do not permanently suppress revised articles", () => {
  const fm = {
    ...food,
    provisional_scaffold: true,
    created_by: "cat4_step0_scaffold",
    promoted_sources: ["sources/fda2022-tds-elements-fy2018-fy2020"],
  }
  assert.equal(
    isLowValuePage(fm, "ingredients/example", {
      body: "The original scaffold has been replaced with cited findings.",
    }),
    false,
  )
  assert.equal(
    isLowValuePage(source, "sources/a-source", {
      body: "This study compares scaffolds in tissue engineering.",
    }),
    false,
  )
  assert.equal(
    isLowValuePage(source, "sources/a-source", {
      body: "<!-- BEGIN: hmi-page-history -->\nThis page is a scaffolded entry in the previous revision.\n<!-- END: hmi-page-history -->",
    }),
    false,
  )
  assert.equal(
    isLowValuePage(source, "sources/a-source", {
      body: "```text\nThis source page is a mechanical bulk-ingest record.\n```",
    }),
    false,
  )
})

test("register-backed product concentrations count as promoted evidence, regulatory caps alone do not", () => {
  const formula = matter(fs.readFileSync("wiki/products/infant-formula-powder-non-soy.md", "utf8"))
  assert.equal(
    isLowValuePage(formula.data, "products/infant-formula-powder-non-soy", {
      body: formula.content,
    }),
    false,
  )
  const olive = matter(fs.readFileSync("wiki/products/olive-oil.md", "utf8"))
  const block = olive.content.match(
    /<!-- BEGIN: hmi-hmtc-evidence-summary -->[\s\S]*?<!-- END: hmi-hmtc-evidence-summary -->/,
  )[0]
  assert.equal(
    isLowValuePage({ title: "Olive oil", type: "product-category" }, "products/olive-oil", {
      body: block,
    }),
    true,
  )
})

test("operational paths include descendants without matching unrelated words", () => {
  for (const slug of [
    "audits",
    "audits/index",
    "audits/baseline",
    "sprint-status",
    "roadmap",
    "login",
    "signup",
    "corpus/promotion-queue",
    "app",
    "app/index",
    "app/query",
    "lint",
    "lint/report",
  ]) {
    assert.equal(isLowValuePage({ title: "An operational page" }, slug), true, slug)
  }
  for (const slug of [
    "corpus/index",
    "appetite",
    "roadmap-study",
    "methodology/scaffold-review",
    "products/categories/grains",
    "products/categories",
    "ingredients/categories/index",
  ]) {
    assert.equal(
      isLowValuePage({ title: "A public page", type: "category-index" }, slug),
      false,
      slug,
    )
  }
})

test("explicit noindex values retain the existing boolean and string meanings", () => {
  for (const value of [true, "true", "yes", "1", " YES "]) assert.equal(isNoindex(value), true)
  for (const value of [false, "false", "no", "0", undefined, 1])
    assert.equal(isNoindex(value), false)
})
