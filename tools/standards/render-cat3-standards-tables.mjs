#!/usr/bin/env node
// render-cat3-standards-tables.mjs
//
// Renders the STAFF-SIDE Category-3 (Grains, Cereals, and Rice Products) standards tables from the
// deterministic government-limit compiler output (data/workbench/standards/cat3-compiled/*.json).
// Output is a workbench markdown table under data/workbench/standards/, NOT a public wiki page:
// per the Part-2 / Part-19 firewall the numeric standard is staff/HMTc content and never renders on
// a heavymetalindex.com URL. Re-run after any config/compile change; idempotent.
//
// Usage: node tools/standards/render-cat3-standards-tables.mjs

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const DIR = path.join(REPO, "data/workbench/standards/cat3-compiled")
const OUT = path.join(REPO, "data/workbench/standards/cat3-standards-tables.md")
const PANEL = ["Pb", "iAs", "tAs", "tHg", "MeHg", "Cd", "Cr-VI", "Ni", "Sn", "Al"]

// Presentation order: non-rice (clean) block, then rice (dirty) block, matching the roles register.
const ORDER = [
  "flour-non-rice", "bread-and-baked-goods", "pasta-wheat-based", "breakfast-cereal-non-rice",
  "other-grain-products", "grain-based-snacks",
  "rice-bulk-grain", "pasta-rice-based", "rice-noodles", "breakfast-cereal-rice-based",
  "rice-snacks-crackers", "rice-beverages-rice-milk",
]
const DIRTY = new Set(["rice-bulk-grain", "pasta-rice-based", "rice-noodles", "breakfast-cereal-rice-based", "rice-snacks-crackers", "rice-beverages-rice-milk"])

function cellText(c) {
  if (!c) return "—"
  if (c.type === "gov") return `**${c.value}** ${c.binding_jurisdiction}`
  if (c.type === "read_across") {
    if (c.basis_kind === "occurrence") return `${c.value} (occ)`
    if (c.basis_kind === "precautionary") return `${c.value} (prec)`
    return `${c.value} (RA ${c.source_jurisdiction})`
  }
  if (c.type === "not_material") return "n/m"
  if (c.type === "gap") return "GAP"
  return "—"
}
function cellId(c) {
  if (!c) return ""
  if (c.type === "gov") return c.binding_id
  if (c.type === "read_across") return c.source_id
  if (c.type === "not_material") return "not-material"
  return c.type
}

const records = ORDER.map((slug) => JSON.parse(fs.readFileSync(path.join(DIR, `${slug}.json`), "utf8")))

let md = ""
md += `# Category 3 — Grains, Cereals, and Rice Products: HMTc standards tables (staff-side)\n\n`
md += `Generated ${"2026-08-10"} by \`tools/standards/render-cat3-standards-tables.mjs\` from the government-limit compiler output in \`data/workbench/standards/cat3-compiled/\`. **Staff/HMTc content — not a public wiki page** (Part 2 / Part 19 firewall). Values in ppb (µg/kg). Native basis per subcategory. Method: HMTc Method v2.0 government-limit default (strictest credible government ML by lookup, converted to native basis; occurrence pooling not invoked — see the derivation note). Full HMTc 10-analyte panel (Pb, iAs, tAs, tHg, MeHg, Cd, Cr-VI, Ni, Sn, Al); every cell resolves explicitly to a government limit or a substantiated not-material determination. "n/m" = registered not-material or confirmed no-ML (see \`standards-not-material.csv\` / \`standards-no-ml-confirmed.csv\`).\n\n`

md += `## Binding limit per (subcategory, analyte)\n\n`
md += `| # | Subcategory | Role | Basis | ${PANEL.join(" | ")} |\n`
md += `|---|---|---|---|${PANEL.map(() => "---").join("|")}|\n`
records.forEach((r, i) => {
  const role = DIRTY.has(r.slug) ? "dirty (rice)" : "clean (non-rice)"
  const cells = PANEL.map((a) => cellText(r.variants.both[a])).join(" | ")
  md += `| ${i + 1} | ${r.name} | ${role} | ${r.native_basis} | ${cells} |\n`
})

md += `\n## Provenance — binding register row per cell\n\n`
for (const r of records) {
  md += `\n### ${r.name} \`${r.slug}\` (${DIRTY.has(r.slug) ? "dirty/rice" : "clean/non-rice"}, native ${r.native_basis})\n\n`
  md += `| Analyte | Value (ppb) | Type | Binding row / determination |\n|---|---|---|---|\n`
  for (const a of PANEL) {
    const c = r.variants.both[a]
    const v = c?.value == null ? (c?.type === "not_material" ? "n/m" : c?.type === "gap" ? "GAP" : "—") : c.value
    md += `| ${a} | ${v} | ${c?.type ?? "—"} | \`${cellId(c)}\` |\n`
  }
}

fs.writeFileSync(OUT, md)
console.log(`wrote ${path.relative(REPO, OUT)} (${records.length} subcategories)`)
