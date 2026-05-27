// SQLite-backed queue for laptop/CI runs of the continuous gap-fill loop.
// Implements the QueueAdapter contract from tools/runtime/queue.mjs.
//
// This is NOT the production queue — Vercel Queues handles production. This
// exists so an engineer can run gap → discovery → extraction → audit row →
// wiki edit on their laptop against fixture data without Vercel auth.
//
// Storage layout (single SQLite file, default data/runtime/local-queue.sqlite):
//
//   queue(
//     id            INTEGER PRIMARY KEY AUTOINCREMENT,
//     message_id    TEXT UNIQUE,           -- random uuid
//     topic         TEXT NOT NULL,
//     body          TEXT NOT NULL,         -- JSON-encoded message
//     idempotency_key TEXT NOT NULL,       -- denormalised for fast lookup
//     attempts      INTEGER NOT NULL DEFAULT 0,
//     available_at  INTEGER NOT NULL,      -- epoch ms; >now() = invisible
//     visible_until INTEGER,               -- epoch ms; null = not leased
//     enqueued_at   INTEGER NOT NULL
//   )
//
//   dead_letter(
//     message_id    TEXT PRIMARY KEY,
//     topic         TEXT NOT NULL,
//     body          TEXT NOT NULL,
//     idempotency_key TEXT NOT NULL,
//     attempts      INTEGER NOT NULL,
//     last_error    TEXT,
//     enqueued_at   INTEGER NOT NULL,
//     dead_lettered_at INTEGER NOT NULL
//   )
//
// Crash safety: if a worker leases a message and crashes before ack/nack,
// `visible_until` expires and the next lease() picks it up again. The
// per-worker idempotency-key check (in the worker, not the queue) prevents
// duplicate side-effects.

