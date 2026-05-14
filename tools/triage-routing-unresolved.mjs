#!/usr/bin/env node
// Triage routing-unresolved entries per session prompt 2026-05-13.
//
// Applies category-1 (slug typo/convention drift) and category-2
// (below-threshold redirect to parent) fixes to source-page frontmatter.
// Leaves category-3 (new-page proposals) and category-4 (detector bugs)
// untouched — those are reported at the end.
//
// Run: node tools/triage-routing-unresolved.mjs

import fs from 'fs';
import path from 'path';

const WIKI_DIR = 'wiki/sources';

// ── Ingredient slug corrections ────────────────────────────────────────────
const INGREDIENT_FIX = {
  // Marine / aquatic protein
  'almond-milk':           'plant-milk',
  'anadromous-fish':       'seafood',
  'bivalves':              'bivalve-molluscs',
  'canned-fish':           'tinned-fish',
  'canned-tuna':           'tinned-fish',
  'carp':                  'freshwater-fish',
  'catfish':               'freshwater-fish',
  'cephalopods':           'shellfish',
  'clams':                 'bivalve-molluscs',
  'crab':                  'shellfish',
  'crayfish':              'shellfish',
  'crustaceans':           'shellfish',
  'fermented-fish':        'seafood',
  'fish-oil':              'seafood',
  'fish-seafood':          'seafood',
  'gilthead-seabream':     'seafood',
  'herring':               'seafood',
  'krill-oil':             'seafood',
  'largemouth-bass':       'freshwater-fish',
  'marine-fish':           'seafood',
  'mollusks':              'shellfish',
  'mullet':                'seafood',
  'mussel':                'bivalve-molluscs',
  'mussels':               'bivalve-molluscs',
  'nile-tilapia':          'freshwater-fish',    // temp; pending tilapia page
  'oyster':                'bivalve-molluscs',
  'pelagic-fish':          'seafood',
  'perch':                 'freshwater-fish',
  'periwinkles':           'shellfish',
  'pike':                  'freshwater-fish',
  'salted-fish':           'seafood',
  'salmon':                'seafood',
  'sardine':               'seafood',
  'scallop':               'shellfish',
  'seabream':              'seafood',
  'shrimp':                'shellfish',
  'sturgeon':              'seafood',
  'swordfish':             'seafood',
  'trout':                 'freshwater-fish',
  // Seaweed/algae group — temp redirect to seafood pending seaweed page approval
  'algae':                 'seafood',
  'chlorella':             'seafood',
  'duckweed':              'seafood',
  'kelp':                  'seafood',
  'kombu-kelp':            'seafood',
  'laver':                 'seafood',
  'spirulina':             'seafood',
  'water-lentils':         'seafood',
  // Leafy greens / vegetables
  'bok-choy':              'leafy-greens',
  'brassica':              'leafy-greens',
  'cabbage':               'leafy-greens',
  'chili-pepper':          'vegetables',
  'eggplant':              'vegetables',
  'kale':                  'leafy-greens',
  'leafy-vegetables':      'leafy-greens',
  'okra':                  'vegetables',
  'pak-choi':              'leafy-greens',
  'swiss-chard':           'leafy-greens',
  'bottle-gourd':          'vegetables',
  'zucchini':              'vegetables',
  // Alliums
  'leeks':                 'onions',
  'onion':                 'onions',
  'spring-onion':          'onions',
  // Grains / cereals
  'amaranth':              'non-rice-grains',
  'barley':                'non-rice-grains',
  'bread':                 'wheat',
  'brown-rice':            'rice',
  'durum-wheat':           'wheat',
  'grain':                 'cereals',
  'millet':                'non-rice-grains',
  'oats':                  'oat',
  'rice-bran':             'rice',
  'rye':                   'non-rice-grains',
  'sorghum':               'non-rice-grains',
  'tef':                   'non-rice-grains',
  'wheat-flour':           'wheat',
  'wheat-grain':           'wheat',
  'white-rice':            'rice',
  'whole-grain':           'cereals',
  'sweet-corn':            'corn',
  'maize':                 'corn',
  // Legumes
  'beans':                 'lentils',
  'cowpea':                'lentils',
  'legumes':               'lentils',
  'peas':                  'lentils',
  // Fruits
  'apple-puree':           'applesauce',
  'cherry-juice':          'fruit-juice',
  'citrus':                'fruit',
  'fruits':                'fruit',
  'grape':                 'fruit',
  'lemon':                 'fruit',
  'lime':                  'fruit',
  'mango':                 'fruit',
  'orange':                'oranges',
  'pear-juice':            'fruit-juice',
  'pomegranate-juice':     'fruit-juice',
  'prune-juice':           'fruit-juice',
  'wine':                  'fruit',
  // Nuts / seeds
  'nuts':                  'almond',
  'nuts-seeds':            'almond',
  'peanut':                'peanuts',
  'sesame':                'herbal-botanicals',
  // Dairy
  'cow-milk':              'milk-and-dairy',
  'dairy':                 'milk-and-dairy',
  'dairy-milk':            'milk-and-dairy',
  'ice-cream':             'milk-and-dairy',
  'milk':                  'milk-and-dairy',
  'human-milk':            'breastmilk',
  'cheese':                'milk-and-dairy',
  // Cocoa / chocolate
  'cacao':                 'cocoa',
  'cocoa-beans':           'cocoa',
  'dark-chocolate':        'chocolate',
  // Beverages (plant-based)
  'oat-milk':              'plant-milk',
  'plant-based-milk':      'plant-milk',
  'rice-milk':             'plant-milk',
  'soy-milk':              'plant-milk',
  // Tea / kombucha
  'green-tea':             'camellia-sinensis',
  'kombucha':              'camellia-sinensis',
  'tea':                   'camellia-sinensis',
  // Water
  'drinking-water':        'water',
  // Soy
  'soybean':               'soy',
  'soybeans':              'soy',
  // Meat / poultry / offal
  'beef-liver':            'organ-meats',
  'bushmeat':              'meat-and-poultry',
  'camel-meat':            'meat-and-poultry',
  'chicken-meat':          'chicken',
  'duck-eggs':             'eggs',
  'game-meat':             'meat-and-poultry',
  'kangaroo':              'meat-and-poultry',
  'offal':                 'organ-meats',
  'organ-meat':            'organ-meats',
  'pheasant':              'poultry',
  'polar-bear-meat':       'meat-and-poultry',
  'poultry-eggs':          'eggs',
  'poultry-liver':         'organ-meats',
  'poultry-offal':         'organ-meats',
  'quail-meat':            'poultry',
  'sheep-liver':           'organ-meats',
  'venison':               'meat-and-poultry',
  'venison-liver':         'organ-meats',
  'wild-game-meat':        'meat-and-poultry',
  // Herbs / spices / supplements
  'aniseed':               'herbal-botanicals',
  'ayurvedic-supplements': 'herbal-botanicals',
  'black-pepper':          'herbal-botanicals',
  'cannabis':              'herbal-botanicals',
  'cinnamon':              'herbal-botanicals',
  'coriander':             'herbal-botanicals',
  'cumin':                 'herbal-botanicals',
  'dietary-supplements':   'herbal-botanicals',
  'dried-mint':            'herbal-botanicals',
  'garlic':                'herbal-botanicals',
  'garlic-powder':         'herbal-botanicals',
  'ginger':                'herbal-botanicals',
  'hemp':                  'herbal-botanicals',
  'herbal-medicines':      'herbal-botanicals',
  'herbal-plants':         'herbal-botanicals',
  'herbal-supplements':    'herbal-botanicals',
  'herbal-tinctures':      'herbal-botanicals',
  'medicinal-herbs':       'herbal-botanicals',
  'mint':                  'herbal-botanicals',
  'nutmeg':                'herbal-botanicals',
  'oregano':               'herbal-botanicals',
  'paprika':               'herbal-botanicals',
  'parsley':               'herbal-botanicals',
  'pepper':                'herbal-botanicals',
  'peppermint':            'herbal-botanicals',
  'pollen':                'herbal-botanicals',
  'red-chili':             'herbal-botanicals',
  'rosemary':              'herbal-botanicals',
  'spices':                'herbal-botanicals',
  'sumac':                 'herbal-botanicals',
  'thyme':                 'herbal-botanicals',
  'tobacco':               'herbal-botanicals',
  'traditional-chinese-medicine': 'herbal-botanicals',
  'traditional-indian-medicine':  'herbal-botanicals',
  'white-pepper':          'herbal-botanicals',
  // Misc
  'cassava':               'root-vegetables',
  'edible-insects':        'non-soy-protein-source',
  'high-fructose-corn-syrup': 'corn',
  'infant-formula':        'infant-formula-powder',
  'insect-protein':        'non-soy-protein-source',
  'mushrooms':             'wild-mushrooms',
  'potato':                'potatoes',
  'tomatoes':              'tomato',
  // Additional entries from newly-ingested source pages
  'peppers':               'herbal-botanicals',
  'breakfast-cereals':     'cereals',
  'lamb':                  'meat-and-poultry',
  'pork':                  'meat-and-poultry',
  'corn-flour':            'corn',
  'rye-flour':             'non-rice-grains',
  'buckwheat':             'non-rice-grains',
  'cereal-bran':           'cereals',
  // No-good-parent entries — remove from ingredients array
  'food-additives':        null,
  'processed-foods':       null,
  'canned-foods':          null,
};

