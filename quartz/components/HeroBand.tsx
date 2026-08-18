import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative, simplifySlug } from "../util/path"
import style from "./styles/heroBand.scss"
import { hasScholarlyPdf } from "./scholarlyPdf"

// v3 hero band. Replaces the glyph/pill/card hero wholesale — this is a
// re-layout, not a re-skin. Reference: "Heavy Metal Index v3.dc.html" lines
// 362-405 (markup) and 2011 (grid). renderPage.tsx lifts this outside
// #quartz-root so it spans the viewport; the root class stays `hero-band` so
// that lift keeps working.
//
// BEFORE THIS LANDS: delete the `.hero-*` block from quartz/styles/proof-design.scss
// (the run beginning "── microbiomemedicine-style hero band ──", ~lines 251-285).
// Those rules style the old three-column glyph layout and will fight this file.

// CHROME-SPEC §3, the screen map. TWO defects live on the site come from this
// table not existing:
//
//   1. `/metals` renders `Index / Metals / Metals`. The breadcrumb is
//      `Index / <section> / <leaf>` where the LEAF IS THE PAGE, not the section.
//      On an index page the leaf is the collection's own name for itself —
//      `All metals` — never a repeat of the crumb.
//
//   2. `/metals` wears `METAL PROFILE`, which is the badge for a page about ONE
//      metal. The badge is a function of SCREEN TYPE, not page kind: it says
//      what kind of DOCUMENT you are reading. A registry of metal pages is not
//      a metal. `/metals` is `REFERENCE LAYER`.
//
// The general rule, which is what prevents the four siblings of defect 2:
// **an index or directory page never wears the badge of the thing it indexes.**
//
// Labels are rendered as written; heroBand.scss uppercases them.
type Screen = { crumb: string; leaf?: string; badge: string }

// Detail screens — one page about one thing. §3 rows 7-14.
const DETAIL: Record<string, Screen> = {
  metals: { crumb: "Metals", badge: "Metal" },
  ingredients: { crumb: "Ingredients", badge: "Ingredient" },
  products: { crumb: "Products", badge: "Product-category" },
  regulations: { crumb: "Regulations", badge: "Regulation" },
  sources: { crumb: "Sources", badge: "Source" },
  // §3 puts findings under Evidence, not under their own directory name: a
  // reader arriving at a finding came through Evidence.
  synthesis: { crumb: "Evidence", badge: "Synthesis" },
  // Sections the repo has and v3's fifteen screens do not cover. Same rule
  // applied rather than left to fall through to a section label.
  regulators: { crumb: "Regulators", badge: "Regulatory body" },
  testing: { crumb: "Testing", badge: "Testing method" },
  mitigation: { crumb: "Mitigation", badge: "Mitigation" },
  "supply-chain": { crumb: "Supply chain", badge: "Supply chain" },
  microbiome: { crumb: "Microbiome", badge: "Microbiome" },
  corpus: { crumb: "Corpus", badge: "Corpus view" },
  audits: { crumb: "Evidence", badge: "Audit" },
  methodology: { crumb: "Evidence", badge: "Method" },
}

// Index screens — a page ABOUT a collection. §3 rows 3, 4, 5, 13.
const INDEX: Record<string, Screen> = {
  metals: { crumb: "Metals", leaf: "All metals", badge: "Reference layer" },
  products: { crumb: "Products", leaf: "All categories", badge: "Catalogue" },
  regulations: { crumb: "Regulations", leaf: "All instruments", badge: "Register" },
  synthesis: { crumb: "Evidence", leaf: "All findings", badge: "Directory" },
  // Not among v3's fifteen, but they are indexes, so the rule applies.
  ingredients: { crumb: "Ingredients", leaf: "All ingredients", badge: "Directory" },
  sources: { crumb: "Sources", leaf: "All sources", badge: "Directory" },
  regulators: { crumb: "Regulators", leaf: "All bodies", badge: "Directory" },
  testing: { crumb: "Testing", leaf: "All methods", badge: "Directory" },
  mitigation: { crumb: "Mitigation", leaf: "All strategies", badge: "Directory" },
  "supply-chain": { crumb: "Supply chain", leaf: "All pathways", badge: "Directory" },
  microbiome: { crumb: "Microbiome", leaf: "All pages", badge: "Directory" },
  corpus: { crumb: "Corpus", leaf: "All views", badge: "Directory" },
  audits: { crumb: "Evidence", leaf: "All audits", badge: "Directory" },
  methodology: { crumb: "Evidence", leaf: "All methods", badge: "Directory" },
}

