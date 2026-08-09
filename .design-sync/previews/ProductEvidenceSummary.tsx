// Illustrative product-category brief — realistic HMI content. The standards
// note is the real firewall text (public pages never publish HMT&C thresholds).
import { ProductEvidenceSummary } from "hmi-design-system"

export const Default = () => (
  <ProductEvidenceSummary
    categoryLabel="Infant cereals"
    facts={[
      { label: "Evidence status", value: "Populated" },
      { label: "Source coverage", value: "84 cited sources" },
      { label: "Population", value: "Infants 6-12 mo" },
      { label: "Updated", value: "Aug 9, 2026" },
    ]}
    metals={["Inorganic arsenic", "Cadmium", "Lead"]}
    ingredients={["Rice flour", "Brown rice", "Oat flour"]}
    shortcuts={[
      { label: "Source evidence", href: "#sources" },
      { label: "Measured values", href: "#values" },
      { label: "Distribution context", href: "#distribution" },
    ]}
  />
)
