// Unit tests for the SQLite-backed local queue.
// Run with: npm test -- tools/runtime/local-queue.test.mjs

import assert from "node:assert/strict"
import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { test } from "node:test"
import { createLocalQueue } from "./local-queue.mjs"
import { backoffDelayMs, MAX_ATTEMPTS } from "./queue.mjs"

function freshQueue() {
  const dir = mkdtempSync(join(tmpdir(), "hmi-local-queue-"))
  const dbPath = join(dir, "q.sqlite")
  let t = 1_700_000_000_000
  const q = createLocalQueue({
    dbPath,
    random: () => 0.5, // deterministic jitter midpoint
    now: () => t,
  })
  return {
    q,
    advance(ms) {
      t += ms
    },
    cleanup() {
      q.close()
      rmSync(dir, { recursive: true, force: true })
    },
  }
}

test("enqueue then lease returns the same body and message_id", () => {
  const { q, cleanup } = freshQueue()
  try {
    const body = { idempotency_key: "k1", payload: 42 }
    const { messageId } = q.enqueue("discovery.candidates", body)
    const leased = q.lease("discovery.candidates")
    assert.ok(leased)
    assert.equal(leased.messageId, messageId)
    assert.deepEqual(leased.body, body)
    assert.equal(leased.attempts, 1)
  } finally {
    cleanup()
  }
})

test("lease hides the message until visibility expires", () => {
  const { q, advance, cleanup } = freshQueue()
  try {
    q.enqueue("t", { idempotency_key: "k" })
    const first = q.lease("t", 5_000)
    assert.ok(first)
    // Same lease window — not visible
    const second = q.lease("t", 5_000)
    assert.equal(second, null)
    advance(6_000)
    const third = q.lease("t", 5_000)
    assert.ok(third)
    assert.equal(third.attempts, 2)
  } finally {
    cleanup()
  }
})

test("ack removes the message permanently", () => {
  const { q, cleanup } = freshQueue()
  try {
    const { messageId } = q.enqueue("t", { idempotency_key: "k" })
    const leased = q.lease("t")
    assert.ok(leased)
    q.ack(messageId)
    assert.equal(q.lease("t"), null)
  } finally {
    cleanup()
  }
})

test("nack re-queues with backoff, dead-letters after MAX_ATTEMPTS", () => {
  const { q, advance, cleanup } = freshQueue()
  try {
    const { messageId } = q.enqueue("t", { idempotency_key: "k" })
    for (let i = 1; i < MAX_ATTEMPTS; i++) {
      const leased = q.lease("t")
      assert.ok(leased, `lease attempt ${i}`)
      assert.equal(leased.attempts, i)
      const r = q.nack(leased.messageId, `fail-${i}`)
      assert.equal(r.dead_lettered, false)
      assert.ok(typeof r.retry_in_ms === "number" && r.retry_in_ms >= 0)
      advance(r.retry_in_ms + 1)
    }
    const final = q.lease("t")
    assert.ok(final)
    assert.equal(final.attempts, MAX_ATTEMPTS)
    const r = q.nack(final.messageId, "final-fail")
    assert.equal(r.dead_lettered, true)
    // After dead-letter the message is no longer in the live queue.
    assert.equal(q.lease("t"), null)
    const dlq = q.listDeadLetter("t")
    assert.equal(dlq.length, 1)
    assert.equal(dlq[0].message_id, messageId)
    assert.equal(dlq[0].attempts, MAX_ATTEMPTS)
    assert.equal(dlq[0].last_error, "final-fail")
  } finally {
    cleanup()
  }
})

test("dedup: re-enqueueing the same idempotency_key returns the existing id", () => {
  const { q, cleanup } = freshQueue()
  try {
    const a = q.enqueue("t", { idempotency_key: "dup", n: 1 })
    const b = q.enqueue("t", { idempotency_key: "dup", n: 2 })
    assert.equal(b.deduped, true)
    assert.equal(b.messageId, a.messageId)
    // Only the first body is leased; the second was a no-op.
    const leased = q.lease("t")
    assert.deepEqual(leased.body, { idempotency_key: "dup", n: 1 })
    assert.equal(q.pendingCount("t"), 0)
  } finally {
    cleanup()
  }
})

test("crash safety: a leased-then-abandoned message becomes available again", () => {
  const { q, advance, cleanup } = freshQueue()
  try {
    q.enqueue("t", { idempotency_key: "k" })
    const leased = q.lease("t", 1_000)
    assert.ok(leased)
    // Simulate worker crash: no ack, no nack. Visibility expires.
    advance(2_000)
    const recovered = q.lease("t", 1_000)
    assert.ok(recovered)
    assert.equal(recovered.attempts, 2)
  } finally {
    cleanup()
  }
})

test("FIFO order across multiple enqueues", () => {
  const { q, advance, cleanup } = freshQueue()
  try {
    q.enqueue("t", { idempotency_key: "a" })
    advance(1)
    q.enqueue("t", { idempotency_key: "b" })
    advance(1)
    q.enqueue("t", { idempotency_key: "c" })
    const seen = []
    for (let i = 0; i < 3; i++) {
      const leased = q.lease("t")
      assert.ok(leased)
      seen.push(leased.body.idempotency_key)
      q.ack(leased.messageId)
    }
    assert.deepEqual(seen, ["a", "b", "c"])
  } finally {
    cleanup()
  }
})

test("backoffDelayMs grows exponentially and respects cap", () => {
  // With jitter=0.5 (random=0.5 → 0 jitter), the delay is exactly base*2^(n-1).
  const noJitter = () => 0.5
  assert.equal(backoffDelayMs(1, noJitter), 30_000)
  assert.equal(backoffDelayMs(2, noJitter), 60_000)
  assert.equal(backoffDelayMs(3, noJitter), 120_000)
  // Capped at 1h regardless of attempts.
  assert.equal(backoffDelayMs(20, noJitter), 60 * 60 * 1000)
})
