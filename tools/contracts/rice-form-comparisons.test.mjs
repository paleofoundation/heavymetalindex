import test from 'node:test';
import assert from 'node:assert/strict';
import {root} from './generate.mjs';
import {loadPilot,compilePage} from './pilot/compiler.mjs';
import {comparisonLevel,comparisonHTML,ratingExplanation} from './pilot/analyte-table.mjs';
import {occurrenceRows} from './pilot/observations.mjs';
import {riceFormComparison,reportedFormComparison,categoryMeanReference} from './pilot/comparisons.mjs';

const rows=occurrenceRows('rice',root);
const sample=(id,value,extra={})=>({id,value,lower:value,upper:value,source_row:id,year:'2020',region:'West',season:'Winter',...extra});
const profile=samples=>({kind:'rice',source_id:'same-study',basis:'cooked prepared food',analyte:'Cd',samples});
const compare=(a,b,options={})=>riceFormComparison(a,b,{targetForm:'White rice',referenceForm:'Brown rice',...options});

test('FDA cooked rice types compare matched collections with identified source rows',()=>{
 const white=rows.find(r=>r.food_number==='50'&&r.analyte==='tAs').profile.variants['::'].comparisons.forms;
 const brown=rows.find(r=>r.food_number==='402'&&r.analyte==='tAs').profile.variants['::'].comparisons.forms;
 assert.equal(white.target.lower,43);assert.equal(white.reference.lower,64);
 assert.equal(white.direction,'lower');assert.equal(brown.direction,'higher');
 assert.equal(white.matched_strata.length,25);
 assert.equal(white.target_n,27);assert.equal(white.reference_n,27);
 assert.equal(white.reference_source_rows.length,27);
 const cd=rows.find(r=>r.food_number==='50'&&r.analyte==='Cd').profile.variants['::'].comparisons.forms;
 assert.equal(cd.target.lower,5.2);assert.equal(cd.reference.lower,7.7);assert.equal(cd.direction,'lower');
 assert.match(white.context,/not paired grains or a milling intervention/);
 assert.ok(white.reference_middle50.q1<white.reference_middle50.q3);
 assert.equal(comparisonLevel(white),'low');assert.equal(comparisonLevel(brown),'high');
});

test('rice-type matching excludes other years, seasons and unmatched regions',()=>{
 const a=profile([sample('a',4),sample('not-matched',99,{season:'Summer'})]);
 const b=profile([sample('b',8),sample('different-year',1,{year:'2019'})]);
 const c=compare(a,b);
 assert.equal(c.target.lower,4);assert.equal(c.reference.lower,8);
 assert.deepEqual(c.excluded_target,['not-matched']);
 assert.deepEqual(c.excluded_reference,['different-year']);
 assert.equal(compare(a,b,{region:'Northeast'}).direction,'unavailable');
});

test('non-detect bounds remain intervals rather than fabricated zero medians or percent changes',()=>{
 const a=profile([sample('a',null,{lower:0,upper:2})]);
 const b=profile([sample('b',null,{lower:0,upper:3})]);
 const c=compare(a,b);
 assert.equal(c.direction,'bounded');assert.equal(c.label,'Reporting bounds overlap');
 assert.equal(c.target.exact,false);assert.equal(c.percent_change,undefined);
});

test('rice-type results cannot cross source, preparation basis or analyte species',()=>{
 const a=profile([sample('a',4)]),b=profile([sample('b',8)]);
 for(const different of [{basis:'uncooked grain'},{source_id:'other-study'},{kind:'formula'},{analyte:'iAs'}])
  assert.equal(compare(a,{...b,...different}).direction,'unavailable');
 const iAs=rows.find(r=>r.food_number==='50'&&r.analyte==='iAs').profile.variants['::'].comparisons.forms;
 assert.equal(iAs.direction,'unavailable');assert.equal(iAs.target,undefined);
});

test('same-plant source means retain rounding and do not imply sample-level effects or significance',()=>{
 const tran=rows.filter(r=>r.source==='tran2024-arsenic-cadmium-vietnamese-rice-qtl');
 const white=tran.find(r=>r.food==='White rice'&&r.analyte==='tAs');
 const brown=tran.find(r=>r.food==='Brown rice'&&r.analyte==='tAs');
 const c=white.profile.variants['::'].comparisons.forms;
 assert.equal(c.target.lower,110);assert.equal(c.reference.lower,160);
 assert.match(c.context,/184 genotypes/);assert.match(c.context,/No individual paired differences/);
 const cd=tran.find(r=>r.food==='White rice'&&r.analyte==='Cd').profile.variants['::'].comparisons.forms;
 assert.equal(cd.label,'Same rounded mean');assert.equal(cd.target.lower,210);
 assert.match(cd.context,/do not establish equivalence/);
 assert.equal(reportedFormComparison(white,{...brown,statistic:'median'}).direction,'unavailable');
});

test('unrelated international surveys do not acquire synthetic rice-type references',()=>{
 for(const r of rows.filter(r=>r.record_type==='source_summary'&&!r.comparison_design))
  assert.equal(r.profile.variants['::'].comparisons.forms.direction,'unavailable');
});

