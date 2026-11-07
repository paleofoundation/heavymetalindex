import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import handler from "../../api/account.mjs";
import { response } from "./support.mjs";

test("account bootstrap loads current Clerk core and UI under its CSP and renders sign-in", async () => {
  const before = process.env.CLERK_PUBLISHABLE_KEY;
  process.env.CLERK_PUBLISHABLE_KEY =
    "pk_test_" +
    Buffer.from("test-tenant.clerk.accounts.dev$").toString("base64");
  try {
    const res = response();
    handler({ method: "GET" }, res);
    assert.equal(res.statusCode, 200);
    const csp = res.headers["content-security-policy"];
    assert.match(csp, /https:\/\/\*\.protect\.clerk\.com:\*/);
    assert.match(csp, /worker-src 'self' blob:/);
    const appended = [];
    const elements = {};
    let mounted = false,
      loadOptions;
    const context = {
      document: {
        querySelectorAll: () => [],
        getElementById: (id) => (elements[id] ??= { hidden: true }),
        createElement: () => ({
          dataset: {},
          addEventListener(name, fn) {
            this[name] = fn;
          },
        }),
        head: {
          append(script) {
            appended.push(script);
            if (script.onload) script.onload();
          },
        },
      },
      window: { __internal_ClerkUICtor: class MockUI {} },
      Clerk: {
        load: async (options) => {
          loadOptions = options;
        },
        mountSignIn: () => {
          mounted = true;
        },
      },
    };
    const code = res.body.match(
      /<script nonce="[^"]+">([\s\S]*?)<\/script>/,
    )[1];
    vm.runInNewContext(code, context);
    assert.match(appended[0].src, /@clerk\/clerk-js@6/);
    await appended[0].load();
    assert.match(appended[1].src, /@clerk\/ui@1/);
    assert.equal(loadOptions.ui.ClerkUI, context.window.__internal_ClerkUICtor);
    assert.ok(mounted);
    appended[0].error();
    assert.match(elements.status.textContent, /temporarily unavailable/);
  } finally {
    if (before === undefined) delete process.env.CLERK_PUBLISHABLE_KEY;
    else process.env.CLERK_PUBLISHABLE_KEY = before;
  }
});
