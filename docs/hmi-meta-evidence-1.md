# HMI-META-EVIDENCE-1

Starting main: `9ca28a093e20bf1897c044e84f44d0c46fad3176`.

Ingredient search titles name a metal only when its populated profile has a positive numeric study count and at least one finite, nonnegative numeric measurement endpoint. A populated status, source count, null endpoints, numeric strings, and pending profiles cannot independently authorize a named metal. Species remain separate. Finished-product titles use their own search wording and do not inherit ingredient measurements.

Food descriptions identify ingredient or finished-product evidence for supply-chain review. They make no blanket promise of typical ranges or regulatory limits. The same description transformer supplies search-index and social descriptions. Structured headline, name, and description read the final rendered metadata rather than stale authored frontmatter. No occurrence values or regulatory claims are added or changed. Direction: toward the actual scope of the evidence.

Validation: 20 focused regression tests, TypeScript, and CI's thin-with-evidence lint pass locally. Full validation status is recorded in the pull request. Local network and browser restrictions prevent a clean full test run. The normal prebuild is also blocked by an existing public-batch-prose finding on the zinc page. These are not represented as successful checks.
