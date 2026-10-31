import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import matter from 'gray-matter';
import { execFileSync } from 'node:child_process';
import { buildIngredient,root,auditDir,candidatePath,synthesisPath } from './build.mjs';
import { collectPreviewContext,copyPreviewAssets,verifyPreviewContext } from '../../pilot/preview-context.mjs';
import { buildSourceIndex } from '../../../sources/build-source-index.mjs';
import { proposedDir, makeOverlay } from './overlay.mjs';
buildIngredient({check:true});
const stagingRoot=fs.mkdtempSync(path.join(os.tmpdir(),'hmi-cassava-'));
const staging=path.join(stagingRoot,'wiki');
const output=path.join(root,auditDir,'preview');
const s=JSON.parse(fs.readFileSync(path.join(root,synthesisPath),'utf8'));
// Proposed records for new papers are read through a read-only overlay at their future wiki/sources path.
const ov=makeOverlay(root);
const sourceFiles=JSON.parse(fs.readFileSync(path.join(root,auditDir,'source-review.json'),'utf8')).checks.map(x=>x.path.includes('/proposed-sources/')?`wiki/sources/${path.basename(x.path)}`:x.path);
const pages=['wiki/ingredients/cassava.md','wiki/ingredients/rice.md'];
const rice=fs.readFileSync(path.join(root,pages[1]),'utf8');
const riceSources=[...new Set([...rice.matchAll(/\[\[sources\/([^|\]\\]+)/g)].map(m=>`wiki/sources/${m[1]}.md`))].filter(f=>fs.existsSync(path.join(root,f)));
try{
 const coverage=collectPreviewContext({base:ov.base,pages,syntheses:[s],sources:sourceFiles,extraTargets:['authors/karen-pendergrass','sources/index']});
 coverage.scope='Cassava candidate, current Rice reference, every cited cassava source record, direct contextual destinations and author. Source index generated only within this temporary preview using the canonical source-index builder; no global registry or source record edits.';
 const files=[...new Set([...pages,...sourceFiles,...riceSources,...coverage.context_pages.map(x=>x.path)])].filter(f=>f!=='wiki/sources/index.md');
 for(const f of files){
  const to=path.join(stagingRoot,f);fs.mkdirSync(path.dirname(to),{recursive:true});
  if(riceSources.includes(f)&&!sourceFiles.includes(f)){
   const original=matter(fs.readFileSync(path.join(root,f),'utf8'));
   const fm=Object.fromEntries(['type','title','authors','year','publication','doi','access_url','source_type','cite_key'].filter(k=>original.data[k]!==undefined).map(k=>[k,original.data[k]]));
   fs.writeFileSync(to,matter.stringify('Reference metadata retained for the paired Rice presentation comparison. Scientific source text is outside this Cassava review.',fm));
  }else fs.copyFileSync(path.join(ov.base,f===pages[0]?candidatePath:f),to);
 }
 const baseline='data/evidence/contracts/pilot-2026-10-17/baseline.json';
 fs.mkdirSync(path.dirname(path.join(stagingRoot,baseline)),{recursive:true});fs.copyFileSync(path.join(root,baseline),path.join(stagingRoot,baseline));
 coverage.source_catalogue=buildSourceIndex({base:stagingRoot});
 coverage.source_catalogue.scope='Scoped preview citation/topic index; final global catalogue must be regenerated after central adoption. Scientific appraisal is not implied by citation placement.';
 copyPreviewAssets({base:ov.base,staging,outerPreview:output,files:files.filter(x=>x!==pages[0]),manifest:coverage});
 fs.writeFileSync(path.join(staging,'index.md'),'---\ntitle: Cassava review\n---\n# Cassava review\n\n[[ingredients/cassava|Cassava candidate]] and [[ingredients/rice|Rice presentation reference]].\n');
 execFileSync(process.execPath,[path.join(root,'quartz/bootstrap-cli.mjs'),'build','-d',staging,'-o',output,'--concurrency','1'],{cwd:root,stdio:'inherit'});
 for(const filename of ['source-index.json','source-index.csv']){
  const to=path.join(output,'static/data',filename);fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(path.join(staging,'static/data',filename),to);
 }
 coverage.rice_reference_metadata_only=riceSources.filter(f=>!sourceFiles.includes(f));
 coverage.pilot_pages=[pages[0]];verifyPreviewContext(output,coverage);
 for(const page of [...pages,...sourceFiles])if(!fs.existsSync(path.join(output,page.replace(/^wiki\//,'').replace(/\.md$/,'.html'))))throw Error('Missing selected preview page: '+page);
 fs.writeFileSync(path.join(root,auditDir,'preview-coverage.json'),JSON.stringify(coverage,null,2)+'\n');
 console.log(output);
}finally{fs.rmSync(stagingRoot,{recursive:true,force:true});ov.cleanup()}
