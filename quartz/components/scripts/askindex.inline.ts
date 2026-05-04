type AskCitation = {
  id: number
  title: string
  url: string
  slug: string
  excerpt: string
}

type AskConfidence = "high" | "medium" | "low" | "insufficient"
type AskMode = "model" | "retrieval_only" | "guardrail_fallback" | "private_boundary"
type AskStatus = "supported" | "limited" | "blocked" | "non_comparable" | "private_mode_required"
type AskVerb = "explain" | "compare" | "calculate" | "audit"
type AskRole =
  | "standards"
  | "brand"
  | "supplier"
  | "retailer"
  | "auditor"
  | "quality"
  | "regulator"
  | "lawyer"
  | "journalist"

type AskResponse = {
  answer?: string
  confidence?: AskConfidence
  limits?: string
  citations?: AskCitation[]
  mode?: AskMode
  status?: AskStatus
  direct_answer?: string
  question_interpreted_as?: string
  source_pool?: string
  calculation_method?: string
  regulatory_comparison?: string
  audit_trail?: string
  next_step?: string
  error?: string
}

const STATUS_LABELS: Record<AskStatus, string> = {
  supported: "Supported",
  limited: "Limited",
  blocked: "Blocked",
  non_comparable: "Non-comparable",
  private_mode_required: "Private mode required",
}

const CONFIDENCE_LABELS: Record<AskConfidence, string> = {
  high: "High confidence",
  medium: "Medium confidence",
  low: "Low confidence",
  insufficient: "Insufficient confidence",
}

const VERB_LABELS: Record<AskVerb, string> = {
  explain: "Explain",
  compare: "Compare",
  calculate: "Calculate",
  audit: "Audit",
}

const ROLE_LABELS: Record<AskRole, string> = {
  standards: "Standards",
  brand: "Brand",
  supplier: "Supplier",
  retailer: "Retailer",
  auditor: "Auditor",
  quality: "Quality",
  regulator: "Regulator",
  lawyer: "Lawyer",
  journalist: "Journalist",
}

