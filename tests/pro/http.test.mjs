import test from "node:test";
import assert from "node:assert/strict";
import { Readable, PassThrough } from "node:stream";
import { readRawBody } from "../../lib/pro/http.mjs";

// Vercel buffers the incoming stream, then replays data/end while retaining
// the original stream's ended state. Do not use its parsed req.body for signing.
// https://github.com/vercel/vercel/blob/main/packages/node/src/serverless-functions/helpers.ts
test("raw body retains exact signature bytes when Vercel replays an ended stream", async () => {
  const bytes = Buffer.from(' { "synthetic": "µg/kg", "value": 0.12 }\n');
  const req = Readable.from([bytes]);
  await new Promise((resolve) => {
    req.on("data", () => {});
    req.on("end", resolve);
  });
  assert.ok(req.readableEnded);
  const replay = Readable.from([bytes]);
  const originalOn = req.on.bind(req);
  req.read = replay.read.bind(replay);
  req.on = (event, listener) =>
    ["data", "end"].includes(event)
      ? replay.on(event, listener)
      : originalOn(event, listener);
  assert.deepEqual(await readRawBody(req), bytes);
});

test("body limits and aborted requests reject without returning partial lab data", async () => {
  await assert.rejects(
    readRawBody(Readable.from(["1234", "5678"]), 7),
    (e) => e.status === 413,
  );
  const req = new PassThrough();
  const pending = readRawBody(req);
  req.write("partial");
  req.emit("aborted");
  await assert.rejects(pending, (e) => e.status === 400);
  req.end();
});
