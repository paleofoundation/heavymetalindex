// Single source of truth for the global top-navigation bar (TopNav.tsx).
//
// Two link groups render in the white full-width bar:
//   - `taxonomyLinks`  → the primary corpus taxonomy (Metals first, per the
//     metals-first rollout decision). These are the load-bearing reference
//     destinations a regulator / brand-legal reader navigates by.
//   - `utilityLinks`   → secondary destinations (About). Search and "Ask the
//     Index" are NOT in this list: they are interactive components mounted by
//     TopNav.tsx directly (Search has its own modal + index, AskIndex its own
//     dialog), so they cannot be expressed as plain hrefs here.
//
// Hrefs are root-relative SIMPLE slugs (no leading slash, no extension).
// TopNav.tsx resolves each one against the current page with
// `resolveRelative(slug, href)` so the bar works at every directory depth and
// under a non-root base path. Keep these as bare slugs; do NOT hard-code "/".
//
// To add / reorder taxonomy entries, edit this file only. TopNav.tsx maps over
// these arrays verbatim, so there is no second place to update.

import { SimpleSlug } from "../util/path"

export interface TopNavLink {
  /** Visible label in the bar. */
  label: string
  /** Root-relative simple slug, e.g. "metals" or "regulations". */
  slug: SimpleSlug
  /**
   * When true, this entry is considered "active" if the current page's slug
   * starts with `${slug}/` (section match) in addition to an exact match. Used
   * for the taxonomy hubs so e.g. `metals/lead` highlights "Metals".
   */
  matchPrefix?: boolean
}

// Primary taxonomy — the full menu carried on the live heavymetalindex.com
// header, in the live order. Keep this in sync with the deployed site.
export const taxonomyLinks: TopNavLink[] = [
  { label: "Products", slug: "products" as SimpleSlug, matchPrefix: true },
  { label: "Ingredients", slug: "ingredients" as SimpleSlug, matchPrefix: true },
  { label: "Metals", slug: "metals" as SimpleSlug, matchPrefix: true },
  { label: "Mitigation", slug: "mitigation" as SimpleSlug, matchPrefix: true },
  { label: "Supply chain", slug: "supply-chain" as SimpleSlug, matchPrefix: true },
  { label: "Regulations", slug: "regulations" as SimpleSlug, matchPrefix: true },
  { label: "Synthesis", slug: "synthesis" as SimpleSlug, matchPrefix: true },
  { label: "Sources", slug: "sources" as SimpleSlug, matchPrefix: true },
]

// Secondary destinations rendered to the right of the interactive controls.
export const utilityLinks: TopNavLink[] = [
  { label: "About", slug: "about" as SimpleSlug },
]
