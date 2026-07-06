import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import citeScript from "./scripts/citeSuperscript.inline"

// The proof's right rail (.rail): light bordered action buttons + a provenance
// card. Emits the proof's exact classes so proof.css styles it identically to
// hmi-real-content. renderPage wraps it in <aside class="rail">.

export default (() => {
  const Rail: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>
    const updated = fm.updated ? String(fm.updated).slice(0, 10) : undefined
    const corpus =
      (fm as any).n_sources ??
      (fm as any).corpus_count ??
      (fileData as any).corpusCount ??
      undefined

    // Follow / Cite / Evidence packet / Share moved into the hero band; the rail
    // keeps the provenance card.
    return (
      <>
        <div class="card">
          <h4>Page provenance</h4>
          <div class="meta">
            {updated ? <>Updated {updated}<br /></> : null}
            {corpus ? <>{corpus} corpus sources<br /></> : null}
            Author: K. Pendergrass · ORCID
            <br />
            Reconstructable via version history
          </div>
        </div>
      </>
    )
  }
  Rail.afterDOMLoaded = citeScript
  return Rail
}) satisfies QuartzComponentConstructor
