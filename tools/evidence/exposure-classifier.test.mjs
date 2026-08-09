// Unit tests for the occurrence-vs-exposure gate. Run via `npm test`.
//
// Each case is a real row the gate met on the corpus (see
// data/evidence/standards-exposure-exclusions.csv and the 2026-08-09 workbench
// audit): the two named poisons, plus the mixed-source cases that prove the gate
// keeps genuine food concentrations while dropping biomarkers / intake doses /
// model outputs sharing the same ppb column.

import test, { describe } from "node:test"
import assert from "node:assert"

import { classifyExposure, resolveOverride } from "./exposure-classifier.mjs"

describe("exposure-classifier", () => {
  test("EXCLUDES a hair biomarker row (tatsuta2024 tHg 1020 ppb poison)", () => {
    const v = classifyExposure({
      matrices: ["dietary-intake", "infant-formula", "baby-food-puree", "hair"],
      statisticScope: "Hair THg (median ppm, 5-95th, % over EPA RfD 1.0 ppm equivalent)",
    })
    assert.equal(v.exclude, true)
    assert.equal(v.rule, "row-scope")
  })

  test("EXCLUDES a pure risk-model source (shibata2016 iAs 2568 ppb poison)", () => {
    const v = classifyExposure({
      matrices: ["risk-assessment-model", "intake-estimate"],
      statisticScope: "Rice cereal iAs concentration (input, derived from FDA survey)",
    })
    assert.equal(v.exclude, true)
    assert.equal(v.rule, "source-matrices")
  })

  test("KEEPS a genuine food concentration from a total-diet study (fechner2022, fixed frontmatter)", () => {
    const v = classifyExposure({
      matrices: ["dietary-intake", "total-diet-study", "ready-to-eat-food"],
      statisticScope: "Fish, seafood, invertebrates: mean 0.100 mg/kg (100 ppb; median 0.045)",
    })
    assert.equal(v.exclude, false)
  })

  test("mixed source: KEEPS breast-milk concentration, DROPS the hazard-quotient row (lin2023)", () => {
    const keep = classifyExposure({
      matrices: ["breast-milk"],
      statisticScope: "Breast milk Pb (n=228): mean 6.49 +/- 5.23 ug/L, range 0.55-49.70 ug/L",
    })
    assert.equal(keep.exclude, false)
    const drop = classifyExposure({
      matrices: ["breast-milk"],
      statisticScope: "Pb hazard quotient (against EFSA BMDL01 of 0.5 ug/kg-BW/day): 50th pct 0.989",
    })
    assert.equal(drop.exclude, true)
    assert.equal(drop.rule, "row-scope")
  })

  test("DROPS a ratio-mis-parsed-as-ppb artifact (kim2018 '270x the human daily intake')", () => {
    const v = classifyExposure({
      matrices: ["pet-food"],
      statisticScope: "Pb: red-meat maximum 270x the human daily intake. Poultry median 6x human",
    })
    assert.equal(v.exclude, true)
  })

  test("DROPS an estimated weekly intake, per body weight (alsulaiti2023 EWI)", () => {
    const v = classifyExposure({
      matrices: ["fish", "seafood"],
      statisticScope: "MeHg estimated weekly intake (EWI): p95 1.91 ug/kg bw/week",
    })
    assert.equal(v.exclude, true)
  })

  test("KEEPS a plain measured food concentration (canned tuna Cd)", () => {
    const v = classifyExposure({
      matrices: ["fish"],
      statisticScope: "Overall canned tuna (n=48): Cd 0.000-0.007, mean 0.0029 mg/kg ww",
      basis: "as_sold",
    })
    assert.equal(v.exclude, false)
  })

  test("KEEPS a survey occurrence row with no exposure signal", () => {
    const v = classifyExposure({
      matrices: ["infant-formula"],
      statisticScope: "Total mercury in as-sold powder, FSA 2016 survey",
      basis: "as_sold",
    })
    assert.equal(v.exclude, false)
  })

  test("override keep force-admits; override exclude force-drops", () => {
    const overrides = new Map([
      ["srcA|tHg|slugX", "keep"],
      ["srcB||", "exclude"],
    ])
    assert.equal(resolveOverride("srcA", "tHg", "slugX", overrides), "keep")
    assert.equal(resolveOverride("srcB", "Pb", "anything", overrides), "exclude") // wildcard metal+slug
    assert.equal(resolveOverride("srcC", "Pb", "slugY", overrides), null)
  })
})
