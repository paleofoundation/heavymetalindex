import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/citeThisPage.inline"
import style from "./styles/citeThisPage.scss"
import { hasScholarlyPdf } from "./scholarlyPdf"
import { getShareContent } from "../util/share"
import { concatenateResources } from "../util/resources"
import { simplifySlug } from "../util/path"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import shareScript from "./scripts/railShare.inline"

// Per-page "Cite this page" footer block. Visible only on public reference
// pages (ingredients/, products/, metals/, regulations/, synthesis/,
// sources/, mitigation/, supply-chain/, testing/, microbiome/, health/,
// methodology, editorial-standards, roadmap, errata, coverage, licensing,
// curators, trust). Hidden on the homepage, the chat surface, and any
// staff/internal page.
//
// Reveals the canonical citation, a "Copy citation" button, and a download
// link to /api/evidence-packet?slug=<slug>&download=1 for brand-legal and
// regulatory readers who need a signed manifest of the page as published.

const PUBLIC_PREFIXES = [
  "ingredients/",
  "products/",
  "metals/",
  "regulations/",
  "synthesis/",
  "sources/",
  "mitigation/",
  "supply-chain/",
  "testing/",
  "microbiome/",
  "health/",
]
const PUBLIC_EXACT = new Set([
  "methodology",
  "editorial-standards",
  "errata",
  "licensing",
  "curators",
  "roadmap",
  "coverage",
  "trust",
])
const PRIVATE_PREFIXES = [
  "app/",
  "certification/",
  "courses/",
  "lint/",
  "queries/",
  "tags/",
  "staff/",
  "workbench/",
  "audits/",
  "batch-reports/",
  "studies/",
  "advisory/",
]
const HIDDEN_EXACT = new Set([
  "index",
  "ask",
  "log",
  "contact",
  "about",
  "overview",
  "privacy",
  "terms",
  "sprint-status",
  "synthesis",
])

function isCitable(slug: string | undefined): boolean {
  if (!slug) return false
  if (PRIVATE_PREFIXES.some((p) => slug.startsWith(p))) return false
  if (HIDDEN_EXACT.has(slug)) return false
  if (PUBLIC_EXACT.has(slug)) return true
  return PUBLIC_PREFIXES.some((p) => slug.startsWith(p))
}

function frontmatterString(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined
  const s = String(value).trim()
  return s && s.toLowerCase() !== "null" ? s : undefined
}

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10)
}

