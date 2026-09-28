#!/usr/bin/env node
// Cat 30-35 (v2.2 Cat 7 dissolution) Step Zero row-page scaffolder.
// Creates the NEW empty rows of the six aisles that replace Cat 7; skips any page that already exists
// (the re-parented shipped rows olive-oil/cooking-oils/honey/vinegar/chocolate/spices/salt keep their pages).
// No candidate values; routing destinations only. Per docs/governance/category-7-dissolution-step0-event.md.
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const taxonomy = JSON.parse(fs.readFileSync(path.join(repoRoot, "data/taxonomy/hmtc-v2.json"), "utf8"));
const productsDir = path.join(repoRoot, "wiki/products");
const DATE = "2026-06-09";
const CATS = [30, 31, 32, 33, 34, 35];

function page(cat, sub) {
  return `---
title: "${sub.name.replace(/"/g, '\\"')}"
type: product-category
category: ${sub.slug}
hmtc_category: ${cat.n}
hmtc_category_name: "${cat.name}"
hmtc_row: ${sub.row}
hmtc_subcategory_name: "${sub.name.replace(/"/g, '\\"')}"
hmtc_taxonomy_version: "2.2"
hmtc_taxonomy_version_date: "${DATE}"
exposure_pathway: "${cat.exposure_pathway}"
regulatory_jurisdiction: "${cat.regulatory_jurisdiction.replace(/"/g, '\\"')}"
panel_metals: [Pb, iAs, Hg, Cd, Cr, Ni, Sn, Al]
audience: [regulator, educator, brand-legal, brand-qa, retailer-compliance]
products_status: scaffold
splits_locked: false
literature_scope: none
sources: 0
wiki_doi: null
updated: ${DATE}
---

# ${sub.name}

> **v2.2 Step Zero scaffold — Category ${cat.n} (${cat.name}), Row ${sub.row}.** New row from the Cat 7
> dissolution (\`docs/governance/category-7-dissolution-step0-event.md\`); carries **no candidate values**
> yet. Routing destination; sources populate it as ingest proceeds, then synthesis fills the evidence
> sections per CLAUDE.md Part 9.

## Literature scope

No sources are catalogued for this row yet.

## Sources

<!-- BEGIN: source-legend -->
<!-- END: source-legend -->
`;
}

let created = 0, skipped = 0;
for (const cat of taxonomy.categories) {
  if (!CATS.includes(cat.n)) continue;
  for (const sub of cat.subcategories) {
    const fp = path.join(productsDir, `${sub.slug}.md`);
    if (fs.existsSync(fp)) { skipped++; continue; }
    fs.writeFileSync(fp, page(cat, sub), "utf8");
    created++; console.log(`write Cat ${cat.n} r${sub.row}  ${sub.slug}`);
  }
}
console.log(`\nDone. ${created} created, ${skipped} skipped (already exist).`);
