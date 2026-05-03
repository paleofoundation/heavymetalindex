import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/askindex.inline"
import style from "./styles/askindex.scss"

const AskIndex: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "ask-index")}>
      <button type="button" class="ask-index-button" aria-haspopup="dialog" aria-expanded="false">
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>Ask the Index</title>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
        <span>Ask the Index</span>
      </button>
      <div class="ask-index-panel" aria-hidden="true">
        <div class="ask-index-dialog" role="dialog" aria-modal="true" aria-labelledby="ask-index-title">
          <div class="ask-index-header">
            <div>
              <div id="ask-index-title" class="ask-index-title">
                Ask the Index
              </div>
              <div class="ask-index-subtitle">Site-only answers with citations and stated limits.</div>
            </div>
            <button type="button" class="ask-index-close" aria-label="Close Ask the Index">
              x
            </button>
          </div>
          <div class="ask-index-messages" aria-live="polite"></div>
          <div class="ask-index-suggestions" aria-label="Suggested questions">
            <button type="button">Show the loaded values and citations for this product.</button>
            <button type="button">What evidence is missing before a standard can be calculated?</button>
            <button type="button">Show regulatory values beside the measured evidence.</button>
          </div>
          <form class="ask-index-form">
            <textarea
              name="question"
              class="ask-index-input"
              rows={3}
              maxlength={800}
              placeholder="Ask about measured values, sources, regulations, evidence gaps, or calculation inputs..."
              aria-label="Ask a question of the Heavy Metal Index"
            ></textarea>
            <div class="ask-index-actions">
              <span class="ask-index-note">Answers are limited to Heavy Metal Index pages.</span>
              <button type="submit">Ask</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

AskIndex.afterDOMLoaded = script
AskIndex.css = style

export default (() => AskIndex) satisfies QuartzComponentConstructor
