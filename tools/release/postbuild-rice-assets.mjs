import fs from 'node:fs';
import {buildRiceAssets,readRiceAssets,hydrateRice} from './rice-assets.mjs';
const source='wiki/ingredients/rice.md',page='public/ingredients/rice.html';
if(fs.existsSync(source)&&fs.existsSync(page)&&/^page_contract_version:\s*1\.0\.0\s*$/m.test(fs.readFileSync(source,'utf8'))){
 const html=fs.readFileSync(page,'utf8');
 if(html.includes('data-explorer-assets-url=')){
  hydrateRice(html,readRiceAssets('public',html));
  console.log('Rice drawer assets already prepared and valid.');
 }else buildRiceAssets();
}
