// Expose the actual scroll surface to keyboards and explain wide tables only
// when they overflow. Recheck after resizing or fonts finish loading.
document.addEventListener("nav", () => {
  const cleanups: Array<() => void> = []
  document.querySelectorAll<HTMLTableElement>(".wiki-content table").forEach((table, index) => {
    const region = table.closest<HTMLElement>(".hmi-table-scroll") ?? table.closest<HTMLElement>(".table-container")
    if (!region) return
    const hint = document.createElement("p")
    hint.className = "hmi-table-hint"
    hint.id = `table-scroll-hint-${index}`
    hint.textContent = "Swipe to see all columns, or focus the table and use the arrow keys."
    hint.hidden = true
    region.before(hint)
    const originalDescription = region.getAttribute("aria-describedby")
    const originalTabIndex = region.getAttribute("tabindex")
    region.setAttribute("role", "region")
    if (!region.hasAttribute("aria-label")) region.setAttribute("aria-label", "Scrollable table")
    const update = () => {
      const overflowing = region.scrollWidth > region.clientWidth + 1
      hint.hidden = !overflowing
      region.tabIndex = overflowing ? 0 : -1
      if (overflowing) region.setAttribute("aria-describedby", [originalDescription, hint.id].filter(Boolean).join(" "))
      else if (originalDescription) region.setAttribute("aria-describedby", originalDescription)
      else region.removeAttribute("aria-describedby")
    }
    const observer = new ResizeObserver(update)
    observer.observe(region)
    observer.observe(table)
    update()
    cleanups.push(() => {
      observer.disconnect()
      hint.remove()
      if (originalTabIndex === null) region.removeAttribute("tabindex")
      else region.setAttribute("tabindex", originalTabIndex)
      if (originalDescription === null) region.removeAttribute("aria-describedby")
      else region.setAttribute("aria-describedby", originalDescription)
    })
  })
  window.addCleanup(() => cleanups.forEach((cleanup) => cleanup()))
})
