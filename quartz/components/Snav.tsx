import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, type SimpleSlug, type FullSlug } from "../util/path"
import { concatenateResources } from "../util/resources"
import { modelForType } from "../content-model"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import pageHistoryTimeline from "./scripts/pageHistoryTimeline.inline"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import snavScript from "./scripts/snav.inline"

// The proof's curated left section-nav (.snav): core sections as `.sec` with
// their sub-sections as `.sub`, secondary sections folded under "Further detail",
// then the icon utility links. Emits the proof's exact classes so proof.css
// styles it identically to hmi-real-content. Renders the inner content only;
// renderPage wraps it in <aside class="snav">.
//
// Metal pages additionally get a fixed IA (Examine-style): the orientation
// sections are grouped under one expandable "Overview", and the critical layers
// "Vulnerable populations", "Open questions" and "Frequently asked questions"
// are promoted to their own top-level headers. This is imposed at render time
// over the page's existing H2s, so it applies to every metal page uniformly
// without restructuring content. See the metal branch below.

const DROP = /^(sources|references|page history|update history)$/i // apparatus — reached via the icon utility links
// Secondary / non-reader-primary sections, folded under "Further detail".
const FOLD = /app-?\s?layer|planned sections|^status$|metal pages|further detail/i

// Universal apparatus footer: Sources (the source-page inventory at /sources),
// Update History (this page's git timeline), and References (this page's citation
// list, the "## Sources" section the inline [n] markers connect to). Sources and
// References are deliberately distinct: the corpus of source documents vs. this
// page's specific citations.
// `need` gates an anchor link on the target section actually existing on the
// page (the toc still carries "Sources"/"Page history" even though the section
// nav drops them), so directory pages without those sections don't render dead
// anchors. "Sources" is a page link (/sources) and always shows.
const UTIL: { to?: string; anchor?: string; label: string; d: string; need?: RegExp }[] = [
  { to: "sources", label: "Sources", d: "M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" },
  { anchor: "update-history", label: "Update History", need: /^update history$/i, d: "M3 3v5h5 M3.05 13A9 9 0 1 0 6 5.3L3 8 M12 7v5l3 2" },
  { anchor: "references", label: "References", need: /^references$/i, d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
]

// The rail note under "On this page" (artifact 431). v3's full sentence opens
// "Every <kind> page carries these rails, in this order" — true of v3, where
// the rails are a fixed 01-09 taxonomy authored per screen. These rails are the
// page's own headings, so that clause would be a false statement on a public
// page. Only the half that is true here is shipped.
function RailNote() {
  return <p class="snav-note">Page-specific detail nests under a rail; it never becomes one.</p>
}

type Sec = { slug?: string; text?: string; subs: any[]; fold: boolean }

function Icons({ slug, toc }: { slug: FullSlug; toc: { text?: string }[] }) {
  const has = (re: RegExp) => toc.some((e) => re.test((e.text ?? "").trim()))
  const links = UTIL.filter((u) => !u.need || has(u.need))
  if (links.length === 0) return null
  return (
    <>
      <div class="divider" />
      {links.map((u) => (
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

export default (() => {
  const Snav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "index") as FullSlug
    const toc = fileData.toc ?? []

    let entries = toc.filter((e) => !DROP.test((e.text ?? "").trim()))
    const sections: Sec[] = []
    if (entries.length) {
      const minD = Math.min(...entries.map((e) => e.depth))
      const topCount = entries.filter((e) => e.depth === minD).length
      if (topCount === 1 && entries.length > 1) entries = entries.filter((e) => e.depth > minD)
      const secD = Math.min(...entries.map((e) => e.depth))
      let cur: Sec | null = null
      for (const e of entries) {
        if (e.depth === secD || !cur) {
          cur = { slug: e.slug, text: e.text, subs: [] as any[], fold: FOLD.test(e.text ?? "") }
          sections.push(cur)
        } else {
          cur.subs.push(e)
        }
      }
    }

    // ---- Registry-driven IA (quartz/content-model.ts), keyed by frontmatter type ----
    // Groups the page's H2s under the parent taxonomy for its type (metal /
    // ingredient / product-category / regulator), matched by role. Unknown types
    // fall through to the generic branch below.
    const model = modelForType(fileData.frontmatter?.type as string | undefined, slug)
    if (model) {
      const title = ((fileData.frontmatter?.title as string) ?? slug.split("/").pop() ?? "").trim()
      const ctx = { pageTitle: title.charAt(0).toLowerCase() + title.slice(1) }
      const relabel = (text?: string) => {
        const t = (text ?? "").trim()
        for (const ov of model.labelOverrides ?? []) if (ov.pattern.test(t)) return ov.label(ctx)
        return text
      }
      const visible = sections.filter((s) => !model.hide.some((re) => re.test((s.text ?? "").trim())))
      const claimed = new Set<Sec>()
      const groups = model.parents
        .map((parent) => {
          const matched = visible.filter(
            (s) =>
              !claimed.has(s) &&
              parent.children.some((c) => c.patterns.some((re) => re.test((s.text ?? "").trim()))),
          )
          matched.forEach((s) => claimed.add(s))
          return { parent, matched }
        })
        .filter((g) => g.matched.length > 0)
      const ungrouped = visible.filter((s) => !claimed.has(s))

      return (
        <>
          {groups.map(({ parent, matched }) =>
            parent.direct ? (
              <div class="grp">
                <a class="sec" href={`#${matched[0].slug}`} data-for={matched[0].slug}>
                  {parent.label}
                </a>
              </div>
            ) : (
              <div class={parent.defaultOpen ? "grp expanded" : "grp"}>
                <a class="sec" href={`#${matched[0].slug}`} data-for={matched[0].slug}>
                  {parent.label}
                </a>
                {matched
                  // Drop a child whose label equals the parent's (e.g. the
                  // "Overview" section under the "Overview" parent) — the parent
                  // header already links to it.
                  .filter((s) => (relabel(s.text) ?? "").trim().toLowerCase() !== parent.label.toLowerCase())
                  .map((s) => (
                    <a class="sub" href={`#${s.slug}`} data-for={s.slug}>
                      {relabel(s.text)}
                    </a>
                  ))}
              </div>
            ),
          )}
          {ungrouped.length > 0 && (
            <details class="grp snav-further">
              <summary class="sec">Further detail</summary>
              {ungrouped.map((s) => (
                <a class="sub" href={`#${s.slug}`} data-for={s.slug}>
                  {s.text}
                </a>
              ))}
            </details>
          )}
          <Icons slug={slug} toc={toc} />
          <RailNote />
        </>
      )
    }

    // ---- Generic pages: core sections + "Further detail" + icons ----
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
        <Icons slug={slug} toc={toc} />
        <RailNote />
      </>
    )
  }
  Snav.afterDOMLoaded = concatenateResources(snavScript, pageHistoryTimeline)
  return Snav
}) satisfies QuartzComponentConstructor
