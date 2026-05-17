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

      appendMessage(
        messagesEl,
        "assistant",
        `${renderAnswer(data.answer || "", citations)}${limits}${renderCitations(citations)}`,
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
  setupAllAskPage()
}

document.addEventListener("nav", setupAskIndexUI)

queueMicrotask(setupAskIndexUI)

/* ===========================================================================
 * Page-mode UI (rendered at /ask via wiki/ask.md). The page POSTs to
 * /api/ask and consumes the streaming SSE response per
 * docs/ask-the-index-spec.md. The leading `event: meta` line carries the
 * citation envelope; subsequent `data: {choices:[{delta:{content:"..."}}]}`
 * lines are OpenAI-compatible deltas that we concatenate into the body.
 * ========================================================================= */

type AskPageCitation = {
  id: number
  title: string
  url: string
  slug: string
  excerpt?: string
}

const BASE_URL_HOST = "heavymetalindex.com"

function escapePageHTML(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function renderInlineLinks(text: string, citations: AskPageCitation[]) {
  // Escape HTML first so any user-injected angle brackets are inert.
  let html = escapePageHTML(text)
  // Wikilinks: [[slug]] or [[slug|label]] → <a href="/slug">label or slug</a>.
  html = html.replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, (_match, slug: string, label?: string) => {
    const clean = slug.trim()
    const display = (label || clean).trim()
    return `<a href="/${clean}">${escapePageHTML(display)}</a>`
  })
  // Bare URLs to heavymetalindex.com → clickable; strip the host so the link
  // stays site-internal (works in dev and prod).
  const urlRe = /\bhttps?:\/\/(?:www\.)?heavymetalindex\.com(\/[A-Za-z0-9_\-./#?=&%]*)?/g
  html = html.replace(urlRe, (_m, path?: string) => {
    const href = path || "/"
    return `<a href="${href}">${escapePageHTML(href)}</a>`
  })
  // Basic markdown bold (the system prompt may emit some).
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  return html
}

function paragraphize(html: string) {
  // Split on blank lines; preserve single newlines as <br> within paragraphs.
  const paragraphs = html.split(/\n{2,}/).filter((p) => p.trim().length > 0)
  return paragraphs.map((p) => `<p>${p.replace(/\n/g, "<br />")}</p>`).join("")
}

function renderCitationItem(citation: AskPageCitation) {
  const safeTitle = escapePageHTML(citation.title || citation.slug)
  const url = citation.url || `/${citation.slug}`
  return `<li><a href="${url}">${safeTitle}</a> <span class="slug">${escapePageHTML(citation.slug)}</span></li>`
}

function dedupeCitations(citations: AskPageCitation[]): AskPageCitation[] {
  const seen = new Set<string>()
  const out: AskPageCitation[] = []
  for (const c of citations) {
    if (!c || !c.slug) continue
    if (seen.has(c.slug)) continue
    seen.add(c.slug)
    out.push(c)
  }
  return out
}

function getAssistantTemplate() {
  return document.getElementById("hmi-ask-template-message-assistant") as HTMLTemplateElement | null
}
function getUserTemplate() {
  return document.getElementById("hmi-ask-template-message-user") as HTMLTemplateElement | null
}

function appendUserMessage(conv: HTMLElement, text: string) {
  const tpl = getUserTemplate()
  if (!tpl) return
  const node = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement
  const body = node.querySelector(".hmi-ask-message-body") as HTMLElement
  body.innerHTML = paragraphize(escapePageHTML(text))
  conv.appendChild(node)
  node.scrollIntoView({ behavior: "smooth", block: "end" })
}

function appendAssistantMessage(conv: HTMLElement) {
  const tpl = getAssistantTemplate()
  if (!tpl) throw new Error("Ask page assistant template missing")
  const node = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement
  conv.appendChild(node)
  return node
}

function setupAskPage(root: HTMLElement) {
  const endpoint = root.dataset.askEndpoint || "/api/ask"
  const form = root.querySelector(".hmi-ask-form") as HTMLFormElement | null
  const textarea = root.querySelector(".hmi-ask-form textarea") as HTMLTextAreaElement | null
  const submit = root.querySelector(".hmi-ask-submit") as HTMLButtonElement | null
  const conv = root.querySelector(".hmi-ask-conversation") as HTMLElement | null
  const examples = root.querySelectorAll<HTMLButtonElement>("[data-hmi-ask-example]")
  if (!form || !textarea || !submit || !conv) return

  examples.forEach((btn) => {
    btn.addEventListener("click", () => {
      textarea.value = btn.dataset.hmiAskExample || btn.textContent || ""
      textarea.focus()
    })
  })

  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      form.requestSubmit()
    }
  })

  let inFlight = false

  async function submitQuestion(question: string) {
    if (inFlight) return
    inFlight = true
    submit.disabled = true
    appendUserMessage(conv, question)
    const msg = appendAssistantMessage(conv)
    const body = msg.querySelector(".hmi-ask-message-body") as HTMLElement
    const citationsBox = msg.querySelector(".hmi-ask-message-citations") as HTMLElement
    const citationsList = msg.querySelector(".hmi-ask-message-citations-list") as HTMLElement
    const limitsBox = msg.querySelector(".hmi-ask-message-limits") as HTMLElement
    const errorBox = msg.querySelector(".hmi-ask-message-error") as HTMLElement
    const errorText = msg.querySelector(".hmi-ask-message-error-text") as HTMLElement
    const retryBtn = msg.querySelector(".hmi-ask-retry") as HTMLButtonElement

    body.innerHTML = `<span class="hmi-ask-streaming-cursor"></span>`
    msg.scrollIntoView({ behavior: "smooth", block: "end" })

    let citations: AskPageCitation[] = []
    let streamedText = ""

    const renderFinal = () => {
      body.innerHTML = paragraphize(renderInlineLinks(streamedText.trim(), citations))
      const unique = dedupeCitations(citations)
      if (unique.length > 0) {
        citationsList.innerHTML = unique.map(renderCitationItem).join("")
        citationsBox.hidden = false
      }
    }

    const showError = (message: string) => {
      body.innerHTML = `<p>Ask the Index could not complete the request.</p>`
      errorText.textContent = message
      errorBox.hidden = false
      retryBtn.onclick = () => {
        msg.remove()
        inFlight = false
        submit.disabled = false
        submitQuestion(question)
      }
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60_000)
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream, application/json" },
        body: JSON.stringify({ q: question, pageSlug: document.body.dataset.slug || "" }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

      const contentType = response.headers.get("content-type") || ""

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}))
        showError(errBody.error || `Request failed with status ${response.status}.`)
        return
      }

      // JSON path: no_evidence_loaded or retrieval_only fallback.
      if (contentType.includes("application/json")) {
        const data = await response.json()
        if (data.mode === "no_evidence_loaded") {
          body.innerHTML = paragraphize(escapePageHTML(
            data.answer ||
              "Heavy Metal Index does not yet carry evidence on that question. Try a question about a specific food, metal, or regulation.",
          ))
          if (data.limits) {
            limitsBox.textContent = data.limits
            limitsBox.hidden = false
          }
          return
        }
        // retrieval_only or other JSON modes: surface answer text + citations.
        citations = data.citations || []
        streamedText = data.answer || ""
        renderFinal()
        if (data.limits) {
          limitsBox.textContent = data.limits
          limitsBox.hidden = false
        }
        return
      }

      // SSE path.
      if (!response.body) {
        showError("The server returned an empty response.")
        return
      }
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""
      let currentEvent = "message"

      const flushEvents = () => {
        // Each event block is separated by a blank line. Each block has zero
        // or one `event: <name>` line and one or more `data: ...` lines.
        let nlIndex = buffer.indexOf("\n\n")
        while (nlIndex !== -1) {
          const block = buffer.slice(0, nlIndex)
          buffer = buffer.slice(nlIndex + 2)
          const lines = block.split("\n")
          let eventName = currentEvent
          const dataLines: string[] = []
          for (const line of lines) {
            if (line.startsWith("event:")) eventName = line.slice(6).trim()
            else if (line.startsWith("data:")) dataLines.push(line.slice(5).trimStart())
          }
          if (dataLines.length === 0) {
            currentEvent = "message"
            nlIndex = buffer.indexOf("\n\n")
            continue
          }
          const dataStr = dataLines.join("\n")
          if (dataStr === "[DONE]") {
            currentEvent = "message"
            nlIndex = buffer.indexOf("\n\n")
            continue
          }
          try {
            const payload = JSON.parse(dataStr)
            if (eventName === "meta") {
              if (Array.isArray(payload.citations)) citations = payload.citations
            } else if (eventName === "error") {
              showError(payload.message || `Stream error (status ${payload.status ?? "?"}).`)
            } else {
              // Default: OpenAI-compatible chat completion chunk.
              const delta = payload.choices?.[0]?.delta?.content
              if (typeof delta === "string" && delta.length > 0) {
                streamedText += delta
                body.innerHTML =
                  paragraphize(renderInlineLinks(streamedText, citations)) +
                  `<span class="hmi-ask-streaming-cursor"></span>`
              }
            }
          } catch {
            // Ignore malformed payloads.
          }
          currentEvent = "message"
          nlIndex = buffer.indexOf("\n\n")
        }
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        flushEvents()
      }
      // Final flush of any tail content.
      buffer += "\n\n"
      flushEvents()
      renderFinal()
    } catch (err) {
      const message = err instanceof DOMException && err.name === "AbortError"
        ? "The request timed out. Try again."
        : err instanceof Error
          ? err.message
          : "Network error."
      showError(message)
    } finally {
      inFlight = false
      submit.disabled = false
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const question = textarea.value.trim()
    if (!question) return
    textarea.value = ""
    submitQuestion(question)
  })
}

function setupAllAskPage() {
  document.querySelectorAll<HTMLElement>(".hmi-ask-page").forEach((root) => {
    if (root.dataset.hmiAskReady === "true") return
    root.dataset.hmiAskReady = "true"
    setupAskPage(root)
  })
}
