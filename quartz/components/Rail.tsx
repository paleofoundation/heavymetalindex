import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot, resolveRelative, type SimpleSlug } from "../util/path"
import { GROUPS, relatedByCategory } from "./relatedGraph"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import citeScript from "./scripts/citeSuperscript.inline"

// The right rail (.rail). renderPage wraps this in <aside class="rail">.
//
// v3 gives the rail four blocks (artifact 1453-1477): Connections, Reuse this
// page, Found an error?, in that order. This shipped only the provenance card,
// which is why `check:v3` reported three MISSING blocks on every detail page.
//
// These three are CHROME, not content: they read the existing link graph and
// existing static routes, touch no `wiki/**` path, and carry no evidence
// values. v3's seven body sections are a different problem (F-16, generator
// work) and are deliberately not attempted here.
//
// Styles live in styles/v3-chrome.scss, unlayered, rather than in a component
// stylesheet — component CSS is emitted inside `@layer legacy`, so v3 rules
// placed there would lose to any unlayered rule on equal specificity.

// v3 shows three connections; a few more is useful without becoming a second
// "See also". The in-body block keeps the full list.
const CONNECTION_CAP = 8

export default (() => {
  const Rail: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const fm = fileData.frontmatter ?? {}
    const updated = (fm as any).updated ? String((fm as any).updated).slice(0, 10) : undefined
    const corpus =
      (fm as any).n_sources ??
      (fm as any).corpus_count ??
      (fileData as any).corpusCount ??
      undefined

    const slug = fileData.slug
    // Gate the in-page anchor on the section existing, the way Snav's utility
    // links do — index pages carry no References heading.
    const hasRefs = (fileData.toc ?? []).some((e: any) => /^references$/i.test((e.text ?? "").trim()))
    // One link per concept category first, so a page with 40 inbound sources
    // does not fill the rail with 8 ingredients and no regulation. Falls back
    // to filling from the remainder in group order.
    const buckets = relatedByCategory({ fileData, allFiles })
    const firstPass = GROUPS.map((g) => buckets.get(g.key)?.[0]).filter(Boolean)
    const rest = GROUPS.flatMap((g) => (buckets.get(g.key) ?? []).slice(1))
    const connections = [...firstPass, ...rest].slice(0, CONNECTION_CAP)

    const rel = (to: string) => (slug ? resolveRelative(slug, to as SimpleSlug) : `/${to}`)
    // Static assets are not page slugs, so they resolve from the site root the
    // way Head.tsx does rather than through resolveRelative's slug logic.
    const asset = (to: string) => joinSegments(slug ? pathToRoot(slug) : ".", to)

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

        {connections.length > 0 ? (
          <nav class="rail-connections" aria-label="Connections">
            <div class="rail-connections-title">Connections</div>
            <div class="rail-connections-list">
              {connections.map((c) => (
                <a href={c!.href}>{c!.label}</a>
              ))}
            </div>
          </nav>
        ) : null}

        <div class="rail-reuse">
          <div class="rail-reuse-title">Reuse this page</div>
          <div class="rail-reuse-body">
            {/* Every href here resolves to something that exists. v3's row
                order is kept, but two of its rows are NOT reproduced:
                "Copy citation (APA, Vancouver, BibTeX)" and "Structured data
                (JSON-LD)" are `#`-anchors driven by v3's own runtime, and the
                repo has neither a citation-format dialog nor v3's `toggleLd`.
                Shipping them would add two dead anchors — the same defect the
                hero already carries at `#cite-this-page`, logged as a finding
                rather than propagated here. */}
            {hasRefs ? <a href="#references">Citation and references</a> : null}
            <a href={asset("static/evidence-packet-index.json")}>
              Structured evidence export (JSON)
            </a>
            <a href={`/api/evidence-packet?slug=${slug ?? ""}`}>Evidence packet (PDF)</a>
            <a href={rel("licensing")}>Licensing and downstream use</a>
          </div>
        </div>

        <div class="rail-correction">
          <div class="rail-correction-title">Found an error?</div>
          <p>
            Corrections are logged publicly with the date, the affected value, and the source that
            resolved it.
          </p>
          <a class="rail-correction-cta" href={rel("errata")}>
            Submit a correction
          </a>
        </div>
      </>
    )
  }
  Rail.afterDOMLoaded = citeScript
  return Rail
}) satisfies QuartzComponentConstructor
