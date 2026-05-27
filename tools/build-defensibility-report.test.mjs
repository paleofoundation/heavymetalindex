// Golden fixture test for build-defensibility-report.mjs
// Run with: npm test -- tools/build-defensibility-report.test.mjs

import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { test } from "node:test"
import { generateReport } from "./build-defensibility-report.mjs"

// ── Fixture data ─────────────────────────────────────────────────────────────

const FIXTURE_WIKI_PAGE = `---
title: Test Product
type: product-category
---
# Test Product

## Evidence Summary

Field measurements show concentrations of 5 µg/kg in some samples, with peaks up to 15 ppb observed in monitored populations. [[sources/test-study-2024]]

## Sources

- [[sources/test-study-2024]]
`

const FIXTURE_AUDIT_ROW = JSON.stringify({
  edit_id: "edit-001",
  page: "wiki/sources/test-study-2024.md",
  retrieval_date: "2024-06-01",
  models_used: ["anthropic/claude-opus-4-5", "openai/gpt-4o"],
  model_agreement_state: "agree",
  applied_at: "2024-06-02T10:00:00Z",
  span_id: "span-abc123",
})

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeFixtureTmpDir() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-defensibility-test-"))

  // wiki/products/test-product.md
  const wikiProductsDir = path.join(tmpDir, "wiki", "products")
  fs.mkdirSync(wikiProductsDir, { recursive: true })
  fs.writeFileSync(path.join(wikiProductsDir, "test-product.md"), FIXTURE_WIKI_PAGE)

  // wiki/sources/test-study-2024.md (so page-exists check passes)
  const wikiSourcesDir = path.join(tmpDir, "wiki", "sources")
  fs.mkdirSync(wikiSourcesDir, { recursive: true })
  fs.writeFileSync(path.join(wikiSourcesDir, "test-study-2024.md"), "# Test Study 2024\n")

  // data/evidence/wiki_edit_audit.jsonl
  const dataDir = path.join(tmpDir, "data", "evidence")
  fs.mkdirSync(dataDir, { recursive: true })
  const auditLogPath = path.join(dataDir, "wiki_edit_audit.jsonl")
  fs.writeFileSync(auditLogPath, FIXTURE_AUDIT_ROW + "\n")

  return { tmpDir, auditLogPath }
}

// ── Tests ────────────────────────────────────────────────────────────────────

test("generateReport: returns a non-empty string", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    const report = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    assert.ok(typeof report === "string", "report should be a string")
    assert.ok(report.length > 0, "report should not be empty")
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: deterministic — two calls produce identical output", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    const report1 = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    const report2 = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    assert.equal(report1, report2, "two calls with same inputs must produce identical output")
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: page name appears in report", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    const report = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    assert.ok(
      report.includes("wiki/products/test-product.md"),
      "report should include the page path",
    )
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: claims section is present", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    const report = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    assert.ok(
      report.includes("## Claims by section"),
      "report should include a 'Claims by section' heading",
    )
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: numerical claims from fixture page are detected", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    const report = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    // The fixture page has "5 µg/kg" and "15 ppb" as numerical claims.
    const hasClaims =
      report.includes("total_claims:") &&
      !report.includes("total_claims: 0")
    assert.ok(hasClaims, "report should detect at least one numerical claim from fixture page")
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: audit rows appear when present", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    const report = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    // The fixture audit row is for wiki/sources/test-study-2024.md; it should
    // appear in the defensibility chain table.
    assert.ok(
      report.includes("test-study-2024"),
      "report should include the fixture source slug",
    )
    assert.ok(
      report.includes("edit-001") || report.includes("2024-06-01"),
      "report should include audit row data (edit_id or retrieval_date)",
    )
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: YAML frontmatter block is present", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    const report = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath,
    })
    assert.ok(report.startsWith("---\n"), "report should start with YAML frontmatter delimiter")
    assert.ok(report.includes("generator: tools/build-defensibility-report.mjs"), "frontmatter should name the generator")
    assert.ok(report.includes("noindex: true"), "frontmatter should include noindex: true")
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: page-not-found throws a clear error", () => {
  const { tmpDir, auditLogPath } = makeFixtureTmpDir()
  try {
    assert.throws(
      () =>
        generateReport({
          pageRelative: "wiki/products/nonexistent.md",
          repoRoot: tmpDir,
          auditLogPath,
        }),
      /Wiki page not found/,
      "should throw with 'Wiki page not found' for missing page",
    )
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})

test("generateReport: empty audit log produces valid report", () => {
  const { tmpDir } = makeFixtureTmpDir()
  try {
    // Create an empty audit log
    const emptyAuditLogPath = path.join(tmpDir, "data", "evidence", "empty_audit.jsonl")
    fs.writeFileSync(emptyAuditLogPath, "")

    const report = generateReport({
      pageRelative: "wiki/products/test-product.md",
      repoRoot: tmpDir,
      auditLogPath: emptyAuditLogPath,
    })
    assert.ok(report.includes("audit_log_total_rows: 0"), "should report 0 audit rows")
    assert.ok(
      report.includes("_No audit rows reference this page directly._"),
      "should note no page-level audit rows",
    )
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})
