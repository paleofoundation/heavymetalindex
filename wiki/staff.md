---
title: Staff Access
description: Restricted staff access entry point for Heavy Metal Index internal review tools.
audience: [internal]
updated: 2026-04-30
noindex: true
---

<div class="hmi-staff-access">
  <div class="hmi-staff-kicker">Restricted access</div>
  <h1>Staff Access</h1>
  <p>Internal Heavy Metal Index review tools are restricted to authorized Paleo Foundation staff and are not part of the public evidence index.</p>

  <div class="hmi-staff-status">
    <div>
      <strong>Public login</strong>
      <span>Protected at deployment</span>
    </div>
    <div>
      <strong>Standards Workbench</strong>
      <span>Local/private only</span>
    </div>
    <div>
      <strong>Search indexing</strong>
      <span>Noindex</span>
    </div>
  </div>

  <p>The current standards workbench runs locally and reads the same evidence and regulation files used by the public site. Hosted staff access is gated before this page loads; internal evidence-review, standards, or certification tooling should remain behind that same gate.</p>

  <a class="hmi-staff-primary" href="/contact">Request access</a>
</div>

## Access Model

- Public pages show reviewed Heavy Metal Index evidence, citations, and regulatory context.
- Internal tools may use draft extraction records, standards candidates, confidence calculations, and review queues.
- Internal standards data should not be published unless it has been explicitly approved for public release.

## Deployment Requirements

Set `HMI_STAFF_USER` and `HMI_STAFF_PASSWORD` as deployment environment variables before exposing this route. If either value is missing, the staff route fails closed.

Before a hosted workbench is linked from this page, add session protection and role-based authorization for staff-only data.
