// /api/corrections — public correction-submission endpoint.
//
// Closes the GA gap named on wiki/contact.md ("A dedicated correction-submission
// form will be added to this page before general availability") and on
// wiki/errata.md ("A web form for correction submissions is on the roadmap").
//
// Method: POST application/json
// Body: { page, claim, correction, source, submitter_name?, submitter_email?,
//         submitter_relationship?, hp? }
//
// `hp` is a honeypot field — clients leave it blank; bots fill it. Submissions
// with a non-empty honeypot are accepted (200) but silently discarded.
//
// Persistence (graceful chain — the endpoint never 500s if any single sink
// fails, because losing a submission is worse than logging the failure):
//   1. console.log (`hmi.correction.submitted` line, structured JSON). This
//      is the always-available channel — Vercel runtime logs are queryable
//      via the staff runtime-logs MCP tool and survive cold starts.
//   2. /tmp/corrections-<id>.json (best-effort warm-instance cache; lost on
//      cold start — useful only for the in-progress request loop).
//   3. Vercel Blob (if BLOB_READ_WRITE_TOKEN is set) under
//      corrections/<YYYY>/<MM>/<id>.json — durable, queryable, private. If
//      the @vercel/blob package isn't installed or the token isn't set, the
//      blob step is skipped and the submission still succeeds via channels
//      1 and 2.
//
// The handler ORIGINAL design wrote to data/evidence/corrections.jsonl — but
// Vercel function filesystems are read-only outside /tmp, so that path 500s
// every request. The graceful chain above is what makes the endpoint actually
// work in production.
//
// The endpoint never stores raw IP addresses (only a SHA-256 hash + truncated
// user-agent), and never sends email — the editorial team polls runtime logs
// (and the blob store when wired). The plaintext email channel at
// karen@paleofoundation.com remains the supported backup per wiki/errata.md.

import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"

const MAX_FIELD_LENGTH = 4000
const MAX_PAGE_LENGTH = 400
const MAX_EMAIL_LENGTH = 320
const MAX_NAME_LENGTH = 200
const MAX_RELATIONSHIP_LENGTH = 400
const REQUIRED_FIELDS = ["page", "claim", "correction"]

export default async function handler(req, res) {
  setCors(res)
  if (req.method === "OPTIONS") { res.status(204).end(); return }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS")
    res.status(405).json({ error: "Method not allowed. Use POST." })
    return
  }

  let body
  try { body = await readJson(req) } catch {
    res.status(400).json({ error: "Invalid JSON body." })
    return
  }

  const validation = validate(body)
  if (validation.error) {
    res.status(400).json({ error: validation.error })
    return
  }

  const record = buildRecord(validation.fields, req)

  if (validation.fields.honeypot) {
    res.status(200).json({
      ok: true,
      id: record.id,
      message: "Thank you. Your correction has been received.",
    })
    return
  }

  const sinks = await persist(record)

  res.status(200).json({
    ok: true,
    id: record.id,
    received_at: record.received_at,
    acknowledgement_target: "5 business days",
    sinks,
    message:
      "Thank you. Your correction has been logged. The editorial team will reply within 5 business days; substantive corrections that require external review may take 2–6 weeks per /errata.",
  })
}

function validate(body) {
  if (!body || typeof body !== "object") return { error: "Body must be a JSON object." }
  const fields = {}

  for (const key of REQUIRED_FIELDS) {
    const value = body[key]
    if (typeof value !== "string" || value.trim().length === 0) {
      return { error: `Missing required field: ${key}` }
    }
    if (value.length > MAX_FIELD_LENGTH) {
      return { error: `Field ${key} exceeds ${MAX_FIELD_LENGTH} characters.` }
    }
    fields[key] = value.trim()
  }

  if (fields.page.length > MAX_PAGE_LENGTH) {
    return { error: `Field page exceeds ${MAX_PAGE_LENGTH} characters.` }
  }

  const source = typeof body.source === "string" ? body.source.trim() : ""
  if (source.length > MAX_FIELD_LENGTH) {
    return { error: `Field source exceeds ${MAX_FIELD_LENGTH} characters.` }
  }
  fields.source = source

  const submitterName = typeof body.submitter_name === "string" ? body.submitter_name.trim() : ""
  if (submitterName.length > MAX_NAME_LENGTH) {
    return { error: `Field submitter_name exceeds ${MAX_NAME_LENGTH} characters.` }
  }
  fields.submitter_name = submitterName

  const submitterEmail = typeof body.submitter_email === "string" ? body.submitter_email.trim() : ""
  if (submitterEmail.length > MAX_EMAIL_LENGTH) {
    return { error: `Field submitter_email exceeds ${MAX_EMAIL_LENGTH} characters.` }
  }
  if (submitterEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submitterEmail)) {
    return { error: "submitter_email is not a valid email address." }
  }
  fields.submitter_email = submitterEmail

  const submitterRelationship =
    typeof body.submitter_relationship === "string" ? body.submitter_relationship.trim() : ""
  if (submitterRelationship.length > MAX_RELATIONSHIP_LENGTH) {
    return { error: `Field submitter_relationship exceeds ${MAX_RELATIONSHIP_LENGTH} characters.` }
  }
  fields.submitter_relationship = submitterRelationship

  fields.honeypot = typeof body.hp === "string" && body.hp.trim().length > 0

  return { fields }
}

