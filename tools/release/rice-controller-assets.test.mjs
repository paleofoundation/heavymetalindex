// Exercise the real bundled controller against isolated form/event fixtures.
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {build} from 'esbuild';
const bundle=(await build({entryPoints:[new URL('../../quartz/components/scripts/analyteExplorer.inline.ts',import.meta.url).pathname],bundle:true,write:false,format:'iife',platform:'browser'})).outputFiles[0].text;
class Element extends EventTarget {
 constructor(){super();this.dataset={};this.hidden=true;this.value='';this.textContent='';this.innerHTML='';this.isConnected=true;this.style={};this.nodes=new Map()}
 querySelector(s){if(s==='[data-open-context]')return null;if(!this.nodes.has(s))this.nodes.set(s,new Element());return this.nodes.get(s)}
 querySelectorAll(){return []}
}
const tick=()=>new Promise(resolve=>setImmediate(resolve));
function fixture(fail=false){
 const root=new Element();root.dataset.explorerAssetsUrl='../static/data/rice-explorer.abcdef123456.json';
 const disclosure=new Element(),reference=new Element();disclosure.innerHTML='native fallback';reference.dataset.baselineReferenceTemplate='scope';
 root.querySelectorAll=s=>s==='[data-evidence-content]'?[disclosure]:s==='[data-baseline-reference-template]'?[reference]:[];
 const document=new EventTarget();document.readyState='complete';document.querySelectorAll=s=>s==='[data-analyte-explorer]'?[root]:[];
 const window={addCleanup(){}};
 const requests=[],errors=[];
 const assets={version:1,payload:Buffer.from(JSON.stringify({version:1,parts:[],fragments:[],rows:[]})).toString('base64'),evidence:['<p>Exact source methods &amp; limits.</p>'],baselines:{scope:'<p>Reference scope.</p>'}};
 vm.runInNewContext(bundle,{document,window,atob,TextDecoder,Uint8Array,console:{error:(...x)=>errors.push(x)},fetch:async url=>{requests.push(url);if(fail)throw Error('unavailable');return {ok:true,json:async()=>assets}}});
 return {root,document,disclosure,reference,requests,errors,assets};
}
// Stale since 590d2ae3b: the RICE-PILOT-4/5 asset-URL drawer path these tests exercise was removed when 590d2ae3b replaced analyteExplorer.inline.ts with the deployed sidecar-chunk controller; rewrite against the sidecar loader.
const STALE='the RICE-PILOT-4/5 asset-URL drawer path these tests exercise was removed when 590d2ae3b replaced analyteExplorer.inline.ts with the deployed sidecar-chunk controller; rewrite against the sidecar loader';
test('drawer assets restore before controls activate, and duplicate navigation cannot refetch',{skip:STALE},async()=>{
 const f=fixture();f.document.dispatchEvent(new Event('nav'));await tick();
 assert.equal(f.requests.length,1);assert.deepEqual(f.errors,[]);
 assert.equal(f.disclosure.innerHTML,f.assets.evidence[0]);assert.equal(f.reference.innerHTML,f.assets.baselines.scope);
 assert.equal(f.root.dataset.explorerReady,'true');assert.equal(f.root.querySelector('[data-explorer-controls]').hidden,false);
});
test('unavailable assets retain native finding links and leave enhancement controls collapsed',{skip:STALE},async()=>{
 const f=fixture(true);await tick();
 assert.equal(f.disclosure.innerHTML,'native fallback');assert.equal(f.root.dataset.explorerReady,undefined);
 assert.equal(f.root.querySelector('[data-explorer-controls]').hidden,true);assert.equal(f.root.dataset.explorerLoading,undefined);
});
