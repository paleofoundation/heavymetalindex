#!/usr/bin/env node
// build-engine-context.mjs — the single obligation-and-provenance standards context the
// heavymetalcertified portal engine reads. Joins the compiled standards (source of truth for
// limits, per-country, provenance TYPE and native basis) with required-analytes.json (the
// authoritative per-lot testing obligations) into one projection per (product, variant).
//
// Why this exists (audit 2026-08-26): the app reads only a folded, stale finder projection and
// never reads the registry or the compiled standards, so for EVERY entry it emits a flat panel,
// bills all 10 analytes, orders content acid-digest ICP-MS even for contact materials, and — via
// the finder's per_market map — certifies to the SELECTED MARKET's looser local limit. Reading
// the compiled `value` (already the strictest-floor headline) as the pass/fail limit designs the
// market-loosening bug out; per_country is carried for reference only.
//
// Obligations: for a (category, slug) present in required-analytes.json the registry wins verbatim.
// For the ~34 categories not yet in the registry the obligation is DERIVED deterministically from
// the compiled cell type + tier + measurement basis + a defining-pathway table, and any ambiguous
// case is flagged so the portal fails safe (monitor / withhold), never a confident wrong panel.
//
// Output: data/workbench/standards/engine-context.json (index source of truth). A later fan-out
// step vendors it to cert + app with a staleness stamp.
//
// Usage: node tools/standards/build-engine-context.mjs [--out <path>]

import fs from "node:fs";
import path from "node:path";

const REPO = process.cwd();
const COMPILED_GLOB_DIR = path.join(REPO, "data/workbench/standards");
const REGISTRY = path.join(REPO, "data/workbench/standards/required-analytes.json");
const OUT = (() => {
  const i = process.argv.indexOf("--out");
  return i >= 0 ? process.argv[i + 1] : path.join(REPO, "data/workbench/standards/engine-context.json");
})();

// ── analyte model (mirrors the app's analytes.ts + the registry) ──────────────
const ANALYTE = {
  Pb: { tier: 1, species: false },
  Cd: { tier: 1, species: false },
  tAs: { tier: 1, species: false, screensFor: "iAs" },
  iAs: { tier: 1, species: true, parent: "tAs" },
  tHg: { tier: 1, species: false, screensFor: "MeHg" },
  MeHg: { tier: 1, species: true, parent: "tHg" },
  Ni: { tier: 2, species: false },
  Al: { tier: 2, species: false },
  Cr: { tier: 2, species: false, screensFor: "Cr-VI" }, // total chromium
  "Cr-VI": { tier: 2, species: true, parent: "Cr" },
  Sn: { tier: 2, species: false },
};
const TIER1_TOTALS = new Set(["Pb", "Cd", "tAs", "tHg"]);
const REFLEX_MAX_FRACTION = 0.5;

// ── measurement-basis classifier ──────────────────────────────────────────────
function classifyBasis(nativeBasis, categoryId) {
  const b = (nativeBasis || "").toLowerCase();
  // The PRIMARY basis is stated first; content bases add disclaimers ("never a migration or
  // leachate number") later, so migration is detected only in the leading phrase.
  const lead = b.slice(0, 110);
  if (categoryId === 26) return "usp_pde";
  if (/\busp\b|<232>|<2232>|\bpde\b|pharmacopeial/.test(b)) return "usp_pde";
  if (/accessible component|reach annex xvii entry 72|extractable element content of the homogeneous/.test(b))
    return "extraction_component";
  if (/migration|element release|leachate|release from|release into|soluble|scrape|0\.07 m hcl|en ?71-3|iso ?8124|10\/2011|84\/500|treated water/.test(lead))
    return "migration_release";
  // content-affirming (cosmetic/mucosal total-content, as-sold/as-consumed foods)
  if (/total (heavy-metal |element )?content|content basis|as[_ ]sold|as[_ ]consumed|as placed on market|per unit mass/.test(b))
    return "content";
  return "content";
}

