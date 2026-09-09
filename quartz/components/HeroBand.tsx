import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative, simplifySlug } from "../util/path"
import style from "./styles/heroBand.scss"
import { hasScholarlyPdf } from "./scholarlyPdf"
import { KAREN, AuthorPortrait, AuthorProfileHero, OrcidIdIcon } from "./authorIdentity"

// Three-panel masthead adapted from Microbiome Medicine's ArticleView.tsx
// and research-hero styles. HMI keeps its own typography, metadata and actions.
// renderPage.tsx lifts this outside #quartz-root to span the viewport.

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
  regulations: {
    crumb: "Regulations",
    leaf: "All instruments",
    badge: "Register",
  },
  synthesis: { crumb: "Evidence", leaf: "All findings", badge: "Directory" },
  // Not among v3's fifteen, but they are indexes, so the rule applies.
  ingredients: {
    crumb: "Ingredients",
    leaf: "All ingredients",
    badge: "Directory",
  },
  sources: { crumb: "Sources", leaf: "All sources", badge: "Directory" },
  regulators: { crumb: "Regulators", leaf: "All bodies", badge: "Directory" },
  testing: { crumb: "Testing", leaf: "All methods", badge: "Directory" },
  mitigation: {
    crumb: "Mitigation",
    leaf: "All strategies",
    badge: "Directory",
  },
  "supply-chain": {
    crumb: "Supply chain",
    leaf: "All pathways",
    badge: "Directory",
  },
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
    return {
      crumb: DETAIL[section]?.crumb ?? section,
      leaf: "All categories",
      badge: "Directory",
    }
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

type Row = { k: string; v: string }

// Snapshot rows come from frontmatter where present. A page that declares
// `snapshot: [{k, v}]` wins; otherwise assemble from the counts the frontmatter
// already carries. Never render an empty box — if there is nothing to say, the
// snapshot is omitted while the author panel remains visible.
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
  const num = (x: unknown) =>
    typeof x === "number" || typeof x === "string" ? String(x) : undefined
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
      str(fm.evidence_tier)
        ? { k: "Evidence tier", v: String(fm.evidence_tier).toUpperCase() }
        : null,
      num(fm.year) ? { k: "Year", v: String(fm.year) } : null,
    ].filter((r): r is Row => r !== null)
  }

  // A REGULATION instrument: how many pages invoke it, whose law it is, which
  // metal, and when it took effect.
  if (!isIndex && section === "regulations") {
    const metal =
      str(fm.metal) ??
      (Array.isArray(fm.metals) && fm.metals.length === 1 ? str(fm.metals[0]) : undefined)
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
    if (String(slug) === KAREN.slug) return <AuthorProfileHero slug={slug} />
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
    // Minted page-level DOI, shown in the masthead the way a journal article
    // carries its DOI under the byline. Guarded against the YAML `null`
    // placeholder that un-minted pages still carry, so the stamp appears only
    // where a resolvable DOI exists.
    const doiRaw = typeof fm.wiki_doi === "string" ? fm.wiki_doi.trim() : ""
    const wikiDoi = doiRaw && doiRaw.toLowerCase() !== "null" ? doiRaw : undefined
    const rows = snapshotRows(fm, section, citedBy, isIndex)

    const homeHref = resolveRelative(slug, "index" as SimpleSlug)
    const sectionHref = section ? resolveRelative(slug, `${section}/` as SimpleSlug) : undefined

    return (
      <div
        class={section === "synthesis" && !isIndex ? "hero-band hero-band--synthesis" : "hero-band"}
      >
        <div class="hero-grid">
          <div class="hero-subject" aria-hidden="true">
            <div class="hero-subject-art">
              {symbol ? (
                <span class="hero-element">{symbol}</span>
              ) : (
                <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M24 28h28a12 12 0 0 1 12 12v57a18 18 0 0 0-15-8H24V28Zm80 0H76a12 12 0 0 0-12 12v57a18 18 0 0 1 15-8h25V28Z" />
                  <path d="M34 43h16M34 54h16M34 65h16M78 43h16M78 54h16M78 65h16" />
                </svg>
              )}
            </div>
            <div class="hero-subject-caption">
              <span>Heavy Metal Index</span>
              <span>{crumb || "Research & reference"}</span>
            </div>
          </div>
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
              {kind ? <span class="hero-kind">{kind}</span> : null}
            </nav>

            <div class="hero-titlerow">
              <h1 class="hero-title">{title}</h1>
            </div>

            {dek ? <p class="hero-dek">{dek}</p> : null}

            <div class="hero-meta">
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

          <aside class="hero-sidebar" aria-label="Page author and snapshot">
            <div class="hero-author-panel">
              <AuthorPortrait slug={slug} />
              <p class="hero-author-label">Author</p>
              <div class="hero-author-name">
                <a class="hero-author" href={resolveRelative(slug, KAREN.slug)}>
                  Karen Pendergrass
                </a>{" "}
                <a
                  class="hero-orcid"
                  href={`https://orcid.org/${KAREN.orcid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ORCID iD ${KAREN.orcid}`}
                  title={`ORCID iD ${KAREN.orcid}`}
                >
                  <OrcidIdIcon />
                </a>
              </div>
              {updated ? (
                <p class="hero-stamp">
                  Last updated: <time dateTime={updated}>{updated}</time>
                </p>
              ) : null}
              {rev ? <p class="hero-stamp">Revision {rev}</p> : null}
            </div>
            {rows.length || wikiDoi ? (
              <section class="hero-snapshot" aria-label="Page snapshot">
                <div class="hero-snapshot-head">Page snapshot</div>
                <div class="hero-snapshot-body">
                  {rows.map((r) => (
                    <div class="hero-snapshot-row" key={r.k}>
                      <span class="hero-snapshot-k">{r.k}</span>
                      <span class="hero-snapshot-v">{r.v}</span>
                    </div>
                  ))}
                </div>
            {wikiDoi ? (
              <a
                class="hero-doi"
                href={`https://doi.org/${wikiDoi}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Digital Object Identifier ${wikiDoi}`}
                aria-label={`DOI ${wikiDoi}`}
              >
                <span class="hero-doi-label">DOI</span>
                <span>{wikiDoi}</span>
              </a>
            ) : null}
              </section>
            ) : null}
          </aside>
        </div>
      </div>
    )
  }

  HeroBand.css = [style]
  return HeroBand
}) satisfies QuartzComponentConstructor
