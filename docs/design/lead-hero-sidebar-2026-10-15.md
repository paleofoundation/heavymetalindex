# Lead hero: evidence sidebar and a traceable snapshot

Move the three Lead evidence highlights below the author in the hero sidebar. Keep the existing generated image. Desktop uses an opaque burgundy information panel; mobile confines the background image to the title/summary/actions panel and stacks the author, evidence and snapshot on a solid surface below it. Keep the restored article right rail aligned with the hero sidebar.

The Lead page opts into `hero_snapshot: cited-evidence`. Its counts come from the rendered References section and the corresponding source frontmatter, not the 1,512-record routed inventory. Each canonical source record counts once. Pending, unresolved and bibliographically unready records are excluded. A DOI alone does not prove two records are the same work.

Current cited references: 26 research papers (studies and reviews), 7 government reports, 1 government guidance document, and 3 other references (textbook, editorial, preprint): 37 total. Research papers must not be relabeled as primary studies or independent cohorts without an explicit study-level classification. The public “How this is counted” disclosure states this scope and links the counts to References.

The pattern follows RemapRx’s Metformin snapshot, inspected on 2026-10-15: counts of research referenced on the page, a link to the evidence, and an explanation of counting rules. RemapRx’s explicit primary-study classification is more granular than HMI’s current source-type metadata, so HMI uses an accurate paper-level label.

Validation includes counter fixtures for inventory exclusion, repeated citations, canonical duplicates, pending/missing records, a shared DOI without a canonical identity record, and a page without a References section. Desktop and mobile browser checks verify that all highlights are in the sidebar, the mobile image ends before the information panel, the snapshot remains visible on mobile, and no horizontal overflow is introduced.