function methodFor(code, basisClass) {
  if (basisClass === "usp_pde") return "USP <232>/<2232> PDE (ICP-MS/ICP-OES)";
  if (basisClass === "migration_release") {
    if (code === "Cr-VI") return "Cr(VI) migration/release (IC-ICP-MS on food simulant/extract)";
    return "element release / specific migration (ICP-MS on food simulant or EN 71-3 extract)";
  }
  if (basisClass === "extraction_component") return "component content / REACH extraction (acid digestion, ICP-MS)";
  // content
  if (code === "iAs") return "HPLC-ICP-MS (As speciation)";
  if (code === "MeHg") return "HPLC/GC-ICP-MS (Hg speciation)";
  if (code === "Cr-VI") return "IC-ICP-MS (Cr VI)";
  return "ICP-MS";
}

// ── defining-pathway tables (audit speciation map; slug/name/category) ─────────
function matches(hay, re) { return re.test(hay); }
function definingPathway(species, slug, name, categoryId) {
  const s = `${slug} ${name || ""}`.toLowerCase();
  if (species === "iAs") {
    if (matches(s, /\brice\b|rice-/) && !matches(s, /non-?rice|rice-free|no rice/)) return "rice / rice-derived";
    if (matches(s, /juice|apple|grape|cider/)) return "fruit juice (species-limited, often no parent total)";
    if (matches(s, /seaweed|kelp|nori|wakame|kombu|dulse|hijiki|algae|sargassum/)) return "seaweed / macroalgae (tAs is a misleading organoarsenic proxy)";
    if (categoryId === 16 && matches(s, /greens|superfood|clay|mineral|earth|bentonite|diatomaceous|zeolite|shilajit|algae|spirulina|chlorella/)) return "hyperaccumulator / geological supplement";
    return null;
  }
  if (species === "MeHg") {
    if (matches(s, /fish|seafood|shellfish|cephalopod|squid|octopus|tuna|salmon|anchov|sardine|mackerel|cod|marine|crab|shrimp|prawn|mollusc|mussel|oyster|clam|scallop/)) return "fish / marine biomagnification";
    if (matches(s, /(fish|seafood|marine|bone|meat).*(broth|stock|soup)|(broth|stock|soup).*(fish|seafood|marine)/)) return "fish/seafood composite (broth/stock)";
    if (categoryId === 17 && matches(s, /fish|marine|seafood|salmon|whitefish/)) return "marine-protein pet food";
    return null;
  }
  if (species === "Cr-VI") {
    if (categoryId === 8 || matches(s, /drinking[- ]?water|mineral[- ]?water|bottled[- ]?water|nursery[- ]?water|sparkling[- ]?water|spring water|purified water/)) return "drinking/mineral water (Cr-VI stable in aqueous matrix)";
    if (categoryId === 21 || matches(s, /toy|craft|paint|crayon|modeling|pigment|art/)) return "toys / arts-and-crafts (chromate pigments; EN 71-3 Cr-VI migration)";
    if (matches(s, /leather|tannery|chrome-tan/)) return "chrome-tanned leather";
    if (matches(s, /tattoo|permanent[- ]makeup|foundation|eyeshadow|eye-makeup|face[- ]paint/) || (categoryId === 13 && matches(s, /pigment|mineral|powder|blush/))) return "mineral-pigment cosmetics / tattoo inks";
    return null;
  }
  return null;
}

// ── cell readers ──────────────────────────────────────────────────────────────
function cellValue(cell) {
  if (cell == null) return null;
  const v = cell.value ?? cell.value_exact ?? null;
  return typeof v === "number" ? v : null;
}
function perCountryMap(cell) {
  const out = {};
  const pc = cell?.per_country;
  if (pc && typeof pc === "object") {
    for (const [k, v] of Object.entries(pc)) {
      const val = typeof v === "number" ? v : (typeof v?.value === "number" ? v.value : null);
      if (typeof val === "number") out[k] = val;
    }
  }
  return out;
}
// strictest applicable government limit (for the readiness hard-stop): the tightest of the
// compiled value + any per_country values that are gov-sourced. The compiled `value` is already
// the strictest-floor headline, so it is the natural government hard-stop for a gov/read_across cell.
function governmentLimit(cell, code) {
  const vals = [];
  const v = cellValue(cell);
  if (typeof v === "number" && (cell.type === "gov" || cell.type === "read_across" || cell.type === "screen")) vals.push(v);
  for (const val of Object.values(perCountryMap(cell))) vals.push(val);
  return vals.length ? Math.min(...vals) : null;
}

