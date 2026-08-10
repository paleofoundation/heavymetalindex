---
op: lint
check: prose-style-sweep
date: 2026-06-02
model: claude-sonnet-4-6
pages_scanned: 25
pages_remaining: ~210
stopped_at: wiki/ingredients/butter.md
noindex: true
---

# Prose-style & consumer-language sweep — 2026-06-02 (batch 2, ingredients)

Counts: P1 0 · P2 10 · P3 11. Report-only; no pages were edited.

Pages scanned (25): almond.md, apple-cider-vinegar.md, apple.md, applesauce.md, asparagus.md, avocado.md, baby-cereals-dry.md, baked-beans.md, baked-potato-with-peel.md, balsamic-vinegar.md, banana.md, beans.md, beef.md, beet.md, beverages.md, bivalve-molluscs.md, black-pepper.md, blueberries.md, blueberry-muffin.md, bologna-luncheon-meat.md, bran-cereal-with-raisins.md, bread.md, breastmilk.md, broccoli.md, butter.md

Notes on skipped pages: baby-food.md is an autonomy-created stub (placeholder body + all-pending profile) — skipped per stub rule. beverages.md and black-pepper.md have abbreviated bodies but substantive prose sections; scanned.

Next run resumes at wiki/ingredients/butternut-squash.md.

---

## P1 — consumer safe/dangerous without anchor

| Page | Line | Offending text | Why | Suggested fix | Claim-adjacent? |
|---|---|---|---|---|---|
| (none found) | — | — | — | — | — |

---

## P2 — bullets-in-prose & other qualifiers

| Page | Line | Offending text | Why | Suggested fix | Claim-adjacent? |
|---|---|---|---|---|---|
| [ingredients/apple.md](../ingredients/apple.md) | 97 | `apples are generally a low-risk commodity for heavy metals under current commercial production conditions` | "low-risk commodity" characterizes risk magnitude for readers; TDS data anchor follows in the next sentence but does not precede the claim | Reorder: cite TDS figures first, then draw the conclusion, or add inline ppb anchor (e.g., "Pb p90 = 0 ppb in TDS data, making apples a lower-risk commodity") | ⚠ yes — rephrasing the risk conclusion could alter meaning |
| [ingredients/almond.md](../ingredients/almond.md) | 114 | `Lead and cadmium in whole almonds are generally low under typical commercial production conditions in North America and Europe` | "generally low" for Pb and Cd magnitude with no quantitative anchor in the vicinity; the preceding context cites Ni only | Add ppb range or TDS/literature reference; or replace with "below the Pb and Cd levels of leafy and root vegetables, though North American survey data are pending" | ⚠ yes — editor must verify whether occurrence data support a low-end claim before rewording |
| [ingredients/apple-cider-vinegar.md](../ingredients/apple-cider-vinegar.md) | 98 | `apples are generally low-Pb and low-Cd among fruits` | "generally low-Pb and low-Cd among fruits" characterizes contamination magnitude without a quantitative anchor; Acosta 1993 reference in same sentence gives relative rank at vinegar level but no ppb numbers for apple | Replace with observed ppb range from TDS/Acosta data, or rephrase to "sit at the lower end of the within-vinegar Pb distribution per Acosta 1993" | ⚠ yes — depends on what literature actually supports for apple Pb/Cd levels |
| [ingredients/blueberry-muffin.md](../ingredients/blueberry-muffin.md) | 99 | `Wheat flour contributes trace amounts of Cd and Pb from cereal grain accumulation in soil` | "trace amounts" is an undefined magnitude qualifier; no ppb value given for wheat flour's Cd/Pb contribution | Replace with approximate concentration range: e.g., "carries Cd at typically 20–100 ppb depending on grain origin" — or remove "trace" and describe the source pathway only | ⚠ yes — the qualifier "trace" implicitly asserts a low contribution that may or may not be supported for all wheat origins |
| [ingredients/blueberry-muffin.md](../ingredients/blueberry-muffin.md) | 99 | `eggs and fats are generally low-metal` | "generally low-metal" characterizes risk/contamination magnitude without a quantitative anchor or source reference for eggs and fats | Add brief quantitative context (e.g., "eggs and fats carry metals below detection in TDS data") or rephrase to "contribute little metal relative to the grain fraction" | no — this is a general description of ingredient class, less claim-sensitive |
| [ingredients/blueberry-muffin.md](../ingredients/blueberry-muffin.md) | 99 | `sugar and leavening are minor contributors` | "minor contributors" is a magnitude qualifier; no quantitative anchor | Rephrase to describe the mechanism ("sugar and refined leavening carry very low metal loads because they are highly refined and lack soil-contact mineral matrices") or omit — the dilution point is already made | no — minor contributors is mechanistically defensible but unanchored |
| [ingredients/avocado.md](../ingredients/avocado.md) | 153 | `avocado oil carries very low metal concentrations` | "very low" characterizes magnitude without a quantitative anchor; mechanism (lipid partitioning) is given but no ppb or reference | Add "typically below detection in lipidomic surveys (no occurrence data in current corpus)" or cite a supporting reference | ⚠ yes — editor should verify no avocado oil occurrence data contradicts "very low" before confirming |
| [ingredients/avocado.md](../ingredients/avocado.md) | 157 | `Avocado oil is a low-risk derivative for metals given the lipophilic partitioning away from dissolved metals` | "low-risk" characterizes risk for the reader; mechanism anchor (lipophilic partitioning) is stated but no ppb anchor or reference | Rephrase to describe the mechanism and note that no occurrence data are in the corpus: "avocado oil, through lipophilic partitioning, concentrates little of the dissolved-metal load; no occurrence data appear in the current corpus" | ⚠ yes — "low-risk" implies a conclusion about consumer exposure; editor should confirm the corpus gap before restating |
| [ingredients/banana.md](../ingredients/banana.md) | 97 | `thick-skinned tropical fruits present low metal risk to consumers` | "low metal risk to consumers" is a consumer-facing risk characterization; TDS data in the preceding sentence anchor this claim for banana, but the sentence generalizes to all thick-skinned tropical fruits without a population or dose anchor | Limit the generalization to banana specifically, citing the TDS data: "consistent with banana's documented near-zero Pb/Cd in TDS" | ⚠ yes — generalizing to all thick-skinned tropical fruits may not be supported by data for mango, papaya, etc. |
| [ingredients/balsamic-vinegar.md](../ingredients/balsamic-vinegar.md) | 98 | `grape-must carries grape-source Pb and Cd at modest levels driven by vineyard soil and atmospheric deposition` | "modest levels" characterizes contamination magnitude; the context refers to the substrate Pb/Cd before aging and concentration steps, but no quantitative anchor is given for the grape-must baseline | Add a ppb reference or note that the grape-must baseline is not independently quantified in the loaded corpus | ⚠ yes — "modest" implies a low-risk substrate level; if the base Pb is not modest, the characterization misleads the reader about where the risk originates |

