// Canonical HMTc certification analyte contract.
//
// The laboratory panel is eight TOTAL elements. Species controls are additional
// cells; they never replace the parent total-element result. MeHg is retained in
// every compiled record so its applicability decision is explicit, but it is a
// mandatory standalone numeric ceiling only where a sovereign source sets one
// below the total-Hg ceiling. Otherwise it must be bounded by tHg or resolved as
// a documented not-material determination.

export const TOTAL_ANALYTES = ["Pb", "Cd", "tAs", "tHg", "Ni", "Sn", "Al", "Cr"]
export const CORE_SPECIES_ANALYTES = ["iAs", "Cr-VI"]
export const CONDITIONAL_SPECIES_ANALYTES = ["MeHg"]

export const FULL_PANEL = [
  "Pb",
  "Cd",
  "tAs",
  "iAs",
  "tHg",
  "MeHg",
  "Ni",
  "Sn",
  "Al",
  "Cr",
  "Cr-VI",
]

export const RESOLVED_CELL_TYPES = new Set([
  "gov",
  "read_across",
  "special",
  "control",
  "not_material",
  "subsumed",
])

export function missingCanonicalAnalytes(panel = []) {
  return FULL_PANEL.filter((analyte) => !panel.includes(analyte))
}