import { DatabaseSync } from "node:sqlite"
import { mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { randomUUID } from "node:crypto"
import { backoffDelayMs, MAX_ATTEMPTS } from "./queue.mjs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, "../..")
const DEFAULT_DB_PATH = resolve(REPO_ROOT, "data/runtime/local-queue.sqlite")

/** Create a local SQLite-backed queue adapter. */
export function createLocalQueue(opts = {}) {
  const dbPath = opts.dbPath ?? process.env.HMI_LOCAL_QUEUE_PATH ?? DEFAULT_DB_PATH
  const random = opts.random ?? Math.random
  const now = opts.now ?? Date.now
  mkdirSync(dirname(dbPath), { recursive: true })
  const db = new DatabaseSync(dbPath)
  initSchema(db)

  return {
    backend: "local",
    dbPath,

    enqueue(topic, body, enqueueOpts = {}) {
      const messageId = enqueueOpts.messageId ?? randomUUID()
      const t = now()
      const availableAt = t + (enqueueOpts.delayMs ?? 0)
      if (typeof body !== "object" || body === null) {
        throw new Error("enqueue: body must be an object")
      }
      const idempotencyKey = body.idempotency_key
      if (typeof idempotencyKey !== "string" || idempotencyKey.length === 0) {
        throw new Error("enqueue: body.idempotency_key is required")
      }

      // Dedup: if a non-terminal message with the same (topic, idempotency_key)
      // already exists, return its id instead of inserting a duplicate. This
      // matches Vercel Queues at-least-once semantics and is what makes the
      // hourly discovery enqueue idempotent across runs.
      const existing = db
        .prepare("SELECT message_id FROM queue WHERE topic = ? AND idempotency_key = ?")
        .get(topic, idempotencyKey)
      if (existing && typeof existing.message_id === "string") {
        return { messageId: existing.message_id, deduped: true }
      }

      db.prepare(
        `INSERT INTO queue (message_id, topic, body, idempotency_key, available_at, enqueued_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      ).run(messageId, topic, JSON.stringify(body), idempotencyKey, availableAt, t)
      return { messageId, deduped: false }
    },

    lease(topic, leaseMs = 60_000) {
      const t = now()
      // Pick the oldest message that is either un-leased or whose lease has
      // expired. ORDER BY enqueued_at ASC, id ASC gives a stable FIFO order.
      const row = db
        .prepare(
          `SELECT id, message_id, body, attempts
             FROM queue
            WHERE topic = ?
              AND available_at <= ?
              AND (visible_until IS NULL OR visible_until <= ?)
            ORDER BY enqueued_at ASC, id ASC
            LIMIT 1`,
        )
        .get(topic, t, t)
      if (!row) return null
      db.prepare("UPDATE queue SET visible_until = ?, attempts = attempts + 1 WHERE id = ?").run(
        t + leaseMs,
        row.id,
      )
      let body
      try {
        body = JSON.parse(row.body)
      } catch {
        // Poisoned row: move straight to dead-letter to avoid an infinite
        // re-lease loop. attempts is incremented above, so the move is fair.
        moveToDeadLetter(db, row.id, row.message_id, topic, row.body, "(unparseable)", row.attempts + 1, "json_parse_failed", t)
        return null
      }
      return { messageId: row.message_id, body, attempts: row.attempts + 1 }
    },

    ack(messageId) {
      db.prepare("DELETE FROM queue WHERE message_id = ?").run(messageId)
    },

    nack(messageId, errorMessage = "") {
      const row = db
        .prepare("SELECT id, topic, body, idempotency_key, attempts FROM queue WHERE message_id = ?")
        .get(messageId)
      if (!row) return { dead_lettered: false }
      if (row.attempts >= MAX_ATTEMPTS) {
        moveToDeadLetter(
          db,
          row.id,
          messageId,
          row.topic,
          row.body,
          row.idempotency_key,
          row.attempts,
          errorMessage,
          now(),
        )
        return { dead_lettered: true }
      }
      const delay = backoffDelayMs(row.attempts, random)
      db.prepare(
        "UPDATE queue SET visible_until = NULL, available_at = ? WHERE id = ?",
      ).run(now() + delay, row.id)
      return { dead_lettered: false, retry_in_ms: delay }
    },

    listDeadLetter(topic = null, limit = 100) {
      const rows = topic
        ? db
            .prepare(
              "SELECT * FROM dead_letter WHERE topic = ? ORDER BY dead_lettered_at DESC LIMIT ?",
            )
            .all(topic, limit)
        : db
            .prepare("SELECT * FROM dead_letter ORDER BY dead_lettered_at DESC LIMIT ?")
            .all(limit)
      return rows.map((r) => ({
        message_id: r.message_id,
        topic: r.topic,
        body: safeParse(r.body),
        idempotency_key: r.idempotency_key,
        attempts: r.attempts,
        last_error: r.last_error,
        enqueued_at: new Date(r.enqueued_at).toISOString(),
        dead_lettered_at: new Date(r.dead_lettered_at).toISOString(),
      }))
    },

    /** Test/debug helper: count messages in a topic that are currently visible. */
    pendingCount(topic) {
      const t = now()
      const row = db
        .prepare(
          `SELECT COUNT(*) AS n FROM queue
            WHERE topic = ? AND available_at <= ?
              AND (visible_until IS NULL OR visible_until <= ?)`,
        )
        .get(topic, t, t)
      return row && typeof row.n === "number" ? row.n : 0
    },

    close() {
      db.close()
    },
  }
}

function initSchema(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS queue (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message_id TEXT UNIQUE NOT NULL,
      topic TEXT NOT NULL,
      body TEXT NOT NULL,
      idempotency_key TEXT NOT NULL,
      attempts INTEGER NOT NULL DEFAULT 0,
      available_at INTEGER NOT NULL,
      visible_until INTEGER,
      enqueued_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS queue_topic_avail
      ON queue(topic, available_at, visible_until);
    CREATE INDEX IF NOT EXISTS queue_topic_idemp
      ON queue(topic, idempotency_key);

    CREATE TABLE IF NOT EXISTS dead_letter (
      message_id TEXT PRIMARY KEY,
      topic TEXT NOT NULL,
      body TEXT NOT NULL,
      idempotency_key TEXT NOT NULL,
      attempts INTEGER NOT NULL,
      last_error TEXT,
      enqueued_at INTEGER NOT NULL,
      dead_lettered_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS dead_letter_topic ON dead_letter(topic, dead_lettered_at);
  `)
}

function moveToDeadLetter(
  db,
  rowId,
  messageId,
  topic,
  body,
  idempotencyKey,
  attempts,
  lastError,
  t,
) {
  const enqueuedAt = db.prepare("SELECT enqueued_at FROM queue WHERE id = ?").get(rowId)
  db.prepare(
    `INSERT OR REPLACE INTO dead_letter
       (message_id, topic, body, idempotency_key, attempts, last_error, enqueued_at, dead_lettered_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    messageId,
    topic,
    body,
    idempotencyKey,
    attempts,
    lastError,
    enqueuedAt?.enqueued_at ?? t,
    t,
  )
  db.prepare("DELETE FROM queue WHERE id = ?").run(rowId)
}

function safeParse(s) {
  try {
    return JSON.parse(s)
  } catch {
    return null
  }
}
