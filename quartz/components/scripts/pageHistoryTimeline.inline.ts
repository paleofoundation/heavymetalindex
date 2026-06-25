// Transforms the generated "Page history" table (Commit | Date | Description)
// into a burgundy vertical timeline (Examine-style "Update History") so changes
// are easy to scan. Render-time only: the build/content is untouched and the
// generator (build-page-changelogs.mjs) keeps emitting the table; this rebuilds
// it as <ol class="hist-timeline"> styled by proof-design.scss.

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function fmtDate(iso: string): string {
  const m = iso.trim().match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (!m) return iso.trim()
  const y = +m[1], mo = +m[2], d = +m[3]
  if (mo < 1 || mo > 12) return iso.trim()
  return `${MONTHS[mo - 1]} ${d}, ${y}`
}

// Pull the conventional-commit type ("fix(scope): subject" -> {fix, subject}).
function splitType(desc: string): { type: string; title: string } {
  const m = desc.match(/^([a-z]+)(?:\([^)]*\))?:\s*(.*)$/i)
  if (m && m[2]) return { type: m[1].toLowerCase(), title: m[2] }
  return { type: "", title: desc }
}

function buildPageHistoryTimeline() {
  const h = document.getElementById("page-history")
  if (!h) return

  // find the table after the heading (skip the intro paragraph)
  let el: Element | null = h.nextElementSibling
  let container: Element | null = null
  while (el) {
    if (el.tagName === "TABLE" || el.classList?.contains("table-container")) {
      container = el
      break
    }
    if (el.tagName === "H1" || el.tagName === "H2") break
    el = el.nextElementSibling
  }
  if (!container) return
  const table = container.tagName === "TABLE" ? container : container.querySelector("table")
  if (!table) return
  const rows = Array.from(table.querySelectorAll("tbody tr"))
  if (!rows.length) return

  const ol = document.createElement("ol")
  ol.className = "hist-timeline"

  rows.forEach((tr, i) => {
    const cells = Array.from(tr.querySelectorAll("td"))
    if (cells.length < 3) return
    const commitA = cells[0].querySelector("a")
    const date = (cells[1].textContent || "").trim()
    const { type, title } = splitType((cells[2].textContent || "").trim())

    const li = document.createElement("li")
    li.className = i === 0 ? "hist-item hist-item-latest" : "hist-item"

    const meta = document.createElement("div")
    meta.className = "hist-meta"
    const dateEl = document.createElement("span")
    dateEl.className = "hist-date"
    dateEl.textContent = fmtDate(date)
    meta.appendChild(dateEl)
    if (type) {
      const badge = document.createElement("span")
      badge.className = "hist-badge"
      badge.textContent = type
      meta.appendChild(badge)
    }

    const titleEl = document.createElement("div")
    titleEl.className = "hist-title"
    titleEl.textContent = title

    li.appendChild(meta)
    li.appendChild(titleEl)

    if (commitA) {
      const link = document.createElement("a")
      link.className = "hist-commit"
      link.href = commitA.getAttribute("href") || "#"
      link.target = "_blank"
      link.rel = "noopener"
      link.textContent = (commitA.textContent || "commit").trim()
      li.appendChild(link)
    }
    ol.appendChild(li)
  })

  if (ol.children.length) container.replaceWith(ol)
}

document.addEventListener("nav", buildPageHistoryTimeline)
