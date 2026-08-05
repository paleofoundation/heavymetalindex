import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore — inline script resolved by Quartz's esbuild loader
import citeScript from "./scripts/citeSuperscript.inline"
import { hasScholarlyPdf } from "./scholarlyPdf"

// The proof's right rail (.rail): light bordered action buttons + a provenance
// card. Emits the proof's exact classes so proof.css styles it identically to
// hmi-real-content. renderPage wraps it in <aside class="rail">.

const ICON = {
  bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
  quote: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2 M15 21c3 0 7-1 7-8V5c0-1.25-.757-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  share: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M16 6l-4-4-4 4 M12 2v13",
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
        <a class="action" href="#">
          {btnIcon(ICON.share)}
          <span>Share</span>
        </a>
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
  Rail.afterDOMLoaded = citeScript
  return Rail
}) satisfies QuartzComponentConstructor