function buildRecord(fields, req) {
  const receivedAt = new Date().toISOString()
  const id = crypto.randomUUID()
  const ipHash = hashIp(req)
  const userAgent = String(req.headers["user-agent"] || "").slice(0, 240)
  return {
    id,
    received_at: receivedAt,
    page: fields.page,
    claim: fields.claim,
    correction: fields.correction,
    source: fields.source || null,
    submitter_name: fields.submitter_name || null,
    submitter_email: fields.submitter_email || null,
    submitter_relationship: fields.submitter_relationship || null,
    ip_hash: ipHash,
    user_agent: userAgent,
    status: fields.honeypot ? "honeypot_discarded" : "acknowledged_pending_review",
  }
}

function hashIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim()
  const remote = forwarded || req.socket?.remoteAddress || ""
  if (!remote) return null
  return crypto.createHash("sha256").update(remote).digest("hex").slice(0, 16)
}

async function persist(record) {
  const sinks = { console: false, tmp: false, blob: false, blob_url: null }

  // Sink 1: structured console log (always available; Vercel runtime logs
  // are the durable channel until blob is wired). The marker prefix lets
  // staff grep runtime logs with one filter expression.
  try {
    console.log("hmi.correction.submitted " + JSON.stringify(record))
    sinks.console = true
  } catch {
    /* console.log should never throw, but defensive */
  }

  // Sink 2: best-effort write to /tmp/. Ephemeral — lost on cold start —
  // useful as a warm-instance audit cache for staff debugging the function.
  try {
    await fs.writeFile(`/tmp/correction-${record.id}.json`, JSON.stringify(record, null, 2), "utf8")
    sinks.tmp = true
  } catch (err) {
    console.error("corrections /tmp write failed:", String(err && err.message || err))
  }

  // Sink 3: Vercel Blob (durable). Skipped silently if BLOB_READ_WRITE_TOKEN
  // is not set or the @vercel/blob package isn't installed — those are the
  // pre-provisioning states, not error states.
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { put } = await import("@vercel/blob")
      const d = new Date(record.received_at)
      const yyyy = d.getUTCFullYear()
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0")
      const key = `corrections/${yyyy}/${mm}/${record.id}.json`
      // Submitter_email is PII; the correction body can include personal
      // context. Use private access so the blob is not publicly readable.
      // If the installed @vercel/blob version doesn't support "private",
      // the put() call throws and we fall through to console+tmp.
      const blob = await put(key, JSON.stringify(record, null, 2), {
        access: "private",
        contentType: "application/json",
        addRandomSuffix: false,
      })
      sinks.blob = true
      sinks.blob_url = blob.url
    } catch (err) {
      console.error("corrections blob write failed:", String(err && err.message || err))
    }
  }

  return sinks
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = ""
    req.setEncoding?.("utf8")
    req.on("data", (chunk) => {
      raw += chunk
      if (raw.length > 64 * 1024) {
        req.destroy()
        reject(new Error("Body too large"))
      }
    })
    req.on("end", () => {
      try { resolve(raw ? JSON.parse(raw) : {}) } catch (err) { reject(err) }
    })
    req.on("error", reject)
  })
}

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  res.setHeader("Cache-Control", "no-store")
  res.setHeader("Content-Type", "application/json; charset=utf-8")
}
