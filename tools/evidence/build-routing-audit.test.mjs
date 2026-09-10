import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {spawnSync} from 'node:child_process'
import {fileURLToPath} from 'node:url'
const script=fileURLToPath(new URL('./build-routing-audit.mjs',import.meta.url))
const source='---\ntype: source\ncite_key: example\nsource_type: gov-data\nevidence_tier: A\nproducts: []\ningredients: []\nmetals: []\nmatrices: []\njurisdictions: []\n---\nSource context.\n'
function run(t,text){const root=fs.mkdtempSync(path.join(os.tmpdir(),'hmi-route-gate-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));for(const d of ['wiki/sources','wiki/products','wiki/ingredients','wiki/metals','wiki/regulations','data/evidence','tools'])fs.mkdirSync(path.join(root,d),{recursive:true});fs.writeFileSync(path.join(root,'tools/audit-product-source-routing.mjs'),'');fs.writeFileSync(path.join(root,'wiki/sources/example.md'),text);return spawnSync(process.execPath,[script],{cwd:root,encoding:'utf8'})}
test('explicit empty declarations pass the schema gate',t=>assert.equal(run(t,source).status,0))
test('a missing strict grade blocks publication',t=>assert.equal(run(t,source.replace('evidence_tier: A\n','')).status,1))
test('missing routing declarations and unresolved targets block publication',t=>{assert.equal(run(t,source.replace('products: []\n','')).status,1);assert.equal(run(t,source.replace('ingredients: []','ingredients: [unresolved-food]')).status,1)})
