# Paper to entity index

`paper-entity-index.jsonl` is the shared reverse index for HMI-THIN-1. One row links one source note to one product, ingredient, or metal entity. Step 3 reads this file. This step does not fill pages.

## Row fields

| Field | Meaning |
| --- | --- |
| `corpus` | `hmi` or `wikibiome` |
| `cite_key` | Source frontmatter `cite_key`, or the filename stem |
| `doi` | Normalized DOI, or `null` when the note has no DOI. Placeholder text such as "not yet verified" is not a DOI |
| `entity` | Wiki path without `.md`, for example `products/dairy-milk-camel` |
| `basis` | Why the row exists. Strongest match wins |
| `metals` | Metal tokens declared on the note (`metals`, and WikiBiome `metals_discussed`). Not inferred |
| `has_values` | True when `sample_n` is a positive number, or the note text contains a number with a concentration unit (ppb, ppm, mg/kg, µg/kg, and the same family of units) |
| `locator` | `frontmatter.products`, `frontmatter.ingredients`, `frontmatter.metals`, `frontmatter.metals_discussed`, `frontmatter.matrices:<token>`, `title`, or `body` |

Basis priority is `frontmatter-route`, then `matrices`, then `title-match`, then `body-match`.

## How a note reaches an entity

Frontmatter `products` and `ingredients` resolve to pages that exist, including targets named in `matrix-aliases.json`. Metal symbols and metal names resolve to `wiki/metals/` pages from each page's own `symbol`, `title`, and slug. Total arsenic, inorganic arsenic, and methylmercury stay on their own pages.

`matrices` tokens resolve through `matrix-aliases.json`, through ingredient slugs in `data/nav/ingredient-index-source.json`, through product slugs in `data/taxonomy/hmtc-v2.json`, through the entity page slug or title, and through that page's own `aliases` list. An alias is a matrix token, not a free-text phrase. `camel-milk` maps to `products/dairy-milk-camel` and `ingredients/camel-milk`. The ingredient page is not created here.

Title and body matches use the entity display name as a whole phrase (word boundaries, case folded). Wikilinks, inline code, URLs, file names, and HTML comments are not prose, so a cite key that contains a food name is not a match. Source category indexes under `wiki/sources/categories/`, and the source family index, are not papers and are not indexed. A parenthetical that is only a category label, such as "Cat 2", is removed so the remaining name can match. A parenthetical that distinguishes a row, such as rice-based pasta versus wheat-based pasta, stays part of the phrase. The same phrase is not applied to two pages in one family. Category hub pages are route targets only. They do not donate their titles to the phrase index.

## DOI dedupe

If both corpora have the same DOI, the HMI note is kept, including when the HMI note is marked duplicate and therefore not itself emitted. WikiBiome notes that share a DOI with each other collapse to one note: the one that reports values, then the longer note, then the lowest cite key. Two HMI cite keys that share a DOI are both kept when neither is marked duplicate. That preserves a wrong-DOI collision instead of merging different papers.

The committed snapshot was built from heavymetalindex `91434acc95064b65187f9e19780c8e3b2ca1fd1b` and wikibiome `ec209ff8acd38257d7c3ac523b2b15ac544e6889`.

## Regenerate

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/paleofoundation/wikibiome.git /tmp/wikibiome
git -C /tmp/wikibiome sparse-checkout set wiki/sources
node tools/fanout/build-entity-index.mjs --wikibiome-sources /tmp/wikibiome/wiki/sources
```

The command rewrites `data/fanout/paper-entity-index.jsonl` and prints row counts. Do not open a WikiBiome pull request. Do not treat a row as a certification limit.
