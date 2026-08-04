import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative, simplifySlug } from "../util/path"
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
// INDEX SCREENS GET A SNAPSHOT TOO. v3 gives every one of them a "Page
// snapshot" panel (metals: Elements tracked / Core toxic metals / ...;
// products: Categories / Subcategories / ...; regulations: Instruments tracked
// / Jurisdictions / ...). snapshotRows only ever assembled from per-page `n_*`
// frontmatter, which no index page carries, so `rows` came back empty and the
// panel silently did not render — the hero ran full width on /metals,
// /products, /regulations and /synthesis against a design that gives all four
// a panel.
//
// Every number here is COUNTED FROM allFiles at build time. v3's own values are
// mockup content (it claims 34 categories and 61 instruments; the repo has its
// own totals) and publishing them would be publishing a number we cannot
// support — the standing rule is structure from v3, data from the repo.
function indexSnapshot(section: string, allFiles: QuartzComponentProps["allFiles"]): Row[] {
  // DIRECT CHILDREN ONLY. `wiki/products/categories/` holds 34 category pages
  // beneath the products layer, so a plain prefix match counted them among the
  // subcategories and the hero published "Subcategories 448" over a layer that
  // has 414. A category is not a subcategory of itself.
  const inSection = allFiles.filter((f) => {
    const s = f.slug ?? ""
    return s.startsWith(`${section}/`) && !s.endsWith("/index") && s.split("/").length === 2
  })
  const layerCount = (seg: string) =>
    allFiles.filter((f) => {
      const s = f.slug ?? ""
      return s.startsWith(`${seg}/`) && !s.endsWith("/index") && s.split("/").length === 2
    }).length
  const n = inSection.length
  if (!n) return []
  const fmOf = (f: (typeof inSection)[number]) => (f.frontmatter ?? {}) as Record<string, unknown>
  // Counts NUMBERS as well as strings. `hmtc_category: 23` parses to a number,
  // so a string-only test saw exactly one distinct value on /products — the
  // literal "pending_taxonomy_review" — and the hero published "Categories 1"
  // over a catalogue of 448 subcategories. A visibly false count on a live page
  // is worse than no panel at all.
  const distinct = (key: string, opts?: { numericOnly?: boolean }) => {
    const set = new Set<string>()
    const add = (x: unknown) => {
      if (typeof x === "number" && Number.isFinite(x)) set.add(String(x))
      else if (typeof x === "string" && x.trim()) {
        if (opts?.numericOnly && !/^\d+$/.test(x.trim())) return
        set.add(x.trim())
      }
    }
    for (const f of inSection) {
      const v = fmOf(f)[key]
      if (Array.isArray(v)) v.forEach(add)
      else add(v)
    }
    return set.size
  }
  const countWhere = (pred: (fm: Record<string, unknown>) => boolean) =>
    inSection.filter((f) => pred(fmOf(f))).length

  const rows: Row[] = []
  const push = (k: string, v: number) => {
    if (v > 0) rows.push({ k, v: String(v) })
  }

  if (section === "metals") {
    push("Elements tracked", n)
    push("Elements split by species", distinct("parent_metal"))
    push("Ingredient profiles", layerCount("ingredients"))
    push("Product categories", layerCount("products"))
  } else if (section === "products") {
    push("Subcategories", n)
    push("Categories", distinct("hmtc_category", { numericOnly: true }))
    push("Ingredient profiles", layerCount("ingredients"))
  } else if (section === "ingredients") {
    push("Ingredient profiles", n)
    push("Downstream categories", layerCount("products"))
    push("Metals tracked", layerCount("metals"))
  } else if (section === "regulations") {
    push("Instruments tracked", n)
    push("Jurisdictions", distinct("jurisdiction"))
    push("Currently in force", countWhere((fm) => String(fm.status ?? "").toLowerCase() === "in-force" || String(fm.status ?? "").toLowerCase() === "in force"))
    push("Metals covered", Math.max(distinct("metal"), distinct("metals")))
  } else if (section === "sources") {
    push("Source records", n)
    push("Distinct elements measured", distinct("metals"))
  } else if (section === "synthesis") {
    // v3's synthesis directory carries a grade breakdown. Counted from each
    // finding's `grade` frontmatter — the Index's own provisional confidence
    // assessment, published as a preprint layer.
    const gradeN = (letter: string) =>
      countWhere((fm) => String(fm.grade ?? "").toUpperCase() === letter)
    push("Findings published", n)
    push("Well supported (B)", gradeN("B"))
    push("Provisional (C)", gradeN("C"))
    push("Contested (D)", gradeN("D"))
    // Grade A is shown only if any finding earns it, so a row of "0" never
    // implies the layer is weaker than it is.
    if (gradeN("A") > 0) rows.unshift({ k: "Established (A)", v: String(gradeN("A")) })
  } else {
    push("Pages in this layer", n)
  }
  return rows
}

