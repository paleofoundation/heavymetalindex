import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { homepageLayoutViolations } from "./audit-homepage-layout.mjs"

const homepage = fs.readFileSync(path.resolve("wiki/index.md"), "utf8")

const designed = `---
title: Heavy Metal Index
---

<div class="hmi-v3-home">

<section class="hmi-v3-hero">
  <h1>The reference library <span>for heavy metals.</span></h1>
  <p>A sentence inside a designed block.</p>
</section>

<!-- BEGIN: hmi-corpus-counter -->
<section class="hmi-v3-start">
  <a href="sources/">The source archive</a>
</section>
<!-- END: hmi-corpus-counter -->

</div>
`

test("the published homepage contains only the designed layout", () => {
  const violations = homepageLayoutViolations(homepage)
  assert.deepEqual(violations, [], violations.map((v) => `${v.line}: ${v.message}`).join("\n"))
  assert.equal(homepage.includes("## Geographic variation"), false)
  assert.equal(homepage.includes("## Baby lotion, oil, and powder sources"), false)
  assert.match(homepage, /<!-- END: hmi-home-recently-updated -->\s*<\/div>\s*$/)
})

test("designed copy, comments, and ledger markup are allowed", () => {
  assert.deepEqual(homepageLayoutViolations(designed), [])
})

test("a markdown heading and a batch-log paragraph after the layout fail", () => {
  const bad = `${designed}
## Geographic variation and remediation literature

Recently added Library evidence includes [[sources/example]].
`
  const violations = homepageLayoutViolations(bad)
  assert.ok(violations.length >= 1)
  assert.match(violations.map((v) => v.message).join("\n"), /Markdown heading|Prose/)
  assert.match(violations.map((v) => v.message).join("\n"), /outside the designed homepage blocks/)
})

test("an added-on date paragraph after the layout fails", () => {
  const bad = `${designed}
## Baby lotion, oil, and powder sources

Baby lotion sources added on 26 September 2026 are listed from [[sources/example]].
`
  const violations = homepageLayoutViolations(bad)
  assert.ok(violations.some((v) => /Markdown heading|Prose/.test(v.message)))
})

test("a new section after the wrapper fails", () => {
  const bad = `${designed}
<section class="hmi-batch"><p>Recently added.</p></section>
`
  const violations = homepageLayoutViolations(bad)
  assert.ok(violations.some((v) => /outside the designed homepage wrapper/.test(v.message)))
})

test("a loose paragraph inside the wrapper, outside a designed section, fails", () => {
  const bad = designed.replace(
    "</div>\n",
    "<p>Recently added Library evidence includes [[sources/example]].</p>\n</div>\n",
  )
  const violations = homepageLayoutViolations(bad)
  assert.ok(violations.some((v) => /not one of the designed homepage sections/.test(v.message)))
})

test("a markdown heading between designed sections fails", () => {
  const bad = designed.replace(
    "</div>\n",
    "## Recently added\n\nA batch log.\n</div>\n",
  )
  const violations = homepageLayoutViolations(bad)
  assert.ok(violations.some((v) => /Markdown heading/.test(v.message)))
})
