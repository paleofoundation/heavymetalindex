import * as React from "react"

// HeroBand — the full-bleed burgundy hero that opens every content page.
// Source of truth: quartz/components/HeroBand.tsx (markup) + quartz/components/
// styles/heroBand.scss. On the live site renderPage.tsx lifts `.hero-band`
// outside #quartz-root so it spans the viewport; the maroon (var(--burg) /
// #8b2a4a) ground and the internal `.hero-grid` re-center to var(--maxw).
//
// The screen-map logic (which crumb/leaf/badge a slug gets) stays in the Quartz
// component — here those are props, because a design is composing a specific
// screen, not deriving one from a slug. One rule the design agent must keep
// (CHROME-SPEC §3): an index/directory page never wears the badge of the thing
// it indexes — /metals is "Reference layer", not "Metal".

export interface Crumb {
  label: string
  href?: string
}

export interface HeroSnapshotRow {
  /** Label (rendered mono, uppercase, burgundy). */
  k: string
  /** Value (rendered mono). */
  v: string
}

export interface HeroAction {
  label: string
  href: string
  /** The single filled action (Download PDF). At most one per band. */
  solid?: boolean
}

export interface HeroBandProps {
  /** Breadcrumb trail; the first crumb is conventionally { label: "Index", href: "/" }. */
  crumbs?: Crumb[]
  /** The current leaf — the page's own name; on an index, the collection's name for itself ("All metals"). */
  leaf: string
  /** Page title, e.g. "Lead (Pb)". Serif (Lora). */
  title: string
  /** Screen-type badge, e.g. "Metal", "Reference layer", "Regulation". CSS renders it uppercase. */
  kind?: string
  /** Optional deck / one-line summary under the title. */
  dek?: string
  /** Author name (links to /about on the live site). */
  author?: string
  /** ORCID id, digits only, e.g. "0000-0002-2348-7259". */
  orcid?: string
  /** ISO date shown as "UPDATED yyyy-mm-dd". */
  updated?: string
  /** Revision label shown as "REV n". */
  rev?: string
  /** Action links (Cite this page, Version history, Download PDF). */
  actions?: HeroAction[]
  /** Snapshot facts. Empty/omitted → the hero runs full width (no snapshot column). */
  snapshot?: HeroSnapshotRow[]
}

export function HeroBand({
  crumbs = [],
  leaf,
  title,
  kind,
  dek,
  author,
  orcid,
  updated,
  rev,
  actions = [],
  snapshot = [],
}: HeroBandProps) {
  const hasSnapshot = snapshot.length > 0
  return (
    <div className={hasSnapshot ? "hero-band" : "hero-band hero-band--nosnapshot"}>
      <div className="hero-grid">
        <div className="hero-main">
          <nav className="hero-crumb" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <React.Fragment key={i}>
                {i > 0 ? <span aria-hidden="true">/</span> : null}
                {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
              </React.Fragment>
            ))}
            {crumbs.length > 0 ? <span aria-hidden="true">/</span> : null}
            <span className="cur">{leaf}</span>
          </nav>

          <div className="hero-titlerow">
            <h1 className="hero-title">{title}</h1>
            {kind ? <span className="hero-kind">{kind}</span> : null}
          </div>

          {dek ? <p className="hero-dek">{dek}</p> : null}

          <div className="hero-meta">
            {author || orcid ? (
              <span>
                {author ? (
                  <>
                    Author{" "}
                    <a className="hero-author" href="#author">
                      {author}
                    </a>
                  </>
                ) : null}
                {author && orcid ? " · " : null}
                {orcid ? (
                  <a
                    className="hero-orcid"
                    href={`https://orcid.org/${orcid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ORCID {orcid}
                  </a>
                ) : null}
              </span>
            ) : null}
            {updated ? <span className="hero-stamp">UPDATED {updated}</span> : null}
            {rev ? <span className="hero-stamp">REV {rev}</span> : null}
            {actions.length > 0 ? (
              <span className="hero-acts">
                {actions.map((a, i) => (
                  <a
                    key={i}
                    className={a.solid ? "hero-act hero-act--solid" : "hero-act"}
                    href={a.href}
                  >
                    {a.label}
                  </a>
                ))}
              </span>
            ) : null}
          </div>
        </div>

        {hasSnapshot ? (
          <div className="hero-snapshot">
            <div className="hero-snapshot-head">Page snapshot</div>
            <div className="hero-snapshot-body">
              {snapshot.map((r, i) => (
                <div className="hero-snapshot-row" key={i}>
                  <span className="hero-snapshot-k">{r.k}</span>
                  <span className="hero-snapshot-v">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