// ── Product → Ingredient moves ─────────────────────────────────────────────
const PRODUCT_TO_INGREDIENT = {
  'beef':             'beef',
  'bread':            'wheat',
  'bread-and-cereals':'cereals',
  'canned-fish':      'tinned-fish',
  'canned-tuna':      'tinned-fish',
  'cereals-grains':   'cereals',
  'cheese':           'milk-and-dairy',
  'chocolate':        'chocolate',
  'dairy':            'milk-and-dairy',
  'dark-chocolate':   'chocolate',
  'dietary-supplements': 'herbal-botanicals',
  'eggs':             'eggs',
  'fermented-fish':   'seafood',
  'fish':             'fish',
  'fish-and-seafood': 'seafood',
  'fish-seafood':     'seafood',
  'flavored-milk':    'milk-and-dairy',
  'freshwater-fish':  'freshwater-fish',
  'fruits':           'fruit',
  'game-meat':        'meat-and-poultry',
  'grain-cereals':    'cereals',
  'herbal-supplements': 'herbal-botanicals',
  'kelp-powder':      'seafood',
  'meat':             'meat',
  'meat-and-poultry': 'meat-and-poultry',
  'pasteurized-milk': 'milk-and-dairy',
  'pet-food':         null,   // out of scope; remove from products
  'plant-based-beverages': 'plant-milk',
  'poultry-meat':     'poultry',
  'raw-milk':         'milk-and-dairy',
  'salted-fish':      'seafood',
  'seafood-canned':   'tinned-fish',
  'seafood-fresh':    'seafood',
  'seaweed-supplements': 'seafood',
  'shellfish':        'shellfish',
  'vegetables':       'vegetables',
  // Additional from newly-ingested source pages
  'bread-and-baked-goods': 'wheat',
  'canned-vegetables':  'vegetables',
  'breakfast-cereals':  'cereals',
  'biscuits':           'cereals',
};