const CiteThisPage: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const slug = fileData.slug
  if (!isCitable(slug)) return null

  // The typeset PDF postbuild-synthesis-pdf.mjs emits for this page, where one
  // exists. Shown only on those pages: an unconditional link 404s everywhere
  // else, which is how the previous download affordance failed.
  const pdfUrl = hasScholarlyPdf(fileData) ? `/${slug}.pdf` : undefined

  const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
  const title = frontmatter?.title ? String(frontmatter.title) : (slug as string)
  // Sentence-cased title for the APA reference (falls back to the display title).
  const citeTitle = frontmatter?.cite_title ? String(frontmatter.cite_title) : title
  const wikiDoi = frontmatter ? frontmatterString(frontmatter.wiki_doi) : undefined
  const canonicalUrl = `https://${cfg.baseUrl ?? "heavymetalindex.com"}/${simplifySlug(slug!)}`
  // A minted page cites through its DOI resolver, not the raw article path.
  const citeUrl = wikiDoi ? `https://doi.org/${wikiDoi}` : canonicalUrl
  // Licence: HMI authored papers may reserve all rights via frontmatter; the
  // widget's licence note reflects that instead of the default CC BY prose.
  const pageLicense = frontmatter ? frontmatterString(frontmatter.license) : undefined
  const allRights = !!pageLicense && /©|all rights reserved/i.test(pageLicense)
  const packetUrl = `/api/evidence-packet?slug=${encodeURIComponent(slug as string)}&download=1`
  const today = todayIsoDate()

  // Year for reference-manager records: prefer the page's updated/established
  // year, fall back to the retrieval year.
  const updated = frontmatter
    ? frontmatterString(frontmatter.updated) ?? frontmatterString(frontmatter.established)
    : undefined
  const year = (updated ?? today).slice(0, 4)

  // Synthesis findings are personally-authored analytical reports: they carry a
  // named byline + ORCID in the hero, the Highwire citation_author, the JSON-LD
  // author, and the "Pendergrass K. …" cite-as in the typeset PDF. So their
  // copied citation is author-first too, matching the PDF exactly — an authored
  // report cited as an authored report reads as more authoritative than one
  // cited as an anonymous corporate page, and it keeps the two citation surfaces
  // from disagreeing on who wrote it. Institutional compilations (ingredient/
  // product/metal/regulation reference pages) keep the corporate-author form
  // that the licensing page specifies for Index prose.
  const authored = typeof slug === "string" && slug.startsWith("synthesis/")
  const citeAuthor = authored ? "Pendergrass, Karen" : "Heavy Metal Index"
  const citePublisher = authored ? "Heavy Metal Index" : "Institute of Contaminant Standards (ICS)"
  // APA 7 reference: Author. (Year). Sentence-case title. Publisher. URL.
  // The URL is the DOI resolver when minted; no "Retrieved" date and no licence
  // is glued onto the reference line.
  const citationLine = authored
    ? `Pendergrass, K. (${year}). ${citeTitle}. Heavy Metal Index. ${citeUrl}`
    : `Institute of Contaminant Standards. (${year}). ${citeTitle}. Heavy Metal Index. ${citeUrl}`

  const share = getShareContent({ frontmatter, slug, description: fileData.description, canonicalUrl })

  return (
    <aside
      id="cite-this-page"
      class="hmi-cite-page"
      aria-label="Cite this page"
      data-cite-title={citeTitle}
      data-cite-url={citeUrl}
      data-cite-year={year}
      data-cite-doi={wikiDoi ?? ""}
      data-cite-today={today}
      data-cite-slug={slug as string}
      data-cite-author={citeAuthor}
      data-cite-author-type={authored ? "person" : "org"}
      data-cite-publisher={citePublisher}
    >
      <div class="hmi-cite-summary">
        <div>
          <span class="hmi-cite-label">Cite this page.</span>{" "}
          {allRights ? (
            <span class="hmi-cite-meta">{pageLicense}</span>
          ) : (
            <span class="hmi-cite-meta">
              Prose CC BY 4.0. Structured data EU database rights reserved (
              <a href="/licensing">licensing</a>).
            </span>
          )}
        </div>
        <div class="hmi-cite-actions">
          <button type="button" data-hmi-cite-toggle aria-expanded="true">
            Hide citation
          </button>
          {pdfUrl && (
            <a
              class="hmi-cite-download hmi-cite-download--pdf"
              href={pdfUrl}
              title="Download this page as a typeset PDF — masthead, abstract, numbered sections, references, and publication history."
            >
              Download PDF
            </a>
          )}
          <a
            class="hmi-cite-download"
            href={packetUrl}
            download
            title="Download a JSON evidence packet with page checksums and the available verified Git revision."
          >
            Download evidence packet
          </a>
        </div>
      </div>
      <div data-hmi-cite-detail>
        <p data-hmi-cite-text>{citationLine}</p>
        <div class="hmi-cite-detail-copy">
          <button type="button" data-hmi-cite-copy>Copy citation</button>
          <button type="button" data-hmi-cite-bibtex title="Download a BibTeX record for Zotero, Mendeley, EndNote, or LaTeX.">
            Download .bib
          </button>
          <button type="button" data-hmi-cite-ris title="Download an RIS record for reference managers.">
            Download .ris
          </button>
          <span data-hmi-cite-copy-status role="status" aria-live="polite"></span>
        </div>
        <div class="hmi-cite-share" data-hmi-share data-hmi-share-post={share.post}>
          <span class="hmi-cite-share-label">Share</span>
          <button type="button" data-hmi-cite-copylink>Copy link</button>
          <button type="button" data-hmi-share-copy-post>Copy post</button>
          <a
            href={share.xUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
              share.post,
            )}`}
          >
            Email
          </a>
          <span data-hmi-share-status role="status" aria-live="polite" />
        </div>
        <p class="hmi-cite-note">
          The evidence packet is a JSON manifest with page checksums, contributing
          sources, and available data downloads. It states whether the page has a
          verified Git revision and provides a verification command when available. See{" "}
          <a href="/methodology">methodology</a> and{" "}
          <a href="/errata">errata</a> for how the underlying evidence is selected
          and corrected.
        </p>
      </div>
    </aside>
  )
}

CiteThisPage.afterDOMLoaded = concatenateResources(script, shareScript)
CiteThisPage.css = style

export default (() => CiteThisPage) satisfies QuartzComponentConstructor
