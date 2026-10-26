import fs from 'node:fs';import path from 'node:path';import {auditSourceAccess} from '../../../lib/library-root.mjs';import {execFileSync} from 'node:child_process';
const base='data/evidence/contracts/leafy-greens',u=JSON.parse(fs.readFileSync(`${base}/universe-current.json`)),inv=JSON.parse(fs.readFileSync(`${base}/access-inventory.json`));
const files=[...new Set(u.items.filter(i=>i.path.startsWith('raw/')).map(i=>i.path))].map(file=>({declared_path:file,access:auditSourceAccess([file]),items:u.items.filter(i=>i.path===file)}));
const fda=inv.items.find(i=>i.source_id==='fda2022-tds-elements-fy2018-fy2020');
fs.writeFileSync(`${base}/dataset-extraction-inputs.json`,JSON.stringify({universe_sha256:u.sha256,files,fda:{primary:fda.artifact,items:u.items.filter(i=>i.path==='data/evidence/fda_tds_fy2018_2020_element_results_samples.csv')}},null,2)+'\n');
execFileSync('python3',['tools/contracts/ingredients/leafy-greens/extract-readable-datasets.py'],{stdio:'inherit'});