const QUESTION_SUGGESTIONS: Record<AskVerb, Record<AskRole, string[]>> = {
  explain: {
    standards: [
      "Explain what public evidence is loaded for this product and what each source can support.",
      "Explain the basis and species rules that limit direct comparison here.",
      "Explain what evidence is still missing before stronger standards math can be defended.",
    ],
    brand: [
      "Explain how this category is measured publicly and what the strongest contamination drivers are.",
      "Explain whether basis or species mismatches would limit a direct comparison here.",
      "Explain what public evidence would matter most before making a contamination claim.",
    ],
    supplier: [
      "Explain which metals, species, and derivative risks matter most for this ingredient supplier.",
      "Explain what a buyer-usable COA should contain for this ingredient.",
      "Explain which public regulations and evidence benchmarks apply to this ingredient.",
    ],
    retailer: [
      "Explain which metals and species matter most for this category from a retailer-spec standpoint.",
      "Explain what supplier records and COA fields should be required publicly for this category.",
      "Explain which evidence gaps still weaken a defensible retailer spec.",
    ],
    auditor: [
      "Explain what records would need to exist to support a public heavy-metal claim here.",
      "Explain the comparability rules an auditor should check first for this category.",
      "Explain how non-detects, basis, and species mismatches can break an audit trail here.",
    ],
    quality: [
      "Explain the likely contamination drivers for this category and which ingredient forms concentrate metals.",
      "Explain what public evidence suggests should be tested next when results are unexpectedly high.",
      "Explain which process or derivative changes are most likely to change metal concentration here.",
    ],
    regulator: [
      "Explain the public occurrence evidence, regulatory scope, and evidence gaps for this category.",
      "Explain how this category fits into FDA, EU, or Codex framing on the site.",
      "Explain what public-health or comparability limits are stated for this category.",
    ],
    lawyer: [
      "Explain the public comparability rules that would matter in a dispute about this category.",
      "Explain whether species, basis, or scope mismatches are likely in this evidence pool.",
      "Explain what the site can and cannot support as a public reference conclusion here.",
    ],
    journalist: [
      "Explain what this page actually shows without overstating what the evidence can prove.",
      "Explain the main evidence gap or limitation a reporter should mention for this category.",
      "Explain why a data gap here does not mean the product type is clean.",
    ],
  },
  compare: {
    standards: [
      "Show the regulatory values that are directly comparable to this product row.",
      "Compare the public source pool by basis, species, and product fit.",
      "Compare which public sources are calculation-capable and which are context only.",
    ],
    brand: [
      "Compare the public evidence for this category against the most relevant regulatory references.",
      "Compare prepared-for-feeding versus as-sold evidence paths for this product type.",
      "Compare the main ingredient drivers that could push this category higher than peers.",
    ],
    supplier: [
      "Compare higher-risk and lower-risk ingredient forms for this commodity.",
      "Compare the public regulatory references against the ingredient evidence now loaded.",
      "Compare what a supplier COA can prove versus what would still remain unresolved publicly.",
    ],
    retailer: [
      "Compare categories with strong regulatory references against categories with weaker public occurrence evidence.",
      "Compare finished-product testing versus ingredient testing needs for this category.",
      "Compare the public evidence available for setting a supplier-facing specification here.",
    ],
    auditor: [
      "Compare directly comparable versus non-comparable evidence for this claim path.",
      "Compare what a public records package would need against what is only context here.",
      "Compare which result types could support a pass-fail view and which could not.",
    ],
    quality: [
      "Compare likely ingredient drivers against processing concentration effects for this category.",
      "Compare external regulatory ceilings against the public evidence pool for this category.",
      "Compare the ingredient forms most likely to create an outlier result.",
    ],
    regulator: [
      "Compare FDA, EU, and Codex references that the site loads for this category.",
      "Compare the occurrence evidence pool against the current regulatory scope and exclusions.",
      "Compare the strongest public evidence cells against the visible data gaps.",
    ],
    lawyer: [
      "Compare the cited public benchmark against the product, species, and basis actually at issue.",
      "Compare enforceable limits, action levels, and reference values loaded on the site.",
      "Compare whether the opposing comparison is direct, limited, or non-comparable under the site rules.",
    ],
    journalist: [
      "Compare what the site shows for this category versus what it does not show.",
      "Compare the public occurrence evidence against the regulatory values readers might expect.",
      "Compare strong public evidence with weaker context-only evidence for this category.",
    ],
  },
  calculate: {
    standards: [
      "What evidence is missing before this standard can be calculated?",
      "Which sources are usable for public calculation and which are not?",
      "Show the public calculation path and stated limits for this product row.",
    ],
    brand: [
      "If I have a result to compare, what public evidence and regulatory references would you use first?",
      "What public percentile or pass-rate math is visible here and what still remains blocked?",
      "What public evidence would be needed before a stronger category benchmark could be defended?",
    ],
    supplier: [
      "What public calculation inputs exist for this ingredient and what still remains blocked?",
      "Which public values could support a supplier benchmark and which are only context?",
      "What evidence would still be missing before a stronger ingredient benchmark could be calculated?",
    ],
    retailer: [
      "What public evidence is loaded for category-level benchmark math here?",
      "What public gaps would block a defensible retailer-facing spec calculation?",
      "Which published sources are calculation-capable for this category and which are not?",
    ],
    auditor: [
      "What public calculation path is visible for this claim and where would an audit trail still break?",
      "What non-detect, basis, or species limits would block a clean public calculation?",
      "Which public sources can support a reproducible benchmark and which cannot?",
    ],
    quality: [
      "What public calculation inputs exist for this category before private lot data is introduced?",
      "What public evidence would still be missing before stronger target-setting math could be defended?",
      "Which published sources are usable for comparable math here and which are not?",
    ],
    regulator: [
      "What public occurrence evidence is calculation-capable for this category?",
      "What public data gaps would block a stronger achievability calculation here?",
      "Which published sources can support a defensible threshold analysis on this site?",
    ],
    lawyer: [
      "What public calculation path is actually supported by the cited evidence here?",
      "Which visible evidence limits would block a direct threshold claim?",
      "Which published sources are usable for math and which are only context or summary evidence?",
    ],
    journalist: [
      "What public calculation path is visible here and what still remains too incomplete to publish as a number?",
      "What evidence gap would stop the site from giving a defensible percentile or threshold answer here?",
      "Which published sources are strong enough for calculation and which are not?",
    ],
  },
  audit: {
    standards: [
      "Audit whether this product row is ready for a defensible public calculation.",
      "Audit the visible source pool for basis, species, and product-fit mismatches.",
      "Audit which missing sources or extraction gaps still block stronger math here.",
    ],
    brand: [
      "Audit whether a public comparison for this category would be supported, limited, or blocked.",
      "Audit the public evidence for species, basis, or product-fit mismatches.",
      "Audit what public limitations would need to be disclosed before making a claim here.",
    ],
    supplier: [
      "Audit what a public buyer or auditor would still need from an ingredient supplier evidence packet.",
      "Audit which COA fields are non-negotiable for a usable public comparison here.",
      "Audit where a supplier-facing claim would still be limited or blocked by public evidence gaps.",
    ],
    retailer: [
      "Audit whether the public evidence is strong enough to support a retailer-facing spec discussion here.",
      "Audit which public records, comparability rules, and evidence gaps matter most for procurement.",
      "Audit whether this category has enough public evidence to support supplier escalation logic.",
    ],
    auditor: [
      "Audit whether this claim path is supported, limited, blocked, or non-comparable.",
      "Audit what public records and comparability checks would be required for this category.",
      "Audit whether the evidence path breaks on basis, species, scope, or non-detect handling.",
    ],
    quality: [
      "Audit which public comparability checks should happen before operational action is taken.",
      "Audit whether the current public evidence is strong enough to support target-setting here.",
      "Audit where a public interpretation would still be blocked without private lot history.",
    ],
    regulator: [
      "Audit whether the public evidence for this category is strong, limited, or blocked for rulemaking context.",
      "Audit which visible product-metal cells remain data gaps on the site.",
      "Audit whether the public regulatory comparison here is direct or qualified by scope limits.",
    ],
    lawyer: [
      "Audit whether this public comparison is direct, limited, blocked, or non-comparable.",
      "Audit the cited evidence for wrong basis, wrong species, wrong scope, or wrong regulatory instrument.",
      "Audit what the site can support in public and what would still remain disputed or blocked.",
    ],
    journalist: [
      "Audit whether this public evidence story is strong, limited, or blocked.",
      "Audit the main limitation a careful reporter should disclose before summarizing this category.",
      "Audit whether the apparent comparison is direct or actually broken by basis or species mismatch.",
    ],
  },
}

