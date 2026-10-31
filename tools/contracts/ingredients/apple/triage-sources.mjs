import fs from 'node:fs'; import path from 'node:path'; import matter from 'gray-matter';
import {resolveLibrarySource} from '/Users/kmfp/ops/heavymetalindex/tools/lib/library-root.mjs';
const root='/Users/kmfp/ops/heavymetalindex';
const u=JSON.parse(fs.readFileSync('/private/tmp/claude-502/apple/universe.json'));
const out=[];
for (const it of u.items.filter(i=>i.kind==='source')) {
  const fm=matter(fs.readFileSync(path.join(root,it.path),'utf8'));
  const decl=[fm.data.raw_path, fm.data.markdown_path, fm.data.pdf_path, fm.data.text_path].filter(Boolean).flat();
  let res=null; for (const d of decl){ const r=resolveLibrarySource(String(d),{repoRoot:root}); if(r.resolved_path){res=r;break;} }
  const body=fm.content; const am=(body.match(/\bapple/gi)||[]).length;
  out.push({sid:it.source_id, path:it.path, match:it.match, title:fm.data.title, year:fm.data.year, doi:fm.data.doi, raw_path:decl, resolved:res?.resolved_path||null, root_used:res?.root_used||null, body_apple:am, ingredients:fm.data.ingredients, matrices: fm.data.matrices});
}
fs.writeFileSync('/private/tmp/claude-502/apple/triage.json', JSON.stringify(out,null,1));
for (const o of out) console.log([o.sid, o.match.join('+'), o.body_apple, o.resolved? (o.root_used+':'+path.extname(o.resolved)) : 'NORAW:'+JSON.stringify(o.raw_path)].join(' | '));
