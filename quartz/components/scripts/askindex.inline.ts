type Audience = "legal" | "regulatory" | "journalist" | "educator"

type AskCitation = {
  id: number
  title: string
  url: string
  slug: string
  excerpt: string
  evidence_tier: string | null
  year: number | string | null
  sample_n: number | string | null
  last_full_resynthesis: string | null
}

type HmtcBlock = {
  metal: string
  metal_name: string
  product_label: string
  hmtc_value_ppb: number | null
  hmtc_status: string | null
  hmtc_rationale: string | null
  hmtc_rationale_explanation: string | null
  literature_floor_ppb: number | null
  fda_value_ppb: number | null
  fda_basis: string | null
  eu_value_ppb: number | null
  eu_basis: string | null
  codex_value_ppb: number | null
  comparable_limits_note: string | null
  public_methodology_url: string
}

type MethodologyTrace = {
  audience: Audience | null
  retrieval_passages: number
  a_tier_passages: number
  b_tier_passages: number
  c_tier_passages: number
  untyped_passages: number
  oldest_synthesis_cited: string | null
  newest_synthesis_cited: string | null
  hmtc_threshold_block_emitted: boolean
  contradiction_notes: string[]
  confidence: string | null
  limits: string | null
  drift_defense_applied: boolean
  disagreement_surfacing_applied: boolean
  vulnerable_population_gating_applied: boolean
  mode: string
  refusal_kind?: string
}

type AskResponse = {
  answer?: string
  confidence?: "high" | "medium" | "low" | "insufficient"
  limits?: string
  citations?: AskCitation[]
  methodology_trace?: MethodologyTrace
  hmtc_block?: HmtcBlock | null
  audience?: Audience | null
  mode?: string
  error?: string
}

const AUDIENCE_STORAGE_KEY = "hmi-ask-audience"

function escapeHTML(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function renderAnswer(text: string, citations: AskCitation[]) {
  let html = escapeHTML(text)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\[(\d+)(?:,\s*[^\]]+)?\]/g, (_match, id) => {
    const citation = citations.find((item) => item.id === Number(id))
    if (!citation) return `[${id}]`
    return `<a href="${citation.url}" class="ask-index-cite">[${id}]</a>`
  })
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

function citationMetaSpan(citation: AskCitation) {
  const meta: string[] = []
  if (citation.evidence_tier) meta.push(`tier ${citation.evidence_tier}`)
  if (citation.year) meta.push(`${citation.year}`)
  if (citation.sample_n) meta.push(`n=${citation.sample_n}`)
  if (citation.last_full_resynthesis) meta.push(`synth ${citation.last_full_resynthesis}`)
  if (meta.length === 0) return ""
  return `<span class="ask-index-cite-meta">${meta.map(escapeHTML).join(" · ")}</span>`
}

function renderCitations(citations: AskCitation[]) {
  if (citations.length === 0) return ""
  const items = citations
    .map(
      (citation) => `<li>
        <a href="${citation.url}">[${citation.id}] ${escapeHTML(citation.title)}</a>
        ${citationMetaSpan(citation)}
        <p>${escapeHTML(citation.excerpt)}</p>
      </li>`,
    )
    .join("")
  return `<div class="ask-index-sources"><div class="ask-index-sources-title">Sources</div><ol>${items}</ol></div>`
}

function renderHmtcBlock(block: HmtcBlock | null | undefined) {
  if (!block) return ""
  const rows: string[] = []
  const fmt = (v: number | null) => (v === null || v === undefined ? "—" : `${v} ppb`)
  rows.push(`<tr><th>Heavy Metal Index literature floor</th><td>${fmt(block.literature_floor_ppb)}</td><td><em>see cited excerpts above</em></td></tr>`)
  rows.push(`<tr><th>FDA</th><td>${fmt(block.fda_value_ppb)}</td><td>${escapeHTML(block.fda_basis || "")}</td></tr>`)
  rows.push(`<tr><th>EU</th><td>${fmt(block.eu_value_ppb)}</td><td>${escapeHTML(block.eu_basis || "")}</td></tr>`)
  rows.push(`<tr><th>Codex</th><td>${fmt(block.codex_value_ppb)}</td><td></td></tr>`)
  const hmtcValueCell =
    block.hmtc_status === "in-development" || block.hmtc_value_ppb === null
      ? "<em>in development</em>"
      : fmt(block.hmtc_value_ppb)
  const rationaleCell = block.hmtc_rationale
    ? `${escapeHTML(block.hmtc_rationale)}${block.hmtc_rationale_explanation ? `: ${escapeHTML(block.hmtc_rationale_explanation)}` : ""}`
    : "<em>rationale will be labeled when the threshold is set</em>"
  rows.push(`<tr class="ask-index-hmtc-row"><th>HMT&amp;C threshold</th><td>${hmtcValueCell}</td><td>${rationaleCell}</td></tr>`)
  return `<div class="ask-index-hmtc-block">
    <div class="ask-index-hmtc-title">Where HMT&amp;C draws the line — ${escapeHTML(block.metal_name)} in ${escapeHTML(block.product_label)}</div>
    <table><thead><tr><th>Source of limit</th><th>Value</th><th>Basis</th></tr></thead><tbody>${rows.join("")}</tbody></table>
    <p class="ask-index-hmtc-note">${escapeHTML(block.comparable_limits_note || "")}</p>
    <p class="ask-index-hmtc-methodology"><a href="${block.public_methodology_url}">How HMT&amp;C thresholds are set</a> — the wiki labels the gap between literature and certification rather than hiding it (CLAUDE.md Part 2).</p>
  </div>`
}

