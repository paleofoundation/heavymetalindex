# Manual-fetch drop folder: seasonal and geographic variance data

This folder is where Karen drops external materials that the model needs but cannot reach from the current 23,260-paper corpus. The goal is to support seasonal and geographic variance on ingredient `contamination_profile` blocks, so brand legal teams can defend a high test result by pointing to the regional and harvest-period range the literature already documents.

See OPERATING.md Part 7 standing initiative 7 for the strategic frame and CLAUDE.md Part 6 (ingredient template) for the schema this work feeds into.

## What goes here

Anything that documents seasonal or geographic variation in heavy-metal concentrations in food or feed crops. Specifically welcome:

- USDA NASS quick-stats exports filtered by crop, year, region, and metal where available.
- FDA Total Diet Study extracts and regional supplements.
- EFSA dietary exposure reports broken down by member state or production region.
- Codex Alimentarius regional working-group documents.
- FAO production statistics where production region is documented alongside metal-sampling results.
- Peer-reviewed regional studies (rice from California vs Texas vs Bangladesh; cocoa from West Africa vs Latin America; sunflower from Bulgaria vs the US Midwest) that report sample counts by region and harvest period.
- State agriculture department surveys: California DPR, Oregon ODA, Washington WSDA, similar.
- Industry trade association studies if cite-able and license-permitting.

PDFs, markdown, CSVs, XLSX, and image-only scans are all fine. The ingest layer will route each file by content; the folder is a staging area, not a finished structure.

## Naming convention

Use a descriptive filename so the wishlist below can be checked off without opening the file. Prefer:

```
<crop>_<region>_<year-range>_<metal>_<source-org>.<ext>
```

Examples:

```
rice_california_2018-2022_arsenic_usda-nass.csv
cocoa_west-africa_2015-2024_cadmium_efsa.pdf
sunflower_bulgaria_2020_cadmium_eu-rasff.xlsx
```

If a single file covers multiple crops or regions, name it by the dominant axis and add a one-line note in the wishlist.

## Wishlist

The model's running list of (ingredient, region, period, metal) gaps where the corpus is thin or silent. Karen ticks an entry off the wishlist by dropping a file in this folder that closes the gap; the next ingest pass picks it up.

See [wishlist.md](wishlist.md) in this folder. The wishlist is maintained by the model and updated as corpus search progresses (Phase B per OPERATING.md Part 7 standing initiative 7). When the wishlist gets long enough to be unwieldy, it splits by crop.

## What happens after a drop

1. A Claude session running ingest reads the new file from this folder.
2. The session produces a source page at `wiki/sources/<cite-key>.md` per the CLAUDE.md Part 6 source template.
3. The routing audit (`tools/evidence/build-routing-audit.mjs`) fans the source out to affected ingredient pages.
4. The synthesis pass (CLAUDE.md Part 9) updates the relevant ingredient's `contamination_profile` `geographic_breakdown` or `seasonal_variance` sub-fields once the schema extension lands (Phase A pending).
5. The file in this folder is moved into `raw/studies/`, `raw/reports/`, or `raw/industry/` per CLAUDE.md Part 4 directory conventions.

This folder is staging. Files do not stay here after they have been ingested.

## What does NOT go here

- Brand-specific lab results, COAs, brand-identifying test data. Those belong in the private brand-intelligence build described in CLAUDE.md Part 26, not this repo. See CLAUDE.md Part 12 for the brand-firewall rules.
- Material the corpus already has. If a paper is already at `raw/markdown/FM_XXXXXXX/` or `wiki/sources/`, no need to re-fetch.
- Material outside the heavy-metals-in-food scope (pesticide-only studies, mycotoxin-only studies, microplastics-only studies). Those would not pass the routing layer's frontmatter checks.
