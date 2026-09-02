// register-gate.mjs — the ONE status gate every standards tool applies to a register row.
//
// data/evidence/regulatory_limits.csv carries each instrument's own legal-status string in
// `status` ("maximum level", "statutory limit", "draft guidance; not for implementation",
// "superseded — replaced by ...", "adopted maximum level effective 2026-12-01", ...). There is NO
// "live" value: a row is live when nothing here gates it. Before 2026-09-02 four tools carried four
// different regexes (compile-category / the legacy compilers: draft|not for implementation|proposed
// + quarantin; the audit: the same; completeness-fill and the resolver: draft|withdrawn|superseded|
// quarantine|proposed|repealed), so a superseded or withdrawn row could anchor a cell in one tool and
// be refused by another. Phase A step 6 of docs/tasks/standards-95-confidence-completion-brief.md
// unifies them here and adds the not-yet-in-force check the regex could not express.
//
// STATUS_GATE quacks like the RegExp the callers already hold (`.test(status)`), so every compiler's
// `const DRAFT = ...` / `const QUARANTINE = ...` binds to it without changing a call site.

export const GATED_STATUS = /draft|not for implementation|proposed|quarantin|withdrawn|superseded|repealed|revoked/i

// Deterministic "today": HMTC_TODAY=YYYY-MM-DD pins the clock for reproducible compiles and tests.
export const TODAY = (process.env.HMTC_TODAY && /^\d{4}-\d{2}-\d{2}$/.test(process.env.HMTC_TODAY))
  ? process.env.HMTC_TODAY
  : new Date().toISOString().slice(0, 10)

// An instrument adopted but not yet applicable names its application date in the STATUS field
// ("adopted maximum level effective 2026-12-01"). Only the status field is read: notes routinely
// mention transition dates that do not affect the row's own applicability.
export function effectiveDateOfStatus(status) {
  const m = String(status || "").match(/(?:effective|in force|applicable|applies)\s*(?:from|on|date|as of)?\s*:?\s*(\d{4}-\d{2}-\d{2})/i)
  return m ? m[1] : null
}
export function notYetInForce(status, today = TODAY) {
  const d = effectiveDateOfStatus(status)
  return !!d && d > today
}

// null when the row is live; otherwise a human-readable reason.
export function gateReason(status, today = TODAY) {
  const s = String(status || "")
  if (GATED_STATUS.test(s)) return `gated status "${s}"`
  if (notYetInForce(s, today)) return `not yet in force (status "${s}", effective ${effectiveDateOfStatus(s)}, today ${today})`
  return null
}
export const isGatedStatus = (status, today = TODAY) => gateReason(status, today) != null

// RegExp-shaped facade for the compilers' `DRAFT.test(r.status)` / `QUARANTINE.test(r.status)` sites.
export const STATUS_GATE = {
  test: (status) => isGatedStatus(status),
  source: GATED_STATUS.source,
  toString: () => `${GATED_STATUS} + not-yet-in-force(effective > ${TODAY})`,
}
