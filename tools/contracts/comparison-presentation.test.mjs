import test from 'node:test';
import assert from 'node:assert/strict';
import { comparisonLevel, comparisonState, comparisonSummary } from '../lib/occurrence-comparison.mjs';
import { comparisonHTML, renderAnalyteTable } from './pilot/analyte-table.mjs';
import { occurrenceRows } from './pilot/observations.mjs';
import { root } from './generate.mjs';

test('every source, region, period and comparison mode has a named, nonblank result', () => {
  for (const key of ['rice','formula','cadmium']) {
    for (const row of occurrenceRows(key,root)) for (const view of Object.values(row.profile.variants)) {
      for (const [mode,c] of Object.entries(view.comparisons)) {
        const state=comparisonState(c,mode), html=comparisonHTML(c,mode);
        assert.ok(state.label.trim());
        assert.doesNotMatch(html, /<span>\s*[—–-]?\s*<\/span>/);
        assert.match(html, /data-open-comparison/);
        assert.match(html, /data-info-content/);
        assert.doesNotMatch(html, /hmi-comparison-reference|hmi-comparison-detail/);
        assert.equal(state.level, comparisonLevel(c));
        if (state.kind!=='rated') assert.doesNotMatch(html, /hmi-level-(low|moderate|high)"/);
      }
    }
  }
});

test('a direct comparison is useful without pretending it is a reference-band rating', () => {
  const rows=occurrenceRows('rice',root).filter(r=>r.source.includes('tran'));
  const arsenic=rows.find(r=>r.analyte==='tAs'&&r.food==='Brown rice');
  const c=arsenic.profile.variants['::'].comparisons.forms;
  assert.deepEqual(comparisonState(c,'forms'),{kind:'direct',level:null,label:'Higher',reference:'vs white rice'});
  const cadmium=rows.find(r=>r.analyte==='Cd').profile.variants['::'].comparisons.forms;
  assert.equal(comparisonState(cadmium,'forms').label,'Same summary');
  assert.doesNotMatch(comparisonHTML(cadmium,'forms'),/>Unchanged<|>Equivalent</);
});

test('reporting bounds, unavailable references and contextual results remain distinct', () => {
  assert.equal(comparisonState({direction:'bounded'}).kind,'bounded');
  assert.equal(comparisonState({direction:'summary'},'forms').label,'No comparator');
  assert.equal(comparisonState({direction:'composition'}).label,'Paired species');
  assert.equal(comparisonState({direction:'spread'},'regions').label,'Regional range');
  assert.equal(comparisonState({direction:'geography'},'regions').label,'No regional match');
  assert.equal(comparisonState({direction:'reference'}).label,'No earlier match');
  assert.equal(comparisonState(null).kind,'unavailable');
  assert.equal(comparisonLevel({target:{exact:true,lower:NaN},reference_middle50:{q1:1,q3:3}}),null);
});

test('shared presentation supports ingredient forms without a rice page key', () => {
  const c={direction:'higher',kind:'food_form',target:{exact:true,lower:20},reference:{exact:true,lower:10},reference_form:'Roasted cocoa'};
  assert.equal(comparisonState(c,'forms').reference,'vs roasted cocoa');
  const html=renderAnalyteTable(occurrenceRows('rice',root),'another-ingredient',{defaultComparison:'forms',formComparisonLabel:'Other ingredient form (same study)'});
  assert.match(html,/Other ingredient form \(same study\)/);
  assert.match(html,/value="forms" selected/);
  assert.match(html,/data-filter-comparable/);
  assert.match(html,/data-comparison-summary/);
});

test('comparison coverage counts findings without presenting them as independent studies', () => {
  const states=occurrenceRows('rice',root).map(r=>comparisonState(r.profile.variants['::'].comparisons.forms,'forms'));
  assert.equal(states.length,59);
  assert.equal(comparisonSummary(states),'12 relative ratings · 6 direct comparisons · 8 with overlapping limits · 33 with limited comparison data');
  assert.equal(comparisonSummary([]),'No findings in this selection');
});
