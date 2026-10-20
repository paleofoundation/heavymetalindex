// Execute the actual bundled controller against form/event fixtures. This is a
// unit test of client behavior; it does not access or automate a live browser.
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {build} from 'esbuild';
const bundle=(await build({entryPoints:[new URL('../../quartz/components/scripts/sourceIndex.inline.ts',import.meta.url).pathname],bundle:true,write:false,format:'iife',platform:'browser'})).outputFiles[0].text;
class Element extends EventTarget {constructor(){super();this.hidden=false;this.disabled=false;this.dataset={};this.textContent='';this.innerHTML='';this.isConnected=true;}focus(){this.focused=true;}scrollIntoView(){this.scrolled=true;}}
class Input extends Element {value='';}
class Select extends Element {constructor(values){super();this.values=values;this._value='';}set value(v){this._value=v;}get value(){return this._value;}get selectedIndex(){return this.values.indexOf(this._value);}}
const tick=()=>new Promise(resolve=>setImmediate(resolve));
function fixture({unavailable=false}={}){
 const root=new Element();root.dataset={sourceIndexUrl:'../static/data/source-index.json'};
 const controls=['q','topic','type','year','metal','status','sort'].map(key=>{const el=key==='q'?new Input():new Select(['','ingredients/rice','cited','candidate','uncited','2026','Dataset','arsenic','title','oldest']);el.dataset.sourceFilter=key;return el;});
 const names=['status','rows','previous','next','topic-note','empty','pagination','page','reset'];
 const nodes=Object.fromEntries(names.map(name=>['[data-source-'+name+']',new Element()]));nodes.table=new Element();
 root.querySelector=selector=>nodes[selector];root.querySelectorAll=selector=>selector==='[data-source-filter]'?controls:[...controls,nodes['[data-source-reset]'],nodes['[data-source-previous]'],nodes['[data-source-next]']];
 const document=new EventTarget();document.querySelector=()=>root;
 const window=new EventTarget(),cleanups=[];window.addCleanup=fn=>cleanups.push(fn);
 const location={href:'https://example.test/sources/index?topic=ingredients%2Frice&status=candidate'};
 const history={state:{},replaceState:(state,_,url)=>{history.state=state;location.href=new URL(url,location.href).href;}};
 const data={schema_version:1,pages:[{slug:'ingredients/rice',title:'Rice'}],sources:Array.from({length:52},(_,i)=>({id:'source-'+i,aliases:[],title:i===51?'Unique candidate':'Source '+i,author:'Author',year:2026,type:'Dataset',metals:['arsenic'],doi:'',publication:'',uses:i<51?[{page:'ingredients/rice',title:'Rice',sections:[]}]:[],candidates:i===51?[{page:'ingredients/rice',title:'Rice'}]:[]}))};
 const requests=[];
 vm.runInNewContext(bundle,{document,window,location,history,URL,HTMLInputElement:Input,HTMLSelectElement:Select,AbortController,fetch:async url=>{requests.push(url);if(unavailable)throw Error('unavailable');return {ok:true,json:async()=>data};}});
 return {root,controls,nodes,document,window,location,requests,cleanup:()=>cleanups.forEach(fn=>fn())};
}
test('actual controls restore Rice candidate URL, search, reset, paginate and restore history',async()=>{
 const f=fixture();f.document.dispatchEvent(new Event('nav'));await tick();
 assert.deepEqual(f.requests,['../static/data/source-index.json']);
 assert.match(f.nodes['[data-source-rows]'].innerHTML,/Unique candidate/);
 assert.doesNotMatch(f.nodes['[data-source-rows]'].innerHTML,/data-source-id="source-0"/);
 assert.match(f.nodes['[data-source-topic-note]'].textContent,/Rice/);
 const input=f.controls[0];input.value='does not exist';input.dispatchEvent(new Event('input'));
 assert.equal(f.nodes['[data-source-empty]'].hidden,false);assert.equal(new URL(f.location.href).searchParams.get('q'),'does not exist');
 f.nodes['[data-source-reset]'].dispatchEvent(new Event('click'));
 assert.equal(f.nodes['[data-source-empty]'].hidden,true);assert.equal((f.nodes['[data-source-rows]'].innerHTML.match(/<tr /g)||[]).length,50);assert.equal(new URL(f.location.href).searchParams.has('topic'),false);
 f.nodes['[data-source-next]'].dispatchEvent(new Event('click'));
 assert.equal((f.nodes['[data-source-rows]'].innerHTML.match(/<tr /g)||[]).length,2);assert.equal(new URL(f.location.href).searchParams.get('p'),'2');assert.equal(f.nodes['[data-source-next]'].disabled,true);
 f.location.href='https://example.test/sources/index?q=Unique';f.window.dispatchEvent(new Event('popstate'));
 assert.match(f.nodes['[data-source-rows]'].innerHTML,/Unique candidate/);assert.equal(f.controls[0].value,'Unique');
 f.cleanup();
});
test('failed catalogue request retains static rows and exposes a usable download fallback message',async()=>{
 const f=fixture({unavailable:true});f.nodes['[data-source-rows]'].innerHTML='static rows';f.document.dispatchEvent(new Event('nav'));await tick();
 assert.equal(f.nodes['[data-source-rows]'].innerHTML,'static rows');assert.match(f.nodes['[data-source-status]'].textContent,/download the complete source index/);assert.ok(f.controls.every(c=>c.disabled));f.cleanup();
});
