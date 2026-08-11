import * as React from "react"

// Reviewed-caveat callout — a "## Limitations" or "## Open questions" section
// styled as a burgundy-left-bar panel over a #fbf5f7 ground. Source of truth:
// quartz/styles/v3-primitives.scss (COMPONENTS §9). The style is HEADING-ANCHORED
// (.wiki-content h2[id="limitations"] + its first adjacent block), so the markup
// must be an <h2 id="limitations|open-questions"> followed by an adjacent <p>,
// both inside .wiki-content. The bar means "a reviewed limitation EXISTS" and
// carries that meaning only.

export interface CaveatCalloutProps {
  /** Section heading. Pair with the matching `id`. */
  heading?: string
  /** The anchor id the CSS keys on. */
  id?: "limitations" | "open-questions"
  /** Body text (rendered as the adjacent styled paragraph). */
  body: string
}

export function CaveatCallout({
  heading = "Limitations",
  id = "limitations",
  body,
}: CaveatCalloutProps) {
  return (
    <div className="wiki-content">
      <h2 id={id}>{heading}</h2>
      <p>{body}</p>
    </div>
  )
}
