export {} // module scope — keeps locals out of the global namespace

// Wires the discreet "Share" control in the right rail (Rail.tsx). The button is
// a popup-menu trigger (aria-haspopup="menu") offering Copy link, X, LinkedIn,
// Reddit, and Email — the same discreet share affordance microbiomemedicine.com
// uses, placed in the rail. Markup is rendered server-side by Quartz.Rail; this
// only handles the toggle, clipboard, and social hrefs (built at runtime from the
// live URL so the target is always correct, canonical or not).

async function hmiShareCopy(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
    const ta = document.createElement("textarea")
    ta.value = text
    ta.setAttribute("readonly", "")
    ta.style.position = "fixed"
    ta.style.left = "-9999px"
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand("copy")
    ta.remove()
    return ok
  } catch {
    return false
  }
}

function hmiShareCloseMenu(root: HTMLElement) {
  const toggle = root.querySelector("[data-hmi-share-toggle]") as HTMLButtonElement | null
  const menu = root.querySelector("[data-hmi-share-menu]") as HTMLElement | null
  if (menu) menu.hidden = true
  if (toggle) toggle.setAttribute("aria-expanded", "false")
}

function hmiShareCloseAll(except?: HTMLElement) {
  document.querySelectorAll<HTMLElement>("[data-hmi-share]").forEach((root) => {
    if (root !== except) hmiShareCloseMenu(root)
  })
}

function hmiShareSetup(root: HTMLElement) {
  if (root.dataset.hmiShareReady === "true") return
  root.dataset.hmiShareReady = "true"

  const toggle = root.querySelector("[data-hmi-share-toggle]") as HTMLButtonElement | null
  const menu = root.querySelector("[data-hmi-share-menu]") as HTMLElement | null
  if (!toggle || !menu) return
  const status = root.querySelector("[data-hmi-share-status]") as HTMLElement | null

  const url = location.href
  const title = document.title
  const enc = encodeURIComponent

  const x = root.querySelector("[data-hmi-share-x]") as HTMLAnchorElement | null
  const li = root.querySelector("[data-hmi-share-linkedin]") as HTMLAnchorElement | null
  const reddit = root.querySelector("[data-hmi-share-reddit]") as HTMLAnchorElement | null
  const email = root.querySelector("[data-hmi-share-email]") as HTMLAnchorElement | null
  if (x) x.href = `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`
  if (li) li.href = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`
  if (reddit) reddit.href = `https://www.reddit.com/submit?url=${enc(url)}&title=${enc(title)}`
  if (email) email.href = `mailto:?subject=${enc(title)}&body=${enc(url + "\n\n")}`

  toggle.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    const willOpen = menu.hidden
    hmiShareCloseAll(root)
    menu.hidden = !willOpen
    toggle.setAttribute("aria-expanded", String(willOpen))
  })

  const copy = root.querySelector("[data-hmi-share-copy]") as HTMLButtonElement | null
  copy?.addEventListener("click", async () => {
    const ok = await hmiShareCopy(url)
    if (status) {
      status.textContent = ok ? "Link copied." : "Copy failed — copy from the address bar."
      window.setTimeout(() => {
        if (status) status.textContent = ""
      }, 2500)
    }
    if (ok) window.setTimeout(() => hmiShareCloseMenu(root), 600)
  })

  menu
    .querySelectorAll("a.share-item")
    .forEach((a) => a.addEventListener("click", () => hmiShareCloseMenu(root)))
}

function hmiShareSetupAll() {
  document.querySelectorAll<HTMLElement>("[data-hmi-share]").forEach(hmiShareSetup)
}

// Document-level dismissers are registered once (module scope), not per rail, so
// they do not accumulate across Quartz SPA navigations.
document.addEventListener("click", (e) => {
  const t = e.target as Node
  document.querySelectorAll<HTMLElement>("[data-hmi-share]").forEach((root) => {
    if (!root.contains(t)) hmiShareCloseMenu(root)
  })
})
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hmiShareCloseAll()
})
document.addEventListener("nav", hmiShareSetupAll)
queueMicrotask(hmiShareSetupAll)
