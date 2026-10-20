import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {parse,parseFragment,serialize,serializeOuter} from 'parse5';
const attrs=n=>Object.fromEntries((n.attrs||[]).map(a=>[a.name,a.value]));
function findAll(root,predicate){const result=[];function walk(n){if(predicate(n))result.push(n);for(const c of n.childNodes||[])walk(c)}walk(root);return result;}
export function externalizeRice(html){
 const tree=parse(html), root=findAll(tree,n=>Object.hasOwn(attrs(n),'data-analyte-explorer'))[0];
 if(!root)throw Error('Missing Rice explorer');
 const payload=findAll(root,n=>Object.hasOwn(attrs(n),'data-explorer-payload'))[0];
 const evidence=findAll(root,n=>Object.hasOwn(attrs(n),'data-evidence-content'));
 const baselines=findAll(root,n=>Object.hasOwn(attrs(n),'data-baseline-reference-template'));
 const assets={version:1,payload:payload.childNodes.map(n=>n.value||'').join(''),evidence:evidence.map(serialize),baselines:Object.fromEntries(baselines.map(n=>[attrs(n)['data-baseline-reference-template'],serialize(n)]))};
 const hash=createHash("sha256").update(JSON.stringify(assets)).digest("hex").slice(0,12);
 evidence.forEach((n,i)=>{n.childNodes=parseFragment(`<p><a href="../static/data/rice-findings/${hash}/finding-${i+1}">Open this finding’s reported values, methods and limitations</a>.</p>`).childNodes});
 baselines.forEach(n=>{n.childNodes=parseFragment('<p>Reference methods are included with each linked finding above.</p>').childNodes});
 payload.childNodes=[];
 root.attrs.push({name:'data-explorer-assets-url',value:`../static/data/rice-explorer.${hash}.json`});
 return {html:serialize(tree),assets,hash};
}
export function hydrateRice(html,assets){
 const tree=parse(html),root=findAll(tree,n=>Object.hasOwn(attrs(n),'data-analyte-explorer'))[0];
 if(!root||assets.version!==1)throw Error('Invalid Rice assets');
 root.attrs=root.attrs.filter(a=>a.name!=='data-explorer-assets-url');
 const payload=findAll(root,n=>Object.hasOwn(attrs(n),'data-explorer-payload'))[0];
 payload.childNodes=[{nodeName:'#text',value:assets.payload,parentNode:payload}];
 const evidence=findAll(root,n=>Object.hasOwn(attrs(n),'data-evidence-content'));
 if(evidence.length!==assets.evidence.length)throw Error('Rice finding asset count changed');
 evidence.forEach((n,i)=>{n.childNodes=parseFragment(assets.evidence[i]).childNodes});
 for(const n of findAll(root,n=>Object.hasOwn(attrs(n),'data-baseline-reference-template'))){const key=attrs(n)['data-baseline-reference-template'];if(!assets.baselines[key])throw Error('Missing reference');n.childNodes=parseFragment(assets.baselines[key]).childNodes}
 return serialize(tree);
}
export function buildRiceAssets(output='public'){
 const target=path.join(output,'ingredients/rice.html'),original=fs.readFileSync(target,'utf8');
 const {html,assets,hash}=externalizeRice(original);
 if(hydrateRice(html,assets)!==serialize(parse(original)))throw Error('Rice drawer assets do not roundtrip exactly');
 const dir=path.join(output,'static/data/rice-findings',hash);fs.mkdirSync(dir,{recursive:true});
 assets.evidence.forEach((body,i)=>{
  const keys=[...body.matchAll(/data-baseline-reference="([^"]+)"/g)].map(m=>m[1]);
  const references=[...new Set(keys)].map(key=>`<section id="hmi-reference-${key}">${assets.baselines[key]||''}</section>`).join('');
  const content=(body+references).replace(/href="\.\.\/sources\//g,'href="/sources/');
  const url=`https://heavymetalindex.com/static/data/rice-findings/${hash}/finding-${i+1}`;
  fs.writeFileSync(path.join(dir,`finding-${i+1}.html`),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Rice finding ${i+1} | Heavy Metal Index</title><meta name="description" content="Reported values, methods, reporting limits and comparison scope for Rice finding ${i+1}."><meta name="robots" content="noindex, follow"><link rel="canonical" href="${url}"></head><body><main><h1>Rice finding ${i+1}</h1><p>Source evidence and comparison details for the <a href="/ingredients/rice">Rice profile</a>.</p>${content}</main></body></html>`);
 });
 fs.writeFileSync(path.join(output,`static/data/rice-explorer.${hash}.json`),JSON.stringify(assets));
 fs.writeFileSync(target,html);
 console.log(`Rice assets: ${assets.evidence.length} findings; exact roundtrip; HTML ${Buffer.byteLength(original)} → ${Buffer.byteLength(html)} bytes`);
}

export function readRiceAssets(output,html) {
 const file=html.match(/data-explorer-assets-url="\.\.\/static\/data\/(rice-explorer\.[a-f0-9]{12}\.json)"/)?.[1];
 if(!file)throw Error('Invalid Rice asset path');
 return JSON.parse(fs.readFileSync(path.join(output,'static/data',file),'utf8'));
}
