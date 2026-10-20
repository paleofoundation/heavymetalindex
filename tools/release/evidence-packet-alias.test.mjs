import test from 'node:test';
import assert from 'node:assert/strict';
import {findEvidencePacketRecord} from '../../api/evidence-packet.mjs';
test('the locked Rice rail resolves its legacy title-case manifest link',()=>{
 const rice={slug:'ingredients/rice'};
 assert.equal(findEvidencePacketRecord([rice],'ingredients/Rice'),rice);
 assert.equal(findEvidencePacketRecord([rice],'ingredients/rice'),rice);
 assert.equal(findEvidencePacketRecord([rice],'ingredients/unknown'),undefined);
});
test('case recovery cannot select an ambiguous source record',()=>{
 const a={slug:'sources/FDA'}, b={slug:'sources/fda'};
 assert.equal(findEvidencePacketRecord([a,b],'sources/Fda'),undefined);
 assert.equal(findEvidencePacketRecord([a,b],'sources/FDA'),a);
});
