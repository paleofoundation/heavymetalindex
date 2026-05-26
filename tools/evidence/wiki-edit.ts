// Write barrier and append-only audit log for wiki page edits.
//
// Usage (every worker that mutates a wiki/ file must call this):
//
//   import { recordEditOrAbort } from "../tools/evidence/wiki-edit.js"
//   await recordEditOrAbort({ edit_id: "…", page: "wiki/…", … })
//
// If the row cannot be written (disk error, validation failure, duplicate
// edit_id) the function throws so the caller's edit is never applied.

import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { validateWikiEditAuditRow, type WikiEditAuditRow } from "./schemas/wiki-edit-audit.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, "../..")
const AUDIT_LOG = resolve(REPO_ROOT, "data/evidence/wiki_edit_audit.jsonl")

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Append an audit row and then allow the caller to proceed with its wiki edit.
 * Throws (aborting the edit) if:
 *   - the row fails schema validation
 *   - the edit_id already exists in the log (idempotency guard)
 *   - the file cannot be written
 */
export async function recordEditOrAbort(row: WikiEditAuditRow): Promise<void> {
  validateWikiEditAuditRow(row)
  ensureLogDir()
  if (editIdExists(row.edit_id)) {
    // Idempotent: the same edit_id was already recorded. This is safe to
    // re-enter (e.g. retry after a transient error) — just return.
    return
  }
  appendRow(row)
}

/**
 * Low-level: append a validated row. Exposed for testing; prefer
 * recordEditOrAbort in production code.
 */
export function appendAuditRow(row: WikiEditAuditRow): void {
  validateWikiEditAuditRow(row)
  ensureLogDir()
  appendRow(row)
}

/**
 * Return true if the given edit_id already appears in the audit log.
 */
export function editIdExists(editId: string): boolean {
  if (!existsSync(AUDIT_LOG)) return false
  const lines = readFileSync(AUDIT_LOG, "utf-8").split("\n").filter(Boolean)
  return lines.some((line) => {
    try {
      return (JSON.parse(line) as { edit_id?: string }).edit_id === editId
    } catch {
      return false
    }
  })
}

/**
 * Read all rows from the audit log. Returns an empty array if the file does
 * not exist yet.
 */
export function readAuditLog(): WikiEditAuditRow[] {
  if (!existsSync(AUDIT_LOG)) return []
  return readFileSync(AUDIT_LOG, "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as WikiEditAuditRow)
}

// ── Internal helpers ─────────────────────────────────────────────────────────

function ensureLogDir(): void {
  const dir = dirname(AUDIT_LOG)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

function appendRow(row: WikiEditAuditRow): void {
  appendFileSync(AUDIT_LOG, JSON.stringify(row) + "\n", "utf-8")
}
