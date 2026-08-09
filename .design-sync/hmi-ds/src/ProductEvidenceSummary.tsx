import * as React from "react"

// Product-category evidence brief. Source of truth:
// quartz/components/ProductEvidenceSummary.tsx + styles/productEvidenceSummary.scss.
// The standards note is a load-bearing firewall statement (CLAUDE.md Part 2):
// public pages summarize what the literature reports and never publish HMT&C
// standards, candidate limits, or certification thresholds. Keep it.

export interface ProductFact {
  label: string
  value: string
}

export interface ProductEvidenceSummaryProps {
  /** Category name shown in the kicker, e.g. "Infant cereals". */
  categoryLabel?: string
  intro?: string
  /** The firewall note; defaults to the live text — do not soften it. */
  standardsNote?: string
  /** Fact rows (evidence status, source coverage, population, updated). */
  facts?: ProductFact[]
  /** Metals covered — rendered as burgundy chips. */
  metals?: string[]
  /** Ingredient targets — rendered as muted chips. */
  ingredients?: string[]
  /** In-page shortcut links. */
  shortcuts?: { label: string; href: string }[]
}

const DEFAULT_INTRO =
  "This page summarizes what cited Heavy Metal Index sources report for this product category: metals covered, measured values, regulatory context, and evidence gaps."

const DEFAULT_STANDARDS_NOTE =
  "Technical extraction details may appear below for traceability, but public pages do not publish HMT&C standards, candidate limits, or certification thresholds. Internal percentile, confidence, and regulatory-ceiling decisions belong in the staff standards workbench."

export function ProductEvidenceSummary({
  categoryLabel,
  intro = DEFAULT_INTRO,
  standardsNote = DEFAULT_STANDARDS_NOTE,
  facts = [],
  metals = [],
  ingredients = [],
  shortcuts = [],
}: ProductEvidenceSummaryProps) {
  return (
    <section className="hmi-product-brief" aria-label="Product evidence summary">
      <div className="hmi-product-brief-kicker">
        <span>Product evidence page</span>
        {categoryLabel ? <span>{categoryLabel}</span> : null}
      </div>

      <div className="hmi-product-brief-grid">
        <div className="hmi-product-brief-main">
          <h2>Evidence Summary</h2>
          <p>{intro}</p>
          <p className="hmi-product-standards-note">{standardsNote}</p>
        </div>

        {facts.length > 0 ? (
          <dl className="hmi-product-facts">
            {facts.map((fact, i) => (
              <div key={i}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>

      {metals.length > 0 ? (
        <div className="hmi-product-chip-group" aria-label="Metals covered">
          <span className="hmi-product-chip-label">Metals covered</span>
          {metals.map((metal, i) => (
            <span className="hmi-product-chip" key={i}>
              {metal}
            </span>
          ))}
        </div>
      ) : null}

      {ingredients.length > 0 ? (
        <div
          className="hmi-product-chip-group hmi-product-chip-group-muted"
          aria-label="Ingredient targets"
        >
          <span className="hmi-product-chip-label">Ingredient targets</span>
          {ingredients.map((ingredient, i) => (
            <span className="hmi-product-chip" key={i}>
              {ingredient}
            </span>
          ))}
        </div>
      ) : null}

      {shortcuts.length > 0 ? (
        <nav className="hmi-product-brief-links" aria-label="Product evidence shortcuts">
          {shortcuts.map((shortcut, i) => (
            <a href={shortcut.href} key={i}>
              {shortcut.label}
            </a>
          ))}
        </nav>
      ) : null}
    </section>
  )
}
