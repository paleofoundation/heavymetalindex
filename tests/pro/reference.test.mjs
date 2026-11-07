import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { getReference } from '../../lib/pro/reference.mjs';

test('rice references retain the published distribution and every member resolves to a committed finding',async()=>{
  for(const ingredient of ['rice-protein','pea-protein']) {
    const data=await getReference(ingredient);
    const findings=JSON.parse(fs.readFileSync(new URL(`../../data/evidence/findings/by-page/ingredients/${ingredient}.json`,import.meta.url))).findings;
    for(const file of data.provenance) {
      const bytes=fs.readFileSync(new URL(`../../${file.path}`,import.meta.url));
      assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256,file.path);
    }
    for(const ref of data.references) for(const m of ref.members) {
      const f=findings.find(f=>f.id===m.finding_id);
      assert.ok(f,m.finding_id);
      assert.equal(f.source_id??f.id.split(':')[0],m.source_id);
      assert.ok(ref.sources.some(s=>s.source_id===m.source_id && /^https:\/\//.test(s.url)));
      if(f.value_ugkg!==null) assert.equal(m.lower,f.value_ugkg);
      else { assert.notEqual(m.lower,m.upper); assert.equal(m.upper,f.lod_ugkg); }
    }
  }
  const rice=(await getReference('rice-protein')).references.find(r=>r.analyte==='tAs'&&r.n===15);
  assert.deepEqual([rice.quartiles.q1.lower,rice.median.lower,rice.quartiles.q3.lower],[86,100,120]);
  assert.equal(rice.eligible,true);
  assert.ok(rice.members.some(m=>m.lower===0&&m.upper===10));
});

test('pea samples do not turn into an eligible distribution, and supplier data is excluded',async()=>{
  const data=await getReference('pea-protein');
  assert.ok(data.references.length);
  for(const ref of data.references) { assert.equal(ref.n,2); assert.equal(ref.eligible,false); }
  for(const ingredient of ['rice-protein','pea-protein']) {
    const payload=JSON.stringify(await getReference(ingredient));
    assert.doesNotMatch(payload,/\b(?:axiom|oryzatein|rpn|grn\s*[-#]?\s*\d+)\b/i);
  }
});
