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
    analytics: null,
    locale: "en-US",
    baseUrl: "heavymetalindex.com",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "_TEMPLATE.md",
      "raw",
      "**/raw/**",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Inter throughout — modern reference register, Answerthis-aligned.
        // Replaces the Source Serif Pro / Source Sans Pro pairing to match
        // the sans-throughout brief. IBM Plex Mono retained for data fields,
        // citation slugs, and code.
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        // Palette derived from answerthis.io. Cool near-white background,
        // dark cool-gray body text, burgundy accent (#8B2A4A) used sparingly
        // on links, active states, and the citation tier pill. Replaces the
        // previous warm coffee/sienna palette.
        lightMode: {
          light: "#fdfdfc",
          lightgray: "#e8e6e1",
          gray: "#9c9890",
          darkgray: "#2a2d34",
          dark: "#1a1d24",
          secondary: "#8B2A4A",
          tertiary: "#6b6b6b",
          highlight: "rgba(139, 42, 74, 0.06)",
          textHighlight: "#f0e68c55",
        },
        darkMode: {
          light: "#141414",
          lightgray: "#2d2d2d",
          gray: "#6a6a6a",
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
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
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
