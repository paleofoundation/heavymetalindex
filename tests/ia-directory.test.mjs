import test from 'node:test'
import assert from 'node:assert/strict'
import {renderDirectory, levelBadge, filterItems, assertNoBannedWording} from '../tools/ia/directory.mjs'
const items = [
  {title: 'Rice', url: '/foods/rice', category: 'grains', metals: ['arsenic'], measurements: [{metal: 'arsenic', value: 0.3, limit: 0.2, source: 'sources/x'}, {metal: 'arsenic', value: 0.1, limit: 0.2, source: 'sources/y'}]},
  {title: 'Grey squash', aliases: ['gray squash'], url: '/foods/squash', category: 'veg', metals: ['lead']},
  {title: 'Cocoa', url: '/foods/cocoa', category: 'sweets', metals: ['cadmium'], measurements: [{metal: 'cadmium', value: 0.3, limit: 0.6, source: 's'}]},
]
test('badge only from cited data, fallback No data yet', () => {
  assert.equal(levelBadge().level, 'No data yet')
  assert.equal(levelBadge([{metal: 'lead', value: 5, limit: 1}]).level, 'No data yet') // uncited is ignored
  assert.equal(levelBadge(items[0].measurements).text, 'Arsenic above a limit in 1 of 2 cited results')
  assert.equal(levelBadge(items[2].measurements).level, 'Near a limit')
})
test('cards on top, A to Z below, author and history last', () => {
  const html = renderDirectory({title: 'Foods', categories: [{slug: 'grains', label: 'Grains Cat 7'}], items, author: 'Author card', history: [{date: '2026-10-27', note: 'Built'}]})
  const at = s => html.indexOf(s)
  assert.ok(at('hmi-dir-categories') < at('data-dir-list') && at('data-dir-list') < at('hmi-dir-author') && at('hmi-dir-author') < at('hmi-dir-history'))
  assert.ok(at('Cocoa') < at('Grey squash') && at('Grey squash') < at('Rice'))
  assert.ok(!/Cat 7|\[\[/.test(html)); assert.match(html, /Studies being gathered/); assert.match(html, /No match for/)
})
test('empty directory and banned wording', () => {
  assert.match(renderDirectory({title: 'X', categories: [], items: []}), /No pages in this directory yet/)
  assert.throws(() => assertNoBannedWording('<p>This is safe</p>'))
  assert.throws(() => renderDirectory({title: 'X', items: [{title: 'Clean rice', url: '/x'}]}))
})
test('search and filters', () => {
  assert.deepEqual(filterItems(items, {q: 'gray'}).map(i => i.title), ['Grey squash'])
  assert.deepEqual(filterItems(items, {q: 'arsenic'}).map(i => i.title), ['Rice'])
  assert.deepEqual(filterItems(items, {level: 'No data yet'}).map(i => i.title), ['Grey squash'])
  assert.deepEqual(filterItems(items, {category: 'sweets', metal: 'cadmium'}).map(i => i.title), ['Cocoa'])
})
