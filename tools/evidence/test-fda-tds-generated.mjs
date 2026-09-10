import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { csvLine, parseCsvRows } from './lib/csv.mjs'
import { verifyGenerated } from './check-fda-tds-generated.mjs'

const root = fileURLToPath(new URL('../../', import.meta.url))
const prefix = 'fda_tds_fy2018_2020_'
const receiptName = `${prefix}reconciliation.json`
const summaryName = `${prefix}summary_by_food_analyte.csv`
const read = (name) => readFileSync(path.join(root, 'data/evidence', name))

test('committed-output verification requires neither raw access nor a Python runtime', () => {
  const result = verifyGenerated({
    root,
    read(file) {
      assert(!path.relative(root, file).startsWith('raw/'), 'Generated verification must not open raw inputs')
      return readFileSync(file)
    },
  })
  assert.equal(result.primary_sources_reopened, false)
  assert.equal(result.result_rows, 68993)
})

test('changed committed CSV fails its primary receipt fingerprint', () => {
  assert.throws(() => verifyGenerated({
    root,
    read(file) {
      const content = readFileSync(file)
      return path.basename(file) === summaryName ? Buffer.concat([content, Buffer.from('\n')]) : content
    },
  }), /byte count differs from primary receipt/)
})

test('summary count corruption fails even when its receipt and public copy are rehashed', () => {
  const rows = parseCsvRows(read(summaryName).toString('utf8'))
  rows[1][rows[0].indexOf('n')] = String(Number(rows[1][rows[0].indexOf('n')]) - 1)
  const summary = Buffer.from(`${rows.map(csvLine).join('\n')}\n`)
  const receipt = JSON.parse(read(receiptName).toString('utf8'))
  receipt.artifacts[summaryName] = { bytes: summary.length, sha256: createHash('sha256').update(summary).digest('hex') }
  const changedReceipt = Buffer.from(`${JSON.stringify(receipt, null, 2)}\n`)
  assert.throws(() => verifyGenerated({
    root,
    read(file) {
      if (path.basename(file) === summaryName) return summary
      if (path.basename(file) === receiptName) return changedReceipt
      return readFileSync(file)
    },
  }), /Summary n:/)
})
