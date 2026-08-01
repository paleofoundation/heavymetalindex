import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Heavy Metal Index — Quartz 4 configuration.
 * Content lives in `wiki/` (not the Quartz default `content/`); see package.json
 * scripts for the `-d wiki` flag wiring.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Heavy Metal Index",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-74X1550KX7",
    },
    locale: "en-US",
    baseUrl: "heavymetalindex.com",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "_TEMPLATE.md",
      "raw",
      "**/raw/**",
      // Genuinely internal, unlinked content kept out of the public build,
      // sitemap, and search index:
      //   - briefings/  weekly internal briefings, frontmatter
      //     audience: [karen, internal]; zero inbound links.
      //   - queries/    researcher-only query scratchpad; zero inbound links.
      // Bare name + /** because globby's `ignore` needs the glob form to drop
      // directory contents (cf. the "raw" / "**/raw/**" pair above).
      //
      // NOT excluded, deliberately: batch-reports/ and lint/ are linked from
      // 170+ source pages and the Update-History log as ingest provenance /
      // QA records. CLAUDE.md Part 4 treats descriptive batch reports as a
      // reconstructibility artifact, so they stay published (nav-hidden, not
      // primary navigation). Excluding them would 404 those provenance links.
      "briefings",
      "briefings/**",
      "queries",
      "queries/**",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Lora serif headings + Inter body — the approved Examine-style
        // register: serif headings read as authoritative reference, Inter body
        // stays clean and modern. IBM Plex Mono retained for data fields,
        // citation slugs, and code.
        // Load the full weight ranges the design actually uses (matches
        // microbiomemedicine): headings apply Lora 600 and the nav Inter 500,
        // which were being faux-synthesized when only 400/700 were fetched.
        header: { name: "Lora", weights: [400, 500, 600, 700], includeItalic: false },
        body: { name: "Inter", weights: [300, 400, 500, 600, 700] },
        code: { name: "IBM Plex Mono", weights: [400, 500, 600] },
      },
      colors: {
        // Palette derived from answerthis.io. Cool near-white background,
        // dark cool-gray body text, burgundy accent (#8B2A4A) used sparingly
        // on links, active states, and the citation tier pill. Replaces the
        // previous warm coffee/sienna palette.
        // Aligned to "Heavy Metal Index v3.dc.html" (global rules, lines 23-32).
        // These tokens drive every legacy rule in the `legacy` cascade layer, so
        // matching them to v3 means a rule that leaks through renders the same
        // colour it would have rendered anyway. The alternative -- fighting each
        // leak with specificity -- does not scale past one page.
        lightMode: {
          light: "#faf7f4",
          lightgray: "#e8e1db",
          // Darkened from #9c9890 (2.82:1 on --light, failed WCAG AA) to
          // #767067 (4.82:1). --gray drives all secondary text — content
          // meta, TOC, breadcrumbs, table headers, captions — so this one
          // token lifts every muted-text surface to AA.
          gray: "#736b6e",
          darkgray: "#3f3a3f",
          dark: "#2b1f24",
          secondary: "#8B2A4A",
          tertiary: "#a9a1a2",
          highlight: "rgba(139, 42, 74, 0.06)",
          textHighlight: "#f0e68c55",
        },
        darkMode: {
          light: "#141414",
          lightgray: "#2d2d2d",
          // Lightened from #6a6a6a (3.41:1 on dark --light, failed WCAG AA)
          // to #848484 (4.93:1). Mirrors the light-mode --gray lift.
          gray: "#848484",
          darkgray: "#cfcfcf",
          dark: "#e8e6e1",
          secondary: "#C76B8E",
          tertiary: "#9aa0a8",
          highlight: "rgba(199, 107, 142, 0.1)",
          textHighlight: "#b3aa0255",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      // Drop the leading body H1 that repeats the page title (HeroBand already
      // renders it), promoting its text to `title` when frontmatter has none.
      // MUST run before TableOfContents and Description so both see the
      // corrected document. See titleHeading.ts.
      Plugin.TitleHeading(),
      Plugin.TableOfContents(),
      // Auto-link first prose mention of unambiguous metals; must run before
      // CrawlLinks so the inserted links are resolved + counted in the graph.
      Plugin.AutoLink(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      // Resolve aliasless [[slug]] link text to the target page's title so bare
      // wikilinks read as page names site-wide. Runs after CrawlLinks so
      // data-slug and link classes are present. See linkTitles.ts.
      Plugin.ResolveLinkTitles(),
      // Stamp citation metadata (authors/title/journal/review-link) onto source
      // links so the inline cite-card renders the mm-style hover card. After
      // ResolveLinkTitles so data-slug is present. See sourceCiteMeta.ts.
      Plugin.SourceCiteMeta(),
      // Fold question-style <h3> sections into `.qa` collapsibles (proof accordion)
      // + emit the data-hmi-faq contract for FAQPage schema. See collapsibleQuestions.ts.
      Plugin.CollapsibleQuestions(),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
