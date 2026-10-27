import test from 'node:test'
import assert from 'node:assert/strict'
import {metalKey, metalLabel, isOtherElement, sourceTypeLabel, SOURCE_TYPES} from '../tools/ia/labels.mjs'
import {metalSelect, topicOptions} from '../tools/sources/build-source-index.mjs'
test('wiki links and twins collapse to one canonical metal', () => {
  for (const v of ['[[metals/lead]]', 'lead', 'Pb', 'LEAD']) assert.equal(metalLabel(v), 'Lead')
  assert.equal(metalKey('[[metals/chromium]]'), metalKey('cr-total'))
  assert.equal(metalLabel('cr-total'), 'Chromium (total)')
  assert.equal(metalLabel('[[metals/chromium-hexavalent]]'), 'Chromium VI')
  assert.equal(metalLabel('cr-iii'), 'Chromium III')
  assert.equal(metalLabel('hg_unspecified'), 'Mercury')
  assert.equal(metalKey('[[metals/arsenic]]'), metalKey('arsenic'))
  assert.equal(metalLabel('au'), 'Gold'); assert.equal(metalLabel('oas'), 'Arsenic (organic)')
})
test('non-metals leave the Metal filter', () => {
  for (const v of ['b','ca','f','i','k','mg','na','p','s','si']) assert.ok(isOtherElement(v), v)
  assert.ok(!isOtherElement('lead'))
  const html = metalSelect([{metals: ['lead', 'calcium', 'gold']}])
  assert.match(html, /<optgroup label="Other elements"><option value="calcium">Calcium/)
  assert.ok(!/\[\[/.test(html))
})
test('source types collapse to twelve labels', () => {
  assert.equal(SOURCE_TYPES.length, 12)
  assert.equal(sourceTypeLabel('Gray literature'), sourceTypeLabel('Grey literature'))
  assert.equal(sourceTypeLabel('Peer reviewed review'), 'Review')
  assert.equal(sourceTypeLabel('peer-reviewed'), 'Peer-reviewed study')
  assert.equal(sourceTypeLabel('Journal article'), 'Peer-reviewed study')
  assert.equal(sourceTypeLabel('Regulatory agency report'), 'Government or agency report')
  assert.equal(sourceTypeLabel('International guideline'), 'Regulation or standard')
  assert.equal(sourceTypeLabel('Consumer advocacy testing'), 'NGO or nonprofit report')
  assert.equal(sourceTypeLabel('Application note'), 'Industry or trade')
  assert.equal(sourceTypeLabel('Agency database'), 'Dataset')
  for (const t of ['x', 'Textbook chapter', 'Dissertation', 'gov_guidance']) assert.ok(SOURCE_TYPES.includes(sourceTypeLabel(t)), t)
})
test('duplicate food labels become one per entry, no category codes', () => {
  const o = topicOptions([{slug: 'ingredients/honey', title: 'Honey'}, {slug: 'products/honey', title: 'Honey'}, {slug: 'products/x', title: 'Baby food Category 1 lead'}])
  assert.deepEqual(o.map(x => x[1]), ['Baby food', 'Honey (food)', 'Honey (product)'])
})
