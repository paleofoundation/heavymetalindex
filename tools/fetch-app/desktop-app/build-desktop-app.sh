#!/bin/bash
# RETIRED installer. The standalone "Heavy Metal Fetch.app" has been superseded
# by "Central Library.app" (tools/central-library/desktop-app). The two bundles
# collided on the same Desktop filename AND the same window title, so building
# this one silently overwrote the other and made the tools indistinguishable.
#
# This installer is disabled so the confusing icon cannot be recreated.
# Use instead:
#   npm run central-library:install-desktop
#
# Nothing else about the fetch-app is removed: the server still runs via
# `npm run fetch-app` (localhost:8091) and Central Library reuses its engine.
#
# If you genuinely need the legacy desktop icon back, re-run with the override:
#   HMI_ALLOW_LEGACY_FETCH_APP=1 npm run fetch-app:install-desktop
#
# Optional first arg overrides the destination .app path (override mode only).

set -euo pipefail

if [ "${HMI_ALLOW_LEGACY_FETCH_APP:-0}" != "1" ]; then
  echo "fetch-app desktop installer is retired." >&2
  echo "Use:  npm run central-library:install-desktop" >&2
  echo "(override with HMI_ALLOW_LEGACY_FETCH_APP=1 if you truly need the legacy icon)" >&2
  exit 1
fi

# --- legacy build path (runs only under the override) ---------------------
SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(cd "$SRC_DIR/../../.." && pwd)"
APP="${1:-$HOME/Desktop/Heavy Metal Fetch.app}"

echo "Building: $APP"
echo "From:     $SRC_DIR"
echo "Repo:     $REPO"

# Fresh bundle skeleton
rm -rf "$APP"
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"

# Launcher (must stay executable) + Info.plist
cp "$SRC_DIR/launch" "$APP/Contents/MacOS/launch"
chmod +x "$APP/Contents/MacOS/launch"
cp "$SRC_DIR/Info.plist" "$APP/Contents/Info.plist"

# Icon: render icon.svg -> .iconset -> AppIcon.icns (best-effort).
ICONSET="$SRC_DIR/AppIcon.iconset"
if node "$SRC_DIR/make-icon.mjs" "$ICONSET" >/dev/null 2>&1 && command -v iconutil >/dev/null 2>&1; then
  if iconutil -c icns "$ICONSET" -o "$APP/Contents/Resources/AppIcon.icns" 2>/dev/null; then
    echo "icon:     AppIcon.icns generated"
  else
    echo "icon:     iconutil failed; app will use the generic icon"
  fi
  rm -rf "$ICONSET"
else
  echo "icon:     skipped (sharp or iconutil unavailable); app uses the generic icon"
fi

# Nudge Finder/LaunchServices to notice the new bundle + icon.
touch "$APP"
/usr/bin/plutil -convert xml1 "$APP/Contents/Info.plist" >/dev/null 2>&1 || true

echo ""
echo "Done. '$APP' is on your Desktop."
echo "First run: double-click it. If macOS blocks it (unidentified developer),"
echo "right-click the icon > Open > Open, or run once in Terminal:"
echo "  xattr -dr com.apple.quarantine \"$APP\""
