import test from 'node:test';import assert from 'node:assert/strict';
import {inspectIngredientPresentation} from './audit-ingredient-presentation.mjs';
const page=({quick='<sup class="cite"><a href="../sources/paper">1</a></sup>',state='direct',rows='<tr data-mitigation-row><td>Source-supported control</td></tr>',image='<img class="hero-background" src="/static/heroes/original.webp">'}={})=>`<body data-slug="ingredients/test"><div class="hero-band" data-ingredient-presentation="rice-shared-v1">${image}</div><section class="hmi-quick-read">Cited prose ${quick}</section><table><tr><td><span data-comparison-state="${state}">Comparison</span></td></tr></table><table class="hmi-mitigation-table">${rows}</table></body>`;
test('A source-cited Quick Read, real comparison and populated mitigation table pass',()=>assert.deepEqual(inspectIngredientPresentation(page()).errors,[]));
test('Contextual links fail even if citations and every other panel pass',()=>assert.match(inspectIngredientPresentation(page({quick:'<a href="../metals/cadmium">cadmium</a>'})).errors.join(),/Quick Read contains/));
test('An entire no-comparator table fails publication',()=>assert.match(inspectIngredientPresentation(page({state:'unavailable'})).errors.join(),/no usable/));
test('A blank or omitted mitigation table fails publication',()=>assert.match(inspectIngredientPresentation(page({rows:''})).errors.join(),/mitigation table/));
test('Removing the whole hero image fails publication',()=>assert.match(inspectIngredientPresentation(page({image:''})).errors.join(),/hero image missing/));
test('Legacy pages remain distinguishable from migrated ingredient acceptance',()=>assert.equal(inspectIngredientPresentation('<body data-slug="ingredients/legacy">Unmigrated</body>').applicable,false));

test('Authored source citations awaiting client-side numeric superscripting remain allowed',()=>assert.deepEqual(inspectIngredientPresentation(page({quick:'<a href="../sources/paper" data-authors="Authors" data-title="Study">Study title</a>'})).errors,[]));

// Owner instruction 23 Oct 2026: the grouped contamination-profile table is canonical.
const occurrence=(body,slug='ingredients/test')=>page().replace('data-slug="ingredients/test"',`data-slug="${slug}"`).replace('<table class="hmi-mitigation-table">',`<table class="hmi-analyte-table"><tbody data-analyte-group="Cd"><tr class="hmi-analyte-group"><th><button><span>Cadmium</span></button></th></tr>${body}</tbody></table><table class="hmi-mitigation-table">`);
const cell='<td data-label="Comparison"><span class="hmi-comparison-controls"><button>Low</button></span></td>';
const head='<tr class="hmi-form-group" data-form-group="beans"><th></th></tr>';
test('a flat occurrence table fails unless the page predates the grouped-table rule',()=>{
 const flat=`<tr id="r1" data-occurrence-row>${cell}</tr>`;
 assert.ok(inspectIngredientPresentation(occurrence(flat)).errors.some(e=>/flat/.test(e)));
 assert.ok(!inspectIngredientPresentation(occurrence(flat,'ingredients/olives')).errors.some(e=>/flat/.test(e)));
});
test('grouped tables keep every folded result as a hidden row pointing at an unfolded central row',()=>{
 const ok=`${head}<tr id="r1" data-occurrence-row data-form="beans" data-level="low">${cell}</tr><tr id="r2" data-occurrence-row data-form="beans" data-level="none" data-folded-into="r1" hidden>${cell}</tr>`;
 assert.deepEqual(inspectIngredientPresentation(occurrence(ok)).errors,[]);
 assert.ok(inspectIngredientPresentation(occurrence(ok.replace('data-folded-into="r1" hidden','hidden'))).errors.some(e=>/hidden without being folded/.test(e)));
 assert.ok(inspectIngredientPresentation(occurrence(ok.replace('data-folded-into="r1"','data-folded-into="r9"'))).errors.some(e=>/missing or folded/.test(e)));
 assert.ok(inspectIngredientPresentation(occurrence(ok).replace('<span>Cadmium</span>','<span>Cadmium <small><code>Cd</code></small></span>')).errors.some(e=>/chemical symbol/.test(e)));
});
