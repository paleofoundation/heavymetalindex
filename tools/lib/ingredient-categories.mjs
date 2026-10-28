import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const overrideFile = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../data/nav/ingredient-group-overrides.json",
)
let groupOverrides
function groupOverride(slug) {
  if (!groupOverrides) {
    try {
      groupOverrides = JSON.parse(fs.readFileSync(overrideFile, "utf8"))
    } catch {
      groupOverrides = {}
    }
  }
  const key = String(slug ?? "").split("/").filter(Boolean).pop()
  return key ? groupOverrides[key] : undefined
}

export const ING_GROUP = {
  fruit: "Fruits",
  "fruit-product": "Fruits",
  "vegetable-fruit": "Fruits",
  vegetable: "Vegetables",
  "root-vegetable": "Vegetables",
  "leafy-vegetable": "Vegetables",
  "leafy-green": "Vegetables",
  "vegetable-preparation": "Vegetables",
  "vegetable-grain": "Vegetables",
  fungi: "Vegetables",
  grain: "Grains & cereals",
  "grain-product": "Grains & cereals",
  "breakfast-cereal": "Grains & cereals",
  legume: "Legumes & pulses",
  "legume-composite": "Legumes & pulses",
  nut: "Nuts & seeds",
  "nut-seed": "Nuts & seeds",
  seed: "Nuts & seeds",
  oil: "Oils & fats",
  "fat-oil": "Oils & fats",
  "herb-spice": "Herbs, spices & botanicals",
  botanical: "Herbs, spices & botanicals",
  meat: "Meat & poultry",
  "animal-food": "Meat & poultry",
  seafood: "Fish & seafood",
  "seafood-composite": "Fish & seafood",
  "aquatic-protein": "Fish & seafood",
  dairy: "Dairy & eggs",
  "beverage-ingredient": "Beverages & water",
  "juice-composite": "Beverages & water",
  water: "Beverages & water",
  vinegar: "Beverages & water",
  sweetener: "Sweeteners & condiments",
  condiment: "Sweeteners & condiments",
  "mixed-food": "Prepared & composite foods",
  soup: "Prepared & composite foods",
  dessert: "Prepared & composite foods",
}
export const ING_ORDER = [
  "Fruits",
  "Vegetables",
  "Grains & cereals",
  "Legumes & pulses",
  "Nuts & seeds",
  "Oils & fats",
  "Herbs, spices & botanicals",
  "Meat & poultry",
  "Fish & seafood",
  "Dairy & eggs",
  "Beverages & water",
  "Sweeteners & condiments",
  "Prepared & composite foods",
  "Other",
]

export function ingredientGroup(category, slug) {
  const named = groupOverride(slug)
  if (named && ING_ORDER.includes(named)) return named
  return ING_GROUP[String(category ?? "").toLowerCase()] ?? "Other"
}
