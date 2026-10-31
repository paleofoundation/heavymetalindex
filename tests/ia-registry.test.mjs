import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import {parseCsv, buildRegistry} from '../tools/ia/build-registry.mjs'
const rows = parseCsv(fs.readFileSync(new URL('../data/ia/ia-map.csv', import.meta.url), 'utf8'))
const reg = JSON.parse(fs.readFileSync(new URL('../data/ia/registry.json', import.meta.url), 'utf8'))
test('registry matches the map', () => { assert.deepEqual(reg, JSON.parse(JSON.stringify(buildRegistry(rows)))) })
test('every map row is in the registry with a known section', () => {
  assert.equal(reg.entries.length, rows.length)
  for (const e of reg.entries) assert.ok(['Foods','Products','Metals','Limits','Research','Hub'].includes(e.section), e.old_url)
})
test('product groups limited to the five groups', () => {
  for (const e of reg.entries.filter(e => e.group)) assert.ok(e.group in reg.product_groups, e.old_url)
})
