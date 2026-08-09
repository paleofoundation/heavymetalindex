import * as React from "react"

// Corrections — the reader-facing "Submit a correction" form.
//
// Source of truth: quartz/components/Corrections.tsx is HEADLESS (it renders
// null and only ships styles/corrections.scss + scripts/corrections.inline.ts
// to every page). The actual form markup lives in the markdown that embeds it,
// wiki/errata.md and wiki/contact.md, and is what corrections.scss styles and
// corrections.inline.ts wires to /api/corrections. This wrapper re-expresses
// that markdown-embedded form as a React component.
//
// Per the design-sync rule for interactive components, this renders only the
// STATIC RESTING STATE: no submit handler, no in-flight disabling, no status
// text. The data-hmi-correction-form endpoint attribute and the empty
// [data-hmi-correction-status] live-region are kept because they are part of
// the resting DOM (and the latter carries a real CSS rule), not because the
// script runs here.

export interface CorrectionField {
  /**
   * `name` attribute. Load-bearing: the endpoint reads `page`, `claim` and
   * `correction` by name, and `hp` is the honeypot. Do not rename these.
   */
  name: string
  /** Bold field label (rendered inside `.hmi-correction-label`). */
  label: string
  /**
   * Parenthetical hint shown lighter/gray after the label, inside
   * `.hmi-correction-hint`. A ReactNode so the default can carry inline markup
   * such as the `<code>` sample slug on the page-URL field.
   */
  hint?: React.ReactNode
  /** Control kind. "textarea" renders a `<textarea>`; anything else an `<input>` of that type. */
  type?: "text" | "email" | "url" | "textarea"
  /** Whether the control is required. */
  required?: boolean
  /** Row count for a textarea. */
  rows?: number
  /** `maxlength` attribute. */
  maxLength?: number
  /** `autocomplete` attribute (inputs only). */
  autoComplete?: string
}

export interface CorrectionsProps {
  /** Endpoint written to `data-hmi-correction-form`; the inline script POSTs here. */
  endpoint?: string
  /** Fieldset legend. */
  legend?: string
  /** The fields, in order. Defaults to the live errata/contact correction form. */
  fields?: CorrectionField[]
  /** Visible label of the honeypot field (hidden off-screen; traps bots). */
  honeypotLabel?: string
  /** Submit button text. */
  submitLabel?: string
}

// The live correction form, verbatim from wiki/errata.md (field names, order,
// limits and hint copy are the real content). Kept as data so the same DOM is
// reproduced exactly while the copy stays overridable.
const DEFAULT_FIELDS: CorrectionField[] = [
  {
    name: "page",
    label: "Page URL or slug",
    hint: (
      <>
        (required — e.g. <code>ingredients/turmeric</code> or the full https URL)
      </>
    ),
    type: "text",
    required: true,
    maxLength: 400,
    autoComplete: "off",
  },
  {
    name: "claim",
    label: "The claim, number, or citation you are challenging",
    hint: "(required — quote the specific text on the page)",
    type: "textarea",
    required: true,
    rows: 3,
    maxLength: 4000,
  },
  {
    name: "correction",
    label: "The correction you believe is warranted",
    hint: "(required)",
    type: "textarea",
    required: true,
    rows: 3,
    maxLength: 4000,
  },
  {
    name: "source",
    label: "Supporting source",
    hint: "(strongly preferred — peer-reviewed paper, agency document, or formal dataset; include the DOI or URL)",
    type: "textarea",
    rows: 2,
    maxLength: 4000,
  },
  {
    name: "submitter_name",
    label: "Your name",
    hint: "(optional)",
    type: "text",
    maxLength: 200,
    autoComplete: "name",
  },
  {
    name: "submitter_email",
    label: "Your email",
    hint: "(optional — needed only if you want a written reply)",
    type: "email",
    maxLength: 320,
    autoComplete: "email",
  },
  {
    name: "submitter_relationship",
    label: "Your relationship to the subject matter",
    hint: '(optional — e.g. "academic researcher in food toxicology", "brand QA lead", "regulator at FDA")',
    type: "text",
    maxLength: 400,
    autoComplete: "off",
  },
]

export function Corrections({
  endpoint = "/api/corrections",
  legend = "Submit a correction",
  fields = DEFAULT_FIELDS,
  honeypotLabel = "Leave this field empty",
  submitLabel = "Submit correction",
}: CorrectionsProps) {
  return (
    <form className="hmi-correction-form" data-hmi-correction-form={endpoint} noValidate>
      <fieldset>
        <legend>{legend}</legend>
        {fields.map((field, i) => (
          <label key={i}>
            <span className="hmi-correction-label">
              {field.label}
              {field.hint != null ? (
                <>
                  {" "}
                  <span className="hmi-correction-hint">{field.hint}</span>
                </>
              ) : null}
            </span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                rows={field.rows}
                maxLength={field.maxLength}
              />
            ) : (
              <input
                type={field.type ?? "text"}
                name={field.name}
                required={field.required}
                maxLength={field.maxLength}
                autoComplete={field.autoComplete}
              />
            )}
          </label>
        ))}
        <div className="hmi-correction-honeypot" aria-hidden="true">
          <label>
            {honeypotLabel}
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="hmi-correction-actions">
          <span data-hmi-correction-status="" role="status" aria-live="polite"></span>
          <button type="submit">{submitLabel}</button>
        </div>
      </fieldset>
    </form>
  )
}
