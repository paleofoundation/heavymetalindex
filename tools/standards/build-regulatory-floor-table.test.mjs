import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import {parseCSV,resolveCell,statusProblem,buildTable} from './build-regulatory-floor-table.mjs';
const source=(id,value,extra={})=>({regulatory_limit_id:id,value_ug_kg:String(value),metal_species:'Pb',status:'maximum level',basis:'as sold',jurisdiction:'EU',regulation_page:'regulations/example',...extra});
const run=(cell,rows,opts={})=>resolveCell({cell,cells:{Pb:cell,...opts.cells},record:{slug:'food',native_basis:'as sold',...opts.record},analyte:opts.analyte||'Pb',register:new Map(rows.map(r=>[r.regulatory_limit_id,r])),asOf:'2026-09-09'});
test('CSV preserves quoted commas, multiline fields, quotes; refuses malformed rows',()=>{
 assert.deepEqual(parseCSV('id,notes\na,"one, two\n""three"""\n'),[{id:'a',notes:'one, two\n"three"'}]);
 assert.throws(()=>parseCSV('a,b\n1,2,3\n'));assert.throws(()=>parseCSV('a\n"x'));
});
test('government lookup takes strictest named applicable source regardless of candidate order',()=>{
 const r=run({type:'gov',value:20,binding_id:'b',candidates:[{id:'b',value:20},{id:'a',value:10}]},[source('a',10),source('b',20)]);
 assert.equal(r.limit,10);assert.deepEqual(r.proposed_delta,{from:20,to:10,note:'lookup result only; compiled standard not changed'});
});
test('direct government floor precedes read-across, and conflicting published policy is blocked',()=>{
 const r=run({type:'read_across',value:5,source_id:'analog',per_country:{EU:{id:'law',value:10}}},[source('law',10),source('analog',5)]);
 assert.equal(r.limit,null);assert.equal(r.diagnostic_candidate_limit,10);assert.equal(r.kind,'regulatory-alignment');assert.ok(r.problems.some(p=>p.includes('despite direct')));
});
test('read-across candidate list is not relabeled direct governance',()=>{
 const r=run({type:'read_across',value:5,binding_id:'analog',candidates:[{id:'analog',value:5}]},[source('analog',5)]);
 assert.equal(r.limit,5);assert.equal(r.kind,'read-across');assert.equal(r.government_floor,null);assert.deepEqual(r.problems,[]);
});
test('draft, future, superseded and pesticide limits cannot bind read-across',()=>{
 for(const status of ['draft','superseded','pesticide residue level','adopted maximum level effective 2026-12-01']){
  assert.ok(statusProblem({status},'2026-09-09'));
  assert.equal(run({type:'read_across',value:5,source_id:'x'},[source('x',5,{status})]).limit,null);
 }
});
test('species, organotin-as-total and basis mixing rejected',()=>{
 assert.equal(run({type:'read_across',source_id:'x',value:5},[source('x',5,{metal_species:'iAs'})]).limit,null);
 assert.equal(run({type:'read_across',source_id:'x',value:5},[source('x',5,{metal_species:'Sn',basis:'organotin as tin'})],{analyte:'Sn'}).limit,null);
 assert.equal(run({type:'gov',binding_id:'x',value:5,basis:'total element content'},[source('x',5,{basis:'element migration'})]).limit,null);
});
test('blank values are not zero, missing anchors never create numeric limits',()=>{
 assert.equal(run({type:'gov',binding_id:'x',value:0},[source('x','')]).limit,null);
 assert.equal(run({type:'gov',binding_id:'missing',value:0},[]).limit,null);
});
test('declared formula conversion uses only explicit factor eight; converted true identity stays identity',()=>{
 const r=run({type:'gov',value:4000,binding_id:'x',basis_note:'×8 as-consumed→as-sold',per_country:{AU:{id:'x',value:4000,converted:true}}},[source('x',500,{basis:'as consumed'})],{record:{slug:'infant-formula-powder',native_basis:'as_sold'}});
 assert.equal(r.limit,4000);assert.deepEqual(r.problems,[]);
 const identity=run({type:'gov',value:5,binding_id:'x',per_country:{EU:{id:'x',value:5,converted:true}}},[source('x',5)]);
 assert.equal(identity.limit,5);assert.deepEqual(identity.problems,[]);
});
test('precautionary keeps documented value below government; cannot launder occurrence',()=>{
 const c={type:'precautionary',value:8,sovereign_floor:{id:'floor',value:20},rationale:'Existing population-protective policy'};
 assert.equal(run(c,[source('floor',20)]).limit,8);
 assert.ok(run({...c,provenance_tag:'literature-baseline'},[source('floor',20)]).problems.some(x=>x.includes('retired')));
});
test('species bound inherits only a verified parent and keeps separate analyte',()=>{
 const r=run({type:'subsumed',subsumed_by:'tAs'},[source('parent',50,{metal_species:'tAs'})],{analyte:'iAs',cells:{tAs:{type:'gov',value:50,binding_id:'parent'}}});
 assert.equal(r.limit,50);assert.equal(r.parent,'tAs');assert.deepEqual(r.problems,[]);
 const bad=run({type:'subsumed',subsumed_by:'tAs'},[],{analyte:'iAs',cells:{tAs:{type:'control',reference_method:'ICP-MS',rationale:'control'}}});assert.equal(bad.limit,null);
});
test('forms remain separate, no aggregated maximum or minimum replaces them',()=>{
 const r=run({type:'form_split',forms:[{form:'light',value:100,binding_id:'a'},{form:'dark',value:800,binding_id:'b'}]},[source('a',100),source('b',800)]);
 assert.equal(r.limit,null);assert.deepEqual(r.forms.map(f=>f.limit),[100,800]);assert.match(r.limit_of_record,/light.*100.*dark.*800/);
});
test('control/not-material are explicit nonnumeric dispositions, never mint complete',()=>{
 for(const type of ['control','not_material']){const r=run({type,rationale:'No mapped sovereign anchor',reference_method:'ICP-MS'},[]);assert.equal(r.limit,null);assert.ok(r.limit_of_record.length);assert.ok(r.mint_blocker);}
 const missing=run(undefined,[]);assert.equal(missing.kind,'UNRESOLVED');assert.equal(missing.limit,null);assert.ok(missing.problems.length);
});

