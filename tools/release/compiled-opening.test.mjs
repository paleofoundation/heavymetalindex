import test from 'node:test';
import assert from 'node:assert/strict';
import {hasCompiledOpening} from '../build-page-openings.mjs';
const header='---\npage_contract_version: 1.0.0\nsynthesis_record: data/evidence/syntheses/pilot-rice-v1.json\n---\n';
const card='<section data-hmi-quick-read><p>Takeaway.</p><ul><li>Finding</li><li>Scope</li><li>Use</li></ul></section>';
test('owned native openings retain all three points before the section prose',()=>{
 assert.equal(hasCompiledOpening(header+card+'\n## Overview\nDetails.'),true);
 assert.equal(hasCompiledOpening(header+'## Overview\n'+card),false);
 assert.equal(hasCompiledOpening(header+card.replace('<li>Use</li>','')),false);
 assert.equal(hasCompiledOpening(header+card+card),false);
 assert.equal(hasCompiledOpening('---\ntitle: Rice\n---\n'+card),false);
});