// ── obligation derivation (fallback contract) ─────────────────────────────────
function deriveObligation(code, cell, meta, basisClass, slug, name, categoryId, parentLimit) {
  const type = cell?.type ?? "control";
  const val = cellValue(cell);
  const hasFirm = typeof val === "number";
  const flagged = [];

  // Tier-1 totals: ALWAYS per_lot_total (guardrail), even if the cell is control/null.
  if (TIER1_TOTALS.has(code)) {
    const ob = { obligation: "per_lot_total", monitored: !hasFirm };
    if (!hasFirm) flagged.push("Tier-1 total has no firm limit — completion sweep incomplete; readiness must block, not pass");
    return { ...ob, flagged };
  }

  if (!meta.species) {
    // Tier-2 totals (Ni, Al, Sn) and total Cr.
    if (basisClass === "content") {
      // rides the base ICP-MS run; universal per-lot screen (monitored if no sovereign ceiling).
      return { obligation: "per_lot_total", monitored: !hasFirm, flagged };
    }
    // migration / extraction / usp bases: keep per_lot on the category's own method when the cell
    // carries a release/limit value; otherwise baseline_monitor (measured, recorded, never dropped).
    if (hasFirm) return { obligation: "per_lot_total", monitored: false, flagged };
    if (type === "not_material") return { obligation: "baseline_monitor", monitored: true, flagged };
    return { obligation: "baseline_monitor", monitored: true, flagged };
  }

  // Species: iAs, MeHg, Cr-VI.
  const parent = meta.parent;
  const path = definingPathway(code, slug, name, categoryId);
  if (path) {
    return { obligation: "mandatory_speciation", parent_total: parent, defining_pathway: path, monitored: false, flagged };
  }
  // structural: a species with its own firm limit and NO bounding parent-total limit → mandatory
  // (reflex is impossible with no total to take a fraction of, e.g. apple-juice iAs).
  if (hasFirm && (type === "gov" || type === "read_across") && parentLimit == null) {
    return { obligation: "mandatory_speciation", parent_total: parent, defining_pathway: "species regulated directly, no parent total (structural)", monitored: false, flagged };
  }
  // matrix-stability: Cr-VI reduces to Cr-III in food/lipid content matrices → not_applicable.
  if (code === "Cr-VI" && basisClass === "content") {
    if (type === "not_material" || type === "read_across" || type === "subsumed" || type === "control") {
      return { obligation: "not_applicable", parent_total: parent, monitored: false, reason: "Cr(VI) reduces to Cr(III) in food/lipid matrix; total Cr screened", flagged };
    }
  }
  // default: reflex, bounded by parent total.
  return { obligation: "reflex_speciation", parent_total: parent, monitored: false, flagged };
}

function reflexTrigger(cell, parentCell, meta) {
  // trigger = min(published species limit, 50% of parent-total limit)
  const caps = [];
  const parentLimit = cellValue(parentCell);
  if (typeof parentLimit === "number") caps.push(REFLEX_MAX_FRACTION * parentLimit);
  const speciesLimit = cellValue(cell);
  if (typeof speciesLimit === "number") caps.push(speciesLimit);
  return caps.length ? Math.min(...caps) : null;
}

// ── load registry ─────────────────────────────────────────────────────────────
const registry = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
const registryBySlug = new Map(); // slug -> { categoryId, analytes }
for (const [catId, cat] of Object.entries(registry.categories || {})) {
  for (const [slug, std] of Object.entries(cat.standards || {})) {
    registryBySlug.set(slug, { categoryId: Number(catId), std });
  }
}

// ── walk compiled standards ────────────────────────────────────────────────────
const products = [];
let flaggedCount = 0;
const obligationCounts = {};
const basisCounts = {};

const compiledDirs = fs.readdirSync(COMPILED_GLOB_DIR)
  .filter((d) => /^cat\d+-compiled$/.test(d))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

