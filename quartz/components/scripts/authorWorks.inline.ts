// Reorders the public-works lists on the author profile. The markup stays
// readable without this script; the select only changes row order.
document.addEventListener("nav", () => {
  document.querySelectorAll<HTMLElement>("[data-author-works]").forEach((root) => {
    const select = root.querySelector<HTMLSelectElement>("[data-author-works-sort]");
    if (!select) return;
    const apply = () => {
      const mode = select.value;
      root.querySelectorAll<HTMLOListElement>("ol.author-works").forEach((ol) => {
        const items = [...ol.querySelectorAll<HTMLLIElement>(":scope > li")];
        items.sort((a, b) => {
          const title = (a.dataset.title || "").localeCompare(b.dataset.title || "", "en", {
            sensitivity: "base",
          });
          const year = (b.dataset.year || "").localeCompare(a.dataset.year || "", "en");
          if (mode === "title") return title || year;
          if (mode === "venue") {
            const venueA = a.dataset.venue || "";
            const venueB = b.dataset.venue || "";
            if (!venueA !== !venueB) return venueA ? -1 : 1;
            const venue = venueA.localeCompare(venueB, "en", { sensitivity: "base" });
            return venue || title;
          }
          return year || title;
        });
        for (const item of items) ol.appendChild(item);
      });
    };
    select.addEventListener("change", apply);
    window.addCleanup(() => select.removeEventListener("change", apply));
  });
});
