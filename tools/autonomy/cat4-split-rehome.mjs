#!/usr/bin/env node
// v2.2 Phase A: re-home the 11 Cat 4 non-produce rows to new Cat 27/28/29.
// Mechanical frontmatter re-parent (hmtc_category/hmtc_row/hmtc_category_name); page slugs unchanged
// so source declarations keep routing. Per docs/governance/category-4-split-step0-amendment-2.md.
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const dir = path.join(repoRoot, "wiki/products");
const NAMES = { 27: "Legumes and Pulses", 28: "Nuts, Seeds, and Their Butters", 29: "Edible Fungi" };
// slug -> [newCat, newRow]
const MAP = {
  "legumes-pulses-other": [27, 1], "soy-products": [27, 2], "peanuts": [27, 3], "peanut-butter": [27, 4],
  "nuts-seeds-other": [28, 1], "cashews": [28, 2], "sunflower-seeds": [28, 3],
  "nut-seed-butters-other": [28, 4], "sunflower-seed-butter": [28, 5],
  "cultivated-mushrooms": [29, 1], "wild-mushrooms": [29, 2],
};

function setFM(fm, key, value, afterKey) {
  const re = new RegExp(`^${key}:.*$`, "m");
  if (re.test(fm)) return fm.replace(re, `${key}: ${value}`);
  // insert after afterKey line if present, else after the opening ---
  const afterRe = new RegExp(`^(${afterKey}:.*)$`, "m");
  if (afterKey && afterRe.test(fm)) return fm.replace(afterRe, `$1\n${key}: ${value}`);
  return fm.replace(/^---\n/, `---\n${key}: ${value}\n`);
}

let n = 0;
for (const [slug, [cat, row]] of Object.entries(MAP)) {
  const fp = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(fp)) { console.log(`MISSING ${slug}`); continue; }
  const raw = fs.readFileSync(fp, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { console.log(`NO-FRONTMATTER ${slug}`); continue; }
  let fm = m[1];
  fm = setFM(fm, "hmtc_category", cat, "type");
  fm = setFM(fm, "hmtc_category_name", `"${NAMES[cat]}"`, "hmtc_category");
  fm = setFM(fm, "hmtc_row", row, "hmtc_category_name");
  fm = setFM(fm, "hmtc_taxonomy_version", '"2.2"', "hmtc_row");
  fm = setFM(fm, "updated", "2026-06-09", null);
  fs.writeFileSync(fp, `---\n${fm}\n---\n${m[2]}`, "utf8");
  console.log(`re-homed ${slug} -> Cat ${cat} r${row}`);
  n++;
}
console.log(`\nDone. ${n} re-homed.`);
