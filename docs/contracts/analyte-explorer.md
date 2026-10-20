# Analyte evidence explorer

Current revision: 18 October 2026, following the user's request to replace public confidence cells with useful relative findings and a right overlay dataset drawer.

The current compact result policy is defined in [Current comparison presentation](relative-findings.md#current-comparison-presentation-19-october-2026): no blank occurrence buttons, explicit comparison states, and details in information cards or the right overlay.

## Current page contract

Use **Analyte**, **Collection scope**, **Finding**, **Comparison**, and **Evidence**. The Comparison column answers how a finding differs from an explicit reference. The scientific method and the data gates are defined in [Relative findings and dataset drawer](relative-findings.md).

Users can select an analyte, one of the six FDA rice collection regions, a fiscal year and either **Earlier matched collections** or **Other collection regions**. Source summaries for those selections are compiled before page generation. Filtering selects an existing calculation; it never substitutes a new species, material, preparation basis or source family.

For the existing TDS rice records, time comparisons match region and season. FY2020 is winter-only and FY2018 winter has no West collection, so those data cannot support a naive whole-year comparison. The default uses five shared winter-region groups, with six reference composites and five target composites. Each group receives equal weight after its within-group median is calculated.

The default matched Cd median is 4.3 → 5.0 µg/kg for cooked white rice (+16.3%) and 5.5 → 9.8 µg/kg for cooked brown rice (+78.2%). These describe the matched historical samples. A change in sampled levels is not automatically a population trend. Single-composite comparisons, unequal sampling, missing regional labels and censored medians are stated concretely.

For a selected region, the peer comparison matches fiscal year and season and balances the other regions. A reference middle 50% describes the earlier matched groups, not a universal normal or safe range. For the single inorganic-arsenic result, the paired total-arsenic measurement provides a composition comparison; it cannot create a time trend.

## Dataset drawer

The Comparison column uses rising bars and an up arrow with **Increased**, or falling bars and a down arrow with **Decreased**, alongside the exact change and named median reference. Direction is conveyed by text and shape as well as color. Same medians are neutral; overlapping censored bounds never receive a directional or unchanged badge. These visuals indicate descriptive direction, not certainty, safety or statistical significance.

The evidence trigger pairs an outlined document icon with **1 dataset**. The icon is decorative for assistive technology; the complete trigger keeps its descriptive accessible name and keyboard operation. Counts represent independent datasets, with samples/composites separately labelled.

Selecting **1 dataset** opens a right-side modal overlay with a dimmed backdrop and Close button. The drawer contains the selected finding and comparison, year-by-year results for the selected region, regional results for the selected fiscal-year scope, calculation details, sampling and analytical methods, reporting limits, original source values and links. The sample tables clearly distinguish full source subsets from the matched calculation subset.

Use native modal focus containment and background inertness. Escape, Close and the backdrop dismiss the panel; focus returns to its trigger and page scrolling is restored. On a phone-width viewport the drawer fills the available width. Without scripts, source details remain available through the native disclosure.

## Implementation and migration

### International occurrence summaries, 18 October 2026

The Rice profile now retains 51 food/analyte findings from 11 source records: the existing 15 FDA cooked-rice findings plus 36 source-specific findings from ten international survey or experimental reports. The source count is not an independent-study count: some compilations reuse observations, and different analytes or grain forms can share samples.

The owning extraction is `data/evidence/contracts/pilot-2026-10-17/rice-depth/occurrence-findings.json`, with a scoped review and explicit holds beside it. `source-occurrence.mjs` preserves original statistics and units, with logged unit-only conversions. It never converts source summaries into pseudo-samples. DMA and MeHg have their own analyte groups. Summary rows carry no inferred sample median, quartiles or temporal comparison; lack of a matched reference does not exclude a reportable source finding from the table.

Rice selectors cover source, collection scope and source-reported collection period alongside the existing FDA fiscal-year selections. Unknown collection periods remain unknown rather than adopting publication years. Country-level US selection retains all FDA findings; FDA regional/seasonal selections remain source-specific. Source drawers show their own methods, basis, censoring, sample units, overlap and original locators, without inheriting FDA methods. The prose explains these interpretation boundaries rather than duplicating each table entry. This remains a partial existing-library assessment, with unresolved primary-source details explicitly held.

The [finalized implementation plan](implementation-plan.md) records this treatment and the next mitigation-table phase; use the [next-chat handoff](next-chat-handoff.md) to continue that work.

`tools/contracts/pilot/comparisons.mjs` calculates within-dataset summaries and matched comparisons. `observations.mjs` reconciles the sample register against the verified food/analyte summaries before admitting comparisons. Structured observations are version 3 and retain original sample IDs and calculation inputs. The new TDS sample input is pinned to its existing primary-reconciled artifact hash.

`analyte-table.mjs` compiles the table, scoped views and source details. `quartz/components/scripts/analyteExplorer.inline.ts` selects those views and controls the modal. The actual Quartz layout and saved comparison use the same interaction script and styles. The earlier confidence-display prototype is retained as an [initial design record](../../data/evidence/contracts/pilot-2026-10-17/initial-explorer-contract.md); its public grade-column and in-cell evidence requirements are superseded. Its helper is not used by the current occurrence renderer. Internal question appraisal records remain governed by the shared evidence contract.

Apply this pattern to the current Cadmium, Rice and Infant Formula pilots. Subsequent migrations must preserve the same source, matching, censoring and overlay behavior. Add later datasets through explicit comparable-scope analysis, and treat material changes in sampling or analytical methods as comparison boundaries. Broader rollout remains outside this pilot.
