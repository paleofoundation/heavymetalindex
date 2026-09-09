# Inline search and Ask coverage repair — 2026-09-09

The header and homepage now accept typing directly and offer a compact dropdown of public pages. There is no modal, backdrop blur, separate typing location, or preview fetch. Title, alias, and path matches precede page-text matches; results identify the page family. Both fields share one prepared index and maintain independent selection state. Keyboard arrows/Enter, Escape, outside-click dismissal, IME entry, and homepage `?q=` arrivals are supported. Search listeners bind before index preparation and survive client-side navigation. The homepage's existing authored HTML is upgraded in place; the header emits its real input server-side.

Ask previously rejected “olive oil” at a manually maintained domain gate and retrieved only a short browser digest. It now recognizes published topic names and aliases and retrieves complete compiled page text from a dedicated build artifact bundled with the same function deployment. The browser still downloads only its lightweight index. Private, pending, retired and noindex records are excluded from Ask. A failed retrieval describes a matching failure rather than asserting that the entire Index lacks coverage.

The olive-oil product page's obsolete blanket absence language is corrected and points to its ingredient synthesis. Obsolete fixed source counts in ingredient prose are removed. Existing values, evidence, frontmatter, and generated tables were not changed. The product table's structured-coverage gap is separately recorded as OI-20260909-olive-oil-product-summary-coverage.

Verification:

- Complete Quartz build: 4,227 Markdown inputs, 4,947 outputs.
- TypeScript check passes. Final regression suite: 338 passed; the sole unrelated OpenAlex search smoke test returned HTTP 503 in both the run and a separate retry. All Ask, emitter and autocomplete tests pass. The earlier full run passed all tests before the final keyboard and bundle-loading refinements.
- Actual Ask artifact: 4,125 eligible pages, 44,830,514 bytes, no pending/private/noindex/retired eligibility violations.
- Actual handler with network disabled and no model key: olive-oil overview and processing/packaging queries return their published ingredient, product and study citations; unrelated programming remains outside scope. Bundled artifact loads without a network request.
- Browser: hero typing stays focused with an unblurred page; `oli` ranks Olive Oil first; Enter opens the ingredient page; nav suggestions work after that client-side transition; homepage `?q=olive oil` prefills suggestions.
- 390px browser check: focused nav field and suggestions remain within viewport margins. Escape closes and stays closed after pending input; new input invalidates old keyboard selections.

No query was posted to social media and no raw-source or standards ingest was performed. The ordinary production deploy regenerates the indexes, so newly published pages automatically enter both discovery paths without adding a hand-maintained food-name list.
