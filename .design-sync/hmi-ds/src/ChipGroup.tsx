import * as React from "react"

// Chip group — a labeled row of pills (e.g. "Metals covered", "Ingredient
// targets"). Source of truth: quartz/components/styles/productEvidenceSummary.scss
// (.hmi-product-chip-group / -label / -chip). The `-muted` modifier is the
// secondary/quieter row treatment.

export interface ChipGroupProps {
  /** Row label — IBM Plex Mono, uppercase. */
  label?: string
  chips: string[]
  /** Muted (secondary) styling. */
  muted?: boolean
}

export function ChipGroup({ label, chips, muted }: ChipGroupProps) {
  return (
    <div
      className={
        muted
          ? "hmi-product-chip-group hmi-product-chip-group-muted"
          : "hmi-product-chip-group"
      }
    >
      {label ? <span className="hmi-product-chip-label">{label}</span> : null}
      {chips.map((c, i) => (
        <span className="hmi-product-chip" key={i}>
          {c}
        </span>
      ))}
    </div>
  )
}