// ── Product → Product corrections ─────────────────────────────────────────
const PRODUCT_FIX = {
  'baby-food':             'infant-and-child-foods-master',
  'baby-food-grain-based': 'infant-and-child-foods-master',
  'baby-food-purees':      'infant-and-child-foods-master',
  'baby-snacks':           'infant-and-child-foods-master',
  'fermented-beverages':   'fermented-beverages-non-tea-based',
  'fruit-puree-pouches':   'fruit-purees',
  'herbal-tea':            'herbal-botanical-infusions',
  'infant-cereal':         'baby-cereals-dry-rice-based',
  'infant-rice-cereal':    'baby-cereals-dry-rice-based',
  'kombucha':              'kombucha-tea-based',
};

// ── NEW-PAGE PROPOSALS (category 3 — no frontmatter changes) ───────────────
export const NEW_PAGE_PROPOSALS = [
  { kind: 'ingredient', slug: 'tilapia', count: 11,
    note: 'Freshwater aquaculture fish with distinct Cd/Pb/Hg profile; above 5-paper threshold.' },
  { kind: 'product', slug: 'seafood', count: 13,
    note: 'CLAUDE.md Part 4 explicitly names seafood as a product-category example. 13 sources declare products: seafood.' },
  { kind: 'ingredient', slug: 'seaweed', count: 8,
    note: 'Marine macroalgae group (kelp, laver, kombu-kelp, spirulina, chlorella as aliases). 8 direct declarations + 6 sub-variant entries. Temp redirect to seafood until approved.' },
  { kind: 'ingredient', slug: 'turmeric', count: 6,
    note: 'Documented lead-adulteration commodity with FDA import alert. 6 papers above threshold.' },
  { kind: 'ingredient', slug: 'tuna', count: 6,
    note: 'Primary MeHg/tHg concern in seafood; distinct contamination profile. 6 papers at threshold.' },
  { kind: 'ingredient', slug: 'lettuce', count: 6,
    note: 'Six papers above threshold but all co-declare leafy-vegetables → leafy-greens. Recommend as alias on leafy-greens.md until Karen decides on standalone page.' },
];

