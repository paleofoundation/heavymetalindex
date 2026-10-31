// Coordinator-owned discovery. Never read data/evidence/contracts or a chat's source map.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {resolveLibrarySource} from './lib/library-root.mjs';
export const sha256=x=>crypto.createHash('sha256').update(x).digest('hex');
const normalize=x=>String(x??'').normalize('NFKC').toLowerCase().replace(/[_–—-]+/g,' ').replace(/\s+/g,' ').trim();
export function parseCSV(text){
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
 else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(Boolean))rows.push(row);row=[];cell='';}else cell+=c;}
 if(quoted)throw Error('Unclosed CSV quote');if(cell||row.length){row.push(cell);rows.push(row);}const header=rows.shift()??[];return rows.map((r,i)=>({...Object.fromEntries(header.map((h,j)=>[h,r[j]??''])),__row:i+2}));
}
// Engine outputs and the shared findings store are derived from discovery, never inputs to it.
const derivedDir=d=>/(?:^|[\\/])data[\\/]evidence[\\/](?:engine|findings)$/.test(d);
function files(dir){if(!fs.existsSync(dir))return [];return fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(e=>e.name==='contracts'||e.name==='node_modules'||e.isSymbolicLink()||(e.isDirectory()&&derivedDir(path.join(dir,e.name)))?[]:e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
function matches(text,aliases){const s=normalize(text);return aliases.some(a=>new RegExp('(?:^|[^\\p{L}\\p{N}])'+a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?:$|[^\\p{L}\\p{N}])','u').test(s));}
const sourceKeys=['source_id','source_cite_key','cite_key','source'];
const foodKeys=['ingredient_slug','ingredient','ingredient_label','food','food_name','food_description','tds_food_description','material','commodity','matrix','target_page','ingredient_page','source_product_label','product_label','product_slug','row_label','row_slug','sample_description','simplified_product_label','baby_food_name','food_category','product_or_species','FoodName','LocalFoodName','food_name','local_food_name'];
function datasetRows(json,location='$'){
 if(Array.isArray(json))return json.flatMap((r,i)=>datasetRows(r,`${location}[${i}]`));
 if(!json||typeof json!=='object')return [];
 if(sourceKeys.some(k=>typeof json[k]==='string')&&foodKeys.some(k=>typeof json[k]==='string'))return [{...json,__location:location}];
 return Object.entries(json).filter(([,v])=>v&&typeof v==='object').flatMap(([k,v])=>datasetRows(v,`${location}.${k}`));
}
export function loadIndependentCorpus(repo=process.cwd(),options={}){
 const sourceFiles=files(path.join(repo,'wiki/sources')).filter(f=>f.endsWith('.md'));
 const sources=sourceFiles.map(file=>{const raw=fs.readFileSync(file,'utf8'),p=matter(raw);return {id:path.basename(file,'.md'),path:path.relative(repo,file),sha256:sha256(raw),frontmatter:p.data,title:p.data.title??'',body:p.content};});
 const aliases={};
 for(const file of files(path.join(repo,'wiki/ingredients')).filter(f=>f.endsWith('.md'))){const slug=path.relative(path.join(repo,'wiki/ingredients'),file).split(path.sep).join('/').slice(0,-3),m=matter(fs.readFileSync(file,'utf8')).data;if(slug==='index'||m.type==='category-index')continue;aliases[slug]=[slug,m.title,m.commodity,...(Array.isArray(m.aliases)?m.aliases:[])].filter(x=>typeof x==='string');}
 for(const f of ['data/reference/wiki-link-aliases.json','data/reference/ingredient-fullness-aliases.json'])if(fs.existsSync(path.join(repo,f))){const json=JSON.parse(fs.readFileSync(path.join(repo,f)));for(const[k,v]of Object.entries(json)){if(Array.isArray(v)){aliases[k]=[...(aliases[k]??[]),...v];}else if(typeof v==='string'&&v.startsWith('ingredients/')){const slug=v.slice(12);aliases[slug]=[...(aliases[slug]??[]),k];}}}
 const indexes=[],dataset=[];
 // Discover source×food indexes in shared registers, including new nested survey indexes.
 for(const file of files(path.join(repo,'data/evidence')).filter(f=>/\.(csv|json|jsonl)$/.test(f))){
  if(/\/source_editorial_provenance\/|\/outstanding\/|\/questions\//.test(file))continue;
  const raw=fs.readFileSync(file,'utf8'),rel=path.relative(repo,file);let rows=[];
  if(file.endsWith('.csv')){const header=raw.slice(0,raw.indexOf('\n'));if(!sourceKeys.some(k=>header.split(',').includes(k))||!foodKeys.some(k=>header.split(',').includes(k)))continue;rows=parseCSV(raw);}
  else {if(!sourceKeys.some(k=>raw.includes('"'+k+'"'))||!foodKeys.some(k=>raw.includes('"'+k+'"')))continue;try{rows=file.endsWith('.jsonl')?raw.trim().split('\n').flatMap((l,i)=>datasetRows(JSON.parse(l),`line${i+1}`)):datasetRows(JSON.parse(raw));}catch(e){throw Error(`Cannot inspect multi-food index ${rel}: ${e.message}`);}}
  if(!rows.length)continue;indexes.push({path:rel,sha256:sha256(raw),rows:rows.length});
  for(const r of rows){const source_id=sourceKeys.map(k=>r[k]).find(v=>typeof v==='string'&&v);if(!source_id||!foodKeys.some(k=>r[k]))continue;const row_locator=r.__row?`row ${r.__row}`:r.__location;dataset.push({id:`dataset:${rel}#${row_locator}`,kind:'dataset_row',source_id,path:rel,row_locator,sha256:sha256(JSON.stringify(r)),food:foodKeys.map(k=>r[k]).filter(Boolean).join(' | '),source_row_number:r.source_row_number??null});}
 }
 const primaryFiles=new Map(),discovery_gaps=[];
 const privateIngredientPath=file=>{const rel=path.relative(repo,path.resolve(repo,file)).split(path.sep).join('/');return /^(?:data\/evidence\/contracts|tools\/contracts\/ingredients)(?:\/|$)/.test(rel);};
 const register=(declared,source_id)=>{
  const access=resolveLibrarySource(declared,{repoRoot:repo,allowDirectories:true});
  if(!access.resolved_path)return null;
  if(privateIngredientPath(access.resolved_path)){discovery_gaps.push({source_id,raw_path:declared,reason:'Ingredient-owned files cannot define the independent source universe'});return null;}
  const selected=access.attempts.find(a=>a.path===access.resolved_path);
  const candidates=selected.resource_kind==='directory'?files(access.resolved_path).filter(f=>f.endsWith('.csv')):[access.resolved_path];
  for(const physical_path of candidates){if(!physical_path.endsWith('.csv'))continue;const logical=selected.resource_kind==='directory'?path.posix.join(declared.replaceAll('\\','/'),path.relative(access.resolved_path,physical_path).split(path.sep).join('/')):declared;
   primaryFiles.set(physical_path,{path:logical,physical_path,source_id,root_used:access.root_used});}
  return access;
 };
 for(const source of sources){const fm=source.frontmatter;
  for(const [key,value] of Object.entries(fm))for(const declared of (Array.isArray(value)?value:[value]))if(typeof declared==='string'&&/_paths?$/.test(key)&&declared.startsWith('raw/')&&(declared.endsWith('.csv')||(key==='raw_path'&&(fm.export_manifest_path||/dataset|database/.test(fm.source_type??'')))))register(declared,source.id);
  if(typeof fm.export_manifest_path==='string'&&privateIngredientPath(fm.export_manifest_path)){discovery_gaps.push({source_id:source.id,index:fm.export_manifest_path,reason:'Ingredient-owned discovery manifests cannot define the independent source universe'});continue;}
  if(typeof fm.export_manifest_path==='string'&&fs.existsSync(path.join(repo,fm.export_manifest_path))){
   for(const entry of parseCSV(fs.readFileSync(path.join(repo,fm.export_manifest_path),'utf8'))){if(!entry.raw_path)continue;if(!register(entry.raw_path,entry.source_id||source.id))discovery_gaps.push({source_id:entry.source_id||source.id,index:fm.export_manifest_path,raw_path:entry.raw_path,reason:'Indexed primary export not readable from declared or backup location; ingredient row coverage cannot be independently established'});}
  }
 }
 if(primaryFiles.size){
  const selectedAliases=Object.fromEntries((options.ingredients??Object.keys(aliases)).map(slug=>[slug,[slug,...(aliases[slug]??[])]]));
  const scan=spawnSync('python3',[fileURLToPath(new URL('./scan-primary-food-indexes.py',import.meta.url))],{input:JSON.stringify({files:[...primaryFiles.values()],aliases:selectedAliases}),encoding:'utf8',maxBuffer:1024*1024*1024});
  if(scan.status!==0)throw Error('Primary multi-food index scan failed: '+scan.stderr);
  for(const line of scan.stdout.split('\n'))if(line){const record=JSON.parse(line);if(record.type==='row')dataset.push(record.item);else if(record.type==='index')indexes.push(record);else discovery_gaps.push(record);}
 }
 return {sources,aliases,dataset,indexes,discovery_gaps};
}
export function recomputeUniverse(corpus,ingredient){
 const aliases=[...new Set([ingredient,...(corpus.aliases[ingredient]??[])].map(normalize))].filter(Boolean),items=[];
 for(const s of corpus.sources){const tags=JSON.stringify({ingredients:s.frontmatter.ingredients,tags:s.frontmatter.tags,commodity:s.frontmatter.commodity});const reasons=[];if(matches(tags,aliases))reasons.push('tag');if(matches(s.title,aliases))reasons.push('title');if(matches(s.body,aliases))reasons.push('body');if(reasons.length)items.push({id:`source:${s.id}`,kind:'source',source_id:s.id,path:s.path,sha256:s.sha256,match:reasons});}
 for(const r of corpus.dataset)if(r.matched_ingredients?r.matched_ingredients.includes(ingredient):matches(r.food,aliases)){const {matched_ingredients,...item}=r;items.push({...item,match:['multi_food_index']});}
 items.sort((a,b)=>a.id.localeCompare(b.id));return {ingredient,aliases,items,source_records:items.filter(i=>i.kind==='source').length,dataset_rows:items.filter(i=>i.kind==='dataset_row').length,source_ids:[...new Set(items.map(i=>i.source_id))].sort(),discovery_gaps:corpus.discovery_gaps??[],indexes:corpus.indexes,sha256:sha256(JSON.stringify(items))};
}
