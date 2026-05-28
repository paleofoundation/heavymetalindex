export {} // module scope — keeps locals out of the global namespace

// Wires the "Cite this page" footer block on every public Heavy Metal Index
// page. The block reveals (a) the canonical citation, (b) a download link to
// /api/evidence-packet?slug=<slug>&download=1 (brand-legal / regulatory
// exhibit), and (c) a "Copy citation" button.
//
// Markup is rendered server-side by Quartz.CiteThisPage (TSX); this script
// only handles the toggle + clipboard interaction.

const READY_ATTR = "data-hmi-cite-ready"

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.setAttribute("readonly", "")
    textarea.style.position = "fixed"
    textarea.style.left = "-9999px"
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand("copy")
    textarea.remove()
    return ok
  } catch {
    return false
  }
}

function bind(root: HTMLElement) {
  if (root.dataset.hmiCiteReady === "true") return
  root.dataset.hmiCiteReady = "true"

  const toggle = root.querySelector("[data-hmi-cite-toggle]") as HTMLButtonElement | null
  const detail = root.querySelector("[data-hmi-cite-detail]") as HTMLElement | null
  const copyButton = root.querySelector("[data-hmi-cite-copy]") as HTMLButtonElement | null
  const citationText = root.querySelector("[data-hmi-cite-text]") as HTMLElement | null
  const copyStatus = root.querySelector("[data-hmi-cite-copy-status]") as HTMLElement | null

  if (toggle && detail) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true"
      toggle.setAttribute("aria-expanded", String(!expanded))
      detail.hidden = expanded
    })
  }

  if (copyButton && citationText) {
    copyButton.addEventListener("click", async () => {
      const text = citationText.innerText.trim()
      const ok = await copyText(text)
      if (copyStatus) {
        copyStatus.textContent = ok ? "Copied." : "Copy failed — select and copy manually."
        copyStatus.dataset.state = ok ? "ok" : "error"
        setTimeout(() => {
          copyStatus.textContent = ""
          delete copyStatus.dataset.state
        }, 3000)
      }
    })
  }
}

function setupAll() {
  document.querySelectorAll<HTMLElement>(`.hmi-cite-page:not([${READY_ATTR}=true])`).forEach(bind)
}

document.addEventListener("nav", setupAll)
queueMicrotask(setupAll)
