import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildCatalogue,citationSections,renderCatalogue} from './build-source-index.mjs';
import {PAGE_SIZE,selectSources,sourceStatus,renderRows,stateFromURL,updateURL} from '../../quartz/util/sourceIndex.mjs';
const source=(id,extra={})=>({id,fm:{type:'source',title:id,authors:['A. Scientist'],year:2026,source_type:'peer-reviewed',...extra}});
const page=(slug,body)=>({slug,title:slug==='ingredients/rice'?'Rice':'Cadmium',body});
test('only article citations establish use; metadata, discovery, bibliography and history do not',()=>{
 const pages=[page('ingredients/rice',`## Pathways\nA finding. [[sources/used]]\n| Outcome | [[sources/data]] |\n## Sources\n- [[sources/candidate]]\n## References\n- [[sources/only-bibliography]]\n## Update history\n[[sources/history]]`)];
 const {data}=buildCatalogue([source('used'),source('data',{source_type:'dataset'}),source('candidate',{ingredients:['[[ingredients/rice]]']}),source('only-bibliography'),source('history')],pages,[{source:'candidate',page:'ingredients/rice'}]);
 assert.equal(data.sources.find(s=>s.id==='used').uses[0].sections[0].title,'Pathways');
 assert.equal(data.sources.find(s=>s.id==='data').type,'Dataset');
 for(const id of ['candidate','only-bibliography','history'])assert.equal(data.sources.find(s=>s.id===id).uses.length,0);
 assert.equal(data.sources.find(s=>s.id==='candidate').candidates.length,1);
});
test('generated source legends, citation ledgers and code examples cannot manufacture citation use',()=>{
 const text='## Findings\n[[sources/yes|Actual citation]]\n<!-- BEGIN: hmi-source-legend -->\n[[sources/no]]\n<!-- END: hmi-source-legend -->\n<div data-hmi-citation-ledger>[[sources/no]]</div>\n```\n[[sources/no]]\n```';
 assert.deepEqual([...citationSections(text).keys()],['yes']);
 assert.deepEqual([...citationSections('## Finding\n[Record](../sources/yes.md)').keys()],['yes']);
 assert.deepEqual([...citationSections('## Finding\n<a href="../sources/yes.html#methods">Citation</a> [Original](https://heavymetalindex.com/sources/also) [External](https://other.test/sources/no)').keys()],['yes','also']);
});
test('canonical aliases share one record and all uses, while unpublished sources stay unpublished',()=>{
 const {data}=buildCatalogue([source('alias',{canonical_source:'[[sources/original]]',status:'duplicate'}),source('original',{cite_key:'alternate'}),source('pending',{status:'tier1-stub'}),source('draft',{draft:true})],[page('ingredients/rice','## Methods\n[[sources/alias]] [[sources/alternate]] [[sources/pending]]')]);
 assert.equal(data.sources.length,1);assert.equal(data.sources[0].id,'original');assert.equal(data.sources[0].uses.length,1);assert.deepEqual(data.sources[0].aliases,['alias']);
});
test('use status is specific to the selected page, with AND filters and accent-insensitive search',()=>{
 const {data}=buildCatalogue([source('a',{title:'Arsénic dataset',source_type:'dataset',metals:['iAs'],ingredients:['[[ingredients/rice]]']})],[page('ingredients/rice','## Scope\nRice.'),page('metals/cadmium','## Methods\n[[sources/a]]')]);
 assert.equal(sourceStatus(data.sources[0]),'cited');assert.equal(sourceStatus(data.sources[0],'ingredients/rice'),'candidate');
 assert.equal(selectSources(data,{topic:'ingredients/rice',status:'candidate',q:'arsenic dataset',metal:'arsenic',type:'Dataset',year:'2026'}).total,1);
 assert.equal(selectSources(data,{topic:'ingredients/rice',status:'cited'}).total,0);
 assert.equal(selectSources(data,{status:'candidate'}).total,1);
 assert.equal(selectSources(data,{topic:'ingredients/rice',status:'uncited'}).total,1);
 assert.equal(selectSources(data,{q:'arsenic missing'}).total,0);
});
test('search pagination, sorting and URL round trips retain the exact selection',()=>{
 const {data}=buildCatalogue(Array.from({length:PAGE_SIZE+3},(_,i)=>source('item-'+i,{title:'Source '+String(i).padStart(2,'0'),year:2000+i})),[]);
 assert.equal(selectSources(data).rows.length,PAGE_SIZE);assert.equal(selectSources(data,{p:'2'}).rows.length,3);assert.equal(selectSources(data,{p:'999'}).page,2);assert.equal(selectSources(data,{p:'-1'}).page,1);
 assert.equal(selectSources(data,{sort:'oldest'}).rows[0].year,2000);
 const state={q:'arsenic & rice',topic:'ingredients/rice',type:'Dataset',p:'2'};
 const url=updateURL('https://example.test/sources/index?unrelated=keep',state);const parsed=stateFromURL(url.href);
 for(const [k,v] of Object.entries(state))assert.equal(parsed[k],v);
 assert.equal(url.searchParams.get('unrelated'),'keep');assert.equal(updateURL(url.href,{}).searchParams.has('topic'),false);
});
test('untrusted metadata stays text; layout has five columns, collapsed filters, CSV and no-script fallback',()=>{
 const {data}=buildCatalogue([source('a',{title:'<img src=x onerror=alert(1)>',authors:['<script>bad()</script>']})],[]);
 const rows=renderRows(data.sources);assert.ok(rows.includes('&lt;img'));assert.ok(!rows.includes('<img'));assert.ok(!rows.includes('<script>'));
 const html=renderCatalogue(data);assert.equal((html.match(/<th scope="col">/g)||[]).length,5);assert.match(html,/<details class="source-filters">/);assert.doesNotMatch(html,/<details[^>]* open/);assert.match(html,/<noscript>/);assert.match(html,/source-index.csv/);
});
test('Rice legacy Rahati candidate remains discoverable without becoming supporting evidence',()=>{
 const data=JSON.parse(fs.readFileSync(new URL('../../wiki/static/data/source-index.json',import.meta.url)));
 const row=data.sources.find(s=>s.id==='rahati2026-infant-formula-baby-food-iran-health-risk');
 assert.ok(row);assert.equal(row.uses.filter(u=>u.page==='ingredients/rice').length,0);assert.ok(row.candidates.some(u=>u.page==='ingredients/rice'));
 assert.ok(selectSources(data,{topic:'ingredients/rice',status:'candidate',q:'rahati'}).rows.some(s=>s.id===row.id));
 assert.ok(data.sources.every(s=>!s.id.startsWith('categories/')&&!['europe','north-america'].includes(s.id)));
});

