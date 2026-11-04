import test from "node:test"
import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import fs from "node:fs"
import {
  publicBatchProseViolations,
  relocatePublicBatchProse,
  scrubPublicBatchSentences,
} from "./lib/public-batch-prose.mjs"
import { isAllowed, isPublishedWikiPage, loadAllowlist } from "./audit-public-batch-prose.mjs"
import { buildDashboard } from "./build-audit-dashboard.mjs"

const history = `
<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| [abc1234](https://github.com/paleofoundation/heavymetalindex/commit/abc1234) | 2026-09-26 | major | 2 sources added |
<!-- END: hmi-page-history -->
`

test("update history commit links are not batch-log violations", () => {
  const md = `---\ntitle: x\n---\n\nLead was 4 ppb.\n${history}`
  assert.deepEqual(publicBatchProseViolations(md, "wiki/metals/lead.md"), [])
})

test("verification notes and routing-audit placeholders fail", () => {
  const md = `---\ntitle: x\n---\n\n## Key numbers\n\nMean lead was 4 ppb.\n\n## Verification notes\n\n- Ingest run committed at abc1234def.\n`
  const hits = publicBatchProseViolations(md, "wiki/sources/example.md")
  assert.ok(hits.some((hit) => hit.rule === "verification-notes"))
  assert.ok(hits.some((hit) => hit.rule === "ingest-run" || hit.rule === "commit-pointer"))
})

test("relocation keeps measured values and reader links, drops the ingest log", () => {
  const md = `---\ntitle: x\n---\n\n## Key numbers\n\nMean lead was 4.0 ppb.\n\n## Wiki pages this source may touch\n\n- [[metals/lead]]\n- [[log]]\n\n## Verification notes\n\n- Routing audit refreshed. See [[ingredients/rice]].\n\n${history}`
  const { markdown, relocated } = relocatePublicBatchProse(md, "wiki/sources/example.md")
  assert.match(markdown, /Mean lead was 4\.0 ppb/)
  assert.match(markdown, /## Related evidence/)
  assert.match(markdown, /\[\[metals\/lead\]\]/)
  assert.match(markdown, /\[\[ingredients\/rice\]\]/)
  assert.doesNotMatch(markdown, /Verification notes/)
  assert.doesNotMatch(markdown, /\[\[log\]\]/)
  assert.match(markdown, /BEGIN: hmi-page-history/)
  assert.equal(relocated.length, 2)
  assert.match(relocated[1].body, /Routing audit refreshed/)
})

test("scrub replaces the orchestrator caption without touching a measurement", () => {
  const md = "Mean 12 ppb.\n\n_Generator-managed section: will be populated when the routing audit identifies sources with broader author-stated scope._\n"
  const next = scrubPublicBatchSentences(md)
  assert.match(next, /Mean 12 ppb/)
  assert.doesNotMatch(next, /routing audit/)
  assert.deepEqual(publicBatchProseViolations(next, "wiki/products/example.md"), [])
})

test("operational trees are not treated as published pages", () => {
  assert.equal(isPublishedWikiPage("wiki/sources/example.md"), true)
  assert.equal(isPublishedWikiPage("wiki/batch-reports/note.md"), false)
  assert.equal(isPublishedWikiPage("wiki/lint/index.md"), false)
  assert.equal(isPublishedWikiPage("wiki/log.md"), false)
  assert.equal(isPublishedWikiPage("wiki/index.md"), true)
})

test("allowlist matches a file and its children", () => {
  const allow = loadAllowlist("# comment\n\nwiki/licensing.md\n")
  assert.equal(isAllowed("wiki/licensing.md", allow), true)
  assert.equal(isAllowed("wiki/metals/lead.md", allow), false)
})

test("published pages pass the batch-prose audit", () => {
  const result = spawnSync("node", ["tools/audit-public-batch-prose.mjs"], { encoding: "utf8" })
  assert.equal(result.status, 0, result.stderr || result.stdout)
})

test("work-log routing phrases still fail on an ordinary page", () => {
  const audit = publicBatchProseViolations("Routing audit refreshed after the ingest.\n", "wiki/metals/lead.md")
  assert.ok(audit.some((hit) => hit.rule === "routing-audit"))
  const layer = publicBatchProseViolations(
    "The routing layer fans source-page declarations onto this page.\n",
    "wiki/products/example.md",
  )
  assert.ok(layer.some((hit) => hit.rule === "routing-layer"))
})

test("generated audit dashboard uses reader labels", () => {
  const md = buildDashboard({
    taxonomy: { total: 10, exact: 8, by_alias: 1, by_slug: 1, missing: 1, per_cat: {} },
    routing: { rows: 12, unresolved: 2, malformed: 1 },
  })
  assert.match(md, /## Source catalog/)
  assert.match(md, /Source pages that name a product are listed on that product page\. 12 source-to-page links are on record\./)
  assert.match(md, /\| Source routing \(unresolved source routings\) \|/)
  assert.deepEqual(publicBatchProseViolations(md, "wiki/audits/index.md"), [])
  const baseline = md.replace("title: Audit dashboard\n", "title: \"Audit dashboard: 2026-11-04\"\n")
  assert.deepEqual(publicBatchProseViolations(baseline, "wiki/audits/2026-11-04-baseline.md"), [])
})

test("zinc faq names the analyte set without a batch-log phrase", () => {
  const zinc = JSON.parse(fs.readFileSync("tools/metal-faq/zinc.json", "utf8"))
  const answer = zinc.questions.find((q) => q.question.startsWith("Why does a heavy-metals")).answer
  assert.match(answer, /standard analyte set/)
  assert.match(answer, /the source routing attaches it to this page/)
  assert.deepEqual(publicBatchProseViolations(answer, "wiki/metals/zinc.md"), [])
})

test("quartz does not publish batch reports", () => {
  const config = fs.readFileSync("quartz.config.ts", "utf8")
  assert.match(config, /"batch-reports"/)
  assert.match(config, /"batch-reports\/\*\*"/)
})
