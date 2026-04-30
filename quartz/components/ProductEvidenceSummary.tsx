import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/productEvidenceSummary.scss"

function text(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) return value
  if (typeof value === "number") return String(value)
  return undefined
}

function list(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => text(item)).filter((item): item is string => Boolean(item))
  }

  const item = text(value)
  return item ? [item] : []
}

function labelize(value: unknown): string | undefined {
  const normalized = text(value)
  if (!normalized) return undefined

  return normalized
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatPopulation(value: unknown): string | undefined {
  const normalized = text(value)
  if (!normalized) return undefined

  const match = normalized.match(/^([a-z]+)-(\d+)-(\d+)(mo|yr)$/i)
  if (match) {
    const [, group, start, end, unit] = match
    return `${labelize(group)} ${start}-${end} ${unit.toLowerCase()}`
  }

  return labelize(normalized)
}

function formatDate(value: unknown): string | undefined {
  const normalized = text(value)
  if (!normalized) return undefined

  const date = new globalThis.Date(normalized)
  if (Number.isNaN(date.getTime())) return normalized

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}

export default (() => {
  const ProductEvidenceSummary: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
    const isProductCategory =
      frontmatter?.type === "product-category" && fileData.slug?.startsWith("products/")

    if (!frontmatter || !isProductCategory) return null

    const metals = list(frontmatter.primary_metals_of_concern)
    const ingredients = list(frontmatter.ingredient_targets)
    const row = text(frontmatter.hmtc_row)
    const category = text(frontmatter.hmtc_category)
    const productCategorySlug = text(frontmatter.category)
    const sources = text(frontmatter.sources)
    const updated = formatDate(frontmatter.updated)
    const evidenceStatus = text(frontmatter.public_evidence_label) ?? labelize(frontmatter.evidence_fitness)
    const role = labelize(frontmatter.variant_type)
    const population = formatPopulation(frontmatter.vulnerable_population)
    const categoryLabel = text(frontmatter.category_label)
    const thresholdStatus =
      frontmatter.hmtc_threshold_status === "excluded_from_index_evidence"
        ? "No public certification limit"
        : labelize(frontmatter.hmtc_threshold_status)
    const shortcuts = [
      "Source Evidence Inventory",
      "Measured Values And Concentration Evidence",
      "Extracted Formula Concentration Rows",
      "Distribution Summary For Threshold Work",
      "CC Candidate Summary",
      "Sources",
    ]
      .map((label) => {
        const entry = fileData.toc?.find((tocEntry) => tocEntry.text === label)
        return entry ? { label: productShortcutLabel(label), slug: entry.slug } : undefined
      })
      .filter((entry): entry is { label: string; slug: string } => Boolean(entry))

    return (
      <section class="hmi-product-brief" aria-label="Product evidence summary">
        <div class="hmi-product-brief-kicker">
          {categoryLabel ? <span>{categoryLabel}</span> : null}
          {row ? <span>HMT&C row {row}</span> : null}
          {category ? <span>Category {category}</span> : null}
        </div>

        <div class="hmi-product-brief-grid">
          <div class="hmi-product-brief-main">
            <h2>Evidence Summary</h2>
            <p>
              This page summarizes public evidence for the product category while preserving the
              technical source trail used for HMT&C standards work.
            </p>
            <p class="hmi-product-standards-note">
              Range values, p90/p100 candidates, matrix basis, row-fit notes, and confidence-gating
              caveats remain in the technical tables below. The page does not publish a final
              certification threshold.
            </p>
          </div>

          <dl class="hmi-product-facts">
            {evidenceStatus ? (
              <div>
                <dt>Evidence status</dt>
                <dd>{evidenceStatus}</dd>
              </div>
            ) : null}
            {sources ? (
              <div>
                <dt>Source coverage</dt>
                <dd>{sources} cited sources</dd>
              </div>
            ) : null}
            {population ? (
              <div>
                <dt>Population</dt>
                <dd>{population}</dd>
              </div>
            ) : null}
            {role ? (
              <div>
                <dt>Row role</dt>
                <dd>{role}</dd>
              </div>
            ) : null}
            {thresholdStatus ? (
              <div>
                <dt>Threshold status</dt>
                <dd>{thresholdStatus}</dd>
              </div>
            ) : null}
            {updated ? (
              <div>
                <dt>Updated</dt>
                <dd>{updated}</dd>
              </div>
            ) : null}
          </dl>
        </div>

        {metals.length > 0 ? (
          <div class="hmi-product-chip-group" aria-label="Metals covered">
            <span class="hmi-product-chip-label">Metals covered</span>
            {metals.map((metal) => (
              <span class="hmi-product-chip">{metal}</span>
            ))}
          </div>
        ) : null}

        {ingredients.length > 0 ? (
          <div class="hmi-product-chip-group hmi-product-chip-group-muted" aria-label="Ingredient targets">
            <span class="hmi-product-chip-label">Ingredient targets</span>
            {ingredients.map((ingredient) => (
              <span class="hmi-product-chip">{labelize(ingredient) ?? ingredient}</span>
            ))}
          </div>
        ) : null}

        {shortcuts.length > 0 ? (
          <nav class="hmi-product-brief-links" aria-label="Product evidence shortcuts">
            {shortcuts.map((shortcut) => (
              <a href={`#${shortcut.slug}`}>{shortcut.label}</a>
            ))}
            {productCategorySlug ? (
              <a href={`/certification/lab-result-comparator?category=${productCategorySlug}`}>
                Compare lab result
              </a>
            ) : null}
          </nav>
        ) : null}
      </section>
    )
  }

  ProductEvidenceSummary.css = style
  return ProductEvidenceSummary
}) satisfies QuartzComponentConstructor

function productShortcutLabel(label: string): string {
  switch (label) {
    case "Source Evidence Inventory":
      return "Source evidence"
    case "Measured Values And Concentration Evidence":
      return "Measured values"
    case "Extracted Formula Concentration Rows":
      return "Extracted rows"
    case "Distribution Summary For Threshold Work":
      return "Distribution summary"
    case "CC Candidate Summary":
      return "CC candidates"
    default:
      return label
  }
}
