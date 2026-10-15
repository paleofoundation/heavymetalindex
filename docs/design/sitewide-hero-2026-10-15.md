# Sitewide hero proportions — 2026-10-15

Requested: give Heavy Metal Index heroes the wider, taller proportions of the PepsAnon and RemapRx article mastheads so their right sidebars have room.

The authoritative article stylesheet had overridden the original hero minimum height with zero, reduced the shared maximum width to 1,440 pixels, and narrowed the author/snapshot column to 280 pixels. The shared desktop container now reaches 1,760 pixels with 48-pixel outer gutters and a 340-pixel sidebar. Hero minimum height scales from 520 to 640 pixels; tablet heroes use 480 pixels and a 280-pixel sidebar. Actions stay at the bottom of the title panel, with author information above the snapshot. Phones retain natural height and a stacked byline.

The homepage uses the same container and height tokens. The biography retains its portrait, title and affiliations in three desktop columns. Author portrait wrappers align with the byline grid, and their hover cards open inward on desktop/tablet and from the left on phones.

This changes presentation only. No evidence, claims, thresholds or authored wiki content are included in the change. Work was isolated from the other active checkout and based on main at `91434ac`.

Validation: TypeScript passed; 112 focused Quartz regressions passed; the full prebuild/build/postbuild pipeline passed, including 32 synthesis PDFs, 11 metal PDFs and zero dead internal hrefs. Browser checks covered metal, product, synthesis, source, directory, biography and homepage heroes, with responsive checks at 390, 1,024, 1,440 and 1,920 pixels. The initial broad test run in the restricted environment had 483 passing tests, two OpenAlex network failures and nine cancelled browser tests; those environment-dependent checks are not represented as passing.
