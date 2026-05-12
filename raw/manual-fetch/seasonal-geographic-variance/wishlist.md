# Wishlist: seasonal and geographic variance gaps

Running list of (ingredient, region, period, metal) gaps the model has identified in the corpus and would benefit from external materials to close. Updated as corpus search progresses per OPERATING.md Part 7 standing initiative 7 Phase B.

This is a v0 wishlist seeded from the model's prior knowledge of where geographic and seasonal variance matters most for brand legal defensibility on HMT&C-tested matrices. It is not yet refined by corpus search results; the corpus search work (Phase B) will tighten this list by removing gaps the corpus already covers and adding gaps the corpus surfaces. Until the watcher and the routing audit settle into a steady state with the bulk-ingest pipeline, treat this list as the model's best-current-knowledge starting point.

Filename convention reminder: `<crop>_<region>_<year-range>_<metal>_<source-org>.<ext>` (see README in this folder).

## High-priority gaps (Category 1: Infant and Child Foods)

These ingredients drive HMT&C Category 1 product-page evidence. Defense attorneys looking at infant-formula and baby-food cases benefit most from geographic and seasonal range on these.

### Rice (the iAs and tAs anchor)

- [ ] **California medium-grain rice** — iAs by harvest year, 2015 onward. USDA NASS plus academic surveys (Williams, Meharg, Signes-Pastor groups have regional series; the FDA TDS publishes by sampling year). California Rice Commission has industry-side data.
- [ ] **Texas / Arkansas / Louisiana / Mississippi long-grain rice** — iAs by state and harvest year. Same period.
- [ ] **Basmati from India (Punjab vs other regions)** — iAs. Indian Council of Medical Research and FSSAI publish surveys.
- [ ] **Basmati from Pakistan (Punjab)** — iAs. PCSIR and Pakistan Standards and Quality Control Authority.
- [ ] **Thai jasmine rice** — iAs. Thai FDA and Mahidol University.
- [ ] **Italian rice (Po Valley)** — iAs. EFSA dietary exposure reports broken down by member state.
- [ ] **Brown rice vs white rice by region** — iAs concentration ratio. Several academic studies; need region-stratified versions.

### Rice-derived ingredients (the brown rice syrup driver)

- [ ] **Brown rice syrup by source country** — iAs. Jackson 2012 is the foundational paper; need updated regional series.
- [ ] **Rice protein concentrate by source country** — iAs and tAs. Multiple sources cite high values without regional split.

### Cocoa (the Cd anchor)

- [ ] **West Africa: Côte d'Ivoire, Ghana, Nigeria, Cameroon** — Cd by harvest year. ICCO and Cocoa Research Centre Trinidad have data; need year-stratified.
- [ ] **Latin America: Ecuador, Peru, Colombia, Dominican Republic** — Cd by harvest year and altitude (altitude is a known Cd-uptake driver in Andean cocoa).
- [ ] **Cocoa nibs vs cocoa powder vs cocoa butter by origin** — Cd concentration distribution. Abt 2018 and 2020 papers cover US-market chocolate; the upstream regional cacao data is thinner.

### Sunflower seed and sunflower oil

- [ ] **Bulgaria, Ukraine, Russia (the main sunflower belt)** — Cd by harvest year. Cd in sunflower is a known driver for sunflower-seed-containing baby foods.
- [ ] **US Midwest sunflower** — Cd by harvest year. USDA NASS may have data.

### Carrots and root vegetables (the Pb and Cd anchor for purees)

- [ ] **California, Washington, Michigan carrots** — Pb and Cd by harvest year. USDA NASS plus FDA TDS.
- [ ] **Sweet potato by US state** — Pb and Cd. Same.
- [ ] **European carrot growing regions** — Pb and Cd. EFSA member-state breakdowns.

### Leafy greens (spinach, kale)

- [ ] **California vs Arizona spinach** — Cd. The two states dominate US production; Cd uptake varies with soil pH and irrigation water.
- [ ] **Italy and France spinach** — Cd. EFSA reports.
- [ ] **Kale by US region** — Cd. Production has grown rapidly; regional baseline data is thin.

### Wheat, oats, and grain bases for baby cereal

- [ ] **US Pacific Northwest wheat (Washington, Oregon, Idaho)** — Cd. Durum wheat is a known Cd accumulator.
- [ ] **Canadian Prairie wheat (Saskatchewan, Manitoba, Alberta)** — Cd by harvest year.
- [ ] **Australian wheat** — Cd by growing region. FSANZ publishes data.
- [ ] **Oats from US Midwest, Canada, Sweden, Finland** — Cd, Pb, and tAs. Variance by region is documented in spot studies; need consolidated regional series.

### Quinoa

- [ ] **Bolivian and Peruvian quinoa by altitude and harvest year** — Cd. Altitude is the dominant driver.
- [ ] **US quinoa (Washington, Colorado)** — Cd. Production is small but growing.

## Mid-priority gaps (Category 5: Beverages)

### Apple juice (the iAs and Pb anchor)

- [ ] **US apple juice by source state** — iAs and Pb. FDA 2018 and 2022 surveys exist but state-level data is aggregated.
- [ ] **Chinese apple concentrate (the major import)** — iAs and Pb by province. FDA import alert data has aggregated values; provincial breakdown is thin in the published literature.
- [ ] **Argentine apple concentrate** — iAs and Pb.
- [ ] **European cider apple regions (Normandy, Asturias, Somerset)** — Pb and Cd.

### Grape juice and grape products

- [ ] **California vs Washington vs New York grape juice** — Pb. FDA 2016 has aggregated data.

### Tea

- [ ] **Chinese green tea by province** — Al and Pb. China is the dominant source; provincial variance is large because tea bush uptake depends on soil acidity and growing altitude.
- [ ] **Sri Lankan tea by elevation** — Al, Pb, Mn. Elevation (Nuwara Eliya high-grown vs Ruhuna low-grown) is a documented driver.
- [ ] **Kenyan and Indian Assam tea** — Al, Pb.
- [ ] **Japanese matcha by grade and region (Uji, Nishio, Shizuoka)** — Al, Pb. Matcha concentrates leaf content vs steeped tea.

## Seasonal variance (cross-cutting)

Seasonal variance is harder to find than geographic variance because most papers report a single harvest year rather than a time series. The wishlist below is what would actually move the needle:

- [ ] **Multi-year time series for rice iAs in California**, ideally five or more consecutive harvest years from a single agronomic source. Soil-water-management changes year-over-year drive iAs.
- [ ] **Multi-year time series for cocoa Cd in Ecuador**, ideally tied to El Niño / La Niña years.
- [ ] **Drought-year vs wet-year wheat Cd from the Australian wheat belt**. Drought concentrates Cd in grain.
- [ ] **Pre-monsoon vs post-monsoon Indian rice iAs**, where applicable.
- [ ] **Spring vs fall harvest leafy-green Cd from California**.

## What is already in the corpus

This section will be populated as the corpus search (Phase B per OPERATING.md Part 7 standing initiative 7) progresses. Tick items move from the open list above into this section as their gaps get closed.

(empty for now; populated after Phase B starts)

## How to read this list

Each unticked item is a gap. Drop a file in this folder that addresses the gap, and the next ingest pass picks it up. Use the filename convention from the README. If a single file covers multiple items, list which items it closes when you drop it (a one-line note in this wishlist is fine).

The model maintains this list. If an item is mis-scoped (the data is not actually useful, or already exists somewhere obvious in the corpus), tell the next session and it will be removed or corrected.
