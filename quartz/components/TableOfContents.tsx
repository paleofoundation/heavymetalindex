import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import legacyStyle from "./styles/legacyToc.scss"
import modernStyle from "./styles/toc.scss"
import { classNames } from "../util/lang"

// @ts-ignore
import script from "./scripts/toc.inline"
import { i18n } from "../i18n"
import OverflowListFactory from "./OverflowList"
import { concatenateResources } from "../util/resources"

interface Options {
  layout: "modern" | "legacy"
}

const defaultOptions: Options = {
  layout: "modern",
}

const productTocLabels = new Map([
  ["Evidence Governance", "Evidence quality"],
  ["Scaffold Status", "Build status"],
  ["Distribution Summary For Threshold Work", "Distribution summary"],
  ["Measured Values And Concentration Evidence", "Measured values"],
  ["Source Evidence Inventory", "Source evidence"],
  ["Extracted Formula Concentration Rows", "Extracted concentration rows"],
  ["CC Candidate Summary", "CC candidates"],
  ["How Standards Math Uses This Page", "Standards math"],
  ["Evidence Used For This Row", "Evidence used"],
  ["Exposure Estimates From Formula Consumption", "Exposure context"],
  ["French TDS Category Rows", "Context rows"],
  ["Why This Category Is High-Risk", "Risk context"],
  ["What Drives Variance Across Brands", "Variance drivers"],
  ["How The App Would Estimate Risk From An Ingredient List", "Ingredient-list use"],
  ["Historical Recalls/Enforcement", "Regulatory events"],
  ["Sources", "Sources"],
])

let numTocs = 0
export default ((opts?: Partial<Options>) => {
  const layout = opts?.layout ?? defaultOptions.layout
  const { OverflowList, overflowListAfterDOMLoaded } = OverflowListFactory()
  const TableOfContents: QuartzComponent = ({
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    if (!fileData.toc) {
      return null
    }

    const isProductCategory =
      fileData.frontmatter?.type === "product-category" && fileData.slug?.startsWith("products/")
    const tocEntries = isProductCategory
      ? fileData.toc
          .filter((entry) => entry.depth <= 2 && productTocLabels.has(entry.text))
          .map((entry) => ({
            ...entry,
            text: productTocLabels.get(entry.text) ?? entry.text,
          }))
      : fileData.toc

    if (tocEntries.length === 0) return null

    const id = `toc-${numTocs++}`
    return (
      <div class={classNames(displayClass, "toc")}>
        <button
          type="button"
          class={fileData.collapseToc ? "collapsed toc-header" : "toc-header"}
          aria-controls={id}
          aria-expanded={!fileData.collapseToc}
        >
          <h3>{i18n(cfg.locale).components.tableOfContents.title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fold"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <OverflowList
          id={id}
          class={fileData.collapseToc ? "collapsed toc-content" : "toc-content"}
        >
          {tocEntries.map((tocEntry) => (
            <li key={tocEntry.slug} class={`depth-${tocEntry.depth}`}>
              <a href={`#${tocEntry.slug}`} data-for={tocEntry.slug}>
                {tocEntry.text}
              </a>
            </li>
          ))}
        </OverflowList>
      </div>
    )
  }

  TableOfContents.css = modernStyle
  TableOfContents.afterDOMLoaded = concatenateResources(script, overflowListAfterDOMLoaded)

  const LegacyTableOfContents: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    if (!fileData.toc) {
      return null
    }
    const isProductCategory =
      fileData.frontmatter?.type === "product-category" && fileData.slug?.startsWith("products/")
    const tocEntries = isProductCategory
      ? fileData.toc
          .filter((entry) => entry.depth <= 2 && productTocLabels.has(entry.text))
          .map((entry) => ({
            ...entry,
            text: productTocLabels.get(entry.text) ?? entry.text,
          }))
      : fileData.toc

    if (tocEntries.length === 0) return null

    return (
      <details class="toc" open={!fileData.collapseToc}>
        <summary>
          <h3>{i18n(cfg.locale).components.tableOfContents.title}</h3>
        </summary>
        <ul>
          {tocEntries.map((tocEntry) => (
            <li key={tocEntry.slug} class={`depth-${tocEntry.depth}`}>
              <a href={`#${tocEntry.slug}`} data-for={tocEntry.slug}>
                {tocEntry.text}
              </a>
            </li>
          ))}
        </ul>
      </details>
    )
  }
  LegacyTableOfContents.css = legacyStyle

  return layout === "modern" ? TableOfContents : LegacyTableOfContents
}) satisfies QuartzComponentConstructor
