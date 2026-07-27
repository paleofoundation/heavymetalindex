import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, type SimpleSlug, type FullSlug } from "../util/path"
import style from "./styles/leftNavUtilities.scss"

// Curated icon utility links in the left rail — the evidence-database, research-feed
// and references group. Fixed, always-valid site-level destinations, distinct
// from the per-page section nav above and the cross-reference counts below.
const NAV: { to: string; label: string; d: string }[] = [
  { to: "coverage", label: "Evidence database", d: "M3 3v18h18 M19 9l-5 5-4-4-3 3" },
  {
    to: "sources",
    label: "Source corpus",
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  },
  { to: "synthesis", label: "Synthesis", d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8" },
  { to: "regulators", label: "Regulatory bodies", d: "M3 21h18 M5 21V7l8-4 8 4v14 M9 9h.01 M9 13h.01 M9 17h.01" },
  { to: "audits", label: "Audit dashboard", d: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
]

export default (() => {
  const LeftNavUtilities: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "index") as FullSlug
    return (
      <nav class={displayClass ? `hmi-leftnav-util ${displayClass}` : "hmi-leftnav-util"} aria-label="Reference utilities">
        {NAV.map((item) => (
          <a href={resolveRelative(slug, item.to as SimpleSlug)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d={item.d} />
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    )
  }
  LeftNavUtilities.css = style
  return LeftNavUtilities
}) satisfies QuartzComponentConstructor
