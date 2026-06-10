#!/usr/bin/env node
// Create true-stub ingredient pages for Tier 1 coverage-priorities entries whose
// page does not yet exist. Stubs satisfy the routing-destination requirement and
// the mandatory-sections audit exempts them until contributing sources accrue.
//
// Per docs/page-templates.md: stubs carry only the body table (all rows marked
// data gap) and a sources-section with empty-corpus message.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)

const STUBS = [
  { slug: "sorghum", title: "Sorghum", category: "grain",
    aliases: ["sorghum bicolor", "great millet", "jowar", "milo", "kaoliang"],
    intro: "Sorghum (Sorghum bicolor) is a drought-tolerant cereal grain consumed as a staple across the Sahel, Horn of Africa, and parts of South Asia. The heavy-metals profile of sorghum is shaped by soil Cd uptake in semi-arid production zones, by Pb exposure on smallholder farms near roadways and mining-influenced soils in West and East Africa, and by occasional Cr findings from industrial-fertilizer use. This page is a routing-destination stub; the contamination profile will populate as the auto-fetch pipeline and manual-fetch queue surface contributing sources." },
  { slug: "millet", title: "Millet", category: "grain",
    aliases: ["pearl millet", "finger millet", "ragi", "bajra", "foxtail millet", "proso millet", "panicum miliaceum", "pennisetum glaucum", "eleusine coracana"],
    intro: "Millet refers to a family of small-grain cereals — pearl millet (Pennisetum glaucum), finger millet (Eleusine coracana, also known as ragi), foxtail millet, and proso millet — that together feed an estimated 500 million people across the Sahel, India, and parts of Southeast Asia. Millets are staple cereals in semi-arid zones where rice and wheat agriculture is marginal, and their heavy-metals profile is dominated by soil-uptake Cd and Pb in regions with industrial-fertilizer history. This page is a routing-destination stub; per-species sub-pages may emerge as the corpus accumulates pearl-millet-specific or finger-millet-specific evidence." },
  { slug: "teff", title: "Teff", category: "grain",
    aliases: ["eragrostis tef", "tef", "lovegrass", "injera-grain"],
    intro: "Teff (Eragrostis tef) is a tiny-grained cereal endemic to the Ethiopian highlands and a staple food for an estimated 70 million people, primarily as the fermented flatbread injera. Teff is highly nutrient-dense and increasingly traded internationally as a gluten-free grain, which expands its heavy-metals significance beyond the Ethiopian domestic context. Teff's heavy-metals profile is shaped by Ethiopian soil composition, by Fe-rich fertilizer history (which can confound trace-element analysis), and by post-harvest processing in traditional injera production. This page is a routing-destination stub." },
  { slug: "plantain", title: "Plantain", category: "fruit",
    aliases: ["musa paradisiaca", "cooking banana", "matoke", "plantano", "platano-macho"],
    intro: "Plantain (Musa paradisiaca) is a starchy cooking banana that is a primary calorie source across West and Central Africa (especially Cameroon, Uganda, and DRC), parts of the Caribbean, and northern South America. Plantain differs from dessert banana in being typically cooked before consumption and in having a longer growth cycle that increases soil-contact heavy-metals exposure. Production in mining-influenced regions of Latin America and in industrially-impacted parts of West Africa is the dominant Pb and Cd exposure context. This page is a routing-destination stub." },
  { slug: "taro", title: "Taro", category: "root-vegetable",
    aliases: ["colocasia esculenta", "kalo", "dasheen", "eddoe", "cocoyam", "satoimo"],
    intro: "Taro (Colocasia esculenta) is a starchy corm crop with deep cultural significance and dietary importance across Pacific Island nations, West Africa, parts of Southeast Asia, and southern Japan. Like cassava and yam, taro develops in sustained soil contact, exposing the corm to soil-solution heavy-metals uptake and surface-adhered contamination. Volcanic-soil production zones (Hawaii, parts of West Africa, parts of Southeast Asia) carry distinct trace-element baselines from continental-soil zones. This page is a routing-destination stub." }
]

function buildStub({ slug, title, category, aliases, intro }) {
  const aliasesYaml = aliases.map(a => `"${a}"`).join(", ")
  return `---
title: "${title}"
type: ingredient
commodity: ${slug}
label: "${title}"
aliases: [${aliasesYaml}]
category: ${category}
contamination_profile:
  Pb: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cd: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  iAs: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  tAs: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  tHg: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Ni: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Al: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cr: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Sn: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  U: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: ${today}
sources: 0
created_by: coverage_priorities_v0_stub
priority_tier: 1
---

# ${title}

${intro}

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable \`contamination_profile\` in the frontmatter above. \`data gap\` indicates the literature has not yet been ingested for this commodity-analyte combination at the wiki's coverage threshold.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Sources

This page is a coverage-priorities Tier 1 stub. No contributing sources have been routed yet. The auto-fetch pipeline (see [[docs/auto-fetch-design]]) and the manual-fetch workflow are configured to prioritize closing this gap. Once two or more A-tier or B-tier sources accumulate, the synthesis workflow (CLAUDE.md Part 9) will populate the contamination profile.
`
}

function main() {
  const outDir = path.join(repoRoot, "wiki/ingredients")
  let created = 0
  let skipped = 0
  for (const stub of STUBS) {
    const outPath = path.join(outDir, `${stub.slug}.md`)
    if (fs.existsSync(outPath)) {
      console.log(`  skip: ${stub.slug} (already exists)`)
      skipped += 1
      continue
    }
    fs.writeFileSync(outPath, buildStub(stub), "utf8")
    console.log(`  created: wiki/ingredients/${stub.slug}.md`)
    created += 1
  }
  console.log(`\n${created} stubs created, ${skipped} already existed`)
}

main()
