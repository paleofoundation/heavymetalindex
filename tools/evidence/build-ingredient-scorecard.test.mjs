// Tests for the deterministic ingredient completeness scorecard.
//
// Asserts the four properties the spec requires of the generator:
//   1. byte-stable re-runs (idempotent block application + identical render),
//   2. no composite 0-100 score is ever emitted,
//   3. a known page's chips match hand-computed counts,
//   4. tier-unset degradation when the consumption-tier file is absent (and a
//      full D1/D11 render once a tier table is supplied).

import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import matter from "gray-matter"
import { buildContext, scoreIngredient, renderBlock, slugsFor } from "./build-ingredient-scorecard.mjs"

const repoRoot = process.cwd()
// Frozen legacy fixture: live rice now uses question-contract coverage.
const ricePath = path.join(repoRoot, "data/evidence/contracts/pilot-2026-10-17/before/wiki/ingredients/rice.md")
const riceRaw = fs.readFileSync(ricePath, "utf8")
// strip any already-applied scorecard block so the test scores the source page
const riceContent = riceRaw.replace(/<!-- hmi-completeness-scorecard -->[\s\S]*?<!-- \/hmi-completeness-scorecard -->\n?/g, "")
const riceFm = matter(riceContent).data

test("tier-unset degradation when consumption-tiers.csv is absent", () => {
  // point the tier table at a path that does not exist
  const ctx = buildContext({ repoRoot, tierTablePath: path.join(os.tmpdir(), "nonexistent-tiers-xyz.csv") })
  assert.equal(ctx.tierTablePresent, false)
  const r = scoreIngredient("rice", riceFm, riceContent, ctx)
  // D1 depth degrades to tier-unset; every other dimension still renders.
  assert.equal(r.dims.D1.status, "tier-unset")
  assert.match(r.dims.D1.label, /tier: unset/)
  // D11 depth-gate degrades but verdict + blocking list still render.
  assert.match(r.dims.D11.missing, /consumption tier unset/)
  // other dimensions are fully populated (not degraded)
  for (const k of ["D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"]) {
    assert.ok(r.dims[k] && typeof r.dims[k].status === "string" && r.dims[k].status.length > 0, `${k} should render`)
  }
})

test("legacy fixture chips match hand-computed counts (rice)", () => {
  const ctx = buildContext({ repoRoot, tierTablePath: path.join(os.tmpdir(), "nonexistent-tiers-xyz.csv") })
  const r = scoreIngredient("rice", riceFm, riceContent, ctx)

  // breadth: HMTc-10 analytes populated with n_studies>0. rice keys Pb,Cd,iAs,
  // tAs,tHg,Ni,Al,Sn (8 of the list); MeHg and Cr-VI absent -> 8/10.
  assert.equal(r.dims.D1.breadth, 8)
  assert.match(r.dims.D1.have, /8\/10 HMTc analytes/)

  // total_n: sum of n_studies across the whole profile.
  // Pb5+Cd8+iAs8+tHg5+Ni23+Al11+Cr3+Sn11+tAs6+U0 = 80
  assert.equal(r.dims.D1.totalN, 80)
  assert.match(r.dims.D1.have, /total n=80/)

  // D6 speciation: rice declares iAs/tAs/tHg, no bare As/Hg cell -> OK.
  assert.equal(r.dims.D6.status, "OK")

  // D7: rice declares no basis tokens -> GAP naming the populated cells.
  assert.equal(r.dims.D7.status, "GAP")
})

test("source set derives from wiki/sources frontmatter ingredients arrays", () => {
  const ctx = buildContext({ repoRoot })
  const set = ctx.sourcesByIngredient.get("rice") || []
  assert.ok(set.length > 0, "rice should have a non-empty source set")
  // every member must actually name rice in its ingredients[]
  for (const s of set) assert.ok(s.ingredients.includes("rice"))
})

