#!/usr/bin/env node
// v2.2 Cat 7 dissolution: re-parent the shipped Cat 7 rows to Cat 30-35 / Cat 24.
// RE-PARENT ONLY: changes hmtc_category/hmtc_row/hmtc_category_name in frontmatter; the body and every
// shipped per-analyte value/basis/confidence are left verbatim. Page slugs unchanged (source routing intact).
// Per docs/governance/category-7-dissolution-step0-event.md.
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const dir = path.join(repoRoot, "wiki/products");
const NAME = {
  24: "Dairy and Milk Products", 30: "Culinary Oils and Fats", 31: "Sweeteners and Syrups",
  32: "Condiments, Sauces and Dressings", 33: "Chocolate, Cocoa and Confectionery",
  34: "Herbs, Spices, Seasonings and Salt", 35: "Prepared and Packaged Meals",
};
// slug -> [newCat, newRow]
const MAP = {
  "olive-oil": [30, 1], "cooking-oils-other": [30, 2],
  "honey": [31, 1],
  "vinegar": [32, 1],
  "chocolate": [33, 1],
  "spices": [34, 1], "salt": [34, 2],
  "butter-and-ghee": [24, 9],
  "mixed-meals-prepared-foods": [35, 1],
};

function setFM(fm, key, value, afterKey) {
  const re = new RegExp(`^${key}:.*$`, "m");
  if (re.test(fm)) return fm.replace(re, `${key}: ${value}`);
  const afterRe = new RegExp(`^(${afterKey}:.*)$`, "m");
  if (afterKey && afterRe.test(fm)) return fm.replace(afterRe, `$1\n${key}: ${value}`);
  return fm.replace(/^/, `${key}: ${value}\n`);
}

let n = 0;
for (const [slug, [cat, row]] of Object.entries(MAP)) {
  const fp = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(fp)) { console.log(`MISSING ${slug}`); continue; }
  const raw = fs.readFileSync(fp, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { console.log(`NO-FRONTMATTER ${slug}`); continue; }
  let fm = m[1];
  const oldCat = (fm.match(/^hmtc_category:\s*(.+)$/m) || [])[1];
  fm = setFM(fm, "hmtc_category", cat, "type");
  fm = setFM(fm, "hmtc_category_name", `"${NAME[cat]}"`, "hmtc_category");
  fm = setFM(fm, "hmtc_row", row, "hmtc_category_name");
  fm = setFM(fm, "hmtc_taxonomy_version", '"2.2"', "hmtc_row");
  fm = setFM(fm, "updated", "2026-06-09", null);
  fs.writeFileSync(fp, `---\n${fm}\n---\n${m[2]}`, "utf8");
  console.log(`re-parented ${slug}: Cat ${oldCat} -> Cat ${cat} r${row}`);
  n++;
}
console.log(`\nDone. ${n} re-parented (values preserved verbatim).`);
