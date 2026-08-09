// Unit tests for the scientific-notation-aware number parse in the source-page
// extractor. Run via `npm test`. Regression guard for the shibata2016 1e6 defect:
// "7.48 × 10⁻⁶ mg/L" must parse as 7.48e-6, not 7.48 (which the mg/L→ppb step
// then turned into 7480 ppb).

import test, { describe } from "node:test"
import assert from "node:assert"

import {
  extractLabeledWithPos,
  numFromExpMatch,
  parseSuperscriptInt,
} from "./extract-source-values.mjs"

const approx = (a, b) => Math.abs(a - b) <= Math.abs(b) * 1e-9 + 1e-15

describe("numFromExpMatch / parseSuperscriptInt", () => {
  test("plain mantissa (no exponent)", () => {
    assert.equal(numFromExpMatch("7480", null, null, null), 7480)
    assert.equal(numFromExpMatch("1,975", null, null, null), 1975)
    assert.equal(numFromExpMatch("0.045", null, null, null), 0.045)
  })
  test("e-notation exponent", () => {
    assert.ok(approx(numFromExpMatch("7.48", "-6", null, null), 7.48e-6))
    assert.equal(numFromExpMatch("1", "3", null, null), 1000)
  })
  test("caret exponent", () => {
    assert.ok(approx(numFromExpMatch("2.83", null, "-4", null), 2.83e-4))
  })
  test("superscript exponent", () => {
    assert.equal(parseSuperscriptInt("⁻⁶"), -6)
    assert.equal(parseSuperscriptInt("⁶"), 6)
    assert.ok(approx(numFromExpMatch("7.48", null, null, "⁻⁶"), 7.48e-6))
    assert.equal(numFromExpMatch("5", null, null, "⁶"), 5_000_000)
  })
})

describe("extractLabeledWithPos — scientific notation", () => {
  test("shibata2016 real string: mean 7.48 × 10⁻⁶ mg/L", () => {
    const got = extractLabeledWithPos("Normal distribution, mean 7.48 × 10⁻⁶ mg/L and standard deviation")
    const mean = got.find((v) => v.key === "mean")
    assert.ok(mean, "mean captured")
    assert.ok(approx(mean.rawValue, 7.48e-6), `rawValue was ${mean.rawValue}`)
    assert.equal(mean.adjacentUnit, "mg/L")
  })

  test("e-notation with unit: max 7.48e-6 mg/L", () => {
    const got = extractLabeledWithPos("max 7.48e-6 mg/L")
    const max = got.find((v) => v.key === "max")
    assert.ok(approx(max.rawValue, 7.48e-6))
    assert.equal(max.adjacentUnit, "mg/L")
  })

  test("caret form: max 2.83 x 10^-4 mg/kg", () => {
    const got = extractLabeledWithPos("max 2.83 x 10^-4 mg/kg")
    const max = got.find((v) => v.key === "max")
    assert.ok(approx(max.rawValue, 2.83e-4))
    assert.equal(max.adjacentUnit, "mg/kg")
  })

  test("plain values still parse and keep their unit", () => {
    const got = extractLabeledWithPos("mean 119 µg/kg, max 1,975 µg/kg")
    assert.equal(got.find((v) => v.key === "mean").rawValue, 119)
    assert.equal(got.find((v) => v.key === "max").rawValue, 1975)
    assert.equal(got.find((v) => v.key === "mean").adjacentUnit, "µg/kg")
  })

  test("does NOT misread a fold-ratio as an exponent (kim2018 '270× the daily intake')", () => {
    const got = extractLabeledWithPos("max 270× the human daily intake")
    const max = got.find((v) => v.key === "max")
    assert.equal(max.rawValue, 270) // no ×10 → no exponent applied
  })

  test("does NOT misread a following word starting with e as e-notation", () => {
    const got = extractLabeledWithPos("mean 5 elements were tested")
    assert.equal(got.find((v) => v.key === "mean").rawValue, 5)
  })
})
