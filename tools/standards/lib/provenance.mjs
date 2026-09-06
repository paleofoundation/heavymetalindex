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

export const CANONICAL_PROVENANCE = ["regulatory-alignment", "read-across", "subsumed", "baseline-screen", "precautionary", "ratchet"]
export const TRANSITIONAL_PROVENANCE = ["control", "not-material"]
export const ALLOWED_PROVENANCE = new Set([...CANONICAL_PROVENANCE, ...TRANSITIONAL_PROVENANCE])
// Retired occurrence-era tags: never emitted, always a FAIL.
export const RETIRED_PROVENANCE = /literature.baseline|feasibility|occurrence|percentile|\bp\d{2}\b/i

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
// --- precautionary (decided under wwsaid 2026-09-02; governance rationale tag "precautionary") -----------------
// A program value tighter than the strictest in-force sovereign floor. The compiler first resolves the honest
// Method v2.0 floor for the cell (a sovereign row, a read-across, or the parent total for a species); the
// subcategory's `precautionary[analyte] = { value, rationale }` then overlays the program number and keeps the
// floor on the cell as `sovereign_floor`, so the gap between law and program is stated on the cell, never hidden.
// A precautionary value that is NOT below the floor is refused (the floor stands and a warning is recorded).
const _anchorIdOf = (c) => (c && (c.binding_id || c.source_id || (c.components && c.components[0] && c.components[0].source_id) || (c.forms && c.forms[0] && (c.forms[0].binding_id || c.forms[0].source_id || c.forms[0].id)))) || null
export function applyPrecautionary(cells, sub) {
  const specs = sub && sub.precautionary
  if (!specs || typeof specs !== "object") return
  for (const [an, spec] of Object.entries(specs)) {
    if (!spec || typeof spec.value !== "number" || !(an in cells)) continue
    const base = cells[an]
    let floor = null
    if (base && typeof base.value === "number") floor = { kind: base.type || base.cell_kind || provenanceOf(base), id: _anchorIdOf(base), value: base.value, jurisdiction: base.binding_jurisdiction || base.source_jurisdiction || null, scope: base.binding_scope || base.source_scope || null, basis: base.basis || null, page: base.binding_page || base.binding_instrument || base.controlling_instrument || null }
    else if (base && (base.type === "subsumed" || base.provenance === "subsumed")) { const parent = base.subsumed_by || base.bounded_by; const pc = parent && cells[parent]; if (pc && typeof pc.value === "number") floor = { kind: "parent-total", parent, id: _anchorIdOf(pc), value: pc.value, jurisdiction: pc.binding_jurisdiction || pc.source_jurisdiction || null, scope: pc.binding_scope || pc.source_scope || null, basis: pc.basis || null } }
    if (!floor) { cells[an] = { ...base, precautionary_refused: `no resolvable sovereign floor for a precautionary value of ${spec.value}` }; continue }
    if (!(spec.value < floor.value)) { cells[an] = { ...base, precautionary_refused: `precautionary value ${spec.value} is not below the sovereign floor ${floor.value}` }; continue }
    cells[an] = { type: "precautionary", provenance: "precautionary", value: spec.value, value_exact: spec.value, unit: "ug/kg", basis: base.basis || floor.basis || null, sovereign_floor: floor, floor_cell: base,
      rationale: spec.rationale || `Program value ${spec.value} ug/kg is tighter than the strictest in-force sovereign floor (${floor.value} ug/kg); retained as a precautionary (ratcheting) value with the floor disclosed.`,
      label: `Precautionary: ${spec.value} ug/kg, below the sovereign floor of ${floor.value} ug/kg${floor.id ? ` (${floor.id})` : floor.parent ? ` (bounded by ${floor.parent})` : ""}. The floor is the strictest in-force government maximum level; the program number is a disclosed policy choice, not a claim about the law.`,
      reference_method: base.reference_method || null, adult_floor: base.adult_floor, feed_floor: base.feed_floor, per_country: base.per_country }
  }
}

export function stampProvenance(cells, sub) {
  if (sub) applyPrecautionary(cells, sub)
  // a bounded species records the parent's ceiling it is bounded by (binding_total), so a reader and the
  // round-trip diff can see the enforceable number without opening the parent cell
  for (const c of Object.values(cells || {})) {
    if (c && (c.type === "subsumed" || c.provenance === "subsumed") && c.binding_total == null) {
      const parent = c.subsumed_by || c.bounded_by
      const pc = parent && cells[parent]
      if (pc && typeof pc.value === "number") c.binding_total = pc.value
    }
  }
  for (const c of Object.values(cells || {})) {
    if (!c || typeof c !== "object") continue
    if (c.provenance) continue
    const p = c.provenance_tag || provenanceFor(c)
    if (p) c.provenance = p
  }
  return cells
}

export const provenanceOf = (cell) => (cell && (cell.provenance ?? cell.provenance_tag)) || ""
