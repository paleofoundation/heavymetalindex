# Production redeploy trigger (2026-08-18)

PR #125 (expose CC BY 4.0 in the JSON-LD and page head) merged to main on 2026-08-17 as commit 52e4a57, but no production deployment was created for it: that day's GitHub outage dropped the deploy webhook to Vercel, and no later commit re-triggered a build. This trivial commit exists only to fire the webhook and rebuild main so the license change goes live. Safe to delete later.
