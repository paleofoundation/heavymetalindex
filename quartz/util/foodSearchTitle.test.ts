import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import matter from "gray-matter"
import { foodHeading, foodSearchTitle } from "./foodSearchTitle"
import { HTML_TITLE_MAX } from "../../tools/lib/search-snippet.mjs"

test("ingredient titles use only populated metals and preserve species", () => {
  const fm = {
    type: "ingredient",
    title: "Rice",
    contamination_profile: {
      Pb: { status: "populated" },
      Cd: { status: "populated" },
      iAs: { status: "populated" },
      Hg: { status: "pending" },
    },
  }
  assert.equal(
    foodSearchTitle(fm),
    "Lead, Cadmium and Inorganic Arsenic in Rice | Heavy Metal Index",
  )
  assert.equal(foodHeading(fm), "Heavy metals in Rice")
})

test("empty and pending profiles fall back without inventing evidence", () => {
  for (const profile of [
    undefined,
    {},
    { Pb: { status: "pending" } },
    { Pb: null },
  ]) {
    assert.equal(
      foodSearchTitle({
        type: "ingredient",
        title: "Rice",
        contamination_profile: profile,
      }),
      "Heavy Metals in Rice | Heavy Metal Index",
    )
  }
})

test("products use the search template without a duplicate prefix", () => {
  for (const type of ["product", "product-category"]) {
    assert.equal(
      foodSearchTitle({ type, title: "Infant Formula" }),
      "Heavy Metals in Infant Formula | Heavy Metal Index",
    )
    assert.equal(
      foodHeading({ type, title: "Heavy Metals in Infant Formula" }),
      "Heavy metals in Infant Formula",
    )
  }
  assert.equal(foodSearchTitle({ type: "metal", title: "Lead" }), undefined)
  assert.equal(
    foodHeading({ type: "category-index", title: "Ingredients" }),
    undefined,
  )
})

test("the brand is appended only when it fits, keeping the food in long profiles", () => {
  const fm = {
    type: "ingredient",
    title: "Infant Rice Cereal",
    contamination_profile: {
      Pb: { status: "populated" },
      Cd: { status: "populated" },
      iAs: { status: "populated" },
    },
  }
  assert.equal(
    foodSearchTitle(fm),
    "Lead, Cadmium and Inorganic Arsenic in Infant Rice Cereal",
  )
  const rice = matter(fs.readFileSync("wiki/ingredients/rice.md", "utf8")).data
  assert.equal(foodSearchTitle(rice), rice.search_title)
})

test("all current ingredient and product titles meet the existing budget without new numbers", () => {
  for (const family of ["ingredients", "products"]) {
    for (const file of fs
      .readdirSync(`wiki/${family}`)
      .filter((name) => name.endsWith(".md"))) {
      const fm = matter(fs.readFileSync(`wiki/${family}/${file}`, "utf8")).data
      const title = foodSearchTitle(fm)
      if (!title) continue
      assert.ok(title.length <= HTML_TITLE_MAX, `${file}: ${title}`)
      for (const number of title.match(/\d+/g) ?? [])
        assert.ok(String(fm.title).includes(number), `${file}: ${number}`)
      assert.doesNotMatch(title, /\u2014/)
    }
  }
})
