#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {slug as headingSlug} from 'github-slugger';
import {isPublicWikiRecord,citationReviewIssue} from '../lib/source-publication.mjs';
import {displayType} from '../lib/citation-format.mjs';
import {escape,selectSources,renderRows} from '../../quartz/util/sourceIndex.mjs';
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const DIRS=['metals','ingredients','products','regulations','regulators','synthesis','testing','microbiome','mitigation','supply-chain','health','methodology','certification','studies'];
const METALS={Pb:'lead',Cd:'cadmium',As:'arsenic',tAs:'arsenic',iAs:'arsenic',Hg:'mercury',tHg:'mercury',iHg:'mercury',MeHg:'mercury',Al:'aluminum',Ni:'nickel',Cr:'chromium','Cr-VI':'chromium',Sn:'tin',Cu:'copper',Se:'selenium',Co:'cobalt',Mn:'manganese',Zn:'zinc',Ba:'barium',Sr:'strontium',Ag:'silver',Tl:'thallium',Sb:'antimony',Fe:'iron'};
const list=v=>v==null?[]:Array.isArray(v)?v:[v];
const links=text=>{
 const body=String(text), result=[];
 for(const match of body.matchAll(/\[\[(?:wiki\/)?sources\/([a-z0-9._-]+)(?:#[^\]|]+)?(?:\\?\|[^\]]*)?\]\]/gi))result.push(match[1]);
 for(const match of body.matchAll(/(?:\]\(|\bhref=["'])((?:https?:\/\/(?:www\.)?heavymetalindex\.com\/|(?:\.\.\/)*|\/)?sources\/([a-z0-9._-]+)(?:#[^"'<>)]*)?)/gi))result.push(match[2]);
 return result.map(id=>id.replace(/\.(?:md|html)$/,'').toLowerCase());
};
const pageLinks=value=>list(value).flatMap(v=>[...String(v).matchAll(/\[\[(?:wiki\/)?((?:ingredients|products|metals|regulations|regulators|synthesis|testing|microbiome|mitigation|supply-chain|health)\/[^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1]));
function publicPage(fm,slug){return isPublicWikiRecord(fm,slug)&&fm.retired!==true&&fm.status!=='retired'&&fm.provisional_scaffold!==true;}
function cleanBody(body){return body.replace(/<!-- BEGIN: hmi-(?:source-legend|page-references|page-history) -->[\s\S]*?<!-- END: hmi-(?:source-legend|page-references|page-history) -->/g,'').replace(/<div data-hmi-citation-ledger>[\s\S]*?<\/div>/g,'').replace(/<!--[\s\S]*?-->/g,'').replace(/```[\s\S]*?```/g,'').replace(/<(?:script|template)\b[\s\S]*?<\/(?:script|template)>/gi,'');}
export function citationSections(body){
 const result=new Map();let section={title:'Article',anchor:''},excluded=false;
 for(const line of cleanBody(body).split('\n')){
  const h=line.match(/^(#{1,6})\s+(.+?)\s*#*$/);
  if(h&&h[1].length<=2){section={title:h[2],anchor:headingSlug(h[2])};excluded=/^(?:sources|references|works cited|bibliography|update history|page history|related (?:pages|evidence)|see also|indexed source records|source index|source inventory|discovery sources)$/i.test(h[2]);}
  if(excluded)continue;
  // HTML table source links and ordinary inline/table citations are both use;
  // discovery legends, bibliography-only entries and related-page lists are not.
  for(const key of links(line)){if(!result.has(key))result.set(key,new Map());result.get(key).set(section.anchor,section);}
 }
 return result;
}
export function buildCatalogue(sourceRecords,pages,candidateEdges=[]){
 const sourceMap=new Map(sourceRecords.map(s=>[s.id.toLowerCase(),s]));
 const aliases=new Map(), audit={excluded:[],unresolved_citations:[],canonical_issues:[]};
 const resolve=id=>{
  const visited=new Set();let current=sourceMap.get(id.toLowerCase());
  while(current?.fm.canonical_source){
   if(visited.has(current.id)){audit.canonical_issues.push({source:id,reason:'canonical cycle'});return null;}
   visited.add(current.id);const next=String(current.fm.canonical_source).replace(/^\[\[(?:sources\/)?/,'').replace(/\]\]$/,'').replace(/^sources\//,'');
   current=sourceMap.get(next.toLowerCase());
  }return current;
 };
 const records=new Map();
 for(const source of sourceRecords){
  const canonical=resolve(source.id);if(!canonical){audit.canonical_issues.push({source:source.id,reason:'canonical target missing'});continue;}
  if(!publicPage(source.fm,'sources/'+source.id)||!publicPage(canonical.fm,'sources/'+canonical.id)||citationReviewIssue(canonical.fm)) {audit.excluded.push({source:source.id,reason:citationReviewIssue(canonical.fm)||'unpublished, pending or retired'});continue;}
  aliases.set(source.id.toLowerCase(),canonical.id);if(records.has(canonical.id)){if(source.id!==canonical.id)records.get(canonical.id).aliases.push(source.id);continue;}
  const fm=canonical.fm;const rawType=String(fm.source_type||'Not recorded');
  records.set(canonical.id,{id:canonical.id,aliases:source.id!==canonical.id?[source.id]:[],title:String(fm.title||'Title not recorded'),author:list(fm.authors).map(String).join('; ')||'Authors not recorded',year:Number.isInteger(Number(fm.year))&&fm.year!=null&&Number(fm.year)>0?Number(fm.year):null,publication:String(fm.publication||fm.journal||''),doi:String(fm.doi||''),type:rawType.toLowerCase()==='dataset'?'Dataset':displayType(rawType),metals:list(fm.metals).map(m=>METALS[String(m)]||String(m).toLowerCase()).filter((m,i,a)=>a.indexOf(m)===i),metadata_note:citationReviewIssue(fm)||'',uses:[],candidates:[]});
 }
 for(const source of sourceRecords){const canonical=aliases.get(source.id.toLowerCase());if(!canonical)continue;for(const alias of [source.fm.cite_key,...list(source.fm.aliases)]){const key=String(alias||'').replace(/^sources\//,'').toLowerCase();if(/^[a-z0-9._-]+$/.test(key)&&!aliases.has(key))aliases.set(key,canonical);}}
 const pageMap=new Map(pages.map(p=>[p.slug,p]));
 const addCandidate=(key,slug)=>{const row=records.get(aliases.get(key.toLowerCase())||key),page=pageMap.get(slug);if(!row||!page||row.uses.some(u=>u.page===slug)||row.candidates.some(c=>c.page===slug))return;row.candidates.push({page:slug,title:page.title});};
 for(const page of pages){if(page.discovery_only)continue;for(const [key,sections] of citationSections(page.body)){
  const row=records.get(aliases.get(key.toLowerCase())||key);if(!row){audit.unresolved_citations.push({source:key,page:page.slug});continue;}
  const existing=row.uses.find(use=>use.page===page.slug);
  if(existing)existing.sections=[...new Map([...existing.sections,...sections.values()].map(section=>[section.anchor,section])).values()];
  else row.uses.push({page:page.slug,title:page.title,sections:[...sections.values()]});
 }}
 for(const source of sourceRecords){const fm=source.fm;for(const field of ['ingredients','products','related_pages','regulations','regulators','synthesis','testing','mitigation','supply_chain','health'])for(const slug of pageLinks(fm[field]))addCandidate(source.id,slug);
  for(const metal of list(fm.metals)){const slug=METALS[metal];if(slug)addCandidate(source.id,'metals/'+slug);}
 }
 for(const page of pages){
  const legend=page.body.match(/<!-- BEGIN: hmi-source-legend -->([\s\S]*?)<!-- END: hmi-source-legend -->/)?.[1]||'';
  for(const key of links(legend))addCandidate(key,page.slug);
  if(page.discovery_only)for(const key of links(page.body))addCandidate(key,page.slug);
  let discovering=false;for(const line of page.body.split('\n')){const h=line.match(/^##\s+(.+)/);if(h)discovering=/^(?:sources|indexed source records|source index|source inventory|discovery sources)$/i.test(h[1].trim());if(discovering)for(const key of links(line))addCandidate(key,page.slug);}
 }
 for(const edge of candidateEdges)addCandidate(edge.source,edge.page);
 const sources=[...records.values()].sort((a,b)=>a.id.localeCompare(b.id));
 for(const row of sources){row.aliases=[...new Set(row.aliases)].sort();row.uses.sort((a,b)=>a.title.localeCompare(b.title));row.candidates.sort((a,b)=>a.title.localeCompare(b.title));}
 const related=new Set(sources.flatMap(r=>[...r.uses,...r.candidates].map(u=>u.page)));
 return {data:{schema_version:1,relationship_definition:'Verified citation use records an explicit source citation in article content. It does not establish completed scientific appraisal. Discovery relationships do not establish supporting use.',sources,pages:pages.filter(p=>related.has(p.slug)).map(p=>({slug:p.slug,title:p.title})).sort((a,b)=>a.title.localeCompare(b.title))},audit};
}
function files(dir){if(!fs.existsSync(dir))return [];return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):e.name.endsWith('.md')?[path.join(dir,e.name)]:[]);}
function load(base){
 const sourceRecords=fs.readdirSync(path.join(base,'wiki/sources')).filter(f=>f.endsWith('.md')&&!['index.md','_TEMPLATE.md'].includes(f)).map(f=>path.join(base,'wiki/sources',f)).map(file=>{const parsed=matter(fs.readFileSync(file,'utf8'));return {id:path.basename(file,'.md'),fm:parsed.data};});
 const pages=DIRS.flatMap(dir=>files(path.join(base,'wiki',dir))).filter(f=>!f.includes('/categories/')&&!/ \d+\.md$/.test(f)).flatMap(file=>{const p=matter(fs.readFileSync(file,'utf8')),slug=path.relative(path.join(base,'wiki'),file).replace(/\.md$/,'');return publicPage(p.data,slug)?[{slug,title:String(p.data.title||slug.split('/').at(-1).replaceAll('-',' ')),body:p.content,discovery_only:p.data.evidence_scope==='navigation-only'||p.data.literature_scope==='bibliography'}]:[];});
 const baseline=JSON.parse(fs.readFileSync(path.join(base,'data/evidence/contracts/pilot-2026-10-17/baseline.json'),'utf8'));
 const candidateEdges=baseline.pages.flatMap(p=>p.candidate_source_ids.map(source=>({source,page:p.path.replace(/^wiki\//,'').replace(/\.md$/,'')})));
 return {sourceRecords,pages,candidateEdges};
}
function csv(data){const quote=x=>'"'+String(x??'').replaceAll('"','""')+'"';return [['Citation','Year','Type','Source page','DOI','Verified citation use','Discovery candidates'],...data.sources.map(s=>[s.title,s.year,s.type,'https://heavymetalindex.com/sources/'+s.id,s.doi,s.uses.map(u=>u.page+': '+u.sections.map(s=>s.title).join('; ')).join(' | '),s.candidates.map(c=>c.page).join(' | ')])].map(row=>row.map(quote).join(',')).join('\n')+'\n';}
export function renderCatalogue(data){
 const first=selectSources(data);
 const option=(v,label=v)=>`<option value="${escape(v)}">${escape(label)}</option>`;
 const select=(name,label,values)=>`<label>${label}<select name="${name}" data-source-filter="${name}"><option value="">All</option>${values.map(v=>Array.isArray(v)?option(...v):option(v)).join('')}</select></label>`;
 return `---\ntitle: Sources\ndescription: Search studies, datasets, regulations and other sources, with links to the Index pages that cite them and separately identified discovery candidates.\nsource_catalogue: true\nupdated: 2026-10-20\n---\n\n## Source index\n\nSearch the source collection across studies, datasets, reviews, regulations, guidance and other documents. Each record links to its source page and distinguishes verified citation use on the Index from discovery relationships. A verified citation confirms where a source is cited; it does not establish that scientific appraisal is complete.\n\n<div class="hmi-source-index" data-source-index data-source-index-url="../static/data/source-index.json">\n<label class="source-search">Search sources<input type="search" name="q" placeholder="Title, author, agency, DOI, contaminant or page" data-source-filter="q"></label>\n<details class="source-filters"><summary>Filter findings</summary><div class="source-filter-grid">${select('type','Source type',[...new Set(data.sources.map(s=>s.type))].sort())}${select('year','Year',[...new Set(data.sources.map(s=>s.year).filter(Boolean))].sort((a,b)=>b-a).map(String))}${select('metal','Contaminant',[...new Set(data.sources.flatMap(s=>s.metals))].sort())}${select('topic','Index page',data.pages.map(p=>[p.slug,p.title]))}${select('status','Use status',[['cited','Verified citation use'],['candidate','Discovery candidate'],['uncited','Not currently cited']])}<label>Sort<select data-source-filter="sort" name="sort"><option value="">Newest first</option><option value="oldest">Oldest first</option><option value="title">Title A–Z</option></select></label><button type="button" data-source-reset>Reset</button></div></details>\n<p class="source-index-status" role="status" aria-live="polite" data-source-status>${first.total.toLocaleString()} source records · showing 1–${first.rows.length}. Counts are records, not independent studies.</p>\n<p data-source-topic-note hidden></p>\n<div class="source-index-scroll"><table class="source-index-table"><caption class="hmi-sr-only">Sources and their use on the Index</caption><thead><tr>${['#','Citation','Year','Type','Used on the Index for'].map(h=>'<th scope="col">'+h+'</th>').join('')}</tr></thead><tbody data-source-rows>${renderRows(first.rows)}</tbody></table></div>\n<p data-source-empty hidden>No sources match these filters.</p>\n<nav class="source-pagination" aria-label="Source results pages" data-source-pagination hidden><button type="button" data-source-previous>Previous</button><span data-source-page></span><button type="button" data-source-next>Next</button></nav>\n<p><a href="../static/data/source-index.csv" download>Download the complete source index (CSV)</a></p>\n<p><a href="/sources/catalogue">Browse all catalogue pages</a> · <a href="/sources/categories">Browse by region</a></p>\n<noscript><p>The first 50 records are shown. Enable JavaScript to search, filter and change result pages, or download the complete index above.</p></noscript>\n</div>\n`;
}
export function cataloguePages(data) {
 const result={},pages=selectSources(data).pages;
 for(let p=1;p<=pages;p++) {
  const selection=selectSources(data,{p:String(p)});
  const nav=`<nav aria-label="Browse source pages"><a href="/sources">Search sources</a>${p>1?` · <a href="/sources/catalogue/page-${p-1}">Previous</a>`:''}${p<pages?` · <a href="/sources/catalogue/page-${p+1}">Next</a>`:''}</nav>`;
  const rows=renderRows(selection.rows,(p-1)*50).replace(/href="\.\.\//g,'href="/');
  result[`wiki/sources/catalogue/page-${p}.md`]=`---\ntitle: Sources — page ${p}\ndescription: Browse source records ${1+(p-1)*50} through ${Math.min(p*50,selection.total)}, with citation use and discovery relationships shown separately.\nsource_catalogue: true\ngenerated_by: hmi-source-catalogue-pages\n---\n\n# Sources — page ${p}\n\nBrowse the complete catalogue. Verified citation use identifies where a source is cited; discovery relationships require separate relevance review.\n\n${nav}\n<table class="source-index-table"><thead><tr>${['#','Citation','Year','Type','Used on the Index for'].map(h=>'<th>'+h+'</th>').join('')}</tr></thead><tbody>${rows}</tbody></table>\n${nav}\n`;
 }
 return result;
}
export function buildSourceIndex({base=ROOT,check=false}={}){
 const loaded=load(base),{data,audit}=buildCatalogue(loaded.sourceRecords,loaded.pages,loaded.candidateEdges);
 const outputs={...cataloguePages(data),'wiki/sources/index.md':renderCatalogue(data),'wiki/static/data/source-index.json':JSON.stringify(data),'wiki/static/data/source-index.csv':csv(data),'data/evidence/source-index/build-audit.json':JSON.stringify({scope:'Public source catalogue; citation placement is separate from scientific appraisal',source_records:data.sources.length,pages:data.pages.length,verified_citation_edges:data.sources.reduce((n,s)=>n+s.uses.length,0),discovery_edges:data.sources.reduce((n,s)=>n+s.candidates.length,0),...audit},null,2)+'\n'};
 const changed=[];
 for(const [file,text] of Object.entries(outputs)){const target=path.join(base,file);if(!fs.existsSync(target)||fs.readFileSync(target,'utf8')!==text){changed.push(file);if(!check){fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,text);}}}
 if(check&&changed.length)throw Error('Source index drift: '+changed.join(', '));return {records:data.sources.length,pages:data.pages.length,changed};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))console.log(JSON.stringify(buildSourceIndex({check:process.argv.includes('--check')}),null,2));
