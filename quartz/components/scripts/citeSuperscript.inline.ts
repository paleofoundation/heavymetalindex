// Converts in-article source-page citation links (a[data-slug^="sources/"]) into
// Examine-style superscript pill numbers with a hover card — matching the proof.
// Render-time only: the build/content is untouched; this restyles what shipped.
function applyCiteSuperscripts() {
  const content = document.querySelector(".wiki-content")
  if (!content) return
  const links = content.querySelectorAll('a[data-slug^="sources/"]')
  const numBySlug = new Map<string, number>()
  let n = 0
  links.forEach((el) => {
    const a = el as HTMLAnchorElement
    if (a.closest("sup.cite")) return // already converted
    // Skip links inside the source-legend / references table at the page foot.
    if (a.closest("table") && a.closest("#sources, [id='page-history']")) return
    const slug = a.getAttribute("data-slug") || ""
    let num = numBySlug.get(slug)
    if (num === undefined) {
      num = ++n
      numBySlug.set(slug, num)
    }
    const href = a.getAttribute("href") || "#"
    const orig = (a.textContent || "").trim()

    const sup = document.createElement("sup")
    sup.className = "cite"
    const link = document.createElement("a")
    link.href = href
    link.textContent = String(num)
    const card = document.createElement("span")
    card.className = "cite-card"
    const au = document.createElement("span")
    au.className = "au"
    au.textContent = orig
    const go = document.createElement("a")
    go.className = "go"
    go.href = href
    go.textContent = "View source →"
    card.appendChild(au)
    card.appendChild(go)
    sup.appendChild(link)
    sup.appendChild(card)
    a.replaceWith(sup)
  })
}

document.addEventListener("nav", applyCiteSuperscripts)