// ── Utility ─────────────────────────────────────────────────────────────────

/** Parse ingredients or products wikilink array from a frontmatter line.
 *  Returns array of slug strings.
 */
function parseArrayLine(line) {
  const slugs = [];
  const re = /\[\[(?:ingredients|products)\/([^\]]+)\]\]/g;
  let m;
  while ((m = re.exec(line)) !== null) slugs.push(m[1]);
  return slugs;
}

/** Rebuild a YAML wikilink array line for ingredients or products. */
function buildArrayLine(kind, slugs) {
  if (slugs.length === 0) return `${kind}: []`;
  const items = slugs.map(s => `"[[${kind}/${s}]]"`).join(', ');
  return `${kind}: [${items}]`;
}

/** Apply all corrections to a single source page's content.
 *  Returns { content, changed, log[] }.
 */
function applyCorrections(content, items) {
  // Parse existing ingredients and products from frontmatter
  const ingLineMatch = content.match(/^(ingredients: \[)(.*)\]$/m);
  const prodLineMatch = content.match(/^(products: \[)(.*)\]$/m);

  if (!ingLineMatch && !prodLineMatch) {
    return { content, changed: false, log: ['  SKIP: no ingredients/products arrays found'] };
  }

  let ingSlugs = ingLineMatch ? parseArrayLine(ingLineMatch[0]) : [];
  let prodSlugs = prodLineMatch ? parseArrayLine(prodLineMatch[0]) : [];
  const origIngSlugs = [...ingSlugs];
  const origProdSlugs = [...prodSlugs];
  const log = [];

  for (const { targetKind, declaredTarget } of items) {
    if (targetKind === 'ingredient') {
      if (declaredTarget in INGREDIENT_FIX) {
        const newSlug = INGREDIENT_FIX[declaredTarget];
        const idx = ingSlugs.indexOf(declaredTarget);
        if (idx !== -1) {
          if (newSlug === null) {
            ingSlugs.splice(idx, 1);
            log.push(`  REMOVE ingredient/${declaredTarget}`);
          } else {
            // Only replace if newSlug not already present
            if (!ingSlugs.includes(newSlug)) {
              ingSlugs[idx] = newSlug;
              log.push(`  FIX ingredient/${declaredTarget} → ingredient/${newSlug}`);
            } else {
              // newSlug already present — just remove the old one
              ingSlugs.splice(idx, 1);
              log.push(`  DEDUP: removed ingredient/${declaredTarget} (${newSlug} already present)`);
            }
          }
        }
      }
      // else: new-page proposal, leave alone
    } else if (targetKind === 'product') {
      if (declaredTarget in PRODUCT_TO_INGREDIENT) {
        const newIngSlug = PRODUCT_TO_INGREDIENT[declaredTarget];
        const idx = prodSlugs.indexOf(declaredTarget);
        if (idx !== -1) {
          prodSlugs.splice(idx, 1);
          if (newIngSlug !== null && !ingSlugs.includes(newIngSlug)) {
            ingSlugs.push(newIngSlug);
            log.push(`  MOVE product/${declaredTarget} → ingredient/${newIngSlug}`);
          } else if (newIngSlug === null) {
            log.push(`  REMOVE product/${declaredTarget} (out of scope)`);
          } else {
            log.push(`  DEDUP: product/${declaredTarget} removed (ingredient/${newIngSlug} already present)`);
          }
        }
      } else if (declaredTarget in PRODUCT_FIX) {
        const newProdSlug = PRODUCT_FIX[declaredTarget];
        const idx = prodSlugs.indexOf(declaredTarget);
        if (idx !== -1) {
          if (!prodSlugs.includes(newProdSlug)) {
            prodSlugs[idx] = newProdSlug;
            log.push(`  FIX product/${declaredTarget} → product/${newProdSlug}`);
          } else {
            prodSlugs.splice(idx, 1);
            log.push(`  DEDUP: removed product/${declaredTarget} (${newProdSlug} already present)`);
          }
        }
      }
      // else: new-page proposal (seafood, etc.), leave alone
    }
  }

  // Deduplicate (final pass)
  ingSlugs = [...new Set(ingSlugs)];
  prodSlugs = [...new Set(prodSlugs)];

  const changed =
    JSON.stringify(ingSlugs) !== JSON.stringify(origIngSlugs) ||
    JSON.stringify(prodSlugs) !== JSON.stringify(origProdSlugs);

  if (!changed) return { content, changed: false, log: [] };

  // Rebuild the frontmatter lines
  let updated = content;
  if (ingLineMatch) {
    updated = updated.replace(ingLineMatch[0], buildArrayLine('ingredients', ingSlugs));
  }
  if (prodLineMatch) {
    updated = updated.replace(prodLineMatch[0], buildArrayLine('products', prodSlugs));
  }

  return { content: updated, changed: true, log };
}

