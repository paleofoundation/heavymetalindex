type AskCitation = {
  id: number
  title: string
  url: string
  slug: string
  excerpt: string
}

type AskResponse = {
  answer?: string
  confidence?: "high" | "medium" | "low" | "insufficient"
  limits?: string
  citations?: AskCitation[]
  mode?: "model" | "retrieval_only" | "guardrail_fallback"
  error?: string
}

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
  html = html.replace(/\[(\d+)\]/g, (_match, id) => {
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

function setupAskIndex(root: Element) {
  const button = root.querySelector(".ask-index-button") as HTMLButtonElement | null
  const panel = root.querySelector(".ask-index-panel") as HTMLDivElement | null
  const dialog = root.querySelector(".ask-index-dialog") as HTMLDivElement | null
  const close = root.querySelector(".ask-index-close") as HTMLButtonElement | null
  const form = root.querySelector(".ask-index-form") as HTMLFormElement | null
  const input = root.querySelector(".ask-index-input") as HTMLTextAreaElement | null
  const messages = root.querySelector(".ask-index-messages") as HTMLDivElement | null
  const suggestions = root.querySelectorAll(".ask-index-suggestions button")

  if (!button || !panel || !dialog || !close || !form || !input || !messages) return

  const openButton = button
  const panelEl = panel
  const closeButton = close
  const formEl = form
  const inputEl = input
  const messagesEl = messages
  let isSubmitting = false

  function openPanel(prefill?: string) {
    panelEl.classList.add("active")
    panelEl.setAttribute("aria-hidden", "false")
    openButton.setAttribute("aria-expanded", "true")
    if (messagesEl.childElementCount === 0) {
      appendMessage(
        messagesEl,
        "assistant",
        "<p>Ask a question and I'll answer only from Heavy Metal Index pages, with citations back to the site.</p>",
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
      const mode =
        data.mode === "retrieval_only"
          ? '<div class="ask-index-limits">Model answer generation is not configured yet; showing retrieved pages.</div>'
          : ""

      appendMessage(
        messagesEl,
        "assistant",
        `${renderAnswer(data.answer || "", citations)}${limits}${mode}${renderCitations(citations)}`,
      )
    } catch {
      status.remove()
      appendMessage(messagesEl, "assistant", "<p>Ask the Index could not connect. Try again in a moment.</p>")
    } finally {
      isSubmitting = false
    }
  })
}

document.addEventListener("nav", () => {
  document.querySelectorAll(".ask-index").forEach((root) => {
    if ((root as HTMLElement).dataset.askIndexReady === "true") return
    ;(root as HTMLElement).dataset.askIndexReady = "true"
    setupAskIndex(root)
  })
})
