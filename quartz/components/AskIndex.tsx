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
              <div class="ask-index-subtitle">
                Public evidence mode with citations, comparability rules, and stated limits.
              </div>
            </div>
            <button type="button" class="ask-index-close" aria-label="Close Ask the Index">
              x
            </button>
          </div>
          <div class="ask-index-mode-strip" aria-label="Assistant modes">
            <div class="ask-index-mode-card active">
              <div class="ask-index-mode-label">Public Ask the Index</div>
              <p>Explain, compare, calculate, and audit from published Heavy Metal Index pages only.</p>
            </div>
            <a href="/analytical-workbench" class="ask-index-mode-card">
              <div class="ask-index-mode-label">Private Analytical Workbench</div>
              <p>For COAs, supplier data, lots, formulations, and confidential analytical workflows.</p>
            </a>
          </div>
          <div class="ask-index-control-panel">
            <div class="ask-index-control-group">
              <div class="ask-index-control-label">Verb</div>
              <div class="ask-index-verb-toggle" role="tablist" aria-label="Question mode">
                <button type="button" class="active" data-ask-verb="explain" aria-pressed="true">
                  Explain
                </button>
                <button type="button" data-ask-verb="compare" aria-pressed="false">
                  Compare
                </button>
                <button type="button" data-ask-verb="calculate" aria-pressed="false">
                  Calculate
                </button>
                <button type="button" data-ask-verb="audit" aria-pressed="false">
                  Audit
                </button>
              </div>
            </div>
            <div class="ask-index-control-group">
              <div class="ask-index-control-label">Role</div>
              <div class="ask-index-role-grid" aria-label="User role">
                <button type="button" class="active" data-ask-role="standards" aria-pressed="true">
                  Standards
                </button>
                <button type="button" data-ask-role="brand" aria-pressed="false">
                  Brand
                </button>
                <button type="button" data-ask-role="supplier" aria-pressed="false">
                  Supplier
                </button>
                <button type="button" data-ask-role="retailer" aria-pressed="false">
                  Retailer
                </button>
                <button type="button" data-ask-role="auditor" aria-pressed="false">
                  Auditor
                </button>
                <button type="button" data-ask-role="quality" aria-pressed="false">
                  Quality
                </button>
                <button type="button" data-ask-role="regulator" aria-pressed="false">
                  Regulator
                </button>
                <button type="button" data-ask-role="lawyer" aria-pressed="false">
                  Lawyer
                </button>
                <button type="button" data-ask-role="journalist" aria-pressed="false">
                  Journalist
                </button>
              </div>
            </div>
          </div>
          <div class="ask-index-messages" aria-live="polite"></div>
          <div class="ask-index-suggestions" aria-label="Suggested questions">
            <button type="button">What evidence is missing before this standard can be calculated?</button>
            <button type="button">Show the regulatory values that are directly comparable here.</button>
            <button type="button">Which sources are usable for public calculation and which are not?</button>
          </div>
          <form class="ask-index-form">
            <textarea
              name="question"
              class="ask-index-input"
              rows={3}
              maxlength={800}
              placeholder="Ask to explain, compare, calculate, or audit published evidence. Do not enter confidential COAs, lot data, or supplier records here."
              aria-label="Ask a question of the Heavy Metal Index"
            ></textarea>
            <div class="ask-index-actions">
              <span class="ask-index-note">
                Public mode only. Answers are limited to published Heavy Metal Index pages.
              </span>
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
