import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, type SimpleSlug, type FullSlug } from "../util/path"

// The proof's curated left section-nav (.snav): core sections as `.sec` with
// their sub-sections as `.sub`, secondary sections folded under "Further detail",
// then the icon utility links. Emits the proof's exact classes so proof.css
// styles it identically to hmi-real-content. Renders the inner content only;
// renderPage wraps it in <aside class="snav">.

const DROP = /^(sources|page history)$/i // apparatus — reached via page foot / utility links
const FOLD = /microbiome|app-?\s?layer|open questions|historical context|further detail/i

const UTIL: { to?: string; anchor?: string; label: string; d: string }[] = [
  { to: "coverage", label: "Evidence Database", d: "M3 3v18h18 M19 9l-5 5-4-4-3 3" },
  { to: "synthesis", label: "Research Feed", d: "M4 11a9 9 0 0 1 9 9 M4 4a16 16 0 0 1 16 16 M5 18.5a1.5 1.5 0 1 0 0 .01z" },
  { anchor: "page-history", label: "Update History", d: "M3 3v5h5 M3.05 13A9 9 0 1 0 6 5.3L3 8 M12 7v5l3 2" },
  { anchor: "sources", label: "References", d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
]

export default (() => {
  const Snav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "index") as FullSlug
    const toc = fileData.toc ?? []

    let entries = toc.filter((e) => !DROP.test((e.text ?? "").trim()))
    const sections: any[] = []
    if (entries.length) {
      const minD = Math.min(...entries.map((e) => e.depth))
      const topCount = entries.filter((e) => e.depth === minD).length
      if (topCount === 1 && entries.length > 1) entries = entries.filter((e) => e.depth > minD)
      const secD = Math.min(...entries.map((e) => e.depth))
      let cur: any = null
      for (const e of entries) {
        if (e.depth === secD || !cur) {
          cur = { slug: e.slug, text: e.text, subs: [] as any[], fold: FOLD.test(e.text ?? "") }
          sections.push(cur)
        } else {
          cur.subs.push(e)
        }
      }
    }
    const core = sections.filter((s) => !s.fold)
    const further = sections.filter((s) => s.fold)

    return (
      <>
        {core.map((s) => (
          <div class="grp">
            <a class="sec" href={`#${s.slug}`} data-for={s.slug}>
              {s.text}
            </a>
            {s.subs.map((c: any) => (
              <a class="sub" href={`#${c.slug}`} data-for={c.slug}>
                {c.text}
              </a>
            ))}
          </div>
        ))}
        {further.length > 0 && (
          <details class="grp snav-further">
            <summary class="sec">Further detail</summary>
            {further.map((s) => (
              <a class="sub" href={`#${s.slug}`} data-for={s.slug}>
                {s.text}
              </a>
            ))}
          </details>
        )}
        <div class="divider" />
        {UTIL.map((u) => (
          <a class="icon" href={u.to ? resolveRelative(slug, u.to as SimpleSlug) : `#${u.anchor}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d={u.d} />
            </svg>
            <span>{u.label}</span>
          </a>
        ))}
      </>
    )
  }
  return Snav
}) satisfies QuartzComponentConstructor
