# S-DOI-1: read-only DOI readiness audit

Source: `/Users/karenpendergrass/Desktop/heavymetalcertified`, branch `main`, observed HEAD `ed3050c92353c48965c833546c481bb463c53a7b`; captured 2026-09-09. Source files were not changed. Fresh lint ran against copies in `/private/tmp/s-doi-1-audit-snapshot`; no network request, preflight, mint, commit, or push was performed.

## Result

- **0 standard pages are mint-eligible** under the actual gate: COMPLETE and CORRECTED. Current REGISTERED = 0; READY = 0.
- 349 published `type: standard` pages: 239 COMPLETE but unconfirmed; 81 mapped but not COMPLETE; 29 recordless. Every page is currently blocked from minting.
- CORRECTED = 0 because `data/standards/confidence/` has no per-compiled-dir confidence manifests, only `confidence-blocking.json` with an empty `dirs` array. No cell has a current manifest confirmation.
- 323 compiled records; 242 complete; 2 provisional scaffolds; 331 EMPTY lint states out of 3,575 panel cells; 0 pageless records. These are the lint's limit-of-record classes, not 331 absent or invented blanks: 192 control, 133 not_material, and 6 form_split cells lacking an aggregate numeric value. No `cell absent` state appears in this audit.
- Fresh totals match the source readiness-manifest.json exactly. `standard-readiness-lint.mjs --strict --json`: exit 1. The normal prebuild still invokes warn-only readiness lint.
- Default mint dry-run: 0 candidates, 349 held and 2 ineligible pages. Planning-only `--include-unconfirmed` yields 239 COMPLETE candidates and no missingFields/brand checks reported; it does not authorize minting and cannot combine with `--live`.

## DOI registry and prefix

- Registry has 1 entry, the existing infant-and-child-foods manual DOI `10.5281/zenodo.20771543`. It is not a standard-page DOI. No standard has a registry production DOI; all 349 are missing one by design until lawful minting.
- `doi-registry-lint.mjs`: exit 0, 1 registered DOI, 406 scanned pages; no registry/frontmatter mismatch, duplicate DOI, orphan registry page, or rendered production cert_doi absent from the registry was detected.
- `doi-manifest.csv` contains only its header. No persisted batch sign-off rows exist. `data/standards/doi-audit/` is absent in the audited checkout.
- **Do not repeat the stale claim that the prefix/credentials are absent.** The source `.env.local` has non-placeholder DATACITE_USER, DATACITE_PASSWORD and DATACITE_PREFIX and DATACITE_MODE=live. Prefix is outside all sandbox families recognized by the tools. Values were not printed or copied. Assignment to the correct repository, account authentication and actual production eligibility have not been verified. Current shell does not inherit these variables.

## Outstanding GATE 1 and GATE 3

- GATE 1 remains an explicit Karen/counsel decision in `docs/DOI-MINTING-LEDGER.md:36`: choose the immutable dated-edition mechanism (self-hosted RFC-3161/TSA PDF+manifest, neutral external deposit, or the approved combination). No later PASS appears in the audited cert bridge; S-DOI-1 expressly says not to mint without prefix + GATE 1.
- The freeze must use a round-trip-approved/current cert record, the cert page standard_version/effective_date, and PAGE slug; scaffolds and page-less records excluded. Historical Index v1.0 snapshots with null effective dates are expressly superseded and cannot be reused.
- The audited cert `content/static/standards/` contains PDFs but no versioned manifest.json or .tsr file; `static/standards/` and the referenced `tools/standards/freeze-standard-version.mjs` are absent in this checkout. This is a scoped cert-tree observation, not a claim that no snapshot exists elsewhere.
- GATE 3 is also still marked counsel-undecided in the ledger: legal/trade-name publisher, creator/organizational creator, and Paleo Certified, Inc. RightsHolder representation. It remains separate from the S-DOI-1 mechanical preparation.
- Tooling does not itself enforce an approved GATE 1/GATE 3 or require frozen snapshot evidence: mint gating checks COMPLETE/CORRECTED plus limited metadata/brand requirements. A dry-run candidate must therefore never be described as approved for live minting.
- `datacite-preflight.mjs` is **not read-only**: it performs authenticated DELETE/POST/GET/DELETE of a draft DOI. It was inspected, not run. A successful connection preflight alone would not satisfy GATE 1.