function escapeHTML(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function renderRichText(text: string, citations: AskCitation[], wrapParagraphs = true) {
  let html = escapeHTML(text)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\[(\d+)\]/g, (_match, id) => {
    const citation = citations.find((item) => item.id === Number(id))
    if (!citation) return `[${id}]`
    return `<a href="${citation.url}" class="ask-index-cite">[${id}]</a>`
  })

  if (!wrapParagraphs) return html.replace(/\n/g, "<br />")

  return html
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
    .join("")
}

function removeChildren(node: Element) {
  while (node.firstChild) node.removeChild(node.firstChild)
}

function appendMessage(container: Element, role: "user" | "assistant" | "status", html: string) {
  const message = document.createElement("div")
  message.className = `ask-index-message ${role}`
  message.innerHTML = html
  container.appendChild(message)
  container.scrollTop = container.scrollHeight
  return message
}

function renderSummaryValue(text: string, citations: AskCitation[]) {
  return `<div class="ask-index-summary-value">${renderRichText(text, citations)}</div>`
}

function renderSummary(data: AskResponse, citations: AskCitation[]) {
  const badges = [
    data.status
      ? `<span class="ask-index-badge status-${data.status}">${escapeHTML(STATUS_LABELS[data.status])}</span>`
      : "",
    data.confidence
      ? `<span class="ask-index-badge confidence-${data.confidence}">${escapeHTML(
          CONFIDENCE_LABELS[data.confidence],
        )}</span>`
      : "",
  ]
    .filter(Boolean)
    .join("")

  const fields = [
    data.direct_answer ? ["Direct answer", data.direct_answer] : null,
    data.question_interpreted_as ? ["Question interpreted as", data.question_interpreted_as] : null,
    data.source_pool ? ["Source pool", data.source_pool] : null,
    data.calculation_method ? ["Calculation method", data.calculation_method] : null,
    data.regulatory_comparison ? ["Regulatory comparison", data.regulatory_comparison] : null,
    data.audit_trail ? ["Audit trail", data.audit_trail] : null,
    data.next_step ? ["Next step", data.next_step] : null,
  ].filter(Boolean) as Array<[string, string]>

  if (badges.length === 0 && fields.length === 0) return ""

  const fieldHtml = fields
    .map(
      ([label, value]) =>
        `<div class="ask-index-summary-field"><div class="ask-index-summary-label">${escapeHTML(
          label,
        )}</div>${renderSummaryValue(value, citations)}</div>`,
    )
    .join("")

  return `<div class="ask-index-summary">${
    badges ? `<div class="ask-index-badges">${badges}</div>` : ""
  }${fieldHtml ? `<div class="ask-index-summary-grid">${fieldHtml}</div>` : ""}</div>`
}