function renderMethodologyFooter(trace: MethodologyTrace | undefined) {
  if (!trace) return ""
  if (trace.refusal_kind) {
    return `<details class="ask-index-methodology"><summary>How this refusal was decided</summary>
      <ul>
        <li>Refusal kind: ${escapeHTML(trace.refusal_kind)}</li>
        <li>Drift defense applied: ${trace.drift_defense_applied ? "yes" : "no"}</li>
      </ul>
    </details>`
  }
  const items: string[] = []
  items.push(`<li>Audience mode: ${escapeHTML(trace.audience || "default")}</li>`)
  items.push(`<li>Retrieval: ${trace.retrieval_passages} excerpts (A-tier ${trace.a_tier_passages}, B-tier ${trace.b_tier_passages}, C-tier ${trace.c_tier_passages}, untyped ${trace.untyped_passages})</li>`)
  if (trace.oldest_synthesis_cited || trace.newest_synthesis_cited) {
    items.push(`<li>Cited synthesis dates: ${escapeHTML(trace.oldest_synthesis_cited || "—")} → ${escapeHTML(trace.newest_synthesis_cited || "—")}</li>`)
  }
  items.push(`<li>HMT&amp;C threshold block: ${trace.hmtc_threshold_block_emitted ? "emitted from public thresholds surface" : "not applicable to this scope"}</li>`)
  if (trace.contradiction_notes && trace.contradiction_notes.length > 0) {
    items.push(`<li>Contradictions surfaced: <ul>${trace.contradiction_notes.map((note) => `<li>${escapeHTML(note)}</li>`).join("")}</ul></li>`)
  } else {
    items.push(`<li>Contradictions surfaced: none among cited excerpts</li>`)
  }
  items.push(`<li>Confidence: ${escapeHTML(trace.confidence || "—")}</li>`)
  if (trace.limits) items.push(`<li>Limits: ${escapeHTML(trace.limits)}</li>`)
  items.push(`<li>Drift defense applied: ${trace.drift_defense_applied ? "yes (CLAUDE.md Part 2)" : "no"}</li>`)
  items.push(`<li>Disagreement surfacing: ${trace.disagreement_surfacing_applied ? "yes" : "no"}</li>`)
  items.push(`<li>Vulnerable-population gating: ${trace.vulnerable_population_gating_applied ? "yes" : "n/a for this audience"}</li>`)
  return `<details class="ask-index-methodology"><summary>How this was answered</summary><ul>${items.join("")}</ul></details>`
}

function renderShareButton(answer: string, citations: AskCitation[], audience: Audience | null) {
  return `<button type="button" class="ask-index-share" data-share-answer="${escapeHTML(answer)}" data-share-audience="${escapeHTML(audience || "")}" data-share-citations="${escapeHTML(JSON.stringify(citations.map((c) => ({ id: c.id, title: c.title, url: c.url }))))}">Share this answer</button>`
}

function copyShareCardToClipboard(answer: string, citations: { id: number; title: string; url: string }[], audience: string) {
  const date = new Date().toISOString().slice(0, 10)
  const lines: string[] = []
  lines.push(`Heavy Metal Index — Ask the Index (answered ${date})`)
  if (audience) lines.push(`Audience mode: ${audience}`)
  lines.push("")
  lines.push(answer)
  lines.push("")
  lines.push("Sources:")
  for (const c of citations) {
    lines.push(`[${c.id}] ${c.title} — https://heavymetalindex.com${c.url}`)
  }
  lines.push("")
  lines.push("Reference only. Not medical, legal, regulatory, or certification advice. https://heavymetalindex.com")
  navigator.clipboard.writeText(lines.join("\n"))
}

function getStoredAudience(): Audience | null {
  try {
    const stored = window.localStorage.getItem(AUDIENCE_STORAGE_KEY)
    if (stored === "legal" || stored === "regulatory" || stored === "journalist" || stored === "educator") {
      return stored
    }
  } catch {
    // localStorage unavailable
  }
  return null
}

function storeAudience(audience: Audience) {
  try {
    window.localStorage.setItem(AUDIENCE_STORAGE_KEY, audience)
  } catch {
    // localStorage unavailable; in-session only
  }
}