## COMPLETE pages by compiled directory (all still blocked for confidence, DOI, and approvals)

| Compiled directory | COMPLETE pages | Published pages in directory |
|---|---:|---:|
| cat1-compiled | 9 | 9 |
| cat10-compiled | 9 | 12 |
| cat11-compiled | 0 | 9 |
| cat13-compiled | 17 | 19 |
| cat14-compiled | 12 | 12 |
| cat15-compiled | 10 | 10 |
| cat16-compiled | 24 | 24 |
| cat17-compiled | 11 | 11 |
| cat18-compiled | 7 | 7 |
| cat19-compiled | 13 | 13 |
| cat2-compiled | 16 | 16 |
| cat20-compiled | 2 | 10 |
| cat21-compiled | 0 | 21 |
| cat22-compiled | 15 | 15 |
| cat23-compiled | 30 | 30 |
| cat24-compiled | 8 | 8 |
| cat25-compiled | 6 | 6 |
| cat26-compiled | 5 | 5 |
| cat27-compiled | 4 | 4 |
| cat28-compiled | 6 | 6 |
| cat29-compiled | 3 | 3 |
| cat3-compiled | 12 | 12 |
| cat30-compiled | 2 | 2 |
| cat31-compiled | 4 | 4 |
| cat32-compiled | 5 | 5 |
| cat33-compiled | 0 | 3 |
| cat34-compiled | 0 | 4 |
| cat35-compiled | 0 | 3 |
| cat4-compiled | 0 | 8 |
| cat5-compiled | 2 | 18 |
| cat8-compiled | 0 | 4 |
| seafood-compiled | 7 | 7 |

## All 239 COMPLETE page slugs

Each is blocked because no current confidence manifest confirms every cell; none is already REGISTERED.

- **cat1-compiled (9):** `baby-cereals-dry`, `fruit-juice-not-canned`, `fruit-purees`, `infant-formula-powder`, `infant-formula-ready-to-feed`, `mixed-meals`, `non-root-vegetable-purees`, `root-vegetable-purees`, `teething-and-snacks`

- **cat10-compiled (9):** `car-seats`, `clasps-fasteners-infant-products`, `cribs-and-bassinets`, `high-chairs-and-booster-seats`, `infant-carriers`, `play-yards-and-gates`, `strollers`, `swings-and-bouncers`, `walkers`

- **cat13-compiled (17):** `body-hand-leave-on-skin-care`, `deodorants`, `dusting-powder-cornstarch-adult`, `dusting-talc-powders-adult`, `eye-makeup`, `face-neck-leave-on-skin-care`, `fragrance-preparations`, `leave-on-hair-preparations`, `leave-on-preparations-other`, `lipstick`, `makeup-body-paints-bases-fixatives`, `makeup-foundation-powders-blush`, `manicuring-preparations-leave-on`, `permanent-hair-dyes-tints`, `sun-suntan-mineral`, `sun-suntan-products`, `traditional-eye-cosmetics`

- **cat14-compiled (12):** `bar-bath-soap`, `body-wash-shower-gel`, `conditioner-adult-rinse-out`, `deep-conditioning-treatments-rinse-off`, `exfoliants-scrubs`, `facial-cleansers`, `hair-dye-rinse-off`, `hair-removal-products`, `hand-soap`, `rinse-off-preparations-other`, `shampoo-adult`, `shaving-cream-gel-foam`

- **cat15-compiled (10):** `douches-vaginal-irrigation`, `feminine-deodorants`, `feminine-wipes`, `intimate-washes-cleansers`, `menstrual-cups`, `menstrual-discs`, `menstrual-intimate-products-other`, `menstrual-pads`, `menstrual-tampons`, `period-underwear-reusable-garments`

- **cat16-compiled (24):** `supplements-algae-seaweed-based`, `supplements-amino-acids-isolates`, `supplements-bars-labeled`, `supplements-botanicals-herbs`, `supplements-clay-mineral-earth`, `supplements-enzymes`, `supplements-greens-superfood`, `supplements-mushroom-fungal`, `supplements-oil-based`, `supplements-oral-liquids-droppers`, `supplements-oral-liquids-shots`, `supplements-oral-liquids-syrups`, `supplements-oral-liquids-tinctures`, `supplements-oral-solids-capsules`, `supplements-oral-solids-effervescent`, `supplements-oral-solids-gummies`, `supplements-oral-solids-lozenges`, `supplements-oral-solids-powders`, `supplements-oral-solids-softgels`, `supplements-oral-solids-tablets`, `supplements-probiotics`, `supplements-protein-collagen-powders`, `supplements-teas-labeled`, `supplements-vitamin-mineral`

