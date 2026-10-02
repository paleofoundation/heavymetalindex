import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const ProductEvidenceSummary: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const fm = fileData.frontmatter as Record<string, unknown> | undefined
    if (fm?.type !== "product-category" || !fileData.slug?.startsWith("products/")) return null
    const developing = fm.review_state === "draft" || fm.provisional_scaffold === true
    const count = typeof fm.sources === "number" ? fm.sources : undefined
    const sections = [
      [/evidence summary|key findings/i, "Evidence summary"],
      [/measured values|measured concentrations|structured concentration|extracted formula concentration/i, "Measured concentrations"],
      [/limits applicable|regulatory limits/i, "Applicable limits"],
      [/page completeness|evidence gaps|open questions/i, "Evidence gaps"],
      [/^references$/i, "References"],
    ] as const
    const shortcuts = sections.flatMap(([pattern, label]) => {
      const entry = fileData.toc?.find((section) => pattern.test(section.text))
      return entry ? [{ label, slug: entry.slug }] : []
    })
    return (
      <section class="hmi-evidence-status" aria-label="About this evidence">
        <p>{developing ? "Evidence review in progress. " : ""}This page reports published measurements and their limitations. Compare values only when the product form, measurement basis, and metal species match.</p>
        {count !== undefined && <p>{count} related source records are associated with this category. This is a coverage count, not a measure of scientific confidence. References identify works cited in the text.</p>}
        {shortcuts.length > 0 && <nav aria-label="Evidence shortcuts">{shortcuts.map((shortcut) => <a key={shortcut.slug} href={`#${shortcut.slug}`}>{shortcut.label}</a>)}</nav>}
      </section>
    )
  }
  return ProductEvidenceSummary
}) satisfies QuartzComponentConstructor
