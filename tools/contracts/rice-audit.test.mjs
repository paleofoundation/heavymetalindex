import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { root } from './generate.mjs';
import { loadPilot, compilePage } from './pilot/compiler.mjs';
import { readCSV } from './pilot/observations.mjs';

const dir='data/evidence/contracts/pilot-2026-10-17/rice-depth';
const read=file=>JSON.parse(fs.readFileSync(`${root}/${dir}/${file}`,'utf8'));

test('rice requirement claims retain matching register values, exact provisions and source links',()=>{
 const facts=read('regulatory-findings.json');
 const registry=new Map(readCSV(root,'data/evidence/regulatory_limits.csv').map(r=>[r.regulatory_limit_id,r]));
 const rice=loadPilot().find(s=>s.slug==='rice');
 const answer=rice.sections.find(s=>s.id==='assessment').answers[0];
 const compiled=compilePage(rice);
 for(const claim of facts.records){
  const row=registry.get(claim.regulatory_limit_id);
  assert.equal(Number(row.value_ug_kg),claim.verified_value_ug_kg);
  assert.equal(row.metal_species,claim.analyte);
  assert.ok(claim.locator && claim.basis && claim.status);
  const publicRow=answer.table.rows.find(r=>r.cells[0]===claim.table_label);
  assert.equal(publicRow.cells[1],claim.table_text);
  assert.ok(publicRow.source_keys.includes(claim.source_id));
  assert.ok(compiled.content.includes(claim.table_text.replace(/[.!?]$/,'')));
 }
 assert.match(answer.passages[0].text,/placed on the market/);
 assert.match(answer.passages[0].text,/transition/);
 assert.match(answer.table.rows.at(-1).cells[1],/nonbinding/);
 assert.ok(compiled.content.includes('id="rice-requirements"'));
 assert.ok(compiled.content.indexOf('id="rice-review-methods-and-gaps"') < compiled.content.indexOf('id="rice-requirements"'));
});

test('Arkansas null finding and unresolved denominator are not fabricated numeric comparisons',()=>{
 const study=read('limmer2026-findings.json');
 const cadmium=study.findings.find(f=>f.analyte==='Cd');
 assert.equal(cadmium.value,null);
 assert.equal(study.sampling.field_years_methods,103);
 assert.equal(study.sampling.field_years_table1,107);
 assert.ok(study.holds.some(h=>/denominator|107/.test(h.issue)));
 const observations=JSON.parse(fs.readFileSync(`${root}/data/evidence/contracts/pilot-2026-10-17/observations.json`));
 assert.ok(observations.rice.every(r=>r.source!==study.source_id));
 const interventions=JSON.parse(fs.readFileSync(`${root}/data/evidence/contracts/pilot-2026-10-17/interventions.json`));
 assert.ok(interventions.records.every(r=>r.source_id!==study.source_id));
});

test('reusable supplier brief retains product scope and the five evidence-request steps',()=>{
 const brief=fs.readFileSync(`${root}/wiki/static/data/rice-supplier-testing-brief.txt`,'utf8');
 assert.match(brief,/Market:.*Consumer age group:/);
 for(let step=1;step<=5;step++)assert.ok(brief.includes(`${step} -`));
 assert.equal(Buffer.byteLength(brief),brief.length,'Plain-text downloads must not depend on an unspecified browser charset');
 assert.match(brief,/FDA infant-cereal action level is not a universal raw-rice limit/);
 assert.match(brief,/not an exhaustive compliance checklist/);
 assert.match(compilePage(loadPilot().find(s=>s.slug==='rice')).content,/\.\.\/static\/data\/rice-supplier-testing-brief\.txt/);
});
