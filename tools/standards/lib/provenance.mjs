// provenance.mjs — the ONE provenance vocabulary for compiled standard cells.
//
// Governance (docs/governance/hmtc-governing-principles.md §Certification-Readiness Ruling §2, v2.7):
// every filled cell carries its TRUE provenance tag. Before 2026-09-02 the vocabulary disagreed in
// five places (governance, audit C9, compile-category, compile-cat1, completeness-fill), so a
// `subsumed` cell failed the audit while a `not-material` tag rode on a subsumed species, and 612
// live cert cells carried no tag at all. Phase A step 5 of
// docs/tasks/standards-95-confidence-completion-brief.md lands this module as the single source and
// every compiler stamps `provenance` from it (Part 2 direction: toward disclosure).
//
// A tag changes ONLY via config → recompile. Nothing edits a compiled JSON to satisfy a lint.
//
//   regulatory-alignment  a sovereign maximum level by lookup (gov / form_split / special)
//   read-across           a disclosed derivation from the nearest applicable sovereign instrument
//   subsumed              a toxic species bounded by its FIRM parent total (iAs≤tAs, MeHg≤tHg, Cr-VI≤Cr)
//   baseline-screen       a baseline limit-of-record at a named published method's LOQ
//   ratchet               a post-publication tightening (requires ratchet_event)
// Transitional (an EMPTY cell class under the readiness ruling; allowed only while the backlog drains):
//   control, not-material

export const CANONICAL_PROVENANCE = ["regulatory-alignment", "read-across", "subsumed", "baseline-screen", "ratchet"]
export const TRANSITIONAL_PROVENANCE = ["control", "not-material"]
export const ALLOWED_PROVENANCE = new Set([...CANONICAL_PROVENANCE, ...TRANSITIONAL_PROVENANCE])
// Retired occurrence-era tags: never emitted, always a FAIL.
export const RETIRED_PROVENANCE = /literature.baseline|precautionary|feasibility|occurrence|percentile|\bp\d{2}\b/i

const KIND_TO_PROVENANCE = {
  gov: "regulatory-alignment", form_split: "regulatory-alignment", special: "regulatory-alignment",
  read_across: "read-across", subsumed: "subsumed", baseline_screen: "baseline-screen",
  control: "control", not_material: "not-material",
}

// The tag a cell's resolution kind implies. `screen` is a gov/read_across cell carrying screen:true.
export function provenanceFor(cell) {
  if (!cell || typeof cell !== "object") return null
  if (cell.error) return null
  let kind = cell.type || cell.cell_kind || ""
  if (kind === "screen") kind = cell.source_id && !cell.binding_id ? "read_across" : "gov"
  if (kind === "gap" || kind === "unspecified") return null
  return KIND_TO_PROVENANCE[kind] || null
}

// Stamp `provenance` on every resolved cell of a variant that lacks one. An explicit tag (from the
// config, or the legacy `provenance_tag` field) is never overridden; a gap cell gets none.
export function stampProvenance(cells) {
  for (const c of Object.values(cells || {})) {
    if (!c || typeof c !== "object") continue
    if (c.provenance) continue
    const p = c.provenance_tag || provenanceFor(c)
    if (p) c.provenance = p
  }
  return cells
}

export const provenanceOf = (cell) => (cell && (cell.provenance ?? cell.provenance_tag)) || ""