// §3 row 7. `<section>/categories/<x>` is a level ABOVE the individual pages and
// below the section index, in products, ingredients and sources alike.
const CATEGORY_BADGE = "Category"

function screenFor(parts: string[]): Screen {
  const section = parts[0]
  const isIndex = parts[parts.length - 1] === "index"
  const inCategories = parts.length >= 3 && parts[1] === "categories"

  if (inCategories && !isIndex) {
    return { crumb: DETAIL[section]?.crumb ?? section, badge: CATEGORY_BADGE }
  }
  if (inCategories && isIndex) {
    return { crumb: DETAIL[section]?.crumb ?? section, leaf: "All categories", badge: "Directory" }
  }
  if (isIndex) {
    return (
      INDEX[section] ?? {
        crumb: DETAIL[section]?.crumb ?? section,
        leaf: "All pages",
        badge: "Directory",
      }
    )
  }
  return DETAIL[section] ?? { crumb: section, badge: "" }
}

const ORCID = "0000-0002-2348-7259"

// The official ORCID iD icon (green disc + "iD"). This is the customary way an
// ORCID iD is surfaced in a journal-article byline worldwide: the icon stands
// in for the spelled-out identifier, which lives on the link target and in the
// accessible label. Inline SVG (no external asset) so it survives the static
// build. Colours are the ORCID brand green (#A6CE39) on white and are the same
// on any background, so it reads on both the burgundy hero and light surfaces.
const OrcidIdIcon = () => (
  <svg
    class="orcid-id-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="#A6CE39"
      d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"
    />
    <path fill="#FFFFFF" d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z" />
    <path
      fill="#FFFFFF"
      d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"
    />
    <path
      fill="#FFFFFF"
      d="M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1C84.2,46.7,88.7,51.3,88.7,56.8z"
    />
  </svg>
)

type Row = { k: string; v: string }

