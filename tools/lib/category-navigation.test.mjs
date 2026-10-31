import test from "node:test"
import assert from "node:assert/strict"
import { categoryIntro } from "./category-navigation.mjs"
import { ingredientGroup } from "./ingredient-categories.mjs"

test("intros derive page counts and examples only from supplied children", () => {
  assert.equal(
    categoryIntro([{ title: "Rice" }, { title: "Corn" }], "ingredient"),
    "This category contains 2 ingredient pages. Entries include Rice; Corn.",
  )
  assert.equal(
    categoryIntro([{ title: "Water" }], "product"),
    "This category contains 1 product page. Entries include Water.",
  )
  assert.equal(
    categoryIntro([{ title: "A very long scientific title. With punctuation." }], "source"),
    "This category contains 1 source page. The entries below are grouped by the jurisdictions recorded on those pages.",
  )
  assert.ok(!categoryIntro([{ title: "Fish \u2014 freshwater" }], "product").includes("\u2014"))
  assert.ok(!categoryIntro([{ title: "[label](url)" }], "ingredient").includes("[label]"))
})

test("ingredient hub rollups preserve the existing category mapping", () => {
  assert.equal(ingredientGroup("grain"), "Grains & cereals")
  assert.equal(ingredientGroup("grain-product"), "Grains & cereals")
  assert.equal(ingredientGroup("seafood-composite"), "Fish & seafood")
  assert.equal(ingredientGroup("not-a-category"), "Other")
  assert.equal(ingredientGroup("unclassified", "almond"), "Nuts & seeds")
  assert.equal(ingredientGroup("unclassified", "ingredients/almond"), "Nuts & seeds")
})