function snapshotRows(
  fm: Record<string, unknown>,
  section: string,
  citedBy: number,
  isIndex: boolean,
  inboundIn?: (seg: string) => number,
  pageTitle?: string,
  outboundIn?: (seg: string) => number,
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

  // SYNTHESIS FINDING pages. v3's finding screen carries a panel (Grade /
  // Anchor datasets / Jurisdictions / External review) and these rendered none,
  // because a finding page declares no `sources` count and nothing in the
  // corpus links to it — it sits at the end of the evidence chain, not the
  // middle. All 24 pages carry anchor_sources, metals, ingredients and products
  // in frontmatter, which is the same shape v3 shows.
  if (!isIndex && section === "synthesis") {
    const arr = (k: string) => (Array.isArray(fm[k]) ? (fm[k] as unknown[]).filter(Boolean).length : 0)
    // v3's finding snapshot LEADS with the confidence grade. The label makes the
    // letter legible on its own ("B — Well supported") and the preprint framing
    // is carried by the "How findings are graded" section and the Peer review
    // state block, so the row is not overclaiming.
    const GRADE_LABEL: Record<string, string> = {
      A: "Established",
      B: "Well supported",
      C: "Provisional",
      D: "Contested",
    }
    const grade = String(fm.grade ?? "").toUpperCase()
    const built: Array<Row | null> = [
      grade && GRADE_LABEL[grade] ? { k: "Confidence grade", v: `${grade} — ${GRADE_LABEL[grade]}` } : null,
      arr("anchor_sources") ? { k: "Anchor sources", v: String(arr("anchor_sources")) } : null,
      arr("metals") ? { k: "Metals", v: String(arr("metals")) } : null,
      arr("products") ? { k: "Product categories", v: String(arr("products")) } : null,
    ]
    const out = built.filter((r): r is Row => r !== null)
    if (out.length) return out
  }

  // CATEGORY screens (wiki/products/categories/*, type: category-index). These
  // are v3's `category` screen, and v3 gives them a panel (Subcategories /
  // Variant groups / Sources routed here / Reviewed). Nothing in the corpus
  // links TO a category page, so the inbound graph is empty for them and the
  // panel did not render at all. Their counts come from their CHILDREN, which
  // are the product pages the page itself links out to — read from the page's
  // own outbound links so the number can never disagree with the list below it.
  if (outboundIn && (fm.type === "category-index" || fm.type === "portal-index")) {
    // A PORTAL points at categories; a CATEGORY points at subcategories. Both
    // resolve to slugs under `products/`, so counting the prefix alone labelled
    // the portal's 34 category links "Subcategories" — the right number under
    // the wrong noun, which is the kind of error a reader trusts.
    const isPortal = fm.type === "portal-index"
    const cats = outboundIn("products/categories")
    const subs = outboundIn("products") - cats
    const built: Array<Row | null> = [
      isPortal
        ? cats > 0
          ? { k: "Categories", v: String(cats) }
          : null
        : subs > 0
          ? { k: "Subcategories", v: String(subs) }
          : null,
      outboundIn("metals") > 0 ? { k: "Metals profiled", v: String(outboundIn("metals")) } : null,
      outboundIn("ingredients") > 0
        ? { k: "Ingredient profiles", v: String(outboundIn("ingredients")) }
        : null,
    ]
    const out = built.filter((r): r is Row => r !== null)
    if (out.length) return out
  }

  // METAL / INGREDIENT / PRODUCT detail screens: four rows from the link graph,
  // matching v3's shape. Frontmatter `sources`/`n_sources` still wins for the
  // corpus count where a page declares it, because that number is curated;
  // the other three layers have no frontmatter equivalent and are counted.
  if (!isIndex && inboundIn && (section === "metals" || section === "ingredients" || section === "products")) {
    const declaredSources = num(fm.sources) ?? num(fm.n_sources)
    const topic = pageTitle ? pageTitle.toLowerCase() : "this page"
    const srcRow =
      declaredSources ?? (inboundIn("sources") > 0 ? String(inboundIn("sources")) : undefined)
    const built: Array<Row | null> = [
      srcRow
        ? {
            k: section === "metals" ? "Corpus sources on this metal" : `Corpus sources on ${topic}`,
            v: srcRow,
          }
        : null,
      section !== "metals" && inboundIn("metals") > 0
        ? { k: "Metals profiled", v: String(inboundIn("metals")) }
        : null,
      section !== "ingredients" && inboundIn("ingredients") > 0
        ? { k: "Ingredient profiles", v: String(inboundIn("ingredients")) }
        : null,
      section !== "products" && inboundIn("products") > 0
        ? { k: "Product categories", v: String(inboundIn("products")) }
        : null,
      inboundIn("regulations") > 0
        ? { k: "Regulations citing it", v: String(inboundIn("regulations")) }
        : null,
    ]
    const out = built.filter((r): r is Row => r !== null).slice(0, 4)
    if (out.length) return out
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
    const inbound = Array.isArray(allFiles)
      ? allFiles.filter((f) => f.links?.includes(simpleSlug))
      : []
    const citedBy = inbound.length
    // The same read, SPLIT BY LAYER. v3's detail snapshots are four rows of
    // exactly this shape — the metal screen shows "Corpus sources on this
    // metal / Ingredient profiles / Product categories / Regulations citing
    // Pb". The build had the whole graph in hand and collapsed it to one total,
    // so Metal, Ingredient and Subcategory screens rendered a single-row panel
    // against a design that gives them four. Nothing new is read: this is the
    // inbound set already computed above, bucketed by the linking page's layer.
    const inboundIn = (seg: string) =>
      inbound.filter((f) => (f.slug ?? "").startsWith(`${seg}/`)).length
    // This page's OWN links, bucketed the same way — what a directory page
    // points at is its content, where a detail page's content is what points at it.
    const ownLinks = ((fileData as { links?: string[] }).links ?? []) as string[]
    const outboundIn = (seg: string) =>
      new Set(ownLinks.filter((l) => String(l).startsWith(`${seg}/`))).size

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
    const rows = isIndex && section
      ? (() => {
          const declared = snapshotRows(fm, section, citedBy, isIndex, inboundIn, rawTitle, outboundIn)
          return declared.length ? declared : indexSnapshot(section, allFiles)
        })()
      : snapshotRows(fm, section, citedBy, isIndex, inboundIn, rawTitle, outboundIn)

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
                {/* Download PDF points at the STATIC scholarly PDF that
                    postbuild-synthesis-pdf.mjs emits to public/<section>/<slug>.pdf
                    — the same document Head.tsx sets as citation_pdf_url. It
                    exists only for synthesis findings and developed (non-stub)
                    metal pages, so the button is shown only there; the earlier
                    /api/evidence-packet target was a route that does not exist
                    and 404'd on every page. */}
                {(() => {
                  const hasPdf =
                    !isIndex &&
                    (section === "synthesis" ||
                      (section === "metals" && String(fm.status ?? "").toLowerCase() !== "stub"))
                  return hasPdf ? (
                    <a class="hero-act hero-act--solid" href={`/${slug}.pdf`}>
                      Download PDF
                    </a>
                  ) : null
                })()}
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
