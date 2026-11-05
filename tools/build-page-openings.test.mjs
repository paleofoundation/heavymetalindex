import test from "node:test"
import assert from "node:assert/strict"
import { OPENINGS_IMPROVEMENT_NOTE, openingBaselineDecision } from "./build-page-openings.mjs"

test("a compliant baselined opening passes and a new finding fails", () => {
  const improved = openingBaselineDecision("wiki/ingredients/cocoa.md", [], true)
  assert.deepEqual(improved.problems, [])
  assert.deepEqual(improved.improvements, ["wiki/ingredients/cocoa.md: opening is compliant"])
  assert.match(OPENINGS_IMPROVEMENT_NOTE, /does not need to edit/)

  const stillDebt = openingBaselineDecision(
    "wiki/ingredients/cocoa.md",
    ["wiki/ingredients/cocoa.md: missing Lead-style opening (quick_read)"],
    true,
  )
  assert.deepEqual(stillDebt.problems, [])
  assert.deepEqual(stillDebt.improvements, [])

  const worse = openingBaselineDecision(
    "wiki/ingredients/rice.md",
    ["wiki/ingredients/rice.md: missing Lead-style opening (quick_read)"],
    false,
  )
  assert.deepEqual(worse.problems, ["wiki/ingredients/rice.md: missing Lead-style opening (quick_read)"])
  assert.deepEqual(worse.improvements, [])
})
