import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/follow.scss"

// Right-rail "Follow" control — PLACEHOLDER (DECISIONS: a Follow control
// placeholder in the right actions/provenance column). No subscription backend
// is wired yet, so this renders the affordance only: a disabled-feel button
// that links to the page's RSS-equivalent feed once one exists. It is gated to
// the same public reference surface as CiteThisPage so it never appears on
// staff/internal pages.
//
// When the follow/update-subscription backend lands, replace the inert button
// with the real control (e.g. an email-capture popover or a per-page Atom feed
// link) — the markup/class hooks are already in place.

const PUBLIC_PREFIXES = [
  "ingredients/",
  "products/",
  "metals/",
  "regulations/",
  "synthesis/",
  "sources/",
  "mitigation/",
  "supply-chain/",
  "testing/",
  "microbiome/",
  "health/",
]
const PUBLIC_EXACT = new Set([
  "methodology",
  "editorial-standards",
  "errata",
  "licensing",
  "curators",
  "roadmap",
  "coverage",
  "trust",
])

function isFollowable(slug: string | undefined): boolean {
  if (!slug) return false
  if (PUBLIC_EXACT.has(slug)) return true
  return PUBLIC_PREFIXES.some((p) => slug.startsWith(p))
}

export default (() => {
  const Follow: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (!isFollowable(fileData.slug)) return null

    return (
      <div class={classNames(displayClass, "hmi-follow")}>
        <button
          type="button"
          class="hmi-follow-button"
          aria-disabled="true"
          title="Follow this page for updates (coming soon)"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span>Follow updates</span>
        </button>
        <span class="hmi-follow-note">Get notified when this page is revised.</span>
      </div>
    )
  }

  Follow.css = style
  return Follow
}) satisfies QuartzComponentConstructor
