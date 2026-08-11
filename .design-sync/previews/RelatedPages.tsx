// The in-body "See also" band on three page types — each a flat, wrap-flowed
// list of lateral links (metals, ingredients, products, regulations). Source of
// the graph rules: quartz/components/RelatedPages.tsx; v3 markup styled by
// nav.hmi-related in quartz/styles/proof-design.scss.
import { RelatedPages } from "hmi-design-system"

// On a metal page (Lead), the neighbours span sibling metals, the ingredients
// and products it contaminates, and the regulations that limit it.
export const MetalPage = () => (
  <RelatedPages
    links={[
      { href: "#/metals/aluminium", label: "Aluminium (Al)" },
      { href: "#/metals/cadmium", label: "Cadmium (Cd)" },
      { href: "#/ingredients/cocoa", label: "Cocoa" },
      { href: "#/regulations/eu-2023-915", label: "EU 2023/915" },
      { href: "#/regulations/fda-closer-to-zero", label: "FDA Closer to Zero" },
      { href: "#/products/infant-formula", label: "Infant formula" },
      { href: "#/metals/inorganic-arsenic", label: "Inorganic arsenic (iAs)" },
      { href: "#/ingredients/rice-flour", label: "Rice flour" },
      { href: "#/ingredients/spinach", label: "Spinach" },
    ]}
  />
)

// On an ingredient page (Cocoa), the neighbours are the metals it carries, the
// products it goes into, and the standards that cover it.
export const IngredientPage = () => (
  <RelatedPages
    links={[
      { href: "#/metals/cadmium", label: "Cadmium (Cd)" },
      { href: "#/products/chocolate", label: "Chocolate" },
      { href: "#/regulations/codex-193-1995", label: "Codex Standard 193-1995" },
      { href: "#/regulations/eu-2023-915", label: "EU 2023/915" },
      { href: "#/metals/lead", label: "Lead (Pb)" },
      { href: "#/metals/nickel", label: "Nickel (Ni)" },
    ]}
  />
)

// On a regulation page (EU 2023/915), the neighbours are the metals it limits,
// the products it applies to, and the ingredients most affected.
export const RegulationPage = () => (
  <RelatedPages
    links={[
      { href: "#/metals/cadmium", label: "Cadmium (Cd)" },
      { href: "#/products/infant-formula", label: "Infant formula" },
      { href: "#/metals/inorganic-arsenic", label: "Inorganic arsenic (iAs)" },
      { href: "#/metals/lead", label: "Lead (Pb)" },
      { href: "#/ingredients/rice-flour", label: "Rice flour" },
      { href: "#/metals/total-mercury", label: "Total mercury (tHg)" },
    ]}
  />
)
