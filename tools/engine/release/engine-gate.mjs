// Gate one engine page on its final HTML inside a release folder, the way each legacy
// ingredient's fullness.mjs does: recompute the universe, rewrite the scorecard for this
// exact HTML, then run the seven fullness gates, presentation and hero checks through
// tools/engine/gates/index.mjs. Used until the page builder ships tools/engine/gates/fullness.mjs.
//
//   node tools/engine/release/engine-gate.mjs <ingredient|product>/<slug> <html>
import fs from 'node:fs';
import path from 'node:path';
import {pageUniverses, inspectPage, inspectHero, scorecardFor, runGates, summarize} from '../gates/index.mjs';

const [arg, html] = process.argv.slice(2);
const m = String(arg ?? '').match(/^(ingredient|product)s?\/([a-z0-9][a-z0-9-]*)$/);
if (!m || !html) throw Error('Usage: engine-gate.mjs <ingredient|product>/<slug> <html>');
const page = {family: m[1], slug: m[2]}, dir = `data/evidence/engine/${page.family}/${page.slug}`;
const ledger = JSON.parse(fs.readFileSync(path.join(dir, 'evidence-ledger.json'), 'utf8'));
const {universes, failed} = pageUniverses([page]);
if (failed.size) throw Error([...failed.values()].join('; '));
const universe = universes.get(`${page.family}/${page.slug}`), text = fs.readFileSync(html, 'utf8');
const inspected = inspectPage(page, text), scorecard = scorecardFor(page, universe, ledger, inspected);
fs.writeFileSync(path.join(dir, 'fullness-scorecard.json'), JSON.stringify(scorecard, null, 2) + '\n');
const result = summarize(runGates({page, universe, ledger, scorecard, inspected}), inspected.presentation, inspectHero(page, text));
console.log(JSON.stringify(result, null, 1));
if (result.status !== 'pass') process.exitCode = 1;
