# Firewall lint — no derivation token on an index URL — 2026-08-02

Generated: 2026-08-02T18:31:02.318Z
Mode: blocking (ERROR)

## Summary

- Files scanned: 815
- ERROR (structural, build-blocking): 0
- WARN  (workbench frontmatter leak, drain backlog): 16
- INFO  (prose heuristics, review-only): 1

## WARN — workbench derivation frontmatter fields

### wiki/products/breakfast-cereal-non-rice.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 21: `step0_basis: "regulatory-alignment (EU cereals Cd 100); literature-baseline where depth suppo…`

### wiki/products/breakfast-cereal-rice-based.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 21: `step0_basis: "literature-baseline (iAs); regulatory-alignment (EU iAs rice-product 300 binds)…`

### wiki/products/butter-and-ghee.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 22: `step0_basis: "regulatory-alignment (all analytes; n<5 per analyte)"`

### wiki/products/canned-seafood.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 23: `step0_basis: "regulatory-alignment (Sn to Codex 250000; inherited fish Hg caps); literature p…`

### wiki/products/chocolate.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 32: `step0_basis: "literature-baseline (Cd·Pb·tAs); regulatory-alignment (Ni·Cr·tHg·Sn·Al)"`

### wiki/products/cooking-oils-other.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 22: `step0_basis: "literature-baseline (Pb·Cd·Ni); regulatory-alignment (tAs·iAs·tHg·Cr·Sn·Al)"`

### wiki/products/fish-freshwater.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 23: `step0_basis: "literature-baseline (Hg/MeHg·Pb); regulatory-alignment (Cd·iAs·rest)"`

### wiki/products/fish-marine-non-predatory.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 24: `step0_basis: "regulatory-alignment binding on most analytes; literature-baseline where depth …`

### wiki/products/fish-marine-predatory.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 25: `step0_basis: "literature-baseline (MeHg·tHg); regulatory-alignment (rest); EU predatory-fish …`

### wiki/products/honey.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 31: `step0_basis: "literature-baseline (Pb·Cd·Ni·Cr); regulatory-alignment (tAs·tHg·Sn·Al)"`

### wiki/products/olive-oil.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 23: `step0_basis: "literature-baseline (Pb·Cd·tAs·Ni); regulatory-alignment (iAs·tHg·Cr·Sn·Al)"`

### wiki/products/salt.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 23: `step0_basis: "regulatory-alignment (Pb to Codex ML; all analytes)"`

### wiki/products/seaweed-kelp-foods.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 25: `step0_basis: "literature-baseline (iAs·tAs·Cd); regulatory-alignment (rest)"`

### wiki/products/shellfish.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 24: `step0_basis: "literature-baseline (Cd·iAs·Pb); regulatory-alignment (rest); EU bivalve Pb 150…`

### wiki/products/spices.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 32: `step0_basis: "literature-baseline (Pb·Cd·Cr·tAs·Ni); regulatory-alignment (tHg·Sn·Al)"`

### wiki/products/vinegar.md
- **WORKBENCH_FRONTMATTER_FIELD** — Workbench derivation field "step0_basis" in a public page's frontmatter. Relocate to data/workbench/.
  - line 22: `step0_basis: "literature-baseline (Pb); regulatory-alignment (tAs·Cd·tHg·Ni·Cr·Al·Sn)"`

## INFO — prose heuristics (review-only)

### wiki/regulations/washington-tfca-toothpaste-pb-1000ppb.md
- **HMTC_NUMERIC_NEAR_THRESHOLD** — A number sits next to 'HMTc limit/threshold/standard' — confirm it is a regulatory cap (allowed), not a derived HMTc value (leak).
  - line 54: `rative US binding cap and any HMTc threshold tighter than 1000 ppb adds value over state regulation; threshold`
