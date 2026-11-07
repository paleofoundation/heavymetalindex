---
schema_version: 1.0.0
last_updated: 2026-09-26
applies_to: data/evidence/values.jsonl, data/evidence/claims.jsonl, data/evidence/geo_hist.jsonl, data/evidence/schema/value.schema.json, data/evidence/schema/claim.schema.json
---

# Geography, time, and practice fields

Measured concentration rows can carry where and when the sample was taken, and which farming or exposure practice the source states. The fields are optional. A row that omits them is valid. A row that sets one must type-check, and the validator requires `geo_source` plus `geo_provenance` so the copied value points at the repo text it came from.

The field object is `data/evidence/schema/geo-hist.schema.json`. The same properties are optional on `value.schema.json`, `claim.schema.json`, and extraction findings in `model-extraction.schema.json` / `tools/extract/schema.ts`. Per-study CSV files keep their existing headers. Row-level copies for those CSV rows live in `data/evidence/geo_hist.jsonl`, keyed by `row_id`. Value rows that received a copy also carry the fields inline.

## Fields

| Field | Type | Required | Rule |
| --- | --- | :---: | --- |
| `sampling_country` | ISO 3166-1 alpha-2 string or null | no | Country where the sample was taken. `UK` is stored as `GB`. `USA` is stored as `US`. |
| `sampling_region` | string or null | no | Admin-1 name as printed: state, province, prefecture, governorate, oblast, voivodeship. |
| `lat` | number -90 to 90, or null | no | Decimal degrees. Set only when a coordinate pair is printed. |
| `lon` | number -180 to 180, or null | no | Set only together with `lat`. |
| `sampling_year_start` | integer 1900-2100 or null | no | First year of sampling or collection. Not the publication year. |
| `sampling_year_end` | integer 1900-2100 or null | no | Last year of sampling. Equal to the start for a single year. Must be greater than or equal to the start. |
| `harvest_year` | integer 1900-2100 or null | no | Harvest year when the source states one. |
| `practice` | enum or null | no | `flooded`, `awd`, `upland`, `organic`, `conventional`, `wastewater_irrigated`, `sludge_amended`, `mining_proximate`, `smelter_proximate`, `volcanic_soil`, `geogenic_as_groundwater`, `post_harvest_processing`, `unknown`. |
| `geo_precision` | enum or null | no | `point`, `admin2`, `admin1`, `country`, `multi_country`, `unknown`. |
| `geo_source` | string or null | no | Page, table, figure, frontmatter field, or CSV column the value was copied from. |
| `geo_provenance` | object of strings | no | Field name to the repo path and column or frontmatter field. |

`geo_precision: point` requires `lat` and `lon`. `admin1` requires `sampling_region`. `country` requires `sampling_country`. `multi_country` means more than one country was stated, and `sampling_country` stays empty. `unknown` is in the vocabulary and is not written as a placeholder for a missing value.

## What a backfill may copy

`node tools/evidence/geo-hist.mjs` (npm script `evidence:geo-hist`) rewrites `data/evidence/geo_hist.jsonl`, adds the fields onto `data/evidence/values.jsonl` rows that have a stated value, and regenerates `docs/briefs/geo-hist-coverage.md` and `docs/briefs/geo-hist-coverage.csv`.

Copied only when the repo already states the value:

- Source-page `sampling_locations` for country, admin-1, and a printed coordinate pair.
- Source-page `sampling_year_range` when it starts with a year or a year range, or is a two-year array.
- Source-page `sample_population` when it says the samples were acquired, collected, sampled, purchased, harvested, or obtained in a year, or names one country with a demonym tied to the sample (`Brazilian infant`).
- CSV columns `country_of_origin`, `sampling_country`, `market`, `market_region`, `calendar_year`, `fiscal_year`, `fiscal_year_min`, `fiscal_year_max`, `sampling_period`, `year_min`, `year_max`, `lat` / `latitude`, `lon` / `longitude`, `harvest_year`, and `practice`.

Not copied:

- Author affiliation, including a university address stored in `sampling_locations` with no sampling verb and no admin-1 label.
- The `jurisdictions` frontmatter array. That array is the regulatory jurisdiction, not the sampling country.
- The publication `year`.
- A country guessed from the agency name. FDA and WHO rows stay without a country unless a sampling field or column states one.
- A CSV cell that says Unknown or Not Specified. That cell blocks inheritance of a study-level country onto that row.
- FDA Total Diet Study collection regions (National, Southeast, Northeast, West, Mid-Atlantic, Southwest, North Central). Those names are not admin-1.
- WHO GEMS/Food `region_name` (EURO, WPRO, PAHO, SEARO, AFRO, EMRO, European Union, Codex Committee Near-East) and `food_origins` (Domestic, Imported, Unknown, Mixed). `year_min` and `year_max` on those rows are copied. The region and origin columns are not.
- The word organic inside "organic arsenic" or "organic matter". A sample description that prints Organic as the product claim is stored as `organic`.

A fiscal-year column is stored as the printed fiscal year, not expanded into a calendar span. `geo_provenance` names the column.

## Precision

| Stated place | `geo_precision` |
| --- | --- |
| One printed lat/lon pair | `point` |
| One admin-1 name | `admin1` |
| One country and no admin-1 | `country` |
| Two or more countries and the row is not split | `multi_country` |

## Coverage

The coverage brief counts measurement rows: numeric `literature_finding` rows in `values.jsonl`, plus per-study concentration CSV rows. A sample-level file replaces the summary rows for that source so the same samples are not counted twice. Summary CSVs are counted for sources that have neither a sample file nor a values.jsonl literature row, and only when the row has a concentration statistic. WHO GEMS/Food grouped summaries count when a lower-bound µg/kg percentile is filled. The group table lists rice, baby food inputs, cocoa and chocolate, chickpeas and pulses, spices, protein powders, fruit juice, tea, and seafood even when the count is zero, then every other group the rows fall into.
