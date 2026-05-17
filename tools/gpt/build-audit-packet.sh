#!/usr/bin/env bash
# tools/gpt/build-audit-packet.sh
#
# Build a paste-ready audit packet for a wiki source page. The packet
# concatenates the audit prompt, the wiki source page contents, the
# source evidence (Marker markdown for FM_ handles), and the taxonomy
# snapshot — into a single output that Karen can paste into ChatGPT 5.5
# fast mode.
#
# For MFK_/MR_/PCMF_ handles, the source is a PDF (not pastable). The
# script emits the packet without the SOURCE EVIDENCE block and prints
# the PDF path so Karen knows which file to upload alongside the paste.
#
# Usage:
#   ./tools/gpt/build-audit-packet.sh <cite-key>
#   ./tools/gpt/build-audit-packet.sh hussein2023-freshwater-marine-fish-egypt
#
# Output: writes to data/evidence/audit-packets/<cite-key>.txt, also
# copies to clipboard if pbcopy is available (macOS).

set -euo pipefail

CITE_KEY="${1:-}"

if [[ -z "$CITE_KEY" ]]; then
  echo "Usage: $0 <cite-key>" >&2
  echo "Example: $0 hussein2023-freshwater-marine-fish-egypt" >&2
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
WIKI_PAGE="$REPO_ROOT/wiki/sources/$CITE_KEY.md"
AUDIT_PROMPT="$REPO_ROOT/docs/gpt-collaboration/audit-prompt.md"
TAXONOMY="$REPO_ROOT/docs/gpt-collaboration/taxonomy-snapshot.md"
OUTPUT_DIR="$REPO_ROOT/data/evidence/audit-packets"
OUTPUT="$OUTPUT_DIR/$CITE_KEY.txt"

if [[ ! -f "$WIKI_PAGE" ]]; then
  echo "ERROR: wiki source page not found: $WIKI_PAGE" >&2
  exit 1
fi

if [[ ! -f "$AUDIT_PROMPT" ]]; then
  echo "ERROR: audit prompt not found: $AUDIT_PROMPT" >&2
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

# Extract raw_handle and raw_path from frontmatter
RAW_HANDLE=$(awk -F': *' '/^raw_handle:/ {print $2; exit}' "$WIKI_PAGE" | tr -d '"' | tr -d "'")
RAW_PATH=$(awk -F': *' '/^raw_path:/ {gsub(/^"/,"",$2); gsub(/"$/,"",$2); print $2; exit}' "$WIKI_PAGE")

if [[ -z "$RAW_HANDLE" ]]; then
  echo "ERROR: could not extract raw_handle from $WIKI_PAGE" >&2
  exit 1
fi

# Determine source-evidence mode
SOURCE_MODE=""
SOURCE_PATH=""
case "$RAW_HANDLE" in
  FM_*)
    SOURCE_MODE="markdown"
    SOURCE_PATH="$REPO_ROOT/$RAW_PATH"
    ;;
  MFK_*|MR_*|PCMF_*)
    SOURCE_MODE="pdf"
    SOURCE_PATH="$REPO_ROOT/$RAW_PATH"
    ;;
  *)
    SOURCE_MODE="other"
    SOURCE_PATH="$REPO_ROOT/$RAW_PATH"
    ;;
esac

# Build the packet
{
  # 1. Audit prompt (the fenced block from audit-prompt.md)
  awk '/^```$/{flag=!flag; next} flag' "$AUDIT_PROMPT"
  echo
  echo
  echo "=== WIKI SOURCE PAGE ==="
  echo
  cat "$WIKI_PAGE"
  echo
  echo
  echo "=== SOURCE EVIDENCE ==="
  echo
  if [[ "$SOURCE_MODE" == "markdown" && -f "$SOURCE_PATH" ]]; then
    cat "$SOURCE_PATH"
  else
    echo "[PDF source — upload the file separately to the ChatGPT conversation]"
    echo "[PDF path: $RAW_PATH]"
  fi
  echo
  echo
  echo "=== TAXONOMY SNAPSHOT ==="
  echo
  if [[ -f "$TAXONOMY" ]]; then
    cat "$TAXONOMY"
  else
    echo "[Taxonomy snapshot not pasted; GPT will rely on its project-file copy]"
  fi
} > "$OUTPUT"

PACKET_SIZE=$(wc -c < "$OUTPUT" | tr -d ' ')

# Copy to clipboard if pbcopy is available
if command -v pbcopy >/dev/null 2>&1; then
  cat "$OUTPUT" | pbcopy
  CLIPBOARD_NOTE="(also copied to clipboard)"
else
  CLIPBOARD_NOTE=""
fi

echo "Audit packet built: $OUTPUT ($PACKET_SIZE bytes) $CLIPBOARD_NOTE"
echo
echo "Cite-key:       $CITE_KEY"
echo "Raw handle:     $RAW_HANDLE"
echo "Source mode:    $SOURCE_MODE"
if [[ "$SOURCE_MODE" == "pdf" ]]; then
  echo "PDF to upload:  $SOURCE_PATH"
fi
echo
echo "Next steps:"
echo "  1. Open ChatGPT 5.5 fast mode in the project."
if [[ "$SOURCE_MODE" == "pdf" ]]; then
  echo "  2. Upload the PDF: $SOURCE_PATH"
  echo "  3. Paste the packet (already on your clipboard if pbcopy worked)."
else
  echo "  2. Paste the packet (already on your clipboard if pbcopy worked)."
fi
echo "  3. GPT returns a structured audit. Paste it back to a Claude Code session"
echo "     with: 'apply this audit to $CITE_KEY' (or '/apply-audit $CITE_KEY' if"
echo "     the apply-audit skill is wired)."
