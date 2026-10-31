import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';
import {root,auditDir} from './build.mjs';
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join(' ');
function articles(node){let result=[];if(node.tagName==='article')result.push(node);for(const child of node.childNodes||[])result.push(...articles(child));return result;}
const review=JSON.parse(fs.readFileSync(path.join(root,auditDir,'source-review.json'),'utf8'));
const checks=review.checks.map(source=>{
 const file=`${auditDir}/preview/sources/${source.source_id}.html`;
 const html=fs.readFileSync(path.join(root,file),'utf8');
 const article=articles(parse(html)).map(text).join('\n').replace(/\s+/g,' ');
 // These are the legacy internal-use labels present in the selected sources,
 // not a general prohibition on scientific discussion of food certification.
 const remnants=[...article.matchAll(/\b(?:Certification|Courses|App):/g)].map(m=>({label:m[0],excerpt:article.slice(m.index,m.index+260)}));
 return {source_id:source.source_id,rendered:file,result:remnants.length?'fail':'pass',remnants};
});
const report={date:'2026-10-22',scope:'Semantic public-presentation check of the five cited Cinnamon source pages; underlying raw records preserved.',result:checks.some(x=>x.result==='fail')?'fail':'pass',checks};
const output=path.join(root,auditDir,'rerun-2026-10-22/source-presentation-audit.json');
fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
if(report.result==='fail')process.exitCode=1;
