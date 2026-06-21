import { test } from "node:test"
import assert from "node:assert/strict"
import {
  classifyCell,
  parseContaminationProfile,
} from "./audit-ingredient-confidence.mjs"

// Band rule (docs/page-templates.md lines 180-182):
//   n in [1,2] -> low; n in [3,10] -> medium; n > 10 -> high.

test("over-confident: high declared at n_studies=1 is flagged over", () => {
  const r = classifyCell({ nStudies: 1, confidence: "high" })
  assert.equal(r.expected, "low")
  assert.equal(r.direction, "over")
})

test("under-confident: low declared at n_studies=12 is flagged under", () => {
  const r = classifyCell({ nStudies: 12, confidence: "low" })
  assert.equal(r.expected, "high")
  assert.equal(r.direction, "under")
})

test("compliant: medium declared at n_studies=7 is not flagged", () => {
  const r = classifyCell({ nStudies: 7, confidence: "medium" })
  assert.equal(r.expected, "medium")
  assert.equal(r.direction, null)
})

test("band edges classify correctly", () => {
  assert.equal(classifyCell({ nStudies: 2, confidence: "low" }).direction, null)
  assert.equal(classifyCell({ nStudies: 3, confidence: "medium" }).direction, null)
  assert.equal(classifyCell({ nStudies: 10, confidence: "medium" }).direction, null)
  assert.equal(classifyCell({ nStudies: 11, confidence: "high" }).direction, null)
  // n=3 declared low is under (expected medium)
  assert.equal(classifyCell({ nStudies: 3, confidence: "low" }).direction, "under")
  // n=10 declared high is over (expected medium)
  assert.equal(classifyCell({ nStudies: 10, confidence: "high" }).direction, "over")
})

test("non-auditable cells return null", () => {
  // data gap: populated n=0, confidence null
  assert.equal(classifyCell({ nStudies: 0, confidence: null }), null)
  // populated but confidence null (no declared value to contradict)
  assert.equal(classifyCell({ nStudies: 5, confidence: null }), null)
  // non-numeric n
  assert.equal(classifyCell({ nStudies: NaN, confidence: "high" }), null)
})

test("parser extracts metal/status/confidence/n_studies from a profile block", () => {
  const fm = [
    "title: Test",
    "contamination_profile:",
    "  Pb:",
    "    status: populated",
    "    confidence: high",
    "    n_studies: 1",
    "  Cd:",
    "    status: populated",
    "    confidence: null",
    "    n_studies: 0",
    "  iAs:",
    "    status: pending",
    "    confidence: null",
    "    n_studies: 0",
    "audience: [regulator]",
  ].join("\n")
  const blocks = parseContaminationProfile(fm)
  assert.equal(blocks.length, 3)
  const pb = blocks.find((b) => b.metal === "Pb")
  assert.equal(pb.status, "populated")
  assert.equal(pb.confidence, "high")
  assert.equal(pb.nStudies, 1)
  const cd = blocks.find((b) => b.metal === "Cd")
  assert.equal(cd.confidence, null)
  // The pending Cd-like fixture (iAs) parses but would be skipped by status filter.
  assert.equal(blocks.find((b) => b.metal === "iAs").status, "pending")
})
