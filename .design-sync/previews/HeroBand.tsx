// Illustrative compositions for design review — realistic HMI content that
// teaches the screen system, not wiki claims. Each export is one card cell.
// Source of the screen rules: quartz/components/HeroBand.tsx (the screen map).
import { HeroBand } from "hmi-design-system"

const INDEX = { label: "Index", href: "#/" }

// The signature screen — one page about one metal. Full snapshot column.
export const MetalProfile = () => (
  <HeroBand
    crumbs={[INDEX, { label: "Metals", href: "#/metals" }]}
    leaf="Lead (Pb)"
    title="Lead (Pb)"
    kind="Metal"
    dek="A cumulative toxicant with no established safe exposure threshold; the reference profile for lead across the food and supply-chain literature."
    author="Karen Pendergrass"
    orcid="0000-0002-2348-7259"
    updated="2026-08-09"
    rev="7"
    actions={[
      { label: "Cite this page", href: "#cite" },
      { label: "Version history", href: "#history" },
      { label: "Download PDF", href: "#pdf", solid: true },
    ]}
    snapshot={[
      { k: "Corpus sources on this metal", v: "1,284" },
      { k: "Ingredient profiles", v: "212" },
      { k: "Product categories", v: "34" },
      { k: "Regulations citing this", v: "63" },
    ]}
  />
)

// An index/directory screen — a page ABOUT a collection. The load-bearing rule:
// /metals wears "Reference layer", NOT "Metal", and runs full width (no snapshot).
export const IndexScreen = () => (
  <HeroBand
    crumbs={[INDEX, { label: "Metals", href: "#/metals" }]}
    leaf="All metals"
    title="Metals"
    kind="Reference layer"
    dek="Every metal the index profiles, from lead and cadmium to nickel, tin and aluminium."
  />
)

// A regulation instrument — snapshot carries provenance, not per-page counts.
export const Regulation = () => (
  <HeroBand
    crumbs={[INDEX, { label: "Regulations", href: "#/regulations" }]}
    leaf="EU 2023/915"
    title="EU 2023/915"
    kind="Regulation"
    dek="Commission Regulation on maximum levels for certain contaminants in food, consolidating and replacing Regulation 1881/2006."
    updated="2026-07-31"
    snapshot={[
      { k: "Referenced by", v: "48 pages" },
      { k: "Jurisdiction", v: "European Union" },
      { k: "Effective", v: "2023-05-25" },
    ]}
  />
)

// A source record — one study in the corpus. Snapshot = its corpus footprint.
export const SourceRecord = () => (
  <HeroBand
    crumbs={[INDEX, { label: "Sources", href: "#/sources" }]}
    leaf="Occurrence survey"
    title="Lead & cadmium in 230 infant formulas"
    kind="Source"
    dek="Occurrence survey of lead and cadmium across cow-milk-based and soy-based infant formulas."
    snapshot={[
      { k: "Cited by", v: "17 pages" },
      { k: "Metals measured", v: "2" },
      { k: "Evidence tier", v: "B" },
      { k: "Year", v: "2021" },
    ]}
  />
)
