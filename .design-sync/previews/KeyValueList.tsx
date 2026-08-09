// The dotted label→value atom. Realistic regulation/metal facts.
import { KeyValueList } from "hmi-design-system"

export const RegulationFacts = () => (
  <KeyValueList
    rows={[
      { k: "Jurisdiction", v: "European Union" },
      { k: "Instrument", v: "EU 2023/915" },
      { k: "Analyte", v: "Lead (Pb)" },
      { k: "Effective", v: "2023-05-25" },
      { k: "Referenced by", v: "48 pages" },
    ]}
  />
)
