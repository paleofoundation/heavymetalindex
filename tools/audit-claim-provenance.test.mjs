import test from "node:test"
import assert from "node:assert/strict"
import { indexSections, sectionAt } from "./audit-claim-provenance.mjs"

function legacySection(text, offset) {
  let lastStart = 0
  let title = "(opening)"
  const re = /^##\s+(.+)$/gm
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index >= offset) break
    lastStart = m.index
    title = m[1].trim()
  }
  const endRe = /^##\s+.+$/gm
  endRe.lastIndex = offset
  const next = endRe.exec(text)
  return { start: lastStart, end: next ? next.index : text.length, title }
}

test("section offsets are computed once and match a per-claim scan", () => {
  const text = [
    "Opening lead is 12 ppb before any heading.",
    "## Occurrence",
    "Cadmium was 40 µg/kg in the beans. [[sources/example-cocoa]]",
    "## Limits",
    "The cap is 100 ppb.",
    "## Sources",
    "[[sources/example-cocoa]]",
    "",
  ].join("\n")
  const indexed = indexSections(text)
  const claimRe = /\b(\d+(?:\.\d+)?)\s*(ppb|ppm|µg\/kg)\b/g
  let m
  let seen = 0
  while ((m = claimRe.exec(text)) !== null) {
    seen++
    const legacy = legacySection(text, m.index)
    const got = sectionAt(indexed, m.index)
    assert.equal(got.title, legacy.title, m[0])
    assert.equal(got.supported, true, m[0])
  }
  assert.equal(seen, 3)
  const atHeading = text.indexOf("## Limits")
  assert.equal(sectionAt(indexed, atHeading).title, "Occurrence")
  assert.equal(legacySection(text, atHeading).title, "Occurrence")
})

test("a section without a citation stays unsupported when the page has no sources block", () => {
  const text = "## Measured\nLead was 3 ppb here.\n## Other\nCadmium was 9 ppb. [[sources/other-paper]]\n"
  const indexed = indexSections(text)
  const lead = text.indexOf("3 ppb")
  const cadmium = text.indexOf("9 ppb")
  assert.equal(sectionAt(indexed, lead).title, "Measured")
  assert.equal(sectionAt(indexed, lead).supported, false)
  assert.equal(sectionAt(indexed, cadmium).supported, true)
})
