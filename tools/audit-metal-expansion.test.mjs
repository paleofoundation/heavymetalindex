import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { metalExpansionViolations } from "./audit-metal-expansion.mjs"

test("rendered contextual mistakes are caught across inline markup and entities", () => {
  const html =
    "<p>Mann–Whitney <strong>uranium (U)</strong> test; uranium (U) statistic.</p><p>arsenic (As) such; arsenic (As) well as; arsenic (As) per; arsenic (As) mentioned; arsenic (As) can be seen; arsenic (As) a result.</p><ol><li>nickel (Ni), H.</li><li>chromium (Cr), J.</li><li>tin (Sn), A.</li><li>uranium (U), G.</li><li>aluminum (Al), W.</li></ol>"
  const hits = metalExpansionViolations(html)
  assert.equal(hits.filter((hit) => hit.rule === "uranium-test").length, 2)
  assert.equal(hits.filter((hit) => hit.rule === "whitney-uranium").length, 1)
  assert.equal(hits.filter((hit) => hit.rule === "english-as").length, 6)
  assert.equal(hits.filter((hit) => hit.rule === "author-initial").length, 5)
})

test("metadata is checked while scripts and valid scientific introductions stay literal", () => {
  assert.equal(
    metalExpansionViolations(
      '<meta name="description" content="Whitney uranium (U) test"><meta property="og:description" content="arsenic (As) such">',
    ).length,
    3,
  )
  assert.deepEqual(
    metalExpansionViolations(
      '<p>Mann–Whitney U test; As such; Ni, H.; measured uranium (U), nickel (Ni) and arsenic (As) concentrations.</p><script>"Whitney uranium (U) test"</script><style>.uranium{}</style>',
    ),
    [],
  )
})

test("the CLI fails with offending file names and passes after the rendered text is corrected", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "metal-expansion-audit-"))
  try {
    const page = path.join(dir, "example.html")
    fs.writeFileSync(page, "<p>Mann–Whitney uranium (U) test.</p>")
    const run = () =>
      spawnSync(
        process.execPath,
        ["tools/audit-metal-expansion.mjs", `--dir=${dir}`],
        { encoding: "utf8" },
      )
    const before = run()
    assert.equal(before.status, 1)
    assert.match(before.stderr, /example.html/)
    assert.match(before.stdout, /2 matches across 1 of 1 HTML files/)
    fs.writeFileSync(page, "<p>Mann–Whitney U test.</p>")
    assert.equal(run().status, 0)
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
})
