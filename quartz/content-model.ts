// Plain JavaScript on purpose: the node lint imports this module without a TS loader.
// @ts-expect-error no declaration file for the rail module; tools/lib/canonical-page-rails.d.ts documents it.
import { HIDDEN_HEADINGS, universalParents } from "../tools/lib/canonical-page-rails.mjs"

// Single source of truth for the left-sidebar (Snav) information architecture —
// the "rules about where things belong" borrowed from microbiomemedicine.
//
// Keyed by frontmatter `type:`. Each type declares an ordered list of PARENT
// sidebar sections; each parent's children are matched against the page's H2
// heading text by ROLE (regex), so heading drift ("What is lead?" vs "Overview",
// "Microbiome context", "Microbiome effects", and "Gut microbiome and …") still maps to the same parent.
// This mirrors the proven role-matcher pattern in
// tools/evidence/lib/ingredient-sections.mjs, and the parent taxonomy is derived
// from the mandatory-sections system + the empirical section-frequency analysis
// (ingredient 8 sections ~89-100%, product 10 sections ~74-81%, regulator 6 at
// 100%). Snav.tsx consumes this; esbuild bundles it into the SSR worker.

export type SectionRule = { id: string; patterns: RegExp[] }

export type ParentRule = {
  id: string
  label: string
  children: SectionRule[]
  // A single promoted section rendered as its own top-level header (no sub-list),
  // e.g. the metal "Vulnerable Populations" or every flat regulator section.
  direct?: boolean
  // Expanded on load (only "Overview"), giving the parents-only "simplified" view.
  defaultOpen?: boolean
}

export type LabelOverride = { pattern: RegExp; label: (ctx: { pageTitle: string }) => string }

export type TypeModel = {
  type: string
  slugPrefix?: string
  parents: ParentRule[]
  hide: RegExp[]
  labelOverrides?: LabelOverride[]
  // Headings that match no parent are filed here instead of a second "Details" fold.
  absorbUngroupedInto?: string
}

// Apparatus reached via the icon utility footer — hidden from every rail.
const HIDE_BASE: RegExp[] = [/^sources$/i, /^page history$/i, /^status$/i, /further detail/i]

export const CONTENT_MODEL: { types: TypeModel[] } = {
  types: [
    // ---------------------------------------------------------------- METAL
    {
      type: "metal",
      slugPrefix: "metals/",
      hide: [...HIDE_BASE, /app-?\s?layer/i, /^planned sections$/i, /^metal pages$/i],
      labelOverrides: [
        // A bare "Overview" H2 reads as the lede question.
        { pattern: /^overview$/i, label: ({ pageTitle }) => `What is ${pageTitle}?` },
      ],
      parents: [
        {
          id: "overview",
          label: "Overview",
          defaultOpen: true,
          children: [
            { id: "whatis", patterns: [/^what is .+$/i, /^overview$/i] },
            { id: "ataglance", patterns: [/^at a glance$/i] },
            { id: "tox", patterns: [/^toxicology$/i] },
            { id: "routes", patterns: [/exposure routes$/i] },
            { id: "food", patterns: [/^food sources$/i] },
            { id: "reglimits", patterns: [/^regulatory limits$/i] },
            { id: "testing", patterns: [/^testing$/i] },
            { id: "microbiome", patterns: [/^microbiome(?: (?:context|effects))?$|^gut microbiome and /i] },
            { id: "history", patterns: [/^historical context/i] },
          ],
        },
        { id: "vuln", label: "Populations", direct: true, children: [{ id: "vuln", patterns: [/^vulnerable populations$/i] }] },
        { id: "open", label: "Questions", direct: true, children: [{ id: "open", patterns: [/^open questions$/i] }] },
        { id: "faq", label: "FAQs", direct: true, children: [{ id: "faq", patterns: [/^(frequently asked questions|faqs?)$/i] }] },
      ],
    },
    // --------------------------------------- INGREDIENT + PRODUCT (nine rails)
    // Rice is the reference. Every ingredient and product page uses the same
    // nine labels, in this order: Overview, Contamination, Mitigation, Details,
    // Review, FAQs, References, Sources, Updates. Role headings stay specific;
    // tools/lib/canonical-page-rails.mjs maps them onto these parents.
    {
      type: "ingredient",
      slugPrefix: "ingredients/",
      hide: [...HIDE_BASE, ...HIDDEN_HEADINGS],
      absorbUngroupedInto: "details",
      parents: universalParents(),
    },
    {
      type: "product-category",
      slugPrefix: "products/",
      hide: [...HIDE_BASE, ...HIDDEN_HEADINGS],
      absorbUngroupedInto: "details",
      parents: universalParents(),
    },
    // ----------------------------------------------- REGULATOR (flat, no nesting)
    {
      type: "regulator",
      slugPrefix: "regulators/",
      hide: [...HIDE_BASE, /^references$/i],
      parents: [
        { id: "quickread", label: "Summary", direct: true, children: [{ id: "quickread", patterns: [/quick read/i] }] },
        { id: "mandate", label: "Mandate", direct: true, children: [{ id: "mandate", patterns: [/mandate/i] }] },
        { id: "positions", label: "Positions", direct: true, children: [{ id: "positions", patterns: [/positions across metals/i] }] },
        { id: "diverges", label: "Differences", direct: true, children: [{ id: "diverges", patterns: [/where it diverges/i, /diverge/i] }] },
        { id: "updatelog", label: "Updates", direct: true, children: [{ id: "updatelog", patterns: [/update log/i] }] },
        { id: "keydocs", label: "Documents", direct: true, children: [{ id: "keydocs", patterns: [/key documents/i] }] },
      ],
    },
    // ------------------------------------------------ MITIGATION (index)
    // One "Overview" parent: the intro is the parent target, and the directory's
    // orientation sections collapse underneath it (hidden until the toggle opens).
    {
      type: "mitigation-index",
      slugPrefix: "mitigation/",
      hide: [...HIDE_BASE],
      parents: [
        {
          id: "overview",
          label: "Overview",
          children: [
            { id: "overview", patterns: [/^overview$/i] },
            { id: "taxonomy", patterns: [/^taxonomy$/i] },
            { id: "why", patterns: [/why .*matter/i] },
            { id: "current", patterns: [/current state/i] },
            { id: "xref", patterns: [/^cross-?references$/i] },
          ],
        },
      ],
    },
    // ------------------------------------------------ SYNTHESIS (index)
    // Same shape: Overview parent, with the index's own orientation sections
    // (findings table, promotion criteria, cadmium note) collapsed underneath.
    {
      type: "synthesis-index",
      slugPrefix: "synthesis",
      hide: [...HIDE_BASE],
      parents: [
        {
          id: "overview",
          label: "Overview",
          children: [
            { id: "overview", patterns: [/^overview$/i] },
            { id: "findings", patterns: [/synthesis findings pages/i] },
            { id: "promote", patterns: [/when to promote/i] },
            { id: "cadmium", patterns: [/cadmium synthesis/i] },
          ],
        },
      ],
    },
  ],
}

// Resolve the model for a page. Returns undefined when the type is unknown or the
// slug guard fails — Snav then falls back to its generic heading-derived rail.
export function modelForType(type: string | undefined, slug: string, contract?: string): TypeModel | undefined {
  // Ingredient and product rails no longer branch on the contract version.
  // The argument stays so existing callers do not change shape.
  void contract
  if (!type) return undefined
  const m = CONTENT_MODEL.types.find((t) => t.type === type)
  if (!m) return undefined
  if (m.slugPrefix && !slug.startsWith(m.slugPrefix)) return undefined
  return m
}
