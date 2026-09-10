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

// ── claim-surface (ORDER S-DOI-TAS-1) ────────────────────────────────────────
// Species never substitutes for a parent total. The eight totals always occupy
// the claim panel; iAs is an additional row on rice/infant/baby-cereal (or
// whenever the iAs cell is a firm numeric claim). The header counts totals only.

const CLAIM_DISP = {
  Pb: { disp: "Lead (Pb)", tier: "Tier 1" },
  Cd: { disp: "Cadmium (Cd)", tier: "Tier 1" },
  tAs: { disp: "Total arsenic (tAs)", tier: "Tier 1" },
  iAs: { disp: "Inorganic arsenic (iAs)", tier: "Tier 1" },
  tHg: { disp: "Mercury (tHg)", tier: "Tier 1" },
  Ni: { disp: "Nickel (Ni)", tier: "Tier 2" },
  Sn: { disp: "Tin (Sn)", tier: "Tier 2" },
  Al: { disp: "Aluminium (Al)", tier: "Tier 2" },
  Cr: { disp: "Total chromium (Cr)", tier: "Tier 2" },
}

export const TOTAL_CLAIM_ANALYTES = TOTAL_ANALYTES.map((key) => ({ key, ...CLAIM_DISP[key] }))

export function isFirmClaimCell(cell) {
  if (!cell || typeof cell !== "object") return false
  if (cell.value == null) return false
  return cell.type === "gov" || cell.type === "read_across"
}

export function mandatoryIasNumeric(slug, name) {
  const hay = `${slug || ""} ${name || ""}`.toLowerCase()
  return /rice/.test(hay) || /infant/.test(hay) || (/baby/.test(hay) && /cereal/.test(hay))
}

export function shouldPublishIas(std, variantObj) {
  if (isFirmClaimCell(variantObj?.iAs)) return true
  return mandatoryIasNumeric(std?.slug, std?.name)
}

export function claimAnalytesFor(std, variantObj) {
  const rows = TOTAL_CLAIM_ANALYTES.map((a) => ({ ...a }))
  if (shouldPublishIas(std, variantObj)) {
    const i = rows.findIndex((a) => a.key === "tAs")
    rows.splice(i < 0 ? rows.length : i + 1, 0, { key: "iAs", ...CLAIM_DISP.iAs })
  }
  return rows
}

export function assertClaimPanel(std) {
  const variants = std?.variants || {}
  const keys = Object.keys(variants)
  if (!keys.length) throw new Error("freeze: compiled standard has no variants")
  for (const vk of keys) {
    const variantObj = variants[vk] || {}
    // Species-for-parent substitution is named first: iAs on the claim surface
    // without a firm tAs is the exact S-DOI-TAS-1 defect (India 50 mislabeled as iAs).
    if (isFirmClaimCell(variantObj.iAs) && !isFirmClaimCell(variantObj.tAs)) {
      throw new Error(`freeze: ${std.slug} variant ${vk} publishes iAs without a firm tAs parent total (species never substitutes for parent total)`)
    }
    const missing = TOTAL_ANALYTES.filter((k) => !isFirmClaimCell(variantObj[k]))
    if (missing.length) {
      throw new Error(`freeze: ${std.slug} variant ${vk} missing TOTAL_ANALYTES claim cells: ${missing.join(", ")}`)
    }
    if (mandatoryIasNumeric(std.slug, std.name) && !isFirmClaimCell(variantObj.iAs)) {
      throw new Error(`freeze: ${std.slug} variant ${vk} rice/infant/baby-cereal requires firm numeric iAs alongside tAs`)
    }
  }
}

export function claimHeaderLine(std) {
  const variants = Object.keys(std?.variants || {})
  const first = variants.length ? std.variants[variants[0]] : {}
  const firmTotals = TOTAL_ANALYTES.filter((k) => isFirmClaimCell(first[k])).length
  const publishesIas = variants.some((v) => shouldPublishIas(std, std.variants[v]))
  const base = `${firmTotals}/${TOTAL_ANALYTES.length} totals with a published limit`
  return publishesIas ? `${base} · plus Inorganic arsenic (iAs)` : base
}