function renderCitations(citations: AskCitation[]) {
  if (citations.length === 0) return ""

  const items = citations
    .map(
      (citation) => `<li>
        <a href="${citation.url}">[${citation.id}] ${escapeHTML(citation.title)}</a>
        <p>${escapeHTML(citation.excerpt)}</p>
      </li>`,
    )
    .join("")

  return `<div class="ask-index-sources"><div class="ask-index-sources-title">Sources</div><ol>${items}</ol></div>`
}

function inferInitialRole(pageSlug: string): AskRole {
  if (pageSlug.startsWith("ingredients/")) return "supplier"
  if (pageSlug.startsWith("regulations/")) return "regulator"
  if (pageSlug.startsWith("testing/")) return "auditor"
  if (pageSlug.startsWith("supply-chain/")) return "supplier"
  if (pageSlug.startsWith("products/")) return "standards"
  return "standards"
}

function inferInitialVerb(pageSlug: string): AskVerb {
  if (pageSlug.startsWith("products/")) return "calculate"
  if (pageSlug.startsWith("regulations/")) return "compare"
  if (pageSlug.startsWith("testing/") || pageSlug.startsWith("methodology")) return "audit"
  return "explain"
}

function buildPlaceholder(role: AskRole, verb: AskVerb) {
  if (role === "supplier") {
    return verb === "audit"
      ? "Ask what a supplier COA or public evidence packet would need to support, and where public limits still apply..."
      : "Ask about supplier evidence, higher-risk ingredient forms, COA fields, public specs, or derivative risk..."
  }

  if (verb === "calculate") {
    return "Ask about public calculation inputs, source pools, percentiles, pass-rate math, or why a calculation is blocked..."
  }

  if (verb === "audit") {
    return "Ask whether a public claim, comparison, or evidence path is supported, limited, blocked, or non-comparable..."
  }

  return "Ask to explain, compare, calculate, or audit published evidence. Do not enter confidential COAs, lot data, or supplier records here."
}

function getSuggestions(role: AskRole, verb: AskVerb) {
  return QUESTION_SUGGESTIONS[verb][role]
}