test('bibliography-only pages establish discovery, not use; unresolved identities stay out of public search',()=>{
 const navigation={...page('testing/navigation','## Indexed source records\n[[sources/a]]'),discovery_only:true};
 const {data,audit}=buildCatalogue([source('a'),source('unknown',{title:'An identified title',authors:['Unknown authors']})],[navigation]);
 assert.equal(data.sources.length,1);assert.equal(data.sources[0].uses.length,0);assert.equal(data.sources[0].candidates[0].page,'testing/navigation');
 assert.ok(audit.excluded.some(s=>s.source==='unknown'&&s.reason==='Author metadata needs verification'));
});

test('citation matching ignores key case while canonical page URL case is preserved',()=>{
 const {data}=buildCatalogue([source('source-iAs',{ingredients:['[[ingredients/rice]]']})],[page('ingredients/rice','## Findings\n[[sources/source-ias]]')]);
 assert.equal(data.sources[0].id,'source-iAs');assert.equal(data.sources[0].uses[0].page,'ingredients/rice');assert.ok(renderRows(data.sources).includes('../sources/source-iAs'));
});

test('native catalogue pages expose every record once with canonical topic and source links',async()=>{
 const {cataloguePages}=await import('./build-source-index.mjs');
 const records=Array.from({length:121},(_,i)=>source('study-'+i));
 const {data}=buildCatalogue(records,[page('ingredients/rice','## Findings\n[[sources/study-0]]')]);
 const pages=Object.values(cataloguePages(data));
 assert.equal(pages.length,3);
 const ids=pages.flatMap(html=>[...html.matchAll(/data-source-id="([^"]+)"/g)].map(match=>match[1]));
 assert.equal(new Set(ids).size,121);
 assert.equal(ids.length,121);
 assert.ok(pages.every(html=>!html.includes('href="../')));
 assert.match(pages[0],/href="\/ingredients\/rice/);
 assert.match(pages[0],/page-2/);
});
