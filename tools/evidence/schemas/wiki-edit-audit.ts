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

const REQUIRED_STRING_FIELDS = [
  "edit_id",
  "page",
  "span_id",
  "source_document",
  "retrieval_date",
  "applied_at",
  "commit_sha",
] as const satisfies readonly (keyof WikiEditAuditRow)[]

function isModelAgreementState(value: unknown): value is ModelAgreementState {
  return typeof value === "string" && (modelAgreementStates as readonly string[]).includes(value)
}

export function validateWikiEditAuditRow(row: unknown): WikiEditAuditRow {
  if (typeof row !== "object" || row === null) {
    throw new WikiEditAuditValidationError("Row must be an object")
  }
  const r = row as Record<string, unknown>

  const strings: Record<(typeof REQUIRED_STRING_FIELDS)[number], string> = {
    edit_id: "",
    page: "",
    span_id: "",
    source_document: "",
    retrieval_date: "",
    applied_at: "",
    commit_sha: "",
  }
  for (const field of REQUIRED_STRING_FIELDS) {
    const value = r[field]
    if (typeof value !== "string" || value.trim() === "") {
      throw new WikiEditAuditValidationError(`Field '${field}' must be a non-empty string`)
    }
    strings[field] = value
  }

  const { models_used } = r
  if (
    !Array.isArray(models_used) ||
    models_used.length === 0 ||
    !models_used.every((m): m is string => typeof m === "string" && m.trim() !== "")
  ) {
    throw new WikiEditAuditValidationError("Field 'models_used' must be a non-empty array of strings")
  }

  if (!isModelAgreementState(r.model_agreement_state)) {
    throw new WikiEditAuditValidationError(
      `Field 'model_agreement_state' must be one of: ${modelAgreementStates.join(", ")}`,
    )
  }

  if (!/^wiki\//.test(strings.page)) {
    throw new WikiEditAuditValidationError("Field 'page' must start with 'wiki/'")
  }

  return {
    edit_id: strings.edit_id,
    page: strings.page,
    span_id: strings.span_id,
    source_document: strings.source_document,
    retrieval_date: strings.retrieval_date,
    models_used,
    model_agreement_state: r.model_agreement_state,
    applied_at: strings.applied_at,
    commit_sha: strings.commit_sha,
  }
}
