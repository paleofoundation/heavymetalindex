import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"

// microbiomemedicine-style full-width hero band, in HMI burgundy. Renders above
// the article's 3-column layout: left glyph, center (breadcrumb / title /
// description / action pills), right (researched-by + Page Snapshot card). All
// data comes from frontmatter + Quartz's auto description. renderPage lifts it
// outside #quartz-root so it spans the viewport; the wrapper re-centers to the
// page width. Structure mirrors .research-hero on microbiomemedicine.com.

const SECTION_LABELS: Record<string, string> = {
  metals: "Metals",
  ingredients: "Ingredients",
  products: "Products",
  regulations: "Regulations",
  regulators: "Regulators",
  sources: "Sources",
  synthesis: "Synthesis",
  testing: "Testing",
  mitigation: "Mitigation",
  "supply-chain": "Supply chain",
  microbiome: "Microbiome",
}

function svg(d: string) {
  return (
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
      <path d={d} />
    </svg>
  )
}
const ACT = {
  bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
  quote:
    "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2 M15 21c3 0 7-1 7-8V5c0-1.25-.757-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  share: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M16 6l-4-4-4 4 M12 2v13",
  doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",
  history: "M3 3v5h5 M3.05 13A9 9 0 1 0 6 5.3L3 8 M12 7v5l3 2",
}

export default (() => {
  const HeroBand: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "") as FullSlug
    const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>
    const parts = slug.split("/")
    const section = parts.length > 1 ? parts[0] : ""
    const sectionLabel =
      SECTION_LABELS[section] ?? (section ? section.charAt(0).toUpperCase() + section.slice(1) : "")
    const title = (typeof fm.title === "string" && fm.title) || parts[parts.length - 1] || ""
    if (!title) return null
    let desc =
      (fileData as { description?: string }).description ||
      (typeof fm.description === "string" ? fm.description : "")
    // Quartz's auto description often begins "{Title} Quick read {text}" — strip
    // the leading title echo and the section heading so it reads as a lede.
    const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    desc = desc
      .replace(new RegExp(`^\\s*${escaped}\\s+`, "i"), "")
      .replace(/^\s*(quick read|overview|at a glance)[\s:—-]*/i, "")
      .trim()
    if (desc.length > 260) desc = desc.slice(0, 257).replace(/\s+\S*$/, "") + "…"
    const updated = fm.updated ? String(fm.updated).slice(0, 10) : undefined
    const sources = fm.sources ?? fm.n_sources
    const symbol = typeof fm.symbol === "string" ? fm.symbol : undefined
    const homeHref = resolveRelative(slug, "index" as SimpleSlug)
    const sectionHref = section ? resolveRelative(slug, `${section}/` as SimpleSlug) : undefined

    return (
      <div class="hero-band">
        <div class="hero-wrap">
          <div class="hero-left">
            <div class={symbol ? "hero-glyph hero-glyph--symbol" : "hero-glyph"}>
              {symbol ?? title.slice(0, 2)}
            </div>
          </div>

          <div class="hero-center">
            <nav class="hero-crumb" aria-label="Breadcrumb">
              <a href={homeHref}>Home</a>
              {sectionHref ? (
                <>
                  <span class="sep">›</span>
                  <a href={sectionHref}>{sectionLabel}</a>
                </>
              ) : null}
              <span class="sep">›</span>
              <span class="cur">{title}</span>
            </nav>
            <h1 class="hero-title">{title}</h1>
            {desc ? <p class="hero-desc">{desc}</p> : null}
            <div class="hero-actions">
              <a class="hero-pill" href="#sources">
                {svg(ACT.bell)}
                <span>Follow</span>
              </a>
              <a class="hero-pill" href="#sources">
                {svg(ACT.quote)}
                <span>Cite this page</span>
              </a>
              <a class="hero-pill" href="#sources">
                {svg(ACT.download)}
                <span>Evidence packet</span>
              </a>
              <a class="hero-pill" href="#">
                {svg(ACT.share)}
                <span>Share</span>
              </a>
            </div>
          </div>

          <div class="hero-right">
            <div class="hero-researched">
              <div class="hero-researched-label">Researched by</div>
              <div class="hero-author">
                K. Pendergrass <span class="hero-orcid" title="ORCID">iD</span>
              </div>
              {updated ? <div class="hero-updated">Last updated: {updated}</div> : null}
            </div>
            <div class="hero-snapshot">
              <div class="hero-snapshot-title">Page Snapshot</div>
              {sources ? (
                <div class="hero-snapshot-row">
                  {svg(ACT.doc)}
                  <span>
                    <b>{String(sources)}</b> corpus sources
                  </span>
                </div>
              ) : null}
              <div class="hero-snapshot-row">
                {svg(ACT.history)}
                <span>Reconstructable record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return HeroBand
}) satisfies QuartzComponentConstructor
