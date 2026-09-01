import assert from "node:assert/strict"
import fs from "node:fs"
import { execFileSync } from "node:child_process"
import test from "node:test"

test("state-of-food report generator emits the complete reproducible register", () => {
  execFileSync(process.execPath, ["tools/publication/build-state-of-food-report.mjs"], { cwd: process.cwd() })
  const data = JSON.parse(fs.readFileSync("wiki/static/data/state-of-heavy-metals-in-food-2026.json", "utf8"))
  const report = fs.readFileSync("wiki/reports/state-of-heavy-metals-in-food-2026.md", "utf8")
  const csv = fs.readFileSync("wiki/static/data/state-of-heavy-metals-in-food-2026.csv", "utf8")

  assert.equal(data.schema_version, "1.0.0")
  assert.equal(data.findings.length, 24)
  assert.equal(new Set(data.findings.map((record) => record.slug)).size, 24)
  assert.ok(data.metrics.source_pages > 3000)
  assert.ok(data.metrics.disclosed_anchor_source_relationships >= 100)
  assert.match(report, /This first edition is a cross-corpus report, not a new pooled meta-analysis/)
  assert.match(report, /Total arsenic does not answer an inorganic-arsenic question/)
  assert.equal(csv.trim().split("\n").length, 25)
})
