import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { build } from "esbuild";
import { fileURLToPath } from "node:url";

// Render the real shared public components with only their browser resources stubbed.
// This verifies that the public surface contains a link, never a result-entry form.
test("public ingredient pages render the one-line Pro CTA and the legacy tool renders no form", async () => {
  const root = fileURLToPath(new URL("../../", import.meta.url));
  const output = await build({
    stdin: {
      contents: `
    import render from 'preact-render-to-string';
    import Content from './quartz/components/pages/Content';
    import Tool from './quartz/components/BrandPreScreenTool';
    export const ingredient=(slug)=>render(Content()({fileData:{slug:'ingredients/'+slug,filePath:'wiki/ingredients/'+slug+'.md',frontmatter:{}},cfg:{},tree:{type:'root',children:[]}}));
    export const legacy=()=>render(Tool()({fileData:{frontmatter:{type:'brand-pre-screen-tool'}}}));
  `,
      resolveDir: root,
      loader: "tsx",
    },
    bundle: true,
    write: false,
    platform: "node",
    format: "esm",
    jsx: "automatic",
    jsxImportSource: "preact",
    banner: {
      js: `import {createRequire} from 'node:module';const require=createRequire(${JSON.stringify(import.meta.url)});`,
    },
    plugins: [
      {
        name: "browser-resources",
        setup(b) {
          b.onLoad({ filter: /\.(scss|inline\.ts)$/ }, () => ({
            contents: 'export default ""',
            loader: "js",
          }));
        },
      },
    ],
  });
  const module = await import(
    "data:text/javascript;base64," +
      Buffer.from(output.outputFiles[0].text).toString("base64")
  );
  for (const slug of ["rice-protein", "pea-protein"]) {
    const html = module.ingredient(slug);
    assert.match(html, new RegExp(`href="/pro/compare/${slug}"`));
    assert.match(html, /Compare your lab result in Index Pro/);
    assert.doesNotMatch(html, /<form|<input|<select/);
    const source = fs.readFileSync(
      new URL(`../../wiki/ingredients/${slug}.md`, import.meta.url),
      "utf8",
    );
    assert.doesNotMatch(
      source,
      /compare-a-(?:rice|pea)-result|data-lab-comparator|data-brand-pre-screen|Check 1\s*[·:]/i,
    );
  }
  assert.match(module.legacy(), /href="\/pro"/);
  assert.doesNotMatch(module.legacy(), /<form|<input|<select/);
});
