// Labeled pill rows — the "metals covered" / "ingredient targets" pattern.
import { ChipGroup } from "hmi-design-system"

export const MetalsCovered = () => (
  <ChipGroup label="Metals covered" chips={["Inorganic arsenic", "Cadmium", "Lead", "Nickel"]} />
)

export const IngredientTargets = () => (
  <ChipGroup
    label="Ingredient targets"
    chips={["Rice flour", "Brown rice", "Oat flour"]}
    muted
  />
)
