// Shared, cited control library. Every row is a reviewed version 2 intervention record,
// verbatim, from a reviewed page build; the library adds only its stage, food group and
// the contamination pathway it addresses. A page's mitigation table takes its own
// records plus library rows that match its food group and its evidenced pathways.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { root, json, exists, writeFile, FAMILIES, sha, notConflict } from './common.mjs';

export const LIBRARY = 'data/evidence/engine/controls/library.json';

// Food groups, from the page's category and name. Products are grouped by their name.
const GROUPS = [
  ['seafood', /seafood|aquatic|fish|shellfish|shrimp|prawn|tuna|salmon|sardine|mussel|oyster|clam|crab|squid|octopus|caviar|surimi/],
  ['sea-vegetable', /sea-vegetable|seaweed|algae|kelp|nori|kombu|wakame|hijiki|spirulina|chlorella/],
  ['honey', /honey|bee-pollen|propolis|royal-jelly/],
  ['cocoa', /cocoa|cacao|chocolate/],
  ['spice', /herb-spice|botanical|spice|pepper|cinnamon|turmeric|ginger|cumin|clove|nutmeg|paprika|oregano|herb|tea\b|tea-/],
  ['cereal', /grain|cereal|rice|wheat|maize|corn|oat|barley|rye|millet|sorghum|bread|pasta|flour|cracker|biscuit/],
  ['leafy', /leafy|lettuce|spinach|kale|cabbage|chard|greens/],
  ['root', /root-vegetable|cassava|potato|carrot|yam|taro|beet|radish|sweet-potato|turnip/],
  ['fruit', /fruit|apple|banana|plantain|grape|berry|citrus|orange|mango|pear|peach|plum|cherry|melon|juice|raisin|date/],
  ['vegetable', /vegetable|tomato|legume|bean|pea|lentil|onion|garlic|pepper|squash|cucumber|eggplant|fungi|mushroom|okra/],
];
export function foodGroup(page, fm = {}) {
  const text = `${page.slug} ${fm.category ?? ''} ${fm.title ?? ''}`.toLowerCase().replace(/\s+/g, '-');
  return GROUPS.find(([, re]) => re.test(text))?.[0] ?? null;
}

// Stage keys requested for the library.
export function stageKey(r) {
  const t = `${r.stage} ${r.control} ${r.action_summary}`.toLowerCase();
  if (/irrigat|wastewater|sewage|effluent/.test(t)) return 'irrigation';
  if (/cultivar|variet|genotype|species choice|breed/.test(t)) return 'cultivar';
  if (/lot acceptance|release|sourcing|procurement|supplier|testing/.test(r.stage)) return 'testing_supplier';
  if (/packag|storage|handling/.test(r.stage)) return 'packaging_storage';
  if (/process|preparation|extraction|formulation|dietary/.test(r.stage)) return 'processing';
  return 'soil_site';
}
// The pathway a site or irrigation control addresses, matched against a page's own evidence.
const pathwayOf = r => { const t = `${r.control} ${r.action_summary} ${r.material}`.toLowerCase(); return /wastewater|sewage|effluent|irrigat/.test(t) ? 'wastewater' : /mine|mining|smelt|tailing/.test(t) ? 'mining' : /industr|factory|plant|cement|power|battery|traffic|road/.test(t) ? 'industrial' : null; };

export function buildLibrary() {
  const base = path.join(root, 'data/evidence/contracts');
  const rows = [];
  for (const group of fs.readdirSync(base, { withFileTypes: true }).filter(e => e.isDirectory() && notConflict(e))) {
    for (const slug of fs.readdirSync(path.join(base, group.name)).filter(notConflict)) {
      const f = `data/evidence/contracts/${group.name}/${slug}/interventions.json`;
      if (!exists(f)) continue;
      const data = json(f);
      if (data.version !== undefined && data.version !== 2) continue;
      const wiki = `wiki/ingredients/${slug}.md`, fm = exists(wiki) ? matter(fs.readFileSync(path.join(root, wiki), 'utf8')).data : {};
      for (const r of data.records ?? data) {
        if (!r.source_id || !exists(`wiki/sources/${r.source_id}.md`) || !r.outcomes?.length) continue;
        rows.push({ id: `${slug}:${r.id}`, origin_page: `ingredients/${slug}`, origin_file: f, group: foodGroup({ slug }, fm), stage_key: stageKey(r), pathway: pathwayOf(r), record: r });
      }
    }
  }
  rows.sort((a, b) => a.id.localeCompare(b.id));
  // Rows are keyed by a stable control_id, so any reader addresses a row by identity, not position.
  const keyed = Object.fromEntries(rows.map(r => [r.id, { control_id: r.id, ...r }]));
  const library = { version: 2, built_from: 'reviewed interventions.json files in data/evidence/contracts', records: rows.length, sha256: sha(JSON.stringify(rows)), rows: keyed };
  writeFile(LIBRARY, JSON.stringify(library, null, 1) + '\n');
  return library;
}
let cached = null;
export const library = () => cached ??= (exists(LIBRARY) && json(LIBRARY).version === 2 ? json(LIBRARY) : buildLibrary());

// Controls for one page: its own reviewed records only (HMI-CROSS-INGREDIENT-1, 25 Oct 2026).
// Library rows from another food, matched by food group or by pathway, are never borrowed:
// mitigation measured on apple is not cantaloupe evidence, and a label does not make it so.
// The release lint (tools/engine/gates/cross-ingredient.mjs) fails any page that carries one.
export function controlsFor(evidence) {
  const { page } = evidence, pageRef = `${FAMILIES[page.family]}/${page.slug}`;
  const group = foodGroup(page, evidence.wiki?.fm ?? {});
  const own = Object.values(library().rows).filter(x => x.origin_page === pageRef).map(x => x.record);
  return { records: own.map(r => ({ ...r, dependent_pages: [`wiki/${pageRef}.md`] })), group, own: own.length, borrowed: 0 };
}