// Snapshot rows come from frontmatter where present. A page that declares
// `snapshot: [{k, v}]` wins; otherwise assemble from the counts the frontmatter
// already carries. Never render an empty box — if there is nothing to say, the
// column collapses and the hero runs full width.
//
// `citedBy` is the number of wiki pages that link to this one, counted from the
// live link graph (the same source the Backlinks component reads). It is the
// real, build-time footprint of a source record or a regulation in the corpus —
// not a frontmatter number — and it is what gives those two screens a snapshot
// where before they had none (the pages carry no `sources`/`n_*` counts, so the
// box did not render and the hero ran full width against v3, which gives both a
// panel). `isIndex` keeps a section's directory page out of the per-page rows.
function snapshotRows(
  fm: Record<string, unknown>,
  section: string,
  citedBy: number,
  isIndex: boolean,
): Row[] {
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
  const str = (x: unknown) => (typeof x === "string" && x.trim() ? x.trim() : undefined)
  const cited = (label: string): Row | null =>
    citedBy > 0 ? { k: label, v: `${citedBy} page${citedBy === 1 ? "" : "s"}` } : null

  // A SOURCE record: its footprint (cited-by), what it measured, its grade, its
  // year. All real frontmatter or the link graph; none invented.
  if (!isIndex && section === "sources") {
    const metals = Array.isArray(fm.metals) ? fm.metals.filter(Boolean).length : 0
    return [
      cited("Cited by"),
      metals ? { k: "Metals measured", v: String(metals) } : null,
      str(fm.evidence_tier) ? { k: "Evidence tier", v: String(fm.evidence_tier).toUpperCase() } : null,
      num(fm.year) ? { k: "Year", v: String(fm.year) } : null,
    ].filter((r): r is Row => r !== null)
  }

  // A REGULATION instrument: how many pages invoke it, whose law it is, which
  // metal, and when it took effect.
  if (!isIndex && section === "regulations") {
    const metal = str(fm.metal) ?? (Array.isArray(fm.metals) && fm.metals.length === 1 ? str(fm.metals[0]) : undefined)
    return [
      cited("Referenced by"),
      str(fm.jurisdiction) ? { k: "Jurisdiction", v: String(fm.jurisdiction) } : null,
      metal ? { k: "Metal", v: metal } : null,
      str(fm.effective_date) ? { k: "Effective", v: String(fm.effective_date).slice(0, 10) } : null,
    ].filter((r): r is Row => r !== null)
  }

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
  const HeroBand: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "") as FullSlug
    const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>
    const parts = slug.split("/")
    const section = parts.length > 1 ? parts[0] : ""
    const isIndex = parts[parts.length - 1] === "index"

    // Cited-by count from the live link graph — the same read as Backlinks.tsx:
    // every page whose resolved links include this page's SIMPLIFIED slug (that
    // is what `file.links` holds). renderPage spreads all of componentData into
    // HeroBand, so allFiles is already here; this adds no frontmatter and no
    // generator.
    const simpleSlug = simplifySlug(slug)
    const citedBy = Array.isArray(allFiles)
      ? allFiles.filter((f) => f.links?.includes(simpleSlug)).length
      : 0

    const rawTitle = (typeof fm.title === "string" && fm.title) || parts[parts.length - 1] || ""
    if (!rawTitle) return null

    // v3 renders "Lead (Pb)" — the symbol belongs in the title, not in a glyph.
    const symbol = typeof fm.symbol === "string" ? fm.symbol : undefined
    const title = symbol && !rawTitle.includes("(") ? `${rawTitle} (${symbol})` : rawTitle

    const screen = section ? screenFor(parts) : { crumb: "", badge: "" }
    // Frontmatter still overrides, per the component's contract — but it now
    // overrides a screen-type badge rather than a section label.
    const kind = (typeof fm.kind === "string" && fm.kind) || screen.badge || ""
    const crumb =
      screen.crumb || (section ? section.charAt(0).toUpperCase() + section.slice(1) : "")
    // The leaf is the PAGE. On an index it is the collection's name for itself;
    // everywhere else it is the page's own title. Deliberately NOT guarded with
    // a "if leaf === crumb then …" fallback: that would mask the duplication
    // the gate asserts against, and a section this map has not learned yet
    // should fail loudly rather than render a repaired-looking crumb.
    const leaf = screen.leaf ?? rawTitle

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
    const rows = snapshotRows(fm, section, citedBy, isIndex)

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
              <span class="cur">{leaf}</span>
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
                <a
                  class="hero-orcid"
                  href={`https://orcid.org/${ORCID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ORCID iD ${ORCID}`}
                  title={`ORCID iD ${ORCID}`}
                >
                  <OrcidIdIcon />
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
                {/* Download PDF points at the STATIC scholarly PDF that
                    postbuild-synthesis-pdf.mjs emits to public/<slug>.pdf — the
                    same document Head.tsx sets as citation_pdf_url. It previously
                    pointed at /api/evidence-packet, which returns a JSON manifest,
                    not a PDF, so the button delivered JSON. hasScholarlyPdf is the
                    generator's own eligibility rule, so the button shows only
                    where the PDF exists (never a 404). */}
                {hasScholarlyPdf(fileData) && (
                  <a class="hero-act hero-act--solid" href={`/${slug}.pdf`}>
                    Download PDF
                  </a>
                )}
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