function setupAskIndex(root: Element) {
  const button = root.querySelector(".ask-index-button") as HTMLButtonElement | null
  const panel = root.querySelector(".ask-index-panel") as HTMLDivElement | null
  const dialog = root.querySelector(".ask-index-dialog") as HTMLDivElement | null
  const close = root.querySelector(".ask-index-close") as HTMLButtonElement | null
  const form = root.querySelector(".ask-index-form") as HTMLFormElement | null
  const input = root.querySelector(".ask-index-input") as HTMLTextAreaElement | null
  const messages = root.querySelector(".ask-index-messages") as HTMLDivElement | null
  const suggestions = root.querySelectorAll(".ask-index-suggestions button")
  const audiencePicker = root.querySelector(".ask-index-audience-picker") as HTMLDivElement | null
  const audienceButtons = root.querySelectorAll(".ask-index-audience-buttons button")
  const audienceChangeButton = root.querySelector(".ask-index-audience-change") as HTMLButtonElement | null

  if (!button || !panel || !dialog || !close || !form || !input || !messages || !audiencePicker) return

  const openButton = button
  const panelEl = panel
  const closeButton = close
  const formEl = form
  const inputEl = input
  const messagesEl = messages
  const audiencePickerEl = audiencePicker
  let isSubmitting = false
  let currentAudience: Audience | null = getStoredAudience()

  function applyAudienceUI() {
    if (currentAudience) {
      audiencePickerEl.classList.add("audience-chosen")
      if (audienceChangeButton) {
        audienceChangeButton.hidden = false
        audienceChangeButton.textContent = `Audience: ${currentAudience} (change)`
      }
    } else {
      audiencePickerEl.classList.remove("audience-chosen")
      if (audienceChangeButton) audienceChangeButton.hidden = true
    }
  }

  applyAudienceUI()

  audienceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = (btn as HTMLButtonElement).dataset.audience as Audience | undefined
      if (!choice) return
      currentAudience = choice
      storeAudience(choice)
      applyAudienceUI()
      inputEl.focus()
    })
  })

  if (audienceChangeButton) {
    audienceChangeButton.addEventListener("click", () => {
      currentAudience = null
      try {
        window.localStorage.removeItem(AUDIENCE_STORAGE_KEY)
      } catch {
        // no-op
      }
      applyAudienceUI()
    })
  }

  function openPanel(prefill?: string) {
    panelEl.classList.add("active")
    panelEl.setAttribute("aria-hidden", "false")
    openButton.setAttribute("aria-expanded", "true")
    if (messagesEl.childElementCount === 0) {
      appendMessage(
        messagesEl,
        "assistant",
        "<p>Ask a question and I'll answer only from Heavy Metal Index pages, with citations and a methodology trace on every answer. Pick an audience above so the response is tuned for what you actually need.</p>",
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

  suggestions.forEach((suggestion) => {
    suggestion.addEventListener("click", () => openPanel(suggestion.textContent?.trim() || ""))
  })

  inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      formEl.requestSubmit()
    }
  })

  messagesEl.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null
    if (!target || !target.classList.contains("ask-index-share")) return
    event.preventDefault()
    const answer = target.getAttribute("data-share-answer") || ""
    const audience = target.getAttribute("data-share-audience") || ""
    const citations = JSON.parse(target.getAttribute("data-share-citations") || "[]")
    copyShareCardToClipboard(answer, citations, audience)
    const note = document.createElement("span")
    note.className = "ask-index-share-confirm"
    note.textContent = " copied"
    target.after(note)
    setTimeout(() => note.remove(), 2000)
  })

  formEl.addEventListener("submit", async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const question = inputEl.value.trim()
    if (!question) return

    isSubmitting = true
    appendMessage(messagesEl, "user", `<p>${escapeHTML(question)}</p>`)
    inputEl.value = ""
    const status = appendMessage(messagesEl, "status", "<p>Searching the Index...</p>")

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          pageSlug: document.body.dataset.slug || "",
          audience: currentAudience,
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
      const limits =
        data.limits && data.confidence !== "high"
          ? `<div class="ask-index-limits">${escapeHTML(data.limits)}</div>`
          : ""

      const hmtcHtml = renderHmtcBlock(data.hmtc_block)
      const methodologyHtml = renderMethodologyFooter(data.methodology_trace)
      const shareHtml = data.answer
        ? `<div class="ask-index-share-row">${renderShareButton(data.answer, citations, data.audience || null)}</div>`
        : ""

      appendMessage(
        messagesEl,
        "assistant",
        `${renderAnswer(data.answer || "", citations)}${limits}${hmtcHtml}${renderCitations(citations)}${methodologyHtml}${shareHtml}`,
      )
    } catch {
      status.remove()
      appendMessage(messagesEl, "assistant", "<p>Ask the Index could not connect. Try again in a moment.</p>")
    } finally {
      isSubmitting = false
    }
  })
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
