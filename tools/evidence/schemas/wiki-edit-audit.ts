// Schema for wiki-edit audit rows written to data/evidence/wiki_edit_audit.jsonl.
// Every automated edit to a wiki/ page must produce one row here (enforced by
// the pre-commit hook and the recordEditOrAbort helper in ../wiki-edit.ts).

export const modelAgreementStates = [
  "single_model",     // only one model contributed
  "consensus",        // all models agreed
  "majority",         // majority agreed; minority dissented
  "conflict",         // models disagreed; human review required
  "not_applicable",   // no multi-model adjudication was performed
] as const

export type ModelAgreementState = (typeof modelAgreementStates)[number]

export interface WikiEditAuditRow {
  /** Stable UUID for this edit operation. Used for idempotency. */
  edit_id: string
  /** Path under wiki/ (e.g. "ingredients/lead.md"). */
  page: string
  /** Heading anchor or marker-bounded section id being edited (e.g. "occurrence-data"). */
  span_id: string
  /** Source document identifier: cite-key + URL separated by " | " (e.g. "FDA2016 | https://…"). */
  source_document: string
  /** ISO 8601 date the source was retrieved (e.g. "2026-05-26"). */
  retrieval_date: string
  /** Model IDs used during generation (e.g. ["anthropic/claude-opus-4-7"]). */
  models_used: string[]
  /** Agreement state across models. */
  model_agreement_state: ModelAgreementState
  /** ISO 8601 datetime the edit was applied. */
  applied_at: string
  /** Git commit SHA at the time the row is written (may be "pending" during pre-commit). */
  commit_sha: string
}

// ── Runtime validation ───────────────────────────────────────────────────────

export class WikiEditAuditValidationError extends Error {}

export function validateWikiEditAuditRow(row: unknown): WikiEditAuditRow {
  if (typeof row !== "object" || row === null) {
    throw new WikiEditAuditValidationError("Row must be an object")
  }
  const r = row as Record<string, unknown>
  const requiredStrings: (keyof WikiEditAuditRow)[] = [
    "edit_id",
    "page",
    "span_id",
    "source_document",
    "retrieval_date",
    "applied_at",
    "commit_sha",
  ]
  for (const field of requiredStrings) {
    if (typeof r[field] !== "string" || (r[field] as string).trim() === "") {
      throw new WikiEditAuditValidationError(`Field '${field}' must be a non-empty string`)
    }
  }
  if (!Array.isArray(r.models_used) || r.models_used.length === 0) {
    throw new WikiEditAuditValidationError("Field 'models_used' must be a non-empty array")
  }
  if (!(modelAgreementStates as readonly string[]).includes(r.model_agreement_state as string)) {
    throw new WikiEditAuditValidationError(
      `Field 'model_agreement_state' must be one of: ${modelAgreementStates.join(", ")}`,
    )
  }
  if (!/^wiki\//.test(r.page as string)) {
    throw new WikiEditAuditValidationError("Field 'page' must start with 'wiki/'")
  }
  return r as WikiEditAuditRow
}
