import test from 'node:test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { buildDescriptiveReference, descriptiveReferenceLevel } from '../evidence/build-hmtc-aggregate-distributions.mjs';
import { occurrenceRows } from './pilot/observations.mjs';
import { riceHmiBaselines, applyHmiBaselines } from './pilot/hmi-baseline.mjs';
import { comparisonState } from '../lib/occurrence-comparison.mjs';
import { renderAnalyteTable, comparisonDetailsHTML } from './pilot/analyte-table.mjs';
import { root } from './generate.mjs';

const scope={ingredient:'example grain',analyte:'Cd',basis:'dry grain µg/kg',statistic:'sample concentration',market:'one market',period:'2020'};
const unit=(value,i,extra={})=>({...scope,id:String(i),family:'survey-1',group:'form-a',locator:`table row ${i}`,lower:value,upper:value,...extra});
const observed=[1,2,3,4,5,6,7,8].map((v,i)=>unit(v,i));
const target=value=>({lower:value,upper:value,exact:true});

test('HMI computes its own empirical median and quartiles, with inclusive Moderate boundaries',()=>{
  const ref=buildDescriptiveReference(observed,scope);
  assert.deepEqual([ref.q1.lower,ref.median.lower,ref.q3.lower],[2.5,4.5,6.5]);
  assert.equal(descriptiveReferenceLevel(target(2),ref),'low');
  assert.equal(descriptiveReferenceLevel(target(2.5),ref),'moderate');
  assert.equal(descriptiveReferenceLevel(target(6.5),ref),'moderate');
  assert.equal(descriptiveReferenceLevel(target(7),ref),'high');
  assert.equal(descriptiveReferenceLevel(target(1),buildDescriptiveReference(observed.slice(0,3),scope)),null);
});

test('incompatible species, bases, statistics, markets and periods fail closed; duplicate units cannot inflate a reference',()=>{
  for(const dimension of Object.keys(scope))assert.throws(()=>buildDescriptiveReference([...observed,unit(9,9,{[dimension]:'other'})],scope),/Incompatible/);
  assert.throws(()=>buildDescriptiveReference([...observed,observed[0]],scope),/Duplicate/);
  assert.throws(()=>buildDescriptiveReference([unit(1,1,{lower:NaN})],scope),/bounds/);
  assert.throws(()=>buildDescriptiveReference([unit(1,1,{locator:''})],scope),/provenance/);
});

test('censoring is bounded without invented zeros or Moderate grades',()=>{
  const ref=buildDescriptiveReference(observed,scope);
  assert.equal(descriptiveReferenceLevel({lower:0,upper:2},ref),'low');
  assert.equal(descriptiveReferenceLevel({lower:2,upper:3},ref),null);
  const censored=buildDescriptiveReference(observed.map(u=>({...u,lower:0,upper:10})),scope);
  assert.equal(censored.median.exact,false);
  assert.equal(descriptiveReferenceLevel(target(0),censored),null);
  // Endpoint classifications remain valid for every admissible realization.
  for(const upper of [1,2,3]) {
    const units=observed.map((u,i)=>i<2?{...u,lower:0,upper}:u);
    const bounds=buildDescriptiveReference(units,scope);
    for(const value of [0,2,4,8]) {
      const level=descriptiveReferenceLevel(target(value),bounds);
      if(!level)continue;
      for(const fraction of [0,.2,.5,.8,1]) {
        const exact=buildDescriptiveReference(units.map(u=>({...u,lower:u.lower+(u.upper-u.lower)*fraction,upper:u.lower+(u.upper-u.lower)*fraction})),scope);
        assert.equal(descriptiveReferenceLevel(target(value),exact),level);
      }
    }
  }
});

test('family weighting prevents a large study from drowning out a smaller admitted family',()=>{
  const units=[...Array.from({length:100},(_,i)=>unit(1,i)),unit(100,'separate',{family:'survey-2'})];
  const ref=buildDescriptiveReference(units,scope);
  const weights=ref.families.map(f=>ref.units.filter(u=>u.family===f).reduce((s,u)=>s+u.weight,0));
  for(const weight of weights)assert.ok(Math.abs(weight-.5)<1e-10);
  assert.equal(ref.median.lower,50.5);
});

