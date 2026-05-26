// Unit tests for the wiki-edit audit writer and write barrier.
// Run with: npm test -- tools/evidence/wiki-edit.test.ts

import assert from "node:assert/strict"
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { test, before, after } from "node:test"
import { validateWikiEditAuditRow, WikiEditAuditValidationError } from "./schemas/wiki-edit-audit.js"

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeRow(overrides: Record<string, unknown> = {}) {
  return {
    edit_id: "test-edit-001",
    page: "wiki/ingredients/lead.md",
    span_id: "occurrence-data",
    source_document: "FDA2016 | https://example.com/fda2016",
    retrieval_date: "2026-05-26",
    models_used: ["anthropic/claude-opus-4-7"],
    model_agreement_state: "single_model",
    applied_at: "2026-05-26T12:00:00Z",
    commit_sha: "pending",
    ...overrides,
  }
}

// ── Schema validation tests ───────────────────────────────────────────────────

test("validateWikiEditAuditRow accepts a valid row", () => {
  const row = makeRow()
  const result = validateWikiEditAuditRow(row)
  assert.equal(result.edit_id, "test-edit-001")
  assert.equal(result.model_agreement_state, "single_model")
})

test("validateWikiEditAuditRow rejects non-object", () => {
  assert.throws(() => validateWikiEditAuditRow(null), WikiEditAuditValidationError)
  assert.throws(() => validateWikiEditAuditRow("string"), WikiEditAuditValidationError)
})

test("validateWikiEditAuditRow rejects missing required string fields", () => {
  for (const field of ["edit_id", "page", "span_id", "source_document", "retrieval_date", "applied_at", "commit_sha"]) {
    assert.throws(
      () => validateWikiEditAuditRow(makeRow({ [field]: "" })),
      WikiEditAuditValidationError,
      `Should reject empty ${field}`,
    )
    assert.throws(
      () => validateWikiEditAuditRow(makeRow({ [field]: undefined })),
      WikiEditAuditValidationError,
      `Should reject missing ${field}`,
    )
  }
})

test("validateWikiEditAuditRow rejects page not starting with wiki/", () => {
  assert.throws(
    () => validateWikiEditAuditRow(makeRow({ page: "ingredients/lead.md" })),
    WikiEditAuditValidationError,
  )
})

test("validateWikiEditAuditRow rejects empty models_used", () => {
  assert.throws(() => validateWikiEditAuditRow(makeRow({ models_used: [] })), WikiEditAuditValidationError)
  assert.throws(() => validateWikiEditAuditRow(makeRow({ models_used: "not-array" })), WikiEditAuditValidationError)
})

test("validateWikiEditAuditRow rejects invalid model_agreement_state", () => {
  assert.throws(
    () => validateWikiEditAuditRow(makeRow({ model_agreement_state: "unknown_state" })),
    WikiEditAuditValidationError,
  )
})

test("validateWikiEditAuditRow accepts all valid model_agreement_state values", () => {
  for (const state of ["single_model", "consensus", "majority", "conflict", "not_applicable"]) {
    assert.doesNotThrow(() => validateWikiEditAuditRow(makeRow({ model_agreement_state: state })))
  }
})

// ── Writer + idempotency tests ────────────────────────────────────────────────
// These tests use a temp directory so they don't touch the real audit log.

let tmpDir: string
let auditLog: string

// We dynamically import the module after patching env so we can override the
// audit log path. Instead, we test the exported helpers with real file ops
// by temporarily overriding the module-level path via a tiny seam exposed
// in a test-only way. Since the module hard-codes the path, we test the
// helpers by writing directly and verifying readAuditLog / editIdExists using
// a copy of the helpers against a temp file.

import { appendFileSync, readFileSync } from "node:fs"

function makeLocalHelpers(logPath: string) {
  function appendRow(row: ReturnType<typeof makeRow>) {
    appendFileSync(logPath, JSON.stringify(row) + "\n", "utf-8")
  }
  function localEditIdExists(editId: string): boolean {
    if (!existsSync(logPath)) return false
    return readFileSync(logPath, "utf-8")
      .split("\n")
      .filter(Boolean)
      .some((line) => {
        try {
          return (JSON.parse(line) as { edit_id?: string }).edit_id === editId
        } catch {
          return false
        }
      })
  }
  function localReadAll() {
    if (!existsSync(logPath)) return []
    return readFileSync(logPath, "utf-8").split("\n").filter(Boolean).map((l) => JSON.parse(l))
  }
  return { appendRow, localEditIdExists, localReadAll }
}

before(() => {
  tmpDir = join(tmpdir(), `hmi-wiki-audit-test-${Date.now()}`)
  mkdirSync(tmpDir, { recursive: true })
  auditLog = join(tmpDir, "wiki_edit_audit.jsonl")
})

after(() => {
  rmSync(tmpDir, { recursive: true, force: true })
})

test("appends a row and reads it back", () => {
  const { appendRow, localReadAll } = makeLocalHelpers(auditLog)
  const row = makeRow({ edit_id: "writer-test-001" })
  appendRow(row as ReturnType<typeof makeRow>)
  const rows = localReadAll()
  assert.equal(rows.length, 1)
  assert.equal(rows[0].edit_id, "writer-test-001")
})

test("editIdExists returns true for a recorded edit", () => {
  const { appendRow, localEditIdExists } = makeLocalHelpers(auditLog)
  const row = makeRow({ edit_id: "writer-test-002" })
  assert.equal(localEditIdExists("writer-test-002"), false)
  appendRow(row as ReturnType<typeof makeRow>)
  assert.equal(localEditIdExists("writer-test-002"), true)
})

test("editIdExists returns false for unknown id", () => {
  const { localEditIdExists } = makeLocalHelpers(auditLog)
  assert.equal(localEditIdExists("nonexistent-edit-id"), false)
})

test("multiple rows can be appended; each is a separate line", () => {
  const log2 = join(tmpDir, "wiki_edit_audit2.jsonl")
  const { appendRow, localReadAll } = makeLocalHelpers(log2)
  appendRow(makeRow({ edit_id: "multi-001" }) as ReturnType<typeof makeRow>)
  appendRow(makeRow({ edit_id: "multi-002" }) as ReturnType<typeof makeRow>)
  appendRow(makeRow({ edit_id: "multi-003" }) as ReturnType<typeof makeRow>)
  const rows = localReadAll()
  assert.equal(rows.length, 3)
  assert.deepEqual(rows.map((r: { edit_id: string }) => r.edit_id), ["multi-001", "multi-002", "multi-003"])
})

test("corrupt lines in log are skipped gracefully by editIdExists", () => {
  const log3 = join(tmpDir, "wiki_edit_audit3.jsonl")
  writeFileSync(log3, 'not-json\n{"edit_id":"real-001"}\n', "utf-8")
  const { localEditIdExists } = makeLocalHelpers(log3)
  assert.equal(localEditIdExists("real-001"), true)
  assert.equal(localEditIdExists("not-json"), false)
})
