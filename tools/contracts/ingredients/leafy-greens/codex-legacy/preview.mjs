import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {execFileSync} from 'node:child_process';import matter from 'gray-matter';
import {root,auditDir,candidatePath,buildIngredient,compileIngredient} from './build.mjs';
import {collectPreviewContext,copyPreviewAssets,verifyPreviewContext} from '../../pilot/preview-context.mjs';
if(process.argv.length>2)throw Error('No arguments supported');
buildIngredient({check:true});
const out=path.join(root,`${auditDir}/preview/site`),staging=fs.mkdtempSync(path.join(os.tmpdir(),'hmi-leafy-comparison-'));
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const syntheses=['data/evidence/syntheses/pilot-rice-v1.json','data/evidence/syntheses/ingredient-leafy-greens-v1.json'].map(f=>JSON.parse(read(f)));
const pages=['wiki/ingredients/rice.md','wiki/ingredients/leafy-greens.md'];
const sources=[...new Set([...read(pages[0]).matchAll(/\[\[sources\/([^|\]\\]+)/g)].map(x=>x[1]).concat(JSON.parse(read(`${auditDir}/source-checks.json`)).map(x=>x.source_id)))].map(id=>`wiki/sources/${id}.md`);
try{
 const coverage=collectPreviewContext({base:root,pages,syntheses,sources,extraTargets:['authors/karen-pendergrass','sources/index']});
 coverage.scope='Paired Leafy greens / Rice local review using one unchanged shared Quartz bundle; no deployment or shared source edits.';
 const files=[...pages,...sources,...coverage.context_pages.map(x=>x.path)];
 const withheld=new Set();coverage.withheld_context_pages=[];
 for(const file of files){
  const to=path.join(staging,file.replace(/^wiki\//,''));fs.mkdirSync(path.dirname(to),{recursive:true});
  if(withheld.has(file)&&!pages.includes(file)){
   const original=matter(read(file));const slug=file.replace(/^wiki\//,'').replace(/\.md$/,'');const anchors=coverage.authored_context_links.filter(x=>x.target===slug&&x.anchor).map(x=>`<span id="${x.anchor}"></span>`).join('\n');
   fs.writeFileSync(to,matter.stringify(`${anchors}\n\nThis supporting page is unavailable in this local article preview.\n`,{title:original.data.title??'Supporting page',type:'preview-context'}));coverage.withheld_context_pages.push({path:file,reason:'Shared legacy page does not clear publication boundary; original retained unchanged.'});
  }else fs.copyFileSync(path.join(root,file===pages[1]?candidatePath:file),to);
 }
 copyPreviewAssets({base:root,staging,outerPreview:out,files:[candidatePath,...files.filter(f=>f!==pages[1]&&!withheld.has(f))],manifest:coverage});
 fs.writeFileSync(path.join(staging,'index.md'),'---\ntitle: Leafy greens and Rice local comparison\n---\n[[ingredients/rice|Rice]] and [[ingredients/leafy-greens|Leafy greens]]\n');
 execFileSync(process.execPath,[path.join(root,'quartz/bootstrap-cli.mjs'),'build','-d',staging,'-o',out,'--concurrency','1'],{cwd:root,stdio:'inherit'});
 const native=fs.readFileSync(path.join(out,'ingredients/leafy-greens.html'),'utf8').replace('<head>','<head><meta http-equiv="Content-Security-Policy" content="script-src &apos;none&apos;">');
 fs.writeFileSync(path.join(out,'ingredients/leafy-greens-noscript.html'),native);
 coverage.native_fallback_fixture='ingredients/leafy-greens-noscript.html; same emitted HTML with script-src none for no-script acceptance only';
 coverage.catalogue={regenerated:false,source:'Unchanged shared source-index JSON/CSV snapshot',limitation:'New Leafy greens citation placements await central candidate adoption and catalogue rebuild. Focused preview compiles selected sources/context only; other catalogue entries may leave local coverage.'};
 verifyPreviewContext(out,coverage);fs.writeFileSync(path.join(root,`${auditDir}/preview/coverage.json`),JSON.stringify(coverage,null,2)+'\n');
 console.log(JSON.stringify({output:out,context_pages:coverage.context_pages.length,withheld:coverage.withheld_context_pages.length,source_count:sources.length}));
}finally{fs.rmSync(staging,{recursive:true,force:true});}
