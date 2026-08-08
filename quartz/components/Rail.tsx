import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import citeScript from "./scripts/citeSuperscript.inline"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import shareScript from "./scripts/railShare.inline"
import { concatenateResources } from "../util/resources"
import { hasScholarlyPdf } from "./scholarlyPdf"

// The proof's right rail (.rail): light bordered action buttons + a provenance
// card. Emits the proof's exact classes so proof.css styles it identically to
// hmi-real-content. renderPage wraps it in <aside class="rail">.

const ICON = {
  bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
  quote: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2 M15 21c3 0 7-1 7-8V5c0-1.25-.757-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  share: "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4",
  link: "M9 17H7A5 5 0 0 1 7 7h2 M15 7h2a5 5 0 0 1 0 10h-2 M8 12h8",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
}

// Brand glyphs (filled, not stroked) for the share menu's social targets.
const BRAND = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
}

function btnIcon(d: string) {
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

function brandIcon(d: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

export default (() => {
  const Rail: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const fm = fileData.frontmatter ?? {}
    const updated = fm.updated ? String(fm.updated).slice(0, 10) : undefined
    const corpus =
      (fm as any).n_sources ??
      (fm as any).corpus_count ??
      (fileData as any).corpusCount ??
      undefined

    // The typeset PDF of this page, where postbuild-synthesis-pdf.mjs emits one.
    // hasScholarlyPdf is the same test the generator applies, so the action is
    // absent rather than broken on the pages that have no PDF.
    const pdfUrl = hasScholarlyPdf(fileData) ? `/${fileData.slug}.pdf` : undefined

    return (
      <>
        {pdfUrl && (
          <a class="action" href={pdfUrl}>
            {btnIcon(ICON.download)}
            <span>Download PDF</span>
          </a>
        )}
        <a class="action" href="#sources">
          {btnIcon(ICON.bell)}
          <span>Follow</span>
        </a>
        <a class="action" href="#sources">
          {btnIcon(ICON.quote)}
          <span>Cite this page</span>
        </a>
        <a class="action" href="#sources">
          {btnIcon(ICON.download)}
          <span>Evidence packet</span>
        </a>
        <div class="rail-share" data-hmi-share>
          <button
            type="button"
            class="action"
            aria-haspopup="menu"
            aria-expanded="false"
            data-hmi-share-toggle
          >
            {btnIcon(ICON.share)}
            <span>Share</span>
          </button>
          <div class="rail-share-menu" role="menu" hidden data-hmi-share-menu>
            <button type="button" class="share-item" role="menuitem" data-hmi-share-copy>
              {btnIcon(ICON.link)}
              <span>Copy link</span>
            </button>
            <a
              class="share-item"
              role="menuitem"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              data-hmi-share-x
            >
              {brandIcon(BRAND.x)}
              <span>Share on X</span>
            </a>
            <a
              class="share-item"
              role="menuitem"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              data-hmi-share-linkedin
            >
              {brandIcon(BRAND.linkedin)}
              <span>Share on LinkedIn</span>
            </a>
            <a class="share-item" role="menuitem" href="#" data-hmi-share-email>
              {btnIcon(ICON.mail)}
              <span>Email a link</span>
            </a>
            <div class="rail-share-status" data-hmi-share-status aria-live="polite"></div>
          </div>
        </div>
        <div class="card">
          <h4>Page provenance</h4>
          <div class="meta">
            {updated ? <>Updated {updated}<br /></> : null}
            {corpus ? <>{corpus} corpus sources<br /></> : null}
            Author: K. Pendergrass · ORCID
            <br />
            Reconstructable via version history
          </div>
        </div>
      </>
    )
  }
  Rail.afterDOMLoaded = concatenateResources(citeScript, shareScript)
  return Rail
}) satisfies QuartzComponentConstructor
