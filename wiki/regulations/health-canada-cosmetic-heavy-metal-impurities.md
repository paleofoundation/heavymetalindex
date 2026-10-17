---
type: regulation
rule_id: health-canada-cosmetic-heavy-metal-impurities
jurisdiction: CA
agency: Health Canada
program: Guidance on Heavy Metal Impurities in Cosmetics (Food and Drugs Act, section 16; Cosmetic Ingredient Hotlist)
metal: multiple (Pb, tAs, Cd, tHg, Sb)
matrix: cosmetics — finished products as sold, heavy metals present as technically unavoidable impurities
limit_value: multiple
limit_unit: ppm
status: guidance
effective_date: 2012-07-20
sunset_date: null
source_refs: []
source_url: "https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/industry-professionals/guidance-heavy-metal-impurities-cosmetics.html"
title: "Health Canada — Guidance on Heavy Metal Impurities in Cosmetics: Pb 10, As 3, Cd 3, Hg 1, Sb 5 ppm"
dek: "Canadian guidance sets heavy metal impurity values for finished cosmetics and explains product scope, unit conversions and enforcement under cosmetic safety legislation."
audience: [regulator, educator, consumer, brand-legal]
wiki_doi: null
updated: 2026-07-29
hero_image: /static/heroes/cosmetic-cream-jars-tube.webp
hero_image_alt: "Two unmarked cosmetic cream jars, a squeeze tube and a dish of white cream illustrating health canada cosmetic heavy metal impurities research context."
---

# Health Canada — Guidance on Heavy Metal Impurities in Cosmetics

## Overview

Health Canada's Guidance on Heavy Metal Impurities in Cosmetics sets **numeric impurity limits for five heavy metals** in finished cosmetic products: **lead 10 ppm, arsenic 3 ppm, cadmium 3 ppm, mercury 1 ppm, antimony 5 ppm**. This is the only North American instrument in this wiki that puts numeric heavy-metal values on finished cosmetics. It is administrative guidance — not a regulation — operating alongside the statutory prohibition of these metals as intentional ingredients (section 16 of the Food and Drugs Act, communicated via the Cosmetic Ingredient Hotlist). The values are loadable as caps in this wiki with `status: guidance impurity limit` and their units converted explicitly (1 ppm = 1 µg/g = 1 mg/kg per the guidance's own definitions).

## Scope

The guidance applies to cosmetics as defined in the Food and Drugs Act — substances for use in cleansing, improving or altering the complexion, skin, hair or teeth, including deodorants and perfumes. Scope caveats that matter for this wiki's product rows:

- **Sunscreens** are regulated in Canada as non-prescription drugs / natural health products (sunscreen monographs), not cosmetics — the guidance does not apply to them.
- **Zinc-oxide skin-protectant diaper creams** are drug-monograph products in Canada; non-therapeutic (non-ZnO) diaper creams are cosmetics.
- **Toothpaste**: non-therapeutic toothpaste is a cosmetic in Canada (the Food and Drugs Act cosmetic definition includes teeth); fluoride/therapeutic toothpaste is a drug outside the guidance's scope.
- Intentional use of lead, arsenic, cadmium, mercury, antimony, and chromium as cosmetic ingredients is prohibited via the Cosmetic Ingredient Hotlist under section 16 of the Food and Drugs Act; the guidance addresses only their **technically unavoidable impurity** presence.

## Exact limit and units

Policy statement (section 4 of the guidance), with conversions shown explicitly. The guidance defines its units: "ppm — parts per million (1 ppm = 1 µg/g, 1 mg/kg, 1 mg/L)".

| Metal | Guidance value | SI equivalents (conversion shown) | HMI cap (µg/kg) |
| --- | --- | --- | --- |
| Lead | 10 ppm | 10 ppm = 10 mg/kg = **10,000 µg/kg** | 10,000 |
| Arsenic | 3 ppm | 3 ppm = 3 mg/kg = **3,000 µg/kg** | 3,000 (total arsenic; does not cap inorganic-arsenic rows) |
| Cadmium | 3 ppm | 3 ppm = 3 mg/kg = **3,000 µg/kg** | 3,000 |
| Mercury | 1 ppm [guidance footnote 21] | 1 ppm = 1 mg/kg = **1,000 µg/kg** | 1,000 |
| Antimony | 5 ppm | 5 ppm = 5 mg/kg = **5,000 µg/kg** | 5,000 (no Sb product rows in the current taxonomy) |

The 1000× hazard: these are ppm-scale values. 10 ppm is **10,000 µg/kg**, not 10 µg/kg; 1 ppm is **1,000 µg/kg**, not 1 µg/kg. Arsenic is stated by the guidance as "arsenic" — this wiki maps it to total arsenic (tAs) only and never substitutes it onto inorganic-arsenic (iAs) rows, per the speciation rule. The guidance attaches its footnote 21 to the mercury entry; the footnote text is not transcribed here (not retrievable in the source capture used).

## How tested

The guidance prescribes no analytical method. It references ICP-MS-class multi-element determination typical for trace metals in cosmetic matrices; manufacturers are expected to control impurities through raw-material sourcing and GMP.

## Enforcement posture

Section 5 of the guidance states: "Health Canada will take action as deemed appropriate for products that contain heavy metals beyond the limits mentioned above." The guidance "does not supersede binding legislation"; enforcement leverage comes from section 16 of the Food and Drugs Act (no person shall sell a cosmetic that has in or on it any substance that may cause injury to the health of the user), with the guidance values marking where Health Canada considers the impurity technically avoidable.

## History of changes

- Guidance issued; page metadata gives 2012-07-20 (issued) and 2017-10-02 (last modified). Values unchanged in the current version from the 2012 final guidance.

## Comparison with other jurisdictions

- **US FDA**: the 10 ppm lead value matches FDA's 2016 **draft** recommendation for lip products and externally applied cosmetics; FDA's binding rule is 21 CFR 700.13's <1 ppm mercury trace, numerically equal to this guidance's 1 ppm mercury value ([[regulations/fda-cosmetics-heavy-metals]]).
- **EU**: Regulation 1223/2009 prohibits the same metals as ingredients (Annex II) with an Article 17 technically-unavoidable-trace allowance and **no numeric limit** — this guidance is the numeric counterpart of the same policy logic ([[regulations/eu-cosmetics-1223-2009]]).
- **US states**: Washington TFCA's 1000 µg/kg lead limit for toothpaste is 10× stricter than this guidance's 10,000 µg/kg lead value and binds lower where it applies ([[regulations/washington-tfca-toothpaste-pb-1000ppb]]).

## Sources

- Health Canada, Guidance on Heavy Metal Impurities in Cosmetics: <https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/industry-professionals/guidance-heavy-metal-impurities-cosmetics.html>
- Cosmetic Ingredient Hotlist (intentional-use prohibitions): <https://www.canada.ca/en/health-canada/services/consumer-product-safety/cosmetics/cosmetic-ingredient-hotlist-prohibited-restricted-ingredients.html>

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [9882fa9f2](https://github.com/paleofoundation/heavymetalindex/commit/9882fa9f2) | 2026-08-04 | major | 2 sections added |
| [38cedd111](https://github.com/paleofoundation/heavymetalindex/commit/38cedd111) | 2026-08-04 | major | Contamination-profile values revised; 7 sections added; narrative text revised |
<!-- END: hmi-page-history -->
