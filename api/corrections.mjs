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
// Successful submissions are appended to data/evidence/corrections.jsonl with
// an ISO-8601 received_at, a server-assigned id, and the request's client IP
// hash. A correction is acknowledged in the response envelope per the errata
// page's 5-business-day acknowledgement commitment.
//
// The endpoint never stores raw IP addresses (only a SHA-256 hash + truncated
// user-agent), and never sends email — the editorial team polls the JSONL.
// The plaintext email channel at karen@paleofoundation.com remains the
// supported backup per wiki/errata.md.

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

  try {
    await persist(record)
  } catch (error) {
    console.error("corrections persist failed:", error)
    res.status(500).json({
      error: "Could not record the correction. Please email karen@paleofoundation.com instead.",
    })
    return
  }

  res.status(200).json({
    ok: true,
    id: record.id,
    received_at: record.received_at,
    acknowledgement_target: "5 business days",
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
  const dir = new URL("../data/evidence/", import.meta.url)
  await fs.mkdir(dir, { recursive: true })
  const file = new URL("corrections.jsonl", dir)
  await fs.appendFile(file, JSON.stringify(record) + "\n", "utf8")
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