test('pending status, unverified LOQ and generic liquid-formula conversion fail closed',()=>{
 assert.ok(statusProblem({status:'pending government consideration'},'2026-09-09'));
 const baseline=run({type:'baseline_screen',value:999,reference_method:'arbitrary',loq_source_id:'does-not-exist'},[]);assert.equal(baseline.limit,null);assert.ok(baseline.problems.length);
 const formula=run({type:'gov',value:10,binding_id:'x',per_country:{EU:{id:'x',value:10,converted:true}}},[source('x',80,{product_scope:'infant formula',basis_class:'as_sold'})],{record:{slug:'infant-formula-liquid',native_basis:'as_consumed'}});assert.equal(formula.limit,null);
});
test('migration cannot anchor as-sold food and extraction remains a separate consistent family',()=>{
 const food=run({type:'gov',value:80,binding_id:'x',basis:'element migration into food'},[source('x',80,{basis:'element migration into food'})]);assert.equal(food.limit,null);
 const textile=run({type:'gov',value:5,binding_id:'x',basis:'extractable element content of homogeneous textile material'},[source('x',5,{basis:'homogeneous material after extraction'})],{record:{native_basis:'extractable element content of homogeneous textile material'}});assert.equal(textile.limit,5);assert.deepEqual(textile.problems,[]);
});
test('missing candidate poisons the whole floor, never a partial valid minimum',()=>{
 const result=run({type:'gov',value:20,binding_id:'a',candidates:[{id:'a',value:20},{id:'missing',value:1}]},[source('a',20)]);assert.equal(result.limit,null);assert.equal(result.government_floor,null);assert.equal(result.diagnostic_candidate_limit,20);assert.match(result.limit_of_record,/BLOCKED/);
});

test('full build covers all variants and canonical metals, preserves bytes, prefers current cert',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'s-doi-floor-test-'));
 try {
  const indexRoot=path.join(dir,'hmi'),certRoot=path.join(dir,'cert');
  fs.mkdirSync(path.join(indexRoot,'data/evidence'),{recursive:true});
  fs.writeFileSync(path.join(indexRoot,'data/evidence/regulatory_limits.csv'),'regulatory_limit_id,value_ug_kg,metal_species,status,basis,jurisdiction,regulation_page\nlow,10,Pb,maximum level,as sold,EU,regulations/example\nhigh,20,Pb,maximum level,as sold,EU,regulations/example\n');
  const upstream=path.join(indexRoot,'data/workbench/standards/cat1-compiled');const live=path.join(certRoot,'data/standards/cat2-compiled');fs.mkdirSync(upstream,{recursive:true});fs.mkdirSync(live,{recursive:true});
  fs.writeFileSync(path.join(upstream,'food.json'),JSON.stringify({slug:'food',category:1,native_basis:'as sold',cells:{Pb:{type:'gov',value:20,binding_id:'high'}}}));
  const bytes=JSON.stringify({slug:'food',category:2,native_basis:'as sold',variants:{a:{Pb:{type:'gov',value:10,binding_id:'low'}},b:{Pb:{type:'gov',value:20,binding_id:'high'}}}});fs.writeFileSync(path.join(live,'food.json'),bytes);
  const table=buildTable({indexRoot,certRoot,asOf:'2026-09-09'});assert.equal(table.rows.length,22);assert.equal(table.summary.subcategories,1);assert.ok(table.rows.every(r=>r.category===2&&r.source.repository==='cert'));
  assert.deepEqual(table.rows.filter(r=>r.analyte==='Pb').map(r=>r.limit),[10,20]);assert.ok(table.rows.filter(r=>r.status==='BLOCKED').every(r=>r.limit===null&&r.government_floor===null&&r.limit_of_record.startsWith('BLOCKED')));assert.equal(fs.readFileSync(path.join(live,'food.json'),'utf8'),bytes);
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