- **cat17-compiled (11):** `pet-chews-dental`, `pet-food-canned-wet`, `pet-food-dry-kibble`, `pet-food-fermentation-derived-protein`, `pet-food-fish-marine-protein`, `pet-food-freeze-dried`, `pet-food-raw`, `pet-food-semi-moist`, `pet-milk-replacers-specialty-liquids`, `pet-toppers-mixers-broths`, `pet-treats-snacks`

- **cat18-compiled (7):** `pet-supplements-botanical-herbal`, `pet-supplements-calming-behavioral`, `pet-supplements-functional-blends`, `pet-supplements-oils`, `pet-supplements-other`, `pet-supplements-probiotics-digestive`, `pet-supplements-vitamin-mineral`

- **cat19-compiled (13):** `anti-static-products`, `anti-wrinkle-wrinkle-release-products`, `bleaching-whitening-additives`, `fabric-contact-combination-products`, `fabric-contact-products-other`, `fabric-protectants`, `fabric-refresher-products`, `fabric-softeners`, `laundry-detergent-boosters-additives`, `laundry-detergents`, `laundry-prewash-products`, `laundry-starch-sizing-fabric-finish`, `pre-treaters-stain-removers`

- **cat2-compiled (16):** `baby-lotion-cream`, `baby-oil`, `baby-powder-cornstarch`, `baby-shampoo-body-wash`, `baby-sunscreen-chemical`, `baby-sunscreen-mineral`, `baby-talcum-powder`, `baby-wipes`, `childrens-lip-balm-mineral-bearing`, `childrens-lip-balm-plain`, `childrens-makeup`, `childrens-nail-polish`, `diaper-cream-non-zno`, `diaper-cream-zno`, `face-paint`, `toothpaste`

- **cat20-compiled (2):** `breath-fresheners`, `denture-orthodontic-care`

- **cat22-compiled (15):** `air-product-refill-materials`, `automatic-puff-releasers`, `capillary-reed-wood-diffusers`, `electric-plug-in-evaporators`, `gel-diffusers`, `heated-oil-diffusers`, `home-air-emission-products-other`, `incense-sticks-cones`, `instant-air-refreshment-sprays`, `nebula-diffusers`, `potpourri-sachets`, `scented-candles`, `scented-wax-blocks-melts`, `sensor-puff-releasers`, `vacuum-cleaner-fragrance-additives`

- **cat23-compiled (30):** `bakeware`, `cookware-ceramic-coated`, `cookware-metal-alloy`, `cookware-nonstick-coated`, `cookware-specialty-alloy`, `cutting-boards`, `filter-media-and-housings`, `food-packaging-cans-lids`, `food-packaging-caps-closures`, `food-packaging-flexible-pouches-films`, `food-packaging-foils-wraps`, `food-packaging-glass-jars`, `food-packaging-paperboard-cartons`, `food-packaging-plastic-tubs`, `food-prep-blender-jars`, `food-prep-coffee-maker-pathways`, `food-prep-kettle-interiors`, `food-prep-processor-bowls`, `food-storage-glass-containers`, `food-storage-lids-gaskets`, `food-storage-plastic-containers`, `food-storage-silicone`, `tableware-ceramicware`, `tableware-decorative-decals-coatings`, `tableware-glassware`, `tableware-metal-bottles-tumblers`, `tableware-plastic-drinkware`, `utensils-metal`, `utensils-plastic-silicone-tools`, `water-filters`

- **cat24-compiled (8):** `dairy-cheese`, `dairy-condensed-evaporated`, `dairy-cream`, `dairy-milk-camel`, `dairy-milk-cow`, `dairy-milk-goat-sheep`, `dairy-milk-powders`, `dairy-yogurt-cultured`

- **cat25-compiled (6):** `cannabis-concentrates`, `cannabis-edibles`, `cannabis-flower`, `cannabis-tinctures-oils`, `cannabis-topicals`, `cannabis-vape-cartridge-fill`

