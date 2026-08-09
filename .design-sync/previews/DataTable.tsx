// A standard content data table. Illustrative occurrence data (not regulatory
// limits and not a wiki claim) — round numbers chosen to show the format.
import { DataTable } from "hmi-design-system"

export const MeasuredValues = () => (
  <DataTable
    note="Illustrative occurrence summary — example values, not regulatory limits."
    columns={["Matrix", "Analyte", "n", "Median (µg/kg)", "P95 (µg/kg)"]}
    rows={[
      ["Infant rice cereal", "Inorganic arsenic", 84, 61, 180],
      ["Cocoa powder", "Cadmium", 142, 310, 980],
      ["Spinach", "Lead", 57, 12, 44],
      ["Cow-milk formula", "Nickel", 96, 40, 150],
    ]}
  />
)
