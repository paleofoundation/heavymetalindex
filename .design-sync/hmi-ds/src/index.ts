// Heavy Metal Index v3 design system — component barrel.
//
// These are thin React wrappers that emit the EXACT v3 markup + class names of
// the live Quartz components (quartz/components/*.tsx) so the real compiled v3
// stylesheet (quartz/styles → public/index.css, shipped as the DS stylesheet)
// styles them identically. A design built with these maps back onto Quartz by
// class name — the forward-direction "port the proof" workflow.
//
// Every component here is a LIVE, STYLED v3 surface. Deleted/unmounted Quartz
// components whose CSS is not in the shipping stylesheet (EvidenceHeader,
// CiteThisPage) are deliberately excluded — shipping them unstyled would
// mislead the design agent. Source of truth per component is in its file header.

// ── Chrome ──────────────────────────────────────────────────────────────────
export { TopNav } from "./TopNav"
export type { TopNavProps, TopNavTrigger, TopNavAction } from "./TopNav"

export { HeroBand } from "./HeroBand"
export type { HeroBandProps, Crumb, HeroSnapshotRow, HeroAction } from "./HeroBand"

export { Footer } from "./Footer"
export type { FooterProps, FooterSection, FooterLink } from "./Footer"

// ── Evidence & domain panels ────────────────────────────────────────────────
export { SourceCitationPanel } from "./SourceCitationPanel"
export type { SourceCitationPanelProps, SourceFact } from "./SourceCitationPanel"

export { ProductEvidenceSummary } from "./ProductEvidenceSummary"
export type { ProductEvidenceSummaryProps, ProductFact } from "./ProductEvidenceSummary"

export { Corrections } from "./Corrections"
export type { CorrectionsProps, CorrectionField } from "./Corrections"

export { RelatedPages } from "./RelatedPages"
export type { RelatedPagesProps, RelatedLink } from "./RelatedPages"

// ── Content primitives ──────────────────────────────────────────────────────
export { GridOfRecords } from "./GridOfRecords"
export type { GridOfRecordsProps, GridRecord } from "./GridOfRecords"

export { KeyValueList } from "./KeyValueList"
export type { KeyValueListProps, KeyValueRow } from "./KeyValueList"

export { CaveatCallout } from "./CaveatCallout"
export type { CaveatCalloutProps } from "./CaveatCallout"

export { DataTable } from "./DataTable"
export type { DataTableProps } from "./DataTable"

export { ChipGroup } from "./ChipGroup"
export type { ChipGroupProps } from "./ChipGroup"