- **cat26-compiled (5):** `aas-injectable`, `peptides-injectable-hormones`, `peptides-nasal-sublingual`, `research-chem-raw-powders`, `sarms-oral`

- **cat27-compiled (4):** `legumes-pulses-other`, `peanut-butter`, `peanuts`, `soy-products`

- **cat28-compiled (6):** `cashews`, `nut-seed-butters-other`, `nuts-seeds-other`, `sunflower-seed-butter`, `sunflower-seeds`, `tree-nuts-high-nickel`

- **cat29-compiled (3):** `cultivated-mushrooms-oyster-shiitake`, `cultivated-mushrooms`, `wild-mushrooms`

- **cat3-compiled (12):** `bread-and-baked-goods`, `breakfast-cereal-non-rice`, `breakfast-cereal-rice-based`, `flour-non-rice`, `grain-based-snacks`, `other-grain-products`, `pasta-rice-based`, `pasta-wheat-based`, `rice-beverages-rice-milk`, `rice-bulk-grain`, `rice-noodles`, `rice-snacks-crackers`

- **cat30-compiled (2):** `cooking-oils-other`, `olive-oil`

- **cat31-compiled (4):** `honey`, `refined-sugar`, `rice-grain-syrup`, `syrups-maple-agave-molasses`

- **cat32-compiled (5):** `fish-sauce`, `mustard-mayo-dressings`, `soy-sauce-fermented`, `tomato-condiments`, `vinegar`

- **cat5-compiled (2):** `coffee-ready-to-drink`, `coffee`

- **seafood-compiled (7):** `canned-seafood`, `cephalopods`, `fish-freshwater`, `fish-marine-non-predatory`, `fish-marine-predatory`, `seaweed-kelp-foods`, `shellfish`

## All 81 mapped, non-COMPLETE page slugs and exact record reasons

These also lack CORRECTED confidence and a production DOI. The following reasons are generated by the existing lint, with no reinterpretation of a control disposition as a physically absent cell.

### antiperspirant (cat13-compiled)
- `antiperspirant`: Al: not_material carries no limit-of-record.

### art-craft-materials (cat21-compiled)
- `art-craft-materials`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### beef-product (cat11-compiled)
- `beef-product`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### bibs (cat10-compiled)
- `bibs`: Cr: control carries no limit-of-record.

### blankets-and-sleep-sacks (cat10-compiled)
- `blankets-and-sleep-sacks`: Cr: control carries no limit-of-record.

### bone-broth (cat35-compiled)
- `bone-broth`: provisional scaffold; never COMPLETE.
- `bone-broth`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### bottled-drinking-water (cat8-compiled)
- `bottled-drinking-water`: MeHg: not_material carries no limit-of-record; Sn: control carries no limit-of-record.

### bouillon-seasoning-blends (cat34-compiled)
- `bouillon-seasoning-blends`: MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: not_material carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### canned-meats (cat11-compiled)
- `canned-meats`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### chocolate (cat33-compiled)
- `chocolate`: Pb: form_split without a numeric value; Cd: form_split without a numeric value; tAs: form_split without a numeric value; iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: form_split without a numeric value; Sn: not_material carries no limit-of-record; Al: not_material carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### cocoa-beverage-mixes (cat5-compiled)
- `cocoa-beverage-mixes`: Pb: control carries no limit-of-record; tAs: control carries no limit-of-record; iAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### confectionery-candy (cat33-compiled)
- `confectionery-candy`: Cd: not_material carries no limit-of-record; iAs: not_material carries no limit-of-record; tHg: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: not_material carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### dentifrices (cat20-compiled)
- `dentifrices`: Sn: control carries no limit-of-record.

### dried-fruit (cat4-compiled)
- `dried-fruit`: MeHg: control carries no limit-of-record; Ni: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### eggs-product (cat11-compiled)
- `eggs-product`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### fermented-beverages-non-tea-based (cat5-compiled)
- `fermented-beverages-non-tea-based`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### flavored-waters (cat5-compiled)
- `flavored-waters`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### floss-interdental-cleaners (cat20-compiled)
- `floss-interdental-cleaners`: Cr: control carries no limit-of-record.

