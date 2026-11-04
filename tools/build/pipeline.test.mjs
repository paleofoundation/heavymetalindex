import test from "node:test"
import assert from "node:assert/strict"
import { steps, selectSteps } from "./pipeline.mjs"
import { chooseQuartzResources } from "./quartz-build.mjs"

const GB = 1024 ** 3

test("the full pipeline still runs every generator and every audit", () => {
  const all = selectSteps({})
  assert.equal(all.length, steps.length)
  const text = all.map((step) => step.run.join(" ")).join("\n")
  for (const needle of [
    "contracts:pilot:check",
    "tools/evidence/build-routing-audit.mjs",
    "tools/audit-claim-provenance.mjs",
    "tools/build-ingredient-contamination-tables.mjs --apply",
    "tools/release/postbuild-rice-assets.mjs",
    "tools/postbuild-inject-jsonld.mjs",
    "tools/audit-dead-internal-hrefs.mjs",
    "tools/audit-sitemap-indexability.mjs",
  ]) {
    assert.equal(text.includes(needle), true, needle)
  }
})

test("Vercel keeps writers and drops read-only audits", () => {
  const vercel = selectSteps({ VERCEL: "1" })
  assert.ok(vercel.length < steps.length)
  assert.ok(vercel.every((step) => step.audit === false))
  assert.equal(
    vercel.some((step) => step.run.includes("tools/audit-claim-provenance.mjs")),
    false,
  )
  assert.equal(
    vercel.some((step) => step.run.includes("tools/build-coverage-page.mjs")),
    true,
  )
  assert.equal(
    vercel.some((step) => step.run.includes("tools/postbuild-canonical-links.mjs")),
    true,
  )
  assert.equal(
    vercel.some((step) => step.run.includes("tools/audit-page-weight.mjs")),
    false,
  )
})

test("CI audit mode is exactly the steps Vercel skips", () => {
  const skipped = new Set(steps.filter((step) => step.audit).map((step) => step.run.join(" ")))
  const audits = selectSteps({}, { onlyAudits: true })
  assert.equal(audits.length, skipped.size)
  for (const step of audits) assert.equal(skipped.has(step.run.join(" ")), true)
  const kept = selectSteps({ VERCEL: "1" }).map((step) => step.run.join(" "))
  for (const step of audits) assert.equal(kept.includes(step.run.join(" ")), false)
})

test("local Quartz stays at 12 GB and one thread; Vercel caps the heap and stays one thread", () => {
  assert.deepEqual(chooseQuartzResources({}, { totalmem: 8 * GB, cpus: 4 }), {
    heap: "12288",
    concurrency: "1",
    workerHeap: "",
  })
  const small = chooseQuartzResources({ VERCEL: "1" }, { totalmem: 8 * GB, cpus: 4 })
  assert.equal(small.concurrency, "1")
  assert.equal(small.workerHeap, "")
  assert.equal(small.heap, "6144")
  const tiny = chooseQuartzResources({ VERCEL: "1" }, { totalmem: 4 * GB, cpus: 2 })
  assert.equal(tiny.heap, "2560")
  assert.equal(tiny.concurrency, "1")
})