function setupAskIndex(root: Element) {
  const button = root.querySelector(".ask-index-button") as HTMLButtonElement | null
  const panel = root.querySelector(".ask-index-panel") as HTMLDivElement | null
  const close = root.querySelector(".ask-index-close") as HTMLButtonElement | null
  const form = root.querySelector(".ask-index-form") as HTMLFormElement | null
  const input = root.querySelector(".ask-index-input") as HTMLTextAreaElement | null
  const messages = root.querySelector(".ask-index-messages") as HTMLDivElement | null
  const suggestions = root.querySelector(".ask-index-suggestions") as HTMLDivElement | null
  const verbButtons = Array.from(
    root.querySelectorAll("[data-ask-verb]"),
  ) as HTMLButtonElement[]
  const roleButtons = Array.from(
    root.querySelectorAll("[data-ask-role]"),
  ) as HTMLButtonElement[]

  if (!button || !panel || !close || !form || !input || !messages || !suggestions) return

  const openButton = button
  const panelEl = panel
  const closeButton = close
  const formEl = form
  const inputEl = input
  const messagesEl = messages
  const suggestionsEl = suggestions
  const pageSlug = document.body.dataset.slug || ""
  let activeVerb = inferInitialVerb(pageSlug)
  let activeRole = inferInitialRole(pageSlug)
  let isSubmitting = false

  function renderSuggestions() {
    removeChildren(suggestionsEl)
    getSuggestions(activeRole, activeVerb).forEach((prompt) => {
      const suggestion = document.createElement("button")
      suggestion.type = "button"
      suggestion.textContent = prompt
      suggestion.addEventListener("click", () => openPanel(prompt))
      suggestionsEl.appendChild(suggestion)
    })
  }

  function syncControls() {
    verbButtons.forEach((button) => {
      const isActive = button.dataset.askVerb === activeVerb
      button.classList.toggle("active", isActive)
      button.setAttribute("aria-pressed", isActive ? "true" : "false")
    })

    roleButtons.forEach((button) => {
      const isActive = button.dataset.askRole === activeRole
      button.classList.toggle("active", isActive)
      button.setAttribute("aria-pressed", isActive ? "true" : "false")
    })

    inputEl.placeholder = buildPlaceholder(activeRole, activeVerb)
    renderSuggestions()
  }

  function openPanel(prefill?: string) {
    panelEl.classList.add("active")
    panelEl.setAttribute("aria-hidden", "false")
    openButton.setAttribute("aria-expanded", "true")
    if (messagesEl.childElementCount === 0) {
      appendMessage(
        messagesEl,
        "assistant",
        "<p>Public evidence mode is active. I can explain, compare, calculate, or audit from published Heavy Metal Index pages only.</p><p>For COAs, lot histories, supplier scorecards, private specs, or release decisions, use the private analytical workbench.</p>",
      )
    }
    if (prefill) inputEl.value = prefill
    inputEl.focus()
  }

  function closePanel() {
    panelEl.classList.remove("active")
    panelEl.setAttribute("aria-hidden", "true")
    openButton.setAttribute("aria-expanded", "false")
    openButton.focus()
  }

  openButton.addEventListener("click", () => openPanel())
  closeButton.addEventListener("click", closePanel)
  panelEl.addEventListener("click", (event) => {
    if (event.target === panelEl) closePanel()
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panelEl.classList.contains("active")) closePanel()
  })

  verbButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = button.dataset.askVerb as AskVerb | undefined
      if (!next) return
      activeVerb = next
      syncControls()
    })
  })

  roleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = button.dataset.askRole as AskRole | undefined
      if (!next) return
      activeRole = next
      syncControls()
    })
  })

  inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      formEl.requestSubmit()
    }
  })

  formEl.addEventListener("submit", async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const question = inputEl.value.trim()
    if (!question) return

    isSubmitting = true
    appendMessage(
      messagesEl,
      "user",
      `<p><span class="ask-index-inline-tag">${escapeHTML(VERB_LABELS[activeVerb])}</span> <span class="ask-index-inline-tag">${escapeHTML(ROLE_LABELS[activeRole])}</span></p><p>${escapeHTML(question)}</p>`,
    )
    inputEl.value = ""
    const status = appendMessage(messagesEl, "status", "<p>Searching the Index...</p>")

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          pageSlug,
          verb: activeVerb,
          role: activeRole,
        }),
      })

      const data = (await response.json()) as AskResponse
      status.remove()

      if (!response.ok || data.error) {
        appendMessage(
          messagesEl,
          "assistant",
          `<p>${escapeHTML(data.error || "Ask the Index could not answer right now.")}</p>`,
        )
        return
      }

      const citations = data.citations || []
      const summary = renderSummary(data, citations)
      const answer = data.answer ? renderRichText(data.answer, citations) : ""
      const limits = data.limits
        ? `<div class="ask-index-limits">${renderRichText(data.limits, citations)}</div>`
        : ""

      appendMessage(
        messagesEl,
        "assistant",
        `${summary}${answer}${limits}${renderCitations(citations)}`,
      )
    } catch {
      status.remove()
      appendMessage(messagesEl, "assistant", "<p>Ask the Index could not connect. Try again in a moment.</p>")
    } finally {
      isSubmitting = false
    }
  })

  syncControls()
}

function setupAllAskIndex() {
  document.querySelectorAll(".ask-index").forEach((root) => {
    if ((root as HTMLElement).dataset.askIndexReady === "true") return
    ;(root as HTMLElement).dataset.askIndexReady = "true"
    setupAskIndex(root)
  })
}

function setupAskIndexTriggers() {
  document.querySelectorAll("[data-ask-index-trigger]").forEach((trigger) => {
    if ((trigger as HTMLElement).dataset.askIndexTriggerReady === "true") return
    ;(trigger as HTMLElement).dataset.askIndexTriggerReady = "true"
    trigger.addEventListener("click", () => {
      const button = document.querySelector(".ask-index-button") as HTMLButtonElement | null
      button?.click()
    })
  })
}

function setupAskIndexUI() {
  setupAllAskIndex()
  setupAskIndexTriggers()
}

document.addEventListener("nav", setupAskIndexUI)

queueMicrotask(setupAskIndexUI)
