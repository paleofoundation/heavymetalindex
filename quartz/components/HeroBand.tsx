import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import style from "./styles/heroBand.scss"

// v3 hero band. Replaces the glyph/pill/card hero wholesale — this is a
// re-layout, not a re-skin. Reference: "Heavy Metal Index v3.dc.html" lines
// 362-405 (markup) and 2011 (grid). renderPage.tsx lifts this outside
// #quartz-root so it spans the viewport; the root class stays `hero-band` so
// that lift keeps working.
//
// BEFORE THIS LANDS: delete the `.hero-*` block from quartz/styles/proof-design.scss
// (the run beginning "── microbiomemedicine-style hero band ──", ~lines 251-285).
// Those rules style the old three-column glyph layout and will fight this file.

const SECTION_LABEL: Record<string, string> = {
  metals: "Metal profile",
  ingredients: "Ingredient profile",
  products: "Product category",
  regulations: "Regulation",
  regulators: "Regulatory body",
  sources: "Source record",
  synthesis: "Synthesis finding",
  testing: "Testing method",
  mitigation: "Mitigation",
  "supply-chain": "Supply chain",
  microbiome: "Microbiome",
}

const CRUMB_LABEL: Record<string, string> = {
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

const ORCID = "0000-0002-2348-7259"

type Row = { k: string; v: string }

// Snapshot rows come from frontmatter where present. A page that declares
// `snapshot: [{k, v}]` wins; otherwise assemble from the counts the frontmatter
// already carries. Never render an empty box — if there is nothing to say, the
// column collapses and the hero runs full width.
function snapshotRows(fm: Record<string, unknown>, section: string): Row[] {
  const declared = fm.snapshot
  if (Array.isArray(declared)) {
    return declared
      .map((r) => {
        const row = r as Record<string, unknown>
        const k = typeof row.k === "string" ? row.k : typeof row.label === "string" ? row.label : ""
        const v = row.v ?? row.value
        return k && v !== undefined && v !== null ? { k, v: String(v) } : null
      })
      .filter((r): r is Row => r !== null)
  }

  const rows: Row[] = []
  const num = (x: unknown) => (typeof x === "number" || typeof x === "string" ? String(x) : undefined)
  const sources = num(fm.sources) ?? num(fm.n_sources)
  if (sources) {
    rows.push({
      k: section === "metals" ? "Corpus sources on this metal" : "Corpus sources",
      v: sources,
    })
  }
  const pairs: Array<[unknown, string]> = [
    [fm.n_ingredients, "Ingredient profiles"],
    [fm.n_products, "Product categories"],
    [fm.n_regulations, "Regulations citing this"],
    [fm.n_claims, "Registered claims"],
  ]
  for (const [value, label] of pairs) {
    const v = num(value)
    if (v) rows.push({ k: label, v })
  }
  return rows
}

export default (() => {
  const HeroBand: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "") as FullSlug
    const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>
    const parts = slug.split("/")
    const section = parts.length > 1 ? parts[0] : ""

    const rawTitle = (typeof fm.title === "string" && fm.title) || parts[parts.length - 1] || ""
    if (!rawTitle) return null

    // v3 renders "Lead (Pb)" — the symbol belongs in the title, not in a glyph.
    const symbol = typeof fm.symbol === "string" ? fm.symbol : undefined
    const title = symbol && !rawTitle.includes("(") ? `${rawTitle} (${symbol})` : rawTitle

    const kind = (typeof fm.kind === "string" && fm.kind) || SECTION_LABEL[section] || ""
    const crumb = CRUMB_LABEL[section] ?? (section ? section.charAt(0).toUpperCase() + section.slice(1) : "")

    let dek =
      (typeof fm.dek === "string" && fm.dek) ||
      (fileData as { description?: string }).description ||
      (typeof fm.description === "string" ? fm.description : "")
    const escaped = rawTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    dek = dek
      .replace(new RegExp(`^\\s*${escaped}\\s+`, "i"), "")
      .replace(/^\s*(quick read|overview|at a glance)[\s:—-]*/i, "")
      .trim()
    if (dek.length > 320) dek = dek.slice(0, 317).replace(/\s+\S*$/, "") + "…"

    const updated = fm.updated ? String(fm.updated).slice(0, 10) : undefined
    const rev = fm.rev !== undefined && fm.rev !== null ? String(fm.rev) : undefined
    const rows = snapshotRows(fm, section)

    const homeHref = resolveRelative(slug, "index" as SimpleSlug)
    const sectionHref = section ? resolveRelative(slug, `${section}/` as SimpleSlug) : undefined

    return (
      <div class={rows.length ? "hero-band" : "hero-band hero-band--nosnapshot"}>
        <div class="hero-grid">
          <div class="hero-main">
            <nav class="hero-crumb" aria-label="Breadcrumb">
              <a href={homeHref}>Index</a>
              {sectionHref ? (
                <>
                  <span aria-hidden="true">/</span>
                  <a href={sectionHref}>{crumb}</a>
                </>
              ) : null}
              <span aria-hidden="true">/</span>
              <span class="cur">{rawTitle}</span>
            </nav>

            <div class="hero-titlerow">
              <h1 class="hero-title">{title}</h1>
              {kind ? <span class="hero-kind">{kind}</span> : null}
            </div>

            {dek ? <p class="hero-dek">{dek}</p> : null}

            <div class="hero-meta">
              <span>
                Author{" "}
                <a class="hero-author" href={resolveRelative(slug, "about" as SimpleSlug)}>
                  Karen Pendergrass
                </a>{" "}
                ·{" "}
                <a
                  class="hero-orcid"
                  href={`https://orcid.org/${ORCID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ORCID {ORCID}
                </a>
              </span>
              {updated ? <span class="hero-stamp">UPDATED {updated}</span> : null}
              {rev ? <span class="hero-stamp">REV {rev}</span> : null}

              {/* Grouped so the three actions stay on one line. `.hero-meta` is
                  a wrapping flex row (v3 artifact 380: `flex-wrap: wrap`), and
                  v3's row carries only TWO buttons — Download PDF is ours. That
                  third item pushed past the 892px main column at 1440 and wrapped
                  alone onto a second line. Wrapping them in their own flex group
                  lets the meta text reflow while the buttons travel together. */}
              <span class="hero-acts">
                <a class="hero-act" href="#cite-this-page">
                  Cite this page
                </a>
                <a class="hero-act" href="#update-history">
                  Version history
                </a>
                <a class="hero-act hero-act--solid" href={`/api/evidence-packet?slug=${slug}`}>
                  Download PDF
                </a>
              </span>
            </div>
          </div>

          {rows.length ? (
            <div class="hero-snapshot">
              <div class="hero-snapshot-head">Page snapshot</div>
              <div class="hero-snapshot-body">
                {rows.map((r) => (
                  <div class="hero-snapshot-row">
                    <span class="hero-snapshot-k">{r.k}</span>
                    <span class="hero-snapshot-v">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }

  HeroBand.css = [style]
  return HeroBand
}) satisfies QuartzComponentConstructor
