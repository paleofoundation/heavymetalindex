import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot, resolveRelative, type SimpleSlug } from "../util/path"
import { GROUPS, relatedByCategory } from "./relatedGraph"
import { concatenateResources } from "../util/resources"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import citeScript from "./scripts/citeSuperscript.inline"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import railLdScript from "./scripts/railLd.inline"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import railShareScript from "./scripts/railShare.inline"

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

// The discreet rail Share popup (Copy link / X / LinkedIn / Reddit / Email),
// restored to the v3 rail. It was added in commit 2e5b81c0e, then dropped when
// the rail was rewritten to the three v3 blocks; the styles (.rail-share*) and
// runtime (railShare.inline) survived, so this re-wires the markup. It sits ABOVE
// Connections as a page-level action (a discreet bordered button, not a card), so
// the three content blocks below it are unchanged. Targets are built at runtime
// from the live URL by scripts/railShare.inline.ts. Stroked line icons for the
// trigger + neutral actions; filled brand glyphs (monochrome, currentColor) for
// the social targets.
const SHARE_ICON: Record<string, string> = {
  share:
    "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4",
  link: "M9 17H7A5 5 0 0 1 7 7h2 M15 7h2a5 5 0 0 1 0 10h-2 M8 12h8",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
}
const SHARE_BRAND: Record<string, string> = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  reddit:
    "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z",
}
function shareLineIcon(d: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
function shareBrandIcon(d: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
function ShareBlock() {
  return (
    <div class="rail-share" data-hmi-share>
      <button
        type="button"
        class="action"
        aria-haspopup="menu"
        aria-expanded="false"
        data-hmi-share-toggle
      >
        {shareLineIcon(SHARE_ICON.share)}
        <span>Share</span>
      </button>
      <div class="rail-share-menu" role="menu" hidden data-hmi-share-menu>
        <button type="button" class="share-item" role="menuitem" data-hmi-share-copy>
          {shareLineIcon(SHARE_ICON.link)}
          <span>Copy link</span>
        </button>
        <a
          class="share-item"
          role="menuitem"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          data-hmi-share-x
        >
          {shareBrandIcon(SHARE_BRAND.x)}
          <span>Share on X</span>
        </a>
        <a
          class="share-item"
          role="menuitem"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          data-hmi-share-linkedin
        >
          {shareBrandIcon(SHARE_BRAND.linkedin)}
          <span>Share on LinkedIn</span>
        </a>
        <a
          class="share-item"
          role="menuitem"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          data-hmi-share-reddit
        >
          {shareBrandIcon(SHARE_BRAND.reddit)}
          <span>Share on Reddit</span>
        </a>
        <a class="share-item" role="menuitem" href="#" data-hmi-share-email>
          {shareLineIcon(SHARE_ICON.mail)}
          <span>Email a link</span>
        </a>
        <div class="rail-share-status" data-hmi-share-status aria-live="polite"></div>
      </div>
    </div>
  )
}

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
        <ShareBlock />

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
            {hasRefs ? <a href="#references">Citation and references</a> : null}
            <a href={asset("static/evidence-packet-index.json")}>
              Structured evidence export (JSON)
            </a>
            {/* METHOD.md §5 specifies a DISCLOSURE here, not a link — which is
                what makes it buildable. v3 drives it with its own `toggleLd`
                runtime and the repo has none, but the data is already on the
                page: Head.tsx emits the JSON-LD blocks, and railLd.inline fills
                the panel from them on first open. An earlier pass shipped this
                as a bare `#ld-json` anchor with no target, then deleted it as a
                dead link; the disclosure is the third option and the right one. */}
            <details class="rail-ld">
              <summary>Structured data (JSON-LD)</summary>
              <pre class="rail-ld-panel" />
            </details>
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
  Rail.afterDOMLoaded = concatenateResources(citeScript, railLdScript, railShareScript)
  return Rail
}) satisfies QuartzComponentConstructor
