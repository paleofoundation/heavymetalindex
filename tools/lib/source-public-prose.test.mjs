import { test } from "node:test"
import assert from "node:assert/strict"
import { cleanSourcePublicProse, findSourceProseLeaks } from "./source-public-prose.mjs"

test("file and execution details are removed without hiding measured values or missing-source caveats", () => {
  const input = "The PDF at `raw/manual-fetch/Kimi/food.pdf` is truncated to 5 of 24 pages; Pb 12 ppb cannot be verified. Claude Opus 4.7 updated frontmatter."
  const { body, changes } = cleanSourcePublicProse(input)
  assert.ok(body.includes("truncated to 5 of 24 pages; Pb 12 ppb cannot be verified"))
  assert.equal(findSourceProseLeaks(body).length, 0)
  assert.equal(changes.length, 3)
  assert.equal(cleanSourcePublicProse(body).body, body)
})

test("scientific raw-state labels, official Codex citations, wikilinks and generated sections survive", () => {
  const input = "Peach (raw/frozen); `raw/as-consumed`; Codex Alimentarius. [[sources/fda|FDA]]\n<!-- BEGIN: hmi-page-history -->\n`wiki/old`\n<!-- END: hmi-page-history -->"
  assert.equal(cleanSourcePublicProse(input).body, input)
  assert.equal(findSourceProseLeaks(input).length, 0)
})

test("unquoted artifact filenames are bounded, retaining the following evidence", () => {
  const input = "From raw/Manual Fetch Kimi /Study on foods.pdf (SHA256 abc). Cd was 5 ppb."
  const output = cleanSourcePublicProse(input).body
  assert.equal(output, "From the archived source file (SHA256 abc). Cd was 5 ppb.")
})

test("spectroscopy software and proper names are not model identities", () => {
  const input = "Spectra were processed in OPUS 7.8 software. Lisa Frank was a named product."
  assert.equal(cleanSourcePublicProse(input).body, input)
  assert.deepEqual(findSourceProseLeaks(input), [])
})