### fresh-fruit (cat4-compiled)
- `fresh-fruit`: MeHg: control carries no limit-of-record; Ni: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### fruit-juices-apple-containing (cat5-compiled)
- `fruit-juices-apple-containing`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### fruit-juices-non-apple (cat5-compiled)
- `fruit-juices-non-apple`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### fruit-snacks (cat4-compiled)
- `fruit-snacks`: MeHg: control carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### game-meats (cat11-compiled)
- `game-meats`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### gummies-jellies (cat33-compiled)
- `gummies-jellies`: Cd: not_material carries no limit-of-record; iAs: not_material carries no limit-of-record; tHg: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: not_material carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: not_material carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### herbal-botanical-infusions (cat5-compiled)
- `herbal-botanical-infusions`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; iAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### hot-chili-sauces (cat34-compiled)
- `hot-chili-sauces`: MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### infant-clothing (cat10-compiled)
- `infant-clothing`: Cr: control carries no limit-of-record.

### infant-nursery-water (cat8-compiled)
- `infant-nursery-water`: MeHg: not_material carries no limit-of-record; Sn: control carries no limit-of-record.

### kombucha-tea-based (cat5-compiled)
- `kombucha-tea-based`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### lamb-mutton (cat11-compiled)
- `lamb-mutton`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### leafy-vegetables-other (cat4-compiled)
- `leafy-vegetables-other`: MeHg: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### matcha (cat5-compiled)
- `matcha`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; iAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### mineral-water (cat8-compiled)
- `mineral-water`: MeHg: not_material carries no limit-of-record; Sn: control carries no limit-of-record.

### mixed-meals-prepared-foods (cat35-compiled)
- `mixed-meals-prepared-foods`: MeHg: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### mouthwash-oral-rinse (cat20-compiled)
- `mouthwash-oral-rinse`: Sn: control carries no limit-of-record.

### non-root-vegetables (cat4-compiled)
- `non-root-vegetables`: MeHg: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### oral-irrigators-water-flossers (cat20-compiled)
- `oral-irrigators-water-flossers`: Cr: control carries no limit-of-record.

### oral-products-other (cat20-compiled)
- `oral-products-other`: provisional scaffold; never COMPLETE.

### pickled-fermented-vegetables (cat4-compiled)
- `pickled-fermented-vegetables`: MeHg: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### plant-based-meat-alternatives (cat11-compiled)
- `plant-based-meat-alternatives`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### plant-milks-non-soy-non-rice (cat5-compiled)
- `plant-milks-non-soy-non-rice`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### plant-milks-rice-based (cat5-compiled)
- `plant-milks-rice-based`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### plant-milks-soy-based (cat5-compiled)
- `plant-milks-soy-based`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### pork-product (cat11-compiled)
- `pork-product`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### poultry-product (cat11-compiled)
- `poultry-product`: iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### processed-meats (cat11-compiled)
- `processed-meats`: iAs: control carries no limit-of-record; MeHg: control carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### root-tuber-vegetables (cat4-compiled)
- `root-tuber-vegetables`: MeHg: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### salt (cat34-compiled)
- `salt`: Pb: form_split without a numeric value; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: not_material carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### soft-drinks-carbonated-beverages (cat5-compiled)
- `soft-drinks-carbonated-beverages`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### soups-broths-stocks (cat35-compiled)
- `soups-broths-stocks`: MeHg: not_material carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### sparkling-carbonated-water (cat8-compiled)
- `sparkling-carbonated-water`: MeHg: not_material carries no limit-of-record; Sn: control carries no limit-of-record.

### spices (cat34-compiled)
- `spices`: Pb: form_split without a numeric value; iAs: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: not_material carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### spinach (cat4-compiled)
- `spinach`: MeHg: control carries no limit-of-record; Sn: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### sports-energy-drinks (cat5-compiled)
- `sports-energy-drinks`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### tattoo-inks (cat13-compiled)
- `tattoo-inks`: Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record.

### tongue-cleaners-scrapers (cat20-compiled)
- `tongue-cleaners-scrapers`: Cr: control carries no limit-of-record.

### toothbrushes (cat20-compiled)
- `toothbrushes`: Cr: control carries no limit-of-record.

