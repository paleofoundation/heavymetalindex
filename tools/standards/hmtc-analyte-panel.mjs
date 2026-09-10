// Canonical HMTc certification analyte contract.
//
// The laboratory panel is eight TOTAL elements, always numeric on the claim
// surface (Pb, Cd, tAs, tHg, Ni, Sn, Al, Cr). Species cells never replace the
// parent total-element result. A species is a mandatory numeric published limit
// when the matrix is a defining pathway (rice/infant-cereal iAs; fruit-juice iAs;
// fish/marine MeHg) or when a finalized government ML exists on the species
// alone. Reflex speciation is lab-assay timing, not permission to omit a number.
// `subsumed` / `monitored` / `value: null` are forbidden on the claim surface.

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