---

## P3 — em dashes & inline bold

| Page | Line | Offending text | Why | Suggested fix | Claim-adjacent? |
|---|---|---|---|---|---|
| [ingredients/balsamic-vinegar.md](../ingredients/balsamic-vinegar.md) | 94 | `Balsamic vinegar — the aged grape-must-derived condiment … — sits at the high end` | Em-dash pair around an extended appositive in running prose | Replace with parentheses: "Balsamic vinegar (the aged grape-must-derived condiment … or industrially produced …) sits at the high end" | no |
| [ingredients/balsamic-vinegar.md](../ingredients/balsamic-vinegar.md) | 98 | `organic-matter content — the longer-aged, more concentrated, more organic-rich product carries higher metal loads` | Em dash connecting a study finding clause to its elaboration in running prose | Replace with a comma or parenthesis: "with the elevation correlated with organic-matter content (the longer-aged, more concentrated product carries higher loads)" | no |
| [ingredients/beans.md](../ingredients/beans.md) | 94 | `Beans — the broad legume category covering dried and canned pulses … — sit at the middle` | Em-dash pair around an extended appositive at sentence opening | Replace with parentheses: "Beans (the broad legume category covering dried and canned pulses …) sit at the middle" | no |
| [ingredients/beef.md](../ingredients/beef.md) | 149 | `Organ meats — particularly liver and kidney — carry 5-20×` | Em-dash pair around a parenthetical qualifier in running prose | Replace with parentheses: "Organ meats (particularly liver and kidney) carry 5-20×" | no |
| [ingredients/banana.md](../ingredients/banana.md) | 97 | `edible portion — yielding the lowest hazard index (0.02) of the three fruits` | Em dash connecting cited result to an elaborating clause | Replace with comma or semicolon: "in the edible portion, yielding the lowest hazard index" or separate into two sentences | no |
| [ingredients/banana.md](../ingredients/banana.md) | 149 | `dry-weight basis — confirming the low-Pb, low-Cd banana profile` | Em dash connecting a methodological qualifier to an interpretive clause | Replace with a comma or semicolon: "on a dry-weight basis, confirming the low-Pb, low-Cd banana profile" | no |
| [ingredients/breastmilk.md](../ingredients/breastmilk.md) | 175 | `**Sourcing levers** ([[mitigation/supply-chain-screening]]) — not applicable` | Em dash separating definition label from explanation in the Mitigation section; borderline (the bold is a legitimate label), but the dash is doing the work a colon or period should do in prose | Replace the em dash with a colon or period: "**Sourcing levers** (…): not applicable…" — applies to all five instances at lines 175, 177, 179, 181, 185 | no |
| [ingredients/breastmilk.md](../ingredients/breastmilk.md) | 177 | `**Agronomic levers** ([[mitigation/agronomic]]) — not directly applicable` | Same pattern as line 175 | Same fix as line 175 | no |
| [ingredients/breastmilk.md](../ingredients/breastmilk.md) | 179 | `**Processing levers** ([[mitigation/processing]]) — not applicable to fresh breastmilk` | Same pattern as line 175 | Same fix as line 175 | no |
| [ingredients/breastmilk.md](../ingredients/breastmilk.md) | 181 | `**Formulation levers** ([[mitigation/formulation]]) — not applicable to breastmilk itself` | Same pattern as line 175 | Same fix as line 175 | no |
| [ingredients/breastmilk.md](../ingredients/breastmilk.md) | 185 | `**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) — for pumped/stored milk` | Same pattern as line 175 | Same fix as line 175 | no |
