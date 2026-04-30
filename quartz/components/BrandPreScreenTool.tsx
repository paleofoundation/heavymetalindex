import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/productPercentileTool.scss"

// @ts-ignore
import script from "./scripts/productPercentileTool.inline"

export default (() => {
  const BrandPreScreenTool: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
    if (frontmatter?.type !== "brand-pre-screen-tool") return null

    return (
      <section class="hmi-percentile-tool hmi-brand-pre-screen" id="lab-result-comparator" data-percentile-tool>
        <div class="hmi-percentile-heading">
          <div>
            <div class="hmi-percentile-kicker">Brand lab-result comparator</div>
            <h2>Choose a category and compare your results</h2>
          </div>
          <p>
            Enter finished-product heavy-metal results in ppb and compare them with structured
            Heavy Metal Index percentile context. Values stay in your browser.
          </p>
        </div>

        <div class="hmi-percentile-status" data-percentile-status>
          Loading percentile context...
        </div>

        <div class="hmi-pre-screen-grid">
          <div class="hmi-percentile-panel">
            <h3>Category Context</h3>
            <label class="hmi-category-select-label">
              Product category
              <select name="category" data-percentile-category></select>
            </label>
            <div class="hmi-percentile-category-note" data-percentile-category-note></div>
            <div class="hmi-percentile-table-wrap" data-percentile-table></div>
          </div>

          <form class="hmi-percentile-panel hmi-percentile-form" data-percentile-form>
            <h3>Lab Results</h3>
            <p class="hmi-percentile-form-note">
              Add one or more reported results from a comparable matrix basis. Leave unknown metals
              blank.
            </p>
            <div class="hmi-result-inputs" data-percentile-result-inputs></div>
            <button type="submit">Assess entered results</button>
            <div class="hmi-percentile-result" data-percentile-result></div>
          </form>
        </div>

        <p class="hmi-percentile-disclaimer">
          This is a directional pre-screen, not certification approval. Certification still requires
          all required analytes, comparable matrix basis, lab documentation, LOQ/LOD review, lot
          sampling, and HMT&amp;C program review.
        </p>
      </section>
    )
  }

  BrandPreScreenTool.css = style
  BrandPreScreenTool.afterDOMLoaded = script
  return BrandPreScreenTool
}) satisfies QuartzComponentConstructor
