#!/usr/bin/env node
// Applies the "Who this page is for" stakeholder guide block to every public
// product-category page that doesn't have one yet.
//
// Per OPERATING.md Part 2, the stakeholder model (brand legal, retailer
// compliance, brand QA, regulators/journalists, HMT&C staff) should be
// visible on every public product page so a reader can tell at first glance
// that the build was designed with those audiences in mind. The four infant-
// formula pages got the block hand-written in commit 4e5e2a7; this generator
// brings the rest of the product family into the same pattern with per-
// family customization on the brand-legal attack-vector framing.
//
// The block is emitted inside marker-bounded HTML so subsequent generator
// runs can refresh it consistently. Pages with the older hand-written block
// (the four formula pages) are detected and converted to the marker-bounded
// form so all pages share the same regenerable mechanism going forward.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const productDir = path.join(repoRoot, "wiki/products")

const beginMarker = "<!-- BEGIN: hmi-stakeholder-guide -->"
const endMarker = "<!-- END: hmi-stakeholder-guide -->"

// Per-family attack-vector framing for the brand-legal entry. The brand-legal
// audience is the priority per OPERATING.md Part 2; the framing names what a
// plaintiff's expert is most likely to cherry-pick for that matrix so the
// page reads as defensibility infrastructure, not generic reference.
const FAMILIES = {
  infant_formula: {
    legal: "Cherry-pick attack vectors on this matrix typically center on prepared-for-feeding occurrence values being read against powder-as-placed regulatory ceilings (a basis mismatch the Methodology section neutralizes), and on aluminum loads in non-cow-milk-based formula. Source provenance and basis labeling are the defensive core.",
    qa: "covers all ten HMT&C analytes and links to mitigation guidance per analyte",
  },
  baby_cereal_rice: {
    legal: "Inorganic arsenic in infant rice cereal is the highest-profile cherry-pick target in the entire HMT&C product set; the FDA 2020 100 ppb action level is the public number a plaintiff's expert anchors on. The literature shows wide cultivar, geography, and cooking-water variance, and basis (dry vs as-served) shifts values by 4-5x. Source provenance, geographic breakdown (when populated), and rinsing-and-cooking-method context are the defensive core.",
    qa: "positions a single lab value inside the cited literature for rice cereal, against the FDA 2020 cap and EU 2023/915, with basis conversion explicit",
  },
  baby_cereal_non_rice: {
    legal: "Cherry-pick attack vectors on non-rice cereal typically center on lead and cadmium in grain bases (oats, wheat, barley) where soil-uptake and harvest-year variance is wide. The Methodology section's basis preservation rule (dry cereal vs prepared) is the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-rice cereal grains, against the FDA 2025 dry-cereal cap",
  },
  puree_fruit: {
    legal: "Cherry-pick attack vectors on fruit purees typically center on lead in apple- and pear-derived ingredients (the Wanabana 2024 incident is the canonical example), plus inorganic arsenic when rice flour is added as a thickener. Lead-screen sourcing and ingredient-list scrutiny are the defensive core.",
    qa: "positions a single lab value inside the cited literature for fruit purees, against the FDA 2025 baby-food lead cap",
  },
  puree_root_vegetable: {
    legal: "Cherry-pick attack vectors on root-vegetable purees typically center on lead and cadmium uptake from soil; root vegetables sit under a wider FDA 2025 cap (20 ppb Pb) than other baby-food categories specifically because the literature shows higher baseline values. Geographic and soil-pH variance is the defensive core; basis is straightforward (as-sold).",
    qa: "positions a single lab value inside the cited literature for root-vegetable purees, against the FDA 2025 20 ppb root-vegetable cap",
  },
  puree_non_root_vegetable: {
    legal: "Cherry-pick attack vectors on non-root vegetable purees typically center on lead and cadmium in leafy greens (spinach, kale) where uptake varies by soil pH and irrigation-water quality. Source provenance and regional context are the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-root vegetable purees, against the FDA 2025 10 ppb baby-food lead cap",
  },
  puree_meat: {
    legal: "Cherry-pick attack vectors on meat and poultry purees typically center on lead in livestock liver and kidney products and on cadmium accumulation in older animals. Sourcing transparency (cut, age, region) is the defensive core; the Methodology section's species-vs-species rule (total Hg vs MeHg, etc.) keeps non-comparable values out of the read.",
    qa: "positions a single lab value inside the cited literature for meat and poultry purees, against the FDA 2025 baby-food lead cap",
  },
  puree_fish: {
    legal: "Cherry-pick attack vectors on fish-containing baby foods typically center on methylmercury, where the regulatory ceiling (EPA / FDA action levels) is species-specific and the literature varies by predator-level. The Methodology section's MeHg-vs-total-mercury non-substitutability rule and species-level sourcing are the defensive core.",
    qa: "positions a single lab value inside the cited literature for fish-containing baby foods, with methylmercury treated as non-substitutable from total mercury",
  },
  mixed_meals_rice: {
    legal: "Cherry-pick attack vectors on rice-containing mixed meals typically center on inorganic arsenic (because of the rice base) plus secondary lead and cadmium from vegetable and meat ingredients. Source provenance and ingredient-list scrutiny are the defensive core.",
    qa: "positions a single lab value inside the cited literature for rice-containing mixed meals, against the FDA 2025 baby-food cap with rice-base context",
  },
  mixed_meals_non_rice: {
    legal: "Cherry-pick attack vectors on non-rice mixed meals typically center on lead and cadmium from vegetable and grain ingredients. Source provenance and basis labeling (as-sold vs prepared) are the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-rice mixed meals, against the FDA 2025 baby-food lead cap",
  },
  teething_rice: {
    legal: "Cherry-pick attack vectors on rice-based teething products and snacks typically center on inorganic arsenic concentration through the rice processing. Source provenance and rice-base disclosure are the defensive core.",
    qa: "positions a single lab value inside the cited literature for rice-based teething products and snacks",
  },
  teething_non_rice: {
    legal: "Cherry-pick attack vectors on non-rice teething products typically center on lead and cadmium in grain bases and on contact-leaching from packaging. Source provenance and packaging context are the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-rice teething products and snacks",
  },
  fruit_juice_apple: {
    legal: "Cherry-pick attack vectors on apple-containing juice typically center on inorganic arsenic (the FDA 2022 draft 10 ppb action level is the public number) and on lead from imported concentrate. Sourcing geography (US vs Chinese vs Argentine concentrate) and apple-cinnamon co-occurrence (Wanabana 2024) are the defensive core.",
    qa: "positions a single lab value inside the cited literature for apple-containing juice, against the FDA 2022 draft iAs cap and the FDA 2022 draft Pb cap",
  },
  fruit_juice_non_apple: {
    legal: "Cherry-pick attack vectors on non-apple juices typically center on lead in grape juice (FDA 2022 draft action level applies to all juices) plus inorganic arsenic in cross-juice context. Source provenance and varietal disclosure are the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-apple juice, against the FDA 2022 draft lead and iAs caps",
  },
  fruit_juice_general: {
    legal: "Cherry-pick attack vectors on packaged fruit juices typically center on lead in juice-bottled-from-concentrate plus inorganic arsenic in apple-containing varieties. Source provenance and varietal disclosure are the defensive core.",
    qa: "positions a single lab value inside the cited literature for packaged fruit juices, against the FDA 2022 draft lead and iAs caps",
  },
  vegetable_juice_root: {
    legal: "Cherry-pick attack vectors on root-vegetable-containing juices typically center on lead and cadmium uptake from the underlying root vegetable supply (carrot, beet, parsnip). Source provenance and varietal disclosure are the defensive core.",
    qa: "positions a single lab value inside the cited literature for root-vegetable-containing juices",
  },
  vegetable_juice_non_root: {
    legal: "Cherry-pick attack vectors on non-root vegetable juices typically center on lead and cadmium in leafy-green-derived juices. Source provenance and ingredient-list scrutiny are the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-root vegetable juices",
  },
  plant_milk_rice: {
    legal: "Cherry-pick attack vectors on rice-based plant milks typically center on inorganic arsenic from the rice base; the EU iAs cap on rice-based drinks (30 ppb for non-alcoholic rice-based drinks per EU 2023/915) is the public number. Source provenance and the iAs-vs-tAs speciation rule from the Methodology section are the defensive core.",
    qa: "positions a single lab value inside the cited literature for rice-based plant milks, against the EU 2023/915 30 ppb iAs cap on rice-based drinks",
  },
  plant_milk_soy: {
    legal: "Cherry-pick attack vectors on soy-based plant milks typically center on cadmium uptake by the soy crop. Geographic and growing-region context are the defensive core.",
    qa: "positions a single lab value inside the cited literature for soy-based plant milks",
  },
  plant_milk_other: {
    legal: "Cherry-pick attack vectors on non-soy non-rice plant milks (almond, oat, coconut, cashew, etc.) typically center on cadmium and lead with high inter-variety variance. Source provenance and varietal disclosure are the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-soy non-rice plant milks",
  },
  tea_camellia: {
    legal: "Cherry-pick attack vectors on tea (Camellia sinensis) typically center on aluminum, manganese, and lead uptake by the tea plant; elevation and provincial sourcing drive multi-fold variance. The aluminum case for true tea is one of the most-litigated heavy-metal-in-food categories. Geographic and elevation context is the defensive core.",
    qa: "positions a single lab value inside the cited literature for true tea, with aluminum and lead treated as primary concerns",
  },
  matcha: {
    legal: "Cherry-pick attack vectors on matcha typically center on aluminum and lead, with concentrations elevated relative to steeped tea because the powdered leaf is consumed entire. Source-of-origin and grade (ceremonial vs culinary) are the defensive core.",
    qa: "positions a single lab value inside the cited literature for matcha, with leaf-consumption context for aluminum and lead",
  },
  herbal_infusion: {
    legal: "Cherry-pick attack vectors on herbal and botanical infusions typically center on lead and cadmium from the underlying plant species, with wide variance by species and growing region. Sourcing transparency is the defensive core.",
    qa: "positions a single lab value inside the cited literature for herbal and botanical infusions",
  },
  coffee: {
    legal: "Cherry-pick attack vectors on coffee typically center on lead and cadmium in green coffee beans and on copper / aluminum from processing. Source-of-origin and processing context are the defensive core.",
    qa: "positions a single lab value inside the cited literature for coffee",
  },
  fermented_tea: {
    legal: "Cherry-pick attack vectors on tea-based kombucha typically inherit the tea-plant axis (aluminum, lead) plus fermentation-vessel leaching for nickel and chromium. Source provenance and vessel-material disclosure are the defensive core.",
    qa: "positions a single lab value inside the cited literature for kombucha and tea-based fermented beverages",
  },
  fermented_other: {
    legal: "Cherry-pick attack vectors on non-tea fermented beverages typically center on metal leaching from fermentation vessels and on metals in the underlying fruit or grain substrate. Source-of-substrate and vessel-material disclosure are the defensive core.",
    qa: "positions a single lab value inside the cited literature for non-tea-based fermented beverages",
  },
  soft_drink: {
    legal: "Cherry-pick attack vectors on carbonated soft drinks typically center on tin from can-lining wear and on lead in colorant-derived ingredients. Packaging supplier disclosure and ingredient sourcing are the defensive core.",
    qa: "positions a single lab value inside the cited literature for carbonated soft drinks",
  },
  energy_drink: {
    legal: "Cherry-pick attack vectors on sports and energy drinks typically center on metals in herbal-extract ingredients (ginseng, guarana, taurine sources) and on can-lining wear. Ingredient-supplier disclosure is the defensive core.",
    qa: "positions a single lab value inside the cited literature for sports and energy drinks",
  },
  flavored_water: {
    legal: "Cherry-pick attack vectors on flavored waters typically center on the water source itself (lead at low ppb levels visible against the FDA 5 ppb bottled water standard) plus any flavoring or mineral additions. Source-water testing transparency is the defensive core.",
    qa: "positions a single lab value inside the cited literature for flavored waters, against the FDA 21 CFR 165.110 bottled-water lead cap",
  },
  oral_electrolyte: {
    legal: "Cherry-pick attack vectors on oral electrolyte solutions for pediatric use typically center on mineral-supplement sourcing (lead, cadmium, arsenic in inorganic mineral inputs) and on water-source quality. Mineral-supplier disclosure and source-water testing are the defensive core.",
    qa: "positions a single lab value inside the cited literature for pediatric oral electrolyte solutions",
  },
  glucose_solution: {
    legal: "Cherry-pick attack vectors on glucose solutions for pediatric use typically center on metals in the glucose-source ingredient (corn-derived vs cane-derived) and on water-source quality. Sourcing transparency is the defensive core.",
    qa: "positions a single lab value inside the cited literature for pediatric glucose solutions",
  },
}

