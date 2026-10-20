import test from 'node:test';
import assert from 'node:assert/strict';
import {parse,serialize} from 'parse5';
import {externalizeRice,hydrateRice} from './rice-assets.mjs';
test('drawer transport preserves every source character and keeps a native fallback link',()=>{
 const original=`<!doctype html><html><head><title>Fixture</title></head><body><div data-analyte-explorer><table><tbody><tr data-occurrence-row><td>15 µg/kg</td><td><details><summary>Source</summary><div data-evidence-content><p>R&amp;D 米 &lt; 2. Reporting limits remain unknown.</p><a href="../sources/example">Source</a></div></details></td></tr></tbody></table><div data-baseline-reference-template="a"><p>Q1 10; Q3 20.</p></div><script data-explorer-payload type="application/octet-stream">eyJyb3dzIjpbXX0=</script></div></body></html>`;
 const result=externalizeRice(original);
 assert.equal(hydrateRice(result.html,result.assets),serialize(parse(original)));
 assert.match(result.html,/15 µg\/kg/);
 assert.match(result.html,/rice-findings\/[a-f0-9]{12}\/finding-1/);
 assert.match(result.assets.evidence[0],/Reporting limits remain unknown/);
 assert.throws(()=>hydrateRice(result.html,{...result.assets,evidence:[]}),/count changed/);
});
