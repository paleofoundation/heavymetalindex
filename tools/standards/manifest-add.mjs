#!/usr/bin/env node
// manifest-add.mjs — add/override verified anchors in the completeness manifest.
// Usage: node tools/standards/manifest-add.mjs "slug:Metal=regId" "slug:Metal=regId" ...
//        node tools/standards/manifest-add.mjs --same "Metal=regId,Metal=regId" slug1 slug2 ...
import fs from "node:fs";
const P = "data/workbench/standards/completeness-anchors.json";
const m = JSON.parse(fs.readFileSync(P, "utf8"));
const args = process.argv.slice(2);
let n = 0;
if (args[0] === "--same") {
  const pairs = args[1].split(",").map((s) => s.trim()).filter(Boolean).map((s) => s.split("="));
  for (const slug of args.slice(2)) { m[slug] = m[slug] || {}; for (const [metal, id] of pairs) { m[slug][metal] = id; n++; } }
} else {
  for (const a of args) {
    const [lhs, id] = a.split("=");
    const [slug, metal] = lhs.split(":");
    m[slug] = m[slug] || {}; m[slug][metal] = id; n++;
  }
}
fs.writeFileSync(P, JSON.stringify(m, null, 2) + "\n");
console.log(`manifest-add: set ${n} anchor(s)`);