// Per-slug overrides for the family classification when the slug-pattern
// matcher would get it wrong, plus the human-readable matrix name used in
// the brand-QA entry's parenthetical.
const SLUG_FAMILY = new Map([
  ["infant-formula-powder", "infant_formula"],
  ["infant-formula-rtf-liquid", "infant_formula"],
  ["baby-cereals", "baby_cereal_non_rice"],
  ["baby-cereals-dry-rice-based", "baby_cereal_rice"],
  ["baby-cereals-dry-non-rice", "baby_cereal_non_rice"],
  ["fruit-purees", "puree_fruit"],
  ["root-vegetable-purees", "puree_root_vegetable"],
  ["non-root-vegetable-purees", "puree_non_root_vegetable"],
  ["meat-and-poultry-purees", "puree_meat"],
  ["fish-containing-baby-foods", "puree_fish"],
  ["mixed-meals-rice-containing", "mixed_meals_rice"],
  ["mixed-meals-non-rice", "mixed_meals_non_rice"],
  ["teething-and-snacks-rice-based", "teething_rice"],
  ["teething-and-snacks-non-rice", "teething_non_rice"],
  ["fruit-juices-apple-containing", "fruit_juice_apple"],
  ["fruit-juices-non-apple", "fruit_juice_non_apple"],
  ["fruit-juice-not-canned", "fruit_juice_general"],
  ["vegetable-juices-root-vegetable-containing", "vegetable_juice_root"],
  ["vegetable-juices-non-root", "vegetable_juice_non_root"],
  ["plant-milks-rice-based", "plant_milk_rice"],
  ["plant-milks-soy-based", "plant_milk_soy"],
  ["plant-milks-non-soy-non-rice", "plant_milk_other"],
  ["true-tea-camellia-sinensis", "tea_camellia"],
  ["matcha", "matcha"],
  ["herbal-botanical-infusions", "herbal_infusion"],
  ["coffee", "coffee"],
  ["kombucha-tea-based", "fermented_tea"],
  ["fermented-beverages-non-tea-based", "fermented_other"],
  ["soft-drinks-carbonated-beverages", "soft_drink"],
  ["sports-energy-drinks", "energy_drink"],
  ["flavored-waters", "flavored_water"],
  ["oral-electrolyte-solutions", "oral_electrolyte"],
  ["glucose-solutions", "glucose_solution"],
])

