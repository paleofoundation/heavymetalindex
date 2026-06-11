# consumption-intake.csv — per-ingredient daily consumption reference

Per-capita daily consumption (grams/day) for each ingredient slug in `wiki/ingredients/`,
used as the input that lets the deterministic assembler derive a consumption tier for the
page-completeness scorecard (D1 consumption-weighting depth, D11 readiness ranking). This
file supplies the g/day figures; a separate deterministic step does the binning.

Every non-blank figure cites a real, public, auditable dataset. Where no defensible figure
exists, `g_per_day` is left blank and `note=no-figure-found`. No number in this file is
guessed — a blank is the honest output, a fabricated intake is the failure mode this
artifact exists to avoid.

## Binning thresholds (applied downstream, not here)

| tier       | g/day        |
|------------|--------------|
| staple     | ≥ 50         |
| common     | 5 – 50       |
| occasional | 0.5 – 5      |
| rare       | < 0.5        |

## Columns

- `ingredient_slug` — matches `wiki/ingredients/<slug>.md` (the `index` page is excluded).
- `g_per_day` — per-capita mean grams/day. Blank when no defensible figure was found.
- `population` — `US-all` (≈ whole U.S. population, the availability basis) or `US-adult`
  (NHANES adult mean).
- `source_dataset` — short dataset label.
- `source_ref` — auditable pointer: dataset + exact commodity/table + year + URL, so a
  skeptic can trace the figure back to source.
- `note` — basis flag or `no-figure-found`.

## Sources and basis (in priority order used)

1. **USDA ERS Loss-Adjusted Food Availability (LAFA)** — the primary source for foods.
   Field used is `Per capita availability adjusted for loss — G/day`, i.e. supply adjusted
   for spoilage, plate waste, non-edible shares and other losses, which approximates actual
   consumption. The exact LAFA commodity name and data year are written into `source_ref`,
   so proxy/aggregate mappings (e.g. `leafy-greens` → commodity `"Fresh romaine and leaf
   lettuce"`) are visible and checkable. Basis: loss-adjusted product weight as eaten.
   `note=loss-adjusted-product-weight`. Files pulled live from the ERS data system
   (dairy, grains, meat/poultry/fish/eggs/nuts, fruit, vegetables, sugar/sweeteners, fats).
   Latest valid year per commodity is used; series whose most recent valid year predates
   2010 (stale/discontinued) are dropped to blank rather than presented as current.
2. **NHANES / WWEIA (USDA ARS Food Surveys Research Group + published NHANES analyses)** —
   for beverages consumed as dilute liquids, where the relevant exposure quantity is grams
   of beverage as-consumed, not the dry commodity. `note=as-consumed-beverage-basis`.
   - `coffee` = 324 g/day (NHANES 2011–2016, whole-sample adults; PMC7469044).
   - `water` = 923 g/day (plain water tap+bottled, age 2+, WWEIA NHANES 2005–2008; USDA ARS
     FSRG Dietary Data Brief No. 7; 3.9 cups/day × 236.6 mL).
3. **FAO Food Balance Sheets / FAO GIFT** — listed in the task as an acceptable tertiary
   source, but the FAOSTAT API required authentication / was unreachable during this build,
   so no figures were drawn from it. Items that FAO might have covered are left blank.

## Basis caveat (important for downstream synthesis)

Most rows are **loss-adjusted product weight** (LAFA). Beverage rows (`coffee`, `water`) are
**as-consumed liquid weight** (NHANES), which is a different basis: a brewed-beverage gram is
mostly water. The two bases are not directly comparable gram-for-gram for heavy-metal
exposure, but both are honestly labelled in `note` so the downstream binning/synthesis can
treat them appropriately. The coarse tier thresholds tolerate the difference.

## Coverage

- 128 of 257 ingredient slugs carry a cited figure; 129 are `no-figure-found`.
- **High-consumption staples are covered**: grains/bread/wheat/rice/corn/oats, the full
  dairy set (milks, cheeses, yogurt, butter), beef/pork/chicken/turkey/eggs, fish & shellfish,
  the broad fruit and vegetable sets, sugar/sweeteners/honey, coffee, and water.
- Blanks are concentrated where no defensible per-capita figure exists on the same basis:
  - composite/processed dishes (e.g. `macaroni-and-cheese`, `chocolate-cake`,
    `chicken-potpie`, `canned-spaghetti`, `blueberry-muffin`) — no single commodity figure;
  - infant-formula and baby-food variants — a different (infant) population not covered here;
  - specific vegetable/seed oils (`olive-oil`, `corn-oil`, `soybean-oil`, …) — the LAFA
    fats-and-oils CSV exported only Butter; per-oil disappearance lives in the Oil Crops
    Yearbook, which was not parsed in this pass;
  - herbs, spices, condiments, vinegars, and exotic produce (`kumquat`, `guava`,
    `jujube-fruit`) with no clean primary per-capita figure;
  - `tea`/`camellia-sinensis`/`matcha-powder` — NHANES 2011–2016 reports tea-consumer
    prevalence (~18.5% of sample) and among-consumer means by subgroup, but no clean
    whole-sample per-capita g/day is stated, so a per-capita figure would have had to be
    derived; left blank rather than guessed;
  - `chocolate`/`cocoa` — only weak industry-blog per-capita figures were locatable, no
    primary WWEIA/FAO figure, so left blank.

Blanks are an autonomous follow-up (e.g. parse the Oil Crops Yearbook, add a WWEIA composite-
food extract, or pull FAO once the API is reachable), not a routed human task.

## Regenerating

The build is deterministic given the ERS CSVs. The extraction + mapping scripts used were
`extract.mjs` (reads the LAFA category CSVs, takes the latest valid `G/day` per commodity)
and `build.mjs` (maps each ingredient slug to a LAFA commodity or a cited manual figure).
The LAFA CSVs are downloaded live from
`https://www.ers.usda.gov/data-products/food-availability-per-capita-data-system`.
