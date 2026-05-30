// Tests for the change-watch classifier + category mapper.
//
// The mapper is the part most likely to mislead a brand: a false "cocoa
// literature affects your infant formula" is worse than a miss, so the
// precision guard (distinctive commodity tokens only, generic form-words
// stoplisted) is tested explicitly.
//
// Run: npx tsx --test tools/build-change-watch.test.mjs

import { test } from "node:test"
import assert from "node:assert/strict"
import {
  mapRegulationToCategories,
  mapSynthesisToCategories,
  distinctiveTokens,
  shiftFactor,
  repValue,
} from "./build-change-watch.mjs"

function product(slug, { targets = [], metals = [], regs = [] } = {}) {
  return {
    slug: `products/${slug}`,
    label: slug,
    applicable_regulations: regs.map((r) => (r.startsWith("regulations/") ? r : `regulations/${r}`)),
    ingredient_targets: targets,
    ingredient_tokens: targets.map(distinctiveTokens),
    metals: new Set(metals),
    matrices: distinctiveTokens(slug),
  }
}

test("repValue: range reduces to its upper bound; scalar passes through", () => {
  assert.equal(repValue([10, 220]), 220)
  assert.equal(repValue(50), 50)
  assert.equal(repValue(null), null)
})

test("shiftFactor: detects a >=2x move either direction", () => {
  assert.equal(shiftFactor(10, 40), 4) // up
  assert.equal(shiftFactor(40, 10), 4) // down, reported as magnitude
  assert.ok(shiftFactor([10, 100], [10, 250]) >= 2)
  assert.equal(shiftFactor(0, 10), null) // can't divide by zero
})

test("mapSynthesis: distinctive commodity token matches (rice → rice cereal)", () => {
  const products = [
    product("baby-cereals-dry-rice-based", { targets: ["rice-flour", "rice-cereal"], metals: ["iAs", "Cd", "Pb"] }),
  ]
  const hits = mapSynthesisToCategories("rice", "iAs", [], products)
  assert.equal(hits.length, 1)
  assert.equal(hits[0].slug, "products/baby-cereals-dry-rice-based")
  assert.equal(hits[0].match_strength, "ingredient")
})

test("mapSynthesis: PRECISION — cocoa does NOT match infant formula via 'powder'", () => {
  const products = [
    product("infant-formula-powder-non-soy", {
      targets: ["infant-formula-powder", "non-soy-protein-source", "vitamin-mineral-premix"],
      metals: ["Al", "Pb", "Cd"],
    }),
  ]
  // Even passing the noisy alias through, the mapper must not attribute cocoa.
  const hits = mapSynthesisToCategories("cocoa", "Al", ["cocoa powder"], products)
  assert.equal(hits.length, 0)
})

test("mapSynthesis: metal gate — no match when the metal is not a concern", () => {
  const products = [product("baby-cereals-dry-rice-based", { targets: ["rice-flour"], metals: ["iAs"] })]
  assert.equal(mapSynthesisToCategories("rice", "Ni", [], products).length, 0)
})

test("mapRegulation: direct applicable_regulations match is 'direct' strength", () => {
  const products = [
    product("baby-cereals-dry-rice-based", { targets: ["rice-flour"], metals: ["iAs", "Pb"], regs: ["fda-iAs-rice-cereal-100ppb"] }),
  ]
  const reg = { slug: "regulations/fda-iAs-rice-cereal-100ppb", metals: ["iAs"], matrices: ["rice-cereal"] }
  const hits = mapRegulationToCategories(reg, products, {})
  assert.equal(hits.length, 1)
  assert.equal(hits[0].match_strength, "direct")
})

test("distinctiveTokens: strips generic form-words, keeps the commodity", () => {
  assert.deepEqual([...distinctiveTokens("infant-formula-powder")], [])
  assert.deepEqual([...distinctiveTokens("rice-flour")], ["rice", "flour"])
  assert.ok(distinctiveTokens("cocoa").has("cocoa"))
})