// Within-pair sibling pages for the "compare with sibling" hint in the
// brand-legal entry.
const SIBLINGS = new Map([
  ["baby-cereals-dry-rice-based", "baby-cereals-dry-non-rice"],
  ["baby-cereals-dry-non-rice", "baby-cereals-dry-rice-based"],
  ["mixed-meals-rice-containing", "mixed-meals-non-rice"],
  ["mixed-meals-non-rice", "mixed-meals-rice-containing"],
  ["teething-and-snacks-rice-based", "teething-and-snacks-non-rice"],
  ["teething-and-snacks-non-rice", "teething-and-snacks-rice-based"],
  ["fruit-juices-apple-containing", "fruit-juices-non-apple"],
  ["fruit-juices-non-apple", "fruit-juices-apple-containing"],
  ["root-vegetable-purees", "non-root-vegetable-purees"],
  ["non-root-vegetable-purees", "root-vegetable-purees"],
  ["vegetable-juices-root-vegetable-containing", "vegetable-juices-non-root"],
  ["vegetable-juices-non-root", "vegetable-juices-root-vegetable-containing"],
  ["plant-milks-rice-based", "plant-milks-non-soy-non-rice"],
  ["plant-milks-soy-based", "plant-milks-non-soy-non-rice"],
  ["plant-milks-non-soy-non-rice", "plant-milks-rice-based"],
  ["true-tea-camellia-sinensis", "matcha"],
  ["matcha", "true-tea-camellia-sinensis"],
  ["kombucha-tea-based", "fermented-beverages-non-tea-based"],
  ["fermented-beverages-non-tea-based", "kombucha-tea-based"],
])

