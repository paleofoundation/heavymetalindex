import test from "node:test"
import assert from "node:assert/strict"
import { foodStructuredFields } from "./food-search-metadata.mjs"

test("structured fields preserve rendered metadata and decode attribute entities", () => {
  assert.deepEqual(
    foodStructuredFields(
      `<head><title>Ingredient Evidence: Rice &amp; Oats</title><meta content="Rice &amp; oats: ingredient evidence." name="description"></head>`,
    ),
    {
      title: "Ingredient Evidence: Rice & Oats",
      description: "Rice & oats: ingredient evidence.",
    },
  )
})
test("missing rendered fields fail instead of falling back to unsupported claims", () => {
  for (const html of [
    "",
    "<title>Rice</title>",
    '<meta name="description" content="Evidence">',
  ])
    assert.throws(() => foodStructuredFields(html), /Missing rendered/)
})