test('rice has one visible introduction and retains detailed answers in a native sidebar fallback',()=>{
 const rice=loadPilot().find(s=>s.slug==='rice'),html=compilePage(rice).content;
 const section=html.slice(html.indexOf('## Heavy metal contamination profile of rice'),html.indexOf('## Sources and contamination pathways'));
 assert.match(section,/data-open-context/);
 assert.match(section,/data-explorer-context-content/);
 assert.match(section,/option value="forms"/);
 assert.ok(section.indexOf('option value="forms"')<section.indexOf('option value="time"'));
 const beforeExplorer=section.slice(0,section.indexOf('<div class="hmi-analyte-explorer"'));
 assert.ok(beforeExplorer.includes(rice.sections.find(s=>s.id==='occurrence').presentation.text.slice(0,-1)));
 assert.equal((beforeExplorer.match(/^### /gm)||[]).length,0);
 const sourceText=rice.sections.find(s=>s.id==='occurrence').answers.map(a=>a.text);
 const prose=section.replace(/ ?\((?:\[\[sources\/[^\]]+\]\]\s*)+\)/g, "");
 for(const text of sourceText){assert.ok(prose.includes(text.slice(0,-1)));assert.ok(!beforeExplorer.includes(text.slice(0,-1)));}
 for(const id of ['hmi-ing-007','hmi-ing-008','hmi-ing-009'])assert.ok(section.includes(`id="${id}"`));
});


test('FDA named categories preserve original serving values, conversion, unequal n and source confounding',()=>{
 const survey=rows.filter(r=>r.source==='fda2013-ias-rice-products-sampling');
 assert.equal(survey.length,8);assert.equal(survey.reduce((sum,r)=>sum+r.n,0),481);
 const basmati=survey.find(r=>r.food==='Basmati'),jasmine=survey.find(r=>r.food==='Jasmine');
 assert.equal(basmati.reported.value,3.5);assert.equal(jasmine.reported.value,3.9);
 assert.equal(basmati.n,53);assert.equal(jasmine.n,13);
 assert.ok(Math.abs(basmati.value-3.5*1000/45)<1e-6);
 const c=basmati.profile.variants['::'].comparisons.forms;
 assert.equal(c.label,'Lower than jasmine');assert.equal(c.peers.length,8);
 assert.match(c.context,/not matched grains, a cultivar effect/);assert.match(c.context,/both brown and white/);
 assert.equal(c.percent_change,undefined);assert.ok(c.reference_middle50);
 assert.equal(c.rating_reference.n,7);assert.equal(comparisonLevel(c),'low');
 assert.equal(reportedFormComparison(basmati,jasmine).direction,'unavailable');
 assert.equal(reportedFormComparison(basmati,{...jasmine,analyte:'tAs'},{design:basmati.comparison_design}).direction,'unavailable');
});


test('default rice-type view exposes supported ratings with honest source-specific references',()=>{
 const survey=rows.filter(r=>r.source==='fda2013-ias-rice-products-sampling');
 const expected={'Basmati':'low','Jasmine':'moderate','Brown rice':'high','Instant rice':'low','Parboiled rice':'high','White long grain':'high','White medium grain':'moderate','White short grain':'low'};
 for(const r of survey){const c=r.profile.variants['::'].comparisons.forms;
  assert.equal(comparisonLevel(c),expected[r.food],r.food);
  assert.equal(c.rating_reference.members.length,7);
  assert.ok(c.rating_reference.members.every(m=>m.food!==r.food));
  assert.match(ratingExplanation(c),/not individual samples/);
  assert.match(ratingExplanation(c),/separate from the named pairwise contrast/);
 }
 const defaultViews=rows.map(r=>r.profile.variants['::'].comparisons.forms);
 assert.ok(defaultViews.filter(c=>comparisonLevel(c)).length>=12);
 const html=defaultViews.map(comparisonHTML).join('');
 for(const label of ['Low','Moderate','High'])assert.ok(html.includes(`<span>${label}</span>`));
 const tran=rows.find(r=>r.source.startsWith('tran2024'));
 assert.equal(comparisonLevel(tran.profile.variants['::'].comparisons.forms),null);
});

test('category-position bands reject sparse, flat, incompatible and duplicate category summaries',()=>{
 const survey=rows.filter(r=>r.source==='fda2013-ias-rice-products-sampling'),target=survey[0];
 assert.equal(categoryMeanReference(target,survey.slice(0,4)),null);
 for(const changed of [{source:'different'},{analyte:'tAs'},{basis:'cooked'},{statistic:'median'},{unit:'mg/kg'}])
  assert.equal(categoryMeanReference(target,survey.map(r=>r===target?r:{...r,...changed})),null);
 assert.equal(categoryMeanReference(target,survey.map(r=>r===target?r:{...r,value:10})),null);
 assert.equal(categoryMeanReference(target,[...survey,survey[1]]),null);
 assert.equal(categoryMeanReference({...target,comparison_design:null},survey),null);
});
