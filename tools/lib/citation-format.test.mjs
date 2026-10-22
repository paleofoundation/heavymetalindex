import test from 'node:test'
import assert from 'node:assert/strict'
import { renderReferenceMeta, renderFullCitation } from './citation-format.mjs'

const base = { authors: ['Enyoh CE'], publication: 'Environ Anal Health Toxicol 38(1): e2023005', year: 2023, doi: '10.5620/eaht.2023005' }

test('an ordinary DOI links through doi.org', () => {
  assert.match(renderReferenceMeta(base, 'k'), /\(https:\/\/doi\.org\/10\.5620\/eaht\.2023005\)/)
})

test('a DOI registered to another work is shown but never linked', () => {
  const flagged = { ...base, doi_resolves_elsewhere: true }
  for (const fm of [flagged, { ...flagged, access_url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10195672/' }]) {
    for (const out of [renderReferenceMeta(fm, 'k'), renderFullCitation(fm, 'k')]) {
      assert.doesNotMatch(out, /doi\.org\/10\.5620/)
      assert.match(out, /DOI 10\.5620\/eaht\.2023005/)
    }
  }
  assert.match(renderReferenceMeta({ ...flagged, access_url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10195672/' }, 'k'), /\(https:\/\/pmc\.ncbi\.nlm\.nih\.gov\/articles\/PMC10195672\/\)/)
})