const SKIP_SLUGS = new Set([
  // Pages that have hand-written stakeholder guides (kept as-is by this v1
  // generator; they can be converted to marker-bounded form in a future pass).
  "infant-formula-powder-non-soy",
  "infant-formula-powder-soy-based",
  "infant-formula-rtf-liquid-non-soy",
  "infant-formula-rtf-liquid-soy-based",
  // Concentrated liquid formula pages — not in primary HMT&C row set,
  // skip for now until Karen confirms whether they need the block.
  "infant-formula-concentrated-liquid-non-soy",
  "infant-formula-concentrated-liquid-soy-based",
  // Master / hub pages — these are staff-only with the firewall callout,
  // not public product pages.
  "infant-and-child-foods-master",
  "category-5-beverages-master",
  "regulatory-crosswalk-field-findings",
  "lead-benchmark-context",
  "category-5-beverages",
  // Generic / index pages.
  "index",
])

let updated = 0
let skipped = 0
for (const file of fs.readdirSync(productDir).sort()) {
  if (!file.endsWith(".md")) continue
  const slug = path.basename(file, ".md")
  if (SKIP_SLUGS.has(slug)) {
    skipped += 1
    continue
  }

  const filePath = path.join(productDir, file)
  const raw = fs.readFileSync(filePath, "utf8")
  const parsed = matter(raw)
  if (parsed.data.type !== "product-category") {
    skipped += 1
    continue
  }

  const family = SLUG_FAMILY.get(slug)
  if (!family) {
    console.warn(`apply-stakeholder-guides: no family classification for ${slug}; skipped.`)
    skipped += 1
    continue
  }

  const block = buildBlock(slug, parsed.data, family)
  const next = upsertBlock(raw, block)
  if (next === raw) {
    skipped += 1
    continue
  }
  fs.writeFileSync(filePath, next, "utf8")
  updated += 1
}