### toy-chests (cat21-compiled)
- `toy-chests`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toy-pacifiers (cat21-compiled)
- `toy-pacifiers`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-attached-cribs-playpens (cat21-compiled)
- `toys-attached-cribs-playpens`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-balloons (cat21-compiled)
- `toys-balloons`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-balls (cat21-compiled)
- `toys-balls`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-battery-electronic (cat21-compiled)
- `toys-battery-electronic`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-crafts-other (cat21-compiled)
- `toys-crafts-other`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-marbles (cat21-compiled)
- `toys-marbles`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-painted (cat21-compiled)
- `toys-painted`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-pompoms-fibrous-craft (cat21-compiled)
- `toys-pompoms-fibrous-craft`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-projectile-guns (cat21-compiled)
- `toys-projectile-guns`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-rattles (cat21-compiled)
- `toys-rattles`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-sound-producing (cat21-compiled)
- `toys-sound-producing`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-squeeze (cat21-compiled)
- `toys-squeeze`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-stroller-carriage (cat21-compiled)
- `toys-stroller-carriage`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-stuffed-bean-bag (cat21-compiled)
- `toys-stuffed-bean-bag`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-stuffing-materials (cat21-compiled)
- `toys-stuffing-materials`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-substrate-materials (cat21-compiled)
- `toys-substrate-materials`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-with-magnets (cat21-compiled)
- `toys-with-magnets`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### toys-yo-yo-elastic-tether (cat21-compiled)
- `toys-yo-yo-elastic-tether`: iAs: not_material carries no limit-of-record; MeHg: not_material carries no limit-of-record.

### true-tea-camellia-sinensis (cat5-compiled)
- `true-tea-camellia-sinensis`: Cd: control carries no limit-of-record; tAs: control carries no limit-of-record; iAs: control carries no limit-of-record; tHg: control carries no limit-of-record; MeHg: not_material carries no limit-of-record; Ni: control carries no limit-of-record; Sn: control carries no limit-of-record; Al: control carries no limit-of-record; Cr: control carries no limit-of-record; Cr-VI: control carries no limit-of-record.

### vegetable-juices-non-root (cat5-compiled)
- `vegetable-juices-non-root`: MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### vegetable-juices-root-vegetable-containing (cat5-compiled)
- `vegetable-juices-root-vegetable-containing`: MeHg: not_material carries no limit-of-record; Al: control carries no limit-of-record; Cr-VI: not_material carries no limit-of-record.

### whitening-products (cat20-compiled)
- `whitening-products`: Sn: control carries no limit-of-record.

## All 29 recordless pages

Each has no category *-pages.json mapping to a compiled record and cannot be COMPLETE.
- `all-purpose-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `appliance-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `automatic-dishwasher-detergents`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `bathroom-tub-tile-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `carpet-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `carpet-spot-removers`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `cleaning-wipes-household`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `degreasers`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `descalers`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `diapers-and-components`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `dish-soaps-manual`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `disinfectants-sanitizers`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `drain-maintainers-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `feeding-accessories-child-sized`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `floor-cleaners-hard-surface`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `floor-finishes-strippers`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `household-specialty-cleaners-other`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `infant-bottle-nipples`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `infant-bottles`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `infant-food-storage-items`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `kitchen-countertop-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `odor-removers-hard-surfaces`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `oven-grill-bbq-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `pacifiers-and-sucking-teething-aids`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `rinse-aids`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `sippy-cups-toddler-drinkware`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `teething-toys-teethers`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `toilet-bowl-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).
- `window-glass-mirror-cleaners`: no *-pages.json maps this page to a compiled record (hand-authored custom_page source).

## Reproduce without source writes

Create an isolated copy of data/standards, the four content directories, and the four tooling files used below. The copies currently exist at `/private/tmp/s-doi-1-audit-snapshot`. Its node_modules is a read-only-use symlink to the source dependencies; no install is needed. Run only the following audited non-network commands against that snapshot; readiness writes only the copied manifest:

```sh
cd /private/tmp/s-doi-1-audit-snapshot
node tools/standard-readiness-lint.mjs --strict --json
node tools/doi-registry-lint.mjs
node tools/mint-dois.mjs --dry-run
node tools/mint-dois.mjs --dry-run --include-unconfirmed
```

Do not load `.env.local` for this planning audit; do not pass `--live`, `--emit`, or `--manifest`; do not run the connection preflight. For an exact fresh audit after source changes, recopy the snapshot first. No numeric policy change or approval should be inferred from the planning override.

Machine-readable detail: `/private/tmp/s-doi-1-doi-audit.csv`. Fresh manifest: `/private/tmp/s-doi-1-audit-snapshot/data/standards/readiness-manifest.json`.
