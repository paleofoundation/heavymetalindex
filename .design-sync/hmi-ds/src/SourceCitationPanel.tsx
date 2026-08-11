import * as React from "react"

// Source citation & access panel — the provenance block on a source page.
// Source of truth: quartz/components/SourceCitationPanel.tsx +
// styles/sourceCitationPanel.scss. Facts render as the shared dotted key→value
// atom (.hmi-source-citation-facts): Inter label left, IBM Plex Mono value
// right (burgundy). A fact whose `href` is set renders its value as a link.

export interface SourceFact {
  label: string
  value: string
  href?: string
}

export interface SourceCitationPanelProps {
  /** Kicker above the facts (mono, uppercase). */
  kicker?: string
  /** DOI, publication, year, authors, source type, review state, license, … */
  facts: SourceFact[]
}

export function SourceCitationPanel({
  kicker = "Source access",
  facts,
}: SourceCitationPanelProps) {
  return (
    <section className="hmi-source-citation-panel" aria-label="Source citation and access">
      <div>
        <p className="hmi-source-citation-kicker">{kicker}</p>
        <dl className="hmi-source-citation-facts">
          {facts.map((fact, i) => (
            <div key={i}>
              <dt>{fact.label}</dt>
              <dd>
                {fact.href ? (
                  <a href={fact.href} target="_blank" rel="noopener noreferrer">
                    {fact.value}
                  </a>
                ) : (
                  fact.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
