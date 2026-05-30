// Tests for the supply-chain risk-map combination logic.
// Run: npx tsx --test tools/lib/risk-map.test.mjs

import { test } from "node:test"
import assert from "node:assert/strict"
import { buildContaminationIndex, buildRiskMap } from "./risk-map.mjs"

const RECORDS = [
  {
    ingredient: "rice",
    title: "Rice",
    aliases: ["brown rice", "white rice"],
    page_url: "https://heavymetalindex.com/ingredients/rice",
    metals: {
      iAs: { status: "populated", typical_ppb: [80, 200], p95_ppb: 323, confidence: "high", n_studies: 6 },
      Pb: { status: "populated", typical_ppb: [0, 0], p95_ppb: 0, confidence: "high", n_studies: 61 },
    },
  },
  {
    ingredient: "cocoa",
    title: "Cocoa",
    aliases: ["cacao"],
    page_url: "https://heavymetalindex.com/ingredients/cocoa",
    metals: {
      Cd: { status: "populated", typical_ppb: [200, 800], p95_ppb: 1200, confidence: "medium", n_studies: 9 },
      iAs: { status: "pending" },
    },
  },
  {
    ingredient: "spinach",
    title: "Spinach",
    aliases: [],
    page_url: "https://heavymetalindex.com/ingredients/spinach",
    metals: {
      Cd: { status: "populated", typical_ppb: [50, 150], p95_ppb: 300, confidence: "medium", n_studies: 4 },
    },
  },
]

test("resolve: by slug, by alias, by distinctive token", () => {
  const idx = buildContaminationIndex(RECORDS)
  assert.equal(idx.resolve("rice").ingredient.ingredient, "rice")
  assert.equal(idx.resolve("cacao").ingredient.ingredient, "cocoa")
  assert.equal(idx.resolve("brown rice").ingredient.ingredient, "rice") // alias
  assert.equal(idx.resolve("organic brown rice").ingredient.ingredient, "rice") // token containment
  assert.equal(idx.resolve("unobtainium"), null)
})

test("buildRiskMap: ranks drivers by p95 desc and computes share", () => {
  const idx = buildContaminationIndex(RECORDS)
  const map = buildRiskMap(["cocoa", "spinach"], idx)
  const cd = map.metals.Cd
  assert.equal(cd.top_driver, "cocoa") // 1200 > 300
  assert.equal(cd.drivers[0].ingredient, "cocoa")
  assert.equal(cd.drivers[1].ingredient, "spinach")
  // shares sum to ~1
  const sum = cd.drivers.reduce((s, d) => s + d.share, 0)
  assert.ok(Math.abs(sum - 1) < 0.01)
})

test("buildRiskMap: a zero-level metal is not treated as a risk driver", () => {
  const idx = buildContaminationIndex(RECORDS)
  const map = buildRiskMap(["rice"], idx)
  // rice Pb is 0 p95 -> not a driver; iAs is the real one
  assert.ok(!map.metals.Pb, "Pb at 0 should not rank")
  assert.equal(map.metals.iAs.top_driver, "rice")
})

test("buildRiskMap: pending sub-blocks are ignored; unresolved captured", () => {
  const idx = buildContaminationIndex(RECORDS)
  const map = buildRiskMap(["cocoa", "ghost-ingredient"], idx)
  assert.ok(!map.metals.iAs, "cocoa iAs is pending -> no iAs rank")
  assert.deepEqual(map.unresolved, ["ghost-ingredient"])
  assert.equal(map.resolved_count, 1)
})

test("buildRiskMap: metals come out in HMTc-priority order", () => {
  const idx = buildContaminationIndex(RECORDS)
  const map = buildRiskMap(["rice", "cocoa", "spinach"], idx)
  // Pb(0) drops out; expect Cd before iAs? order is Pb,Cd,iAs,... so Cd then iAs
  assert.deepEqual(map.metals_ranked, ["Cd", "iAs"])
})
