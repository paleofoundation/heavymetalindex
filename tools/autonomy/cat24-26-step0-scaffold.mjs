#!/usr/bin/env node
// Cat 24-26 (v2.1) Step Zero row-page scaffolder.
// Generates the row pages for the three v2.1 categories (24 Dairy, 25 Cannabis/Hemp/CBD,
// 26 Peptides/SARMs/Research Chemicals) from data/taxonomy/hmtc-v2.json, using the same
// locked-row scaffold template the cat2/4/6/7 scaffolders use (see wiki/products/supplements-enzymes.md).
// Idempotent: skips any page that already exists (never clobbers a master or an evidence-bearing page).
// No candidate values are written — these are routing destinations only, per
// docs/governance/taxonomy-reorganization-2026-06.md.
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const taxonomy = JSON.parse(fs.readFileSync(path.join(repoRoot, "data/taxonomy/hmtc-v2.json"), "utf8"));
const productsDir = path.join(repoRoot, "wiki/products");
const DATE = "2026-06-08";

function page(cat, sub) {
  const catN = cat.n;
  const catName = cat.name;
  return `---
title: "${sub.name.replace(/"/g, '\\"')}"
type: product-category
category: ${sub.slug}
hmtc_category: ${catN}
hmtc_category_name: "${catName}"
hmtc_row: ${sub.row}
hmtc_subcategory_name: "${sub.name.replace(/"/g, '\\"')}"
hmtc_taxonomy_version: "2.1"
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

> **v2.1 Step Zero scaffold — Category ${catN} (${catName}), Row ${sub.row}.** This row is defined in
> the taxonomy and its Step Zero lock (\`docs/governance/category-${catN}-step0-lock.md\`) but carries
> **no candidate values** yet. It is a routing destination. Sources populate it as ingest proceeds,
> after which a synthesis pass fills the evidence sections per CLAUDE.md Part 9.

## Literature scope

No sources are catalogued for this row yet.

## Sources

<!-- BEGIN: source-legend -->
<!-- END: source-legend -->
`;
}

let created = 0, skipped = 0;
for (const cat of taxonomy.categories) {
  if (![24, 25, 26].includes(cat.n)) continue;
  for (const sub of cat.subcategories) {
    const fp = path.join(productsDir, `${sub.slug}.md`);
    if (fs.existsSync(fp)) { skipped++; console.log(`skip  (exists)  ${sub.slug}`); continue; }
    fs.writeFileSync(fp, page(cat, sub), "utf8");
    created++; console.log(`write Cat ${cat.n} r${sub.row}  ${sub.slug}`);
  }
}
console.log(`\nDone. ${created} created, ${skipped} skipped.`);