// ── Main ────────────────────────────────────────────────────────────────────

const csvPath = 'data/evidence/routing_unresolved.csv';
const csvLines = fs.readFileSync(csvPath, 'utf8').split('\n').slice(1).filter(Boolean);

// Build map: source_page → list of corrections
const correctionsByPage = new Map();

for (const line of csvLines) {
  // CSV columns: source_id, source_page, target_kind, declared_target, note
  // declared_target is the 4th field; note may contain commas so use split limit
  const parts = line.split(',');
  const sourcePage = parts[1]?.trim();
  const targetKind = parts[2]?.trim();
  const declaredTarget = parts[3]?.trim().replace(/^"|"$/g, '');
  if (!sourcePage || !targetKind || !declaredTarget) continue;

  if (!correctionsByPage.has(sourcePage)) correctionsByPage.set(sourcePage, []);
  correctionsByPage.get(sourcePage).push({ targetKind, declaredTarget });
}

const stats = {
  pagesModified: 0,
  ingredientFixes: 0,
  productToIngredient: 0,
  productFixes: 0,
  removals: 0,
  dedups: 0,
  skippedProposals: 0,
  errors: [],
};

const allLogs = [];

for (const [sourcePage, items] of correctionsByPage) {
  const fullPath = path.join(process.cwd(), sourcePage);
  if (!fs.existsSync(fullPath)) {
    stats.errors.push(`File not found: ${sourcePage}`);
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const { content: updated, changed, log } = applyCorrections(content, items);

  if (changed) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    stats.pagesModified++;

    for (const entry of log) {
      allLogs.push(sourcePage + '\n' + entry);
      if (entry.includes('FIX ingredient')) stats.ingredientFixes++;
      else if (entry.includes('MOVE product')) stats.productToIngredient++;
      else if (entry.includes('FIX product')) stats.productFixes++;
      else if (entry.includes('REMOVE')) stats.removals++;
      else if (entry.includes('DEDUP')) stats.dedups++;
    }
  }

  // Count skipped proposals
  for (const { targetKind, declaredTarget } of items) {
    const isProposal = NEW_PAGE_PROPOSALS.some(p => p.slug === declaredTarget);
    if (isProposal) stats.skippedProposals++;
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
console.log('\n=== Routing Triage Results ===\n');
console.log(`Pages modified:               ${stats.pagesModified}`);
console.log(`  Ingredient slug fixes:      ${stats.ingredientFixes}`);
console.log(`  Product → ingredient moves: ${stats.productToIngredient}`);
console.log(`  Product slug fixes:         ${stats.productFixes}`);
console.log(`  Entries removed:            ${stats.removals}`);
console.log(`  Duplicates deduplicated:    ${stats.dedups}`);
console.log(`  Skipped (new-page proposals): ${stats.skippedProposals}`);
if (stats.errors.length) {
  console.log(`\nErrors (${stats.errors.length}):`);
  stats.errors.forEach(e => console.log('  ' + e));
}

console.log('\n── New-page proposals for Karen ──');
for (const p of NEW_PAGE_PROPOSALS) {
  console.log(`\n  [${p.kind}] ${p.slug} — ${p.count} papers`);
  console.log(`    ${p.note}`);
}

// Write the full change log
fs.writeFileSync('/tmp/routing-triage-changes.txt', allLogs.join('\n') + '\n');
console.log('\nFull change log: /tmp/routing-triage-changes.txt');
