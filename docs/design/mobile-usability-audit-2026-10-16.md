# Mobile usability audit — 2026-10-16

Karen requested a mobile audit and fixes for navigation, readability, tap targets, and tables. Mobile usability takes priority over historical fixed desktop geometry. The isolated checkout starts at latest fetched main commit `a18551e9d627f697efb6cbe49ee03d038fdbade2`.

## Findings and changes

- On a 320px phone, long source-title links made the baby-cereal page 909px wide. Allow article links to wrap; the updated page remains 320px wide.
- At 820px, the article still reserved left and right rails, leaving a 332px reading panel and three cramped Quick Read facets. Stack the article below 1150px, collapse its contents navigation, and stack Quick Read facets. The updated reading panel is 772px wide.
- Header search had a 34px input and 13px text. Its mobile form is now 46px, leaving a 44px input inside its border, with 16px text to avoid iOS focus zoom. Resize search suggestions when the visual viewport changes; Escape also releases header search focus.
- Several remaining citation/share controls and disclosure summaries were 15–30px tall. Give these controls and section links at least 44px of height. Expose nested section links within the mobile contents list; collapse it after navigation and return focus to its visible toggle. Escape closes the contents list.
- Tables used a block-level table as a second scroll area, with 13.5px cells and 10px headers. Restore native table layout within one scroll wrapper, retain column relationships, increase mobile cell text to 15px and headers to 12px, and give columns a readable minimum width. Add a scroll hint and keyboard focus only when the wrapper actually overflows. Existing labelled evidence cards remain stacked. Correct the sticky first-column header background so its white text keeps the same burgundy contrast as the other headers.
- Several homepage sections retained 48px gutters on phones. Reduce them to 24px below 600px, allow section-header links to wrap, and enlarge standalone navigation links.
- The mobile primary drawer already supported submenu expansion, internal scrolling, close paths, and 44px controls. Preserve those behaviors and enlarge the remaining submenu “all” link.

## Verification

Browser checks used the current public site for findings and the locally compiled candidate for verification. Checked phone widths of 320, 390, and 430px; tablet widths of 820 and 1149px; and desktop at 1440px. The baby-cereal page has no page-level horizontal overflow at any of these widths. Checked the homepage, Lead, Spinach, baby cereal, FDA Closer to Zero, source directory, and remediation evidence at 320px without page-level horizontal overflow. Verified section navigation, header search, primary-menu disclosures, table scrolling, and the existing evidence-card presentation.

The static Quartz build passes after running the existing metal-evidence-page generator, which the latest source requires. These generated research pages are preview prerequisites and are not part of the change. Type checking and all 22 focused search, public-presentation, and evidence-pilot tests pass.

The full suite reports 557 passes, two external OpenAlex lookup failures due to unavailable network access, and nine cancelled browser cases because the bundled browser could not launch in this environment. The standard npm test launcher additionally needs a local IPC socket blocked by the sandbox, so the suite was run with `node --import tsx --test`. No scientific content, values, or source records are included in this patch.

Checks use browser viewport emulation; a physical iOS/Android device was not available to verify the on-screen keyboard.
