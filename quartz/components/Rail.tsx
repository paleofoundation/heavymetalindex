import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot, resolveRelative, type SimpleSlug } from "../util/path"
import { GROUPS, relatedByCategory } from "./relatedGraph"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import citeScript from "./scripts/citeSuperscript.inline"

// The right rail (.rail). renderPage wraps this in <aside class="rail">.
//
// v3 gives the rail exactly three blocks (artifact 1453-1477): Connections,
// Reuse this page, Found an error?, in that order — and no provenance card.
//
// The "Page provenance" card that used to sit above these was REMOVED as
// redundant on Karen's call, and it is redundant: the hero already carries
// Author, ORCID, UPDATED and REV (artifact 380-383, and the same in HeroBand),
// the Page snapshot panel already carries the corpus-source count, and its
// closing line "Reconstructable via version history" is what the hero's
// Version history button does. Nothing it displayed is lost.
//
// These blocks are CHROME, not content: they read the existing link graph and
// existing static routes, touch no `wiki/**` path, and carry no evidence
// values. v3's seven body sections are a different problem (F-16, generator
// work) and are deliberately not attempted here.
//
// Styles live in styles/v3-chrome.scss, unlayered, rather than in a component
// stylesheet — component CSS is emitted inside `@layer legacy`, so v3 rules
// placed there would lose to any unlayered rule on equal specificity.

// v3 shows exactly three (artifact 1794). Three is also the honest limit for a
// signal this thin: past the page's own outbound links, "related" degrades into
// "something, somewhere, mentioned this", which is how All-purpose cleaners
// ended up under Lead. The in-body "See also" keeps the full graph.
const CONNECTION_CAP = 3

export default (() => {
  const Rail: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const slug = fileData.slug
    // Gate the in-page anchor on the section existing, the way Snav's utility
    // links do — index pages carry no References heading.
    const hasRefs = (fileData.toc ?? []).some((e: any) => /^references$/i.test((e.text ?? "").trim()))
    // OUTBOUND ONLY, one per category first. A page this one links to is a
    // connection this page asserts; an inbound link is another page's
    // assertion, and a hub like a metal collects hundreds of those. Inbound is
    // used only to top up when the page asserts fewer than three itself.
    const buckets = relatedByCategory({ fileData, allFiles })
    // Within a category, DOCUMENT ORDER, not the alphabet. Sorting by label put
    // "Aluminum" first on lead, cadmium, almond, rice and the ATSDR page alike;
    // Lead's own prose links cadmium, mercury, arsenic, in that order.
    // Directory pages ("Regulations by jurisdiction") are dropped: they carry no
    // `type:` frontmatter and are navigation, not a topical connection.
    const inCat = (key: string, want: boolean) =>
      (buckets.get(key) ?? [])
        .filter((l) => l.outbound === want && l.topical)
        .sort((a, b) => a.order - b.order)
    const pick = (want: boolean) => {
      const first = GROUPS.map((g) => inCat(g.key, want)[0])
      const rest = GROUPS.flatMap((g) => inCat(g.key, want).slice(1))
      return [...first, ...rest].filter(Boolean)
    }
    const connections = [...pick(true), ...pick(false)].slice(0, CONNECTION_CAP)

    const rel = (to: string) => (slug ? resolveRelative(slug, to as SimpleSlug) : `/${to}`)
    // Static assets are not page slugs, so they resolve from the site root the
    // way Head.tsx does rather than through resolveRelative's slug logic.
    const asset = (to: string) => joinSegments(slug ? pathToRoot(slug) : ".", to)

    return (
      <>
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
