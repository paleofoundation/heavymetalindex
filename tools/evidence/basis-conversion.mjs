#!/usr/bin/env node
/**
 * Basis homogenization — the single source of truth for the powder ↔ prepared
 * reconstitution factor and the convertBasis() routine.
 *
 * CLAUDE.md Part 19 names this file as the canonical home of the 1:7
 * reconstitution factor ("The 1:7 reconstitution factor lives in
 * `tools/evidence/basis-conversion.mjs`"). Before this module existed the
 * constant was copy-pasted into the pooling engine and the standards-briefing
 * generator under two different names (BASIS_RECONSTITUTION_FACTOR vs
 * RECONSTITUTION_FACTOR), so a future edit to one and not the other would have
 * silently desynchronized the engine from the briefing. Both now import from
 * here.
 *
 * 1:7 reconstitution = 1 g powder + 6 g water = 7 g prepared (standard across
 * infant-formula regulatory frameworks: FDA Closer-to-Zero, EU 2023/915).
 * Powder-basis values are 7× more concentrated than the same product
 * prepared-for-feeding, so:
 *   powder → prepared : divide by 7
 *   prepared → powder : multiply by 7
 * Within-class conversions (as_sold ↔ dry_as_sold, etc.) are identity with a
 * caveat; cross-class unknown pairs pass through with an `unknown_conversion`
 * flag so the caller never silently coerces an unverified basis.
 */

export const BASIS_RECONSTITUTION_FACTOR = 7 // 1 g powder + 6 g water (1:7 dilution)

// Bases that ship/test at powder-like concentration (as-placed-on-market).
export const POWDER_BASES = new Set([
  "powder_as_placed",
  "as_sold",
  "as_sold_or_source_reported",
  "dry_as_sold",
])

// Bases reported at prepared/as-consumed dilution.
export const PREPARED_BASES = new Set(["prepared_for_feeding", "as_consumed"])

export function convertBasis(value, fromBasis, toBasis) {
  if (!fromBasis || !toBasis || fromBasis === toBasis) return { value, factor: 1 }
  // Powder ↔ prepared (1:7 reconstitution by mass).
  if (POWDER_BASES.has(fromBasis) && PREPARED_BASES.has(toBasis)) {
    return { value: value / BASIS_RECONSTITUTION_FACTOR, factor: 1 / BASIS_RECONSTITUTION_FACTOR }
  }
  if (PREPARED_BASES.has(fromBasis) && POWDER_BASES.has(toBasis)) {
    return { value: value * BASIS_RECONSTITUTION_FACTOR, factor: BASIS_RECONSTITUTION_FACTOR }
  }
  // Within-class conversions (as_sold ↔ dry_as_sold, etc.) — treat as 1:1 with caveat.
  if (POWDER_BASES.has(fromBasis) && POWDER_BASES.has(toBasis)) return { value, factor: 1 }
  if (PREPARED_BASES.has(fromBasis) && PREPARED_BASES.has(toBasis)) return { value, factor: 1 }
  // Mixed / unknown — pass through with factor 1 and flag.
  return { value, factor: 1, unknown_conversion: true }
}