for (const dir of compiledDirs) {
  const categoryId = Number(dir.match(/\d+/)[0]);
  const abs = path.join(COMPILED_GLOB_DIR, dir);
  for (const f of fs.readdirSync(abs).filter((x) => x.endsWith(".json"))) {
    let j;
    try { j = JSON.parse(fs.readFileSync(path.join(abs, f), "utf8")); } catch { continue; }
    const slug = j.slug || f.replace(/\.json$/, "");
    const name = j.name || "";
    const variants = j.variants || (j.cells ? { default: j.cells } : {});
    const regEntry = registryBySlug.get(slug);

    for (const [variantKey, cells] of Object.entries(variants)) {
      const nativeBasis = j.native_basis || j.measurement_basis || cells._native_basis || "";
      const basisClass = classifyBasis(nativeBasis, categoryId);
      basisCounts[basisClass] = (basisCounts[basisClass] || 0) + 1;

      const analytes = {};
      for (const code of Object.keys(ANALYTE)) {
        const meta = ANALYTE[code];
        const cell = cells[code];
        const limitPpb = cellValue(cell);
        const provenanceType = cell?.type ?? "control";
        const perCountry = cell ? perCountryMap(cell) : {};

        let obl;
        const regA = regEntry?.std?.analytes?.[code];
        if (regA) {
          // registry wins verbatim
          obl = {
            obligation: regA.obligation,
            parent_total: regA.parent_total,
            reflex_trigger_ppb: regA.reflex_trigger_ppb,
            monitored: regA.governed === false || (limitPpb == null && !meta.species),
            source: "registry",
          };
        } else {
          const parentLimit = meta.parent ? cellValue(cells[meta.parent]) : null;
          const d = deriveObligation(code, cell, meta, basisClass, slug, name, categoryId, parentLimit);
          obl = { ...d, source: "derived" };
          if (obl.obligation === "reflex_speciation" && obl.reflex_trigger_ppb == null) {
            obl.reflex_trigger_ppb = reflexTrigger(cell, cells[meta.parent], meta);
          }
          if (Array.isArray(d.flagged) && d.flagged.length) flaggedCount += d.flagged.length;
        }
        obligationCounts[obl.obligation] = (obligationCounts[obl.obligation] || 0) + 1;

        analytes[code] = {
          tier: meta.tier,
          species: meta.species,
          parent: meta.parent ?? null,
          screensFor: meta.screensFor ?? null,
          limitPpb,                       // strictest-floor headline (pass/fail); NOT market-specific
          provenanceType,
          governmentLimitPpb: governmentLimit(cell, code), // for the readiness hard-stop
          perCountry,
          method: methodFor(code, basisClass),
          ...obl,
        };
      }

      products.push({
        categoryId,
        slug,
        variant: variantKey,
        name,
        nativeBasis,
        measurementBasis: basisClass,
        standardVersion: j.version || j.standard_version || null,
        registryBacked: !!regEntry,
        analytes,
      });
    }
  }
}

const out = {
  schema: "hmtc-engine-context/1.0",
  generated: new Date().toISOString().slice(0, 10),
  source_standard_version: "compiled@" + new Date().toISOString().slice(0, 10),
  note: "Joins compiled standards (strictest-floor value, per_country, provenance type, native basis) with required-analytes.json obligations. limitPpb is the strictest-floor pass/fail ceiling; per_country is reference only and must never loosen a Tier-1 limit. Basis-appropriate method per cell. Registry-backed categories use registry obligations verbatim; others are derived + flagged for fail-safe handling.",
  productCount: products.length,
  products,
};
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");

// ── report + self-check ─────────────────────────────────────────────────────────
console.log(`build-engine-context: ${products.length} (product,variant) rows from ${compiledDirs.length} categories -> ${path.relative(REPO, OUT)}`);
console.log("  basis:", JSON.stringify(basisCounts));
console.log("  obligations:", JSON.stringify(obligationCounts));
console.log(`  flagged cells (fail-safe): ${flaggedCount}`);
// self-check: Cat-30 olive-oil must match the registry
const olive = products.find((p) => p.slug === "olive-oil");
if (olive) {
  const got = Object.fromEntries(Object.entries(olive.analytes).map(([k, v]) => [k, v.obligation]));
  const want = { Pb: "per_lot_total", Cd: "per_lot_total", tAs: "per_lot_total", iAs: "reflex_speciation", tHg: "per_lot_total", MeHg: "reflex_speciation", Ni: "per_lot_total", Al: "per_lot_total", Cr: "per_lot_total", "Cr-VI": "not_applicable", Sn: "per_lot_total" };
  const mismatch = Object.keys(want).filter((k) => got[k] !== want[k]);
  console.log(`  self-check olive-oil vs registry: ${mismatch.length ? "MISMATCH " + mismatch.map((k) => `${k}:${got[k]}!=${want[k]}`).join(",") : "OK (8 per_lot_total, iAs/MeHg reflex, Cr-VI not_applicable)"}`);
}