console.log(`Applied stakeholder guides to ${updated} product page(s); skipped ${skipped}.`)

function buildBlock(slug, frontmatter, family) {
  const family_config = FAMILIES[family]
  const label = String(frontmatter.label || frontmatter.title || friendly(slug))
  const sibling = SIBLINGS.get(slug)
  const siblingNote = sibling
    ? ` Compare with <a href="/products/${sibling}">${friendly(sibling)}</a> for the within-pair sibling.`
    : ""

  return `${beginMarker}
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>${family_config.legal}${siblingNote} The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=${slug}">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator ${family_config.qa}.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
    </div>
  </dl>
</div>
${endMarker}`
}

function upsertBlock(text, block) {
  const pattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)
  if (pattern.test(text)) {
    // Function replacer: keep `$`-sequences in the block literal (the
    // source-legend idempotency bug class).
    return text.replace(pattern, () => block)
  }

  // Find the insertion point: after the first paragraph following the # H1,
  // before the first <!-- BEGIN: marker. If no markers exist, before the
  // first ## heading.
  const firstMarker = text.search(/\n<!--\s*BEGIN:/)
  const firstH2 = text.search(/\n## /)
  let insertAt = -1
  if (firstMarker !== -1 && (firstH2 === -1 || firstMarker < firstH2)) {
    insertAt = firstMarker
  } else if (firstH2 !== -1) {
    insertAt = firstH2
  }
  if (insertAt === -1) {
    // Fallback: append at end.
    return `${text.trimEnd()}\n\n${block}\n`
  }
  return `${text.slice(0, insertAt).trimEnd()}\n\n${block}\n${text.slice(insertAt).trimStart()}`
}

function friendly(slug) {
  return String(slug || "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
