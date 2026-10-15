import test from "node:test"
import assert from "node:assert/strict"
import {
  readDescriptionPage,
  summarizeDescriptions,
} from "./audit-meta-descriptions.mjs"

function page(value, file = "example.html", extra = "") {
  return readDescriptionPage(
    `<head>${extra}<meta name="description" content="${value}"><meta property="og:description" content="${value}"><meta name="twitter:description" content="${value}"></head>`,
    file,
  )
}

test("noindexed and redirect pages do not count toward indexable-description failures", () => {
  const report = summarizeDescriptions([
    page(
      "scaffold",
      "pending.html",
      '<meta name="robots" content="noindex, nofollow">',
    ),
    page(
      "scaffold",
      "alias.html",
      '<meta http-equiv="refresh" content="0;url=/target">',
    ),
    page("scaffold", "404.html"),
    readDescriptionPage(
      "google-site-verification: googleabc.html",
      "static/googleabc.html",
    ),
    page("Lead occurrence in rice."),
  ])
  assert.equal(report.indexable_files, 1)
  assert.deepEqual(report.offenders, [])
})

test("all requested metrics are counted by page and social descriptions are checked", () => {
  const report = summarizeDescriptions([
    page("Overview Lead occurrence."),
    page("Author metadata needs verification.", "author.html"),
    page("Step Zero scaffold; bulk-ingest stub.", "status.html"),
    page("a ".repeat(80), "long.html"),
  ])
  assert.equal(report.counts.heading_start, 1)
  assert.equal(report.counts.exact_author_warning, 1)
  assert.equal(report.counts.scaffold_stub_bulk, 1)
  assert.equal(report.counts.over_155, 1)
  assert.ok(report.offenders.some((hit) => hit.field === "og:description"))
  assert.ok(report.offenders.some((hit) => hit.field === "twitter:description"))
})

test("duplicate groups are reported and sharing a description on more than five pages fails", () => {
  const report = summarizeDescriptions(
    Array.from({ length: 6 }, (_, i) =>
      page("Repeated source description.", `${i}.html`),
    ),
  )
  assert.equal(report.counts.duplicate_groups, 1)
  assert.equal(report.counts.excessive_duplicate_groups, 1)
  assert.equal(report.duplicates[0].files.length, 6)
  assert.equal(
    summarizeDescriptions(
      Array.from({ length: 5 }, (_, i) =>
        page("Repeated source description.", `${i}.html`),
      ),
    ).counts.excessive_duplicate_groups,
    0,
  )
})

test("build-history notices fail every description field even on a single page", () => {
  const report = summarizeDescriptions([
    page(
      "No substantive edit history is available in this build. The full commit record is available in git.",
    ),
  ])
  assert.equal(report.counts.excessive_duplicate_groups, 0)
  assert.deepEqual(
    report.offenders.map((hit) => hit.field),
    ["description", "og:description", "twitter:description"],
  )
  assert.ok(
    report.offenders.every((hit) => hit.reasons.includes("internal-status")),
  )
})
