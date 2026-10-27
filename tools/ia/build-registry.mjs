#!/usr/bin/env node
// Builds data/ia/registry.json from data/ia/ia-map.csv (IA-01). Data only; no page or URL changes.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {METAL_LABELS, OTHER_ELEMENT_LABELS, SOURCE_TYPES} from './labels.mjs'
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
export function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) { if (c === '"' && text[i + 1] === '"') { cell += '"'; i++ } else if (c === '"') q = false; else cell += c }
    else if (c === '"') q = true
    else if (c === ',') { row.push(cell); cell = '' }
    else if (c === '\n') { row.push(cell.replace(/\r$/, '')); rows.push(row); row = []; cell = '' }
    else cell += c
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  const [head, ...body] = rows
  return body.filter(r => r.length > 1).map(r => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])))
}
export function buildRegistry(rows) {
  const entries = rows.map(r => {
    const [section, group = null] = r.new_section.split('/')
    const cat = r.flag.match(/aggregate group/) ? r.old_url.split('/').filter(Boolean).at(-1) : null
    return {old_url: r.old_url, new_url: r.new_url, type: r.audit_type, section, group: group === 'pets' ? 'home-cookware' : group,
      subgroup: group === 'pets' ? 'pets' : null, category: cat, action: r.action, review_flag: r.flag || null}
  }).sort((a, b) => a.old_url.localeCompare(b.old_url))
  return {schema_version: 1, generated_from: 'data/ia/ia-map.csv',
    sections: ['Foods', 'Products', 'Metals', 'Limits', 'Research'],
    product_groups: {'food-drink': 'Food and drink', 'baby-kids': 'Baby and kids', 'personal-care': 'Personal care', supplements: 'Supplements', 'home-cookware': 'Home and cookware'},
    metal_labels: METAL_LABELS, other_element_labels: OTHER_ELEMENT_LABELS, source_types: SOURCE_TYPES,
    level_badges: ['Above a limit', 'Near a limit', 'Below all limits', 'No data yet'], entries}
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const reg = buildRegistry(parseCsv(fs.readFileSync(path.join(ROOT, 'data/ia/ia-map.csv'), 'utf8')))
  const out = JSON.stringify(reg, null, 1) + '\n', file = path.join(ROOT, 'data/ia/registry.json')
  if (process.argv.includes('--check')) { if (fs.readFileSync(file, 'utf8') !== out) { console.error('data/ia/registry.json is stale'); process.exit(1) } }
  else fs.writeFileSync(file, out)
  console.log(`IA registry: ${reg.entries.length} entries`)
}
