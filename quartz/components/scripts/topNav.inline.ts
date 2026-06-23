// Mobile burger toggle for the global TopNav. On narrow viewports the taxonomy
// + controls collapse behind a burger; this toggles the `open` class and the
// aria-expanded state. Re-binds on every SPA `nav` event and cleans up after
// itself via window.addCleanup so it does not leak listeners across navigations.

function setupTopNav() {
  const burger = document.querySelector<HTMLButtonElement>(".hmi-topnav-burger")
  const menu = document.getElementById("hmi-topnav-menu")
  if (!burger || !menu) return

  const close = () => {
    menu.classList.remove("open")
    burger.setAttribute("aria-expanded", "false")
  }

  const toggle = (e: Event) => {
    e.stopPropagation()
    const isOpen = menu.classList.toggle("open")
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false")
  }

  // Close when a menu link is followed (SPA nav fires its own re-setup anyway).
  const onMenuClick = (e: Event) => {
    const target = e.target as HTMLElement
    if (target.closest("a")) close()
  }

  // Close on outside click so the open menu does not trap the page.
  const onDocClick = (e: Event) => {
    const target = e.target as HTMLElement
    if (!target.closest(".hmi-topnav-menu") && !target.closest(".hmi-topnav-burger")) close()
  }

  burger.addEventListener("click", toggle)
  menu.addEventListener("click", onMenuClick)
  document.addEventListener("click", onDocClick)

  window.addCleanup(() => {
    burger.removeEventListener("click", toggle)
    menu.removeEventListener("click", onMenuClick)
    document.removeEventListener("click", onDocClick)
  })
}

document.addEventListener("nav", setupTopNav)
