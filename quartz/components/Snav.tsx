import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { type FullSlug } from "../util/path"
import { concatenateResources } from "../util/resources"
import { modelForType } from "../content-model"
import { getTocLabel } from "../util/tocLabels"
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
const APPARATUS: { anchor: string; label: string; need: RegExp; badge?: boolean }[] = [
  { anchor: "references", label: "References", need: /^references$/i },
  { anchor: "sources", label: "Sources", need: /^sources$/i, badge: true },
  { anchor: "update-history", label: "Updates", need: /^(?:update history|page history)$/i },
]

function apparatusHit(
  toc: { text?: string; slug?: string }[],
  spec: (typeof APPARATUS)[number],
) {
  const text = (entry: { text?: string }) => (entry.text ?? "").trim()
  if (spec.label === "Updates") {
    return (
      toc.find((entry) => /^update history$/i.test(text(entry))) ??
      toc.find((entry) => /^page history$/i.test(text(entry)))
    )
  }
  return toc.find((entry) => spec.need.test(text(entry)))
}

function Apparatus({ toc, count }: { toc: { text?: string; slug?: string }[]; count?: string }) {
  const items = APPARATUS.flatMap((spec) => {
    const hit = apparatusHit(toc, spec)
    if (!hit) return []
    return [{ ...spec, anchor: hit.slug || spec.anchor }]
  })
  if (items.length === 0) return null
  return (
    <>
      {items.map((u) => (
        <div class="grp">
          <a class="sec" href={`#${u.anchor}`} data-for={u.anchor}>
            {u.label}
            {u.badge && count ? <span class="snav-badge">{count}</span> : null}
          </a>
        </div>
      ))}
    </>
  )
}

function RailNote() {
  return null
}

type NavHeading = { slug?: string; text?: string }
type Sec = NavHeading & { subs: NavHeading[]; fold: boolean }

export default (() => {
  const Snav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "index") as FullSlug
    const toc = fileData.toc ?? []
    // Same value the provenance card shows — v3 badges the Sources rail with
    // the number of corpus records routed to this page's topic.
    const fmAny = (fileData.frontmatter ?? {}) as any
    const sourceCount = fmAny.n_sources ?? fmAny.corpus_count ?? (fileData as any).corpusCount
    const sourceCountLabel = sourceCount != null ? String(sourceCount) : undefined
    const headingLink = (heading: NavHeading, className: "sec" | "sub", preferredLabel?: string) => {
      const text = heading.text ?? ""
      const label = getTocLabel(text, heading.slug ?? "", fmAny.toc_labels, preferredLabel ?? text)
      return (
        <a
          class={className}
          href={`#${heading.slug}`}
          data-for={heading.slug}
          title={text}
          aria-label={label === text ? undefined : `${label}: ${text}`}
        >
          {label}
        </a>
      )
    }

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
          cur = { slug: e.slug, text: e.text, subs: [], fold: FOLD.test(e.text ?? "") }
          sections.push(cur)
        } else {
          cur.subs.push(e)
        }
      }
    }

    // ---- Registry-driven IA (quartz/content-model.ts), keyed by frontmatter type ----
    // Groups the page's H2s under the parent taxonomy for its type. Ingredient
    // and product pages share Rice's nine rails. Unknown types fall through to
    // the generic branch below.
    const model = modelForType(fileData.frontmatter?.type as string | undefined, slug, fmAny.page_contract_version)
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
      let ungrouped = visible.filter((s) => !claimed.has(s))
      let ordered = groups
      if (model.absorbUngroupedInto && ungrouped.length > 0) {
        const parent = model.parents.find((item) => item.id === model.absorbUngroupedInto)
        const existing = ordered.find((group) => group.parent.id === model.absorbUngroupedInto)
        if (existing) existing.matched.push(...ungrouped)
        else if (parent) ordered = [...ordered, { parent, matched: ungrouped }]
        ordered = model.parents.flatMap((item) => {
          const group = ordered.find((candidate) => candidate.parent.id === item.id)
          return group && group.matched.length > 0 ? [group] : []
        })
        ungrouped = []
      }

      return (
        <>
          {ordered.map(({ parent, matched }) =>
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
                  .map((s) => headingLink(s, "sub", relabel(s.text)))}
              </div>
            ),
          )}
          {ungrouped.length > 0 && (
            <details class="grp snav-further">
              <summary class="sec">Details</summary>
              {ungrouped.map((s) => headingLink(s, "sub"))}
            </details>
          )}
          <Apparatus toc={toc} count={sourceCountLabel} />
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
            {headingLink(s, "sec")}
            {s.subs.map((c) => headingLink(c, "sub"))}
          </div>
        ))}
        {further.length > 0 && (
          <details class="grp snav-further">
            <summary class="sec">Details</summary>
            {further.map((s) => headingLink(s, "sub"))}
          </details>
        )}
        <Apparatus toc={toc} count={sourceCountLabel} />
        <RailNote />
      </>
    )
  }
  Snav.afterDOMLoaded = concatenateResources(snavScript, pageHistoryTimeline)
  return Snav
}) satisfies QuartzComponentConstructor