const rows=occurrenceRows('rice',root);
test('rice references separate cooked observations from dry category summaries and retain exclusions',()=>{
  const {record}=riceHmiBaselines(rows);
  assert.equal(record.references.length,18);
  assert.equal(record.admission.length,59);
  assert.equal(record.admission.filter(a=>!a.reference_id).length,10);
  const cooked=record.references.find(r=>r.distribution.scope.analyte==='Cd');
  assert.equal(cooked.distribution.n,54);
  assert.equal(cooked.distribution.family_count,1);
  assert.equal(cooked.distribution.median.lower,5.4);
  const dry=record.references.find(r=>r.label==='HMI dry-grain iAs pooled reference');
  assert.equal(dry.distribution.n,37);
  assert.equal(dry.distribution.family_count,2);
  assert.equal(dry.distribution.median.lower,77);
  assert.deepEqual([dry.distribution.q1.lower,dry.distribution.q3.upper],[62,91]);
  assert.equal(dry.distribution.units.every(u=>u.n>0),true);
  assert.equal(record.references.some(r=>r.distribution.units.some(u=>u.family.includes('hao'))),false);
  assert.ok(record.admission.filter(a=>!a.reference_id).every(a=>a.reason));
});

test('reference IDs and thresholds stay fixed across all target filter selections',()=>{
  for(const row of rows) {
    const initial=row.profile.variants['::'].comparisons.hmi.baseline;
    for(const view of Object.values(row.profile.variants)) {
      assert.equal(view.comparisons.hmi.baseline.reference_id,initial.reference_id);
      assert.deepEqual(view.comparisons.hmi.baseline.distribution,initial.distribution);
    }
  }
  const first=riceHmiBaselines(rows).record;
  assert.deepEqual(riceHmiBaselines(rows).record,first);
});

test('rice renders all three original colors, explicit limited data and baseline methods in the drawer',()=>{
  const levels=rows.map(r=>comparisonState(r.profile.variants['::'].comparisons.hmi,'hmi'));
  assert.equal(levels.filter(s=>s.kind==='rated').length,38);
  assert.equal(levels.filter(s=>s.label==='Limited data').length,21);
  const html=renderAnalyteTable(rows,'rice');
  assert.match(html,/value="hmi" selected/);
  assert.equal((html.match(/<div data-baseline-reference-template=/g)||[]).length,18);
  const uncooked=rows.filter(r=>r.source.includes('alrashdi'));
  const native=renderAnalyteTable(uncooked,'rice');
  assert.doesNotMatch(native,/Cooked basis/);
  for(const level of ['low','moderate','high'])assert.match(html,new RegExp(`hmi-level-${level}`));
  const c=rows.find(r=>r.food==='Parboiled rice').profile.variants['::'].comparisons.hmi;
  assert.match(comparisonDetailsHTML(c),/Sensitivity to weighting/);
  assert.match(comparisonDetailsHTML(c),/not the median of every individual rice sample worldwide/);
  assert.equal(c.baseline.level,'high');
  assert.equal(occurrenceRows('formula',root).some(r=>'hmi' in r.profile.variants['::'].comparisons),false);
});

test('the compiler and display support another ingredient without rice thresholds',()=>{
  const row={scope_key:'example',statistic:'sample concentration',profile:{variants:{'::':{median:target(7),comparisons:{}}}}};
  const definition={key:'example',scope,label:'Example HMI reference',accepts:()=>true,units:()=>observed,
    target:(_r,v)=>v.median,targetStatistic:'sample median',sensitivity:'family-group',sensitivityLabel:'Balance forms',methods:'Observed values',limitations:'Historical scope'};
  const result=applyHmiBaselines([row],[definition],()=> 'No reference');
  assert.equal(result.rows[0].profile.variants['::'].comparisons.hmi.baseline.level,'high');
  assert.equal(result.record.references[0].distribution.scope.ingredient,'example grain');
  assert.throws(()=>applyHmiBaselines([row],[definition,definition],()=>''),/Ambiguous/);
});


