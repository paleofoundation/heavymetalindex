// Writes the freshly recomputed corn universe (shared discovery tool) for the dataset
// extractor, so every discovered dataset row receives exactly one decision.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadIndependentCorpus, recomputeUniverse} from '../../../ingredient-source-universe.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const u = recomputeUniverse(loadIndependentCorpus(root, {ingredients: ['corn']}), 'corn');
fs.writeFileSync(path.join(root, 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn/triage/universe-items.json'), JSON.stringify({sha256: u.sha256, aliases: u.aliases, items: u.items}) + '\n');
console.log(u.items.length, 'items', u.sha256);
