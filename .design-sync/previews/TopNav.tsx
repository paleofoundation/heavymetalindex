// The global sticky top bar with its five mega-menu triggers. Renders its real
// default nav with no props; here "Metals" is shown active (2px bottom border).
import { TopNav } from "hmi-design-system"

export const Default = () => (
  <TopNav
    triggers={[
      { label: "Metals", href: "#/metals", key: "metals", active: true },
      { label: "Foods", href: "#/ingredients", key: "ingredients" },
      { label: "Products", href: "#/products", key: "products" },
      { label: "Regulations", href: "#/regulations", key: "regulations" },
      { label: "Evidence", href: "#/evidence", key: "evidence" },
    ]}
  />
)