test('original 46 limited findings are all audited; 25 obtain ratings against recovered references',()=>{
  const before=JSON.parse(fs.readFileSync(new URL('../../data/evidence/contracts/pilot-2026-10-17/rice-depth/baseline-v1-findings.json',import.meta.url)));
  const {record}=riceHmiBaselines(rows);
  const audited=before.filter(r=>!r.level).map(r=>record.admission.find(a=>a.finding===r.finding));
  assert.equal(audited.length,46);
  assert.equal(audited.filter(r=>r.level).length,25);
  assert.ok(audited.every(r=>r.level||r.reason));
  assert.ok(record.references.filter(r=>r.distribution.family_count>1).length>=7);
});

test('primary recovery retains source identities, missingness and discrepant regional counts',()=>{
  const data=JSON.parse(fs.readFileSync(new URL('../../data/evidence/contracts/pilot-2026-10-17/rice-depth/baseline-primary-data.json',import.meta.url)));
  const selected=(source,a)=>data.records.filter(r=>r.source.startsWith(source)&&r.analyte===a);
  assert.equal(selected('fda2013','iAs').length,481);
  assert.equal(selected('myatsoe','Pb').length,115);
  assert.equal(selected('myatsoe','Cd').length,115);
  assert.equal(selected('myatsoe','Ni').length,119);
  assert.equal(selected('alrashdi','tAs').length,33); // not 99 analytical replicates
  assert.equal(selected('tran','Cd').filter(r=>r.group==='WR').length,181);
  assert.equal(selected('carey','iAs').reduce((sum,r)=>sum+r.n,0),1093);
  assert.equal(selected('shi','Cd').reduce((sum,r)=>sum+r.n,0),2277);
  assert.ok(selected('shi','Cd').filter(r=>r.original==='4.9').every(r=>r.lower===0&&r.upper===9.8));
  assert.ok(data.exclusions.some(r=>r.reason.includes('Replicate confirmation')));
  assert.ok(data.notes.some(r=>r.includes('Mauritius')));
});

test('cross-study references use equal family weights and disclose source-removal sensitivity',()=>{
  const a=rows.find(r=>r.source.startsWith('carey')&&r.analyte==='iAs').profile.variants['::'].comparisons.hmi;
  const b=rows.find(r=>r.source.startsWith('fda2013')).profile.variants['::'].comparisons.hmi;
  assert.equal(a.baseline.reference_id,b.baseline.reference_id);
  assert.equal(a.baseline.leave_one_out.length,2);
  for(const contribution of a.baseline.contributions)assert.ok(Math.abs(contribution.weight-.5)<1e-10);
  assert.match(comparisonDetailsHTML(a),/Sensitivity to source selection/);
  const external=rows.find(r=>r.source.startsWith('hao')&&r.analyte==='iAs').profile.variants['::'].comparisons.hmi;
  assert.equal(external.baseline.contributes,false);
  assert.equal(external.target.lower,150);
  assert.ok(Math.abs(external.target.upper-150/.87)<1e-10);
  assert.equal(external.baseline.level,'high');
});

test('targets preserve displayed means and explicit moisture and censoring bounds',()=>{
  const myat=rows.find(r=>r.source.startsWith('myatsoe')&&r.analyte==='Pb').profile.variants['::'].comparisons.hmi;
  assert.deepEqual([myat.target.lower,myat.target.upper],[9.3,9.399999999999999]);
  assert.match(myat.baseline.target_statistic,/Source-reported mean/);
  const yan=rows.find(r=>r.source.startsWith('yan')&&r.analyte==='Cd').profile.variants['::'].comparisons.hmi;
  assert.deepEqual(yan.target,{lower:0,upper:4,exact:false});
  assert.equal(yan.baseline.level,'low');
  const lead=rows.find(r=>r.source.startsWith('yan')&&r.analyte==='Pb').profile.variants['::'].comparisons.hmi;
  assert.deepEqual(lead.target,{lower:0,upper:50,exact:false});
  assert.equal(lead.baseline.level,null);
  assert.throws(()=>riceHmiBaselines(rows.map(r=>r.source.startsWith('carey')?{...r,basis:'Cooked rice'}:r)),/changed HMI basis/);
});
