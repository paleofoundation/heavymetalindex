// The scannable "what this page covers" registry. Realistic metal + product content.
import { GridOfRecords } from "hmi-design-system"

export const MetalFacts = () => (
  <GridOfRecords
    columns={4}
    records={[
      { k: "Analyte", v: "Lead (Pb)" },
      { k: "Toxicity tier", v: "Tier 1 — no safe threshold" },
      { k: "Key matrices", v: "Cereals, root vegetables, cocoa" },
      { k: "Strictest ML", v: "EU 2023/915" },
      { k: "Species tracked", v: "Total lead" },
      { k: "Corpus sources", v: "1,284" },
      { k: "Regulations citing", v: "63" },
      { k: "Last reviewed", v: "2026-08-09" },
    ]}
  />
)

export const TwoUp = () => (
  <GridOfRecords
    columns={2}
    records={[
      { k: "Product category", v: "Infant rice cereal" },
      { k: "Primary metal", v: "Inorganic arsenic" },
      { k: "Vulnerable population", v: "Infants 6-12 mo" },
      { k: "Evidence status", v: "Populated" },
    ]}
  />
)