test("slugsFor flattens nested wikilink arrays", () => {
  assert.deepEqual(slugsFor([[["ingredients/rice"]], [["ingredients/breast-milk"]]], "ingredients"), ["rice", "breast-milk"])
  assert.deepEqual(slugsFor(["[[products/rice-milk]]", "[[products/crackers]]"], "products"), ["rice-milk", "crackers"])
})

test("no composite 0-100 score is emitted in the rendered block", () => {
  const ctx = buildContext({ repoRoot, tierTablePath: path.join(os.tmpdir(), "nonexistent-tiers-xyz.csv") })
  const r = scoreIngredient("rice", riceFm, riceContent, ctx)
  const block = renderBlock(r)
  assert.doesNotMatch(block, /\b\d{1,3}\s*\/\s*100\b/, "no N/100 composite")
  assert.doesNotMatch(block, /overall\s+(score|completeness)/i, "no overall score")
  assert.doesNotMatch(block, /composite\s+(score|%)/i, "no composite score")
  // the block is explicit that it is not composite / not LLM-judged
  assert.match(block, /no score is composite/i)
})

test("D11 never displays or back-solves a P-value (Part 19 firewall)", () => {
  const ctx = buildContext({ repoRoot, tierTablePath: path.join(os.tmpdir(), "nonexistent-tiers-xyz.csv") })
  const r = scoreIngredient("rice", riceFm, riceContent, ctx)
  const d11 = `${r.dims.D11.have} ${r.dims.D11.missing}`
  assert.doesNotMatch(d11, /\bP\d{1,3}\b/, "no Pxx percentile")
  assert.doesNotMatch(d11, /\bppb\b/i, "no concentration value")
})

test("block application is idempotent and render is byte-stable", () => {
  const ctx = buildContext({ repoRoot, tierTablePath: path.join(os.tmpdir(), "nonexistent-tiers-xyz.csv") })
  const r1 = scoreIngredient("rice", riceFm, riceContent, ctx)
  const block1 = renderBlock(r1)
  // re-score and re-render -> identical bytes
  const r2 = scoreIngredient("rice", riceFm, riceContent, ctx)
  const block2 = renderBlock(r2)
  assert.equal(block1, block2, "two renders of the same inputs must be byte-identical")

  // applying the block under the H1 twice must converge (idempotent)
  const apply = (content, block) => {
    const open = content.indexOf("<!-- hmi-completeness-scorecard -->")
    if (open !== -1) {
      const close = content.indexOf("<!-- /hmi-completeness-scorecard -->", open)
      const end = close + "<!-- /hmi-completeness-scorecard -->".length
      return content.slice(0, open) + block + content.slice(end)
    }
    const h1 = content.match(/^#\s+.*$/m)
    const idx = h1.index + h1[0].length
    return content.slice(0, idx) + "\n\n" + block + "\n" + content.slice(idx)
  }
  const once = apply(riceContent, block1)
  const twice = apply(once, block1)
  assert.equal(once, twice, "applying the block twice must be a no-op the second time")
})

test("tier table present: D1 renders against the tier, not tier-unset", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "tiers-"))
  const tierFile = path.join(dir, "consumption-tiers.csv")
  fs.writeFileSync(
    tierFile,
    "ingredient_slug,consumption_tier,g_per_day,source,assembled_at\nrice,staple,120,FAO-FBS-test,2026-06-10\n",
  )
  const ctx = buildContext({ repoRoot, tierTablePath: tierFile })
  assert.equal(ctx.tierTablePresent, true)
  const r = scoreIngredient("rice", riceFm, riceContent, ctx)
  assert.match(r.dims.D1.label, /tier: staple/)
  assert.notEqual(r.dims.D1.status, "tier-unset")
  // staple bar is total n>=40; rice has 80 -> not below-tier on depth
  assert.notEqual(r.dims.D1.status, "below-tier")
  fs.rmSync(dir, { recursive: true, force: true })
})

test("adopted rice cannot be scored by the legacy count-based API", () => {
  const raw = fs.readFileSync(path.join(repoRoot, "wiki/ingredients/rice.md"), "utf8")
  assert.throws(() => scoreIngredient("rice", matter(raw).data, raw, {}), /question-record coverage/)
})
