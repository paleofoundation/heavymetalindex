import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { type FullSlug } from "../util/path"
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

// Nothing is dropped from the rail any more. References / Sources / Update
// history used to be stripped here and re-added as icon links; they are now
// ordinary numbered rails appended in v3's order by <Apparatus>, so they must
// be excluded from the CONTENT sections to avoid appearing twice.
const DROP = /^(sources|references|page history|update history)$/i
// Secondary / non-reader-primary sections, folded under "Further detail".
const FOLD = /app-?\s?layer|planned sections|^status$|metal pages|further detail/i

// APPARATUS RAILS — References, Sources, Update history.
//
// v3 renders these as ordinary numbered rails (artifact 1795: rails 07
// References, 08 Sources with a record-count badge, 09 Update history), each
// anchored to the page's OWN section (#references, #sources, #history), and it
// also renders all three as body sections (artifact 1347, 1389, 1427).
//
// This previously dropped them from the rail entirely and re-rendered them as
// icon links, with "Sources" pointing at the GLOBAL /sources archive. That was
// wrong twice over: it demoted them out of the numbered rail, and it sent the
// reader off-page. v3's Sources section is explicitly topic-scoped — "Every
// document in the corpus that reports on {{ page.topic }}, whether or not this
// page cites it" (artifact 1391) — so the rail must point at this page's own
// section, not the archive.
//
// `need` still gates each one on the section actually existing, so directory
// pages without them render no dead anchor.
//
// THE NUMBERS ARE A FIXED TAXONOMY, NOT A SEQUENCE. Extracted from every screen
// record in the artifact:
//
//   01 Overview  02 Evidence  03 Limits  04 Interpretation  05 Uncertainty
//   06 Questions  07 References  08 Sources  09 Update history
//
// A screen SKIPS the numbers it lacks — the ingredient screen runs 01, 02, 05,
// 07, 08, 09, and the products index runs 01, 02, 09. The rail was numbered by
// a pure CSS counter (proof-design.scss:426), which can only ever count
// 01, 02, 03..., so every page whose rail has a gap was mislabelled: /products
// showed "03 Update history" where v3 pins it at 09.
//
// Content sections still count sequentially, which is correct and matches all
// five index screens. Only the apparatus is pinned, and it is pinned here as
// data so the number travels with the entry rather than with its position.
const APPARATUS: { anchor: string; label: string; need: RegExp; badge?: boolean; n: string }[] = [
  { anchor: "references", label: "References", need: /^references$/i, n: "07" },
  { anchor: "sources", label: "Sources", need: /^sources$/i, badge: true, n: "08" },
  { anchor: "update-history", label: "Update history", need: /^update history$/i, n: "09" },
]

// `contentCount` guards the pinned numbers against collision. The taxonomy only
// holds while a screen has at most six content sections, which is true of every
// v3 screen. /regulations currently lists all eleven instruments as top-level
// rails, so pinning would render 01..11 followed by 09 - two 09s, out of order,
// and a worse defect than the one being fixed. Where the rail is that long, the
// sequence stays sequential until that page's IA is corrected.
function Apparatus({
  toc,
  count,
  contentCount,
}: {
  toc: { text?: string }[]
  count?: string
  contentCount: number
}) {
  const has = (re: RegExp) => toc.some((e) => re.test((e.text ?? "").trim()))
  const items = APPARATUS.filter((u) => has(u.need))
  if (items.length === 0) return null
  const pin = contentCount <= 6
  return (
    <>
      {items.map((u) => (
        <div class="grp">
          <a class="sec" href={`#${u.anchor}`} data-for={u.anchor} data-n={pin ? u.n : undefined}>
            {u.label}
            {u.badge && count ? <span class="snav-badge">{count}</span> : null}
          </a>
        </div>
      ))}
    </>
  )
}

// The rail note under "On this page" (artifact 431). v3's full sentence opens
// "Every <kind> page carries these rails, in this order" — true of v3, where
// the rails are a fixed 01-09 taxonomy authored per screen. These rails are the
// page's own headings, so that clause would be a false statement on a public
// page. Only the half that is true here is shipped.
function RailNote() {
  return <p class="snav-note">Page-specific detail nests under a rail; it never becomes one.</p>
}

type Sec = { slug?: string; text?: string; subs: any[]; fold: boolean }

export default (() => {
  const Snav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "index") as FullSlug
    const toc = fileData.toc ?? []
    // Same value the provenance card shows — v3 badges the Sources rail with
    // the number of corpus records routed to this page's topic.
    const fmAny = (fileData.frontmatter ?? {}) as any
    const sourceCount = fmAny.n_sources ?? fmAny.corpus_count ?? (fileData as any).corpusCount
    const sourceCountLabel = sourceCount != null ? String(sourceCount) : undefined

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
          <Apparatus toc={toc} count={sourceCountLabel} contentCount={groups.length + (ungrouped.length ? 1 : 0)} />
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
        <Apparatus toc={toc} count={sourceCountLabel} contentCount={core.length + (further.length ? 1 : 0)} />
        <RailNote />
      </>
    )
  }
  Snav.afterDOMLoaded = concatenateResources(snavScript, pageHistoryTimeline)
  return Snav
}) satisfies QuartzComponentConstructor
