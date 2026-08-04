// Converts in-article source-page citation links (a[data-slug^="sources/"]) into
// Examine-style superscript bracketed numbers ([1]) with a hover card, and strips
// the parentheses the prose wraps them in — "...claim (cite)." → "...claim.[1]",
// "(cite, cite)" → "[1], [2]". Render-time only; the build/content is untouched.
function applyCiteSuperscripts() {
  const content = document.querySelector(".wiki-content")
  if (!content) return
  // Landing surfaces carry no citation apparatus; their links to /sources are
  // navigation, not citations. Without this the homepage feature-card "Sources"
  // link is eaten and rendered as a bare "[1]".
  if ((document.body.dataset.slug ?? "") === "index") return

  // The trailing apparatus — References, Sources, Update history — is not prose.
  // Its source links are the reference list and the corpus table, not citations,
  // and must be left alone. They were meant to be excluded by
  // a.closest("#references, #sources, ...") — but those ids sit on the HEADINGS,
  // and the lists are SIBLINGS of the headings, not descendants, so closest()
  // never matched and every reference entry's own source link was being
  // converted into a stray trailing superscript. Exclude by DOCUMENT POSITION
  // instead: find the first apparatus heading and skip any citation at or after
  // it. This also lets the reference list make the title itself the source link
  // without the script eating it.
  const apparatus = Array.from(
    content.querySelectorAll(
      "h2#references, h2#sources, h2[id='update-history'], h2[id='page-history']",
    ),
  ).sort((a, b) =>
    a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
  )[0]

  // 1) Convert each source link to a superscript citation.
  const links = content.querySelectorAll('a[data-slug^="sources/"]')
  const numBySlug = new Map<string, number>()
  let n = 0
  links.forEach((el) => {
    const a = el as HTMLAnchorElement
    if (a.closest("sup.cite")) return
    if (a.closest("table")) return
    if (apparatus && apparatus.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING) return
    const slug = a.getAttribute("data-slug") || ""
    let num = numBySlug.get(slug)
    if (num === undefined) {
      num = ++n
      numBySlug.set(slug, num)
    }
    const href = a.getAttribute("href") || "#"
    const orig = (a.textContent || "").trim()
    // Metadata stamped at build time by the SourceCiteMeta transformer.
    const dAuthors = (a.getAttribute("data-authors") || "").trim()
    const dTitle = (a.getAttribute("data-title") || "").trim()
    const dJournal = (a.getAttribute("data-journal") || "").trim()
    const dReview = (a.getAttribute("data-review-link") || "").trim()

    const sup = document.createElement("sup")
    sup.className = "cite"
    const link = document.createElement("a")
    link.href = href
    link.textContent = String(num)
    const card = document.createElement("span")
    card.className = "cite-card"

    if (dTitle || dAuthors) {
      // microbiomemedicine-style card: tinted header (authors + hyperlinked
      // title), then journal/body + a "Read source →" button.
      const head = document.createElement("span")
      head.className = "cite-card-head"
      if (dAuthors) {
        const au = document.createElement("span")
        au.className = "cite-card-authors"
        au.textContent = dAuthors
        head.appendChild(au)
      }
      const titleEl = document.createElement("a")
      titleEl.className = "cite-card-title"
      titleEl.href = href
      titleEl.textContent = dTitle || orig
      head.appendChild(titleEl)
      card.appendChild(head)

      const body = document.createElement("span")
      body.className = "cite-card-body"
      if (dJournal) {
        const j = document.createElement("span")
        j.className = "cite-card-journal"
        j.textContent = dJournal
        body.appendChild(j)
      }
      const review = document.createElement("a")
      review.className = "cite-card-review"
      review.href = dReview || href
      if (dReview) {
        review.target = "_blank"
        review.rel = "noopener"
      }
      review.textContent = "Read source →"
      body.appendChild(review)
      card.appendChild(body)
    } else {
      // Fallback (no stamped metadata): link text + "View source".
      const au = document.createElement("span")
      au.className = "au"
      au.textContent = orig
      const go = document.createElement("a")
      go.className = "go"
      go.href = href
      go.textContent = "View source →"
      card.appendChild(au)
      card.appendChild(go)
    }
    sup.appendChild(link)
    sup.appendChild(card)
    a.replaceWith(sup)
  })

  // 2) Strip parentheses that wrap ONLY a citation (or comma-separated run).
  const sups = Array.from(content.querySelectorAll("sup.cite"))
  const seen = new Set<Node>()
  sups.forEach((sup) => {
    if (seen.has(sup)) return
    // Extend the run over ", " / " " separators followed by another cite.
    let end: Element = sup
    let node = sup.nextSibling
    while (node) {
      if (node.nodeType === 3 && /^[\s,]+$/.test(node.textContent || "")) {
        const nxt = node.nextSibling as Element | null
        if (nxt && nxt.nodeType === 1 && (nxt as Element).matches?.("sup.cite")) {
          seen.add(nxt)
          end = nxt
          node = nxt.nextSibling
          continue
        }
      }
      break
    }
    const before = sup.previousSibling
    const after = end.nextSibling
    if (
      before &&
      before.nodeType === 3 &&
      after &&
      after.nodeType === 3 &&
      /\(\s*$/.test(before.textContent || "") &&
      /^\s*\)/.test(after.textContent || "")
    ) {
      before.textContent = (before.textContent || "").replace(/\s*\(\s*$/, "")
      let rest = (after.textContent || "").replace(/^\s*\)/, "")
      const punct = rest.match(/^\s*([.,;:!?])/)
      if (punct) {
        // sentence/clause punctuation: glue it before the citation → "claim.[1]"
        before.textContent = (before.textContent || "") + punct[1]
        rest = rest.slice(punct[0].length)
      } else {
        // mid-sentence: keep a space before the citation → "claim [1] word"
        before.textContent = (before.textContent || "") + " "
      }
      after.textContent = rest
    }
  })
}

document.addEventListener("nav", applyCiteSuperscripts)
